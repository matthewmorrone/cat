! function() {
	Function && Function.prototype && Function.prototype.bind && (/MSIE [678]/.test(navigator.userAgent) || (window.__twttr && window.__twttr.widgets && window.__twttr.widgets.loaded && window.twttr.widgets.load && window.twttr.widgets.load(), window.__twttr && window.__twttr.widgets && window.__twttr.widgets.init || ! function(t) {
		function e(n) {
			if (r[n]) return r[n].exports;
			var i = r[n] = {
				exports: {},
				id: n,
				loaded: !1
			};
			return t[n].call(i.exports, i, i.exports, e), i.loaded = !0, i.exports
		}
		var n = window.__twttrll;
		window.__twttrll = function(r, o) {
			for (var a, s, u = 0, c = []; u < r.length; u++) s = r[u], i[s] && c.push.apply(c, i[s]), i[s] = 0;
			for (a in o) t[a] = o[a];
			for (n && n(r, o); c.length;) c.shift().call(null, null, e)
		};
		var r = {},
			i = {
				0: 0
			};
		return e.e = function(t, e) {}, e.e = function(t, n) {
			if (0 === i[t]) return n.call(null, null, e);
			if (void 0 !== i[t]) i[t].push(n);
			else {
				i[t] = [n];
				var r = document.getElementsByTagName("head")[0],
					o = document.createElement("script");
				o.type = "text/javascript", o.charset = "utf-8", o.async = !0, o.onerror = function() {
					var e = i[t];
					for (o.onerror = null, delete i[t]; e.length;) e.shift().call(null, new Error("failed to load chunk"))
				}, o.src = e.p + "js/" + ({
					1: "button",
					2: "grid",
					3: "moment",
					4: "periscope_on_air",
					5: "timeline",
					6: "tweet"
				}[t] || t) + "." + {
					1: "c44c2dc193c555561d5830b3b543eb26",
					2: "c640758c33054682ef69864d35db395b",
					3: "3bf10f4afa599e77081fdca7025041bc",
					4: "14743e2095f533e6dc7d9239157fd129",
					5: "2aa155a26b98cb156d16d48423139a74",
					6: "b129d577b1b88a1f2bd90a9ca7dd085c"
				}[t] + ".js", r.appendChild(o)
			}
		}, e.m = t, e.c = r, e.p = "https://platform.twitter.com/", e(0)
	}([function(t, e, n) {
		var r, i = n(1),
			o = n(9),
			a = n(19),
			s = n(17),
			u = n(21),
			s = n(17),
			c = n(22),
			f = n(34),
			l = n(32),
			d = n(43),
			h = n(204),
			p = n(37),
			v = n(11),
			m = "_e";
		s.set("widgets.init", !0), u.set("init", !0), r = new i, a.exposeReadyPromise(r.promise, u.base, m), u.set("widgets", h), u.set("widgets.load", d.load), u.set("events", l), s.init("host", "platform.twitter.com"), v(function() {
			r.resolve(u.base), c.attachTo(o), f.start("widgets-js-load"), d.loadPage().then(function() {
				f.endAndTrack("render", "widgets-js-load", "page", {
					widget_origin: p.rootDocumentLocation(),
					widget_frame: p.isFramed() && p.currentDocumentLocation()
				})
			})
		})
	}, function(t, e, n) {
		function r() {
			var t = this;
			this.promise = new i(function(e, n) {
				t.resolve = e, t.reject = n
			})
		}
		var i = n(2);
		t.exports = r
	}, function(t, e, n) {
		var r = n(3).Promise,
			i = n(7),
			o = n(8);
		t.exports = o.hasPromiseSupport() ? i.Promise : r
	}, function(t, e, n) {
		var r;
		(function(t) {
			/*!
			 * @overview es6-promise - a tiny implementation of Promises/A+.
			 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
			 * @license   Licensed under MIT license
			 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
			 * @version   2.3.0
			 */
			(function() {
				"use strict";

				function i(t) {
					return "function" == typeof t || "object" == typeof t && null !== t
				}

				function o(t) {
					return "function" == typeof t
				}

				function a(t) {
					return "object" == typeof t && null !== t
				}

				function s(t) {
					H = t
				}

				function u(t) {
					J = t
				}

				function c() {
					var t = process.nextTick,
						e = process.versions.node.match(/^(?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+)$/);
					return Array.isArray(e) && "0" === e[1] && "10" === e[2] && (t = setImmediate),
						function() {
							t(p)
						}
				}

				function f() {
					return function() {
						V(p)
					}
				}

				function l() {
					var t = 0,
						e = new Z(p),
						n = document.createTextNode("");
					return e.observe(n, {
							characterData: !0
						}),
						function() {
							n.data = t = ++t % 2
						}
				}

				function d() {
					var t = new MessageChannel;
					return t.port1.onmessage = p,
						function() {
							t.port2.postMessage(0)
						}
				}

				function h() {
					return function() {
						setTimeout(p, 1)
					}
				}

				function p() {
					for (var t = 0; Q > t; t += 2) {
						var e = et[t],
							n = et[t + 1];
						e(n), et[t] = void 0, et[t + 1] = void 0
					}
					Q = 0
				}

				function v() {
					try {
						var t = n(5);
						return V = t.runOnLoop || t.runOnContext, f()
					}
					catch (e) {
						return h()
					}
				}

				function m() {}

				function g() {
					return new TypeError("You cannot resolve a promise with itself")
				}

				function w() {
					return new TypeError("A promises callback cannot return that same promise.")
				}

				function y(t) {
					try {
						return t.then
					}
					catch (e) {
						return ot.error = e, ot
					}
				}

				function b(t, e, n, r) {
					try {
						t.call(e, n, r)
					}
					catch (i) {
						return i
					}
				}

				function E(t, e, n) {
					J(function(t) {
						var r = !1,
							i = b(n, e, function(n) {
								r || (r = !0, e !== n ? A(t, n) : C(t, n))
							}, function(e) {
								r || (r = !0, N(t, e))
							}, "Settle: " + (t._label || " unknown promise"));
						!r && i && (r = !0, N(t, i))
					}, t)
				}

				function x(t, e) {
					e._state === rt ? C(t, e._result) : e._state === it ? N(t, e._result) : R(e, void 0, function(e) {
						A(t, e)
					}, function(e) {
						N(t, e)
					})
				}

				function _(t, e) {
					if (e.constructor === t.constructor) x(t, e);
					else {
						var n = y(e);
						n === ot ? N(t, ot.error) : void 0 === n ? C(t, e) : o(n) ? E(t, e, n) : C(t, e)
					}
				}

				function A(t, e) {
					t === e ? N(t, g()) : i(e) ? _(t, e) : C(t, e)
				}

				function T(t) {
					t._onerror && t._onerror(t._result), I(t)
				}

				function C(t, e) {
					t._state === nt && (t._result = e, t._state = rt, 0 !== t._subscribers.length && J(I, t))
				}

				function N(t, e) {
					t._state === nt && (t._state = it, t._result = e, J(T, t))
				}

				function R(t, e, n, r) {
					var i = t._subscribers,
						o = i.length;
					t._onerror = null, i[o] = e, i[o + rt] = n, i[o + it] = r, 0 === o && t._state && J(I, t)
				}

				function I(t) {
					var e = t._subscribers,
						n = t._state;
					if (0 !== e.length) {
						for (var r, i, o = t._result, a = 0; a < e.length; a += 3) r = e[a], i = e[a + n], r ? P(n, r, i, o) : i(o);
						t._subscribers.length = 0
					}
				}

				function j() {
					this.error = null
				}

				function S(t, e) {
					try {
						return t(e)
					}
					catch (n) {
						return at.error = n, at
					}
				}

				function P(t, e, n, r) {
					var i, a, s, u, c = o(n);
					if (c) {
						if (i = S(n, r), i === at ? (u = !0, a = i.error, i = null) : s = !0, e === i) return void N(e, w())
					}
					else i = r, s = !0;
					e._state !== nt || (c && s ? A(e, i) : u ? N(e, a) : t === rt ? C(e, i) : t === it && N(e, i))
				}

				function O(t, e) {
					try {
						e(function(e) {
							A(t, e)
						}, function(e) {
							N(t, e)
						})
					}
					catch (n) {
						N(t, n)
					}
				}

				function k(t, e) {
					var n = this;
					n._instanceConstructor = t, n.promise = new t(m), n._validateInput(e) ? (n._input = e, n.length = e.length, n._remaining = e.length, n._init(), 0 === n.length ? C(n.promise, n._result) : (n.length = n.length || 0, n._enumerate(), 0 === n._remaining && C(n.promise, n._result))) : N(n.promise, n._validationError())
				}

				function L(t) {
					return new st(this, t).promise
				}

				function D(t) {
					function e(t) {
						A(i, t)
					}

					function n(t) {
						N(i, t)
					}
					var r = this,
						i = new r(m);
					if (!K(t)) return N(i, new TypeError("You must pass an array to race.")), i;
					for (var o = t.length, a = 0; i._state === nt && o > a; a++) R(r.resolve(t[a]), void 0, e, n);
					return i
				}

				function z(t) {
					var e = this;
					if (t && "object" == typeof t && t.constructor === e) return t;
					var n = new e(m);
					return A(n, t), n
				}

				function F(t) {
					var e = this,
						n = new e(m);
					return N(n, t), n
				}

				function M() {
					throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
				}

				function U() {
					throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
				}

				function B(t) {
					this._id = dt++, this._state = void 0, this._result = void 0, this._subscribers = [], m !== t && (o(t) || M(), this instanceof B || U(), O(this, t))
				}

				function W() {
					var t;
					if ("undefined" != typeof global) t = global;
					else if ("undefined" != typeof self) t = self;
					else try {
						t = Function("return this")()
					}
					catch (e) {
						throw new Error("polyfill failed because global object is unavailable in this environment")
					}
					var n = t.Promise;
					(!n || "[object Promise]" !== Object.prototype.toString.call(n.resolve()) || n.cast) && (t.Promise = ht)
				}
				var q;
				q = Array.isArray ? Array.isArray : function(t) {
					return "[object Array]" === Object.prototype.toString.call(t)
				};
				var V, H, $, K = q,
					Q = 0,
					J = ({}.toString, function(t, e) {
						et[Q] = t, et[Q + 1] = e, Q += 2, 2 === Q && (H ? H(p) : $())
					}),
					Y = "undefined" != typeof window ? window : void 0,
					G = Y || {},
					Z = G.MutationObserver || G.WebKitMutationObserver,
					X = "undefined" != typeof process && "[object process]" === {}.toString.call(process),
					tt = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
					et = new Array(1e3);
				$ = X ? c() : Z ? l() : tt ? d() : void 0 === Y ? v() : h();
				var nt = void 0,
					rt = 1,
					it = 2,
					ot = new j,
					at = new j;
				k.prototype._validateInput = function(t) {
					return K(t)
				}, k.prototype._validationError = function() {
					return new Error("Array Methods must be provided an Array")
				}, k.prototype._init = function() {
					this._result = new Array(this.length)
				};
				var st = k;
				k.prototype._enumerate = function() {
					for (var t = this, e = t.length, n = t.promise, r = t._input, i = 0; n._state === nt && e > i; i++) t._eachEntry(r[i], i)
				}, k.prototype._eachEntry = function(t, e) {
					var n = this,
						r = n._instanceConstructor;
					a(t) ? t.constructor === r && t._state !== nt ? (t._onerror = null, n._settledAt(t._state, e, t._result)) : n._willSettleAt(r.resolve(t), e) : (n._remaining--, n._result[e] = t)
				}, k.prototype._settledAt = function(t, e, n) {
					var r = this,
						i = r.promise;
					i._state === nt && (r._remaining--, t === it ? N(i, n) : r._result[e] = n), 0 === r._remaining && C(i, r._result)
				}, k.prototype._willSettleAt = function(t, e) {
					var n = this;
					R(t, void 0, function(t) {
						n._settledAt(rt, e, t)
					}, function(t) {
						n._settledAt(it, e, t)
					})
				};
				var ut = L,
					ct = D,
					ft = z,
					lt = F,
					dt = 0,
					ht = B;
				B.all = ut, B.race = ct, B.resolve = ft, B.reject = lt, B._setScheduler = s, B._setAsap = u, B._asap = J, B.prototype = {
					constructor: B,
					then: function(t, e) {
						var n = this,
							r = n._state;
						if (r === rt && !t || r === it && !e) return this;
						var i = new this.constructor(m),
							o = n._result;
						if (r) {
							var a = arguments[r - 1];
							J(function() {
								P(r, i, a, o)
							})
						}
						else R(n, i, t, e);
						return i
					},
					"catch": function(t) {
						return this.then(null, t)
					}
				};
				var pt = W,
					vt = {
						Promise: ht,
						polyfill: pt
					};
				n(6).amd ? (r = function() {
					return vt
				}.call(e, n, e, t), !(void 0 !== r && (t.exports = r))) : "undefined" != typeof t && t.exports && (t.exports = vt)
			}).call(this)
		}).call(e, n(4)(t))
	}, function(t, e) {
		t.exports = function(t) {
			return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children = [], t.webpackPolyfill = 1), t
		}
	}, function(t, e) {}, function(t, e) {
		t.exports = function() {
			throw new Error("define cannot be used indirect")
		}
	}, function(t, e) {
		t.exports = window
	}, function(t, e, n) {
		function r(t) {
			return t = t || m, t.devicePixelRatio ? t.devicePixelRatio >= 1.5 : t.matchMedia ? t.matchMedia("only screen and (min-resolution: 144dpi)").matches : !1
		}

		function i(t) {
			return t = t || _, /(Trident|MSIE \d)/.test(t)
		}

		function o(t) {
			return t = t || _, /MSIE 9/.test(t)
		}

		function a(t) {
			return t = t || _, /(iPad|iPhone|iPod)/.test(t)
		}

		function s(t) {
			return t = t || _, /^Mozilla\/5\.0 \(Linux; (U; )?Android/.test(t)
		}

		function u() {
			return A
		}

		function c(t, e) {
			return t = t || m, e = e || _, t.postMessage && !(i(e) && t.opener)
		}

		function f(t) {
			t = t || v;
			try {
				return !!t.plugins["Shockwave Flash"] || !!new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
			}
			catch (e) {
				return !1
			}
		}

		function l(t, e, n) {
			return t = t || m, e = e || v, n = n || _, "ontouchstart" in t || /Opera Mini/.test(n) || e.msMaxTouchPoints > 0
		}

		function d() {
			var t = p.body.style;
			return void 0 !== t.transition || void 0 !== t.webkitTransition || void 0 !== t.mozTransition || void 0 !== t.oTransition || void 0 !== t.msTransition
		}

		function h() {
			return !!(m.Promise && m.Promise.resolve && m.Promise.reject && m.Promise.all && m.Promise.race && function() {
				var t;
				return new m.Promise(function(e) {
					t = e
				}), b.isType("function", t)
			}())
		}
		var p = n(9),
			v = n(10),
			m = n(7),
			g = n(11),
			w = n(12),
			y = n(15),
			b = n(14),
			E = n(16),
			x = n(17),
			_ = v.userAgent,
			A = !1,
			T = !1,
			C = "twitter-csp-test";
		x.set("verifyCSP", function(t) {
			var e = p.getElementById(C);
			T = !0, A = !!t, e && e.parentNode.removeChild(e)
		}), g(function() {
			var t;
			return y.asBoolean(E.val("widgets:csp")) ? A = !0 : (t = p.createElement("script"), t.id = C, t.text = x.fullPath("verifyCSP") + "(false);", p.body.appendChild(t), void m.setTimeout(function() {
				T || (w.warn('TWITTER: Content Security Policy restrictions may be applied to your site. Add <meta name="twitter:widgets:csp" content="on"> to supress this warning.'), w.warn("TWITTER: Please note: Not all embedded timeline and embedded Tweet functionality is supported when CSP is applied."))
			}, 5e3))
		}), t.exports = {
			retina: r,
			anyIE: i,
			ie9: o,
			ios: a,
			android: s,
			cspEnabled: u,
			flashEnabled: f,
			canPostMessage: c,
			touch: l,
			cssTransitions: d,
			hasPromiseSupport: h
		}
	}, function(t, e) {
		t.exports = document
	}, function(t, e) {
		t.exports = navigator
	}, function(t, e, n) {
		function r() {
			c = 1;
			for (var t = 0, e = f.length; e > t; t++) f[t]()
		}
		var i, o, a, s = n(9),
			u = n(7),
			c = 0,
			f = [],
			l = !1,
			d = s.createElement("a");
		/^loade|c/.test(s.readyState) && (c = 1), s.addEventListener && s.addEventListener("DOMContentLoaded", o = function() {
			s.removeEventListener("DOMContentLoaded", o, l), r()
		}, l), d.doScroll && s.attachEvent("onreadystatechange", i = function() {
			/^c/.test(s.readyState) && (s.detachEvent("onreadystatechange", i), r())
		}), a = d.doScroll ? function(t) {
			u.self != u.top ? c ? t() : f.push(t) : ! function() {
				try {
					d.doScroll("left")
				}
				catch (e) {
					return setTimeout(function() {
						a(t)
					}, 50)
				}
				t()
			}()
		} : function(t) {
			c ? t() : f.push(t)
		}, t.exports = a
	}, function(t, e, n) {
		function r() {
			c("info", d.toRealArray(arguments))
		}

		function i() {
			c("warn", d.toRealArray(arguments))
		}

		function o() {
			c("error", d.toRealArray(arguments))
		}

		function a(t) {
			v && (p[t] = u())
		}

		function s(t) {
			var e;
			v && (p[t] ? (e = u(), r("_twitter", t, e - p[t])) : o("timeEnd() called before time() for id: ", t))
		}

		function u() {
			return l.performance && +l.performance.now() || +new Date
		}

		function c(t, e) {
			if (l[h] && l[h][t]) switch (e.length) {
				case 1:
					l[h][t](e[0]);
					break;
				case 2:
					l[h][t](e[0], e[1]);
					break;
				case 3:
					l[h][t](e[0], e[1], e[2]);
					break;
				case 4:
					l[h][t](e[0], e[1], e[2], e[3]);
					break;
				case 5:
					l[h][t](e[0], e[1], e[2], e[3], e[4]);
					break;
				default:
					0 !== e.length && l[h].warn && l[h].warn("too many params passed to logger." + t)
			}
		}
		var f = n(13),
			l = n(7),
			d = n(14),
			h = ["con", "sole"].join(""),
			p = {},
			v = d.contains(f.href, "tw_debug=true");
		t.exports = {
			info: r,
			warn: i,
			error: o,
			time: a,
			timeEnd: s
		}
	}, function(t, e) {
		t.exports = location
	}, function(t, e, n) {
		function r(t) {
			return l(arguments).slice(1).forEach(function(e) {
				o(e, function(e, n) {
					t[e] = n
				})
			}), t
		}

		function i(t) {
			return o(t, function(e, n) {
				u(n) && (i(n), c(n) && delete t[e]), (void 0 === n || null === n || "" === n) && delete t[e]
			}), t
		}

		function o(t, e) {
			for (var n in t)(!t.hasOwnProperty || t.hasOwnProperty(n)) && e(n, t[n]);
			return t
		}

		function a(t) {
			return {}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
		}

		function s(t, e) {
			return t == a(e)
		}

		function u(t) {
			return t === Object(t)
		}

		function c(t) {
			if (!u(t)) return !1;
			if (Object.keys) return !Object.keys(t).length;
			for (var e in t)
				if (t.hasOwnProperty(e)) return !1;
			return !0
		}

		function f(t, e) {
			h.setTimeout(function() {
				t.call(e || null)
			}, 0)
		}

		function l(t) {
			return t ? Array.prototype.slice.call(t) : []
		}

		function d(t, e) {
			return t && t.indexOf ? t.indexOf(e) > -1 : !1
		}
		var h = n(7);
		t.exports = {
			aug: r,
			async: f,
			compact: i,
			contains: d,
			forIn: o,
			isObject: u,
			isEmptyObject: c,
			toType: a,
			isType: s,
			toRealArray: l
		}
	}, function(t, e, n) {
		function r(t) {
			return void 0 !== t && null !== t && "" !== t
		}

		function i(t) {
			return a(t) && t % 1 === 0
		}

		function o(t) {
			return a(t) && !i(t)
		}

		function a(t) {
			return r(t) && !isNaN(t)
		}

		function s(t) {
			return r(t) && "array" == p.toType(t)
		}

		function u(t) {
			return p.contains(m, t)
		}

		function c(t) {
			return p.contains(v, t)
		}

		function f(t) {
			return r(t) ? c(t) ? !0 : u(t) ? !1 : !!t : !1
		}

		function l(t) {
			return a(t) ? t : void 0
		}

		function d(t) {
			return o(t) ? t : void 0
		}

		function h(t) {
			return i(t) ? parseInt(t, 10) : void 0
		}
		var p = n(14),
			v = [!0, 1, "1", "on", "ON", "true", "TRUE", "yes", "YES"],
			m = [!1, 0, "0", "off", "OFF", "false", "FALSE", "no", "NO"];
		t.exports = {
			hasValue: r,
			isInt: i,
			isFloat: o,
			isNumber: a,
			isArray: s,
			isTruthValue: c,
			isFalseValue: u,
			asInt: h,
			asFloat: d,
			asNumber: l,
			asBoolean: f
		}
	}, function(t, e, n) {
		function r(t) {
			var e, n, r, i = 0;
			for (o = {}, t = t || a, e = t.getElementsByTagName("meta"); n = e[i]; i++) /^twitter:/.test(n.name) && (r = n.name.replace(/^twitter:/, ""), o[r] = n.content)
		}

		function i(t) {
			return o[t]
		}
		var o, a = n(9);
		r(), t.exports = {
			init: r,
			val: i
		}
	}, function(t, e, n) {
		var r = n(18);
		t.exports = new r("__twttr")
	}, function(t, e, n) {
		function r(t) {
			return s.isType("string", t) ? t.split(".") : s.isType("array", t) ? t : []
		}

		function i(t, e) {
			var n = r(e),
				i = n.slice(0, -1);
			return i.reduce(function(t, e, n) {
				if (t[e] = t[e] || {}, !s.isObject(t[e])) throw new Error(i.slice(0, n + 1).join(".") + " is already defined with a value.");
				return t[e]
			}, t)
		}

		function o(t, e) {
			e = e || a, e[t] = e[t] || {}, Object.defineProperty(this, "base", {
				value: e[t]
			}), Object.defineProperty(this, "name", {
				value: t
			})
		}
		var a = n(7),
			s = n(14);
		s.aug(o.prototype, {
			get: function(t) {
				var e = r(t);
				return e.reduce(function(t, e) {
					return s.isObject(t) ? t[e] : void 0
				}, this.base)
			},
			set: function(t, e, n) {
				var o = r(t),
					a = i(this.base, t),
					s = o.slice(-1);
				return n && s in a ? a[s] : a[s] = e
			},
			init: function(t, e) {
				return this.set(t, e, !0)
			},
			unset: function(t) {
				var e = r(t),
					n = this.get(e.slice(0, -1));
				n && delete n[e.slice(-1)]
			},
			aug: function(t) {
				var e = this.get(t),
					n = s.toRealArray(arguments).slice(1);
				if (e = "undefined" != typeof e ? e : {}, n.unshift(e), !n.every(s.isObject)) throw new Error("Cannot augment non-object.");
				return this.set(t, s.aug.apply(null, n))
			},
			call: function(t) {
				var e = this.get(t),
					n = s.toRealArray(arguments).slice(1);
				if (!s.isType("function", e)) throw new Error("Function " + t + "does not exist.");
				return e.apply(null, n)
			},
			fullPath: function(t) {
				var e = r(t);
				return e.unshift(this.name), e.join(".")
			}
		}), t.exports = o
	}, function(t, e, n) {
		function r(t, e, n) {
			e.ready = i(t.then, t), n && Array.isArray(e[n]) && (e[n].forEach(i(t.then, t)), delete e[n])
		}
		var i = n(20);
		t.exports = {
			exposeReadyPromise: r
		}
	}, function(t, e, n) {
		var r = n(14);
		t.exports = function(t, e) {
			var n = Array.prototype.slice.call(arguments, 2);
			return function() {
				var i = r.toRealArray(arguments);
				return t.apply(e, n.concat(i))
			}
		}
	}, function(t, e, n) {
		var r = n(18);
		t.exports = new r("twttr")
	}, function(t, e, n) {
		function r(t) {
			var e = ~a.host.indexOf("poptip.com") ? "https://poptip.com" : a.href,
				n = "original_referer=" + e;
			return [t, n].join(-1 == t.indexOf("?") ? "?" : "&")
		}

		function i(t) {
			var e, n;
			t.altKey || t.metaKey || t.shiftKey || (e = u.closest(function(t) {
				return "A" === t.tagName || "AREA" === t.tagName
			}, t.target), e && f.isIntentURL(e.href) && (n = r(e.href), n = n.replace(/^http[:]/, "https:"), n = n.replace(/^\/\//, "https://"), c.open(n, e), s.preventDefault(t)))
		}

		function o(t) {
			t.addEventListener("click", i, !1)
		}
		var a = n(13),
			s = n(23),
			u = n(25),
			c = n(26),
			f = n(27);
		t.exports = {
			attachTo: o
		}
	}, function(t, e, n) {
		function r(t) {
			var e = t.getAttribute("data-twitter-event-id");
			return e ? e : (t.setAttribute("data-twitter-event-id", ++g), g)
		}

		function i(t, e, n) {
			var r = 0,
				i = t && t.length || 0;
			for (r = 0; i > r; r++)
				if (t[r].call(e, n, e), n.ceaseImmediately) return !1
		}

		function o(t, e, n) {
			for (var r = n || t.target || t.srcElement, a = v.list(r).map(function(t) {
					return "." + t
				}), s = a.concat(r.tagName), u = 0, c = s.length; c > u; u++)
				if (i(e[s[u]], r, t) === !1) return;
			t.cease || r !== this && o.call(this, t, e, r.parentElement || r.parentNode)
		}

		function a(t, e, n, r) {
			function i(r) {
				o.call(t, r, n[e])
			}
			s(t, i, e, r), t.addEventListener(e, i, !1)
		}

		function s(t, e, n, r) {
			t.id && (w[t.id] = w[t.id] || [], w[t.id].push({
				el: t,
				listener: e,
				type: n,
				rootId: r
			}))
		}

		function u(t) {
			var e = w[t];
			e && (e.forEach(function(t) {
				t.el.removeEventListener(t.type, t.listener, !1), delete m[t.rootId]
			}), delete w[t])
		}

		function c(t, e, n, i) {
			var o = r(t);
			m[o] = m[o] || {}, m[o][e] || (m[o][e] = {}, a(t, e, m[o], o)), m[o][e][n] = m[o][e][n] || [], m[o][e][n].push(i)
		}

		function f(t, e, n) {
			var i = r(e),
				a = m[i] && m[i];
			o.call(e, {
				target: n
			}, a[t])
		}

		function l(t) {
			return h(t), d(t), !1
		}

		function d(t) {
			t && t.preventDefault ? t.preventDefault() : t.returnValue = !1
		}

		function h(t) {
			t && (t.cease = !0) && t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0
		}

		function p(t) {
			t && (t.ceaseImmediately = !0, h(t), t.stopImmediatePropagation())
		}
		var v = n(24),
			m = {},
			g = -1,
			w = {};
		t.exports = {
			stop: l,
			stopPropagation: h,
			stopImmediatePropagation: p,
			preventDefault: d,
			delegate: c,
			simulate: f,
			removeDelegatesForWidget: u
		}
	}, function(t, e, n) {
		function r(t) {
			return new RegExp("\\b" + t + "\\b", "g")
		}

		function i(t, e) {
			return t.classList ? void t.classList.add(e) : void(r(e).test(t.className) || (t.className += " " + e))
		}

		function o(t, e) {
			return t.classList ? void t.classList.remove(e) : void(t.className = t.className.replace(r(e), " "))
		}

		function a(t, e, n) {
			return void 0 === n && t.classList && t.classList.toggle ? t.classList.toggle(e, n) : (n ? i(t, e) : o(t, e), n)
		}

		function s(t, e, n) {
			return t.classList && u(t, e) ? (o(t, e), void i(t, n)) : void(t.className = t.className.replace(r(e), n))
		}

		function u(t, e) {
			return t.classList ? t.classList.contains(e) : f.contains(c(t), e)
		}

		function c(t) {
			return f.toRealArray(t.classList ? t.classList : t.className.match(l))
		}
		var f = n(14),
			l = /\b([\w-_]+)\b/g;
		t.exports = {
			add: i,
			remove: o,
			replace: s,
			toggle: a,
			present: u,
			list: c
		}
	}, function(t, e, n) {
		function r(t) {
			var e = t.charAt(0);
			return "." === e ? function(e) {
				var n = e.className ? e.className.split(/\s+/) : [];
				return o.contains(n, t.slice(1))
			} : "#" === e ? function(e) {
				return e.id === t.slice(1)
			} : function(e) {
				return e.tagName === t.toUpperCase()
			}
		}

		function i(t, e, n) {
			var a;
			if (e) return n = n || e && e.ownerDocument, a = o.isType("function", t) ? t : r(t), e === n ? a(e) ? e : void 0 : a(e) ? e : i(a, e.parentNode, n)
		}
		var o = n(14);
		t.exports = {
			closest: i
		}
	}, function(t, e, n) {
		function r(t) {
			u.open(t)
		}

		function i(t, e) {
			var n = f.decodeURL(e);
			switch (t) {
				case "favorite":
				case "like":
					return {
						tweet_id: n.tweet_id
					};
				case "follow":
					return {
						screen_name: n.screen_name,
						user_id: n.user_id
					};
				case "retweet":
					return {
						source_tweet_id: n.tweet_id
					};
				default:
					return {}
			}
		}

		function o(t, e) {
			var n = (s.intentType(t) || "").toLowerCase();
			s.isTwitterURL(t) && (r(t), e && c.trigger("click", {
				target: e,
				region: "intent",
				type: "click",
				data: {}
			}), e && l[n] && l[n].forEach(function(r) {
				c.trigger(r, {
					target: e,
					region: "intent",
					type: r,
					data: i(n, t)
				})
			}))
		}

		function a(t) {
			this.srcEl = [], this.element = t
		}
		var s = n(27),
			u = n(29),
			c = n(32),
			f = n(28),
			l = {
				favorite: ["favorite", "like"],
				follow: ["follow"],
				like: ["favorite", "like"],
				retweet: ["retweet"],
				tweet: ["tweet"]
			};
		a.open = o, t.exports = a
	}, function(t, e, n) {
		function r(t) {
			return "string" == typeof t && w.test(t) && RegExp.$1.length <= 20
		}

		function i(t) {
			return r(t) ? RegExp.$1 : void 0
		}

		function o(t, e) {
			var n = g.decodeURL(t);
			return e = e || !1, n.screen_name = i(t), n.screen_name ? g.url("https://twitter.com/intent/" + (e ? "follow" : "user"), n) : void 0
		}

		function a(t) {
			return o(t, !0)
		}

		function s(t) {
			return "string" == typeof t && x.test(t)
		}

		function u(t, e) {
			return e = void 0 === e ? !0 : e, s(t) ? (e ? "#" : "") + RegExp.$1 : void 0
		}

		function c(t) {
			return "string" == typeof t && y.test(t)
		}

		function f(t) {
			return c(t) && RegExp.$1
		}

		function l(t) {
			return b.test(t)
		}

		function d(t) {
			return E.test(t)
		}

		function h(t) {
			return _.test(t)
		}

		function p(t) {
			return T.test(t) && RegExp.$1
		}

		function v(t) {
			return A.test(t) && RegExp.$1
		}

		function m(t) {
			return _.test(t) && RegExp.$1
		}
		var g = n(28),
			w = /(?:^|(?:https?\:)?\/\/(?:www\.)?twitter\.com(?:\:\d+)?(?:\/intent\/(?:follow|user)\/?\?screen_name=|(?:\/#!)?\/))@?([\w]+)(?:\?|&|$)/i,
			y = /(?:^|(?:https?\:)?\/\/(?:www\.)?twitter\.com(?:\:\d+)?\/(?:#!\/)?[\w_]+\/status(?:es)?\/)(\d+)/i,
			b = /^http(s?):\/\/(\w+\.)*twitter\.com([\:\/]|$)/i,
			E = /^http(s?):\/\/pbs\.twimg\.com\//,
			x = /^#?([^.,<>!\s\/#\-\(\)\'\"]+)$/,
			_ = /twitter\.com(?:\:\d{2,4})?\/intent\/(\w+)/,
			A = /^https?:\/\/(?:www\.)?twitter\.com\/\w+\/timelines\/(\d+)/i,
			T = /^https?:\/\/(?:www\.)?twitter\.com\/i\/moments\/(\d+)/i;
		t.exports = {
			isHashTag: s,
			hashTag: u,
			isScreenName: r,
			screenName: i,
			isStatus: c,
			status: f,
			intentForProfileURL: o,
			intentForFollowURL: a,
			isTwitterURL: l,
			isTwimgURL: d,
			isIntentURL: h,
			regexen: {
				profile: w
			},
			momentId: p,
			collectionId: v,
			intentType: m
		}
	}, function(t, e, n) {
		function r(t) {
			return encodeURIComponent(t).replace(/\+/g, "%2B").replace(/'/g, "%27")
		}

		function i(t) {
			return decodeURIComponent(t)
		}

		function o(t) {
			var e = [];
			return f.forIn(t, function(t, n) {
				var i = r(t);
				f.isType("array", n) || (n = [n]), n.forEach(function(t) {
					c.hasValue(t) && e.push(i + "=" + r(t))
				})
			}), e.sort().join("&")
		}

		function a(t) {
			var e, n = {};
			return t ? (e = t.split("&"), e.forEach(function(t) {
				var e = t.split("="),
					r = i(e[0]),
					o = i(e[1]);
				return 2 == e.length ? f.isType("array", n[r]) ? void n[r].push(o) : r in n ? (n[r] = [n[r]], void n[r].push(o)) : void(n[r] = o) : void 0
			}), n) : {}
		}

		function s(t, e) {
			var n = o(e);
			return n.length > 0 ? f.contains(t, "?") ? t + "&" + o(e) : t + "?" + o(e) : t
		}

		function u(t) {
			var e = t && t.split("?");
			return 2 == e.length ? a(e[1]) : {}
		}
		var c = n(15),
			f = n(14);
		t.exports = {
			url: s,
			decodeURL: u,
			decode: a,
			encode: o,
			encodePart: r,
			decodePart: i
		}
	}, function(t, e, n) {
		function r(t) {
			var e = [];
			return d.forIn(t, function(t, n) {
				e.push(t + "=" + n)
			}), e.join(",")
		}

		function i() {
			return h + l.generate()
		}

		function o(t, e) {
			function n(t) {
				return Math.round(t / 2)
			}
			return t > e ? {
				coordinate: 0,
				size: e
			} : {
				coordinate: n(e) - n(t),
				size: t
			}
		}

		function a(t, e, n) {
			var i, a;
			e = s.parse(e), n = n || {}, i = o(e.width, n.width || p), e.left = i.coordinate, e.width = i.size, a = o(e.height, n.height || v), e.top = a.coordinate, e.height = a.size, this.win = t, this.features = r(e)
		}
		var s, u = n(7),
			c = n(30),
			f = n(27),
			l = n(31),
			d = n(14),
			h = "intent_",
			p = u.screen.width,
			v = u.screen.height;
		s = (new c).defaults({
			width: 550,
			height: 520,
			personalbar: "0",
			toolbar: "0",
			location: "1",
			scrollbars: "1",
			resizable: "1"
		}), a.prototype.open = function(t) {
			return f.isTwitterURL(t) ? (this.name = i(), this.popup = this.win.open(t, this.name, this.features), this) : void 0
		}, a.open = function(t, e) {
			var n = new a(u, e);
			return n.open(t)
		}, t.exports = a
	}, function(t, e, n) {
		function r(t) {
			return function(e) {
				return o.hasValue(e[t])
			}
		}

		function i() {
			this.assertions = [], this._defaults = {}
		}
		var o = n(15),
			a = n(14);
		i.prototype.assert = function(t, e) {
			return this.assertions.push({
				fn: t,
				msg: e || "assertion failed"
			}), this
		}, i.prototype.defaults = function(t) {
			return this._defaults = t || this._defaults, this
		}, i.prototype.require = function(t) {
			var e = this;
			return t = Array.isArray(t) ? t : a.toRealArray(arguments), t.forEach(function(t) {
				e.assert(r(t), "required: " + t)
			}), this
		}, i.prototype.parse = function(t) {
			var e, n;
			if (e = a.aug({}, this._defaults, t || {}), n = this.assertions.reduce(function(t, n) {
					return n.fn(e) || t.push(n.msg), t
				}, []), n.length > 0) throw new Error(n.join("\n"));
			return e
		}, t.exports = i
	}, function(t, e) {
		function n() {
			return i + String(+new Date) + Math.floor(1e5 * Math.random()) + o++
		}

		function r() {
			return i + String(a++)
		}
		var i = "i",
			o = 0,
			a = 0;
		t.exports = {
			generate: n,
			deterministic: r
		}
	}, function(t, e, n) {
		function r() {
			return i.get("events") || {}
		}
		var i = n(21),
			o = n(33),
			a = n(14);
		t.exports = a.aug(r(), o.Emitter)
	}, function(t, e, n) {
		var r = n(14),
			i = n(20),
			o = {
				bind: function(t, e) {
					return this._handlers = this._handlers || {}, this._handlers[t] = this._handlers[t] || [], this._handlers[t].push(e)
				},
				unbind: function(t, e) {
					if (this._handlers && this._handlers[t])
						if (e) {
							var n = this._handlers[t].indexOf(e);
							n >= 0 && this._handlers[t].splice(n, 1)
						}
						else this._handlers[t] = []
				},
				trigger: function(t, e) {
					var n = this._handlers && this._handlers[t];
					e = e || {}, e.type = t, n && n.forEach(function(t) {
						r.async(i(t, this, e))
					})
				}
			};
		t.exports = {
			Emitter: o
		}
	}, function(t, e, n) {
		function r(t) {
			c[t] = +new Date
		}

		function i(t) {
			return c[t] ? +new Date - c[t] : null
		}

		function o(t, e, n, r, o) {
			var s = i(e);
			s && a(t, n, r, s, o)
		}

		function a(t, e, n, r, i) {
			var o, a = void 0 === i ? f : i;
			100 * Math.random() > a || (n = u.aug(n || {}, {
				duration_ms: r
			}), o = {
				page: e,
				component: "performance",
				action: t
			}, s.clientEvent(o, n, !0))
		}
		var s = n(35),
			u = n(14),
			c = {},
			f = 1;
		t.exports = {
			start: r,
			end: i,
			track: a,
			endAndTrack: o
		}
	}, function(t, e, n) {
		function r(t, e, n) {
			return i(t, e, n, 2)
		}

		function i(t, e, n, r) {
			var i = !m.isObject(t),
				o = e ? !m.isObject(e) : !1;
			i || o || a(v.formatClientEventNamespace(t), v.formatClientEventData(e, n, r), v.CLIENT_EVENT_ENDPOINT)
		}

		function o(t, e, n, r) {
			var o = v.extractTermsFromDOM(t.target || t.srcElement);
			o.action = r || "click", i(o, e, n)
		}

		function a(t, e, n) {
			var r, i;
			n && m.isObject(t) && m.isObject(e) && (r = v.flattenClientEventPayload(t, e), i = {
				l: v.stringify(r)
			}, r.dnt && (i.dnt = 1), d(p.url(n, i)))
		}

		function s(t, e, n, r) {
			var i, o = !m.isObject(t),
				a = e ? !m.isObject(e) : !1;
			if (!o && !a) return i = v.flattenClientEventPayload(v.formatClientEventNamespace(t), v.formatClientEventData(e, n, r)), u(i)
		}

		function u(t) {
			return w.push(t), w
		}

		function c() {
			var t, e;
			return w.length > 1 && s({
				page: "widgets_js",
				component: "scribe_pixel",
				action: "batch_log"
			}, {}), t = w, w = [], e = t.reduce(function(e, n, r) {
				var i = e.length,
					o = i && e[i - 1],
					a = r + 1 == t.length;
				return a && n.event_namespace && "batch_log" == n.event_namespace.action && (n.message = ["entries:" + r, "requests:" + i].join("/")), f(n).forEach(function(t) {
					var n = l(t);
					(!o || o.urlLength + n > g) && (o = {
						urlLength: b,
						items: []
					}, e.push(o)), o.urlLength += n, o.items.push(t)
				}), e
			}, []), e.map(function(t) {
				var e = {
					l: t.items
				};
				return h.enabled() && (e.dnt = 1), d(p.url(v.CLIENT_EVENT_ENDPOINT, e))
			})
		}

		function f(t) {
			return Array.isArray(t) || (t = [t]), t.reduce(function(t, e) {
				var n, r = v.stringify(e),
					i = l(r);
				return g > b + i ? t = t.concat(r) : (n = v.splitLogEntry(e), n.length > 1 && (t = t.concat(f(n)))), t
			}, [])
		}

		function l(t) {
			return encodeURIComponent(t).length + 3
		}

		function d(t) {
			var e = new Image;
			return e.src = t
		}
		var h = n(36),
			p = n(28),
			v = n(40),
			m = n(14),
			g = 2083,
			w = [],
			y = p.url(v.CLIENT_EVENT_ENDPOINT, {
				dnt: 0,
				l: ""
			}),
			b = encodeURIComponent(y).length;
		t.exports = {
			_enqueueRawObject: u,
			scribe: a,
			clientEvent: i,
			clientEvent2: r,
			enqueueClientEvent: s,
			flushClientEvents: c,
			interaction: o
		}
	}, function(t, e, n) {
		function r() {
			d = !0
		}

		function i(t, e) {
			return d ? !0 : f.asBoolean(l.val("dnt")) ? !0 : !s || 1 != s.doNotTrack && 1 != s.msDoNotTrack ? c.isUrlSensitive(e || a.host) ? !0 : u.isFramed() && c.isUrlSensitive(u.rootDocumentLocation()) ? !0 : (t = h.test(t || o.referrer) && RegExp.$1, t && c.isUrlSensitive(t) ? !0 : !1) : !0
		}
		var o = n(9),
			a = n(13),
			s = n(10),
			u = n(37),
			c = n(39),
			f = n(15),
			l = n(16),
			d = !1,
			h = /https?:\/\/([^\/]+).*/i;
		t.exports = {
			setOn: r,
			enabled: i
		}
	}, function(t, e, n) {
		function r(t) {
			return t && u.isType("string", t) && (c = t), c
		}

		function i() {
			return f
		}

		function o() {
			return c !== f
		}
		var a = n(13),
			s = n(38),
			u = n(14),
			c = s.getCanonicalURL() || a.href,
			f = c;
		t.exports = {
			isFramed: o,
			rootDocumentLocation: r,
			currentDocumentLocation: i
		}
	}, function(t, e, n) {
		function r(t, e) {
			var n, r;
			return e = e || s, /^https?:\/\//.test(t) ? t : /^\/\//.test(t) ? e.protocol + t : (n = e.host + (e.port.length ? ":" + e.port : ""), 0 !== t.indexOf("/") && (r = e.pathname.split("/"), r.pop(), r.push(t), t = "/" + r.join("/")), [e.protocol, "//", n, t].join(""))
		}

		function i() {
			for (var t, e = a.getElementsByTagName("link"), n = 0; t = e[n]; n++)
				if ("canonical" == t.rel) return r(t.href)
		}

		function o() {
			for (var t, e, n, r = a.getElementsByTagName("a"), i = a.getElementsByTagName("link"), o = [r, i], s = 0, c = 0, f = /\bme\b/; t = o[s]; s++)
				for (c = 0; e = t[c]; c++)
					if (f.test(e.rel) && (n = u.screenName(e.href))) return n
		}
		var a = n(9),
			s = n(13),
			u = n(27);
		t.exports = {
			absolutize: r,
			getCanonicalURL: i,
			getScreenNameFromPage: o
		}
	}, function(t, e, n) {
		function r(t) {
			return t in s ? s[t] : s[t] = a.test(t)
		}

		function i() {
			return r(o.host)
		}
		var o = n(13),
			a = /^[^#?]*\.(gov|mil)(:\d+)?([#?].*)?$/i,
			s = {};
		t.exports = {
			isUrlSensitive: r,
			isHostPageSensitive: i
		}
	}, function(t, e, n) {
		function r(t, e) {
			var n;
			return e = e || {}, t && t.nodeType === Node.ELEMENT_NODE ? ((n = t.getAttribute("data-scribe")) && n.split(" ").forEach(function(t) {
				var n = t.trim().split(":"),
					r = n[0],
					i = n[1];
				r && i && !e[r] && (e[r] = i)
			}), r(t.parentNode, e)) : e
		}

		function i(t) {
			return p.aug({
				client: "tfw"
			}, t || {})
		}

		function o(t, e, n) {
			var r = t && t.widget_origin || l.referrer;
			return t = a("tfw_client_event", t, r), t.client_version = g, t.format_version = void 0 !== n ? n : 1, e || (t.widget_origin = r), t
		}

		function a(t, e, n) {
			return e = e || {}, p.aug({}, e, {
				_category_: t,
				triggered_on: e.triggered_on || +new Date,
				dnt: h.enabled(n)
			})
		}

		function s(t, e) {
			var n = {};
			return e = e || {}, e.association_namespace = i(t), n[E] = e, n
		}

		function u(t, e) {
			return p.aug({}, e, {
				event_namespace: t
			})
		}

		function c(t) {
			var e, n = Array.prototype.toJSON;
			return delete Array.prototype.toJSON, e = d.stringify(t), n && (Array.prototype.toJSON = n), e
		}

		function f(t) {
			if (t.item_ids && t.item_ids.length > 1) {
				var e = Math.floor(t.item_ids.length / 2),
					n = t.item_ids.slice(0, e),
					r = {},
					i = t.item_ids.slice(e),
					o = {};
				n.forEach(function(e) {
					r[e] = t.item_details[e]
				}), i.forEach(function(e) {
					o[e] = t.item_details[e]
				});
				var a = [p.aug({}, t, {
					item_ids: n,
					item_details: r
				}), p.aug({}, t, {
					item_ids: i,
					item_details: o
				})];
				return a
			}
			return [t]
		}
		var l = n(9),
			d = n(41),
			h = n(36),
			p = n(14),
			v = n(42),
			m = n(17),
			g = v.version,
			w = m.get("endpoints.rufous") || "https://syndication.twitter.com/i/jot",
			y = m.get("endpoints.rufousAudience") || "https://syndication.twitter.com/i/jot/syndication",
			b = m.get("endpoints.rufousRedirect") || "https://platform.twitter.com/jot.html",
			E = 1;
		t.exports = {
			extractTermsFromDOM: r,
			flattenClientEventPayload: u,
			formatGenericEventData: a,
			formatClientEventData: o,
			formatClientEventNamespace: i,
			formatTweetAssociation: s,
			splitLogEntry: f,
			stringify: c,
			AUDIENCE_ENDPOINT: y,
			CLIENT_EVENT_ENDPOINT: w,
			RUFOUS_REDIRECT: b
		}
	}, function(t, e, n) {
		var r = n(7),
			i = r.JSON;
		t.exports = {
			stringify: i.stringify || i.encode,
			parse: i.parse || i.decode
		}
	}, function(t, e) {
		t.exports = {
			version: "caad40a:1448160423032"
		}
	}, function(t, e, n) {
		function r(t) {
			return t.reduce(function(t, e) {
				return t.concat(m.reduce(function(t, n) {
					return t.concat(n(e))
				}, []))
			}, [])
		}

		function i() {
			var t = l.val("widgets:autoload") || !0;
			return p.isFalseValue(t) ? !1 : p.isTruthValue(t) ? c.body : c.querySelectorAll(t)
		}

		function o(t) {
			return t = t || c.body, t = t.length ? v.toRealArray(t) : [t], u.allResolved(r(t).map(function(t) {
				return f.addWidget(t)
			})).then(function(t) {
				h.trigger("loaded", {
					widgets: t
				})
			})
		}

		function a() {
			var t = i();
			return t === !1 ? s.resolve() : (d.set("widgets.loaded", !0), o(t))
		}
		var s = n(2),
			u = n(44),
			c = n(9),
			f = n(45),
			l = n(16),
			d = n(17),
			h = n(32),
			p = n(15),
			v = n(14),
			m = n(50);
		t.exports = {
			load: o,
			loadPage: a,
			_getPageLoadTarget: i
		}
	}, function(t, e, n) {
		function r(t, e) {
			return t.then(e, e)
		}

		function i(t) {
			var e;
			return t = t || [], e = t.length, t = t.filter(a), e ? e !== t.length ? s.reject("non-Promise passed to .some") : new s(function(e, n) {
				function r() {
					i += 1, i === t.length && n()
				}
				var i = 0;
				t.forEach(function(t) {
					t.then(e, r)
				})
			}) : s.reject("no promises passed to .some")
		}

		function o(t) {
			var e;
			return void 0 === t ? s.reject(new Error("undefined is not an object")) : Array.isArray(t) ? (e = t.length, e ? new s(function(n, r) {
				function i() {
					s += 1, s === e && (0 === u.length ? r() : n(u))
				}

				function o(t) {
					u.push(t), i()
				}
				var s = 0,
					u = [];
				t.forEach(function(t) {
					a(t) ? t.then(o, i) : o(t)
				})
			}) : s.resolve([])) : s.reject(new Error("Type error"))
		}

		function a(t) {
			return t instanceof s
		}
		var s = n(2);
		t.exports = {
			always: r,
			allResolved: o,
			some: i,
			isPromise: a
		}
	}, function(t, e, n) {
		function r(t) {
			return function(e) {
				var n = t.srcEl,
					r = t.targetEl;
				n ? r.insertBefore(e, n) : r.appendChild(e)
			}
		}

		function i(t) {
			return f.write(function() {
				t && t.parentNode && t.parentNode.removeChild(t)
			})
		}

		function o(t) {
			var e = t.reduce(function(t, e) {
				var n = e.input,
					r = a(n).then(function(t) {
						return e.instance = t, e
					});
				return r.then(null, e.taskDoneDeferred.reject), t[n.className] = t[n.className] || [], t[n.className].push(r), t
			}, {});
			v.forIn(e, function(t, e) {
				p.allResolved(e).then(function(t) {
					t.forEach(function(t) {
						var e = t.instance,
							n = t.input;
						s(e, n).then(t.taskDoneDeferred.resolve, t.taskDoneDeferred.reject)
					})
				})
			})
		}

		function a(t) {
			var e = new t.Sandbox;
			return t.factory(t.parameters, e)
		}

		function s(t, e) {
			function n() {
				return i(e.srcEl).then(function() {
					return a.sandboxEl
				})
			}

			function o() {
				return i(a.sandboxEl).then(function() {
					return e.srcEl ? p.always(f.write(function() {
						c.add(e.srcEl, u)
					}), function() {
						return e.srcEl
					}) : void 0
				})
			}
			var a = t.sandbox,
				s = e.className + "-rendered",
				u = e.className + "-error",
				d = a.insert(t.id, {
					"class": [e.className, s].join(" ")
				}, null, r(e)),
				v = t.hydrate();
			return h.all([d, v]).then(function() {
				return t.render(a)
			}).then(function() {
				a.onResize(function() {
					return t.resize().then(function() {
						l.trigger("resize", {
							target: a.sandboxEl
						})
					})
				})
			}).then(n, o).then(function(t) {
				return t ? (l.trigger("rendered", {
					target: t
				}), t) : void 0
			})
		}

		function u(t) {
			return m.add(t)
		}
		var c = n(24),
			f = n(46),
			l = n(32),
			d = n(48),
			h = n(2),
			p = n(44),
			v = n(14),
			m = new d(o);
		t.exports = {
			addWidget: u
		}
	}, function(t, e, n) {
		function r(t, e) {
			return function() {
				try {
					e.resolve(t.call(this))
				}
				catch (n) {
					e.reject(n)
				}
			}
		}

		function i(t, e) {
			t.call(e)
		}

		function o(t, e) {
			var n = new c;
			return u.read(r(t, n), e), n.promise
		}

		function a(t, e) {
			var n = new c;
			return u.write(r(t, n), e), n.promise
		}

		function s(t, e, n) {
			var i = new c;
			return f.isType("function", t) && (n = e, e = t, t = 1), u.defer(t, r(e, i), n), i.promise
		}
		var u = n(47),
			c = n(1),
			f = n(14);
		t.exports = {
			sync: i,
			read: o,
			write: a,
			defer: s
		}
	}, function(t, e, n) {
		var r;
		! function(i) {
			"use strict";

			function o() {
				this.frames = [], this.lastId = 0, this.raf = a, this.batch = {
					hash: {},
					read: [],
					write: [],
					mode: null
				}
			}
			var a = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
				return window.setTimeout(t, 1e3 / 60)
			};
			o.prototype.read = function(t, e) {
				var n = this.add("read", t, e),
					r = n.id;
				this.batch.read.push(n.id);
				var i = "reading" === this.batch.mode || this.batch.scheduled;
				return i ? r : (this.scheduleBatch(), r)
			}, o.prototype.write = function(t, e) {
				var n = this.add("write", t, e),
					r = this.batch.mode,
					i = n.id;
				this.batch.write.push(n.id);
				var o = "writing" === r || "reading" === r || this.batch.scheduled;
				return o ? i : (this.scheduleBatch(), i)
			}, o.prototype.defer = function(t, e, n) {
				"function" == typeof t && (n = e, e = t, t = 1);
				var r = this,
					i = t - 1;
				return this.schedule(i, function() {
					r.run({
						fn: e,
						ctx: n
					})
				})
			}, o.prototype.clear = function(t) {
				if ("function" == typeof t) return this.clearFrame(t);
				t = Number(t);
				var e = this.batch.hash[t];
				if (e) {
					var n = this.batch[e.type],
						r = n.indexOf(t);
					delete this.batch.hash[t], ~r && n.splice(r, 1)
				}
			}, o.prototype.clearFrame = function(t) {
				var e = this.frames.indexOf(t);
				~e && this.frames.splice(e, 1)
			}, o.prototype.scheduleBatch = function() {
				var t = this;
				this.schedule(0, function() {
					t.batch.scheduled = !1, t.runBatch()
				}), this.batch.scheduled = !0
			}, o.prototype.uniqueId = function() {
				return ++this.lastId
			}, o.prototype.flush = function(t) {
				for (var e; e = t.shift();) this.run(this.batch.hash[e])
			}, o.prototype.runBatch = function() {
				try {
					this.batch.mode = "reading", this.flush(this.batch.read), this.batch.mode = "writing", this.flush(this.batch.write), this.batch.mode = null
				}
				catch (t) {
					throw this.runBatch(), t
				}
			}, o.prototype.add = function(t, e, n) {
				var r = this.uniqueId();
				return this.batch.hash[r] = {
					id: r,
					fn: e,
					ctx: n,
					type: t
				}
			}, o.prototype.run = function(t) {
				var e = t.ctx || this,
					n = t.fn;
				if (delete this.batch.hash[t.id], !this.onError) return n.call(e);
				try {
					n.call(e)
				}
				catch (r) {
					this.onError(r)
				}
			}, o.prototype.loop = function() {
				var t = this,
					e = this.raf;
				this.looping || (e(function n() {
					var r = t.frames.shift();
					t.frames.length ? e(n) : t.looping = !1, r && r()
				}), this.looping = !0)
			}, o.prototype.schedule = function(t, e) {
				return this.frames[t] ? this.schedule(t + 1, e) : (this.loop(), this.frames[t] = e)
			}, i = i || new o, "undefined" != typeof t && t.exports ? t.exports = i : (r = function() {
				return i
			}.call(e, n, e, t), !(void 0 !== r && (t.exports = r)))
		}(window.fastdom)
	}, function(t, e, n) {
		function r(t) {
			this.inputsQueue = [], this.task = t, this.hasFlushBeenScheduled = !1
		}
		var i = n(1),
			o = n(49),
			a = n(20);
		r.prototype.add = function(t) {
			var e = new i;
			return this.inputsQueue.push({
				input: t,
				taskDoneDeferred: e
			}), this.hasFlushBeenScheduled || (this.hasFlushBeenScheduled = !0, o(a(this._flush, this))), e.promise
		}, r.prototype._flush = function() {
			try {
				this.task.call(null, this.inputsQueue)
			}
			catch (t) {
				this.inputsQueue.forEach(function(e) {
					e.taskDoneDeferred.reject(t)
				})
			}
			this.inputsQueue = [], this.hasFlushBeenScheduled = !1
		}, t.exports = r
	}, function(t, e, n) {
		var r = n(3).Promise;
		t.exports = r._asap
	}, function(t, e, n) {
		t.exports = [n(51), n(91), n(138), n(144), n(150), n(175), n(192), n(197)]
	}, function(t, e, n) {
		function r(t) {
			var e = s(t),
				n = {
					screenName: o.screenName(t.href),
					showScreenName: "false" !== t.getAttribute("data-show-screen-name"),
					showCount: "false" !== t.getAttribute("data-show-count"),
					size: t.getAttribute("data-size"),
					count: t.getAttribute("data-count"),
					align: t.getAttribute("data-align"),
					preview: t.getAttribute("data-preview")
				};
			return a.forIn(n, function(t, n) {
				var r = e[t];
				e[t] = f.hasValue(r) ? r : n
			}), e.screenName = e.screenName || e.screen_name, e
		}

		function i(t) {
			var e = u(t, l);
			return e.map(function(t) {
				return c(r(t), t.parentNode, t)
			})
		}
		var o = n(27),
			a = n(14),
			s = n(52),
			u = n(54)(),
			c = n(57),
			f = n(15),
			l = "a.twitter-follow-button";
		t.exports = i
	}, function(t, e, n) {
		function r(t) {
			var e = t.href && t.href.split("?")[1],
				n = e ? a.decode(e) : {},
				r = {
					lang: u(t),
					width: t.getAttribute("data-width") || t.getAttribute("width"),
					height: t.getAttribute("data-height") || t.getAttribute("height"),
					related: t.getAttribute("data-related"),
					partner: t.getAttribute("data-partner")
				};
			return o.asBoolean(t.getAttribute("data-dnt")) && i.setOn(), s.forIn(r, function(t, e) {
				var r = n[t];
				n[t] = o.hasValue(r) ? r : e
			}), n
		}
		var i = n(36),
			o = n(15),
			a = n(28),
			s = n(14),
			u = n(53);
		t.exports = r
	}, function(t, e) {
		function n(t) {
			var e;
			if (t) return e = t.lang || t.getAttribute("data-lang"), e ? e : n(t.parentElement)
		}
		t.exports = n
	}, function(t, e, n) {
		var r = n(55),
			i = n(31);
		t.exports = function() {
			var t = "data-twitter-extracted-" + i.generate();
			return function(e, n) {
				function i(e) {
					return !e.hasAttribute(t)
				}

				function o(e) {
					return e.setAttribute(t, "true"), e
				}
				return r(e, n).filter(i).map(o)
			}
		}
	}, function(t, e, n) {
		function r(t, e) {
			return o(t, e) ? [t] : i.toRealArray(t.querySelectorAll(e))
		}
		var i = n(14),
			o = n(56);
		t.exports = r
	}, function(t, e, n) {
		function r(t, e) {
			return a ? a.call(t, e) : void 0
		}
		var i = n(7),
			o = i.HTMLElement,
			a = o.prototype.matches || o.prototype.matchesSelector || o.prototype.webkitMatchesSelector || o.prototype.mozMatchesSelector || o.prototype.msMatchesSelector || o.prototype.oMatchesSelector;
		t.exports = r
	}, function(t, e, n) {
		function r(t, e, n) {
			return new i(o, a, "twitter-follow-button", t, e, n)
		}
		var i = n(58),
			o = n(59),
			a = n(79);
		t.exports = r
	}, function(t, e) {
		function n(t, e, n, r, i, o) {
			this.factory = t, this.Sandbox = e, this.srcEl = o, this.targetEl = i, this.parameters = r, this.className = n
		}
		n.prototype.destroy = function() {
			this.srcEl = this.targetEl = null
		}, t.exports = n
	}, function(t, e, n) {
		function r(t, e) {
			var r = new i;
			return n.e(1, function(i, o) {
				var a;
				return i ? r.reject(i) : (a = n(60), void r.resolve(new a(t, e)))
			}), r.promise
		}
		var i = n(1);
		t.exports = r
	}, , function(t, e, n) {
		var r = n(62),
			i = n(65),
			o = n(20);
		r = Object.create(r), r.build = o(r.build, null, i), t.exports = r
	}, function(t, e, n) {
		function r() {
			return s.toRealArray(arguments)
		}

		function i(t, e, n) {
			var r = new t;
			return e = a(o(e || [])), e.forEach(function(t) {
				t.call(null, r)
			}), r.build(n)
		}
		var o = n(63),
			a = n(64),
			s = n(14);
		t.exports = {
			couple: r,
			build: i
		}
	}, function(t, e, n) {
		function r(t) {
			var e = [];
			return t.forEach(function(t) {
				var n = i.isType("array", t) ? r(t) : [t];
				e = e.concat(n)
			}), e
		}
		var i = n(14);
		t.exports = r
	}, function(t, e) {
		function n(t) {
			return t.filter(function(e, n) {
				return t.indexOf(e) === n
			})
		}
		t.exports = n
	}, function(t, e, n) {
		function r() {
			i.apply(this, arguments), this.Widget = this.Component
		}
		var i = n(66),
			o = n(14),
			a = n(69);
		r.prototype = Object.create(i.prototype), o.aug(r.prototype, {
			factory: a,
			build: function() {
				var t = i.prototype.build.apply(this, arguments);
				return t
			},
			selectors: function(t) {
				var e = this.Widget.prototype.selectors;
				t = t || {}, this.Widget.prototype.selectors = o.aug({}, t, e)
			}
		}), t.exports = r
	}, function(t, e, n) {
		function r(t, e, n) {
			var r = this[e];
			if (!r) throw new Error(e + " does not exist");
			this[e] = t(r, n)
		}

		function i() {
			this.Component = this.factory(), this._adviceArgs = [], this._lastArgs = []
		}
		var o = n(67),
			a = n(14),
			s = n(68);
		a.aug(i.prototype, {
			factory: s,
			build: function(t) {
				var e = this;
				this.Component;
				return a.aug(this.Component.prototype.boundParams, t), this._adviceArgs.concat(this._lastArgs).forEach(function(t) {
					r.apply(e.Component.prototype, t)
				}), delete this._lastArgs, delete this._adviceArgs, this.Component
			},
			params: function(t) {
				var e = this.Component.prototype.paramConfigs;
				t = t || {}, this.Component.prototype.paramConfigs = a.aug({}, t, e)
			},
			define: function(t, e) {
				if (t in this.Component.prototype) throw new Error(t + " has previously been defined");
				this.override(t, e)
			},
			override: function(t, e) {
				this.Component.prototype[t] = e
			},
			defineProperty: function(t, e) {
				if (t in this.Component.prototype) throw new Error(t + " has previously been defined");
				this.overrideProperty(t, e)
			},
			overrideProperty: function(t, e) {
				var n = a.aug({
					configurable: !0
				}, e);
				Object.defineProperty(this.Component.prototype, t, n)
			},
			before: function(t, e) {
				this._adviceArgs.push([o.before, t, e])
			},
			after: function(t, e) {
				this._adviceArgs.push([o.after, t, e])
			},
			around: function(t, e) {
				this._adviceArgs.push([o.around, t, e])
			},
			last: function(t, e) {
				this._lastArgs.push([o.after, t, e])
			}
		}), t.exports = i
	}, function(t, e, n) {
		function r(t, e) {
			return function() {
				var n, r = this,
					i = arguments;
				return n = e.apply(this, arguments), a.isPromise(n) ? n.then(function() {
					return t.apply(r, i)
				}) : t.apply(this, arguments)
			}
		}

		function i(t, e) {
			return function() {
				function n(t, e) {
					return a.isPromise(e) ? e.then(function() {
						return t
					}) : t
				}
				var r, i = this,
					o = arguments;
				return r = t.apply(this, arguments), a.isPromise(r) ? r.then(function(t) {
					return n(t, e.apply(i, o))
				}) : n(r, e.apply(this, arguments))
			}
		}

		function o(t, e) {
			return function() {
				var n = s.toRealArray(arguments);
				return n.unshift(u(t, this)), e.apply(this, n)
			}
		}
		var a = n(44),
			s = n(14),
			u = n(20);
		t.exports = {
			before: r,
			after: i,
			around: o
		}
	}, function(t, e, n) {
		function r() {
			return !0
		}

		function i(t) {
			return t
		}

		function o(t, e, n) {
			var r = null;
			return t.some(function(t) {
				return t = s.isType("function", t) ? t() : t, e(t) ? (r = n(t), !0) : void 0
			}), r
		}

		function a() {
			function t(t) {
				var e = this;
				t = t || {}, this.params = Object.keys(this.paramConfigs).reduce(function(n, a) {
					var s = [],
						u = e.boundParams,
						c = e.paramConfigs[a],
						f = c.validate || r,
						l = c.transform || i;
					if (a in u && s.push(u[a]), a in t && s.push(t[a]), s = "fallback" in c ? s.concat(c.fallback) : s, n[a] = o(s, f, l), c.required && null == n[a]) throw new Error(a + " is a required parameter");
					return n
				}, {}), this.initialize()
			}
			return s.aug(t.prototype, {
				paramConfigs: {},
				boundParams: {},
				initialize: function() {}
			}), t
		}
		var s = n(14);
		t.exports = a
	}, function(t, e, n) {
		function r() {
			function t(t, n) {
				e.apply(this, arguments), this.id = f + c(), this.sandbox = n
			}
			var e = a();
			return t.prototype = Object.create(e.prototype), s.aug(t.prototype, {
				selectors: {},
				hydrate: function() {
					return i.resolve()
				},
				prepForInsertion: function() {},
				render: function() {
					return i.resolve()
				},
				resize: function() {
					return i.resolve()
				},
				select: function(t, e) {
					return 1 === arguments.length && (e = t, t = this.el), t ? (e = this.selectors[e] || e, s.toRealArray(t.querySelectorAll(e))) : []
				},
				selectOne: function() {
					return this.select.apply(this, arguments)[0]
				},
				selectLast: function() {
					return this.select.apply(this, arguments).pop()
				},
				on: function(t, e, n) {
					function r(t) {
						s.addEventListener(t, n, !1)
					}

					function i(t) {
						o.delegate(s, t, a, n)
					}
					var a, s = this.el;
					this.el && (t = (t || "").split(/\s+/), 2 === arguments.length ? n = e : a = e, a = this.selectors[a] || a, n = u(n, this), t.forEach(a ? i : r))
				}
			}), t
		}
		var i = n(2),
			o = n(23),
			a = n(68),
			s = n(14),
			u = n(20),
			c = n(70),
			f = "twitter-widget-";
		t.exports = r
	}, function(t, e) {
		function n() {
			return String(r++)
		}
		var r = 0;
		t.exports = n
	}, , function(t, e, n) {
		function r(t, e) {
			var n, r = c[t];
			return "embed/timeline.css" === t && u.contains(o.href, "localhost.twitter.com") ? "/src/css/index.css" : (n = s.retina() ? "2x" : "default", e && (n += ".rtl"), i() + "/" + r[n])
		}

		function i(t) {
			var e = a.get("host");
			return f(t) + "://" + e
		}
		var o = n(13),
			a = n(17),
			s = n(8),
			u = n(14),
			c = {
				"embed/timeline.css": {
					"default": "embed/timeline.613c806bdd4e70743b84d6f69c8b0dec.default.css",
					"2x": "embed/timeline.613c806bdd4e70743b84d6f69c8b0dec.2x.css",
					gif: "embed/timeline.613c806bdd4e70743b84d6f69c8b0dec.gif.css",
					"default.rtl": "embed/timeline.613c806bdd4e70743b84d6f69c8b0dec.default.rtl.css",
					"2x.rtl": "embed/timeline.613c806bdd4e70743b84d6f69c8b0dec.2x.rtl.css",
					"gif.rtl": "embed/timeline.613c806bdd4e70743b84d6f69c8b0dec.gif.rtl.css"
				}
			},
			f = function() {
				return /^http\:$/.test(o.protocol) ? function(t) {
					return t ? "https" : "http"
				} : function() {
					return "https"
				}
			}();
		t.exports = {
			builtUrl: r,
			base: i
		}
	}, , , function(t, e, n) {
		function r(t) {
			return t = String(t).toLowerCase(), o.contains(s, t)
		}

		function i(t) {
			return t = (t || "").toLowerCase(), t = t.replace("_", "-"), a(t) ? t : (t = t.replace(/\-.*/, ""), a(t) ? t : "en")
		}
		var o = n(14),
			a = n(76),
			s = ["ar", "fa", "he", "ur"];
		t.exports = {
			isRtlLang: r,
			matchLanguage: i
		}
	}, function(t, e, n) {
		function r(t) {
			return "en" === t || i.contains(o, t)
		}
		var i = n(14),
			o = n(77);
		t.exports = r
	}, function(t, e) {
		t.exports = ["hi", "zh-cn", "fr", "zh-tw", "msa", "fil", "fi", "sv", "pl", "ja", "ko", "de", "it", "pt", "es", "ru", "id", "tr", "da", "no", "nl", "hu", "fa", "ar", "ur", "he", "th", "cs", "uk", "vi", "ro", "bn", "el", "en-gb", "gu", "kn", "mr", "ta", "bg", "ca", "hr", "sr", "sk"]
	}, function(t, e, n) {
		function r(t) {
			t.define("widgetDataAttributes", function() {
				return {}
			}), t.define("setDataAttributes", function() {
				var t = this.sandbox.sandboxEl;
				o.forIn(this.widgetDataAttributes(), function(e, n) {
					i.hasValue(n) && t.setAttribute("data-" + e, n)
				})
			}), t.after("render", function() {
				this.setDataAttributes()
			})
		}
		var i = n(15),
			o = n(14);
		t.exports = r
	}, function(t, e, n) {
		var r = n(80),
			i = n(83);
		t.exports = r.build([i])
	}, function(t, e, n) {
		var r = n(62),
			i = n(81),
			o = n(20);
		r = Object.create(r), r.build = o(r.build, null, i), t.exports = r
	}, function(t, e, n) {
		function r() {
			i.apply(this, arguments)
		}
		var i = n(66),
			o = n(14),
			a = n(82);
		r.prototype = Object.create(i.prototype), o.aug(r.prototype, {
			factory: a
		}), t.exports = r
	}, function(t, e, n) {
		function r() {
			var t = a();
			return u.aug(t.prototype, {
				id: null,
				initialized: !1,
				width: 0,
				height: 0,
				sandboxEl: null,
				insert: function() {
					return s.reject()
				},
				onResize: function() {},
				addClass: function(t) {
					var e = this.sandboxEl;
					return t = Array.isArray(t) ? t : [t], o.write(function() {
						t.forEach(function(t) {
							i.add(e, t)
						})
					})
				},
				removeClass: function(t) {
					var e = this.sandboxEl;
					return t = Array.isArray(t) ? t : [t], o.write(function() {
						t.forEach(function(t) {
							i.remove(e, t)
						})
					})
				},
				styleSelf: function(t) {
					var e = this;
					return o.write(function() {
						u.forIn(t, function(t, n) {
							e.sandboxEl.style[t] = n
						})
					})
				}
			}), t
		}
		var i = n(24),
			o = n(46),
			a = n(68),
			s = n(2),
			u = n(14);
		t.exports = r
	}, function(t, e, n) {
		function r(t) {
			t.overrideProperty("id", {
				get: function() {
					return this.sandboxEl && this.sandboxEl.id
				}
			}), t.overrideProperty("initialized", {
				get: function() {
					return !!this.iframeEl
				}
			}), t.overrideProperty("width", {
				get: function() {
					return this._width
				}
			}), t.overrideProperty("height", {
				get: function() {
					return this._height
				}
			}), t.overrideProperty("sandboxEl", {
				get: function() {
					return this.iframeEl
				}
			}), t.defineProperty("iframeEl", {
				get: function() {
					return this._iframe
				}
			}), t.define("updateCachedDimensions", function() {
				var t = this;
				return this.initialized ? i.read(function() {
					t._width = t.sandboxEl.offsetWidth, t._height = t.sandboxEl.offsetHeight
				}) : c.resolve()
			}), t.define("setTitle", function(t) {
				this.iframeEl.title = t
			}), t.define("makeVisible", function() {
				return this.styleSelf(h)
			}), t.define("didResize", function() {
				var t = this,
					e = t._resizeHandlers.length > 0;
				return this.updateCachedDimensions().then(function() {
					e && t._resizeHandlers.forEach(function(e) {
						e(t)
					})
				})
			}), t.define("loadDocument", function(t) {
				var e = new u;
				return this.initialized ? this.iframeEl.src ? c.reject(new Error("widget already loaded")) : (this.iframeEl.addEventListener("load", e.resolve, !1), this.iframeEl.addEventListener("error", e.reject, !1), this.iframeEl.src = t, e.promise) : c.reject(new Error("sandbox not initialized"))
			}), t.after("initialize", function() {
				this._iframe = null, this._width = this._height = 0, this._resizeHandlers = []
			}), t.override("insert", function(t, e, n, r) {
				var o = this;
				return e = l.aug({
					id: t
				}, e), n = l.aug({}, d, n), this._iframe = s(e, n), p[t] = this, this.onResize(a(function() {
					o.makeVisible()
				})), i.write(f(r, null, this._iframe))
			}), t.override("onResize", function(t) {
				this._resizeHandlers.push(t)
			}), t.after("styleSelf", function() {
				return this.updateCachedDimensions()
			})
		}
		var i = n(46),
			o = n(84),
			a = n(89),
			s = n(90),
			u = n(1),
			c = n(2),
			f = n(20),
			l = n(14),
			d = {
				position: "absolute",
				visibility: "hidden",
				width: "0px",
				height: "0px"
			},
			h = {
				position: "static",
				visibility: "visible"
			},
			p = {};
		o(function(t, e, n) {
			var r = p[t];
			if (r) return r.styleSelf({
				width: e + "px",
				height: n + "px"
			}).then(function() {
				r.didResize()
			})
		}), t.exports = r
	}, function(t, e, n) {
		function r(t) {
			(new o).attachReceiver(new a.Receiver(i, "twttr.button")).bind("twttr.private.trigger", function(t, e) {
				var n = c(this);
				s.trigger(t, {
					target: n,
					region: e,
					type: t,
					data: {}
				})
			}).bind("twttr.private.resizeButton", function(e) {
				var n = c(this),
					r = n && n.id,
					i = u.asInt(e.width),
					o = u.asInt(e.height);
				r && i && o && t(r, i, o)
			})
		}
		var i = n(7),
			o = n(85),
			a = n(87),
			s = n(32),
			u = n(15),
			c = n(88);
		t.exports = r
	}, function(t, e, n) {
		function r(t) {
			this.registry = t || {}
		}

		function i(t) {
			return h.isType("string", t) ? l.parse(t) : t
		}

		function o(t) {
			var e, n, r;
			return h.isObject(t) ? (e = t.jsonrpc === m, n = h.isType("string", t.method), r = !("id" in t) || a(t.id), e && n && r) : !1
		}

		function a(t) {
			var e, n, r;
			return e = h.isType("string", t), n = h.isType("number", t), r = null === t, e || n || r
		}

		function s(t) {
			return h.isObject(t) && !h.isType("function", t)
		}

		function u(t, e) {
			return {
				jsonrpc: m,
				id: t,
				result: e
			}
		}

		function c(t, e) {
			return {
				jsonrpc: m,
				id: a(t) ? t : null,
				error: e
			}
		}

		function f(t) {
			return p.all(t).then(function(t) {
				return t = t.filter(function(t) {
					return void 0 !== t
				}), t.length ? t : void 0
			})
		}
		var l = n(41),
			d = n(86),
			h = n(14),
			p = n(2),
			v = n(44),
			m = "2.0";
		r.prototype._invoke = function(t, e) {
			var n, r, i;
			n = this.registry[t.method], r = t.params || [], r = h.isType("array", r) ? r : [r];
			try {
				i = n.apply(e.source || null, r)
			}
			catch (o) {
				i = p.reject(o.message)
			}
			return v.isPromise(i) ? i : p.resolve(i)
		}, r.prototype._processRequest = function(t, e) {
			function n(e) {
				return u(t.id, e)
			}

			function r() {
				return c(t.id, d.INTERNAL_ERROR)
			}
			var i;
			return o(t) ? (i = "params" in t && !s(t.params) ? p.resolve(c(t.id, d.INVALID_PARAMS)) : this.registry[t.method] ? this._invoke(t, {
				source: e
			}).then(n, r) : p.resolve(c(t.id, d.METHOD_NOT_FOUND)), null != t.id ? i : p.resolve()) : p.resolve(c(t.id, d.INVALID_REQUEST))
		}, r.prototype.attachReceiver = function(t) {
			return t.attachTo(this), this
		}, r.prototype.bind = function(t, e) {
			return this.registry[t] = e, this
		}, r.prototype.receive = function(t, e) {
			var n, r, o, a = this;
			try {
				t = i(t)
			}
			catch (s) {
				return p.resolve(c(null, d.PARSE_ERROR))
			}
			return e = e || null, n = h.isType("array", t), r = n ? t : [t], o = r.map(function(t) {
				return a._processRequest(t, e)
			}), n ? f(o) : o[0]
		}, t.exports = r
	}, function(t, e) {
		t.exports = {
			PARSE_ERROR: {
				code: -32700,
				message: "Parse error"
			},
			INVALID_REQUEST: {
				code: -32600,
				message: "Invalid Request"
			},
			INVALID_PARAMS: {
				code: -32602,
				message: "Invalid params"
			},
			METHOD_NOT_FOUND: {
				code: -32601,
				message: "Method not found"
			},
			INTERNAL_ERROR: {
				code: -32603,
				message: "Internal error"
			}
		}
	}, function(t, e, n) {
		function r(t, e, n) {
			var r;
			t && t.postMessage && (g ? r = (n || "") + l.stringify(e) : n ? (r = {}, r[n] = e) : r = e, t.postMessage(r, "*"))
		}

		function i(t) {
			return p.isType("string", t) ? t : "JSONRPC"
		}

		function o(t, e) {
			return e ? p.isType("string", t) && 0 === t.indexOf(e) ? t.substring(e.length) : t[e] ? t[e] : void 0 : t
		}

		function a(t, e) {
			var n = t.document;
			this.filter = i(e), this.server = null, this.isTwitterFrame = v.isTwitterURL(n.location.href), t.addEventListener("message", m(this._onMessage, this), !1)
		}

		function s(t, e) {
			this.pending = {}, this.target = t, this.isTwitterHost = v.isTwitterURL(c.href), this.filter = i(e), f.addEventListener("message", m(this._onMessage, this), !1)
		}

		function u(t) {
			return arguments.length > 0 && (g = !!t), g
		}
		var c = n(13),
			f = n(7),
			l = n(41),
			d = n(1),
			h = n(8),
			p = n(14),
			v = n(27),
			m = n(20),
			g = h.ie9();
		p.aug(a.prototype, {
			_onMessage: function(t) {
				var e, n = this;
				this.server && (!this.isTwitterFrame || v.isTwitterURL(t.origin)) && (e = o(t.data, this.filter), e && this.server.receive(e, t.source).then(function(e) {
					e && r(t.source, e, n.filter)
				}))
			},
			attachTo: function(t) {
				this.server = t
			},
			detach: function() {
				this.server = null
			}
		}), p.aug(s.prototype, {
			_processResponse: function(t) {
				var e = this.pending[t.id];
				e && (e.resolve(t), delete this.pending[t.id])
			},
			_onMessage: function(t) {
				var e;
				if ((!this.isTwitterHost || v.isTwitterURL(t.origin)) && (e = o(t.data, this.filter))) {
					if (p.isType("string", e)) try {
						e = l.parse(e)
					}
					catch (n) {
						return
					}
					e = p.isType("array", e) ? e : [e], e.forEach(m(this._processResponse, this))
				}
			},
			send: function(t) {
				var e = new d;
				return t.id ? this.pending[t.id] = e : e.resolve(), r(this.target, t, this.filter), e.promise
			}
		}), t.exports = {
			Receiver: a,
			Dispatcher: s,
			_stringifyPayload: u
		}
	}, function(t, e, n) {
		function r(t) {
			for (var e, n = i.getElementsByTagName("iframe"), r = 0; e = n[r]; r++)
				if (e.contentWindow === t) return e
		}
		var i = n(9);
		t.exports = r
	}, function(t, e) {
		function n(t) {
			var e, n = !1;
			return function() {
				return n ? e : (n = !0, e = t.apply(this, arguments))
			}
		}
		t.exports = n
	}, function(t, e, n) {
		var r = n(9),
			i = n(14);
		t.exports = function(t, e, n) {
			var o;
			if (n = n || r, t = t || {}, e = e || {}, t.name) {
				try {
					o = n.createElement('<iframe name="' + t.name + '"></iframe>')
				}
				catch (a) {
					o = n.createElement("iframe"), o.name = t.name
				}
				delete t.name
			}
			else o = n.createElement("iframe");
			return t.id && (o.id = t.id, delete t.id), o.allowtransparency = "true", o.scrolling = "no", o.setAttribute("frameBorder", 0), o.setAttribute("allowTransparency", !0), i.forIn(t, function(t, e) {
				o.setAttribute(t, e)
			}), i.forIn(e, function(t, e) {
				o.style[t] = e
			}), o
		}
	}, function(t, e, n) {
		function r(t) {
			var e = u(t),
				n = {
					collectionId: s.collectionId(t.href),
					limit: t.getAttribute("data-limit")
				};
			return a.forIn(n, function(t, n) {
				var r = e[t];
				e[t] = o.hasValue(r) ? r : n
			}), e
		}

		function i(t) {
			var e = c(t, l);
			return e.map(function(t) {
				return f(r(t), t.parentNode, t)
			})
		}
		var o = n(15),
			a = n(14),
			s = n(27),
			u = n(52),
			c = n(54)(),
			f = n(92),
			l = "a.twitter-grid";
		t.exports = i
	}, function(t, e, n) {
		function r(t, e, n) {
			return new i(o, a, "twitter-grid", t, e, n)
		}
		var i = n(58),
			o = n(93),
			a = n(108);
		t.exports = r
	}, function(t, e, n) {
		function r(t, e) {
			var r = new i;
			return n.e(2, function(i, o) {
				var a;
				return i ? r.reject(i) : (a = n(94), void r.resolve(new a(t, e)))
			}), r.promise
		}
		var i = n(1);
		t.exports = r
	}, , , function(t, e, n) {
		function r() {
			return u.builtUrl(l)
		}

		function i(t) {
			return "dark" === t ? "dark" : "light"
		}

		function o(t, e, n) {
			var r, o;
			return n = i(n), r = s.isRtlLang(e) ? "rtl" : "ltr", o = [t, c.css, n, r, "css"].join("."), u.base() + "/css/" + o
		}

		function a() {
			return u.base() + "/css/" + ["periscope_on_air", c.css, "css"].join(".")
		}
		var s = n(75),
			u = n(72),
			c = n(97),
			f = n(20),
			l = "embed/timeline.css";
		t.exports = {
			tweet: f(o, null, "tweet"),
			timeline: r,
			video: f(o, null, "video"),
			moment: f(o, null, "moment"),
			grid: f(o, null, "grid"),
			periscopeOnAir: a
		}
	}, function(t, e) {
		t.exports = {
			css: "4d586686769f226521146560e266e599"
		}
	}, , function(t, e, n) {
		function r() {
			return f + l++
		}

		function i(t, e, n, i) {
			var f, l, d;
			return i = i || r(), f = a.fullPath(["callbacks", i]), l = o.createElement("script"), d = new s, e = u.aug({}, e, {
				callback: f,
				suppress_response_codes: !0
			}), a.set(["callbacks", i], function(t) {
				var e, r;
				e = n(t || !1), t = e.resp, r = e.success, r ? d.resolve(t) : d.reject(t), l.onload = l.onreadystatechange = null, l.parentNode && l.parentNode.removeChild(l), a.unset(["callbacks", i])
			}), l.onerror = function() {
				d.reject(new Error("failed to fetch " + l.src))
			}, l.src = c.url(t, e), l.async = "async", o.body.appendChild(l), d.promise
		}
		var o = n(9),
			a = n(17),
			s = n(1),
			u = n(14),
			c = n(28),
			f = "cb",
			l = 0;
		t.exports = {
			fetch: i
		}
	}, function(t, e, n) {
		function r(t) {
			var e, n;
			return e = t.headers && t.headers.status, n = t && !t.error && 200 === e, !n && t.headers && t.headers.message && i.warn(t.headers.message), {
				success: n,
				resp: t
			}
		}
		var i = n(12);
		t.exports = r
	}, function(t, e) {
		function n() {
			var t = 9e5;
			return Math.floor(+new Date / t)
		}
		t.exports = n
	}, function(t, e, n) {
		function r(t) {
			return t ? (t = Array.isArray(t) ? t : [t], t.reduce(function(t, e) {
				var n = e.getAttribute("data-tweet-id"),
					r = e.getAttribute("data-rendered-tweet-id") || n;
				return n === r ? t[r] = {
					item_type: i.TWEET
				} : n && (t[r] = {
					item_type: i.RETWEET,
					target_type: i.TWEET,
					target_id: n
				}), t
			}, {})) : {}
		}
		var i = n(103);
		t.exports = r
	}, function(t, e) {
		t.exports = {
			TWEET: 0,
			RETWEET: 10,
			CUSTOM_TIMELINE: 17
		}
	}, function(t, e, n) {
		var r = n(9),
			i = n(15),
			o = r.createElement("div");
		t.exports = function(t) {
			return i.isNumber(t) && (t += "px"), o.style.width = "", o.style.width = t, o.style.width || null
		}
	}, function(t, e, n) {
		function r(t) {
			t.define("scribeNamespace", function() {
				return {
					client: "tfw"
				}
			}), t.define("scribeData", function() {
				return {
					widget_origin: a.rootDocumentLocation(),
					widget_frame: a.isFramed() && a.currentDocumentLocation()
				}
			}), t.define("scribe", function(t, e, n) {
				t = s.aug(this.scribeNamespace(), t || {}), e = s.aug(this.scribeData(), e || {}), i.scribe(t, e, !1, n)
			}), t.define("scribeInteraction", function(t, e, n) {
				var r = o.extractTermsFromDOM(t.target);
				r.action = t.type, this.scribe(r, e, n)
			})
		}
		var i = n(106),
			o = n(40),
			a = n(37),
			s = n(14);
		t.exports = r
	}, function(t, e, n) {
		function r(t) {
			t.forEach(function(t) {
				var e = t.input.namespace,
					n = t.input.data,
					r = t.input.offsite,
					i = t.input.version;
				u.clientEvent(e, n, r, i), t.taskDoneDeferred.resolve()
			})
		}

		function i(t) {
			function e() {
				t.forEach(function(t) {
					t.taskDoneDeferred.resolve()
				})
			}

			function n() {
				t.forEach(function(t) {
					t.taskDoneDeferred.reject()
				})
			}
			s.init(), t.forEach(function(t) {
				var e = t.input.namespace,
					n = t.input.data,
					r = t.input.offsite,
					i = t.input.version;
				s.clientEvent(e, n, r, i)
			}), s.flush().then(e, n)
		}

		function o(t) {
			(1 === t.length ? r : i)(t)
		}

		function a(t, e, n, r) {
			return f.add({
				namespace: t,
				data: e,
				offsite: n,
				version: r
			})
		}
		var s = n(107),
			u = n(35),
			c = n(48),
			f = new c(o);
		t.exports = {
			scribe: a
		}
	}, function(t, e, n) {
		function r() {
			function t(t) {
				h.body.appendChild(t)
			}
			return C ? N.promise : (d = new b, d.insert("rufous-sandbox", null, {
				display: "none"
			}, t).then(function() {
				f = u(), l = c(), N.resolve([f, l])
			}), C = !0, N.promise)
		}

		function i(t, e) {
			var n, r, i;
			y.isObject(t) && y.isObject(e) && (i = w.flattenClientEventPayload(t, e), n = f.firstChild, n.value = +(+n.value || i.dnt || 0), r = d.createElement("input"), r.type = "hidden", r.name = "l", r.value = w.stringify(i), f.appendChild(r))
		}

		function o(t, e, n) {
			var r = !y.isObject(t),
				o = e ? !y.isObject(e) : !1;
			r || o || N.promise.then(function() {
				i(w.formatClientEventNamespace(t), w.formatClientEventData(e, n))
			})
		}

		function a() {
			return N.promise.then(function() {
				if (f.children.length <= 2) return g.reject();
				var t = g.all([d.doc.body.appendChild(f), d.doc.body.appendChild(l)]).then(function(t) {
					var e = t[0],
						n = t[1];
					return n.addEventListener("load", function() {
						s(e, n)(), E.trigger("logflushed")
					}), e.submit(), t
				});
				return f = u(), l = c(), t
			})
		}

		function s(t, e) {
			return function() {
				var n = t.parentNode;
				n && (n.removeChild(t), n.removeChild(e))
			}
		}

		function u() {
			var t = d.createElement("form"),
				e = d.createElement("input"),
				n = d.createElement("input");
			return T++, t.action = w.CLIENT_EVENT_ENDPOINT, t.method = "POST", t.target = _ + T, t.id = A + T, e.type = "hidden", e.name = "dnt", e.value = v.enabled(), n.type = "hidden", n.name = "tfw_redirect", n.value = w.RUFOUS_REDIRECT, t.appendChild(e), t.appendChild(n), t
		}

		function c() {
			var t = _ + T;
			return p({
				id: t,
				name: t,
				width: 0,
				height: 0,
				border: 0
			}, {
				display: "none"
			}, d.doc)
		}
		var f, l, d, h = n(9),
			p = n(90),
			v = n(36),
			m = n(1),
			g = n(2),
			w = n(40),
			y = n(14),
			b = n(108),
			E = n(32),
			x = Math.floor(1e3 * Math.random()) + "_",
			_ = "rufous-frame-" + x + "-",
			A = "rufous-form-" + x + "-",
			T = 0,
			C = !1,
			N = new m;
		t.exports = {
			clientEvent: o,
			flush: a,
			init: r
		}
	}, function(t, e, n) {
		var r = n(80),
			i = n(109);
		t.exports = r.build([i])
	}, function(t, e, n) {
		function r(t, e, n) {
			return e = w.aug({
				id: t
			}, x, e), n = w.aug({}, _, n), p(e, n)
		}

		function i(t) {
			try {
				t.contentWindow.document
			}
			catch (e) {
				return g.reject(e)
			}
			return g.resolve(t)
		}

		function o(t, e, n, i) {
			var o = new m,
				a = b.generate(),
				s = r(t, e, n);
			return y.set(["sandbox", a], function() {
				var t = s.contentWindow.document,
					e = "<!DOCTYPE html><html><head></head><body></body></html>";
				f.write(function() {
					t.write(e)
				}).then(function() {
					t.close(), o.resolve(s)
				})
			}), s.src = ["javascript:", 'document.write("");', "try { window.parent.document; }", 'catch (e) { document.domain="' + u.domain + '"; }', "window.parent." + y.fullPath(["sandbox", a]) + "();"].join(""), s.addEventListener("error", o.reject, !1), f.write(function() {
				i.parentNode.replaceChild(s, i)
			}), o.promise
		}

		function a(t) {
			t.overrideProperty("id", {
				get: function() {
					return this.sandboxEl && this.sandboxEl.id
				}
			}), t.overrideProperty("initialized", {
				get: function() {
					return !!this.win
				}
			}), t.overrideProperty("width", {
				get: function() {
					return this._width
				}
			}), t.overrideProperty("height", {
				get: function() {
					return this._height
				}
			}), t.overrideProperty("sandboxEl", {
				get: function() {
					return this.iframeEl
				}
			}), t.defineProperty("iframeEl", {
				get: function() {
					return this._iframe
				}
			}), t.defineProperty("rootEl", {
				get: function() {
					return this.doc && this.doc.documentElement
				}
			}), t.defineProperty("widgetEl", {
				get: function() {
					return this.doc && this.doc.body.firstElementChild
				}
			}), t.defineProperty("win", {
				get: function() {
					return this.iframeEl && this.iframeEl.contentWindow
				}
			}), t.defineProperty("doc", {
				get: function() {
					return this.win && this.win.document
				}
			}), t.define("updateCachedDimensions", function() {
				var t = this;
				return f.read(function() {
					var e, n = v(t.sandboxEl);
					"visible" == t.sandboxEl.style.visibility ? t._width = n.width : (e = v(t.sandboxEl.parentElement).width, t._width = Math.min(n.width, e)), t._height = n.height
				})
			}), t.define("setTitle", function(t) {
				this.iframeEl.title = t
			}), t.define("createElement", function(t) {
				return this.doc.createElement(t)
			}), t.define("createFragment", function() {
				return this.doc.createDocumentFragment()
			}), t.define("htmlToElement", function(t) {
				var e;
				return e = this.createElement("div"), e.innerHTML = t, e.firstElementChild
			}), t.define("hasSelectedText", function() {
				return !!l.getSelectedText(this.win)
			}), t.define("setTargetToBlank", function() {
				var t = this.createElement("base");
				t.target = "_blank", this.doc.head.appendChild(t)
			}), t.define("addRootClass", function(t) {
				var e = this.rootEl;
				return t = Array.isArray(t) ? t : [t], this.initialized ? f.write(function() {
					t.forEach(function(t) {
						c.add(e, t)
					})
				}) : g.reject(new Error("sandbox not initialized"))
			}), t.define("removeRootClass", function(t) {
				var e = this.rootEl;
				return t = Array.isArray(t) ? t : [t], this.initialized ? f.write(function() {
					t.forEach(function(t) {
						c.remove(e, t)
					})
				}) : g.reject(new Error("sandbox not initialized"))
			}), t.define("hasRootClass", function(t) {
				return c.present(this.rootEl, t)
			}), t.define("addStyleSheet", function(t, e) {
				function n() {
					var t = o.doc.head.firstElementChild;
					return t ? o.doc.head.insertBefore(i, t) : o.doc.head.appendChild(i)
				}

				function r() {
					return o.doc.head.appendChild(i)
				}
				var i, o = this,
					a = new m;
				return this.initialized ? (i = this.createElement("link"), i.type = "text/css", i.rel = "stylesheet", i.href = t, i.addEventListener("load", a.resolve, !1), i.addEventListener("error", a.reject, !1), f.write(e ? n : r).then(function() {
					var e = o.createElement("img");
					return e.src = t, e.onerror = function() {
						s.setTimeout(a.resolve, 50)
					}, a.promise
				})) : g.reject(new Error("sandbox not initialized"))
			}), t.define("prependStyleSheet", function(t) {
				return this.addStyleSheet(t, !0)
			}), t.define("appendStyleSheet", function(t) {
				return this.addStyleSheet(t, !1)
			}), t.define("addCss", function(t, e) {
				function n() {
					var t = o.doc.head.firstElementChild;
					return t ? o.doc.head.insertBefore(i, t) : o.doc.head.appendChild(i)
				}

				function r() {
					return o.doc.head.appendChild(i)
				}
				var i, o = this;
				return d.cspEnabled() ? g.resolve() : (i = this.createElement("style"), i.type = "text/css", i.appendChild(this.doc.createTextNode(t)), f.write(e ? n : r))
			}), t.define("prependCss", function(t) {
				return this.addCss(t, !0)
			}), t.define("appendCss", function(t) {
				return this.addCss(t, !1)
			}), t.define("makeVisible", function() {
				var t = this;
				return this.styleSelf(A).then(function() {
					t.updateCachedDimensions()
				})
			}), t.define("injectWidgetEl", function(t) {
				var e = this;
				return this.initialized ? this.widgetEl ? g.reject(new Error("widget already injected")) : f.write(function() {
					e.doc.body.appendChild(t)
				}) : g.reject(new Error("sandbox not initialized"))
			}), t.define("matchHeightToContent", function() {
				var t, e = this;
				return f.read(function() {
					t = e.widgetEl ? v(e.widgetEl).height : 0
				}), f.write(function() {
					e.sandboxEl.style.height = t + "px"
				}).then(function() {
					return e.updateCachedDimensions()
				})
			}), t.define("matchWidthToContent", function() {
				var t, e = this;
				return f.read(function() {
					t = e.widgetEl ? v(e.widgetEl).width : 0
				}), f.write(function() {
					e.sandboxEl.style.width = t + "px"
				}).then(function() {
					return e.updateCachedDimensions()
				})
			}), t.define("didResize", function() {
				var t = this,
					e = t._resizeHandlers.length > 0;
				return this.updateCachedDimensions().then(function() {
					e && t._resizeHandlers.forEach(function(e) {
						e(t)
					})
				})
			}), t.after("initialize", function() {
				this._iframe = null, this._width = this._height = 0, this._resizeHandlers = []
			}), t.override("insert", function(t, e, n, a) {
				var s = this,
					u = new m,
					c = r(t, e, n);
				return f.write(E(a, null, c)), c.addEventListener("load", function() {
					i(c).then(null, E(o, null, t, e, n, c)).then(u.resolve, u.reject)
				}, !1), c.addEventListener("error", u.reject, !1), u.promise.then(function(t) {
					var e = h(s.didResize, N, s);
					return s._iframe = t, s.win.addEventListener("resize", e, !1), g.all([s.setTargetToBlank(), s.addRootClass(T), s.prependCss(C)])
				})
			}), t.override("onResize", function(t) {
				this._resizeHandlers.push(t)
			}), t.after("styleSelf", function() {
				return this.updateCachedDimensions()
			})
		}
		var s = n(7),
			u = n(9),
			c = n(24),
			f = n(46),
			l = n(110),
			d = n(8),
			h = n(111),
			p = n(90),
			v = (n(12), n(112)),
			m = n(1),
			g = n(2),
			w = n(14),
			y = n(17),
			b = n(31),
			E = n(20),
			x = {
				allowfullscreen: "true"
			},
			_ = {
				position: "absolute",
				visibility: "hidden",
				display: "block",
				width: "0px",
				height: "0px",
				padding: "0",
				border: "none"
			},
			A = {
				position: "static",
				visibility: "visible"
			},
			T = "SandboxRoot",
			C = ".SandboxRoot { display: none; }",
			N = 50;
		t.exports = a
	}, function(t, e, n) {
		function r(t) {
			return t = t || o, t.getSelection && t.getSelection()
		}

		function i(t) {
			var e = r(t);
			return e ? e.toString() : ""
		}
		var o = n(7);
		t.exports = {
			getSelection: r,
			getSelectedText: i
		}
	}, function(t, e, n) {
		function r(t, e, n) {
			function r() {
				var s = n || this,
					u = arguments,
					c = +new Date;
				return i.clearTimeout(o), c - a > e ? (a = c, void t.apply(s, u)) : void(o = i.setTimeout(function() {
					r.apply(s, u)
				}, e))
			}
			var o, a = 0;
			return n = n || null, r
		}
		var i = n(7);
		t.exports = r
	}, function(t, e) {
		function n(t) {
			var e = t.getBoundingClientRect();
			return {
				width: e.width,
				height: e.height
			}
		}
		t.exports = n
	}, function(t, e, n) {
		function r(t) {
			t.after("prepForInsertion", function(t) {
				o.sizeIframes(t, this.sandbox.width, a, i.sync)
			}), t.after("resize", function() {
				o.sizeIframes(this.el, this.sandbox.width, a, i.write)
			})
		}
		var i = n(46),
			o = n(114),
			a = 375;
		t.exports = r
	}, function(t, e, n) {
		function r(t) {
			var e = t.split(" ");
			this.url = decodeURIComponent(e[0].trim()), this.width = +e[1].replace(/w$/, "").trim()
		}

		function i(t, e, n) {
			var i, o, a, s;
			if (t = p.devicePixelRatio ? t * p.devicePixelRatio : t, o = e.split(",").map(function(t) {
					return new r(t.trim())
				}), n)
				for (s = 0; s < o.length; s++) o[s].url === n && (i = o[s]);
			return a = o.reduce(function(e, n) {
				return n.width < e.width && n.width >= t ? n : e
			}, o[0]), i && i.width > a.width ? i : a
		}

		function o(t, e) {
			var n, r = t.getAttribute("data-srcset"),
				o = t.src;
			r && (n = i(e, r, o), t.src = n.url)
		}

		function a(t, e) {
			e = void 0 !== e ? !!e : m.retina(), v.toRealArray(t.getElementsByTagName("IMG")).forEach(function(t) {
				var n = t.getAttribute("data-src-1x") || t.getAttribute("src"),
					r = t.getAttribute("data-src-2x");
				e && r ? t.src = r : n && (t.src = n)
			})
		}

		function s(t, e, n) {
			t && (v.toRealArray(t.querySelectorAll(".NaturalImage-image")).forEach(function(t) {
				n(function() {
					o(t, e)
				})
			}), v.toRealArray(t.querySelectorAll(".CroppedImage-image")).forEach(function(t) {
				n(function() {
					o(t, e / 2)
				})
			}), v.toRealArray(t.querySelectorAll("img.autosized-media")).forEach(function(t) {
				n(function() {
					o(t, e), t.removeAttribute("width"), t.removeAttribute("height")
				})
			}))
		}

		function u(t, e, n, r) {
			t && ((m.ios() || m.android()) && v.toRealArray(t.querySelectorAll(".FilledIframe")).forEach(function(t) {
				r(function() {
					l(t, {
						width: t.offsetWidth,
						height: t.offsetHeight
					})
				})
			}), v.toRealArray(t.querySelectorAll("iframe.autosized-media")).forEach(function(t) {
				var i = f(t.getAttribute("data-width"), t.getAttribute("data-height"), w.effectiveWidth(t.parentElement) || e, n);
				r(function() {
					t.width = i.width, t.height = i.height, l(t, i)
				})
			}))
		}

		function c(t, e, n, r) {
			s(t, e, r), u(t, e, n, r)
		}

		function f(t, e, n, r, i, o) {
			return n = n || t, r = r || e, i = i || 0, o = o || 0, t > n && (e *= n / t, t = n), e > r && (t *= r / e, e = r), i > t && (e *= i / t, t = i), o > e && (t *= o / e, e = o), {
				width: Math.floor(t),
				height: Math.floor(e)
			}
		}

		function l(t, e) {
			function n() {
				var t = {
					name: "tfw:resize",
					dimensions: e
				};
				i.postMessage(t, "*")
			}
			var r, i, o, a, s;
			t && (i = t.contentWindow, r = t.ownerDocument && t.ownerDocument.defaultView, o = m.ios() || m.android(), a = g.isTwitterURL(t.src), s = i && m.canPostMessage(i), o && a && s && (n(), r && r.addEventListener("message", function(t) {
				"tfw:requestsize" === t.data && n()
			}, !1)))
		}

		function d(t, e, n, r) {
			v.toRealArray(t.querySelectorAll(e)).forEach(function(t) {
				var e = t.getAttribute("style") || t.getAttribute("data-style"),
					i = r.test(e) && RegExp.$1;
				i && (t.setAttribute("data-csp-fix", !0), t.style[n] = i)
			})
		}

		function h(t) {
			m.cspEnabled() && (d(t, ".MediaCard-widthConstraint", "maxWidth", y), d(t, ".MediaCard-mediaContainer", "paddingBottom", x), d(t, ".CroppedImage-image", "top", b), d(t, ".CroppedImage-image", "left", E))
		}
		var p = n(7),
			v = n(14),
			m = n(8),
			g = n(27),
			w = n(115),
			y = /max-width:\s*([\d\.]+px)/,
			b = /top:\s*(\-?[\d\.]+%)/,
			E = /left:\s*(\-?[\d\.]+%)/,
			x = /padding-bottom:\s*([\d\.]+%)/;
		t.exports = {
			scaleDimensions: f,
			retinize: a,
			setSrcForImgs: s,
			sizeIframes: u,
			constrainMedia: c,
			fixMediaCardLayout: h,
			__setSrcFromSet: o
		}
	}, function(t, e) {
		function n(t) {
			return t && 1 === t.nodeType ? t.offsetWidth || n(t.parentNode) : 0
		}
		t.exports = {
			effectiveWidth: n
		}
	}, function(t, e, n) {
		function r(t) {
			return t.replace(/-(.)/g, function(t, e) {
				return e.toUpperCase()
			})
		}

		function i(t) {
			return (t || "").split(";").reduce(function(t, e) {
				var n, i;
				return c.test(e.trim()) && (n = RegExp.$1, i = RegExp.$2, t[r(n)] = i), t
			}, {})
		}

		function o(t) {
			var e = i(t.getAttribute("data-style"));
			0 !== Object.keys(e).length && (t.setAttribute("data-csp-fix", "true"), u.forIn(e, function(e, n) {
				t.style[e] = n
			}))
		}

		function a(t) {
			t.selectors({
				cspForcedStyle: ".js-cspForcedStyle"
			}), t.after("prepForInsertion", function(t) {
				s.cspEnabled() && this.select(t, "cspForcedStyle").forEach(o)
			})
		}
		var s = n(8),
			u = (n(12), n(14)),
			c = /^([a-zA-Z-]+):\s*(.+)$/;
		t.exports = a
	}, function(t, e, n) {
		function r(t) {
			t.define("injectRefSrcParam", function(t) {
				t.getAttribute(a) || (t.setAttribute(a, !0), t.href = i(t.href))
			}), t.after("render", function() {
				this.on("click", "A", function(t, e) {
					o.isTwitterURL(e.href) && this.injectRefSrcParam(e)
				})
			})
		}
		var i = n(118),
			o = n(27),
			a = "data-url-refsrc-injected";
		t.exports = r
	}, function(t, e, n) {
		function r(t) {
			return i.url(t, {
				ref_src: o
			})
		}
		var i = n(28),
			o = "twsrc^tfw";
		t.exports = r
	}, function(t, e, n) {
		function r(t) {
			t.after("prepForInsertion", function(t) {
				i.retinize(t)
			})
		}
		var i = n(114);
		t.exports = r
	}, function(t, e, n) {
		function r(t) {
			t.after("prepForInsertion", function(t) {
				o.setSrcForImgs(t, this.sandbox.width, i.sync)
			}), t.after("resize", function() {
				o.setSrcForImgs(this.el, this.sandbox.width, i.write)
			})
		}
		var i = n(46),
			o = n(114);
		t.exports = r
	}, function(t, e) {
		function n(t) {
			t.after("render", function() {
				var t = this.el.getAttribute(r);
				t && this.sandbox.setTitle(t)
			})
		}
		var r = "data-iframe-title";
		t.exports = n
	}, function(t, e, n) {
		function r(t) {
			return Object.keys(t).every(s.isInt)
		}

		function i(t) {
			var e = Object.keys(t).map(function(e) {
				return {
					size: +e,
					className: t[e]
				}
			}).sort(function(t, e) {
				return t.size - e.size
			});
			return e.unshift({
				size: 0,
				className: u
			}), e
		}

		function o(t) {
			t.params({
				breakpoints: {
					required: !0,
					validate: r,
					transform: i
				}
			}), t.define("getClassForWidth", function(t) {
				var e, n, r;
				for (n = this.params.breakpoints.length - 1; n >= 0; n--)
					if (r = this.params.breakpoints[n], t > r.size) {
						e = r.className;
						break
					}
				return e
			}), t.after("initialize", function() {
				this.allBreakpoints = this.params.breakpoints.map(function(t) {
					return t.className
				})
			}), t.define("recalculateBreakpoints", function() {
				var t = this.getClassForWidth(this.sandbox.width);
				return t && this.sandbox.hasRootClass(t) ? a.resolve() : a.all([this.sandbox.removeRootClass(this.allBreakpoints), this.sandbox.addRootClass(t)])
			}), t.after("render", function() {
				return this.recalculateBreakpoints()
			}), t.after("resize", function() {
				return this.recalculateBreakpoints()
			})
		}
		var a = n(2),
			s = n(15),
			u = "env-narrow";
		t.exports = o
	}, , , , function(t, e, n) {
		function r(t) {
			var e;
			t = i.parse(t), this.videoEl = t.videoEl, "loop" in t && (this.videoEl.loop = t.loop), "autoplay" in t && (this.videoEl.autoplay = t.autoplay), "poster" in t && (this.videoEl.poster = t.poster), e = s.toRealArray(this.videoEl.querySelectorAll("source")), this.sourceTypes = e.map(function(t) {
				return t.type
			})
		}
		var i, o = n(9),
			a = n(30),
			s = n(14);
		i = (new a).require("videoEl"), r.prototype.isPaused = function() {
			return this.videoEl.paused
		}, r.prototype.play = function() {
			return this.videoEl.play(), this
		}, r.prototype.pause = function() {
			return this.videoEl.pause(), this
		}, r.prototype.toggle = function() {
			return this.videoEl.paused ? this.play() : this.pause()
		}, r.prototype.mute = function() {
			return this.videoEl.muted = !0, this
		}, r.prototype.unmute = function() {
			return this.videoEl.muted = !1, this
		}, r.prototype.addSource = function(t, e) {
			var n = o.createElement("source");
			return n.src = t, n.type = e, this.sourceTypes.push(e), this.videoEl.appendChild(n), this
		}, r.prototype.hasPlayableSource = function() {
			var t = this.videoEl;
			return t.canPlayType ? this.sourceTypes.reduce(function(e, n) {
				return e || !!t.canPlayType(n).replace("no", "")
			}, !1) : !1
		}, r.prototype.setDimensions = function(t, e) {
			return this.videoEl.width = t, this.videoEl.height = e, this
		}, t.exports = r
	}, function(t, e, n) {
		function r(t) {
			t.selectors({
				clickToOpen: ".js-clickToOpenTarget"
			}), t.define("shouldOpenTarget", function(t) {
				var e = i.closest("A", t.target, this.el),
					n = this.sandbox.hasSelectedText();
				return !e && !n
			}), t.define("openTarget", function(t, e) {
				var n = e && e.getAttribute(u);
				n && (o(n), this.scribeOpenClick(t))
			}), t.define("attemptToOpenTarget", function(t, e) {
				this.shouldOpenTarget(t) && this.openTarget(t, e)
			}), t.define("scribeOpenClick", function(t) {
				var e = s.extractTermsFromDOM(t.target),
					n = {
						associations: s.formatTweetAssociation(e)
					};
				this.scribe({
					section: "chrome",
					action: "click"
				}, n)
			}), t.after("render", function() {
				this.on("click", "clickToOpen", this.attemptToOpenTarget)
			})
		}
		var i = n(25),
			o = n(128),
			a = n(61),
			s = n(40),
			u = "data-click-to-open-target";
		t.exports = a.couple(n(105), r)
	}, function(t, e, n) {
		function r(t) {
			a.isTwitterURL(t) && (t = o(t)), i.open(t)
		}
		var i = n(7),
			o = n(118),
			a = n(27);
		t.exports = r
	}, function(t, e, n) {
		function r(t) {
			t.params({
				productName: {
					required: !0
				},
				widgetId: {
					required: !1
				},
				related: {
					required: !1
				},
				partner: {
					fallback: l(a.val, a, "partner")
				}
			}), t.selectors({
				timeline: ".timeline",
				tweet: ".tweet"
			}), t.define("injectWebIntentParams", function(t) {
				var e = o.closest(this.selectors.tweet, t, this.el),
					n = o.closest(this.selectors.timeline, t, this.el);
				t.getAttribute(d) || (t.setAttribute(d, !0), t.href = c.url(t.href, {
					tw_w: this.params.widgetId,
					tw_i: e && e.getAttribute("data-tweet-id"),
					tw_p: this.params.productName,
					related: this.params.related,
					partner: this.params.partner,
					query: n && n.getAttribute("data-search-query"),
					profile_id: n && n.getAttribute("data-profile-id"),
					original_referer: u.rootDocumentLocation()
				}))
			}), t.after("render", function() {
				this.on("click", "A", function(t, e) {
					f.isIntentURL(e.href) && (this.injectWebIntentParams(e), t.altKey || t.metaKey || t.shiftKey || (s.open(e.href, this.sandbox.sandboxEl), i.preventDefault(t)))
				})
			})
		}
		var i = n(23),
			o = n(25),
			a = n(16),
			s = n(26),
			u = n(37),
			c = n(28),
			f = n(27),
			l = n(20),
			d = "data-url-params-injected";
		t.exports = r
	}, function(t, e, n) {
		function r(t) {
			t.before("render", function() {
				i.ios() && this.sandbox.addRootClass("env-ios"), i.ie9() && this.sandbox.addRootClass("ie9"), i.touch() && this.sandbox.addRootClass("is-touch")
			})
		}
		var i = n(8);
		t.exports = r
	}, function(t, e, n) {
		function r(t) {
			t.after("render", function() {
				new i(this.sandbox.win)
			})
		}
		var i = n(132);
		t.exports = r
	}, function(t, e, n) {
		function r(t, e) {
			return t && t.getAttribute ? t.getAttribute("data-" + e) : void 0
		}

		function i(t, e) {
			return {
				element: t.element || w,
				action: t.action || y,
				page: o(e) ? "video" : void 0
			}
		}

		function o(t) {
			return d.closest(".embedded-video", t)
		}

		function a(t) {
			var e = d.closest(".tweet", t),
				n = !e && d.closest(".EmbeddedTweet", t);
			return n && (e = n.querySelector(".tweet.subject")), e
		}

		function s(t) {
			return f.parse(r(o(t), "player-config"))
		}

		function u(t, e) {
			var n, i, s, u = o(e);
			return u ? n = l.aug({
				item_type: m,
				card_type: g,
				id: r(u, "tweet-id"),
				card_name: r(u, "card-name"),
				publisher_id: r(u, "publisher-id"),
				content_id: r(u, "content-id")
			}, t.itemData || {}) : (i = d.closest(".cards-multimedia", e), s = a(e), n = l.aug({
				item_type: m,
				card_type: g,
				id: r(s, "tweet-id"),
				card_name: r(i, "card-name"),
				publisher_id: r(i, "publisher-id"),
				content_id: r(i, "video-content-id")
			}, t.itemData || {})), {
				items: [n]
			}
		}

		function c(t) {
			var e = this;
			this.global = t, this.server = (new h).attachReceiver(new v.Receiver(t, "")).bind("scribe", function(t) {
				e.scribe(t, this)
			}).bind("requestPlayerConfig", function() {
				return e.requestPlayerConfig(this)
			})
		}
		var f = n(41),
			l = n(14),
			d = n(25),
			h = n(85),
			p = n(35),
			v = n(87),
			m = 0,
			g = 6,
			w = "amplify_player",
			y = "undefined";
		c.prototype.findIframeByWindow = function(t) {
			for (var e = this.global.document.getElementsByTagName("iframe"), n = e.length, r = 0; n > r; r++)
				if (e[r].contentWindow == t) return e[r]
		}, c.prototype.requestPlayerConfig = function(t) {
			var e = this.findIframeByWindow(t);
			if (e) return s(e)
		}, c.prototype.scribe = function(t, e) {
			var n, r, o, a;
			n = t && t.customScribe, r = this.findIframeByWindow(e), n && r && (o = i(n, r), a = u(n, r), p.clientEvent2(o, a, !0))
		}, t.exports = c
	}, function(t, e, n) {
		function r(t) {
			t.params({
				pageForAudienceImpression: {
					required: !0
				}
			}), t.before("hydrate", function() {
				i.scribeAudienceImpression(this.params.pageForAudienceImpression)
			})
		}
		var i = n(134);
		t.exports = r
	}, function(t, e, n) {
		function r() {
			return f.formatGenericEventData("syndicated_impression", {})
		}

		function i() {
			u("tweet")
		}

		function o() {
			u("timeline")
		}

		function a() {
			u("video")
		}

		function s() {
			u("partnertweet")
		}

		function u(t) {
			l.isHostPageSensitive() || d[t] || (d[t] = !0, c.scribe(f.formatClientEventNamespace({
				page: t,
				action: "impression"
			}), r(), f.AUDIENCE_ENDPOINT))
		}
		var c = n(35),
			f = n(40),
			l = n(39),
			d = {};
		t.exports = {
			scribeAudienceImpression: u,
			scribePartnerTweetAudienceImpression: s,
			scribeTweetAudienceImpression: i,
			scribeTimelineAudienceImpression: o,
			scribeVideoAudienceImpression: a
		}
	}, function(t, e, n) {
		function r(t) {
			var e;
			if (t) return e = s([t]), {
				item_ids: Object.keys(e),
				item_details: e
			}
		}

		function i(t) {
			t.selectors({
				tweet: ".tweet",
				tweetIdInfo: ".js-tweetIdInfo"
			}), t.define("scribeClickInteraction", function(t, e) {
				var n = o.closest(this.selectors.tweet, e, this.el),
					i = o.closest(this.selectors.tweetIdInfo, e, this.el);
				this.scribeInteraction(t, r(n || i))
			}), t.after("render", function() {
				this.on("click", "A", this.scribeClickInteraction), this.on("click", "BUTTON", this.scribeClickInteraction)
			})
		}
		var o = n(25),
			a = n(61),
			s = n(102);
		t.exports = a.couple(n(105), i)
	}, function(t, e, n) {
		function r(t) {
			var e = {
					action: "dimensions"
				},
				n = new o(a);
			t.last("render", function() {
				if (n.nextBoolean()) {
					var t = this.sandbox.width,
						r = this.sandbox.height,
						i = {
							context: t + "," + r
						};
					this.scribe(e, i)
				}
			})
		}
		var i = n(61),
			o = n(137),
			a = 1;
		t.exports = i.couple(n(105), r)
	}, function(t, e) {
		function n(t) {
			this.percentage = t
		}
		n.prototype.nextBoolean = function() {
			return 100 * Math.random() < this.percentage
		}, t.exports = n
	}, function(t, e, n) {
		function r(t) {
			var e = u(t),
				n = {
					momentId: s.momentId(t.href),
					limit: t.getAttribute("data-limit")
				};
			return a.forIn(n, function(t, n) {
				var r = e[t];
				e[t] = o.hasValue(r) ? r : n
			}), e
		}

		function i(t) {
			var e = c(t, l);
			return e.map(function(t) {
				return f(r(t), t.parentNode, t)
			})
		}
		var o = n(15),
			a = n(14),
			s = n(27),
			u = n(52),
			c = n(54)(),
			f = n(139),
			l = "a.twitter-moment";
		t.exports = i
	}, function(t, e, n) {
		function r(t, e, n) {
			return new i(o, a, "twitter-moment", t, e, n)
		}
		var i = n(58),
			o = n(140),
			a = n(108);
		t.exports = r
	}, function(t, e, n) {
		function r(t, e) {
			var r = new i;
			return n.e(3, function(i, o) {
				var a;
				return i ? r.reject(i) : (a = n(141), void r.resolve(new a(t, e)))
			}), r.promise
		}
		var i = n(1);
		t.exports = r
	}, , , , function(t, e, n) {
		function r(t) {
			var e = a(t),
				n = t.getAttribute("href"),
				r = t.getAttribute("data-size"),
				i = f.exec(n)[1];
			return o.aug(e, {
				username: i,
				size: r
			})
		}

		function i(t) {
			var e = s(t, c);
			return e.map(function(t) {
				return u(r(t), t.parentNode, t)
			})
		}
		var o = n(14),
			a = n(52),
			s = n(54)(),
			u = n(145),
			c = "a.periscope-on-air",
			f = /^https?:\/\/(?:www\.)?periscope\.tv\/@?([a-zA-Z0-9_]+)\/?$/i;
		t.exports = i
	}, function(t, e, n) {
		function r(t, e, n) {
			return new i(o, a, "periscope-on-air", t, e, n)
		}
		var i = n(58),
			o = n(146),
			a = n(108);
		t.exports = r
	}, function(t, e, n) {
		function r(t, e) {
			var r = new i;
			return n.e(4, function(i, o) {
				var a;
				return i ? r.reject(i) : (a = n(147), void r.resolve(new a(t, e)))
			}), r.promise
		}
		var i = n(1);
		t.exports = r
	}, , , , function(t, e, n) {
		function r(t) {
			var e = s(t),
				n = t.getAttribute("data-show-replies"),
				r = {
					widgetId: t.getAttribute("data-widget-id"),
					chrome: t.getAttribute("data-chrome"),
					tweetLimit: t.getAttribute("data-tweet-limit"),
					ariaLive: t.getAttribute("data-aria-polite"),
					theme: t.getAttribute("data-theme"),
					linkColor: t.getAttribute("data-link-color"),
					borderColor: t.getAttribute("data-border-color"),
					profileShowReplies: n ? o.asBoolean(n) : null,
					profileScreenName: t.getAttribute("data-screen-name"),
					profileUserId: t.getAttribute("data-user-id"),
					favoritesScreenName: t.getAttribute("data-favorites-screen-name"),
					favoritesUserId: t.getAttribute("data-favorites-user-id"),
					listOwnerScreenName: t.getAttribute("data-list-owner-screen-name"),
					listOwnerUserId: t.getAttribute("data-list-owner-id"),
					listId: t.getAttribute("data-list-id"),
					listSlug: t.getAttribute("data-list-slug"),
					customTimelineId: t.getAttribute("data-custom-timeline-id")
				};
			return a.forIn(r, function(t, n) {
				var r = e[t];
				e[t] = o.hasValue(r) ? r : n
			}), e
		}

		function i(t) {
			var e = u(t, f);
			return e.map(function(t) {
				return c(r(t), t.parentNode, t)
			})
		}
		var o = n(15),
			a = n(14),
			s = n(52),
			u = n(54)(),
			c = n(151),
			f = "a.twitter-timeline,div.twitter-timeline";
		t.exports = i
	}, function(t, e, n) {
		function r(t, e, n) {
			return new i(o, a, "twitter-timeline", t, e, n)
		}
		var i = n(58),
			o = n(152),
			a = n(108);
		t.exports = r
	}, function(t, e, n) {
		function r(t, e) {
			var r = new i;
			return n.e(5, function(i, o) {
				var a;
				return i ? r.reject(i) : (a = n(153), void r.resolve(new a(t, e)))
			}), r.promise
		}
		var i = n(1);
		t.exports = r
	}, , , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {
		function r(t) {
			var e = u(t),
				n = t.getElementsByTagName("A"),
				r = n && n[n.length - 1],
				i = r && a.status(r.href),
				c = t.getAttribute("data-conversation"),
				f = "none" == c || "hidden" == c || o.present(t, "tw-hide-thread"),
				l = t.getAttribute("data-cards"),
				h = "none" == l || "hidden" == l || o.present(t, "tw-hide-media"),
				p = t.getAttribute("data-align") || t.getAttribute("align"),
				v = t.getAttribute("data-link-color"),
				m = t.getAttribute("data-theme");
			return !p && d.test(t.className) && (p = RegExp.$1), s.aug(e, {
				tweetId: i,
				hideThread: f,
				hideCard: h,
				align: p,
				linkColor: v,
				theme: m
			})
		}

		function i(t) {
			var e = c(t, l);
			return e.map(function(t) {
				return f(r(t), t.parentNode, t)
			})
		}
		var o = n(24),
			a = n(27),
			s = n(14),
			u = n(52),
			c = n(54)(),
			f = n(176),
			l = "blockquote.twitter-tweet",
			d = /\btw-align-(left|right|center)\b/;
		t.exports = i
	}, function(t, e, n) {
		function r(t, e, n) {
			return new i(o, a, "twitter-tweet", t, e, n)
		}
		var i = n(58),
			o = n(177),
			a = n(108);
		t.exports = r
	}, function(t, e, n) {
		function r(t, e) {
			var r = new i;
			return n.e(6, function(i, o) {
				var a;
				return i ? r.reject(i) : (a = n(178), void r.resolve(new a(t, e)))
			}), r.promise
		}
		var i = n(1);
		t.exports = r
	}, , , , , , , , , , , , , , , function(t, e, n) {
		function r(t) {
			var e = s(t),
				n = {
					screenName: t.getAttribute("data-button-screen-name"),
					text: t.getAttribute("data-text"),
					type: t.getAttribute("data-type"),
					size: t.getAttribute("data-size"),
					count: t.getAttribute("data-count"),
					align: t.getAttribute("data-align"),
					countUrl: t.getAttribute("data-counturl"),
					url: t.getAttribute("data-url"),
					hashtags: t.getAttribute("data-hashtags"),
					via: t.getAttribute("data-via"),
					buttonHashtag: t.getAttribute("data-button-hashtag"),
					searchLink: t.getAttribute("data-searchlink")
				};
			return a.forIn(n, function(t, n) {
				var r = e[t];
				e[t] = f.hasValue(r) ? r : n
			}), e.screenName = e.screenName || e.screen_name, e.buttonHashtag = e.buttonHashtag || e.button_hashtag || e.hashtag, o.present(t, d) && (e.type = "hashtag"), o.present(t, h) && (e.type = "mention"), e
		}

		function i(t) {
			var e = u(t, l);
			return e.map(function(t) {
				return c(r(t), t.parentNode, t)
			})
		}
		var o = n(24),
			a = n(14),
			s = n(52),
			u = n(54)(),
			c = n(193),
			f = n(15),
			l = "a.twitter-share-button, a.twitter-mention-button, a.twitter-hashtag-button",
			d = "twitter-hashtag-button",
			h = "twitter-mention-button";
		t.exports = i
	}, function(t, e, n) {
		function r(t, e, n) {
			var r = t && t.type || "share",
				s = "hashtag" == r ? "twitter-hashtag-button" : "mention" == r ? "twitter-mention-button" : "twitter-share-button";
			return new i(o, a, s, t, e, n)
		}
		var i = n(58),
			o = n(194),
			a = n(79);
		t.exports = r
	}, function(t, e, n) {
		function r(t, e) {
			var r = new i;
			return n.e(1, function(i, o) {
				var a;
				return i ? r.reject(i) : (a = n(195), void r.resolve(new a(t, e)))
			}), r.promise
		}
		var i = n(1);
		t.exports = r
	}, , , function(t, e, n) {
		function r(t) {
			var e = s(t),
				n = t.getElementsByTagName("A"),
				r = n && n[n.length - 1],
				i = r && o.status(r.href),
				u = "hidden" == t.getAttribute("data-status");
			return a.aug(e, {
				tweetId: i,
				hideStatus: u
			})
		}

		function i(t) {
			var e = u(t, f);
			return e.map(function(t) {
				return c(r(t), t.parentNode, t)
			})
		}
		var o = n(27),
			a = n(14),
			s = n(52),
			u = n(54)(),
			c = n(198),
			f = "blockquote.twitter-video";
		t.exports = i
	}, function(t, e, n) {
		function r(t, e, n) {
			return new i(o, a, "twitter-video", t, e, n)
		}
		var i = n(58),
			o = n(199),
			a = n(203);
		t.exports = r
	}, function(t, e, n) {
		function r(t, e) {
			var r = new i;
			return n.e(6, function(i, o) {
				var a;
				return i ? r.reject(i) : (a = n(200), void r.resolve(new a(t, e)))
			}), r.promise
		}
		var i = n(1);
		t.exports = r
	}, , , , function(t, e, n) {
		function r(t) {
			t.overrideProperty("sandboxEl", {
				get: function() {
					return this._constrainingWrapper
				}
			}), t.override("makeVisible", function() {
				var t = this.iframeEl;
				return i.write(function() {
					t.style.visibility = "visible"
				})
			}), t.define("setWrapperSize", function(t, e) {
				var n = this,
					r = t / e,
					o = 100 / r + "%",
					a = c * r + "px";
				return i.write(function() {
					n._constrainingWrapper.style.maxWidth = a, n._iframeWrapper.style.paddingBottom = o
				})
			}), t.after("initialize", function() {
				this._constrainingWrapper = this._iframeWrapper = null
			}), t.around("insert", function(t, e, n, r, i) {
				var a = this._constrainingWrapper = o.createElement("div"),
					s = this._iframeWrapper = o.createElement("div");
				return a.id = e, a.className = (n || {})["class"], a.style.minWidth = u + "px", a.style.position = "relative", a.style.margin = f, s.style.position = "relative", s.style.height = "0px", a.appendChild(s), t(void 0, null, null, function(t) {
					t.style.position = "absolute", t.style.top = "0px", t.style.bottom = "0px", t.style.width = "100%", t.style.height = "100%", s.appendChild(t), i(a)
				})
			})
		}
		var i = n(46),
			o = n(9),
			a = n(80),
			s = n(109),
			u = 320,
			c = 500,
			f = "10px 0px";
		t.exports = a.build([s, r])
	}, function(t, e, n) {
		var r = n(14);
		t.exports = r.aug({}, n(205), n(207), n(208), n(209), n(210), n(211), n(212), n(213))
	}, function(t, e, n) {
		var r = n(57),
			i = n(206),
			o = i(["screenName"], {}, r);
		t.exports = {
			createFollowButton: o
		}
	}, function(t, e, n) {
		function r(t, e, n) {
			t = t || [], e = e || {};
			var r = "ƒ(" + t.join(", ") + ", target, [options]);";
			return function() {
				var c, f, l, d, h = Array.prototype.slice.apply(arguments, [0, t.length]),
					p = Array.prototype.slice.apply(arguments, [t.length]);
				return p.forEach(function(t) {
					return t ? t.nodeType === Node.ELEMENT_NODE ? void(l = t) : u.isType("function", t) ? void(c = t) : void(u.isType("object", t) && (f = t)) : void 0
				}), h.length !== t.length || 0 === p.length ? (c && u.async(function() {
					c(!1)
				}), i.reject(new Error("Not enough parameters. Expected: " + r))) : l ? (f = u.aug(f || {}, e), t.forEach(function(t) {
					f[t] = h.shift()
				}), s.asBoolean(f.dnt) && a.setOn(), d = o.addWidget(n(f, l)), c && d.then(c, function() {
					c(!1)
				}), d) : (c && u.async(function() {
					c(!1)
				}), i.reject(new Error("No target element specified. Expected: " + r)))
			}
		}
		var i = n(2),
			o = n(45),
			a = n(36),
			s = n(15),
			u = n(14);
		t.exports = r
	}, function(t, e, n) {
		var r = n(92),
			i = n(206),
			o = i(["collectionId"], {}, r);
		t.exports = {
			createGridFromCollection: o
		}
	}, function(t, e, n) {
		var r = n(139),
			i = n(206),
			o = i(["momentId"], {}, r);
		t.exports = {
			createMoment: o
		}
	}, function(t, e, n) {
		var r = n(145),
			i = n(206),
			o = i(["username"], {}, r);
		t.exports = {
			createPeriscopeOnAirButton: o
		}
	}, function(t, e, n) {
		function r(t) {
			return function() {
				return a.toRealArray(arguments).slice(1).forEach(function(t) {
					a.isType("object", t) && (t.profileScreenName = t.screenName, t.profileUserId = t.userId, t.profileShowReplies = t.showReplies, t.listOwnerUserId = t.listOwnerId, t.ariaLive = t.ariaPolite)
				}), t.apply(this, arguments)
			}
		}
		var i = n(13),
			o = n(27),
			a = n(14),
			s = n(151),
			u = n(206),
			c = u(["widgetId"], {}, s),
			f = {
				createTimeline: r(c)
			};
		o.isTwitterURL(i.href) && (f.createTimelinePreview = function(t, e, n) {
			return f.createTimeline("preview", e, {
				previewParams: t || {}
			}, n)
		}), t.exports = f
	}, function(t, e, n) {
		function r(t) {
			return function() {
				return i.toRealArray(arguments).slice(1).forEach(function(t) {
					i.isType("object", t) && (t.hideCard = "none" == t.cards || "hidden" == t.cards, t.hideThread = "none" == t.conversation || "hidden" == t.conversation)
				}), t.apply(this, arguments)
			}
		}
		var i = n(14),
			o = n(176),
			a = n(206),
			s = r(a(["tweetId"], {}, o));
		t.exports = {
			createTweet: s,
			createTweetEmbed: s
		}
	}, function(t, e, n) {
		function r(t) {
			return function() {
				return i.toRealArray(arguments).slice(1).forEach(function(t) {
					i.isType("object", t) && (t.screenName = t.screenName || t.screen_name, t.buttonHashtag = t.buttonHashtag || t.button_hashtag || t.hashtag, t.countUrl = t.countUrl || t.counturl)
				}), t.apply(this, arguments)
			}
		}
		var i = n(14),
			o = n(193),
			a = n(206),
			s = a(["url"], {
				type: "share"
			}, o),
			u = a(["buttonHashtag"], {
				type: "hashtag"
			}, o),
			c = a(["screenName"], {
				type: "mention"
			}, o);
		t.exports = {
			createShareButton: r(s),
			createHashtagButton: r(u),
			createMentionButton: r(c)
		}
	}, function(t, e, n) {
		var r = n(198),
			i = n(206),
			o = i(["tweetId"], {}, r);
		t.exports = {
			createVideo: o
		}
	}])))
}();
