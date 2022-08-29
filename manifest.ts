import { Manifest } from "deno-slack-sdk/mod.ts";

export default Manifest({
  name: "deno-blank-template",
  description: "A blank template for building Slack apps with Deno",
  icon: "assets/icon.png",
  functions: [],
  workflows: [],
  outgoingDomains: [],
  botScopes: ["commands", "chat:write", "chat:write.public"],
});
