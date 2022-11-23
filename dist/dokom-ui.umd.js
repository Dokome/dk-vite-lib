(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("vue")) : typeof define === "function" && define.amd ? define(["exports", "vue"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.DokomUI = {}, global.Vue));
})(this, function(exports2, vue) {
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
  exports2.DButton = DButton;
  exports2.default = entry;
  Object.defineProperties(exports2, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
});
