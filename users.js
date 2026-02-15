const usersData = new Map();

function initUser(id) {
  if (!usersData.has(id)) {
    usersData.set(id, {
      id,
      level: 1,
      exp: 0,
      shadows: {},
      totalShadows: 0,
      battleSlots: 3
    });
  }
  return usersData.get(id);
}

function addExp(userId, amount) {
  const user = initUser(userId);
  user.exp += amount;
  let expToNext = 75 * user.level ** 2 + 200;
  let leveledUp = false;
  while (user.exp >= expToNext) {
    user.exp -= expToNext;
    user.level += 1;
    user.battleSlots = 3 + Math.floor(user.level / 10);
    expToNext = 75 * user.level ** 2 + 200;
    leveledUp = true;
  }
  return { user, leveledUp };
}

module.exports = { usersData, initUser, addExp };
