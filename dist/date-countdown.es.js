import { ref as r, computed as g, onMounted as h, onUnmounted as y, openBlock as m, createElementBlock as p, Fragment as w, createTextVNode as x, toDisplayString as S, renderSlot as T } from "vue";
const M = { class: "date-countdown" }, _ = {
  __name: "DateCountdown",
  props: {
    endDate: {
      type: [Date, Number, String],
      required: !0
    },
    startDate: {
      type: [Date, Number, String],
      default: /* @__PURE__ */ new Date()
    },
    endText: {
      type: String,
      default: "0 seconds"
    }
  },
  setup(a) {
    const n = a, o = r(100), d = r(void 0), e = r({
      days: { text: "d", value: 1 },
      hours: { text: "h", value: 1 },
      minutes: { text: "m", value: 1 },
      seconds: { text: "s", value: 1 }
    }), i = g(() => {
      const { seconds: t, minutes: u, hours: s, days: l } = e.value;
      return !(t.value > 0 || u.value > 0 || s.value > 0 || l.value > 0);
    });
    h(() => {
      v(), d.value = setInterval(v, 1e3);
    }), y(c);
    function v() {
      if (i.value)
        return c();
      D(), f();
    }
    function D() {
      const t = Date.parse(new Date(n.endDate).toString()) - Date.parse((/* @__PURE__ */ new Date()).toString());
      t >= 0 ? (e.value.seconds.value = Math.floor(t / 1e3 % 60), e.value.minutes.value = Math.floor(t / 1e3 / 60 % 60), e.value.hours.value = Math.floor(t / (1e3 * 60 * 60) % 24), e.value.days.value = Math.floor(t / (1e3 * 60 * 60 * 24))) : (e.value.seconds.value = e.value.minutes.value = e.value.hours.value = e.value.days.value = 0, o.value = 0);
    }
    function f() {
      let t = Date.parse(new Date(n.startDate).toString()), u = Date.parse((/* @__PURE__ */ new Date()).toString()), s = Date.parse(new Date(n.endDate).toString()), l = parseFloat((u - t) / (s - t) * 100).toFixed(2);
      o.value = 100 - l;
    }
    function c() {
      clearTimeout(d.value), o.value = 0;
    }
    return (t, u) => (m(), p("span", M, [
      i.value ? (m(), p(w, { key: 0 }, [
        x(S(a.endText), 1)
      ], 64)) : T(t.$slots, "default", {
        key: 1,
        days: e.value.days.value,
        hours: e.value.hours.value,
        minutes: e.value.minutes.value,
        seconds: e.value.seconds.value
      })
    ]));
  }
}, C = {
  install: (a, n) => a.component("DateCountdown", _)
};
export {
  _ as DateCountdown,
  C as default
};
