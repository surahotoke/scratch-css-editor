import * as Blockly from "blockly/core"

export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray([
  {
    type: "accent_color",
    message0: "accent-color: %1;",
    args0: [{ type: "field_input", name: "VALUE", text: "" }],
    previousStatement: null,
    nextStatement: null,
    style: "",
    tooltip: "",
  },
] satisfies Blockly.JsonBlockDefinition[])
