(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  87314,
  (t) => {
    "use strict";
    t.s([
      "resolveTransition",
      0,
      function (t, e) {
        if (t?.inherit && e) {
          let { inherit: i, ...s } = t;
          return { ...e, ...s };
        }
        return t;
      },
    ]);
  },
  12600,
  (t) => {
    "use strict";
    let e = (0, t.i(91788).createContext)({ transformPagePoint: (t) => t, isStatic: !1, reducedMotion: "never" });
    t.s(["MotionConfigContext", 0, e]);
  },
  57126,
  (t) => {
    "use strict";
    var e = t.i(91788);
    t.s([
      "useConstant",
      0,
      function (t) {
        let i = (0, e.useRef)(null);
        return (null === i.current && (i.current = t()), i.current);
      },
    ]);
  },
  14503,
  55810,
  71955,
  77095,
  93959,
  54511,
  21006,
  98125,
  13953,
  3595,
  78673,
  53882,
  22405,
  65907,
  51233,
  88905,
  19744,
  54389,
  44063,
  50180,
  61411,
  62448,
  46164,
  53556,
  27524,
  93709,
  78892,
  67130,
  4995,
  68445,
  91424,
  55974,
  25412,
  86791,
  18172,
  78269,
  93345,
  25778,
  12179,
  49350,
  33592,
  50833,
  83026,
  35866,
  90516,
  19708,
  47477,
  12159,
  71188,
  46768,
  30717,
  25346,
  25052,
  20007,
  91770,
  30195,
  68782,
  49276,
  60541,
  66651,
  35403,
  81057,
  4955,
  4606,
  11535,
  64854,
  (t) => {
    "use strict";
    let e,
      i = [
        "transformPerspective",
        "x",
        "y",
        "z",
        "translateX",
        "translateY",
        "translateZ",
        "scale",
        "scaleX",
        "scaleY",
        "rotate",
        "rotateX",
        "rotateY",
        "rotateZ",
        "skew",
        "skewX",
        "skewY",
      ],
      s = new Set([...i, "pathRotation"]);
    t.s(["transformPropOrder", 0, i, "transformProps", 0, s], 55810);
    let n = (t, e, i) => (i > e ? e : i < t ? t : i);
    t.s(["clamp", 0, n], 71955);
    let r = { test: (t) => "number" == typeof t, parse: parseFloat, transform: (t) => t },
      o = { ...r, transform: (t) => n(0, 1, t) },
      a = { ...r, default: 1 },
      l = (t) => Math.round(1e5 * t) / 1e5;
    t.s(["sanitize", 0, l], 77095);
    let h = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
      u = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
      c = (t, e) => (i) =>
        !!(("string" == typeof i && u.test(i) && i.startsWith(t)) || (e && null != i && Object.prototype.hasOwnProperty.call(i, e))),
      d = (t, e, i) => (s) => {
        if ("string" != typeof s) return s;
        let [n, r, o, a] = s.match(h);
        return { [t]: parseFloat(n), [e]: parseFloat(r), [i]: parseFloat(o), alpha: void 0 !== a ? parseFloat(a) : 1 };
      },
      m = { ...r, transform: (t) => Math.round(n(0, 255, t)) },
      p = {
        test: c("rgb", "red"),
        parse: d("red", "green", "blue"),
        transform: ({ red: t, green: e, blue: i, alpha: s = 1 }) =>
          "rgba(" + m.transform(t) + ", " + m.transform(e) + ", " + m.transform(i) + ", " + l(o.transform(s)) + ")",
      };
    t.s(["rgba", 0, p], 93959);
    let f = {
      test: c("#"),
      parse: function (t) {
        let e = "",
          i = "",
          s = "",
          n = "";
        return (
          t.length > 5
            ? ((e = t.substring(1, 3)), (i = t.substring(3, 5)), (s = t.substring(5, 7)), (n = t.substring(7, 9)))
            : ((e = t.substring(1, 2)),
              (i = t.substring(2, 3)),
              (s = t.substring(3, 4)),
              (n = t.substring(4, 5)),
              (e += e),
              (i += i),
              (s += s),
              (n += n)),
          { red: parseInt(e, 16), green: parseInt(i, 16), blue: parseInt(s, 16), alpha: n ? parseInt(n, 16) / 255 : 1 }
        );
      },
      transform: p.transform,
    };
    t.s(["hex", 0, f], 54511);
    let y = (t) => ({
        test: (e) => "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
        parse: parseFloat,
        transform: (e) => `${e}${t}`,
      }),
      g = y("deg"),
      v = y("%"),
      x = y("px"),
      T = y("vh"),
      b = y("vw"),
      w = { ...v, parse: (t) => v.parse(t) / 100, transform: (t) => v.transform(100 * t) };
    t.s(["degrees", 0, g, "percent", 0, v, "progressPercentage", 0, w, "px", 0, x, "vh", 0, T, "vw", 0, b], 21006);
    let S = {
      test: c("hsl", "hue"),
      parse: d("hue", "saturation", "lightness"),
      transform: ({ hue: t, saturation: e, lightness: i, alpha: s = 1 }) =>
        "hsla(" + Math.round(t) + ", " + v.transform(l(e)) + ", " + v.transform(l(i)) + ", " + l(o.transform(s)) + ")",
    };
    t.s(["hsla", 0, S], 98125);
    let P = {
      test: (t) => p.test(t) || f.test(t) || S.test(t),
      parse: (t) => (p.test(t) ? p.parse(t) : S.test(t) ? S.parse(t) : f.parse(t)),
      transform: (t) => ("string" == typeof t ? t : t.hasOwnProperty("red") ? p.transform(t) : S.transform(t)),
      getAnimatableNone: (t) => {
        let e = P.parse(t);
        return ((e.alpha = 0), P.transform(e));
      },
    };
    t.s(["color", 0, P], 13953);
    let A = new RegExp(h.source),
      V = RegExp(
        /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu.source,
        "i",
      ),
      M = "number",
      C = "color",
      E =
        /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
    function D(t) {
      let e = t.toString();
      return A.test(e) || V.test(e);
    }
    function k(t) {
      let e = t.toString(),
        i = [],
        s = { color: [], number: [], var: [] },
        n = [],
        r = 0,
        o = e
          .replace(
            E,
            (t) => (
              P.test(t)
                ? (s.color.push(r), n.push(C), i.push(P.parse(t)))
                : t.startsWith("var(")
                  ? (s.var.push(r), n.push("var"), i.push(t))
                  : (s.number.push(r), n.push(M), i.push(parseFloat(t))),
              ++r,
              "${}"
            ),
          )
          .split("${}");
      return { values: i, split: o, indexes: s, types: n };
    }
    function R({ split: t, types: e }) {
      let i = t.length;
      return (s) => {
        let n = "";
        for (let r = 0; r < i; r++)
          if (((n += t[r]), void 0 !== s[r])) {
            let t = e[r];
            t === M ? (n += l(s[r])) : t === C ? (n += P.transform(s[r])) : (n += s[r]);
          }
        return n;
      };
    }
    let L = {
      test: function (t) {
        return isNaN(t) && "string" == typeof t && (A.test(t) || V.test(t));
      },
      parse: function (t) {
        return k(t).values;
      },
      createTransformer: function (t) {
        return R(k(t));
      },
      getAnimatableNone: function (t) {
        let e = k(t);
        return R(e)(
          e.values.map((t, i) =>
            ((t, e) =>
              "number" == typeof t ? (e?.trim().endsWith("/") ? t : 0) : "number" == typeof t ? 0 : P.test(t) ? P.getAnimatableNone(t) : t)(
              t,
              e.split[i],
            ),
          ),
        );
      },
    };
    t.s(["analyseComplexValue", 0, k, "complex", 0, L, "hasComplexValues", 0, D], 3595);
    let B = new Set(["brightness", "contrast", "saturate", "opacity"]);
    function F(t) {
      let [e, i] = t.slice(0, -1).split("(");
      if ("drop-shadow" === e) return t;
      let [s] = i.match(h) || [];
      if (!s) return t;
      let n = i.replace(s, ""),
        r = +!!B.has(e);
      return (s !== i && (r *= 100), e + "(" + r + n + ")");
    }
    let j = /\b([a-z-]*)\(.*?\)/gu,
      I = {
        ...L,
        getAnimatableNone: (t) => {
          let e = t.match(j);
          return e ? e.map(F).join(" ") : t;
        },
      },
      O = {
        ...L,
        getAnimatableNone: (t) => {
          let e = L.parse(t);
          return L.createTransformer(t)(e.map((t) => ("number" == typeof t ? 0 : "object" == typeof t ? { ...t, alpha: 1 } : t)));
        },
      },
      N = { ...r, transform: Math.round },
      U = {
        rotate: g,
        pathRotation: g,
        rotateX: g,
        rotateY: g,
        rotateZ: g,
        scale: a,
        scaleX: a,
        scaleY: a,
        scaleZ: a,
        skew: g,
        skewX: g,
        skewY: g,
        distance: x,
        translateX: x,
        translateY: x,
        translateZ: x,
        x: x,
        y: x,
        z: x,
        perspective: x,
        transformPerspective: x,
        opacity: o,
        originX: w,
        originY: w,
        originZ: x,
      };
    t.s(["transformValueTypes", 0, U], 78673);
    let W = {
      borderWidth: x,
      borderTopWidth: x,
      borderRightWidth: x,
      borderBottomWidth: x,
      borderLeftWidth: x,
      borderRadius: x,
      borderTopLeftRadius: x,
      borderTopRightRadius: x,
      borderBottomRightRadius: x,
      borderBottomLeftRadius: x,
      width: x,
      maxWidth: x,
      height: x,
      maxHeight: x,
      top: x,
      right: x,
      bottom: x,
      left: x,
      inset: x,
      insetBlock: x,
      insetBlockStart: x,
      insetBlockEnd: x,
      insetInline: x,
      insetInlineStart: x,
      insetInlineEnd: x,
      padding: x,
      paddingTop: x,
      paddingRight: x,
      paddingBottom: x,
      paddingLeft: x,
      paddingBlock: x,
      paddingBlockStart: x,
      paddingBlockEnd: x,
      paddingInline: x,
      paddingInlineStart: x,
      paddingInlineEnd: x,
      margin: x,
      marginTop: x,
      marginRight: x,
      marginBottom: x,
      marginLeft: x,
      marginBlock: x,
      marginBlockStart: x,
      marginBlockEnd: x,
      marginInline: x,
      marginInlineStart: x,
      marginInlineEnd: x,
      fontSize: x,
      backgroundPositionX: x,
      backgroundPositionY: x,
      ...U,
      zIndex: N,
      fillOpacity: o,
      strokeOpacity: o,
      numOctaves: N,
    };
    t.s(["numberValueTypes", 0, W], 53882);
    let $ = {
        ...W,
        color: P,
        backgroundColor: P,
        outlineColor: P,
        fill: P,
        stroke: P,
        borderColor: P,
        borderTopColor: P,
        borderRightColor: P,
        borderBottomColor: P,
        borderLeftColor: P,
        filter: I,
        WebkitFilter: I,
        mask: O,
        WebkitMask: O,
      },
      z = (t) => $[t],
      G = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
      H = () => ({ min: 0, max: 0 }),
      K = () => ({ x: H(), y: H() });
    t.s(["createBox", 0, K, "createDelta", 0, () => ({ x: G(), y: G() })], 22405);
    let Y = (t) => !!(t && t.getVelocity);
    t.s(["isMotionValue", 0, Y], 65907);
    let X = new Set(["width", "height", "top", "left", "right", "bottom", ...i]);
    t.s(["positionalKeys", 0, X], 51233);
    let _ = [r, x, v, g, b, T, { test: (t) => "auto" === t, parse: (t) => t }],
      q = (t) => _.find((e) => e.test(t));
    t.i(50461);
    let Z = () => {};
    t.s(["invariant", 0, Z, "warning", 0, () => {}], 88905);
    let J = (t) => (e) => "string" == typeof e && e.startsWith(t),
      Q = J("--"),
      tt = J("var(--"),
      te = (t) => !!tt(t) && ti.test(t.split("/*")[0].trim()),
      ti = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
    function ts(t) {
      return "string" == typeof t && t.split("/*")[0].includes("var(--");
    }
    t.s(["containsCSSVariable", 0, ts, "isCSSVariableName", 0, Q, "isCSSVariableToken", 0, te], 19744);
    let tn = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,
      tr = new Set([I, O]);
    function to(t, e) {
      let i = z(t);
      return (tr.has(i) || (i = L), i.getAnimatableNone ? i.getAnimatableNone(e) : void 0);
    }
    let ta = (t) => (180 * t) / Math.PI,
      tl = (t) => tu(ta(Math.atan2(t[1], t[0]))),
      th = {
        x: 4,
        y: 5,
        translateX: 4,
        translateY: 5,
        scaleX: 0,
        scaleY: 3,
        scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
        rotate: tl,
        rotateZ: tl,
        skewX: (t) => ta(Math.atan(t[1])),
        skewY: (t) => ta(Math.atan(t[2])),
        skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2,
      },
      tu = (t) => ((t %= 360) < 0 && (t += 360), t),
      tc = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]),
      td = (t) => Math.sqrt(t[4] * t[4] + t[5] * t[5]),
      tm = {
        x: 12,
        y: 13,
        z: 14,
        translateX: 12,
        translateY: 13,
        translateZ: 14,
        scaleX: tc,
        scaleY: td,
        scale: (t) => (tc(t) + td(t)) / 2,
        rotateX: (t) => tu(ta(Math.atan2(t[6], t[5]))),
        rotateY: (t) => tu(ta(Math.atan2(-t[2], t[0]))),
        rotateZ: tl,
        rotate: tl,
        skewX: (t) => ta(Math.atan(t[4])),
        skewY: (t) => ta(Math.atan(t[1])),
        skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2,
      };
    function tp(t) {
      return +!!t.includes("scale");
    }
    function tf(t, e) {
      let i, s;
      if (!t || "none" === t) return tp(e);
      let n = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
      if (n) ((i = tm), (s = n));
      else {
        let e = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
        ((i = th), (s = e));
      }
      if (!s) return tp(e);
      let r = i[e],
        o = s[1].split(",").map(tg);
      return "function" == typeof r ? r(o) : o[r];
    }
    let ty = (t, e) => {
      let { transform: i = "none" } = getComputedStyle(t);
      return tf(i, e);
    };
    function tg(t) {
      return parseFloat(t.trim());
    }
    t.s(["defaultTransformValue", 0, tp, "parseValueFromTransform", 0, tf, "readTransformValue", 0, ty], 54389);
    let tv = (t) => t === r || t === x,
      tx = new Set(["x", "y", "z"]),
      tT = i.filter((t) => !tx.has(t)),
      tb = new Set(["bottom", "right"]);
    function tw(t, e, i, s, n, r) {
      let o = parseFloat(t);
      if (!isNaN(o)) return o;
      let { min: a, max: l } = e()[i],
        h = l - a;
      return "border-box" === r ? h : h - parseFloat(s) - parseFloat(n);
    }
    let tS = {
      width: ({ width: t, paddingLeft: e = "0", paddingRight: i = "0", boxSizing: s }, n) => tw(t, n, "x", e, i, s),
      height: ({ height: t, paddingTop: e = "0", paddingBottom: i = "0", boxSizing: s }, n) => tw(t, n, "y", e, i, s),
      top: ({ top: t }) => parseFloat(t),
      left: ({ left: t }) => parseFloat(t),
      bottom: ({ top: t }, e) => {
        let { y: i } = e();
        return parseFloat(t) + (i.max - i.min);
      },
      right: ({ left: t }, e) => {
        let { x: i } = e();
        return parseFloat(t) + (i.max - i.min);
      },
      x: ({ transform: t }) => tf(t, "x"),
      y: ({ transform: t }) => tf(t, "y"),
    };
    ((tS.translateX = tS.x), (tS.translateY = tS.y));
    let tP = (t) => t;
    t.s(["noop", 0, tP], 44063);
    let tA = {};
    t.s(["MotionGlobalConfig", 0, tA], 50180);
    let tV = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"];
    function tM(t, e, i = { delta: 0, timestamp: 0, isProcessing: !1 }) {
      let s = !1,
        n = !0,
        r = () => (s = !0),
        o = tV.reduce(
          (t, e) => (
            (t[e] = (function (t) {
              let e = new Set(),
                i = new Set(),
                s = !1,
                n = !1,
                r = new Set(),
                o = { delta: 0, timestamp: 0, isProcessing: !1 };
              function a(e) {
                (r.has(e) && (i.add(e), t()), e(o));
              }
              let l = {
                schedule: (t, n = !1, o = !1) => {
                  let a = o && s ? e : i;
                  return (n && r.add(t), a.add(t), t);
                },
                cancel: (t) => {
                  (i.delete(t), r.delete(t));
                },
                process: (t) => {
                  if (((o = t), s)) {
                    n = !0;
                    return;
                  }
                  s = !0;
                  let r = e;
                  ((e = i), (i = r), e.forEach(a), e.clear(), (s = !1), n && ((n = !1), l.process(t)));
                },
              };
              return l;
            })(r)),
            t
          ),
          {},
        ),
        { setup: a, read: l, resolveKeyframes: h, preUpdate: u, update: c, preRender: d, render: m, postRender: p } = o,
        f = () => {
          let r = tA.useManualTiming,
            o = r ? i.timestamp : performance.now();
          ((s = !1),
            r || (i.delta = n ? 1e3 / 60 : Math.max(Math.min(o - i.timestamp, 40), 1)),
            (i.timestamp = o),
            (i.isProcessing = !0),
            a.process(i),
            l.process(i),
            h.process(i),
            u.process(i),
            c.process(i),
            d.process(i),
            m.process(i),
            p.process(i),
            (i.isProcessing = !1),
            s && e && ((n = !1), t(f)));
        };
      return {
        schedule: tV.reduce((e, r) => {
          let a = o[r];
          return ((e[r] = (e, r = !1, o = !1) => (!s && ((s = !0), (n = !0), i.isProcessing || t(f)), a.schedule(e, r, o))), e);
        }, {}),
        cancel: (t) => {
          for (let e = 0; e < tV.length; e++) o[tV[e]].cancel(t);
        },
        state: i,
        steps: o,
      };
    }
    let tC = { delta: 0, timestamp: 0, isProcessing: !1 };
    t.s(["frameData", 0, tC], 61411);
    let { schedule: tE, cancel: tD, steps: tk } = tM("u" > typeof requestAnimationFrame ? requestAnimationFrame : tP, !0, tC);
    t.s(["cancelFrame", 0, tD, "frame", 0, tE, "frameSteps", 0, tk], 62448);
    let tR = new Set(),
      tL = !1,
      tB = !1,
      tF = !1;
    function tj() {
      if (tB) {
        let t = [],
          e = new Set(),
          i = new Set();
        tR.forEach((s) => {
          s.needsMeasurement && (t.push(s), e.add(s.element), tb.has(s.name) && i.add(s.element));
        });
        let s = new Map();
        (i.forEach((t) => {
          let e,
            i =
              ((e = []),
              tT.forEach((i) => {
                let s = t.getValue(i);
                if (void 0 !== s) {
                  let t = s.get(),
                    n = +!!i.startsWith("scale");
                  if (t === n) return;
                  (e.push([i, t]), s.set(n));
                }
              }),
              e);
          i.length && (s.set(t, i), t.render());
        }),
          t.forEach((t) => t.measureInitialState()),
          e.forEach((t) => {
            t.render();
            let e = s.get(t);
            e &&
              e.forEach(([e, i]) => {
                t.getValue(e)?.set(i);
              });
          }),
          t.forEach((t) => t.measureEndState()),
          t.forEach((t) => {
            void 0 !== t.suspendedScrollY && window.scrollTo(0, t.suspendedScrollY);
          }));
      }
      ((tB = !1), (tL = !1), tR.forEach((t) => t.complete(tF)), tR.clear());
    }
    function tI() {
      tR.forEach((t) => {
        (t.readKeyframes(), t.needsMeasurement && (tB = !0));
      });
    }
    class tO {
      constructor(t, e, i, s, n, r = !1) {
        ((this.state = "pending"),
          (this.isAsync = !1),
          (this.needsMeasurement = !1),
          (this.unresolvedKeyframes = [...t]),
          (this.onComplete = e),
          (this.name = i),
          (this.motionValue = s),
          (this.element = n),
          (this.isAsync = r));
      }
      scheduleResolve() {
        ((this.state = "scheduled"),
          this.isAsync ? (tR.add(this), tL || ((tL = !0), tE.read(tI), tE.resolveKeyframes(tj))) : (this.readKeyframes(), this.complete()));
      }
      readKeyframes() {
        let { unresolvedKeyframes: t, name: e, element: i, motionValue: s } = this;
        if (null === t[0]) {
          let n = s?.get(),
            r = t[t.length - 1];
          if (void 0 !== n) t[0] = n;
          else if (i && e) {
            let s = (function (t, e, i) {
              if ("string" == typeof t) {
                if (/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t) || /^0[^.\s]+$/u.test(t)) return parseFloat(t);
                if (!L.test(t) && L.test(i)) return to(e, i);
              }
              return t ?? void 0;
            })(i.readValue(e, r), e, r);
            void 0 !== s && (t[0] = s);
          }
          (void 0 === t[0] && (t[0] = r), s && void 0 === n && s.set(t[0]));
        }
        for (let e = 1; e < t.length; e++) t[e] ?? (t[e] = t[e - 1]);
      }
      setFinalKeyframe() {}
      measureInitialState() {}
      renderEndStyles() {}
      measureEndState() {}
      complete(t = !1) {
        ((this.state = "complete"), this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t), tR.delete(this));
      }
      cancel() {
        "scheduled" === this.state && (tR.delete(this), (this.state = "pending"));
      }
      resume() {
        "pending" === this.state && this.scheduleResolve();
      }
    }
    t.s(
      [
        "KeyframeResolver",
        0,
        tO,
        "flushKeyframeResolvers",
        0,
        function () {
          ((tF = !0), tI(), tj(), (tF = !1));
        },
      ],
      46164,
    );
    let tN = new Set(["auto", "none", "0"]);
    class tU extends tO {
      constructor(t, e, i, s, n) {
        super(t, e, i, s, n, !0);
      }
      readKeyframes() {
        let { unresolvedKeyframes: t, element: e, name: i } = this;
        if (!e || !e.current) return;
        super.readKeyframes();
        for (let i = 0; i < t.length; i++) {
          let s = t[i];
          if ("string" == typeof s && te((s = s.trim()))) {
            let n = (function t(e, i, s = 1) {
              Z(
                s <= 4,
                `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`,
                "max-css-var-depth",
              );
              let [n, r] = (function (t) {
                let e = tn.exec(t);
                if (!e) return [,];
                let [, i, s, n] = e;
                return [`--${i ?? s}`, n];
              })(e);
              if (!n) return;
              let o = window.getComputedStyle(i).getPropertyValue(n);
              if (o) {
                let t = o.trim();
                return /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t) ? parseFloat(t) : t;
              }
              return te(r) ? t(r, i, s + 1) : r;
            })(s, e.current);
            (void 0 !== n && (t[i] = n), i === t.length - 1 && (this.finalKeyframe = s));
          }
        }
        if ((this.resolveNoneKeyframes(), !X.has(i) || 2 !== t.length)) return;
        let [s, n] = t;
        if ("number" == typeof s && "number" == typeof n) return;
        let r = q(s),
          o = q(n);
        if (ts(s) !== ts(n) && tS[i]) {
          this.needsMeasurement = !0;
          return;
        }
        if (r !== o)
          if (tv(r) && tv(o))
            for (let e = 0; e < t.length; e++) {
              let i = t[e];
              "string" == typeof i && (t[e] = parseFloat(i));
            }
          else tS[i] && (this.needsMeasurement = !0);
      }
      resolveNoneKeyframes() {
        let { unresolvedKeyframes: t, name: e } = this,
          i = [];
        for (let e = 0; e < t.length; e++)
          (null === t[e] ||
            (function (t) {
              if ("number" == typeof t) return 0 === t;
              if (null === t) return !0;
              return "none" === t || "0" === t || /^0[^.\s]+$/u.test(t);
            })(t[e])) &&
            i.push(e);
        i.length &&
          (function (t, e, i) {
            let s,
              n = 0;
            for (; n < t.length && !s;) {
              let e = t[n];
              ("string" == typeof e && !tN.has(e) && D(e) && (s = t[n]), n++);
            }
            if (s && i) for (let n of e) t[n] !== s && (t[n] = to(i, s));
          })(t, i, e);
      }
      measure() {
        let { element: t, name: e } = this;
        return tS[e](window.getComputedStyle(t.current), () => t.measureViewportBox());
      }
      measureInitialState() {
        let { element: t, unresolvedKeyframes: e, name: i } = this;
        if (!t || !t.current) return;
        ("height" === i && (this.suspendedScrollY = window.pageYOffset),
          (this.measuredOrigin = this.measure()),
          (e[0] = this.measuredOrigin));
        let s = e[e.length - 1];
        void 0 !== s && this.motionValue?.jump(s, !1);
      }
      measureEndState() {
        let { element: t, unresolvedKeyframes: e } = this;
        if (!t || !t.current) return;
        this.motionValue?.jump(this.measuredOrigin, !1);
        let i = e.length - 1,
          s = e[i];
        ((e[i] = this.measure()),
          null !== s && void 0 === this.finalKeyframe && (this.finalKeyframe = s),
          this.removedTransforms?.length &&
            this.removedTransforms.forEach(([e, i]) => {
              t.getValue(e).set(i);
            }),
          this.resolveNoneKeyframes());
      }
    }
    t.s(["DOMKeyframesResolver", 0, tU], 53556);
    let tW = (t) => 1e3 * t,
      t$ = (t) => t / 1e3;
    function tz(t, e) {
      -1 === t.indexOf(e) && t.push(e);
    }
    function tG(t, e) {
      let i = t.indexOf(e);
      i > -1 && t.splice(i, 1);
    }
    (t.s(["millisecondsToSeconds", 0, t$, "secondsToMilliseconds", 0, tW], 27524),
      t.s(["addUniqueItem", 0, tz, "removeItem", 0, tG], 93709));
    class tH {
      constructor() {
        this.subscriptions = [];
      }
      add(t) {
        return (tz(this.subscriptions, t), () => this.remove(t));
      }
      remove(t) {
        tG(this.subscriptions, t);
      }
      notify(t, e, i) {
        let s = this.subscriptions.length;
        if (s)
          if (1 === s) this.subscriptions[0](t, e, i);
          else
            for (let n = 0; n < s; n++) {
              let s = this.subscriptions[n];
              s && s(t, e, i);
            }
      }
      getSize() {
        return this.subscriptions.length;
      }
      clear() {
        this.subscriptions.length = 0;
      }
    }
    t.s(["SubscriptionManager", 0, tH], 78892);
    let tK = (t) => t.startsWith("--");
    function tY(t, e, i) {
      tK(e) ? t.style.setProperty(e, i) : (t.style[e] = i);
    }
    function tX(t) {
      let e;
      return () => (void 0 === e && (e = t()), e);
    }
    (t.s(["isCSSVar", 0, tK], 67130), t.s(["setStyle", 0, tY], 4995), t.s(["memo", 0, tX], 68445));
    let t_ = {};
    function tq(t, e) {
      let i = tX(t);
      return () => t_[e] ?? i();
    }
    let tZ = tq(() => void 0 !== window.ScrollTimeline, "scrollTimeline"),
      tJ = tq(() => void 0 !== window.ViewTimeline, "viewTimeline");
    t.s(["supportsScrollTimeline", 0, tZ, "supportsViewTimeline", 0, tJ], 91424);
    let tQ = (t) => null !== t;
    function t0(t, { repeat: e, repeatType: i = "loop" }, s, n = 1) {
      let r = t.filter(tQ),
        o = n < 0 || (e && "loop" !== i && e % 2 == 1) ? 0 : r.length - 1;
      return o && void 0 !== s ? s : r[o];
    }
    t.s(["getFinalKeyframe", 0, t0], 55974);
    class t1 {
      constructor() {
        this.isResolved = !1;
      }
      get finished() {
        return (
          this._finished ||
            (this._finished = this.isResolved
              ? Promise.resolve()
              : new Promise((t) => {
                  this._resolve = t;
                })),
          this._finished
        );
      }
      updateFinished() {
        ((this._finished = this._resolve = void 0), (this.isResolved = !1));
      }
      notifyFinished() {
        ((this.isResolved = !0), this._resolve?.());
      }
      then(t, e) {
        return this.finished.then(t, e);
      }
    }
    function t5() {
      e = void 0;
    }
    t.s(["WithPromise", 0, t1], 25412);
    let t2 = {
      now: () => (void 0 === e && t2.set(tC.isProcessing || tA.useManualTiming ? tC.timestamp : performance.now()), e),
      set: (t) => {
        ((e = t), queueMicrotask(t5));
      },
    };
    function t9(t, e) {
      return { kind: t, animation: e, timestamp: t2.now(), frameTimestamp: tC.timestamp, frameIsProcessing: tC.isProcessing };
    }
    function t3(t, e, i) {
      let s = globalThis.__MOTION_INSPECT__;
      if (s)
        try {
          s({ ...t9("animation-start", t), options: i ? { ...e, ...i } : e });
        } catch {}
    }
    (t.s(["time", 0, t2], 86791),
      t.s(
        [
          "notifyAnimationStart",
          0,
          t3,
          "notifyLayoutAnimationStart",
          0,
          function (t, e) {
            let i = globalThis.__MOTION_INSPECT__;
            if (i)
              try {
                i({ ...t9("layout-animation-start", t), node: e });
              } catch {}
          },
        ],
        18172,
      ));
    let t4 = (t) => Array.isArray(t) && "number" == typeof t[0];
    t.s(["isBezierDefinition", 0, t4], 78269);
    let t6 = tq(() => {
        try {
          document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
        } catch (t) {
          return !1;
        }
        return !0;
      }, "linearEasing"),
      t8 = (t, e, i = 10) => {
        let s = "",
          n = Math.max(Math.round(e / i), 2);
        for (let e = 0; e < n; e++) s += Math.round(1e4 * t(e / (n - 1))) / 1e4 + ", ";
        return `linear(${s.substring(0, s.length - 2)})`;
      };
    t.s(["generateLinearEasing", 0, t8], 93345);
    let t7 = ([t, e, i, s]) => `cubic-bezier(${t}, ${e}, ${i}, ${s})`,
      et = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: t7([0, 0.65, 0.55, 1]),
        circOut: t7([0.55, 0, 1, 0.45]),
        backIn: t7([0.31, 0.01, 0.66, -0.59]),
        backOut: t7([0.33, 1.53, 0.69, 0.99]),
      };
    function ee(t) {
      return "function" == typeof t && "applyToOptions" in t;
    }
    t.s(["isGenerator", 0, ee], 25778);
    class ei extends t1 {
      constructor(t) {
        if ((super(), (this.finishedTime = null), (this.isStopped = !1), (this.manualStartTime = null), !t)) return;
        const { element: e, name: i, keyframes: s, pseudoElement: n, allowFlatten: r = !1, finalKeyframe: o, onComplete: a } = t;
        ((this.isPseudoElement = !!n),
          (this.allowFlatten = r),
          (this.options = t),
          Z("string" != typeof t.type, 'Mini animate() doesn\'t support "type" as a string.', "mini-spring"));
        const l = (function ({ type: t, ...e }) {
          return ee(t) && t6() ? t.applyToOptions(e) : (e.duration ?? (e.duration = 300), e.ease ?? (e.ease = "easeOut"), e);
        })(t);
        ((this.animation = (function (
          t,
          e,
          i,
          { delay: s = 0, duration: n = 300, repeat: r = 0, repeatType: o = "loop", ease: a = "easeOut", times: l } = {},
          h,
        ) {
          let u = { [e]: i };
          l && (u.offset = l);
          let c = (function t(e, i) {
            if (e)
              return "function" == typeof e
                ? t6()
                  ? t8(e, i)
                  : "ease-out"
                : t4(e)
                  ? t7(e)
                  : Array.isArray(e)
                    ? e.map((e) => t(e, i) || et.easeOut)
                    : et[e];
          })(a, n);
          Array.isArray(c) && (u.easing = c);
          let d = {
            delay: s,
            duration: n,
            easing: Array.isArray(c) ? "linear" : c,
            fill: "both",
            iterations: r + 1,
            direction: "reverse" === o ? "alternate" : "normal",
          };
          return (h && (d.pseudoElement = h), t.animate(u, d));
        })(e, i, s, l, n)),
          !1 === l.autoplay && this.animation.pause(),
          (this.animation.onfinish = () => {
            if (((this.finishedTime = this.time), !n)) {
              let t = t0(s, this.options, o, this.speed);
              (this.updateMotionValue && this.updateMotionValue(t), tY(e, i, t), this.animation.cancel());
            }
            (a?.(), this.notifyFinished());
          }),
          t3(this, t, l));
      }
      play() {
        this.isStopped || ((this.manualStartTime = null), this.animation.play(), "finished" === this.state && this.updateFinished());
      }
      pause() {
        this.animation.pause();
      }
      complete() {
        this.animation.finish?.();
      }
      cancel() {
        try {
          this.animation.cancel();
        } catch (t) {}
      }
      stop() {
        if (this.isStopped) return;
        this.isStopped = !0;
        let { state: t } = this;
        "idle" !== t &&
          "finished" !== t &&
          (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
      }
      commitStyles() {
        let t = this.options?.element;
        !this.isPseudoElement && t?.isConnected && this.animation.commitStyles?.();
      }
      get duration() {
        return t$(Number(this.animation.effect?.getComputedTiming?.().duration || 0));
      }
      get iterationDuration() {
        let { delay: t = 0 } = this.options || {};
        return this.duration + t$(t);
      }
      get time() {
        return t$(Number(this.animation.currentTime) || 0);
      }
      set time(t) {
        let e = null !== this.finishedTime;
        ((this.manualStartTime = null), (this.finishedTime = null), (this.animation.currentTime = tW(t)), e && this.animation.pause());
      }
      get speed() {
        return this.animation.playbackRate;
      }
      set speed(t) {
        (t < 0 && (this.finishedTime = null), (this.animation.playbackRate = t));
      }
      get state() {
        return null !== this.finishedTime ? "finished" : this.animation.playState;
      }
      get startTime() {
        return this.manualStartTime ?? Number(this.animation.startTime);
      }
      set startTime(t) {
        this.manualStartTime = this.animation.startTime = t;
      }
      attachTimeline({ timeline: t, onAttach: e, observe: i }) {
        return (this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), (this.animation.onfinish = null), t && tZ())
          ? ((this.animation.timeline = t), e?.(this.animation), tP)
          : i(this);
      }
    }
    t.s(["NativeAnimation", 0, ei], 12179);
    let es = new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"]);
    t.s(["acceleratedValues", 0, es], 49350);
    let { schedule: en, cancel: er } = tM(queueMicrotask, !1);
    t.s(["cancelMicrotask", 0, er, "microtask", 0, en], 33592);
    let eo = (t, e) => (e ? (1e3 / e) * t : 0);
    t.s(["velocityPerSecond", 0, eo], 50833);
    let ea = { current: void 0 };
    class el {
      constructor(t, e = {}) {
        ((this.canTrackVelocity = null),
          (this.events = {}),
          (this.updateAndNotify = (t) => {
            let e = t2.now();
            if (
              (this.updatedAt !== e && this.setPrevFrameValue(),
              (this.prev = this.current),
              this.setCurrent(t),
              this.current !== this.prev && (this.notifyChange(), this.dependents))
            )
              for (let t of this.dependents) t.dirty();
          }),
          (this.hasAnimated = !1),
          this.setCurrent(t),
          (this.owner = e.owner));
      }
      setCurrent(t) {
        ((this.current = t),
          (this.updatedAt = t2.now()),
          null === this.canTrackVelocity && void 0 !== t && (this.canTrackVelocity = !isNaN(parseFloat(this.current))));
      }
      setPrevFrameValue(t = this.current) {
        ((this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt));
      }
      onChange(t) {
        return this.on("change", t);
      }
      on(t, e) {
        var i;
        return "change" === t ? this.onChangeSubscribe(e) : ((i = this.events)[t] || (i[t] = new tH())).add(e);
      }
      onChangeSubscribe(t) {
        let { events: e } = this;
        return (
          e.change || this.changeSubscriber
            ? (e.change || ((e.change = new tH()), e.change.add(this.changeSubscriber), (this.changeSubscriber = void 0)), e.change.add(t))
            : (this.changeSubscriber = t),
          () => {
            (this.changeSubscriber === t ? (this.changeSubscriber = void 0) : e.change?.remove(t), this.stopIfUnobserved());
          }
        );
      }
      stopIfUnobserved() {
        tE.read(() => {
          this.changeSubscriber || this.events.change?.getSize() || this.stop();
        });
      }
      clearListeners() {
        for (let t in ((this.changeSubscriber = void 0), this.events)) this.events[t].clear();
      }
      attach(t, e) {
        ((this.passiveEffect = t), (this.stopPassiveEffect = e));
      }
      set(t) {
        this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t);
      }
      setWithVelocity(t, e, i) {
        (this.set(e), (this.prev = void 0), (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt - i));
      }
      jump(t, e = !0) {
        (this.updateAndNotify(t),
          (this.prev = t),
          (this.prevUpdatedAt = this.prevFrameValue = void 0),
          e && this.stop(),
          this.stopPassiveEffect && this.stopPassiveEffect());
      }
      dirty() {
        this.notifyChange();
      }
      notifyChange() {
        let { current: t, changeSubscriber: e } = this;
        e ? e(t) : this.events.change?.notify(t);
      }
      addDependent(t) {
        (this.dependents || (this.dependents = new Set()), this.dependents.add(t));
      }
      removeDependent(t) {
        this.dependents && this.dependents.delete(t);
      }
      get() {
        return (ea.current && ea.current.push(this), this.current);
      }
      getPrevious() {
        return this.prev;
      }
      getVelocity() {
        let t = t2.now();
        if (!this.canTrackVelocity || void 0 === this.prevFrameValue || t - this.updatedAt > 30) return 0;
        let e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
        return eo(parseFloat(this.current) - parseFloat(this.prevFrameValue), e);
      }
      start(t) {
        return (
          this.stop(),
          new Promise((e) => {
            let i;
            this.hasAnimated = !0;
            let s = !1;
            ((i = t(() => {
              ((s = !0), this.events.animationComplete?.notify(), this.animation === i && this.clearAnimation(), e());
            })),
              s || (this.animation = i),
              this.events.animationStart?.notify());
          })
        );
      }
      stop() {
        (this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()),
          this.clearAnimation());
      }
      isAnimating() {
        return !!this.animation;
      }
      clearAnimation() {
        this.animation = void 0;
      }
      destroy() {
        (this.dependents?.clear(),
          this.events.destroy?.notify(),
          this.clearListeners(),
          this.stop(),
          this.stopPassiveEffect && this.stopPassiveEffect());
      }
    }
    function eh(t, e) {
      return new el(t, e);
    }
    t.s(["MotionValue", 0, el, "collectMotionValues", 0, ea, "motionValue", 0, eh], 83026);
    let eu = new WeakMap();
    function ec(t) {
      return null !== t && "object" == typeof t && "function" == typeof t.start;
    }
    function ed(t) {
      return "string" == typeof t || Array.isArray(t);
    }
    (t.s(["visualElementStore", 0, eu], 35866), t.s(["isAnimationControls", 0, ec], 90516), t.s(["isVariantLabel", 0, ed], 19708));
    let em = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
      ep = ["initial", ...em];
    function ef(t) {
      if (ec(t.animate)) return !0;
      for (let e = 0; e < ep.length; e++) if (ed(t[ep[e]])) return !0;
      return !1;
    }
    function ey(t) {
      return !!(ef(t) || t.variants);
    }
    (t.s(["variantPriorityOrder", 0, em, "variantProps", 0, ep], 47477),
      t.s(["isControllingVariants", 0, ef, "isVariantNode", 0, ey], 12159));
    let eg = { current: null },
      ev = { current: !1 },
      ex = "u" > typeof window,
      eT = [
        "AnimationStart",
        "AnimationComplete",
        "Update",
        "BeforeLayoutMeasure",
        "LayoutMeasure",
        "LayoutAnimationStart",
        "LayoutAnimationComplete",
      ],
      eb = {};
    class ew {
      scrapeMotionValuesFromProps(t, e, i) {
        return {};
      }
      constructor(
        { parent: t, props: e, presenceContext: i, reducedMotionConfig: s, skipAnimations: n, blockInitialAnimation: r, visualState: o },
        a = {},
      ) {
        ((this.current = null),
          (this.children = new Set()),
          (this.isVariantNode = !1),
          (this.isControllingVariants = !1),
          (this.shouldReduceMotion = null),
          (this.shouldSkipAnimations = !1),
          (this.values = new Map()),
          (this.KeyframeResolver = tO),
          (this.features = {}),
          (this.valueSubscriptions = new Map()),
          (this.prevMotionValues = {}),
          (this.hasBeenMounted = !1),
          (this.events = {}),
          (this.propEventSubscriptions = {}),
          (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
          (this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
          }),
          (this.renderScheduledAt = 0),
          (this.scheduleRender = () => {
            let t = t2.now();
            this.renderScheduledAt < t && ((this.renderScheduledAt = t), tE.render(this.render, !1, !0));
          }));
        const { latestValues: l, renderState: h } = o;
        ((this.latestValues = l),
          (this.baseTarget = { ...l }),
          (this.initialValues = e.initial ? { ...l } : {}),
          (this.renderState = h),
          (this.parent = t),
          (this.props = e),
          (this.presenceContext = i),
          (this.depth = t ? t.depth + 1 : 0),
          (this.reducedMotionConfig = s),
          (this.skipAnimationsConfig = n),
          (this.options = a),
          (this.blockInitialAnimation = !!r),
          (this.isControllingVariants = ef(e)),
          (this.isVariantNode = ey(e)),
          this.isVariantNode && (this.variantChildren = new Set()),
          (this.manuallyAnimateOnMount = !!(t && t.current)));
        const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(e, {}, this);
        for (const t in c) {
          const e = c[t];
          void 0 !== l[t] && Y(e) && e.set(l[t]);
        }
      }
      mount(t) {
        if (this.hasBeenMounted)
          for (let t in this.initialValues)
            (this.values.get(t)?.jump(this.initialValues[t]), (this.latestValues[t] = this.initialValues[t]));
        if (
          ((this.current = t),
          eu.set(t, this),
          this.projection && !this.projection.instance && this.projection.mount(t),
          this.isVariantNode && !this.isControllingVariants)
        ) {
          let t = this;
          do t = !1 !== t.props.inherit && t.parent;
          while (t && !t.isVariantNode);
          if (t) {
            let { variantChildren: e } = t;
            (e.add(this), (this.removeFromVariantTree = () => e.delete(this)));
          }
        }
        (this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
          "never" === this.reducedMotionConfig
            ? (this.shouldReduceMotion = !1)
            : "always" === this.reducedMotionConfig
              ? (this.shouldReduceMotion = !0)
              : (ev.current ||
                  (function () {
                    if (((ev.current = !0), ex))
                      if (window.matchMedia) {
                        let t = window.matchMedia("(prefers-reduced-motion)"),
                          e = () => (eg.current = t.matches);
                        (t.addEventListener("change", e), e());
                      } else eg.current = !1;
                  })(),
                (this.shouldReduceMotion = eg.current)),
          (this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1),
          this.parent?.addChild(this),
          this.update(this.props, this.presenceContext),
          (this.hasBeenMounted = !0));
      }
      unmount() {
        for (let t in (this.projection && this.projection.unmount(),
        tD(this.notifyUpdate),
        tD(this.render),
        this.valueSubscriptions.forEach((t) => t()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent?.removeChild(this),
        this.events))
          this.events[t].clear();
        for (let t in this.features) {
          let e = this.features[t];
          e && (e.unmount(), (e.isMounted = !1));
        }
        this.current = null;
      }
      addChild(t) {
        (this.children.add(t), this.enteringChildren ?? (this.enteringChildren = new Set()), this.enteringChildren.add(t));
      }
      removeChild(t) {
        (this.children.delete(t), this.enteringChildren && this.enteringChildren.delete(t));
      }
      bindToMotionValue(t, e) {
        let i;
        if (
          (this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)(),
          e.accelerate && es.has(t) && this.current instanceof HTMLElement)
        ) {
          let { factory: i, keyframes: s, times: n, ease: r, duration: o } = e.accelerate,
            a = new ei({ element: this.current, name: t, keyframes: s, times: n, ease: r, duration: tW(o) }),
            l = i(a);
          this.valueSubscriptions.set(t, () => {
            (l(), a.cancel());
          });
          return;
        }
        let n = s.has(t);
        n && this.onBindTransform && this.onBindTransform();
        let r = e.on("change", (e) => {
          ((this.latestValues[t] = e),
            this.props.onUpdate && tE.preRender(this.notifyUpdate),
            n && this.projection && (this.projection.isTransformDirty = !0),
            this.scheduleRender());
        });
        ("u" > typeof window && window.MotionCheckAppearSync && (i = window.MotionCheckAppearSync(this, t, e)),
          this.valueSubscriptions.set(t, () => {
            (r(), i && i());
          }));
      }
      sortNodePosition(t) {
        return this.current && t.current && this.sortInstanceNodePosition && this.type === t.type
          ? this.sortInstanceNodePosition(this.current, t.current)
          : 0;
      }
      updateFeatures() {
        let t = "animation";
        for (t in eb) {
          let e = eb[t];
          if (!e) continue;
          let { isEnabled: i, Feature: s } = e;
          if ((!this.features[t] && s && i(this.props) && (this.features[t] = new s(this)), this.features[t])) {
            let e = this.features[t];
            e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
          }
        }
      }
      triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props);
      }
      measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : K();
      }
      getStaticValue(t) {
        return this.latestValues[t];
      }
      setStaticValue(t, e) {
        this.latestValues[t] = e;
      }
      update(t, e) {
        ((t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
          (this.prevProps = this.props),
          (this.props = t),
          (this.prevPresenceContext = this.presenceContext),
          (this.presenceContext = e));
        for (let e = 0; e < eT.length; e++) {
          let i = eT[e];
          this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
          let s = t["on" + i];
          s && (this.propEventSubscriptions[i] = this.on(i, s));
        }
        ((this.prevMotionValues = (function (t, e, i) {
          for (let s in e) {
            let n = e[s],
              r = i[s];
            if (Y(n)) t.addValue(s, n);
            else if (Y(r)) t.addValue(s, eh(n, { owner: t }));
            else if (r !== n)
              if (t.hasValue(s)) {
                let e = t.getValue(s);
                !0 === e.liveStyle ? e.jump(n) : e.hasAnimated || e.set(n);
              } else {
                let e = t.getStaticValue(s);
                t.addValue(s, eh(void 0 !== e ? e : n, { owner: t }));
              }
          }
          for (let s in i) void 0 === e[s] && t.removeValue(s);
          return e;
        })(this, this.scrapeMotionValuesFromProps(t, this.prevProps || {}, this), this.prevMotionValues)),
          this.handleChildMotionValue && this.handleChildMotionValue());
      }
      getProps() {
        return this.props;
      }
      getVariant(t) {
        return this.props.variants ? this.props.variants[t] : void 0;
      }
      getDefaultTransition() {
        return this.props.transition;
      }
      getTransformPagePoint() {
        return this.props.transformPagePoint;
      }
      addValue(t, e) {
        let i = this.values.get(t);
        if (e !== i) {
          (i && this.removeValue(t), this.bindToMotionValue(t, e), this.values.set(t, e));
          let s = e.get();
          void 0 !== s && (this.latestValues[t] = s);
        }
      }
      removeValue(t) {
        this.values.delete(t);
        let e = this.valueSubscriptions.get(t);
        (e && (e(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState));
      }
      hasValue(t) {
        return this.values.has(t);
      }
      getValue(t, e) {
        if (this.props.values && this.props.values[t]) return this.props.values[t];
        let i = this.values.get(t);
        return (void 0 === i && void 0 !== e && ((i = eh(e ?? this.getDefaultValue?.(t), { owner: this })), this.addValue(t, i)), i);
      }
      readValue(t, e) {
        let i =
          void 0 === this.latestValues[t] && this.current
            ? (this.getBaseTargetFromProps(this.props, t) ?? this.readValueFromInstance(this.current, t, this.options))
            : this.latestValues[t];
        if (null != i) {
          let s, n;
          ("string" == typeof i && ((s = i), /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(s) || ((n = i), /^0[^.\s]+$/u.test(n)))
            ? (i = parseFloat(i))
            : "number" != typeof i && !L.test(i) && L.test(e) && (i = to(t, e)),
            this.setBaseTarget(t, Y(i) ? i.get() : i));
        }
        return Y(i) ? i.get() : i;
      }
      setBaseTarget(t, e) {
        this.baseTarget[t] = e;
      }
      on(t, e) {
        return (this.events[t] || (this.events[t] = new tH()), this.events[t].add(e));
      }
      notify(t, ...e) {
        this.events[t] && this.events[t].notify(...e);
      }
      scheduleRenderMicrotask() {
        en.render(this.render);
      }
    }
    t.s(
      [
        "VisualElement",
        0,
        ew,
        "getFeatureDefinitions",
        0,
        function () {
          return eb;
        },
        "setFeatureDefinitions",
        0,
        function (t) {
          eb = t;
        },
      ],
      71188,
    );
    class eS extends ew {
      constructor() {
        (super(...arguments), (this.KeyframeResolver = tU));
      }
      sortInstanceNodePosition(t, e) {
        return 2 & t.compareDocumentPosition(e) ? 1 : -1;
      }
      getBaseTargetFromProps(t, e) {
        let i = t.style;
        return i ? i[e] : void 0;
      }
      removeValueFromRenderState(t, { vars: e, style: i }) {
        (delete e[t], delete i[t]);
      }
      handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(), delete this.childSubscription);
        let { children: t } = this.props;
        Y(t) &&
          (this.childSubscription = t.on("change", (t) => {
            this.current && (this.current.textContent = `${t}`);
          }));
      }
    }
    function eP(t) {
      return t.replace(/([A-Z])/g, (t) => `-${t.toLowerCase()}`);
    }
    t.s(["camelToDash", 0, eP], 46768);
    let eA = (t, e) => (e && "number" == typeof t ? e.transform(t) : t);
    t.s(["getValueAsType", 0, eA], 30717);
    let eV = { x: "translateX", y: "translateY", z: "translateZ", transformPerspective: "perspective" },
      eM = i.length;
    function eC(t, e, n) {
      let { style: r, vars: o, transformOrigin: a } = t,
        l = !1,
        h = !1;
      for (let t in e) {
        let i = e[t];
        if (s.has(t)) {
          l = !0;
          continue;
        }
        if (Q(t)) {
          o[t] = i;
          continue;
        }
        {
          let e = eA(i, W[t]);
          t.startsWith("origin") ? ((h = !0), (a[t] = e)) : (r[t] = e);
        }
      }
      if (
        (!e.transform &&
          (l || n
            ? (r.transform = (function (t, e, s) {
                let n = "",
                  r = !0;
                for (let o = 0; o < eM; o++) {
                  let a = i[o],
                    l = t[a];
                  if (void 0 === l) continue;
                  let h = !0;
                  if ("number" == typeof l) h = l === +!!a.startsWith("scale");
                  else {
                    let t = parseFloat(l);
                    h = a.startsWith("scale") ? 1 === t : 0 === t;
                  }
                  if (!h || s) {
                    let t = eA(l, W[a]);
                    if (!h) {
                      r = !1;
                      let e = eV[a] || a;
                      n += `${e}(${t}) `;
                    }
                    s && (e[a] = t);
                  }
                }
                let o = t.pathRotation;
                return (
                  o && ((r = !1), (n += `rotate(${eA(o, W.pathRotation)}) `)),
                  (n = n.trim()),
                  s ? (n = s(e, r ? "" : n)) : r && (n = "none"),
                  n
                );
              })(e, t.transform, n))
            : r.transform && (r.transform = "none")),
        h)
      ) {
        let { originX: t = "50%", originY: e = "50%", originZ: i = 0 } = a;
        r.transformOrigin = `${t} ${e} ${i}`;
      }
    }
    t.s(["buildHTMLStyles", 0, eC], 25346);
    let eE = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
      eD = { offset: "strokeDashoffset", array: "strokeDasharray" },
      ek = ["transform", "opacity", "offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
    function eR(t, { attrX: e, attrY: i, attrScale: s, pathLength: n, pathSpacing: r = 1, pathOffset: o = 0, ...a }, l, h, u) {
      if ((eC(t, a, h), l)) {
        t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
        return;
      }
      ((t.attrs = t.style), (t.style = {}));
      let { attrs: c, style: d } = t;
      for (let t of ek) void 0 !== c[t] && ((d[t] = c[t]), delete c[t]);
      ((d.transform || c.transformOrigin) && ((d.transformOrigin = c.transformOrigin ?? "50% 50%"), delete c.transformOrigin),
        d.transform && ((d.transformBox = u?.transformBox ?? "fill-box"), delete c.transformBox),
        void 0 !== e && (c.x = e),
        void 0 !== i && (c.y = i),
        void 0 !== s && (c.scale = s),
        void 0 !== n &&
          (function (t, e, i = 1, s = 0, n = !0) {
            t.pathLength = 1;
            let r = n ? eE : eD;
            ((t[r.offset] = `${-s}`), (t[r.array] = `${e} ${i}`));
          })(c, n, r, o, !1));
    }
    t.s(["buildSVGAttrs", 0, eR, "cssStyleProperties", 0, ek], 25052);
    let eL = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]),
      eB = (t) => "string" == typeof t && "svg" === t.toLowerCase();
    function eF(t, { style: e, vars: i }, s, n) {
      let r,
        o = t.style;
      for (r in e) o[r] = e[r];
      for (r in (n?.applyProjectionStyles(o, s), i)) o.setProperty(r, i[r]);
    }
    t.s(["isSVGTag", 0, eB], 20007);
    let ej = {};
    function eI(t, { layout: e, layoutId: i }) {
      return s.has(t) || t.startsWith("origin") || ((e || void 0 !== i) && (!!ej[t] || "opacity" === t));
    }
    function eO(t, e, i) {
      let s = t.style,
        n = e?.style,
        r = {};
      if (!s) return r;
      for (let e in s) (Y(s[e]) || (n && Y(n[e])) || eI(e, t) || i?.getValue(e)?.liveStyle !== void 0) && (r[e] = s[e]);
      return r;
    }
    function eN(t, e, s) {
      let n = eO(t, e, s);
      for (let s in t) (Y(t[s]) || Y(e[s])) && (n[-1 !== i.indexOf(s) ? "attr" + s.charAt(0).toUpperCase() + s.substring(1) : s] = t[s]);
      return n;
    }
    (t.s(["scaleCorrectors", 0, ej], 91770),
      t.s(["isForcedMotionValue", 0, eI], 30195),
      t.s(["scrapeMotionValuesFromProps", 0, eO], 68782),
      t.s(["scrapeMotionValuesFromProps", 0, eN], 49276));
    class eU extends eS {
      constructor() {
        (super(...arguments), (this.type = "svg"), (this.isSVGTag = !1), (this.measureInstanceViewportBox = K));
      }
      getBaseTargetFromProps(t, e) {
        return s.has(e) ? (super.getBaseTargetFromProps(t, e) ?? tp(e)) : t[e];
      }
      getDefaultValue(t) {
        return s.has(t) ? (this.latestValues[t] ?? tp(t)) : void 0;
      }
      readValueFromInstance(t, e) {
        if (s.has(e)) {
          let t = z(e);
          return (t && t.default) || 0;
        }
        if (ek.includes(e)) {
          let i = getComputedStyle(t)[e];
          if ("string" == typeof i && i) return i.trim();
        }
        return ((e = eL.has(e) ? e : eP(e)), t.getAttribute(e));
      }
      scrapeMotionValuesFromProps(t, e, i) {
        return eN(t, e, i);
      }
      build(t, e, i) {
        eR(t, e, this.isSVGTag, i.transformTemplate, i.style);
      }
      renderInstance(t, e, i, s) {
        for (let i in (eF(t, e, void 0, s), e.attrs)) t.setAttribute(eL.has(i) ? i : eP(i), e.attrs[i]);
      }
      mount(t) {
        ((this.isSVGTag = eB(t.tagName)), super.mount(t));
      }
    }
    function eW({ top: t, left: e, right: i, bottom: s }) {
      return { x: { min: e, max: i }, y: { min: t, max: s } };
    }
    function e$(t, e) {
      if (!e) return t;
      let i = e({ x: t.left, y: t.top }),
        s = e({ x: t.right, y: t.bottom });
      return { top: i.y, left: i.x, bottom: s.y, right: s.x };
    }
    t.s(
      [
        "convertBoundingBoxToBox",
        0,
        eW,
        "convertBoxToBoundingBox",
        0,
        function ({ x: t, y: e }) {
          return { top: e.min, right: t.max, bottom: e.max, left: t.min };
        },
        "transformBoxPoints",
        0,
        e$,
      ],
      60541,
    );
    let ez = (t, e, i) => t + (e - t) * i;
    function eG(t) {
      return void 0 === t || 1 === t;
    }
    function eH({ scale: t, scaleX: e, scaleY: i }) {
      return !eG(t) || !eG(e) || !eG(i);
    }
    function eK(t) {
      return eH(t) || eY(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY;
    }
    function eY(t) {
      var e, i;
      return ((e = t.x) && "0%" !== e) || ((i = t.y) && "0%" !== i);
    }
    function eX(t, e, i) {
      return i + e * (t - i);
    }
    function e_(t, e, i, s, n) {
      return (void 0 !== n && (t = eX(t, n, s)), eX(t, i, s) + e);
    }
    function eq(t, e = 0, i = 1, s, n) {
      ((t.min = e_(t.min, e, i, s, n)), (t.max = e_(t.max, e, i, s, n)));
    }
    function eZ(t, { x: e, y: i }) {
      (eq(t.x, e.translate, e.scale, e.originPoint), eq(t.y, i.translate, i.scale, i.originPoint));
    }
    function eJ(t, e) {
      ((t.min += e), (t.max += e));
    }
    function eQ(t, e, i, s, n = 0.5) {
      let r = ez(t.min, t.max, n);
      eq(t, e, i, r, s);
    }
    function e0(t, e) {
      return "string" == typeof t ? (parseFloat(t) / 100) * (e.max - e.min) : t;
    }
    function e1(t, e, i) {
      let s = i ?? t;
      (eQ(t.x, e0(e.x, s.x), e.scaleX, e.scale, e.originX), eQ(t.y, e0(e.y, s.y), e.scaleY, e.scale, e.originY));
    }
    function e5(t, e) {
      return eW(e$(t.getBoundingClientRect(), e));
    }
    (t.s(["mixNumber", 0, ez], 66651),
      t.s(["has2DTranslate", 0, eY, "hasScale", 0, eH, "hasTransform", 0, eK], 35403),
      t.s(
        [
          "applyBoxDelta",
          0,
          eZ,
          "applyTreeDeltas",
          0,
          function (t, e, i, s = !1) {
            let n,
              r,
              o = i.length;
            if (o) {
              e.x = e.y = 1;
              for (let a = 0; a < o; a++) {
                r = (n = i[a]).projectionDelta;
                let { visualElement: o } = n.options;
                (!o || !o.props.style || "contents" !== o.props.style.display) &&
                  (s && n.options.layoutScroll && n.scroll && n !== n.root && (eJ(t.x, -n.scroll.offset.x), eJ(t.y, -n.scroll.offset.y)),
                  r && ((e.x *= r.x.scale), (e.y *= r.y.scale), eZ(t, r)),
                  s && eK(n.latestValues) && e1(t, n.latestValues, n.layout?.layoutBox));
              }
              (e.x < 1.0000000000001 && e.x > 0.999999999999 && (e.x = 1), e.y < 1.0000000000001 && e.y > 0.999999999999 && (e.y = 1));
            }
          },
          "scalePoint",
          0,
          eX,
          "transformBox",
          0,
          e1,
          "translateAxis",
          0,
          eJ,
        ],
        81057,
      ),
      t.s(
        [
          "measurePageBox",
          0,
          function (t, e, i) {
            let s = e5(t, i),
              { scroll: n } = e;
            return (n && (eJ(s.x, n.offset.x), eJ(s.y, n.offset.y)), s);
          },
          "measureViewportBox",
          0,
          e5,
        ],
        4955,
      ));
    class e2 extends eS {
      constructor() {
        (super(...arguments), (this.type = "html"), (this.renderInstance = eF));
      }
      mount(t) {
        (Z(!!t.style, "motion.create() components must forward their ref to a HTML or SVG element", "custom-component-ref"),
          super.mount(t));
      }
      readValueFromInstance(t, e) {
        if (s.has(e)) return this.projection?.isProjecting ? tp(e) : ty(t, e);
        {
          let i = window.getComputedStyle(t),
            s = (Q(e) ? i.getPropertyValue(e) : i[e]) || 0;
          return "string" == typeof s ? s.trim() : s;
        }
      }
      measureInstanceViewportBox(t, { transformPagePoint: e }) {
        return e5(t, e);
      }
      build(t, e, i) {
        eC(t, e, i.transformTemplate);
      }
      scrapeMotionValuesFromProps(t, e, i) {
        return eO(t, e, i);
      }
    }
    var e9 = t.i(91788);
    let e3 = [
      "animate",
      "circle",
      "defs",
      "desc",
      "ellipse",
      "g",
      "image",
      "line",
      "filter",
      "marker",
      "mask",
      "metadata",
      "path",
      "pattern",
      "polygon",
      "polyline",
      "rect",
      "stop",
      "switch",
      "symbol",
      "svg",
      "text",
      "tspan",
      "use",
      "view",
    ];
    function e4(t) {
      if ("string" != typeof t || t.includes("-"));
      else if (e3.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
      return !1;
    }
    (t.s(["isSVGComponent", 0, e4], 4606),
      t.s(
        ["createDomVisualElement", 0, (t, e) => ((e.isSVG ?? e4(t)) ? new eU(e) : new e2(e, { allowProjection: t !== e9.Fragment }))],
        14503,
      ));
    let e6 = (0, e9.createContext)({});
    t.s(["LayoutGroupContext", 0, e6], 11535);
    let e8 = (0, e9.createContext)({ strict: !1 });
    t.s(["LazyContext", 0, e8], 64854);
  },
  64357,
  86649,
  28235,
  89124,
  38777,
  46530,
  32866,
  801,
  62946,
  (t) => {
    "use strict";
    var e = t.i(91788);
    let i = (0, e.createContext)({});
    t.s(["MotionContext", 0, i], 64357);
    var s = t.i(12159),
      n = t.i(19708);
    function r(t) {
      return Array.isArray(t) ? t.join(" ") : t;
    }
    t.s(
      [
        "useCreateMotionContext",
        0,
        function (t) {
          let { initial: o, animate: a } = (function (t, e) {
            if ((0, s.isControllingVariants)(t)) {
              let { initial: e, animate: i } = t;
              return { initial: !1 === e || (0, n.isVariantLabel)(e) ? e : void 0, animate: (0, n.isVariantLabel)(i) ? i : void 0 };
            }
            return !1 !== t.inherit ? e : {};
          })(t, (0, e.useContext)(i));
          return (0, e.useMemo)(() => ({ initial: o, animate: a }), [r(o), r(a)]);
        },
      ],
      86649,
    );
    var o = t.i(65907),
      a = t.i(30195),
      l = t.i(25346);
    let h = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
    function u(t, e, i) {
      for (let s in e) (0, o.isMotionValue)(e[s]) || (0, a.isForcedMotionValue)(s, i) || (t[s] = e[s]);
    }
    t.s(["createHtmlRenderState", 0, h], 28235);
    var c = t.i(25052),
      d = t.i(20007);
    let m = () => ({ ...h(), attrs: {} });
    t.s(["createSvgRenderState", 0, m], 89124);
    let p = new Set([
      "animate",
      "exit",
      "variants",
      "initial",
      "style",
      "values",
      "transition",
      "transformTemplate",
      "custom",
      "inherit",
      "onBeforeLayoutMeasure",
      "onAnimationStart",
      "onAnimationComplete",
      "onUpdate",
      "onDragStart",
      "onDrag",
      "onDragEnd",
      "onMeasureDragConstraints",
      "onDirectionLock",
      "onDragTransitionEnd",
      "_dragX",
      "_dragY",
      "onHoverStart",
      "onHoverEnd",
      "onViewportEnter",
      "onViewportLeave",
      "globalTapTarget",
      "propagate",
      "ignoreStrict",
      "viewport",
    ]);
    function f(t) {
      return (
        t.startsWith("while") ||
        (t.startsWith("drag") && "draggable" !== t) ||
        t.startsWith("layout") ||
        t.startsWith("onTap") ||
        t.startsWith("onPan") ||
        t.startsWith("onLayout") ||
        p.has(t)
      );
    }
    var y = t.i(4606);
    t.s(
      [
        "useRender",
        0,
        function (t, i, s, { latestValues: n }, r, a = !1, p, g) {
          let v = (
              (p ?? (0, y.isSVGComponent)(t))
                ? function (t, i, s, n) {
                    let r = (0, e.useMemo)(() => {
                      let e = m();
                      return (
                        (0, c.buildSVGAttrs)(e, i, (0, d.isSVGTag)(n), t.transformTemplate, t.style),
                        { ...e.attrs, style: { ...e.style } }
                      );
                    }, [i]);
                    if (t.style) {
                      let e = {};
                      (u(e, t.style, t), (r.style = { ...e, ...r.style }));
                    }
                    return r;
                  }
                : function (t, i) {
                    let s,
                      n,
                      r = {},
                      o =
                        ((s = t.style || {}),
                        u((n = {}), s, t),
                        Object.assign(
                          n,
                          (function ({ transformTemplate: t }, i) {
                            return (0, e.useMemo)(() => {
                              let e = h();
                              return ((0, l.buildHTMLStyles)(e, i, t), Object.assign({}, e.vars, e.style));
                            }, [i]);
                          })(t, i),
                        ),
                        n);
                    return (
                      t.drag &&
                        !1 !== t.dragListener &&
                        ((r.draggable = !1),
                        (o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none"),
                        (o.touchAction = !0 === t.drag ? "none" : `pan-${"x" === t.drag ? "y" : "x"}`)),
                      void 0 === t.tabIndex && (t.onTap || t.onTapStart || t.whileTap) && (r.tabIndex = 0),
                      (r.style = o),
                      r
                    );
                  }
            )(i, n, r, t),
            x = (function (t, e, i, s) {
              let n = {};
              for (let r in t)
                ("values" !== r || "object" != typeof t.values) &&
                  !(0, o.isMotionValue)(t[r]) &&
                  ((r.startsWith("on") ? !f(r) : (s?.(r) ?? !f(r))) ||
                    (!0 === i && f(r)) ||
                    (!e && !f(r)) ||
                    (t.draggable && r.startsWith("onDrag"))) &&
                  (n[r] = t[r]);
              return n;
            })(i, "string" == typeof t, a, g),
            T = t !== e.Fragment ? { ...x, ...v, ref: s } : {},
            { children: b } = i,
            w = (0, e.useMemo)(() => ((0, o.isMotionValue)(b) ? b.get() : b), [b]);
          return (0, e.createElement)(t, { ...T, children: w });
        },
      ],
      38777,
    );
    var g = t.i(68782);
    (t.s(["scrapeHTMLMotionValuesFromProps", () => g.scrapeMotionValuesFromProps], 46530),
      t.s(
        [
          "resolveMotionValue",
          0,
          function (t) {
            return (0, o.isMotionValue)(t) ? t.get() : t;
          },
        ],
        32866,
      ),
      t.s(
        [
          "resolveVariantFromProps",
          0,
          function (t, e, i, s) {
            let n = (e) => {
              let n;
              return "function" == typeof e
                ? e(
                    void 0 !== i ? i : t.custom,
                    ...((n = [{}, {}]),
                    s?.values.forEach((t, e) => {
                      ((n[0][e] = t.get()), (n[1][e] = t.getVelocity()));
                    }),
                    n),
                  )
                : e;
            };
            return ("string" == typeof (e = n(e)) && (e = t.variants && t.variants[e]), n(e));
          },
        ],
        801,
      ));
    let v = (0, e.createContext)(null);
    t.s(["PresenceContext", 0, v], 62946);
  },
  95555,
  32914,
  22469,
  43392,
  39016,
  56888,
  47652,
  (t) => {
    "use strict";
    t.i(50461);
    var e = t.i(91398),
      i = t.i(91788),
      s = t.i(11535),
      n = t.i(64854),
      r = t.i(12600),
      o = t.i(64357),
      a = t.i(86649),
      l = t.i(38777),
      h = t.i(4606),
      u = t.i(46530),
      c = t.i(32866),
      d = t.i(12159),
      m = t.i(90516),
      p = t.i(801),
      f = t.i(62946),
      y = t.i(57126);
    let g = (t) => (e, s) => {
      let n = (0, i.useContext)(o.MotionContext),
        r = (0, i.useContext)(f.PresenceContext),
        a = () =>
          (function ({ scrapeMotionValuesFromProps: t, createRenderState: e }, i, s, n) {
            return {
              latestValues: (function (t, e, i, s) {
                let n = {},
                  r = s(t, {});
                for (let t in r) n[t] = (0, c.resolveMotionValue)(r[t]);
                let { initial: o, animate: a } = t,
                  l = (0, d.isControllingVariants)(t),
                  h = (0, d.isVariantNode)(t);
                e && h && !l && !1 !== t.inherit && (void 0 === o && (o = e.initial), void 0 === a && (a = e.animate));
                let u = !!i && !1 === i.initial,
                  f = (u = u || !1 === o) ? a : o;
                if (f && "boolean" != typeof f && !(0, m.isAnimationControls)(f)) {
                  let e = Array.isArray(f) ? f : [f];
                  for (let i = 0; i < e.length; i++) {
                    let s = (0, p.resolveVariantFromProps)(t, e[i]);
                    if (s) {
                      let { transitionEnd: t, transition: e, ...i } = s;
                      for (let t in i) {
                        let e = i[t];
                        if (Array.isArray(e)) {
                          let t = u ? e.length - 1 : 0;
                          e = e[t];
                        }
                        null !== e && (n[t] = e);
                      }
                      for (let e in t) n[e] = t[e];
                    }
                  }
                }
                return n;
              })(i, s, n, t),
              renderState: e(),
            };
          })(t, e, n, r);
      return s ? a() : (0, y.useConstant)(a);
    };
    var v = t.i(28235);
    let x = g({ scrapeMotionValuesFromProps: u.scrapeHTMLMotionValuesFromProps, createRenderState: v.createHtmlRenderState });
    var T = t.i(49276),
      T = T,
      b = t.i(89124);
    let w = g({ scrapeMotionValuesFromProps: T.scrapeMotionValuesFromProps, createRenderState: b.createSvgRenderState });
    var S = t.i(71188);
    let P = {
        animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
        exit: ["exit"],
        drag: ["drag", "dragControls"],
        focus: ["whileFocus"],
        hover: ["whileHover", "onHoverStart", "onHoverEnd"],
        tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
        pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
        inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
        layout: ["layout", "layoutId"],
      },
      A = !1;
    function V() {
      return (
        !(function () {
          if (A) return;
          let t = {};
          for (let e in P) t[e] = { isEnabled: (t) => P[e].some((e) => !!t[e]) };
          ((0, S.setFeatureDefinitions)(t), (A = !0));
        })(),
        (0, S.getFeatureDefinitions)()
      );
    }
    let M = Symbol.for("motionComponentSymbol"),
      C = "data-" + (0, t.i(46768).camelToDash)("framerAppearId");
    t.s(["optimizedAppearDataAttribute", 0, C], 32914);
    let E = (0, i.createContext)({});
    function D(t) {
      return t && "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current");
    }
    (t.s(["SwitchLayoutGroupContext", 0, E], 22469), t.s(["isRefObject", 0, D], 43392));
    let k = "u" > typeof window ? i.useLayoutEffect : i.useEffect;
    function R(t, { forwardMotionProps: u = !1, type: c } = {}, d, m) {
      d &&
        (function (t) {
          let e = V();
          for (let i in t) e[i] = { ...e[i], ...t[i] };
          (0, S.setFeatureDefinitions)(e);
        })(d);
      let p = c ? "svg" === c : (0, h.isSVGComponent)(t),
        y = p ? w : x;
      function g(h, c) {
        var d;
        let g,
          v,
          x,
          T = {
            ...(0, i.useContext)(r.MotionConfigContext),
            ...h,
            layoutId: (function ({ layoutId: t }) {
              let e = (0, i.useContext)(s.LayoutGroupContext).id;
              return e && void 0 !== t ? e + "-" + t : t;
            })(h),
          },
          { isStatic: b, isValidProp: w } = T,
          S = (0, a.useCreateMotionContext)(h),
          P = y(h, b);
        if (!b && "u" > typeof window) {
          (0, i.useContext)(n.LazyContext).strict;
          let e = (function (t) {
            let { drag: e, layout: i } = V();
            if (!e && !i) return {};
            let s = { ...e, ...i };
            return { MeasureLayout: e?.isEnabled(t) || i?.isEnabled(t) ? s.MeasureLayout : void 0, ProjectionNode: s.ProjectionNode };
          })(T);
          ((g = e.MeasureLayout),
            (S.visualElement = (function (t, e, s, a, l, h) {
              let { visualElement: u } = (0, i.useContext)(o.MotionContext),
                c = (0, i.useContext)(n.LazyContext),
                d = (0, i.useContext)(f.PresenceContext),
                m = (0, i.useContext)(r.MotionConfigContext),
                p = m.reducedMotion,
                y = m.skipAnimations,
                g = (0, i.useRef)(null),
                v = (0, i.useRef)(!1);
              ((a = a || c.renderer),
                !g.current &&
                  a &&
                  ((g.current = a(t, {
                    visualState: e,
                    parent: u,
                    props: s,
                    presenceContext: d,
                    blockInitialAnimation: !!d && !1 === d.initial,
                    reducedMotionConfig: p,
                    skipAnimations: y,
                    isSVG: h,
                  })),
                  v.current && g.current && (g.current.manuallyAnimateOnMount = !0)));
              let x = g.current,
                T = (0, i.useContext)(E);
              x &&
                !x.projection &&
                l &&
                ("html" === x.type || "svg" === x.type) &&
                (function (t, e, i, s) {
                  let {
                    layoutId: n,
                    layout: r,
                    drag: o,
                    dragConstraints: a,
                    layoutScroll: l,
                    layoutRoot: h,
                    layoutAnchor: u,
                    layoutCrossfade: c,
                  } = e;
                  ((t.projection = new i(
                    t.latestValues,
                    e["data-framer-portal-id"]
                      ? void 0
                      : (function t(e) {
                          if (e) return !1 !== e.options.allowProjection ? e.projection : t(e.parent);
                        })(t.parent),
                  )),
                    t.projection.setOptions({
                      layoutId: n,
                      layout: r,
                      alwaysMeasureLayout: !!o || (a && D(a)),
                      visualElement: t,
                      animationType: "string" == typeof r ? r : "both",
                      initialPromotionConfig: s,
                      crossfade: c,
                      layoutScroll: l,
                      layoutRoot: h,
                      layoutAnchor: u,
                    }));
                })(g.current, s, l, T);
              let b = (0, i.useRef)(!1);
              (0, i.useInsertionEffect)(() => {
                x && b.current && x.update(s, d);
              });
              let w = s[C],
                S = (0, i.useRef)(
                  !!w && "u" > typeof window && !window.MotionHandoffIsComplete?.(w) && window.MotionHasOptimisedAnimation?.(w),
                );
              return (
                k(() => {
                  v.current && x && (x.animationState?.animateChanges(), (x.enteringChildren = void 0));
                }, []),
                k(() => {
                  ((v.current = !0),
                    x &&
                      ((b.current = !0),
                      (window.MotionIsMounted = !0),
                      x.updateFeatures(),
                      x.scheduleRenderMicrotask(),
                      S.current && x.animationState && x.animationState.animateChanges()));
                }),
                (0, i.useEffect)(() => {
                  x &&
                    (!S.current && x.animationState && x.animationState.animateChanges(),
                    S.current &&
                      (queueMicrotask(() => {
                        window.MotionHandoffMarkAsComplete?.(w);
                      }),
                      (S.current = !1)),
                    (x.enteringChildren = void 0));
                }),
                x
              );
            })(t, P, T, m, e.ProjectionNode, p)));
        }
        return (0, e.jsxs)(o.MotionContext.Provider, {
          value: S,
          children: [
            g && S.visualElement ? (0, e.jsx)(g, { visualElement: S.visualElement, ...T }) : null,
            (0, l.useRender)(
              t,
              h,
              ((d = S.visualElement),
              (v = (0, i.useRef)(c)),
              (0, i.useInsertionEffect)(() => {
                v.current = c;
              }),
              (x = (0, i.useRef)(null)),
              (0, i.useCallback)(
                (t) => {
                  (t && P.onMount?.(t), d && (t ? d.mount(t) : d.unmount()));
                  let e = v.current;
                  if ("function" == typeof e)
                    if (t) {
                      let i = e(t);
                      "function" == typeof i && (x.current = i);
                    } else x.current ? (x.current(), (x.current = null)) : e(t);
                  else e && (e.current = t);
                },
                [d],
              )),
              P,
              b,
              u,
              p,
              w,
            ),
          ],
        });
      }
      g.displayName = `motion.${"string" == typeof t ? t : `create(${t.displayName ?? t.name ?? ""})`}`;
      let v = (0, i.forwardRef)(g);
      return ((v[M] = t), v);
    }
    (t.s(["useIsomorphicLayoutEffect", 0, k], 39016),
      t.s(
        [
          "createMotionProxy",
          0,
          function (t, e) {
            if ("u" < typeof Proxy) return R;
            let i = new Map(),
              s = (i, s) => R(i, s, t, e);
            return new Proxy((t, e) => s(t, e), {
              get: (n, r) => ("create" === r ? s : (i.has(r) || i.set(r, R(r, void 0, t, e)), i.get(r))),
            });
          },
        ],
        95555,
      ),
      t.s(
        [
          "Feature",
          0,
          class {
            constructor(t) {
              ((this.isMounted = !1), (this.node = t));
            }
            update() {}
          },
        ],
        56888,
      ),
      t.s(
        [
          "getTypeCustom",
          0,
          (t, e) => ("exit" === e ? t.presenceContext?.custom : void 0),
          "resolveVariant",
          0,
          function (t, e, i) {
            return (0, p.resolveVariantFromProps)(t.getProps(), e, i, t);
          },
        ],
        47652,
      ));
  },
  57712,
  37657,
  151,
  47836,
  35846,
  61064,
  54833,
  73,
  95129,
  88019,
  65919,
  91905,
  48544,
  68098,
  20972,
  98715,
  22098,
  86398,
  10389,
  52581,
  51723,
  (t) => {
    "use strict";
    let e, i;
    var s = t.i(14503),
      n = t.i(95555),
      r = t.i(56888),
      o = t.i(47652),
      a = t.i(87314);
    function l(t, e) {
      let i = t?.[e] ?? t?.default ?? t;
      return i !== t ? (0, a.resolveTransition)(i, t) : i;
    }
    var h = t.i(51233),
      u = t.i(83026),
      c = t.i(50180),
      d = t.i(65907);
    function m(t, e) {
      let i = t.getValue("willChange");
      if ((0, d.isMotionValue)(i) && i.add) return i.add(e);
      if (!i && c.MotionGlobalConfig.WillChange) {
        let i = new c.MotionGlobalConfig.WillChange("auto");
        (t.addValue("willChange", i), i.add(e));
      }
    }
    var p = t.i(32914);
    function f(t) {
      return t.props[p.optimizedAppearDataAttribute];
    }
    var y = t.i(27524),
      g = t.i(86791);
    t.i(50461);
    let v = (...t) => t.reduce((t, e) => (i) => e(t(i)));
    var x = t.i(71955),
      T = t.i(77095),
      b = t.i(88905),
      w = t.i(19744),
      S = t.i(13953),
      P = t.i(3595),
      A = t.i(54511),
      V = t.i(98125);
    function M(t, e, i) {
      return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
        ? t + (e - t) * 6 * i
        : i < 0.5
          ? e
          : i < 2 / 3
            ? t + (e - t) * (2 / 3 - i) * 6
            : t;
    }
    var C = t.i(93959);
    function E(t, e) {
      return (i) => (i > 0 ? e : t);
    }
    var D = t.i(66651);
    let k = (t, e, i) => {
        let s = t * t,
          n = i * (e * e - s) + s;
        return n < 0 ? 0 : Math.sqrt(n);
      },
      R = [A.hex, C.rgba, V.hsla];
    function L(t) {
      let e = R.find((e) => e.test(t));
      if (!e)
        return (
          (0, b.warning)(!1, `'${t}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"),
          !1
        );
      let i = e.parse(t);
      return (
        e === V.hsla &&
          (i = (function ({ hue: t, saturation: e, lightness: i, alpha: s }) {
            ((t /= 360), (i /= 100));
            let n = 0,
              r = 0,
              o = 0;
            if ((e /= 100)) {
              let s = i < 0.5 ? i * (1 + e) : i + e - i * e,
                a = 2 * i - s;
              ((n = M(a, s, t + 1 / 3)), (r = M(a, s, t)), (o = M(a, s, t - 1 / 3)));
            } else n = r = o = i;
            return { red: Math.round(255 * n), green: Math.round(255 * r), blue: Math.round(255 * o), alpha: s };
          })(i)),
        i
      );
    }
    let B = (t, e) => {
        let i = L(t),
          s = L(e);
        if (!i || !s) return E(t, e);
        let n = { ...i };
        return (t) => (
          (n.red = k(i.red, s.red, t)),
          (n.green = k(i.green, s.green, t)),
          (n.blue = k(i.blue, s.blue, t)),
          (n.alpha = (0, D.mixNumber)(i.alpha, s.alpha, t)),
          C.rgba.transform(n)
        );
      },
      F = new Set(["none", "hidden"]);
    function j(t, e) {
      return (i) => (0, D.mixNumber)(t, e, i);
    }
    function I(t) {
      return "number" == typeof t
        ? j
        : "string" == typeof t
          ? (0, w.isCSSVariableToken)(t)
            ? E
            : S.color.test(t)
              ? B
              : U
          : Array.isArray(t)
            ? O
            : "object" == typeof t
              ? S.color.test(t)
                ? B
                : N
              : E;
    }
    function O(t, e) {
      let i = [...t],
        s = i.length,
        n = t.map((t, i) => I(t)(t, e[i]));
      return (t) => {
        for (let e = 0; e < s; e++) i[e] = n[e](t);
        return i;
      };
    }
    function N(t, e) {
      let i = { ...t, ...e },
        s = {};
      for (let n in i) void 0 !== t[n] && void 0 !== e[n] && (s[n] = I(t[n])(t[n], e[n]));
      return (t) => {
        for (let e in s) i[e] = s[e](t);
        return i;
      };
    }
    let U = (t, e) => {
        let i = P.complex.createTransformer(e),
          s = (0, P.analyseComplexValue)(t),
          n = (0, P.analyseComplexValue)(e);
        if (!(
          s.indexes.var.length === n.indexes.var.length &&
          s.indexes.color.length === n.indexes.color.length &&
          s.indexes.number.length >= n.indexes.number.length
        ))
          return (
            (0, b.warning)(
              !0,
              `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,
              "complex-values-different",
            ),
            E(t, e)
          );
        if ((F.has(t) && !n.values.length) || (F.has(e) && !s.values.length))
          return F.has(t) ? (i) => (i <= 0 ? t : e) : (i) => (i >= 1 ? e : t);
        return v(
          O(
            (function (t, e) {
              let i = [],
                s = { color: 0, var: 0, number: 0 };
              for (let n = 0; n < e.values.length; n++) {
                let r = e.types[n],
                  o = t.indexes[r][s[r]],
                  a = t.values[o] ?? 0;
                ((i[n] = a), s[r]++);
              }
              return i;
            })(s, n),
            n.values,
          ),
          i,
        );
      },
      W = /^(-?(?:\d+(?:\.\d*)?|\.\d+))([a-z%]*)$/iu;
    function $(t, e, i) {
      if ("number" == typeof t && "number" == typeof e && "number" == typeof i) return (0, D.mixNumber)(t, e, i);
      if ("string" == typeof t && "string" == typeof e) {
        let i = (function (t, e) {
          let i = W.exec(t);
          if (!i) return;
          let s = W.exec(e);
          if (!s || i[2] !== s[2]) return;
          let n = i[2],
            r = parseFloat(i[1]),
            o = parseFloat(s[1]);
          return (t) => (0, T.sanitize)((0, D.mixNumber)(r, o, t)) + n;
        })(t, e);
        if (i) return i;
      }
      return I(t)(t, e);
    }
    var z = t.i(61411),
      G = t.i(62448);
    let H = (t) => {
      let e = ({ timestamp: e }) => t(e);
      return {
        start: (t = !0) => G.frame.update(e, t),
        stop: () => (0, G.cancelFrame)(e),
        now: () => (z.frameData.isProcessing ? z.frameData.timestamp : g.time.now()),
      };
    };
    var K = t.i(93345);
    function Y(t, e = 50, i = 2e4, s) {
      let n = 0,
        r = t.next(n);
      for (s?.push(r.value); !r.done && n < i;) ((n += e), (r = t.next(n)), s?.push(r.value));
      return n >= i ? 1 / 0 : n;
    }
    function X(t, e = 100, i) {
      let s = i({ ...t, keyframes: [0, e] }),
        n = Math.min(Y(s), 2e4);
      return { type: "keyframes", ease: (t) => s.next(n * t).value / e, duration: (0, y.millisecondsToSeconds)(n) };
    }
    t.s(["createGeneratorEasing", 0, X], 37657);
    let _ = 0.01,
      q = 2,
      Z = 0.005,
      J = 0.5,
      Q = (t) => (t < 0 ? 1 / Math.max(1 + t, 0.05) : Math.max(1 - t, 0.05));
    function tt(t, e) {
      if (!(t > 1)) return 1;
      let i = Math.sqrt(t * t - 1),
        s = t - i,
        n = t + i,
        r = 2 * i * Math.exp(-e) * (1 + e);
      return (
        ti(
          (t) => n * Math.exp(-s * t) - s * Math.exp(-n * t) - r,
          (t) => Math.exp(-n * t) - Math.exp(-s * t),
          e,
        ) / e
      );
    }
    function te(t, e) {
      return t * Math.sqrt(1 - e * e);
    }
    function ti(t, e, i) {
      let s = i;
      for (let i = 1; i < 12; i++) s -= t(s) / e(s);
      return s;
    }
    let ts = (t, e) => (e ? t >= 0 : t > 0) && t < 1 / 0;
    function tn(t, e) {
      if (ts(t, e)) return t;
    }
    function tr(t = 0.3, e = 0.3) {
      let i,
        s,
        n,
        r = "object" != typeof t ? { visualDuration: t, keyframes: [0, 1], bounce: e } : t,
        o = r.keyframes[0],
        a = r.keyframes[r.keyframes.length - 1],
        l = { done: !1, value: o },
        {
          stiffness: h,
          damping: u,
          mass: c,
          duration: d,
          isResolvedFromDuration: m,
          isTimeDefined: p,
        } = (function (t) {
          let e = tn(t.stiffness),
            i = tn(t.damping, !0),
            s = tn(t.mass),
            n = {
              ...t,
              stiffness: e ?? 100,
              damping: i ?? 10,
              mass: s ?? 1,
              isResolvedFromDuration: !1,
              isTimeDefined: (e ?? i ?? s) === void 0 && (void 0 !== t.duration || void 0 !== t.bounce),
            };
          if (n.isTimeDefined) {
            if (t.visualDuration) {
              let e = Q(t.bounce || 0),
                i = ((2 * Math.PI) / (1.2 * t.visualDuration)) * tt(e, (2 * Math.PI) / 1.2);
              ((n.stiffness = i * i), (n.damping = 2 * e * Math.sqrt(n.stiffness)));
            } else
              (Object.assign(
                n,
                (function ({ duration: t = 800, bounce: e = 0.3 }) {
                  let i, s;
                  (0, b.warning)(
                    t <= (0, y.secondsToMilliseconds)(10),
                    "Spring duration must be 10 seconds or less",
                    "spring-duration-limit",
                  );
                  let n = Q(e);
                  ((t = (0, x.clamp)(0.01, 10, (0, y.millisecondsToSeconds)(t))),
                    n < 1
                      ? ((i = (e) => {
                          let i = e * n,
                            s = i * t;
                          return 0.001 - (i / te(e, n)) * Math.exp(-s);
                        }),
                        (s = (e) => {
                          let s = e * n * t,
                            r = n * n * e * e * t,
                            o = Math.exp(-s),
                            a = te(e * e, n);
                          return (-((-i(e) + 0.001 > 0 ? -1 : 1) * r) * o) / a;
                        }))
                      : ((i = (e) => -0.001 + Math.exp(-e * t) * (e * t + 1)), (s = (e) => -(t * t * e * Math.exp(-e * t)))));
                  let r = ti(i, s, 5 / t),
                    o = r * tt(n, r * t),
                    a = o * o;
                  return { stiffness: a, damping: 2 * n * Math.sqrt(a), duration: (0, y.secondsToMilliseconds)(t) };
                })(n),
              ),
                (n.isResolvedFromDuration = !0));
            (ts(n.stiffness) && ts(n.damping, !0)) || ((n.stiffness = 100), (n.damping = 10));
          }
          return n;
        })({ ...r }),
        f = (t) => (p ? 0 : -(0, y.millisecondsToSeconds)(t)),
        g = u / (2 * Math.sqrt(h * c)),
        v = (0, y.millisecondsToSeconds)(Math.sqrt(h / c)),
        T = g * v,
        w = { target: a, delta: a - o, velocity: f(r.velocity || 0) || 0, restSpeed: 0, restDelta: 0 },
        S = () => {
          let t = 5 > Math.abs(w.delta);
          ((w.restSpeed = r.restSpeed || (t ? _ : q)), (w.restDelta = r.restDelta || (t ? Z : J)));
        };
      if ((S(), g < 1)) {
        let t = te(v, g),
          e = { A: 0, sinC: 0, cosC: 0, t: -1, env: 0, sin: 0, cos: 0 };
        n = () => {
          ((e.A = (w.velocity + T * w.delta) / t), (e.sinC = T * e.A + w.delta * t), (e.cosC = T * w.delta - e.A * t));
        };
        let r = (i) => {
          i !== e.t && ((e.t = i), (e.env = Math.exp(-T * i)), (e.sin = Math.sin(t * i)), (e.cos = Math.cos(t * i)));
        };
        ((i = (t) => (r(t), w.target - e.env * (e.A * e.sin + w.delta * e.cos))),
          (s = (t) => (r(t), e.env * (e.sinC * e.sin + e.cosC * e.cos))));
      } else if (1 === g) {
        i = (t) => w.target - Math.exp(-v * t) * (w.delta + (w.velocity + v * w.delta) * t);
        let t = { C: 0 };
        ((n = () => {
          t.C = w.velocity + v * w.delta;
        }),
          (s = (e) => Math.exp(-v * e) * (v * t.C * e - w.velocity)));
      } else {
        let t = v * Math.sqrt(g * g - 1),
          e = T - t,
          r = T + t,
          o = p ? 1 / 0 : 300 / t,
          a = (t, e) => Math.exp(e > o ? -t * o - T * (e - o) : -t * e),
          l = { S: 0, F: 0 };
        ((n = () => {
          let e = (w.velocity + T * w.delta) / t;
          ((l.S = (w.delta + e) / 2), (l.F = (w.delta - e) / 2));
        }),
          (i = (t) => w.target - l.S * a(e, t) - l.F * a(r, t)),
          (s = (t) => e * l.S * a(e, t) + r * l.F * a(r, t)));
      }
      n();
      let P = (m && d) || null,
        A = {
          calculatedDuration: P,
          retarget: (t, e) => {
            ((w.target = t[t.length - 1]),
              (w.delta = w.target - t[0]),
              (w.velocity = f(e)),
              (r.restSpeed && r.restDelta) || S(),
              (A.calculatedDuration = P),
              (l.done = !1),
              n());
          },
          velocity: (t) => (0, y.secondsToMilliseconds)(s(t)),
          next: (t) => {
            let e = i(t);
            return (
              m
                ? (l.done = t >= d)
                : (l.done = Math.abs((0, y.secondsToMilliseconds)(s(t))) <= w.restSpeed && Math.abs(w.target - e) <= w.restDelta),
              (l.value = l.done ? w.target : e),
              l
            );
          },
          toString: () => {
            let t = Math.min(Y(A), 2e4),
              e = (0, K.generateLinearEasing)((e) => A.next(t * e).value, t, 30);
            return t + "ms " + e;
          },
          toTransition: () => {},
        };
      return A;
    }
    function to({
      keyframes: t,
      velocity: e = 0,
      power: i = 0.8,
      timeConstant: s = 325,
      bounceDamping: n = 10,
      bounceStiffness: r = 500,
      modifyTarget: o,
      min: a,
      max: l,
      restDelta: h = 0.5,
      restSpeed: u,
    }) {
      let c,
        d,
        m = t[0],
        p = { done: !1, value: m },
        f = i * e,
        y = m + f,
        g = void 0 === o ? y : o(y);
      g !== y && (f = g - m);
      let v = (t) => -f * Math.exp(-t / s),
        x = (t) => {
          let e = v(t);
          ((p.done = Math.abs(e) <= h), (p.value = p.done ? g : g + e));
        },
        T = (t) => {
          let e;
          if ((e = p.value) < a || e > l) {
            var i;
            ((c = t),
              (d = tr({
                keyframes: [p.value, ((i = p.value), void 0 === a ? l : void 0 === l || Math.abs(a - i) < Math.abs(l - i) ? a : l)],
                velocity: (-v(t) / s) * 1e3,
                damping: n,
                stiffness: r,
                restDelta: h,
                restSpeed: u,
              })));
          }
        };
      return (
        T(0),
        {
          calculatedDuration: null,
          next: (t) => {
            let e = !1;
            return (d || void 0 !== c || ((e = !0), x(t), T(t)), void 0 !== c && t >= c) ? d.next(t - c) : (e || x(t), p);
          },
        }
      );
    }
    ((tr.applyToOptions = (t) => {
      let e = X(t, 100, tr);
      return ((t.ease = e.ease), (t.duration = (0, y.secondsToMilliseconds)(e.duration)), (t.type = "keyframes"), t);
    }),
      t.s(["spring", 0, tr], 151));
    var ta = t.i(44063);
    let tl = (t, e, i) => (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
    function th(t, e, i, s) {
      return t === e && i === s
        ? ta.noop
        : (n) =>
            0 === n || 1 === n
              ? n
              : tl(
                  (function (t, e, i, s, n) {
                    let r,
                      o,
                      a = 0;
                    do (r = tl((o = e + (i - e) / 2), s, n) - t) > 0 ? (i = o) : (e = o);
                    while (Math.abs(r) > 1e-7 && ++a < 12);
                    return o;
                  })(n, 0, 1, t, i),
                  e,
                  s,
                );
    }
    let tu = th(0.42, 0, 1, 1),
      tc = th(0, 0, 0.58, 1),
      td = th(0.42, 0, 0.58, 1),
      tm = (t) => Array.isArray(t) && "number" != typeof t[0];
    t.s(["isEasingArray", 0, tm], 47836);
    let tp = (t) => (e) => (e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2),
      tf = (t) => (e) => 1 - t(1 - e);
    t.s(["reverseEasing", 0, tf], 35846);
    let ty = th(0.33, 1.53, 0.69, 0.99),
      tg = tf(ty),
      tv = tp(tg),
      tx = (t) => (t >= 1 ? 1 : (t *= 2) < 1 ? 0.5 * tg(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1)))),
      tT = (t) => 1 - Math.sin(Math.acos(t)),
      tb = tf(tT),
      tw = tp(tT);
    var tS = t.i(78269);
    let tP = {
        linear: ta.noop,
        easeIn: tu,
        easeInOut: td,
        easeOut: tc,
        circIn: tT,
        circInOut: tw,
        circOut: tb,
        backIn: tg,
        backInOut: tv,
        backOut: ty,
        anticipate: tx,
      },
      tA = (t) => {
        if ((0, tS.isBezierDefinition)(t)) {
          (0, b.invariant)(4 === t.length, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
          let [e, i, s, n] = t;
          return th(e, i, s, n);
        }
        return "string" == typeof t ? ((0, b.invariant)(void 0 !== tP[t], `Invalid easing type '${t}'`, "invalid-easing-type"), tP[t]) : t;
      },
      tV = (t, e, i) => {
        let s = e - t;
        return s ? (i - t) / s : 1;
      };
    function tM(t, e, { clamp: i = !0, ease: s, mixer: n } = {}) {
      let r = t.length;
      if (((0, b.invariant)(r === e.length, "Both input and output ranges must be the same length", "range-length"), 1 === r))
        return () => e[0];
      if (2 === r && e[0] === e[1]) return () => e[1];
      let o = t[0] === t[1];
      t[0] > t[r - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
      let a = (function (t, e, i) {
          let s = [],
            n = i || c.MotionGlobalConfig.mix || $,
            r = t.length - 1;
          for (let i = 0; i < r; i++) {
            let r = n(t[i], t[i + 1]);
            (e && (r = v(Array.isArray(e) ? e[i] || ta.noop : e, r)), s.push(r));
          }
          return s;
        })(e, s, n),
        l = a.length,
        h = (i) => {
          if (o && i < t[0]) return e[0];
          let s = 0;
          if (l > 1) for (; s < t.length - 2 && !(i < t[s + 1]); s++);
          let n = tV(t[s], t[s + 1], i);
          return a[s](n);
        };
      return i ? (e) => h((0, x.clamp)(t[0], t[r - 1], e)) : h;
    }
    function tC(t, e) {
      let i = t[t.length - 1];
      for (let s = 1; s <= e; s++) {
        let n = tV(0, e, s);
        t.push((0, D.mixNumber)(i, 1, n));
      }
    }
    function tE(t) {
      let e = [0];
      return (tC(e, t.length - 1), e);
    }
    function tD({ duration: t = 300, keyframes: e, times: i, ease: s = "easeInOut" }) {
      var n;
      let r = tm(s) ? s.map(tA) : tA(s) || td,
        o = { done: !1, value: e[0] };
      if (2 === e.length && !Array.isArray(r) && (!i || 2 !== i.length || (0 === i[0] && 1 === i[1]))) {
        let [i, s] = e,
          n = i === s ? void 0 : (c.MotionGlobalConfig.mix || $)(i, s);
        return {
          calculatedDuration: t,
          next: (e) => ((o.value = n ? n(r(t > 0 ? (0, x.clamp)(0, 1, e / t) : 1)) : s), (o.done = e >= t), o),
        };
      }
      let a = tM(((n = i && i.length === e.length ? i : tE(e)), n.map((e) => e * t)), e, {
        ease: Array.isArray(r) ? r : e.map(() => r || td).splice(0, e.length - 1),
      });
      return { calculatedDuration: t, next: (e) => ((o.value = a(e)), (o.done = e >= t), o) };
    }
    (t.s(["progress", 0, tV], 61064),
      t.s(["interpolate", 0, tM], 54833),
      t.s(["fillOffset", 0, tC], 73),
      t.s(["defaultOffset", 0, tE], 95129),
      t.s(["keyframes", 0, tD], 88019));
    var tk = t.i(50833);
    function tR(t, e, i = 0) {
      var s, n;
      let r;
      return e <= 0
        ? i
        : t.velocity
          ? t.velocity(e)
          : ((s = (e) => t.next(e).value), (n = t.next(e).value), (r = Math.max(e - 5, 0)), (0, tk.velocityPerSecond)(n - s(r), e - r));
    }
    t.s(["calcGeneratorVelocity", 0, tR], 65919);
    var tL = t.i(55974);
    let tB = { decay: to, inertia: to, tween: tD, keyframes: tD, spring: tr };
    function tF(t) {
      "string" == typeof t.type && (t.type = tB[t.type]);
    }
    t.s(["replaceTransitionType", 0, tF], 91905);
    var tj = t.i(18172),
      tI = t.i(25412);
    let tO = (t) => t / 100;
    class tN extends tI.WithPromise {
      constructor(t) {
        (super(),
          (this.state = "idle"),
          (this.startTime = null),
          (this.isStopped = !1),
          (this.currentTime = 0),
          (this.holdTime = null),
          (this.playbackSpeed = 1),
          (this.delayState = { done: !1, value: void 0 }),
          (this.stop = () => {
            let { motionValue: t } = this.options;
            (t && t.updatedAt !== g.time.now() && this.tick(g.time.now()),
              (this.isStopped = !0),
              "idle" !== this.state && (this.teardown(), this.options.onStop?.()));
          }),
          (this.options = t),
          this.initAnimation(),
          this.play(),
          !1 === t.autoplay && this.pause(),
          (0, tj.notifyAnimationStart)(this, this.options));
      }
      initAnimation() {
        let { options: t } = this;
        tF(t);
        let { type: e = tD, repeat: i = 0, repeatDelay: s = 0, repeatType: n, velocity: r = 0 } = t,
          { keyframes: o } = t,
          a = e || tD;
        a !== tD && "number" != typeof o[0] && ((this.mixKeyframes = v(tO, $(o[0], o[1]))), (o = [0, 100]));
        let l = a(o === t.keyframes ? t : { ...t, keyframes: o });
        ("mirror" === n && (this.mirroredGenerator = a({ ...t, keyframes: [...o].reverse(), velocity: -r })),
          null === l.calculatedDuration && (l.calculatedDuration = Y(l)));
        let { calculatedDuration: h } = l;
        ((this.calculatedDuration = h),
          (this.resolvedDuration = h + s),
          (this.totalDuration = this.resolvedDuration * (i + 1) - s),
          (this.generator = l));
      }
      updateTime(t) {
        let e = Math.round(t - this.startTime) * this.playbackSpeed;
        null !== this.holdTime ? (this.currentTime = this.holdTime) : (this.currentTime = e);
      }
      tick(t, e = !1) {
        let i,
          { generator: s, totalDuration: n, mixKeyframes: r, mirroredGenerator: o, resolvedDuration: a, calculatedDuration: l } = this;
        if (null === this.startTime) return s.next(0);
        let { delay: h = 0, keyframes: u, repeat: c, repeatType: d, repeatDelay: m, type: p, onUpdate: f, finalKeyframe: y } = this.options;
        (this.speed > 0
          ? (this.startTime = Math.min(this.startTime, t))
          : this.speed < 0 && (this.startTime = Math.min(t - n / this.speed, this.startTime)),
          e ? (this.currentTime = t) : this.updateTime(t));
        let g = this.currentTime - h * (this.playbackSpeed >= 0 ? 1 : -1),
          v = this.playbackSpeed >= 0 ? g < 0 : g > n;
        ((this.currentTime = Math.max(g, 0)), "finished" === this.state && null === this.holdTime && (this.currentTime = n));
        let T = this.currentTime,
          b = s;
        if (c) {
          let t = Math.min(this.currentTime, n) / a,
            e = Math.floor(t),
            i = t % 1;
          (!i && t >= 1 && (i = 1),
            1 === i && e--,
            (e = Math.min(e, c + 1)) % 2 && ("reverse" === d ? ((i = 1 - i), m && (i -= m / a)) : "mirror" === d && (b = o)),
            (T = (0, x.clamp)(0, 1, i) * a));
        }
        (v ? ((this.delayState.value = u[0]), (i = this.delayState)) : (i = b.next(T)), r && !v && (i.value = r(i.value)));
        let { done: w } = i;
        v || null === l || (w = this.playbackSpeed >= 0 ? this.currentTime >= n : this.currentTime <= 0);
        let S = null === this.holdTime && ("finished" === this.state || ("running" === this.state && w));
        return (
          S && p !== to && (i.value = (0, tL.getFinalKeyframe)(u, this.options, y, this.speed)),
          f && f(i.value),
          S && this.finish(),
          i
        );
      }
      then(t, e) {
        return this.finished.then(t, e);
      }
      get duration() {
        return (0, y.millisecondsToSeconds)(this.calculatedDuration);
      }
      get iterationDuration() {
        let { delay: t = 0 } = this.options || {};
        return this.duration + (0, y.millisecondsToSeconds)(t);
      }
      get time() {
        return (0, y.millisecondsToSeconds)(this.currentTime);
      }
      set time(t) {
        ((t = (0, y.secondsToMilliseconds)(t)),
          (this.currentTime = t),
          null === this.startTime || null !== this.holdTime || 0 === this.playbackSpeed
            ? (this.holdTime = t)
            : this.driver && (this.startTime = this.driver.now() - t / this.playbackSpeed),
          this.driver ? this.driver.start(!1) : ((this.startTime = 0), (this.state = "paused"), (this.holdTime = t), this.tick(t)));
      }
      getGeneratorVelocity() {
        return tR(this.generator, this.currentTime, this.options.velocity);
      }
      get speed() {
        return this.playbackSpeed;
      }
      set speed(t) {
        let e = this.playbackSpeed !== t;
        (e && this.driver && this.updateTime(g.time.now()),
          (this.playbackSpeed = t),
          e && this.driver && (this.time = (0, y.millisecondsToSeconds)(this.currentTime)));
      }
      play() {
        if (this.isStopped) return;
        let { driver: t = H, startTime: e } = this.options;
        (this.driver || (this.driver = t((t) => this.tick(t))), this.options.onPlay?.());
        let i = this.driver.now();
        ("finished" === this.state
          ? (this.updateFinished(), (this.startTime = i))
          : null !== this.holdTime
            ? (this.startTime = i - this.holdTime)
            : this.startTime || (this.startTime = e ?? i),
          "finished" === this.state && this.speed < 0 && (this.startTime += this.calculatedDuration),
          (this.holdTime = null),
          (this.state = "running"),
          this.driver.start());
      }
      pause() {
        ((this.state = "paused"), this.updateTime(g.time.now()), (this.holdTime = this.currentTime));
      }
      complete() {
        ("running" !== this.state && this.play(), (this.state = "finished"), (this.holdTime = null));
      }
      finish() {
        (this.notifyFinished(), this.teardown(), (this.state = "finished"), this.options.onComplete?.());
      }
      cancel() {
        ((this.holdTime = null), (this.startTime = 0), this.tick(0), this.teardown(), this.options.onCancel?.());
      }
      teardown() {
        ((this.state = "idle"), this.stopDriver(), (this.startTime = this.holdTime = null));
      }
      stopDriver() {
        this.driver && (this.driver.stop(), (this.driver = void 0));
      }
      sample(t) {
        return ((this.startTime = 0), this.tick(t, !0));
      }
      attachTimeline(t) {
        return (
          this.options.allowFlatten && ((this.options.type = "keyframes"), (this.options.ease = "linear"), this.initAnimation()),
          this.driver?.stop(),
          t.observe(this)
        );
      }
    }
    var tU = t.i(46164),
      tW = t.i(4995),
      t$ = t.i(12179);
    let tz = { anticipate: tx, backInOut: tv, circInOut: tw };
    class tG extends t$.NativeAnimation {
      constructor(t) {
        (!(function (t) {
          "string" == typeof t.ease && t.ease in tz && (t.ease = tz[t.ease]);
        })(t),
          tF(t),
          super(t),
          void 0 !== t.startTime && !1 !== t.autoplay && (this.startTime = t.startTime),
          (this.options = t));
      }
      updateMotionValue(t) {
        let { motionValue: e, onUpdate: i, onComplete: s, element: n, ...r } = this.options;
        if (!e) return;
        if (void 0 !== t) return void e.set(t);
        let o = new tN({ ...r, autoplay: !1 }),
          a = Math.max(10, g.time.now() - this.startTime),
          l = (0, x.clamp)(0, 10, a - 10),
          h = o.sample(a).value,
          { name: u } = this.options;
        (n && u && (0, tW.setStyle)(n, u, h), e.setWithVelocity(o.sample(Math.max(0, a - l)).value, h, l), o.stop());
      }
    }
    var tH = t.i(25778);
    let tK = (t, e) =>
      "zIndex" !== e &&
      !!("number" == typeof t || Array.isArray(t) || ("string" == typeof t && (P.complex.test(t) || "0" === t) && !t.startsWith("url(")));
    function tY(t) {
      ((t.duration = 0), (t.type = "keyframes"));
    }
    var tX = tI,
      t_ = t.i(68445),
      tq = t.i(49350);
    let tZ = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/,
      tJ = new Set([
        "color",
        "backgroundColor",
        "outlineColor",
        "fill",
        "stroke",
        "borderColor",
        "borderTopColor",
        "borderRightColor",
        "borderBottomColor",
        "borderLeftColor",
      ]),
      tQ = (0, t_.memo)(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
    class t0 extends tX.WithPromise {
      constructor(t) {
        (super(),
          (this.stop = () => {
            (this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel());
          }),
          (this.createdAt = g.time.now()));
        const { keyframes: e, name: i, motionValue: s, element: n } = t;
        (t.autoplay ?? (t.autoplay = !0),
          t.delay ?? (t.delay = 0),
          t.type ?? (t.type = "keyframes"),
          t.repeat ?? (t.repeat = 0),
          t.repeatDelay ?? (t.repeatDelay = 0),
          t.repeatType ?? (t.repeatType = "loop"));
        const r = n?.KeyframeResolver || tU.KeyframeResolver;
        ((this.keyframeResolver = new r(e, (e, i, s) => this.onKeyframesResolved(e, i, t, !s), i, s, n)),
          this.keyframeResolver?.scheduleResolve());
      }
      onKeyframesResolved(t, e, i, s) {
        let n;
        this.keyframeResolver = void 0;
        let { name: r, type: o, velocity: a, delay: l, isHandoff: h, onUpdate: u } = i;
        this.resolvedAt = g.time.now();
        let d = !0;
        !(function (t, e, i, s) {
          let n = t[0];
          if (null === n) return !1;
          if ("display" === e || "visibility" === e) return !0;
          let r = t[t.length - 1],
            o = tK(n, e),
            a = tK(r, e);
          return o && a
            ? (function (t) {
                let e = t[0];
                if (1 === t.length) return !0;
                for (let i = 0; i < t.length; i++) if (t[i] !== e) return !0;
              })(t) ||
                (("spring" === i || (0, tH.isGenerator)(i)) && s)
            : (o !== a &&
                (0, b.warning)(
                  !1,
                  `You are trying to animate ${e} from "${n}" to "${r}". "${o ? r : n}" is not an animatable value.`,
                  "value-not-animatable",
                ),
              !1);
        })(t, r, o, a) &&
          ((d = !1),
          (c.MotionGlobalConfig.instantAnimations || !l) && u?.((0, tL.getFinalKeyframe)(t, i, e)),
          (t[0] = t[t.length - 1]),
          tY(i),
          (i.repeat = 0));
        let m = s ? (this.resolvedAt && this.resolvedAt - this.createdAt > 40 ? this.resolvedAt : this.createdAt) : void 0,
          { onComplete: p } = i;
        if (
          (i.startTime ?? (i.startTime = m),
          (i.finalKeyframe = e),
          (i.keyframes = t),
          (i.onComplete = () => {
            (p?.(), this.notifyFinished());
          }),
          d &&
            !h &&
            (function (t) {
              let { motionValue: e, name: i, repeatDelay: s, repeatType: n, damping: r, type: o, keyframes: a } = t;
              if (!i || !(tq.acceleratedValues.has(i) || tJ.has(i))) return !1;
              let l = e?.owner?.current;
              if (!(l instanceof HTMLElement) && !(l instanceof SVGElement)) return !1;
              let { onUpdate: h, transformTemplate: u } = e.owner.getProps();
              return (
                tQ() &&
                (tq.acceleratedValues.has(i) ||
                  (tJ.has(i) &&
                    (function (t) {
                      for (let e = 0; e < t.length; e++) if ("string" == typeof t[e] && tZ.test(t[e])) return !0;
                      return !1;
                    })(a))) &&
                ("transform" !== i || !u) &&
                !h &&
                !s &&
                "mirror" !== n &&
                0 !== r &&
                "inertia" !== o
              );
            })(i))
        ) {
          i.element = i.motionValue?.owner?.current;
          try {
            n = new tG(i);
          } catch {
            n = new tN(i);
          }
        } else n = new tN(i);
        (this.pendingTimeline && ((this.stopTimeline = n.attachTimeline(this.pendingTimeline)), (this.pendingTimeline = void 0)),
          (this._animation = n));
      }
      get finished() {
        return this._animation ? this._animation.finished : super.finished;
      }
      then(t, e) {
        return this.finished.finally(t).then(() => {});
      }
      get animation() {
        return (this._animation || (this.keyframeResolver?.resume(), (0, tU.flushKeyframeResolvers)()), this._animation);
      }
      get duration() {
        return this.animation.duration;
      }
      get iterationDuration() {
        return this.animation.iterationDuration;
      }
      get time() {
        return this.animation.time;
      }
      set time(t) {
        this.animation.time = t;
      }
      get speed() {
        return this.animation.speed;
      }
      get state() {
        return this.animation.state;
      }
      set speed(t) {
        this.animation.speed = t;
      }
      get startTime() {
        return this.animation.startTime;
      }
      attachTimeline(t) {
        return (this._animation ? (this.stopTimeline = this.animation.attachTimeline(t)) : (this.pendingTimeline = t), () => this.stop());
      }
      play() {
        this.animation.play();
      }
      pause() {
        this.animation.pause();
      }
      complete() {
        this.animation.complete();
      }
      cancel() {
        (this._animation && this.animation.cancel(), this.keyframeResolver?.cancel());
      }
    }
    var t1 = t.i(55810);
    let t5 = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
      t2 = { type: "keyframes", duration: 0.8 },
      t9 = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
      t3 = new Set([
        "when",
        "delay",
        "delayChildren",
        "staggerChildren",
        "staggerDirection",
        "repeat",
        "repeatType",
        "repeatDelay",
        "from",
        "elapsed",
      ]),
      t4 =
        (t, e, i, s = {}, n, r) =>
        (o) => {
          let a = l(s, t) || {},
            h = a.delay || s.delay || 0,
            { elapsed: u = 0 } = s;
          u -= (0, y.secondsToMilliseconds)(h);
          let d = {
            keyframes: Array.isArray(i) ? i : [null, i],
            ease: "easeOut",
            velocity: e.getVelocity(),
            ...a,
            delay: -u,
            onUpdate: (t) => {
              (e.set(t), a.onUpdate && a.onUpdate(t));
            },
            onComplete: () => {
              (o(), a.onComplete && a.onComplete());
            },
            name: t,
            motionValue: e,
            element: r ? void 0 : n,
          };
          (!(function (t) {
            for (let e in t) if (!t3.has(e)) return !0;
            return !1;
          })(a) &&
            Object.assign(
              d,
              ((t, { keyframes: e }) =>
                e.length > 2
                  ? t2
                  : t1.transformProps.has(t)
                    ? t.startsWith("scale")
                      ? { type: "spring", stiffness: 550, damping: 0 === e[1] ? 2 * Math.sqrt(550) : 30, restSpeed: 10 }
                      : t5
                    : t9)(t, d),
            ),
            d.duration && (d.duration = (0, y.secondsToMilliseconds)(d.duration)),
            d.repeatDelay && (d.repeatDelay = (0, y.secondsToMilliseconds)(d.repeatDelay)),
            void 0 !== d.from && (d.keyframes[0] = d.from));
          let m = !1;
          if (
            ((!1 !== d.type && (0 !== d.duration || d.repeatDelay)) || (tY(d), 0 === d.delay && (m = !0)),
            (c.MotionGlobalConfig.instantAnimations ||
              c.MotionGlobalConfig.skipAnimations ||
              n?.shouldSkipAnimations ||
              a.skipAnimations) &&
              ((m = !0), tY(d), (d.delay = 0)),
            (d.allowFlatten = !a.type && !a.ease),
            m && !r && void 0 !== e.get())
          ) {
            let t = (0, tL.getFinalKeyframe)(d.keyframes, a);
            if (void 0 !== t)
              return void G.frame.update(() => {
                (d.onUpdate(t), d.onComplete());
              });
          }
          return a.isSync ? new tN(d) : new t0(d);
        };
    t.s(["animateMotionValue", 0, t4], 48544);
    let t6 = "u" > typeof window;
    function t8(t, e, { delay: i = 0, transitionOverride: s, type: n } = {}) {
      let { transition: r, transitionEnd: c, ...d } = e,
        p = t.getDefaultTransition();
      r = r ? (0, a.resolveTransition)(r, p) : p;
      let y = r?.reduceMotion,
        g = r?.skipAnimations;
      s && (r = s);
      let v = [],
        x = n && t.animationState?.getState()[n],
        T = r?.path;
      for (let e in (T && T.animateVisualElement(t, d, r, i, v), d)) {
        let s = t.getValue(e, t.latestValues[e] ?? null),
          n = d[e];
        if (
          void 0 === n ||
          (x &&
            (function ({ protectedKeys: t, needsAnimating: e }, i) {
              let s = i in t && !e[i];
              return ((e[i] = !1), s);
            })(x, e))
        )
          continue;
        let o = { delay: i, ...l(r || {}, e) };
        g && (o.skipAnimations = !0);
        let a = s.get();
        if (void 0 !== a && !s.isAnimating() && !Array.isArray(n) && n === a && !o.velocity) {
          G.frame.update(() => s.set(n));
          continue;
        }
        let u = !1;
        if (t6 && window.MotionHandoffAnimation) {
          let i = f(t);
          if (i) {
            let t = window.MotionHandoffAnimation(i, e, G.frame);
            null !== t && ((o.startTime = t), (u = !0));
          }
        }
        m(t, e);
        let c = y ?? t.shouldReduceMotion;
        s.start(t4(e, s, n, c && h.positionalKeys.has(e) ? { type: !1 } : o, t, u));
        let p = s.animation;
        p && v.push(p);
      }
      if (c) {
        let e = () =>
          G.frame.update(() => {
            c &&
              (function (t, e) {
                let { transitionEnd: i = {}, transition: s = {}, ...n } = (0, o.resolveVariant)(t, e) || {};
                for (let e in (n = { ...n, ...i })) {
                  var r;
                  let i = Array.isArray((r = n[e])) ? r[r.length - 1] || 0 : r;
                  t.hasValue(e) ? t.getValue(e).set(i) : t.addValue(e, (0, u.motionValue)(i));
                }
              })(t, c);
          });
        v.length ? Promise.all(v).then(e) : e();
      }
      return v;
    }
    function t7(t, e, i, s = 0, n = 1) {
      let r = Array.from(t)
          .sort((t, e) => t.sortNodePosition(e))
          .indexOf(e),
        o = t.size,
        a = (o - 1) * s;
      return "function" == typeof i ? i(r, o) : 1 === n ? r * s : a - r * s;
    }
    function et(t, e, i = {}) {
      let s = (0, o.resolveVariant)(t, e, (0, o.getTypeCustom)(t, i.type)),
        n = i.transitionOverride || (s?.transition ?? (t.getDefaultTransition() || {})),
        r = () => Promise.all(s ? t8(t, s, i) : []),
        a = (s = 0) => {
          let { variantChildren: r } = t,
            { delayChildren: o = 0, staggerChildren: a, staggerDirection: l } = n,
            h = [];
          return (
            r?.forEach((t) => {
              (t.notify("AnimationStart", e),
                h.push(
                  et(t, e, { ...i, delay: s + ("function" == typeof o ? 0 : o) + t7(r, t, o, a, l) }).then(() =>
                    t.notify("AnimationComplete", e),
                  ),
                ));
            }),
            Promise.all(h)
          );
        },
        { when: l } = n;
      return l ? ("beforeChildren" === l ? r().then(() => a()) : a().then(r)) : Promise.all([r(), a(i.delay)]);
    }
    var ee = t.i(90516),
      ei = t.i(19708);
    function es(t, e) {
      if (!Array.isArray(e)) return !1;
      let i = e.length;
      if (i !== t.length) return !1;
      for (let s = 0; s < i; s++) if (e[s] !== t[s]) return !1;
      return !0;
    }
    var en = t.i(47477);
    let er = [...en.variantPriorityOrder].reverse();
    function eo() {
      let t = {};
      for (let e of en.variantPriorityOrder)
        t[e] = { isActive: "animate" === e, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
      return t;
    }
    class ea extends r.Feature {
      constructor(t) {
        (super(t),
          t.animationState ||
            (t.animationState = (function (t) {
              let e = (e) =>
                  Promise.all(
                    e.map(({ animation: e, options: i }) =>
                      (function (t, e, i = {}) {
                        return (
                          t.notify("AnimationStart", e),
                          (Array.isArray(e)
                            ? Promise.all(e.map((e) => et(t, e, i)))
                            : "string" == typeof e
                              ? et(t, e, i)
                              : Promise.all(t8(t, (0, o.resolveVariant)(t, e, i.custom), i))
                          ).then(() => {
                            t.notify("AnimationComplete", e);
                          })
                        );
                      })(t, e, i),
                    ),
                  ),
                i = eo(),
                s = !0,
                n = !1;
              function r(r) {
                let { props: a, parent: l, manuallyAnimateOnMount: h } = t,
                  u = s || n,
                  c = [],
                  m = new Set(),
                  p = {},
                  f = 1 / 0,
                  y = t;
                do y = !1 !== y.props.inherit && y.parent;
                while (y && !y.isControllingVariants);
                if (
                  (er.forEach((e, s) => {
                    var n, d;
                    let g = i[e],
                      v = a[e],
                      x = y && y.props[e],
                      T = void 0 !== v ? v : (0, ei.isVariantLabel)(x) || !1 === x ? x : void 0,
                      b = (0, ei.isVariantLabel)(T),
                      w = e === r ? g.isActive : null;
                    !1 === w && (f = s);
                    let S = b && void 0 === v && !(u && h);
                    if (
                      ((g.protectedKeys = { ...p }),
                      (!g.isActive && null === w) || (!T && !g.prevProp) || (0, ee.isAnimationControls)(T) || "boolean" == typeof T)
                    )
                      return;
                    if ("exit" === e && g.isActive && !0 !== w) {
                      p = { ...p, ...g.prevResolvedValues };
                      return;
                    }
                    let P = ((n = g.prevProp), "string" == typeof (d = T) ? d !== n : !!Array.isArray(d) && !es(d, n)),
                      A = P || (b && ((w && !S) || s > f)),
                      V = !1,
                      M = Array.isArray(T) ? T : [T],
                      C = {};
                    if (!1 !== w)
                      for (let i of M) {
                        let { transition: s, transitionEnd: n, ...r } = (0, o.resolveVariant)(t, i, (0, o.getTypeCustom)(t, e)) || {};
                        C = { ...C, ...r, ...n };
                      }
                    let { prevResolvedValues: E } = g;
                    for (let e in { ...E, ...C }) {
                      if (e in p) continue;
                      let i = C[e],
                        s = E[e],
                        n = Array.isArray(i) && Array.isArray(s) ? !es(i, s) || P : i !== s;
                      if (n && null == i) m.add(e);
                      else if (n || (void 0 !== i && m.has(e))) {
                        ((A = !0), m.delete(e) && (V = !0), (g.needsAnimating[e] = !0));
                        let i = t.getValue(e);
                        i && (i.liveStyle = !1);
                      } else g.protectedKeys[e] = !0;
                    }
                    if (((g.prevProp = T), (g.prevResolvedValues = C), g.isActive && (p = { ...p, ...C }), A && (!(S && P) || V)))
                      for (let i of M) {
                        let s = { type: e };
                        if ("string" == typeof i && u && h && l?.enteringChildren) {
                          let e = (0, o.resolveVariant)(l, i)?.transition?.delayChildren;
                          s.delay = t7(l.enteringChildren, t, e);
                        }
                        c.push({ animation: i, options: s });
                      }
                  }),
                  m.size)
                ) {
                  let { initial: e } = a,
                    i = {},
                    s = "boolean" != typeof e && (0, o.resolveVariant)(t, Array.isArray(e) ? e[0] : e, t.presenceContext?.custom);
                  (s && s.transition && (i.transition = s.transition),
                    m.forEach((n) => {
                      let r = t.getValue(n);
                      r && (r.liveStyle = !0);
                      let o = s && !Array.isArray(e) ? s[n] : void 0,
                        l = t.getBaseTargetFromProps(a, n);
                      i[n] =
                        (void 0 !== o
                          ? o
                          : void 0 === l || (0, d.isMotionValue)(l)
                            ? void 0 === t.initialValues[n]
                              ? t.baseTarget[n]
                              : void 0
                            : l) ?? null;
                    }),
                    c.push({ animation: i }));
                }
                let g = (u && t.blockInitialAnimation) || (s && !h && (!1 === a.initial || a.initial === a.animate));
                return ((s = n = !1), !g && c.length ? e(c) : Promise.resolve());
              }
              return {
                animateChanges: r,
                setActive: function (e, s) {
                  if (i[e].isActive === s) return Promise.resolve();
                  (t.variantChildren?.forEach((t) => t.animationState?.setActive(e, s)), (i[e].isActive = s));
                  let n = r(e);
                  for (let t in i) i[t].protectedKeys = {};
                  return n;
                },
                setAnimateFunction: (i) => {
                  e = i(t);
                },
                getState: () => i,
                reset: () => {
                  ((i = eo()), (n = !0));
                },
              };
            })(t)));
      }
      updateAnimationControlsSubscription() {
        let { animate: t } = this.node.getProps();
        (0, ee.isAnimationControls)(t) && (this.unmountControls = t.subscribe(this.node));
      }
      mount() {
        this.updateAnimationControlsSubscription();
      }
      update() {
        let { animate: t } = this.node.getProps(),
          { animate: e } = this.node.prevProps || {};
        t !== e && this.updateAnimationControlsSubscription();
      }
      unmount() {
        (this.node.animationState.reset(), this.unmountControls?.());
      }
    }
    var el = r;
    let eh = 0;
    class eu extends el.Feature {
      constructor() {
        (super(...arguments), (this.id = eh++));
      }
      update() {
        let { presenceContext: t, prevPresenceContext: e, animationState: i } = this.node;
        if (!t || !i) return;
        let { isPresent: s, onExitComplete: n } = t,
          r = e?.isPresent;
        if (s === r) return;
        if (s && !1 === r) {
          if (!0 === this.exit) {
            let { initial: t } = this.node.getProps();
            if (t && !Array.isArray(t)) {
              let { transition: e, transitionEnd: i, ...s } = (0, o.resolveVariant)(this.node, t) || {};
              for (let t in s) this.node.getValue(t)?.jump(s[t]);
            }
            ((this.node.blockInitialAnimation = !1), i.reset(), i.animateChanges());
          } else i.setActive("exit", !1);
          this.exit = void 0;
          return;
        }
        let a = (this.exit = i.setActive("exit", !s));
        n &&
          !s &&
          a.then(() => {
            this.exit === a && ((this.exit = !0), n(this.id));
          });
      }
      mount() {
        let { register: t, onExitComplete: e } = this.node.presenceContext || {};
        (e && e(this.id), t && (this.unmount = t(this.id)));
      }
      unmount() {}
    }
    var ec = r,
      ed = t.i(22405);
    function em(t) {
      return [t("x"), t("y")];
    }
    var ep = t.i(4955),
      ef = t.i(60541);
    function ey(t, e, i, s = { passive: !0 }) {
      return (t.addEventListener(e, i, s), () => t.removeEventListener(e, i, s));
    }
    let eg = { x: !1, y: !1 };
    var ev = t.i(21006);
    function ex(t) {
      return t.max - t.min;
    }
    function eT(t, e, i, s = 0.5) {
      ((t.origin = s),
        (t.originPoint = (0, D.mixNumber)(e.min, e.max, t.origin)),
        (t.scale = ex(i) / ex(e)),
        (t.translate = (0, D.mixNumber)(i.min, i.max, t.origin) - t.originPoint),
        ((t.scale >= 0.9999 && t.scale <= 1.0001) || isNaN(t.scale)) && (t.scale = 1),
        ((t.translate >= -0.01 && t.translate <= 0.01) || isNaN(t.translate)) && (t.translate = 0));
    }
    function eb(t, e, i, s) {
      (eT(t.x, e.x, i.x, s ? s.originX : void 0), eT(t.y, e.y, i.y, s ? s.originY : void 0));
    }
    function ew(t, e, i, s = 0) {
      ((t.min = (s ? (0, D.mixNumber)(i.min, i.max, s) : i.min) + e.min), (t.max = t.min + ex(e)));
    }
    function eS(t, e, i, s = 0) {
      let n = s ? (0, D.mixNumber)(i.min, i.max, s) : i.min;
      ((t.min = e.min - n), (t.max = t.min + ex(e)));
    }
    function eP(t, e, i, s) {
      (eS(t.x, e.x, i.x, s?.x), eS(t.y, e.y, i.y, s?.y));
    }
    let eA = (t) => "object" == typeof t && null !== t;
    function eV(t) {
      return eA(t) && "ownerSVGElement" in t;
    }
    function eM(t, e, i) {
      if (null == t) return [];
      if (t instanceof EventTarget) return [t];
      if ("string" == typeof t) {
        let s = document;
        e && (s = e.current);
        let n = i?.[t] ?? s.querySelectorAll(t);
        return n ? Array.from(n) : [];
      }
      return Array.from(t).filter((t) => null != t);
    }
    (t.s(["isObject", 0, eA], 68098), t.s(["isSVGElement", 0, eV], 20972), t.s(["resolveElements", 0, eM], 98715));
    let eC = new WeakMap(),
      eE = (t, e, i) => (s, n) => (n && n[0] ? n[0][t + "Size"] : eV(s) && "getBBox" in s ? s.getBBox()[e] : s[i]),
      eD = eE("inline", "width", "offsetWidth"),
      ek = eE("block", "height", "offsetHeight");
    function eR({ target: t, borderBoxSize: e }) {
      eC.get(t)?.forEach((i) => {
        i(t, {
          get width() {
            return eD(t, e);
          },
          get height() {
            return ek(t, e);
          },
        });
      });
    }
    function eL(t) {
      t.forEach(eR);
    }
    let eB = new Set();
    function eF(t, s) {
      let n;
      return "function" == typeof t
        ? (eB.add(t),
          i ||
            ((i = () => {
              let t = {
                get width() {
                  return window.innerWidth;
                },
                get height() {
                  return window.innerHeight;
                },
              };
              eB.forEach((e) => e(t));
            }),
            window.addEventListener("resize", i)),
          () => {
            (eB.delete(t), eB.size || "function" != typeof i || (window.removeEventListener("resize", i), (i = void 0)));
          })
        : (!e && "u" > typeof ResizeObserver && (e = new ResizeObserver(eL)),
          (n = eM(t)).forEach((t) => {
            let i = eC.get(t);
            (i || ((i = new Set()), eC.set(t, i)), i.add(s), e?.observe(t));
          }),
          () => {
            n.forEach((t) => {
              let i = eC.get(t);
              (i?.delete(s), i?.size || e?.unobserve(t));
            });
          });
    }
    t.s(["resize", 0, eF], 22098);
    let ej = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]),
      eI = new Set(["INPUT", "SELECT", "TEXTAREA"]),
      eO = (t) => ("mouse" === t.pointerType ? "number" != typeof t.button || t.button <= 0 : !1 !== t.isPrimary);
    function eN(t) {
      return { point: { x: t.pageX, y: t.pageY } };
    }
    function eU(t, e, i, s) {
      return ey(t, e, (t) => eO(t) && i(t, eN(t)), s);
    }
    let eW = ({ current: t }) => (t ? t.ownerDocument.defaultView : null);
    var e$ = t.i(43392);
    let ez = (t, e) => Math.abs(t - e),
      eG = new Set(["auto", "scroll"]);
    class eH {
      constructor(
        t,
        e,
        { transformPagePoint: i, contextWindow: s = window, dragSnapToOrigin: n = !1, distanceThreshold: r = 3, element: o } = {},
      ) {
        if (
          ((this.startEvent = null),
          (this.lastMoveEvent = null),
          (this.lastMoveEventInfo = null),
          (this.lastRawMoveEventInfo = null),
          (this.handlers = {}),
          (this.contextWindow = window),
          (this.scrollPositions = new Map()),
          (this.removeScrollListeners = null),
          (this.onElementScroll = (t) => {
            this.handleScroll(t.target);
          }),
          (this.onWindowScroll = () => {
            this.handleScroll(window);
          }),
          (this.updatePoint = () => {
            var t, e;
            if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
            ((this.hasPendingMove = !1),
              this.lastRawMoveEventInfo && (this.lastMoveEventInfo = eK(this.lastRawMoveEventInfo, this.transformPagePoint)));
            let i = eX(this.lastMoveEventInfo, this.history),
              s = null !== this.startEvent,
              n = ((t = i.offset), (e = { x: 0, y: 0 }), Math.sqrt(ez(t.x, e.x) ** 2 + ez(t.y, e.y) ** 2) >= this.distanceThreshold);
            if (!s && !n) return;
            let { point: r } = i;
            this.history.push({ ...r, timestamp: g.time.now() });
            let { onStart: o, onMove: a } = this.handlers;
            (s || (o && o(this.lastMoveEvent, i), (this.startEvent = this.lastMoveEvent)), a && a(this.lastMoveEvent, i));
          }),
          (this.handlePointerMove = (t, e) => {
            ((this.lastMoveEvent = t),
              (this.lastRawMoveEventInfo = e),
              (this.lastMoveEventInfo = eK(e, this.transformPagePoint)),
              (this.hasPendingMove = !0),
              G.frame.update(this.updatePoint, !0));
          }),
          (this.handlePointerUp = (t, e) => {
            (this.hasPendingMove && this.updatePoint(), this.end());
            let { onEnd: i, onSessionEnd: s, resumeAnimation: n } = this.handlers;
            if (((this.dragSnapToOrigin || !this.startEvent) && n && n(), !(this.lastMoveEvent && this.lastMoveEventInfo))) return;
            let r = eX("pointercancel" === t.type ? this.lastMoveEventInfo : eK(e, this.transformPagePoint), this.history);
            (this.startEvent && i && i(t, r), s && s(t, r));
          }),
          !eO(t))
        )
          return;
        ((this.dragSnapToOrigin = n),
          (this.handlers = e),
          (this.transformPagePoint = i),
          (this.distanceThreshold = r),
          (this.contextWindow = s || window));
        const a = eK(eN(t), this.transformPagePoint),
          { point: l } = a,
          { timestamp: h } = z.frameData;
        this.history = [{ ...l, timestamp: h }];
        const { onSessionStart: u } = e;
        u && u(t, eX(a, this.history));
        const c = { passive: !0, capture: !0 };
        ((this.removeListeners = v(
          eU(this.contextWindow, "pointermove", this.handlePointerMove, c),
          eU(this.contextWindow, "pointerup", this.handlePointerUp, c),
          eU(this.contextWindow, "pointercancel", this.handlePointerUp, c),
        )),
          o && this.startScrollTracking(o));
      }
      startScrollTracking(t) {
        let e = t.parentElement;
        for (; e;) {
          let t = getComputedStyle(e);
          ((eG.has(t.overflowX) || eG.has(t.overflowY)) && this.scrollPositions.set(e, { x: e.scrollLeft, y: e.scrollTop }),
            (e = e.parentElement));
        }
        (this.scrollPositions.set(window, { x: window.scrollX, y: window.scrollY }),
          window.addEventListener("scroll", this.onElementScroll, { capture: !0 }),
          window.addEventListener("scroll", this.onWindowScroll),
          (this.removeScrollListeners = () => {
            (window.removeEventListener("scroll", this.onElementScroll, { capture: !0 }),
              window.removeEventListener("scroll", this.onWindowScroll));
          }));
      }
      handleScroll(t) {
        let e = this.scrollPositions.get(t);
        if (!e) return;
        let i = t === window,
          s = i ? { x: window.scrollX, y: window.scrollY } : { x: t.scrollLeft, y: t.scrollTop },
          n = { x: s.x - e.x, y: s.y - e.y };
        (0 !== n.x || 0 !== n.y) &&
          (i
            ? this.lastMoveEventInfo && ((this.lastMoveEventInfo.point.x += n.x), (this.lastMoveEventInfo.point.y += n.y))
            : this.history.length > 0 && ((this.history[0].x -= n.x), (this.history[0].y -= n.y)),
          this.scrollPositions.set(t, s),
          G.frame.update(this.updatePoint, !0));
      }
      updateHandlers(t) {
        this.handlers = t;
      }
      end() {
        (this.removeListeners && this.removeListeners(),
          this.removeScrollListeners && this.removeScrollListeners(),
          this.scrollPositions.clear(),
          (0, G.cancelFrame)(this.updatePoint));
      }
    }
    function eK(t, e) {
      return e ? { point: e(t.point) } : t;
    }
    function eY(t, e) {
      return { x: t.x - e.x, y: t.y - e.y };
    }
    function eX({ point: t }, e) {
      return {
        point: t,
        delta: eY(t, e_(e)),
        offset: eY(t, e[0]),
        velocity: (function (t) {
          if (t.length < 2) return { x: 0, y: 0 };
          let e = t.length - 1,
            i = null,
            s = e_(t);
          for (; e >= 0 && ((i = t[e]), !(s.timestamp - i.timestamp > (0, y.secondsToMilliseconds)(0.1)));) e--;
          if (!i) return { x: 0, y: 0 };
          i === t[0] && t.length > 2 && s.timestamp - i.timestamp > 2 * (0, y.secondsToMilliseconds)(0.1) && (i = t[1]);
          let n = (0, y.millisecondsToSeconds)(s.timestamp - i.timestamp);
          if (0 === n) return { x: 0, y: 0 };
          let r = { x: (s.x - i.x) / n, y: (s.y - i.y) / n };
          return (r.x === 1 / 0 && (r.x = 0), r.y === 1 / 0 && (r.y = 0), r);
        })(e),
      };
    }
    function e_(t) {
      return t[t.length - 1];
    }
    function eq(t, e, i) {
      return { min: void 0 !== e ? t.min + e : void 0, max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0 };
    }
    function eZ(t, e) {
      let i = e.min - t.min,
        s = e.max - t.max;
      return (e.max - e.min < t.max - t.min && ([i, s] = [s, i]), { min: i, max: s });
    }
    function eJ(t, e, i) {
      return { min: eQ(t, e), max: eQ(t, i) };
    }
    function eQ(t, e) {
      return "number" == typeof t ? t : t[e] || 0;
    }
    let e0 = new WeakMap();
    class e1 {
      constructor(t) {
        ((this.openDragLock = null),
          (this.isDragging = !1),
          (this.currentDirection = null),
          (this.originPoint = { x: 0, y: 0 }),
          (this.constraints = !1),
          (this.hasMutatedConstraints = !1),
          (this.elastic = (0, ed.createBox)()),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null),
          (this.visualElement = t));
      }
      start(t, { snapToCursor: e = !1, distanceThreshold: i } = {}) {
        let { presenceContext: s } = this.visualElement;
        if (s && !1 === s.isPresent) return;
        let n = (t) => {
            (e && this.snapToCursor(t), this.stopAnimation());
          },
          r = (t, e) => {
            let { drag: i, dragPropagation: s, onDragStart: n } = this.getProps();
            if (
              i &&
              !s &&
              (this.openDragLock && this.openDragLock(),
              (this.openDragLock = (function (t) {
                if ("x" === t || "y" === t)
                  if (eg[t]) return null;
                  else
                    return (
                      (eg[t] = !0),
                      () => {
                        eg[t] = !1;
                      }
                    );
                return eg.x || eg.y
                  ? null
                  : ((eg.x = eg.y = !0),
                    () => {
                      eg.x = eg.y = !1;
                    });
              })(i)),
              !this.openDragLock)
            )
              return;
            ((this.latestPointerEvent = t),
              (this.latestPanInfo = e),
              (this.isDragging = !0),
              (this.currentDirection = null),
              this.resolveConstraints(),
              this.visualElement.projection &&
                ((this.visualElement.projection.isAnimationBlocked = !0), (this.visualElement.projection.target = void 0)),
              em((t) => {
                let e = this.getAxisMotionValue(t).get() || 0;
                if (ev.percent.test(e)) {
                  let { projection: i } = this.visualElement;
                  if (i && i.layout) {
                    let s = i.layout.layoutBox[t];
                    s && (e = ex(s) * (parseFloat(e) / 100));
                  }
                }
                this.originPoint[t] = e;
              }),
              n && G.frame.update(() => n(t, e), !1, !0),
              m(this.visualElement, "transform"));
            let { animationState: r } = this.visualElement;
            r && r.setActive("whileDrag", !0);
          },
          o = (t, e) => {
            ((this.latestPointerEvent = t), (this.latestPanInfo = e));
            let { dragPropagation: i, dragDirectionLock: s, onDirectionLock: n, onDrag: r } = this.getProps();
            if (!i && !this.openDragLock) return;
            let { offset: o } = e;
            if (s && null === this.currentDirection) {
              ((this.currentDirection = (function (t, e = 10) {
                let i = null;
                return (Math.abs(t.y) > e ? (i = "y") : Math.abs(t.x) > e && (i = "x"), i);
              })(o)),
                null !== this.currentDirection && n && n(this.currentDirection));
              return;
            }
            (this.updateAxis("x", e.point, o),
              this.updateAxis("y", e.point, o),
              this.visualElement.render(),
              r && G.frame.update(() => r(t, e), !1, !0));
          },
          a = (t, e) => {
            ((this.latestPointerEvent = t),
              (this.latestPanInfo = e),
              this.stop(t, e),
              (this.latestPointerEvent = null),
              (this.latestPanInfo = null));
          },
          l = () => {
            let { dragSnapToOrigin: t } = this.getProps();
            (t || this.constraints) && this.startAnimation({ x: 0, y: 0 });
          },
          { dragSnapToOrigin: h } = this.getProps();
        this.panSession = new eH(
          t,
          { onSessionStart: n, onStart: r, onMove: o, onSessionEnd: a, resumeAnimation: l },
          {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: h,
            distanceThreshold: i,
            contextWindow: eW(this.visualElement),
            element: this.visualElement.current,
          },
        );
      }
      stop(t, e) {
        let i = t || this.latestPointerEvent,
          s = e || this.latestPanInfo,
          n = this.isDragging;
        if ((this.cancel(), !n || !s || !i)) return;
        let { velocity: r } = s;
        this.startAnimation(r);
        let { onDragEnd: o } = this.getProps();
        o && G.frame.postRender(() => o(i, s));
      }
      cancel() {
        this.isDragging = !1;
        let { projection: t, animationState: e } = this.visualElement;
        (t && (t.isAnimationBlocked = !1), this.endPanSession());
        let { dragPropagation: i } = this.getProps();
        (!i && this.openDragLock && (this.openDragLock(), (this.openDragLock = null)), e && e.setActive("whileDrag", !1));
      }
      endPanSession() {
        (this.panSession && this.panSession.end(), (this.panSession = void 0));
      }
      updateAxis(t, e, i) {
        let { drag: s } = this.getProps();
        if (!i || !e2(t, s, this.currentDirection)) return;
        let n = this.getAxisMotionValue(t),
          r = this.originPoint[t] + i[t];
        (this.constraints &&
          this.constraints[t] &&
          (r = (function (t, { min: e, max: i }, s) {
            return (
              void 0 !== e && t < e
                ? (t = s ? (0, D.mixNumber)(e, t, s.min) : Math.max(t, e))
                : void 0 !== i && t > i && (t = s ? (0, D.mixNumber)(i, t, s.max) : Math.min(t, i)),
              t
            );
          })(r, this.constraints[t], this.elastic[t])),
          n.set(r));
      }
      resolveConstraints() {
        let { dragConstraints: t, dragElastic: e } = this.getProps(),
          i =
            this.visualElement.projection && !this.visualElement.projection.layout
              ? this.visualElement.projection.measure(!1)
              : this.visualElement.projection?.layout,
          s = this.constraints;
        (t && (0, e$.isRefObject)(t)
          ? this.constraints || (this.constraints = this.resolveRefConstraints())
          : t && i
            ? (this.constraints = (function (t, { top: e, left: i, bottom: s, right: n }) {
                return { x: eq(t.x, i, n), y: eq(t.y, e, s) };
              })(i.layoutBox, t))
            : (this.constraints = !1),
          (this.elastic = (function (t = 0.35) {
            return (!1 === t ? (t = 0) : !0 === t && (t = 0.35), { x: eJ(t, "left", "right"), y: eJ(t, "top", "bottom") });
          })(e)),
          s !== this.constraints &&
            !(0, e$.isRefObject)(t) &&
            i &&
            this.constraints &&
            !this.hasMutatedConstraints &&
            em((t) => {
              var e, s;
              let n;
              !1 !== this.constraints &&
                this.getAxisMotionValue(t) &&
                (this.constraints[t] =
                  ((e = i.layoutBox[t]),
                  (s = this.constraints[t]),
                  (n = {}),
                  void 0 !== s.min && (n.min = s.min - e.min),
                  void 0 !== s.max && (n.max = s.max - e.min),
                  n));
            }));
      }
      resolveRefConstraints() {
        var t;
        let { dragConstraints: e, onMeasureDragConstraints: i } = this.getProps();
        if (!e || !(0, e$.isRefObject)(e)) return !1;
        let s = e.current;
        (0, b.invariant)(
          null !== s,
          "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.",
          "drag-constraints-ref",
        );
        let { projection: n } = this.visualElement;
        if (!n || !n.layout) return !1;
        n.root && ((n.root.scroll = void 0), n.root.updateScroll());
        let r = (0, ep.measurePageBox)(s, n.root, this.visualElement.getTransformPagePoint()),
          o = ((t = n.layout.layoutBox), { x: eZ(t.x, r.x), y: eZ(t.y, r.y) });
        if (i) {
          let t = i((0, ef.convertBoxToBoundingBox)(o));
          ((this.hasMutatedConstraints = !!t), t && (o = (0, ef.convertBoundingBoxToBox)(t)));
        }
        return o;
      }
      startAnimation(t) {
        let { drag: e, dragMomentum: i, dragElastic: s, dragTransition: n, dragSnapToOrigin: r, onDragTransitionEnd: o } = this.getProps(),
          a = this.constraints || {};
        return Promise.all(
          em((o) => {
            if (!e2(o, e, this.currentDirection)) return;
            let l = (a && a[o]) || {};
            (!0 === r || r === o) && (l = { min: 0, max: 0 });
            let h = {
              type: "inertia",
              velocity: i ? t[o] : 0,
              bounceStiffness: s ? 200 : 1e6,
              bounceDamping: s ? 40 : 1e7,
              timeConstant: 750,
              restDelta: 1,
              restSpeed: 10,
              ...n,
              ...l,
            };
            return this.startAxisValueAnimation(o, h);
          }),
        ).then(o);
      }
      startAxisValueAnimation(t, e) {
        let i = this.getAxisMotionValue(t);
        return (m(this.visualElement, t), i.start(t4(t, i, 0, e, this.visualElement, !1)));
      }
      stopAnimation() {
        em((t) => this.getAxisMotionValue(t).stop());
      }
      getAxisMotionValue(t) {
        let e = `_drag${t.toUpperCase()}`;
        return this.visualElement.getProps()[e] || this.visualElement.getValue(t, this.visualElement.latestValues[t] ?? 0);
      }
      snapToCursor({ clientX: t, clientY: e }) {
        let { drag: i } = this.getProps(),
          s = { x: t, y: e },
          n = this.visualElement.getTransformPagePoint()?.(s) || s,
          r = this.visualElement.measureViewportBox();
        em((t) => {
          if (!e2(t, i, this.currentDirection)) return;
          let e = this.getAxisMotionValue(t),
            { min: s, max: o } = r[t];
          e.set((e.get() || 0) + n[t] - (0, D.mixNumber)(s, o, 0.5));
        });
      }
      scalePositionWithinConstraints() {
        if (!this.visualElement.current) return;
        let { drag: t, dragConstraints: e } = this.getProps(),
          { projection: i } = this.visualElement;
        if (!(0, e$.isRefObject)(e) || !i || !this.constraints) return;
        this.stopAnimation();
        let s = this.constraints,
          n = { x: 0, y: 0 };
        em((t) => {
          var e, i;
          let r,
            o,
            a,
            l = this.getAxisMotionValue(t).get();
          n[t] =
            ((e = { min: l, max: l }),
            (i = s[t]),
            (r = 0.5),
            (o = ex(e)),
            (a = ex(i)) > o ? (r = tV(i.min, i.max - o, e.min)) : o > a && (r = tV(e.min, e.max - a, i.min)),
            (0, x.clamp)(0, 1, r));
        });
        let { transformTemplate: r } = this.visualElement.getProps();
        ((this.visualElement.current.style.transform = r ? r({}, "") : "none"),
          i.root && i.root.updateScroll(),
          i.updateLayout(),
          (this.constraints = !1),
          this.resolveConstraints(),
          em((e) => {
            let i = this.getAxisMotionValue(e);
            if (!e2(e, t, null) || !i.get()) return;
            let { min: s, max: r } = this.constraints[e];
            i.set((0, D.mixNumber)(s, r, n[e]));
          }),
          this.visualElement.render());
      }
      addListeners() {
        let t;
        if (!this.visualElement.current) return;
        e0.set(this.visualElement, this);
        let e = this.visualElement.current,
          i = eU(e, "pointerdown", (t) => {
            let { drag: i, dragListener: s = !0 } = this.getProps(),
              n = t.target,
              r = n !== e && (eI.has(n.tagName) || !0 === n.isContentEditable);
            i && s && !r && this.start(t);
          }),
          s = () => {
            var i, s, n;
            let r,
              o,
              { dragConstraints: a } = this.getProps();
            (0, e$.isRefObject)(a) &&
              a.current &&
              ((this.constraints = this.resolveRefConstraints()),
              t ||
                ((i = e),
                (s = a.current),
                (r = eF(i, e5((n = () => this.scalePositionWithinConstraints())))),
                (o = eF(s, e5(n))),
                (t = () => {
                  (r(), o());
                })));
          },
          { projection: n } = this.visualElement,
          r = n.addEventListener("measure", s);
        (n && !n.layout && (n.root && n.root.updateScroll(), n.updateLayout()), G.frame.read(s));
        let o = ey(window, "resize", () => this.scalePositionWithinConstraints()),
          a = n.addEventListener("didUpdate", ({ delta: t, hasLayoutChanged: e }) => {
            this.isDragging &&
              e &&
              (em((e) => {
                let i = this.getAxisMotionValue(e);
                i && ((this.originPoint[e] += t[e].translate), i.set(i.get() + t[e].translate));
              }),
              this.visualElement.render());
          });
        return () => {
          (o(), i(), r(), a && a(), t && t());
        };
      }
      getProps() {
        let t = this.visualElement.getProps(),
          {
            drag: e = !1,
            dragDirectionLock: i = !1,
            dragPropagation: s = !1,
            dragConstraints: n = !1,
            dragElastic: r = 0.35,
            dragMomentum: o = !0,
          } = t;
        return { ...t, drag: e, dragDirectionLock: i, dragPropagation: s, dragConstraints: n, dragElastic: r, dragMomentum: o };
      }
    }
    function e5(t) {
      let e = !0;
      return () => {
        if (e) {
          e = !1;
          return;
        }
        t();
      };
    }
    function e2(t, e, i) {
      return (!0 === e || e === t) && (null === i || i === t);
    }
    class e9 extends ec.Feature {
      constructor(t) {
        (super(t), (this.removeGroupControls = ta.noop), (this.removeListeners = ta.noop), (this.controls = new e1(t)));
      }
      mount() {
        let { dragControls: t } = this.node.getProps();
        (t && (this.removeGroupControls = t.subscribe(this.controls)), (this.removeListeners = this.controls.addListeners() || ta.noop));
      }
      update() {
        let { dragControls: t } = this.node.getProps(),
          { dragControls: e } = this.node.prevProps || {};
        t !== e && (this.removeGroupControls(), t && (this.removeGroupControls = t.subscribe(this.controls)));
      }
      unmount() {
        (this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession());
      }
    }
    var e3 = r;
    let e4 = (t) => (e, i) => {
      t && G.frame.update(() => t(e, i), !1, !0);
    };
    class e6 extends e3.Feature {
      constructor() {
        (super(...arguments), (this.removePointerDownListener = ta.noop));
      }
      onPointerDown(t) {
        this.session = new eH(t, this.createPanHandlers(), {
          transformPagePoint: this.node.getTransformPagePoint(),
          contextWindow: eW(this.node),
        });
      }
      createPanHandlers() {
        let { onPanSessionStart: t, onPanStart: e, onPan: i, onPanEnd: s } = this.node.getProps();
        return {
          onSessionStart: e4(t),
          onStart: e4(e),
          onMove: e4(i),
          onEnd: (t, e) => {
            (delete this.session, s && G.frame.postRender(() => s(t, e)));
          },
        };
      }
      mount() {
        this.removePointerDownListener = eU(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
      }
      update() {
        this.session && this.session.updateHandlers(this.createPanHandlers());
      }
      unmount() {
        (this.removePointerDownListener(), this.session && this.session.end());
      }
    }
    var e8 = t.i(91398);
    let e7 = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
    var it = t.i(33592),
      ie = t.i(91788),
      ii = t.i(62946);
    function is(t = !0) {
      let e = (0, ie.useContext)(ii.PresenceContext);
      if (null === e) return [!0, null];
      let { isPresent: i, onExitComplete: s, register: n } = e,
        r = (0, ie.useId)();
      (0, ie.useEffect)(() => {
        if (t) return n(r);
      }, [t]);
      let o = (0, ie.useCallback)(() => t && s && s(r), [r, s, t]);
      return !i && s ? [!1, o] : [!0];
    }
    t.s(["usePresence", 0, is], 86398);
    var ir = t.i(11535),
      io = t.i(22469);
    let ia = !1;
    class il extends ie.Component {
      componentDidMount() {
        let { visualElement: t, layoutGroup: e, switchLayoutGroup: i, layoutId: s } = this.props,
          { projection: n } = t;
        (n &&
          (e.group && e.group.add(n),
          i && i.register && s && i.register(n),
          ia && n.root.didUpdate(),
          n.addEventListener("animationComplete", () => {
            this.safeToRemove();
          }),
          n.setOptions({ ...n.options, layoutDependency: this.props.layoutDependency, onExitComplete: () => this.safeToRemove() })),
          (e7.hasEverUpdated = !0));
      }
      getSnapshotBeforeUpdate(t) {
        let { layoutDependency: e, visualElement: i, drag: s, isPresent: n } = this.props,
          { projection: r } = i;
        return (
          r &&
            ((r.isPresent = n),
            t.layoutDependency !== e && r.setOptions({ ...r.options, layoutDependency: e }),
            (ia = !0),
            s || t.layoutDependency !== e || void 0 === e || t.isPresent !== n ? r.willUpdate() : this.safeToRemove(),
            t.isPresent !== n &&
              (n
                ? r.promote()
                : r.relegate() ||
                  G.frame.postRender(() => {
                    let t = r.getStack();
                    (t && t.members.length) || this.safeToRemove();
                  }))),
          null
        );
      }
      componentDidUpdate() {
        let { visualElement: t, layoutAnchor: e } = this.props,
          { projection: i } = t;
        i &&
          ((i.options.layoutAnchor = e),
          i.root.didUpdate(),
          it.microtask.postRender(() => {
            !i.currentAnimation && i.isLead() && this.safeToRemove();
          }));
      }
      componentWillUnmount() {
        let { visualElement: t, layoutGroup: e, switchLayoutGroup: i } = this.props,
          { projection: s } = t;
        ((ia = !0), s && (s.scheduleCheckAfterUnmount(), e && e.group && e.group.remove(s), i && i.deregister && i.deregister(s)));
      }
      safeToRemove() {
        let { safeToRemove: t } = this.props;
        t && t();
      }
      render() {
        return null;
      }
    }
    function ih(t) {
      let [e, i] = is(),
        s = (0, ie.useContext)(ir.LayoutGroupContext);
      return (0, e8.jsx)(il, {
        ...t,
        layoutGroup: s,
        switchLayoutGroup: (0, ie.useContext)(io.SwitchLayoutGroupContext),
        isPresent: e,
        safeToRemove: i,
      });
    }
    var iu = t.i(78892);
    function ic(t, e, i) {
      let s = (0, d.isMotionValue)(t) ? t : (0, u.motionValue)(t);
      return (s.start(t4("", s, e, i)), s.animation);
    }
    t.s(["animateSingleValue", 0, ic], 10389);
    var id = t.i(91770),
      im = t.i(32866);
    let ip = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
      iy = (t) => ("number" == typeof t ? t : parseFloat(t));
    t.s(["asNumber", 0, iy], 52581);
    let ig = ip.length,
      iv = (t) => "number" == typeof t || ev.px.test(t);
    function ix(t, e) {
      return void 0 !== t[e] ? t[e] : t.borderRadius;
    }
    let iT = iw(0, 0.5, tb),
      ib = iw(0.5, 0.95, ta.noop);
    function iw(t, e, i) {
      return (s) => (s < t ? 0 : s > e ? 1 : i(tV(t, e, s)));
    }
    function iS(t, e) {
      ((t.min = e.min), (t.max = e.max));
    }
    function iP(t, e) {
      (iS(t.x, e.x), iS(t.y, e.y));
    }
    function iA(t, e) {
      ((t.translate = e.translate), (t.scale = e.scale), (t.originPoint = e.originPoint), (t.origin = e.origin));
    }
    var iV = t.i(81057);
    function iM(t, e, i, s, n) {
      return ((t -= e), (t = (0, iV.scalePoint)(t, 1 / i, s)), void 0 !== n && (t = (0, iV.scalePoint)(t, 1 / n, s)), t);
    }
    function iC(t, e, [i, s, n], r, o) {
      !(function (t, e = 0, i = 1, s = 0.5, n, r = t, o = t) {
        if ((ev.percent.test(e) && ((e = parseFloat(e)), (e = (0, D.mixNumber)(o.min, o.max, e / 100) - o.min)), "number" != typeof e))
          return;
        let a = (0, D.mixNumber)(r.min, r.max, s);
        (t === r && (a -= e), (t.min = iM(t.min, e, i, a, n)), (t.max = iM(t.max, e, i, a, n)));
      })(t, e[i], e[s], e[n], e.scale, r, o);
    }
    let iE = ["x", "scaleX", "originX"],
      iD = ["y", "scaleY", "originY"];
    function ik(t, e, i, s) {
      (iC(t.x, e, iE, i ? i.x : void 0, s ? s.x : void 0), iC(t.y, e, iD, i ? i.y : void 0, s ? s.y : void 0));
    }
    function iR(t) {
      return 0 === t.translate && 1 === t.scale;
    }
    function iL(t) {
      return iR(t.x) && iR(t.y);
    }
    function iB(t, e) {
      return t.min === e.min && t.max === e.max;
    }
    function iF(t, e) {
      return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max);
    }
    function ij(t, e) {
      return iF(t.x, e.x) && iF(t.y, e.y);
    }
    function iI(t) {
      return ex(t.x) / ex(t.y);
    }
    function iO(t, e) {
      return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint;
    }
    var iN = t.i(93709);
    class iU {
      constructor() {
        this.members = [];
      }
      add(t) {
        (0, iN.addUniqueItem)(this.members, t);
        for (let e = this.members.length - 1; e >= 0; e--) {
          let i = this.members[e];
          if (i === t || i === this.lead || i === this.prevLead) continue;
          let s = i.instance;
          (s && !1 !== s.isConnected) || i.snapshot || ((0, iN.removeItem)(this.members, i), i.unmount());
        }
        t.scheduleRender();
      }
      remove(t) {
        if (((0, iN.removeItem)(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead)) {
          let t = this.members[this.members.length - 1];
          t && this.promote(t);
        }
      }
      relegate(t) {
        for (let e = this.members.indexOf(t) - 1; e >= 0; e--) {
          let t = this.members[e];
          if (!1 !== t.isPresent && t.instance?.isConnected !== !1) return (this.promote(t), !0);
        }
        return !1;
      }
      promote(t, e) {
        let i = this.lead;
        if (t !== i && ((this.prevLead = i), (this.lead = t), t.show(), i)) {
          (i.updateSnapshot(), t.scheduleRender());
          let { layoutDependency: s } = i.options,
            { layoutDependency: n } = t.options;
          ((void 0 === s || s !== n) &&
            ((t.resumeFrom = i),
            e && (i.preserveOpacity = !0),
            i.snapshot && ((t.snapshot = i.snapshot), (t.snapshot.latestValues = i.animationValues || i.latestValues)),
            t.root?.isUpdating && (t.isLayoutDirty = !0)),
            !1 === t.options.crossfade && i.hide());
        }
      }
      exitAnimationComplete() {
        this.members.forEach((t) => {
          (t.options.onExitComplete?.(), t.resumingFrom?.options.onExitComplete?.());
        });
      }
      scheduleRender() {
        this.members.forEach((t) => t.instance && t.scheduleRender(!1));
      }
      removeLeadSnapshot() {
        this.lead?.snapshot && (this.lead.snapshot = void 0);
      }
    }
    function iW(t, e) {
      return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
    }
    let i$ = {
        correct: (t, e) => {
          if (!e.target) return t;
          if ("string" == typeof t)
            if (!ev.px.test(t)) return t;
            else t = parseFloat(t);
          let i = iW(t, e.target.x),
            s = iW(t, e.target.y);
          return `${i}% ${s}%`;
        },
      },
      iz = {
        borderRadius: { ...i$, applyTo: [...ip] },
        borderTopLeftRadius: i$,
        borderTopRightRadius: i$,
        borderBottomLeftRadius: i$,
        borderBottomRightRadius: i$,
        boxShadow: {
          correct: (t, { treeScale: e, projectionDelta: i }) => {
            let s = P.complex.parse(t);
            if (s.length > 5) return t;
            let n = P.complex.createTransformer(t),
              r = +("number" != typeof s[0]),
              o = i.x.scale * e.x,
              a = i.y.scale * e.y;
            ((s[0 + r] /= o), (s[1 + r] /= a));
            let l = (0, D.mixNumber)(o, a, 0.5);
            return ("number" == typeof s[2 + r] && (s[2 + r] /= l), "number" == typeof s[3 + r] && (s[3 + r] /= l), n(s));
          },
        },
      },
      iG = (t, e) => t.depth - e.depth;
    class iH {
      constructor() {
        ((this.children = []), (this.isDirty = !1));
      }
      add(t) {
        ((0, iN.addUniqueItem)(this.children, t), (this.isDirty = !0));
      }
      remove(t) {
        ((0, iN.removeItem)(this.children, t), (this.isDirty = !0));
      }
      forEach(t) {
        (this.isDirty && this.children.sort(iG), (this.isDirty = !1), this.children.forEach(t));
      }
    }
    var iK = t.i(35403);
    Object.assign(id.scaleCorrectors, { ...iz, ...id.scaleCorrectors });
    let iY = ["", "X", "Y", "Z"],
      iX = 0;
    function i_(t, e, i, s) {
      let { latestValues: n } = e;
      n[t] && ((i[t] = n[t]), e.setStaticValue(t, 0), s && (s[t] = 0));
    }
    function iq({ attachResizeListener: t, defaultParent: e, measureScroll: i, checkIsScrollRoot: s, resetTransform: n }) {
      return class {
        constructor(t = {}, i = e?.()) {
          ((this.id = iX++),
            (this.animationId = 0),
            (this.animationCommitId = 0),
            (this.children = new Set()),
            (this.options = {}),
            (this.isTreeAnimating = !1),
            (this.isAnimationBlocked = !1),
            (this.isLayoutDirty = !1),
            (this.isProjectionDirty = !1),
            (this.isSharedProjectionDirty = !1),
            (this.isTransformDirty = !1),
            (this.updateManuallyBlocked = !1),
            (this.updateBlockedByResize = !1),
            (this.isUpdating = !1),
            (this.isSVG = !1),
            (this.needsReset = !1),
            (this.shouldResetTransform = !1),
            (this.hasCheckedOptimisedAppear = !1),
            (this.treeScale = { x: 1, y: 1 }),
            (this.eventHandlers = new Map()),
            (this.hasTreeAnimated = !1),
            (this.updateScheduled = !1),
            (this.scheduleUpdate = () => this.update()),
            (this.projectionUpdateScheduled = !1),
            (this.checkUpdateFailed = () => {
              this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
            }),
            (this.updateProjection = () => {
              ((this.projectionUpdateScheduled = !1),
                this.nodes.forEach(iQ),
                this.nodes.forEach(i7),
                this.nodes.forEach(st),
                this.nodes.forEach(i0));
            }),
            (this.resolvedRelativeTargetAt = 0),
            (this.hasProjected = !1),
            (this.isVisible = !0),
            (this.animationProgress = 0),
            (this.sharedNodes = new Map()),
            (this.latestValues = t),
            (this.root = i ? i.root || i : this),
            (this.path = i ? [...i.path, i] : []),
            (this.parent = i),
            (this.depth = i ? i.depth + 1 : 0));
          for (let t = 0; t < this.path.length; t++) this.path[t].shouldResetTransform = !0;
          this.root === this && (this.nodes = new iH());
        }
        addEventListener(t, e) {
          return (this.eventHandlers.has(t) || this.eventHandlers.set(t, new iu.SubscriptionManager()), this.eventHandlers.get(t).add(e));
        }
        notifyListeners(t, ...e) {
          let i = this.eventHandlers.get(t);
          i && i.notify(...e);
        }
        hasListeners(t) {
          return this.eventHandlers.has(t);
        }
        mount(e) {
          if (this.instance) return;
          ((this.isSVG = eV(e) && !(eV(e) && "svg" === e.tagName)), (this.instance = e));
          let { layoutId: i, layout: s, visualElement: n } = this.options;
          if (
            (n && !n.current && n.mount(e),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            this.root.hasTreeAnimated && (s || i) && (this.isLayoutDirty = !0),
            t)
          ) {
            let i,
              s = 0,
              n = () => (this.root.updateBlockedByResize = !1);
            (G.frame.read(() => {
              s = window.innerWidth;
            }),
              t(e, () => {
                let t = window.innerWidth;
                if (t !== s) {
                  let e, r;
                  ((s = t),
                    (this.root.updateBlockedByResize = !0),
                    i && i(),
                    (e = g.time.now()),
                    (r = ({ timestamp: t }) => {
                      let i = t - e;
                      i >= 250 && ((0, G.cancelFrame)(r), n(i - 250));
                    }),
                    G.frame.setup(r, !0),
                    (i = () => (0, G.cancelFrame)(r)),
                    e7.hasAnimatedSinceResize && ((e7.hasAnimatedSinceResize = !1), this.nodes.forEach(i8)));
                }
              }));
          }
          (i && this.root.registerSharedNode(i, this),
            !1 !== this.options.animate &&
              n &&
              (i || s) &&
              this.addEventListener("didUpdate", ({ delta: t, hasLayoutChanged: e, hasRelativeLayoutChanged: i, layout: s }) => {
                if (this.isTreeAnimationBlocked()) {
                  ((this.target = void 0), (this.relativeTarget = void 0));
                  return;
                }
                let r = this.options.transition || n.getDefaultTransition() || so,
                  { onLayoutAnimationStart: o, onLayoutAnimationComplete: a } = n.getProps(),
                  h = !this.targetLayout || !ij(this.targetLayout, s),
                  u = !e && i;
                if (this.options.layoutRoot || this.resumeFrom || u || (e && (h || !this.currentAnimation))) {
                  this.resumeFrom && ((this.resumingFrom = this.resumeFrom), (this.resumingFrom.resumingFrom = void 0));
                  let e = { ...l(r, "layout"), onPlay: o, onComplete: a };
                  ((n.shouldReduceMotion || this.options.layoutRoot) && ((e.delay = 0), (e.type = !1)),
                    this.startAnimation(e),
                    this.setAnimationOrigin(t, u, e.path));
                } else (e || i8(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete());
                this.targetLayout = s;
              }));
        }
        unmount() {
          (this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this));
          let t = this.getStack();
          (t && t.remove(this),
            this.parent && this.parent.children.delete(this),
            (this.instance = void 0),
            this.eventHandlers.clear(),
            (0, G.cancelFrame)(this.updateProjection));
        }
        blockUpdate() {
          this.updateManuallyBlocked = !0;
        }
        unblockUpdate() {
          this.updateManuallyBlocked = !1;
        }
        isUpdateBlocked() {
          return this.updateManuallyBlocked || this.updateBlockedByResize;
        }
        isTreeAnimationBlocked() {
          return this.isAnimationBlocked || (this.parent && this.parent.isTreeAnimationBlocked()) || !1;
        }
        startUpdate() {
          !this.isUpdateBlocked() && ((this.isUpdating = !0), this.nodes && this.nodes.forEach(se), this.animationId++);
        }
        getTransformTemplate() {
          let { visualElement: t } = this.options;
          return t && t.getProps().transformTemplate;
        }
        willUpdate(t = !0) {
          if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
            this.options.onExitComplete && this.options.onExitComplete();
            return;
          }
          if (
            (window.MotionCancelOptimisedAnimation &&
              !this.hasCheckedOptimisedAppear &&
              (function t(e) {
                if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
                let { visualElement: i } = e.options;
                if (!i) return;
                let s = f(i);
                if (window.MotionHasOptimisedAnimation(s, "transform")) {
                  let { layout: t, layoutId: i } = e.options;
                  window.MotionCancelOptimisedAnimation(s, "transform", G.frame, !(t || i));
                }
                let { parent: n } = e;
                n && !n.hasCheckedOptimisedAppear && t(n);
              })(this),
            this.root.isUpdating || this.root.startUpdate(),
            this.isLayoutDirty)
          )
            return;
          this.isLayoutDirty = !0;
          for (let t = 0; t < this.path.length; t++) {
            let e = this.path[t];
            ((e.shouldResetTransform = !0),
              ("string" == typeof e.latestValues.x || "string" == typeof e.latestValues.y) && (e.isLayoutDirty = !0),
              e.updateScroll("snapshot"),
              e.options.layoutRoot && e.willUpdate(!1));
          }
          let { layoutId: e, layout: i } = this.options;
          if (void 0 === e && !i) return;
          let s = this.getTransformTemplate();
          ((this.prevTransformTemplateValue = s ? s(this.latestValues, "") : void 0),
            this.updateSnapshot(),
            t && this.notifyListeners("willUpdate"));
        }
        update() {
          if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
            let t = this.updateBlockedByResize;
            (this.unblockUpdate(),
              (this.updateBlockedByResize = !1),
              this.clearAllSnapshots(),
              t && this.nodes.forEach(i2),
              this.nodes.forEach(i5));
            return;
          }
          if (this.animationId <= this.animationCommitId) return void this.nodes.forEach(i9);
          ((this.animationCommitId = this.animationId),
            this.isUpdating
              ? ((this.isUpdating = !1),
                this.nodes.forEach(i3),
                this.nodes.forEach(i4),
                this.nodes.forEach(i6),
                this.nodes.forEach(iZ),
                this.nodes.forEach(iJ))
              : this.nodes.forEach(i9),
            this.clearAllSnapshots());
          let t = g.time.now();
          ((z.frameData.delta = (0, x.clamp)(0, 1e3 / 60, t - z.frameData.timestamp)),
            (z.frameData.timestamp = t),
            (z.frameData.isProcessing = !0),
            G.frameSteps.update.process(z.frameData),
            G.frameSteps.preRender.process(z.frameData),
            G.frameSteps.render.process(z.frameData),
            (z.frameData.isProcessing = !1));
        }
        didUpdate() {
          this.updateScheduled || ((this.updateScheduled = !0), it.microtask.read(this.scheduleUpdate));
        }
        clearAllSnapshots() {
          (this.nodes.forEach(i1), this.sharedNodes.forEach(si));
        }
        scheduleUpdateProjection() {
          this.projectionUpdateScheduled || ((this.projectionUpdateScheduled = !0), G.frame.preRender(this.updateProjection, !1, !0));
        }
        scheduleCheckAfterUnmount() {
          G.frame.postRender(() => {
            this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
          });
        }
        updateSnapshot() {
          !this.snapshot &&
            this.instance &&
            ((this.snapshot = this.measure()),
            !this.snapshot || ex(this.snapshot.measuredBox.x) || ex(this.snapshot.measuredBox.y) || (this.snapshot = void 0));
        }
        updateLayout() {
          if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
          if (this.resumeFrom && !this.resumeFrom.instance) for (let t = 0; t < this.path.length; t++) this.path[t].updateScroll();
          let t = this.layout;
          ((this.layout = this.measure(!1)),
            this.layoutCorrected || (this.layoutCorrected = (0, ed.createBox)()),
            (this.isLayoutDirty = !1),
            (this.projectionDelta = void 0),
            this.notifyListeners("measure", this.layout.layoutBox));
          let { visualElement: e } = this.options;
          e && e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : void 0);
        }
        updateScroll(t = "measure") {
          let e = !!(this.options.layoutScroll && this.instance);
          if (
            (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1), e && this.instance)
          ) {
            let e = s(this.instance);
            this.scroll = {
              animationId: this.root.animationId,
              phase: t,
              isRoot: e,
              offset: i(this.instance),
              wasRoot: this.scroll ? this.scroll.isRoot : e,
            };
          }
        }
        resetTransform() {
          if (!n) return;
          let t = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
            e = this.projectionDelta && !iL(this.projectionDelta),
            i = this.getTransformTemplate(),
            s = i ? i(this.latestValues, "") : void 0,
            r = s !== this.prevTransformTemplateValue;
          t &&
            this.instance &&
            (e || (0, iK.hasTransform)(this.latestValues) || r) &&
            (n(this.instance, s), (this.shouldResetTransform = !1), this.scheduleRender());
        }
        measure(t = !0) {
          var e;
          let i = this.measurePageBox(),
            s = this.removeElementScroll(i);
          return (
            t && (s = this.removeTransform(s)),
            sh((e = s).x),
            sh(e.y),
            { animationId: this.root.animationId, measuredBox: i, layoutBox: s, latestValues: {}, source: this.id }
          );
        }
        measurePageBox() {
          let { visualElement: t } = this.options;
          if (!t) return (0, ed.createBox)();
          let e = t.measureViewportBox();
          if (!(this.scroll?.wasRoot || this.path.some(sc))) {
            let { scroll: t } = this.root;
            t && ((0, iV.translateAxis)(e.x, t.offset.x), (0, iV.translateAxis)(e.y, t.offset.y));
          }
          return e;
        }
        removeElementScroll(t) {
          let e = (0, ed.createBox)();
          if ((iP(e, t), this.scroll?.wasRoot)) return e;
          for (let i = 0; i < this.path.length; i++) {
            let s = this.path[i],
              { scroll: n, options: r } = s;
            s !== this.root &&
              n &&
              r.layoutScroll &&
              (n.wasRoot && iP(e, t), (0, iV.translateAxis)(e.x, n.offset.x), (0, iV.translateAxis)(e.y, n.offset.y));
          }
          return e;
        }
        applyTransform(t, e = !1, i) {
          let s = i || (0, ed.createBox)();
          iP(s, t);
          for (let t = 0; t < this.path.length; t++) {
            let i = this.path[t];
            (!e &&
              i.options.layoutScroll &&
              i.scroll &&
              i !== i.root &&
              ((0, iV.translateAxis)(s.x, -i.scroll.offset.x), (0, iV.translateAxis)(s.y, -i.scroll.offset.y)),
              (0, iK.hasTransform)(i.latestValues) && (0, iV.transformBox)(s, i.latestValues, i.layout?.layoutBox));
          }
          return ((0, iK.hasTransform)(this.latestValues) && (0, iV.transformBox)(s, this.latestValues, this.layout?.layoutBox), s);
        }
        removeTransform(t) {
          let e = (0, ed.createBox)();
          iP(e, t);
          for (let t = 0; t < this.path.length; t++) {
            let i,
              s = this.path[t];
            (0, iK.hasTransform)(s.latestValues) &&
              (s.instance && ((0, iK.hasScale)(s.latestValues) && s.updateSnapshot(), iP((i = (0, ed.createBox)()), s.measurePageBox())),
              ik(e, s.latestValues, s.snapshot?.layoutBox, i));
          }
          return ((0, iK.hasTransform)(this.latestValues) && ik(e, this.latestValues), e);
        }
        setTargetDelta(t) {
          ((this.targetDelta = t), this.root.scheduleUpdateProjection(), (this.isProjectionDirty = !0));
        }
        setOptions(t) {
          this.options = { ...this.options, ...t, crossfade: void 0 === t.crossfade || t.crossfade };
        }
        clearMeasurements() {
          ((this.scroll = void 0),
            (this.layout = void 0),
            (this.snapshot = void 0),
            (this.prevTransformTemplateValue = void 0),
            (this.targetDelta = void 0),
            (this.target = void 0),
            (this.isLayoutDirty = !1));
        }
        forceRelativeParentToResolveTarget() {
          this.relativeParent &&
            this.relativeParent.resolvedRelativeTargetAt !== z.frameData.timestamp &&
            this.relativeParent.resolveTargetDelta(!0);
        }
        resolveTargetDelta(t = !1) {
          let e = this.getLead();
          (this.isProjectionDirty || (this.isProjectionDirty = e.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = e.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = e.isSharedProjectionDirty));
          let i = !!this.resumingFrom || this !== e;
          if (!(
            t ||
            (i && this.isSharedProjectionDirty) ||
            this.isProjectionDirty ||
            this.parent?.isProjectionDirty ||
            this.attemptToResolveRelativeTarget ||
            this.root.updateBlockedByResize
          ))
            return;
          let { layout: s, layoutId: n } = this.options;
          if (!this.layout || !(s || n)) return;
          this.resolvedRelativeTargetAt = z.frameData.timestamp;
          let r = this.getClosestProjectingParent();
          if (
            (this.targetDelta ||
              this.relativeTarget ||
              (!1 !== this.options.layoutAnchor && r && r.layout
                ? this.createRelativeTarget(r, this.layout.layoutBox, r.layout.layoutBox)
                : this.removeRelativeTarget()),
            this.relativeTarget || this.targetDelta)
          ) {
            if (
              (this.target || ((this.target = (0, ed.createBox)()), (this.targetWithTransforms = (0, ed.createBox)())),
              this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target)
            ) {
              var o, a, l, h;
              (this.forceRelativeParentToResolveTarget(),
                (o = this.target),
                (a = this.relativeTarget),
                (l = this.relativeParent.target),
                (h = this.options.layoutAnchor || void 0),
                ew(o.x, a.x, l.x, h?.x),
                ew(o.y, a.y, l.y, h?.y));
            } else
              this.targetDelta
                ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target) : iP(this.target, this.layout.layoutBox),
                  (0, iV.applyBoxDelta)(this.target, this.targetDelta))
                : iP(this.target, this.layout.layoutBox);
            this.attemptToResolveRelativeTarget &&
              ((this.attemptToResolveRelativeTarget = !1),
              !1 !== this.options.layoutAnchor &&
              r &&
              !!r.resumingFrom == !!this.resumingFrom &&
              !r.options.layoutScroll &&
              r.target &&
              1 !== this.animationProgress
                ? this.createRelativeTarget(r, this.target, r.target)
                : (this.relativeParent = this.relativeTarget = void 0));
          }
        }
        getClosestProjectingParent() {
          if (!(!this.parent || (0, iK.hasScale)(this.parent.latestValues) || (0, iK.has2DTranslate)(this.parent.latestValues)))
            if (this.parent.isProjecting()) return this.parent;
            else return this.parent.getClosestProjectingParent();
        }
        isProjecting() {
          return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
        }
        createRelativeTarget(t, e, i) {
          ((this.relativeParent = t),
            this.forceRelativeParentToResolveTarget(),
            (this.relativeTarget = (0, ed.createBox)()),
            (this.relativeTargetOrigin = (0, ed.createBox)()),
            eP(this.relativeTargetOrigin, e, i, this.options.layoutAnchor || void 0),
            iP(this.relativeTarget, this.relativeTargetOrigin));
        }
        removeRelativeTarget() {
          this.relativeParent = this.relativeTarget = void 0;
        }
        calcProjection() {
          let t = this.getLead(),
            e = !!this.resumingFrom || this !== t,
            i = !0;
          if (
            ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (i = !1),
            e && (this.isSharedProjectionDirty || this.isTransformDirty) && (i = !1),
            this.resolvedRelativeTargetAt === z.frameData.timestamp && (i = !1),
            i)
          )
            return;
          let { layout: s, layoutId: n } = this.options;
          if (
            ((this.isTreeAnimating = !!((this.parent && this.parent.isTreeAnimating) || this.currentAnimation || this.pendingAnimation)),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(s || n))
          )
            return;
          iP(this.layoutCorrected, this.layout.layoutBox);
          let r = this.treeScale.x,
            o = this.treeScale.y;
          ((0, iV.applyTreeDeltas)(this.layoutCorrected, this.treeScale, this.path, e),
            t.layout &&
              !t.target &&
              (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
              ((t.target = t.layout.layoutBox), (t.targetWithTransforms = (0, ed.createBox)())));
          let { target: a } = t;
          if (!a) {
            this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
            return;
          }
          (this.projectionDelta && this.prevProjectionDelta
            ? (iA(this.prevProjectionDelta.x, this.projectionDelta.x), iA(this.prevProjectionDelta.y, this.projectionDelta.y))
            : this.createProjectionDeltas(),
            eb(this.projectionDelta, this.layoutCorrected, a, this.latestValues),
            (this.treeScale.x === r &&
              this.treeScale.y === o &&
              iO(this.projectionDelta.x, this.prevProjectionDelta.x) &&
              iO(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
              ((this.hasProjected = !0), this.scheduleRender(), this.notifyListeners("projectionUpdate", a)));
        }
        hide() {
          this.isVisible = !1;
        }
        show() {
          this.isVisible = !0;
        }
        scheduleRender(t = !0) {
          if ((this.options.visualElement?.scheduleRender(), t)) {
            let t = this.getStack();
            t && t.scheduleRender();
          }
          this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
        }
        createProjectionDeltas() {
          ((this.prevProjectionDelta = (0, ed.createDelta)()),
            (this.projectionDelta = (0, ed.createDelta)()),
            (this.projectionDeltaWithTransform = (0, ed.createDelta)()));
        }
        setAnimationOrigin(t, e = !1, i) {
          let s,
            n = this.snapshot,
            r = n ? n.latestValues : {},
            o = { ...this.latestValues },
            a = (0, ed.createDelta)();
          ((this.relativeParent && this.relativeParent.options.layoutRoot) || (this.relativeTarget = this.relativeTargetOrigin = void 0),
            (this.attemptToResolveRelativeTarget = !e));
          let l = (0, ed.createBox)(),
            h = (n ? n.source : void 0) !== (this.layout ? this.layout.source : void 0),
            u = this.getStack(),
            c = !u || u.members.length <= 1,
            d = !!(h && !c && !0 === this.options.crossfade && !this.path.some(sr));
          this.animationProgress = 0;
          let m = i?.interpolateProjection(t);
          ((this.mixTargetDelta = (e) => {
            let i = e / 1e3,
              n = m?.(i);
            if (
              (n
                ? ((a.x.translate = n.x),
                  (a.x.scale = (0, D.mixNumber)(t.x.scale, 1, i)),
                  (a.x.origin = t.x.origin),
                  (a.x.originPoint = t.x.originPoint),
                  (a.y.translate = n.y),
                  (a.y.scale = (0, D.mixNumber)(t.y.scale, 1, i)),
                  (a.y.origin = t.y.origin),
                  (a.y.originPoint = t.y.originPoint))
                : (ss(a.x, t.x, i), ss(a.y, t.y, i)),
              this.setTargetDelta(a),
              this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout)
            ) {
              var u, p, f, y, g, v;
              (eP(l, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0),
                (f = this.relativeTarget),
                (y = this.relativeTargetOrigin),
                (g = l),
                (v = i),
                sn(f.x, y.x, g.x, v),
                sn(f.y, y.y, g.y, v),
                s && ((u = this.relativeTarget), (p = s), iB(u.x, p.x) && iB(u.y, p.y)) && (this.isProjectionDirty = !1),
                s || (s = (0, ed.createBox)()),
                iP(s, this.relativeTarget));
            }
            (h &&
              ((this.animationValues = o),
              (function (t, e, i, s, n, r) {
                n
                  ? ((t.opacity = (0, D.mixNumber)(0, i.opacity ?? 1, iT(s))), (t.opacityExit = (0, D.mixNumber)(e.opacity ?? 1, 0, ib(s))))
                  : r && (t.opacity = (0, D.mixNumber)(e.opacity ?? 1, i.opacity ?? 1, s));
                for (let n = 0; n < ig; n++) {
                  let r = ip[n],
                    o = ix(e, r),
                    a = ix(i, r);
                  (void 0 !== o || void 0 !== a) &&
                    (o || (o = 0),
                    a || (a = 0),
                    0 === o || 0 === a || iv(o) === iv(a)
                      ? ((t[r] = Math.max((0, D.mixNumber)(iy(o), iy(a), s), 0)),
                        (ev.percent.test(a) || ev.percent.test(o)) && (t[r] += "%"))
                      : (t[r] = a));
                }
                (e.rotate || i.rotate) && (t.rotate = (0, D.mixNumber)(e.rotate || 0, i.rotate || 0, s));
              })(o, r, this.latestValues, i, d, c)),
              n &&
                void 0 !== n.rotate &&
                (this.animationValues || (this.animationValues = o), (this.animationValues.pathRotation = n.rotate)),
              this.root.scheduleUpdateProjection(),
              this.scheduleRender(),
              (this.animationProgress = i));
          }),
            this.mixTargetDelta(1e3 * !!this.options.layoutRoot));
        }
        startAnimation(t) {
          (this.notifyListeners("animationStart"),
            this.currentAnimation?.stop(),
            this.resumingFrom?.currentAnimation?.stop(),
            this.pendingAnimation && ((0, G.cancelFrame)(this.pendingAnimation), (this.pendingAnimation = void 0)),
            (this.pendingAnimation = G.frame.update(() => {
              ((e7.hasAnimatedSinceResize = !0),
                this.motionValue || (this.motionValue = (0, u.motionValue)(0)),
                this.motionValue.jump(0, !1),
                (this.currentAnimation = ic(this.motionValue, [0, 1e3], {
                  ...t,
                  velocity: 0,
                  isSync: !0,
                  onUpdate: (e) => {
                    (this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e));
                  },
                  onComplete: () => {
                    (t.onComplete && t.onComplete(), this.completeAnimation());
                  },
                })),
                (0, tj.notifyLayoutAnimationStart)(this.currentAnimation, this),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                (this.pendingAnimation = void 0));
            })));
        }
        completeAnimation() {
          this.resumingFrom && ((this.resumingFrom.currentAnimation = void 0), (this.resumingFrom.preserveOpacity = void 0));
          let t = this.getStack();
          (t && t.exitAnimationComplete(),
            (this.resumingFrom = this.currentAnimation = this.animationValues = void 0),
            this.notifyListeners("animationComplete"));
        }
        finishAnimation() {
          (this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()),
            this.completeAnimation());
        }
        applyTransformsToTarget() {
          let t = this.getLead(),
            { targetWithTransforms: e, layout: i, latestValues: s } = t,
            { target: n } = t;
          if (e && n && i) {
            if (this !== t && this.layout && i && su(this.options.animationType, this.layout.layoutBox, i.layoutBox)) {
              n = this.target || (0, ed.createBox)();
              let e = ex(this.layout.layoutBox.x);
              ((n.x.min = t.target.x.min), (n.x.max = n.x.min + e));
              let i = ex(this.layout.layoutBox.y);
              ((n.y.min = t.target.y.min), (n.y.max = n.y.min + i));
            }
            (iP(e, n), (0, iV.transformBox)(e, s), eb(this.projectionDeltaWithTransform, this.layoutCorrected, e, s));
          }
        }
        registerSharedNode(t, e) {
          (this.sharedNodes.has(t) || this.sharedNodes.set(t, new iU()), this.sharedNodes.get(t).add(e));
          let i = e.options.initialPromotionConfig;
          e.promote({
            transition: i ? i.transition : void 0,
            preserveFollowOpacity: i && i.shouldPreserveFollowOpacity ? i.shouldPreserveFollowOpacity(e) : void 0,
          });
        }
        isLead() {
          let t = this.getStack();
          return !t || t.lead === this;
        }
        getLead() {
          let { layoutId: t } = this.options;
          return (t && this.getStack()?.lead) || this;
        }
        getPrevLead() {
          let { layoutId: t } = this.options;
          return t ? this.getStack()?.prevLead : void 0;
        }
        getStack() {
          let { layoutId: t } = this.options;
          if (t) return this.root.sharedNodes.get(t);
        }
        promote({ needsReset: t, transition: e, preserveFollowOpacity: i } = {}) {
          let s = this.getStack();
          (s && s.promote(this, i),
            t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
            e && this.setOptions({ transition: e }));
        }
        relegate() {
          let t = this.getStack();
          return !!t && t.relegate(this);
        }
        resetSkewAndRotation() {
          let { visualElement: t } = this.options;
          if (!t) return;
          let e = !1,
            { latestValues: i } = t;
          if (((i.z || i.rotate || i.rotateX || i.rotateY || i.rotateZ || i.skewX || i.skewY) && (e = !0), !e)) return;
          let s = {};
          i.z && i_("z", t, s, this.animationValues);
          for (let e = 0; e < iY.length; e++)
            (i_(`rotate${iY[e]}`, t, s, this.animationValues), i_(`skew${iY[e]}`, t, s, this.animationValues));
          for (let e in (t.render(), s)) (t.setStaticValue(e, s[e]), this.animationValues && (this.animationValues[e] = s[e]));
          t.scheduleRender();
        }
        applyProjectionStyles(t, e) {
          if (!this.instance || this.isSVG) return;
          if (!this.isVisible) {
            t.visibility = "hidden";
            return;
          }
          let i = this.getTransformTemplate();
          if (this.needsReset) {
            ((this.needsReset = !1),
              (t.visibility = ""),
              (t.opacity = ""),
              (t.pointerEvents = (0, im.resolveMotionValue)(e?.pointerEvents) || ""),
              (t.transform = i ? i(this.latestValues, "") : "none"));
            return;
          }
          let s = this.getLead();
          if (!this.projectionDelta || !this.layout || !s.target) {
            (this.options.layoutId &&
              ((t.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1),
              (t.pointerEvents = (0, im.resolveMotionValue)(e?.pointerEvents) || "")),
              this.hasProjected &&
                !(0, iK.hasTransform)(this.latestValues) &&
                ((t.transform = i ? i({}, "") : "none"), (this.hasProjected = !1)));
            return;
          }
          t.visibility = "";
          let n = s.animationValues || s.latestValues;
          this.applyTransformsToTarget();
          let r = (function (t, e, i) {
            let s = "",
              n = t.x.translate / e.x,
              r = t.y.translate / e.y,
              o = i?.z || 0;
            if (
              ((n || r || o) && (s = `translate3d(${n}px, ${r}px, ${o}px) `),
              (1 !== e.x || 1 !== e.y) && (s += `scale(${1 / e.x}, ${1 / e.y}) `),
              i)
            ) {
              let { transformPerspective: t, rotate: e, pathRotation: n, rotateX: r, rotateY: o, skewX: a, skewY: l } = i;
              (t && (s = `perspective(${t}px) ${s}`),
                e && (s += `rotate(${e}deg) `),
                n && (s += `rotate(${n}deg) `),
                r && (s += `rotateX(${r}deg) `),
                o && (s += `rotateY(${o}deg) `),
                a && (s += `skewX(${a}deg) `),
                l && (s += `skewY(${l}deg) `));
            }
            let a = t.x.scale * e.x,
              l = t.y.scale * e.y;
            return ((1 !== a || 1 !== l) && (s += `scale(${a}, ${l})`), s || "none");
          })(this.projectionDeltaWithTransform, this.treeScale, n);
          (i && (r = i(n, r)), (t.transform = r));
          let { x: o, y: a } = this.projectionDelta;
          for (let e in ((t.transformOrigin = `${100 * o.origin}% ${100 * a.origin}% 0`),
          s.animationValues
            ? (t.opacity =
                s === this
                  ? (n.opacity ?? this.latestValues.opacity ?? 1)
                  : this.preserveOpacity
                    ? this.latestValues.opacity
                    : n.opacityExit)
            : (t.opacity = s === this ? (void 0 !== n.opacity ? n.opacity : "") : void 0 !== n.opacityExit ? n.opacityExit : 0),
          id.scaleCorrectors)) {
            if (void 0 === n[e]) continue;
            let { correct: i, applyTo: o, isCSSVariable: a } = id.scaleCorrectors[e],
              l = "none" === r ? n[e] : i(n[e], s);
            if (o) {
              let e = o.length;
              for (let i = 0; i < e; i++) t[o[i]] = l;
            } else a ? (this.options.visualElement.renderState.vars[e] = l) : (t[e] = l);
          }
          this.options.layoutId && (t.pointerEvents = s === this ? (0, im.resolveMotionValue)(e?.pointerEvents) || "" : "none");
        }
        clearSnapshot() {
          this.resumeFrom = this.snapshot = void 0;
        }
        resetTree() {
          (this.root.nodes.forEach((t) => t.currentAnimation?.stop()), this.root.nodes.forEach(i5), this.root.sharedNodes.clear());
        }
      };
    }
    function iZ(t) {
      t.updateLayout();
    }
    function iJ(t) {
      let e = t.resumeFrom?.snapshot || t.snapshot;
      if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
        let { layoutBox: i, measuredBox: s } = t.layout,
          { animationType: n } = t.options,
          r = e.source !== t.layout.source;
        if ("size" === n)
          em((t) => {
            let s = r ? e.measuredBox[t] : e.layoutBox[t],
              n = ex(s);
            ((s.min = i[t].min), (s.max = s.min + n));
          });
        else if ("x" === n || "y" === n) {
          let t = "x" === n ? "y" : "x";
          iS(r ? e.measuredBox[t] : e.layoutBox[t], i[t]);
        } else
          su(n, e.layoutBox, i) &&
            em((s) => {
              let n = r ? e.measuredBox[s] : e.layoutBox[s],
                o = ex(i[s]);
              ((n.max = n.min + o),
                t.relativeTarget &&
                  !t.currentAnimation &&
                  ((t.isProjectionDirty = !0), (t.relativeTarget[s].max = t.relativeTarget[s].min + o)));
            });
        let o = (0, ed.createDelta)();
        eb(o, i, e.layoutBox);
        let a = (0, ed.createDelta)();
        r ? eb(a, t.applyTransform(s, !0), e.measuredBox) : eb(a, i, e.layoutBox);
        let l = !iL(o),
          h = !1;
        if (!t.resumeFrom) {
          let s = t.getClosestProjectingParent();
          if (s && !s.resumeFrom) {
            let { snapshot: n, layout: r } = s;
            if (n && r) {
              let o = t.options.layoutAnchor || void 0,
                a = (0, ed.createBox)();
              eP(a, e.layoutBox, n.layoutBox, o);
              let l = (0, ed.createBox)();
              (eP(l, i, r.layoutBox, o),
                ij(a, l) || (h = !0),
                s.options.layoutRoot && ((t.relativeTarget = l), (t.relativeTargetOrigin = a), (t.relativeParent = s)));
            }
          }
        }
        t.notifyListeners("didUpdate", {
          layout: i,
          snapshot: e,
          delta: a,
          layoutDelta: o,
          hasLayoutChanged: l,
          hasRelativeLayoutChanged: h,
        });
      } else if (t.isLead()) {
        let { onExitComplete: e } = t.options;
        e && e();
      }
      t.options.transition = void 0;
    }
    function iQ(t) {
      t.parent &&
        (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
        t.isSharedProjectionDirty ||
          (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)),
        t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
    }
    function i0(t) {
      t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
    }
    function i1(t) {
      t.clearSnapshot();
    }
    function i5(t) {
      t.clearMeasurements();
    }
    function i2(t) {
      ((t.isLayoutDirty = !0), t.updateLayout());
    }
    function i9(t) {
      t.isLayoutDirty = !1;
    }
    function i3(t) {
      t.isAnimationBlocked && t.layout && !t.isLayoutDirty && ((t.snapshot = t.layout), (t.isLayoutDirty = !0));
    }
    function i4(t) {
      t.relativeTarget &&
        t.relativeParent?.isLayoutDirty &&
        (t.currentAnimation ? (t.isLayoutDirty = !0) : ((t.targetDelta = void 0), t.removeRelativeTarget()));
    }
    function i6(t) {
      let { visualElement: e } = t.options;
      (e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform());
    }
    function i8(t) {
      (t.finishAnimation(), (t.targetDelta = t.relativeTarget = t.target = void 0), (t.isProjectionDirty = !0));
    }
    function i7(t) {
      t.resolveTargetDelta();
    }
    function st(t) {
      t.calcProjection();
    }
    function se(t) {
      t.resetSkewAndRotation();
    }
    function si(t) {
      t.removeLeadSnapshot();
    }
    function ss(t, e, i) {
      ((t.translate = (0, D.mixNumber)(e.translate, 0, i)),
        (t.scale = (0, D.mixNumber)(e.scale, 1, i)),
        (t.origin = e.origin),
        (t.originPoint = e.originPoint));
    }
    function sn(t, e, i, s) {
      ((t.min = (0, D.mixNumber)(e.min, i.min, s)), (t.max = (0, D.mixNumber)(e.max, i.max, s)));
    }
    function sr(t) {
      return t.animationValues && void 0 !== t.animationValues.opacityExit;
    }
    let so = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
      sa = (t) => "u" > typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t),
      sl = sa("applewebkit/") && !sa("chrome/") ? Math.round : ta.noop;
    function sh(t) {
      ((t.min = sl(t.min)), (t.max = sl(t.max)));
    }
    function su(t, e, i) {
      return "position" === t || ("preserve-aspect" === t && !(0.2 >= Math.abs(iI(e) - iI(i))));
    }
    function sc(t) {
      return t !== t.root && t.scroll?.wasRoot;
    }
    let sd = iq({
        attachResizeListener: (t, e) => ey(t, "resize", e),
        measureScroll: () => ({
          x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
          y: document.documentElement.scrollTop || document.body?.scrollTop || 0,
        }),
        checkIsScrollRoot: () => !0,
      }),
      sm = { current: void 0 },
      sp = iq({
        measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
        defaultParent: () => {
          if (!sm.current) {
            let t = new sd({});
            (t.mount(window), t.setOptions({ layoutScroll: !0 }), (sm.current = t));
          }
          return sm.current;
        },
        resetTransform: (t, e) => {
          t.style.transform = void 0 !== e ? e : "none";
        },
        checkIsScrollRoot: (t) => "fixed" === window.getComputedStyle(t).position,
      });
    var sf = r;
    function sy(t, e) {
      let i = eM(t),
        s = new AbortController();
      return [i, { passive: !0, ...e, signal: s.signal }, () => s.abort()];
    }
    function sg(t, e, i) {
      let { props: s } = t;
      t.animationState && s.whileHover && t.animationState.setActive("whileHover", "Start" === i);
      let n = s["onHover" + i];
      n && G.frame.postRender(() => n(e, eN(e)));
    }
    class sv extends sf.Feature {
      mount() {
        let { current: t } = this.node;
        t &&
          (this.unmount = (function (t, e, i = {}) {
            let [s, n, r] = sy(t, i);
            return (
              s.forEach((t) => {
                let i,
                  s = !1,
                  r = !1,
                  o = (e) => {
                    (i && (i(e), (i = void 0)), t.removeEventListener("pointerleave", l));
                  },
                  a = (t) => {
                    ((s = !1),
                      window.removeEventListener("pointerup", a),
                      window.removeEventListener("pointercancel", a),
                      r && ((r = !1), o(t)));
                  },
                  l = (t) => {
                    if ("touch" !== t.pointerType) {
                      if (s) {
                        r = !0;
                        return;
                      }
                      o(t);
                    }
                  };
                (t.addEventListener(
                  "pointerenter",
                  (s) => {
                    if ("touch" === s.pointerType || eg.x || eg.y) return;
                    r = !1;
                    let o = e(t, s);
                    "function" == typeof o && ((i = o), t.addEventListener("pointerleave", l, n));
                  },
                  n,
                ),
                  t.addEventListener(
                    "pointerdown",
                    () => {
                      ((s = !0), window.addEventListener("pointerup", a, n), window.addEventListener("pointercancel", a, n));
                    },
                    n,
                  ));
              }),
              r
            );
          })(t, (t, e) => (sg(this.node, e, "Start"), (t) => sg(this.node, t, "End"))));
      }
      unmount() {}
    }
    var sx = r;
    class sT extends sx.Feature {
      constructor() {
        (super(...arguments), (this.isActive = !1));
      }
      onFocus() {
        let t = !1;
        try {
          t = this.node.current.matches(":focus-visible");
        } catch (e) {
          t = !0;
        }
        t && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0), (this.isActive = !0));
      }
      onBlur() {
        this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1), (this.isActive = !1));
      }
      mount() {
        this.unmount = v(
          ey(this.node.current, "focus", () => this.onFocus()),
          ey(this.node.current, "blur", () => this.onBlur()),
        );
      }
      unmount() {}
    }
    var sb = r;
    function sw(t) {
      return eA(t) && "offsetHeight" in t && !("ownerSVGElement" in t);
    }
    t.s(["isHTMLElement", 0, sw], 51723);
    let sS = (t, e) => !!e && (t === e || sS(t, e.parentElement)),
      sP = new WeakSet();
    function sA(t) {
      return (e) => {
        "Enter" === e.key && t(e);
      };
    }
    function sV(t, e) {
      t.dispatchEvent(new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 }));
    }
    function sM(t) {
      return eO(t) && !(eg.x || eg.y);
    }
    let sC = new WeakSet();
    function sE(t, e, i) {
      let { props: s } = t;
      if (t.current instanceof HTMLButtonElement && t.current.disabled) return;
      t.animationState && s.whileTap && t.animationState.setActive("whileTap", "Start" === i);
      let n = s["onTap" + ("End" === i ? "" : i)];
      n && G.frame.postRender(() => n(e, eN(e)));
    }
    class sD extends sb.Feature {
      mount() {
        let { current: t } = this.node;
        if (!t) return;
        let { globalTapTarget: e, propagate: i } = this.node.props;
        this.unmount = (function (t, e, i = {}) {
          let [s, n, r] = sy(t, i),
            o = (t) => {
              let s = t.currentTarget;
              if (!sM(t) || sC.has(t)) return;
              (sP.add(s), i.stopPropagation && sC.add(t));
              let r = e(s, t),
                o = { ...n, capture: !0 },
                a = (t, e) => {
                  (window.removeEventListener("pointerup", l, o),
                    window.removeEventListener("pointercancel", h, o),
                    sP.has(s) && sP.delete(s),
                    sM(t) && "function" == typeof r && r(t, { success: e }));
                },
                l = (t) => {
                  a(t, s === window || s === document || i.useGlobalTarget || sS(s, t.target));
                },
                h = (t) => {
                  a(t, !1);
                };
              (window.addEventListener("pointerup", l, o), window.addEventListener("pointercancel", h, o));
            };
          return (
            s.forEach((t) => {
              ((i.useGlobalTarget ? window : t).addEventListener("pointerdown", o, n), sw(t)) &&
                (t.addEventListener("focus", (t) =>
                  ((t, e) => {
                    let i = t.currentTarget;
                    if (!i) return;
                    let s = sA(() => {
                      if (sP.has(i)) return;
                      sV(i, "down");
                      let t = sA(() => {
                        sV(i, "up");
                      });
                      (i.addEventListener("keyup", t, e), i.addEventListener("blur", () => sV(i, "cancel"), e));
                    });
                    (i.addEventListener("keydown", s, e), i.addEventListener("blur", () => i.removeEventListener("keydown", s), e));
                  })(t, n),
                ),
                ej.has(t.tagName) || !0 === t.isContentEditable || t.hasAttribute("tabindex") || (t.tabIndex = 0));
            }),
            r
          );
        })(t, (t, e) => (sE(this.node, e, "Start"), (t, { success: e }) => sE(this.node, t, e ? "End" : "Cancel")), {
          useGlobalTarget: e,
          stopPropagation: i?.tap === !1,
        });
      }
      unmount() {}
    }
    var sk = r;
    let sR = new WeakMap(),
      sL = new WeakMap(),
      sB = (t) => {
        let e = sR.get(t.target);
        e && e(t);
      },
      sF = (t) => {
        t.forEach(sB);
      },
      sj = { some: 0, all: 1 };
    class sI extends sk.Feature {
      constructor() {
        (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
      }
      startObserver() {
        var t;
        let e;
        this.stopObserver?.();
        let { viewport: i = {} } = this.node.getProps(),
          { root: s, margin: n, amount: r = "some", once: o } = i,
          a = { root: s ? s.current : void 0, rootMargin: n, threshold: "number" == typeof r ? r : sj[r] },
          l = (t) => {
            let { isIntersecting: e } = t;
            if (this.isInView === e || ((this.isInView = e), o && !e && this.hasEnteredView)) return;
            (e && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", e));
            let { onViewportEnter: i, onViewportLeave: s } = this.node.getProps(),
              n = e ? i : s;
            n && n(t);
          };
        this.stopObserver =
          ((t = this.node.current),
          (e = (function ({ root: t, ...e }) {
            let i = t || document;
            sL.has(i) || sL.set(i, {});
            let s = sL.get(i),
              n = JSON.stringify(e);
            return (s[n] || (s[n] = new IntersectionObserver(sF, { root: t, ...e })), s[n]);
          })(a)),
          sR.set(t, l),
          e.observe(t),
          () => {
            (sR.delete(t), e.unobserve(t));
          });
      }
      mount() {
        this.startObserver();
      }
      update() {
        if ("u" < typeof IntersectionObserver) return;
        let { props: t, prevProps: e } = this.node;
        ["amount", "margin", "root"].some(
          (function ({ viewport: t = {} }, { viewport: e = {} } = {}) {
            return (i) => t[i] !== e[i];
          })(t, e),
        ) && this.startObserver();
      }
      unmount() {
        (this.stopObserver?.(), (this.hasEnteredView = !1), (this.isInView = !1));
      }
    }
    let sO = (0, n.createMotionProxy)(
      {
        animation: { Feature: ea },
        exit: { Feature: eu },
        inView: { Feature: sI },
        tap: { Feature: sD },
        focus: { Feature: sT },
        hover: { Feature: sv },
        pan: { Feature: e6 },
        drag: { Feature: e9, ProjectionNode: sp, MeasureLayout: ih },
        layout: { ProjectionNode: sp, MeasureLayout: ih },
      },
      s.createDomVisualElement,
    );
    t.s(["motion", 0, sO], 57712);
  },
]);
