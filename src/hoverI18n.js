const { registerHoverProvider, msg } = require("../utils/vs");
const { plugin, operation } = require("../utils/constant");
const { provideHover } = require("../lib/provideHover")
module.exports = context => {
  context.subscriptions.push(registerHoverProvider("vue", { provideHover }));
};
