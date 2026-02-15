const { initUser } = require("./users");

function tryCatch(userId, guild, guess) {
  if (!guild.activeSpawn) return { success: false, message: "No shadow spawned!" };

  const active = guild.activeSpawn;
  const user = initUser(userId);

  if (guess.toLowerCase() === active.id) {
    const userShadowCount = user.shadows[active.id] || 0;
    if (userShadowCount >= active.maxPerUser) {
      return { success: false, message: "You already have max copies of this shadow!" };
    }

    user.shadows[active.id] = userShadowCount + 1;
    user.totalShadows += 1;
    delete guild.activeSpawn;

    return { success: true, message: `✅ You caught ${active.name}! Total shadows: ${user.totalShadows}` };
  } else {
    return { success: false, message: "❌ Wrong guess!" };
  }
}

module.exports = { tryCatch };
