import { useSlots as x, ref as m, computed as w, onMounted as k, onUnmounted as N, openBlock as r, createElementBlock as l, Fragment as v, createTextVNode as D, toDisplayString as o, unref as C, renderSlot as M, createCommentVNode as b } from "vue";
const B = { class: "date-countdown" }, F = {
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
      type: String
    },
    alwaysShowDays: {
      type: Boolean,
      default: !1
    }
  },
  setup(s) {
    const u = s, g = x(), d = m(100), y = m(void 0), t = m({ days: 1, hours: 1, minutes: 1, seconds: 1 }), n = w(() => {
      const e = (a) => Number(a) > 9 ? a : `0${a}`;
      return {
        days: e(t.value.days),
        hours: e(t.value.hours),
        minutes: e(t.value.minutes),
        seconds: e(t.value.seconds)
      };
    }), f = w(() => {
      const { seconds: e, minutes: a, hours: i, days: c } = t.value;
      return !(e > 0 || a > 0 || i > 0 || c > 0);
    });
    k(() => {
      p(), y.value = setInterval(p, 1e3);
    }), N(h);
    function p() {
      if (f.value)
        return h();
      S(), T();
    }
    function S() {
      const e = Date.parse(new Date(u.endDate).toString()) - Date.parse((/* @__PURE__ */ new Date()).toString());
      e >= 0 ? (t.value.seconds = Math.floor(e / 1e3 % 60), t.value.minutes = Math.floor(e / 1e3 / 60 % 60), t.value.hours = Math.floor(e / (1e3 * 60 * 60) % 24), t.value.days = Math.floor(e / (1e3 * 60 * 60 * 24))) : (t.value.seconds = t.value.minutes = t.value.hours = t.value.days = 0, d.value = 0);
    }
    function T() {
      let e = Date.parse(new Date(u.startDate).toString()), a = Date.parse((/* @__PURE__ */ new Date()).toString()), i = Date.parse(new Date(u.endDate).toString()), c = parseFloat((a - e) / (i - e) * 100).toFixed(2);
      d.value = 100 - c;
    }
    function h() {
      clearTimeout(y.value), d.value = 0;
    }
    return (e, a) => (r(), l("span", B, [
      f.value && s.endText ? (r(), l(v, { key: 0 }, [
        D(o(s.endText), 1)
      ], 64)) : C(g).default ? M(e.$slots, "default", {
        key: 1,
        days: n.value.days,
        hours: n.value.hours,
        minutes: n.value.minutes,
        seconds: n.value.seconds
      }) : (r(), l(v, { key: 2 }, [
        s.alwaysShowDays || Number(t.value.days) ? (r(), l(v, { key: 0 }, [
          D(o(n.value.days) + ":", 1)
        ], 64)) : b("", !0),
        D(o(n.value.hours) + ":" + o(n.value.minutes) + ":" + o(n.value.seconds), 1)
      ], 64))
    ]));
  }
}, I = {
  install: (s, u) => s.component("DateCountdown", F)
};
export {
  F as DateCountdown,
  I as default
};
