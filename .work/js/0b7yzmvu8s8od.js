(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  20955,
  (e, t, r) => {
    var n = {
        229: function (e) {
          var t,
            r,
            n,
            o = (e.exports = {});
          function i() {
            throw Error("setTimeout has not been defined");
          }
          function s() {
            throw Error("clearTimeout has not been defined");
          }
          try {
            t = "function" == typeof setTimeout ? setTimeout : i;
          } catch (e) {
            t = i;
          }
          try {
            r = "function" == typeof clearTimeout ? clearTimeout : s;
          } catch (e) {
            r = s;
          }
          function a(e) {
            if (t === setTimeout) return setTimeout(e, 0);
            if ((t === i || !t) && setTimeout) return ((t = setTimeout), setTimeout(e, 0));
            try {
              return t(e, 0);
            } catch (r) {
              try {
                return t.call(null, e, 0);
              } catch (r) {
                return t.call(this, e, 0);
              }
            }
          }
          var l = [],
            u = !1,
            c = -1;
          function f() {
            u && n && ((u = !1), n.length ? (l = n.concat(l)) : (c = -1), l.length && d());
          }
          function d() {
            if (!u) {
              var e = a(f);
              u = !0;
              for (var t = l.length; t;) {
                for (n = l, l = []; ++c < t;) n && n[c].run();
                ((c = -1), (t = l.length));
              }
              ((n = null),
                (u = !1),
                (function (e) {
                  if (r === clearTimeout) return clearTimeout(e);
                  if ((r === s || !r) && clearTimeout) return ((r = clearTimeout), clearTimeout(e));
                  try {
                    r(e);
                  } catch (t) {
                    try {
                      return r.call(null, e);
                    } catch (t) {
                      return r.call(this, e);
                    }
                  }
                })(e));
            }
          }
          function p(e, t) {
            ((this.fun = e), (this.array = t));
          }
          function m() {}
          ((o.nextTick = function (e) {
            var t = Array(arguments.length - 1);
            if (arguments.length > 1) for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
            (l.push(new p(e, t)), 1 !== l.length || u || a(d));
          }),
            (p.prototype.run = function () {
              this.fun.apply(null, this.array);
            }),
            (o.title = "browser"),
            (o.browser = !0),
            (o.env = {}),
            (o.argv = []),
            (o.version = ""),
            (o.versions = {}),
            (o.on = m),
            (o.addListener = m),
            (o.once = m),
            (o.off = m),
            (o.removeListener = m),
            (o.removeAllListeners = m),
            (o.emit = m),
            (o.prependListener = m),
            (o.prependOnceListener = m),
            (o.listeners = function (e) {
              return [];
            }),
            (o.binding = function (e) {
              throw Error("process.binding is not supported");
            }),
            (o.cwd = function () {
              return "/";
            }),
            (o.chdir = function (e) {
              throw Error("process.chdir is not supported");
            }),
            (o.umask = function () {
              return 0;
            }));
        },
      },
      o = {};
    function i(e) {
      var t = o[e];
      if (void 0 !== t) return t.exports;
      var r = (o[e] = { exports: {} }),
        s = !0;
      try {
        (n[e](r, r.exports, i), (s = !1));
      } finally {
        s && delete o[e];
      }
      return r.exports;
    }
    ((i.ab = "/ROOT/node_modules/next/dist/compiled/process/"), (t.exports = i(229)));
  },
  50461,
  (e, t, r) => {
    "use strict";
    var n, o;
    t.exports =
      (null == (n = e.g.process) ? void 0 : n.env) && "object" == typeof (null == (o = e.g.process) ? void 0 : o.env)
        ? e.g.process
        : e.r(20955);
  },
  8481,
  (e, t, r) => {
    "use strict";
    var n = Symbol.for("react.transitional.element");
    function o(e, t, r) {
      var o = null;
      if ((void 0 !== r && (o = "" + r), void 0 !== t.key && (o = "" + t.key), "key" in t))
        for (var i in ((r = {}), t)) "key" !== i && (r[i] = t[i]);
      else r = t;
      return { $$typeof: n, type: e, key: o, ref: void 0 !== (t = r.ref) ? t : null, props: r };
    }
    ((r.Fragment = Symbol.for("react.fragment")), (r.jsx = o), (r.jsxs = o));
  },
  91398,
  (e, t, r) => {
    "use strict";
    t.exports = e.r(8481);
  },
  61556,
  (e, t, r) => {
    "use strict";
    var n = e.i(50461),
      o = Symbol.for("react.transitional.element"),
      i = Symbol.for("react.portal"),
      s = Symbol.for("react.fragment"),
      a = Symbol.for("react.strict_mode"),
      l = Symbol.for("react.profiler"),
      u = Symbol.for("react.consumer"),
      c = Symbol.for("react.context"),
      f = Symbol.for("react.forward_ref"),
      d = Symbol.for("react.suspense"),
      p = Symbol.for("react.memo"),
      m = Symbol.for("react.lazy"),
      h = Symbol.for("react.activity"),
      y = Symbol.iterator,
      g = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      v = Object.assign,
      b = {};
    function x(e, t, r) {
      ((this.props = e), (this.context = t), (this.refs = b), (this.updater = r || g));
    }
    function w() {}
    function _(e, t, r) {
      ((this.props = e), (this.context = t), (this.refs = b), (this.updater = r || g));
    }
    ((x.prototype.isReactComponent = {}),
      (x.prototype.setState = function (e, t) {
        if ("object" != typeof e && "function" != typeof e && null != e)
          throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, t, "setState");
      }),
      (x.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      }),
      (w.prototype = x.prototype));
    var j = (_.prototype = new w());
    ((j.constructor = _), v(j, x.prototype), (j.isPureReactComponent = !0));
    var k = Array.isArray;
    function E() {}
    var S = { H: null, A: null, T: null, S: null },
      O = Object.prototype.hasOwnProperty;
    function C(e, t, r) {
      var n = r.ref;
      return { $$typeof: o, type: e, key: t, ref: void 0 !== n ? n : null, props: r };
    }
    function N(e) {
      return "object" == typeof e && null !== e && e.$$typeof === o;
    }
    var P = /\/+/g;
    function T(e, t) {
      var r, n;
      return "object" == typeof e && null !== e && null != e.key
        ? ((r = "" + e.key),
          (n = { "=": "=0", ":": "=2" }),
          "$" +
            r.replace(/[=:]/g, function (e) {
              return n[e];
            }))
        : t.toString(36);
    }
    function R(e, t, r) {
      if (null == e) return e;
      var n = [],
        s = 0;
      return (
        !(function e(t, r, n, s, a) {
          var l,
            u,
            c,
            f = typeof t;
          ("undefined" === f || "boolean" === f) && (t = null);
          var d = !1;
          if (null === t) d = !0;
          else
            switch (f) {
              case "bigint":
              case "string":
              case "number":
                d = !0;
                break;
              case "object":
                switch (t.$$typeof) {
                  case o:
                  case i:
                    d = !0;
                    break;
                  case m:
                    return e((d = t._init)(t._payload), r, n, s, a);
                }
            }
          if (d)
            return (
              (a = a(t)),
              (d = "" === s ? "." + T(t, 0) : s),
              k(a)
                ? ((n = ""),
                  null != d && (n = d.replace(P, "$&/") + "/"),
                  e(a, r, n, "", function (e) {
                    return e;
                  }))
                : null != a &&
                  (N(a) &&
                    ((l = a),
                    (u = n + (null == a.key || (t && t.key === a.key) ? "" : ("" + a.key).replace(P, "$&/") + "/") + d),
                    (a = C(l.type, u, l.props))),
                  r.push(a)),
              1
            );
          d = 0;
          var p = "" === s ? "." : s + ":";
          if (k(t)) for (var h = 0; h < t.length; h++) ((f = p + T((s = t[h]), h)), (d += e(s, r, n, f, a)));
          else if (
            "function" ==
            typeof (h =
              null === (c = t) || "object" != typeof c ? null : "function" == typeof (c = (y && c[y]) || c["@@iterator"]) ? c : null)
          )
            for (t = h.call(t), h = 0; !(s = t.next()).done;) ((f = p + T((s = s.value), h++)), (d += e(s, r, n, f, a)));
          else if ("object" === f) {
            if ("function" == typeof t.then)
              return e(
                (function (e) {
                  switch (e.status) {
                    case "fulfilled":
                      return e.value;
                    case "rejected":
                      throw e.reason;
                    default:
                      switch (
                        ("string" == typeof e.status
                          ? e.then(E, E)
                          : ((e.status = "pending"),
                            e.then(
                              function (t) {
                                "pending" === e.status && ((e.status = "fulfilled"), (e.value = t));
                              },
                              function (t) {
                                "pending" === e.status && ((e.status = "rejected"), (e.reason = t));
                              },
                            )),
                        e.status)
                      ) {
                        case "fulfilled":
                          return e.value;
                        case "rejected":
                          throw e.reason;
                      }
                  }
                  throw e;
                })(t),
                r,
                n,
                s,
                a,
              );
            throw Error(
              "Objects are not valid as a React child (found: " +
                ("[object Object]" === (r = String(t)) ? "object with keys {" + Object.keys(t).join(", ") + "}" : r) +
                "). If you meant to render a collection of children, use an array instead.",
            );
          }
          return d;
        })(e, n, "", "", function (e) {
          return t.call(r, e, s++);
        }),
        n
      );
    }
    function L(e) {
      if (-1 === e._status) {
        var t = e._result;
        ((t = t()).then(
          function (t) {
            (0 === e._status || -1 === e._status) && ((e._status = 1), (e._result = t));
          },
          function (t) {
            (0 === e._status || -1 === e._status) && ((e._status = 2), (e._result = t));
          },
        ),
          -1 === e._status && ((e._status = 0), (e._result = t)));
      }
      if (1 === e._status) return e._result.default;
      throw e._result;
    }
    var M =
      "function" == typeof reportError
        ? reportError
        : function (e) {
            if ("object" == typeof window && "function" == typeof window.ErrorEvent) {
              var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: "object" == typeof e && null !== e && "string" == typeof e.message ? String(e.message) : String(e),
                error: e,
              });
              if (!window.dispatchEvent(t)) return;
            } else if ("object" == typeof n.default && "function" == typeof n.default.emit)
              return void n.default.emit("uncaughtException", e);
            console.error(e);
          };
    ((r.Activity = h),
      (r.Children = {
        map: R,
        forEach: function (e, t, r) {
          R(
            e,
            function () {
              t.apply(this, arguments);
            },
            r,
          );
        },
        count: function (e) {
          var t = 0;
          return (
            R(e, function () {
              t++;
            }),
            t
          );
        },
        toArray: function (e) {
          return (
            R(e, function (e) {
              return e;
            }) || []
          );
        },
        only: function (e) {
          if (!N(e)) throw Error("React.Children.only expected to receive a single React element child.");
          return e;
        },
      }),
      (r.Component = x),
      (r.Fragment = s),
      (r.Profiler = l),
      (r.PureComponent = _),
      (r.StrictMode = a),
      (r.Suspense = d),
      (r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = S),
      (r.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function (e) {
          return S.H.useMemoCache(e);
        },
      }),
      (r.cache = function (e) {
        return function () {
          return e.apply(null, arguments);
        };
      }),
      (r.cacheSignal = function () {
        return null;
      }),
      (r.cloneElement = function (e, t, r) {
        if (null == e) throw Error("The argument must be a React element, but you passed " + e + ".");
        var n = v({}, e.props),
          o = e.key;
        if (null != t)
          for (i in (void 0 !== t.key && (o = "" + t.key), t))
            O.call(t, i) && "key" !== i && "__self" !== i && "__source" !== i && ("ref" !== i || void 0 !== t.ref) && (n[i] = t[i]);
        var i = arguments.length - 2;
        if (1 === i) n.children = r;
        else if (1 < i) {
          for (var s = Array(i), a = 0; a < i; a++) s[a] = arguments[a + 2];
          n.children = s;
        }
        return C(e.type, o, n);
      }),
      (r.createContext = function (e) {
        return (
          ((e = { $$typeof: c, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null }).Provider = e),
          (e.Consumer = { $$typeof: u, _context: e }),
          e
        );
      }),
      (r.createElement = function (e, t, r) {
        var n,
          o = {},
          i = null;
        if (null != t)
          for (n in (void 0 !== t.key && (i = "" + t.key), t))
            O.call(t, n) && "key" !== n && "__self" !== n && "__source" !== n && (o[n] = t[n]);
        var s = arguments.length - 2;
        if (1 === s) o.children = r;
        else if (1 < s) {
          for (var a = Array(s), l = 0; l < s; l++) a[l] = arguments[l + 2];
          o.children = a;
        }
        if (e && e.defaultProps) for (n in (s = e.defaultProps)) void 0 === o[n] && (o[n] = s[n]);
        return C(e, i, o);
      }),
      (r.createRef = function () {
        return { current: null };
      }),
      (r.forwardRef = function (e) {
        return { $$typeof: f, render: e };
      }),
      (r.isValidElement = N),
      (r.lazy = function (e) {
        return { $$typeof: m, _payload: { _status: -1, _result: e }, _init: L };
      }),
      (r.memo = function (e, t) {
        return { $$typeof: p, type: e, compare: void 0 === t ? null : t };
      }),
      (r.startTransition = function (e) {
        var t = S.T,
          r = {};
        S.T = r;
        try {
          var n = e(),
            o = S.S;
          (null !== o && o(r, n), "object" == typeof n && null !== n && "function" == typeof n.then && n.then(E, M));
        } catch (e) {
          M(e);
        } finally {
          (null !== t && null !== r.types && (t.types = r.types), (S.T = t));
        }
      }),
      (r.unstable_useCacheRefresh = function () {
        return S.H.useCacheRefresh();
      }),
      (r.use = function (e) {
        return S.H.use(e);
      }),
      (r.useActionState = function (e, t, r) {
        return S.H.useActionState(e, t, r);
      }),
      (r.useCallback = function (e, t) {
        return S.H.useCallback(e, t);
      }),
      (r.useContext = function (e) {
        return S.H.useContext(e);
      }),
      (r.useDebugValue = function () {}),
      (r.useDeferredValue = function (e, t) {
        return S.H.useDeferredValue(e, t);
      }),
      (r.useEffect = function (e, t) {
        return S.H.useEffect(e, t);
      }),
      (r.useEffectEvent = function (e) {
        return S.H.useEffectEvent(e);
      }),
      (r.useId = function () {
        return S.H.useId();
      }),
      (r.useImperativeHandle = function (e, t, r) {
        return S.H.useImperativeHandle(e, t, r);
      }),
      (r.useInsertionEffect = function (e, t) {
        return S.H.useInsertionEffect(e, t);
      }),
      (r.useLayoutEffect = function (e, t) {
        return S.H.useLayoutEffect(e, t);
      }),
      (r.useMemo = function (e, t) {
        return S.H.useMemo(e, t);
      }),
      (r.useOptimistic = function (e, t) {
        return S.H.useOptimistic(e, t);
      }),
      (r.useReducer = function (e, t, r) {
        return S.H.useReducer(e, t, r);
      }),
      (r.useRef = function (e) {
        return S.H.useRef(e);
      }),
      (r.useState = function (e) {
        return S.H.useState(e);
      }),
      (r.useSyncExternalStore = function (e, t, r) {
        return S.H.useSyncExternalStore(e, t, r);
      }),
      (r.useTransition = function () {
        return S.H.useTransition();
      }),
      (r.version = "19.2.4"));
  },
  91788,
  (e, t, r) => {
    "use strict";
    t.exports = e.r(61556);
  },
  41705,
  (e, t, r) => {
    "use strict";
    r._ = function (e) {
      return e && e.__esModule ? e : { default: e };
    };
  },
  13584,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "HeadManagerContext", {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
    let n = e.r(41705)._(e.r(91788)).default.createContext({});
  },
  94470,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "warnOnce", {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
    let n = (e) => {};
  },
  52456,
  (e, t, r) => {
    "use strict";
    function n(e) {
      if ("function" != typeof WeakMap) return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return (n = function (e) {
        return e ? r : t;
      })(e);
    }
    r._ = function (e, t) {
      if (!t && e && e.__esModule) return e;
      if (null === e || ("object" != typeof e && "function" != typeof e)) return { default: e };
      var r = n(t);
      if (r && r.has(e)) return r.get(e);
      var o = { __proto__: null },
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var s in e)
        if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, s) : null;
          a && (a.get || a.set) ? Object.defineProperty(o, s, a) : (o[s] = e[s]);
        }
      return ((o.default = e), r && r.set(e, o), o);
    };
  },
  94941,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function () {
          return a;
        },
      }));
    let n = e.r(91788),
      o = "u" < typeof window,
      i = o ? () => {} : n.useLayoutEffect,
      s = o ? () => {} : n.useEffect;
    function a(e) {
      let { headManager: t, reduceComponentsToState: r } = e;
      function a() {
        if (t && t.mountedInstances) {
          let e = n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
          t.updateHead(r(e));
        }
      }
      return (
        o && (t?.mountedInstances?.add(e.children), a()),
        i(
          () => (
            t?.mountedInstances?.add(e.children),
            () => {
              t?.mountedInstances?.delete(e.children);
            }
          ),
        ),
        i(
          () => (
            t && (t._pendingUpdate = a),
            () => {
              t && (t._pendingUpdate = a);
            }
          ),
        ),
        s(
          () => (
            t && t._pendingUpdate && (t._pendingUpdate(), (t._pendingUpdate = null)),
            () => {
              t && t._pendingUpdate && (t._pendingUpdate(), (t._pendingUpdate = null));
            }
          ),
        ),
        null
      );
    }
  },
  80963,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      default: function () {
        return h;
      },
      defaultHead: function () {
        return f;
      },
    };
    for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
    let i = e.r(41705),
      s = e.r(52456),
      a = e.r(91398),
      l = s._(e.r(91788)),
      u = i._(e.r(94941)),
      c = e.r(13584);
    function f() {
      return [
        (0, a.jsx)("meta", { charSet: "utf-8" }, "charset"),
        (0, a.jsx)("meta", { name: "viewport", content: "width=device-width" }, "viewport"),
      ];
    }
    function d(e, t) {
      return "string" == typeof t || "number" == typeof t
        ? e
        : t.type === l.default.Fragment
          ? e.concat(
              l.default.Children.toArray(t.props.children).reduce(
                (e, t) => ("string" == typeof t || "number" == typeof t ? e : e.concat(t)),
                [],
              ),
            )
          : e.concat(t);
    }
    e.r(94470);
    let p = ["name", "httpEquiv", "charSet", "itemProp"];
    function m(e) {
      let t, r, n, o;
      return e
        .reduce(d, [])
        .reverse()
        .concat(f().reverse())
        .filter(
          ((t = new Set()),
          (r = new Set()),
          (n = new Set()),
          (o = {}),
          (e) => {
            let i = !0,
              s = !1;
            if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
              s = !0;
              let r = e.key.slice(e.key.indexOf("$") + 1);
              t.has(r) ? (i = !1) : t.add(r);
            }
            switch (e.type) {
              case "title":
              case "base":
                r.has(e.type) ? (i = !1) : r.add(e.type);
                break;
              case "meta":
                for (let t = 0, r = p.length; t < r; t++) {
                  let r = p[t];
                  if (e.props.hasOwnProperty(r))
                    if ("charSet" === r) n.has(r) ? (i = !1) : n.add(r);
                    else {
                      let t = e.props[r],
                        n = o[r] || new Set();
                      ("name" !== r || !s) && n.has(t) ? (i = !1) : (n.add(t), (o[r] = n));
                    }
                }
            }
            return i;
          }),
        )
        .reverse()
        .map((e, t) => {
          let r = e.key || t;
          return l.default.cloneElement(e, { key: r });
        });
    }
    let h = function ({ children: e }) {
      let t = (0, l.useContext)(c.HeadManagerContext);
      return (0, a.jsx)(u.default, { reduceComponentsToState: m, headManager: t, children: e });
    };
    ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }), Object.assign(r.default, r), (t.exports = r.default));
  },
  71914,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "useIntersection", {
        enumerable: !0,
        get: function () {
          return l;
        },
      }));
    let n = e.r(91788),
      o = e.r(99604),
      i = "function" == typeof IntersectionObserver,
      s = new Map(),
      a = [];
    function l({ rootRef: e, rootMargin: t, disabled: r }) {
      let u = r || !i,
        [c, f] = (0, n.useState)(!1),
        d = (0, n.useRef)(null),
        p = (0, n.useCallback)((e) => {
          d.current = e;
        }, []);
      return (
        (0, n.useEffect)(() => {
          if (i) {
            if (u || c) return;
            let r = d.current;
            if (r && r.tagName)
              return (function (e, t, r) {
                let {
                  id: n,
                  observer: o,
                  elements: i,
                } = (function (e) {
                  let t,
                    r = { root: e.root || null, margin: e.rootMargin || "" },
                    n = a.find((e) => e.root === r.root && e.margin === r.margin);
                  if (n && (t = s.get(n))) return t;
                  let o = new Map();
                  return (
                    (t = {
                      id: r,
                      observer: new IntersectionObserver((e) => {
                        e.forEach((e) => {
                          let t = o.get(e.target),
                            r = e.isIntersecting || e.intersectionRatio > 0;
                          t && r && t(r);
                        });
                      }, e),
                      elements: o,
                    }),
                    a.push(r),
                    s.set(r, t),
                    t
                  );
                })(r);
                return (
                  i.set(e, t),
                  o.observe(e),
                  function () {
                    if ((i.delete(e), o.unobserve(e), 0 === i.size)) {
                      (o.disconnect(), s.delete(n));
                      let e = a.findIndex((e) => e.root === n.root && e.margin === n.margin);
                      e > -1 && a.splice(e, 1);
                    }
                  }
                );
              })(r, (e) => e && f(e), { root: e?.current, rootMargin: t });
          } else if (!c) {
            let e = (0, o.requestIdleCallback)(() => f(!0));
            return () => (0, o.cancelIdleCallback)(e);
          }
        }, [u, t, e, c, d.current]),
        [
          p,
          c,
          (0, n.useCallback)(() => {
            f(!1);
          }, []),
        ]
      );
    }
    ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }), Object.assign(r.default, r), (t.exports = r.default));
  },
  54471,
  (e, t, r) => {
    "use strict";
    function n(e, t, r, n) {
      return !1;
    }
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "getDomainLocale", {
        enumerable: !0,
        get: function () {
          return n;
        },
      }),
      e.r(70090),
      ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, "__esModule", { value: !0 }), Object.assign(r.default, r), (t.exports = r.default)));
  },
  63230,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "useMergedRef", {
        enumerable: !0,
        get: function () {
          return o;
        },
      }));
    let n = e.r(91788);
    function o(e, t) {
      let r = (0, n.useRef)(null),
        o = (0, n.useRef)(null);
      return (0, n.useCallback)(
        (n) => {
          if (null === n) {
            let e = r.current;
            e && ((r.current = null), e());
            let t = o.current;
            t && ((o.current = null), t());
          } else (e && (r.current = i(e, n)), t && (o.current = i(t, n)));
        },
        [e, t],
      );
    }
    function i(e, t) {
      if ("function" != typeof e)
        return (
          (e.current = t),
          () => {
            e.current = null;
          }
        );
      {
        let r = e(t);
        return "function" == typeof r ? r : () => e(null);
      }
    }
    ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }), Object.assign(r.default, r), (t.exports = r.default));
  },
  48735,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "errorOnce", {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
    let n = (e) => {};
  },
  39149,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      default: function () {
        return k;
      },
      useLinkStatus: function () {
        return j;
      },
    };
    for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
    let i = e.r(52456),
      s = e.r(91398),
      a = i._(e.r(91788)),
      l = e.r(60472),
      u = e.r(71112),
      c = e.r(28169),
      f = e.r(89129),
      d = e.r(14862),
      p = e.r(25479),
      m = e.r(71914),
      h = e.r(54471),
      y = e.r(44113),
      g = e.r(63230);
    e.r(48735);
    let v = new Set();
    function b(e, t, r, n) {
      if (!("u" < typeof window) && (0, u.isLocalURL)(t)) {
        if (!n.bypassPrefetchedCheck) {
          let o = t + "%" + r + "%" + (void 0 !== n.locale ? n.locale : "locale" in e ? e.locale : void 0);
          if (v.has(o)) return;
          v.add(o);
        }
        e.prefetch(t, r, n).catch((e) => {});
      }
    }
    function x(e) {
      return "string" == typeof e ? e : (0, c.formatUrl)(e);
    }
    let w = a.default.forwardRef(function (e, t) {
        let r,
          n,
          {
            href: o,
            as: i,
            children: c,
            prefetch: v = null,
            passHref: w,
            replace: _,
            shallow: j,
            scroll: k,
            locale: E,
            onClick: S,
            onNavigate: O,
            onMouseEnter: C,
            onTouchStart: N,
            legacyBehavior: P = !1,
            transitionTypes: T,
            ...R
          } = e;
        ((r = c), P && ("string" == typeof r || "number" == typeof r) && (r = (0, s.jsx)("a", { children: r })));
        let L = a.default.useContext(p.RouterContext),
          M = !1 !== v,
          { href: A, as: $ } = a.default.useMemo(() => {
            if (!L) {
              let e = x(o);
              return { href: e, as: i ? x(i) : e };
            }
            let [e, t] = (0, l.resolveHref)(L, o, !0);
            return { href: e, as: i ? (0, l.resolveHref)(L, i) : t || e };
          }, [L, o, i]),
          I = a.default.useRef(A),
          H = a.default.useRef($);
        P && (n = a.default.Children.only(r));
        let D = P ? n && "object" == typeof n && n.ref : t,
          [U, z, W] = (0, m.useIntersection)({ rootMargin: "200px" }),
          B = a.default.useCallback(
            (e) => {
              ((H.current !== $ || I.current !== A) && (W(), (H.current = $), (I.current = A)), U(e));
            },
            [$, A, W, U],
          ),
          F = (0, g.useMergedRef)(B, D);
        a.default.useEffect(() => {
          !L || (z && M && b(L, A, $, { locale: E }));
        }, [$, A, z, E, M, L?.locale, L]);
        let q = {
          ref: F,
          onClick(e) {
            (P || "function" != typeof S || S(e),
              P && n.props && "function" == typeof n.props.onClick && n.props.onClick(e),
              !L ||
                e.defaultPrevented ||
                (function (e, t, r, n, o, i, s, a, l) {
                  let c,
                    { nodeName: f } = e.currentTarget;
                  if (!(
                    ("A" === f.toUpperCase() &&
                      (((c = e.currentTarget.getAttribute("target")) && "_self" !== c) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which))) ||
                    e.currentTarget.hasAttribute("download")
                  )) {
                    if (!(0, u.isLocalURL)(r)) {
                      o && (e.preventDefault(), location.replace(r));
                      return;
                    }
                    (e.preventDefault(),
                      (() => {
                        if (l) {
                          let e = !1;
                          if (
                            (l({
                              preventDefault: () => {
                                e = !0;
                              },
                            }),
                            e)
                          )
                            return;
                        }
                        let e = s ?? !0;
                        "beforePopState" in t
                          ? t[o ? "replace" : "push"](r, n, { shallow: i, locale: a, scroll: e })
                          : t[o ? "replace" : "push"](n || r, { scroll: e });
                      })());
                  }
                })(e, L, A, $, _, j, k, E, O));
          },
          onMouseEnter(e) {
            (P || "function" != typeof C || C(e),
              P && n.props && "function" == typeof n.props.onMouseEnter && n.props.onMouseEnter(e),
              L && b(L, A, $, { locale: E, priority: !0, bypassPrefetchedCheck: !0 }));
          },
          onTouchStart: function (e) {
            (P || "function" != typeof N || N(e),
              P && n.props && "function" == typeof n.props.onTouchStart && n.props.onTouchStart(e),
              L && b(L, A, $, { locale: E, priority: !0, bypassPrefetchedCheck: !0 }));
          },
        };
        if ((0, f.isAbsoluteUrl)($)) q.href = $;
        else if (!P || w || ("a" === n.type && !("href" in n.props))) {
          let e = void 0 !== E ? E : L?.locale;
          q.href =
            (L?.isLocaleDomain && (0, h.getDomainLocale)($, e, L?.locales, L?.domainLocales)) ||
            (0, y.addBasePath)((0, d.addLocale)($, e, L?.defaultLocale));
        }
        return P ? a.default.cloneElement(n, q) : (0, s.jsx)("a", { ...R, ...q, children: r });
      }),
      _ = (0, a.createContext)({ pending: !1 }),
      j = () => (0, a.useContext)(_),
      k = w;
    ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }), Object.assign(r.default, r), (t.exports = r.default));
  },
  41158,
  (e, t, r) => {
    t.exports = e.r(39149);
  },
  69547,
  78922,
  (e) => {
    "use strict";
    var t = e.i(91788);
    let r = (...e) =>
      e
        .filter((e, t, r) => !!e && "" !== e.trim() && r.indexOf(e) === t)
        .join(" ")
        .trim();
    var n = {
      xmlns: "http://www.w3.org/2000/svg",
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
    };
    let o = (0, t.forwardRef)(
      (
        {
          color: e = "currentColor",
          size: o = 24,
          strokeWidth: i = 2,
          absoluteStrokeWidth: s,
          className: a = "",
          children: l,
          iconNode: u,
          ...c
        },
        f,
      ) =>
        (0, t.createElement)(
          "svg",
          {
            ref: f,
            ...n,
            width: o,
            height: o,
            stroke: e,
            strokeWidth: s ? (24 * Number(i)) / Number(o) : i,
            className: r("lucide", a),
            ...c,
          },
          [...u.map(([e, r]) => (0, t.createElement)(e, r)), ...(Array.isArray(l) ? l : [l])],
        ),
    );
    e.s(
      [
        "default",
        0,
        (e, n) => {
          let i = (0, t.forwardRef)(({ className: i, ...s }, a) =>
            (0, t.createElement)(o, {
              ref: a,
              iconNode: n,
              className: r(`lucide-${e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()}`, i),
              ...s,
            }),
          );
          return ((i.displayName = `${e}`), i);
        },
      ],
      69547,
    );
    var i = e.i(91398),
      s = e.i(41158),
      a = e.i(53533);
    let l = {
        primary: "bg-primary text-primary-foreground shadow-[0_10px_24px_-12px_rgba(30,133,56,0.7)] hover:bg-primary-strong",
        glass: "bg-white/80 text-foreground ring-1 ring-black/5 backdrop-blur-md hover:bg-white",
        outline: "border border-border bg-white/60 text-foreground hover:bg-white",
        dark: "bg-foreground text-white hover:bg-forest",
        onDark: "bg-white/10 text-white ring-1 ring-white/20 backdrop-blur-md hover:bg-white/15",
      },
      u = { sm: "h-9 px-4 text-sm", md: "h-11 px-5 text-sm", lg: "h-12 px-6 text-[15px]" },
      c = ({ variant: e = "primary", size: t = "md", className: r } = {}) =>
        (0, a.cn)(
          "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-[color,background-color,transform] duration-300 active:scale-[0.97]",
          "[&_svg]:transition-transform [&_svg]:duration-300 hover:[&_svg:last-child]:translate-x-1",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          "disabled:pointer-events-none disabled:opacity-60",
          l[e],
          u[t],
          r,
        );
    e.s(
      [
        "ButtonLink",
        0,
        ({ href: e, children: t, onClick: r, variant: n, size: o, className: a }) =>
          (0, i.jsx)(s.default, { href: e, onClick: r, className: c({ variant: n, size: o, className: a }), children: t }),
        "buttonClasses",
        0,
        c,
      ],
      78922,
    );
  },
  89129,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      DecodeError: function () {
        return g;
      },
      MiddlewareNotFoundError: function () {
        return w;
      },
      MissingStaticPage: function () {
        return x;
      },
      NormalizeError: function () {
        return v;
      },
      PageNotFoundError: function () {
        return b;
      },
      SP: function () {
        return h;
      },
      ST: function () {
        return y;
      },
      WEB_VITALS: function () {
        return i;
      },
      execOnce: function () {
        return s;
      },
      getDisplayName: function () {
        return f;
      },
      getLocationOrigin: function () {
        return u;
      },
      getURL: function () {
        return c;
      },
      isAbsoluteUrl: function () {
        return l;
      },
      isResSent: function () {
        return d;
      },
      loadGetInitialProps: function () {
        return m;
      },
      normalizeRepeatedSlashes: function () {
        return p;
      },
      stringifyError: function () {
        return _;
      },
    };
    for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
    let i = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
    function s(e) {
      let t,
        r = !1;
      return (...n) => (r || ((r = !0), (t = e(...n))), t);
    }
    let a = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
      l = (e) => a.test(e);
    function u() {
      let { protocol: e, hostname: t, port: r } = window.location;
      return `${e}//${t}${r ? ":" + r : ""}`;
    }
    function c() {
      let { href: e } = window.location,
        t = u();
      return e.substring(t.length);
    }
    function f(e) {
      return "string" == typeof e ? e : e.displayName || e.name || "Unknown";
    }
    function d(e) {
      return e.finished || e.headersSent;
    }
    function p(e) {
      let t = e.split("?");
      return t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (t[1] ? `?${t.slice(1).join("?")}` : "");
    }
    async function m(e, t) {
      let r = t.res || (t.ctx && t.ctx.res);
      if (!e.getInitialProps) return t.ctx && t.Component ? { pageProps: await m(t.Component, t.ctx) } : {};
      let n = await e.getInitialProps(t);
      if (r && d(r)) return n;
      if (!n)
        throw Object.defineProperty(
          Error(`"${f(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`),
          "__NEXT_ERROR_CODE",
          { value: "E1025", enumerable: !1, configurable: !0 },
        );
      return n;
    }
    let h = "u" > typeof performance,
      y = h && ["mark", "measure", "getEntriesByName"].every((e) => "function" == typeof performance[e]);
    class g extends Error {}
    class v extends Error {}
    class b extends Error {
      constructor(e) {
        (super(), (this.code = "ENOENT"), (this.name = "PageNotFoundError"), (this.message = `Cannot find module for page: ${e}`));
      }
    }
    class x extends Error {
      constructor(e, t) {
        (super(), (this.message = `Failed to load static file for page: ${e} ${t}`));
      }
    }
    class w extends Error {
      constructor() {
        (super(), (this.code = "ENOENT"), (this.message = "Cannot find the middleware module"));
      }
    }
    function _(e) {
      return JSON.stringify({ message: e.message, stack: e.stack });
    }
  },
  20262,
  (e, t, r) => {
    "use strict";
    let n;
    Object.defineProperty(r, "__esModule", { value: !0 });
    var o = {
      getAssetToken: function () {
        return l;
      },
      getAssetTokenQuery: function () {
        return u;
      },
      getDeploymentId: function () {
        return s;
      },
      getDeploymentIdQuery: function () {
        return a;
      },
    };
    for (var i in o) Object.defineProperty(r, i, { enumerable: !0, get: o[i] });
    function s() {
      return n;
    }
    function a(e = !1) {
      let t = n;
      return t ? `${e ? "&" : "?"}dpl=${t}` : "";
    }
    function l() {
      return !1;
    }
    function u(e = !1) {
      return "";
    }
    "u" > typeof window ? ((n = document.documentElement.dataset.dplId), delete document.documentElement.dataset.dplId) : (n = void 0);
  },
  17431,
  (e, t, r) => {
    "use strict";
    var n = e.r(91788);
    function o(e) {
      var t = "https://react.dev/errors/" + e;
      if (1 < arguments.length) {
        t += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var r = 2; r < arguments.length; r++) t += "&args[]=" + encodeURIComponent(arguments[r]);
      }
      return (
        "Minified React error #" +
        e +
        "; visit " +
        t +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    function i() {}
    var s = {
        d: {
          f: i,
          r: function () {
            throw Error(o(522));
          },
          D: i,
          C: i,
          L: i,
          m: i,
          X: i,
          S: i,
          M: i,
        },
        p: 0,
        findDOMNode: null,
      },
      a = Symbol.for("react.portal"),
      l = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function u(e, t) {
      return "font" === e ? "" : "string" == typeof t ? ("use-credentials" === t ? t : "") : void 0;
    }
    ((r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s),
      (r.createPortal = function (e, t) {
        var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!t || (1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType)) throw Error(o(299));
        return (function (e, t, r) {
          var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
          return { $$typeof: a, key: null == n ? null : "" + n, children: e, containerInfo: t, implementation: r };
        })(e, t, null, r);
      }),
      (r.flushSync = function (e) {
        var t = l.T,
          r = s.p;
        try {
          if (((l.T = null), (s.p = 2), e)) return e();
        } finally {
          ((l.T = t), (s.p = r), s.d.f());
        }
      }),
      (r.preconnect = function (e, t) {
        "string" == typeof e &&
          ((t = t ? ("string" == typeof (t = t.crossOrigin) ? ("use-credentials" === t ? t : "") : void 0) : null), s.d.C(e, t));
      }),
      (r.prefetchDNS = function (e) {
        "string" == typeof e && s.d.D(e);
      }),
      (r.preinit = function (e, t) {
        if ("string" == typeof e && t && "string" == typeof t.as) {
          var r = t.as,
            n = u(r, t.crossOrigin),
            o = "string" == typeof t.integrity ? t.integrity : void 0,
            i = "string" == typeof t.fetchPriority ? t.fetchPriority : void 0;
          "style" === r
            ? s.d.S(e, "string" == typeof t.precedence ? t.precedence : void 0, { crossOrigin: n, integrity: o, fetchPriority: i })
            : "script" === r &&
              s.d.X(e, { crossOrigin: n, integrity: o, fetchPriority: i, nonce: "string" == typeof t.nonce ? t.nonce : void 0 });
        }
      }),
      (r.preinitModule = function (e, t) {
        if ("string" == typeof e)
          if ("object" == typeof t && null !== t) {
            if (null == t.as || "script" === t.as) {
              var r = u(t.as, t.crossOrigin);
              s.d.M(e, {
                crossOrigin: r,
                integrity: "string" == typeof t.integrity ? t.integrity : void 0,
                nonce: "string" == typeof t.nonce ? t.nonce : void 0,
              });
            }
          } else null == t && s.d.M(e);
      }),
      (r.preload = function (e, t) {
        if ("string" == typeof e && "object" == typeof t && null !== t && "string" == typeof t.as) {
          var r = t.as,
            n = u(r, t.crossOrigin);
          s.d.L(e, r, {
            crossOrigin: n,
            integrity: "string" == typeof t.integrity ? t.integrity : void 0,
            nonce: "string" == typeof t.nonce ? t.nonce : void 0,
            type: "string" == typeof t.type ? t.type : void 0,
            fetchPriority: "string" == typeof t.fetchPriority ? t.fetchPriority : void 0,
            referrerPolicy: "string" == typeof t.referrerPolicy ? t.referrerPolicy : void 0,
            imageSrcSet: "string" == typeof t.imageSrcSet ? t.imageSrcSet : void 0,
            imageSizes: "string" == typeof t.imageSizes ? t.imageSizes : void 0,
            media: "string" == typeof t.media ? t.media : void 0,
          });
        }
      }),
      (r.preloadModule = function (e, t) {
        if ("string" == typeof e)
          if (t) {
            var r = u(t.as, t.crossOrigin);
            s.d.m(e, {
              as: "string" == typeof t.as && "script" !== t.as ? t.as : void 0,
              crossOrigin: r,
              integrity: "string" == typeof t.integrity ? t.integrity : void 0,
            });
          } else s.d.m(e);
      }),
      (r.requestFormReset = function (e) {
        s.d.r(e);
      }),
      (r.unstable_batchedUpdates = function (e, t) {
        return e(t);
      }),
      (r.useFormState = function (e, t, r) {
        return l.H.useFormState(e, t, r);
      }),
      (r.useFormStatus = function () {
        return l.H.useHostTransitionStatus();
      }),
      (r.version = "19.2.4"));
  },
  30943,
  (e, t, r) => {
    "use strict";
    (!(function e() {
      if ("u" > typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
        } catch (e) {
          console.error(e);
        }
    })(),
      (t.exports = e.r(17431)));
  },
  15125,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      VALID_LOADERS: function () {
        return i;
      },
      imageConfigDefault: function () {
        return s;
      },
    };
    for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
    let i = ["default", "imgix", "cloudinary", "akamai", "custom"],
      s = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [32, 48, 64, 96, 128, 256, 384],
        path: "/_next/image",
        loader: "default",
        loaderFile: "",
        domains: [],
        disableStaticImages: !1,
        minimumCacheTTL: 14400,
        formats: ["image/webp"],
        maximumDiskCacheSize: void 0,
        maximumRedirects: 3,
        maximumResponseBody: 5e7,
        dangerouslyAllowLocalIP: !1,
        dangerouslyAllowSVG: !1,
        contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
        contentDispositionType: "attachment",
        localPatterns: void 0,
        remotePatterns: [],
        qualities: [75],
        unoptimized: !1,
        customCacheHandler: !1,
      };
  },
  13521,
  (e, t, r) => {
    "use strict";
    (Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "ImageConfigContext", {
        enumerable: !0,
        get: function () {
          return i;
        },
      }));
    let n = e.r(41705)._(e.r(91788)),
      o = e.r(15125),
      i = n.default.createContext(o.imageConfigDefault);
  },
  3828,
  (e, t, r) => {
    t.exports = e.r(26990);
  },
  5863,
  88478,
  68802,
  41565,
  (e) => {
    "use strict";
    var t = e.i(91398),
      r = e.i(58678),
      n = e.i(3828),
      o = e.i(43535);
    let i = (e) => {
      try {
        return new URL(e, o.siteConfig.url).toString();
      } catch {
        return e;
      }
    };
    e.s(
      [
        "Seo",
        0,
        ({ title: e, description: s = o.siteConfig.description, ogImage: a = o.siteConfig.ogImage, noIndex: l = !1 }) => {
          let u = (0, n.useRouter)(),
            c = e ? `${e} - ${o.siteConfig.name}` : o.siteConfig.name,
            f = i(u.asPath.split(/[?#]/)[0] || "/"),
            d = a ? i(a) : void 0;
          return (0, t.jsxs)(r.default, {
            children: [
              (0, t.jsx)("title", { children: c }),
              (0, t.jsx)("meta", { name: "description", content: s }),
              (0, t.jsx)("meta", { property: "og:title", content: c }),
              (0, t.jsx)("meta", { property: "og:description", content: s }),
              (0, t.jsx)("meta", { property: "og:type", content: "website" }),
              (0, t.jsx)("meta", { property: "og:site_name", content: o.siteConfig.name }),
              (0, t.jsx)("meta", { property: "og:url", content: f }),
              (0, t.jsx)("meta", { name: "twitter:card", content: "summary_large_image" }),
              (0, t.jsx)("meta", { name: "twitter:title", content: c }),
              (0, t.jsx)("meta", { name: "twitter:description", content: s }),
              d && (0, t.jsx)("meta", { property: "og:image", content: d }),
              d && (0, t.jsx)("meta", { property: "og:image:alt", content: "A wind turbine on misty green hills at dawn" }),
              d && (0, t.jsx)("meta", { name: "twitter:image", content: d }),
              l && (0, t.jsx)("meta", { name: "robots", content: "noindex" }),
            ],
          });
        },
      ],
      5863,
    );
    var s = e.i(41158),
      a = e.i(91788),
      l = e.i(69547);
    let u = (0, l.default)("ArrowRight", [
      ["path", { d: "M5 12h14", key: "1ays0h" }],
      ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
    ]);
    e.s(["ArrowRight", 0, u], 88478);
    let c = (0, l.default)("Menu", [
        ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
        ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
        ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
      ]),
      f = (0, l.default)("X", [
        ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
        ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
      ]);
    var d = e.i(53533);
    let p = "SolarLifeStyle:hero-scene",
      m = () => {
        let e = document.documentElement.dataset.heroScene;
        return "morning" === e || "night" === e ? e : null;
      };
    e.s(
      [
        "HERO_SCENE_EVENT",
        0,
        p,
        "announceHeroScene",
        0,
        (e) => {
          let t = document.documentElement;
          (e ? (t.dataset.heroScene = e) : delete t.dataset.heroScene, window.dispatchEvent(new CustomEvent(p, { detail: e })));
        },
        "readHeroScene",
        0,
        m,
      ],
      68802,
    );
    var h = e.i(80015),
      y = e.i(78922);
    let g = () => {
        let e = (0, n.useRouter)(),
          [r, i] = (0, a.useState)(!1),
          [l, g] = (0, a.useState)(!1),
          [v, b] = (0, a.useState)(!1),
          [x, w] = (0, a.useState)(!1);
        ((0, a.useEffect)(() => {
          let e = () => w("night" === m());
          return (e(), window.addEventListener(p, e), () => window.removeEventListener(p, e));
        }, []),
          (0, a.useEffect)(() => {
            let e = window.scrollY,
              t = () => {
                let t = window.scrollY;
                (g(t > 12), b(t > 240 && t > e + 2), Math.abs(t - e) > 2 && (e = t));
              };
            return (t(), window.addEventListener("scroll", t, { passive: !0 }), () => window.removeEventListener("scroll", t));
          }, []),
          (0, a.useEffect)(() => {
            let t = () => i(!1);
            return (
              e.events.on("routeChangeStart", t),
              e.events.on("hashChangeStart", t),
              () => {
                (e.events.off("routeChangeStart", t), e.events.off("hashChangeStart", t));
              }
            );
          }, [e.events]),
          (0, a.useEffect)(() => {
            if (!r) return;
            let e = (e) => {
              "Escape" === e.key && i(!1);
            };
            return (window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e));
          }, [r]));
        let _ = x && !l && !r;
        return (0, t.jsx)("header", {
          className: (0, d.cn)(
            "fixed inset-x-0 top-0 z-50 px-3 pt-3 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:px-6 sm:pt-4",
            v && !r ? "-translate-y-[120%]" : "translate-y-0",
          ),
          children: (0, t.jsxs)("div", {
            className: "mx-auto max-w-7xl",
            children: [
              (0, t.jsxs)("nav", {
                "aria-label": "Main",
                className: (0, d.cn)(
                  "flex items-center justify-between gap-4 rounded-2xl py-2 pl-4 pr-2 transition-all duration-300 sm:pl-5",
                  l || r
                    ? "bg-white/80 shadow-[0_18px_40px_-24px_rgba(14,26,18,0.45)] ring-1 ring-black/5 backdrop-blur-xl"
                    : "bg-transparent shadow-none ring-0",
                ),
                children: [
                  (0, t.jsx)(s.default, {
                    href: "/",
                    "aria-label": `${o.siteConfig.name} home`,
                    className: "rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    children: (0, t.jsx)(h.Logo, { tone: _ ? "light" : "brand" }),
                  }),
                  (0, t.jsx)("span", {
                    "aria-hidden": "true",
                    className: (0, d.cn)(
                      "hidden h-px flex-1 transition-colors duration-500 lg:block",
                      _ ? "bg-white/20" : "bg-primary-strong/15",
                    ),
                  }),
                  (0, t.jsx)("ul", {
                    className: "hidden items-center gap-2 md:flex lg:gap-6",
                    children: o.navLinks.map((e) =>
                      (0, t.jsx)(
                        "li",
                        {
                          children: (0, t.jsx)(s.default, {
                            href: e.href,
                            className: (0, d.cn)(
                              "relative rounded-full px-3 py-2 text-[15px] transition-colors duration-500 after:absolute after:inset-x-3 after:bottom-1 after:h-px after:origin-right after:scale-x-0 after:transition-transform after:duration-500 hover:after:origin-left hover:after:scale-x-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                              _ ? "text-white/90 after:bg-white" : "text-primary-strong after:bg-primary-strong",
                            ),
                            children: e.label,
                          }),
                        },
                        e.href,
                      ),
                    ),
                  }),
                  (0, t.jsx)("span", {
                    "aria-hidden": "true",
                    className: (0, d.cn)(
                      "hidden h-px flex-1 transition-colors duration-500 lg:block",
                      _ ? "bg-white/20" : "bg-primary-strong/15",
                    ),
                  }),
                  (0, t.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [
                      (0, t.jsx)(y.ButtonLink, {
                        href: o.primaryCta.href,
                        size: "sm",
                        className: (0, d.cn)(
                          "hidden h-10 px-5 transition-colors duration-500 sm:inline-flex",
                          _ ? "bg-white text-forest hover:bg-white/85" : "bg-primary-strong hover:bg-forest",
                        ),
                        children: o.primaryCta.label,
                      }),
                      (0, t.jsx)("button", {
                        type: "button",
                        onClick: () => i((e) => !e),
                        "aria-expanded": r,
                        "aria-controls": "mobile-menu",
                        "aria-label": r ? "Close menu" : "Open menu",
                        className: (0, d.cn)(
                          "inline-flex size-10 items-center justify-center rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:hidden",
                          _ ? "text-white hover:bg-white/10" : "text-foreground hover:bg-black/[0.05]",
                        ),
                        children: r ? (0, t.jsx)(f, { className: "size-5" }) : (0, t.jsx)(c, { className: "size-5" }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                id: "mobile-menu",
                hidden: !r,
                className: "mt-2 rounded-2xl bg-white p-2 shadow-[0_24px_48px_-24px_rgba(14,26,18,0.45)] ring-1 ring-black/5 md:hidden",
                children: [
                  (0, t.jsx)("ul", {
                    className: "flex flex-col",
                    children: o.navLinks.map((e) =>
                      (0, t.jsx)(
                        "li",
                        {
                          children: (0, t.jsxs)(s.default, {
                            href: e.href,
                            onClick: () => i(!1),
                            className:
                              "flex h-12 items-center justify-between rounded-xl px-4 text-base font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                            children: [e.label, (0, t.jsx)(u, { className: "size-4 text-muted-foreground", "aria-hidden": "true" })],
                          }),
                        },
                        e.href,
                      ),
                    ),
                  }),
                  (0, t.jsx)(y.ButtonLink, {
                    href: o.primaryCta.href,
                    onClick: () => i(!1),
                    size: "lg",
                    className: "mt-2 w-full",
                    children: o.primaryCta.label,
                  }),
                ],
              }),
            ],
          }),
        });
      },
      v = (0, l.default)("ArrowUpRight", [
        ["path", { d: "M7 7h10v10", key: "1tivn9" }],
        ["path", { d: "M7 17 17 7", key: "1vkiza" }],
      ]);
    var b = e.i(57712);
    let x = () =>
      (0, t.jsxs)("footer", {
        className: "relative overflow-hidden bg-forest text-forest-foreground",
        children: [
          (0, t.jsxs)("div", {
            className: "mx-auto max-w-7xl px-4 pb-10 pt-20 sm:px-6 lg:px-8",
            children: [
              (0, t.jsxs)("div", {
                className: "grid gap-12 lg:grid-cols-[1.3fr_2fr]",
                children: [
                  (0, t.jsxs)("div", {
                    className: "max-w-sm",
                    children: [
                      (0, t.jsx)(s.default, {
                        href: "/",
                        "aria-label": `${o.siteConfig.name} home`,
                        className: "inline-flex rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf",
                        children: (0, t.jsx)(h.Logo, { tone: "light" }),
                      }),
                      (0, t.jsxs)("p", {
                        className: "mt-5 text-[15px] leading-relaxed text-forest-foreground/70",
                        children: [
                          o.siteConfig.tagline,
                          " Forecast the peak, store the surplus and bid at the right moment, from one calm workspace.",
                        ],
                      }),
                      (0, t.jsxs)(y.ButtonLink, {
                        href: o.primaryCta.href,
                        variant: "onDark",
                        className: "mt-7",
                        children: [o.primaryCta.label, (0, t.jsx)(v, { className: "size-4", "aria-hidden": "true" })],
                      }),
                    ],
                  }),
                  (0, t.jsx)("div", {
                    className: "grid grid-cols-2 gap-10 sm:grid-cols-3",
                    children: o.footerColumns.map((e) =>
                      (0, t.jsxs)(
                        "div",
                        {
                          children: [
                            (0, t.jsx)("h2", { className: "text-sm font-semibold text-white", children: e.title }),
                            (0, t.jsx)("ul", {
                              className: "mt-4 space-y-3",
                              children: e.links.map((r) =>
                                (0, t.jsx)(
                                  "li",
                                  {
                                    children: (0, t.jsx)(s.default, {
                                      href: r.href,
                                      className:
                                        "text-sm text-forest-foreground/65 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf rounded",
                                      children: r.label,
                                    }),
                                  },
                                  `${e.title}-${r.label}`,
                                ),
                              ),
                            }),
                          ],
                        },
                        e.title,
                      ),
                    ),
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                className:
                  "mt-16 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-forest-foreground/55 sm:flex-row sm:items-center sm:justify-between",
                children: [
                  (0, t.jsxs)("p", { children: ["© ", o.siteConfig.year, " ", o.siteConfig.name, ". All rights reserved."] }),
                  (0, t.jsx)("p", { children: "Built for a steadier, cleaner grid." }),
                ],
              }),
            ],
          }),
          (0, t.jsx)(b.motion.div, {
            "aria-hidden": "true",
            initial: "hidden",
            whileInView: "visible",
            viewport: { once: !0, margin: "0px 0px -5% 0px" },
            variants: { hidden: {}, visible: { transition: { staggerChildren: 0.06 } } },
            className:
              "pointer-events-none flex select-none justify-center overflow-hidden px-2 font-heading text-[23vw] font-semibold leading-[0.78] tracking-[-0.06em]",
            children: o.siteConfig.name
              .split("")
              .map((e, r) =>
                (0, t.jsx)(
                  b.motion.span,
                  {
                    variants: {
                      hidden: { y: "100%", opacity: 0 },
                      visible: { y: "0%", opacity: 1, transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] } },
                    },
                    className: "inline-block wordmark-footer",
                    children: e,
                  },
                  `${e}-${r}`,
                ),
              ),
          }),
        ],
      });
    e.s(
      [
        "Layout",
        0,
        ({ children: e }) =>
          (0, t.jsxs)("div", {
            className: "flex min-h-screen flex-col",
            children: [
              (0, t.jsx)("a", {
                href: "#main-content",
                className:
                  "sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:shadow-lg",
                children: "Skip to content",
              }),
              (0, t.jsx)(g, {}),
              (0, t.jsx)("main", { id: "main-content", className: "flex-1", children: e }),
              (0, t.jsx)(x, {}),
            ],
          }),
      ],
      41565,
    );
  },
  96619,
  (e) => {
    "use strict";
    var t = e.i(91398),
      r = e.i(41158),
      n = e.i(5863),
      o = e.i(41565),
      i = e.i(43535);
    let s = [
      {
        id: "who-we-are",
        title: "Who we are",
        paragraphs: [
          `${i.siteConfig.name} builds forecasting and balancing software for renewable energy operators. This policy explains what information this website collects, why we collect it and what you can ask us to do with it.`,
        ],
      },
      {
        id: "what-we-collect",
        title: "What we collect",
        paragraphs: [
          "When you request a demo, we collect the details you type into the form: your name, work email, company, and, if you choose to share them, your role, portfolio size, the topics you are interested in and your message.",
          "When you sign up with just your email, we keep that address so our team can get in touch.",
          "We do not ask for payment details or any sensitive personal information on this website.",
        ],
      },
      {
        id: "how-we-use-it",
        title: "How we use it",
        paragraphs: [
          "We use your details to reply to you, arrange your demo and prepare it around your portfolio. Your request is stored securely so our team can follow up, and a copy is sent to our team by email.",
          "We never sell your information, and we do not add you to marketing lists without your permission.",
        ],
      },
      {
        id: "emails",
        title: "Emails",
        paragraphs: [
          "Emails sent through this website may include open and click tracking, which tells us whether a message was opened and which links in it were clicked. We use this only to make sure our messages arrive and are useful.",
        ],
      },
      {
        id: "analytics",
        title: "Analytics",
        paragraphs: [
          "We measure visits to this website with privacy-friendly analytics that do not use cookies and do not build profiles of individual visitors. We only see totals, such as how many people visited a page and where they came from.",
        ],
      },
      {
        id: "retention",
        title: "How long we keep it",
        paragraphs: [
          "We keep demo requests for up to 24 months after our last conversation with you, then delete them, unless you become a customer and the information is needed to provide our service.",
        ],
      },
      {
        id: "your-choices",
        title: "Your choices",
        paragraphs: [
          "You can ask us to show you, correct or delete the information we hold about you at any time. Reply to any email from our team and we will act on your request within 30 days.",
        ],
      },
      {
        id: "changes",
        title: "Changes to this policy",
        paragraphs: ["If we change how we handle your information, we will update this page and the date at the top."],
      },
    ];
    e.s([
      "default",
      0,
      () =>
        (0, t.jsxs)(o.Layout, {
          children: [
            (0, t.jsx)(n.Seo, {
              title: "Privacy policy",
              description: `How ${i.siteConfig.name} collects, uses and protects the information you share on this website.`,
            }),
            (0, t.jsx)("article", {
              className: "bg-background pb-24 pt-36 sm:pb-32 sm:pt-44",
              children: (0, t.jsxs)("div", {
                className: "mx-auto max-w-3xl px-4 sm:px-6",
                children: [
                  (0, t.jsxs)("header", {
                    children: [
                      (0, t.jsxs)("p", {
                        className: "text-sm font-medium text-primary",
                        children: ["Last updated 9 October ", i.siteConfig.year],
                      }),
                      (0, t.jsx)("h1", {
                        className: "mt-4 font-heading text-4xl font-light tracking-[-0.035em] text-foreground sm:text-5xl",
                        children: "Privacy policy",
                      }),
                      (0, t.jsxs)("p", {
                        className: "mt-5 text-lg leading-relaxed text-muted-foreground",
                        children: [
                          "The short version: we collect only what you choose to share, we use it to talk to you about ",
                          i.siteConfig.name,
                          ", and we never sell it.",
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsxs)("nav", {
                    "aria-label": "On this page",
                    className: "mt-10 rounded-2xl bg-white p-6 ring-1 ring-black/5",
                    children: [
                      (0, t.jsx)("p", { className: "text-sm font-medium text-foreground", children: "On this page" }),
                      (0, t.jsx)("ol", {
                        className: "mt-3 grid gap-2 text-sm sm:grid-cols-2",
                        children: s.map((e) =>
                          (0, t.jsx)(
                            "li",
                            {
                              children: (0, t.jsx)("a", {
                                href: `#${e.id}`,
                                className:
                                  "text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded",
                                children: e.title,
                              }),
                            },
                            e.id,
                          ),
                        ),
                      }),
                    ],
                  }),
                  (0, t.jsx)("div", {
                    className: "mt-12 space-y-12",
                    children: s.map((e) =>
                      (0, t.jsxs)(
                        "section",
                        {
                          id: e.id,
                          "aria-labelledby": `${e.id}-title`,
                          className: "scroll-mt-28",
                          children: [
                            (0, t.jsx)("h2", {
                              id: `${e.id}-title`,
                              className: "font-heading text-2xl font-normal tracking-tight text-foreground",
                              children: e.title,
                            }),
                            (0, t.jsx)("div", {
                              className: "mt-4 space-y-4",
                              children: e.paragraphs.map((e) =>
                                (0, t.jsx)(
                                  "p",
                                  { className: "text-base leading-relaxed text-muted-foreground", children: e },
                                  e.slice(0, 32),
                                ),
                              ),
                            }),
                          ],
                        },
                        e.id,
                      ),
                    ),
                  }),
                  (0, t.jsxs)("div", {
                    className: "mt-16 rounded-2xl bg-white p-6 ring-1 ring-black/5 sm:flex sm:items-center sm:justify-between sm:gap-6",
                    children: [
                      (0, t.jsx)("p", {
                        className: "text-sm text-muted-foreground",
                        children: "Questions about your data? Our team is happy to help.",
                      }),
                      (0, t.jsx)(r.default, {
                        href: "/#get-started",
                        className: "mt-3 inline-flex text-sm font-medium text-primary hover:text-primary-strong sm:mt-0",
                        children: "Contact the team",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
    ]);
  },
  17632,
  (e, t, r) => {
    let n = "/privacy";
    ((window.__NEXT_P = window.__NEXT_P || []).push([n, () => e.r(96619)]),
      t.hot &&
        t.hot.dispose(function () {
          window.__NEXT_P.push([n]);
        }));
  },
  48761,
  (e) => {
    e.v((t) => Promise.all(["static/chunks/0us.pjk53..1y.js"].map((t) => e.l(t))).then(() => t(93594)));
  },
  28805,
  (e) => {
    e.v((t) => Promise.all(["static/chunks/0599p99vu8fk5.js"].map((t) => e.l(t))).then(() => t(79466)));
  },
]);
