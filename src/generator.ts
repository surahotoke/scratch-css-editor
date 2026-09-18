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
  all(block) {
    const value = block.getFieldValue("VALUE")
    return `all: ${value};\n`
  },
  anchor_name(block) {
    const value = block.getFieldValue("VALUE")
    return `anchor-name: ${value};\n`
  },
  anchor_scope(block) {
    const value = block.getFieldValue("VALUE")
    return `anchor-scope: ${value};\n`
  },
  animation(block) {
    const value = block.getFieldValue("VALUE")
    return `animation: ${value};\n`
  },
  animation_composition(block) {
    const value = block.getFieldValue("VALUE")
    return `animation-composition: ${value};\n`
  },
  appearance(block) {
    const value = block.getFieldValue("VALUE")
    return `appearance: ${value};\n`
  },
  aspect_ratio(block) {
    const value = block.getFieldValue("VALUE")
    return `aspect-ratio: ${value};\n`
  },
  backdrop_filter(block) {
    const value = block.getFieldValue("VALUE")
    return `backdrop-filter: ${value};\n`
  },
  backface_visibility(block) {
    const value = block.getFieldValue("VALUE")
    return `backface-visibility: ${value};\n`
  },
  background(block) {
    const value = block.getFieldValue("VALUE")
    return `background: ${value};\n`
  },
  background_blend_mode(block) {
    const value = block.getFieldValue("VALUE")
    return `background-blend-mode: ${value};\n`
  },
  border(block) {
    const value = block.getFieldValue("VALUE")
    return `border: ${value};\n`
  },
  border_collapse(block) {
    const value = block.getFieldValue("VALUE")
    return `border-collapse: ${value};\n`
  },
  border_image(block) {
    const value = block.getFieldValue("VALUE")
    return `border-image: ${value};\n`
  },
  border_radius(block) {
    const value = block.getFieldValue("VALUE")
    return `border-radius: ${value};\n`
  },
  border_spacing(block) {
    const value = block.getFieldValue("VALUE")
    return `border-spacing: ${value};\n`
  },
  box_shadow(block) {
    const value = block.getFieldValue("VALUE")
    return `box-shadow: ${value};\n`
  },
  box_sizing(block) {
    const value = block.getFieldValue("VALUE")
    return `box-sizing: ${value};\n`
  },
  break_after(block) {
    const value = block.getFieldValue("VALUE")
    return `break-after: ${value};\n`
  },
  break_before(block) {
    const value = block.getFieldValue("VALUE")
    return `break-before: ${value};\n`
  },
  break_inside(block) {
    const value = block.getFieldValue("VALUE")
    return `break-inside: ${value};\n`
  },
  caption_side(block) {
    const value = block.getFieldValue("VALUE")
    return `caption-side: ${value};\n`
  },
  caret_color(block) {
    const value = block.getFieldValue("VALUE")
    return `caret-color: ${value};\n`
  },
  clear(block) {
    const value = block.getFieldValue("VALUE")
    return `clear: ${value};\n`
  },
  clip_path(block) {
    const value = block.getFieldValue("VALUE")
    return `clip-path: ${value};\n`
  },
  color(block) {
    const value = block.getFieldValue("VALUE")
    return `color: ${value};\n`
  },
  color_scheme(block) {
    const value = block.getFieldValue("VALUE")
    return `color-scheme: ${value};\n`
  },
  column_fill(block) {
    const value = block.getFieldValue("VALUE")
    return `column-fill: ${value};\n`
  },
  column_rule(block) {
    const value = block.getFieldValue("VALUE")
    return `column-rule: ${value};\n`
  },
  column_span(block) {
    const value = block.getFieldValue("VALUE")
    return `column-span: ${value};\n`
  },
  columns(block) {
    const value = block.getFieldValue("VALUE")
    return `columns: ${value};\n`
  },
  contain(block) {
    const value = block.getFieldValue("VALUE")
    return `contain: ${value};\n`
  },
  contain_intrinsic_size(block) {
    const value = block.getFieldValue("VALUE")
    return `contain-intrinsic-size: ${value};\n`
  },
  container(block) {
    const value = block.getFieldValue("VALUE")
    return `container: ${value};\n`
  },
  content(block) {
    const value = block.getFieldValue("VALUE")
    return `content: ${value};\n`
  },
  content_visibility(block) {
    const value = block.getFieldValue("VALUE")
    return `content-visibility: ${value};\n`
  },
  counter_increment(block) {
    const value = block.getFieldValue("VALUE")
    return `counter-increment: ${value};\n`
  },
  counter_reset(block) {
    const value = block.getFieldValue("VALUE")
    return `counter-reset: ${value};\n`
  },
  counter_set(block) {
    const value = block.getFieldValue("VALUE")
    return `counter-set: ${value};\n`
  },
  cursor(block) {
    const value = block.getFieldValue("VALUE")
    return `cursor: ${value};\n`
  },
  direction(block) {
    const value = block.getFieldValue("VALUE")
    return `direction: ${value};\n`
  },
  display(block) {
    const value = block.getFieldValue("VALUE")
    return `display: ${value};\n`
  },
  empty_cells(block) {
    const value = block.getFieldValue("VALUE")
    return `empty-cells: ${value};\n`
  },
  field_sizing(block) {
    const value = block.getFieldValue("VALUE")
    return `field-sizing: ${value};\n`
  },
  filter(block) {
    const value = block.getFieldValue("VALUE")
    return `filter: ${value};\n`
  },
  flex(block) {
    const value = block.getFieldValue("VALUE")
    return `flex: ${value};\n`
  },
  flex_flow(block) {
    const value = block.getFieldValue("VALUE")
    return `flex-flow: ${value};\n`
  },
  float(block) {
    const value = block.getFieldValue("VALUE")
    return `float: ${value};\n`
  },
  font(block) {
    const value = block.getFieldValue("VALUE")
    return `font: ${value};\n`
  },
  font_feature_settings(block) {
    const value = block.getFieldValue("VALUE")
    return `font-feature-settings: ${value};\n`
  },
  font_kerning(block) {
    const value = block.getFieldValue("VALUE")
    return `font-kerning: ${value};\n`
  },
  font_optical_sizing(block) {
    const value = block.getFieldValue("VALUE")
    return `font-optical-sizing: ${value};\n`
  },
  font_palette(block) {
    const value = block.getFieldValue("VALUE")
    return `font-palette: ${value};\n`
  },
  font_size_adjust(block) {
    const value = block.getFieldValue("VALUE")
    return `font-size-adjust: ${value};\n`
  },
  font_synthesis(block) {
    const value = block.getFieldValue("VALUE")
    return `font-synthesis: ${value};\n`
  },
  font_variation_settings(block) {
    const value = block.getFieldValue("VALUE")
    return `font-variation-settings: ${value};\n`
  },
  gap(block) {
    const value = block.getFieldValue("VALUE")
    return `gap: ${value};\n`
  },
  grid(block) {
    const value = block.getFieldValue("VALUE")
    return `grid: ${value};\n`
  },
  grid_area(block) {
    const value = block.getFieldValue("VALUE")
    return `grid-area: ${value};\n`
  },
  height(block) {
    const value = block.getFieldValue("VALUE")
    return `height: ${value};\n`
  },
  hyphenate_character(block) {
    const value = block.getFieldValue("VALUE")
    return `hyphenate-character: ${value};\n`
  },
  hyphens(block) {
    const value = block.getFieldValue("VALUE")
    return `hyphens: ${value};\n`
  },
  image_orientation(block) {
    const value = block.getFieldValue("VALUE")
    return `image-orientation: ${value};\n`
  },
  image_rendering(block) {
    const value = block.getFieldValue("VALUE")
    return `image-rendering: ${value};\n`
  },
  inset(block) {
    const value = block.getFieldValue("VALUE")
    return `inset: ${value};\n`
  },
  isolation(block) {
    const value = block.getFieldValue("VALUE")
    return `isolation: ${value};\n`
  },
  letter_spacing(block) {
    const value = block.getFieldValue("VALUE")
    return `letter-spacing: ${value};\n`
  },
  line_break(block) {
    const value = block.getFieldValue("VALUE")
    return `line-break: ${value};\n`
  },
  list_style(block) {
    const value = block.getFieldValue("VALUE")
    return `list-style: ${value};\n`
  },
  margin(block) {
    const value = block.getFieldValue("VALUE")
    return `margin: ${value};\n`
  },
  mask(block) {
    const value = block.getFieldValue("VALUE")
    return `mask: ${value};\n`
  },
  max_height(block) {
    const value = block.getFieldValue("VALUE")
    return `max-height: ${value};\n`
  },
  max_width(block) {
    const value = block.getFieldValue("VALUE")
    return `max-width: ${value};\n`
  },
  min_height(block) {
    const value = block.getFieldValue("VALUE")
    return `min-height: ${value};\n`
  },
  min_width(block) {
    const value = block.getFieldValue("VALUE")
    return `min-width: ${value};\n`
  },
  mix_blend_mode(block) {
    const value = block.getFieldValue("VALUE")
    return `mix-blend-mode: ${value};\n`
  },
  object_fit(block) {
    const value = block.getFieldValue("VALUE")
    return `object-fit: ${value};\n`
  },
  object_position(block) {
    const value = block.getFieldValue("VALUE")
    return `object-position: ${value};\n`
  },
  offset(block) {
    const value = block.getFieldValue("VALUE")
    return `offset: ${value};\n`
  },
  opacity(block) {
    const value = block.getFieldValue("VALUE")
    return `opacity: ${value};\n`
  },
  order(block) {
    const value = block.getFieldValue("VALUE")
    return `order: ${value};\n`
  },
  outline(block) {
    const value = block.getFieldValue("VALUE")
    return `outline: ${value};\n`
  },
  outline_offset(block) {
    const value = block.getFieldValue("VALUE")
    return `outline-offset: ${value};\n`
  },
  overflow(block) {
    const value = block.getFieldValue("VALUE")
    return `overflow: ${value};\n`
  },
  overflow_anchor(block) {
    const value = block.getFieldValue("VALUE")
    return `overflow-anchor: ${value};\n`
  },
  overflow_wrap(block) {
    const value = block.getFieldValue("VALUE")
    return `overflow-wrap: ${value};\n`
  },
  overscroll_behavior(block) {
    const value = block.getFieldValue("VALUE")
    return `overscroll-behavior: ${value};\n`
  },
  padding(block) {
    const value = block.getFieldValue("VALUE")
    return `padding: ${value};\n`
  },
  page(block) {
    const value = block.getFieldValue("VALUE")
    return `page: ${value};\n`
  },
  paint_order(block) {
    const value = block.getFieldValue("VALUE")
    return `paint-order: ${value};\n`
  },
  perspective(block) {
    const value = block.getFieldValue("VALUE")
    return `perspective: ${value};\n`
  },
  perspective_origin(block) {
    const value = block.getFieldValue("VALUE")
    return `perspective-origin: ${value};\n`
  },
  place_content(block) {
    const value = block.getFieldValue("VALUE")
    return `place-content: ${value};\n`
  },
  place_items(block) {
    const value = block.getFieldValue("VALUE")
    return `place-items: ${value};\n`
  },
  place_self(block) {
    const value = block.getFieldValue("VALUE")
    return `place-self: ${value};\n`
  },
  pointer_events(block) {
    const value = block.getFieldValue("VALUE")
    return `pointer-events: ${value};\n`
  },
  position(block) {
    const value = block.getFieldValue("VALUE")
    return `position: ${value};\n`
  },
  position_anchor(block) {
    const value = block.getFieldValue("VALUE")
    return `position-anchor: ${value};\n`
  },
  position_area(block) {
    const value = block.getFieldValue("VALUE")
    return `position-area: ${value};\n`
  },
  position_try(block) {
    const value = block.getFieldValue("VALUE")
    return `position-try: ${value};\n`
  },
  position_visibility(block) {
    const value = block.getFieldValue("VALUE")
    return `position-visibility: ${value};\n`
  },
  print_color_adjust(block) {
    const value = block.getFieldValue("VALUE")
    return `print-color-adjust: ${value};\n`
  },
  quotes(block) {
    const value = block.getFieldValue("VALUE")
    return `quotes: ${value};\n`
  },
  resize(block) {
    const value = block.getFieldValue("VALUE")
    return `resize: ${value};\n`
  },
  rotate(block) {
    const value = block.getFieldValue("VALUE")
    return `rotate: ${value};\n`
  },
  ruby_align(block) {
    const value = block.getFieldValue("VALUE")
    return `ruby-align: ${value};\n`
  },
  ruby_position(block) {
    const value = block.getFieldValue("VALUE")
    return `ruby-position: ${value};\n`
  },
  scale(block) {
    const value = block.getFieldValue("VALUE")
    return `scale: ${value};\n`
  },
  scroll_behavior(block) {
    const value = block.getFieldValue("VALUE")
    return `scroll-behavior: ${value};\n`
  },
  scroll_margin(block) {
    const value = block.getFieldValue("VALUE")
    return `scroll-margin: ${value};\n`
  },
  scroll_padding(block) {
    const value = block.getFieldValue("VALUE")
    return `scroll-padding: ${value};\n`
  },
  scroll_snap_align(block) {
    const value = block.getFieldValue("VALUE")
    return `scroll-snap-align: ${value};\n`
  },
  scroll_snap_stop(block) {
    const value = block.getFieldValue("VALUE")
    return `scroll-snap-stop: ${value};\n`
  },
  scroll_snap_type(block) {
    const value = block.getFieldValue("VALUE")
    return `scroll-snap-type: ${value};\n`
  },
  scrollbar_color(block) {
    const value = block.getFieldValue("VALUE")
    return `scrollbar-color: ${value};\n`
  },
  scrollbar_gutter(block) {
    const value = block.getFieldValue("VALUE")
    return `scrollbar-gutter: ${value};\n`
  },
  scrollbar_width(block) {
    const value = block.getFieldValue("VALUE")
    return `scrollbar-width: ${value};\n`
  },
  shape_image_threshold(block) {
    const value = block.getFieldValue("VALUE")
    return `shape-image-threshold: ${value};\n`
  },
  shape_margin(block) {
    const value = block.getFieldValue("VALUE")
    return `shape-margin: ${value};\n`
  },
  shape_outside(block) {
    const value = block.getFieldValue("VALUE")
    return `shape-outside: ${value};\n`
  },
  tab_size(block) {
    const value = block.getFieldValue("VALUE")
    return `tab-size: ${value};\n`
  },
  table_layout(block) {
    const value = block.getFieldValue("VALUE")
    return `table-layout: ${value};\n`
  },
  text_align(block) {
    const value = block.getFieldValue("VALUE")
    return `text-align: ${value};\n`
  },
  text_align_last(block) {
    const value = block.getFieldValue("VALUE")
    return `text-align-last: ${value};\n`
  },
  text_autospace(block) {
    const value = block.getFieldValue("VALUE")
    return `text-autospace: ${value};\n`
  },
  text_box(block) {
    const value = block.getFieldValue("VALUE")
    return `text-box: ${value};\n`
  },
  text_combine_upright(block) {
    const value = block.getFieldValue("VALUE")
    return `text-combine-upright: ${value};\n`
  },
  text_decoration(block) {
    const value = block.getFieldValue("VALUE")
    return `text-decoration: ${value};\n`
  },
  text_decoration_skip_ink(block) {
    const value = block.getFieldValue("VALUE")
    return `text-decoration-skip-ink: ${value};\n`
  },
  text_emphasis(block) {
    const value = block.getFieldValue("VALUE")
    return `text-emphasis: ${value};\n`
  },
  text_emphasis_position(block) {
    const value = block.getFieldValue("VALUE")
    return `text-emphasis-position: ${value};\n`
  },
  text_indent(block) {
    const value = block.getFieldValue("VALUE")
    return `text-indent: ${value};\n`
  },
  text_orientation(block) {
    const value = block.getFieldValue("VALUE")
    return `text-orientation: ${value};\n`
  },
  text_overflow(block) {
    const value = block.getFieldValue("VALUE")
    return `text-overflow: ${value};\n`
  },
  text_rendering(block) {
    const value = block.getFieldValue("VALUE")
    return `text-rendering: ${value};\n`
  },
  text_shadow(block) {
    const value = block.getFieldValue("VALUE")
    return `text-shadow: ${value};\n`
  },
  text_transform(block) {
    const value = block.getFieldValue("VALUE")
    return `text-transform: ${value};\n`
  },
  text_underline_offset(block) {
    const value = block.getFieldValue("VALUE")
    return `text-underline-offset: ${value};\n`
  },
  text_underline_position(block) {
    const value = block.getFieldValue("VALUE")
    return `text-underline-position: ${value};\n`
  },
  text_wrap(block) {
    const value = block.getFieldValue("VALUE")
    return `text-wrap: ${value};\n`
  },
  touch_action(block) {
    const value = block.getFieldValue("VALUE")
    return `touch-action: ${value};\n`
  },
  transform(block) {
    const value = block.getFieldValue("VALUE")
    return `transform: ${value};\n`
  },
  transform_box(block) {
    const value = block.getFieldValue("VALUE")
    return `transform-box: ${value};\n`
  },
  transform_origin(block) {
    const value = block.getFieldValue("VALUE")
    return `transform-origin: ${value};\n`
  },
  transform_style(block) {
    const value = block.getFieldValue("VALUE")
    return `transform-style: ${value};\n`
  },
  transition(block) {
    const value = block.getFieldValue("VALUE")
    return `transition: ${value};\n`
  },
  translate(block) {
    const value = block.getFieldValue("VALUE")
    return `translate: ${value};\n`
  },
  unicode_bidi(block) {
    const value = block.getFieldValue("VALUE")
    return `unicode-bidi: ${value};\n`
  },
  vertical_align(block) {
    const value = block.getFieldValue("VALUE")
    return `vertical-align: ${value};\n`
  },
  view_transition_class(block) {
    const value = block.getFieldValue("VALUE")
    return `view-transition-class: ${value};\n`
  },
  view_transition_name(block) {
    const value = block.getFieldValue("VALUE")
    return `view-transition-name: ${value};\n`
  },
  visibility(block) {
    const value = block.getFieldValue("VALUE")
    return `visibility: ${value};\n`
  },
  white_space(block) {
    const value = block.getFieldValue("VALUE")
    return `white-space: ${value};\n`
  },
  width(block) {
    const value = block.getFieldValue("VALUE")
    return `width: ${value};\n`
  },
  will_change(block) {
    const value = block.getFieldValue("VALUE")
    return `will-change: ${value};\n`
  },
  word_break(block) {
    const value = block.getFieldValue("VALUE")
    return `word-break: ${value};\n`
  },
  word_spacing(block) {
    const value = block.getFieldValue("VALUE")
    return `word-spacing: ${value};\n`
  },
  writing_mode(block) {
    const value = block.getFieldValue("VALUE")
    return `writing-mode: ${value};\n`
  },
  z_index(block) {
    const value = block.getFieldValue("VALUE")
    return `z-index: ${value};\n`
  },
  zoom(block) {
    const value = block.getFieldValue("VALUE")
    return `zoom: ${value};\n`
  },
}

Object.assign(cssGenerator.forBlock, forBlock)
