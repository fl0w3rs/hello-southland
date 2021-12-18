const db = require('./db.js');
const config = require('./config.js')

Array.prototype.intersects = function (arr) {
  if (!Array.isArray(arr)) return false;
  return this.filter((x) => arr.includes(x));
};

class User {
  authenticated = false;

  async init(cookies) {
    this.authenticated = false;

    const session = await db.forum.core_members_known_devices.findOne({
      attributes: ['member_id'], where: { login_key: cookies[`${config.ipsPrefix}login_key`] || '' }
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

    let groups = [user.member_group_id];
    groups = groups.concat(user.mgroup_others.split(','));

    for (let i = 0; i < groups.length; i += 1) {
      groups[i] = parseInt(groups[i], 10);
      if (!groups[i]) groups.splice(i, 1);
    }

    this.groups = groups;
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
  
    if(status.s_value == '0') {
      canApply = false;
      reason = 'Приём заявок закрыт.';
    }
  
    // if(this.user.member_group_id != 3) {
    //   canApply = false;
    //   reason = 'Вы уже кандидат или участник сообщества.';
    // }

    return { status: canApply, reason }
  }

  isAdmin() {
    const groups = this.groups;
    return groups.intersects(config.adminGroups).length > 0;
  }
}

module.exports = User;