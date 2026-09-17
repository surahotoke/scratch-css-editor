import * as Blockly from "blockly/core"

export const cssGenerator = new Blockly.CodeGenerator("CSS")
cssGenerator.scrub_ = function (block, code, thisOnly) {
  const nextBlock = block.nextConnection?.targetBlock()
  if (nextBlock && !thisOnly) {
    return code + this.blockToCode(nextBlock)
  }
  return code
}
const forBlock: typeof cssGenerator.forBlock = {
  accent_color(block) {
    const value = block.getFieldValue("VALUE")
    return `accent-color: ${value};\n`
  },
}

Object.assign(cssGenerator.forBlock, forBlock)
