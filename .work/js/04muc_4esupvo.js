(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  61592,
  (e, t, a) => {
    "use strict";
    (Object.defineProperty(a, "__esModule", { value: !0 }),
      Object.defineProperty(a, "LoadableContext", {
        enumerable: !0,
        get: function () {
          return s;
        },
      }));
    let s = e.r(41705)._(e.r(91788)).default.createContext(null);
  },
  52414,
  (e, t, a) => {
    "use strict";
    (Object.defineProperty(a, "__esModule", { value: !0 }),
      Object.defineProperty(a, "default", {
        enumerable: !0,
        get: function () {
          return m;
        },
      }));
    let s = e.r(41705)._(e.r(91788)),
      r = e.r(61592),
      i = [],
      n = [],
      l = !1;
    function o(e) {
      let t = e(),
        a = { loading: !0, loaded: null, error: null };
      return (
        (a.promise = t
          .then((e) => ((a.loading = !1), (a.loaded = e), e))
          .catch((e) => {
            throw ((a.loading = !1), (a.error = e), e);
          })),
        a
      );
    }
    class d {
      constructor(e, t) {
        ((this._loadFn = e), (this._opts = t), (this._callbacks = new Set()), (this._delay = null), (this._timeout = null), this.retry());
      }
      promise() {
        return this._res.promise;
      }
      retry() {
        (this._clearTimeouts(), (this._res = this._loadFn(this._opts.loader)), (this._state = { pastDelay: !1, timedOut: !1 }));
        let { _res: e, _opts: t } = this;
        (e.loading &&
          ("number" == typeof t.delay &&
            (0 === t.delay
              ? (this._state.pastDelay = !0)
              : (this._delay = setTimeout(() => {
                  this._update({ pastDelay: !0 });
                }, t.delay))),
          "number" == typeof t.timeout &&
            (this._timeout = setTimeout(() => {
              this._update({ timedOut: !0 });
            }, t.timeout))),
          this._res.promise
            .then(() => {
              (this._update({}), this._clearTimeouts());
            })
            .catch((e) => {
              (this._update({}), this._clearTimeouts());
            }),
          this._update({}));
      }
      _update(e) {
        ((this._state = { ...this._state, error: this._res.error, loaded: this._res.loaded, loading: this._res.loading, ...e }),
          this._callbacks.forEach((e) => e()));
      }
      _clearTimeouts() {
        (clearTimeout(this._delay), clearTimeout(this._timeout));
      }
      getCurrentValue() {
        return this._state;
      }
      subscribe(e) {
        return (
          this._callbacks.add(e),
          () => {
            this._callbacks.delete(e);
          }
        );
      }
    }
    function c(t) {
      return (function (t, a) {
        let o = Object.assign({ loader: null, loading: null, delay: 200, timeout: null, webpack: null, modules: null }, a),
          c = null;
        function u() {
          if (!c) {
            let e = new d(t, o);
            c = {
              getCurrentValue: e.getCurrentValue.bind(e),
              subscribe: e.subscribe.bind(e),
              retry: e.retry.bind(e),
              promise: e.promise.bind(e),
            };
          }
          return c.promise();
        }
        if (("u" < typeof window && i.push(u), !l && "u" > typeof window)) {
          let t = o.webpack && "function" == typeof e.t.resolveWeak ? o.webpack() : o.modules;
          t &&
            n.push((e) => {
              for (let a of t) if (e.includes(a)) return u();
            });
        }
        function m(e, t) {
          let a;
          (u(),
            (a = s.default.useContext(r.LoadableContext)) &&
              Array.isArray(o.modules) &&
              o.modules.forEach((e) => {
                a(e);
              }));
          let i = s.default.useSyncExternalStore(c.subscribe, c.getCurrentValue, c.getCurrentValue);
          return (
            s.default.useImperativeHandle(t, () => ({ retry: c.retry }), []),
            s.default.useMemo(() => {
              var t;
              return i.loading || i.error
                ? s.default.createElement(o.loading, {
                    isLoading: i.loading,
                    pastDelay: i.pastDelay,
                    timedOut: i.timedOut,
                    error: i.error,
                    retry: c.retry,
                  })
                : i.loaded
                  ? s.default.createElement((t = i.loaded) && t.default ? t.default : t, e)
                  : null;
            }, [e, i])
          );
        }
        return ((m.preload = () => u()), (m.displayName = "LoadableComponent"), s.default.forwardRef(m));
      })(o, t);
    }
    function u(e, t) {
      let a = [];
      for (; e.length;) {
        let s = e.pop();
        a.push(s(t));
      }
      return Promise.all(a).then(() => {
        if (e.length) return u(e, t);
      });
    }
    ((c.preloadAll = () =>
      new Promise((e, t) => {
        u(i).then(e, t);
      })),
      (c.preloadReady = (e = []) =>
        new Promise((t) => {
          let a = () => ((l = !0), t());
          u(n, e).then(a, a);
        })),
      "u" > typeof window && (window.__NEXT_PRELOADREADY = c.preloadReady));
    let m = c;
  },
  25167,
  (e, t, a) => {
    "use strict";
    Object.defineProperty(a, "__esModule", { value: !0 });
    var s = {
      default: function () {
        return u;
      },
      noSSR: function () {
        return c;
      },
    };
    for (var r in s) Object.defineProperty(a, r, { enumerable: !0, get: s[r] });
    let i = e.r(41705),
      n = e.r(91398);
    e.r(91788);
    let l = i._(e.r(52414)),
      o = "u" < typeof window;
    function d(e) {
      return { default: e?.default || e };
    }
    function c(e, t) {
      if ((delete t.webpack, delete t.modules, !o)) return e(t);
      let a = t.loading;
      return () => (0, n.jsx)(a, { error: null, isLoading: !0, pastDelay: !1, timedOut: !1 });
    }
    function u(e, t) {
      let a = l.default,
        s = { loading: ({ error: e, isLoading: t, pastDelay: a }) => null };
      e instanceof Promise ? (s.loader = () => e) : "function" == typeof e ? (s.loader = e) : "object" == typeof e && (s = { ...s, ...e });
      let r = (s = { ...s, ...t }).loader;
      return (s.loadableGenerated && ((s = { ...s, ...s.loadableGenerated }), delete s.loadableGenerated),
      "boolean" != typeof s.ssr || s.ssr)
        ? a({ ...s, loader: () => (null != r ? r().then(d) : Promise.resolve(d(() => null))) })
        : (delete s.webpack, delete s.modules, c(a, s));
    }
    ("function" == typeof a.default || ("object" == typeof a.default && null !== a.default)) &&
      void 0 === a.default.__esModule &&
      (Object.defineProperty(a.default, "__esModule", { value: !0 }), Object.assign(a.default, a), (t.exports = a.default));
  },
  68489,
  (e, t, a) => {
    t.exports = e.r(25167);
  },
  87856,
  (e) => {
    "use strict";
    var t = e.i(91398),
      a = e.i(5863),
      s = e.i(41565),
      r = e.i(26019),
      i = e.i(91788),
      n = e.i(69547);
    let l = (0, n.default)("Moon", [["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]]),
      o = (0, n.default)("Sun", [
        ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
        ["path", { d: "M12 2v2", key: "tus03m" }],
        ["path", { d: "M12 20v2", key: "1lh1kg" }],
        ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
        ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
        ["path", { d: "M2 12h2", key: "1t8f8n" }],
        ["path", { d: "M20 12h2", key: "1q8mjw" }],
        ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
        ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }],
      ]);
    e.i(50461);
    var d = e.i(11535),
      c = e.i(57126),
      u = e.i(39016),
      m = e.i(62946),
      h = e.i(51723),
      x = i,
      p = e.i(12600);
    function f(e, t) {
      if ("function" == typeof e) return e(t);
      null != e && (e.current = t);
    }
    class g extends x.Component {
      getSnapshotBeforeUpdate(e) {
        let t = this.props.childRef.current;
        if ((0, h.isHTMLElement)(t) && e.isPresent && !this.props.isPresent && !1 !== this.props.pop) {
          let e = t.offsetParent,
            a = ((0, h.isHTMLElement)(e) && e.offsetWidth) || 0,
            s = ((0, h.isHTMLElement)(e) && e.offsetHeight) || 0,
            r = getComputedStyle(t),
            i = this.props.sizeRef.current;
          ((i.height = parseFloat(r.height)),
            (i.width = parseFloat(r.width)),
            (i.top = t.offsetTop),
            (i.left = t.offsetLeft),
            (i.right = a - i.width - i.left),
            (i.bottom = s - i.height - i.top),
            (i.direction = r.direction));
        }
        return null;
      }
      componentDidUpdate() {}
      render() {
        return this.props.children;
      }
    }
    function y({ children: e, isPresent: a, anchorX: s, anchorY: r, root: n, pop: l }) {
      let o = (0, x.useId)(),
        d = (0, x.useRef)(null),
        c = (0, x.useRef)({ width: 0, height: 0, top: 0, left: 0, right: 0, bottom: 0, direction: "ltr" }),
        { nonce: u } = (0, x.useContext)(p.MotionConfigContext),
        m = (function (...e) {
          return i.useCallback(
            (function (...e) {
              return (t) => {
                let a = !1,
                  s = e.map((e) => {
                    let s = f(e, t);
                    return (a || "function" != typeof s || (a = !0), s);
                  });
                if (a)
                  return () => {
                    for (let t = 0; t < s.length; t++) {
                      let a = s[t];
                      "function" == typeof a ? a() : f(e[t], null);
                    }
                  };
              };
            })(...e),
            e,
          );
        })(d, !1 !== l ? (e.props?.ref ?? e?.ref) : void 0);
      return (
        (0, x.useInsertionEffect)(() => {
          let { width: e, height: t, top: i, left: m, right: h, bottom: x, direction: p } = c.current;
          if (a || !1 === l || !d.current || !e || !t) return;
          let f = "rtl" === p,
            g = "left" === s ? (f ? `right: ${h}` : `left: ${m}`) : f ? `left: ${m}` : `right: ${h}`,
            y = "bottom" === r ? `bottom: ${x}` : `top: ${i}`;
          d.current.dataset.motionPopId = o;
          let b = document.createElement("style");
          u && (b.nonce = u);
          let v = n ?? document.head;
          return (
            v.appendChild(b),
            b.sheet &&
              b.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${t}px !important;
            ${g}px !important;
            ${y}px !important;
          }
        `),
            () => {
              (d.current?.removeAttribute("data-motion-pop-id"), v.contains(b) && v.removeChild(b));
            }
          );
        }, [a]),
        (0, t.jsx)(g, { isPresent: a, childRef: d, sizeRef: c, pop: l, children: !1 === l ? e : x.cloneElement(e, { ref: m }) })
      );
    }
    let b = ({
      children: e,
      initial: a,
      isPresent: s,
      onExitComplete: r,
      custom: n,
      presenceAffectsLayout: l,
      mode: o,
      anchorX: d,
      anchorY: h,
      root: x,
    }) => {
      let p = (0, c.useConstant)(v),
        f = (0, i.useId)(),
        g = (0, i.useRef)(s),
        b = (0, i.useRef)(r);
      (0, u.useIsomorphicLayoutEffect)(() => {
        ((g.current = s), (b.current = r));
      });
      let j = !0,
        w = (0, i.useMemo)(
          () => (
            (j = !1),
            {
              id: f,
              initial: a,
              isPresent: s,
              custom: n,
              onExitComplete: (e) => {
                for (let t of (p.set(e, !0), p.values())) if (!t) return;
                r && r();
              },
              register: (e) => (
                p.set(e, !1),
                () => {
                  (p.delete(e), g.current || p.size || b.current?.());
                }
              ),
            }
          ),
          [s, p, r],
        );
      return (
        l && j && (w = { ...w }),
        (0, i.useMemo)(() => {
          p.forEach((e, t) => p.set(t, !1));
        }, [s]),
        i.useEffect(() => {
          s || p.size || !r || r();
        }, [s]),
        (e = (0, t.jsx)(y, { pop: "popLayout" === o, isPresent: s, anchorX: d, anchorY: h, root: x, children: e })),
        (0, t.jsx)(m.PresenceContext.Provider, { value: w, children: e })
      );
    };
    function v() {
      return new Map();
    }
    var j = e.i(86398);
    let w = (e) => e.key || "";
    function N(e) {
      let t = [];
      return (
        i.Children.forEach(e, (e) => {
          (0, i.isValidElement)(e) && t.push(e);
        }),
        t
      );
    }
    let k = ({
      children: e,
      custom: a,
      initial: s = !0,
      onExitComplete: r,
      presenceAffectsLayout: n = !0,
      mode: l = "sync",
      propagate: o = !1,
      anchorX: m = "left",
      anchorY: h = "top",
      root: x,
    }) => {
      let [p, f] = (0, j.usePresence)(o),
        g = (0, i.useMemo)(() => N(e), [e]),
        y = o && !p ? [] : g.map(w),
        v = (0, i.useRef)(!0),
        k = (0, c.useConstant)(() => new Map()),
        M = (0, i.useRef)(new Set()),
        [_, S] = (0, i.useState)(g),
        [z, T] = (0, i.useState)(g);
      ((0, u.useIsomorphicLayoutEffect)(() => {
        !o || p || z.length || f?.();
      }, [p, o, z.length, f]),
        (0, u.useIsomorphicLayoutEffect)(() => {
          v.current = !1;
          for (let e = 0; e < z.length; e++) {
            let t = w(z[e]);
            y.includes(t) ? (k.delete(t), M.current.delete(t)) : !0 !== k.get(t) && k.set(t, !1);
          }
        }, [z, y.length, y.join("-")]));
      let A = [];
      if (g !== _) {
        let e = [...g],
          t = 0;
        for (let a of z) {
          let s = y.indexOf(w(a));
          -1 === s ? (e.splice(t++, 0, a), A.push(a)) : (t = s + A.length + 1);
        }
        return (A.every((e) => k.get(w(e))) ? (e = g) : "wait" === l && (e = A), T(N(e)), S(g), null);
      }
      let { forceRender: C } = (0, i.useContext)(d.LayoutGroupContext);
      return (0, t.jsx)(t.Fragment, {
        children: z.map((e) => {
          let i = w(e),
            d = (!o || !!p) && (g === z || y.includes(i));
          return (0, t.jsx)(
            b,
            {
              isPresent: d,
              initial: (!v.current || !!s) && void 0,
              custom: a,
              presenceAffectsLayout: n,
              mode: l,
              root: x,
              onExitComplete: d
                ? void 0
                : () => {
                    if (M.current.has(i) || !k.has(i)) return;
                    (M.current.add(i), k.set(i, !0));
                    let e = !0;
                    (k.forEach((t) => {
                      t || (e = !1);
                    }),
                      e && (C?.(), S([]), o && f?.(), r && r()));
                  },
              anchorX: m,
              anchorY: h,
              children: e,
            },
            i,
          );
        }),
      });
    };
    var M = e.i(57712),
      _ = e.i(93087),
      S = e.i(63120),
      z = e.i(53533),
      T = e.i(68802);
    let A = { hidden: { y: "115%" }, visible: { y: "0%", transition: { duration: 0.95, ease: [0.22, 1, 0.36, 1] } } },
      C = ({ text: e, className: a, delay: s = 0, stagger: r = 0.07, trigger: i = "view" }) => {
        let n = e.split(" ");
        return (0, t.jsxs)("span", {
          className: a,
          children: [
            (0, t.jsx)("span", { className: "sr-only", children: e }),
            (0, t.jsx)(M.motion.span, {
              "aria-hidden": "true",
              initial: "hidden",
              variants: { hidden: {}, visible: { transition: { staggerChildren: r, delayChildren: s } } },
              ...("mount" === i ? { animate: "visible" } : { whileInView: "visible", viewport: { once: !0, margin: "0px 0px -12% 0px" } }),
              children: n.map((e, a) =>
                (0, t.jsxs)(
                  "span",
                  {
                    children: [
                      (0, t.jsx)("span", {
                        className: "-my-[0.12em] inline-block overflow-hidden py-[0.12em] align-bottom",
                        children: (0, t.jsx)(M.motion.span, {
                          variants: A,
                          className: (0, z.cn)("inline-block will-change-transform"),
                          children: e,
                        }),
                      }),
                      a < n.length - 1 ? " " : null,
                    ],
                  },
                  `${e}-${a}`,
                ),
              ),
            }),
          ],
        });
      },
      E = () => {
        let [e, t] = (0, i.useState)(!1);
        return (
          (0, i.useEffect)(() => {
            let e = window.matchMedia("(prefers-reduced-motion: reduce)"),
              a = () => t(e.matches);
            return (a(), e.addEventListener("change", a), () => e.removeEventListener("change", a));
          }, []),
          e
        );
      },
      P = [0.22, 1, 0.36, 1],
      W = [0.55, 0, 0.75, 0.2],
      $ = {
        morning: {
          label: "Morning",
          caption: "Panels charge the battery",
          description:
            "SolarLifeStyle forecasts every sunrise across your portfolio and stores the surplus instead of selling it at the day's cheapest hour.",
          image: "/images/hero-house-morning.jpg",
          icon: o,
        },
        night: {
          label: "Night",
          caption: "Battery covers the peak",
          description:
            "When the sun sets and prices climb, SolarLifeStyle releases what you stored, so the evening peak runs on your own clean power.",
          image: "/images/hero-house-night.jpg",
          icon: l,
        },
      },
      R = ["morning", "night"],
      V = Array.from({ length: 28 }, (e, t) => ({
        left: (37.3 * t + 7) % 100,
        top: (17.9 * t + 3) % 44,
        size: t % 4 == 0 ? 3 : t % 3 == 0 ? 2 : 1.5,
        delay: (0.61 * t) % 3.6,
      })),
      L = () => {
        let e = (0, i.useRef)(null),
          a = (0, i.useRef)(!1),
          s = E(),
          [n, l] = (0, i.useState)("morning"),
          o = "night" === n,
          { scrollYProgress: d } = (0, _.useScroll)({ target: e, offset: ["start start", "end end"] }),
          c = (0, S.useTransform)(d, [0, 1], ["inset(0% 0% 0% 0% round 0px)", "inset(11% 5% 11% 5% round 44px)"]),
          u = (0, S.useTransform)(d, [0, 1], [1, 1.14]),
          m = (0, S.useTransform)(d, [0, 0.6], [0, -140]),
          h = (0, S.useTransform)(d, [0, 0.6], [0, 120]),
          x = (0, S.useTransform)(d, [0, 0.45], [1, 0]),
          p = (0, S.useTransform)(d, [0.55, 0.85], [0, 1]),
          f = (0, S.useTransform)(d, [0.55, 1], [0.92, 1]),
          g = (0, S.useTransform)(d, [0.55, 0.85], ["blur(10px)", "blur(0px)"]);
        ((0, i.useEffect)(() => {
          (0, T.announceHeroScene)(n);
        }, [n]),
          (0, i.useEffect)(() => () => (0, T.announceHeroScene)(null), []));
        let y = a.current ? 0.42 : 0.9,
          b = {
            below: { y: "42%", opacity: 0, scale: 0.96 },
            shown: {
              y: "0%",
              opacity: 1,
              scale: 1,
              transition: {
                y: { duration: 1.4, ease: P, delay: y },
                scale: { duration: 1.4, ease: P, delay: y },
                opacity: { duration: 0.55, ease: "easeOut", delay: y },
              },
            },
            hidden: {
              y: "30%",
              opacity: 0,
              scale: 0.97,
              transition: { y: { duration: 0.6, ease: W }, scale: { duration: 0.6, ease: W }, opacity: { duration: 0.32, ease: "easeIn" } },
            },
          };
        return (0, t.jsx)("section", {
          ref: e,
          id: "hero",
          "aria-labelledby": "hero-title",
          className: s ? "relative h-svh bg-background" : "relative h-[175svh] bg-background",
          children: (0, t.jsxs)("div", {
            className: "sticky top-0 h-[100svh] overflow-hidden",
            children: [
              (0, t.jsxs)(M.motion.div, {
                "aria-hidden": "true",
                className: "absolute inset-0 overflow-hidden",
                style: s ? void 0 : { clipPath: c },
                children: [
                  (0, t.jsxs)(M.motion.div, {
                    className: "absolute inset-0",
                    style: s ? void 0 : { scale: u },
                    children: [
                      (0, t.jsx)("div", {
                        className: (0, z.cn)("absolute inset-0 transition-colors duration-[1400ms]", o ? "bg-[#1b232c]" : "bg-[#dcdccb]"),
                      }),
                      R.map((e) =>
                        (0, t.jsx)(
                          "div",
                          {
                            className: (0, z.cn)(
                              "absolute inset-0 transform-gpu will-change-[opacity]",
                              "night" === e && "transition-opacity duration-[1400ms] ease-in-out",
                              "night" !== e || o ? "opacity-100" : "opacity-0",
                            ),
                            children: (0, t.jsx)(r.default, {
                              src: $[e].image,
                              alt: "",
                              fill: !0,
                              loading: "eager",
                              quality: 40,
                              sizes: "50vw",
                              className: "scale-125 object-cover object-top blur-2xl",
                            }),
                          },
                          `sky-${e}`,
                        ),
                      ),
                      (0, t.jsx)("div", {
                        className: (0, z.cn)(
                          "absolute -right-[12%] -top-[24%] size-[70vmax] rounded-full bg-[radial-gradient(closest-side,rgba(255,221,180,0.55),rgba(255,221,180,0)_70%)] transition-opacity duration-[1400ms]",
                          o ? "opacity-0" : "opacity-100",
                        ),
                      }),
                      (0, t.jsxs)("div", {
                        className: (0, z.cn)("absolute inset-0 transition-opacity duration-[1600ms]", o ? "opacity-100" : "opacity-0"),
                        children: [
                          (0, t.jsx)("div", {
                            className:
                              "absolute right-[6%] top-[4%] size-[34vmax] rounded-full bg-[radial-gradient(closest-side,rgba(186,204,232,0.22),rgba(186,204,232,0)_70%)]",
                          }),
                          (0, t.jsx)("div", {
                            className:
                              "absolute right-[17%] top-[17%] size-8 rounded-full bg-[#eef1f6] opacity-85 shadow-[0_0_48px_14px_rgba(206,218,240,0.28)] sm:size-11",
                          }),
                          V.map((e, a) =>
                            (0, t.jsx)(
                              "span",
                              {
                                className: "hero-star absolute rounded-full bg-white",
                                style: {
                                  left: `${e.left}%`,
                                  top: `${e.top}%`,
                                  width: e.size,
                                  height: e.size,
                                  animationDelay: `${e.delay}s`,
                                },
                              },
                              a,
                            ),
                          ),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: "hero-fog-slow absolute -inset-x-[15%] top-[22%] h-[34%]",
                        children: [
                          (0, t.jsx)("div", {
                            className: (0, z.cn)(
                              "absolute inset-0 bg-[radial-gradient(50%_50%_at_30%_50%,rgba(244,241,230,0.65),transparent),radial-gradient(45%_45%_at_75%_55%,rgba(244,241,230,0.5),transparent)] transition-opacity duration-[1400ms]",
                              o ? "opacity-0" : "opacity-100",
                            ),
                          }),
                          (0, t.jsx)("div", {
                            className: (0, z.cn)(
                              "absolute inset-0 bg-[radial-gradient(50%_50%_at_30%_50%,rgba(70,84,98,0.45),transparent),radial-gradient(45%_45%_at_75%_55%,rgba(70,84,98,0.35),transparent)] transition-opacity duration-[1400ms]",
                              o ? "opacity-100" : "opacity-0",
                            ),
                          }),
                        ],
                      }),
                      R.map((e) =>
                        (0, t.jsx)(
                          M.motion.div,
                          {
                            className: "absolute inset-0 transform-gpu will-change-[transform,opacity]",
                            variants: b,
                            initial: "below",
                            animate: n === e ? "shown" : "hidden",
                            children: (0, t.jsx)("div", {
                              className:
                                "hero-house-mask absolute bottom-[16%] left-1/2 aspect-video w-[150%] -translate-x-1/2 sm:bottom-[12%] sm:w-[125%] md:w-[110%] lg:inset-0 lg:aspect-auto lg:w-full lg:translate-x-0",
                              children: (0, t.jsx)(r.default, {
                                src: $[e].image,
                                alt: "",
                                fill: !0,
                                loading: "eager",
                                fetchPriority: "morning" === e ? "high" : "auto",
                                sizes: "(min-width: 1024px) 100vw, 150vw",
                                className: "object-cover object-[50%_78%]",
                              }),
                            }),
                          },
                          `house-${e}`,
                        ),
                      ),
                      (0, t.jsxs)("div", {
                        className: "hero-fog absolute -inset-x-[15%] bottom-[2%] h-[36%]",
                        children: [
                          (0, t.jsx)("div", {
                            className: (0, z.cn)(
                              "absolute inset-0 bg-[radial-gradient(45%_55%_at_25%_60%,rgba(238,236,224,0.8),transparent),radial-gradient(40%_50%_at_70%_70%,rgba(238,236,224,0.7),transparent)] transition-opacity duration-[1400ms]",
                              o ? "opacity-0" : "opacity-100",
                            ),
                          }),
                          (0, t.jsx)("div", {
                            className: (0, z.cn)(
                              "absolute inset-0 bg-[radial-gradient(45%_55%_at_25%_60%,rgba(52,64,76,0.6),transparent),radial-gradient(40%_50%_at_70%_70%,rgba(52,64,76,0.5),transparent)] transition-opacity duration-[1400ms]",
                              o ? "opacity-100" : "opacity-0",
                            ),
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: (0, z.cn)("absolute inset-0 transition-opacity duration-[1400ms]", o ? "opacity-0" : "opacity-100"),
                        children: [
                          (0, t.jsx)("div", {
                            className:
                              "absolute inset-x-0 top-0 h-[42%] bg-gradient-to-b from-[#e9e7db]/80 via-[#e9e7db]/30 to-transparent",
                          }),
                          (0, t.jsx)("div", {
                            className:
                              "absolute inset-x-0 bottom-0 h-[34%] bg-gradient-to-t from-[#e4e2d4] via-[#e4e2d4]/55 to-transparent",
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: (0, z.cn)("absolute inset-0 transition-opacity duration-[1400ms]", o ? "opacity-100" : "opacity-0"),
                        children: [
                          (0, t.jsx)("div", {
                            className:
                              "absolute inset-x-0 top-0 h-[42%] bg-gradient-to-b from-[#121920]/75 via-[#121920]/25 to-transparent",
                          }),
                          (0, t.jsx)("div", {
                            className:
                              "absolute inset-x-0 bottom-0 h-[34%] bg-gradient-to-t from-[#151c23] via-[#151c23]/60 to-transparent",
                          }),
                        ],
                      }),
                    ],
                  }),
                  !s && (0, t.jsx)(M.motion.div, { className: "absolute inset-0 bg-forest/40", style: { opacity: p } }),
                ],
              }),
              (0, t.jsxs)("div", {
                className:
                  "relative mx-auto flex h-full max-w-7xl flex-col items-center justify-between px-4 pb-8 pt-28 text-center sm:px-6 sm:pb-10 sm:pt-32 lg:px-8",
                children: [
                  (0, t.jsx)(M.motion.div, {
                    style: s ? void 0 : { y: m, opacity: x },
                    children: (0, t.jsxs)("h1", {
                      id: "hero-title",
                      className: "font-heading text-[2.9rem] font-normal leading-[1.02] tracking-[-0.05em] sm:text-6xl lg:text-[5.25rem]",
                      children: [
                        (0, t.jsx)(C, {
                          text: "Sun by day.",
                          trigger: "mount",
                          delay: 1.05,
                          className: (0, z.cn)("block transition-colors duration-1000", o ? "text-white" : "text-primary-strong"),
                        }),
                        (0, t.jsx)(C, {
                          text: "Storage by night.",
                          trigger: "mount",
                          delay: 1.3,
                          className: (0, z.cn)("block transition-colors duration-1000", o ? "text-leaf" : "text-primary-strong/60"),
                        }),
                      ],
                    }),
                  }),
                  (0, t.jsx)(M.motion.div, {
                    style: s ? void 0 : { y: h, opacity: x },
                    className: "w-full max-w-md",
                    children: (0, t.jsxs)(M.motion.div, {
                      initial: { opacity: 0, y: 24 },
                      animate: { opacity: 1, y: 0 },
                      transition: { duration: 0.9, ease: P, delay: 1.7 },
                      className: "flex flex-col items-center gap-5",
                      children: [
                        (0, t.jsx)("div", {
                          role: "group",
                          "aria-label": "Time of day",
                          className: (0, z.cn)(
                            "grid w-full grid-cols-2 gap-1 rounded-2xl p-1.5 ring-1 backdrop-blur-xl transition-colors duration-700",
                            o ? "bg-white/10 ring-white/15" : "bg-white/35 ring-white/60",
                          ),
                          children: R.map((e) => {
                            let s = n === e,
                              { icon: r, label: i, caption: d } = $[e];
                            return (0, t.jsxs)(
                              "button",
                              {
                                type: "button",
                                "aria-pressed": s,
                                onClick: () => {
                                  ((a.current = !0), l(e));
                                },
                                className:
                                  "relative min-h-16 rounded-xl px-3 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                                children: [
                                  s &&
                                    (0, t.jsx)(M.motion.span, {
                                      layoutId: "hero-scene-pill",
                                      transition: { type: "spring", stiffness: 360, damping: 34 },
                                      className: (0, z.cn)(
                                        "absolute inset-0 rounded-xl shadow-[0_14px_30px_-18px_rgba(14,26,18,0.55)]",
                                        o ? "bg-[#e8ebdc]/90" : "bg-white/85",
                                      ),
                                    }),
                                  (0, t.jsxs)("span", {
                                    className: (0, z.cn)(
                                      "relative flex items-center justify-center gap-2 text-base font-medium transition-colors duration-500",
                                      s ? "text-forest" : o ? "text-white/75" : "text-forest/65",
                                    ),
                                    children: [(0, t.jsx)(r, { className: "size-4", "aria-hidden": "true" }), i],
                                  }),
                                  (0, t.jsx)("span", {
                                    className: (0, z.cn)(
                                      "relative mt-0.5 block text-xs transition-colors duration-500",
                                      s ? "text-forest/60" : o ? "text-white/50" : "text-forest/50",
                                    ),
                                    children: d,
                                  }),
                                ],
                              },
                              e,
                            );
                          }),
                        }),
                        (0, t.jsx)("div", {
                          "aria-live": "polite",
                          className: "min-h-[3.25rem]",
                          children: (0, t.jsx)(k, {
                            mode: "wait",
                            initial: !1,
                            children: (0, t.jsx)(
                              M.motion.p,
                              {
                                initial: { opacity: 0, y: 8 },
                                animate: { opacity: 1, y: 0 },
                                exit: { opacity: 0, y: -8 },
                                transition: { duration: 0.4, ease: P },
                                className: (0, z.cn)(
                                  "text-sm leading-relaxed transition-colors duration-700 sm:text-[15px]",
                                  o ? "text-white/75" : "text-forest/75",
                                ),
                                children: $[n].description,
                              },
                              n,
                            ),
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              !s &&
                (0, t.jsx)(M.motion.p, {
                  "aria-hidden": "true",
                  style: { opacity: p, scale: f, filter: g },
                  className:
                    "pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 px-6 text-center font-heading text-4xl font-light tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl",
                  children: "Every megawatt, accounted for.",
                }),
            ],
          }),
        });
      },
      O = (0, n.default)("BatteryFull", [
        ["rect", { width: "16", height: "10", x: "2", y: "7", rx: "2", ry: "2", key: "1w10f2" }],
        ["line", { x1: "22", x2: "22", y1: "11", y2: "13", key: "4dh1rd" }],
        ["line", { x1: "6", x2: "6", y1: "11", y2: "13", key: "1wd6dw" }],
        ["line", { x1: "10", x2: "10", y1: "11", y2: "13", key: "haxvl5" }],
        ["line", { x1: "14", x2: "14", y1: "11", y2: "13", key: "c6fn6x" }],
      ]),
      I = (0, n.default)("Mountain", [["path", { d: "m8 3 4 8 5-5 5 15H2L8 3z", key: "otkl63" }]]),
      D = (0, n.default)("Waves", [
        ["path", { d: "M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1", key: "knzxuh" }],
        ["path", { d: "M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1", key: "2jd2cc" }],
        ["path", { d: "M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1", key: "rd2r6e" }],
      ]),
      q = (0, n.default)("Wind", [
        ["path", { d: "M12.8 19.6A2 2 0 1 0 14 16H2", key: "148xed" }],
        ["path", { d: "M17.5 8a2.5 2.5 0 1 1 2 4H2", key: "1u4tom" }],
        ["path", { d: "M9.8 4.4A2 2 0 1 1 11 8H2", key: "75valh" }],
      ]),
      F = (0, n.default)("Zap", [
        [
          "path",
          {
            d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
            key: "1xq2db",
          },
        ],
      ]),
      H = [
        { name: "Northvale Energy", icon: "wind" },
        { name: "Solenne Power", icon: "sun" },
        { name: "Kestrel Grid", icon: "zap" },
        { name: "Brightmoor", icon: "mountain" },
        { name: "Aurelia Storage", icon: "battery" },
        { name: "Fjordline", icon: "waves" },
      ],
      G = [
        { value: "38%", label: "less energy curtailed", detail: "Surplus is stored or sold instead of switched off." },
        { value: "96.4%", label: "day-ahead forecast accuracy", detail: "Averaged across wind, solar and load after calibration." },
        { value: "2.3x", label: "faster dispatch decisions", detail: "From forecast to approved plan, measured per shift." },
        { value: "€6.8M", label: "added market revenue", detail: "Across customer portfolios in their first year." },
      ],
      B = {
        quote:
          "We used to learn about curtailment the morning after. Now the evening plan is ready before lunch and the batteries are already charging when the sun overdelivers.",
        name: "Maren Holt",
        role: "Head of Operations",
        company: "Northvale Energy",
      },
      Y = [
        {
          quote:
            "The forecasts held up through our first winter of icing alerts. That was the week our trading desk stopped keeping its own spreadsheet.",
          name: "Tomas Reyes",
          role: "Trading Lead",
          company: "Kestrel Grid",
        },
        {
          quote: "Our control room and our traders finally look at the same picture of the day. Fewer phone calls, and faster ones.",
          name: "Ines Kovac",
          role: "Grid Integration Manager",
          company: "Solenne Power",
        },
      ],
      U = [
        {
          number: "01",
          when: "Week 1",
          title: "Connect your sites",
          text: "Plug in SCADA, meters, battery systems and market feeds over the protocols you already use. No new hardware on site.",
        },
        {
          number: "02",
          when: "Week 2",
          title: "Calibrate the forecasts",
          text: "SolarLifeStyle learns from two years of your history and local weather, tuning a forecast for every asset's quirks.",
        },
        {
          number: "03",
          when: "Week 3",
          title: "Act with confidence",
          text: "Approve dispatch plans in one click, or let autopilot run inside the limits you set for charge, cycles and risk.",
        },
      ],
      X = [
        "Modbus TCP",
        "DNP3",
        "IEC 61850",
        "OPC UA",
        "MQTT",
        "Day-ahead and intraday market feeds",
        "Numerical weather models",
        "CSV and SFTP drops",
      ],
      K = [
        { value: "14 GW", label: "under forecast", detail: "Wind, solar, hydro and storage." },
        { value: "320+", label: "sites connected", detail: "From single parks to national fleets." },
        { value: "99.95%", label: "platform uptime", detail: "Over the last twelve months." },
      ],
      Z = [
        {
          question: "Which assets does SolarLifeStyle support?",
          answer:
            "Wind, solar, battery storage, hydro and flexible loads. Hybrid sites are modelled as one portfolio, with every asset forecast on its own so you can see exactly where a surplus will come from.",
        },
        {
          question: "How accurate are the forecasts?",
          answer:
            "After calibration, day-ahead accuracy typically lands between 94% and 97% depending on the asset mix and climate. Live accuracy is shown per site, so you never have to take our word for it.",
        },
        {
          question: "Do we need new hardware on site?",
          answer:
            "No. SolarLifeStyle reads from the systems you already run, including SCADA, meters, battery management systems and market feeds, over standard protocols or secure file drops.",
        },
        {
          question: "Can SolarLifeStyle dispatch batteries automatically?",
          answer:
            "Yes, when you want it to. Most teams start in advisory mode, approving each plan, then switch on autopilot within limits they set for state of charge, cycling and market exposure.",
        },
        {
          question: "Where is our data stored?",
          answer:
            "In EU data centres, encrypted in transit and at rest, with role-based access for every team. Your data stays yours and can be exported at any time.",
        },
        {
          question: "How is SolarLifeStyle priced?",
          answer:
            "A platform fee plus a rate per megawatt under management, so cost scales with your portfolio. Pilots start with a single site for 60 days, and the demo call is the quickest way to get a quote.",
        },
      ],
      Q = { wind: q, sun: o, zap: F, mountain: I, battery: O, waves: D },
      J = () =>
        (0, t.jsxs)("section", {
          id: "customers",
          "aria-labelledby": "customers-title",
          className: "bg-background py-14 sm:py-20",
          children: [
            (0, t.jsx)("div", {
              className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
              children: (0, t.jsx)("h2", {
                id: "customers-title",
                className: "reveal text-center text-sm text-muted-foreground",
                children: "Trusted by operators balancing 14 GW of wind, solar and storage",
              }),
            }),
            (0, t.jsx)("div", {
              className: "marquee marquee-mask mt-10 overflow-hidden",
              children: (0, t.jsx)("div", {
                className: "marquee-track flex w-max",
                children: [0, 1].map((e) =>
                  (0, t.jsx)(
                    "ul",
                    {
                      "aria-hidden": 1 === e || void 0,
                      className: 1 === e ? "marquee-copy flex shrink-0 items-center" : "flex shrink-0 items-center",
                      children: H.map((e) => {
                        let a = Q[e.icon];
                        return (0, t.jsxs)(
                          "li",
                          {
                            className:
                              "flex items-center gap-2.5 px-8 text-foreground/40 transition-colors duration-300 hover:text-primary-strong sm:px-12",
                            children: [
                              (0, t.jsx)(a, { className: "size-6 shrink-0", "aria-hidden": "true" }),
                              (0, t.jsx)("span", {
                                className: "whitespace-nowrap font-heading text-2xl font-semibold tracking-tight",
                                children: e.name,
                              }),
                            ],
                          },
                          e.name,
                        );
                      }),
                    },
                    e,
                  ),
                ),
              }),
            }),
          ],
        }),
      ee = (e, t = !1) => e.split(" ").map((e) => ({ kind: "word", word: e, accent: t })),
      et = [
        ...ee("Renewables rarely run short of power."),
        { kind: "image", src: "/images/hero-turbine.jpg" },
        ...ee("They run short of timing.", !0),
        ...ee("SolarLifeStyle reads the weather,"),
        { kind: "image", src: "/images/hills-mist.jpg" },
        ...ee("the grid and the market as one system, so every megawatt"),
        { kind: "image", src: "/images/solar-array.jpg" },
        ...ee("you make lands in the hour"),
        ...ee("it pays the most.", !0),
      ],
      ea = 0.78 / et.length,
      es = ({ word: e, accent: a, progress: s, range: r, still: i }) => {
        let n = (0, S.useTransform)(s, r, [0.12, 1]),
          l = (0, S.useTransform)(s, r, ["0.22em", "0em"]);
        return (0, t.jsx)(M.motion.span, {
          style: i ? void 0 : { opacity: n, y: l },
          className: (0, z.cn)("inline-block", a ? "text-primary" : "text-foreground"),
          children: e,
        });
      },
      er = ({ src: e, progress: a, range: s, still: i }) => {
        let n = (0, S.useTransform)(a, s, ["inset(0% 100% 0% 0% round 999px)", "inset(0% 0% 0% 0% round 999px)"]),
          l = (0, S.useTransform)(a, s, [1.5, 1]);
        return (0, t.jsx)(M.motion.span, {
          "aria-hidden": "true",
          style: i ? void 0 : { clipPath: n },
          className: "relative inline-block h-[0.78em] w-[1.9em] overflow-hidden rounded-full align-[-0.04em]",
          children: (0, t.jsx)(M.motion.span, {
            className: "absolute inset-0",
            style: i ? void 0 : { scale: l },
            children: (0, t.jsx)(r.default, { src: e, alt: "", fill: !0, sizes: "160px", className: "object-cover" }),
          }),
        });
      },
      ei = () => {
        let e = (0, i.useRef)(null),
          a = E(),
          { scrollYProgress: s } = (0, _.useScroll)({ target: e, offset: ["start start", "end end"] }),
          r = (0, S.useTransform)(s, [0.06, 0.84], [0, 1]),
          n = (0, S.useTransform)(r, (e) => `${Math.round(100 * e)}%`);
        return (0, t.jsx)("section", {
          ref: e,
          id: "manifesto",
          "aria-labelledby": "manifesto-title",
          className: (0, z.cn)("relative bg-background", a ? "py-24 sm:py-32" : "h-[260svh]"),
          children: (0, t.jsx)("div", {
            className: (0, z.cn)(!a && "sticky top-0 flex h-svh items-center overflow-hidden"),
            children: (0, t.jsxs)("div", {
              className: "mx-auto w-full max-w-6xl px-4 pt-14 sm:px-6 lg:px-8",
              children: [
                (0, t.jsxs)("div", {
                  className: "flex items-center gap-4",
                  children: [
                    (0, t.jsxs)("h2", {
                      id: "manifesto-title",
                      className:
                        "inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-foreground/70 ring-1 ring-black/5",
                      children: [
                        (0, t.jsx)("span", { "aria-hidden": "true", className: "size-1.5 rounded-full bg-primary" }),
                        "Why SolarLifeStyle",
                      ],
                    }),
                    (0, t.jsx)("span", { "aria-hidden": "true", className: "h-px flex-1 bg-foreground/10" }),
                  ],
                }),
                (0, t.jsx)("p", {
                  className:
                    "mt-8 font-heading text-[2rem] font-light leading-[1.14] tracking-[-0.035em] sm:mt-10 sm:text-5xl sm:leading-[1.1] lg:text-6xl",
                  children: et.map((e, r) => {
                    let i = 0.06 + r * ea,
                      n = [i, Math.min(i + 3 * ea, 0.84)],
                      l = r < et.length - 1 ? " " : null;
                    return (0, t.jsxs)(
                      "span",
                      {
                        children: [
                          "word" === e.kind
                            ? (0, t.jsx)(es, { word: e.word, accent: e.accent, progress: s, range: n, still: a })
                            : (0, t.jsx)(er, { src: e.src, progress: s, range: n, still: a }),
                          l,
                        ],
                      },
                      r,
                    );
                  }),
                }),
                (0, t.jsxs)("div", {
                  "aria-hidden": "true",
                  className: "mt-10 flex items-center gap-4 sm:mt-14",
                  children: [
                    (0, t.jsx)("span", {
                      className: "text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground",
                      children: "Energy timed",
                    }),
                    (0, t.jsx)("span", {
                      className: "relative h-1 flex-1 overflow-hidden rounded-full bg-leaf-soft",
                      children: (0, t.jsx)(M.motion.span, {
                        className: "absolute inset-0 origin-left rounded-full bg-gradient-to-r from-leaf to-primary",
                        style: { scaleX: a ? 1 : r },
                      }),
                    }),
                    (0, t.jsx)(M.motion.span, {
                      className: "w-12 text-right font-mono text-sm tabular-nums text-foreground",
                      children: a ? "100%" : n,
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      };
    var en = e.i(98957);
    let el = (0, n.default)("ShieldCheck", [
        [
          "path",
          {
            d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
            key: "oel41y",
          },
        ],
        ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
      ]),
      eo = (0, n.default)("Users", [
        ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
        ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
        ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
        ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }],
      ]),
      ed = [0.22, 1, 0.36, 1],
      ec = ({ id: e, eyebrow: a, title: s, accent: r, description: i, align: n = "left", tone: l = "light", className: o }) => {
        let d = "dark" === l,
          c = s.split(" ").length;
        return (0, t.jsxs)("div", {
          className: (0, z.cn)("max-w-3xl", "center" === n && "mx-auto text-center", o),
          children: [
            (0, t.jsxs)(M.motion.p, {
              initial: { opacity: 0, y: 12 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: !0, margin: "0px 0px -10% 0px" },
              transition: { duration: 0.7, ease: ed },
              className: (0, z.cn)(
                "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium uppercase tracking-[0.14em]",
                d ? "bg-white/10 text-forest-foreground/85 ring-1 ring-white/15" : "bg-white text-foreground/70 ring-1 ring-black/5",
              ),
              children: [
                (0, t.jsx)("span", { "aria-hidden": "true", className: (0, z.cn)("size-1.5 rounded-full", d ? "bg-leaf" : "bg-primary") }),
                a,
              ],
            }),
            (0, t.jsxs)("h2", {
              id: e,
              className: (0, z.cn)(
                "mt-5 text-balance font-heading text-[2.15rem] font-light leading-[1.08] tracking-[-0.035em] sm:text-5xl",
                d ? "text-white" : "text-foreground",
              ),
              children: [
                (0, t.jsx)(C, { text: s, delay: 0.1 }),
                r &&
                  (0, t.jsx)(C, {
                    text: r,
                    delay: 0.1 + 0.07 * c,
                    className: (0, z.cn)("block", d ? "text-white/45" : "text-foreground/45"),
                  }),
              ],
            }),
            i &&
              (0, t.jsx)(M.motion.p, {
                initial: { opacity: 0, y: 18 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: !0, margin: "0px 0px -10% 0px" },
                transition: { duration: 0.9, ease: ed, delay: 0.35 },
                className: (0, z.cn)(
                  "mt-5 text-pretty text-base leading-relaxed sm:text-lg",
                  "center" === n && "mx-auto max-w-2xl",
                  d ? "text-forest-foreground/70" : "text-muted-foreground",
                ),
                children: i,
              }),
          ],
        });
      };
    var eu = e.i(80015);
    let em = (0, n.default)("TrendingDown", [
        ["polyline", { points: "22 17 13.5 8.5 8.5 13.5 2 7", key: "1r2t7k" }],
        ["polyline", { points: "16 17 22 17 22 11", key: "11uiuu" }],
      ]),
      eh = (0, n.default)("TrendingUp", [
        ["polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17", key: "126l90" }],
        ["polyline", { points: "16 7 22 7 22 13", key: "kwv8wd" }],
      ]),
      ex = (e) => Math.round(100 * e) / 100,
      ep = (e) => `${ex(e.x)},${ex(e.y)}`,
      ef = (e) => {
        let t = e.length;
        if (t < 2) return [];
        let a = [],
          s = [];
        for (let r = 0; r < t - 1; r++) ((a[r] = e[r + 1].x - e[r].x), (s[r] = 0 === a[r] ? 0 : (e[r + 1].y - e[r].y) / a[r]));
        let r = Array(t).fill(0);
        ((r[0] = s[0]), (r[t - 1] = s[t - 2]));
        for (let e = 1; e < t - 1; e++) {
          let t = s[e - 1],
            i = s[e];
          if (t * i <= 0) r[e] = 0;
          else {
            let s = 2 * a[e] + a[e - 1],
              n = a[e] + 2 * a[e - 1];
            r[e] = (s + n) / (s / t + n / i);
          }
        }
        let i = [];
        for (let s = 0; s < t - 1; s++) {
          let t = a[s] / 3,
            n = e[s],
            l = e[s + 1];
          i.push({ from: n, c1: { x: n.x + t, y: n.y + t * r[s] }, c2: { x: l.x - t, y: l.y - t * r[s + 1] }, to: l });
        }
        return i;
      },
      eg = (e) =>
        0 === e.length
          ? ""
          : 1 === e.length
            ? `M${ep(e[0])}`
            : ef(e).reduce((e, t) => `${e}C${ep(t.c1)} ${ep(t.c2)} ${ep(t.to)}`, `M${ep(e[0])}`),
      ey = (e, t) => {
        if (e.length < 2) return "";
        let a = e[0],
          s = e[e.length - 1];
        return `${eg(e)}L${ex(s.x)},${ex(t)}L${ex(a.x)},${ex(t)}Z`;
      },
      eb = ({ values: e, className: a, tone: s = "light" }) => {
        if (e.length < 2) return null;
        let r = Math.min(...e),
          i = Math.max(...e) - r || 1,
          n = e.map((t, a) => ({ x: (a / (e.length - 1)) * 100, y: 3 + (1 - (t - r) / i) * 26 })),
          l = n[n.length - 1];
        return (0, t.jsxs)("div", {
          "aria-hidden": "true",
          className: (0, z.cn)("relative", a),
          children: [
            (0, t.jsx)("svg", {
              viewBox: "0 0 100 32",
              preserveAspectRatio: "none",
              className: "size-full overflow-visible",
              children: (0, t.jsx)("path", {
                d: eg(n),
                fill: "none",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                vectorEffect: "non-scaling-stroke",
                className: "dark" === s ? "stroke-white/35" : "stroke-sage",
              }),
            }),
            (0, t.jsx)("span", {
              className: (0, z.cn)(
                "absolute size-2 -translate-x-1/2 -translate-y-1/2 rounded-full ring-2",
                "dark" === s ? "bg-leaf ring-forest" : "bg-primary ring-white",
              ),
              style: { left: "100%", top: `${(l.y / 32) * 100}%` },
            }),
          ],
        });
      },
      ev = { good: "text-accent-foreground", bad: "text-orange-700", neutral: "text-muted-foreground" },
      ej = ({ item: e }) => {
        let a = "up" === e.direction ? eh : "down" === e.direction ? em : null,
          s = e.meter ? Math.round((e.meter.value / e.meter.max) * 100) : 0;
        return (0, t.jsxs)("div", {
          className: "flex min-w-0 flex-col rounded-2xl bg-card p-4 ring-1 ring-black/[0.06]",
          children: [
            (0, t.jsx)("p", { className: "truncate text-xs text-muted-foreground", children: e.label }),
            (0, t.jsxs)("div", {
              className: "mt-2 flex items-end justify-between gap-3",
              children: [
                (0, t.jsxs)("p", {
                  className: "font-heading text-2xl font-medium tracking-tight text-foreground",
                  children: [
                    e.value,
                    (0, t.jsx)("span", { className: "ml-1 text-xs font-normal text-muted-foreground", children: e.unit }),
                  ],
                }),
                e.trend && (0, t.jsx)(eb, { values: e.trend, className: "mb-1.5 h-7 w-16 shrink-0 sm:w-20" }),
              ],
            }),
            e.meter &&
              (0, t.jsx)("div", {
                "aria-hidden": "true",
                className: "mt-3 h-1.5 overflow-hidden rounded-full bg-leaf-soft",
                children: (0, t.jsx)("div", {
                  className: "h-full rounded-full bg-primary transition-[width] duration-500",
                  style: { width: `${s}%` },
                }),
              }),
            (0, t.jsxs)("p", {
              className: (0, z.cn)("mt-auto flex items-center gap-1.5 pt-3 text-xs", ev[e.tone]),
              children: [
                a && (0, t.jsx)(a, { className: "size-3.5 shrink-0", "aria-hidden": "true" }),
                (0, t.jsx)("span", { className: "truncate", children: e.delta }),
              ],
            }),
          ],
        });
      },
      ew = (0, n.default)("BatteryCharging", [
        ["path", { d: "M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2", key: "1sdynx" }],
        ["path", { d: "M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1", key: "1gkd3k" }],
        ["path", { d: "m11 7-3 5h4l-3 5", key: "b4a64w" }],
        ["line", { x1: "22", x2: "22", y1: "11", y2: "13", key: "4dh1rd" }],
      ]),
      eN = (0, n.default)("ChartLine", [
        ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
        ["path", { d: "m19 9-5 5-4-4-3 3", key: "2osh9i" }],
      ]),
      ek = (0, n.default)("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]),
      eM = {
        Storage: ew,
        Market: eN,
        Demand: (0, n.default)("Gauge", [
          ["path", { d: "m12 14 4-4", key: "9kzdfg" }],
          ["path", { d: "M3.34 19a10 10 0 1 1 17.32 0", key: "19p75a" }],
        ]),
        Assets: q,
      },
      e_ = ({ actions: e, scheduled: a, onToggle: s }) => {
        let r = e.filter((e) => a[e.id]).length;
        return (0, t.jsxs)("div", {
          children: [
            (0, t.jsxs)("div", {
              className: "flex items-baseline justify-between gap-3",
              children: [
                (0, t.jsx)("h4", { className: "text-sm font-medium text-foreground", children: "Recommended actions" }),
                (0, t.jsxs)("p", {
                  className: "text-xs text-muted-foreground",
                  "aria-live": "polite",
                  children: [r, " of ", e.length, " scheduled"],
                }),
              ],
            }),
            (0, t.jsx)("ul", {
              className: "mt-3 space-y-2",
              children: e.map((e) => {
                let r = !!a[e.id],
                  i = eM[e.tag];
                return (0, t.jsxs)(
                  "li",
                  {
                    className: "flex items-center gap-3 rounded-xl bg-background p-3",
                    children: [
                      (0, t.jsx)("span", {
                        className: "flex size-8 shrink-0 items-center justify-center rounded-lg bg-white text-primary ring-1 ring-black/5",
                        children: (0, t.jsx)(i, { className: "size-4", "aria-hidden": "true" }),
                      }),
                      (0, t.jsxs)("div", {
                        className: "min-w-0 flex-1",
                        children: [
                          (0, t.jsx)("p", { className: "text-[13px] font-medium leading-snug text-foreground", children: e.title }),
                          (0, t.jsx)("p", { className: "mt-0.5 text-xs leading-snug text-muted-foreground", children: e.detail }),
                        ],
                      }),
                      (0, t.jsxs)("button", {
                        type: "button",
                        onClick: () => s(e.id),
                        "aria-label": `${r ? "Scheduled" : "Schedule"}: ${e.title}`,
                        className: (0, z.cn)(
                          "inline-flex h-8 shrink-0 items-center gap-1 rounded-full px-3 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                          r ? "bg-accent text-accent-foreground hover:bg-leaf-soft" : "bg-foreground text-white hover:bg-forest",
                        ),
                        children: [r && (0, t.jsx)(ek, { className: "size-3.5", "aria-hidden": "true" }), r ? "Scheduled" : "Schedule"],
                      }),
                    ],
                  },
                  e.id,
                );
              }),
            }),
          ],
        });
      },
      eS = new Intl.NumberFormat("en-US"),
      ez = (e) => `${eS.format(e)} MW`,
      eT = ({ range: e }) => {
        let a,
          [s, r] = (0, i.useState)(null),
          n = (0, i.useId)(),
          { points: l, nowIndex: o, tickEvery: d } = e,
          c = l.length,
          u = l.flatMap((e) => [e.low, e.high, e.actual ?? e.forecast]),
          m = ((e, t, a = 4) => {
            let s = ((e) => {
                if (e <= 0) return 1;
                let t = Math.floor(Math.log10(e)),
                  a = e / 10 ** t,
                  s = 10;
                return (a <= 1 ? (s = 1) : a <= 2 ? (s = 2) : a <= 2.5 ? (s = 2.5) : a <= 5 && (s = 5), s * 10 ** t);
              })((t - e) / a),
              r = Math.floor(e / s) * s,
              i = Math.ceil(t / s) * s,
              n = [];
            for (let e = r; e <= i + s / 2; e += s) n.push(Math.round(100 * e) / 100);
            return n;
          })(Math.min(...u), Math.max(...u), 4),
          h = m[0],
          x = m[m.length - 1],
          p = (e) => (c < 2 ? 500 : (e / (c - 1)) * 1e3),
          f = (e) => 300 - ((e - h) / (x - h)) * 300,
          g = (e) => (p(e) / 1e3) * 100,
          y = (e) => (f(e) / 300) * 100,
          b = l.map((e, t) => ({ x: p(t), y: f(e.forecast) })),
          v = l.map((e, t) => ({ x: p(t), y: f(e.high) })),
          j = l.map((e, t) => ({ x: p(t), y: f(e.low) })),
          w = l.flatMap((e, t) => (null === e.actual ? [] : [{ x: p(t), y: f(e.actual) }])),
          N = w.length > 1,
          k = l.reduce((e, t, a) => (t.forecast > l[e].forecast ? a : e), 0),
          _ = l[k],
          S = g(k),
          T = null === s ? null : l[s],
          A = null === s ? 0 : g(s),
          C = (e) => {
            let t = e.currentTarget.getBoundingClientRect();
            return Math.round(Math.min(1, Math.max(0, (e.clientX - t.left) / t.width)) * (c - 1));
          };
        return (0, t.jsxs)("div", {
          children: [
            (0, t.jsxs)("ul", {
              className: "flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-muted-foreground",
              children: [
                N &&
                  (0, t.jsxs)("li", {
                    className: "flex items-center gap-2",
                    children: [(0, t.jsx)("span", { "aria-hidden": "true", className: "h-0.5 w-4 rounded-full bg-primary" }), "Actual"],
                  }),
                (0, t.jsxs)("li", {
                  className: "flex items-center gap-2",
                  children: [
                    (0, t.jsx)("svg", {
                      "aria-hidden": "true",
                      viewBox: "0 0 16 2",
                      className: "h-0.5 w-4",
                      children: (0, t.jsx)("line", {
                        x1: "0",
                        y1: "1",
                        x2: "16",
                        y2: "1",
                        strokeWidth: "2",
                        strokeDasharray: "4 3",
                        className: "stroke-chart-2",
                      }),
                    }),
                    "Forecast",
                  ],
                }),
                (0, t.jsxs)("li", {
                  className: "flex items-center gap-2",
                  children: [
                    (0, t.jsx)("span", { "aria-hidden": "true", className: "h-2.5 w-4 rounded-[3px] bg-chart-2/10" }),
                    "Expected range",
                  ],
                }),
                (0, t.jsxs)("li", {
                  className: "flex items-center gap-2",
                  children: [
                    (0, t.jsx)("span", { "aria-hidden": "true", className: "size-2.5 rounded-full bg-sun ring-2 ring-white" }),
                    "Forecast peak",
                  ],
                }),
              ],
            }),
            (0, t.jsxs)("div", {
              className: "relative mt-3 h-60 pb-7 pl-12 pt-9 sm:h-72",
              children: [
                (0, t.jsx)("div", {
                  "aria-hidden": "true",
                  className: "absolute bottom-7 left-0 top-9 w-10",
                  children: m.map((e) =>
                    (0, t.jsx)(
                      "span",
                      {
                        className: "absolute right-0 -translate-y-1/2 text-[11px] tabular-nums text-muted-foreground",
                        style: { top: `${y(e)}%` },
                        children: eS.format(e),
                      },
                      e,
                    ),
                  ),
                }),
                (0, t.jsxs)("div", {
                  className: "relative h-full",
                  children: [
                    (0, t.jsxs)(M.motion.svg, {
                      "aria-hidden": "true",
                      viewBox: "0 0 1000 300",
                      preserveAspectRatio: "none",
                      className: "absolute inset-0 size-full",
                      initial: { clipPath: "inset(-10% 100% -10% 0%)" },
                      whileInView: { clipPath: "inset(-10% 0% -10% 0%)" },
                      viewport: { once: !0, margin: "0px 0px -15% 0px" },
                      transition: { duration: 1.6, ease: [0.65, 0, 0.35, 1] },
                      children: [
                        m.map((e) =>
                          (0, t.jsx)(
                            "line",
                            {
                              x1: 0,
                              x2: 1e3,
                              y1: f(e),
                              y2: f(e),
                              strokeWidth: 1,
                              vectorEffect: "non-scaling-stroke",
                              className: "stroke-border",
                            },
                            e,
                          ),
                        ),
                        (0, t.jsx)("path", {
                          d: ((e, t) => {
                            if (e.length < 2 || t.length < 2) return "";
                            let a = ef(t).reverse(),
                              s = t[t.length - 1],
                              r = a.reduce((e, t) => `${e}C${ep(t.c2)} ${ep(t.c1)} ${ep(t.from)}`, `L${ep(s)}`);
                            return `${eg(e)}${r}Z`;
                          })(v, j),
                          className: "fill-chart-2/[0.07]",
                        }),
                        N && (0, t.jsx)("path", { d: ey(w, 300), className: "fill-primary/10" }),
                        (0, t.jsx)("path", {
                          d: eg(b),
                          fill: "none",
                          strokeWidth: 2,
                          strokeDasharray: "6 6",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          vectorEffect: "non-scaling-stroke",
                          className: "stroke-chart-2",
                        }),
                        N &&
                          (0, t.jsx)("path", {
                            d: eg(w),
                            fill: "none",
                            strokeWidth: 2,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            vectorEffect: "non-scaling-stroke",
                            className: "stroke-primary",
                          }),
                      ],
                    }),
                    null !== o &&
                      (0, t.jsx)("div", {
                        "aria-hidden": "true",
                        className: "pointer-events-none absolute inset-y-0 w-px bg-foreground/20",
                        style: { left: `${g(o)}%` },
                        children: (0, t.jsx)("span", {
                          className:
                            "absolute -top-2.5 left-1/2 -translate-x-1/2 rounded-full bg-foreground px-2 py-0.5 text-[10px] font-medium text-white",
                          children: "Now",
                        }),
                      }),
                    (0, t.jsxs)("div", {
                      "aria-hidden": "true",
                      className: "pointer-events-none absolute",
                      style: { left: `${S}%`, top: `${y(_.forecast)}%` },
                      children: [
                        (0, t.jsx)("span", {
                          className: "absolute size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sun ring-2 ring-white",
                        }),
                        (0, t.jsxs)("span", {
                          className: (0, z.cn)(
                            "absolute bottom-3 whitespace-nowrap rounded-lg bg-white px-2 py-1 text-[11px] font-medium text-foreground shadow-sm ring-1 ring-black/5 transition-opacity",
                            S > 80 ? "-translate-x-full" : S < 20 ? "translate-x-0" : "-translate-x-1/2",
                            null !== s && "opacity-0",
                          ),
                          children: ["Peak ", _.label, ", ", ez(_.forecast)],
                        }),
                      ],
                    }),
                    T &&
                      (0, t.jsxs)("div", {
                        "aria-hidden": "true",
                        className: "pointer-events-none absolute inset-0",
                        children: [
                          (0, t.jsx)("div", { className: "absolute inset-y-0 w-px bg-foreground/30", style: { left: `${A}%` } }),
                          (0, t.jsx)("span", {
                            className: "absolute size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-chart-2 ring-2 ring-white",
                            style: { left: `${A}%`, top: `${y(T.forecast)}%` },
                          }),
                          null !== T.actual &&
                            (0, t.jsx)("span", {
                              className: "absolute size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary ring-2 ring-white",
                              style: { left: `${A}%`, top: `${y(T.actual)}%` },
                            }),
                          (0, t.jsxs)("div", {
                            className: (0, z.cn)(
                              "absolute top-1 w-44 rounded-xl bg-white p-3 text-xs shadow-[0_16px_32px_-16px_rgba(14,26,18,0.45)] ring-1 ring-black/5",
                              A > 55 ? "-translate-x-[calc(100%+12px)]" : "translate-x-3",
                            ),
                            style: { left: `${A}%` },
                            children: [
                              (0, t.jsx)("p", { className: "font-medium text-muted-foreground", children: T.label }),
                              (0, t.jsxs)("div", {
                                className: "mt-2 space-y-1.5",
                                children: [
                                  null !== T.actual &&
                                    (0, t.jsxs)("div", {
                                      className: "flex items-center gap-2",
                                      children: [
                                        (0, t.jsx)("span", { className: "h-0.5 w-3 shrink-0 rounded-full bg-primary" }),
                                        (0, t.jsx)("span", { className: "font-semibold text-foreground", children: ez(T.actual) }),
                                        (0, t.jsx)("span", { className: "text-muted-foreground", children: "Actual" }),
                                      ],
                                    }),
                                  (0, t.jsxs)("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                      (0, t.jsx)("span", { className: "h-0.5 w-3 shrink-0 rounded-full bg-chart-2" }),
                                      (0, t.jsx)("span", { className: "font-semibold text-foreground", children: ez(T.forecast) }),
                                      (0, t.jsx)("span", { className: "text-muted-foreground", children: "Forecast" }),
                                    ],
                                  }),
                                  (0, t.jsxs)("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                      (0, t.jsx)("span", { className: "h-2 w-3 shrink-0 rounded-[2px] bg-chart-2/15" }),
                                      (0, t.jsxs)("span", {
                                        className: "font-medium text-foreground",
                                        children: [eS.format(T.low), " to ", eS.format(T.high)],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    (0, t.jsx)("div", {
                      role: "group",
                      tabIndex: 0,
                      "aria-roledescription": "chart",
                      "aria-label": `Load forecast versus actual, ${e.chartSubtitle.toLowerCase()}`,
                      "aria-describedby": n,
                      onPointerMove: (e) => r(C(e)),
                      onPointerDown: (e) => r(C(e)),
                      onPointerLeave: () => r(null),
                      onKeyDown: (e) => {
                        let t = s ?? o ?? k;
                        "ArrowRight" === e.key
                          ? (e.preventDefault(), r(Math.min(c - 1, t + +(null !== s))))
                          : "ArrowLeft" === e.key
                            ? (e.preventDefault(), r(Math.max(0, t - (null !== s))))
                            : "Home" === e.key
                              ? (e.preventDefault(), r(0))
                              : "End" === e.key
                                ? (e.preventDefault(), r(c - 1))
                                : "Escape" === e.key && r(null);
                      },
                      onBlur: () => r(null),
                      className:
                        "absolute inset-0 cursor-crosshair touch-pan-y rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4",
                    }),
                    (0, t.jsx)("p", {
                      id: n,
                      className: "sr-only",
                      children: "Use the left and right arrow keys to move through the chart.",
                    }),
                    (0, t.jsx)("p", {
                      className: "sr-only",
                      "aria-live": "polite",
                      children: T
                        ? ((a = null === T.actual ? "no actual reading yet" : `actual ${ez(T.actual)}`),
                          `${T.label}: forecast ${ez(T.forecast)}, ${a}, expected range ${ez(T.low)} to ${ez(T.high)}.`)
                        : "",
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  "aria-hidden": "true",
                  className: "absolute bottom-0 left-12 right-0 h-5",
                  children: l.map((e, a) => {
                    if (a % d != 0) return null;
                    let s = g(a);
                    return (0, t.jsx)(
                      "span",
                      {
                        className: (0, z.cn)(
                          "absolute top-0 whitespace-nowrap text-[11px] tabular-nums text-muted-foreground",
                          0 === s ? "translate-x-0" : 100 === s ? "-translate-x-full" : "-translate-x-1/2",
                        ),
                        style: { left: `${s}%` },
                        children: e.label,
                      },
                      e.label,
                    );
                  }),
                }),
              ],
            }),
            (0, t.jsxs)("table", {
              className: "sr-only",
              children: [
                (0, t.jsxs)("caption", { children: ["Load forecast versus actual, ", e.chartSubtitle.toLowerCase()] }),
                (0, t.jsx)("thead", {
                  children: (0, t.jsxs)("tr", {
                    children: [
                      (0, t.jsx)("th", { scope: "col", children: "Time" }),
                      (0, t.jsx)("th", { scope: "col", children: "Forecast (MW)" }),
                      (0, t.jsx)("th", { scope: "col", children: "Actual (MW)" }),
                      (0, t.jsx)("th", { scope: "col", children: "Expected low (MW)" }),
                      (0, t.jsx)("th", { scope: "col", children: "Expected high (MW)" }),
                    ],
                  }),
                }),
                (0, t.jsx)("tbody", {
                  children: l.map((e) =>
                    (0, t.jsxs)(
                      "tr",
                      {
                        children: [
                          (0, t.jsx)("th", { scope: "row", children: e.label }),
                          (0, t.jsx)("td", { children: eS.format(e.forecast) }),
                          (0, t.jsx)("td", { children: null === e.actual ? "Not yet available" : eS.format(e.actual) }),
                          (0, t.jsx)("td", { children: eS.format(e.low) }),
                          (0, t.jsx)("td", { children: eS.format(e.high) }),
                        ],
                      },
                      e.label,
                    ),
                  ),
                }),
              ],
            }),
          ],
        });
      },
      eA = { wind: "bg-chart-1", solar: "bg-chart-3", hydro: "bg-chart-4", other: "bg-chart-5" },
      eC = ({ mix: e }) => {
        let a = e.map((e) => `${e.label} ${e.share}%`).join(", ");
        return (0, t.jsxs)("div", {
          children: [
            (0, t.jsxs)("div", {
              className: "flex items-baseline justify-between gap-3",
              children: [
                (0, t.jsx)("h4", { className: "text-sm font-medium text-foreground", children: "Generation mix" }),
                (0, t.jsx)("p", { className: "text-xs text-muted-foreground", children: "Share of output" }),
              ],
            }),
            (0, t.jsx)("div", {
              role: "img",
              "aria-label": `Generation mix: ${a}`,
              className: "mt-4 flex h-3 gap-[2px] overflow-hidden rounded-full",
              children: e.map((e) =>
                (0, t.jsx)(
                  "div",
                  {
                    className: (0, z.cn)("h-full transition-[flex-grow] duration-500", eA[e.id]),
                    style: { flexGrow: e.share, flexBasis: 0 },
                  },
                  e.id,
                ),
              ),
            }),
            (0, t.jsx)("ul", {
              className: "mt-4 grid grid-cols-2 gap-x-5 gap-y-2.5",
              children: e.map((e) =>
                (0, t.jsxs)(
                  "li",
                  {
                    className: "flex items-center justify-between gap-2 text-xs",
                    children: [
                      (0, t.jsxs)("span", {
                        className: "flex items-center gap-2 text-foreground",
                        children: [
                          (0, t.jsx)("span", { "aria-hidden": "true", className: (0, z.cn)("size-2.5 rounded-[3px]", eA[e.id]) }),
                          e.label,
                        ],
                      }),
                      (0, t.jsxs)("span", { className: "font-medium tabular-nums text-foreground", children: [e.share, "%"] }),
                    ],
                  },
                  e.id,
                ),
              ),
            }),
          ],
        });
      },
      eE = Array.from({ length: 24 }, (e, t) => `${String(t).padStart(2, "0")}:00`),
      eP = [1842, 1771, 1702, 1638, 1661, 1795, 2034, 2241, 2436, 2461, 2352, 2268, 2231, 2176, 2243],
      eW = ["Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu"],
      e$ = (e, t) => ({ low: Math.round(e * (1 - t)), high: Math.round(e * (1 + t)) }),
      eR = [
        {
          id: "today",
          label: "Today",
          chartSubtitle: "Hourly load in MW, actuals up to 14:00",
          tickEvery: 3,
          nowIndex: 14,
          points: [
            1860, 1760, 1690, 1650, 1670, 1780, 2010, 2260, 2410, 2440, 2380, 2290, 2220, 2190, 2260, 2410, 2600, 2810, 2914, 2860, 2690,
            2470, 2240, 2020,
          ].map((e, t) => ({ label: eE[t], forecast: e, actual: eP[t] ?? null, ...e$(e, t <= 14 ? 0.02 : 0.02 + 0.004 * (t - 14)) })),
          kpis: [
            {
              id: "peak",
              label: "Forecasted peak load",
              value: "2,914",
              unit: "MW",
              delta: "+4.2% vs last Friday",
              tone: "neutral",
              direction: "up",
              trend: [2610, 2680, 2720, 2650, 2700, 2790, 2760, 2810, 2850, 2790, 2880, 2914],
            },
            {
              id: "curtailment",
              label: "Curtailment risk",
              value: "12",
              unit: "%",
              delta: "3 pts lower than yesterday",
              tone: "good",
              direction: "down",
              trend: [19, 18, 18, 17, 16, 16, 15, 15, 14, 13, 13, 12],
            },
            {
              id: "storage",
              label: "Available storage",
              value: "680",
              unit: "MWh",
              delta: "74% of 920 MWh capacity",
              tone: "neutral",
              meter: { value: 680, max: 920 },
            },
            {
              id: "price",
              label: "Average spot price",
              value: "€84.20",
              unit: "/MWh",
              delta: "€6.10 higher than yesterday",
              tone: "good",
              direction: "up",
              trend: [71, 73, 72, 75, 77, 76, 79, 80, 78, 81, 83, 84.2],
            },
          ],
          mix: [
            { id: "wind", label: "Wind", share: 41 },
            { id: "solar", label: "Solar", share: 33 },
            { id: "hydro", label: "Hydro", share: 14 },
            { id: "other", label: "Other", share: 12 },
          ],
          actions: [
            {
              id: "charge-ridgeway",
              title: "Charge Ridgeway battery",
              detail: "13:00 to 15:00, absorbs 186 MWh of solar surplus",
              tag: "Storage",
            },
            {
              id: "bid-evening-peak",
              title: "Bid 60 MW into the evening peak",
              detail: "18:00 to 20:00 at an expected €118/MWh",
              tag: "Market",
            },
            {
              id: "precool-harbor",
              title: "Pre-cool the Harbor district",
              detail: "16:30 to 17:30, trims 42 MW off the peak",
              tag: "Demand",
            },
          ],
        },
        {
          id: "tomorrow",
          label: "Tomorrow",
          chartSubtitle: "Hourly load forecast in MW",
          tickEvery: 3,
          nowIndex: null,
          points: [
            1900, 1800, 1720, 1680, 1700, 1820, 2060, 2310, 2470, 2500, 2430, 2330, 2250, 2210, 2290, 2450, 2660, 2880, 2990, 3020, 2840,
            2580, 2330, 2090,
          ].map((e, t) => ({ label: eE[t], forecast: e, actual: null, ...e$(e, 0.03 + 0.0012 * t) })),
          kpis: [
            {
              id: "peak",
              label: "Forecasted peak load",
              value: "3,020",
              unit: "MW",
              delta: "+3.6% vs today, at 19:00",
              tone: "neutral",
              direction: "up",
              trend: [2700, 2740, 2690, 2780, 2810, 2760, 2850, 2880, 2840, 2914, 2960, 3020],
            },
            {
              id: "curtailment",
              label: "Curtailment risk",
              value: "9",
              unit: "%",
              delta: "3 pts lower than today",
              tone: "good",
              direction: "down",
              trend: [16, 15, 15, 14, 14, 13, 12, 12, 11, 10, 10, 9],
            },
            {
              id: "storage",
              label: "Available storage",
              value: "742",
              unit: "MWh",
              delta: "81% of 920 MWh capacity",
              tone: "neutral",
              meter: { value: 742, max: 920 },
            },
            {
              id: "price",
              label: "Average spot price",
              value: "€91.40",
              unit: "/MWh",
              delta: "€7.20 higher than today",
              tone: "good",
              direction: "up",
              trend: [76, 78, 77, 80, 82, 81, 84, 86, 85, 88, 90, 91.4],
            },
          ],
          mix: [
            { id: "wind", label: "Wind", share: 47 },
            { id: "solar", label: "Solar", share: 28 },
            { id: "hydro", label: "Hydro", share: 13 },
            { id: "other", label: "Other", share: 12 },
          ],
          actions: [
            {
              id: "hold-ridgeway",
              title: "Hold Ridgeway battery at 80%",
              detail: "Until 17:00, reserved for the 19:00 peak",
              tag: "Storage",
            },
            {
              id: "bid-tomorrow-evening",
              title: "Bid 85 MW into 18:00 to 21:00",
              detail: "Expected clearing price of €126/MWh",
              tag: "Market",
            },
            {
              id: "service-kestrel",
              title: "Service the Kestrel Ridge turbines",
              detail: "05:00 to 08:00, the calmest wind of the day",
              tag: "Assets",
            },
          ],
        },
        {
          id: "week",
          label: "Next 7 days",
          chartSubtitle: "Daily peak load forecast in MW",
          tickEvery: 1,
          nowIndex: null,
          points: [2914, 3020, 2550, 2680, 3080, 2970, 3010].map((e, t) => ({
            label: eW[t],
            forecast: e,
            actual: null,
            ...e$(e, 0.02 + 0.006 * t),
          })),
          kpis: [
            {
              id: "peak",
              label: "Highest peak this week",
              value: "3,080",
              unit: "MW",
              delta: "Tuesday evening",
              tone: "neutral",
              trend: [2914, 3020, 2550, 2680, 3080, 2970, 3010],
            },
            {
              id: "curtailment",
              label: "Curtailment risk",
              value: "14",
              unit: "%",
              delta: "2 pts higher than last week",
              tone: "bad",
              direction: "up",
              trend: [11, 12, 12, 13, 12, 13, 14],
            },
            {
              id: "storage",
              label: "Average available storage",
              value: "615",
              unit: "MWh",
              delta: "67% of 920 MWh capacity",
              tone: "neutral",
              meter: { value: 615, max: 920 },
            },
            {
              id: "price",
              label: "Average spot price",
              value: "€79.80",
              unit: "/MWh",
              delta: "€4.40 lower than last week",
              tone: "bad",
              direction: "down",
              trend: [86, 85, 83, 82, 80, 81, 79.8],
            },
          ],
          mix: [
            { id: "wind", label: "Wind", share: 44 },
            { id: "solar", label: "Solar", share: 30 },
            { id: "hydro", label: "Hydro", share: 15 },
            { id: "other", label: "Other", share: 11 },
          ],
          actions: [
            { id: "move-maintenance", title: "Move maintenance to Sunday", detail: "Lowest peak of the week at 2,550 MW", tag: "Assets" },
            { id: "lock-tuesday", title: "Lock in Tuesday evening", detail: "Forward bid for 70 MW at €131/MWh", tag: "Market" },
            {
              id: "tighten-alerts",
              title: "Tighten curtailment alerts",
              detail: "Solar surplus expected on Sunday and Monday",
              tag: "Storage",
            },
          ],
        },
      ],
      eV = (0, n.default)("Bell", [
        ["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9", key: "1qo2s2" }],
        ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }],
      ]),
      eL = (0, n.default)("LayoutGrid", [
        ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }],
        ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }],
        ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }],
        ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }],
      ]),
      eO = (0, n.default)("Search", [
        ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
        ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
      ]),
      eI = (0, n.default)("Settings", [
        [
          "path",
          {
            d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
            key: "1qme2f",
          },
        ],
        ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
      ]),
      eD = ["Overview", "Forecast & balancing", "Operations", "Assets", "Markets", "Reports"],
      eq = [eL, eN, ew, q, eV],
      eF = () => {
        let [e, a] = (0, i.useState)("today"),
          [s, r] = (0, i.useState)({}),
          n = eR.find((t) => t.id === e) ?? eR[0];
        return (0, t.jsx)("div", {
          role: "region",
          "aria-label": "Interactive preview of the SolarLifeStyle dashboard",
          className:
            "overflow-hidden rounded-[1.75rem] bg-background text-left shadow-[0_60px_120px_-50px_rgba(0,0,0,0.75)] ring-1 ring-white/15",
          children: (0, t.jsxs)("div", {
            className: "flex",
            children: [
              (0, t.jsxs)("div", {
                "aria-hidden": "true",
                className: "hidden w-[68px] shrink-0 flex-col items-center border-r border-black/5 bg-white/70 py-5 lg:flex",
                children: [
                  (0, t.jsx)(eu.LogoMark, { className: "size-7" }),
                  (0, t.jsx)("div", {
                    className: "mt-8 flex flex-col gap-2",
                    children: eq.map((e, a) =>
                      (0, t.jsx)(
                        "span",
                        {
                          className: (0, z.cn)(
                            "flex size-10 items-center justify-center rounded-xl",
                            1 === a ? "bg-foreground text-white" : "text-muted-foreground",
                          ),
                          children: (0, t.jsx)(e, { className: "size-[18px]" }),
                        },
                        a,
                      ),
                    ),
                  }),
                  (0, t.jsx)("span", {
                    className: "mt-auto flex size-10 items-center justify-center rounded-xl text-muted-foreground",
                    children: (0, t.jsx)(eI, { className: "size-[18px]" }),
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                className: "min-w-0 flex-1",
                children: [
                  (0, t.jsxs)("div", {
                    className: "flex items-center justify-between gap-4 border-b border-black/5 bg-white/70 px-4 py-3 sm:px-6",
                    children: [
                      (0, t.jsx)("div", {
                        "aria-hidden": "true",
                        className: "flex min-w-0 items-center gap-1",
                        children: eD.map((e, a) =>
                          (0, t.jsx)(
                            "span",
                            {
                              className: (0, z.cn)(
                                "whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium",
                                1 === a ? "bg-background text-foreground ring-1 ring-black/5" : "hidden text-muted-foreground md:inline",
                                a > 3 && "md:hidden xl:inline",
                              ),
                              children: e,
                            },
                            e,
                          ),
                        ),
                      }),
                      (0, t.jsxs)("div", {
                        "aria-hidden": "true",
                        className: "flex shrink-0 items-center gap-2",
                        children: [
                          (0, t.jsxs)("span", {
                            className:
                              "hidden items-center gap-1.5 rounded-full bg-background px-3 py-1.5 text-xs text-muted-foreground ring-1 ring-black/5 sm:inline-flex",
                            children: [(0, t.jsx)(eO, { className: "size-3.5" }), "Search sites"],
                          }),
                          (0, t.jsx)("span", {
                            className:
                              "flex size-8 items-center justify-center rounded-full bg-forest text-[11px] font-semibold text-white",
                            children: "MH",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: "p-4 sm:p-6",
                    children: [
                      (0, t.jsxs)("div", {
                        className: "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
                        children: [
                          (0, t.jsxs)("div", {
                            children: [
                              (0, t.jsx)("h3", {
                                className: "font-heading text-xl font-medium tracking-tight text-foreground sm:text-2xl",
                                children: "Load forecast & balancing",
                              }),
                              (0, t.jsx)("p", {
                                className: "mt-1 text-xs text-muted-foreground sm:text-sm",
                                children: "AI forecasts for 42 sites, refreshed every five minutes",
                              }),
                            ],
                          }),
                          (0, t.jsx)("div", {
                            role: "group",
                            "aria-label": "Time range",
                            className: "inline-flex self-start rounded-full bg-white p-1 ring-1 ring-black/5 sm:self-auto",
                            children: eR.map((s) =>
                              (0, t.jsx)(
                                "button",
                                {
                                  type: "button",
                                  "aria-pressed": s.id === e,
                                  onClick: () => a(s.id),
                                  className: (0, z.cn)(
                                    "whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                                    s.id === e ? "bg-foreground text-white" : "text-muted-foreground hover:text-foreground",
                                  ),
                                  children: s.label,
                                },
                                s.id,
                              ),
                            ),
                          }),
                        ],
                      }),
                      (0, t.jsx)("div", {
                        className: "mt-5 grid grid-cols-2 gap-3 xl:grid-cols-4",
                        children: n.kpis.map((e) => (0, t.jsx)(ej, { item: e }, `${n.id}-${e.id}`)),
                      }),
                      (0, t.jsxs)("div", {
                        className: "mt-3 grid gap-3 lg:grid-cols-[minmax(0,1fr)_20rem]",
                        children: [
                          (0, t.jsxs)("div", {
                            className: "min-w-0 rounded-2xl bg-card p-4 ring-1 ring-black/[0.06] sm:p-5",
                            children: [
                              (0, t.jsxs)("div", {
                                className: "flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1",
                                children: [
                                  (0, t.jsx)("h4", {
                                    className: "text-sm font-medium text-foreground",
                                    children: "Load forecast vs. actual",
                                  }),
                                  (0, t.jsx)("p", { className: "text-xs text-muted-foreground", children: n.chartSubtitle }),
                                ],
                              }),
                              (0, t.jsx)("div", { className: "mt-3", children: (0, t.jsx)(eT, { range: n }, n.id) }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className: "flex flex-col gap-5 rounded-2xl bg-card p-4 ring-1 ring-black/[0.06] sm:p-5",
                            children: [
                              (0, t.jsx)(eC, { mix: n.mix }),
                              (0, t.jsx)("div", { className: "h-px bg-black/5" }),
                              (0, t.jsx)(e_, {
                                actions: n.actions,
                                scheduled: s,
                                onToggle: (e) => {
                                  r((t) => ({ ...t, [e]: !t[e] }));
                                },
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      },
      eH = ({ children: e, className: a }) => {
        let s = (0, i.useRef)(null),
          { scrollYProgress: r } = (0, _.useScroll)({ target: s, offset: ["start end", "start 0.2"] }),
          n = (0, S.useTransform)(r, [0, 1], [26, 0]),
          l = (0, S.useTransform)(r, [0, 1], [0.86, 1]),
          o = (0, S.useTransform)(r, [0, 1], [80, 0]),
          d = (0, S.useTransform)(r, [0, 0.45], [0.35, 1]);
        return (0, t.jsx)("div", {
          ref: s,
          className: a,
          style: { perspective: 1600 },
          children: (0, t.jsx)(M.motion.div, {
            style: { rotateX: n, scale: l, y: o, opacity: d, transformOrigin: "center top" },
            children: e,
          }),
        });
      },
      eG = [
        {
          icon: en.RefreshCw,
          title: "Refreshed every five minutes",
          text: "Weather models, SCADA readings and market prices stream in continuously, so the plan moves when the sky does.",
        },
        {
          icon: eo,
          title: "One picture for every team",
          text: "Control room, trading desk and asset managers work from the same numbers instead of three spreadsheets.",
        },
        {
          icon: el,
          title: "Every number explained",
          text: "Trace any forecast back to the weather, asset data and assumptions behind it before you act on it.",
        },
      ],
      eB = () =>
        (0, t.jsxs)("section", {
          id: "product",
          "aria-labelledby": "product-title",
          className: "relative isolate scroll-mt-20 overflow-hidden bg-forest py-24 sm:py-32",
          children: [
            (0, t.jsx)(r.default, {
              src: "/images/hills-mist.jpg",
              alt: "",
              fill: !0,
              sizes: "100vw",
              className: "-z-20 object-cover object-bottom opacity-60",
            }),
            (0, t.jsx)("div", {
              "aria-hidden": "true",
              className: "absolute inset-0 -z-10 bg-gradient-to-b from-forest via-forest/80 to-forest/95",
            }),
            (0, t.jsxs)("div", {
              className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
              children: [
                (0, t.jsx)(ec, {
                  id: "product-title",
                  eyebrow: "The platform",
                  tone: "dark",
                  align: "center",
                  title: "One calm workspace for the whole energy day.",
                  description:
                    "Forecasts, storage, prices and recommended actions sit side by side, so the people balancing your grid act on the same picture. Try it: switch the range, hover the chart, schedule an action.",
                }),
                (0, t.jsx)(eH, { className: "mt-14", children: (0, t.jsx)(eF, {}) }),
                (0, t.jsx)("ul", {
                  className: "mt-14 grid gap-8 sm:grid-cols-3",
                  children: eG.map((e) => {
                    let a = e.icon;
                    return (0, t.jsxs)(
                      "li",
                      {
                        className: "reveal flex gap-4",
                        children: [
                          (0, t.jsx)("span", {
                            className:
                              "flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-leaf ring-1 ring-white/15",
                            children: (0, t.jsx)(a, { className: "size-5", "aria-hidden": "true" }),
                          }),
                          (0, t.jsxs)("div", {
                            children: [
                              (0, t.jsx)("h3", { className: "text-base font-medium text-white", children: e.title }),
                              (0, t.jsx)("p", { className: "mt-1.5 text-sm leading-relaxed text-forest-foreground/65", children: e.text }),
                            ],
                          }),
                        ],
                      },
                      e.title,
                    );
                  }),
                }),
              ],
            }),
          ],
        });
    var eY = e.i(41298);
    let eU = ({ as: e = "div", children: a, className: s, tone: r = "light" }) => {
        let n = (0, i.useRef)(null);
        return (0, t.jsxs)(e, {
          ref: n,
          onPointerMove: (e) => {
            let t = n.current;
            if (!t) return;
            let a = t.getBoundingClientRect();
            (t.style.setProperty("--spot-x", `${e.clientX - a.left}px`), t.style.setProperty("--spot-y", `${e.clientY - a.top}px`));
          },
          className: (0, z.cn)("group/spot relative isolate transition-transform duration-500 ease-out hover:-translate-y-1", s),
          children: [
            (0, t.jsx)("span", {
              "aria-hidden": "true",
              className:
                "pointer-events-none absolute inset-0 -z-10 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover/spot:opacity-100",
              style: {
                background: `radial-gradient(420px circle at var(--spot-x, 50%) var(--spot-y, 50%), ${"dark" === r ? "rgba(87, 199, 106, 0.28)" : "rgba(87, 199, 106, 0.16)"}, transparent 65%)`,
              },
            }),
            a,
          ],
        });
      },
      eX = () => {
        let e = eR[0].points.map((e) => e.forecast),
          a = 0.94 * Math.min(...e),
          s = 1.02 * Math.max(...e),
          r = e.map((t, r) => ({ x: (r / (e.length - 1)) * 100, y: 60 - ((t - a) / (s - a)) * 60 })),
          i = r[e.indexOf(Math.max(...e))];
        return (0, t.jsx)("div", {
          role: "img",
          "aria-label": "SolarLifeStyle mobile app showing a forecast peak load of 2,914 megawatts at 18:00",
          className:
            "w-[248px] rounded-[2.75rem] bg-foreground p-2.5 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)] ring-1 ring-white/10 sm:w-[268px]",
          children: (0, t.jsxs)("div", {
            className:
              "relative overflow-hidden rounded-[2.25rem] bg-forest bg-gradient-to-b from-primary/35 to-transparent px-4 pb-6 pt-3 text-white",
            children: [
              (0, t.jsxs)("div", {
                className: "flex items-center justify-between px-2 text-[11px] font-semibold",
                children: [
                  (0, t.jsx)("span", { children: "9:41" }),
                  (0, t.jsx)("span", { className: "h-5 w-20 rounded-full bg-black" }),
                  (0, t.jsxs)("span", {
                    className: "flex items-center gap-1",
                    children: [
                      (0, t.jsxs)("span", {
                        className: "flex items-end gap-px",
                        children: [
                          (0, t.jsx)("span", { className: "h-1.5 w-[3px] rounded-sm bg-white" }),
                          (0, t.jsx)("span", { className: "h-2 w-[3px] rounded-sm bg-white" }),
                          (0, t.jsx)("span", { className: "h-2.5 w-[3px] rounded-sm bg-white" }),
                        ],
                      }),
                      (0, t.jsx)("span", {
                        className: "h-2.5 w-5 rounded-[3px] border border-white/70 p-px",
                        children: (0, t.jsx)("span", { className: "block h-full w-3/4 rounded-[1px] bg-white" }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                className: "mt-5 flex items-center justify-between",
                children: [
                  (0, t.jsxs)("span", {
                    className: "flex items-center gap-2 text-xs font-medium text-white/80",
                    children: [(0, t.jsx)(eu.LogoMark, { tone: "light", className: "size-5" }), "Load forecast"],
                  }),
                  (0, t.jsx)("span", {
                    className: "rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-medium text-white/80",
                    children: "Today",
                  }),
                ],
              }),
              (0, t.jsxs)("p", {
                className: "mt-5 font-heading text-[2.6rem] font-light leading-none tracking-tight",
                children: ["2,914", (0, t.jsx)("span", { className: "ml-1 text-sm font-normal text-white/60", children: "MW" })],
              }),
              (0, t.jsxs)("p", {
                className: "mt-2 flex items-center gap-1.5 text-[11px] text-white/70",
                children: [(0, t.jsx)("span", { className: "size-1.5 rounded-full bg-sun" }), "Peak expected at 18:00"],
              }),
              (0, t.jsxs)("div", {
                className: "relative mt-5 h-28",
                children: [
                  (0, t.jsxs)("svg", {
                    viewBox: "0 0 100 60",
                    preserveAspectRatio: "none",
                    className: "absolute inset-0 size-full overflow-visible",
                    children: [
                      (0, t.jsx)("path", { d: ey(r, 60), className: "fill-leaf/15" }),
                      (0, t.jsx)("path", {
                        d: eg(r),
                        fill: "none",
                        strokeWidth: 2,
                        strokeLinecap: "round",
                        vectorEffect: "non-scaling-stroke",
                        className: "stroke-leaf",
                      }),
                    ],
                  }),
                  (0, t.jsx)("span", {
                    className: "absolute size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sun ring-2 ring-forest",
                    style: { left: `${(i.x / 100) * 100}%`, top: `${(i.y / 60) * 100}%` },
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                className: "mt-2 flex justify-between text-[10px] text-white/45",
                children: [
                  (0, t.jsx)("span", { children: "00:00" }),
                  (0, t.jsx)("span", { children: "06:00" }),
                  (0, t.jsx)("span", { children: "12:00" }),
                  (0, t.jsx)("span", { children: "18:00" }),
                ],
              }),
              (0, t.jsxs)("div", {
                className: "mt-5 grid grid-cols-2 gap-2",
                children: [
                  (0, t.jsxs)("div", {
                    className: "rounded-2xl bg-white/[0.08] p-3",
                    children: [
                      (0, t.jsx)(el, { className: "size-4 text-leaf", "aria-hidden": "true" }),
                      (0, t.jsx)("p", { className: "mt-2 text-lg font-medium leading-none", children: "94%" }),
                      (0, t.jsx)("p", { className: "mt-1 text-[10px] text-white/60", children: "Confidence" }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: "rounded-2xl bg-white/[0.08] p-3",
                    children: [
                      (0, t.jsx)(ew, { className: "size-4 text-leaf", "aria-hidden": "true" }),
                      (0, t.jsx)("p", { className: "mt-2 text-lg font-medium leading-none", children: "680" }),
                      (0, t.jsx)("p", { className: "mt-1 text-[10px] text-white/60", children: "MWh ready" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      },
      eK = 2 * Math.PI * 52,
      eZ = Array.from({ length: 24 }, (e, t) => (t >= 11 && t <= 14 ? "charge" : t >= 17 && t <= 20 ? "discharge" : "idle")),
      eQ = { idle: "bg-mist", charge: "bg-primary", discharge: "bg-chart-2" },
      eJ = [
        { label: "Charging now", value: "+42 MW" },
        { label: "Full by", value: "15:10" },
        { label: "Held for the peak", value: "520 MWh" },
      ],
      e0 = () =>
        (0, t.jsxs)("div", {
          children: [
            (0, t.jsxs)("div", {
              className: "flex items-center gap-6 sm:gap-8",
              children: [
                (0, t.jsxs)("div", {
                  role: "img",
                  "aria-label": "Battery state of charge 72%",
                  className: "relative size-28 shrink-0 sm:size-32",
                  children: [
                    (0, t.jsxs)("svg", {
                      viewBox: "0 0 120 120",
                      className: "size-full -rotate-90",
                      children: [
                        (0, t.jsx)("circle", { cx: "60", cy: "60", r: 52, fill: "none", strokeWidth: "10", className: "stroke-leaf-soft" }),
                        (0, t.jsx)("circle", {
                          cx: "60",
                          cy: "60",
                          r: 52,
                          fill: "none",
                          strokeWidth: "10",
                          strokeLinecap: "round",
                          strokeDasharray: eK,
                          strokeDashoffset: 0.28 * eK,
                          className: "stroke-primary",
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: "absolute inset-0 flex flex-col items-center justify-center",
                      children: [
                        (0, t.jsxs)("span", {
                          className: "font-heading text-3xl font-light tracking-tight text-foreground",
                          children: [72, "%"],
                        }),
                        (0, t.jsx)("span", { className: "text-[11px] text-muted-foreground", children: "charged" }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsx)("dl", {
                  className: "grid flex-1 gap-3",
                  children: eJ.map((e) =>
                    (0, t.jsxs)(
                      "div",
                      {
                        className: "flex items-baseline justify-between gap-3 border-b border-black/5 pb-2.5 last:border-0 last:pb-0",
                        children: [
                          (0, t.jsx)("dt", { className: "text-sm text-muted-foreground", children: e.label }),
                          (0, t.jsx)("dd", { className: "text-sm font-medium text-foreground", children: e.value }),
                        ],
                      },
                      e.label,
                    ),
                  ),
                }),
              ],
            }),
            (0, t.jsxs)("div", {
              className: "mt-7",
              children: [
                (0, t.jsxs)("div", {
                  className: "flex flex-wrap items-center justify-between gap-2",
                  children: [
                    (0, t.jsx)("p", { className: "text-xs font-medium text-foreground", children: "Ridgeway battery, today" }),
                    (0, t.jsxs)("ul", {
                      className: "flex items-center gap-3 text-[11px] text-muted-foreground",
                      children: [
                        (0, t.jsxs)("li", {
                          className: "flex items-center gap-1.5",
                          children: [
                            (0, t.jsx)("span", { "aria-hidden": "true", className: "size-2.5 rounded-[3px] bg-primary" }),
                            "Charge",
                          ],
                        }),
                        (0, t.jsxs)("li", {
                          className: "flex items-center gap-1.5",
                          children: [
                            (0, t.jsx)("span", { "aria-hidden": "true", className: "size-2.5 rounded-[3px] bg-chart-2" }),
                            "Discharge",
                          ],
                        }),
                        (0, t.jsxs)("li", {
                          className: "flex items-center gap-1.5",
                          children: [
                            (0, t.jsx)("span", { "aria-hidden": "true", className: "size-2.5 rounded-[3px] bg-mist ring-1 ring-black/5" }),
                            "Idle",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  role: "img",
                  "aria-label": "Battery plan: charge from 11:00 to 15:00, discharge from 17:00 to 21:00, idle otherwise",
                  className: "mt-3 grid grid-cols-24 gap-[2px]",
                  children: eZ.map((e, a) =>
                    (0, t.jsx)(
                      "span",
                      { className: (0, z.cn)("h-9 rounded-[4px]", eQ[e], 13 === a && "ring-2 ring-sun ring-offset-1 ring-offset-white") },
                      a,
                    ),
                  ),
                }),
                (0, t.jsxs)("div", {
                  "aria-hidden": "true",
                  className: "mt-2 flex justify-between text-[11px] tabular-nums text-muted-foreground",
                  children: [
                    (0, t.jsx)("span", { children: "00:00" }),
                    (0, t.jsx)("span", { children: "06:00" }),
                    (0, t.jsx)("span", { children: "12:00" }),
                    (0, t.jsx)("span", { children: "18:00" }),
                    (0, t.jsx)("span", { children: "24:00" }),
                  ],
                }),
              ],
            }),
          ],
        }),
      e1 = [62, 58, 55, 53, 54, 60, 74, 92, 98, 88, 72, 58, 46, 41, 44, 63, 89, 112, 128, 131, 117, 96, 81, 70],
      e2 = new Set([7, 8, 9, 17, 18, 19, 20]),
      e5 = Math.max(...e1),
      e4 = Math.min(...e1),
      e3 = e1.indexOf(e5),
      e6 = (e) => `${String(e).padStart(2, "0")}:00`,
      e8 = () => {
        let [e, a] = (0, i.useState)(null),
          s = (0, i.useId)(),
          r = null === e ? 0 : ((e + 0.5) / e1.length) * 100;
        return (0, t.jsxs)("div", {
          children: [
            (0, t.jsxs)("div", {
              className: "flex flex-wrap items-center justify-between gap-2",
              children: [
                (0, t.jsx)("p", { className: "text-xs font-medium text-foreground", children: "Day-ahead price, €/MWh" }),
                (0, t.jsxs)("ul", {
                  className: "flex items-center gap-3 text-[11px] text-muted-foreground",
                  children: [
                    (0, t.jsxs)("li", {
                      className: "flex items-center gap-1.5",
                      children: [
                        (0, t.jsx)("span", { "aria-hidden": "true", className: "size-2.5 rounded-[3px] bg-primary" }),
                        "Bid window",
                      ],
                    }),
                    (0, t.jsxs)("li", {
                      className: "flex items-center gap-1.5",
                      children: [(0, t.jsx)("span", { "aria-hidden": "true", className: "size-2.5 rounded-[3px] bg-sage" }), "Other hours"],
                    }),
                  ],
                }),
              ],
            }),
            (0, t.jsxs)("div", {
              className: "relative mt-8",
              children: [
                (0, t.jsx)("div", {
                  role: "group",
                  tabIndex: 0,
                  "aria-roledescription": "chart",
                  "aria-label": "Hourly day-ahead prices with recommended bid windows",
                  "aria-describedby": s,
                  onKeyDown: (e) => {
                    "ArrowRight" === e.key
                      ? (e.preventDefault(), a((e) => (null === e ? e3 : Math.min(e1.length - 1, e + 1))))
                      : "ArrowLeft" === e.key
                        ? (e.preventDefault(), a((e) => (null === e ? e3 : Math.max(0, e - 1))))
                        : "Escape" === e.key && a(null);
                  },
                  onBlur: () => a(null),
                  onPointerLeave: () => a(null),
                  className:
                    "flex h-36 items-end gap-[2px] rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4",
                  children: e1.map((s, r) =>
                    (0, t.jsx)(
                      "div",
                      {
                        onPointerEnter: () => a(r),
                        onPointerDown: () => a(r),
                        className: "flex h-full flex-1 items-end justify-center",
                        children: (0, t.jsx)("span", {
                          className: (0, z.cn)(
                            "relative w-full max-w-[24px] rounded-t-[4px] transition-opacity duration-150",
                            e2.has(r) ? "bg-primary" : "bg-sage",
                            null !== e && e !== r && "opacity-45",
                          ),
                          style: { height: `${(s / e5) * 100}%` },
                          children:
                            r === e3 &&
                            (0, t.jsxs)("span", {
                              "aria-hidden": "true",
                              className: (0, z.cn)(
                                "absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px] font-medium text-foreground transition-opacity",
                                null !== e && "opacity-0",
                              ),
                              children: ["€", s],
                            }),
                        }),
                      },
                      r,
                    ),
                  ),
                }),
                null !== e &&
                  (0, t.jsxs)("div", {
                    "aria-hidden": "true",
                    className: (0, z.cn)(
                      "pointer-events-none absolute -top-7 whitespace-nowrap rounded-lg bg-foreground px-2.5 py-1.5 text-[11px] text-white shadow-lg",
                      r > 80 ? "-translate-x-full" : r < 20 ? "translate-x-0" : "-translate-x-1/2",
                    ),
                    style: { left: `${r}%` },
                    children: [
                      (0, t.jsxs)("span", { className: "font-semibold", children: ["€", e1[e]] }),
                      (0, t.jsxs)("span", { className: "text-white/70", children: [" at ", e6(e)] }),
                      e2.has(e) &&
                        (0, t.jsx)("span", {
                          className: "ml-1.5 rounded-full bg-leaf/25 px-1.5 py-px text-[10px] text-leaf",
                          children: "Bid",
                        }),
                    ],
                  }),
                (0, t.jsxs)("div", {
                  "aria-hidden": "true",
                  className: "mt-2 flex justify-between text-[11px] tabular-nums text-muted-foreground",
                  children: [
                    (0, t.jsx)("span", { children: "00:00" }),
                    (0, t.jsx)("span", { children: "06:00" }),
                    (0, t.jsx)("span", { children: "12:00" }),
                    (0, t.jsx)("span", { children: "18:00" }),
                    (0, t.jsx)("span", { children: "23:00" }),
                  ],
                }),
                (0, t.jsxs)("p", {
                  id: s,
                  className: "sr-only",
                  children: [
                    "Prices range from €",
                    e4,
                    " to €",
                    e5,
                    " per MWh, peaking at ",
                    e6(e3),
                    ". Recommended bid windows are 07:00 to 10:00 and 17:00 to 21:00. Use the arrow keys to read each hour.",
                  ],
                }),
                (0, t.jsx)("p", {
                  className: "sr-only",
                  "aria-live": "polite",
                  children: null === e ? "" : `${e6(e)}: €${e1[e]} per MWh${e2.has(e) ? ", bid window" : ""}.`,
                }),
              ],
            }),
          ],
        });
      };
    var e7 = e.i(88478);
    let e9 = (0, n.default)("BellRing", [
        ["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9", key: "1qo2s2" }],
        ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }],
        ["path", { d: "M4 2C2.8 3.7 2 5.7 2 8", key: "tap9e0" }],
        ["path", { d: "M22 8c0-2.3-.8-4.3-2-6", key: "5bb3ad" }],
      ]),
      te = (0, n.default)("ChartColumn", [
        ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
        ["path", { d: "M18 17V9", key: "2bz60n" }],
        ["path", { d: "M13 17V5", key: "1frdt8" }],
        ["path", { d: "M8 17v-3", key: "17ska0" }],
      ]),
      tt = (0, n.default)("FileCheck2", [
        ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4", key: "1pf5j1" }],
        ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
        ["path", { d: "m3 15 2 2 4-4", key: "1lhrkk" }],
      ]),
      ta = (0, n.default)("HeartPulse", [
        [
          "path",
          {
            d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
            key: "c3ymky",
          },
        ],
        ["path", { d: "M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27", key: "1uw2ng" }],
      ]),
      ts = (0, n.default)("Repeat", [
        ["path", { d: "m17 2 4 4-4 4", key: "nntrym" }],
        ["path", { d: "M3 11v-1a4 4 0 0 1 4-4h14", key: "84bu3i" }],
        ["path", { d: "m7 22-4-4 4-4", key: "1wqhfi" }],
        ["path", { d: "M21 13v1a4 4 0 0 1-4 4H3", key: "1rx37r" }],
      ]),
      tr = [
        {
          icon: e9,
          title: "Curtailment alerts",
          text: "Know hours ahead when output will outrun the grid, with a plan for where the surplus should go.",
        },
        {
          icon: ta,
          title: "Asset health",
          text: "Spot the turbine, string or battery cell that is underperforming before it costs you a peak.",
        },
        {
          icon: tt,
          title: "Audit-ready reports",
          text: "Every dispatch decision is logged with the forecast and price that justified it.",
        },
      ],
      ti = [
        { label: "Forecast", note: "Predicts the surplus", className: "items-start text-left" },
        { label: "Balance", note: "Stores it", className: "items-center text-center" },
        { label: "Trade", note: "Sells it at the peak", className: "items-end text-right" },
      ],
      tn = (e) => Math.min(Math.max(e, 0), 1),
      tl = (e) => tn((e - 0.05) / 0.9),
      to = (e, t, a) => {
        let s = (0, S.useTransform)(() => {
            let { distance: s, centers: r } = a.get(),
              i = r[e];
            return s <= 0 || void 0 === i ? 0 : t.get() - i;
          }),
          r = (0, S.useTransform)(s, (e) => 1 - Math.min(Math.abs(e) / 0.45, 1));
        return { offset: s, focus: r };
      },
      td = ({ icon: e, label: a, tone: s = "light" }) =>
        (0, t.jsxs)("span", {
          className: (0, z.cn)(
            "inline-flex items-center gap-2 rounded-full py-1 pl-1 pr-3 text-xs font-medium",
            "dark" === s ? "bg-white/10 text-white ring-1 ring-white/15" : "bg-background text-foreground ring-1 ring-black/5",
          ),
          children: [
            (0, t.jsx)("span", {
              className: (0, z.cn)(
                "flex size-6 items-center justify-center rounded-full",
                "dark" === s ? "bg-leaf text-forest" : "bg-primary text-white",
              ),
              children: (0, t.jsx)(e, { className: "size-3.5", "aria-hidden": "true" }),
            }),
            a,
          ],
        }),
      tc = ({ icon: e, label: a, text: s, tone: r = "light" }) => {
        let i = "dark" === r;
        return (0, t.jsxs)("p", {
          className: (0, z.cn)(
            "mt-auto flex items-center gap-3 pt-8 text-sm leading-snug",
            i ? "text-forest-foreground/70" : "text-muted-foreground",
          ),
          children: [
            (0, t.jsx)("span", {
              className: (0, z.cn)(
                "flex size-9 shrink-0 items-center justify-center rounded-full ring-1",
                i ? "bg-white/10 text-leaf ring-white/15" : "bg-accent text-accent-foreground ring-black/5",
              ),
              children: (0, t.jsx)(e, { className: "size-4", "aria-hidden": "true" }),
            }),
            (0, t.jsxs)("span", {
              children: [
                (0, t.jsx)("span", { className: (0, z.cn)("font-medium", i ? "text-white" : "text-foreground"), children: a }),
                " ",
                s,
              ],
            }),
          ],
        });
      },
      tu = ({ stage: e, pinned: a, tone: s = "light", background: r, visual: i, visualClassName: n, children: l }) => {
        let o = (0, S.useTransform)(e.focus, [0, 1], [0.9, 1]),
          d = (0, S.useTransform)(e.focus, [0, 1], [0.5, 1]),
          c = (0, S.useTransform)(e.focus, [0, 1], [56, 0]);
        return (0, t.jsxs)(M.motion.article, {
          "data-panel": "",
          "data-stage": "",
          style: a ? { scale: o, opacity: d } : void 0,
          className: (0, z.cn)(
            "relative isolate overflow-hidden rounded-[2rem]",
            "dark" === s ? "bg-forest text-white" : "bg-white ring-1 ring-inset ring-black/5",
            a && "lg:h-full lg:w-[min(72vw,56rem)] lg:shrink-0",
          ),
          children: [
            r,
            (0, t.jsxs)("div", {
              className: (0, z.cn)(
                "flex flex-col gap-8 p-6 sm:p-8 lg:grid lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-10 lg:p-10",
                a && "lg:h-full lg:grid-rows-[minmax(0,1fr)]",
              ),
              children: [
                (0, t.jsx)("div", { className: "flex flex-col", children: l }),
                (0, t.jsx)(M.motion.div, { style: a ? { y: c } : void 0, className: n, children: i }),
              ],
            }),
          ],
        });
      },
      tm = ({ fill: e, at: a, label: s, note: r, className: i }) => {
        let n = (0, S.useTransform)(e, [a - 0.04, a], [0, 1]),
          l = (0, S.useTransform)(n, [0, 1], [0.45, 1]);
        return (0, t.jsxs)("li", {
          className: (0, z.cn)("flex flex-col gap-1.5", i),
          children: [
            (0, t.jsx)("span", {
              className: "relative size-3.5 rounded-full bg-background ring-1 ring-foreground/20",
              children: (0, t.jsx)(M.motion.span, {
                className: "absolute inset-0 rounded-full bg-primary shadow-[0_0_0_5px_rgba(30,133,56,0.16)]",
                style: { opacity: n, scale: n },
              }),
            }),
            (0, t.jsx)(M.motion.span, { style: { opacity: l }, className: "mt-2 text-sm font-medium text-foreground", children: s }),
            (0, t.jsx)(M.motion.span, { style: { opacity: l }, className: "text-xs text-muted-foreground", children: r }),
          ],
        });
      },
      th = ({ fill: e }) => {
        let a = (0, S.useTransform)(e, (e) => `${100 * e}%`);
        return (0, t.jsxs)("div", {
          "aria-hidden": "true",
          className: "relative hidden w-full max-w-md shrink-0 pb-1 lg:block",
          children: [
            (0, t.jsxs)("div", {
              className: "absolute inset-x-[7px] top-[7px] h-px bg-foreground/10",
              children: [
                (0, t.jsx)(M.motion.div, {
                  className: "absolute inset-0 origin-left bg-gradient-to-r from-leaf to-primary",
                  style: { scaleX: e },
                }),
                (0, t.jsx)(M.motion.span, {
                  className:
                    "absolute top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-leaf shadow-[0_0_12px_2px_rgba(87,199,106,0.65)]",
                  style: { left: a },
                }),
              ],
            }),
            (0, t.jsx)("ol", {
              className: "relative flex justify-between",
              children: ti.map((a, s) =>
                (0, t.jsx)(tm, { fill: e, at: s / (ti.length - 1), label: a.label, note: a.note, className: a.className }, a.label),
              ),
            }),
          ],
        });
      },
      tx = () => {
        let e = !E(),
          a = (0, i.useRef)(null),
          s = (0, i.useRef)(null),
          n = (0, i.useRef)(null),
          l = (0, eY.useMotionValue)({ distance: 0, centers: [] }),
          { scrollYProgress: o } = (0, _.useScroll)({ target: a, offset: ["start start", "end end"] }),
          d = (0, S.useTransform)(o, tl),
          c = (0, S.useTransform)(() => -d.get() * l.get().distance),
          u = (0, S.useTransform)(() =>
            ((e, t) => {
              let [a, s, r] = 3 === t.length ? t : [0, 0.5, 1];
              return e <= a
                ? 0
                : e <= s
                  ? ((e - a) / Math.max(s - a, 1e-4)) * 0.5
                  : e <= r
                    ? 0.5 + ((e - s) / Math.max(r - s, 1e-4)) * 0.5
                    : 1;
            })(d.get(), l.get().centers),
          ),
          m = to(0, d, l),
          h = to(1, d, l),
          x = to(2, d, l),
          p = (0, S.useTransform)(m.offset, [-1, 1], [-140, 140]);
        return (
          (0, i.useEffect)(() => {
            let e = a.current,
              t = s.current,
              r = n.current;
            if (!e || !t || !r) return;
            let i = () => {
              let a = Math.max(r.offsetWidth - t.clientWidth, 0),
                s = t.clientWidth / 2,
                i = a > 0 ? Array.from(r.querySelectorAll("[data-stage]")).map((e) => (e.offsetLeft + e.offsetWidth / 2 - s) / a) : [];
              (l.set({ distance: a, centers: i }), e.style.setProperty("--pipeline-distance", `${Math.round(1.15 * a)}px`));
            };
            i();
            let o = new ResizeObserver(i);
            return (o.observe(t), o.observe(r), () => o.disconnect());
          }, [l, e]),
          (0, t.jsx)("section", {
            ref: a,
            id: "solutions",
            "aria-labelledby": "solutions-title",
            className: (0, z.cn)(
              "relative scroll-mt-20 bg-background py-24 sm:py-32",
              e && "lg:h-[calc(100svh_+_var(--pipeline-distance,_260svh))] lg:py-0",
            ),
            children: (0, t.jsxs)("div", {
              className: (0, z.cn)(e && "lg:sticky lg:top-0 lg:flex lg:h-svh lg:flex-col lg:overflow-hidden lg:pb-10 lg:pt-20"),
              children: [
                (0, t.jsx)("div", {
                  className: "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
                  children: (0, t.jsxs)("div", {
                    className: "flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between",
                    children: [
                      (0, t.jsx)(ec, {
                        id: "solutions-title",
                        eyebrow: "Solutions",
                        title: "Forecast. Balance. Trade.",
                        accent: "Three jobs, one platform.",
                      }),
                      e && (0, t.jsx)(th, { fill: u }),
                    ],
                  }),
                }),
                (0, t.jsx)("div", {
                  ref: s,
                  onFocusCapture: (t) => {
                    let r = a.current,
                      i = s.current,
                      { distance: n } = l.get();
                    if (!e || !r || !i || n <= 0) return;
                    let o = t.target.closest("[data-panel]");
                    if (!o) return;
                    let d = tn((o.offsetLeft + o.offsetWidth / 2 - i.clientWidth / 2) / n),
                      c = r.getBoundingClientRect().top + window.scrollY,
                      u = r.offsetHeight - window.innerHeight;
                    window.scrollTo({ top: c + (0.05 + 0.9 * d) * u });
                  },
                  className: (0, z.cn)("mt-12", e && "lg:mt-10 lg:min-h-0 lg:flex-1 lg:overflow-clip"),
                  children: (0, t.jsxs)(M.motion.div, {
                    ref: n,
                    style: e ? { x: c } : void 0,
                    className: (0, z.cn)(
                      "relative mx-auto flex max-w-7xl flex-col gap-4 px-4 sm:px-6 lg:px-8",
                      e &&
                        "lg:mx-0 lg:h-full lg:w-max lg:max-w-none lg:flex-row lg:gap-6 lg:px-[max(2rem,calc((100vw_-_80rem)/2_+_2rem))] lg:will-change-transform",
                    ),
                    children: [
                      (0, t.jsxs)("div", {
                        "data-panel": "",
                        className: (0, z.cn)(
                          "max-w-xl pb-4",
                          e && "lg:flex lg:w-[21rem] lg:max-w-none lg:shrink-0 lg:flex-col lg:justify-between lg:py-2",
                        ),
                        children: [
                          (0, t.jsx)("p", {
                            className: "text-base leading-relaxed text-muted-foreground lg:text-lg",
                            children:
                              "SolarLifeStyle replaces the patchwork of weather feeds, spreadsheets and late phone calls with one system that plans the energy day for you. Each stage hands its answer to the next.",
                          }),
                          e &&
                            (0, t.jsxs)("p", {
                              "aria-hidden": "true",
                              className:
                                "mt-8 hidden items-center gap-3 text-xs font-medium uppercase tracking-[0.14em] text-foreground/60 lg:flex",
                              children: [
                                "Scroll to follow the flow",
                                (0, t.jsx)("span", {
                                  className: "relative h-px w-14 overflow-hidden bg-foreground/15",
                                  children: (0, t.jsx)("span", { className: "flow-cue-line absolute inset-y-0 left-0 w-1/2 bg-primary" }),
                                }),
                              ],
                            }),
                        ],
                      }),
                      (0, t.jsxs)(tu, {
                        stage: m,
                        pinned: e,
                        tone: "dark",
                        background: (0, t.jsxs)(t.Fragment, {
                          children: [
                            (0, t.jsx)(M.motion.div, {
                              "aria-hidden": "true",
                              className: "absolute inset-y-0 -left-[12%] -right-[12%] -z-20",
                              style: e ? { x: p } : void 0,
                              children: (0, t.jsx)(r.default, {
                                src: "/images/hero-turbine.jpg",
                                alt: "",
                                fill: !0,
                                sizes: "(min-width: 1024px) 80vw, 100vw",
                                className: "object-cover object-[50%_75%]",
                              }),
                            }),
                            (0, t.jsx)("div", {
                              "aria-hidden": "true",
                              className:
                                "absolute inset-0 -z-10 bg-gradient-to-b from-forest via-forest/75 to-forest/20 lg:bg-gradient-to-r lg:from-forest lg:via-forest/80 lg:to-forest/10",
                            }),
                          ],
                        }),
                        visualClassName: "-mb-28 flex justify-center sm:-mb-24 lg:mb-0 lg:items-start",
                        visual: (0, t.jsx)(eX, {}),
                        children: [
                          (0, t.jsxs)("div", {
                            className: "flex items-center justify-between gap-4",
                            children: [
                              (0, t.jsx)(td, { icon: eN, label: "Forecast", tone: "dark" }),
                              (0, t.jsx)("span", { className: "font-mono text-xs text-white/50", children: "01 / 03" }),
                            ],
                          }),
                          (0, t.jsx)("h3", {
                            className:
                              "mt-6 max-w-md font-heading text-3xl font-light leading-tight tracking-[-0.03em] sm:text-4xl lg:text-3xl xl:text-4xl",
                            children: "See demand and generation coming, a week ahead.",
                          }),
                          (0, t.jsx)("p", {
                            className: "mt-4 max-w-md text-[15px] leading-relaxed text-forest-foreground/75",
                            children:
                              "Weather-aware forecasts at 15-minute resolution for every asset you run. SolarLifeStyle learns each site, from icing turbines to hazy afternoons, and shows you how sure it is.",
                          }),
                          (0, t.jsx)(tc, {
                            icon: e7.ArrowRight,
                            label: "Next, Balance.",
                            text: "The surplus it predicts becomes the battery plan.",
                            tone: "dark",
                          }),
                        ],
                      }),
                      (0, t.jsxs)(tu, {
                        stage: h,
                        pinned: e,
                        visualClassName: "lg:self-center",
                        visual: (0, t.jsx)(e0, {}),
                        children: [
                          (0, t.jsxs)("div", {
                            className: "flex items-center justify-between gap-4",
                            children: [
                              (0, t.jsx)(td, { icon: ew, label: "Balance" }),
                              (0, t.jsx)("span", { className: "font-mono text-xs text-muted-foreground", children: "02 / 03" }),
                            ],
                          }),
                          (0, t.jsx)("h3", {
                            className:
                              "mt-6 max-w-md font-heading text-3xl font-light leading-tight tracking-[-0.03em] text-foreground sm:text-4xl lg:text-3xl xl:text-4xl",
                            children: "Charge on the surplus. Discharge into the peak.",
                          }),
                          (0, t.jsx)("p", {
                            className: "mt-4 max-w-md text-[15px] leading-relaxed text-muted-foreground",
                            children:
                              "Dispatch plans that respect cycle limits, warranty terms and grid constraints, ready for one-click approval or autopilot.",
                          }),
                          (0, t.jsx)(tc, {
                            icon: e7.ArrowRight,
                            label: "Next, Trade.",
                            text: "Stored energy is offered into the hours that pay.",
                          }),
                        ],
                      }),
                      (0, t.jsxs)(tu, {
                        stage: x,
                        pinned: e,
                        visualClassName: "lg:self-center",
                        visual: (0, t.jsx)(e8, {}),
                        children: [
                          (0, t.jsxs)("div", {
                            className: "flex items-center justify-between gap-4",
                            children: [
                              (0, t.jsx)(td, { icon: te, label: "Trade" }),
                              (0, t.jsx)("span", { className: "font-mono text-xs text-muted-foreground", children: "03 / 03" }),
                            ],
                          }),
                          (0, t.jsx)("h3", {
                            className:
                              "mt-6 max-w-md font-heading text-3xl font-light leading-tight tracking-[-0.03em] text-foreground sm:text-4xl lg:text-3xl xl:text-4xl",
                            children: "Sell every megawatt in the hours that pay.",
                          }),
                          (0, t.jsx)("p", {
                            className: "mt-4 max-w-md text-[15px] leading-relaxed text-muted-foreground",
                            children:
                              "SolarLifeStyle ranks every window by price, risk and grid limits, then drafts the bid. Today that is an expected €41,200 more than flat selling.",
                          }),
                          (0, t.jsx)(tc, { icon: ts, label: "Back to Forecast.", text: "Every settled bid sharpens tomorrow's forecast." }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        "data-panel": "",
                        className: (0, z.cn)("pt-4", e && "lg:flex lg:h-full lg:w-[24rem] lg:shrink-0 lg:flex-col lg:pt-0"),
                        children: [
                          (0, t.jsx)("p", {
                            className: "text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground",
                            children: "Running underneath",
                          }),
                          (0, t.jsx)("ul", {
                            className: (0, z.cn)(
                              "mt-4 grid gap-4 md:grid-cols-3",
                              e && "lg:flex lg:min-h-0 lg:flex-1 lg:flex-col lg:gap-3",
                            ),
                            children: tr.map((a) => {
                              let s = a.icon;
                              return (0, t.jsxs)(
                                eU,
                                {
                                  as: "li",
                                  className: (0, z.cn)("rounded-[1.5rem] bg-white p-6 ring-1 ring-black/5", e && "lg:flex-1 lg:p-5"),
                                  children: [
                                    (0, t.jsxs)("div", {
                                      className: "flex items-center gap-3",
                                      children: [
                                        (0, t.jsx)("span", {
                                          className:
                                            "flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground",
                                          children: (0, t.jsx)(s, { className: "size-5", "aria-hidden": "true" }),
                                        }),
                                        (0, t.jsx)("h3", { className: "text-base font-medium text-foreground", children: a.title }),
                                      ],
                                    }),
                                    (0, t.jsx)("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground", children: a.text }),
                                  ],
                                },
                                a.title,
                              );
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          })
        );
      },
      tp = (0, n.default)("Quote", [
        [
          "path",
          {
            d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
            key: "rib7q0",
          },
        ],
        [
          "path",
          {
            d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
            key: "1ymkrd",
          },
        ],
      ]);
    var tf = e.i(88905),
      tg = e.i(93709),
      ty = e.i(51233),
      tb = e.i(83026),
      tv = e.i(48544),
      tj = e.i(62448);
    let tw = [];
    function tN(e) {
      (0, tg.removeItem)(tw, e);
    }
    function tk(e, t, a = {}, s) {
      let r = [],
        { velocity: i } = a,
        n = a.reduceMotion ?? s?.shouldReduceMotion;
      for (let l in t) {
        if ("transition" === l || "transitionEnd" === l) continue;
        let o = t[l];
        if (void 0 === o) continue;
        let d = e(l),
          c = d.get();
        if (void 0 !== c && !d.isAnimating() && !Array.isArray(o) && o === c && !i) {
          tj.frame.update(() => d.set(o));
          continue;
        }
        (d.start((0, tv.animateMotionValue)(l, d, o, n && ty.positionalKeys.has(l) ? { type: !1 } : a, s)),
          d.animation && r.push(d.animation));
      }
      let { transitionEnd: l } = t;
      if (l) {
        let t = () =>
          tj.frame.update(() => {
            for (let t in l) e(t).set(l[t]);
          });
        r.length ? Promise.all(r).then(t) : t();
      }
      return r;
    }
    function tM(e, t, a, s, r) {
      return tk(
        (s) => {
          let i = e.get(t, s);
          if (!i) {
            let l;
            if (!r) {
              var n;
              let r,
                i = a[s];
              ((l = (null === (r = Array.isArray((n = i)) ? n[0] : void 0) ? void 0 : r) ?? e.read(t, s, i)),
                (0, tf.invariant)(
                  void 0 !== l,
                  `"${s}" can't be read from the animated subject. Provide [from, to] keyframes.`,
                  "effect-unreadable-value",
                ));
            }
            e(t, { [s]: (i = (0, tb.motionValue)(l, { owner: r })) });
          }
          return i;
        },
        a,
        s,
        r,
      );
    }
    class t_ {
      constructor(e) {
        ((this.stop = () => this.runAll("stop")), (this.animations = e.filter(Boolean)));
      }
      get finished() {
        return Promise.all(this.animations.map((e) => e.finished));
      }
      getAll(e) {
        return this.animations[0][e];
      }
      setAll(e, t) {
        for (let a = 0; a < this.animations.length; a++) this.animations[a][e] = t;
      }
      attachTimeline(e) {
        let t = this.animations.map((t) => t.attachTimeline(e));
        return () => {
          t.forEach((e, t) => {
            (e && e(), this.animations[t].stop());
          });
        };
      }
      get time() {
        return this.getAll("time");
      }
      set time(e) {
        this.setAll("time", e);
      }
      get speed() {
        return this.getAll("speed");
      }
      set speed(e) {
        this.setAll("speed", e);
      }
      get state() {
        return this.getAll("state");
      }
      get startTime() {
        return this.getAll("startTime");
      }
      get duration() {
        return tS(this.animations, "duration");
      }
      get iterationDuration() {
        return tS(this.animations, "iterationDuration");
      }
      runAll(e) {
        this.animations.forEach((t) => t[e]());
      }
      play() {
        this.runAll("play");
      }
      pause() {
        this.runAll("pause");
      }
      cancel() {
        this.runAll("cancel");
      }
      complete() {
        this.runAll("complete");
      }
    }
    function tS(e, t) {
      let a = 0;
      for (let s = 0; s < e.length; s++) {
        let r = e[s][t];
        null !== r && r > a && (a = r);
      }
      return a;
    }
    class tz extends t_ {
      then(e, t) {
        return this.finished.finally(e).then(() => {});
      }
    }
    var tT = e.i(151),
      tA = e.i(65907),
      tC = e.i(95129),
      tE = e.i(25778),
      tP = e.i(37657),
      tW = e.i(73),
      t$ = e.i(61064),
      tR = e.i(27524),
      tV = e.i(35846),
      tL = e.i(47836);
    function tO(e, t) {
      var a;
      let s;
      return (0, tL.isEasingArray)(e) ? e[((a = e.length), ((((t - 0) % (s = a - 0)) + s) % s) + 0)] : e;
    }
    var tI = e.i(98715);
    function tD(e) {
      return "object" == typeof e && !Array.isArray(e);
    }
    function tq(e, t, a, s) {
      return null == e
        ? []
        : "string" == typeof e && tD(t)
          ? (0, tI.resolveElements)(e, a, s)
          : e instanceof NodeList
            ? Array.from(e)
            : Array.isArray(e)
              ? e.filter((e) => null != e)
              : [e];
    }
    function tF(e, t, a, s) {
      return "number" == typeof t
        ? t
        : t.startsWith("-") || t.startsWith("+")
          ? Math.max(0, e + parseFloat(t))
          : "<" === t
            ? a
            : t.startsWith("<")
              ? Math.max(0, a + parseFloat(t.slice(1)))
              : (s.get(t) ?? e);
    }
    var tH = e.i(66651);
    function tG(e, t) {
      return e.at !== t.at ? e.at - t.at : null === e.value ? 1 : null === t.value ? -1 : 0;
    }
    function tB(e, t) {
      return (t.has(e) || t.set(e, {}), t.get(e));
    }
    function tY(e, t) {
      return (t[e] || (t[e] = []), t[e]);
    }
    let tU = (e) => "number" == typeof e,
      tX = (e) => e.every(tU);
    var tK = e.i(10389),
      tZ = e.i(67130),
      tQ = e.i(54389),
      tJ = e.i(55810),
      t0 = e.i(20972),
      t1 = e.i(53882),
      t2 = e.i(30717);
    class t5 {
      constructor(e = tj.frame.render) {
        ((this.step = e),
          (this.values = new Map()),
          (this.pending = []),
          (this.numPending = 0),
          (this.flush = () => {
            let { pending: e, numPending: t } = this;
            this.numPending = 0;
            for (let a = 0; a < t; a++) e[a]();
          }));
      }
      set(e, t, a, s) {
        if ((this.values.get(e)?.onRemove(), s)) for (let e of this.values.values()) e.value === s && (a = e.render);
        let r = () => a && this.schedule(a);
        void 0 !== t.get() && r();
        let i = t.on("change", r),
          n = () => {
            (i(), a && !s && this.cancel(a), this.values.get(e)?.onRemove === n && this.values.delete(e));
          };
        return (this.values.set(e, { value: t, render: s ? void 0 : a, onRemove: n }), n);
      }
      get(e) {
        return this.values.get(e)?.value;
      }
      release() {
        let e = new Map();
        return (
          this.values.forEach((t, a) => {
            (e.set(a, t.value), t.onRemove());
          }),
          (this.transformKeys = this.transformValues = void 0),
          e
        );
      }
      schedule(e) {
        let { pending: t, numPending: a } = this;
        for (let s = 0; s < a; s++) if (t[s] === e) return;
        (a || this.step(this.flush), (t[this.numPending++] = e));
      }
      cancel(e) {
        let { pending: t } = this;
        for (let a = 0; a < this.numPending; a++)
          if (t[a] === e) {
            t[a] = t[--this.numPending];
            return;
          }
      }
    }
    function t4(e, { step: t, ...a } = {}) {
      let s = new WeakMap();
      return Object.assign(
        (a, r) => {
          let i = s.get(a) ?? new t5(t);
          s.set(a, i);
          let n = [];
          for (let t in r) {
            let s = r[t],
              l = e(a, i, t, s);
            n.push(l);
          }
          return () => {
            for (let e of n) e();
          };
        },
        a,
        { get: (e, t) => s.get(e)?.get(t), flush: (e) => s.get(e)?.flush(), state: (e) => s.get(e) },
      );
    }
    var t3 = e.i(78673);
    let t6 = { x: "translateX", y: "translateY", z: "translateZ", transformPerspective: "perspective" },
      t8 = {},
      t7 = new Set(["originX", "originY", "originZ"]),
      t9 = (e, t) => (0, t2.getValueAsType)(e.get(t)?.get(), t1.numberValueTypes[t]),
      ae = (e, t, a, s) => {
        let r, i;
        if (tJ.transformProps.has(a)) {
          if ("pathRotation" !== a) {
            let e = t.transformKeys ?? (t.transformKeys = []);
            (((t.transformValues ?? (t.transformValues = {}))[a] = s),
              e.includes(a) || (e.push(a), e.sort((e, t) => tJ.transformPropOrder.indexOf(e) - tJ.transformPropOrder.indexOf(t))));
          }
          (t.get("transform") ||
            ((0, h.isHTMLElement)(e) || t.get("transformBox") || ae(e, t, "transformBox", new tb.MotionValue("fill-box")),
            t.set("transform", new tb.MotionValue("none"), () => {
              e.style.transform = (function (e) {
                let t = "",
                  { transformKeys: a = [], transformValues: s = {} } = e;
                for (let e = 0; e < a.length; e++) {
                  let r = a[e],
                    i = s[r].get();
                  void 0 !== i &&
                    ("number" == typeof i ? i : parseFloat(i)) !== +!!r.startsWith("scale") &&
                    (t +=
                      (t && " ") + (t8[r] || (t8[r] = (t6[r] || r) + "(")) + (0, t2.getValueAsType)(i, t3.transformValueTypes[r]) + ")");
                }
                let r = e.get("pathRotation")?.get();
                return (
                  r && (t += (t && " ") + "rotate(" + (0, t2.getValueAsType)(r, t3.transformValueTypes.pathRotation) + ")"),
                  t || "none"
                );
              })(t);
            })),
            (i = t.get("transform")));
        } else
          t7.has(a)
            ? (t.get("transformOrigin") ||
                t.set("transformOrigin", new tb.MotionValue(""), () => {
                  let a = t9(t, "originX") ?? "50%",
                    s = t9(t, "originY") ?? "50%",
                    r = t9(t, "originZ") ?? 0;
                  e.style.transformOrigin = `${a} ${s} ${r}`;
                }),
              (i = t.get("transformOrigin")))
            : (r = (0, tZ.isCSSVar)(a)
                ? () => {
                    e.style.setProperty(a, s.get());
                  }
                : () => {
                    e.style[a] = (0, t2.getValueAsType)(s.get(), t1.numberValueTypes[a]);
                  });
        return t.set(a, s, r, i);
      },
      at = (e, t) => {
        if (tJ.transformProps.has(t)) return (0, tQ.readTransformValue)(e, t);
        let a = getComputedStyle(e),
          s = (0, tZ.isCSSVar)(t) ? a.getPropertyValue(t) : a[t];
        return ("string" == typeof s && s.trim()) || 0;
      },
      aa = t4(ae, { test: (e) => (0, h.isHTMLElement)(e) || (0, t0.isSVGElement)(e), read: at });
    var as = e.i(46768),
      ar = e.i(25052);
    let ai = (e, t, a, s, r = a) => {
        let i = (function (e, t) {
          if (!(t in e)) return !1;
          let a = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(e), t) || Object.getOwnPropertyDescriptor(e, t);
          return a && "function" == typeof a.set;
        })(e, r);
        !i && (r.startsWith("data") || r.startsWith("aria")) && (r = (0, as.camelToDash)(r));
        let n = t1.numberValueTypes[a] || t1.numberValueTypes[r],
          l = i
            ? () => {
                e[r] = (0, t2.getValueAsType)(s.get(), t1.numberValueTypes[a]);
              }
            : () => {
                let t = (0, t2.getValueAsType)(s.get(), n);
                null == t ? e.removeAttribute(r) : e.setAttribute(r, String(t));
              };
        return t.set(a, s, l);
      },
      an = t4(
        (e, t, a, s) => {
          if (a.startsWith("path"))
            return (tj.frame.render(() => e.setAttribute("pathLength", "1")), "pathOffset" === a)
              ? t.set(a, s, () => {
                  let t = s.get();
                  e.setAttribute("stroke-dashoffset", `${-t}`);
                })
              : (t.get("stroke-dasharray") ||
                  t.set("stroke-dasharray", new tb.MotionValue("1 1"), () => {
                    let a = t.get("pathLength")?.get() ?? 1,
                      s = t.get("pathSpacing")?.get();
                    e.setAttribute("stroke-dasharray", `${a} ${s ?? 1 - Number(a)}`);
                  }),
                t.set(a, s, void 0, t.get("stroke-dasharray")));
          return a.startsWith("attr")
            ? ai(e, t, a, s, al(a))
            : (tJ.transformProps.has(a) || t7.has(a) || (0, tZ.isCSSVar)(a) || a in e.style ? ae : ai)(e, t, a, s);
        },
        {
          test: t0.isSVGElement,
          read: (e, t) =>
            tJ.transformProps.has(t)
              ? t1.numberValueTypes[t]?.default || 0
              : (0, tZ.isCSSVar)(t) || ar.cssStyleProperties.includes(t)
                ? at(e, t) || e.getAttribute((0, as.camelToDash)(t)) || 0
                : ((t = al(t)), e.getAttribute((0, as.camelToDash)(t)) ?? e.getAttribute(t) ?? void 0),
        },
      );
    function al(e) {
      return e.replace(/^attr([A-Z])/, (e, t) => t.toLowerCase());
    }
    var ao = e.i(4955),
      ad = e.i(53556);
    let ac = {};
    class au {
      constructor(e, t) {
        ((this.effect = e), (this.current = t), (this.KeyframeResolver = ad.DOMKeyframesResolver));
      }
      getValue(e) {
        return this.effect.get(this.current, e);
      }
      readValue(e, t) {
        return this.effect.read(this.current, e, t);
      }
      render() {
        this.effect.flush(this.current);
      }
      measureViewportBox() {
        return (0, ao.measureViewportBox)(this.current);
      }
      getProps() {
        return ac;
      }
    }
    var am = e.i(35866),
      ah = e.i(68098);
    let ax = t4(
      (e, t, a, s) =>
        t.set(a, s, () => {
          e[a] = s.get();
        }),
      {
        test: (e) => (0, ah.isObject)(e),
        read: (e, t) => {
          let a = e[t];
          return "string" == typeof a || "number" == typeof a ? a : void 0;
        },
      },
    );
    function ap(e, t, a, s) {
      let r = [];
      if ((0, tA.isMotionValue)(e) || "number" == typeof e || ("string" == typeof e && !tD(t)))
        r.push((0, tK.animateSingleValue)(e, (tD(t) && t.default) || t, (a && a.default) || a));
      else {
        if (null == e) return r;
        let i = tq(e, t, s),
          n = i.length;
        (0, tf.invariant)(!!n, "No valid elements provided.", "no-valid-elements");
        for (let e = 0; e < n; e++) {
          let s = i[e],
            l = { ...a };
          ("delay" in l && "function" == typeof l.delay && (l.delay = l.delay(e, n)),
            s instanceof Element
              ? r.push(
                  ...(function (e, t, a, s) {
                    if (s) return tk((e) => s.getValue(e, null), t, a, s);
                    let r = (0, t0.isSVGElement)(e) ? an : aa;
                    return tM(r, e, t, a, new au(r, e));
                  })(s, t, l, am.visualElementStore.get(s)),
                )
              : r.push(
                  ...tM(
                    (function (e) {
                      return tw.find((t) => t.test(e));
                    })(s) ?? ax,
                    s,
                    t,
                    l,
                  ),
                ));
        }
      }
      return r;
    }
    let af = Object.assign(
        (function (e = {}) {
          let { scope: t, reduceMotion: a, skipAnimations: s } = e;
          return function (e, r, i) {
            var n;
            let l,
              o = [],
              d = {};
            if ((void 0 !== a && (d.reduceMotion = a), void 0 !== s && (d.skipAnimations = s), Array.isArray(e) && e.some(Array.isArray))) {
              let a,
                { onComplete: s, ...i } = r || {};
              ("function" == typeof s && (l = s),
                (n = { ...d, ...i }),
                (a = []),
                (function (e, { defaultTransition: t = {}, ...a } = {}, s, r) {
                  let i = t.duration || 0.3,
                    n = new Map(),
                    l = new Map(),
                    o = {},
                    d = new Map(),
                    c = 0,
                    u = 0,
                    m = 0;
                  for (let a = 0; a < e.length; a++) {
                    let n = e[a];
                    if ("string" == typeof n) {
                      d.set(n, u);
                      continue;
                    }
                    if (!Array.isArray(n)) {
                      d.set(n.name, tF(u, n.at, c, d));
                      continue;
                    }
                    let [p, f, g = {}] = n;
                    void 0 !== g.at && (u = tF(u, g.at, c, d));
                    let y = 0,
                      b = (e, a, s, n = 0, l = 0) => {
                        var o;
                        let d = Array.isArray((o = e)) ? o : [o],
                          {
                            delay: c = 0,
                            times: h = (0, tC.defaultOffset)(d),
                            type: x = t.type || "keyframes",
                            repeat: p,
                            repeatType: f,
                            repeatDelay: g = 0,
                            ...b
                          } = a,
                          { ease: v = t.ease || "easeOut", duration: j } = a,
                          w = "function" == typeof c ? c(n, l) : c,
                          N = d.length,
                          k = (0, tE.isGenerator)(x) ? x : r?.[x || "keyframes"];
                        if (N <= 2 && k) {
                          let e = 100;
                          2 === N && tX(d) && (e = Math.abs(d[1] - d[0]));
                          let a = { ...t, ...b };
                          void 0 !== j && (a.duration = (0, tR.secondsToMilliseconds)(j));
                          let s = (0, tP.createGeneratorEasing)(a, e, k);
                          ((v = s.ease), (j = s.duration));
                        }
                        j ?? (j = i);
                        let M = u + w;
                        1 === h.length && 0 === h[0] && (h[1] = 1);
                        let _ = h.length - d.length;
                        if (
                          (_ > 0 && (0, tW.fillOffset)(h, _),
                          1 === d.length && d.unshift(null),
                          p &&
                            (0, tf.warning)(
                              p < 20,
                              `Sequence segments can't repeat ${p} times — ignoring repeat option. Use a value below 20 or apply repeat at the sequence level instead.`,
                            ),
                          p && p < 20)
                        ) {
                          let e = j > 0 ? g / j : 0;
                          j = j * (p + 1) + g * p;
                          let t = [...d],
                            a = [...h],
                            s = [...(v = Array.isArray(v) ? [...v] : [v])],
                            r = "reverse" === f || "mirror" === f,
                            i = t,
                            n = s;
                          r &&
                            ((i = [...t].reverse()),
                            "reverse" === f && (n = [...s].reverse().map((e) => ("function" == typeof e ? (0, tV.reverseEasing)(e) : e))));
                          for (let l = 0; l < p; l++) {
                            let o = r && l % 2 == 0,
                              c = o ? i : t,
                              u = o ? n : s,
                              m = (l + 1) * (1 + e);
                            (e > 0 && (d.push(d[d.length - 1]), h.push(m), v.push("linear")), d.push(...c));
                            for (let e = 0; e < c.length; e++) (h.push(a[e] + m), v.push(0 === e ? "linear" : tO(u, e - 1)));
                          }
                          !(function (e, t, a = 0) {
                            let s = t + 1 + t * a;
                            for (let t = 0; t < e.length; t++) e[t] = e[t] / s;
                          })(h, p, e);
                        }
                        let S = M + j;
                        (!(function (e, t, a, s, r, i) {
                          for (let t = 0; t < e.length; t++) {
                            let a = e[t];
                            a.at > r && a.at < i && ((0, tg.removeItem)(e, a), t--);
                          }
                          for (let n = 0; n < t.length; n++) e.push({ value: t[n], at: (0, tH.mixNumber)(r, i, s[n]), easing: tO(a, n) });
                        })(s, d, v, h, M, S),
                          (y = Math.max(w + j, y)),
                          (m = Math.max(S, m)));
                      };
                    if ((0, tA.isMotionValue)(p)) b(f, g, tY("default", tB(p, l)));
                    else {
                      let e = tq(p, f, s, o),
                        t = e.length;
                      for (let a = 0; a < t; a++) {
                        let s = tB(e[a], l);
                        for (let e in f) {
                          var h, x;
                          b(f[e], ((h = g), (x = e), h && h[x] ? { ...h, ...h[x] } : { ...h }), tY(e, s), a, t);
                        }
                      }
                    }
                    ((c = u), (u += y));
                  }
                  return (
                    l.forEach((e, s) => {
                      for (let r in e) {
                        let i = e[r];
                        i.sort(tG);
                        let l = [],
                          o = [],
                          d = [];
                        for (let e = 0; e < i.length; e++) {
                          let { at: t, value: a, easing: s } = i[e];
                          (l.push(a), o.push((0, t$.progress)(0, m, t)), d.push(s || "easeOut"));
                        }
                        (0 !== o[0] && (o.unshift(0), l.unshift(l[0]), d.unshift("easeInOut")),
                          1 !== o[o.length - 1] && (o.push(1), l.push(null)),
                          n.has(s) || n.set(s, { keyframes: {}, transition: {} }));
                        let c = n.get(s);
                        c.keyframes[r] = l;
                        let { type: u, ...h } = t;
                        c.transition[r] = { ...h, duration: m, ease: d, times: o, ...a };
                      }
                    }),
                    n
                  );
                })(
                  e.map((e) => {
                    if (Array.isArray(e) && "function" == typeof e[0]) {
                      let t = e[0],
                        a = (0, tb.motionValue)(0);
                      return (a.on("change", t), 1 === e.length) ? [a, [0, 1]] : 2 === e.length ? [a, [0, 1], e[1]] : [a, e[1], e[2]];
                    }
                    return e;
                  }),
                  n,
                  t,
                  { spring: tT.spring },
                ).forEach(({ keyframes: e, transition: t }, s) => {
                  a.push(...ap(s, e, t));
                }),
                (o = a));
            } else {
              let { onComplete: a, ...s } = i || {};
              ("function" == typeof a && (l = a), (o = ap(e, r, { ...d, ...s }, t)));
            }
            let c = new tz(o);
            return (
              l && c.finished.then(l),
              t &&
                (t.animations.push(c),
                c.finished.then(() => {
                  (0, tg.removeItem)(t.animations, c);
                })),
              c
            );
          };
        })(),
        {
          addEffect: function (e) {
            ((0, tf.invariant)(
              "function" == typeof e.test && "function" == typeof e.read,
              "Effects passed to animate.addEffect() need test() and read().",
              "effect-missing-test",
            ),
              tN(e),
              tw.unshift(e));
          },
          removeEffect: tN,
        },
      ),
      ag = { some: 0, all: 1 },
      ay = ({ value: e, className: a, duration: s = 1.8 }) => {
        let r = (0, i.useRef)(null),
          n = (0, i.useRef)(!1),
          l = (0, i.useMemo)(
            () =>
              ((e) => {
                let t = e.match(/^([^\d]*)([\d][\d,]*(?:\.\d+)?)(.*)$/);
                if (!t) return null;
                let a = t[2].replace(/,/g, "");
                return {
                  prefix: t[1],
                  number: Number.parseFloat(a),
                  suffix: t[3],
                  decimals: a.includes(".") ? a.split(".")[1].length : 0,
                  grouped: t[2].includes(","),
                };
              })(e),
            [e],
          ),
          o = (function (e, { root: t, margin: a, amount: s, once: r = !1, initial: n = !1 } = {}) {
            let [l, o] = (0, i.useState)(n);
            return (
              (0, i.useEffect)(() => {
                if (!e.current || (r && l)) return;
                let i = { root: (t && t.current) || void 0, margin: a, amount: s };
                return (function (e, t, { root: a, margin: s, amount: r = "some" } = {}) {
                  let i = (0, tI.resolveElements)(e),
                    n = new WeakMap(),
                    l = new IntersectionObserver(
                      (e) => {
                        e.forEach((e) => {
                          let a = n.get(e.target);
                          if (!!a !== e.isIntersecting)
                            if (e.isIntersecting) {
                              let a = t(e.target, e);
                              "function" == typeof a ? n.set(e.target, a) : l.unobserve(e.target);
                            } else "function" == typeof a && (a(e), n.delete(e.target));
                        });
                      },
                      { root: a, rootMargin: s, threshold: "number" == typeof r ? r : ag[r] },
                    );
                  return (i.forEach((e) => l.observe(e)), () => l.disconnect());
                })(e.current, () => (o(!0), r ? void 0 : () => o(!1)), i);
              }, [t, e, a, r, s]),
              l
            );
          })(r, { once: !0, margin: "0px 0px -10% 0px" }),
          [d, c] = (0, i.useState)(e),
          u = (t) => {
            if (!l) return e;
            let a = t.toFixed(l.decimals),
              s = l.grouped
                ? Number(a).toLocaleString("en-US", { minimumFractionDigits: l.decimals, maximumFractionDigits: l.decimals })
                : a;
            return `${l.prefix}${s}${l.suffix}`;
          };
        return (
          (0, i.useEffect)(() => {
            if (!l || n.current) return;
            if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
              n.current = !0;
              return;
            }
            if (!o) return void c(u(0));
            n.current = !0;
            let e = af(0, l.number, { duration: s, ease: [0.22, 1, 0.36, 1], onUpdate: (e) => c(u(e)) });
            return () => e.stop();
          }, [o, l]),
          (0, t.jsx)("span", { ref: r, className: a, children: d })
        );
      },
      ab = ({ person: e, tone: a = "light" }) => {
        let s = "dark" === a;
        return (0, t.jsxs)("figcaption", {
          className: "flex items-center gap-3",
          children: [
            (0, t.jsx)("span", {
              "aria-hidden": "true",
              className: (0, z.cn)(
                "flex size-11 shrink-0 items-center justify-center rounded-full text-sm font-semibold",
                s ? "bg-leaf text-forest" : "bg-accent text-accent-foreground",
              ),
              children: e.name
                .split(" ")
                .map((e) => e.charAt(0))
                .join("")
                .slice(0, 2)
                .toUpperCase(),
            }),
            (0, t.jsxs)("span", {
              children: [
                (0, t.jsx)("span", {
                  className: (0, z.cn)("block text-sm font-medium", s ? "text-white" : "text-foreground"),
                  children: e.name,
                }),
                (0, t.jsxs)("span", {
                  className: (0, z.cn)("block text-sm", s ? "text-forest-foreground/65" : "text-muted-foreground"),
                  children: [e.role, ", ", e.company],
                }),
              ],
            }),
          ],
        });
      },
      av = () =>
        (0, t.jsx)("section", {
          id: "insights",
          "aria-labelledby": "insights-title",
          className: "scroll-mt-20 bg-white py-24 sm:py-32",
          children: (0, t.jsxs)("div", {
            className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
            children: [
              (0, t.jsx)(ec, {
                id: "insights-title",
                eyebrow: "Insights",
                title: "Operators see the difference in the first season.",
                description:
                  "Results from each customer's first twelve months on SolarLifeStyle, measured against their own baseline from the year before.",
              }),
              (0, t.jsx)("dl", {
                className: "mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4",
                children: G.map((e) =>
                  (0, t.jsxs)(
                    "div",
                    {
                      className: "reveal flex flex-col border-t border-border pt-6",
                      children: [
                        (0, t.jsx)("dt", { className: "mt-3 text-sm font-medium text-foreground", children: e.label }),
                        (0, t.jsx)("dd", {
                          className: "order-first font-heading text-5xl font-light tracking-[-0.04em] text-foreground sm:text-6xl",
                          children: (0, t.jsx)(ay, { value: e.value }),
                        }),
                        (0, t.jsx)("dd", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: e.detail }),
                      ],
                    },
                    e.label,
                  ),
                ),
              }),
              (0, t.jsxs)("div", {
                className: "mt-16 grid gap-4 lg:grid-cols-[1.35fr_1fr]",
                children: [
                  (0, t.jsxs)("figure", {
                    className:
                      "reveal relative isolate flex min-h-[26rem] flex-col justify-between overflow-hidden rounded-[2rem] bg-forest p-8 sm:p-10",
                    children: [
                      (0, t.jsx)(r.default, {
                        src: "/images/forest-fog.jpg",
                        alt: "",
                        fill: !0,
                        sizes: "(min-width: 1024px) 60vw, 100vw",
                        className: "-z-20 object-cover opacity-40",
                      }),
                      (0, t.jsx)("div", {
                        "aria-hidden": "true",
                        className: "absolute inset-0 -z-10 bg-gradient-to-br from-forest via-forest/85 to-primary/40",
                      }),
                      (0, t.jsx)(tp, { className: "size-8 text-leaf", "aria-hidden": "true" }),
                      (0, t.jsx)("blockquote", {
                        className: "mt-8 font-heading text-2xl font-light leading-snug tracking-[-0.02em] text-white sm:text-3xl",
                        children: (0, t.jsx)("p", { children: B.quote }),
                      }),
                      (0, t.jsx)("div", { className: "mt-10", children: (0, t.jsx)(ab, { person: B, tone: "dark" }) }),
                    ],
                  }),
                  (0, t.jsx)("div", {
                    className: "grid gap-4",
                    children: Y.map((e) =>
                      (0, t.jsxs)(
                        "figure",
                        {
                          className: "reveal flex flex-col justify-between rounded-[2rem] bg-background p-8",
                          children: [
                            (0, t.jsx)("blockquote", {
                              className: "text-lg leading-relaxed text-foreground",
                              children: (0, t.jsx)("p", { children: e.quote }),
                            }),
                            (0, t.jsx)("div", { className: "mt-8", children: (0, t.jsx)(ab, { person: e }) }),
                          ],
                        },
                        e.name,
                      ),
                    ),
                  }),
                ],
              }),
            ],
          }),
        }),
      aj = (0, n.default)("Cable", [
        ["path", { d: "M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1", key: "10bnsj" }],
        ["path", { d: "M19 15V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V9", key: "1eqmu1" }],
        ["path", { d: "M21 21v-2h-4", key: "14zm7j" }],
        ["path", { d: "M3 5h4V3", key: "z442eg" }],
        ["path", { d: "M7 5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1V3", key: "ebdjd7" }],
      ]),
      aw = ({ step: e, index: a, still: s }) => {
        let r = (0, i.useRef)(null),
          n = a % 2 == 0,
          { scrollYProgress: l } = (0, _.useScroll)({ target: r, offset: ["start end", "start 0.55"] }),
          { scrollYProgress: o } = (0, _.useScroll)({ target: r, offset: ["start 0.64", "start 0.54"] }),
          d = (0, S.useTransform)(l, [0, 1], [28, 0]),
          c = (0, S.useTransform)(l, [0, 1], [n ? -2.5 : 2.5, 0]),
          u = (0, S.useTransform)(l, [0, 1], [72, 0]),
          m = (0, S.useTransform)(l, [0, 1], [0.92, 1]),
          h = (0, S.useTransform)(l, [0, 0.6], [0.3, 1]),
          x = (0, S.useTransform)(l, [0, 1], [n ? 56 : -56, 0]),
          p = (0, S.useTransform)(o, [0, 1], [0, 1]);
        return (0, t.jsxs)("li", {
          ref: r,
          className:
            "relative grid grid-cols-[3rem_minmax(0,1fr)] gap-x-5 [perspective:1200px] md:grid-cols-[minmax(0,1fr)_3rem_minmax(0,1fr)] md:gap-x-12",
          children: [
            (0, t.jsx)("div", {
              className: "relative z-10 col-start-1 row-start-1 md:col-start-2",
              children: (0, t.jsxs)("span", {
                className:
                  "relative flex size-12 items-center justify-center rounded-full bg-white font-heading text-sm font-medium text-muted-foreground ring-1 ring-black/10",
                children: [
                  e.number,
                  (0, t.jsx)(M.motion.span, {
                    "aria-hidden": "true",
                    style: s ? void 0 : { opacity: p, scale: p },
                    className:
                      "absolute inset-0 flex items-center justify-center rounded-full bg-primary text-white shadow-[0_0_0_8px_rgba(30,133,56,0.12)]",
                    children: e.number,
                  }),
                ],
              }),
            }),
            (0, t.jsx)(M.motion.div, {
              style: s ? void 0 : { rotateX: d, rotate: c, y: u, scale: m, opacity: h, transformOrigin: "center top" },
              className: (0, z.cn)("col-start-2 row-start-1", n ? "md:col-start-1" : "md:col-start-3"),
              children: (0, t.jsxs)(eU, {
                className: "rounded-[1.75rem] bg-white p-7 ring-1 ring-black/5",
                children: [
                  (0, t.jsx)("p", {
                    className: "text-xs font-medium uppercase tracking-[0.14em] text-primary md:hidden",
                    children: e.when,
                  }),
                  (0, t.jsx)("h3", { className: "mt-2 text-lg font-medium text-foreground md:mt-0", children: e.title }),
                  (0, t.jsx)("p", { className: "mt-2 text-[15px] leading-relaxed text-muted-foreground", children: e.text }),
                ],
              }),
            }),
            (0, t.jsx)(M.motion.p, {
              "aria-hidden": "true",
              style: s ? void 0 : { x: x },
              className: (0, z.cn)(
                "row-start-1 hidden pt-1 font-heading text-5xl font-light tracking-[-0.04em] text-foreground/15 md:block lg:text-6xl",
                n ? "md:col-start-3 md:text-left" : "md:col-start-1 md:text-right",
              ),
              children: e.when,
            }),
          ],
        });
      },
      aN = ({ fill: e, still: a }) => {
        let s = (0, S.useTransform)(e, [0.94, 1], [0, 1]);
        return (0, t.jsxs)("li", {
          className:
            "relative grid grid-cols-[3rem_minmax(0,1fr)] items-center gap-x-5 md:grid-cols-[minmax(0,1fr)_3rem_minmax(0,1fr)] md:gap-x-12",
          children: [
            (0, t.jsx)("div", {
              className: "relative z-10 col-start-1 row-start-1 md:col-start-2",
              children: (0, t.jsxs)("span", {
                className:
                  "relative flex size-12 items-center justify-center rounded-full bg-white text-muted-foreground ring-1 ring-black/10",
                children: [
                  (0, t.jsx)(ek, { className: "size-5", "aria-hidden": "true" }),
                  (0, t.jsx)(M.motion.span, {
                    "aria-hidden": "true",
                    style: a ? void 0 : { opacity: s, scale: s },
                    className:
                      "absolute inset-0 flex items-center justify-center rounded-full bg-forest text-leaf shadow-[0_0_0_8px_rgba(87,199,106,0.18)]",
                    children: (0, t.jsx)(ek, { className: "size-5" }),
                  }),
                ],
              }),
            }),
            (0, t.jsxs)("p", {
              className: "col-start-2 row-start-1 text-base text-muted-foreground md:col-start-3",
              children: [
                (0, t.jsx)("span", { className: "font-medium text-foreground", children: "Live by day 21." }),
                " ",
                "Your first plan is approved, and the forecasts keep learning.",
              ],
            }),
          ],
        });
      },
      ak = () => {
        let e = (0, i.useRef)(null),
          a = E(),
          { scrollYProgress: s } = (0, _.useScroll)({ target: e, offset: ["start 0.6", "end 0.55"] }),
          r = (0, S.useTransform)(s, (e) => `${100 * e}%`);
        return (0, t.jsx)("section", {
          id: "how-it-works",
          "aria-labelledby": "how-it-works-title",
          className: "scroll-mt-20 bg-background py-24 sm:py-32",
          children: (0, t.jsxs)("div", {
            className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
            children: [
              (0, t.jsx)(ec, {
                id: "how-it-works-title",
                eyebrow: "How it works",
                align: "center",
                title: "Live in three weeks, not three quarters.",
                description: "SolarLifeStyle works with the systems you already run. Our grid engineers handle the setup alongside your team.",
              }),
              (0, t.jsxs)("div", {
                ref: e,
                className: "relative mx-auto mt-16 max-w-5xl sm:mt-20",
                children: [
                  (0, t.jsxs)("div", {
                    "aria-hidden": "true",
                    className: "absolute bottom-6 left-6 top-6 w-px -translate-x-1/2 bg-foreground/10 md:left-1/2",
                    children: [
                      (0, t.jsx)(M.motion.div, {
                        className: "absolute inset-0 origin-top bg-gradient-to-b from-leaf via-primary to-primary-strong",
                        style: { scaleY: a ? 1 : s },
                      }),
                      !a &&
                        (0, t.jsx)(M.motion.span, {
                          className:
                            "absolute left-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-leaf shadow-[0_0_14px_3px_rgba(87,199,106,0.7)]",
                          style: { top: r },
                        }),
                    ],
                  }),
                  (0, t.jsxs)("ol", {
                    className: "relative space-y-14 md:space-y-20",
                    children: [
                      U.map((e, s) => (0, t.jsx)(aw, { step: e, index: s, still: a }, e.number)),
                      (0, t.jsx)(aN, { fill: s, still: a }),
                    ],
                  }),
                ],
              }),
              (0, t.jsx)("div", {
                className: "reveal mt-20 rounded-[1.75rem] bg-white p-6 ring-1 ring-black/5 sm:p-8",
                children: (0, t.jsxs)("div", {
                  className: "flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between",
                  children: [
                    (0, t.jsxs)("div", {
                      className: "flex items-start gap-4",
                      children: [
                        (0, t.jsx)("span", {
                          className: "flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground",
                          children: (0, t.jsx)(aj, { className: "size-5", "aria-hidden": "true" }),
                        }),
                        (0, t.jsxs)("div", {
                          children: [
                            (0, t.jsx)("h3", {
                              className: "text-base font-medium text-foreground",
                              children: "Connects to what you already run",
                            }),
                            (0, t.jsx)("p", {
                              className: "mt-1 text-sm text-muted-foreground",
                              children: "Standard industrial protocols, market data and weather feeds, read only by default.",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsx)("ul", {
                      className: "flex flex-wrap gap-2 lg:max-w-xl lg:justify-end",
                      children: X.map((e) =>
                        (0, t.jsx)(
                          "li",
                          {
                            className: "rounded-full bg-background px-3.5 py-1.5 text-sm text-foreground ring-1 ring-black/5",
                            children: e,
                          },
                          e,
                        ),
                      ),
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      },
      aM = (0, n.default)("Clock", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
      ]),
      a_ = (0, n.default)("Lock", [
        ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
        ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }],
      ]),
      aS = ({ children: e, offset: a = 60, className: s }) => {
        let r = (0, i.useRef)(null),
          { scrollYProgress: n } = (0, _.useScroll)({ target: r, offset: ["start end", "end start"] }),
          l = (0, S.useTransform)(n, [0, 1], [a, -a]);
        return (0, t.jsx)(M.motion.div, { ref: r, style: { y: l }, className: s, children: e });
      },
      az = ({ children: e, className: a, delay: s = 0 }) =>
        (0, t.jsx)(M.motion.div, {
          className: a,
          initial: { clipPath: "inset(100% 0% 0% 0%)" },
          whileInView: { clipPath: "inset(0% 0% 0% 0%)" },
          viewport: { once: !0, margin: "0px 0px -12% 0px" },
          transition: { duration: 1.3, ease: [0.76, 0, 0.24, 1], delay: s },
          children: e,
        }),
      aT = [
        { icon: a_, title: "EU-hosted and encrypted", text: "Encrypted in transit and at rest, with role-based access for every team." },
        { icon: el, title: "Your data stays yours", text: "Export everything at any time. We never sell or pool customer data." },
        { icon: aM, title: "Engineers on call", text: "A grid specialist is reachable around the clock during your first season." },
      ],
      aA = () =>
        (0, t.jsx)("section", {
          id: "about",
          "aria-labelledby": "about-title",
          className: "scroll-mt-20 bg-background pb-24 sm:pb-32",
          children: (0, t.jsxs)("div", {
            className: "mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8",
            children: [
              (0, t.jsxs)("div", {
                className: "relative",
                children: [
                  (0, t.jsx)(az, {
                    className: "relative aspect-[4/5] overflow-hidden rounded-[2rem] sm:aspect-[5/4] lg:aspect-[4/5]",
                    children: (0, t.jsx)(aS, {
                      offset: -40,
                      className: "absolute -inset-y-12 inset-x-0",
                      children: (0, t.jsx)(r.default, {
                        src: "/images/about-wind-farm.jpg",
                        alt: "A wind turbine standing in a snowy landscape under a clear blue sky",
                        fill: !0,
                        sizes: "(min-width: 1024px) 50vw, 100vw",
                        className: "object-cover object-bottom",
                      }),
                    }),
                  }),
                  (0, t.jsxs)("div", {
                    className:
                      "reveal absolute bottom-5 left-5 right-5 rounded-2xl bg-white/85 p-5 ring-1 ring-black/5 backdrop-blur-xl sm:left-auto sm:w-72",
                    children: [
                      (0, t.jsx)("p", {
                        className: "text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground",
                        children: "Our mission",
                      }),
                      (0, t.jsx)("p", {
                        className: "mt-2 text-[15px] leading-relaxed text-foreground",
                        children: "Make renewable power as dependable as the grid needs it to be.",
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                children: [
                  (0, t.jsx)(ec, {
                    id: "about-title",
                    eyebrow: "About SolarLifeStyle",
                    title: "Built by grid engineers who got tired of guessing.",
                    description:
                      "SolarLifeStyle started in a control room, where forecasts lived in spreadsheets and the evening peak always arrived early. Today our team pairs power systems engineering with machine learning, so operators can plan the day instead of chasing it.",
                  }),
                  (0, t.jsx)("dl", {
                    className: "reveal mt-10 grid grid-cols-3 gap-4 border-y border-border py-6",
                    children: K.map((e) =>
                      (0, t.jsxs)(
                        "div",
                        {
                          className: "flex flex-col",
                          children: [
                            (0, t.jsx)("dt", { className: "mt-1 text-xs text-muted-foreground sm:text-sm", children: e.label }),
                            (0, t.jsx)("dd", {
                              className: "order-first font-heading text-2xl font-light tracking-tight text-foreground sm:text-4xl",
                              children: (0, t.jsx)(ay, { value: e.value }),
                            }),
                          ],
                        },
                        e.label,
                      ),
                    ),
                  }),
                  (0, t.jsx)("ul", {
                    className: "mt-8 space-y-5",
                    children: aT.map((e) => {
                      let a = e.icon;
                      return (0, t.jsxs)(
                        "li",
                        {
                          className: "reveal flex gap-4",
                          children: [
                            (0, t.jsx)("span", {
                              className:
                                "flex size-10 shrink-0 items-center justify-center rounded-xl bg-white text-primary ring-1 ring-black/5",
                              children: (0, t.jsx)(a, { className: "size-5", "aria-hidden": "true" }),
                            }),
                            (0, t.jsxs)("div", {
                              children: [
                                (0, t.jsx)("h3", { className: "text-base font-medium text-foreground", children: e.title }),
                                (0, t.jsx)("p", { className: "mt-1 text-sm leading-relaxed text-muted-foreground", children: e.text }),
                              ],
                            }),
                          ],
                        },
                        e.title,
                      );
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
    var aC = e.i(41158);
    let aE = (0, n.default)("Plus", [
        ["path", { d: "M5 12h14", key: "1ays0h" }],
        ["path", { d: "M12 5v14", key: "s699le" }],
      ]),
      aP = () =>
        (0, t.jsx)("section", {
          id: "faq",
          "aria-labelledby": "faq-title",
          className: "scroll-mt-20 bg-white py-24 sm:py-32",
          children: (0, t.jsxs)("div", {
            className: "mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-8",
            children: [
              (0, t.jsxs)("div", {
                className: "reveal lg:sticky lg:top-28 lg:self-start",
                children: [
                  (0, t.jsx)(ec, {
                    id: "faq-title",
                    eyebrow: "FAQ",
                    title: "Questions operators ask us first.",
                    description:
                      "Anything else you want to know, ask us on a demo call. We are happy to go deep on your assets, data and market.",
                  }),
                  (0, t.jsxs)(aC.default, {
                    href: "/#get-started",
                    className:
                      "mt-8 inline-flex items-center gap-2 rounded-full text-sm font-medium text-primary transition-colors hover:text-primary-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4",
                    children: ["Talk to a grid specialist", (0, t.jsx)(e7.ArrowRight, { className: "size-4", "aria-hidden": "true" })],
                  }),
                ],
              }),
              (0, t.jsx)("div", {
                className: "space-y-3",
                children: Z.map((e) =>
                  (0, t.jsxs)(
                    "details",
                    {
                      className:
                        "reveal group rounded-2xl bg-background ring-1 ring-black/5 transition-colors open:bg-white open:shadow-[0_20px_40px_-30px_rgba(14,26,18,0.4)]",
                      children: [
                        (0, t.jsxs)("summary", {
                          className:
                            "flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl p-5 text-base font-medium text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:p-6 [&::-webkit-details-marker]:hidden",
                          children: [
                            e.question,
                            (0, t.jsx)("span", {
                              className:
                                "flex size-8 shrink-0 items-center justify-center rounded-full bg-white text-foreground ring-1 ring-black/5 transition-transform duration-300 group-open:rotate-45",
                              children: (0, t.jsx)(aE, { className: "size-4", "aria-hidden": "true" }),
                            }),
                          ],
                        }),
                        (0, t.jsx)("p", {
                          className: "-mt-1 px-5 pb-6 text-[15px] leading-relaxed text-muted-foreground sm:px-6",
                          children: e.answer,
                        }),
                      ],
                    },
                    e.question,
                  ),
                ),
              }),
            ],
          }),
        });
    var aW = e.i(78922);
    let a$ = (0, n.default)("ChevronDown", [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]]),
      aR = (0, n.default)("CircleAlert", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
        ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
      ]),
      aV = (0, n.default)("CircleCheck", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
      ]),
      aL = (0, n.default)("LoaderCircle", [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]]),
      aO = ["Operations", "Trading", "Asset management", "Engineering", "Leadership", "Other"],
      aI = ["Under 50 MW", "50 to 250 MW", "250 MW to 1 GW", "Over 1 GW"],
      aD = ["Forecasting", "Storage dispatch", "Market trading", "Curtailment"],
      aq = /^[^\s@<>,;"]+@[^\s@<>,;"]+\.[^\s@<>,;"]{2,}$/,
      aF = /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/,
      aH = (e) => !/[\r\n]/.test(e) && !aF.test(e),
      aG = { fullName: "", workEmail: "", company: "", role: "", portfolioSize: "", interests: [], message: "" },
      aB = [
        "A live forecast for a site like yours",
        "Storage and trading scenarios for next week",
        "A rollout plan with timing and pricing",
      ],
      aY = ["fullName", "workEmail", "company", "role", "portfolioSize", "interests", "message"],
      aU =
        "h-11 w-full rounded-xl border border-input bg-white px-3.5 text-sm text-foreground transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/15 aria-[invalid=true]:border-orange-600 aria-[invalid=true]:focus:ring-orange-600/15",
      aX = ({ id: e, message: a }) =>
        a
          ? (0, t.jsxs)("p", {
              id: e,
              className: "mt-1.5 flex items-center gap-1.5 text-xs text-orange-700",
              children: [(0, t.jsx)(aR, { className: "size-3.5 shrink-0", "aria-hidden": "true" }), a],
            })
          : null,
      aK = () => {
        let [e, a] = (0, i.useState)(aG),
          [s, n] = (0, i.useState)({}),
          [l, o] = (0, i.useState)("idle"),
          [d, c] = (0, i.useState)(""),
          [u, m] = (0, i.useState)(""),
          [h, x] = (0, i.useState)(""),
          p = (0, i.useRef)(null),
          f = (0, i.useRef)(null),
          g = (0, i.useRef)(null),
          y = (e, t) => {
            (a((a) => ({ ...a, [e]: t })), s[e] && n((t) => ({ ...t, [e]: void 0 })));
          },
          b = (e) => {
            let t = aY.find((t) => e[t]);
            if (!t) return;
            let a = p.current?.querySelector(`[data-field='${t}']`);
            a?.focus();
          },
          v = async (t) => {
            let s;
            t.preventDefault();
            let r = {
                ...e,
                fullName: e.fullName.trim(),
                workEmail: e.workEmail.trim(),
                company: e.company.trim(),
                message: e.message.trim(),
                website: f.current?.value ?? "",
              },
              i =
                ((s = {}),
                r.fullName.length < 2
                  ? (s.fullName = "Please enter your full name.")
                  : (r.fullName.length > 100 || !aH(r.fullName)) && (s.fullName = "Please enter a shorter name on one line."),
                aq.test(r.workEmail)
                  ? r.workEmail.length > 200 && (s.workEmail = "This email address is too long.")
                  : (s.workEmail = "Please enter a valid work email."),
                r.company.length < 2
                  ? (s.company = "Please enter your company name.")
                  : (r.company.length > 120 || !aH(r.company)) && (s.company = "Please enter a shorter company name on one line."),
                r.role && !aO.includes(r.role) && (s.role = "Please choose a role from the list."),
                r.portfolioSize && !aI.includes(r.portfolioSize) && (s.portfolioSize = "Please choose a portfolio size from the list."),
                r.interests.some((e) => !aD.includes(e)) && (s.interests = "Please choose from the listed topics."),
                r.message.length > 2e3 && (s.message = "Please keep your message under 2000 characters."),
                s);
            if (Object.keys(i).length > 0) {
              (n(i), o("idle"), b(i));
              return;
            }
            (o("submitting"), c(""));
            try {
              let e = await fetch("/api/demo-request", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(r),
                }),
                t = await e.json().catch(() => ({}));
              if (!e.ok) {
                (t.errors && Object.keys(t.errors).length > 0 && (n(t.errors), b(t.errors)),
                  c(t.message || "Something went wrong on our side. Please try again in a moment."),
                  o("error"));
                return;
              }
              (m(r.fullName.split(" ")[0] || r.fullName),
                x(r.workEmail),
                a(aG),
                n({}),
                o("success"),
                window.requestAnimationFrame(() => g.current?.focus()));
            } catch {
              (c("We could not reach the server. Please check your connection and try again."), o("error"));
            }
          };
        return (0, t.jsx)("section", {
          id: "get-started",
          "aria-labelledby": "get-started-title",
          className: "scroll-mt-20 bg-background py-24 sm:py-32",
          children: (0, t.jsx)("div", {
            className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
            children: (0, t.jsxs)("div", {
              className: "relative isolate overflow-hidden rounded-[2.5rem] bg-forest",
              children: [
                (0, t.jsx)(r.default, {
                  src: "/images/hero-turbine.jpg",
                  alt: "",
                  fill: !0,
                  sizes: "100vw",
                  className: "-z-20 object-cover object-[50%_65%] opacity-50",
                }),
                (0, t.jsx)("div", {
                  "aria-hidden": "true",
                  className:
                    "absolute inset-0 -z-10 bg-gradient-to-b from-forest via-forest/90 to-forest/60 lg:bg-gradient-to-r lg:from-forest lg:via-forest/85 lg:to-forest/30",
                }),
                (0, t.jsxs)("div", {
                  className: "grid gap-10 p-6 sm:p-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14 lg:p-14",
                  children: [
                    (0, t.jsxs)("div", {
                      className: "flex flex-col",
                      children: [
                        (0, t.jsx)(ec, {
                          id: "get-started-title",
                          eyebrow: "Book a demo",
                          tone: "dark",
                          title: "See your own portfolio forecast in 30 minutes.",
                          description:
                            "Share a few details and a grid specialist will walk you through SolarLifeStyle using data from a site like yours.",
                        }),
                        (0, t.jsx)("ul", {
                          className: "mt-8 space-y-3",
                          children: aB.map((e) =>
                            (0, t.jsxs)(
                              "li",
                              {
                                className: "flex items-center gap-3 text-[15px] text-white",
                                children: [
                                  (0, t.jsx)("span", {
                                    className: "flex size-6 shrink-0 items-center justify-center rounded-full bg-leaf text-forest",
                                    children: (0, t.jsx)(ek, { className: "size-3.5", "aria-hidden": "true" }),
                                  }),
                                  e,
                                ],
                              },
                              e,
                            ),
                          ),
                        }),
                        (0, t.jsx)("p", {
                          className: "mt-auto pt-10 text-sm text-forest-foreground/65",
                          children: "No commitment. Most demos are booked within two working days.",
                        }),
                      ],
                    }),
                    (0, t.jsx)("div", {
                      className: "rounded-[1.75rem] bg-white p-6 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.6)] sm:p-8",
                      children:
                        "success" === l
                          ? (0, t.jsxs)("div", {
                              ref: g,
                              tabIndex: -1,
                              role: "status",
                              className: "flex min-h-[28rem] flex-col items-center justify-center text-center focus:outline-none",
                              children: [
                                (0, t.jsx)("span", {
                                  className: "flex size-14 items-center justify-center rounded-full bg-accent text-primary",
                                  children: (0, t.jsx)(aV, { className: "size-7", "aria-hidden": "true" }),
                                }),
                                (0, t.jsxs)("h3", {
                                  className: "mt-6 font-heading text-2xl font-light tracking-tight text-foreground sm:text-3xl",
                                  children: ["Thanks, ", u, ". Your request is in."],
                                }),
                                (0, t.jsxs)("p", {
                                  className: "mt-3 max-w-sm text-[15px] leading-relaxed text-muted-foreground",
                                  children: [
                                    "A grid specialist will reply to ",
                                    (0, t.jsx)("span", { className: "font-medium text-foreground", children: h }),
                                    " within one business day with a few times to choose from.",
                                  ],
                                }),
                                (0, t.jsx)("button", {
                                  type: "button",
                                  onClick: () => {
                                    (o("idle"), c(""));
                                  },
                                  className: (0, aW.buttonClasses)({ variant: "outline", className: "mt-8" }),
                                  children: "Send another request",
                                }),
                              ],
                            })
                          : (0, t.jsxs)("form", {
                              ref: p,
                              noValidate: !0,
                              onSubmit: v,
                              "aria-describedby": "demo-form-note",
                              children: [
                                (0, t.jsx)("h3", { className: "text-lg font-medium text-foreground", children: "Request your demo" }),
                                (0, t.jsx)("p", {
                                  id: "demo-form-note",
                                  className: "mt-1 text-sm text-muted-foreground",
                                  children: "Fields marked with an asterisk are required.",
                                }),
                                (0, t.jsxs)("div", {
                                  className: "mt-6 grid gap-4 sm:grid-cols-2",
                                  children: [
                                    (0, t.jsxs)("div", {
                                      children: [
                                        (0, t.jsxs)("label", {
                                          htmlFor: "demo-full-name",
                                          className: "text-sm font-medium text-foreground",
                                          children: [
                                            "Full name ",
                                            (0, t.jsx)("span", { "aria-hidden": "true", className: "text-primary", children: "*" }),
                                          ],
                                        }),
                                        (0, t.jsx)("input", {
                                          id: "demo-full-name",
                                          "data-field": "fullName",
                                          type: "text",
                                          autoComplete: "name",
                                          required: !0,
                                          maxLength: 100,
                                          value: e.fullName,
                                          onChange: (e) => y("fullName", e.target.value),
                                          "aria-invalid": !!s.fullName,
                                          "aria-describedby": s.fullName ? "demo-full-name-error" : void 0,
                                          placeholder: "Maren Holt",
                                          className: (0, z.cn)(aU, "mt-1.5"),
                                        }),
                                        (0, t.jsx)(aX, { id: "demo-full-name-error", message: s.fullName }),
                                      ],
                                    }),
                                    (0, t.jsxs)("div", {
                                      children: [
                                        (0, t.jsxs)("label", {
                                          htmlFor: "demo-work-email",
                                          className: "text-sm font-medium text-foreground",
                                          children: [
                                            "Work email ",
                                            (0, t.jsx)("span", { "aria-hidden": "true", className: "text-primary", children: "*" }),
                                          ],
                                        }),
                                        (0, t.jsx)("input", {
                                          id: "demo-work-email",
                                          "data-field": "workEmail",
                                          type: "email",
                                          autoComplete: "email",
                                          required: !0,
                                          maxLength: 200,
                                          value: e.workEmail,
                                          onChange: (e) => y("workEmail", e.target.value),
                                          "aria-invalid": !!s.workEmail,
                                          "aria-describedby": s.workEmail ? "demo-work-email-error" : void 0,
                                          placeholder: "maren@company.com",
                                          className: (0, z.cn)(aU, "mt-1.5"),
                                        }),
                                        (0, t.jsx)(aX, { id: "demo-work-email-error", message: s.workEmail }),
                                      ],
                                    }),
                                    (0, t.jsxs)("div", {
                                      children: [
                                        (0, t.jsxs)("label", {
                                          htmlFor: "demo-company",
                                          className: "text-sm font-medium text-foreground",
                                          children: [
                                            "Company ",
                                            (0, t.jsx)("span", { "aria-hidden": "true", className: "text-primary", children: "*" }),
                                          ],
                                        }),
                                        (0, t.jsx)("input", {
                                          id: "demo-company",
                                          "data-field": "company",
                                          type: "text",
                                          autoComplete: "organization",
                                          required: !0,
                                          maxLength: 120,
                                          value: e.company,
                                          onChange: (e) => y("company", e.target.value),
                                          "aria-invalid": !!s.company,
                                          "aria-describedby": s.company ? "demo-company-error" : void 0,
                                          placeholder: "Northvale Energy",
                                          className: (0, z.cn)(aU, "mt-1.5"),
                                        }),
                                        (0, t.jsx)(aX, { id: "demo-company-error", message: s.company }),
                                      ],
                                    }),
                                    (0, t.jsxs)("div", {
                                      children: [
                                        (0, t.jsxs)("label", {
                                          htmlFor: "demo-role",
                                          className: "text-sm font-medium text-foreground",
                                          children: [
                                            "Your role ",
                                            (0, t.jsx)("span", { className: "font-normal text-muted-foreground", children: "(optional)" }),
                                          ],
                                        }),
                                        (0, t.jsxs)("div", {
                                          className: "relative mt-1.5",
                                          children: [
                                            (0, t.jsxs)("select", {
                                              id: "demo-role",
                                              "data-field": "role",
                                              value: e.role,
                                              onChange: (e) => y("role", e.target.value),
                                              "aria-invalid": !!s.role,
                                              "aria-describedby": s.role ? "demo-role-error" : void 0,
                                              className: (0, z.cn)(aU, "appearance-none pr-10", !e.role && "text-muted-foreground"),
                                              children: [
                                                (0, t.jsx)("option", { value: "", children: "Choose a role" }),
                                                aO.map((e) => (0, t.jsx)("option", { value: e, children: e }, e)),
                                              ],
                                            }),
                                            (0, t.jsx)(a$, {
                                              className:
                                                "pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground",
                                              "aria-hidden": "true",
                                            }),
                                          ],
                                        }),
                                        (0, t.jsx)(aX, { id: "demo-role-error", message: s.role }),
                                      ],
                                    }),
                                    (0, t.jsxs)("div", {
                                      className: "sm:col-span-2",
                                      children: [
                                        (0, t.jsxs)("label", {
                                          htmlFor: "demo-portfolio",
                                          className: "text-sm font-medium text-foreground",
                                          children: [
                                            "Portfolio size ",
                                            (0, t.jsx)("span", { className: "font-normal text-muted-foreground", children: "(optional)" }),
                                          ],
                                        }),
                                        (0, t.jsxs)("div", {
                                          className: "relative mt-1.5",
                                          children: [
                                            (0, t.jsxs)("select", {
                                              id: "demo-portfolio",
                                              "data-field": "portfolioSize",
                                              value: e.portfolioSize,
                                              onChange: (e) => y("portfolioSize", e.target.value),
                                              "aria-invalid": !!s.portfolioSize,
                                              "aria-describedby": s.portfolioSize ? "demo-portfolio-error" : void 0,
                                              className: (0, z.cn)(
                                                aU,
                                                "appearance-none pr-10",
                                                !e.portfolioSize && "text-muted-foreground",
                                              ),
                                              children: [
                                                (0, t.jsx)("option", { value: "", children: "Choose your installed capacity" }),
                                                aI.map((e) => (0, t.jsx)("option", { value: e, children: e }, e)),
                                              ],
                                            }),
                                            (0, t.jsx)(a$, {
                                              className:
                                                "pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground",
                                              "aria-hidden": "true",
                                            }),
                                          ],
                                        }),
                                        (0, t.jsx)(aX, { id: "demo-portfolio-error", message: s.portfolioSize }),
                                      ],
                                    }),
                                    (0, t.jsxs)("fieldset", {
                                      className: "sm:col-span-2",
                                      children: [
                                        (0, t.jsxs)("legend", {
                                          className: "text-sm font-medium text-foreground",
                                          children: [
                                            "What would you like to improve? ",
                                            (0, t.jsx)("span", { className: "font-normal text-muted-foreground", children: "(optional)" }),
                                          ],
                                        }),
                                        (0, t.jsx)("div", {
                                          className: "mt-2 flex flex-wrap gap-2",
                                          children: aD.map((a, s) => {
                                            let r = e.interests.includes(a);
                                            return (0, t.jsxs)(
                                              "label",
                                              {
                                                className: "cursor-pointer",
                                                children: [
                                                  (0, t.jsx)("input", {
                                                    type: "checkbox",
                                                    "data-field": 0 === s ? "interests" : void 0,
                                                    checked: r,
                                                    onChange: () => {
                                                      y(
                                                        "interests",
                                                        e.interests.includes(a) ? e.interests.filter((e) => e !== a) : [...e.interests, a],
                                                      );
                                                    },
                                                    className: "peer sr-only",
                                                  }),
                                                  (0, t.jsxs)("span", {
                                                    className:
                                                      "inline-flex h-9 items-center gap-1.5 rounded-full bg-background px-3.5 text-sm text-foreground ring-1 ring-black/10 transition-colors peer-checked:bg-accent peer-checked:text-accent-foreground peer-checked:ring-primary/40 peer-focus-visible:ring-2 peer-focus-visible:ring-ring",
                                                    children: [r && (0, t.jsx)(ek, { className: "size-3.5", "aria-hidden": "true" }), a],
                                                  }),
                                                ],
                                              },
                                              a,
                                            );
                                          }),
                                        }),
                                        (0, t.jsx)(aX, { id: "demo-interests-error", message: s.interests }),
                                      ],
                                    }),
                                    (0, t.jsxs)("div", {
                                      className: "sm:col-span-2",
                                      children: [
                                        (0, t.jsxs)("label", {
                                          htmlFor: "demo-message",
                                          className: "text-sm font-medium text-foreground",
                                          children: [
                                            "Anything we should know? ",
                                            (0, t.jsx)("span", { className: "font-normal text-muted-foreground", children: "(optional)" }),
                                          ],
                                        }),
                                        (0, t.jsx)("textarea", {
                                          id: "demo-message",
                                          "data-field": "message",
                                          rows: 4,
                                          maxLength: 2e3,
                                          value: e.message,
                                          onChange: (e) => y("message", e.target.value),
                                          "aria-invalid": !!s.message,
                                          "aria-describedby": s.message ? "demo-message-error" : void 0,
                                          placeholder: "Sites, markets you trade in, or the problem keeping you up at night.",
                                          className: (0, z.cn)(aU, "mt-1.5 h-auto resize-y py-3 leading-relaxed"),
                                        }),
                                        (0, t.jsx)(aX, { id: "demo-message-error", message: s.message }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, t.jsxs)("div", {
                                  "aria-hidden": "true",
                                  className: "absolute -left-[9999px] h-px w-px overflow-hidden",
                                  children: [
                                    (0, t.jsx)("label", { htmlFor: "demo-website", children: "Website" }),
                                    (0, t.jsx)("input", {
                                      ref: f,
                                      id: "demo-website",
                                      name: "website",
                                      type: "text",
                                      tabIndex: -1,
                                      autoComplete: "off",
                                      defaultValue: "",
                                    }),
                                  ],
                                }),
                                "error" === l &&
                                  d &&
                                  (0, t.jsxs)("div", {
                                    role: "alert",
                                    className:
                                      "mt-5 flex items-start gap-2.5 rounded-xl bg-orange-50 p-3.5 text-sm text-orange-800 ring-1 ring-orange-200",
                                    children: [(0, t.jsx)(aR, { className: "mt-0.5 size-4 shrink-0", "aria-hidden": "true" }), d],
                                  }),
                                (0, t.jsxs)("div", {
                                  className: "mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
                                  children: [
                                    (0, t.jsxs)("p", {
                                      className: "text-xs leading-relaxed text-muted-foreground sm:max-w-[16rem]",
                                      children: [
                                        "We only use your details to arrange your demo. Read our",
                                        " ",
                                        (0, t.jsx)(aC.default, {
                                          href: "/privacy",
                                          className: "font-medium text-foreground underline underline-offset-2 hover:text-primary",
                                          children: "privacy policy",
                                        }),
                                        ".",
                                      ],
                                    }),
                                    (0, t.jsx)("button", {
                                      type: "submit",
                                      disabled: "submitting" === l,
                                      className: (0, aW.buttonClasses)({ size: "lg", className: "w-full sm:w-auto" }),
                                      children:
                                        "submitting" === l
                                          ? (0, t.jsxs)(t.Fragment, {
                                              children: [
                                                (0, t.jsx)(aL, { className: "size-4 animate-spin", "aria-hidden": "true" }),
                                                "Sending request",
                                              ],
                                            })
                                          : (0, t.jsxs)(t.Fragment, {
                                              children: [
                                                "Request a demo",
                                                (0, t.jsx)(e7.ArrowRight, { className: "size-4", "aria-hidden": "true" }),
                                              ],
                                            }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      };
    var aZ = e.i(83218);
    let aQ = ({ children: e, strength: a = 0.3, className: s }) => {
      let r = (0, i.useRef)(null),
        n = (0, eY.useMotionValue)(0),
        l = (0, eY.useMotionValue)(0),
        o = (0, aZ.useSpring)(n, { stiffness: 220, damping: 16, mass: 0.4 }),
        d = (0, aZ.useSpring)(l, { stiffness: 220, damping: 16, mass: 0.4 });
      return (0, t.jsx)(M.motion.div, {
        ref: r,
        onPointerMove: (e) => {
          if ("mouse" !== e.pointerType || !r.current) return;
          let t = r.current.getBoundingClientRect();
          (n.set((e.clientX - (t.left + t.width / 2)) * a), l.set((e.clientY - (t.top + t.height / 2)) * a));
        },
        onPointerLeave: () => {
          (n.set(0), l.set(0));
        },
        style: { x: o, y: d },
        className: (0, z.cn)("inline-block", s),
        children: e,
      });
    };
    var aJ = e.i(68489);
    let a0 = (0, n.default)("Move3d", [
      ["path", { d: "M5 3v16h16", key: "1mqmf9" }],
      ["path", { d: "m5 19 6-6", key: "jh6hbb" }],
      ["path", { d: "m2 6 3-3 3 3", key: "tkyvxa" }],
      ["path", { d: "m18 16 3 3-3 3", key: "1d4glt" }],
    ]);
    var a1 = e.i(15157);
    let a2 = (0, aJ.default)(() => e.A(71064), { loadableGenerated: { modules: [35448] }, ssr: !1, loading: () => null }),
      a5 = () =>
        (0, t.jsx)(r.default, {
          src: "/images/solar-array.jpg",
          alt: "",
          fill: !0,
          sizes: "(min-width: 1024px) 1024px, 100vw",
          className: "object-contain",
        }),
      a4 = () => {
        var e;
        let a = (0, i.useRef)(null),
          s = (0, i.useRef)(null),
          r = (0, i.useRef)(!1),
          n = E(),
          [l, o] = (0, i.useState)(!1),
          [d, c] = (0, i.useState)(!1),
          [u, m] = (0, i.useState)(!1),
          [h, x] = (0, i.useState)(!1),
          [p, f] = (0, i.useState)(a1.DEFAULT_VIEW.id),
          g = (0, i.useRef)({
            targetYaw: a1.DEFAULT_VIEW.yaw,
            targetPitch: a1.DEFAULT_VIEW.pitch,
            yaw: a1.DEFAULT_VIEW.yaw,
            pitch: a1.DEFAULT_VIEW.pitch,
            intro: 0,
            lastInteraction: 0,
            dragging: !1,
            reduced: !1,
          }),
          { scrollYProgress: y } = (0, _.useScroll)({ target: a, offset: ["start end", "center center"] });
        ((e = (e) => {
          g.current.intro = e;
        }),
          (0, i.useInsertionEffect)(() => y.on("change", e), [y, "change", e]),
          (0, i.useEffect)(() => {
            g.current.intro = y.get();
          }, [y]),
          (0, i.useEffect)(() => {
            g.current.reduced = n;
          }, [n]),
          (0, i.useEffect)(() => {
            let e = a.current;
            if (!e) return;
            let t = new IntersectionObserver(([e]) => o(e.isIntersecting), { rootMargin: "200px 0px" });
            return (t.observe(e), () => t.disconnect());
          }, []));
        let b = () => {
            ((g.current.lastInteraction = performance.now()), r.current || ((r.current = !0), x(!0)));
          },
          v = (e) => {
            let t = s.current;
            if (!t || t.id !== e.pointerId) return;
            let a = g.current;
            (a.dragging && performance.now() - t.time < 80 && (a.targetYaw += (0, a1.clamp)(12 * t.velocity, -1.6, 1.6)),
              (a.dragging = !1),
              (a.lastInteraction = performance.now()),
              (s.current = null),
              m(!1));
          },
          j = a1.VIEWS.find((e) => e.id === p)?.caption ?? a1.DEFAULT_VIEW.caption;
        return (0, t.jsxs)("div", {
          children: [
            (0, t.jsxs)("div", {
              ref: a,
              role: "group",
              tabIndex: 0,
              "aria-roledescription": "3D model",
              "aria-label": "Solar panel array. Drag it, or use the arrow keys, to turn it and see every side.",
              onPointerDown: (e) => {
                if ("mouse" === e.pointerType && 0 !== e.button) return;
                let t = "mouse" === e.pointerType;
                ((s.current = {
                  id: e.pointerId,
                  x: e.clientX,
                  y: e.clientY,
                  axis: t ? "free" : null,
                  time: performance.now(),
                  velocity: 0,
                }),
                  t && (e.currentTarget.setPointerCapture(e.pointerId), (g.current.dragging = !0), m(!0)),
                  b());
              },
              onPointerMove: (e) => {
                let t = s.current;
                if (!t || t.id !== e.pointerId) return;
                let a = e.clientX - t.x,
                  r = e.clientY - t.y;
                if (null === t.axis) {
                  if (6 > Math.abs(a) && 6 > Math.abs(r)) return;
                  if (Math.abs(r) > Math.abs(a)) {
                    s.current = null;
                    return;
                  }
                  ((t.axis = "x"), e.currentTarget.setPointerCapture(e.pointerId), (g.current.dragging = !0));
                }
                let i = performance.now(),
                  n = g.current,
                  l = -(0.0075 * a);
                ((n.targetYaw += l),
                  "free" === t.axis && (n.targetPitch = (0, a1.clamp)(n.targetPitch + 0.005 * r, a1.PITCH_MIN, a1.PITCH_MAX)),
                  (t.velocity = (l / Math.max(i - t.time, 1)) * 16),
                  (t.x = e.clientX),
                  (t.y = e.clientY),
                  (t.time = i),
                  b());
              },
              onPointerUp: v,
              onPointerCancel: v,
              onKeyDown: (e) => {
                let t = { ArrowLeft: [0.3, 0], ArrowRight: [-0.3, 0], ArrowUp: [0, 0.12], ArrowDown: [0, -0.12] }[e.key];
                if (!t) return;
                e.preventDefault();
                let a = g.current;
                ((a.targetYaw += t[0]), (a.targetPitch = (0, a1.clamp)(a.targetPitch + t[1], a1.PITCH_MIN, a1.PITCH_MAX)), b());
              },
              className: (0, z.cn)(
                "relative aspect-[4/3] w-full touch-pan-y select-none rounded-[2rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 sm:aspect-[16/9]",
                u ? "cursor-grabbing" : "cursor-grab",
              ),
              children: [
                (0, t.jsx)("div", {
                  "aria-hidden": "true",
                  className: (0, z.cn)("absolute inset-0 transition-opacity duration-700", d ? "opacity-0" : "opacity-100"),
                  children: (0, t.jsx)(a5, {}),
                }),
                (0, t.jsx)("div", {
                  className: (0, z.cn)("absolute inset-0 transition-opacity duration-700", d ? "opacity-100" : "opacity-0"),
                  children: (0, t.jsx)(a2, { orbit: g, active: l, onViewChange: f, onReady: () => c(!0), fallback: (0, t.jsx)(a5, {}) }),
                }),
                (0, t.jsxs)("p", {
                  "aria-hidden": "true",
                  className: (0, z.cn)(
                    "pointer-events-none absolute left-1/2 top-3 inline-flex -translate-x-1/2 items-center gap-2 rounded-full bg-white/85 px-3.5 py-1.5 text-xs font-medium text-primary-strong shadow-[0_8px_24px_-12px_rgba(14,26,18,0.35)] ring-1 ring-black/5 backdrop-blur transition-opacity duration-500 sm:top-5",
                    h || !d ? "opacity-0" : "opacity-100",
                  ),
                  children: [(0, t.jsx)(a0, { className: "size-4" }), "Drag to turn it"],
                }),
              ],
            }),
            (0, t.jsxs)("div", {
              className: "mt-6 flex flex-col items-center gap-4",
              children: [
                (0, t.jsx)("div", {
                  role: "group",
                  "aria-label": "Choose a side to look at",
                  className: "inline-flex rounded-full bg-mist p-1 ring-1 ring-black/5",
                  children: a1.VIEWS.map((e) =>
                    (0, t.jsx)(
                      "button",
                      {
                        type: "button",
                        "aria-pressed": p === e.id,
                        onClick: () => {
                          let t;
                          (((t = g.current).targetYaw = (0, a1.closestYaw)(t.yaw, e.yaw)),
                            (t.targetPitch = e.pitch),
                            b(),
                            (t.lastInteraction = performance.now() + 6e3));
                        },
                        className: (0, z.cn)(
                          "h-9 rounded-full px-4 text-sm font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:px-5",
                          p === e.id ? "bg-primary-strong text-white shadow-sm" : "text-primary-strong/70 hover:text-primary-strong",
                        ),
                        children: e.label,
                      },
                      e.id,
                    ),
                  ),
                }),
                (0, t.jsx)("p", {
                  "aria-live": "polite",
                  className: "min-h-[2.75rem] max-w-md text-balance text-center text-sm leading-relaxed text-primary-strong/75 sm:min-h-0",
                  children: j,
                }),
              ],
            }),
          ],
        });
      };
    var a3 = e.i(43535);
    let a6 = /^[^\s@<>,;"]+@[^\s@<>,;"]+\.[^\s@<>,;"]{2,}$/,
      a8 = () => {
        let [e, a] = (0, i.useState)(""),
          [s, r] = (0, i.useState)("idle"),
          [n, l] = (0, i.useState)(""),
          o = (0, i.useRef)(null),
          d = (0, i.useRef)(null),
          c = E(),
          { scrollYProgress: u } = (0, _.useScroll)({ target: d, offset: ["start end", "end end"] }),
          m = (0, S.useTransform)(u, [0, 1], [0.86, 1]),
          h = (0, S.useTransform)(u, [0, 1], [70, 0]),
          x = async (t) => {
            t.preventDefault();
            let s = e.trim();
            if (!a6.test(s)) {
              (r("error"), l("Please enter a valid work email."));
              return;
            }
            (r("submitting"), l(""));
            try {
              let e = await fetch("/api/early-access", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ email: s, website: o.current?.value ?? "" }),
                }),
                t = await e.json().catch(() => ({}));
              if (!e.ok) {
                (r("error"), l(t.message || "Something went wrong on our side. Please try again in a moment."));
                return;
              }
              (r("success"), a(""));
            } catch {
              (r("error"), l("We could not reach the server. Please check your connection and try again."));
            }
          };
        return (0, t.jsx)("section", {
          id: "early-access",
          "aria-labelledby": "early-access-title",
          className: "scroll-mt-20 overflow-hidden border-t border-border bg-white",
          children: (0, t.jsxs)("div", {
            className: "relative mx-auto max-w-6xl border-x border-border",
            children: [
              (0, t.jsxs)("div", {
                className: "px-4 pb-14 pt-20 text-center sm:px-10 sm:pt-28",
                children: [
                  (0, t.jsx)("h2", {
                    id: "early-access-title",
                    className:
                      "mx-auto max-w-4xl text-balance font-heading text-5xl font-normal leading-[1.02] tracking-[-0.045em] text-primary-strong sm:text-7xl lg:text-[5.5rem]",
                    children: (0, t.jsx)(C, { text: "Steady power for every peak", stagger: 0.09 }),
                  }),
                  (0, t.jsxs)("p", {
                    className: "reveal mx-auto mt-7 max-w-xl text-pretty text-base leading-relaxed text-primary-strong/85 sm:text-lg",
                    children: [
                      a3.siteConfig.name,
                      " helps operators curtail less, earn more from every megawatt and keep a cleaner grid running on time.",
                    ],
                  }),
                  "success" === s
                    ? (0, t.jsxs)("p", {
                        role: "status",
                        className:
                          "mx-auto mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-accent-foreground",
                        children: [
                          (0, t.jsx)(aV, { className: "size-4", "aria-hidden": "true" }),
                          "You are on the list. We will be in touch shortly.",
                        ],
                      })
                    : (0, t.jsxs)("form", {
                        noValidate: !0,
                        onSubmit: x,
                        className: "reveal mx-auto mt-10 flex max-w-xl flex-col gap-3 sm:flex-row",
                        children: [
                          (0, t.jsx)("label", { htmlFor: "early-access-email", className: "sr-only", children: "Work email" }),
                          (0, t.jsx)("input", {
                            id: "early-access-email",
                            type: "email",
                            autoComplete: "email",
                            value: e,
                            onChange: (e) => {
                              (a(e.target.value), "error" === s && r("idle"));
                            },
                            "aria-invalid": "error" === s,
                            "aria-describedby": "error" === s ? "early-access-error" : void 0,
                            placeholder: "Enter your email",
                            className:
                              "h-12 w-full flex-1 rounded-full border border-input bg-white px-5 text-[15px] text-foreground transition-colors placeholder:text-primary-strong/50 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/15 aria-[invalid=true]:border-orange-600",
                          }),
                          (0, t.jsx)("div", {
                            "aria-hidden": "true",
                            className: "absolute -left-[9999px] h-px w-px overflow-hidden",
                            children: (0, t.jsx)("input", {
                              ref: o,
                              name: "website",
                              type: "text",
                              tabIndex: -1,
                              autoComplete: "off",
                              defaultValue: "",
                            }),
                          }),
                          (0, t.jsx)(aQ, {
                            strength: 0.25,
                            className: "shrink-0",
                            children: (0, t.jsxs)("button", {
                              type: "submit",
                              disabled: "submitting" === s,
                              className: (0, aW.buttonClasses)({ size: "lg", className: "w-full bg-primary-strong hover:bg-forest" }),
                              children: [
                                "submitting" === s && (0, t.jsx)(aL, { className: "size-4 animate-spin", "aria-hidden": "true" }),
                                "submitting" === s ? "Sending" : "Get started",
                              ],
                            }),
                          }),
                        ],
                      }),
                  "error" === s &&
                    n &&
                    (0, t.jsxs)("p", {
                      id: "early-access-error",
                      role: "alert",
                      className: "mt-3 flex items-center justify-center gap-1.5 text-sm text-orange-700",
                      children: [(0, t.jsx)(aR, { className: "size-4", "aria-hidden": "true" }), n],
                    }),
                ],
              }),
              (0, t.jsx)("div", {
                className: "relative border-t border-border px-4 pb-12 pt-8 sm:px-10 sm:pb-16",
                children: (0, t.jsx)(M.motion.div, {
                  ref: d,
                  style: c ? void 0 : { scale: m, y: h },
                  className: "relative mx-auto max-w-5xl",
                  children: (0, t.jsx)(a4, {}),
                }),
              }),
            ],
          }),
        });
      };
    e.s(
      [
        "default",
        0,
        () =>
          (0, t.jsxs)(s.Layout, {
            children: [
              (0, t.jsx)(a.Seo, {}),
              (0, t.jsx)(L, {}),
              (0, t.jsx)(J, {}),
              (0, t.jsx)(ei, {}),
              (0, t.jsx)(eB, {}),
              (0, t.jsx)(tx, {}),
              (0, t.jsx)(av, {}),
              (0, t.jsx)(ak, {}),
              (0, t.jsx)(aA, {}),
              (0, t.jsx)(aP, {}),
              (0, t.jsx)(aK, {}),
              (0, t.jsx)(a8, {}),
            ],
          }),
      ],
      87856,
    );
  },
  55075,
  (e, t, a) => {
    ((window.__NEXT_P = window.__NEXT_P || []).push(["/", () => e.r(87856)]),
      t.hot &&
        t.hot.dispose(function () {
          window.__NEXT_P.push(["/"]);
        }));
  },
]);
