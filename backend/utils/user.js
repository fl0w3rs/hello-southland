const db = require('./db.js');
const config = require('./config.js')

Array.prototype.intersects = function (arr) {
  if (!Array.isArray(arr)) return false;
  return this.filter((x) => arr.includes(x));
};

class User {
  authenticated = false;

  async init(cookies) {
    const session = await db.forum.core_members_known_devices.findOne({
      attributes: ['member_id'], where: { login_key: cookies[`${config.ipsPrefix}login_key`] || '' }
    });

    if (typeof session !== 'object') {
      return;
    }

    this.session = session;

    const user = await db.forum.core_members.findOne({
      attributes: ['member_id', 'member_group_id', 'name', 'mgroup_others'],
      where: { member_id: session.member_id }
    });

    if (typeof user !== 'object') {
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

  isAdmin() {
    const groups = this.groups;
    return groups.intersects(config.adminGroups).length > 0;
  }
}

module.exports = User;