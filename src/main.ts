import * as Blockly from "blockly"
import { toolbox } from "./toolbox"
import { blocks } from "./blocks"
import { cssGenerator } from "./generator"

Blockly.common.defineBlocks(blocks)

const workspace = Blockly.inject("blockly-editor", {
  toolbox,
  renderer: "zelos",
})
workspace.addChangeListener((e) => {
  if (e.isUiEvent || workspace.isDragging()) return
  const code = cssGenerator.workspaceToCode(workspace)
  console.log(code)
})
