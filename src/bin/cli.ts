import yargs from "yargs";
import { execPromise } from "../services/childProcess";
import { ACTIONS } from "../utils/constants";
import { normalizeAction } from "../utils/util";

const args = yargs.options({
  action: {
    type: "string",
    demandOption: true,
    alias: "a",
    choices: ["add", "remove", "show", "list"],
    description: "That option describe your action which you want to execute",
  },
  url: { type: "string", demandOption: true, alias: "u" },
  name: { type: "string", demandOption: false, alias: "n" },
}).argv;

console.log(args.action);
const action = normalizeAction(args.action);

switch (action) {
  case ACTIONS.ADD:
    execPromise("3123");
  case ACTIONS.REMOVE:
  case ACTIONS.SHOW:
  case ACTIONS.LIST:
  default:
    break;
}
