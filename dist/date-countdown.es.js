import { useSlots as x, ref as i, computed as h, onMounted as k, onUnmounted as M, openBlock as c, createElementBlock as v, Fragment as y, createTextVNode as g, toDisplayString as a, unref as _, renderSlot as C } from "vue";
const F = { class: "date-countdown" }, N = {
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
  setup(o) {
    const u = o, w = x(), r = i(100), m = i(void 0), t = i({ days: 1, hours: 1, minutes: 1, seconds: 1 }), n = h(() => {
      const e = (s) => Number(s) > 9 ? s : `0${s}`;
      return {
        days: e(t.value.days),
        hours: e(t.value.hours),
        minutes: e(t.value.minutes),
        seconds: e(t.value.seconds)
      };
    }), p = h(() => {
      const { seconds: e, minutes: s, hours: l, days: d } = t.value;
      return !(e > 0 || s > 0 || l > 0 || d > 0);
    });
    k(() => {
      D(), m.value = setInterval(D, 1e3);
    }), M(f);
    function D() {
      if (p.value)
        return f();
      S(), T();
    }
    function S() {
      const e = Date.parse(new Date(u.endDate).toString()) - Date.parse((/* @__PURE__ */ new Date()).toString());
      e >= 0 ? (t.value.seconds = Math.floor(e / 1e3 % 60), t.value.minutes = Math.floor(e / 1e3 / 60 % 60), t.value.hours = Math.floor(e / (1e3 * 60 * 60) % 24), t.value.days = Math.floor(e / (1e3 * 60 * 60 * 24))) : (t.value.seconds = t.value.minutes = t.value.hours = t.value.days = 0, r.value = 0);
    }
    function T() {
      let e = Date.parse(new Date(u.startDate).toString()), s = Date.parse((/* @__PURE__ */ new Date()).toString()), l = Date.parse(new Date(u.endDate).toString()), d = parseFloat((s - e) / (l - e) * 100).toFixed(2);
      r.value = 100 - d;
    }
    function f() {
      clearTimeout(m.value), r.value = 0;
    }
    return (e, s) => (c(), v("span", F, [
      p.value ? (c(), v(y, { key: 0 }, [
        g(a(o.endText), 1)
      ], 64)) : _(w).default ? C(e.$slots, "default", {
        key: 1,
        days: n.value.days,
        hours: n.value.hours,
        minutes: n.value.minutes,
        seconds: n.value.seconds
      }) : (c(), v(y, { key: 2 }, [
        g(a(n.value.days) + ":" + a(n.value.hours) + ":" + a(n.value.minutes) + ":" + a(n.value.seconds), 1)
      ], 64))
    ]));
  }
}, B = {
  install: (o, u) => o.component("DateCountdown", N)
};
export {
  N as DateCountdown,
  B as default
};
