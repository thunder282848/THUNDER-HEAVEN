/** @format
 *
 * Kyoko By Doubiest
 * Version: 6.0.0-beta
 * © 2024 Nemesis-Dev
 */

const { readdirSync } = require("fs");
module.exports = async (client) => {
  let count = 0;
  readdirSync("./events/node").forEach((file) => {
    const event = require(`${process.cwd()}/events/node/${file}`);
    client.manager.shoukaku.on(event.name, (...args) =>
      event.run(client, ...args),
    );
    count++;
  });
  return count;
};
