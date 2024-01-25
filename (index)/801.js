"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[801], {
    622: function (e, t, r) {
        var n = r(2265)
            , i = Symbol.for("react.element")
            , a = Symbol.for("react.fragment")
            , o = Object.prototype.hasOwnProperty
            , u = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
            , l = {
                key: !0,
                ref: !0,
                __self: !0,
                __source: !0
            };
        function s(e, t, r) {
            var n, a = {}, s = null, c = null;
            for (n in void 0 !== r && (s = "" + r),
                void 0 !== t.key && (s = "" + t.key),
                void 0 !== t.ref && (c = t.ref),
                t)
                o.call(t, n) && !l.hasOwnProperty(n) && (a[n] = t[n]);
            if (e && e.defaultProps)
                for (n in t = e.defaultProps)
                    void 0 === a[n] && (a[n] = t[n]);
            return {
                $$typeof: i,
                type: e,
                key: s,
                ref: c,
                props: a,
                _owner: u.current
            }
        }
        t.Fragment = a,
            t.jsx = s,
            t.jsxs = s
    },
    7437: function (e, t, r) {
        e.exports = r(622)
    },
    1853: function (e, t, r) {
        /**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
        var n = r(2265)
            , i = "function" == typeof Object.is ? Object.is : function (e, t) {
                return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
            }
            , a = n.useState
            , o = n.useEffect
            , u = n.useLayoutEffect
            , l = n.useDebugValue;
        function s(e) {
            var t = e.getSnapshot;
            e = e.value;
            try {
                var r = t();
                return !i(e, r)
            } catch (e) {
                return !0
            }
        }
        var c = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function (e, t) {
            return t()
        }
            : function (e, t) {
                var r = t()
                    , n = a({
                        inst: {
                            value: r,
                            getSnapshot: t
                        }
                    })
                    , i = n[0].inst
                    , c = n[1];
                return u(function () {
                    i.value = r,
                        i.getSnapshot = t,
                        s(i) && c({
                            inst: i
                        })
                }, [e, r, t]),
                    o(function () {
                        return s(i) && c({
                            inst: i
                        }),
                            e(function () {
                                s(i) && c({
                                    inst: i
                                })
                            })
                    }, [e]),
                    l(r),
                    r
            }
            ;
        t.useSyncExternalStore = void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : c
    },
    6272: function (e, t, r) {
        e.exports = r(1853)
    },
    2333: function (e, t, r) {
        r.d(t, {
            ZP: function () {
                return ee
            }
        });
        var n, i = r(2265), a = r(6272);
        let o = () => { }
            , u = o()
            , l = Object
            , s = e => e === u
            , c = e => "function" == typeof e
            , d = (e, t) => ({
                ...e,
                ...t
            })
            , f = e => c(e.then)
            , E = new WeakMap
            , g = 0
            , p = e => {
                let t, r;
                let n = typeof e
                    , i = e && e.constructor
                    , a = i == Date;
                if (l(e) !== e || a || i == RegExp)
                    t = a ? e.toJSON() : "symbol" == n ? e.toString() : "string" == n ? JSON.stringify(e) : "" + e;
                else {
                    if (t = E.get(e))
                        return t;
                    if (t = ++g + "~",
                        E.set(e, t),
                        i == Array) {
                        for (r = 0,
                            t = "@"; r < e.length; r++)
                            t += p(e[r]) + ",";
                        E.set(e, t)
                    }
                    if (i == l) {
                        t = "#";
                        let n = l.keys(e).sort();
                        for (; !s(r = n.pop());)
                            s(e[r]) || (t += r + ":" + p(e[r]) + ",");
                        E.set(e, t)
                    }
                }
                return t
            }
            , _ = new WeakMap
            , y = {}
            , w = {}
            , v = "undefined"
            , h = typeof window != v
            , R = typeof document != v
            , m = () => h && typeof window.requestAnimationFrame != v
            , O = (e, t) => {
                let r = _.get(e);
                return [() => !s(t) && e.get(t) || y, n => {
                    if (!s(t)) {
                        let i = e.get(t);
                        t in w || (w[t] = i),
                            r[5](t, d(i, n), i || y)
                    }
                }
                    , r[6], () => !s(t) && t in w ? w[t] : !s(t) && e.get(t) || y]
            }
            , T = !0
            , [S, b] = h && window.addEventListener ? [window.addEventListener.bind(window), window.removeEventListener.bind(window)] : [o, o]
            , V = {
                initFocus: e => (R && document.addEventListener("visibilitychange", e),
                    S("focus", e),
                    () => {
                        R && document.removeEventListener("visibilitychange", e),
                            b("focus", e)
                    }
                ),
                initReconnect: e => {
                    let t = () => {
                        T = !0,
                            e()
                    }
                        , r = () => {
                            T = !1
                        }
                        ;
                    return S("online", t),
                        S("offline", r),
                        () => {
                            b("online", t),
                                b("offline", r)
                        }
                }
            }
            , L = !i.useId
            , k = !h || "Deno" in window
            , C = e => m() ? window.requestAnimationFrame(e) : setTimeout(e, 1)
            , N = k ? i.useEffect : i.useLayoutEffect
            , D = "undefined" != typeof navigator && navigator.connection
            , A = !k && D && (["slow-2g", "2g"].includes(D.effectiveType) || D.saveData)
            , x = e => {
                if (c(e))
                    try {
                        e = e()
                    } catch (t) {
                        e = ""
                    }
                let t = e;
                return [e = "string" == typeof e ? e : (Array.isArray(e) ? e.length : e) ? p(e) : "", t]
            }
            , I = 0
            , P = () => ++I;
        var F = {
            ERROR_REVALIDATE_EVENT: 3,
            FOCUS_EVENT: 0,
            MUTATE_EVENT: 2,
            RECONNECT_EVENT: 1
        };
        async function M(...e) {
            let [t, r, n, i] = e
                , a = d({
                    populateCache: !0,
                    throwOnError: !0
                }, "boolean" == typeof i ? {
                    revalidate: i
                } : i || {})
                , o = a.populateCache
                , l = a.rollbackOnError
                , E = a.optimisticData
                , g = !1 !== a.revalidate
                , p = e => "function" == typeof l ? l(e) : !1 !== l
                , y = a.throwOnError;
            if (c(r)) {
                let e = [];
                for (let n of t.keys())
                    !/^\$(inf|sub)\$/.test(n) && r(t.get(n)._k) && e.push(n);
                return Promise.all(e.map(w))
            }
            return w(r);
            async function w(r) {
                let i;
                let [a] = x(r);
                if (!a)
                    return;
                let [l, d] = O(t, a)
                    , [w, v, h, R] = _.get(t)
                    , m = () => {
                        let e = w[a];
                        return g && (delete h[a],
                            delete R[a],
                            e && e[0]) ? e[0](2).then(() => l().data) : l().data
                    }
                    ;
                if (e.length < 3)
                    return m();
                let T = n
                    , S = P();
                v[a] = [S, 0];
                let b = !s(E)
                    , V = l()
                    , L = V.data
                    , k = V._c
                    , C = s(k) ? L : k;
                if (b && d({
                    data: E = c(E) ? E(C, L) : E,
                    _c: C
                }),
                    c(T))
                    try {
                        T = T(C)
                    } catch (e) {
                        i = e
                    }
                if (T && f(T)) {
                    if (T = await T.catch(e => {
                        i = e
                    }
                    ),
                        S !== v[a][0]) {
                        if (i)
                            throw i;
                        return T
                    }
                    i && b && p(i) && (o = !0,
                        d({
                            data: C,
                            _c: u
                        }))
                }
                if (o && !i && (c(o) ? d({
                    data: o(T, C),
                    error: u,
                    _c: u
                }) : d({
                    data: T,
                    error: u,
                    _c: u
                })),
                    v[a][1] = P(),
                    Promise.resolve(m()).then(() => {
                        d({
                            _c: u
                        })
                    }
                    ),
                    i) {
                    if (y)
                        throw i;
                    return
                }
                return T
            }
        }
        let j = (e, t) => {
            for (let r in e)
                e[r][0] && e[r][0](t)
        }
            , U = (e, t) => {
                if (!_.has(e)) {
                    let r = d(V, t)
                        , n = {}
                        , i = M.bind(u, e)
                        , a = o
                        , l = {}
                        , s = (e, t) => {
                            let r = l[e] || [];
                            return l[e] = r,
                                r.push(t),
                                () => r.splice(r.indexOf(t), 1)
                        }
                        , c = (t, r, n) => {
                            e.set(t, r);
                            let i = l[t];
                            if (i)
                                for (let e of i)
                                    e(r, n)
                        }
                        , f = () => {
                            if (!_.has(e) && (_.set(e, [n, {}, {}, {}, i, c, s]),
                                !k)) {
                                let t = r.initFocus(setTimeout.bind(u, j.bind(u, n, 0)))
                                    , i = r.initReconnect(setTimeout.bind(u, j.bind(u, n, 1)));
                                a = () => {
                                    t && t(),
                                        i && i(),
                                        _.delete(e)
                                }
                            }
                        }
                        ;
                    return f(),
                        [e, i, f, a]
                }
                return [e, _.get(e)[4]]
            }
            , [W, $] = U(new Map)
            , q = d({
                onLoadingSlow: o,
                onSuccess: o,
                onError: o,
                onErrorRetry: (e, t, r, n, i) => {
                    let a = r.errorRetryCount
                        , o = i.retryCount
                        , u = ~~((Math.random() + .5) * (1 << (o < 8 ? o : 8))) * r.errorRetryInterval;
                    (s(a) || !(o > a)) && setTimeout(n, u, i)
                }
                ,
                onDiscarded: o,
                revalidateOnFocus: !0,
                revalidateOnReconnect: !0,
                revalidateIfStale: !0,
                shouldRetryOnError: !0,
                errorRetryInterval: A ? 1e4 : 5e3,
                focusThrottleInterval: 5e3,
                dedupingInterval: 2e3,
                loadingTimeout: A ? 5e3 : 3e3,
                compare: (e, t) => p(e) == p(t),
                isPaused: () => !1,
                cache: W,
                mutate: $,
                fallback: {}
            }, {
                isOnline: () => T,
                isVisible: () => {
                    let e = R && document.visibilityState;
                    return s(e) || "hidden" !== e
                }
            })
            , J = (e, t) => {
                let r = d(e, t);
                if (t) {
                    let { use: n, fallback: i } = e
                        , { use: a, fallback: o } = t;
                    n && a && (r.use = n.concat(a)),
                        i && o && (r.fallback = d(i, o))
                }
                return r
            }
            , B = (0,
                i.createContext)({})
            , Y = h && window.__SWR_DEVTOOLS_USE__
            , Z = Y ? window.__SWR_DEVTOOLS_USE__ : []
            , z = e => c(e[1]) ? [e[0], e[1], e[2] || {}] : [e[0], null, (null === e[1] ? e[2] : e[1]) || {}]
            , G = () => d(q, (0,
                i.useContext)(B))
            , H = Z.concat(e => (t, r, n) => {
                let i = r && ((...e) => {
                    let [n] = x(t)
                        , [, , , i] = _.get(W);
                    if (n.startsWith("$inf$"))
                        return r(...e);
                    let a = i[n];
                    return s(a) ? r(...e) : (delete i[n],
                        a)
                }
                );
                return e(t, i, n)
            }
            )
            , K = (e, t, r) => {
                let n = t[e] || (t[e] = []);
                return n.push(r),
                    () => {
                        let e = n.indexOf(r);
                        e >= 0 && (n[e] = n[n.length - 1],
                            n.pop())
                    }
            }
            ;
        Y && (window.__SWR_DEVTOOLS_REACT__ = i);
        let Q = i.use || (e => {
            if ("pending" === e.status)
                throw e;
            if ("fulfilled" === e.status)
                return e.value;
            if ("rejected" === e.status)
                throw e.reason;
            throw e.status = "pending",
            e.then(t => {
                e.status = "fulfilled",
                    e.value = t
            }
                , t => {
                    e.status = "rejected",
                        e.reason = t
                }
            ),
            e
        }
        )
            , X = {
                dedupe: !0
            };
        l.defineProperty(e => {
            let { value: t } = e
                , r = (0,
                    i.useContext)(B)
                , n = c(t)
                , a = (0,
                    i.useMemo)(() => n ? t(r) : t, [n, r, t])
                , o = (0,
                    i.useMemo)(() => n ? a : J(r, a), [n, r, a])
                , l = a && a.provider
                , s = (0,
                    i.useRef)(u);
            l && !s.current && (s.current = U(l(o.cache || W), a));
            let f = s.current;
            return f && (o.cache = f[0],
                o.mutate = f[1]),
                N(() => {
                    if (f)
                        return f[2] && f[2](),
                            f[3]
                }
                    , []),
                (0,
                    i.createElement)(B.Provider, d(e, {
                        value: o
                    }))
        }
            , "defaultValue", {
            value: q
        });
        let ee = (n = (e, t, r) => {
            let { cache: n, compare: o, suspense: l, fallbackData: f, revalidateOnMount: E, revalidateIfStale: g, refreshInterval: p, refreshWhenHidden: y, refreshWhenOffline: w, keepPreviousData: v } = r
                , [h, R, m, T] = _.get(n)
                , [S, b] = x(e)
                , V = (0,
                    i.useRef)(!1)
                , D = (0,
                    i.useRef)(!1)
                , A = (0,
                    i.useRef)(S)
                , I = (0,
                    i.useRef)(t)
                , j = (0,
                    i.useRef)(r)
                , U = () => j.current
                , W = () => U().isVisible() && U().isOnline()
                , [$, q, J, B] = O(n, S)
                , Y = (0,
                    i.useRef)({}).current
                , Z = s(f) ? r.fallback[S] : f
                , z = (e, t) => {
                    for (let r in Y)
                        if ("data" === r) {
                            if (!o(e[r], t[r]) && (!s(e[r]) || !o(eo, t[r])))
                                return !1
                        } else if (t[r] !== e[r])
                            return !1;
                    return !0
                }
                , G = (0,
                    i.useMemo)(() => {
                        let e = !!S && !!t && (s(E) ? !U().isPaused() && !l && (!!s(g) || g) : E)
                            , r = t => {
                                let r = d(t);
                                return (delete r._k,
                                    e) ? {
                                    isValidating: !0,
                                    isLoading: !0,
                                    ...r
                                } : r
                            }
                            , n = $()
                            , i = B()
                            , a = r(n)
                            , o = n === i ? a : r(i)
                            , u = a;
                        return [() => {
                            let e = r($());
                            return z(e, u) ? (u.data = e.data,
                                u.isLoading = e.isLoading,
                                u.isValidating = e.isValidating,
                                u.error = e.error,
                                u) : (u = e,
                                    e)
                        }
                            , () => o]
                    }
                        , [n, S])
                , H = (0,
                    a.useSyncExternalStore)((0,
                        i.useCallback)(e => J(S, (t, r) => {
                            z(r, t) || e()
                        }
                        ), [n, S]), G[0], G[1])
                , ee = !V.current
                , et = h[S] && h[S].length > 0
                , er = H.data
                , en = s(er) ? Z : er
                , ei = H.error
                , ea = (0,
                    i.useRef)(en)
                , eo = v ? s(er) ? ea.current : er : en
                , eu = (!et || !!s(ei)) && (ee && !s(E) ? E : !U().isPaused() && (l ? !s(en) && g : s(en) || g))
                , el = !!(S && t && ee && eu)
                , es = s(H.isValidating) ? el : H.isValidating
                , ec = s(H.isLoading) ? el : H.isLoading
                , ed = (0,
                    i.useCallback)(async e => {
                        let t, n;
                        let i = I.current;
                        if (!S || !i || D.current || U().isPaused())
                            return !1;
                        let a = !0
                            , l = e || {}
                            , d = !m[S] || !l.dedupe
                            , f = () => L ? !D.current && S === A.current && V.current : S === A.current
                            , E = {
                                isValidating: !1,
                                isLoading: !1
                            }
                            , g = () => {
                                q(E)
                            }
                            , p = () => {
                                let e = m[S];
                                e && e[1] === n && delete m[S]
                            }
                            , _ = {
                                isValidating: !0
                            };
                        s($().data) && (_.isLoading = !0);
                        try {
                            if (d && (q(_),
                                r.loadingTimeout && s($().data) && setTimeout(() => {
                                    a && f() && U().onLoadingSlow(S, r)
                                }
                                    , r.loadingTimeout),
                                m[S] = [i(b), P()]),
                                [t, n] = m[S],
                                t = await t,
                                d && setTimeout(p, r.dedupingInterval),
                                !m[S] || m[S][1] !== n)
                                return d && f() && U().onDiscarded(S),
                                    !1;
                            E.error = u;
                            let e = R[S];
                            if (!s(e) && (n <= e[0] || n <= e[1] || 0 === e[1]))
                                return g(),
                                    d && f() && U().onDiscarded(S),
                                    !1;
                            let l = $().data;
                            E.data = o(l, t) ? l : t,
                                d && f() && U().onSuccess(t, S, r)
                        } catch (r) {
                            p();
                            let e = U()
                                , { shouldRetryOnError: t } = e;
                            !e.isPaused() && (E.error = r,
                                d && f() && (e.onError(r, S, e),
                                    (!0 === t || c(t) && t(r)) && W() && e.onErrorRetry(r, S, e, e => {
                                        let t = h[S];
                                        t && t[0] && t[0](F.ERROR_REVALIDATE_EVENT, e)
                                    }
                                        , {
                                            retryCount: (l.retryCount || 0) + 1,
                                            dedupe: !0
                                        })))
                        }
                        return a = !1,
                            g(),
                            !0
                    }
                        , [S, n])
                , ef = (0,
                    i.useCallback)((...e) => M(n, A.current, ...e), []);
            if (N(() => {
                I.current = t,
                    j.current = r,
                    s(er) || (ea.current = er)
            }
            ),
                N(() => {
                    if (!S)
                        return;
                    let e = ed.bind(u, X)
                        , t = 0
                        , r = K(S, h, (r, n = {}) => {
                            if (r == F.FOCUS_EVENT) {
                                let r = Date.now();
                                U().revalidateOnFocus && r > t && W() && (t = r + U().focusThrottleInterval,
                                    e())
                            } else if (r == F.RECONNECT_EVENT)
                                U().revalidateOnReconnect && W() && e();
                            else if (r == F.MUTATE_EVENT)
                                return ed();
                            else if (r == F.ERROR_REVALIDATE_EVENT)
                                return ed(n)
                        }
                        );
                    return D.current = !1,
                        A.current = S,
                        V.current = !0,
                        q({
                            _k: b
                        }),
                        eu && (s(en) || k ? e() : C(e)),
                        () => {
                            D.current = !0,
                                r()
                        }
                }
                    , [S]),
                N(() => {
                    let e;
                    function t() {
                        let t = c(p) ? p($().data) : p;
                        t && -1 !== e && (e = setTimeout(r, t))
                    }
                    function r() {
                        !$().error && (y || U().isVisible()) && (w || U().isOnline()) ? ed(X).then(t) : t()
                    }
                    return t(),
                        () => {
                            e && (clearTimeout(e),
                                e = -1)
                        }
                }
                    , [p, y, w, S]),
                (0,
                    i.useDebugValue)(eo),
                l && s(en) && S) {
                if (!L && k)
                    throw Error("Fallback data is required when using suspense in SSR.");
                I.current = t,
                    j.current = r,
                    D.current = !1;
                let e = T[S];
                if (s(e) || Q(ef(e)),
                    s(ei)) {
                    let e = ed(X);
                    s(eo) || (e.status = "fulfilled",
                        e.value = !0),
                        Q(e)
                } else
                    throw ei
            }
            return {
                mutate: ef,
                get data() {
                    return Y.data = !0,
                        eo
                },
                get error() {
                    return Y.error = !0,
                        ei
                },
                get isValidating() {
                    return Y.isValidating = !0,
                        es
                },
                get isLoading() {
                    return Y.isLoading = !0,
                        ec
                }
            }
        }
            ,
            function (...e) {
                let t = G()
                    , [r, i, a] = z(e)
                    , o = J(t, a)
                    , u = n
                    , { use: l } = o
                    , s = (l || []).concat(H);
                for (let e = s.length; e--;)
                    u = s[e](u);
                return u(r, i || o.fetcher || null, o)
            }
        )
    }
}]);
