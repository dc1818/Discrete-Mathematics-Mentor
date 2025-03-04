function Rf(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const o = Object.getOwnPropertyDescriptor(r, l);
          o &&
            Object.defineProperty(
              e,
              l,
              o.get ? o : { enumerable: !0, get: () => r[l] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
function Of(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Gs = { exports: {} },
  Ol = {},
  Zs = { exports: {} },
  z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xr = Symbol.for("react.element"),
  Mf = Symbol.for("react.portal"),
  zf = Symbol.for("react.fragment"),
  jf = Symbol.for("react.strict_mode"),
  Df = Symbol.for("react.profiler"),
  If = Symbol.for("react.provider"),
  Af = Symbol.for("react.context"),
  Uf = Symbol.for("react.forward_ref"),
  Hf = Symbol.for("react.suspense"),
  Vf = Symbol.for("react.memo"),
  Bf = Symbol.for("react.lazy"),
  Ou = Symbol.iterator;
function Wf(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ou && e[Ou]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Js = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  qs = Object.assign,
  bs = {};
function Fn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = bs),
    (this.updater = n || Js);
}
Fn.prototype.isReactComponent = {};
Fn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Fn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ea() {}
ea.prototype = Fn.prototype;
function Fi(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = bs),
    (this.updater = n || Js);
}
var Ri = (Fi.prototype = new ea());
Ri.constructor = Fi;
qs(Ri, Fn.prototype);
Ri.isPureReactComponent = !0;
var Mu = Array.isArray,
  ta = Object.prototype.hasOwnProperty,
  Oi = { current: null },
  na = { key: !0, ref: !0, __self: !0, __source: !0 };
function ra(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      ta.call(t, r) && !na.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: xr,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Oi.current,
  };
}
function Qf(e, t) {
  return {
    $$typeof: xr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Mi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === xr;
}
function Kf(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var zu = /\/+/g;
function no(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Kf("" + e.key)
    : t.toString(36);
}
function Gr(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case xr:
          case Mf:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + no(i, 0) : r),
      Mu(l)
        ? ((n = ""),
          e != null && (n = e.replace(zu, "$&/") + "/"),
          Gr(l, t, n, "", function (a) {
            return a;
          }))
        : l != null &&
          (Mi(l) &&
            (l = Qf(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(zu, "$&/") + "/") +
                e,
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Mu(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + no(o, u);
      i += Gr(o, t, n, s, l);
    }
  else if (((s = Wf(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + no(o, u++)), (i += Gr(o, t, n, s, l));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      ))
    );
  return i;
}
function Fr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Gr(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function Yf(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var de = { current: null },
  Zr = { transition: null },
  Xf = {
    ReactCurrentDispatcher: de,
    ReactCurrentBatchConfig: Zr,
    ReactCurrentOwner: Oi,
  };
function la() {
  throw Error("act(...) is not supported in production builds of React.");
}
z.Children = {
  map: Fr,
  forEach: function (e, t, n) {
    Fr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Fr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Fr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Mi(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
z.Component = Fn;
z.Fragment = zf;
z.Profiler = Df;
z.PureComponent = Fi;
z.StrictMode = jf;
z.Suspense = Hf;
z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xf;
z.act = la;
z.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = qs({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = Oi.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      ta.call(t, s) &&
        !na.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var a = 0; a < s; a++) u[a] = arguments[a + 2];
    r.children = u;
  }
  return { $$typeof: xr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
z.createContext = function (e) {
  return (
    (e = {
      $$typeof: Af,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: If, _context: e }),
    (e.Consumer = e)
  );
};
z.createElement = ra;
z.createFactory = function (e) {
  var t = ra.bind(null, e);
  return (t.type = e), t;
};
z.createRef = function () {
  return { current: null };
};
z.forwardRef = function (e) {
  return { $$typeof: Uf, render: e };
};
z.isValidElement = Mi;
z.lazy = function (e) {
  return { $$typeof: Bf, _payload: { _status: -1, _result: e }, _init: Yf };
};
z.memo = function (e, t) {
  return { $$typeof: Vf, type: e, compare: t === void 0 ? null : t };
};
z.startTransition = function (e) {
  var t = Zr.transition;
  Zr.transition = {};
  try {
    e();
  } finally {
    Zr.transition = t;
  }
};
z.unstable_act = la;
z.useCallback = function (e, t) {
  return de.current.useCallback(e, t);
};
z.useContext = function (e) {
  return de.current.useContext(e);
};
z.useDebugValue = function () {};
z.useDeferredValue = function (e) {
  return de.current.useDeferredValue(e);
};
z.useEffect = function (e, t) {
  return de.current.useEffect(e, t);
};
z.useId = function () {
  return de.current.useId();
};
z.useImperativeHandle = function (e, t, n) {
  return de.current.useImperativeHandle(e, t, n);
};
z.useInsertionEffect = function (e, t) {
  return de.current.useInsertionEffect(e, t);
};
z.useLayoutEffect = function (e, t) {
  return de.current.useLayoutEffect(e, t);
};
z.useMemo = function (e, t) {
  return de.current.useMemo(e, t);
};
z.useReducer = function (e, t, n) {
  return de.current.useReducer(e, t, n);
};
z.useRef = function (e) {
  return de.current.useRef(e);
};
z.useState = function (e) {
  return de.current.useState(e);
};
z.useSyncExternalStore = function (e, t, n) {
  return de.current.useSyncExternalStore(e, t, n);
};
z.useTransition = function () {
  return de.current.useTransition();
};
z.version = "18.3.1";
Zs.exports = z;
var g = Zs.exports;
const R = Of(g),
  ju = Rf({ __proto__: null, default: R }, [g]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gf = g,
  Zf = Symbol.for("react.element"),
  Jf = Symbol.for("react.fragment"),
  qf = Object.prototype.hasOwnProperty,
  bf = Gf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  ed = { key: !0, ref: !0, __self: !0, __source: !0 };
function oa(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) qf.call(t, r) && !ed.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Zf,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: bf.current,
  };
}
Ol.Fragment = Jf;
Ol.jsx = oa;
Ol.jsxs = oa;
Gs.exports = Ol;
var $ = Gs.exports,
  Fo = {},
  ia = { exports: {} },
  Pe = {},
  ua = { exports: {} },
  sa = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(x, F) {
    var L = x.length;
    x.push(F);
    e: for (; 0 < L; ) {
      var O = (L - 1) >>> 1,
        G = x[O];
      if (0 < l(G, F)) (x[O] = F), (x[L] = G), (L = O);
      else break e;
    }
  }
  function n(x) {
    return x.length === 0 ? null : x[0];
  }
  function r(x) {
    if (x.length === 0) return null;
    var F = x[0],
      L = x.pop();
    if (L !== F) {
      x[0] = L;
      e: for (var O = 0, G = x.length, Ye = G >>> 1; O < Ye; ) {
        var je = 2 * (O + 1) - 1,
          dt = x[je],
          Se = je + 1,
          $r = x[Se];
        if (0 > l(dt, L))
          Se < G && 0 > l($r, dt)
            ? ((x[O] = $r), (x[Se] = L), (O = Se))
            : ((x[O] = dt), (x[je] = L), (O = je));
        else if (Se < G && 0 > l($r, L)) (x[O] = $r), (x[Se] = L), (O = Se);
        else break e;
      }
    }
    return F;
  }
  function l(x, F) {
    var L = x.sortIndex - F.sortIndex;
    return L !== 0 ? L : x.id - F.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      u = i.now();
    e.unstable_now = function () {
      return i.now() - u;
    };
  }
  var s = [],
    a = [],
    d = 1,
    p = null,
    h = 3,
    v = !1,
    y = !1,
    E = !1,
    T = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(x) {
    for (var F = n(a); F !== null; ) {
      if (F.callback === null) r(a);
      else if (F.startTime <= x)
        r(a), (F.sortIndex = F.expirationTime), t(s, F);
      else break;
      F = n(a);
    }
  }
  function w(x) {
    if (((E = !1), m(x), !y))
      if (n(s) !== null) (y = !0), Qe(k);
      else {
        var F = n(a);
        F !== null && Ke(w, F.startTime - x);
      }
  }
  function k(x, F) {
    (y = !1), E && ((E = !1), f(N), (N = -1)), (v = !0);
    var L = h;
    try {
      for (
        m(F), p = n(s);
        p !== null && (!(p.expirationTime > F) || (x && !b()));

      ) {
        var O = p.callback;
        if (typeof O == "function") {
          (p.callback = null), (h = p.priorityLevel);
          var G = O(p.expirationTime <= F);
          (F = e.unstable_now()),
            typeof G == "function" ? (p.callback = G) : p === n(s) && r(s),
            m(F);
        } else r(s);
        p = n(s);
      }
      if (p !== null) var Ye = !0;
      else {
        var je = n(a);
        je !== null && Ke(w, je.startTime - F), (Ye = !1);
      }
      return Ye;
    } finally {
      (p = null), (h = L), (v = !1);
    }
  }
  var P = !1,
    _ = null,
    N = -1,
    D = 5,
    M = -1;
  function b() {
    return !(e.unstable_now() - M < D);
  }
  function Ee() {
    if (_ !== null) {
      var x = e.unstable_now();
      M = x;
      var F = !0;
      try {
        F = _(!0, x);
      } finally {
        F ? ze() : ((P = !1), (_ = null));
      }
    } else P = !1;
  }
  var ze;
  if (typeof c == "function")
    ze = function () {
      c(Ee);
    };
  else if (typeof MessageChannel < "u") {
    var nn = new MessageChannel(),
      rn = nn.port2;
    (nn.port1.onmessage = Ee),
      (ze = function () {
        rn.postMessage(null);
      });
  } else
    ze = function () {
      T(Ee, 0);
    };
  function Qe(x) {
    (_ = x), P || ((P = !0), ze());
  }
  function Ke(x, F) {
    N = T(function () {
      x(e.unstable_now());
    }, F);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (x) {
      x.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || v || ((y = !0), Qe(k));
    }),
    (e.unstable_forceFrameRate = function (x) {
      0 > x || 125 < x
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (D = 0 < x ? Math.floor(1e3 / x) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (x) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var F = 3;
          break;
        default:
          F = h;
      }
      var L = h;
      h = F;
      try {
        return x();
      } finally {
        h = L;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (x, F) {
      switch (x) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          x = 3;
      }
      var L = h;
      h = x;
      try {
        return F();
      } finally {
        h = L;
      }
    }),
    (e.unstable_scheduleCallback = function (x, F, L) {
      var O = e.unstable_now();
      switch (
        (typeof L == "object" && L !== null
          ? ((L = L.delay), (L = typeof L == "number" && 0 < L ? O + L : O))
          : (L = O),
        x)
      ) {
        case 1:
          var G = -1;
          break;
        case 2:
          G = 250;
          break;
        case 5:
          G = 1073741823;
          break;
        case 4:
          G = 1e4;
          break;
        default:
          G = 5e3;
      }
      return (
        (G = L + G),
        (x = {
          id: d++,
          callback: F,
          priorityLevel: x,
          startTime: L,
          expirationTime: G,
          sortIndex: -1,
        }),
        L > O
          ? ((x.sortIndex = L),
            t(a, x),
            n(s) === null &&
              x === n(a) &&
              (E ? (f(N), (N = -1)) : (E = !0), Ke(w, L - O)))
          : ((x.sortIndex = G), t(s, x), y || v || ((y = !0), Qe(k))),
        x
      );
    }),
    (e.unstable_shouldYield = b),
    (e.unstable_wrapCallback = function (x) {
      var F = h;
      return function () {
        var L = h;
        h = F;
        try {
          return x.apply(this, arguments);
        } finally {
          h = L;
        }
      };
    });
})(sa);
ua.exports = sa;
var td = ua.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nd = g,
  Ne = td;
function S(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var aa = new Set(),
  ir = {};
function bt(e, t) {
  Cn(e, t), Cn(e + "Capture", t);
}
function Cn(e, t) {
  for (ir[e] = t, e = 0; e < t.length; e++) aa.add(t[e]);
}
var ut = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Ro = Object.prototype.hasOwnProperty,
  rd =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Du = {},
  Iu = {};
function ld(e) {
  return Ro.call(Iu, e)
    ? !0
    : Ro.call(Du, e)
      ? !1
      : rd.test(e)
        ? (Iu[e] = !0)
        : ((Du[e] = !0), !1);
}
function od(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function id(e, t, n, r) {
  if (t === null || typeof t > "u" || od(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function pe(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var le = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    le[e] = new pe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  le[t] = new pe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  le[e] = new pe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  le[e] = new pe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    le[e] = new pe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  le[e] = new pe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  le[e] = new pe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  le[e] = new pe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  le[e] = new pe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var zi = /[\-:]([a-z])/g;
function ji(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(zi, ji);
    le[t] = new pe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(zi, ji);
    le[t] = new pe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(zi, ji);
  le[t] = new pe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  le[e] = new pe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
le.xlinkHref = new pe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  le[e] = new pe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Di(e, t, n, r) {
  var l = le.hasOwnProperty(t) ? le[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (id(t, n, l, r) && (n = null),
    r || l === null
      ? ld(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
        ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
        : ((t = l.attributeName),
          (r = l.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((l = l.type),
              (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var ft = nd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Rr = Symbol.for("react.element"),
  on = Symbol.for("react.portal"),
  un = Symbol.for("react.fragment"),
  Ii = Symbol.for("react.strict_mode"),
  Oo = Symbol.for("react.profiler"),
  ca = Symbol.for("react.provider"),
  fa = Symbol.for("react.context"),
  Ai = Symbol.for("react.forward_ref"),
  Mo = Symbol.for("react.suspense"),
  zo = Symbol.for("react.suspense_list"),
  Ui = Symbol.for("react.memo"),
  mt = Symbol.for("react.lazy"),
  da = Symbol.for("react.offscreen"),
  Au = Symbol.iterator;
function zn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Au && e[Au]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var K = Object.assign,
  ro;
function Wn(e) {
  if (ro === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ro = (t && t[1]) || "";
    }
  return (
    `
` +
    ro +
    e
  );
}
var lo = !1;
function oo(e, t) {
  if (!e || lo) return "";
  lo = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == "string") {
      for (
        var l = a.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          u = o.length - 1;
        1 <= i && 0 <= u && l[i] !== o[u];

      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || l[i] !== o[u])) {
                var s =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    (lo = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Wn(e) : "";
}
function ud(e) {
  switch (e.tag) {
    case 5:
      return Wn(e.type);
    case 16:
      return Wn("Lazy");
    case 13:
      return Wn("Suspense");
    case 19:
      return Wn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = oo(e.type, !1)), e;
    case 11:
      return (e = oo(e.type.render, !1)), e;
    case 1:
      return (e = oo(e.type, !0)), e;
    default:
      return "";
  }
}
function jo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case un:
      return "Fragment";
    case on:
      return "Portal";
    case Oo:
      return "Profiler";
    case Ii:
      return "StrictMode";
    case Mo:
      return "Suspense";
    case zo:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case fa:
        return (e.displayName || "Context") + ".Consumer";
      case ca:
        return (e._context.displayName || "Context") + ".Provider";
      case Ai:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ui:
        return (
          (t = e.displayName || null), t !== null ? t : jo(e.type) || "Memo"
        );
      case mt:
        (t = e._payload), (e = e._init);
        try {
          return jo(e(t));
        } catch {}
    }
  return null;
}
function sd(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return jo(t);
    case 8:
      return t === Ii ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function $t(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function pa(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function ad(e) {
  var t = pa(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Or(e) {
  e._valueTracker || (e._valueTracker = ad(e));
}
function ma(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = pa(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ul(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Do(e, t) {
  var n = t.checked;
  return K({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Uu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = $t(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function ha(e, t) {
  (t = t.checked), t != null && Di(e, "checked", t, !1);
}
function Io(e, t) {
  ha(e, t);
  var n = $t(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Ao(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Ao(e, t.type, $t(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Hu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Ao(e, t, n) {
  (t !== "number" || ul(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Qn = Array.isArray;
function yn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + $t(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Uo(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(S(91));
  return K({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Vu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(S(92));
      if (Qn(n)) {
        if (1 < n.length) throw Error(S(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: $t(n) };
}
function va(e, t) {
  var n = $t(t.value),
    r = $t(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Bu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ga(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ho(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? ga(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var Mr,
  ya = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Mr = Mr || document.createElement("div"),
          Mr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Mr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function ur(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Gn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  cd = ["Webkit", "ms", "Moz", "O"];
Object.keys(Gn).forEach(function (e) {
  cd.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Gn[t] = Gn[e]);
  });
});
function wa(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Gn.hasOwnProperty(e) && Gn[e])
      ? ("" + t).trim()
      : t + "px";
}
function Ea(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = wa(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var fd = K(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function Vo(e, t) {
  if (t) {
    if (fd[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(S(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(S(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(S(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(S(62));
  }
}
function Bo(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Wo = null;
function Hi(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Qo = null,
  wn = null,
  En = null;
function Wu(e) {
  if ((e = Pr(e))) {
    if (typeof Qo != "function") throw Error(S(280));
    var t = e.stateNode;
    t && ((t = Il(t)), Qo(e.stateNode, e.type, t));
  }
}
function Sa(e) {
  wn ? (En ? En.push(e) : (En = [e])) : (wn = e);
}
function ka() {
  if (wn) {
    var e = wn,
      t = En;
    if (((En = wn = null), Wu(e), t)) for (e = 0; e < t.length; e++) Wu(t[e]);
  }
}
function xa(e, t) {
  return e(t);
}
function Ca() {}
var io = !1;
function Na(e, t, n) {
  if (io) return e(t, n);
  io = !0;
  try {
    return xa(e, t, n);
  } finally {
    (io = !1), (wn !== null || En !== null) && (Ca(), ka());
  }
}
function sr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Il(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(S(231, t, typeof n));
  return n;
}
var Ko = !1;
if (ut)
  try {
    var jn = {};
    Object.defineProperty(jn, "passive", {
      get: function () {
        Ko = !0;
      },
    }),
      window.addEventListener("test", jn, jn),
      window.removeEventListener("test", jn, jn);
  } catch {
    Ko = !1;
  }
function dd(e, t, n, r, l, o, i, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (d) {
    this.onError(d);
  }
}
var Zn = !1,
  sl = null,
  al = !1,
  Yo = null,
  pd = {
    onError: function (e) {
      (Zn = !0), (sl = e);
    },
  };
function md(e, t, n, r, l, o, i, u, s) {
  (Zn = !1), (sl = null), dd.apply(pd, arguments);
}
function hd(e, t, n, r, l, o, i, u, s) {
  if ((md.apply(this, arguments), Zn)) {
    if (Zn) {
      var a = sl;
      (Zn = !1), (sl = null);
    } else throw Error(S(198));
    al || ((al = !0), (Yo = a));
  }
}
function en(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Pa(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Qu(e) {
  if (en(e) !== e) throw Error(S(188));
}
function vd(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = en(e)), t === null)) throw Error(S(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return Qu(l), e;
        if (o === r) return Qu(l), t;
        o = o.sibling;
      }
      throw Error(S(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (u === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (u === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(S(189));
      }
    }
    if (n.alternate !== r) throw Error(S(190));
  }
  if (n.tag !== 3) throw Error(S(188));
  return n.stateNode.current === n ? e : t;
}
function _a(e) {
  return (e = vd(e)), e !== null ? Ta(e) : null;
}
function Ta(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ta(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var La = Ne.unstable_scheduleCallback,
  Ku = Ne.unstable_cancelCallback,
  gd = Ne.unstable_shouldYield,
  yd = Ne.unstable_requestPaint,
  X = Ne.unstable_now,
  wd = Ne.unstable_getCurrentPriorityLevel,
  Vi = Ne.unstable_ImmediatePriority,
  $a = Ne.unstable_UserBlockingPriority,
  cl = Ne.unstable_NormalPriority,
  Ed = Ne.unstable_LowPriority,
  Fa = Ne.unstable_IdlePriority,
  Ml = null,
  Je = null;
function Sd(e) {
  if (Je && typeof Je.onCommitFiberRoot == "function")
    try {
      Je.onCommitFiberRoot(Ml, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ve = Math.clz32 ? Math.clz32 : Cd,
  kd = Math.log,
  xd = Math.LN2;
function Cd(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((kd(e) / xd) | 0)) | 0;
}
var zr = 64,
  jr = 4194304;
function Kn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function fl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? (r = Kn(u)) : ((o &= i), o !== 0 && (r = Kn(o)));
  } else (i = n & ~l), i !== 0 ? (r = Kn(i)) : o !== 0 && (r = Kn(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ve(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Nd(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Pd(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - Ve(o),
      u = 1 << i,
      s = l[i];
    s === -1
      ? (!(u & n) || u & r) && (l[i] = Nd(u, t))
      : s <= t && (e.expiredLanes |= u),
      (o &= ~u);
  }
}
function Xo(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Ra() {
  var e = zr;
  return (zr <<= 1), !(zr & 4194240) && (zr = 64), e;
}
function uo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Cr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ve(t)),
    (e[t] = n);
}
function _d(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Ve(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function Bi(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ve(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var I = 0;
function Oa(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Ma,
  Wi,
  za,
  ja,
  Da,
  Go = !1,
  Dr = [],
  kt = null,
  xt = null,
  Ct = null,
  ar = new Map(),
  cr = new Map(),
  vt = [],
  Td =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Yu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      kt = null;
      break;
    case "dragenter":
    case "dragleave":
      xt = null;
      break;
    case "mouseover":
    case "mouseout":
      Ct = null;
      break;
    case "pointerover":
    case "pointerout":
      ar.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      cr.delete(t.pointerId);
  }
}
function Dn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = Pr(t)), t !== null && Wi(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Ld(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (kt = Dn(kt, e, t, n, r, l)), !0;
    case "dragenter":
      return (xt = Dn(xt, e, t, n, r, l)), !0;
    case "mouseover":
      return (Ct = Dn(Ct, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return ar.set(o, Dn(ar.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), cr.set(o, Dn(cr.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Ia(e) {
  var t = Ht(e.target);
  if (t !== null) {
    var n = en(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Pa(n)), t !== null)) {
          (e.blockedOn = t),
            Da(e.priority, function () {
              za(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Jr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Zo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Wo = r), n.target.dispatchEvent(r), (Wo = null);
    } else return (t = Pr(n)), t !== null && Wi(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Xu(e, t, n) {
  Jr(e) && n.delete(t);
}
function $d() {
  (Go = !1),
    kt !== null && Jr(kt) && (kt = null),
    xt !== null && Jr(xt) && (xt = null),
    Ct !== null && Jr(Ct) && (Ct = null),
    ar.forEach(Xu),
    cr.forEach(Xu);
}
function In(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Go ||
      ((Go = !0),
      Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority, $d)));
}
function fr(e) {
  function t(l) {
    return In(l, e);
  }
  if (0 < Dr.length) {
    In(Dr[0], e);
    for (var n = 1; n < Dr.length; n++) {
      var r = Dr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    kt !== null && In(kt, e),
      xt !== null && In(xt, e),
      Ct !== null && In(Ct, e),
      ar.forEach(t),
      cr.forEach(t),
      n = 0;
    n < vt.length;
    n++
  )
    (r = vt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < vt.length && ((n = vt[0]), n.blockedOn === null); )
    Ia(n), n.blockedOn === null && vt.shift();
}
var Sn = ft.ReactCurrentBatchConfig,
  dl = !0;
function Fd(e, t, n, r) {
  var l = I,
    o = Sn.transition;
  Sn.transition = null;
  try {
    (I = 1), Qi(e, t, n, r);
  } finally {
    (I = l), (Sn.transition = o);
  }
}
function Rd(e, t, n, r) {
  var l = I,
    o = Sn.transition;
  Sn.transition = null;
  try {
    (I = 4), Qi(e, t, n, r);
  } finally {
    (I = l), (Sn.transition = o);
  }
}
function Qi(e, t, n, r) {
  if (dl) {
    var l = Zo(e, t, n, r);
    if (l === null) yo(e, t, r, pl, n), Yu(e, r);
    else if (Ld(l, e, t, n, r)) r.stopPropagation();
    else if ((Yu(e, r), t & 4 && -1 < Td.indexOf(e))) {
      for (; l !== null; ) {
        var o = Pr(l);
        if (
          (o !== null && Ma(o),
          (o = Zo(e, t, n, r)),
          o === null && yo(e, t, r, pl, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else yo(e, t, r, null, n);
  }
}
var pl = null;
function Zo(e, t, n, r) {
  if (((pl = null), (e = Hi(r)), (e = Ht(e)), e !== null))
    if (((t = en(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Pa(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (pl = e), null;
}
function Aa(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (wd()) {
        case Vi:
          return 1;
        case $a:
          return 4;
        case cl:
        case Ed:
          return 16;
        case Fa:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var wt = null,
  Ki = null,
  qr = null;
function Ua() {
  if (qr) return qr;
  var e,
    t = Ki,
    n = t.length,
    r,
    l = "value" in wt ? wt.value : wt.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (qr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function br(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ir() {
  return !0;
}
function Gu() {
  return !1;
}
function _e(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Ir
        : Gu),
      (this.isPropagationStopped = Gu),
      this
    );
  }
  return (
    K(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ir));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ir));
      },
      persist: function () {},
      isPersistent: Ir,
    }),
    t
  );
}
var Rn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Yi = _e(Rn),
  Nr = K({}, Rn, { view: 0, detail: 0 }),
  Od = _e(Nr),
  so,
  ao,
  An,
  zl = K({}, Nr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Xi,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== An &&
            (An && e.type === "mousemove"
              ? ((so = e.screenX - An.screenX), (ao = e.screenY - An.screenY))
              : (ao = so = 0),
            (An = e)),
          so);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ao;
    },
  }),
  Zu = _e(zl),
  Md = K({}, zl, { dataTransfer: 0 }),
  zd = _e(Md),
  jd = K({}, Nr, { relatedTarget: 0 }),
  co = _e(jd),
  Dd = K({}, Rn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Id = _e(Dd),
  Ad = K({}, Rn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Ud = _e(Ad),
  Hd = K({}, Rn, { data: 0 }),
  Ju = _e(Hd),
  Vd = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Bd = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Wd = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Qd(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Wd[e]) ? !!t[e] : !1;
}
function Xi() {
  return Qd;
}
var Kd = K({}, Nr, {
    key: function (e) {
      if (e.key) {
        var t = Vd[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = br(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? Bd[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Xi,
    charCode: function (e) {
      return e.type === "keypress" ? br(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? br(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  Yd = _e(Kd),
  Xd = K({}, zl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  qu = _e(Xd),
  Gd = K({}, Nr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Xi,
  }),
  Zd = _e(Gd),
  Jd = K({}, Rn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  qd = _e(Jd),
  bd = K({}, zl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  ep = _e(bd),
  tp = [9, 13, 27, 32],
  Gi = ut && "CompositionEvent" in window,
  Jn = null;
ut && "documentMode" in document && (Jn = document.documentMode);
var np = ut && "TextEvent" in window && !Jn,
  Ha = ut && (!Gi || (Jn && 8 < Jn && 11 >= Jn)),
  bu = " ",
  es = !1;
function Va(e, t) {
  switch (e) {
    case "keyup":
      return tp.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Ba(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var sn = !1;
function rp(e, t) {
  switch (e) {
    case "compositionend":
      return Ba(t);
    case "keypress":
      return t.which !== 32 ? null : ((es = !0), bu);
    case "textInput":
      return (e = t.data), e === bu && es ? null : e;
    default:
      return null;
  }
}
function lp(e, t) {
  if (sn)
    return e === "compositionend" || (!Gi && Va(e, t))
      ? ((e = Ua()), (qr = Ki = wt = null), (sn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Ha && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var op = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function ts(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!op[e.type] : t === "textarea";
}
function Wa(e, t, n, r) {
  Sa(r),
    (t = ml(t, "onChange")),
    0 < t.length &&
      ((n = new Yi("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var qn = null,
  dr = null;
function ip(e) {
  tc(e, 0);
}
function jl(e) {
  var t = fn(e);
  if (ma(t)) return e;
}
function up(e, t) {
  if (e === "change") return t;
}
var Qa = !1;
if (ut) {
  var fo;
  if (ut) {
    var po = "oninput" in document;
    if (!po) {
      var ns = document.createElement("div");
      ns.setAttribute("oninput", "return;"),
        (po = typeof ns.oninput == "function");
    }
    fo = po;
  } else fo = !1;
  Qa = fo && (!document.documentMode || 9 < document.documentMode);
}
function rs() {
  qn && (qn.detachEvent("onpropertychange", Ka), (dr = qn = null));
}
function Ka(e) {
  if (e.propertyName === "value" && jl(dr)) {
    var t = [];
    Wa(t, dr, e, Hi(e)), Na(ip, t);
  }
}
function sp(e, t, n) {
  e === "focusin"
    ? (rs(), (qn = t), (dr = n), qn.attachEvent("onpropertychange", Ka))
    : e === "focusout" && rs();
}
function ap(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return jl(dr);
}
function cp(e, t) {
  if (e === "click") return jl(t);
}
function fp(e, t) {
  if (e === "input" || e === "change") return jl(t);
}
function dp(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var We = typeof Object.is == "function" ? Object.is : dp;
function pr(e, t) {
  if (We(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Ro.call(t, l) || !We(e[l], t[l])) return !1;
  }
  return !0;
}
function ls(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function os(e, t) {
  var n = ls(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = ls(n);
  }
}
function Ya(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Ya(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Xa() {
  for (var e = window, t = ul(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ul(e.document);
  }
  return t;
}
function Zi(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function pp(e) {
  var t = Xa(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Ya(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Zi(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = os(n, o));
        var i = os(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var mp = ut && "documentMode" in document && 11 >= document.documentMode,
  an = null,
  Jo = null,
  bn = null,
  qo = !1;
function is(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  qo ||
    an == null ||
    an !== ul(r) ||
    ((r = an),
    "selectionStart" in r && Zi(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (bn && pr(bn, r)) ||
      ((bn = r),
      (r = ml(Jo, "onSelect")),
      0 < r.length &&
        ((t = new Yi("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = an))));
}
function Ar(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var cn = {
    animationend: Ar("Animation", "AnimationEnd"),
    animationiteration: Ar("Animation", "AnimationIteration"),
    animationstart: Ar("Animation", "AnimationStart"),
    transitionend: Ar("Transition", "TransitionEnd"),
  },
  mo = {},
  Ga = {};
ut &&
  ((Ga = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete cn.animationend.animation,
    delete cn.animationiteration.animation,
    delete cn.animationstart.animation),
  "TransitionEvent" in window || delete cn.transitionend.transition);
function Dl(e) {
  if (mo[e]) return mo[e];
  if (!cn[e]) return e;
  var t = cn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ga) return (mo[e] = t[n]);
  return e;
}
var Za = Dl("animationend"),
  Ja = Dl("animationiteration"),
  qa = Dl("animationstart"),
  ba = Dl("transitionend"),
  ec = new Map(),
  us =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function Ot(e, t) {
  ec.set(e, t), bt(t, [e]);
}
for (var ho = 0; ho < us.length; ho++) {
  var vo = us[ho],
    hp = vo.toLowerCase(),
    vp = vo[0].toUpperCase() + vo.slice(1);
  Ot(hp, "on" + vp);
}
Ot(Za, "onAnimationEnd");
Ot(Ja, "onAnimationIteration");
Ot(qa, "onAnimationStart");
Ot("dblclick", "onDoubleClick");
Ot("focusin", "onFocus");
Ot("focusout", "onBlur");
Ot(ba, "onTransitionEnd");
Cn("onMouseEnter", ["mouseout", "mouseover"]);
Cn("onMouseLeave", ["mouseout", "mouseover"]);
Cn("onPointerEnter", ["pointerout", "pointerover"]);
Cn("onPointerLeave", ["pointerout", "pointerover"]);
bt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
bt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
bt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
bt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
bt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
bt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Yn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  gp = new Set("cancel close invalid load scroll toggle".split(" ").concat(Yn));
function ss(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), hd(r, t, void 0, e), (e.currentTarget = null);
}
function tc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            s = u.instance,
            a = u.currentTarget;
          if (((u = u.listener), s !== o && l.isPropagationStopped())) break e;
          ss(l, u, a), (o = s);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((u = r[i]),
            (s = u.instance),
            (a = u.currentTarget),
            (u = u.listener),
            s !== o && l.isPropagationStopped())
          )
            break e;
          ss(l, u, a), (o = s);
        }
    }
  }
  if (al) throw ((e = Yo), (al = !1), (Yo = null), e);
}
function U(e, t) {
  var n = t[ri];
  n === void 0 && (n = t[ri] = new Set());
  var r = e + "__bubble";
  n.has(r) || (nc(t, e, 2, !1), n.add(r));
}
function go(e, t, n) {
  var r = 0;
  t && (r |= 4), nc(n, e, r, t);
}
var Ur = "_reactListening" + Math.random().toString(36).slice(2);
function mr(e) {
  if (!e[Ur]) {
    (e[Ur] = !0),
      aa.forEach(function (n) {
        n !== "selectionchange" && (gp.has(n) || go(n, !1, e), go(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ur] || ((t[Ur] = !0), go("selectionchange", !1, t));
  }
}
function nc(e, t, n, r) {
  switch (Aa(t)) {
    case 1:
      var l = Fd;
      break;
    case 4:
      l = Rd;
      break;
    default:
      l = Qi;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Ko ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
        ? e.addEventListener(t, n, { passive: l })
        : e.addEventListener(t, n, !1);
}
function yo(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var s = i.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = i.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; u !== null; ) {
          if (((i = Ht(u)), i === null)) return;
          if (((s = i.tag), s === 5 || s === 6)) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Na(function () {
    var a = o,
      d = Hi(n),
      p = [];
    e: {
      var h = ec.get(e);
      if (h !== void 0) {
        var v = Yi,
          y = e;
        switch (e) {
          case "keypress":
            if (br(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = Yd;
            break;
          case "focusin":
            (y = "focus"), (v = co);
            break;
          case "focusout":
            (y = "blur"), (v = co);
            break;
          case "beforeblur":
          case "afterblur":
            v = co;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = Zu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = zd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Zd;
            break;
          case Za:
          case Ja:
          case qa:
            v = Id;
            break;
          case ba:
            v = qd;
            break;
          case "scroll":
            v = Od;
            break;
          case "wheel":
            v = ep;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = Ud;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = qu;
        }
        var E = (t & 4) !== 0,
          T = !E && e === "scroll",
          f = E ? (h !== null ? h + "Capture" : null) : h;
        E = [];
        for (var c = a, m; c !== null; ) {
          m = c;
          var w = m.stateNode;
          if (
            (m.tag === 5 &&
              w !== null &&
              ((m = w),
              f !== null && ((w = sr(c, f)), w != null && E.push(hr(c, w, m)))),
            T)
          )
            break;
          c = c.return;
        }
        0 < E.length &&
          ((h = new v(h, y, null, n, d)), p.push({ event: h, listeners: E }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          h &&
            n !== Wo &&
            (y = n.relatedTarget || n.fromElement) &&
            (Ht(y) || y[st]))
        )
          break e;
        if (
          (v || h) &&
          ((h =
            d.window === d
              ? d
              : (h = d.ownerDocument)
                ? h.defaultView || h.parentWindow
                : window),
          v
            ? ((y = n.relatedTarget || n.toElement),
              (v = a),
              (y = y ? Ht(y) : null),
              y !== null &&
                ((T = en(y)), y !== T || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((v = null), (y = a)),
          v !== y)
        ) {
          if (
            ((E = Zu),
            (w = "onMouseLeave"),
            (f = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((E = qu),
              (w = "onPointerLeave"),
              (f = "onPointerEnter"),
              (c = "pointer")),
            (T = v == null ? h : fn(v)),
            (m = y == null ? h : fn(y)),
            (h = new E(w, c + "leave", v, n, d)),
            (h.target = T),
            (h.relatedTarget = m),
            (w = null),
            Ht(d) === a &&
              ((E = new E(f, c + "enter", y, n, d)),
              (E.target = m),
              (E.relatedTarget = T),
              (w = E)),
            (T = w),
            v && y)
          )
            t: {
              for (E = v, f = y, c = 0, m = E; m; m = ln(m)) c++;
              for (m = 0, w = f; w; w = ln(w)) m++;
              for (; 0 < c - m; ) (E = ln(E)), c--;
              for (; 0 < m - c; ) (f = ln(f)), m--;
              for (; c--; ) {
                if (E === f || (f !== null && E === f.alternate)) break t;
                (E = ln(E)), (f = ln(f));
              }
              E = null;
            }
          else E = null;
          v !== null && as(p, h, v, E, !1),
            y !== null && T !== null && as(p, T, y, E, !0);
        }
      }
      e: {
        if (
          ((h = a ? fn(a) : window),
          (v = h.nodeName && h.nodeName.toLowerCase()),
          v === "select" || (v === "input" && h.type === "file"))
        )
          var k = up;
        else if (ts(h))
          if (Qa) k = fp;
          else {
            k = ap;
            var P = sp;
          }
        else
          (v = h.nodeName) &&
            v.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (k = cp);
        if (k && (k = k(e, a))) {
          Wa(p, k, n, d);
          break e;
        }
        P && P(e, h, a),
          e === "focusout" &&
            (P = h._wrapperState) &&
            P.controlled &&
            h.type === "number" &&
            Ao(h, "number", h.value);
      }
      switch (((P = a ? fn(a) : window), e)) {
        case "focusin":
          (ts(P) || P.contentEditable === "true") &&
            ((an = P), (Jo = a), (bn = null));
          break;
        case "focusout":
          bn = Jo = an = null;
          break;
        case "mousedown":
          qo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (qo = !1), is(p, n, d);
          break;
        case "selectionchange":
          if (mp) break;
        case "keydown":
        case "keyup":
          is(p, n, d);
      }
      var _;
      if (Gi)
        e: {
          switch (e) {
            case "compositionstart":
              var N = "onCompositionStart";
              break e;
            case "compositionend":
              N = "onCompositionEnd";
              break e;
            case "compositionupdate":
              N = "onCompositionUpdate";
              break e;
          }
          N = void 0;
        }
      else
        sn
          ? Va(e, n) && (N = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      N &&
        (Ha &&
          n.locale !== "ko" &&
          (sn || N !== "onCompositionStart"
            ? N === "onCompositionEnd" && sn && (_ = Ua())
            : ((wt = d),
              (Ki = "value" in wt ? wt.value : wt.textContent),
              (sn = !0))),
        (P = ml(a, N)),
        0 < P.length &&
          ((N = new Ju(N, e, null, n, d)),
          p.push({ event: N, listeners: P }),
          _ ? (N.data = _) : ((_ = Ba(n)), _ !== null && (N.data = _)))),
        (_ = np ? rp(e, n) : lp(e, n)) &&
          ((a = ml(a, "onBeforeInput")),
          0 < a.length &&
            ((d = new Ju("onBeforeInput", "beforeinput", null, n, d)),
            p.push({ event: d, listeners: a }),
            (d.data = _)));
    }
    tc(p, t);
  });
}
function hr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ml(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = sr(e, n)),
      o != null && r.unshift(hr(e, o, l)),
      (o = sr(e, t)),
      o != null && r.push(hr(e, o, l))),
      (e = e.return);
  }
  return r;
}
function ln(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function as(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      a = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      a !== null &&
      ((u = a),
      l
        ? ((s = sr(n, o)), s != null && i.unshift(hr(n, s, u)))
        : l || ((s = sr(n, o)), s != null && i.push(hr(n, s, u)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var yp = /\r\n?/g,
  wp = /\u0000|\uFFFD/g;
function cs(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      yp,
      `
`,
    )
    .replace(wp, "");
}
function Hr(e, t, n) {
  if (((t = cs(t)), cs(e) !== t && n)) throw Error(S(425));
}
function hl() {}
var bo = null,
  ei = null;
function ti(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var ni = typeof setTimeout == "function" ? setTimeout : void 0,
  Ep = typeof clearTimeout == "function" ? clearTimeout : void 0,
  fs = typeof Promise == "function" ? Promise : void 0,
  Sp =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof fs < "u"
        ? function (e) {
            return fs.resolve(null).then(e).catch(kp);
          }
        : ni;
function kp(e) {
  setTimeout(function () {
    throw e;
  });
}
function wo(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), fr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  fr(t);
}
function Nt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function ds(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var On = Math.random().toString(36).slice(2),
  Ze = "__reactFiber$" + On,
  vr = "__reactProps$" + On,
  st = "__reactContainer$" + On,
  ri = "__reactEvents$" + On,
  xp = "__reactListeners$" + On,
  Cp = "__reactHandles$" + On;
function Ht(e) {
  var t = e[Ze];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[st] || n[Ze])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = ds(e); e !== null; ) {
          if ((n = e[Ze])) return n;
          e = ds(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Pr(e) {
  return (
    (e = e[Ze] || e[st]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function fn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(S(33));
}
function Il(e) {
  return e[vr] || null;
}
var li = [],
  dn = -1;
function Mt(e) {
  return { current: e };
}
function H(e) {
  0 > dn || ((e.current = li[dn]), (li[dn] = null), dn--);
}
function A(e, t) {
  dn++, (li[dn] = e.current), (e.current = t);
}
var Ft = {},
  se = Mt(Ft),
  ve = Mt(!1),
  Xt = Ft;
function Nn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ft;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function ge(e) {
  return (e = e.childContextTypes), e != null;
}
function vl() {
  H(ve), H(se);
}
function ps(e, t, n) {
  if (se.current !== Ft) throw Error(S(168));
  A(se, t), A(ve, n);
}
function rc(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(S(108, sd(e) || "Unknown", l));
  return K({}, n, r);
}
function gl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ft),
    (Xt = se.current),
    A(se, e),
    A(ve, ve.current),
    !0
  );
}
function ms(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(S(169));
  n
    ? ((e = rc(e, t, Xt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      H(ve),
      H(se),
      A(se, e))
    : H(ve),
    A(ve, n);
}
var tt = null,
  Al = !1,
  Eo = !1;
function lc(e) {
  tt === null ? (tt = [e]) : tt.push(e);
}
function Np(e) {
  (Al = !0), lc(e);
}
function zt() {
  if (!Eo && tt !== null) {
    Eo = !0;
    var e = 0,
      t = I;
    try {
      var n = tt;
      for (I = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (tt = null), (Al = !1);
    } catch (l) {
      throw (tt !== null && (tt = tt.slice(e + 1)), La(Vi, zt), l);
    } finally {
      (I = t), (Eo = !1);
    }
  }
  return null;
}
var pn = [],
  mn = 0,
  yl = null,
  wl = 0,
  Te = [],
  Le = 0,
  Gt = null,
  rt = 1,
  lt = "";
function Dt(e, t) {
  (pn[mn++] = wl), (pn[mn++] = yl), (yl = e), (wl = t);
}
function oc(e, t, n) {
  (Te[Le++] = rt), (Te[Le++] = lt), (Te[Le++] = Gt), (Gt = e);
  var r = rt;
  e = lt;
  var l = 32 - Ve(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - Ve(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (rt = (1 << (32 - Ve(t) + l)) | (n << l) | r),
      (lt = o + e);
  } else (rt = (1 << o) | (n << l) | r), (lt = e);
}
function Ji(e) {
  e.return !== null && (Dt(e, 1), oc(e, 1, 0));
}
function qi(e) {
  for (; e === yl; )
    (yl = pn[--mn]), (pn[mn] = null), (wl = pn[--mn]), (pn[mn] = null);
  for (; e === Gt; )
    (Gt = Te[--Le]),
      (Te[Le] = null),
      (lt = Te[--Le]),
      (Te[Le] = null),
      (rt = Te[--Le]),
      (Te[Le] = null);
}
var Ce = null,
  xe = null,
  V = !1,
  Ue = null;
function ic(e, t) {
  var n = $e(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function hs(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ce = e), (xe = Nt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ce = e), (xe = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Gt !== null ? { id: rt, overflow: lt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = $e(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ce = e),
            (xe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function oi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ii(e) {
  if (V) {
    var t = xe;
    if (t) {
      var n = t;
      if (!hs(e, t)) {
        if (oi(e)) throw Error(S(418));
        t = Nt(n.nextSibling);
        var r = Ce;
        t && hs(e, t)
          ? ic(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (V = !1), (Ce = e));
      }
    } else {
      if (oi(e)) throw Error(S(418));
      (e.flags = (e.flags & -4097) | 2), (V = !1), (Ce = e);
    }
  }
}
function vs(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ce = e;
}
function Vr(e) {
  if (e !== Ce) return !1;
  if (!V) return vs(e), (V = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !ti(e.type, e.memoizedProps))),
    t && (t = xe))
  ) {
    if (oi(e)) throw (uc(), Error(S(418)));
    for (; t; ) ic(e, t), (t = Nt(t.nextSibling));
  }
  if ((vs(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(S(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              xe = Nt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      xe = null;
    }
  } else xe = Ce ? Nt(e.stateNode.nextSibling) : null;
  return !0;
}
function uc() {
  for (var e = xe; e; ) e = Nt(e.nextSibling);
}
function Pn() {
  (xe = Ce = null), (V = !1);
}
function bi(e) {
  Ue === null ? (Ue = [e]) : Ue.push(e);
}
var Pp = ft.ReactCurrentBatchConfig;
function Un(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(S(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(S(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var u = l.refs;
            i === null ? delete u[o] : (u[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(S(284));
    if (!n._owner) throw Error(S(290, e));
  }
  return e;
}
function Br(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      S(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    ))
  );
}
function gs(e) {
  var t = e._init;
  return t(e._payload);
}
function sc(e) {
  function t(f, c) {
    if (e) {
      var m = f.deletions;
      m === null ? ((f.deletions = [c]), (f.flags |= 16)) : m.push(c);
    }
  }
  function n(f, c) {
    if (!e) return null;
    for (; c !== null; ) t(f, c), (c = c.sibling);
    return null;
  }
  function r(f, c) {
    for (f = new Map(); c !== null; )
      c.key !== null ? f.set(c.key, c) : f.set(c.index, c), (c = c.sibling);
    return f;
  }
  function l(f, c) {
    return (f = Lt(f, c)), (f.index = 0), (f.sibling = null), f;
  }
  function o(f, c, m) {
    return (
      (f.index = m),
      e
        ? ((m = f.alternate),
          m !== null
            ? ((m = m.index), m < c ? ((f.flags |= 2), c) : m)
            : ((f.flags |= 2), c))
        : ((f.flags |= 1048576), c)
    );
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, c, m, w) {
    return c === null || c.tag !== 6
      ? ((c = _o(m, f.mode, w)), (c.return = f), c)
      : ((c = l(c, m)), (c.return = f), c);
  }
  function s(f, c, m, w) {
    var k = m.type;
    return k === un
      ? d(f, c, m.props.children, w, m.key)
      : c !== null &&
          (c.elementType === k ||
            (typeof k == "object" &&
              k !== null &&
              k.$$typeof === mt &&
              gs(k) === c.type))
        ? ((w = l(c, m.props)), (w.ref = Un(f, c, m)), (w.return = f), w)
        : ((w = il(m.type, m.key, m.props, null, f.mode, w)),
          (w.ref = Un(f, c, m)),
          (w.return = f),
          w);
  }
  function a(f, c, m, w) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== m.containerInfo ||
      c.stateNode.implementation !== m.implementation
      ? ((c = To(m, f.mode, w)), (c.return = f), c)
      : ((c = l(c, m.children || [])), (c.return = f), c);
  }
  function d(f, c, m, w, k) {
    return c === null || c.tag !== 7
      ? ((c = Kt(m, f.mode, w, k)), (c.return = f), c)
      : ((c = l(c, m)), (c.return = f), c);
  }
  function p(f, c, m) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = _o("" + c, f.mode, m)), (c.return = f), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Rr:
          return (
            (m = il(c.type, c.key, c.props, null, f.mode, m)),
            (m.ref = Un(f, null, c)),
            (m.return = f),
            m
          );
        case on:
          return (c = To(c, f.mode, m)), (c.return = f), c;
        case mt:
          var w = c._init;
          return p(f, w(c._payload), m);
      }
      if (Qn(c) || zn(c))
        return (c = Kt(c, f.mode, m, null)), (c.return = f), c;
      Br(f, c);
    }
    return null;
  }
  function h(f, c, m, w) {
    var k = c !== null ? c.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return k !== null ? null : u(f, c, "" + m, w);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Rr:
          return m.key === k ? s(f, c, m, w) : null;
        case on:
          return m.key === k ? a(f, c, m, w) : null;
        case mt:
          return (k = m._init), h(f, c, k(m._payload), w);
      }
      if (Qn(m) || zn(m)) return k !== null ? null : d(f, c, m, w, null);
      Br(f, m);
    }
    return null;
  }
  function v(f, c, m, w, k) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return (f = f.get(m) || null), u(c, f, "" + w, k);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Rr:
          return (f = f.get(w.key === null ? m : w.key) || null), s(c, f, w, k);
        case on:
          return (f = f.get(w.key === null ? m : w.key) || null), a(c, f, w, k);
        case mt:
          var P = w._init;
          return v(f, c, m, P(w._payload), k);
      }
      if (Qn(w) || zn(w)) return (f = f.get(m) || null), d(c, f, w, k, null);
      Br(c, w);
    }
    return null;
  }
  function y(f, c, m, w) {
    for (
      var k = null, P = null, _ = c, N = (c = 0), D = null;
      _ !== null && N < m.length;
      N++
    ) {
      _.index > N ? ((D = _), (_ = null)) : (D = _.sibling);
      var M = h(f, _, m[N], w);
      if (M === null) {
        _ === null && (_ = D);
        break;
      }
      e && _ && M.alternate === null && t(f, _),
        (c = o(M, c, N)),
        P === null ? (k = M) : (P.sibling = M),
        (P = M),
        (_ = D);
    }
    if (N === m.length) return n(f, _), V && Dt(f, N), k;
    if (_ === null) {
      for (; N < m.length; N++)
        (_ = p(f, m[N], w)),
          _ !== null &&
            ((c = o(_, c, N)), P === null ? (k = _) : (P.sibling = _), (P = _));
      return V && Dt(f, N), k;
    }
    for (_ = r(f, _); N < m.length; N++)
      (D = v(_, f, N, m[N], w)),
        D !== null &&
          (e && D.alternate !== null && _.delete(D.key === null ? N : D.key),
          (c = o(D, c, N)),
          P === null ? (k = D) : (P.sibling = D),
          (P = D));
    return (
      e &&
        _.forEach(function (b) {
          return t(f, b);
        }),
      V && Dt(f, N),
      k
    );
  }
  function E(f, c, m, w) {
    var k = zn(m);
    if (typeof k != "function") throw Error(S(150));
    if (((m = k.call(m)), m == null)) throw Error(S(151));
    for (
      var P = (k = null), _ = c, N = (c = 0), D = null, M = m.next();
      _ !== null && !M.done;
      N++, M = m.next()
    ) {
      _.index > N ? ((D = _), (_ = null)) : (D = _.sibling);
      var b = h(f, _, M.value, w);
      if (b === null) {
        _ === null && (_ = D);
        break;
      }
      e && _ && b.alternate === null && t(f, _),
        (c = o(b, c, N)),
        P === null ? (k = b) : (P.sibling = b),
        (P = b),
        (_ = D);
    }
    if (M.done) return n(f, _), V && Dt(f, N), k;
    if (_ === null) {
      for (; !M.done; N++, M = m.next())
        (M = p(f, M.value, w)),
          M !== null &&
            ((c = o(M, c, N)), P === null ? (k = M) : (P.sibling = M), (P = M));
      return V && Dt(f, N), k;
    }
    for (_ = r(f, _); !M.done; N++, M = m.next())
      (M = v(_, f, N, M.value, w)),
        M !== null &&
          (e && M.alternate !== null && _.delete(M.key === null ? N : M.key),
          (c = o(M, c, N)),
          P === null ? (k = M) : (P.sibling = M),
          (P = M));
    return (
      e &&
        _.forEach(function (Ee) {
          return t(f, Ee);
        }),
      V && Dt(f, N),
      k
    );
  }
  function T(f, c, m, w) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === un &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case Rr:
          e: {
            for (var k = m.key, P = c; P !== null; ) {
              if (P.key === k) {
                if (((k = m.type), k === un)) {
                  if (P.tag === 7) {
                    n(f, P.sibling),
                      (c = l(P, m.props.children)),
                      (c.return = f),
                      (f = c);
                    break e;
                  }
                } else if (
                  P.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === mt &&
                    gs(k) === P.type)
                ) {
                  n(f, P.sibling),
                    (c = l(P, m.props)),
                    (c.ref = Un(f, P, m)),
                    (c.return = f),
                    (f = c);
                  break e;
                }
                n(f, P);
                break;
              } else t(f, P);
              P = P.sibling;
            }
            m.type === un
              ? ((c = Kt(m.props.children, f.mode, w, m.key)),
                (c.return = f),
                (f = c))
              : ((w = il(m.type, m.key, m.props, null, f.mode, w)),
                (w.ref = Un(f, c, m)),
                (w.return = f),
                (f = w));
          }
          return i(f);
        case on:
          e: {
            for (P = m.key; c !== null; ) {
              if (c.key === P)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === m.containerInfo &&
                  c.stateNode.implementation === m.implementation
                ) {
                  n(f, c.sibling),
                    (c = l(c, m.children || [])),
                    (c.return = f),
                    (f = c);
                  break e;
                } else {
                  n(f, c);
                  break;
                }
              else t(f, c);
              c = c.sibling;
            }
            (c = To(m, f.mode, w)), (c.return = f), (f = c);
          }
          return i(f);
        case mt:
          return (P = m._init), T(f, c, P(m._payload), w);
      }
      if (Qn(m)) return y(f, c, m, w);
      if (zn(m)) return E(f, c, m, w);
      Br(f, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        c !== null && c.tag === 6
          ? (n(f, c.sibling), (c = l(c, m)), (c.return = f), (f = c))
          : (n(f, c), (c = _o(m, f.mode, w)), (c.return = f), (f = c)),
        i(f))
      : n(f, c);
  }
  return T;
}
var _n = sc(!0),
  ac = sc(!1),
  El = Mt(null),
  Sl = null,
  hn = null,
  eu = null;
function tu() {
  eu = hn = Sl = null;
}
function nu(e) {
  var t = El.current;
  H(El), (e._currentValue = t);
}
function ui(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function kn(e, t) {
  (Sl = e),
    (eu = hn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (he = !0), (e.firstContext = null));
}
function Re(e) {
  var t = e._currentValue;
  if (eu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), hn === null)) {
      if (Sl === null) throw Error(S(308));
      (hn = e), (Sl.dependencies = { lanes: 0, firstContext: e });
    } else hn = hn.next = e;
  return t;
}
var Vt = null;
function ru(e) {
  Vt === null ? (Vt = [e]) : Vt.push(e);
}
function cc(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), ru(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    at(e, r)
  );
}
function at(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var ht = !1;
function lu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function fc(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function ot(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Pt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), j & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      at(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), ru(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    at(e, n)
  );
}
function el(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Bi(e, n);
  }
}
function ys(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function kl(e, t, n, r) {
  var l = e.updateQueue;
  ht = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      a = s.next;
    (s.next = null), i === null ? (o = a) : (i.next = a), (i = s);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (u = d.lastBaseUpdate),
      u !== i &&
        (u === null ? (d.firstBaseUpdate = a) : (u.next = a),
        (d.lastBaseUpdate = s)));
  }
  if (o !== null) {
    var p = l.baseState;
    (i = 0), (d = a = s = null), (u = o);
    do {
      var h = u.lane,
        v = u.eventTime;
      if ((r & h) === h) {
        d !== null &&
          (d = d.next =
            {
              eventTime: v,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var y = e,
            E = u;
          switch (((h = t), (v = n), E.tag)) {
            case 1:
              if (((y = E.payload), typeof y == "function")) {
                p = y.call(v, p, h);
                break e;
              }
              p = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = E.payload),
                (h = typeof y == "function" ? y.call(v, p, h) : y),
                h == null)
              )
                break e;
              p = K({}, p, h);
              break e;
            case 2:
              ht = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (h = l.effects),
          h === null ? (l.effects = [u]) : h.push(u));
      } else
        (v = {
          eventTime: v,
          lane: h,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          d === null ? ((a = d = v), (s = p)) : (d = d.next = v),
          (i |= h);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (h = u),
          (u = h.next),
          (h.next = null),
          (l.lastBaseUpdate = h),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (d === null && (s = p),
      (l.baseState = s),
      (l.firstBaseUpdate = a),
      (l.lastBaseUpdate = d),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (Jt |= i), (e.lanes = i), (e.memoizedState = p);
  }
}
function ws(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(S(191, l));
        l.call(r);
      }
    }
}
var _r = {},
  qe = Mt(_r),
  gr = Mt(_r),
  yr = Mt(_r);
function Bt(e) {
  if (e === _r) throw Error(S(174));
  return e;
}
function ou(e, t) {
  switch ((A(yr, t), A(gr, e), A(qe, _r), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ho(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ho(t, e));
  }
  H(qe), A(qe, t);
}
function Tn() {
  H(qe), H(gr), H(yr);
}
function dc(e) {
  Bt(yr.current);
  var t = Bt(qe.current),
    n = Ho(t, e.type);
  t !== n && (A(gr, e), A(qe, n));
}
function iu(e) {
  gr.current === e && (H(qe), H(gr));
}
var B = Mt(0);
function xl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var So = [];
function uu() {
  for (var e = 0; e < So.length; e++)
    So[e]._workInProgressVersionPrimary = null;
  So.length = 0;
}
var tl = ft.ReactCurrentDispatcher,
  ko = ft.ReactCurrentBatchConfig,
  Zt = 0,
  Q = null,
  J = null,
  ee = null,
  Cl = !1,
  er = !1,
  wr = 0,
  _p = 0;
function oe() {
  throw Error(S(321));
}
function su(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!We(e[n], t[n])) return !1;
  return !0;
}
function au(e, t, n, r, l, o) {
  if (
    ((Zt = o),
    (Q = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (tl.current = e === null || e.memoizedState === null ? Fp : Rp),
    (e = n(r, l)),
    er)
  ) {
    o = 0;
    do {
      if (((er = !1), (wr = 0), 25 <= o)) throw Error(S(301));
      (o += 1),
        (ee = J = null),
        (t.updateQueue = null),
        (tl.current = Op),
        (e = n(r, l));
    } while (er);
  }
  if (
    ((tl.current = Nl),
    (t = J !== null && J.next !== null),
    (Zt = 0),
    (ee = J = Q = null),
    (Cl = !1),
    t)
  )
    throw Error(S(300));
  return e;
}
function cu() {
  var e = wr !== 0;
  return (wr = 0), e;
}
function Ge() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ee === null ? (Q.memoizedState = ee = e) : (ee = ee.next = e), ee;
}
function Oe() {
  if (J === null) {
    var e = Q.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = J.next;
  var t = ee === null ? Q.memoizedState : ee.next;
  if (t !== null) (ee = t), (J = e);
  else {
    if (e === null) throw Error(S(310));
    (J = e),
      (e = {
        memoizedState: J.memoizedState,
        baseState: J.baseState,
        baseQueue: J.baseQueue,
        queue: J.queue,
        next: null,
      }),
      ee === null ? (Q.memoizedState = ee = e) : (ee = ee.next = e);
  }
  return ee;
}
function Er(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function xo(e) {
  var t = Oe(),
    n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = J,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var u = (i = null),
      s = null,
      a = o;
    do {
      var d = a.lane;
      if ((Zt & d) === d)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var p = {
          lane: d,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        s === null ? ((u = s = p), (i = r)) : (s = s.next = p),
          (Q.lanes |= d),
          (Jt |= d);
      }
      a = a.next;
    } while (a !== null && a !== o);
    s === null ? (i = r) : (s.next = u),
      We(r, t.memoizedState) || (he = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (Q.lanes |= o), (Jt |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Co(e) {
  var t = Oe(),
    n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    We(o, t.memoizedState) || (he = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function pc() {}
function mc(e, t) {
  var n = Q,
    r = Oe(),
    l = t(),
    o = !We(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (he = !0)),
    (r = r.queue),
    fu(gc.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (ee !== null && ee.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Sr(9, vc.bind(null, n, r, l, t), void 0, null),
      te === null)
    )
      throw Error(S(349));
    Zt & 30 || hc(n, t, l);
  }
  return l;
}
function hc(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Q.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function vc(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), yc(t) && wc(e);
}
function gc(e, t, n) {
  return n(function () {
    yc(t) && wc(e);
  });
}
function yc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !We(e, n);
  } catch {
    return !0;
  }
}
function wc(e) {
  var t = at(e, 1);
  t !== null && Be(t, e, 1, -1);
}
function Es(e) {
  var t = Ge();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Er,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = $p.bind(null, Q, e)),
    [t.memoizedState, e]
  );
}
function Sr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Q.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Ec() {
  return Oe().memoizedState;
}
function nl(e, t, n, r) {
  var l = Ge();
  (Q.flags |= e),
    (l.memoizedState = Sr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ul(e, t, n, r) {
  var l = Oe();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (J !== null) {
    var i = J.memoizedState;
    if (((o = i.destroy), r !== null && su(r, i.deps))) {
      l.memoizedState = Sr(t, n, o, r);
      return;
    }
  }
  (Q.flags |= e), (l.memoizedState = Sr(1 | t, n, o, r));
}
function Ss(e, t) {
  return nl(8390656, 8, e, t);
}
function fu(e, t) {
  return Ul(2048, 8, e, t);
}
function Sc(e, t) {
  return Ul(4, 2, e, t);
}
function kc(e, t) {
  return Ul(4, 4, e, t);
}
function xc(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Cc(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ul(4, 4, xc.bind(null, t, e), n)
  );
}
function du() {}
function Nc(e, t) {
  var n = Oe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && su(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Pc(e, t) {
  var n = Oe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && su(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function _c(e, t, n) {
  return Zt & 21
    ? (We(n, t) || ((n = Ra()), (Q.lanes |= n), (Jt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (he = !0)), (e.memoizedState = n));
}
function Tp(e, t) {
  var n = I;
  (I = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ko.transition;
  ko.transition = {};
  try {
    e(!1), t();
  } finally {
    (I = n), (ko.transition = r);
  }
}
function Tc() {
  return Oe().memoizedState;
}
function Lp(e, t, n) {
  var r = Tt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Lc(e))
  )
    $c(t, n);
  else if (((n = cc(e, t, n, r)), n !== null)) {
    var l = ce();
    Be(n, e, r, l), Fc(n, t, r);
  }
}
function $p(e, t, n) {
  var r = Tt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Lc(e)) $c(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          u = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), We(u, i))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), ru(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = cc(e, t, l, r)),
      n !== null && ((l = ce()), Be(n, e, r, l), Fc(n, t, r));
  }
}
function Lc(e) {
  var t = e.alternate;
  return e === Q || (t !== null && t === Q);
}
function $c(e, t) {
  er = Cl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Fc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Bi(e, n);
  }
}
var Nl = {
    readContext: Re,
    useCallback: oe,
    useContext: oe,
    useEffect: oe,
    useImperativeHandle: oe,
    useInsertionEffect: oe,
    useLayoutEffect: oe,
    useMemo: oe,
    useReducer: oe,
    useRef: oe,
    useState: oe,
    useDebugValue: oe,
    useDeferredValue: oe,
    useTransition: oe,
    useMutableSource: oe,
    useSyncExternalStore: oe,
    useId: oe,
    unstable_isNewReconciler: !1,
  },
  Fp = {
    readContext: Re,
    useCallback: function (e, t) {
      return (Ge().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Re,
    useEffect: Ss,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        nl(4194308, 4, xc.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return nl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return nl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ge();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ge();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Lp.bind(null, Q, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ge();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Es,
    useDebugValue: du,
    useDeferredValue: function (e) {
      return (Ge().memoizedState = e);
    },
    useTransition: function () {
      var e = Es(!1),
        t = e[0];
      return (e = Tp.bind(null, e[1])), (Ge().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Q,
        l = Ge();
      if (V) {
        if (n === void 0) throw Error(S(407));
        n = n();
      } else {
        if (((n = t()), te === null)) throw Error(S(349));
        Zt & 30 || hc(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        Ss(gc.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Sr(9, vc.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ge(),
        t = te.identifierPrefix;
      if (V) {
        var n = lt,
          r = rt;
        (n = (r & ~(1 << (32 - Ve(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = wr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = _p++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Rp = {
    readContext: Re,
    useCallback: Nc,
    useContext: Re,
    useEffect: fu,
    useImperativeHandle: Cc,
    useInsertionEffect: Sc,
    useLayoutEffect: kc,
    useMemo: Pc,
    useReducer: xo,
    useRef: Ec,
    useState: function () {
      return xo(Er);
    },
    useDebugValue: du,
    useDeferredValue: function (e) {
      var t = Oe();
      return _c(t, J.memoizedState, e);
    },
    useTransition: function () {
      var e = xo(Er)[0],
        t = Oe().memoizedState;
      return [e, t];
    },
    useMutableSource: pc,
    useSyncExternalStore: mc,
    useId: Tc,
    unstable_isNewReconciler: !1,
  },
  Op = {
    readContext: Re,
    useCallback: Nc,
    useContext: Re,
    useEffect: fu,
    useImperativeHandle: Cc,
    useInsertionEffect: Sc,
    useLayoutEffect: kc,
    useMemo: Pc,
    useReducer: Co,
    useRef: Ec,
    useState: function () {
      return Co(Er);
    },
    useDebugValue: du,
    useDeferredValue: function (e) {
      var t = Oe();
      return J === null ? (t.memoizedState = e) : _c(t, J.memoizedState, e);
    },
    useTransition: function () {
      var e = Co(Er)[0],
        t = Oe().memoizedState;
      return [e, t];
    },
    useMutableSource: pc,
    useSyncExternalStore: mc,
    useId: Tc,
    unstable_isNewReconciler: !1,
  };
function Ie(e, t) {
  if (e && e.defaultProps) {
    (t = K({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function si(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : K({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Hl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? en(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ce(),
      l = Tt(e),
      o = ot(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Pt(e, o, l)),
      t !== null && (Be(t, e, l, r), el(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ce(),
      l = Tt(e),
      o = ot(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Pt(e, o, l)),
      t !== null && (Be(t, e, l, r), el(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ce(),
      r = Tt(e),
      l = ot(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = Pt(e, l, r)),
      t !== null && (Be(t, e, r, n), el(t, e, r));
  },
};
function ks(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
        ? !pr(n, r) || !pr(l, o)
        : !0
  );
}
function Rc(e, t, n) {
  var r = !1,
    l = Ft,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Re(o))
      : ((l = ge(t) ? Xt : se.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Nn(e, l) : Ft)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Hl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function xs(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Hl.enqueueReplaceState(t, t.state, null);
}
function ai(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), lu(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = Re(o))
    : ((o = ge(t) ? Xt : se.current), (l.context = Nn(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (si(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Hl.enqueueReplaceState(l, l.state, null),
      kl(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Ln(e, t) {
  try {
    var n = "",
      r = t;
    do (n += ud(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function No(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ci(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Mp = typeof WeakMap == "function" ? WeakMap : Map;
function Oc(e, t, n) {
  (n = ot(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      _l || ((_l = !0), (Ei = r)), ci(e, t);
    }),
    n
  );
}
function Mc(e, t, n) {
  (n = ot(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        ci(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        ci(e, t),
          typeof r != "function" &&
            (_t === null ? (_t = new Set([this])) : _t.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function Cs(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Mp();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = Xp.bind(null, e, t, n)), t.then(e, e));
}
function Ns(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ps(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = ot(-1, 1)), (t.tag = 2), Pt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var zp = ft.ReactCurrentOwner,
  he = !1;
function ae(e, t, n, r) {
  t.child = e === null ? ac(t, null, n, r) : _n(t, e.child, n, r);
}
function _s(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    kn(t, l),
    (r = au(e, t, n, r, o, l)),
    (n = cu()),
    e !== null && !he
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        ct(e, t, l))
      : (V && n && Ji(t), (t.flags |= 1), ae(e, t, r, l), t.child)
  );
}
function Ts(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Eu(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), zc(e, t, o, r, l))
      : ((e = il(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : pr), n(i, r) && e.ref === t.ref)
    )
      return ct(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = Lt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function zc(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (pr(o, r) && e.ref === t.ref)
      if (((he = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (he = !0);
      else return (t.lanes = e.lanes), ct(e, t, l);
  }
  return fi(e, t, n, r, l);
}
function jc(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        A(gn, ke),
        (ke |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          A(gn, ke),
          (ke |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        A(gn, ke),
        (ke |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      A(gn, ke),
      (ke |= r);
  return ae(e, t, l, n), t.child;
}
function Dc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function fi(e, t, n, r, l) {
  var o = ge(n) ? Xt : se.current;
  return (
    (o = Nn(t, o)),
    kn(t, l),
    (n = au(e, t, n, r, o, l)),
    (r = cu()),
    e !== null && !he
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        ct(e, t, l))
      : (V && r && Ji(t), (t.flags |= 1), ae(e, t, n, l), t.child)
  );
}
function Ls(e, t, n, r, l) {
  if (ge(n)) {
    var o = !0;
    gl(t);
  } else o = !1;
  if ((kn(t, l), t.stateNode === null))
    rl(e, t), Rc(t, n, r), ai(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      u = t.memoizedProps;
    i.props = u;
    var s = i.context,
      a = n.contextType;
    typeof a == "object" && a !== null
      ? (a = Re(a))
      : ((a = ge(n) ? Xt : se.current), (a = Nn(t, a)));
    var d = n.getDerivedStateFromProps,
      p =
        typeof d == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== r || s !== a) && xs(t, i, r, a)),
      (ht = !1);
    var h = t.memoizedState;
    (i.state = h),
      kl(t, r, i, l),
      (s = t.memoizedState),
      u !== r || h !== s || ve.current || ht
        ? (typeof d == "function" && (si(t, n, d, r), (s = t.memoizedState)),
          (u = ht || ks(t, n, u, r, h, s, a))
            ? (p ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (i.props = r),
          (i.state = s),
          (i.context = a),
          (r = u))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      fc(e, t),
      (u = t.memoizedProps),
      (a = t.type === t.elementType ? u : Ie(t.type, u)),
      (i.props = a),
      (p = t.pendingProps),
      (h = i.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = Re(s))
        : ((s = ge(n) ? Xt : se.current), (s = Nn(t, s)));
    var v = n.getDerivedStateFromProps;
    (d =
      typeof v == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== p || h !== s) && xs(t, i, r, s)),
      (ht = !1),
      (h = t.memoizedState),
      (i.state = h),
      kl(t, r, i, l);
    var y = t.memoizedState;
    u !== p || h !== y || ve.current || ht
      ? (typeof v == "function" && (si(t, n, v, r), (y = t.memoizedState)),
        (a = ht || ks(t, n, a, r, h, y, s) || !1)
          ? (d ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, y, s),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, y, s)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (u === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (i.props = r),
        (i.state = y),
        (i.context = s),
        (r = a))
      : (typeof i.componentDidUpdate != "function" ||
          (u === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return di(e, t, n, r, o, l);
}
function di(e, t, n, r, l, o) {
  Dc(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && ms(t, n, !1), ct(e, t, o);
  (r = t.stateNode), (zp.current = t);
  var u =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = _n(t, e.child, null, o)), (t.child = _n(t, null, u, o)))
      : ae(e, t, u, o),
    (t.memoizedState = r.state),
    l && ms(t, n, !0),
    t.child
  );
}
function Ic(e) {
  var t = e.stateNode;
  t.pendingContext
    ? ps(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && ps(e, t.context, !1),
    ou(e, t.containerInfo);
}
function $s(e, t, n, r, l) {
  return Pn(), bi(l), (t.flags |= 256), ae(e, t, n, r), t.child;
}
var pi = { dehydrated: null, treeContext: null, retryLane: 0 };
function mi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ac(e, t, n) {
  var r = t.pendingProps,
    l = B.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    u;
  if (
    ((u = i) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    A(B, l & 1),
    e === null)
  )
    return (
      ii(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = Wl(i, r, 0, null)),
              (e = Kt(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = mi(n)),
              (t.memoizedState = pi),
              e)
            : pu(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return jp(e, t, i, r, u, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = Lt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (o = Lt(u, o)) : ((o = Kt(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? mi(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = pi),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Lt(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function pu(e, t) {
  return (
    (t = Wl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Wr(e, t, n, r) {
  return (
    r !== null && bi(r),
    _n(t, e.child, null, n),
    (e = pu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function jp(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = No(Error(S(422)))), Wr(e, t, i, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((o = r.fallback),
          (l = t.mode),
          (r = Wl({ mode: "visible", children: r.children }, l, 0, null)),
          (o = Kt(o, l, i, null)),
          (o.flags |= 2),
          (r.return = t),
          (o.return = t),
          (r.sibling = o),
          (t.child = r),
          t.mode & 1 && _n(t, e.child, null, i),
          (t.child.memoizedState = mi(i)),
          (t.memoizedState = pi),
          o);
  if (!(t.mode & 1)) return Wr(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (o = Error(S(419))), (r = No(o, r, void 0)), Wr(e, t, i, r);
  }
  if (((u = (i & e.childLanes) !== 0), he || u)) {
    if (((r = te), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), at(e, l), Be(r, e, l, -1));
    }
    return wu(), (r = No(Error(S(421)))), Wr(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Gp.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (xe = Nt(l.nextSibling)),
      (Ce = t),
      (V = !0),
      (Ue = null),
      e !== null &&
        ((Te[Le++] = rt),
        (Te[Le++] = lt),
        (Te[Le++] = Gt),
        (rt = e.id),
        (lt = e.overflow),
        (Gt = t)),
      (t = pu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Fs(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ui(e.return, t, n);
}
function Po(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function Uc(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((ae(e, t, r.children, n), (r = B.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Fs(e, n, t);
        else if (e.tag === 19) Fs(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((A(B, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && xl(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Po(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && xl(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Po(t, !0, n, null, o);
        break;
      case "together":
        Po(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function rl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function ct(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Jt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(S(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Lt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Lt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Dp(e, t, n) {
  switch (t.tag) {
    case 3:
      Ic(t), Pn();
      break;
    case 5:
      dc(t);
      break;
    case 1:
      ge(t.type) && gl(t);
      break;
    case 4:
      ou(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      A(El, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (A(B, B.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Ac(e, t, n)
            : (A(B, B.current & 1),
              (e = ct(e, t, n)),
              e !== null ? e.sibling : null);
      A(B, B.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Uc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        A(B, B.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), jc(e, t, n);
  }
  return ct(e, t, n);
}
var Hc, hi, Vc, Bc;
Hc = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
hi = function () {};
Vc = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Bt(qe.current);
    var o = null;
    switch (n) {
      case "input":
        (l = Do(e, l)), (r = Do(e, r)), (o = []);
        break;
      case "select":
        (l = K({}, l, { value: void 0 })),
          (r = K({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = Uo(e, l)), (r = Uo(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = hl);
    }
    Vo(n, r);
    var i;
    n = null;
    for (a in l)
      if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null)
        if (a === "style") {
          var u = l[a];
          for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          a !== "dangerouslySetInnerHTML" &&
            a !== "children" &&
            a !== "suppressContentEditableWarning" &&
            a !== "suppressHydrationWarning" &&
            a !== "autoFocus" &&
            (ir.hasOwnProperty(a)
              ? o || (o = [])
              : (o = o || []).push(a, null));
    for (a in r) {
      var s = r[a];
      if (
        ((u = l != null ? l[a] : void 0),
        r.hasOwnProperty(a) && s !== u && (s != null || u != null))
      )
        if (a === "style")
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) ||
                (s && s.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in s)
              s.hasOwnProperty(i) &&
                u[i] !== s[i] &&
                (n || (n = {}), (n[i] = s[i]));
          } else n || (o || (o = []), o.push(a, n)), (n = s);
        else
          a === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (o = o || []).push(a, s))
            : a === "children"
              ? (typeof s != "string" && typeof s != "number") ||
                (o = o || []).push(a, "" + s)
              : a !== "suppressContentEditableWarning" &&
                a !== "suppressHydrationWarning" &&
                (ir.hasOwnProperty(a)
                  ? (s != null && a === "onScroll" && U("scroll", e),
                    o || u === s || (o = []))
                  : (o = o || []).push(a, s));
    }
    n && (o = o || []).push("style", n);
    var a = o;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
Bc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Hn(e, t) {
  if (!V)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ie(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Ip(e, t, n) {
  var r = t.pendingProps;
  switch ((qi(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ie(t), null;
    case 1:
      return ge(t.type) && vl(), ie(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Tn(),
        H(ve),
        H(se),
        uu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Vr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ue !== null && (xi(Ue), (Ue = null)))),
        hi(e, t),
        ie(t),
        null
      );
    case 5:
      iu(t);
      var l = Bt(yr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Vc(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(S(166));
          return ie(t), null;
        }
        if (((e = Bt(qe.current)), Vr(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Ze] = t), (r[vr] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              U("cancel", r), U("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              U("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Yn.length; l++) U(Yn[l], r);
              break;
            case "source":
              U("error", r);
              break;
            case "img":
            case "image":
            case "link":
              U("error", r), U("load", r);
              break;
            case "details":
              U("toggle", r);
              break;
            case "input":
              Uu(r, o), U("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                U("invalid", r);
              break;
            case "textarea":
              Vu(r, o), U("invalid", r);
          }
          Vo(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (o.suppressHydrationWarning !== !0 &&
                      Hr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (o.suppressHydrationWarning !== !0 &&
                      Hr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : ir.hasOwnProperty(i) &&
                  u != null &&
                  i === "onScroll" &&
                  U("scroll", r);
            }
          switch (n) {
            case "input":
              Or(r), Hu(r, o, !0);
              break;
            case "textarea":
              Or(r), Bu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = hl);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = ga(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = i.createElement(n, { is: r.is }))
                  : ((e = i.createElement(n)),
                    n === "select" &&
                      ((i = e),
                      r.multiple
                        ? (i.multiple = !0)
                        : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[Ze] = t),
            (e[vr] = r),
            Hc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = Bo(n, r)), n)) {
              case "dialog":
                U("cancel", e), U("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                U("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Yn.length; l++) U(Yn[l], e);
                l = r;
                break;
              case "source":
                U("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                U("error", e), U("load", e), (l = r);
                break;
              case "details":
                U("toggle", e), (l = r);
                break;
              case "input":
                Uu(e, r), (l = Do(e, r)), U("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = K({}, r, { value: void 0 })),
                  U("invalid", e);
                break;
              case "textarea":
                Vu(e, r), (l = Uo(e, r)), U("invalid", e);
                break;
              default:
                l = r;
            }
            Vo(n, l), (u = l);
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === "style"
                  ? Ea(e, s)
                  : o === "dangerouslySetInnerHTML"
                    ? ((s = s ? s.__html : void 0), s != null && ya(e, s))
                    : o === "children"
                      ? typeof s == "string"
                        ? (n !== "textarea" || s !== "") && ur(e, s)
                        : typeof s == "number" && ur(e, "" + s)
                      : o !== "suppressContentEditableWarning" &&
                        o !== "suppressHydrationWarning" &&
                        o !== "autoFocus" &&
                        (ir.hasOwnProperty(o)
                          ? s != null && o === "onScroll" && U("scroll", e)
                          : s != null && Di(e, o, s, i));
              }
            switch (n) {
              case "input":
                Or(e), Hu(e, r, !1);
                break;
              case "textarea":
                Or(e), Bu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + $t(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? yn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      yn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = hl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ie(t), null;
    case 6:
      if (e && t.stateNode != null) Bc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(S(166));
        if (((n = Bt(yr.current)), Bt(qe.current), Vr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ze] = t),
            (o = r.nodeValue !== n) && ((e = Ce), e !== null))
          )
            switch (e.tag) {
              case 3:
                Hr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Hr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ze] = t),
            (t.stateNode = r);
      }
      return ie(t), null;
    case 13:
      if (
        (H(B),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (V && xe !== null && t.mode & 1 && !(t.flags & 128))
          uc(), Pn(), (t.flags |= 98560), (o = !1);
        else if (((o = Vr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(S(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(S(317));
            o[Ze] = t;
          } else
            Pn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ie(t), (o = !1);
        } else Ue !== null && (xi(Ue), (Ue = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || B.current & 1 ? q === 0 && (q = 3) : wu())),
          t.updateQueue !== null && (t.flags |= 4),
          ie(t),
          null);
    case 4:
      return (
        Tn(), hi(e, t), e === null && mr(t.stateNode.containerInfo), ie(t), null
      );
    case 10:
      return nu(t.type._context), ie(t), null;
    case 17:
      return ge(t.type) && vl(), ie(t), null;
    case 19:
      if ((H(B), (o = t.memoizedState), o === null)) return ie(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) Hn(o, !1);
        else {
          if (q !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = xl(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Hn(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return A(B, (B.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            X() > $n &&
            ((t.flags |= 128), (r = !0), Hn(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = xl(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Hn(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !V)
            )
              return ie(t), null;
          } else
            2 * X() - o.renderingStartTime > $n &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Hn(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = X()),
          (t.sibling = null),
          (n = B.current),
          A(B, r ? (n & 1) | 2 : n & 1),
          t)
        : (ie(t), null);
    case 22:
    case 23:
      return (
        yu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ke & 1073741824 && (ie(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ie(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(S(156, t.tag));
}
function Ap(e, t) {
  switch ((qi(t), t.tag)) {
    case 1:
      return (
        ge(t.type) && vl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Tn(),
        H(ve),
        H(se),
        uu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return iu(t), null;
    case 13:
      if ((H(B), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(S(340));
        Pn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return H(B), null;
    case 4:
      return Tn(), null;
    case 10:
      return nu(t.type._context), null;
    case 22:
    case 23:
      return yu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Qr = !1,
  ue = !1,
  Up = typeof WeakSet == "function" ? WeakSet : Set,
  C = null;
function vn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Y(e, t, r);
      }
    else n.current = null;
}
function vi(e, t, n) {
  try {
    n();
  } catch (r) {
    Y(e, t, r);
  }
}
var Rs = !1;
function Hp(e, t) {
  if (((bo = dl), (e = Xa()), Zi(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            u = -1,
            s = -1,
            a = 0,
            d = 0,
            p = e,
            h = null;
          t: for (;;) {
            for (
              var v;
              p !== n || (l !== 0 && p.nodeType !== 3) || (u = i + l),
                p !== o || (r !== 0 && p.nodeType !== 3) || (s = i + r),
                p.nodeType === 3 && (i += p.nodeValue.length),
                (v = p.firstChild) !== null;

            )
              (h = p), (p = v);
            for (;;) {
              if (p === e) break t;
              if (
                (h === n && ++a === l && (u = i),
                h === o && ++d === r && (s = i),
                (v = p.nextSibling) !== null)
              )
                break;
              (p = h), (h = p.parentNode);
            }
            p = v;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ei = { focusedElem: e, selectionRange: n }, dl = !1, C = t; C !== null; )
    if (((t = C), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (C = e);
    else
      for (; C !== null; ) {
        t = C;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var E = y.memoizedProps,
                    T = y.memoizedState,
                    f = t.stateNode,
                    c = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? E : Ie(t.type, E),
                      T,
                    );
                  f.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(S(163));
            }
        } catch (w) {
          Y(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (C = e);
          break;
        }
        C = t.return;
      }
  return (y = Rs), (Rs = !1), y;
}
function tr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && vi(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Vl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function gi(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Wc(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Wc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ze], delete t[vr], delete t[ri], delete t[xp], delete t[Cp])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Qc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Os(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Qc(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function yi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = hl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (yi(e, t, n), e = e.sibling; e !== null; ) yi(e, t, n), (e = e.sibling);
}
function wi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (wi(e, t, n), e = e.sibling; e !== null; ) wi(e, t, n), (e = e.sibling);
}
var ne = null,
  Ae = !1;
function pt(e, t, n) {
  for (n = n.child; n !== null; ) Kc(e, t, n), (n = n.sibling);
}
function Kc(e, t, n) {
  if (Je && typeof Je.onCommitFiberUnmount == "function")
    try {
      Je.onCommitFiberUnmount(Ml, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ue || vn(n, t);
    case 6:
      var r = ne,
        l = Ae;
      (ne = null),
        pt(e, t, n),
        (ne = r),
        (Ae = l),
        ne !== null &&
          (Ae
            ? ((e = ne),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ne.removeChild(n.stateNode));
      break;
    case 18:
      ne !== null &&
        (Ae
          ? ((e = ne),
            (n = n.stateNode),
            e.nodeType === 8
              ? wo(e.parentNode, n)
              : e.nodeType === 1 && wo(e, n),
            fr(e))
          : wo(ne, n.stateNode));
      break;
    case 4:
      (r = ne),
        (l = Ae),
        (ne = n.stateNode.containerInfo),
        (Ae = !0),
        pt(e, t, n),
        (ne = r),
        (Ae = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ue &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && vi(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      pt(e, t, n);
      break;
    case 1:
      if (
        !ue &&
        (vn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          Y(n, t, u);
        }
      pt(e, t, n);
      break;
    case 21:
      pt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ue = (r = ue) || n.memoizedState !== null), pt(e, t, n), (ue = r))
        : pt(e, t, n);
      break;
    default:
      pt(e, t, n);
  }
}
function Ms(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Up()),
      t.forEach(function (r) {
        var l = Zp.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function De(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (ne = u.stateNode), (Ae = !1);
              break e;
            case 3:
              (ne = u.stateNode.containerInfo), (Ae = !0);
              break e;
            case 4:
              (ne = u.stateNode.containerInfo), (Ae = !0);
              break e;
          }
          u = u.return;
        }
        if (ne === null) throw Error(S(160));
        Kc(o, i, l), (ne = null), (Ae = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (a) {
        Y(l, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Yc(t, e), (t = t.sibling);
}
function Yc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((De(t, e), Xe(e), r & 4)) {
        try {
          tr(3, e, e.return), Vl(3, e);
        } catch (E) {
          Y(e, e.return, E);
        }
        try {
          tr(5, e, e.return);
        } catch (E) {
          Y(e, e.return, E);
        }
      }
      break;
    case 1:
      De(t, e), Xe(e), r & 512 && n !== null && vn(n, n.return);
      break;
    case 5:
      if (
        (De(t, e),
        Xe(e),
        r & 512 && n !== null && vn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          ur(l, "");
        } catch (E) {
          Y(e, e.return, E);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && o.type === "radio" && o.name != null && ha(l, o),
              Bo(u, i);
            var a = Bo(u, o);
            for (i = 0; i < s.length; i += 2) {
              var d = s[i],
                p = s[i + 1];
              d === "style"
                ? Ea(l, p)
                : d === "dangerouslySetInnerHTML"
                  ? ya(l, p)
                  : d === "children"
                    ? ur(l, p)
                    : Di(l, d, p, a);
            }
            switch (u) {
              case "input":
                Io(l, o);
                break;
              case "textarea":
                va(l, o);
                break;
              case "select":
                var h = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var v = o.value;
                v != null
                  ? yn(l, !!o.multiple, v, !1)
                  : h !== !!o.multiple &&
                    (o.defaultValue != null
                      ? yn(l, !!o.multiple, o.defaultValue, !0)
                      : yn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[vr] = o;
          } catch (E) {
            Y(e, e.return, E);
          }
      }
      break;
    case 6:
      if ((De(t, e), Xe(e), r & 4)) {
        if (e.stateNode === null) throw Error(S(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (E) {
          Y(e, e.return, E);
        }
      }
      break;
    case 3:
      if (
        (De(t, e), Xe(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          fr(t.containerInfo);
        } catch (E) {
          Y(e, e.return, E);
        }
      break;
    case 4:
      De(t, e), Xe(e);
      break;
    case 13:
      De(t, e),
        Xe(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (vu = X())),
        r & 4 && Ms(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ue = (a = ue) || d), De(t, e), (ue = a)) : De(t, e),
        Xe(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !d && e.mode & 1)
        )
          for (C = e, d = e.child; d !== null; ) {
            for (p = C = d; C !== null; ) {
              switch (((h = C), (v = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  tr(4, h, h.return);
                  break;
                case 1:
                  vn(h, h.return);
                  var y = h.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (E) {
                      Y(r, n, E);
                    }
                  }
                  break;
                case 5:
                  vn(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    js(p);
                    continue;
                  }
              }
              v !== null ? ((v.return = h), (C = v)) : js(p);
            }
            d = d.sibling;
          }
        e: for (d = null, p = e; ; ) {
          if (p.tag === 5) {
            if (d === null) {
              d = p;
              try {
                (l = p.stateNode),
                  a
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((u = p.stateNode),
                      (s = p.memoizedProps.style),
                      (i =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = wa("display", i)));
              } catch (E) {
                Y(e, e.return, E);
              }
            }
          } else if (p.tag === 6) {
            if (d === null)
              try {
                p.stateNode.nodeValue = a ? "" : p.memoizedProps;
              } catch (E) {
                Y(e, e.return, E);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            d === p && (d = null), (p = p.return);
          }
          d === p && (d = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      De(t, e), Xe(e), r & 4 && Ms(e);
      break;
    case 21:
      break;
    default:
      De(t, e), Xe(e);
  }
}
function Xe(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Qc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(S(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (ur(l, ""), (r.flags &= -33));
          var o = Os(e);
          wi(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = Os(e);
          yi(e, u, i);
          break;
        default:
          throw Error(S(161));
      }
    } catch (s) {
      Y(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Vp(e, t, n) {
  (C = e), Xc(e);
}
function Xc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; C !== null; ) {
    var l = C,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Qr;
      if (!i) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || ue;
        u = Qr;
        var a = ue;
        if (((Qr = i), (ue = s) && !a))
          for (C = l; C !== null; )
            (i = C),
              (s = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Ds(l)
                : s !== null
                  ? ((s.return = i), (C = s))
                  : Ds(l);
        for (; o !== null; ) (C = o), Xc(o), (o = o.sibling);
        (C = l), (Qr = u), (ue = a);
      }
      zs(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (C = o)) : zs(e);
  }
}
function zs(e) {
  for (; C !== null; ) {
    var t = C;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ue || Vl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ue)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ie(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var o = t.updateQueue;
              o !== null && ws(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                ws(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var a = t.alternate;
                if (a !== null) {
                  var d = a.memoizedState;
                  if (d !== null) {
                    var p = d.dehydrated;
                    p !== null && fr(p);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(S(163));
          }
        ue || (t.flags & 512 && gi(t));
      } catch (h) {
        Y(t, t.return, h);
      }
    }
    if (t === e) {
      C = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (C = n);
      break;
    }
    C = t.return;
  }
}
function js(e) {
  for (; C !== null; ) {
    var t = C;
    if (t === e) {
      C = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (C = n);
      break;
    }
    C = t.return;
  }
}
function Ds(e) {
  for (; C !== null; ) {
    var t = C;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Vl(4, t);
          } catch (s) {
            Y(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              Y(t, l, s);
            }
          }
          var o = t.return;
          try {
            gi(t);
          } catch (s) {
            Y(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            gi(t);
          } catch (s) {
            Y(t, i, s);
          }
      }
    } catch (s) {
      Y(t, t.return, s);
    }
    if (t === e) {
      C = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (C = u);
      break;
    }
    C = t.return;
  }
}
var Bp = Math.ceil,
  Pl = ft.ReactCurrentDispatcher,
  mu = ft.ReactCurrentOwner,
  Fe = ft.ReactCurrentBatchConfig,
  j = 0,
  te = null,
  Z = null,
  re = 0,
  ke = 0,
  gn = Mt(0),
  q = 0,
  kr = null,
  Jt = 0,
  Bl = 0,
  hu = 0,
  nr = null,
  me = null,
  vu = 0,
  $n = 1 / 0,
  et = null,
  _l = !1,
  Ei = null,
  _t = null,
  Kr = !1,
  Et = null,
  Tl = 0,
  rr = 0,
  Si = null,
  ll = -1,
  ol = 0;
function ce() {
  return j & 6 ? X() : ll !== -1 ? ll : (ll = X());
}
function Tt(e) {
  return e.mode & 1
    ? j & 2 && re !== 0
      ? re & -re
      : Pp.transition !== null
        ? (ol === 0 && (ol = Ra()), ol)
        : ((e = I),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Aa(e.type))),
          e)
    : 1;
}
function Be(e, t, n, r) {
  if (50 < rr) throw ((rr = 0), (Si = null), Error(S(185)));
  Cr(e, n, r),
    (!(j & 2) || e !== te) &&
      (e === te && (!(j & 2) && (Bl |= n), q === 4 && gt(e, re)),
      ye(e, r),
      n === 1 && j === 0 && !(t.mode & 1) && (($n = X() + 500), Al && zt()));
}
function ye(e, t) {
  var n = e.callbackNode;
  Pd(e, t);
  var r = fl(e, e === te ? re : 0);
  if (r === 0)
    n !== null && Ku(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ku(n), t === 1))
      e.tag === 0 ? Np(Is.bind(null, e)) : lc(Is.bind(null, e)),
        Sp(function () {
          !(j & 6) && zt();
        }),
        (n = null);
    else {
      switch (Oa(r)) {
        case 1:
          n = Vi;
          break;
        case 4:
          n = $a;
          break;
        case 16:
          n = cl;
          break;
        case 536870912:
          n = Fa;
          break;
        default:
          n = cl;
      }
      n = nf(n, Gc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Gc(e, t) {
  if (((ll = -1), (ol = 0), j & 6)) throw Error(S(327));
  var n = e.callbackNode;
  if (xn() && e.callbackNode !== n) return null;
  var r = fl(e, e === te ? re : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ll(e, r);
  else {
    t = r;
    var l = j;
    j |= 2;
    var o = Jc();
    (te !== e || re !== t) && ((et = null), ($n = X() + 500), Qt(e, t));
    do
      try {
        Kp();
        break;
      } catch (u) {
        Zc(e, u);
      }
    while (!0);
    tu(),
      (Pl.current = o),
      (j = l),
      Z !== null ? (t = 0) : ((te = null), (re = 0), (t = q));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Xo(e)), l !== 0 && ((r = l), (t = ki(e, l)))), t === 1)
    )
      throw ((n = kr), Qt(e, 0), gt(e, r), ye(e, X()), n);
    if (t === 6) gt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Wp(l) &&
          ((t = Ll(e, r)),
          t === 2 && ((o = Xo(e)), o !== 0 && ((r = o), (t = ki(e, o)))),
          t === 1))
      )
        throw ((n = kr), Qt(e, 0), gt(e, r), ye(e, X()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(S(345));
        case 2:
          It(e, me, et);
          break;
        case 3:
          if (
            (gt(e, r), (r & 130023424) === r && ((t = vu + 500 - X()), 10 < t))
          ) {
            if (fl(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              ce(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = ni(It.bind(null, e, me, et), t);
            break;
          }
          It(e, me, et);
          break;
        case 4:
          if ((gt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Ve(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = X() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * Bp(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ni(It.bind(null, e, me, et), r);
            break;
          }
          It(e, me, et);
          break;
        case 5:
          It(e, me, et);
          break;
        default:
          throw Error(S(329));
      }
    }
  }
  return ye(e, X()), e.callbackNode === n ? Gc.bind(null, e) : null;
}
function ki(e, t) {
  var n = nr;
  return (
    e.current.memoizedState.isDehydrated && (Qt(e, t).flags |= 256),
    (e = Ll(e, t)),
    e !== 2 && ((t = me), (me = n), t !== null && xi(t)),
    e
  );
}
function xi(e) {
  me === null ? (me = e) : me.push.apply(me, e);
}
function Wp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!We(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function gt(e, t) {
  for (
    t &= ~hu,
      t &= ~Bl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ve(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Is(e) {
  if (j & 6) throw Error(S(327));
  xn();
  var t = fl(e, 0);
  if (!(t & 1)) return ye(e, X()), null;
  var n = Ll(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Xo(e);
    r !== 0 && ((t = r), (n = ki(e, r)));
  }
  if (n === 1) throw ((n = kr), Qt(e, 0), gt(e, t), ye(e, X()), n);
  if (n === 6) throw Error(S(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    It(e, me, et),
    ye(e, X()),
    null
  );
}
function gu(e, t) {
  var n = j;
  j |= 1;
  try {
    return e(t);
  } finally {
    (j = n), j === 0 && (($n = X() + 500), Al && zt());
  }
}
function qt(e) {
  Et !== null && Et.tag === 0 && !(j & 6) && xn();
  var t = j;
  j |= 1;
  var n = Fe.transition,
    r = I;
  try {
    if (((Fe.transition = null), (I = 1), e)) return e();
  } finally {
    (I = r), (Fe.transition = n), (j = t), !(j & 6) && zt();
  }
}
function yu() {
  (ke = gn.current), H(gn);
}
function Qt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Ep(n)), Z !== null))
    for (n = Z.return; n !== null; ) {
      var r = n;
      switch ((qi(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && vl();
          break;
        case 3:
          Tn(), H(ve), H(se), uu();
          break;
        case 5:
          iu(r);
          break;
        case 4:
          Tn();
          break;
        case 13:
          H(B);
          break;
        case 19:
          H(B);
          break;
        case 10:
          nu(r.type._context);
          break;
        case 22:
        case 23:
          yu();
      }
      n = n.return;
    }
  if (
    ((te = e),
    (Z = e = Lt(e.current, null)),
    (re = ke = t),
    (q = 0),
    (kr = null),
    (hu = Bl = Jt = 0),
    (me = nr = null),
    Vt !== null)
  ) {
    for (t = 0; t < Vt.length; t++)
      if (((n = Vt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    Vt = null;
  }
  return e;
}
function Zc(e, t) {
  do {
    var n = Z;
    try {
      if ((tu(), (tl.current = Nl), Cl)) {
        for (var r = Q.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Cl = !1;
      }
      if (
        ((Zt = 0),
        (ee = J = Q = null),
        (er = !1),
        (wr = 0),
        (mu.current = null),
        n === null || n.return === null)
      ) {
        (q = 1), (kr = t), (Z = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          u = n,
          s = t;
        if (
          ((t = re),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var a = s,
            d = u,
            p = d.tag;
          if (!(d.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var h = d.alternate;
            h
              ? ((d.updateQueue = h.updateQueue),
                (d.memoizedState = h.memoizedState),
                (d.lanes = h.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var v = Ns(i);
          if (v !== null) {
            (v.flags &= -257),
              Ps(v, i, u, o, t),
              v.mode & 1 && Cs(o, a, t),
              (t = v),
              (s = a);
            var y = t.updateQueue;
            if (y === null) {
              var E = new Set();
              E.add(s), (t.updateQueue = E);
            } else y.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Cs(o, a, t), wu();
              break e;
            }
            s = Error(S(426));
          }
        } else if (V && u.mode & 1) {
          var T = Ns(i);
          if (T !== null) {
            !(T.flags & 65536) && (T.flags |= 256),
              Ps(T, i, u, o, t),
              bi(Ln(s, u));
            break e;
          }
        }
        (o = s = Ln(s, u)),
          q !== 4 && (q = 2),
          nr === null ? (nr = [o]) : nr.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var f = Oc(o, s, t);
              ys(o, f);
              break e;
            case 1:
              u = s;
              var c = o.type,
                m = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (_t === null || !_t.has(m))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var w = Mc(o, u, t);
                ys(o, w);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      bc(n);
    } catch (k) {
      (t = k), Z === n && n !== null && (Z = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Jc() {
  var e = Pl.current;
  return (Pl.current = Nl), e === null ? Nl : e;
}
function wu() {
  (q === 0 || q === 3 || q === 2) && (q = 4),
    te === null || (!(Jt & 268435455) && !(Bl & 268435455)) || gt(te, re);
}
function Ll(e, t) {
  var n = j;
  j |= 2;
  var r = Jc();
  (te !== e || re !== t) && ((et = null), Qt(e, t));
  do
    try {
      Qp();
      break;
    } catch (l) {
      Zc(e, l);
    }
  while (!0);
  if ((tu(), (j = n), (Pl.current = r), Z !== null)) throw Error(S(261));
  return (te = null), (re = 0), q;
}
function Qp() {
  for (; Z !== null; ) qc(Z);
}
function Kp() {
  for (; Z !== null && !gd(); ) qc(Z);
}
function qc(e) {
  var t = tf(e.alternate, e, ke);
  (e.memoizedProps = e.pendingProps),
    t === null ? bc(e) : (Z = t),
    (mu.current = null);
}
function bc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Ap(n, t)), n !== null)) {
        (n.flags &= 32767), (Z = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (q = 6), (Z = null);
        return;
      }
    } else if (((n = Ip(n, t, ke)), n !== null)) {
      Z = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Z = t;
      return;
    }
    Z = t = e;
  } while (t !== null);
  q === 0 && (q = 5);
}
function It(e, t, n) {
  var r = I,
    l = Fe.transition;
  try {
    (Fe.transition = null), (I = 1), Yp(e, t, n, r);
  } finally {
    (Fe.transition = l), (I = r);
  }
  return null;
}
function Yp(e, t, n, r) {
  do xn();
  while (Et !== null);
  if (j & 6) throw Error(S(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(S(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (_d(e, o),
    e === te && ((Z = te = null), (re = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Kr ||
      ((Kr = !0),
      nf(cl, function () {
        return xn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Fe.transition), (Fe.transition = null);
    var i = I;
    I = 1;
    var u = j;
    (j |= 4),
      (mu.current = null),
      Hp(e, n),
      Yc(n, e),
      pp(ei),
      (dl = !!bo),
      (ei = bo = null),
      (e.current = n),
      Vp(n),
      yd(),
      (j = u),
      (I = i),
      (Fe.transition = o);
  } else e.current = n;
  if (
    (Kr && ((Kr = !1), (Et = e), (Tl = l)),
    (o = e.pendingLanes),
    o === 0 && (_t = null),
    Sd(n.stateNode),
    ye(e, X()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (_l) throw ((_l = !1), (e = Ei), (Ei = null), e);
  return (
    Tl & 1 && e.tag !== 0 && xn(),
    (o = e.pendingLanes),
    o & 1 ? (e === Si ? rr++ : ((rr = 0), (Si = e))) : (rr = 0),
    zt(),
    null
  );
}
function xn() {
  if (Et !== null) {
    var e = Oa(Tl),
      t = Fe.transition,
      n = I;
    try {
      if (((Fe.transition = null), (I = 16 > e ? 16 : e), Et === null))
        var r = !1;
      else {
        if (((e = Et), (Et = null), (Tl = 0), j & 6)) throw Error(S(331));
        var l = j;
        for (j |= 4, C = e.current; C !== null; ) {
          var o = C,
            i = o.child;
          if (C.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for (C = a; C !== null; ) {
                  var d = C;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      tr(8, d, o);
                  }
                  var p = d.child;
                  if (p !== null) (p.return = d), (C = p);
                  else
                    for (; C !== null; ) {
                      d = C;
                      var h = d.sibling,
                        v = d.return;
                      if ((Wc(d), d === a)) {
                        C = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = v), (C = h);
                        break;
                      }
                      C = v;
                    }
                }
              }
              var y = o.alternate;
              if (y !== null) {
                var E = y.child;
                if (E !== null) {
                  y.child = null;
                  do {
                    var T = E.sibling;
                    (E.sibling = null), (E = T);
                  } while (E !== null);
                }
              }
              C = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (C = i);
          else
            e: for (; C !== null; ) {
              if (((o = C), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    tr(9, o, o.return);
                }
              var f = o.sibling;
              if (f !== null) {
                (f.return = o.return), (C = f);
                break e;
              }
              C = o.return;
            }
        }
        var c = e.current;
        for (C = c; C !== null; ) {
          i = C;
          var m = i.child;
          if (i.subtreeFlags & 2064 && m !== null) (m.return = i), (C = m);
          else
            e: for (i = c; C !== null; ) {
              if (((u = C), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Vl(9, u);
                  }
                } catch (k) {
                  Y(u, u.return, k);
                }
              if (u === i) {
                C = null;
                break e;
              }
              var w = u.sibling;
              if (w !== null) {
                (w.return = u.return), (C = w);
                break e;
              }
              C = u.return;
            }
        }
        if (
          ((j = l), zt(), Je && typeof Je.onPostCommitFiberRoot == "function")
        )
          try {
            Je.onPostCommitFiberRoot(Ml, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (I = n), (Fe.transition = t);
    }
  }
  return !1;
}
function As(e, t, n) {
  (t = Ln(n, t)),
    (t = Oc(e, t, 1)),
    (e = Pt(e, t, 1)),
    (t = ce()),
    e !== null && (Cr(e, 1, t), ye(e, t));
}
function Y(e, t, n) {
  if (e.tag === 3) As(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        As(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (_t === null || !_t.has(r)))
        ) {
          (e = Ln(n, e)),
            (e = Mc(t, e, 1)),
            (t = Pt(t, e, 1)),
            (e = ce()),
            t !== null && (Cr(t, 1, e), ye(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Xp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ce()),
    (e.pingedLanes |= e.suspendedLanes & n),
    te === e &&
      (re & n) === n &&
      (q === 4 || (q === 3 && (re & 130023424) === re && 500 > X() - vu)
        ? Qt(e, 0)
        : (hu |= n)),
    ye(e, t);
}
function ef(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = jr), (jr <<= 1), !(jr & 130023424) && (jr = 4194304))
      : (t = 1));
  var n = ce();
  (e = at(e, t)), e !== null && (Cr(e, t, n), ye(e, n));
}
function Gp(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), ef(e, n);
}
function Zp(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(S(314));
  }
  r !== null && r.delete(t), ef(e, n);
}
var tf;
tf = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ve.current) he = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (he = !1), Dp(e, t, n);
      he = !!(e.flags & 131072);
    }
  else (he = !1), V && t.flags & 1048576 && oc(t, wl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      rl(e, t), (e = t.pendingProps);
      var l = Nn(t, se.current);
      kn(t, n), (l = au(null, t, r, e, l, n));
      var o = cu();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ge(r) ? ((o = !0), gl(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            lu(t),
            (l.updater = Hl),
            (t.stateNode = l),
            (l._reactInternals = t),
            ai(t, r, e, n),
            (t = di(null, t, r, !0, o, n)))
          : ((t.tag = 0), V && o && Ji(t), ae(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (rl(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = qp(r)),
          (e = Ie(r, e)),
          l)
        ) {
          case 0:
            t = fi(null, t, r, e, n);
            break e;
          case 1:
            t = Ls(null, t, r, e, n);
            break e;
          case 11:
            t = _s(null, t, r, e, n);
            break e;
          case 14:
            t = Ts(null, t, r, Ie(r.type, e), n);
            break e;
        }
        throw Error(S(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ie(r, l)),
        fi(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ie(r, l)),
        Ls(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Ic(t), e === null)) throw Error(S(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          fc(e, t),
          kl(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = Ln(Error(S(423)), t)), (t = $s(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = Ln(Error(S(424)), t)), (t = $s(e, t, r, n, l));
            break e;
          } else
            for (
              xe = Nt(t.stateNode.containerInfo.firstChild),
                Ce = t,
                V = !0,
                Ue = null,
                n = ac(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Pn(), r === l)) {
            t = ct(e, t, n);
            break e;
          }
          ae(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        dc(t),
        e === null && ii(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        ti(r, l) ? (i = null) : o !== null && ti(r, o) && (t.flags |= 32),
        Dc(e, t),
        ae(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && ii(t), null;
    case 13:
      return Ac(e, t, n);
    case 4:
      return (
        ou(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = _n(t, null, r, n)) : ae(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ie(r, l)),
        _s(e, t, r, l, n)
      );
    case 7:
      return ae(e, t, t.pendingProps, n), t.child;
    case 8:
      return ae(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ae(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          A(El, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (We(o.value, i)) {
            if (o.children === l.children && !ve.current) {
              t = ct(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      (s = ot(-1, n & -n)), (s.tag = 2);
                      var a = o.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var d = a.pending;
                        d === null
                          ? (s.next = s)
                          : ((s.next = d.next), (d.next = s)),
                          (a.pending = s);
                      }
                    }
                    (o.lanes |= n),
                      (s = o.alternate),
                      s !== null && (s.lanes |= n),
                      ui(o.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(S(341));
                (i.lanes |= n),
                  (u = i.alternate),
                  u !== null && (u.lanes |= n),
                  ui(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        ae(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        kn(t, n),
        (l = Re(l)),
        (r = r(l)),
        (t.flags |= 1),
        ae(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Ie(r, t.pendingProps)),
        (l = Ie(r.type, l)),
        Ts(e, t, r, l, n)
      );
    case 15:
      return zc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ie(r, l)),
        rl(e, t),
        (t.tag = 1),
        ge(r) ? ((e = !0), gl(t)) : (e = !1),
        kn(t, n),
        Rc(t, r, l),
        ai(t, r, l, n),
        di(null, t, r, !0, e, n)
      );
    case 19:
      return Uc(e, t, n);
    case 22:
      return jc(e, t, n);
  }
  throw Error(S(156, t.tag));
};
function nf(e, t) {
  return La(e, t);
}
function Jp(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function $e(e, t, n, r) {
  return new Jp(e, t, n, r);
}
function Eu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function qp(e) {
  if (typeof e == "function") return Eu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ai)) return 11;
    if (e === Ui) return 14;
  }
  return 2;
}
function Lt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = $e(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function il(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) Eu(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case un:
        return Kt(n.children, l, o, t);
      case Ii:
        (i = 8), (l |= 8);
        break;
      case Oo:
        return (
          (e = $e(12, n, t, l | 2)), (e.elementType = Oo), (e.lanes = o), e
        );
      case Mo:
        return (e = $e(13, n, t, l)), (e.elementType = Mo), (e.lanes = o), e;
      case zo:
        return (e = $e(19, n, t, l)), (e.elementType = zo), (e.lanes = o), e;
      case da:
        return Wl(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case ca:
              i = 10;
              break e;
            case fa:
              i = 9;
              break e;
            case Ai:
              i = 11;
              break e;
            case Ui:
              i = 14;
              break e;
            case mt:
              (i = 16), (r = null);
              break e;
          }
        throw Error(S(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = $e(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Kt(e, t, n, r) {
  return (e = $e(7, e, r, t)), (e.lanes = n), e;
}
function Wl(e, t, n, r) {
  return (
    (e = $e(22, e, r, t)),
    (e.elementType = da),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function _o(e, t, n) {
  return (e = $e(6, e, null, t)), (e.lanes = n), e;
}
function To(e, t, n) {
  return (
    (t = $e(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function bp(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = uo(0)),
    (this.expirationTimes = uo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = uo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Su(e, t, n, r, l, o, i, u, s) {
  return (
    (e = new bp(e, t, n, u, s)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = $e(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    lu(o),
    e
  );
}
function em(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: on,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function rf(e) {
  if (!e) return Ft;
  e = e._reactInternals;
  e: {
    if (en(e) !== e || e.tag !== 1) throw Error(S(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ge(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(S(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ge(n)) return rc(e, n, t);
  }
  return t;
}
function lf(e, t, n, r, l, o, i, u, s) {
  return (
    (e = Su(n, r, !0, e, l, o, i, u, s)),
    (e.context = rf(null)),
    (n = e.current),
    (r = ce()),
    (l = Tt(n)),
    (o = ot(r, l)),
    (o.callback = t ?? null),
    Pt(n, o, l),
    (e.current.lanes = l),
    Cr(e, l, r),
    ye(e, r),
    e
  );
}
function Ql(e, t, n, r) {
  var l = t.current,
    o = ce(),
    i = Tt(l);
  return (
    (n = rf(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = ot(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Pt(l, t, i)),
    e !== null && (Be(e, l, i, o), el(e, l, i)),
    i
  );
}
function $l(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Us(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ku(e, t) {
  Us(e, t), (e = e.alternate) && Us(e, t);
}
function tm() {
  return null;
}
var of =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function xu(e) {
  this._internalRoot = e;
}
Kl.prototype.render = xu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(S(409));
  Ql(e, t, null, null);
};
Kl.prototype.unmount = xu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    qt(function () {
      Ql(null, e, null, null);
    }),
      (t[st] = null);
  }
};
function Kl(e) {
  this._internalRoot = e;
}
Kl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = ja();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < vt.length && t !== 0 && t < vt[n].priority; n++);
    vt.splice(n, 0, e), n === 0 && Ia(e);
  }
};
function Cu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Yl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Hs() {}
function nm(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var a = $l(i);
        o.call(a);
      };
    }
    var i = lf(t, r, e, 0, null, !1, !1, "", Hs);
    return (
      (e._reactRootContainer = i),
      (e[st] = i.current),
      mr(e.nodeType === 8 ? e.parentNode : e),
      qt(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var a = $l(s);
      u.call(a);
    };
  }
  var s = Su(e, 0, !1, null, null, !1, !1, "", Hs);
  return (
    (e._reactRootContainer = s),
    (e[st] = s.current),
    mr(e.nodeType === 8 ? e.parentNode : e),
    qt(function () {
      Ql(t, s, n, r);
    }),
    s
  );
}
function Xl(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = $l(i);
        u.call(s);
      };
    }
    Ql(t, i, e, l);
  } else i = nm(n, t, e, l, r);
  return $l(i);
}
Ma = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Kn(t.pendingLanes);
        n !== 0 &&
          (Bi(t, n | 1), ye(t, X()), !(j & 6) && (($n = X() + 500), zt()));
      }
      break;
    case 13:
      qt(function () {
        var r = at(e, 1);
        if (r !== null) {
          var l = ce();
          Be(r, e, 1, l);
        }
      }),
        ku(e, 1);
  }
};
Wi = function (e) {
  if (e.tag === 13) {
    var t = at(e, 134217728);
    if (t !== null) {
      var n = ce();
      Be(t, e, 134217728, n);
    }
    ku(e, 134217728);
  }
};
za = function (e) {
  if (e.tag === 13) {
    var t = Tt(e),
      n = at(e, t);
    if (n !== null) {
      var r = ce();
      Be(n, e, t, r);
    }
    ku(e, t);
  }
};
ja = function () {
  return I;
};
Da = function (e, t) {
  var n = I;
  try {
    return (I = e), t();
  } finally {
    I = n;
  }
};
Qo = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Io(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Il(r);
            if (!l) throw Error(S(90));
            ma(r), Io(r, l);
          }
        }
      }
      break;
    case "textarea":
      va(e, n);
      break;
    case "select":
      (t = n.value), t != null && yn(e, !!n.multiple, t, !1);
  }
};
xa = gu;
Ca = qt;
var rm = { usingClientEntryPoint: !1, Events: [Pr, fn, Il, Sa, ka, gu] },
  Vn = {
    findFiberByHostInstance: Ht,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  lm = {
    bundleType: Vn.bundleType,
    version: Vn.version,
    rendererPackageName: Vn.rendererPackageName,
    rendererConfig: Vn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: ft.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = _a(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Vn.findFiberByHostInstance || tm,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Yr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Yr.isDisabled && Yr.supportsFiber)
    try {
      (Ml = Yr.inject(lm)), (Je = Yr);
    } catch {}
}
Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = rm;
Pe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Cu(t)) throw Error(S(200));
  return em(e, t, null, n);
};
Pe.createRoot = function (e, t) {
  if (!Cu(e)) throw Error(S(299));
  var n = !1,
    r = "",
    l = of;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Su(e, 1, !1, null, null, n, !1, r, l)),
    (e[st] = t.current),
    mr(e.nodeType === 8 ? e.parentNode : e),
    new xu(t)
  );
};
Pe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(S(188))
      : ((e = Object.keys(e).join(",")), Error(S(268, e)));
  return (e = _a(t)), (e = e === null ? null : e.stateNode), e;
};
Pe.flushSync = function (e) {
  return qt(e);
};
Pe.hydrate = function (e, t, n) {
  if (!Yl(t)) throw Error(S(200));
  return Xl(null, e, t, !0, n);
};
Pe.hydrateRoot = function (e, t, n) {
  if (!Cu(e)) throw Error(S(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = of;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = lf(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[st] = t.current),
    mr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Kl(t);
};
Pe.render = function (e, t, n) {
  if (!Yl(t)) throw Error(S(200));
  return Xl(null, e, t, !1, n);
};
Pe.unmountComponentAtNode = function (e) {
  if (!Yl(e)) throw Error(S(40));
  return e._reactRootContainer
    ? (qt(function () {
        Xl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[st] = null);
        });
      }),
      !0)
    : !1;
};
Pe.unstable_batchedUpdates = gu;
Pe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Yl(n)) throw Error(S(200));
  if (e == null || e._reactInternals === void 0) throw Error(S(38));
  return Xl(e, t, n, !1, r);
};
Pe.version = "18.3.1-next-f1338f8080-20240426";
function uf() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(uf);
    } catch (e) {
      console.error(e);
    }
}
uf(), (ia.exports = Pe);
var Nu = ia.exports,
  Vs = Nu;
(Fo.createRoot = Vs.createRoot), (Fo.hydrateRoot = Vs.hydrateRoot);
var om = Object.defineProperty,
  im = (e, t, n) =>
    t in e
      ? om(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Lo = (e, t, n) => (im(e, typeof t != "symbol" ? t + "" : t, n), n);
let um = class {
    constructor() {
      Lo(this, "current", this.detect()),
        Lo(this, "handoffState", "pending"),
        Lo(this, "currentId", 0);
    }
    set(t) {
      this.current !== t &&
        ((this.handoffState = "pending"),
        (this.currentId = 0),
        (this.current = t));
    }
    reset() {
      this.set(this.detect());
    }
    nextId() {
      return ++this.currentId;
    }
    get isServer() {
      return this.current === "server";
    }
    get isClient() {
      return this.current === "client";
    }
    detect() {
      return typeof window > "u" || typeof document > "u" ? "server" : "client";
    }
    handoff() {
      this.handoffState === "pending" && (this.handoffState = "complete");
    }
    get isHandoffComplete() {
      return this.handoffState === "complete";
    }
  },
  Yt = new um();
function Pu(e) {
  return Yt.isServer
    ? null
    : e instanceof Node
      ? e.ownerDocument
      : e != null && e.hasOwnProperty("current") && e.current instanceof Node
        ? e.current.ownerDocument
        : document;
}
function Gl(e) {
  typeof queueMicrotask == "function"
    ? queueMicrotask(e)
    : Promise.resolve()
        .then(e)
        .catch((t) =>
          setTimeout(() => {
            throw t;
          }),
        );
}
function jt() {
  let e = [],
    t = {
      addEventListener(n, r, l, o) {
        return (
          n.addEventListener(r, l, o),
          t.add(() => n.removeEventListener(r, l, o))
        );
      },
      requestAnimationFrame(...n) {
        let r = requestAnimationFrame(...n);
        return t.add(() => cancelAnimationFrame(r));
      },
      nextFrame(...n) {
        return t.requestAnimationFrame(() => t.requestAnimationFrame(...n));
      },
      setTimeout(...n) {
        let r = setTimeout(...n);
        return t.add(() => clearTimeout(r));
      },
      microTask(...n) {
        let r = { current: !0 };
        return (
          Gl(() => {
            r.current && n[0]();
          }),
          t.add(() => {
            r.current = !1;
          })
        );
      },
      style(n, r, l) {
        let o = n.style.getPropertyValue(r);
        return (
          Object.assign(n.style, { [r]: l }),
          this.add(() => {
            Object.assign(n.style, { [r]: o });
          })
        );
      },
      group(n) {
        let r = jt();
        return n(r), this.add(() => r.dispose());
      },
      add(n) {
        return (
          e.includes(n) || e.push(n),
          () => {
            let r = e.indexOf(n);
            if (r >= 0) for (let l of e.splice(r, 1)) l();
          }
        );
      },
      dispose() {
        for (let n of e.splice(0)) n();
      },
    };
  return t;
}
function _u() {
  let [e] = g.useState(jt);
  return g.useEffect(() => () => e.dispose(), [e]), e;
}
let fe = (e, t) => {
  Yt.isServer ? g.useEffect(e, t) : g.useLayoutEffect(e, t);
};
function tn(e) {
  let t = g.useRef(e);
  return (
    fe(() => {
      t.current = e;
    }, [e]),
    t
  );
}
let W = function (e) {
    let t = tn(e);
    return R.useCallback((...n) => t.current(...n), [t]);
  },
  sm = g.createContext(void 0);
function am() {
  return g.useContext(sm);
}
function Ci(...e) {
  return Array.from(
    new Set(e.flatMap((t) => (typeof t == "string" ? t.split(" ") : []))),
  )
    .filter(Boolean)
    .join(" ");
}
function Rt(e, t, ...n) {
  if (e in t) {
    let l = t[e];
    return typeof l == "function" ? l(...n) : l;
  }
  let r = new Error(
    `Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(
      t,
    )
      .map((l) => `"${l}"`)
      .join(", ")}.`,
  );
  throw (Error.captureStackTrace && Error.captureStackTrace(r, Rt), r);
}
var Fl = ((e) => (
    (e[(e.None = 0)] = "None"),
    (e[(e.RenderStrategy = 1)] = "RenderStrategy"),
    (e[(e.Static = 2)] = "Static"),
    e
  ))(Fl || {}),
  St = ((e) => (
    (e[(e.Unmount = 0)] = "Unmount"), (e[(e.Hidden = 1)] = "Hidden"), e
  ))(St || {});
function Me({
  ourProps: e,
  theirProps: t,
  slot: n,
  defaultTag: r,
  features: l,
  visible: o = !0,
  name: i,
  mergeRefs: u,
}) {
  u = u ?? cm;
  let s = sf(t, e);
  if (o) return Xr(s, n, r, i, u);
  let a = l ?? 0;
  if (a & 2) {
    let { static: d = !1, ...p } = s;
    if (d) return Xr(p, n, r, i, u);
  }
  if (a & 1) {
    let { unmount: d = !0, ...p } = s;
    return Rt(d ? 0 : 1, {
      0() {
        return null;
      },
      1() {
        return Xr({ ...p, hidden: !0, style: { display: "none" } }, n, r, i, u);
      },
    });
  }
  return Xr(s, n, r, i, u);
}
function Xr(e, t = {}, n, r, l) {
  let {
      as: o = n,
      children: i,
      refName: u = "ref",
      ...s
    } = $o(e, ["unmount", "static"]),
    a = e.ref !== void 0 ? { [u]: e.ref } : {},
    d = typeof i == "function" ? i(t) : i;
  "className" in s &&
    s.className &&
    typeof s.className == "function" &&
    (s.className = s.className(t)),
    s["aria-labelledby"] &&
      s["aria-labelledby"] === s.id &&
      (s["aria-labelledby"] = void 0);
  let p = {};
  if (t) {
    let h = !1,
      v = [];
    for (let [y, E] of Object.entries(t))
      typeof E == "boolean" && (h = !0),
        E === !0 && v.push(y.replace(/([A-Z])/g, (T) => `-${T.toLowerCase()}`));
    if (h) {
      p["data-headlessui-state"] = v.join(" ");
      for (let y of v) p[`data-${y}`] = "";
    }
  }
  if (
    o === g.Fragment &&
    (Object.keys(At(s)).length > 0 || Object.keys(At(p)).length > 0)
  )
    if (!g.isValidElement(d) || (Array.isArray(d) && d.length > 1)) {
      if (Object.keys(At(s)).length > 0)
        throw new Error(
          [
            'Passing props on "Fragment"!',
            "",
            `The current component <${r} /> is rendering a "Fragment".`,
            "However we need to passthrough the following props:",
            Object.keys(At(s))
              .concat(Object.keys(At(p)))
              .map((h) => `  - ${h}`).join(`
`),
            "",
            "You can apply a few solutions:",
            [
              'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
              "Render a single element as the child so that we can forward the props onto that element.",
            ].map((h) => `  - ${h}`).join(`
`),
          ].join(`
`),
        );
    } else {
      let h = d.props,
        v = h == null ? void 0 : h.className,
        y =
          typeof v == "function"
            ? (...f) => Ci(v(...f), s.className)
            : Ci(v, s.className),
        E = y ? { className: y } : {},
        T = sf(d.props, At($o(s, ["ref"])));
      for (let f in p) f in T && delete p[f];
      return g.cloneElement(
        d,
        Object.assign({}, T, p, a, { ref: l(d.ref, a.ref) }, E),
      );
    }
  return g.createElement(
    o,
    Object.assign(
      {},
      $o(s, ["ref"]),
      o !== g.Fragment && a,
      o !== g.Fragment && p,
    ),
    d,
  );
}
function cm(...e) {
  return e.every((t) => t == null)
    ? void 0
    : (t) => {
        for (let n of e)
          n != null && (typeof n == "function" ? n(t) : (n.current = t));
      };
}
function sf(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let t = {},
    n = {};
  for (let r of e)
    for (let l in r)
      l.startsWith("on") && typeof r[l] == "function"
        ? (n[l] != null || (n[l] = []), n[l].push(r[l]))
        : (t[l] = r[l]);
  if (t.disabled || t["aria-disabled"])
    for (let r in n)
      /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(r) &&
        (n[r] = [
          (l) => {
            var o;
            return (o = l == null ? void 0 : l.preventDefault) == null
              ? void 0
              : o.call(l);
          },
        ]);
  for (let r in n)
    Object.assign(t, {
      [r](l, ...o) {
        let i = n[r];
        for (let u of i) {
          if (
            (l instanceof Event ||
              (l == null ? void 0 : l.nativeEvent) instanceof Event) &&
            l.defaultPrevented
          )
            return;
          u(l, ...o);
        }
      },
    });
  return t;
}
function we(e) {
  var t;
  return Object.assign(g.forwardRef(e), {
    displayName: (t = e.displayName) != null ? t : e.name,
  });
}
function At(e) {
  let t = Object.assign({}, e);
  for (let n in t) t[n] === void 0 && delete t[n];
  return t;
}
function $o(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t) r in n && delete n[r];
  return n;
}
let fm = "div";
var Rl = ((e) => (
  (e[(e.None = 1)] = "None"),
  (e[(e.Focusable = 2)] = "Focusable"),
  (e[(e.Hidden = 4)] = "Hidden"),
  e
))(Rl || {});
function dm(e, t) {
  var n;
  let { features: r = 1, ...l } = e,
    o = {
      ref: t,
      "aria-hidden":
        (r & 2) === 2 ? !0 : (n = l["aria-hidden"]) != null ? n : void 0,
      hidden: (r & 4) === 4 ? !0 : void 0,
      style: {
        position: "fixed",
        top: 1,
        left: 1,
        width: 1,
        height: 0,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        borderWidth: "0",
        ...((r & 4) === 4 && (r & 2) !== 2 && { display: "none" }),
      },
    };
  return Me({
    ourProps: o,
    theirProps: l,
    slot: {},
    defaultTag: fm,
    name: "Hidden",
  });
}
let Ni = we(dm),
  pm = g.createContext(null);
function mm({ children: e }) {
  let t = g.useContext(pm);
  if (!t) return R.createElement(R.Fragment, null, e);
  let { target: n } = t;
  return n ? Nu.createPortal(R.createElement(R.Fragment, null, e), n) : null;
}
let af = Symbol();
function hm(e, t = !0) {
  return Object.assign(e, { [af]: t });
}
function be(...e) {
  let t = g.useRef(e);
  g.useEffect(() => {
    t.current = e;
  }, [e]);
  let n = W((r) => {
    for (let l of t.current)
      l != null && (typeof l == "function" ? l(r) : (l.current = r));
  });
  return e.every((r) => r == null || (r == null ? void 0 : r[af])) ? void 0 : n;
}
let Tu = g.createContext(null);
Tu.displayName = "DescriptionContext";
function cf() {
  let e = g.useContext(Tu);
  if (e === null) {
    let t = new Error(
      "You used a <Description /> component, but it is not inside a relevant parent.",
    );
    throw (Error.captureStackTrace && Error.captureStackTrace(t, cf), t);
  }
  return e;
}
function vm() {
  let [e, t] = g.useState([]);
  return [
    e.length > 0 ? e.join(" ") : void 0,
    g.useMemo(
      () =>
        function (n) {
          let r = W(
              (o) => (
                t((i) => [...i, o]),
                () =>
                  t((i) => {
                    let u = i.slice(),
                      s = u.indexOf(o);
                    return s !== -1 && u.splice(s, 1), u;
                  })
              ),
            ),
            l = g.useMemo(
              () => ({
                register: r,
                slot: n.slot,
                name: n.name,
                props: n.props,
                value: n.value,
              }),
              [r, n.slot, n.name, n.props, n.value],
            );
          return R.createElement(Tu.Provider, { value: l }, n.children);
        },
      [t],
    ),
  ];
}
let gm = "p";
function ym(e, t) {
  let n = g.useId(),
    r = am(),
    { id: l = `headlessui-description-${n}`, ...o } = e,
    i = cf(),
    u = be(t);
  fe(() => i.register(l), [l, i.register]);
  let s = r || !1,
    a = g.useMemo(() => ({ ...i.slot, disabled: s }), [i.slot, s]),
    d = { ref: u, ...i.props, id: l };
  return Me({
    ourProps: d,
    theirProps: o,
    slot: a,
    defaultTag: gm,
    name: i.name || "Description",
  });
}
let wm = we(ym),
  Em = Object.assign(wm, {});
var ff = ((e) => (
  (e.Space = " "),
  (e.Enter = "Enter"),
  (e.Escape = "Escape"),
  (e.Backspace = "Backspace"),
  (e.Delete = "Delete"),
  (e.ArrowLeft = "ArrowLeft"),
  (e.ArrowUp = "ArrowUp"),
  (e.ArrowRight = "ArrowRight"),
  (e.ArrowDown = "ArrowDown"),
  (e.Home = "Home"),
  (e.End = "End"),
  (e.PageUp = "PageUp"),
  (e.PageDown = "PageDown"),
  (e.Tab = "Tab"),
  e
))(ff || {});
let Sm = g.createContext(() => {});
function km({ value: e, children: t }) {
  return R.createElement(Sm.Provider, { value: e }, t);
}
let xm = class extends Map {
  constructor(t) {
    super(), (this.factory = t);
  }
  get(t) {
    let n = super.get(t);
    return n === void 0 && ((n = this.factory(t)), this.set(t, n)), n;
  }
};
function df(e, t) {
  let n = e(),
    r = new Set();
  return {
    getSnapshot() {
      return n;
    },
    subscribe(l) {
      return r.add(l), () => r.delete(l);
    },
    dispatch(l, ...o) {
      let i = t[l].call(n, ...o);
      i && ((n = i), r.forEach((u) => u()));
    },
  };
}
function pf(e) {
  return g.useSyncExternalStore(e.subscribe, e.getSnapshot, e.getSnapshot);
}
let Cm = new xm(() =>
  df(() => [], {
    ADD(e) {
      return this.includes(e) ? this : [...this, e];
    },
    REMOVE(e) {
      let t = this.indexOf(e);
      if (t === -1) return this;
      let n = this.slice();
      return n.splice(t, 1), n;
    },
  }),
);
function Mn(e, t) {
  let n = Cm.get(t),
    r = g.useId(),
    l = pf(n);
  if (
    (fe(() => {
      if (e) return n.dispatch("ADD", r), () => n.dispatch("REMOVE", r);
    }, [n, e]),
    !e)
  )
    return !1;
  let o = l.indexOf(r),
    i = l.length;
  return o === -1 && ((o = i), (i += 1)), o === i - 1;
}
let Pi = new Map(),
  lr = new Map();
function Bs(e) {
  var t;
  let n = (t = lr.get(e)) != null ? t : 0;
  return (
    lr.set(e, n + 1),
    n !== 0
      ? () => Ws(e)
      : (Pi.set(e, {
          "aria-hidden": e.getAttribute("aria-hidden"),
          inert: e.inert,
        }),
        e.setAttribute("aria-hidden", "true"),
        (e.inert = !0),
        () => Ws(e))
  );
}
function Ws(e) {
  var t;
  let n = (t = lr.get(e)) != null ? t : 1;
  if ((n === 1 ? lr.delete(e) : lr.set(e, n - 1), n !== 1)) return;
  let r = Pi.get(e);
  r &&
    (r["aria-hidden"] === null
      ? e.removeAttribute("aria-hidden")
      : e.setAttribute("aria-hidden", r["aria-hidden"]),
    (e.inert = r.inert),
    Pi.delete(e));
}
function Nm(e, { allowed: t, disallowed: n } = {}) {
  let r = Mn(e, "inert-others");
  fe(() => {
    var l, o;
    if (!r) return;
    let i = jt();
    for (let s of (l = n == null ? void 0 : n()) != null ? l : [])
      s && i.add(Bs(s));
    let u = (o = t == null ? void 0 : t()) != null ? o : [];
    for (let s of u) {
      if (!s) continue;
      let a = Pu(s);
      if (!a) continue;
      let d = s.parentElement;
      for (; d && d !== a.body; ) {
        for (let p of d.children) u.some((h) => p.contains(h)) || i.add(Bs(p));
        d = d.parentElement;
      }
    }
    return i.dispose;
  }, [r, t, n]);
}
function mf(e, t, n) {
  let r = tn((l) => {
    let o = l.getBoundingClientRect();
    o.x === 0 && o.y === 0 && o.width === 0 && o.height === 0 && n();
  });
  g.useEffect(() => {
    if (!e) return;
    let l = t === null ? null : t instanceof HTMLElement ? t : t.current;
    if (!l) return;
    let o = jt();
    if (typeof ResizeObserver < "u") {
      let i = new ResizeObserver(() => r.current(l));
      i.observe(l), o.add(() => i.disconnect());
    }
    if (typeof IntersectionObserver < "u") {
      let i = new IntersectionObserver(() => r.current(l));
      i.observe(l), o.add(() => i.disconnect());
    }
    return () => o.dispose();
  }, [t, r, e]);
}
let _i = [
    "[contentEditable=true]",
    "[tabindex]",
    "a[href]",
    "area[href]",
    "button:not([disabled])",
    "iframe",
    "input:not([disabled])",
    "select:not([disabled])",
    "textarea:not([disabled])",
  ]
    .map((e) => `${e}:not([tabindex='-1'])`)
    .join(","),
  Pm = ["[data-autofocus]"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var nt = ((e) => (
    (e[(e.First = 1)] = "First"),
    (e[(e.Previous = 2)] = "Previous"),
    (e[(e.Next = 4)] = "Next"),
    (e[(e.Last = 8)] = "Last"),
    (e[(e.WrapAround = 16)] = "WrapAround"),
    (e[(e.NoScroll = 32)] = "NoScroll"),
    (e[(e.AutoFocus = 64)] = "AutoFocus"),
    e
  ))(nt || {}),
  Ti = ((e) => (
    (e[(e.Error = 0)] = "Error"),
    (e[(e.Overflow = 1)] = "Overflow"),
    (e[(e.Success = 2)] = "Success"),
    (e[(e.Underflow = 3)] = "Underflow"),
    e
  ))(Ti || {}),
  _m = ((e) => (
    (e[(e.Previous = -1)] = "Previous"), (e[(e.Next = 1)] = "Next"), e
  ))(_m || {});
function Tm(e = document.body) {
  return e == null
    ? []
    : Array.from(e.querySelectorAll(_i)).sort((t, n) =>
        Math.sign(
          (t.tabIndex || Number.MAX_SAFE_INTEGER) -
            (n.tabIndex || Number.MAX_SAFE_INTEGER),
        ),
      );
}
function Lm(e = document.body) {
  return e == null
    ? []
    : Array.from(e.querySelectorAll(Pm)).sort((t, n) =>
        Math.sign(
          (t.tabIndex || Number.MAX_SAFE_INTEGER) -
            (n.tabIndex || Number.MAX_SAFE_INTEGER),
        ),
      );
}
var hf = ((e) => (
  (e[(e.Strict = 0)] = "Strict"), (e[(e.Loose = 1)] = "Loose"), e
))(hf || {});
function $m(e, t = 0) {
  var n;
  return e === ((n = Pu(e)) == null ? void 0 : n.body)
    ? !1
    : Rt(t, {
        0() {
          return e.matches(_i);
        },
        1() {
          let r = e;
          for (; r !== null; ) {
            if (r.matches(_i)) return !0;
            r = r.parentElement;
          }
          return !1;
        },
      });
}
var Fm = ((e) => (
  (e[(e.Keyboard = 0)] = "Keyboard"), (e[(e.Mouse = 1)] = "Mouse"), e
))(Fm || {});
typeof window < "u" &&
  typeof document < "u" &&
  (document.addEventListener(
    "keydown",
    (e) => {
      e.metaKey ||
        e.altKey ||
        e.ctrlKey ||
        (document.documentElement.dataset.headlessuiFocusVisible = "");
    },
    !0,
  ),
  document.addEventListener(
    "click",
    (e) => {
      e.detail === 1
        ? delete document.documentElement.dataset.headlessuiFocusVisible
        : e.detail === 0 &&
          (document.documentElement.dataset.headlessuiFocusVisible = "");
    },
    !0,
  ));
function it(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let Rm = ["textarea", "input"].join(",");
function Om(e) {
  var t, n;
  return (n =
    (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Rm)) !=
    null
    ? n
    : !1;
}
function Mm(e, t = (n) => n) {
  return e.slice().sort((n, r) => {
    let l = t(n),
      o = t(r);
    if (l === null || o === null) return 0;
    let i = l.compareDocumentPosition(o);
    return i & Node.DOCUMENT_POSITION_FOLLOWING
      ? -1
      : i & Node.DOCUMENT_POSITION_PRECEDING
        ? 1
        : 0;
  });
}
function or(
  e,
  t,
  { sorted: n = !0, relativeTo: r = null, skipElements: l = [] } = {},
) {
  let o = Array.isArray(e)
      ? e.length > 0
        ? e[0].ownerDocument
        : document
      : e.ownerDocument,
    i = Array.isArray(e) ? (n ? Mm(e) : e) : t & 64 ? Lm(e) : Tm(e);
  l.length > 0 &&
    i.length > 1 &&
    (i = i.filter(
      (v) =>
        !l.some((y) =>
          y != null && "current" in y
            ? (y == null ? void 0 : y.current) === v
            : y === v,
        ),
    )),
    (r = r ?? o.activeElement);
  let u = (() => {
      if (t & 5) return 1;
      if (t & 10) return -1;
      throw new Error(
        "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last",
      );
    })(),
    s = (() => {
      if (t & 1) return 0;
      if (t & 2) return Math.max(0, i.indexOf(r)) - 1;
      if (t & 4) return Math.max(0, i.indexOf(r)) + 1;
      if (t & 8) return i.length - 1;
      throw new Error(
        "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last",
      );
    })(),
    a = t & 32 ? { preventScroll: !0 } : {},
    d = 0,
    p = i.length,
    h;
  do {
    if (d >= p || d + p <= 0) return 0;
    let v = s + d;
    if (t & 16) v = (v + p) % p;
    else {
      if (v < 0) return 3;
      if (v >= p) return 1;
    }
    (h = i[v]), h == null || h.focus(a), (d += u);
  } while (h !== o.activeElement);
  return t & 6 && Om(h) && h.select(), 2;
}
function vf() {
  return (
    /iPhone/gi.test(window.navigator.platform) ||
    (/Mac/gi.test(window.navigator.platform) &&
      window.navigator.maxTouchPoints > 0)
  );
}
function zm() {
  return /Android/gi.test(window.navigator.userAgent);
}
function jm() {
  return vf() || zm();
}
function Bn(e, t, n, r) {
  let l = tn(n);
  g.useEffect(() => {
    if (!e) return;
    function o(i) {
      l.current(i);
    }
    return (
      document.addEventListener(t, o, r),
      () => document.removeEventListener(t, o, r)
    );
  }, [e, t, r]);
}
function gf(e, t, n, r) {
  let l = tn(n);
  g.useEffect(() => {
    if (!e) return;
    function o(i) {
      l.current(i);
    }
    return (
      window.addEventListener(t, o, r),
      () => window.removeEventListener(t, o, r)
    );
  }, [e, t, r]);
}
const Qs = 30;
function Dm(e, t, n) {
  let r = Mn(e, "outside-click"),
    l = tn(n),
    o = g.useCallback(
      function (s, a) {
        if (s.defaultPrevented) return;
        let d = a(s);
        if (d === null || !d.getRootNode().contains(d) || !d.isConnected)
          return;
        let p = (function h(v) {
          return typeof v == "function"
            ? h(v())
            : Array.isArray(v) || v instanceof Set
              ? v
              : [v];
        })(t);
        for (let h of p) {
          if (h === null) continue;
          let v = h instanceof HTMLElement ? h : h.current;
          if (
            (v != null && v.contains(d)) ||
            (s.composed && s.composedPath().includes(v))
          )
            return;
        }
        return (
          !$m(d, hf.Loose) && d.tabIndex !== -1 && s.preventDefault(),
          l.current(s, d)
        );
      },
      [l],
    ),
    i = g.useRef(null);
  Bn(
    r,
    "pointerdown",
    (s) => {
      var a, d;
      i.current =
        ((d = (a = s.composedPath) == null ? void 0 : a.call(s)) == null
          ? void 0
          : d[0]) || s.target;
    },
    !0,
  ),
    Bn(
      r,
      "mousedown",
      (s) => {
        var a, d;
        i.current =
          ((d = (a = s.composedPath) == null ? void 0 : a.call(s)) == null
            ? void 0
            : d[0]) || s.target;
      },
      !0,
    ),
    Bn(
      r,
      "click",
      (s) => {
        jm() || (i.current && (o(s, () => i.current), (i.current = null)));
      },
      !0,
    );
  let u = g.useRef({ x: 0, y: 0 });
  Bn(
    r,
    "touchstart",
    (s) => {
      (u.current.x = s.touches[0].clientX),
        (u.current.y = s.touches[0].clientY);
    },
    !0,
  ),
    Bn(
      r,
      "touchend",
      (s) => {
        let a = {
          x: s.changedTouches[0].clientX,
          y: s.changedTouches[0].clientY,
        };
        if (
          !(
            Math.abs(a.x - u.current.x) >= Qs ||
            Math.abs(a.y - u.current.y) >= Qs
          )
        )
          return o(s, () =>
            s.target instanceof HTMLElement ? s.target : null,
          );
      },
      !0,
    ),
    gf(
      r,
      "blur",
      (s) =>
        o(s, () =>
          window.document.activeElement instanceof HTMLIFrameElement
            ? window.document.activeElement
            : null,
        ),
      !0,
    );
}
function Tr(...e) {
  return g.useMemo(() => Pu(...e), [...e]);
}
function yf(e, t, n, r) {
  let l = tn(n);
  g.useEffect(() => {
    e = e ?? window;
    function o(i) {
      l.current(i);
    }
    return e.addEventListener(t, o, r), () => e.removeEventListener(t, o, r);
  }, [e, t, r]);
}
function Im() {
  let e;
  return {
    before({ doc: t }) {
      var n;
      let r = t.documentElement,
        l = (n = t.defaultView) != null ? n : window;
      e = Math.max(0, l.innerWidth - r.clientWidth);
    },
    after({ doc: t, d: n }) {
      let r = t.documentElement,
        l = Math.max(0, r.clientWidth - r.offsetWidth),
        o = Math.max(0, e - l);
      n.style(r, "paddingRight", `${o}px`);
    },
  };
}
function Am() {
  return vf()
    ? {
        before({ doc: e, d: t, meta: n }) {
          function r(l) {
            return n.containers.flatMap((o) => o()).some((o) => o.contains(l));
          }
          t.microTask(() => {
            var l;
            if (
              window.getComputedStyle(e.documentElement).scrollBehavior !==
              "auto"
            ) {
              let u = jt();
              u.style(e.documentElement, "scrollBehavior", "auto"),
                t.add(() => t.microTask(() => u.dispose()));
            }
            let o = (l = window.scrollY) != null ? l : window.pageYOffset,
              i = null;
            t.addEventListener(
              e,
              "click",
              (u) => {
                if (u.target instanceof HTMLElement)
                  try {
                    let s = u.target.closest("a");
                    if (!s) return;
                    let { hash: a } = new URL(s.href),
                      d = e.querySelector(a);
                    d && !r(d) && (i = d);
                  } catch {}
              },
              !0,
            ),
              t.addEventListener(e, "touchstart", (u) => {
                if (u.target instanceof HTMLElement)
                  if (r(u.target)) {
                    let s = u.target;
                    for (; s.parentElement && r(s.parentElement); )
                      s = s.parentElement;
                    t.style(s, "overscrollBehavior", "contain");
                  } else t.style(u.target, "touchAction", "none");
              }),
              t.addEventListener(
                e,
                "touchmove",
                (u) => {
                  if (u.target instanceof HTMLElement) {
                    if (u.target.tagName === "INPUT") return;
                    if (r(u.target)) {
                      let s = u.target;
                      for (
                        ;
                        s.parentElement &&
                        s.dataset.headlessuiPortal !== "" &&
                        !(
                          s.scrollHeight > s.clientHeight ||
                          s.scrollWidth > s.clientWidth
                        );

                      )
                        s = s.parentElement;
                      s.dataset.headlessuiPortal === "" && u.preventDefault();
                    } else u.preventDefault();
                  }
                },
                { passive: !1 },
              ),
              t.add(() => {
                var u;
                let s = (u = window.scrollY) != null ? u : window.pageYOffset;
                o !== s && window.scrollTo(0, o),
                  i &&
                    i.isConnected &&
                    (i.scrollIntoView({ block: "nearest" }), (i = null));
              });
          });
        },
      }
    : {};
}
function Um() {
  return {
    before({ doc: e, d: t }) {
      t.style(e.documentElement, "overflow", "hidden");
    },
  };
}
function Hm(e) {
  let t = {};
  for (let n of e) Object.assign(t, n(t));
  return t;
}
let Wt = df(() => new Map(), {
  PUSH(e, t) {
    var n;
    let r =
      (n = this.get(e)) != null
        ? n
        : { doc: e, count: 0, d: jt(), meta: new Set() };
    return r.count++, r.meta.add(t), this.set(e, r), this;
  },
  POP(e, t) {
    let n = this.get(e);
    return n && (n.count--, n.meta.delete(t)), this;
  },
  SCROLL_PREVENT({ doc: e, d: t, meta: n }) {
    let r = { doc: e, d: t, meta: Hm(n) },
      l = [Am(), Im(), Um()];
    l.forEach(({ before: o }) => (o == null ? void 0 : o(r))),
      l.forEach(({ after: o }) => (o == null ? void 0 : o(r)));
  },
  SCROLL_ALLOW({ d: e }) {
    e.dispose();
  },
  TEARDOWN({ doc: e }) {
    this.delete(e);
  },
});
Wt.subscribe(() => {
  let e = Wt.getSnapshot(),
    t = new Map();
  for (let [n] of e) t.set(n, n.documentElement.style.overflow);
  for (let n of e.values()) {
    let r = t.get(n.doc) === "hidden",
      l = n.count !== 0;
    ((l && !r) || (!l && r)) &&
      Wt.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n),
      n.count === 0 && Wt.dispatch("TEARDOWN", n);
  }
});
function Vm(e, t, n = () => ({ containers: [] })) {
  let r = pf(Wt),
    l = t ? r.get(t) : void 0,
    o = l ? l.count > 0 : !1;
  return (
    fe(() => {
      if (!(!t || !e))
        return Wt.dispatch("PUSH", t, n), () => Wt.dispatch("POP", t, n);
    }, [e, t]),
    o
  );
}
function Bm(e, t, n = () => [document.body]) {
  let r = Mn(e, "scroll-lock");
  Vm(r, t, (l) => {
    var o;
    return { containers: [...((o = l.containers) != null ? o : []), n] };
  });
}
function Wm(e) {
  let t = { called: !1 };
  return (...n) => {
    if (!t.called) return (t.called = !0), e(...n);
  };
}
function Qm(e = 0) {
  let [t, n] = g.useState(e),
    r = g.useCallback((s) => n(s), [t]),
    l = g.useCallback((s) => n((a) => a | s), [t]),
    o = g.useCallback((s) => (t & s) === s, [t]),
    i = g.useCallback((s) => n((a) => a & ~s), [n]),
    u = g.useCallback((s) => n((a) => a ^ s), [n]);
  return {
    flags: t,
    setFlag: r,
    addFlag: l,
    hasFlag: o,
    removeFlag: i,
    toggleFlag: u,
  };
}
var Km = ((e) => (
  (e[(e.None = 0)] = "None"),
  (e[(e.Closed = 1)] = "Closed"),
  (e[(e.Enter = 2)] = "Enter"),
  (e[(e.Leave = 4)] = "Leave"),
  e
))(Km || {});
function Ym(e) {
  let t = {};
  for (let n in e) e[n] === !0 && (t[`data-${n}`] = "");
  return t;
}
function Xm(e, t, n, r) {
  let [l, o] = g.useState(n),
    { hasFlag: i, addFlag: u, removeFlag: s } = Qm(e && l ? 3 : 0),
    a = g.useRef(!1),
    d = g.useRef(!1),
    p = _u();
  return (
    fe(
      function h() {
        var v;
        if (!e) return;
        n && o(!0);
        let y = t.current;
        return y
          ? ((v = r == null ? void 0 : r.start) == null || v.call(r, n),
            Gm(y, {
              inFlight: a,
              prepare() {
                d.current ? (d.current = !1) : (d.current = a.current),
                  (a.current = !0),
                  !d.current && (n ? (u(3), s(4)) : (u(4), s(2)));
              },
              run() {
                d.current ? (n ? (s(3), u(4)) : (s(4), u(3))) : n ? s(1) : u(1);
              },
              done() {
                var E;
                (d.current &&
                  typeof y.getAnimations == "function" &&
                  y.getAnimations().length > 0) ||
                  ((a.current = !1),
                  s(7),
                  n || o(!1),
                  (E = r == null ? void 0 : r.end) == null || E.call(r, n));
              },
            }))
          : n
            ? (u(3), p.nextFrame(() => h()))
            : void 0;
      },
      [e, n, t, p],
    ),
    e
      ? [
          l,
          { closed: i(1), enter: i(2), leave: i(4), transition: i(2) || i(4) },
        ]
      : [
          n,
          { closed: void 0, enter: void 0, leave: void 0, transition: void 0 },
        ]
  );
}
function Gm(e, { prepare: t, run: n, done: r, inFlight: l }) {
  let o = jt();
  return (
    Jm(e, { prepare: t, inFlight: l }),
    o.nextFrame(() => {
      o.add(Zm(e, r)), n();
    }),
    o.dispose
  );
}
function Zm(e, t) {
  let n = Wm(t),
    r = jt();
  if (!e) return r.dispose;
  let { transitionDuration: l, transitionDelay: o } = getComputedStyle(e),
    [i, u] = [l, o].map((a) => {
      let [d = 0] = a
        .split(",")
        .filter(Boolean)
        .map((p) => (p.includes("ms") ? parseFloat(p) : parseFloat(p) * 1e3))
        .sort((p, h) => h - p);
      return d;
    }),
    s = i + u;
  if (s !== 0) {
    let a = r.group((d) => {
      let p = d.setTimeout(() => {
        n(), d.dispose();
      }, s);
      d.addEventListener(e, "transitionrun", (h) => {
        h.target === h.currentTarget &&
          (p(),
          d.addEventListener(e, "transitioncancel", (v) => {
            v.target === v.currentTarget && (n(), a());
          }));
      });
    });
    r.addEventListener(e, "transitionend", (d) => {
      d.target === d.currentTarget && (n(), r.dispose());
    });
  } else n();
  return r.dispose;
}
function Jm(e, { inFlight: t, prepare: n }) {
  if (t != null && t.current) {
    n();
    return;
  }
  let r = e.style.transition;
  (e.style.transition = "none"), n(), e.offsetHeight, (e.style.transition = r);
}
function Lu(e, t) {
  let n = g.useRef([]),
    r = W(e);
  g.useEffect(() => {
    let l = [...n.current];
    for (let [o, i] of t.entries())
      if (n.current[o] !== i) {
        let u = r(t, l);
        return (n.current = t), u;
      }
  }, [r, ...t]);
}
let Zl = g.createContext(null);
Zl.displayName = "OpenClosedContext";
var He = ((e) => (
  (e[(e.Open = 1)] = "Open"),
  (e[(e.Closed = 2)] = "Closed"),
  (e[(e.Closing = 4)] = "Closing"),
  (e[(e.Opening = 8)] = "Opening"),
  e
))(He || {});
function Jl() {
  return g.useContext(Zl);
}
function qm({ value: e, children: t }) {
  return R.createElement(Zl.Provider, { value: e }, t);
}
function bm({ children: e }) {
  return R.createElement(Zl.Provider, { value: null }, e);
}
function eh(e) {
  function t() {
    document.readyState !== "loading" &&
      (e(), document.removeEventListener("DOMContentLoaded", t));
  }
  typeof window < "u" &&
    typeof document < "u" &&
    (document.addEventListener("DOMContentLoaded", t), t());
}
let yt = [];
eh(() => {
  function e(t) {
    t.target instanceof HTMLElement &&
      t.target !== document.body &&
      yt[0] !== t.target &&
      (yt.unshift(t.target),
      (yt = yt.filter((n) => n != null && n.isConnected)),
      yt.splice(10));
  }
  window.addEventListener("click", e, { capture: !0 }),
    window.addEventListener("mousedown", e, { capture: !0 }),
    window.addEventListener("focus", e, { capture: !0 }),
    document.body.addEventListener("click", e, { capture: !0 }),
    document.body.addEventListener("mousedown", e, { capture: !0 }),
    document.body.addEventListener("focus", e, { capture: !0 });
});
function wf(e) {
  let t = W(e),
    n = g.useRef(!1);
  g.useEffect(
    () => (
      (n.current = !1),
      () => {
        (n.current = !0),
          Gl(() => {
            n.current && t();
          });
      }
    ),
    [t],
  );
}
function th() {
  let e = typeof document > "u";
  return "useSyncExternalStore" in ju
    ? ((t) => t.useSyncExternalStore)(ju)(
        () => () => {},
        () => !1,
        () => !e,
      )
    : !1;
}
function Lr() {
  let e = th(),
    [t, n] = g.useState(Yt.isHandoffComplete);
  return (
    t && Yt.isHandoffComplete === !1 && n(!1),
    g.useEffect(() => {
      t !== !0 && n(!0);
    }, [t]),
    g.useEffect(() => Yt.handoff(), []),
    e ? !1 : t
  );
}
let Ef = g.createContext(!1);
function nh() {
  return g.useContext(Ef);
}
function Ks(e) {
  return R.createElement(Ef.Provider, { value: e.force }, e.children);
}
function rh(e) {
  let t = nh(),
    n = g.useContext(kf),
    r = Tr(e),
    [l, o] = g.useState(() => {
      var i;
      if (!t && n !== null) return (i = n.current) != null ? i : null;
      if (Yt.isServer) return null;
      let u = r == null ? void 0 : r.getElementById("headlessui-portal-root");
      if (u) return u;
      if (r === null) return null;
      let s = r.createElement("div");
      return (
        s.setAttribute("id", "headlessui-portal-root"), r.body.appendChild(s)
      );
    });
  return (
    g.useEffect(() => {
      l !== null &&
        ((r != null && r.body.contains(l)) ||
          r == null ||
          r.body.appendChild(l));
    }, [l, r]),
    g.useEffect(() => {
      t || (n !== null && o(n.current));
    }, [n, o, t]),
    l
  );
}
let Sf = g.Fragment,
  lh = we(function (e, t) {
    let n = e,
      r = g.useRef(null),
      l = be(
        hm((d) => {
          r.current = d;
        }),
        t,
      ),
      o = Tr(r),
      i = rh(r),
      [u] = g.useState(() => {
        var d;
        return Yt.isServer
          ? null
          : (d = o == null ? void 0 : o.createElement("div")) != null
            ? d
            : null;
      }),
      s = g.useContext(Li),
      a = Lr();
    return (
      fe(() => {
        !i ||
          !u ||
          i.contains(u) ||
          (u.setAttribute("data-headlessui-portal", ""), i.appendChild(u));
      }, [i, u]),
      fe(() => {
        if (u && s) return s.register(u);
      }, [s, u]),
      wf(() => {
        var d;
        !i ||
          !u ||
          (u instanceof Node && i.contains(u) && i.removeChild(u),
          i.childNodes.length <= 0 &&
            ((d = i.parentElement) == null || d.removeChild(i)));
      }),
      a
        ? !i || !u
          ? null
          : Nu.createPortal(
              Me({
                ourProps: { ref: l },
                theirProps: n,
                slot: {},
                defaultTag: Sf,
                name: "Portal",
              }),
              u,
            )
        : null
    );
  });
function oh(e, t) {
  let n = be(t),
    { enabled: r = !0, ...l } = e;
  return r
    ? R.createElement(lh, { ...l, ref: n })
    : Me({
        ourProps: { ref: n },
        theirProps: l,
        slot: {},
        defaultTag: Sf,
        name: "Portal",
      });
}
let ih = g.Fragment,
  kf = g.createContext(null);
function uh(e, t) {
  let { target: n, ...r } = e,
    l = { ref: be(t) };
  return R.createElement(
    kf.Provider,
    { value: n },
    Me({ ourProps: l, theirProps: r, defaultTag: ih, name: "Popover.Group" }),
  );
}
let Li = g.createContext(null);
function sh() {
  let e = g.useContext(Li),
    t = g.useRef([]),
    n = W((o) => (t.current.push(o), e && e.register(o), () => r(o))),
    r = W((o) => {
      let i = t.current.indexOf(o);
      i !== -1 && t.current.splice(i, 1), e && e.unregister(o);
    }),
    l = g.useMemo(
      () => ({ register: n, unregister: r, portals: t }),
      [n, r, t],
    );
  return [
    t,
    g.useMemo(
      () =>
        function ({ children: o }) {
          return R.createElement(Li.Provider, { value: l }, o);
        },
      [l],
    ),
  ];
}
let ah = we(oh),
  xf = we(uh),
  ch = Object.assign(ah, { Group: xf });
function fh(e, t = typeof document < "u" ? document.defaultView : null, n) {
  let r = Mn(e, "escape");
  yf(t, "keydown", (l) => {
    r && (l.defaultPrevented || (l.key === ff.Escape && n(l)));
  });
}
function dh() {
  var e;
  let [t] = g.useState(() =>
      typeof window < "u" && typeof window.matchMedia == "function"
        ? window.matchMedia("(pointer: coarse)")
        : null,
    ),
    [n, r] = g.useState((e = t == null ? void 0 : t.matches) != null ? e : !1);
  return (
    fe(() => {
      if (!t) return;
      function l(o) {
        r(o.matches);
      }
      return (
        t.addEventListener("change", l),
        () => t.removeEventListener("change", l)
      );
    }, [t]),
    n
  );
}
function ph({
  defaultContainers: e = [],
  portals: t,
  mainTreeNodeRef: n,
} = {}) {
  var r;
  let l = g.useRef((r = n == null ? void 0 : n.current) != null ? r : null),
    o = Tr(l),
    i = W(() => {
      var u, s, a;
      let d = [];
      for (let p of e)
        p !== null &&
          (p instanceof HTMLElement
            ? d.push(p)
            : "current" in p &&
              p.current instanceof HTMLElement &&
              d.push(p.current));
      if (t != null && t.current) for (let p of t.current) d.push(p);
      for (let p of (u =
        o == null ? void 0 : o.querySelectorAll("html > *, body > *")) != null
        ? u
        : [])
        p !== document.body &&
          p !== document.head &&
          p instanceof HTMLElement &&
          p.id !== "headlessui-portal-root" &&
          (p.contains(l.current) ||
            p.contains(
              (a = (s = l.current) == null ? void 0 : s.getRootNode()) == null
                ? void 0
                : a.host,
            ) ||
            d.some((h) => p.contains(h)) ||
            d.push(p));
      return d;
    });
  return {
    resolveContainers: i,
    contains: W((u) => i().some((s) => s.contains(u))),
    mainTreeNodeRef: l,
    MainTreeNode: g.useMemo(
      () =>
        function () {
          return n != null
            ? null
            : R.createElement(Ni, { features: Rl.Hidden, ref: l });
        },
      [l, n],
    ),
  };
}
function $u() {
  let e = g.useRef(!1);
  return (
    fe(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      [],
    ),
    e
  );
}
var Xn = ((e) => (
  (e[(e.Forwards = 0)] = "Forwards"), (e[(e.Backwards = 1)] = "Backwards"), e
))(Xn || {});
function mh() {
  let e = g.useRef(0);
  return (
    gf(
      !0,
      "keydown",
      (t) => {
        t.key === "Tab" && (e.current = t.shiftKey ? 1 : 0);
      },
      !0,
    ),
    e
  );
}
function Cf(e) {
  if (!e) return new Set();
  if (typeof e == "function") return new Set(e());
  let t = new Set();
  for (let n of e.current) n.current instanceof HTMLElement && t.add(n.current);
  return t;
}
let hh = "div";
var Ut = ((e) => (
  (e[(e.None = 0)] = "None"),
  (e[(e.InitialFocus = 1)] = "InitialFocus"),
  (e[(e.TabLock = 2)] = "TabLock"),
  (e[(e.FocusLock = 4)] = "FocusLock"),
  (e[(e.RestoreFocus = 8)] = "RestoreFocus"),
  (e[(e.AutoFocus = 16)] = "AutoFocus"),
  e
))(Ut || {});
function vh(e, t) {
  let n = g.useRef(null),
    r = be(n, t),
    {
      initialFocus: l,
      initialFocusFallback: o,
      containers: i,
      features: u = 15,
      ...s
    } = e;
  Lr() || (u = 0);
  let a = Tr(n);
  Eh(u, { ownerDocument: a });
  let d = Sh(u, {
    ownerDocument: a,
    container: n,
    initialFocus: l,
    initialFocusFallback: o,
  });
  kh(u, {
    ownerDocument: a,
    container: n,
    containers: i,
    previousActiveElement: d,
  });
  let p = mh(),
    h = W((f) => {
      let c = n.current;
      c &&
        ((m) => m())(() => {
          Rt(p.current, {
            [Xn.Forwards]: () => {
              or(c, nt.First, { skipElements: [f.relatedTarget, o] });
            },
            [Xn.Backwards]: () => {
              or(c, nt.Last, { skipElements: [f.relatedTarget, o] });
            },
          });
        });
    }),
    v = Mn(!!(u & 2), "focus-trap#tab-lock"),
    y = _u(),
    E = g.useRef(!1),
    T = {
      ref: r,
      onKeyDown(f) {
        f.key == "Tab" &&
          ((E.current = !0),
          y.requestAnimationFrame(() => {
            E.current = !1;
          }));
      },
      onBlur(f) {
        if (!(u & 4)) return;
        let c = Cf(i);
        n.current instanceof HTMLElement && c.add(n.current);
        let m = f.relatedTarget;
        m instanceof HTMLElement &&
          m.dataset.headlessuiFocusGuard !== "true" &&
          (Nf(c, m) ||
            (E.current
              ? or(
                  n.current,
                  Rt(p.current, {
                    [Xn.Forwards]: () => nt.Next,
                    [Xn.Backwards]: () => nt.Previous,
                  }) | nt.WrapAround,
                  { relativeTo: f.target },
                )
              : f.target instanceof HTMLElement && it(f.target)));
      },
    };
  return R.createElement(
    R.Fragment,
    null,
    v &&
      R.createElement(Ni, {
        as: "button",
        type: "button",
        "data-headlessui-focus-guard": !0,
        onFocus: h,
        features: Rl.Focusable,
      }),
    Me({ ourProps: T, theirProps: s, defaultTag: hh, name: "FocusTrap" }),
    v &&
      R.createElement(Ni, {
        as: "button",
        type: "button",
        "data-headlessui-focus-guard": !0,
        onFocus: h,
        features: Rl.Focusable,
      }),
  );
}
let gh = we(vh),
  yh = Object.assign(gh, { features: Ut });
function wh(e = !0) {
  let t = g.useRef(yt.slice());
  return (
    Lu(
      ([n], [r]) => {
        r === !0 &&
          n === !1 &&
          Gl(() => {
            t.current.splice(0);
          }),
          r === !1 && n === !0 && (t.current = yt.slice());
      },
      [e, yt, t],
    ),
    W(() => {
      var n;
      return (n = t.current.find((r) => r != null && r.isConnected)) != null
        ? n
        : null;
    })
  );
}
function Eh(e, { ownerDocument: t }) {
  let n = !!(e & 8),
    r = wh(n);
  Lu(() => {
    n ||
      ((t == null ? void 0 : t.activeElement) ===
        (t == null ? void 0 : t.body) &&
        it(r()));
  }, [n]),
    wf(() => {
      n && it(r());
    });
}
function Sh(
  e,
  { ownerDocument: t, container: n, initialFocus: r, initialFocusFallback: l },
) {
  let o = g.useRef(null),
    i = Mn(!!(e & 1), "focus-trap#initial-focus"),
    u = $u();
  return (
    Lu(() => {
      if (e === 0) return;
      if (!i) {
        l != null && l.current && it(l.current);
        return;
      }
      let s = n.current;
      s &&
        Gl(() => {
          if (!u.current) return;
          let a = t == null ? void 0 : t.activeElement;
          if (r != null && r.current) {
            if ((r == null ? void 0 : r.current) === a) {
              o.current = a;
              return;
            }
          } else if (s.contains(a)) {
            o.current = a;
            return;
          }
          if (r != null && r.current) it(r.current);
          else {
            if (e & 16) {
              if (or(s, nt.First | nt.AutoFocus) !== Ti.Error) return;
            } else if (or(s, nt.First) !== Ti.Error) return;
            if (
              l != null &&
              l.current &&
              (it(l.current),
              (t == null ? void 0 : t.activeElement) === l.current)
            )
              return;
            console.warn(
              "There are no focusable elements inside the <FocusTrap />",
            );
          }
          o.current = t == null ? void 0 : t.activeElement;
        });
    }, [l, i, e]),
    o
  );
}
function kh(
  e,
  { ownerDocument: t, container: n, containers: r, previousActiveElement: l },
) {
  let o = $u(),
    i = !!(e & 4);
  yf(
    t == null ? void 0 : t.defaultView,
    "focus",
    (u) => {
      if (!i || !o.current) return;
      let s = Cf(r);
      n.current instanceof HTMLElement && s.add(n.current);
      let a = l.current;
      if (!a) return;
      let d = u.target;
      d && d instanceof HTMLElement
        ? Nf(s, d)
          ? ((l.current = d), it(d))
          : (u.preventDefault(), u.stopPropagation(), it(a))
        : it(l.current);
    },
    !0,
  );
}
function Nf(e, t) {
  for (let n of e) if (n.contains(t)) return !0;
  return !1;
}
function Pf(e) {
  var t;
  return (
    !!(
      e.enter ||
      e.enterFrom ||
      e.enterTo ||
      e.leave ||
      e.leaveFrom ||
      e.leaveTo
    ) ||
    ((t = e.as) != null ? t : Tf) !== g.Fragment ||
    R.Children.count(e.children) === 1
  );
}
let ql = g.createContext(null);
ql.displayName = "TransitionContext";
var xh = ((e) => ((e.Visible = "visible"), (e.Hidden = "hidden"), e))(xh || {});
function Ch() {
  let e = g.useContext(ql);
  if (e === null)
    throw new Error(
      "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.",
    );
  return e;
}
function Nh() {
  let e = g.useContext(bl);
  if (e === null)
    throw new Error(
      "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.",
    );
  return e;
}
let bl = g.createContext(null);
bl.displayName = "NestingContext";
function eo(e) {
  return "children" in e
    ? eo(e.children)
    : e.current
        .filter(({ el: t }) => t.current !== null)
        .filter(({ state: t }) => t === "visible").length > 0;
}
function _f(e, t) {
  let n = tn(e),
    r = g.useRef([]),
    l = $u(),
    o = _u(),
    i = W((v, y = St.Hidden) => {
      let E = r.current.findIndex(({ el: T }) => T === v);
      E !== -1 &&
        (Rt(y, {
          [St.Unmount]() {
            r.current.splice(E, 1);
          },
          [St.Hidden]() {
            r.current[E].state = "hidden";
          },
        }),
        o.microTask(() => {
          var T;
          !eo(r) && l.current && ((T = n.current) == null || T.call(n));
        }));
    }),
    u = W((v) => {
      let y = r.current.find(({ el: E }) => E === v);
      return (
        y
          ? y.state !== "visible" && (y.state = "visible")
          : r.current.push({ el: v, state: "visible" }),
        () => i(v, St.Unmount)
      );
    }),
    s = g.useRef([]),
    a = g.useRef(Promise.resolve()),
    d = g.useRef({ enter: [], leave: [] }),
    p = W((v, y, E) => {
      s.current.splice(0),
        t &&
          (t.chains.current[y] = t.chains.current[y].filter(([T]) => T !== v)),
        t == null ||
          t.chains.current[y].push([
            v,
            new Promise((T) => {
              s.current.push(T);
            }),
          ]),
        t == null ||
          t.chains.current[y].push([
            v,
            new Promise((T) => {
              Promise.all(d.current[y].map(([f, c]) => c)).then(() => T());
            }),
          ]),
        y === "enter"
          ? (a.current = a.current
              .then(() => (t == null ? void 0 : t.wait.current))
              .then(() => E(y)))
          : E(y);
    }),
    h = W((v, y, E) => {
      Promise.all(d.current[y].splice(0).map(([T, f]) => f))
        .then(() => {
          var T;
          (T = s.current.shift()) == null || T();
        })
        .then(() => E(y));
    });
  return g.useMemo(
    () => ({
      children: r,
      register: u,
      unregister: i,
      onStart: p,
      onStop: h,
      wait: a,
      chains: d,
    }),
    [u, i, r, p, h, d, a],
  );
}
let Tf = g.Fragment,
  Lf = Fl.RenderStrategy;
function Ph(e, t) {
  var n, r;
  let {
      transition: l = !0,
      beforeEnter: o,
      afterEnter: i,
      beforeLeave: u,
      afterLeave: s,
      enter: a,
      enterFrom: d,
      enterTo: p,
      entered: h,
      leave: v,
      leaveFrom: y,
      leaveTo: E,
      ...T
    } = e,
    f = g.useRef(null),
    c = Pf(e),
    m = be(...(c ? [f, t] : t === null ? [] : [t])),
    w = (n = T.unmount) == null || n ? St.Unmount : St.Hidden,
    { show: k, appear: P, initial: _ } = Ch(),
    [N, D] = g.useState(k ? "visible" : "hidden"),
    M = Nh(),
    { register: b, unregister: Ee } = M;
  fe(() => b(f), [b, f]),
    fe(() => {
      if (w === St.Hidden && f.current) {
        if (k && N !== "visible") {
          D("visible");
          return;
        }
        return Rt(N, { hidden: () => Ee(f), visible: () => b(f) });
      }
    }, [N, f, b, Ee, k, w]);
  let ze = Lr();
  fe(() => {
    if (c && ze && N === "visible" && f.current === null)
      throw new Error(
        "Did you forget to passthrough the `ref` to the actual DOM node?",
      );
  }, [f, N, ze, c]);
  let nn = _ && !P,
    rn = P && k && _,
    Qe = g.useRef(!1),
    Ke = _f(() => {
      Qe.current || (D("hidden"), Ee(f));
    }, M),
    x = W((je) => {
      Qe.current = !0;
      let dt = je ? "enter" : "leave";
      Ke.onStart(f, dt, (Se) => {
        Se === "enter"
          ? o == null || o()
          : Se === "leave" && (u == null || u());
      });
    }),
    F = W((je) => {
      let dt = je ? "enter" : "leave";
      (Qe.current = !1),
        Ke.onStop(f, dt, (Se) => {
          Se === "enter"
            ? i == null || i()
            : Se === "leave" && (s == null || s());
        }),
        dt === "leave" && !eo(Ke) && (D("hidden"), Ee(f));
    });
  g.useEffect(() => {
    (c && l) || (x(k), F(k));
  }, [k, c, l]);
  let L = !(!l || !c || !ze || nn),
    [, O] = Xm(L, f, k, { start: x, end: F }),
    G = At({
      ref: m,
      className:
        ((r = Ci(
          T.className,
          rn && a,
          rn && d,
          O.enter && a,
          O.enter && O.closed && d,
          O.enter && !O.closed && p,
          O.leave && v,
          O.leave && !O.closed && y,
          O.leave && O.closed && E,
          !O.transition && k && h,
        )) == null
          ? void 0
          : r.trim()) || void 0,
      ...Ym(O),
    }),
    Ye = 0;
  return (
    N === "visible" && (Ye |= He.Open),
    N === "hidden" && (Ye |= He.Closed),
    O.enter && (Ye |= He.Opening),
    O.leave && (Ye |= He.Closing),
    R.createElement(
      bl.Provider,
      { value: Ke },
      R.createElement(
        qm,
        { value: Ye },
        Me({
          ourProps: G,
          theirProps: T,
          defaultTag: Tf,
          features: Lf,
          visible: N === "visible",
          name: "Transition.Child",
        }),
      ),
    )
  );
}
function _h(e, t) {
  let { show: n, appear: r = !1, unmount: l = !0, ...o } = e,
    i = g.useRef(null),
    u = Pf(e),
    s = be(...(u ? [i, t] : t === null ? [] : [t]));
  Lr();
  let a = Jl();
  if (
    (n === void 0 && a !== null && (n = (a & He.Open) === He.Open),
    n === void 0)
  )
    throw new Error(
      "A <Transition /> is used but it is missing a `show={true | false}` prop.",
    );
  let [d, p] = g.useState(n ? "visible" : "hidden"),
    h = _f(() => {
      n || p("hidden");
    }),
    [v, y] = g.useState(!0),
    E = g.useRef([n]);
  fe(() => {
    v !== !1 &&
      E.current[E.current.length - 1] !== n &&
      (E.current.push(n), y(!1));
  }, [E, n]);
  let T = g.useMemo(() => ({ show: n, appear: r, initial: v }), [n, r, v]);
  mf(n, i, () => p("hidden")),
    fe(() => {
      n ? p("visible") : !eo(h) && i.current !== null && p("hidden");
    }, [n, h]);
  let f = { unmount: l },
    c = W(() => {
      var w;
      v && y(!1), (w = e.beforeEnter) == null || w.call(e);
    }),
    m = W(() => {
      var w;
      v && y(!1), (w = e.beforeLeave) == null || w.call(e);
    });
  return R.createElement(
    bl.Provider,
    { value: h },
    R.createElement(
      ql.Provider,
      { value: T },
      Me({
        ourProps: {
          ...f,
          as: g.Fragment,
          children: R.createElement($f, {
            ref: s,
            ...f,
            ...o,
            beforeEnter: c,
            beforeLeave: m,
          }),
        },
        theirProps: {},
        defaultTag: g.Fragment,
        features: Lf,
        visible: d === "visible",
        name: "Transition",
      }),
    ),
  );
}
function Th(e, t) {
  let n = g.useContext(ql) !== null,
    r = Jl() !== null;
  return R.createElement(
    R.Fragment,
    null,
    !n && r
      ? R.createElement($i, { ref: t, ...e })
      : R.createElement($f, { ref: t, ...e }),
  );
}
let $i = we(_h),
  $f = we(Ph),
  Fu = we(Th),
  Lh = Object.assign($i, { Child: Fu, Root: $i });
var $h = ((e) => (
    (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e
  ))($h || {}),
  Fh = ((e) => ((e[(e.SetTitleId = 0)] = "SetTitleId"), e))(Fh || {});
let Rh = {
    0(e, t) {
      return e.titleId === t.id ? e : { ...e, titleId: t.id };
    },
  },
  Ru = g.createContext(null);
Ru.displayName = "DialogContext";
function to(e) {
  let t = g.useContext(Ru);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw (Error.captureStackTrace && Error.captureStackTrace(n, to), n);
  }
  return t;
}
function Oh(e, t) {
  return Rt(t.type, Rh, e, t);
}
let Ys = we(function (e, t) {
    let n = g.useId(),
      {
        id: r = `headlessui-dialog-${n}`,
        open: l,
        onClose: o,
        initialFocus: i,
        role: u = "dialog",
        autoFocus: s = !0,
        __demoMode: a = !1,
        ...d
      } = e,
      p = g.useRef(!1);
    u = (function () {
      return u === "dialog" || u === "alertdialog"
        ? u
        : (p.current ||
            ((p.current = !0),
            console.warn(
              `Invalid role [${u}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`,
            )),
          "dialog");
    })();
    let h = Jl();
    l === void 0 && h !== null && (l = (h & He.Open) === He.Open);
    let v = g.useRef(null),
      y = be(v, t),
      E = Tr(v),
      T = l ? 0 : 1,
      [f, c] = g.useReducer(Oh, {
        titleId: null,
        descriptionId: null,
        panelRef: g.createRef(),
      }),
      m = W(() => o(!1)),
      w = W((L) => c({ type: 0, id: L })),
      k = Lr() ? T === 0 : !1,
      [P, _] = sh(),
      N = {
        get current() {
          var L;
          return (L = f.panelRef.current) != null ? L : v.current;
        },
      },
      {
        resolveContainers: D,
        mainTreeNodeRef: M,
        MainTreeNode: b,
      } = ph({ portals: P, defaultContainers: [N] }),
      Ee = h !== null ? (h & He.Closing) === He.Closing : !1;
    Nm(a || Ee ? !1 : k, {
      allowed: W(() => {
        var L, O;
        return [
          (O =
            (L = v.current) == null
              ? void 0
              : L.closest("[data-headlessui-portal]")) != null
            ? O
            : null,
        ];
      }),
      disallowed: W(() => {
        var L, O;
        return [
          (O =
            (L = M.current) == null
              ? void 0
              : L.closest("body > *:not(#headlessui-portal-root)")) != null
            ? O
            : null,
        ];
      }),
    }),
      Dm(k, D, (L) => {
        L.preventDefault(), m();
      }),
      fh(k, E == null ? void 0 : E.defaultView, (L) => {
        L.preventDefault(),
          L.stopPropagation(),
          document.activeElement &&
            "blur" in document.activeElement &&
            typeof document.activeElement.blur == "function" &&
            document.activeElement.blur(),
          m();
      }),
      Bm(a || Ee ? !1 : k, E, D),
      mf(k, v, m);
    let [ze, nn] = vm(),
      rn = g.useMemo(
        () => [{ dialogState: T, close: m, setTitleId: w }, f],
        [T, f, m, w],
      ),
      Qe = g.useMemo(() => ({ open: T === 0 }), [T]),
      Ke = {
        ref: y,
        id: r,
        role: u,
        tabIndex: -1,
        "aria-modal": a ? void 0 : T === 0 ? !0 : void 0,
        "aria-labelledby": f.titleId,
        "aria-describedby": ze,
      },
      x = !dh(),
      F = Ut.None;
    return (
      k &&
        !a &&
        ((F |= Ut.RestoreFocus),
        (F |= Ut.TabLock),
        s && (F |= Ut.AutoFocus),
        x && (F |= Ut.InitialFocus)),
      R.createElement(
        bm,
        null,
        R.createElement(
          Ks,
          { force: !0 },
          R.createElement(
            ch,
            null,
            R.createElement(
              Ru.Provider,
              { value: rn },
              R.createElement(
                xf,
                { target: v },
                R.createElement(
                  Ks,
                  { force: !1 },
                  R.createElement(
                    nn,
                    { slot: Qe },
                    R.createElement(
                      _,
                      null,
                      R.createElement(
                        yh,
                        {
                          initialFocus: i,
                          initialFocusFallback: v,
                          containers: D,
                          features: F,
                        },
                        R.createElement(
                          km,
                          { value: m },
                          Me({
                            ourProps: Ke,
                            theirProps: d,
                            slot: Qe,
                            defaultTag: Mh,
                            features: zh,
                            visible: T === 0,
                            name: "Dialog",
                          }),
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ),
        ),
        R.createElement(mm, null, R.createElement(b, null)),
      )
    );
  }),
  Mh = "div",
  zh = Fl.RenderStrategy | Fl.Static;
function jh(e, t) {
  let { transition: n = !1, open: r, ...l } = e,
    o = Jl(),
    i = e.hasOwnProperty("open") || o !== null,
    u = e.hasOwnProperty("onClose");
  if (!i && !u)
    throw new Error(
      "You have to provide an `open` and an `onClose` prop to the `Dialog` component.",
    );
  if (!i)
    throw new Error(
      "You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.",
    );
  if (!u)
    throw new Error(
      "You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.",
    );
  if (!o && typeof e.open != "boolean")
    throw new Error(
      `You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${e.open}`,
    );
  if (typeof e.onClose != "function")
    throw new Error(
      `You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${e.onClose}`,
    );
  return o === null && r !== void 0 && !l.static
    ? R.createElement(
        Lh,
        { show: r, transition: n, unmount: l.unmount },
        R.createElement(Ys, { ref: t, ...l }),
      )
    : R.createElement(Ys, { ref: t, open: r, ...l });
}
let Dh = "div";
function Ih(e, t) {
  let n = g.useId(),
    { id: r = `headlessui-dialog-panel-${n}`, transition: l = !1, ...o } = e,
    [{ dialogState: i }, u] = to("Dialog.Panel"),
    s = be(t, u.panelRef),
    a = g.useMemo(() => ({ open: i === 0 }), [i]),
    d = W((p) => {
      p.stopPropagation();
    });
  return R.createElement(
    l ? Fu : g.Fragment,
    null,
    Me({
      ourProps: { ref: s, id: r, onClick: d },
      theirProps: o,
      slot: a,
      defaultTag: Dh,
      name: "Dialog.Panel",
    }),
  );
}
let Ah = "div";
function Uh(e, t) {
  let { transition: n = !1, ...r } = e,
    [{ dialogState: l }] = to("Dialog.Backdrop"),
    o = g.useMemo(() => ({ open: l === 0 }), [l]);
  return R.createElement(
    n ? Fu : g.Fragment,
    null,
    Me({
      ourProps: { ref: t, "aria-hidden": !0 },
      theirProps: r,
      slot: o,
      defaultTag: Ah,
      name: "Dialog.Backdrop",
    }),
  );
}
let Hh = "h2";
function Vh(e, t) {
  let n = g.useId(),
    { id: r = `headlessui-dialog-title-${n}`, ...l } = e,
    [{ dialogState: o, setTitleId: i }] = to("Dialog.Title"),
    u = be(t);
  g.useEffect(() => (i(r), () => i(null)), [r, i]);
  let s = g.useMemo(() => ({ open: o === 0 }), [o]);
  return Me({
    ourProps: { ref: u, id: r },
    theirProps: l,
    slot: s,
    defaultTag: Hh,
    name: "Dialog.Title",
  });
}
let Bh = we(jh),
  Ff = we(Ih);
we(Uh);
let Wh = we(Vh),
  Qh = Object.assign(Bh, { Panel: Ff, Title: Wh, Description: Em });
function Kh({ title: e, titleId: t, ...n }, r) {
  return g.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: r,
        "aria-labelledby": t,
      },
      n,
    ),
    e ? g.createElement("title", { id: t }, e) : null,
    g.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5",
    }),
  );
}
const Yh = g.forwardRef(Kh);
function Xh({ title: e, titleId: t, ...n }, r) {
  return g.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: r,
        "aria-labelledby": t,
      },
      n,
    ),
    e ? g.createElement("title", { id: t }, e) : null,
    g.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M6 18 18 6M6 6l12 12",
    }),
  );
}
const Gh = g.forwardRef(Xh),
  Xs = [
    { name: "Product", href: "#" },
    { name: "Features", href: "#" },
    { name: "Marketplace", href: "#" },
    { name: "Company", href: "#" },
  ];
function Zh() {
  const [e, t] = g.useState(!1);
  return $.jsxs("div", {
    className: "bg-white",
    children: [
      $.jsxs("header", {
        className: "absolute inset-x-0 top-0 z-50",
        children: [
          $.jsxs("nav", {
            className: "flex items-center justify-between p-6 lg:px-8",
            "aria-label": "Global",
            children: [
              $.jsx("div", {
                className: "flex lg:flex-1",
                children: $.jsxs("a", {
                  href: "#",
                  className: "-m-1.5 p-1.5",
                  children: [
                    $.jsx("span", {
                      className: "sr-only",
                      children: "Your Company",
                    }),
                    $.jsx("img", {
                      className: "h-8 w-auto",
                      src: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",
                      alt: "",
                    }),
                  ],
                }),
              }),
              $.jsx("div", {
                className: "flex lg:hidden",
                children: $.jsxs("button", {
                  type: "button",
                  className:
                    "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700",
                  onClick: () => t(!0),
                  children: [
                    $.jsx("span", {
                      className: "sr-only",
                      children: "Open main menu",
                    }),
                    $.jsx(Yh, { className: "h-6 w-6", "aria-hidden": "true" }),
                  ],
                }),
              }),
              $.jsx("div", {
                className: "hidden lg:flex lg:gap-x-12",
                children: Xs.map((n) =>
                  $.jsx(
                    "a",
                    {
                      href: n.href,
                      className:
                        "text-sm font-semibold leading-6 text-gray-900",
                      children: n.name,
                    },
                    n.name,
                  ),
                ),
              }),
              $.jsx("div", {
                className: "hidden lg:flex lg:flex-1 lg:justify-end",
                children: $.jsxs("a", {
                  href: "#",
                  className: "text-sm font-semibold leading-6 text-gray-900",
                  children: [
                    "Log in ",
                    $.jsx("span", { "aria-hidden": "true", children: "→" }),
                  ],
                }),
              }),
            ],
          }),
          $.jsxs(Qh, {
            className: "lg:hidden",
            open: e,
            onClose: t,
            children: [
              $.jsx("div", { className: "fixed inset-0 z-50" }),
              $.jsxs(Ff, {
                className:
                  "fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10",
                children: [
                  $.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [
                      $.jsxs("a", {
                        href: "#",
                        className: "-m-1.5 p-1.5",
                        children: [
                          $.jsx("span", {
                            className: "sr-only",
                            children: "Your Company",
                          }),
                          $.jsx("img", {
                            className: "h-8 w-auto",
                            src: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",
                            alt: "",
                          }),
                        ],
                      }),
                      $.jsxs("button", {
                        type: "button",
                        className: "-m-2.5 rounded-md p-2.5 text-gray-700",
                        onClick: () => t(!1),
                        children: [
                          $.jsx("span", {
                            className: "sr-only",
                            children: "Close menu",
                          }),
                          $.jsx(Gh, {
                            className: "h-6 w-6",
                            "aria-hidden": "true",
                          }),
                        ],
                      }),
                    ],
                  }),
                  $.jsx("div", {
                    className: "mt-6 flow-root",
                    children: $.jsxs("div", {
                      className: "-my-6 divide-y divide-gray-500/10",
                      children: [
                        $.jsx("div", {
                          className: "space-y-2 py-6",
                          children: Xs.map((n) =>
                            $.jsx(
                              "a",
                              {
                                href: n.href,
                                className:
                                  "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50",
                                children: n.name,
                              },
                              n.name,
                            ),
                          ),
                        }),
                        $.jsx("div", {
                          className: "py-6",
                          children: $.jsx("a", {
                            href: "#",
                            className:
                              "-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50",
                            children: "Log in",
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      $.jsxs("div", {
        className: "relative isolate px-6 pt-14 lg:px-8",
        children: [
          $.jsx("div", {
            className:
              "absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80",
            "aria-hidden": "true",
            children: $.jsx("div", {
              className:
                "relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]",
              style: {
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              },
            }),
          }),
          $.jsxs("div", {
            className: "mx-auto max-w-2xl py-32 sm:py-48 lg:py-56",
            children: [
              $.jsx("div", {
                className: "hidden sm:mb-8 sm:flex sm:justify-center",
                children: $.jsxs("div", {
                  className:
                    "relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20",
                  children: [
                    "Announcing our next round of funding.",
                    " ",
                    $.jsxs("a", {
                      href: "#",
                      className: "font-semibold text-indigo-600",
                      children: [
                        $.jsx("span", {
                          className: "absolute inset-0",
                          "aria-hidden": "true",
                        }),
                        "Read more ",
                        $.jsx("span", { "aria-hidden": "true", children: "→" }),
                      ],
                    }),
                  ],
                }),
              }),
              $.jsxs("div", {
                className: "text-center",
                children: [
                  $.jsx("h1", {
                    className:
                      "text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl",
                    children: "Data to enrich your online business",
                  }),
                  $.jsx("p", {
                    className: "mt-6 text-lg leading-8 text-gray-600",
                    children:
                      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.",
                  }),
                  $.jsxs("div", {
                    className: "mt-10 flex items-center justify-center gap-x-6",
                    children: [
                      $.jsx("a", {
                        href: "#",
                        className:
                          "rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                        children: "Get started",
                      }),
                      $.jsxs("a", {
                        href: "#",
                        className:
                          "text-sm font-semibold leading-6 text-gray-900",
                        children: [
                          "Learn more ",
                          $.jsx("span", {
                            "aria-hidden": "true",
                            children: "→",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          $.jsx("div", {
            className:
              "absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]",
            "aria-hidden": "true",
            children: $.jsx("div", {
              className:
                "relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]",
              style: {
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              },
            }),
          }),
        ],
      }),
    ],
  });
}
function Jh() {
  return $.jsx($.Fragment, { children: $.jsx(Zh, {}) });
}
Fo.createRoot(document.getElementById("root")).render(
  $.jsx(R.StrictMode, { children: $.jsx(Jh, {}) }),
);
