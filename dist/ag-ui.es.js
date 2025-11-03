var __create = Object.create, __defProp = Object.defineProperty, __getOwnPropDesc = Object.getOwnPropertyDescriptor, __getOwnPropNames = Object.getOwnPropertyNames, __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty, __commonJSMin = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), __copyProps = (e, a, s, c) => {
	if (a && typeof a == "object" || typeof a == "function") for (var l = __getOwnPropNames(a), u = 0, d = l.length, f; u < d; u++) f = l[u], !__hasOwnProp.call(e, f) && f !== s && __defProp(e, f, {
		get: ((e) => a[e]).bind(null, f),
		enumerable: !(c = __getOwnPropDesc(a, f)) || c.enumerable
	});
	return e;
}, __toESM = (n, i, o) => (o = n == null ? {} : __create(__getProtoOf(n)), __copyProps(i || !n || !n.__esModule ? __defProp(o, "default", {
	value: n,
	enumerable: !0
}) : o, n)), require_react_production = /* @__PURE__ */ __commonJSMin(((e) => {
	var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), p = Symbol.for("react.activity"), m = Symbol.iterator;
	function h(e) {
		return typeof e != "object" || !e ? null : (e = m && e[m] || e["@@iterator"], typeof e == "function" ? e : null);
	}
	var g = {
		isMounted: function() {
			return !1;
		},
		enqueueForceUpdate: function() {},
		enqueueReplaceState: function() {},
		enqueueSetState: function() {}
	}, _ = Object.assign, v = {};
	function y(e, t, n) {
		this.props = e, this.context = t, this.refs = v, this.updater = n || g;
	}
	y.prototype.isReactComponent = {}, y.prototype.setState = function(e, t) {
		if (typeof e != "object" && typeof e != "function" && e != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
		this.updater.enqueueSetState(this, e, t, "setState");
	}, y.prototype.forceUpdate = function(e) {
		this.updater.enqueueForceUpdate(this, e, "forceUpdate");
	};
	function b() {}
	b.prototype = y.prototype;
	function x(e, t, n) {
		this.props = e, this.context = t, this.refs = v, this.updater = n || g;
	}
	var S = x.prototype = new b();
	S.constructor = x, _(S, y.prototype), S.isPureReactComponent = !0;
	var C = Array.isArray;
	function w() {}
	var T = {
		H: null,
		A: null,
		T: null,
		S: null
	}, E = Object.prototype.hasOwnProperty;
	function D(e, n, i) {
		var a = i.ref;
		return {
			$$typeof: t,
			type: e,
			key: n,
			ref: a === void 0 ? null : a,
			props: i
		};
	}
	function O(e, t) {
		return D(e.type, t, e.props);
	}
	function k(e) {
		return typeof e == "object" && !!e && e.$$typeof === t;
	}
	function A(e) {
		var t = {
			"=": "=0",
			":": "=2"
		};
		return "$" + e.replace(/[=:]/g, function(e) {
			return t[e];
		});
	}
	var j = /\/+/g;
	function M(e, t) {
		return typeof e == "object" && e && e.key != null ? A("" + e.key) : t.toString(36);
	}
	function N(e) {
		switch (e.status) {
			case "fulfilled": return e.value;
			case "rejected": throw e.reason;
			default: switch (typeof e.status == "string" ? e.then(w, w) : (e.status = "pending", e.then(function(t) {
				e.status === "pending" && (e.status = "fulfilled", e.value = t);
			}, function(t) {
				e.status === "pending" && (e.status = "rejected", e.reason = t);
			})), e.status) {
				case "fulfilled": return e.value;
				case "rejected": throw e.reason;
			}
		}
		throw e;
	}
	function P(e, i, a, o, s) {
		var c = typeof e;
		(c === "undefined" || c === "boolean") && (e = null);
		var l = !1;
		if (e === null) l = !0;
		else switch (c) {
			case "bigint":
			case "string":
			case "number":
				l = !0;
				break;
			case "object": switch (e.$$typeof) {
				case t:
				case n:
					l = !0;
					break;
				case f: return l = e._init, P(l(e._payload), i, a, o, s);
			}
		}
		if (l) return s = s(e), l = o === "" ? "." + M(e, 0) : o, C(s) ? (a = "", l != null && (a = l.replace(j, "$&/") + "/"), P(s, i, a, "", function(e) {
			return e;
		})) : s != null && (k(s) && (s = O(s, a + (s.key == null || e && e.key === s.key ? "" : ("" + s.key).replace(j, "$&/") + "/") + l)), i.push(s)), 1;
		l = 0;
		var u = o === "" ? "." : o + ":";
		if (C(e)) for (var d = 0; d < e.length; d++) o = e[d], c = u + M(o, d), l += P(o, i, a, c, s);
		else if (d = h(e), typeof d == "function") for (e = d.call(e), d = 0; !(o = e.next()).done;) o = o.value, c = u + M(o, d++), l += P(o, i, a, c, s);
		else if (c === "object") {
			if (typeof e.then == "function") return P(N(e), i, a, o, s);
			throw i = String(e), Error("Objects are not valid as a React child (found: " + (i === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : i) + "). If you meant to render a collection of children, use an array instead.");
		}
		return l;
	}
	function F(e, t, n) {
		if (e == null) return e;
		var i = [], a = 0;
		return P(e, i, "", "", function(e) {
			return t.call(n, e, a++);
		}), i;
	}
	function I(e) {
		if (e._status === -1) {
			var t = e._result;
			t = t(), t.then(function(t) {
				(e._status === 0 || e._status === -1) && (e._status = 1, e._result = t);
			}, function(t) {
				(e._status === 0 || e._status === -1) && (e._status = 2, e._result = t);
			}), e._status === -1 && (e._status = 0, e._result = t);
		}
		if (e._status === 1) return e._result.default;
		throw e._result;
	}
	var L = typeof reportError == "function" ? reportError : function(e) {
		if (typeof window == "object" && typeof window.ErrorEvent == "function") {
			var t = new window.ErrorEvent("error", {
				bubbles: !0,
				cancelable: !0,
				message: typeof e == "object" && e && typeof e.message == "string" ? String(e.message) : String(e),
				error: e
			});
			if (!window.dispatchEvent(t)) return;
		} else if (typeof process == "object" && typeof process.emit == "function") {
			process.emit("uncaughtException", e);
			return;
		}
		console.error(e);
	}, R = {
		map: F,
		forEach: function(e, t, n) {
			F(e, function() {
				t.apply(this, arguments);
			}, n);
		},
		count: function(e) {
			var t = 0;
			return F(e, function() {
				t++;
			}), t;
		},
		toArray: function(e) {
			return F(e, function(e) {
				return e;
			}) || [];
		},
		only: function(e) {
			if (!k(e)) throw Error("React.Children.only expected to receive a single React element child.");
			return e;
		}
	};
	e.Activity = p, e.Children = R, e.Component = y, e.Fragment = i, e.Profiler = o, e.PureComponent = x, e.StrictMode = a, e.Suspense = u, e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = T, e.__COMPILER_RUNTIME = {
		__proto__: null,
		c: function(e) {
			return T.H.useMemoCache(e);
		}
	}, e.cache = function(e) {
		return function() {
			return e.apply(null, arguments);
		};
	}, e.cacheSignal = function() {
		return null;
	}, e.cloneElement = function(e, t, n) {
		if (e == null) throw Error("The argument must be a React element, but you passed " + e + ".");
		var i = _({}, e.props), a = e.key;
		if (t != null) for (o in t.key !== void 0 && (a = "" + t.key), t) !E.call(t, o) || o === "key" || o === "__self" || o === "__source" || o === "ref" && t.ref === void 0 || (i[o] = t[o]);
		var o = arguments.length - 2;
		if (o === 1) i.children = n;
		else if (1 < o) {
			for (var s = Array(o), c = 0; c < o; c++) s[c] = arguments[c + 2];
			i.children = s;
		}
		return D(e.type, a, i);
	}, e.createContext = function(e) {
		return e = {
			$$typeof: c,
			_currentValue: e,
			_currentValue2: e,
			_threadCount: 0,
			Provider: null,
			Consumer: null
		}, e.Provider = e, e.Consumer = {
			$$typeof: s,
			_context: e
		}, e;
	}, e.createElement = function(e, t, n) {
		var i, a = {}, o = null;
		if (t != null) for (i in t.key !== void 0 && (o = "" + t.key), t) E.call(t, i) && i !== "key" && i !== "__self" && i !== "__source" && (a[i] = t[i]);
		var s = arguments.length - 2;
		if (s === 1) a.children = n;
		else if (1 < s) {
			for (var c = Array(s), l = 0; l < s; l++) c[l] = arguments[l + 2];
			a.children = c;
		}
		if (e && e.defaultProps) for (i in s = e.defaultProps, s) a[i] === void 0 && (a[i] = s[i]);
		return D(e, o, a);
	}, e.createRef = function() {
		return { current: null };
	}, e.forwardRef = function(e) {
		return {
			$$typeof: l,
			render: e
		};
	}, e.isValidElement = k, e.lazy = function(e) {
		return {
			$$typeof: f,
			_payload: {
				_status: -1,
				_result: e
			},
			_init: I
		};
	}, e.memo = function(e, t) {
		return {
			$$typeof: d,
			type: e,
			compare: t === void 0 ? null : t
		};
	}, e.startTransition = function(e) {
		var t = T.T, n = {};
		T.T = n;
		try {
			var i = e(), a = T.S;
			a !== null && a(n, i), typeof i == "object" && i && typeof i.then == "function" && i.then(w, L);
		} catch (e) {
			L(e);
		} finally {
			t !== null && n.types !== null && (t.types = n.types), T.T = t;
		}
	}, e.unstable_useCacheRefresh = function() {
		return T.H.useCacheRefresh();
	}, e.use = function(e) {
		return T.H.use(e);
	}, e.useActionState = function(e, t, n) {
		return T.H.useActionState(e, t, n);
	}, e.useCallback = function(e, t) {
		return T.H.useCallback(e, t);
	}, e.useContext = function(e) {
		return T.H.useContext(e);
	}, e.useDebugValue = function() {}, e.useDeferredValue = function(e, t) {
		return T.H.useDeferredValue(e, t);
	}, e.useEffect = function(e, t) {
		return T.H.useEffect(e, t);
	}, e.useEffectEvent = function(e) {
		return T.H.useEffectEvent(e);
	}, e.useId = function() {
		return T.H.useId();
	}, e.useImperativeHandle = function(e, t, n) {
		return T.H.useImperativeHandle(e, t, n);
	}, e.useInsertionEffect = function(e, t) {
		return T.H.useInsertionEffect(e, t);
	}, e.useLayoutEffect = function(e, t) {
		return T.H.useLayoutEffect(e, t);
	}, e.useMemo = function(e, t) {
		return T.H.useMemo(e, t);
	}, e.useOptimistic = function(e, t) {
		return T.H.useOptimistic(e, t);
	}, e.useReducer = function(e, t, n) {
		return T.H.useReducer(e, t, n);
	}, e.useRef = function(e) {
		return T.H.useRef(e);
	}, e.useState = function(e) {
		return T.H.useState(e);
	}, e.useSyncExternalStore = function(e, t, n) {
		return T.H.useSyncExternalStore(e, t, n);
	}, e.useTransition = function() {
		return T.H.useTransition();
	}, e.version = "19.2.0";
})), require_react_development = /* @__PURE__ */ __commonJSMin(((e, t) => {
	process.env.NODE_ENV !== "production" && (function() {
		function n(e, t) {
			Object.defineProperty(o.prototype, e, { get: function() {
				console.warn("%s(...) is deprecated in plain JavaScript React classes. %s", t[0], t[1]);
			} });
		}
		function i(e) {
			return typeof e != "object" || !e ? null : (e = ie && e[ie] || e["@@iterator"], typeof e == "function" ? e : null);
		}
		function a(e, t) {
			e = (e = e.constructor) && (e.displayName || e.name) || "ReactClass";
			var n = e + "." + t;
			ae[n] || (console.error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", t, e), ae[n] = !0);
		}
		function o(e, t, n) {
			this.props = e, this.context = t, this.refs = G, this.updater = n || oe;
		}
		function s() {}
		function c(e, t, n) {
			this.props = e, this.context = t, this.refs = G, this.updater = n || oe;
		}
		function l() {}
		function u(e) {
			return "" + e;
		}
		function d(e) {
			try {
				u(e);
				var t = !1;
			} catch {
				t = !0;
			}
			if (t) {
				t = console;
				var n = t.error, i = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
				return n.call(t, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", i), u(e);
			}
		}
		function f(e) {
			if (e == null) return null;
			if (typeof e == "function") return e.$$typeof === ue ? null : e.displayName || e.name || null;
			if (typeof e == "string") return e;
			switch (e) {
				case R: return "Fragment";
				case z: return "Profiler";
				case ee: return "StrictMode";
				case H: return "Suspense";
				case U: return "SuspenseList";
				case re: return "Activity";
			}
			if (typeof e == "object") switch (typeof e.tag == "number" && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), e.$$typeof) {
				case L: return "Portal";
				case V: return e.displayName || "Context";
				case B: return (e._context.displayName || "Context") + ".Consumer";
				case te:
					var t = e.render;
					return e = e.displayName, e ||= (e = t.displayName || t.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
				case ne: return t = e.displayName || null, t === null ? f(e.type) || "Memo" : t;
				case W:
					t = e._payload, e = e._init;
					try {
						return f(e(t));
					} catch {}
			}
			return null;
		}
		function p(e) {
			if (e === R) return "<>";
			if (typeof e == "object" && e && e.$$typeof === W) return "<...>";
			try {
				var t = f(e);
				return t ? "<" + t + ">" : "<...>";
			} catch {
				return "<...>";
			}
		}
		function m() {
			var e = K.A;
			return e === null ? null : e.getOwner();
		}
		function h() {
			return Error("react-stack-top-frame");
		}
		function g(e) {
			if (de.call(e, "key")) {
				var t = Object.getOwnPropertyDescriptor(e, "key").get;
				if (t && t.isReactWarning) return !1;
			}
			return e.key !== void 0;
		}
		function _(e, t) {
			function n() {
				pe || (pe = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", t));
			}
			n.isReactWarning = !0, Object.defineProperty(e, "key", {
				get: n,
				configurable: !0
			});
		}
		function v() {
			var e = f(this.type);
			return he[e] || (he[e] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")), e = this.props.ref, e === void 0 ? null : e;
		}
		function y(e, t, n, i, a, o) {
			var s = n.ref;
			return e = {
				$$typeof: I,
				type: e,
				key: t,
				props: n,
				_owner: i
			}, (s === void 0 ? null : s) === null ? Object.defineProperty(e, "ref", {
				enumerable: !1,
				value: null
			}) : Object.defineProperty(e, "ref", {
				enumerable: !1,
				get: v
			}), e._store = {}, Object.defineProperty(e._store, "validated", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: 0
			}), Object.defineProperty(e, "_debugInfo", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: null
			}), Object.defineProperty(e, "_debugStack", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: a
			}), Object.defineProperty(e, "_debugTask", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: o
			}), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
		}
		function b(e, t) {
			return t = y(e.type, t, e.props, e._owner, e._debugStack, e._debugTask), e._store && (t._store.validated = e._store.validated), t;
		}
		function x(e) {
			S(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e && e.$$typeof === W && (e._payload.status === "fulfilled" ? S(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
		}
		function S(e) {
			return typeof e == "object" && !!e && e.$$typeof === I;
		}
		function C(e) {
			var t = {
				"=": "=0",
				":": "=2"
			};
			return "$" + e.replace(/[=:]/g, function(e) {
				return t[e];
			});
		}
		function w(e, t) {
			return typeof e == "object" && e && e.key != null ? (d(e.key), C("" + e.key)) : t.toString(36);
		}
		function T(e) {
			switch (e.status) {
				case "fulfilled": return e.value;
				case "rejected": throw e.reason;
				default: switch (typeof e.status == "string" ? e.then(l, l) : (e.status = "pending", e.then(function(t) {
					e.status === "pending" && (e.status = "fulfilled", e.value = t);
				}, function(t) {
					e.status === "pending" && (e.status = "rejected", e.reason = t);
				})), e.status) {
					case "fulfilled": return e.value;
					case "rejected": throw e.reason;
				}
			}
			throw e;
		}
		function E(e, t, n, a, o) {
			var s = typeof e;
			(s === "undefined" || s === "boolean") && (e = null);
			var c = !1;
			if (e === null) c = !0;
			else switch (s) {
				case "bigint":
				case "string":
				case "number":
					c = !0;
					break;
				case "object": switch (e.$$typeof) {
					case I:
					case L:
						c = !0;
						break;
					case W: return c = e._init, E(c(e._payload), t, n, a, o);
				}
			}
			if (c) {
				c = e, o = o(c);
				var l = a === "" ? "." + w(c, 0) : a;
				return le(o) ? (n = "", l != null && (n = l.replace(ye, "$&/") + "/"), E(o, t, n, "", function(e) {
					return e;
				})) : o != null && (S(o) && (o.key != null && (c && c.key === o.key || d(o.key)), n = b(o, n + (o.key == null || c && c.key === o.key ? "" : ("" + o.key).replace(ye, "$&/") + "/") + l), a !== "" && c != null && S(c) && c.key == null && c._store && !c._store.validated && (n._store.validated = 2), o = n), t.push(o)), 1;
			}
			if (c = 0, l = a === "" ? "." : a + ":", le(e)) for (var u = 0; u < e.length; u++) a = e[u], s = l + w(a, u), c += E(a, t, n, s, o);
			else if (u = i(e), typeof u == "function") for (u === e.entries && (ve || console.warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), ve = !0), e = u.call(e), u = 0; !(a = e.next()).done;) a = a.value, s = l + w(a, u++), c += E(a, t, n, s, o);
			else if (s === "object") {
				if (typeof e.then == "function") return E(T(e), t, n, a, o);
				throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
			}
			return c;
		}
		function D(e, t, n) {
			if (e == null) return e;
			var i = [], a = 0;
			return E(e, i, "", "", function(e) {
				return t.call(n, e, a++);
			}), i;
		}
		function O(e) {
			if (e._status === -1) {
				var t = e._ioInfo;
				t != null && (t.start = t.end = performance.now()), t = e._result;
				var n = t();
				if (n.then(function(t) {
					if (e._status === 0 || e._status === -1) {
						e._status = 1, e._result = t;
						var i = e._ioInfo;
						i != null && (i.end = performance.now()), n.status === void 0 && (n.status = "fulfilled", n.value = t);
					}
				}, function(t) {
					if (e._status === 0 || e._status === -1) {
						e._status = 2, e._result = t;
						var i = e._ioInfo;
						i != null && (i.end = performance.now()), n.status === void 0 && (n.status = "rejected", n.reason = t);
					}
				}), t = e._ioInfo, t != null) {
					t.value = n;
					var i = n.displayName;
					typeof i == "string" && (t.name = i);
				}
				e._status === -1 && (e._status = 0, e._result = n);
			}
			if (e._status === 1) return t = e._result, t === void 0 && console.error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?", t), "default" in t || console.error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", t), t.default;
			throw e._result;
		}
		function k() {
			var e = K.H;
			return e === null && console.error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem."), e;
		}
		function A() {
			K.asyncTransitions--;
		}
		function j(e) {
			if (Se === null) try {
				var n = ("require" + Math.random()).slice(0, 7);
				Se = (t && t[n]).call(t, "timers").setImmediate;
			} catch {
				Se = function(e) {
					!1 === xe && (xe = !0, typeof MessageChannel > "u" && console.error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
					var t = new MessageChannel();
					t.port1.onmessage = e, t.port2.postMessage(void 0);
				};
			}
			return Se(e);
		}
		function M(e) {
			return 1 < e.length && typeof AggregateError == "function" ? AggregateError(e) : e[0];
		}
		function N(e, t) {
			t !== Ce - 1 && console.error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ce = t;
		}
		function P(e, t, n) {
			var i = K.actQueue;
			if (i !== null) if (i.length !== 0) try {
				F(i), j(function() {
					return P(e, t, n);
				});
				return;
			} catch (e) {
				K.thrownErrors.push(e);
			}
			else K.actQueue = null;
			0 < K.thrownErrors.length ? (i = M(K.thrownErrors), K.thrownErrors.length = 0, n(i)) : t(e);
		}
		function F(e) {
			if (!q) {
				q = !0;
				var t = 0;
				try {
					for (; t < e.length; t++) {
						var n = e[t];
						do {
							K.didUsePromise = !1;
							var i = n(!1);
							if (i !== null) {
								if (K.didUsePromise) {
									e[t] = n, e.splice(0, t);
									return;
								}
								n = i;
							} else break;
						} while (1);
					}
					e.length = 0;
				} catch (n) {
					e.splice(0, t + 1), K.thrownErrors.push(n);
				} finally {
					q = !1;
				}
			}
		}
		typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
		var I = Symbol.for("react.transitional.element"), L = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), ee = Symbol.for("react.strict_mode"), z = Symbol.for("react.profiler"), B = Symbol.for("react.consumer"), V = Symbol.for("react.context"), te = Symbol.for("react.forward_ref"), H = Symbol.for("react.suspense"), U = Symbol.for("react.suspense_list"), ne = Symbol.for("react.memo"), W = Symbol.for("react.lazy"), re = Symbol.for("react.activity"), ie = Symbol.iterator, ae = {}, oe = {
			isMounted: function() {
				return !1;
			},
			enqueueForceUpdate: function(e) {
				a(e, "forceUpdate");
			},
			enqueueReplaceState: function(e) {
				a(e, "replaceState");
			},
			enqueueSetState: function(e) {
				a(e, "setState");
			}
		}, se = Object.assign, G = {};
		Object.freeze(G), o.prototype.isReactComponent = {}, o.prototype.setState = function(e, t) {
			if (typeof e != "object" && typeof e != "function" && e != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
			this.updater.enqueueSetState(this, e, t, "setState");
		}, o.prototype.forceUpdate = function(e) {
			this.updater.enqueueForceUpdate(this, e, "forceUpdate");
		};
		var ce = {
			isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
			replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
		};
		for (Ee in ce) ce.hasOwnProperty(Ee) && n(Ee, ce[Ee]);
		s.prototype = o.prototype, ce = c.prototype = new s(), ce.constructor = c, se(ce, o.prototype), ce.isPureReactComponent = !0;
		var le = Array.isArray, ue = Symbol.for("react.client.reference"), K = {
			H: null,
			A: null,
			T: null,
			S: null,
			actQueue: null,
			asyncTransitions: 0,
			isBatchingLegacy: !1,
			didScheduleLegacyUpdate: !1,
			didUsePromise: !1,
			thrownErrors: [],
			getCurrentStack: null,
			recentlyCreatedOwnerStacks: 0
		}, de = Object.prototype.hasOwnProperty, fe = console.createTask ? console.createTask : function() {
			return null;
		};
		ce = { react_stack_bottom_frame: function(e) {
			return e();
		} };
		var pe, me, he = {}, ge = ce.react_stack_bottom_frame.bind(ce, h)(), _e = fe(p(h)), ve = !1, ye = /\/+/g, be = typeof reportError == "function" ? reportError : function(e) {
			if (typeof window == "object" && typeof window.ErrorEvent == "function") {
				var t = new window.ErrorEvent("error", {
					bubbles: !0,
					cancelable: !0,
					message: typeof e == "object" && e && typeof e.message == "string" ? String(e.message) : String(e),
					error: e
				});
				if (!window.dispatchEvent(t)) return;
			} else if (typeof process == "object" && typeof process.emit == "function") {
				process.emit("uncaughtException", e);
				return;
			}
			console.error(e);
		}, xe = !1, Se = null, Ce = 0, we = !1, q = !1, Te = typeof queueMicrotask == "function" ? function(e) {
			queueMicrotask(function() {
				return queueMicrotask(e);
			});
		} : j;
		ce = Object.freeze({
			__proto__: null,
			c: function(e) {
				return k().useMemoCache(e);
			}
		});
		var Ee = {
			map: D,
			forEach: function(e, t, n) {
				D(e, function() {
					t.apply(this, arguments);
				}, n);
			},
			count: function(e) {
				var t = 0;
				return D(e, function() {
					t++;
				}), t;
			},
			toArray: function(e) {
				return D(e, function(e) {
					return e;
				}) || [];
			},
			only: function(e) {
				if (!S(e)) throw Error("React.Children.only expected to receive a single React element child.");
				return e;
			}
		};
		e.Activity = re, e.Children = Ee, e.Component = o, e.Fragment = R, e.Profiler = z, e.PureComponent = c, e.StrictMode = ee, e.Suspense = H, e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = K, e.__COMPILER_RUNTIME = ce, e.act = function(e) {
			var t = K.actQueue, n = Ce;
			Ce++;
			var i = K.actQueue = t === null ? [] : t, a = !1;
			try {
				var o = e();
			} catch (e) {
				K.thrownErrors.push(e);
			}
			if (0 < K.thrownErrors.length) throw N(t, n), e = M(K.thrownErrors), K.thrownErrors.length = 0, e;
			if (typeof o == "object" && o && typeof o.then == "function") {
				var s = o;
				return Te(function() {
					a || we || (we = !0, console.error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
				}), { then: function(e, o) {
					a = !0, s.then(function(a) {
						if (N(t, n), n === 0) {
							try {
								F(i), j(function() {
									return P(a, e, o);
								});
							} catch (e) {
								K.thrownErrors.push(e);
							}
							if (0 < K.thrownErrors.length) {
								var s = M(K.thrownErrors);
								K.thrownErrors.length = 0, o(s);
							}
						} else e(a);
					}, function(e) {
						N(t, n), 0 < K.thrownErrors.length ? (e = M(K.thrownErrors), K.thrownErrors.length = 0, o(e)) : o(e);
					});
				} };
			}
			var c = o;
			if (N(t, n), n === 0 && (F(i), i.length !== 0 && Te(function() {
				a || we || (we = !0, console.error("A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"));
			}), K.actQueue = null), 0 < K.thrownErrors.length) throw e = M(K.thrownErrors), K.thrownErrors.length = 0, e;
			return { then: function(e, t) {
				a = !0, n === 0 ? (K.actQueue = i, j(function() {
					return P(c, e, t);
				})) : e(c);
			} };
		}, e.cache = function(e) {
			return function() {
				return e.apply(null, arguments);
			};
		}, e.cacheSignal = function() {
			return null;
		}, e.captureOwnerStack = function() {
			var e = K.getCurrentStack;
			return e === null ? null : e();
		}, e.cloneElement = function(e, t, n) {
			if (e == null) throw Error("The argument must be a React element, but you passed " + e + ".");
			var i = se({}, e.props), a = e.key, o = e._owner;
			if (t != null) {
				var s;
				a: {
					if (de.call(t, "ref") && (s = Object.getOwnPropertyDescriptor(t, "ref").get) && s.isReactWarning) {
						s = !1;
						break a;
					}
					s = t.ref !== void 0;
				}
				for (c in s && (o = m()), g(t) && (d(t.key), a = "" + t.key), t) !de.call(t, c) || c === "key" || c === "__self" || c === "__source" || c === "ref" && t.ref === void 0 || (i[c] = t[c]);
			}
			var c = arguments.length - 2;
			if (c === 1) i.children = n;
			else if (1 < c) {
				s = Array(c);
				for (var l = 0; l < c; l++) s[l] = arguments[l + 2];
				i.children = s;
			}
			for (i = y(e.type, a, i, o, e._debugStack, e._debugTask), a = 2; a < arguments.length; a++) x(arguments[a]);
			return i;
		}, e.createContext = function(e) {
			return e = {
				$$typeof: V,
				_currentValue: e,
				_currentValue2: e,
				_threadCount: 0,
				Provider: null,
				Consumer: null
			}, e.Provider = e, e.Consumer = {
				$$typeof: B,
				_context: e
			}, e._currentRenderer = null, e._currentRenderer2 = null, e;
		}, e.createElement = function(e, t, n) {
			for (var i = 2; i < arguments.length; i++) x(arguments[i]);
			i = {};
			var a = null;
			if (t != null) for (l in me || !("__self" in t) || "key" in t || (me = !0, console.warn("Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform")), g(t) && (d(t.key), a = "" + t.key), t) de.call(t, l) && l !== "key" && l !== "__self" && l !== "__source" && (i[l] = t[l]);
			var o = arguments.length - 2;
			if (o === 1) i.children = n;
			else if (1 < o) {
				for (var s = Array(o), c = 0; c < o; c++) s[c] = arguments[c + 2];
				Object.freeze && Object.freeze(s), i.children = s;
			}
			if (e && e.defaultProps) for (l in o = e.defaultProps, o) i[l] === void 0 && (i[l] = o[l]);
			a && _(i, typeof e == "function" ? e.displayName || e.name || "Unknown" : e);
			var l = 1e4 > K.recentlyCreatedOwnerStacks++;
			return y(e, a, i, m(), l ? Error("react-stack-top-frame") : ge, l ? fe(p(e)) : _e);
		}, e.createRef = function() {
			var e = { current: null };
			return Object.seal(e), e;
		}, e.forwardRef = function(e) {
			e != null && e.$$typeof === ne ? console.error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof e == "function" ? e.length !== 0 && e.length !== 2 && console.error("forwardRef render functions accept exactly two parameters: props and ref. %s", e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.") : console.error("forwardRef requires a render function but was given %s.", e === null ? "null" : typeof e), e != null && e.defaultProps != null && console.error("forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?");
			var t = {
				$$typeof: te,
				render: e
			}, n;
			return Object.defineProperty(t, "displayName", {
				enumerable: !1,
				configurable: !0,
				get: function() {
					return n;
				},
				set: function(t) {
					n = t, e.name || e.displayName || (Object.defineProperty(e, "name", { value: t }), e.displayName = t);
				}
			}), t;
		}, e.isValidElement = S, e.lazy = function(e) {
			e = {
				_status: -1,
				_result: e
			};
			var t = {
				$$typeof: W,
				_payload: e,
				_init: O
			}, n = {
				name: "lazy",
				start: -1,
				end: -1,
				value: null,
				owner: null,
				debugStack: Error("react-stack-top-frame"),
				debugTask: console.createTask ? console.createTask("lazy()") : null
			};
			return e._ioInfo = n, t._debugInfo = [{ awaited: n }], t;
		}, e.memo = function(e, t) {
			e ?? console.error("memo: The first argument must be a component. Instead received: %s", e === null ? "null" : typeof e), t = {
				$$typeof: ne,
				type: e,
				compare: t === void 0 ? null : t
			};
			var n;
			return Object.defineProperty(t, "displayName", {
				enumerable: !1,
				configurable: !0,
				get: function() {
					return n;
				},
				set: function(t) {
					n = t, e.name || e.displayName || (Object.defineProperty(e, "name", { value: t }), e.displayName = t);
				}
			}), t;
		}, e.startTransition = function(e) {
			var t = K.T, n = {};
			n._updatedFibers = /* @__PURE__ */ new Set(), K.T = n;
			try {
				var i = e(), a = K.S;
				a !== null && a(n, i), typeof i == "object" && i && typeof i.then == "function" && (K.asyncTransitions++, i.then(A, A), i.then(l, be));
			} catch (e) {
				be(e);
			} finally {
				t === null && n._updatedFibers && (e = n._updatedFibers.size, n._updatedFibers.clear(), 10 < e && console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.")), t !== null && n.types !== null && (t.types !== null && t.types !== n.types && console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."), t.types = n.types), K.T = t;
			}
		}, e.unstable_useCacheRefresh = function() {
			return k().useCacheRefresh();
		}, e.use = function(e) {
			return k().use(e);
		}, e.useActionState = function(e, t, n) {
			return k().useActionState(e, t, n);
		}, e.useCallback = function(e, t) {
			return k().useCallback(e, t);
		}, e.useContext = function(e) {
			var t = k();
			return e.$$typeof === B && console.error("Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"), t.useContext(e);
		}, e.useDebugValue = function(e, t) {
			return k().useDebugValue(e, t);
		}, e.useDeferredValue = function(e, t) {
			return k().useDeferredValue(e, t);
		}, e.useEffect = function(e, t) {
			return e ?? console.warn("React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"), k().useEffect(e, t);
		}, e.useEffectEvent = function(e) {
			return k().useEffectEvent(e);
		}, e.useId = function() {
			return k().useId();
		}, e.useImperativeHandle = function(e, t, n) {
			return k().useImperativeHandle(e, t, n);
		}, e.useInsertionEffect = function(e, t) {
			return e ?? console.warn("React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"), k().useInsertionEffect(e, t);
		}, e.useLayoutEffect = function(e, t) {
			return e ?? console.warn("React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"), k().useLayoutEffect(e, t);
		}, e.useMemo = function(e, t) {
			return k().useMemo(e, t);
		}, e.useOptimistic = function(e, t) {
			return k().useOptimistic(e, t);
		}, e.useReducer = function(e, t, n) {
			return k().useReducer(e, t, n);
		}, e.useRef = function(e) {
			return k().useRef(e);
		}, e.useState = function(e) {
			return k().useState(e);
		}, e.useSyncExternalStore = function(e, t, n) {
			return k().useSyncExternalStore(e, t, n);
		}, e.useTransition = function() {
			return k().useTransition();
		}, e.version = "19.2.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
	})();
})), require_react = /* @__PURE__ */ __commonJSMin(((e, t) => {
	process.env.NODE_ENV === "production" ? t.exports = require_react_production() : t.exports = require_react_development();
})), require_react_dom_production = /* @__PURE__ */ __commonJSMin(((e) => {
	var t = require_react();
	function n(e) {
		var t = "https://react.dev/errors/" + e;
		if (1 < arguments.length) {
			t += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
		}
		return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	function i() {}
	var a = {
		d: {
			f: i,
			r: function() {
				throw Error(n(522));
			},
			D: i,
			C: i,
			L: i,
			m: i,
			X: i,
			S: i,
			M: i
		},
		p: 0,
		findDOMNode: null
	}, o = Symbol.for("react.portal");
	function s(e, t, n) {
		var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
		return {
			$$typeof: o,
			key: i == null ? null : "" + i,
			children: e,
			containerInfo: t,
			implementation: n
		};
	}
	var c = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	function l(e, t) {
		if (e === "font") return "";
		if (typeof t == "string") return t === "use-credentials" ? t : "";
	}
	e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = a, e.createPortal = function(e, t) {
		var i = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
		if (!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11) throw Error(n(299));
		return s(e, t, null, i);
	}, e.flushSync = function(e) {
		var t = c.T, n = a.p;
		try {
			if (c.T = null, a.p = 2, e) return e();
		} finally {
			c.T = t, a.p = n, a.d.f();
		}
	}, e.preconnect = function(e, t) {
		typeof e == "string" && (t ? (t = t.crossOrigin, t = typeof t == "string" ? t === "use-credentials" ? t : "" : void 0) : t = null, a.d.C(e, t));
	}, e.prefetchDNS = function(e) {
		typeof e == "string" && a.d.D(e);
	}, e.preinit = function(e, t) {
		if (typeof e == "string" && t && typeof t.as == "string") {
			var n = t.as, i = l(n, t.crossOrigin), o = typeof t.integrity == "string" ? t.integrity : void 0, s = typeof t.fetchPriority == "string" ? t.fetchPriority : void 0;
			n === "style" ? a.d.S(e, typeof t.precedence == "string" ? t.precedence : void 0, {
				crossOrigin: i,
				integrity: o,
				fetchPriority: s
			}) : n === "script" && a.d.X(e, {
				crossOrigin: i,
				integrity: o,
				fetchPriority: s,
				nonce: typeof t.nonce == "string" ? t.nonce : void 0
			});
		}
	}, e.preinitModule = function(e, t) {
		if (typeof e == "string") if (typeof t == "object" && t) {
			if (t.as == null || t.as === "script") {
				var n = l(t.as, t.crossOrigin);
				a.d.M(e, {
					crossOrigin: n,
					integrity: typeof t.integrity == "string" ? t.integrity : void 0,
					nonce: typeof t.nonce == "string" ? t.nonce : void 0
				});
			}
		} else t ?? a.d.M(e);
	}, e.preload = function(e, t) {
		if (typeof e == "string" && typeof t == "object" && t && typeof t.as == "string") {
			var n = t.as, i = l(n, t.crossOrigin);
			a.d.L(e, n, {
				crossOrigin: i,
				integrity: typeof t.integrity == "string" ? t.integrity : void 0,
				nonce: typeof t.nonce == "string" ? t.nonce : void 0,
				type: typeof t.type == "string" ? t.type : void 0,
				fetchPriority: typeof t.fetchPriority == "string" ? t.fetchPriority : void 0,
				referrerPolicy: typeof t.referrerPolicy == "string" ? t.referrerPolicy : void 0,
				imageSrcSet: typeof t.imageSrcSet == "string" ? t.imageSrcSet : void 0,
				imageSizes: typeof t.imageSizes == "string" ? t.imageSizes : void 0,
				media: typeof t.media == "string" ? t.media : void 0
			});
		}
	}, e.preloadModule = function(e, t) {
		if (typeof e == "string") if (t) {
			var n = l(t.as, t.crossOrigin);
			a.d.m(e, {
				as: typeof t.as == "string" && t.as !== "script" ? t.as : void 0,
				crossOrigin: n,
				integrity: typeof t.integrity == "string" ? t.integrity : void 0
			});
		} else a.d.m(e);
	}, e.requestFormReset = function(e) {
		a.d.r(e);
	}, e.unstable_batchedUpdates = function(e, t) {
		return e(t);
	}, e.useFormState = function(e, t, n) {
		return c.H.useFormState(e, t, n);
	}, e.useFormStatus = function() {
		return c.H.useHostTransitionStatus();
	}, e.version = "19.2.0";
})), require_react_dom_development = /* @__PURE__ */ __commonJSMin(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		function t() {}
		function n(e) {
			return "" + e;
		}
		function i(e, t, i) {
			var a = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
			try {
				n(a);
				var o = !1;
			} catch {
				o = !0;
			}
			return o && (console.error("The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", typeof Symbol == "function" && Symbol.toStringTag && a[Symbol.toStringTag] || a.constructor.name || "Object"), n(a)), {
				$$typeof: d,
				key: a == null ? null : "" + a,
				children: e,
				containerInfo: t,
				implementation: i
			};
		}
		function a(e, t) {
			if (e === "font") return "";
			if (typeof t == "string") return t === "use-credentials" ? t : "";
		}
		function o(e) {
			return e === null ? "`null`" : e === void 0 ? "`undefined`" : e === "" ? "an empty string" : "something with type \"" + typeof e + "\"";
		}
		function s(e) {
			return e === null ? "`null`" : e === void 0 ? "`undefined`" : e === "" ? "an empty string" : typeof e == "string" ? JSON.stringify(e) : typeof e == "number" ? "`" + e + "`" : "something with type \"" + typeof e + "\"";
		}
		function c() {
			var e = p.H;
			return e === null && console.error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem."), e;
		}
		typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
		var l = require_react(), u = {
			d: {
				f: t,
				r: function() {
					throw Error("Invalid form element. requestFormReset must be passed a form that was rendered by React.");
				},
				D: t,
				C: t,
				L: t,
				m: t,
				X: t,
				S: t,
				M: t
			},
			p: 0,
			findDOMNode: null
		}, d = Symbol.for("react.portal"), p = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
		typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = u, e.createPortal = function(e, t) {
			var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
			if (!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11) throw Error("Target container is not a DOM element.");
			return i(e, t, null, n);
		}, e.flushSync = function(e) {
			var t = p.T, n = u.p;
			try {
				if (p.T = null, u.p = 2, e) return e();
			} finally {
				p.T = t, u.p = n, u.d.f() && console.error("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task.");
			}
		}, e.preconnect = function(e, t) {
			typeof e == "string" && e ? t != null && typeof t != "object" ? console.error("ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.", s(t)) : t != null && typeof t.crossOrigin != "string" && console.error("ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.", o(t.crossOrigin)) : console.error("ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.", o(e)), typeof e == "string" && (t ? (t = t.crossOrigin, t = typeof t == "string" ? t === "use-credentials" ? t : "" : void 0) : t = null, u.d.C(e, t));
		}, e.prefetchDNS = function(e) {
			if (typeof e != "string" || !e) console.error("ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.", o(e));
			else if (1 < arguments.length) {
				var t = arguments[1];
				typeof t == "object" && t.hasOwnProperty("crossOrigin") ? console.error("ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.", s(t)) : console.error("ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.", s(t));
			}
			typeof e == "string" && u.d.D(e);
		}, e.preinit = function(e, t) {
			if (typeof e == "string" && e ? typeof t != "object" || !t ? console.error("ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.", s(t)) : t.as !== "style" && t.as !== "script" && console.error("ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are \"style\" and \"script\".", s(t.as)) : console.error("ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.", o(e)), typeof e == "string" && t && typeof t.as == "string") {
				var n = t.as, i = a(n, t.crossOrigin), c = typeof t.integrity == "string" ? t.integrity : void 0, l = typeof t.fetchPriority == "string" ? t.fetchPriority : void 0;
				n === "style" ? u.d.S(e, typeof t.precedence == "string" ? t.precedence : void 0, {
					crossOrigin: i,
					integrity: c,
					fetchPriority: l
				}) : n === "script" && u.d.X(e, {
					crossOrigin: i,
					integrity: c,
					fetchPriority: l,
					nonce: typeof t.nonce == "string" ? t.nonce : void 0
				});
			}
		}, e.preinitModule = function(e, t) {
			var n = "";
			if (typeof e == "string" && e || (n += " The `href` argument encountered was " + o(e) + "."), t !== void 0 && typeof t != "object" ? n += " The `options` argument encountered was " + o(t) + "." : t && "as" in t && t.as !== "script" && (n += " The `as` option encountered was " + s(t.as) + "."), n) console.error("ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s", n);
			else switch (n = t && typeof t.as == "string" ? t.as : "script", n) {
				case "script": break;
				default: n = s(n), console.error("ReactDOM.preinitModule(): Currently the only supported \"as\" type for this function is \"script\" but received \"%s\" instead. This warning was generated for `href` \"%s\". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)", n, e);
			}
			typeof e == "string" && (typeof t == "object" && t ? (t.as == null || t.as === "script") && (n = a(t.as, t.crossOrigin), u.d.M(e, {
				crossOrigin: n,
				integrity: typeof t.integrity == "string" ? t.integrity : void 0,
				nonce: typeof t.nonce == "string" ? t.nonce : void 0
			})) : t ?? u.d.M(e));
		}, e.preload = function(e, t) {
			var n = "";
			if (typeof e == "string" && e || (n += " The `href` argument encountered was " + o(e) + "."), typeof t != "object" || !t ? n += " The `options` argument encountered was " + o(t) + "." : typeof t.as == "string" && t.as || (n += " The `as` option encountered was " + o(t.as) + "."), n && console.error("ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel=\"preload\" as=\"...\" />` tag.%s", n), typeof e == "string" && typeof t == "object" && t && typeof t.as == "string") {
				n = t.as;
				var i = a(n, t.crossOrigin);
				u.d.L(e, n, {
					crossOrigin: i,
					integrity: typeof t.integrity == "string" ? t.integrity : void 0,
					nonce: typeof t.nonce == "string" ? t.nonce : void 0,
					type: typeof t.type == "string" ? t.type : void 0,
					fetchPriority: typeof t.fetchPriority == "string" ? t.fetchPriority : void 0,
					referrerPolicy: typeof t.referrerPolicy == "string" ? t.referrerPolicy : void 0,
					imageSrcSet: typeof t.imageSrcSet == "string" ? t.imageSrcSet : void 0,
					imageSizes: typeof t.imageSizes == "string" ? t.imageSizes : void 0,
					media: typeof t.media == "string" ? t.media : void 0
				});
			}
		}, e.preloadModule = function(e, t) {
			var n = "";
			typeof e == "string" && e || (n += " The `href` argument encountered was " + o(e) + "."), t !== void 0 && typeof t != "object" ? n += " The `options` argument encountered was " + o(t) + "." : t && "as" in t && typeof t.as != "string" && (n += " The `as` option encountered was " + o(t.as) + "."), n && console.error("ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel=\"modulepreload\" as=\"...\" />` tag.%s", n), typeof e == "string" && (t ? (n = a(t.as, t.crossOrigin), u.d.m(e, {
				as: typeof t.as == "string" && t.as !== "script" ? t.as : void 0,
				crossOrigin: n,
				integrity: typeof t.integrity == "string" ? t.integrity : void 0
			})) : u.d.m(e));
		}, e.requestFormReset = function(e) {
			u.d.r(e);
		}, e.unstable_batchedUpdates = function(e, t) {
			return e(t);
		}, e.useFormState = function(e, t, n) {
			return c().useFormState(e, t, n);
		}, e.useFormStatus = function() {
			return c().useHostTransitionStatus();
		}, e.version = "19.2.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
	})();
})), require_react_dom = /* @__PURE__ */ __commonJSMin(((e, t) => {
	function n() {
		if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
			if (process.env.NODE_ENV !== "production") throw Error("^_^");
			try {
				__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
			} catch (e) {
				console.error(e);
			}
		}
	}
	process.env.NODE_ENV === "production" ? (n(), t.exports = require_react_dom_production()) : t.exports = require_react_dom_development();
})), require_react_dom_server_legacy_browser_production = /* @__PURE__ */ __commonJSMin(((e) => {
	var t = require_react(), n = require_react_dom();
	function i(e) {
		var t = "https://react.dev/errors/" + e;
		if (1 < arguments.length) {
			t += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
		}
		return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	var a = Symbol.for("react.transitional.element"), o = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), u = Symbol.for("react.consumer"), d = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), y = Symbol.for("react.scope"), b = Symbol.for("react.activity"), x = Symbol.for("react.legacy_hidden"), S = Symbol.for("react.memo_cache_sentinel"), C = Symbol.for("react.view_transition"), w = Symbol.iterator;
	function T(e) {
		return typeof e != "object" || !e ? null : (e = w && e[w] || e["@@iterator"], typeof e == "function" ? e : null);
	}
	var E = Array.isArray;
	function D(e, t) {
		var n = e.length & 3, i = e.length - n, a = t;
		for (t = 0; t < i;) {
			var o = e.charCodeAt(t) & 255 | (e.charCodeAt(++t) & 255) << 8 | (e.charCodeAt(++t) & 255) << 16 | (e.charCodeAt(++t) & 255) << 24;
			++t, o = 3432918353 * (o & 65535) + ((3432918353 * (o >>> 16) & 65535) << 16) & 4294967295, o = o << 15 | o >>> 17, o = 461845907 * (o & 65535) + ((461845907 * (o >>> 16) & 65535) << 16) & 4294967295, a ^= o, a = a << 13 | a >>> 19, a = 5 * (a & 65535) + ((5 * (a >>> 16) & 65535) << 16) & 4294967295, a = (a & 65535) + 27492 + (((a >>> 16) + 58964 & 65535) << 16);
		}
		switch (o = 0, n) {
			case 3: o ^= (e.charCodeAt(t + 2) & 255) << 16;
			case 2: o ^= (e.charCodeAt(t + 1) & 255) << 8;
			case 1: o ^= e.charCodeAt(t) & 255, o = 3432918353 * (o & 65535) + ((3432918353 * (o >>> 16) & 65535) << 16) & 4294967295, o = o << 15 | o >>> 17, a ^= 461845907 * (o & 65535) + ((461845907 * (o >>> 16) & 65535) << 16) & 4294967295;
		}
		return a ^= e.length, a ^= a >>> 16, a = 2246822507 * (a & 65535) + ((2246822507 * (a >>> 16) & 65535) << 16) & 4294967295, a ^= a >>> 13, a = 3266489909 * (a & 65535) + ((3266489909 * (a >>> 16) & 65535) << 16) & 4294967295, (a ^ a >>> 16) >>> 0;
	}
	var O = Object.assign, k = Object.prototype.hasOwnProperty, A = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), j = {}, M = {};
	function N(e) {
		return k.call(M, e) ? !0 : k.call(j, e) ? !1 : A.test(e) ? M[e] = !0 : (j[e] = !0, !1);
	}
	var P = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" ")), F = new Map([
		["acceptCharset", "accept-charset"],
		["htmlFor", "for"],
		["httpEquiv", "http-equiv"],
		["crossOrigin", "crossorigin"],
		["accentHeight", "accent-height"],
		["alignmentBaseline", "alignment-baseline"],
		["arabicForm", "arabic-form"],
		["baselineShift", "baseline-shift"],
		["capHeight", "cap-height"],
		["clipPath", "clip-path"],
		["clipRule", "clip-rule"],
		["colorInterpolation", "color-interpolation"],
		["colorInterpolationFilters", "color-interpolation-filters"],
		["colorProfile", "color-profile"],
		["colorRendering", "color-rendering"],
		["dominantBaseline", "dominant-baseline"],
		["enableBackground", "enable-background"],
		["fillOpacity", "fill-opacity"],
		["fillRule", "fill-rule"],
		["floodColor", "flood-color"],
		["floodOpacity", "flood-opacity"],
		["fontFamily", "font-family"],
		["fontSize", "font-size"],
		["fontSizeAdjust", "font-size-adjust"],
		["fontStretch", "font-stretch"],
		["fontStyle", "font-style"],
		["fontVariant", "font-variant"],
		["fontWeight", "font-weight"],
		["glyphName", "glyph-name"],
		["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
		["glyphOrientationVertical", "glyph-orientation-vertical"],
		["horizAdvX", "horiz-adv-x"],
		["horizOriginX", "horiz-origin-x"],
		["imageRendering", "image-rendering"],
		["letterSpacing", "letter-spacing"],
		["lightingColor", "lighting-color"],
		["markerEnd", "marker-end"],
		["markerMid", "marker-mid"],
		["markerStart", "marker-start"],
		["overlinePosition", "overline-position"],
		["overlineThickness", "overline-thickness"],
		["paintOrder", "paint-order"],
		["panose-1", "panose-1"],
		["pointerEvents", "pointer-events"],
		["renderingIntent", "rendering-intent"],
		["shapeRendering", "shape-rendering"],
		["stopColor", "stop-color"],
		["stopOpacity", "stop-opacity"],
		["strikethroughPosition", "strikethrough-position"],
		["strikethroughThickness", "strikethrough-thickness"],
		["strokeDasharray", "stroke-dasharray"],
		["strokeDashoffset", "stroke-dashoffset"],
		["strokeLinecap", "stroke-linecap"],
		["strokeLinejoin", "stroke-linejoin"],
		["strokeMiterlimit", "stroke-miterlimit"],
		["strokeOpacity", "stroke-opacity"],
		["strokeWidth", "stroke-width"],
		["textAnchor", "text-anchor"],
		["textDecoration", "text-decoration"],
		["textRendering", "text-rendering"],
		["transformOrigin", "transform-origin"],
		["underlinePosition", "underline-position"],
		["underlineThickness", "underline-thickness"],
		["unicodeBidi", "unicode-bidi"],
		["unicodeRange", "unicode-range"],
		["unitsPerEm", "units-per-em"],
		["vAlphabetic", "v-alphabetic"],
		["vHanging", "v-hanging"],
		["vIdeographic", "v-ideographic"],
		["vMathematical", "v-mathematical"],
		["vectorEffect", "vector-effect"],
		["vertAdvY", "vert-adv-y"],
		["vertOriginX", "vert-origin-x"],
		["vertOriginY", "vert-origin-y"],
		["wordSpacing", "word-spacing"],
		["writingMode", "writing-mode"],
		["xmlnsXlink", "xmlns:xlink"],
		["xHeight", "x-height"]
	]), I = /["'&<>]/;
	function L(e) {
		if (typeof e == "boolean" || typeof e == "number" || typeof e == "bigint") return "" + e;
		e = "" + e;
		var t = I.exec(e);
		if (t) {
			var n = "", i, a = 0;
			for (i = t.index; i < e.length; i++) {
				switch (e.charCodeAt(i)) {
					case 34:
						t = "&quot;";
						break;
					case 38:
						t = "&amp;";
						break;
					case 39:
						t = "&#x27;";
						break;
					case 60:
						t = "&lt;";
						break;
					case 62:
						t = "&gt;";
						break;
					default: continue;
				}
				a !== i && (n += e.slice(a, i)), a = i + 1, n += t;
			}
			e = a === i ? n : n + e.slice(a, i);
		}
		return e;
	}
	var R = /([A-Z])/g, ee = /^ms-/, z = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
	function B(e) {
		return z.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
	}
	var V = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, te = n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, H = {
		pending: !1,
		data: null,
		method: null,
		action: null
	}, U = te.d;
	te.d = {
		f: U.f,
		r: U.r,
		D: nt,
		C: rt,
		L: it,
		m: at,
		X: st,
		S: ot,
		M: ct
	};
	var ne = [], W = null, re = /(<\/|<)(s)(cript)/gi;
	function ie(e, t, n, i) {
		return "" + t + (n === "s" ? "\\u0073" : "\\u0053") + i;
	}
	function ae(e, t, n, i, a) {
		return {
			idPrefix: e === void 0 ? "" : e,
			nextFormID: 0,
			streamingFormat: 0,
			bootstrapScriptContent: n,
			bootstrapScripts: i,
			bootstrapModules: a,
			instructions: 0,
			hasBody: !1,
			hasHtml: !1,
			unknownResources: {},
			dnsResources: {},
			connectResources: {
				default: {},
				anonymous: {},
				credentials: {}
			},
			imageResources: {},
			styleResources: {},
			scriptResources: {},
			moduleUnknownResources: {},
			moduleScriptResources: {}
		};
	}
	function oe(e, t, n, i) {
		return {
			insertionMode: e,
			selectedValue: t,
			tagScope: n,
			viewTransition: i
		};
	}
	function se(e, t, n) {
		var i = e.tagScope & -25;
		switch (t) {
			case "noscript": return oe(2, null, i | 1, null);
			case "select": return oe(2, n.value == null ? n.defaultValue : n.value, i, null);
			case "svg": return oe(4, null, i, null);
			case "picture": return oe(2, null, i | 2, null);
			case "math": return oe(5, null, i, null);
			case "foreignObject": return oe(2, null, i, null);
			case "table": return oe(6, null, i, null);
			case "thead":
			case "tbody":
			case "tfoot": return oe(7, null, i, null);
			case "colgroup": return oe(9, null, i, null);
			case "tr": return oe(8, null, i, null);
			case "head":
				if (2 > e.insertionMode) return oe(3, null, i, null);
				break;
			case "html": if (e.insertionMode === 0) return oe(1, null, i, null);
		}
		return 6 <= e.insertionMode || 2 > e.insertionMode ? oe(2, null, i, null) : e.tagScope === i ? e : oe(e.insertionMode, e.selectedValue, i, null);
	}
	function G(e) {
		return e === null ? null : {
			update: e.update,
			enter: "none",
			exit: "none",
			share: e.update,
			name: e.autoName,
			autoName: e.autoName,
			nameIdx: 0
		};
	}
	function ce(e, t) {
		return t.tagScope & 32 && (e.instructions |= 128), oe(t.insertionMode, t.selectedValue, t.tagScope | 12, G(t.viewTransition));
	}
	function le(e, t) {
		e = G(t.viewTransition);
		var n = t.tagScope | 16;
		return e !== null && e.share !== "none" && (n |= 64), oe(t.insertionMode, t.selectedValue, n, e);
	}
	var ue = /* @__PURE__ */ new Map();
	function K(e, t) {
		if (typeof t != "object") throw Error(i(62));
		var n = !0, a;
		for (a in t) if (k.call(t, a)) {
			var o = t[a];
			if (o != null && typeof o != "boolean" && o !== "") {
				if (a.indexOf("--") === 0) {
					var s = L(a);
					o = L(("" + o).trim());
				} else s = ue.get(a), s === void 0 && (s = L(a.replace(R, "-$1").toLowerCase().replace(ee, "-ms-")), ue.set(a, s)), o = typeof o == "number" ? o === 0 || P.has(a) ? "" + o : o + "px" : L(("" + o).trim());
				n ? (n = !1, e.push(" style=\"", s, ":", o)) : e.push(";", s, ":", o);
			}
		}
		n || e.push("\"");
	}
	function de(e, t, n) {
		n && typeof n != "function" && typeof n != "symbol" && e.push(" ", t, "=\"\"");
	}
	function fe(e, t, n) {
		typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && e.push(" ", t, "=\"", L(n), "\"");
	}
	var pe = L("javascript:throw new Error('React form unexpectedly submitted.')");
	function me(e, t) {
		this.push("<input type=\"hidden\""), he(e), fe(this, "name", t), fe(this, "value", e), this.push("/>");
	}
	function he(e) {
		if (typeof e != "string") throw Error(i(480));
	}
	function ge(e, t) {
		if (typeof t.$$FORM_ACTION == "function") {
			var n = e.nextFormID++;
			e = e.idPrefix + n;
			try {
				var i = t.$$FORM_ACTION(e);
				return i && i.data?.forEach(he), i;
			} catch (e) {
				if (typeof e == "object" && e && typeof e.then == "function") throw e;
			}
		}
		return null;
	}
	function _e(e, t, n, i, a, o, s, c) {
		var l = null;
		if (typeof i == "function") {
			var u = ge(t, i);
			u === null ? (e.push(" ", "formAction", "=\"", pe, "\""), s = o = a = i = c = null, xe(t, n)) : (c = u.name, i = u.action || "", a = u.encType, o = u.method, s = u.target, l = u.data);
		}
		return c != null && ve(e, "name", c), i != null && ve(e, "formAction", i), a != null && ve(e, "formEncType", a), o != null && ve(e, "formMethod", o), s != null && ve(e, "formTarget", s), l;
	}
	function ve(e, t, n) {
		switch (t) {
			case "className":
				fe(e, "class", n);
				break;
			case "tabIndex":
				fe(e, "tabindex", n);
				break;
			case "dir":
			case "role":
			case "viewBox":
			case "width":
			case "height":
				fe(e, t, n);
				break;
			case "style":
				K(e, n);
				break;
			case "src":
			case "href": if (n === "") break;
			case "action":
			case "formAction":
				if (n == null || typeof n == "function" || typeof n == "symbol" || typeof n == "boolean") break;
				n = B("" + n), e.push(" ", t, "=\"", L(n), "\"");
				break;
			case "defaultValue":
			case "defaultChecked":
			case "innerHTML":
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "ref": break;
			case "autoFocus":
			case "multiple":
			case "muted":
				de(e, t.toLowerCase(), n);
				break;
			case "xlinkHref":
				if (typeof n == "function" || typeof n == "symbol" || typeof n == "boolean") break;
				n = B("" + n), e.push(" ", "xlink:href", "=\"", L(n), "\"");
				break;
			case "contentEditable":
			case "spellCheck":
			case "draggable":
			case "value":
			case "autoReverse":
			case "externalResourcesRequired":
			case "focusable":
			case "preserveAlpha":
				typeof n != "function" && typeof n != "symbol" && e.push(" ", t, "=\"", L(n), "\"");
				break;
			case "inert":
			case "allowFullScreen":
			case "async":
			case "autoPlay":
			case "controls":
			case "default":
			case "defer":
			case "disabled":
			case "disablePictureInPicture":
			case "disableRemotePlayback":
			case "formNoValidate":
			case "hidden":
			case "loop":
			case "noModule":
			case "noValidate":
			case "open":
			case "playsInline":
			case "readOnly":
			case "required":
			case "reversed":
			case "scoped":
			case "seamless":
			case "itemScope":
				n && typeof n != "function" && typeof n != "symbol" && e.push(" ", t, "=\"\"");
				break;
			case "capture":
			case "download":
				!0 === n ? e.push(" ", t, "=\"\"") : !1 !== n && typeof n != "function" && typeof n != "symbol" && e.push(" ", t, "=\"", L(n), "\"");
				break;
			case "cols":
			case "rows":
			case "size":
			case "span":
				typeof n != "function" && typeof n != "symbol" && !isNaN(n) && 1 <= n && e.push(" ", t, "=\"", L(n), "\"");
				break;
			case "rowSpan":
			case "start":
				typeof n == "function" || typeof n == "symbol" || isNaN(n) || e.push(" ", t, "=\"", L(n), "\"");
				break;
			case "xlinkActuate":
				fe(e, "xlink:actuate", n);
				break;
			case "xlinkArcrole":
				fe(e, "xlink:arcrole", n);
				break;
			case "xlinkRole":
				fe(e, "xlink:role", n);
				break;
			case "xlinkShow":
				fe(e, "xlink:show", n);
				break;
			case "xlinkTitle":
				fe(e, "xlink:title", n);
				break;
			case "xlinkType":
				fe(e, "xlink:type", n);
				break;
			case "xmlBase":
				fe(e, "xml:base", n);
				break;
			case "xmlLang":
				fe(e, "xml:lang", n);
				break;
			case "xmlSpace":
				fe(e, "xml:space", n);
				break;
			default: if ((!(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (t = F.get(t) || t, N(t))) {
				switch (typeof n) {
					case "function":
					case "symbol": return;
					case "boolean":
						var i = t.toLowerCase().slice(0, 5);
						if (i !== "data-" && i !== "aria-") return;
				}
				e.push(" ", t, "=\"", L(n), "\"");
			}
		}
	}
	function ye(e, t, n) {
		if (t != null) {
			if (n != null) throw Error(i(60));
			if (typeof t != "object" || !("__html" in t)) throw Error(i(61));
			t = t.__html, t != null && e.push("" + t);
		}
	}
	function be(e) {
		var n = "";
		return t.Children.forEach(e, function(e) {
			e != null && (n += e);
		}), n;
	}
	function xe(e, t) {
		if (!(e.instructions & 16)) {
			e.instructions |= 16;
			var n = t.preamble, i = t.bootstrapChunks;
			(n.htmlChunks || n.headChunks) && i.length === 0 ? (i.push(t.startInlineScript), Qe(i, e), i.push(">", "addEventListener(\"submit\",function(a){if(!a.defaultPrevented){var c=a.target,d=a.submitter,e=c.action,b=d;if(d){var f=d.getAttribute(\"formAction\");null!=f&&(e=f,b=null)}\"javascript:throw new Error('React form unexpectedly submitted.')\"===e&&(a.preventDefault(),b?(a=document.createElement(\"input\"),a.name=b.name,a.value=b.value,b.parentNode.insertBefore(a,b),b=new FormData(c),a.parentNode.removeChild(a)):b=new FormData(c),a=c.ownerDocument||c,(a.$$reactFormReplay=a.$$reactFormReplay||[]).push(c,d,b))}});", "<\/script>")) : i.unshift(t.startInlineScript, ">", "addEventListener(\"submit\",function(a){if(!a.defaultPrevented){var c=a.target,d=a.submitter,e=c.action,b=d;if(d){var f=d.getAttribute(\"formAction\");null!=f&&(e=f,b=null)}\"javascript:throw new Error('React form unexpectedly submitted.')\"===e&&(a.preventDefault(),b?(a=document.createElement(\"input\"),a.name=b.name,a.value=b.value,b.parentNode.insertBefore(a,b),b=new FormData(c),a.parentNode.removeChild(a)):b=new FormData(c),a=c.ownerDocument||c,(a.$$reactFormReplay=a.$$reactFormReplay||[]).push(c,d,b))}});", "<\/script>");
		}
	}
	function Se(e, t) {
		for (var n in e.push(je("link")), t) if (k.call(t, n)) {
			var a = t[n];
			if (a != null) switch (n) {
				case "children":
				case "dangerouslySetInnerHTML": throw Error(i(399, "link"));
				default: ve(e, n, a);
			}
		}
		return e.push("/>"), null;
	}
	var Ce = /(<\/|<)(s)(tyle)/gi;
	function we(e, t, n, i) {
		return "" + t + (n === "s" ? "\\73 " : "\\53 ") + i;
	}
	function q(e, t, n) {
		for (var a in e.push(je(n)), t) if (k.call(t, a)) {
			var o = t[a];
			if (o != null) switch (a) {
				case "children":
				case "dangerouslySetInnerHTML": throw Error(i(399, n));
				default: ve(e, a, o);
			}
		}
		return e.push("/>"), null;
	}
	function Te(e, t) {
		e.push(je("title"));
		var n = null, i = null, a;
		for (a in t) if (k.call(t, a)) {
			var o = t[a];
			if (o != null) switch (a) {
				case "children":
					n = o;
					break;
				case "dangerouslySetInnerHTML":
					i = o;
					break;
				default: ve(e, a, o);
			}
		}
		return e.push(">"), t = Array.isArray(n) ? 2 > n.length ? n[0] : null : n, typeof t != "function" && typeof t != "symbol" && t != null && e.push(L("" + t)), ye(e, i, n), e.push(Pe("title")), null;
	}
	function Ee(e, t) {
		e.push(je("script"));
		var n = null, i = null, a;
		for (a in t) if (k.call(t, a)) {
			var o = t[a];
			if (o != null) switch (a) {
				case "children":
					n = o;
					break;
				case "dangerouslySetInnerHTML":
					i = o;
					break;
				default: ve(e, a, o);
			}
		}
		return e.push(">"), ye(e, i, n), typeof n == "string" && e.push(("" + n).replace(re, ie)), e.push(Pe("script")), null;
	}
	function De(e, t, n) {
		e.push(je(n));
		var i = n = null, a;
		for (a in t) if (k.call(t, a)) {
			var o = t[a];
			if (o != null) switch (a) {
				case "children":
					n = o;
					break;
				case "dangerouslySetInnerHTML":
					i = o;
					break;
				default: ve(e, a, o);
			}
		}
		return e.push(">"), ye(e, i, n), n;
	}
	function Oe(e, t, n) {
		e.push(je(n));
		var i = n = null, a;
		for (a in t) if (k.call(t, a)) {
			var o = t[a];
			if (o != null) switch (a) {
				case "children":
					n = o;
					break;
				case "dangerouslySetInnerHTML":
					i = o;
					break;
				default: ve(e, a, o);
			}
		}
		return e.push(">"), ye(e, i, n), typeof n == "string" ? (e.push(L(n)), null) : n;
	}
	var ke = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Ae = /* @__PURE__ */ new Map();
	function je(e) {
		var t = Ae.get(e);
		if (t === void 0) {
			if (!ke.test(e)) throw Error(i(65, e));
			t = "<" + e, Ae.set(e, t);
		}
		return t;
	}
	function Me(e, t, n, a, o, s, c, l, u) {
		switch (t) {
			case "div":
			case "span":
			case "svg":
			case "path": break;
			case "a":
				e.push(je("a"));
				var d = null, f = null, p;
				for (p in n) if (k.call(n, p)) {
					var m = n[p];
					if (m != null) switch (p) {
						case "children":
							d = m;
							break;
						case "dangerouslySetInnerHTML":
							f = m;
							break;
						case "href":
							m === "" ? fe(e, "href", "") : ve(e, p, m);
							break;
						default: ve(e, p, m);
					}
				}
				if (e.push(">"), ye(e, f, d), typeof d == "string") {
					e.push(L(d));
					var h = null;
				} else h = d;
				return h;
			case "g":
			case "p":
			case "li": break;
			case "select":
				e.push(je("select"));
				var g = null, _ = null, v;
				for (v in n) if (k.call(n, v)) {
					var y = n[v];
					if (y != null) switch (v) {
						case "children":
							g = y;
							break;
						case "dangerouslySetInnerHTML":
							_ = y;
							break;
						case "defaultValue":
						case "value": break;
						default: ve(e, v, y);
					}
				}
				return e.push(">"), ye(e, _, g), g;
			case "option":
				var b = l.selectedValue;
				e.push(je("option"));
				var x = null, S = null, C = null, w = null, T;
				for (T in n) if (k.call(n, T)) {
					var D = n[T];
					if (D != null) switch (T) {
						case "children":
							x = D;
							break;
						case "selected":
							C = D;
							break;
						case "dangerouslySetInnerHTML":
							w = D;
							break;
						case "value": S = D;
						default: ve(e, T, D);
					}
				}
				if (b != null) {
					var A = S === null ? be(x) : "" + S;
					if (E(b)) {
						for (var j = 0; j < b.length; j++) if ("" + b[j] === A) {
							e.push(" selected=\"\"");
							break;
						}
					} else "" + b === A && e.push(" selected=\"\"");
				} else C && e.push(" selected=\"\"");
				return e.push(">"), ye(e, w, x), x;
			case "textarea":
				e.push(je("textarea"));
				var M = null, P = null, F = null, I;
				for (I in n) if (k.call(n, I)) {
					var R = n[I];
					if (R != null) switch (I) {
						case "children":
							F = R;
							break;
						case "value":
							M = R;
							break;
						case "defaultValue":
							P = R;
							break;
						case "dangerouslySetInnerHTML": throw Error(i(91));
						default: ve(e, I, R);
					}
				}
				if (M === null && P !== null && (M = P), e.push(">"), F != null) {
					if (M != null) throw Error(i(92));
					if (E(F)) {
						if (1 < F.length) throw Error(i(93));
						M = "" + F[0];
					}
					M = "" + F;
				}
				return typeof M == "string" && M[0] === "\n" && e.push("\n"), M !== null && e.push(L("" + M)), null;
			case "input":
				e.push(je("input"));
				var ee = null, z = null, V = null, te = null, H = null, U = null, W = null, re = null, ie = null, ae;
				for (ae in n) if (k.call(n, ae)) {
					var oe = n[ae];
					if (oe != null) switch (ae) {
						case "children":
						case "dangerouslySetInnerHTML": throw Error(i(399, "input"));
						case "name":
							ee = oe;
							break;
						case "formAction":
							z = oe;
							break;
						case "formEncType":
							V = oe;
							break;
						case "formMethod":
							te = oe;
							break;
						case "formTarget":
							H = oe;
							break;
						case "defaultChecked":
							ie = oe;
							break;
						case "defaultValue":
							W = oe;
							break;
						case "checked":
							re = oe;
							break;
						case "value":
							U = oe;
							break;
						default: ve(e, ae, oe);
					}
				}
				var se = _e(e, a, o, z, V, te, H, ee);
				return re === null ? ie !== null && de(e, "checked", ie) : de(e, "checked", re), U === null ? W !== null && ve(e, "value", W) : ve(e, "value", U), e.push("/>"), se?.forEach(me, e), null;
			case "button":
				e.push(je("button"));
				var G = null, ce = null, le = null, ue = null, he = null, ke = null, Ae = null, Me;
				for (Me in n) if (k.call(n, Me)) {
					var Ne = n[Me];
					if (Ne != null) switch (Me) {
						case "children":
							G = Ne;
							break;
						case "dangerouslySetInnerHTML":
							ce = Ne;
							break;
						case "name":
							le = Ne;
							break;
						case "formAction":
							ue = Ne;
							break;
						case "formEncType":
							he = Ne;
							break;
						case "formMethod":
							ke = Ne;
							break;
						case "formTarget":
							Ae = Ne;
							break;
						default: ve(e, Me, Ne);
					}
				}
				var Fe = _e(e, a, o, ue, he, ke, Ae, le);
				if (e.push(">"), Fe?.forEach(me, e), ye(e, ce, G), typeof G == "string") {
					e.push(L(G));
					var Ie = null;
				} else Ie = G;
				return Ie;
			case "form":
				e.push(je("form"));
				var Le = null, Re = null, ze = null, Be = null, Ve = null, He = null, Ue;
				for (Ue in n) if (k.call(n, Ue)) {
					var We = n[Ue];
					if (We != null) switch (Ue) {
						case "children":
							Le = We;
							break;
						case "dangerouslySetInnerHTML":
							Re = We;
							break;
						case "action":
							ze = We;
							break;
						case "encType":
							Be = We;
							break;
						case "method":
							Ve = We;
							break;
						case "target":
							He = We;
							break;
						default: ve(e, Ue, We);
					}
				}
				var Ge = null, Ke = null;
				if (typeof ze == "function") {
					var J = ge(a, ze);
					J === null ? (e.push(" ", "action", "=\"", pe, "\""), He = Ve = Be = ze = null, xe(a, o)) : (ze = J.action || "", Be = J.encType, Ve = J.method, He = J.target, Ge = J.data, Ke = J.name);
				}
				if (ze != null && ve(e, "action", ze), Be != null && ve(e, "encType", Be), Ve != null && ve(e, "method", Ve), He != null && ve(e, "target", He), e.push(">"), Ke !== null && (e.push("<input type=\"hidden\""), fe(e, "name", Ke), e.push("/>"), Ge?.forEach(me, e)), ye(e, Re, Le), typeof Le == "string") {
					e.push(L(Le));
					var qe = null;
				} else qe = Le;
				return qe;
			case "menuitem":
				for (var Y in e.push(je("menuitem")), n) if (k.call(n, Y)) {
					var X = n[Y];
					if (X != null) switch (Y) {
						case "children":
						case "dangerouslySetInnerHTML": throw Error(i(400));
						default: ve(e, Y, X);
					}
				}
				return e.push(">"), null;
			case "object":
				e.push(je("object"));
				var Je = null, Ye = null, Xe;
				for (Xe in n) if (k.call(n, Xe)) {
					var Ze = n[Xe];
					if (Ze != null) switch (Xe) {
						case "children":
							Je = Ze;
							break;
						case "dangerouslySetInnerHTML":
							Ye = Ze;
							break;
						case "data":
							var Qe = B("" + Ze);
							if (Qe === "") break;
							e.push(" ", "data", "=\"", L(Qe), "\"");
							break;
						default: ve(e, Xe, Ze);
					}
				}
				if (e.push(">"), ye(e, Ye, Je), typeof Je == "string") {
					e.push(L(Je));
					var $e = null;
				} else $e = Je;
				return $e;
			case "title":
				var et = l.tagScope & 1, tt = l.tagScope & 4;
				if (l.insertionMode === 4 || et || n.itemProp != null) var nt = Te(e, n);
				else tt ? nt = null : (Te(o.hoistableChunks, n), nt = void 0);
				return nt;
			case "link":
				var rt = l.tagScope & 1, it = l.tagScope & 4, at = n.rel, ot = n.href, st = n.precedence;
				if (l.insertionMode === 4 || rt || n.itemProp != null || typeof at != "string" || typeof ot != "string" || ot === "") {
					Se(e, n);
					var ct = null;
				} else if (n.rel === "stylesheet") if (typeof st != "string" || n.disabled != null || n.onLoad || n.onError) ct = Se(e, n);
				else {
					var dt = o.styles.get(st), ft = a.styleResources.hasOwnProperty(ot) ? a.styleResources[ot] : void 0;
					if (ft !== null) {
						a.styleResources[ot] = null, dt || (dt = {
							precedence: L(st),
							rules: [],
							hrefs: [],
							sheets: /* @__PURE__ */ new Map()
						}, o.styles.set(st, dt));
						var pt = {
							state: 0,
							props: O({}, n, {
								"data-precedence": n.precedence,
								precedence: null
							})
						};
						if (ft) {
							ft.length === 2 && lt(pt.props, ft);
							var mt = o.preloads.stylesheets.get(ot);
							mt && 0 < mt.length ? mt.length = 0 : pt.state = 1;
						}
						dt.sheets.set(ot, pt), c && c.stylesheets.add(pt);
					} else if (dt) {
						var ht = dt.sheets.get(ot);
						ht && c && c.stylesheets.add(ht);
					}
					u && e.push("<!-- -->"), ct = null;
				}
				else n.onLoad || n.onError ? ct = Se(e, n) : (u && e.push("<!-- -->"), ct = it ? null : Se(o.hoistableChunks, n));
				return ct;
			case "script":
				var gt = l.tagScope & 1, _t = n.async;
				if (typeof n.src != "string" || !n.src || !_t || typeof _t == "function" || typeof _t == "symbol" || n.onLoad || n.onError || l.insertionMode === 4 || gt || n.itemProp != null) var vt = Ee(e, n);
				else {
					var yt = n.src;
					if (n.type === "module") var bt = a.moduleScriptResources, xt = o.preloads.moduleScripts;
					else bt = a.scriptResources, xt = o.preloads.scripts;
					var St = bt.hasOwnProperty(yt) ? bt[yt] : void 0;
					if (St !== null) {
						bt[yt] = null;
						var Ct = n;
						if (St) {
							St.length === 2 && (Ct = O({}, n), lt(Ct, St));
							var wt = xt.get(yt);
							wt && (wt.length = 0);
						}
						var Tt = [];
						o.scripts.add(Tt), Ee(Tt, Ct);
					}
					u && e.push("<!-- -->"), vt = null;
				}
				return vt;
			case "style":
				var Et = l.tagScope & 1, Dt = n.precedence, Ot = n.href, kt = n.nonce;
				if (l.insertionMode === 4 || Et || n.itemProp != null || typeof Dt != "string" || typeof Ot != "string" || Ot === "") {
					e.push(je("style"));
					var At = null, jt = null, Mt;
					for (Mt in n) if (k.call(n, Mt)) {
						var Nt = n[Mt];
						if (Nt != null) switch (Mt) {
							case "children":
								At = Nt;
								break;
							case "dangerouslySetInnerHTML":
								jt = Nt;
								break;
							default: ve(e, Mt, Nt);
						}
					}
					e.push(">");
					var Pt = Array.isArray(At) ? 2 > At.length ? At[0] : null : At;
					typeof Pt != "function" && typeof Pt != "symbol" && Pt != null && e.push(("" + Pt).replace(Ce, we)), ye(e, jt, At), e.push(Pe("style"));
					var Ft = null;
				} else {
					var It = o.styles.get(Dt);
					if ((a.styleResources.hasOwnProperty(Ot) ? a.styleResources[Ot] : void 0) !== null) {
						a.styleResources[Ot] = null, It || (It = {
							precedence: L(Dt),
							rules: [],
							hrefs: [],
							sheets: /* @__PURE__ */ new Map()
						}, o.styles.set(Dt, It));
						var Lt = o.nonce.style;
						if (!Lt || Lt === kt) {
							It.hrefs.push(L(Ot));
							var Rt = It.rules, zt = null, Bt = null, Vt;
							for (Vt in n) if (k.call(n, Vt)) {
								var Ht = n[Vt];
								if (Ht != null) switch (Vt) {
									case "children":
										zt = Ht;
										break;
									case "dangerouslySetInnerHTML": Bt = Ht;
								}
							}
							var Ut = Array.isArray(zt) ? 2 > zt.length ? zt[0] : null : zt;
							typeof Ut != "function" && typeof Ut != "symbol" && Ut != null && Rt.push(("" + Ut).replace(Ce, we)), ye(Rt, Bt, zt);
						}
					}
					It && c && c.styles.add(It), u && e.push("<!-- -->"), Ft = void 0;
				}
				return Ft;
			case "meta":
				var Wt = l.tagScope & 1, Gt = l.tagScope & 4;
				if (l.insertionMode === 4 || Wt || n.itemProp != null) var Kt = q(e, n, "meta");
				else u && e.push("<!-- -->"), Kt = Gt ? null : typeof n.charSet == "string" ? q(o.charsetChunks, n, "meta") : n.name === "viewport" ? q(o.viewportChunks, n, "meta") : q(o.hoistableChunks, n, "meta");
				return Kt;
			case "listing":
			case "pre":
				e.push(je(t));
				var qt = null, Jt = null, Yt;
				for (Yt in n) if (k.call(n, Yt)) {
					var Xt = n[Yt];
					if (Xt != null) switch (Yt) {
						case "children":
							qt = Xt;
							break;
						case "dangerouslySetInnerHTML":
							Jt = Xt;
							break;
						default: ve(e, Yt, Xt);
					}
				}
				if (e.push(">"), Jt != null) {
					if (qt != null) throw Error(i(60));
					if (typeof Jt != "object" || !("__html" in Jt)) throw Error(i(61));
					var Z = Jt.__html;
					Z != null && (typeof Z == "string" && 0 < Z.length && Z[0] === "\n" ? e.push("\n", Z) : e.push("" + Z));
				}
				return typeof qt == "string" && qt[0] === "\n" && e.push("\n"), qt;
			case "img":
				var Zt = l.tagScope & 3, Q = n.src, Qt = n.srcSet;
				if (!(n.loading === "lazy" || !Q && !Qt || typeof Q != "string" && Q != null || typeof Qt != "string" && Qt != null || n.fetchPriority === "low" || Zt) && (typeof Q != "string" || Q[4] !== ":" || Q[0] !== "d" && Q[0] !== "D" || Q[1] !== "a" && Q[1] !== "A" || Q[2] !== "t" && Q[2] !== "T" || Q[3] !== "a" && Q[3] !== "A") && (typeof Qt != "string" || Qt[4] !== ":" || Qt[0] !== "d" && Qt[0] !== "D" || Qt[1] !== "a" && Qt[1] !== "A" || Qt[2] !== "t" && Qt[2] !== "T" || Qt[3] !== "a" && Qt[3] !== "A")) {
					c !== null && l.tagScope & 64 && (c.suspenseyImages = !0);
					var $t = typeof n.sizes == "string" ? n.sizes : void 0, en = Qt ? Qt + "\n" + ($t || "") : Q, tn = o.preloads.images, nn = tn.get(en);
					if (nn) (n.fetchPriority === "high" || 10 > o.highImagePreloads.size) && (tn.delete(en), o.highImagePreloads.add(nn));
					else if (!a.imageResources.hasOwnProperty(en)) {
						a.imageResources[en] = ne;
						var rn = n.crossOrigin, $ = typeof rn == "string" ? rn === "use-credentials" ? rn : "" : void 0, an = o.headers, on;
						an && 0 < an.remainingCapacity && typeof n.srcSet != "string" && (n.fetchPriority === "high" || 500 > an.highImagePreloads.length) && (on = ut(Q, "image", {
							imageSrcSet: n.srcSet,
							imageSizes: n.sizes,
							crossOrigin: $,
							integrity: n.integrity,
							nonce: n.nonce,
							type: n.type,
							fetchPriority: n.fetchPriority,
							referrerPolicy: n.refererPolicy
						}), 0 <= (an.remainingCapacity -= on.length + 2)) ? (o.resets.image[en] = ne, an.highImagePreloads && (an.highImagePreloads += ", "), an.highImagePreloads += on) : (nn = [], Se(nn, {
							rel: "preload",
							as: "image",
							href: Qt ? void 0 : Q,
							imageSrcSet: Qt,
							imageSizes: $t,
							crossOrigin: $,
							integrity: n.integrity,
							type: n.type,
							fetchPriority: n.fetchPriority,
							referrerPolicy: n.referrerPolicy
						}), n.fetchPriority === "high" || 10 > o.highImagePreloads.size ? o.highImagePreloads.add(nn) : (o.bulkPreloads.add(nn), tn.set(en, nn)));
					}
				}
				return q(e, n, "img");
			case "base":
			case "area":
			case "br":
			case "col":
			case "embed":
			case "hr":
			case "keygen":
			case "param":
			case "source":
			case "track":
			case "wbr": return q(e, n, t);
			case "annotation-xml":
			case "color-profile":
			case "font-face":
			case "font-face-src":
			case "font-face-uri":
			case "font-face-format":
			case "font-face-name":
			case "missing-glyph": break;
			case "head":
				if (2 > l.insertionMode) {
					var sn = s || o.preamble;
					if (sn.headChunks) throw Error(i(545, "`<head>`"));
					s !== null && e.push("<!--head-->"), sn.headChunks = [];
					var ln = De(sn.headChunks, n, "head");
				} else ln = Oe(e, n, "head");
				return ln;
			case "body":
				if (2 > l.insertionMode) {
					var un = s || o.preamble;
					if (un.bodyChunks) throw Error(i(545, "`<body>`"));
					s !== null && e.push("<!--body-->"), un.bodyChunks = [];
					var dn = De(un.bodyChunks, n, "body");
				} else dn = Oe(e, n, "body");
				return dn;
			case "html":
				if (l.insertionMode === 0) {
					var fn = s || o.preamble;
					if (fn.htmlChunks) throw Error(i(545, "`<html>`"));
					s !== null && e.push("<!--html-->"), fn.htmlChunks = [""];
					var pn = De(fn.htmlChunks, n, "html");
				} else pn = Oe(e, n, "html");
				return pn;
			default: if (t.indexOf("-") !== -1) {
				e.push(je(t));
				var mn = null, hn = null, gn;
				for (gn in n) if (k.call(n, gn)) {
					var _n = n[gn];
					if (_n != null) {
						var vn = gn;
						switch (gn) {
							case "children":
								mn = _n;
								break;
							case "dangerouslySetInnerHTML":
								hn = _n;
								break;
							case "style":
								K(e, _n);
								break;
							case "suppressContentEditableWarning":
							case "suppressHydrationWarning":
							case "ref": break;
							case "className": vn = "class";
							default: if (N(gn) && typeof _n != "function" && typeof _n != "symbol" && !1 !== _n) {
								if (!0 === _n) _n = "";
								else if (typeof _n == "object") continue;
								e.push(" ", vn, "=\"", L(_n), "\"");
							}
						}
					}
				}
				return e.push(">"), ye(e, hn, mn), mn;
			}
		}
		return Oe(e, n, t);
	}
	var Ne = /* @__PURE__ */ new Map();
	function Pe(e) {
		var t = Ne.get(e);
		return t === void 0 && (t = "</" + e + ">", Ne.set(e, t)), t;
	}
	function Fe(e, t) {
		e = e.preamble, e.htmlChunks === null && t.htmlChunks && (e.htmlChunks = t.htmlChunks), e.headChunks === null && t.headChunks && (e.headChunks = t.headChunks), e.bodyChunks === null && t.bodyChunks && (e.bodyChunks = t.bodyChunks);
	}
	function Ie(e, t) {
		t = t.bootstrapChunks;
		for (var n = 0; n < t.length - 1; n++) e.push(t[n]);
		return n < t.length ? (n = t[n], t.length = 0, e.push(n)) : !0;
	}
	function Le(e, t, n) {
		if (e.push("<!--$?--><template id=\""), n === null) throw Error(i(395));
		return e.push(t.boundaryPrefix), t = n.toString(16), e.push(t), e.push("\"></template>");
	}
	function Re(e, t, n, a) {
		switch (n.insertionMode) {
			case 0:
			case 1:
			case 3:
			case 2: return e.push("<div hidden id=\""), e.push(t.segmentPrefix), t = a.toString(16), e.push(t), e.push("\">");
			case 4: return e.push("<svg aria-hidden=\"true\" style=\"display:none\" id=\""), e.push(t.segmentPrefix), t = a.toString(16), e.push(t), e.push("\">");
			case 5: return e.push("<math aria-hidden=\"true\" style=\"display:none\" id=\""), e.push(t.segmentPrefix), t = a.toString(16), e.push(t), e.push("\">");
			case 6: return e.push("<table hidden id=\""), e.push(t.segmentPrefix), t = a.toString(16), e.push(t), e.push("\">");
			case 7: return e.push("<table hidden><tbody id=\""), e.push(t.segmentPrefix), t = a.toString(16), e.push(t), e.push("\">");
			case 8: return e.push("<table hidden><tr id=\""), e.push(t.segmentPrefix), t = a.toString(16), e.push(t), e.push("\">");
			case 9: return e.push("<table hidden><colgroup id=\""), e.push(t.segmentPrefix), t = a.toString(16), e.push(t), e.push("\">");
			default: throw Error(i(397));
		}
	}
	function ze(e, t) {
		switch (t.insertionMode) {
			case 0:
			case 1:
			case 3:
			case 2: return e.push("</div>");
			case 4: return e.push("</svg>");
			case 5: return e.push("</math>");
			case 6: return e.push("</table>");
			case 7: return e.push("</tbody></table>");
			case 8: return e.push("</tr></table>");
			case 9: return e.push("</colgroup></table>");
			default: throw Error(i(397));
		}
	}
	var Be = /[<\u2028\u2029]/g;
	function Ve(e) {
		return JSON.stringify(e).replace(Be, function(e) {
			switch (e) {
				case "<": return "\\u003c";
				case "\u2028": return "\\u2028";
				case "\u2029": return "\\u2029";
				default: throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
			}
		});
	}
	var He = /[&><\u2028\u2029]/g;
	function Ue(e) {
		return JSON.stringify(e).replace(He, function(e) {
			switch (e) {
				case "&": return "\\u0026";
				case ">": return "\\u003e";
				case "<": return "\\u003c";
				case "\u2028": return "\\u2028";
				case "\u2029": return "\\u2029";
				default: throw Error("escapeJSObjectForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
			}
		});
	}
	var We = !1, Ge = !0;
	function Ke(e) {
		var t = e.rules, n = e.hrefs, i = 0;
		if (n.length) {
			for (this.push(W.startInlineStyle), this.push(" media=\"not all\" data-precedence=\""), this.push(e.precedence), this.push("\" data-href=\""); i < n.length - 1; i++) this.push(n[i]), this.push(" ");
			for (this.push(n[i]), this.push("\">"), i = 0; i < t.length; i++) this.push(t[i]);
			Ge = this.push("</style>"), We = !0, t.length = 0, n.length = 0;
		}
	}
	function J(e) {
		return e.state === 2 ? !1 : We = !0;
	}
	function qe(e, t, n) {
		return We = !1, Ge = !0, W = n, t.styles.forEach(Ke, e), W = null, t.stylesheets.forEach(J), We && (n.stylesToHoist = !0), Ge;
	}
	function Y(e) {
		for (var t = 0; t < e.length; t++) this.push(e[t]);
		e.length = 0;
	}
	var X = [];
	function Je(e) {
		Se(X, e.props);
		for (var t = 0; t < X.length; t++) this.push(X[t]);
		X.length = 0, e.state = 2;
	}
	function Ye(e) {
		var t = 0 < e.sheets.size;
		e.sheets.forEach(Je, this), e.sheets.clear();
		var n = e.rules, i = e.hrefs;
		if (!t || i.length) {
			if (this.push(W.startInlineStyle), this.push(" data-precedence=\""), this.push(e.precedence), e = 0, i.length) {
				for (this.push("\" data-href=\""); e < i.length - 1; e++) this.push(i[e]), this.push(" ");
				this.push(i[e]);
			}
			for (this.push("\">"), e = 0; e < n.length; e++) this.push(n[e]);
			this.push("</style>"), n.length = 0, i.length = 0;
		}
	}
	function Xe(e) {
		if (e.state === 0) {
			e.state = 1;
			var t = e.props;
			for (Se(X, {
				rel: "preload",
				as: "style",
				href: e.props.href,
				crossOrigin: t.crossOrigin,
				fetchPriority: t.fetchPriority,
				integrity: t.integrity,
				media: t.media,
				hrefLang: t.hrefLang,
				referrerPolicy: t.referrerPolicy
			}), e = 0; e < X.length; e++) this.push(X[e]);
			X.length = 0;
		}
	}
	function Ze(e) {
		e.sheets.forEach(Xe, this), e.sheets.clear();
	}
	function Qe(e, t) {
		!(t.instructions & 32) && (t.instructions |= 32, e.push(" id=\"", L("_" + t.idPrefix + "R_"), "\""));
	}
	function $e(e, t) {
		e.push("[");
		var n = "[";
		t.stylesheets.forEach(function(t) {
			if (t.state !== 2) if (t.state === 3) e.push(n), t = Ue("" + t.props.href), e.push(t), e.push("]"), n = ",[";
			else {
				e.push(n);
				var a = t.props["data-precedence"], o = t.props, s = B("" + t.props.href);
				for (var c in s = Ue(s), e.push(s), a = "" + a, e.push(","), a = Ue(a), e.push(a), o) if (k.call(o, c) && (a = o[c], a != null)) switch (c) {
					case "href":
					case "rel":
					case "precedence":
					case "data-precedence": break;
					case "children":
					case "dangerouslySetInnerHTML": throw Error(i(399, "link"));
					default: et(e, c, a);
				}
				e.push("]"), n = ",[", t.state = 3;
			}
		}), e.push("]");
	}
	function et(e, t, n) {
		var i = t.toLowerCase();
		switch (typeof n) {
			case "function":
			case "symbol": return;
		}
		switch (t) {
			case "innerHTML":
			case "dangerouslySetInnerHTML":
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "style":
			case "ref": return;
			case "className":
				i = "class", t = "" + n;
				break;
			case "hidden":
				if (!1 === n) return;
				t = "";
				break;
			case "src":
			case "href":
				n = B(n), t = "" + n;
				break;
			default:
				if (2 < t.length && (t[0] === "o" || t[0] === "O") && (t[1] === "n" || t[1] === "N") || !N(t)) return;
				t = "" + n;
		}
		e.push(","), i = Ue(i), e.push(i), e.push(","), i = Ue(t), e.push(i);
	}
	function tt() {
		return {
			styles: /* @__PURE__ */ new Set(),
			stylesheets: /* @__PURE__ */ new Set(),
			suspenseyImages: !1
		};
	}
	function nt(e) {
		var t = Pn || null;
		if (t) {
			var n = t.resumableState, i = t.renderState;
			if (typeof e == "string" && e) {
				if (!n.dnsResources.hasOwnProperty(e)) {
					n.dnsResources[e] = null, n = i.headers;
					var a, o;
					(o = n && 0 < n.remainingCapacity) && (o = (a = "<" + ("" + e).replace(dt, ft) + ">; rel=dns-prefetch", 0 <= (n.remainingCapacity -= a.length + 2))), o ? (i.resets.dns[e] = null, n.preconnects && (n.preconnects += ", "), n.preconnects += a) : (a = [], Se(a, {
						href: e,
						rel: "dns-prefetch"
					}), i.preconnects.add(a));
				}
				kr(t);
			}
		} else U.D(e);
	}
	function rt(e, t) {
		var n = Pn || null;
		if (n) {
			var i = n.resumableState, a = n.renderState;
			if (typeof e == "string" && e) {
				var o = t === "use-credentials" ? "credentials" : typeof t == "string" ? "anonymous" : "default";
				if (!i.connectResources[o].hasOwnProperty(e)) {
					i.connectResources[o][e] = null, i = a.headers;
					var s, c;
					if (c = i && 0 < i.remainingCapacity) {
						if (c = "<" + ("" + e).replace(dt, ft) + ">; rel=preconnect", typeof t == "string") {
							var l = ("" + t).replace(pt, mt);
							c += "; crossorigin=\"" + l + "\"";
						}
						c = (s = c, 0 <= (i.remainingCapacity -= s.length + 2));
					}
					c ? (a.resets.connect[o][e] = null, i.preconnects && (i.preconnects += ", "), i.preconnects += s) : (o = [], Se(o, {
						rel: "preconnect",
						href: e,
						crossOrigin: t
					}), a.preconnects.add(o));
				}
				kr(n);
			}
		} else U.C(e, t);
	}
	function it(e, t, n) {
		var i = Pn || null;
		if (i) {
			var a = i.resumableState, o = i.renderState;
			if (t && e) {
				switch (t) {
					case "image":
						if (n) var s = n.imageSrcSet, c = n.imageSizes, l = n.fetchPriority;
						var u = s ? s + "\n" + (c || "") : e;
						if (a.imageResources.hasOwnProperty(u)) return;
						a.imageResources[u] = ne, a = o.headers;
						var d;
						a && 0 < a.remainingCapacity && typeof s != "string" && l === "high" && (d = ut(e, t, n), 0 <= (a.remainingCapacity -= d.length + 2)) ? (o.resets.image[u] = ne, a.highImagePreloads && (a.highImagePreloads += ", "), a.highImagePreloads += d) : (a = [], Se(a, O({
							rel: "preload",
							href: s ? void 0 : e,
							as: t
						}, n)), l === "high" ? o.highImagePreloads.add(a) : (o.bulkPreloads.add(a), o.preloads.images.set(u, a)));
						break;
					case "style":
						if (a.styleResources.hasOwnProperty(e)) return;
						s = [], Se(s, O({
							rel: "preload",
							href: e,
							as: t
						}, n)), a.styleResources[e] = !n || typeof n.crossOrigin != "string" && typeof n.integrity != "string" ? ne : [n.crossOrigin, n.integrity], o.preloads.stylesheets.set(e, s), o.bulkPreloads.add(s);
						break;
					case "script":
						if (a.scriptResources.hasOwnProperty(e)) return;
						s = [], o.preloads.scripts.set(e, s), o.bulkPreloads.add(s), Se(s, O({
							rel: "preload",
							href: e,
							as: t
						}, n)), a.scriptResources[e] = !n || typeof n.crossOrigin != "string" && typeof n.integrity != "string" ? ne : [n.crossOrigin, n.integrity];
						break;
					default:
						if (a.unknownResources.hasOwnProperty(t)) {
							if (s = a.unknownResources[t], s.hasOwnProperty(e)) return;
						} else s = {}, a.unknownResources[t] = s;
						if (s[e] = ne, (a = o.headers) && 0 < a.remainingCapacity && t === "font" && (u = ut(e, t, n), 0 <= (a.remainingCapacity -= u.length + 2))) o.resets.font[e] = ne, a.fontPreloads && (a.fontPreloads += ", "), a.fontPreloads += u;
						else switch (a = [], e = O({
							rel: "preload",
							href: e,
							as: t
						}, n), Se(a, e), t) {
							case "font":
								o.fontPreloads.add(a);
								break;
							default: o.bulkPreloads.add(a);
						}
				}
				kr(i);
			}
		} else U.L(e, t, n);
	}
	function at(e, t) {
		var n = Pn || null;
		if (n) {
			var i = n.resumableState, a = n.renderState;
			if (e) {
				var o = t && typeof t.as == "string" ? t.as : "script";
				switch (o) {
					case "script":
						if (i.moduleScriptResources.hasOwnProperty(e)) return;
						o = [], i.moduleScriptResources[e] = !t || typeof t.crossOrigin != "string" && typeof t.integrity != "string" ? ne : [t.crossOrigin, t.integrity], a.preloads.moduleScripts.set(e, o);
						break;
					default:
						if (i.moduleUnknownResources.hasOwnProperty(o)) {
							var s = i.unknownResources[o];
							if (s.hasOwnProperty(e)) return;
						} else s = {}, i.moduleUnknownResources[o] = s;
						o = [], s[e] = ne;
				}
				Se(o, O({
					rel: "modulepreload",
					href: e
				}, t)), a.bulkPreloads.add(o), kr(n);
			}
		} else U.m(e, t);
	}
	function ot(e, t, n) {
		var i = Pn || null;
		if (i) {
			var a = i.resumableState, o = i.renderState;
			if (e) {
				t ||= "default";
				var s = o.styles.get(t), c = a.styleResources.hasOwnProperty(e) ? a.styleResources[e] : void 0;
				c !== null && (a.styleResources[e] = null, s || (s = {
					precedence: L(t),
					rules: [],
					hrefs: [],
					sheets: /* @__PURE__ */ new Map()
				}, o.styles.set(t, s)), t = {
					state: 0,
					props: O({
						rel: "stylesheet",
						href: e,
						"data-precedence": t
					}, n)
				}, c && (c.length === 2 && lt(t.props, c), (o = o.preloads.stylesheets.get(e)) && 0 < o.length ? o.length = 0 : t.state = 1), s.sheets.set(e, t), kr(i));
			}
		} else U.S(e, t, n);
	}
	function st(e, t) {
		var n = Pn || null;
		if (n) {
			var i = n.resumableState, a = n.renderState;
			if (e) {
				var o = i.scriptResources.hasOwnProperty(e) ? i.scriptResources[e] : void 0;
				o !== null && (i.scriptResources[e] = null, t = O({
					src: e,
					async: !0
				}, t), o && (o.length === 2 && lt(t, o), e = a.preloads.scripts.get(e)) && (e.length = 0), e = [], a.scripts.add(e), Ee(e, t), kr(n));
			}
		} else U.X(e, t);
	}
	function ct(e, t) {
		var n = Pn || null;
		if (n) {
			var i = n.resumableState, a = n.renderState;
			if (e) {
				var o = i.moduleScriptResources.hasOwnProperty(e) ? i.moduleScriptResources[e] : void 0;
				o !== null && (i.moduleScriptResources[e] = null, t = O({
					src: e,
					type: "module",
					async: !0
				}, t), o && (o.length === 2 && lt(t, o), e = a.preloads.moduleScripts.get(e)) && (e.length = 0), e = [], a.scripts.add(e), Ee(e, t), kr(n));
			}
		} else U.M(e, t);
	}
	function lt(e, t) {
		e.crossOrigin ??= t[0], e.integrity ??= t[1];
	}
	function ut(e, t, n) {
		for (var i in e = ("" + e).replace(dt, ft), t = ("" + t).replace(pt, mt), t = "<" + e + ">; rel=preload; as=\"" + t + "\"", n) k.call(n, i) && (e = n[i], typeof e == "string" && (t += "; " + i.toLowerCase() + "=\"" + ("" + e).replace(pt, mt) + "\""));
		return t;
	}
	var dt = /[<>\r\n]/g;
	function ft(e) {
		switch (e) {
			case "<": return "%3C";
			case ">": return "%3E";
			case "\n": return "%0A";
			case "\r": return "%0D";
			default: throw Error("escapeLinkHrefForHeaderContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
		}
	}
	var pt = /["';,\r\n]/g;
	function mt(e) {
		switch (e) {
			case "\"": return "%22";
			case "'": return "%27";
			case ";": return "%3B";
			case ",": return "%2C";
			case "\n": return "%0A";
			case "\r": return "%0D";
			default: throw Error("escapeStringForLinkHeaderQuotedParamValueContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
		}
	}
	function ht(e) {
		this.styles.add(e);
	}
	function gt(e) {
		this.stylesheets.add(e);
	}
	function _t(e, t) {
		t.styles.forEach(ht, e), t.stylesheets.forEach(gt, e), t.suspenseyImages && (e.suspenseyImages = !0);
	}
	function vt(e, t) {
		var n = e.idPrefix, i = [], a = e.bootstrapScriptContent, o = e.bootstrapScripts, s = e.bootstrapModules;
		a !== void 0 && (i.push("<script"), Qe(i, e), i.push(">", ("" + a).replace(re, ie), "<\/script>")), a = n + "P:";
		var c = n + "S:";
		n += "B:";
		var l = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Set(), m = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set(), g = {
			images: /* @__PURE__ */ new Map(),
			stylesheets: /* @__PURE__ */ new Map(),
			scripts: /* @__PURE__ */ new Map(),
			moduleScripts: /* @__PURE__ */ new Map()
		};
		if (o !== void 0) for (var _ = 0; _ < o.length; _++) {
			var v = o[_], y, b = void 0, x = void 0, S = {
				rel: "preload",
				as: "script",
				fetchPriority: "low",
				nonce: void 0
			};
			typeof v == "string" ? S.href = y = v : (S.href = y = v.src, S.integrity = x = typeof v.integrity == "string" ? v.integrity : void 0, S.crossOrigin = b = typeof v == "string" || v.crossOrigin == null ? void 0 : v.crossOrigin === "use-credentials" ? "use-credentials" : ""), v = e;
			var C = y;
			v.scriptResources[C] = null, v.moduleScriptResources[C] = null, v = [], Se(v, S), p.add(v), i.push("<script src=\"", L(y), "\""), typeof x == "string" && i.push(" integrity=\"", L(x), "\""), typeof b == "string" && i.push(" crossorigin=\"", L(b), "\""), Qe(i, e), i.push(" async=\"\"><\/script>");
		}
		if (s !== void 0) for (o = 0; o < s.length; o++) S = s[o], b = y = void 0, x = {
			rel: "modulepreload",
			fetchPriority: "low",
			nonce: void 0
		}, typeof S == "string" ? x.href = _ = S : (x.href = _ = S.src, x.integrity = b = typeof S.integrity == "string" ? S.integrity : void 0, x.crossOrigin = y = typeof S == "string" || S.crossOrigin == null ? void 0 : S.crossOrigin === "use-credentials" ? "use-credentials" : ""), S = e, v = _, S.scriptResources[v] = null, S.moduleScriptResources[v] = null, S = [], Se(S, x), p.add(S), i.push("<script type=\"module\" src=\"", L(_), "\""), typeof b == "string" && i.push(" integrity=\"", L(b), "\""), typeof y == "string" && i.push(" crossorigin=\"", L(y), "\""), Qe(i, e), i.push(" async=\"\"><\/script>");
		return {
			placeholderPrefix: a,
			segmentPrefix: c,
			boundaryPrefix: n,
			startInlineScript: "<script",
			startInlineStyle: "<style",
			preamble: {
				htmlChunks: null,
				headChunks: null,
				bodyChunks: null
			},
			externalRuntimeScript: null,
			bootstrapChunks: i,
			importMapChunks: [],
			onHeaders: void 0,
			headers: null,
			resets: {
				font: {},
				dns: {},
				connect: {
					default: {},
					anonymous: {},
					credentials: {}
				},
				image: {},
				style: {}
			},
			charsetChunks: [],
			viewportChunks: [],
			hoistableChunks: [],
			preconnects: l,
			fontPreloads: u,
			highImagePreloads: d,
			styles: f,
			bootstrapScripts: p,
			scripts: m,
			bulkPreloads: h,
			preloads: g,
			nonce: {
				script: void 0,
				style: void 0
			},
			stylesToHoist: !1,
			generateStaticMarkup: t
		};
	}
	function yt(e, t, n, i) {
		return n.generateStaticMarkup ? (e.push(L(t)), !1) : (t === "" ? e = i : (i && e.push("<!-- -->"), e.push(L(t)), e = !0), e);
	}
	function bt(e, t, n, i) {
		t.generateStaticMarkup || n && i && e.push("<!-- -->");
	}
	var xt = Function.prototype.bind, St = Symbol.for("react.client.reference");
	function Ct(e) {
		if (e == null) return null;
		if (typeof e == "function") return e.$$typeof === St ? null : e.displayName || e.name || null;
		if (typeof e == "string") return e;
		switch (e) {
			case s: return "Fragment";
			case l: return "Profiler";
			case c: return "StrictMode";
			case m: return "Suspense";
			case g: return "SuspenseList";
			case b: return "Activity";
		}
		if (typeof e == "object") switch (e.$$typeof) {
			case o: return "Portal";
			case d: return e.displayName || "Context";
			case u: return (e._context.displayName || "Context") + ".Consumer";
			case p:
				var t = e.render;
				return e = e.displayName, e ||= (e = t.displayName || t.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
			case _: return t = e.displayName || null, t === null ? Ct(e.type) || "Memo" : t;
			case v:
				t = e._payload, e = e._init;
				try {
					return Ct(e(t));
				} catch {}
		}
		return null;
	}
	var wt = {}, Tt = null;
	function Et(e, t) {
		if (e !== t) {
			e.context._currentValue2 = e.parentValue, e = e.parent;
			var n = t.parent;
			if (e === null) {
				if (n !== null) throw Error(i(401));
			} else {
				if (n === null) throw Error(i(401));
				Et(e, n);
			}
			t.context._currentValue2 = t.value;
		}
	}
	function Dt(e) {
		e.context._currentValue2 = e.parentValue, e = e.parent, e !== null && Dt(e);
	}
	function Ot(e) {
		var t = e.parent;
		t !== null && Ot(t), e.context._currentValue2 = e.value;
	}
	function kt(e, t) {
		if (e.context._currentValue2 = e.parentValue, e = e.parent, e === null) throw Error(i(402));
		e.depth === t.depth ? Et(e, t) : kt(e, t);
	}
	function At(e, t) {
		var n = t.parent;
		if (n === null) throw Error(i(402));
		e.depth === n.depth ? Et(e, n) : At(e, n), t.context._currentValue2 = t.value;
	}
	function jt(e) {
		var t = Tt;
		t !== e && (t === null ? Ot(e) : e === null ? Dt(t) : t.depth === e.depth ? Et(t, e) : t.depth > e.depth ? kt(t, e) : At(t, e), Tt = e);
	}
	var Mt = {
		enqueueSetState: function(e, t) {
			e = e._reactInternals, e.queue !== null && e.queue.push(t);
		},
		enqueueReplaceState: function(e, t) {
			e = e._reactInternals, e.replace = !0, e.queue = [t];
		},
		enqueueForceUpdate: function() {}
	}, Nt = {
		id: 1,
		overflow: ""
	};
	function Pt(e, t, n) {
		var i = e.id;
		e = e.overflow;
		var a = 32 - Ft(i) - 1;
		i &= ~(1 << a), n += 1;
		var o = 32 - Ft(t) + a;
		if (30 < o) {
			var s = a - a % 5;
			return o = (i & (1 << s) - 1).toString(32), i >>= s, a -= s, {
				id: 1 << 32 - Ft(t) + a | n << a | i,
				overflow: o + e
			};
		}
		return {
			id: 1 << o | n << a | i,
			overflow: e
		};
	}
	var Ft = Math.clz32 ? Math.clz32 : Rt, It = Math.log, Lt = Math.LN2;
	function Rt(e) {
		return e >>>= 0, e === 0 ? 32 : 31 - (It(e) / Lt | 0) | 0;
	}
	function zt() {}
	var Bt = Error(i(460));
	function Vt(e, t, n) {
		switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(zt, zt), t = n), t.status) {
			case "fulfilled": return t.value;
			case "rejected": throw t.reason;
			default:
				switch (typeof t.status == "string" ? t.then(zt, zt) : (e = t, e.status = "pending", e.then(function(e) {
					if (t.status === "pending") {
						var n = t;
						n.status = "fulfilled", n.value = e;
					}
				}, function(e) {
					if (t.status === "pending") {
						var n = t;
						n.status = "rejected", n.reason = e;
					}
				})), t.status) {
					case "fulfilled": return t.value;
					case "rejected": throw t.reason;
				}
				throw Ht = t, Bt;
		}
	}
	var Ht = null;
	function Ut() {
		if (Ht === null) throw Error(i(459));
		var e = Ht;
		return Ht = null, e;
	}
	function Wt(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var Gt = typeof Object.is == "function" ? Object.is : Wt, Kt = null, qt = null, Jt = null, Yt = null, Xt = null, Z = null, Zt = !1, Q = !1, Qt = 0, $t = 0, en = -1, tn = 0, nn = null, rn = null, $ = 0;
	function an() {
		if (Kt === null) throw Error(i(321));
		return Kt;
	}
	function on() {
		if (0 < $) throw Error(i(312));
		return {
			memoizedState: null,
			queue: null,
			next: null
		};
	}
	function sn() {
		return Z === null ? Xt === null ? (Zt = !1, Xt = Z = on()) : (Zt = !0, Z = Xt) : Z.next === null ? (Zt = !1, Z = Z.next = on()) : (Zt = !0, Z = Z.next), Z;
	}
	function ln() {
		var e = nn;
		return nn = null, e;
	}
	function un() {
		Yt = Jt = qt = Kt = null, Q = !1, Xt = null, $ = 0, Z = rn = null;
	}
	function dn(e, t) {
		return typeof t == "function" ? t(e) : t;
	}
	function fn(e, t, n) {
		if (Kt = an(), Z = sn(), Zt) {
			var i = Z.queue;
			if (t = i.dispatch, rn !== null && (n = rn.get(i), n !== void 0)) {
				rn.delete(i), i = Z.memoizedState;
				do
					i = e(i, n.action), n = n.next;
				while (n !== null);
				return Z.memoizedState = i, [i, t];
			}
			return [Z.memoizedState, t];
		}
		return e = e === dn ? typeof t == "function" ? t() : t : n === void 0 ? t : n(t), Z.memoizedState = e, e = Z.queue = {
			last: null,
			dispatch: null
		}, e = e.dispatch = mn.bind(null, Kt, e), [Z.memoizedState, e];
	}
	function pn(e, t) {
		if (Kt = an(), Z = sn(), t = t === void 0 ? null : t, Z !== null) {
			var n = Z.memoizedState;
			if (n !== null && t !== null) {
				var i = n[1];
				a: if (i === null) i = !1;
				else {
					for (var a = 0; a < i.length && a < t.length; a++) if (!Gt(t[a], i[a])) {
						i = !1;
						break a;
					}
					i = !0;
				}
				if (i) return n[0];
			}
		}
		return e = e(), Z.memoizedState = [e, t], e;
	}
	function mn(e, t, n) {
		if (25 <= $) throw Error(i(301));
		if (e === Kt) if (Q = !0, e = {
			action: n,
			next: null
		}, rn === null && (rn = /* @__PURE__ */ new Map()), n = rn.get(t), n === void 0) rn.set(t, e);
		else {
			for (t = n; t.next !== null;) t = t.next;
			t.next = e;
		}
	}
	function hn() {
		throw Error(i(440));
	}
	function gn() {
		throw Error(i(394));
	}
	function _n() {
		throw Error(i(479));
	}
	function vn(e, t, n) {
		an();
		var i = $t++, a = Jt;
		if (typeof e.$$FORM_ACTION == "function") {
			var o = null, s = Yt;
			a = a.formState;
			var c = e.$$IS_SIGNATURE_EQUAL;
			if (a !== null && typeof c == "function") {
				var l = a[1];
				c.call(e, a[2], a[3]) && (o = n === void 0 ? "k" + D(JSON.stringify([
					s,
					null,
					i
				]), 0) : "p" + n, l === o && (en = i, t = a[0]));
			}
			var u = e.bind(null, t);
			return e = function(e) {
				u(e);
			}, typeof u.$$FORM_ACTION == "function" && (e.$$FORM_ACTION = function(e) {
				e = u.$$FORM_ACTION(e), n !== void 0 && (n += "", e.action = n);
				var t = e.data;
				return t && (o === null && (o = n === void 0 ? "k" + D(JSON.stringify([
					s,
					null,
					i
				]), 0) : "p" + n), t.append("$ACTION_KEY", o)), e;
			}), [
				t,
				e,
				!1
			];
		}
		var d = e.bind(null, t);
		return [
			t,
			function(e) {
				d(e);
			},
			!1
		];
	}
	function yn(e) {
		var t = tn;
		return tn += 1, nn === null && (nn = []), Vt(nn, e, t);
	}
	function bn() {
		throw Error(i(393));
	}
	var xn = {
		readContext: function(e) {
			return e._currentValue2;
		},
		use: function(e) {
			if (typeof e == "object" && e) {
				if (typeof e.then == "function") return yn(e);
				if (e.$$typeof === d) return e._currentValue2;
			}
			throw Error(i(438, String(e)));
		},
		useContext: function(e) {
			return an(), e._currentValue2;
		},
		useMemo: pn,
		useReducer: fn,
		useRef: function(e) {
			Kt = an(), Z = sn();
			var t = Z.memoizedState;
			return t === null ? (e = { current: e }, Z.memoizedState = e) : t;
		},
		useState: function(e) {
			return fn(dn, e);
		},
		useInsertionEffect: zt,
		useLayoutEffect: zt,
		useCallback: function(e, t) {
			return pn(function() {
				return e;
			}, t);
		},
		useImperativeHandle: zt,
		useEffect: zt,
		useDebugValue: zt,
		useDeferredValue: function(e, t) {
			return an(), t === void 0 ? e : t;
		},
		useTransition: function() {
			return an(), [!1, gn];
		},
		useId: function() {
			var e = qt.treeContext, t = e.overflow;
			e = e.id, e = (e & ~(1 << 32 - Ft(e) - 1)).toString(32) + t;
			var n = Sn;
			if (n === null) throw Error(i(404));
			return t = Qt++, e = "_" + n.idPrefix + "R_" + e, 0 < t && (e += "H" + t.toString(32)), e + "_";
		},
		useSyncExternalStore: function(e, t, n) {
			if (n === void 0) throw Error(i(407));
			return n();
		},
		useOptimistic: function(e) {
			return an(), [e, _n];
		},
		useActionState: vn,
		useFormState: vn,
		useHostTransitionStatus: function() {
			return an(), H;
		},
		useMemoCache: function(e) {
			for (var t = Array(e), n = 0; n < e; n++) t[n] = S;
			return t;
		},
		useCacheRefresh: function() {
			return bn;
		},
		useEffectEvent: function() {
			return hn;
		}
	}, Sn = null, Cn = {
		getCacheForType: function() {
			throw Error(i(248));
		},
		cacheSignal: function() {
			throw Error(i(248));
		}
	}, wn, Tn;
	function En(e) {
		if (wn === void 0) try {
			throw Error();
		} catch (e) {
			var t = e.stack.trim().match(/\n( *(at )?)/);
			wn = t && t[1] || "", Tn = -1 < e.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
		}
		return "\n" + wn + e + Tn;
	}
	var Dn = !1;
	function On(e, t) {
		if (!e || Dn) return "";
		Dn = !0;
		var n = Error.prepareStackTrace;
		Error.prepareStackTrace = void 0;
		try {
			var i = { DetermineComponentFrameRoot: function() {
				try {
					if (t) {
						var n = function() {
							throw Error();
						};
						if (Object.defineProperty(n.prototype, "props", { set: function() {
							throw Error();
						} }), typeof Reflect == "object" && Reflect.construct) {
							try {
								Reflect.construct(n, []);
							} catch (e) {
								var i = e;
							}
							Reflect.construct(e, [], n);
						} else {
							try {
								n.call();
							} catch (e) {
								i = e;
							}
							e.call(n.prototype);
						}
					} else {
						try {
							throw Error();
						} catch (e) {
							i = e;
						}
						(n = e()) && typeof n.catch == "function" && n.catch(function() {});
					}
				} catch (e) {
					if (e && i && typeof e.stack == "string") return [e.stack, i.stack];
				}
				return [null, null];
			} };
			i.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
			var a = Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot, "name");
			a && a.configurable && Object.defineProperty(i.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
			var o = i.DetermineComponentFrameRoot(), s = o[0], c = o[1];
			if (s && c) {
				var l = s.split("\n"), u = c.split("\n");
				for (a = i = 0; i < l.length && !l[i].includes("DetermineComponentFrameRoot");) i++;
				for (; a < u.length && !u[a].includes("DetermineComponentFrameRoot");) a++;
				if (i === l.length || a === u.length) for (i = l.length - 1, a = u.length - 1; 1 <= i && 0 <= a && l[i] !== u[a];) a--;
				for (; 1 <= i && 0 <= a; i--, a--) if (l[i] !== u[a]) {
					if (i !== 1 || a !== 1) do
						if (i--, a--, 0 > a || l[i] !== u[a]) {
							var d = "\n" + l[i].replace(" at new ", " at ");
							return e.displayName && d.includes("<anonymous>") && (d = d.replace("<anonymous>", e.displayName)), d;
						}
					while (1 <= i && 0 <= a);
					break;
				}
			}
		} finally {
			Dn = !1, Error.prepareStackTrace = n;
		}
		return (n = e ? e.displayName || e.name : "") ? En(n) : "";
	}
	function kn(e) {
		if (typeof e == "string") return En(e);
		if (typeof e == "function") return e.prototype && e.prototype.isReactComponent ? On(e, !0) : On(e, !1);
		if (typeof e == "object" && e) {
			switch (e.$$typeof) {
				case p: return On(e.render, !1);
				case _: return On(e.type, !1);
				case v:
					var t = e, n = t._payload;
					t = t._init;
					try {
						e = t(n);
					} catch {
						return En("Lazy");
					}
					return kn(e);
			}
			if (typeof e.name == "string") {
				a: {
					n = e.name, t = e.env;
					var i = e.debugLocation;
					if (i != null && (e = Error.prepareStackTrace, Error.prepareStackTrace = void 0, i = i.stack, Error.prepareStackTrace = e, i.startsWith("Error: react-stack-top-frame\n") && (i = i.slice(29)), e = i.indexOf("\n"), e !== -1 && (i = i.slice(e + 1)), e = i.indexOf("react_stack_bottom_frame"), e !== -1 && (e = i.lastIndexOf("\n", e)), e = e === -1 ? "" : i = i.slice(0, e), i = e.lastIndexOf("\n"), e = i === -1 ? e : e.slice(i + 1), e.indexOf(n) !== -1)) {
						n = "\n" + e;
						break a;
					}
					n = En(n + (t ? " [" + t + "]" : ""));
				}
				return n;
			}
		}
		switch (e) {
			case g: return En("SuspenseList");
			case m: return En("Suspense");
		}
		return "";
	}
	function An(e, t) {
		return (500 < t.byteSize || !1) && t.contentPreamble === null;
	}
	function jn(e) {
		if (typeof e == "object" && e && typeof e.environmentName == "string") {
			var t = e.environmentName;
			e = [e].slice(0), typeof e[0] == "string" ? e.splice(0, 1, "[%s] " + e[0], " " + t + " ") : e.splice(0, 0, "[%s]", " " + t + " "), e.unshift(console), t = xt.apply(console.error, e), t();
		} else console.error(e);
		return null;
	}
	function Mn(e, t, n, i, a, o, s, c, l, u, d) {
		var f = /* @__PURE__ */ new Set();
		this.destination = null, this.flushScheduled = !1, this.resumableState = e, this.renderState = t, this.rootFormatContext = n, this.progressiveChunkSize = i === void 0 ? 12800 : i, this.status = 10, this.fatalError = null, this.pendingRootTasks = this.allPendingTasks = this.nextSegmentId = 0, this.completedPreambleSegments = this.completedRootSegment = null, this.byteSize = 0, this.abortableTasks = f, this.pingedTasks = [], this.clientRenderedBoundaries = [], this.completedBoundaries = [], this.partialBoundaries = [], this.trackedPostpones = null, this.onError = a === void 0 ? jn : a, this.onPostpone = u === void 0 ? zt : u, this.onAllReady = o === void 0 ? zt : o, this.onShellReady = s === void 0 ? zt : s, this.onShellError = c === void 0 ? zt : c, this.onFatalError = l === void 0 ? zt : l, this.formState = d === void 0 ? null : d;
	}
	function Nn(e, t, n, i, a, o, s, c, l, u, d, f) {
		return t = new Mn(t, n, i, a, o, s, c, l, u, d, f), n = zn(t, 0, null, i, !1, !1), n.parentFlushed = !0, e = Ln(t, null, e, -1, null, n, null, null, t.abortableTasks, null, i, null, Nt, null, null), Bn(e), t.pingedTasks.push(e), t;
	}
	var Pn = null;
	function Fn(e, t) {
		e.pingedTasks.push(t), e.pingedTasks.length === 1 && (e.flushScheduled = e.destination !== null, _r(e));
	}
	function In(e, t, n, i, a) {
		return n = {
			status: 0,
			rootSegmentID: -1,
			parentFlushed: !1,
			pendingTasks: 0,
			row: t,
			completedSegments: [],
			byteSize: 0,
			fallbackAbortableTasks: n,
			errorDigest: null,
			contentState: tt(),
			fallbackState: tt(),
			contentPreamble: i,
			fallbackPreamble: a,
			trackedContentKeyPath: null,
			trackedFallbackNode: null
		}, t !== null && (t.pendingTasks++, i = t.boundaries, i !== null && (e.allPendingTasks++, n.pendingTasks++, i.push(n)), e = t.inheritedHoistables, e !== null && _t(n.contentState, e)), n;
	}
	function Ln(e, t, n, i, a, o, s, c, l, u, d, f, p, m, h) {
		e.allPendingTasks++, a === null ? e.pendingRootTasks++ : a.pendingTasks++, m !== null && m.pendingTasks++;
		var g = {
			replay: null,
			node: n,
			childIndex: i,
			ping: function() {
				return Fn(e, g);
			},
			blockedBoundary: a,
			blockedSegment: o,
			blockedPreamble: s,
			hoistableState: c,
			abortSet: l,
			keyPath: u,
			formatContext: d,
			context: f,
			treeContext: p,
			row: m,
			componentStack: h,
			thenableState: t
		};
		return l.add(g), g;
	}
	function Rn(e, t, n, i, a, o, s, c, l, u, d, f, p, m) {
		e.allPendingTasks++, o === null ? e.pendingRootTasks++ : o.pendingTasks++, p !== null && p.pendingTasks++, n.pendingTasks++;
		var h = {
			replay: n,
			node: i,
			childIndex: a,
			ping: function() {
				return Fn(e, h);
			},
			blockedBoundary: o,
			blockedSegment: null,
			blockedPreamble: null,
			hoistableState: s,
			abortSet: c,
			keyPath: l,
			formatContext: u,
			context: d,
			treeContext: f,
			row: p,
			componentStack: m,
			thenableState: t
		};
		return c.add(h), h;
	}
	function zn(e, t, n, i, a, o) {
		return {
			status: 0,
			parentFlushed: !1,
			id: -1,
			index: t,
			chunks: [],
			children: [],
			preambleChildren: [],
			parentFormatContext: i,
			boundary: n,
			lastPushedText: a,
			textEmbedded: o
		};
	}
	function Bn(e) {
		var t = e.node;
		if (typeof t == "object" && t) switch (t.$$typeof) {
			case a: e.componentStack = {
				parent: e.componentStack,
				type: t.type
			};
		}
	}
	function Vn(e) {
		return e === null ? null : {
			parent: e.parent,
			type: "Suspense Fallback"
		};
	}
	function Hn(e) {
		var t = {};
		return e && Object.defineProperty(t, "componentStack", {
			configurable: !0,
			enumerable: !0,
			get: function() {
				try {
					var n = "", i = e;
					do
						n += kn(i.type), i = i.parent;
					while (i);
					var a = n;
				} catch (e) {
					a = "\nError generating stack: " + e.message + "\n" + e.stack;
				}
				return Object.defineProperty(t, "componentStack", { value: a }), a;
			}
		}), t;
	}
	function Un(e, t, n) {
		if (e = e.onError, t = e(t, n), t == null || typeof t == "string") return t;
	}
	function Wn(e, t) {
		var n = e.onShellError, i = e.onFatalError;
		n(t), i(t), e.destination === null ? (e.status = 13, e.fatalError = t) : (e.status = 14, e.destination.destroy(t));
	}
	function Gn(e, t) {
		Kn(e, t.next, t.hoistables);
	}
	function Kn(e, t, n) {
		for (; t !== null;) {
			n !== null && (_t(t.hoistables, n), t.inheritedHoistables = n);
			var i = t.boundaries;
			if (i !== null) {
				t.boundaries = null;
				for (var a = 0; a < i.length; a++) {
					var o = i[a];
					n !== null && _t(o.contentState, n), gr(e, o, null, null);
				}
			}
			if (t.pendingTasks--, 0 < t.pendingTasks) break;
			n = t.hoistables, t = t.next;
		}
	}
	function qn(e, t) {
		var n = t.boundaries;
		if (n !== null && t.pendingTasks === n.length) {
			for (var i = !0, a = 0; a < n.length; a++) {
				var o = n[a];
				if (o.pendingTasks !== 1 || o.parentFlushed || An(e, o)) {
					i = !1;
					break;
				}
			}
			i && Kn(e, t, t.hoistables);
		}
	}
	function Jn(e) {
		var t = {
			pendingTasks: 1,
			boundaries: null,
			hoistables: tt(),
			inheritedHoistables: null,
			together: !1,
			next: null
		};
		return e !== null && 0 < e.pendingTasks && (t.pendingTasks++, t.boundaries = [], e.next = t), t;
	}
	function Yn(e, t, n, i, a) {
		var o = t.keyPath, s = t.treeContext, c = t.row;
		t.keyPath = n, n = i.length;
		var l = null;
		if (t.replay !== null) {
			var u = t.replay.slots;
			if (typeof u == "object" && u) for (var d = 0; d < n; d++) {
				var f = a !== "backwards" && a !== "unstable_legacy-backwards" ? d : n - 1 - d, p = i[f];
				t.row = l = Jn(l), t.treeContext = Pt(s, n, f);
				var m = u[f];
				typeof m == "number" ? ($n(e, t, m, p, f), delete u[f]) : cr(e, t, p, f), --l.pendingTasks === 0 && Gn(e, l);
			}
			else for (u = 0; u < n; u++) d = a !== "backwards" && a !== "unstable_legacy-backwards" ? u : n - 1 - u, f = i[d], t.row = l = Jn(l), t.treeContext = Pt(s, n, d), cr(e, t, f, d), --l.pendingTasks === 0 && Gn(e, l);
		} else if (a !== "backwards" && a !== "unstable_legacy-backwards") for (a = 0; a < n; a++) u = i[a], t.row = l = Jn(l), t.treeContext = Pt(s, n, a), cr(e, t, u, a), --l.pendingTasks === 0 && Gn(e, l);
		else {
			for (a = t.blockedSegment, u = a.children.length, d = a.chunks.length, f = n - 1; 0 <= f; f--) {
				p = i[f], t.row = l = Jn(l), t.treeContext = Pt(s, n, f), m = zn(e, d, null, t.formatContext, f === 0 ? a.lastPushedText : !0, !0), a.children.splice(u, 0, m), t.blockedSegment = m;
				try {
					cr(e, t, p, f), bt(m.chunks, e.renderState, m.lastPushedText, m.textEmbedded), m.status = 1, --l.pendingTasks === 0 && Gn(e, l);
				} catch (t) {
					throw m.status = e.status === 12 ? 3 : 4, t;
				}
			}
			t.blockedSegment = a, a.lastPushedText = !1;
		}
		c !== null && l !== null && 0 < l.pendingTasks && (c.pendingTasks++, l.next = c), t.treeContext = s, t.row = c, t.keyPath = o;
	}
	function Xn(e, t, n, i, a, o) {
		var s = t.thenableState;
		for (t.thenableState = null, Kt = {}, qt = t, Jt = e, Yt = n, $t = Qt = 0, en = -1, tn = 0, nn = s, e = i(a, o); Q;) Q = !1, $t = Qt = 0, en = -1, tn = 0, $ += 1, Z = null, e = i(a, o);
		return un(), e;
	}
	function Zn(e, t, n, i, a, o, s) {
		var c = !1;
		if (o !== 0 && e.formState !== null) {
			var l = t.blockedSegment;
			if (l !== null) {
				c = !0, l = l.chunks;
				for (var u = 0; u < o; u++) u === s ? l.push("<!--F!-->") : l.push("<!--F-->");
			}
		}
		o = t.keyPath, t.keyPath = n, a ? (n = t.treeContext, t.treeContext = Pt(n, 1, 0), cr(e, t, i, -1), t.treeContext = n) : c ? cr(e, t, i, -1) : er(e, t, i, -1), t.keyPath = o;
	}
	function Qn(e, t, n, a, o, f) {
		if (typeof a == "function") if (a.prototype && a.prototype.isReactComponent) {
			var h = o;
			if ("ref" in o) for (var S in h = {}, o) S !== "ref" && (h[S] = o[S]);
			var w = a.defaultProps;
			if (w) for (var D in h === o && (h = O({}, h, o)), w) h[D] === void 0 && (h[D] = w[D]);
			o = h, h = wt, w = a.contextType, typeof w == "object" && w && (h = w._currentValue2), h = new a(o, h);
			var k = h.state === void 0 ? null : h.state;
			if (h.updater = Mt, h.props = o, h.state = k, w = {
				queue: [],
				replace: !1
			}, h._reactInternals = w, f = a.contextType, h.context = typeof f == "object" && f ? f._currentValue2 : wt, f = a.getDerivedStateFromProps, typeof f == "function" && (f = f(o, k), k = f == null ? k : O({}, k, f), h.state = k), typeof a.getDerivedStateFromProps != "function" && typeof h.getSnapshotBeforeUpdate != "function" && (typeof h.UNSAFE_componentWillMount == "function" || typeof h.componentWillMount == "function")) if (a = h.state, typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount(), a !== h.state && Mt.enqueueReplaceState(h, h.state, null), w.queue !== null && 0 < w.queue.length) if (a = w.queue, f = w.replace, w.queue = null, w.replace = !1, f && a.length === 1) h.state = a[0];
			else {
				for (w = f ? a[0] : h.state, k = !0, f = f ? 1 : 0; f < a.length; f++) D = a[f], D = typeof D == "function" ? D.call(h, w, o, void 0) : D, D != null && (k ? (k = !1, w = O({}, w, D)) : O(w, D));
				h.state = w;
			}
			else w.queue = null;
			if (a = h.render(), e.status === 12) throw null;
			o = t.keyPath, t.keyPath = n, er(e, t, a, -1), t.keyPath = o;
		} else {
			if (a = Xn(e, t, n, a, o, void 0), e.status === 12) throw null;
			Zn(e, t, n, a, Qt !== 0, $t, en);
		}
		else if (typeof a == "string") if (h = t.blockedSegment, h === null) h = o.children, w = t.formatContext, k = t.keyPath, t.formatContext = se(w, a, o), t.keyPath = n, cr(e, t, h, -1), t.formatContext = w, t.keyPath = k;
		else {
			if (k = Me(h.chunks, a, o, e.resumableState, e.renderState, t.blockedPreamble, t.hoistableState, t.formatContext, h.lastPushedText), h.lastPushedText = !1, w = t.formatContext, f = t.keyPath, t.keyPath = n, (t.formatContext = se(w, a, o)).insertionMode === 3) {
				n = zn(e, 0, null, t.formatContext, !1, !1), h.preambleChildren.push(n), t.blockedSegment = n;
				try {
					n.status = 6, cr(e, t, k, -1), bt(n.chunks, e.renderState, n.lastPushedText, n.textEmbedded), n.status = 1;
				} finally {
					t.blockedSegment = h;
				}
			} else cr(e, t, k, -1);
			t.formatContext = w, t.keyPath = f;
			a: {
				switch (t = h.chunks, e = e.resumableState, a) {
					case "title":
					case "style":
					case "script":
					case "area":
					case "base":
					case "br":
					case "col":
					case "embed":
					case "hr":
					case "img":
					case "input":
					case "keygen":
					case "link":
					case "meta":
					case "param":
					case "source":
					case "track":
					case "wbr": break a;
					case "body":
						if (1 >= w.insertionMode) {
							e.hasBody = !0;
							break a;
						}
						break;
					case "html":
						if (w.insertionMode === 0) {
							e.hasHtml = !0;
							break a;
						}
						break;
					case "head": if (1 >= w.insertionMode) break a;
				}
				t.push(Pe(a));
			}
			h.lastPushedText = !1;
		}
		else {
			switch (a) {
				case x:
				case c:
				case l:
				case s:
					a = t.keyPath, t.keyPath = n, er(e, t, o.children, -1), t.keyPath = a;
					return;
				case b:
					a = t.blockedSegment, a === null ? o.mode !== "hidden" && (a = t.keyPath, t.keyPath = n, cr(e, t, o.children, -1), t.keyPath = a) : o.mode !== "hidden" && (e.renderState.generateStaticMarkup || a.chunks.push("<!--&-->"), a.lastPushedText = !1, h = t.keyPath, t.keyPath = n, cr(e, t, o.children, -1), t.keyPath = h, e.renderState.generateStaticMarkup || a.chunks.push("<!--/&-->"), a.lastPushedText = !1);
					return;
				case g:
					a: {
						if (a = o.children, o = o.revealOrder, o === "forwards" || o === "backwards" || o === "unstable_legacy-backwards") {
							if (E(a)) {
								Yn(e, t, n, a, o);
								break a;
							}
							if ((h = T(a)) && (h = h.call(a))) {
								if (w = h.next(), !w.done) {
									do
										w = h.next();
									while (!w.done);
									Yn(e, t, n, a, o);
								}
								break a;
							}
						}
						o === "together" ? (o = t.keyPath, h = t.row, w = t.row = Jn(null), w.boundaries = [], w.together = !0, t.keyPath = n, er(e, t, a, -1), --w.pendingTasks === 0 && Gn(e, w), t.keyPath = o, t.row = h, h !== null && 0 < w.pendingTasks && (h.pendingTasks++, w.next = h)) : (o = t.keyPath, t.keyPath = n, er(e, t, a, -1), t.keyPath = o);
					}
					return;
				case C:
				case y: throw Error(i(343));
				case m:
					a: if (t.replay !== null) {
						a = t.keyPath, h = t.formatContext, w = t.row, t.keyPath = n, t.formatContext = le(e.resumableState, h), t.row = null, n = o.children;
						try {
							cr(e, t, n, -1);
						} finally {
							t.keyPath = a, t.formatContext = h, t.row = w;
						}
					} else {
						a = t.keyPath, f = t.formatContext;
						var A = t.row, j = t.blockedBoundary;
						D = t.blockedPreamble;
						var M = t.hoistableState;
						S = t.blockedSegment;
						var N = o.fallback;
						o = o.children;
						var P = /* @__PURE__ */ new Set(), F = In(e, t.row, P, null, null);
						e.trackedPostpones !== null && (F.trackedContentKeyPath = n);
						var I = zn(e, S.chunks.length, F, t.formatContext, !1, !1);
						S.children.push(I), S.lastPushedText = !1;
						var L = zn(e, 0, null, t.formatContext, !1, !1);
						if (L.parentFlushed = !0, e.trackedPostpones !== null) {
							h = t.componentStack, w = [
								n[0],
								"Suspense Fallback",
								n[2]
							], k = [
								w[1],
								w[2],
								[],
								null
							], e.trackedPostpones.workingMap.set(w, k), F.trackedFallbackNode = k, t.blockedSegment = I, t.blockedPreamble = F.fallbackPreamble, t.keyPath = w, t.formatContext = ce(e.resumableState, f), t.componentStack = Vn(h), I.status = 6;
							try {
								cr(e, t, N, -1), bt(I.chunks, e.renderState, I.lastPushedText, I.textEmbedded), I.status = 1;
							} catch (t) {
								throw I.status = e.status === 12 ? 3 : 4, t;
							} finally {
								t.blockedSegment = S, t.blockedPreamble = D, t.keyPath = a, t.formatContext = f;
							}
							t = Ln(e, null, o, -1, F, L, F.contentPreamble, F.contentState, t.abortSet, n, le(e.resumableState, t.formatContext), t.context, t.treeContext, null, h), Bn(t), e.pingedTasks.push(t);
						} else {
							t.blockedBoundary = F, t.blockedPreamble = F.contentPreamble, t.hoistableState = F.contentState, t.blockedSegment = L, t.keyPath = n, t.formatContext = le(e.resumableState, f), t.row = null, L.status = 6;
							try {
								if (cr(e, t, o, -1), bt(L.chunks, e.renderState, L.lastPushedText, L.textEmbedded), L.status = 1, hr(F, L), F.pendingTasks === 0 && F.status === 0) {
									if (F.status = 1, !An(e, F)) {
										A !== null && --A.pendingTasks === 0 && Gn(e, A), e.pendingRootTasks === 0 && t.blockedPreamble && br(e);
										break a;
									}
								} else A !== null && A.together && qn(e, A);
							} catch (n) {
								F.status = 4, e.status === 12 ? (L.status = 3, h = e.fatalError) : (L.status = 4, h = n), w = Hn(t.componentStack), k = Un(e, h, w), F.errorDigest = k, ar(e, F);
							} finally {
								t.blockedBoundary = j, t.blockedPreamble = D, t.hoistableState = M, t.blockedSegment = S, t.keyPath = a, t.formatContext = f, t.row = A;
							}
							t = Ln(e, null, N, -1, j, I, F.fallbackPreamble, F.fallbackState, P, [
								n[0],
								"Suspense Fallback",
								n[2]
							], ce(e.resumableState, t.formatContext), t.context, t.treeContext, t.row, Vn(t.componentStack)), Bn(t), e.pingedTasks.push(t);
						}
					}
					return;
			}
			if (typeof a == "object" && a) switch (a.$$typeof) {
				case p:
					if ("ref" in o) for (N in h = {}, o) N !== "ref" && (h[N] = o[N]);
					else h = o;
					a = Xn(e, t, n, a.render, h, f), Zn(e, t, n, a, Qt !== 0, $t, en);
					return;
				case _:
					Qn(e, t, n, a.type, o, f);
					return;
				case d:
					if (w = o.children, h = t.keyPath, o = o.value, k = a._currentValue2, a._currentValue2 = o, f = Tt, Tt = a = {
						parent: f,
						depth: f === null ? 0 : f.depth + 1,
						context: a,
						parentValue: k,
						value: o
					}, t.context = a, t.keyPath = n, er(e, t, w, -1), e = Tt, e === null) throw Error(i(403));
					e.context._currentValue2 = e.parentValue, e = Tt = e.parent, t.context = e, t.keyPath = h;
					return;
				case u:
					o = o.children, a = o(a._context._currentValue2), o = t.keyPath, t.keyPath = n, er(e, t, a, -1), t.keyPath = o;
					return;
				case v:
					if (h = a._init, a = h(a._payload), e.status === 12) throw null;
					Qn(e, t, n, a, o, f);
					return;
			}
			throw Error(i(130, a == null ? a : typeof a, ""));
		}
	}
	function $n(e, t, n, i, a) {
		var o = t.replay, s = t.blockedBoundary, c = zn(e, 0, null, t.formatContext, !1, !1);
		c.id = n, c.parentFlushed = !0;
		try {
			t.replay = null, t.blockedSegment = c, cr(e, t, i, a), c.status = 1, s === null ? e.completedRootSegment = c : (hr(s, c), s.parentFlushed && e.partialBoundaries.push(s));
		} finally {
			t.replay = o, t.blockedSegment = null;
		}
	}
	function er(e, t, n, i) {
		t.replay !== null && typeof t.replay.slots == "number" ? $n(e, t, t.replay.slots, n, i) : (t.node = n, t.childIndex = i, n = t.componentStack, Bn(t), tr(e, t), t.componentStack = n);
	}
	function tr(e, t) {
		var n = t.node, s = t.childIndex;
		if (n !== null) {
			if (typeof n == "object") {
				switch (n.$$typeof) {
					case a:
						var c = n.type, l = n.key, u = n.props;
						n = u.ref;
						var f = n === void 0 ? null : n, p = Ct(c), h = l ?? (s === -1 ? 0 : s);
						if (l = [
							t.keyPath,
							p,
							h
						], t.replay !== null) a: {
							var g = t.replay;
							for (s = g.nodes, n = 0; n < s.length; n++) {
								var _ = s[n];
								if (h === _[1]) {
									if (_.length === 4) {
										if (p !== null && p !== _[0]) throw Error(i(490, _[0], p));
										var y = _[2];
										p = _[3], h = t.node, t.replay = {
											nodes: y,
											slots: p,
											pendingTasks: 1
										};
										try {
											if (Qn(e, t, l, c, u, f), t.replay.pendingTasks === 1 && 0 < t.replay.nodes.length) throw Error(i(488));
											t.replay.pendingTasks--;
										} catch (i) {
											if (typeof i == "object" && i && (i === Bt || typeof i.then == "function")) throw t.node === h ? t.replay = g : s.splice(n, 1), i;
											t.replay.pendingTasks--, u = Hn(t.componentStack), l = e, e = t.blockedBoundary, c = i, u = Un(l, c, u), ur(l, e, y, p, c, u);
										}
										t.replay = g;
									} else {
										if (c !== m) throw Error(i(490, "Suspense", Ct(c) || "Unknown"));
										b: {
											g = void 0, c = _[5], f = _[2], p = _[3], h = _[4] === null ? [] : _[4][2], _ = _[4] === null ? null : _[4][3];
											var b = t.keyPath, x = t.formatContext, S = t.row, C = t.replay, w = t.blockedBoundary, D = t.hoistableState, O = u.children, k = u.fallback, A = /* @__PURE__ */ new Set();
											u = In(e, t.row, A, null, null), u.parentFlushed = !0, u.rootSegmentID = c, t.blockedBoundary = u, t.hoistableState = u.contentState, t.keyPath = l, t.formatContext = le(e.resumableState, x), t.row = null, t.replay = {
												nodes: f,
												slots: p,
												pendingTasks: 1
											};
											try {
												if (cr(e, t, O, -1), t.replay.pendingTasks === 1 && 0 < t.replay.nodes.length) throw Error(i(488));
												if (t.replay.pendingTasks--, u.pendingTasks === 0 && u.status === 0) {
													u.status = 1, e.completedBoundaries.push(u);
													break b;
												}
											} catch (n) {
												u.status = 4, y = Hn(t.componentStack), g = Un(e, n, y), u.errorDigest = g, t.replay.pendingTasks--, e.clientRenderedBoundaries.push(u);
											} finally {
												t.blockedBoundary = w, t.hoistableState = D, t.replay = C, t.keyPath = b, t.formatContext = x, t.row = S;
											}
											y = Rn(e, null, {
												nodes: h,
												slots: _,
												pendingTasks: 0
											}, k, -1, w, u.fallbackState, A, [
												l[0],
												"Suspense Fallback",
												l[2]
											], ce(e.resumableState, t.formatContext), t.context, t.treeContext, t.row, Vn(t.componentStack)), Bn(y), e.pingedTasks.push(y);
										}
									}
									s.splice(n, 1);
									break a;
								}
							}
						}
						else Qn(e, t, l, c, u, f);
						return;
					case o: throw Error(i(257));
					case v:
						if (y = n._init, n = y(n._payload), e.status === 12) throw null;
						er(e, t, n, s);
						return;
				}
				if (E(n)) {
					nr(e, t, n, s);
					return;
				}
				if ((y = T(n)) && (y = y.call(n))) {
					if (n = y.next(), !n.done) {
						u = [];
						do
							u.push(n.value), n = y.next();
						while (!n.done);
						nr(e, t, u, s);
					}
					return;
				}
				if (typeof n.then == "function") return t.thenableState = null, er(e, t, yn(n), s);
				if (n.$$typeof === d) return er(e, t, n._currentValue2, s);
				throw s = Object.prototype.toString.call(n), Error(i(31, s === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : s));
			}
			typeof n == "string" ? (s = t.blockedSegment, s !== null && (s.lastPushedText = yt(s.chunks, n, e.renderState, s.lastPushedText))) : (typeof n == "number" || typeof n == "bigint") && (s = t.blockedSegment, s !== null && (s.lastPushedText = yt(s.chunks, "" + n, e.renderState, s.lastPushedText)));
		}
	}
	function nr(e, t, n, a) {
		var o = t.keyPath;
		if (a !== -1 && (t.keyPath = [
			t.keyPath,
			"Fragment",
			a
		], t.replay !== null)) {
			for (var s = t.replay, c = s.nodes, l = 0; l < c.length; l++) {
				var u = c[l];
				if (u[1] === a) {
					a = u[2], u = u[3], t.replay = {
						nodes: a,
						slots: u,
						pendingTasks: 1
					};
					try {
						if (nr(e, t, n, -1), t.replay.pendingTasks === 1 && 0 < t.replay.nodes.length) throw Error(i(488));
						t.replay.pendingTasks--;
					} catch (i) {
						if (typeof i == "object" && i && (i === Bt || typeof i.then == "function")) throw i;
						t.replay.pendingTasks--, n = Hn(t.componentStack);
						var d = t.blockedBoundary, f = i;
						n = Un(e, f, n), ur(e, d, a, u, f, n);
					}
					t.replay = s, c.splice(l, 1);
					break;
				}
			}
			t.keyPath = o;
			return;
		}
		if (s = t.treeContext, c = n.length, t.replay !== null && (l = t.replay.slots, typeof l == "object" && l)) {
			for (a = 0; a < c; a++) u = n[a], t.treeContext = Pt(s, c, a), d = l[a], typeof d == "number" ? ($n(e, t, d, u, a), delete l[a]) : cr(e, t, u, a);
			t.treeContext = s, t.keyPath = o;
			return;
		}
		for (l = 0; l < c; l++) a = n[l], t.treeContext = Pt(s, c, l), cr(e, t, a, l);
		t.treeContext = s, t.keyPath = o;
	}
	function rr(e, t, n) {
		if (n.status = 5, n.rootSegmentID = e.nextSegmentId++, e = n.trackedContentKeyPath, e === null) throw Error(i(486));
		var a = n.trackedFallbackNode, o = [], s = t.workingMap.get(e);
		return s === void 0 ? (n = [
			e[1],
			e[2],
			o,
			null,
			a,
			n.rootSegmentID
		], t.workingMap.set(e, n), Mr(n, e[0], t), n) : (s[4] = a, s[5] = n.rootSegmentID, s);
	}
	function ir(e, t, n, a) {
		a.status = 5;
		var o = n.keyPath, s = n.blockedBoundary;
		if (s === null) a.id = e.nextSegmentId++, t.rootSlots = a.id, e.completedRootSegment !== null && (e.completedRootSegment.status = 5);
		else {
			if (s !== null && s.status === 0) {
				var c = rr(e, t, s);
				if (s.trackedContentKeyPath === o && n.childIndex === -1) {
					a.id === -1 && (a.id = a.parentFlushed ? s.rootSegmentID : e.nextSegmentId++), c[3] = a.id;
					return;
				}
			}
			if (a.id === -1 && (a.id = a.parentFlushed && s !== null ? s.rootSegmentID : e.nextSegmentId++), n.childIndex === -1) o === null ? t.rootSlots = a.id : (n = t.workingMap.get(o), n === void 0 ? (n = [
				o[1],
				o[2],
				[],
				a.id
			], Mr(n, o[0], t)) : n[3] = a.id);
			else {
				if (o === null) {
					if (e = t.rootSlots, e === null) e = t.rootSlots = {};
					else if (typeof e == "number") throw Error(i(491));
				} else if (s = t.workingMap, c = s.get(o), c === void 0) e = {}, c = [
					o[1],
					o[2],
					[],
					e
				], s.set(o, c), Mr(c, o[0], t);
				else if (e = c[3], e === null) e = c[3] = {};
				else if (typeof e == "number") throw Error(i(491));
				e[n.childIndex] = a.id;
			}
		}
	}
	function ar(e, t) {
		e = e.trackedPostpones, e !== null && (t = t.trackedContentKeyPath, t !== null && (t = e.workingMap.get(t), t !== void 0 && (t.length = 4, t[2] = [], t[3] = null)));
	}
	function or(e, t, n) {
		return Rn(e, n, t.replay, t.node, t.childIndex, t.blockedBoundary, t.hoistableState, t.abortSet, t.keyPath, t.formatContext, t.context, t.treeContext, t.row, t.componentStack);
	}
	function sr(e, t, n) {
		var i = t.blockedSegment, a = zn(e, i.chunks.length, null, t.formatContext, i.lastPushedText, !0);
		return i.children.push(a), i.lastPushedText = !1, Ln(e, n, t.node, t.childIndex, t.blockedBoundary, a, t.blockedPreamble, t.hoistableState, t.abortSet, t.keyPath, t.formatContext, t.context, t.treeContext, t.row, t.componentStack);
	}
	function cr(e, t, n, i) {
		var a = t.formatContext, o = t.context, s = t.keyPath, c = t.treeContext, l = t.componentStack, u = t.blockedSegment;
		if (u === null) {
			u = t.replay;
			try {
				return er(e, t, n, i);
			} catch (d) {
				if (un(), n = d === Bt ? Ut() : d, e.status !== 12 && typeof n == "object" && n) {
					if (typeof n.then == "function") {
						i = d === Bt ? ln() : null, e = or(e, t, i).ping, n.then(e, e), t.formatContext = a, t.context = o, t.keyPath = s, t.treeContext = c, t.componentStack = l, t.replay = u, jt(o);
						return;
					}
					if (n.message === "Maximum call stack size exceeded") {
						n = d === Bt ? ln() : null, n = or(e, t, n), e.pingedTasks.push(n), t.formatContext = a, t.context = o, t.keyPath = s, t.treeContext = c, t.componentStack = l, t.replay = u, jt(o);
						return;
					}
				}
			}
		} else {
			var d = u.children.length, f = u.chunks.length;
			try {
				return er(e, t, n, i);
			} catch (i) {
				if (un(), u.children.length = d, u.chunks.length = f, n = i === Bt ? Ut() : i, e.status !== 12 && typeof n == "object" && n) {
					if (typeof n.then == "function") {
						u = n, n = i === Bt ? ln() : null, e = sr(e, t, n).ping, u.then(e, e), t.formatContext = a, t.context = o, t.keyPath = s, t.treeContext = c, t.componentStack = l, jt(o);
						return;
					}
					if (n.message === "Maximum call stack size exceeded") {
						u = i === Bt ? ln() : null, u = sr(e, t, u), e.pingedTasks.push(u), t.formatContext = a, t.context = o, t.keyPath = s, t.treeContext = c, t.componentStack = l, jt(o);
						return;
					}
				}
			}
		}
		throw t.formatContext = a, t.context = o, t.keyPath = s, t.treeContext = c, jt(o), n;
	}
	function lr(e) {
		var t = e.blockedBoundary, n = e.blockedSegment;
		n !== null && (n.status = 3, gr(this, t, e.row, n));
	}
	function ur(e, t, n, a, o, s) {
		for (var c = 0; c < n.length; c++) {
			var l = n[c];
			if (l.length === 4) ur(e, t, l[2], l[3], o, s);
			else {
				l = l[5];
				var u = e, d = s, f = In(u, null, /* @__PURE__ */ new Set(), null, null);
				f.parentFlushed = !0, f.rootSegmentID = l, f.status = 4, f.errorDigest = d, f.parentFlushed && u.clientRenderedBoundaries.push(f);
			}
		}
		if (n.length = 0, a !== null) {
			if (t === null) throw Error(i(487));
			if (t.status !== 4 && (t.status = 4, t.errorDigest = s, t.parentFlushed && e.clientRenderedBoundaries.push(t)), typeof a == "object") for (var p in a) delete a[p];
		}
	}
	function dr(e, t, n) {
		var i = e.blockedBoundary, a = e.blockedSegment;
		if (a !== null) {
			if (a.status === 6) return;
			a.status = 3;
		}
		var o = Hn(e.componentStack);
		if (i === null) {
			if (t.status !== 13 && t.status !== 14) {
				if (i = e.replay, i === null) {
					t.trackedPostpones !== null && a !== null ? (i = t.trackedPostpones, Un(t, n, o), ir(t, i, e, a), gr(t, null, e.row, a)) : (Un(t, n, o), Wn(t, n));
					return;
				}
				i.pendingTasks--, i.pendingTasks === 0 && 0 < i.nodes.length && (a = Un(t, n, o), ur(t, null, i.nodes, i.slots, n, a)), t.pendingRootTasks--, t.pendingRootTasks === 0 && pr(t);
			}
		} else {
			var s = t.trackedPostpones;
			if (i.status !== 4) {
				if (s !== null && a !== null) return Un(t, n, o), ir(t, s, e, a), i.fallbackAbortableTasks.forEach(function(e) {
					return dr(e, t, n);
				}), i.fallbackAbortableTasks.clear(), gr(t, i, e.row, a);
				i.status = 4, a = Un(t, n, o), i.status = 4, i.errorDigest = a, ar(t, i), i.parentFlushed && t.clientRenderedBoundaries.push(i);
			}
			i.pendingTasks--, a = i.row, a !== null && --a.pendingTasks === 0 && Gn(t, a), i.fallbackAbortableTasks.forEach(function(e) {
				return dr(e, t, n);
			}), i.fallbackAbortableTasks.clear();
		}
		e = e.row, e !== null && --e.pendingTasks === 0 && Gn(t, e), t.allPendingTasks--, t.allPendingTasks === 0 && mr(t);
	}
	function fr(e, t) {
		try {
			var n = e.renderState, i = n.onHeaders;
			if (i) {
				var a = n.headers;
				if (a) {
					n.headers = null;
					var o = a.preconnects;
					if (a.fontPreloads && (o && (o += ", "), o += a.fontPreloads), a.highImagePreloads && (o && (o += ", "), o += a.highImagePreloads), !t) {
						var s = n.styles.values(), c = s.next();
						b: for (; 0 < a.remainingCapacity && !c.done; c = s.next()) for (var l = c.value.sheets.values(), u = l.next(); 0 < a.remainingCapacity && !u.done; u = l.next()) {
							var d = u.value, f = d.props, p = f.href, m = d.props, h = ut(m.href, "style", {
								crossOrigin: m.crossOrigin,
								integrity: m.integrity,
								nonce: m.nonce,
								type: m.type,
								fetchPriority: m.fetchPriority,
								referrerPolicy: m.referrerPolicy,
								media: m.media
							});
							if (0 <= (a.remainingCapacity -= h.length + 2)) n.resets.style[p] = ne, o && (o += ", "), o += h, n.resets.style[p] = typeof f.crossOrigin == "string" || typeof f.integrity == "string" ? [f.crossOrigin, f.integrity] : ne;
							else break b;
						}
					}
					i(o ? { Link: o } : {});
				}
			}
		} catch (t) {
			Un(e, t, {});
		}
	}
	function pr(e) {
		e.trackedPostpones === null && fr(e, !0), e.trackedPostpones === null && br(e), e.onShellError = zt, e = e.onShellReady, e();
	}
	function mr(e) {
		fr(e, e.trackedPostpones === null ? !0 : e.completedRootSegment === null || e.completedRootSegment.status !== 5), br(e), e = e.onAllReady, e();
	}
	function hr(e, t) {
		if (t.chunks.length === 0 && t.children.length === 1 && t.children[0].boundary === null && t.children[0].id === -1) {
			var n = t.children[0];
			n.id = t.id, n.parentFlushed = !0, n.status !== 1 && n.status !== 3 && n.status !== 4 || hr(e, n);
		} else e.completedSegments.push(t);
	}
	function gr(e, t, n, a) {
		if (n !== null && (--n.pendingTasks === 0 ? Gn(e, n) : n.together && qn(e, n)), e.allPendingTasks--, t === null) {
			if (a !== null && a.parentFlushed) {
				if (e.completedRootSegment !== null) throw Error(i(389));
				e.completedRootSegment = a;
			}
			e.pendingRootTasks--, e.pendingRootTasks === 0 && pr(e);
		} else if (t.pendingTasks--, t.status !== 4) if (t.pendingTasks === 0) {
			if (t.status === 0 && (t.status = 1), a !== null && a.parentFlushed && (a.status === 1 || a.status === 3) && hr(t, a), t.parentFlushed && e.completedBoundaries.push(t), t.status === 1) n = t.row, n !== null && _t(n.hoistables, t.contentState), An(e, t) || (t.fallbackAbortableTasks.forEach(lr, e), t.fallbackAbortableTasks.clear(), n !== null && --n.pendingTasks === 0 && Gn(e, n)), e.pendingRootTasks === 0 && e.trackedPostpones === null && t.contentPreamble !== null && br(e);
			else if (t.status === 5 && (t = t.row, t !== null)) {
				if (e.trackedPostpones !== null) {
					n = e.trackedPostpones;
					var o = t.next;
					if (o !== null && (a = o.boundaries, a !== null)) for (o.boundaries = null, o = 0; o < a.length; o++) {
						var s = a[o];
						rr(e, n, s), gr(e, s, null, null);
					}
				}
				--t.pendingTasks === 0 && Gn(e, t);
			}
		} else a === null || !a.parentFlushed || a.status !== 1 && a.status !== 3 || (hr(t, a), t.completedSegments.length === 1 && t.parentFlushed && e.partialBoundaries.push(t)), t = t.row, t !== null && t.together && qn(e, t);
		e.allPendingTasks === 0 && mr(e);
	}
	function _r(e) {
		if (e.status !== 14 && e.status !== 13) {
			var t = Tt, n = V.H;
			V.H = xn;
			var a = V.A;
			V.A = Cn;
			var o = Pn;
			Pn = e;
			var s = Sn;
			Sn = e.resumableState;
			try {
				var c = e.pingedTasks, l;
				for (l = 0; l < c.length; l++) {
					var u = c[l], d = e, f = u.blockedSegment;
					if (f === null) {
						var p = d;
						if (u.replay.pendingTasks !== 0) {
							jt(u.context);
							try {
								if (typeof u.replay.slots == "number" ? $n(p, u, u.replay.slots, u.node, u.childIndex) : tr(p, u), u.replay.pendingTasks === 1 && 0 < u.replay.nodes.length) throw Error(i(488));
								u.replay.pendingTasks--, u.abortSet.delete(u), gr(p, u.blockedBoundary, u.row, null);
							} catch (e) {
								un();
								var m = e === Bt ? Ut() : e;
								if (typeof m == "object" && m && typeof m.then == "function") {
									var h = u.ping;
									m.then(h, h), u.thenableState = e === Bt ? ln() : null;
								} else {
									u.replay.pendingTasks--, u.abortSet.delete(u);
									var g = Hn(u.componentStack);
									d = void 0;
									var _ = p, v = u.blockedBoundary, y = p.status === 12 ? p.fatalError : m, b = u.replay.nodes, x = u.replay.slots;
									d = Un(_, y, g), ur(_, v, b, x, y, d), p.pendingRootTasks--, p.pendingRootTasks === 0 && pr(p), p.allPendingTasks--, p.allPendingTasks === 0 && mr(p);
								}
							}
						}
					} else if (p = void 0, _ = f, _.status === 0) {
						_.status = 6, jt(u.context);
						var S = _.children.length, C = _.chunks.length;
						try {
							tr(d, u), bt(_.chunks, d.renderState, _.lastPushedText, _.textEmbedded), u.abortSet.delete(u), _.status = 1, gr(d, u.blockedBoundary, u.row, _);
						} catch (e) {
							un(), _.children.length = S, _.chunks.length = C;
							var w = e === Bt ? Ut() : d.status === 12 ? d.fatalError : e;
							if (d.status === 12 && d.trackedPostpones !== null) {
								var T = d.trackedPostpones, E = Hn(u.componentStack);
								u.abortSet.delete(u), Un(d, w, E), ir(d, T, u, _), gr(d, u.blockedBoundary, u.row, _);
							} else if (typeof w == "object" && w && typeof w.then == "function") {
								_.status = 0, u.thenableState = e === Bt ? ln() : null;
								var D = u.ping;
								w.then(D, D);
							} else {
								var O = Hn(u.componentStack);
								u.abortSet.delete(u), _.status = 4;
								var k = u.blockedBoundary, A = u.row;
								if (A !== null && --A.pendingTasks === 0 && Gn(d, A), d.allPendingTasks--, p = Un(d, w, O), k === null) Wn(d, w);
								else if (k.pendingTasks--, k.status !== 4) {
									k.status = 4, k.errorDigest = p, ar(d, k);
									var j = k.row;
									j !== null && --j.pendingTasks === 0 && Gn(d, j), k.parentFlushed && d.clientRenderedBoundaries.push(k), d.pendingRootTasks === 0 && d.trackedPostpones === null && k.contentPreamble !== null && br(d);
								}
								d.allPendingTasks === 0 && mr(d);
							}
						}
					}
				}
				c.splice(0, l), e.destination !== null && Or(e, e.destination);
			} catch (t) {
				Un(e, t, {}), Wn(e, t);
			} finally {
				Sn = s, V.H = n, V.A = a, n === xn && jt(t), Pn = o;
			}
		}
	}
	function vr(e, t, n) {
		t.preambleChildren.length && n.push(t.preambleChildren);
		for (var i = !1, a = 0; a < t.children.length; a++) i = yr(e, t.children[a], n) || i;
		return i;
	}
	function yr(e, t, n) {
		var a = t.boundary;
		if (a === null) return vr(e, t, n);
		var o = a.contentPreamble, s = a.fallbackPreamble;
		if (o === null || s === null) return !1;
		switch (a.status) {
			case 1:
				if (Fe(e.renderState, o), e.byteSize += a.byteSize, t = a.completedSegments[0], !t) throw Error(i(391));
				return vr(e, t, n);
			case 5: if (e.trackedPostpones !== null) return !0;
			case 4: if (t.status === 1) return Fe(e.renderState, s), vr(e, t, n);
			default: return !0;
		}
	}
	function br(e) {
		if (e.completedRootSegment && e.completedPreambleSegments === null) {
			var t = [], n = e.byteSize, i = yr(e, e.completedRootSegment, t), a = e.renderState.preamble;
			!1 === i || a.headChunks && a.bodyChunks ? e.completedPreambleSegments = t : e.byteSize = n;
		}
	}
	function xr(e, t, n, a) {
		switch (n.parentFlushed = !0, n.status) {
			case 0: n.id = e.nextSegmentId++;
			case 5: return a = n.id, n.lastPushedText = !1, n.textEmbedded = !1, e = e.renderState, t.push("<template id=\""), t.push(e.placeholderPrefix), e = a.toString(16), t.push(e), t.push("\"></template>");
			case 1:
				n.status = 2;
				var o = !0, s = n.chunks, c = 0;
				n = n.children;
				for (var l = 0; l < n.length; l++) {
					for (o = n[l]; c < o.index; c++) t.push(s[c]);
					o = Cr(e, t, o, a);
				}
				for (; c < s.length - 1; c++) t.push(s[c]);
				return c < s.length && (o = t.push(s[c])), o;
			case 3: return !0;
			default: throw Error(i(390));
		}
	}
	var Sr = 0;
	function Cr(e, t, n, a) {
		var o = n.boundary;
		if (o === null) return xr(e, t, n, a);
		if (o.parentFlushed = !0, o.status === 4) {
			var s = o.row;
			return s !== null && --s.pendingTasks === 0 && Gn(e, s), e.renderState.generateStaticMarkup || (o = o.errorDigest, t.push("<!--$!-->"), t.push("<template"), o && (t.push(" data-dgst=\""), o = L(o), t.push(o), t.push("\"")), t.push("></template>")), xr(e, t, n, a), e = e.renderState.generateStaticMarkup ? !0 : t.push("<!--/$-->"), e;
		}
		if (o.status !== 1) return o.status === 0 && (o.rootSegmentID = e.nextSegmentId++), 0 < o.completedSegments.length && e.partialBoundaries.push(o), Le(t, e.renderState, o.rootSegmentID), a && _t(a, o.fallbackState), xr(e, t, n, a), t.push("<!--/$-->");
		if (!Dr && An(e, o) && Sr + o.byteSize > e.progressiveChunkSize) return o.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(o), Le(t, e.renderState, o.rootSegmentID), xr(e, t, n, a), t.push("<!--/$-->");
		if (Sr += o.byteSize, a && _t(a, o.contentState), n = o.row, n !== null && An(e, o) && --n.pendingTasks === 0 && Gn(e, n), e.renderState.generateStaticMarkup || t.push("<!--$-->"), n = o.completedSegments, n.length !== 1) throw Error(i(391));
		return Cr(e, t, n[0], a), e = e.renderState.generateStaticMarkup ? !0 : t.push("<!--/$-->"), e;
	}
	function wr(e, t, n, i) {
		return Re(t, e.renderState, n.parentFormatContext, n.id), Cr(e, t, n, i), ze(t, n.parentFormatContext);
	}
	function Tr(e, t, n) {
		Sr = n.byteSize;
		for (var i = n.completedSegments, a = 0; a < i.length; a++) Er(e, t, n, i[a]);
		i.length = 0, i = n.row, i !== null && An(e, n) && --i.pendingTasks === 0 && Gn(e, i), qe(t, n.contentState, e.renderState), i = e.resumableState, e = e.renderState, a = n.rootSegmentID, n = n.contentState;
		var o = e.stylesToHoist;
		return e.stylesToHoist = !1, t.push(e.startInlineScript), t.push(">"), o ? (!(i.instructions & 4) && (i.instructions |= 4, t.push("$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data=\"$!\",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};")), !(i.instructions & 2) && (i.instructions |= 2, t.push("$RB=[];$RV=function(a){$RT=performance.now();for(var b=0;b<a.length;b+=2){var c=a[b],e=a[b+1];null!==e.parentNode&&e.parentNode.removeChild(e);var f=c.parentNode;if(f){var g=c.previousSibling,h=0;do{if(c&&8===c.nodeType){var d=c.data;if(\"/$\"===d||\"/&\"===d)if(0===h)break;else h--;else\"$\"!==d&&\"$?\"!==d&&\"$~\"!==d&&\"$!\"!==d&&\"&\"!==d||h++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;e.firstChild;)f.insertBefore(e.firstChild,c);g.data=\"$\";g._reactRetry&&requestAnimationFrame(g._reactRetry)}}a.length=0};\n$RC=function(a,b){if(b=document.getElementById(b))(a=document.getElementById(a))?(a.previousSibling.data=\"$~\",$RB.push(a,b),2===$RB.length&&(\"number\"!==typeof $RT?requestAnimationFrame($RV.bind(null,$RB)):(a=performance.now(),setTimeout($RV.bind(null,$RB),2300>a&&2E3<a?2300-a:$RT+300-a)))):b.parentNode.removeChild(b)};")), i.instructions & 8 ? t.push("$RR(\"") : (i.instructions |= 8, t.push("$RM=new Map;$RR=function(n,w,p){function u(q){this._p=null;q()}for(var r=new Map,t=document,h,b,e=t.querySelectorAll(\"link[data-precedence],style[data-precedence]\"),v=[],k=0;b=e[k++];)\"not all\"===b.getAttribute(\"media\")?v.push(b):(\"LINK\"===b.tagName&&$RM.set(b.getAttribute(\"href\"),b),r.set(b.dataset.precedence,h=b));e=0;b=[];var l,a;for(k=!0;;){if(k){var f=p[e++];if(!f){k=!1;e=0;continue}var c=!1,m=0;var d=f[m++];if(a=$RM.get(d)){var g=a._p;c=!0}else{a=t.createElement(\"link\");a.href=d;a.rel=\n\"stylesheet\";for(a.dataset.precedence=l=f[m++];g=f[m++];)a.setAttribute(g,f[m++]);g=a._p=new Promise(function(q,x){a.onload=u.bind(a,q);a.onerror=u.bind(a,x)});$RM.set(d,a)}d=a.getAttribute(\"media\");!g||d&&!matchMedia(d).matches||b.push(g);if(c)continue}else{a=v[e++];if(!a)break;l=a.getAttribute(\"data-precedence\");a.removeAttribute(\"media\")}c=r.get(l)||h;c===h&&(h=a);r.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=t.head,c.insertBefore(a,c.firstChild))}if(p=document.getElementById(n))p.previousSibling.data=\n\"$~\";Promise.all(b).then($RC.bind(null,n,w),$RX.bind(null,n,\"CSS failed to load\"))};$RR(\""))) : (!(i.instructions & 2) && (i.instructions |= 2, t.push("$RB=[];$RV=function(a){$RT=performance.now();for(var b=0;b<a.length;b+=2){var c=a[b],e=a[b+1];null!==e.parentNode&&e.parentNode.removeChild(e);var f=c.parentNode;if(f){var g=c.previousSibling,h=0;do{if(c&&8===c.nodeType){var d=c.data;if(\"/$\"===d||\"/&\"===d)if(0===h)break;else h--;else\"$\"!==d&&\"$?\"!==d&&\"$~\"!==d&&\"$!\"!==d&&\"&\"!==d||h++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;e.firstChild;)f.insertBefore(e.firstChild,c);g.data=\"$\";g._reactRetry&&requestAnimationFrame(g._reactRetry)}}a.length=0};\n$RC=function(a,b){if(b=document.getElementById(b))(a=document.getElementById(a))?(a.previousSibling.data=\"$~\",$RB.push(a,b),2===$RB.length&&(\"number\"!==typeof $RT?requestAnimationFrame($RV.bind(null,$RB)):(a=performance.now(),setTimeout($RV.bind(null,$RB),2300>a&&2E3<a?2300-a:$RT+300-a)))):b.parentNode.removeChild(b)};")), t.push("$RC(\"")), i = a.toString(16), t.push(e.boundaryPrefix), t.push(i), t.push("\",\""), t.push(e.segmentPrefix), t.push(i), o ? (t.push("\","), $e(t, n)) : t.push("\""), n = t.push(")<\/script>"), Ie(t, e) && n;
	}
	function Er(e, t, n, a) {
		if (a.status === 2) return !0;
		var o = n.contentState, s = a.id;
		if (s === -1) {
			if ((a.id = n.rootSegmentID) === -1) throw Error(i(392));
			return wr(e, t, a, o);
		}
		return s === n.rootSegmentID ? wr(e, t, a, o) : (wr(e, t, a, o), n = e.resumableState, e = e.renderState, t.push(e.startInlineScript), t.push(">"), n.instructions & 1 ? t.push("$RS(\"") : (n.instructions |= 1, t.push("$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS(\"")), t.push(e.segmentPrefix), s = s.toString(16), t.push(s), t.push("\",\""), t.push(e.placeholderPrefix), t.push(s), t = t.push("\")<\/script>"), t);
	}
	var Dr = !1;
	function Or(e, t) {
		try {
			if (!(0 < e.pendingRootTasks)) {
				var n, i = e.completedRootSegment;
				if (i !== null) {
					if (i.status === 5) return;
					var a = e.completedPreambleSegments;
					if (a === null) return;
					Sr = e.byteSize;
					var o = e.resumableState, s = e.renderState, c = s.preamble, l = c.htmlChunks, u = c.headChunks, d;
					if (l) {
						for (d = 0; d < l.length; d++) t.push(l[d]);
						if (u) for (d = 0; d < u.length; d++) t.push(u[d]);
						else {
							var f = je("head");
							t.push(f), t.push(">");
						}
					} else if (u) for (d = 0; d < u.length; d++) t.push(u[d]);
					var p = s.charsetChunks;
					for (d = 0; d < p.length; d++) t.push(p[d]);
					p.length = 0, s.preconnects.forEach(Y, t), s.preconnects.clear();
					var m = s.viewportChunks;
					for (d = 0; d < m.length; d++) t.push(m[d]);
					m.length = 0, s.fontPreloads.forEach(Y, t), s.fontPreloads.clear(), s.highImagePreloads.forEach(Y, t), s.highImagePreloads.clear(), W = s, s.styles.forEach(Ye, t), W = null;
					var h = s.importMapChunks;
					for (d = 0; d < h.length; d++) t.push(h[d]);
					h.length = 0, s.bootstrapScripts.forEach(Y, t), s.scripts.forEach(Y, t), s.scripts.clear(), s.bulkPreloads.forEach(Y, t), s.bulkPreloads.clear(), o.instructions |= 32;
					var g = s.hoistableChunks;
					for (d = 0; d < g.length; d++) t.push(g[d]);
					for (o = g.length = 0; o < a.length; o++) {
						var _ = a[o];
						for (s = 0; s < _.length; s++) Cr(e, t, _[s], null);
					}
					var v = e.renderState.preamble, y = v.headChunks;
					if (v.htmlChunks || y) {
						var b = Pe("head");
						t.push(b);
					}
					var x = v.bodyChunks;
					if (x) for (a = 0; a < x.length; a++) t.push(x[a]);
					Cr(e, t, i, null), e.completedRootSegment = null;
					var S = e.renderState;
					if (e.allPendingTasks !== 0 || e.clientRenderedBoundaries.length !== 0 || e.completedBoundaries.length !== 0 || e.trackedPostpones !== null && (e.trackedPostpones.rootNodes.length !== 0 || e.trackedPostpones.rootSlots !== null)) {
						var C = e.resumableState;
						if (!(C.instructions & 64)) {
							if (C.instructions |= 64, t.push(S.startInlineScript), !(C.instructions & 32)) {
								C.instructions |= 32;
								var w = "_" + C.idPrefix + "R_";
								t.push(" id=\"");
								var T = L(w);
								t.push(T), t.push("\"");
							}
							t.push(">"), t.push("requestAnimationFrame(function(){$RT=performance.now()});"), t.push("<\/script>");
						}
					}
					Ie(t, S);
				}
				var E = e.renderState;
				i = 0;
				var D = E.viewportChunks;
				for (i = 0; i < D.length; i++) t.push(D[i]);
				D.length = 0, E.preconnects.forEach(Y, t), E.preconnects.clear(), E.fontPreloads.forEach(Y, t), E.fontPreloads.clear(), E.highImagePreloads.forEach(Y, t), E.highImagePreloads.clear(), E.styles.forEach(Ze, t), E.scripts.forEach(Y, t), E.scripts.clear(), E.bulkPreloads.forEach(Y, t), E.bulkPreloads.clear();
				var O = E.hoistableChunks;
				for (i = 0; i < O.length; i++) t.push(O[i]);
				O.length = 0;
				var k = e.clientRenderedBoundaries;
				for (n = 0; n < k.length; n++) {
					var A = k[n];
					E = t;
					var j = e.resumableState, M = e.renderState, N = A.rootSegmentID, P = A.errorDigest;
					E.push(M.startInlineScript), E.push(">"), j.instructions & 4 ? E.push("$RX(\"") : (j.instructions |= 4, E.push("$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data=\"$!\",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};;$RX(\"")), E.push(M.boundaryPrefix);
					var F = N.toString(16);
					if (E.push(F), E.push("\""), P) {
						E.push(",");
						var I = Ve(P || "");
						E.push(I);
					}
					var R = E.push(")<\/script>");
					if (!R) {
						e.destination = null, n++, k.splice(0, n);
						return;
					}
				}
				k.splice(0, n);
				var ee = e.completedBoundaries;
				for (n = 0; n < ee.length; n++) if (!Tr(e, t, ee[n])) {
					e.destination = null, n++, ee.splice(0, n);
					return;
				}
				ee.splice(0, n), Dr = !0;
				var z = e.partialBoundaries;
				for (n = 0; n < z.length; n++) {
					var B = z[n];
					a: {
						k = e, A = t, Sr = B.byteSize;
						var V = B.completedSegments;
						for (R = 0; R < V.length; R++) if (!Er(k, A, B, V[R])) {
							R++, V.splice(0, R);
							var te = !1;
							break a;
						}
						V.splice(0, R);
						var H = B.row;
						H !== null && H.together && B.pendingTasks === 1 && (H.pendingTasks === 1 ? Kn(k, H, H.hoistables) : H.pendingTasks--), te = qe(A, B.contentState, k.renderState);
					}
					if (!te) {
						e.destination = null, n++, z.splice(0, n);
						return;
					}
				}
				z.splice(0, n), Dr = !1;
				var U = e.completedBoundaries;
				for (n = 0; n < U.length; n++) if (!Tr(e, t, U[n])) {
					e.destination = null, n++, U.splice(0, n);
					return;
				}
				U.splice(0, n);
			}
		} finally {
			Dr = !1, e.allPendingTasks === 0 && e.clientRenderedBoundaries.length === 0 && e.completedBoundaries.length === 0 && (e.flushScheduled = !1, n = e.resumableState, n.hasBody && (z = Pe("body"), t.push(z)), n.hasHtml && (n = Pe("html"), t.push(n)), e.status = 14, t.push(null), e.destination = null);
		}
	}
	function kr(e) {
		if (!1 === e.flushScheduled && e.pingedTasks.length === 0 && e.destination !== null) {
			e.flushScheduled = !0;
			var t = e.destination;
			t ? Or(e, t) : e.flushScheduled = !1;
		}
	}
	function Ar(e, t) {
		if (e.status === 13) e.status = 14, t.destroy(e.fatalError);
		else if (e.status !== 14 && e.destination === null) {
			e.destination = t;
			try {
				Or(e, t);
			} catch (t) {
				Un(e, t, {}), Wn(e, t);
			}
		}
	}
	function jr(e, t) {
		(e.status === 11 || e.status === 10) && (e.status = 12);
		try {
			var n = e.abortableTasks;
			if (0 < n.size) {
				var a = t === void 0 ? Error(i(432)) : typeof t == "object" && t && typeof t.then == "function" ? Error(i(530)) : t;
				e.fatalError = a, n.forEach(function(t) {
					return dr(t, e, a);
				}), n.clear();
			}
			e.destination !== null && Or(e, e.destination);
		} catch (t) {
			Un(e, t, {}), Wn(e, t);
		}
	}
	function Mr(e, t, n) {
		if (t === null) n.rootNodes.push(e);
		else {
			var i = n.workingMap, a = i.get(t);
			a === void 0 && (a = [
				t[1],
				t[2],
				[],
				null
			], i.set(t, a), Mr(a, t[0], n)), a[2].push(e);
		}
	}
	function Nr() {}
	function Pr(e, t, n, a) {
		var o = !1, s = null, c = "", l = !1;
		if (t = ae(t ? t.identifierPrefix : void 0), e = Nn(e, t, vt(t, n), oe(0, null, 0, null), Infinity, Nr, void 0, function() {
			l = !0;
		}, void 0, void 0, void 0), e.flushScheduled = e.destination !== null, _r(e), e.status === 10 && (e.status = 11), e.trackedPostpones === null && fr(e, e.pendingRootTasks === 0), jr(e, a), Ar(e, {
			push: function(e) {
				return e !== null && (c += e), !0;
			},
			destroy: function(e) {
				o = !0, s = e;
			}
		}), o && s !== a) throw s;
		if (!l) throw Error(i(426));
		return c;
	}
	e.renderToStaticMarkup = function(e, t) {
		return Pr(e, t, !0, "The server used \"renderToStaticMarkup\" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to \"renderToReadableStream\" which supports Suspense on the server");
	}, e.renderToString = function(e, t) {
		return Pr(e, t, !1, "The server used \"renderToString\" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to \"renderToReadableStream\" which supports Suspense on the server");
	}, e.version = "19.2.0";
})), require_react_dom_server_browser_production = /* @__PURE__ */ __commonJSMin(((e) => {
	var t = require_react(), n = require_react_dom();
	function i(e) {
		var t = "https://react.dev/errors/" + e;
		if (1 < arguments.length) {
			t += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
		}
		return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	var a = Symbol.for("react.transitional.element"), o = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), u = Symbol.for("react.consumer"), d = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), y = Symbol.for("react.scope"), b = Symbol.for("react.activity"), x = Symbol.for("react.legacy_hidden"), S = Symbol.for("react.memo_cache_sentinel"), C = Symbol.for("react.view_transition"), w = Symbol.iterator;
	function T(e) {
		return typeof e != "object" || !e ? null : (e = w && e[w] || e["@@iterator"], typeof e == "function" ? e : null);
	}
	var E = Array.isArray;
	function D(e, t) {
		var n = e.length & 3, i = e.length - n, a = t;
		for (t = 0; t < i;) {
			var o = e.charCodeAt(t) & 255 | (e.charCodeAt(++t) & 255) << 8 | (e.charCodeAt(++t) & 255) << 16 | (e.charCodeAt(++t) & 255) << 24;
			++t, o = 3432918353 * (o & 65535) + ((3432918353 * (o >>> 16) & 65535) << 16) & 4294967295, o = o << 15 | o >>> 17, o = 461845907 * (o & 65535) + ((461845907 * (o >>> 16) & 65535) << 16) & 4294967295, a ^= o, a = a << 13 | a >>> 19, a = 5 * (a & 65535) + ((5 * (a >>> 16) & 65535) << 16) & 4294967295, a = (a & 65535) + 27492 + (((a >>> 16) + 58964 & 65535) << 16);
		}
		switch (o = 0, n) {
			case 3: o ^= (e.charCodeAt(t + 2) & 255) << 16;
			case 2: o ^= (e.charCodeAt(t + 1) & 255) << 8;
			case 1: o ^= e.charCodeAt(t) & 255, o = 3432918353 * (o & 65535) + ((3432918353 * (o >>> 16) & 65535) << 16) & 4294967295, o = o << 15 | o >>> 17, a ^= 461845907 * (o & 65535) + ((461845907 * (o >>> 16) & 65535) << 16) & 4294967295;
		}
		return a ^= e.length, a ^= a >>> 16, a = 2246822507 * (a & 65535) + ((2246822507 * (a >>> 16) & 65535) << 16) & 4294967295, a ^= a >>> 13, a = 3266489909 * (a & 65535) + ((3266489909 * (a >>> 16) & 65535) << 16) & 4294967295, (a ^ a >>> 16) >>> 0;
	}
	var O = new MessageChannel(), k = [];
	O.port1.onmessage = function() {
		var e = k.shift();
		e && e();
	};
	function A(e) {
		k.push(e), O.port2.postMessage(null);
	}
	function j(e) {
		setTimeout(function() {
			throw e;
		});
	}
	var M = Promise, N = typeof queueMicrotask == "function" ? queueMicrotask : function(e) {
		M.resolve(null).then(e).catch(j);
	}, P = null, F = 0;
	function I(e, t) {
		if (t.byteLength !== 0) if (2048 < t.byteLength) 0 < F && (e.enqueue(new Uint8Array(P.buffer, 0, F)), P = new Uint8Array(2048), F = 0), e.enqueue(t);
		else {
			var n = P.length - F;
			n < t.byteLength && (n === 0 ? e.enqueue(P) : (P.set(t.subarray(0, n), F), e.enqueue(P), t = t.subarray(n)), P = new Uint8Array(2048), F = 0), P.set(t, F), F += t.byteLength;
		}
	}
	function L(e, t) {
		return I(e, t), !0;
	}
	function R(e) {
		P && 0 < F && (e.enqueue(new Uint8Array(P.buffer, 0, F)), P = null, F = 0);
	}
	var ee = new TextEncoder();
	function z(e) {
		return ee.encode(e);
	}
	function B(e) {
		return ee.encode(e);
	}
	function V(e) {
		return e.byteLength;
	}
	function te(e, t) {
		typeof e.error == "function" ? e.error(t) : e.close();
	}
	var H = Object.assign, U = Object.prototype.hasOwnProperty, ne = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), W = {}, re = {};
	function ie(e) {
		return U.call(re, e) ? !0 : U.call(W, e) ? !1 : ne.test(e) ? re[e] = !0 : (W[e] = !0, !1);
	}
	var ae = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" ")), oe = new Map([
		["acceptCharset", "accept-charset"],
		["htmlFor", "for"],
		["httpEquiv", "http-equiv"],
		["crossOrigin", "crossorigin"],
		["accentHeight", "accent-height"],
		["alignmentBaseline", "alignment-baseline"],
		["arabicForm", "arabic-form"],
		["baselineShift", "baseline-shift"],
		["capHeight", "cap-height"],
		["clipPath", "clip-path"],
		["clipRule", "clip-rule"],
		["colorInterpolation", "color-interpolation"],
		["colorInterpolationFilters", "color-interpolation-filters"],
		["colorProfile", "color-profile"],
		["colorRendering", "color-rendering"],
		["dominantBaseline", "dominant-baseline"],
		["enableBackground", "enable-background"],
		["fillOpacity", "fill-opacity"],
		["fillRule", "fill-rule"],
		["floodColor", "flood-color"],
		["floodOpacity", "flood-opacity"],
		["fontFamily", "font-family"],
		["fontSize", "font-size"],
		["fontSizeAdjust", "font-size-adjust"],
		["fontStretch", "font-stretch"],
		["fontStyle", "font-style"],
		["fontVariant", "font-variant"],
		["fontWeight", "font-weight"],
		["glyphName", "glyph-name"],
		["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
		["glyphOrientationVertical", "glyph-orientation-vertical"],
		["horizAdvX", "horiz-adv-x"],
		["horizOriginX", "horiz-origin-x"],
		["imageRendering", "image-rendering"],
		["letterSpacing", "letter-spacing"],
		["lightingColor", "lighting-color"],
		["markerEnd", "marker-end"],
		["markerMid", "marker-mid"],
		["markerStart", "marker-start"],
		["overlinePosition", "overline-position"],
		["overlineThickness", "overline-thickness"],
		["paintOrder", "paint-order"],
		["panose-1", "panose-1"],
		["pointerEvents", "pointer-events"],
		["renderingIntent", "rendering-intent"],
		["shapeRendering", "shape-rendering"],
		["stopColor", "stop-color"],
		["stopOpacity", "stop-opacity"],
		["strikethroughPosition", "strikethrough-position"],
		["strikethroughThickness", "strikethrough-thickness"],
		["strokeDasharray", "stroke-dasharray"],
		["strokeDashoffset", "stroke-dashoffset"],
		["strokeLinecap", "stroke-linecap"],
		["strokeLinejoin", "stroke-linejoin"],
		["strokeMiterlimit", "stroke-miterlimit"],
		["strokeOpacity", "stroke-opacity"],
		["strokeWidth", "stroke-width"],
		["textAnchor", "text-anchor"],
		["textDecoration", "text-decoration"],
		["textRendering", "text-rendering"],
		["transformOrigin", "transform-origin"],
		["underlinePosition", "underline-position"],
		["underlineThickness", "underline-thickness"],
		["unicodeBidi", "unicode-bidi"],
		["unicodeRange", "unicode-range"],
		["unitsPerEm", "units-per-em"],
		["vAlphabetic", "v-alphabetic"],
		["vHanging", "v-hanging"],
		["vIdeographic", "v-ideographic"],
		["vMathematical", "v-mathematical"],
		["vectorEffect", "vector-effect"],
		["vertAdvY", "vert-adv-y"],
		["vertOriginX", "vert-origin-x"],
		["vertOriginY", "vert-origin-y"],
		["wordSpacing", "word-spacing"],
		["writingMode", "writing-mode"],
		["xmlnsXlink", "xmlns:xlink"],
		["xHeight", "x-height"]
	]), se = /["'&<>]/;
	function G(e) {
		if (typeof e == "boolean" || typeof e == "number" || typeof e == "bigint") return "" + e;
		e = "" + e;
		var t = se.exec(e);
		if (t) {
			var n = "", i, a = 0;
			for (i = t.index; i < e.length; i++) {
				switch (e.charCodeAt(i)) {
					case 34:
						t = "&quot;";
						break;
					case 38:
						t = "&amp;";
						break;
					case 39:
						t = "&#x27;";
						break;
					case 60:
						t = "&lt;";
						break;
					case 62:
						t = "&gt;";
						break;
					default: continue;
				}
				a !== i && (n += e.slice(a, i)), a = i + 1, n += t;
			}
			e = a === i ? n : n + e.slice(a, i);
		}
		return e;
	}
	var ce = /([A-Z])/g, le = /^ms-/, ue = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
	function K(e) {
		return ue.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
	}
	var de = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, fe = n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, pe = {
		pending: !1,
		data: null,
		method: null,
		action: null
	}, me = fe.d;
	fe.d = {
		f: me.f,
		r: me.r,
		D: dr,
		C: fr,
		L: pr,
		m: mr,
		X: gr,
		S: hr,
		M: _r
	};
	var he = [], ge = null;
	B("\"></template>");
	var _e = B("<script"), ve = B("<\/script>"), ye = B("<script src=\""), be = B("<script type=\"module\" src=\""), xe = B(" nonce=\""), Se = B(" integrity=\""), Ce = B(" crossorigin=\""), we = B(" async=\"\"><\/script>"), q = B("<style"), Te = /(<\/|<)(s)(cript)/gi;
	function Ee(e, t, n, i) {
		return "" + t + (n === "s" ? "\\u0073" : "\\u0053") + i;
	}
	var De = B("<script type=\"importmap\">"), Oe = B("<\/script>");
	function ke(e, t, n, i, a, o) {
		n = typeof t == "string" ? t : t && t.script;
		var s = n === void 0 ? _e : B("<script nonce=\"" + G(n) + "\""), c = typeof t == "string" ? void 0 : t && t.style, l = c === void 0 ? q : B("<style nonce=\"" + G(c) + "\""), u = e.idPrefix, d = [], f = e.bootstrapScriptContent, p = e.bootstrapScripts, m = e.bootstrapModules;
		if (f !== void 0 && (d.push(s), rr(d, e), d.push(tt, z(("" + f).replace(Te, Ee)), ve)), f = [], i !== void 0 && (f.push(De), f.push(z(("" + JSON.stringify(i)).replace(Te, Ee))), f.push(Oe)), i = a ? {
			preconnects: "",
			fontPreloads: "",
			highImagePreloads: "",
			remainingCapacity: 2 + (typeof o == "number" ? o : 2e3)
		} : null, a = {
			placeholderPrefix: B(u + "P:"),
			segmentPrefix: B(u + "S:"),
			boundaryPrefix: B(u + "B:"),
			startInlineScript: s,
			startInlineStyle: l,
			preamble: je(),
			externalRuntimeScript: null,
			bootstrapChunks: d,
			importMapChunks: f,
			onHeaders: a,
			headers: i,
			resets: {
				font: {},
				dns: {},
				connect: {
					default: {},
					anonymous: {},
					credentials: {}
				},
				image: {},
				style: {}
			},
			charsetChunks: [],
			viewportChunks: [],
			hoistableChunks: [],
			preconnects: /* @__PURE__ */ new Set(),
			fontPreloads: /* @__PURE__ */ new Set(),
			highImagePreloads: /* @__PURE__ */ new Set(),
			styles: /* @__PURE__ */ new Map(),
			bootstrapScripts: /* @__PURE__ */ new Set(),
			scripts: /* @__PURE__ */ new Set(),
			bulkPreloads: /* @__PURE__ */ new Set(),
			preloads: {
				images: /* @__PURE__ */ new Map(),
				stylesheets: /* @__PURE__ */ new Map(),
				scripts: /* @__PURE__ */ new Map(),
				moduleScripts: /* @__PURE__ */ new Map()
			},
			nonce: {
				script: n,
				style: c
			},
			hoistableState: null,
			stylesToHoist: !1
		}, p !== void 0) for (i = 0; i < p.length; i++) u = p[i], c = s = void 0, l = {
			rel: "preload",
			as: "script",
			fetchPriority: "low",
			nonce: t
		}, typeof u == "string" ? l.href = o = u : (l.href = o = u.src, l.integrity = c = typeof u.integrity == "string" ? u.integrity : void 0, l.crossOrigin = s = typeof u == "string" || u.crossOrigin == null ? void 0 : u.crossOrigin === "use-credentials" ? "use-credentials" : ""), u = e, f = o, u.scriptResources[f] = null, u.moduleScriptResources[f] = null, u = [], ut(u, l), a.bootstrapScripts.add(u), d.push(ye, z(G(o)), J), n && d.push(xe, z(G(n)), J), typeof c == "string" && d.push(Se, z(G(c)), J), typeof s == "string" && d.push(Ce, z(G(s)), J), rr(d, e), d.push(we);
		if (m !== void 0) for (t = 0; t < m.length; t++) c = m[t], o = i = void 0, s = {
			rel: "modulepreload",
			fetchPriority: "low",
			nonce: n
		}, typeof c == "string" ? s.href = p = c : (s.href = p = c.src, s.integrity = o = typeof c.integrity == "string" ? c.integrity : void 0, s.crossOrigin = i = typeof c == "string" || c.crossOrigin == null ? void 0 : c.crossOrigin === "use-credentials" ? "use-credentials" : ""), c = e, l = p, c.scriptResources[l] = null, c.moduleScriptResources[l] = null, c = [], ut(c, s), a.bootstrapScripts.add(c), d.push(be, z(G(p)), J), n && d.push(xe, z(G(n)), J), typeof o == "string" && d.push(Se, z(G(o)), J), typeof i == "string" && d.push(Ce, z(G(i)), J), rr(d, e), d.push(we);
		return a;
	}
	function Ae(e, t, n, i, a) {
		return {
			idPrefix: e === void 0 ? "" : e,
			nextFormID: 0,
			streamingFormat: 0,
			bootstrapScriptContent: n,
			bootstrapScripts: i,
			bootstrapModules: a,
			instructions: 0,
			hasBody: !1,
			hasHtml: !1,
			unknownResources: {},
			dnsResources: {},
			connectResources: {
				default: {},
				anonymous: {},
				credentials: {}
			},
			imageResources: {},
			styleResources: {},
			scriptResources: {},
			moduleUnknownResources: {},
			moduleScriptResources: {}
		};
	}
	function je() {
		return {
			htmlChunks: null,
			headChunks: null,
			bodyChunks: null
		};
	}
	function Me(e, t, n, i) {
		return {
			insertionMode: e,
			selectedValue: t,
			tagScope: n,
			viewTransition: i
		};
	}
	function Ne(e) {
		return Me(e === "http://www.w3.org/2000/svg" ? 4 : e === "http://www.w3.org/1998/Math/MathML" ? 5 : 0, null, 0, null);
	}
	function Pe(e, t, n) {
		var i = e.tagScope & -25;
		switch (t) {
			case "noscript": return Me(2, null, i | 1, null);
			case "select": return Me(2, n.value == null ? n.defaultValue : n.value, i, null);
			case "svg": return Me(4, null, i, null);
			case "picture": return Me(2, null, i | 2, null);
			case "math": return Me(5, null, i, null);
			case "foreignObject": return Me(2, null, i, null);
			case "table": return Me(6, null, i, null);
			case "thead":
			case "tbody":
			case "tfoot": return Me(7, null, i, null);
			case "colgroup": return Me(9, null, i, null);
			case "tr": return Me(8, null, i, null);
			case "head":
				if (2 > e.insertionMode) return Me(3, null, i, null);
				break;
			case "html": if (e.insertionMode === 0) return Me(1, null, i, null);
		}
		return 6 <= e.insertionMode || 2 > e.insertionMode ? Me(2, null, i, null) : e.tagScope === i ? e : Me(e.insertionMode, e.selectedValue, i, null);
	}
	function Fe(e) {
		return e === null ? null : {
			update: e.update,
			enter: "none",
			exit: "none",
			share: e.update,
			name: e.autoName,
			autoName: e.autoName,
			nameIdx: 0
		};
	}
	function Ie(e, t) {
		return t.tagScope & 32 && (e.instructions |= 128), Me(t.insertionMode, t.selectedValue, t.tagScope | 12, Fe(t.viewTransition));
	}
	function Le(e, t) {
		e = Fe(t.viewTransition);
		var n = t.tagScope | 16;
		return e !== null && e.share !== "none" && (n |= 64), Me(t.insertionMode, t.selectedValue, n, e);
	}
	var Re = B("<!-- -->");
	function ze(e, t, n, i) {
		return t === "" ? i : (i && e.push(Re), e.push(z(G(t))), !0);
	}
	var Be = /* @__PURE__ */ new Map(), Ve = B(" style=\""), He = B(":"), Ue = B(";");
	function We(e, t) {
		if (typeof t != "object") throw Error(i(62));
		var n = !0, a;
		for (a in t) if (U.call(t, a)) {
			var o = t[a];
			if (o != null && typeof o != "boolean" && o !== "") {
				if (a.indexOf("--") === 0) {
					var s = z(G(a));
					o = z(G(("" + o).trim()));
				} else s = Be.get(a), s === void 0 && (s = B(G(a.replace(ce, "-$1").toLowerCase().replace(le, "-ms-"))), Be.set(a, s)), o = typeof o == "number" ? o === 0 || ae.has(a) ? z("" + o) : z(o + "px") : z(G(("" + o).trim()));
				n ? (n = !1, e.push(Ve, s, He, o)) : e.push(Ue, s, He, o);
			}
		}
		n || e.push(J);
	}
	var Ge = B(" "), Ke = B("=\""), J = B("\""), qe = B("=\"\"");
	function Y(e, t, n) {
		n && typeof n != "function" && typeof n != "symbol" && e.push(Ge, z(t), qe);
	}
	function X(e, t, n) {
		typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && e.push(Ge, z(t), Ke, z(G(n)), J);
	}
	var Je = B(G("javascript:throw new Error('React form unexpectedly submitted.')")), Ye = B("<input type=\"hidden\"");
	function Xe(e, t) {
		this.push(Ye), Ze(e), X(this, "name", t), X(this, "value", e), this.push(nt);
	}
	function Ze(e) {
		if (typeof e != "string") throw Error(i(480));
	}
	function Qe(e, t) {
		if (typeof t.$$FORM_ACTION == "function") {
			var n = e.nextFormID++;
			e = e.idPrefix + n;
			try {
				var i = t.$$FORM_ACTION(e);
				return i && i.data?.forEach(Ze), i;
			} catch (e) {
				if (typeof e == "object" && e && typeof e.then == "function") throw e;
			}
		}
		return null;
	}
	function $e(e, t, n, i, a, o, s, c) {
		var l = null;
		if (typeof i == "function") {
			var u = Qe(t, i);
			u === null ? (e.push(Ge, z("formAction"), Ke, Je, J), s = o = a = i = c = null, st(t, n)) : (c = u.name, i = u.action || "", a = u.encType, o = u.method, s = u.target, l = u.data);
		}
		return c != null && et(e, "name", c), i != null && et(e, "formAction", i), a != null && et(e, "formEncType", a), o != null && et(e, "formMethod", o), s != null && et(e, "formTarget", s), l;
	}
	function et(e, t, n) {
		switch (t) {
			case "className":
				X(e, "class", n);
				break;
			case "tabIndex":
				X(e, "tabindex", n);
				break;
			case "dir":
			case "role":
			case "viewBox":
			case "width":
			case "height":
				X(e, t, n);
				break;
			case "style":
				We(e, n);
				break;
			case "src":
			case "href": if (n === "") break;
			case "action":
			case "formAction":
				if (n == null || typeof n == "function" || typeof n == "symbol" || typeof n == "boolean") break;
				n = K("" + n), e.push(Ge, z(t), Ke, z(G(n)), J);
				break;
			case "defaultValue":
			case "defaultChecked":
			case "innerHTML":
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "ref": break;
			case "autoFocus":
			case "multiple":
			case "muted":
				Y(e, t.toLowerCase(), n);
				break;
			case "xlinkHref":
				if (typeof n == "function" || typeof n == "symbol" || typeof n == "boolean") break;
				n = K("" + n), e.push(Ge, z("xlink:href"), Ke, z(G(n)), J);
				break;
			case "contentEditable":
			case "spellCheck":
			case "draggable":
			case "value":
			case "autoReverse":
			case "externalResourcesRequired":
			case "focusable":
			case "preserveAlpha":
				typeof n != "function" && typeof n != "symbol" && e.push(Ge, z(t), Ke, z(G(n)), J);
				break;
			case "inert":
			case "allowFullScreen":
			case "async":
			case "autoPlay":
			case "controls":
			case "default":
			case "defer":
			case "disabled":
			case "disablePictureInPicture":
			case "disableRemotePlayback":
			case "formNoValidate":
			case "hidden":
			case "loop":
			case "noModule":
			case "noValidate":
			case "open":
			case "playsInline":
			case "readOnly":
			case "required":
			case "reversed":
			case "scoped":
			case "seamless":
			case "itemScope":
				n && typeof n != "function" && typeof n != "symbol" && e.push(Ge, z(t), qe);
				break;
			case "capture":
			case "download":
				!0 === n ? e.push(Ge, z(t), qe) : !1 !== n && typeof n != "function" && typeof n != "symbol" && e.push(Ge, z(t), Ke, z(G(n)), J);
				break;
			case "cols":
			case "rows":
			case "size":
			case "span":
				typeof n != "function" && typeof n != "symbol" && !isNaN(n) && 1 <= n && e.push(Ge, z(t), Ke, z(G(n)), J);
				break;
			case "rowSpan":
			case "start":
				typeof n == "function" || typeof n == "symbol" || isNaN(n) || e.push(Ge, z(t), Ke, z(G(n)), J);
				break;
			case "xlinkActuate":
				X(e, "xlink:actuate", n);
				break;
			case "xlinkArcrole":
				X(e, "xlink:arcrole", n);
				break;
			case "xlinkRole":
				X(e, "xlink:role", n);
				break;
			case "xlinkShow":
				X(e, "xlink:show", n);
				break;
			case "xlinkTitle":
				X(e, "xlink:title", n);
				break;
			case "xlinkType":
				X(e, "xlink:type", n);
				break;
			case "xmlBase":
				X(e, "xml:base", n);
				break;
			case "xmlLang":
				X(e, "xml:lang", n);
				break;
			case "xmlSpace":
				X(e, "xml:space", n);
				break;
			default: if ((!(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (t = oe.get(t) || t, ie(t))) {
				switch (typeof n) {
					case "function":
					case "symbol": return;
					case "boolean":
						var i = t.toLowerCase().slice(0, 5);
						if (i !== "data-" && i !== "aria-") return;
				}
				e.push(Ge, z(t), Ke, z(G(n)), J);
			}
		}
	}
	var tt = B(">"), nt = B("/>");
	function rt(e, t, n) {
		if (t != null) {
			if (n != null) throw Error(i(60));
			if (typeof t != "object" || !("__html" in t)) throw Error(i(61));
			t = t.__html, t != null && e.push(z("" + t));
		}
	}
	function it(e) {
		var n = "";
		return t.Children.forEach(e, function(e) {
			e != null && (n += e);
		}), n;
	}
	var at = B(" selected=\"\""), ot = B("addEventListener(\"submit\",function(a){if(!a.defaultPrevented){var c=a.target,d=a.submitter,e=c.action,b=d;if(d){var f=d.getAttribute(\"formAction\");null!=f&&(e=f,b=null)}\"javascript:throw new Error('React form unexpectedly submitted.')\"===e&&(a.preventDefault(),b?(a=document.createElement(\"input\"),a.name=b.name,a.value=b.value,b.parentNode.insertBefore(a,b),b=new FormData(c),a.parentNode.removeChild(a)):b=new FormData(c),a=c.ownerDocument||c,(a.$$reactFormReplay=a.$$reactFormReplay||[]).push(c,d,b))}});");
	function st(e, t) {
		if (!(e.instructions & 16)) {
			e.instructions |= 16;
			var n = t.preamble, i = t.bootstrapChunks;
			(n.htmlChunks || n.headChunks) && i.length === 0 ? (i.push(t.startInlineScript), rr(i, e), i.push(tt, ot, ve)) : i.unshift(t.startInlineScript, tt, ot, ve);
		}
	}
	var ct = B("<!--F!-->"), lt = B("<!--F-->");
	function ut(e, t) {
		for (var n in e.push(wt("link")), t) if (U.call(t, n)) {
			var a = t[n];
			if (a != null) switch (n) {
				case "children":
				case "dangerouslySetInnerHTML": throw Error(i(399, "link"));
				default: et(e, n, a);
			}
		}
		return e.push(nt), null;
	}
	var dt = /(<\/|<)(s)(tyle)/gi;
	function ft(e, t, n, i) {
		return "" + t + (n === "s" ? "\\73 " : "\\53 ") + i;
	}
	function pt(e, t, n) {
		for (var a in e.push(wt(n)), t) if (U.call(t, a)) {
			var o = t[a];
			if (o != null) switch (a) {
				case "children":
				case "dangerouslySetInnerHTML": throw Error(i(399, n));
				default: et(e, a, o);
			}
		}
		return e.push(nt), null;
	}
	function mt(e, t) {
		e.push(wt("title"));
		var n = null, i = null, a;
		for (a in t) if (U.call(t, a)) {
			var o = t[a];
			if (o != null) switch (a) {
				case "children":
					n = o;
					break;
				case "dangerouslySetInnerHTML":
					i = o;
					break;
				default: et(e, a, o);
			}
		}
		return e.push(tt), t = Array.isArray(n) ? 2 > n.length ? n[0] : null : n, typeof t != "function" && typeof t != "symbol" && t != null && e.push(z(G("" + t))), rt(e, i, n), e.push(Ot("title")), null;
	}
	var ht = B("<!--head-->"), gt = B("<!--body-->"), _t = B("<!--html-->");
	function vt(e, t) {
		e.push(wt("script"));
		var n = null, i = null, a;
		for (a in t) if (U.call(t, a)) {
			var o = t[a];
			if (o != null) switch (a) {
				case "children":
					n = o;
					break;
				case "dangerouslySetInnerHTML":
					i = o;
					break;
				default: et(e, a, o);
			}
		}
		return e.push(tt), rt(e, i, n), typeof n == "string" && e.push(z(("" + n).replace(Te, Ee))), e.push(Ot("script")), null;
	}
	function yt(e, t, n) {
		e.push(wt(n));
		var i = n = null, a;
		for (a in t) if (U.call(t, a)) {
			var o = t[a];
			if (o != null) switch (a) {
				case "children":
					n = o;
					break;
				case "dangerouslySetInnerHTML":
					i = o;
					break;
				default: et(e, a, o);
			}
		}
		return e.push(tt), rt(e, i, n), n;
	}
	function bt(e, t, n) {
		e.push(wt(n));
		var i = n = null, a;
		for (a in t) if (U.call(t, a)) {
			var o = t[a];
			if (o != null) switch (a) {
				case "children":
					n = o;
					break;
				case "dangerouslySetInnerHTML":
					i = o;
					break;
				default: et(e, a, o);
			}
		}
		return e.push(tt), rt(e, i, n), typeof n == "string" ? (e.push(z(G(n))), null) : n;
	}
	var xt = B("\n"), St = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Ct = /* @__PURE__ */ new Map();
	function wt(e) {
		var t = Ct.get(e);
		if (t === void 0) {
			if (!St.test(e)) throw Error(i(65, e));
			t = B("<" + e), Ct.set(e, t);
		}
		return t;
	}
	var Tt = B("<!DOCTYPE html>");
	function Et(e, t, n, a, o, s, c, l, u) {
		switch (t) {
			case "div":
			case "span":
			case "svg":
			case "path": break;
			case "a":
				e.push(wt("a"));
				var d = null, f = null, p;
				for (p in n) if (U.call(n, p)) {
					var m = n[p];
					if (m != null) switch (p) {
						case "children":
							d = m;
							break;
						case "dangerouslySetInnerHTML":
							f = m;
							break;
						case "href":
							m === "" ? X(e, "href", "") : et(e, p, m);
							break;
						default: et(e, p, m);
					}
				}
				if (e.push(tt), rt(e, f, d), typeof d == "string") {
					e.push(z(G(d)));
					var h = null;
				} else h = d;
				return h;
			case "g":
			case "p":
			case "li": break;
			case "select":
				e.push(wt("select"));
				var g = null, _ = null, v;
				for (v in n) if (U.call(n, v)) {
					var y = n[v];
					if (y != null) switch (v) {
						case "children":
							g = y;
							break;
						case "dangerouslySetInnerHTML":
							_ = y;
							break;
						case "defaultValue":
						case "value": break;
						default: et(e, v, y);
					}
				}
				return e.push(tt), rt(e, _, g), g;
			case "option":
				var b = l.selectedValue;
				e.push(wt("option"));
				var x = null, S = null, C = null, w = null, T;
				for (T in n) if (U.call(n, T)) {
					var D = n[T];
					if (D != null) switch (T) {
						case "children":
							x = D;
							break;
						case "selected":
							C = D;
							break;
						case "dangerouslySetInnerHTML":
							w = D;
							break;
						case "value": S = D;
						default: et(e, T, D);
					}
				}
				if (b != null) {
					var O = S === null ? it(x) : "" + S;
					if (E(b)) {
						for (var k = 0; k < b.length; k++) if ("" + b[k] === O) {
							e.push(at);
							break;
						}
					} else "" + b === O && e.push(at);
				} else C && e.push(at);
				return e.push(tt), rt(e, w, x), x;
			case "textarea":
				e.push(wt("textarea"));
				var A = null, j = null, M = null, N;
				for (N in n) if (U.call(n, N)) {
					var P = n[N];
					if (P != null) switch (N) {
						case "children":
							M = P;
							break;
						case "value":
							A = P;
							break;
						case "defaultValue":
							j = P;
							break;
						case "dangerouslySetInnerHTML": throw Error(i(91));
						default: et(e, N, P);
					}
				}
				if (A === null && j !== null && (A = j), e.push(tt), M != null) {
					if (A != null) throw Error(i(92));
					if (E(M)) {
						if (1 < M.length) throw Error(i(93));
						A = "" + M[0];
					}
					A = "" + M;
				}
				return typeof A == "string" && A[0] === "\n" && e.push(xt), A !== null && e.push(z(G("" + A))), null;
			case "input":
				e.push(wt("input"));
				var F = null, I = null, L = null, R = null, ee = null, B = null, V = null, te = null, ne = null, W;
				for (W in n) if (U.call(n, W)) {
					var re = n[W];
					if (re != null) switch (W) {
						case "children":
						case "dangerouslySetInnerHTML": throw Error(i(399, "input"));
						case "name":
							F = re;
							break;
						case "formAction":
							I = re;
							break;
						case "formEncType":
							L = re;
							break;
						case "formMethod":
							R = re;
							break;
						case "formTarget":
							ee = re;
							break;
						case "defaultChecked":
							ne = re;
							break;
						case "defaultValue":
							V = re;
							break;
						case "checked":
							te = re;
							break;
						case "value":
							B = re;
							break;
						default: et(e, W, re);
					}
				}
				var ae = $e(e, a, o, I, L, R, ee, F);
				return te === null ? ne !== null && Y(e, "checked", ne) : Y(e, "checked", te), B === null ? V !== null && et(e, "value", V) : et(e, "value", B), e.push(nt), ae?.forEach(Xe, e), null;
			case "button":
				e.push(wt("button"));
				var oe = null, se = null, ce = null, le = null, ue = null, de = null, fe = null, pe;
				for (pe in n) if (U.call(n, pe)) {
					var me = n[pe];
					if (me != null) switch (pe) {
						case "children":
							oe = me;
							break;
						case "dangerouslySetInnerHTML":
							se = me;
							break;
						case "name":
							ce = me;
							break;
						case "formAction":
							le = me;
							break;
						case "formEncType":
							ue = me;
							break;
						case "formMethod":
							de = me;
							break;
						case "formTarget":
							fe = me;
							break;
						default: et(e, pe, me);
					}
				}
				var ge = $e(e, a, o, le, ue, de, fe, ce);
				if (e.push(tt), ge?.forEach(Xe, e), rt(e, se, oe), typeof oe == "string") {
					e.push(z(G(oe)));
					var _e = null;
				} else _e = oe;
				return _e;
			case "form":
				e.push(wt("form"));
				var ve = null, ye = null, be = null, xe = null, Se = null, Ce = null, we;
				for (we in n) if (U.call(n, we)) {
					var q = n[we];
					if (q != null) switch (we) {
						case "children":
							ve = q;
							break;
						case "dangerouslySetInnerHTML":
							ye = q;
							break;
						case "action":
							be = q;
							break;
						case "encType":
							xe = q;
							break;
						case "method":
							Se = q;
							break;
						case "target":
							Ce = q;
							break;
						default: et(e, we, q);
					}
				}
				var Te = null, Ee = null;
				if (typeof be == "function") {
					var De = Qe(a, be);
					De === null ? (e.push(Ge, z("action"), Ke, Je, J), Ce = Se = xe = be = null, st(a, o)) : (be = De.action || "", xe = De.encType, Se = De.method, Ce = De.target, Te = De.data, Ee = De.name);
				}
				if (be != null && et(e, "action", be), xe != null && et(e, "encType", xe), Se != null && et(e, "method", Se), Ce != null && et(e, "target", Ce), e.push(tt), Ee !== null && (e.push(Ye), X(e, "name", Ee), e.push(nt), Te?.forEach(Xe, e)), rt(e, ye, ve), typeof ve == "string") {
					e.push(z(G(ve)));
					var Oe = null;
				} else Oe = ve;
				return Oe;
			case "menuitem":
				for (var ke in e.push(wt("menuitem")), n) if (U.call(n, ke)) {
					var Ae = n[ke];
					if (Ae != null) switch (ke) {
						case "children":
						case "dangerouslySetInnerHTML": throw Error(i(400));
						default: et(e, ke, Ae);
					}
				}
				return e.push(tt), null;
			case "object":
				e.push(wt("object"));
				var je = null, Me = null, Ne;
				for (Ne in n) if (U.call(n, Ne)) {
					var Pe = n[Ne];
					if (Pe != null) switch (Ne) {
						case "children":
							je = Pe;
							break;
						case "dangerouslySetInnerHTML":
							Me = Pe;
							break;
						case "data":
							var Fe = K("" + Pe);
							if (Fe === "") break;
							e.push(Ge, z("data"), Ke, z(G(Fe)), J);
							break;
						default: et(e, Ne, Pe);
					}
				}
				if (e.push(tt), rt(e, Me, je), typeof je == "string") {
					e.push(z(G(je)));
					var Ie = null;
				} else Ie = je;
				return Ie;
			case "title":
				var Le = l.tagScope & 1, ze = l.tagScope & 4;
				if (l.insertionMode === 4 || Le || n.itemProp != null) var Be = mt(e, n);
				else ze ? Be = null : (mt(o.hoistableChunks, n), Be = void 0);
				return Be;
			case "link":
				var Ve = l.tagScope & 1, He = l.tagScope & 4, Ue = n.rel, qe = n.href, Ze = n.precedence;
				if (l.insertionMode === 4 || Ve || n.itemProp != null || typeof Ue != "string" || typeof qe != "string" || qe === "") {
					ut(e, n);
					var ot = null;
				} else if (n.rel === "stylesheet") if (typeof Ze != "string" || n.disabled != null || n.onLoad || n.onError) ot = ut(e, n);
				else {
					var ct = o.styles.get(Ze), lt = a.styleResources.hasOwnProperty(qe) ? a.styleResources[qe] : void 0;
					if (lt !== null) {
						a.styleResources[qe] = null, ct || (ct = {
							precedence: z(G(Ze)),
							rules: [],
							hrefs: [],
							sheets: /* @__PURE__ */ new Map()
						}, o.styles.set(Ze, ct));
						var St = {
							state: 0,
							props: H({}, n, {
								"data-precedence": n.precedence,
								precedence: null
							})
						};
						if (lt) {
							lt.length === 2 && vr(St.props, lt);
							var Ct = o.preloads.stylesheets.get(qe);
							Ct && 0 < Ct.length ? Ct.length = 0 : St.state = 1;
						}
						ct.sheets.set(qe, St), c && c.stylesheets.add(St);
					} else if (ct) {
						var Et = ct.sheets.get(qe);
						Et && c && c.stylesheets.add(Et);
					}
					u && e.push(Re), ot = null;
				}
				else n.onLoad || n.onError ? ot = ut(e, n) : (u && e.push(Re), ot = He ? null : ut(o.hoistableChunks, n));
				return ot;
			case "script":
				var Dt = l.tagScope & 1, kt = n.async;
				if (typeof n.src != "string" || !n.src || !kt || typeof kt == "function" || typeof kt == "symbol" || n.onLoad || n.onError || l.insertionMode === 4 || Dt || n.itemProp != null) var At = vt(e, n);
				else {
					var jt = n.src;
					if (n.type === "module") var Mt = a.moduleScriptResources, Nt = o.preloads.moduleScripts;
					else Mt = a.scriptResources, Nt = o.preloads.scripts;
					var Pt = Mt.hasOwnProperty(jt) ? Mt[jt] : void 0;
					if (Pt !== null) {
						Mt[jt] = null;
						var Ft = n;
						if (Pt) {
							Pt.length === 2 && (Ft = H({}, n), vr(Ft, Pt));
							var It = Nt.get(jt);
							It && (It.length = 0);
						}
						var Lt = [];
						o.scripts.add(Lt), vt(Lt, Ft);
					}
					u && e.push(Re), At = null;
				}
				return At;
			case "style":
				var Rt = l.tagScope & 1, zt = n.precedence, Bt = n.href, Vt = n.nonce;
				if (l.insertionMode === 4 || Rt || n.itemProp != null || typeof zt != "string" || typeof Bt != "string" || Bt === "") {
					e.push(wt("style"));
					var Ht = null, Ut = null, Wt;
					for (Wt in n) if (U.call(n, Wt)) {
						var Gt = n[Wt];
						if (Gt != null) switch (Wt) {
							case "children":
								Ht = Gt;
								break;
							case "dangerouslySetInnerHTML":
								Ut = Gt;
								break;
							default: et(e, Wt, Gt);
						}
					}
					e.push(tt);
					var Kt = Array.isArray(Ht) ? 2 > Ht.length ? Ht[0] : null : Ht;
					typeof Kt != "function" && typeof Kt != "symbol" && Kt != null && e.push(z(("" + Kt).replace(dt, ft))), rt(e, Ut, Ht), e.push(Ot("style"));
					var qt = null;
				} else {
					var Jt = o.styles.get(zt);
					if ((a.styleResources.hasOwnProperty(Bt) ? a.styleResources[Bt] : void 0) !== null) {
						a.styleResources[Bt] = null, Jt || (Jt = {
							precedence: z(G(zt)),
							rules: [],
							hrefs: [],
							sheets: /* @__PURE__ */ new Map()
						}, o.styles.set(zt, Jt));
						var Yt = o.nonce.style;
						if (!Yt || Yt === Vt) {
							Jt.hrefs.push(z(G(Bt)));
							var Xt = Jt.rules, Z = null, Zt = null, Q;
							for (Q in n) if (U.call(n, Q)) {
								var Qt = n[Q];
								if (Qt != null) switch (Q) {
									case "children":
										Z = Qt;
										break;
									case "dangerouslySetInnerHTML": Zt = Qt;
								}
							}
							var $t = Array.isArray(Z) ? 2 > Z.length ? Z[0] : null : Z;
							typeof $t != "function" && typeof $t != "symbol" && $t != null && Xt.push(z(("" + $t).replace(dt, ft))), rt(Xt, Zt, Z);
						}
					}
					Jt && c && c.styles.add(Jt), u && e.push(Re), qt = void 0;
				}
				return qt;
			case "meta":
				var en = l.tagScope & 1, tn = l.tagScope & 4;
				if (l.insertionMode === 4 || en || n.itemProp != null) var nn = pt(e, n, "meta");
				else u && e.push(Re), nn = tn ? null : typeof n.charSet == "string" ? pt(o.charsetChunks, n, "meta") : n.name === "viewport" ? pt(o.viewportChunks, n, "meta") : pt(o.hoistableChunks, n, "meta");
				return nn;
			case "listing":
			case "pre":
				e.push(wt(t));
				var rn = null, $ = null, an;
				for (an in n) if (U.call(n, an)) {
					var on = n[an];
					if (on != null) switch (an) {
						case "children":
							rn = on;
							break;
						case "dangerouslySetInnerHTML":
							$ = on;
							break;
						default: et(e, an, on);
					}
				}
				if (e.push(tt), $ != null) {
					if (rn != null) throw Error(i(60));
					if (typeof $ != "object" || !("__html" in $)) throw Error(i(61));
					var sn = $.__html;
					sn != null && (typeof sn == "string" && 0 < sn.length && sn[0] === "\n" ? e.push(xt, z(sn)) : e.push(z("" + sn)));
				}
				return typeof rn == "string" && rn[0] === "\n" && e.push(xt), rn;
			case "img":
				var ln = l.tagScope & 3, un = n.src, dn = n.srcSet;
				if (!(n.loading === "lazy" || !un && !dn || typeof un != "string" && un != null || typeof dn != "string" && dn != null || n.fetchPriority === "low" || ln) && (typeof un != "string" || un[4] !== ":" || un[0] !== "d" && un[0] !== "D" || un[1] !== "a" && un[1] !== "A" || un[2] !== "t" && un[2] !== "T" || un[3] !== "a" && un[3] !== "A") && (typeof dn != "string" || dn[4] !== ":" || dn[0] !== "d" && dn[0] !== "D" || dn[1] !== "a" && dn[1] !== "A" || dn[2] !== "t" && dn[2] !== "T" || dn[3] !== "a" && dn[3] !== "A")) {
					c !== null && l.tagScope & 64 && (c.suspenseyImages = !0);
					var fn = typeof n.sizes == "string" ? n.sizes : void 0, pn = dn ? dn + "\n" + (fn || "") : un, mn = o.preloads.images, hn = mn.get(pn);
					if (hn) (n.fetchPriority === "high" || 10 > o.highImagePreloads.size) && (mn.delete(pn), o.highImagePreloads.add(hn));
					else if (!a.imageResources.hasOwnProperty(pn)) {
						a.imageResources[pn] = he;
						var gn = n.crossOrigin, _n = typeof gn == "string" ? gn === "use-credentials" ? gn : "" : void 0, vn = o.headers, yn;
						vn && 0 < vn.remainingCapacity && typeof n.srcSet != "string" && (n.fetchPriority === "high" || 500 > vn.highImagePreloads.length) && (yn = yr(un, "image", {
							imageSrcSet: n.srcSet,
							imageSizes: n.sizes,
							crossOrigin: _n,
							integrity: n.integrity,
							nonce: n.nonce,
							type: n.type,
							fetchPriority: n.fetchPriority,
							referrerPolicy: n.refererPolicy
						}), 0 <= (vn.remainingCapacity -= yn.length + 2)) ? (o.resets.image[pn] = he, vn.highImagePreloads && (vn.highImagePreloads += ", "), vn.highImagePreloads += yn) : (hn = [], ut(hn, {
							rel: "preload",
							as: "image",
							href: dn ? void 0 : un,
							imageSrcSet: dn,
							imageSizes: fn,
							crossOrigin: _n,
							integrity: n.integrity,
							type: n.type,
							fetchPriority: n.fetchPriority,
							referrerPolicy: n.referrerPolicy
						}), n.fetchPriority === "high" || 10 > o.highImagePreloads.size ? o.highImagePreloads.add(hn) : (o.bulkPreloads.add(hn), mn.set(pn, hn)));
					}
				}
				return pt(e, n, "img");
			case "base":
			case "area":
			case "br":
			case "col":
			case "embed":
			case "hr":
			case "keygen":
			case "param":
			case "source":
			case "track":
			case "wbr": return pt(e, n, t);
			case "annotation-xml":
			case "color-profile":
			case "font-face":
			case "font-face-src":
			case "font-face-uri":
			case "font-face-format":
			case "font-face-name":
			case "missing-glyph": break;
			case "head":
				if (2 > l.insertionMode) {
					var bn = s || o.preamble;
					if (bn.headChunks) throw Error(i(545, "`<head>`"));
					s !== null && e.push(ht), bn.headChunks = [];
					var xn = yt(bn.headChunks, n, "head");
				} else xn = bt(e, n, "head");
				return xn;
			case "body":
				if (2 > l.insertionMode) {
					var Sn = s || o.preamble;
					if (Sn.bodyChunks) throw Error(i(545, "`<body>`"));
					s !== null && e.push(gt), Sn.bodyChunks = [];
					var Cn = yt(Sn.bodyChunks, n, "body");
				} else Cn = bt(e, n, "body");
				return Cn;
			case "html":
				if (l.insertionMode === 0) {
					var wn = s || o.preamble;
					if (wn.htmlChunks) throw Error(i(545, "`<html>`"));
					s !== null && e.push(_t), wn.htmlChunks = [Tt];
					var Tn = yt(wn.htmlChunks, n, "html");
				} else Tn = bt(e, n, "html");
				return Tn;
			default: if (t.indexOf("-") !== -1) {
				e.push(wt(t));
				var En = null, Dn = null, On;
				for (On in n) if (U.call(n, On)) {
					var kn = n[On];
					if (kn != null) {
						var An = On;
						switch (On) {
							case "children":
								En = kn;
								break;
							case "dangerouslySetInnerHTML":
								Dn = kn;
								break;
							case "style":
								We(e, kn);
								break;
							case "suppressContentEditableWarning":
							case "suppressHydrationWarning":
							case "ref": break;
							case "className": An = "class";
							default: if (ie(On) && typeof kn != "function" && typeof kn != "symbol" && !1 !== kn) {
								if (!0 === kn) kn = "";
								else if (typeof kn == "object") continue;
								e.push(Ge, z(An), Ke, z(G(kn)), J);
							}
						}
					}
				}
				return e.push(tt), rt(e, Dn, En), En;
			}
		}
		return bt(e, n, t);
	}
	var Dt = /* @__PURE__ */ new Map();
	function Ot(e) {
		var t = Dt.get(e);
		return t === void 0 && (t = B("</" + e + ">"), Dt.set(e, t)), t;
	}
	function kt(e, t) {
		e = e.preamble, e.htmlChunks === null && t.htmlChunks && (e.htmlChunks = t.htmlChunks), e.headChunks === null && t.headChunks && (e.headChunks = t.headChunks), e.bodyChunks === null && t.bodyChunks && (e.bodyChunks = t.bodyChunks);
	}
	function At(e, t) {
		t = t.bootstrapChunks;
		for (var n = 0; n < t.length - 1; n++) I(e, t[n]);
		return n < t.length ? (n = t[n], t.length = 0, L(e, n)) : !0;
	}
	var jt = B("requestAnimationFrame(function(){$RT=performance.now()});"), Mt = B("<template id=\""), Nt = B("\"></template>"), Pt = B("<!--&-->"), Ft = B("<!--/&-->"), It = B("<!--$-->"), Lt = B("<!--$?--><template id=\""), Rt = B("\"></template>"), zt = B("<!--$!-->"), Bt = B("<!--/$-->"), Vt = B("<template"), Ht = B("\""), Ut = B(" data-dgst=\"");
	B(" data-msg=\""), B(" data-stck=\""), B(" data-cstck=\"");
	var Wt = B("></template>");
	function Gt(e, t, n) {
		if (I(e, Lt), n === null) throw Error(i(395));
		return I(e, t.boundaryPrefix), I(e, z(n.toString(16))), L(e, Rt);
	}
	var Kt = B("<div hidden id=\""), qt = B("\">"), Jt = B("</div>"), Yt = B("<svg aria-hidden=\"true\" style=\"display:none\" id=\""), Xt = B("\">"), Z = B("</svg>"), Zt = B("<math aria-hidden=\"true\" style=\"display:none\" id=\""), Q = B("\">"), Qt = B("</math>"), $t = B("<table hidden id=\""), en = B("\">"), tn = B("</table>"), nn = B("<table hidden><tbody id=\""), rn = B("\">"), $ = B("</tbody></table>"), an = B("<table hidden><tr id=\""), on = B("\">"), sn = B("</tr></table>"), ln = B("<table hidden><colgroup id=\""), un = B("\">"), dn = B("</colgroup></table>");
	function fn(e, t, n, a) {
		switch (n.insertionMode) {
			case 0:
			case 1:
			case 3:
			case 2: return I(e, Kt), I(e, t.segmentPrefix), I(e, z(a.toString(16))), L(e, qt);
			case 4: return I(e, Yt), I(e, t.segmentPrefix), I(e, z(a.toString(16))), L(e, Xt);
			case 5: return I(e, Zt), I(e, t.segmentPrefix), I(e, z(a.toString(16))), L(e, Q);
			case 6: return I(e, $t), I(e, t.segmentPrefix), I(e, z(a.toString(16))), L(e, en);
			case 7: return I(e, nn), I(e, t.segmentPrefix), I(e, z(a.toString(16))), L(e, rn);
			case 8: return I(e, an), I(e, t.segmentPrefix), I(e, z(a.toString(16))), L(e, on);
			case 9: return I(e, ln), I(e, t.segmentPrefix), I(e, z(a.toString(16))), L(e, un);
			default: throw Error(i(397));
		}
	}
	function pn(e, t) {
		switch (t.insertionMode) {
			case 0:
			case 1:
			case 3:
			case 2: return L(e, Jt);
			case 4: return L(e, Z);
			case 5: return L(e, Qt);
			case 6: return L(e, tn);
			case 7: return L(e, $);
			case 8: return L(e, sn);
			case 9: return L(e, dn);
			default: throw Error(i(397));
		}
	}
	var mn = B("$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS(\""), hn = B("$RS(\""), gn = B("\",\""), _n = B("\")<\/script>");
	B("<template data-rsi=\"\" data-sid=\""), B("\" data-pid=\"");
	var vn = B("$RB=[];$RV=function(a){$RT=performance.now();for(var b=0;b<a.length;b+=2){var c=a[b],e=a[b+1];null!==e.parentNode&&e.parentNode.removeChild(e);var f=c.parentNode;if(f){var g=c.previousSibling,h=0;do{if(c&&8===c.nodeType){var d=c.data;if(\"/$\"===d||\"/&\"===d)if(0===h)break;else h--;else\"$\"!==d&&\"$?\"!==d&&\"$~\"!==d&&\"$!\"!==d&&\"&\"!==d||h++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;e.firstChild;)f.insertBefore(e.firstChild,c);g.data=\"$\";g._reactRetry&&requestAnimationFrame(g._reactRetry)}}a.length=0};\n$RC=function(a,b){if(b=document.getElementById(b))(a=document.getElementById(a))?(a.previousSibling.data=\"$~\",$RB.push(a,b),2===$RB.length&&(\"number\"!==typeof $RT?requestAnimationFrame($RV.bind(null,$RB)):(a=performance.now(),setTimeout($RV.bind(null,$RB),2300>a&&2E3<a?2300-a:$RT+300-a)))):b.parentNode.removeChild(b)};");
	z("$RV=function(A,g){function k(a,b){var e=a.getAttribute(b);e&&(b=a.style,l.push(a,b.viewTransitionName,b.viewTransitionClass),\"auto\"!==e&&(b.viewTransitionClass=e),(a=a.getAttribute(\"vt-name\"))||(a=\"_T_\"+K++ +\"_\"),b.viewTransitionName=a,B=!0)}var B=!1,K=0,l=[];try{var f=document.__reactViewTransition;if(f){f.finished.finally($RV.bind(null,g));return}var m=new Map;for(f=1;f<g.length;f+=2)for(var h=g[f].querySelectorAll(\"[vt-share]\"),d=0;d<h.length;d++){var c=h[d];m.set(c.getAttribute(\"vt-name\"),c)}var u=[];for(h=0;h<g.length;h+=2){var C=g[h],x=C.parentNode;if(x){var v=x.getBoundingClientRect();if(v.left||v.top||v.width||v.height){c=C;for(f=0;c;){if(8===c.nodeType){var r=c.data;if(\"/$\"===r)if(0===f)break;else f--;else\"$\"!==r&&\"$?\"!==r&&\"$~\"!==r&&\"$!\"!==r||f++}else if(1===c.nodeType){d=c;var D=d.getAttribute(\"vt-name\"),y=m.get(D);k(d,y?\"vt-share\":\"vt-exit\");y&&(k(y,\"vt-share\"),m.set(D,null));var E=d.querySelectorAll(\"[vt-share]\");for(d=0;d<E.length;d++){var F=E[d],G=F.getAttribute(\"vt-name\"),\nH=m.get(G);H&&(k(F,\"vt-share\"),k(H,\"vt-share\"),m.set(G,null))}}c=c.nextSibling}for(var I=g[h+1],t=I.firstElementChild;t;)null!==m.get(t.getAttribute(\"vt-name\"))&&k(t,\"vt-enter\"),t=t.nextElementSibling;c=x;do for(var n=c.firstElementChild;n;){var J=n.getAttribute(\"vt-update\");J&&\"none\"!==J&&!l.includes(n)&&k(n,\"vt-update\");n=n.nextElementSibling}while((c=c.parentNode)&&1===c.nodeType&&\"none\"!==c.getAttribute(\"vt-update\"));u.push.apply(u,I.querySelectorAll('img[src]:not([loading=\"lazy\"])'))}}}if(B){var z=\ndocument.__reactViewTransition=document.startViewTransition({update:function(){A(g);for(var a=[document.documentElement.clientHeight,document.fonts.ready],b={},e=0;e<u.length;b={g:b.g},e++)if(b.g=u[e],!b.g.complete){var p=b.g.getBoundingClientRect();0<p.bottom&&0<p.right&&p.top<window.innerHeight&&p.left<window.innerWidth&&(p=new Promise(function(w){return function(q){w.g.addEventListener(\"load\",q);w.g.addEventListener(\"error\",q)}}(b)),a.push(p))}return Promise.race([Promise.all(a),new Promise(function(w){var q=\nperformance.now();setTimeout(w,2300>q&&2E3<q?2300-q:500)})])},types:[]});z.ready.finally(function(){for(var a=l.length-3;0<=a;a-=3){var b=l[a],e=b.style;e.viewTransitionName=l[a+1];e.viewTransitionClass=l[a+1];\"\"===b.getAttribute(\"style\")&&b.removeAttribute(\"style\")}});z.finished.finally(function(){document.__reactViewTransition===z&&(document.__reactViewTransition=null)});$RB=[];return}}catch(a){}A(g)}.bind(null,$RV);");
	var yn = B("$RC(\""), bn = B("$RM=new Map;$RR=function(n,w,p){function u(q){this._p=null;q()}for(var r=new Map,t=document,h,b,e=t.querySelectorAll(\"link[data-precedence],style[data-precedence]\"),v=[],k=0;b=e[k++];)\"not all\"===b.getAttribute(\"media\")?v.push(b):(\"LINK\"===b.tagName&&$RM.set(b.getAttribute(\"href\"),b),r.set(b.dataset.precedence,h=b));e=0;b=[];var l,a;for(k=!0;;){if(k){var f=p[e++];if(!f){k=!1;e=0;continue}var c=!1,m=0;var d=f[m++];if(a=$RM.get(d)){var g=a._p;c=!0}else{a=t.createElement(\"link\");a.href=d;a.rel=\n\"stylesheet\";for(a.dataset.precedence=l=f[m++];g=f[m++];)a.setAttribute(g,f[m++]);g=a._p=new Promise(function(q,x){a.onload=u.bind(a,q);a.onerror=u.bind(a,x)});$RM.set(d,a)}d=a.getAttribute(\"media\");!g||d&&!matchMedia(d).matches||b.push(g);if(c)continue}else{a=v[e++];if(!a)break;l=a.getAttribute(\"data-precedence\");a.removeAttribute(\"media\")}c=r.get(l)||h;c===h&&(h=a);r.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=t.head,c.insertBefore(a,c.firstChild))}if(p=document.getElementById(n))p.previousSibling.data=\n\"$~\";Promise.all(b).then($RC.bind(null,n,w),$RX.bind(null,n,\"CSS failed to load\"))};$RR(\""), xn = B("$RR(\""), Sn = B("\",\""), Cn = B("\","), wn = B("\""), Tn = B(")<\/script>");
	B("<template data-rci=\"\" data-bid=\""), B("<template data-rri=\"\" data-bid=\""), B("\" data-sid=\""), B("\" data-sty=\"");
	var En = B("$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data=\"$!\",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};"), Dn = B("$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data=\"$!\",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};;$RX(\""), On = B("$RX(\""), kn = B("\""), An = B(","), jn = B(")<\/script>");
	B("<template data-rxi=\"\" data-bid=\""), B("\" data-dgst=\""), B("\" data-msg=\""), B("\" data-stck=\""), B("\" data-cstck=\"");
	var Mn = /[<\u2028\u2029]/g;
	function Nn(e) {
		return JSON.stringify(e).replace(Mn, function(e) {
			switch (e) {
				case "<": return "\\u003c";
				case "\u2028": return "\\u2028";
				case "\u2029": return "\\u2029";
				default: throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
			}
		});
	}
	var Pn = /[&><\u2028\u2029]/g;
	function Fn(e) {
		return JSON.stringify(e).replace(Pn, function(e) {
			switch (e) {
				case "&": return "\\u0026";
				case ">": return "\\u003e";
				case "<": return "\\u003c";
				case "\u2028": return "\\u2028";
				case "\u2029": return "\\u2029";
				default: throw Error("escapeJSObjectForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
			}
		});
	}
	var In = B(" media=\"not all\" data-precedence=\""), Ln = B("\" data-href=\""), Rn = B("\">"), zn = B("</style>"), Bn = !1, Vn = !0;
	function Hn(e) {
		var t = e.rules, n = e.hrefs, i = 0;
		if (n.length) {
			for (I(this, ge.startInlineStyle), I(this, In), I(this, e.precedence), I(this, Ln); i < n.length - 1; i++) I(this, n[i]), I(this, Xn);
			for (I(this, n[i]), I(this, Rn), i = 0; i < t.length; i++) I(this, t[i]);
			Vn = L(this, zn), Bn = !0, t.length = 0, n.length = 0;
		}
	}
	function Un(e) {
		return e.state === 2 ? !1 : Bn = !0;
	}
	function Wn(e, t, n) {
		return Bn = !1, Vn = !0, ge = n, t.styles.forEach(Hn, e), ge = null, t.stylesheets.forEach(Un), Bn && (n.stylesToHoist = !0), Vn;
	}
	function Gn(e) {
		for (var t = 0; t < e.length; t++) I(this, e[t]);
		e.length = 0;
	}
	var Kn = [];
	function qn(e) {
		ut(Kn, e.props);
		for (var t = 0; t < Kn.length; t++) I(this, Kn[t]);
		Kn.length = 0, e.state = 2;
	}
	var Jn = B(" data-precedence=\""), Yn = B("\" data-href=\""), Xn = B(" "), Zn = B("\">"), Qn = B("</style>");
	function $n(e) {
		var t = 0 < e.sheets.size;
		e.sheets.forEach(qn, this), e.sheets.clear();
		var n = e.rules, i = e.hrefs;
		if (!t || i.length) {
			if (I(this, ge.startInlineStyle), I(this, Jn), I(this, e.precedence), e = 0, i.length) {
				for (I(this, Yn); e < i.length - 1; e++) I(this, i[e]), I(this, Xn);
				I(this, i[e]);
			}
			for (I(this, Zn), e = 0; e < n.length; e++) I(this, n[e]);
			I(this, Qn), n.length = 0, i.length = 0;
		}
	}
	function er(e) {
		if (e.state === 0) {
			e.state = 1;
			var t = e.props;
			for (ut(Kn, {
				rel: "preload",
				as: "style",
				href: e.props.href,
				crossOrigin: t.crossOrigin,
				fetchPriority: t.fetchPriority,
				integrity: t.integrity,
				media: t.media,
				hrefLang: t.hrefLang,
				referrerPolicy: t.referrerPolicy
			}), e = 0; e < Kn.length; e++) I(this, Kn[e]);
			Kn.length = 0;
		}
	}
	function tr(e) {
		e.sheets.forEach(er, this), e.sheets.clear();
	}
	B("<link rel=\"expect\" href=\"#"), B("\" blocking=\"render\"/>");
	var nr = B(" id=\"");
	function rr(e, t) {
		!(t.instructions & 32) && (t.instructions |= 32, e.push(nr, z(G("_" + t.idPrefix + "R_")), J));
	}
	var ir = B("["), ar = B(",["), or = B(","), sr = B("]");
	function cr(e, t) {
		I(e, ir);
		var n = ir;
		t.stylesheets.forEach(function(t) {
			if (t.state !== 2) if (t.state === 3) I(e, n), I(e, z(Fn("" + t.props.href))), I(e, sr), n = ar;
			else {
				I(e, n);
				var a = t.props["data-precedence"], o = t.props, s = K("" + t.props.href);
				for (var c in I(e, z(Fn(s))), a = "" + a, I(e, or), I(e, z(Fn(a))), o) if (U.call(o, c) && (a = o[c], a != null)) switch (c) {
					case "href":
					case "rel":
					case "precedence":
					case "data-precedence": break;
					case "children":
					case "dangerouslySetInnerHTML": throw Error(i(399, "link"));
					default: lr(e, c, a);
				}
				I(e, sr), n = ar, t.state = 3;
			}
		}), I(e, sr);
	}
	function lr(e, t, n) {
		var i = t.toLowerCase();
		switch (typeof n) {
			case "function":
			case "symbol": return;
		}
		switch (t) {
			case "innerHTML":
			case "dangerouslySetInnerHTML":
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "style":
			case "ref": return;
			case "className":
				i = "class", t = "" + n;
				break;
			case "hidden":
				if (!1 === n) return;
				t = "";
				break;
			case "src":
			case "href":
				n = K(n), t = "" + n;
				break;
			default:
				if (2 < t.length && (t[0] === "o" || t[0] === "O") && (t[1] === "n" || t[1] === "N") || !ie(t)) return;
				t = "" + n;
		}
		I(e, or), I(e, z(Fn(i))), I(e, or), I(e, z(Fn(t)));
	}
	function ur() {
		return {
			styles: /* @__PURE__ */ new Set(),
			stylesheets: /* @__PURE__ */ new Set(),
			suspenseyImages: !1
		};
	}
	function dr(e) {
		var t = Gi || null;
		if (t) {
			var n = t.resumableState, i = t.renderState;
			if (typeof e == "string" && e) {
				if (!n.dnsResources.hasOwnProperty(e)) {
					n.dnsResources[e] = null, n = i.headers;
					var a, o;
					(o = n && 0 < n.remainingCapacity) && (o = (a = "<" + ("" + e).replace(br, xr) + ">; rel=dns-prefetch", 0 <= (n.remainingCapacity -= a.length + 2))), o ? (i.resets.dns[e] = null, n.preconnects && (n.preconnects += ", "), n.preconnects += a) : (a = [], ut(a, {
						href: e,
						rel: "dns-prefetch"
					}), i.preconnects.add(a));
				}
				Ha(t);
			}
		} else me.D(e);
	}
	function fr(e, t) {
		var n = Gi || null;
		if (n) {
			var i = n.resumableState, a = n.renderState;
			if (typeof e == "string" && e) {
				var o = t === "use-credentials" ? "credentials" : typeof t == "string" ? "anonymous" : "default";
				if (!i.connectResources[o].hasOwnProperty(e)) {
					i.connectResources[o][e] = null, i = a.headers;
					var s, c;
					if (c = i && 0 < i.remainingCapacity) {
						if (c = "<" + ("" + e).replace(br, xr) + ">; rel=preconnect", typeof t == "string") {
							var l = ("" + t).replace(Sr, Cr);
							c += "; crossorigin=\"" + l + "\"";
						}
						c = (s = c, 0 <= (i.remainingCapacity -= s.length + 2));
					}
					c ? (a.resets.connect[o][e] = null, i.preconnects && (i.preconnects += ", "), i.preconnects += s) : (o = [], ut(o, {
						rel: "preconnect",
						href: e,
						crossOrigin: t
					}), a.preconnects.add(o));
				}
				Ha(n);
			}
		} else me.C(e, t);
	}
	function pr(e, t, n) {
		var i = Gi || null;
		if (i) {
			var a = i.resumableState, o = i.renderState;
			if (t && e) {
				switch (t) {
					case "image":
						if (n) var s = n.imageSrcSet, c = n.imageSizes, l = n.fetchPriority;
						var u = s ? s + "\n" + (c || "") : e;
						if (a.imageResources.hasOwnProperty(u)) return;
						a.imageResources[u] = he, a = o.headers;
						var d;
						a && 0 < a.remainingCapacity && typeof s != "string" && l === "high" && (d = yr(e, t, n), 0 <= (a.remainingCapacity -= d.length + 2)) ? (o.resets.image[u] = he, a.highImagePreloads && (a.highImagePreloads += ", "), a.highImagePreloads += d) : (a = [], ut(a, H({
							rel: "preload",
							href: s ? void 0 : e,
							as: t
						}, n)), l === "high" ? o.highImagePreloads.add(a) : (o.bulkPreloads.add(a), o.preloads.images.set(u, a)));
						break;
					case "style":
						if (a.styleResources.hasOwnProperty(e)) return;
						s = [], ut(s, H({
							rel: "preload",
							href: e,
							as: t
						}, n)), a.styleResources[e] = !n || typeof n.crossOrigin != "string" && typeof n.integrity != "string" ? he : [n.crossOrigin, n.integrity], o.preloads.stylesheets.set(e, s), o.bulkPreloads.add(s);
						break;
					case "script":
						if (a.scriptResources.hasOwnProperty(e)) return;
						s = [], o.preloads.scripts.set(e, s), o.bulkPreloads.add(s), ut(s, H({
							rel: "preload",
							href: e,
							as: t
						}, n)), a.scriptResources[e] = !n || typeof n.crossOrigin != "string" && typeof n.integrity != "string" ? he : [n.crossOrigin, n.integrity];
						break;
					default:
						if (a.unknownResources.hasOwnProperty(t)) {
							if (s = a.unknownResources[t], s.hasOwnProperty(e)) return;
						} else s = {}, a.unknownResources[t] = s;
						if (s[e] = he, (a = o.headers) && 0 < a.remainingCapacity && t === "font" && (u = yr(e, t, n), 0 <= (a.remainingCapacity -= u.length + 2))) o.resets.font[e] = he, a.fontPreloads && (a.fontPreloads += ", "), a.fontPreloads += u;
						else switch (a = [], e = H({
							rel: "preload",
							href: e,
							as: t
						}, n), ut(a, e), t) {
							case "font":
								o.fontPreloads.add(a);
								break;
							default: o.bulkPreloads.add(a);
						}
				}
				Ha(i);
			}
		} else me.L(e, t, n);
	}
	function mr(e, t) {
		var n = Gi || null;
		if (n) {
			var i = n.resumableState, a = n.renderState;
			if (e) {
				var o = t && typeof t.as == "string" ? t.as : "script";
				switch (o) {
					case "script":
						if (i.moduleScriptResources.hasOwnProperty(e)) return;
						o = [], i.moduleScriptResources[e] = !t || typeof t.crossOrigin != "string" && typeof t.integrity != "string" ? he : [t.crossOrigin, t.integrity], a.preloads.moduleScripts.set(e, o);
						break;
					default:
						if (i.moduleUnknownResources.hasOwnProperty(o)) {
							var s = i.unknownResources[o];
							if (s.hasOwnProperty(e)) return;
						} else s = {}, i.moduleUnknownResources[o] = s;
						o = [], s[e] = he;
				}
				ut(o, H({
					rel: "modulepreload",
					href: e
				}, t)), a.bulkPreloads.add(o), Ha(n);
			}
		} else me.m(e, t);
	}
	function hr(e, t, n) {
		var i = Gi || null;
		if (i) {
			var a = i.resumableState, o = i.renderState;
			if (e) {
				t ||= "default";
				var s = o.styles.get(t), c = a.styleResources.hasOwnProperty(e) ? a.styleResources[e] : void 0;
				c !== null && (a.styleResources[e] = null, s || (s = {
					precedence: z(G(t)),
					rules: [],
					hrefs: [],
					sheets: /* @__PURE__ */ new Map()
				}, o.styles.set(t, s)), t = {
					state: 0,
					props: H({
						rel: "stylesheet",
						href: e,
						"data-precedence": t
					}, n)
				}, c && (c.length === 2 && vr(t.props, c), (o = o.preloads.stylesheets.get(e)) && 0 < o.length ? o.length = 0 : t.state = 1), s.sheets.set(e, t), Ha(i));
			}
		} else me.S(e, t, n);
	}
	function gr(e, t) {
		var n = Gi || null;
		if (n) {
			var i = n.resumableState, a = n.renderState;
			if (e) {
				var o = i.scriptResources.hasOwnProperty(e) ? i.scriptResources[e] : void 0;
				o !== null && (i.scriptResources[e] = null, t = H({
					src: e,
					async: !0
				}, t), o && (o.length === 2 && vr(t, o), e = a.preloads.scripts.get(e)) && (e.length = 0), e = [], a.scripts.add(e), vt(e, t), Ha(n));
			}
		} else me.X(e, t);
	}
	function _r(e, t) {
		var n = Gi || null;
		if (n) {
			var i = n.resumableState, a = n.renderState;
			if (e) {
				var o = i.moduleScriptResources.hasOwnProperty(e) ? i.moduleScriptResources[e] : void 0;
				o !== null && (i.moduleScriptResources[e] = null, t = H({
					src: e,
					type: "module",
					async: !0
				}, t), o && (o.length === 2 && vr(t, o), e = a.preloads.moduleScripts.get(e)) && (e.length = 0), e = [], a.scripts.add(e), vt(e, t), Ha(n));
			}
		} else me.M(e, t);
	}
	function vr(e, t) {
		e.crossOrigin ??= t[0], e.integrity ??= t[1];
	}
	function yr(e, t, n) {
		for (var i in e = ("" + e).replace(br, xr), t = ("" + t).replace(Sr, Cr), t = "<" + e + ">; rel=preload; as=\"" + t + "\"", n) U.call(n, i) && (e = n[i], typeof e == "string" && (t += "; " + i.toLowerCase() + "=\"" + ("" + e).replace(Sr, Cr) + "\""));
		return t;
	}
	var br = /[<>\r\n]/g;
	function xr(e) {
		switch (e) {
			case "<": return "%3C";
			case ">": return "%3E";
			case "\n": return "%0A";
			case "\r": return "%0D";
			default: throw Error("escapeLinkHrefForHeaderContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
		}
	}
	var Sr = /["';,\r\n]/g;
	function Cr(e) {
		switch (e) {
			case "\"": return "%22";
			case "'": return "%27";
			case ";": return "%3B";
			case ",": return "%2C";
			case "\n": return "%0A";
			case "\r": return "%0D";
			default: throw Error("escapeStringForLinkHeaderQuotedParamValueContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
		}
	}
	function wr(e) {
		this.styles.add(e);
	}
	function Tr(e) {
		this.stylesheets.add(e);
	}
	function Er(e, t) {
		t.styles.forEach(wr, e), t.stylesheets.forEach(Tr, e), t.suspenseyImages && (e.suspenseyImages = !0);
	}
	function Dr(e) {
		return 0 < e.stylesheets.size || e.suspenseyImages;
	}
	var Or = Function.prototype.bind, kr = Symbol.for("react.client.reference");
	function Ar(e) {
		if (e == null) return null;
		if (typeof e == "function") return e.$$typeof === kr ? null : e.displayName || e.name || null;
		if (typeof e == "string") return e;
		switch (e) {
			case s: return "Fragment";
			case l: return "Profiler";
			case c: return "StrictMode";
			case m: return "Suspense";
			case g: return "SuspenseList";
			case b: return "Activity";
		}
		if (typeof e == "object") switch (e.$$typeof) {
			case o: return "Portal";
			case d: return e.displayName || "Context";
			case u: return (e._context.displayName || "Context") + ".Consumer";
			case p:
				var t = e.render;
				return e = e.displayName, e ||= (e = t.displayName || t.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
			case _: return t = e.displayName || null, t === null ? Ar(e.type) || "Memo" : t;
			case v:
				t = e._payload, e = e._init;
				try {
					return Ar(e(t));
				} catch {}
		}
		return null;
	}
	var jr = {}, Mr = null;
	function Nr(e, t) {
		if (e !== t) {
			e.context._currentValue = e.parentValue, e = e.parent;
			var n = t.parent;
			if (e === null) {
				if (n !== null) throw Error(i(401));
			} else {
				if (n === null) throw Error(i(401));
				Nr(e, n);
			}
			t.context._currentValue = t.value;
		}
	}
	function Pr(e) {
		e.context._currentValue = e.parentValue, e = e.parent, e !== null && Pr(e);
	}
	function Fr(e) {
		var t = e.parent;
		t !== null && Fr(t), e.context._currentValue = e.value;
	}
	function Ir(e, t) {
		if (e.context._currentValue = e.parentValue, e = e.parent, e === null) throw Error(i(402));
		e.depth === t.depth ? Nr(e, t) : Ir(e, t);
	}
	function Lr(e, t) {
		var n = t.parent;
		if (n === null) throw Error(i(402));
		e.depth === n.depth ? Nr(e, n) : Lr(e, n), t.context._currentValue = t.value;
	}
	function Rr(e) {
		var t = Mr;
		t !== e && (t === null ? Fr(e) : e === null ? Pr(t) : t.depth === e.depth ? Nr(t, e) : t.depth > e.depth ? Ir(t, e) : Lr(t, e), Mr = e);
	}
	var zr = {
		enqueueSetState: function(e, t) {
			e = e._reactInternals, e.queue !== null && e.queue.push(t);
		},
		enqueueReplaceState: function(e, t) {
			e = e._reactInternals, e.replace = !0, e.queue = [t];
		},
		enqueueForceUpdate: function() {}
	}, Br = {
		id: 1,
		overflow: ""
	};
	function Vr(e, t, n) {
		var i = e.id;
		e = e.overflow;
		var a = 32 - Hr(i) - 1;
		i &= ~(1 << a), n += 1;
		var o = 32 - Hr(t) + a;
		if (30 < o) {
			var s = a - a % 5;
			return o = (i & (1 << s) - 1).toString(32), i >>= s, a -= s, {
				id: 1 << 32 - Hr(t) + a | n << a | i,
				overflow: o + e
			};
		}
		return {
			id: 1 << o | n << a | i,
			overflow: e
		};
	}
	var Hr = Math.clz32 ? Math.clz32 : Gr, Ur = Math.log, Wr = Math.LN2;
	function Gr(e) {
		return e >>>= 0, e === 0 ? 32 : 31 - (Ur(e) / Wr | 0) | 0;
	}
	function Kr() {}
	var qr = Error(i(460));
	function Jr(e, t, n) {
		switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(Kr, Kr), t = n), t.status) {
			case "fulfilled": return t.value;
			case "rejected": throw t.reason;
			default:
				switch (typeof t.status == "string" ? t.then(Kr, Kr) : (e = t, e.status = "pending", e.then(function(e) {
					if (t.status === "pending") {
						var n = t;
						n.status = "fulfilled", n.value = e;
					}
				}, function(e) {
					if (t.status === "pending") {
						var n = t;
						n.status = "rejected", n.reason = e;
					}
				})), t.status) {
					case "fulfilled": return t.value;
					case "rejected": throw t.reason;
				}
				throw Yr = t, qr;
		}
	}
	var Yr = null;
	function Xr() {
		if (Yr === null) throw Error(i(459));
		var e = Yr;
		return Yr = null, e;
	}
	function Zr(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var Qr = typeof Object.is == "function" ? Object.is : Zr, $r = null, ei = null, ti = null, ni = null, ri = null, ii = null, ai = !1, oi = !1, si = 0, ci = 0, li = -1, ui = 0, di = null, fi = null, pi = 0;
	function mi() {
		if ($r === null) throw Error(i(321));
		return $r;
	}
	function hi() {
		if (0 < pi) throw Error(i(312));
		return {
			memoizedState: null,
			queue: null,
			next: null
		};
	}
	function gi() {
		return ii === null ? ri === null ? (ai = !1, ri = ii = hi()) : (ai = !0, ii = ri) : ii.next === null ? (ai = !1, ii = ii.next = hi()) : (ai = !0, ii = ii.next), ii;
	}
	function _i() {
		var e = di;
		return di = null, e;
	}
	function vi() {
		ni = ti = ei = $r = null, oi = !1, ri = null, pi = 0, ii = fi = null;
	}
	function yi(e, t) {
		return typeof t == "function" ? t(e) : t;
	}
	function bi(e, t, n) {
		if ($r = mi(), ii = gi(), ai) {
			var i = ii.queue;
			if (t = i.dispatch, fi !== null && (n = fi.get(i), n !== void 0)) {
				fi.delete(i), i = ii.memoizedState;
				do
					i = e(i, n.action), n = n.next;
				while (n !== null);
				return ii.memoizedState = i, [i, t];
			}
			return [ii.memoizedState, t];
		}
		return e = e === yi ? typeof t == "function" ? t() : t : n === void 0 ? t : n(t), ii.memoizedState = e, e = ii.queue = {
			last: null,
			dispatch: null
		}, e = e.dispatch = Si.bind(null, $r, e), [ii.memoizedState, e];
	}
	function xi(e, t) {
		if ($r = mi(), ii = gi(), t = t === void 0 ? null : t, ii !== null) {
			var n = ii.memoizedState;
			if (n !== null && t !== null) {
				var i = n[1];
				a: if (i === null) i = !1;
				else {
					for (var a = 0; a < i.length && a < t.length; a++) if (!Qr(t[a], i[a])) {
						i = !1;
						break a;
					}
					i = !0;
				}
				if (i) return n[0];
			}
		}
		return e = e(), ii.memoizedState = [e, t], e;
	}
	function Si(e, t, n) {
		if (25 <= pi) throw Error(i(301));
		if (e === $r) if (oi = !0, e = {
			action: n,
			next: null
		}, fi === null && (fi = /* @__PURE__ */ new Map()), n = fi.get(t), n === void 0) fi.set(t, e);
		else {
			for (t = n; t.next !== null;) t = t.next;
			t.next = e;
		}
	}
	function Ci() {
		throw Error(i(440));
	}
	function wi() {
		throw Error(i(394));
	}
	function Ti() {
		throw Error(i(479));
	}
	function Ei(e, t, n) {
		mi();
		var i = ci++, a = ti;
		if (typeof e.$$FORM_ACTION == "function") {
			var o = null, s = ni;
			a = a.formState;
			var c = e.$$IS_SIGNATURE_EQUAL;
			if (a !== null && typeof c == "function") {
				var l = a[1];
				c.call(e, a[2], a[3]) && (o = n === void 0 ? "k" + D(JSON.stringify([
					s,
					null,
					i
				]), 0) : "p" + n, l === o && (li = i, t = a[0]));
			}
			var u = e.bind(null, t);
			return e = function(e) {
				u(e);
			}, typeof u.$$FORM_ACTION == "function" && (e.$$FORM_ACTION = function(e) {
				e = u.$$FORM_ACTION(e), n !== void 0 && (n += "", e.action = n);
				var t = e.data;
				return t && (o === null && (o = n === void 0 ? "k" + D(JSON.stringify([
					s,
					null,
					i
				]), 0) : "p" + n), t.append("$ACTION_KEY", o)), e;
			}), [
				t,
				e,
				!1
			];
		}
		var d = e.bind(null, t);
		return [
			t,
			function(e) {
				d(e);
			},
			!1
		];
	}
	function Di(e) {
		var t = ui;
		return ui += 1, di === null && (di = []), Jr(di, e, t);
	}
	function Oi() {
		throw Error(i(393));
	}
	var ki = {
		readContext: function(e) {
			return e._currentValue;
		},
		use: function(e) {
			if (typeof e == "object" && e) {
				if (typeof e.then == "function") return Di(e);
				if (e.$$typeof === d) return e._currentValue;
			}
			throw Error(i(438, String(e)));
		},
		useContext: function(e) {
			return mi(), e._currentValue;
		},
		useMemo: xi,
		useReducer: bi,
		useRef: function(e) {
			$r = mi(), ii = gi();
			var t = ii.memoizedState;
			return t === null ? (e = { current: e }, ii.memoizedState = e) : t;
		},
		useState: function(e) {
			return bi(yi, e);
		},
		useInsertionEffect: Kr,
		useLayoutEffect: Kr,
		useCallback: function(e, t) {
			return xi(function() {
				return e;
			}, t);
		},
		useImperativeHandle: Kr,
		useEffect: Kr,
		useDebugValue: Kr,
		useDeferredValue: function(e, t) {
			return mi(), t === void 0 ? e : t;
		},
		useTransition: function() {
			return mi(), [!1, wi];
		},
		useId: function() {
			var e = ei.treeContext, t = e.overflow;
			e = e.id, e = (e & ~(1 << 32 - Hr(e) - 1)).toString(32) + t;
			var n = Ai;
			if (n === null) throw Error(i(404));
			return t = si++, e = "_" + n.idPrefix + "R_" + e, 0 < t && (e += "H" + t.toString(32)), e + "_";
		},
		useSyncExternalStore: function(e, t, n) {
			if (n === void 0) throw Error(i(407));
			return n();
		},
		useOptimistic: function(e) {
			return mi(), [e, Ti];
		},
		useActionState: Ei,
		useFormState: Ei,
		useHostTransitionStatus: function() {
			return mi(), pe;
		},
		useMemoCache: function(e) {
			for (var t = Array(e), n = 0; n < e; n++) t[n] = S;
			return t;
		},
		useCacheRefresh: function() {
			return Oi;
		},
		useEffectEvent: function() {
			return Ci;
		}
	}, Ai = null, ji = {
		getCacheForType: function() {
			throw Error(i(248));
		},
		cacheSignal: function() {
			throw Error(i(248));
		}
	}, Mi, Ni;
	function Pi(e) {
		if (Mi === void 0) try {
			throw Error();
		} catch (e) {
			var t = e.stack.trim().match(/\n( *(at )?)/);
			Mi = t && t[1] || "", Ni = -1 < e.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
		}
		return "\n" + Mi + e + Ni;
	}
	var Fi = !1;
	function Ii(e, t) {
		if (!e || Fi) return "";
		Fi = !0;
		var n = Error.prepareStackTrace;
		Error.prepareStackTrace = void 0;
		try {
			var i = { DetermineComponentFrameRoot: function() {
				try {
					if (t) {
						var n = function() {
							throw Error();
						};
						if (Object.defineProperty(n.prototype, "props", { set: function() {
							throw Error();
						} }), typeof Reflect == "object" && Reflect.construct) {
							try {
								Reflect.construct(n, []);
							} catch (e) {
								var i = e;
							}
							Reflect.construct(e, [], n);
						} else {
							try {
								n.call();
							} catch (e) {
								i = e;
							}
							e.call(n.prototype);
						}
					} else {
						try {
							throw Error();
						} catch (e) {
							i = e;
						}
						(n = e()) && typeof n.catch == "function" && n.catch(function() {});
					}
				} catch (e) {
					if (e && i && typeof e.stack == "string") return [e.stack, i.stack];
				}
				return [null, null];
			} };
			i.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
			var a = Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot, "name");
			a && a.configurable && Object.defineProperty(i.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
			var o = i.DetermineComponentFrameRoot(), s = o[0], c = o[1];
			if (s && c) {
				var l = s.split("\n"), u = c.split("\n");
				for (a = i = 0; i < l.length && !l[i].includes("DetermineComponentFrameRoot");) i++;
				for (; a < u.length && !u[a].includes("DetermineComponentFrameRoot");) a++;
				if (i === l.length || a === u.length) for (i = l.length - 1, a = u.length - 1; 1 <= i && 0 <= a && l[i] !== u[a];) a--;
				for (; 1 <= i && 0 <= a; i--, a--) if (l[i] !== u[a]) {
					if (i !== 1 || a !== 1) do
						if (i--, a--, 0 > a || l[i] !== u[a]) {
							var d = "\n" + l[i].replace(" at new ", " at ");
							return e.displayName && d.includes("<anonymous>") && (d = d.replace("<anonymous>", e.displayName)), d;
						}
					while (1 <= i && 0 <= a);
					break;
				}
			}
		} finally {
			Fi = !1, Error.prepareStackTrace = n;
		}
		return (n = e ? e.displayName || e.name : "") ? Pi(n) : "";
	}
	function Li(e) {
		if (typeof e == "string") return Pi(e);
		if (typeof e == "function") return e.prototype && e.prototype.isReactComponent ? Ii(e, !0) : Ii(e, !1);
		if (typeof e == "object" && e) {
			switch (e.$$typeof) {
				case p: return Ii(e.render, !1);
				case _: return Ii(e.type, !1);
				case v:
					var t = e, n = t._payload;
					t = t._init;
					try {
						e = t(n);
					} catch {
						return Pi("Lazy");
					}
					return Li(e);
			}
			if (typeof e.name == "string") {
				a: {
					n = e.name, t = e.env;
					var i = e.debugLocation;
					if (i != null && (e = Error.prepareStackTrace, Error.prepareStackTrace = void 0, i = i.stack, Error.prepareStackTrace = e, i.startsWith("Error: react-stack-top-frame\n") && (i = i.slice(29)), e = i.indexOf("\n"), e !== -1 && (i = i.slice(e + 1)), e = i.indexOf("react_stack_bottom_frame"), e !== -1 && (e = i.lastIndexOf("\n", e)), e = e === -1 ? "" : i = i.slice(0, e), i = e.lastIndexOf("\n"), e = i === -1 ? e : e.slice(i + 1), e.indexOf(n) !== -1)) {
						n = "\n" + e;
						break a;
					}
					n = Pi(n + (t ? " [" + t + "]" : ""));
				}
				return n;
			}
		}
		switch (e) {
			case g: return Pi("SuspenseList");
			case m: return Pi("Suspense");
		}
		return "";
	}
	function Ri(e, t) {
		return (500 < t.byteSize || Dr(t.contentState)) && t.contentPreamble === null;
	}
	function zi(e) {
		if (typeof e == "object" && e && typeof e.environmentName == "string") {
			var t = e.environmentName;
			e = [e].slice(0), typeof e[0] == "string" ? e.splice(0, 1, "%c%s%c " + e[0], "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", " " + t + " ", "") : e.splice(0, 0, "%c%s%c", "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", " " + t + " ", ""), e.unshift(console), t = Or.apply(console.error, e), t();
		} else console.error(e);
		return null;
	}
	function Bi(e, t, n, i, a, o, s, c, l, u, d) {
		var f = /* @__PURE__ */ new Set();
		this.destination = null, this.flushScheduled = !1, this.resumableState = e, this.renderState = t, this.rootFormatContext = n, this.progressiveChunkSize = i === void 0 ? 12800 : i, this.status = 10, this.fatalError = null, this.pendingRootTasks = this.allPendingTasks = this.nextSegmentId = 0, this.completedPreambleSegments = this.completedRootSegment = null, this.byteSize = 0, this.abortableTasks = f, this.pingedTasks = [], this.clientRenderedBoundaries = [], this.completedBoundaries = [], this.partialBoundaries = [], this.trackedPostpones = null, this.onError = a === void 0 ? zi : a, this.onPostpone = u === void 0 ? Kr : u, this.onAllReady = o === void 0 ? Kr : o, this.onShellReady = s === void 0 ? Kr : s, this.onShellError = c === void 0 ? Kr : c, this.onFatalError = l === void 0 ? Kr : l, this.formState = d === void 0 ? null : d;
	}
	function Vi(e, t, n, i, a, o, s, c, l, u, d, f) {
		return t = new Bi(t, n, i, a, o, s, c, l, u, d, f), n = Xi(t, 0, null, i, !1, !1), n.parentFlushed = !0, e = Ji(t, null, e, -1, null, n, null, null, t.abortableTasks, null, i, null, Br, null, null), Zi(e), t.pingedTasks.push(e), t;
	}
	function Hi(e, t, n, i, a, o, s, c, l, u, d) {
		return e = Vi(e, t, n, i, a, o, s, c, l, u, d, void 0), e.trackedPostpones = {
			workingMap: /* @__PURE__ */ new Map(),
			rootNodes: [],
			rootSlots: null
		}, e;
	}
	function Ui(e, t, n, i, a, o, s, c, l) {
		return n = new Bi(t.resumableState, n, t.rootFormatContext, t.progressiveChunkSize, i, a, o, s, c, l, null), n.nextSegmentId = t.nextSegmentId, typeof t.replaySlots == "number" ? (i = Xi(n, 0, null, t.rootFormatContext, !1, !1), i.parentFlushed = !0, e = Ji(n, null, e, -1, null, i, null, null, n.abortableTasks, null, t.rootFormatContext, null, Br, null, null), Zi(e), n.pingedTasks.push(e), n) : (e = Yi(n, null, {
			nodes: t.replayNodes,
			slots: t.replaySlots,
			pendingTasks: 0
		}, e, -1, null, null, n.abortableTasks, null, t.rootFormatContext, null, Br, null, null), Zi(e), n.pingedTasks.push(e), n);
	}
	function Wi(e, t, n, i, a, o, s, c, l) {
		return e = Ui(e, t, n, i, a, o, s, c, l), e.trackedPostpones = {
			workingMap: /* @__PURE__ */ new Map(),
			rootNodes: [],
			rootSlots: null
		}, e;
	}
	var Gi = null;
	function Ki(e, t) {
		e.pingedTasks.push(t), e.pingedTasks.length === 1 && (e.flushScheduled = e.destination !== null, e.trackedPostpones !== null || e.status === 10 ? N(function() {
			return ka(e);
		}) : A(function() {
			return ka(e);
		}));
	}
	function qi(e, t, n, i, a) {
		return n = {
			status: 0,
			rootSegmentID: -1,
			parentFlushed: !1,
			pendingTasks: 0,
			row: t,
			completedSegments: [],
			byteSize: 0,
			fallbackAbortableTasks: n,
			errorDigest: null,
			contentState: ur(),
			fallbackState: ur(),
			contentPreamble: i,
			fallbackPreamble: a,
			trackedContentKeyPath: null,
			trackedFallbackNode: null
		}, t !== null && (t.pendingTasks++, i = t.boundaries, i !== null && (e.allPendingTasks++, n.pendingTasks++, i.push(n)), e = t.inheritedHoistables, e !== null && Er(n.contentState, e)), n;
	}
	function Ji(e, t, n, i, a, o, s, c, l, u, d, f, p, m, h) {
		e.allPendingTasks++, a === null ? e.pendingRootTasks++ : a.pendingTasks++, m !== null && m.pendingTasks++;
		var g = {
			replay: null,
			node: n,
			childIndex: i,
			ping: function() {
				return Ki(e, g);
			},
			blockedBoundary: a,
			blockedSegment: o,
			blockedPreamble: s,
			hoistableState: c,
			abortSet: l,
			keyPath: u,
			formatContext: d,
			context: f,
			treeContext: p,
			row: m,
			componentStack: h,
			thenableState: t
		};
		return l.add(g), g;
	}
	function Yi(e, t, n, i, a, o, s, c, l, u, d, f, p, m) {
		e.allPendingTasks++, o === null ? e.pendingRootTasks++ : o.pendingTasks++, p !== null && p.pendingTasks++, n.pendingTasks++;
		var h = {
			replay: n,
			node: i,
			childIndex: a,
			ping: function() {
				return Ki(e, h);
			},
			blockedBoundary: o,
			blockedSegment: null,
			blockedPreamble: null,
			hoistableState: s,
			abortSet: c,
			keyPath: l,
			formatContext: u,
			context: d,
			treeContext: f,
			row: p,
			componentStack: m,
			thenableState: t
		};
		return c.add(h), h;
	}
	function Xi(e, t, n, i, a, o) {
		return {
			status: 0,
			parentFlushed: !1,
			id: -1,
			index: t,
			chunks: [],
			children: [],
			preambleChildren: [],
			parentFormatContext: i,
			boundary: n,
			lastPushedText: a,
			textEmbedded: o
		};
	}
	function Zi(e) {
		var t = e.node;
		if (typeof t == "object" && t) switch (t.$$typeof) {
			case a: e.componentStack = {
				parent: e.componentStack,
				type: t.type
			};
		}
	}
	function Qi(e) {
		return e === null ? null : {
			parent: e.parent,
			type: "Suspense Fallback"
		};
	}
	function $i(e) {
		var t = {};
		return e && Object.defineProperty(t, "componentStack", {
			configurable: !0,
			enumerable: !0,
			get: function() {
				try {
					var n = "", i = e;
					do
						n += Li(i.type), i = i.parent;
					while (i);
					var a = n;
				} catch (e) {
					a = "\nError generating stack: " + e.message + "\n" + e.stack;
				}
				return Object.defineProperty(t, "componentStack", { value: a }), a;
			}
		}), t;
	}
	function ea(e, t, n) {
		if (e = e.onError, t = e(t, n), t == null || typeof t == "string") return t;
	}
	function ta(e, t) {
		var n = e.onShellError, i = e.onFatalError;
		n(t), i(t), e.destination === null ? (e.status = 13, e.fatalError = t) : (e.status = 14, te(e.destination, t));
	}
	function na(e, t) {
		ra(e, t.next, t.hoistables);
	}
	function ra(e, t, n) {
		for (; t !== null;) {
			n !== null && (Er(t.hoistables, n), t.inheritedHoistables = n);
			var i = t.boundaries;
			if (i !== null) {
				t.boundaries = null;
				for (var a = 0; a < i.length; a++) {
					var o = i[a];
					n !== null && Er(o.contentState, n), Oa(e, o, null, null);
				}
			}
			if (t.pendingTasks--, 0 < t.pendingTasks) break;
			n = t.hoistables, t = t.next;
		}
	}
	function ia(e, t) {
		var n = t.boundaries;
		if (n !== null && t.pendingTasks === n.length) {
			for (var i = !0, a = 0; a < n.length; a++) {
				var o = n[a];
				if (o.pendingTasks !== 1 || o.parentFlushed || Ri(e, o)) {
					i = !1;
					break;
				}
			}
			i && ra(e, t, t.hoistables);
		}
	}
	function aa(e) {
		var t = {
			pendingTasks: 1,
			boundaries: null,
			hoistables: ur(),
			inheritedHoistables: null,
			together: !1,
			next: null
		};
		return e !== null && 0 < e.pendingTasks && (t.pendingTasks++, t.boundaries = [], e.next = t), t;
	}
	function oa(e, t, n, i, a) {
		var o = t.keyPath, s = t.treeContext, c = t.row;
		t.keyPath = n, n = i.length;
		var l = null;
		if (t.replay !== null) {
			var u = t.replay.slots;
			if (typeof u == "object" && u) for (var d = 0; d < n; d++) {
				var f = a !== "backwards" && a !== "unstable_legacy-backwards" ? d : n - 1 - d, p = i[f];
				t.row = l = aa(l), t.treeContext = Vr(s, n, f);
				var m = u[f];
				typeof m == "number" ? (ua(e, t, m, p, f), delete u[f]) : ya(e, t, p, f), --l.pendingTasks === 0 && na(e, l);
			}
			else for (u = 0; u < n; u++) d = a !== "backwards" && a !== "unstable_legacy-backwards" ? u : n - 1 - u, f = i[d], t.row = l = aa(l), t.treeContext = Vr(s, n, d), ya(e, t, f, d), --l.pendingTasks === 0 && na(e, l);
		} else if (a !== "backwards" && a !== "unstable_legacy-backwards") for (a = 0; a < n; a++) u = i[a], t.row = l = aa(l), t.treeContext = Vr(s, n, a), ya(e, t, u, a), --l.pendingTasks === 0 && na(e, l);
		else {
			for (a = t.blockedSegment, u = a.children.length, d = a.chunks.length, f = n - 1; 0 <= f; f--) {
				p = i[f], t.row = l = aa(l), t.treeContext = Vr(s, n, f), m = Xi(e, d, null, t.formatContext, f === 0 ? a.lastPushedText : !0, !0), a.children.splice(u, 0, m), t.blockedSegment = m;
				try {
					ya(e, t, p, f), m.lastPushedText && m.textEmbedded && m.chunks.push(Re), m.status = 1, Da(e, t.blockedBoundary, m), --l.pendingTasks === 0 && na(e, l);
				} catch (t) {
					throw m.status = e.status === 12 ? 3 : 4, t;
				}
			}
			t.blockedSegment = a, a.lastPushedText = !1;
		}
		c !== null && l !== null && 0 < l.pendingTasks && (c.pendingTasks++, l.next = c), t.treeContext = s, t.row = c, t.keyPath = o;
	}
	function sa(e, t, n, i, a, o) {
		var s = t.thenableState;
		for (t.thenableState = null, $r = {}, ei = t, ti = e, ni = n, ci = si = 0, li = -1, ui = 0, di = s, e = i(a, o); oi;) oi = !1, ci = si = 0, li = -1, ui = 0, pi += 1, ii = null, e = i(a, o);
		return vi(), e;
	}
	function ca(e, t, n, i, a, o, s) {
		var c = !1;
		if (o !== 0 && e.formState !== null) {
			var l = t.blockedSegment;
			if (l !== null) {
				c = !0, l = l.chunks;
				for (var u = 0; u < o; u++) u === s ? l.push(ct) : l.push(lt);
			}
		}
		o = t.keyPath, t.keyPath = n, a ? (n = t.treeContext, t.treeContext = Vr(n, 1, 0), ya(e, t, i, -1), t.treeContext = n) : c ? ya(e, t, i, -1) : da(e, t, i, -1), t.keyPath = o;
	}
	function la(e, t, n, a, o, f) {
		if (typeof a == "function") if (a.prototype && a.prototype.isReactComponent) {
			var h = o;
			if ("ref" in o) for (var S in h = {}, o) S !== "ref" && (h[S] = o[S]);
			var w = a.defaultProps;
			if (w) for (var D in h === o && (h = H({}, h, o)), w) h[D] === void 0 && (h[D] = w[D]);
			o = h, h = jr, w = a.contextType, typeof w == "object" && w && (h = w._currentValue), h = new a(o, h);
			var O = h.state === void 0 ? null : h.state;
			if (h.updater = zr, h.props = o, h.state = O, w = {
				queue: [],
				replace: !1
			}, h._reactInternals = w, f = a.contextType, h.context = typeof f == "object" && f ? f._currentValue : jr, f = a.getDerivedStateFromProps, typeof f == "function" && (f = f(o, O), O = f == null ? O : H({}, O, f), h.state = O), typeof a.getDerivedStateFromProps != "function" && typeof h.getSnapshotBeforeUpdate != "function" && (typeof h.UNSAFE_componentWillMount == "function" || typeof h.componentWillMount == "function")) if (a = h.state, typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount(), a !== h.state && zr.enqueueReplaceState(h, h.state, null), w.queue !== null && 0 < w.queue.length) if (a = w.queue, f = w.replace, w.queue = null, w.replace = !1, f && a.length === 1) h.state = a[0];
			else {
				for (w = f ? a[0] : h.state, O = !0, f = f ? 1 : 0; f < a.length; f++) D = a[f], D = typeof D == "function" ? D.call(h, w, o, void 0) : D, D != null && (O ? (O = !1, w = H({}, w, D)) : H(w, D));
				h.state = w;
			}
			else w.queue = null;
			if (a = h.render(), e.status === 12) throw null;
			o = t.keyPath, t.keyPath = n, da(e, t, a, -1), t.keyPath = o;
		} else {
			if (a = sa(e, t, n, a, o, void 0), e.status === 12) throw null;
			ca(e, t, n, a, si !== 0, ci, li);
		}
		else if (typeof a == "string") if (h = t.blockedSegment, h === null) h = o.children, w = t.formatContext, O = t.keyPath, t.formatContext = Pe(w, a, o), t.keyPath = n, ya(e, t, h, -1), t.formatContext = w, t.keyPath = O;
		else {
			if (O = Et(h.chunks, a, o, e.resumableState, e.renderState, t.blockedPreamble, t.hoistableState, t.formatContext, h.lastPushedText), h.lastPushedText = !1, w = t.formatContext, f = t.keyPath, t.keyPath = n, (t.formatContext = Pe(w, a, o)).insertionMode === 3) {
				n = Xi(e, 0, null, t.formatContext, !1, !1), h.preambleChildren.push(n), t.blockedSegment = n;
				try {
					n.status = 6, ya(e, t, O, -1), n.lastPushedText && n.textEmbedded && n.chunks.push(Re), n.status = 1, Da(e, t.blockedBoundary, n);
				} finally {
					t.blockedSegment = h;
				}
			} else ya(e, t, O, -1);
			t.formatContext = w, t.keyPath = f;
			a: {
				switch (t = h.chunks, e = e.resumableState, a) {
					case "title":
					case "style":
					case "script":
					case "area":
					case "base":
					case "br":
					case "col":
					case "embed":
					case "hr":
					case "img":
					case "input":
					case "keygen":
					case "link":
					case "meta":
					case "param":
					case "source":
					case "track":
					case "wbr": break a;
					case "body":
						if (1 >= w.insertionMode) {
							e.hasBody = !0;
							break a;
						}
						break;
					case "html":
						if (w.insertionMode === 0) {
							e.hasHtml = !0;
							break a;
						}
						break;
					case "head": if (1 >= w.insertionMode) break a;
				}
				t.push(Ot(a));
			}
			h.lastPushedText = !1;
		}
		else {
			switch (a) {
				case x:
				case c:
				case l:
				case s:
					a = t.keyPath, t.keyPath = n, da(e, t, o.children, -1), t.keyPath = a;
					return;
				case b:
					a = t.blockedSegment, a === null ? o.mode !== "hidden" && (a = t.keyPath, t.keyPath = n, ya(e, t, o.children, -1), t.keyPath = a) : o.mode !== "hidden" && (a.chunks.push(Pt), a.lastPushedText = !1, h = t.keyPath, t.keyPath = n, ya(e, t, o.children, -1), t.keyPath = h, a.chunks.push(Ft), a.lastPushedText = !1);
					return;
				case g:
					a: {
						if (a = o.children, o = o.revealOrder, o === "forwards" || o === "backwards" || o === "unstable_legacy-backwards") {
							if (E(a)) {
								oa(e, t, n, a, o);
								break a;
							}
							if ((h = T(a)) && (h = h.call(a))) {
								if (w = h.next(), !w.done) {
									do
										w = h.next();
									while (!w.done);
									oa(e, t, n, a, o);
								}
								break a;
							}
						}
						o === "together" ? (o = t.keyPath, h = t.row, w = t.row = aa(null), w.boundaries = [], w.together = !0, t.keyPath = n, da(e, t, a, -1), --w.pendingTasks === 0 && na(e, w), t.keyPath = o, t.row = h, h !== null && 0 < w.pendingTasks && (h.pendingTasks++, w.next = h)) : (o = t.keyPath, t.keyPath = n, da(e, t, a, -1), t.keyPath = o);
					}
					return;
				case C:
				case y: throw Error(i(343));
				case m:
					a: if (t.replay !== null) {
						a = t.keyPath, h = t.formatContext, w = t.row, t.keyPath = n, t.formatContext = Le(e.resumableState, h), t.row = null, n = o.children;
						try {
							ya(e, t, n, -1);
						} finally {
							t.keyPath = a, t.formatContext = h, t.row = w;
						}
					} else {
						a = t.keyPath, f = t.formatContext;
						var k = t.row;
						D = t.blockedBoundary, S = t.blockedPreamble;
						var A = t.hoistableState, j = t.blockedSegment, M = o.fallback;
						o = o.children;
						var N = /* @__PURE__ */ new Set(), P = 2 > t.formatContext.insertionMode ? qi(e, t.row, N, je(), je()) : qi(e, t.row, N, null, null);
						e.trackedPostpones !== null && (P.trackedContentKeyPath = n);
						var F = Xi(e, j.chunks.length, P, t.formatContext, !1, !1);
						j.children.push(F), j.lastPushedText = !1;
						var I = Xi(e, 0, null, t.formatContext, !1, !1);
						if (I.parentFlushed = !0, e.trackedPostpones !== null) {
							h = t.componentStack, w = [
								n[0],
								"Suspense Fallback",
								n[2]
							], O = [
								w[1],
								w[2],
								[],
								null
							], e.trackedPostpones.workingMap.set(w, O), P.trackedFallbackNode = O, t.blockedSegment = F, t.blockedPreamble = P.fallbackPreamble, t.keyPath = w, t.formatContext = Ie(e.resumableState, f), t.componentStack = Qi(h), F.status = 6;
							try {
								ya(e, t, M, -1), F.lastPushedText && F.textEmbedded && F.chunks.push(Re), F.status = 1, Da(e, D, F);
							} catch (t) {
								throw F.status = e.status === 12 ? 3 : 4, t;
							} finally {
								t.blockedSegment = j, t.blockedPreamble = S, t.keyPath = a, t.formatContext = f;
							}
							t = Ji(e, null, o, -1, P, I, P.contentPreamble, P.contentState, t.abortSet, n, Le(e.resumableState, t.formatContext), t.context, t.treeContext, null, h), Zi(t), e.pingedTasks.push(t);
						} else {
							t.blockedBoundary = P, t.blockedPreamble = P.contentPreamble, t.hoistableState = P.contentState, t.blockedSegment = I, t.keyPath = n, t.formatContext = Le(e.resumableState, f), t.row = null, I.status = 6;
							try {
								if (ya(e, t, o, -1), I.lastPushedText && I.textEmbedded && I.chunks.push(Re), I.status = 1, Da(e, P, I), Ea(P, I), P.pendingTasks === 0 && P.status === 0) {
									if (P.status = 1, !Ri(e, P)) {
										k !== null && --k.pendingTasks === 0 && na(e, k), e.pendingRootTasks === 0 && t.blockedPreamble && Ma(e);
										break a;
									}
								} else k !== null && k.together && ia(e, k);
							} catch (n) {
								P.status = 4, e.status === 12 ? (I.status = 3, h = e.fatalError) : (I.status = 4, h = n), w = $i(t.componentStack), O = ea(e, h, w), P.errorDigest = O, ga(e, P);
							} finally {
								t.blockedBoundary = D, t.blockedPreamble = S, t.hoistableState = A, t.blockedSegment = j, t.keyPath = a, t.formatContext = f, t.row = k;
							}
							t = Ji(e, null, M, -1, D, F, P.fallbackPreamble, P.fallbackState, N, [
								n[0],
								"Suspense Fallback",
								n[2]
							], Ie(e.resumableState, t.formatContext), t.context, t.treeContext, t.row, Qi(t.componentStack)), Zi(t), e.pingedTasks.push(t);
						}
					}
					return;
			}
			if (typeof a == "object" && a) switch (a.$$typeof) {
				case p:
					if ("ref" in o) for (j in h = {}, o) j !== "ref" && (h[j] = o[j]);
					else h = o;
					a = sa(e, t, n, a.render, h, f), ca(e, t, n, a, si !== 0, ci, li);
					return;
				case _:
					la(e, t, n, a.type, o, f);
					return;
				case d:
					if (w = o.children, h = t.keyPath, o = o.value, O = a._currentValue, a._currentValue = o, f = Mr, Mr = a = {
						parent: f,
						depth: f === null ? 0 : f.depth + 1,
						context: a,
						parentValue: O,
						value: o
					}, t.context = a, t.keyPath = n, da(e, t, w, -1), e = Mr, e === null) throw Error(i(403));
					e.context._currentValue = e.parentValue, e = Mr = e.parent, t.context = e, t.keyPath = h;
					return;
				case u:
					o = o.children, a = o(a._context._currentValue), o = t.keyPath, t.keyPath = n, da(e, t, a, -1), t.keyPath = o;
					return;
				case v:
					if (h = a._init, a = h(a._payload), e.status === 12) throw null;
					la(e, t, n, a, o, f);
					return;
			}
			throw Error(i(130, a == null ? a : typeof a, ""));
		}
	}
	function ua(e, t, n, i, a) {
		var o = t.replay, s = t.blockedBoundary, c = Xi(e, 0, null, t.formatContext, !1, !1);
		c.id = n, c.parentFlushed = !0;
		try {
			t.replay = null, t.blockedSegment = c, ya(e, t, i, a), c.status = 1, Da(e, s, c), s === null ? e.completedRootSegment = c : (Ea(s, c), s.parentFlushed && e.partialBoundaries.push(s));
		} finally {
			t.replay = o, t.blockedSegment = null;
		}
	}
	function da(e, t, n, i) {
		t.replay !== null && typeof t.replay.slots == "number" ? ua(e, t, t.replay.slots, n, i) : (t.node = n, t.childIndex = i, n = t.componentStack, Zi(t), fa(e, t), t.componentStack = n);
	}
	function fa(e, t) {
		var n = t.node, s = t.childIndex;
		if (n !== null) {
			if (typeof n == "object") {
				switch (n.$$typeof) {
					case a:
						var c = n.type, l = n.key, u = n.props;
						n = u.ref;
						var f = n === void 0 ? null : n, p = Ar(c), h = l ?? (s === -1 ? 0 : s);
						if (l = [
							t.keyPath,
							p,
							h
						], t.replay !== null) a: {
							var g = t.replay;
							for (s = g.nodes, n = 0; n < s.length; n++) {
								var _ = s[n];
								if (h === _[1]) {
									if (_.length === 4) {
										if (p !== null && p !== _[0]) throw Error(i(490, _[0], p));
										var y = _[2];
										p = _[3], h = t.node, t.replay = {
											nodes: y,
											slots: p,
											pendingTasks: 1
										};
										try {
											if (la(e, t, l, c, u, f), t.replay.pendingTasks === 1 && 0 < t.replay.nodes.length) throw Error(i(488));
											t.replay.pendingTasks--;
										} catch (i) {
											if (typeof i == "object" && i && (i === qr || typeof i.then == "function")) throw t.node === h ? t.replay = g : s.splice(n, 1), i;
											t.replay.pendingTasks--, u = $i(t.componentStack), l = e, e = t.blockedBoundary, c = i, u = ea(l, c, u), xa(l, e, y, p, c, u);
										}
										t.replay = g;
									} else {
										if (c !== m) throw Error(i(490, "Suspense", Ar(c) || "Unknown"));
										b: {
											g = void 0, c = _[5], f = _[2], p = _[3], h = _[4] === null ? [] : _[4][2], _ = _[4] === null ? null : _[4][3];
											var b = t.keyPath, x = t.formatContext, S = t.row, C = t.replay, w = t.blockedBoundary, D = t.hoistableState, O = u.children, k = u.fallback, A = /* @__PURE__ */ new Set();
											u = 2 > t.formatContext.insertionMode ? qi(e, t.row, A, je(), je()) : qi(e, t.row, A, null, null), u.parentFlushed = !0, u.rootSegmentID = c, t.blockedBoundary = u, t.hoistableState = u.contentState, t.keyPath = l, t.formatContext = Le(e.resumableState, x), t.row = null, t.replay = {
												nodes: f,
												slots: p,
												pendingTasks: 1
											};
											try {
												if (ya(e, t, O, -1), t.replay.pendingTasks === 1 && 0 < t.replay.nodes.length) throw Error(i(488));
												if (t.replay.pendingTasks--, u.pendingTasks === 0 && u.status === 0) {
													u.status = 1, e.completedBoundaries.push(u);
													break b;
												}
											} catch (n) {
												u.status = 4, y = $i(t.componentStack), g = ea(e, n, y), u.errorDigest = g, t.replay.pendingTasks--, e.clientRenderedBoundaries.push(u);
											} finally {
												t.blockedBoundary = w, t.hoistableState = D, t.replay = C, t.keyPath = b, t.formatContext = x, t.row = S;
											}
											y = Yi(e, null, {
												nodes: h,
												slots: _,
												pendingTasks: 0
											}, k, -1, w, u.fallbackState, A, [
												l[0],
												"Suspense Fallback",
												l[2]
											], Ie(e.resumableState, t.formatContext), t.context, t.treeContext, t.row, Qi(t.componentStack)), Zi(y), e.pingedTasks.push(y);
										}
									}
									s.splice(n, 1);
									break a;
								}
							}
						}
						else la(e, t, l, c, u, f);
						return;
					case o: throw Error(i(257));
					case v:
						if (y = n._init, n = y(n._payload), e.status === 12) throw null;
						da(e, t, n, s);
						return;
				}
				if (E(n)) {
					pa(e, t, n, s);
					return;
				}
				if ((y = T(n)) && (y = y.call(n))) {
					if (n = y.next(), !n.done) {
						u = [];
						do
							u.push(n.value), n = y.next();
						while (!n.done);
						pa(e, t, u, s);
					}
					return;
				}
				if (typeof n.then == "function") return t.thenableState = null, da(e, t, Di(n), s);
				if (n.$$typeof === d) return da(e, t, n._currentValue, s);
				throw s = Object.prototype.toString.call(n), Error(i(31, s === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : s));
			}
			typeof n == "string" ? (s = t.blockedSegment, s !== null && (s.lastPushedText = ze(s.chunks, n, e.renderState, s.lastPushedText))) : (typeof n == "number" || typeof n == "bigint") && (s = t.blockedSegment, s !== null && (s.lastPushedText = ze(s.chunks, "" + n, e.renderState, s.lastPushedText)));
		}
	}
	function pa(e, t, n, a) {
		var o = t.keyPath;
		if (a !== -1 && (t.keyPath = [
			t.keyPath,
			"Fragment",
			a
		], t.replay !== null)) {
			for (var s = t.replay, c = s.nodes, l = 0; l < c.length; l++) {
				var u = c[l];
				if (u[1] === a) {
					a = u[2], u = u[3], t.replay = {
						nodes: a,
						slots: u,
						pendingTasks: 1
					};
					try {
						if (pa(e, t, n, -1), t.replay.pendingTasks === 1 && 0 < t.replay.nodes.length) throw Error(i(488));
						t.replay.pendingTasks--;
					} catch (i) {
						if (typeof i == "object" && i && (i === qr || typeof i.then == "function")) throw i;
						t.replay.pendingTasks--, n = $i(t.componentStack);
						var d = t.blockedBoundary, f = i;
						n = ea(e, f, n), xa(e, d, a, u, f, n);
					}
					t.replay = s, c.splice(l, 1);
					break;
				}
			}
			t.keyPath = o;
			return;
		}
		if (s = t.treeContext, c = n.length, t.replay !== null && (l = t.replay.slots, typeof l == "object" && l)) {
			for (a = 0; a < c; a++) u = n[a], t.treeContext = Vr(s, c, a), d = l[a], typeof d == "number" ? (ua(e, t, d, u, a), delete l[a]) : ya(e, t, u, a);
			t.treeContext = s, t.keyPath = o;
			return;
		}
		for (l = 0; l < c; l++) a = n[l], t.treeContext = Vr(s, c, l), ya(e, t, a, l);
		t.treeContext = s, t.keyPath = o;
	}
	function ma(e, t, n) {
		if (n.status = 5, n.rootSegmentID = e.nextSegmentId++, e = n.trackedContentKeyPath, e === null) throw Error(i(486));
		var a = n.trackedFallbackNode, o = [], s = t.workingMap.get(e);
		return s === void 0 ? (n = [
			e[1],
			e[2],
			o,
			null,
			a,
			n.rootSegmentID
		], t.workingMap.set(e, n), Ga(n, e[0], t), n) : (s[4] = a, s[5] = n.rootSegmentID, s);
	}
	function ha(e, t, n, a) {
		a.status = 5;
		var o = n.keyPath, s = n.blockedBoundary;
		if (s === null) a.id = e.nextSegmentId++, t.rootSlots = a.id, e.completedRootSegment !== null && (e.completedRootSegment.status = 5);
		else {
			if (s !== null && s.status === 0) {
				var c = ma(e, t, s);
				if (s.trackedContentKeyPath === o && n.childIndex === -1) {
					a.id === -1 && (a.id = a.parentFlushed ? s.rootSegmentID : e.nextSegmentId++), c[3] = a.id;
					return;
				}
			}
			if (a.id === -1 && (a.id = a.parentFlushed && s !== null ? s.rootSegmentID : e.nextSegmentId++), n.childIndex === -1) o === null ? t.rootSlots = a.id : (n = t.workingMap.get(o), n === void 0 ? (n = [
				o[1],
				o[2],
				[],
				a.id
			], Ga(n, o[0], t)) : n[3] = a.id);
			else {
				if (o === null) {
					if (e = t.rootSlots, e === null) e = t.rootSlots = {};
					else if (typeof e == "number") throw Error(i(491));
				} else if (s = t.workingMap, c = s.get(o), c === void 0) e = {}, c = [
					o[1],
					o[2],
					[],
					e
				], s.set(o, c), Ga(c, o[0], t);
				else if (e = c[3], e === null) e = c[3] = {};
				else if (typeof e == "number") throw Error(i(491));
				e[n.childIndex] = a.id;
			}
		}
	}
	function ga(e, t) {
		e = e.trackedPostpones, e !== null && (t = t.trackedContentKeyPath, t !== null && (t = e.workingMap.get(t), t !== void 0 && (t.length = 4, t[2] = [], t[3] = null)));
	}
	function _a(e, t, n) {
		return Yi(e, n, t.replay, t.node, t.childIndex, t.blockedBoundary, t.hoistableState, t.abortSet, t.keyPath, t.formatContext, t.context, t.treeContext, t.row, t.componentStack);
	}
	function va(e, t, n) {
		var i = t.blockedSegment, a = Xi(e, i.chunks.length, null, t.formatContext, i.lastPushedText, !0);
		return i.children.push(a), i.lastPushedText = !1, Ji(e, n, t.node, t.childIndex, t.blockedBoundary, a, t.blockedPreamble, t.hoistableState, t.abortSet, t.keyPath, t.formatContext, t.context, t.treeContext, t.row, t.componentStack);
	}
	function ya(e, t, n, i) {
		var a = t.formatContext, o = t.context, s = t.keyPath, c = t.treeContext, l = t.componentStack, u = t.blockedSegment;
		if (u === null) {
			u = t.replay;
			try {
				return da(e, t, n, i);
			} catch (d) {
				if (vi(), n = d === qr ? Xr() : d, e.status !== 12 && typeof n == "object" && n) {
					if (typeof n.then == "function") {
						i = d === qr ? _i() : null, e = _a(e, t, i).ping, n.then(e, e), t.formatContext = a, t.context = o, t.keyPath = s, t.treeContext = c, t.componentStack = l, t.replay = u, Rr(o);
						return;
					}
					if (n.message === "Maximum call stack size exceeded") {
						n = d === qr ? _i() : null, n = _a(e, t, n), e.pingedTasks.push(n), t.formatContext = a, t.context = o, t.keyPath = s, t.treeContext = c, t.componentStack = l, t.replay = u, Rr(o);
						return;
					}
				}
			}
		} else {
			var d = u.children.length, f = u.chunks.length;
			try {
				return da(e, t, n, i);
			} catch (i) {
				if (vi(), u.children.length = d, u.chunks.length = f, n = i === qr ? Xr() : i, e.status !== 12 && typeof n == "object" && n) {
					if (typeof n.then == "function") {
						u = n, n = i === qr ? _i() : null, e = va(e, t, n).ping, u.then(e, e), t.formatContext = a, t.context = o, t.keyPath = s, t.treeContext = c, t.componentStack = l, Rr(o);
						return;
					}
					if (n.message === "Maximum call stack size exceeded") {
						u = i === qr ? _i() : null, u = va(e, t, u), e.pingedTasks.push(u), t.formatContext = a, t.context = o, t.keyPath = s, t.treeContext = c, t.componentStack = l, Rr(o);
						return;
					}
				}
			}
		}
		throw t.formatContext = a, t.context = o, t.keyPath = s, t.treeContext = c, Rr(o), n;
	}
	function ba(e) {
		var t = e.blockedBoundary, n = e.blockedSegment;
		n !== null && (n.status = 3, Oa(this, t, e.row, n));
	}
	function xa(e, t, n, a, o, s) {
		for (var c = 0; c < n.length; c++) {
			var l = n[c];
			if (l.length === 4) xa(e, t, l[2], l[3], o, s);
			else {
				l = l[5];
				var u = e, d = s, f = qi(u, null, /* @__PURE__ */ new Set(), null, null);
				f.parentFlushed = !0, f.rootSegmentID = l, f.status = 4, f.errorDigest = d, f.parentFlushed && u.clientRenderedBoundaries.push(f);
			}
		}
		if (n.length = 0, a !== null) {
			if (t === null) throw Error(i(487));
			if (t.status !== 4 && (t.status = 4, t.errorDigest = s, t.parentFlushed && e.clientRenderedBoundaries.push(t)), typeof a == "object") for (var p in a) delete a[p];
		}
	}
	function Sa(e, t, n) {
		var i = e.blockedBoundary, a = e.blockedSegment;
		if (a !== null) {
			if (a.status === 6) return;
			a.status = 3;
		}
		var o = $i(e.componentStack);
		if (i === null) {
			if (t.status !== 13 && t.status !== 14) {
				if (i = e.replay, i === null) {
					t.trackedPostpones !== null && a !== null ? (i = t.trackedPostpones, ea(t, n, o), ha(t, i, e, a), Oa(t, null, e.row, a)) : (ea(t, n, o), ta(t, n));
					return;
				}
				i.pendingTasks--, i.pendingTasks === 0 && 0 < i.nodes.length && (a = ea(t, n, o), xa(t, null, i.nodes, i.slots, n, a)), t.pendingRootTasks--, t.pendingRootTasks === 0 && wa(t);
			}
		} else {
			var s = t.trackedPostpones;
			if (i.status !== 4) {
				if (s !== null && a !== null) return ea(t, n, o), ha(t, s, e, a), i.fallbackAbortableTasks.forEach(function(e) {
					return Sa(e, t, n);
				}), i.fallbackAbortableTasks.clear(), Oa(t, i, e.row, a);
				i.status = 4, a = ea(t, n, o), i.status = 4, i.errorDigest = a, ga(t, i), i.parentFlushed && t.clientRenderedBoundaries.push(i);
			}
			i.pendingTasks--, a = i.row, a !== null && --a.pendingTasks === 0 && na(t, a), i.fallbackAbortableTasks.forEach(function(e) {
				return Sa(e, t, n);
			}), i.fallbackAbortableTasks.clear();
		}
		e = e.row, e !== null && --e.pendingTasks === 0 && na(t, e), t.allPendingTasks--, t.allPendingTasks === 0 && Ta(t);
	}
	function Ca(e, t) {
		try {
			var n = e.renderState, i = n.onHeaders;
			if (i) {
				var a = n.headers;
				if (a) {
					n.headers = null;
					var o = a.preconnects;
					if (a.fontPreloads && (o && (o += ", "), o += a.fontPreloads), a.highImagePreloads && (o && (o += ", "), o += a.highImagePreloads), !t) {
						var s = n.styles.values(), c = s.next();
						b: for (; 0 < a.remainingCapacity && !c.done; c = s.next()) for (var l = c.value.sheets.values(), u = l.next(); 0 < a.remainingCapacity && !u.done; u = l.next()) {
							var d = u.value, f = d.props, p = f.href, m = d.props, h = yr(m.href, "style", {
								crossOrigin: m.crossOrigin,
								integrity: m.integrity,
								nonce: m.nonce,
								type: m.type,
								fetchPriority: m.fetchPriority,
								referrerPolicy: m.referrerPolicy,
								media: m.media
							});
							if (0 <= (a.remainingCapacity -= h.length + 2)) n.resets.style[p] = he, o && (o += ", "), o += h, n.resets.style[p] = typeof f.crossOrigin == "string" || typeof f.integrity == "string" ? [f.crossOrigin, f.integrity] : he;
							else break b;
						}
					}
					i(o ? { Link: o } : {});
				}
			}
		} catch (t) {
			ea(e, t, {});
		}
	}
	function wa(e) {
		e.trackedPostpones === null && Ca(e, !0), e.trackedPostpones === null && Ma(e), e.onShellError = Kr, e = e.onShellReady, e();
	}
	function Ta(e) {
		Ca(e, e.trackedPostpones === null ? !0 : e.completedRootSegment === null || e.completedRootSegment.status !== 5), Ma(e), e = e.onAllReady, e();
	}
	function Ea(e, t) {
		if (t.chunks.length === 0 && t.children.length === 1 && t.children[0].boundary === null && t.children[0].id === -1) {
			var n = t.children[0];
			n.id = t.id, n.parentFlushed = !0, n.status !== 1 && n.status !== 3 && n.status !== 4 || Ea(e, n);
		} else e.completedSegments.push(t);
	}
	function Da(e, t, n) {
		if (V !== null) {
			n = n.chunks;
			for (var i = 0, a = 0; a < n.length; a++) i += n[a].byteLength;
			t === null ? e.byteSize += i : t.byteSize += i;
		}
	}
	function Oa(e, t, n, a) {
		if (n !== null && (--n.pendingTasks === 0 ? na(e, n) : n.together && ia(e, n)), e.allPendingTasks--, t === null) {
			if (a !== null && a.parentFlushed) {
				if (e.completedRootSegment !== null) throw Error(i(389));
				e.completedRootSegment = a;
			}
			e.pendingRootTasks--, e.pendingRootTasks === 0 && wa(e);
		} else if (t.pendingTasks--, t.status !== 4) if (t.pendingTasks === 0) {
			if (t.status === 0 && (t.status = 1), a !== null && a.parentFlushed && (a.status === 1 || a.status === 3) && Ea(t, a), t.parentFlushed && e.completedBoundaries.push(t), t.status === 1) n = t.row, n !== null && Er(n.hoistables, t.contentState), Ri(e, t) || (t.fallbackAbortableTasks.forEach(ba, e), t.fallbackAbortableTasks.clear(), n !== null && --n.pendingTasks === 0 && na(e, n)), e.pendingRootTasks === 0 && e.trackedPostpones === null && t.contentPreamble !== null && Ma(e);
			else if (t.status === 5 && (t = t.row, t !== null)) {
				if (e.trackedPostpones !== null) {
					n = e.trackedPostpones;
					var o = t.next;
					if (o !== null && (a = o.boundaries, a !== null)) for (o.boundaries = null, o = 0; o < a.length; o++) {
						var s = a[o];
						ma(e, n, s), Oa(e, s, null, null);
					}
				}
				--t.pendingTasks === 0 && na(e, t);
			}
		} else a === null || !a.parentFlushed || a.status !== 1 && a.status !== 3 || (Ea(t, a), t.completedSegments.length === 1 && t.parentFlushed && e.partialBoundaries.push(t)), t = t.row, t !== null && t.together && ia(e, t);
		e.allPendingTasks === 0 && Ta(e);
	}
	function ka(e) {
		if (e.status !== 14 && e.status !== 13) {
			var t = Mr, n = de.H;
			de.H = ki;
			var a = de.A;
			de.A = ji;
			var o = Gi;
			Gi = e;
			var s = Ai;
			Ai = e.resumableState;
			try {
				var c = e.pingedTasks, l;
				for (l = 0; l < c.length; l++) {
					var u = c[l], d = e, f = u.blockedSegment;
					if (f === null) {
						var p = d;
						if (u.replay.pendingTasks !== 0) {
							Rr(u.context);
							try {
								if (typeof u.replay.slots == "number" ? ua(p, u, u.replay.slots, u.node, u.childIndex) : fa(p, u), u.replay.pendingTasks === 1 && 0 < u.replay.nodes.length) throw Error(i(488));
								u.replay.pendingTasks--, u.abortSet.delete(u), Oa(p, u.blockedBoundary, u.row, null);
							} catch (e) {
								vi();
								var m = e === qr ? Xr() : e;
								if (typeof m == "object" && m && typeof m.then == "function") {
									var h = u.ping;
									m.then(h, h), u.thenableState = e === qr ? _i() : null;
								} else {
									u.replay.pendingTasks--, u.abortSet.delete(u);
									var g = $i(u.componentStack);
									d = void 0;
									var _ = p, v = u.blockedBoundary, y = p.status === 12 ? p.fatalError : m, b = u.replay.nodes, x = u.replay.slots;
									d = ea(_, y, g), xa(_, v, b, x, y, d), p.pendingRootTasks--, p.pendingRootTasks === 0 && wa(p), p.allPendingTasks--, p.allPendingTasks === 0 && Ta(p);
								}
							}
						}
					} else if (p = void 0, _ = f, _.status === 0) {
						_.status = 6, Rr(u.context);
						var S = _.children.length, C = _.chunks.length;
						try {
							fa(d, u), _.lastPushedText && _.textEmbedded && _.chunks.push(Re), u.abortSet.delete(u), _.status = 1, Da(d, u.blockedBoundary, _), Oa(d, u.blockedBoundary, u.row, _);
						} catch (e) {
							vi(), _.children.length = S, _.chunks.length = C;
							var w = e === qr ? Xr() : d.status === 12 ? d.fatalError : e;
							if (d.status === 12 && d.trackedPostpones !== null) {
								var T = d.trackedPostpones, E = $i(u.componentStack);
								u.abortSet.delete(u), ea(d, w, E), ha(d, T, u, _), Oa(d, u.blockedBoundary, u.row, _);
							} else if (typeof w == "object" && w && typeof w.then == "function") {
								_.status = 0, u.thenableState = e === qr ? _i() : null;
								var D = u.ping;
								w.then(D, D);
							} else {
								var O = $i(u.componentStack);
								u.abortSet.delete(u), _.status = 4;
								var k = u.blockedBoundary, A = u.row;
								if (A !== null && --A.pendingTasks === 0 && na(d, A), d.allPendingTasks--, p = ea(d, w, O), k === null) ta(d, w);
								else if (k.pendingTasks--, k.status !== 4) {
									k.status = 4, k.errorDigest = p, ga(d, k);
									var j = k.row;
									j !== null && --j.pendingTasks === 0 && na(d, j), k.parentFlushed && d.clientRenderedBoundaries.push(k), d.pendingRootTasks === 0 && d.trackedPostpones === null && k.contentPreamble !== null && Ma(d);
								}
								d.allPendingTasks === 0 && Ta(d);
							}
						}
					}
				}
				c.splice(0, l), e.destination !== null && Ba(e, e.destination);
			} catch (t) {
				ea(e, t, {}), ta(e, t);
			} finally {
				Ai = s, de.H = n, de.A = a, n === ki && Rr(t), Gi = o;
			}
		}
	}
	function Aa(e, t, n) {
		t.preambleChildren.length && n.push(t.preambleChildren);
		for (var i = !1, a = 0; a < t.children.length; a++) i = ja(e, t.children[a], n) || i;
		return i;
	}
	function ja(e, t, n) {
		var a = t.boundary;
		if (a === null) return Aa(e, t, n);
		var o = a.contentPreamble, s = a.fallbackPreamble;
		if (o === null || s === null) return !1;
		switch (a.status) {
			case 1:
				if (kt(e.renderState, o), e.byteSize += a.byteSize, t = a.completedSegments[0], !t) throw Error(i(391));
				return Aa(e, t, n);
			case 5: if (e.trackedPostpones !== null) return !0;
			case 4: if (t.status === 1) return kt(e.renderState, s), Aa(e, t, n);
			default: return !0;
		}
	}
	function Ma(e) {
		if (e.completedRootSegment && e.completedPreambleSegments === null) {
			var t = [], n = e.byteSize, i = ja(e, e.completedRootSegment, t), a = e.renderState.preamble;
			!1 === i || a.headChunks && a.bodyChunks ? e.completedPreambleSegments = t : e.byteSize = n;
		}
	}
	function Na(e, t, n, a) {
		switch (n.parentFlushed = !0, n.status) {
			case 0: n.id = e.nextSegmentId++;
			case 5: return a = n.id, n.lastPushedText = !1, n.textEmbedded = !1, e = e.renderState, I(t, Mt), I(t, e.placeholderPrefix), e = z(a.toString(16)), I(t, e), L(t, Nt);
			case 1:
				n.status = 2;
				var o = !0, s = n.chunks, c = 0;
				n = n.children;
				for (var l = 0; l < n.length; l++) {
					for (o = n[l]; c < o.index; c++) I(t, s[c]);
					o = Fa(e, t, o, a);
				}
				for (; c < s.length - 1; c++) I(t, s[c]);
				return c < s.length && (o = L(t, s[c])), o;
			case 3: return !0;
			default: throw Error(i(390));
		}
	}
	var Pa = 0;
	function Fa(e, t, n, a) {
		var o = n.boundary;
		if (o === null) return Na(e, t, n, a);
		if (o.parentFlushed = !0, o.status === 4) {
			var s = o.row;
			s !== null && --s.pendingTasks === 0 && na(e, s), o = o.errorDigest, L(t, zt), I(t, Vt), o && (I(t, Ut), I(t, z(G(o))), I(t, Ht)), L(t, Wt), Na(e, t, n, a);
		} else if (o.status !== 1) o.status === 0 && (o.rootSegmentID = e.nextSegmentId++), 0 < o.completedSegments.length && e.partialBoundaries.push(o), Gt(t, e.renderState, o.rootSegmentID), a && Er(a, o.fallbackState), Na(e, t, n, a);
		else if (!za && Ri(e, o) && (Pa + o.byteSize > e.progressiveChunkSize || Dr(o.contentState))) o.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(o), Gt(t, e.renderState, o.rootSegmentID), Na(e, t, n, a);
		else {
			if (Pa += o.byteSize, a && Er(a, o.contentState), n = o.row, n !== null && Ri(e, o) && --n.pendingTasks === 0 && na(e, n), L(t, It), n = o.completedSegments, n.length !== 1) throw Error(i(391));
			Fa(e, t, n[0], a);
		}
		return L(t, Bt);
	}
	function Ia(e, t, n, i) {
		return fn(t, e.renderState, n.parentFormatContext, n.id), Fa(e, t, n, i), pn(t, n.parentFormatContext);
	}
	function La(e, t, n) {
		Pa = n.byteSize;
		for (var i = n.completedSegments, a = 0; a < i.length; a++) Ra(e, t, n, i[a]);
		i.length = 0, i = n.row, i !== null && Ri(e, n) && --i.pendingTasks === 0 && na(e, i), Wn(t, n.contentState, e.renderState), i = e.resumableState, e = e.renderState, a = n.rootSegmentID, n = n.contentState;
		var o = e.stylesToHoist;
		return e.stylesToHoist = !1, I(t, e.startInlineScript), I(t, tt), o ? (!(i.instructions & 4) && (i.instructions |= 4, I(t, En)), !(i.instructions & 2) && (i.instructions |= 2, I(t, vn)), i.instructions & 8 ? I(t, xn) : (i.instructions |= 8, I(t, bn))) : (!(i.instructions & 2) && (i.instructions |= 2, I(t, vn)), I(t, yn)), i = z(a.toString(16)), I(t, e.boundaryPrefix), I(t, i), I(t, Sn), I(t, e.segmentPrefix), I(t, i), o ? (I(t, Cn), cr(t, n)) : I(t, wn), n = L(t, Tn), At(t, e) && n;
	}
	function Ra(e, t, n, a) {
		if (a.status === 2) return !0;
		var o = n.contentState, s = a.id;
		if (s === -1) {
			if ((a.id = n.rootSegmentID) === -1) throw Error(i(392));
			return Ia(e, t, a, o);
		}
		return s === n.rootSegmentID ? Ia(e, t, a, o) : (Ia(e, t, a, o), n = e.resumableState, e = e.renderState, I(t, e.startInlineScript), I(t, tt), n.instructions & 1 ? I(t, hn) : (n.instructions |= 1, I(t, mn)), I(t, e.segmentPrefix), s = z(s.toString(16)), I(t, s), I(t, gn), I(t, e.placeholderPrefix), I(t, s), t = L(t, _n), t);
	}
	var za = !1;
	function Ba(e, t) {
		P = new Uint8Array(2048), F = 0;
		try {
			if (!(0 < e.pendingRootTasks)) {
				var n, i = e.completedRootSegment;
				if (i !== null) {
					if (i.status === 5) return;
					var a = e.completedPreambleSegments;
					if (a === null) return;
					Pa = e.byteSize;
					var o = e.resumableState, s = e.renderState, c = s.preamble, l = c.htmlChunks, u = c.headChunks, d;
					if (l) {
						for (d = 0; d < l.length; d++) I(t, l[d]);
						if (u) for (d = 0; d < u.length; d++) I(t, u[d]);
						else I(t, wt("head")), I(t, tt);
					} else if (u) for (d = 0; d < u.length; d++) I(t, u[d]);
					var f = s.charsetChunks;
					for (d = 0; d < f.length; d++) I(t, f[d]);
					f.length = 0, s.preconnects.forEach(Gn, t), s.preconnects.clear();
					var p = s.viewportChunks;
					for (d = 0; d < p.length; d++) I(t, p[d]);
					p.length = 0, s.fontPreloads.forEach(Gn, t), s.fontPreloads.clear(), s.highImagePreloads.forEach(Gn, t), s.highImagePreloads.clear(), ge = s, s.styles.forEach($n, t), ge = null;
					var m = s.importMapChunks;
					for (d = 0; d < m.length; d++) I(t, m[d]);
					m.length = 0, s.bootstrapScripts.forEach(Gn, t), s.scripts.forEach(Gn, t), s.scripts.clear(), s.bulkPreloads.forEach(Gn, t), s.bulkPreloads.clear(), l || u || (o.instructions |= 32);
					var h = s.hoistableChunks;
					for (d = 0; d < h.length; d++) I(t, h[d]);
					for (o = h.length = 0; o < a.length; o++) {
						var g = a[o];
						for (s = 0; s < g.length; s++) Fa(e, t, g[s], null);
					}
					var _ = e.renderState.preamble, v = _.headChunks;
					(_.htmlChunks || v) && I(t, Ot("head"));
					var y = _.bodyChunks;
					if (y) for (a = 0; a < y.length; a++) I(t, y[a]);
					Fa(e, t, i, null), e.completedRootSegment = null;
					var b = e.renderState;
					if (e.allPendingTasks !== 0 || e.clientRenderedBoundaries.length !== 0 || e.completedBoundaries.length !== 0 || e.trackedPostpones !== null && (e.trackedPostpones.rootNodes.length !== 0 || e.trackedPostpones.rootSlots !== null)) {
						var x = e.resumableState;
						if (!(x.instructions & 64)) {
							if (x.instructions |= 64, I(t, b.startInlineScript), !(x.instructions & 32)) {
								x.instructions |= 32;
								var S = "_" + x.idPrefix + "R_";
								I(t, nr), I(t, z(G(S))), I(t, J);
							}
							I(t, tt), I(t, jt), L(t, ve);
						}
					}
					At(t, b);
				}
				var C = e.renderState;
				i = 0;
				var w = C.viewportChunks;
				for (i = 0; i < w.length; i++) I(t, w[i]);
				w.length = 0, C.preconnects.forEach(Gn, t), C.preconnects.clear(), C.fontPreloads.forEach(Gn, t), C.fontPreloads.clear(), C.highImagePreloads.forEach(Gn, t), C.highImagePreloads.clear(), C.styles.forEach(tr, t), C.scripts.forEach(Gn, t), C.scripts.clear(), C.bulkPreloads.forEach(Gn, t), C.bulkPreloads.clear();
				var T = C.hoistableChunks;
				for (i = 0; i < T.length; i++) I(t, T[i]);
				T.length = 0;
				var E = e.clientRenderedBoundaries;
				for (n = 0; n < E.length; n++) {
					var D = E[n];
					C = t;
					var O = e.resumableState, k = e.renderState, A = D.rootSegmentID, j = D.errorDigest;
					I(C, k.startInlineScript), I(C, tt), O.instructions & 4 ? I(C, On) : (O.instructions |= 4, I(C, Dn)), I(C, k.boundaryPrefix), I(C, z(A.toString(16))), I(C, kn), j && (I(C, An), I(C, z(Nn(j || ""))));
					var M = L(C, jn);
					if (!M) {
						e.destination = null, n++, E.splice(0, n);
						return;
					}
				}
				E.splice(0, n);
				var N = e.completedBoundaries;
				for (n = 0; n < N.length; n++) if (!La(e, t, N[n])) {
					e.destination = null, n++, N.splice(0, n);
					return;
				}
				N.splice(0, n), R(t), P = new Uint8Array(2048), F = 0, za = !0;
				var ee = e.partialBoundaries;
				for (n = 0; n < ee.length; n++) {
					var B = ee[n];
					a: {
						E = e, D = t, Pa = B.byteSize;
						var V = B.completedSegments;
						for (M = 0; M < V.length; M++) if (!Ra(E, D, B, V[M])) {
							M++, V.splice(0, M);
							var te = !1;
							break a;
						}
						V.splice(0, M);
						var H = B.row;
						H !== null && H.together && B.pendingTasks === 1 && (H.pendingTasks === 1 ? ra(E, H, H.hoistables) : H.pendingTasks--), te = Wn(D, B.contentState, E.renderState);
					}
					if (!te) {
						e.destination = null, n++, ee.splice(0, n);
						return;
					}
				}
				ee.splice(0, n), za = !1;
				var U = e.completedBoundaries;
				for (n = 0; n < U.length; n++) if (!La(e, t, U[n])) {
					e.destination = null, n++, U.splice(0, n);
					return;
				}
				U.splice(0, n);
			}
		} finally {
			za = !1, e.allPendingTasks === 0 && e.clientRenderedBoundaries.length === 0 && e.completedBoundaries.length === 0 ? (e.flushScheduled = !1, n = e.resumableState, n.hasBody && I(t, Ot("body")), n.hasHtml && I(t, Ot("html")), R(t), e.status = 14, t.close(), e.destination = null) : R(t);
		}
	}
	function Va(e) {
		e.flushScheduled = e.destination !== null, N(function() {
			return ka(e);
		}), A(function() {
			e.status === 10 && (e.status = 11), e.trackedPostpones === null && Ca(e, e.pendingRootTasks === 0);
		});
	}
	function Ha(e) {
		!1 === e.flushScheduled && e.pingedTasks.length === 0 && e.destination !== null && (e.flushScheduled = !0, A(function() {
			var t = e.destination;
			t ? Ba(e, t) : e.flushScheduled = !1;
		}));
	}
	function Ua(e, t) {
		if (e.status === 13) e.status = 14, te(t, e.fatalError);
		else if (e.status !== 14 && e.destination === null) {
			e.destination = t;
			try {
				Ba(e, t);
			} catch (t) {
				ea(e, t, {}), ta(e, t);
			}
		}
	}
	function Wa(e, t) {
		(e.status === 11 || e.status === 10) && (e.status = 12);
		try {
			var n = e.abortableTasks;
			if (0 < n.size) {
				var a = t === void 0 ? Error(i(432)) : typeof t == "object" && t && typeof t.then == "function" ? Error(i(530)) : t;
				e.fatalError = a, n.forEach(function(t) {
					return Sa(t, e, a);
				}), n.clear();
			}
			e.destination !== null && Ba(e, e.destination);
		} catch (t) {
			ea(e, t, {}), ta(e, t);
		}
	}
	function Ga(e, t, n) {
		if (t === null) n.rootNodes.push(e);
		else {
			var i = n.workingMap, a = i.get(t);
			a === void 0 && (a = [
				t[1],
				t[2],
				[],
				null
			], i.set(t, a), Ga(a, t[0], n)), a[2].push(e);
		}
	}
	function Ka(e) {
		var t = e.trackedPostpones;
		if (t === null || t.rootNodes.length === 0 && t.rootSlots === null) return e.trackedPostpones = null;
		if (e.completedRootSegment === null || e.completedRootSegment.status !== 5 && e.completedPreambleSegments !== null) {
			var n = e.nextSegmentId, i = t.rootSlots, a = e.resumableState;
			a.bootstrapScriptContent = void 0, a.bootstrapScripts = void 0, a.bootstrapModules = void 0;
		} else {
			n = 0, i = -1, a = e.resumableState;
			var o = e.renderState;
			a.nextFormID = 0, a.hasBody = !1, a.hasHtml = !1, a.unknownResources = { font: o.resets.font }, a.dnsResources = o.resets.dns, a.connectResources = o.resets.connect, a.imageResources = o.resets.image, a.styleResources = o.resets.style, a.scriptResources = {}, a.moduleUnknownResources = {}, a.moduleScriptResources = {}, a.instructions = 0;
		}
		return {
			nextSegmentId: n,
			rootFormatContext: e.rootFormatContext,
			progressiveChunkSize: e.progressiveChunkSize,
			resumableState: e.resumableState,
			replayNodes: t.rootNodes,
			replaySlots: i
		};
	}
	function qa() {
		var e = t.version;
		if (e !== "19.2.0") throw Error(i(527, e, "19.2.0"));
	}
	qa(), qa(), e.prerender = function(e, t) {
		return new Promise(function(n, i) {
			var a = t ? t.onHeaders : void 0, o;
			a && (o = function(e) {
				a(new Headers(e));
			});
			var s = Ae(t ? t.identifierPrefix : void 0, t ? t.unstable_externalRuntimeSrc : void 0, t ? t.bootstrapScriptContent : void 0, t ? t.bootstrapScripts : void 0, t ? t.bootstrapModules : void 0), c = Hi(e, s, ke(s, void 0, t ? t.unstable_externalRuntimeSrc : void 0, t ? t.importMap : void 0, o, t ? t.maxHeadersLength : void 0), Ne(t ? t.namespaceURI : void 0), t ? t.progressiveChunkSize : void 0, t ? t.onError : void 0, function() {
				var e = new ReadableStream({
					type: "bytes",
					pull: function(e) {
						Ua(c, e);
					},
					cancel: function(e) {
						c.destination = null, Wa(c, e);
					}
				}, { highWaterMark: 0 });
				e = {
					postponed: Ka(c),
					prelude: e
				}, n(e);
			}, void 0, void 0, i, t ? t.onPostpone : void 0);
			if (t && t.signal) {
				var l = t.signal;
				if (l.aborted) Wa(c, l.reason);
				else {
					var u = function() {
						Wa(c, l.reason), l.removeEventListener("abort", u);
					};
					l.addEventListener("abort", u);
				}
			}
			Va(c);
		});
	}, e.renderToReadableStream = function(e, t) {
		return new Promise(function(n, i) {
			var a, o, s = new Promise(function(e, t) {
				o = e, a = t;
			}), c = t ? t.onHeaders : void 0, l;
			c && (l = function(e) {
				c(new Headers(e));
			});
			var u = Ae(t ? t.identifierPrefix : void 0, t ? t.unstable_externalRuntimeSrc : void 0, t ? t.bootstrapScriptContent : void 0, t ? t.bootstrapScripts : void 0, t ? t.bootstrapModules : void 0), d = Vi(e, u, ke(u, t ? t.nonce : void 0, t ? t.unstable_externalRuntimeSrc : void 0, t ? t.importMap : void 0, l, t ? t.maxHeadersLength : void 0), Ne(t ? t.namespaceURI : void 0), t ? t.progressiveChunkSize : void 0, t ? t.onError : void 0, o, function() {
				var e = new ReadableStream({
					type: "bytes",
					pull: function(e) {
						Ua(d, e);
					},
					cancel: function(e) {
						d.destination = null, Wa(d, e);
					}
				}, { highWaterMark: 0 });
				e.allReady = s, n(e);
			}, function(e) {
				s.catch(function() {}), i(e);
			}, a, t ? t.onPostpone : void 0, t ? t.formState : void 0);
			if (t && t.signal) {
				var f = t.signal;
				if (f.aborted) Wa(d, f.reason);
				else {
					var p = function() {
						Wa(d, f.reason), f.removeEventListener("abort", p);
					};
					f.addEventListener("abort", p);
				}
			}
			Va(d);
		});
	}, e.resume = function(e, t, n) {
		return new Promise(function(i, a) {
			var o, s, c = new Promise(function(e, t) {
				s = e, o = t;
			}), l = Ui(e, t, ke(t.resumableState, n ? n.nonce : void 0, void 0, void 0, void 0, void 0), n ? n.onError : void 0, s, function() {
				var e = new ReadableStream({
					type: "bytes",
					pull: function(e) {
						Ua(l, e);
					},
					cancel: function(e) {
						l.destination = null, Wa(l, e);
					}
				}, { highWaterMark: 0 });
				e.allReady = c, i(e);
			}, function(e) {
				c.catch(function() {}), a(e);
			}, o, n ? n.onPostpone : void 0);
			if (n && n.signal) {
				var u = n.signal;
				if (u.aborted) Wa(l, u.reason);
				else {
					var d = function() {
						Wa(l, u.reason), u.removeEventListener("abort", d);
					};
					u.addEventListener("abort", d);
				}
			}
			Va(l);
		});
	}, e.resumeAndPrerender = function(e, t, n) {
		return new Promise(function(i, a) {
			var o = Wi(e, t, ke(t.resumableState, void 0, void 0, void 0, void 0, void 0), n ? n.onError : void 0, function() {
				var e = new ReadableStream({
					type: "bytes",
					pull: function(e) {
						Ua(o, e);
					},
					cancel: function(e) {
						o.destination = null, Wa(o, e);
					}
				}, { highWaterMark: 0 });
				e = {
					postponed: Ka(o),
					prelude: e
				}, i(e);
			}, void 0, void 0, a, n ? n.onPostpone : void 0);
			if (n && n.signal) {
				var s = n.signal;
				if (s.aborted) Wa(o, s.reason);
				else {
					var c = function() {
						Wa(o, s.reason), s.removeEventListener("abort", c);
					};
					s.addEventListener("abort", c);
				}
			}
			Va(o);
		});
	}, e.version = "19.2.0";
})), require_react_dom_server_legacy_browser_development = /* @__PURE__ */ __commonJSMin(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		function t(e, t, n, i) {
			return "" + t + (n === "s" ? "\\73 " : "\\53 ") + i;
		}
		function n(e, t, n, i) {
			return "" + t + (n === "s" ? "\\u0073" : "\\u0053") + i;
		}
		function i(e) {
			return typeof e != "object" || !e ? null : (e = Xn && e[Xn] || e["@@iterator"], typeof e == "function" ? e : null);
		}
		function a(e) {
			return e = Object.prototype.toString.call(e), e.slice(8, e.length - 1);
		}
		function o(e) {
			var t = JSON.stringify(e);
			return "\"" + e + "\"" === t ? e : t;
		}
		function s(e) {
			switch (typeof e) {
				case "string": return JSON.stringify(10 >= e.length ? e : e.slice(0, 10) + "...");
				case "object": return Zn(e) ? "[...]" : e !== null && e.$$typeof === er ? "client" : (e = a(e), e === "Object" ? "{...}" : e);
				case "function": return e.$$typeof === er ? "client" : (e = e.displayName || e.name) ? "function " + e : "function";
				default: return String(e);
			}
		}
		function c(e) {
			if (typeof e == "string") return e;
			switch (e) {
				case Vn: return "Suspense";
				case Hn: return "SuspenseList";
			}
			if (typeof e == "object") switch (e.$$typeof) {
				case Bn: return c(e.render);
				case Un: return c(e.type);
				case Wn:
					var t = e._payload;
					e = e._init;
					try {
						return c(e(t));
					} catch {}
			}
			return "";
		}
		function l(e, t) {
			var n = a(e);
			if (n !== "Object" && n !== "Array") return n;
			var i = -1, u = 0;
			if (Zn(e)) if ($n.has(e)) {
				var d = $n.get(e);
				n = "<" + c(d) + ">";
				for (var f = 0; f < e.length; f++) {
					var p = e[f];
					p = typeof p == "string" ? p : typeof p == "object" && p ? "{" + l(p) + "}" : "{" + s(p) + "}", "" + f === t ? (i = n.length, u = p.length, n += p) : n = 15 > p.length && 40 > n.length + p.length ? n + p : n + "{...}";
				}
				n += "</" + c(d) + ">";
			} else {
				for (n = "[", d = 0; d < e.length; d++) 0 < d && (n += ", "), f = e[d], f = typeof f == "object" && f ? l(f) : s(f), "" + d === t ? (i = n.length, u = f.length, n += f) : n = 10 > f.length && 40 > n.length + f.length ? n + f : n + "...";
				n += "]";
			}
			else if (e.$$typeof === Nn) n = "<" + c(e.type) + "/>";
			else {
				if (e.$$typeof === er) return "client";
				if (Qn.has(e)) {
					for (n = Qn.get(e), n = "<" + (c(n) || "..."), d = Object.keys(e), f = 0; f < d.length; f++) {
						n += " ", p = d[f], n += o(p) + "=";
						var m = e[p], h = p === t && typeof m == "object" && m ? l(m) : s(m);
						typeof m != "string" && (h = "{" + h + "}"), p === t ? (i = n.length, u = h.length, n += h) : n = 10 > h.length && 40 > n.length + h.length ? n + h : n + "...";
					}
					n += ">";
				} else {
					for (n = "{", d = Object.keys(e), f = 0; f < d.length; f++) 0 < f && (n += ", "), p = d[f], n += o(p) + ": ", m = e[p], m = typeof m == "object" && m ? l(m) : s(m), p === t ? (i = n.length, u = m.length, n += m) : n = 10 > m.length && 40 > n.length + m.length ? n + m : n + "...";
					n += "}";
				}
			}
			return t === void 0 ? n : -1 < i && 0 < u ? (e = " ".repeat(i) + "^".repeat(u), "\n  " + n + "\n  " + e) : "\n  " + n;
		}
		function u(e, t) {
			var n = e.length & 3, i = e.length - n, a = t;
			for (t = 0; t < i;) {
				var o = e.charCodeAt(t) & 255 | (e.charCodeAt(++t) & 255) << 8 | (e.charCodeAt(++t) & 255) << 16 | (e.charCodeAt(++t) & 255) << 24;
				++t, o = 3432918353 * (o & 65535) + ((3432918353 * (o >>> 16) & 65535) << 16) & 4294967295, o = o << 15 | o >>> 17, o = 461845907 * (o & 65535) + ((461845907 * (o >>> 16) & 65535) << 16) & 4294967295, a ^= o, a = a << 13 | a >>> 19, a = 5 * (a & 65535) + ((5 * (a >>> 16) & 65535) << 16) & 4294967295, a = (a & 65535) + 27492 + (((a >>> 16) + 58964 & 65535) << 16);
			}
			switch (o = 0, n) {
				case 3: o ^= (e.charCodeAt(t + 2) & 255) << 16;
				case 2: o ^= (e.charCodeAt(t + 1) & 255) << 8;
				case 1: o ^= e.charCodeAt(t) & 255, o = 3432918353 * (o & 65535) + ((3432918353 * (o >>> 16) & 65535) << 16) & 4294967295, o = o << 15 | o >>> 17, a ^= 461845907 * (o & 65535) + ((461845907 * (o >>> 16) & 65535) << 16) & 4294967295;
			}
			return a ^= e.length, a ^= a >>> 16, a = 2246822507 * (a & 65535) + ((2246822507 * (a >>> 16) & 65535) << 16) & 4294967295, a ^= a >>> 13, a = 3266489909 * (a & 65535) + ((3266489909 * (a >>> 16) & 65535) << 16) & 4294967295, (a ^ a >>> 16) >>> 0;
		}
		function d(e) {
			return typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
		}
		function p(e) {
			try {
				return m(e), !1;
			} catch {
				return !0;
			}
		}
		function m(e) {
			return "" + e;
		}
		function g(e, t) {
			if (p(e)) return console.error("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.", t, d(e)), m(e);
		}
		function _(e, t) {
			if (p(e)) return console.error("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.", t, d(e)), m(e);
		}
		function v(e) {
			if (p(e)) return console.error("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.", d(e)), m(e);
		}
		function y(e) {
			return nr.call(ar, e) ? !0 : nr.call(ir, e) ? !1 : rr.test(e) ? ar[e] = !0 : (ir[e] = !0, console.error("Invalid attribute name: `%s`", e), !1);
		}
		function b(e, t) {
			cr[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || (e === "select" ? console.error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`.") : console.error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.")), t.onChange || t.readOnly || t.disabled || t.checked == null || console.error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
		}
		function x(e, t) {
			if (nr.call(ur, t) && ur[t]) return !0;
			if (fr.test(t)) {
				if (e = "aria-" + t.slice(4).toLowerCase(), e = lr.hasOwnProperty(e) ? e : null, e == null) return console.error("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), ur[t] = !0;
				if (t !== e) return console.error("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, e), ur[t] = !0;
			}
			if (dr.test(t)) {
				if (e = t.toLowerCase(), e = lr.hasOwnProperty(e) ? e : null, e == null) return ur[t] = !0, !1;
				t !== e && (console.error("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, e), ur[t] = !0);
			}
			return !0;
		}
		function S(e, t) {
			var n = [], i;
			for (i in t) x(e, i) || n.push(i);
			t = n.map(function(e) {
				return "`" + e + "`";
			}).join(", "), n.length === 1 ? console.error("Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props", t, e) : 1 < n.length && console.error("Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props", t, e);
		}
		function C(e, t, n, i) {
			if (nr.call(hr, t) && hr[t]) return !0;
			var a = t.toLowerCase();
			if (a === "onfocusin" || a === "onfocusout") return console.error("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), hr[t] = !0;
			if (typeof n == "function" && (e === "form" && t === "action" || e === "input" && t === "formAction" || e === "button" && t === "formAction")) return !0;
			if (i != null) {
				if (e = i.possibleRegistrationNames, i.registrationNameDependencies.hasOwnProperty(t)) return !0;
				if (i = e.hasOwnProperty(a) ? e[a] : null, i != null) return console.error("Invalid event handler property `%s`. Did you mean `%s`?", t, i), hr[t] = !0;
				if (gr.test(t)) return console.error("Unknown event handler property `%s`. It will be ignored.", t), hr[t] = !0;
			} else if (gr.test(t)) return _r.test(t) && console.error("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), hr[t] = !0;
			if (vr.test(t) || yr.test(t)) return !0;
			if (a === "innerhtml") return console.error("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), hr[t] = !0;
			if (a === "aria") return console.error("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), hr[t] = !0;
			if (a === "is" && n != null && typeof n != "string") return console.error("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof n), hr[t] = !0;
			if (typeof n == "number" && isNaN(n)) return console.error("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), hr[t] = !0;
			if (mr.hasOwnProperty(a)) {
				if (a = mr[a], a !== t) return console.error("Invalid DOM property `%s`. Did you mean `%s`?", t, a), hr[t] = !0;
			} else if (t !== a) return console.error("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, a), hr[t] = !0;
			switch (t) {
				case "dangerouslySetInnerHTML":
				case "children":
				case "style":
				case "suppressContentEditableWarning":
				case "suppressHydrationWarning":
				case "defaultValue":
				case "defaultChecked":
				case "innerHTML":
				case "ref": return !0;
				case "innerText":
				case "textContent": return !0;
			}
			switch (typeof n) {
				case "boolean": switch (t) {
					case "autoFocus":
					case "checked":
					case "multiple":
					case "muted":
					case "selected":
					case "contentEditable":
					case "spellCheck":
					case "draggable":
					case "value":
					case "autoReverse":
					case "externalResourcesRequired":
					case "focusable":
					case "preserveAlpha":
					case "allowFullScreen":
					case "async":
					case "autoPlay":
					case "controls":
					case "default":
					case "defer":
					case "disabled":
					case "disablePictureInPicture":
					case "disableRemotePlayback":
					case "formNoValidate":
					case "hidden":
					case "loop":
					case "noModule":
					case "noValidate":
					case "open":
					case "playsInline":
					case "readOnly":
					case "required":
					case "reversed":
					case "scoped":
					case "seamless":
					case "itemScope":
					case "capture":
					case "download":
					case "inert": return !0;
					default: return a = t.toLowerCase().slice(0, 5), a === "data-" || a === "aria-" ? !0 : (n ? console.error("Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s=\"%s\" or %s={value.toString()}.", n, t, t, n, t) : console.error("Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s=\"%s\" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", n, t, t, n, t, t, t), hr[t] = !0);
				}
				case "function":
				case "symbol": return hr[t] = !0, !1;
				case "string": if (n === "false" || n === "true") {
					switch (t) {
						case "checked":
						case "selected":
						case "multiple":
						case "muted":
						case "allowFullScreen":
						case "async":
						case "autoPlay":
						case "controls":
						case "default":
						case "defer":
						case "disabled":
						case "disablePictureInPicture":
						case "disableRemotePlayback":
						case "formNoValidate":
						case "hidden":
						case "loop":
						case "noModule":
						case "noValidate":
						case "open":
						case "playsInline":
						case "readOnly":
						case "required":
						case "reversed":
						case "scoped":
						case "seamless":
						case "itemScope":
						case "inert": break;
						default: return !0;
					}
					console.error("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", n, t, n === "false" ? "The browser will interpret it as a truthy value." : "Although this works, it will not work as expected if you pass the string \"false\".", t, n), hr[t] = !0;
				}
			}
			return !0;
		}
		function w(e, t, n) {
			var i = [], a;
			for (a in t) C(e, a, t[a], n) || i.push(a);
			t = i.map(function(e) {
				return "`" + e + "`";
			}).join(", "), i.length === 1 ? console.error("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ", t, e) : 1 < i.length && console.error("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ", t, e);
		}
		function T(e) {
			return e.replace(Sr, function(e, t) {
				return t.toUpperCase();
			});
		}
		function E(e) {
			if (typeof e == "boolean" || typeof e == "number" || typeof e == "bigint") return "" + e;
			v(e), e = "" + e;
			var t = Or.exec(e);
			if (t) {
				var n = "", i, a = 0;
				for (i = t.index; i < e.length; i++) {
					switch (e.charCodeAt(i)) {
						case 34:
							t = "&quot;";
							break;
						case 38:
							t = "&amp;";
							break;
						case 39:
							t = "&#x27;";
							break;
						case 60:
							t = "&lt;";
							break;
						case 62:
							t = "&gt;";
							break;
						default: continue;
					}
					a !== i && (n += e.slice(a, i)), a = i + 1, n += t;
				}
				e = a === i ? n : n + e.slice(a, i);
			}
			return e;
		}
		function D(e) {
			return jr.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
		}
		function O(e) {
			return v(e), ("" + e).replace(qr, n);
		}
		function k(e, t, n, i, a) {
			return {
				idPrefix: e === void 0 ? "" : e,
				nextFormID: 0,
				streamingFormat: 0,
				bootstrapScriptContent: n,
				bootstrapScripts: i,
				bootstrapModules: a,
				instructions: Ir,
				hasBody: !1,
				hasHtml: !1,
				unknownResources: {},
				dnsResources: {},
				connectResources: {
					default: {},
					anonymous: {},
					credentials: {}
				},
				imageResources: {},
				styleResources: {},
				scriptResources: {},
				moduleUnknownResources: {},
				moduleScriptResources: {}
			};
		}
		function A(e, t, n, i) {
			return {
				insertionMode: e,
				selectedValue: t,
				tagScope: n,
				viewTransition: i
			};
		}
		function j(e, t, n) {
			var i = e.tagScope & -25;
			switch (t) {
				case "noscript": return A(Zr, null, i | 1, null);
				case "select": return A(Zr, n.value == null ? n.defaultValue : n.value, i, null);
				case "svg": return A($r, null, i, null);
				case "picture": return A(Zr, null, i | 2, null);
				case "math": return A(ei, null, i, null);
				case "foreignObject": return A(Zr, null, i, null);
				case "table": return A(ti, null, i, null);
				case "thead":
				case "tbody":
				case "tfoot": return A(ni, null, i, null);
				case "colgroup": return A(ii, null, i, null);
				case "tr": return A(ri, null, i, null);
				case "head":
					if (e.insertionMode < Zr) return A(Qr, null, i, null);
					break;
				case "html": if (e.insertionMode === Yr) return A(Xr, null, i, null);
			}
			return e.insertionMode >= ti || e.insertionMode < Zr ? A(Zr, null, i, null) : e.tagScope === i ? e : A(e.insertionMode, e.selectedValue, i, null);
		}
		function M(e) {
			return e === null ? null : {
				update: e.update,
				enter: "none",
				exit: "none",
				share: e.update,
				name: e.autoName,
				autoName: e.autoName,
				nameIdx: 0
			};
		}
		function N(e, t) {
			return t.tagScope & 32 && (e.instructions |= 128), A(t.insertionMode, t.selectedValue, t.tagScope | 12, M(t.viewTransition));
		}
		function P(e, t) {
			e = M(t.viewTransition);
			var n = t.tagScope | 16;
			return e !== null && e.share !== "none" && (n |= 64), A(t.insertionMode, t.selectedValue, n, e);
		}
		function F(e, t) {
			if (typeof t != "object") throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
			var n = !0, i;
			for (i in t) if (nr.call(t, i)) {
				var a = t[i];
				if (a != null && typeof a != "boolean" && a !== "") {
					if (i.indexOf("--") === 0) {
						var o = E(i);
						_(a, i), a = E(("" + a).trim());
					} else {
						o = i;
						var s = a;
						if (-1 < o.indexOf("-")) {
							var c = o;
							wr.hasOwnProperty(c) && wr[c] || (wr[c] = !0, console.error("Unsupported style property %s. Did you mean %s?", c, T(c.replace(xr, "ms-"))));
						} else if (br.test(o)) c = o, wr.hasOwnProperty(c) && wr[c] || (wr[c] = !0, console.error("Unsupported vendor-prefixed style property %s. Did you mean %s?", c, c.charAt(0).toUpperCase() + c.slice(1)));
						else if (Cr.test(s)) {
							c = o;
							var l = s;
							Tr.hasOwnProperty(l) && Tr[l] || (Tr[l] = !0, console.error("Style property values shouldn't contain a semicolon. Try \"%s: %s\" instead.", c, l.replace(Cr, "")));
						}
						typeof s == "number" && (isNaN(s) ? Er || (Er = !0, console.error("`NaN` is an invalid value for the `%s` css style property.", o)) : isFinite(s) || Dr || (Dr = !0, console.error("`Infinity` is an invalid value for the `%s` css style property.", o))), o = i, s = ai.get(o), s === void 0 ? (s = E(o.replace(kr, "-$1").toLowerCase().replace(Ar, "-ms-")), ai.set(o, s), o = s) : o = s, typeof a == "number" ? a = a === 0 || or.has(i) ? "" + a : a + "px" : (_(a, i), a = E(("" + a).trim()));
					}
					n ? (n = !1, e.push(oi, o, si, a)) : e.push(ci, o, si, a);
				}
			}
			n || e.push(di);
		}
		function I(e, t, n) {
			n && typeof n != "function" && typeof n != "symbol" && e.push(li, t, fi);
		}
		function L(e, t, n) {
			typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && e.push(li, t, ui, E(n), di);
		}
		function R(e, t) {
			this.push("<input type=\"hidden\""), ee(e), L(this, "name", t), L(this, "value", e), this.push(hi);
		}
		function ee(e) {
			if (typeof e != "string") throw Error("File/Blob fields are not yet supported in progressive forms. Will fallback to client hydration.");
		}
		function z(e, t) {
			if (typeof t.$$FORM_ACTION == "function") {
				var n = e.nextFormID++;
				e = e.idPrefix + n;
				try {
					var i = t.$$FORM_ACTION(e);
					return i && i.data?.forEach(ee), i;
				} catch (e) {
					if (typeof e == "object" && e && typeof e.then == "function") throw e;
					console.error("Failed to serialize an action for progressive enhancement:\n%s", e);
				}
			}
			return null;
		}
		function B(e, t, n, i, a, o, s, c) {
			var l = null;
			if (typeof i == "function") {
				c === null || wi || (wi = !0, console.error("Cannot specify a \"name\" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.")), a === null && o === null || Ei || (Ei = !0, console.error("Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden.")), s === null || Ti || (Ti = !0, console.error("Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."));
				var u = z(t, i);
				u === null ? (e.push(li, "formAction", ui, pi, di), s = o = a = i = c = null, ne(t, n)) : (c = u.name, i = u.action || "", a = u.encType, o = u.method, s = u.target, l = u.data);
			}
			return c != null && V(e, "name", c), i != null && V(e, "formAction", i), a != null && V(e, "formEncType", a), o != null && V(e, "formMethod", o), s != null && V(e, "formTarget", s), l;
		}
		function V(e, t, n) {
			switch (t) {
				case "className":
					L(e, "class", n);
					break;
				case "tabIndex":
					L(e, "tabindex", n);
					break;
				case "dir":
				case "role":
				case "viewBox":
				case "width":
				case "height":
					L(e, t, n);
					break;
				case "style":
					F(e, n);
					break;
				case "src":
				case "href": if (n === "") {
					t === "src" ? console.error("An empty string (\"\") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.", t, t) : console.error("An empty string (\"\") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.", t, t);
					break;
				}
				case "action":
				case "formAction":
					if (n == null || typeof n == "function" || typeof n == "symbol" || typeof n == "boolean") break;
					g(n, t), n = D("" + n), e.push(li, t, ui, E(n), di);
					break;
				case "defaultValue":
				case "defaultChecked":
				case "innerHTML":
				case "suppressContentEditableWarning":
				case "suppressHydrationWarning":
				case "ref": break;
				case "autoFocus":
				case "multiple":
				case "muted":
					I(e, t.toLowerCase(), n);
					break;
				case "xlinkHref":
					if (typeof n == "function" || typeof n == "symbol" || typeof n == "boolean") break;
					g(n, t), n = D("" + n), e.push(li, "xlink:href", ui, E(n), di);
					break;
				case "contentEditable":
				case "spellCheck":
				case "draggable":
				case "value":
				case "autoReverse":
				case "externalResourcesRequired":
				case "focusable":
				case "preserveAlpha":
					typeof n != "function" && typeof n != "symbol" && e.push(li, t, ui, E(n), di);
					break;
				case "inert": n !== "" || Jr[t] || (Jr[t] = !0, console.error("Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.", t));
				case "allowFullScreen":
				case "async":
				case "autoPlay":
				case "controls":
				case "default":
				case "defer":
				case "disabled":
				case "disablePictureInPicture":
				case "disableRemotePlayback":
				case "formNoValidate":
				case "hidden":
				case "loop":
				case "noModule":
				case "noValidate":
				case "open":
				case "playsInline":
				case "readOnly":
				case "required":
				case "reversed":
				case "scoped":
				case "seamless":
				case "itemScope":
					n && typeof n != "function" && typeof n != "symbol" && e.push(li, t, fi);
					break;
				case "capture":
				case "download":
					!0 === n ? e.push(li, t, fi) : !1 !== n && typeof n != "function" && typeof n != "symbol" && e.push(li, t, ui, E(n), di);
					break;
				case "cols":
				case "rows":
				case "size":
				case "span":
					typeof n != "function" && typeof n != "symbol" && !isNaN(n) && 1 <= n && e.push(li, t, ui, E(n), di);
					break;
				case "rowSpan":
				case "start":
					typeof n == "function" || typeof n == "symbol" || isNaN(n) || e.push(li, t, ui, E(n), di);
					break;
				case "xlinkActuate":
					L(e, "xlink:actuate", n);
					break;
				case "xlinkArcrole":
					L(e, "xlink:arcrole", n);
					break;
				case "xlinkRole":
					L(e, "xlink:role", n);
					break;
				case "xlinkShow":
					L(e, "xlink:show", n);
					break;
				case "xlinkTitle":
					L(e, "xlink:title", n);
					break;
				case "xlinkType":
					L(e, "xlink:type", n);
					break;
				case "xmlBase":
					L(e, "xml:base", n);
					break;
				case "xmlLang":
					L(e, "xml:lang", n);
					break;
				case "xmlSpace":
					L(e, "xml:space", n);
					break;
				default: if ((!(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (t = sr.get(t) || t, y(t))) {
					switch (typeof n) {
						case "function":
						case "symbol": return;
						case "boolean":
							var i = t.toLowerCase().slice(0, 5);
							if (i !== "data-" && i !== "aria-") return;
					}
					e.push(li, t, ui, E(n), di);
				}
			}
		}
		function te(e, t, n) {
			if (t != null) {
				if (n != null) throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
				if (typeof t != "object" || !("__html" in t)) throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");
				t = t.__html, t != null && (v(t), e.push("" + t));
			}
		}
		function H(e, t) {
			var n = e[t];
			n != null && (n = Zn(n), e.multiple && !n ? console.error("The `%s` prop supplied to <select> must be an array if `multiple` is true.", t) : !e.multiple && n && console.error("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", t));
		}
		function U(e) {
			var t = "";
			return jn.Children.forEach(e, function(e) {
				e != null && (t += e, bi || typeof e == "string" || typeof e == "number" || typeof e == "bigint" || (bi = !0, console.error("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
			}), t;
		}
		function ne(e, t) {
			if ((e.instructions & 16) === Ir) {
				e.instructions |= 16;
				var n = t.preamble, i = t.bootstrapChunks;
				(n.htmlChunks || n.headChunks) && i.length === 0 ? (i.push(t.startInlineScript), q(i, e), i.push(mi, Di, Kr)) : i.unshift(t.startInlineScript, mi, Di, Kr);
			}
		}
		function W(e, t) {
			for (var n in e.push(ce("link")), t) if (nr.call(t, n)) {
				var i = t[n];
				if (i != null) switch (n) {
					case "children":
					case "dangerouslySetInnerHTML": throw Error("link is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
					default: V(e, n, i);
				}
			}
			return e.push(hi), null;
		}
		function re(e) {
			return v(e), ("" + e).replace(Oi, t);
		}
		function ie(e, t, n) {
			for (var i in e.push(ce(n)), t) if (nr.call(t, i)) {
				var a = t[i];
				if (a != null) switch (i) {
					case "children":
					case "dangerouslySetInnerHTML": throw Error(n + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
					default: V(e, i, a);
				}
			}
			return e.push(hi), null;
		}
		function ae(e, t) {
			e.push(ce("title"));
			var n = null, i = null, a;
			for (a in t) if (nr.call(t, a)) {
				var o = t[a];
				if (o != null) switch (a) {
					case "children":
						n = o;
						break;
					case "dangerouslySetInnerHTML":
						i = o;
						break;
					default: V(e, a, o);
				}
			}
			return e.push(mi), t = Array.isArray(n) ? 2 > n.length ? n[0] : null : n, typeof t != "function" && typeof t != "symbol" && t != null && e.push(E("" + t)), te(e, i, n), e.push(ue("title")), null;
		}
		function oe(e, t) {
			e.push(ce("script"));
			var n = null, i = null, a;
			for (a in t) if (nr.call(t, a)) {
				var o = t[a];
				if (o != null) switch (a) {
					case "children":
						n = o;
						break;
					case "dangerouslySetInnerHTML":
						i = o;
						break;
					default: V(e, a, o);
				}
			}
			return e.push(mi), n != null && typeof n != "string" && (t = typeof n == "number" ? "a number for children" : Array.isArray(n) ? "an array for children" : "something unexpected for children", console.error("A script element was rendered with %s. If script element has children it must be a single string. Consider using dangerouslySetInnerHTML or passing a plain string as children.", t)), te(e, i, n), typeof n == "string" && e.push(O(n)), e.push(ue("script")), null;
		}
		function se(e, t, n) {
			e.push(ce(n));
			var i = n = null, a;
			for (a in t) if (nr.call(t, a)) {
				var o = t[a];
				if (o != null) switch (a) {
					case "children":
						n = o;
						break;
					case "dangerouslySetInnerHTML":
						i = o;
						break;
					default: V(e, a, o);
				}
			}
			return e.push(mi), te(e, i, n), n;
		}
		function G(e, t, n) {
			e.push(ce(n));
			var i = n = null, a;
			for (a in t) if (nr.call(t, a)) {
				var o = t[a];
				if (o != null) switch (a) {
					case "children":
						n = o;
						break;
					case "dangerouslySetInnerHTML":
						i = o;
						break;
					default: V(e, a, o);
				}
			}
			return e.push(mi), te(e, i, n), typeof n == "string" ? (e.push(E(n)), null) : n;
		}
		function ce(e) {
			var t = ji.get(e);
			if (t === void 0) {
				if (!Ai.test(e)) throw Error("Invalid tag: " + e);
				t = "<" + e, ji.set(e, t);
			}
			return t;
		}
		function le(e, t, n, i, a, o, s, c, l) {
			S(t, n), t !== "input" && t !== "textarea" && t !== "select" || n == null || n.value !== null || pr || (pr = !0, t === "select" && n.multiple ? console.error("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", t) : console.error("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", t));
			b: if (t.indexOf("-") === -1) var u = !1;
			else switch (t) {
				case "annotation-xml":
				case "color-profile":
				case "font-face":
				case "font-face-src":
				case "font-face-uri":
				case "font-face-format":
				case "font-face-name":
				case "missing-glyph":
					u = !1;
					break b;
				default: u = !0;
			}
			switch (u || typeof n.is == "string" || w(t, n, null), !n.suppressContentEditableWarning && n.contentEditable && n.children != null && console.error("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), c.insertionMode !== $r && c.insertionMode !== ei && t.indexOf("-") === -1 && t.toLowerCase() !== t && console.error("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", t), t) {
				case "div":
				case "span":
				case "svg":
				case "path": break;
				case "a":
					e.push(ce("a"));
					var d = null, f = null, p;
					for (p in n) if (nr.call(n, p)) {
						var m = n[p];
						if (m != null) switch (p) {
							case "children":
								d = m;
								break;
							case "dangerouslySetInnerHTML":
								f = m;
								break;
							case "href":
								m === "" ? L(e, "href", "") : V(e, p, m);
								break;
							default: V(e, p, m);
						}
					}
					if (e.push(mi), te(e, f, d), typeof d == "string") {
						e.push(E(d));
						var h = null;
					} else h = d;
					return h;
				case "g":
				case "p":
				case "li": break;
				case "select":
					b("select", n), H(n, "value"), H(n, "defaultValue"), n.value === void 0 || n.defaultValue === void 0 || vi || (console.error("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"), vi = !0), e.push(ce("select"));
					var _ = null, x = null, C;
					for (C in n) if (nr.call(n, C)) {
						var T = n[C];
						if (T != null) switch (C) {
							case "children":
								_ = T;
								break;
							case "dangerouslySetInnerHTML":
								x = T;
								break;
							case "defaultValue":
							case "value": break;
							default: V(e, C, T);
						}
					}
					return e.push(mi), te(e, x, _), _;
				case "option":
					var O = c.selectedValue;
					e.push(ce("option"));
					var k = null, A = null, j = null, M = null, N;
					for (N in n) if (nr.call(n, N)) {
						var P = n[N];
						if (P != null) switch (N) {
							case "children":
								k = P;
								break;
							case "selected":
								j = P, Si ||= (console.error("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), !0);
								break;
							case "dangerouslySetInnerHTML":
								M = P;
								break;
							case "value": A = P;
							default: V(e, N, P);
						}
					}
					if (O != null) {
						if (A !== null) {
							g(A, "value");
							var ee = "" + A;
						} else M === null || xi || (xi = !0, console.error("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")), ee = U(k);
						if (Zn(O)) {
							for (var le = 0; le < O.length; le++) if (g(O[le], "value"), "" + O[le] === ee) {
								e.push(" selected=\"\"");
								break;
							}
						} else g(O, "select.value"), "" + O === ee && e.push(" selected=\"\"");
					} else j && e.push(" selected=\"\"");
					return e.push(mi), te(e, M, k), k;
				case "textarea":
					b("textarea", n), n.value === void 0 || n.defaultValue === void 0 || yi || (console.error("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components"), yi = !0), e.push(ce("textarea"));
					var K = null, de = null, fe = null, pe;
					for (pe in n) if (nr.call(n, pe)) {
						var me = n[pe];
						if (me != null) switch (pe) {
							case "children":
								fe = me;
								break;
							case "value":
								K = me;
								break;
							case "defaultValue":
								de = me;
								break;
							case "dangerouslySetInnerHTML": throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
							default: V(e, pe, me);
						}
					}
					if (K === null && de !== null && (K = de), e.push(mi), fe != null) {
						if (console.error("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), K != null) throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
						if (Zn(fe)) {
							if (1 < fe.length) throw Error("<textarea> can only have at most one child.");
							v(fe[0]), K = "" + fe[0];
						}
						v(fe), K = "" + fe;
					}
					return typeof K == "string" && K[0] === "\n" && e.push(ki), K !== null && (g(K, "value"), e.push(E("" + K))), null;
				case "input":
					b("input", n), e.push(ce("input"));
					var he = null, ge = null, _e = null, ve = null, ye = null, be = null, xe = null, Se = null, Ce = null, we;
					for (we in n) if (nr.call(n, we)) {
						var q = n[we];
						if (q != null) switch (we) {
							case "children":
							case "dangerouslySetInnerHTML": throw Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
							case "name":
								he = q;
								break;
							case "formAction":
								ge = q;
								break;
							case "formEncType":
								_e = q;
								break;
							case "formMethod":
								ve = q;
								break;
							case "formTarget":
								ye = q;
								break;
							case "defaultChecked":
								Ce = q;
								break;
							case "defaultValue":
								xe = q;
								break;
							case "checked":
								Se = q;
								break;
							case "value":
								be = q;
								break;
							default: V(e, we, q);
						}
					}
					ge === null || n.type === "image" || n.type === "submit" || Ci || (Ci = !0, console.error("An input can only specify a formAction along with type=\"submit\" or type=\"image\"."));
					var Te = B(e, i, a, ge, _e, ve, ye, he);
					return Se === null || Ce === null || _i || (console.error("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components", "A component", n.type), _i = !0), be === null || xe === null || gi || (console.error("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components", "A component", n.type), gi = !0), Se === null ? Ce !== null && I(e, "checked", Ce) : I(e, "checked", Se), be === null ? xe !== null && V(e, "value", xe) : V(e, "value", be), e.push(hi), Te?.forEach(R, e), null;
				case "button":
					e.push(ce("button"));
					var Ee = null, De = null, Oe = null, je = null, Me = null, Ne = null, Pe = null, Fe;
					for (Fe in n) if (nr.call(n, Fe)) {
						var Ie = n[Fe];
						if (Ie != null) switch (Fe) {
							case "children":
								Ee = Ie;
								break;
							case "dangerouslySetInnerHTML":
								De = Ie;
								break;
							case "name":
								Oe = Ie;
								break;
							case "formAction":
								je = Ie;
								break;
							case "formEncType":
								Me = Ie;
								break;
							case "formMethod":
								Ne = Ie;
								break;
							case "formTarget":
								Pe = Ie;
								break;
							default: V(e, Fe, Ie);
						}
					}
					je === null || n.type == null || n.type === "submit" || Ci || (Ci = !0, console.error("A button can only specify a formAction along with type=\"submit\" or no type."));
					var Le = B(e, i, a, je, Me, Ne, Pe, Oe);
					if (e.push(mi), Le?.forEach(R, e), te(e, De, Ee), typeof Ee == "string") {
						e.push(E(Ee));
						var Re = null;
					} else Re = Ee;
					return Re;
				case "form":
					e.push(ce("form"));
					var ze = null, Be = null, Ve = null, He = null, Ue = null, We = null, Ge;
					for (Ge in n) if (nr.call(n, Ge)) {
						var Ke = n[Ge];
						if (Ke != null) switch (Ge) {
							case "children":
								ze = Ke;
								break;
							case "dangerouslySetInnerHTML":
								Be = Ke;
								break;
							case "action":
								Ve = Ke;
								break;
							case "encType":
								He = Ke;
								break;
							case "method":
								Ue = Ke;
								break;
							case "target":
								We = Ke;
								break;
							default: V(e, Ge, Ke);
						}
					}
					var J = null, qe = null;
					if (typeof Ve == "function") {
						He === null && Ue === null || Ei || (Ei = !0, console.error("Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden.")), We === null || Ti || (Ti = !0, console.error("Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."));
						var Y = z(i, Ve);
						Y === null ? (e.push(li, "action", ui, pi, di), We = Ue = He = Ve = null, ne(i, a)) : (Ve = Y.action || "", He = Y.encType, Ue = Y.method, We = Y.target, J = Y.data, qe = Y.name);
					}
					if (Ve != null && V(e, "action", Ve), He != null && V(e, "encType", He), Ue != null && V(e, "method", Ue), We != null && V(e, "target", We), e.push(mi), qe !== null && (e.push("<input type=\"hidden\""), L(e, "name", qe), e.push(hi), J?.forEach(R, e)), te(e, Be, ze), typeof ze == "string") {
						e.push(E(ze));
						var X = null;
					} else X = ze;
					return X;
				case "menuitem":
					for (var Je in e.push(ce("menuitem")), n) if (nr.call(n, Je)) {
						var Ye = n[Je];
						if (Ye != null) switch (Je) {
							case "children":
							case "dangerouslySetInnerHTML": throw Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
							default: V(e, Je, Ye);
						}
					}
					return e.push(mi), null;
				case "object":
					e.push(ce("object"));
					var Xe = null, Ze = null, Qe;
					for (Qe in n) if (nr.call(n, Qe)) {
						var $e = n[Qe];
						if ($e != null) switch (Qe) {
							case "children":
								Xe = $e;
								break;
							case "dangerouslySetInnerHTML":
								Ze = $e;
								break;
							case "data":
								g($e, "data");
								var et = D("" + $e);
								if (et === "") {
									console.error("An empty string (\"\") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.", Qe, Qe);
									break;
								}
								e.push(li, "data", ui, E(et), di);
								break;
							default: V(e, Qe, $e);
						}
					}
					if (e.push(mi), te(e, Ze, Xe), typeof Xe == "string") {
						e.push(E(Xe));
						var tt = null;
					} else tt = Xe;
					return tt;
				case "title":
					var nt = c.tagScope & 1, rt = c.tagScope & 4;
					if (nr.call(n, "children")) {
						var it = n.children, at = Array.isArray(it) ? 2 > it.length ? it[0] : null : it;
						Array.isArray(it) && 1 < it.length ? console.error("React expects the `children` prop of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found an Array with length %s instead. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert `children` of <title> tags to a single string value which is why Arrays of length greater than 1 are not supported. When using JSX it can be common to combine text nodes and value nodes. For example: <title>hello {nameOfUser}</title>. While not immediately apparent, `children` in this case is an Array with length 2. If your `children` prop is using this form try rewriting it using a template string: <title>{`hello ${nameOfUser}`}</title>.", it.length) : typeof at == "function" || typeof at == "symbol" ? console.error("React expect children of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found %s instead. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert children of <title> tags to a single string value.", typeof at == "function" ? "a Function" : "a Sybmol") : at && at.toString === {}.toString && (at.$$typeof == null ? console.error("React expects the `children` prop of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found an object that does not implement a suitable `toString` method. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert children of <title> tags to a single string value. Using the default `toString` method available on every object is almost certainly an error. Consider whether the `children` of this <title> is an object in error and change it to a string or number value if so. Otherwise implement a `toString` method that React can use to produce a valid <title>.") : console.error("React expects the `children` prop of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found an object that appears to be a React element which never implements a suitable `toString` method. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert children of <title> tags to a single string value which is why rendering React elements is not supported. If the `children` of <title> is a React Component try moving the <title> tag into that component. If the `children` of <title> is some HTML markup change it to be Text only to be valid HTML."));
					}
					if (c.insertionMode === $r || nt || n.itemProp != null) var ot = ae(e, n);
					else rt ? ot = null : (ae(a.hoistableChunks, n), ot = void 0);
					return ot;
				case "link":
					var st = c.tagScope & 1, ct = c.tagScope & 4, lt = n.rel, ut = n.href, dt = n.precedence;
					if (c.insertionMode === $r || st || n.itemProp != null || typeof lt != "string" || typeof ut != "string" || ut === "") {
						lt === "stylesheet" && typeof n.precedence == "string" && (typeof ut == "string" && ut || console.error("React encountered a `<link rel=\"stylesheet\" .../>` with a `precedence` prop and expected the `href` prop to be a non-empty string but ecountered %s instead. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop ensure there is a non-empty string `href` prop as well, otherwise remove the `precedence` prop.", ut === null ? "`null`" : ut === void 0 ? "`undefined`" : ut === "" ? "an empty string" : "something with type \"" + typeof ut + "\"")), W(e, n);
						var ft = null;
					} else if (n.rel === "stylesheet") if (typeof dt != "string" || n.disabled != null || n.onLoad || n.onError) {
						if (typeof dt == "string") {
							if (n.disabled != null) console.error("React encountered a `<link rel=\"stylesheet\" .../>` with a `precedence` prop and a `disabled` prop. The presence of the `disabled` prop indicates an intent to manage the stylesheet active state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the `disabled` prop, otherwise remove the `precedence` prop.");
							else if (n.onLoad || n.onError) {
								var pt = n.onLoad && n.onError ? "`onLoad` and `onError` props" : n.onLoad ? "`onLoad` prop" : "`onError` prop";
								console.error("React encountered a `<link rel=\"stylesheet\" .../>` with a `precedence` prop and %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.", pt, pt);
							}
						}
						ft = W(e, n);
					} else {
						var mt = a.styles.get(dt), ht = i.styleResources.hasOwnProperty(ut) ? i.styleResources[ut] : void 0;
						if (ht !== Ur) {
							i.styleResources[ut] = Ur, mt || (mt = {
								precedence: E(dt),
								rules: [],
								hrefs: [],
								sheets: /* @__PURE__ */ new Map()
							}, a.styles.set(dt, mt));
							var gt = {
								state: Qa,
								props: tr({}, n, {
									"data-precedence": n.precedence,
									precedence: null
								})
							};
							if (ht) {
								ht.length === 2 && ke(gt.props, ht);
								var _t = a.preloads.stylesheets.get(ut);
								_t && 0 < _t.length ? _t.length = 0 : gt.state = $a;
							}
							mt.sheets.set(ut, gt), s && s.stylesheets.add(gt);
						} else if (mt) {
							var vt = mt.sheets.get(ut);
							vt && s && s.stylesheets.add(vt);
						}
						l && e.push("<!-- -->"), ft = null;
					}
					else n.onLoad || n.onError ? ft = W(e, n) : (l && e.push("<!-- -->"), ft = ct ? null : W(a.hoistableChunks, n));
					return ft;
				case "script":
					var yt = c.tagScope & 1, bt = n.async;
					if (typeof n.src != "string" || !n.src || !bt || typeof bt == "function" || typeof bt == "symbol" || n.onLoad || n.onError || c.insertionMode === $r || yt || n.itemProp != null) var xt = oe(e, n);
					else {
						var St = n.src;
						if (n.type === "module") var Ct = i.moduleScriptResources, wt = a.preloads.moduleScripts;
						else Ct = i.scriptResources, wt = a.preloads.scripts;
						var Tt = Ct.hasOwnProperty(St) ? Ct[St] : void 0;
						if (Tt !== Ur) {
							Ct[St] = Ur;
							var Et = n;
							if (Tt) {
								Tt.length === 2 && (Et = tr({}, n), ke(Et, Tt));
								var Dt = wt.get(St);
								Dt && (Dt.length = 0);
							}
							var Ot = [];
							a.scripts.add(Ot), oe(Ot, Et);
						}
						l && e.push("<!-- -->"), xt = null;
					}
					return xt;
				case "style":
					var kt = c.tagScope & 1;
					if (nr.call(n, "children")) {
						var At = n.children, jt = Array.isArray(At) ? 2 > At.length ? At[0] : null : At;
						(typeof jt == "function" || typeof jt == "symbol" || Array.isArray(jt)) && console.error("React expect children of <style> tags to be a string, number, or object with a `toString` method but found %s instead. In browsers style Elements can only have `Text` Nodes as children.", typeof jt == "function" ? "a Function" : typeof jt == "symbol" ? "a Sybmol" : "an Array");
					}
					var Mt = n.precedence, Nt = n.href, Pt = n.nonce;
					if (c.insertionMode === $r || kt || n.itemProp != null || typeof Mt != "string" || typeof Nt != "string" || Nt === "") {
						e.push(ce("style"));
						var Ft = null, It = null, Lt;
						for (Lt in n) if (nr.call(n, Lt)) {
							var Rt = n[Lt];
							if (Rt != null) switch (Lt) {
								case "children":
									Ft = Rt;
									break;
								case "dangerouslySetInnerHTML":
									It = Rt;
									break;
								default: V(e, Lt, Rt);
							}
						}
						e.push(mi);
						var zt = Array.isArray(Ft) ? 2 > Ft.length ? Ft[0] : null : Ft;
						typeof zt != "function" && typeof zt != "symbol" && zt != null && e.push(re(zt)), te(e, It, Ft), e.push(ue("style"));
						var Bt = null;
					} else {
						Nt.includes(" ") && console.error("React expected the `href` prop for a <style> tag opting into hoisting semantics using the `precedence` prop to not have any spaces but ecountered spaces instead. using spaces in this prop will cause hydration of this style to fail on the client. The href for the <style> where this ocurred is \"%s\".", Nt);
						var Vt = a.styles.get(Mt), Ht = i.styleResources.hasOwnProperty(Nt) ? i.styleResources[Nt] : void 0;
						if (Ht !== Ur) {
							i.styleResources[Nt] = Ur, Ht && console.error("React encountered a hoistable style tag for the same href as a preload: \"%s\". When using a style tag to inline styles you should not also preload it as a stylsheet.", Nt), Vt || (Vt = {
								precedence: E(Mt),
								rules: [],
								hrefs: [],
								sheets: /* @__PURE__ */ new Map()
							}, a.styles.set(Mt, Vt));
							var Ut = a.nonce.style;
							if (Ut && Ut !== Pt) console.error("React encountered a style tag with `precedence` \"%s\" and `nonce` \"%s\". When React manages style rules using `precedence` it will only include rules if the nonce matches the style nonce \"%s\" that was included with this render.", Mt, Pt, Ut);
							else {
								!Ut && Pt && console.error("React encountered a style tag with `precedence` \"%s\" and `nonce` \"%s\". When React manages style rules using `precedence` it will only include a nonce attributes if you also provide the same style nonce value as a render option.", Mt, Pt), Vt.hrefs.push(E(Nt));
								var Wt = Vt.rules, Gt = null, Kt = null, qt;
								for (qt in n) if (nr.call(n, qt)) {
									var Jt = n[qt];
									if (Jt != null) switch (qt) {
										case "children":
											Gt = Jt;
											break;
										case "dangerouslySetInnerHTML": Kt = Jt;
									}
								}
								var Yt = Array.isArray(Gt) ? 2 > Gt.length ? Gt[0] : null : Gt;
								typeof Yt != "function" && typeof Yt != "symbol" && Yt != null && Wt.push(re(Yt)), te(Wt, Kt, Gt);
							}
						}
						Vt && s && s.styles.add(Vt), l && e.push("<!-- -->"), Bt = void 0;
					}
					return Bt;
				case "meta":
					var Xt = c.tagScope & 1, Z = c.tagScope & 4;
					if (c.insertionMode === $r || Xt || n.itemProp != null) var Zt = ie(e, n, "meta");
					else l && e.push("<!-- -->"), Zt = Z ? null : typeof n.charSet == "string" ? ie(a.charsetChunks, n, "meta") : n.name === "viewport" ? ie(a.viewportChunks, n, "meta") : ie(a.hoistableChunks, n, "meta");
					return Zt;
				case "listing":
				case "pre":
					e.push(ce(t));
					var Q = null, Qt = null, $t;
					for ($t in n) if (nr.call(n, $t)) {
						var en = n[$t];
						if (en != null) switch ($t) {
							case "children":
								Q = en;
								break;
							case "dangerouslySetInnerHTML":
								Qt = en;
								break;
							default: V(e, $t, en);
						}
					}
					if (e.push(mi), Qt != null) {
						if (Q != null) throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
						if (typeof Qt != "object" || !("__html" in Qt)) throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");
						var tn = Qt.__html;
						tn != null && (typeof tn == "string" && 0 < tn.length && tn[0] === "\n" ? e.push(ki, tn) : (v(tn), e.push("" + tn)));
					}
					return typeof Q == "string" && Q[0] === "\n" && e.push(ki), Q;
				case "img":
					var nn = c.tagScope & 3, rn = n.src, $ = n.srcSet;
					if (!(n.loading === "lazy" || !rn && !$ || typeof rn != "string" && rn != null || typeof $ != "string" && $ != null || n.fetchPriority === "low" || nn) && (typeof rn != "string" || rn[4] !== ":" || rn[0] !== "d" && rn[0] !== "D" || rn[1] !== "a" && rn[1] !== "A" || rn[2] !== "t" && rn[2] !== "T" || rn[3] !== "a" && rn[3] !== "A") && (typeof $ != "string" || $[4] !== ":" || $[0] !== "d" && $[0] !== "D" || $[1] !== "a" && $[1] !== "A" || $[2] !== "t" && $[2] !== "T" || $[3] !== "a" && $[3] !== "A")) {
						s !== null && c.tagScope & 64 && (s.suspenseyImages = !0);
						var an = typeof n.sizes == "string" ? n.sizes : void 0, on = $ ? $ + "\n" + (an || "") : rn, sn = a.preloads.images, ln = sn.get(on);
						if (ln) (n.fetchPriority === "high" || 10 > a.highImagePreloads.size) && (sn.delete(on), a.highImagePreloads.add(ln));
						else if (!i.imageResources.hasOwnProperty(on)) {
							i.imageResources[on] = Wr;
							var un = n.crossOrigin, dn = typeof un == "string" ? un === "use-credentials" ? un : "" : void 0, fn = a.headers, pn;
							fn && 0 < fn.remainingCapacity && typeof n.srcSet != "string" && (n.fetchPriority === "high" || 500 > fn.highImagePreloads.length) && (pn = Ae(rn, "image", {
								imageSrcSet: n.srcSet,
								imageSizes: n.sizes,
								crossOrigin: dn,
								integrity: n.integrity,
								nonce: n.nonce,
								type: n.type,
								fetchPriority: n.fetchPriority,
								referrerPolicy: n.refererPolicy
							}), 0 <= (fn.remainingCapacity -= pn.length + 2)) ? (a.resets.image[on] = Wr, fn.highImagePreloads && (fn.highImagePreloads += ", "), fn.highImagePreloads += pn) : (ln = [], W(ln, {
								rel: "preload",
								as: "image",
								href: $ ? void 0 : rn,
								imageSrcSet: $,
								imageSizes: an,
								crossOrigin: dn,
								integrity: n.integrity,
								type: n.type,
								fetchPriority: n.fetchPriority,
								referrerPolicy: n.referrerPolicy
							}), n.fetchPriority === "high" || 10 > a.highImagePreloads.size ? a.highImagePreloads.add(ln) : (a.bulkPreloads.add(ln), sn.set(on, ln)));
						}
					}
					return ie(e, n, "img");
				case "base":
				case "area":
				case "br":
				case "col":
				case "embed":
				case "hr":
				case "keygen":
				case "param":
				case "source":
				case "track":
				case "wbr": return ie(e, n, t);
				case "annotation-xml":
				case "color-profile":
				case "font-face":
				case "font-face-src":
				case "font-face-uri":
				case "font-face-format":
				case "font-face-name":
				case "missing-glyph": break;
				case "head":
					if (c.insertionMode < Zr) {
						var mn = o || a.preamble;
						if (mn.headChunks) throw Error("The `<head>` tag may only be rendered once.");
						o !== null && e.push("<!--head-->"), mn.headChunks = [];
						var hn = se(mn.headChunks, n, "head");
					} else hn = G(e, n, "head");
					return hn;
				case "body":
					if (c.insertionMode < Zr) {
						var gn = o || a.preamble;
						if (gn.bodyChunks) throw Error("The `<body>` tag may only be rendered once.");
						o !== null && e.push("<!--body-->"), gn.bodyChunks = [];
						var _n = se(gn.bodyChunks, n, "body");
					} else _n = G(e, n, "body");
					return _n;
				case "html":
					if (c.insertionMode === Yr) {
						var vn = o || a.preamble;
						if (vn.htmlChunks) throw Error("The `<html>` tag may only be rendered once.");
						o !== null && e.push("<!--html-->"), vn.htmlChunks = [io];
						var yn = se(vn.htmlChunks, n, "html");
					} else yn = G(e, n, "html");
					return yn;
				default: if (t.indexOf("-") !== -1) {
					e.push(ce(t));
					var bn = null, xn = null, Sn;
					for (Sn in n) if (nr.call(n, Sn)) {
						var Cn = n[Sn];
						if (Cn != null) {
							var wn = Sn;
							switch (Sn) {
								case "children":
									bn = Cn;
									break;
								case "dangerouslySetInnerHTML":
									xn = Cn;
									break;
								case "style":
									F(e, Cn);
									break;
								case "suppressContentEditableWarning":
								case "suppressHydrationWarning":
								case "ref": break;
								case "className": wn = "class";
								default: if (y(Sn) && typeof Cn != "function" && typeof Cn != "symbol" && !1 !== Cn) {
									if (!0 === Cn) Cn = "";
									else if (typeof Cn == "object") continue;
									e.push(li, wn, ui, E(Cn), di);
								}
							}
						}
					}
					return e.push(mi), te(e, xn, bn), bn;
				}
			}
			return G(e, n, t);
		}
		function ue(e) {
			var t = Mi.get(e);
			return t === void 0 && (t = "</" + e + ">", Mi.set(e, t)), t;
		}
		function K(e, t) {
			e = e.preamble, e.htmlChunks === null && t.htmlChunks && (e.htmlChunks = t.htmlChunks), e.headChunks === null && t.headChunks && (e.headChunks = t.headChunks), e.bodyChunks === null && t.bodyChunks && (e.bodyChunks = t.bodyChunks);
		}
		function de(e, t) {
			t = t.bootstrapChunks;
			for (var n = 0; n < t.length - 1; n++) e.push(t[n]);
			return n < t.length ? (n = t[n], t.length = 0, e.push(n)) : !0;
		}
		function fe(e, t, n) {
			if (e.push(Li), n === null) throw Error("An ID must have been assigned before we can complete the boundary.");
			return e.push(t.boundaryPrefix), t = n.toString(16), e.push(t), e.push(Ri);
		}
		function pe(e, t, n, i) {
			switch (n.insertionMode) {
				case Yr:
				case Xr:
				case Qr:
				case Zr: return e.push(Ji), e.push(t.segmentPrefix), t = i.toString(16), e.push(t), e.push(Yi);
				case $r: return e.push(Zi), e.push(t.segmentPrefix), t = i.toString(16), e.push(t), e.push(Qi);
				case ei: return e.push(ea), e.push(t.segmentPrefix), t = i.toString(16), e.push(t), e.push(ta);
				case ti: return e.push(ra), e.push(t.segmentPrefix), t = i.toString(16), e.push(t), e.push(ia);
				case ni: return e.push(oa), e.push(t.segmentPrefix), t = i.toString(16), e.push(t), e.push(sa);
				case ri: return e.push(la), e.push(t.segmentPrefix), t = i.toString(16), e.push(t), e.push(ua);
				case ii: return e.push(fa), e.push(t.segmentPrefix), t = i.toString(16), e.push(t), e.push(pa);
				default: throw Error("Unknown insertion mode. This is a bug in React.");
			}
		}
		function me(e, t) {
			switch (t.insertionMode) {
				case Yr:
				case Xr:
				case Qr:
				case Zr: return e.push(Xi);
				case $r: return e.push($i);
				case ei: return e.push(na);
				case ti: return e.push(aa);
				case ni: return e.push(ca);
				case ri: return e.push(da);
				case ii: return e.push(ma);
				default: throw Error("Unknown insertion mode. This is a bug in React.");
			}
		}
		function he(e) {
			return JSON.stringify(e).replace(Na, function(e) {
				switch (e) {
					case "<": return "\\u003c";
					case "\u2028": return "\\u2028";
					case "\u2029": return "\\u2029";
					default: throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
				}
			});
		}
		function ge(e) {
			return JSON.stringify(e).replace(Pa, function(e) {
				switch (e) {
					case "&": return "\\u0026";
					case ">": return "\\u003e";
					case "<": return "\\u003c";
					case "\u2028": return "\\u2028";
					case "\u2029": return "\\u2029";
					default: throw Error("escapeJSObjectForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
				}
			});
		}
		function _e(e) {
			var t = e.rules, n = e.hrefs;
			0 < t.length && n.length === 0 && console.error("React expected to have at least one href for an a hoistable style but found none. This is a bug in React.");
			var i = 0;
			if (n.length) {
				for (this.push(Gr.startInlineStyle), this.push(Fa), this.push(e.precedence), this.push(Ia); i < n.length - 1; i++) this.push(n[i]), this.push(Wa);
				for (this.push(n[i]), this.push(La), i = 0; i < t.length; i++) this.push(t[i]);
				Ba = this.push(Ra), za = !0, t.length = 0, n.length = 0;
			}
		}
		function ve(e) {
			return e.state === eo ? !1 : za = !0;
		}
		function ye(e, t, n) {
			return za = !1, Ba = !0, Gr = n, t.styles.forEach(_e, e), Gr = null, t.stylesheets.forEach(ve), za && (n.stylesToHoist = !0), Ba;
		}
		function be(e) {
			for (var t = 0; t < e.length; t++) this.push(e[t]);
			e.length = 0;
		}
		function xe(e) {
			W(Va, e.props);
			for (var t = 0; t < Va.length; t++) this.push(Va[t]);
			Va.length = 0, e.state = eo;
		}
		function Se(e) {
			var t = 0 < e.sheets.size;
			e.sheets.forEach(xe, this), e.sheets.clear();
			var n = e.rules, i = e.hrefs;
			if (!t || i.length) {
				if (this.push(Gr.startInlineStyle), this.push(Ha), this.push(e.precedence), e = 0, i.length) {
					for (this.push(Ua); e < i.length - 1; e++) this.push(i[e]), this.push(Wa);
					this.push(i[e]);
				}
				for (this.push(Ga), e = 0; e < n.length; e++) this.push(n[e]);
				this.push(Ka), n.length = 0, i.length = 0;
			}
		}
		function Ce(e) {
			if (e.state === Qa) {
				e.state = $a;
				var t = e.props;
				for (W(Va, {
					rel: "preload",
					as: "style",
					href: e.props.href,
					crossOrigin: t.crossOrigin,
					fetchPriority: t.fetchPriority,
					integrity: t.integrity,
					media: t.media,
					hrefLang: t.hrefLang,
					referrerPolicy: t.referrerPolicy
				}), e = 0; e < Va.length; e++) this.push(Va[e]);
				Va.length = 0;
			}
		}
		function we(e) {
			e.sheets.forEach(Ce, this), e.sheets.clear();
		}
		function q(e, t) {
			(t.instructions & Vr) === Ir && (t.instructions |= Vr, e.push(qa, E("_" + t.idPrefix + "R_"), di));
		}
		function Te(e, t) {
			e.push(Ja);
			var n = Ja;
			t.stylesheets.forEach(function(t) {
				if (t.state !== eo) if (t.state === to) e.push(n), t = t.props.href, g(t, "href"), t = ge("" + t), e.push(t), e.push(Za), n = Ya;
				else {
					e.push(n);
					var i = t.props["data-precedence"], a = t.props, o = D("" + t.props.href);
					for (var s in o = ge(o), e.push(o), g(i, "precedence"), i = "" + i, e.push(Xa), i = ge(i), e.push(i), a) if (nr.call(a, s) && (i = a[s], i != null)) switch (s) {
						case "href":
						case "rel":
						case "precedence":
						case "data-precedence": break;
						case "children":
						case "dangerouslySetInnerHTML": throw Error("link is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
						default: Ee(e, s, i);
					}
					e.push(Za), n = Ya, t.state = to;
				}
			}), e.push(Za);
		}
		function Ee(e, t, n) {
			var i = t.toLowerCase();
			switch (typeof n) {
				case "function":
				case "symbol": return;
			}
			switch (t) {
				case "innerHTML":
				case "dangerouslySetInnerHTML":
				case "suppressContentEditableWarning":
				case "suppressHydrationWarning":
				case "style":
				case "ref": return;
				case "className":
					i = "class", g(n, i), t = "" + n;
					break;
				case "hidden":
					if (!1 === n) return;
					t = "";
					break;
				case "src":
				case "href":
					n = D(n), g(n, i), t = "" + n;
					break;
				default:
					if (2 < t.length && (t[0] === "o" || t[0] === "O") && (t[1] === "n" || t[1] === "N") || !y(t)) return;
					g(n, i), t = "" + n;
			}
			e.push(Xa), i = ge(i), e.push(i), e.push(Xa), i = ge(t), e.push(i);
		}
		function De() {
			return {
				styles: /* @__PURE__ */ new Set(),
				stylesheets: /* @__PURE__ */ new Set(),
				suspenseyImages: !1
			};
		}
		function Oe(e, t, n, i) {
			(e.scriptResources.hasOwnProperty(n) || e.moduleScriptResources.hasOwnProperty(n)) && console.error("Internal React Error: React expected bootstrap script or module with src \"%s\" to not have been preloaded already. please file an issue", n), e.scriptResources[n] = Ur, e.moduleScriptResources[n] = Ur, e = [], W(e, i), t.bootstrapScripts.add(e);
		}
		function ke(e, t) {
			e.crossOrigin ??= t[0], e.integrity ??= t[1];
		}
		function Ae(e, t, n) {
			for (var i in e = je(e), t = Ne(t, "as"), t = "<" + e + ">; rel=preload; as=\"" + t + "\"", n) nr.call(n, i) && (e = n[i], typeof e == "string" && (t += "; " + i.toLowerCase() + "=\"" + Ne(e, i) + "\""));
			return t;
		}
		function je(e) {
			return g(e, "href"), ("" + e).replace(no, Me);
		}
		function Me(e) {
			switch (e) {
				case "<": return "%3C";
				case ">": return "%3E";
				case "\n": return "%0A";
				case "\r": return "%0D";
				default: throw Error("escapeLinkHrefForHeaderContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
			}
		}
		function Ne(e, t) {
			return p(e) && (console.error("The provided `%s` option is an unsupported type %s. This value must be coerced to a string before using it here.", t, d(e)), m(e)), ("" + e).replace(ro, Pe);
		}
		function Pe(e) {
			switch (e) {
				case "\"": return "%22";
				case "'": return "%27";
				case ";": return "%3B";
				case ",": return "%2C";
				case "\n": return "%0A";
				case "\r": return "%0D";
				default: throw Error("escapeStringForLinkHeaderQuotedParamValueContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
			}
		}
		function Fe(e) {
			this.styles.add(e);
		}
		function Ie(e) {
			this.stylesheets.add(e);
		}
		function Le(e, t) {
			t.styles.forEach(Fe, e), t.stylesheets.forEach(Ie, e), t.suspenseyImages && (e.suspenseyImages = !0);
		}
		function Re(e, t) {
			var n = e.idPrefix, i = [], a = e.bootstrapScriptContent, o = e.bootstrapScripts, s = e.bootstrapModules;
			if (a !== void 0 && (i.push("<script"), q(i, e), i.push(mi, O(a), Kr)), n = {
				placeholderPrefix: n + "P:",
				segmentPrefix: n + "S:",
				boundaryPrefix: n + "B:",
				startInlineScript: "<script",
				startInlineStyle: "<style",
				preamble: {
					htmlChunks: null,
					headChunks: null,
					bodyChunks: null
				},
				externalRuntimeScript: null,
				bootstrapChunks: i,
				importMapChunks: [],
				onHeaders: void 0,
				headers: null,
				resets: {
					font: {},
					dns: {},
					connect: {
						default: {},
						anonymous: {},
						credentials: {}
					},
					image: {},
					style: {}
				},
				charsetChunks: [],
				viewportChunks: [],
				hoistableChunks: [],
				preconnects: /* @__PURE__ */ new Set(),
				fontPreloads: /* @__PURE__ */ new Set(),
				highImagePreloads: /* @__PURE__ */ new Set(),
				styles: /* @__PURE__ */ new Map(),
				bootstrapScripts: /* @__PURE__ */ new Set(),
				scripts: /* @__PURE__ */ new Set(),
				bulkPreloads: /* @__PURE__ */ new Set(),
				preloads: {
					images: /* @__PURE__ */ new Map(),
					stylesheets: /* @__PURE__ */ new Map(),
					scripts: /* @__PURE__ */ new Map(),
					moduleScripts: /* @__PURE__ */ new Map()
				},
				nonce: {
					script: void 0,
					style: void 0
				},
				hoistableState: null,
				stylesToHoist: !1
			}, o !== void 0) for (a = 0; a < o.length; a++) {
				var c = o[a], l, u = void 0, d = void 0, f = {
					rel: "preload",
					as: "script",
					fetchPriority: "low",
					nonce: void 0
				};
				typeof c == "string" ? f.href = l = c : (f.href = l = c.src, f.integrity = d = typeof c.integrity == "string" ? c.integrity : void 0, f.crossOrigin = u = typeof c == "string" || c.crossOrigin == null ? void 0 : c.crossOrigin === "use-credentials" ? "use-credentials" : ""), Oe(e, n, l, f), i.push("<script src=\"", E(l), di), typeof d == "string" && i.push(" integrity=\"", E(d), di), typeof u == "string" && i.push(" crossorigin=\"", E(u), di), q(i, e), i.push(" async=\"\"><\/script>");
			}
			if (s !== void 0) for (o = 0; o < s.length; o++) a = s[o], u = l = void 0, d = {
				rel: "modulepreload",
				fetchPriority: "low",
				nonce: void 0
			}, typeof a == "string" ? d.href = c = a : (d.href = c = a.src, d.integrity = u = typeof a.integrity == "string" ? a.integrity : void 0, d.crossOrigin = l = typeof a == "string" || a.crossOrigin == null ? void 0 : a.crossOrigin === "use-credentials" ? "use-credentials" : ""), Oe(e, n, c, d), i.push("<script type=\"module\" src=\"", E(c), di), typeof u == "string" && i.push(" integrity=\"", E(u), di), typeof l == "string" && i.push(" crossorigin=\"", E(l), di), q(i, e), i.push(" async=\"\"><\/script>");
			return {
				placeholderPrefix: n.placeholderPrefix,
				segmentPrefix: n.segmentPrefix,
				boundaryPrefix: n.boundaryPrefix,
				startInlineScript: n.startInlineScript,
				startInlineStyle: n.startInlineStyle,
				preamble: n.preamble,
				externalRuntimeScript: n.externalRuntimeScript,
				bootstrapChunks: n.bootstrapChunks,
				importMapChunks: n.importMapChunks,
				onHeaders: n.onHeaders,
				headers: n.headers,
				resets: n.resets,
				charsetChunks: n.charsetChunks,
				viewportChunks: n.viewportChunks,
				hoistableChunks: n.hoistableChunks,
				preconnects: n.preconnects,
				fontPreloads: n.fontPreloads,
				highImagePreloads: n.highImagePreloads,
				styles: n.styles,
				bootstrapScripts: n.bootstrapScripts,
				scripts: n.scripts,
				bulkPreloads: n.bulkPreloads,
				preloads: n.preloads,
				nonce: n.nonce,
				stylesToHoist: n.stylesToHoist,
				generateStaticMarkup: t
			};
		}
		function ze(e, t, n, i) {
			return n.generateStaticMarkup ? (e.push(E(t)), !1) : (t === "" ? e = i : (i && e.push("<!-- -->"), e.push(E(t)), e = !0), e);
		}
		function Be(e, t, n, i) {
			t.generateStaticMarkup || n && i && e.push("<!-- -->");
		}
		function Ve(e) {
			if (e == null) return null;
			if (typeof e == "function") return e.$$typeof === oo ? null : e.displayName || e.name || null;
			if (typeof e == "string") return e;
			switch (e) {
				case Fn: return "Fragment";
				case Ln: return "Profiler";
				case In: return "StrictMode";
				case Vn: return "Suspense";
				case Hn: return "SuspenseList";
				case Kn: return "Activity";
			}
			if (typeof e == "object") switch (typeof e.tag == "number" && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), e.$$typeof) {
				case Pn: return "Portal";
				case zn: return e.displayName || "Context";
				case Rn: return (e._context.displayName || "Context") + ".Consumer";
				case Bn:
					var t = e.render;
					return e = e.displayName, e ||= (e = t.displayName || t.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
				case Un: return t = e.displayName || null, t === null ? Ve(e.type) || "Memo" : t;
				case Wn:
					t = e._payload, e = e._init;
					try {
						return Ve(e(t));
					} catch {}
			}
			return null;
		}
		function He(e, t) {
			if (e !== t) {
				e.context._currentValue2 = e.parentValue, e = e.parent;
				var n = t.parent;
				if (e === null) {
					if (n !== null) throw Error("The stacks must reach the root at the same time. This is a bug in React.");
				} else {
					if (n === null) throw Error("The stacks must reach the root at the same time. This is a bug in React.");
					He(e, n);
				}
				t.context._currentValue2 = t.value;
			}
		}
		function Ue(e) {
			e.context._currentValue2 = e.parentValue, e = e.parent, e !== null && Ue(e);
		}
		function We(e) {
			var t = e.parent;
			t !== null && We(t), e.context._currentValue2 = e.value;
		}
		function Ge(e, t) {
			if (e.context._currentValue2 = e.parentValue, e = e.parent, e === null) throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
			e.depth === t.depth ? He(e, t) : Ge(e, t);
		}
		function Ke(e, t) {
			var n = t.parent;
			if (n === null) throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
			e.depth === n.depth ? He(e, n) : Ke(e, n), t.context._currentValue2 = t.value;
		}
		function J(e) {
			var t = lo;
			t !== e && (t === null ? We(e) : e === null ? Ue(t) : t.depth === e.depth ? He(t, e) : t.depth > e.depth ? Ge(t, e) : Ke(t, e), lo = e);
		}
		function qe(e) {
			if (e !== null && typeof e != "function") {
				var t = String(e);
				xo.has(t) || (xo.add(t), console.error("Expected the last optional `callback` argument to be a function. Instead received: %s.", e));
			}
		}
		function Y(e, t) {
			e = (e = e.constructor) && Ve(e) || "ReactClass";
			var n = e + "." + t;
			uo[n] || (console.error("Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.\n\nPlease check the code for the %s component.", t, e), uo[n] = !0);
		}
		function X(e, t, n) {
			var i = e.id;
			e = e.overflow;
			var a = 32 - wo(i) - 1;
			i &= ~(1 << a), n += 1;
			var o = 32 - wo(t) + a;
			if (30 < o) {
				var s = a - a % 5;
				return o = (i & (1 << s) - 1).toString(32), i >>= s, a -= s, {
					id: 1 << 32 - wo(t) + a | n << a | i,
					overflow: o + e
				};
			}
			return {
				id: 1 << o | n << a | i,
				overflow: e
			};
		}
		function Je(e) {
			return e >>>= 0, e === 0 ? 32 : 31 - (To(e) / Eo | 0) | 0;
		}
		function Ye() {}
		function Xe(e, t, n) {
			switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(Ye, Ye), t = n), t.status) {
				case "fulfilled": return t.value;
				case "rejected": throw t.reason;
				default:
					switch (typeof t.status == "string" ? t.then(Ye, Ye) : (e = t, e.status = "pending", e.then(function(e) {
						if (t.status === "pending") {
							var n = t;
							n.status = "fulfilled", n.value = e;
						}
					}, function(e) {
						if (t.status === "pending") {
							var n = t;
							n.status = "rejected", n.reason = e;
						}
					})), t.status) {
						case "fulfilled": return t.value;
						case "rejected": throw t.reason;
					}
					throw Oo = t, Do;
			}
		}
		function Ze() {
			if (Oo === null) throw Error("Expected a suspended thenable. This is a bug in React. Please file an issue.");
			var e = Oo;
			return Oo = null, e;
		}
		function Qe(e, t) {
			return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
		}
		function $e() {
			if (Ao === null) throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.");
			return Go && console.error("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks"), Ao;
		}
		function et() {
			if (0 < Wo) throw Error("Rendered more hooks than during the previous render");
			return {
				memoizedState: null,
				queue: null,
				next: null
			};
		}
		function tt() {
			return Fo === null ? Po === null ? (Io = !1, Po = Fo = et()) : (Io = !0, Fo = Po) : Fo.next === null ? (Io = !1, Fo = Fo.next = et()) : (Io = !0, Fo = Fo.next), Fo;
		}
		function nt() {
			var e = Ho;
			return Ho = null, e;
		}
		function rt() {
			Go = !1, No = Mo = jo = Ao = null, Lo = !1, Po = null, Wo = 0, Fo = Uo = null;
		}
		function it(e) {
			return Go && console.error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), e._currentValue2;
		}
		function at(e, t) {
			return typeof t == "function" ? t(e) : t;
		}
		function ot(e, t, n) {
			if (e !== at && (Ko = "useReducer"), Ao = $e(), Fo = tt(), Io) {
				if (n = Fo.queue, t = n.dispatch, Uo !== null) {
					var i = Uo.get(n);
					if (i !== void 0) {
						Uo.delete(n), n = Fo.memoizedState;
						do {
							var a = i.action;
							Go = !0, n = e(n, a), Go = !1, i = i.next;
						} while (i !== null);
						return Fo.memoizedState = n, [n, t];
					}
				}
				return [Fo.memoizedState, t];
			}
			return Go = !0, e = e === at ? typeof t == "function" ? t() : t : n === void 0 ? t : n(t), Go = !1, Fo.memoizedState = e, e = Fo.queue = {
				last: null,
				dispatch: null
			}, e = e.dispatch = ct.bind(null, Ao, e), [Fo.memoizedState, e];
		}
		function st(e, t) {
			if (Ao = $e(), Fo = tt(), t = t === void 0 ? null : t, Fo !== null) {
				var n = Fo.memoizedState;
				if (n !== null && t !== null) {
					a: {
						var i = n[1];
						if (i === null) console.error("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", Ko), i = !1;
						else {
							t.length !== i.length && console.error("The final argument passed to %s changed size between renders. The order and size of this array must remain constant.\n\nPrevious: %s\nIncoming: %s", Ko, "[" + t.join(", ") + "]", "[" + i.join(", ") + "]");
							for (var a = 0; a < i.length && a < t.length; a++) if (!ko(t[a], i[a])) {
								i = !1;
								break a;
							}
							i = !0;
						}
					}
					if (i) return n[0];
				}
			}
			return Go = !0, e = e(), Go = !1, Fo.memoizedState = [e, t], e;
		}
		function ct(e, t, n) {
			if (25 <= Wo) throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
			if (e === Ao) if (Lo = !0, e = {
				action: n,
				next: null
			}, Uo === null && (Uo = /* @__PURE__ */ new Map()), n = Uo.get(t), n === void 0) Uo.set(t, e);
			else {
				for (t = n; t.next !== null;) t = t.next;
				t.next = e;
			}
		}
		function lt() {
			throw Error("A function wrapped in useEffectEvent can't be called during rendering.");
		}
		function ut() {
			throw Error("startTransition cannot be called during server rendering.");
		}
		function dt() {
			throw Error("Cannot update optimistic state while rendering.");
		}
		function ft(e, t, n) {
			$e();
			var i = zo++, a = Mo;
			if (typeof e.$$FORM_ACTION == "function") {
				var o = null, s = No;
				a = a.formState;
				var c = e.$$IS_SIGNATURE_EQUAL;
				if (a !== null && typeof c == "function") {
					var l = a[1];
					c.call(e, a[2], a[3]) && (o = n === void 0 ? "k" + u(JSON.stringify([
						s,
						null,
						i
					]), 0) : "p" + n, l === o && (Bo = i, t = a[0]));
				}
				var d = e.bind(null, t);
				return e = function(e) {
					d(e);
				}, typeof d.$$FORM_ACTION == "function" && (e.$$FORM_ACTION = function(e) {
					e = d.$$FORM_ACTION(e), n !== void 0 && (g(n, "target"), n += "", e.action = n);
					var t = e.data;
					return t && (o === null && (o = n === void 0 ? "k" + u(JSON.stringify([
						s,
						null,
						i
					]), 0) : "p" + n), t.append("$ACTION_KEY", o)), e;
				}), [
					t,
					e,
					!1
				];
			}
			var f = e.bind(null, t);
			return [
				t,
				function(e) {
					f(e);
				},
				!1
			];
		}
		function pt(e) {
			var t = Vo;
			return Vo += 1, Ho === null && (Ho = []), Xe(Ho, e, t);
		}
		function mt() {
			throw Error("Cache cannot be refreshed during server rendering.");
		}
		function ht() {}
		function gt() {
			if (Zo === 0) {
				Qo = console.log, $o = console.info, es = console.warn, ts = console.error, ns = console.group, rs = console.groupCollapsed, os = console.groupEnd;
				var e = {
					configurable: !0,
					enumerable: !0,
					value: ht,
					writable: !0
				};
				Object.defineProperties(console, {
					info: e,
					log: e,
					warn: e,
					error: e,
					group: e,
					groupCollapsed: e,
					groupEnd: e
				});
			}
			Zo++;
		}
		function _t() {
			if (Zo--, Zo === 0) {
				var e = {
					configurable: !0,
					enumerable: !0,
					writable: !0
				};
				Object.defineProperties(console, {
					log: tr({}, e, { value: Qo }),
					info: tr({}, e, { value: $o }),
					warn: tr({}, e, { value: es }),
					error: tr({}, e, { value: ts }),
					group: tr({}, e, { value: ns }),
					groupCollapsed: tr({}, e, { value: rs }),
					groupEnd: tr({}, e, { value: os })
				});
			}
			0 > Zo && console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
		}
		function vt(e) {
			var t = Error.prepareStackTrace;
			if (Error.prepareStackTrace = void 0, e = e.stack, Error.prepareStackTrace = t, e.startsWith("Error: react-stack-top-frame\n") && (e = e.slice(29)), t = e.indexOf("\n"), t !== -1 && (e = e.slice(t + 1)), t = e.indexOf("react_stack_bottom_frame"), t !== -1 && (t = e.lastIndexOf("\n", t)), t !== -1) e = e.slice(0, t);
			else return "";
			return e;
		}
		function yt(e) {
			if (ss === void 0) try {
				throw Error();
			} catch (e) {
				var t = e.stack.trim().match(/\n( *(at )?)/);
				ss = t && t[1] || "", cs = -1 < e.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
			}
			return "\n" + ss + e + cs;
		}
		function bt(e, t) {
			if (!e || ls) return "";
			var n = us.get(e);
			if (n !== void 0) return n;
			ls = !0, n = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
			var i = null;
			i = Mr.H, Mr.H = null, gt();
			try {
				var a = { DetermineComponentFrameRoot: function() {
					try {
						if (t) {
							var n = function() {
								throw Error();
							};
							if (Object.defineProperty(n.prototype, "props", { set: function() {
								throw Error();
							} }), typeof Reflect == "object" && Reflect.construct) {
								try {
									Reflect.construct(n, []);
								} catch (e) {
									var i = e;
								}
								Reflect.construct(e, [], n);
							} else {
								try {
									n.call();
								} catch (e) {
									i = e;
								}
								e.call(n.prototype);
							}
						} else {
							try {
								throw Error();
							} catch (e) {
								i = e;
							}
							(n = e()) && typeof n.catch == "function" && n.catch(function() {});
						}
					} catch (e) {
						if (e && i && typeof e.stack == "string") return [e.stack, i.stack];
					}
					return [null, null];
				} };
				a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
				var o = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
				o && o.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
				var s = a.DetermineComponentFrameRoot(), c = s[0], l = s[1];
				if (c && l) {
					var u = c.split("\n"), d = l.split("\n");
					for (s = o = 0; o < u.length && !u[o].includes("DetermineComponentFrameRoot");) o++;
					for (; s < d.length && !d[s].includes("DetermineComponentFrameRoot");) s++;
					if (o === u.length || s === d.length) for (o = u.length - 1, s = d.length - 1; 1 <= o && 0 <= s && u[o] !== d[s];) s--;
					for (; 1 <= o && 0 <= s; o--, s--) if (u[o] !== d[s]) {
						if (o !== 1 || s !== 1) do
							if (o--, s--, 0 > s || u[o] !== d[s]) {
								var f = "\n" + u[o].replace(" at new ", " at ");
								return e.displayName && f.includes("<anonymous>") && (f = f.replace("<anonymous>", e.displayName)), typeof e == "function" && us.set(e, f), f;
							}
						while (1 <= o && 0 <= s);
						break;
					}
				}
			} finally {
				ls = !1, Mr.H = i, _t(), Error.prepareStackTrace = n;
			}
			return u = (u = e ? e.displayName || e.name : "") ? yt(u) : "", typeof e == "function" && us.set(e, u), u;
		}
		function xt(e) {
			if (typeof e == "string") return yt(e);
			if (typeof e == "function") return e.prototype && e.prototype.isReactComponent ? bt(e, !0) : bt(e, !1);
			if (typeof e == "object" && e) {
				switch (e.$$typeof) {
					case Bn: return bt(e.render, !1);
					case Un: return bt(e.type, !1);
					case Wn:
						var t = e, n = t._payload;
						t = t._init;
						try {
							e = t(n);
						} catch {
							return yt("Lazy");
						}
						return xt(e);
				}
				if (typeof e.name == "string") {
					a: {
						if (n = e.name, t = e.env, e = e.debugLocation, e != null) {
							e = vt(e);
							var i = e.lastIndexOf("\n");
							if (e = i === -1 ? e : e.slice(i + 1), e.indexOf(n) !== -1) {
								n = "\n" + e;
								break a;
							}
						}
						n = yt(n + (t ? " [" + t + "]" : ""));
					}
					return n;
				}
			}
			switch (e) {
				case Hn: return yt("SuspenseList");
				case Vn: return yt("Suspense");
			}
			return "";
		}
		function St(e, t) {
			return (500 < t.byteSize || !1) && t.contentPreamble === null;
		}
		function Ct(e) {
			if (typeof e == "object" && e && typeof e.environmentName == "string") {
				var t = e.environmentName;
				e = [e].slice(0), typeof e[0] == "string" ? e.splice(0, 1, "[%s] " + e[0], " " + t + " ") : e.splice(0, 0, "[%s]", " " + t + " "), e.unshift(console), t = ao.apply(console.error, e), t();
			} else console.error(e);
			return null;
		}
		function wt(e, t, n, i, a, o, s, c, l, u, d) {
			var f = /* @__PURE__ */ new Set();
			this.destination = null, this.flushScheduled = !1, this.resumableState = e, this.renderState = t, this.rootFormatContext = n, this.progressiveChunkSize = i === void 0 ? 12800 : i, this.status = 10, this.fatalError = null, this.pendingRootTasks = this.allPendingTasks = this.nextSegmentId = 0, this.completedPreambleSegments = this.completedRootSegment = null, this.byteSize = 0, this.abortableTasks = f, this.pingedTasks = [], this.clientRenderedBoundaries = [], this.completedBoundaries = [], this.partialBoundaries = [], this.trackedPostpones = null, this.onError = a === void 0 ? Ct : a, this.onPostpone = u === void 0 ? Ye : u, this.onAllReady = o === void 0 ? Ye : o, this.onShellReady = s === void 0 ? Ye : s, this.onShellError = c === void 0 ? Ye : c, this.onFatalError = l === void 0 ? Ye : l, this.formState = d === void 0 ? null : d, this.didWarnForKey = null;
		}
		function Tt(e, t, n, i, a, o, s, c, l, u, d, f) {
			var p = ys();
			return 1e3 < p - _s && (Mr.recentlyCreatedOwnerStacks = 0, _s = p), t = new wt(t, n, i, a, o, s, c, l, u, d, f), n = At(t, 0, null, i, !1, !1), n.parentFlushed = !0, e = Ot(t, null, e, -1, null, n, null, null, t.abortableTasks, null, i, null, Co, null, null, so, null), Pt(e), t.pingedTasks.push(e), t;
		}
		function Et(e, t) {
			e.pingedTasks.push(t), e.pingedTasks.length === 1 && (e.flushScheduled = e.destination !== null, mn(e));
		}
		function Dt(e, t, n, i, a) {
			return n = {
				status: Ss,
				rootSegmentID: -1,
				parentFlushed: !1,
				pendingTasks: 0,
				row: t,
				completedSegments: [],
				byteSize: 0,
				fallbackAbortableTasks: n,
				errorDigest: null,
				contentState: De(),
				fallbackState: De(),
				contentPreamble: i,
				fallbackPreamble: a,
				trackedContentKeyPath: null,
				trackedFallbackNode: null,
				errorMessage: null,
				errorStack: null,
				errorComponentStack: null
			}, t !== null && (t.pendingTasks++, i = t.boundaries, i !== null && (e.allPendingTasks++, n.pendingTasks++, i.push(n)), e = t.inheritedHoistables, e !== null && Le(n.contentState, e)), n;
		}
		function Ot(e, t, n, i, a, o, s, c, l, u, d, f, p, m, h, g, _) {
			e.allPendingTasks++, a === null ? e.pendingRootTasks++ : a.pendingTasks++, m !== null && m.pendingTasks++;
			var v = {
				replay: null,
				node: n,
				childIndex: i,
				ping: function() {
					return Et(e, v);
				},
				blockedBoundary: a,
				blockedSegment: o,
				blockedPreamble: s,
				hoistableState: c,
				abortSet: l,
				keyPath: u,
				formatContext: d,
				context: f,
				treeContext: p,
				row: m,
				componentStack: h,
				thenableState: t
			};
			return v.debugTask = _, l.add(v), v;
		}
		function kt(e, t, n, i, a, o, s, c, l, u, d, f, p, m, h, g) {
			e.allPendingTasks++, o === null ? e.pendingRootTasks++ : o.pendingTasks++, p !== null && p.pendingTasks++, n.pendingTasks++;
			var _ = {
				replay: n,
				node: i,
				childIndex: a,
				ping: function() {
					return Et(e, _);
				},
				blockedBoundary: o,
				blockedSegment: null,
				blockedPreamble: null,
				hoistableState: s,
				abortSet: c,
				keyPath: l,
				formatContext: u,
				context: d,
				treeContext: f,
				row: p,
				componentStack: m,
				thenableState: t
			};
			return _.debugTask = g, c.add(_), _;
		}
		function At(e, t, n, i, a, o) {
			return {
				status: Ss,
				parentFlushed: !1,
				id: -1,
				index: t,
				chunks: [],
				children: [],
				preambleChildren: [],
				parentFormatContext: i,
				boundary: n,
				lastPushedText: a,
				textEmbedded: o
			};
		}
		function jt() {
			if (Yo === null || Yo.componentStack === null) return "";
			var e = Yo.componentStack;
			try {
				var t = "";
				if (typeof e.type == "string") t += yt(e.type);
				else if (typeof e.type == "function") {
					if (!e.owner) {
						var n = t, i = e.type, a = i ? i.displayName || i.name : "", o = a ? yt(a) : "";
						t = n + o;
					}
				} else e.owner || (t += xt(e.type));
				for (; e;) n = null, e.debugStack == null ? (o = e, o.stack != null && (n = typeof o.stack == "string" ? o.stack : o.stack = vt(o.stack))) : n = vt(e.debugStack), (e = e.owner) && n && (t += "\n" + n);
				var s = t;
			} catch (e) {
				s = "\nError generating stack: " + e.message + "\n" + e.stack;
			}
			return s;
		}
		function Mt(e, t) {
			if (t != null) for (var n = t.length - 1; 0 <= n; n--) {
				var i = t[n];
				if (typeof i.name == "string" || typeof i.time == "number") break;
				if (i.awaited != null) {
					var a = i.debugStack == null ? i.awaited : i;
					if (a.debugStack !== void 0) {
						e.componentStack = {
							parent: e.componentStack,
							type: i,
							owner: a.owner,
							stack: a.debugStack
						}, e.debugTask = a.debugTask;
						break;
					}
				}
			}
		}
		function Nt(e, t) {
			if (t != null) for (var n = 0; n < t.length; n++) {
				var i = t[n];
				typeof i.name == "string" && i.debugStack !== void 0 && (e.componentStack = {
					parent: e.componentStack,
					type: i,
					owner: i.owner,
					stack: i.debugStack
				}, e.debugTask = i.debugTask);
			}
		}
		function Pt(e) {
			var t = e.node;
			if (typeof t == "object" && t) switch (t.$$typeof) {
				case Nn:
					var n = t.type, i = t._owner, a = t._debugStack;
					Nt(e, t._debugInfo), e.debugTask = t._debugTask, e.componentStack = {
						parent: e.componentStack,
						type: n,
						owner: i,
						stack: a
					};
					break;
				case Wn:
					Nt(e, t._debugInfo);
					break;
				default: typeof t.then == "function" && Nt(e, t._debugInfo);
			}
		}
		function Ft(e) {
			return e === null ? null : {
				parent: e.parent,
				type: "Suspense Fallback",
				owner: e.owner,
				stack: e.stack
			};
		}
		function It(e) {
			var t = {};
			return e && Object.defineProperty(t, "componentStack", {
				configurable: !0,
				enumerable: !0,
				get: function() {
					try {
						var n = "", i = e;
						do
							n += xt(i.type), i = i.parent;
						while (i);
						var a = n;
					} catch (e) {
						a = "\nError generating stack: " + e.message + "\n" + e.stack;
					}
					return Object.defineProperty(t, "componentStack", { value: a }), a;
				}
			}), t;
		}
		function Lt(e, t, n, i, a) {
			e.errorDigest = t, n instanceof Error ? (t = String(n.message), n = String(n.stack)) : (t = typeof n == "object" && n ? l(n) : String(n), n = null), a = a ? "Switched to client rendering because the server rendering aborted due to:\n\n" : "Switched to client rendering because the server rendering errored:\n\n", e.errorMessage = a + t, e.errorStack = n === null ? null : a + n, e.errorComponentStack = i.componentStack;
		}
		function Rt(e, t, n, i) {
			if (e = e.onError, t = i ? i.run(e.bind(null, t, n)) : e(t, n), t != null && typeof t != "string") console.error("onError returned something with a type other than \"string\". onError should return a string and may return null or undefined but must not return anything else. It received something of type \"%s\" instead", typeof t);
			else return t;
		}
		function zt(e, t, n, i) {
			n = e.onShellError;
			var a = e.onFatalError;
			i ? (i.run(n.bind(null, t)), i.run(a.bind(null, t))) : (n(t), a(t)), e.destination === null ? (e.status = 13, e.fatalError = t) : (e.status = Os, e.destination.destroy(t));
		}
		function Bt(e, t) {
			Vt(e, t.next, t.hoistables);
		}
		function Vt(e, t, n) {
			for (; t !== null;) {
				n !== null && (Le(t.hoistables, n), t.inheritedHoistables = n);
				var i = t.boundaries;
				if (i !== null) {
					t.boundaries = null;
					for (var a = 0; a < i.length; a++) {
						var o = i[a];
						n !== null && Le(o.contentState, n), pn(e, o, null, null);
					}
				}
				if (t.pendingTasks--, 0 < t.pendingTasks) break;
				n = t.hoistables, t = t.next;
			}
		}
		function Ht(e, t) {
			var n = t.boundaries;
			if (n !== null && t.pendingTasks === n.length) {
				for (var i = !0, a = 0; a < n.length; a++) {
					var o = n[a];
					if (o.pendingTasks !== 1 || o.parentFlushed || St(e, o)) {
						i = !1;
						break;
					}
				}
				i && Vt(e, t, t.hoistables);
			}
		}
		function Ut(e) {
			var t = {
				pendingTasks: 1,
				boundaries: null,
				hoistables: De(),
				inheritedHoistables: null,
				together: !1,
				next: null
			};
			return e !== null && 0 < e.pendingTasks && (t.pendingTasks++, t.boundaries = [], e.next = t), t;
		}
		function Wt(e, t, n, i, a) {
			var o = t.keyPath, s = t.treeContext, c = t.row, l = t.componentStack, u = t.debugTask;
			Nt(t, t.node.props.children._debugInfo), t.keyPath = n, n = i.length;
			var d = null;
			if (t.replay !== null) {
				var f = t.replay.slots;
				if (typeof f == "object" && f) for (var p = 0; p < n; p++) {
					var m = a !== "backwards" && a !== "unstable_legacy-backwards" ? p : n - 1 - p, h = i[m];
					t.row = d = Ut(d), t.treeContext = X(s, n, m);
					var g = f[m];
					typeof g == "number" ? (Jt(e, t, g, h, m), delete f[m]) : $(e, t, h, m), --d.pendingTasks === 0 && Bt(e, d);
				}
				else for (f = 0; f < n; f++) p = a !== "backwards" && a !== "unstable_legacy-backwards" ? f : n - 1 - f, m = i[p], Q(e, t, m), t.row = d = Ut(d), t.treeContext = X(s, n, p), $(e, t, m, p), --d.pendingTasks === 0 && Bt(e, d);
			} else if (a !== "backwards" && a !== "unstable_legacy-backwards") for (a = 0; a < n; a++) f = i[a], Q(e, t, f), t.row = d = Ut(d), t.treeContext = X(s, n, a), $(e, t, f, a), --d.pendingTasks === 0 && Bt(e, d);
			else {
				for (a = t.blockedSegment, f = a.children.length, p = a.chunks.length, m = n - 1; 0 <= m; m--) {
					h = i[m], t.row = d = Ut(d), t.treeContext = X(s, n, m), g = At(e, p, null, t.formatContext, m === 0 ? a.lastPushedText : !0, !0), a.children.splice(f, 0, g), t.blockedSegment = g, Q(e, t, h);
					try {
						$(e, t, h, m), Be(g.chunks, e.renderState, g.lastPushedText, g.textEmbedded), g.status = Cs, --d.pendingTasks === 0 && Bt(e, d);
					} catch (t) {
						throw g.status = e.status === 12 ? Ts : Es, t;
					}
				}
				t.blockedSegment = a, a.lastPushedText = !1;
			}
			c !== null && d !== null && 0 < d.pendingTasks && (c.pendingTasks++, d.next = c), t.treeContext = s, t.row = c, t.keyPath = o, t.componentStack = l, t.debugTask = u;
		}
		function Gt(e, t, n, i, a, o) {
			var s = t.thenableState;
			for (t.thenableState = null, Ao = {}, jo = t, Mo = e, No = n, Go = !1, zo = Ro = 0, Bo = -1, Vo = 0, Ho = s, e = fs(i, a, o); Lo;) Lo = !1, zo = Ro = 0, Bo = -1, Vo = 0, Wo += 1, Fo = null, e = i(a, o);
			return rt(), e;
		}
		function Kt(e, t, n, i, a, o, s) {
			var c = !1;
			if (o !== 0 && e.formState !== null) {
				var l = t.blockedSegment;
				if (l !== null) {
					c = !0, l = l.chunks;
					for (var u = 0; u < o; u++) u === s ? l.push("<!--F!-->") : l.push("<!--F-->");
				}
			}
			o = t.keyPath, t.keyPath = n, a ? (n = t.treeContext, t.treeContext = X(n, 1, 0), $(e, t, i, -1), t.treeContext = n) : c ? $(e, t, i, -1) : Z(e, t, i, -1), t.keyPath = o;
		}
		function qt(e, t, n, a, o, s) {
			if (typeof a == "function") if (a.prototype && a.prototype.isReactComponent) {
				var c = o;
				if ("ref" in o) for (var l in c = {}, o) l !== "ref" && (c[l] = o[l]);
				var u = a.defaultProps;
				if (u) for (var d in c === o && (c = tr({}, c, o)), u) c[d] === void 0 && (c[d] = u[d]);
				var f = c, p = so, m = a.contextType;
				if ("contextType" in a && m !== null && (m === void 0 || m.$$typeof !== zn) && !bo.has(a)) {
					bo.add(a);
					var h = m === void 0 ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof m == "object" ? m.$$typeof === Rn ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(m).join(", ") + "}." : " However, it is set to a " + typeof m + ".";
					console.error("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Ve(a) || "Component", h);
				}
				typeof m == "object" && m && (p = m._currentValue2);
				var g = new a(f, p);
				if (typeof a.getDerivedStateFromProps == "function" && (g.state === null || g.state === void 0)) {
					var _ = Ve(a) || "Component";
					po.has(_) || (po.add(_), console.error("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", _, g.state === null ? "null" : "undefined", _));
				}
				if (typeof a.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
					var v = null, y = null, b = null;
					if (typeof g.componentWillMount == "function" && !0 !== g.componentWillMount.__suppressDeprecationWarning ? v = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (v = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && !0 !== g.componentWillReceiveProps.__suppressDeprecationWarning ? y = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (y = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && !0 !== g.componentWillUpdate.__suppressDeprecationWarning ? b = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (b = "UNSAFE_componentWillUpdate"), v !== null || y !== null || b !== null) {
						var x = Ve(a) || "Component", S = typeof a.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
						ho.has(x) || (ho.add(x), console.error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n%s uses %s but also contains the following legacy lifecycles:%s%s%s\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://react.dev/link/unsafe-component-lifecycles", x, S, v === null ? "" : "\n  " + v, y === null ? "" : "\n  " + y, b === null ? "" : "\n  " + b));
					}
				}
				var C = Ve(a) || "Component";
				g.render || (a.prototype && typeof a.prototype.render == "function" ? console.error("No `render` method found on the %s instance: did you accidentally return an object from the constructor?", C) : console.error("No `render` method found on the %s instance: you may have forgotten to define `render`.", C)), !g.getInitialState || g.getInitialState.isReactClassApproved || g.state || console.error("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", C), g.getDefaultProps && !g.getDefaultProps.isReactClassApproved && console.error("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", C), g.contextType && console.error("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", C), a.childContextTypes && !yo.has(a) && (yo.add(a), console.error("%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)", C)), a.contextTypes && !vo.has(a) && (vo.add(a), console.error("%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)", C)), typeof g.componentShouldUpdate == "function" && console.error("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", C), a.prototype && a.prototype.isPureReactComponent && g.shouldComponentUpdate !== void 0 && console.error("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Ve(a) || "A pure component"), typeof g.componentDidUnmount == "function" && console.error("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", C), typeof g.componentDidReceiveProps == "function" && console.error("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", C), typeof g.componentWillRecieveProps == "function" && console.error("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", C), typeof g.UNSAFE_componentWillRecieveProps == "function" && console.error("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", C);
				var w = g.props !== f;
				g.props !== void 0 && w && console.error("When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", C), g.defaultProps && console.error("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", C, C), typeof g.getSnapshotBeforeUpdate != "function" || typeof g.componentDidUpdate == "function" || mo.has(a) || (mo.add(a), console.error("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Ve(a))), typeof g.getDerivedStateFromProps == "function" && console.error("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", C), typeof g.getDerivedStateFromError == "function" && console.error("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", C), typeof a.getSnapshotBeforeUpdate == "function" && console.error("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", C);
				var T = g.state;
				T && (typeof T != "object" || Zn(T)) && console.error("%s.state: must be set to an object or null", C), typeof g.getChildContext == "function" && typeof a.childContextTypes != "object" && console.error("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", C);
				var E = g.state === void 0 ? null : g.state;
				g.updater = So, g.props = f, g.state = E;
				var D = {
					queue: [],
					replace: !1
				};
				g._reactInternals = D;
				var O = a.contextType;
				if (g.context = typeof O == "object" && O ? O._currentValue2 : so, g.state === f) {
					var k = Ve(a) || "Component";
					go.has(k) || (go.add(k), console.error("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", k));
				}
				var A = a.getDerivedStateFromProps;
				if (typeof A == "function") {
					var M = A(f, E);
					if (M === void 0) {
						var F = Ve(a) || "Component";
						_o.has(F) || (_o.add(F), console.error("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", F));
					}
					g.state = M == null ? E : tr({}, E, M);
				}
				if (typeof a.getDerivedStateFromProps != "function" && typeof g.getSnapshotBeforeUpdate != "function" && (typeof g.UNSAFE_componentWillMount == "function" || typeof g.componentWillMount == "function")) {
					var I = g.state;
					if (typeof g.componentWillMount == "function") {
						if (!0 !== g.componentWillMount.__suppressDeprecationWarning) {
							var L = Ve(a) || "Unknown";
							fo[L] || (console.warn("componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.\n\n* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.\n\nPlease update the following components: %s", L), fo[L] = !0);
						}
						g.componentWillMount();
					}
					if (typeof g.UNSAFE_componentWillMount == "function" && g.UNSAFE_componentWillMount(), I !== g.state && (console.error("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Ve(a) || "Component"), So.enqueueReplaceState(g, g.state, null)), D.queue !== null && 0 < D.queue.length) {
						var R = D.queue, ee = D.replace;
						if (D.queue = null, D.replace = !1, ee && R.length === 1) g.state = R[0];
						else {
							for (var z = ee ? R[0] : g.state, B = !0, V = ee ? 1 : 0; V < R.length; V++) {
								var te = R[V], H = typeof te == "function" ? te.call(g, z, f, void 0) : te;
								H != null && (B ? (B = !1, z = tr({}, z, H)) : tr(z, H));
							}
							g.state = z;
						}
					} else D.queue = null;
				}
				var U = ms(g);
				if (e.status === 12) throw null;
				g.props !== f && (Ps || console.error("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Ve(a) || "a component"), Ps = !0);
				var ne = t.keyPath;
				t.keyPath = n, Z(e, t, U, -1), t.keyPath = ne;
			} else {
				if (a.prototype && typeof a.prototype.render == "function") {
					var W = Ve(a) || "Unknown";
					As[W] || (console.error("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", W, W), As[W] = !0);
				}
				var re = Gt(e, t, n, a, o, void 0);
				if (e.status === 12) throw null;
				var ie = Ro !== 0, ae = zo, oe = Bo;
				if (a.contextTypes) {
					var se = Ve(a) || "Unknown";
					js[se] || (js[se] = !0, console.error("%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)", se));
				}
				if (a && a.childContextTypes && console.error("childContextTypes cannot be defined on a function component.\n  %s.childContextTypes = ...", a.displayName || a.name || "Component"), typeof a.getDerivedStateFromProps == "function") {
					var G = Ve(a) || "Unknown";
					Ns[G] || (console.error("%s: Function components do not support getDerivedStateFromProps.", G), Ns[G] = !0);
				}
				if (typeof a.contextType == "object" && a.contextType !== null) {
					var ce = Ve(a) || "Unknown";
					Ms[ce] || (console.error("%s: Function components do not support contextType.", ce), Ms[ce] = !0);
				}
				Kt(e, t, n, re, ie, ae, oe);
			}
			else if (typeof a == "string") {
				var K = t.blockedSegment;
				if (K === null) {
					var de = o.children, fe = t.formatContext, pe = t.keyPath;
					t.formatContext = j(fe, a, o), t.keyPath = n, $(e, t, de, -1), t.formatContext = fe, t.keyPath = pe;
				} else {
					var me = le(K.chunks, a, o, e.resumableState, e.renderState, t.blockedPreamble, t.hoistableState, t.formatContext, K.lastPushedText);
					K.lastPushedText = !1;
					var he = t.formatContext, ge = t.keyPath;
					if (t.keyPath = n, (t.formatContext = j(he, a, o)).insertionMode === Qr) {
						var _e = At(e, 0, null, t.formatContext, !1, !1);
						K.preambleChildren.push(_e), t.blockedSegment = _e;
						try {
							_e.status = 6, $(e, t, me, -1), Be(_e.chunks, e.renderState, _e.lastPushedText, _e.textEmbedded), _e.status = Cs;
						} finally {
							t.blockedSegment = K;
						}
					} else $(e, t, me, -1);
					t.formatContext = he, t.keyPath = ge;
					a: {
						var ve = K.chunks, ye = e.resumableState;
						switch (a) {
							case "title":
							case "style":
							case "script":
							case "area":
							case "base":
							case "br":
							case "col":
							case "embed":
							case "hr":
							case "img":
							case "input":
							case "keygen":
							case "link":
							case "meta":
							case "param":
							case "source":
							case "track":
							case "wbr": break a;
							case "body":
								if (he.insertionMode <= Xr) {
									ye.hasBody = !0;
									break a;
								}
								break;
							case "html":
								if (he.insertionMode === Yr) {
									ye.hasHtml = !0;
									break a;
								}
								break;
							case "head": if (he.insertionMode <= Xr) break a;
						}
						ve.push(ue(a));
					}
					K.lastPushedText = !1;
				}
			} else {
				switch (a) {
					case qn:
					case In:
					case Ln:
					case Fn:
						var be = t.keyPath;
						t.keyPath = n, Z(e, t, o.children, -1), t.keyPath = be;
						return;
					case Kn:
						var xe = t.blockedSegment;
						if (xe === null) {
							if (o.mode !== "hidden") {
								var Se = t.keyPath;
								t.keyPath = n, $(e, t, o.children, -1), t.keyPath = Se;
							}
						} else if (o.mode !== "hidden") {
							e.renderState.generateStaticMarkup || xe.chunks.push("<!--&-->"), xe.lastPushedText = !1;
							var Ce = t.keyPath;
							t.keyPath = n, $(e, t, o.children, -1), t.keyPath = Ce, e.renderState.generateStaticMarkup || xe.chunks.push("<!--/&-->"), xe.lastPushedText = !1;
						}
						return;
					case Hn:
						a: {
							var we = o.children, q = o.revealOrder;
							if (q === "forwards" || q === "backwards" || q === "unstable_legacy-backwards") {
								if (Zn(we)) {
									Wt(e, t, n, we, q);
									break a;
								}
								var Te = i(we);
								if (Te) {
									var Ee = Te.call(we);
									if (Ee) {
										Xt(t, we, -1, Ee, Te);
										var De = Ee.next();
										if (!De.done) {
											var Oe = [];
											do
												Oe.push(De.value), De = Ee.next();
											while (!De.done);
											Wt(e, t, n, we, q);
										}
										break a;
									}
								}
							}
							if (q === "together") {
								var ke = t.keyPath, Ae = t.row, je = t.row = Ut(null);
								je.boundaries = [], je.together = !0, t.keyPath = n, Z(e, t, we, -1), --je.pendingTasks === 0 && Bt(e, je), t.keyPath = ke, t.row = Ae, Ae !== null && 0 < je.pendingTasks && (Ae.pendingTasks++, je.next = Ae);
							} else {
								var Me = t.keyPath;
								t.keyPath = n, Z(e, t, we, -1), t.keyPath = Me;
							}
						}
						return;
					case Yn:
					case Gn: throw Error("ReactDOMServer does not yet support scope components.");
					case Vn:
						a: if (t.replay !== null) {
							var Ne = t.keyPath, Pe = t.formatContext, Fe = t.row;
							t.keyPath = n, t.formatContext = P(e.resumableState, Pe), t.row = null;
							var Ie = o.children;
							try {
								$(e, t, Ie, -1);
							} finally {
								t.keyPath = Ne, t.formatContext = Pe, t.row = Fe;
							}
						} else {
							var Le = t.keyPath, Re = t.formatContext, ze = t.row, He = t.blockedBoundary, Ue = t.blockedPreamble, We = t.hoistableState, Ge = t.blockedSegment, Ke = o.fallback, J = o.children, qe = /* @__PURE__ */ new Set(), Y = Dt(e, t.row, qe, null, null);
							e.trackedPostpones !== null && (Y.trackedContentKeyPath = n);
							var X = At(e, Ge.chunks.length, Y, t.formatContext, !1, !1);
							Ge.children.push(X), Ge.lastPushedText = !1;
							var Je = At(e, 0, null, t.formatContext, !1, !1);
							if (Je.parentFlushed = !0, e.trackedPostpones !== null) {
								var Ye = t.componentStack, Xe = [
									n[0],
									"Suspense Fallback",
									n[2]
								], Ze = [
									Xe[1],
									Xe[2],
									[],
									null
								];
								e.trackedPostpones.workingMap.set(Xe, Ze), Y.trackedFallbackNode = Ze, t.blockedSegment = X, t.blockedPreamble = Y.fallbackPreamble, t.keyPath = Xe, t.formatContext = N(e.resumableState, Re), t.componentStack = Ft(Ye), X.status = 6;
								try {
									$(e, t, Ke, -1), Be(X.chunks, e.renderState, X.lastPushedText, X.textEmbedded), X.status = Cs;
								} catch (t) {
									throw X.status = e.status === 12 ? Ts : Es, t;
								} finally {
									t.blockedSegment = Ge, t.blockedPreamble = Ue, t.keyPath = Le, t.formatContext = Re;
								}
								var Qe = Ot(e, null, J, -1, Y, Je, Y.contentPreamble, Y.contentState, t.abortSet, n, P(e.resumableState, t.formatContext), t.context, t.treeContext, null, Ye, so, t.debugTask);
								Pt(Qe), e.pingedTasks.push(Qe);
							} else {
								t.blockedBoundary = Y, t.blockedPreamble = Y.contentPreamble, t.hoistableState = Y.contentState, t.blockedSegment = Je, t.keyPath = n, t.formatContext = P(e.resumableState, Re), t.row = null, Je.status = 6;
								try {
									if ($(e, t, J, -1), Be(Je.chunks, e.renderState, Je.lastPushedText, Je.textEmbedded), Je.status = Cs, fn(Y, Je), Y.pendingTasks === 0 && Y.status === Ss) {
										if (Y.status = Cs, !St(e, Y)) {
											ze !== null && --ze.pendingTasks === 0 && Bt(e, ze), e.pendingRootTasks === 0 && t.blockedPreamble && _n(e);
											break a;
										}
									} else ze !== null && ze.together && Ht(e, ze);
								} catch (n) {
									if (Y.status = xs, e.status === 12) {
										Je.status = Ts;
										var $e = e.fatalError;
									} else Je.status = Es, $e = n;
									var et = It(t.componentStack), tt = Rt(e, $e, et, t.debugTask);
									Lt(Y, tt, $e, et, !1), tn(e, Y);
								} finally {
									t.blockedBoundary = He, t.blockedPreamble = Ue, t.hoistableState = We, t.blockedSegment = Ge, t.keyPath = Le, t.formatContext = Re, t.row = ze;
								}
								var nt = Ot(e, null, Ke, -1, He, X, Y.fallbackPreamble, Y.fallbackState, qe, [
									n[0],
									"Suspense Fallback",
									n[2]
								], N(e.resumableState, t.formatContext), t.context, t.treeContext, t.row, Ft(t.componentStack), so, t.debugTask);
								Pt(nt), e.pingedTasks.push(nt);
							}
						}
						return;
				}
				if (typeof a == "object" && a) switch (a.$$typeof) {
					case Bn:
						if ("ref" in o) {
							var rt = {};
							for (var it in o) it !== "ref" && (rt[it] = o[it]);
						} else rt = o;
						var at = Gt(e, t, n, a.render, rt, s);
						Kt(e, t, n, at, Ro !== 0, zo, Bo);
						return;
					case Un:
						qt(e, t, n, a.type, o, s);
						return;
					case zn:
						var ot = o.value, st = o.children, ct = t.context, lt = t.keyPath, ut = a._currentValue2;
						a._currentValue2 = ot, a._currentRenderer2 !== void 0 && a._currentRenderer2 !== null && a._currentRenderer2 !== co && console.error("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), a._currentRenderer2 = co;
						var dt = lo, ft = {
							parent: dt,
							depth: dt === null ? 0 : dt.depth + 1,
							context: a,
							parentValue: ut,
							value: ot
						};
						lo = ft, t.context = ft, t.keyPath = n, Z(e, t, st, -1);
						var pt = lo;
						if (pt === null) throw Error("Tried to pop a Context at the root of the app. This is a bug in React.");
						pt.context !== a && console.error("The parent context is not the expected context. This is probably a bug in React."), pt.context._currentValue2 = pt.parentValue, a._currentRenderer2 !== void 0 && a._currentRenderer2 !== null && a._currentRenderer2 !== co && console.error("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), a._currentRenderer2 = co, t.context = lo = pt.parent, t.keyPath = lt, ct !== t.context && console.error("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
						return;
					case Rn:
						var mt = a._context, ht = o.children;
						typeof ht != "function" && console.error("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
						var gt = ht(mt._currentValue2), _t = t.keyPath;
						t.keyPath = n, Z(e, t, gt, -1), t.keyPath = _t;
						return;
					case Wn:
						var vt = gs(a);
						if (e.status === 12) throw null;
						qt(e, t, n, vt, o, s);
						return;
				}
				var yt = "";
				throw (a === void 0 || typeof a == "object" && a && Object.keys(a).length === 0) && (yt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + ((a == null ? a : typeof a) + "." + yt));
			}
		}
		function Jt(e, t, n, i, a) {
			var o = t.replay, s = t.blockedBoundary, c = At(e, 0, null, t.formatContext, !1, !1);
			c.id = n, c.parentFlushed = !0;
			try {
				t.replay = null, t.blockedSegment = c, $(e, t, i, a), c.status = Cs, s === null ? e.completedRootSegment = c : (fn(s, c), s.parentFlushed && e.partialBoundaries.push(s));
			} finally {
				t.replay = o, t.blockedSegment = null;
			}
		}
		function Yt(e, t, n, i, a, o, s, c, l, u) {
			o = u.nodes;
			for (var d = 0; d < o.length; d++) {
				var f = o[d];
				if (a === f[1]) {
					if (f.length === 4) {
						if (i !== null && i !== f[0]) throw Error("Expected the resume to render <" + f[0] + "> in this slot but instead it rendered <" + i + ">. The tree doesn't match so React will fallback to client rendering.");
						var p = f[2];
						i = f[3], a = t.node, t.replay = {
							nodes: p,
							slots: i,
							pendingTasks: 1
						};
						try {
							if (qt(e, t, n, s, c, l), t.replay.pendingTasks === 1 && 0 < t.replay.nodes.length) throw Error("Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering.");
							t.replay.pendingTasks--;
						} catch (f) {
							if (typeof f == "object" && f && (f === Do || typeof f.then == "function")) throw t.node === a ? t.replay = u : o.splice(d, 1), f;
							t.replay.pendingTasks--, s = It(t.componentStack), c = e, e = t.blockedBoundary, n = f, l = i, i = Rt(c, n, s, t.debugTask), on(c, e, p, l, n, i, s, !1);
						}
						t.replay = u;
					} else {
						if (s !== Vn) throw Error("Expected the resume to render <Suspense> in this slot but instead it rendered <" + (Ve(s) || "Unknown") + ">. The tree doesn't match so React will fallback to client rendering.");
						a: {
							u = void 0, i = f[5], s = f[2], l = f[3], a = f[4] === null ? [] : f[4][2], f = f[4] === null ? null : f[4][3];
							var m = t.keyPath, h = t.formatContext, g = t.row, _ = t.replay, v = t.blockedBoundary, y = t.hoistableState, b = c.children, x = c.fallback, S = /* @__PURE__ */ new Set();
							c = Dt(e, t.row, S, null, null), c.parentFlushed = !0, c.rootSegmentID = i, t.blockedBoundary = c, t.hoistableState = c.contentState, t.keyPath = n, t.formatContext = P(e.resumableState, h), t.row = null, t.replay = {
								nodes: s,
								slots: l,
								pendingTasks: 1
							};
							try {
								if ($(e, t, b, -1), t.replay.pendingTasks === 1 && 0 < t.replay.nodes.length) throw Error("Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering.");
								if (t.replay.pendingTasks--, c.pendingTasks === 0 && c.status === Ss) {
									c.status = Cs, e.completedBoundaries.push(c);
									break a;
								}
							} catch (n) {
								c.status = xs, p = It(t.componentStack), u = Rt(e, n, p, t.debugTask), Lt(c, u, n, p, !1), t.replay.pendingTasks--, e.clientRenderedBoundaries.push(c);
							} finally {
								t.blockedBoundary = v, t.hoistableState = y, t.replay = _, t.keyPath = m, t.formatContext = h, t.row = g;
							}
							c = kt(e, null, {
								nodes: a,
								slots: f,
								pendingTasks: 0
							}, x, -1, v, c.fallbackState, S, [
								n[0],
								"Suspense Fallback",
								n[2]
							], N(e.resumableState, t.formatContext), t.context, t.treeContext, t.row, Ft(t.componentStack), so, t.debugTask), Pt(c), e.pingedTasks.push(c);
						}
					}
					o.splice(d, 1);
					break;
				}
			}
		}
		function Xt(e, t, n, i, a) {
			i === t ? (n !== -1 || e.componentStack === null || typeof e.componentStack.type != "function" || Object.prototype.toString.call(e.componentStack.type) !== "[object GeneratorFunction]" || Object.prototype.toString.call(i) !== "[object Generator]") && (Fs || console.error("Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."), Fs = !0) : t.entries !== a || Is || (console.error("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Is = !0);
		}
		function Z(e, t, n, i) {
			t.replay !== null && typeof t.replay.slots == "number" ? Jt(e, t, t.replay.slots, n, i) : (t.node = n, t.childIndex = i, n = t.componentStack, i = t.debugTask, Pt(t), Zt(e, t), t.componentStack = n, t.debugTask = i);
		}
		function Zt(e, t) {
			var n = t.node, a = t.childIndex;
			if (n !== null) {
				if (typeof n == "object") {
					switch (n.$$typeof) {
						case Nn:
							var o = n.type, s = n.key;
							n = n.props;
							var c = n.ref;
							c = c === void 0 ? null : c;
							var l = t.debugTask, u = Ve(o);
							s ??= a === -1 ? 0 : a;
							var d = [
								t.keyPath,
								u,
								s
							];
							t.replay === null ? l ? l.run(qt.bind(null, e, t, d, o, n, c)) : qt(e, t, d, o, n, c) : l ? l.run(Yt.bind(null, e, t, d, u, s, a, o, n, c, t.replay)) : Yt(e, t, d, u, s, a, o, n, c, t.replay);
							return;
						case Pn: throw Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
						case Wn:
							if (o = gs(n), e.status === 12) throw null;
							Z(e, t, o, a);
							return;
					}
					if (Zn(n)) {
						Qt(e, t, n, a);
						return;
					}
					if ((s = i(n)) && (o = s.call(n))) {
						if (Xt(t, n, a, o, s), n = o.next(), !n.done) {
							s = [];
							do
								s.push(n.value), n = o.next();
							while (!n.done);
							Qt(e, t, s, a);
						}
						return;
					}
					if (typeof n.then == "function") return t.thenableState = null, Z(e, t, pt(n), a);
					if (n.$$typeof === zn) return Z(e, t, n._currentValue2, a);
					throw e = Object.prototype.toString.call(n), Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.");
				}
				typeof n == "string" ? (t = t.blockedSegment, t !== null && (t.lastPushedText = ze(t.chunks, n, e.renderState, t.lastPushedText))) : typeof n == "number" || typeof n == "bigint" ? (t = t.blockedSegment, t !== null && (t.lastPushedText = ze(t.chunks, "" + n, e.renderState, t.lastPushedText))) : (typeof n == "function" && (e = n.displayName || n.name || "Component", console.error("Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.", e, e)), typeof n == "symbol" && console.error("Symbols are not valid as a React child.\n  %s", String(n)));
			}
		}
		function Q(e, t, n) {
			if (typeof n == "object" && n && (n.$$typeof === Nn || n.$$typeof === Pn) && n._store && (!n._store.validated && n.key == null || n._store.validated === 2)) {
				if (typeof n._store != "object") throw Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
				n._store.validated = 1;
				var i = e.didWarnForKey;
				if (i ??= e.didWarnForKey = /* @__PURE__ */ new WeakSet(), e = t.componentStack, e !== null && !i.has(e)) {
					i.add(e);
					var a = Ve(n.type);
					i = n._owner;
					var o = e.owner;
					if (e = "", o && o.type !== void 0) {
						var s = Ve(o.type);
						s && (e = "\n\nCheck the render method of `" + s + "`.");
					}
					e || a && (e = "\n\nCheck the top-level render call using <" + a + ">."), a = "", i != null && o !== i && (o = null, i.type === void 0 ? typeof i.name == "string" && (o = i.name) : o = Ve(i.type), o && (a = " It was passed a child from " + o + ".")), i = t.componentStack, t.componentStack = {
						parent: t.componentStack,
						type: n.type,
						owner: n._owner,
						stack: n._debugStack
					}, console.error("Each child in a list should have a unique \"key\" prop.%s%s See https://react.dev/link/warning-keys for more information.", e, a), t.componentStack = i;
				}
			}
		}
		function Qt(e, t, n, i) {
			var a = t.keyPath, o = t.componentStack, s = t.debugTask;
			if (Nt(t, t.node._debugInfo), i !== -1 && (t.keyPath = [
				t.keyPath,
				"Fragment",
				i
			], t.replay !== null)) {
				for (var c = t.replay, l = c.nodes, u = 0; u < l.length; u++) {
					var d = l[u];
					if (d[1] === i) {
						i = d[2], d = d[3], t.replay = {
							nodes: i,
							slots: d,
							pendingTasks: 1
						};
						try {
							if (Qt(e, t, n, -1), t.replay.pendingTasks === 1 && 0 < t.replay.nodes.length) throw Error("Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering.");
							t.replay.pendingTasks--;
						} catch (a) {
							if (typeof a == "object" && a && (a === Do || typeof a.then == "function")) throw a;
							t.replay.pendingTasks--;
							var f = It(t.componentStack);
							n = t.blockedBoundary;
							var p = a, m = d;
							d = Rt(e, p, f, t.debugTask), on(e, n, i, m, p, d, f, !1);
						}
						t.replay = c, l.splice(u, 1);
						break;
					}
				}
				t.keyPath = a, t.componentStack = o, t.debugTask = s;
				return;
			}
			if (c = t.treeContext, l = n.length, t.replay !== null && (u = t.replay.slots, typeof u == "object" && u)) {
				for (i = 0; i < l; i++) d = n[i], t.treeContext = X(c, l, i), p = u[i], typeof p == "number" ? (Jt(e, t, p, d, i), delete u[i]) : $(e, t, d, i);
				t.treeContext = c, t.keyPath = a, t.componentStack = o, t.debugTask = s;
				return;
			}
			for (u = 0; u < l; u++) i = n[u], Q(e, t, i), t.treeContext = X(c, l, u), $(e, t, i, u);
			t.treeContext = c, t.keyPath = a, t.componentStack = o, t.debugTask = s;
		}
		function $t(e, t, n) {
			if (n.status = Ds, n.rootSegmentID = e.nextSegmentId++, e = n.trackedContentKeyPath, e === null) throw Error("It should not be possible to postpone at the root. This is a bug in React.");
			var i = n.trackedFallbackNode, a = [], o = t.workingMap.get(e);
			return o === void 0 ? (n = [
				e[1],
				e[2],
				a,
				null,
				i,
				n.rootSegmentID
			], t.workingMap.set(e, n), On(n, e[0], t), n) : (o[4] = i, o[5] = n.rootSegmentID, o);
		}
		function en(e, t, n, i) {
			i.status = Ds;
			var a = n.keyPath, o = n.blockedBoundary;
			if (o === null) i.id = e.nextSegmentId++, t.rootSlots = i.id, e.completedRootSegment !== null && (e.completedRootSegment.status = Ds);
			else {
				if (o !== null && o.status === Ss) {
					var s = $t(e, t, o);
					if (o.trackedContentKeyPath === a && n.childIndex === -1) {
						i.id === -1 && (i.id = i.parentFlushed ? o.rootSegmentID : e.nextSegmentId++), s[3] = i.id;
						return;
					}
				}
				if (i.id === -1 && (i.id = i.parentFlushed && o !== null ? o.rootSegmentID : e.nextSegmentId++), n.childIndex === -1) a === null ? t.rootSlots = i.id : (n = t.workingMap.get(a), n === void 0 ? (n = [
					a[1],
					a[2],
					[],
					i.id
				], On(n, a[0], t)) : n[3] = i.id);
				else {
					if (a === null) {
						if (e = t.rootSlots, e === null) e = t.rootSlots = {};
						else if (typeof e == "number") throw Error("It should not be possible to postpone both at the root of an element as well as a slot below. This is a bug in React.");
					} else if (o = t.workingMap, s = o.get(a), s === void 0) e = {}, s = [
						a[1],
						a[2],
						[],
						e
					], o.set(a, s), On(s, a[0], t);
					else if (e = s[3], e === null) e = s[3] = {};
					else if (typeof e == "number") throw Error("It should not be possible to postpone both at the root of an element as well as a slot below. This is a bug in React.");
					e[n.childIndex] = i.id;
				}
			}
		}
		function tn(e, t) {
			e = e.trackedPostpones, e !== null && (t = t.trackedContentKeyPath, t !== null && (t = e.workingMap.get(t), t !== void 0 && (t.length = 4, t[2] = [], t[3] = null)));
		}
		function nn(e, t, n) {
			return kt(e, n, t.replay, t.node, t.childIndex, t.blockedBoundary, t.hoistableState, t.abortSet, t.keyPath, t.formatContext, t.context, t.treeContext, t.row, t.componentStack, so, t.debugTask);
		}
		function rn(e, t, n) {
			var i = t.blockedSegment, a = At(e, i.chunks.length, null, t.formatContext, i.lastPushedText, !0);
			return i.children.push(a), i.lastPushedText = !1, Ot(e, n, t.node, t.childIndex, t.blockedBoundary, a, t.blockedPreamble, t.hoistableState, t.abortSet, t.keyPath, t.formatContext, t.context, t.treeContext, t.row, t.componentStack, so, t.debugTask);
		}
		function $(e, t, n, i) {
			var a = t.formatContext, o = t.context, s = t.keyPath, c = t.treeContext, l = t.componentStack, u = t.debugTask, d = t.blockedSegment;
			if (d === null) {
				d = t.replay;
				try {
					return Z(e, t, n, i);
				} catch (f) {
					if (rt(), n = f === Do ? Ze() : f, e.status !== 12 && typeof n == "object" && n) {
						if (typeof n.then == "function") {
							i = f === Do ? nt() : null, e = nn(e, t, i).ping, n.then(e, e), t.formatContext = a, t.context = o, t.keyPath = s, t.treeContext = c, t.componentStack = l, t.replay = d, t.debugTask = u, J(o);
							return;
						}
						if (n.message === "Maximum call stack size exceeded") {
							n = f === Do ? nt() : null, n = nn(e, t, n), e.pingedTasks.push(n), t.formatContext = a, t.context = o, t.keyPath = s, t.treeContext = c, t.componentStack = l, t.replay = d, t.debugTask = u, J(o);
							return;
						}
					}
				}
			} else {
				var f = d.children.length, p = d.chunks.length;
				try {
					return Z(e, t, n, i);
				} catch (i) {
					if (rt(), d.children.length = f, d.chunks.length = p, n = i === Do ? Ze() : i, e.status !== 12 && typeof n == "object" && n) {
						if (typeof n.then == "function") {
							d = n, n = i === Do ? nt() : null, e = rn(e, t, n).ping, d.then(e, e), t.formatContext = a, t.context = o, t.keyPath = s, t.treeContext = c, t.componentStack = l, t.debugTask = u, J(o);
							return;
						}
						if (n.message === "Maximum call stack size exceeded") {
							d = i === Do ? nt() : null, d = rn(e, t, d), e.pingedTasks.push(d), t.formatContext = a, t.context = o, t.keyPath = s, t.treeContext = c, t.componentStack = l, t.debugTask = u, J(o);
							return;
						}
					}
				}
			}
			throw t.formatContext = a, t.context = o, t.keyPath = s, t.treeContext = c, J(o), n;
		}
		function an(e) {
			var t = e.blockedBoundary, n = e.blockedSegment;
			n !== null && (n.status = Ts, pn(this, t, e.row, n));
		}
		function on(e, t, n, i, a, o, s, c) {
			for (var l = 0; l < n.length; l++) {
				var u = n[l];
				if (u.length === 4) on(e, t, u[2], u[3], a, o, s, c);
				else {
					var d = e;
					u = u[5];
					var f = a, p = o, m = s, h = c, g = Dt(d, null, /* @__PURE__ */ new Set(), null, null);
					g.parentFlushed = !0, g.rootSegmentID = u, g.status = xs, Lt(g, p, f, m, h), g.parentFlushed && d.clientRenderedBoundaries.push(g);
				}
			}
			if (n.length = 0, i !== null) {
				if (t === null) throw Error("We should not have any resumable nodes in the shell. This is a bug in React.");
				if (t.status !== xs && (t.status = xs, Lt(t, o, a, s, c), t.parentFlushed && e.clientRenderedBoundaries.push(t)), typeof i == "object") for (var _ in i) delete i[_];
			}
		}
		function sn(e, t, n) {
			var i = e.blockedBoundary, a = e.blockedSegment;
			if (a !== null) {
				if (a.status === 6) return;
				a.status = Ts;
			}
			var o = It(e.componentStack), s = e.node;
			if (typeof s == "object" && s && Mt(e, s._debugInfo), i === null) {
				if (t.status !== 13 && t.status !== Os) {
					if (i = e.replay, i === null) {
						t.trackedPostpones !== null && a !== null ? (i = t.trackedPostpones, Rt(t, n, o, e.debugTask), en(t, i, e, a), pn(t, null, e.row, a)) : (Rt(t, n, o, e.debugTask), zt(t, n, o, e.debugTask));
						return;
					}
					i.pendingTasks--, i.pendingTasks === 0 && 0 < i.nodes.length && (a = Rt(t, n, o, null), on(t, null, i.nodes, i.slots, n, a, o, !0)), t.pendingRootTasks--, t.pendingRootTasks === 0 && un(t);
				}
			} else {
				if (s = t.trackedPostpones, i.status !== xs) {
					if (s !== null && a !== null) return Rt(t, n, o, e.debugTask), en(t, s, e, a), i.fallbackAbortableTasks.forEach(function(e) {
						return sn(e, t, n);
					}), i.fallbackAbortableTasks.clear(), pn(t, i, e.row, a);
					i.status = xs, a = Rt(t, n, o, e.debugTask), i.status = xs, Lt(i, a, n, o, !0), tn(t, i), i.parentFlushed && t.clientRenderedBoundaries.push(i);
				}
				i.pendingTasks--, o = i.row, o !== null && --o.pendingTasks === 0 && Bt(t, o), i.fallbackAbortableTasks.forEach(function(e) {
					return sn(e, t, n);
				}), i.fallbackAbortableTasks.clear();
			}
			e = e.row, e !== null && --e.pendingTasks === 0 && Bt(t, e), t.allPendingTasks--, t.allPendingTasks === 0 && dn(t);
		}
		function ln(e, t) {
			try {
				var n = e.renderState, i = n.onHeaders;
				if (i) {
					var a = n.headers;
					if (a) {
						n.headers = null;
						var o = a.preconnects;
						if (a.fontPreloads && (o && (o += ", "), o += a.fontPreloads), a.highImagePreloads && (o && (o += ", "), o += a.highImagePreloads), !t) {
							var s = n.styles.values(), c = s.next();
							b: for (; 0 < a.remainingCapacity && !c.done; c = s.next()) for (var l = c.value.sheets.values(), u = l.next(); 0 < a.remainingCapacity && !u.done; u = l.next()) {
								var d = u.value, f = d.props, p = f.href, m = d.props, h = Ae(m.href, "style", {
									crossOrigin: m.crossOrigin,
									integrity: m.integrity,
									nonce: m.nonce,
									type: m.type,
									fetchPriority: m.fetchPriority,
									referrerPolicy: m.referrerPolicy,
									media: m.media
								});
								if (0 <= (a.remainingCapacity -= h.length + 2)) n.resets.style[p] = Wr, o && (o += ", "), o += h, n.resets.style[p] = typeof f.crossOrigin == "string" || typeof f.integrity == "string" ? [f.crossOrigin, f.integrity] : Wr;
								else break b;
							}
						}
						i(o ? { Link: o } : {});
					}
				}
			} catch (t) {
				Rt(e, t, {}, null);
			}
		}
		function un(e) {
			e.trackedPostpones === null && ln(e, !0), e.trackedPostpones === null && _n(e), e.onShellError = Ye, e = e.onShellReady, e();
		}
		function dn(e) {
			ln(e, e.trackedPostpones === null ? !0 : e.completedRootSegment === null || e.completedRootSegment.status !== Ds), _n(e), e = e.onAllReady, e();
		}
		function fn(e, t) {
			if (t.chunks.length === 0 && t.children.length === 1 && t.children[0].boundary === null && t.children[0].id === -1) {
				var n = t.children[0];
				n.id = t.id, n.parentFlushed = !0, n.status !== Cs && n.status !== Ts && n.status !== Es || fn(e, n);
			} else e.completedSegments.push(t);
		}
		function pn(e, t, n, i) {
			if (n !== null && (--n.pendingTasks === 0 ? Bt(e, n) : n.together && Ht(e, n)), e.allPendingTasks--, t === null) {
				if (i !== null && i.parentFlushed) {
					if (e.completedRootSegment !== null) throw Error("There can only be one root segment. This is a bug in React.");
					e.completedRootSegment = i;
				}
				e.pendingRootTasks--, e.pendingRootTasks === 0 && un(e);
			} else if (t.pendingTasks--, t.status !== xs) if (t.pendingTasks === 0) {
				if (t.status === Ss && (t.status = Cs), i !== null && i.parentFlushed && (i.status === Cs || i.status === Ts) && fn(t, i), t.parentFlushed && e.completedBoundaries.push(t), t.status === Cs) n = t.row, n !== null && Le(n.hoistables, t.contentState), St(e, t) || (t.fallbackAbortableTasks.forEach(an, e), t.fallbackAbortableTasks.clear(), n !== null && --n.pendingTasks === 0 && Bt(e, n)), e.pendingRootTasks === 0 && e.trackedPostpones === null && t.contentPreamble !== null && _n(e);
				else if (t.status === Ds && (t = t.row, t !== null)) {
					if (e.trackedPostpones !== null) {
						n = e.trackedPostpones;
						var a = t.next;
						if (a !== null && (i = a.boundaries, i !== null)) for (a.boundaries = null, a = 0; a < i.length; a++) {
							var o = i[a];
							$t(e, n, o), pn(e, o, null, null);
						}
					}
					--t.pendingTasks === 0 && Bt(e, t);
				}
			} else i === null || !i.parentFlushed || i.status !== Cs && i.status !== Ts || (fn(t, i), t.completedSegments.length === 1 && t.parentFlushed && e.partialBoundaries.push(t)), t = t.row, t !== null && t.together && Ht(e, t);
			e.allPendingTasks === 0 && dn(e);
		}
		function mn(e) {
			if (e.status !== Os && e.status !== 13) {
				var t = lo, n = Mr.H;
				Mr.H = qo;
				var i = Mr.A;
				Mr.A = Xo;
				var a = ks;
				ks = e;
				var o = Mr.getCurrentStack;
				Mr.getCurrentStack = jt;
				var s = Jo;
				Jo = e.resumableState;
				try {
					var c = e.pingedTasks, l;
					for (l = 0; l < c.length; l++) {
						var u = e, d = c[l], f = d.blockedSegment;
						if (f === null) {
							var p = void 0, m = u;
							if (u = d, u.replay.pendingTasks !== 0) {
								J(u.context), p = Yo, Yo = u;
								try {
									if (typeof u.replay.slots == "number" ? Jt(m, u, u.replay.slots, u.node, u.childIndex) : Zt(m, u), u.replay.pendingTasks === 1 && 0 < u.replay.nodes.length) throw Error("Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering.");
									u.replay.pendingTasks--, u.abortSet.delete(u), pn(m, u.blockedBoundary, u.row, null);
								} catch (e) {
									rt();
									var h = e === Do ? Ze() : e;
									if (typeof h == "object" && h && typeof h.then == "function") {
										var g = u.ping;
										h.then(g, g), u.thenableState = e === Do ? nt() : null;
									} else {
										u.replay.pendingTasks--, u.abortSet.delete(u);
										var _ = It(u.componentStack), v = void 0, y = m, b = u.blockedBoundary, x = m.status === 12 ? m.fatalError : h, S = _, C = u.replay.nodes, w = u.replay.slots;
										v = Rt(y, x, S, u.debugTask), on(y, b, C, w, x, v, S, !1), m.pendingRootTasks--, m.pendingRootTasks === 0 && un(m), m.allPendingTasks--, m.allPendingTasks === 0 && dn(m);
									}
								} finally {
									Yo = p;
								}
							}
						} else if (m = p = void 0, v = d, y = f, y.status === Ss) {
							y.status = 6, J(v.context), m = Yo, Yo = v;
							var T = y.children.length, E = y.chunks.length;
							try {
								Zt(u, v), Be(y.chunks, u.renderState, y.lastPushedText, y.textEmbedded), v.abortSet.delete(v), y.status = Cs, pn(u, v.blockedBoundary, v.row, y);
							} catch (e) {
								rt(), y.children.length = T, y.chunks.length = E;
								var D = e === Do ? Ze() : u.status === 12 ? u.fatalError : e;
								if (u.status === 12 && u.trackedPostpones !== null) {
									var O = u.trackedPostpones, k = It(v.componentStack);
									v.abortSet.delete(v), Rt(u, D, k, v.debugTask), en(u, O, v, y), pn(u, v.blockedBoundary, v.row, y);
								} else if (typeof D == "object" && D && typeof D.then == "function") {
									y.status = Ss, v.thenableState = e === Do ? nt() : null;
									var A = v.ping;
									D.then(A, A);
								} else {
									var j = It(v.componentStack);
									v.abortSet.delete(v), y.status = Es;
									var M = v.blockedBoundary, N = v.row, P = v.debugTask;
									if (N !== null && --N.pendingTasks === 0 && Bt(u, N), u.allPendingTasks--, p = Rt(u, D, j, P), M === null) zt(u, D, j, P);
									else if (M.pendingTasks--, M.status !== xs) {
										M.status = xs, Lt(M, p, D, j, !1), tn(u, M);
										var F = M.row;
										F !== null && --F.pendingTasks === 0 && Bt(u, F), M.parentFlushed && u.clientRenderedBoundaries.push(M), u.pendingRootTasks === 0 && u.trackedPostpones === null && M.contentPreamble !== null && _n(u);
									}
									u.allPendingTasks === 0 && dn(u);
								}
							} finally {
								Yo = m;
							}
						}
					}
					c.splice(0, l), e.destination !== null && Cn(e, e.destination);
				} catch (t) {
					c = {}, Rt(e, t, c, null), zt(e, t, c, null);
				} finally {
					Jo = s, Mr.H = n, Mr.A = i, Mr.getCurrentStack = o, n === qo && J(t), ks = a;
				}
			}
		}
		function hn(e, t, n) {
			t.preambleChildren.length && n.push(t.preambleChildren);
			for (var i = !1, a = 0; a < t.children.length; a++) i = gn(e, t.children[a], n) || i;
			return i;
		}
		function gn(e, t, n) {
			var i = t.boundary;
			if (i === null) return hn(e, t, n);
			var a = i.contentPreamble, o = i.fallbackPreamble;
			if (a === null || o === null) return !1;
			switch (i.status) {
				case Cs:
					if (K(e.renderState, a), e.byteSize += i.byteSize, t = i.completedSegments[0], !t) throw Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
					return hn(e, t, n);
				case Ds: if (e.trackedPostpones !== null) return !0;
				case xs: if (t.status === Cs) return K(e.renderState, o), hn(e, t, n);
				default: return !0;
			}
		}
		function _n(e) {
			if (e.completedRootSegment && e.completedPreambleSegments === null) {
				var t = [], n = e.byteSize, i = gn(e, e.completedRootSegment, t), a = e.renderState.preamble;
				!1 === i || a.headChunks && a.bodyChunks ? e.completedPreambleSegments = t : e.byteSize = n;
			}
		}
		function vn(e, t, n, i) {
			switch (n.parentFlushed = !0, n.status) {
				case Ss: n.id = e.nextSegmentId++;
				case Ds: return i = n.id, n.lastPushedText = !1, n.textEmbedded = !1, e = e.renderState, t.push(Pi), t.push(e.placeholderPrefix), e = i.toString(16), t.push(e), t.push(Fi);
				case Cs:
					n.status = ws;
					var a = !0, o = n.chunks, s = 0;
					n = n.children;
					for (var c = 0; c < n.length; c++) {
						for (a = n[c]; s < a.index; s++) t.push(o[s]);
						a = yn(e, t, a, i);
					}
					for (; s < o.length - 1; s++) t.push(o[s]);
					return s < o.length && (a = t.push(o[s])), a;
				case Ts: return !0;
				default: throw Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
			}
		}
		function yn(e, t, n, i) {
			var a = n.boundary;
			if (a === null) return vn(e, t, n, i);
			if (a.parentFlushed = !0, a.status === xs) {
				var o = a.row;
				if (o !== null && --o.pendingTasks === 0 && Bt(e, o), !e.renderState.generateStaticMarkup) {
					var s = a.errorDigest, c = a.errorMessage;
					o = a.errorStack, a = a.errorComponentStack, t.push(zi), t.push(Vi), s && (t.push(Ui), s = E(s), t.push(s), t.push(Hi)), c && (t.push(Wi), c = E(c), t.push(c), t.push(Hi)), o && (t.push(Gi), o = E(o), t.push(o), t.push(Hi)), a && (t.push(Ki), o = E(a), t.push(o), t.push(Hi)), t.push(qi);
				}
				return vn(e, t, n, i), e = e.renderState.generateStaticMarkup ? !0 : t.push(Bi), e;
			}
			if (a.status !== Cs) return a.status === Ss && (a.rootSegmentID = e.nextSegmentId++), 0 < a.completedSegments.length && e.partialBoundaries.push(a), fe(t, e.renderState, a.rootSegmentID), i && Le(i, a.fallbackState), vn(e, t, n, i), t.push(Bi);
			if (!Rs && St(e, a) && Ls + a.byteSize > e.progressiveChunkSize) return a.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(a), fe(t, e.renderState, a.rootSegmentID), vn(e, t, n, i), t.push(Bi);
			if (Ls += a.byteSize, i && Le(i, a.contentState), n = a.row, n !== null && St(e, a) && --n.pendingTasks === 0 && Bt(e, n), e.renderState.generateStaticMarkup || t.push(Ii), n = a.completedSegments, n.length !== 1) throw Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
			return yn(e, t, n[0], i), e = e.renderState.generateStaticMarkup ? !0 : t.push(Bi), e;
		}
		function bn(e, t, n, i) {
			return pe(t, e.renderState, n.parentFormatContext, n.id), yn(e, t, n, i), me(t, n.parentFormatContext);
		}
		function xn(e, t, n) {
			Ls = n.byteSize;
			for (var i = n.completedSegments, a = 0; a < i.length; a++) Sn(e, t, n, i[a]);
			i.length = 0, i = n.row, i !== null && St(e, n) && --i.pendingTasks === 0 && Bt(e, i), ye(t, n.contentState, e.renderState), i = e.resumableState, e = e.renderState, a = n.rootSegmentID, n = n.contentState;
			var o = e.stylesToHoist;
			return e.stylesToHoist = !1, t.push(e.startInlineScript), t.push(mi), o ? ((i.instructions & zr) === Ir && (i.instructions |= zr, t.push(Da)), (i.instructions & Rr) === Ir && (i.instructions |= Rr, t.push(ya)), (i.instructions & Br) === Ir ? (i.instructions |= Br, t.push(xa)) : t.push(Sa)) : ((i.instructions & Rr) === Ir && (i.instructions |= Rr, t.push(ya)), t.push(ba)), i = a.toString(16), t.push(e.boundaryPrefix), t.push(i), t.push(Ca), t.push(e.segmentPrefix), t.push(i), o ? (t.push(wa), Te(t, n)) : t.push(Ta), n = t.push(Ea), de(t, e) && n;
		}
		function Sn(e, t, n, i) {
			if (i.status === ws) return !0;
			var a = n.contentState, o = i.id;
			if (o === -1) {
				if ((i.id = n.rootSegmentID) === -1) throw Error("A root segment ID must have been assigned by now. This is a bug in React.");
				return bn(e, t, i, a);
			}
			return o === n.rootSegmentID ? bn(e, t, i, a) : (bn(e, t, i, a), n = e.resumableState, e = e.renderState, t.push(e.startInlineScript), t.push(mi), (n.instructions & Lr) === Ir ? (n.instructions |= Lr, t.push(ha)) : t.push(ga), t.push(e.segmentPrefix), o = o.toString(16), t.push(o), t.push(_a), t.push(e.placeholderPrefix), t.push(o), t = t.push(va), t);
		}
		function Cn(e, t) {
			try {
				if (!(0 < e.pendingRootTasks)) {
					var n, i = e.completedRootSegment;
					if (i !== null) {
						if (i.status === Ds) return;
						var a = e.completedPreambleSegments;
						if (a === null) return;
						Ls = e.byteSize;
						var o = e.resumableState, s = e.renderState, c = s.preamble, l = c.htmlChunks, u = c.headChunks, d;
						if (l) {
							for (d = 0; d < l.length; d++) t.push(l[d]);
							if (u) for (d = 0; d < u.length; d++) t.push(u[d]);
							else {
								var f = ce("head");
								t.push(f), t.push(mi);
							}
						} else if (u) for (d = 0; d < u.length; d++) t.push(u[d]);
						var p = s.charsetChunks;
						for (d = 0; d < p.length; d++) t.push(p[d]);
						p.length = 0, s.preconnects.forEach(be, t), s.preconnects.clear();
						var m = s.viewportChunks;
						for (d = 0; d < m.length; d++) t.push(m[d]);
						m.length = 0, s.fontPreloads.forEach(be, t), s.fontPreloads.clear(), s.highImagePreloads.forEach(be, t), s.highImagePreloads.clear(), Gr = s, s.styles.forEach(Se, t), Gr = null;
						var h = s.importMapChunks;
						for (d = 0; d < h.length; d++) t.push(h[d]);
						h.length = 0, s.bootstrapScripts.forEach(be, t), s.scripts.forEach(be, t), s.scripts.clear(), s.bulkPreloads.forEach(be, t), s.bulkPreloads.clear(), o.instructions |= Vr;
						var g = s.hoistableChunks;
						for (d = 0; d < g.length; d++) t.push(g[d]);
						for (o = g.length = 0; o < a.length; o++) {
							var _ = a[o];
							for (s = 0; s < _.length; s++) yn(e, t, _[s], null);
						}
						var v = e.renderState.preamble, y = v.headChunks;
						if (v.htmlChunks || y) {
							var b = ue("head");
							t.push(b);
						}
						var x = v.bodyChunks;
						if (x) for (a = 0; a < x.length; a++) t.push(x[a]);
						yn(e, t, i, null), e.completedRootSegment = null;
						var S = e.renderState;
						if (e.allPendingTasks !== 0 || e.clientRenderedBoundaries.length !== 0 || e.completedBoundaries.length !== 0 || e.trackedPostpones !== null && (e.trackedPostpones.rootNodes.length !== 0 || e.trackedPostpones.rootSlots !== null)) {
							var C = e.resumableState;
							if ((C.instructions & Hr) === Ir) {
								if (C.instructions |= Hr, t.push(S.startInlineScript), (C.instructions & Vr) === Ir) {
									C.instructions |= Vr;
									var w = "_" + C.idPrefix + "R_";
									t.push(qa);
									var T = E(w);
									t.push(T), t.push(di);
								}
								t.push(mi), t.push(Ni), t.push(Kr);
							}
						}
						de(t, S);
					}
					var D = e.renderState;
					i = 0;
					var O = D.viewportChunks;
					for (i = 0; i < O.length; i++) t.push(O[i]);
					O.length = 0, D.preconnects.forEach(be, t), D.preconnects.clear(), D.fontPreloads.forEach(be, t), D.fontPreloads.clear(), D.highImagePreloads.forEach(be, t), D.highImagePreloads.clear(), D.styles.forEach(we, t), D.scripts.forEach(be, t), D.scripts.clear(), D.bulkPreloads.forEach(be, t), D.bulkPreloads.clear();
					var k = D.hoistableChunks;
					for (i = 0; i < k.length; i++) t.push(k[i]);
					k.length = 0;
					var A = e.clientRenderedBoundaries;
					for (n = 0; n < A.length; n++) {
						var j = A[n];
						D = t;
						var M = e.resumableState, N = e.renderState, P = j.rootSegmentID, F = j.errorDigest, I = j.errorMessage, L = j.errorStack, R = j.errorComponentStack;
						D.push(N.startInlineScript), D.push(mi), (M.instructions & zr) === Ir ? (M.instructions |= zr, D.push(Oa)) : D.push(ka), D.push(N.boundaryPrefix);
						var ee = P.toString(16);
						if (D.push(ee), D.push(Aa), F || I || L || R) {
							D.push(ja);
							var z = he(F || "");
							D.push(z);
						}
						if (I || L || R) {
							D.push(ja);
							var B = he(I || "");
							D.push(B);
						}
						if (L || R) {
							D.push(ja);
							var V = he(L || "");
							D.push(V);
						}
						if (R) {
							D.push(ja);
							var te = he(R);
							D.push(te);
						}
						var H = D.push(Ma);
						if (!H) {
							e.destination = null, n++, A.splice(0, n);
							return;
						}
					}
					A.splice(0, n);
					var U = e.completedBoundaries;
					for (n = 0; n < U.length; n++) if (!xn(e, t, U[n])) {
						e.destination = null, n++, U.splice(0, n);
						return;
					}
					U.splice(0, n), Rs = !0;
					var ne = e.partialBoundaries;
					for (n = 0; n < ne.length; n++) {
						a: {
							A = e, j = t;
							var W = ne[n];
							Ls = W.byteSize;
							var re = W.completedSegments;
							for (H = 0; H < re.length; H++) if (!Sn(A, j, W, re[H])) {
								H++, re.splice(0, H);
								var ie = !1;
								break a;
							}
							re.splice(0, H);
							var ae = W.row;
							ae !== null && ae.together && W.pendingTasks === 1 && (ae.pendingTasks === 1 ? Vt(A, ae, ae.hoistables) : ae.pendingTasks--), ie = ye(j, W.contentState, A.renderState);
						}
						if (!ie) {
							e.destination = null, n++, ne.splice(0, n);
							return;
						}
					}
					ne.splice(0, n), Rs = !1;
					var oe = e.completedBoundaries;
					for (n = 0; n < oe.length; n++) if (!xn(e, t, oe[n])) {
						e.destination = null, n++, oe.splice(0, n);
						return;
					}
					oe.splice(0, n);
				}
			} finally {
				Rs = !1, e.allPendingTasks === 0 && e.clientRenderedBoundaries.length === 0 && e.completedBoundaries.length === 0 && (e.flushScheduled = !1, n = e.resumableState, n.hasBody && (ne = ue("body"), t.push(ne)), n.hasHtml && (n = ue("html"), t.push(n)), e.abortableTasks.size !== 0 && console.error("There was still abortable task at the root when we closed. This is a bug in React."), e.status = Os, t.push(null), e.destination = null);
			}
		}
		function wn(e) {
			e.flushScheduled = e.destination !== null, mn(e), e.status === 10 && (e.status = 11), e.trackedPostpones === null && ln(e, e.pendingRootTasks === 0);
		}
		function Tn(e) {
			if (!1 === e.flushScheduled && e.pingedTasks.length === 0 && e.destination !== null) {
				e.flushScheduled = !0;
				var t = e.destination;
				t ? Cn(e, t) : e.flushScheduled = !1;
			}
		}
		function En(e, t) {
			if (e.status === 13) e.status = Os, t.destroy(e.fatalError);
			else if (e.status !== Os && e.destination === null) {
				e.destination = t;
				try {
					Cn(e, t);
				} catch (n) {
					t = {}, Rt(e, n, t, null), zt(e, n, t, null);
				}
			}
		}
		function Dn(e, t) {
			(e.status === 11 || e.status === 10) && (e.status = 12);
			try {
				var n = e.abortableTasks;
				if (0 < n.size) {
					var i = t === void 0 ? Error("The render was aborted by the server without a reason.") : typeof t == "object" && t && typeof t.then == "function" ? Error("The render was aborted by the server with a promise.") : t;
					e.fatalError = i, n.forEach(function(t) {
						var n = Yo, a = Mr.getCurrentStack;
						Yo = t, Mr.getCurrentStack = jt;
						try {
							sn(t, e, i);
						} finally {
							Yo = n, Mr.getCurrentStack = a;
						}
					}), n.clear();
				}
				e.destination !== null && Cn(e, e.destination);
			} catch (n) {
				t = {}, Rt(e, n, t, null), zt(e, n, t, null);
			}
		}
		function On(e, t, n) {
			if (t === null) n.rootNodes.push(e);
			else {
				var i = n.workingMap, a = i.get(t);
				a === void 0 && (a = [
					t[1],
					t[2],
					[],
					null
				], i.set(t, a), On(a, t[0], n)), a[2].push(e);
			}
		}
		function kn() {}
		function An(e, t, n, i) {
			var a = !1, o = null, s = "", c = !1;
			if (t = k(t ? t.identifierPrefix : void 0), e = Tt(e, t, Re(t, n), A(Yr, null, 0, null), Infinity, kn, void 0, function() {
				c = !0;
			}, void 0, void 0, void 0), wn(e), Dn(e, i), En(e, {
				push: function(e) {
					return e !== null && (s += e), !0;
				},
				destroy: function(e) {
					a = !0, o = e;
				}
			}), a && o !== i) throw o;
			if (!c) throw Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
			return s;
		}
		var jn = require_react(), Mn = require_react_dom(), Nn = Symbol.for("react.transitional.element"), Pn = Symbol.for("react.portal"), Fn = Symbol.for("react.fragment"), In = Symbol.for("react.strict_mode"), Ln = Symbol.for("react.profiler"), Rn = Symbol.for("react.consumer"), zn = Symbol.for("react.context"), Bn = Symbol.for("react.forward_ref"), Vn = Symbol.for("react.suspense"), Hn = Symbol.for("react.suspense_list"), Un = Symbol.for("react.memo"), Wn = Symbol.for("react.lazy"), Gn = Symbol.for("react.scope"), Kn = Symbol.for("react.activity"), qn = Symbol.for("react.legacy_hidden"), Jn = Symbol.for("react.memo_cache_sentinel"), Yn = Symbol.for("react.view_transition"), Xn = Symbol.iterator, Zn = Array.isArray, Qn = /* @__PURE__ */ new WeakMap(), $n = /* @__PURE__ */ new WeakMap(), er = Symbol.for("react.client.reference"), tr = Object.assign, nr = Object.prototype.hasOwnProperty, rr = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), ir = {}, ar = {}, or = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" ")), sr = new Map([
			["acceptCharset", "accept-charset"],
			["htmlFor", "for"],
			["httpEquiv", "http-equiv"],
			["crossOrigin", "crossorigin"],
			["accentHeight", "accent-height"],
			["alignmentBaseline", "alignment-baseline"],
			["arabicForm", "arabic-form"],
			["baselineShift", "baseline-shift"],
			["capHeight", "cap-height"],
			["clipPath", "clip-path"],
			["clipRule", "clip-rule"],
			["colorInterpolation", "color-interpolation"],
			["colorInterpolationFilters", "color-interpolation-filters"],
			["colorProfile", "color-profile"],
			["colorRendering", "color-rendering"],
			["dominantBaseline", "dominant-baseline"],
			["enableBackground", "enable-background"],
			["fillOpacity", "fill-opacity"],
			["fillRule", "fill-rule"],
			["floodColor", "flood-color"],
			["floodOpacity", "flood-opacity"],
			["fontFamily", "font-family"],
			["fontSize", "font-size"],
			["fontSizeAdjust", "font-size-adjust"],
			["fontStretch", "font-stretch"],
			["fontStyle", "font-style"],
			["fontVariant", "font-variant"],
			["fontWeight", "font-weight"],
			["glyphName", "glyph-name"],
			["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
			["glyphOrientationVertical", "glyph-orientation-vertical"],
			["horizAdvX", "horiz-adv-x"],
			["horizOriginX", "horiz-origin-x"],
			["imageRendering", "image-rendering"],
			["letterSpacing", "letter-spacing"],
			["lightingColor", "lighting-color"],
			["markerEnd", "marker-end"],
			["markerMid", "marker-mid"],
			["markerStart", "marker-start"],
			["overlinePosition", "overline-position"],
			["overlineThickness", "overline-thickness"],
			["paintOrder", "paint-order"],
			["panose-1", "panose-1"],
			["pointerEvents", "pointer-events"],
			["renderingIntent", "rendering-intent"],
			["shapeRendering", "shape-rendering"],
			["stopColor", "stop-color"],
			["stopOpacity", "stop-opacity"],
			["strikethroughPosition", "strikethrough-position"],
			["strikethroughThickness", "strikethrough-thickness"],
			["strokeDasharray", "stroke-dasharray"],
			["strokeDashoffset", "stroke-dashoffset"],
			["strokeLinecap", "stroke-linecap"],
			["strokeLinejoin", "stroke-linejoin"],
			["strokeMiterlimit", "stroke-miterlimit"],
			["strokeOpacity", "stroke-opacity"],
			["strokeWidth", "stroke-width"],
			["textAnchor", "text-anchor"],
			["textDecoration", "text-decoration"],
			["textRendering", "text-rendering"],
			["transformOrigin", "transform-origin"],
			["underlinePosition", "underline-position"],
			["underlineThickness", "underline-thickness"],
			["unicodeBidi", "unicode-bidi"],
			["unicodeRange", "unicode-range"],
			["unitsPerEm", "units-per-em"],
			["vAlphabetic", "v-alphabetic"],
			["vHanging", "v-hanging"],
			["vIdeographic", "v-ideographic"],
			["vMathematical", "v-mathematical"],
			["vectorEffect", "vector-effect"],
			["vertAdvY", "vert-adv-y"],
			["vertOriginX", "vert-origin-x"],
			["vertOriginY", "vert-origin-y"],
			["wordSpacing", "word-spacing"],
			["writingMode", "writing-mode"],
			["xmlnsXlink", "xmlns:xlink"],
			["xHeight", "x-height"]
		]), cr = {
			button: !0,
			checkbox: !0,
			image: !0,
			hidden: !0,
			radio: !0,
			reset: !0,
			submit: !0
		}, lr = {
			"aria-current": 0,
			"aria-description": 0,
			"aria-details": 0,
			"aria-disabled": 0,
			"aria-hidden": 0,
			"aria-invalid": 0,
			"aria-keyshortcuts": 0,
			"aria-label": 0,
			"aria-roledescription": 0,
			"aria-autocomplete": 0,
			"aria-checked": 0,
			"aria-expanded": 0,
			"aria-haspopup": 0,
			"aria-level": 0,
			"aria-modal": 0,
			"aria-multiline": 0,
			"aria-multiselectable": 0,
			"aria-orientation": 0,
			"aria-placeholder": 0,
			"aria-pressed": 0,
			"aria-readonly": 0,
			"aria-required": 0,
			"aria-selected": 0,
			"aria-sort": 0,
			"aria-valuemax": 0,
			"aria-valuemin": 0,
			"aria-valuenow": 0,
			"aria-valuetext": 0,
			"aria-atomic": 0,
			"aria-busy": 0,
			"aria-live": 0,
			"aria-relevant": 0,
			"aria-dropeffect": 0,
			"aria-grabbed": 0,
			"aria-activedescendant": 0,
			"aria-colcount": 0,
			"aria-colindex": 0,
			"aria-colspan": 0,
			"aria-controls": 0,
			"aria-describedby": 0,
			"aria-errormessage": 0,
			"aria-flowto": 0,
			"aria-labelledby": 0,
			"aria-owns": 0,
			"aria-posinset": 0,
			"aria-rowcount": 0,
			"aria-rowindex": 0,
			"aria-rowspan": 0,
			"aria-setsize": 0,
			"aria-braillelabel": 0,
			"aria-brailleroledescription": 0,
			"aria-colindextext": 0,
			"aria-rowindextext": 0
		}, ur = {}, dr = RegExp("^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), fr = RegExp("^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), pr = !1, mr = {
			accept: "accept",
			acceptcharset: "acceptCharset",
			"accept-charset": "acceptCharset",
			accesskey: "accessKey",
			action: "action",
			allowfullscreen: "allowFullScreen",
			alt: "alt",
			as: "as",
			async: "async",
			autocapitalize: "autoCapitalize",
			autocomplete: "autoComplete",
			autocorrect: "autoCorrect",
			autofocus: "autoFocus",
			autoplay: "autoPlay",
			autosave: "autoSave",
			capture: "capture",
			cellpadding: "cellPadding",
			cellspacing: "cellSpacing",
			challenge: "challenge",
			charset: "charSet",
			checked: "checked",
			children: "children",
			cite: "cite",
			class: "className",
			classid: "classID",
			classname: "className",
			cols: "cols",
			colspan: "colSpan",
			content: "content",
			contenteditable: "contentEditable",
			contextmenu: "contextMenu",
			controls: "controls",
			controlslist: "controlsList",
			coords: "coords",
			crossorigin: "crossOrigin",
			dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
			data: "data",
			datetime: "dateTime",
			default: "default",
			defaultchecked: "defaultChecked",
			defaultvalue: "defaultValue",
			defer: "defer",
			dir: "dir",
			disabled: "disabled",
			disablepictureinpicture: "disablePictureInPicture",
			disableremoteplayback: "disableRemotePlayback",
			download: "download",
			draggable: "draggable",
			enctype: "encType",
			enterkeyhint: "enterKeyHint",
			fetchpriority: "fetchPriority",
			for: "htmlFor",
			form: "form",
			formmethod: "formMethod",
			formaction: "formAction",
			formenctype: "formEncType",
			formnovalidate: "formNoValidate",
			formtarget: "formTarget",
			frameborder: "frameBorder",
			headers: "headers",
			height: "height",
			hidden: "hidden",
			high: "high",
			href: "href",
			hreflang: "hrefLang",
			htmlfor: "htmlFor",
			httpequiv: "httpEquiv",
			"http-equiv": "httpEquiv",
			icon: "icon",
			id: "id",
			imagesizes: "imageSizes",
			imagesrcset: "imageSrcSet",
			inert: "inert",
			innerhtml: "innerHTML",
			inputmode: "inputMode",
			integrity: "integrity",
			is: "is",
			itemid: "itemID",
			itemprop: "itemProp",
			itemref: "itemRef",
			itemscope: "itemScope",
			itemtype: "itemType",
			keyparams: "keyParams",
			keytype: "keyType",
			kind: "kind",
			label: "label",
			lang: "lang",
			list: "list",
			loop: "loop",
			low: "low",
			manifest: "manifest",
			marginwidth: "marginWidth",
			marginheight: "marginHeight",
			max: "max",
			maxlength: "maxLength",
			media: "media",
			mediagroup: "mediaGroup",
			method: "method",
			min: "min",
			minlength: "minLength",
			multiple: "multiple",
			muted: "muted",
			name: "name",
			nomodule: "noModule",
			nonce: "nonce",
			novalidate: "noValidate",
			open: "open",
			optimum: "optimum",
			pattern: "pattern",
			placeholder: "placeholder",
			playsinline: "playsInline",
			poster: "poster",
			preload: "preload",
			profile: "profile",
			radiogroup: "radioGroup",
			readonly: "readOnly",
			referrerpolicy: "referrerPolicy",
			rel: "rel",
			required: "required",
			reversed: "reversed",
			role: "role",
			rows: "rows",
			rowspan: "rowSpan",
			sandbox: "sandbox",
			scope: "scope",
			scoped: "scoped",
			scrolling: "scrolling",
			seamless: "seamless",
			selected: "selected",
			shape: "shape",
			size: "size",
			sizes: "sizes",
			span: "span",
			spellcheck: "spellCheck",
			src: "src",
			srcdoc: "srcDoc",
			srclang: "srcLang",
			srcset: "srcSet",
			start: "start",
			step: "step",
			style: "style",
			summary: "summary",
			tabindex: "tabIndex",
			target: "target",
			title: "title",
			type: "type",
			usemap: "useMap",
			value: "value",
			width: "width",
			wmode: "wmode",
			wrap: "wrap",
			about: "about",
			accentheight: "accentHeight",
			"accent-height": "accentHeight",
			accumulate: "accumulate",
			additive: "additive",
			alignmentbaseline: "alignmentBaseline",
			"alignment-baseline": "alignmentBaseline",
			allowreorder: "allowReorder",
			alphabetic: "alphabetic",
			amplitude: "amplitude",
			arabicform: "arabicForm",
			"arabic-form": "arabicForm",
			ascent: "ascent",
			attributename: "attributeName",
			attributetype: "attributeType",
			autoreverse: "autoReverse",
			azimuth: "azimuth",
			basefrequency: "baseFrequency",
			baselineshift: "baselineShift",
			"baseline-shift": "baselineShift",
			baseprofile: "baseProfile",
			bbox: "bbox",
			begin: "begin",
			bias: "bias",
			by: "by",
			calcmode: "calcMode",
			capheight: "capHeight",
			"cap-height": "capHeight",
			clip: "clip",
			clippath: "clipPath",
			"clip-path": "clipPath",
			clippathunits: "clipPathUnits",
			cliprule: "clipRule",
			"clip-rule": "clipRule",
			color: "color",
			colorinterpolation: "colorInterpolation",
			"color-interpolation": "colorInterpolation",
			colorinterpolationfilters: "colorInterpolationFilters",
			"color-interpolation-filters": "colorInterpolationFilters",
			colorprofile: "colorProfile",
			"color-profile": "colorProfile",
			colorrendering: "colorRendering",
			"color-rendering": "colorRendering",
			contentscripttype: "contentScriptType",
			contentstyletype: "contentStyleType",
			cursor: "cursor",
			cx: "cx",
			cy: "cy",
			d: "d",
			datatype: "datatype",
			decelerate: "decelerate",
			descent: "descent",
			diffuseconstant: "diffuseConstant",
			direction: "direction",
			display: "display",
			divisor: "divisor",
			dominantbaseline: "dominantBaseline",
			"dominant-baseline": "dominantBaseline",
			dur: "dur",
			dx: "dx",
			dy: "dy",
			edgemode: "edgeMode",
			elevation: "elevation",
			enablebackground: "enableBackground",
			"enable-background": "enableBackground",
			end: "end",
			exponent: "exponent",
			externalresourcesrequired: "externalResourcesRequired",
			fill: "fill",
			fillopacity: "fillOpacity",
			"fill-opacity": "fillOpacity",
			fillrule: "fillRule",
			"fill-rule": "fillRule",
			filter: "filter",
			filterres: "filterRes",
			filterunits: "filterUnits",
			floodopacity: "floodOpacity",
			"flood-opacity": "floodOpacity",
			floodcolor: "floodColor",
			"flood-color": "floodColor",
			focusable: "focusable",
			fontfamily: "fontFamily",
			"font-family": "fontFamily",
			fontsize: "fontSize",
			"font-size": "fontSize",
			fontsizeadjust: "fontSizeAdjust",
			"font-size-adjust": "fontSizeAdjust",
			fontstretch: "fontStretch",
			"font-stretch": "fontStretch",
			fontstyle: "fontStyle",
			"font-style": "fontStyle",
			fontvariant: "fontVariant",
			"font-variant": "fontVariant",
			fontweight: "fontWeight",
			"font-weight": "fontWeight",
			format: "format",
			from: "from",
			fx: "fx",
			fy: "fy",
			g1: "g1",
			g2: "g2",
			glyphname: "glyphName",
			"glyph-name": "glyphName",
			glyphorientationhorizontal: "glyphOrientationHorizontal",
			"glyph-orientation-horizontal": "glyphOrientationHorizontal",
			glyphorientationvertical: "glyphOrientationVertical",
			"glyph-orientation-vertical": "glyphOrientationVertical",
			glyphref: "glyphRef",
			gradienttransform: "gradientTransform",
			gradientunits: "gradientUnits",
			hanging: "hanging",
			horizadvx: "horizAdvX",
			"horiz-adv-x": "horizAdvX",
			horizoriginx: "horizOriginX",
			"horiz-origin-x": "horizOriginX",
			ideographic: "ideographic",
			imagerendering: "imageRendering",
			"image-rendering": "imageRendering",
			in2: "in2",
			in: "in",
			inlist: "inlist",
			intercept: "intercept",
			k1: "k1",
			k2: "k2",
			k3: "k3",
			k4: "k4",
			k: "k",
			kernelmatrix: "kernelMatrix",
			kernelunitlength: "kernelUnitLength",
			kerning: "kerning",
			keypoints: "keyPoints",
			keysplines: "keySplines",
			keytimes: "keyTimes",
			lengthadjust: "lengthAdjust",
			letterspacing: "letterSpacing",
			"letter-spacing": "letterSpacing",
			lightingcolor: "lightingColor",
			"lighting-color": "lightingColor",
			limitingconeangle: "limitingConeAngle",
			local: "local",
			markerend: "markerEnd",
			"marker-end": "markerEnd",
			markerheight: "markerHeight",
			markermid: "markerMid",
			"marker-mid": "markerMid",
			markerstart: "markerStart",
			"marker-start": "markerStart",
			markerunits: "markerUnits",
			markerwidth: "markerWidth",
			mask: "mask",
			maskcontentunits: "maskContentUnits",
			maskunits: "maskUnits",
			mathematical: "mathematical",
			mode: "mode",
			numoctaves: "numOctaves",
			offset: "offset",
			opacity: "opacity",
			operator: "operator",
			order: "order",
			orient: "orient",
			orientation: "orientation",
			origin: "origin",
			overflow: "overflow",
			overlineposition: "overlinePosition",
			"overline-position": "overlinePosition",
			overlinethickness: "overlineThickness",
			"overline-thickness": "overlineThickness",
			paintorder: "paintOrder",
			"paint-order": "paintOrder",
			panose1: "panose1",
			"panose-1": "panose1",
			pathlength: "pathLength",
			patterncontentunits: "patternContentUnits",
			patterntransform: "patternTransform",
			patternunits: "patternUnits",
			pointerevents: "pointerEvents",
			"pointer-events": "pointerEvents",
			points: "points",
			pointsatx: "pointsAtX",
			pointsaty: "pointsAtY",
			pointsatz: "pointsAtZ",
			popover: "popover",
			popovertarget: "popoverTarget",
			popovertargetaction: "popoverTargetAction",
			prefix: "prefix",
			preservealpha: "preserveAlpha",
			preserveaspectratio: "preserveAspectRatio",
			primitiveunits: "primitiveUnits",
			property: "property",
			r: "r",
			radius: "radius",
			refx: "refX",
			refy: "refY",
			renderingintent: "renderingIntent",
			"rendering-intent": "renderingIntent",
			repeatcount: "repeatCount",
			repeatdur: "repeatDur",
			requiredextensions: "requiredExtensions",
			requiredfeatures: "requiredFeatures",
			resource: "resource",
			restart: "restart",
			result: "result",
			results: "results",
			rotate: "rotate",
			rx: "rx",
			ry: "ry",
			scale: "scale",
			security: "security",
			seed: "seed",
			shaperendering: "shapeRendering",
			"shape-rendering": "shapeRendering",
			slope: "slope",
			spacing: "spacing",
			specularconstant: "specularConstant",
			specularexponent: "specularExponent",
			speed: "speed",
			spreadmethod: "spreadMethod",
			startoffset: "startOffset",
			stddeviation: "stdDeviation",
			stemh: "stemh",
			stemv: "stemv",
			stitchtiles: "stitchTiles",
			stopcolor: "stopColor",
			"stop-color": "stopColor",
			stopopacity: "stopOpacity",
			"stop-opacity": "stopOpacity",
			strikethroughposition: "strikethroughPosition",
			"strikethrough-position": "strikethroughPosition",
			strikethroughthickness: "strikethroughThickness",
			"strikethrough-thickness": "strikethroughThickness",
			string: "string",
			stroke: "stroke",
			strokedasharray: "strokeDasharray",
			"stroke-dasharray": "strokeDasharray",
			strokedashoffset: "strokeDashoffset",
			"stroke-dashoffset": "strokeDashoffset",
			strokelinecap: "strokeLinecap",
			"stroke-linecap": "strokeLinecap",
			strokelinejoin: "strokeLinejoin",
			"stroke-linejoin": "strokeLinejoin",
			strokemiterlimit: "strokeMiterlimit",
			"stroke-miterlimit": "strokeMiterlimit",
			strokewidth: "strokeWidth",
			"stroke-width": "strokeWidth",
			strokeopacity: "strokeOpacity",
			"stroke-opacity": "strokeOpacity",
			suppresscontenteditablewarning: "suppressContentEditableWarning",
			suppresshydrationwarning: "suppressHydrationWarning",
			surfacescale: "surfaceScale",
			systemlanguage: "systemLanguage",
			tablevalues: "tableValues",
			targetx: "targetX",
			targety: "targetY",
			textanchor: "textAnchor",
			"text-anchor": "textAnchor",
			textdecoration: "textDecoration",
			"text-decoration": "textDecoration",
			textlength: "textLength",
			textrendering: "textRendering",
			"text-rendering": "textRendering",
			to: "to",
			transform: "transform",
			transformorigin: "transformOrigin",
			"transform-origin": "transformOrigin",
			typeof: "typeof",
			u1: "u1",
			u2: "u2",
			underlineposition: "underlinePosition",
			"underline-position": "underlinePosition",
			underlinethickness: "underlineThickness",
			"underline-thickness": "underlineThickness",
			unicode: "unicode",
			unicodebidi: "unicodeBidi",
			"unicode-bidi": "unicodeBidi",
			unicoderange: "unicodeRange",
			"unicode-range": "unicodeRange",
			unitsperem: "unitsPerEm",
			"units-per-em": "unitsPerEm",
			unselectable: "unselectable",
			valphabetic: "vAlphabetic",
			"v-alphabetic": "vAlphabetic",
			values: "values",
			vectoreffect: "vectorEffect",
			"vector-effect": "vectorEffect",
			version: "version",
			vertadvy: "vertAdvY",
			"vert-adv-y": "vertAdvY",
			vertoriginx: "vertOriginX",
			"vert-origin-x": "vertOriginX",
			vertoriginy: "vertOriginY",
			"vert-origin-y": "vertOriginY",
			vhanging: "vHanging",
			"v-hanging": "vHanging",
			videographic: "vIdeographic",
			"v-ideographic": "vIdeographic",
			viewbox: "viewBox",
			viewtarget: "viewTarget",
			visibility: "visibility",
			vmathematical: "vMathematical",
			"v-mathematical": "vMathematical",
			vocab: "vocab",
			widths: "widths",
			wordspacing: "wordSpacing",
			"word-spacing": "wordSpacing",
			writingmode: "writingMode",
			"writing-mode": "writingMode",
			x1: "x1",
			x2: "x2",
			x: "x",
			xchannelselector: "xChannelSelector",
			xheight: "xHeight",
			"x-height": "xHeight",
			xlinkactuate: "xlinkActuate",
			"xlink:actuate": "xlinkActuate",
			xlinkarcrole: "xlinkArcrole",
			"xlink:arcrole": "xlinkArcrole",
			xlinkhref: "xlinkHref",
			"xlink:href": "xlinkHref",
			xlinkrole: "xlinkRole",
			"xlink:role": "xlinkRole",
			xlinkshow: "xlinkShow",
			"xlink:show": "xlinkShow",
			xlinktitle: "xlinkTitle",
			"xlink:title": "xlinkTitle",
			xlinktype: "xlinkType",
			"xlink:type": "xlinkType",
			xmlbase: "xmlBase",
			"xml:base": "xmlBase",
			xmllang: "xmlLang",
			"xml:lang": "xmlLang",
			xmlns: "xmlns",
			"xml:space": "xmlSpace",
			xmlnsxlink: "xmlnsXlink",
			"xmlns:xlink": "xmlnsXlink",
			xmlspace: "xmlSpace",
			y1: "y1",
			y2: "y2",
			y: "y",
			ychannelselector: "yChannelSelector",
			z: "z",
			zoomandpan: "zoomAndPan"
		}, hr = {}, gr = /^on./, _r = /^on[^A-Z]/, vr = RegExp("^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), yr = RegExp("^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), br = /^(?:webkit|moz|o)[A-Z]/, xr = /^-ms-/, Sr = /-(.)/g, Cr = /;\s*$/, wr = {}, Tr = {}, Er = !1, Dr = !1, Or = /["'&<>]/, kr = /([A-Z])/g, Ar = /^ms-/, jr = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i, Mr = jn.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Nr = Mn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Pr = Object.freeze({
			pending: !1,
			data: null,
			method: null,
			action: null
		}), Fr = Nr.d;
		Nr.d = {
			f: Fr.f,
			r: Fr.r,
			D: function(e) {
				var t = ks || null;
				if (t) {
					var n = t.resumableState, i = t.renderState;
					if (typeof e == "string" && e) {
						if (!n.dnsResources.hasOwnProperty(e)) {
							n.dnsResources[e] = Ur, n = i.headers;
							var a, o;
							(o = n && 0 < n.remainingCapacity) && (o = (a = "<" + je(e) + ">; rel=dns-prefetch", 0 <= (n.remainingCapacity -= a.length + 2))), o ? (i.resets.dns[e] = Ur, n.preconnects && (n.preconnects += ", "), n.preconnects += a) : (a = [], W(a, {
								href: e,
								rel: "dns-prefetch"
							}), i.preconnects.add(a));
						}
						Tn(t);
					}
				} else Fr.D(e);
			},
			C: function(e, t) {
				var n = ks || null;
				if (n) {
					var i = n.resumableState, a = n.renderState;
					if (typeof e == "string" && e) {
						var o = t === "use-credentials" ? "credentials" : typeof t == "string" ? "anonymous" : "default";
						if (!i.connectResources[o].hasOwnProperty(e)) {
							i.connectResources[o][e] = Ur, i = a.headers;
							var s, c;
							if (c = i && 0 < i.remainingCapacity) {
								if (c = "<" + je(e) + ">; rel=preconnect", typeof t == "string") {
									var l = Ne(t, "crossOrigin");
									c += "; crossorigin=\"" + l + "\"";
								}
								c = (s = c, 0 <= (i.remainingCapacity -= s.length + 2));
							}
							c ? (a.resets.connect[o][e] = Ur, i.preconnects && (i.preconnects += ", "), i.preconnects += s) : (o = [], W(o, {
								rel: "preconnect",
								href: e,
								crossOrigin: t
							}), a.preconnects.add(o));
						}
						Tn(n);
					}
				} else Fr.C(e, t);
			},
			L: function(e, t, n) {
				var i = ks || null;
				if (i) {
					var a = i.resumableState, o = i.renderState;
					if (t && e) {
						switch (t) {
							case "image":
								if (n) var s = n.imageSrcSet, c = n.imageSizes, l = n.fetchPriority;
								var u = s ? s + "\n" + (c || "") : e;
								if (a.imageResources.hasOwnProperty(u)) return;
								a.imageResources[u] = Wr, a = o.headers;
								var d;
								a && 0 < a.remainingCapacity && typeof s != "string" && l === "high" && (d = Ae(e, t, n), 0 <= (a.remainingCapacity -= d.length + 2)) ? (o.resets.image[u] = Wr, a.highImagePreloads && (a.highImagePreloads += ", "), a.highImagePreloads += d) : (a = [], W(a, tr({
									rel: "preload",
									href: s ? void 0 : e,
									as: t
								}, n)), l === "high" ? o.highImagePreloads.add(a) : (o.bulkPreloads.add(a), o.preloads.images.set(u, a)));
								break;
							case "style":
								if (a.styleResources.hasOwnProperty(e)) return;
								s = [], W(s, tr({
									rel: "preload",
									href: e,
									as: t
								}, n)), a.styleResources[e] = !n || typeof n.crossOrigin != "string" && typeof n.integrity != "string" ? Wr : [n.crossOrigin, n.integrity], o.preloads.stylesheets.set(e, s), o.bulkPreloads.add(s);
								break;
							case "script":
								if (a.scriptResources.hasOwnProperty(e)) return;
								s = [], o.preloads.scripts.set(e, s), o.bulkPreloads.add(s), W(s, tr({
									rel: "preload",
									href: e,
									as: t
								}, n)), a.scriptResources[e] = !n || typeof n.crossOrigin != "string" && typeof n.integrity != "string" ? Wr : [n.crossOrigin, n.integrity];
								break;
							default:
								if (a.unknownResources.hasOwnProperty(t)) {
									if (s = a.unknownResources[t], s.hasOwnProperty(e)) return;
								} else s = {}, a.unknownResources[t] = s;
								if (s[e] = Wr, (a = o.headers) && 0 < a.remainingCapacity && t === "font" && (u = Ae(e, t, n), 0 <= (a.remainingCapacity -= u.length + 2))) o.resets.font[e] = Wr, a.fontPreloads && (a.fontPreloads += ", "), a.fontPreloads += u;
								else switch (a = [], e = tr({
									rel: "preload",
									href: e,
									as: t
								}, n), W(a, e), t) {
									case "font":
										o.fontPreloads.add(a);
										break;
									default: o.bulkPreloads.add(a);
								}
						}
						Tn(i);
					}
				} else Fr.L(e, t, n);
			},
			m: function(e, t) {
				var n = ks || null;
				if (n) {
					var i = n.resumableState, a = n.renderState;
					if (e) {
						var o = t && typeof t.as == "string" ? t.as : "script";
						switch (o) {
							case "script":
								if (i.moduleScriptResources.hasOwnProperty(e)) return;
								o = [], i.moduleScriptResources[e] = !t || typeof t.crossOrigin != "string" && typeof t.integrity != "string" ? Wr : [t.crossOrigin, t.integrity], a.preloads.moduleScripts.set(e, o);
								break;
							default:
								if (i.moduleUnknownResources.hasOwnProperty(o)) {
									var s = i.unknownResources[o];
									if (s.hasOwnProperty(e)) return;
								} else s = {}, i.moduleUnknownResources[o] = s;
								o = [], s[e] = Wr;
						}
						W(o, tr({
							rel: "modulepreload",
							href: e
						}, t)), a.bulkPreloads.add(o), Tn(n);
					}
				} else Fr.m(e, t);
			},
			X: function(e, t) {
				var n = ks || null;
				if (n) {
					var i = n.resumableState, a = n.renderState;
					if (e) {
						var o = i.scriptResources.hasOwnProperty(e) ? i.scriptResources[e] : void 0;
						o !== Ur && (i.scriptResources[e] = Ur, t = tr({
							src: e,
							async: !0
						}, t), o && (o.length === 2 && ke(t, o), e = a.preloads.scripts.get(e)) && (e.length = 0), e = [], a.scripts.add(e), oe(e, t), Tn(n));
					}
				} else Fr.X(e, t);
			},
			S: function(e, t, n) {
				var i = ks || null;
				if (i) {
					var a = i.resumableState, o = i.renderState;
					if (e) {
						t ||= "default";
						var s = o.styles.get(t), c = a.styleResources.hasOwnProperty(e) ? a.styleResources[e] : void 0;
						c !== Ur && (a.styleResources[e] = Ur, s || (s = {
							precedence: E(t),
							rules: [],
							hrefs: [],
							sheets: /* @__PURE__ */ new Map()
						}, o.styles.set(t, s)), t = {
							state: Qa,
							props: tr({
								rel: "stylesheet",
								href: e,
								"data-precedence": t
							}, n)
						}, c && (c.length === 2 && ke(t.props, c), (o = o.preloads.stylesheets.get(e)) && 0 < o.length ? o.length = 0 : t.state = $a), s.sheets.set(e, t), Tn(i));
					}
				} else Fr.S(e, t, n);
			},
			M: function(e, t) {
				var n = ks || null;
				if (n) {
					var i = n.resumableState, a = n.renderState;
					if (e) {
						var o = i.moduleScriptResources.hasOwnProperty(e) ? i.moduleScriptResources[e] : void 0;
						o !== Ur && (i.moduleScriptResources[e] = Ur, t = tr({
							src: e,
							type: "module",
							async: !0
						}, t), o && (o.length === 2 && ke(t, o), e = a.preloads.moduleScripts.get(e)) && (e.length = 0), e = [], a.scripts.add(e), oe(e, t), Tn(n));
					}
				} else Fr.M(e, t);
			}
		};
		var Ir = 0, Lr = 1, Rr = 2, zr = 4, Br = 8, Vr = 32, Hr = 64, Ur = null, Wr = [];
		Object.freeze(Wr);
		var Gr = null, Kr = "<\/script>", qr = /(<\/|<)(s)(cript)/gi, Jr = {}, Yr = 0, Xr = 1, Zr = 2, Qr = 3, $r = 4, ei = 5, ti = 6, ni = 7, ri = 8, ii = 9, ai = /* @__PURE__ */ new Map(), oi = " style=\"", si = ":", ci = ";", li = " ", ui = "=\"", di = "\"", fi = "=\"\"", pi = E("javascript:throw new Error('React form unexpectedly submitted.')"), mi = ">", hi = "/>", gi = !1, _i = !1, vi = !1, yi = !1, bi = !1, xi = !1, Si = !1, Ci = !1, wi = !1, Ti = !1, Ei = !1, Di = "addEventListener(\"submit\",function(a){if(!a.defaultPrevented){var c=a.target,d=a.submitter,e=c.action,b=d;if(d){var f=d.getAttribute(\"formAction\");null!=f&&(e=f,b=null)}\"javascript:throw new Error('React form unexpectedly submitted.')\"===e&&(a.preventDefault(),b?(a=document.createElement(\"input\"),a.name=b.name,a.value=b.value,b.parentNode.insertBefore(a,b),b=new FormData(c),a.parentNode.removeChild(a)):b=new FormData(c),a=c.ownerDocument||c,(a.$$reactFormReplay=a.$$reactFormReplay||[]).push(c,d,b))}});", Oi = /(<\/|<)(s)(tyle)/gi, ki = "\n", Ai = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, ji = /* @__PURE__ */ new Map(), Mi = /* @__PURE__ */ new Map(), Ni = "requestAnimationFrame(function(){$RT=performance.now()});", Pi = "<template id=\"", Fi = "\"></template>", Ii = "<!--$-->", Li = "<!--$?--><template id=\"", Ri = "\"></template>", zi = "<!--$!-->", Bi = "<!--/$-->", Vi = "<template", Hi = "\"", Ui = " data-dgst=\"", Wi = " data-msg=\"", Gi = " data-stck=\"", Ki = " data-cstck=\"", qi = "></template>", Ji = "<div hidden id=\"", Yi = "\">", Xi = "</div>", Zi = "<svg aria-hidden=\"true\" style=\"display:none\" id=\"", Qi = "\">", $i = "</svg>", ea = "<math aria-hidden=\"true\" style=\"display:none\" id=\"", ta = "\">", na = "</math>", ra = "<table hidden id=\"", ia = "\">", aa = "</table>", oa = "<table hidden><tbody id=\"", sa = "\">", ca = "</tbody></table>", la = "<table hidden><tr id=\"", ua = "\">", da = "</tr></table>", fa = "<table hidden><colgroup id=\"", pa = "\">", ma = "</colgroup></table>", ha = "$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS(\"", ga = "$RS(\"", _a = "\",\"", va = "\")<\/script>", ya = "$RB=[];$RV=function(a){$RT=performance.now();for(var b=0;b<a.length;b+=2){var c=a[b],e=a[b+1];null!==e.parentNode&&e.parentNode.removeChild(e);var f=c.parentNode;if(f){var g=c.previousSibling,h=0;do{if(c&&8===c.nodeType){var d=c.data;if(\"/$\"===d||\"/&\"===d)if(0===h)break;else h--;else\"$\"!==d&&\"$?\"!==d&&\"$~\"!==d&&\"$!\"!==d&&\"&\"!==d||h++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;e.firstChild;)f.insertBefore(e.firstChild,c);g.data=\"$\";g._reactRetry&&requestAnimationFrame(g._reactRetry)}}a.length=0};\n$RC=function(a,b){if(b=document.getElementById(b))(a=document.getElementById(a))?(a.previousSibling.data=\"$~\",$RB.push(a,b),2===$RB.length&&(\"number\"!==typeof $RT?requestAnimationFrame($RV.bind(null,$RB)):(a=performance.now(),setTimeout($RV.bind(null,$RB),2300>a&&2E3<a?2300-a:$RT+300-a)))):b.parentNode.removeChild(b)};", ba = "$RC(\"", xa = "$RM=new Map;$RR=function(n,w,p){function u(q){this._p=null;q()}for(var r=new Map,t=document,h,b,e=t.querySelectorAll(\"link[data-precedence],style[data-precedence]\"),v=[],k=0;b=e[k++];)\"not all\"===b.getAttribute(\"media\")?v.push(b):(\"LINK\"===b.tagName&&$RM.set(b.getAttribute(\"href\"),b),r.set(b.dataset.precedence,h=b));e=0;b=[];var l,a;for(k=!0;;){if(k){var f=p[e++];if(!f){k=!1;e=0;continue}var c=!1,m=0;var d=f[m++];if(a=$RM.get(d)){var g=a._p;c=!0}else{a=t.createElement(\"link\");a.href=d;a.rel=\n\"stylesheet\";for(a.dataset.precedence=l=f[m++];g=f[m++];)a.setAttribute(g,f[m++]);g=a._p=new Promise(function(q,x){a.onload=u.bind(a,q);a.onerror=u.bind(a,x)});$RM.set(d,a)}d=a.getAttribute(\"media\");!g||d&&!matchMedia(d).matches||b.push(g);if(c)continue}else{a=v[e++];if(!a)break;l=a.getAttribute(\"data-precedence\");a.removeAttribute(\"media\")}c=r.get(l)||h;c===h&&(h=a);r.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=t.head,c.insertBefore(a,c.firstChild))}if(p=document.getElementById(n))p.previousSibling.data=\n\"$~\";Promise.all(b).then($RC.bind(null,n,w),$RX.bind(null,n,\"CSS failed to load\"))};$RR(\"", Sa = "$RR(\"", Ca = "\",\"", wa = "\",", Ta = "\"", Ea = ")<\/script>", Da = "$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data=\"$!\",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};", Oa = "$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data=\"$!\",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};;$RX(\"", ka = "$RX(\"", Aa = "\"", ja = ",", Ma = ")<\/script>", Na = /[<\u2028\u2029]/g, Pa = /[&><\u2028\u2029]/g, Fa = " media=\"not all\" data-precedence=\"", Ia = "\" data-href=\"", La = "\">", Ra = "</style>", za = !1, Ba = !0, Va = [], Ha = " data-precedence=\"", Ua = "\" data-href=\"", Wa = " ", Ga = "\">", Ka = "</style>", qa = " id=\"", Ja = "[", Ya = ",[", Xa = ",", Za = "]", Qa = 0, $a = 1, eo = 2, to = 3, no = /[<>\r\n]/g, ro = /["';,\r\n]/g, io = "", ao = Function.prototype.bind, oo = Symbol.for("react.client.reference"), so = {};
		Object.freeze(so);
		var co = {}, lo = null, uo = {}, fo = {}, po = /* @__PURE__ */ new Set(), mo = /* @__PURE__ */ new Set(), ho = /* @__PURE__ */ new Set(), go = /* @__PURE__ */ new Set(), _o = /* @__PURE__ */ new Set(), vo = /* @__PURE__ */ new Set(), yo = /* @__PURE__ */ new Set(), bo = /* @__PURE__ */ new Set(), xo = /* @__PURE__ */ new Set(), So = {
			enqueueSetState: function(e, t, n) {
				var i = e._reactInternals;
				i.queue === null ? Y(e, "setState") : (i.queue.push(t), n != null && qe(n));
			},
			enqueueReplaceState: function(e, t, n) {
				e = e._reactInternals, e.replace = !0, e.queue = [t], n != null && qe(n);
			},
			enqueueForceUpdate: function(e, t) {
				e._reactInternals.queue === null ? Y(e, "forceUpdate") : t != null && qe(t);
			}
		}, Co = {
			id: 1,
			overflow: ""
		}, wo = Math.clz32 ? Math.clz32 : Je, To = Math.log, Eo = Math.LN2, Do = Error("Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."), Oo = null, ko = typeof Object.is == "function" ? Object.is : Qe, Ao = null, jo = null, Mo = null, No = null, Po = null, Fo = null, Io = !1, Lo = !1, Ro = 0, zo = 0, Bo = -1, Vo = 0, Ho = null, Uo = null, Wo = 0, Go = !1, Ko, qo = {
			readContext: it,
			use: function(e) {
				if (typeof e == "object" && e) {
					if (typeof e.then == "function") return pt(e);
					if (e.$$typeof === zn) return it(e);
				}
				throw Error("An unsupported type was passed to use(): " + String(e));
			},
			useContext: function(e) {
				return Ko = "useContext", $e(), e._currentValue2;
			},
			useMemo: st,
			useReducer: ot,
			useRef: function(e) {
				Ao = $e(), Fo = tt();
				var t = Fo.memoizedState;
				return t === null ? (e = { current: e }, Object.seal(e), Fo.memoizedState = e) : t;
			},
			useState: function(e) {
				return Ko = "useState", ot(at, e);
			},
			useInsertionEffect: Ye,
			useLayoutEffect: Ye,
			useCallback: function(e, t) {
				return st(function() {
					return e;
				}, t);
			},
			useImperativeHandle: Ye,
			useEffect: Ye,
			useDebugValue: Ye,
			useDeferredValue: function(e, t) {
				return $e(), t === void 0 ? e : t;
			},
			useTransition: function() {
				return $e(), [!1, ut];
			},
			useId: function() {
				var e = jo.treeContext, t = e.overflow;
				e = e.id, e = (e & ~(1 << 32 - wo(e) - 1)).toString(32) + t;
				var n = Jo;
				if (n === null) throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
				return t = Ro++, e = "_" + n.idPrefix + "R_" + e, 0 < t && (e += "H" + t.toString(32)), e + "_";
			},
			useSyncExternalStore: function(e, t, n) {
				if (n === void 0) throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
				return n();
			},
			useOptimistic: function(e) {
				return $e(), [e, dt];
			},
			useActionState: ft,
			useFormState: ft,
			useHostTransitionStatus: function() {
				return $e(), Pr;
			},
			useMemoCache: function(e) {
				for (var t = Array(e), n = 0; n < e; n++) t[n] = Jn;
				return t;
			},
			useCacheRefresh: function() {
				return mt;
			},
			useEffectEvent: function() {
				return lt;
			}
		}, Jo = null, Yo = null, Xo = {
			getCacheForType: function() {
				throw Error("Not implemented.");
			},
			cacheSignal: function() {
				throw Error("Not implemented.");
			},
			getOwner: function() {
				return Yo === null ? null : Yo.componentStack;
			}
		}, Zo = 0, Qo, $o, es, ts, ns, rs, os;
		ht.__reactDisabledLog = !0;
		var ss, cs, ls = !1, us = new (typeof WeakMap == "function" ? WeakMap : Map)(), ds = { react_stack_bottom_frame: function(e, t, n) {
			return e(t, n);
		} }, fs = ds.react_stack_bottom_frame.bind(ds), ps = { react_stack_bottom_frame: function(e) {
			return e.render();
		} }, ms = ps.react_stack_bottom_frame.bind(ps), hs = { react_stack_bottom_frame: function(e) {
			var t = e._init;
			return t(e._payload);
		} }, gs = hs.react_stack_bottom_frame.bind(hs), _s = 0;
		if (typeof performance == "object" && typeof performance.now == "function") var vs = performance, ys = function() {
			return vs.now();
		};
		else {
			var bs = Date;
			ys = function() {
				return bs.now();
			};
		}
		var xs = 4, Ss = 0, Cs = 1, ws = 2, Ts = 3, Es = 4, Ds = 5, Os = 14, ks = null, As = {}, js = {}, Ms = {}, Ns = {}, Ps = !1, Fs = !1, Is = !1, Ls = 0, Rs = !1;
		e.renderToStaticMarkup = function(e, t) {
			return An(e, t, !0, "The server used \"renderToStaticMarkup\" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to \"renderToReadableStream\" which supports Suspense on the server");
		}, e.renderToString = function(e, t) {
			return An(e, t, !1, "The server used \"renderToString\" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to \"renderToReadableStream\" which supports Suspense on the server");
		}, e.version = "19.2.0";
	})();
})), require_react_dom_server_browser_development = /* @__PURE__ */ __commonJSMin(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		function t(e, t, n, i) {
			return "" + t + (n === "s" ? "\\73 " : "\\53 ") + i;
		}
		function n(e, t, n, i) {
			return "" + t + (n === "s" ? "\\u0073" : "\\u0053") + i;
		}
		function i(e) {
			return typeof e != "object" || !e ? null : (e = fr && e[fr] || e["@@iterator"], typeof e == "function" ? e : null);
		}
		function a(e) {
			return e = Object.prototype.toString.call(e), e.slice(8, e.length - 1);
		}
		function o(e) {
			var t = JSON.stringify(e);
			return "\"" + e + "\"" === t ? e : t;
		}
		function s(e) {
			switch (typeof e) {
				case "string": return JSON.stringify(10 >= e.length ? e : e.slice(0, 10) + "...");
				case "object": return pr(e) ? "[...]" : e !== null && e.$$typeof === gr ? "client" : (e = a(e), e === "Object" ? "{...}" : e);
				case "function": return e.$$typeof === gr ? "client" : (e = e.displayName || e.name) ? "function " + e : "function";
				default: return String(e);
			}
		}
		function c(e) {
			if (typeof e == "string") return e;
			switch (e) {
				case rr: return "Suspense";
				case ir: return "SuspenseList";
			}
			if (typeof e == "object") switch (e.$$typeof) {
				case nr: return c(e.render);
				case ar: return c(e.type);
				case or:
					var t = e._payload;
					e = e._init;
					try {
						return c(e(t));
					} catch {}
			}
			return "";
		}
		function l(e, t) {
			var n = a(e);
			if (n !== "Object" && n !== "Array") return n;
			var i = -1, u = 0;
			if (pr(e)) if (hr.has(e)) {
				var d = hr.get(e);
				n = "<" + c(d) + ">";
				for (var f = 0; f < e.length; f++) {
					var p = e[f];
					p = typeof p == "string" ? p : typeof p == "object" && p ? "{" + l(p) + "}" : "{" + s(p) + "}", "" + f === t ? (i = n.length, u = p.length, n += p) : n = 15 > p.length && 40 > n.length + p.length ? n + p : n + "{...}";
				}
				n += "</" + c(d) + ">";
			} else {
				for (n = "[", d = 0; d < e.length; d++) 0 < d && (n += ", "), f = e[d], f = typeof f == "object" && f ? l(f) : s(f), "" + d === t ? (i = n.length, u = f.length, n += f) : n = 10 > f.length && 40 > n.length + f.length ? n + f : n + "...";
				n += "]";
			}
			else if (e.$$typeof === Yn) n = "<" + c(e.type) + "/>";
			else {
				if (e.$$typeof === gr) return "client";
				if (mr.has(e)) {
					for (n = mr.get(e), n = "<" + (c(n) || "..."), d = Object.keys(e), f = 0; f < d.length; f++) {
						n += " ", p = d[f], n += o(p) + "=";
						var m = e[p], h = p === t && typeof m == "object" && m ? l(m) : s(m);
						typeof m != "string" && (h = "{" + h + "}"), p === t ? (i = n.length, u = h.length, n += h) : n = 10 > h.length && 40 > n.length + h.length ? n + h : n + "...";
					}
					n += ">";
				} else {
					for (n = "{", d = Object.keys(e), f = 0; f < d.length; f++) 0 < f && (n += ", "), p = d[f], n += o(p) + ": ", m = e[p], m = typeof m == "object" && m ? l(m) : s(m), p === t ? (i = n.length, u = m.length, n += m) : n = 10 > m.length && 40 > n.length + m.length ? n + m : n + "...";
					n += "}";
				}
			}
			return t === void 0 ? n : -1 < i && 0 < u ? (e = " ".repeat(i) + "^".repeat(u), "\n  " + n + "\n  " + e) : "\n  " + n;
		}
		function u(e, t) {
			var n = e.length & 3, i = e.length - n, a = t;
			for (t = 0; t < i;) {
				var o = e.charCodeAt(t) & 255 | (e.charCodeAt(++t) & 255) << 8 | (e.charCodeAt(++t) & 255) << 16 | (e.charCodeAt(++t) & 255) << 24;
				++t, o = 3432918353 * (o & 65535) + ((3432918353 * (o >>> 16) & 65535) << 16) & 4294967295, o = o << 15 | o >>> 17, o = 461845907 * (o & 65535) + ((461845907 * (o >>> 16) & 65535) << 16) & 4294967295, a ^= o, a = a << 13 | a >>> 19, a = 5 * (a & 65535) + ((5 * (a >>> 16) & 65535) << 16) & 4294967295, a = (a & 65535) + 27492 + (((a >>> 16) + 58964 & 65535) << 16);
			}
			switch (o = 0, n) {
				case 3: o ^= (e.charCodeAt(t + 2) & 255) << 16;
				case 2: o ^= (e.charCodeAt(t + 1) & 255) << 8;
				case 1: o ^= e.charCodeAt(t) & 255, o = 3432918353 * (o & 65535) + ((3432918353 * (o >>> 16) & 65535) << 16) & 4294967295, o = o << 15 | o >>> 17, a ^= 461845907 * (o & 65535) + ((461845907 * (o >>> 16) & 65535) << 16) & 4294967295;
			}
			return a ^= e.length, a ^= a >>> 16, a = 2246822507 * (a & 65535) + ((2246822507 * (a >>> 16) & 65535) << 16) & 4294967295, a ^= a >>> 13, a = 3266489909 * (a & 65535) + ((3266489909 * (a >>> 16) & 65535) << 16) & 4294967295, (a ^ a >>> 16) >>> 0;
		}
		function d(e) {
			vr.push(e), _r.port2.postMessage(null);
		}
		function p(e) {
			setTimeout(function() {
				throw e;
			});
		}
		function m(e, t) {
			if (t.byteLength !== 0) if (2048 < t.byteLength) 0 < Sr && (e.enqueue(new Uint8Array(xr.buffer, 0, Sr)), xr = new Uint8Array(2048), Sr = 0), e.enqueue(t);
			else {
				var n = xr.length - Sr;
				n < t.byteLength && (n === 0 ? e.enqueue(xr) : (xr.set(t.subarray(0, n), Sr), e.enqueue(xr), t = t.subarray(n)), xr = new Uint8Array(2048), Sr = 0), xr.set(t, Sr), Sr += t.byteLength;
			}
		}
		function g(e, t) {
			return m(e, t), !0;
		}
		function _(e) {
			xr && 0 < Sr && (e.enqueue(new Uint8Array(xr.buffer, 0, Sr)), xr = null, Sr = 0);
		}
		function v(e) {
			return Cr.encode(e);
		}
		function y(e) {
			return e = Cr.encode(e), 2048 < e.byteLength && console.error("precomputed chunks must be smaller than the view size configured for this host. This is a bug in React."), e;
		}
		function b(e) {
			return e.byteLength;
		}
		function x(e, t) {
			typeof e.error == "function" ? e.error(t) : e.close();
		}
		function S(e) {
			return typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
		}
		function C(e) {
			try {
				return w(e), !1;
			} catch {
				return !0;
			}
		}
		function w(e) {
			return "" + e;
		}
		function T(e, t) {
			if (C(e)) return console.error("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.", t, S(e)), w(e);
		}
		function E(e, t) {
			if (C(e)) return console.error("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.", t, S(e)), w(e);
		}
		function D(e) {
			if (C(e)) return console.error("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.", S(e)), w(e);
		}
		function O(e) {
			return Tr.call(Or, e) ? !0 : Tr.call(Dr, e) ? !1 : Er.test(e) ? Or[e] = !0 : (Dr[e] = !0, console.error("Invalid attribute name: `%s`", e), !1);
		}
		function k(e, t) {
			jr[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || (e === "select" ? console.error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`.") : console.error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.")), t.onChange || t.readOnly || t.disabled || t.checked == null || console.error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
		}
		function A(e, t) {
			if (Tr.call(Nr, t) && Nr[t]) return !0;
			if (Fr.test(t)) {
				if (e = "aria-" + t.slice(4).toLowerCase(), e = Mr.hasOwnProperty(e) ? e : null, e == null) return console.error("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Nr[t] = !0;
				if (t !== e) return console.error("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, e), Nr[t] = !0;
			}
			if (Pr.test(t)) {
				if (e = t.toLowerCase(), e = Mr.hasOwnProperty(e) ? e : null, e == null) return Nr[t] = !0, !1;
				t !== e && (console.error("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, e), Nr[t] = !0);
			}
			return !0;
		}
		function j(e, t) {
			var n = [], i;
			for (i in t) A(e, i) || n.push(i);
			t = n.map(function(e) {
				return "`" + e + "`";
			}).join(", "), n.length === 1 ? console.error("Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props", t, e) : 1 < n.length && console.error("Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props", t, e);
		}
		function M(e, t, n, i) {
			if (Tr.call(Rr, t) && Rr[t]) return !0;
			var a = t.toLowerCase();
			if (a === "onfocusin" || a === "onfocusout") return console.error("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Rr[t] = !0;
			if (typeof n == "function" && (e === "form" && t === "action" || e === "input" && t === "formAction" || e === "button" && t === "formAction")) return !0;
			if (i != null) {
				if (e = i.possibleRegistrationNames, i.registrationNameDependencies.hasOwnProperty(t)) return !0;
				if (i = e.hasOwnProperty(a) ? e[a] : null, i != null) return console.error("Invalid event handler property `%s`. Did you mean `%s`?", t, i), Rr[t] = !0;
				if (zr.test(t)) return console.error("Unknown event handler property `%s`. It will be ignored.", t), Rr[t] = !0;
			} else if (zr.test(t)) return Br.test(t) && console.error("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Rr[t] = !0;
			if (Vr.test(t) || Hr.test(t)) return !0;
			if (a === "innerhtml") return console.error("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Rr[t] = !0;
			if (a === "aria") return console.error("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Rr[t] = !0;
			if (a === "is" && n != null && typeof n != "string") return console.error("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof n), Rr[t] = !0;
			if (typeof n == "number" && isNaN(n)) return console.error("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Rr[t] = !0;
			if (Lr.hasOwnProperty(a)) {
				if (a = Lr[a], a !== t) return console.error("Invalid DOM property `%s`. Did you mean `%s`?", t, a), Rr[t] = !0;
			} else if (t !== a) return console.error("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, a), Rr[t] = !0;
			switch (t) {
				case "dangerouslySetInnerHTML":
				case "children":
				case "style":
				case "suppressContentEditableWarning":
				case "suppressHydrationWarning":
				case "defaultValue":
				case "defaultChecked":
				case "innerHTML":
				case "ref": return !0;
				case "innerText":
				case "textContent": return !0;
			}
			switch (typeof n) {
				case "boolean": switch (t) {
					case "autoFocus":
					case "checked":
					case "multiple":
					case "muted":
					case "selected":
					case "contentEditable":
					case "spellCheck":
					case "draggable":
					case "value":
					case "autoReverse":
					case "externalResourcesRequired":
					case "focusable":
					case "preserveAlpha":
					case "allowFullScreen":
					case "async":
					case "autoPlay":
					case "controls":
					case "default":
					case "defer":
					case "disabled":
					case "disablePictureInPicture":
					case "disableRemotePlayback":
					case "formNoValidate":
					case "hidden":
					case "loop":
					case "noModule":
					case "noValidate":
					case "open":
					case "playsInline":
					case "readOnly":
					case "required":
					case "reversed":
					case "scoped":
					case "seamless":
					case "itemScope":
					case "capture":
					case "download":
					case "inert": return !0;
					default: return a = t.toLowerCase().slice(0, 5), a === "data-" || a === "aria-" ? !0 : (n ? console.error("Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s=\"%s\" or %s={value.toString()}.", n, t, t, n, t) : console.error("Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s=\"%s\" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", n, t, t, n, t, t, t), Rr[t] = !0);
				}
				case "function":
				case "symbol": return Rr[t] = !0, !1;
				case "string": if (n === "false" || n === "true") {
					switch (t) {
						case "checked":
						case "selected":
						case "multiple":
						case "muted":
						case "allowFullScreen":
						case "async":
						case "autoPlay":
						case "controls":
						case "default":
						case "defer":
						case "disabled":
						case "disablePictureInPicture":
						case "disableRemotePlayback":
						case "formNoValidate":
						case "hidden":
						case "loop":
						case "noModule":
						case "noValidate":
						case "open":
						case "playsInline":
						case "readOnly":
						case "required":
						case "reversed":
						case "scoped":
						case "seamless":
						case "itemScope":
						case "inert": break;
						default: return !0;
					}
					console.error("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", n, t, n === "false" ? "The browser will interpret it as a truthy value." : "Although this works, it will not work as expected if you pass the string \"false\".", t, n), Rr[t] = !0;
				}
			}
			return !0;
		}
		function N(e, t, n) {
			var i = [], a;
			for (a in t) M(e, a, t[a], n) || i.push(a);
			t = i.map(function(e) {
				return "`" + e + "`";
			}).join(", "), i.length === 1 ? console.error("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ", t, e) : 1 < i.length && console.error("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ", t, e);
		}
		function P(e) {
			return e.replace(Gr, function(e, t) {
				return t.toUpperCase();
			});
		}
		function F(e) {
			if (typeof e == "boolean" || typeof e == "number" || typeof e == "bigint") return "" + e;
			D(e), e = "" + e;
			var t = Zr.exec(e);
			if (t) {
				var n = "", i, a = 0;
				for (i = t.index; i < e.length; i++) {
					switch (e.charCodeAt(i)) {
						case 34:
							t = "&quot;";
							break;
						case 38:
							t = "&amp;";
							break;
						case 39:
							t = "&#x27;";
							break;
						case 60:
							t = "&lt;";
							break;
						case 62:
							t = "&gt;";
							break;
						default: continue;
					}
					a !== i && (n += e.slice(a, i)), a = i + 1, n += t;
				}
				e = a === i ? n : n + e.slice(a, i);
			}
			return e;
		}
		function I(e) {
			return ei.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
		}
		function L(e) {
			return D(e), ("" + e).replace(wi, n);
		}
		function R(e, t, n, i, a, o) {
			n = typeof t == "string" ? t : t && t.script;
			var s = n === void 0 ? hi : y("<script nonce=\"" + F(n) + "\""), c = typeof t == "string" ? void 0 : t && t.style, l = c === void 0 ? Ci : y("<style nonce=\"" + F(c) + "\""), u = e.idPrefix, d = [], f = e.bootstrapScriptContent, p = e.bootstrapScripts, m = e.bootstrapModules;
			if (f !== void 0 && (d.push(s), Le(d, e), d.push(Yi, v(L(f)), gi)), f = [], i !== void 0 && (f.push(Ti), f.push(v(L(JSON.stringify(i)))), f.push(Ei)), a && typeof o == "number" && 0 >= o && console.error("React expected a positive non-zero `maxHeadersLength` option but found %s instead. When using the `onHeaders` option you may supply an optional `maxHeadersLength` option as well however, when setting this value to zero or less no headers will be captured.", o === 0 ? "zero" : o), i = a ? {
				preconnects: "",
				fontPreloads: "",
				highImagePreloads: "",
				remainingCapacity: 2 + (typeof o == "number" ? o : 2e3)
			} : null, a = {
				placeholderPrefix: y(u + "P:"),
				segmentPrefix: y(u + "S:"),
				boundaryPrefix: y(u + "B:"),
				startInlineScript: s,
				startInlineStyle: l,
				preamble: z(),
				externalRuntimeScript: null,
				bootstrapChunks: d,
				importMapChunks: f,
				onHeaders: a,
				headers: i,
				resets: {
					font: {},
					dns: {},
					connect: {
						default: {},
						anonymous: {},
						credentials: {}
					},
					image: {},
					style: {}
				},
				charsetChunks: [],
				viewportChunks: [],
				hoistableChunks: [],
				preconnects: /* @__PURE__ */ new Set(),
				fontPreloads: /* @__PURE__ */ new Set(),
				highImagePreloads: /* @__PURE__ */ new Set(),
				styles: /* @__PURE__ */ new Map(),
				bootstrapScripts: /* @__PURE__ */ new Set(),
				scripts: /* @__PURE__ */ new Set(),
				bulkPreloads: /* @__PURE__ */ new Set(),
				preloads: {
					images: /* @__PURE__ */ new Map(),
					stylesheets: /* @__PURE__ */ new Map(),
					scripts: /* @__PURE__ */ new Map(),
					moduleScripts: /* @__PURE__ */ new Map()
				},
				nonce: {
					script: n,
					style: c
				},
				hoistableState: null,
				stylesToHoist: !1
			}, p !== void 0) for (i = 0; i < p.length; i++) o = p[i], l = c = void 0, u = {
				rel: "preload",
				as: "script",
				fetchPriority: "low",
				nonce: t
			}, typeof o == "string" ? u.href = s = o : (u.href = s = o.src, u.integrity = l = typeof o.integrity == "string" ? o.integrity : void 0, u.crossOrigin = c = typeof o == "string" || o.crossOrigin == null ? void 0 : o.crossOrigin === "use-credentials" ? "use-credentials" : ""), Ve(e, a, s, u), d.push(_i, v(F(s)), Gi), n && d.push(yi, v(F(n)), Gi), typeof l == "string" && d.push(bi, v(F(l)), Gi), typeof c == "string" && d.push(xi, v(F(c)), Gi), Le(d, e), d.push(Si);
			if (m !== void 0) for (t = 0; t < m.length; t++) p = m[t], s = o = void 0, c = {
				rel: "modulepreload",
				fetchPriority: "low",
				nonce: n
			}, typeof p == "string" ? c.href = i = p : (c.href = i = p.src, c.integrity = s = typeof p.integrity == "string" ? p.integrity : void 0, c.crossOrigin = o = typeof p == "string" || p.crossOrigin == null ? void 0 : p.crossOrigin === "use-credentials" ? "use-credentials" : ""), Ve(e, a, i, c), d.push(vi, v(F(i)), Gi), n && d.push(yi, v(F(n)), Gi), typeof s == "string" && d.push(bi, v(F(s)), Gi), typeof o == "string" && d.push(xi, v(F(o)), Gi), Le(d, e), d.push(Si);
			return a;
		}
		function ee(e, t, n, i, a) {
			return {
				idPrefix: e === void 0 ? "" : e,
				nextFormID: 0,
				streamingFormat: 0,
				bootstrapScriptContent: n,
				bootstrapScripts: i,
				bootstrapModules: a,
				instructions: ai,
				hasBody: !1,
				hasHtml: !1,
				unknownResources: {},
				dnsResources: {},
				connectResources: {
					default: {},
					anonymous: {},
					credentials: {}
				},
				imageResources: {},
				styleResources: {},
				scriptResources: {},
				moduleUnknownResources: {},
				moduleScriptResources: {}
			};
		}
		function z() {
			return {
				htmlChunks: null,
				headChunks: null,
				bodyChunks: null
			};
		}
		function B(e, t, n, i) {
			return {
				insertionMode: e,
				selectedValue: t,
				tagScope: n,
				viewTransition: i
			};
		}
		function V(e) {
			return B(e === "http://www.w3.org/2000/svg" ? Mi : e === "http://www.w3.org/1998/Math/MathML" ? Ni : Oi, null, 0, null);
		}
		function te(e, t, n) {
			var i = e.tagScope & -25;
			switch (t) {
				case "noscript": return B(Ai, null, i | 1, null);
				case "select": return B(Ai, n.value == null ? n.defaultValue : n.value, i, null);
				case "svg": return B(Mi, null, i, null);
				case "picture": return B(Ai, null, i | 2, null);
				case "math": return B(Ni, null, i, null);
				case "foreignObject": return B(Ai, null, i, null);
				case "table": return B(Pi, null, i, null);
				case "thead":
				case "tbody":
				case "tfoot": return B(Fi, null, i, null);
				case "colgroup": return B(Li, null, i, null);
				case "tr": return B(Ii, null, i, null);
				case "head":
					if (e.insertionMode < Ai) return B(ji, null, i, null);
					break;
				case "html": if (e.insertionMode === Oi) return B(ki, null, i, null);
			}
			return e.insertionMode >= Pi || e.insertionMode < Ai ? B(Ai, null, i, null) : e.tagScope === i ? e : B(e.insertionMode, e.selectedValue, i, null);
		}
		function H(e) {
			return e === null ? null : {
				update: e.update,
				enter: "none",
				exit: "none",
				share: e.update,
				name: e.autoName,
				autoName: e.autoName,
				nameIdx: 0
			};
		}
		function U(e, t) {
			return t.tagScope & 32 && (e.instructions |= 128), B(t.insertionMode, t.selectedValue, t.tagScope | 12, H(t.viewTransition));
		}
		function ne(e, t) {
			e = H(t.viewTransition);
			var n = t.tagScope | 16;
			return e !== null && e.share !== "none" && (n |= 64), B(t.insertionMode, t.selectedValue, n, e);
		}
		function W(e, t, n, i) {
			return t === "" ? i : (i && e.push(Ri), e.push(v(F(t))), !0);
		}
		function re(e, t) {
			if (typeof t != "object") throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
			var n = !0, i;
			for (i in t) if (Tr.call(t, i)) {
				var a = t[i];
				if (a != null && typeof a != "boolean" && a !== "") {
					if (i.indexOf("--") === 0) {
						var o = v(F(i));
						E(a, i), a = v(F(("" + a).trim()));
					} else {
						o = i;
						var s = a;
						if (-1 < o.indexOf("-")) {
							var c = o;
							qr.hasOwnProperty(c) && qr[c] || (qr[c] = !0, console.error("Unsupported style property %s. Did you mean %s?", c, P(c.replace(Wr, "ms-"))));
						} else if (Ur.test(o)) c = o, qr.hasOwnProperty(c) && qr[c] || (qr[c] = !0, console.error("Unsupported vendor-prefixed style property %s. Did you mean %s?", c, c.charAt(0).toUpperCase() + c.slice(1)));
						else if (Kr.test(s)) {
							c = o;
							var l = s;
							Jr.hasOwnProperty(l) && Jr[l] || (Jr[l] = !0, console.error("Style property values shouldn't contain a semicolon. Try \"%s: %s\" instead.", c, l.replace(Kr, "")));
						}
						typeof s == "number" && (isNaN(s) ? Yr || (Yr = !0, console.error("`NaN` is an invalid value for the `%s` css style property.", o)) : isFinite(s) || Xr || (Xr = !0, console.error("`Infinity` is an invalid value for the `%s` css style property.", o))), o = i, s = zi.get(o), s === void 0 ? (s = y(F(o.replace(Qr, "-$1").toLowerCase().replace($r, "-ms-"))), zi.set(o, s), o = s) : o = s, typeof a == "number" ? a = a === 0 || kr.has(i) ? v("" + a) : v(a + "px") : (E(a, i), a = v(F(("" + a).trim())));
					}
					n ? (n = !1, e.push(Bi, o, Vi, a)) : e.push(Hi, o, Vi, a);
				}
			}
			n || e.push(Gi);
		}
		function ie(e, t, n) {
			n && typeof n != "function" && typeof n != "symbol" && e.push(Ui, v(t), Ki);
		}
		function ae(e, t, n) {
			typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && e.push(Ui, v(t), Wi, v(F(n)), Gi);
		}
		function oe(e, t) {
			this.push(Ji), se(e), ae(this, "name", t), ae(this, "value", e), this.push(Xi);
		}
		function se(e) {
			if (typeof e != "string") throw Error("File/Blob fields are not yet supported in progressive forms. Will fallback to client hydration.");
		}
		function G(e, t) {
			if (typeof t.$$FORM_ACTION == "function") {
				var n = e.nextFormID++;
				e = e.idPrefix + n;
				try {
					var i = t.$$FORM_ACTION(e);
					return i && i.data?.forEach(se), i;
				} catch (e) {
					if (typeof e == "object" && e && typeof e.then == "function") throw e;
					console.error("Failed to serialize an action for progressive enhancement:\n%s", e);
				}
			}
			return null;
		}
		function ce(e, t, n, i, a, o, s, c) {
			var l = null;
			if (typeof i == "function") {
				c === null || aa || (aa = !0, console.error("Cannot specify a \"name\" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.")), a === null && o === null || sa || (sa = !0, console.error("Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden.")), s === null || oa || (oa = !0, console.error("Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."));
				var u = G(t, i);
				u === null ? (e.push(Ui, v("formAction"), Wi, qi, Gi), s = o = a = i = c = null, fe(t, n)) : (c = u.name, i = u.action || "", a = u.encType, o = u.method, s = u.target, l = u.data);
			}
			return c != null && le(e, "name", c), i != null && le(e, "formAction", i), a != null && le(e, "formEncType", a), o != null && le(e, "formMethod", o), s != null && le(e, "formTarget", s), l;
		}
		function le(e, t, n) {
			switch (t) {
				case "className":
					ae(e, "class", n);
					break;
				case "tabIndex":
					ae(e, "tabindex", n);
					break;
				case "dir":
				case "role":
				case "viewBox":
				case "width":
				case "height":
					ae(e, t, n);
					break;
				case "style":
					re(e, n);
					break;
				case "src":
				case "href": if (n === "") {
					t === "src" ? console.error("An empty string (\"\") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.", t, t) : console.error("An empty string (\"\") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.", t, t);
					break;
				}
				case "action":
				case "formAction":
					if (n == null || typeof n == "function" || typeof n == "symbol" || typeof n == "boolean") break;
					T(n, t), n = I("" + n), e.push(Ui, v(t), Wi, v(F(n)), Gi);
					break;
				case "defaultValue":
				case "defaultChecked":
				case "innerHTML":
				case "suppressContentEditableWarning":
				case "suppressHydrationWarning":
				case "ref": break;
				case "autoFocus":
				case "multiple":
				case "muted":
					ie(e, t.toLowerCase(), n);
					break;
				case "xlinkHref":
					if (typeof n == "function" || typeof n == "symbol" || typeof n == "boolean") break;
					T(n, t), n = I("" + n), e.push(Ui, v("xlink:href"), Wi, v(F(n)), Gi);
					break;
				case "contentEditable":
				case "spellCheck":
				case "draggable":
				case "value":
				case "autoReverse":
				case "externalResourcesRequired":
				case "focusable":
				case "preserveAlpha":
					typeof n != "function" && typeof n != "symbol" && e.push(Ui, v(t), Wi, v(F(n)), Gi);
					break;
				case "inert": n !== "" || Di[t] || (Di[t] = !0, console.error("Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.", t));
				case "allowFullScreen":
				case "async":
				case "autoPlay":
				case "controls":
				case "default":
				case "defer":
				case "disabled":
				case "disablePictureInPicture":
				case "disableRemotePlayback":
				case "formNoValidate":
				case "hidden":
				case "loop":
				case "noModule":
				case "noValidate":
				case "open":
				case "playsInline":
				case "readOnly":
				case "required":
				case "reversed":
				case "scoped":
				case "seamless":
				case "itemScope":
					n && typeof n != "function" && typeof n != "symbol" && e.push(Ui, v(t), Ki);
					break;
				case "capture":
				case "download":
					!0 === n ? e.push(Ui, v(t), Ki) : !1 !== n && typeof n != "function" && typeof n != "symbol" && e.push(Ui, v(t), Wi, v(F(n)), Gi);
					break;
				case "cols":
				case "rows":
				case "size":
				case "span":
					typeof n != "function" && typeof n != "symbol" && !isNaN(n) && 1 <= n && e.push(Ui, v(t), Wi, v(F(n)), Gi);
					break;
				case "rowSpan":
				case "start":
					typeof n == "function" || typeof n == "symbol" || isNaN(n) || e.push(Ui, v(t), Wi, v(F(n)), Gi);
					break;
				case "xlinkActuate":
					ae(e, "xlink:actuate", n);
					break;
				case "xlinkArcrole":
					ae(e, "xlink:arcrole", n);
					break;
				case "xlinkRole":
					ae(e, "xlink:role", n);
					break;
				case "xlinkShow":
					ae(e, "xlink:show", n);
					break;
				case "xlinkTitle":
					ae(e, "xlink:title", n);
					break;
				case "xlinkType":
					ae(e, "xlink:type", n);
					break;
				case "xmlBase":
					ae(e, "xml:base", n);
					break;
				case "xmlLang":
					ae(e, "xml:lang", n);
					break;
				case "xmlSpace":
					ae(e, "xml:space", n);
					break;
				default: if ((!(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (t = Ar.get(t) || t, O(t))) {
					switch (typeof n) {
						case "function":
						case "symbol": return;
						case "boolean":
							var i = t.toLowerCase().slice(0, 5);
							if (i !== "data-" && i !== "aria-") return;
					}
					e.push(Ui, v(t), Wi, v(F(n)), Gi);
				}
			}
		}
		function ue(e, t, n) {
			if (t != null) {
				if (n != null) throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
				if (typeof t != "object" || !("__html" in t)) throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");
				t = t.__html, t != null && (D(t), e.push(v("" + t)));
			}
		}
		function K(e, t) {
			var n = e[t];
			n != null && (n = pr(n), e.multiple && !n ? console.error("The `%s` prop supplied to <select> must be an array if `multiple` is true.", t) : !e.multiple && n && console.error("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", t));
		}
		function de(e) {
			var t = "";
			return qn.Children.forEach(e, function(e) {
				e != null && (t += e, ta || typeof e == "string" || typeof e == "number" || typeof e == "bigint" || (ta = !0, console.error("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
			}), t;
		}
		function fe(e, t) {
			if ((e.instructions & 16) === ai) {
				e.instructions |= 16;
				var n = t.preamble, i = t.bootstrapChunks;
				(n.htmlChunks || n.headChunks) && i.length === 0 ? (i.push(t.startInlineScript), Le(i, e), i.push(Yi, la, gi)) : i.unshift(t.startInlineScript, Yi, la, gi);
			}
		}
		function pe(e, t) {
			for (var n in e.push(be("link")), t) if (Tr.call(t, n)) {
				var i = t[n];
				if (i != null) switch (n) {
					case "children":
					case "dangerouslySetInnerHTML": throw Error("link is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
					default: le(e, n, i);
				}
			}
			return e.push(Xi), null;
		}
		function me(e) {
			return D(e), ("" + e).replace(fa, t);
		}
		function he(e, t, n) {
			for (var i in e.push(be(n)), t) if (Tr.call(t, i)) {
				var a = t[i];
				if (a != null) switch (i) {
					case "children":
					case "dangerouslySetInnerHTML": throw Error(n + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
					default: le(e, i, a);
				}
			}
			return e.push(Xi), null;
		}
		function ge(e, t) {
			e.push(be("title"));
			var n = null, i = null, a;
			for (a in t) if (Tr.call(t, a)) {
				var o = t[a];
				if (o != null) switch (a) {
					case "children":
						n = o;
						break;
					case "dangerouslySetInnerHTML":
						i = o;
						break;
					default: le(e, a, o);
				}
			}
			return e.push(Yi), t = Array.isArray(n) ? 2 > n.length ? n[0] : null : n, typeof t != "function" && typeof t != "symbol" && t != null && e.push(v(F("" + t))), ue(e, i, n), e.push(Se("title")), null;
		}
		function _e(e, t) {
			e.push(be("script"));
			var n = null, i = null, a;
			for (a in t) if (Tr.call(t, a)) {
				var o = t[a];
				if (o != null) switch (a) {
					case "children":
						n = o;
						break;
					case "dangerouslySetInnerHTML":
						i = o;
						break;
					default: le(e, a, o);
				}
			}
			return e.push(Yi), n != null && typeof n != "string" && (t = typeof n == "number" ? "a number for children" : Array.isArray(n) ? "an array for children" : "something unexpected for children", console.error("A script element was rendered with %s. If script element has children it must be a single string. Consider using dangerouslySetInnerHTML or passing a plain string as children.", t)), ue(e, i, n), typeof n == "string" && e.push(v(L(n))), e.push(Se("script")), null;
		}
		function ve(e, t, n) {
			e.push(be(n));
			var i = n = null, a;
			for (a in t) if (Tr.call(t, a)) {
				var o = t[a];
				if (o != null) switch (a) {
					case "children":
						n = o;
						break;
					case "dangerouslySetInnerHTML":
						i = o;
						break;
					default: le(e, a, o);
				}
			}
			return e.push(Yi), ue(e, i, n), n;
		}
		function ye(e, t, n) {
			e.push(be(n));
			var i = n = null, a;
			for (a in t) if (Tr.call(t, a)) {
				var o = t[a];
				if (o != null) switch (a) {
					case "children":
						n = o;
						break;
					case "dangerouslySetInnerHTML":
						i = o;
						break;
					default: le(e, a, o);
				}
			}
			return e.push(Yi), ue(e, i, n), typeof n == "string" ? (e.push(v(F(n))), null) : n;
		}
		function be(e) {
			var t = va.get(e);
			if (t === void 0) {
				if (!_a.test(e)) throw Error("Invalid tag: " + e);
				t = y("<" + e), va.set(e, t);
			}
			return t;
		}
		function xe(e, t, n, i, a, o, s, c, l) {
			j(t, n), t !== "input" && t !== "textarea" && t !== "select" || n == null || n.value !== null || Ir || (Ir = !0, t === "select" && n.multiple ? console.error("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", t) : console.error("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", t));
			b: if (t.indexOf("-") === -1) var u = !1;
			else switch (t) {
				case "annotation-xml":
				case "color-profile":
				case "font-face":
				case "font-face-src":
				case "font-face-uri":
				case "font-face-format":
				case "font-face-name":
				case "missing-glyph":
					u = !1;
					break b;
				default: u = !0;
			}
			switch (u || typeof n.is == "string" || N(t, n, null), !n.suppressContentEditableWarning && n.contentEditable && n.children != null && console.error("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), c.insertionMode !== Mi && c.insertionMode !== Ni && t.indexOf("-") === -1 && t.toLowerCase() !== t && console.error("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", t), t) {
				case "div":
				case "span":
				case "svg":
				case "path": break;
				case "a":
					e.push(be("a"));
					var d = null, f = null, p;
					for (p in n) if (Tr.call(n, p)) {
						var m = n[p];
						if (m != null) switch (p) {
							case "children":
								d = m;
								break;
							case "dangerouslySetInnerHTML":
								f = m;
								break;
							case "href":
								m === "" ? ae(e, "href", "") : le(e, p, m);
								break;
							default: le(e, p, m);
						}
					}
					if (e.push(Yi), ue(e, f, d), typeof d == "string") {
						e.push(v(F(d)));
						var h = null;
					} else h = d;
					return h;
				case "g":
				case "p":
				case "li": break;
				case "select":
					k("select", n), K(n, "value"), K(n, "defaultValue"), n.value === void 0 || n.defaultValue === void 0 || $i || (console.error("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"), $i = !0), e.push(be("select"));
					var g = null, _ = null, y;
					for (y in n) if (Tr.call(n, y)) {
						var b = n[y];
						if (b != null) switch (y) {
							case "children":
								g = b;
								break;
							case "dangerouslySetInnerHTML":
								_ = b;
								break;
							case "defaultValue":
							case "value": break;
							default: le(e, y, b);
						}
					}
					return e.push(Yi), ue(e, _, g), g;
				case "option":
					var x = c.selectedValue;
					e.push(be("option"));
					var S = null, C = null, w = null, E = null, A;
					for (A in n) if (Tr.call(n, A)) {
						var M = n[A];
						if (M != null) switch (A) {
							case "children":
								S = M;
								break;
							case "selected":
								w = M, ra ||= (console.error("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), !0);
								break;
							case "dangerouslySetInnerHTML":
								E = M;
								break;
							case "value": C = M;
							default: le(e, A, M);
						}
					}
					if (x != null) {
						if (C !== null) {
							T(C, "value");
							var P = "" + C;
						} else E === null || na || (na = !0, console.error("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")), P = de(S);
						if (pr(x)) {
							for (var L = 0; L < x.length; L++) if (T(x[L], "value"), "" + x[L] === P) {
								e.push(ca);
								break;
							}
						} else T(x, "select.value"), "" + x === P && e.push(ca);
					} else w && e.push(ca);
					return e.push(Yi), ue(e, E, S), S;
				case "textarea":
					k("textarea", n), n.value === void 0 || n.defaultValue === void 0 || ea || (console.error("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components"), ea = !0), e.push(be("textarea"));
					var R = null, ee = null, z = null, B;
					for (B in n) if (Tr.call(n, B)) {
						var V = n[B];
						if (V != null) switch (B) {
							case "children":
								z = V;
								break;
							case "value":
								R = V;
								break;
							case "defaultValue":
								ee = V;
								break;
							case "dangerouslySetInnerHTML": throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
							default: le(e, B, V);
						}
					}
					if (R === null && ee !== null && (R = ee), e.push(Yi), z != null) {
						if (console.error("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), R != null) throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
						if (pr(z)) {
							if (1 < z.length) throw Error("<textarea> can only have at most one child.");
							D(z[0]), R = "" + z[0];
						}
						D(z), R = "" + z;
					}
					return typeof R == "string" && R[0] === "\n" && e.push(ga), R !== null && (T(R, "value"), e.push(v(F("" + R)))), null;
				case "input":
					k("input", n), e.push(be("input"));
					var te = null, H = null, U = null, ne = null, W = null, se = null, xe = null, Ce = null, we = null, q;
					for (q in n) if (Tr.call(n, q)) {
						var Te = n[q];
						if (Te != null) switch (q) {
							case "children":
							case "dangerouslySetInnerHTML": throw Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
							case "name":
								te = Te;
								break;
							case "formAction":
								H = Te;
								break;
							case "formEncType":
								U = Te;
								break;
							case "formMethod":
								ne = Te;
								break;
							case "formTarget":
								W = Te;
								break;
							case "defaultChecked":
								we = Te;
								break;
							case "defaultValue":
								xe = Te;
								break;
							case "checked":
								Ce = Te;
								break;
							case "value":
								se = Te;
								break;
							default: le(e, q, Te);
						}
					}
					H === null || n.type === "image" || n.type === "submit" || ia || (ia = !0, console.error("An input can only specify a formAction along with type=\"submit\" or type=\"image\"."));
					var Ee = ce(e, i, a, H, U, ne, W, te);
					return Ce === null || we === null || Qi || (console.error("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components", "A component", n.type), Qi = !0), se === null || xe === null || Zi || (console.error("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components", "A component", n.type), Zi = !0), Ce === null ? we !== null && ie(e, "checked", we) : ie(e, "checked", Ce), se === null ? xe !== null && le(e, "value", xe) : le(e, "value", se), e.push(Xi), Ee?.forEach(oe, e), null;
				case "button":
					e.push(be("button"));
					var De = null, Oe = null, ke = null, Ae = null, je = null, Me = null, Ne = null, Pe;
					for (Pe in n) if (Tr.call(n, Pe)) {
						var Fe = n[Pe];
						if (Fe != null) switch (Pe) {
							case "children":
								De = Fe;
								break;
							case "dangerouslySetInnerHTML":
								Oe = Fe;
								break;
							case "name":
								ke = Fe;
								break;
							case "formAction":
								Ae = Fe;
								break;
							case "formEncType":
								je = Fe;
								break;
							case "formMethod":
								Me = Fe;
								break;
							case "formTarget":
								Ne = Fe;
								break;
							default: le(e, Pe, Fe);
						}
					}
					Ae === null || n.type == null || n.type === "submit" || ia || (ia = !0, console.error("A button can only specify a formAction along with type=\"submit\" or no type."));
					var Ie = ce(e, i, a, Ae, je, Me, Ne, ke);
					if (e.push(Yi), Ie?.forEach(oe, e), ue(e, Oe, De), typeof De == "string") {
						e.push(v(F(De)));
						var Le = null;
					} else Le = De;
					return Le;
				case "form":
					e.push(be("form"));
					var Re = null, ze = null, Be = null, Ve = null, We = null, Ge = null, Ke;
					for (Ke in n) if (Tr.call(n, Ke)) {
						var J = n[Ke];
						if (J != null) switch (Ke) {
							case "children":
								Re = J;
								break;
							case "dangerouslySetInnerHTML":
								ze = J;
								break;
							case "action":
								Be = J;
								break;
							case "encType":
								Ve = J;
								break;
							case "method":
								We = J;
								break;
							case "target":
								Ge = J;
								break;
							default: le(e, Ke, J);
						}
					}
					var qe = null, Y = null;
					if (typeof Be == "function") {
						Ve === null && We === null || sa || (sa = !0, console.error("Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden.")), Ge === null || oa || (oa = !0, console.error("Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."));
						var X = G(i, Be);
						X === null ? (e.push(Ui, v("action"), Wi, qi, Gi), Ge = We = Ve = Be = null, fe(i, a)) : (Be = X.action || "", Ve = X.encType, We = X.method, Ge = X.target, qe = X.data, Y = X.name);
					}
					if (Be != null && le(e, "action", Be), Ve != null && le(e, "encType", Ve), We != null && le(e, "method", We), Ge != null && le(e, "target", Ge), e.push(Yi), Y !== null && (e.push(Ji), ae(e, "name", Y), e.push(Xi), qe?.forEach(oe, e)), ue(e, ze, Re), typeof Re == "string") {
						e.push(v(F(Re)));
						var Je = null;
					} else Je = Re;
					return Je;
				case "menuitem":
					for (var Ye in e.push(be("menuitem")), n) if (Tr.call(n, Ye)) {
						var Xe = n[Ye];
						if (Xe != null) switch (Ye) {
							case "children":
							case "dangerouslySetInnerHTML": throw Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
							default: le(e, Ye, Xe);
						}
					}
					return e.push(Yi), null;
				case "object":
					e.push(be("object"));
					var Ze = null, Qe = null, $e;
					for ($e in n) if (Tr.call(n, $e)) {
						var et = n[$e];
						if (et != null) switch ($e) {
							case "children":
								Ze = et;
								break;
							case "dangerouslySetInnerHTML":
								Qe = et;
								break;
							case "data":
								T(et, "data");
								var tt = I("" + et);
								if (tt === "") {
									console.error("An empty string (\"\") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.", $e, $e);
									break;
								}
								e.push(Ui, v("data"), Wi, v(F(tt)), Gi);
								break;
							default: le(e, $e, et);
						}
					}
					if (e.push(Yi), ue(e, Qe, Ze), typeof Ze == "string") {
						e.push(v(F(Ze)));
						var nt = null;
					} else nt = Ze;
					return nt;
				case "title":
					var rt = c.tagScope & 1, it = c.tagScope & 4;
					if (Tr.call(n, "children")) {
						var at = n.children, ot = Array.isArray(at) ? 2 > at.length ? at[0] : null : at;
						Array.isArray(at) && 1 < at.length ? console.error("React expects the `children` prop of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found an Array with length %s instead. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert `children` of <title> tags to a single string value which is why Arrays of length greater than 1 are not supported. When using JSX it can be common to combine text nodes and value nodes. For example: <title>hello {nameOfUser}</title>. While not immediately apparent, `children` in this case is an Array with length 2. If your `children` prop is using this form try rewriting it using a template string: <title>{`hello ${nameOfUser}`}</title>.", at.length) : typeof ot == "function" || typeof ot == "symbol" ? console.error("React expect children of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found %s instead. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert children of <title> tags to a single string value.", typeof ot == "function" ? "a Function" : "a Sybmol") : ot && ot.toString === {}.toString && (ot.$$typeof == null ? console.error("React expects the `children` prop of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found an object that does not implement a suitable `toString` method. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert children of <title> tags to a single string value. Using the default `toString` method available on every object is almost certainly an error. Consider whether the `children` of this <title> is an object in error and change it to a string or number value if so. Otherwise implement a `toString` method that React can use to produce a valid <title>.") : console.error("React expects the `children` prop of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found an object that appears to be a React element which never implements a suitable `toString` method. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert children of <title> tags to a single string value which is why rendering React elements is not supported. If the `children` of <title> is a React Component try moving the <title> tag into that component. If the `children` of <title> is some HTML markup change it to be Text only to be valid HTML."));
					}
					if (c.insertionMode === Mi || rt || n.itemProp != null) var st = ge(e, n);
					else it ? st = null : (ge(a.hoistableChunks, n), st = void 0);
					return st;
				case "link":
					var ct = c.tagScope & 1, lt = c.tagScope & 4, ut = n.rel, dt = n.href, ft = n.precedence;
					if (c.insertionMode === Mi || ct || n.itemProp != null || typeof ut != "string" || typeof dt != "string" || dt === "") {
						ut === "stylesheet" && typeof n.precedence == "string" && (typeof dt == "string" && dt || console.error("React encountered a `<link rel=\"stylesheet\" .../>` with a `precedence` prop and expected the `href` prop to be a non-empty string but ecountered %s instead. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop ensure there is a non-empty string `href` prop as well, otherwise remove the `precedence` prop.", dt === null ? "`null`" : dt === void 0 ? "`undefined`" : dt === "" ? "an empty string" : "something with type \"" + typeof dt + "\"")), pe(e, n);
						var pt = null;
					} else if (n.rel === "stylesheet") if (typeof ft != "string" || n.disabled != null || n.onLoad || n.onError) {
						if (typeof ft == "string") {
							if (n.disabled != null) console.error("React encountered a `<link rel=\"stylesheet\" .../>` with a `precedence` prop and a `disabled` prop. The presence of the `disabled` prop indicates an intent to manage the stylesheet active state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the `disabled` prop, otherwise remove the `precedence` prop.");
							else if (n.onLoad || n.onError) {
								var mt = n.onLoad && n.onError ? "`onLoad` and `onError` props" : n.onLoad ? "`onLoad` prop" : "`onError` prop";
								console.error("React encountered a `<link rel=\"stylesheet\" .../>` with a `precedence` prop and %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.", mt, mt);
							}
						}
						pt = pe(e, n);
					} else {
						var ht = a.styles.get(ft), gt = i.styleResources.hasOwnProperty(dt) ? i.styleResources[dt] : void 0;
						if (gt !== fi) {
							i.styleResources[dt] = fi, ht || (ht = {
								precedence: v(F(ft)),
								rules: [],
								hrefs: [],
								sheets: /* @__PURE__ */ new Map()
							}, a.styles.set(ft, ht));
							var _t = {
								state: Uo,
								props: wr({}, n, {
									"data-precedence": n.precedence,
									precedence: null
								})
							};
							if (gt) {
								gt.length === 2 && He(_t.props, gt);
								var vt = a.preloads.stylesheets.get(dt);
								vt && 0 < vt.length ? vt.length = 0 : _t.state = Wo;
							}
							ht.sheets.set(dt, _t), s && s.stylesheets.add(_t);
						} else if (ht) {
							var yt = ht.sheets.get(dt);
							yt && s && s.stylesheets.add(yt);
						}
						l && e.push(Ri), pt = null;
					}
					else n.onLoad || n.onError ? pt = pe(e, n) : (l && e.push(Ri), pt = lt ? null : pe(a.hoistableChunks, n));
					return pt;
				case "script":
					var bt = c.tagScope & 1, xt = n.async;
					if (typeof n.src != "string" || !n.src || !xt || typeof xt == "function" || typeof xt == "symbol" || n.onLoad || n.onError || c.insertionMode === Mi || bt || n.itemProp != null) var St = _e(e, n);
					else {
						var Ct = n.src;
						if (n.type === "module") var wt = i.moduleScriptResources, Tt = a.preloads.moduleScripts;
						else wt = i.scriptResources, Tt = a.preloads.scripts;
						var Et = wt.hasOwnProperty(Ct) ? wt[Ct] : void 0;
						if (Et !== fi) {
							wt[Ct] = fi;
							var Dt = n;
							if (Et) {
								Et.length === 2 && (Dt = wr({}, n), He(Dt, Et));
								var Ot = Tt.get(Ct);
								Ot && (Ot.length = 0);
							}
							var kt = [];
							a.scripts.add(kt), _e(kt, Dt);
						}
						l && e.push(Ri), St = null;
					}
					return St;
				case "style":
					var At = c.tagScope & 1;
					if (Tr.call(n, "children")) {
						var jt = n.children, Mt = Array.isArray(jt) ? 2 > jt.length ? jt[0] : null : jt;
						(typeof Mt == "function" || typeof Mt == "symbol" || Array.isArray(Mt)) && console.error("React expect children of <style> tags to be a string, number, or object with a `toString` method but found %s instead. In browsers style Elements can only have `Text` Nodes as children.", typeof Mt == "function" ? "a Function" : typeof Mt == "symbol" ? "a Sybmol" : "an Array");
					}
					var Nt = n.precedence, Pt = n.href, Ft = n.nonce;
					if (c.insertionMode === Mi || At || n.itemProp != null || typeof Nt != "string" || typeof Pt != "string" || Pt === "") {
						e.push(be("style"));
						var It = null, Lt = null, Rt;
						for (Rt in n) if (Tr.call(n, Rt)) {
							var zt = n[Rt];
							if (zt != null) switch (Rt) {
								case "children":
									It = zt;
									break;
								case "dangerouslySetInnerHTML":
									Lt = zt;
									break;
								default: le(e, Rt, zt);
							}
						}
						e.push(Yi);
						var Bt = Array.isArray(It) ? 2 > It.length ? It[0] : null : It;
						typeof Bt != "function" && typeof Bt != "symbol" && Bt != null && e.push(v(me(Bt))), ue(e, Lt, It), e.push(Se("style"));
						var Vt = null;
					} else {
						Pt.includes(" ") && console.error("React expected the `href` prop for a <style> tag opting into hoisting semantics using the `precedence` prop to not have any spaces but ecountered spaces instead. using spaces in this prop will cause hydration of this style to fail on the client. The href for the <style> where this ocurred is \"%s\".", Pt);
						var Ht = a.styles.get(Nt), Ut = i.styleResources.hasOwnProperty(Pt) ? i.styleResources[Pt] : void 0;
						if (Ut !== fi) {
							i.styleResources[Pt] = fi, Ut && console.error("React encountered a hoistable style tag for the same href as a preload: \"%s\". When using a style tag to inline styles you should not also preload it as a stylsheet.", Pt), Ht || (Ht = {
								precedence: v(F(Nt)),
								rules: [],
								hrefs: [],
								sheets: /* @__PURE__ */ new Map()
							}, a.styles.set(Nt, Ht));
							var Wt = a.nonce.style;
							if (Wt && Wt !== Ft) console.error("React encountered a style tag with `precedence` \"%s\" and `nonce` \"%s\". When React manages style rules using `precedence` it will only include rules if the nonce matches the style nonce \"%s\" that was included with this render.", Nt, Ft, Wt);
							else {
								!Wt && Ft && console.error("React encountered a style tag with `precedence` \"%s\" and `nonce` \"%s\". When React manages style rules using `precedence` it will only include a nonce attributes if you also provide the same style nonce value as a render option.", Nt, Ft), Ht.hrefs.push(v(F(Pt)));
								var Gt = Ht.rules, Kt = null, qt = null, Jt;
								for (Jt in n) if (Tr.call(n, Jt)) {
									var Yt = n[Jt];
									if (Yt != null) switch (Jt) {
										case "children":
											Kt = Yt;
											break;
										case "dangerouslySetInnerHTML": qt = Yt;
									}
								}
								var Xt = Array.isArray(Kt) ? 2 > Kt.length ? Kt[0] : null : Kt;
								typeof Xt != "function" && typeof Xt != "symbol" && Xt != null && Gt.push(v(me(Xt))), ue(Gt, qt, Kt);
							}
						}
						Ht && s && s.styles.add(Ht), l && e.push(Ri), Vt = void 0;
					}
					return Vt;
				case "meta":
					var Z = c.tagScope & 1, Zt = c.tagScope & 4;
					if (c.insertionMode === Mi || Z || n.itemProp != null) var Q = he(e, n, "meta");
					else l && e.push(Ri), Q = Zt ? null : typeof n.charSet == "string" ? he(a.charsetChunks, n, "meta") : n.name === "viewport" ? he(a.viewportChunks, n, "meta") : he(a.hoistableChunks, n, "meta");
					return Q;
				case "listing":
				case "pre":
					e.push(be(t));
					var Qt = null, $t = null, en;
					for (en in n) if (Tr.call(n, en)) {
						var tn = n[en];
						if (tn != null) switch (en) {
							case "children":
								Qt = tn;
								break;
							case "dangerouslySetInnerHTML":
								$t = tn;
								break;
							default: le(e, en, tn);
						}
					}
					if (e.push(Yi), $t != null) {
						if (Qt != null) throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
						if (typeof $t != "object" || !("__html" in $t)) throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");
						var nn = $t.__html;
						nn != null && (typeof nn == "string" && 0 < nn.length && nn[0] === "\n" ? e.push(ga, v(nn)) : (D(nn), e.push(v("" + nn))));
					}
					return typeof Qt == "string" && Qt[0] === "\n" && e.push(ga), Qt;
				case "img":
					var rn = c.tagScope & 3, $ = n.src, an = n.srcSet;
					if (!(n.loading === "lazy" || !$ && !an || typeof $ != "string" && $ != null || typeof an != "string" && an != null || n.fetchPriority === "low" || rn) && (typeof $ != "string" || $[4] !== ":" || $[0] !== "d" && $[0] !== "D" || $[1] !== "a" && $[1] !== "A" || $[2] !== "t" && $[2] !== "T" || $[3] !== "a" && $[3] !== "A") && (typeof an != "string" || an[4] !== ":" || an[0] !== "d" && an[0] !== "D" || an[1] !== "a" && an[1] !== "A" || an[2] !== "t" && an[2] !== "T" || an[3] !== "a" && an[3] !== "A")) {
						s !== null && c.tagScope & 64 && (s.suspenseyImages = !0);
						var on = typeof n.sizes == "string" ? n.sizes : void 0, sn = an ? an + "\n" + (on || "") : $, ln = a.preloads.images, un = ln.get(sn);
						if (un) (n.fetchPriority === "high" || 10 > a.highImagePreloads.size) && (ln.delete(sn), a.highImagePreloads.add(un));
						else if (!i.imageResources.hasOwnProperty(sn)) {
							i.imageResources[sn] = pi;
							var dn = n.crossOrigin, fn = typeof dn == "string" ? dn === "use-credentials" ? dn : "" : void 0, pn = a.headers, mn;
							pn && 0 < pn.remainingCapacity && typeof n.srcSet != "string" && (n.fetchPriority === "high" || 500 > pn.highImagePreloads.length) && (mn = Ue($, "image", {
								imageSrcSet: n.srcSet,
								imageSizes: n.sizes,
								crossOrigin: fn,
								integrity: n.integrity,
								nonce: n.nonce,
								type: n.type,
								fetchPriority: n.fetchPriority,
								referrerPolicy: n.refererPolicy
							}), 0 <= (pn.remainingCapacity -= mn.length + 2)) ? (a.resets.image[sn] = pi, pn.highImagePreloads && (pn.highImagePreloads += ", "), pn.highImagePreloads += mn) : (un = [], pe(un, {
								rel: "preload",
								as: "image",
								href: an ? void 0 : $,
								imageSrcSet: an,
								imageSizes: on,
								crossOrigin: fn,
								integrity: n.integrity,
								type: n.type,
								fetchPriority: n.fetchPriority,
								referrerPolicy: n.referrerPolicy
							}), n.fetchPriority === "high" || 10 > a.highImagePreloads.size ? a.highImagePreloads.add(un) : (a.bulkPreloads.add(un), ln.set(sn, un)));
						}
					}
					return he(e, n, "img");
				case "base":
				case "area":
				case "br":
				case "col":
				case "embed":
				case "hr":
				case "keygen":
				case "param":
				case "source":
				case "track":
				case "wbr": return he(e, n, t);
				case "annotation-xml":
				case "color-profile":
				case "font-face":
				case "font-face-src":
				case "font-face-uri":
				case "font-face-format":
				case "font-face-name":
				case "missing-glyph": break;
				case "head":
					if (c.insertionMode < Ai) {
						var hn = o || a.preamble;
						if (hn.headChunks) throw Error("The `<head>` tag may only be rendered once.");
						o !== null && e.push(pa), hn.headChunks = [];
						var gn = ve(hn.headChunks, n, "head");
					} else gn = ye(e, n, "head");
					return gn;
				case "body":
					if (c.insertionMode < Ai) {
						var _n = o || a.preamble;
						if (_n.bodyChunks) throw Error("The `<body>` tag may only be rendered once.");
						o !== null && e.push(ma), _n.bodyChunks = [];
						var vn = ve(_n.bodyChunks, n, "body");
					} else vn = ye(e, n, "body");
					return vn;
				case "html":
					if (c.insertionMode === Oi) {
						var yn = o || a.preamble;
						if (yn.htmlChunks) throw Error("The `<html>` tag may only be rendered once.");
						o !== null && e.push(ha), yn.htmlChunks = [ya];
						var bn = ve(yn.htmlChunks, n, "html");
					} else bn = ye(e, n, "html");
					return bn;
				default: if (t.indexOf("-") !== -1) {
					e.push(be(t));
					var xn = null, Sn = null, Cn;
					for (Cn in n) if (Tr.call(n, Cn)) {
						var wn = n[Cn];
						if (wn != null) {
							var Tn = Cn;
							switch (Cn) {
								case "children":
									xn = wn;
									break;
								case "dangerouslySetInnerHTML":
									Sn = wn;
									break;
								case "style":
									re(e, wn);
									break;
								case "suppressContentEditableWarning":
								case "suppressHydrationWarning":
								case "ref": break;
								case "className": Tn = "class";
								default: if (O(Cn) && typeof wn != "function" && typeof wn != "symbol" && !1 !== wn) {
									if (!0 === wn) wn = "";
									else if (typeof wn == "object") continue;
									e.push(Ui, v(Tn), Wi, v(F(wn)), Gi);
								}
							}
						}
					}
					return e.push(Yi), ue(e, Sn, xn), xn;
				}
			}
			return ye(e, n, t);
		}
		function Se(e) {
			var t = ba.get(e);
			return t === void 0 && (t = y("</" + e + ">"), ba.set(e, t)), t;
		}
		function Ce(e, t) {
			e = e.preamble, e.htmlChunks === null && t.htmlChunks && (e.htmlChunks = t.htmlChunks), e.headChunks === null && t.headChunks && (e.headChunks = t.headChunks), e.bodyChunks === null && t.bodyChunks && (e.bodyChunks = t.bodyChunks);
		}
		function we(e, t) {
			t = t.bootstrapChunks;
			for (var n = 0; n < t.length - 1; n++) m(e, t[n]);
			return n < t.length ? (n = t[n], t.length = 0, g(e, n)) : !0;
		}
		function q(e, t, n) {
			if (m(e, Da), n === null) throw Error("An ID must have been assigned before we can complete the boundary.");
			return m(e, t.boundaryPrefix), m(e, v(n.toString(16))), g(e, Oa);
		}
		function Te(e, t, n, i) {
			switch (n.insertionMode) {
				case Oi:
				case ki:
				case ji:
				case Ai: return m(e, Ra), m(e, t.segmentPrefix), m(e, v(i.toString(16))), g(e, za);
				case Mi: return m(e, Va), m(e, t.segmentPrefix), m(e, v(i.toString(16))), g(e, Ha);
				case Ni: return m(e, Wa), m(e, t.segmentPrefix), m(e, v(i.toString(16))), g(e, Ga);
				case Pi: return m(e, qa), m(e, t.segmentPrefix), m(e, v(i.toString(16))), g(e, Ja);
				case Fi: return m(e, Xa), m(e, t.segmentPrefix), m(e, v(i.toString(16))), g(e, Za);
				case Ii: return m(e, $a), m(e, t.segmentPrefix), m(e, v(i.toString(16))), g(e, eo);
				case Li: return m(e, no), m(e, t.segmentPrefix), m(e, v(i.toString(16))), g(e, ro);
				default: throw Error("Unknown insertion mode. This is a bug in React.");
			}
		}
		function Ee(e, t) {
			switch (t.insertionMode) {
				case Oi:
				case ki:
				case ji:
				case Ai: return g(e, Ba);
				case Mi: return g(e, Ua);
				case Ni: return g(e, Ka);
				case Pi: return g(e, Ya);
				case Fi: return g(e, Qa);
				case Ii: return g(e, to);
				case Li: return g(e, io);
				default: throw Error("Unknown insertion mode. This is a bug in React.");
			}
		}
		function De(e) {
			return JSON.stringify(e).replace(wo, function(e) {
				switch (e) {
					case "<": return "\\u003c";
					case "\u2028": return "\\u2028";
					case "\u2029": return "\\u2029";
					default: throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
				}
			});
		}
		function Oe(e) {
			return JSON.stringify(e).replace(To, function(e) {
				switch (e) {
					case "&": return "\\u0026";
					case ">": return "\\u003e";
					case "<": return "\\u003c";
					case "\u2028": return "\\u2028";
					case "\u2029": return "\\u2029";
					default: throw Error("escapeJSObjectForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
				}
			});
		}
		function ke(e) {
			var t = e.rules, n = e.hrefs;
			0 < t.length && n.length === 0 && console.error("React expected to have at least one href for an a hoistable style but found none. This is a bug in React.");
			var i = 0;
			if (n.length) {
				for (m(this, mi.startInlineStyle), m(this, Eo), m(this, e.precedence), m(this, Do); i < n.length - 1; i++) m(this, n[i]), m(this, Fo);
				for (m(this, n[i]), m(this, Oo), i = 0; i < t.length; i++) m(this, t[i]);
				jo = g(this, ko), Ao = !0, t.length = 0, n.length = 0;
			}
		}
		function Ae(e) {
			return e.state === Go ? !1 : Ao = !0;
		}
		function je(e, t, n) {
			return Ao = !1, jo = !0, mi = n, t.styles.forEach(ke, e), mi = null, t.stylesheets.forEach(Ae), Ao && (n.stylesToHoist = !0), jo;
		}
		function Me(e) {
			for (var t = 0; t < e.length; t++) m(this, e[t]);
			e.length = 0;
		}
		function Ne(e) {
			pe(Mo, e.props);
			for (var t = 0; t < Mo.length; t++) m(this, Mo[t]);
			Mo.length = 0, e.state = Go;
		}
		function Pe(e) {
			var t = 0 < e.sheets.size;
			e.sheets.forEach(Ne, this), e.sheets.clear();
			var n = e.rules, i = e.hrefs;
			if (!t || i.length) {
				if (m(this, mi.startInlineStyle), m(this, No), m(this, e.precedence), e = 0, i.length) {
					for (m(this, Po); e < i.length - 1; e++) m(this, i[e]), m(this, Fo);
					m(this, i[e]);
				}
				for (m(this, Io), e = 0; e < n.length; e++) m(this, n[e]);
				m(this, Lo), n.length = 0, i.length = 0;
			}
		}
		function Fe(e) {
			if (e.state === Uo) {
				e.state = Wo;
				var t = e.props;
				for (pe(Mo, {
					rel: "preload",
					as: "style",
					href: e.props.href,
					crossOrigin: t.crossOrigin,
					fetchPriority: t.fetchPriority,
					integrity: t.integrity,
					media: t.media,
					hrefLang: t.hrefLang,
					referrerPolicy: t.referrerPolicy
				}), e = 0; e < Mo.length; e++) m(this, Mo[e]);
				Mo.length = 0;
			}
		}
		function Ie(e) {
			e.sheets.forEach(Fe, this), e.sheets.clear();
		}
		function Le(e, t) {
			(t.instructions & ui) === ai && (t.instructions |= ui, e.push(Ro, v(F("_" + t.idPrefix + "R_")), Gi));
		}
		function Re(e, t) {
			m(e, zo);
			var n = zo;
			t.stylesheets.forEach(function(t) {
				if (t.state !== Go) if (t.state === Ko) m(e, n), t = t.props.href, T(t, "href"), m(e, v(Oe("" + t))), m(e, Ho), n = Bo;
				else {
					m(e, n);
					var i = t.props["data-precedence"], a = t.props, o = I("" + t.props.href);
					for (var s in m(e, v(Oe(o))), T(i, "precedence"), i = "" + i, m(e, Vo), m(e, v(Oe(i))), a) if (Tr.call(a, s) && (i = a[s], i != null)) switch (s) {
						case "href":
						case "rel":
						case "precedence":
						case "data-precedence": break;
						case "children":
						case "dangerouslySetInnerHTML": throw Error("link is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
						default: ze(e, s, i);
					}
					m(e, Ho), n = Bo, t.state = Ko;
				}
			}), m(e, Ho);
		}
		function ze(e, t, n) {
			var i = t.toLowerCase();
			switch (typeof n) {
				case "function":
				case "symbol": return;
			}
			switch (t) {
				case "innerHTML":
				case "dangerouslySetInnerHTML":
				case "suppressContentEditableWarning":
				case "suppressHydrationWarning":
				case "style":
				case "ref": return;
				case "className":
					i = "class", T(n, i), t = "" + n;
					break;
				case "hidden":
					if (!1 === n) return;
					t = "";
					break;
				case "src":
				case "href":
					n = I(n), T(n, i), t = "" + n;
					break;
				default:
					if (2 < t.length && (t[0] === "o" || t[0] === "O") && (t[1] === "n" || t[1] === "N") || !O(t)) return;
					T(n, i), t = "" + n;
			}
			m(e, Vo), m(e, v(Oe(i))), m(e, Vo), m(e, v(Oe(t)));
		}
		function Be() {
			return {
				styles: /* @__PURE__ */ new Set(),
				stylesheets: /* @__PURE__ */ new Set(),
				suspenseyImages: !1
			};
		}
		function Ve(e, t, n, i) {
			(e.scriptResources.hasOwnProperty(n) || e.moduleScriptResources.hasOwnProperty(n)) && console.error("Internal React Error: React expected bootstrap script or module with src \"%s\" to not have been preloaded already. please file an issue", n), e.scriptResources[n] = fi, e.moduleScriptResources[n] = fi, e = [], pe(e, i), t.bootstrapScripts.add(e);
		}
		function He(e, t) {
			e.crossOrigin ??= t[0], e.integrity ??= t[1];
		}
		function Ue(e, t, n) {
			for (var i in e = We(e), t = Ke(t, "as"), t = "<" + e + ">; rel=preload; as=\"" + t + "\"", n) Tr.call(n, i) && (e = n[i], typeof e == "string" && (t += "; " + i.toLowerCase() + "=\"" + Ke(e, i) + "\""));
			return t;
		}
		function We(e) {
			return T(e, "href"), ("" + e).replace(qo, Ge);
		}
		function Ge(e) {
			switch (e) {
				case "<": return "%3C";
				case ">": return "%3E";
				case "\n": return "%0A";
				case "\r": return "%0D";
				default: throw Error("escapeLinkHrefForHeaderContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
			}
		}
		function Ke(e, t) {
			return C(e) && (console.error("The provided `%s` option is an unsupported type %s. This value must be coerced to a string before using it here.", t, S(e)), w(e)), ("" + e).replace(Jo, J);
		}
		function J(e) {
			switch (e) {
				case "\"": return "%22";
				case "'": return "%27";
				case ";": return "%3B";
				case ",": return "%2C";
				case "\n": return "%0A";
				case "\r": return "%0D";
				default: throw Error("escapeStringForLinkHeaderQuotedParamValueContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
			}
		}
		function qe(e) {
			this.styles.add(e);
		}
		function Y(e) {
			this.stylesheets.add(e);
		}
		function X(e, t) {
			t.styles.forEach(qe, e), t.stylesheets.forEach(Y, e), t.suspenseyImages && (e.suspenseyImages = !0);
		}
		function Je(e) {
			return 0 < e.stylesheets.size || e.suspenseyImages;
		}
		function Ye(e) {
			if (e == null) return null;
			if (typeof e == "function") return e.$$typeof === Xo ? null : e.displayName || e.name || null;
			if (typeof e == "string") return e;
			switch (e) {
				case Zn: return "Fragment";
				case $n: return "Profiler";
				case Qn: return "StrictMode";
				case rr: return "Suspense";
				case ir: return "SuspenseList";
				case cr: return "Activity";
			}
			if (typeof e == "object") switch (typeof e.tag == "number" && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), e.$$typeof) {
				case Xn: return "Portal";
				case tr: return e.displayName || "Context";
				case er: return (e._context.displayName || "Context") + ".Consumer";
				case nr:
					var t = e.render;
					return e = e.displayName, e ||= (e = t.displayName || t.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
				case ar: return t = e.displayName || null, t === null ? Ye(e.type) || "Memo" : t;
				case or:
					t = e._payload, e = e._init;
					try {
						return Ye(e(t));
					} catch {}
			}
			return null;
		}
		function Xe(e, t) {
			if (e !== t) {
				e.context._currentValue = e.parentValue, e = e.parent;
				var n = t.parent;
				if (e === null) {
					if (n !== null) throw Error("The stacks must reach the root at the same time. This is a bug in React.");
				} else {
					if (n === null) throw Error("The stacks must reach the root at the same time. This is a bug in React.");
					Xe(e, n);
				}
				t.context._currentValue = t.value;
			}
		}
		function Ze(e) {
			e.context._currentValue = e.parentValue, e = e.parent, e !== null && Ze(e);
		}
		function Qe(e) {
			var t = e.parent;
			t !== null && Qe(t), e.context._currentValue = e.value;
		}
		function $e(e, t) {
			if (e.context._currentValue = e.parentValue, e = e.parent, e === null) throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
			e.depth === t.depth ? Xe(e, t) : $e(e, t);
		}
		function et(e, t) {
			var n = t.parent;
			if (n === null) throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
			e.depth === n.depth ? Xe(e, n) : et(e, n), t.context._currentValue = t.value;
		}
		function tt(e) {
			var t = $o;
			t !== e && (t === null ? Qe(e) : e === null ? Ze(t) : t.depth === e.depth ? Xe(t, e) : t.depth > e.depth ? $e(t, e) : et(t, e), $o = e);
		}
		function nt(e) {
			if (e !== null && typeof e != "function") {
				var t = String(e);
				fs.has(t) || (fs.add(t), console.error("Expected the last optional `callback` argument to be a function. Instead received: %s.", e));
			}
		}
		function rt(e, t) {
			e = (e = e.constructor) && Ye(e) || "ReactClass";
			var n = e + "." + t;
			es[n] || (console.error("Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.\n\nPlease check the code for the %s component.", t, e), es[n] = !0);
		}
		function it(e, t, n) {
			var i = e.id;
			e = e.overflow;
			var a = 32 - hs(i) - 1;
			i &= ~(1 << a), n += 1;
			var o = 32 - hs(t) + a;
			if (30 < o) {
				var s = a - a % 5;
				return o = (i & (1 << s) - 1).toString(32), i >>= s, a -= s, {
					id: 1 << 32 - hs(t) + a | n << a | i,
					overflow: o + e
				};
			}
			return {
				id: 1 << o | n << a | i,
				overflow: e
			};
		}
		function at(e) {
			return e >>>= 0, e === 0 ? 32 : 31 - (gs(e) / _s | 0) | 0;
		}
		function ot() {}
		function st(e, t, n) {
			switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(ot, ot), t = n), t.status) {
				case "fulfilled": return t.value;
				case "rejected": throw t.reason;
				default:
					switch (typeof t.status == "string" ? t.then(ot, ot) : (e = t, e.status = "pending", e.then(function(e) {
						if (t.status === "pending") {
							var n = t;
							n.status = "fulfilled", n.value = e;
						}
					}, function(e) {
						if (t.status === "pending") {
							var n = t;
							n.status = "rejected", n.reason = e;
						}
					})), t.status) {
						case "fulfilled": return t.value;
						case "rejected": throw t.reason;
					}
					throw ys = t, vs;
			}
		}
		function ct() {
			if (ys === null) throw Error("Expected a suspended thenable. This is a bug in React. Please file an issue.");
			var e = ys;
			return ys = null, e;
		}
		function lt(e, t) {
			return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
		}
		function ut() {
			if (xs === null) throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.");
			return Is && console.error("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks"), xs;
		}
		function dt() {
			if (0 < Fs) throw Error("Rendered more hooks than during the previous render");
			return {
				memoizedState: null,
				queue: null,
				next: null
			};
		}
		function ft() {
			return Es === null ? Ts === null ? (Ds = !1, Ts = Es = dt()) : (Ds = !0, Es = Ts) : Es.next === null ? (Ds = !1, Es = Es.next = dt()) : (Ds = !0, Es = Es.next), Es;
		}
		function pt() {
			var e = Ns;
			return Ns = null, e;
		}
		function mt() {
			Is = !1, ws = Cs = Ss = xs = null, Os = !1, Ts = null, Fs = 0, Es = Ps = null;
		}
		function ht(e) {
			return Is && console.error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), e._currentValue;
		}
		function gt(e, t) {
			return typeof t == "function" ? t(e) : t;
		}
		function _t(e, t, n) {
			if (e !== gt && (Ls = "useReducer"), xs = ut(), Es = ft(), Ds) {
				if (n = Es.queue, t = n.dispatch, Ps !== null) {
					var i = Ps.get(n);
					if (i !== void 0) {
						Ps.delete(n), n = Es.memoizedState;
						do {
							var a = i.action;
							Is = !0, n = e(n, a), Is = !1, i = i.next;
						} while (i !== null);
						return Es.memoizedState = n, [n, t];
					}
				}
				return [Es.memoizedState, t];
			}
			return Is = !0, e = e === gt ? typeof t == "function" ? t() : t : n === void 0 ? t : n(t), Is = !1, Es.memoizedState = e, e = Es.queue = {
				last: null,
				dispatch: null
			}, e = e.dispatch = yt.bind(null, xs, e), [Es.memoizedState, e];
		}
		function vt(e, t) {
			if (xs = ut(), Es = ft(), t = t === void 0 ? null : t, Es !== null) {
				var n = Es.memoizedState;
				if (n !== null && t !== null) {
					a: {
						var i = n[1];
						if (i === null) console.error("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", Ls), i = !1;
						else {
							t.length !== i.length && console.error("The final argument passed to %s changed size between renders. The order and size of this array must remain constant.\n\nPrevious: %s\nIncoming: %s", Ls, "[" + t.join(", ") + "]", "[" + i.join(", ") + "]");
							for (var a = 0; a < i.length && a < t.length; a++) if (!bs(t[a], i[a])) {
								i = !1;
								break a;
							}
							i = !0;
						}
					}
					if (i) return n[0];
				}
			}
			return Is = !0, e = e(), Is = !1, Es.memoizedState = [e, t], e;
		}
		function yt(e, t, n) {
			if (25 <= Fs) throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
			if (e === xs) if (Os = !0, e = {
				action: n,
				next: null
			}, Ps === null && (Ps = /* @__PURE__ */ new Map()), n = Ps.get(t), n === void 0) Ps.set(t, e);
			else {
				for (t = n; t.next !== null;) t = t.next;
				t.next = e;
			}
		}
		function bt() {
			throw Error("A function wrapped in useEffectEvent can't be called during rendering.");
		}
		function xt() {
			throw Error("startTransition cannot be called during server rendering.");
		}
		function St() {
			throw Error("Cannot update optimistic state while rendering.");
		}
		function Ct(e, t, n) {
			ut();
			var i = As++, a = Cs;
			if (typeof e.$$FORM_ACTION == "function") {
				var o = null, s = ws;
				a = a.formState;
				var c = e.$$IS_SIGNATURE_EQUAL;
				if (a !== null && typeof c == "function") {
					var l = a[1];
					c.call(e, a[2], a[3]) && (o = n === void 0 ? "k" + u(JSON.stringify([
						s,
						null,
						i
					]), 0) : "p" + n, l === o && (js = i, t = a[0]));
				}
				var d = e.bind(null, t);
				return e = function(e) {
					d(e);
				}, typeof d.$$FORM_ACTION == "function" && (e.$$FORM_ACTION = function(e) {
					e = d.$$FORM_ACTION(e), n !== void 0 && (T(n, "target"), n += "", e.action = n);
					var t = e.data;
					return t && (o === null && (o = n === void 0 ? "k" + u(JSON.stringify([
						s,
						null,
						i
					]), 0) : "p" + n), t.append("$ACTION_KEY", o)), e;
				}), [
					t,
					e,
					!1
				];
			}
			var f = e.bind(null, t);
			return [
				t,
				function(e) {
					f(e);
				},
				!1
			];
		}
		function wt(e) {
			var t = Ms;
			return Ms += 1, Ns === null && (Ns = []), st(Ns, e, t);
		}
		function Tt() {
			throw Error("Cache cannot be refreshed during server rendering.");
		}
		function Et() {}
		function Dt() {
			if (Hs === 0) {
				Us = console.log, Ws = console.info, Gs = console.warn, Ks = console.error, qs = console.group, Js = console.groupCollapsed, Ys = console.groupEnd;
				var e = {
					configurable: !0,
					enumerable: !0,
					value: Et,
					writable: !0
				};
				Object.defineProperties(console, {
					info: e,
					log: e,
					warn: e,
					error: e,
					group: e,
					groupCollapsed: e,
					groupEnd: e
				});
			}
			Hs++;
		}
		function Ot() {
			if (Hs--, Hs === 0) {
				var e = {
					configurable: !0,
					enumerable: !0,
					writable: !0
				};
				Object.defineProperties(console, {
					log: wr({}, e, { value: Us }),
					info: wr({}, e, { value: Ws }),
					warn: wr({}, e, { value: Gs }),
					error: wr({}, e, { value: Ks }),
					group: wr({}, e, { value: qs }),
					groupCollapsed: wr({}, e, { value: Js }),
					groupEnd: wr({}, e, { value: Ys })
				});
			}
			0 > Hs && console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
		}
		function kt(e) {
			var t = Error.prepareStackTrace;
			if (Error.prepareStackTrace = void 0, e = e.stack, Error.prepareStackTrace = t, e.startsWith("Error: react-stack-top-frame\n") && (e = e.slice(29)), t = e.indexOf("\n"), t !== -1 && (e = e.slice(t + 1)), t = e.indexOf("react_stack_bottom_frame"), t !== -1 && (t = e.lastIndexOf("\n", t)), t !== -1) e = e.slice(0, t);
			else return "";
			return e;
		}
		function At(e) {
			if (Xs === void 0) try {
				throw Error();
			} catch (e) {
				var t = e.stack.trim().match(/\n( *(at )?)/);
				Xs = t && t[1] || "", Zs = -1 < e.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
			}
			return "\n" + Xs + e + Zs;
		}
		function jt(e, t) {
			if (!e || Qs) return "";
			var n = $s.get(e);
			if (n !== void 0) return n;
			Qs = !0, n = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
			var i = null;
			i = ti.H, ti.H = null, Dt();
			try {
				var a = { DetermineComponentFrameRoot: function() {
					try {
						if (t) {
							var n = function() {
								throw Error();
							};
							if (Object.defineProperty(n.prototype, "props", { set: function() {
								throw Error();
							} }), typeof Reflect == "object" && Reflect.construct) {
								try {
									Reflect.construct(n, []);
								} catch (e) {
									var i = e;
								}
								Reflect.construct(e, [], n);
							} else {
								try {
									n.call();
								} catch (e) {
									i = e;
								}
								e.call(n.prototype);
							}
						} else {
							try {
								throw Error();
							} catch (e) {
								i = e;
							}
							(n = e()) && typeof n.catch == "function" && n.catch(function() {});
						}
					} catch (e) {
						if (e && i && typeof e.stack == "string") return [e.stack, i.stack];
					}
					return [null, null];
				} };
				a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
				var o = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
				o && o.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
				var s = a.DetermineComponentFrameRoot(), c = s[0], l = s[1];
				if (c && l) {
					var u = c.split("\n"), d = l.split("\n");
					for (s = o = 0; o < u.length && !u[o].includes("DetermineComponentFrameRoot");) o++;
					for (; s < d.length && !d[s].includes("DetermineComponentFrameRoot");) s++;
					if (o === u.length || s === d.length) for (o = u.length - 1, s = d.length - 1; 1 <= o && 0 <= s && u[o] !== d[s];) s--;
					for (; 1 <= o && 0 <= s; o--, s--) if (u[o] !== d[s]) {
						if (o !== 1 || s !== 1) do
							if (o--, s--, 0 > s || u[o] !== d[s]) {
								var f = "\n" + u[o].replace(" at new ", " at ");
								return e.displayName && f.includes("<anonymous>") && (f = f.replace("<anonymous>", e.displayName)), typeof e == "function" && $s.set(e, f), f;
							}
						while (1 <= o && 0 <= s);
						break;
					}
				}
			} finally {
				Qs = !1, ti.H = i, Ot(), Error.prepareStackTrace = n;
			}
			return u = (u = e ? e.displayName || e.name : "") ? At(u) : "", typeof e == "function" && $s.set(e, u), u;
		}
		function Mt(e) {
			if (typeof e == "string") return At(e);
			if (typeof e == "function") return e.prototype && e.prototype.isReactComponent ? jt(e, !0) : jt(e, !1);
			if (typeof e == "object" && e) {
				switch (e.$$typeof) {
					case nr: return jt(e.render, !1);
					case ar: return jt(e.type, !1);
					case or:
						var t = e, n = t._payload;
						t = t._init;
						try {
							e = t(n);
						} catch {
							return At("Lazy");
						}
						return Mt(e);
				}
				if (typeof e.name == "string") {
					a: {
						if (n = e.name, t = e.env, e = e.debugLocation, e != null) {
							e = kt(e);
							var i = e.lastIndexOf("\n");
							if (e = i === -1 ? e : e.slice(i + 1), e.indexOf(n) !== -1) {
								n = "\n" + e;
								break a;
							}
						}
						n = At(n + (t ? " [" + t + "]" : ""));
					}
					return n;
				}
			}
			switch (e) {
				case ir: return At("SuspenseList");
				case rr: return At("Suspense");
			}
			return "";
		}
		function Nt() {
			var e = cc();
			1e3 < e - oc && (ti.recentlyCreatedOwnerStacks = 0, oc = e);
		}
		function Pt(e, t) {
			return (500 < t.byteSize || Je(t.contentState)) && t.contentPreamble === null;
		}
		function Ft(e) {
			if (typeof e == "object" && e && typeof e.environmentName == "string") {
				var t = e.environmentName;
				e = [e].slice(0), typeof e[0] == "string" ? e.splice(0, 1, "%c%s%c " + e[0], "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", " " + t + " ", "") : e.splice(0, 0, "%c%s%c", "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", " " + t + " ", ""), e.unshift(console), t = Yo.apply(console.error, e), t();
			} else console.error(e);
			return null;
		}
		function It(e, t, n, i, a, o, s, c, l, u, d) {
			var f = /* @__PURE__ */ new Set();
			this.destination = null, this.flushScheduled = !1, this.resumableState = e, this.renderState = t, this.rootFormatContext = n, this.progressiveChunkSize = i === void 0 ? 12800 : i, this.status = 10, this.fatalError = null, this.pendingRootTasks = this.allPendingTasks = this.nextSegmentId = 0, this.completedPreambleSegments = this.completedRootSegment = null, this.byteSize = 0, this.abortableTasks = f, this.pingedTasks = [], this.clientRenderedBoundaries = [], this.completedBoundaries = [], this.partialBoundaries = [], this.trackedPostpones = null, this.onError = a === void 0 ? Ft : a, this.onPostpone = u === void 0 ? ot : u, this.onAllReady = o === void 0 ? ot : o, this.onShellReady = s === void 0 ? ot : s, this.onShellError = c === void 0 ? ot : c, this.onFatalError = l === void 0 ? ot : l, this.formState = d === void 0 ? null : d, this.didWarnForKey = null;
		}
		function Lt(e, t, n, i, a, o, s, c, l, u, d, f) {
			return Nt(), t = new It(t, n, i, a, o, s, c, l, u, d, f), n = Gt(t, 0, null, i, !1, !1), n.parentFlushed = !0, e = Ut(t, null, e, -1, null, n, null, null, t.abortableTasks, null, i, null, ms, null, null, Zo, null), Yt(e), t.pingedTasks.push(e), t;
		}
		function Rt(e, t, n, i, a, o, s, c, l, u, d) {
			return e = Lt(e, t, n, i, a, o, s, c, l, u, d, void 0), e.trackedPostpones = {
				workingMap: /* @__PURE__ */ new Map(),
				rootNodes: [],
				rootSlots: null
			}, e;
		}
		function zt(e, t, n, i, a, o, s, c, l) {
			return Nt(), n = new It(t.resumableState, n, t.rootFormatContext, t.progressiveChunkSize, i, a, o, s, c, l, null), n.nextSegmentId = t.nextSegmentId, typeof t.replaySlots == "number" ? (i = Gt(n, 0, null, t.rootFormatContext, !1, !1), i.parentFlushed = !0, e = Ut(n, null, e, -1, null, i, null, null, n.abortableTasks, null, t.rootFormatContext, null, ms, null, null, Zo, null), Yt(e), n.pingedTasks.push(e), n) : (e = Wt(n, null, {
				nodes: t.replayNodes,
				slots: t.replaySlots,
				pendingTasks: 0
			}, e, -1, null, null, n.abortableTasks, null, t.rootFormatContext, null, ms, null, null, Zo, null), Yt(e), n.pingedTasks.push(e), n);
		}
		function Bt(e, t, n, i, a, o, s, c, l) {
			return e = zt(e, t, n, i, a, o, s, c, l), e.trackedPostpones = {
				workingMap: /* @__PURE__ */ new Map(),
				rootNodes: [],
				rootSlots: null
			}, e;
		}
		function Vt(e, t) {
			e.pingedTasks.push(t), e.pingedTasks.length === 1 && (e.flushScheduled = e.destination !== null, e.trackedPostpones !== null || e.status === 10 ? br(function() {
				return An(e);
			}) : d(function() {
				return An(e);
			}));
		}
		function Ht(e, t, n, i, a) {
			return n = {
				status: dc,
				rootSegmentID: -1,
				parentFlushed: !1,
				pendingTasks: 0,
				row: t,
				completedSegments: [],
				byteSize: 0,
				fallbackAbortableTasks: n,
				errorDigest: null,
				contentState: Be(),
				fallbackState: Be(),
				contentPreamble: i,
				fallbackPreamble: a,
				trackedContentKeyPath: null,
				trackedFallbackNode: null,
				errorMessage: null,
				errorStack: null,
				errorComponentStack: null
			}, t !== null && (t.pendingTasks++, i = t.boundaries, i !== null && (e.allPendingTasks++, n.pendingTasks++, i.push(n)), e = t.inheritedHoistables, e !== null && X(n.contentState, e)), n;
		}
		function Ut(e, t, n, i, a, o, s, c, l, u, d, f, p, m, h, g, _) {
			e.allPendingTasks++, a === null ? e.pendingRootTasks++ : a.pendingTasks++, m !== null && m.pendingTasks++;
			var v = {
				replay: null,
				node: n,
				childIndex: i,
				ping: function() {
					return Vt(e, v);
				},
				blockedBoundary: a,
				blockedSegment: o,
				blockedPreamble: s,
				hoistableState: c,
				abortSet: l,
				keyPath: u,
				formatContext: d,
				context: f,
				treeContext: p,
				row: m,
				componentStack: h,
				thenableState: t
			};
			return v.debugTask = _, l.add(v), v;
		}
		function Wt(e, t, n, i, a, o, s, c, l, u, d, f, p, m, h, g) {
			e.allPendingTasks++, o === null ? e.pendingRootTasks++ : o.pendingTasks++, p !== null && p.pendingTasks++, n.pendingTasks++;
			var _ = {
				replay: n,
				node: i,
				childIndex: a,
				ping: function() {
					return Vt(e, _);
				},
				blockedBoundary: o,
				blockedSegment: null,
				blockedPreamble: null,
				hoistableState: s,
				abortSet: c,
				keyPath: l,
				formatContext: u,
				context: d,
				treeContext: f,
				row: p,
				componentStack: m,
				thenableState: t
			};
			return _.debugTask = g, c.add(_), _;
		}
		function Gt(e, t, n, i, a, o) {
			return {
				status: dc,
				parentFlushed: !1,
				id: -1,
				index: t,
				chunks: [],
				children: [],
				preambleChildren: [],
				parentFormatContext: i,
				boundary: n,
				lastPushedText: a,
				textEmbedded: o
			};
		}
		function Kt() {
			if (Bs === null || Bs.componentStack === null) return "";
			var e = Bs.componentStack;
			try {
				var t = "";
				if (typeof e.type == "string") t += At(e.type);
				else if (typeof e.type == "function") {
					if (!e.owner) {
						var n = t, i = e.type, a = i ? i.displayName || i.name : "", o = a ? At(a) : "";
						t = n + o;
					}
				} else e.owner || (t += Mt(e.type));
				for (; e;) n = null, e.debugStack == null ? (o = e, o.stack != null && (n = typeof o.stack == "string" ? o.stack : o.stack = kt(o.stack))) : n = kt(e.debugStack), (e = e.owner) && n && (t += "\n" + n);
				var s = t;
			} catch (e) {
				s = "\nError generating stack: " + e.message + "\n" + e.stack;
			}
			return s;
		}
		function qt(e, t) {
			if (t != null) for (var n = t.length - 1; 0 <= n; n--) {
				var i = t[n];
				if (typeof i.name == "string" || typeof i.time == "number") break;
				if (i.awaited != null) {
					var a = i.debugStack == null ? i.awaited : i;
					if (a.debugStack !== void 0) {
						e.componentStack = {
							parent: e.componentStack,
							type: i,
							owner: a.owner,
							stack: a.debugStack
						}, e.debugTask = a.debugTask;
						break;
					}
				}
			}
		}
		function Jt(e, t) {
			if (t != null) for (var n = 0; n < t.length; n++) {
				var i = t[n];
				typeof i.name == "string" && i.debugStack !== void 0 && (e.componentStack = {
					parent: e.componentStack,
					type: i,
					owner: i.owner,
					stack: i.debugStack
				}, e.debugTask = i.debugTask);
			}
		}
		function Yt(e) {
			var t = e.node;
			if (typeof t == "object" && t) switch (t.$$typeof) {
				case Yn:
					var n = t.type, i = t._owner, a = t._debugStack;
					Jt(e, t._debugInfo), e.debugTask = t._debugTask, e.componentStack = {
						parent: e.componentStack,
						type: n,
						owner: i,
						stack: a
					};
					break;
				case or:
					Jt(e, t._debugInfo);
					break;
				default: typeof t.then == "function" && Jt(e, t._debugInfo);
			}
		}
		function Xt(e) {
			return e === null ? null : {
				parent: e.parent,
				type: "Suspense Fallback",
				owner: e.owner,
				stack: e.stack
			};
		}
		function Z(e) {
			var t = {};
			return e && Object.defineProperty(t, "componentStack", {
				configurable: !0,
				enumerable: !0,
				get: function() {
					try {
						var n = "", i = e;
						do
							n += Mt(i.type), i = i.parent;
						while (i);
						var a = n;
					} catch (e) {
						a = "\nError generating stack: " + e.message + "\n" + e.stack;
					}
					return Object.defineProperty(t, "componentStack", { value: a }), a;
				}
			}), t;
		}
		function Zt(e, t, n, i, a) {
			e.errorDigest = t, n instanceof Error ? (t = String(n.message), n = String(n.stack)) : (t = typeof n == "object" && n ? l(n) : String(n), n = null), a = a ? "Switched to client rendering because the server rendering aborted due to:\n\n" : "Switched to client rendering because the server rendering errored:\n\n", e.errorMessage = a + t, e.errorStack = n === null ? null : a + n, e.errorComponentStack = i.componentStack;
		}
		function Q(e, t, n, i) {
			if (e = e.onError, t = i ? i.run(e.bind(null, t, n)) : e(t, n), t != null && typeof t != "string") console.error("onError returned something with a type other than \"string\". onError should return a string and may return null or undefined but must not return anything else. It received something of type \"%s\" instead", typeof t);
			else return t;
		}
		function Qt(e, t, n, i) {
			n = e.onShellError;
			var a = e.onFatalError;
			i ? (i.run(n.bind(null, t)), i.run(a.bind(null, t))) : (n(t), a(t)), e.destination === null ? (e.status = 13, e.fatalError = t) : (e.status = _c, x(e.destination, t));
		}
		function $t(e, t) {
			en(e, t.next, t.hoistables);
		}
		function en(e, t, n) {
			for (; t !== null;) {
				n !== null && (X(t.hoistables, n), t.inheritedHoistables = n);
				var i = t.boundaries;
				if (i !== null) {
					t.boundaries = null;
					for (var a = 0; a < i.length; a++) {
						var o = i[a];
						n !== null && X(o.contentState, n), kn(e, o, null, null);
					}
				}
				if (t.pendingTasks--, 0 < t.pendingTasks) break;
				n = t.hoistables, t = t.next;
			}
		}
		function tn(e, t) {
			var n = t.boundaries;
			if (n !== null && t.pendingTasks === n.length) {
				for (var i = !0, a = 0; a < n.length; a++) {
					var o = n[a];
					if (o.pendingTasks !== 1 || o.parentFlushed || Pt(e, o)) {
						i = !1;
						break;
					}
				}
				i && en(e, t, t.hoistables);
			}
		}
		function nn(e) {
			var t = {
				pendingTasks: 1,
				boundaries: null,
				hoistables: Be(),
				inheritedHoistables: null,
				together: !1,
				next: null
			};
			return e !== null && 0 < e.pendingTasks && (t.pendingTasks++, t.boundaries = [], e.next = t), t;
		}
		function rn(e, t, n, i, a) {
			var o = t.keyPath, s = t.treeContext, c = t.row, l = t.componentStack, u = t.debugTask;
			Jt(t, t.node.props.children._debugInfo), t.keyPath = n, n = i.length;
			var d = null;
			if (t.replay !== null) {
				var f = t.replay.slots;
				if (typeof f == "object" && f) for (var p = 0; p < n; p++) {
					var m = a !== "backwards" && a !== "unstable_legacy-backwards" ? p : n - 1 - p, h = i[m];
					t.row = d = nn(d), t.treeContext = it(s, n, m);
					var g = f[m];
					typeof g == "number" ? (sn(e, t, g, h, m), delete f[m]) : bn(e, t, h, m), --d.pendingTasks === 0 && $t(e, d);
				}
				else for (f = 0; f < n; f++) p = a !== "backwards" && a !== "unstable_legacy-backwards" ? f : n - 1 - f, m = i[p], pn(e, t, m), t.row = d = nn(d), t.treeContext = it(s, n, p), bn(e, t, m, p), --d.pendingTasks === 0 && $t(e, d);
			} else if (a !== "backwards" && a !== "unstable_legacy-backwards") for (a = 0; a < n; a++) f = i[a], pn(e, t, f), t.row = d = nn(d), t.treeContext = it(s, n, a), bn(e, t, f, a), --d.pendingTasks === 0 && $t(e, d);
			else {
				for (a = t.blockedSegment, f = a.children.length, p = a.chunks.length, m = n - 1; 0 <= m; m--) {
					h = i[m], t.row = d = nn(d), t.treeContext = it(s, n, m), g = Gt(e, p, null, t.formatContext, m === 0 ? a.lastPushedText : !0, !0), a.children.splice(f, 0, g), t.blockedSegment = g, pn(e, t, h);
					try {
						bn(e, t, h, m), g.lastPushedText && g.textEmbedded && g.chunks.push(Ri), g.status = fc, On(e, t.blockedBoundary, g), --d.pendingTasks === 0 && $t(e, d);
					} catch (t) {
						throw g.status = e.status === 12 ? mc : hc, t;
					}
				}
				t.blockedSegment = a, a.lastPushedText = !1;
			}
			c !== null && d !== null && 0 < d.pendingTasks && (c.pendingTasks++, d.next = c), t.treeContext = s, t.row = c, t.keyPath = o, t.componentStack = l, t.debugTask = u;
		}
		function $(e, t, n, i, a, o) {
			var s = t.thenableState;
			for (t.thenableState = null, xs = {}, Ss = t, Cs = e, ws = n, Is = !1, As = ks = 0, js = -1, Ms = 0, Ns = s, e = tc(i, a, o); Os;) Os = !1, As = ks = 0, js = -1, Ms = 0, Fs += 1, Es = null, e = i(a, o);
			return mt(), e;
		}
		function an(e, t, n, i, a, o, s) {
			var c = !1;
			if (o !== 0 && e.formState !== null) {
				var l = t.blockedSegment;
				if (l !== null) {
					c = !0, l = l.chunks;
					for (var u = 0; u < o; u++) u === s ? l.push(ua) : l.push(da);
				}
			}
			o = t.keyPath, t.keyPath = n, a ? (n = t.treeContext, t.treeContext = it(n, 1, 0), bn(e, t, i, -1), t.treeContext = n) : c ? bn(e, t, i, -1) : dn(e, t, i, -1), t.keyPath = o;
		}
		function on(e, t, n, a, o, s) {
			if (typeof a == "function") if (a.prototype && a.prototype.isReactComponent) {
				var c = o;
				if ("ref" in o) for (var l in c = {}, o) l !== "ref" && (c[l] = o[l]);
				var u = a.defaultProps;
				if (u) for (var d in c === o && (c = wr({}, c, o)), u) c[d] === void 0 && (c[d] = u[d]);
				var f = c, p = Zo, m = a.contextType;
				if ("contextType" in a && m !== null && (m === void 0 || m.$$typeof !== tr) && !ds.has(a)) {
					ds.add(a);
					var h = m === void 0 ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof m == "object" ? m.$$typeof === er ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(m).join(", ") + "}." : " However, it is set to a " + typeof m + ".";
					console.error("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Ye(a) || "Component", h);
				}
				typeof m == "object" && m && (p = m._currentValue);
				var g = new a(f, p);
				if (typeof a.getDerivedStateFromProps == "function" && (g.state === null || g.state === void 0)) {
					var _ = Ye(a) || "Component";
					ns.has(_) || (ns.add(_), console.error("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", _, g.state === null ? "null" : "undefined", _));
				}
				if (typeof a.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
					var v = null, y = null, b = null;
					if (typeof g.componentWillMount == "function" && !0 !== g.componentWillMount.__suppressDeprecationWarning ? v = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (v = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && !0 !== g.componentWillReceiveProps.__suppressDeprecationWarning ? y = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (y = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && !0 !== g.componentWillUpdate.__suppressDeprecationWarning ? b = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (b = "UNSAFE_componentWillUpdate"), v !== null || y !== null || b !== null) {
						var x = Ye(a) || "Component", S = typeof a.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
						os.has(x) || (os.add(x), console.error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n%s uses %s but also contains the following legacy lifecycles:%s%s%s\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://react.dev/link/unsafe-component-lifecycles", x, S, v === null ? "" : "\n  " + v, y === null ? "" : "\n  " + y, b === null ? "" : "\n  " + b));
					}
				}
				var C = Ye(a) || "Component";
				g.render || (a.prototype && typeof a.prototype.render == "function" ? console.error("No `render` method found on the %s instance: did you accidentally return an object from the constructor?", C) : console.error("No `render` method found on the %s instance: you may have forgotten to define `render`.", C)), !g.getInitialState || g.getInitialState.isReactClassApproved || g.state || console.error("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", C), g.getDefaultProps && !g.getDefaultProps.isReactClassApproved && console.error("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", C), g.contextType && console.error("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", C), a.childContextTypes && !us.has(a) && (us.add(a), console.error("%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)", C)), a.contextTypes && !ls.has(a) && (ls.add(a), console.error("%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)", C)), typeof g.componentShouldUpdate == "function" && console.error("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", C), a.prototype && a.prototype.isPureReactComponent && g.shouldComponentUpdate !== void 0 && console.error("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Ye(a) || "A pure component"), typeof g.componentDidUnmount == "function" && console.error("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", C), typeof g.componentDidReceiveProps == "function" && console.error("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", C), typeof g.componentWillRecieveProps == "function" && console.error("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", C), typeof g.UNSAFE_componentWillRecieveProps == "function" && console.error("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", C);
				var w = g.props !== f;
				g.props !== void 0 && w && console.error("When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", C), g.defaultProps && console.error("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", C, C), typeof g.getSnapshotBeforeUpdate != "function" || typeof g.componentDidUpdate == "function" || rs.has(a) || (rs.add(a), console.error("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Ye(a))), typeof g.getDerivedStateFromProps == "function" && console.error("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", C), typeof g.getDerivedStateFromError == "function" && console.error("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", C), typeof a.getSnapshotBeforeUpdate == "function" && console.error("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", C);
				var T = g.state;
				T && (typeof T != "object" || pr(T)) && console.error("%s.state: must be set to an object or null", C), typeof g.getChildContext == "function" && typeof a.childContextTypes != "object" && console.error("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", C);
				var E = g.state === void 0 ? null : g.state;
				g.updater = ps, g.props = f, g.state = E;
				var D = {
					queue: [],
					replace: !1
				};
				g._reactInternals = D;
				var O = a.contextType;
				if (g.context = typeof O == "object" && O ? O._currentValue : Zo, g.state === f) {
					var k = Ye(a) || "Component";
					ss.has(k) || (ss.add(k), console.error("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", k));
				}
				var A = a.getDerivedStateFromProps;
				if (typeof A == "function") {
					var j = A(f, E);
					if (j === void 0) {
						var M = Ye(a) || "Component";
						cs.has(M) || (cs.add(M), console.error("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", M));
					}
					g.state = j == null ? E : wr({}, E, j);
				}
				if (typeof a.getDerivedStateFromProps != "function" && typeof g.getSnapshotBeforeUpdate != "function" && (typeof g.UNSAFE_componentWillMount == "function" || typeof g.componentWillMount == "function")) {
					var N = g.state;
					if (typeof g.componentWillMount == "function") {
						if (!0 !== g.componentWillMount.__suppressDeprecationWarning) {
							var P = Ye(a) || "Unknown";
							ts[P] || (console.warn("componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.\n\n* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.\n\nPlease update the following components: %s", P), ts[P] = !0);
						}
						g.componentWillMount();
					}
					if (typeof g.UNSAFE_componentWillMount == "function" && g.UNSAFE_componentWillMount(), N !== g.state && (console.error("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Ye(a) || "Component"), ps.enqueueReplaceState(g, g.state, null)), D.queue !== null && 0 < D.queue.length) {
						var F = D.queue, I = D.replace;
						if (D.queue = null, D.replace = !1, I && F.length === 1) g.state = F[0];
						else {
							for (var L = I ? F[0] : g.state, R = !0, ee = I ? 1 : 0; ee < F.length; ee++) {
								var B = F[ee], V = typeof B == "function" ? B.call(g, L, f, void 0) : B;
								V != null && (R ? (R = !1, L = wr({}, L, V)) : wr(L, V));
							}
							g.state = L;
						}
					} else D.queue = null;
				}
				var H = rc(g);
				if (e.status === 12) throw null;
				g.props !== f && (Cc || console.error("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Ye(a) || "a component"), Cc = !0);
				var W = t.keyPath;
				t.keyPath = n, dn(e, t, H, -1), t.keyPath = W;
			} else {
				if (a.prototype && typeof a.prototype.render == "function") {
					var re = Ye(a) || "Unknown";
					yc[re] || (console.error("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", re, re), yc[re] = !0);
				}
				var ie = $(e, t, n, a, o, void 0);
				if (e.status === 12) throw null;
				var ae = ks !== 0, oe = As, se = js;
				if (a.contextTypes) {
					var G = Ye(a) || "Unknown";
					bc[G] || (bc[G] = !0, console.error("%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)", G));
				}
				if (a && a.childContextTypes && console.error("childContextTypes cannot be defined on a function component.\n  %s.childContextTypes = ...", a.displayName || a.name || "Component"), typeof a.getDerivedStateFromProps == "function") {
					var ce = Ye(a) || "Unknown";
					Sc[ce] || (console.error("%s: Function components do not support getDerivedStateFromProps.", ce), Sc[ce] = !0);
				}
				if (typeof a.contextType == "object" && a.contextType !== null) {
					var le = Ye(a) || "Unknown";
					xc[le] || (console.error("%s: Function components do not support contextType.", le), xc[le] = !0);
				}
				an(e, t, n, ie, ae, oe, se);
			}
			else if (typeof a == "string") {
				var ue = t.blockedSegment;
				if (ue === null) {
					var K = o.children, de = t.formatContext, fe = t.keyPath;
					t.formatContext = te(de, a, o), t.keyPath = n, bn(e, t, K, -1), t.formatContext = de, t.keyPath = fe;
				} else {
					var pe = xe(ue.chunks, a, o, e.resumableState, e.renderState, t.blockedPreamble, t.hoistableState, t.formatContext, ue.lastPushedText);
					ue.lastPushedText = !1;
					var me = t.formatContext, he = t.keyPath;
					if (t.keyPath = n, (t.formatContext = te(me, a, o)).insertionMode === ji) {
						var ge = Gt(e, 0, null, t.formatContext, !1, !1);
						ue.preambleChildren.push(ge), t.blockedSegment = ge;
						try {
							ge.status = 6, bn(e, t, pe, -1), ge.lastPushedText && ge.textEmbedded && ge.chunks.push(Ri), ge.status = fc, On(e, t.blockedBoundary, ge);
						} finally {
							t.blockedSegment = ue;
						}
					} else bn(e, t, pe, -1);
					t.formatContext = me, t.keyPath = he;
					a: {
						var _e = ue.chunks, ve = e.resumableState;
						switch (a) {
							case "title":
							case "style":
							case "script":
							case "area":
							case "base":
							case "br":
							case "col":
							case "embed":
							case "hr":
							case "img":
							case "input":
							case "keygen":
							case "link":
							case "meta":
							case "param":
							case "source":
							case "track":
							case "wbr": break a;
							case "body":
								if (me.insertionMode <= ki) {
									ve.hasBody = !0;
									break a;
								}
								break;
							case "html":
								if (me.insertionMode === Oi) {
									ve.hasHtml = !0;
									break a;
								}
								break;
							case "head": if (me.insertionMode <= ki) break a;
						}
						_e.push(Se(a));
					}
					ue.lastPushedText = !1;
				}
			} else {
				switch (a) {
					case lr:
					case Qn:
					case $n:
					case Zn:
						var ye = t.keyPath;
						t.keyPath = n, dn(e, t, o.children, -1), t.keyPath = ye;
						return;
					case cr:
						var be = t.blockedSegment;
						if (be === null) {
							if (o.mode !== "hidden") {
								var Ce = t.keyPath;
								t.keyPath = n, bn(e, t, o.children, -1), t.keyPath = Ce;
							}
						} else if (o.mode !== "hidden") {
							be.chunks.push(wa), be.lastPushedText = !1;
							var we = t.keyPath;
							t.keyPath = n, bn(e, t, o.children, -1), t.keyPath = we, be.chunks.push(Ta), be.lastPushedText = !1;
						}
						return;
					case ir:
						a: {
							var q = o.children, Te = o.revealOrder;
							if (Te === "forwards" || Te === "backwards" || Te === "unstable_legacy-backwards") {
								if (pr(q)) {
									rn(e, t, n, q, Te);
									break a;
								}
								var Ee = i(q);
								if (Ee) {
									var De = Ee.call(q);
									if (De) {
										un(t, q, -1, De, Ee);
										var Oe = De.next();
										if (!Oe.done) {
											var ke = [];
											do
												ke.push(Oe.value), Oe = De.next();
											while (!Oe.done);
											rn(e, t, n, q, Te);
										}
										break a;
									}
								}
							}
							if (Te === "together") {
								var Ae = t.keyPath, je = t.row, Me = t.row = nn(null);
								Me.boundaries = [], Me.together = !0, t.keyPath = n, dn(e, t, q, -1), --Me.pendingTasks === 0 && $t(e, Me), t.keyPath = Ae, t.row = je, je !== null && 0 < Me.pendingTasks && (je.pendingTasks++, Me.next = je);
							} else {
								var Ne = t.keyPath;
								t.keyPath = n, dn(e, t, q, -1), t.keyPath = Ne;
							}
						}
						return;
					case dr:
					case sr: throw Error("ReactDOMServer does not yet support scope components.");
					case rr:
						a: if (t.replay !== null) {
							var Pe = t.keyPath, Fe = t.formatContext, Ie = t.row;
							t.keyPath = n, t.formatContext = ne(e.resumableState, Fe), t.row = null;
							var Le = o.children;
							try {
								bn(e, t, Le, -1);
							} finally {
								t.keyPath = Pe, t.formatContext = Fe, t.row = Ie;
							}
						} else {
							var Re = t.keyPath, ze = t.formatContext, Be = t.row, Ve = t.blockedBoundary, He = t.blockedPreamble, Ue = t.hoistableState, We = t.blockedSegment, Ge = o.fallback, Ke = o.children, J = /* @__PURE__ */ new Set(), qe = t.formatContext.insertionMode < Ai ? Ht(e, t.row, J, z(), z()) : Ht(e, t.row, J, null, null);
							e.trackedPostpones !== null && (qe.trackedContentKeyPath = n);
							var Y = Gt(e, We.chunks.length, qe, t.formatContext, !1, !1);
							We.children.push(Y), We.lastPushedText = !1;
							var X = Gt(e, 0, null, t.formatContext, !1, !1);
							if (X.parentFlushed = !0, e.trackedPostpones !== null) {
								var Je = t.componentStack, Xe = [
									n[0],
									"Suspense Fallback",
									n[2]
								], Ze = [
									Xe[1],
									Xe[2],
									[],
									null
								];
								e.trackedPostpones.workingMap.set(Xe, Ze), qe.trackedFallbackNode = Ze, t.blockedSegment = Y, t.blockedPreamble = qe.fallbackPreamble, t.keyPath = Xe, t.formatContext = U(e.resumableState, ze), t.componentStack = Xt(Je), Y.status = 6;
								try {
									bn(e, t, Ge, -1), Y.lastPushedText && Y.textEmbedded && Y.chunks.push(Ri), Y.status = fc, On(e, Ve, Y);
								} catch (t) {
									throw Y.status = e.status === 12 ? mc : hc, t;
								} finally {
									t.blockedSegment = We, t.blockedPreamble = He, t.keyPath = Re, t.formatContext = ze;
								}
								var Qe = Ut(e, null, Ke, -1, qe, X, qe.contentPreamble, qe.contentState, t.abortSet, n, ne(e.resumableState, t.formatContext), t.context, t.treeContext, null, Je, Zo, t.debugTask);
								Yt(Qe), e.pingedTasks.push(Qe);
							} else {
								t.blockedBoundary = qe, t.blockedPreamble = qe.contentPreamble, t.hoistableState = qe.contentState, t.blockedSegment = X, t.keyPath = n, t.formatContext = ne(e.resumableState, ze), t.row = null, X.status = 6;
								try {
									if (bn(e, t, Ke, -1), X.lastPushedText && X.textEmbedded && X.chunks.push(Ri), X.status = fc, On(e, qe, X), Dn(qe, X), qe.pendingTasks === 0 && qe.status === dc) {
										if (qe.status = fc, !Pt(e, qe)) {
											Be !== null && --Be.pendingTasks === 0 && $t(e, Be), e.pendingRootTasks === 0 && t.blockedPreamble && Nn(e);
											break a;
										}
									} else Be !== null && Be.together && tn(e, Be);
								} catch (n) {
									if (qe.status = uc, e.status === 12) {
										X.status = mc;
										var $e = e.fatalError;
									} else X.status = hc, $e = n;
									var et = Z(t.componentStack), tt = Q(e, $e, et, t.debugTask);
									Zt(qe, tt, $e, et, !1), _n(e, qe);
								} finally {
									t.blockedBoundary = Ve, t.blockedPreamble = He, t.hoistableState = Ue, t.blockedSegment = We, t.keyPath = Re, t.formatContext = ze, t.row = Be;
								}
								var nt = Ut(e, null, Ge, -1, Ve, Y, qe.fallbackPreamble, qe.fallbackState, J, [
									n[0],
									"Suspense Fallback",
									n[2]
								], U(e.resumableState, t.formatContext), t.context, t.treeContext, t.row, Xt(t.componentStack), Zo, t.debugTask);
								Yt(nt), e.pingedTasks.push(nt);
							}
						}
						return;
				}
				if (typeof a == "object" && a) switch (a.$$typeof) {
					case nr:
						if ("ref" in o) {
							var rt = {};
							for (var it in o) it !== "ref" && (rt[it] = o[it]);
						} else rt = o;
						var at = $(e, t, n, a.render, rt, s);
						an(e, t, n, at, ks !== 0, As, js);
						return;
					case ar:
						on(e, t, n, a.type, o, s);
						return;
					case tr:
						var ot = o.value, st = o.children, ct = t.context, lt = t.keyPath, ut = a._currentValue;
						a._currentValue = ot, a._currentRenderer !== void 0 && a._currentRenderer !== null && a._currentRenderer !== Qo && console.error("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), a._currentRenderer = Qo;
						var dt = $o, ft = {
							parent: dt,
							depth: dt === null ? 0 : dt.depth + 1,
							context: a,
							parentValue: ut,
							value: ot
						};
						$o = ft, t.context = ft, t.keyPath = n, dn(e, t, st, -1);
						var pt = $o;
						if (pt === null) throw Error("Tried to pop a Context at the root of the app. This is a bug in React.");
						pt.context !== a && console.error("The parent context is not the expected context. This is probably a bug in React."), pt.context._currentValue = pt.parentValue, a._currentRenderer !== void 0 && a._currentRenderer !== null && a._currentRenderer !== Qo && console.error("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), a._currentRenderer = Qo, t.context = $o = pt.parent, t.keyPath = lt, ct !== t.context && console.error("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
						return;
					case er:
						var mt = a._context, ht = o.children;
						typeof ht != "function" && console.error("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
						var gt = ht(mt._currentValue), _t = t.keyPath;
						t.keyPath = n, dn(e, t, gt, -1), t.keyPath = _t;
						return;
					case or:
						var vt = ac(a);
						if (e.status === 12) throw null;
						on(e, t, n, vt, o, s);
						return;
				}
				var yt = "";
				throw (a === void 0 || typeof a == "object" && a && Object.keys(a).length === 0) && (yt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + ((a == null ? a : typeof a) + "." + yt));
			}
		}
		function sn(e, t, n, i, a) {
			var o = t.replay, s = t.blockedBoundary, c = Gt(e, 0, null, t.formatContext, !1, !1);
			c.id = n, c.parentFlushed = !0;
			try {
				t.replay = null, t.blockedSegment = c, bn(e, t, i, a), c.status = fc, On(e, s, c), s === null ? e.completedRootSegment = c : (Dn(s, c), s.parentFlushed && e.partialBoundaries.push(s));
			} finally {
				t.replay = o, t.blockedSegment = null;
			}
		}
		function ln(e, t, n, i, a, o, s, c, l, u) {
			o = u.nodes;
			for (var d = 0; d < o.length; d++) {
				var f = o[d];
				if (a === f[1]) {
					if (f.length === 4) {
						if (i !== null && i !== f[0]) throw Error("Expected the resume to render <" + f[0] + "> in this slot but instead it rendered <" + i + ">. The tree doesn't match so React will fallback to client rendering.");
						var p = f[2];
						i = f[3], a = t.node, t.replay = {
							nodes: p,
							slots: i,
							pendingTasks: 1
						};
						try {
							if (on(e, t, n, s, c, l), t.replay.pendingTasks === 1 && 0 < t.replay.nodes.length) throw Error("Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering.");
							t.replay.pendingTasks--;
						} catch (f) {
							if (typeof f == "object" && f && (f === vs || typeof f.then == "function")) throw t.node === a ? t.replay = u : o.splice(d, 1), f;
							t.replay.pendingTasks--, s = Z(t.componentStack), c = e, e = t.blockedBoundary, n = f, l = i, i = Q(c, n, s, t.debugTask), Sn(c, e, p, l, n, i, s, !1);
						}
						t.replay = u;
					} else {
						if (s !== rr) throw Error("Expected the resume to render <Suspense> in this slot but instead it rendered <" + (Ye(s) || "Unknown") + ">. The tree doesn't match so React will fallback to client rendering.");
						a: {
							u = void 0, i = f[5], s = f[2], l = f[3], a = f[4] === null ? [] : f[4][2], f = f[4] === null ? null : f[4][3];
							var m = t.keyPath, h = t.formatContext, g = t.row, _ = t.replay, v = t.blockedBoundary, y = t.hoistableState, b = c.children, x = c.fallback, S = /* @__PURE__ */ new Set();
							c = t.formatContext.insertionMode < Ai ? Ht(e, t.row, S, z(), z()) : Ht(e, t.row, S, null, null), c.parentFlushed = !0, c.rootSegmentID = i, t.blockedBoundary = c, t.hoistableState = c.contentState, t.keyPath = n, t.formatContext = ne(e.resumableState, h), t.row = null, t.replay = {
								nodes: s,
								slots: l,
								pendingTasks: 1
							};
							try {
								if (bn(e, t, b, -1), t.replay.pendingTasks === 1 && 0 < t.replay.nodes.length) throw Error("Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering.");
								if (t.replay.pendingTasks--, c.pendingTasks === 0 && c.status === dc) {
									c.status = fc, e.completedBoundaries.push(c);
									break a;
								}
							} catch (n) {
								c.status = uc, p = Z(t.componentStack), u = Q(e, n, p, t.debugTask), Zt(c, u, n, p, !1), t.replay.pendingTasks--, e.clientRenderedBoundaries.push(c);
							} finally {
								t.blockedBoundary = v, t.hoistableState = y, t.replay = _, t.keyPath = m, t.formatContext = h, t.row = g;
							}
							c = Wt(e, null, {
								nodes: a,
								slots: f,
								pendingTasks: 0
							}, x, -1, v, c.fallbackState, S, [
								n[0],
								"Suspense Fallback",
								n[2]
							], U(e.resumableState, t.formatContext), t.context, t.treeContext, t.row, Xt(t.componentStack), Zo, t.debugTask), Yt(c), e.pingedTasks.push(c);
						}
					}
					o.splice(d, 1);
					break;
				}
			}
		}
		function un(e, t, n, i, a) {
			i === t ? (n !== -1 || e.componentStack === null || typeof e.componentStack.type != "function" || Object.prototype.toString.call(e.componentStack.type) !== "[object GeneratorFunction]" || Object.prototype.toString.call(i) !== "[object Generator]") && (wc || console.error("Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."), wc = !0) : t.entries !== a || Tc || (console.error("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Tc = !0);
		}
		function dn(e, t, n, i) {
			t.replay !== null && typeof t.replay.slots == "number" ? sn(e, t, t.replay.slots, n, i) : (t.node = n, t.childIndex = i, n = t.componentStack, i = t.debugTask, Yt(t), fn(e, t), t.componentStack = n, t.debugTask = i);
		}
		function fn(e, t) {
			var n = t.node, a = t.childIndex;
			if (n !== null) {
				if (typeof n == "object") {
					switch (n.$$typeof) {
						case Yn:
							var o = n.type, s = n.key;
							n = n.props;
							var c = n.ref;
							c = c === void 0 ? null : c;
							var l = t.debugTask, u = Ye(o);
							s ??= a === -1 ? 0 : a;
							var d = [
								t.keyPath,
								u,
								s
							];
							t.replay === null ? l ? l.run(on.bind(null, e, t, d, o, n, c)) : on(e, t, d, o, n, c) : l ? l.run(ln.bind(null, e, t, d, u, s, a, o, n, c, t.replay)) : ln(e, t, d, u, s, a, o, n, c, t.replay);
							return;
						case Xn: throw Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
						case or:
							if (o = ac(n), e.status === 12) throw null;
							dn(e, t, o, a);
							return;
					}
					if (pr(n)) {
						mn(e, t, n, a);
						return;
					}
					if ((s = i(n)) && (o = s.call(n))) {
						if (un(t, n, a, o, s), n = o.next(), !n.done) {
							s = [];
							do
								s.push(n.value), n = o.next();
							while (!n.done);
							mn(e, t, s, a);
						}
						return;
					}
					if (typeof n.then == "function") return t.thenableState = null, dn(e, t, wt(n), a);
					if (n.$$typeof === tr) return dn(e, t, n._currentValue, a);
					throw e = Object.prototype.toString.call(n), Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.");
				}
				typeof n == "string" ? (t = t.blockedSegment, t !== null && (t.lastPushedText = W(t.chunks, n, e.renderState, t.lastPushedText))) : typeof n == "number" || typeof n == "bigint" ? (t = t.blockedSegment, t !== null && (t.lastPushedText = W(t.chunks, "" + n, e.renderState, t.lastPushedText))) : (typeof n == "function" && (e = n.displayName || n.name || "Component", console.error("Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.", e, e)), typeof n == "symbol" && console.error("Symbols are not valid as a React child.\n  %s", String(n)));
			}
		}
		function pn(e, t, n) {
			if (typeof n == "object" && n && (n.$$typeof === Yn || n.$$typeof === Xn) && n._store && (!n._store.validated && n.key == null || n._store.validated === 2)) {
				if (typeof n._store != "object") throw Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
				n._store.validated = 1;
				var i = e.didWarnForKey;
				if (i ??= e.didWarnForKey = /* @__PURE__ */ new WeakSet(), e = t.componentStack, e !== null && !i.has(e)) {
					i.add(e);
					var a = Ye(n.type);
					i = n._owner;
					var o = e.owner;
					if (e = "", o && o.type !== void 0) {
						var s = Ye(o.type);
						s && (e = "\n\nCheck the render method of `" + s + "`.");
					}
					e || a && (e = "\n\nCheck the top-level render call using <" + a + ">."), a = "", i != null && o !== i && (o = null, i.type === void 0 ? typeof i.name == "string" && (o = i.name) : o = Ye(i.type), o && (a = " It was passed a child from " + o + ".")), i = t.componentStack, t.componentStack = {
						parent: t.componentStack,
						type: n.type,
						owner: n._owner,
						stack: n._debugStack
					}, console.error("Each child in a list should have a unique \"key\" prop.%s%s See https://react.dev/link/warning-keys for more information.", e, a), t.componentStack = i;
				}
			}
		}
		function mn(e, t, n, i) {
			var a = t.keyPath, o = t.componentStack, s = t.debugTask;
			if (Jt(t, t.node._debugInfo), i !== -1 && (t.keyPath = [
				t.keyPath,
				"Fragment",
				i
			], t.replay !== null)) {
				for (var c = t.replay, l = c.nodes, u = 0; u < l.length; u++) {
					var d = l[u];
					if (d[1] === i) {
						i = d[2], d = d[3], t.replay = {
							nodes: i,
							slots: d,
							pendingTasks: 1
						};
						try {
							if (mn(e, t, n, -1), t.replay.pendingTasks === 1 && 0 < t.replay.nodes.length) throw Error("Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering.");
							t.replay.pendingTasks--;
						} catch (a) {
							if (typeof a == "object" && a && (a === vs || typeof a.then == "function")) throw a;
							t.replay.pendingTasks--;
							var f = Z(t.componentStack);
							n = t.blockedBoundary;
							var p = a, m = d;
							d = Q(e, p, f, t.debugTask), Sn(e, n, i, m, p, d, f, !1);
						}
						t.replay = c, l.splice(u, 1);
						break;
					}
				}
				t.keyPath = a, t.componentStack = o, t.debugTask = s;
				return;
			}
			if (c = t.treeContext, l = n.length, t.replay !== null && (u = t.replay.slots, typeof u == "object" && u)) {
				for (i = 0; i < l; i++) d = n[i], t.treeContext = it(c, l, i), p = u[i], typeof p == "number" ? (sn(e, t, p, d, i), delete u[i]) : bn(e, t, d, i);
				t.treeContext = c, t.keyPath = a, t.componentStack = o, t.debugTask = s;
				return;
			}
			for (u = 0; u < l; u++) i = n[u], pn(e, t, i), t.treeContext = it(c, l, u), bn(e, t, i, u);
			t.treeContext = c, t.keyPath = a, t.componentStack = o, t.debugTask = s;
		}
		function hn(e, t, n) {
			if (n.status = gc, n.rootSegmentID = e.nextSegmentId++, e = n.trackedContentKeyPath, e === null) throw Error("It should not be possible to postpone at the root. This is a bug in React.");
			var i = n.trackedFallbackNode, a = [], o = t.workingMap.get(e);
			return o === void 0 ? (n = [
				e[1],
				e[2],
				a,
				null,
				i,
				n.rootSegmentID
			], t.workingMap.set(e, n), Wn(n, e[0], t), n) : (o[4] = i, o[5] = n.rootSegmentID, o);
		}
		function gn(e, t, n, i) {
			i.status = gc;
			var a = n.keyPath, o = n.blockedBoundary;
			if (o === null) i.id = e.nextSegmentId++, t.rootSlots = i.id, e.completedRootSegment !== null && (e.completedRootSegment.status = gc);
			else {
				if (o !== null && o.status === dc) {
					var s = hn(e, t, o);
					if (o.trackedContentKeyPath === a && n.childIndex === -1) {
						i.id === -1 && (i.id = i.parentFlushed ? o.rootSegmentID : e.nextSegmentId++), s[3] = i.id;
						return;
					}
				}
				if (i.id === -1 && (i.id = i.parentFlushed && o !== null ? o.rootSegmentID : e.nextSegmentId++), n.childIndex === -1) a === null ? t.rootSlots = i.id : (n = t.workingMap.get(a), n === void 0 ? (n = [
					a[1],
					a[2],
					[],
					i.id
				], Wn(n, a[0], t)) : n[3] = i.id);
				else {
					if (a === null) {
						if (e = t.rootSlots, e === null) e = t.rootSlots = {};
						else if (typeof e == "number") throw Error("It should not be possible to postpone both at the root of an element as well as a slot below. This is a bug in React.");
					} else if (o = t.workingMap, s = o.get(a), s === void 0) e = {}, s = [
						a[1],
						a[2],
						[],
						e
					], o.set(a, s), Wn(s, a[0], t);
					else if (e = s[3], e === null) e = s[3] = {};
					else if (typeof e == "number") throw Error("It should not be possible to postpone both at the root of an element as well as a slot below. This is a bug in React.");
					e[n.childIndex] = i.id;
				}
			}
		}
		function _n(e, t) {
			e = e.trackedPostpones, e !== null && (t = t.trackedContentKeyPath, t !== null && (t = e.workingMap.get(t), t !== void 0 && (t.length = 4, t[2] = [], t[3] = null)));
		}
		function vn(e, t, n) {
			return Wt(e, n, t.replay, t.node, t.childIndex, t.blockedBoundary, t.hoistableState, t.abortSet, t.keyPath, t.formatContext, t.context, t.treeContext, t.row, t.componentStack, Zo, t.debugTask);
		}
		function yn(e, t, n) {
			var i = t.blockedSegment, a = Gt(e, i.chunks.length, null, t.formatContext, i.lastPushedText, !0);
			return i.children.push(a), i.lastPushedText = !1, Ut(e, n, t.node, t.childIndex, t.blockedBoundary, a, t.blockedPreamble, t.hoistableState, t.abortSet, t.keyPath, t.formatContext, t.context, t.treeContext, t.row, t.componentStack, Zo, t.debugTask);
		}
		function bn(e, t, n, i) {
			var a = t.formatContext, o = t.context, s = t.keyPath, c = t.treeContext, l = t.componentStack, u = t.debugTask, d = t.blockedSegment;
			if (d === null) {
				d = t.replay;
				try {
					return dn(e, t, n, i);
				} catch (f) {
					if (mt(), n = f === vs ? ct() : f, e.status !== 12 && typeof n == "object" && n) {
						if (typeof n.then == "function") {
							i = f === vs ? pt() : null, e = vn(e, t, i).ping, n.then(e, e), t.formatContext = a, t.context = o, t.keyPath = s, t.treeContext = c, t.componentStack = l, t.replay = d, t.debugTask = u, tt(o);
							return;
						}
						if (n.message === "Maximum call stack size exceeded") {
							n = f === vs ? pt() : null, n = vn(e, t, n), e.pingedTasks.push(n), t.formatContext = a, t.context = o, t.keyPath = s, t.treeContext = c, t.componentStack = l, t.replay = d, t.debugTask = u, tt(o);
							return;
						}
					}
				}
			} else {
				var f = d.children.length, p = d.chunks.length;
				try {
					return dn(e, t, n, i);
				} catch (i) {
					if (mt(), d.children.length = f, d.chunks.length = p, n = i === vs ? ct() : i, e.status !== 12 && typeof n == "object" && n) {
						if (typeof n.then == "function") {
							d = n, n = i === vs ? pt() : null, e = yn(e, t, n).ping, d.then(e, e), t.formatContext = a, t.context = o, t.keyPath = s, t.treeContext = c, t.componentStack = l, t.debugTask = u, tt(o);
							return;
						}
						if (n.message === "Maximum call stack size exceeded") {
							d = i === vs ? pt() : null, d = yn(e, t, d), e.pingedTasks.push(d), t.formatContext = a, t.context = o, t.keyPath = s, t.treeContext = c, t.componentStack = l, t.debugTask = u, tt(o);
							return;
						}
					}
				}
			}
			throw t.formatContext = a, t.context = o, t.keyPath = s, t.treeContext = c, tt(o), n;
		}
		function xn(e) {
			var t = e.blockedBoundary, n = e.blockedSegment;
			n !== null && (n.status = mc, kn(this, t, e.row, n));
		}
		function Sn(e, t, n, i, a, o, s, c) {
			for (var l = 0; l < n.length; l++) {
				var u = n[l];
				if (u.length === 4) Sn(e, t, u[2], u[3], a, o, s, c);
				else {
					var d = e;
					u = u[5];
					var f = a, p = o, m = s, h = c, g = Ht(d, null, /* @__PURE__ */ new Set(), null, null);
					g.parentFlushed = !0, g.rootSegmentID = u, g.status = uc, Zt(g, p, f, m, h), g.parentFlushed && d.clientRenderedBoundaries.push(g);
				}
			}
			if (n.length = 0, i !== null) {
				if (t === null) throw Error("We should not have any resumable nodes in the shell. This is a bug in React.");
				if (t.status !== uc && (t.status = uc, Zt(t, o, a, s, c), t.parentFlushed && e.clientRenderedBoundaries.push(t)), typeof i == "object") for (var _ in i) delete i[_];
			}
		}
		function Cn(e, t, n) {
			var i = e.blockedBoundary, a = e.blockedSegment;
			if (a !== null) {
				if (a.status === 6) return;
				a.status = mc;
			}
			var o = Z(e.componentStack), s = e.node;
			if (typeof s == "object" && s && qt(e, s._debugInfo), i === null) {
				if (t.status !== 13 && t.status !== _c) {
					if (i = e.replay, i === null) {
						t.trackedPostpones !== null && a !== null ? (i = t.trackedPostpones, Q(t, n, o, e.debugTask), gn(t, i, e, a), kn(t, null, e.row, a)) : (Q(t, n, o, e.debugTask), Qt(t, n, o, e.debugTask));
						return;
					}
					i.pendingTasks--, i.pendingTasks === 0 && 0 < i.nodes.length && (a = Q(t, n, o, null), Sn(t, null, i.nodes, i.slots, n, a, o, !0)), t.pendingRootTasks--, t.pendingRootTasks === 0 && Tn(t);
				}
			} else {
				if (s = t.trackedPostpones, i.status !== uc) {
					if (s !== null && a !== null) return Q(t, n, o, e.debugTask), gn(t, s, e, a), i.fallbackAbortableTasks.forEach(function(e) {
						return Cn(e, t, n);
					}), i.fallbackAbortableTasks.clear(), kn(t, i, e.row, a);
					i.status = uc, a = Q(t, n, o, e.debugTask), i.status = uc, Zt(i, a, n, o, !0), _n(t, i), i.parentFlushed && t.clientRenderedBoundaries.push(i);
				}
				i.pendingTasks--, o = i.row, o !== null && --o.pendingTasks === 0 && $t(t, o), i.fallbackAbortableTasks.forEach(function(e) {
					return Cn(e, t, n);
				}), i.fallbackAbortableTasks.clear();
			}
			e = e.row, e !== null && --e.pendingTasks === 0 && $t(t, e), t.allPendingTasks--, t.allPendingTasks === 0 && En(t);
		}
		function wn(e, t) {
			try {
				var n = e.renderState, i = n.onHeaders;
				if (i) {
					var a = n.headers;
					if (a) {
						n.headers = null;
						var o = a.preconnects;
						if (a.fontPreloads && (o && (o += ", "), o += a.fontPreloads), a.highImagePreloads && (o && (o += ", "), o += a.highImagePreloads), !t) {
							var s = n.styles.values(), c = s.next();
							b: for (; 0 < a.remainingCapacity && !c.done; c = s.next()) for (var l = c.value.sheets.values(), u = l.next(); 0 < a.remainingCapacity && !u.done; u = l.next()) {
								var d = u.value, f = d.props, p = f.href, m = d.props, h = Ue(m.href, "style", {
									crossOrigin: m.crossOrigin,
									integrity: m.integrity,
									nonce: m.nonce,
									type: m.type,
									fetchPriority: m.fetchPriority,
									referrerPolicy: m.referrerPolicy,
									media: m.media
								});
								if (0 <= (a.remainingCapacity -= h.length + 2)) n.resets.style[p] = pi, o && (o += ", "), o += h, n.resets.style[p] = typeof f.crossOrigin == "string" || typeof f.integrity == "string" ? [f.crossOrigin, f.integrity] : pi;
								else break b;
							}
						}
						i(o ? { Link: o } : {});
					}
				}
			} catch (t) {
				Q(e, t, {}, null);
			}
		}
		function Tn(e) {
			e.trackedPostpones === null && wn(e, !0), e.trackedPostpones === null && Nn(e), e.onShellError = ot, e = e.onShellReady, e();
		}
		function En(e) {
			wn(e, e.trackedPostpones === null ? !0 : e.completedRootSegment === null || e.completedRootSegment.status !== gc), Nn(e), e = e.onAllReady, e();
		}
		function Dn(e, t) {
			if (t.chunks.length === 0 && t.children.length === 1 && t.children[0].boundary === null && t.children[0].id === -1) {
				var n = t.children[0];
				n.id = t.id, n.parentFlushed = !0, n.status !== fc && n.status !== mc && n.status !== hc || Dn(e, n);
			} else e.completedSegments.push(t);
		}
		function On(e, t, n) {
			if (b !== null) {
				n = n.chunks;
				for (var i = 0, a = 0; a < n.length; a++) i += n[a].byteLength;
				t === null ? e.byteSize += i : t.byteSize += i;
			}
		}
		function kn(e, t, n, i) {
			if (n !== null && (--n.pendingTasks === 0 ? $t(e, n) : n.together && tn(e, n)), e.allPendingTasks--, t === null) {
				if (i !== null && i.parentFlushed) {
					if (e.completedRootSegment !== null) throw Error("There can only be one root segment. This is a bug in React.");
					e.completedRootSegment = i;
				}
				e.pendingRootTasks--, e.pendingRootTasks === 0 && Tn(e);
			} else if (t.pendingTasks--, t.status !== uc) if (t.pendingTasks === 0) {
				if (t.status === dc && (t.status = fc), i !== null && i.parentFlushed && (i.status === fc || i.status === mc) && Dn(t, i), t.parentFlushed && e.completedBoundaries.push(t), t.status === fc) n = t.row, n !== null && X(n.hoistables, t.contentState), Pt(e, t) || (t.fallbackAbortableTasks.forEach(xn, e), t.fallbackAbortableTasks.clear(), n !== null && --n.pendingTasks === 0 && $t(e, n)), e.pendingRootTasks === 0 && e.trackedPostpones === null && t.contentPreamble !== null && Nn(e);
				else if (t.status === gc && (t = t.row, t !== null)) {
					if (e.trackedPostpones !== null) {
						n = e.trackedPostpones;
						var a = t.next;
						if (a !== null && (i = a.boundaries, i !== null)) for (a.boundaries = null, a = 0; a < i.length; a++) {
							var o = i[a];
							hn(e, n, o), kn(e, o, null, null);
						}
					}
					--t.pendingTasks === 0 && $t(e, t);
				}
			} else i === null || !i.parentFlushed || i.status !== fc && i.status !== mc || (Dn(t, i), t.completedSegments.length === 1 && t.parentFlushed && e.partialBoundaries.push(t)), t = t.row, t !== null && t.together && tn(e, t);
			e.allPendingTasks === 0 && En(e);
		}
		function An(e) {
			if (e.status !== _c && e.status !== 13) {
				var t = $o, n = ti.H;
				ti.H = Rs;
				var i = ti.A;
				ti.A = Vs;
				var a = vc;
				vc = e;
				var o = ti.getCurrentStack;
				ti.getCurrentStack = Kt;
				var s = zs;
				zs = e.resumableState;
				try {
					var c = e.pingedTasks, l;
					for (l = 0; l < c.length; l++) {
						var u = e, d = c[l], f = d.blockedSegment;
						if (f === null) {
							var p = void 0, m = u;
							if (u = d, u.replay.pendingTasks !== 0) {
								tt(u.context), p = Bs, Bs = u;
								try {
									if (typeof u.replay.slots == "number" ? sn(m, u, u.replay.slots, u.node, u.childIndex) : fn(m, u), u.replay.pendingTasks === 1 && 0 < u.replay.nodes.length) throw Error("Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering.");
									u.replay.pendingTasks--, u.abortSet.delete(u), kn(m, u.blockedBoundary, u.row, null);
								} catch (e) {
									mt();
									var h = e === vs ? ct() : e;
									if (typeof h == "object" && h && typeof h.then == "function") {
										var g = u.ping;
										h.then(g, g), u.thenableState = e === vs ? pt() : null;
									} else {
										u.replay.pendingTasks--, u.abortSet.delete(u);
										var _ = Z(u.componentStack), v = void 0, y = m, b = u.blockedBoundary, x = m.status === 12 ? m.fatalError : h, S = _, C = u.replay.nodes, w = u.replay.slots;
										v = Q(y, x, S, u.debugTask), Sn(y, b, C, w, x, v, S, !1), m.pendingRootTasks--, m.pendingRootTasks === 0 && Tn(m), m.allPendingTasks--, m.allPendingTasks === 0 && En(m);
									}
								} finally {
									Bs = p;
								}
							}
						} else if (m = p = void 0, v = d, y = f, y.status === dc) {
							y.status = 6, tt(v.context), m = Bs, Bs = v;
							var T = y.children.length, E = y.chunks.length;
							try {
								fn(u, v), y.lastPushedText && y.textEmbedded && y.chunks.push(Ri), v.abortSet.delete(v), y.status = fc, On(u, v.blockedBoundary, y), kn(u, v.blockedBoundary, v.row, y);
							} catch (e) {
								mt(), y.children.length = T, y.chunks.length = E;
								var D = e === vs ? ct() : u.status === 12 ? u.fatalError : e;
								if (u.status === 12 && u.trackedPostpones !== null) {
									var O = u.trackedPostpones, k = Z(v.componentStack);
									v.abortSet.delete(v), Q(u, D, k, v.debugTask), gn(u, O, v, y), kn(u, v.blockedBoundary, v.row, y);
								} else if (typeof D == "object" && D && typeof D.then == "function") {
									y.status = dc, v.thenableState = e === vs ? pt() : null;
									var A = v.ping;
									D.then(A, A);
								} else {
									var j = Z(v.componentStack);
									v.abortSet.delete(v), y.status = hc;
									var M = v.blockedBoundary, N = v.row, P = v.debugTask;
									if (N !== null && --N.pendingTasks === 0 && $t(u, N), u.allPendingTasks--, p = Q(u, D, j, P), M === null) Qt(u, D, j, P);
									else if (M.pendingTasks--, M.status !== uc) {
										M.status = uc, Zt(M, p, D, j, !1), _n(u, M);
										var F = M.row;
										F !== null && --F.pendingTasks === 0 && $t(u, F), M.parentFlushed && u.clientRenderedBoundaries.push(M), u.pendingRootTasks === 0 && u.trackedPostpones === null && M.contentPreamble !== null && Nn(u);
									}
									u.allPendingTasks === 0 && En(u);
								}
							} finally {
								Bs = m;
							}
						}
					}
					c.splice(0, l), e.destination !== null && zn(e, e.destination);
				} catch (t) {
					c = {}, Q(e, t, c, null), Qt(e, t, c, null);
				} finally {
					zs = s, ti.H = n, ti.A = i, ti.getCurrentStack = o, n === Rs && tt(t), vc = a;
				}
			}
		}
		function jn(e, t, n) {
			t.preambleChildren.length && n.push(t.preambleChildren);
			for (var i = !1, a = 0; a < t.children.length; a++) i = Mn(e, t.children[a], n) || i;
			return i;
		}
		function Mn(e, t, n) {
			var i = t.boundary;
			if (i === null) return jn(e, t, n);
			var a = i.contentPreamble, o = i.fallbackPreamble;
			if (a === null || o === null) return !1;
			switch (i.status) {
				case fc:
					if (Ce(e.renderState, a), e.byteSize += i.byteSize, t = i.completedSegments[0], !t) throw Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
					return jn(e, t, n);
				case gc: if (e.trackedPostpones !== null) return !0;
				case uc: if (t.status === fc) return Ce(e.renderState, o), jn(e, t, n);
				default: return !0;
			}
		}
		function Nn(e) {
			if (e.completedRootSegment && e.completedPreambleSegments === null) {
				var t = [], n = e.byteSize, i = Mn(e, e.completedRootSegment, t), a = e.renderState.preamble;
				!1 === i || a.headChunks && a.bodyChunks ? e.completedPreambleSegments = t : e.byteSize = n;
			}
		}
		function Pn(e, t, n, i) {
			switch (n.parentFlushed = !0, n.status) {
				case dc: n.id = e.nextSegmentId++;
				case gc: return i = n.id, n.lastPushedText = !1, n.textEmbedded = !1, e = e.renderState, m(t, Sa), m(t, e.placeholderPrefix), e = v(i.toString(16)), m(t, e), g(t, Ca);
				case fc:
					n.status = pc;
					var a = !0, o = n.chunks, s = 0;
					n = n.children;
					for (var c = 0; c < n.length; c++) {
						for (a = n[c]; s < a.index; s++) m(t, o[s]);
						a = Fn(e, t, a, i);
					}
					for (; s < o.length - 1; s++) m(t, o[s]);
					return s < o.length && (a = g(t, o[s])), a;
				case mc: return !0;
				default: throw Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
			}
		}
		function Fn(e, t, n, i) {
			var a = n.boundary;
			if (a === null) return Pn(e, t, n, i);
			if (a.parentFlushed = !0, a.status === uc) {
				var o = a.row;
				o !== null && --o.pendingTasks === 0 && $t(e, o), o = a.errorDigest;
				var s = a.errorMessage, c = a.errorStack;
				a = a.errorComponentStack, g(t, ka), m(t, ja), o && (m(t, Na), m(t, v(F(o))), m(t, Ma)), s && (m(t, Pa), m(t, v(F(s))), m(t, Ma)), c && (m(t, Fa), m(t, v(F(c))), m(t, Ma)), a && (m(t, Ia), m(t, v(F(a))), m(t, Ma)), g(t, La), Pn(e, t, n, i);
			} else if (a.status !== fc) a.status === dc && (a.rootSegmentID = e.nextSegmentId++), 0 < a.completedSegments.length && e.partialBoundaries.push(a), q(t, e.renderState, a.rootSegmentID), i && X(i, a.fallbackState), Pn(e, t, n, i);
			else if (!Dc && Pt(e, a) && (Ec + a.byteSize > e.progressiveChunkSize || Je(a.contentState))) a.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(a), q(t, e.renderState, a.rootSegmentID), Pn(e, t, n, i);
			else {
				if (Ec += a.byteSize, i && X(i, a.contentState), n = a.row, n !== null && Pt(e, a) && --n.pendingTasks === 0 && $t(e, n), g(t, Ea), n = a.completedSegments, n.length !== 1) throw Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
				Fn(e, t, n[0], i);
			}
			return g(t, Aa);
		}
		function In(e, t, n, i) {
			return Te(t, e.renderState, n.parentFormatContext, n.id), Fn(e, t, n, i), Ee(t, n.parentFormatContext);
		}
		function Ln(e, t, n) {
			Ec = n.byteSize;
			for (var i = n.completedSegments, a = 0; a < i.length; a++) Rn(e, t, n, i[a]);
			i.length = 0, i = n.row, i !== null && Pt(e, n) && --i.pendingTasks === 0 && $t(e, i), je(t, n.contentState, e.renderState), i = e.resumableState, e = e.renderState, a = n.rootSegmentID, n = n.contentState;
			var o = e.stylesToHoist;
			return e.stylesToHoist = !1, m(t, e.startInlineScript), m(t, Yi), o ? ((i.instructions & ci) === ai && (i.instructions |= ci, m(t, vo)), (i.instructions & si) === ai && (i.instructions |= si, m(t, lo)), (i.instructions & li) === ai ? (i.instructions |= li, m(t, fo)) : m(t, po)) : ((i.instructions & si) === ai && (i.instructions |= si, m(t, lo)), m(t, uo)), i = v(a.toString(16)), m(t, e.boundaryPrefix), m(t, i), m(t, mo), m(t, e.segmentPrefix), m(t, i), o ? (m(t, ho), Re(t, n)) : m(t, go), n = g(t, _o), we(t, e) && n;
		}
		function Rn(e, t, n, i) {
			if (i.status === pc) return !0;
			var a = n.contentState, o = i.id;
			if (o === -1) {
				if ((i.id = n.rootSegmentID) === -1) throw Error("A root segment ID must have been assigned by now. This is a bug in React.");
				return In(e, t, i, a);
			}
			return o === n.rootSegmentID ? In(e, t, i, a) : (In(e, t, i, a), n = e.resumableState, e = e.renderState, m(t, e.startInlineScript), m(t, Yi), (n.instructions & oi) === ai ? (n.instructions |= oi, m(t, ao)) : m(t, oo), m(t, e.segmentPrefix), o = v(o.toString(16)), m(t, o), m(t, so), m(t, e.placeholderPrefix), m(t, o), t = g(t, co), t);
		}
		function zn(e, t) {
			xr = new Uint8Array(2048), Sr = 0;
			try {
				if (!(0 < e.pendingRootTasks)) {
					var n, i = e.completedRootSegment;
					if (i !== null) {
						if (i.status === gc) return;
						var a = e.completedPreambleSegments;
						if (a === null) return;
						Ec = e.byteSize;
						var o = e.resumableState, s = e.renderState, c = s.preamble, l = c.htmlChunks, u = c.headChunks, d;
						if (l) {
							for (d = 0; d < l.length; d++) m(t, l[d]);
							if (u) for (d = 0; d < u.length; d++) m(t, u[d]);
							else m(t, be("head")), m(t, Yi);
						} else if (u) for (d = 0; d < u.length; d++) m(t, u[d]);
						var f = s.charsetChunks;
						for (d = 0; d < f.length; d++) m(t, f[d]);
						f.length = 0, s.preconnects.forEach(Me, t), s.preconnects.clear();
						var p = s.viewportChunks;
						for (d = 0; d < p.length; d++) m(t, p[d]);
						p.length = 0, s.fontPreloads.forEach(Me, t), s.fontPreloads.clear(), s.highImagePreloads.forEach(Me, t), s.highImagePreloads.clear(), mi = s, s.styles.forEach(Pe, t), mi = null;
						var h = s.importMapChunks;
						for (d = 0; d < h.length; d++) m(t, h[d]);
						h.length = 0, s.bootstrapScripts.forEach(Me, t), s.scripts.forEach(Me, t), s.scripts.clear(), s.bulkPreloads.forEach(Me, t), s.bulkPreloads.clear(), l || u || (o.instructions |= ui);
						var y = s.hoistableChunks;
						for (d = 0; d < y.length; d++) m(t, y[d]);
						for (o = y.length = 0; o < a.length; o++) {
							var b = a[o];
							for (s = 0; s < b.length; s++) Fn(e, t, b[s], null);
						}
						var x = e.renderState.preamble, S = x.headChunks;
						(x.htmlChunks || S) && m(t, Se("head"));
						var C = x.bodyChunks;
						if (C) for (a = 0; a < C.length; a++) m(t, C[a]);
						Fn(e, t, i, null), e.completedRootSegment = null;
						var w = e.renderState;
						if (e.allPendingTasks !== 0 || e.clientRenderedBoundaries.length !== 0 || e.completedBoundaries.length !== 0 || e.trackedPostpones !== null && (e.trackedPostpones.rootNodes.length !== 0 || e.trackedPostpones.rootSlots !== null)) {
							var T = e.resumableState;
							if ((T.instructions & di) === ai) {
								if (T.instructions |= di, m(t, w.startInlineScript), (T.instructions & ui) === ai) {
									T.instructions |= ui;
									var E = "_" + T.idPrefix + "R_";
									m(t, Ro), m(t, v(F(E))), m(t, Gi);
								}
								m(t, Yi), m(t, xa), g(t, gi);
							}
						}
						we(t, w);
					}
					var D = e.renderState;
					i = 0;
					var O = D.viewportChunks;
					for (i = 0; i < O.length; i++) m(t, O[i]);
					O.length = 0, D.preconnects.forEach(Me, t), D.preconnects.clear(), D.fontPreloads.forEach(Me, t), D.fontPreloads.clear(), D.highImagePreloads.forEach(Me, t), D.highImagePreloads.clear(), D.styles.forEach(Ie, t), D.scripts.forEach(Me, t), D.scripts.clear(), D.bulkPreloads.forEach(Me, t), D.bulkPreloads.clear();
					var k = D.hoistableChunks;
					for (i = 0; i < k.length; i++) m(t, k[i]);
					k.length = 0;
					var A = e.clientRenderedBoundaries;
					for (n = 0; n < A.length; n++) {
						var j = A[n];
						D = t;
						var M = e.resumableState, N = e.renderState, P = j.rootSegmentID, I = j.errorDigest, L = j.errorMessage, R = j.errorStack, ee = j.errorComponentStack;
						m(D, N.startInlineScript), m(D, Yi), (M.instructions & ci) === ai ? (M.instructions |= ci, m(D, yo)) : m(D, bo), m(D, N.boundaryPrefix), m(D, v(P.toString(16))), m(D, xo), (I || L || R || ee) && (m(D, So), m(D, v(De(I || "")))), (L || R || ee) && (m(D, So), m(D, v(De(L || "")))), (R || ee) && (m(D, So), m(D, v(De(R || "")))), ee && (m(D, So), m(D, v(De(ee))));
						var z = g(D, Co);
						if (!z) {
							e.destination = null, n++, A.splice(0, n);
							return;
						}
					}
					A.splice(0, n);
					var B = e.completedBoundaries;
					for (n = 0; n < B.length; n++) if (!Ln(e, t, B[n])) {
						e.destination = null, n++, B.splice(0, n);
						return;
					}
					B.splice(0, n), _(t), xr = new Uint8Array(2048), Sr = 0, Dc = !0;
					var V = e.partialBoundaries;
					for (n = 0; n < V.length; n++) {
						a: {
							A = e, j = t;
							var te = V[n];
							Ec = te.byteSize;
							var H = te.completedSegments;
							for (z = 0; z < H.length; z++) if (!Rn(A, j, te, H[z])) {
								z++, H.splice(0, z);
								var U = !1;
								break a;
							}
							H.splice(0, z);
							var ne = te.row;
							ne !== null && ne.together && te.pendingTasks === 1 && (ne.pendingTasks === 1 ? en(A, ne, ne.hoistables) : ne.pendingTasks--), U = je(j, te.contentState, A.renderState);
						}
						if (!U) {
							e.destination = null, n++, V.splice(0, n);
							return;
						}
					}
					V.splice(0, n), Dc = !1;
					var W = e.completedBoundaries;
					for (n = 0; n < W.length; n++) if (!Ln(e, t, W[n])) {
						e.destination = null, n++, W.splice(0, n);
						return;
					}
					W.splice(0, n);
				}
			} finally {
				Dc = !1, e.allPendingTasks === 0 && e.clientRenderedBoundaries.length === 0 && e.completedBoundaries.length === 0 ? (e.flushScheduled = !1, n = e.resumableState, n.hasBody && m(t, Se("body")), n.hasHtml && m(t, Se("html")), _(t), e.abortableTasks.size !== 0 && console.error("There was still abortable task at the root when we closed. This is a bug in React."), e.status = _c, t.close(), e.destination = null) : _(t);
			}
		}
		function Bn(e) {
			e.flushScheduled = e.destination !== null, br(function() {
				return An(e);
			}), d(function() {
				e.status === 10 && (e.status = 11), e.trackedPostpones === null && wn(e, e.pendingRootTasks === 0);
			});
		}
		function Vn(e) {
			!1 === e.flushScheduled && e.pingedTasks.length === 0 && e.destination !== null && (e.flushScheduled = !0, d(function() {
				var t = e.destination;
				t ? zn(e, t) : e.flushScheduled = !1;
			}));
		}
		function Hn(e, t) {
			if (e.status === 13) e.status = _c, x(t, e.fatalError);
			else if (e.status !== _c && e.destination === null) {
				e.destination = t;
				try {
					zn(e, t);
				} catch (n) {
					t = {}, Q(e, n, t, null), Qt(e, n, t, null);
				}
			}
		}
		function Un(e, t) {
			(e.status === 11 || e.status === 10) && (e.status = 12);
			try {
				var n = e.abortableTasks;
				if (0 < n.size) {
					var i = t === void 0 ? Error("The render was aborted by the server without a reason.") : typeof t == "object" && t && typeof t.then == "function" ? Error("The render was aborted by the server with a promise.") : t;
					e.fatalError = i, n.forEach(function(t) {
						var n = Bs, a = ti.getCurrentStack;
						Bs = t, ti.getCurrentStack = Kt;
						try {
							Cn(t, e, i);
						} finally {
							Bs = n, ti.getCurrentStack = a;
						}
					}), n.clear();
				}
				e.destination !== null && zn(e, e.destination);
			} catch (n) {
				t = {}, Q(e, n, t, null), Qt(e, n, t, null);
			}
		}
		function Wn(e, t, n) {
			if (t === null) n.rootNodes.push(e);
			else {
				var i = n.workingMap, a = i.get(t);
				a === void 0 && (a = [
					t[1],
					t[2],
					[],
					null
				], i.set(t, a), Wn(a, t[0], n)), a[2].push(e);
			}
		}
		function Gn(e) {
			var t = e.trackedPostpones;
			if (t === null || t.rootNodes.length === 0 && t.rootSlots === null) return e.trackedPostpones = null;
			if (e.completedRootSegment === null || e.completedRootSegment.status !== gc && e.completedPreambleSegments !== null) {
				var n = e.nextSegmentId, i = t.rootSlots, a = e.resumableState;
				a.bootstrapScriptContent = void 0, a.bootstrapScripts = void 0, a.bootstrapModules = void 0;
			} else {
				n = 0, i = -1, a = e.resumableState;
				var o = e.renderState;
				a.nextFormID = 0, a.hasBody = !1, a.hasHtml = !1, a.unknownResources = { font: o.resets.font }, a.dnsResources = o.resets.dns, a.connectResources = o.resets.connect, a.imageResources = o.resets.image, a.styleResources = o.resets.style, a.scriptResources = {}, a.moduleUnknownResources = {}, a.moduleScriptResources = {}, a.instructions = ai;
			}
			return {
				nextSegmentId: n,
				rootFormatContext: e.rootFormatContext,
				progressiveChunkSize: e.progressiveChunkSize,
				resumableState: e.resumableState,
				replayNodes: t.rootNodes,
				replaySlots: i
			};
		}
		function Kn() {
			var e = qn.version;
			if (e !== "19.2.0") throw Error("Incompatible React versions: The \"react\" and \"react-dom\" packages must have the exact same version. Instead got:\n  - react:      " + (e + "\n  - react-dom:  19.2.0\nLearn more: https://react.dev/warnings/version-mismatch"));
		}
		var qn = require_react(), Jn = require_react_dom(), Yn = Symbol.for("react.transitional.element"), Xn = Symbol.for("react.portal"), Zn = Symbol.for("react.fragment"), Qn = Symbol.for("react.strict_mode"), $n = Symbol.for("react.profiler"), er = Symbol.for("react.consumer"), tr = Symbol.for("react.context"), nr = Symbol.for("react.forward_ref"), rr = Symbol.for("react.suspense"), ir = Symbol.for("react.suspense_list"), ar = Symbol.for("react.memo"), or = Symbol.for("react.lazy"), sr = Symbol.for("react.scope"), cr = Symbol.for("react.activity"), lr = Symbol.for("react.legacy_hidden"), ur = Symbol.for("react.memo_cache_sentinel"), dr = Symbol.for("react.view_transition"), fr = Symbol.iterator, pr = Array.isArray, mr = /* @__PURE__ */ new WeakMap(), hr = /* @__PURE__ */ new WeakMap(), gr = Symbol.for("react.client.reference"), _r = new MessageChannel(), vr = [];
		_r.port1.onmessage = function() {
			var e = vr.shift();
			e && e();
		};
		var yr = Promise, br = typeof queueMicrotask == "function" ? queueMicrotask : function(e) {
			yr.resolve(null).then(e).catch(p);
		}, xr = null, Sr = 0, Cr = new TextEncoder(), wr = Object.assign, Tr = Object.prototype.hasOwnProperty, Er = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Dr = {}, Or = {}, kr = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" ")), Ar = new Map([
			["acceptCharset", "accept-charset"],
			["htmlFor", "for"],
			["httpEquiv", "http-equiv"],
			["crossOrigin", "crossorigin"],
			["accentHeight", "accent-height"],
			["alignmentBaseline", "alignment-baseline"],
			["arabicForm", "arabic-form"],
			["baselineShift", "baseline-shift"],
			["capHeight", "cap-height"],
			["clipPath", "clip-path"],
			["clipRule", "clip-rule"],
			["colorInterpolation", "color-interpolation"],
			["colorInterpolationFilters", "color-interpolation-filters"],
			["colorProfile", "color-profile"],
			["colorRendering", "color-rendering"],
			["dominantBaseline", "dominant-baseline"],
			["enableBackground", "enable-background"],
			["fillOpacity", "fill-opacity"],
			["fillRule", "fill-rule"],
			["floodColor", "flood-color"],
			["floodOpacity", "flood-opacity"],
			["fontFamily", "font-family"],
			["fontSize", "font-size"],
			["fontSizeAdjust", "font-size-adjust"],
			["fontStretch", "font-stretch"],
			["fontStyle", "font-style"],
			["fontVariant", "font-variant"],
			["fontWeight", "font-weight"],
			["glyphName", "glyph-name"],
			["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
			["glyphOrientationVertical", "glyph-orientation-vertical"],
			["horizAdvX", "horiz-adv-x"],
			["horizOriginX", "horiz-origin-x"],
			["imageRendering", "image-rendering"],
			["letterSpacing", "letter-spacing"],
			["lightingColor", "lighting-color"],
			["markerEnd", "marker-end"],
			["markerMid", "marker-mid"],
			["markerStart", "marker-start"],
			["overlinePosition", "overline-position"],
			["overlineThickness", "overline-thickness"],
			["paintOrder", "paint-order"],
			["panose-1", "panose-1"],
			["pointerEvents", "pointer-events"],
			["renderingIntent", "rendering-intent"],
			["shapeRendering", "shape-rendering"],
			["stopColor", "stop-color"],
			["stopOpacity", "stop-opacity"],
			["strikethroughPosition", "strikethrough-position"],
			["strikethroughThickness", "strikethrough-thickness"],
			["strokeDasharray", "stroke-dasharray"],
			["strokeDashoffset", "stroke-dashoffset"],
			["strokeLinecap", "stroke-linecap"],
			["strokeLinejoin", "stroke-linejoin"],
			["strokeMiterlimit", "stroke-miterlimit"],
			["strokeOpacity", "stroke-opacity"],
			["strokeWidth", "stroke-width"],
			["textAnchor", "text-anchor"],
			["textDecoration", "text-decoration"],
			["textRendering", "text-rendering"],
			["transformOrigin", "transform-origin"],
			["underlinePosition", "underline-position"],
			["underlineThickness", "underline-thickness"],
			["unicodeBidi", "unicode-bidi"],
			["unicodeRange", "unicode-range"],
			["unitsPerEm", "units-per-em"],
			["vAlphabetic", "v-alphabetic"],
			["vHanging", "v-hanging"],
			["vIdeographic", "v-ideographic"],
			["vMathematical", "v-mathematical"],
			["vectorEffect", "vector-effect"],
			["vertAdvY", "vert-adv-y"],
			["vertOriginX", "vert-origin-x"],
			["vertOriginY", "vert-origin-y"],
			["wordSpacing", "word-spacing"],
			["writingMode", "writing-mode"],
			["xmlnsXlink", "xmlns:xlink"],
			["xHeight", "x-height"]
		]), jr = {
			button: !0,
			checkbox: !0,
			image: !0,
			hidden: !0,
			radio: !0,
			reset: !0,
			submit: !0
		}, Mr = {
			"aria-current": 0,
			"aria-description": 0,
			"aria-details": 0,
			"aria-disabled": 0,
			"aria-hidden": 0,
			"aria-invalid": 0,
			"aria-keyshortcuts": 0,
			"aria-label": 0,
			"aria-roledescription": 0,
			"aria-autocomplete": 0,
			"aria-checked": 0,
			"aria-expanded": 0,
			"aria-haspopup": 0,
			"aria-level": 0,
			"aria-modal": 0,
			"aria-multiline": 0,
			"aria-multiselectable": 0,
			"aria-orientation": 0,
			"aria-placeholder": 0,
			"aria-pressed": 0,
			"aria-readonly": 0,
			"aria-required": 0,
			"aria-selected": 0,
			"aria-sort": 0,
			"aria-valuemax": 0,
			"aria-valuemin": 0,
			"aria-valuenow": 0,
			"aria-valuetext": 0,
			"aria-atomic": 0,
			"aria-busy": 0,
			"aria-live": 0,
			"aria-relevant": 0,
			"aria-dropeffect": 0,
			"aria-grabbed": 0,
			"aria-activedescendant": 0,
			"aria-colcount": 0,
			"aria-colindex": 0,
			"aria-colspan": 0,
			"aria-controls": 0,
			"aria-describedby": 0,
			"aria-errormessage": 0,
			"aria-flowto": 0,
			"aria-labelledby": 0,
			"aria-owns": 0,
			"aria-posinset": 0,
			"aria-rowcount": 0,
			"aria-rowindex": 0,
			"aria-rowspan": 0,
			"aria-setsize": 0,
			"aria-braillelabel": 0,
			"aria-brailleroledescription": 0,
			"aria-colindextext": 0,
			"aria-rowindextext": 0
		}, Nr = {}, Pr = RegExp("^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Fr = RegExp("^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Ir = !1, Lr = {
			accept: "accept",
			acceptcharset: "acceptCharset",
			"accept-charset": "acceptCharset",
			accesskey: "accessKey",
			action: "action",
			allowfullscreen: "allowFullScreen",
			alt: "alt",
			as: "as",
			async: "async",
			autocapitalize: "autoCapitalize",
			autocomplete: "autoComplete",
			autocorrect: "autoCorrect",
			autofocus: "autoFocus",
			autoplay: "autoPlay",
			autosave: "autoSave",
			capture: "capture",
			cellpadding: "cellPadding",
			cellspacing: "cellSpacing",
			challenge: "challenge",
			charset: "charSet",
			checked: "checked",
			children: "children",
			cite: "cite",
			class: "className",
			classid: "classID",
			classname: "className",
			cols: "cols",
			colspan: "colSpan",
			content: "content",
			contenteditable: "contentEditable",
			contextmenu: "contextMenu",
			controls: "controls",
			controlslist: "controlsList",
			coords: "coords",
			crossorigin: "crossOrigin",
			dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
			data: "data",
			datetime: "dateTime",
			default: "default",
			defaultchecked: "defaultChecked",
			defaultvalue: "defaultValue",
			defer: "defer",
			dir: "dir",
			disabled: "disabled",
			disablepictureinpicture: "disablePictureInPicture",
			disableremoteplayback: "disableRemotePlayback",
			download: "download",
			draggable: "draggable",
			enctype: "encType",
			enterkeyhint: "enterKeyHint",
			fetchpriority: "fetchPriority",
			for: "htmlFor",
			form: "form",
			formmethod: "formMethod",
			formaction: "formAction",
			formenctype: "formEncType",
			formnovalidate: "formNoValidate",
			formtarget: "formTarget",
			frameborder: "frameBorder",
			headers: "headers",
			height: "height",
			hidden: "hidden",
			high: "high",
			href: "href",
			hreflang: "hrefLang",
			htmlfor: "htmlFor",
			httpequiv: "httpEquiv",
			"http-equiv": "httpEquiv",
			icon: "icon",
			id: "id",
			imagesizes: "imageSizes",
			imagesrcset: "imageSrcSet",
			inert: "inert",
			innerhtml: "innerHTML",
			inputmode: "inputMode",
			integrity: "integrity",
			is: "is",
			itemid: "itemID",
			itemprop: "itemProp",
			itemref: "itemRef",
			itemscope: "itemScope",
			itemtype: "itemType",
			keyparams: "keyParams",
			keytype: "keyType",
			kind: "kind",
			label: "label",
			lang: "lang",
			list: "list",
			loop: "loop",
			low: "low",
			manifest: "manifest",
			marginwidth: "marginWidth",
			marginheight: "marginHeight",
			max: "max",
			maxlength: "maxLength",
			media: "media",
			mediagroup: "mediaGroup",
			method: "method",
			min: "min",
			minlength: "minLength",
			multiple: "multiple",
			muted: "muted",
			name: "name",
			nomodule: "noModule",
			nonce: "nonce",
			novalidate: "noValidate",
			open: "open",
			optimum: "optimum",
			pattern: "pattern",
			placeholder: "placeholder",
			playsinline: "playsInline",
			poster: "poster",
			preload: "preload",
			profile: "profile",
			radiogroup: "radioGroup",
			readonly: "readOnly",
			referrerpolicy: "referrerPolicy",
			rel: "rel",
			required: "required",
			reversed: "reversed",
			role: "role",
			rows: "rows",
			rowspan: "rowSpan",
			sandbox: "sandbox",
			scope: "scope",
			scoped: "scoped",
			scrolling: "scrolling",
			seamless: "seamless",
			selected: "selected",
			shape: "shape",
			size: "size",
			sizes: "sizes",
			span: "span",
			spellcheck: "spellCheck",
			src: "src",
			srcdoc: "srcDoc",
			srclang: "srcLang",
			srcset: "srcSet",
			start: "start",
			step: "step",
			style: "style",
			summary: "summary",
			tabindex: "tabIndex",
			target: "target",
			title: "title",
			type: "type",
			usemap: "useMap",
			value: "value",
			width: "width",
			wmode: "wmode",
			wrap: "wrap",
			about: "about",
			accentheight: "accentHeight",
			"accent-height": "accentHeight",
			accumulate: "accumulate",
			additive: "additive",
			alignmentbaseline: "alignmentBaseline",
			"alignment-baseline": "alignmentBaseline",
			allowreorder: "allowReorder",
			alphabetic: "alphabetic",
			amplitude: "amplitude",
			arabicform: "arabicForm",
			"arabic-form": "arabicForm",
			ascent: "ascent",
			attributename: "attributeName",
			attributetype: "attributeType",
			autoreverse: "autoReverse",
			azimuth: "azimuth",
			basefrequency: "baseFrequency",
			baselineshift: "baselineShift",
			"baseline-shift": "baselineShift",
			baseprofile: "baseProfile",
			bbox: "bbox",
			begin: "begin",
			bias: "bias",
			by: "by",
			calcmode: "calcMode",
			capheight: "capHeight",
			"cap-height": "capHeight",
			clip: "clip",
			clippath: "clipPath",
			"clip-path": "clipPath",
			clippathunits: "clipPathUnits",
			cliprule: "clipRule",
			"clip-rule": "clipRule",
			color: "color",
			colorinterpolation: "colorInterpolation",
			"color-interpolation": "colorInterpolation",
			colorinterpolationfilters: "colorInterpolationFilters",
			"color-interpolation-filters": "colorInterpolationFilters",
			colorprofile: "colorProfile",
			"color-profile": "colorProfile",
			colorrendering: "colorRendering",
			"color-rendering": "colorRendering",
			contentscripttype: "contentScriptType",
			contentstyletype: "contentStyleType",
			cursor: "cursor",
			cx: "cx",
			cy: "cy",
			d: "d",
			datatype: "datatype",
			decelerate: "decelerate",
			descent: "descent",
			diffuseconstant: "diffuseConstant",
			direction: "direction",
			display: "display",
			divisor: "divisor",
			dominantbaseline: "dominantBaseline",
			"dominant-baseline": "dominantBaseline",
			dur: "dur",
			dx: "dx",
			dy: "dy",
			edgemode: "edgeMode",
			elevation: "elevation",
			enablebackground: "enableBackground",
			"enable-background": "enableBackground",
			end: "end",
			exponent: "exponent",
			externalresourcesrequired: "externalResourcesRequired",
			fill: "fill",
			fillopacity: "fillOpacity",
			"fill-opacity": "fillOpacity",
			fillrule: "fillRule",
			"fill-rule": "fillRule",
			filter: "filter",
			filterres: "filterRes",
			filterunits: "filterUnits",
			floodopacity: "floodOpacity",
			"flood-opacity": "floodOpacity",
			floodcolor: "floodColor",
			"flood-color": "floodColor",
			focusable: "focusable",
			fontfamily: "fontFamily",
			"font-family": "fontFamily",
			fontsize: "fontSize",
			"font-size": "fontSize",
			fontsizeadjust: "fontSizeAdjust",
			"font-size-adjust": "fontSizeAdjust",
			fontstretch: "fontStretch",
			"font-stretch": "fontStretch",
			fontstyle: "fontStyle",
			"font-style": "fontStyle",
			fontvariant: "fontVariant",
			"font-variant": "fontVariant",
			fontweight: "fontWeight",
			"font-weight": "fontWeight",
			format: "format",
			from: "from",
			fx: "fx",
			fy: "fy",
			g1: "g1",
			g2: "g2",
			glyphname: "glyphName",
			"glyph-name": "glyphName",
			glyphorientationhorizontal: "glyphOrientationHorizontal",
			"glyph-orientation-horizontal": "glyphOrientationHorizontal",
			glyphorientationvertical: "glyphOrientationVertical",
			"glyph-orientation-vertical": "glyphOrientationVertical",
			glyphref: "glyphRef",
			gradienttransform: "gradientTransform",
			gradientunits: "gradientUnits",
			hanging: "hanging",
			horizadvx: "horizAdvX",
			"horiz-adv-x": "horizAdvX",
			horizoriginx: "horizOriginX",
			"horiz-origin-x": "horizOriginX",
			ideographic: "ideographic",
			imagerendering: "imageRendering",
			"image-rendering": "imageRendering",
			in2: "in2",
			in: "in",
			inlist: "inlist",
			intercept: "intercept",
			k1: "k1",
			k2: "k2",
			k3: "k3",
			k4: "k4",
			k: "k",
			kernelmatrix: "kernelMatrix",
			kernelunitlength: "kernelUnitLength",
			kerning: "kerning",
			keypoints: "keyPoints",
			keysplines: "keySplines",
			keytimes: "keyTimes",
			lengthadjust: "lengthAdjust",
			letterspacing: "letterSpacing",
			"letter-spacing": "letterSpacing",
			lightingcolor: "lightingColor",
			"lighting-color": "lightingColor",
			limitingconeangle: "limitingConeAngle",
			local: "local",
			markerend: "markerEnd",
			"marker-end": "markerEnd",
			markerheight: "markerHeight",
			markermid: "markerMid",
			"marker-mid": "markerMid",
			markerstart: "markerStart",
			"marker-start": "markerStart",
			markerunits: "markerUnits",
			markerwidth: "markerWidth",
			mask: "mask",
			maskcontentunits: "maskContentUnits",
			maskunits: "maskUnits",
			mathematical: "mathematical",
			mode: "mode",
			numoctaves: "numOctaves",
			offset: "offset",
			opacity: "opacity",
			operator: "operator",
			order: "order",
			orient: "orient",
			orientation: "orientation",
			origin: "origin",
			overflow: "overflow",
			overlineposition: "overlinePosition",
			"overline-position": "overlinePosition",
			overlinethickness: "overlineThickness",
			"overline-thickness": "overlineThickness",
			paintorder: "paintOrder",
			"paint-order": "paintOrder",
			panose1: "panose1",
			"panose-1": "panose1",
			pathlength: "pathLength",
			patterncontentunits: "patternContentUnits",
			patterntransform: "patternTransform",
			patternunits: "patternUnits",
			pointerevents: "pointerEvents",
			"pointer-events": "pointerEvents",
			points: "points",
			pointsatx: "pointsAtX",
			pointsaty: "pointsAtY",
			pointsatz: "pointsAtZ",
			popover: "popover",
			popovertarget: "popoverTarget",
			popovertargetaction: "popoverTargetAction",
			prefix: "prefix",
			preservealpha: "preserveAlpha",
			preserveaspectratio: "preserveAspectRatio",
			primitiveunits: "primitiveUnits",
			property: "property",
			r: "r",
			radius: "radius",
			refx: "refX",
			refy: "refY",
			renderingintent: "renderingIntent",
			"rendering-intent": "renderingIntent",
			repeatcount: "repeatCount",
			repeatdur: "repeatDur",
			requiredextensions: "requiredExtensions",
			requiredfeatures: "requiredFeatures",
			resource: "resource",
			restart: "restart",
			result: "result",
			results: "results",
			rotate: "rotate",
			rx: "rx",
			ry: "ry",
			scale: "scale",
			security: "security",
			seed: "seed",
			shaperendering: "shapeRendering",
			"shape-rendering": "shapeRendering",
			slope: "slope",
			spacing: "spacing",
			specularconstant: "specularConstant",
			specularexponent: "specularExponent",
			speed: "speed",
			spreadmethod: "spreadMethod",
			startoffset: "startOffset",
			stddeviation: "stdDeviation",
			stemh: "stemh",
			stemv: "stemv",
			stitchtiles: "stitchTiles",
			stopcolor: "stopColor",
			"stop-color": "stopColor",
			stopopacity: "stopOpacity",
			"stop-opacity": "stopOpacity",
			strikethroughposition: "strikethroughPosition",
			"strikethrough-position": "strikethroughPosition",
			strikethroughthickness: "strikethroughThickness",
			"strikethrough-thickness": "strikethroughThickness",
			string: "string",
			stroke: "stroke",
			strokedasharray: "strokeDasharray",
			"stroke-dasharray": "strokeDasharray",
			strokedashoffset: "strokeDashoffset",
			"stroke-dashoffset": "strokeDashoffset",
			strokelinecap: "strokeLinecap",
			"stroke-linecap": "strokeLinecap",
			strokelinejoin: "strokeLinejoin",
			"stroke-linejoin": "strokeLinejoin",
			strokemiterlimit: "strokeMiterlimit",
			"stroke-miterlimit": "strokeMiterlimit",
			strokewidth: "strokeWidth",
			"stroke-width": "strokeWidth",
			strokeopacity: "strokeOpacity",
			"stroke-opacity": "strokeOpacity",
			suppresscontenteditablewarning: "suppressContentEditableWarning",
			suppresshydrationwarning: "suppressHydrationWarning",
			surfacescale: "surfaceScale",
			systemlanguage: "systemLanguage",
			tablevalues: "tableValues",
			targetx: "targetX",
			targety: "targetY",
			textanchor: "textAnchor",
			"text-anchor": "textAnchor",
			textdecoration: "textDecoration",
			"text-decoration": "textDecoration",
			textlength: "textLength",
			textrendering: "textRendering",
			"text-rendering": "textRendering",
			to: "to",
			transform: "transform",
			transformorigin: "transformOrigin",
			"transform-origin": "transformOrigin",
			typeof: "typeof",
			u1: "u1",
			u2: "u2",
			underlineposition: "underlinePosition",
			"underline-position": "underlinePosition",
			underlinethickness: "underlineThickness",
			"underline-thickness": "underlineThickness",
			unicode: "unicode",
			unicodebidi: "unicodeBidi",
			"unicode-bidi": "unicodeBidi",
			unicoderange: "unicodeRange",
			"unicode-range": "unicodeRange",
			unitsperem: "unitsPerEm",
			"units-per-em": "unitsPerEm",
			unselectable: "unselectable",
			valphabetic: "vAlphabetic",
			"v-alphabetic": "vAlphabetic",
			values: "values",
			vectoreffect: "vectorEffect",
			"vector-effect": "vectorEffect",
			version: "version",
			vertadvy: "vertAdvY",
			"vert-adv-y": "vertAdvY",
			vertoriginx: "vertOriginX",
			"vert-origin-x": "vertOriginX",
			vertoriginy: "vertOriginY",
			"vert-origin-y": "vertOriginY",
			vhanging: "vHanging",
			"v-hanging": "vHanging",
			videographic: "vIdeographic",
			"v-ideographic": "vIdeographic",
			viewbox: "viewBox",
			viewtarget: "viewTarget",
			visibility: "visibility",
			vmathematical: "vMathematical",
			"v-mathematical": "vMathematical",
			vocab: "vocab",
			widths: "widths",
			wordspacing: "wordSpacing",
			"word-spacing": "wordSpacing",
			writingmode: "writingMode",
			"writing-mode": "writingMode",
			x1: "x1",
			x2: "x2",
			x: "x",
			xchannelselector: "xChannelSelector",
			xheight: "xHeight",
			"x-height": "xHeight",
			xlinkactuate: "xlinkActuate",
			"xlink:actuate": "xlinkActuate",
			xlinkarcrole: "xlinkArcrole",
			"xlink:arcrole": "xlinkArcrole",
			xlinkhref: "xlinkHref",
			"xlink:href": "xlinkHref",
			xlinkrole: "xlinkRole",
			"xlink:role": "xlinkRole",
			xlinkshow: "xlinkShow",
			"xlink:show": "xlinkShow",
			xlinktitle: "xlinkTitle",
			"xlink:title": "xlinkTitle",
			xlinktype: "xlinkType",
			"xlink:type": "xlinkType",
			xmlbase: "xmlBase",
			"xml:base": "xmlBase",
			xmllang: "xmlLang",
			"xml:lang": "xmlLang",
			xmlns: "xmlns",
			"xml:space": "xmlSpace",
			xmlnsxlink: "xmlnsXlink",
			"xmlns:xlink": "xmlnsXlink",
			xmlspace: "xmlSpace",
			y1: "y1",
			y2: "y2",
			y: "y",
			ychannelselector: "yChannelSelector",
			z: "z",
			zoomandpan: "zoomAndPan"
		}, Rr = {}, zr = /^on./, Br = /^on[^A-Z]/, Vr = RegExp("^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Hr = RegExp("^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Ur = /^(?:webkit|moz|o)[A-Z]/, Wr = /^-ms-/, Gr = /-(.)/g, Kr = /;\s*$/, qr = {}, Jr = {}, Yr = !1, Xr = !1, Zr = /["'&<>]/, Qr = /([A-Z])/g, $r = /^ms-/, ei = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i, ti = qn.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ni = Jn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ri = Object.freeze({
			pending: !1,
			data: null,
			method: null,
			action: null
		}), ii = ni.d;
		ni.d = {
			f: ii.f,
			r: ii.r,
			D: function(e) {
				var t = vc || null;
				if (t) {
					var n = t.resumableState, i = t.renderState;
					if (typeof e == "string" && e) {
						if (!n.dnsResources.hasOwnProperty(e)) {
							n.dnsResources[e] = fi, n = i.headers;
							var a, o;
							(o = n && 0 < n.remainingCapacity) && (o = (a = "<" + We(e) + ">; rel=dns-prefetch", 0 <= (n.remainingCapacity -= a.length + 2))), o ? (i.resets.dns[e] = fi, n.preconnects && (n.preconnects += ", "), n.preconnects += a) : (a = [], pe(a, {
								href: e,
								rel: "dns-prefetch"
							}), i.preconnects.add(a));
						}
						Vn(t);
					}
				} else ii.D(e);
			},
			C: function(e, t) {
				var n = vc || null;
				if (n) {
					var i = n.resumableState, a = n.renderState;
					if (typeof e == "string" && e) {
						var o = t === "use-credentials" ? "credentials" : typeof t == "string" ? "anonymous" : "default";
						if (!i.connectResources[o].hasOwnProperty(e)) {
							i.connectResources[o][e] = fi, i = a.headers;
							var s, c;
							if (c = i && 0 < i.remainingCapacity) {
								if (c = "<" + We(e) + ">; rel=preconnect", typeof t == "string") {
									var l = Ke(t, "crossOrigin");
									c += "; crossorigin=\"" + l + "\"";
								}
								c = (s = c, 0 <= (i.remainingCapacity -= s.length + 2));
							}
							c ? (a.resets.connect[o][e] = fi, i.preconnects && (i.preconnects += ", "), i.preconnects += s) : (o = [], pe(o, {
								rel: "preconnect",
								href: e,
								crossOrigin: t
							}), a.preconnects.add(o));
						}
						Vn(n);
					}
				} else ii.C(e, t);
			},
			L: function(e, t, n) {
				var i = vc || null;
				if (i) {
					var a = i.resumableState, o = i.renderState;
					if (t && e) {
						switch (t) {
							case "image":
								if (n) var s = n.imageSrcSet, c = n.imageSizes, l = n.fetchPriority;
								var u = s ? s + "\n" + (c || "") : e;
								if (a.imageResources.hasOwnProperty(u)) return;
								a.imageResources[u] = pi, a = o.headers;
								var d;
								a && 0 < a.remainingCapacity && typeof s != "string" && l === "high" && (d = Ue(e, t, n), 0 <= (a.remainingCapacity -= d.length + 2)) ? (o.resets.image[u] = pi, a.highImagePreloads && (a.highImagePreloads += ", "), a.highImagePreloads += d) : (a = [], pe(a, wr({
									rel: "preload",
									href: s ? void 0 : e,
									as: t
								}, n)), l === "high" ? o.highImagePreloads.add(a) : (o.bulkPreloads.add(a), o.preloads.images.set(u, a)));
								break;
							case "style":
								if (a.styleResources.hasOwnProperty(e)) return;
								s = [], pe(s, wr({
									rel: "preload",
									href: e,
									as: t
								}, n)), a.styleResources[e] = !n || typeof n.crossOrigin != "string" && typeof n.integrity != "string" ? pi : [n.crossOrigin, n.integrity], o.preloads.stylesheets.set(e, s), o.bulkPreloads.add(s);
								break;
							case "script":
								if (a.scriptResources.hasOwnProperty(e)) return;
								s = [], o.preloads.scripts.set(e, s), o.bulkPreloads.add(s), pe(s, wr({
									rel: "preload",
									href: e,
									as: t
								}, n)), a.scriptResources[e] = !n || typeof n.crossOrigin != "string" && typeof n.integrity != "string" ? pi : [n.crossOrigin, n.integrity];
								break;
							default:
								if (a.unknownResources.hasOwnProperty(t)) {
									if (s = a.unknownResources[t], s.hasOwnProperty(e)) return;
								} else s = {}, a.unknownResources[t] = s;
								if (s[e] = pi, (a = o.headers) && 0 < a.remainingCapacity && t === "font" && (u = Ue(e, t, n), 0 <= (a.remainingCapacity -= u.length + 2))) o.resets.font[e] = pi, a.fontPreloads && (a.fontPreloads += ", "), a.fontPreloads += u;
								else switch (a = [], e = wr({
									rel: "preload",
									href: e,
									as: t
								}, n), pe(a, e), t) {
									case "font":
										o.fontPreloads.add(a);
										break;
									default: o.bulkPreloads.add(a);
								}
						}
						Vn(i);
					}
				} else ii.L(e, t, n);
			},
			m: function(e, t) {
				var n = vc || null;
				if (n) {
					var i = n.resumableState, a = n.renderState;
					if (e) {
						var o = t && typeof t.as == "string" ? t.as : "script";
						switch (o) {
							case "script":
								if (i.moduleScriptResources.hasOwnProperty(e)) return;
								o = [], i.moduleScriptResources[e] = !t || typeof t.crossOrigin != "string" && typeof t.integrity != "string" ? pi : [t.crossOrigin, t.integrity], a.preloads.moduleScripts.set(e, o);
								break;
							default:
								if (i.moduleUnknownResources.hasOwnProperty(o)) {
									var s = i.unknownResources[o];
									if (s.hasOwnProperty(e)) return;
								} else s = {}, i.moduleUnknownResources[o] = s;
								o = [], s[e] = pi;
						}
						pe(o, wr({
							rel: "modulepreload",
							href: e
						}, t)), a.bulkPreloads.add(o), Vn(n);
					}
				} else ii.m(e, t);
			},
			X: function(e, t) {
				var n = vc || null;
				if (n) {
					var i = n.resumableState, a = n.renderState;
					if (e) {
						var o = i.scriptResources.hasOwnProperty(e) ? i.scriptResources[e] : void 0;
						o !== fi && (i.scriptResources[e] = fi, t = wr({
							src: e,
							async: !0
						}, t), o && (o.length === 2 && He(t, o), e = a.preloads.scripts.get(e)) && (e.length = 0), e = [], a.scripts.add(e), _e(e, t), Vn(n));
					}
				} else ii.X(e, t);
			},
			S: function(e, t, n) {
				var i = vc || null;
				if (i) {
					var a = i.resumableState, o = i.renderState;
					if (e) {
						t ||= "default";
						var s = o.styles.get(t), c = a.styleResources.hasOwnProperty(e) ? a.styleResources[e] : void 0;
						c !== fi && (a.styleResources[e] = fi, s || (s = {
							precedence: v(F(t)),
							rules: [],
							hrefs: [],
							sheets: /* @__PURE__ */ new Map()
						}, o.styles.set(t, s)), t = {
							state: Uo,
							props: wr({
								rel: "stylesheet",
								href: e,
								"data-precedence": t
							}, n)
						}, c && (c.length === 2 && He(t.props, c), (o = o.preloads.stylesheets.get(e)) && 0 < o.length ? o.length = 0 : t.state = Wo), s.sheets.set(e, t), Vn(i));
					}
				} else ii.S(e, t, n);
			},
			M: function(e, t) {
				var n = vc || null;
				if (n) {
					var i = n.resumableState, a = n.renderState;
					if (e) {
						var o = i.moduleScriptResources.hasOwnProperty(e) ? i.moduleScriptResources[e] : void 0;
						o !== fi && (i.moduleScriptResources[e] = fi, t = wr({
							src: e,
							type: "module",
							async: !0
						}, t), o && (o.length === 2 && He(t, o), e = a.preloads.moduleScripts.get(e)) && (e.length = 0), e = [], a.scripts.add(e), _e(e, t), Vn(n));
					}
				} else ii.M(e, t);
			}
		};
		var ai = 0, oi = 1, si = 2, ci = 4, li = 8, ui = 32, di = 64, fi = null, pi = [];
		Object.freeze(pi);
		var mi = null;
		y("\"></template>");
		var hi = y("<script"), gi = y("<\/script>"), _i = y("<script src=\""), vi = y("<script type=\"module\" src=\""), yi = y(" nonce=\""), bi = y(" integrity=\""), xi = y(" crossorigin=\""), Si = y(" async=\"\"><\/script>"), Ci = y("<style"), wi = /(<\/|<)(s)(cript)/gi, Ti = y("<script type=\"importmap\">"), Ei = y("<\/script>"), Di = {}, Oi = 0, ki = 1, Ai = 2, ji = 3, Mi = 4, Ni = 5, Pi = 6, Fi = 7, Ii = 8, Li = 9, Ri = y("<!-- -->"), zi = /* @__PURE__ */ new Map(), Bi = y(" style=\""), Vi = y(":"), Hi = y(";"), Ui = y(" "), Wi = y("=\""), Gi = y("\""), Ki = y("=\"\""), qi = y(F("javascript:throw new Error('React form unexpectedly submitted.')")), Ji = y("<input type=\"hidden\""), Yi = y(">"), Xi = y("/>"), Zi = !1, Qi = !1, $i = !1, ea = !1, ta = !1, na = !1, ra = !1, ia = !1, aa = !1, oa = !1, sa = !1, ca = y(" selected=\"\""), la = y("addEventListener(\"submit\",function(a){if(!a.defaultPrevented){var c=a.target,d=a.submitter,e=c.action,b=d;if(d){var f=d.getAttribute(\"formAction\");null!=f&&(e=f,b=null)}\"javascript:throw new Error('React form unexpectedly submitted.')\"===e&&(a.preventDefault(),b?(a=document.createElement(\"input\"),a.name=b.name,a.value=b.value,b.parentNode.insertBefore(a,b),b=new FormData(c),a.parentNode.removeChild(a)):b=new FormData(c),a=c.ownerDocument||c,(a.$$reactFormReplay=a.$$reactFormReplay||[]).push(c,d,b))}});"), ua = y("<!--F!-->"), da = y("<!--F-->"), fa = /(<\/|<)(s)(tyle)/gi, pa = y("<!--head-->"), ma = y("<!--body-->"), ha = y("<!--html-->"), ga = y("\n"), _a = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, va = /* @__PURE__ */ new Map(), ya = y("<!DOCTYPE html>"), ba = /* @__PURE__ */ new Map(), xa = y("requestAnimationFrame(function(){$RT=performance.now()});"), Sa = y("<template id=\""), Ca = y("\"></template>"), wa = y("<!--&-->"), Ta = y("<!--/&-->"), Ea = y("<!--$-->"), Da = y("<!--$?--><template id=\""), Oa = y("\"></template>"), ka = y("<!--$!-->"), Aa = y("<!--/$-->"), ja = y("<template"), Ma = y("\""), Na = y(" data-dgst=\""), Pa = y(" data-msg=\""), Fa = y(" data-stck=\""), Ia = y(" data-cstck=\""), La = y("></template>"), Ra = y("<div hidden id=\""), za = y("\">"), Ba = y("</div>"), Va = y("<svg aria-hidden=\"true\" style=\"display:none\" id=\""), Ha = y("\">"), Ua = y("</svg>"), Wa = y("<math aria-hidden=\"true\" style=\"display:none\" id=\""), Ga = y("\">"), Ka = y("</math>"), qa = y("<table hidden id=\""), Ja = y("\">"), Ya = y("</table>"), Xa = y("<table hidden><tbody id=\""), Za = y("\">"), Qa = y("</tbody></table>"), $a = y("<table hidden><tr id=\""), eo = y("\">"), to = y("</tr></table>"), no = y("<table hidden><colgroup id=\""), ro = y("\">"), io = y("</colgroup></table>"), ao = y("$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS(\""), oo = y("$RS(\""), so = y("\",\""), co = y("\")<\/script>");
		y("<template data-rsi=\"\" data-sid=\""), y("\" data-pid=\"");
		var lo = y("$RB=[];$RV=function(a){$RT=performance.now();for(var b=0;b<a.length;b+=2){var c=a[b],e=a[b+1];null!==e.parentNode&&e.parentNode.removeChild(e);var f=c.parentNode;if(f){var g=c.previousSibling,h=0;do{if(c&&8===c.nodeType){var d=c.data;if(\"/$\"===d||\"/&\"===d)if(0===h)break;else h--;else\"$\"!==d&&\"$?\"!==d&&\"$~\"!==d&&\"$!\"!==d&&\"&\"!==d||h++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;e.firstChild;)f.insertBefore(e.firstChild,c);g.data=\"$\";g._reactRetry&&requestAnimationFrame(g._reactRetry)}}a.length=0};\n$RC=function(a,b){if(b=document.getElementById(b))(a=document.getElementById(a))?(a.previousSibling.data=\"$~\",$RB.push(a,b),2===$RB.length&&(\"number\"!==typeof $RT?requestAnimationFrame($RV.bind(null,$RB)):(a=performance.now(),setTimeout($RV.bind(null,$RB),2300>a&&2E3<a?2300-a:$RT+300-a)))):b.parentNode.removeChild(b)};");
		v("$RV=function(A,g){function k(a,b){var e=a.getAttribute(b);e&&(b=a.style,l.push(a,b.viewTransitionName,b.viewTransitionClass),\"auto\"!==e&&(b.viewTransitionClass=e),(a=a.getAttribute(\"vt-name\"))||(a=\"_T_\"+K++ +\"_\"),b.viewTransitionName=a,B=!0)}var B=!1,K=0,l=[];try{var f=document.__reactViewTransition;if(f){f.finished.finally($RV.bind(null,g));return}var m=new Map;for(f=1;f<g.length;f+=2)for(var h=g[f].querySelectorAll(\"[vt-share]\"),d=0;d<h.length;d++){var c=h[d];m.set(c.getAttribute(\"vt-name\"),c)}var u=[];for(h=0;h<g.length;h+=2){var C=g[h],x=C.parentNode;if(x){var v=x.getBoundingClientRect();if(v.left||v.top||v.width||v.height){c=C;for(f=0;c;){if(8===c.nodeType){var r=c.data;if(\"/$\"===r)if(0===f)break;else f--;else\"$\"!==r&&\"$?\"!==r&&\"$~\"!==r&&\"$!\"!==r||f++}else if(1===c.nodeType){d=c;var D=d.getAttribute(\"vt-name\"),y=m.get(D);k(d,y?\"vt-share\":\"vt-exit\");y&&(k(y,\"vt-share\"),m.set(D,null));var E=d.querySelectorAll(\"[vt-share]\");for(d=0;d<E.length;d++){var F=E[d],G=F.getAttribute(\"vt-name\"),\nH=m.get(G);H&&(k(F,\"vt-share\"),k(H,\"vt-share\"),m.set(G,null))}}c=c.nextSibling}for(var I=g[h+1],t=I.firstElementChild;t;)null!==m.get(t.getAttribute(\"vt-name\"))&&k(t,\"vt-enter\"),t=t.nextElementSibling;c=x;do for(var n=c.firstElementChild;n;){var J=n.getAttribute(\"vt-update\");J&&\"none\"!==J&&!l.includes(n)&&k(n,\"vt-update\");n=n.nextElementSibling}while((c=c.parentNode)&&1===c.nodeType&&\"none\"!==c.getAttribute(\"vt-update\"));u.push.apply(u,I.querySelectorAll('img[src]:not([loading=\"lazy\"])'))}}}if(B){var z=\ndocument.__reactViewTransition=document.startViewTransition({update:function(){A(g);for(var a=[document.documentElement.clientHeight,document.fonts.ready],b={},e=0;e<u.length;b={g:b.g},e++)if(b.g=u[e],!b.g.complete){var p=b.g.getBoundingClientRect();0<p.bottom&&0<p.right&&p.top<window.innerHeight&&p.left<window.innerWidth&&(p=new Promise(function(w){return function(q){w.g.addEventListener(\"load\",q);w.g.addEventListener(\"error\",q)}}(b)),a.push(p))}return Promise.race([Promise.all(a),new Promise(function(w){var q=\nperformance.now();setTimeout(w,2300>q&&2E3<q?2300-q:500)})])},types:[]});z.ready.finally(function(){for(var a=l.length-3;0<=a;a-=3){var b=l[a],e=b.style;e.viewTransitionName=l[a+1];e.viewTransitionClass=l[a+1];\"\"===b.getAttribute(\"style\")&&b.removeAttribute(\"style\")}});z.finished.finally(function(){document.__reactViewTransition===z&&(document.__reactViewTransition=null)});$RB=[];return}}catch(a){}A(g)}.bind(null,$RV);");
		var uo = y("$RC(\""), fo = y("$RM=new Map;$RR=function(n,w,p){function u(q){this._p=null;q()}for(var r=new Map,t=document,h,b,e=t.querySelectorAll(\"link[data-precedence],style[data-precedence]\"),v=[],k=0;b=e[k++];)\"not all\"===b.getAttribute(\"media\")?v.push(b):(\"LINK\"===b.tagName&&$RM.set(b.getAttribute(\"href\"),b),r.set(b.dataset.precedence,h=b));e=0;b=[];var l,a;for(k=!0;;){if(k){var f=p[e++];if(!f){k=!1;e=0;continue}var c=!1,m=0;var d=f[m++];if(a=$RM.get(d)){var g=a._p;c=!0}else{a=t.createElement(\"link\");a.href=d;a.rel=\n\"stylesheet\";for(a.dataset.precedence=l=f[m++];g=f[m++];)a.setAttribute(g,f[m++]);g=a._p=new Promise(function(q,x){a.onload=u.bind(a,q);a.onerror=u.bind(a,x)});$RM.set(d,a)}d=a.getAttribute(\"media\");!g||d&&!matchMedia(d).matches||b.push(g);if(c)continue}else{a=v[e++];if(!a)break;l=a.getAttribute(\"data-precedence\");a.removeAttribute(\"media\")}c=r.get(l)||h;c===h&&(h=a);r.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=t.head,c.insertBefore(a,c.firstChild))}if(p=document.getElementById(n))p.previousSibling.data=\n\"$~\";Promise.all(b).then($RC.bind(null,n,w),$RX.bind(null,n,\"CSS failed to load\"))};$RR(\""), po = y("$RR(\""), mo = y("\",\""), ho = y("\","), go = y("\""), _o = y(")<\/script>");
		y("<template data-rci=\"\" data-bid=\""), y("<template data-rri=\"\" data-bid=\""), y("\" data-sid=\""), y("\" data-sty=\"");
		var vo = y("$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data=\"$!\",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};"), yo = y("$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data=\"$!\",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};;$RX(\""), bo = y("$RX(\""), xo = y("\""), So = y(","), Co = y(")<\/script>");
		y("<template data-rxi=\"\" data-bid=\""), y("\" data-dgst=\""), y("\" data-msg=\""), y("\" data-stck=\""), y("\" data-cstck=\"");
		var wo = /[<\u2028\u2029]/g, To = /[&><\u2028\u2029]/g, Eo = y(" media=\"not all\" data-precedence=\""), Do = y("\" data-href=\""), Oo = y("\">"), ko = y("</style>"), Ao = !1, jo = !0, Mo = [], No = y(" data-precedence=\""), Po = y("\" data-href=\""), Fo = y(" "), Io = y("\">"), Lo = y("</style>");
		y("<link rel=\"expect\" href=\"#"), y("\" blocking=\"render\"/>");
		var Ro = y(" id=\""), zo = y("["), Bo = y(",["), Vo = y(","), Ho = y("]"), Uo = 0, Wo = 1, Go = 2, Ko = 3, qo = /[<>\r\n]/g, Jo = /["';,\r\n]/g, Yo = Function.prototype.bind, Xo = Symbol.for("react.client.reference"), Zo = {};
		Object.freeze(Zo);
		var Qo = {}, $o = null, es = {}, ts = {}, ns = /* @__PURE__ */ new Set(), rs = /* @__PURE__ */ new Set(), os = /* @__PURE__ */ new Set(), ss = /* @__PURE__ */ new Set(), cs = /* @__PURE__ */ new Set(), ls = /* @__PURE__ */ new Set(), us = /* @__PURE__ */ new Set(), ds = /* @__PURE__ */ new Set(), fs = /* @__PURE__ */ new Set(), ps = {
			enqueueSetState: function(e, t, n) {
				var i = e._reactInternals;
				i.queue === null ? rt(e, "setState") : (i.queue.push(t), n != null && nt(n));
			},
			enqueueReplaceState: function(e, t, n) {
				e = e._reactInternals, e.replace = !0, e.queue = [t], n != null && nt(n);
			},
			enqueueForceUpdate: function(e, t) {
				e._reactInternals.queue === null ? rt(e, "forceUpdate") : t != null && nt(t);
			}
		}, ms = {
			id: 1,
			overflow: ""
		}, hs = Math.clz32 ? Math.clz32 : at, gs = Math.log, _s = Math.LN2, vs = Error("Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."), ys = null, bs = typeof Object.is == "function" ? Object.is : lt, xs = null, Ss = null, Cs = null, ws = null, Ts = null, Es = null, Ds = !1, Os = !1, ks = 0, As = 0, js = -1, Ms = 0, Ns = null, Ps = null, Fs = 0, Is = !1, Ls, Rs = {
			readContext: ht,
			use: function(e) {
				if (typeof e == "object" && e) {
					if (typeof e.then == "function") return wt(e);
					if (e.$$typeof === tr) return ht(e);
				}
				throw Error("An unsupported type was passed to use(): " + String(e));
			},
			useContext: function(e) {
				return Ls = "useContext", ut(), e._currentValue;
			},
			useMemo: vt,
			useReducer: _t,
			useRef: function(e) {
				xs = ut(), Es = ft();
				var t = Es.memoizedState;
				return t === null ? (e = { current: e }, Object.seal(e), Es.memoizedState = e) : t;
			},
			useState: function(e) {
				return Ls = "useState", _t(gt, e);
			},
			useInsertionEffect: ot,
			useLayoutEffect: ot,
			useCallback: function(e, t) {
				return vt(function() {
					return e;
				}, t);
			},
			useImperativeHandle: ot,
			useEffect: ot,
			useDebugValue: ot,
			useDeferredValue: function(e, t) {
				return ut(), t === void 0 ? e : t;
			},
			useTransition: function() {
				return ut(), [!1, xt];
			},
			useId: function() {
				var e = Ss.treeContext, t = e.overflow;
				e = e.id, e = (e & ~(1 << 32 - hs(e) - 1)).toString(32) + t;
				var n = zs;
				if (n === null) throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
				return t = ks++, e = "_" + n.idPrefix + "R_" + e, 0 < t && (e += "H" + t.toString(32)), e + "_";
			},
			useSyncExternalStore: function(e, t, n) {
				if (n === void 0) throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
				return n();
			},
			useOptimistic: function(e) {
				return ut(), [e, St];
			},
			useActionState: Ct,
			useFormState: Ct,
			useHostTransitionStatus: function() {
				return ut(), ri;
			},
			useMemoCache: function(e) {
				for (var t = Array(e), n = 0; n < e; n++) t[n] = ur;
				return t;
			},
			useCacheRefresh: function() {
				return Tt;
			},
			useEffectEvent: function() {
				return bt;
			}
		}, zs = null, Bs = null, Vs = {
			getCacheForType: function() {
				throw Error("Not implemented.");
			},
			cacheSignal: function() {
				throw Error("Not implemented.");
			},
			getOwner: function() {
				return Bs === null ? null : Bs.componentStack;
			}
		}, Hs = 0, Us, Ws, Gs, Ks, qs, Js, Ys;
		Et.__reactDisabledLog = !0;
		var Xs, Zs, Qs = !1, $s = new (typeof WeakMap == "function" ? WeakMap : Map)(), ec = { react_stack_bottom_frame: function(e, t, n) {
			return e(t, n);
		} }, tc = ec.react_stack_bottom_frame.bind(ec), nc = { react_stack_bottom_frame: function(e) {
			return e.render();
		} }, rc = nc.react_stack_bottom_frame.bind(nc), ic = { react_stack_bottom_frame: function(e) {
			var t = e._init;
			return t(e._payload);
		} }, ac = ic.react_stack_bottom_frame.bind(ic), oc = 0;
		if (typeof performance == "object" && typeof performance.now == "function") var sc = performance, cc = function() {
			return sc.now();
		};
		else {
			var lc = Date;
			cc = function() {
				return lc.now();
			};
		}
		var uc = 4, dc = 0, fc = 1, pc = 2, mc = 3, hc = 4, gc = 5, _c = 14, vc = null, yc = {}, bc = {}, xc = {}, Sc = {}, Cc = !1, wc = !1, Tc = !1, Ec = 0, Dc = !1;
		Kn(), Kn(), e.prerender = function(e, t) {
			return new Promise(function(n, i) {
				var a = t ? t.onHeaders : void 0, o;
				a && (o = function(e) {
					a(new Headers(e));
				});
				var s = ee(t ? t.identifierPrefix : void 0, t ? t.unstable_externalRuntimeSrc : void 0, t ? t.bootstrapScriptContent : void 0, t ? t.bootstrapScripts : void 0, t ? t.bootstrapModules : void 0), c = Rt(e, s, R(s, void 0, t ? t.unstable_externalRuntimeSrc : void 0, t ? t.importMap : void 0, o, t ? t.maxHeadersLength : void 0), V(t ? t.namespaceURI : void 0), t ? t.progressiveChunkSize : void 0, t ? t.onError : void 0, function() {
					var e = new ReadableStream({
						type: "bytes",
						pull: function(e) {
							Hn(c, e);
						},
						cancel: function(e) {
							c.destination = null, Un(c, e);
						}
					}, { highWaterMark: 0 });
					e = {
						postponed: Gn(c),
						prelude: e
					}, n(e);
				}, void 0, void 0, i, t ? t.onPostpone : void 0);
				if (t && t.signal) {
					var l = t.signal;
					if (l.aborted) Un(c, l.reason);
					else {
						var u = function() {
							Un(c, l.reason), l.removeEventListener("abort", u);
						};
						l.addEventListener("abort", u);
					}
				}
				Bn(c);
			});
		}, e.renderToReadableStream = function(e, t) {
			return new Promise(function(n, i) {
				var a, o, s = new Promise(function(e, t) {
					o = e, a = t;
				}), c = t ? t.onHeaders : void 0, l;
				c && (l = function(e) {
					c(new Headers(e));
				});
				var u = ee(t ? t.identifierPrefix : void 0, t ? t.unstable_externalRuntimeSrc : void 0, t ? t.bootstrapScriptContent : void 0, t ? t.bootstrapScripts : void 0, t ? t.bootstrapModules : void 0), d = Lt(e, u, R(u, t ? t.nonce : void 0, t ? t.unstable_externalRuntimeSrc : void 0, t ? t.importMap : void 0, l, t ? t.maxHeadersLength : void 0), V(t ? t.namespaceURI : void 0), t ? t.progressiveChunkSize : void 0, t ? t.onError : void 0, o, function() {
					var e = new ReadableStream({
						type: "bytes",
						pull: function(e) {
							Hn(d, e);
						},
						cancel: function(e) {
							d.destination = null, Un(d, e);
						}
					}, { highWaterMark: 0 });
					e.allReady = s, n(e);
				}, function(e) {
					s.catch(function() {}), i(e);
				}, a, t ? t.onPostpone : void 0, t ? t.formState : void 0);
				if (t && t.signal) {
					var f = t.signal;
					if (f.aborted) Un(d, f.reason);
					else {
						var p = function() {
							Un(d, f.reason), f.removeEventListener("abort", p);
						};
						f.addEventListener("abort", p);
					}
				}
				Bn(d);
			});
		}, e.resume = function(e, t, n) {
			return new Promise(function(i, a) {
				var o, s, c = new Promise(function(e, t) {
					s = e, o = t;
				}), l = zt(e, t, R(t.resumableState, n ? n.nonce : void 0, void 0, void 0, void 0, void 0), n ? n.onError : void 0, s, function() {
					var e = new ReadableStream({
						type: "bytes",
						pull: function(e) {
							Hn(l, e);
						},
						cancel: function(e) {
							l.destination = null, Un(l, e);
						}
					}, { highWaterMark: 0 });
					e.allReady = c, i(e);
				}, function(e) {
					c.catch(function() {}), a(e);
				}, o, n ? n.onPostpone : void 0);
				if (n && n.signal) {
					var u = n.signal;
					if (u.aborted) Un(l, u.reason);
					else {
						var d = function() {
							Un(l, u.reason), u.removeEventListener("abort", d);
						};
						u.addEventListener("abort", d);
					}
				}
				Bn(l);
			});
		}, e.resumeAndPrerender = function(e, t, n) {
			return new Promise(function(i, a) {
				var o = Bt(e, t, R(t.resumableState, void 0, void 0, void 0, void 0, void 0), n ? n.onError : void 0, function() {
					var e = new ReadableStream({
						type: "bytes",
						pull: function(e) {
							Hn(o, e);
						},
						cancel: function(e) {
							o.destination = null, Un(o, e);
						}
					}, { highWaterMark: 0 });
					e = {
						postponed: Gn(o),
						prelude: e
					}, i(e);
				}, void 0, void 0, a, n ? n.onPostpone : void 0);
				if (n && n.signal) {
					var s = n.signal;
					if (s.aborted) Un(o, s.reason);
					else {
						var c = function() {
							Un(o, s.reason), s.removeEventListener("abort", c);
						};
						s.addEventListener("abort", c);
					}
				}
				Bn(o);
			});
		}, e.version = "19.2.0";
	})();
})), import_server_browser = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((e) => {
	var t, n;
	process.env.NODE_ENV === "production" ? (t = require_react_dom_server_legacy_browser_production(), n = require_react_dom_server_browser_production()) : (t = require_react_dom_server_legacy_browser_development(), n = require_react_dom_server_browser_development()), e.version = t.version, e.renderToString = t.renderToString, e.renderToStaticMarkup = t.renderToStaticMarkup, e.renderToReadableStream = n.renderToReadableStream, e.resume = n.resume;
})))()), import_react = /* @__PURE__ */ __toESM(require_react());
function r(e) {
	var t, n, i = "";
	if (typeof e == "string" || typeof e == "number") i += e;
	else if (typeof e == "object") if (Array.isArray(e)) {
		var a = e.length;
		for (t = 0; t < a; t++) e[t] && (n = r(e[t])) && (i && (i += " "), i += n);
	} else for (n in e) e[n] && (i && (i += " "), i += n);
	return i;
}
function clsx() {
	for (var e, t, n = 0, i = "", a = arguments.length; n < a; n++) (e = arguments[n]) && (t = r(e)) && (i && (i += " "), i += t);
	return i;
}
var CLASS_PART_SEPARATOR = "-", createClassGroupUtils = (e) => {
	let t = createClassMap(e), { conflictingClassGroups: n, conflictingClassGroupModifiers: i } = e;
	return {
		getClassGroupId: (e) => {
			let n = e.split(CLASS_PART_SEPARATOR);
			return n[0] === "" && n.length !== 1 && n.shift(), getGroupRecursive(n, t) || getGroupIdForArbitraryProperty(e);
		},
		getConflictingClassGroupIds: (e, t) => {
			let a = n[e] || [];
			return t && i[e] ? [...a, ...i[e]] : a;
		}
	};
}, getGroupRecursive = (e, t) => {
	if (e.length === 0) return t.classGroupId;
	let n = e[0], i = t.nextPart.get(n), a = i ? getGroupRecursive(e.slice(1), i) : void 0;
	if (a) return a;
	if (t.validators.length === 0) return;
	let o = e.join(CLASS_PART_SEPARATOR);
	return t.validators.find(({ validator: e }) => e(o))?.classGroupId;
}, arbitraryPropertyRegex = /^\[(.+)\]$/, getGroupIdForArbitraryProperty = (e) => {
	if (arbitraryPropertyRegex.test(e)) {
		let t = arbitraryPropertyRegex.exec(e)[1], n = t?.substring(0, t.indexOf(":"));
		if (n) return "arbitrary.." + n;
	}
}, createClassMap = (e) => {
	let { theme: t, classGroups: n } = e, i = {
		nextPart: /* @__PURE__ */ new Map(),
		validators: []
	};
	for (let e in n) processClassesRecursively(n[e], i, e, t);
	return i;
}, processClassesRecursively = (e, t, n, i) => {
	e.forEach((e) => {
		if (typeof e == "string") {
			let i = e === "" ? t : getPart(t, e);
			i.classGroupId = n;
			return;
		}
		if (typeof e == "function") {
			if (isThemeGetter(e)) {
				processClassesRecursively(e(i), t, n, i);
				return;
			}
			t.validators.push({
				validator: e,
				classGroupId: n
			});
			return;
		}
		Object.entries(e).forEach(([e, a]) => {
			processClassesRecursively(a, getPart(t, e), n, i);
		});
	});
}, getPart = (e, t) => {
	let n = e;
	return t.split(CLASS_PART_SEPARATOR).forEach((e) => {
		n.nextPart.has(e) || n.nextPart.set(e, {
			nextPart: /* @__PURE__ */ new Map(),
			validators: []
		}), n = n.nextPart.get(e);
	}), n;
}, isThemeGetter = (e) => e.isThemeGetter, createLruCache = (e) => {
	if (e < 1) return {
		get: () => void 0,
		set: () => {}
	};
	let t = 0, n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = (a, o) => {
		n.set(a, o), t++, t > e && (t = 0, i = n, n = /* @__PURE__ */ new Map());
	};
	return {
		get(e) {
			let t = n.get(e);
			if (t !== void 0) return t;
			if ((t = i.get(e)) !== void 0) return a(e, t), t;
		},
		set(e, t) {
			n.has(e) ? n.set(e, t) : a(e, t);
		}
	};
}, IMPORTANT_MODIFIER = "!", MODIFIER_SEPARATOR = ":", MODIFIER_SEPARATOR_LENGTH = 1, createParseClassName = (e) => {
	let { prefix: t, experimentalParseClassName: n } = e, i = (e) => {
		let t = [], n = 0, i = 0, a = 0, o;
		for (let s = 0; s < e.length; s++) {
			let c = e[s];
			if (n === 0 && i === 0) {
				if (c === MODIFIER_SEPARATOR) {
					t.push(e.slice(a, s)), a = s + MODIFIER_SEPARATOR_LENGTH;
					continue;
				}
				if (c === "/") {
					o = s;
					continue;
				}
			}
			c === "[" ? n++ : c === "]" ? n-- : c === "(" ? i++ : c === ")" && i--;
		}
		let s = t.length === 0 ? e : e.substring(a), c = stripImportantModifier(s), l = c !== s, u = o && o > a ? o - a : void 0;
		return {
			modifiers: t,
			hasImportantModifier: l,
			baseClassName: c,
			maybePostfixModifierPosition: u
		};
	};
	if (t) {
		let e = t + MODIFIER_SEPARATOR, n = i;
		i = (t) => t.startsWith(e) ? n(t.substring(e.length)) : {
			isExternal: !0,
			modifiers: [],
			hasImportantModifier: !1,
			baseClassName: t,
			maybePostfixModifierPosition: void 0
		};
	}
	if (n) {
		let e = i;
		i = (t) => n({
			className: t,
			parseClassName: e
		});
	}
	return i;
}, stripImportantModifier = (e) => e.endsWith(IMPORTANT_MODIFIER) ? e.substring(0, e.length - 1) : e.startsWith(IMPORTANT_MODIFIER) ? e.substring(1) : e, createSortModifiers = (e) => {
	let t = Object.fromEntries(e.orderSensitiveModifiers.map((e) => [e, !0]));
	return (e) => {
		if (e.length <= 1) return e;
		let n = [], i = [];
		return e.forEach((e) => {
			e[0] === "[" || t[e] ? (n.push(...i.sort(), e), i = []) : i.push(e);
		}), n.push(...i.sort()), n;
	};
}, createConfigUtils = (e) => ({
	cache: createLruCache(e.cacheSize),
	parseClassName: createParseClassName(e),
	sortModifiers: createSortModifiers(e),
	...createClassGroupUtils(e)
}), SPLIT_CLASSES_REGEX = /\s+/, mergeClassList = (e, t) => {
	let { parseClassName: n, getClassGroupId: i, getConflictingClassGroupIds: a, sortModifiers: o } = t, s = [], c = e.trim().split(SPLIT_CLASSES_REGEX), l = "";
	for (let e = c.length - 1; e >= 0; --e) {
		let t = c[e], { isExternal: u, modifiers: d, hasImportantModifier: f, baseClassName: p, maybePostfixModifierPosition: m } = n(t);
		if (u) {
			l = t + (l.length > 0 ? " " + l : l);
			continue;
		}
		let h = !!m, g = i(h ? p.substring(0, m) : p);
		if (!g) {
			if (!h) {
				l = t + (l.length > 0 ? " " + l : l);
				continue;
			}
			if (g = i(p), !g) {
				l = t + (l.length > 0 ? " " + l : l);
				continue;
			}
			h = !1;
		}
		let _ = o(d).join(":"), v = f ? _ + IMPORTANT_MODIFIER : _, y = v + g;
		if (s.includes(y)) continue;
		s.push(y);
		let b = a(g, h);
		for (let e = 0; e < b.length; ++e) {
			let t = b[e];
			s.push(v + t);
		}
		l = t + (l.length > 0 ? " " + l : l);
	}
	return l;
};
function twJoin() {
	let e = 0, t, n, i = "";
	for (; e < arguments.length;) (t = arguments[e++]) && (n = toValue(t)) && (i && (i += " "), i += n);
	return i;
}
var toValue = (e) => {
	if (typeof e == "string") return e;
	let t, n = "";
	for (let i = 0; i < e.length; i++) e[i] && (t = toValue(e[i])) && (n && (n += " "), n += t);
	return n;
};
function createTailwindMerge(e, ...t) {
	let n, i, a, o = s;
	function s(s) {
		let l = t.reduce((e, t) => t(e), e());
		return n = createConfigUtils(l), i = n.cache.get, a = n.cache.set, o = c, c(s);
	}
	function c(e) {
		let t = i(e);
		if (t) return t;
		let o = mergeClassList(e, n);
		return a(e, o), o;
	}
	return function() {
		return o(twJoin.apply(null, arguments));
	};
}
var fromTheme = (e) => {
	let t = (t) => t[e] || [];
	return t.isThemeGetter = !0, t;
}, arbitraryValueRegex = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, arbitraryVariableRegex = /^\((?:(\w[\w-]*):)?(.+)\)$/i, fractionRegex = /^\d+\/\d+$/, tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, isFraction = (e) => fractionRegex.test(e), isNumber = (e) => !!e && !Number.isNaN(Number(e)), isInteger = (e) => !!e && Number.isInteger(Number(e)), isPercent = (e) => e.endsWith("%") && isNumber(e.slice(0, -1)), isTshirtSize = (e) => tshirtUnitRegex.test(e), isAny = () => !0, isLengthOnly = (e) => lengthUnitRegex.test(e) && !colorFunctionRegex.test(e), isNever = () => !1, isShadow = (e) => shadowRegex.test(e), isImage = (e) => imageRegex.test(e), isAnyNonArbitrary = (e) => !isArbitraryValue(e) && !isArbitraryVariable(e), isArbitrarySize = (e) => getIsArbitraryValue(e, isLabelSize, isNever), isArbitraryValue = (e) => arbitraryValueRegex.test(e), isArbitraryLength = (e) => getIsArbitraryValue(e, isLabelLength, isLengthOnly), isArbitraryNumber = (e) => getIsArbitraryValue(e, isLabelNumber, isNumber), isArbitraryPosition = (e) => getIsArbitraryValue(e, isLabelPosition, isNever), isArbitraryImage = (e) => getIsArbitraryValue(e, isLabelImage, isImage), isArbitraryShadow = (e) => getIsArbitraryValue(e, isLabelShadow, isShadow), isArbitraryVariable = (e) => arbitraryVariableRegex.test(e), isArbitraryVariableLength = (e) => getIsArbitraryVariable(e, isLabelLength), isArbitraryVariableFamilyName = (e) => getIsArbitraryVariable(e, isLabelFamilyName), isArbitraryVariablePosition = (e) => getIsArbitraryVariable(e, isLabelPosition), isArbitraryVariableSize = (e) => getIsArbitraryVariable(e, isLabelSize), isArbitraryVariableImage = (e) => getIsArbitraryVariable(e, isLabelImage), isArbitraryVariableShadow = (e) => getIsArbitraryVariable(e, isLabelShadow, !0), getIsArbitraryValue = (e, t, n) => {
	let i = arbitraryValueRegex.exec(e);
	return i ? i[1] ? t(i[1]) : n(i[2]) : !1;
}, getIsArbitraryVariable = (e, t, n = !1) => {
	let i = arbitraryVariableRegex.exec(e);
	return i ? i[1] ? t(i[1]) : n : !1;
}, isLabelPosition = (e) => e === "position" || e === "percentage", isLabelImage = (e) => e === "image" || e === "url", isLabelSize = (e) => e === "length" || e === "size" || e === "bg-size", isLabelLength = (e) => e === "length", isLabelNumber = (e) => e === "number", isLabelFamilyName = (e) => e === "family-name", isLabelShadow = (e) => e === "shadow", twMerge = /* @__PURE__ */ createTailwindMerge(() => {
	let e = fromTheme("color"), t = fromTheme("font"), n = fromTheme("text"), i = fromTheme("font-weight"), a = fromTheme("tracking"), o = fromTheme("leading"), s = fromTheme("breakpoint"), c = fromTheme("container"), l = fromTheme("spacing"), u = fromTheme("radius"), d = fromTheme("shadow"), f = fromTheme("inset-shadow"), p = fromTheme("text-shadow"), m = fromTheme("drop-shadow"), h = fromTheme("blur"), g = fromTheme("perspective"), _ = fromTheme("aspect"), v = fromTheme("ease"), y = fromTheme("animate"), b = () => [
		"auto",
		"avoid",
		"all",
		"avoid-page",
		"page",
		"left",
		"right",
		"column"
	], x = () => [
		"center",
		"top",
		"bottom",
		"left",
		"right",
		"top-left",
		"left-top",
		"top-right",
		"right-top",
		"bottom-right",
		"right-bottom",
		"bottom-left",
		"left-bottom"
	], S = () => [
		...x(),
		isArbitraryVariable,
		isArbitraryValue
	], C = () => [
		"auto",
		"hidden",
		"clip",
		"visible",
		"scroll"
	], w = () => [
		"auto",
		"contain",
		"none"
	], T = () => [
		isArbitraryVariable,
		isArbitraryValue,
		l
	], E = () => [
		isFraction,
		"full",
		"auto",
		...T()
	], D = () => [
		isInteger,
		"none",
		"subgrid",
		isArbitraryVariable,
		isArbitraryValue
	], O = () => [
		"auto",
		{ span: [
			"full",
			isInteger,
			isArbitraryVariable,
			isArbitraryValue
		] },
		isInteger,
		isArbitraryVariable,
		isArbitraryValue
	], k = () => [
		isInteger,
		"auto",
		isArbitraryVariable,
		isArbitraryValue
	], A = () => [
		"auto",
		"min",
		"max",
		"fr",
		isArbitraryVariable,
		isArbitraryValue
	], j = () => [
		"start",
		"end",
		"center",
		"between",
		"around",
		"evenly",
		"stretch",
		"baseline",
		"center-safe",
		"end-safe"
	], M = () => [
		"start",
		"end",
		"center",
		"stretch",
		"center-safe",
		"end-safe"
	], N = () => ["auto", ...T()], P = () => [
		isFraction,
		"auto",
		"full",
		"dvw",
		"dvh",
		"lvw",
		"lvh",
		"svw",
		"svh",
		"min",
		"max",
		"fit",
		...T()
	], F = () => [
		e,
		isArbitraryVariable,
		isArbitraryValue
	], I = () => [
		...x(),
		isArbitraryVariablePosition,
		isArbitraryPosition,
		{ position: [isArbitraryVariable, isArbitraryValue] }
	], L = () => ["no-repeat", { repeat: [
		"",
		"x",
		"y",
		"space",
		"round"
	] }], R = () => [
		"auto",
		"cover",
		"contain",
		isArbitraryVariableSize,
		isArbitrarySize,
		{ size: [isArbitraryVariable, isArbitraryValue] }
	], ee = () => [
		isPercent,
		isArbitraryVariableLength,
		isArbitraryLength
	], z = () => [
		"",
		"none",
		"full",
		u,
		isArbitraryVariable,
		isArbitraryValue
	], B = () => [
		"",
		isNumber,
		isArbitraryVariableLength,
		isArbitraryLength
	], V = () => [
		"solid",
		"dashed",
		"dotted",
		"double"
	], te = () => [
		"normal",
		"multiply",
		"screen",
		"overlay",
		"darken",
		"lighten",
		"color-dodge",
		"color-burn",
		"hard-light",
		"soft-light",
		"difference",
		"exclusion",
		"hue",
		"saturation",
		"color",
		"luminosity"
	], H = () => [
		isNumber,
		isPercent,
		isArbitraryVariablePosition,
		isArbitraryPosition
	], U = () => [
		"",
		"none",
		h,
		isArbitraryVariable,
		isArbitraryValue
	], W = () => [
		"none",
		isNumber,
		isArbitraryVariable,
		isArbitraryValue
	], re = () => [
		"none",
		isNumber,
		isArbitraryVariable,
		isArbitraryValue
	], ie = () => [
		isNumber,
		isArbitraryVariable,
		isArbitraryValue
	], ae = () => [
		isFraction,
		"full",
		...T()
	];
	return {
		cacheSize: 500,
		theme: {
			animate: [
				"spin",
				"ping",
				"pulse",
				"bounce"
			],
			aspect: ["video"],
			blur: [isTshirtSize],
			breakpoint: [isTshirtSize],
			color: [isAny],
			container: [isTshirtSize],
			"drop-shadow": [isTshirtSize],
			ease: [
				"in",
				"out",
				"in-out"
			],
			font: [isAnyNonArbitrary],
			"font-weight": [
				"thin",
				"extralight",
				"light",
				"normal",
				"medium",
				"semibold",
				"bold",
				"extrabold",
				"black"
			],
			"inset-shadow": [isTshirtSize],
			leading: [
				"none",
				"tight",
				"snug",
				"normal",
				"relaxed",
				"loose"
			],
			perspective: [
				"dramatic",
				"near",
				"normal",
				"midrange",
				"distant",
				"none"
			],
			radius: [isTshirtSize],
			shadow: [isTshirtSize],
			spacing: ["px", isNumber],
			text: [isTshirtSize],
			"text-shadow": [isTshirtSize],
			tracking: [
				"tighter",
				"tight",
				"normal",
				"wide",
				"wider",
				"widest"
			]
		},
		classGroups: {
			aspect: [{ aspect: [
				"auto",
				"square",
				isFraction,
				isArbitraryValue,
				isArbitraryVariable,
				_
			] }],
			container: ["container"],
			columns: [{ columns: [
				isNumber,
				isArbitraryValue,
				isArbitraryVariable,
				c
			] }],
			"break-after": [{ "break-after": b() }],
			"break-before": [{ "break-before": b() }],
			"break-inside": [{ "break-inside": [
				"auto",
				"avoid",
				"avoid-page",
				"avoid-column"
			] }],
			"box-decoration": [{ "box-decoration": ["slice", "clone"] }],
			box: [{ box: ["border", "content"] }],
			display: [
				"block",
				"inline-block",
				"inline",
				"flex",
				"inline-flex",
				"table",
				"inline-table",
				"table-caption",
				"table-cell",
				"table-column",
				"table-column-group",
				"table-footer-group",
				"table-header-group",
				"table-row-group",
				"table-row",
				"flow-root",
				"grid",
				"inline-grid",
				"contents",
				"list-item",
				"hidden"
			],
			sr: ["sr-only", "not-sr-only"],
			float: [{ float: [
				"right",
				"left",
				"none",
				"start",
				"end"
			] }],
			clear: [{ clear: [
				"left",
				"right",
				"both",
				"none",
				"start",
				"end"
			] }],
			isolation: ["isolate", "isolation-auto"],
			"object-fit": [{ object: [
				"contain",
				"cover",
				"fill",
				"none",
				"scale-down"
			] }],
			"object-position": [{ object: S() }],
			overflow: [{ overflow: C() }],
			"overflow-x": [{ "overflow-x": C() }],
			"overflow-y": [{ "overflow-y": C() }],
			overscroll: [{ overscroll: w() }],
			"overscroll-x": [{ "overscroll-x": w() }],
			"overscroll-y": [{ "overscroll-y": w() }],
			position: [
				"static",
				"fixed",
				"absolute",
				"relative",
				"sticky"
			],
			inset: [{ inset: E() }],
			"inset-x": [{ "inset-x": E() }],
			"inset-y": [{ "inset-y": E() }],
			start: [{ start: E() }],
			end: [{ end: E() }],
			top: [{ top: E() }],
			right: [{ right: E() }],
			bottom: [{ bottom: E() }],
			left: [{ left: E() }],
			visibility: [
				"visible",
				"invisible",
				"collapse"
			],
			z: [{ z: [
				isInteger,
				"auto",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			basis: [{ basis: [
				isFraction,
				"full",
				"auto",
				c,
				...T()
			] }],
			"flex-direction": [{ flex: [
				"row",
				"row-reverse",
				"col",
				"col-reverse"
			] }],
			"flex-wrap": [{ flex: [
				"nowrap",
				"wrap",
				"wrap-reverse"
			] }],
			flex: [{ flex: [
				isNumber,
				isFraction,
				"auto",
				"initial",
				"none",
				isArbitraryValue
			] }],
			grow: [{ grow: [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			shrink: [{ shrink: [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			order: [{ order: [
				isInteger,
				"first",
				"last",
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"grid-cols": [{ "grid-cols": D() }],
			"col-start-end": [{ col: O() }],
			"col-start": [{ "col-start": k() }],
			"col-end": [{ "col-end": k() }],
			"grid-rows": [{ "grid-rows": D() }],
			"row-start-end": [{ row: O() }],
			"row-start": [{ "row-start": k() }],
			"row-end": [{ "row-end": k() }],
			"grid-flow": [{ "grid-flow": [
				"row",
				"col",
				"dense",
				"row-dense",
				"col-dense"
			] }],
			"auto-cols": [{ "auto-cols": A() }],
			"auto-rows": [{ "auto-rows": A() }],
			gap: [{ gap: T() }],
			"gap-x": [{ "gap-x": T() }],
			"gap-y": [{ "gap-y": T() }],
			"justify-content": [{ justify: [...j(), "normal"] }],
			"justify-items": [{ "justify-items": [...M(), "normal"] }],
			"justify-self": [{ "justify-self": ["auto", ...M()] }],
			"align-content": [{ content: ["normal", ...j()] }],
			"align-items": [{ items: [...M(), { baseline: ["", "last"] }] }],
			"align-self": [{ self: [
				"auto",
				...M(),
				{ baseline: ["", "last"] }
			] }],
			"place-content": [{ "place-content": j() }],
			"place-items": [{ "place-items": [...M(), "baseline"] }],
			"place-self": [{ "place-self": ["auto", ...M()] }],
			p: [{ p: T() }],
			px: [{ px: T() }],
			py: [{ py: T() }],
			ps: [{ ps: T() }],
			pe: [{ pe: T() }],
			pt: [{ pt: T() }],
			pr: [{ pr: T() }],
			pb: [{ pb: T() }],
			pl: [{ pl: T() }],
			m: [{ m: N() }],
			mx: [{ mx: N() }],
			my: [{ my: N() }],
			ms: [{ ms: N() }],
			me: [{ me: N() }],
			mt: [{ mt: N() }],
			mr: [{ mr: N() }],
			mb: [{ mb: N() }],
			ml: [{ ml: N() }],
			"space-x": [{ "space-x": T() }],
			"space-x-reverse": ["space-x-reverse"],
			"space-y": [{ "space-y": T() }],
			"space-y-reverse": ["space-y-reverse"],
			size: [{ size: P() }],
			w: [{ w: [
				c,
				"screen",
				...P()
			] }],
			"min-w": [{ "min-w": [
				c,
				"screen",
				"none",
				...P()
			] }],
			"max-w": [{ "max-w": [
				c,
				"screen",
				"none",
				"prose",
				{ screen: [s] },
				...P()
			] }],
			h: [{ h: [
				"screen",
				"lh",
				...P()
			] }],
			"min-h": [{ "min-h": [
				"screen",
				"lh",
				"none",
				...P()
			] }],
			"max-h": [{ "max-h": [
				"screen",
				"lh",
				...P()
			] }],
			"font-size": [{ text: [
				"base",
				n,
				isArbitraryVariableLength,
				isArbitraryLength
			] }],
			"font-smoothing": ["antialiased", "subpixel-antialiased"],
			"font-style": ["italic", "not-italic"],
			"font-weight": [{ font: [
				i,
				isArbitraryVariable,
				isArbitraryNumber
			] }],
			"font-stretch": [{ "font-stretch": [
				"ultra-condensed",
				"extra-condensed",
				"condensed",
				"semi-condensed",
				"normal",
				"semi-expanded",
				"expanded",
				"extra-expanded",
				"ultra-expanded",
				isPercent,
				isArbitraryValue
			] }],
			"font-family": [{ font: [
				isArbitraryVariableFamilyName,
				isArbitraryValue,
				t
			] }],
			"fvn-normal": ["normal-nums"],
			"fvn-ordinal": ["ordinal"],
			"fvn-slashed-zero": ["slashed-zero"],
			"fvn-figure": ["lining-nums", "oldstyle-nums"],
			"fvn-spacing": ["proportional-nums", "tabular-nums"],
			"fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
			tracking: [{ tracking: [
				a,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"line-clamp": [{ "line-clamp": [
				isNumber,
				"none",
				isArbitraryVariable,
				isArbitraryNumber
			] }],
			leading: [{ leading: [o, ...T()] }],
			"list-image": [{ "list-image": [
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"list-style-position": [{ list: ["inside", "outside"] }],
			"list-style-type": [{ list: [
				"disc",
				"decimal",
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"text-alignment": [{ text: [
				"left",
				"center",
				"right",
				"justify",
				"start",
				"end"
			] }],
			"placeholder-color": [{ placeholder: F() }],
			"text-color": [{ text: F() }],
			"text-decoration": [
				"underline",
				"overline",
				"line-through",
				"no-underline"
			],
			"text-decoration-style": [{ decoration: [...V(), "wavy"] }],
			"text-decoration-thickness": [{ decoration: [
				isNumber,
				"from-font",
				"auto",
				isArbitraryVariable,
				isArbitraryLength
			] }],
			"text-decoration-color": [{ decoration: F() }],
			"underline-offset": [{ "underline-offset": [
				isNumber,
				"auto",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"text-transform": [
				"uppercase",
				"lowercase",
				"capitalize",
				"normal-case"
			],
			"text-overflow": [
				"truncate",
				"text-ellipsis",
				"text-clip"
			],
			"text-wrap": [{ text: [
				"wrap",
				"nowrap",
				"balance",
				"pretty"
			] }],
			indent: [{ indent: T() }],
			"vertical-align": [{ align: [
				"baseline",
				"top",
				"middle",
				"bottom",
				"text-top",
				"text-bottom",
				"sub",
				"super",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			whitespace: [{ whitespace: [
				"normal",
				"nowrap",
				"pre",
				"pre-line",
				"pre-wrap",
				"break-spaces"
			] }],
			break: [{ break: [
				"normal",
				"words",
				"all",
				"keep"
			] }],
			wrap: [{ wrap: [
				"break-word",
				"anywhere",
				"normal"
			] }],
			hyphens: [{ hyphens: [
				"none",
				"manual",
				"auto"
			] }],
			content: [{ content: [
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"bg-attachment": [{ bg: [
				"fixed",
				"local",
				"scroll"
			] }],
			"bg-clip": [{ "bg-clip": [
				"border",
				"padding",
				"content",
				"text"
			] }],
			"bg-origin": [{ "bg-origin": [
				"border",
				"padding",
				"content"
			] }],
			"bg-position": [{ bg: I() }],
			"bg-repeat": [{ bg: L() }],
			"bg-size": [{ bg: R() }],
			"bg-image": [{ bg: [
				"none",
				{
					linear: [
						{ to: [
							"t",
							"tr",
							"r",
							"br",
							"b",
							"bl",
							"l",
							"tl"
						] },
						isInteger,
						isArbitraryVariable,
						isArbitraryValue
					],
					radial: [
						"",
						isArbitraryVariable,
						isArbitraryValue
					],
					conic: [
						isInteger,
						isArbitraryVariable,
						isArbitraryValue
					]
				},
				isArbitraryVariableImage,
				isArbitraryImage
			] }],
			"bg-color": [{ bg: F() }],
			"gradient-from-pos": [{ from: ee() }],
			"gradient-via-pos": [{ via: ee() }],
			"gradient-to-pos": [{ to: ee() }],
			"gradient-from": [{ from: F() }],
			"gradient-via": [{ via: F() }],
			"gradient-to": [{ to: F() }],
			rounded: [{ rounded: z() }],
			"rounded-s": [{ "rounded-s": z() }],
			"rounded-e": [{ "rounded-e": z() }],
			"rounded-t": [{ "rounded-t": z() }],
			"rounded-r": [{ "rounded-r": z() }],
			"rounded-b": [{ "rounded-b": z() }],
			"rounded-l": [{ "rounded-l": z() }],
			"rounded-ss": [{ "rounded-ss": z() }],
			"rounded-se": [{ "rounded-se": z() }],
			"rounded-ee": [{ "rounded-ee": z() }],
			"rounded-es": [{ "rounded-es": z() }],
			"rounded-tl": [{ "rounded-tl": z() }],
			"rounded-tr": [{ "rounded-tr": z() }],
			"rounded-br": [{ "rounded-br": z() }],
			"rounded-bl": [{ "rounded-bl": z() }],
			"border-w": [{ border: B() }],
			"border-w-x": [{ "border-x": B() }],
			"border-w-y": [{ "border-y": B() }],
			"border-w-s": [{ "border-s": B() }],
			"border-w-e": [{ "border-e": B() }],
			"border-w-t": [{ "border-t": B() }],
			"border-w-r": [{ "border-r": B() }],
			"border-w-b": [{ "border-b": B() }],
			"border-w-l": [{ "border-l": B() }],
			"divide-x": [{ "divide-x": B() }],
			"divide-x-reverse": ["divide-x-reverse"],
			"divide-y": [{ "divide-y": B() }],
			"divide-y-reverse": ["divide-y-reverse"],
			"border-style": [{ border: [
				...V(),
				"hidden",
				"none"
			] }],
			"divide-style": [{ divide: [
				...V(),
				"hidden",
				"none"
			] }],
			"border-color": [{ border: F() }],
			"border-color-x": [{ "border-x": F() }],
			"border-color-y": [{ "border-y": F() }],
			"border-color-s": [{ "border-s": F() }],
			"border-color-e": [{ "border-e": F() }],
			"border-color-t": [{ "border-t": F() }],
			"border-color-r": [{ "border-r": F() }],
			"border-color-b": [{ "border-b": F() }],
			"border-color-l": [{ "border-l": F() }],
			"divide-color": [{ divide: F() }],
			"outline-style": [{ outline: [
				...V(),
				"none",
				"hidden"
			] }],
			"outline-offset": [{ "outline-offset": [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"outline-w": [{ outline: [
				"",
				isNumber,
				isArbitraryVariableLength,
				isArbitraryLength
			] }],
			"outline-color": [{ outline: F() }],
			shadow: [{ shadow: [
				"",
				"none",
				d,
				isArbitraryVariableShadow,
				isArbitraryShadow
			] }],
			"shadow-color": [{ shadow: F() }],
			"inset-shadow": [{ "inset-shadow": [
				"none",
				f,
				isArbitraryVariableShadow,
				isArbitraryShadow
			] }],
			"inset-shadow-color": [{ "inset-shadow": F() }],
			"ring-w": [{ ring: B() }],
			"ring-w-inset": ["ring-inset"],
			"ring-color": [{ ring: F() }],
			"ring-offset-w": [{ "ring-offset": [isNumber, isArbitraryLength] }],
			"ring-offset-color": [{ "ring-offset": F() }],
			"inset-ring-w": [{ "inset-ring": B() }],
			"inset-ring-color": [{ "inset-ring": F() }],
			"text-shadow": [{ "text-shadow": [
				"none",
				p,
				isArbitraryVariableShadow,
				isArbitraryShadow
			] }],
			"text-shadow-color": [{ "text-shadow": F() }],
			opacity: [{ opacity: [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"mix-blend": [{ "mix-blend": [
				...te(),
				"plus-darker",
				"plus-lighter"
			] }],
			"bg-blend": [{ "bg-blend": te() }],
			"mask-clip": [{ "mask-clip": [
				"border",
				"padding",
				"content",
				"fill",
				"stroke",
				"view"
			] }, "mask-no-clip"],
			"mask-composite": [{ mask: [
				"add",
				"subtract",
				"intersect",
				"exclude"
			] }],
			"mask-image-linear-pos": [{ "mask-linear": [isNumber] }],
			"mask-image-linear-from-pos": [{ "mask-linear-from": H() }],
			"mask-image-linear-to-pos": [{ "mask-linear-to": H() }],
			"mask-image-linear-from-color": [{ "mask-linear-from": F() }],
			"mask-image-linear-to-color": [{ "mask-linear-to": F() }],
			"mask-image-t-from-pos": [{ "mask-t-from": H() }],
			"mask-image-t-to-pos": [{ "mask-t-to": H() }],
			"mask-image-t-from-color": [{ "mask-t-from": F() }],
			"mask-image-t-to-color": [{ "mask-t-to": F() }],
			"mask-image-r-from-pos": [{ "mask-r-from": H() }],
			"mask-image-r-to-pos": [{ "mask-r-to": H() }],
			"mask-image-r-from-color": [{ "mask-r-from": F() }],
			"mask-image-r-to-color": [{ "mask-r-to": F() }],
			"mask-image-b-from-pos": [{ "mask-b-from": H() }],
			"mask-image-b-to-pos": [{ "mask-b-to": H() }],
			"mask-image-b-from-color": [{ "mask-b-from": F() }],
			"mask-image-b-to-color": [{ "mask-b-to": F() }],
			"mask-image-l-from-pos": [{ "mask-l-from": H() }],
			"mask-image-l-to-pos": [{ "mask-l-to": H() }],
			"mask-image-l-from-color": [{ "mask-l-from": F() }],
			"mask-image-l-to-color": [{ "mask-l-to": F() }],
			"mask-image-x-from-pos": [{ "mask-x-from": H() }],
			"mask-image-x-to-pos": [{ "mask-x-to": H() }],
			"mask-image-x-from-color": [{ "mask-x-from": F() }],
			"mask-image-x-to-color": [{ "mask-x-to": F() }],
			"mask-image-y-from-pos": [{ "mask-y-from": H() }],
			"mask-image-y-to-pos": [{ "mask-y-to": H() }],
			"mask-image-y-from-color": [{ "mask-y-from": F() }],
			"mask-image-y-to-color": [{ "mask-y-to": F() }],
			"mask-image-radial": [{ "mask-radial": [isArbitraryVariable, isArbitraryValue] }],
			"mask-image-radial-from-pos": [{ "mask-radial-from": H() }],
			"mask-image-radial-to-pos": [{ "mask-radial-to": H() }],
			"mask-image-radial-from-color": [{ "mask-radial-from": F() }],
			"mask-image-radial-to-color": [{ "mask-radial-to": F() }],
			"mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
			"mask-image-radial-size": [{ "mask-radial": [{
				closest: ["side", "corner"],
				farthest: ["side", "corner"]
			}] }],
			"mask-image-radial-pos": [{ "mask-radial-at": x() }],
			"mask-image-conic-pos": [{ "mask-conic": [isNumber] }],
			"mask-image-conic-from-pos": [{ "mask-conic-from": H() }],
			"mask-image-conic-to-pos": [{ "mask-conic-to": H() }],
			"mask-image-conic-from-color": [{ "mask-conic-from": F() }],
			"mask-image-conic-to-color": [{ "mask-conic-to": F() }],
			"mask-mode": [{ mask: [
				"alpha",
				"luminance",
				"match"
			] }],
			"mask-origin": [{ "mask-origin": [
				"border",
				"padding",
				"content",
				"fill",
				"stroke",
				"view"
			] }],
			"mask-position": [{ mask: I() }],
			"mask-repeat": [{ mask: L() }],
			"mask-size": [{ mask: R() }],
			"mask-type": [{ "mask-type": ["alpha", "luminance"] }],
			"mask-image": [{ mask: [
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			filter: [{ filter: [
				"",
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			blur: [{ blur: U() }],
			brightness: [{ brightness: [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			contrast: [{ contrast: [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"drop-shadow": [{ "drop-shadow": [
				"",
				"none",
				m,
				isArbitraryVariableShadow,
				isArbitraryShadow
			] }],
			"drop-shadow-color": [{ "drop-shadow": F() }],
			grayscale: [{ grayscale: [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"hue-rotate": [{ "hue-rotate": [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			invert: [{ invert: [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			saturate: [{ saturate: [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			sepia: [{ sepia: [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"backdrop-filter": [{ "backdrop-filter": [
				"",
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"backdrop-blur": [{ "backdrop-blur": U() }],
			"backdrop-brightness": [{ "backdrop-brightness": [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"backdrop-contrast": [{ "backdrop-contrast": [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"backdrop-grayscale": [{ "backdrop-grayscale": [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"backdrop-hue-rotate": [{ "backdrop-hue-rotate": [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"backdrop-invert": [{ "backdrop-invert": [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"backdrop-opacity": [{ "backdrop-opacity": [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"backdrop-saturate": [{ "backdrop-saturate": [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"backdrop-sepia": [{ "backdrop-sepia": [
				"",
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"border-collapse": [{ border: ["collapse", "separate"] }],
			"border-spacing": [{ "border-spacing": T() }],
			"border-spacing-x": [{ "border-spacing-x": T() }],
			"border-spacing-y": [{ "border-spacing-y": T() }],
			"table-layout": [{ table: ["auto", "fixed"] }],
			caption: [{ caption: ["top", "bottom"] }],
			transition: [{ transition: [
				"",
				"all",
				"colors",
				"opacity",
				"shadow",
				"transform",
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"transition-behavior": [{ transition: ["normal", "discrete"] }],
			duration: [{ duration: [
				isNumber,
				"initial",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			ease: [{ ease: [
				"linear",
				"initial",
				v,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			delay: [{ delay: [
				isNumber,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			animate: [{ animate: [
				"none",
				y,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			backface: [{ backface: ["hidden", "visible"] }],
			perspective: [{ perspective: [
				g,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"perspective-origin": [{ "perspective-origin": S() }],
			rotate: [{ rotate: W() }],
			"rotate-x": [{ "rotate-x": W() }],
			"rotate-y": [{ "rotate-y": W() }],
			"rotate-z": [{ "rotate-z": W() }],
			scale: [{ scale: re() }],
			"scale-x": [{ "scale-x": re() }],
			"scale-y": [{ "scale-y": re() }],
			"scale-z": [{ "scale-z": re() }],
			"scale-3d": ["scale-3d"],
			skew: [{ skew: ie() }],
			"skew-x": [{ "skew-x": ie() }],
			"skew-y": [{ "skew-y": ie() }],
			transform: [{ transform: [
				isArbitraryVariable,
				isArbitraryValue,
				"",
				"none",
				"gpu",
				"cpu"
			] }],
			"transform-origin": [{ origin: S() }],
			"transform-style": [{ transform: ["3d", "flat"] }],
			translate: [{ translate: ae() }],
			"translate-x": [{ "translate-x": ae() }],
			"translate-y": [{ "translate-y": ae() }],
			"translate-z": [{ "translate-z": ae() }],
			"translate-none": ["translate-none"],
			accent: [{ accent: F() }],
			appearance: [{ appearance: ["none", "auto"] }],
			"caret-color": [{ caret: F() }],
			"color-scheme": [{ scheme: [
				"normal",
				"dark",
				"light",
				"light-dark",
				"only-dark",
				"only-light"
			] }],
			cursor: [{ cursor: [
				"auto",
				"default",
				"pointer",
				"wait",
				"text",
				"move",
				"help",
				"not-allowed",
				"none",
				"context-menu",
				"progress",
				"cell",
				"crosshair",
				"vertical-text",
				"alias",
				"copy",
				"no-drop",
				"grab",
				"grabbing",
				"all-scroll",
				"col-resize",
				"row-resize",
				"n-resize",
				"e-resize",
				"s-resize",
				"w-resize",
				"ne-resize",
				"nw-resize",
				"se-resize",
				"sw-resize",
				"ew-resize",
				"ns-resize",
				"nesw-resize",
				"nwse-resize",
				"zoom-in",
				"zoom-out",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"field-sizing": [{ "field-sizing": ["fixed", "content"] }],
			"pointer-events": [{ "pointer-events": ["auto", "none"] }],
			resize: [{ resize: [
				"none",
				"",
				"y",
				"x"
			] }],
			"scroll-behavior": [{ scroll: ["auto", "smooth"] }],
			"scroll-m": [{ "scroll-m": T() }],
			"scroll-mx": [{ "scroll-mx": T() }],
			"scroll-my": [{ "scroll-my": T() }],
			"scroll-ms": [{ "scroll-ms": T() }],
			"scroll-me": [{ "scroll-me": T() }],
			"scroll-mt": [{ "scroll-mt": T() }],
			"scroll-mr": [{ "scroll-mr": T() }],
			"scroll-mb": [{ "scroll-mb": T() }],
			"scroll-ml": [{ "scroll-ml": T() }],
			"scroll-p": [{ "scroll-p": T() }],
			"scroll-px": [{ "scroll-px": T() }],
			"scroll-py": [{ "scroll-py": T() }],
			"scroll-ps": [{ "scroll-ps": T() }],
			"scroll-pe": [{ "scroll-pe": T() }],
			"scroll-pt": [{ "scroll-pt": T() }],
			"scroll-pr": [{ "scroll-pr": T() }],
			"scroll-pb": [{ "scroll-pb": T() }],
			"scroll-pl": [{ "scroll-pl": T() }],
			"snap-align": [{ snap: [
				"start",
				"end",
				"center",
				"align-none"
			] }],
			"snap-stop": [{ snap: ["normal", "always"] }],
			"snap-type": [{ snap: [
				"none",
				"x",
				"y",
				"both"
			] }],
			"snap-strictness": [{ snap: ["mandatory", "proximity"] }],
			touch: [{ touch: [
				"auto",
				"none",
				"manipulation"
			] }],
			"touch-x": [{ "touch-pan": [
				"x",
				"left",
				"right"
			] }],
			"touch-y": [{ "touch-pan": [
				"y",
				"up",
				"down"
			] }],
			"touch-pz": ["touch-pinch-zoom"],
			select: [{ select: [
				"none",
				"text",
				"all",
				"auto"
			] }],
			"will-change": [{ "will-change": [
				"auto",
				"scroll",
				"contents",
				"transform",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			fill: [{ fill: ["none", ...F()] }],
			"stroke-w": [{ stroke: [
				isNumber,
				isArbitraryVariableLength,
				isArbitraryLength,
				isArbitraryNumber
			] }],
			stroke: [{ stroke: ["none", ...F()] }],
			"forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }]
		},
		conflictingClassGroups: {
			overflow: ["overflow-x", "overflow-y"],
			overscroll: ["overscroll-x", "overscroll-y"],
			inset: [
				"inset-x",
				"inset-y",
				"start",
				"end",
				"top",
				"right",
				"bottom",
				"left"
			],
			"inset-x": ["right", "left"],
			"inset-y": ["top", "bottom"],
			flex: [
				"basis",
				"grow",
				"shrink"
			],
			gap: ["gap-x", "gap-y"],
			p: [
				"px",
				"py",
				"ps",
				"pe",
				"pt",
				"pr",
				"pb",
				"pl"
			],
			px: ["pr", "pl"],
			py: ["pt", "pb"],
			m: [
				"mx",
				"my",
				"ms",
				"me",
				"mt",
				"mr",
				"mb",
				"ml"
			],
			mx: ["mr", "ml"],
			my: ["mt", "mb"],
			size: ["w", "h"],
			"font-size": ["leading"],
			"fvn-normal": [
				"fvn-ordinal",
				"fvn-slashed-zero",
				"fvn-figure",
				"fvn-spacing",
				"fvn-fraction"
			],
			"fvn-ordinal": ["fvn-normal"],
			"fvn-slashed-zero": ["fvn-normal"],
			"fvn-figure": ["fvn-normal"],
			"fvn-spacing": ["fvn-normal"],
			"fvn-fraction": ["fvn-normal"],
			"line-clamp": ["display", "overflow"],
			rounded: [
				"rounded-s",
				"rounded-e",
				"rounded-t",
				"rounded-r",
				"rounded-b",
				"rounded-l",
				"rounded-ss",
				"rounded-se",
				"rounded-ee",
				"rounded-es",
				"rounded-tl",
				"rounded-tr",
				"rounded-br",
				"rounded-bl"
			],
			"rounded-s": ["rounded-ss", "rounded-es"],
			"rounded-e": ["rounded-se", "rounded-ee"],
			"rounded-t": ["rounded-tl", "rounded-tr"],
			"rounded-r": ["rounded-tr", "rounded-br"],
			"rounded-b": ["rounded-br", "rounded-bl"],
			"rounded-l": ["rounded-tl", "rounded-bl"],
			"border-spacing": ["border-spacing-x", "border-spacing-y"],
			"border-w": [
				"border-w-x",
				"border-w-y",
				"border-w-s",
				"border-w-e",
				"border-w-t",
				"border-w-r",
				"border-w-b",
				"border-w-l"
			],
			"border-w-x": ["border-w-r", "border-w-l"],
			"border-w-y": ["border-w-t", "border-w-b"],
			"border-color": [
				"border-color-x",
				"border-color-y",
				"border-color-s",
				"border-color-e",
				"border-color-t",
				"border-color-r",
				"border-color-b",
				"border-color-l"
			],
			"border-color-x": ["border-color-r", "border-color-l"],
			"border-color-y": ["border-color-t", "border-color-b"],
			translate: [
				"translate-x",
				"translate-y",
				"translate-none"
			],
			"translate-none": [
				"translate",
				"translate-x",
				"translate-y",
				"translate-z"
			],
			"scroll-m": [
				"scroll-mx",
				"scroll-my",
				"scroll-ms",
				"scroll-me",
				"scroll-mt",
				"scroll-mr",
				"scroll-mb",
				"scroll-ml"
			],
			"scroll-mx": ["scroll-mr", "scroll-ml"],
			"scroll-my": ["scroll-mt", "scroll-mb"],
			"scroll-p": [
				"scroll-px",
				"scroll-py",
				"scroll-ps",
				"scroll-pe",
				"scroll-pt",
				"scroll-pr",
				"scroll-pb",
				"scroll-pl"
			],
			"scroll-px": ["scroll-pr", "scroll-pl"],
			"scroll-py": ["scroll-pt", "scroll-pb"],
			touch: [
				"touch-x",
				"touch-y",
				"touch-pz"
			],
			"touch-x": ["touch"],
			"touch-y": ["touch"],
			"touch-pz": ["touch"]
		},
		conflictingClassGroupModifiers: { "font-size": ["leading"] },
		orderSensitiveModifiers: [
			"*",
			"**",
			"after",
			"backdrop",
			"before",
			"details-content",
			"file",
			"first-letter",
			"first-line",
			"marker",
			"placeholder",
			"selection"
		]
	};
});
function cn(...e) {
	return twMerge(clsx(e));
}
var require_react_jsx_runtime_production = /* @__PURE__ */ __commonJSMin(((e) => {
	var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
	function i(e, n, i) {
		var a = null;
		if (i !== void 0 && (a = "" + i), n.key !== void 0 && (a = "" + n.key), "key" in n) for (var o in i = {}, n) o !== "key" && (i[o] = n[o]);
		else i = n;
		return n = i.ref, {
			$$typeof: t,
			type: e,
			key: a,
			ref: n === void 0 ? null : n,
			props: i
		};
	}
	e.Fragment = n, e.jsx = i, e.jsxs = i;
})), require_react_jsx_runtime_development = /* @__PURE__ */ __commonJSMin(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		function t(e) {
			if (e == null) return null;
			if (typeof e == "function") return e.$$typeof === A ? null : e.displayName || e.name || null;
			if (typeof e == "string") return e;
			switch (e) {
				case y: return "Fragment";
				case x: return "Profiler";
				case b: return "StrictMode";
				case T: return "Suspense";
				case E: return "SuspenseList";
				case k: return "Activity";
			}
			if (typeof e == "object") switch (typeof e.tag == "number" && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), e.$$typeof) {
				case v: return "Portal";
				case C: return e.displayName || "Context";
				case S: return (e._context.displayName || "Context") + ".Consumer";
				case w:
					var n = e.render;
					return e = e.displayName, e ||= (e = n.displayName || n.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
				case D: return n = e.displayName || null, n === null ? t(e.type) || "Memo" : n;
				case O:
					n = e._payload, e = e._init;
					try {
						return t(e(n));
					} catch {}
			}
			return null;
		}
		function n(e) {
			return "" + e;
		}
		function i(e) {
			try {
				n(e);
				var t = !1;
			} catch {
				t = !0;
			}
			if (t) {
				t = console;
				var i = t.error, a = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
				return i.call(t, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", a), n(e);
			}
		}
		function a(e) {
			if (e === y) return "<>";
			if (typeof e == "object" && e && e.$$typeof === O) return "<...>";
			try {
				var n = t(e);
				return n ? "<" + n + ">" : "<...>";
			} catch {
				return "<...>";
			}
		}
		function o() {
			var e = j.A;
			return e === null ? null : e.getOwner();
		}
		function s() {
			return Error("react-stack-top-frame");
		}
		function c(e) {
			if (M.call(e, "key")) {
				var t = Object.getOwnPropertyDescriptor(e, "key").get;
				if (t && t.isReactWarning) return !1;
			}
			return e.key !== void 0;
		}
		function l(e, t) {
			function n() {
				F || (F = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", t));
			}
			n.isReactWarning = !0, Object.defineProperty(e, "key", {
				get: n,
				configurable: !0
			});
		}
		function u() {
			var e = t(this.type);
			return I[e] || (I[e] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")), e = this.props.ref, e === void 0 ? null : e;
		}
		function d(e, t, n, i, a, o) {
			var s = n.ref;
			return e = {
				$$typeof: _,
				type: e,
				key: t,
				props: n,
				_owner: i
			}, (s === void 0 ? null : s) === null ? Object.defineProperty(e, "ref", {
				enumerable: !1,
				value: null
			}) : Object.defineProperty(e, "ref", {
				enumerable: !1,
				get: u
			}), e._store = {}, Object.defineProperty(e._store, "validated", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: 0
			}), Object.defineProperty(e, "_debugInfo", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: null
			}), Object.defineProperty(e, "_debugStack", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: a
			}), Object.defineProperty(e, "_debugTask", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: o
			}), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
		}
		function p(e, n, a, s, u, f) {
			var p = n.children;
			if (p !== void 0) if (s) if (N(p)) {
				for (s = 0; s < p.length; s++) m(p[s]);
				Object.freeze && Object.freeze(p);
			} else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
			else m(p);
			if (M.call(n, "key")) {
				p = t(e);
				var h = Object.keys(n).filter(function(e) {
					return e !== "key";
				});
				s = 0 < h.length ? "{key: someKey, " + h.join(": ..., ") + ": ...}" : "{key: someKey}", ee[p + s] || (h = 0 < h.length ? "{" + h.join(": ..., ") + ": ...}" : "{}", console.error("A props object containing a \"key\" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />", s, p, h, p), ee[p + s] = !0);
			}
			if (p = null, a !== void 0 && (i(a), p = "" + a), c(n) && (i(n.key), p = "" + n.key), "key" in n) for (var g in a = {}, n) g !== "key" && (a[g] = n[g]);
			else a = n;
			return p && l(a, typeof e == "function" ? e.displayName || e.name || "Unknown" : e), d(e, p, a, o(), u, f);
		}
		function m(e) {
			h(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e && e.$$typeof === O && (e._payload.status === "fulfilled" ? h(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
		}
		function h(e) {
			return typeof e == "object" && !!e && e.$$typeof === _;
		}
		var g = require_react(), _ = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), S = Symbol.for("react.consumer"), C = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), D = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), k = Symbol.for("react.activity"), A = Symbol.for("react.client.reference"), j = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, M = Object.prototype.hasOwnProperty, N = Array.isArray, P = console.createTask ? console.createTask : function() {
			return null;
		};
		g = { react_stack_bottom_frame: function(e) {
			return e();
		} };
		var F, I = {}, L = g.react_stack_bottom_frame.bind(g, s)(), R = P(a(s)), ee = {};
		e.Fragment = y, e.jsx = function(e, t, n) {
			var i = 1e4 > j.recentlyCreatedOwnerStacks++;
			return p(e, t, n, !1, i ? Error("react-stack-top-frame") : L, i ? P(a(e)) : R);
		}, e.jsxs = function(e, t, n) {
			var i = 1e4 > j.recentlyCreatedOwnerStacks++;
			return p(e, t, n, !0, i ? Error("react-stack-top-frame") : L, i ? P(a(e)) : R);
		};
	})();
})), import_jsx_runtime = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((e, t) => {
	process.env.NODE_ENV === "production" ? t.exports = require_react_jsx_runtime_production() : t.exports = require_react_jsx_runtime_development();
})))()), ChevronDown_default = ({ size: e = 24,...t }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: e,
	height: e,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "2",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	...t,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m6 9 6 6 6-6" })
}), ChevronUp_default = ({ size: e = 24,...t }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: e,
	height: e,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "2",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	...t,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m18 15-6-6-6 6" })
}), getButtonClasses = (e = "default", t = "default") => cn("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
	default: "bg-primary text-primary-foreground hover:bg-primary/90",
	ghost: "hover:bg-accent hover:text-accent-foreground"
}[e], { default: "h-10 px-4 py-2" }[t]), Card = ({ children: e, asForm: t = !1, size: n = "sm", padding: i = 4, background: a = "bg-card", collapsed: o = !1, confirm: s, cancel: c, status: l, theme: u, className: d, style: f }) => {
	let [p, m] = (0, import_react.useState)(o), h = {
		sm: "w-full max-w-[360px]",
		md: "w-full max-w-[440px]",
		lg: "w-full max-w-[560px]",
		full: "w-full"
	}, g = typeof a == "string" && !a.startsWith("bg-") ? { background: a } : {}, _ = typeof a == "string" && a.startsWith("bg-") ? a : "bg-card", v = () => typeof i == "number" ? { padding: `${i * .25}rem` } : typeof i == "string" ? { padding: i } : typeof i == "object" && i ? {
		paddingTop: i.top ? `${i.top * .25}rem` : void 0,
		paddingRight: i.right ? `${i.right * .25}rem` : void 0,
		paddingBottom: i.bottom ? `${i.bottom * .25}rem` : void 0,
		paddingLeft: i.left ? `${i.left * .25}rem` : void 0
	} : {}, y = t ? "form" : "div", b = s || c, S = (e) => {
		e && console.log("Action triggered:", e);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(y, {
		className: cn("rounded-lg border text-card-foreground shadow-sm flex flex-col", h[n], _, u, d),
		style: {
			...g,
			...f
		},
		children: [
			l && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-4 py-2 border-b",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs font-semibold",
					children: l.label
				})
			}),
			!p && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex-grow",
				style: v(),
				children: e
			}),
			b && !p && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-end items-center gap-2 p-4 border-t bg-muted/50",
				children: [c && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: getButtonClasses("ghost"),
					onClick: () => S(c.action),
					children: c.label
				}), s && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: t ? "submit" : "button",
					className: getButtonClasses("default"),
					onClick: () => S(s.action),
					children: s.label
				})]
			}),
			!!o && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => m(!p),
				className: "w-full text-center py-2 text-xs text-muted-foreground hover:bg-muted/50 border-t",
				children: p ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-center gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown_default, { size: 14 }), " Show content"]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-center gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp_default, { size: 14 }), " Hide content"]
				})
			})
		]
	});
};
const Box = (e) => {
	let { className: t, direction: n = "col", align: i, justify: a, wrap: o, children: s, style: c, gap: l, padding: u, width: d, height: f, minHeight: p, radius: m, background: h, border: g, flex: _,...v } = e, y = n === "row" ? "flex-row" : "flex-col", b = {
		start: "items-start",
		center: "items-center",
		end: "items-end",
		stretch: "items-stretch"
	}, x = {
		start: "justify-start",
		center: "justify-center",
		end: "justify-end",
		between: "justify-between",
		around: "justify-around"
	}, S = {
		nowrap: "flex-nowrap",
		wrap: "flex-wrap",
		"wrap-reverse": "flex-wrap-reverse"
	}, C = () => typeof u == "number" ? { padding: `${u * .25}rem` } : typeof u == "string" ? { padding: u } : typeof u == "object" && u ? {
		paddingTop: u.top ? `${u.top * .25}rem` : void 0,
		paddingRight: u.right ? `${u.right * .25}rem` : void 0,
		paddingBottom: u.bottom ? `${u.bottom * .25}rem` : void 0,
		paddingLeft: u.left ? `${u.left * .25}rem` : void 0
	} : {}, w = () => typeof g == "number" ? { borderWidth: `${g}px` } : typeof g == "object" && g && ("size" in g || "color" in g || "style" in g) ? {
		borderWidth: typeof g.size == "number" ? `${g.size}px` : g.size,
		borderColor: g.color,
		borderStyle: g.style
	} : {}, T = {
		...c,
		...C(),
		...w(),
		gap: typeof l == "number" ? `${l * .25}rem` : l,
		width: typeof d == "number" ? `${d}px` : d,
		height: typeof f == "number" ? `${f}px` : f,
		minHeight: typeof p == "number" ? `${p}px` : p,
		borderRadius: m,
		backgroundColor: typeof h == "string" ? h : void 0,
		flex: _
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("flex", y, i && b[i], a && x[a], o && S[o], t),
		style: T,
		...v,
		children: s
	});
};
Box.displayName = "Box";
const Row = (e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
	direction: "row",
	...e
});
Row.displayName = "Row";
const Col = (e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
	direction: "col",
	...e
});
Col.displayName = "Col";
var Separator = import_react.forwardRef(({ className: e, orientation: t = "horizontal",...n }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref: i,
	className: cn("shrink-0 bg-border", t === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", e),
	...n
}));
Separator.displayName = "Separator";
const Spacer = ({ minSize: e = "auto" }) => {
	let t = {
		flex: "1 1 auto",
		minWidth: typeof e == "number" ? `${e}px` : e,
		minHeight: typeof e == "number" ? `${e}px` : e
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: t });
};
Spacer.displayName = "Spacer";
const Divider = ({ color: e, size: t = 1, spacing: n, flush: i, className: a }) => {
	let o = {
		height: typeof t == "number" ? `${t}px` : t,
		backgroundColor: typeof e == "string" ? e : void 0,
		marginTop: n ? typeof n == "number" ? `${n * .25}rem` : n : void 0,
		marginBottom: n ? typeof n == "number" ? `${n * .25}rem` : n : void 0
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("w-full bg-border", i ? "my-0" : "my-4", a),
		style: o
	});
};
Divider.displayName = "Divider";
const Form = (e) => {
	let { onSubmitAction: t,...n } = e;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
		onSubmit: (e) => {
			e.preventDefault(), t && console.log("Form submitted, dispatching action:", t);
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, { ...n })
	});
};
Form.displayName = "Form";
const Transition = ({ children: e }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: e });
Transition.displayName = "Transition";
const Text = ({ value: e, size: t = "md", weight: n = "normal", color: i, italic: a, className: o, width: s }) => {
	let c = {
		xs: "text-xs",
		sm: "text-sm",
		md: "text-base",
		lg: "text-lg",
		xl: "text-xl"
	}, l = {
		normal: "font-normal",
		medium: "font-medium",
		semibold: "font-semibold",
		bold: "font-bold"
	}, u = {
		primary: "text-foreground",
		secondary: "text-muted-foreground",
		tertiary: "text-muted-foreground/60"
	}, d = i && u[i] ? u[i] : void 0, f = {
		width: s ? `${s}px` : void 0,
		color: i && !u[i] ? i : void 0
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn(c[t], l[n], d, a && "italic", o),
		style: f,
		children: e
	});
};
Text.displayName = "Text";
const Title = ({ value: e, size: t = "xl", weight: n = "semibold", color: i, className: a }) => {
	let o = {
		xs: "text-xs",
		sm: "text-sm",
		md: "text-base",
		lg: "text-lg",
		xl: "text-xl",
		"2xl": "text-2xl",
		"3xl": "text-3xl",
		"4xl": "text-4xl"
	}, s = {
		normal: "font-normal",
		medium: "font-medium",
		semibold: "font-semibold",
		bold: "font-bold"
	}, c = {
		primary: "text-foreground",
		secondary: "text-muted-foreground"
	}, l = i && c[i] ? c[i] : void 0, u = { color: i && !c[i] ? i : void 0 };
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		className: cn(o[t], s[n], l, a),
		style: u,
		children: e
	});
};
Title.displayName = "Title";
const Caption = ({ value: e, size: t = "sm", color: n = "secondary", weight: i = "normal", className: a }) => {
	let o = {
		xs: "text-xs",
		sm: "text-sm",
		md: "text-base",
		lg: "text-lg"
	}, s = {
		normal: "font-normal",
		medium: "font-medium",
		semibold: "font-semibold",
		bold: "font-bold"
	}, c = {
		primary: "text-foreground",
		secondary: "text-muted-foreground",
		tertiary: "text-muted-foreground/60"
	}, l = c[n] || void 0, u = { color: n && !c[n] ? n : void 0 };
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn(o[t], s[i], l, a),
		style: u,
		children: e
	});
};
Caption.displayName = "Caption";
var falsyToString = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e;
const cx = clsx, cva = (e, t) => (n) => {
	if (t?.variants == null) return cx(e, n?.class, n?.className);
	let { variants: i, defaultVariants: a } = t, o = Object.keys(i).map((e) => {
		let t = n?.[e], o = a?.[e];
		if (t === null) return null;
		let s = falsyToString(t) || falsyToString(o);
		return i[e][s];
	}), s = n && Object.entries(n).reduce((e, t) => {
		let [n, i] = t;
		return i === void 0 || (e[n] = i), e;
	}, {}), c = t?.compoundVariants?.reduce((e, t) => {
		let { class: n, className: i,...o } = t;
		return Object.entries(o).every((e) => {
			let [t, n] = e;
			return Array.isArray(n) ? n.includes({
				...a,
				...s
			}[t]) : {
				...a,
				...s
			}[t] === n;
		}) ? [
			...e,
			n,
			i
		] : e;
	}, []);
	return cx(e, o, c, n?.class, n?.className);
}, iconMap = { play: ({ size: e = 24,...t }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: e,
	height: e,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "2",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	...t,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", { points: "6 3 20 12 6 21 6 3" })
}) };
var buttonVariants = cva("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
			outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-10 px-4 py-2",
			sm: "h-9 rounded-md px-3",
			lg: "h-11 rounded-md px-8",
			icon: "h-10 w-10"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
}), Button = import_react.forwardRef(({ className: e, variant: t, size: n, iconStart: i, children: a,...o }, s) => {
	let c = i ? iconMap[i] : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		className: cn(buttonVariants({
			variant: t,
			size: n,
			className: e
		})),
		ref: s,
		...o,
		children: [c && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c, { className: "mr-2 h-4 w-4" }), a]
	});
});
Button.displayName = "Button";
var Image = import_react.forwardRef(({ className: e, src: t, alt: n, height: i, fit: a, style: o, flush: s,...c }, l) => {
	let u = a ? `object-${a}` : "";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		ref: l,
		src: t,
		alt: n,
		className: cn("w-full", u, !s && "rounded-md", e),
		style: {
			height: i ? `${i}px` : "auto",
			...o
		},
		...c
	});
});
Image.displayName = "Image";
const componentMap = {
	Card,
	Separator,
	Box,
	Row,
	Col,
	Spacer,
	Divider,
	Form,
	Transition,
	Text,
	Title,
	Caption,
	Button,
	Image
}, findUnknownComponents = (e, t) => {
	let n = /* @__PURE__ */ new Set(), i = (e) => {
		t.has(e.type) || n.add(e.type), e.children && e.children.forEach(i);
	};
	return e && i(e), n;
}, WidgetRenderer = ({ node: e, onError: t }) => {
	let n = import_react.useMemo(() => new Set(Object.keys(componentMap)), []), i = findUnknownComponents(e, n);
	if (import_react.useEffect(() => {
		if (t) if (i.size > 0) {
			let e = Array.from(i).map((e) => `未知组件类型: "${e}"`);
			t(e);
		} else t([]);
	}, [i, t]), i.size > 0) return null;
	let a = (e, t) => {
		let { type: n, children: i, label: o, key: s,...c } = e, l = componentMap[n];
		if (!l) return null;
		let u = i?.map((e, t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Fragment, { children: a(e, t) }, e.key || t));
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(l, {
			...c,
			children: o || u
		}, s || t);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: a(e) });
};
WidgetRenderer.displayName = "WidgetRenderer";
var knownComponentKeys = new Set(Object.keys(componentMap));
function renderToHtml(e) {
	if (!e || typeof e.type != "string") {
		let e = "错误: 无效的JSON格式。";
		return {
			html: `<div style="color:red;">${e}</div>`,
			errors: [e]
		};
	}
	let t = findUnknownComponents(e, knownComponentKeys);
	if (t.size > 0) return {
		html: "",
		errors: Array.from(t).map((e) => `未知组件类型: "${e}"`)
	};
	try {
		let t = import_react.createElement(WidgetRenderer, { node: e });
		return {
			html: (0, import_server_browser.renderToStaticMarkup)(t),
			errors: []
		};
	} catch (e) {
		let t = "错误: 渲染JSON时发生意外。";
		return console.error("Error rendering widget JSON to HTML:", e), {
			html: `<div style="color:red;">${t}</div>`,
			errors: [t]
		};
	}
}
export { renderToHtml };

//# sourceMappingURL=ag-ui.es.js.map