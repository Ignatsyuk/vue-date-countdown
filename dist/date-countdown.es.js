import { useSlots as S, ref as v, computed as x, onMounted as T, onUnmounted as k, openBlock as d, createElementBlock as i, Fragment as f, createTextVNode as h, toDisplayString as a, unref as M, renderSlot as _ } from "vue";
const C = { class: "date-countdown" }, F = {
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
  setup(n) {
    const u = n, g = S(), o = v(100), c = v(void 0), e = v({
      days: { text: "d", value: 1 },
      hours: { text: "h", value: 1 },
      minutes: { text: "m", value: 1 },
      seconds: { text: "s", value: 1 }
    }), m = x(() => {
      const { seconds: t, minutes: s, hours: l, days: r } = e.value;
      return !(t.value > 0 || s.value > 0 || l.value > 0 || r.value > 0);
    });
    T(() => {
      p(), c.value = setInterval(p, 1e3);
    }), k(D);
    function p() {
      if (m.value)
        return D();
      y(), w();
    }
    function y() {
      const t = Date.parse(new Date(u.endDate).toString()) - Date.parse((/* @__PURE__ */ new Date()).toString());
      t >= 0 ? (e.value.seconds.value = Math.floor(t / 1e3 % 60), e.value.minutes.value = Math.floor(t / 1e3 / 60 % 60), e.value.hours.value = Math.floor(t / (1e3 * 60 * 60) % 24), e.value.days.value = Math.floor(t / (1e3 * 60 * 60 * 24))) : (e.value.seconds.value = e.value.minutes.value = e.value.hours.value = e.value.days.value = 0, o.value = 0);
    }
    function w() {
      let t = Date.parse(new Date(u.startDate).toString()), s = Date.parse((/* @__PURE__ */ new Date()).toString()), l = Date.parse(new Date(u.endDate).toString()), r = parseFloat((s - t) / (l - t) * 100).toFixed(2);
      o.value = 100 - r;
    }
    function D() {
      clearTimeout(c.value), o.value = 0;
    }
    return (t, s) => (d(), i("span", C, [
      m.value ? (d(), i(f, { key: 0 }, [
        h(a(n.endText), 1)
      ], 64)) : M(g).default ? _(t.$slots, "default", {
        key: 1,
        days: e.value.days.value,
        hours: e.value.hours.value,
        minutes: e.value.minutes.value,
        seconds: e.value.seconds.value
      }) : (d(), i(f, { key: 2 }, [
        h(a(e.value.days.value) + ":" + a(e.value.hours.value) + ":" + a(e.value.minutes.value) + ":" + a(e.value.seconds.value), 1)
      ], 64))
    ]));
  }
}, N = {
  install: (n, u) => n.component("DateCountdown", F)
};
export {
  F as DateCountdown,
  N as default
};
