(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  20955,
  (t, e, i) => {
    var r = {
        229: function (t) {
          var e,
            i,
            r,
            n = (t.exports = {});
          function o() {
            throw Error("setTimeout has not been defined");
          }
          function s() {
            throw Error("clearTimeout has not been defined");
          }
          try {
            e = "function" == typeof setTimeout ? setTimeout : o;
          } catch (t) {
            e = o;
          }
          try {
            i = "function" == typeof clearTimeout ? clearTimeout : s;
          } catch (t) {
            i = s;
          }
          function l(t) {
            if (e === setTimeout) return setTimeout(t, 0);
            if ((e === o || !e) && setTimeout) return ((e = setTimeout), setTimeout(t, 0));
            try {
              return e(t, 0);
            } catch (i) {
              try {
                return e.call(null, t, 0);
              } catch (i) {
                return e.call(this, t, 0);
              }
            }
          }
          var a = [],
            c = !1,
            u = -1;
          function h() {
            c && r && ((c = !1), r.length ? (a = r.concat(a)) : (u = -1), a.length && f());
          }
          function f() {
            if (!c) {
              var t = l(h);
              c = !0;
              for (var e = a.length; e;) {
                for (r = a, a = []; ++u < e;) r && r[u].run();
                ((u = -1), (e = a.length));
              }
              ((r = null),
                (c = !1),
                (function (t) {
                  if (i === clearTimeout) return clearTimeout(t);
                  if ((i === s || !i) && clearTimeout) return ((i = clearTimeout), clearTimeout(t));
                  try {
                    i(t);
                  } catch (e) {
                    try {
                      return i.call(null, t);
                    } catch (e) {
                      return i.call(this, t);
                    }
                  }
                })(t));
            }
          }
          function d(t, e) {
            ((this.fun = t), (this.array = e));
          }
          function p() {}
          ((n.nextTick = function (t) {
            var e = Array(arguments.length - 1);
            if (arguments.length > 1) for (var i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
            (a.push(new d(t, e)), 1 !== a.length || c || l(f));
          }),
            (d.prototype.run = function () {
              this.fun.apply(null, this.array);
            }),
            (n.title = "browser"),
            (n.browser = !0),
            (n.env = {}),
            (n.argv = []),
            (n.version = ""),
            (n.versions = {}),
            (n.on = p),
            (n.addListener = p),
            (n.once = p),
            (n.off = p),
            (n.removeListener = p),
            (n.removeAllListeners = p),
            (n.emit = p),
            (n.prependListener = p),
            (n.prependOnceListener = p),
            (n.listeners = function (t) {
              return [];
            }),
            (n.binding = function (t) {
              throw Error("process.binding is not supported");
            }),
            (n.cwd = function () {
              return "/";
            }),
            (n.chdir = function (t) {
              throw Error("process.chdir is not supported");
            }),
            (n.umask = function () {
              return 0;
            }));
        },
      },
      n = {};
    function o(t) {
      var e = n[t];
      if (void 0 !== e) return e.exports;
      var i = (n[t] = { exports: {} }),
        s = !0;
      try {
        (r[t](i, i.exports, o), (s = !1));
      } finally {
        s && delete n[t];
      }
      return i.exports;
    }
    ((o.ab = "/ROOT/node_modules/next/dist/compiled/process/"), (e.exports = o(229)));
  },
  50461,
  (t, e, i) => {
    "use strict";
    var r, n;
    e.exports =
      (null == (r = t.g.process) ? void 0 : r.env) && "object" == typeof (null == (n = t.g.process) ? void 0 : n.env)
        ? t.g.process
        : t.r(20955);
  },
  8481,
  (t, e, i) => {
    "use strict";
    var r = Symbol.for("react.transitional.element");
    function n(t, e, i) {
      var n = null;
      if ((void 0 !== i && (n = "" + i), void 0 !== e.key && (n = "" + e.key), "key" in e))
        for (var o in ((i = {}), e)) "key" !== o && (i[o] = e[o]);
      else i = e;
      return { $$typeof: r, type: t, key: n, ref: void 0 !== (e = i.ref) ? e : null, props: i };
    }
    ((i.Fragment = Symbol.for("react.fragment")), (i.jsx = n), (i.jsxs = n));
  },
  91398,
  (t, e, i) => {
    "use strict";
    e.exports = t.r(8481);
  },
  61556,
  (t, e, i) => {
    "use strict";
    var r = t.i(50461),
      n = Symbol.for("react.transitional.element"),
      o = Symbol.for("react.portal"),
      s = Symbol.for("react.fragment"),
      l = Symbol.for("react.strict_mode"),
      a = Symbol.for("react.profiler"),
      c = Symbol.for("react.consumer"),
      u = Symbol.for("react.context"),
      h = Symbol.for("react.forward_ref"),
      f = Symbol.for("react.suspense"),
      d = Symbol.for("react.memo"),
      p = Symbol.for("react.lazy"),
      m = Symbol.for("react.activity"),
      g = Symbol.iterator,
      y = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      v = Object.assign,
      w = {};
    function S(t, e, i) {
      ((this.props = t), (this.context = e), (this.refs = w), (this.updater = i || y));
    }
    function _() {}
    function b(t, e, i) {
      ((this.props = t), (this.context = e), (this.refs = w), (this.updater = i || y));
    }
    ((S.prototype.isReactComponent = {}),
      (S.prototype.setState = function (t, e) {
        if ("object" != typeof t && "function" != typeof t && null != t)
          throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, t, e, "setState");
      }),
      (S.prototype.forceUpdate = function (t) {
        this.updater.enqueueForceUpdate(this, t, "forceUpdate");
      }),
      (_.prototype = S.prototype));
    var E = (b.prototype = new _());
    ((E.constructor = b), v(E, S.prototype), (E.isPureReactComponent = !0));
    var T = Array.isArray;
    function x() {}
    var O = { H: null, A: null, T: null, S: null },
      N = Object.prototype.hasOwnProperty;
    function M(t, e, i) {
      var r = i.ref;
      return { $$typeof: n, type: t, key: e, ref: void 0 !== r ? r : null, props: i };
    }
    function k(t) {
      return "object" == typeof t && null !== t && t.$$typeof === n;
    }
    var L = /\/+/g;
    function C(t, e) {
      var i, r;
      return "object" == typeof t && null !== t && null != t.key
        ? ((i = "" + t.key),
          (r = { "=": "=0", ":": "=2" }),
          "$" +
            i.replace(/[=:]/g, function (t) {
              return r[t];
            }))
        : e.toString(36);
    }
    function P(t, e, i) {
      if (null == t) return t;
      var r = [],
        s = 0;
      return (
        !(function t(e, i, r, s, l) {
          var a,
            c,
            u,
            h = typeof e;
          ("undefined" === h || "boolean" === h) && (e = null);
          var f = !1;
          if (null === e) f = !0;
          else
            switch (h) {
              case "bigint":
              case "string":
              case "number":
                f = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case o:
                    f = !0;
                    break;
                  case p:
                    return t((f = e._init)(e._payload), i, r, s, l);
                }
            }
          if (f)
            return (
              (l = l(e)),
              (f = "" === s ? "." + C(e, 0) : s),
              T(l)
                ? ((r = ""),
                  null != f && (r = f.replace(L, "$&/") + "/"),
                  t(l, i, r, "", function (t) {
                    return t;
                  }))
                : null != l &&
                  (k(l) &&
                    ((a = l),
                    (c = r + (null == l.key || (e && e.key === l.key) ? "" : ("" + l.key).replace(L, "$&/") + "/") + f),
                    (l = M(a.type, c, a.props))),
                  i.push(l)),
              1
            );
          f = 0;
          var d = "" === s ? "." : s + ":";
          if (T(e)) for (var m = 0; m < e.length; m++) ((h = d + C((s = e[m]), m)), (f += t(s, i, r, h, l)));
          else if (
            "function" ==
            typeof (m =
              null === (u = e) || "object" != typeof u ? null : "function" == typeof (u = (g && u[g]) || u["@@iterator"]) ? u : null)
          )
            for (e = m.call(e), m = 0; !(s = e.next()).done;) ((h = d + C((s = s.value), m++)), (f += t(s, i, r, h, l)));
          else if ("object" === h) {
            if ("function" == typeof e.then)
              return t(
                (function (t) {
                  switch (t.status) {
                    case "fulfilled":
                      return t.value;
                    case "rejected":
                      throw t.reason;
                    default:
                      switch (
                        ("string" == typeof t.status
                          ? t.then(x, x)
                          : ((t.status = "pending"),
                            t.then(
                              function (e) {
                                "pending" === t.status && ((t.status = "fulfilled"), (t.value = e));
                              },
                              function (e) {
                                "pending" === t.status && ((t.status = "rejected"), (t.reason = e));
                              },
                            )),
                        t.status)
                      ) {
                        case "fulfilled":
                          return t.value;
                        case "rejected":
                          throw t.reason;
                      }
                  }
                  throw t;
                })(e),
                i,
                r,
                s,
                l,
              );
            throw Error(
              "Objects are not valid as a React child (found: " +
                ("[object Object]" === (i = String(e)) ? "object with keys {" + Object.keys(e).join(", ") + "}" : i) +
                "). If you meant to render a collection of children, use an array instead.",
            );
          }
          return f;
        })(t, r, "", "", function (t) {
          return e.call(i, t, s++);
        }),
        r
      );
    }
    function R(t) {
      if (-1 === t._status) {
        var e = t._result;
        ((e = e()).then(
          function (e) {
            (0 === t._status || -1 === t._status) && ((t._status = 1), (t._result = e));
          },
          function (e) {
            (0 === t._status || -1 === t._status) && ((t._status = 2), (t._result = e));
          },
        ),
          -1 === t._status && ((t._status = 0), (t._result = e)));
      }
      if (1 === t._status) return t._result.default;
      throw t._result;
    }
    var j =
      "function" == typeof reportError
        ? reportError
        : function (t) {
            if ("object" == typeof window && "function" == typeof window.ErrorEvent) {
              var e = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: "object" == typeof t && null !== t && "string" == typeof t.message ? String(t.message) : String(t),
                error: t,
              });
              if (!window.dispatchEvent(e)) return;
            } else if ("object" == typeof r.default && "function" == typeof r.default.emit)
              return void r.default.emit("uncaughtException", t);
            console.error(t);
          };
    ((i.Activity = m),
      (i.Children = {
        map: P,
        forEach: function (t, e, i) {
          P(
            t,
            function () {
              e.apply(this, arguments);
            },
            i,
          );
        },
        count: function (t) {
          var e = 0;
          return (
            P(t, function () {
              e++;
            }),
            e
          );
        },
        toArray: function (t) {
          return (
            P(t, function (t) {
              return t;
            }) || []
          );
        },
        only: function (t) {
          if (!k(t)) throw Error("React.Children.only expected to receive a single React element child.");
          return t;
        },
      }),
      (i.Component = S),
      (i.Fragment = s),
      (i.Profiler = a),
      (i.PureComponent = b),
      (i.StrictMode = l),
      (i.Suspense = f),
      (i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = O),
      (i.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function (t) {
          return O.H.useMemoCache(t);
        },
      }),
      (i.cache = function (t) {
        return function () {
          return t.apply(null, arguments);
        };
      }),
      (i.cacheSignal = function () {
        return null;
      }),
      (i.cloneElement = function (t, e, i) {
        if (null == t) throw Error("The argument must be a React element, but you passed " + t + ".");
        var r = v({}, t.props),
          n = t.key;
        if (null != e)
          for (o in (void 0 !== e.key && (n = "" + e.key), e))
            N.call(e, o) && "key" !== o && "__self" !== o && "__source" !== o && ("ref" !== o || void 0 !== e.ref) && (r[o] = e[o]);
        var o = arguments.length - 2;
        if (1 === o) r.children = i;
        else if (1 < o) {
          for (var s = Array(o), l = 0; l < o; l++) s[l] = arguments[l + 2];
          r.children = s;
        }
        return M(t.type, n, r);
      }),
      (i.createContext = function (t) {
        return (
          ((t = { $$typeof: u, _currentValue: t, _currentValue2: t, _threadCount: 0, Provider: null, Consumer: null }).Provider = t),
          (t.Consumer = { $$typeof: c, _context: t }),
          t
        );
      }),
      (i.createElement = function (t, e, i) {
        var r,
          n = {},
          o = null;
        if (null != e)
          for (r in (void 0 !== e.key && (o = "" + e.key), e))
            N.call(e, r) && "key" !== r && "__self" !== r && "__source" !== r && (n[r] = e[r]);
        var s = arguments.length - 2;
        if (1 === s) n.children = i;
        else if (1 < s) {
          for (var l = Array(s), a = 0; a < s; a++) l[a] = arguments[a + 2];
          n.children = l;
        }
        if (t && t.defaultProps) for (r in (s = t.defaultProps)) void 0 === n[r] && (n[r] = s[r]);
        return M(t, o, n);
      }),
      (i.createRef = function () {
        return { current: null };
      }),
      (i.forwardRef = function (t) {
        return { $$typeof: h, render: t };
      }),
      (i.isValidElement = k),
      (i.lazy = function (t) {
        return { $$typeof: p, _payload: { _status: -1, _result: t }, _init: R };
      }),
      (i.memo = function (t, e) {
        return { $$typeof: d, type: t, compare: void 0 === e ? null : e };
      }),
      (i.startTransition = function (t) {
        var e = O.T,
          i = {};
        O.T = i;
        try {
          var r = t(),
            n = O.S;
          (null !== n && n(i, r), "object" == typeof r && null !== r && "function" == typeof r.then && r.then(x, j));
        } catch (t) {
          j(t);
        } finally {
          (null !== e && null !== i.types && (e.types = i.types), (O.T = e));
        }
      }),
      (i.unstable_useCacheRefresh = function () {
        return O.H.useCacheRefresh();
      }),
      (i.use = function (t) {
        return O.H.use(t);
      }),
      (i.useActionState = function (t, e, i) {
        return O.H.useActionState(t, e, i);
      }),
      (i.useCallback = function (t, e) {
        return O.H.useCallback(t, e);
      }),
      (i.useContext = function (t) {
        return O.H.useContext(t);
      }),
      (i.useDebugValue = function () {}),
      (i.useDeferredValue = function (t, e) {
        return O.H.useDeferredValue(t, e);
      }),
      (i.useEffect = function (t, e) {
        return O.H.useEffect(t, e);
      }),
      (i.useEffectEvent = function (t) {
        return O.H.useEffectEvent(t);
      }),
      (i.useId = function () {
        return O.H.useId();
      }),
      (i.useImperativeHandle = function (t, e, i) {
        return O.H.useImperativeHandle(t, e, i);
      }),
      (i.useInsertionEffect = function (t, e) {
        return O.H.useInsertionEffect(t, e);
      }),
      (i.useLayoutEffect = function (t, e) {
        return O.H.useLayoutEffect(t, e);
      }),
      (i.useMemo = function (t, e) {
        return O.H.useMemo(t, e);
      }),
      (i.useOptimistic = function (t, e) {
        return O.H.useOptimistic(t, e);
      }),
      (i.useReducer = function (t, e, i) {
        return O.H.useReducer(t, e, i);
      }),
      (i.useRef = function (t) {
        return O.H.useRef(t);
      }),
      (i.useState = function (t) {
        return O.H.useState(t);
      }),
      (i.useSyncExternalStore = function (t, e, i) {
        return O.H.useSyncExternalStore(t, e, i);
      }),
      (i.useTransition = function () {
        return O.H.useTransition();
      }),
      (i.version = "19.2.4"));
  },
  91788,
  (t, e, i) => {
    "use strict";
    e.exports = t.r(61556);
  },
  41705,
  (t, e, i) => {
    "use strict";
    i._ = function (t) {
      return t && t.__esModule ? t : { default: t };
    };
  },
  13584,
  (t, e, i) => {
    "use strict";
    (Object.defineProperty(i, "__esModule", { value: !0 }),
      Object.defineProperty(i, "HeadManagerContext", {
        enumerable: !0,
        get: function () {
          return r;
        },
      }));
    let r = t.r(41705)._(t.r(91788)).default.createContext({});
  },
  94470,
  (t, e, i) => {
    "use strict";
    (Object.defineProperty(i, "__esModule", { value: !0 }),
      Object.defineProperty(i, "warnOnce", {
        enumerable: !0,
        get: function () {
          return r;
        },
      }));
    let r = (t) => {};
  },
  52456,
  (t, e, i) => {
    "use strict";
    function r(t) {
      if ("function" != typeof WeakMap) return null;
      var e = new WeakMap(),
        i = new WeakMap();
      return (r = function (t) {
        return t ? i : e;
      })(t);
    }
    i._ = function (t, e) {
      if (!e && t && t.__esModule) return t;
      if (null === t || ("object" != typeof t && "function" != typeof t)) return { default: t };
      var i = r(e);
      if (i && i.has(t)) return i.get(t);
      var n = { __proto__: null },
        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var s in t)
        if ("default" !== s && Object.prototype.hasOwnProperty.call(t, s)) {
          var l = o ? Object.getOwnPropertyDescriptor(t, s) : null;
          l && (l.get || l.set) ? Object.defineProperty(n, s, l) : (n[s] = t[s]);
        }
      return ((n.default = t), i && i.set(t, n), n);
    };
  },
  94941,
  (t, e, i) => {
    "use strict";
    (Object.defineProperty(i, "__esModule", { value: !0 }),
      Object.defineProperty(i, "default", {
        enumerable: !0,
        get: function () {
          return l;
        },
      }));
    let r = t.r(91788),
      n = "u" < typeof window,
      o = n ? () => {} : r.useLayoutEffect,
      s = n ? () => {} : r.useEffect;
    function l(t) {
      let { headManager: e, reduceComponentsToState: i } = t;
      function l() {
        if (e && e.mountedInstances) {
          let t = r.Children.toArray(Array.from(e.mountedInstances).filter(Boolean));
          e.updateHead(i(t));
        }
      }
      return (
        n && (e?.mountedInstances?.add(t.children), l()),
        o(
          () => (
            e?.mountedInstances?.add(t.children),
            () => {
              e?.mountedInstances?.delete(t.children);
            }
          ),
        ),
        o(
          () => (
            e && (e._pendingUpdate = l),
            () => {
              e && (e._pendingUpdate = l);
            }
          ),
        ),
        s(
          () => (
            e && e._pendingUpdate && (e._pendingUpdate(), (e._pendingUpdate = null)),
            () => {
              e && e._pendingUpdate && (e._pendingUpdate(), (e._pendingUpdate = null));
            }
          ),
        ),
        null
      );
    }
  },
  80963,
  (t, e, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", { value: !0 });
    var r = {
      default: function () {
        return m;
      },
      defaultHead: function () {
        return h;
      },
    };
    for (var n in r) Object.defineProperty(i, n, { enumerable: !0, get: r[n] });
    let o = t.r(41705),
      s = t.r(52456),
      l = t.r(91398),
      a = s._(t.r(91788)),
      c = o._(t.r(94941)),
      u = t.r(13584);
    function h() {
      return [
        (0, l.jsx)("meta", { charSet: "utf-8" }, "charset"),
        (0, l.jsx)("meta", { name: "viewport", content: "width=device-width" }, "viewport"),
      ];
    }
    function f(t, e) {
      return "string" == typeof e || "number" == typeof e
        ? t
        : e.type === a.default.Fragment
          ? t.concat(
              a.default.Children.toArray(e.props.children).reduce(
                (t, e) => ("string" == typeof e || "number" == typeof e ? t : t.concat(e)),
                [],
              ),
            )
          : t.concat(e);
    }
    t.r(94470);
    let d = ["name", "httpEquiv", "charSet", "itemProp"];
    function p(t) {
      let e, i, r, n;
      return t
        .reduce(f, [])
        .reverse()
        .concat(h().reverse())
        .filter(
          ((e = new Set()),
          (i = new Set()),
          (r = new Set()),
          (n = {}),
          (t) => {
            let o = !0,
              s = !1;
            if (t.key && "number" != typeof t.key && t.key.indexOf("$") > 0) {
              s = !0;
              let i = t.key.slice(t.key.indexOf("$") + 1);
              e.has(i) ? (o = !1) : e.add(i);
            }
            switch (t.type) {
              case "title":
              case "base":
                i.has(t.type) ? (o = !1) : i.add(t.type);
                break;
              case "meta":
                for (let e = 0, i = d.length; e < i; e++) {
                  let i = d[e];
                  if (t.props.hasOwnProperty(i))
                    if ("charSet" === i) r.has(i) ? (o = !1) : r.add(i);
                    else {
                      let e = t.props[i],
                        r = n[i] || new Set();
                      ("name" !== i || !s) && r.has(e) ? (o = !1) : (r.add(e), (n[i] = r));
                    }
                }
            }
            return o;
          }),
        )
        .reverse()
        .map((t, e) => {
          let i = t.key || e;
          return a.default.cloneElement(t, { key: i });
        });
    }
    let m = function ({ children: t }) {
      let e = (0, a.useContext)(u.HeadManagerContext);
      return (0, l.jsx)(c.default, { reduceComponentsToState: p, headManager: e, children: t });
    };
    ("function" == typeof i.default || ("object" == typeof i.default && null !== i.default)) &&
      void 0 === i.default.__esModule &&
      (Object.defineProperty(i.default, "__esModule", { value: !0 }), Object.assign(i.default, i), (e.exports = i.default));
  },
  89129,
  (t, e, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", { value: !0 });
    var r = {
      DecodeError: function () {
        return y;
      },
      MiddlewareNotFoundError: function () {
        return _;
      },
      MissingStaticPage: function () {
        return S;
      },
      NormalizeError: function () {
        return v;
      },
      PageNotFoundError: function () {
        return w;
      },
      SP: function () {
        return m;
      },
      ST: function () {
        return g;
      },
      WEB_VITALS: function () {
        return o;
      },
      execOnce: function () {
        return s;
      },
      getDisplayName: function () {
        return h;
      },
      getLocationOrigin: function () {
        return c;
      },
      getURL: function () {
        return u;
      },
      isAbsoluteUrl: function () {
        return a;
      },
      isResSent: function () {
        return f;
      },
      loadGetInitialProps: function () {
        return p;
      },
      normalizeRepeatedSlashes: function () {
        return d;
      },
      stringifyError: function () {
        return b;
      },
    };
    for (var n in r) Object.defineProperty(i, n, { enumerable: !0, get: r[n] });
    let o = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
    function s(t) {
      let e,
        i = !1;
      return (...r) => (i || ((i = !0), (e = t(...r))), e);
    }
    let l = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
      a = (t) => l.test(t);
    function c() {
      let { protocol: t, hostname: e, port: i } = window.location;
      return `${t}//${e}${i ? ":" + i : ""}`;
    }
    function u() {
      let { href: t } = window.location,
        e = c();
      return t.substring(e.length);
    }
    function h(t) {
      return "string" == typeof t ? t : t.displayName || t.name || "Unknown";
    }
    function f(t) {
      return t.finished || t.headersSent;
    }
    function d(t) {
      let e = t.split("?");
      return e[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (e[1] ? `?${e.slice(1).join("?")}` : "");
    }
    async function p(t, e) {
      let i = e.res || (e.ctx && e.ctx.res);
      if (!t.getInitialProps) return e.ctx && e.Component ? { pageProps: await p(e.Component, e.ctx) } : {};
      let r = await t.getInitialProps(e);
      if (i && f(i)) return r;
      if (!r)
        throw Object.defineProperty(
          Error(`"${h(t)}.getInitialProps()" should resolve to an object. But found "${r}" instead.`),
          "__NEXT_ERROR_CODE",
          { value: "E1025", enumerable: !1, configurable: !0 },
        );
      return r;
    }
    let m = "u" > typeof performance,
      g = m && ["mark", "measure", "getEntriesByName"].every((t) => "function" == typeof performance[t]);
    class y extends Error {}
    class v extends Error {}
    class w extends Error {
      constructor(t) {
        (super(), (this.code = "ENOENT"), (this.name = "PageNotFoundError"), (this.message = `Cannot find module for page: ${t}`));
      }
    }
    class S extends Error {
      constructor(t, e) {
        (super(), (this.message = `Failed to load static file for page: ${t} ${e}`));
      }
    }
    class _ extends Error {
      constructor() {
        (super(), (this.code = "ENOENT"), (this.message = "Cannot find the middleware module"));
      }
    }
    function b(t) {
      return JSON.stringify({ message: t.message, stack: t.stack });
    }
  },
  20262,
  (t, e, i) => {
    "use strict";
    let r;
    Object.defineProperty(i, "__esModule", { value: !0 });
    var n = {
      getAssetToken: function () {
        return a;
      },
      getAssetTokenQuery: function () {
        return c;
      },
      getDeploymentId: function () {
        return s;
      },
      getDeploymentIdQuery: function () {
        return l;
      },
    };
    for (var o in n) Object.defineProperty(i, o, { enumerable: !0, get: n[o] });
    function s() {
      return r;
    }
    function l(t = !1) {
      let e = r;
      return e ? `${t ? "&" : "?"}dpl=${e}` : "";
    }
    function a() {
      return !1;
    }
    function c(t = !1) {
      return "";
    }
    "u" > typeof window ? ((r = document.documentElement.dataset.dplId), delete document.documentElement.dataset.dplId) : (r = void 0);
  },
  17431,
  (t, e, i) => {
    "use strict";
    var r = t.r(91788);
    function n(t) {
      var e = "https://react.dev/errors/" + t;
      if (1 < arguments.length) {
        e += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var i = 2; i < arguments.length; i++) e += "&args[]=" + encodeURIComponent(arguments[i]);
      }
      return (
        "Minified React error #" +
        t +
        "; visit " +
        e +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    function o() {}
    var s = {
        d: {
          f: o,
          r: function () {
            throw Error(n(522));
          },
          D: o,
          C: o,
          L: o,
          m: o,
          X: o,
          S: o,
          M: o,
        },
        p: 0,
        findDOMNode: null,
      },
      l = Symbol.for("react.portal"),
      a = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function c(t, e) {
      return "font" === t ? "" : "string" == typeof e ? ("use-credentials" === e ? e : "") : void 0;
    }
    ((i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s),
      (i.createPortal = function (t, e) {
        var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!e || (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)) throw Error(n(299));
        return (function (t, e, i) {
          var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
          return { $$typeof: l, key: null == r ? null : "" + r, children: t, containerInfo: e, implementation: i };
        })(t, e, null, i);
      }),
      (i.flushSync = function (t) {
        var e = a.T,
          i = s.p;
        try {
          if (((a.T = null), (s.p = 2), t)) return t();
        } finally {
          ((a.T = e), (s.p = i), s.d.f());
        }
      }),
      (i.preconnect = function (t, e) {
        "string" == typeof t &&
          ((e = e ? ("string" == typeof (e = e.crossOrigin) ? ("use-credentials" === e ? e : "") : void 0) : null), s.d.C(t, e));
      }),
      (i.prefetchDNS = function (t) {
        "string" == typeof t && s.d.D(t);
      }),
      (i.preinit = function (t, e) {
        if ("string" == typeof t && e && "string" == typeof e.as) {
          var i = e.as,
            r = c(i, e.crossOrigin),
            n = "string" == typeof e.integrity ? e.integrity : void 0,
            o = "string" == typeof e.fetchPriority ? e.fetchPriority : void 0;
          "style" === i
            ? s.d.S(t, "string" == typeof e.precedence ? e.precedence : void 0, { crossOrigin: r, integrity: n, fetchPriority: o })
            : "script" === i &&
              s.d.X(t, { crossOrigin: r, integrity: n, fetchPriority: o, nonce: "string" == typeof e.nonce ? e.nonce : void 0 });
        }
      }),
      (i.preinitModule = function (t, e) {
        if ("string" == typeof t)
          if ("object" == typeof e && null !== e) {
            if (null == e.as || "script" === e.as) {
              var i = c(e.as, e.crossOrigin);
              s.d.M(t, {
                crossOrigin: i,
                integrity: "string" == typeof e.integrity ? e.integrity : void 0,
                nonce: "string" == typeof e.nonce ? e.nonce : void 0,
              });
            }
          } else null == e && s.d.M(t);
      }),
      (i.preload = function (t, e) {
        if ("string" == typeof t && "object" == typeof e && null !== e && "string" == typeof e.as) {
          var i = e.as,
            r = c(i, e.crossOrigin);
          s.d.L(t, i, {
            crossOrigin: r,
            integrity: "string" == typeof e.integrity ? e.integrity : void 0,
            nonce: "string" == typeof e.nonce ? e.nonce : void 0,
            type: "string" == typeof e.type ? e.type : void 0,
            fetchPriority: "string" == typeof e.fetchPriority ? e.fetchPriority : void 0,
            referrerPolicy: "string" == typeof e.referrerPolicy ? e.referrerPolicy : void 0,
            imageSrcSet: "string" == typeof e.imageSrcSet ? e.imageSrcSet : void 0,
            imageSizes: "string" == typeof e.imageSizes ? e.imageSizes : void 0,
            media: "string" == typeof e.media ? e.media : void 0,
          });
        }
      }),
      (i.preloadModule = function (t, e) {
        if ("string" == typeof t)
          if (e) {
            var i = c(e.as, e.crossOrigin);
            s.d.m(t, {
              as: "string" == typeof e.as && "script" !== e.as ? e.as : void 0,
              crossOrigin: i,
              integrity: "string" == typeof e.integrity ? e.integrity : void 0,
            });
          } else s.d.m(t);
      }),
      (i.requestFormReset = function (t) {
        s.d.r(t);
      }),
      (i.unstable_batchedUpdates = function (t, e) {
        return t(e);
      }),
      (i.useFormState = function (t, e, i) {
        return a.H.useFormState(t, e, i);
      }),
      (i.useFormStatus = function () {
        return a.H.useHostTransitionStatus();
      }),
      (i.version = "19.2.4"));
  },
  30943,
  (t, e, i) => {
    "use strict";
    (!(function t() {
      if ("u" > typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
        } catch (t) {
          console.error(t);
        }
    })(),
      (e.exports = t.r(17431)));
  },
  15125,
  (t, e, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", { value: !0 });
    var r = {
      VALID_LOADERS: function () {
        return o;
      },
      imageConfigDefault: function () {
        return s;
      },
    };
    for (var n in r) Object.defineProperty(i, n, { enumerable: !0, get: r[n] });
    let o = ["default", "imgix", "cloudinary", "akamai", "custom"],
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
  (t, e, i) => {
    "use strict";
    (Object.defineProperty(i, "__esModule", { value: !0 }),
      Object.defineProperty(i, "ImageConfigContext", {
        enumerable: !0,
        get: function () {
          return o;
        },
      }));
    let r = t.r(41705)._(t.r(91788)),
      n = t.r(15125),
      o = r.default.createContext(n.imageConfigDefault);
  },
  93087,
  (t) => {
    "use strict";
    var e = t.i(33592),
      i = t.i(91424),
      r = t.i(83026),
      n = t.i(88905),
      o = t.i(91788),
      s = t.i(44063),
      l = t.i(22098),
      a = t.i(62448),
      c = t.i(61411),
      u = t.i(61064),
      h = t.i(50833);
    let f = () => ({
        current: 0,
        offset: [],
        progress: 0,
        scrollLength: 0,
        targetOffset: 0,
        targetLength: 0,
        containerLength: 0,
        velocity: 0,
      }),
      d = () => ({ time: 0, x: f(), y: f() }),
      p = { x: { length: "Width", position: "Left" }, y: { length: "Height", position: "Top" } };
    t.i(50461);
    var m = t.i(71955);
    let g = { start: 0, center: 0.5, end: 1 };
    function y(t, e, i = 0) {
      let r = 0;
      if ((t in g && (t = g[t]), "string" == typeof t)) {
        let e = parseFloat(t);
        t.endsWith("px")
          ? (r = e)
          : t.endsWith("%")
            ? (t = e / 100)
            : t.endsWith("vw")
              ? (r = (e / 100) * document.documentElement.clientWidth)
              : t.endsWith("vh")
                ? (r = (e / 100) * document.documentElement.clientHeight)
                : (t = e);
      }
      return ("number" == typeof t && (r = e * t), i + r);
    }
    let v = [0, 0];
    function w(t, e, i, r) {
      let n = Array.isArray(t) ? t : v,
        o = 0;
      return (
        "number" == typeof t
          ? (n = [t, t])
          : "string" == typeof t && (n = (t = t.trim()).includes(" ") ? t.split(" ") : [t, g[t] ? t : "0"]),
        (o = y(n[0], i, r)) - y(n[1], e)
      );
    }
    let S = [
      [0, 0],
      [1, 1],
    ];
    var _ = t.i(51723);
    let b = new WeakMap(),
      E = new WeakMap(),
      T = new WeakMap(),
      x = new WeakMap(),
      O = (t) => (t === document.scrollingElement ? window : t);
    function N(t, { container: e = document.scrollingElement, trackContentSize: i = !1, ...r } = {}) {
      if (!e) return s.noop;
      let n = T.get(e);
      n || ((n = new Set()), T.set(e, n));
      let o = (function (t, e, i, r = {}) {
        let { target: n } = r,
          o = n || r.offset;
        return {
          measure: (e) => {
            if (o) {
              for (let t in ((i.time = e.time), p)) {
                let { offset: r } = i[t];
                (Object.assign(i[t], e[t]), (i[t].offset = r));
              }
              if (n && n !== t) {
                let e = (function (t, e) {
                    let i = { x: 0, y: 0 },
                      r = t;
                    for (; r && r !== e;)
                      if ((0, _.isHTMLElement)(r)) ((i.x += r.offsetLeft), (i.y += r.offsetTop), (r = r.offsetParent));
                      else if ("svg" === r.tagName) {
                        let t = r.getBoundingClientRect(),
                          e = (r = r.parentElement).getBoundingClientRect();
                        ((i.x += t.left - e.left), (i.y += t.top - e.top));
                      } else if (r instanceof SVGGraphicsElement) {
                        let { x: t, y: e } = r.getBBox();
                        ((i.x += t), (i.y += e));
                        let n = null,
                          o = r.parentNode;
                        for (; !n;) ("svg" === o.tagName && (n = o), (o = r.parentNode));
                        r = n;
                      } else break;
                    return i;
                  })(n, t),
                  r = "getBBox" in n && "svg" !== n.tagName ? n.getBBox() : { width: n.clientWidth, height: n.clientHeight };
                ((i.x.targetOffset = e.x), (i.y.targetOffset = e.y), (i.x.targetLength = r.width), (i.y.targetLength = r.height));
              }
              !(function (t, e) {
                let { offset: i = S, axis: r = "y" } = e,
                  n = t[r];
                n.offset.length = 0;
                let o = i.length;
                for (let t = 0; t < o; t++) n.offset[t] = w(i[t], n.containerLength, n.targetLength, n.targetOffset);
                n.progress = (0, m.clamp)(
                  0,
                  1,
                  (function (t, e) {
                    let i = t.length - 1;
                    if (i < 1) return 0;
                    let r = t[0] > t[i],
                      n = (e) => t[r ? i - e : e];
                    if (t[0] === t[1] && e < n(0)) return +!!r;
                    let o = 0;
                    for (; o < i - 1 && e >= n(o + 1);) o++;
                    let s = (o + (0, u.progress)(n(o), n(o + 1), e)) / i;
                    return r ? 1 - s : s;
                  })(n.offset, n.current),
                );
              })(i, r);
            }
          },
          notify: (t) => e(o ? i : t),
        };
      })(e, t, d(), r);
      if ((n.add(o), !b.has(e))) {
        let t = d(),
          i = () => {
            var i = c.frameData.timestamp;
            for (let r in p)
              !(function (t, e, i, r) {
                let n = i[e],
                  { length: o, position: s } = p[e],
                  l = n.current,
                  a = i.time;
                ((n.current = Math.abs(t[`scroll${s}`])),
                  (n.containerLength = t[`client${o}`]),
                  (n.targetLength = t[`scroll${o}`]),
                  (n.scrollLength = n.targetLength - n.containerLength),
                  (n.offset.length = 0),
                  (n.offset[0] = 0),
                  (n.offset[1] = n.scrollLength),
                  (n.progress = (0, u.progress)(0, n.scrollLength, n.current)));
                let c = r - a;
                n.velocity = c > 50 ? 0 : (0, h.velocityPerSecond)(n.current - l, c);
              })(e, r, t, i);
            for (let e of ((t.time = i), n)) e.measure(t);
            a.frame.preUpdate(r);
          },
          r = () => {
            for (let e of n) e.notify(t);
          },
          o = () => a.frame.read(i);
        b.set(e, o);
        let s = O(e);
        (window.addEventListener("resize", o),
          e !== document.documentElement && E.set(e, (0, l.resize)(e, o)),
          s.addEventListener("scroll", o),
          o());
      }
      if (i && !x.has(e)) {
        let t = b.get(e),
          i = { width: e.scrollWidth, height: e.scrollHeight },
          r = a.frame.read(() => {
            let r = e.scrollWidth,
              n = e.scrollHeight;
            (i.width !== r || i.height !== n) && (t(), (i.width = r), (i.height = n));
          }, !0);
        x.set(e, r);
      }
      let f = b.get(e);
      return (
        a.frame.read(f, !1, !0),
        () => {
          (0, a.cancelFrame)(f);
          let t = T.get(e);
          if (!t || (t.delete(o), t.size)) return;
          T.delete(e);
          let i = b.get(e);
          (b.delete(e), i && (O(e).removeEventListener("scroll", i), E.get(e)?.(), window.removeEventListener("resize", i)));
          let r = x.get(e);
          r && ((0, a.cancelFrame)(r), x.delete(e));
        }
      );
    }
    let M = new Map(),
      k = (t) => {
        if (/v/u.test(t)) return [];
        let e = w(t, 0, 0, 0);
        return [w(t, 0, 1, 0) - e, e - w(t, 1, 0, 0), e];
      },
      L = ([t, e, i]) => !i && (0 === e || 1 === e) && `${e ? "entry" : "exit"}-crossing ${100 * t}%`;
    function C(t = S) {
      if (2 !== t.length) return;
      let [e, i] = t.map(k),
        r = [L(e), L(i)],
        n = i[0] - e[0],
        o = e[1] - i[1];
      if (r[0] && r[1] && (n || o)) return { points: r, a: n, b: o, cover: !e[0] && 1 === n && 1 === o };
    }
    function P(t, { axis: e = "y", source: r, container: n = document.scrollingElement, ...o } = {}) {
      if (!n) return s.noop;
      let a = { axis: e, container: r || n, ...o };
      return "function" == typeof t
        ? N((i) => t(i[e].progress, i), a)
        : (function (t, e) {
            let r,
              { target: n, container: o, axis: s } = e,
              a = n && C(e.offset),
              c = !("u" < typeof window) && (n ? (0, i.supportsViewTimeline)() : (0, i.supportsScrollTimeline)()) && (n ? !!a : !e.offset),
              u = new Map(),
              h = new Set(),
              f = !1,
              d = (t, e) => {
                let [i, r] = a.points;
                (e.effect.updateTiming({ direction: f ? ("normal" === t ? "reverse" : "alternate-reverse") : t }),
                  Object.assign(e, { rangeStart: f ? r : i, rangeEnd: f ? i : r }),
                  e.play());
              },
              p = [
                t.attachTimeline({
                  get timeline() {
                    return c
                      ? (function ({ container: t, target: e, axis: i }) {
                          let r = M.get(t);
                          r || ((r = new Map()), M.set(t, r));
                          let n = e ?? "self",
                            o = r.get(n);
                          return (
                            o || ((o = {}), r.set(n, o)),
                            o[i] || (o[i] = e ? new ViewTimeline({ subject: e, axis: i }) : new ScrollTimeline({ source: t, axis: i }))
                          );
                        })(e)
                      : void 0;
                  },
                  onAttach:
                    a &&
                    ((t) => {
                      let e = t.effect.getTiming().direction;
                      (u.set(t, e), d(e, t));
                    }),
                  observe: (t) => (
                    t.pause(),
                    h.add(t),
                    r ||
                      (r = N((t) => {
                        h.forEach((e) => {
                          e.time = e.iterationDuration * t[s].progress;
                        });
                      }, e)),
                    () => h.delete(t)
                  ),
                }),
              ];
            if (c && a) {
              let { a: t, b: e } = a,
                i = "y" === s ? "clientHeight" : "clientWidth",
                r = () => {
                  f !== (f = t * n[i] + e * o[i] < 0) && u.forEach(d);
                };
              (r(), t * e < 0 && p.push((0, l.resize)(r), (0, l.resize)([n, o], r)));
            }
            return () => {
              (p.forEach((t) => t()), r?.());
            };
          })(t, a);
    }
    var R = t.i(57126),
      j = t.i(39016);
    let z = () => ({
        scrollX: (0, r.motionValue)(0),
        scrollY: (0, r.motionValue)(0),
        scrollXProgress: (0, r.motionValue)(0),
        scrollYProgress: (0, r.motionValue)(0),
      }),
      H = (t) => !!t && !t.current;
    function A(t, i, r, n) {
      return {
        factory: (o) => {
          let s,
            l = () => {
              H(r) || H(n)
                ? e.microtask.read(l)
                : (s = P(o, { ...i, axis: t, container: r?.current || void 0, target: n?.current || void 0 }));
            };
          return (
            e.microtask.read(l),
            () => {
              ((0, e.cancelMicrotask)(l), s?.());
            }
          );
        },
        times: [0, 1],
        keyframes: [0, 1],
        ease: (t) => t,
        duration: 1,
      };
    }
    t.s(
      [
        "useScroll",
        0,
        function ({ container: t, target: r, ...s } = {}) {
          var l;
          let a = (0, R.useConstant)(z);
          ((l = s.offset),
            !("u" < typeof window) &&
              (r ? (0, i.supportsViewTimeline)() && !!C(l) : (0, i.supportsScrollTimeline)() && !l) &&
              ((a.scrollXProgress.accelerate = A("x", s, t, r)), (a.scrollYProgress.accelerate = A("y", s, t, r))));
          let c = (0, o.useRef)(null),
            u = (0, o.useRef)(!1),
            h = (0, o.useCallback)(
              () => (
                (c.current = P(
                  (t, { x: e, y: i }) => {
                    (a.scrollX.set(e.current),
                      a.scrollXProgress.set(e.progress),
                      a.scrollY.set(i.current),
                      a.scrollYProgress.set(i.progress));
                  },
                  { ...s, container: t?.current || void 0, target: r?.current || void 0 },
                )),
                () => {
                  c.current?.();
                }
              ),
              [t, r, JSON.stringify(s.offset)],
            );
          return (
            (0, j.useIsomorphicLayoutEffect)(() => {
              if (((u.current = !1), !(H(t) || H(r)))) return h();
              u.current = !0;
            }, [h]),
            (0, o.useEffect)(() => {
              let i;
              if (!u.current) return;
              let o = () => {
                let e = H(t),
                  o = H(r);
                ((0, n.invariant)(!e, "Container ref is defined but not hydrated", "use-scroll-ref"),
                  (0, n.invariant)(!o, "Target ref is defined but not hydrated", "use-scroll-ref"),
                  e || o || (i = h()));
              };
              return (
                e.microtask.read(o),
                () => {
                  ((0, e.cancelMicrotask)(o), i?.());
                }
              );
            }, [h]),
            a
          );
        },
      ],
      93087,
    );
  },
  63579,
  94055,
  (t) => {
    "use strict";
    t.i(83026);
    var e = t.i(151),
      i = t.i(86791),
      r = t.i(65919),
      n = t.i(25412),
      o = t.i(62448);
    let s = new Set(),
      l = ({ timestamp: t }) => {
        s.forEach((e) => e.tick(t));
      };
    class a extends n.WithPromise {
      constructor(t) {
        (super(),
          (this.state = "idle"),
          (this.startTime = 0),
          (this.currentTime = 0),
          (this.started = !1),
          (this.hasNextTarget = !1),
          (this.nextTarget = 0),
          (this.stop = () => {
            "idle" !== this.state && (this.teardown(), this.options.onStop?.());
          }),
          (this.options = t),
          (this.factory = t.type),
          (this.generator = this.factory(t)));
        const { driver: e } = t;
        (e && (this.driver = e((t) => this.tick(t))),
          (this.startTime = this.now()),
          (this.state = "running"),
          this.driver ? this.driver.start() : (s.size || o.frame.update(l, !0), s.add(this)));
      }
      setTarget(t, e) {
        ((this.nextTarget = t), (this.nextVelocity = e), (this.hasNextTarget = !0));
      }
      retarget(t, e) {
        let { options: i, generator: r } = this;
        ((i.keyframes = t),
          (i.velocity = e),
          (this.startTime = this.now()),
          (this.currentTime = 0),
          r.retarget ? r.retarget(t, e) : (this.generator = this.factory(i)));
      }
      tick(t) {
        let { options: e, hasNextTarget: i } = this,
          { delay: r = 0, onUpdate: n, onPlay: o } = e,
          s = Math.round(t - this.startTime) - r,
          l = (this.currentTime = Math.max(0, s)),
          a = this.generator.next(l),
          c = s < 0 ? e.keyframes[0] : a.value;
        if (i) {
          this.hasNextTarget = !1;
          let { keyframes: t } = e;
          ((t[0] = c), (t[1] = this.nextTarget), this.retarget(t, this.nextVelocity ?? this.getGeneratorVelocity()));
        }
        ((i || !this.started) && ((this.started = !0), o?.()),
          "running" === this.state &&
            (n?.(c),
            a.done &&
              s >= 0 &&
              !i &&
              !this.hasNextTarget &&
              "running" === this.state &&
              (this.notifyFinished(), this.teardown(), (this.state = "finished"), e.onComplete?.())));
      }
      getGeneratorVelocity() {
        return (0, r.calcGeneratorVelocity)(this.generator, this.currentTime, this.options.velocity);
      }
      now() {
        return this.driver ? this.driver.now() : i.time.now();
      }
      teardown() {
        ((this.state = "idle"), this.driver ? this.driver.stop() : (s.delete(this), s.size || (0, o.cancelFrame)(l)));
      }
    }
    var c = t.i(52581),
      u = t.i(65907);
    function h(t, e, i) {
      let r,
        n = t.get(),
        o = null,
        s = "string" == typeof n ? n.replace(/[\d.-]/g, "") : void 0,
        l = (t) => r(s ? t + s : t),
        h = () => t.events.animationStart?.notify(),
        f = () => {
          (o && (o.stop(), (o = null)), (t.animation = void 0));
        };
      if (
        (t.attach((e, n) => {
          r = n;
          let s = (0, c.asNumber)(e);
          if (o?.state === "running") return void o.setTarget(s, i.velocity);
          let u = (0, c.asNumber)(t.get()),
            d = o ? o.getGeneratorVelocity() : t.getVelocity();
          if ((f(), u === s)) return;
          let p = (o = new a({ keyframes: [u, s], velocity: d, restDelta: 0.001, restSpeed: 0.01, ...i, onUpdate: l, onPlay: h }));
          ((t.animation = p),
            p.then(() => {
              o === p && ((o = null), (t.animation = void 0), t.events.animationComplete?.notify());
            }));
        }, f),
        (0, u.isMotionValue)(e))
      ) {
        let r = !0 === i.skipInitialAnimation,
          n = e.on("change", (e) => {
            var i, n, o, l;
            r ? ((r = !1), t.jump(((i = e), (n = s) ? i + n : i), !1)) : t.set(((o = e), (l = s) ? o + l : o));
          }),
          o = t.on("destroy", n);
        return () => {
          (n(), o());
        };
      }
      return f;
    }
    t.s(
      [
        "attachSpring",
        0,
        function (t, i, r) {
          return h(t, i, { ...r, type: e.spring });
        },
      ],
      63579,
    );
    var f = t.i(88019),
      d = t.i(91905);
    t.s(
      [
        "attachFollow",
        0,
        function (t, e, i = {}) {
          let r = { type: "spring", ...i };
          return ((0, d.replaceTransitionType)(r), (r.type = r.type || f.keyframes), h(t, e, r));
        },
      ],
      94055,
    );
  },
  41298,
  (t) => {
    "use strict";
    var e = t.i(83026),
      i = t.i(91788),
      r = t.i(12600),
      n = t.i(57126);
    t.s([
      "useMotionValue",
      0,
      function (t) {
        let o = (0, n.useConstant)(() => (0, e.motionValue)(t)),
          { isStatic: s } = (0, i.useContext)(r.MotionConfigContext);
        if (s) {
          let [, e] = (0, i.useState)(t);
          (0, i.useEffect)(() => o.on("change", e), []);
        }
        return o;
      },
    ]);
  },
  65038,
  (t) => {
    "use strict";
    var e = t.i(54833);
    t.s([
      "transform",
      0,
      function (...t) {
        let i = !Array.isArray(t[0]),
          r = i ? 0 : -1,
          n = t[0 + r],
          o = t[1 + r],
          s = t[2 + r],
          l = t[3 + r],
          a = (0, e.interpolate)(o, s, l);
        return i ? a(n) : a;
      },
    ]);
  },
  63120,
  (t) => {
    "use strict";
    var e = t.i(65038),
      i = t.i(57126),
      r = t.i(62448),
      n = t.i(39016),
      o = t.i(41298);
    function s(t, e) {
      let i = (0, o.useMotionValue)(e()),
        s = () => i.set(e());
      return (
        s(),
        (0, n.useIsomorphicLayoutEffect)(() => {
          let e = () => r.frame.preRender(s, !1, !0),
            i = t.map((t) => t.on("change", e));
          return () => {
            (i.forEach((t) => t()), (0, r.cancelFrame)(s));
          };
        }),
        i
      );
    }
    var l = t.i(83026);
    function a(t, e) {
      let r = (0, i.useConstant)(() => []);
      return s(t, () => {
        r.length = 0;
        let i = t.length;
        for (let e = 0; e < i; e++) r[e] = t[e].get();
        return e(r);
      });
    }
    t.s(
      [
        "useTransform",
        0,
        function t(r, n, o, c) {
          if ("function" == typeof r) {
            let t;
            return (
              (l.collectMotionValues.current = []),
              r(),
              (t = s(l.collectMotionValues.current, r)),
              (l.collectMotionValues.current = void 0),
              t
            );
          }
          if (void 0 !== o && !Array.isArray(o) && "function" != typeof n) {
            var u = r,
              h = n,
              f = o,
              d = c;
            let e = (0, i.useConstant)(() => Object.keys(f)),
              s = (0, i.useConstant)(() => ({}));
            for (let i of e) s[i] = t(u, h, f[i], d);
            return s;
          }
          let p = "function" == typeof n ? n : (0, e.transform)(n, o, c),
            m = Array.isArray(r) ? a(r, p) : a([r], ([t]) => p(t)),
            g = Array.isArray(r) ? void 0 : r.accelerate;
          if (g && !g.isTransformed && "function" != typeof n && Array.isArray(o) && c?.clamp !== !1) {
            let t = c?.ease;
            m.accelerate = {
              ...g,
              times: [0, ...n, 1],
              keyframes: [o[0], ...o, o[o.length - 1]],
              isTransformed: !0,
              ...(t ? { ease: Array.isArray(t) ? [t[0], ...t] : t } : {}),
            };
          }
          return m;
        },
      ],
      63120,
    );
  },
  83218,
  (t) => {
    "use strict";
    var e = t.i(63579),
      i = t.i(65907);
    t.i(94055);
    var r = t.i(91788),
      n = t.i(12600),
      o = t.i(41298),
      s = t.i(63120);
    t.s(
      [
        "useSpring",
        0,
        function (t, l = {}) {
          return (function (t, e, l) {
            let { isStatic: a } = (0, r.useContext)(n.MotionConfigContext),
              c = () => ((0, i.isMotionValue)(t) ? t.get() : t);
            if (a) return (0, s.useTransform)(c);
            let u = (0, o.useMotionValue)(c());
            return ((0, r.useInsertionEffect)(() => l(u, t, e), [u, JSON.stringify(e)]), u);
          })(t, l, e.attachSpring);
        },
      ],
      83218,
    );
  },
  80099,
  (t) => {
    t.v({ className: "dm_sans_d583a617-module__574PkW__className" });
  },
  25072,
  (t) => {
    t.v({ className: "space_grotesk_f4d932a1-module__tDzxSa__className" });
  },
  86953,
  (t) => {
    t.v({ className: "jetbrains_mono_a145b5e7-module__jMfsEq__className" });
  },
  16027,
  (t) => {
    "use strict";
    var e = t.i(91398),
      i = t.i(58678),
      r = t.i(91788),
      n = t.i(87314),
      o = t.i(12600),
      s = t.i(57126);
    function l({ children: t, ...i }) {
      let a = (0, r.useContext)(o.MotionConfigContext);
      (((i = { ...a, ...i }).transition = (0, n.resolveTransition)(i.transition, a.transition)),
        (i.isStatic = (0, s.useConstant)(() => i.isStatic)));
      let c = (0, r.useMemo)(
        () => i,
        [JSON.stringify(i.transition), i.transformPagePoint, i.reducedMotion, i.skipAnimations, i.isValidProp],
      );
      return (0, e.jsx)(o.MotionConfigContext.Provider, { value: c, children: t });
    }
    var a = t.i(80099);
    let c = { className: a.default.className, style: { fontFamily: "'DM Sans', 'DM Sans Fallback'", fontStyle: "normal" } };
    null != a.default.variable && (c.variable = a.default.variable);
    var u = t.i(25072);
    let h = { className: u.default.className, style: { fontFamily: "'Space Grotesk', 'Space Grotesk Fallback'", fontStyle: "normal" } };
    null != u.default.variable && (h.variable = u.default.variable);
    var f = t.i(86953);
    let d = { className: f.default.className, style: { fontFamily: "'JetBrains Mono', 'JetBrains Mono Fallback'", fontStyle: "normal" } };
    null != f.default.variable && (d.variable = f.default.variable);
    var p = "1.3.26";
    function m(t, e, i) {
      return Math.max(t, Math.min(e, i));
    }
    var g = class {
        isRunning = !1;
        value = 0;
        from = 0;
        to = 0;
        currentTime = 0;
        lerp;
        duration;
        easing;
        onUpdate;
        advance(t) {
          if (!this.isRunning) return;
          let e = !1;
          if (this.duration && this.easing) {
            this.currentTime += t;
            let i = m(0, this.currentTime / this.duration, 1),
              r = (e = i >= 1) ? 1 : this.easing(i);
            this.value = this.from + (this.to - this.from) * r;
          } else if (this.lerp) {
            var i, r, n, o;
            ((this.value = ((i = this.value), (r = this.to), (n = 60 * this.lerp), (1 - (o = 1 - Math.exp(-n * t))) * i + o * r)),
              Math.round(this.value) === Math.round(this.to) && ((this.value = this.to), (e = !0)));
          } else ((this.value = this.to), (e = !0));
          (e && this.stop(), this.onUpdate?.(this.value, e));
        }
        stop() {
          this.isRunning = !1;
        }
        fromTo(t, e, { lerp: i, duration: r, easing: n, onStart: o, onUpdate: s }) {
          ((this.from = this.value = t),
            (this.to = e),
            (this.lerp = i),
            (this.duration = r),
            (this.easing = n),
            (this.currentTime = 0),
            (this.isRunning = !0),
            o?.(),
            (this.onUpdate = s));
        }
      },
      y = class {
        width = 0;
        height = 0;
        scrollHeight = 0;
        scrollWidth = 0;
        debouncedResize;
        wrapperResizeObserver;
        contentResizeObserver;
        constructor(t, e, { autoResize: i = !0, debounce: r = 250 } = {}) {
          ((this.wrapper = t),
            (this.content = e),
            i &&
              ((this.debouncedResize = (function (t, e) {
                let i;
                return function (...r) {
                  (clearTimeout(i),
                    (i = setTimeout(() => {
                      ((i = void 0), t.apply(this, r));
                    }, e)));
                };
              })(this.resize, r)),
              this.wrapper instanceof Window
                ? window.addEventListener("resize", this.debouncedResize)
                : ((this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize)),
                  this.wrapperResizeObserver.observe(this.wrapper)),
              (this.contentResizeObserver = new ResizeObserver(this.debouncedResize)),
              this.contentResizeObserver.observe(this.content)),
            this.resize());
        }
        destroy() {
          (this.wrapperResizeObserver?.disconnect(),
            this.contentResizeObserver?.disconnect(),
            this.wrapper === window && this.debouncedResize && window.removeEventListener("resize", this.debouncedResize));
        }
        resize = () => {
          (this.onWrapperResize(), this.onContentResize());
        };
        onWrapperResize = () => {
          this.wrapper instanceof Window
            ? ((this.width = window.innerWidth), (this.height = window.innerHeight))
            : ((this.width = this.wrapper.clientWidth), (this.height = this.wrapper.clientHeight));
        };
        onContentResize = () => {
          this.wrapper instanceof Window
            ? ((this.scrollHeight = this.content.scrollHeight), (this.scrollWidth = this.content.scrollWidth))
            : ((this.scrollHeight = this.wrapper.scrollHeight), (this.scrollWidth = this.wrapper.scrollWidth));
        };
        get limit() {
          return { x: this.scrollWidth - this.width, y: this.scrollHeight - this.height };
        }
      },
      v = class {
        events = {};
        emit(t, ...e) {
          let i = this.events[t] || [];
          for (let t = 0, r = i.length; t < r; t++) i[t]?.(...e);
        }
        on(t, e) {
          return (
            this.events[t] ? this.events[t].push(e) : (this.events[t] = [e]),
            () => {
              this.events[t] = this.events[t]?.filter((t) => e !== t);
            }
          );
        }
        off(t, e) {
          this.events[t] = this.events[t]?.filter((t) => e !== t);
        }
        destroy() {
          this.events = {};
        }
      };
    let w = 100 / 6,
      S = { passive: !1 };
    function _(t, e) {
      return 1 === t ? w : 2 === t ? e : 1;
    }
    var b = class {
      touchStart = { x: 0, y: 0 };
      lastDelta = { x: 0, y: 0 };
      window = { width: 0, height: 0 };
      emitter = new v();
      constructor(t, e = { wheelMultiplier: 1, touchMultiplier: 1 }) {
        ((this.element = t),
          (this.options = e),
          window.addEventListener("resize", this.onWindowResize),
          this.onWindowResize(),
          this.element.addEventListener("wheel", this.onWheel, S),
          this.element.addEventListener("touchstart", this.onTouchStart, S),
          this.element.addEventListener("touchmove", this.onTouchMove, S),
          this.element.addEventListener("touchend", this.onTouchEnd, S));
      }
      on(t, e) {
        return this.emitter.on(t, e);
      }
      destroy() {
        (this.emitter.destroy(),
          window.removeEventListener("resize", this.onWindowResize),
          this.element.removeEventListener("wheel", this.onWheel, S),
          this.element.removeEventListener("touchstart", this.onTouchStart, S),
          this.element.removeEventListener("touchmove", this.onTouchMove, S),
          this.element.removeEventListener("touchend", this.onTouchEnd, S));
      }
      onTouchStart = (t) => {
        let { clientX: e, clientY: i } = t.targetTouches ? t.targetTouches[0] : t;
        ((this.touchStart.x = e),
          (this.touchStart.y = i),
          (this.lastDelta = { x: 0, y: 0 }),
          this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: t }));
      };
      onTouchMove = (t) => {
        let { clientX: e, clientY: i } = t.targetTouches ? t.targetTouches[0] : t,
          r = -(e - this.touchStart.x) * this.options.touchMultiplier,
          n = -(i - this.touchStart.y) * this.options.touchMultiplier;
        ((this.touchStart.x = e),
          (this.touchStart.y = i),
          (this.lastDelta = { x: r, y: n }),
          this.emitter.emit("scroll", { deltaX: r, deltaY: n, event: t }));
      };
      onTouchEnd = (t) => {
        this.emitter.emit("scroll", { deltaX: this.lastDelta.x, deltaY: this.lastDelta.y, event: t });
      };
      onWheel = (t) => {
        let { deltaX: e, deltaY: i, deltaMode: r } = t,
          n = _(r, this.window.width),
          o = _(r, this.window.height);
        ((e *= n),
          (i *= o),
          (e *= this.options.wheelMultiplier),
          (i *= this.options.wheelMultiplier),
          this.emitter.emit("scroll", { deltaX: e, deltaY: i, event: t }));
      };
      onWindowResize = () => {
        this.window = { width: window.innerWidth, height: window.innerHeight };
      };
    };
    let E = (t) => Math.min(1, 1.001 - 2 ** (-10 * t));
    var T = class {
      _isScrolling = !1;
      _isStopped = !1;
      _isLocked = !1;
      _preventNextNativeScrollEvent = !1;
      _resetVelocityTimeout = null;
      _rafId = null;
      _isDraggingSelection = !1;
      reducedMotionMediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      isTouching;
      isIos;
      time = 0;
      userData = {};
      lastVelocity = 0;
      velocity = 0;
      direction = 0;
      options;
      targetScroll;
      animatedScroll;
      animate = new g();
      emitter = new v();
      dimensions;
      virtualScroll;
      constructor({
        wrapper: t = window,
        content: e = document.documentElement,
        eventsTarget: i = t,
        smoothWheel: r = !0,
        syncTouch: n = !1,
        syncTouchLerp: o = 0.075,
        touchInertiaExponent: s = 1.7,
        duration: l,
        easing: a,
        lerp: c = 0.1,
        infinite: u = !1,
        orientation: h = "vertical",
        gestureOrientation: f = "horizontal" === h ? "both" : "vertical",
        touchMultiplier: d = 1,
        wheelMultiplier: m = 1,
        autoResize: g = !0,
        prevent: v,
        virtualScroll: w,
        overscroll: S = !0,
        autoRaf: _ = !1,
        anchors: T = !1,
        autoToggle: x = !1,
        allowNestedScroll: O = !1,
        __experimental__naiveDimensions: N = !1,
        naiveDimensions: M = N,
        stopInertiaOnNavigate: k = !1,
        respectReducedMotion: L = !0,
      } = {}) {
        ((window.lenisVersion = p),
          window.lenis || (window.lenis = {}),
          (window.lenis.version = p),
          "horizontal" === h && (window.lenis.horizontal = !0),
          !0 === n && (window.lenis.touch = !0),
          (this.isIos = /(iPad|iPhone|iPod)/g.test(navigator.userAgent)),
          (t && t !== document.documentElement) || (t = window),
          "number" == typeof l && "function" != typeof a ? (a = E) : "function" == typeof a && "number" != typeof l && (l = 1),
          (this.options = {
            wrapper: t,
            content: e,
            eventsTarget: i,
            smoothWheel: r,
            syncTouch: n,
            syncTouchLerp: o,
            touchInertiaExponent: s,
            duration: l,
            easing: a,
            lerp: c,
            infinite: u,
            gestureOrientation: f,
            orientation: h,
            touchMultiplier: d,
            wheelMultiplier: m,
            autoResize: g,
            prevent: v,
            virtualScroll: w,
            overscroll: S,
            autoRaf: _,
            anchors: T,
            autoToggle: x,
            allowNestedScroll: O,
            naiveDimensions: M,
            stopInertiaOnNavigate: k,
            respectReducedMotion: L,
          }),
          (this.dimensions = new y(t, e, { autoResize: g })),
          this.updateClassName(),
          (this.targetScroll = this.animatedScroll = this.actualScroll),
          this.options.wrapper.addEventListener("scroll", this.onNativeScroll),
          this.options.wrapper.addEventListener("scrollend", this.onScrollEnd, { capture: !0 }),
          (this.options.anchors || this.options.stopInertiaOnNavigate) && this.options.wrapper.addEventListener("click", this.onClick),
          this.options.wrapper.addEventListener("pointerdown", this.onPointerDown),
          (this.virtualScroll = new b(i, { touchMultiplier: d, wheelMultiplier: m })),
          this.virtualScroll.on("scroll", this.onVirtualScroll),
          this.options.autoToggle && (this.checkOverflow(), this.rootElement.addEventListener("transitionend", this.onTransitionEnd)),
          this.options.autoRaf && (this._rafId = requestAnimationFrame(this.raf)));
      }
      destroy() {
        (this.emitter.destroy(),
          this.options.wrapper.removeEventListener("scroll", this.onNativeScroll),
          this.options.wrapper.removeEventListener("scrollend", this.onScrollEnd, { capture: !0 }),
          this.options.wrapper.removeEventListener("pointerdown", this.onPointerDown),
          (this.options.anchors || this.options.stopInertiaOnNavigate) && this.options.wrapper.removeEventListener("click", this.onClick),
          this.virtualScroll.destroy(),
          this.dimensions.destroy(),
          this.cleanUpClassName(),
          this._rafId && cancelAnimationFrame(this._rafId));
      }
      on(t, e) {
        return this.emitter.on(t, e);
      }
      off(t, e) {
        return this.emitter.off(t, e);
      }
      onScrollEnd = (t) => {
        t instanceof CustomEvent || ("smooth" !== this.isScrolling && !1 !== this.isScrolling) || t.stopPropagation();
      };
      dispatchScrollendEvent = () => {
        this.options.wrapper.dispatchEvent(
          new CustomEvent("scrollend", { bubbles: this.options.wrapper === window, detail: { lenisScrollEnd: !0 } }),
        );
      };
      get overflow() {
        let t = this.isHorizontal ? "overflow-x" : "overflow-y";
        return getComputedStyle(this.rootElement)[t];
      }
      checkOverflow() {
        ["hidden", "clip"].includes(this.overflow) ? this.internalStop() : this.internalStart();
      }
      onTransitionEnd = (t) => {
        t.propertyName?.includes("overflow") && t.target === this.rootElement && this.checkOverflow();
      };
      setScroll(t) {
        this.isHorizontal
          ? this.options.wrapper.scrollTo({ left: t, behavior: "instant" })
          : this.options.wrapper.scrollTo({ top: t, behavior: "instant" });
      }
      onClick = (t) => {
        let e = t
            .composedPath()
            .filter((t) => t instanceof HTMLAnchorElement && t.href)
            .map((t) => new URL(t.href)),
          i = new URL(window.location.href);
        if (this.options.anchors) {
          let t = e.find((t) => i.host === t.host && i.pathname === t.pathname && t.hash);
          if (t) {
            let e = "object" == typeof this.options.anchors && this.options.anchors ? this.options.anchors : void 0,
              i = decodeURIComponent(t.hash);
            this.scrollTo(i, e);
            return;
          }
        }
        if (this.options.stopInertiaOnNavigate && e.some((t) => i.host === t.host && i.pathname !== t.pathname)) return void this.reset();
      };
      onPointerDown = (t) => {
        1 === t.button && this.reset();
      };
      isTouchOnSelectionHandle(t) {
        let e = window.getSelection();
        if (!e || e.isCollapsed || 0 === e.rangeCount) return !1;
        let i = t.targetTouches[0] ?? t.changedTouches[0];
        if (!i) return !1;
        let r = e.getRangeAt(0).getClientRects();
        if (0 === r.length) return !1;
        let n = r[0],
          o = r[r.length - 1],
          s = 40 >= Math.hypot(i.clientX - n.left, i.clientY - n.top),
          l = 40 >= Math.hypot(i.clientX - o.right, i.clientY - o.bottom);
        return s || l;
      }
      onVirtualScroll = (t) => {
        if ("function" == typeof this.options.virtualScroll && !1 === this.options.virtualScroll(t)) return;
        let { deltaX: e, deltaY: i, event: r } = t;
        if ((this.emitter.emit("virtual-scroll", { deltaX: e, deltaY: i, event: r }), r.ctrlKey || r.lenisStopPropagation)) return;
        let n = r.type.includes("touch"),
          o = r.type.includes("wheel");
        if (
          n &&
          this.isIos &&
          ("touchstart" === r.type && (this._isDraggingSelection = this.isTouchOnSelectionHandle(r)), this._isDraggingSelection)
        ) {
          "touchend" === r.type && (this._isDraggingSelection = !1);
          return;
        }
        this.isTouching = "touchstart" === r.type || "touchmove" === r.type;
        let s = 0 === e && 0 === i;
        if (this.options.syncTouch && n && "touchstart" === r.type && s && !this.isStopped && !this.isLocked) return void this.reset();
        let l =
          ("vertical" === this.options.gestureOrientation && 0 === i) || ("horizontal" === this.options.gestureOrientation && 0 === e);
        if (s || l) return;
        let a = r.composedPath();
        a = a.slice(0, a.indexOf(this.rootElement));
        let c = this.options.prevent,
          u = Math.abs(e) >= Math.abs(i) ? "horizontal" : "vertical";
        if (
          a.find(
            (t) =>
              t instanceof HTMLElement &&
              (("function" == typeof c && c?.(t)) ||
                t.hasAttribute?.("data-lenis-prevent") ||
                ("vertical" === u && t.hasAttribute?.("data-lenis-prevent-vertical")) ||
                ("horizontal" === u && t.hasAttribute?.("data-lenis-prevent-horizontal")) ||
                (n && t.hasAttribute?.("data-lenis-prevent-touch")) ||
                (o && t.hasAttribute?.("data-lenis-prevent-wheel")) ||
                (this.options.allowNestedScroll && this.hasNestedScroll(t, { deltaX: e, deltaY: i }))),
          )
        )
          return;
        if (this.isStopped || this.isLocked) {
          r.cancelable && r.preventDefault();
          return;
        }
        if (!((this.options.syncTouch && n) || (this.options.smoothWheel && o))) {
          ((this.isScrolling = "native"), this.animate.stop(), (r.lenisStopPropagation = !0));
          return;
        }
        let h = i;
        ("both" === this.options.gestureOrientation
          ? (h = Math.abs(i) > Math.abs(e) ? i : e)
          : "horizontal" === this.options.gestureOrientation && (h = e),
          (!this.options.overscroll ||
            this.options.infinite ||
            (this.options.wrapper !== window &&
              this.limit > 0 &&
              ((this.animatedScroll > 0 && this.animatedScroll < this.limit) ||
                (0 === this.animatedScroll && i > 0) ||
                (this.animatedScroll === this.limit && i < 0)))) &&
            (r.lenisStopPropagation = !0),
          r.cancelable && r.preventDefault());
        let f = n && this.options.syncTouch,
          d = n && "touchend" === r.type;
        (d && (h = Math.sign(h) * Math.abs(this.velocity) ** this.options.touchInertiaExponent),
          this.scrollTo(this.targetScroll + h, {
            programmatic: !1,
            ...(f
              ? { lerp: d ? this.options.syncTouchLerp : 1 }
              : { lerp: this.options.lerp, duration: this.options.duration, easing: this.options.easing }),
          }));
      };
      resize() {
        (this.dimensions.resize(), (this.animatedScroll = this.targetScroll = this.actualScroll), this.emit());
      }
      emit() {
        this.emitter.emit("scroll", this);
      }
      onNativeScroll = () => {
        if (
          (null !== this._resetVelocityTimeout && (clearTimeout(this._resetVelocityTimeout), (this._resetVelocityTimeout = null)),
          this._preventNextNativeScrollEvent)
        ) {
          this._preventNextNativeScrollEvent = !1;
          return;
        }
        if (!1 === this.isScrolling || "native" === this.isScrolling) {
          let t = this.animatedScroll;
          ((this.animatedScroll = this.targetScroll = this.actualScroll),
            (this.lastVelocity = this.velocity),
            (this.velocity = this.animatedScroll - t),
            (this.direction = Math.sign(this.animatedScroll - t)),
            this.isStopped || (this.isScrolling = "native"),
            this.emit(),
            0 !== this.velocity &&
              (this._resetVelocityTimeout = setTimeout(() => {
                ((this.lastVelocity = this.velocity), (this.velocity = 0), (this.isScrolling = !1), this.emit());
              }, 400)));
        }
      };
      reset() {
        ((this.isLocked = !1),
          (this.isScrolling = !1),
          (this.animatedScroll = this.targetScroll = this.actualScroll),
          (this.lastVelocity = this.velocity = 0),
          this.animate.stop());
      }
      start() {
        if (this.isStopped) {
          if (this.options.autoToggle) return void this.rootElement.style.removeProperty("overflow");
          this.internalStart();
        }
      }
      internalStart() {
        this.isStopped && (this.reset(), (this.isStopped = !1), this.emit());
      }
      stop() {
        if (!this.isStopped) {
          if (this.options.autoToggle) return void this.rootElement.style.setProperty("overflow", "clip");
          this.internalStop();
        }
      }
      internalStop() {
        this.isStopped || (this.reset(), (this.isStopped = !0), this.emit());
      }
      raf = (t) => {
        let e = t - (this.time || t);
        ((this.time = t), this.animate.advance(0.001 * e), this.options.autoRaf && (this._rafId = requestAnimationFrame(this.raf)));
      };
      scrollTo(
        t,
        {
          offset: e = 0,
          immediate: i = !1,
          lock: r = !1,
          programmatic: n = !0,
          lerp: o = n ? this.options.lerp : void 0,
          duration: s = n ? this.options.duration : void 0,
          easing: l = n ? this.options.easing : void 0,
          onStart: a,
          onComplete: c,
          force: u = !1,
          userData: h,
        } = {},
      ) {
        if ((this.prefersReducedMotion && (n ? (i = !0) : ((o = 1), (s = void 0), (l = void 0))), (this.isStopped || this.isLocked) && !u))
          return;
        let f = t,
          d = e;
        if ("string" == typeof f && ["top", "left", "start", "#"].includes(f)) f = 0;
        else if ("string" == typeof f && ["bottom", "right", "end"].includes(f)) f = this.limit;
        else {
          let t = null;
          if (
            ("string" == typeof f
              ? (t = f.startsWith("#") ? document.getElementById(f.slice(1)) : document.querySelector(f)) ||
                ("#top" === f ? (f = 0) : console.warn("Lenis: Target not found", f))
              : f instanceof HTMLElement && f?.nodeType && (t = f),
            t)
          ) {
            if (this.options.wrapper !== window) {
              let t = this.rootElement.getBoundingClientRect();
              d -= this.isHorizontal ? t.left : t.top;
            }
            let e = t.getBoundingClientRect(),
              i = getComputedStyle(t),
              r = this.isHorizontal ? Number.parseFloat(i.scrollMarginLeft) : Number.parseFloat(i.scrollMarginTop),
              n = getComputedStyle(this.rootElement),
              o = this.isHorizontal ? Number.parseFloat(n.scrollPaddingLeft) : Number.parseFloat(n.scrollPaddingTop);
            f = (this.isHorizontal ? e.left : e.top) + this.animatedScroll - (Number.isNaN(r) ? 0 : r) - (Number.isNaN(o) ? 0 : o);
          }
        }
        if ("number" == typeof f) {
          if (((f += d), this.options.infinite)) {
            if (n) {
              this.targetScroll = this.animatedScroll = this.scroll;
              let t = f - this.animatedScroll;
              t > this.limit / 2 ? (f -= this.limit) : t < -this.limit / 2 && (f += this.limit);
            }
          } else f = m(0, f, this.limit);
          if (f === this.targetScroll) {
            (a?.(this), c?.(this));
            return;
          }
          if (((this.userData = h ?? {}), i)) {
            ((this.animatedScroll = this.targetScroll = f),
              this.setScroll(this.scroll),
              this.reset(),
              this.preventNextNativeScrollEvent(),
              this.emit(),
              c?.(this),
              (this.userData = {}),
              requestAnimationFrame(() => {
                this.dispatchScrollendEvent();
              }));
            return;
          }
          (n || (this.targetScroll = f),
            "number" == typeof s && "function" != typeof l ? (l = E) : "function" == typeof l && "number" != typeof s && (s = 1),
            this.animate.fromTo(this.animatedScroll, f, {
              duration: s,
              easing: l,
              lerp: o,
              onStart: () => {
                (r && (this.isLocked = !0), (this.isScrolling = "smooth"), a?.(this));
              },
              onUpdate: (t, e) => {
                ((this.isScrolling = "smooth"),
                  (this.lastVelocity = this.velocity),
                  (this.velocity = t - this.animatedScroll),
                  (this.direction = Math.sign(this.velocity)),
                  (this.animatedScroll = t),
                  this.setScroll(this.scroll),
                  n && (this.targetScroll = t),
                  e || this.emit(),
                  e &&
                    (this.reset(),
                    this.emit(),
                    c?.(this),
                    (this.userData = {}),
                    requestAnimationFrame(() => {
                      this.dispatchScrollendEvent();
                    }),
                    this.preventNextNativeScrollEvent()));
              },
            }));
        }
      }
      preventNextNativeScrollEvent() {
        ((this._preventNextNativeScrollEvent = !0),
          requestAnimationFrame(() => {
            this._preventNextNativeScrollEvent = !1;
          }));
      }
      hasNestedScroll(t, { deltaX: e, deltaY: i }) {
        let r,
          n,
          o,
          s,
          l,
          a,
          c,
          u,
          h,
          f,
          d,
          p,
          m,
          g,
          y,
          v,
          w = Date.now();
        t._lenis || (t._lenis = {});
        let S = t._lenis;
        if (w - (S.time ?? 0) > 2e3) {
          S.time = Date.now();
          let e = window.getComputedStyle(t);
          if (
            ((S.computedStyle = e),
            (r = ["auto", "overlay", "scroll"].includes(e.overflowX)),
            (n = ["auto", "overlay", "scroll"].includes(e.overflowY)),
            (l = ["auto"].includes(e.overscrollBehaviorX)),
            (a = ["auto"].includes(e.overscrollBehaviorY)),
            (S.hasOverflowX = r),
            (S.hasOverflowY = n),
            !(r || n))
          )
            return !1;
          ((c = t.scrollWidth),
            (u = t.scrollHeight),
            (h = t.clientWidth),
            (f = t.clientHeight),
            (o = c > h),
            (s = u > f),
            (S.isScrollableX = o),
            (S.isScrollableY = s),
            (S.scrollWidth = c),
            (S.scrollHeight = u),
            (S.clientWidth = h),
            (S.clientHeight = f),
            (S.hasOverscrollBehaviorX = l),
            (S.hasOverscrollBehaviorY = a));
        } else
          ((o = S.isScrollableX),
            (s = S.isScrollableY),
            (r = S.hasOverflowX),
            (n = S.hasOverflowY),
            (c = S.scrollWidth),
            (u = S.scrollHeight),
            (h = S.clientWidth),
            (f = S.clientHeight),
            (l = S.hasOverscrollBehaviorX),
            (a = S.hasOverscrollBehaviorY));
        if (!((r && o) || (n && s))) return !1;
        let _ = Math.abs(e) >= Math.abs(i) ? "horizontal" : "vertical";
        if ("horizontal" === _) ((d = Math.round(t.scrollLeft)), (p = c - h), (m = e), (g = r), (y = o), (v = l));
        else {
          if ("vertical" !== _) return !1;
          ((d = Math.round(t.scrollTop)), (p = u - f), (m = i), (g = n), (y = s), (v = a));
        }
        return (!v && (d >= p || d <= 0)) || ((m > 0 ? d < p : d > 0) && g && y);
      }
      get rootElement() {
        return this.options.wrapper === window ? document.documentElement : this.options.wrapper;
      }
      get limit() {
        return this.options.naiveDimensions
          ? this.isHorizontal
            ? this.rootElement.scrollWidth - this.rootElement.clientWidth
            : this.rootElement.scrollHeight - this.rootElement.clientHeight
          : this.dimensions.limit[this.isHorizontal ? "x" : "y"];
      }
      get isHorizontal() {
        return "horizontal" === this.options.orientation;
      }
      get actualScroll() {
        let t = this.options.wrapper;
        return this.isHorizontal ? (t.scrollX ?? t.scrollLeft) : (t.scrollY ?? t.scrollTop);
      }
      get scroll() {
        var t;
        return this.options.infinite ? ((this.animatedScroll % (t = this.limit)) + t) % t : this.animatedScroll;
      }
      get progress() {
        return 0 === this.limit ? 1 : this.scroll / this.limit;
      }
      get isScrolling() {
        return this._isScrolling;
      }
      set isScrolling(t) {
        this._isScrolling !== t && ((this._isScrolling = t), this.updateClassName());
      }
      get isStopped() {
        return this._isStopped;
      }
      set isStopped(t) {
        this._isStopped !== t && ((this._isStopped = t), this.updateClassName());
      }
      get isLocked() {
        return this._isLocked;
      }
      set isLocked(t) {
        this._isLocked !== t && ((this._isLocked = t), this.updateClassName());
      }
      get isSmooth() {
        return "smooth" === this.isScrolling;
      }
      get prefersReducedMotion() {
        return this.options.respectReducedMotion && this.reducedMotionMediaQuery.matches;
      }
      get className() {
        let t = "lenis";
        return (
          this.options.autoToggle && (t += " lenis-autoToggle"),
          this.isStopped && (t += " lenis-stopped"),
          this.isLocked && (t += " lenis-locked"),
          this.isScrolling && (t += " lenis-scrolling"),
          "smooth" === this.isScrolling && (t += " lenis-smooth"),
          t
        );
      }
      updateClassName() {
        (this.cleanUpClassName(),
          this.className.split(" ").forEach((t) => {
            this.rootElement.classList.add(t);
          }));
      }
      cleanUpClassName() {
        for (let t of Array.from(this.rootElement.classList))
          ("lenis" === t || t.startsWith("lenis-")) && this.rootElement.classList.remove(t);
      }
    };
    let x = () => (
      (0, r.useEffect)(() => {
        let t = window.matchMedia("(prefers-reduced-motion: reduce)").matches,
          e = new T({ autoRaf: !0, lerp: 0.085, wheelMultiplier: 0.95 }),
          i = (i) => {
            if (i.defaultPrevented || 0 !== i.button || i.metaKey || i.ctrlKey || i.shiftKey || i.altKey) return;
            let r = i.target instanceof Element ? i.target : null,
              n = r?.closest("a[href]");
            if (!n || "_blank" === n.target) return;
            let o = new URL(n.href, window.location.href);
            if (o.origin !== window.location.origin || o.pathname !== window.location.pathname || !o.hash) return;
            let s = document.getElementById(decodeURIComponent(o.hash.slice(1)));
            s &&
              (i.preventDefault(),
              e.scrollTo(s, { offset: -88, immediate: t, duration: 1.4 }),
              window.history.replaceState(window.history.state, "", o.hash));
          };
        return (
          window.addEventListener("click", i, !0),
          () => {
            (window.removeEventListener("click", i, !0), e.destroy());
          }
        );
      }, []),
      null
    );
    var O = t.i(80015),
      N = t.i(43535);
    let M = () =>
      (0, e.jsxs)("div", {
        "aria-hidden": "true",
        className: "intro-curtain pointer-events-none fixed inset-0 z-[70] flex items-center justify-center bg-forest",
        children: [
          (0, e.jsxs)("div", {
            className: "intro-curtain-inner flex items-center gap-3",
            children: [
              (0, e.jsx)(O.LogoMark, { tone: "light", className: "size-10" }),
              (0, e.jsx)("span", {
                className: "font-heading text-4xl font-medium tracking-[-0.04em] text-white",
                children: N.siteConfig.name,
              }),
            ],
          }),
          (0, e.jsx)("span", { className: "intro-curtain-bar absolute bottom-0 left-0 h-[2px] w-full origin-left bg-leaf" }),
        ],
      });
    var k = t.i(57712),
      L = t.i(93087),
      C = t.i(83218);
    let P = () => {
        let { scrollYProgress: t } = (0, L.useScroll)(),
          i = (0, C.useSpring)(t, { stiffness: 140, damping: 30, mass: 0.3 });
        return (0, e.jsx)(k.motion.div, {
          "aria-hidden": "true",
          className:
            "pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-leaf via-primary to-primary-strong",
          style: { scaleX: i },
        });
      },
      R = `:root{--font-app-sans:${c.style.fontFamily};--font-app-mono:${d.style.fontFamily};--font-app-heading:${h.style.fontFamily}}`;
    t.s(
      [
        "default",
        0,
        ({ Component: t, pageProps: r }) =>
          (0, e.jsxs)("div", {
            className: "h-full font-sans",
            children: [
              (0, e.jsx)(i.default, { children: (0, e.jsx)("style", { dangerouslySetInnerHTML: { __html: R } }) }),
              (0, e.jsxs)(l, {
                reducedMotion: "user",
                children: [(0, e.jsx)(M, {}), (0, e.jsx)(x, {}), (0, e.jsx)(P, {}), (0, e.jsx)(t, { ...r })],
              }),
            ],
          }),
      ],
      16027,
    );
  },
  94757,
  (t, e, i) => {
    let r = "/_app";
    ((window.__NEXT_P = window.__NEXT_P || []).push([r, () => t.r(16027)]),
      e.hot &&
        e.hot.dispose(function () {
          window.__NEXT_P.push([r]);
        }));
  },
  48761,
  (t) => {
    t.v((e) => Promise.all(["static/chunks/0us.pjk53..1y.js"].map((e) => t.l(e))).then(() => e(93594)));
  },
  28805,
  (t) => {
    t.v((e) => Promise.all(["static/chunks/0599p99vu8fk5.js"].map((e) => t.l(e))).then(() => e(79466)));
  },
]);
