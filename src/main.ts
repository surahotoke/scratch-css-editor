import * as Blockly from "blockly"
import { toolbox } from "./toolbox"

const workspace = Blockly.inject("blockly-editor", {
  toolbox,
  renderer: "zelos",
})
