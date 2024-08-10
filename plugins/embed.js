/** @format
 *
 * Kyoko By Doubiest
 * Version: 6.0.0-beta
 * © 2024 Nemesis-Dev
 */

const { EmbedBuilder } = require("discord.js");

module.exports = (color) => {
  class embed extends EmbedBuilder {
    constructor() {
      super({});
      this.setColor(color);
      return this;
    }
    title = (title) => {
      this.setTitle(title);
      return this;
    };
    desc = (text) => {
      this.setDescription(text);
      return this;
    };
    thumb = (url) => {
      this.setThumbnail(url);
      return this;
    };
    img = (uri) => {
      this.setImage(uri);
      return this;
    };
  }
  return embed;
};
