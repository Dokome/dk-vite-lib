var DokomUI = function(exports, vue) {
  "use strict";
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
    return vue.openBlock(), vue.createElementBlock("button", null, "SFC BUTTON");
  }
  const DButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
  const entry = {
    install(app) {
      app.component(DButton.name, DButton);
    }
  };
  exports.DButton = DButton;
  exports.default = entry;
  Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
  return exports;
}({}, Vue);
