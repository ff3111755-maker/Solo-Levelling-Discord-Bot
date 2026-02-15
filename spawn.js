const shadows = require("./shadows");

function spawnShadow(guild) {
  if (!guild.messageCount) guild.messageCount = 0;
  guild.messageCount += 1;

  if (guild.messageCount % 30 === 0) {
    const randomShadow = shadows[Math.floor(Math.random() * shadows.length)];
    guild.activeSpawn = { ...randomShadow };
    return guild.activeSpawn;
  }
  return null;
}

module.exports = { spawnShadow };
