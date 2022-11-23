import { openBlock, createElementBlock } from "vue";
const _sfc_main = {
  name: "DButton"
};
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", null, "SFC BUTTON");
}
const DButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const entry = {
  install(app) {
    app.component(DButton.name, DButton);
  }
};
export {
  DButton,
  entry as default
};
