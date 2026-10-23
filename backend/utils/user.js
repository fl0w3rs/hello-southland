const db = require('./db.js');
const config = require('./config.js')

class User {
  authenticated = false;

  groups = [];

  async init(cookies) {
    this.authenticated = false;

    // cookie-parser turns "j:{...}" cookies into objects, so only accept a plain string
    const loginKey = cookies[`${config.ipsPrefix}login_key`];
    if (typeof loginKey !== 'string' || loginKey === '') {
      return;
    }

    const session = await db.forum.core_members_known_devices.findOne({
      attributes: ['member_id'], where: { login_key: loginKey }
    });

    if (!session) {
      return;
    }

    this.session = session;

    const user = await db.forum.core_members.findOne({
      attributes: ['member_id', 'member_group_id', 'name', 'mgroup_others', 'pp_main_photo'],
      where: { member_id: session?.member_id }
    });

    if (!user) {
      return;
    }

    this.user = user;
    this.authenticated = true;

    this.groups = [user.member_group_id, ...(user.mgroup_others || '').split(',')]
      .map(Number)
      .filter(Boolean);
  }

  async canApply() {
    if(!this.authenticated) return { status: false, reason: 'Вы не авторизованы.' };

    const status = await db.hello.Settings.findOne({ where: {
      s_key: 'applyStatus'
    } })
  
    const applications = await db.hello.Application.findAll({ where: {
      userId: this.user.member_id,
      status: 'processing',
    } })
  
    let canApply = true;
    let reason = '';
  
    if(applications.length > 0) {
      canApply = false;
      reason = 'У Вас уже есть активная заявка.';
    }
  
    if(!status || status.s_value == '0') {
      canApply = false;
      reason = 'Приём заявок закрыт.';
    }
  
    return { status: canApply, reason }
  }

  isAdmin() {
    return this.groups.some((group) => config.adminGroups.includes(group));
  }
}

module.exports = User;