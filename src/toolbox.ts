import * as Blockly from "blockly/core"

export const toolbox: Blockly.utils.toolbox.ToolboxDefinition = {
  kind: "flyoutToolbox",
  contents: [
    { kind: "block", type: "controls_if" },
    { kind: "block", type: "accent_color" },
  ],
}
