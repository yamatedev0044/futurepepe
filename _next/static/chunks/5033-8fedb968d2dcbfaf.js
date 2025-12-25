(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5033],
  {
    1088: (e, t, r) => {
      "use strict";
      (t.version = r(14537).rE),
        (t.utils = r(57946)),
        (t.rand = r(38324)),
        (t.curve = r(93239)),
        (t.curves = r(97089)),
        (t.ec = r(76582)),
        (t.eddsa = r(81683));
    },
    1973: (e, t, r) => {
      "use strict";
      r.d(t, { k: () => s });
      var n = r(29592),
        i = r(54332);
      class s extends i._y {
        #e;
        #t;
        constructor(e, t, r) {
          let i = Object.assign({}, null != r ? r : {}, { batchMaxCount: 1 });
          (0, n.MR)(e && e.request, "invalid EIP-1193 provider", "ethereum", e),
            super(t, i),
            (this.#t = null),
            r && r.providerInfo && (this.#t = r.providerInfo),
            (this.#e = async (t, r) => {
              let n = { method: t, params: r };
              this.emit("debug", { action: "sendEip1193Request", payload: n });
              try {
                let t = await e.request(n);
                return (
                  this.emit("debug", {
                    action: "receiveEip1193Result",
                    result: t,
                  }),
                  t
                );
              } catch (t) {
                let e = Error(t.message);
                throw (
                  ((e.code = t.code),
                  (e.data = t.data),
                  (e.payload = n),
                  this.emit("debug", {
                    action: "receiveEip1193Error",
                    error: e,
                  }),
                  e)
                );
              }
            });
        }
        get providerInfo() {
          return this.#t;
        }
        async send(e, t) {
          return await this._start(), await super.send(e, t);
        }
        async _send(e) {
          (0, n.MR)(
            !Array.isArray(e),
            "EIP-1193 does not support batch request",
            "payload",
            e
          );
          try {
            let t = await this.#e(e.method, e.params || []);
            return [{ id: e.id, result: t }];
          } catch (t) {
            return [
              {
                id: e.id,
                error: { code: t.code, data: t.data, message: t.message },
              },
            ];
          }
        }
        getRpcError(e, t) {
          switch ((t = JSON.parse(JSON.stringify(t))).error.code || -1) {
            case 4001:
              t.error.message = `ethers-user-denied: ${t.error.message}`;
              break;
            case 4200:
              t.error.message = `ethers-unsupported: ${t.error.message}`;
          }
          return super.getRpcError(e, t);
        }
        async hasSigner(e) {
          null == e && (e = 0);
          let t = await this.send("eth_accounts", []);
          return "number" == typeof e
            ? t.length > e
            : ((e = e.toLowerCase()),
              0 !== t.filter((t) => t.toLowerCase() === e).length);
        }
        async getSigner(e) {
          if ((null == e && (e = 0), !(await this.hasSigner(e))))
            try {
              await this.#e("eth_requestAccounts", []);
            } catch (t) {
              let e = t.payload;
              throw this.getRpcError(e, { id: e.id, error: t });
            }
          return await super.getSigner(e);
        }
        static async discover(e) {
          if ((null == e && (e = {}), e.provider)) return new s(e.provider);
          let t = e.window
            ? e.window
            : "undefined" != typeof window
            ? window
            : null;
          if (null == t) return null;
          let r = e.anyProvider;
          if (r && t.ethereum) return new s(t.ethereum);
          if (
            !(
              "addEventListener" in t &&
              "dispatchEvent" in t &&
              "removeEventListener" in t
            )
          )
            return null;
          let i = e.timeout ? e.timeout : 300;
          return 0 === i
            ? null
            : await new Promise((a, o) => {
                let l = [],
                  u = (e) => {
                    l.push(e.detail), r && f();
                  },
                  f = () => {
                    if ((clearTimeout(c), l.length))
                      if (e && e.filter) {
                        let t = e.filter(
                          l.map((e) => Object.assign({}, e.info))
                        );
                        if (null == t) a(null);
                        else if (t instanceof s) a(t);
                        else {
                          let e = null;
                          if (
                            (t.uuid &&
                              (e = l.filter((e) => t.uuid === e.info.uuid)[0]),
                            e)
                          ) {
                            let { provider: t, info: r } = e;
                            a(new s(t, void 0, { providerInfo: r }));
                          } else
                            o(
                              (0, n.xz)(
                                "filter returned unknown info",
                                "UNSUPPORTED_OPERATION",
                                { value: t }
                              )
                            );
                        }
                      } else {
                        let { provider: e, info: t } = l[0];
                        a(new s(e, void 0, { providerInfo: t }));
                      }
                    else a(null);
                    t.removeEventListener("eip6963:announceProvider", u);
                  },
                  c = setTimeout(() => {
                    f();
                  }, i);
                t.addEventListener("eip6963:announceProvider", u),
                  t.dispatchEvent(new Event("eip6963:requestProvider"));
              });
        }
      }
    },
    2145: (e, t, r) => {
      "use strict";
      r.d(t, { F: () => f });
      var n = r(87660),
        i = r(64997),
        s = r(53031),
        a = r(34250),
        o = r(12115),
        l = r(45566);
      let u = (e) => "object" == typeof e && !Array.isArray(e);
      function f() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = (0, s.U)(e);
        return (function (e, t) {
          let r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : t,
            n =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : a.b,
            i = (0, o.useRef)([]),
            s = (0, l.useSyncExternalStoreWithSelector)(
              e,
              t,
              r,
              (e) => e,
              (e, t) => {
                if (u(e) && u(t) && i.current.length) {
                  for (let r of i.current) if (!n(e[r], t[r])) return !1;
                  return !0;
                }
                return n(e, t);
              }
            );
          return (0, o.useMemo)(() => {
            if (u(s)) {
              let e = { ...s },
                t = {};
              for (let [r, n] of Object.entries(e))
                t = {
                  ...t,
                  [r]: {
                    configurable: !1,
                    enumerable: !0,
                    get: () => (i.current.includes(r) || i.current.push(r), n),
                  },
                };
              return Object.defineProperties(e, t), e;
            }
            return s;
          }, [s]);
        })(
          (e) => (0, n.F)(t, { onChange: e }),
          () => (0, i.s)(t)
        );
      }
    },
    2953: (e, t, r) => {
      (t.utils = r(42539)),
        (t.common = r(68711)),
        (t.sha = r(90340)),
        (t.ripemd = r(98625)),
        (t.hmac = r(71861)),
        (t.sha1 = t.sha.sha1),
        (t.sha256 = t.sha.sha256),
        (t.sha224 = t.sha.sha224),
        (t.sha384 = t.sha.sha384),
        (t.sha512 = t.sha.sha512),
        (t.ripemd160 = t.ripemd.ripemd160);
    },
    3466: (e, t, r) => {
      "use strict";
      var n = r(2953),
        i = r(97486),
        s = r(23124);
      function a(e) {
        if (!(this instanceof a)) return new a(e);
        (this.hash = e.hash),
          (this.predResist = !!e.predResist),
          (this.outLen = this.hash.outSize),
          (this.minEntropy = e.minEntropy || this.hash.hmacStrength),
          (this._reseed = null),
          (this.reseedInterval = null),
          (this.K = null),
          (this.V = null);
        var t = i.toArray(e.entropy, e.entropyEnc || "hex"),
          r = i.toArray(e.nonce, e.nonceEnc || "hex"),
          n = i.toArray(e.pers, e.persEnc || "hex");
        s(
          t.length >= this.minEntropy / 8,
          "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
        ),
          this._init(t, r, n);
      }
      (e.exports = a),
        (a.prototype._init = function (e, t, r) {
          var n = e.concat(t).concat(r);
          (this.K = Array(this.outLen / 8)), (this.V = Array(this.outLen / 8));
          for (var i = 0; i < this.V.length; i++)
            (this.K[i] = 0), (this.V[i] = 1);
          this._update(n),
            (this._reseed = 1),
            (this.reseedInterval = 0x1000000000000);
        }),
        (a.prototype._hmac = function () {
          return new n.hmac(this.hash, this.K);
        }),
        (a.prototype._update = function (e) {
          var t = this._hmac().update(this.V).update([0]);
          e && (t = t.update(e)),
            (this.K = t.digest()),
            (this.V = this._hmac().update(this.V).digest()),
            e &&
              ((this.K = this._hmac()
                .update(this.V)
                .update([1])
                .update(e)
                .digest()),
              (this.V = this._hmac().update(this.V).digest()));
        }),
        (a.prototype.reseed = function (e, t, r, n) {
          "string" != typeof t && ((n = r), (r = t), (t = null)),
            (e = i.toArray(e, t)),
            (r = i.toArray(r, n)),
            s(
              e.length >= this.minEntropy / 8,
              "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
            ),
            this._update(e.concat(r || [])),
            (this._reseed = 1);
        }),
        (a.prototype.generate = function (e, t, r, n) {
          if (this._reseed > this.reseedInterval)
            throw Error("Reseed is required");
          "string" != typeof t && ((n = r), (r = t), (t = null)),
            r && ((r = i.toArray(r, n || "hex")), this._update(r));
          for (var s = []; s.length < e; )
            (this.V = this._hmac().update(this.V).digest()),
              (s = s.concat(this.V));
          var a = s.slice(0, e);
          return this._update(r), this._reseed++, i.encode(a, t);
        });
    },
    6654: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useMergedRef", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let n = r(12115);
      function i(e, t) {
        let r = (0, n.useRef)(null),
          i = (0, n.useRef)(null);
        return (0, n.useCallback)(
          (n) => {
            if (null === n) {
              let e = r.current;
              e && ((r.current = null), e());
              let t = i.current;
              t && ((i.current = null), t());
            } else e && (r.current = s(e, n)), t && (i.current = s(t, n));
          },
          [e, t]
        );
      }
      function s(e, t) {
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
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    6874: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          default: function () {
            return g;
          },
          useLinkStatus: function () {
            return y;
          },
        });
      let n = r(6966),
        i = r(95155),
        s = n._(r(12115)),
        a = r(82757),
        o = r(95227),
        l = r(69818),
        u = r(6654),
        f = r(69991),
        c = r(85929);
      r(43230);
      let d = r(24930),
        h = r(92664),
        p = r(6634);
      function b(e) {
        return "string" == typeof e ? e : (0, a.formatUrl)(e);
      }
      function g(e) {
        let t,
          r,
          n,
          [a, g] = (0, s.useOptimistic)(d.IDLE_LINK_STATUS),
          y = (0, s.useRef)(null),
          {
            href: v,
            as: w,
            children: A,
            prefetch: x = null,
            passHref: E,
            replace: R,
            shallow: M,
            scroll: S,
            onClick: P,
            onMouseEnter: O,
            onTouchStart: I,
            legacyBehavior: k = !1,
            onNavigate: N,
            ref: C,
            unstable_dynamicOnHover: B,
            ...T
          } = e;
        (t = A),
          k &&
            ("string" == typeof t || "number" == typeof t) &&
            (t = (0, i.jsx)("a", { children: t }));
        let L = s.default.useContext(o.AppRouterContext),
          U = !1 !== x,
          F = null === x ? l.PrefetchKind.AUTO : l.PrefetchKind.FULL,
          { href: _, as: D } = s.default.useMemo(() => {
            let e = b(v);
            return { href: e, as: w ? b(w) : e };
          }, [v, w]);
        k && (r = s.default.Children.only(t));
        let j = k ? r && "object" == typeof r && r.ref : C,
          z = s.default.useCallback(
            (e) => (
              null !== L &&
                (y.current = (0, d.mountLinkInstance)(e, _, L, F, U, g)),
              () => {
                y.current &&
                  ((0, d.unmountLinkForCurrentNavigation)(y.current),
                  (y.current = null)),
                  (0, d.unmountPrefetchableInstance)(e);
              }
            ),
            [U, _, L, F, g]
          ),
          G = {
            ref: (0, u.useMergedRef)(z, j),
            onClick(e) {
              k || "function" != typeof P || P(e),
                k &&
                  r.props &&
                  "function" == typeof r.props.onClick &&
                  r.props.onClick(e),
                L &&
                  (e.defaultPrevented ||
                    (function (e, t, r, n, i, a, o) {
                      let { nodeName: l } = e.currentTarget;
                      if (
                        !(
                          ("A" === l.toUpperCase() &&
                            (function (e) {
                              let t = e.currentTarget.getAttribute("target");
                              return (
                                (t && "_self" !== t) ||
                                e.metaKey ||
                                e.ctrlKey ||
                                e.shiftKey ||
                                e.altKey ||
                                (e.nativeEvent && 2 === e.nativeEvent.which)
                              );
                            })(e)) ||
                          e.currentTarget.hasAttribute("download")
                        )
                      ) {
                        if (!(0, h.isLocalURL)(t)) {
                          i && (e.preventDefault(), location.replace(t));
                          return;
                        }
                        e.preventDefault(),
                          s.default.startTransition(() => {
                            if (o) {
                              let e = !1;
                              if (
                                (o({
                                  preventDefault: () => {
                                    e = !0;
                                  },
                                }),
                                e)
                              )
                                return;
                            }
                            (0, p.dispatchNavigateAction)(
                              r || t,
                              i ? "replace" : "push",
                              null == a || a,
                              n.current
                            );
                          });
                      }
                    })(e, _, D, y, R, S, N));
            },
            onMouseEnter(e) {
              k || "function" != typeof O || O(e),
                k &&
                  r.props &&
                  "function" == typeof r.props.onMouseEnter &&
                  r.props.onMouseEnter(e),
                L && U && (0, d.onNavigationIntent)(e.currentTarget, !0 === B);
            },
            onTouchStart: function (e) {
              k || "function" != typeof I || I(e),
                k &&
                  r.props &&
                  "function" == typeof r.props.onTouchStart &&
                  r.props.onTouchStart(e),
                L && U && (0, d.onNavigationIntent)(e.currentTarget, !0 === B);
            },
          };
        return (
          (0, f.isAbsoluteUrl)(D)
            ? (G.href = D)
            : (k && !E && ("a" !== r.type || "href" in r.props)) ||
              (G.href = (0, c.addBasePath)(D)),
          (n = k
            ? s.default.cloneElement(r, G)
            : (0, i.jsx)("a", { ...T, ...G, children: t })),
          (0, i.jsx)(m.Provider, { value: a, children: n })
        );
      }
      r(73180);
      let m = (0, s.createContext)(d.IDLE_LINK_STATUS),
        y = () => (0, s.useContext)(m);
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    8839: (e, t, r) => {
      "use strict";
      var n = r(42539),
        i = r(68711),
        s = r(23124),
        a = n.rotr64_hi,
        o = n.rotr64_lo,
        l = n.shr64_hi,
        u = n.shr64_lo,
        f = n.sum64,
        c = n.sum64_hi,
        d = n.sum64_lo,
        h = n.sum64_4_hi,
        p = n.sum64_4_lo,
        b = n.sum64_5_hi,
        g = n.sum64_5_lo,
        m = i.BlockHash,
        y = [
          0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd, 0xb5c0fbcf,
          0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc, 0x3956c25b, 0xf348b538,
          0x59f111f1, 0xb605d019, 0x923f82a4, 0xaf194f9b, 0xab1c5ed5,
          0xda6d8118, 0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe,
          0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2, 0x72be5d74,
          0xf27b896f, 0x80deb1fe, 0x3b1696b1, 0x9bdc06a7, 0x25c71235,
          0xc19bf174, 0xcf692694, 0xe49b69c1, 0x9ef14ad2, 0xefbe4786,
          0x384f25e3, 0xfc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65, 0x2de92c6f,
          0x592b0275, 0x4a7484aa, 0x6ea6e483, 0x5cb0a9dc, 0xbd41fbd4,
          0x76f988da, 0x831153b5, 0x983e5152, 0xee66dfab, 0xa831c66d,
          0x2db43210, 0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4,
          0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725, 0x6ca6351, 0xe003826f,
          0x14292967, 0xa0e6e70, 0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926,
          0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df, 0x650a7354,
          0x8baf63de, 0x766a0abb, 0x3c77b2a8, 0x81c2c92e, 0x47edaee6,
          0x92722c85, 0x1482353b, 0xa2bfe8a1, 0x4cf10364, 0xa81a664b,
          0xbc423001, 0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x654be30, 0xd192e819,
          0xd6ef5218, 0xd6990624, 0x5565a910, 0xf40e3585, 0x5771202a,
          0x106aa070, 0x32bbd1b8, 0x19a4c116, 0xb8d2d0c8, 0x1e376c08,
          0x5141ab53, 0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8,
          0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb, 0x5b9cca4f,
          0x7763e373, 0x682e6ff3, 0xd6b2b8a3, 0x748f82ee, 0x5defb2fc,
          0x78a5636f, 0x43172f60, 0x84c87814, 0xa1f0ab72, 0x8cc70208,
          0x1a6439ec, 0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9,
          0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b, 0xca273ece,
          0xea26619c, 0xd186b8c7, 0x21c0c207, 0xeada7dd6, 0xcde0eb1e,
          0xf57d4f7f, 0xee6ed178, 0x6f067aa, 0x72176fba, 0xa637dc5, 0xa2c898a6,
          0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b, 0x28db77f5,
          0x23047d84, 0x32caab7b, 0x40c72493, 0x3c9ebe0a, 0x15c9bebc,
          0x431d67c4, 0x9c100d4c, 0x4cc5d4be, 0xcb3e42b6, 0x597f299c,
          0xfc657e2a, 0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817,
        ];
      function v() {
        if (!(this instanceof v)) return new v();
        m.call(this),
          (this.h = [
            0x6a09e667, 0xf3bcc908, 0xbb67ae85, 0x84caa73b, 0x3c6ef372,
            0xfe94f82b, 0xa54ff53a, 0x5f1d36f1, 0x510e527f, 0xade682d1,
            0x9b05688c, 0x2b3e6c1f, 0x1f83d9ab, 0xfb41bd6b, 0x5be0cd19,
            0x137e2179,
          ]),
          (this.k = y),
          (this.W = Array(160));
      }
      n.inherits(v, m),
        (e.exports = v),
        (v.blockSize = 1024),
        (v.outSize = 512),
        (v.hmacStrength = 192),
        (v.padLength = 128),
        (v.prototype._prepareBlock = function (e, t) {
          for (var r = this.W, n = 0; n < 32; n++) r[n] = e[t + n];
          for (; n < r.length; n += 2) {
            var i = (function (e, t) {
                var r = a(e, t, 19) ^ a(t, e, 29) ^ l(e, t, 6);
                return r < 0 && (r += 0x100000000), r;
              })(r[n - 4], r[n - 3]),
              s = (function (e, t) {
                var r = o(e, t, 19) ^ o(t, e, 29) ^ u(e, t, 6);
                return r < 0 && (r += 0x100000000), r;
              })(r[n - 4], r[n - 3]),
              f = r[n - 14],
              c = r[n - 13],
              d = (function (e, t) {
                var r = a(e, t, 1) ^ a(e, t, 8) ^ l(e, t, 7);
                return r < 0 && (r += 0x100000000), r;
              })(r[n - 30], r[n - 29]),
              b = (function (e, t) {
                var r = o(e, t, 1) ^ o(e, t, 8) ^ u(e, t, 7);
                return r < 0 && (r += 0x100000000), r;
              })(r[n - 30], r[n - 29]),
              g = r[n - 32],
              m = r[n - 31];
            (r[n] = h(i, s, f, c, d, b, g, m)),
              (r[n + 1] = p(i, s, f, c, d, b, g, m));
          }
        }),
        (v.prototype._update = function (e, t) {
          this._prepareBlock(e, t);
          var r = this.W,
            n = this.h[0],
            i = this.h[1],
            l = this.h[2],
            u = this.h[3],
            h = this.h[4],
            p = this.h[5],
            m = this.h[6],
            y = this.h[7],
            v = this.h[8],
            w = this.h[9],
            A = this.h[10],
            x = this.h[11],
            E = this.h[12],
            R = this.h[13],
            M = this.h[14],
            S = this.h[15];
          s(this.k.length === r.length);
          for (var P = 0; P < r.length; P += 2) {
            var O = M,
              I = S,
              k = (function (e, t) {
                var r = a(e, t, 14) ^ a(e, t, 18) ^ a(t, e, 9);
                return r < 0 && (r += 0x100000000), r;
              })(v, w),
              N = (function (e, t) {
                var r = o(e, t, 14) ^ o(e, t, 18) ^ o(t, e, 9);
                return r < 0 && (r += 0x100000000), r;
              })(v, w),
              C = (function (e, t, r, n, i) {
                var s = (e & r) ^ (~e & i);
                return s < 0 && (s += 0x100000000), s;
              })(v, 0, A, 0, E, R),
              B = (function (e, t, r, n, i, s) {
                var a = (t & n) ^ (~t & s);
                return a < 0 && (a += 0x100000000), a;
              })(0, w, 0, x, 0, R),
              T = this.k[P],
              L = this.k[P + 1],
              U = r[P],
              F = r[P + 1],
              _ = b(O, I, k, N, C, B, T, L, U, F),
              D = g(O, I, k, N, C, B, T, L, U, F);
            (O = (function (e, t) {
              var r = a(e, t, 28) ^ a(t, e, 2) ^ a(t, e, 7);
              return r < 0 && (r += 0x100000000), r;
            })(n, i)),
              (I = (function (e, t) {
                var r = o(e, t, 28) ^ o(t, e, 2) ^ o(t, e, 7);
                return r < 0 && (r += 0x100000000), r;
              })(n, i));
            var j = c(
                O,
                I,
                (k = (function (e, t, r, n, i) {
                  var s = (e & r) ^ (e & i) ^ (r & i);
                  return s < 0 && (s += 0x100000000), s;
                })(n, 0, l, 0, h, p)),
                (N = (function (e, t, r, n, i, s) {
                  var a = (t & n) ^ (t & s) ^ (n & s);
                  return a < 0 && (a += 0x100000000), a;
                })(0, i, 0, u, 0, p))
              ),
              z = d(O, I, k, N);
            (M = E),
              (S = R),
              (E = A),
              (R = x),
              (A = v),
              (x = w),
              (v = c(m, y, _, D)),
              (w = d(y, y, _, D)),
              (m = h),
              (y = p),
              (h = l),
              (p = u),
              (l = n),
              (u = i),
              (n = c(_, D, j, z)),
              (i = d(_, D, j, z));
          }
          f(this.h, 0, n, i),
            f(this.h, 2, l, u),
            f(this.h, 4, h, p),
            f(this.h, 6, m, y),
            f(this.h, 8, v, w),
            f(this.h, 10, A, x),
            f(this.h, 12, E, R),
            f(this.h, 14, M, S);
        }),
        (v.prototype._digest = function (e) {
          return "hex" === e
            ? n.toHex32(this.h, "big")
            : n.split32(this.h, "big");
        });
    },
    10255: (e, t, r) => {
      "use strict";
      function n(e) {
        let { moduleIds: t } = e;
        return null;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "PreloadChunks", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        r(95155),
        r(47650),
        r(85744),
        r(20589);
    },
    12325: (e, t, r) => {
      "use strict";
      r.d(t, { Q: () => B });
      var n = r(26715),
        i = r(95990);
      function s(e) {
        return JSON.stringify(e, (e, t) =>
          !(function (e) {
            if (!a(e)) return !1;
            let t = e.constructor;
            if (void 0 === t) return !0;
            let r = t.prototype;
            return !!a(r) && !!r.hasOwnProperty("isPrototypeOf");
          })(t)
            ? "bigint" == typeof t
              ? t.toString()
              : t
            : Object.keys(t)
                .sort()
                .reduce((e, r) => ((e[r] = t[r]), e), {})
        );
      }
      function a(e) {
        return "[object Object]" === Object.prototype.toString.call(e);
      }
      var o = r(12115),
        l = r(50920),
        u = r(7165),
        f = r(39853),
        c = r(25910),
        d = r(73504),
        h = r(52020),
        p = class extends c.Q {
          constructor(e, t) {
            super(),
              (this.options = t),
              (this.#r = e),
              (this.#n = null),
              (this.#i = (0, d.T)()),
              this.options.experimental_prefetchInRender ||
                this.#i.reject(
                  Error(
                    "experimental_prefetchInRender feature flag is not enabled"
                  )
                ),
              this.bindMethods(),
              this.setOptions(t);
          }
          #r;
          #s = void 0;
          #a = void 0;
          #o = void 0;
          #l;
          #u;
          #i;
          #n;
          #f;
          #c;
          #d;
          #h;
          #p;
          #b;
          #g = new Set();
          bindMethods() {
            this.refetch = this.refetch.bind(this);
          }
          onSubscribe() {
            1 === this.listeners.size &&
              (this.#s.addObserver(this),
              b(this.#s, this.options) ? this.#m() : this.updateResult(),
              this.#y());
          }
          onUnsubscribe() {
            this.hasListeners() || this.destroy();
          }
          shouldFetchOnReconnect() {
            return g(this.#s, this.options, this.options.refetchOnReconnect);
          }
          shouldFetchOnWindowFocus() {
            return g(this.#s, this.options, this.options.refetchOnWindowFocus);
          }
          destroy() {
            (this.listeners = new Set()),
              this.#v(),
              this.#w(),
              this.#s.removeObserver(this);
          }
          setOptions(e) {
            let t = this.options,
              r = this.#s;
            if (
              ((this.options = this.#r.defaultQueryOptions(e)),
              void 0 !== this.options.enabled &&
                "boolean" != typeof this.options.enabled &&
                "function" != typeof this.options.enabled &&
                "boolean" != typeof (0, h.Eh)(this.options.enabled, this.#s))
            )
              throw Error(
                "Expected enabled to be a boolean or a callback that returns a boolean"
              );
            this.#A(),
              this.#s.setOptions(this.options),
              t._defaulted &&
                !(0, h.f8)(this.options, t) &&
                this.#r
                  .getQueryCache()
                  .notify({
                    type: "observerOptionsUpdated",
                    query: this.#s,
                    observer: this,
                  });
            let n = this.hasListeners();
            n && m(this.#s, r, this.options, t) && this.#m(),
              this.updateResult(),
              n &&
                (this.#s !== r ||
                  (0, h.Eh)(this.options.enabled, this.#s) !==
                    (0, h.Eh)(t.enabled, this.#s) ||
                  (0, h.d2)(this.options.staleTime, this.#s) !==
                    (0, h.d2)(t.staleTime, this.#s)) &&
                this.#x();
            let i = this.#E();
            n &&
              (this.#s !== r ||
                (0, h.Eh)(this.options.enabled, this.#s) !==
                  (0, h.Eh)(t.enabled, this.#s) ||
                i !== this.#b) &&
              this.#R(i);
          }
          getOptimisticResult(e) {
            var t, r;
            let n = this.#r.getQueryCache().build(this.#r, e),
              i = this.createResult(n, e);
            return (
              (t = this),
              (r = i),
              (0, h.f8)(t.getCurrentResult(), r) ||
                ((this.#o = i),
                (this.#u = this.options),
                (this.#l = this.#s.state)),
              i
            );
          }
          getCurrentResult() {
            return this.#o;
          }
          trackResult(e, t) {
            return new Proxy(e, {
              get: (e, r) => (this.trackProp(r), t?.(r), Reflect.get(e, r)),
            });
          }
          trackProp(e) {
            this.#g.add(e);
          }
          getCurrentQuery() {
            return this.#s;
          }
          refetch({ ...e } = {}) {
            return this.fetch({ ...e });
          }
          fetchOptimistic(e) {
            let t = this.#r.defaultQueryOptions(e),
              r = this.#r.getQueryCache().build(this.#r, t);
            return r.fetch().then(() => this.createResult(r, t));
          }
          fetch(e) {
            return this.#m({ ...e, cancelRefetch: e.cancelRefetch ?? !0 }).then(
              () => (this.updateResult(), this.#o)
            );
          }
          #m(e) {
            this.#A();
            let t = this.#s.fetch(this.options, e);
            return e?.throwOnError || (t = t.catch(h.lQ)), t;
          }
          #x() {
            this.#v();
            let e = (0, h.d2)(this.options.staleTime, this.#s);
            if (h.S$ || this.#o.isStale || !(0, h.gn)(e)) return;
            let t = (0, h.j3)(this.#o.dataUpdatedAt, e);
            this.#h = setTimeout(() => {
              this.#o.isStale || this.updateResult();
            }, t + 1);
          }
          #E() {
            return (
              ("function" == typeof this.options.refetchInterval
                ? this.options.refetchInterval(this.#s)
                : this.options.refetchInterval) ?? !1
            );
          }
          #R(e) {
            this.#w(),
              (this.#b = e),
              !h.S$ &&
                !1 !== (0, h.Eh)(this.options.enabled, this.#s) &&
                (0, h.gn)(this.#b) &&
                0 !== this.#b &&
                (this.#p = setInterval(() => {
                  (this.options.refetchIntervalInBackground ||
                    l.m.isFocused()) &&
                    this.#m();
                }, this.#b));
          }
          #y() {
            this.#x(), this.#R(this.#E());
          }
          #v() {
            this.#h && (clearTimeout(this.#h), (this.#h = void 0));
          }
          #w() {
            this.#p && (clearInterval(this.#p), (this.#p = void 0));
          }
          createResult(e, t) {
            let r,
              n = this.#s,
              i = this.options,
              s = this.#o,
              a = this.#l,
              o = this.#u,
              l = e !== n ? e.state : this.#a,
              { state: u } = e,
              c = { ...u },
              p = !1;
            if (t._optimisticResults) {
              let r = this.hasListeners(),
                s = !r && b(e, t),
                a = r && m(e, n, t, i);
              (s || a) && (c = { ...c, ...(0, f.k)(u.data, e.options) }),
                "isRestoring" === t._optimisticResults &&
                  (c.fetchStatus = "idle");
            }
            let { error: g, errorUpdatedAt: v, status: w } = c;
            r = c.data;
            let A = !1;
            if (
              void 0 !== t.placeholderData &&
              void 0 === r &&
              "pending" === w
            ) {
              let e;
              s?.isPlaceholderData && t.placeholderData === o?.placeholderData
                ? ((e = s.data), (A = !0))
                : (e =
                    "function" == typeof t.placeholderData
                      ? t.placeholderData(this.#d?.state.data, this.#d)
                      : t.placeholderData),
                void 0 !== e &&
                  ((w = "success"), (r = (0, h.pl)(s?.data, e, t)), (p = !0));
            }
            if (t.select && void 0 !== r && !A)
              if (s && r === a?.data && t.select === this.#f) r = this.#c;
              else
                try {
                  (this.#f = t.select),
                    (r = t.select(r)),
                    (r = (0, h.pl)(s?.data, r, t)),
                    (this.#c = r),
                    (this.#n = null);
                } catch (e) {
                  this.#n = e;
                }
            this.#n &&
              ((g = this.#n), (r = this.#c), (v = Date.now()), (w = "error"));
            let x = "fetching" === c.fetchStatus,
              E = "pending" === w,
              R = "error" === w,
              M = E && x,
              S = void 0 !== r,
              P = {
                status: w,
                fetchStatus: c.fetchStatus,
                isPending: E,
                isSuccess: "success" === w,
                isError: R,
                isInitialLoading: M,
                isLoading: M,
                data: r,
                dataUpdatedAt: c.dataUpdatedAt,
                error: g,
                errorUpdatedAt: v,
                failureCount: c.fetchFailureCount,
                failureReason: c.fetchFailureReason,
                errorUpdateCount: c.errorUpdateCount,
                isFetched: c.dataUpdateCount > 0 || c.errorUpdateCount > 0,
                isFetchedAfterMount:
                  c.dataUpdateCount > l.dataUpdateCount ||
                  c.errorUpdateCount > l.errorUpdateCount,
                isFetching: x,
                isRefetching: x && !E,
                isLoadingError: R && !S,
                isPaused: "paused" === c.fetchStatus,
                isPlaceholderData: p,
                isRefetchError: R && S,
                isStale: y(e, t),
                refetch: this.refetch,
                promise: this.#i,
              };
            if (this.options.experimental_prefetchInRender) {
              let t = (e) => {
                  "error" === P.status
                    ? e.reject(P.error)
                    : void 0 !== P.data && e.resolve(P.data);
                },
                r = () => {
                  t((this.#i = P.promise = (0, d.T)()));
                },
                i = this.#i;
              switch (i.status) {
                case "pending":
                  e.queryHash === n.queryHash && t(i);
                  break;
                case "fulfilled":
                  ("error" === P.status || P.data !== i.value) && r();
                  break;
                case "rejected":
                  ("error" !== P.status || P.error !== i.reason) && r();
              }
            }
            return P;
          }
          updateResult() {
            let e = this.#o,
              t = this.createResult(this.#s, this.options);
            (this.#l = this.#s.state),
              (this.#u = this.options),
              void 0 !== this.#l.data && (this.#d = this.#s),
              (0, h.f8)(t, e) ||
                ((this.#o = t),
                this.#M({
                  listeners: (() => {
                    if (!e) return !0;
                    let { notifyOnChangeProps: t } = this.options,
                      r = "function" == typeof t ? t() : t;
                    if ("all" === r || (!r && !this.#g.size)) return !0;
                    let n = new Set(r ?? this.#g);
                    return (
                      this.options.throwOnError && n.add("error"),
                      Object.keys(this.#o).some(
                        (t) => this.#o[t] !== e[t] && n.has(t)
                      )
                    );
                  })(),
                }));
          }
          #A() {
            let e = this.#r.getQueryCache().build(this.#r, this.options);
            if (e === this.#s) return;
            let t = this.#s;
            (this.#s = e),
              (this.#a = e.state),
              this.hasListeners() &&
                (t?.removeObserver(this), e.addObserver(this));
          }
          onQueryUpdate() {
            this.updateResult(), this.hasListeners() && this.#y();
          }
          #M(e) {
            u.jG.batch(() => {
              e.listeners &&
                this.listeners.forEach((e) => {
                  e(this.#o);
                }),
                this.#r
                  .getQueryCache()
                  .notify({ query: this.#s, type: "observerResultsUpdated" });
            });
          }
        };
      function b(e, t) {
        return (
          (!1 !== (0, h.Eh)(t.enabled, e) &&
            void 0 === e.state.data &&
            ("error" !== e.state.status || !1 !== t.retryOnMount)) ||
          (void 0 !== e.state.data && g(e, t, t.refetchOnMount))
        );
      }
      function g(e, t, r) {
        if (!1 !== (0, h.Eh)(t.enabled, e)) {
          let n = "function" == typeof r ? r(e) : r;
          return "always" === n || (!1 !== n && y(e, t));
        }
        return !1;
      }
      function m(e, t, r, n) {
        return (
          (e !== t || !1 === (0, h.Eh)(n.enabled, e)) &&
          (!r.suspense || "error" !== e.state.status) &&
          y(e, r)
        );
      }
      function y(e, t) {
        return (
          !1 !== (0, h.Eh)(t.enabled, e) &&
          e.isStaleByTime((0, h.d2)(t.staleTime, e))
        );
      }
      r(95155);
      var v = o.createContext(
          (function () {
            let e = !1;
            return {
              clearReset: () => {
                e = !1;
              },
              reset: () => {
                e = !0;
              },
              isReset: () => e,
            };
          })()
        ),
        w = () => o.useContext(v),
        A = (e, t) => {
          (e.suspense || e.throwOnError || e.experimental_prefetchInRender) &&
            !t.isReset() &&
            (e.retryOnMount = !1);
        },
        x = (e) => {
          o.useEffect(() => {
            e.clearReset();
          }, [e]);
        },
        E = (e) => {
          let {
            result: t,
            errorResetBoundary: r,
            throwOnError: n,
            query: i,
            suspense: s,
          } = e;
          return (
            t.isError &&
            !r.isReset() &&
            !t.isFetching &&
            i &&
            ((s && void 0 === t.data) || (0, h.GU)(n, [t.error, i]))
          );
        },
        R = o.createContext(!1),
        M = () => o.useContext(R);
      R.Provider;
      var S = (e) => {
          let t = e.staleTime;
          e.suspense &&
            ((e.staleTime =
              "function" == typeof t
                ? (...e) => Math.max(t(...e), 1e3)
                : Math.max(t ?? 1e3, 1e3)),
            "number" == typeof e.gcTime &&
              (e.gcTime = Math.max(e.gcTime, 1e3)));
        },
        P = (e, t) => e.isLoading && e.isFetching && !t,
        O = (e, t) => e?.suspense && t.isPending,
        I = (e, t, r) =>
          t.fetchOptimistic(e).catch(() => {
            r.clearReset();
          }),
        k = r(2145),
        N = r(18224),
        C = r(53031);
      function B() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { query: t = {}, ...r } = e,
          a = (0, C.U)(r),
          l = (0, n.jE)(),
          { address: f, connector: c, status: d } = (0, k.F)({ config: a }),
          b = (0, N.i)({ config: a }),
          g = null != (B = e.connector) ? B : c,
          { queryKey: m, ...y } = (function (e, t = {}) {
            return {
              gcTime: 0,
              async queryFn({ queryKey: r }) {
                let { connector: n } = t,
                  { connectorUid: s, scopeKey: a, ...o } = r[1];
                return (0, i.r)(e, { ...o, connector: n });
              },
              queryKey: (function (e = {}) {
                let { connector: t, ...r } = e;
                return [
                  "connectorClient",
                  {
                    ...(function (e) {
                      let {
                        _defaulted: t,
                        behavior: r,
                        gcTime: n,
                        initialData: i,
                        initialDataUpdatedAt: s,
                        maxPages: a,
                        meta: o,
                        networkMode: l,
                        queryFn: u,
                        queryHash: f,
                        queryKey: c,
                        queryKeyHashFn: d,
                        retry: h,
                        retryDelay: p,
                        structuralSharing: b,
                        getPreviousPageParam: g,
                        getNextPageParam: m,
                        initialPageParam: y,
                        _optimisticResults: v,
                        enabled: w,
                        notifyOnChangeProps: A,
                        placeholderData: x,
                        refetchInterval: E,
                        refetchIntervalInBackground: R,
                        refetchOnMount: M,
                        refetchOnReconnect: S,
                        refetchOnWindowFocus: P,
                        retryOnMount: O,
                        select: I,
                        staleTime: k,
                        suspense: N,
                        throwOnError: C,
                        config: B,
                        connector: T,
                        query: L,
                        ...U
                      } = e;
                      return U;
                    })(r),
                    connectorUid: t?.uid,
                  },
                ];
              })(t),
            };
          })(a, {
            ...e,
            chainId: null != (T = e.chainId) ? T : b,
            connector: g,
          }),
          v = !!(
            ("connected" === d ||
              ("reconnecting" === d && (null == g ? void 0 : g.getProvider))) &&
            (null == (L = t.enabled) || L)
          ),
          R = (0, o.useRef)(f);
        (0, o.useEffect)(() => {
          let e = R.current;
          !f && e
            ? (l.removeQueries({ queryKey: m }), (R.current = void 0))
            : f !== e &&
              (l.invalidateQueries({ queryKey: m }), (R.current = f));
        }, [f, l]);
        var B,
          T,
          L,
          U = {
            ...t,
            ...y,
            queryKey: m,
            enabled: v,
            staleTime: Number.POSITIVE_INFINITY,
          };
        let F = (function (e, t, r) {
          var i, s, a, l, f;
          let c = (0, n.jE)(r),
            d = M(),
            p = w(),
            b = c.defaultQueryOptions(e);
          null == (s = c.getDefaultOptions().queries) ||
            null == (i = s._experimental_beforeQuery) ||
            i.call(s, b),
            (b._optimisticResults = d ? "isRestoring" : "optimistic"),
            S(b),
            A(b, p),
            x(p);
          let g = !c.getQueryCache().get(b.queryHash),
            [m] = o.useState(() => new t(c, b)),
            y = m.getOptimisticResult(b),
            v = !d && !1 !== e.subscribed;
          if (
            (o.useSyncExternalStore(
              o.useCallback(
                (e) => {
                  let t = v ? m.subscribe(u.jG.batchCalls(e)) : h.lQ;
                  return m.updateResult(), t;
                },
                [m, v]
              ),
              () => m.getCurrentResult(),
              () => m.getCurrentResult()
            ),
            o.useEffect(() => {
              m.setOptions(b);
            }, [b, m]),
            O(b, y))
          )
            throw I(b, m, p);
          if (
            E({
              result: y,
              errorResetBoundary: p,
              throwOnError: b.throwOnError,
              query: c.getQueryCache().get(b.queryHash),
              suspense: b.suspense,
            })
          )
            throw y.error;
          if (
            (null == (l = c.getDefaultOptions().queries) ||
              null == (a = l._experimental_afterQuery) ||
              a.call(l, b, y),
            b.experimental_prefetchInRender && !h.S$ && P(y, d))
          ) {
            let e = g
              ? I(b, m, p)
              : null == (f = c.getQueryCache().get(b.queryHash))
              ? void 0
              : f.promise;
            null == e ||
              e.catch(h.lQ).finally(() => {
                m.updateResult();
              });
          }
          return b.notifyOnChangeProps ? y : m.trackResult(y);
        })({ ...U, queryKeyHashFn: s }, p, void 0);
        return (F.queryKey = U.queryKey), F;
      }
    },
    13656: (e, t, r) => {
      "use strict";
      var n = r(42539).rotr32;
      function i(e, t, r) {
        return (e & t) ^ (e & r) ^ (t & r);
      }
      (t.ft_1 = function (e, t, r, n) {
        var s;
        return 0 === e
          ? ((s = t) & r) ^ (~s & n)
          : 1 === e || 3 === e
          ? t ^ r ^ n
          : 2 === e
          ? i(t, r, n)
          : void 0;
      }),
        (t.ch32 = function (e, t, r) {
          return (e & t) ^ (~e & r);
        }),
        (t.maj32 = i),
        (t.p32 = function (e, t, r) {
          return e ^ t ^ r;
        }),
        (t.s0_256 = function (e) {
          return n(e, 2) ^ n(e, 13) ^ n(e, 22);
        }),
        (t.s1_256 = function (e) {
          return n(e, 6) ^ n(e, 11) ^ n(e, 25);
        }),
        (t.g0_256 = function (e) {
          return n(e, 7) ^ n(e, 18) ^ (e >>> 3);
        }),
        (t.g1_256 = function (e) {
          return n(e, 17) ^ n(e, 19) ^ (e >>> 10);
        });
    },
    14537: (e) => {
      "use strict";
      e.exports = { rE: "6.6.1" };
    },
    15564: (e, t, r) => {
      "use strict";
      var n = r(49509);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          default: function () {
            return g;
          },
          defaultHead: function () {
            return d;
          },
        });
      let i = r(88229),
        s = r(6966),
        a = r(95155),
        o = s._(r(12115)),
        l = i._(r(85029)),
        u = r(42464),
        f = r(82830),
        c = r(17544);
      function d(e) {
        void 0 === e && (e = !1);
        let t = [(0, a.jsx)("meta", { charSet: "utf-8" }, "charset")];
        return (
          e ||
            t.push(
              (0, a.jsx)(
                "meta",
                { name: "viewport", content: "width=device-width" },
                "viewport"
              )
            ),
          t
        );
      }
      function h(e, t) {
        return "string" == typeof t || "number" == typeof t
          ? e
          : t.type === o.default.Fragment
          ? e.concat(
              o.default.Children.toArray(t.props.children).reduce(
                (e, t) =>
                  "string" == typeof t || "number" == typeof t
                    ? e
                    : e.concat(t),
                []
              )
            )
          : e.concat(t);
      }
      r(43230);
      let p = ["name", "httpEquiv", "charSet", "itemProp"];
      function b(e, t) {
        let { inAmpMode: r } = t;
        return e
          .reduce(h, [])
          .reverse()
          .concat(d(r).reverse())
          .filter(
            (function () {
              let e = new Set(),
                t = new Set(),
                r = new Set(),
                n = {};
              return (i) => {
                let s = !0,
                  a = !1;
                if (
                  i.key &&
                  "number" != typeof i.key &&
                  i.key.indexOf("$") > 0
                ) {
                  a = !0;
                  let t = i.key.slice(i.key.indexOf("$") + 1);
                  e.has(t) ? (s = !1) : e.add(t);
                }
                switch (i.type) {
                  case "title":
                  case "base":
                    t.has(i.type) ? (s = !1) : t.add(i.type);
                    break;
                  case "meta":
                    for (let e = 0, t = p.length; e < t; e++) {
                      let t = p[e];
                      if (i.props.hasOwnProperty(t))
                        if ("charSet" === t) r.has(t) ? (s = !1) : r.add(t);
                        else {
                          let e = i.props[t],
                            r = n[t] || new Set();
                          ("name" !== t || !a) && r.has(e)
                            ? (s = !1)
                            : (r.add(e), (n[t] = r));
                        }
                    }
                }
                return s;
              };
            })()
          )
          .reverse()
          .map((e, t) => {
            let i = e.key || t;
            if (
              n.env.__NEXT_OPTIMIZE_FONTS &&
              !r &&
              "link" === e.type &&
              e.props.href &&
              [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/",
              ].some((t) => e.props.href.startsWith(t))
            ) {
              let t = { ...(e.props || {}) };
              return (
                (t["data-href"] = t.href),
                (t.href = void 0),
                (t["data-optimized-fonts"] = !0),
                o.default.cloneElement(e, t)
              );
            }
            return o.default.cloneElement(e, { key: i });
          });
      }
      let g = function (e) {
        let { children: t } = e,
          r = (0, o.useContext)(u.AmpStateContext),
          n = (0, o.useContext)(f.HeadManagerContext);
        return (0, a.jsx)(l.default, {
          reduceComponentsToState: b,
          headManager: n,
          inAmpMode: (0, c.isInAmpMode)(r),
          children: t,
        });
      };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    16284: (e, t, r) => {
      "use strict";
      r.d(t, { S: () => M });
      var n = r(87349),
        i = r(74824),
        s = r(71257);
      let [a, o, l] = [[], [], []],
        u = BigInt(0),
        f = BigInt(1),
        c = BigInt(2),
        d = BigInt(7),
        h = BigInt(256),
        p = BigInt(113);
      for (let e = 0, t = f, r = 1, n = 0; e < 24; e++) {
        ([r, n] = [n, (2 * r + 3 * n) % 5]),
          a.push(2 * (5 * n + r)),
          o.push((((e + 1) * (e + 2)) / 2) % 64);
        let i = u;
        for (let e = 0; e < 7; e++)
          (t = ((t << f) ^ ((t >> d) * p)) % h) & c &&
            (i ^= f << ((f << BigInt(e)) - f));
        l.push(i);
      }
      let [b, g] = (0, i.lD)(l, !0),
        m = (e, t, r) => (r > 32 ? (0, i.WM)(e, t, r) : (0, i.P5)(e, t, r)),
        y = (e, t, r) => (r > 32 ? (0, i.im)(e, t, r) : (0, i.B4)(e, t, r));
      class v extends s.Vw {
        constructor(e, t, r, i = !1, a = 24) {
          if (
            (super(),
            (this.blockLen = e),
            (this.suffix = t),
            (this.outputLen = r),
            (this.enableXOF = i),
            (this.rounds = a),
            (this.pos = 0),
            (this.posOut = 0),
            (this.finished = !1),
            (this.destroyed = !1),
            (0, n.ai)(r),
            0 >= this.blockLen || this.blockLen >= 200)
          )
            throw Error("Sha3 supports only keccak-f1600 function");
          (this.state = new Uint8Array(200)),
            (this.state32 = (0, s.DH)(this.state));
        }
        keccak() {
          !(function (e, t = 24) {
            let r = new Uint32Array(10);
            for (let n = 24 - t; n < 24; n++) {
              for (let t = 0; t < 10; t++)
                r[t] = e[t] ^ e[t + 10] ^ e[t + 20] ^ e[t + 30] ^ e[t + 40];
              for (let t = 0; t < 10; t += 2) {
                let n = (t + 8) % 10,
                  i = (t + 2) % 10,
                  s = r[i],
                  a = r[i + 1],
                  o = m(s, a, 1) ^ r[n],
                  l = y(s, a, 1) ^ r[n + 1];
                for (let r = 0; r < 50; r += 10)
                  (e[t + r] ^= o), (e[t + r + 1] ^= l);
              }
              let t = e[2],
                i = e[3];
              for (let r = 0; r < 24; r++) {
                let n = o[r],
                  s = m(t, i, n),
                  l = y(t, i, n),
                  u = a[r];
                (t = e[u]), (i = e[u + 1]), (e[u] = s), (e[u + 1] = l);
              }
              for (let t = 0; t < 50; t += 10) {
                for (let n = 0; n < 10; n++) r[n] = e[t + n];
                for (let n = 0; n < 10; n++)
                  e[t + n] ^= ~r[(n + 2) % 10] & r[(n + 4) % 10];
              }
              (e[0] ^= b[n]), (e[1] ^= g[n]);
            }
            r.fill(0);
          })(this.state32, this.rounds),
            (this.posOut = 0),
            (this.pos = 0);
        }
        update(e) {
          (0, n.t2)(this);
          let { blockLen: t, state: r } = this,
            i = (e = (0, s.ZJ)(e)).length;
          for (let n = 0; n < i; ) {
            let s = Math.min(t - this.pos, i - n);
            for (let t = 0; t < s; t++) r[this.pos++] ^= e[n++];
            this.pos === t && this.keccak();
          }
          return this;
        }
        finish() {
          if (this.finished) return;
          this.finished = !0;
          let { state: e, suffix: t, pos: r, blockLen: n } = this;
          (e[r] ^= t),
            (128 & t) != 0 && r === n - 1 && this.keccak(),
            (e[n - 1] ^= 128),
            this.keccak();
        }
        writeInto(e) {
          (0, n.t2)(this, !1), (0, n.ee)(e), this.finish();
          let t = this.state,
            { blockLen: r } = this;
          for (let n = 0, i = e.length; n < i; ) {
            this.posOut >= r && this.keccak();
            let s = Math.min(r - this.posOut, i - n);
            e.set(t.subarray(this.posOut, this.posOut + s), n),
              (this.posOut += s),
              (n += s);
          }
          return e;
        }
        xofInto(e) {
          if (!this.enableXOF)
            throw Error("XOF is not possible for this instance");
          return this.writeInto(e);
        }
        xof(e) {
          return (0, n.ai)(e), this.xofInto(new Uint8Array(e));
        }
        digestInto(e) {
          if (((0, n.CG)(e, this), this.finished))
            throw Error("digest() was already called");
          return this.writeInto(e), this.destroy(), e;
        }
        digest() {
          return this.digestInto(new Uint8Array(this.outputLen));
        }
        destroy() {
          (this.destroyed = !0), this.state.fill(0);
        }
        _cloneInto(e) {
          let {
            blockLen: t,
            suffix: r,
            outputLen: n,
            rounds: i,
            enableXOF: s,
          } = this;
          return (
            e || (e = new v(t, r, n, s, i)),
            e.state32.set(this.state32),
            (e.pos = this.pos),
            (e.posOut = this.posOut),
            (e.finished = this.finished),
            (e.rounds = i),
            (e.suffix = r),
            (e.outputLen = n),
            (e.enableXOF = s),
            (e.destroyed = this.destroyed),
            e
          );
        }
      }
      let w = (0, s.ld)(() => new v(136, 1, 32));
      var A = r(44532);
      let x = !1,
        E = function (e) {
          return w(e);
        },
        R = E;
      function M(e) {
        let t = (0, A.q5)(e, "data");
        return (0, A.c$)(R(t));
      }
      (M._ = E),
        (M.lock = function () {
          x = !0;
        }),
        (M.register = function (e) {
          if (x) throw TypeError("keccak256 is locked");
          R = e;
        }),
        Object.freeze(M);
    },
    17544: (e, t) => {
      "use strict";
      function r(e) {
        let {
          ampFirst: t = !1,
          hybrid: r = !1,
          hasQuery: n = !1,
        } = void 0 === e ? {} : e;
        return t || (r && n);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isInAmpMode", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
    },
    17828: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "workAsyncStorageInstance", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = (0, r(64054).createAsyncLocalStorage)();
    },
    18558: (e) => {
      e.exports = {
        style: { fontFamily: "'zupraxu', 'zupraxu Fallback'" },
        className: "__className_6f5949",
        variable: "__variable_6f5949",
      };
    },
    19562: (e, t, r) => {
      var n = r(12115),
        i = r(32757),
        s = r(93482),
        a = (function (e) {
          return e && "object" == typeof e && "default" in e
            ? e
            : { default: e };
        })(i),
        o = function () {
          return (o =
            Object.assign ||
            function (e) {
              for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var i in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }).apply(this, arguments);
        },
        l = function (e) {
          var t = e.widgetCallback,
            r = e.listeners;
          return o(o({}, r || {}), {
            close: function () {
              t && t(), (null == r ? void 0 : r.close) && r.close();
            },
          });
        },
        u = function (e) {
          if (!e) return {};
          var t = e.private_key,
            r = (function (e, t) {
              var r = {};
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) &&
                  0 > t.indexOf(n) &&
                  (r[n] = e[n]);
              if (
                null != e &&
                "function" == typeof Object.getOwnPropertySymbols
              )
                for (
                  var i = 0, n = Object.getOwnPropertySymbols(e);
                  i < n.length;
                  i++
                )
                  0 > t.indexOf(n[i]) &&
                    Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
                    (r[n[i]] = e[n[i]]);
              return r;
            })(e, ["private_key"]);
          return s.signSmartContractData(r, t);
        },
        f = ["theme", "brand_color"],
        c = function (e) {
          var t = e.widget,
            r = e.options,
            n = e.prevOptions;
          if (t) {
            var i = f.reduce(function (e, t) {
              var i, s;
              if (
                (null == (s = n.current) ? void 0 : s[t]) !==
                (null == r ? void 0 : r[t])
              )
                if ("theme" === t)
                  return o(o({}, e), { theme: null == r ? void 0 : r[t] });
                else
                  return o(
                    o({}, e),
                    (((i = {})[t] = null == r ? void 0 : r[t]), i)
                  );
              return e;
            }, {});
            Object.keys(i).length && t.updateTheme(i);
          }
        },
        d = function (e) {
          var t,
            r = e.widget,
            n = e.options,
            i = e.prevOptions,
            s = e.widgetCallback;
          if (r) {
            if (null == (t = i.current) ? void 0 : t.listeners) {
              var a = (null == n ? void 0 : n.listeners) || {},
                o = Object.keys(i.current.listeners).filter(function (e) {
                  return !(e in a);
                });
              o.length && r.removeEventListeners(o);
            }
            var u = l({
              listeners: null == n ? void 0 : n.listeners,
              widgetCallback: s,
            });
            r.addEventListeners(u);
          }
        },
        h = function (e) {
          var t = e.widget,
            r = e.options,
            n = e.prevOptions,
            i = e.widgetCallback;
          c({ widget: t, options: r, prevOptions: n }),
            d({ widget: t, options: r, prevOptions: n, widgetCallback: i }),
            (n.current = r);
        };
      t.C = function (e) {
        var t = n.useRef(e),
          r = n.useRef(),
          i = n.useState(!1),
          s = i[0],
          f = i[1];
        return (
          n.useEffect(
            function () {
              h({
                widget: r.current,
                widgetCallback: function () {
                  return f(!1);
                },
                options: e,
                prevOptions: t,
              });
            },
            [e]
          ),
          {
            open: function (t) {
              var n = t.options,
                i = t.smartContractOptions;
              if (s)
                return void console.error("The Wert widget is already open");
              (r.current = new a.default(
                o(
                  o(o(o({}, n), e), {
                    listeners: l({
                      listeners: null == e ? void 0 : e.listeners,
                      widgetCallback: function () {
                        return f(!1);
                      },
                    }),
                  }),
                  i ? u(i) : {}
                )
              )),
                r.current.open(),
                f(!0);
            },
            close: function () {
              var e;
              if (!s)
                return void console.error("The Wert widget is already closed");
              null == (e = r.current) || e.close(), f(!1);
            },
            isWidgetOpen: s,
          }
        );
      };
    },
    21574: (e, t, r) => {
      "use strict";
      var n = r(42539),
        i = r(68711),
        s = r(13656),
        a = r(23124),
        o = n.sum32,
        l = n.sum32_4,
        u = n.sum32_5,
        f = s.ch32,
        c = s.maj32,
        d = s.s0_256,
        h = s.s1_256,
        p = s.g0_256,
        b = s.g1_256,
        g = i.BlockHash,
        m = [
          0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b,
          0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01,
          0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7,
          0xc19bf174, 0xe49b69c1, 0xefbe4786, 0xfc19dc6, 0x240ca1cc, 0x2de92c6f,
          0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d,
          0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x6ca6351, 0x14292967,
          0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354,
          0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b,
          0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585,
          0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5,
          0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee,
          0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb,
          0xbef9a3f7, 0xc67178f2,
        ];
      function y() {
        if (!(this instanceof y)) return new y();
        g.call(this),
          (this.h = [
            0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f,
            0x9b05688c, 0x1f83d9ab, 0x5be0cd19,
          ]),
          (this.k = m),
          (this.W = Array(64));
      }
      n.inherits(y, g),
        (e.exports = y),
        (y.blockSize = 512),
        (y.outSize = 256),
        (y.hmacStrength = 192),
        (y.padLength = 64),
        (y.prototype._update = function (e, t) {
          for (var r = this.W, n = 0; n < 16; n++) r[n] = e[t + n];
          for (; n < r.length; n++)
            r[n] = l(b(r[n - 2]), r[n - 7], p(r[n - 15]), r[n - 16]);
          var i = this.h[0],
            s = this.h[1],
            g = this.h[2],
            m = this.h[3],
            y = this.h[4],
            v = this.h[5],
            w = this.h[6],
            A = this.h[7];
          for (a(this.k.length === r.length), n = 0; n < r.length; n++) {
            var x = u(A, h(y), f(y, v, w), this.k[n], r[n]),
              E = o(d(i), c(i, s, g));
            (A = w),
              (w = v),
              (v = y),
              (y = o(m, x)),
              (m = g),
              (g = s),
              (s = i),
              (i = o(x, E));
          }
          (this.h[0] = o(this.h[0], i)),
            (this.h[1] = o(this.h[1], s)),
            (this.h[2] = o(this.h[2], g)),
            (this.h[3] = o(this.h[3], m)),
            (this.h[4] = o(this.h[4], y)),
            (this.h[5] = o(this.h[5], v)),
            (this.h[6] = o(this.h[6], w)),
            (this.h[7] = o(this.h[7], A));
        }),
        (y.prototype._digest = function (e) {
          return "hex" === e
            ? n.toHex32(this.h, "big")
            : n.split32(this.h, "big");
        });
    },
    23124: (e) => {
      function t(e, t) {
        if (!e) throw Error(t || "Assertion failed");
      }
      (e.exports = t),
        (t.equal = function (e, t, r) {
          if (e != t) throw Error(r || "Assertion failed: " + e + " != " + t);
        });
    },
    23464: (e, t, r) => {
      "use strict";
      let n;
      r.d(t, { A: () => tu });
      var i,
        s,
        a,
        o = {};
      function l(e, t) {
        return function () {
          return e.apply(t, arguments);
        };
      }
      r.r(o),
        r.d(o, {
          hasBrowserEnv: () => ed,
          hasStandardBrowserEnv: () => ep,
          hasStandardBrowserWebWorkerEnv: () => eb,
          navigator: () => eh,
          origin: () => eg,
        });
      var u = r(49509);
      let { toString: f } = Object.prototype,
        { getPrototypeOf: c } = Object,
        { iterator: d, toStringTag: h } = Symbol,
        p = ((e) => (t) => {
          let r = f.call(t);
          return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
        })(Object.create(null)),
        b = (e) => ((e = e.toLowerCase()), (t) => p(t) === e),
        g = (e) => (t) => typeof t === e,
        { isArray: m } = Array,
        y = g("undefined"),
        v = b("ArrayBuffer"),
        w = g("string"),
        A = g("function"),
        x = g("number"),
        E = (e) => null !== e && "object" == typeof e,
        R = (e) => {
          if ("object" !== p(e)) return !1;
          let t = c(e);
          return (
            (null === t ||
              t === Object.prototype ||
              null === Object.getPrototypeOf(t)) &&
            !(h in e) &&
            !(d in e)
          );
        },
        M = b("Date"),
        S = b("File"),
        P = b("Blob"),
        O = b("FileList"),
        I = b("URLSearchParams"),
        [k, N, C, B] = ["ReadableStream", "Request", "Response", "Headers"].map(
          b
        );
      function T(e, t, { allOwnKeys: r = !1 } = {}) {
        let n, i;
        if (null != e)
          if (("object" != typeof e && (e = [e]), m(e)))
            for (n = 0, i = e.length; n < i; n++) t.call(null, e[n], n, e);
          else {
            let i,
              s = r ? Object.getOwnPropertyNames(e) : Object.keys(e),
              a = s.length;
            for (n = 0; n < a; n++) (i = s[n]), t.call(null, e[i], i, e);
          }
      }
      function L(e, t) {
        let r;
        t = t.toLowerCase();
        let n = Object.keys(e),
          i = n.length;
        for (; i-- > 0; ) if (t === (r = n[i]).toLowerCase()) return r;
        return null;
      }
      let U =
          "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : global,
        F = (e) => !y(e) && e !== U,
        _ = (
          (e) => (t) =>
            e && t instanceof e
        )("undefined" != typeof Uint8Array && c(Uint8Array)),
        D = b("HTMLFormElement"),
        j = (
          ({ hasOwnProperty: e }) =>
          (t, r) =>
            e.call(t, r)
        )(Object.prototype),
        z = b("RegExp"),
        G = (e, t) => {
          let r = Object.getOwnPropertyDescriptors(e),
            n = {};
          T(r, (r, i) => {
            let s;
            !1 !== (s = t(r, i, e)) && (n[i] = s || r);
          }),
            Object.defineProperties(e, n);
        },
        q = b("AsyncFunction"),
        Q =
          ((i = "function" == typeof setImmediate),
          (s = A(U.postMessage)),
          i
            ? setImmediate
            : s
            ? ((e, t) => (
                U.addEventListener(
                  "message",
                  ({ source: r, data: n }) => {
                    r === U && n === e && t.length && t.shift()();
                  },
                  !1
                ),
                (r) => {
                  t.push(r), U.postMessage(e, "*");
                }
              ))(`axios@${Math.random()}`, [])
            : (e) => setTimeout(e)),
        H =
          "undefined" != typeof queueMicrotask
            ? queueMicrotask.bind(U)
            : (void 0 !== u && u.nextTick) || Q,
        V = {
          isArray: m,
          isArrayBuffer: v,
          isBuffer: function (e) {
            return (
              null !== e &&
              !y(e) &&
              null !== e.constructor &&
              !y(e.constructor) &&
              A(e.constructor.isBuffer) &&
              e.constructor.isBuffer(e)
            );
          },
          isFormData: (e) => {
            let t;
            return (
              e &&
              (("function" == typeof FormData && e instanceof FormData) ||
                (A(e.append) &&
                  ("formdata" === (t = p(e)) ||
                    ("object" === t &&
                      A(e.toString) &&
                      "[object FormData]" === e.toString()))))
            );
          },
          isArrayBufferView: function (e) {
            let t;
            return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
              ? ArrayBuffer.isView(e)
              : e && e.buffer && v(e.buffer);
          },
          isString: w,
          isNumber: x,
          isBoolean: (e) => !0 === e || !1 === e,
          isObject: E,
          isPlainObject: R,
          isReadableStream: k,
          isRequest: N,
          isResponse: C,
          isHeaders: B,
          isUndefined: y,
          isDate: M,
          isFile: S,
          isBlob: P,
          isRegExp: z,
          isFunction: A,
          isStream: (e) => E(e) && A(e.pipe),
          isURLSearchParams: I,
          isTypedArray: _,
          isFileList: O,
          forEach: T,
          merge: function e() {
            let { caseless: t } = (F(this) && this) || {},
              r = {},
              n = (n, i) => {
                let s = (t && L(r, i)) || i;
                R(r[s]) && R(n)
                  ? (r[s] = e(r[s], n))
                  : R(n)
                  ? (r[s] = e({}, n))
                  : m(n)
                  ? (r[s] = n.slice())
                  : (r[s] = n);
              };
            for (let e = 0, t = arguments.length; e < t; e++)
              arguments[e] && T(arguments[e], n);
            return r;
          },
          extend: (e, t, r, { allOwnKeys: n } = {}) => (
            T(
              t,
              (t, n) => {
                r && A(t) ? (e[n] = l(t, r)) : (e[n] = t);
              },
              { allOwnKeys: n }
            ),
            e
          ),
          trim: (e) =>
            e.trim
              ? e.trim()
              : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
          stripBOM: (e) => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
          inherits: (e, t, r, n) => {
            (e.prototype = Object.create(t.prototype, n)),
              (e.prototype.constructor = e),
              Object.defineProperty(e, "super", { value: t.prototype }),
              r && Object.assign(e.prototype, r);
          },
          toFlatObject: (e, t, r, n) => {
            let i,
              s,
              a,
              o = {};
            if (((t = t || {}), null == e)) return t;
            do {
              for (s = (i = Object.getOwnPropertyNames(e)).length; s-- > 0; )
                (a = i[s]),
                  (!n || n(a, e, t)) && !o[a] && ((t[a] = e[a]), (o[a] = !0));
              e = !1 !== r && c(e);
            } while (e && (!r || r(e, t)) && e !== Object.prototype);
            return t;
          },
          kindOf: p,
          kindOfTest: b,
          endsWith: (e, t, r) => {
            (e = String(e)),
              (void 0 === r || r > e.length) && (r = e.length),
              (r -= t.length);
            let n = e.indexOf(t, r);
            return -1 !== n && n === r;
          },
          toArray: (e) => {
            if (!e) return null;
            if (m(e)) return e;
            let t = e.length;
            if (!x(t)) return null;
            let r = Array(t);
            for (; t-- > 0; ) r[t] = e[t];
            return r;
          },
          forEachEntry: (e, t) => {
            let r,
              n = (e && e[d]).call(e);
            for (; (r = n.next()) && !r.done; ) {
              let n = r.value;
              t.call(e, n[0], n[1]);
            }
          },
          matchAll: (e, t) => {
            let r,
              n = [];
            for (; null !== (r = e.exec(t)); ) n.push(r);
            return n;
          },
          isHTMLForm: D,
          hasOwnProperty: j,
          hasOwnProp: j,
          reduceDescriptors: G,
          freezeMethods: (e) => {
            G(e, (t, r) => {
              if (A(e) && -1 !== ["arguments", "caller", "callee"].indexOf(r))
                return !1;
              if (A(e[r])) {
                if (((t.enumerable = !1), "writable" in t)) {
                  t.writable = !1;
                  return;
                }
                t.set ||
                  (t.set = () => {
                    throw Error("Can not rewrite read-only method '" + r + "'");
                  });
              }
            });
          },
          toObjectSet: (e, t) => {
            let r = {};
            return (
              (m(e) ? e : String(e).split(t)).forEach((e) => {
                r[e] = !0;
              }),
              r
            );
          },
          toCamelCase: (e) =>
            e
              .toLowerCase()
              .replace(/[-_\s]([a-z\d])(\w*)/g, function (e, t, r) {
                return t.toUpperCase() + r;
              }),
          noop: () => {},
          toFiniteNumber: (e, t) =>
            null != e && Number.isFinite((e *= 1)) ? e : t,
          findKey: L,
          global: U,
          isContextDefined: F,
          isSpecCompliantForm: function (e) {
            return !!(e && A(e.append) && "FormData" === e[h] && e[d]);
          },
          toJSONObject: (e) => {
            let t = Array(10),
              r = (e, n) => {
                if (E(e)) {
                  if (t.indexOf(e) >= 0) return;
                  if (!("toJSON" in e)) {
                    t[n] = e;
                    let i = m(e) ? [] : {};
                    return (
                      T(e, (e, t) => {
                        let s = r(e, n + 1);
                        y(s) || (i[t] = s);
                      }),
                      (t[n] = void 0),
                      i
                    );
                  }
                }
                return e;
              };
            return r(e, 0);
          },
          isAsyncFn: q,
          isThenable: (e) => e && (E(e) || A(e)) && A(e.then) && A(e.catch),
          setImmediate: Q,
          asap: H,
          isIterable: (e) => null != e && A(e[d]),
        };
      function J(e, t, r, n, i) {
        Error.call(this),
          Error.captureStackTrace
            ? Error.captureStackTrace(this, this.constructor)
            : (this.stack = Error().stack),
          (this.message = e),
          (this.name = "AxiosError"),
          t && (this.code = t),
          r && (this.config = r),
          n && (this.request = n),
          i &&
            ((this.response = i), (this.status = i.status ? i.status : null));
      }
      V.inherits(J, Error, {
        toJSON: function () {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: V.toJSONObject(this.config),
            code: this.code,
            status: this.status,
          };
        },
      });
      let K = J.prototype,
        W = {};
      [
        "ERR_BAD_OPTION_VALUE",
        "ERR_BAD_OPTION",
        "ECONNABORTED",
        "ETIMEDOUT",
        "ERR_NETWORK",
        "ERR_FR_TOO_MANY_REDIRECTS",
        "ERR_DEPRECATED",
        "ERR_BAD_RESPONSE",
        "ERR_BAD_REQUEST",
        "ERR_CANCELED",
        "ERR_NOT_SUPPORT",
        "ERR_INVALID_URL",
      ].forEach((e) => {
        W[e] = { value: e };
      }),
        Object.defineProperties(J, W),
        Object.defineProperty(K, "isAxiosError", { value: !0 }),
        (J.from = (e, t, r, n, i, s) => {
          let a = Object.create(K);
          return (
            V.toFlatObject(
              e,
              a,
              function (e) {
                return e !== Error.prototype;
              },
              (e) => "isAxiosError" !== e
            ),
            J.call(a, e.message, t, r, n, i),
            (a.cause = e),
            (a.name = e.name),
            s && Object.assign(a, s),
            a
          );
        });
      var Z = r(44134).Buffer;
      function Y(e) {
        return V.isPlainObject(e) || V.isArray(e);
      }
      function X(e) {
        return V.endsWith(e, "[]") ? e.slice(0, -2) : e;
      }
      function $(e, t, r) {
        return e
          ? e
              .concat(t)
              .map(function (e, t) {
                return (e = X(e)), !r && t ? "[" + e + "]" : e;
              })
              .join(r ? "." : "")
          : t;
      }
      let ee = V.toFlatObject(V, {}, null, function (e) {
          return /^is[A-Z]/.test(e);
        }),
        et = function (e, t, r) {
          if (!V.isObject(e)) throw TypeError("target must be an object");
          t = t || new FormData();
          let n = (r = V.toFlatObject(
              r,
              { metaTokens: !0, dots: !1, indexes: !1 },
              !1,
              function (e, t) {
                return !V.isUndefined(t[e]);
              }
            )).metaTokens,
            i = r.visitor || u,
            s = r.dots,
            a = r.indexes,
            o =
              (r.Blob || ("undefined" != typeof Blob && Blob)) &&
              V.isSpecCompliantForm(t);
          if (!V.isFunction(i)) throw TypeError("visitor must be a function");
          function l(e) {
            if (null === e) return "";
            if (V.isDate(e)) return e.toISOString();
            if (!o && V.isBlob(e))
              throw new J("Blob is not supported. Use a Buffer instead.");
            return V.isArrayBuffer(e) || V.isTypedArray(e)
              ? o && "function" == typeof Blob
                ? new Blob([e])
                : Z.from(e)
              : e;
          }
          function u(e, r, i) {
            let o = e;
            if (e && !i && "object" == typeof e)
              if (V.endsWith(r, "{}"))
                (r = n ? r : r.slice(0, -2)), (e = JSON.stringify(e));
              else {
                var u;
                if (
                  (V.isArray(e) && ((u = e), V.isArray(u) && !u.some(Y))) ||
                  ((V.isFileList(e) || V.endsWith(r, "[]")) &&
                    (o = V.toArray(e)))
                )
                  return (
                    (r = X(r)),
                    o.forEach(function (e, n) {
                      V.isUndefined(e) ||
                        null === e ||
                        t.append(
                          !0 === a ? $([r], n, s) : null === a ? r : r + "[]",
                          l(e)
                        );
                    }),
                    !1
                  );
              }
            return !!Y(e) || (t.append($(i, r, s), l(e)), !1);
          }
          let f = [],
            c = Object.assign(ee, {
              defaultVisitor: u,
              convertValue: l,
              isVisitable: Y,
            });
          if (!V.isObject(e)) throw TypeError("data must be an object");
          return (
            !(function e(r, n) {
              if (!V.isUndefined(r)) {
                if (-1 !== f.indexOf(r))
                  throw Error("Circular reference detected in " + n.join("."));
                f.push(r),
                  V.forEach(r, function (r, s) {
                    !0 ===
                      (!(V.isUndefined(r) || null === r) &&
                        i.call(t, r, V.isString(s) ? s.trim() : s, n, c)) &&
                      e(r, n ? n.concat(s) : [s]);
                  }),
                  f.pop();
              }
            })(e),
            t
          );
        };
      function er(e) {
        let t = {
          "!": "%21",
          "'": "%27",
          "(": "%28",
          ")": "%29",
          "~": "%7E",
          "%20": "+",
          "%00": "\0",
        };
        return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (e) {
          return t[e];
        });
      }
      function en(e, t) {
        (this._pairs = []), e && et(e, this, t);
      }
      let ei = en.prototype;
      function es(e) {
        return encodeURIComponent(e)
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",")
          .replace(/%20/g, "+")
          .replace(/%5B/gi, "[")
          .replace(/%5D/gi, "]");
      }
      function ea(e, t, r) {
        let n;
        if (!t) return e;
        let i = (r && r.encode) || es;
        V.isFunction(r) && (r = { serialize: r });
        let s = r && r.serialize;
        if (
          (n = s
            ? s(t, r)
            : V.isURLSearchParams(t)
            ? t.toString()
            : new en(t, r).toString(i))
        ) {
          let t = e.indexOf("#");
          -1 !== t && (e = e.slice(0, t)),
            (e += (-1 === e.indexOf("?") ? "?" : "&") + n);
        }
        return e;
      }
      (ei.append = function (e, t) {
        this._pairs.push([e, t]);
      }),
        (ei.toString = function (e) {
          let t = e
            ? function (t) {
                return e.call(this, t, er);
              }
            : er;
          return this._pairs
            .map(function (e) {
              return t(e[0]) + "=" + t(e[1]);
            }, "")
            .join("&");
        });
      class eo {
        constructor() {
          this.handlers = [];
        }
        use(e, t, r) {
          return (
            this.handlers.push({
              fulfilled: e,
              rejected: t,
              synchronous: !!r && r.synchronous,
              runWhen: r ? r.runWhen : null,
            }),
            this.handlers.length - 1
          );
        }
        eject(e) {
          this.handlers[e] && (this.handlers[e] = null);
        }
        clear() {
          this.handlers && (this.handlers = []);
        }
        forEach(e) {
          V.forEach(this.handlers, function (t) {
            null !== t && e(t);
          });
        }
      }
      let el = {
          silentJSONParsing: !0,
          forcedJSONParsing: !0,
          clarifyTimeoutError: !1,
        },
        eu = "undefined" != typeof URLSearchParams ? URLSearchParams : en,
        ef = "undefined" != typeof FormData ? FormData : null,
        ec = "undefined" != typeof Blob ? Blob : null,
        ed = "undefined" != typeof window && "undefined" != typeof document,
        eh = ("object" == typeof navigator && navigator) || void 0,
        ep =
          ed &&
          (!eh ||
            0 > ["ReactNative", "NativeScript", "NS"].indexOf(eh.product)),
        eb =
          "undefined" != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          "function" == typeof self.importScripts,
        eg = (ed && window.location.href) || "http://localhost",
        em = {
          ...o,
          isBrowser: !0,
          classes: { URLSearchParams: eu, FormData: ef, Blob: ec },
          protocols: ["http", "https", "file", "blob", "url", "data"],
        },
        ey = function (e) {
          if (V.isFormData(e) && V.isFunction(e.entries)) {
            let t = {};
            return (
              V.forEachEntry(e, (e, r) => {
                !(function e(t, r, n, i) {
                  let s = t[i++];
                  if ("__proto__" === s) return !0;
                  let a = Number.isFinite(+s),
                    o = i >= t.length;
                  return (
                    ((s = !s && V.isArray(n) ? n.length : s), o)
                      ? V.hasOwnProp(n, s)
                        ? (n[s] = [n[s], r])
                        : (n[s] = r)
                      : ((n[s] && V.isObject(n[s])) || (n[s] = []),
                        e(t, r, n[s], i) &&
                          V.isArray(n[s]) &&
                          (n[s] = (function (e) {
                            let t,
                              r,
                              n = {},
                              i = Object.keys(e),
                              s = i.length;
                            for (t = 0; t < s; t++) n[(r = i[t])] = e[r];
                            return n;
                          })(n[s]))),
                    !a
                  );
                })(
                  V.matchAll(/\w+|\[(\w*)]/g, e).map((e) =>
                    "[]" === e[0] ? "" : e[1] || e[0]
                  ),
                  r,
                  t,
                  0
                );
              }),
              t
            );
          }
          return null;
        },
        ev = {
          transitional: el,
          adapter: ["xhr", "http", "fetch"],
          transformRequest: [
            function (e, t) {
              let r,
                n = t.getContentType() || "",
                i = n.indexOf("application/json") > -1,
                s = V.isObject(e);
              if (
                (s && V.isHTMLForm(e) && (e = new FormData(e)), V.isFormData(e))
              )
                return i ? JSON.stringify(ey(e)) : e;
              if (
                V.isArrayBuffer(e) ||
                V.isBuffer(e) ||
                V.isStream(e) ||
                V.isFile(e) ||
                V.isBlob(e) ||
                V.isReadableStream(e)
              )
                return e;
              if (V.isArrayBufferView(e)) return e.buffer;
              if (V.isURLSearchParams(e))
                return (
                  t.setContentType(
                    "application/x-www-form-urlencoded;charset=utf-8",
                    !1
                  ),
                  e.toString()
                );
              if (s) {
                if (n.indexOf("application/x-www-form-urlencoded") > -1) {
                  var a, o;
                  return ((a = e),
                  (o = this.formSerializer),
                  et(
                    a,
                    new em.classes.URLSearchParams(),
                    Object.assign(
                      {
                        visitor: function (e, t, r, n) {
                          return em.isNode && V.isBuffer(e)
                            ? (this.append(t, e.toString("base64")), !1)
                            : n.defaultVisitor.apply(this, arguments);
                        },
                      },
                      o
                    )
                  )).toString();
                }
                if (
                  (r = V.isFileList(e)) ||
                  n.indexOf("multipart/form-data") > -1
                ) {
                  let t = this.env && this.env.FormData;
                  return et(
                    r ? { "files[]": e } : e,
                    t && new t(),
                    this.formSerializer
                  );
                }
              }
              if (s || i) {
                t.setContentType("application/json", !1);
                var l = e;
                if (V.isString(l))
                  try {
                    return (0, JSON.parse)(l), V.trim(l);
                  } catch (e) {
                    if ("SyntaxError" !== e.name) throw e;
                  }
                return (0, JSON.stringify)(l);
              }
              return e;
            },
          ],
          transformResponse: [
            function (e) {
              let t = this.transitional || ev.transitional,
                r = t && t.forcedJSONParsing,
                n = "json" === this.responseType;
              if (V.isResponse(e) || V.isReadableStream(e)) return e;
              if (e && V.isString(e) && ((r && !this.responseType) || n)) {
                let r = t && t.silentJSONParsing;
                try {
                  return JSON.parse(e);
                } catch (e) {
                  if (!r && n) {
                    if ("SyntaxError" === e.name)
                      throw J.from(
                        e,
                        J.ERR_BAD_RESPONSE,
                        this,
                        null,
                        this.response
                      );
                    throw e;
                  }
                }
              }
              return e;
            },
          ],
          timeout: 0,
          xsrfCookieName: "XSRF-TOKEN",
          xsrfHeaderName: "X-XSRF-TOKEN",
          maxContentLength: -1,
          maxBodyLength: -1,
          env: { FormData: em.classes.FormData, Blob: em.classes.Blob },
          validateStatus: function (e) {
            return e >= 200 && e < 300;
          },
          headers: {
            common: {
              Accept: "application/json, text/plain, */*",
              "Content-Type": void 0,
            },
          },
        };
      V.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
        ev.headers[e] = {};
      });
      let ew = V.toObjectSet([
          "age",
          "authorization",
          "content-length",
          "content-type",
          "etag",
          "expires",
          "from",
          "host",
          "if-modified-since",
          "if-unmodified-since",
          "last-modified",
          "location",
          "max-forwards",
          "proxy-authorization",
          "referer",
          "retry-after",
          "user-agent",
        ]),
        eA = (e) => {
          let t,
            r,
            n,
            i = {};
          return (
            e &&
              e.split("\n").forEach(function (e) {
                (n = e.indexOf(":")),
                  (t = e.substring(0, n).trim().toLowerCase()),
                  (r = e.substring(n + 1).trim()),
                  !t ||
                    (i[t] && ew[t]) ||
                    ("set-cookie" === t
                      ? i[t]
                        ? i[t].push(r)
                        : (i[t] = [r])
                      : (i[t] = i[t] ? i[t] + ", " + r : r));
              }),
            i
          );
        },
        ex = Symbol("internals");
      function eE(e) {
        return e && String(e).trim().toLowerCase();
      }
      function eR(e) {
        return !1 === e || null == e ? e : V.isArray(e) ? e.map(eR) : String(e);
      }
      let eM = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
      function eS(e, t, r, n, i) {
        if (V.isFunction(n)) return n.call(this, t, r);
        if ((i && (t = r), V.isString(t))) {
          if (V.isString(n)) return -1 !== t.indexOf(n);
          if (V.isRegExp(n)) return n.test(t);
        }
      }
      class eP {
        constructor(e) {
          e && this.set(e);
        }
        set(e, t, r) {
          let n = this;
          function i(e, t, r) {
            let i = eE(t);
            if (!i) throw Error("header name must be a non-empty string");
            let s = V.findKey(n, i);
            (s &&
              void 0 !== n[s] &&
              !0 !== r &&
              (void 0 !== r || !1 === n[s])) ||
              (n[s || t] = eR(e));
          }
          let s = (e, t) => V.forEach(e, (e, r) => i(e, r, t));
          if (V.isPlainObject(e) || e instanceof this.constructor) s(e, t);
          else if (V.isString(e) && (e = e.trim()) && !eM(e)) s(eA(e), t);
          else if (V.isObject(e) && V.isIterable(e)) {
            let r = {},
              n,
              i;
            for (let t of e) {
              if (!V.isArray(t))
                throw TypeError("Object iterator must return a key-value pair");
              r[(i = t[0])] = (n = r[i])
                ? V.isArray(n)
                  ? [...n, t[1]]
                  : [n, t[1]]
                : t[1];
            }
            s(r, t);
          } else null != e && i(t, e, r);
          return this;
        }
        get(e, t) {
          if ((e = eE(e))) {
            let r = V.findKey(this, e);
            if (r) {
              let e = this[r];
              if (!t) return e;
              if (!0 === t) {
                let t,
                  r = Object.create(null),
                  n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                for (; (t = n.exec(e)); ) r[t[1]] = t[2];
                return r;
              }
              if (V.isFunction(t)) return t.call(this, e, r);
              if (V.isRegExp(t)) return t.exec(e);
              throw TypeError("parser must be boolean|regexp|function");
            }
          }
        }
        has(e, t) {
          if ((e = eE(e))) {
            let r = V.findKey(this, e);
            return !!(
              r &&
              void 0 !== this[r] &&
              (!t || eS(this, this[r], r, t))
            );
          }
          return !1;
        }
        delete(e, t) {
          let r = this,
            n = !1;
          function i(e) {
            if ((e = eE(e))) {
              let i = V.findKey(r, e);
              i && (!t || eS(r, r[i], i, t)) && (delete r[i], (n = !0));
            }
          }
          return V.isArray(e) ? e.forEach(i) : i(e), n;
        }
        clear(e) {
          let t = Object.keys(this),
            r = t.length,
            n = !1;
          for (; r--; ) {
            let i = t[r];
            (!e || eS(this, this[i], i, e, !0)) && (delete this[i], (n = !0));
          }
          return n;
        }
        normalize(e) {
          let t = this,
            r = {};
          return (
            V.forEach(this, (n, i) => {
              let s = V.findKey(r, i);
              if (s) {
                (t[s] = eR(n)), delete t[i];
                return;
              }
              let a = e
                ? i
                    .trim()
                    .toLowerCase()
                    .replace(
                      /([a-z\d])(\w*)/g,
                      (e, t, r) => t.toUpperCase() + r
                    )
                : String(i).trim();
              a !== i && delete t[i], (t[a] = eR(n)), (r[a] = !0);
            }),
            this
          );
        }
        concat(...e) {
          return this.constructor.concat(this, ...e);
        }
        toJSON(e) {
          let t = Object.create(null);
          return (
            V.forEach(this, (r, n) => {
              null != r &&
                !1 !== r &&
                (t[n] = e && V.isArray(r) ? r.join(", ") : r);
            }),
            t
          );
        }
        [Symbol.iterator]() {
          return Object.entries(this.toJSON())[Symbol.iterator]();
        }
        toString() {
          return Object.entries(this.toJSON())
            .map(([e, t]) => e + ": " + t)
            .join("\n");
        }
        getSetCookie() {
          return this.get("set-cookie") || [];
        }
        get [Symbol.toStringTag]() {
          return "AxiosHeaders";
        }
        static from(e) {
          return e instanceof this ? e : new this(e);
        }
        static concat(e, ...t) {
          let r = new this(e);
          return t.forEach((e) => r.set(e)), r;
        }
        static accessor(e) {
          let t = (this[ex] = this[ex] = { accessors: {} }).accessors,
            r = this.prototype;
          function n(e) {
            let n = eE(e);
            if (!t[n]) {
              let i = V.toCamelCase(" " + e);
              ["get", "set", "has"].forEach((t) => {
                Object.defineProperty(r, t + i, {
                  value: function (r, n, i) {
                    return this[t].call(this, e, r, n, i);
                  },
                  configurable: !0,
                });
              }),
                (t[n] = !0);
            }
          }
          return V.isArray(e) ? e.forEach(n) : n(e), this;
        }
      }
      function eO(e, t) {
        let r = this || ev,
          n = t || r,
          i = eP.from(n.headers),
          s = n.data;
        return (
          V.forEach(e, function (e) {
            s = e.call(r, s, i.normalize(), t ? t.status : void 0);
          }),
          i.normalize(),
          s
        );
      }
      function eI(e) {
        return !!(e && e.__CANCEL__);
      }
      function ek(e, t, r) {
        J.call(this, null == e ? "canceled" : e, J.ERR_CANCELED, t, r),
          (this.name = "CanceledError");
      }
      function eN(e, t, r) {
        let n = r.config.validateStatus;
        !r.status || !n || n(r.status)
          ? e(r)
          : t(
              new J(
                "Request failed with status code " + r.status,
                [J.ERR_BAD_REQUEST, J.ERR_BAD_RESPONSE][
                  Math.floor(r.status / 100) - 4
                ],
                r.config,
                r.request,
                r
              )
            );
      }
      eP.accessor([
        "Content-Type",
        "Content-Length",
        "Accept",
        "Accept-Encoding",
        "User-Agent",
        "Authorization",
      ]),
        V.reduceDescriptors(eP.prototype, ({ value: e }, t) => {
          let r = t[0].toUpperCase() + t.slice(1);
          return {
            get: () => e,
            set(e) {
              this[r] = e;
            },
          };
        }),
        V.freezeMethods(eP),
        V.inherits(ek, J, { __CANCEL__: !0 });
      let eC = function (e, t) {
          let r,
            n = Array((e = e || 10)),
            i = Array(e),
            s = 0,
            a = 0;
          return (
            (t = void 0 !== t ? t : 1e3),
            function (o) {
              let l = Date.now(),
                u = i[a];
              r || (r = l), (n[s] = o), (i[s] = l);
              let f = a,
                c = 0;
              for (; f !== s; ) (c += n[f++]), (f %= e);
              if (((s = (s + 1) % e) === a && (a = (a + 1) % e), l - r < t))
                return;
              let d = u && l - u;
              return d ? Math.round((1e3 * c) / d) : void 0;
            }
          );
        },
        eB = function (e, t) {
          let r,
            n,
            i = 0,
            s = 1e3 / t,
            a = (t, s = Date.now()) => {
              (i = s),
                (r = null),
                n && (clearTimeout(n), (n = null)),
                e.apply(null, t);
            };
          return [
            (...e) => {
              let t = Date.now(),
                o = t - i;
              o >= s
                ? a(e, t)
                : ((r = e),
                  n ||
                    (n = setTimeout(() => {
                      (n = null), a(r);
                    }, s - o)));
            },
            () => r && a(r),
          ];
        },
        eT = (e, t, r = 3) => {
          let n = 0,
            i = eC(50, 250);
          return eB((r) => {
            let s = r.loaded,
              a = r.lengthComputable ? r.total : void 0,
              o = s - n,
              l = i(o);
            (n = s),
              e({
                loaded: s,
                total: a,
                progress: a ? s / a : void 0,
                bytes: o,
                rate: l || void 0,
                estimated: l && a && s <= a ? (a - s) / l : void 0,
                event: r,
                lengthComputable: null != a,
                [t ? "download" : "upload"]: !0,
              });
          }, r);
        },
        eL = (e, t) => {
          let r = null != e;
          return [
            (n) => t[0]({ lengthComputable: r, total: e, loaded: n }),
            t[1],
          ];
        },
        eU =
          (e) =>
          (...t) =>
            V.asap(() => e(...t)),
        eF = em.hasStandardBrowserEnv
          ? ((e, t) => (r) => (
              (r = new URL(r, em.origin)),
              e.protocol === r.protocol &&
                e.host === r.host &&
                (t || e.port === r.port)
            ))(
              new URL(em.origin),
              em.navigator && /(msie|trident)/i.test(em.navigator.userAgent)
            )
          : () => !0,
        e_ = em.hasStandardBrowserEnv
          ? {
              write(e, t, r, n, i, s) {
                let a = [e + "=" + encodeURIComponent(t)];
                V.isNumber(r) && a.push("expires=" + new Date(r).toGMTString()),
                  V.isString(n) && a.push("path=" + n),
                  V.isString(i) && a.push("domain=" + i),
                  !0 === s && a.push("secure"),
                  (document.cookie = a.join("; "));
              },
              read(e) {
                let t = document.cookie.match(
                  RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
                );
                return t ? decodeURIComponent(t[3]) : null;
              },
              remove(e) {
                this.write(e, "", Date.now() - 864e5);
              },
            }
          : { write() {}, read: () => null, remove() {} };
      function eD(e, t, r) {
        let n = !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
        return e && (n || !1 == r)
          ? t
            ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "")
            : e
          : t;
      }
      let ej = (e) => (e instanceof eP ? { ...e } : e);
      function ez(e, t) {
        t = t || {};
        let r = {};
        function n(e, t, r, n) {
          return V.isPlainObject(e) && V.isPlainObject(t)
            ? V.merge.call({ caseless: n }, e, t)
            : V.isPlainObject(t)
            ? V.merge({}, t)
            : V.isArray(t)
            ? t.slice()
            : t;
        }
        function i(e, t, r, i) {
          return V.isUndefined(t)
            ? V.isUndefined(e)
              ? void 0
              : n(void 0, e, r, i)
            : n(e, t, r, i);
        }
        function s(e, t) {
          if (!V.isUndefined(t)) return n(void 0, t);
        }
        function a(e, t) {
          return V.isUndefined(t)
            ? V.isUndefined(e)
              ? void 0
              : n(void 0, e)
            : n(void 0, t);
        }
        function o(r, i, s) {
          return s in t ? n(r, i) : s in e ? n(void 0, r) : void 0;
        }
        let l = {
          url: s,
          method: s,
          data: s,
          baseURL: a,
          transformRequest: a,
          transformResponse: a,
          paramsSerializer: a,
          timeout: a,
          timeoutMessage: a,
          withCredentials: a,
          withXSRFToken: a,
          adapter: a,
          responseType: a,
          xsrfCookieName: a,
          xsrfHeaderName: a,
          onUploadProgress: a,
          onDownloadProgress: a,
          decompress: a,
          maxContentLength: a,
          maxBodyLength: a,
          beforeRedirect: a,
          transport: a,
          httpAgent: a,
          httpsAgent: a,
          cancelToken: a,
          socketPath: a,
          responseEncoding: a,
          validateStatus: o,
          headers: (e, t, r) => i(ej(e), ej(t), r, !0),
        };
        return (
          V.forEach(Object.keys(Object.assign({}, e, t)), function (n) {
            let s = l[n] || i,
              a = s(e[n], t[n], n);
            (V.isUndefined(a) && s !== o) || (r[n] = a);
          }),
          r
        );
      }
      let eG = (e) => {
          let t,
            r = ez({}, e),
            {
              data: n,
              withXSRFToken: i,
              xsrfHeaderName: s,
              xsrfCookieName: a,
              headers: o,
              auth: l,
            } = r;
          if (
            ((r.headers = o = eP.from(o)),
            (r.url = ea(
              eD(r.baseURL, r.url, r.allowAbsoluteUrls),
              e.params,
              e.paramsSerializer
            )),
            l &&
              o.set(
                "Authorization",
                "Basic " +
                  btoa(
                    (l.username || "") +
                      ":" +
                      (l.password
                        ? unescape(encodeURIComponent(l.password))
                        : "")
                  )
              ),
            V.isFormData(n))
          ) {
            if (em.hasStandardBrowserEnv || em.hasStandardBrowserWebWorkerEnv)
              o.setContentType(void 0);
            else if (!1 !== (t = o.getContentType())) {
              let [e, ...r] = t
                ? t
                    .split(";")
                    .map((e) => e.trim())
                    .filter(Boolean)
                : [];
              o.setContentType([e || "multipart/form-data", ...r].join("; "));
            }
          }
          if (
            em.hasStandardBrowserEnv &&
            (i && V.isFunction(i) && (i = i(r)), i || (!1 !== i && eF(r.url)))
          ) {
            let e = s && a && e_.read(a);
            e && o.set(s, e);
          }
          return r;
        },
        eq =
          "undefined" != typeof XMLHttpRequest &&
          function (e) {
            return new Promise(function (t, r) {
              let n,
                i,
                s,
                a,
                o,
                l = eG(e),
                u = l.data,
                f = eP.from(l.headers).normalize(),
                {
                  responseType: c,
                  onUploadProgress: d,
                  onDownloadProgress: h,
                } = l;
              function p() {
                a && a(),
                  o && o(),
                  l.cancelToken && l.cancelToken.unsubscribe(n),
                  l.signal && l.signal.removeEventListener("abort", n);
              }
              let b = new XMLHttpRequest();
              function g() {
                if (!b) return;
                let n = eP.from(
                  "getAllResponseHeaders" in b && b.getAllResponseHeaders()
                );
                eN(
                  function (e) {
                    t(e), p();
                  },
                  function (e) {
                    r(e), p();
                  },
                  {
                    data:
                      c && "text" !== c && "json" !== c
                        ? b.response
                        : b.responseText,
                    status: b.status,
                    statusText: b.statusText,
                    headers: n,
                    config: e,
                    request: b,
                  }
                ),
                  (b = null);
              }
              b.open(l.method.toUpperCase(), l.url, !0),
                (b.timeout = l.timeout),
                "onloadend" in b
                  ? (b.onloadend = g)
                  : (b.onreadystatechange = function () {
                      b &&
                        4 === b.readyState &&
                        (0 !== b.status ||
                          (b.responseURL &&
                            0 === b.responseURL.indexOf("file:"))) &&
                        setTimeout(g);
                    }),
                (b.onabort = function () {
                  b &&
                    (r(new J("Request aborted", J.ECONNABORTED, e, b)),
                    (b = null));
                }),
                (b.onerror = function () {
                  r(new J("Network Error", J.ERR_NETWORK, e, b)), (b = null);
                }),
                (b.ontimeout = function () {
                  let t = l.timeout
                      ? "timeout of " + l.timeout + "ms exceeded"
                      : "timeout exceeded",
                    n = l.transitional || el;
                  l.timeoutErrorMessage && (t = l.timeoutErrorMessage),
                    r(
                      new J(
                        t,
                        n.clarifyTimeoutError ? J.ETIMEDOUT : J.ECONNABORTED,
                        e,
                        b
                      )
                    ),
                    (b = null);
                }),
                void 0 === u && f.setContentType(null),
                "setRequestHeader" in b &&
                  V.forEach(f.toJSON(), function (e, t) {
                    b.setRequestHeader(t, e);
                  }),
                V.isUndefined(l.withCredentials) ||
                  (b.withCredentials = !!l.withCredentials),
                c && "json" !== c && (b.responseType = l.responseType),
                h && (([s, o] = eT(h, !0)), b.addEventListener("progress", s)),
                d &&
                  b.upload &&
                  (([i, a] = eT(d)),
                  b.upload.addEventListener("progress", i),
                  b.upload.addEventListener("loadend", a)),
                (l.cancelToken || l.signal) &&
                  ((n = (t) => {
                    b &&
                      (r(!t || t.type ? new ek(null, e, b) : t),
                      b.abort(),
                      (b = null));
                  }),
                  l.cancelToken && l.cancelToken.subscribe(n),
                  l.signal &&
                    (l.signal.aborted
                      ? n()
                      : l.signal.addEventListener("abort", n)));
              let m = (function (e) {
                let t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
                return (t && t[1]) || "";
              })(l.url);
              if (m && -1 === em.protocols.indexOf(m))
                return void r(
                  new J("Unsupported protocol " + m + ":", J.ERR_BAD_REQUEST, e)
                );
              b.send(u || null);
            });
          },
        eQ = (e, t) => {
          let { length: r } = (e = e ? e.filter(Boolean) : []);
          if (t || r) {
            let r,
              n = new AbortController(),
              i = function (e) {
                if (!r) {
                  (r = !0), a();
                  let t = e instanceof Error ? e : this.reason;
                  n.abort(
                    t instanceof J
                      ? t
                      : new ek(t instanceof Error ? t.message : t)
                  );
                }
              },
              s =
                t &&
                setTimeout(() => {
                  (s = null),
                    i(new J(`timeout ${t} of ms exceeded`, J.ETIMEDOUT));
                }, t),
              a = () => {
                e &&
                  (s && clearTimeout(s),
                  (s = null),
                  e.forEach((e) => {
                    e.unsubscribe
                      ? e.unsubscribe(i)
                      : e.removeEventListener("abort", i);
                  }),
                  (e = null));
              };
            e.forEach((e) => e.addEventListener("abort", i));
            let { signal: o } = n;
            return (o.unsubscribe = () => V.asap(a)), o;
          }
        },
        eH = function* (e, t) {
          let r,
            n = e.byteLength;
          if (!t || n < t) return void (yield e);
          let i = 0;
          for (; i < n; ) (r = i + t), yield e.slice(i, r), (i = r);
        },
        eV = async function* (e, t) {
          for await (let r of eJ(e)) yield* eH(r, t);
        },
        eJ = async function* (e) {
          if (e[Symbol.asyncIterator]) return void (yield* e);
          let t = e.getReader();
          try {
            for (;;) {
              let { done: e, value: r } = await t.read();
              if (e) break;
              yield r;
            }
          } finally {
            await t.cancel();
          }
        },
        eK = (e, t, r, n) => {
          let i,
            s = eV(e, t),
            a = 0,
            o = (e) => {
              !i && ((i = !0), n && n(e));
            };
          return new ReadableStream(
            {
              async pull(e) {
                try {
                  let { done: t, value: n } = await s.next();
                  if (t) {
                    o(), e.close();
                    return;
                  }
                  let i = n.byteLength;
                  if (r) {
                    let e = (a += i);
                    r(e);
                  }
                  e.enqueue(new Uint8Array(n));
                } catch (e) {
                  throw (o(e), e);
                }
              },
              cancel: (e) => (o(e), s.return()),
            },
            { highWaterMark: 2 }
          );
        },
        eW =
          "function" == typeof fetch &&
          "function" == typeof Request &&
          "function" == typeof Response,
        eZ = eW && "function" == typeof ReadableStream,
        eY =
          eW &&
          ("function" == typeof TextEncoder
            ? ((n = new TextEncoder()), (e) => n.encode(e))
            : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
        eX = (e, ...t) => {
          try {
            return !!e(...t);
          } catch (e) {
            return !1;
          }
        },
        e$ =
          eZ &&
          eX(() => {
            let e = !1,
              t = new Request(em.origin, {
                body: new ReadableStream(),
                method: "POST",
                get duplex() {
                  return (e = !0), "half";
                },
              }).headers.has("Content-Type");
            return e && !t;
          }),
        e0 = eZ && eX(() => V.isReadableStream(new Response("").body)),
        e1 = { stream: e0 && ((e) => e.body) };
      eW &&
        ((a = new Response()),
        ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
          e1[e] ||
            (e1[e] = V.isFunction(a[e])
              ? (t) => t[e]()
              : (t, r) => {
                  throw new J(
                    `Response type '${e}' is not supported`,
                    J.ERR_NOT_SUPPORT,
                    r
                  );
                });
        }));
      let e2 = async (e) => {
          if (null == e) return 0;
          if (V.isBlob(e)) return e.size;
          if (V.isSpecCompliantForm(e)) {
            let t = new Request(em.origin, { method: "POST", body: e });
            return (await t.arrayBuffer()).byteLength;
          }
          return V.isArrayBufferView(e) || V.isArrayBuffer(e)
            ? e.byteLength
            : (V.isURLSearchParams(e) && (e += ""), V.isString(e))
            ? (await eY(e)).byteLength
            : void 0;
        },
        e3 = async (e, t) => {
          let r = V.toFiniteNumber(e.getContentLength());
          return null == r ? e2(t) : r;
        },
        e4 = {
          http: null,
          xhr: eq,
          fetch:
            eW &&
            (async (e) => {
              let t,
                r,
                {
                  url: n,
                  method: i,
                  data: s,
                  signal: a,
                  cancelToken: o,
                  timeout: l,
                  onDownloadProgress: u,
                  onUploadProgress: f,
                  responseType: c,
                  headers: d,
                  withCredentials: h = "same-origin",
                  fetchOptions: p,
                } = eG(e);
              c = c ? (c + "").toLowerCase() : "text";
              let b = eQ([a, o && o.toAbortSignal()], l),
                g =
                  b &&
                  b.unsubscribe &&
                  (() => {
                    b.unsubscribe();
                  });
              try {
                if (
                  f &&
                  e$ &&
                  "get" !== i &&
                  "head" !== i &&
                  0 !== (r = await e3(d, s))
                ) {
                  let e,
                    t = new Request(n, {
                      method: "POST",
                      body: s,
                      duplex: "half",
                    });
                  if (
                    (V.isFormData(s) &&
                      (e = t.headers.get("content-type")) &&
                      d.setContentType(e),
                    t.body)
                  ) {
                    let [e, n] = eL(r, eT(eU(f)));
                    s = eK(t.body, 65536, e, n);
                  }
                }
                V.isString(h) || (h = h ? "include" : "omit");
                let a = "credentials" in Request.prototype;
                t = new Request(n, {
                  ...p,
                  signal: b,
                  method: i.toUpperCase(),
                  headers: d.normalize().toJSON(),
                  body: s,
                  duplex: "half",
                  credentials: a ? h : void 0,
                });
                let o = await fetch(t),
                  l = e0 && ("stream" === c || "response" === c);
                if (e0 && (u || (l && g))) {
                  let e = {};
                  ["status", "statusText", "headers"].forEach((t) => {
                    e[t] = o[t];
                  });
                  let t = V.toFiniteNumber(o.headers.get("content-length")),
                    [r, n] = (u && eL(t, eT(eU(u), !0))) || [];
                  o = new Response(
                    eK(o.body, 65536, r, () => {
                      n && n(), g && g();
                    }),
                    e
                  );
                }
                c = c || "text";
                let m = await e1[V.findKey(e1, c) || "text"](o, e);
                return (
                  !l && g && g(),
                  await new Promise((r, n) => {
                    eN(r, n, {
                      data: m,
                      headers: eP.from(o.headers),
                      status: o.status,
                      statusText: o.statusText,
                      config: e,
                      request: t,
                    });
                  })
                );
              } catch (r) {
                if (
                  (g && g(),
                  r &&
                    "TypeError" === r.name &&
                    /Load failed|fetch/i.test(r.message))
                )
                  throw Object.assign(
                    new J("Network Error", J.ERR_NETWORK, e, t),
                    { cause: r.cause || r }
                  );
                throw J.from(r, r && r.code, e, t);
              }
            }),
        };
      V.forEach(e4, (e, t) => {
        if (e) {
          try {
            Object.defineProperty(e, "name", { value: t });
          } catch (e) {}
          Object.defineProperty(e, "adapterName", { value: t });
        }
      });
      let e6 = (e) => `- ${e}`,
        e8 = (e) => V.isFunction(e) || null === e || !1 === e,
        e5 = {
          getAdapter: (e) => {
            let t,
              r,
              { length: n } = (e = V.isArray(e) ? e : [e]),
              i = {};
            for (let s = 0; s < n; s++) {
              let n;
              if (
                ((r = t = e[s]),
                !e8(t) && void 0 === (r = e4[(n = String(t)).toLowerCase()]))
              )
                throw new J(`Unknown adapter '${n}'`);
              if (r) break;
              i[n || "#" + s] = r;
            }
            if (!r) {
              let e = Object.entries(i).map(
                ([e, t]) =>
                  `adapter ${e} ` +
                  (!1 === t
                    ? "is not supported by the environment"
                    : "is not available in the build")
              );
              throw new J(
                "There is no suitable adapter to dispatch the request " +
                  (n
                    ? e.length > 1
                      ? "since :\n" + e.map(e6).join("\n")
                      : " " + e6(e[0])
                    : "as no adapter specified"),
                "ERR_NOT_SUPPORT"
              );
            }
            return r;
          },
        };
      function e9(e) {
        if (
          (e.cancelToken && e.cancelToken.throwIfRequested(),
          e.signal && e.signal.aborted)
        )
          throw new ek(null, e);
      }
      function e7(e) {
        return (
          e9(e),
          (e.headers = eP.from(e.headers)),
          (e.data = eO.call(e, e.transformRequest)),
          -1 !== ["post", "put", "patch"].indexOf(e.method) &&
            e.headers.setContentType("application/x-www-form-urlencoded", !1),
          e5
            .getAdapter(e.adapter || ev.adapter)(e)
            .then(
              function (t) {
                return (
                  e9(e),
                  (t.data = eO.call(e, e.transformResponse, t)),
                  (t.headers = eP.from(t.headers)),
                  t
                );
              },
              function (t) {
                return (
                  !eI(t) &&
                    (e9(e),
                    t &&
                      t.response &&
                      ((t.response.data = eO.call(
                        e,
                        e.transformResponse,
                        t.response
                      )),
                      (t.response.headers = eP.from(t.response.headers)))),
                  Promise.reject(t)
                );
              }
            )
        );
      }
      let te = "1.9.0",
        tt = {};
      ["object", "boolean", "number", "function", "string", "symbol"].forEach(
        (e, t) => {
          tt[e] = function (r) {
            return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
          };
        }
      );
      let tr = {};
      (tt.transitional = function (e, t, r) {
        function n(e, t) {
          return (
            "[Axios v" +
            te +
            "] Transitional option '" +
            e +
            "'" +
            t +
            (r ? ". " + r : "")
          );
        }
        return (r, i, s) => {
          if (!1 === e)
            throw new J(
              n(i, " has been removed" + (t ? " in " + t : "")),
              J.ERR_DEPRECATED
            );
          return (
            t &&
              !tr[i] &&
              ((tr[i] = !0),
              console.warn(
                n(
                  i,
                  " has been deprecated since v" +
                    t +
                    " and will be removed in the near future"
                )
              )),
            !e || e(r, i, s)
          );
        };
      }),
        (tt.spelling = function (e) {
          return (t, r) => (
            console.warn(`${r} is likely a misspelling of ${e}`), !0
          );
        });
      let tn = {
          assertOptions: function (e, t, r) {
            if ("object" != typeof e)
              throw new J("options must be an object", J.ERR_BAD_OPTION_VALUE);
            let n = Object.keys(e),
              i = n.length;
            for (; i-- > 0; ) {
              let s = n[i],
                a = t[s];
              if (a) {
                let t = e[s],
                  r = void 0 === t || a(t, s, e);
                if (!0 !== r)
                  throw new J(
                    "option " + s + " must be " + r,
                    J.ERR_BAD_OPTION_VALUE
                  );
                continue;
              }
              if (!0 !== r)
                throw new J("Unknown option " + s, J.ERR_BAD_OPTION);
            }
          },
          validators: tt,
        },
        ti = tn.validators;
      class ts {
        constructor(e) {
          (this.defaults = e || {}),
            (this.interceptors = { request: new eo(), response: new eo() });
        }
        async request(e, t) {
          try {
            return await this._request(e, t);
          } catch (e) {
            if (e instanceof Error) {
              let t = {};
              Error.captureStackTrace
                ? Error.captureStackTrace(t)
                : (t = Error());
              let r = t.stack ? t.stack.replace(/^.+\n/, "") : "";
              try {
                e.stack
                  ? r &&
                    !String(e.stack).endsWith(r.replace(/^.+\n.+\n/, "")) &&
                    (e.stack += "\n" + r)
                  : (e.stack = r);
              } catch (e) {}
            }
            throw e;
          }
        }
        _request(e, t) {
          let r, n;
          "string" == typeof e ? ((t = t || {}).url = e) : (t = e || {});
          let {
            transitional: i,
            paramsSerializer: s,
            headers: a,
          } = (t = ez(this.defaults, t));
          void 0 !== i &&
            tn.assertOptions(
              i,
              {
                silentJSONParsing: ti.transitional(ti.boolean),
                forcedJSONParsing: ti.transitional(ti.boolean),
                clarifyTimeoutError: ti.transitional(ti.boolean),
              },
              !1
            ),
            null != s &&
              (V.isFunction(s)
                ? (t.paramsSerializer = { serialize: s })
                : tn.assertOptions(
                    s,
                    { encode: ti.function, serialize: ti.function },
                    !0
                  )),
            void 0 !== t.allowAbsoluteUrls ||
              (void 0 !== this.defaults.allowAbsoluteUrls
                ? (t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
                : (t.allowAbsoluteUrls = !0)),
            tn.assertOptions(
              t,
              {
                baseUrl: ti.spelling("baseURL"),
                withXsrfToken: ti.spelling("withXSRFToken"),
              },
              !0
            ),
            (t.method = (
              t.method ||
              this.defaults.method ||
              "get"
            ).toLowerCase());
          let o = a && V.merge(a.common, a[t.method]);
          a &&
            V.forEach(
              ["delete", "get", "head", "post", "put", "patch", "common"],
              (e) => {
                delete a[e];
              }
            ),
            (t.headers = eP.concat(o, a));
          let l = [],
            u = !0;
          this.interceptors.request.forEach(function (e) {
            ("function" != typeof e.runWhen || !1 !== e.runWhen(t)) &&
              ((u = u && e.synchronous), l.unshift(e.fulfilled, e.rejected));
          });
          let f = [];
          this.interceptors.response.forEach(function (e) {
            f.push(e.fulfilled, e.rejected);
          });
          let c = 0;
          if (!u) {
            let e = [e7.bind(this), void 0];
            for (
              e.unshift.apply(e, l),
                e.push.apply(e, f),
                n = e.length,
                r = Promise.resolve(t);
              c < n;

            )
              r = r.then(e[c++], e[c++]);
            return r;
          }
          n = l.length;
          let d = t;
          for (c = 0; c < n; ) {
            let e = l[c++],
              t = l[c++];
            try {
              d = e(d);
            } catch (e) {
              t.call(this, e);
              break;
            }
          }
          try {
            r = e7.call(this, d);
          } catch (e) {
            return Promise.reject(e);
          }
          for (c = 0, n = f.length; c < n; ) r = r.then(f[c++], f[c++]);
          return r;
        }
        getUri(e) {
          return ea(
            eD((e = ez(this.defaults, e)).baseURL, e.url, e.allowAbsoluteUrls),
            e.params,
            e.paramsSerializer
          );
        }
      }
      V.forEach(["delete", "get", "head", "options"], function (e) {
        ts.prototype[e] = function (t, r) {
          return this.request(
            ez(r || {}, { method: e, url: t, data: (r || {}).data })
          );
        };
      }),
        V.forEach(["post", "put", "patch"], function (e) {
          function t(t) {
            return function (r, n, i) {
              return this.request(
                ez(i || {}, {
                  method: e,
                  headers: t ? { "Content-Type": "multipart/form-data" } : {},
                  url: r,
                  data: n,
                })
              );
            };
          }
          (ts.prototype[e] = t()), (ts.prototype[e + "Form"] = t(!0));
        });
      class ta {
        constructor(e) {
          let t;
          if ("function" != typeof e)
            throw TypeError("executor must be a function.");
          this.promise = new Promise(function (e) {
            t = e;
          });
          let r = this;
          this.promise.then((e) => {
            if (!r._listeners) return;
            let t = r._listeners.length;
            for (; t-- > 0; ) r._listeners[t](e);
            r._listeners = null;
          }),
            (this.promise.then = (e) => {
              let t,
                n = new Promise((e) => {
                  r.subscribe(e), (t = e);
                }).then(e);
              return (
                (n.cancel = function () {
                  r.unsubscribe(t);
                }),
                n
              );
            }),
            e(function (e, n, i) {
              r.reason || ((r.reason = new ek(e, n, i)), t(r.reason));
            });
        }
        throwIfRequested() {
          if (this.reason) throw this.reason;
        }
        subscribe(e) {
          if (this.reason) return void e(this.reason);
          this._listeners ? this._listeners.push(e) : (this._listeners = [e]);
        }
        unsubscribe(e) {
          if (!this._listeners) return;
          let t = this._listeners.indexOf(e);
          -1 !== t && this._listeners.splice(t, 1);
        }
        toAbortSignal() {
          let e = new AbortController(),
            t = (t) => {
              e.abort(t);
            };
          return (
            this.subscribe(t),
            (e.signal.unsubscribe = () => this.unsubscribe(t)),
            e.signal
          );
        }
        static source() {
          let e;
          return {
            token: new ta(function (t) {
              e = t;
            }),
            cancel: e,
          };
        }
      }
      let to = {
        Continue: 100,
        SwitchingProtocols: 101,
        Processing: 102,
        EarlyHints: 103,
        Ok: 200,
        Created: 201,
        Accepted: 202,
        NonAuthoritativeInformation: 203,
        NoContent: 204,
        ResetContent: 205,
        PartialContent: 206,
        MultiStatus: 207,
        AlreadyReported: 208,
        ImUsed: 226,
        MultipleChoices: 300,
        MovedPermanently: 301,
        Found: 302,
        SeeOther: 303,
        NotModified: 304,
        UseProxy: 305,
        Unused: 306,
        TemporaryRedirect: 307,
        PermanentRedirect: 308,
        BadRequest: 400,
        Unauthorized: 401,
        PaymentRequired: 402,
        Forbidden: 403,
        NotFound: 404,
        MethodNotAllowed: 405,
        NotAcceptable: 406,
        ProxyAuthenticationRequired: 407,
        RequestTimeout: 408,
        Conflict: 409,
        Gone: 410,
        LengthRequired: 411,
        PreconditionFailed: 412,
        PayloadTooLarge: 413,
        UriTooLong: 414,
        UnsupportedMediaType: 415,
        RangeNotSatisfiable: 416,
        ExpectationFailed: 417,
        ImATeapot: 418,
        MisdirectedRequest: 421,
        UnprocessableEntity: 422,
        Locked: 423,
        FailedDependency: 424,
        TooEarly: 425,
        UpgradeRequired: 426,
        PreconditionRequired: 428,
        TooManyRequests: 429,
        RequestHeaderFieldsTooLarge: 431,
        UnavailableForLegalReasons: 451,
        InternalServerError: 500,
        NotImplemented: 501,
        BadGateway: 502,
        ServiceUnavailable: 503,
        GatewayTimeout: 504,
        HttpVersionNotSupported: 505,
        VariantAlsoNegotiates: 506,
        InsufficientStorage: 507,
        LoopDetected: 508,
        NotExtended: 510,
        NetworkAuthenticationRequired: 511,
      };
      Object.entries(to).forEach(([e, t]) => {
        to[t] = e;
      });
      let tl = (function e(t) {
        let r = new ts(t),
          n = l(ts.prototype.request, r);
        return (
          V.extend(n, ts.prototype, r, { allOwnKeys: !0 }),
          V.extend(n, r, null, { allOwnKeys: !0 }),
          (n.create = function (r) {
            return e(ez(t, r));
          }),
          n
        );
      })(ev);
      (tl.Axios = ts),
        (tl.CanceledError = ek),
        (tl.CancelToken = ta),
        (tl.isCancel = eI),
        (tl.VERSION = te),
        (tl.toFormData = et),
        (tl.AxiosError = J),
        (tl.Cancel = tl.CanceledError),
        (tl.all = function (e) {
          return Promise.all(e);
        }),
        (tl.spread = function (e) {
          return function (t) {
            return e.apply(null, t);
          };
        }),
        (tl.isAxiosError = function (e) {
          return V.isObject(e) && !0 === e.isAxiosError;
        }),
        (tl.mergeConfig = ez),
        (tl.AxiosHeaders = eP),
        (tl.formToJSON = (e) => ey(V.isHTMLForm(e) ? new FormData(e) : e)),
        (tl.getAdapter = e5.getAdapter),
        (tl.HttpStatusCode = to),
        (tl.default = tl);
      let tu = tl;
    },
    25062: (e, t, r) => {
      "use strict";
      r.d(t, { $C: () => s, tG: () => o });
      var n = r(29592),
        i = r(62037);
      function s(e) {
        return e && "function" == typeof e.getAddress;
      }
      async function a(e, t) {
        let r = await t;
        return (
          (null == r || "0x0000000000000000000000000000000000000000" === r) &&
            ((0, n.vA)(
              "string" != typeof e,
              "unconfigured name",
              "UNCONFIGURED_NAME",
              { value: e }
            ),
            (0, n.MR)(
              !1,
              "invalid AddressLike value; did not resolve to a value address",
              "target",
              e
            )),
          (0, i.b)(r)
        );
      }
      function o(e, t) {
        return "string" == typeof e
          ? e.match(/^0x[0-9a-f]{40}$/i)
            ? (0, i.b)(e)
            : ((0, n.vA)(
                null != t,
                "ENS resolution requires a provider",
                "UNSUPPORTED_OPERATION",
                { operation: "resolveName" }
              ),
              a(e, t.resolveName(e)))
          : s(e)
          ? a(e, e.getAddress())
          : e && "function" == typeof e.then
          ? a(e, e)
          : void (0, n.MR)(!1, "unsupported addressable value", "target", e);
      }
    },
    26872: (e, t, r) => {
      "use strict";
      r.d(t, { NZ: () => z });
      var n = r(41755),
        i = r(73888),
        s = r(25062),
        a = r(84308),
        o = r(50797),
        l = r(29592),
        u = r(91339),
        f = r(44532),
        c = r(77813);
      class d extends a.tG {
        interface;
        fragment;
        args;
        constructor(e, t, r) {
          super(e, e.provider);
          let n = t.decodeEventLog(r, e.data, e.topics);
          (0, o.n)(this, { args: n, fragment: r, interface: t });
        }
        get eventName() {
          return this.fragment.name;
        }
        get eventSignature() {
          return this.fragment.format();
        }
      }
      class h extends a.tG {
        error;
        constructor(e, t) {
          super(e, e.provider), (0, o.n)(this, { error: t });
        }
      }
      class p extends a.z5 {
        #S;
        constructor(e, t, r) {
          super(r, t), (this.#S = e);
        }
        get logs() {
          return super.logs.map((e) => {
            let t = e.topics.length ? this.#S.getEvent(e.topics[0]) : null;
            if (t)
              try {
                return new d(e, this.#S, t);
              } catch (t) {
                return new h(e, t);
              }
            return e;
          });
        }
      }
      class b extends a.uI {
        #S;
        constructor(e, t, r) {
          super(r, t), (this.#S = e);
        }
        async wait(e, t) {
          let r = await super.wait(e, t);
          return null == r ? null : new p(this.#S, this.provider, r);
        }
      }
      class g extends c.z {
        log;
        constructor(e, t, r, n) {
          super(e, t, r), (0, o.n)(this, { log: n });
        }
        async getBlock() {
          return await this.log.getBlock();
        }
        async getTransaction() {
          return await this.log.getTransaction();
        }
        async getTransactionReceipt() {
          return await this.log.getTransactionReceipt();
        }
      }
      class m extends g {
        constructor(e, t, r, n, i) {
          super(e, t, r, new d(i, e.interface, n));
          let s = e.interface.decodeEventLog(n, this.log.data, this.log.topics);
          (0, o.n)(this, { args: s, fragment: n });
        }
        get eventName() {
          return this.fragment.name;
        }
        get eventSignature() {
          return this.fragment.format();
        }
      }
      let y = BigInt(0);
      function v(e) {
        return e && "function" == typeof e.call;
      }
      function w(e) {
        return e && "function" == typeof e.estimateGas;
      }
      function A(e) {
        return e && "function" == typeof e.resolveName;
      }
      function x(e) {
        return e && "function" == typeof e.sendTransaction;
      }
      function E(e) {
        if (null != e) {
          if (A(e)) return e;
          if (e.provider) return e.provider;
        }
      }
      class R {
        #P;
        fragment;
        constructor(e, t, r) {
          if (((0, o.n)(this, { fragment: t }), t.inputs.length < r.length))
            throw Error("too many arguments");
          let n = M(e.runner, "resolveName"),
            i = A(n) ? n : null;
          this.#P = (async function () {
            let n = await Promise.all(
              t.inputs.map((e, t) =>
                null == r[t]
                  ? null
                  : e.walkAsync(r[t], (e, t) =>
                      "address" === e
                        ? Array.isArray(t)
                          ? Promise.all(t.map((e) => (0, s.tG)(e, i)))
                          : (0, s.tG)(t, i)
                        : t
                    )
              )
            );
            return e.interface.encodeFilterTopics(t, n);
          })();
        }
        getTopicFilter() {
          return this.#P;
        }
      }
      function M(e, t) {
        return null == e
          ? null
          : "function" == typeof e[t]
          ? e
          : e.provider && "function" == typeof e.provider[t]
          ? e.provider
          : null;
      }
      function S(e) {
        return null == e ? null : e.provider || null;
      }
      async function P(e, t) {
        let r = n.V.dereference(e, "overrides");
        (0, l.MR)(
          "object" == typeof r,
          "invalid overrides parameter",
          "overrides",
          e
        );
        let i = (0, a.VS)(r);
        return (
          (0, l.MR)(
            null == i.to || (t || []).indexOf("to") >= 0,
            "cannot override to",
            "overrides.to",
            i.to
          ),
          (0, l.MR)(
            null == i.data || (t || []).indexOf("data") >= 0,
            "cannot override data",
            "overrides.data",
            i.data
          ),
          i.from && (i.from = i.from),
          i
        );
      }
      async function O(e, t, r) {
        let i = M(e, "resolveName"),
          a = A(i) ? i : null;
        return await Promise.all(
          t.map((e, t) =>
            e.walkAsync(r[t], (e, t) =>
              ((t = n.V.dereference(t, e)), "address" === e)
                ? (0, s.tG)(t, a)
                : t
            )
          )
        );
      }
      let I = Symbol.for("_ethersInternal_contract"),
        k = new WeakMap();
      function N(e) {
        return k.get(e[I]);
      }
      async function C(e, t) {
        let r,
          n = null;
        if (Array.isArray(t)) {
          let n = function (t) {
            if ((0, f.Lo)(t, 32)) return t;
            let r = e.interface.getEvent(t);
            return (0, l.MR)(r, "unknown fragment", "name", t), r.topicHash;
          };
          r = t.map((e) =>
            null == e ? null : Array.isArray(e) ? e.map(n) : n(e)
          );
        } else if ("*" === t) r = [null];
        else if ("string" == typeof t)
          (0, f.Lo)(t, 32)
            ? (r = [t])
            : ((n = e.interface.getEvent(t)),
              (0, l.MR)(n, "unknown fragment", "event", t),
              (r = [n.topicHash]));
        else
          t &&
          "object" == typeof t &&
          "getTopicFilter" in t &&
          "function" == typeof t.getTopicFilter &&
          t.fragment
            ? (r = await t.getTopicFilter())
            : "fragment" in t
            ? (r = [(n = t.fragment).topicHash])
            : (0, l.MR)(!1, "unknown event name", "event", t);
        return {
          fragment: n,
          tag: (r = r.map((e) => {
            if (null == e) return null;
            if (Array.isArray(e)) {
              let t = Array.from(
                new Set(e.map((e) => e.toLowerCase())).values()
              );
              return 1 === t.length ? t[0] : (t.sort(), t);
            }
            return e.toLowerCase();
          }))
            .map((e) =>
              null == e ? "null" : Array.isArray(e) ? e.join("|") : e
            )
            .join("&"),
          topics: r,
        };
      }
      async function B(e, t) {
        let { subs: r } = N(e);
        return r.get((await C(e, t)).tag) || null;
      }
      async function T(e, t, r) {
        let n = S(e.runner);
        (0, l.vA)(
          n,
          "contract runner does not support subscribing",
          "UNSUPPORTED_OPERATION",
          { operation: t }
        );
        let { fragment: i, tag: s, topics: a } = await C(e, r),
          { addr: o, subs: u } = N(e),
          f = u.get(s);
        if (!f) {
          let t = { address: o || e, topics: a },
            l = (t) => {
              let n = i;
              if (null == n)
                try {
                  n = e.interface.getEvent(t.topics[0]);
                } catch (e) {}
              if (n) {
                let s = n,
                  a = i ? e.interface.decodeEventLog(i, t.data, t.topics) : [];
                F(e, r, a, (n) => new m(e, n, r, s, t));
              } else F(e, r, [], (n) => new g(e, n, r, t));
            },
            c = [];
          (f = {
            tag: s,
            listeners: [],
            start: () => {
              c.length || c.push(n.on(t, l));
            },
            stop: async () => {
              if (0 == c.length) return;
              let e = c;
              (c = []), await Promise.all(e), n.off(t, l);
            },
          }),
            u.set(s, f);
        }
        return f;
      }
      let L = Promise.resolve();
      async function U(e, t, r, n) {
        await L;
        let i = await B(e, t);
        if (!i) return !1;
        let s = i.listeners.length;
        return (
          (i.listeners = i.listeners.filter(({ listener: t, once: i }) => {
            let s = Array.from(r);
            n && s.push(n(i ? null : t));
            try {
              t.call(e, ...s);
            } catch (e) {}
            return !i;
          })),
          0 === i.listeners.length && (i.stop(), N(e).subs.delete(i.tag)),
          s > 0
        );
      }
      async function F(e, t, r, n) {
        try {
          await L;
        } catch (e) {}
        let i = U(e, t, r, n);
        return (L = i), await i;
      }
      let _ = ["then"];
      class D {
        target;
        interface;
        runner;
        filters;
        [I];
        fallback;
        constructor(e, t, r, n) {
          var a;
          let c;
          (0, l.MR)(
            "string" == typeof e || (0, s.$C)(e),
            "invalid value for Contract target",
            "target",
            e
          ),
            null == r && (r = null);
          let d = i.KA.from(t);
          (0, o.n)(this, { target: e, runner: r, interface: d }),
            Object.defineProperty(this, I, { value: {} });
          let h = null,
            p = null;
          if (n) {
            let e = S(r);
            p = new b(this.interface, e, n);
          }
          let g = new Map();
          if ("string" == typeof e)
            if ((0, f.Lo)(e)) (h = e), (c = Promise.resolve(e));
            else {
              let t = M(r, "resolveName");
              if (!A(t))
                throw (0, l.xz)(
                  "contract runner does not support name resolution",
                  "UNSUPPORTED_OPERATION",
                  { operation: "resolveName" }
                );
              c = t.resolveName(e).then((t) => {
                if (null == t)
                  throw (0, l.xz)(
                    "an ENS name used for a contract target must be correctly configured",
                    "UNCONFIGURED_NAME",
                    { value: e }
                  );
                return (N(this).addr = t), t;
              });
            }
          else
            c = e.getAddress().then((e) => {
              if (null == e) throw Error("TODO");
              return (N(this).addr = e), e;
            });
          (a = { addrPromise: c, addr: h, deployTx: p, subs: g }),
            k.set(this[I], a);
          let m = new Proxy(
            {},
            {
              get: (e, t, r) => {
                if ("symbol" == typeof t || _.indexOf(t) >= 0)
                  return Reflect.get(e, t, r);
                try {
                  return this.getEvent(t);
                } catch (e) {
                  if (!(0, l.bJ)(e, "INVALID_ARGUMENT") || "key" !== e.argument)
                    throw e;
                }
              },
              has: (e, t) =>
                _.indexOf(t) >= 0
                  ? Reflect.has(e, t)
                  : Reflect.has(e, t) || this.interface.hasEvent(String(t)),
            }
          );
          return (
            (0, o.n)(this, { filters: m }),
            (0, o.n)(this, {
              fallback:
                d.receive || d.fallback
                  ? (function (e) {
                      let t = async function (t) {
                          let r = await P(t, ["data"]);
                          (r.to = await e.getAddress()),
                            r.from &&
                              (r.from = await (0, s.tG)(r.from, E(e.runner)));
                          let n = e.interface,
                            i =
                              (0, u.Ab)(r.value || y, "overrides.value") === y,
                            a = "0x" === (r.data || "0x");
                          !n.fallback ||
                            n.fallback.payable ||
                            !n.receive ||
                            a ||
                            i ||
                            (0, l.MR)(
                              !1,
                              "cannot send data to receive or send value to non-payable fallback",
                              "overrides",
                              t
                            ),
                            (0, l.MR)(
                              n.fallback || a,
                              "cannot send data to receive-only contract",
                              "overrides.data",
                              r.data
                            );
                          let o =
                            n.receive || (n.fallback && n.fallback.payable);
                          return (
                            (0, l.MR)(
                              o || i,
                              "cannot send value to non-payable fallback",
                              "overrides.value",
                              r.value
                            ),
                            (0, l.MR)(
                              n.fallback || a,
                              "cannot send data to receive-only contract",
                              "overrides.data",
                              r.data
                            ),
                            r
                          );
                        },
                        r = async function (r) {
                          let n = M(e.runner, "call");
                          (0, l.vA)(
                            v(n),
                            "contract runner does not support calling",
                            "UNSUPPORTED_OPERATION",
                            { operation: "call" }
                          );
                          let i = await t(r);
                          try {
                            return await n.call(i);
                          } catch (t) {
                            if ((0, l.E)(t) && t.data)
                              throw e.interface.makeError(t.data, i);
                            throw t;
                          }
                        },
                        n = async function (r) {
                          let n = e.runner;
                          (0, l.vA)(
                            x(n),
                            "contract runner does not support sending transactions",
                            "UNSUPPORTED_OPERATION",
                            { operation: "sendTransaction" }
                          );
                          let i = await n.sendTransaction(await t(r)),
                            s = S(e.runner);
                          return new b(e.interface, s, i);
                        },
                        i = async function (r) {
                          let n = M(e.runner, "estimateGas");
                          return (
                            (0, l.vA)(
                              w(n),
                              "contract runner does not support gas estimation",
                              "UNSUPPORTED_OPERATION",
                              { operation: "estimateGas" }
                            ),
                            await n.estimateGas(await t(r))
                          );
                        },
                        a = async (e) => await n(e);
                      return (
                        (0, o.n)(a, {
                          _contract: e,
                          estimateGas: i,
                          populateTransaction: t,
                          send: n,
                          staticCall: r,
                        }),
                        a
                      );
                    })(this)
                  : null,
            }),
            new Proxy(this, {
              get: (e, t, r) => {
                if ("symbol" == typeof t || t in e || _.indexOf(t) >= 0)
                  return Reflect.get(e, t, r);
                try {
                  return e.getFunction(t);
                } catch (e) {
                  if (!(0, l.bJ)(e, "INVALID_ARGUMENT") || "key" !== e.argument)
                    throw e;
                }
              },
              has: (e, t) =>
                "symbol" == typeof t || t in e || _.indexOf(t) >= 0
                  ? Reflect.has(e, t)
                  : e.interface.hasFunction(t),
            })
          );
        }
        connect(e) {
          return new D(this.target, this.interface, e);
        }
        attach(e) {
          return new D(e, this.interface, this.runner);
        }
        async getAddress() {
          return await N(this).addrPromise;
        }
        async getDeployedCode() {
          let e = S(this.runner);
          (0, l.vA)(
            e,
            "runner does not support .provider",
            "UNSUPPORTED_OPERATION",
            { operation: "getDeployedCode" }
          );
          let t = await e.getCode(await this.getAddress());
          return "0x" === t ? null : t;
        }
        async waitForDeployment() {
          let e = this.deploymentTransaction();
          if (e) return await e.wait(), this;
          if (null != (await this.getDeployedCode())) return this;
          let t = S(this.runner);
          return (
            (0, l.vA)(
              null != t,
              "contract runner does not support .provider",
              "UNSUPPORTED_OPERATION",
              { operation: "waitForDeployment" }
            ),
            new Promise((e, r) => {
              let n = async () => {
                try {
                  let r = await this.getDeployedCode();
                  if (null != r) return e(this);
                  t.once("block", n);
                } catch (e) {
                  r(e);
                }
              };
              n();
            })
          );
        }
        deploymentTransaction() {
          return N(this).deployTx;
        }
        getFunction(e) {
          return (
            "string" != typeof e && (e = e.format()),
            (function (e, t) {
              let r = function (...r) {
                  let n = e.interface.getFunction(t, r);
                  return (
                    (0, l.vA)(
                      n,
                      "no matching fragment",
                      "UNSUPPORTED_OPERATION",
                      { operation: "fragment", info: { key: t, args: r } }
                    ),
                    n
                  );
                },
                n = async function (...t) {
                  let n = r(...t),
                    i = {};
                  if (
                    (n.inputs.length + 1 === t.length &&
                      (i = await P(t.pop())).from &&
                      (i.from = await (0, s.tG)(i.from, E(e.runner))),
                    n.inputs.length !== t.length)
                  )
                    throw Error(
                      "internal error: fragment inputs doesn't match arguments; should not happen"
                    );
                  let a = await O(e.runner, n.inputs, t);
                  return Object.assign(
                    {},
                    i,
                    await (0, o.k)({
                      to: e.getAddress(),
                      data: e.interface.encodeFunctionData(n, a),
                    })
                  );
                },
                i = async function (...e) {
                  let t = await f(...e);
                  return 1 === t.length ? t[0] : t;
                },
                a = async function (...t) {
                  let r = e.runner;
                  (0, l.vA)(
                    x(r),
                    "contract runner does not support sending transactions",
                    "UNSUPPORTED_OPERATION",
                    { operation: "sendTransaction" }
                  );
                  let i = await r.sendTransaction(await n(...t)),
                    s = S(e.runner);
                  return new b(e.interface, s, i);
                },
                u = async function (...t) {
                  let r = M(e.runner, "estimateGas");
                  return (
                    (0, l.vA)(
                      w(r),
                      "contract runner does not support gas estimation",
                      "UNSUPPORTED_OPERATION",
                      { operation: "estimateGas" }
                    ),
                    await r.estimateGas(await n(...t))
                  );
                },
                f = async function (...t) {
                  let i = M(e.runner, "call");
                  (0, l.vA)(
                    v(i),
                    "contract runner does not support calling",
                    "UNSUPPORTED_OPERATION",
                    { operation: "call" }
                  );
                  let s = await n(...t),
                    a = "0x";
                  try {
                    a = await i.call(s);
                  } catch (t) {
                    if ((0, l.E)(t) && t.data)
                      throw e.interface.makeError(t.data, s);
                    throw t;
                  }
                  let o = r(...t);
                  return e.interface.decodeFunctionResult(o, a);
                },
                c = async (...e) =>
                  r(...e).constant ? await i(...e) : await a(...e);
              return (
                (0, o.n)(c, {
                  name: e.interface.getFunctionName(t),
                  _contract: e,
                  _key: t,
                  getFragment: r,
                  estimateGas: u,
                  populateTransaction: n,
                  send: a,
                  staticCall: i,
                  staticCallResult: f,
                }),
                Object.defineProperty(c, "fragment", {
                  configurable: !1,
                  enumerable: !0,
                  get: () => {
                    let r = e.interface.getFunction(t);
                    return (
                      (0, l.vA)(
                        r,
                        "no matching fragment",
                        "UNSUPPORTED_OPERATION",
                        { operation: "fragment", info: { key: t } }
                      ),
                      r
                    );
                  },
                }),
                c
              );
            })(this, e)
          );
        }
        getEvent(e) {
          "string" != typeof e && (e = e.format());
          var t = this,
            r = e;
          let n = function (...e) {
              let n = t.interface.getEvent(r, e);
              return (
                (0, l.vA)(n, "no matching fragment", "UNSUPPORTED_OPERATION", {
                  operation: "fragment",
                  info: { key: r, args: e },
                }),
                n
              );
            },
            i = function (...e) {
              return new R(t, n(...e), e);
            };
          return (
            (0, o.n)(i, {
              name: t.interface.getEventName(r),
              _contract: t,
              _key: r,
              getFragment: n,
            }),
            Object.defineProperty(i, "fragment", {
              configurable: !1,
              enumerable: !0,
              get: () => {
                let e = t.interface.getEvent(r);
                return (
                  (0, l.vA)(
                    e,
                    "no matching fragment",
                    "UNSUPPORTED_OPERATION",
                    { operation: "fragment", info: { key: r } }
                  ),
                  e
                );
              },
            }),
            i
          );
        }
        async queryTransaction(e) {
          throw Error("@TODO");
        }
        async queryFilter(e, t, r) {
          null == t && (t = 0), null == r && (r = "latest");
          let { addr: n, addrPromise: i } = N(this),
            s = n || (await i),
            { fragment: o, topics: u } = await C(this, e),
            f = { address: s, topics: u, fromBlock: t, toBlock: r },
            c = S(this.runner);
          return (
            (0, l.vA)(
              c,
              "contract runner does not have a provider",
              "UNSUPPORTED_OPERATION",
              { operation: "queryFilter" }
            ),
            (await c.getLogs(f)).map((e) => {
              let t = o;
              if (null == t)
                try {
                  t = this.interface.getEvent(e.topics[0]);
                } catch (e) {}
              if (t)
                try {
                  return new d(e, this.interface, t);
                } catch (t) {
                  return new h(e, t);
                }
              return new a.tG(e, c);
            })
          );
        }
        async on(e, t) {
          let r = await T(this, "on", e);
          return r.listeners.push({ listener: t, once: !1 }), r.start(), this;
        }
        async once(e, t) {
          let r = await T(this, "once", e);
          return r.listeners.push({ listener: t, once: !0 }), r.start(), this;
        }
        async emit(e, ...t) {
          return await F(this, e, t, null);
        }
        async listenerCount(e) {
          if (e) {
            let t = await B(this, e);
            return t ? t.listeners.length : 0;
          }
          let { subs: t } = N(this),
            r = 0;
          for (let { listeners: e } of t.values()) r += e.length;
          return r;
        }
        async listeners(e) {
          if (e) {
            let t = await B(this, e);
            return t ? t.listeners.map(({ listener: e }) => e) : [];
          }
          let { subs: t } = N(this),
            r = [];
          for (let { listeners: e } of t.values())
            r = r.concat(e.map(({ listener: e }) => e));
          return r;
        }
        async off(e, t) {
          let r = await B(this, e);
          if (!r) return this;
          if (t) {
            let e = r.listeners.map(({ listener: e }) => e).indexOf(t);
            e >= 0 && r.listeners.splice(e, 1);
          }
          return (
            (null == t || 0 === r.listeners.length) &&
              (r.stop(), N(this).subs.delete(r.tag)),
            this
          );
        }
        async removeAllListeners(e) {
          if (e) {
            let t = await B(this, e);
            if (!t) return this;
            t.stop(), N(this).subs.delete(t.tag);
          } else {
            let { subs: e } = N(this);
            for (let { tag: t, stop: r } of e.values()) r(), e.delete(t);
          }
          return this;
        }
        async addListener(e, t) {
          return await this.on(e, t);
        }
        async removeListener(e, t) {
          return await this.off(e, t);
        }
        static buildClass(e) {
          class t extends D {
            constructor(t, r = null) {
              super(t, e, r);
            }
          }
          return t;
        }
        static from(e, t, r) {
          return null == r && (r = null), new this(e, t, r);
        }
      }
      function j() {
        return D;
      }
      class z extends j() {}
    },
    27585: (e, t, r) => {
      "use strict";
      var n = r(72667),
        i = r(57946).assert;
      function s(e, t) {
        (this.ec = e),
          (this.priv = null),
          (this.pub = null),
          t.priv && this._importPrivate(t.priv, t.privEnc),
          t.pub && this._importPublic(t.pub, t.pubEnc);
      }
      (e.exports = s),
        (s.fromPublic = function (e, t, r) {
          return t instanceof s ? t : new s(e, { pub: t, pubEnc: r });
        }),
        (s.fromPrivate = function (e, t, r) {
          return t instanceof s ? t : new s(e, { priv: t, privEnc: r });
        }),
        (s.prototype.validate = function () {
          var e = this.getPublic();
          return e.isInfinity()
            ? { result: !1, reason: "Invalid public key" }
            : e.validate()
            ? e.mul(this.ec.curve.n).isInfinity()
              ? { result: !0, reason: null }
              : { result: !1, reason: "Public key * N != O" }
            : { result: !1, reason: "Public key is not a point" };
        }),
        (s.prototype.getPublic = function (e, t) {
          return ("string" == typeof e && ((t = e), (e = null)),
          this.pub || (this.pub = this.ec.g.mul(this.priv)),
          t)
            ? this.pub.encode(t, e)
            : this.pub;
        }),
        (s.prototype.getPrivate = function (e) {
          return "hex" === e ? this.priv.toString(16, 2) : this.priv;
        }),
        (s.prototype._importPrivate = function (e, t) {
          (this.priv = new n(e, t || 16)),
            (this.priv = this.priv.umod(this.ec.curve.n));
        }),
        (s.prototype._importPublic = function (e, t) {
          if (e.x || e.y) {
            "mont" === this.ec.curve.type
              ? i(e.x, "Need x coordinate")
              : ("short" === this.ec.curve.type ||
                  "edwards" === this.ec.curve.type) &&
                i(e.x && e.y, "Need both x and y coordinate"),
              (this.pub = this.ec.curve.point(e.x, e.y));
            return;
          }
          this.pub = this.ec.curve.decodePoint(e, t);
        }),
        (s.prototype.derive = function (e) {
          return (
            e.validate() || i(e.validate(), "public point not validated"),
            e.mul(this.priv).getX()
          );
        }),
        (s.prototype.sign = function (e, t, r) {
          return this.ec.sign(e, this, t, r);
        }),
        (s.prototype.verify = function (e, t, r) {
          return this.ec.verify(e, t, this, void 0, r);
        }),
        (s.prototype.inspect = function () {
          return (
            "<Key priv: " +
            (this.priv && this.priv.toString(16, 2)) +
            " pub: " +
            (this.pub && this.pub.inspect()) +
            " >"
          );
        });
    },
    29592: (e, t, r) => {
      "use strict";
      r.d(t, {
        vA: () => l,
        MR: () => u,
        dd: () => f,
        SP: () => d,
        gk: () => h,
        E: () => a,
        bJ: () => s,
        xz: () => o,
      });
      var n = r(50797);
      function i(e) {
        if (null == e) return "null";
        if (Array.isArray(e)) return "[ " + e.map(i).join(", ") + " ]";
        if (e instanceof Uint8Array) {
          let t = "0123456789abcdef",
            r = "0x";
          for (let n = 0; n < e.length; n++)
            (r += t[e[n] >> 4]), (r += t[15 & e[n]]);
          return r;
        }
        if ("object" == typeof e && "function" == typeof e.toJSON)
          return i(e.toJSON());
        switch (typeof e) {
          case "boolean":
          case "symbol":
          case "number":
            return e.toString();
          case "bigint":
            return BigInt(e).toString();
          case "string":
            return JSON.stringify(e);
          case "object": {
            let t = Object.keys(e);
            return (
              t.sort(),
              "{ " + t.map((t) => `${i(t)}: ${i(e[t])}`).join(", ") + " }"
            );
          }
        }
        return "[ COULD NOT SERIALIZE ]";
      }
      function s(e, t) {
        return e && e.code === t;
      }
      function a(e) {
        return s(e, "CALL_EXCEPTION");
      }
      function o(e, t, r) {
        let s,
          a = e;
        {
          let n = [];
          if (r) {
            if ("message" in r || "code" in r || "name" in r)
              throw Error(`value will overwrite populated values: ${i(r)}`);
            for (let e in r) {
              if ("shortMessage" === e) continue;
              let t = r[e];
              n.push(e + "=" + i(t));
            }
          }
          n.push(`code=${t}`),
            n.push("version=6.14.0"),
            n.length && (e += " (" + n.join(", ") + ")");
        }
        switch (t) {
          case "INVALID_ARGUMENT":
            s = TypeError(e);
            break;
          case "NUMERIC_FAULT":
          case "BUFFER_OVERRUN":
            s = RangeError(e);
            break;
          default:
            s = Error(e);
        }
        return (
          (0, n.n)(s, { code: t }),
          r && Object.assign(s, r),
          null == s.shortMessage && (0, n.n)(s, { shortMessage: a }),
          s
        );
      }
      function l(e, t, r, n) {
        if (!e) throw o(t, r, n);
      }
      function u(e, t, r, n) {
        l(e, t, "INVALID_ARGUMENT", { argument: r, value: n });
      }
      function f(e, t, r) {
        null == r && (r = ""),
          r && (r = ": " + r),
          l(e >= t, "missing argument" + r, "MISSING_ARGUMENT", {
            count: e,
            expectedCount: t,
          }),
          l(e <= t, "too many arguments" + r, "UNEXPECTED_ARGUMENT", {
            count: e,
            expectedCount: t,
          });
      }
      let c = ["NFD", "NFC", "NFKD", "NFKC"].reduce((e, t) => {
        try {
          if ("test" !== "test".normalize(t)) throw Error("bad");
          if ("NFD" === t) {
            let e = String.fromCharCode(233).normalize("NFD"),
              t = String.fromCharCode(101, 769);
            if (e !== t) throw Error("broken");
          }
          e.push(t);
        } catch (e) {}
        return e;
      }, []);
      function d(e) {
        l(
          c.indexOf(e) >= 0,
          "platform missing String.prototype.normalize",
          "UNSUPPORTED_OPERATION",
          { operation: "String.prototype.normalize", info: { form: e } }
        );
      }
      function h(e, t, r) {
        if ((null == r && (r = ""), e !== t)) {
          let e = r,
            t = "new";
          r && ((e += "."), (t += " " + r)),
            l(
              !1,
              `private constructor; use ${e}from* methods`,
              "UNSUPPORTED_OPERATION",
              { operation: t }
            );
        }
      }
    },
    30167: (e, t, r) => {
      "use strict";
      r.d(t, { YW: () => o, _v: () => l });
      var n = r(44532),
        i = r(29592);
      function s(e, t, r, n, i) {
        if ("BAD_PREFIX" === e || "UNEXPECTED_CONTINUE" === e) {
          let e = 0;
          for (let n = t + 1; n < r.length && r[n] >> 6 == 2; n++) e++;
          return e;
        }
        return "OVERRUN" === e ? r.length - t - 1 : 0;
      }
      let a = Object.freeze({
        error: function (e, t, r, n, s) {
          (0, i.MR)(!1, `invalid codepoint at offset ${t}; ${e}`, "bytes", r);
        },
        ignore: s,
        replace: function (e, t, r, n, a) {
          return "OVERLONG" === e
            ? ((0, i.MR)(
                "number" == typeof a,
                "invalid bad code point for replacement",
                "badCodepoint",
                a
              ),
              n.push(a),
              0)
            : (n.push(65533), s(e, t, r, n, a));
        },
      });
      function o(e, t) {
        (0, i.MR)("string" == typeof e, "invalid string value", "str", e),
          null != t && ((0, i.SP)(t), (e = e.normalize(t)));
        let r = [];
        for (let t = 0; t < e.length; t++) {
          let n = e.charCodeAt(t);
          if (n < 128) r.push(n);
          else if (n < 2048) r.push((n >> 6) | 192), r.push((63 & n) | 128);
          else if ((64512 & n) == 55296) {
            t++;
            let s = e.charCodeAt(t);
            (0, i.MR)(
              t < e.length && (64512 & s) == 56320,
              "invalid surrogate pair",
              "str",
              e
            );
            let a = 65536 + ((1023 & n) << 10) + (1023 & s);
            r.push((a >> 18) | 240),
              r.push(((a >> 12) & 63) | 128),
              r.push(((a >> 6) & 63) | 128),
              r.push((63 & a) | 128);
          } else
            r.push((n >> 12) | 224),
              r.push(((n >> 6) & 63) | 128),
              r.push((63 & n) | 128);
        }
        return new Uint8Array(r);
      }
      function l(e, t) {
        return (function (e, t) {
          null == t && (t = a.error);
          let r = (0, n.q5)(e, "bytes"),
            i = [],
            s = 0;
          for (; s < r.length; ) {
            let e = r[s++];
            if (e >> 7 == 0) {
              i.push(e);
              continue;
            }
            let n = null,
              a = null;
            if ((224 & e) == 192) (n = 1), (a = 127);
            else if ((240 & e) == 224) (n = 2), (a = 2047);
            else if ((248 & e) == 240) (n = 3), (a = 65535);
            else {
              (192 & e) == 128
                ? (s += t("UNEXPECTED_CONTINUE", s - 1, r, i))
                : (s += t("BAD_PREFIX", s - 1, r, i));
              continue;
            }
            if (s - 1 + n >= r.length) {
              s += t("OVERRUN", s - 1, r, i);
              continue;
            }
            let o = e & ((1 << (8 - n - 1)) - 1);
            for (let e = 0; e < n; e++) {
              let e = r[s];
              if ((192 & e) != 128) {
                (s += t("MISSING_CONTINUE", s, r, i)), (o = null);
                break;
              }
              (o = (o << 6) | (63 & e)), s++;
            }
            if (null !== o) {
              if (o > 1114111) {
                s += t("OUT_OF_RANGE", s - 1 - n, r, i, o);
                continue;
              }
              if (o >= 55296 && o <= 57343) {
                s += t("UTF16_SURROGATE", s - 1 - n, r, i, o);
                continue;
              }
              if (o <= a) {
                s += t("OVERLONG", s - 1 - n, r, i, o);
                continue;
              }
              i.push(o);
            }
          }
          return i;
        })(e, t)
          .map((e) =>
            e <= 65535
              ? String.fromCharCode(e)
              : String.fromCharCode(
                  (((e -= 65536) >> 10) & 1023) + 55296,
                  (1023 & e) + 56320
                )
          )
          .join("");
      }
    },
    32757: (e, t, r) => {
      "use strict";
      let n = r(93706);
      class i {
        constructor(e) {
          (this.options = e),
            (this.iframe = document.createElement("iframe")),
            (this.widgetWindow = null),
            (this.widget_layout_mode = "Modal"),
            (this.await_data = !1),
            (this.onMessage = (e) => {
              var t, r, n, i, s, a, o, l, u, f;
              let c = e.source === this.widgetWindow,
                d = "object" == typeof e.data;
              if (c && d)
                switch (e.data.type) {
                  case "loaded":
                    this.sendEvent("allow-redirect", { redirectAllowed: !1 }),
                      this.sendEvent("extra", this.options.extra),
                      this.sendEvent("parent-hostname", {
                        hostname: window.location.hostname,
                      }),
                      null ==
                        (r =
                          null == (t = this.options.listeners)
                            ? void 0
                            : t[e.data.type]) || r.call(t);
                    break;
                  case "payment-status":
                    null ==
                      (i =
                        null == (n = this.options.listeners)
                          ? void 0
                          : n[e.data.type]) || i.call(n, e.data.data);
                    break;
                  case "position":
                    null ==
                      (a =
                        null == (s = this.options.listeners)
                          ? void 0
                          : s[e.data.type]) || a.call(s, e.data.data);
                    break;
                  case "rate-update":
                    null ==
                      (l =
                        null == (o = this.options.listeners)
                          ? void 0
                          : o[e.data.type]) || l.call(o, e.data.data);
                    break;
                  case "close":
                    this.close();
                    break;
                  case "error":
                    null ==
                      (f =
                        null == (u = this.options.listeners)
                          ? void 0
                          : u[e.data.type]) || f.call(u, e.data.data);
                    break;
                  case "3ds-start":
                    this.iframe.style.background = "#fff";
                    break;
                  case "3ds-end":
                    this.iframe.style.background = "transparent";
                }
            }),
            this.validateOptions(e),
            this.options.origin ||
              (this.options.origin = "https://widget.wert.io"),
            this.options.extra && (this.await_data = !0);
        }
        open() {
          (this.iframe.style.border = "none"),
            (this.iframe.style.width = "100%"),
            (this.iframe.style.height = "100%"),
            (this.iframe.style.bottom = "0"),
            (this.iframe.style.right = "0"),
            (this.iframe.style.position = "fixed"),
            (this.iframe.style.zIndex = "10000"),
            (document.body.style.overflow = "hidden"),
            this.iframe.setAttribute("src", this.getEmbedUrl()),
            this.iframe.setAttribute(
              "allow",
              "camera *; microphone *; payment"
            ),
            this.iframe.setAttribute(
              "sandbox",
              "allow-scripts allow-forms allow-popups allow-same-origin"
            ),
            this.iframe.setAttribute("data-version", n.version),
            document.body.appendChild(this.iframe),
            (this.widgetWindow = this.iframe.contentWindow),
            this.listenWidget();
        }
        addEventListeners(e) {
          this.options.listeners = Object.assign(
            Object.assign({}, this.options.listeners),
            e
          );
        }
        removeEventListeners(e) {
          var t, r;
          if (void 0 === e) delete this.options.listeners;
          else if ("string" == typeof e)
            null == (t = this.options.listeners) || delete t[e];
          else
            for (let t of e)
              null == (r = this.options.listeners) || delete r[t];
        }
        updateTheme(e) {
          e && Object.keys(e).length && this.sendEvent("theme", e);
        }
        close() {
          var e, t;
          document.body.removeChild(this.iframe),
            (document.body.style.overflow = ""),
            this.unListenWidget(),
            null ==
              (t = null == (e = this.options.listeners) ? void 0 : e.close) ||
              t.call(e);
        }
        validateOptions(e) {
          var t, r, n, i;
          if (!e.partner_id)
            throw Error(
              "Please provide a partner_id in order for the widget to work correctly"
            );
          e.container_id &&
            console.error("container_id is no longer supported"),
            (null == (r = null == (t = e.extra) ? void 0 : t.item_info)
              ? void 0
              : r.name) &&
              e.extra.item_info.name.length > 40 &&
              console.error(
                "Max length of the extra.item_info.name value is 40 characters"
              ),
            (null == (i = null == (n = e.extra) ? void 0 : n.item_info)
              ? void 0
              : i.category) &&
              e.extra.item_info.category.length > 40 &&
              console.error(
                "Max length of the extra.item_info.category value is 40 characters"
              );
        }
        listenWidget() {
          window.addEventListener("message", this.onMessage),
            (this.checkIntervalId = window.setInterval(() => {
              (this.widgetWindow && !this.widgetWindow.closed) ||
                this.unListenWidget();
            }, 200));
        }
        unListenWidget() {
          this.checkIntervalId &&
            (clearInterval(this.checkIntervalId),
            (this.checkIntervalId = void 0),
            window.removeEventListener("message", this.onMessage));
        }
        sendEvent(e, t) {
          var r;
          t &&
            (null == (r = this.widgetWindow) ||
              r.postMessage({ data: t, type: e }, this.options.origin));
        }
        getEmbedUrl() {
          let e = this.getParametersString();
          return `${this.options.origin}/${this.options.partner_id}/widget${e}`;
        }
        getParametersString() {
          return Object.entries(
            Object.assign(
              Object.assign(Object.assign({}, this.options), {
                widget_layout_mode: this.widget_layout_mode,
              }),
              this.await_data && { await_data: this.await_data }
            )
          ).reduce((e, [t, r]) => {
            if (
              void 0 === r ||
              "object" == typeof r ||
              ["origin", "partner_id"].includes(t)
            )
              return e;
            let n = e.length ? "&" : "?";
            return e + n + t + "=" + encodeURIComponent(r);
          }, "");
        }
      }
      e.exports = i;
    },
    33063: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "Image", {
          enumerable: !0,
          get: function () {
            return w;
          },
        });
      let n = r(88229),
        i = r(6966),
        s = r(95155),
        a = i._(r(12115)),
        o = n._(r(47650)),
        l = n._(r(15564)),
        u = r(38883),
        f = r(95840),
        c = r(86752);
      r(43230);
      let d = r(70901),
        h = n._(r(51193)),
        p = r(6654),
        b = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        };
      function g(e, t, r, n, i, s, a) {
        let o = null == e ? void 0 : e.src;
        e &&
          e["data-loaded-src"] !== o &&
          ((e["data-loaded-src"] = o),
          ("decode" in e ? e.decode() : Promise.resolve())
            .catch(() => {})
            .then(() => {
              if (e.parentElement && e.isConnected) {
                if (("empty" !== t && i(!0), null == r ? void 0 : r.current)) {
                  let t = new Event("load");
                  Object.defineProperty(t, "target", {
                    writable: !1,
                    value: e,
                  });
                  let n = !1,
                    i = !1;
                  r.current({
                    ...t,
                    nativeEvent: t,
                    currentTarget: e,
                    target: e,
                    isDefaultPrevented: () => n,
                    isPropagationStopped: () => i,
                    persist: () => {},
                    preventDefault: () => {
                      (n = !0), t.preventDefault();
                    },
                    stopPropagation: () => {
                      (i = !0), t.stopPropagation();
                    },
                  });
                }
                (null == n ? void 0 : n.current) && n.current(e);
              }
            }));
      }
      function m(e) {
        return a.use ? { fetchPriority: e } : { fetchpriority: e };
      }
      let y = (0, a.forwardRef)((e, t) => {
        let {
            src: r,
            srcSet: n,
            sizes: i,
            height: o,
            width: l,
            decoding: u,
            className: f,
            style: c,
            fetchPriority: d,
            placeholder: h,
            loading: b,
            unoptimized: y,
            fill: v,
            onLoadRef: w,
            onLoadingCompleteRef: A,
            setBlurComplete: x,
            setShowAltText: E,
            sizesInput: R,
            onLoad: M,
            onError: S,
            ...P
          } = e,
          O = (0, a.useCallback)(
            (e) => {
              e && (S && (e.src = e.src), e.complete && g(e, h, w, A, x, y, R));
            },
            [r, h, w, A, x, S, y, R]
          ),
          I = (0, p.useMergedRef)(t, O);
        return (0, s.jsx)("img", {
          ...P,
          ...m(d),
          loading: b,
          width: l,
          height: o,
          decoding: u,
          "data-nimg": v ? "fill" : "1",
          className: f,
          style: c,
          sizes: i,
          srcSet: n,
          src: r,
          ref: I,
          onLoad: (e) => {
            g(e.currentTarget, h, w, A, x, y, R);
          },
          onError: (e) => {
            E(!0), "empty" !== h && x(!0), S && S(e);
          },
        });
      });
      function v(e) {
        let { isAppRouter: t, imgAttributes: r } = e,
          n = {
            as: "image",
            imageSrcSet: r.srcSet,
            imageSizes: r.sizes,
            crossOrigin: r.crossOrigin,
            referrerPolicy: r.referrerPolicy,
            ...m(r.fetchPriority),
          };
        return t && o.default.preload
          ? (o.default.preload(r.src, n), null)
          : (0, s.jsx)(l.default, {
              children: (0, s.jsx)(
                "link",
                { rel: "preload", href: r.srcSet ? void 0 : r.src, ...n },
                "__nimg-" + r.src + r.srcSet + r.sizes
              ),
            });
      }
      let w = (0, a.forwardRef)((e, t) => {
        let r = (0, a.useContext)(d.RouterContext),
          n = (0, a.useContext)(c.ImageConfigContext),
          i = (0, a.useMemo)(() => {
            var e;
            let t = b || n || f.imageConfigDefault,
              r = [...t.deviceSizes, ...t.imageSizes].sort((e, t) => e - t),
              i = t.deviceSizes.sort((e, t) => e - t),
              s = null == (e = t.qualities) ? void 0 : e.sort((e, t) => e - t);
            return { ...t, allSizes: r, deviceSizes: i, qualities: s };
          }, [n]),
          { onLoad: o, onLoadingComplete: l } = e,
          p = (0, a.useRef)(o);
        (0, a.useEffect)(() => {
          p.current = o;
        }, [o]);
        let g = (0, a.useRef)(l);
        (0, a.useEffect)(() => {
          g.current = l;
        }, [l]);
        let [m, w] = (0, a.useState)(!1),
          [A, x] = (0, a.useState)(!1),
          { props: E, meta: R } = (0, u.getImgProps)(e, {
            defaultLoader: h.default,
            imgConf: i,
            blurComplete: m,
            showAltText: A,
          });
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(y, {
              ...E,
              unoptimized: R.unoptimized,
              placeholder: R.placeholder,
              fill: R.fill,
              onLoadRef: p,
              onLoadingCompleteRef: g,
              setBlurComplete: w,
              setShowAltText: x,
              sizesInput: e.sizes,
              ref: t,
            }),
            R.priority
              ? (0, s.jsx)(v, { isAppRouter: !r, imgAttributes: E })
              : null,
          ],
        });
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    34076: (e, t, r) => {
      "use strict";
      var n = r(57946),
        i = n.assert,
        s = n.parseBytes,
        a = n.cachedProperty;
      function o(e, t) {
        (this.eddsa = e),
          (this._secret = s(t.secret)),
          e.isPoint(t.pub) ? (this._pub = t.pub) : (this._pubBytes = s(t.pub));
      }
      (o.fromPublic = function (e, t) {
        return t instanceof o ? t : new o(e, { pub: t });
      }),
        (o.fromSecret = function (e, t) {
          return t instanceof o ? t : new o(e, { secret: t });
        }),
        (o.prototype.secret = function () {
          return this._secret;
        }),
        a(o, "pubBytes", function () {
          return this.eddsa.encodePoint(this.pub());
        }),
        a(o, "pub", function () {
          return this._pubBytes
            ? this.eddsa.decodePoint(this._pubBytes)
            : this.eddsa.g.mul(this.priv());
        }),
        a(o, "privBytes", function () {
          var e = this.eddsa,
            t = this.hash(),
            r = e.encodingLength - 1,
            n = t.slice(0, e.encodingLength);
          return (n[0] &= 248), (n[r] &= 127), (n[r] |= 64), n;
        }),
        a(o, "priv", function () {
          return this.eddsa.decodeInt(this.privBytes());
        }),
        a(o, "hash", function () {
          return this.eddsa.hash().update(this.secret()).digest();
        }),
        a(o, "messagePrefix", function () {
          return this.hash().slice(this.eddsa.encodingLength);
        }),
        (o.prototype.sign = function (e) {
          return (
            i(this._secret, "KeyPair can only verify"), this.eddsa.sign(e, this)
          );
        }),
        (o.prototype.verify = function (e, t) {
          return this.eddsa.verify(e, t, this);
        }),
        (o.prototype.getSecret = function (e) {
          return (
            i(this._secret, "KeyPair is public only"),
            n.encode(this.secret(), e)
          );
        }),
        (o.prototype.getPublic = function (e) {
          return n.encode(this.pubBytes(), e);
        }),
        (e.exports = o);
    },
    35695: (e, t, r) => {
      "use strict";
      var n = r(18999);
      r.o(n, "usePathname") &&
        r.d(t, {
          usePathname: function () {
            return n.usePathname;
          },
        }),
        r.o(n, "useSearchParams") &&
          r.d(t, {
            useSearchParams: function () {
              return n.useSearchParams;
            },
          });
    },
    36645: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let n = r(88229)._(r(67357));
      function i(e, t) {
        var r;
        let i = {};
        "function" == typeof e && (i.loader = e);
        let s = { ...i, ...t };
        return (0, n.default)({
          ...s,
          modules: null == (r = s.loadableGenerated) ? void 0 : r.modules,
        });
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    38324: (e, t, r) => {
      var n;
      function i(e) {
        this.rand = e;
      }
      if (
        ((e.exports = function (e) {
          return n || (n = new i(null)), n.generate(e);
        }),
        (e.exports.Rand = i),
        (i.prototype.generate = function (e) {
          return this._rand(e);
        }),
        (i.prototype._rand = function (e) {
          if (this.rand.getBytes) return this.rand.getBytes(e);
          for (var t = new Uint8Array(e), r = 0; r < t.length; r++)
            t[r] = this.rand.getByte();
          return t;
        }),
        "object" == typeof self)
      )
        self.crypto && self.crypto.getRandomValues
          ? (i.prototype._rand = function (e) {
              var t = new Uint8Array(e);
              return self.crypto.getRandomValues(t), t;
            })
          : self.msCrypto && self.msCrypto.getRandomValues
          ? (i.prototype._rand = function (e) {
              var t = new Uint8Array(e);
              return self.msCrypto.getRandomValues(t), t;
            })
          : "object" == typeof window &&
            (i.prototype._rand = function () {
              throw Error("Not implemented yet");
            });
      else
        try {
          var s = r(73776);
          if ("function" != typeof s.randomBytes) throw Error("Not supported");
          i.prototype._rand = function (e) {
            return s.randomBytes(e);
          };
        } catch (e) {}
    },
    38883: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImgProps", {
          enumerable: !0,
          get: function () {
            return l;
          },
        }),
        r(43230);
      let n = r(75100),
        i = r(95840),
        s = ["-moz-initial", "fill", "none", "scale-down", void 0];
      function a(e) {
        return void 0 !== e.default;
      }
      function o(e) {
        return void 0 === e
          ? e
          : "number" == typeof e
          ? Number.isFinite(e)
            ? e
            : NaN
          : "string" == typeof e && /^[0-9]+$/.test(e)
          ? parseInt(e, 10)
          : NaN;
      }
      function l(e, t) {
        var r, l;
        let u,
          f,
          c,
          {
            src: d,
            sizes: h,
            unoptimized: p = !1,
            priority: b = !1,
            loading: g,
            className: m,
            quality: y,
            width: v,
            height: w,
            fill: A = !1,
            style: x,
            overrideSrc: E,
            onLoad: R,
            onLoadingComplete: M,
            placeholder: S = "empty",
            blurDataURL: P,
            fetchPriority: O,
            decoding: I = "async",
            layout: k,
            objectFit: N,
            objectPosition: C,
            lazyBoundary: B,
            lazyRoot: T,
            ...L
          } = e,
          { imgConf: U, showAltText: F, blurComplete: _, defaultLoader: D } = t,
          j = U || i.imageConfigDefault;
        if ("allSizes" in j) u = j;
        else {
          let e = [...j.deviceSizes, ...j.imageSizes].sort((e, t) => e - t),
            t = j.deviceSizes.sort((e, t) => e - t),
            n = null == (r = j.qualities) ? void 0 : r.sort((e, t) => e - t);
          u = { ...j, allSizes: e, deviceSizes: t, qualities: n };
        }
        if (void 0 === D)
          throw Object.defineProperty(
            Error(
              "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"
            ),
            "__NEXT_ERROR_CODE",
            { value: "E163", enumerable: !1, configurable: !0 }
          );
        let z = L.loader || D;
        delete L.loader, delete L.srcSet;
        let G = "__next_img_default" in z;
        if (G) {
          if ("custom" === u.loader)
            throw Object.defineProperty(
              Error(
                'Image with src "' +
                  d +
                  '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
              ),
              "__NEXT_ERROR_CODE",
              { value: "E252", enumerable: !1, configurable: !0 }
            );
        } else {
          let e = z;
          z = (t) => {
            let { config: r, ...n } = t;
            return e(n);
          };
        }
        if (k) {
          "fill" === k && (A = !0);
          let e = {
            intrinsic: { maxWidth: "100%", height: "auto" },
            responsive: { width: "100%", height: "auto" },
          }[k];
          e && (x = { ...x, ...e });
          let t = { responsive: "100vw", fill: "100vw" }[k];
          t && !h && (h = t);
        }
        let q = "",
          Q = o(v),
          H = o(w);
        if ((l = d) && "object" == typeof l && (a(l) || void 0 !== l.src)) {
          let e = a(d) ? d.default : d;
          if (!e.src)
            throw Object.defineProperty(
              Error(
                "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                  JSON.stringify(e)
              ),
              "__NEXT_ERROR_CODE",
              { value: "E460", enumerable: !1, configurable: !0 }
            );
          if (!e.height || !e.width)
            throw Object.defineProperty(
              Error(
                "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                  JSON.stringify(e)
              ),
              "__NEXT_ERROR_CODE",
              { value: "E48", enumerable: !1, configurable: !0 }
            );
          if (
            ((f = e.blurWidth),
            (c = e.blurHeight),
            (P = P || e.blurDataURL),
            (q = e.src),
            !A)
          )
            if (Q || H) {
              if (Q && !H) {
                let t = Q / e.width;
                H = Math.round(e.height * t);
              } else if (!Q && H) {
                let t = H / e.height;
                Q = Math.round(e.width * t);
              }
            } else (Q = e.width), (H = e.height);
        }
        let V = !b && ("lazy" === g || void 0 === g);
        (!(d = "string" == typeof d ? d : q) ||
          d.startsWith("data:") ||
          d.startsWith("blob:")) &&
          ((p = !0), (V = !1)),
          u.unoptimized && (p = !0),
          G &&
            !u.dangerouslyAllowSVG &&
            d.split("?", 1)[0].endsWith(".svg") &&
            (p = !0);
        let J = o(y),
          K = Object.assign(
            A
              ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: N,
                  objectPosition: C,
                }
              : {},
            F ? {} : { color: "transparent" },
            x
          ),
          W =
            _ || "empty" === S
              ? null
              : "blur" === S
              ? 'url("data:image/svg+xml;charset=utf-8,' +
                (0, n.getImageBlurSvg)({
                  widthInt: Q,
                  heightInt: H,
                  blurWidth: f,
                  blurHeight: c,
                  blurDataURL: P || "",
                  objectFit: K.objectFit,
                }) +
                '")'
              : 'url("' + S + '")',
          Z = s.includes(K.objectFit)
            ? "fill" === K.objectFit
              ? "100% 100%"
              : "cover"
            : K.objectFit,
          Y = W
            ? {
                backgroundSize: Z,
                backgroundPosition: K.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: W,
              }
            : {},
          X = (function (e) {
            let {
              config: t,
              src: r,
              unoptimized: n,
              width: i,
              quality: s,
              sizes: a,
              loader: o,
            } = e;
            if (n) return { src: r, srcSet: void 0, sizes: void 0 };
            let { widths: l, kind: u } = (function (e, t, r) {
                let { deviceSizes: n, allSizes: i } = e;
                if (r) {
                  let e = /(^|\s)(1?\d?\d)vw/g,
                    t = [];
                  for (let n; (n = e.exec(r)); ) t.push(parseInt(n[2]));
                  if (t.length) {
                    let e = 0.01 * Math.min(...t);
                    return {
                      widths: i.filter((t) => t >= n[0] * e),
                      kind: "w",
                    };
                  }
                  return { widths: i, kind: "w" };
                }
                return "number" != typeof t
                  ? { widths: n, kind: "w" }
                  : {
                      widths: [
                        ...new Set(
                          [t, 2 * t].map(
                            (e) => i.find((t) => t >= e) || i[i.length - 1]
                          )
                        ),
                      ],
                      kind: "x",
                    };
              })(t, i, a),
              f = l.length - 1;
            return {
              sizes: a || "w" !== u ? a : "100vw",
              srcSet: l
                .map(
                  (e, n) =>
                    o({ config: t, src: r, quality: s, width: e }) +
                    " " +
                    ("w" === u ? e : n + 1) +
                    u
                )
                .join(", "),
              src: o({ config: t, src: r, quality: s, width: l[f] }),
            };
          })({
            config: u,
            src: d,
            unoptimized: p,
            width: Q,
            quality: J,
            sizes: h,
            loader: z,
          });
        return {
          props: {
            ...L,
            loading: V ? "lazy" : g,
            fetchPriority: O,
            width: Q,
            height: H,
            decoding: I,
            className: m,
            style: { ...K, ...Y },
            sizes: X.sizes,
            srcSet: X.srcSet,
            src: E || X.src,
          },
          meta: { unoptimized: p, priority: b, placeholder: S, fill: A },
        };
      }
    },
    41755: (e, t, r) => {
      "use strict";
      r.d(t, { V: () => u });
      var n = r(29592),
        i = r(50797);
      let s = {};
      function a(e, t) {
        let r = !1;
        return (
          t < 0 && ((r = !0), (t *= -1)),
          new u(s, `${r ? "" : "u"}int${t}`, e, { signed: r, width: t })
        );
      }
      function o(e, t) {
        return new u(s, `bytes${t || ""}`, e, { size: t });
      }
      let l = Symbol.for("_ethers_typed");
      class u {
        type;
        value;
        #O;
        _typedSymbol;
        constructor(e, t, r, a) {
          null == a && (a = null),
            (0, n.gk)(s, e, "Typed"),
            (0, i.n)(this, { _typedSymbol: l, type: t, value: r }),
            (this.#O = a),
            this.format();
        }
        format() {
          if ("array" === this.type || "dynamicArray" === this.type)
            throw Error("");
          return "tuple" === this.type
            ? `tuple(${this.value.map((e) => e.format()).join(",")})`
            : this.type;
        }
        defaultValue() {
          return 0;
        }
        minValue() {
          return 0;
        }
        maxValue() {
          return 0;
        }
        isBigInt() {
          return !!this.type.match(/^u?int[0-9]+$/);
        }
        isData() {
          return this.type.startsWith("bytes");
        }
        isString() {
          return "string" === this.type;
        }
        get tupleName() {
          if ("tuple" !== this.type) throw TypeError("not a tuple");
          return this.#O;
        }
        get arrayLength() {
          if ("array" !== this.type) throw TypeError("not an array");
          return !0 === this.#O
            ? -1
            : !1 === this.#O
            ? this.value.length
            : null;
        }
        static from(e, t) {
          return new u(s, e, t);
        }
        static uint8(e) {
          return a(e, 8);
        }
        static uint16(e) {
          return a(e, 16);
        }
        static uint24(e) {
          return a(e, 24);
        }
        static uint32(e) {
          return a(e, 32);
        }
        static uint40(e) {
          return a(e, 40);
        }
        static uint48(e) {
          return a(e, 48);
        }
        static uint56(e) {
          return a(e, 56);
        }
        static uint64(e) {
          return a(e, 64);
        }
        static uint72(e) {
          return a(e, 72);
        }
        static uint80(e) {
          return a(e, 80);
        }
        static uint88(e) {
          return a(e, 88);
        }
        static uint96(e) {
          return a(e, 96);
        }
        static uint104(e) {
          return a(e, 104);
        }
        static uint112(e) {
          return a(e, 112);
        }
        static uint120(e) {
          return a(e, 120);
        }
        static uint128(e) {
          return a(e, 128);
        }
        static uint136(e) {
          return a(e, 136);
        }
        static uint144(e) {
          return a(e, 144);
        }
        static uint152(e) {
          return a(e, 152);
        }
        static uint160(e) {
          return a(e, 160);
        }
        static uint168(e) {
          return a(e, 168);
        }
        static uint176(e) {
          return a(e, 176);
        }
        static uint184(e) {
          return a(e, 184);
        }
        static uint192(e) {
          return a(e, 192);
        }
        static uint200(e) {
          return a(e, 200);
        }
        static uint208(e) {
          return a(e, 208);
        }
        static uint216(e) {
          return a(e, 216);
        }
        static uint224(e) {
          return a(e, 224);
        }
        static uint232(e) {
          return a(e, 232);
        }
        static uint240(e) {
          return a(e, 240);
        }
        static uint248(e) {
          return a(e, 248);
        }
        static uint256(e) {
          return a(e, 256);
        }
        static uint(e) {
          return a(e, 256);
        }
        static int8(e) {
          return a(e, -8);
        }
        static int16(e) {
          return a(e, -16);
        }
        static int24(e) {
          return a(e, -24);
        }
        static int32(e) {
          return a(e, -32);
        }
        static int40(e) {
          return a(e, -40);
        }
        static int48(e) {
          return a(e, -48);
        }
        static int56(e) {
          return a(e, -56);
        }
        static int64(e) {
          return a(e, -64);
        }
        static int72(e) {
          return a(e, -72);
        }
        static int80(e) {
          return a(e, -80);
        }
        static int88(e) {
          return a(e, -88);
        }
        static int96(e) {
          return a(e, -96);
        }
        static int104(e) {
          return a(e, -104);
        }
        static int112(e) {
          return a(e, -112);
        }
        static int120(e) {
          return a(e, -120);
        }
        static int128(e) {
          return a(e, -128);
        }
        static int136(e) {
          return a(e, -136);
        }
        static int144(e) {
          return a(e, -144);
        }
        static int152(e) {
          return a(e, -152);
        }
        static int160(e) {
          return a(e, -160);
        }
        static int168(e) {
          return a(e, -168);
        }
        static int176(e) {
          return a(e, -176);
        }
        static int184(e) {
          return a(e, -184);
        }
        static int192(e) {
          return a(e, -192);
        }
        static int200(e) {
          return a(e, -200);
        }
        static int208(e) {
          return a(e, -208);
        }
        static int216(e) {
          return a(e, -216);
        }
        static int224(e) {
          return a(e, -224);
        }
        static int232(e) {
          return a(e, -232);
        }
        static int240(e) {
          return a(e, -240);
        }
        static int248(e) {
          return a(e, -248);
        }
        static int256(e) {
          return a(e, -256);
        }
        static int(e) {
          return a(e, -256);
        }
        static bytes1(e) {
          return o(e, 1);
        }
        static bytes2(e) {
          return o(e, 2);
        }
        static bytes3(e) {
          return o(e, 3);
        }
        static bytes4(e) {
          return o(e, 4);
        }
        static bytes5(e) {
          return o(e, 5);
        }
        static bytes6(e) {
          return o(e, 6);
        }
        static bytes7(e) {
          return o(e, 7);
        }
        static bytes8(e) {
          return o(e, 8);
        }
        static bytes9(e) {
          return o(e, 9);
        }
        static bytes10(e) {
          return o(e, 10);
        }
        static bytes11(e) {
          return o(e, 11);
        }
        static bytes12(e) {
          return o(e, 12);
        }
        static bytes13(e) {
          return o(e, 13);
        }
        static bytes14(e) {
          return o(e, 14);
        }
        static bytes15(e) {
          return o(e, 15);
        }
        static bytes16(e) {
          return o(e, 16);
        }
        static bytes17(e) {
          return o(e, 17);
        }
        static bytes18(e) {
          return o(e, 18);
        }
        static bytes19(e) {
          return o(e, 19);
        }
        static bytes20(e) {
          return o(e, 20);
        }
        static bytes21(e) {
          return o(e, 21);
        }
        static bytes22(e) {
          return o(e, 22);
        }
        static bytes23(e) {
          return o(e, 23);
        }
        static bytes24(e) {
          return o(e, 24);
        }
        static bytes25(e) {
          return o(e, 25);
        }
        static bytes26(e) {
          return o(e, 26);
        }
        static bytes27(e) {
          return o(e, 27);
        }
        static bytes28(e) {
          return o(e, 28);
        }
        static bytes29(e) {
          return o(e, 29);
        }
        static bytes30(e) {
          return o(e, 30);
        }
        static bytes31(e) {
          return o(e, 31);
        }
        static bytes32(e) {
          return o(e, 32);
        }
        static address(e) {
          return new u(s, "address", e);
        }
        static bool(e) {
          return new u(s, "bool", !!e);
        }
        static bytes(e) {
          return new u(s, "bytes", e);
        }
        static string(e) {
          return new u(s, "string", e);
        }
        static array(e, t) {
          throw Error("not implemented yet");
        }
        static tuple(e, t) {
          throw Error("not implemented yet");
        }
        static overrides(e) {
          return new u(s, "overrides", Object.assign({}, e));
        }
        static isTyped(e) {
          return (
            e &&
            "object" == typeof e &&
            "_typedSymbol" in e &&
            e._typedSymbol === l
          );
        }
        static dereference(e, t) {
          if (u.isTyped(e)) {
            if (e.type !== t)
              throw Error(`invalid type: expecetd ${t}, got ${e.type}`);
            return e.value;
          }
          return e;
        }
      }
    },
    42464: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "AmpStateContext", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = r(88229)._(r(12115)).default.createContext({});
    },
    42539: (e, t, r) => {
      "use strict";
      var n = r(23124);
      function i(e) {
        return (
          ((e >>> 24) |
            ((e >>> 8) & 65280) |
            ((e << 8) & 0xff0000) |
            ((255 & e) << 24)) >>>
          0
        );
      }
      function s(e) {
        return 1 === e.length ? "0" + e : e;
      }
      function a(e) {
        if (7 === e.length) return "0" + e;
        if (6 === e.length) return "00" + e;
        if (5 === e.length) return "000" + e;
        if (4 === e.length) return "0000" + e;
        if (3 === e.length) return "00000" + e;
        else if (2 === e.length) return "000000" + e;
        else if (1 === e.length) return "0000000" + e;
        else return e;
      }
      (t.inherits = r(84115)),
        (t.toArray = function (e, t) {
          if (Array.isArray(e)) return e.slice();
          if (!e) return [];
          var r = [];
          if ("string" == typeof e)
            if (t) {
              if ("hex" === t)
                for (
                  (e = e.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 &&
                    (e = "0" + e),
                    i = 0;
                  i < e.length;
                  i += 2
                )
                  r.push(parseInt(e[i] + e[i + 1], 16));
            } else
              for (var n = 0, i = 0; i < e.length; i++) {
                var s,
                  a,
                  o = e.charCodeAt(i);
                o < 128
                  ? (r[n++] = o)
                  : (o < 2048
                      ? (r[n++] = (o >> 6) | 192)
                      : (((s = e),
                        (a = i),
                        (64512 & s.charCodeAt(a)) != 55296 ||
                        a < 0 ||
                        a + 1 >= s.length
                          ? 1
                          : (64512 & s.charCodeAt(a + 1)) != 56320)
                          ? (r[n++] = (o >> 12) | 224)
                          : ((o =
                              65536 +
                              ((1023 & o) << 10) +
                              (1023 & e.charCodeAt(++i))),
                            (r[n++] = (o >> 18) | 240),
                            (r[n++] = ((o >> 12) & 63) | 128)),
                        (r[n++] = ((o >> 6) & 63) | 128)),
                    (r[n++] = (63 & o) | 128));
              }
          else for (i = 0; i < e.length; i++) r[i] = 0 | e[i];
          return r;
        }),
        (t.toHex = function (e) {
          for (var t = "", r = 0; r < e.length; r++) t += s(e[r].toString(16));
          return t;
        }),
        (t.htonl = i),
        (t.toHex32 = function (e, t) {
          for (var r = "", n = 0; n < e.length; n++) {
            var s = e[n];
            "little" === t && (s = i(s)), (r += a(s.toString(16)));
          }
          return r;
        }),
        (t.zero2 = s),
        (t.zero8 = a),
        (t.join32 = function (e, t, r, i) {
          var s,
            a = r - t;
          n(a % 4 == 0);
          for (var o = Array(a / 4), l = 0, u = t; l < o.length; l++, u += 4)
            (s =
              "big" === i
                ? (e[u] << 24) | (e[u + 1] << 16) | (e[u + 2] << 8) | e[u + 3]
                : (e[u + 3] << 24) | (e[u + 2] << 16) | (e[u + 1] << 8) | e[u]),
              (o[l] = s >>> 0);
          return o;
        }),
        (t.split32 = function (e, t) {
          for (
            var r = Array(4 * e.length), n = 0, i = 0;
            n < e.length;
            n++, i += 4
          ) {
            var s = e[n];
            "big" === t
              ? ((r[i] = s >>> 24),
                (r[i + 1] = (s >>> 16) & 255),
                (r[i + 2] = (s >>> 8) & 255),
                (r[i + 3] = 255 & s))
              : ((r[i + 3] = s >>> 24),
                (r[i + 2] = (s >>> 16) & 255),
                (r[i + 1] = (s >>> 8) & 255),
                (r[i] = 255 & s));
          }
          return r;
        }),
        (t.rotr32 = function (e, t) {
          return (e >>> t) | (e << (32 - t));
        }),
        (t.rotl32 = function (e, t) {
          return (e << t) | (e >>> (32 - t));
        }),
        (t.sum32 = function (e, t) {
          return (e + t) >>> 0;
        }),
        (t.sum32_3 = function (e, t, r) {
          return (e + t + r) >>> 0;
        }),
        (t.sum32_4 = function (e, t, r, n) {
          return (e + t + r + n) >>> 0;
        }),
        (t.sum32_5 = function (e, t, r, n, i) {
          return (e + t + r + n + i) >>> 0;
        }),
        (t.sum64 = function (e, t, r, n) {
          var i = e[t],
            s = (n + e[t + 1]) >>> 0;
          (e[t] = (+(s < n) + r + i) >>> 0), (e[t + 1] = s);
        }),
        (t.sum64_hi = function (e, t, r, n) {
          return (+((t + n) >>> 0 < t) + e + r) >>> 0;
        }),
        (t.sum64_lo = function (e, t, r, n) {
          return (t + n) >>> 0;
        }),
        (t.sum64_4_hi = function (e, t, r, n, i, s, a, o) {
          var l,
            u = t;
          return (
            (e +
              r +
              i +
              a +
              (l =
                0 +
                +((u = (u + n) >>> 0) < t) +
                +((u = (u + s) >>> 0) < s) +
                +((u = (u + o) >>> 0) < o))) >>>
            0
          );
        }),
        (t.sum64_4_lo = function (e, t, r, n, i, s, a, o) {
          return (t + n + s + o) >>> 0;
        }),
        (t.sum64_5_hi = function (e, t, r, n, i, s, a, o, l, u) {
          var f,
            c = t;
          return (
            (e +
              r +
              i +
              a +
              l +
              (f =
                0 +
                +((c = (c + n) >>> 0) < t) +
                +((c = (c + s) >>> 0) < s) +
                +((c = (c + o) >>> 0) < o) +
                +((c = (c + u) >>> 0) < u))) >>>
            0
          );
        }),
        (t.sum64_5_lo = function (e, t, r, n, i, s, a, o, l, u) {
          return (t + n + s + o + u) >>> 0;
        }),
        (t.rotr64_hi = function (e, t, r) {
          return ((t << (32 - r)) | (e >>> r)) >>> 0;
        }),
        (t.rotr64_lo = function (e, t, r) {
          return ((e << (32 - r)) | (t >>> r)) >>> 0;
        }),
        (t.shr64_hi = function (e, t, r) {
          return e >>> r;
        }),
        (t.shr64_lo = function (e, t, r) {
          return ((e << (32 - r)) | (t >>> r)) >>> 0;
        });
    },
    44532: (e, t, r) => {
      "use strict";
      r.d(t, {
        Lm: () => a,
        Lo: () => o,
        X_: () => g,
        ZG: () => h,
        c$: () => f,
        f: () => l,
        nx: () => b,
        pO: () => d,
        q5: () => s,
        xW: () => c,
      });
      var n = r(29592);
      function i(e, t, r) {
        if (e instanceof Uint8Array) return r ? new Uint8Array(e) : e;
        if ("string" == typeof e && e.match(/^0x(?:[0-9a-f][0-9a-f])*$/i)) {
          let t = new Uint8Array((e.length - 2) / 2),
            r = 2;
          for (let n = 0; n < t.length; n++)
            (t[n] = parseInt(e.substring(r, r + 2), 16)), (r += 2);
          return t;
        }
        (0, n.MR)(!1, "invalid BytesLike value", t || "value", e);
      }
      function s(e, t) {
        return i(e, t, !1);
      }
      function a(e, t) {
        return i(e, t, !0);
      }
      function o(e, t) {
        return (
          "string" == typeof e &&
          !!e.match(/^0x[0-9A-Fa-f]*$/) &&
          ("number" != typeof t || e.length === 2 + 2 * t) &&
          (!0 !== t || e.length % 2 == 0)
        );
      }
      function l(e) {
        return o(e, !0) || e instanceof Uint8Array;
      }
      let u = "0123456789abcdef";
      function f(e) {
        let t = s(e),
          r = "0x";
        for (let e = 0; e < t.length; e++) {
          let n = t[e];
          r += u[(240 & n) >> 4] + u[15 & n];
        }
        return r;
      }
      function c(e) {
        return "0x" + e.map((e) => f(e).substring(2)).join("");
      }
      function d(e) {
        return o(e, !0) ? (e.length - 2) / 2 : s(e).length;
      }
      function h(e, t, r) {
        let i = s(e);
        return (
          null != r &&
            r > i.length &&
            (0, n.vA)(!1, "cannot slice beyond data bounds", "BUFFER_OVERRUN", {
              buffer: i,
              length: i.length,
              offset: r,
            }),
          f(i.slice(null == t ? 0 : t, null == r ? i.length : r))
        );
      }
      function p(e, t, r) {
        let i = s(e);
        (0, n.vA)(
          t >= i.length,
          "padding exceeds data length",
          "BUFFER_OVERRUN",
          { buffer: new Uint8Array(i), length: t, offset: t + 1 }
        );
        let a = new Uint8Array(t);
        return a.fill(0), r ? a.set(i, t - i.length) : a.set(i, 0), f(a);
      }
      function b(e, t) {
        return p(e, t, !0);
      }
      function g(e, t) {
        return p(e, t, !1);
      }
    },
    45566: (e, t, r) => {
      "use strict";
      e.exports = r(72312);
    },
    49458: (e) => {
      e.exports = {
        doubles: {
          step: 4,
          points: [
            [
              "e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a",
              "f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821",
            ],
            [
              "8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508",
              "11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf",
            ],
            [
              "175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739",
              "d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695",
            ],
            [
              "363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640",
              "4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9",
            ],
            [
              "8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c",
              "4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36",
            ],
            [
              "723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda",
              "96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f",
            ],
            [
              "eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa",
              "5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999",
            ],
            [
              "100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0",
              "cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09",
            ],
            [
              "e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d",
              "9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d",
            ],
            [
              "feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d",
              "e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088",
            ],
            [
              "da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1",
              "9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d",
            ],
            [
              "53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0",
              "5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8",
            ],
            [
              "8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047",
              "10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a",
            ],
            [
              "385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862",
              "283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453",
            ],
            [
              "6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7",
              "7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160",
            ],
            [
              "3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd",
              "56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0",
            ],
            [
              "85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83",
              "7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6",
            ],
            [
              "948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a",
              "53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589",
            ],
            [
              "6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8",
              "bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17",
            ],
            [
              "e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d",
              "4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda",
            ],
            [
              "e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725",
              "7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd",
            ],
            [
              "213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754",
              "4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2",
            ],
            [
              "4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c",
              "17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6",
            ],
            [
              "fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6",
              "6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f",
            ],
            [
              "76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39",
              "c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01",
            ],
            [
              "c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891",
              "893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3",
            ],
            [
              "d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b",
              "febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f",
            ],
            [
              "b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03",
              "2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7",
            ],
            [
              "e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d",
              "eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78",
            ],
            [
              "a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070",
              "7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1",
            ],
            [
              "90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4",
              "e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150",
            ],
            [
              "8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da",
              "662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82",
            ],
            [
              "e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11",
              "1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc",
            ],
            [
              "8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e",
              "efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b",
            ],
            [
              "e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41",
              "2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51",
            ],
            [
              "b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef",
              "67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45",
            ],
            [
              "d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8",
              "db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120",
            ],
            [
              "324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d",
              "648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84",
            ],
            [
              "4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96",
              "35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d",
            ],
            [
              "9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd",
              "ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d",
            ],
            [
              "6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5",
              "9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8",
            ],
            [
              "a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266",
              "40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8",
            ],
            [
              "7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71",
              "34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac",
            ],
            [
              "928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac",
              "c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f",
            ],
            [
              "85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751",
              "1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962",
            ],
            [
              "ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e",
              "493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907",
            ],
            [
              "827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241",
              "c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec",
            ],
            [
              "eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3",
              "be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d",
            ],
            [
              "e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f",
              "4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414",
            ],
            [
              "1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19",
              "aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd",
            ],
            [
              "146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be",
              "b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0",
            ],
            [
              "fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9",
              "6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811",
            ],
            [
              "da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2",
              "8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1",
            ],
            [
              "a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13",
              "7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c",
            ],
            [
              "174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c",
              "ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73",
            ],
            [
              "959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba",
              "2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd",
            ],
            [
              "d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151",
              "e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405",
            ],
            [
              "64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073",
              "d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589",
            ],
            [
              "8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458",
              "38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e",
            ],
            [
              "13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b",
              "69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27",
            ],
            [
              "bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366",
              "d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1",
            ],
            [
              "8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa",
              "40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482",
            ],
            [
              "8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0",
              "620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945",
            ],
            [
              "dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787",
              "7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573",
            ],
            [
              "f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e",
              "ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82",
            ],
          ],
        },
        naf: {
          wnd: 7,
          points: [
            [
              "f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9",
              "388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672",
            ],
            [
              "2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4",
              "d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6",
            ],
            [
              "5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc",
              "6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da",
            ],
            [
              "acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe",
              "cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37",
            ],
            [
              "774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb",
              "d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b",
            ],
            [
              "f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8",
              "ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81",
            ],
            [
              "d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e",
              "581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58",
            ],
            [
              "defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34",
              "4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77",
            ],
            [
              "2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c",
              "85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a",
            ],
            [
              "352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5",
              "321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c",
            ],
            [
              "2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f",
              "2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67",
            ],
            [
              "9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714",
              "73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402",
            ],
            [
              "daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729",
              "a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55",
            ],
            [
              "c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db",
              "2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482",
            ],
            [
              "6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4",
              "e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82",
            ],
            [
              "1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5",
              "b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396",
            ],
            [
              "605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479",
              "2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49",
            ],
            [
              "62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d",
              "80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf",
            ],
            [
              "80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f",
              "1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a",
            ],
            [
              "7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb",
              "d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7",
            ],
            [
              "d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9",
              "eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933",
            ],
            [
              "49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963",
              "758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a",
            ],
            [
              "77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74",
              "958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6",
            ],
            [
              "f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530",
              "e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37",
            ],
            [
              "463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b",
              "5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e",
            ],
            [
              "f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247",
              "cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6",
            ],
            [
              "caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1",
              "cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476",
            ],
            [
              "2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120",
              "4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40",
            ],
            [
              "7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435",
              "91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61",
            ],
            [
              "754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18",
              "673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683",
            ],
            [
              "e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8",
              "59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5",
            ],
            [
              "186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb",
              "3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b",
            ],
            [
              "df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f",
              "55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417",
            ],
            [
              "5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143",
              "efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868",
            ],
            [
              "290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba",
              "e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a",
            ],
            [
              "af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45",
              "f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6",
            ],
            [
              "766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a",
              "744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996",
            ],
            [
              "59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e",
              "c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e",
            ],
            [
              "f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8",
              "e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d",
            ],
            [
              "7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c",
              "30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2",
            ],
            [
              "948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519",
              "e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e",
            ],
            [
              "7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab",
              "100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437",
            ],
            [
              "3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca",
              "ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311",
            ],
            [
              "d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf",
              "8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4",
            ],
            [
              "1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610",
              "68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575",
            ],
            [
              "733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4",
              "f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d",
            ],
            [
              "15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c",
              "d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d",
            ],
            [
              "a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940",
              "edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629",
            ],
            [
              "e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980",
              "a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06",
            ],
            [
              "311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3",
              "66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374",
            ],
            [
              "34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf",
              "9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee",
            ],
            [
              "f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63",
              "4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1",
            ],
            [
              "d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448",
              "fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b",
            ],
            [
              "32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf",
              "5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661",
            ],
            [
              "7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5",
              "8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6",
            ],
            [
              "ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6",
              "8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e",
            ],
            [
              "16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5",
              "5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d",
            ],
            [
              "eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99",
              "f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc",
            ],
            [
              "78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51",
              "f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4",
            ],
            [
              "494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5",
              "42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c",
            ],
            [
              "a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5",
              "204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b",
            ],
            [
              "c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997",
              "4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913",
            ],
            [
              "841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881",
              "73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154",
            ],
            [
              "5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5",
              "39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865",
            ],
            [
              "36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66",
              "d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc",
            ],
            [
              "336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726",
              "ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224",
            ],
            [
              "8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede",
              "6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e",
            ],
            [
              "1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94",
              "60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6",
            ],
            [
              "85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31",
              "3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511",
            ],
            [
              "29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51",
              "b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b",
            ],
            [
              "a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252",
              "ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2",
            ],
            [
              "4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5",
              "cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c",
            ],
            [
              "d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b",
              "6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3",
            ],
            [
              "ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4",
              "322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d",
            ],
            [
              "af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f",
              "6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700",
            ],
            [
              "e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889",
              "2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4",
            ],
            [
              "591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246",
              "b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196",
            ],
            [
              "11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984",
              "998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4",
            ],
            [
              "3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a",
              "b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257",
            ],
            [
              "cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030",
              "bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13",
            ],
            [
              "c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197",
              "6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096",
            ],
            [
              "c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593",
              "c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38",
            ],
            [
              "a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef",
              "21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f",
            ],
            [
              "347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38",
              "60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448",
            ],
            [
              "da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a",
              "49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a",
            ],
            [
              "c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111",
              "5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4",
            ],
            [
              "4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502",
              "7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437",
            ],
            [
              "3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea",
              "be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7",
            ],
            [
              "cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26",
              "8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d",
            ],
            [
              "b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986",
              "39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a",
            ],
            [
              "d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e",
              "62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54",
            ],
            [
              "48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4",
              "25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77",
            ],
            [
              "dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda",
              "ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517",
            ],
            [
              "6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859",
              "cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10",
            ],
            [
              "e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f",
              "f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125",
            ],
            [
              "eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c",
              "6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e",
            ],
            [
              "13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942",
              "fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1",
            ],
            [
              "ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a",
              "1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2",
            ],
            [
              "b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80",
              "5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423",
            ],
            [
              "ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d",
              "438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8",
            ],
            [
              "8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1",
              "cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758",
            ],
            [
              "52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63",
              "c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375",
            ],
            [
              "e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352",
              "6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d",
            ],
            [
              "7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193",
              "ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec",
            ],
            [
              "5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00",
              "9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0",
            ],
            [
              "32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58",
              "ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c",
            ],
            [
              "e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7",
              "d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4",
            ],
            [
              "8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8",
              "c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f",
            ],
            [
              "4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e",
              "67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649",
            ],
            [
              "3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d",
              "cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826",
            ],
            [
              "674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b",
              "299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5",
            ],
            [
              "d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f",
              "f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87",
            ],
            [
              "30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6",
              "462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b",
            ],
            [
              "be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297",
              "62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc",
            ],
            [
              "93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a",
              "7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c",
            ],
            [
              "b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c",
              "ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f",
            ],
            [
              "d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52",
              "4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a",
            ],
            [
              "d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb",
              "bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46",
            ],
            [
              "463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065",
              "bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f",
            ],
            [
              "7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917",
              "603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03",
            ],
            [
              "74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9",
              "cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08",
            ],
            [
              "30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3",
              "553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8",
            ],
            [
              "9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57",
              "712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373",
            ],
            [
              "176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66",
              "ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3",
            ],
            [
              "75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8",
              "9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8",
            ],
            [
              "809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721",
              "9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1",
            ],
            [
              "1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180",
              "4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9",
            ],
          ],
        },
      };
    },
    50797: (e, t, r) => {
      "use strict";
      async function n(e) {
        let t = Object.keys(e);
        return (await Promise.all(t.map((t) => Promise.resolve(e[t])))).reduce(
          (e, r, n) => ((e[t[n]] = r), e),
          {}
        );
      }
      function i(e, t, r) {
        for (let n in t) {
          let i = t[n],
            s = r ? r[n] : null;
          s &&
            (function (e, t, r) {
              let n = t.split("|").map((e) => e.trim());
              for (let r = 0; r < n.length; r++)
                switch (t) {
                  case "any":
                    return;
                  case "bigint":
                  case "boolean":
                  case "number":
                  case "string":
                    if (typeof e === t) return;
                }
              let i = Error(`invalid value for type ${t}`);
              throw (
                ((i.code = "INVALID_ARGUMENT"),
                (i.argument = `value.${r}`),
                (i.value = e),
                i)
              );
            })(i, s, n),
            Object.defineProperty(e, n, {
              enumerable: !0,
              value: i,
              writable: !1,
            });
        }
      }
      r.d(t, { k: () => n, n: () => i });
    },
    51193: (e, t) => {
      "use strict";
      function r(e) {
        var t;
        let { config: r, src: n, width: i, quality: s } = e,
          a =
            s ||
            (null == (t = r.qualities)
              ? void 0
              : t.reduce((e, t) =>
                  Math.abs(t - 75) < Math.abs(e - 75) ? t : e
                )) ||
            75;
        return (
          r.path +
          "?url=" +
          encodeURIComponent(n) +
          "&w=" +
          i +
          "&q=" +
          a +
          (n.startsWith("/_next/static/media/"), "")
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        (r.__next_img_default = !0);
      let n = r;
    },
    51368: (e, t, r) => {
      "use strict";
      let n;
      r.d(t, { A: () => o });
      let i = {
          randomUUID:
            "undefined" != typeof crypto &&
            crypto.randomUUID &&
            crypto.randomUUID.bind(crypto),
        },
        s = new Uint8Array(16),
        a = [];
      for (let e = 0; e < 256; ++e) a.push((e + 256).toString(16).slice(1));
      let o = function (e, t, r) {
        if (i.randomUUID && !t && !e) return i.randomUUID();
        let o =
          (e = e || {}).random ??
          e.rng?.() ??
          (function () {
            if (!n) {
              if ("undefined" == typeof crypto || !crypto.getRandomValues)
                throw Error(
                  "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
                );
              n = crypto.getRandomValues.bind(crypto);
            }
            return n(s);
          })();
        if (o.length < 16) throw Error("Random bytes length must be >= 16");
        if (((o[6] = (15 & o[6]) | 64), (o[8] = (63 & o[8]) | 128), t)) {
          if ((r = r || 0) < 0 || r + 16 > t.length)
            throw RangeError(
              `UUID byte range ${r}:${r + 15} is out of buffer bounds`
            );
          for (let e = 0; e < 16; ++e) t[r + e] = o[e];
          return t;
        }
        return (function (e, t = 0) {
          return (
            a[e[t + 0]] +
            a[e[t + 1]] +
            a[e[t + 2]] +
            a[e[t + 3]] +
            "-" +
            a[e[t + 4]] +
            a[e[t + 5]] +
            "-" +
            a[e[t + 6]] +
            a[e[t + 7]] +
            "-" +
            a[e[t + 8]] +
            a[e[t + 9]] +
            "-" +
            a[e[t + 10]] +
            a[e[t + 11]] +
            a[e[t + 12]] +
            a[e[t + 13]] +
            a[e[t + 14]] +
            a[e[t + 15]]
          ).toLowerCase();
        })(o);
      };
    },
    54332: (e, t, r) => {
      "use strict";
      let n, i, s, a, o, l, u, f, c, d, h, p, b, g, m, y;
      r.d(t, { _y: () => nI, FR: () => nk });
      var v = {};
      r.r(v),
        r.d(v, {
          OG: () => tI,
          My: () => tw,
          Ph: () => tE,
          lX: () => tR,
          Id: () => tO,
          fg: () => tC,
          qj: () => tP,
          aT: () => tx,
          lq: () => tM,
          z: () => tS,
          Q5: () => tT,
        });
      var w = r(71326),
        A = r(62037),
        x = r(25062),
        E = r(16284),
        R = r(44532),
        M = r(91339),
        S = r(29592),
        P = r(50797),
        O = r(84402);
      let I = new Uint8Array(32);
      I.fill(0);
      let k = BigInt(-1),
        N = BigInt(0),
        C = BigInt(1),
        B = BigInt(
          "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
        ),
        T = (0, M.up)(C, 32),
        L = (0, M.up)(N, 32),
        U = {
          name: "string",
          version: "string",
          chainId: "uint256",
          verifyingContract: "address",
          salt: "bytes32",
        },
        F = ["name", "version", "chainId", "verifyingContract", "salt"];
      function _(e) {
        return function (t) {
          return (
            (0, S.MR)(
              "string" == typeof t,
              `invalid domain value for ${JSON.stringify(e)}`,
              `domain.${e}`,
              t
            ),
            t
          );
        };
      }
      let D = {
        name: _("name"),
        version: _("version"),
        chainId: function (e) {
          let t = (0, M.Ab)(e, "domain.chainId");
          return ((0, S.MR)(t >= 0, "invalid chain ID", "domain.chainId", e),
          Number.isSafeInteger(t))
            ? Number(t)
            : (0, M.nD)(t);
        },
        verifyingContract: function (e) {
          try {
            return (0, A.b)(e).toLowerCase();
          } catch (e) {}
          (0, S.MR)(
            !1,
            'invalid domain value "verifyingContract"',
            "domain.verifyingContract",
            e
          );
        },
        salt: function (e) {
          let t = (0, R.q5)(e, "domain.salt");
          return (
            (0, S.MR)(
              32 === t.length,
              'invalid domain value "salt"',
              "domain.salt",
              e
            ),
            (0, R.c$)(t)
          );
        },
      };
      function j(e) {
        {
          let t = e.match(/^(u?)int(\d+)$/);
          if (t) {
            let r = "" === t[1],
              n = parseInt(t[2]);
            (0, S.MR)(
              n % 8 == 0 && 0 !== n && n <= 256 && t[2] === String(n),
              "invalid numeric width",
              "type",
              e
            );
            let i = (0, M.dK)(B, r ? n - 1 : n),
              s = r ? (i + C) * k : N;
            return function (t) {
              let n = (0, M.Ab)(t, "value");
              return (
                (0, S.MR)(
                  n >= s && n <= i,
                  `value out-of-bounds for ${e}`,
                  "value",
                  n
                ),
                (0, M.up)(r ? (0, M.JJ)(n, 256) : n, 32)
              );
            };
          }
        }
        {
          let t = e.match(/^bytes(\d+)$/);
          if (t) {
            let r = parseInt(t[1]);
            return (
              (0, S.MR)(
                0 !== r && r <= 32 && t[1] === String(r),
                "invalid bytes width",
                "type",
                e
              ),
              function (t) {
                let n = (0, R.q5)(t);
                (0, S.MR)(
                  n.length === r,
                  `invalid length for ${e}`,
                  "value",
                  t
                );
                let i = (0, R.q5)(t),
                  s = i.length % 32;
                return s ? (0, R.xW)([i, I.slice(s)]) : (0, R.c$)(i);
              }
            );
          }
        }
        switch (e) {
          case "address":
            return function (e) {
              return (0, R.nx)((0, A.b)(e), 32);
            };
          case "bool":
            return function (e) {
              return e ? T : L;
            };
          case "bytes":
            return function (e) {
              return (0, E.S)(e);
            };
          case "string":
            return function (e) {
              return (0, O.id)(e);
            };
        }
        return null;
      }
      function z(e, t) {
        return `${e}(${t
          .map(({ name: e, type: t }) => t + " " + e)
          .join(",")})`;
      }
      function G(e) {
        let t = e.match(/^([^\x5b]*)((\x5b\d*\x5d)*)(\x5b(\d*)\x5d)$/);
        return t
          ? {
              base: t[1],
              index: t[2] + t[4],
              array: {
                base: t[1],
                prefix: t[1] + t[2],
                count: t[5] ? parseInt(t[5]) : -1,
              },
            }
          : { base: e };
      }
      class q {
        primaryType;
        #I;
        get types() {
          return JSON.parse(this.#I);
        }
        #k;
        #N;
        constructor(e) {
          (this.#k = new Map()), (this.#N = new Map());
          let t = new Map(),
            r = new Map(),
            n = new Map(),
            i = {};
          for (let s in (Object.keys(e).forEach((s) => {
            (i[s] = e[s].map(({ name: t, type: r }) => {
              let { base: n, index: i } = G(r);
              return (
                "int" !== n || e.int || (n = "int256"),
                "uint" !== n || e.uint || (n = "uint256"),
                { name: t, type: n + (i || "") }
              );
            })),
              t.set(s, new Set()),
              r.set(s, []),
              n.set(s, new Set());
          }),
          (this.#I = JSON.stringify(i)),
          i)) {
            let n = new Set();
            for (let a of i[s]) {
              (0, S.MR)(
                !n.has(a.name),
                `duplicate variable name ${JSON.stringify(
                  a.name
                )} in ${JSON.stringify(s)}`,
                "types",
                e
              ),
                n.add(a.name);
              let i = G(a.type).base;
              (0, S.MR)(
                i !== s,
                `circular type reference to ${JSON.stringify(i)}`,
                "types",
                e
              ),
                j(i) ||
                  ((0, S.MR)(
                    r.has(i),
                    `unknown type ${JSON.stringify(i)}`,
                    "types",
                    e
                  ),
                  r.get(i).push(s),
                  t.get(s).add(i));
            }
          }
          let s = Array.from(r.keys()).filter((e) => 0 === r.get(e).length);
          for (let [a, o] of ((0, S.MR)(
            0 !== s.length,
            "missing primary type",
            "types",
            e
          ),
          (0, S.MR)(
            1 === s.length,
            `ambiguous primary types or unused types: ${s
              .map((e) => JSON.stringify(e))
              .join(", ")}`,
            "types",
            e
          ),
          (0, P.n)(this, { primaryType: s[0] }),
          !(function i(s, a) {
            for (let o of ((0, S.MR)(
              !a.has(s),
              `circular type reference to ${JSON.stringify(s)}`,
              "types",
              e
            ),
            a.add(s),
            t.get(s)))
              if (r.has(o)) for (let e of (i(o, a), a)) n.get(e).add(o);
            a.delete(s);
          })(this.primaryType, new Set()),
          n)) {
            let e = Array.from(o);
            e.sort(),
              this.#k.set(a, z(a, i[a]) + e.map((e) => z(e, i[e])).join(""));
          }
        }
        getEncoder(e) {
          let t = this.#N.get(e);
          return t || ((t = this.#C(e)), this.#N.set(e, t)), t;
        }
        #C(e) {
          {
            let t = j(e);
            if (t) return t;
          }
          let t = G(e).array;
          if (t) {
            let e = t.prefix,
              r = this.getEncoder(e);
            return (n) => {
              (0, S.MR)(
                -1 === t.count || t.count === n.length,
                `array length mismatch; expected length ${t.count}`,
                "value",
                n
              );
              let i = n.map(r);
              return this.#k.has(e) && (i = i.map(E.S)), (0, E.S)((0, R.xW)(i));
            };
          }
          let r = this.types[e];
          if (r) {
            let t = (0, O.id)(this.#k.get(e));
            return (e) => {
              let n = r.map(({ name: t, type: r }) => {
                let n = this.getEncoder(r)(e[t]);
                return this.#k.has(r) ? (0, E.S)(n) : n;
              });
              return n.unshift(t), (0, R.xW)(n);
            };
          }
          (0, S.MR)(!1, `unknown type: ${e}`, "type", e);
        }
        encodeType(e) {
          let t = this.#k.get(e);
          return (
            (0, S.MR)(t, `unknown type: ${JSON.stringify(e)}`, "name", e), t
          );
        }
        encodeData(e, t) {
          return this.getEncoder(e)(t);
        }
        hashStruct(e, t) {
          return (0, E.S)(this.encodeData(e, t));
        }
        encode(e) {
          return this.encodeData(this.primaryType, e);
        }
        hash(e) {
          return this.hashStruct(this.primaryType, e);
        }
        _visit(e, t, r) {
          if (j(e)) return r(e, t);
          let n = G(e).array;
          if (n)
            return (
              (0, S.MR)(
                -1 === n.count || n.count === t.length,
                `array length mismatch; expected length ${n.count}`,
                "value",
                t
              ),
              t.map((e) => this._visit(n.prefix, e, r))
            );
          let i = this.types[e];
          if (i)
            return i.reduce(
              (e, { name: n, type: i }) => (
                (e[n] = this._visit(i, t[n], r)), e
              ),
              {}
            );
          (0, S.MR)(!1, `unknown type: ${e}`, "type", e);
        }
        visit(e, t) {
          return this._visit(this.primaryType, e, t);
        }
        static from(e) {
          return new q(e);
        }
        static getPrimaryType(e) {
          return q.from(e).primaryType;
        }
        static hashStruct(e, t, r) {
          return q.from(t).hashStruct(e, r);
        }
        static hashDomain(e) {
          let t = [];
          for (let r in e) {
            if (null == e[r]) continue;
            let n = U[r];
            (0, S.MR)(
              n,
              `invalid typed-data domain key: ${JSON.stringify(r)}`,
              "domain",
              e
            ),
              t.push({ name: r, type: n });
          }
          return (
            t.sort((e, t) => F.indexOf(e.name) - F.indexOf(t.name)),
            q.hashStruct("EIP712Domain", { EIP712Domain: t }, e)
          );
        }
        static encode(e, t, r) {
          return (0, R.xW)(["0x1901", q.hashDomain(e), q.from(t).hash(r)]);
        }
        static hash(e, t, r) {
          return (0, E.S)(q.encode(e, t, r));
        }
        static async resolveNames(e, t, r, n) {
          for (let t in (e = Object.assign({}, e))) null == e[t] && delete e[t];
          let i = {};
          e.verifyingContract &&
            !(0, R.Lo)(e.verifyingContract, 20) &&
            (i[e.verifyingContract] = "0x");
          let s = q.from(t);
          for (let e in (s.visit(
            r,
            (e, t) => ("address" !== e || (0, R.Lo)(t, 20) || (i[t] = "0x"), t)
          ),
          i))
            i[e] = await n(e);
          return (
            e.verifyingContract &&
              i[e.verifyingContract] &&
              (e.verifyingContract = i[e.verifyingContract]),
            (r = s.visit(r, (e, t) => ("address" === e && i[t] ? i[t] : t))),
            { domain: e, value: r }
          );
        }
        static getPayload(e, t, r) {
          q.hashDomain(e);
          let n = {},
            i = [];
          F.forEach((t) => {
            let r = e[t];
            null != r && ((n[t] = D[t](r)), i.push({ name: t, type: U[t] }));
          });
          let s = q.from(t),
            a = Object.assign({}, (t = s.types));
          return (
            (0, S.MR)(
              null == a.EIP712Domain,
              "types must not contain EIP712Domain type",
              "types.EIP712Domain",
              t
            ),
            (a.EIP712Domain = i),
            s.encode(r),
            {
              types: a,
              domain: n,
              primaryType: s.primaryType,
              message: s.visit(r, (e, t) => {
                if (e.match(/^bytes(\d*)/)) return (0, R.c$)((0, R.q5)(t));
                if (e.match(/^u?int/)) return (0, M.Ab)(t).toString();
                switch (e) {
                  case "address":
                    return t.toLowerCase();
                  case "bool":
                    return !!t;
                  case "string":
                    return (
                      (0, S.MR)(
                        "string" == typeof t,
                        "invalid string",
                        "value",
                        t
                      ),
                      t
                    );
                }
                (0, S.MR)(!1, "unsupported type", "type", e);
              }),
            }
          );
        }
      }
      var Q = r(62949);
      let H =
          "0x0000000000000000000000000000000000000000000000000000000000000000",
        V = BigInt(0),
        J = BigInt(1),
        K = BigInt(2),
        W = BigInt(27),
        Z = BigInt(28),
        Y = BigInt(35),
        X = {};
      function $(e) {
        return (0, R.nx)((0, M.c4)(e), 32);
      }
      class ee {
        #B;
        #T;
        #L;
        #U;
        get r() {
          return this.#B;
        }
        set r(e) {
          (0, S.MR)(32 === (0, R.pO)(e), "invalid r", "value", e),
            (this.#B = (0, R.c$)(e));
        }
        get s() {
          return this.#T;
        }
        set s(e) {
          (0, S.MR)(32 === (0, R.pO)(e), "invalid s", "value", e);
          let t = (0, R.c$)(e);
          (0, S.MR)(
            8 > parseInt(t.substring(0, 3)),
            "non-canonical s",
            "value",
            t
          ),
            (this.#T = t);
        }
        get v() {
          return this.#L;
        }
        set v(e) {
          let t = (0, M.WZ)(e, "value");
          (0, S.MR)(27 === t || 28 === t, "invalid v", "v", e), (this.#L = t);
        }
        get networkV() {
          return this.#U;
        }
        get legacyChainId() {
          let e = this.networkV;
          return null == e ? null : ee.getChainId(e);
        }
        get yParity() {
          return +(27 !== this.v);
        }
        get yParityAndS() {
          let e = (0, R.q5)(this.s);
          return this.yParity && (e[0] |= 128), (0, R.c$)(e);
        }
        get compactSerialized() {
          return (0, R.xW)([this.r, this.yParityAndS]);
        }
        get serialized() {
          return (0, R.xW)([this.r, this.s, this.yParity ? "0x1c" : "0x1b"]);
        }
        constructor(e, t, r, n) {
          (0, S.gk)(e, X, "Signature"),
            (this.#B = t),
            (this.#T = r),
            (this.#L = n),
            (this.#U = null);
        }
        [Symbol.for("nodejs.util.inspect.custom")]() {
          return `Signature { r: "${this.r}", s: "${this.s}", yParity: ${this.yParity}, networkV: ${this.networkV} }`;
        }
        clone() {
          let e = new ee(X, this.r, this.s, this.v);
          return this.networkV && (e.#U = this.networkV), e;
        }
        toJSON() {
          let e = this.networkV;
          return {
            _type: "signature",
            networkV: null != e ? e.toString() : null,
            r: this.r,
            s: this.s,
            v: this.v,
          };
        }
        static getChainId(e) {
          let t = (0, M.Ab)(e, "v");
          return t == W || t == Z
            ? V
            : ((0, S.MR)(t >= Y, "invalid EIP-155 v", "v", e), (t - Y) / K);
        }
        static getChainIdV(e, t) {
          return (0, M.Ab)(e) * K + BigInt(35 + t - 27);
        }
        static getNormalizedV(e) {
          let t = (0, M.Ab)(e);
          return t === V || t === W
            ? 27
            : t === J || t === Z
            ? 28
            : ((0, S.MR)(t >= Y, "invalid v", "v", e), t & J ? 27 : 28);
        }
        static from(e) {
          function t(t, r) {
            (0, S.MR)(t, r, "signature", e);
          }
          if (null == e) return new ee(X, H, H, 27);
          if ("string" == typeof e) {
            let r = (0, R.q5)(e, "signature");
            if (64 === r.length) {
              let e = (0, R.c$)(r.slice(0, 32)),
                t = r.slice(32, 64),
                n = 128 & t[0] ? 28 : 27;
              return (t[0] &= 127), new ee(X, e, (0, R.c$)(t), n);
            }
            if (65 === r.length) {
              let e = (0, R.c$)(r.slice(0, 32)),
                n = r.slice(32, 64);
              t((128 & n[0]) == 0, "non-canonical s");
              let i = ee.getNormalizedV(r[64]);
              return new ee(X, e, (0, R.c$)(n), i);
            }
            t(!1, "invalid raw signature length");
          }
          if (e instanceof ee) return e.clone();
          let r = e.r;
          t(null != r, "missing r");
          let n = $(r),
            i = (function (e, r) {
              if (null != e) return $(e);
              if (null != r) {
                t((0, R.Lo)(r, 32), "invalid yParityAndS");
                let e = (0, R.q5)(r);
                return (e[0] &= 127), (0, R.c$)(e);
              }
              t(!1, "missing s");
            })(e.s, e.yParityAndS);
          t((128 & (0, R.q5)(i)[0]) == 0, "non-canonical s");
          let { networkV: s, v: a } = (function (e, r, n) {
              if (null != e) {
                let t = (0, M.Ab)(e);
                return {
                  networkV: t >= Y ? t : void 0,
                  v: ee.getNormalizedV(t),
                };
              }
              if (null != r)
                return (
                  t((0, R.Lo)(r, 32), "invalid yParityAndS"),
                  { v: 128 & (0, R.q5)(r)[0] ? 28 : 27 }
                );
              if (null != n) {
                switch ((0, M.WZ)(n, "sig.yParity")) {
                  case 0:
                    return { v: 27 };
                  case 1:
                    return { v: 28 };
                }
                t(!1, "invalid yParity");
              }
              t(!1, "missing v");
            })(e.v, e.yParityAndS, e.yParity),
            o = new ee(X, n, i, a);
          return (
            s && (o.#U = s),
            t(
              null == e.yParity ||
                (0, M.WZ)(e.yParity, "sig.yParity") === o.yParity,
              "yParity mismatch"
            ),
            t(
              null == e.yParityAndS || e.yParityAndS === o.yParityAndS,
              "yParityAndS mismatch"
            ),
            o
          );
        }
      }
      function et(e) {
        return {
          address: (0, A.b)(e.address),
          nonce: (0, M.Ab)(null != e.nonce ? e.nonce : 0),
          chainId: (0, M.Ab)(null != e.chainId ? e.chainId : 0),
          signature: ee.from(e.signature),
        };
      }
      var er = r(30167);
      function en(e) {
        return async function (t, r) {
          let n;
          (0, S.vA)(
            null == r || !r.cancelled,
            "request cancelled before sending",
            "CANCELLED"
          );
          let i = t.url.split(":")[0].toLowerCase();
          (0, S.vA)(
            "http" === i || "https" === i,
            `unsupported protocol ${i}`,
            "UNSUPPORTED_OPERATION",
            { info: { protocol: i }, operation: "request" }
          ),
            (0, S.vA)(
              "https" === i || !t.credentials || t.allowInsecureAuthentication,
              "insecure authorized connections unsupported",
              "UNSUPPORTED_OPERATION",
              { operation: "request" }
            );
          let s = null,
            a = new AbortController(),
            o = setTimeout(() => {
              (s = (0, S.xz)("request timeout", "TIMEOUT")), a.abort();
            }, t.timeout);
          r &&
            r.addListener(() => {
              (s = (0, S.xz)("request cancelled", "CANCELLED")), a.abort();
            });
          let l = Object.assign({}, e, {
            method: t.method,
            headers: new Headers(Array.from(t)),
            body: t.body || void 0,
            signal: a.signal,
          });
          try {
            n = await fetch(t.url, l);
          } catch (e) {
            if ((clearTimeout(o), s)) throw s;
            throw e;
          }
          clearTimeout(o);
          let u = {};
          n.headers.forEach((e, t) => {
            u[t.toLowerCase()] = e;
          });
          let f = await n.arrayBuffer(),
            c = null == f ? null : new Uint8Array(f);
          return {
            statusCode: n.status,
            statusMessage: n.statusText,
            headers: u,
            body: c,
          };
        };
      }
      en({});
      let ei = en(),
        es = RegExp("^data:([^;:]*)?(;base64)?,(.*)$", "i"),
        ea = RegExp("^ipfs://(ipfs/)?(.*)$", "i"),
        eo = !1;
      async function el(e, t) {
        try {
          var r;
          let t = e.match(es);
          if (!t) throw Error("invalid data");
          return new eb(
            200,
            "OK",
            { "content-type": t[1] || "text/plain" },
            t[2]
              ? (function (e) {
                  let t = new Uint8Array((e = atob(e)).length);
                  for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
                  return (0, R.q5)(t);
                })(t[3])
              : ((r = t[3]),
                (0, er.YW)(
                  r.replace(/%([0-9a-f][0-9a-f])/gi, (e, t) =>
                    String.fromCharCode(parseInt(t, 16))
                  )
                ))
          );
        } catch (t) {
          return new eb(
            599,
            "BAD REQUEST (invalid data: URI)",
            {},
            null,
            new ep(e)
          );
        }
      }
      function eu(e) {
        return async function (t, r) {
          try {
            let r = t.match(ea);
            if (!r) throw Error("invalid link");
            return new ep(`${e}${r[2]}`);
          } catch (e) {
            return new eb(
              599,
              "BAD REQUEST (invalid IPFS URI)",
              {},
              null,
              new ep(t)
            );
          }
        };
      }
      let ef = { data: el, ipfs: eu("https://gateway.ipfs.io/ipfs/") },
        ec = new WeakMap();
      class ed {
        #F;
        #_;
        constructor(e) {
          (this.#F = []),
            (this.#_ = !1),
            ec.set(e, () => {
              if (!this.#_) {
                for (let e of ((this.#_ = !0), this.#F))
                  setTimeout(() => {
                    e();
                  }, 0);
                this.#F = [];
              }
            });
        }
        addListener(e) {
          (0, S.vA)(
            !this.#_,
            "singal already cancelled",
            "UNSUPPORTED_OPERATION",
            { operation: "fetchCancelSignal.addCancelListener" }
          ),
            this.#F.push(e);
        }
        get cancelled() {
          return this.#_;
        }
        checkSignal() {
          (0, S.vA)(!this.cancelled, "cancelled", "CANCELLED", {});
        }
      }
      function eh(e) {
        if (null == e) throw Error("missing signal; should not happen");
        return e.checkSignal(), e;
      }
      class ep {
        #D;
        #j;
        #z;
        #G;
        #q;
        #Q;
        #H;
        #V;
        #J;
        #K;
        #W;
        #Z;
        #Y;
        #X;
        #$;
        get url() {
          return this.#Q;
        }
        set url(e) {
          this.#Q = String(e);
        }
        get body() {
          return null == this.#H ? null : new Uint8Array(this.#H);
        }
        set body(e) {
          if (null == e) (this.#H = void 0), (this.#V = void 0);
          else if ("string" == typeof e)
            (this.#H = (0, er.YW)(e)), (this.#V = "text/plain");
          else if (e instanceof Uint8Array)
            (this.#H = e), (this.#V = "application/octet-stream");
          else if ("object" == typeof e)
            (this.#H = (0, er.YW)(JSON.stringify(e))),
              (this.#V = "application/json");
          else throw Error("invalid body");
        }
        hasBody() {
          return null != this.#H;
        }
        get method() {
          return this.#G ? this.#G : this.hasBody() ? "POST" : "GET";
        }
        set method(e) {
          null == e && (e = ""), (this.#G = String(e).toUpperCase());
        }
        get headers() {
          let e = Object.assign({}, this.#z);
          return (
            this.#J &&
              (e.authorization = `Basic ${(function (e) {
                let t = (0, R.q5)(e),
                  r = "";
                for (let e = 0; e < t.length; e++)
                  r += String.fromCharCode(t[e]);
                return btoa(r);
              })((0, er.YW)(this.#J))}`),
            this.allowGzip && (e["accept-encoding"] = "gzip"),
            null == e["content-type"] &&
              this.#V &&
              (e["content-type"] = this.#V),
            this.body && (e["content-length"] = String(this.body.length)),
            e
          );
        }
        getHeader(e) {
          return this.headers[e.toLowerCase()];
        }
        setHeader(e, t) {
          this.#z[String(e).toLowerCase()] = String(t);
        }
        clearHeaders() {
          this.#z = {};
        }
        [Symbol.iterator]() {
          let e = this.headers,
            t = Object.keys(e),
            r = 0;
          return {
            next: () => {
              if (r < t.length) {
                let n = t[r++];
                return { value: [n, e[n]], done: !1 };
              }
              return { value: void 0, done: !0 };
            },
          };
        }
        get credentials() {
          return this.#J || null;
        }
        setCredentials(e, t) {
          (0, S.MR)(
            !e.match(/:/),
            "invalid basic authentication username",
            "username",
            "[REDACTED]"
          ),
            (this.#J = `${e}:${t}`);
        }
        get allowGzip() {
          return this.#j;
        }
        set allowGzip(e) {
          this.#j = !!e;
        }
        get allowInsecureAuthentication() {
          return !!this.#D;
        }
        set allowInsecureAuthentication(e) {
          this.#D = !!e;
        }
        get timeout() {
          return this.#q;
        }
        set timeout(e) {
          (0, S.MR)(e >= 0, "timeout must be non-zero", "timeout", e),
            (this.#q = e);
        }
        get preflightFunc() {
          return this.#K || null;
        }
        set preflightFunc(e) {
          this.#K = e;
        }
        get processFunc() {
          return this.#W || null;
        }
        set processFunc(e) {
          this.#W = e;
        }
        get retryFunc() {
          return this.#Z || null;
        }
        set retryFunc(e) {
          this.#Z = e;
        }
        get getUrlFunc() {
          return this.#$ || ei;
        }
        set getUrlFunc(e) {
          this.#$ = e;
        }
        constructor(e) {
          (this.#Q = String(e)),
            (this.#D = !1),
            (this.#j = !0),
            (this.#z = {}),
            (this.#G = ""),
            (this.#q = 3e5),
            (this.#X = { slotInterval: 250, maxAttempts: 12 }),
            (this.#$ = null);
        }
        toString() {
          return `<FetchRequest method=${JSON.stringify(
            this.method
          )} url=${JSON.stringify(this.url)} headers=${JSON.stringify(
            this.headers
          )} body=${this.#H ? (0, R.c$)(this.#H) : "null"}>`;
        }
        setThrottleParams(e) {
          null != e.slotInterval && (this.#X.slotInterval = e.slotInterval),
            null != e.maxAttempts && (this.#X.maxAttempts = e.maxAttempts);
        }
        async #ee(e, t, r, n, i) {
          var s;
          if (e >= this.#X.maxAttempts)
            return i.makeServerError("exceeded maximum retry limit");
          (0, S.vA)(eg() <= t, "timeout", "TIMEOUT", {
            operation: "request.send",
            reason: "timeout",
            request: n,
          }),
            r > 0 && (await ((s = r), new Promise((e) => setTimeout(e, s))));
          let a = this.clone(),
            o = (a.url.split(":")[0] || "").toLowerCase();
          if (o in ef) {
            let e = await ef[o](a.url, eh(n.#Y));
            if (e instanceof eb) {
              let t = e;
              if (this.processFunc) {
                eh(n.#Y);
                try {
                  t = await this.processFunc(a, t);
                } catch (e) {
                  (null == e.throttle || "number" != typeof e.stall) &&
                    t
                      .makeServerError("error in post-processing function", e)
                      .assertOk();
                }
              }
              return t;
            }
            a = e;
          }
          this.preflightFunc && (a = await this.preflightFunc(a));
          let l = await this.getUrlFunc(a, eh(n.#Y)),
            u = new eb(l.statusCode, l.statusMessage, l.headers, l.body, n);
          if (301 === u.statusCode || 302 === u.statusCode) {
            try {
              let r = u.headers.location || "";
              return a.redirect(r).#ee(e + 1, t, 0, n, u);
            } catch (e) {}
            return u;
          }
          if (
            429 === u.statusCode &&
            (null == this.retryFunc || (await this.retryFunc(a, u, e)))
          ) {
            let r = u.headers["retry-after"],
              i =
                this.#X.slotInterval *
                Math.trunc(Math.random() * Math.pow(2, e));
            return (
              "string" == typeof r &&
                r.match(/^[1-9][0-9]*$/) &&
                (i = parseInt(r)),
              a.clone().#ee(e + 1, t, i, n, u)
            );
          }
          if (this.processFunc) {
            eh(n.#Y);
            try {
              u = await this.processFunc(a, u);
            } catch (i) {
              (null == i.throttle || "number" != typeof i.stall) &&
                u
                  .makeServerError("error in post-processing function", i)
                  .assertOk();
              let r =
                this.#X.slotInterval *
                Math.trunc(Math.random() * Math.pow(2, e));
              return (
                i.stall >= 0 && (r = i.stall), a.clone().#ee(e + 1, t, r, n, u)
              );
            }
          }
          return u;
        }
        send() {
          return (
            (0, S.vA)(
              null == this.#Y,
              "request already sent",
              "UNSUPPORTED_OPERATION",
              { operation: "fetchRequest.send" }
            ),
            (this.#Y = new ed(this)),
            this.#ee(
              0,
              eg() + this.timeout,
              0,
              this,
              new eb(0, "", {}, null, this)
            )
          );
        }
        cancel() {
          (0, S.vA)(
            null != this.#Y,
            "request has not been sent",
            "UNSUPPORTED_OPERATION",
            { operation: "fetchRequest.cancel" }
          );
          let e = ec.get(this);
          if (!e) throw Error("missing signal; should not happen");
          e();
        }
        redirect(e) {
          let t = this.url.split(":")[0].toLowerCase(),
            r = e.split(":")[0].toLowerCase();
          (0, S.vA)(
            "GET" === this.method &&
              ("https" !== t || "http" !== r) &&
              e.match(/^https?:/),
            "unsupported redirect",
            "UNSUPPORTED_OPERATION",
            {
              operation: `redirect(${this.method} ${JSON.stringify(
                this.url
              )} => ${JSON.stringify(e)})`,
            }
          );
          let n = new ep(e);
          return (
            (n.method = "GET"),
            (n.allowGzip = this.allowGzip),
            (n.timeout = this.timeout),
            (n.#z = Object.assign({}, this.#z)),
            this.#H && (n.#H = new Uint8Array(this.#H)),
            (n.#V = this.#V),
            n
          );
        }
        clone() {
          let e = new ep(this.url);
          return (
            (e.#G = this.#G),
            this.#H && (e.#H = this.#H),
            (e.#V = this.#V),
            (e.#z = Object.assign({}, this.#z)),
            (e.#J = this.#J),
            this.allowGzip && (e.allowGzip = !0),
            (e.timeout = this.timeout),
            this.allowInsecureAuthentication &&
              (e.allowInsecureAuthentication = !0),
            (e.#K = this.#K),
            (e.#W = this.#W),
            (e.#Z = this.#Z),
            (e.#X = Object.assign({}, this.#X)),
            (e.#$ = this.#$),
            e
          );
        }
        static lockConfig() {
          eo = !0;
        }
        static getGateway(e) {
          return ef[e.toLowerCase()] || null;
        }
        static registerGateway(e, t) {
          if ("http" === (e = e.toLowerCase()) || "https" === e)
            throw Error(`cannot intercept ${e}; use registerGetUrl`);
          if (eo) throw Error("gateways locked");
          ef[e] = t;
        }
        static registerGetUrl(e) {
          if (eo) throw Error("gateways locked");
          ei = e;
        }
        static createGetUrlFunc(e) {
          return en(e);
        }
        static createDataGateway() {
          return el;
        }
        static createIpfsGatewayFunc(e) {
          return eu(e);
        }
      }
      class eb {
        #et;
        #er;
        #z;
        #H;
        #e;
        #en;
        toString() {
          return `<FetchResponse status=${this.statusCode} body=${
            this.#H ? (0, R.c$)(this.#H) : "null"
          }>`;
        }
        get statusCode() {
          return this.#et;
        }
        get statusMessage() {
          return this.#er;
        }
        get headers() {
          return Object.assign({}, this.#z);
        }
        get body() {
          return null == this.#H ? null : new Uint8Array(this.#H);
        }
        get bodyText() {
          try {
            return null == this.#H ? "" : (0, er._v)(this.#H);
          } catch (e) {
            (0, S.vA)(
              !1,
              "response body is not valid UTF-8 data",
              "UNSUPPORTED_OPERATION",
              { operation: "bodyText", info: { response: this } }
            );
          }
        }
        get bodyJson() {
          try {
            return JSON.parse(this.bodyText);
          } catch (e) {
            (0, S.vA)(
              !1,
              "response body is not valid JSON",
              "UNSUPPORTED_OPERATION",
              { operation: "bodyJson", info: { response: this } }
            );
          }
        }
        [Symbol.iterator]() {
          let e = this.headers,
            t = Object.keys(e),
            r = 0;
          return {
            next: () => {
              if (r < t.length) {
                let n = t[r++];
                return { value: [n, e[n]], done: !1 };
              }
              return { value: void 0, done: !0 };
            },
          };
        }
        constructor(e, t, r, n, i) {
          (this.#et = e),
            (this.#er = t),
            (this.#z = Object.keys(r).reduce(
              (e, t) => ((e[t.toLowerCase()] = String(r[t])), e),
              {}
            )),
            (this.#H = null == n ? null : new Uint8Array(n)),
            (this.#e = i || null),
            (this.#en = { message: "" });
        }
        makeServerError(e, t) {
          let r;
          e
            ? (r = `CLIENT ESCALATED SERVER ERROR (${this.statusCode} ${this.statusMessage}; ${e})`)
            : ((e = `${this.statusCode} ${this.statusMessage}`),
              (r = `CLIENT ESCALATED SERVER ERROR (${e})`));
          let n = new eb(599, r, this.headers, this.body, this.#e || void 0);
          return (n.#en = { message: e, error: t }), n;
        }
        throwThrottleError(e, t) {
          null == t
            ? (t = -1)
            : (0, S.MR)(
                Number.isInteger(t) && t >= 0,
                "invalid stall timeout",
                "stall",
                t
              );
          let r = Error(e || "throttling requests");
          throw ((0, P.n)(r, { stall: t, throttle: !0 }), r);
        }
        getHeader(e) {
          return this.headers[e.toLowerCase()];
        }
        hasBody() {
          return null != this.#H;
        }
        get request() {
          return this.#e;
        }
        ok() {
          return (
            "" === this.#en.message &&
            this.statusCode >= 200 &&
            this.statusCode < 300
          );
        }
        assertOk() {
          if (this.ok()) return;
          let { message: e, error: t } = this.#en;
          "" === e &&
            (e = `server response ${this.statusCode} ${this.statusMessage}`);
          let r = null;
          this.request && (r = this.request.url);
          let n = null;
          try {
            this.#H && (n = (0, er._v)(this.#H));
          } catch (e) {}
          (0, S.vA)(!1, e, "SERVER_ERROR", {
            request: this.request || "unknown request",
            response: this,
            error: t,
            info: {
              requestUrl: r,
              responseBody: n,
              responseStatus: `${this.statusCode} ${this.statusMessage}`,
            },
          });
        }
      }
      function eg() {
        return new Date().getTime();
      }
      let em = "0x0000000000000000000000000000000000000000";
      var ey = r(26872);
      let ev = new Map([
        [8217, "apostrophe"],
        [8260, "fraction slash"],
        [12539, "middle dot"],
      ]);
      function ew(e) {
        var t;
        let r;
        return (
          (t = (function (e) {
            let t = 0;
            function r() {
              return (e[t++] << 8) | e[t++];
            }
            let n = r(),
              i = 1,
              s = [0, 1];
            for (let e = 1; e < n; e++) s.push((i += r()));
            let a = r(),
              o = t;
            t += a;
            let l = 0,
              u = 0;
            function f() {
              return (
                0 == l && ((u = (u << 8) | e[t++]), (l = 8)), (u >> --l) & 1
              );
            }
            let c = 0x80000000 - 1,
              d = 0;
            for (let e = 0; e < 31; e++) d = (d << 1) | f();
            let h = [],
              p = 0,
              b = 0x80000000;
            for (;;) {
              let e = Math.floor(((d - p + 1) * i - 1) / b),
                t = 0,
                r = n;
              for (; r - t > 1; ) {
                let n = (t + r) >>> 1;
                e < s[n] ? (r = n) : (t = n);
              }
              if (0 == t) break;
              h.push(t);
              let a = p + Math.floor((b * s[t]) / i),
                o = p + Math.floor((b * s[t + 1]) / i) - 1;
              for (; ((a ^ o) & 0x40000000) == 0; )
                (d = ((d << 1) & c) | f()),
                  (a = (a << 1) & c),
                  (o = ((o << 1) & c) | 1);
              for (; a & ~o & 0x20000000; )
                (d = (0x40000000 & d) | ((d << 1) & (c >>> 1)) | f()),
                  (a = (a << 1) ^ 0x40000000),
                  (o = ((0x40000000 ^ o) << 1) | 0x40000001);
              (p = a), (b = 1 + o - a);
            }
            let g = n - 4;
            return h.map((t) => {
              switch (t - g) {
                case 3:
                  return g + 65792 + ((e[o++] << 16) | (e[o++] << 8) | e[o++]);
                case 2:
                  return g + 256 + ((e[o++] << 8) | e[o++]);
                case 1:
                  return g + e[o++];
                default:
                  return t - 1;
              }
            });
          })(
            (function (e) {
              let t = [];
              [
                ..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
              ].forEach((e, r) => (t[e.charCodeAt(0)] = r));
              let r = e.length,
                n = new Uint8Array((6 * r) >> 3);
              for (let i = 0, s = 0, a = 0, o = 0; i < r; i++)
                (o = (o << 6) | t[e.charCodeAt(i)]),
                  (a += 6) >= 8 && (n[s++] = o >> (a -= 8));
              return n;
            })(e)
          )),
          (r = 0),
          () => t[r++]
        );
      }
      function eA(e, t = 0) {
        let r = [];
        for (;;) {
          let n = e(),
            i = e();
          if (!i) break;
          t += n;
          for (let e = 0; e < i; e++) r.push(t + e);
          t += i + 1;
        }
        return r;
      }
      function ex(e) {
        return eR(() => {
          let t = eA(e);
          if (t.length) return t;
        });
      }
      function eE(e) {
        let t = [];
        for (;;) {
          let r = e();
          if (0 == r) break;
          t.push(
            (function (e, t) {
              let r = 1 + t(),
                n = t(),
                i = eR(t);
              return eM(i.length, 1 + e, t).flatMap((e, t) => {
                let [s, ...a] = e;
                return Array(i[t])
                  .fill()
                  .map((e, t) => {
                    let i = t * n;
                    return [s + t * r, a.map((e) => e + i)];
                  });
              });
            })(r, e)
          );
        }
        for (;;) {
          var r, n;
          let i = e() - 1;
          if (i < 0) break;
          t.push(
            ((r = i),
            eM(1 + (n = e)(), 1 + r, n).map((e) => [e[0], e.slice(1)]))
          );
        }
        return t.flat();
      }
      function eR(e) {
        let t = [];
        for (;;) {
          let r = e(t.length);
          if (!r) break;
          t.push(r);
        }
        return t;
      }
      function eM(e, t, r) {
        let n = Array(e)
          .fill()
          .map(() => []);
        for (let i = 0; i < t; i++)
          (function (e, t) {
            let r = Array(e);
            for (let i = 0, s = 0; i < e; i++) {
              var n;
              r[i] = s += 1 & (n = t()) ? ~n >> 1 : n >> 1;
            }
            return r;
          })(e, r).forEach((e, t) => n[t].push(e));
        return n;
      }
      function eS(e) {
        return `{${e.toString(16).toUpperCase().padStart(2, "0")}}`;
      }
      function eP(e) {
        let t = e.length;
        if (t < 4096) return String.fromCodePoint(...e);
        let r = [];
        for (let n = 0; n < t; )
          r.push(String.fromCodePoint(...e.slice(n, (n += 4096))));
        return r.join("");
      }
      function eO(e, t) {
        let r = e.length,
          n = r - t.length;
        for (let i = 0; 0 == n && i < r; i++) n = e[i] - t[i];
        return n;
      }
      let eI = 55204;
      function ek(e) {
        return (e >> 24) & 255;
      }
      function eN(e) {
        return 0xffffff & e;
      }
      function eC(e) {
        return e >= 44032 && e < eI;
      }
      function eB(e) {
        n ||
          (function () {
            let e = ew(
              "AEUDTAHBCFQATQDRADAAcgAgADQAFAAsABQAHwAOACQADQARAAoAFwAHABIACAAPAAUACwAFAAwABAAQAAMABwAEAAoABQAIAAIACgABAAQAFAALAAIACwABAAIAAQAHAAMAAwAEAAsADAAMAAwACgANAA0AAwAKAAkABAAdAAYAZwDSAdsDJgC0CkMB8xhZAqfoC190UGcThgBurwf7PT09Pb09AjgJum8OjDllxHYUKXAPxzq6tABAxgK8ysUvWAgMPT09PT09PSs6LT2HcgWXWwFLoSMEEEl5RFVMKvO0XQ8ExDdJMnIgsj26PTQyy8FfEQ8AY8IPAGcEbwRwBHEEcgRzBHQEdQR2BHcEeAR6BHsEfAR+BIAEgfndBQoBYgULAWIFDAFiBNcE2ATZBRAFEQUvBdALFAsVDPcNBw13DYcOMA4xDjMB4BllHI0B2grbAMDpHLkQ7QHVAPRNQQFnGRUEg0yEB2uaJF8AJpIBpob5AERSMAKNoAXqaQLUBMCzEiACnwRZEkkVsS7tANAsBG0RuAQLEPABv9HICTUBXigPZwRBApMDOwAamhtaABqEAY8KvKx3LQ4ArAB8UhwEBAVSagD8AEFZADkBIadVj2UMUgx5Il4ANQC9AxIB1BlbEPMAs30CGxlXAhwZKQIECBc6EbsCoxngzv7UzRQA8M0BawL6ZwkN7wABAD33OQRcsgLJCjMCjqUChtw/km+NAsXPAoP2BT84PwURAK0RAvptb6cApQS/OMMey5HJS84UdxpxTPkCogVFITaTOwERAK5pAvkNBOVyA7q3BKlOJSALAgUIBRcEdASpBXqzABXFSWZOawLCOqw//AolCZdvv3dSBkEQGyelEPcMMwG1ATsN7UvYBPEGOwTJH30ZGQ/NlZwIpS3dDO0m4y6hgFoj9SqDBe1L9DzdC01RaA9ZC2UJ4zpjgU4DIQENIosK3Q05CG0Q8wrJaw3lEUUHOQPVSZoApQcBCxEdNRW1JhBirAsJOXcG+xr2C48mrxMpevwF0xohBk0BKRr/AM8u54WwWjFcHE9fBgMLJSPHFKhQIA0lQLd4SBobBxUlqQKRQ3BKh1E2HpMh9jw9DWYuE1F8B/U8BRlPC4E8nkarRQ4R0j6NPUgiSUwsBDV/LC8niwnPD4UMuXxyAVkJIQmxDHETMREXN8UIOQcZLZckJxUIIUaVYJoE958D8xPRAwsFPwlBBxMDtRwtEy4VKQUNgSTXAvM21S6zAo9WgAEXBcsPJR/fEFBH4A7pCJsCZQODJesALRUhABcimwhDYwBfj9hTBS7LCMdqbCN0A2cU52ERcweRDlcHpxwzFb8c4XDIXguGCCijrwlbAXUJmQFfBOMICTVbjKAgQWdTi1gYmyBhQT9d/AIxDGUVn0S9h3gCiw9rEhsBNQFzBzkNAQJ3Ee0RaxCVCOuGBDW1M/g6JQRPIYMgEQonA09szgsnJvkM+GkBoxJiAww0PXfuZ6tgtiQX/QcZMsVBYCHxC5JPzQycGsEYQlQuGeQHvwPzGvMn6kFXBf8DowMTOk0z7gS9C2kIiwk/AEkOoxcH1xhqCnGM0AExiwG3mQNXkYMCb48GNwcLAGcLhwV55QAdAqcIowAFAM8DVwA5Aq0HnQAZAIVBAT0DJy8BIeUCjwOTCDHLAZUvAfMpBBvDDBUA9zduSgLDsQKAamaiBd1YAo4CSTUBTSUEBU5HUQOvceEA2wBLBhPfRwEVq0rLGuNDAd9vKwDHAPsABTUHBUEBzQHzbQC3AV8LMQmis7UBTekpAIMAFWsB1wKJAN0ANQB/8QFTAE0FWfkF0wJPSQERMRgrV2EBuwMfATMBDQB5BsuNpckHHwRtB9MCEBsV4QLvLge1AQMi3xPNQsUCvd5VoWACZIECYkJbTa9bNyACofcCaJgCZgkCn4Q4GwsCZjsCZiYEbgR/A38TA36SOQY5dxc5gjojIwJsHQIyNjgKAm3HAm2u74ozZ0UrAWcA3gDhAEoFB5gMjQD+C8IADbUCdy8CdqI/AnlLQwJ4uh1c20WuRtcCfD8CesgCfQkCfPAFWQUgSABIfWMkAoFtAoAAAoAFAn+uSVhKWxUXSswC0QEC0MxLJwOITwOH5kTFkTIC8qFdAwMDrkvOTC0lA89NTE2vAos/AorYwRsHHUNnBbcCjjcCjlxAl4ECjtkCjlx4UbRTNQpS1FSFApP7ApMMAOkAHFUeVa9V0AYsGymVhjLheGZFOzkCl58C77JYIagAWSUClo8ClnycAKlZrFoJgU0AOwKWtQKWTlxEXNECmcsCmWRcyl0HGQKcmznCOp0CnBYCn5sCnriKAB0PMSoPAp3xAp6SALU9YTRh7wKe0wKgbgGpAp6fHwKeTqVjyGQnJSsCJ68CJn4CoPsCoEwCot0CocQCpi8Cpc4Cp/8AfQKn8mh8aLEAA0lqHGrRAqzjAqyuAq1nAq0CAlcdAlXcArHh1wMfTmyXArK9DQKy6Bds4G1jbUhfAyXNArZcOz9ukAMpRQK4XgK5RxUCuSp3cDZw4QK9GQK72nCWAzIRAr6IcgIDM3ECvhpzInNPAsPLAsMEc4J0SzVFdOADPKcDPJoDPb8CxXwCxkcCxhCJAshpUQLIRALJTwLJLgJknQLd0nh5YXiueSVL0AMYo2cCAmH0GfOVJHsLXpJeuxECz2sCz2wvS1PS8xOfAMatAs9zASnqA04SfksFAtwnAtuKAtJPA1JcA1NfAQEDVYyAiT8AyxbtYEWCHILTgs6DjQLaxwLZ3oQQhEmnPAOGpQAvA2QOhnFZ+QBVAt9lAt64c3cC4i/tFAHzMCcB9JsB8tKHAuvzAulweQLq+QLq5AD5RwG5Au6JAuuclqqXAwLuPwOF4Jh5cOBxoQLzAwBpA44WmZMC9xMDkW4DkocC95gC+dkC+GaaHJqruzebHgOdgwL++gEbADmfHJ+zAwWNA6ZqA6bZANHFAwZqoYiiBQkDDEkCwAA/AwDhQRdTARHzA2sHl2cFAJMtK7evvdsBiZkUfxEEOQH7KQUhDp0JnwCS/SlXxQL3AZ0AtwW5AG8LbUEuFCaNLgFDAYD8AbUmAHUDDgRtACwCFgyhAAAKAj0CagPdA34EkQEgRQUhfAoABQBEABMANhICdwEABdUDa+8KxQIA9wqfJ7+xt+UBkSFBQgHpFH8RNMCJAAQAGwBaAkUChIsABjpTOpSNbQC4Oo860ACNOME63AClAOgAywE6gTo7Ofw5+Tt2iTpbO56JOm85GAFWATMBbAUvNV01njWtNWY1dTW2NcU1gjWRNdI14TWeNa017jX9NbI1wTYCNhE1xjXVNhY2JzXeNe02LjY9Ni41LSE2OjY9Njw2yTcIBJA8VzY4Nt03IDcPNsogN4k3MAoEsDxnNiQ3GTdsOo03IULUQwdC4EMLHA8PCZsobShRVQYA6X8A6bABFCnXAukBowC9BbcAbwNzBL8MDAMMAQgDAAkKCwsLCQoGBAVVBI/DvwDz9b29kaUCb0QtsRTNLt4eGBcSHAMZFhYZEhYEARAEBUEcQRxBHEEcQRxBHEEaQRxBHEFCSTxBPElISUhBNkM2QTYbNklISVmBVIgBFLWZAu0BhQCjBcEAbykBvwGJAaQcEZ0ePCklMAAhMvAIMAL54gC7Bm8EescjzQMpARQpKgDUABavAj626xQAJP0A3etzuf4NNRA7efy2Z9NQrCnC0OSyANz5BBIbJ5IFDR6miIavYS6tprjjmuKebxm5C74Q225X1pkaYYPb6f1DK4k3xMEBb9S2WMjEibTNWhsRJIA+vwNVEiXTE5iXs/wezV66oFLfp9NZGYW+Gk19J2+bCT6Ye2w6LDYdgzKMUabk595eLBCXANz9HUpWbATq9vqXVx9XDg+Pc9Xp4+bsS005SVM/BJBM4687WUuf+Uj9dEi8aDNaPxtpbDxcG1THTImUMZq4UCaaNYpsVqraNyKLJXDYsFZ/5jl7bLRtO88t7P3xZaAxhb5OdPMXqsSkp1WCieG8jXm1U99+blvLlXzPCS+M93VnJCiK+09LfaSaBAVBomyDgJua8dfUzR7ga34IvR2Nvj+A9heJ6lsl1KG4NkI1032Cnff1m1wof2B9oHJK4bi6JkEdSqeNeiuo6QoZZincoc73/TH9SXF8sCE7XyuYyW8WSgbGFCjPV0ihLKhdPs08Tx82fYAkLLc4I2wdl4apY7GU5lHRFzRWJep7Ww3wbeA3qmd59/86P4xuNaqDpygXt6M85glSBHOCGgJDnt+pN9bK7HApMguX6+06RZNjzVmcZJ+wcUrJ9//bpRNxNuKpNl9uFds+S9tdx7LaM5ZkIrPj6nIU9mnbFtVbs9s/uLgl8MVczAwet+iOEzzBlYW7RCMgE6gyNLeq6+1tIx4dpgZnd0DksJS5f+JNDpwwcPNXaaVspq1fbQajOrJgK0ofKtJ1Ne90L6VO4MOl5S886p7u6xo7OLjG8TGL+HU1JXGJgppg4nNbNJ5nlzSpuPYy21JUEcUA94PoFiZfjZue+QnyQ80ekOuZVkxx4g+cvhJfHgNl4hy1/a6+RKcKlar/J29y//EztlbVPHVUeQ1zX86eQVAjR/M3dA9w4W8LfaXp4EgM85wOWasli837PzVMOnsLzR+k3o75/lRPAJSE1xAKQzEi5v10ke+VBvRt1cwQRMd+U5mLCTGVd6XiZtgBG5cDi0w22GKcVNvHiu5LQbZEDVtz0onn7k5+heuKXVsZtSzilkLRAUmjMXEMB3J9YC50XBxPiz53SC+EhnPl9WsKCv92SM/OFFIMJZYfl0WW8tIO3UxYcwdMAj7FSmgrsZ2aAZO03BOhP1bNNZItyXYQFTpC3SG1VuPDqH9GkiCDmE+JwxyIVSO5siDErAOpEXFgjy6PQtOVDj+s6e1r8heWVvmZnTciuf4EiNZzCAd7SOMhXERIOlsHIMG399i9aLTy3m2hRLZjJVDNLS53iGIK11dPqQt0zBDyg6qc7YqkDm2M5Ve6dCWCaCbTXX2rToaIgz6+zh4lYUi/+6nqcFMAkQJKHYLK0wYk5N9szV6xihDbDDFr45lN1K4aCXBq/FitPSud9gLt5ZVn+ZqGX7cwm2z5EGMgfFpIFyhGGuDPmso6TItTMwny+7uPnLCf4W6goFQFV0oQSsc9VfMmVLcLr6ZetDZbaSFTLqnSO/bIPjA3/zAUoqgGFAEQS4IhuMzEp2I3jJzbzkk/IEmyax+rhZTwd6f+CGtwPixu8IvzACquPWPREu9ZvGkUzpRwvRRuaNN6cr0W1wWits9ICdYJ7ltbgMiSL3sTPeufgNcVqMVWFkCPDH4jG2jA0XcVgQj62Cb29v9f/z/+2KbYvIv/zzjpQAPkliaVDzNrW57TZ/ZOyZD0nlfMmAIBIAGAI0D3k/mdN4xr9v85ZbZbbqfH2jGd5hUqNZWwl5SPfoGmfElmazUIeNL1j/mkF7VNAzTq4jNt8JoQ11NQOcmhprXoxSxfRGJ9LDEOAQ+dmxAQH90iti9e2u/MoeuaGcDTHoC+xsmEeWmxEKefQuIzHbpw5Tc5cEocboAD09oipWQhtTO1wivf/O+DRe2rpl/E9wlrzBorjJsOeG1B/XPW4EaJEFdNlECEZga5ZoGRHXgYouGRuVkm8tDESiEyFNo+3s5M5puSdTyUL2llnINVHEt91XUNW4ewdMgJ4boJfEyt/iY5WXqbA+A2Fkt5Z0lutiWhe9nZIyIUjyXDC3UsaG1t+eNx6z4W/OYoTB7A6x+dNSTOi9AInctbESqm5gvOLww7OWXPrmHwVZasrl4eD113pm+JtT7JVOvnCXqdzzdTRHgJ0PiGTFYW5Gvt9R9LD6Lzfs0v/TZZHSmyVNq7viIHE6DBK7Qp07Iz55EM8SYtQvZf/obBniTWi5C2/ovHfw4VndkE5XYdjOhCMRjDeOEfXeN/CwfGduiUIfsoFeUxXeQXba7c7972XNv8w+dTjjUM0QeNAReW+J014dKAD/McQYXT7c0GQPIkn3Ll6R7gGjuiQoZD0TEeEqQpKoZ15g/0OPQI17QiSv9AUROa/V/TQN3dvLArec3RrsYlvBm1b8LWzltdugsC50lNKYLEp2a+ZZYqPejULRlOJh5zj/LVMyTDvwKhMxxwuDkxJ1QpoNI0OTWLom4Z71SNzI9TV1iXJrIu9Wcnd+MCaAw8o1jSXd94YU/1gnkrC9BUEOtQvEIQ7g0i6h+KL2JKk8Ydl7HruvgWMSAmNe+LshGhV4qnWHhO9/RIPQzY1tHRj2VqOyNsDpK0cww+56AdDC4gsWwY0XxoucIWIqs/GcwnWqlaT0KPr8mbK5U94/301i1WLt4YINTVvCFBrFZbIbY8eycOdeJ2teD5IfPLCRg7jjcFTwlMFNl9zdh/o3E/hHPwj7BWg0MU09pPrBLbrCgm54A6H+I6v27+jL5gkjWg/iYdks9jbfVP5y/n0dlgWEMlKasl7JvFZd56LfybW1eeaVO0gxTfXZwD8G4SI116yx7UKVRgui6Ya1YpixqXeNLc8IxtAwCU5IhwQgn+NqHnRaDv61CxKhOq4pOX7M6pkA+Pmpd4j1vn6ACUALoLLc4vpXci8VidLxzm7qFBe7s+quuJs6ETYmnpgS3LwSZxPIltgBDXz8M1k/W2ySNv2f9/NPhxLGK2D21dkHeSGmenRT3Yqcdl0m/h3OYr8V+lXNYGf8aCCpd4bWjE4QIPj7vUKN4Nrfs7ML6Y2OyS830JCnofg/k7lpFpt4SqZc5HGg1HCOrHvOdC8bP6FGDbE/VV0mX4IakzbdS/op+Kt3G24/8QbBV7y86sGSQ/vZzU8FXs7u6jIvwchsEP2BpIhW3G8uWNwa3HmjfH/ZjhhCWvluAcF+nMf14ClKg5hGgtPLJ98ueNAkc5Hs2WZlk2QHvfreCK1CCGO6nMZVSb99VM/ajr8WHTte9JSmkXq/i/U943HEbdzW6Re/S88dKgg8pGOLlAeNiqrcLkUR3/aClFpMXcOUP3rmETcWSfMXZE3TUOi8i+fqRnTYLflVx/Vb/6GJ7eIRZUA6k3RYR3iFSK9c4iDdNwJuZL2FKz/IK5VimcNWEqdXjSoxSgmF0UPlDoUlNrPcM7ftmA8Y9gKiqKEHuWN+AZRIwtVSxye2Kf8rM3lhJ5XcBXU9n4v0Oy1RU2M+4qM8AQPVwse8ErNSob5oFPWxuqZnVzo1qB/IBxkM3EVUKFUUlO3e51259GgNcJbCmlvrdjtoTW7rChm1wyCKzpCTwozUUEOIcWLneRLgMXh+SjGSFkAllzbGS5HK7LlfCMRNRDSvbQPjcXaenNYxCvu2Qyznz6StuxVj66SgI0T8B6/sfHAJYZaZ78thjOSIFumNWLQbeZixDCCC+v0YBtkxiBB3jefHqZ/dFHU+crbj6OvS1x/JDD7vlm7zOVPwpUC01nhxZuY/63E7g"
            );
            for (let [t, r] of ((n = new Map(
              ex(e).flatMap((e, t) => e.map((e) => [e, (t + 1) << 24]))
            )),
            (i = new Set(eA(e))),
            (s = new Map()),
            (a = new Map()),
            eE(e))) {
              if (!i.has(t) && 2 == r.length) {
                let [e, n] = r,
                  i = a.get(e);
                i || ((i = new Map()), a.set(e, i)), i.set(n, t);
              }
              s.set(t, r.reverse());
            }
          })();
        let t = [],
          r = [],
          o = !1;
        function l(e) {
          let r = n.get(e);
          r && ((o = !0), (e |= r)), t.push(e);
        }
        for (let n of e)
          for (;;) {
            if (n < 128) t.push(n);
            else if (eC(n)) {
              let e = n - 44032,
                t = (e / 588) | 0,
                r = ((e % 588) / 28) | 0,
                i = e % 28;
              l(4352 + t), l(4449 + r), i > 0 && l(4519 + i);
            } else {
              let e = s.get(n);
              e ? r.push(...e) : l(n);
            }
            if (!r.length) break;
            n = r.pop();
          }
        if (o && t.length > 1) {
          let e = ek(t[0]);
          for (let r = 1; r < t.length; r++) {
            let n = ek(t[r]);
            if (0 == n || e <= n) {
              e = n;
              continue;
            }
            let i = r - 1;
            for (;;) {
              let r = t[i + 1];
              if (((t[i + 1] = t[i]), (t[i] = r), !i || (e = ek(t[--i])) <= n))
                break;
            }
            e = ek(t[r]);
          }
        }
        return t;
      }
      function eT(e) {
        return eB(e).map(eN);
      }
      function eL(e) {
        return (function (e) {
          let t = [],
            r = [],
            n = -1,
            i = 0;
          for (let s of e) {
            let e = ek(s),
              o = eN(s);
            if (-1 == n) 0 == e ? (n = o) : t.push(o);
            else if (i > 0 && i >= e)
              0 == e ? (t.push(n, ...r), (r.length = 0), (n = o)) : r.push(o),
                (i = e);
            else {
              let s = (function (e, t) {
                if (e >= 4352 && e < 4371 && t >= 4449 && t < 4470)
                  return 44032 + (e - 4352) * 588 + (t - 4449) * 28;
                {
                  if (eC(e) && t > 4519 && t < 4547 && (e - 44032) % 28 == 0)
                    return e + (t - 4519);
                  let r = a.get(e);
                  return r && (r = r.get(t)) ? r : -1;
                }
              })(n, o);
              s >= 0
                ? (n = s)
                : 0 == i && 0 == e
                ? (t.push(n), (n = o))
                : (r.push(o), (i = e));
            }
          }
          return n >= 0 && t.push(n, ...r), t;
        })(eB(e));
      }
      let eU = (e) => Array.from(e);
      function eF(e, t) {
        return e.P.has(t) || e.Q.has(t);
      }
      class e_ extends Array {
        get is_emoji() {
          return !0;
        }
      }
      function eD() {
        let e, t;
        if (o) return;
        let r = ew(
            "AEEUdwmgDS8BxQKKAP4BOgDjATAAngDUAIMAoABoAOAAagCOAEQAhABMAHIAOwA9ACsANgAmAGIAHgAuACgAJwAXAC0AGgAjAB8ALwAUACkAEgAeAAkAGwARABkAFgA5ACgALQArADcAFQApABAAHgAiABAAGgAeABMAGAUhBe8BFxREN8sF2wC5AK5HAW8ArQkDzQCuhzc3NzcBP68NEfMABQdHBuw5BV8FYAA9MzkI9r4ZBg7QyQAWA9CeOwLNCjcCjqkChuA/lm+RAsXTAoP6ASfnEQDytQFJAjWVCkeXAOsA6godAB/cwdAUE0WlBCN/AQUCQRjFD/MRBjHxDQSJbw0jBzUAswBxme+tnIcAYwabAysG8QAjAEMMmxcDqgPKQyDXCMMxA7kUQwD3NXOrAKmFIAAfBC0D3x4BJQDBGdUFAhEgVD8JnwmQJiNWYUzrg0oAGwAUAB0AFnNcACkAFgBP9h3gPfsDOWDKneY2ChglX1UDYD30ABsAFAAdABZzIGRAnwDD8wAjAEEMzRbDqgMB2sAFYwXqAtCnAsS4AwpUJKRtFHsadUz9AMMVbwLpABM1NJEX0ZkCgYMBEyMAxRVvAukAEzUBUFAtmUwSAy4DBTER33EftQHfSwB5MxJ/AjkWKQLzL8E/cwBB6QH9LQDPDtO9ASNriQC5DQANAwCK21EFI91zHwCoL9kBqQcHBwcHKzUDowBvAQohPvU3fAQgHwCyAc8CKQMA5zMSezr7ULgFmDp/LzVQBgEGAi8FYQVgt8AFcTtlQhpCWEmfe5tmZ6IAExsDzQ8t+X8rBKtTAltbAn0jsy8Bl6utPWMDTR8Ei2kRANkDBrNHNysDBzECQWUAcwFpJ3kAiyUhAJ0BUb8AL3EfAbfNAz81KUsFWwF3YQZtAm0A+VEfAzEJDQBRSQCzAQBlAHsAM70GD/v3IZWHBwARKQAxALsjTwHZAeMPEzmXgIHwABIAGQA8AEUAQDt3gdvIEGcQZAkGTRFMdEIVEwK0D64L7REdDNkq09PgADSxB/MDWwfzA1sDWwfzB/MDWwfzA1sDWwNbA1scEvAi28gQZw9QBHUFlgWTBN4IiyZREYkHMAjaVBV0JhxPA00BBCMtSSQ7mzMTJUpMFE0LCAQ2SmyvfUADTzGzVP2QqgPTMlc5dAkGHnkSqAAyD3skNb1OhnpPcagKU0+2tYdJak5vAsY6sEAACikJm2/Dd1YGRRAfJ6kQ+ww3AbkBPw3xS9wE9QY/BM0fgRkdD9GVoAipLeEM8SbnLqWAXiP5KocF8Uv4POELUVFsD10LaQnnOmeBUgMlAREijwrhDT0IcRD3Cs1vDekRSQc9A9lJngCpBwULFR05FbkmFGKwCw05ewb/GvoLkyazEy17AAXXGiUGUQEtGwMA0y7rhbRaNVwgT2MGBwspI8sUrFAkDSlAu3hMGh8HGSWtApVDdEqLUToelyH6PEENai4XUYAH+TwJGVMLhTyiRq9FEhHWPpE9TCJNTDAEOYMsMyePCdMPiQy9fHYBXQklCbUMdRM1ERs3yQg9Bx0xlygnGQglRplgngT7owP3E9UDDwVDCUUHFwO5HDETMhUtBRGBKNsC9zbZLrcCk1aEARsFzw8pH+MQVEfkDu0InwJpA4cl7wAxFSUAGyKfCEdnAGOP3FMJLs8Iy2pwI3gDaxTrZRF3B5UOWwerHDcVwxzlcMxeD4YMKKezCV8BeQmdAWME5wgNNV+MpCBFZ1eLXBifIGVBQ14AAjUMaRWjRMGHfAKPD28SHwE5AXcHPQ0FAnsR8RFvEJkI74YINbkz/DopBFMhhyAVCisDU2zSCysm/Qz8bQGnEmYDEDRBd/Jnr2C6KBgBBx0yyUFkIfULlk/RDKAaxRhGVDIZ6AfDA/ca9yfuQVsGAwOnBxc6UTPyBMELbQiPCUMATQ6nGwfbGG4KdYzUATWPAbudA1uVhwJzkwY7Bw8Aaw+LBX3pACECqwinAAkA0wNbAD0CsQehAB0AiUUBQQMrMwEl6QKTA5cINc8BmTMB9y0EH8cMGQD7O25OAsO1AoBuZqYF4VwCkgJNOQFRKQQJUktVA7N15QDfAE8GF+NLARmvTs8e50cB43MvAMsA/wAJOQcJRQHRAfdxALsBYws1Caa3uQFR7S0AhwAZbwHbAo0A4QA5AIP1AVcAUQVd/QXXAlNNARU1HC9bZQG/AyMBNwERAH0Gz5GpzQsjBHEH1wIQHxXlAu8yB7kFAyLjE9FCyQK94lkAMhoKPAqrCqpgX2Q3CjV2PVQAEh+sPss/UgVVO1c7XDtXO1w7VztcO1c7XDtXO1wDm8Pmw+YKcF9JYe8Mqg3YRMw6TRPfYFVgNhPMLbsUxRXSJVoZQRrAJwkl6FUNDwgt12Y0CDA0eRfAAEMpbINFY4oeNApPHOtTlVT8LR8AtUumM7MNsBsZREQFS3XxYi4WEgomAmSFAmJGX1GzAV83JAKh+wJonAJmDQKfiDgfDwJmPwJmKgRyBIMDfxcDfpY5Cjl7GzmGOicnAmwhAjI6OA4CbcsCbbLzjgM3a0kvAWsA4gDlAE4JB5wMkQECD8YAEbkCdzMCdqZDAnlPRwJ4viFg30WyRvcCfEMCeswCfQ0CfPRIBEiBZygALxlJXEpfGRtK0ALRBQLQ0EsrA4hTA4fqRMmRNgLypV0HAwOyS9JMMSkH001QTbMCi0MCitzFHwshR2sJuwKOOwKOYESbhQKO3QKOYHxRuFM5AQ5S2FSJApP/ApMQAO0AIFUiVbNV1AosHymZijLleGpFPz0Cl6MC77ZYJawAXSkClpMCloCgAK1ZsFoNhVEAPwKWuQKWUlxIXNUCmc8CmWhczl0LHQKcnznGOqECnBoCn58CnryOACETNS4TAp31Ap6WALlBYThh8wKe1wKgcgGtAp6jIwKeUqljzGQrKS8CJ7MCJoICoP8CoFDbAqYzAqXSAqgDAIECp/ZogGi1AAdNaiBq1QKs5wKssgKtawKtBgJXIQJV4AKx5dsDH1JsmwKywRECsuwbbORtZ21MYwMl0QK2YD9DbpQDKUkCuGICuUsZArkue3A6cOUCvR0DLbYDMhUCvoxyBgMzdQK+HnMmc1MCw88CwwhzhnRPOUl05AM8qwEDPJ4DPcMCxYACxksCxhSNAshtVQLISALJUwLJMgJkoQLd1nh9ZXiyeSlL1AMYp2cGAmH4GfeVKHsPXpZevxUCz28Cz3AzT1fW9xejAMqxAs93AS3uA04Wfk8JAtwrAtuOAtJTA1JgA1NjAQUDVZCAjUMEzxrxZEl5A4LSg5EC2ssC2eKEFIRNp0ADhqkAMwNkEoZ1Xf0AWQLfaQLevHd7AuIz7RgB8zQrAfSfAfLWiwLr9wLpdH0DAur9AuroAP1LAb0C7o0C66CWrpcHAu5DA4XkmH1w5HGlAvMHAG0DjhqZlwL3FwORcgOSiwL3nAL53QL4apogmq+/O5siA52HAv7+AR8APZ8gAZ+3AwWRA6ZuA6bdANXJAwZuoYyiCQ0DDE0BEwEjB3EGZb1rCQC/BG/DFY8etxEAG3k9ACcDNxJRA42DAWcrJQCM8wAlAOanC6OVCLsGI6fJBgCvBRnDBvElRUYFFoAFcD9GSDNCKUK8X3kZX8QAls0FOgCQVCGbwTsuYDoZutcONxjOGJHJ/gVfBWAFXwVgBWsFYAVfBWAFXwVgBV8FYAVfBWBOHQjfjW8KCgoKbF7xMwTRA7kGN8PDAMMEr8MA70gxFroFTj5xPnhCR0K+X30/X/AAWBkzswCNBsxzzASm70aCRS4rDDMeLz49fnXfcsH5GcoscQFz13Y4HwVnBXLJycnACNdRYwgICAqEXoWTxgA7P4kACxbZBu21Kw0AjMsTAwkVAOVtJUUsJ1JCuULESUArXy9gPi9AKwnJRQYKTD9LPoA+iT54PnkCkULEUUpDX9NWV3JVEjQAc1w3A3IBE3YnX+g7QiMJb6MKaiszRCUuQrNCxDPMCcwEX9EWJzYREBEEBwIHKn6l33JCNVIfybPJtAltydPUCmhBZw/tEKsZAJOVJU1CLRuxbUHOQAo7P0s+eEJHHA8SJVRPdGM0NVrpvBoKhfUlM0JHHGUQUhEWO1xLSj8MO0ucNAqJIzVCRxv9EFsqKyA4OQgNj2nwZgp5ZNFgE2A1K3YHS2AhQQojJmC7DgpzGG1WYFUZCQYHZO9gHWCdYIVgu2BTYJlwFh8GvRbcXbG8YgtDHrMBwzPVyQonHQgkCyYBgQJ0Ajc4nVqIAwGSCsBPIgDsK3SWEtIVBa5N8gGjAo+kVwVIZwD/AEUSCDweX4ITrRQsJ8K3TwBXFDwEAB0TvzVcAtoTS20RIwDgVgZ9BBImYgA5AL4Coi8LFnezOkCnIQFjAY4KBAPh9RcGsgZSBsEAJctdsWIRu2kTkQstRw7DAcMBKgpPBGIGMDAwKCYnKTQaLg4AKRSVAFwCdl+YUZ0JdicFD3lPAdt1F9ZZKCGxuE3yBxkFVGcA/wBFEgiCBwAOLHQSjxOtQDg1z7deFRMAZ8QTAGtKb1ApIiPHADkAvgKiLy1DFtYCmBiDAlDDWNB0eo7fpaMO/aEVRRv0ATEQZBIODyMEAc8JQhCbDRgzFD4TAEMAu9YBCgCsAOkAm5I3ABwAYxvONnR+MhXJAxgKQyxL2+kkJhMbhQKDBMkSsvF0AD9BNQ6uQC7WqSQHwxEAEEIu1hkhAH2z4iQPwyJPHNWpdyYBRSpnJALzoBAEVPPsH20MxA0CCEQKRgAFyAtFAlMNwwjEDUQJRArELtapMg7DDZgJIw+TGukEIwvDFkMAqAtDEMMMBhioe+QAO3MMRAACrgnEBSPY9Q0FDnbSBoMAB8MSYxkSxAEJAPIJAAB8FWMOFtMc/HcXwxhDAC7DAvOowwAewwJdKDKHAAHDAALrFUQVwwAbwyvzpWMWv8wA/ABpAy++bcYDUKPD0KhDCwKmJ1MAAmMA5+UZwxAagwipBRL/eADfw6fDGOMCGsOjk3l6BwOpo4sAEsMOGxMAA5sAbcMOAAvDp0MJGkMDwgipnNIPAwfIqUMGAOGDAAPzABXDAAcDAAnDAGmTABrDAA7DChjDjnEWAwABYwAOcwAuUyYABsMAF8MIKQANUgC6wy4AA8MADqMq8wCyYgAcIwAB8wqpAAXOCx0V4wAHowBCwwEKAGnDAAuDAB3DAAjDCakABdIAbqcZ3QCZCCkABdIAAAFDAAfjAB2jCCkABqIACYMAGzMAbSMA5sOIAAhjAAhDABTDBAkpAAbSAOOTAAlDC6kOzPtnAAdDAG6kQFAATwAKwwwAA0MACbUDPwAHIwAZgwACE6cDAAojAApDAAoDp/MGwwAJIwADEwAQQwgAFEMAEXMAD5MADfMADcMAGRMOFiMAFUMAbqMWuwHDAMIAE0MLAGkzEgDhUwACQwAEWgAXgwUjAAbYABjDBSYBgzBaAEFNALcQBxUMegAwMngBrA0IZgJ0KxQHBREPd1N0ZzKRJwaIHAZqNT4DqQq8BwngAB4DAwt2AX56T1ocKQNXAh1GATQGC3tOxYNagkgAMQA5CQADAQEAWxLjAIOYNAEzAH7tFRk6TglSAF8NAAlYAQ+S1ACAQwQorQBiAN4dAJ1wPyeTANVzuQDX3AIeEMp9eyMgXiUAEdkBkJizKltbVVAaRMqRAAEAhyQ/SDEz6BmfVwB6ATEsOClKIRcDOF0E/832AFNt5AByAnkCRxGCOs94NjXdAwINGBonDBwPALW2AwICAgAAAAAAAAYDBQMDARrUAwAtAAAAAgEGBgYGBgYFBQUFBQUEBQYHCAkEBQUFBQQAAAICAAAAIgCNAJAAlT0A6gC7ANwApEQAwgCyAK0AqADuAKYA2gCjAOcBCAEDAMcAgQBiANIA1AEDAN4A8gCQAKkBMQDqAN8A3AsBCQ8yO9ra2tq8xuLT1tRJOB0BUgFcNU0BWgFpAWgBWwFMUUlLbhMBUxsNEAs6PhMOACcUKy0vMj5AQENDQ0RFFEYGJFdXV1dZWVhZL1pbXVxcI2NnZ2ZoZypsbnZ1eHh4eHh4enp6enp6enp6enp8fH18e2IARPIASQCaAHgAMgBm+ACOAFcAVwA3AnbvAIsABfj4AGQAk/IAnwBPAGIAZP//sACFAIUAaQBWALEAJAC2AIMCQAJDAPwA5wD+AP4A6AD/AOkA6QDoAOYALwJ7AVEBQAE+AVQBPgE+AT4BOQE4ATgBOAEcAVgXADEQCAEAUx8SHgsdHhYAjgCWAKYAUQBqIAIxAHYAbwCXAxUDJzIDIUlGTzEAkQJPAMcCVwKkAMAClgKWApYClgKWApYCiwKWApYClgKWApYClgKVApUCmAKgApcClgKWApQClAKUApQCkgKVAnUB1AKXAp8ClgKWApUeAIETBQD+DQOfAmECOh8BVBg9AuIZEjMbAU4/G1WZAXusRAFpYQEFA0FPAQYAmTEeIJdyADFoAHEANgCRA5zMk/C2jGINwjMWygIZCaXdfDILBCs5dAE7YnQBugDlhoiHhoiGiYqKhouOjIaNkI6Ij4qQipGGkoaThpSSlYaWhpeKmIaZhpqGm4aci52QnoqfhuIC4XTpAt90AIp0LHSoAIsAdHQEQwRABEIERQRDBEkERgRBBEcESQRIBEQERgRJAJ5udACrA490ALxuAQ10ANFZdHQA13QCFHQA/mJ0AP4BIQD+APwA/AD9APwDhGZ03ASMK23HAP4A/AD8AP0A/CR0dACRYnQA/gCRASEA/gCRAvQA/gCRA4RmdNwEjCttxyR0AP9idAEhAP4A/gD8APwA/QD8AP8A/AD8AP0A/AOEZnTcBIwrbcckdHQAkWJ0ASEA/gCRAP4AkQL0AP4AkQOEZnTcBIwrbcckdAJLAT50AlIBQXQCU8l0dAJfdHQDpgL0A6YDpgOnA6cDpwOnA4RmdNwEjCttxyR0dACRYnQBIQOmAJEDpgCRAvQDpgCRA4RmdNwEjCttxyR0BDh0AJEEOQCRDpU5dSgCADR03gV2CwArdAEFAM5iCnR0AF1iAAYcOgp0dACRCnQAXAEIwWZ0CnRmdHQAkWZ0CnRmdEXgAFF03gp0dEY0tlT2u3SOAQTwscwhjZZKrhYcBSfFp9XNbKiVDOD2b+cpe4/Z17mQnbtzzhaeQtE2GGj0IDNTjRUSyTxxw/RPHW/+vS7d1NfRt9z9QPZg4X7QFfhCnkvgNPIItOsC2eV6hPannZNHlZ9xrwZXIMOlu3jSoQSq78WEjwLjw1ELSlF1aBvfzwk5ZX7AUvQzjPQKbDuQ+sm4wNOp4A6AdVuRS0t1y/DZpg4R6m7FNjM9HgvW7Bi88zaMjOo6lM8wtBBdj8LP4ylv3zCXPhebMKJc066o9sF71oFW/8JXu86HJbwDID5lzw5GWLR/LhT0Qqnp2JQxNZNfcbLIzPy+YypqRm/lBmGmex+82+PisxUumSeJkALIT6rJezxMH+CTJmQtt5uwTVbL3ptmjDUQzlSIvWi8Tl7ng1NpuRn1Ng4n14Qc+3Iil7OwkvNWogLSPkn3pihIFytyIGmMhOe3n1tWsuMy9BdKyqF4Z3v2SgggTL9KVvMXPnCbRe+oOuFFP3HejBG/w9gvmfNYvg6JuWia2lcSSN1uIjBktzoIazOHPJZ7kKHPz8mRWVdW3lA8WGF9dQF6Bm673boov3BUWDU2JNcahR23GtfHKLOz/viZ+rYnZFaIznXO67CYEJ1fXuTRpZhYZkKe54xeoagkNGLs+NTZHE0rX45/XvQ2RGADX6vcAvdxIUBV27wxGm2zjZo4X3ILgAlrOFheuZ6wtsvaIj4yLY7qqawlliaIcrz2G+c3vscAnCkCuMzMmZvMfu9lLwTvfX+3cVSyPdN9ZwgDZhfjRgNJcLiJ67b9xx8JHswprbiE3v9UphotAPIgnXVIN5KmMc0piXhc6cChPnN+MRhG9adtdttQTTwSIpl8I4/j//d3sz1326qTBTpPRM/Hgh3kzqEXs8ZAk4ErQhNO8hzrQ0DLkWMA/N+91tn2MdOJnWC2FCZehkQrwzwbKOjhvZsbM95QoeL9skYyMf4srVPVJSgg7pOLUtr/n9eT99oe9nLtFRpjA9okV2Kj8h9k5HaC0oivRD8VyXkJ81tcd4fHNXPCfloIQasxsuO18/46dR2jgul/UIet2G0kRvnyONMKhHs6J26FEoqSqd+rfYjeEGwHWVDpX1fh1jBBcKGMqRepju9Y00mDVHC+Xdij/j44rKfvfjGinNs1jO/0F3jB83XCDINN/HB84axlP+3E/klktRo+vl3U/aiyMJbIodE1XSsDn6UAzIoMtUObY2+k/4gY/l+AkZJ5Sj2vQrkyLm3FoxjhDX+31UXBFf9XrAH31fFqoBmDEZvhvvpnZ87N+oZEu7U9O/nnk+QWj3x8uyoRbEnf+O5UMr9i0nHP38IF5AvzrBW8YWBUR0mIAzIvndQq9N3v/Jto3aPjPXUPl8ASdPPyAp7jENf8bk7VMM9ol9XGmlBmeDMuGqt+WzuL6CXAxXjIhCPM5vACchgMJ/8XBGLO/D1isVvGhwwHHr1DLaI5mn2Jr/b1pUD90uciDaS8cXNDzCWvNmT/PhQe5e8nTnnnkt8Ds/SIjibcum/fqDhKopxAY8AkSrPn+IGDEKOO+U3XOP6djFs2H5N9+orhOahiQk5KnEUWa+CzkVzhp8bMHRbg81qhjjXuIKbHjSLSIBKWqockGtKinY+z4/RdBUF6pcc3JmnlxVcNgrI4SEzKUZSwcD2QCyxzKve+gAmg6ZuSRkpPFa6mfThu7LJNu3H5K42uCpNvPAsoedolKV/LHe/eJ+BbaG5MG0NaSGVPRUmNFMFFSSpXEcXwbVh7UETOZZtoVNRGOIbbkig3McEtR68cG0RZAoJevWYo7Dg/lZ1CQzblWeUvVHmr8fY4Nqd9JJiH/zEX24mJviH60fAyFr0A3c4bC1j3yZU60VgJxXn8JgJXLUIsiBnmKmMYz+7yBQFBvqb2eYnuW59joZBf56/wXvWIR4R8wTmV80i1mZy+S4+BUES+hzjk0uXpC///z/IlqHZ1monzlXp8aCfhGKMti73FI1KbL1q6IKO4fuBuZ59gagjn5xU79muMpHXg6S+e+gDM/U9BKLHbl9l6o8czQKl4RUkJJiqftQG2i3BMg/TQlUYFkJDYBOOvAugYuzYSDnZbDDd/aSd9x0Oe6F+bJcHfl9+gp6L5/TgA+BdFFovbfCrQ40s5vMPw8866pNX8zyFGeFWdxIpPVp9Rg1UPOVFbFZrvaFq/YAzHQgqMWpahMYfqHpmwXfHL1/kpYmGuHFwT55mQu0dylfNuq2Oq0hTMCPwqfxnuBIPLXfci4Y1ANy+1CUipQxld/izVh16WyG2Q0CQQ9NqtAnx1HCHwDj7sYxOSB0wopZSnOzxQOcExmxrVTF2BkOthVpGfuhaGECfCJpJKpjnihY+xOT2QJxN61+9K6QSqtv2Shr82I3jgJrqBg0wELFZPjvHpvzTtaJnLK6Vb97Yn933koO/saN7fsjwNKzp4l2lJVx2orjCGzC/4ZL4zCver6aQYtC5sdoychuFE6ufOiog+VWi5UDkbmvmtah/3aArEBIi39s5ILUnlFLgilcGuz9CQshEY7fw2ouoILAYPVT/gyAIq3TFAIwVsl+ktkRz/qGfnCDGrm5gsl/l9QdvCWGsjPz3dU7XuqKfdUrr/6XIgjp4rey6AJBmCmUJMjITHVdFb5m1p+dLMCL8t55zD42cmftmLEJC0Da04YiRCVUBLLa8D071/N5UBNBXDh0LFsmhV/5B5ExOB4j3WVG/S3lfK5o+V6ELHvy6RR9n4ac+VsK4VE4yphPvV+kG9FegTBH4ZRXL2HytUHCduJazB/KykjfetYxOXTLws267aGOd+I+JhKP//+VnXmS90OD/jvLcVu0asyqcuYN1mSb6XTlCkqv1vigZPIYwNF/zpWcT1GR/6aEIRjkh0yhg4LXJfaGobYJTY4JI58KiAKgmmgAKWdl5nYCeLqavRJGQNuYuZtZFGx+IkI4w4NS2xwbetNMunOjBu/hmKCI/w7tfiiyUd//4rbTeWt4izBY8YvGIN6vyKYmP/8X8wHKCeN+WRcKM70+tXKNGyevU9H2Dg5BsljnTf8YbsJ1TmMs74Ce2XlHisleguhyeg44rQOHZuw/6HTkhnnurK2d62q6yS7210SsAIaR+jXMQA+svkrLpsUY+F30Uw89uOdGAR6vo4FIME0EfVVeHTu6eKicfhSqOeXJhbftcd08sWEnNUL1C9fnprTgd83IMut8onVUF0hvqzZfHduPjbjwEXIcoYmy+P6tcJZHmeOv6VrvEdkHDJecjHuHeWANe79VG662qTjA/HCvumVv3qL+LrOcpqGps2ZGwQdFJ7PU4iuyRlBrwfO+xnPyr47s2cXVbWzAyznDiBGjCM3ksxjjqM62GE9C8f5U38kB3VjtabKp/nRdvMESPGDG90bWRLAt1Qk5DyLuazRR1YzdC1c+hZXvAWV8xA72S4A8B67vjVhbba3MMop293FeEXpe7zItMWrJG/LOH9ByOXmYnNJfjmfuX9KbrpgLOba4nZ+fl8Gbdv/ihv+6wFGKHCYrVwmhFC0J3V2bn2tIB1wCc1CST3d3X2OyxhguXcs4sm679UngzofuSeBewMFJboIQHbUh/m2JhW2hG9DIvG2t7yZIzKBTz9wBtnNC+2pCRYhSIuQ1j8xsz5VvqnyUIthvuoyyu7fNIrg/KQUVmGQaqkqZk/Vx5b33/gsEs8yX7SC1J+NV4icz6bvIE7C5G6McBaI8rVg56q5QBJWxn/87Q1sPK4+sQa8fLU5gXo4paaq4cOcQ4wR0VBHPGjKh+UlPCbA1nLXyEUX45qZ8J7/Ln4FPJE2TdzD0Z8MLSNQiykMMmSyOCiFfy84Rq60emYB2vD09KjYwsoIpeDcBDTElBbXxND72yhd9pC/1CMid/5HUMvAL27OtcIJDzNKpRPNqPOpyt2aPGz9QWIs9hQ9LiX5s8m9hjTUu/f7MyIatjjd+tSfQ3ufZxPpmJhTaBtZtKLUcfOCUqADuO+QoH8B9v6U+P0HV1GLQmtoNFTb3s74ivZgjES0qfK+8RdGgBbcCMSy8eBvh98+et1KIFqSe1KQPyXULBMTsIYnysIwiZBJYdI20vseV+wuJkcqGemehKjaAb9L57xZm3g2zX0bZ2xk/fU+bCo7TlnbW7JuF1YdURo/2Gw7VclDG1W7LOtas2LX4upifZ/23rzpsnY/ALfRgrcWP5hYmV9VxVOQA1fZvp9F2UNU+7d7xRyVm5wiLp3/0dlV7vdw1PMiZrbDAYzIVqEjRY2YU03sJhPnlwIPcZUG5ltL6S8XCxU1eYS5cjr34veBmXAvy7yN4ZjArIG0dfD/5UpBNlX1ZPoxJOwyqRi3wQWtOzd4oNKh0LkoTm8cwqgIfKhqqGOhwo71I+zXnMemTv2B2AUzABWyFztGgGULjDDzWYwJUVBTjKCn5K2QGMK1CQT7SzziOjo+BhAmqBjzuc3xYym2eedGeOIRJVyTwDw37iCMe4g5Vbnsb5ZBdxOAnMT7HU4DHpxWGuQ7GeiY30Cpbvzss55+5Km1YsbD5ea3NI9QNYIXol5apgSu9dZ8f8xS5dtHpido5BclDuLWY4lhik0tbJa07yJhH0BOyEut/GRbYTS6RfiTYWGMCkNpfSHi7HvdiTglEVHKZXaVhezH4kkXiIvKopYAlPusftpE4a5IZwvw1x/eLvoDIh/zpo9FiQInsTb2SAkKHV42XYBjpJDg4374XiVb3ws4qM0s9eSQ5HzsMU4OZJKuopFjBM+dAZEl8RUMx5uU2N486Kr141tVsGQfGjORYMCJAMsxELeNT4RmWjRcpdTGBwcx6XN9drWqPmJzcrGrH4+DRc7+n1w3kPZwu0BkNr6hQrqgo7JTB9A5kdJ/H7P4cWBMwsmuixAzJB3yrQpnGIq90lxAXLzDCdn1LPibsRt7rHNjgQBklRgPZ8vTbjXdgXrTWQsK5MdrXXQVPp0Rinq3frzZKJ0qD6Qhc40VzAraUXlob1gvkhK3vpmHgI6FRlQZNx6eRqkp0zy4AQlX813fAPtL3jMRaitGFFjo0zmErloC+h+YYdVQ6k4F/epxAoF0BmqEoKNTt6j4vQZNQ2BoqF9Vj53TOIoNmDiu9Xp15RkIgQIGcoLpfoIbenzpGUAtqFJp5W+LLnx38jHeECTJ/navKY1NWfN0sY1T8/pB8kIH3DU3DX+u6W3YwpypBMYOhbSxGjq84RZ84fWJow8pyHqn4S/9J15EcCMsXqrfwyd9mhiu3+rEo9pPpoJkdZqHjra4NvzFwuThNKy6hao/SlLw3ZADUcUp3w3SRVfW2rhl80zOgTYnKE0Hs2qp1J6H3xqPqIkvUDRMFDYyRbsFI3M9MEyovPk8rlw7/0a81cDVLmBsR2ze2pBuKb23fbeZC0uXoIvDppfTwIDxk1Oq2dGesGc+oJXWJLGkOha3CX+DUnzgAp9HGH9RsPZN63Hn4RMA5eSVhPHO+9RcRb/IOgtW31V1Q5IPGtoxPjC+MEJbVlIMYADd9aHYWUIQKopuPOHmoqSkubnAKnzgKHqgIOfW5RdAgotN6BN+O2ZYHkuemLnvQ8U9THVrS1RtLmKbcC7PeeDsYznvqzeg6VCNwmr0Yyx1wnLjyT84BZz3EJyCptD3yeueAyDWIs0L2qs/VQ3HUyqfrja0V1LdDzqAikeWuV4sc7RLIB69jEIBjCkyZedoUHqCrOvShVzyd73OdrJW0hPOuQv2qOoHDc9xVb6Yu6uq3Xqp2ZaH46A7lzevbxQEmfrzvAYSJuZ4WDk1Hz3QX1LVdiUK0EvlAGAYlG3Md30r7dcPN63yqBCIj25prpvZP0nI4+EgWoFG95V596CurXpKRBGRjQlHCvy5Ib/iW8nZJWwrET3mgd6mEhfP4KCuaLjopWs7h+MdXFdIv8dHQJgg1xi1eYqB0uDYjxwVmri0Sv5XKut/onqapC+FQiC2C1lvYJ9MVco6yDYsS3AANUfMtvtbYI2hfwZatiSsnoUeMZd34GVjkMMKA+XnjJpXgRW2SHTZplVowPmJsvXy6w3cfO1AK2dvtZEKTkC/TY9LFiKHCG0DnrMQdGm2lzlBHM9iEYynH2UcVMhUEjsc0oDBTgo2ZSQ1gzkAHeWeBXYFjYLuuf8yzTCy7/RFR81WDjXMbq2BOH5dURnxo6oivmxL3cKzKInlZkD31nvpHB9Kk7GfcfE1t+1V64b9LtgeJGlpRFxQCAqWJ5DoY77ski8gsOEOr2uywZaoO/NGa0X0y1pNQHBi3b2SUGNpcZxDT7rLbBf1FSnQ8guxGW3W+36BW0gBje4DOz6Ba6SVk0xiKgt+q2JOFyr4SYfnu+Ic1QZYIuwHBrgzr6UvOcSCzPTOo7D6IC4ISeS7zkl4h+2VoeHpnG/uWR3+ysNgPcOIXQbv0n4mr3BwQcdKJxgPSeyuP/z1Jjg4e9nUvoXegqQVIE30EHx5GHv+FAVUNTowYDJgyFhf5IvlYmEqRif6+WN1MkEJmDcQITx9FX23a4mxy1AQRsOHO/+eImX9l8EMJI3oPWzVXxSOeHU1dUWYr2uAA7AMb+vAEZSbU3qob9ibCyXeypEMpZ6863o6QPqlqGHZkuWABSTVNd4cOh9hv3qEpSx2Zy/DJMP6cItEmiBJ5PFqQnDEIt3NrA3COlOSgz43D7gpNFNJ5MBh4oFzhDPiglC2ypsNU4ISywY2erkyb1NC3Qh/IfWj0eDgZI4/ln8WPfBsT3meTjq1Uqt1E7Zl/qftqkx6aM9KueMCekSnMrcHj1CqTWWzEzPsZGcDe3Ue4Ws+XFYVxNbOFF8ezkvQGR6ZOtOLU2lQEnMBStx47vE6Pb7AYMBRj2OOfZXfisjJnpTfSNjo6sZ6qSvNxZNmDeS7Gk3yYyCk1HtKN2UnhMIjOXUzAqDv90lx9O/q/AT1ZMnit5XQe9wmQxnE/WSH0CqZ9/2Hy+Sfmpeg8RwsHI5Z8kC8H293m/LHVVM/BA7HaTJYg5Enk7M/xWpq0192ACfBai2LA/qrCjCr6Dh1BIMzMXINBmX96MJ5Hn2nxln/RXPFhwHxUmSV0EV2V0jm86/dxxuYSU1W7sVkEbN9EzkG0QFwPhyHKyb3t+Fj5WoUUTErcazE/N6EW6Lvp0d//SDPj7EV9UdJN+Amnf3Wwk3A0SlJ9Z00yvXZ7n3z70G47Hfsow8Wq1JXcfwnA+Yxa5mFsgV464KKP4T31wqIgzFPd3eCe3j5ory5fBF2hgCFyVFrLzI9eetNXvM7oQqyFgDo4CTp/hDV9NMX9JDHQ/nyHTLvZLNLF6ftn2OxjGm8+PqOwhxnPHWipkE/8wbtyri80Sr7pMNkQGMfo4ZYK9OcCC4ESVFFbLMIvlxSoRqWie0wxqnLfcLSXMSpMMQEJYDVObYsXIQNv4TGNwjq1kvT1UOkicTrG3IaBZ3XdScS3u8sgeZPVpOLkbiF940FjbCeNRINNvDbd01EPBrTCPpm12m43ze1bBB59Ia6Ovhnur/Nvx3IxwSWol+3H2qfCJR8df6aQf4v6WiONxkK+IqT4pKQrZK/LplgDI/PJZbOep8dtbV7oCr6CgfpWa8NczOkPx81iSHbsNhVSJBOtrLIMrL31LK9TqHqAbAHe0RLmmV806kRLDLNEhUEJfm9u0sxpkL93Zgd6rw+tqBfTMi59xqXHLXSHwSbSBl0EK0+loECOPtrl+/nsaFe197di4yUgoe4jKoAJDXc6DGDjrQOoFDWZJ9HXwt8xDrQP+7aRwWKWI1GF8s8O4KzxWBBcwnl3vnl1Oez3oh6Ea1vjR7/z7DDTrFtqU2W/KAEzAuXDNZ7MY73MF216dzdSbWmUp4lcm7keJfWaMHgut9x5C9mj66Z0lJ+yhsjVvyiWrfk1lzPOTdhG15Y7gQlXtacvI7qv/XNSscDwqkgwHT/gUsD5yB7LdRRvJxQGYINn9hTpodKFVSTPrtGvyQw+HlRFXIkodErAGu9Iy1YpfSPc3jkFh5CX3lPxv7aqjE/JAfTIpEjGb/H7MO0e2vsViSW1qa/Lmi4/n4DEI3g7lYrcanspDfEpKkdV1OjSLOy0BCUqVoECaB55vs06rXl4jqmLsPsFM/7vYJ0vrBhDCm/00A/H81l1uekJ/6Lml3Hb9+NKiLqATJmDpyzfYZFHumEjC662L0Bwkxi7E9U4cQA0XMVDuMYAIeLMPgQaMVOd8fmt5SflFIfuBoszeAw7ow5gXPE2Y/yBc/7jExARUf/BxIHQBF5Sn3i61w4z5xJdCyO1F1X3+3ax+JSvMeZ7S6QSKp1Fp/sjYz6Z+VgCZzibGeEoujryfMulH7Rai5kAft9ebcW50DyJr2uo2z97mTWIu45YsSnNSMrrNUuG1XsYBtD9TDYzQffKB87vWbkM4EbPAFgoBV4GQS+vtFDUqOFAoi1nTtmIOvg38N4hT2Sn8r8clmBCXspBlMBYTnrqFJGBT3wZOzAyJDre9dHH7+x7qaaKDOB4UQALD5ecS0DE4obubQEiuJZ0EpBVpLuYcce8Aa4PYd/V4DLDAJBYKQPCWTcrEaZ5HYbJi11Gd6hjGom1ii18VHYnG28NKpkz2UKVPxlhYSp8uZr367iOmoy7zsxehW9wzcy2zG0a80PBMCRQMb32hnaHeOR8fnNDzZhaNYhkOdDsBUZ3loDMa1YP0uS0cjUP3b/6DBlqmZOeNABDsLl5BI5QJups8uxAuWJdkUB/pO6Zax6tsg7fN5mjjDgMGngO+DPcKqiHIDbFIGudxtPTIyDi9SFMKBDcfdGQRv41q1AqmxgkVfJMnP8w/Bc7N9/TR6C7mGObFqFkIEom8sKi2xYqJLTCHK7cxzaZvqODo22c3wisBCP4HeAgcRbNPAsBkNRhSmD48dHupdBRw4mIvtS5oeF6zeT1KMCyhMnmhpkFAGWnGscoNkwvQ8ZM5lE/vgTHFYL99OuNxdFBxTEDd5v2qLR8y9WkXsWgG6kZNndFG+pO/UAkOCipqIhL3hq7cRSdrCq7YhUsTocEcnaFa6nVkhnSeRYUA1YO0z5itF9Sly3VlxYDw239TJJH6f3EUfYO5lb7bcFcz8Bp7Oo8QmnsUHOz/fagVUBtKEw1iT88j+aKkv8cscKNkMxjYr8344D1kFoZ7/td1W6LCNYN594301tUGRmFjAzeRg5vyoM1F6+bJZ/Q54jN/k8SFd3DxPTYaAUsivsBfgTn7Mx8H2SpPt4GOdYRnEJOH6jHM2p6SgB0gzIRq6fHxGMmSmqaPCmlfwxiuloaVIitLGN8wie2CDWhkzLoCJcODh7KIOAqbHEvXdUxaS4TTTs07Clzj/6GmVs9kiZDerMxEnhUB6QQPlcfqkG9882RqHoLiHGBoHfQuXIsAG8GTAtao2KVwRnvvam8jo1e312GQAKWEa4sUVEAMG4G6ckcONDwRcg1e2D3+ohXgY4UAWF8wHKQMrSnzCgfFpsxh+aHXMGtPQroQasRY4U6UdG0rz1Vjbka0MekOGRZQEvqQFlxseFor8zWFgHek3v29+WqN6gaK5gZOTOMZzpQIC1201LkMCXild3vWXSc5UX9xcFYfbRPzGFa1FDcPfPB/jUEq/FeGt419CI3YmBlVoHsa4KdcwQP5ZSwHHhFJ7/Ph/Rap/4vmG91eDwPP0lDfCDRCLszTqfzM71xpmiKi2HwS4WlqvGNwtvwF5Dqpn6KTq8ax00UMPkxDcZrEEEsIvHiUXXEphdb4GB4FymlPwBz4Gperqq5pW7TQ6/yNRhW8VT5NhuP0udlxo4gILq5ZxAZk8ZGh3g4CqxJlPKY7AQxupfUcVpWT5VItp1+30UqoyP4wWsRo3olRRgkWZZ2ZN6VC3OZFeXB8NbnUrSdikNptD1QiGuKkr8EmSR/AK9Rw+FF3s5uwuPbvHGiPeFOViltMK7AUaOsq9+x9cndk3iJEE5LKZRlWJbKOZweROzmPNVPkjE3K/TyA57Rs68TkZ3MR8akKpm7cFjnjPd/DdkWjgYoKHSr5Wu5ssoBYU4acRs5g2DHxUmdq8VXOXRbunD8QN0LhgkssgahcdoYsNvuXGUK/KXD/7oFb+VGdhqIn02veuM5bLudJOc2Ky0GMaG4W/xWBxIJcL7yliJOXOpx0AkBqUgzlDczmLT4iILXDxxtRR1oZa2JWFgiAb43obrJnG/TZC2KSK2wqOzRZTXavZZFMb1f3bXvVaNaK828w9TO610gk8JNf3gMfETzXXsbcvRGCG9JWQZ6+cDPqc4466Yo2RcKH+PILeKOqtnlbInR3MmBeGG3FH10yzkybuqEC2HSQwpA0An7d9+73BkDUTm30bZmoP/RGbgFN+GrCOfADgqr0WbI1a1okpFms8iHYw9hm0zUvlEMivBRxModrbJJ+9/p3jUdQQ9BCtQdxnOGrT5dzRUmw0593/mbRSdBg0nRvRZM5/E16m7ZHmDEtWhwvfdZCZ8J8M12W0yRMszXamWfQTwIZ4ayYktrnscQuWr8idp3PjT2eF/jmtdhIfcpMnb+IfZY2FebW6UY/AK3jP4u3Tu4zE4qlnQgLFbM19EBIsNf7KhjdbqQ/D6yiDb+NlEi2SKD+ivXVUK8ib0oBo366gXkR8ZxGjpJIDcEgZPa9TcYe0TIbiPl/rPUQDu3XBJ9X/GNq3FAUsKsll57DzaGMrjcT+gctp+9MLYXCq+sqP81eVQ0r9lt+gcQfZbACRbEjvlMskztZG8gbC8Qn9tt26Q7y7nDrbZq/LEz7kR6Jc6pg3N9rVX8Y5MJrGlML9p9lU4jbTkKqCveeZUJjHB03m2KRKR2TytoFkTXOLg7keU1s1lrPMQJpoOKLuAAC+y1HlJucU6ysB5hsXhvSPPLq5J7JtnqHKZ4vYjC4Vy8153QY+6780xDuGARsGbOs1WqzH0QS765rnSKEbbKlkO8oI/VDwUd0is13tKpqILu1mDJFNy/iJAWcvDgjxvusIT+PGz3ST/J9r9Mtfd0jpaGeiLYIqXc7DiHSS8TcjFVksi66PEkxW1z6ujbLLUGNNYnzOWpH8BZGK4bCK7iR+MbIv8ncDAz1u4StN3vTTzewr9IQjk9wxFxn+6N1ddKs0vffJiS08N3a4G1SVrlZ97Q/M+8G9fe5AP6d9/Qq4WRnORVhofPIKEdCr3llspUfE0oKIIYoByBRPh+bX1HLS3JWGJRhIvE1aW4NTd8ePi4Z+kXb+Z8snYfSNcqijhAgVsx4RCM54cXUiYkjeBmmC4ajOHrChoELscJJC7+9jjMjw5BagZKlgRMiSNYz7h7vvZIoQqbtQmspc0cUk1G/73iXtSpROl5wtLgQi0mW2Ex8i3WULhcggx6E1LMVHUsdc9GHI1PH3U2Ko0PyGdn9KdVOLm7FPBui0i9a0HpA60MsewVE4z8CAt5d401Gv6zXlIT5Ybit1VIA0FCs7wtvYreru1fUyW3oLAZ/+aTnZrOcYRNVA8spoRtlRoWflsRClFcgzkqiHOrf0/SVw+EpVaFlJ0g4Kxq1MMOmiQdpMNpte8lMMQqm6cIFXlnGbfJllysKDi+0JJMotkqgIxOSQgU9dn/lWkeVf8nUm3iwX2Nl3WDw9i6AUK3vBAbZZrcJpDQ/N64AVwjT07Jef30GSSmtNu2WlW7YoyW2FlWfZFQUwk867EdLYKk9VG6JgEnBiBxkY7LMo4YLQJJlAo9l/oTvJkSARDF/XtyAzM8O2t3eT/iXa6wDN3WewNmQHdPfsxChU/KtLG2Mn8i4ZqKdSlIaBZadxJmRzVS/o4yA65RTSViq60oa395Lqw0pzY4SipwE0SXXsKV+GZraGSkr/RW08wPRvqvSUkYBMA9lPx4m24az+IHmCbXA+0faxTRE9wuGeO06DIXa6QlKJ3puIyiuAVfPr736vzo2pBirS+Vxel3TMm3JKhz9o2ZoRvaFVpIkykb0Hcm4oHFBMcNSNj7/4GJt43ogonY2Vg4nsDQIWxAcorpXACzgBqQPjYsE/VUpXpwNManEru4NwMCFPkXvMoqvoeLN3qyu/N1eWEHttMD65v19l/0kH2mR35iv/FI+yjoHJ9gPMz67af3Mq/BoWXqu3rphiWMXVkmnPSEkpGpUI2h1MThideGFEOK6YZHPwYzMBvpNC7+ZHxPb7epfefGyIB4JzO9DTNEYnDLVVHdQyvOEVefrk6Uv5kTQYVYWWdqrdcIl7yljwwIWdfQ/y+2QB3eR/qxYObuYyB4gTbo2in4PzarU1sO9nETkmj9/AoxDA+JM3GMqQtJR4jtduHtnoCLxd1gQUscHRB/MoRYIEsP2pDZ9KvHgtlk1iTbWWbHhohwFEYX7y51fUV2nuUmnoUcqnWIQAAgl9LTVX+Bc0QGNEhChxHR4YjfE51PUdGfsSFE6ck7BL3/hTf9jLq4G1IafINxOLKeAtO7quulYvH5YOBc+zX7CrMgWnW47/jfRsWnJjYYoE7xMfWV2HN2iyIqLI"
          ),
          n = () => eA(r),
          i = () => new Set(n()),
          s = (e, t) => t.forEach((t) => e.add(t));
        (o = new Map(eE(r))),
          (l = i()),
          (u = n()),
          (f = new Set(n().map((e) => u[e]))),
          (u = new Set(u)),
          (c = i()),
          (d = i());
        let a = ex(r),
          v = r(),
          w = () => {
            let e = new Set();
            return n().forEach((t) => s(e, a[t])), s(e, n()), e;
          };
        (h = eR((e) => {
          let t = eR(r).map((e) => e + 96);
          if (t.length) {
            let n = e >= v;
            (t[0] -= 32), (t = eP(t)), n && (t = `Restricted[${t}]`);
            let i = w();
            return { N: t, P: i, Q: w(), M: !r(), R: n };
          }
        })),
          (p = i()),
          (b = new Map());
        let A = n()
          .concat(eU(p))
          .sort((e, t) => e - t);
        for (let { V: e, M: t } of (A.forEach((e, t) => {
          let n = r(),
            i = (A[t] = n ? A[t - n] : { V: [], M: new Map() });
          i.V.push(e), p.has(e) || b.set(e, i);
        }),
        new Set(b.values()))) {
          let r = [];
          for (let t of e) {
            let e = h.filter((e) => eF(e, t)),
              n = r.find(({ G: t }) => e.some((e) => t.has(e)));
            n || ((n = { G: new Set(), V: [] }), r.push(n)),
              n.V.push(t),
              s(n.G, e);
          }
          let n = r.flatMap((e) => eU(e.G));
          for (let { G: e, V: i } of r) {
            let r = new Set(n.filter((t) => !e.has(t)));
            for (let e of i) t.set(e, r);
          }
        }
        g = new Set();
        let x = new Set(),
          E = (e) => (g.has(e) ? x.add(e) : g.add(e));
        for (let e of h) {
          for (let t of e.P) E(t);
          for (let t of e.Q) E(t);
        }
        for (let e of g) b.has(e) || x.has(e) || b.set(e, 1);
        for (let n of (s(g, eB(g).map(eN)),
        (m = ((e = []),
        (t = eA(r)),
        (function t({ S: r, B: n }, i, s) {
          if (!(4 & r) || s !== i[i.length - 1])
            for (let a of (2 & r && (s = i[i.length - 1]),
            1 & r && e.push(i),
            n))
              for (let e of a.Q) t(a, [...i, e], s);
        })(
          (function e(n) {
            return {
              S: r(),
              B: eR(() => {
                let n = eA(r).map((e) => t[e]);
                if (n.length) return e(n);
              }),
              Q: n,
            };
          })([]),
          []
        ),
        e)
          .map((e) => e_.from(e))
          .sort(eO)),
        (y = new Map()),
        m)) {
          let e = [y];
          for (let t of n) {
            let r = e.map((e) => {
              let r = e.get(t);
              return r || ((r = new Map()), e.set(t, r)), r;
            });
            65039 === t ? e.push(...r) : (e = r);
          }
          for (let t of e) t.V = n;
        }
      }
      function ej(e) {
        return (eq(e) ? "" : `${ez(eG([e]))} `) + eS(e);
      }
      function ez(e) {
        return `"${e}"\u200E`;
      }
      function eG(e, t = 1 / 0, r = eS) {
        var n;
        let i = [];
        (n = e[0]),
          eD(),
          u.has(n) && i.push("◌"),
          e.length > t &&
            ((t >>= 1), (e = [...e.slice(0, t), 8230, ...e.slice(-t)]));
        let s = 0,
          a = e.length;
        for (let t = 0; t < a; t++) {
          let n = e[t];
          eq(n) && (i.push(eP(e.slice(s, t))), i.push(r(n)), (s = t + 1));
        }
        return i.push(eP(e.slice(s, a))), i.join("");
      }
      function eq(e) {
        return eD(), c.has(e);
      }
      function eQ(e) {
        return Error(`disallowed character: ${ej(e)}`);
      }
      function eH(e, t) {
        let r = ej(t),
          n = h.find((e) => e.P.has(t));
        return (
          n && (r = `${n.N} ${r}`), Error(`illegal mixture: ${e.N} + ${r}`)
        );
      }
      function eV(e) {
        return Error(`illegal placement: ${e}`);
      }
      function eJ(e) {
        return e.filter((e) => 65039 != e);
      }
      let eK = "valid",
        eW = new Uint8Array(32);
      function eZ(e) {
        return (
          (0, S.MR)(
            0 !== e.length,
            "invalid ENS name; empty component",
            "comp",
            e
          ),
          e
        );
      }
      function eY(e) {
        let t = (0, er.YW)(
            (function (e) {
              try {
                var t;
                if (0 === e.length) throw Error("empty label");
                return (t = (function (e, t, r) {
                  if (!e) return [];
                  eD();
                  let n = 0;
                  return e.split(".").map((e) => {
                    let i = (function (e) {
                        let t = [];
                        for (let r = 0, n = e.length; r < n; ) {
                          let n = e.codePointAt(r);
                          (r += n < 65536 ? 1 : 2), t.push(n);
                        }
                        return t;
                      })(e),
                      s = { input: i, offset: n };
                    n += i.length + 1;
                    try {
                      let e,
                        n = (s.tokens = (function (e, t, r) {
                          let n = [],
                            i = [];
                          for (e = e.slice().reverse(); e.length; ) {
                            let s = (function (e, t) {
                              let r,
                                n = y,
                                i = e.length;
                              for (; i && (n = n.get(e[--i])); ) {
                                let { V: s } = n;
                                s &&
                                  ((r = s),
                                  t && t.push(...e.slice(i).reverse()),
                                  (e.length = i));
                              }
                              return r;
                            })(e);
                            if (s)
                              i.length && (n.push(t(i)), (i = [])),
                                n.push(r(s));
                            else {
                              let t = e.pop();
                              if (g.has(t)) i.push(t);
                              else {
                                let e = o.get(t);
                                if (e) i.push(...e);
                                else if (!l.has(t)) throw eQ(t);
                              }
                            }
                          }
                          return i.length && n.push(t(i)), n;
                        })(i, t, r)),
                        a = n.length;
                      if (!a) throw Error("empty label");
                      let c = (s.output = n.flat());
                      for (let e = c.lastIndexOf(95); e > 0; )
                        if (95 !== c[--e])
                          throw Error("underscore allowed only at start");
                      if (
                        !(s.emoji = a > 1 || n[0].is_emoji) &&
                        c.every((e) => e < 128)
                      ) {
                        if (c.length >= 4 && 45 == c[2] && 45 == c[3])
                          throw Error(
                            `invalid label extension: "${eP(c.slice(0, 4))}"`
                          );
                        e = "ASCII";
                      } else {
                        let t = n.flatMap((e) => (e.is_emoji ? [] : e));
                        if (t.length) {
                          if (u.has(c[0])) throw eV("leading combining mark");
                          for (let e = 1; e < a; e++) {
                            let t = n[e];
                            if (!t.is_emoji && u.has(t[0]))
                              throw eV(
                                `emoji + combining mark: "${eP(
                                  n[e - 1]
                                )} + ${eG([t[0]])}"`
                              );
                          }
                          !(function (e) {
                            let t = e[0],
                              r = ev.get(t);
                            if (r) throw eV(`leading ${r}`);
                            let n = e.length,
                              i = -1;
                            for (let s = 1; s < n; s++) {
                              t = e[s];
                              let n = ev.get(t);
                              if (n) {
                                if (i == s) throw eV(`${r} + ${n}`);
                                (i = s + 1), (r = n);
                              }
                            }
                            if (i == n) throw eV(`trailing ${r}`);
                          })(c);
                          let r = eU(new Set(t)),
                            [i] = (function (e) {
                              let t = h;
                              for (let r of e) {
                                let e = t.filter((e) => eF(e, r));
                                if (!e.length)
                                  if (h.some((e) => eF(e, r)))
                                    throw eH(t[0], r);
                                  else throw eQ(r);
                                if (((t = e), 1 == e.length)) break;
                              }
                              return t;
                            })(r);
                          (function (e, t) {
                            for (let r of t) if (!eF(e, r)) throw eH(e, r);
                            if (e.M) {
                              var r;
                              let e = ((r = t), eB(r).map(eN));
                              for (let t = 1, r = e.length; t < r; t++)
                                if (f.has(e[t])) {
                                  let n = t + 1;
                                  for (let i; n < r && f.has((i = e[n])); n++)
                                    for (let r = t; r < n; r++)
                                      if (e[r] == i)
                                        throw Error(
                                          `duplicate non-spacing marks: ${ej(
                                            i
                                          )}`
                                        );
                                  if (n - t > 4)
                                    throw Error(
                                      `excessive non-spacing marks: ${ez(
                                        eG(e.slice(t - 1, n))
                                      )} (${n - t}/4)`
                                    );
                                  t = n;
                                }
                            }
                          })(i, t),
                            (function (e, t) {
                              let r,
                                n = [];
                              for (let e of t) {
                                let t = b.get(e);
                                if (1 === t) return;
                                if (t) {
                                  let n = t.M.get(e);
                                  if (
                                    !(r = r ? r.filter((e) => n.has(e)) : eU(n))
                                      .length
                                  )
                                    return;
                                } else n.push(e);
                              }
                              if (r) {
                                for (let t of r)
                                  if (n.every((e) => eF(t, e)))
                                    throw Error(
                                      `whole-script confusable: ${e.N}/${t.N}`
                                    );
                              }
                            })(i, r),
                            (e = i.N);
                        } else e = "Emoji";
                      }
                      s.type = e;
                    } catch (e) {
                      s.error = e;
                    }
                    return s;
                  });
                })(e, eL, eJ))
                  .map(({ input: e, error: r, output: n }) => {
                    if (r) {
                      let n = r.message;
                      throw Error(
                        1 == t.length
                          ? n
                          : `Invalid label ${ez(eG(e, 63))}: ${n}`
                      );
                    }
                    return eP(n);
                  })
                  .join(".");
              } catch (t) {
                (0, S.MR)(!1, `invalid ENS name (${t.message})`, "name", e);
              }
            })(e)
          ),
          r = [];
        if (0 === e.length) return r;
        let n = 0;
        for (let e = 0; e < t.length; e++)
          46 === t[e] && (r.push(eZ(t.slice(n, e))), (n = e + 1));
        return (
          (0, S.MR)(
            n < t.length,
            "invalid ENS name; empty component",
            "name",
            e
          ),
          r.push(eZ(t.slice(n))),
          r
        );
      }
      function eX(e) {
        (0, S.MR)(
          "string" == typeof e,
          "invalid ENS name; not a string",
          "name",
          e
        ),
          (0, S.MR)(e.length, "invalid ENS name (empty label)", "name", e);
        let t = eW,
          r = eY(e);
        for (; r.length; ) t = (0, E.S)((0, R.xW)([t, (0, E.S)(r.pop())]));
        return (0, R.c$)(t);
      }
      eW.fill(0);
      var e$ = r(87349),
        e0 = r(71257);
      class e1 extends e0.Vw {
        constructor(e, t, r, n) {
          super(),
            (this.blockLen = e),
            (this.outputLen = t),
            (this.padOffset = r),
            (this.isLE = n),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(e)),
            (this.view = (0, e0.O8)(this.buffer));
        }
        update(e) {
          (0, e$.t2)(this);
          let { view: t, buffer: r, blockLen: n } = this,
            i = (e = (0, e0.ZJ)(e)).length;
          for (let s = 0; s < i; ) {
            let a = Math.min(n - this.pos, i - s);
            if (a === n) {
              let t = (0, e0.O8)(e);
              for (; n <= i - s; s += n) this.process(t, s);
              continue;
            }
            r.set(e.subarray(s, s + a), this.pos),
              (this.pos += a),
              (s += a),
              this.pos === n && (this.process(t, 0), (this.pos = 0));
          }
          return (this.length += e.length), this.roundClean(), this;
        }
        digestInto(e) {
          (0, e$.t2)(this), (0, e$.CG)(e, this), (this.finished = !0);
          let { buffer: t, view: r, blockLen: n, isLE: i } = this,
            { pos: s } = this;
          (t[s++] = 128),
            this.buffer.subarray(s).fill(0),
            this.padOffset > n - s && (this.process(r, 0), (s = 0));
          for (let e = s; e < n; e++) t[e] = 0;
          !(function (e, t, r, n) {
            if ("function" == typeof e.setBigUint64)
              return e.setBigUint64(t, r, n);
            let i = BigInt(32),
              s = BigInt(0xffffffff),
              a = Number((r >> i) & s),
              o = Number(r & s),
              l = 4 * !!n,
              u = 4 * !n;
            e.setUint32(t + l, a, n), e.setUint32(t + u, o, n);
          })(r, n - 8, BigInt(8 * this.length), i),
            this.process(r, 0);
          let a = (0, e0.O8)(e),
            o = this.outputLen;
          if (o % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
          let l = o / 4,
            u = this.get();
          if (l > u.length) throw Error("_sha2: outputLen bigger than state");
          for (let e = 0; e < l; e++) a.setUint32(4 * e, u[e], i);
        }
        digest() {
          let { buffer: e, outputLen: t } = this;
          this.digestInto(e);
          let r = e.slice(0, t);
          return this.destroy(), r;
        }
        _cloneInto(e) {
          e || (e = new this.constructor()), e.set(...this.get());
          let {
            blockLen: t,
            buffer: r,
            length: n,
            finished: i,
            destroyed: s,
            pos: a,
          } = this;
          return (
            (e.length = n),
            (e.pos = a),
            (e.finished = i),
            (e.destroyed = s),
            n % t && e.buffer.set(r),
            e
          );
        }
      }
      let e2 = (e, t, r) => (e & t) ^ (~e & r),
        e3 = (e, t, r) => (e & t) ^ (e & r) ^ (t & r),
        e4 = new Uint32Array([
          0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b,
          0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01,
          0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7,
          0xc19bf174, 0xe49b69c1, 0xefbe4786, 0xfc19dc6, 0x240ca1cc, 0x2de92c6f,
          0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d,
          0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x6ca6351, 0x14292967,
          0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354,
          0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b,
          0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585,
          0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5,
          0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee,
          0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb,
          0xbef9a3f7, 0xc67178f2,
        ]),
        e6 = new Uint32Array([
          0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f,
          0x9b05688c, 0x1f83d9ab, 0x5be0cd19,
        ]),
        e8 = new Uint32Array(64);
      class e5 extends e1 {
        constructor() {
          super(64, 32, 8, !1),
            (this.A = 0 | e6[0]),
            (this.B = 0 | e6[1]),
            (this.C = 0 | e6[2]),
            (this.D = 0 | e6[3]),
            (this.E = 0 | e6[4]),
            (this.F = 0 | e6[5]),
            (this.G = 0 | e6[6]),
            (this.H = 0 | e6[7]);
        }
        get() {
          let { A: e, B: t, C: r, D: n, E: i, F: s, G: a, H: o } = this;
          return [e, t, r, n, i, s, a, o];
        }
        set(e, t, r, n, i, s, a, o) {
          (this.A = 0 | e),
            (this.B = 0 | t),
            (this.C = 0 | r),
            (this.D = 0 | n),
            (this.E = 0 | i),
            (this.F = 0 | s),
            (this.G = 0 | a),
            (this.H = 0 | o);
        }
        process(e, t) {
          for (let r = 0; r < 16; r++, t += 4) e8[r] = e.getUint32(t, !1);
          for (let e = 16; e < 64; e++) {
            let t = e8[e - 15],
              r = e8[e - 2],
              n = (0, e0.Ow)(t, 7) ^ (0, e0.Ow)(t, 18) ^ (t >>> 3),
              i = (0, e0.Ow)(r, 17) ^ (0, e0.Ow)(r, 19) ^ (r >>> 10);
            e8[e] = (i + e8[e - 7] + n + e8[e - 16]) | 0;
          }
          let { A: r, B: n, C: i, D: s, E: a, F: o, G: l, H: u } = this;
          for (let e = 0; e < 64; e++) {
            let t =
                (u +
                  ((0, e0.Ow)(a, 6) ^ (0, e0.Ow)(a, 11) ^ (0, e0.Ow)(a, 25)) +
                  e2(a, o, l) +
                  e4[e] +
                  e8[e]) |
                0,
              f =
                (((0, e0.Ow)(r, 2) ^ (0, e0.Ow)(r, 13) ^ (0, e0.Ow)(r, 22)) +
                  e3(r, n, i)) |
                0;
            (u = l),
              (l = o),
              (o = a),
              (a = (s + t) | 0),
              (s = i),
              (i = n),
              (n = r),
              (r = (t + f) | 0);
          }
          (r = (r + this.A) | 0),
            (n = (n + this.B) | 0),
            (i = (i + this.C) | 0),
            (s = (s + this.D) | 0),
            (a = (a + this.E) | 0),
            (o = (o + this.F) | 0),
            (l = (l + this.G) | 0),
            (u = (u + this.H) | 0),
            this.set(r, n, i, s, a, o, l, u);
        }
        roundClean() {
          e8.fill(0);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
        }
      }
      let e9 = (0, e0.ld)(() => new e5());
      var e7 = r(74824);
      let [te, tt] = e7.Ay.split(
          [
            "0x428a2f98d728ae22",
            "0x7137449123ef65cd",
            "0xb5c0fbcfec4d3b2f",
            "0xe9b5dba58189dbbc",
            "0x3956c25bf348b538",
            "0x59f111f1b605d019",
            "0x923f82a4af194f9b",
            "0xab1c5ed5da6d8118",
            "0xd807aa98a3030242",
            "0x12835b0145706fbe",
            "0x243185be4ee4b28c",
            "0x550c7dc3d5ffb4e2",
            "0x72be5d74f27b896f",
            "0x80deb1fe3b1696b1",
            "0x9bdc06a725c71235",
            "0xc19bf174cf692694",
            "0xe49b69c19ef14ad2",
            "0xefbe4786384f25e3",
            "0x0fc19dc68b8cd5b5",
            "0x240ca1cc77ac9c65",
            "0x2de92c6f592b0275",
            "0x4a7484aa6ea6e483",
            "0x5cb0a9dcbd41fbd4",
            "0x76f988da831153b5",
            "0x983e5152ee66dfab",
            "0xa831c66d2db43210",
            "0xb00327c898fb213f",
            "0xbf597fc7beef0ee4",
            "0xc6e00bf33da88fc2",
            "0xd5a79147930aa725",
            "0x06ca6351e003826f",
            "0x142929670a0e6e70",
            "0x27b70a8546d22ffc",
            "0x2e1b21385c26c926",
            "0x4d2c6dfc5ac42aed",
            "0x53380d139d95b3df",
            "0x650a73548baf63de",
            "0x766a0abb3c77b2a8",
            "0x81c2c92e47edaee6",
            "0x92722c851482353b",
            "0xa2bfe8a14cf10364",
            "0xa81a664bbc423001",
            "0xc24b8b70d0f89791",
            "0xc76c51a30654be30",
            "0xd192e819d6ef5218",
            "0xd69906245565a910",
            "0xf40e35855771202a",
            "0x106aa07032bbd1b8",
            "0x19a4c116b8d2d0c8",
            "0x1e376c085141ab53",
            "0x2748774cdf8eeb99",
            "0x34b0bcb5e19b48a8",
            "0x391c0cb3c5c95a63",
            "0x4ed8aa4ae3418acb",
            "0x5b9cca4f7763e373",
            "0x682e6ff3d6b2b8a3",
            "0x748f82ee5defb2fc",
            "0x78a5636f43172f60",
            "0x84c87814a1f0ab72",
            "0x8cc702081a6439ec",
            "0x90befffa23631e28",
            "0xa4506cebde82bde9",
            "0xbef9a3f7b2c67915",
            "0xc67178f2e372532b",
            "0xca273eceea26619c",
            "0xd186b8c721c0c207",
            "0xeada7dd6cde0eb1e",
            "0xf57d4f7fee6ed178",
            "0x06f067aa72176fba",
            "0x0a637dc5a2c898a6",
            "0x113f9804bef90dae",
            "0x1b710b35131c471b",
            "0x28db77f523047d84",
            "0x32caab7b40c72493",
            "0x3c9ebe0a15c9bebc",
            "0x431d67c49c100d4c",
            "0x4cc5d4becb3e42b6",
            "0x597f299cfc657e2a",
            "0x5fcb6fab3ad6faec",
            "0x6c44198c4a475817",
          ].map((e) => BigInt(e))
        ),
        tr = new Uint32Array(80),
        tn = new Uint32Array(80);
      class ti extends e1 {
        constructor() {
          super(128, 64, 16, !1),
            (this.Ah = 0x6a09e667),
            (this.Al = -0xc4336f8),
            (this.Bh = -0x4498517b),
            (this.Bl = -0x7b3558c5),
            (this.Ch = 0x3c6ef372),
            (this.Cl = -0x16b07d5),
            (this.Dh = -0x5ab00ac6),
            (this.Dl = 0x5f1d36f1),
            (this.Eh = 0x510e527f),
            (this.El = -0x52197d2f),
            (this.Fh = -0x64fa9774),
            (this.Fl = 0x2b3e6c1f),
            (this.Gh = 0x1f83d9ab),
            (this.Gl = -0x4be4295),
            (this.Hh = 0x5be0cd19),
            (this.Hl = 0x137e2179);
        }
        get() {
          let {
            Ah: e,
            Al: t,
            Bh: r,
            Bl: n,
            Ch: i,
            Cl: s,
            Dh: a,
            Dl: o,
            Eh: l,
            El: u,
            Fh: f,
            Fl: c,
            Gh: d,
            Gl: h,
            Hh: p,
            Hl: b,
          } = this;
          return [e, t, r, n, i, s, a, o, l, u, f, c, d, h, p, b];
        }
        set(e, t, r, n, i, s, a, o, l, u, f, c, d, h, p, b) {
          (this.Ah = 0 | e),
            (this.Al = 0 | t),
            (this.Bh = 0 | r),
            (this.Bl = 0 | n),
            (this.Ch = 0 | i),
            (this.Cl = 0 | s),
            (this.Dh = 0 | a),
            (this.Dl = 0 | o),
            (this.Eh = 0 | l),
            (this.El = 0 | u),
            (this.Fh = 0 | f),
            (this.Fl = 0 | c),
            (this.Gh = 0 | d),
            (this.Gl = 0 | h),
            (this.Hh = 0 | p),
            (this.Hl = 0 | b);
        }
        process(e, t) {
          for (let r = 0; r < 16; r++, t += 4)
            (tr[r] = e.getUint32(t)), (tn[r] = e.getUint32((t += 4)));
          for (let e = 16; e < 80; e++) {
            let t = 0 | tr[e - 15],
              r = 0 | tn[e - 15],
              n =
                e7.Ay.rotrSH(t, r, 1) ^
                e7.Ay.rotrSH(t, r, 8) ^
                e7.Ay.shrSH(t, r, 7),
              i =
                e7.Ay.rotrSL(t, r, 1) ^
                e7.Ay.rotrSL(t, r, 8) ^
                e7.Ay.shrSL(t, r, 7),
              s = 0 | tr[e - 2],
              a = 0 | tn[e - 2],
              o =
                e7.Ay.rotrSH(s, a, 19) ^
                e7.Ay.rotrBH(s, a, 61) ^
                e7.Ay.shrSH(s, a, 6),
              l =
                e7.Ay.rotrSL(s, a, 19) ^
                e7.Ay.rotrBL(s, a, 61) ^
                e7.Ay.shrSL(s, a, 6),
              u = e7.Ay.add4L(i, l, tn[e - 7], tn[e - 16]),
              f = e7.Ay.add4H(u, n, o, tr[e - 7], tr[e - 16]);
            (tr[e] = 0 | f), (tn[e] = 0 | u);
          }
          let {
            Ah: r,
            Al: n,
            Bh: i,
            Bl: s,
            Ch: a,
            Cl: o,
            Dh: l,
            Dl: u,
            Eh: f,
            El: c,
            Fh: d,
            Fl: h,
            Gh: p,
            Gl: b,
            Hh: g,
            Hl: m,
          } = this;
          for (let e = 0; e < 80; e++) {
            let t =
                e7.Ay.rotrSH(f, c, 14) ^
                e7.Ay.rotrSH(f, c, 18) ^
                e7.Ay.rotrBH(f, c, 41),
              y =
                e7.Ay.rotrSL(f, c, 14) ^
                e7.Ay.rotrSL(f, c, 18) ^
                e7.Ay.rotrBL(f, c, 41),
              v = (f & d) ^ (~f & p),
              w = (c & h) ^ (~c & b),
              A = e7.Ay.add5L(m, y, w, tt[e], tn[e]),
              x = e7.Ay.add5H(A, g, t, v, te[e], tr[e]),
              E = 0 | A,
              R =
                e7.Ay.rotrSH(r, n, 28) ^
                e7.Ay.rotrBH(r, n, 34) ^
                e7.Ay.rotrBH(r, n, 39),
              M =
                e7.Ay.rotrSL(r, n, 28) ^
                e7.Ay.rotrBL(r, n, 34) ^
                e7.Ay.rotrBL(r, n, 39),
              S = (r & i) ^ (r & a) ^ (i & a),
              P = (n & s) ^ (n & o) ^ (s & o);
            (g = 0 | p),
              (m = 0 | b),
              (p = 0 | d),
              (b = 0 | h),
              (d = 0 | f),
              (h = 0 | c),
              ({ h: f, l: c } = e7.Ay.add(0 | l, 0 | u, 0 | x, 0 | E)),
              (l = 0 | a),
              (u = 0 | o),
              (a = 0 | i),
              (o = 0 | s),
              (i = 0 | r),
              (s = 0 | n);
            let O = e7.Ay.add3L(E, M, P);
            (r = e7.Ay.add3H(O, x, R, S)), (n = 0 | O);
          }
          ({ h: r, l: n } = e7.Ay.add(0 | this.Ah, 0 | this.Al, 0 | r, 0 | n)),
            ({ h: i, l: s } = e7.Ay.add(
              0 | this.Bh,
              0 | this.Bl,
              0 | i,
              0 | s
            )),
            ({ h: a, l: o } = e7.Ay.add(
              0 | this.Ch,
              0 | this.Cl,
              0 | a,
              0 | o
            )),
            ({ h: l, l: u } = e7.Ay.add(
              0 | this.Dh,
              0 | this.Dl,
              0 | l,
              0 | u
            )),
            ({ h: f, l: c } = e7.Ay.add(
              0 | this.Eh,
              0 | this.El,
              0 | f,
              0 | c
            )),
            ({ h: d, l: h } = e7.Ay.add(
              0 | this.Fh,
              0 | this.Fl,
              0 | d,
              0 | h
            )),
            ({ h: p, l: b } = e7.Ay.add(
              0 | this.Gh,
              0 | this.Gl,
              0 | p,
              0 | b
            )),
            ({ h: g, l: m } = e7.Ay.add(
              0 | this.Hh,
              0 | this.Hl,
              0 | g,
              0 | m
            )),
            this.set(r, n, i, s, a, o, l, u, f, c, d, h, p, b, g, m);
        }
        roundClean() {
          tr.fill(0), tn.fill(0);
        }
        destroy() {
          this.buffer.fill(0),
            this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        }
      }
      let ts = (0, e0.ld)(() => new ti()),
        ta = (function () {
          if ("undefined" != typeof self) return self;
          if ("undefined" != typeof window) return window;
          if ("undefined" != typeof global) return global;
          throw Error("unable to locate global object");
        })();
      function to(e) {
        switch (e) {
          case "sha256":
            return e9.create();
          case "sha512":
            return ts.create();
        }
        (0, S.MR)(!1, "invalid hashing algorithm name", "algorithm", e);
      }
      ta.crypto || ta.msCrypto;
      let tl = function (e) {
          return to("sha256").update(e).digest();
        },
        tu = function (e) {
          return to("sha512").update(e).digest();
        },
        tf = tl,
        tc = tu,
        td = !1,
        th = !1;
      function tp(e) {
        let t = (0, R.q5)(e, "data");
        return (0, R.c$)(tf(t));
      }
      function tb(e) {
        let t = (0, R.q5)(e, "data");
        return (0, R.c$)(tc(t));
      }
      (tp._ = tl),
        (tp.lock = function () {
          td = !0;
        }),
        (tp.register = function (e) {
          if (td) throw Error("sha256 is locked");
          tf = e;
        }),
        Object.freeze(tp),
        (tb._ = tu),
        (tb.lock = function () {
          th = !0;
        }),
        (tb.register = function (e) {
          if (th) throw Error("sha512 is locked");
          tc = e;
        }),
        Object.freeze(tp),
        BigInt(0);
      let tg = BigInt(1),
        tm = BigInt(2),
        ty = (e) => e instanceof Uint8Array,
        tv = Array.from({ length: 256 }, (e, t) =>
          t.toString(16).padStart(2, "0")
        );
      function tw(e) {
        if (!ty(e)) throw Error("Uint8Array expected");
        let t = "";
        for (let r = 0; r < e.length; r++) t += tv[e[r]];
        return t;
      }
      function tA(e) {
        if ("string" != typeof e)
          throw Error("hex string expected, got " + typeof e);
        return BigInt("" === e ? "0" : `0x${e}`);
      }
      function tx(e) {
        if ("string" != typeof e)
          throw Error("hex string expected, got " + typeof e);
        let t = e.length;
        if (t % 2)
          throw Error(
            "padded hex string expected, got unpadded hex of length " + t
          );
        let r = new Uint8Array(t / 2);
        for (let t = 0; t < r.length; t++) {
          let n = 2 * t,
            i = Number.parseInt(e.slice(n, n + 2), 16);
          if (Number.isNaN(i) || i < 0) throw Error("Invalid byte sequence");
          r[t] = i;
        }
        return r;
      }
      function tE(e) {
        return tA(tw(e));
      }
      function tR(e) {
        if (!ty(e)) throw Error("Uint8Array expected");
        return tA(tw(Uint8Array.from(e).reverse()));
      }
      function tM(e, t) {
        return tx(e.toString(16).padStart(2 * t, "0"));
      }
      function tS(e, t) {
        return tM(e, t).reverse();
      }
      function tP(e, t, r) {
        let n;
        if ("string" == typeof t)
          try {
            n = tx(t);
          } catch (r) {
            throw Error(
              `${e} must be valid hex string, got "${t}". Cause: ${r}`
            );
          }
        else if (ty(t)) n = Uint8Array.from(t);
        else throw Error(`${e} must be hex string or Uint8Array`);
        let i = n.length;
        if ("number" == typeof r && i !== r)
          throw Error(`${e} expected ${r} bytes, got ${i}`);
        return n;
      }
      function tO(...e) {
        let t = new Uint8Array(e.reduce((e, t) => e + t.length, 0)),
          r = 0;
        return (
          e.forEach((e) => {
            if (!ty(e)) throw Error("Uint8Array expected");
            t.set(e, r), (r += e.length);
          }),
          t
        );
      }
      let tI = (e) => (tm << BigInt(e - 1)) - tg,
        tk = (e) => new Uint8Array(e),
        tN = (e) => Uint8Array.from(e);
      function tC(e, t, r) {
        if ("number" != typeof e || e < 2)
          throw Error("hashLen must be a number");
        if ("number" != typeof t || t < 2)
          throw Error("qByteLen must be a number");
        if ("function" != typeof r) throw Error("hmacFn must be a function");
        let n = tk(e),
          i = tk(e),
          s = 0,
          a = () => {
            n.fill(1), i.fill(0), (s = 0);
          },
          o = (...e) => r(i, n, ...e),
          l = (e = tk()) => {
            (i = o(tN([0]), e)),
              (n = o()),
              0 !== e.length && ((i = o(tN([1]), e)), (n = o()));
          },
          u = () => {
            if (s++ >= 1e3) throw Error("drbg: tried 1000 values");
            let e = 0,
              r = [];
            for (; e < t; ) {
              let t = (n = o()).slice();
              r.push(t), (e += n.length);
            }
            return tO(...r);
          };
        return (e, t) => {
          let r;
          for (a(), l(e); !(r = t(u())); ) l();
          return a(), r;
        };
      }
      let tB = {
        bigint: (e) => "bigint" == typeof e,
        function: (e) => "function" == typeof e,
        boolean: (e) => "boolean" == typeof e,
        string: (e) => "string" == typeof e,
        stringOrUint8Array: (e) =>
          "string" == typeof e || e instanceof Uint8Array,
        isSafeInteger: (e) => Number.isSafeInteger(e),
        array: (e) => Array.isArray(e),
        field: (e, t) => t.Fp.isValid(e),
        hash: (e) =>
          "function" == typeof e && Number.isSafeInteger(e.outputLen),
      };
      function tT(e, t, r = {}) {
        let n = (t, r, n) => {
          let i = tB[r];
          if ("function" != typeof i)
            throw Error(`Invalid validator "${r}", expected function`);
          let s = e[t];
          if ((!n || void 0 !== s) && !i(s, e))
            throw Error(
              `Invalid param ${String(t)}=${s} (${typeof s}), expected ${r}`
            );
        };
        for (let [e, r] of Object.entries(t)) n(e, r, !1);
        for (let [e, t] of Object.entries(r)) n(e, t, !0);
        return e;
      }
      let tL = BigInt(0),
        tU = BigInt(1),
        tF = BigInt(2),
        t_ = BigInt(3),
        tD = BigInt(4),
        tj = BigInt(5),
        tz = BigInt(8);
      function tG(e, t) {
        let r = e % t;
        return r >= tL ? r : t + r;
      }
      function tq(e, t, r) {
        let n = e;
        for (; t-- > tL; ) (n *= n), (n %= r);
        return n;
      }
      function tQ(e, t) {
        if (e === tL || t <= tL)
          throw Error(
            `invert: expected positive integers, got n=${e} mod=${t}`
          );
        let r = tG(e, t),
          n = t,
          i = tL,
          s = tU,
          a = tU,
          o = tL;
        for (; r !== tL; ) {
          let e = n / r,
            t = n % r,
            l = i - a * e,
            u = s - o * e;
          (n = r), (r = t), (i = a), (s = o), (a = l), (o = u);
        }
        if (n !== tU) throw Error("invert: does not exist");
        return tG(i, t);
      }
      BigInt(9), BigInt(16);
      let tH = [
        "create",
        "isValid",
        "is0",
        "neg",
        "inv",
        "sqrt",
        "sqr",
        "eql",
        "add",
        "sub",
        "mul",
        "pow",
        "div",
        "addN",
        "subN",
        "mulN",
        "sqrN",
      ];
      function tV(e, t) {
        let r = void 0 !== t ? t : e.toString(2).length,
          n = Math.ceil(r / 8);
        return { nBitLength: r, nByteLength: n };
      }
      function tJ(e) {
        if ("bigint" != typeof e) throw Error("field order must be bigint");
        return Math.ceil(e.toString(2).length / 8);
      }
      function tK(e) {
        let t = tJ(e);
        return t + Math.ceil(t / 2);
      }
      class tW extends e0.Vw {
        constructor(e, t) {
          super(), (this.finished = !1), (this.destroyed = !1), (0, e$.tW)(e);
          let r = (0, e0.ZJ)(t);
          if (
            ((this.iHash = e.create()), "function" != typeof this.iHash.update)
          )
            throw Error("Expected instance of class which extends utils.Hash");
          (this.blockLen = this.iHash.blockLen),
            (this.outputLen = this.iHash.outputLen);
          let n = this.blockLen,
            i = new Uint8Array(n);
          i.set(r.length > n ? e.create().update(r).digest() : r);
          for (let e = 0; e < i.length; e++) i[e] ^= 54;
          this.iHash.update(i), (this.oHash = e.create());
          for (let e = 0; e < i.length; e++) i[e] ^= 106;
          this.oHash.update(i), i.fill(0);
        }
        update(e) {
          return (0, e$.t2)(this), this.iHash.update(e), this;
        }
        digestInto(e) {
          (0, e$.t2)(this),
            (0, e$.ee)(e, this.outputLen),
            (this.finished = !0),
            this.iHash.digestInto(e),
            this.oHash.update(e),
            this.oHash.digestInto(e),
            this.destroy();
        }
        digest() {
          let e = new Uint8Array(this.oHash.outputLen);
          return this.digestInto(e), e;
        }
        _cloneInto(e) {
          e || (e = Object.create(Object.getPrototypeOf(this), {}));
          let {
            oHash: t,
            iHash: r,
            finished: n,
            destroyed: i,
            blockLen: s,
            outputLen: a,
          } = this;
          return (
            (e.finished = n),
            (e.destroyed = i),
            (e.blockLen = s),
            (e.outputLen = a),
            (e.oHash = t._cloneInto(e.oHash)),
            (e.iHash = r._cloneInto(e.iHash)),
            e
          );
        }
        destroy() {
          (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
        }
      }
      let tZ = (e, t, r) => new tW(e, t).update(r).digest();
      tZ.create = (e, t) => new tW(e, t);
      let tY = BigInt(0),
        tX = BigInt(1);
      function t$(e) {
        return (
          tT(
            e.Fp,
            tH.reduce((e, t) => ((e[t] = "function"), e), {
              ORDER: "bigint",
              MASK: "bigint",
              BYTES: "isSafeInteger",
              BITS: "isSafeInteger",
            })
          ),
          tT(
            e,
            { n: "bigint", h: "bigint", Gx: "field", Gy: "field" },
            { nBitLength: "isSafeInteger", nByteLength: "isSafeInteger" }
          ),
          Object.freeze({
            ...tV(e.n, e.nBitLength),
            ...e,
            ...{ p: e.Fp.ORDER },
          })
        );
      }
      let { Ph: t0, aT: t1 } = v,
        t2 = {
          Err: class extends Error {
            constructor(e = "") {
              super(e);
            }
          },
          _parseInt(e) {
            let { Err: t } = t2;
            if (e.length < 2 || 2 !== e[0])
              throw new t("Invalid signature integer tag");
            let r = e[1],
              n = e.subarray(2, r + 2);
            if (!r || n.length !== r)
              throw new t("Invalid signature integer: wrong length");
            if (128 & n[0]) throw new t("Invalid signature integer: negative");
            if (0 === n[0] && !(128 & n[1]))
              throw new t(
                "Invalid signature integer: unnecessary leading zero"
              );
            return { d: t0(n), l: e.subarray(r + 2) };
          },
          toSig(e) {
            let { Err: t } = t2,
              r = "string" == typeof e ? t1(e) : e;
            if (!(r instanceof Uint8Array)) throw Error("ui8a expected");
            let n = r.length;
            if (n < 2 || 48 != r[0]) throw new t("Invalid signature tag");
            if (r[1] !== n - 2)
              throw new t("Invalid signature: incorrect length");
            let { d: i, l: s } = t2._parseInt(r.subarray(2)),
              { d: a, l: o } = t2._parseInt(s);
            if (o.length)
              throw new t("Invalid signature: left bytes after parsing");
            return { r: i, s: a };
          },
          hexFromSig(e) {
            let t = (e) => (8 & Number.parseInt(e[0], 16) ? "00" + e : e),
              r = (e) => {
                let t = e.toString(16);
                return 1 & t.length ? `0${t}` : t;
              },
              n = t(r(e.s)),
              i = t(r(e.r)),
              s = n.length / 2,
              a = i.length / 2,
              o = r(s),
              l = r(a);
            return `30${r(a + s + 4)}02${l}${i}02${o}${n}`;
          },
        },
        t3 = BigInt(0),
        t4 = BigInt(1),
        t6 = (BigInt(2), BigInt(3)),
        t8 =
          (BigInt(4),
          BigInt(
            "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"
          )),
        t5 = BigInt(
          "0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"
        ),
        t9 = BigInt(1),
        t7 = BigInt(2),
        re = (e, t) => (e + t / t7) / t,
        rt = (function (e, t, r = !1, n = {}) {
          if (e <= tL) throw Error(`Expected Field ORDER > 0, got ${e}`);
          let { nBitLength: i, nByteLength: s } = tV(e, t);
          if (s > 2048)
            throw Error("Field lengths over 2048 bytes are not supported");
          let a = (function (e) {
              if (e % tD === t_) {
                let t = (e + tU) / tD;
                return function (e, r) {
                  let n = e.pow(r, t);
                  if (!e.eql(e.sqr(n), r))
                    throw Error("Cannot find square root");
                  return n;
                };
              }
              if (e % tz === tj) {
                let t = (e - tj) / tz;
                return function (e, r) {
                  let n = e.mul(r, tF),
                    i = e.pow(n, t),
                    s = e.mul(r, i),
                    a = e.mul(e.mul(s, tF), i),
                    o = e.mul(s, e.sub(a, e.ONE));
                  if (!e.eql(e.sqr(o), r))
                    throw Error("Cannot find square root");
                  return o;
                };
              }
              return (function (e) {
                let t,
                  r,
                  n,
                  i = (e - tU) / tF;
                for (t = e - tU, r = 0; t % tF === tL; t /= tF, r++);
                for (
                  n = tF;
                  n < e &&
                  (function (e, t, r) {
                    if (r <= tL || t < tL)
                      throw Error("Expected power/modulo > 0");
                    if (r === tU) return tL;
                    let n = tU;
                    for (; t > tL; )
                      t & tU && (n = (n * e) % r),
                        (e = (e * e) % r),
                        (t >>= tU);
                    return n;
                  })(n, i, e) !==
                    e - tU;
                  n++
                );
                if (1 === r) {
                  let t = (e + tU) / tD;
                  return function (e, r) {
                    let n = e.pow(r, t);
                    if (!e.eql(e.sqr(n), r))
                      throw Error("Cannot find square root");
                    return n;
                  };
                }
                let s = (t + tU) / tF;
                return function (e, a) {
                  if (e.pow(a, i) === e.neg(e.ONE))
                    throw Error("Cannot find square root");
                  let o = r,
                    l = e.pow(e.mul(e.ONE, n), t),
                    u = e.pow(a, s),
                    f = e.pow(a, t);
                  for (; !e.eql(f, e.ONE); ) {
                    if (e.eql(f, e.ZERO)) return e.ZERO;
                    let t = 1;
                    for (let r = e.sqr(f); t < o && !e.eql(r, e.ONE); t++)
                      r = e.sqr(r);
                    let r = e.pow(l, tU << BigInt(o - t - 1));
                    (l = e.sqr(r)),
                      (u = e.mul(u, r)),
                      (f = e.mul(f, l)),
                      (o = t);
                  }
                  return u;
                };
              })(e);
            })(e),
            o = Object.freeze({
              ORDER: e,
              BITS: i,
              BYTES: s,
              MASK: tI(i),
              ZERO: tL,
              ONE: tU,
              create: (t) => tG(t, e),
              isValid: (t) => {
                if ("bigint" != typeof t)
                  throw Error(
                    `Invalid field element: expected bigint, got ${typeof t}`
                  );
                return tL <= t && t < e;
              },
              is0: (e) => e === tL,
              isOdd: (e) => (e & tU) === tU,
              neg: (t) => tG(-t, e),
              eql: (e, t) => e === t,
              sqr: (t) => tG(t * t, e),
              add: (t, r) => tG(t + r, e),
              sub: (t, r) => tG(t - r, e),
              mul: (t, r) => tG(t * r, e),
              pow: (e, t) =>
                (function (e, t, r) {
                  if (r < tL) throw Error("Expected power > 0");
                  if (r === tL) return e.ONE;
                  if (r === tU) return t;
                  let n = e.ONE,
                    i = t;
                  for (; r > tL; )
                    r & tU && (n = e.mul(n, i)), (i = e.sqr(i)), (r >>= tU);
                  return n;
                })(o, e, t),
              div: (t, r) => tG(t * tQ(r, e), e),
              sqrN: (e) => e * e,
              addN: (e, t) => e + t,
              subN: (e, t) => e - t,
              mulN: (e, t) => e * t,
              inv: (t) => tQ(t, e),
              sqrt: n.sqrt || ((e) => a(o, e)),
              invertBatch: (e) =>
                (function (e, t) {
                  let r = Array(t.length),
                    n = t.reduce(
                      (t, n, i) => (e.is0(n) ? t : ((r[i] = t), e.mul(t, n))),
                      e.ONE
                    ),
                    i = e.inv(n);
                  return (
                    t.reduceRight(
                      (t, n, i) =>
                        e.is0(n) ? t : ((r[i] = e.mul(t, r[i])), e.mul(t, n)),
                      i
                    ),
                    r
                  );
                })(o, e),
              cmov: (e, t, r) => (r ? t : e),
              toBytes: (e) => (r ? tS(e, s) : tM(e, s)),
              fromBytes: (e) => {
                if (e.length !== s)
                  throw Error(`Fp.fromBytes: expected ${s}, got ${e.length}`);
                return r ? tR(e) : tE(e);
              },
            });
          return Object.freeze(o);
        })(t8, void 0, void 0, {
          sqrt: function (e) {
            let t = BigInt(3),
              r = BigInt(6),
              n = BigInt(11),
              i = BigInt(22),
              s = BigInt(23),
              a = BigInt(44),
              o = BigInt(88),
              l = (e * e * e) % t8,
              u = (l * l * e) % t8,
              f = (tq(u, t, t8) * u) % t8,
              c = (tq(f, t, t8) * u) % t8,
              d = (tq(c, t7, t8) * l) % t8,
              h = (tq(d, n, t8) * d) % t8,
              p = (tq(h, i, t8) * h) % t8,
              b = (tq(p, a, t8) * p) % t8,
              g = (tq(b, o, t8) * b) % t8,
              m = (tq(g, a, t8) * p) % t8,
              y = (tq(m, t, t8) * u) % t8,
              v = (tq(y, s, t8) * h) % t8,
              w = (tq(v, r, t8) * l) % t8,
              A = tq(w, t7, t8);
            if (!rt.eql(rt.sqr(A), e)) throw Error("Cannot find square root");
            return A;
          },
        }),
        rr = (function (e, t) {
          let r = (t) =>
            (function (e) {
              let t = (function (e) {
                  let t = t$(e);
                  return (
                    tT(
                      t,
                      {
                        hash: "hash",
                        hmac: "function",
                        randomBytes: "function",
                      },
                      {
                        bits2int: "function",
                        bits2int_modN: "function",
                        lowS: "boolean",
                      }
                    ),
                    Object.freeze({ lowS: !0, ...t })
                  );
                })(e),
                { Fp: r, n: n } = t,
                i = r.BYTES + 1,
                s = 2 * r.BYTES + 1;
              function a(e) {
                return tG(e, n);
              }
              let {
                  ProjectivePoint: o,
                  normPrivateKeyToScalar: l,
                  weierstrassEquation: u,
                  isWithinCurveOrder: f,
                } = (function (e) {
                  let t = (function (e) {
                      let t = t$(e);
                      tT(
                        t,
                        { a: "field", b: "field" },
                        {
                          allowedPrivateKeyLengths: "array",
                          wrapPrivateKey: "boolean",
                          isTorsionFree: "function",
                          clearCofactor: "function",
                          allowInfinityPoint: "boolean",
                          fromBytes: "function",
                          toBytes: "function",
                        }
                      );
                      let { endo: r, Fp: n, a: i } = t;
                      if (r) {
                        if (!n.eql(i, n.ZERO))
                          throw Error(
                            "Endomorphism can only be defined for Koblitz curves that have a=0"
                          );
                        if (
                          "object" != typeof r ||
                          "bigint" != typeof r.beta ||
                          "function" != typeof r.splitScalar
                        )
                          throw Error(
                            "Expected endomorphism with beta: bigint and splitScalar: function"
                          );
                      }
                      return Object.freeze({ ...t });
                    })(e),
                    { Fp: r } = t,
                    n =
                      t.toBytes ||
                      ((e, t, n) => {
                        let i = t.toAffine();
                        return tO(
                          Uint8Array.from([4]),
                          r.toBytes(i.x),
                          r.toBytes(i.y)
                        );
                      }),
                    i =
                      t.fromBytes ||
                      ((e) => {
                        let t = e.subarray(1);
                        return {
                          x: r.fromBytes(t.subarray(0, r.BYTES)),
                          y: r.fromBytes(t.subarray(r.BYTES, 2 * r.BYTES)),
                        };
                      });
                  function s(e) {
                    let { a: n, b: i } = t,
                      s = r.sqr(e),
                      a = r.mul(s, e);
                    return r.add(r.add(a, r.mul(e, n)), i);
                  }
                  if (!r.eql(r.sqr(t.Gy), s(t.Gx)))
                    throw Error("bad generator point: equation left != right");
                  function a(e) {
                    return "bigint" == typeof e && t3 < e && e < t.n;
                  }
                  function o(e) {
                    if (!a(e))
                      throw Error(
                        "Expected valid bigint: 0 < bigint < curve.n"
                      );
                  }
                  function l(e) {
                    let r,
                      {
                        allowedPrivateKeyLengths: n,
                        nByteLength: i,
                        wrapPrivateKey: s,
                        n: a,
                      } = t;
                    if (n && "bigint" != typeof e) {
                      if (
                        (e instanceof Uint8Array && (e = tw(e)),
                        "string" != typeof e || !n.includes(e.length))
                      )
                        throw Error("Invalid key");
                      e = e.padStart(2 * i, "0");
                    }
                    try {
                      r =
                        "bigint" == typeof e ? e : tE(tP("private key", e, i));
                    } catch (t) {
                      throw Error(
                        `private key must be ${i} bytes, hex or bigint, not ${typeof e}`
                      );
                    }
                    return s && (r = tG(r, a)), o(r), r;
                  }
                  let u = new Map();
                  function f(e) {
                    if (!(e instanceof c))
                      throw Error("ProjectivePoint expected");
                  }
                  class c {
                    constructor(e, t, n) {
                      if (
                        ((this.px = e),
                        (this.py = t),
                        (this.pz = n),
                        null == e || !r.isValid(e))
                      )
                        throw Error("x required");
                      if (null == t || !r.isValid(t)) throw Error("y required");
                      if (null == n || !r.isValid(n)) throw Error("z required");
                    }
                    static fromAffine(e) {
                      let { x: t, y: n } = e || {};
                      if (!e || !r.isValid(t) || !r.isValid(n))
                        throw Error("invalid affine point");
                      if (e instanceof c)
                        throw Error("projective point not allowed");
                      let i = (e) => r.eql(e, r.ZERO);
                      return i(t) && i(n) ? c.ZERO : new c(t, n, r.ONE);
                    }
                    get x() {
                      return this.toAffine().x;
                    }
                    get y() {
                      return this.toAffine().y;
                    }
                    static normalizeZ(e) {
                      let t = r.invertBatch(e.map((e) => e.pz));
                      return e
                        .map((e, r) => e.toAffine(t[r]))
                        .map(c.fromAffine);
                    }
                    static fromHex(e) {
                      let t = c.fromAffine(i(tP("pointHex", e)));
                      return t.assertValidity(), t;
                    }
                    static fromPrivateKey(e) {
                      return c.BASE.multiply(l(e));
                    }
                    _setWindowSize(e) {
                      (this._WINDOW_SIZE = e), u.delete(this);
                    }
                    assertValidity() {
                      if (this.is0()) {
                        if (t.allowInfinityPoint && !r.is0(this.py)) return;
                        throw Error("bad point: ZERO");
                      }
                      let { x: e, y: n } = this.toAffine();
                      if (!r.isValid(e) || !r.isValid(n))
                        throw Error("bad point: x or y not FE");
                      let i = r.sqr(n),
                        a = s(e);
                      if (!r.eql(i, a))
                        throw Error("bad point: equation left != right");
                      if (!this.isTorsionFree())
                        throw Error("bad point: not in prime-order subgroup");
                    }
                    hasEvenY() {
                      let { y: e } = this.toAffine();
                      if (r.isOdd) return !r.isOdd(e);
                      throw Error("Field doesn't support isOdd");
                    }
                    equals(e) {
                      f(e);
                      let { px: t, py: n, pz: i } = this,
                        { px: s, py: a, pz: o } = e,
                        l = r.eql(r.mul(t, o), r.mul(s, i)),
                        u = r.eql(r.mul(n, o), r.mul(a, i));
                      return l && u;
                    }
                    negate() {
                      return new c(this.px, r.neg(this.py), this.pz);
                    }
                    double() {
                      let { a: e, b: n } = t,
                        i = r.mul(n, t6),
                        { px: s, py: a, pz: o } = this,
                        l = r.ZERO,
                        u = r.ZERO,
                        f = r.ZERO,
                        d = r.mul(s, s),
                        h = r.mul(a, a),
                        p = r.mul(o, o),
                        b = r.mul(s, a);
                      return (
                        (b = r.add(b, b)),
                        (f = r.mul(s, o)),
                        (f = r.add(f, f)),
                        (l = r.mul(e, f)),
                        (u = r.mul(i, p)),
                        (u = r.add(l, u)),
                        (l = r.sub(h, u)),
                        (u = r.add(h, u)),
                        (u = r.mul(l, u)),
                        (l = r.mul(b, l)),
                        (f = r.mul(i, f)),
                        (p = r.mul(e, p)),
                        (b = r.sub(d, p)),
                        (b = r.mul(e, b)),
                        (b = r.add(b, f)),
                        (f = r.add(d, d)),
                        (d = r.add(f, d)),
                        (d = r.add(d, p)),
                        (d = r.mul(d, b)),
                        (u = r.add(u, d)),
                        (p = r.mul(a, o)),
                        (p = r.add(p, p)),
                        (d = r.mul(p, b)),
                        (l = r.sub(l, d)),
                        (f = r.mul(p, h)),
                        (f = r.add(f, f)),
                        new c(l, u, (f = r.add(f, f)))
                      );
                    }
                    add(e) {
                      f(e);
                      let { px: n, py: i, pz: s } = this,
                        { px: a, py: o, pz: l } = e,
                        u = r.ZERO,
                        d = r.ZERO,
                        h = r.ZERO,
                        p = t.a,
                        b = r.mul(t.b, t6),
                        g = r.mul(n, a),
                        m = r.mul(i, o),
                        y = r.mul(s, l),
                        v = r.add(n, i),
                        w = r.add(a, o);
                      (v = r.mul(v, w)),
                        (w = r.add(g, m)),
                        (v = r.sub(v, w)),
                        (w = r.add(n, s));
                      let A = r.add(a, l);
                      return (
                        (w = r.mul(w, A)),
                        (A = r.add(g, y)),
                        (w = r.sub(w, A)),
                        (A = r.add(i, s)),
                        (u = r.add(o, l)),
                        (A = r.mul(A, u)),
                        (u = r.add(m, y)),
                        (A = r.sub(A, u)),
                        (h = r.mul(p, w)),
                        (u = r.mul(b, y)),
                        (h = r.add(u, h)),
                        (u = r.sub(m, h)),
                        (h = r.add(m, h)),
                        (d = r.mul(u, h)),
                        (m = r.add(g, g)),
                        (m = r.add(m, g)),
                        (y = r.mul(p, y)),
                        (w = r.mul(b, w)),
                        (m = r.add(m, y)),
                        (y = r.sub(g, y)),
                        (y = r.mul(p, y)),
                        (w = r.add(w, y)),
                        (g = r.mul(m, w)),
                        (d = r.add(d, g)),
                        (g = r.mul(A, w)),
                        (u = r.mul(v, u)),
                        (u = r.sub(u, g)),
                        (g = r.mul(v, m)),
                        (h = r.mul(A, h)),
                        new c(u, d, (h = r.add(h, g)))
                      );
                    }
                    subtract(e) {
                      return this.add(e.negate());
                    }
                    is0() {
                      return this.equals(c.ZERO);
                    }
                    wNAF(e) {
                      return h.wNAFCached(this, u, e, (e) => {
                        let t = r.invertBatch(e.map((e) => e.pz));
                        return e
                          .map((e, r) => e.toAffine(t[r]))
                          .map(c.fromAffine);
                      });
                    }
                    multiplyUnsafe(e) {
                      let n = c.ZERO;
                      if (e === t3) return n;
                      if ((o(e), e === t4)) return this;
                      let { endo: i } = t;
                      if (!i) return h.unsafeLadder(this, e);
                      let {
                          k1neg: s,
                          k1: a,
                          k2neg: l,
                          k2: u,
                        } = i.splitScalar(e),
                        f = n,
                        d = n,
                        p = this;
                      for (; a > t3 || u > t3; )
                        a & t4 && (f = f.add(p)),
                          u & t4 && (d = d.add(p)),
                          (p = p.double()),
                          (a >>= t4),
                          (u >>= t4);
                      return (
                        s && (f = f.negate()),
                        l && (d = d.negate()),
                        (d = new c(r.mul(d.px, i.beta), d.py, d.pz)),
                        f.add(d)
                      );
                    }
                    multiply(e) {
                      let n, i;
                      o(e);
                      let { endo: s } = t;
                      if (s) {
                        let {
                            k1neg: t,
                            k1: a,
                            k2neg: o,
                            k2: l,
                          } = s.splitScalar(e),
                          { p: u, f: f } = this.wNAF(a),
                          { p: d, f: p } = this.wNAF(l);
                        (u = h.constTimeNegate(t, u)),
                          (d = h.constTimeNegate(o, d)),
                          (d = new c(r.mul(d.px, s.beta), d.py, d.pz)),
                          (n = u.add(d)),
                          (i = f.add(p));
                      } else {
                        let { p: t, f: r } = this.wNAF(e);
                        (n = t), (i = r);
                      }
                      return c.normalizeZ([n, i])[0];
                    }
                    multiplyAndAddUnsafe(e, t, r) {
                      let n = c.BASE,
                        i = (e, t) =>
                          t !== t3 && t !== t4 && e.equals(n)
                            ? e.multiply(t)
                            : e.multiplyUnsafe(t),
                        s = i(this, t).add(i(e, r));
                      return s.is0() ? void 0 : s;
                    }
                    toAffine(e) {
                      let { px: t, py: n, pz: i } = this,
                        s = this.is0();
                      null == e && (e = s ? r.ONE : r.inv(i));
                      let a = r.mul(t, e),
                        o = r.mul(n, e),
                        l = r.mul(i, e);
                      if (s) return { x: r.ZERO, y: r.ZERO };
                      if (!r.eql(l, r.ONE)) throw Error("invZ was invalid");
                      return { x: a, y: o };
                    }
                    isTorsionFree() {
                      let { h: e, isTorsionFree: r } = t;
                      if (e === t4) return !0;
                      if (r) return r(c, this);
                      throw Error(
                        "isTorsionFree() has not been declared for the elliptic curve"
                      );
                    }
                    clearCofactor() {
                      let { h: e, clearCofactor: r } = t;
                      return e === t4
                        ? this
                        : r
                        ? r(c, this)
                        : this.multiplyUnsafe(t.h);
                    }
                    toRawBytes(e = !0) {
                      return this.assertValidity(), n(c, this, e);
                    }
                    toHex(e = !0) {
                      return tw(this.toRawBytes(e));
                    }
                  }
                  (c.BASE = new c(t.Gx, t.Gy, r.ONE)),
                    (c.ZERO = new c(r.ZERO, r.ONE, r.ZERO));
                  let d = t.nBitLength,
                    h = (function (e, t) {
                      let r = (e, t) => {
                          let r = t.negate();
                          return e ? r : t;
                        },
                        n = (e) => ({
                          windows: Math.ceil(t / e) + 1,
                          windowSize: 2 ** (e - 1),
                        });
                      return {
                        constTimeNegate: r,
                        unsafeLadder(t, r) {
                          let n = e.ZERO,
                            i = t;
                          for (; r > tY; )
                            r & tX && (n = n.add(i)),
                              (i = i.double()),
                              (r >>= tX);
                          return n;
                        },
                        precomputeWindow(e, t) {
                          let { windows: r, windowSize: i } = n(t),
                            s = [],
                            a = e,
                            o = a;
                          for (let e = 0; e < r; e++) {
                            (o = a), s.push(o);
                            for (let e = 1; e < i; e++)
                              (o = o.add(a)), s.push(o);
                            a = o.double();
                          }
                          return s;
                        },
                        wNAF(t, i, s) {
                          let { windows: a, windowSize: o } = n(t),
                            l = e.ZERO,
                            u = e.BASE,
                            f = BigInt(2 ** t - 1),
                            c = 2 ** t,
                            d = BigInt(t);
                          for (let e = 0; e < a; e++) {
                            let t = e * o,
                              n = Number(s & f);
                            (s >>= d), n > o && ((n -= c), (s += tX));
                            let a = t + Math.abs(n) - 1,
                              h = e % 2 != 0,
                              p = n < 0;
                            0 === n
                              ? (u = u.add(r(h, i[t])))
                              : (l = l.add(r(p, i[a])));
                          }
                          return { p: l, f: u };
                        },
                        wNAFCached(e, t, r, n) {
                          let i = e._WINDOW_SIZE || 1,
                            s = t.get(e);
                          return (
                            s ||
                              ((s = this.precomputeWindow(e, i)),
                              1 !== i && t.set(e, n(s))),
                            this.wNAF(i, s, r)
                          );
                        },
                      };
                    })(c, t.endo ? Math.ceil(d / 2) : d);
                  return {
                    CURVE: t,
                    ProjectivePoint: c,
                    normPrivateKeyToScalar: l,
                    weierstrassEquation: s,
                    isWithinCurveOrder: a,
                  };
                })({
                  ...t,
                  toBytes(e, t, n) {
                    let i = t.toAffine(),
                      s = r.toBytes(i.x),
                      a = tO;
                    return n
                      ? a(Uint8Array.from([t.hasEvenY() ? 2 : 3]), s)
                      : a(Uint8Array.from([4]), s, r.toBytes(i.y));
                  },
                  fromBytes(e) {
                    let t = e.length,
                      n = e[0],
                      a = e.subarray(1);
                    if (t === i && (2 === n || 3 === n)) {
                      let e = tE(a);
                      if (!(t3 < e && e < r.ORDER))
                        throw Error("Point is not on curve");
                      let t = u(e),
                        i = r.sqrt(t);
                      return (
                        ((1 & n) == 1) != ((i & t4) === t4) && (i = r.neg(i)),
                        { x: e, y: i }
                      );
                    }
                    if (t === s && 4 === n)
                      return {
                        x: r.fromBytes(a.subarray(0, r.BYTES)),
                        y: r.fromBytes(a.subarray(r.BYTES, 2 * r.BYTES)),
                      };
                    throw Error(
                      `Point of length ${t} was invalid. Expected ${i} compressed bytes or ${s} uncompressed bytes`
                    );
                  },
                }),
                c = (e) => tw(tM(e, t.nByteLength)),
                d = (e, t, r) => tE(e.slice(t, r));
              class h {
                constructor(e, t, r) {
                  (this.r = e),
                    (this.s = t),
                    (this.recovery = r),
                    this.assertValidity();
                }
                static fromCompact(e) {
                  let r = t.nByteLength;
                  return new h(
                    d((e = tP("compactSignature", e, 2 * r)), 0, r),
                    d(e, r, 2 * r)
                  );
                }
                static fromDER(e) {
                  let { r: t, s: r } = t2.toSig(tP("DER", e));
                  return new h(t, r);
                }
                assertValidity() {
                  if (!f(this.r)) throw Error("r must be 0 < r < CURVE.n");
                  if (!f(this.s)) throw Error("s must be 0 < s < CURVE.n");
                }
                addRecoveryBit(e) {
                  return new h(this.r, this.s, e);
                }
                recoverPublicKey(e) {
                  let { r: i, s, recovery: l } = this,
                    u = g(tP("msgHash", e));
                  if (null == l || ![0, 1, 2, 3].includes(l))
                    throw Error("recovery id invalid");
                  let f = 2 === l || 3 === l ? i + t.n : i;
                  if (f >= r.ORDER) throw Error("recovery id 2 or 3 invalid");
                  let d = (1 & l) == 0 ? "02" : "03",
                    h = o.fromHex(d + c(f)),
                    p = tQ(f, n),
                    b = a(-u * p),
                    m = a(s * p),
                    y = o.BASE.multiplyAndAddUnsafe(h, b, m);
                  if (!y) throw Error("point at infinify");
                  return y.assertValidity(), y;
                }
                hasHighS() {
                  return this.s > n >> t4;
                }
                normalizeS() {
                  return this.hasHighS()
                    ? new h(this.r, a(-this.s), this.recovery)
                    : this;
                }
                toDERRawBytes() {
                  return tx(this.toDERHex());
                }
                toDERHex() {
                  return t2.hexFromSig({ r: this.r, s: this.s });
                }
                toCompactRawBytes() {
                  return tx(this.toCompactHex());
                }
                toCompactHex() {
                  return c(this.r) + c(this.s);
                }
              }
              function p(e) {
                let t = e instanceof Uint8Array,
                  r = "string" == typeof e,
                  n = (t || r) && e.length;
                return t
                  ? n === i || n === s
                  : r
                  ? n === 2 * i || n === 2 * s
                  : e instanceof o;
              }
              let b =
                  t.bits2int ||
                  function (e) {
                    let r = tE(e),
                      n = 8 * e.length - t.nBitLength;
                    return n > 0 ? r >> BigInt(n) : r;
                  },
                g =
                  t.bits2int_modN ||
                  function (e) {
                    return a(b(e));
                  },
                m = tI(t.nBitLength);
              function y(e) {
                if ("bigint" != typeof e) throw Error("bigint expected");
                if (!(t3 <= e && e < m))
                  throw Error(`bigint expected < 2^${t.nBitLength}`);
                return tM(e, t.nByteLength);
              }
              let v = { lowS: t.lowS, prehash: !1 },
                w = { lowS: t.lowS, prehash: !1 };
              return (
                o.BASE._setWindowSize(8),
                {
                  CURVE: t,
                  getPublicKey: function (e, t = !0) {
                    return o.fromPrivateKey(e).toRawBytes(t);
                  },
                  getSharedSecret: function (e, t, r = !0) {
                    if (p(e)) throw Error("first arg must be private key");
                    if (!p(t)) throw Error("second arg must be public key");
                    return o.fromHex(t).multiply(l(e)).toRawBytes(r);
                  },
                  sign: function (e, i, s = v) {
                    let { seed: u, k2sig: c } = (function (e, i, s = v) {
                      if (["recovered", "canonical"].some((e) => e in s))
                        throw Error("sign() legacy options not supported");
                      let { hash: u, randomBytes: c } = t,
                        { lowS: d, prehash: p, extraEntropy: m } = s;
                      null == d && (d = !0),
                        (e = tP("msgHash", e)),
                        p && (e = tP("prehashed msgHash", u(e)));
                      let w = g(e),
                        A = l(i),
                        x = [y(A), y(w)];
                      if (null != m) {
                        let e = !0 === m ? c(r.BYTES) : m;
                        x.push(tP("extraEntropy", e));
                      }
                      return {
                        seed: tO(...x),
                        k2sig: function (e) {
                          var t;
                          let r = b(e);
                          if (!f(r)) return;
                          let i = tQ(r, n),
                            s = o.BASE.multiply(r).toAffine(),
                            l = a(s.x);
                          if (l === t3) return;
                          let u = a(i * a(w + l * A));
                          if (u === t3) return;
                          let c = (2 * (s.x !== l)) | Number(s.y & t4),
                            p = u;
                          return (
                            d &&
                              u > n >> t4 &&
                              ((p = (t = u) > n >> t4 ? a(-t) : t), (c ^= 1)),
                            new h(l, p, c)
                          );
                        },
                      };
                    })(e, i, s);
                    return tC(t.hash.outputLen, t.nByteLength, t.hmac)(u, c);
                  },
                  verify: function (e, r, i, s = w) {
                    let l, u;
                    if (
                      ((r = tP("msgHash", r)),
                      (i = tP("publicKey", i)),
                      "strict" in s)
                    )
                      throw Error("options.strict was renamed to lowS");
                    let { lowS: f, prehash: c } = s;
                    try {
                      if ("string" == typeof e || e instanceof Uint8Array)
                        try {
                          u = h.fromDER(e);
                        } catch (t) {
                          if (!(t instanceof t2.Err)) throw t;
                          u = h.fromCompact(e);
                        }
                      else if (
                        "object" == typeof e &&
                        "bigint" == typeof e.r &&
                        "bigint" == typeof e.s
                      ) {
                        let { r: t, s: r } = e;
                        u = new h(t, r);
                      } else throw Error("PARSE");
                      l = o.fromHex(i);
                    } catch (e) {
                      if ("PARSE" === e.message)
                        throw Error(
                          "signature must be Signature instance, Uint8Array or hex string"
                        );
                      return !1;
                    }
                    if (f && u.hasHighS()) return !1;
                    c && (r = t.hash(r));
                    let { r: d, s: p } = u,
                      b = g(r),
                      m = tQ(p, n),
                      y = a(b * m),
                      v = a(d * m),
                      A = o.BASE.multiplyAndAddUnsafe(l, y, v)?.toAffine();
                    return !!A && a(A.x) === d;
                  },
                  ProjectivePoint: o,
                  Signature: h,
                  utils: {
                    isValidPrivateKey(e) {
                      try {
                        return l(e), !0;
                      } catch (e) {
                        return !1;
                      }
                    },
                    normPrivateKeyToScalar: l,
                    randomPrivateKey: () => {
                      let e = tK(t.n);
                      return (function (e, t, r = !1) {
                        let n = e.length,
                          i = tJ(t),
                          s = tK(t);
                        if (n < 16 || n < s || n > 1024)
                          throw Error(
                            `expected ${s}-1024 bytes of input, got ${n}`
                          );
                        let a = tG(r ? tE(e) : tR(e), t - tU) + tU;
                        return r ? tS(a, i) : tM(a, i);
                      })(t.randomBytes(e), t.n);
                    },
                    precompute: (e = 8, t = o.BASE) => (
                      t._setWindowSize(e), t.multiply(BigInt(3)), t
                    ),
                  },
                }
              );
            })({
              ...e,
              ...{
                hash: t,
                hmac: (e, ...r) => tZ(t, e, (0, e0.Id)(...r)),
                randomBytes: e0.po,
              },
            });
          return Object.freeze({ ...r(t), create: r });
        })(
          {
            a: BigInt(0),
            b: BigInt(7),
            Fp: rt,
            n: t5,
            Gx: BigInt(
              "55066263022277343669578718895168534326250603453777594175500187360389116729240"
            ),
            Gy: BigInt(
              "32670510020758816978083085130507043184471273380659243275938904335757337482424"
            ),
            h: BigInt(1),
            lowS: !0,
            endo: {
              beta: BigInt(
                "0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"
              ),
              splitScalar: (e) => {
                let t = BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
                  r = -t9 * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),
                  n = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
                  i = BigInt("0x100000000000000000000000000000000"),
                  s = re(t * e, t5),
                  a = re(-r * e, t5),
                  o = tG(e - s * t - a * n, t5),
                  l = tG(-s * r - a * t, t5),
                  u = o > i,
                  f = l > i;
                if ((u && (o = t5 - o), f && (l = t5 - l), o > i || l > i))
                  throw Error("splitScalar: Endomorphism failed, k=" + e);
                return { k1neg: u, k1: o, k2neg: f, k2: l };
              },
            },
          },
          e9
        ),
        rn = BigInt(0),
        ri = {},
        rs = (e) => e.toRawBytes(!0).slice(1),
        ra = (e) => mod(e, t5),
        ro = rr.ProjectivePoint;
      class rl {
        #ei;
        constructor(e) {
          (0, S.MR)(
            32 === (0, R.pO)(e),
            "invalid private key",
            "privateKey",
            "[REDACTED]"
          ),
            (this.#ei = (0, R.c$)(e));
        }
        get privateKey() {
          return this.#ei;
        }
        get publicKey() {
          return rl.computePublicKey(this.#ei);
        }
        get compressedPublicKey() {
          return rl.computePublicKey(this.#ei, !0);
        }
        sign(e) {
          (0, S.MR)(32 === (0, R.pO)(e), "invalid digest length", "digest", e);
          let t = rr.sign((0, R.Lm)(e), (0, R.Lm)(this.#ei), { lowS: !0 });
          return ee.from({
            r: (0, M.up)(t.r, 32),
            s: (0, M.up)(t.s, 32),
            v: t.recovery ? 28 : 27,
          });
        }
        computeSharedSecret(e) {
          let t = rl.computePublicKey(e);
          return (0, R.c$)(
            rr.getSharedSecret((0, R.Lm)(this.#ei), (0, R.q5)(t), !1)
          );
        }
        static computePublicKey(e, t) {
          let r = (0, R.q5)(e, "key");
          if (32 === r.length) {
            let e = rr.getPublicKey(r, !!t);
            return (0, R.c$)(e);
          }
          if (64 === r.length) {
            let e = new Uint8Array(65);
            (e[0] = 4), e.set(r, 1), (r = e);
          }
          let n = rr.ProjectivePoint.fromHex(r);
          return (0, R.c$)(n.toRawBytes(t));
        }
        static recoverPublicKey(e, t) {
          (0, S.MR)(32 === (0, R.pO)(e), "invalid digest length", "digest", e);
          let r = ee.from(t),
            n = rr.Signature.fromCompact((0, R.Lm)((0, R.xW)([r.r, r.s]))),
            i = (n = n.addRecoveryBit(r.yParity)).recoverPublicKey(
              (0, R.Lm)(e)
            );
          return (
            (0, S.MR)(
              null != i,
              "invalid signature for digest",
              "signature",
              t
            ),
            "0x" + i.toHex(!1)
          );
        }
        static addPoints(e, t, r) {
          let n = rr.ProjectivePoint.fromHex(
              rl.computePublicKey(e).substring(2)
            ),
            i = rr.ProjectivePoint.fromHex(rl.computePublicKey(t).substring(2));
          return "0x" + n.add(i).toHex(!!r);
        }
      }
      function ru(e, t, r) {
        let n = 0;
        for (let i = 0; i < r; i++) n = 256 * n + e[t + i];
        return n;
      }
      function rf(e, t, r, n) {
        let i = [];
        for (; r < t + 1 + n; ) {
          let s = rc(e, r);
          i.push(s.result),
            (r += s.consumed),
            (0, S.vA)(
              r <= t + 1 + n,
              "child data too short",
              "BUFFER_OVERRUN",
              { buffer: e, length: n, offset: t }
            );
        }
        return { consumed: 1 + n, result: i };
      }
      function rc(e, t) {
        (0, S.vA)(0 !== e.length, "data too short", "BUFFER_OVERRUN", {
          buffer: e,
          length: 0,
          offset: 1,
        });
        let r = (t) => {
          (0, S.vA)(
            t <= e.length,
            "data short segment too short",
            "BUFFER_OVERRUN",
            { buffer: e, length: e.length, offset: t }
          );
        };
        if (e[t] >= 248) {
          let n = e[t] - 247;
          r(t + 1 + n);
          let i = ru(e, t + 1, n);
          return r(t + 1 + n + i), rf(e, t, t + 1 + n, n + i);
        }
        if (e[t] >= 192) {
          let n = e[t] - 192;
          return r(t + 1 + n), rf(e, t, t + 1, n);
        }
        if (e[t] >= 184) {
          let n = e[t] - 183;
          r(t + 1 + n);
          let i = ru(e, t + 1, n);
          r(t + 1 + n + i);
          let s = (0, R.c$)(e.slice(t + 1 + n, t + 1 + n + i));
          return { consumed: 1 + n + i, result: s };
        }
        if (e[t] >= 128) {
          let n = e[t] - 128;
          r(t + 1 + n);
          let i = (0, R.c$)(e.slice(t + 1, t + 1 + n));
          return { consumed: 1 + n, result: i };
        }
        return {
          consumed: 1,
          result: (function (e) {
            let t = e.toString(16);
            for (; t.length < 2; ) t = "0" + t;
            return "0x" + t;
          })(e[t]),
        };
      }
      function rd(e) {
        let t = (0, R.q5)(e, "data"),
          r = rc(t, 0);
        return (
          (0, S.MR)(
            r.consumed === t.length,
            "unexpected junk after rlp payload",
            "data",
            e
          ),
          r.result
        );
      }
      function rh(e) {
        let t = [];
        for (; e; ) t.unshift(255 & e), (e >>= 8);
        return t;
      }
      let rp = "0123456789abcdef";
      function rb(e) {
        let t = "0x";
        for (let r of (function e(t) {
          if (Array.isArray(t)) {
            let r = [];
            if (
              (t.forEach(function (t) {
                r = r.concat(e(t));
              }),
              r.length <= 55)
            )
              return r.unshift(192 + r.length), r;
            let n = rh(r.length);
            return n.unshift(247 + n.length), n.concat(r);
          }
          let r = Array.prototype.slice.call((0, R.q5)(t, "object"));
          if (1 === r.length && r[0] <= 127) return r;
          if (r.length <= 55) return r.unshift(128 + r.length), r;
          let n = rh(r.length);
          return n.unshift(183 + n.length), n.concat(r);
        })(e))
          (t += rp[r >> 4]), (t += rp[15 & r]);
        return t;
      }
      let rg = BigInt(0),
        rm = BigInt(2),
        ry = BigInt(27),
        rv = BigInt(28),
        rw = BigInt(35),
        rA = BigInt(
          "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
        );
      function rx(e, t) {
        let r = e.toString(16);
        for (; r.length < 2; ) r = "0" + r;
        return "0x" + (r += tp(t).substring(4));
      }
      function rE(e) {
        return "0x" === e ? null : (0, A.b)(e);
      }
      function rR(e, t) {
        try {
          return (0, Q.$)(e);
        } catch (r) {
          (0, S.MR)(!1, r.message, t, e);
        }
      }
      function rM(e, t) {
        return "0x" === e ? 0 : (0, M.WZ)(e, t);
      }
      function rS(e, t) {
        if ("0x" === e) return rg;
        let r = (0, M.Ab)(e, t);
        return (0, S.MR)(r <= rA, "value exceeds uint size", t, r), r;
      }
      function rP(e, t) {
        let r = (0, M.Ab)(e, "value"),
          n = (0, M.c4)(r);
        return (0, S.MR)(n.length <= 32, "value too large", `tx.${t}`, r), n;
      }
      function rO(e) {
        return (0, Q.$)(e).map((e) => [e.address, e.storageKeys]);
      }
      function rI(e, t) {
        let r;
        try {
          if (((r = rM(t[0], "yParity")), 0 !== r && 1 !== r))
            throw Error("bad yParity");
        } catch (e) {
          (0, S.MR)(!1, "invalid yParity", "yParity", t[0]);
        }
        let n = (0, R.nx)(t[1], 32),
          i = (0, R.nx)(t[2], 32);
        e.signature = ee.from({ r: n, s: i, yParity: r });
      }
      class rk {
        #es;
        #ea;
        #eo;
        #el;
        #eu;
        #ef;
        #ec;
        #ed;
        #eh;
        #ep;
        #eb;
        #eg;
        #em;
        #ey;
        #ev;
        #ew;
        #eA;
        get type() {
          return this.#es;
        }
        set type(e) {
          switch (e) {
            case null:
              this.#es = null;
              break;
            case 0:
            case "legacy":
              this.#es = 0;
              break;
            case 1:
            case "berlin":
            case "eip-2930":
              this.#es = 1;
              break;
            case 2:
            case "london":
            case "eip-1559":
              this.#es = 2;
              break;
            case 3:
            case "cancun":
            case "eip-4844":
              this.#es = 3;
              break;
            case 4:
            case "pectra":
            case "eip-7702":
              this.#es = 4;
              break;
            default:
              (0, S.MR)(!1, "unsupported transaction type", "type", e);
          }
        }
        get typeName() {
          switch (this.type) {
            case 0:
              return "legacy";
            case 1:
              return "eip-2930";
            case 2:
              return "eip-1559";
            case 3:
              return "eip-4844";
            case 4:
              return "eip-7702";
          }
          return null;
        }
        get to() {
          let e = this.#ea;
          return null == e && 3 === this.type ? em : e;
        }
        set to(e) {
          this.#ea = null == e ? null : (0, A.b)(e);
        }
        get nonce() {
          return this.#el;
        }
        set nonce(e) {
          this.#el = (0, M.WZ)(e, "value");
        }
        get gasLimit() {
          return this.#eu;
        }
        set gasLimit(e) {
          this.#eu = (0, M.Ab)(e);
        }
        get gasPrice() {
          let e = this.#ef;
          return null == e && (0 === this.type || 1 === this.type) ? rg : e;
        }
        set gasPrice(e) {
          this.#ef = null == e ? null : (0, M.Ab)(e, "gasPrice");
        }
        get maxPriorityFeePerGas() {
          let e = this.#ec;
          return null == e
            ? 2 === this.type || 3 === this.type
              ? rg
              : null
            : e;
        }
        set maxPriorityFeePerGas(e) {
          this.#ec = null == e ? null : (0, M.Ab)(e, "maxPriorityFeePerGas");
        }
        get maxFeePerGas() {
          let e = this.#ed;
          return null == e
            ? 2 === this.type || 3 === this.type
              ? rg
              : null
            : e;
        }
        set maxFeePerGas(e) {
          this.#ed = null == e ? null : (0, M.Ab)(e, "maxFeePerGas");
        }
        get data() {
          return this.#eo;
        }
        set data(e) {
          this.#eo = (0, R.c$)(e);
        }
        get value() {
          return this.#eh;
        }
        set value(e) {
          this.#eh = (0, M.Ab)(e, "value");
        }
        get chainId() {
          return this.#ep;
        }
        set chainId(e) {
          this.#ep = (0, M.Ab)(e);
        }
        get signature() {
          return this.#eb || null;
        }
        set signature(e) {
          this.#eb = null == e ? null : ee.from(e);
        }
        get accessList() {
          let e = this.#eg || null;
          return null == e
            ? 1 === this.type || 2 === this.type || 3 === this.type
              ? []
              : null
            : e;
        }
        set accessList(e) {
          this.#eg = null == e ? null : (0, Q.$)(e);
        }
        get authorizationList() {
          let e = this.#eA || null;
          return null == e && 4 === this.type ? [] : e;
        }
        set authorizationList(e) {
          this.#eA = null == e ? null : e.map((e) => et(e));
        }
        get maxFeePerBlobGas() {
          let e = this.#em;
          return null == e && 3 === this.type ? rg : e;
        }
        set maxFeePerBlobGas(e) {
          this.#em = null == e ? null : (0, M.Ab)(e, "maxFeePerBlobGas");
        }
        get blobVersionedHashes() {
          let e = this.#ey;
          return null == e && 3 === this.type ? [] : e;
        }
        set blobVersionedHashes(e) {
          if (null != e) {
            (0, S.MR)(
              Array.isArray(e),
              "blobVersionedHashes must be an Array",
              "value",
              e
            ),
              (e = e.slice());
            for (let t = 0; t < e.length; t++)
              (0, S.MR)(
                (0, R.Lo)(e[t], 32),
                "invalid blobVersionedHash",
                `value[${t}]`,
                e[t]
              );
          }
          this.#ey = e;
        }
        get blobs() {
          return null == this.#ew
            ? null
            : this.#ew.map((e) => Object.assign({}, e));
        }
        set blobs(e) {
          if (null == e) {
            this.#ew = null;
            return;
          }
          let t = [],
            r = [];
          for (let n = 0; n < e.length; n++) {
            let i = e[n];
            if ((0, R.f)(i)) {
              (0, S.vA)(
                this.#ev,
                "adding a raw blob requires a KZG library",
                "UNSUPPORTED_OPERATION",
                { operation: "set blobs()" }
              );
              let e = (0, R.q5)(i);
              if (
                ((0, S.MR)(
                  e.length <= 131072,
                  "blob is too large",
                  `blobs[${n}]`,
                  i
                ),
                131072 !== e.length)
              ) {
                let t = new Uint8Array(131072);
                t.set(e), (e = t);
              }
              let s = this.#ev.blobToKzgCommitment(e),
                a = (0, R.c$)(this.#ev.computeBlobKzgProof(e, s));
              t.push({
                data: (0, R.c$)(e),
                commitment: (0, R.c$)(s),
                proof: a,
              }),
                r.push(rx(1, s));
            } else {
              let e = (0, R.c$)(i.commitment);
              t.push({
                data: (0, R.c$)(i.data),
                commitment: e,
                proof: (0, R.c$)(i.proof),
              }),
                r.push(rx(1, e));
            }
          }
          (this.#ew = t), (this.#ey = r);
        }
        get kzg() {
          return this.#ev;
        }
        set kzg(e) {
          if (null == e) this.#ev = null;
          else
            this.#ev = {
              blobToKzgCommitment: (t) => {
                if ("computeBlobProof" in e) {
                  if (
                    "blobToKzgCommitment" in e &&
                    "function" == typeof e.blobToKzgCommitment
                  )
                    return (0, R.q5)(e.blobToKzgCommitment((0, R.c$)(t)));
                } else if (
                  "blobToKzgCommitment" in e &&
                  "function" == typeof e.blobToKzgCommitment
                )
                  return (0, R.q5)(e.blobToKzgCommitment(t));
                if (
                  "blobToKZGCommitment" in e &&
                  "function" == typeof e.blobToKZGCommitment
                )
                  return (0, R.q5)(e.blobToKZGCommitment((0, R.c$)(t)));
                (0, S.MR)(!1, "unsupported KZG library", "kzg", e);
              },
              computeBlobKzgProof: (t, r) =>
                "computeBlobProof" in e &&
                "function" == typeof e.computeBlobProof
                  ? (0, R.q5)(e.computeBlobProof((0, R.c$)(t), (0, R.c$)(r)))
                  : "computeBlobKzgProof" in e &&
                    "function" == typeof e.computeBlobKzgProof
                  ? e.computeBlobKzgProof(t, r)
                  : "computeBlobKZGProof" in e &&
                    "function" == typeof e.computeBlobKZGProof
                  ? (0, R.q5)(e.computeBlobKZGProof((0, R.c$)(t), (0, R.c$)(r)))
                  : void (0, S.MR)(!1, "unsupported KZG library", "kzg", e),
            };
        }
        constructor() {
          (this.#es = null),
            (this.#ea = null),
            (this.#el = 0),
            (this.#eu = rg),
            (this.#ef = null),
            (this.#ec = null),
            (this.#ed = null),
            (this.#eo = "0x"),
            (this.#eh = rg),
            (this.#ep = rg),
            (this.#eb = null),
            (this.#eg = null),
            (this.#em = null),
            (this.#ey = null),
            (this.#ev = null),
            (this.#ew = null),
            (this.#eA = null);
        }
        get hash() {
          return null == this.signature ? null : (0, E.S)(this.#ex(!0, !1));
        }
        get unsignedHash() {
          return (0, E.S)(this.unsignedSerialized);
        }
        get from() {
          var e, t, r;
          let n;
          return null == this.signature
            ? null
            : ((e = this.unsignedHash),
              (t = this.signature),
              (n =
                "string" == typeof (r = rl.recoverPublicKey(e, t))
                  ? rl.computePublicKey(r, !1)
                  : r.publicKey),
              (0, A.b)((0, E.S)("0x" + n.substring(4)).substring(26)));
        }
        get fromPublicKey() {
          return null == this.signature
            ? null
            : rl.recoverPublicKey(this.unsignedHash, this.signature);
        }
        isSigned() {
          return null != this.signature;
        }
        #ex(e, t) {
          (0, S.vA)(
            !e || null != this.signature,
            "cannot serialize unsigned transaction; maybe you meant .unsignedSerialized",
            "UNSUPPORTED_OPERATION",
            { operation: ".serialized" }
          );
          let r = e ? this.signature : null;
          switch (this.inferType()) {
            case 0:
              return (function (e, t) {
                let r = [
                    rP(e.nonce, "nonce"),
                    rP(e.gasPrice || 0, "gasPrice"),
                    rP(e.gasLimit, "gasLimit"),
                    e.to || "0x",
                    rP(e.value, "value"),
                    e.data,
                  ],
                  n = rg;
                if (e.chainId != rg)
                  (n = (0, M.Ab)(e.chainId, "tx.chainId")),
                    (0, S.MR)(
                      !t || null == t.networkV || t.legacyChainId === n,
                      "tx.chainId/sig.v mismatch",
                      "sig",
                      t
                    );
                else if (e.signature) {
                  let t = e.signature.legacyChainId;
                  null != t && (n = t);
                }
                if (!t)
                  return (
                    n !== rg &&
                      (r.push((0, M.c4)(n)), r.push("0x"), r.push("0x")),
                    rb(r)
                  );
                let i = BigInt(27 + t.yParity);
                return (
                  n !== rg
                    ? (i = ee.getChainIdV(n, t.v))
                    : BigInt(t.v) !== i &&
                      (0, S.MR)(!1, "tx.chainId/sig.v mismatch", "sig", t),
                  r.push((0, M.c4)(i)),
                  r.push((0, M.c4)(t.r)),
                  r.push((0, M.c4)(t.s)),
                  rb(r)
                );
              })(this, r);
            case 1:
              let n = [
                rP(this.chainId, "chainId"),
                rP(this.nonce, "nonce"),
                rP(this.gasPrice || 0, "gasPrice"),
                rP(this.gasLimit, "gasLimit"),
                this.to || "0x",
                rP(this.value, "value"),
                this.data,
                rO(this.accessList || []),
              ];
              return (
                r &&
                  (n.push(rP(r.yParity, "recoveryParam")),
                  n.push((0, M.c4)(r.r)),
                  n.push((0, M.c4)(r.s))),
                (0, R.xW)(["0x01", rb(n)])
              );
            case 2:
              let i = [
                rP(this.chainId, "chainId"),
                rP(this.nonce, "nonce"),
                rP(this.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"),
                rP(this.maxFeePerGas || 0, "maxFeePerGas"),
                rP(this.gasLimit, "gasLimit"),
                this.to || "0x",
                rP(this.value, "value"),
                this.data,
                rO(this.accessList || []),
              ];
              return (
                r &&
                  (i.push(rP(r.yParity, "yParity")),
                  i.push((0, M.c4)(r.r)),
                  i.push((0, M.c4)(r.s))),
                (0, R.xW)(["0x02", rb(i)])
              );
            case 3:
              return (function (e, t, r) {
                let n = [
                  rP(e.chainId, "chainId"),
                  rP(e.nonce, "nonce"),
                  rP(e.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"),
                  rP(e.maxFeePerGas || 0, "maxFeePerGas"),
                  rP(e.gasLimit, "gasLimit"),
                  e.to || em,
                  rP(e.value, "value"),
                  e.data,
                  rO(e.accessList || []),
                  rP(e.maxFeePerBlobGas || 0, "maxFeePerBlobGas"),
                  (function (e, t) {
                    (0, S.MR)(Array.isArray(e), `invalid ${t}`, "value", e);
                    for (let t = 0; t < e.length; t++)
                      (0, S.MR)(
                        (0, R.Lo)(e[t], 32),
                        "invalid ${ param } hash",
                        `value[${t}]`,
                        e[t]
                      );
                    return e;
                  })(e.blobVersionedHashes || [], "blobVersionedHashes"),
                ];
                return t &&
                  (n.push(rP(t.yParity, "yParity")),
                  n.push((0, M.c4)(t.r)),
                  n.push((0, M.c4)(t.s)),
                  r)
                  ? (0, R.xW)([
                      "0x03",
                      rb([
                        n,
                        r.map((e) => e.data),
                        r.map((e) => e.commitment),
                        r.map((e) => e.proof),
                      ]),
                    ])
                  : (0, R.xW)(["0x03", rb(n)]);
              })(this, r, t ? this.blobs : null);
            case 4:
              let s = [
                rP(this.chainId, "chainId"),
                rP(this.nonce, "nonce"),
                rP(this.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"),
                rP(this.maxFeePerGas || 0, "maxFeePerGas"),
                rP(this.gasLimit, "gasLimit"),
                this.to || "0x",
                rP(this.value, "value"),
                this.data,
                rO(this.accessList || []),
                (this.authorizationList || []).map((e) => [
                  rP(e.chainId, "chainId"),
                  e.address,
                  rP(e.nonce, "nonce"),
                  rP(e.signature.yParity, "yParity"),
                  e.signature.r,
                  e.signature.s,
                ]),
              ];
              return (
                r &&
                  (s.push(rP(r.yParity, "yParity")),
                  s.push((0, M.c4)(r.r)),
                  s.push((0, M.c4)(r.s))),
                (0, R.xW)(["0x04", rb(s)])
              );
          }
          (0, S.vA)(
            !1,
            "unsupported transaction type",
            "UNSUPPORTED_OPERATION",
            { operation: ".serialized" }
          );
        }
        get serialized() {
          return this.#ex(!0, !0);
        }
        get unsignedSerialized() {
          return this.#ex(!1, !1);
        }
        inferType() {
          let e = this.inferTypes();
          return e.indexOf(2) >= 0 ? 2 : e.pop();
        }
        inferTypes() {
          let e = null != this.gasPrice,
            t = null != this.maxFeePerGas || null != this.maxPriorityFeePerGas,
            r = null != this.accessList,
            n = null != this.#em || this.#ey;
          null != this.maxFeePerGas &&
            null != this.maxPriorityFeePerGas &&
            (0, S.vA)(
              this.maxFeePerGas >= this.maxPriorityFeePerGas,
              "priorityFee cannot be more than maxFee",
              "BAD_DATA",
              { value: this }
            ),
            (0, S.vA)(
              !t || (0 !== this.type && 1 !== this.type),
              "transaction type cannot have maxFeePerGas or maxPriorityFeePerGas",
              "BAD_DATA",
              { value: this }
            ),
            (0, S.vA)(
              0 !== this.type || !r,
              "legacy transaction cannot have accessList",
              "BAD_DATA",
              { value: this }
            );
          let i = [];
          return (
            null != this.type
              ? i.push(this.type)
              : this.authorizationList && this.authorizationList.length
              ? i.push(4)
              : t
              ? i.push(2)
              : e
              ? (i.push(1), r || i.push(0))
              : r
              ? (i.push(1), i.push(2))
              : ((n && this.to) || (i.push(0), i.push(1), i.push(2)),
                i.push(3)),
            i.sort(),
            i
          );
        }
        isLegacy() {
          return 0 === this.type;
        }
        isBerlin() {
          return 1 === this.type;
        }
        isLondon() {
          return 2 === this.type;
        }
        isCancun() {
          return 3 === this.type;
        }
        clone() {
          return rk.from(this);
        }
        toJSON() {
          let e = (e) => (null == e ? null : e.toString());
          return {
            type: this.type,
            to: this.to,
            data: this.data,
            nonce: this.nonce,
            gasLimit: e(this.gasLimit),
            gasPrice: e(this.gasPrice),
            maxPriorityFeePerGas: e(this.maxPriorityFeePerGas),
            maxFeePerGas: e(this.maxFeePerGas),
            value: e(this.value),
            chainId: e(this.chainId),
            sig: this.signature ? this.signature.toJSON() : null,
            accessList: this.accessList,
          };
        }
        static from(e) {
          if (null == e) return new rk();
          if ("string" == typeof e) {
            let t = (0, R.q5)(e);
            if (t[0] >= 127)
              return rk.from(
                (function (e) {
                  let t = rd(e);
                  (0, S.MR)(
                    Array.isArray(t) && (9 === t.length || 6 === t.length),
                    "invalid field count for legacy transaction",
                    "data",
                    e
                  );
                  let r = {
                    type: 0,
                    nonce: rM(t[0], "nonce"),
                    gasPrice: rS(t[1], "gasPrice"),
                    gasLimit: rS(t[2], "gasLimit"),
                    to: rE(t[3]),
                    value: rS(t[4], "value"),
                    data: (0, R.c$)(t[5]),
                    chainId: rg,
                  };
                  if (6 === t.length) return r;
                  let n = rS(t[6], "v"),
                    i = rS(t[7], "r"),
                    s = rS(t[8], "s");
                  if (i === rg && s === rg) r.chainId = n;
                  else {
                    let e = (n - rw) / rm;
                    e < rg && (e = rg),
                      (r.chainId = e),
                      (0, S.MR)(
                        e !== rg || n === ry || n === rv,
                        "non-canonical legacy v",
                        "v",
                        t[6]
                      ),
                      (r.signature = ee.from({
                        r: (0, R.nx)(t[7], 32),
                        s: (0, R.nx)(t[8], 32),
                        v: n,
                      }));
                  }
                  return r;
                })(t)
              );
            switch (t[0]) {
              case 1:
                return rk.from(
                  (function (e) {
                    let t = rd((0, R.q5)(e).slice(1));
                    (0, S.MR)(
                      Array.isArray(t) && (8 === t.length || 11 === t.length),
                      "invalid field count for transaction type: 1",
                      "data",
                      (0, R.c$)(e)
                    );
                    let r = {
                      type: 1,
                      chainId: rS(t[0], "chainId"),
                      nonce: rM(t[1], "nonce"),
                      gasPrice: rS(t[2], "gasPrice"),
                      gasLimit: rS(t[3], "gasLimit"),
                      to: rE(t[4]),
                      value: rS(t[5], "value"),
                      data: (0, R.c$)(t[6]),
                      accessList: rR(t[7], "accessList"),
                    };
                    return 8 === t.length || rI(r, t.slice(8)), r;
                  })(t)
                );
              case 2:
                return rk.from(
                  (function (e) {
                    let t = rd((0, R.q5)(e).slice(1));
                    (0, S.MR)(
                      Array.isArray(t) && (9 === t.length || 12 === t.length),
                      "invalid field count for transaction type: 2",
                      "data",
                      (0, R.c$)(e)
                    );
                    let r = {
                      type: 2,
                      chainId: rS(t[0], "chainId"),
                      nonce: rM(t[1], "nonce"),
                      maxPriorityFeePerGas: rS(t[2], "maxPriorityFeePerGas"),
                      maxFeePerGas: rS(t[3], "maxFeePerGas"),
                      gasPrice: null,
                      gasLimit: rS(t[4], "gasLimit"),
                      to: rE(t[5]),
                      value: rS(t[6], "value"),
                      data: (0, R.c$)(t[7]),
                      accessList: rR(t[8], "accessList"),
                    };
                    return 9 === t.length || rI(r, t.slice(9)), r;
                  })(t)
                );
              case 3:
                return rk.from(
                  (function (e) {
                    let t = rd((0, R.q5)(e).slice(1)),
                      r = "3",
                      n = null;
                    if (4 === t.length && Array.isArray(t[0])) {
                      r = "3 (network format)";
                      let e = t[1],
                        i = t[2],
                        s = t[3];
                      (0, S.MR)(
                        Array.isArray(e),
                        "invalid network format: blobs not an array",
                        "fields[1]",
                        e
                      ),
                        (0, S.MR)(
                          Array.isArray(i),
                          "invalid network format: commitments not an array",
                          "fields[2]",
                          i
                        ),
                        (0, S.MR)(
                          Array.isArray(s),
                          "invalid network format: proofs not an array",
                          "fields[3]",
                          s
                        ),
                        (0, S.MR)(
                          e.length === i.length,
                          "invalid network format: blobs/commitments length mismatch",
                          "fields",
                          t
                        ),
                        (0, S.MR)(
                          e.length === s.length,
                          "invalid network format: blobs/proofs length mismatch",
                          "fields",
                          t
                        ),
                        (n = []);
                      for (let r = 0; r < t[1].length; r++)
                        n.push({ data: e[r], commitment: i[r], proof: s[r] });
                      t = t[0];
                    }
                    (0, S.MR)(
                      Array.isArray(t) && (11 === t.length || 14 === t.length),
                      `invalid field count for transaction type: ${r}`,
                      "data",
                      (0, R.c$)(e)
                    );
                    let i = {
                      type: 3,
                      chainId: rS(t[0], "chainId"),
                      nonce: rM(t[1], "nonce"),
                      maxPriorityFeePerGas: rS(t[2], "maxPriorityFeePerGas"),
                      maxFeePerGas: rS(t[3], "maxFeePerGas"),
                      gasPrice: null,
                      gasLimit: rS(t[4], "gasLimit"),
                      to: rE(t[5]),
                      value: rS(t[6], "value"),
                      data: (0, R.c$)(t[7]),
                      accessList: rR(t[8], "accessList"),
                      maxFeePerBlobGas: rS(t[9], "maxFeePerBlobGas"),
                      blobVersionedHashes: t[10],
                    };
                    n && (i.blobs = n),
                      (0, S.MR)(
                        null != i.to,
                        `invalid address for transaction type: ${r}`,
                        "data",
                        e
                      ),
                      (0, S.MR)(
                        Array.isArray(i.blobVersionedHashes),
                        "invalid blobVersionedHashes: must be an array",
                        "data",
                        e
                      );
                    for (let t = 0; t < i.blobVersionedHashes.length; t++)
                      (0, S.MR)(
                        (0, R.Lo)(i.blobVersionedHashes[t], 32),
                        `invalid blobVersionedHash at index ${t}: must be length 32`,
                        "data",
                        e
                      );
                    return 11 === t.length || rI(i, t.slice(11)), i;
                  })(t)
                );
              case 4:
                return rk.from(
                  (function (e) {
                    let t = rd((0, R.q5)(e).slice(1));
                    (0, S.MR)(
                      Array.isArray(t) && (10 === t.length || 13 === t.length),
                      "invalid field count for transaction type: 4",
                      "data",
                      (0, R.c$)(e)
                    );
                    let r = {
                      type: 4,
                      chainId: rS(t[0], "chainId"),
                      nonce: rM(t[1], "nonce"),
                      maxPriorityFeePerGas: rS(t[2], "maxPriorityFeePerGas"),
                      maxFeePerGas: rS(t[3], "maxFeePerGas"),
                      gasPrice: null,
                      gasLimit: rS(t[4], "gasLimit"),
                      to: rE(t[5]),
                      value: rS(t[6], "value"),
                      data: (0, R.c$)(t[7]),
                      accessList: rR(t[8], "accessList"),
                      authorizationList: (function (e, t) {
                        try {
                          if (!Array.isArray(e))
                            throw Error("authorizationList: invalid array");
                          let t = [];
                          for (let r = 0; r < e.length; r++) {
                            let n = e[r];
                            if (!Array.isArray(n))
                              throw Error(`authorization[${r}]: invalid array`);
                            if (6 !== n.length)
                              throw Error(`authorization[${r}]: wrong length`);
                            if (!n[1])
                              throw Error(`authorization[${r}]: null address`);
                            t.push({
                              address: rE(n[1]),
                              nonce: rS(n[2], "nonce"),
                              chainId: rS(n[0], "chainId"),
                              signature: ee.from({
                                yParity: rM(n[3], "yParity"),
                                r: (0, R.nx)(n[4], 32),
                                s: (0, R.nx)(n[5], 32),
                              }),
                            });
                          }
                          return t;
                        } catch (r) {
                          (0, S.MR)(!1, r.message, t, e);
                        }
                      })(t[9], "authorizationList"),
                    };
                    return 10 === t.length || rI(r, t.slice(10)), r;
                  })(t)
                );
            }
            (0, S.vA)(
              !1,
              "unsupported transaction type",
              "UNSUPPORTED_OPERATION",
              { operation: "from" }
            );
          }
          let t = new rk();
          return (
            null != e.type && (t.type = e.type),
            null != e.to && (t.to = e.to),
            null != e.nonce && (t.nonce = e.nonce),
            null != e.gasLimit && (t.gasLimit = e.gasLimit),
            null != e.gasPrice && (t.gasPrice = e.gasPrice),
            null != e.maxPriorityFeePerGas &&
              (t.maxPriorityFeePerGas = e.maxPriorityFeePerGas),
            null != e.maxFeePerGas && (t.maxFeePerGas = e.maxFeePerGas),
            null != e.maxFeePerBlobGas &&
              (t.maxFeePerBlobGas = e.maxFeePerBlobGas),
            null != e.data && (t.data = e.data),
            null != e.value && (t.value = e.value),
            null != e.chainId && (t.chainId = e.chainId),
            null != e.signature && (t.signature = ee.from(e.signature)),
            null != e.accessList && (t.accessList = e.accessList),
            null != e.authorizationList &&
              (t.authorizationList = e.authorizationList),
            null != e.blobVersionedHashes &&
              (t.blobVersionedHashes = e.blobVersionedHashes),
            null != e.kzg && (t.kzg = e.kzg),
            null != e.blobs && (t.blobs = e.blobs),
            null != e.hash &&
              ((0, S.MR)(
                t.isSigned(),
                "unsigned transaction cannot define '.hash'",
                "tx",
                e
              ),
              (0, S.MR)(t.hash === e.hash, "hash mismatch", "tx", e)),
            null != e.from &&
              ((0, S.MR)(
                t.isSigned(),
                "unsigned transaction cannot define '.from'",
                "tx",
                e
              ),
              (0, S.MR)(
                t.from.toLowerCase() === (e.from || "").toLowerCase(),
                "from mismatch",
                "tx",
                e
              )),
            t
          );
        }
      }
      var rN = r(77813);
      let rC = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
      BigInt(0);
      let rB = BigInt(58);
      function rT(e) {
        return (
          e.match(/^ipfs:\/\/ipfs\//i)
            ? (e = e.substring(12))
            : e.match(/^ipfs:\/\//i)
            ? (e = e.substring(7))
            : (0, S.MR)(!1, "unsupported IPFS format", "link", e),
          `https://gateway.ipfs.io/ipfs/${e}`
        );
      }
      class rL {
        name;
        constructor(e) {
          (0, P.n)(this, { name: e });
        }
        connect(e) {
          return this;
        }
        supportsCoinType(e) {
          return !1;
        }
        async encodeAddress(e, t) {
          throw Error("unsupported coin");
        }
        async decodeAddress(e, t) {
          throw Error("unsupported coin");
        }
      }
      let rU = RegExp("^(ipfs)://(.*)$", "i"),
        rF = [
          RegExp("^(https)://(.*)$", "i"),
          RegExp("^(data):(.*)$", "i"),
          rU,
          RegExp("^eip155:[0-9]+/(erc[0-9]+):(.*)$", "i"),
        ];
      class r_ {
        provider;
        address;
        name;
        #eE;
        #eR;
        constructor(e, t, r) {
          (0, P.n)(this, { provider: e, address: t, name: r }),
            (this.#eE = null),
            (this.#eR = new ey.NZ(
              t,
              [
                "function supportsInterface(bytes4) view returns (bool)",
                "function resolve(bytes, bytes) view returns (bytes)",
                "function addr(bytes32) view returns (address)",
                "function addr(bytes32, uint) view returns (bytes)",
                "function text(bytes32, string) view returns (string)",
                "function contenthash(bytes32) view returns (bytes)",
              ],
              e
            ));
        }
        async supportsWildcard() {
          return (
            null == this.#eE &&
              (this.#eE = (async () => {
                try {
                  return await this.#eR.supportsInterface("0x9061b923");
                } catch (e) {
                  if ((0, S.bJ)(e, "CALL_EXCEPTION")) return !1;
                  throw ((this.#eE = null), e);
                }
              })()),
            await this.#eE
          );
        }
        async #eM(e, t) {
          var r, n;
          t = (t || []).slice();
          let i = this.#eR.interface;
          t.unshift(eX(this.name));
          let s = null;
          (await this.supportsWildcard()) &&
            ((s = i.getFunction(e)),
            (0, S.vA)(s, "missing fragment", "UNKNOWN_ERROR", {
              info: { funcName: e },
            }),
            (t = [
              ((r = this.name),
              (n = 255),
              (0, S.MR)(
                true,
                "DNS encoded label cannot exceed 255",
                "length",
                n
              ),
              (0, R.c$)(
                (0, R.xW)(
                  eY(r).map((e) => {
                    (0, S.MR)(
                      e.length <= n,
                      `label ${JSON.stringify(r)} exceeds ${n} bytes`,
                      "name",
                      r
                    );
                    let t = new Uint8Array(e.length + 1);
                    return t.set(e, 1), (t[0] = t.length - 1), t;
                  })
                )
              ) + "00"),
              i.encodeFunctionData(s, t),
            ]),
            (e = "resolve(bytes,bytes)")),
            t.push({ enableCcipRead: !0 });
          try {
            let r = await this.#eR[e](...t);
            if (s) return i.decodeFunctionResult(s, r)[0];
            return r;
          } catch (e) {
            if (!(0, S.bJ)(e, "CALL_EXCEPTION")) throw e;
          }
          return null;
        }
        async getAddress(e) {
          if ((null == e && (e = 60), 60 === e))
            try {
              let e = await this.#eM("addr(bytes32)");
              if (null == e || e === em) return null;
              return e;
            } catch (e) {
              if ((0, S.bJ)(e, "CALL_EXCEPTION")) return null;
              throw e;
            }
          if (e >= 0 && e < 0x80000000) {
            let t = e + 0x80000000,
              r = await this.#eM("addr(bytes32,uint)", [t]);
            if ((0, R.Lo)(r, 20)) return (0, A.b)(r);
          }
          let t = null;
          for (let r of this.provider.plugins)
            if (r instanceof rL && r.supportsCoinType(e)) {
              t = r;
              break;
            }
          if (null == t) return null;
          let r = await this.#eM("addr(bytes32,uint)", [e]);
          if (null == r || "0x" === r) return null;
          let n = await t.decodeAddress(e, r);
          if (null != n) return n;
          (0, S.vA)(!1, "invalid coin data", "UNSUPPORTED_OPERATION", {
            operation: `getAddress(${e})`,
            info: { coinType: e, data: r },
          });
        }
        async getText(e) {
          let t = await this.#eM("text(bytes32,string)", [e]);
          return null == t || "0x" === t ? null : t;
        }
        async getContentHash() {
          let e = await this.#eM("contenthash(bytes32)");
          if (null == e || "0x" === e) return null;
          let t = e.match(
            /^0x(e3010170|e5010172)(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/
          );
          if (t) {
            let e = "e3010170" === t[1] ? "ipfs" : "ipns",
              r = parseInt(t[4], 16);
            if (t[5].length === 2 * r)
              return `${e}://${(function (e) {
                let t = (0, R.q5)(e),
                  r = (0, M.Dg)(t),
                  n = "";
                for (; r; ) (n = rC[Number(r % rB)] + n), (r /= rB);
                for (let e = 0; e < t.length && !t[e]; e++) n = rC[0] + n;
                return n;
              })("0x" + t[2])}`;
          }
          let r = e.match(/^0xe40101fa011b20([0-9a-f]*)$/);
          if (r && 64 === r[1].length) return `bzz://${r[1]}`;
          (0, S.vA)(
            !1,
            "invalid or unsupported content hash data",
            "UNSUPPORTED_OPERATION",
            { operation: "getContentHash()", info: { data: e } }
          );
        }
        async getAvatar() {
          return (await this._getAvatar()).url;
        }
        async _getAvatar() {
          let e = [{ type: "name", value: this.name }];
          try {
            let t = await this.getText("avatar");
            if (null == t)
              return (
                e.push({ type: "!avatar", value: "" }),
                { url: null, linkage: e }
              );
            e.push({ type: "avatar", value: t });
            for (let r = 0; r < rF.length; r++) {
              let n = t.match(rF[r]);
              if (null == n) continue;
              let i = n[1].toLowerCase();
              switch (i) {
                case "https":
                case "data":
                  return (
                    e.push({ type: "url", value: t }), { linkage: e, url: t }
                  );
                case "ipfs": {
                  let r = rT(t);
                  return (
                    e.push({ type: "ipfs", value: t }),
                    e.push({ type: "url", value: r }),
                    { linkage: e, url: r }
                  );
                }
                case "erc721":
                case "erc1155": {
                  let r = "erc721" === i ? "tokenURI(uint256)" : "uri(uint256)";
                  e.push({ type: i, value: t });
                  let s = await this.getAddress();
                  if (null == s)
                    return (
                      e.push({ type: "!owner", value: "" }),
                      { url: null, linkage: e }
                    );
                  let a = (n[2] || "").split("/");
                  if (2 !== a.length)
                    return (
                      e.push({ type: `!${i}caip`, value: n[2] || "" }),
                      { url: null, linkage: e }
                    );
                  let o = a[1],
                    l = new ey.NZ(
                      a[0],
                      [
                        "function tokenURI(uint) view returns (string)",
                        "function ownerOf(uint) view returns (address)",
                        "function uri(uint) view returns (string)",
                        "function balanceOf(address, uint256) view returns (uint)",
                      ],
                      this.provider
                    );
                  if ("erc721" === i) {
                    let t = await l.ownerOf(o);
                    if (s !== t)
                      return (
                        e.push({ type: "!owner", value: t }),
                        { url: null, linkage: e }
                      );
                    e.push({ type: "owner", value: t });
                  } else if ("erc1155" === i) {
                    let t = await l.balanceOf(s, o);
                    if (!t)
                      return (
                        e.push({ type: "!balance", value: "0" }),
                        { url: null, linkage: e }
                      );
                    e.push({ type: "balance", value: t.toString() });
                  }
                  let u = await l[r](o);
                  if (null == u || "0x" === u)
                    return (
                      e.push({ type: "!metadata-url", value: "" }),
                      { url: null, linkage: e }
                    );
                  e.push({ type: "metadata-url-base", value: u }),
                    "erc1155" === i &&
                      ((u = u.replace("{id}", (0, M.up)(o, 32).substring(2))),
                      e.push({ type: "metadata-url-expanded", value: u })),
                    u.match(/^ipfs:/i) && (u = rT(u)),
                    e.push({ type: "metadata-url", value: u });
                  let f = {},
                    c = await new ep(u).send();
                  c.assertOk();
                  try {
                    f = c.bodyJson;
                  } catch (t) {
                    try {
                      e.push({ type: "!metadata", value: c.bodyText });
                    } catch (r) {
                      let t = c.body;
                      t && e.push({ type: "!metadata", value: (0, R.c$)(t) });
                    }
                    return { url: null, linkage: e };
                  }
                  if (!f)
                    return (
                      e.push({ type: "!metadata", value: "" }),
                      { url: null, linkage: e }
                    );
                  e.push({ type: "metadata", value: JSON.stringify(f) });
                  let d = f.image;
                  if ("string" != typeof d)
                    return (
                      e.push({ type: "!imageUrl", value: "" }),
                      { url: null, linkage: e }
                    );
                  if (d.match(/^(https:\/\/|data:)/i));
                  else {
                    let t = d.match(rU);
                    if (null == t)
                      return (
                        e.push({ type: "!imageUrl-ipfs", value: d }),
                        { url: null, linkage: e }
                      );
                    e.push({ type: "imageUrl-ipfs", value: d }), (d = rT(d));
                  }
                  return (
                    e.push({ type: "url", value: d }), { linkage: e, url: d }
                  );
                }
              }
            }
          } catch (e) {}
          return { linkage: e, url: null };
        }
        static async getEnsAddress(e) {
          let t = await e.getNetwork(),
            r = t.getPlugin("org.ethers.plugins.network.Ens");
          return (
            (0, S.vA)(
              r,
              "network does not support ENS",
              "UNSUPPORTED_OPERATION",
              { operation: "getEnsAddress", info: { network: t } }
            ),
            r.address
          );
        }
        static async #eS(e, t) {
          let r = await r_.getEnsAddress(e);
          try {
            let n = new ey.NZ(
                r,
                ["function resolver(bytes32) view returns (address)"],
                e
              ),
              i = await n.resolver(eX(t), { enableCcipRead: !0 });
            if (i === em) return null;
            return i;
          } catch (e) {
            throw e;
          }
        }
        static async fromName(e, t) {
          let r = t;
          for (;;) {
            if ("" === r || "." === r || ("eth" !== t && "eth" === r))
              return null;
            let n = await r_.#eS(e, r);
            if (null != n) {
              let i = new r_(e, n, t);
              if (r !== t && !(await i.supportsWildcard())) return null;
              return i;
            }
            r = r.split(".").slice(1).join(".");
          }
        }
      }
      let rD = BigInt(0);
      function rj(e, t) {
        return function (r) {
          return null == r ? t : e(r);
        };
      }
      function rz(e, t) {
        return (r) => {
          if (t && null == r) return null;
          if (!Array.isArray(r)) throw Error("not an array");
          return r.map((t) => e(t));
        };
      }
      function rG(e, t) {
        return (r) => {
          let n = {};
          for (let i in e) {
            let s = i;
            if (t && i in t && !(s in r)) {
              for (let e of t[i])
                if (e in r) {
                  s = e;
                  break;
                }
            }
            try {
              let t = e[i](r[s]);
              void 0 !== t && (n[i] = t);
            } catch (t) {
              let e = t instanceof Error ? t.message : "not-an-error";
              (0, S.vA)(!1, `invalid value for value.${i} (${e})`, "BAD_DATA", {
                value: r,
              });
            }
          }
          return n;
        };
      }
      function rq(e) {
        return (0, S.MR)((0, R.Lo)(e, !0), "invalid data", "value", e), e;
      }
      function rQ(e) {
        return (0, S.MR)((0, R.Lo)(e, 32), "invalid hash", "value", e), e;
      }
      let rH = rG(
          {
            address: A.b,
            blockHash: rQ,
            blockNumber: M.WZ,
            data: rq,
            index: M.WZ,
            removed: rj(function (e) {
              switch (e) {
                case !0:
                case "true":
                  return !0;
                case !1:
                case "false":
                  return !1;
              }
              (0,
              S.MR)(!1, `invalid boolean; ${JSON.stringify(e)}`, "value", e);
            }, !1),
            topics: rz(rQ),
            transactionHash: rQ,
            transactionIndex: M.WZ,
          },
          { index: ["logIndex"] }
        ),
        rV = rG(
          {
            hash: rj(rQ),
            parentHash: rQ,
            parentBeaconBlockRoot: rj(rQ, null),
            number: M.WZ,
            timestamp: M.WZ,
            nonce: rj(rq),
            difficulty: M.Ab,
            gasLimit: M.Ab,
            gasUsed: M.Ab,
            stateRoot: rj(rQ, null),
            receiptsRoot: rj(rQ, null),
            blobGasUsed: rj(M.Ab, null),
            excessBlobGas: rj(M.Ab, null),
            miner: rj(A.b),
            prevRandao: rj(rQ, null),
            extraData: rq,
            baseFeePerGas: rj(M.Ab),
          },
          { prevRandao: ["mixHash"] }
        ),
        rJ = rG(
          {
            transactionIndex: M.WZ,
            blockNumber: M.WZ,
            transactionHash: rQ,
            address: A.b,
            topics: rz(rQ),
            data: rq,
            index: M.WZ,
            blockHash: rQ,
          },
          { index: ["logIndex"] }
        ),
        rK = rG(
          {
            to: rj(A.b, null),
            from: rj(A.b, null),
            contractAddress: rj(A.b, null),
            index: M.WZ,
            root: rj(R.c$),
            gasUsed: M.Ab,
            blobGasUsed: rj(M.Ab, null),
            logsBloom: rj(rq),
            blockHash: rQ,
            hash: rQ,
            logs: rz(function (e) {
              return rJ(e);
            }),
            blockNumber: M.WZ,
            cumulativeGasUsed: M.Ab,
            effectiveGasPrice: rj(M.Ab),
            blobGasPrice: rj(M.Ab, null),
            status: rj(M.WZ),
            type: rj(M.WZ, 0),
          },
          {
            effectiveGasPrice: ["gasPrice"],
            hash: ["transactionHash"],
            index: ["transactionIndex"],
          }
        );
      function rW(e) {
        e.to &&
          (0, M.Ab)(e.to) === rD &&
          (e.to = "0x0000000000000000000000000000000000000000");
        let t = rG(
          {
            hash: rQ,
            index: rj(M.WZ, void 0),
            type: (e) => ("0x" === e || null == e ? 0 : (0, M.WZ)(e)),
            accessList: rj(Q.$, null),
            blobVersionedHashes: rj(rz(rQ, !0), null),
            authorizationList: rj(
              rz(
                (e) => ({
                  address: (0, A.b)(e.address),
                  chainId: (0, M.Ab)(e.chainId),
                  nonce: (0, M.Ab)(e.nonce),
                  signature: ee.from(e.signature ? e.signature : e),
                }),
                !1
              ),
              null
            ),
            blockHash: rj(rQ, null),
            blockNumber: rj(M.WZ, null),
            transactionIndex: rj(M.WZ, null),
            from: A.b,
            gasPrice: rj(M.Ab),
            maxPriorityFeePerGas: rj(M.Ab),
            maxFeePerGas: rj(M.Ab),
            maxFeePerBlobGas: rj(M.Ab, null),
            gasLimit: M.Ab,
            to: rj(A.b, null),
            value: M.Ab,
            nonce: M.WZ,
            data: rq,
            creates: rj(A.b, null),
            chainId: rj(M.Ab, null),
          },
          { data: ["input"], gasLimit: ["gas"], index: ["transactionIndex"] }
        )(e);
        if (
          (null == t.to &&
            null == t.creates &&
            (t.creates = (function (e) {
              let t = (0, A.b)(e.from),
                r = (0, M.Ab)(e.nonce, "tx.nonce").toString(16);
              return (
                (r = "0" === r ? "0x" : r.length % 2 ? "0x0" + r : "0x" + r),
                (0, A.b)((0, R.ZG)((0, E.S)(rb([t, r])), 12))
              );
            })(t)),
          (1 === e.type || 2 === e.type) &&
            null == e.accessList &&
            (t.accessList = []),
          e.signature
            ? (t.signature = ee.from(e.signature))
            : (t.signature = ee.from(e)),
          null == t.chainId)
        ) {
          let e = t.signature.legacyChainId;
          null != e && (t.chainId = e);
        }
        return (
          t.blockHash && (0, M.Ab)(t.blockHash) === rD && (t.blockHash = null),
          t
        );
      }
      class rZ {
        name;
        constructor(e) {
          (0, P.n)(this, { name: e });
        }
        clone() {
          return new rZ(this.name);
        }
      }
      class rY extends rZ {
        effectiveBlock;
        txBase;
        txCreate;
        txDataZero;
        txDataNonzero;
        txAccessListStorageKey;
        txAccessListAddress;
        constructor(e, t) {
          null == e && (e = 0),
            super(`org.ethers.network.plugins.GasCost#${e || 0}`);
          let r = { effectiveBlock: e };
          function n(e, n) {
            let i = (t || {})[e];
            null == i && (i = n),
              (0, S.MR)(
                "number" == typeof i,
                `invalud value for ${e}`,
                "costs",
                t
              ),
              (r[e] = i);
          }
          n("txBase", 21e3),
            n("txCreate", 32e3),
            n("txDataZero", 4),
            n("txDataNonzero", 16),
            n("txAccessListStorageKey", 1900),
            n("txAccessListAddress", 2400),
            (0, P.n)(this, r);
        }
        clone() {
          return new rY(this.effectiveBlock, this);
        }
      }
      class rX extends rZ {
        address;
        targetNetwork;
        constructor(e, t) {
          super("org.ethers.plugins.network.Ens"),
            (0, P.n)(this, {
              address: e || "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
              targetNetwork: null == t ? 1 : t,
            });
        }
        clone() {
          return new rX(this.address, this.targetNetwork);
        }
      }
      class r$ extends rZ {
        #Q;
        #eP;
        get url() {
          return this.#Q;
        }
        get processFunc() {
          return this.#eP;
        }
        constructor(e, t) {
          super("org.ethers.plugins.network.FetchUrlFeeDataPlugin"),
            (this.#Q = e),
            (this.#eP = t);
        }
        clone() {
          return this;
        }
      }
      let r0 = new Map();
      class r1 {
        #eO;
        #ep;
        #eI;
        constructor(e, t) {
          (this.#eO = e), (this.#ep = (0, M.Ab)(t)), (this.#eI = new Map());
        }
        toJSON() {
          return { name: this.name, chainId: String(this.chainId) };
        }
        get name() {
          return this.#eO;
        }
        set name(e) {
          this.#eO = e;
        }
        get chainId() {
          return this.#ep;
        }
        set chainId(e) {
          this.#ep = (0, M.Ab)(e, "chainId");
        }
        matches(e) {
          if (null == e) return !1;
          if ("string" == typeof e) {
            try {
              return this.chainId === (0, M.Ab)(e);
            } catch (e) {}
            return this.name === e;
          }
          if ("number" == typeof e || "bigint" == typeof e) {
            try {
              return this.chainId === (0, M.Ab)(e);
            } catch (e) {}
            return !1;
          }
          if ("object" == typeof e) {
            if (null != e.chainId) {
              try {
                return this.chainId === (0, M.Ab)(e.chainId);
              } catch (e) {}
              return !1;
            }
            if (null != e.name) return this.name === e.name;
          }
          return !1;
        }
        get plugins() {
          return Array.from(this.#eI.values());
        }
        attachPlugin(e) {
          if (this.#eI.get(e.name))
            throw Error(`cannot replace existing plugin: ${e.name} `);
          return this.#eI.set(e.name, e.clone()), this;
        }
        getPlugin(e) {
          return this.#eI.get(e) || null;
        }
        getPlugins(e) {
          return this.plugins.filter((t) => t.name.split("#")[0] === e);
        }
        clone() {
          let e = new r1(this.name, this.chainId);
          return (
            this.plugins.forEach((t) => {
              e.attachPlugin(t.clone());
            }),
            e
          );
        }
        computeIntrinsicGas(e) {
          let t =
              this.getPlugin("org.ethers.plugins.network.GasCost") || new rY(),
            r = t.txBase;
          if ((null == e.to && (r += t.txCreate), e.data))
            for (let n = 2; n < e.data.length; n += 2)
              "00" === e.data.substring(n, n + 2)
                ? (r += t.txDataZero)
                : (r += t.txDataNonzero);
          if (e.accessList) {
            let n = (0, Q.$)(e.accessList);
            for (let e in n)
              r +=
                t.txAccessListAddress +
                t.txAccessListStorageKey * n[e].storageKeys.length;
          }
          return r;
        }
        static from(e) {
          if (
            ((function () {
              r4 ||
                ((r4 = !0),
                e("mainnet", 1, { ensNetwork: 1, altNames: ["homestead"] }),
                e("ropsten", 3, { ensNetwork: 3 }),
                e("rinkeby", 4, { ensNetwork: 4 }),
                e("goerli", 5, { ensNetwork: 5 }),
                e("kovan", 42, { ensNetwork: 42 }),
                e("sepolia", 0xaa36a7, { ensNetwork: 0xaa36a7 }),
                e("holesky", 17e3, { ensNetwork: 17e3 }),
                e("classic", 61, {}),
                e("classicKotti", 6, {}),
                e("arbitrum", 42161, { ensNetwork: 1 }),
                e("arbitrum-goerli", 421613, {}),
                e("arbitrum-sepolia", 421614, {}),
                e("base", 8453, { ensNetwork: 1 }),
                e("base-goerli", 84531, {}),
                e("base-sepolia", 84532, {}),
                e("bnb", 56, { ensNetwork: 1 }),
                e("bnbt", 97, {}),
                e("linea", 59144, { ensNetwork: 1 }),
                e("linea-goerli", 59140, {}),
                e("linea-sepolia", 59141, {}),
                e("matic", 137, {
                  ensNetwork: 1,
                  plugins: [r3("https://gasstation.polygon.technology/v2")],
                }),
                e("matic-amoy", 80002, {}),
                e("matic-mumbai", 80001, {
                  altNames: ["maticMumbai", "maticmum"],
                  plugins: [
                    r3("https://gasstation-testnet.polygon.technology/v2"),
                  ],
                }),
                e("optimism", 10, { ensNetwork: 1, plugins: [] }),
                e("optimism-goerli", 420, {}),
                e("optimism-sepolia", 0xaa37dc, {}),
                e("xdai", 100, { ensNetwork: 1 }));
              function e(e, t, r) {
                let n = function () {
                  let n = new r1(e, t);
                  return (
                    null != r.ensNetwork &&
                      n.attachPlugin(new rX(null, r.ensNetwork)),
                    n.attachPlugin(new rY()),
                    (r.plugins || []).forEach((e) => {
                      n.attachPlugin(e);
                    }),
                    n
                  );
                };
                r1.register(e, n),
                  r1.register(t, n),
                  r.altNames &&
                    r.altNames.forEach((e) => {
                      r1.register(e, n);
                    });
              }
            })(),
            null == e)
          )
            return r1.from("mainnet");
          if (
            ("number" == typeof e && (e = BigInt(e)),
            "string" == typeof e || "bigint" == typeof e)
          ) {
            let t = r0.get(e);
            if (t) return t();
            if ("bigint" == typeof e) return new r1("unknown", e);
            (0, S.MR)(!1, "unknown network", "network", e);
          }
          if ("function" == typeof e.clone) return e.clone();
          if ("object" == typeof e) {
            (0, S.MR)(
              "string" == typeof e.name && "number" == typeof e.chainId,
              "invalid network object name or chainId",
              "network",
              e
            );
            let t = new r1(e.name, e.chainId);
            return (
              (e.ensAddress || null != e.ensNetwork) &&
                t.attachPlugin(new rX(e.ensAddress, e.ensNetwork)),
              t
            );
          }
          (0, S.MR)(!1, "invalid network", "network", e);
        }
        static register(e, t) {
          "number" == typeof e && (e = BigInt(e));
          let r = r0.get(e);
          r &&
            (0, S.MR)(
              !1,
              `conflicting network for ${JSON.stringify(r.name)}`,
              "nameOrChainId",
              e
            ),
            r0.set(e, t);
        }
      }
      function r2(e, t) {
        let r = String(e);
        if (!r.match(/^[0-9.]+$/)) throw Error(`invalid gwei value: ${e}`);
        let n = r.split(".");
        if ((1 === n.length && n.push(""), 2 !== n.length))
          throw Error(`invalid gwei value: ${e}`);
        for (; n[1].length < t; ) n[1] += "0";
        if (n[1].length > 9) {
          let e = BigInt(n[1].substring(0, 9));
          !n[1].substring(9).match(/^0+$/) && e++, (n[1] = e.toString());
        }
        return BigInt(n[0] + n[1]);
      }
      function r3(e) {
        return new r$(e, async (e, t, r) => {
          let n;
          r.setHeader("User-Agent", "ethers");
          try {
            let [t, i] = await Promise.all([r.send(), e()]),
              s = (n = t).bodyJson.standard;
            return {
              gasPrice: i.gasPrice,
              maxFeePerGas: r2(s.maxFee, 9),
              maxPriorityFeePerGas: r2(s.maxPriorityFee, 9),
            };
          } catch (e) {
            (0, S.vA)(
              !1,
              `error encountered with polygon gas station (${JSON.stringify(
                r.url
              )})`,
              "SERVER_ERROR",
              { request: r, response: n, error: e }
            );
          }
        });
      }
      let r4 = !1;
      var r6 = r(84308);
      function r8(e) {
        return JSON.parse(JSON.stringify(e));
      }
      class r5 {
        #ek;
        #eN;
        #eC;
        #eB;
        constructor(e) {
          (this.#ek = e), (this.#eN = null), (this.#eC = 4e3), (this.#eB = -2);
        }
        get pollingInterval() {
          return this.#eC;
        }
        set pollingInterval(e) {
          this.#eC = e;
        }
        async #eT() {
          try {
            let e = await this.#ek.getBlockNumber();
            if (-2 === this.#eB) {
              this.#eB = e;
              return;
            }
            if (e !== this.#eB) {
              for (let t = this.#eB + 1; t <= e; t++) {
                if (null == this.#eN) return;
                await this.#ek.emit("block", t);
              }
              this.#eB = e;
            }
          } catch (e) {}
          null != this.#eN &&
            (this.#eN = this.#ek._setTimeout(this.#eT.bind(this), this.#eC));
        }
        start() {
          this.#eN ||
            ((this.#eN = this.#ek._setTimeout(this.#eT.bind(this), this.#eC)),
            this.#eT());
        }
        stop() {
          this.#eN && (this.#ek._clearTimeout(this.#eN), (this.#eN = null));
        }
        pause(e) {
          this.stop(), e && (this.#eB = -2);
        }
        resume() {
          this.start();
        }
      }
      class r9 {
        #ek;
        #eT;
        #eL;
        constructor(e) {
          (this.#ek = e),
            (this.#eL = !1),
            (this.#eT = (e) => {
              this._poll(e, this.#ek);
            });
        }
        async _poll(e, t) {
          throw Error("sub-classes must override this");
        }
        start() {
          this.#eL ||
            ((this.#eL = !0), this.#eT(-2), this.#ek.on("block", this.#eT));
        }
        stop() {
          this.#eL && ((this.#eL = !1), this.#ek.off("block", this.#eT));
        }
        pause(e) {
          this.stop();
        }
        resume() {
          this.start();
        }
      }
      class r7 extends r9 {
        #eU;
        #eF;
        constructor(e, t) {
          super(e), (this.#eU = t), (this.#eF = -2);
        }
        pause(e) {
          e && (this.#eF = -2), super.pause(e);
        }
        async _poll(e, t) {
          let r = await t.getBlock(this.#eU);
          null != r &&
            (-2 === this.#eF
              ? (this.#eF = r.number)
              : r.number > this.#eF &&
                (t.emit(this.#eU, r.number), (this.#eF = r.number)));
        }
      }
      class ne extends r9 {
        #P;
        constructor(e, t) {
          super(e), (this.#P = r8(t));
        }
        async _poll(e, t) {
          throw Error("@TODO");
        }
      }
      class nt extends r9 {
        #e_;
        constructor(e, t) {
          super(e), (this.#e_ = t);
        }
        async _poll(e, t) {
          let r = await t.getTransactionReceipt(this.#e_);
          r && t.emit(this.#e_, r);
        }
      }
      class nr {
        #ek;
        #P;
        #eN;
        #eL;
        #eB;
        constructor(e, t) {
          (this.#ek = e),
            (this.#P = r8(t)),
            (this.#eN = this.#eT.bind(this)),
            (this.#eL = !1),
            (this.#eB = -2);
        }
        async #eT(e) {
          if (-2 === this.#eB) return;
          let t = r8(this.#P);
          (t.fromBlock = this.#eB + 1), (t.toBlock = e);
          let r = await this.#ek.getLogs(t);
          if (0 === r.length) {
            this.#eB < e - 60 && (this.#eB = e - 60);
            return;
          }
          for (let e of r)
            this.#ek.emit(this.#P, e), (this.#eB = e.blockNumber);
        }
        start() {
          this.#eL ||
            ((this.#eL = !0),
            -2 === this.#eB &&
              this.#ek.getBlockNumber().then((e) => {
                this.#eB = e;
              }),
            this.#ek.on("block", this.#eN));
        }
        stop() {
          this.#eL && ((this.#eL = !1), this.#ek.off("block", this.#eN));
        }
        pause(e) {
          this.stop(), e && (this.#eB = -2);
        }
        resume() {
          this.start();
        }
      }
      let nn = BigInt(2);
      function ni(e) {
        return e && "function" == typeof e.then;
      }
      function ns(e, t) {
        return (
          e +
          ":" +
          JSON.stringify(t, (e, t) => {
            if (null == t) return "null";
            if ("bigint" == typeof t) return `bigint:${t.toString()}`;
            if ("string" == typeof t) return t.toLowerCase();
            if ("object" == typeof t && !Array.isArray(t)) {
              let e = Object.keys(t);
              return e.sort(), e.reduce((e, r) => ((e[r] = t[r]), e), {});
            }
            return t;
          })
        );
      }
      class na {
        name;
        constructor(e) {
          (0, P.n)(this, { name: e });
        }
        start() {}
        stop() {}
        pause(e) {}
        resume() {}
      }
      function no(e) {
        return (e = Array.from(new Set(e).values())).sort(), e;
      }
      async function nl(e, t) {
        if (null == e) throw Error("invalid event");
        if ((Array.isArray(e) && (e = { topics: e }), "string" == typeof e))
          switch (e) {
            case "block":
            case "debug":
            case "error":
            case "finalized":
            case "network":
            case "pending":
            case "safe":
              return { type: e, tag: e };
          }
        if ((0, R.Lo)(e, 32)) {
          let t = e.toLowerCase();
          return { type: "transaction", tag: ns("tx", { hash: t }), hash: t };
        }
        if (e.orphan) {
          let t = e;
          return {
            type: "orphan",
            tag: ns("orphan", t),
            filter: JSON.parse(JSON.stringify(t)),
          };
        }
        if (e.address || e.topics) {
          let r = e,
            n = {
              topics: (r.topics || []).map((e) =>
                null == e
                  ? null
                  : Array.isArray(e)
                  ? no(e.map((e) => e.toLowerCase()))
                  : e.toLowerCase()
              ),
            };
          if (r.address) {
            let e = [],
              i = [],
              s = (r) => {
                (0, R.Lo)(r)
                  ? e.push(r)
                  : i.push(
                      (async () => {
                        e.push(await (0, x.tG)(r, t));
                      })()
                    );
              };
            Array.isArray(r.address) ? r.address.forEach(s) : s(r.address),
              i.length && (await Promise.all(i)),
              (n.address = no(e.map((e) => e.toLowerCase())));
          }
          return { filter: n, tag: ns("event", n), type: "event" };
        }
        (0, S.MR)(!1, "unknown ProviderEvent", "event", e);
      }
      function nu() {
        return new Date().getTime();
      }
      let nf = { cacheTimeout: 250, pollingInterval: 4e3 };
      class nc {
        #eD;
        #eI;
        #ej;
        #ez;
        #eG;
        #eq;
        #eQ;
        #eH;
        #eV;
        #eJ;
        #eK;
        #O;
        constructor(e, t) {
          if (((this.#O = Object.assign({}, nf, t || {})), "any" === e))
            (this.#eq = !0), (this.#eG = null);
          else if (e) {
            let t = r1.from(e);
            (this.#eq = !1),
              (this.#eG = Promise.resolve(t)),
              setTimeout(() => {
                this.emit("network", t, null);
              }, 0);
          } else (this.#eq = !1), (this.#eG = null);
          (this.#eH = -1),
            (this.#eQ = new Map()),
            (this.#eD = new Map()),
            (this.#eI = new Map()),
            (this.#ej = null),
            (this.#ez = !1),
            (this.#eV = 1),
            (this.#eJ = new Map()),
            (this.#eK = !1);
        }
        get pollingInterval() {
          return this.#O.pollingInterval;
        }
        get provider() {
          return this;
        }
        get plugins() {
          return Array.from(this.#eI.values());
        }
        attachPlugin(e) {
          if (this.#eI.get(e.name))
            throw Error(`cannot replace existing plugin: ${e.name} `);
          return this.#eI.set(e.name, e.connect(this)), this;
        }
        getPlugin(e) {
          return this.#eI.get(e) || null;
        }
        get disableCcipRead() {
          return this.#eK;
        }
        set disableCcipRead(e) {
          this.#eK = !!e;
        }
        async #eW(e) {
          let t = this.#O.cacheTimeout;
          if (t < 0) return await this._perform(e);
          let r = ns(e.method, e),
            n = this.#eQ.get(r);
          return (
            n ||
              ((n = this._perform(e)),
              this.#eQ.set(r, n),
              setTimeout(() => {
                this.#eQ.get(r) === n && this.#eQ.delete(r);
              }, t)),
            await n
          );
        }
        async ccipReadFetch(e, t, r) {
          if (this.disableCcipRead || 0 === r.length || null == e.to)
            return null;
          let n = e.to.toLowerCase(),
            i = t.toLowerCase(),
            s = [];
          for (let t = 0; t < r.length; t++) {
            let a,
              o = r[t],
              l = new ep(o.replace("{sender}", n).replace("{data}", i));
            -1 === o.indexOf("{data}") && (l.body = { data: i, sender: n }),
              this.emit("debug", {
                action: "sendCcipReadFetchRequest",
                request: l,
                index: t,
                urls: r,
              });
            let u = "unknown error";
            try {
              a = await l.send();
            } catch (e) {
              s.push(e.message),
                this.emit("debug", {
                  action: "receiveCcipReadFetchError",
                  request: l,
                  result: { error: e },
                });
              continue;
            }
            try {
              let e = a.bodyJson;
              if (e.data)
                return (
                  this.emit("debug", {
                    action: "receiveCcipReadFetchResult",
                    request: l,
                    result: e,
                  }),
                  e.data
                );
              e.message && (u = e.message),
                this.emit("debug", {
                  action: "receiveCcipReadFetchError",
                  request: l,
                  result: e,
                });
            } catch (e) {}
            (0, S.vA)(
              a.statusCode < 400 || a.statusCode >= 500,
              `response not found during CCIP fetch: ${u}`,
              "OFFCHAIN_FAULT",
              {
                reason: "404_MISSING_RESOURCE",
                transaction: e,
                info: { url: o, errorMessage: u },
              }
            ),
              s.push(u);
          }
          (0, S.vA)(
            !1,
            `error encountered during CCIP fetch: ${s
              .map((e) => JSON.stringify(e))
              .join(", ")}`,
            "OFFCHAIN_FAULT",
            {
              reason: "500_SERVER_ERROR",
              transaction: e,
              info: { urls: r, errorMessages: s },
            }
          );
        }
        _wrapBlock(e, t) {
          return new r6.eB(
            (function (e) {
              let t = rV(e);
              return (
                (t.transactions = e.transactions.map((e) =>
                  "string" == typeof e ? e : rW(e)
                )),
                t
              );
            })(e),
            this
          );
        }
        _wrapLog(e, t) {
          return new r6.tG(rH(e), this);
        }
        _wrapTransactionReceipt(e, t) {
          return new r6.z5(rK(e), this);
        }
        _wrapTransactionResponse(e, t) {
          return new r6.uI(rW(e), this);
        }
        _detectNetwork() {
          (0, S.vA)(
            !1,
            "sub-classes must implement this",
            "UNSUPPORTED_OPERATION",
            { operation: "_detectNetwork" }
          );
        }
        async _perform(e) {
          (0, S.vA)(
            !1,
            `unsupported method: ${e.method}`,
            "UNSUPPORTED_OPERATION",
            { operation: e.method, info: e }
          );
        }
        async getBlockNumber() {
          let e = (0, M.WZ)(
            await this.#eW({ method: "getBlockNumber" }),
            "%response"
          );
          return this.#eH >= 0 && (this.#eH = e), e;
        }
        _getAddress(e) {
          return (0, x.tG)(e, this);
        }
        _getBlockTag(e) {
          if (null == e) return "latest";
          switch (e) {
            case "earliest":
              return "0x0";
            case "finalized":
            case "latest":
            case "pending":
            case "safe":
              return e;
          }
          return (0, R.Lo)(e)
            ? (0, R.Lo)(e, 32)
              ? e
              : (0, M.nD)(e)
            : ("bigint" == typeof e && (e = (0, M.WZ)(e, "blockTag")),
              "number" == typeof e)
            ? e >= 0
              ? (0, M.nD)(e)
              : this.#eH >= 0
              ? (0, M.nD)(this.#eH + e)
              : this.getBlockNumber().then((t) => (0, M.nD)(t + e))
            : void (0, S.MR)(!1, "invalid blockTag", "blockTag", e);
        }
        _getFilter(e) {
          let t,
            r,
            n = (e.topics || []).map((e) =>
              null == e
                ? null
                : Array.isArray(e)
                ? no(e.map((e) => e.toLowerCase()))
                : e.toLowerCase()
            ),
            i = "blockHash" in e ? e.blockHash : void 0,
            s = (e, t, r) => {
              let s;
              switch (e.length) {
                case 0:
                  break;
                case 1:
                  s = e[0];
                  break;
                default:
                  e.sort(), (s = e);
              }
              if (i && (null != t || null != r)) throw Error("invalid filter");
              let a = {};
              return (
                s && (a.address = s),
                n.length && (a.topics = n),
                t && (a.fromBlock = t),
                r && (a.toBlock = r),
                i && (a.blockHash = i),
                a
              );
            },
            a = [];
          if (e.address)
            if (Array.isArray(e.address))
              for (let t of e.address) a.push(this._getAddress(t));
            else a.push(this._getAddress(e.address));
          return (
            "fromBlock" in e && (t = this._getBlockTag(e.fromBlock)),
            ("toBlock" in e && (r = this._getBlockTag(e.toBlock)),
            a.filter((e) => "string" != typeof e).length ||
              (null != t && "string" != typeof t) ||
              (null != r && "string" != typeof r))
              ? Promise.all([Promise.all(a), t, r]).then((e) =>
                  s(e[0], e[1], e[2])
                )
              : s(a, t, r)
          );
        }
        _getTransactionRequest(e) {
          let t = (0, r6.VS)(e),
            r = [];
          if (
            (["to", "from"].forEach((e) => {
              if (null == t[e]) return;
              let n = (0, x.tG)(t[e], this);
              ni(n)
                ? r.push(
                    (async function () {
                      t[e] = await n;
                    })()
                  )
                : (t[e] = n);
            }),
            null != t.blockTag)
          ) {
            let e = this._getBlockTag(t.blockTag);
            ni(e)
              ? r.push(
                  (async function () {
                    t.blockTag = await e;
                  })()
                )
              : (t.blockTag = e);
          }
          return r.length
            ? (async function () {
                return await Promise.all(r), t;
              })()
            : t;
        }
        async getNetwork() {
          if (null == this.#eG) {
            let e = (async () => {
              try {
                let e = await this._detectNetwork();
                return this.emit("network", e, null), e;
              } catch (t) {
                throw (this.#eG === e && (this.#eG = null), t);
              }
            })();
            return (this.#eG = e), (await e).clone();
          }
          let e = this.#eG,
            [t, r] = await Promise.all([e, this._detectNetwork()]);
          return (
            t.chainId !== r.chainId &&
              (this.#eq
                ? (this.emit("network", r, t),
                  this.#eG === e && (this.#eG = Promise.resolve(r)))
                : (0, S.vA)(
                    !1,
                    `network changed: ${t.chainId} => ${r.chainId} `,
                    "NETWORK_ERROR",
                    { event: "changed" }
                  )),
            t.clone()
          );
        }
        async getFeeData() {
          let e = await this.getNetwork(),
            t = async () => {
              let {
                  _block: t,
                  gasPrice: r,
                  priorityFee: n,
                } = await (0, P.k)({
                  _block: this.#eZ("latest", !1),
                  gasPrice: (async () => {
                    try {
                      let e = await this.#eW({ method: "getGasPrice" });
                      return (0, M.Ab)(e, "%response");
                    } catch (e) {}
                    return null;
                  })(),
                  priorityFee: (async () => {
                    try {
                      let e = await this.#eW({ method: "getPriorityFee" });
                      return (0, M.Ab)(e, "%response");
                    } catch (e) {}
                    return null;
                  })(),
                }),
                i = null,
                s = null,
                a = this._wrapBlock(t, e);
              return (
                a &&
                  a.baseFeePerGas &&
                  ((s = null != n ? n : BigInt("1000000000")),
                  (i = a.baseFeePerGas * nn + s)),
                new r6.J9(r, i, s)
              );
            },
            r = e.getPlugin("org.ethers.plugins.network.FetchUrlFeeDataPlugin");
          if (r) {
            let e = new ep(r.url),
              n = await r.processFunc(t, this, e);
            return new r6.J9(
              n.gasPrice,
              n.maxFeePerGas,
              n.maxPriorityFeePerGas
            );
          }
          return await t();
        }
        async estimateGas(e) {
          let t = this._getTransactionRequest(e);
          return (
            ni(t) && (t = await t),
            (0, M.Ab)(
              await this.#eW({ method: "estimateGas", transaction: t }),
              "%response"
            )
          );
        }
        async #eY(e, t, r) {
          (0, S.vA)(
            r < 10,
            "CCIP read exceeded maximum redirections",
            "OFFCHAIN_FAULT",
            {
              reason: "TOO_MANY_REDIRECTS",
              transaction: Object.assign({}, e, {
                blockTag: t,
                enableCcipRead: !0,
              }),
            }
          );
          let n = (0, r6.VS)(e);
          try {
            return (0, R.c$)(
              await this._perform({
                method: "call",
                transaction: n,
                blockTag: t,
              })
            );
          } catch (e) {
            if (
              !this.disableCcipRead &&
              (0, S.E)(e) &&
              e.data &&
              r >= 0 &&
              "latest" === t &&
              null != n.to &&
              "0x556f1830" === (0, R.ZG)(e.data, 0, 4)
            ) {
              let i,
                s = e.data,
                a = await (0, x.tG)(n.to, this);
              try {
                i = (function (e) {
                  let t = {
                    sender: "",
                    urls: [],
                    calldata: "",
                    selector: "",
                    extraData: "",
                    errorArgs: [],
                  };
                  (0, S.vA)(
                    (0, R.pO)(e) >= 160,
                    "insufficient OffchainLookup data",
                    "OFFCHAIN_FAULT",
                    { reason: "insufficient OffchainLookup data" }
                  );
                  let r = (0, R.ZG)(e, 0, 32);
                  (0, S.vA)(
                    (0, R.ZG)(r, 0, 12) === (0, R.ZG)(nb, 0, 12),
                    "corrupt OffchainLookup sender",
                    "OFFCHAIN_FAULT",
                    { reason: "corrupt OffchainLookup sender" }
                  ),
                    (t.sender = (0, R.ZG)(r, 12));
                  try {
                    let r = [],
                      n = (0, M.WZ)((0, R.ZG)(e, 32, 64)),
                      i = (0, M.WZ)((0, R.ZG)(e, n, n + 32)),
                      s = (0, R.ZG)(e, n + 32);
                    for (let e = 0; e < i; e++) {
                      let t = (function (e, t) {
                        try {
                          let r = nd(e, t);
                          if (r) return (0, er._v)(r);
                        } catch (e) {}
                        return null;
                      })(s, 32 * e);
                      if (null == t) throw Error("abort");
                      r.push(t);
                    }
                    t.urls = r;
                  } catch (e) {
                    (0, S.vA)(
                      !1,
                      "corrupt OffchainLookup urls",
                      "OFFCHAIN_FAULT",
                      { reason: "corrupt OffchainLookup urls" }
                    );
                  }
                  try {
                    let r = nd(e, 64);
                    if (null == r) throw Error("abort");
                    t.calldata = r;
                  } catch (e) {
                    (0, S.vA)(
                      !1,
                      "corrupt OffchainLookup calldata",
                      "OFFCHAIN_FAULT",
                      { reason: "corrupt OffchainLookup calldata" }
                    );
                  }
                  (0, S.vA)(
                    (0, R.ZG)(e, 100, 128) === (0, R.ZG)(nb, 0, 28),
                    "corrupt OffchainLookup callbaackSelector",
                    "OFFCHAIN_FAULT",
                    { reason: "corrupt OffchainLookup callbaackSelector" }
                  ),
                    (t.selector = (0, R.ZG)(e, 96, 100));
                  try {
                    let r = nd(e, 128);
                    if (null == r) throw Error("abort");
                    t.extraData = r;
                  } catch (e) {
                    (0, S.vA)(
                      !1,
                      "corrupt OffchainLookup extraData",
                      "OFFCHAIN_FAULT",
                      { reason: "corrupt OffchainLookup extraData" }
                    );
                  }
                  return (
                    (t.errorArgs = "sender,urls,calldata,selector,extraData"
                      .split(/,/)
                      .map((e) => t[e])),
                    t
                  );
                })((0, R.ZG)(e.data, 4));
              } catch (e) {
                (0, S.vA)(!1, e.message, "OFFCHAIN_FAULT", {
                  reason: "BAD_DATA",
                  transaction: n,
                  info: { data: s },
                });
              }
              (0, S.vA)(
                i.sender.toLowerCase() === a.toLowerCase(),
                "CCIP Read sender mismatch",
                "CALL_EXCEPTION",
                {
                  action: "call",
                  data: s,
                  reason: "OffchainLookup",
                  transaction: n,
                  invocation: null,
                  revert: {
                    signature:
                      "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                    name: "OffchainLookup",
                    args: i.errorArgs,
                  },
                }
              );
              let o = await this.ccipReadFetch(n, i.calldata, i.urls);
              (0, S.vA)(
                null != o,
                "CCIP Read failed to fetch data",
                "OFFCHAIN_FAULT",
                {
                  reason: "FETCH_FAILED",
                  transaction: n,
                  info: { data: e.data, errorArgs: i.errorArgs },
                }
              );
              let l = {
                to: a,
                data: (0, R.xW)([
                  i.selector,
                  (function (e) {
                    let t = [],
                      r = 0;
                    for (let n = 0; n < e.length; n++) t.push(np), (r += 32);
                    for (let n = 0; n < e.length; n++) {
                      let i = (0, R.q5)(e[n]);
                      (t[n] = nh(r)),
                        t.push(nh(i.length)),
                        t.push(
                          (function (e) {
                            if (e.length % 32 == 0) return e;
                            let t = new Uint8Array(
                              32 * Math.ceil(e.length / 32)
                            );
                            return t.set(e), t;
                          })(i)
                        ),
                        (r += 32 + 32 * Math.ceil(i.length / 32));
                    }
                    return (0, R.xW)(t);
                  })([o, i.extraData]),
                ]),
              };
              this.emit("debug", {
                action: "sendCcipReadCall",
                transaction: l,
              });
              try {
                let e = await this.#eY(l, t, r + 1);
                return (
                  this.emit("debug", {
                    action: "receiveCcipReadCallResult",
                    transaction: Object.assign({}, l),
                    result: e,
                  }),
                  e
                );
              } catch (e) {
                throw (
                  (this.emit("debug", {
                    action: "receiveCcipReadCallError",
                    transaction: Object.assign({}, l),
                    error: e,
                  }),
                  e)
                );
              }
            }
            throw e;
          }
        }
        async #eX(e) {
          let { value: t } = await (0, P.k)({
            network: this.getNetwork(),
            value: e,
          });
          return t;
        }
        async call(e) {
          let { tx: t, blockTag: r } = await (0, P.k)({
            tx: this._getTransactionRequest(e),
            blockTag: this._getBlockTag(e.blockTag),
          });
          return await this.#eX(this.#eY(t, r, e.enableCcipRead ? 0 : -1));
        }
        async #e$(e, t, r) {
          let n = this._getAddress(t),
            i = this._getBlockTag(r);
          return (
            ("string" != typeof n || "string" != typeof i) &&
              ([n, i] = await Promise.all([n, i])),
            await this.#eX(
              this.#eW(Object.assign(e, { address: n, blockTag: i }))
            )
          );
        }
        async getBalance(e, t) {
          return (0, M.Ab)(
            await this.#e$({ method: "getBalance" }, e, t),
            "%response"
          );
        }
        async getTransactionCount(e, t) {
          return (0, M.WZ)(
            await this.#e$({ method: "getTransactionCount" }, e, t),
            "%response"
          );
        }
        async getCode(e, t) {
          return (0, R.c$)(await this.#e$({ method: "getCode" }, e, t));
        }
        async getStorage(e, t, r) {
          let n = (0, M.Ab)(t, "position");
          return (0, R.c$)(
            await this.#e$({ method: "getStorage", position: n }, e, r)
          );
        }
        async broadcastTransaction(e) {
          let {
              blockNumber: t,
              hash: r,
              network: n,
            } = await (0, P.k)({
              blockNumber: this.getBlockNumber(),
              hash: this._perform({
                method: "broadcastTransaction",
                signedTransaction: e,
              }),
              network: this.getNetwork(),
            }),
            i = rk.from(e);
          if (i.hash !== r)
            throw Error("@TODO: the returned hash did not match");
          return this._wrapTransactionResponse(i, n).replaceableTransaction(t);
        }
        async #eZ(e, t) {
          if ((0, R.Lo)(e, 32))
            return await this.#eW({
              method: "getBlock",
              blockHash: e,
              includeTransactions: t,
            });
          let r = this._getBlockTag(e);
          return (
            "string" != typeof r && (r = await r),
            await this.#eW({
              method: "getBlock",
              blockTag: r,
              includeTransactions: t,
            })
          );
        }
        async getBlock(e, t) {
          let { network: r, params: n } = await (0, P.k)({
            network: this.getNetwork(),
            params: this.#eZ(e, !!t),
          });
          return null == n ? null : this._wrapBlock(n, r);
        }
        async getTransaction(e) {
          let { network: t, params: r } = await (0, P.k)({
            network: this.getNetwork(),
            params: this.#eW({ method: "getTransaction", hash: e }),
          });
          return null == r ? null : this._wrapTransactionResponse(r, t);
        }
        async getTransactionReceipt(e) {
          let { network: t, params: r } = await (0, P.k)({
            network: this.getNetwork(),
            params: this.#eW({ method: "getTransactionReceipt", hash: e }),
          });
          if (null == r) return null;
          if (null == r.gasPrice && null == r.effectiveGasPrice) {
            let t = await this.#eW({ method: "getTransaction", hash: e });
            if (null == t)
              throw Error(
                "report this; could not find tx or effectiveGasPrice"
              );
            r.effectiveGasPrice = t.gasPrice;
          }
          return this._wrapTransactionReceipt(r, t);
        }
        async getTransactionResult(e) {
          let { result: t } = await (0, P.k)({
            network: this.getNetwork(),
            result: this.#eW({ method: "getTransactionResult", hash: e }),
          });
          return null == t ? null : (0, R.c$)(t);
        }
        async getLogs(e) {
          let t = this._getFilter(e);
          ni(t) && (t = await t);
          let { network: r, params: n } = await (0, P.k)({
            network: this.getNetwork(),
            params: this.#eW({ method: "getLogs", filter: t }),
          });
          return n.map((e) => this._wrapLog(e, r));
        }
        _getProvider(e) {
          (0, S.vA)(
            !1,
            "provider cannot connect to target network",
            "UNSUPPORTED_OPERATION",
            { operation: "_getProvider()" }
          );
        }
        async getResolver(e) {
          return await r_.fromName(this, e);
        }
        async getAvatar(e) {
          let t = await this.getResolver(e);
          return t ? await t.getAvatar() : null;
        }
        async resolveName(e) {
          let t = await this.getResolver(e);
          return t ? await t.getAddress() : null;
        }
        async lookupAddress(e) {
          let t = eX(
            (e = (0, A.b)(e)).substring(2).toLowerCase() + ".addr.reverse"
          );
          try {
            let r = await r_.getEnsAddress(this),
              n = new ey.NZ(
                r,
                ["function resolver(bytes32) view returns (address)"],
                this
              ),
              i = await n.resolver(t);
            if (null == i || i === em) return null;
            let s = new ey.NZ(
                i,
                ["function name(bytes32) view returns (string)"],
                this
              ),
              a = await s.name(t);
            if ((await this.resolveName(a)) !== e) return null;
            return a;
          } catch (e) {
            if (
              ((0, S.bJ)(e, "BAD_DATA") && "0x" === e.value) ||
              (0, S.bJ)(e, "CALL_EXCEPTION")
            )
              return null;
            throw e;
          }
        }
        async waitForTransaction(e, t, r) {
          let n = null != t ? t : 1;
          return 0 === n
            ? this.getTransactionReceipt(e)
            : new Promise(async (t, i) => {
                let s = null,
                  a = async (r) => {
                    try {
                      let i = await this.getTransactionReceipt(e);
                      if (null != i && r - i.blockNumber + 1 >= n) {
                        t(i), s && (clearTimeout(s), (s = null));
                        return;
                      }
                    } catch (e) {
                      console.log("EEE", e);
                    }
                    this.once("block", a);
                  };
                null != r &&
                  (s = setTimeout(() => {
                    null != s &&
                      ((s = null),
                      this.off("block", a),
                      i(
                        (0, S.xz)("timeout", "TIMEOUT", { reason: "timeout" })
                      ));
                  }, r)),
                  a(await this.getBlockNumber());
              });
        }
        async waitForBlock(e) {
          (0, S.vA)(!1, "not implemented yet", "NOT_IMPLEMENTED", {
            operation: "waitForBlock",
          });
        }
        _clearTimeout(e) {
          let t = this.#eJ.get(e);
          t && (t.timer && clearTimeout(t.timer), this.#eJ.delete(e));
        }
        _setTimeout(e, t) {
          null == t && (t = 0);
          let r = this.#eV++,
            n = () => {
              this.#eJ.delete(r), e();
            };
          if (this.paused) this.#eJ.set(r, { timer: null, func: n, time: t });
          else {
            let e = setTimeout(n, t);
            this.#eJ.set(r, { timer: e, func: n, time: nu() });
          }
          return r;
        }
        _forEachSubscriber(e) {
          for (let t of this.#eD.values()) e(t.subscriber);
        }
        _getSubscriber(e) {
          switch (e.type) {
            case "debug":
            case "error":
            case "network":
              return new na(e.type);
            case "block": {
              let e = new r5(this);
              return (e.pollingInterval = this.pollingInterval), e;
            }
            case "safe":
            case "finalized":
              return new r7(this, e.type);
            case "event":
              return new nr(this, e.filter);
            case "transaction":
              return new nt(this, e.hash);
            case "orphan":
              return new ne(this, e.filter);
          }
          throw Error(`unsupported event: ${e.type}`);
        }
        _recoverSubscriber(e, t) {
          for (let r of this.#eD.values())
            if (r.subscriber === e) {
              r.started && r.subscriber.stop(),
                (r.subscriber = t),
                r.started && t.start(),
                null != this.#ej && t.pause(this.#ej);
              break;
            }
        }
        async #e0(e, t) {
          let r = await nl(e, this);
          return (
            "event" === r.type &&
              t &&
              t.length > 0 &&
              !0 === t[0].removed &&
              (r = await nl({ orphan: "drop-log", log: t[0] }, this)),
            this.#eD.get(r.tag) || null
          );
        }
        async #e1(e) {
          let t = await nl(e, this),
            r = t.tag,
            n = this.#eD.get(r);
          if (!n) {
            let e = this._getSubscriber(t);
            (n = {
              subscriber: e,
              tag: r,
              addressableMap: new WeakMap(),
              nameMap: new Map(),
              started: !1,
              listeners: [],
            }),
              this.#eD.set(r, n);
          }
          return n;
        }
        async on(e, t) {
          let r = await this.#e1(e);
          return (
            r.listeners.push({ listener: t, once: !1 }),
            r.started ||
              (r.subscriber.start(),
              (r.started = !0),
              null != this.#ej && r.subscriber.pause(this.#ej)),
            this
          );
        }
        async once(e, t) {
          let r = await this.#e1(e);
          return (
            r.listeners.push({ listener: t, once: !0 }),
            r.started ||
              (r.subscriber.start(),
              (r.started = !0),
              null != this.#ej && r.subscriber.pause(this.#ej)),
            this
          );
        }
        async emit(e, ...t) {
          let r = await this.#e0(e, t);
          if (!r || 0 === r.listeners.length) return !1;
          let n = r.listeners.length;
          return (
            (r.listeners = r.listeners.filter(({ listener: r, once: n }) => {
              let i = new rN.z(this, n ? null : r, e);
              try {
                r.call(this, ...t, i);
              } catch (e) {}
              return !n;
            })),
            0 === r.listeners.length &&
              (r.started && r.subscriber.stop(), this.#eD.delete(r.tag)),
            n > 0
          );
        }
        async listenerCount(e) {
          if (e) {
            let t = await this.#e0(e);
            return t ? t.listeners.length : 0;
          }
          let t = 0;
          for (let { listeners: e } of this.#eD.values()) t += e.length;
          return t;
        }
        async listeners(e) {
          if (e) {
            let t = await this.#e0(e);
            return t ? t.listeners.map(({ listener: e }) => e) : [];
          }
          let t = [];
          for (let { listeners: e } of this.#eD.values())
            t = t.concat(e.map(({ listener: e }) => e));
          return t;
        }
        async off(e, t) {
          let r = await this.#e0(e);
          if (!r) return this;
          if (t) {
            let e = r.listeners.map(({ listener: e }) => e).indexOf(t);
            e >= 0 && r.listeners.splice(e, 1);
          }
          return (
            (t && 0 !== r.listeners.length) ||
              (r.started && r.subscriber.stop(), this.#eD.delete(r.tag)),
            this
          );
        }
        async removeAllListeners(e) {
          if (e) {
            let { tag: t, started: r, subscriber: n } = await this.#e1(e);
            r && n.stop(), this.#eD.delete(t);
          } else
            for (let [e, { started: t, subscriber: r }] of this.#eD)
              t && r.stop(), this.#eD.delete(e);
          return this;
        }
        async addListener(e, t) {
          return await this.on(e, t);
        }
        async removeListener(e, t) {
          return this.off(e, t);
        }
        get destroyed() {
          return this.#ez;
        }
        destroy() {
          for (let e of (this.removeAllListeners(), this.#eJ.keys()))
            this._clearTimeout(e);
          this.#ez = !0;
        }
        get paused() {
          return null != this.#ej;
        }
        set paused(e) {
          !!e !== this.paused && (this.paused ? this.resume() : this.pause(!1));
        }
        pause(e) {
          if (((this.#eH = -1), null != this.#ej)) {
            if (!!e == this.#ej) return;
            (0, S.vA)(
              !1,
              "cannot change pause type; resume first",
              "UNSUPPORTED_OPERATION",
              { operation: "pause" }
            );
          }
          for (let t of (this._forEachSubscriber((t) => t.pause(e)),
          (this.#ej = !!e),
          this.#eJ.values()))
            t.timer && clearTimeout(t.timer), (t.time = nu() - t.time);
        }
        resume() {
          if (null != this.#ej)
            for (let e of (this._forEachSubscriber((e) => e.resume()),
            (this.#ej = null),
            this.#eJ.values())) {
              let t = e.time;
              t < 0 && (t = 0), (e.time = nu()), setTimeout(e.func, t);
            }
        }
      }
      function nd(e, t) {
        if ("0x" === e) return null;
        try {
          let r = (0, M.WZ)((0, R.ZG)(e, t, t + 32)),
            n = (0, M.WZ)((0, R.ZG)(e, r, r + 32));
          return (0, R.ZG)(e, r + 32, r + 32 + n);
        } catch (e) {}
        return null;
      }
      function nh(e) {
        let t = (0, M.c4)(e);
        if (t.length > 32) throw Error("internal; should not happen");
        let r = new Uint8Array(32);
        return r.set(t, 32 - t.length), r;
      }
      let np = new Uint8Array([]),
        nb =
          "0x0000000000000000000000000000000000000000000000000000000000000000";
      function ng(e, t) {
        if (e.provider) return e.provider;
        (0, S.vA)(!1, "missing provider", "UNSUPPORTED_OPERATION", {
          operation: t,
        });
      }
      async function nm(e, t) {
        let r = (0, r6.VS)(t);
        if ((null != r.to && (r.to = (0, x.tG)(r.to, e)), null != r.from)) {
          let t = r.from;
          r.from = Promise.all([e.getAddress(), (0, x.tG)(t, e)]).then(
            ([e, t]) => (
              (0, S.MR)(
                e.toLowerCase() === t.toLowerCase(),
                "transaction from mismatch",
                "tx.from",
                t
              ),
              e
            )
          );
        } else r.from = e.getAddress();
        return await (0, P.k)(r);
      }
      class ny {
        provider;
        constructor(e) {
          (0, P.n)(this, { provider: e || null });
        }
        async getNonce(e) {
          return ng(this, "getTransactionCount").getTransactionCount(
            await this.getAddress(),
            e
          );
        }
        async populateCall(e) {
          return await nm(this, e);
        }
        async populateTransaction(e) {
          let t = ng(this, "populateTransaction"),
            r = await nm(this, e);
          null == r.nonce && (r.nonce = await this.getNonce("pending")),
            null == r.gasLimit && (r.gasLimit = await this.estimateGas(r));
          let n = await this.provider.getNetwork();
          if (null != r.chainId) {
            let t = (0, M.Ab)(r.chainId);
            (0, S.MR)(
              t === n.chainId,
              "transaction chainId mismatch",
              "tx.chainId",
              e.chainId
            );
          } else r.chainId = n.chainId;
          let i = null != r.maxFeePerGas || null != r.maxPriorityFeePerGas;
          if (
            (null != r.gasPrice && (2 === r.type || i)
              ? (0, S.MR)(
                  !1,
                  "eip-1559 transaction do not support gasPrice",
                  "tx",
                  e
                )
              : (0 === r.type || 1 === r.type) &&
                i &&
                (0, S.MR)(
                  !1,
                  "pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas",
                  "tx",
                  e
                ),
            (2 === r.type || null == r.type) &&
              null != r.maxFeePerGas &&
              null != r.maxPriorityFeePerGas)
          )
            r.type = 2;
          else if (0 === r.type || 1 === r.type) {
            let e = await t.getFeeData();
            (0, S.vA)(
              null != e.gasPrice,
              "network does not support gasPrice",
              "UNSUPPORTED_OPERATION",
              { operation: "getGasPrice" }
            ),
              null == r.gasPrice && (r.gasPrice = e.gasPrice);
          } else {
            let e = await t.getFeeData();
            if (null == r.type)
              if (null != e.maxFeePerGas && null != e.maxPriorityFeePerGas)
                if (
                  (r.authorizationList && r.authorizationList.length
                    ? (r.type = 4)
                    : (r.type = 2),
                  null != r.gasPrice)
                ) {
                  let e = r.gasPrice;
                  delete r.gasPrice,
                    (r.maxFeePerGas = e),
                    (r.maxPriorityFeePerGas = e);
                } else
                  null == r.maxFeePerGas && (r.maxFeePerGas = e.maxFeePerGas),
                    null == r.maxPriorityFeePerGas &&
                      (r.maxPriorityFeePerGas = e.maxPriorityFeePerGas);
              else
                null != e.gasPrice
                  ? ((0, S.vA)(
                      !i,
                      "network does not support EIP-1559",
                      "UNSUPPORTED_OPERATION",
                      { operation: "populateTransaction" }
                    ),
                    null == r.gasPrice && (r.gasPrice = e.gasPrice),
                    (r.type = 0))
                  : (0, S.vA)(
                      !1,
                      "failed to get consistent fee data",
                      "UNSUPPORTED_OPERATION",
                      { operation: "signer.getFeeData" }
                    );
            else
              (2 === r.type || 3 === r.type || 4 === r.type) &&
                (null == r.maxFeePerGas && (r.maxFeePerGas = e.maxFeePerGas),
                null == r.maxPriorityFeePerGas &&
                  (r.maxPriorityFeePerGas = e.maxPriorityFeePerGas));
          }
          return await (0, P.k)(r);
        }
        async populateAuthorization(e) {
          let t = Object.assign({}, e);
          return (
            null == t.chainId &&
              (t.chainId = (await ng(this, "getNetwork").getNetwork()).chainId),
            null == t.nonce && (t.nonce = await this.getNonce()),
            t
          );
        }
        async estimateGas(e) {
          return ng(this, "estimateGas").estimateGas(
            await this.populateCall(e)
          );
        }
        async call(e) {
          return ng(this, "call").call(await this.populateCall(e));
        }
        async resolveName(e) {
          let t = ng(this, "resolveName");
          return await t.resolveName(e);
        }
        async sendTransaction(e) {
          let t = ng(this, "sendTransaction"),
            r = await this.populateTransaction(e);
          delete r.from;
          let n = rk.from(r);
          return await t.broadcastTransaction(await this.signTransaction(n));
        }
        authorize(e) {
          (0, S.vA)(
            !1,
            "authorization not implemented for this signer",
            "UNSUPPORTED_OPERATION",
            { operation: "authorize" }
          );
        }
      }
      class nv {
        #ek;
        #e2;
        #eN;
        #eL;
        #e3;
        #e4;
        constructor(e) {
          (this.#ek = e),
            (this.#e2 = null),
            (this.#eN = this.#eT.bind(this)),
            (this.#eL = !1),
            (this.#e3 = null),
            (this.#e4 = !1);
        }
        _subscribe(e) {
          throw Error("subclasses must override this");
        }
        _emitResults(e, t) {
          throw Error("subclasses must override this");
        }
        _recover(e) {
          throw Error("subclasses must override this");
        }
        async #eT(e) {
          try {
            null == this.#e2 && (this.#e2 = this._subscribe(this.#ek));
            let e = null;
            try {
              e = await this.#e2;
            } catch (e) {
              if (
                !(0, S.bJ)(e, "UNSUPPORTED_OPERATION") ||
                "eth_newFilter" !== e.operation
              )
                throw e;
            }
            if (null == e) {
              (this.#e2 = null),
                this.#ek._recoverSubscriber(this, this._recover(this.#ek));
              return;
            }
            let t = await this.#ek.getNetwork();
            if ((this.#e3 || (this.#e3 = t), this.#e3.chainId !== t.chainId))
              throw Error("chaid changed");
            if (this.#e4) return;
            let r = await this.#ek.send("eth_getFilterChanges", [e]);
            await this._emitResults(this.#ek, r);
          } catch (e) {
            console.log("@TODO", e);
          }
          this.#ek.once("block", this.#eN);
        }
        #e6() {
          let e = this.#e2;
          e &&
            ((this.#e2 = null),
            e.then((e) => {
              this.#ek.destroyed || this.#ek.send("eth_uninstallFilter", [e]);
            }));
        }
        start() {
          this.#eL || ((this.#eL = !0), this.#eT(-2));
        }
        stop() {
          this.#eL &&
            ((this.#eL = !1),
            (this.#e4 = !0),
            this.#e6(),
            this.#ek.off("block", this.#eN));
        }
        pause(e) {
          e && this.#e6(), this.#ek.off("block", this.#eN);
        }
        resume() {
          this.start();
        }
      }
      class nw extends nv {
        #e8;
        constructor(e, t) {
          super(e), (this.#e8 = JSON.parse(JSON.stringify(t)));
        }
        _recover(e) {
          return new nr(e, this.#e8);
        }
        async _subscribe(e) {
          return await e.send("eth_newFilter", [this.#e8]);
        }
        async _emitResults(e, t) {
          for (let r of t) e.emit(this.#e8, e._wrapLog(r, e._network));
        }
      }
      class nA extends nv {
        async _subscribe(e) {
          return await e.send("eth_newPendingTransactionFilter", []);
        }
        async _emitResults(e, t) {
          for (let r of t) e.emit("pending", r);
        }
      }
      let nx = "bigint,boolean,function,number,string,symbol".split(/,/g);
      function nE(e) {
        if (
          null == e ||
          nx.indexOf(typeof e) >= 0 ||
          "function" == typeof e.getAddress
        )
          return e;
        if (Array.isArray(e)) return e.map(nE);
        if ("object" == typeof e)
          return Object.keys(e).reduce((t, r) => ((t[r] = e[r]), t), {});
        throw Error(`should not happen: ${e} (${typeof e})`);
      }
      function nR(e) {
        return e ? e.toLowerCase() : e;
      }
      function nM(e) {
        return e && "number" == typeof e.pollingInterval;
      }
      let nS = {
        polling: !1,
        staticNetwork: null,
        batchStallTime: 10,
        batchMaxSize: 1048576,
        batchMaxCount: 100,
        cacheTimeout: 250,
        pollingInterval: 4e3,
      };
      class nP extends ny {
        address;
        constructor(e, t) {
          super(e), (t = (0, A.b)(t)), (0, P.n)(this, { address: t });
        }
        connect(e) {
          (0, S.vA)(
            !1,
            "cannot reconnect JsonRpcSigner",
            "UNSUPPORTED_OPERATION",
            { operation: "signer.connect" }
          );
        }
        async getAddress() {
          return this.address;
        }
        async populateTransaction(e) {
          return await this.populateCall(e);
        }
        async sendUncheckedTransaction(e) {
          let t = nE(e),
            r = [];
          if (t.from) {
            let n = t.from;
            r.push(
              (async () => {
                let r = await (0, x.tG)(n, this.provider);
                (0, S.MR)(
                  null != r && r.toLowerCase() === this.address.toLowerCase(),
                  "from address mismatch",
                  "transaction",
                  e
                ),
                  (t.from = r);
              })()
            );
          } else t.from = this.address;
          if (
            (null == t.gasLimit &&
              r.push(
                (async () => {
                  t.gasLimit = await this.provider.estimateGas({
                    ...t,
                    from: this.address,
                  });
                })()
              ),
            null != t.to)
          ) {
            let e = t.to;
            r.push(
              (async () => {
                t.to = await (0, x.tG)(e, this.provider);
              })()
            );
          }
          r.length && (await Promise.all(r));
          let n = this.provider.getRpcTransaction(t);
          return this.provider.send("eth_sendTransaction", [n]);
        }
        async sendTransaction(e) {
          let t = await this.provider.getBlockNumber(),
            r = await this.sendUncheckedTransaction(e);
          return await new Promise((e, n) => {
            let i = [1e3, 100],
              s = 0,
              a = async () => {
                try {
                  let n = await this.provider.getTransaction(r);
                  if (null != n) return void e(n.replaceableTransaction(t));
                } catch (e) {
                  if (
                    (0, S.bJ)(e, "CANCELLED") ||
                    (0, S.bJ)(e, "BAD_DATA") ||
                    (0, S.bJ)(e, "NETWORK_ERROR") ||
                    (0, S.bJ)(e, "UNSUPPORTED_OPERATION")
                  ) {
                    null == e.info && (e.info = {}),
                      (e.info.sendTransactionHash = r),
                      n(e);
                    return;
                  }
                  if (
                    (0, S.bJ)(e, "INVALID_ARGUMENT") &&
                    (s++,
                    null == e.info && (e.info = {}),
                    (e.info.sendTransactionHash = r),
                    s > 10)
                  )
                    return void n(e);
                  this.provider.emit(
                    "error",
                    (0, S.xz)(
                      "failed to fetch transation after sending (will try again)",
                      "UNKNOWN_ERROR",
                      { error: e }
                    )
                  );
                }
                this.provider._setTimeout(() => {
                  a();
                }, i.pop() || 4e3);
              };
            a();
          });
        }
        async signTransaction(e) {
          let t = nE(e);
          if (t.from) {
            let r = await (0, x.tG)(t.from, this.provider);
            (0, S.MR)(
              null != r && r.toLowerCase() === this.address.toLowerCase(),
              "from address mismatch",
              "transaction",
              e
            ),
              (t.from = r);
          } else t.from = this.address;
          let r = this.provider.getRpcTransaction(t);
          return await this.provider.send("eth_signTransaction", [r]);
        }
        async signMessage(e) {
          let t = "string" == typeof e ? (0, er.YW)(e) : e;
          return await this.provider.send("personal_sign", [
            (0, R.c$)(t),
            this.address.toLowerCase(),
          ]);
        }
        async signTypedData(e, t, r) {
          let n = nE(r),
            i = await q.resolveNames(e, t, n, async (e) => {
              let t = await (0, x.tG)(e);
              return (
                (0, S.MR)(
                  null != t,
                  "TypedData does not support null address",
                  "value",
                  e
                ),
                t
              );
            });
          return await this.provider.send("eth_signTypedData_v4", [
            this.address.toLowerCase(),
            JSON.stringify(q.getPayload(i.domain, t, i.value)),
          ]);
        }
        async unlock(e) {
          return this.provider.send("personal_unlockAccount", [
            this.address.toLowerCase(),
            e,
            null,
          ]);
        }
        async _legacySignMessage(e) {
          let t = "string" == typeof e ? (0, er.YW)(e) : e;
          return await this.provider.send("eth_sign", [
            this.address.toLowerCase(),
            (0, R.c$)(t),
          ]);
        }
      }
      class nO extends nc {
        #O;
        #e5;
        #e9;
        #e7;
        #te;
        #e3;
        #tt;
        #tr() {
          if (this.#e7) return;
          let e =
            1 === this._getOption("batchMaxCount")
              ? 0
              : this._getOption("batchStallTime");
          this.#e7 = setTimeout(() => {
            this.#e7 = null;
            let e = this.#e9;
            for (this.#e9 = []; e.length; ) {
              let t = [e.shift()];
              for (; e.length && t.length !== this.#O.batchMaxCount; )
                if (
                  (t.push(e.shift()),
                  JSON.stringify(t.map((e) => e.payload)).length >
                    this.#O.batchMaxSize)
                ) {
                  e.unshift(t.pop());
                  break;
                }
              (async () => {
                let e = 1 === t.length ? t[0].payload : t.map((e) => e.payload);
                this.emit("debug", { action: "sendRpcPayload", payload: e });
                try {
                  let r = await this._send(e);
                  for (let { resolve: e, reject: n, payload: i } of (this.emit(
                    "debug",
                    { action: "receiveRpcResult", result: r }
                  ),
                  t)) {
                    if (this.destroyed) {
                      n(
                        (0, S.xz)(
                          "provider destroyed; cancelled request",
                          "UNSUPPORTED_OPERATION",
                          { operation: i.method }
                        )
                      );
                      continue;
                    }
                    let t = r.filter((e) => e.id === i.id)[0];
                    if (null == t) {
                      let e = (0, S.xz)(
                        "missing response for request",
                        "BAD_DATA",
                        { value: r, info: { payload: i } }
                      );
                      this.emit("error", e), n(e);
                      continue;
                    }
                    if ("error" in t) {
                      n(this.getRpcError(i, t));
                      continue;
                    }
                    e(t.result);
                  }
                } catch (e) {
                  for (let { reject: r } of (this.emit("debug", {
                    action: "receiveRpcError",
                    error: e,
                  }),
                  t))
                    r(e);
                }
              })();
            }
          }, e);
        }
        constructor(e, t) {
          super(e, t),
            (this.#e5 = 1),
            (this.#O = Object.assign({}, nS, t || {})),
            (this.#e9 = []),
            (this.#e7 = null),
            (this.#e3 = null),
            (this.#tt = null);
          {
            let e = null,
              t = new Promise((t) => {
                e = t;
              });
            this.#te = { promise: t, resolve: e };
          }
          let r = this._getOption("staticNetwork");
          "boolean" == typeof r
            ? ((0, S.MR)(
                !r || "any" !== e,
                "staticNetwork cannot be used on special network 'any'",
                "options",
                t
              ),
              r && null != e && (this.#e3 = r1.from(e)))
            : r &&
              ((0, S.MR)(
                null == e || r.matches(e),
                "staticNetwork MUST match network object",
                "options",
                t
              ),
              (this.#e3 = r));
        }
        _getOption(e) {
          return this.#O[e];
        }
        get _network() {
          return (
            (0, S.vA)(
              this.#e3,
              "network is not available yet",
              "NETWORK_ERROR"
            ),
            this.#e3
          );
        }
        async _perform(e) {
          if ("call" === e.method || "estimateGas" === e.method) {
            let t = e.transaction;
            if (
              t &&
              null != t.type &&
              (0, M.Ab)(t.type) &&
              null == t.maxFeePerGas &&
              null == t.maxPriorityFeePerGas
            ) {
              let r = await this.getFeeData();
              null == r.maxFeePerGas &&
                null == r.maxPriorityFeePerGas &&
                (e = Object.assign({}, e, {
                  transaction: Object.assign({}, t, { type: void 0 }),
                }));
            }
          }
          let t = this.getRpcRequest(e);
          return null != t
            ? await this.send(t.method, t.args)
            : super._perform(e);
        }
        async _detectNetwork() {
          let e = this._getOption("staticNetwork");
          if (e) {
            if (!0 !== e) return e;
            else if (this.#e3) return this.#e3;
          }
          return (
            this.#tt ||
              (this.ready
                ? (this.#tt = (async () => {
                    try {
                      let e = r1.from(
                        (0, M.Ab)(await this.send("eth_chainId", []))
                      );
                      return (this.#tt = null), e;
                    } catch (e) {
                      throw ((this.#tt = null), e);
                    }
                  })())
                : (this.#tt = (async () => {
                    let e,
                      t = {
                        id: this.#e5++,
                        method: "eth_chainId",
                        params: [],
                        jsonrpc: "2.0",
                      };
                    this.emit("debug", {
                      action: "sendRpcPayload",
                      payload: t,
                    });
                    try {
                      (e = (await this._send(t))[0]), (this.#tt = null);
                    } catch (e) {
                      throw (
                        ((this.#tt = null),
                        this.emit("debug", {
                          action: "receiveRpcError",
                          error: e,
                        }),
                        e)
                      );
                    }
                    if (
                      (this.emit("debug", {
                        action: "receiveRpcResult",
                        result: e,
                      }),
                      "result" in e)
                    )
                      return r1.from((0, M.Ab)(e.result));
                    throw this.getRpcError(t, e);
                  })())),
            await this.#tt
          );
        }
        _start() {
          null != this.#te &&
            null != this.#te.resolve &&
            (this.#te.resolve(),
            (this.#te = null),
            (async () => {
              for (; null == this.#e3 && !this.destroyed; )
                try {
                  this.#e3 = await this._detectNetwork();
                } catch (e) {
                  if (this.destroyed) break;
                  console.log(
                    "JsonRpcProvider failed to detect network and cannot start up; retry in 1s (perhaps the URL is wrong or the node is not started)"
                  ),
                    this.emit(
                      "error",
                      (0, S.xz)(
                        "failed to bootstrap network detection",
                        "NETWORK_ERROR",
                        {
                          event: "initial-network-discovery",
                          info: { error: e },
                        }
                      )
                    ),
                    await new Promise((e) => {
                      setTimeout(e, 1e3);
                    });
                }
              this.#tr();
            })());
        }
        async _waitUntilReady() {
          if (null != this.#te) return await this.#te.promise;
        }
        _getSubscriber(e) {
          return "pending" === e.type
            ? new nA(this)
            : "event" === e.type
            ? this._getOption("polling")
              ? new nr(this, e.filter)
              : new nw(this, e.filter)
            : "orphan" === e.type && "drop-log" === e.filter.orphan
            ? new na("orphan")
            : super._getSubscriber(e);
        }
        get ready() {
          return null == this.#te;
        }
        getRpcTransaction(e) {
          let t = {};
          return (
            [
              "chainId",
              "gasLimit",
              "gasPrice",
              "type",
              "maxFeePerGas",
              "maxPriorityFeePerGas",
              "nonce",
              "value",
            ].forEach((r) => {
              if (null == e[r]) return;
              let n = r;
              "gasLimit" === r && (n = "gas"),
                (t[n] = (0, M.nD)((0, M.Ab)(e[r], `tx.${r}`)));
            }),
            ["from", "to", "data"].forEach((r) => {
              null != e[r] && (t[r] = (0, R.c$)(e[r]));
            }),
            e.accessList && (t.accessList = (0, Q.$)(e.accessList)),
            e.blobVersionedHashes &&
              (t.blobVersionedHashes = e.blobVersionedHashes.map((e) =>
                e.toLowerCase()
              )),
            e.authorizationList &&
              (t.authorizationList = e.authorizationList.map((e) => {
                let t = et(e);
                return {
                  address: t.address,
                  nonce: (0, M.nD)(t.nonce),
                  chainId: (0, M.nD)(t.chainId),
                  yParity: (0, M.nD)(t.signature.yParity),
                  r: t.signature.r,
                  s: t.signature.s,
                };
              })),
            t
          );
        }
        getRpcRequest(e) {
          switch (e.method) {
            case "chainId":
              return { method: "eth_chainId", args: [] };
            case "getBlockNumber":
              return { method: "eth_blockNumber", args: [] };
            case "getGasPrice":
              return { method: "eth_gasPrice", args: [] };
            case "getPriorityFee":
              return { method: "eth_maxPriorityFeePerGas", args: [] };
            case "getBalance":
              return {
                method: "eth_getBalance",
                args: [nR(e.address), e.blockTag],
              };
            case "getTransactionCount":
              return {
                method: "eth_getTransactionCount",
                args: [nR(e.address), e.blockTag],
              };
            case "getCode":
              return {
                method: "eth_getCode",
                args: [nR(e.address), e.blockTag],
              };
            case "getStorage":
              return {
                method: "eth_getStorageAt",
                args: [
                  nR(e.address),
                  "0x" + e.position.toString(16),
                  e.blockTag,
                ],
              };
            case "broadcastTransaction":
              return {
                method: "eth_sendRawTransaction",
                args: [e.signedTransaction],
              };
            case "getBlock":
              if ("blockTag" in e)
                return {
                  method: "eth_getBlockByNumber",
                  args: [e.blockTag, !!e.includeTransactions],
                };
              if ("blockHash" in e)
                return {
                  method: "eth_getBlockByHash",
                  args: [e.blockHash, !!e.includeTransactions],
                };
              break;
            case "getTransaction":
              return { method: "eth_getTransactionByHash", args: [e.hash] };
            case "getTransactionReceipt":
              return { method: "eth_getTransactionReceipt", args: [e.hash] };
            case "call":
              return {
                method: "eth_call",
                args: [this.getRpcTransaction(e.transaction), e.blockTag],
              };
            case "estimateGas":
              return {
                method: "eth_estimateGas",
                args: [this.getRpcTransaction(e.transaction)],
              };
            case "getLogs":
              return (
                e.filter &&
                  null != e.filter.address &&
                  (Array.isArray(e.filter.address)
                    ? (e.filter.address = e.filter.address.map(nR))
                    : (e.filter.address = nR(e.filter.address))),
                { method: "eth_getLogs", args: [e.filter] }
              );
          }
          return null;
        }
        getRpcError(e, t) {
          let { method: r } = e,
            { error: n } = t;
          if ("eth_estimateGas" === r && n.message) {
            let t = n.message;
            if (!t.match(/revert/i) && t.match(/insufficient funds/i))
              return (0, S.xz)("insufficient funds", "INSUFFICIENT_FUNDS", {
                transaction: e.params[0],
                info: { payload: e, error: n },
              });
            if (t.match(/nonce/i) && t.match(/too low/i))
              return (0, S.xz)("nonce has already been used", "NONCE_EXPIRED", {
                transaction: e.params[0],
                info: { payload: e, error: n },
              });
          }
          if ("eth_call" === r || "eth_estimateGas" === r) {
            let t = (function e(t) {
                if (null == t) return null;
                if (
                  "string" == typeof t.message &&
                  t.message.match(/revert/i) &&
                  (0, R.Lo)(t.data)
                )
                  return { message: t.message, data: t.data };
                if ("object" == typeof t) {
                  for (let r in t) {
                    let n = e(t[r]);
                    if (n) return n;
                  }
                  return null;
                }
                if ("string" == typeof t)
                  try {
                    return e(JSON.parse(t));
                  } catch (e) {}
                return null;
              })(n),
              i = w.y.getBuiltinCallException(
                "eth_call" === r ? "call" : "estimateGas",
                e.params[0],
                t ? t.data : null
              );
            return (i.info = { error: n, payload: e }), i;
          }
          let i = JSON.stringify(
            (function (e) {
              let t = [];
              return (
                !(function e(t, r) {
                  if (null != t) {
                    if (
                      ("string" == typeof t.message && r.push(t.message),
                      "object" == typeof t)
                    )
                      for (let n in t) e(t[n], r);
                    if ("string" == typeof t)
                      try {
                        return e(JSON.parse(t), r);
                      } catch (e) {}
                  }
                })(e, t),
                t
              );
            })(n)
          );
          if (
            "string" == typeof n.message &&
            n.message.match(/user denied|ethers-user-denied/i)
          )
            return (0, S.xz)("user rejected action", "ACTION_REJECTED", {
              action:
                {
                  eth_sign: "signMessage",
                  personal_sign: "signMessage",
                  eth_signTypedData_v4: "signTypedData",
                  eth_signTransaction: "signTransaction",
                  eth_sendTransaction: "sendTransaction",
                  eth_requestAccounts: "requestAccess",
                  wallet_requestAccounts: "requestAccess",
                }[r] || "unknown",
              reason: "rejected",
              info: { payload: e, error: n },
            });
          if ("eth_sendRawTransaction" === r || "eth_sendTransaction" === r) {
            let t = e.params[0];
            if (i.match(/insufficient funds|base fee exceeds gas limit/i))
              return (0, S.xz)(
                "insufficient funds for intrinsic transaction cost",
                "INSUFFICIENT_FUNDS",
                { transaction: t, info: { error: n } }
              );
            if (i.match(/nonce/i) && i.match(/too low/i))
              return (0, S.xz)("nonce has already been used", "NONCE_EXPIRED", {
                transaction: t,
                info: { error: n },
              });
            if (i.match(/replacement transaction/i) && i.match(/underpriced/i))
              return (0, S.xz)(
                "replacement fee too low",
                "REPLACEMENT_UNDERPRICED",
                { transaction: t, info: { error: n } }
              );
            if (i.match(/only replay-protected/i))
              return (0, S.xz)(
                "legacy pre-eip-155 transactions not supported",
                "UNSUPPORTED_OPERATION",
                { operation: r, info: { transaction: t, info: { error: n } } }
              );
          }
          let s = !!i.match(/the method .* does not exist/i);
          return (!s &&
            n &&
            n.details &&
            n.details.startsWith("Unauthorized method:") &&
            (s = !0),
          s)
            ? (0, S.xz)("unsupported operation", "UNSUPPORTED_OPERATION", {
                operation: e.method,
                info: { error: n, payload: e },
              })
            : (0, S.xz)("could not coalesce error", "UNKNOWN_ERROR", {
                error: n,
                payload: e,
              });
        }
        send(e, t) {
          if (this.destroyed)
            return Promise.reject(
              (0, S.xz)(
                "provider destroyed; cancelled request",
                "UNSUPPORTED_OPERATION",
                { operation: e }
              )
            );
          let r = this.#e5++,
            n = new Promise((n, i) => {
              this.#e9.push({
                resolve: n,
                reject: i,
                payload: { method: e, params: t, id: r, jsonrpc: "2.0" },
              });
            });
          return this.#tr(), n;
        }
        async getSigner(e) {
          null == e && (e = 0);
          let t = this.send("eth_accounts", []);
          if ("number" == typeof e) {
            let r = await t;
            if (e >= r.length) throw Error("no such account");
            return new nP(this, r[e]);
          }
          let { accounts: r } = await (0, P.k)({
            network: this.getNetwork(),
            accounts: t,
          });
          for (let t of ((e = (0, A.b)(e)), r))
            if ((0, A.b)(t) === e) return new nP(this, e);
          throw Error("invalid account");
        }
        async listAccounts() {
          return (await this.send("eth_accounts", [])).map(
            (e) => new nP(this, e)
          );
        }
        destroy() {
          for (let { payload: e, reject: t } of (this.#e7 &&
            (clearTimeout(this.#e7), (this.#e7 = null)),
          this.#e9))
            t(
              (0, S.xz)(
                "provider destroyed; cancelled request",
                "UNSUPPORTED_OPERATION",
                { operation: e.method }
              )
            );
          (this.#e9 = []), super.destroy();
        }
      }
      class nI extends nO {
        #tn;
        constructor(e, t) {
          super(e, t);
          let r = this._getOption("pollingInterval");
          null == r && (r = nS.pollingInterval), (this.#tn = r);
        }
        _getSubscriber(e) {
          let t = super._getSubscriber(e);
          return nM(t) && (t.pollingInterval = this.#tn), t;
        }
        get pollingInterval() {
          return this.#tn;
        }
        set pollingInterval(e) {
          if (!Number.isInteger(e) || e < 0) throw Error("invalid interval");
          (this.#tn = e),
            this._forEachSubscriber((e) => {
              nM(e) && (e.pollingInterval = this.#tn);
            });
        }
      }
      class nk extends nI {
        #ti;
        constructor(e, t, r) {
          null == e && (e = "http://localhost:8545"),
            super(t, r),
            "string" == typeof e
              ? (this.#ti = new ep(e))
              : (this.#ti = e.clone());
        }
        _getConnection() {
          return this.#ti.clone();
        }
        async send(e, t) {
          return await this._start(), await super.send(e, t);
        }
        async _send(e) {
          let t = this._getConnection();
          (t.body = JSON.stringify(e)),
            t.setHeader("content-type", "application/json");
          let r = await t.send();
          r.assertOk();
          let n = r.bodyJson;
          return Array.isArray(n) || (n = [n]), n;
        }
      }
    },
    55028: (e, t, r) => {
      "use strict";
      r.d(t, { default: () => i.a });
      var n = r(36645),
        i = r.n(n);
    },
    57946: (e, t, r) => {
      "use strict";
      var n = r(72667),
        i = r(23124),
        s = r(97486);
      (t.assert = i),
        (t.toArray = s.toArray),
        (t.zero2 = s.zero2),
        (t.toHex = s.toHex),
        (t.encode = s.encode),
        (t.getNAF = function (e, t, r) {
          var n = Array(Math.max(e.bitLength(), r) + 1);
          for (a = 0; a < n.length; a += 1) n[a] = 0;
          var i = 1 << (t + 1),
            s = e.clone();
          for (a = 0; a < n.length; a++) {
            var a,
              o,
              l = s.andln(i - 1);
            s.isOdd()
              ? ((o = l > (i >> 1) - 1 ? (i >> 1) - l : l), s.isubn(o))
              : (o = 0),
              (n[a] = o),
              s.iushrn(1);
          }
          return n;
        }),
        (t.getJSF = function (e, t) {
          var r = [[], []];
          (e = e.clone()), (t = t.clone());
          for (var n = 0, i = 0; e.cmpn(-n) > 0 || t.cmpn(-i) > 0; ) {
            var s,
              a,
              o,
              l = (e.andln(3) + n) & 3,
              u = (t.andln(3) + i) & 3;
            3 === l && (l = -1),
              3 === u && (u = -1),
              (a =
                (1 & l) == 0
                  ? 0
                  : (3 == (s = (e.andln(7) + n) & 7) || 5 === s) && 2 === u
                  ? -l
                  : l),
              r[0].push(a),
              (o =
                (1 & u) == 0
                  ? 0
                  : (3 == (s = (t.andln(7) + i) & 7) || 5 === s) && 2 === l
                  ? -u
                  : u),
              r[1].push(o),
              2 * n === a + 1 && (n = 1 - n),
              2 * i === o + 1 && (i = 1 - i),
              e.iushrn(1),
              t.iushrn(1);
          }
          return r;
        }),
        (t.cachedProperty = function (e, t, r) {
          var n = "_" + t;
          e.prototype[t] = function () {
            return void 0 !== this[n] ? this[n] : (this[n] = r.call(this));
          };
        }),
        (t.parseBytes = function (e) {
          return "string" == typeof e ? t.toArray(e, "hex") : e;
        }),
        (t.intFromLE = function (e) {
          return new n(e, "hex", "le");
        });
    },
    59211: (e, t, r) => {
      "use strict";
      var n = r(72667),
        i = r(84115),
        s = r(88628),
        a = r(57946);
      function o(e) {
        s.call(this, "mont", e),
          (this.a = new n(e.a, 16).toRed(this.red)),
          (this.b = new n(e.b, 16).toRed(this.red)),
          (this.i4 = new n(4).toRed(this.red).redInvm()),
          (this.two = new n(2).toRed(this.red)),
          (this.a24 = this.i4.redMul(this.a.redAdd(this.two)));
      }
      function l(e, t, r) {
        s.BasePoint.call(this, e, "projective"),
          null === t && null === r
            ? ((this.x = this.curve.one), (this.z = this.curve.zero))
            : ((this.x = new n(t, 16)),
              (this.z = new n(r, 16)),
              this.x.red || (this.x = this.x.toRed(this.curve.red)),
              this.z.red || (this.z = this.z.toRed(this.curve.red)));
      }
      i(o, s),
        (e.exports = o),
        (o.prototype.validate = function (e) {
          var t = e.normalize().x,
            r = t.redSqr(),
            n = r.redMul(t).redAdd(r.redMul(this.a)).redAdd(t);
          return 0 === n.redSqrt().redSqr().cmp(n);
        }),
        i(l, s.BasePoint),
        (o.prototype.decodePoint = function (e, t) {
          return this.point(a.toArray(e, t), 1);
        }),
        (o.prototype.point = function (e, t) {
          return new l(this, e, t);
        }),
        (o.prototype.pointFromJSON = function (e) {
          return l.fromJSON(this, e);
        }),
        (l.prototype.precompute = function () {}),
        (l.prototype._encode = function () {
          return this.getX().toArray("be", this.curve.p.byteLength());
        }),
        (l.fromJSON = function (e, t) {
          return new l(e, t[0], t[1] || e.one);
        }),
        (l.prototype.inspect = function () {
          return this.isInfinity()
            ? "<EC Point Infinity>"
            : "<EC Point x: " +
                this.x.fromRed().toString(16, 2) +
                " z: " +
                this.z.fromRed().toString(16, 2) +
                ">";
        }),
        (l.prototype.isInfinity = function () {
          return 0 === this.z.cmpn(0);
        }),
        (l.prototype.dbl = function () {
          var e = this.x.redAdd(this.z).redSqr(),
            t = this.x.redSub(this.z).redSqr(),
            r = e.redSub(t),
            n = e.redMul(t),
            i = r.redMul(t.redAdd(this.curve.a24.redMul(r)));
          return this.curve.point(n, i);
        }),
        (l.prototype.add = function () {
          throw Error("Not supported on Montgomery curve");
        }),
        (l.prototype.diffAdd = function (e, t) {
          var r = this.x.redAdd(this.z),
            n = this.x.redSub(this.z),
            i = e.x.redAdd(e.z),
            s = e.x.redSub(e.z).redMul(r),
            a = i.redMul(n),
            o = t.z.redMul(s.redAdd(a).redSqr()),
            l = t.x.redMul(s.redISub(a).redSqr());
          return this.curve.point(o, l);
        }),
        (l.prototype.mul = function (e) {
          for (
            var t = e.clone(),
              r = this,
              n = this.curve.point(null, null),
              i = [];
            0 !== t.cmpn(0);
            t.iushrn(1)
          )
            i.push(t.andln(1));
          for (var s = i.length - 1; s >= 0; s--)
            0 === i[s]
              ? ((r = r.diffAdd(n, this)), (n = n.dbl()))
              : ((n = r.diffAdd(n, this)), (r = r.dbl()));
          return n;
        }),
        (l.prototype.mulAdd = function () {
          throw Error("Not supported on Montgomery curve");
        }),
        (l.prototype.jumlAdd = function () {
          throw Error("Not supported on Montgomery curve");
        }),
        (l.prototype.eq = function (e) {
          return 0 === this.getX().cmp(e.getX());
        }),
        (l.prototype.normalize = function () {
          return (
            (this.x = this.x.redMul(this.z.redInvm())),
            (this.z = this.curve.one),
            this
          );
        }),
        (l.prototype.getX = function () {
          return this.normalize(), this.x.fromRed();
        });
    },
    62037: (e, t, r) => {
      "use strict";
      r.d(t, { b: () => c });
      var n = r(16284),
        i = r(44532),
        s = r(29592);
      let a = BigInt(0),
        o = BigInt(36);
      function l(e) {
        let t = (e = e.toLowerCase()).substring(2).split(""),
          r = new Uint8Array(40);
        for (let e = 0; e < 40; e++) r[e] = t[e].charCodeAt(0);
        let s = (0, i.q5)((0, n.S)(r));
        for (let e = 0; e < 40; e += 2)
          s[e >> 1] >> 4 >= 8 && (t[e] = t[e].toUpperCase()),
            (15 & s[e >> 1]) >= 8 && (t[e + 1] = t[e + 1].toUpperCase());
        return "0x" + t.join("");
      }
      let u = {};
      for (let e = 0; e < 10; e++) u[String(e)] = String(e);
      for (let e = 0; e < 26; e++)
        u[String.fromCharCode(65 + e)] = String(10 + e);
      let f = (function () {
        let e = {};
        for (let t = 0; t < 36; t++)
          e["0123456789abcdefghijklmnopqrstuvwxyz"[t]] = BigInt(t);
        return e;
      })();
      function c(e) {
        if (
          ((0, s.MR)("string" == typeof e, "invalid address", "address", e),
          e.match(/^(0x)?[0-9a-fA-F]{40}$/))
        ) {
          e.startsWith("0x") || (e = "0x" + e);
          let t = l(e);
          return (
            (0, s.MR)(
              !e.match(/([A-F].*[a-f])|([a-f].*[A-F])/) || t === e,
              "bad address checksum",
              "address",
              e
            ),
            t
          );
        }
        if (e.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
          (0, s.MR)(
            e.substring(2, 4) ===
              (function (e) {
                let t = (e =
                  (e = e.toUpperCase()).substring(4) + e.substring(0, 2) + "00")
                  .split("")
                  .map((e) => u[e])
                  .join("");
                for (; t.length >= 15; ) {
                  let e = t.substring(0, 15);
                  t = (parseInt(e, 10) % 97) + t.substring(e.length);
                }
                let r = String(98 - (parseInt(t, 10) % 97));
                for (; r.length < 2; ) r = "0" + r;
                return r;
              })(e),
            "bad icap checksum",
            "address",
            e
          );
          let t = (function (e) {
            e = e.toLowerCase();
            let t = a;
            for (let r = 0; r < e.length; r++) t = t * o + f[e[r]];
            return t;
          })(e.substring(4)).toString(16);
          for (; t.length < 40; ) t = "0" + t;
          return l("0x" + t);
        }
        (0, s.MR)(!1, "invalid address", "address", e);
      }
    },
    62146: (e, t, r) => {
      "use strict";
      function n(e) {
        let { reason: t, children: r } = e;
        return r;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "BailoutToCSR", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        r(45262);
    },
    62741: (e, t, r) => {
      "use strict";
      r.d(t, { Js: () => y, XS: () => v });
      var n = r(29592),
        i = r(44532),
        s = r(91339),
        a = r(50797);
      let o = BigInt(-1),
        l = BigInt(0),
        u = BigInt(1),
        f = BigInt(5),
        c = {},
        d = "0000";
      for (; d.length < 80; ) d += d;
      function h(e) {
        let t = d;
        for (; t.length < e; ) t += t;
        return BigInt("1" + t.substring(0, e));
      }
      function p(e, t, r) {
        let i = BigInt(t.width);
        if (t.signed) {
          let t = u << (i - u);
          (0, n.vA)(
            null == r || (e >= -t && e < t),
            "overflow",
            "NUMERIC_FAULT",
            { operation: r, fault: "overflow", value: e }
          ),
            (e =
              e > l
                ? (0, s.ST)((0, s.dK)(e, i), i)
                : -(0, s.ST)((0, s.dK)(-e, i), i));
        } else {
          let t = u << i;
          (0, n.vA)(
            null == r || (e >= 0 && e < t),
            "overflow",
            "NUMERIC_FAULT",
            { operation: r, fault: "overflow", value: e }
          ),
            (e = ((e % t) + t) % t & (t - u));
        }
        return e;
      }
      function b(e) {
        "number" == typeof e && (e = `fixed128x${e}`);
        let t = !0,
          r = 128,
          i = 18;
        if ("string" == typeof e)
          if ("fixed" === e);
          else if ("ufixed" === e) t = !1;
          else {
            let s = e.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
            (0, n.MR)(s, "invalid fixed format", "format", e),
              (t = "u" !== s[1]),
              (r = parseInt(s[2])),
              (i = parseInt(s[3]));
          }
        else if (e) {
          let s = e,
            a = (e, t, r) =>
              null == s[e]
                ? r
                : ((0, n.MR)(
                    typeof s[e] === t,
                    "invalid fixed format (" + e + " not " + t + ")",
                    "format." + e,
                    s[e]
                  ),
                  s[e]);
          (t = a("signed", "boolean", t)),
            (r = a("width", "number", r)),
            (i = a("decimals", "number", i));
        }
        (0, n.MR)(
          r % 8 == 0,
          "invalid FixedNumber width (not byte aligned)",
          "format.width",
          r
        ),
          (0, n.MR)(
            i <= 80,
            "invalid FixedNumber decimals (too large)",
            "format.decimals",
            i
          );
        let s = (t ? "" : "u") + "fixed" + String(r) + "x" + String(i);
        return { signed: t, width: r, decimals: i, name: s };
      }
      class g {
        format;
        #ts;
        #ta;
        #to;
        _value;
        constructor(e, t, r) {
          (0, n.gk)(e, c, "FixedNumber"), (this.#ta = t), (this.#ts = r);
          let i = (function (e, t) {
            let r = "";
            e < l && ((r = "-"), (e *= o));
            let n = e.toString();
            if (0 === t) return r + n;
            for (; n.length <= t; ) n = d + n;
            let i = n.length - t;
            for (
              n = n.substring(0, i) + "." + n.substring(i);
              "0" === n[0] && "." !== n[1];

            )
              n = n.substring(1);
            for (; "0" === n[n.length - 1] && "." !== n[n.length - 2]; )
              n = n.substring(0, n.length - 1);
            return r + n;
          })(t, r.decimals);
          (0, a.n)(this, { format: r.name, _value: i }),
            (this.#to = h(r.decimals));
        }
        get signed() {
          return this.#ts.signed;
        }
        get width() {
          return this.#ts.width;
        }
        get decimals() {
          return this.#ts.decimals;
        }
        get value() {
          return this.#ta;
        }
        #tl(e) {
          (0, n.MR)(
            this.format === e.format,
            "incompatible format; use fixedNumber.toFormat",
            "other",
            e
          );
        }
        #tu(e, t) {
          return new g(c, (e = p(e, this.#ts, t)), this.#ts);
        }
        #tf(e, t) {
          return this.#tl(e), this.#tu(this.#ta + e.#ta, t);
        }
        addUnsafe(e) {
          return this.#tf(e);
        }
        add(e) {
          return this.#tf(e, "add");
        }
        #tc(e, t) {
          return this.#tl(e), this.#tu(this.#ta - e.#ta, t);
        }
        subUnsafe(e) {
          return this.#tc(e);
        }
        sub(e) {
          return this.#tc(e, "sub");
        }
        #td(e, t) {
          return this.#tl(e), this.#tu((this.#ta * e.#ta) / this.#to, t);
        }
        mulUnsafe(e) {
          return this.#td(e);
        }
        mul(e) {
          return this.#td(e, "mul");
        }
        mulSignal(e) {
          this.#tl(e);
          let t = this.#ta * e.#ta;
          return (
            (0, n.vA)(
              t % this.#to === l,
              "precision lost during signalling mul",
              "NUMERIC_FAULT",
              { operation: "mulSignal", fault: "underflow", value: this }
            ),
            this.#tu(t / this.#to, "mulSignal")
          );
        }
        #th(e, t) {
          return (
            (0, n.vA)(e.#ta !== l, "division by zero", "NUMERIC_FAULT", {
              operation: "div",
              fault: "divide-by-zero",
              value: this,
            }),
            this.#tl(e),
            this.#tu((this.#ta * this.#to) / e.#ta, t)
          );
        }
        divUnsafe(e) {
          return this.#th(e);
        }
        div(e) {
          return this.#th(e, "div");
        }
        divSignal(e) {
          (0, n.vA)(e.#ta !== l, "division by zero", "NUMERIC_FAULT", {
            operation: "div",
            fault: "divide-by-zero",
            value: this,
          }),
            this.#tl(e);
          let t = this.#ta * this.#to;
          return (
            (0, n.vA)(
              t % e.#ta === l,
              "precision lost during signalling div",
              "NUMERIC_FAULT",
              { operation: "divSignal", fault: "underflow", value: this }
            ),
            this.#tu(t / e.#ta, "divSignal")
          );
        }
        cmp(e) {
          let t = this.value,
            r = e.value,
            n = this.decimals - e.decimals;
          return (n > 0 ? (r *= h(n)) : n < 0 && (t *= h(-n)), t < r)
            ? -1
            : +(t > r);
        }
        eq(e) {
          return 0 === this.cmp(e);
        }
        lt(e) {
          return 0 > this.cmp(e);
        }
        lte(e) {
          return 0 >= this.cmp(e);
        }
        gt(e) {
          return this.cmp(e) > 0;
        }
        gte(e) {
          return this.cmp(e) >= 0;
        }
        floor() {
          let e = this.#ta;
          return (
            this.#ta < l && (e -= this.#to - u),
            (e = (this.#ta / this.#to) * this.#to),
            this.#tu(e, "floor")
          );
        }
        ceiling() {
          let e = this.#ta;
          return (
            this.#ta > l && (e += this.#to - u),
            (e = (this.#ta / this.#to) * this.#to),
            this.#tu(e, "ceiling")
          );
        }
        round(e) {
          if ((null == e && (e = 0), e >= this.decimals)) return this;
          let t = this.decimals - e,
            r = f * h(t - 1),
            n = this.value + r,
            i = h(t);
          return p((n = (n / i) * i), this.#ts, "round"), new g(c, n, this.#ts);
        }
        isZero() {
          return this.#ta === l;
        }
        isNegative() {
          return this.#ta < l;
        }
        toString() {
          return this._value;
        }
        toUnsafeFloat() {
          return parseFloat(this.toString());
        }
        toFormat(e) {
          return g.fromString(this.toString(), e);
        }
        static fromValue(e, t, r) {
          let i = null == t ? 0 : (0, s.WZ)(t),
            a = b(r),
            o = (0, s.Ab)(e, "value"),
            u = i - a.decimals;
          if (u > 0) {
            let t = h(u);
            (0, n.vA)(
              o % t === l,
              "value loses precision for format",
              "NUMERIC_FAULT",
              { operation: "fromValue", fault: "underflow", value: e }
            ),
              (o /= t);
          } else u < 0 && (o *= h(-u));
          return p(o, a, "fromValue"), new g(c, o, a);
        }
        static fromString(e, t) {
          let r = e.match(/^(-?)([0-9]*)\.?([0-9]*)$/);
          (0, n.MR)(
            r && r[2].length + r[3].length > 0,
            "invalid FixedNumber string value",
            "value",
            e
          );
          let i = b(t),
            s = r[2] || "0",
            a = r[3] || "";
          for (; a.length < i.decimals; ) a += d;
          (0, n.vA)(
            a.substring(i.decimals).match(/^0*$/),
            "too many decimals for format",
            "NUMERIC_FAULT",
            { operation: "fromString", fault: "underflow", value: e }
          ),
            (a = a.substring(0, i.decimals));
          let o = BigInt(r[1] + s + a);
          return p(o, i, "fromString"), new g(c, o, i);
        }
        static fromBytes(e, t) {
          let r = (0, s.Dg)((0, i.q5)(e, "value")),
            n = b(t);
          return (
            n.signed && (r = (0, s.ST)(r, n.width)),
            p(r, n, "fromBytes"),
            new g(c, r, n)
          );
        }
      }
      let m = ["wei", "kwei", "mwei", "gwei", "szabo", "finney", "ether"];
      function y(e, t) {
        let r = 18;
        if ("string" == typeof t) {
          let e = m.indexOf(t);
          (0, n.MR)(e >= 0, "invalid unit", "unit", t), (r = 3 * e);
        } else null != t && (r = (0, s.WZ)(t, "unit"));
        return g.fromValue(e, r, { decimals: r, width: 512 }).toString();
      }
      function v(e, t) {
        (0, n.MR)("string" == typeof e, "value must be a string", "value", e);
        let r = 18;
        if ("string" == typeof t) {
          let e = m.indexOf(t);
          (0, n.MR)(e >= 0, "invalid unit", "unit", t), (r = 3 * e);
        } else null != t && (r = (0, s.WZ)(t, "unit"));
        return g.fromString(e, { decimals: r, width: 512 }).value;
      }
    },
    62949: (e, t, r) => {
      "use strict";
      r.d(t, { $: () => o });
      var n = r(62037),
        i = r(29592),
        s = r(44532);
      function a(e, t) {
        return {
          address: (0, n.b)(e),
          storageKeys: t.map(
            (e, t) => (
              (0, i.MR)(
                (0, s.Lo)(e, 32),
                "invalid slot",
                `storageKeys[${t}]`,
                e
              ),
              e.toLowerCase()
            )
          ),
        };
      }
      function o(e) {
        if (Array.isArray(e))
          return e.map((t, r) =>
            Array.isArray(t)
              ? ((0, i.MR)(
                  2 === t.length,
                  "invalid slot set",
                  `value[${r}]`,
                  t
                ),
                a(t[0], t[1]))
              : ((0, i.MR)(
                  null != t && "object" == typeof t,
                  "invalid address-slot set",
                  "value",
                  e
                ),
                a(t.address, t.storageKeys))
          );
        (0, i.MR)(
          null != e && "object" == typeof e,
          "invalid access list",
          "value",
          e
        );
        let t = Object.keys(e).map((t) => {
          let r = e[t].reduce((e, t) => ((e[t] = !0), e), {});
          return a(t, Object.keys(r).sort());
        });
        return t.sort((e, t) => e.address.localeCompare(t.address)), t;
      }
    },
    64054: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          bindSnapshot: function () {
            return a;
          },
          createAsyncLocalStorage: function () {
            return s;
          },
          createSnapshot: function () {
            return o;
          },
        });
      let r = Object.defineProperty(
        Error(
          "Invariant: AsyncLocalStorage accessed in runtime where it is not available"
        ),
        "__NEXT_ERROR_CODE",
        { value: "E504", enumerable: !1, configurable: !0 }
      );
      class n {
        disable() {
          throw r;
        }
        getStore() {}
        run() {
          throw r;
        }
        exit() {
          throw r;
        }
        enterWith() {
          throw r;
        }
        static bind(e) {
          return e;
        }
      }
      let i = "undefined" != typeof globalThis && globalThis.AsyncLocalStorage;
      function s() {
        return i ? new i() : new n();
      }
      function a(e) {
        return i ? i.bind(e) : n.bind(e);
      }
      function o() {
        return i
          ? i.snapshot()
          : function (e, ...t) {
              return e(...t);
            };
      }
    },
    64180: (e, t, r) => {
      "use strict";
      var n = r(42539),
        i = r(68711),
        s = r(13656),
        a = n.rotl32,
        o = n.sum32,
        l = n.sum32_5,
        u = s.ft_1,
        f = i.BlockHash,
        c = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
      function d() {
        if (!(this instanceof d)) return new d();
        f.call(this),
          (this.h = [
            0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0,
          ]),
          (this.W = Array(80));
      }
      n.inherits(d, f),
        (e.exports = d),
        (d.blockSize = 512),
        (d.outSize = 160),
        (d.hmacStrength = 80),
        (d.padLength = 64),
        (d.prototype._update = function (e, t) {
          for (var r = this.W, n = 0; n < 16; n++) r[n] = e[t + n];
          for (; n < r.length; n++)
            r[n] = a(r[n - 3] ^ r[n - 8] ^ r[n - 14] ^ r[n - 16], 1);
          var i = this.h[0],
            s = this.h[1],
            f = this.h[2],
            d = this.h[3],
            h = this.h[4];
          for (n = 0; n < r.length; n++) {
            var p = ~~(n / 20),
              b = l(a(i, 5), u(p, s, f, d), h, r[n], c[p]);
            (h = d), (d = f), (f = a(s, 30)), (s = i), (i = b);
          }
          (this.h[0] = o(this.h[0], i)),
            (this.h[1] = o(this.h[1], s)),
            (this.h[2] = o(this.h[2], f)),
            (this.h[3] = o(this.h[3], d)),
            (this.h[4] = o(this.h[4], h));
        }),
        (d.prototype._digest = function (e) {
          return "hex" === e
            ? n.toHex32(this.h, "big")
            : n.split32(this.h, "big");
        });
    },
    66054: (e, t, r) => {
      "use strict";
      var n = r(42539),
        i = r(8839);
      function s() {
        if (!(this instanceof s)) return new s();
        i.call(this),
          (this.h = [
            0xcbbb9d5d, 0xc1059ed8, 0x629a292a, 0x367cd507, 0x9159015a,
            0x3070dd17, 0x152fecd8, 0xf70e5939, 0x67332667, 0xffc00b31,
            0x8eb44a87, 0x68581511, 0xdb0c2e0d, 0x64f98fa7, 0x47b5481d,
            0xbefa4fa4,
          ]);
      }
      n.inherits(s, i),
        (e.exports = s),
        (s.blockSize = 1024),
        (s.outSize = 384),
        (s.hmacStrength = 192),
        (s.padLength = 128),
        (s.prototype._digest = function (e) {
          return "hex" === e
            ? n.toHex32(this.h.slice(0, 12), "big")
            : n.split32(this.h.slice(0, 12), "big");
        });
    },
    66766: (e, t, r) => {
      "use strict";
      r.d(t, { default: () => i.a });
      var n = r(71469),
        i = r.n(n);
    },
    67357: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let n = r(95155),
        i = r(12115),
        s = r(62146);
      function a(e) {
        return { default: e && "default" in e ? e.default : e };
      }
      r(10255);
      let o = {
          loader: () => Promise.resolve(a(() => null)),
          loading: null,
          ssr: !0,
        },
        l = function (e) {
          let t = { ...o, ...e },
            r = (0, i.lazy)(() => t.loader().then(a)),
            l = t.loading;
          function u(e) {
            let a = l
                ? (0, n.jsx)(l, { isLoading: !0, pastDelay: !0, error: null })
                : null,
              o = !t.ssr || !!t.loading,
              u = o ? i.Suspense : i.Fragment,
              f = t.ssr
                ? (0, n.jsxs)(n.Fragment, {
                    children: [null, (0, n.jsx)(r, { ...e })],
                  })
                : (0, n.jsx)(s.BailoutToCSR, {
                    reason: "next/dynamic",
                    children: (0, n.jsx)(r, { ...e }),
                  });
            return (0, n.jsx)(u, {
              ...(o ? { fallback: a } : {}),
              children: f,
            });
          }
          return (u.displayName = "LoadableComponent"), u;
        };
    },
    67730: (e, t, r) => {
      "use strict";
      r.d(t, {
        FK: () => q,
        Pw: () => K,
        Zp: () => J,
        aX: () => G,
        bp: () => V,
        hc: () => Z,
      });
      var n = r(91339),
        i = r(29592),
        s = r(50797),
        a = r(84402);
      function o(e) {
        let t = new Set();
        return e.forEach((e) => t.add(e)), Object.freeze(t);
      }
      let l = o("external public payable override".split(" ")),
        u =
          "constant external internal payable private public pure view override",
        f = o(u.split(" ")),
        c = "constructor error event fallback function receive struct",
        d = o(c.split(" ")),
        h = "calldata memory storage payable indexed",
        p = o(h.split(" ")),
        b = o([c, h, "tuple returns", u].join(" ").split(" ")),
        g = {
          "(": "OPEN_PAREN",
          ")": "CLOSE_PAREN",
          "[": "OPEN_BRACKET",
          "]": "CLOSE_BRACKET",
          ",": "COMMA",
          "@": "AT",
        },
        m = RegExp("^(\\s*)"),
        y = RegExp("^([0-9]+)"),
        v = RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)"),
        w = RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)$"),
        A = RegExp("^(address|bool|bytes([0-9]*)|string|u?int([0-9]*))$");
      class x {
        #tp;
        #tb;
        get offset() {
          return this.#tp;
        }
        get length() {
          return this.#tb.length - this.#tp;
        }
        constructor(e) {
          (this.#tp = 0), (this.#tb = e.slice());
        }
        clone() {
          return new x(this.#tb);
        }
        reset() {
          this.#tp = 0;
        }
        #tg(e = 0, t = 0) {
          return new x(
            this.#tb
              .slice(e, t)
              .map((t) =>
                Object.freeze(
                  Object.assign({}, t, {
                    match: t.match - e,
                    linkBack: t.linkBack - e,
                    linkNext: t.linkNext - e,
                  })
                )
              )
          );
        }
        popKeyword(e) {
          let t = this.peek();
          if ("KEYWORD" !== t.type || !e.has(t.text))
            throw Error(`expected keyword ${t.text}`);
          return this.pop().text;
        }
        popType(e) {
          if (this.peek().type !== e) {
            let t = this.peek();
            throw Error(
              `expected ${e}; got ${t.type} ${JSON.stringify(t.text)}`
            );
          }
          return this.pop().text;
        }
        popParen() {
          let e = this.peek();
          if ("OPEN_PAREN" !== e.type) throw Error("bad start");
          let t = this.#tg(this.#tp + 1, e.match + 1);
          return (this.#tp = e.match + 1), t;
        }
        popParams() {
          let e = this.peek();
          if ("OPEN_PAREN" !== e.type) throw Error("bad start");
          let t = [];
          for (; this.#tp < e.match - 1; ) {
            let e = this.peek().linkNext;
            t.push(this.#tg(this.#tp + 1, e)), (this.#tp = e);
          }
          return (this.#tp = e.match + 1), t;
        }
        peek() {
          if (this.#tp >= this.#tb.length) throw Error("out-of-bounds");
          return this.#tb[this.#tp];
        }
        peekKeyword(e) {
          let t = this.peekType("KEYWORD");
          return null != t && e.has(t) ? t : null;
        }
        peekType(e) {
          if (0 === this.length) return null;
          let t = this.peek();
          return t.type === e ? t.text : null;
        }
        pop() {
          let e = this.peek();
          return this.#tp++, e;
        }
        toString() {
          let e = [];
          for (let t = this.#tp; t < this.#tb.length; t++) {
            let r = this.#tb[t];
            e.push(`${r.type}:${r.text}`);
          }
          return `<TokenString ${e.join(" ")}>`;
        }
      }
      function E(e) {
        let t = [],
          r = (t) => {
            let r = a < e.length ? JSON.stringify(e[a]) : "$EOI";
            throw Error(`invalid token ${r} at ${a}: ${t}`);
          },
          i = [],
          s = [],
          a = 0;
        for (; a < e.length; ) {
          let o = e.substring(a),
            l = o.match(m);
          l && ((a += l[1].length), (o = e.substring(a)));
          let u = {
            depth: i.length,
            linkBack: -1,
            linkNext: -1,
            match: -1,
            type: "",
            text: "",
            offset: a,
            value: -1,
          };
          t.push(u);
          let f = g[o[0]] || "";
          if (f) {
            if (((u.type = f), (u.text = o[0]), a++, "OPEN_PAREN" === f))
              i.push(t.length - 1), s.push(t.length - 1);
            else if ("CLOSE_PAREN" == f)
              0 === i.length && r("no matching open bracket"),
                (u.match = i.pop()),
                (t[u.match].match = t.length - 1),
                u.depth--,
                (u.linkBack = s.pop()),
                (t[u.linkBack].linkNext = t.length - 1);
            else if ("COMMA" === f)
              (u.linkBack = s.pop()),
                (t[u.linkBack].linkNext = t.length - 1),
                s.push(t.length - 1);
            else if ("OPEN_BRACKET" === f) u.type = "BRACKET";
            else if ("CLOSE_BRACKET" === f) {
              let e = t.pop().text;
              if (t.length > 0 && "NUMBER" === t[t.length - 1].type) {
                let r = t.pop().text;
                (e = r + e), (t[t.length - 1].value = (0, n.WZ)(r));
              }
              if (0 === t.length || "BRACKET" !== t[t.length - 1].type)
                throw Error("missing opening bracket");
              t[t.length - 1].text += e;
            }
            continue;
          }
          if ((l = o.match(v))) {
            if (((u.text = l[1]), (a += u.text.length), b.has(u.text))) {
              u.type = "KEYWORD";
              continue;
            }
            if (u.text.match(A)) {
              u.type = "TYPE";
              continue;
            }
            u.type = "ID";
            continue;
          }
          if ((l = o.match(y))) {
            (u.text = l[1]), (u.type = "NUMBER"), (a += u.text.length);
            continue;
          }
          throw Error(
            `unexpected token ${JSON.stringify(o[0])} at position ${a}`
          );
        }
        return new x(t.map((e) => Object.freeze(e)));
      }
      function R(e, t) {
        let r = [];
        for (let n in t.keys()) e.has(n) && r.push(n);
        if (r.length > 1) throw Error(`conflicting types: ${r.join(", ")}`);
      }
      function M(e, t) {
        if (t.peekKeyword(d)) {
          let r = t.pop().text;
          if (r !== e) throw Error(`expected ${e}, got ${r}`);
        }
        return t.popType("ID");
      }
      function S(e, t) {
        let r = new Set();
        for (;;) {
          let n = e.peekType("KEYWORD");
          if (null == n || (t && !t.has(n))) break;
          if ((e.pop(), r.has(n)))
            throw Error(`duplicate keywords: ${JSON.stringify(n)}`);
          r.add(n);
        }
        return Object.freeze(r);
      }
      function P(e) {
        let t = S(e, f);
        return (R(t, o("constant payable nonpayable".split(" "))),
        R(t, o("pure view payable nonpayable".split(" "))),
        t.has("view"))
          ? "view"
          : t.has("pure")
          ? "pure"
          : t.has("payable")
          ? "payable"
          : t.has("nonpayable")
          ? "nonpayable"
          : t.has("constant")
          ? "view"
          : "nonpayable";
      }
      function O(e, t) {
        return e.popParams().map((e) => G.from(e, t));
      }
      function I(e) {
        if (e.peekType("AT")) {
          if ((e.pop(), e.peekType("NUMBER"))) return (0, n.Ab)(e.pop().text);
          throw Error("invalid gas");
        }
        return null;
      }
      function k(e) {
        if (e.length)
          throw Error(
            `unexpected tokens at offset ${e.offset}: ${e.toString()}`
          );
      }
      let N = new RegExp(/^(.*)\[([0-9]*)\]$/);
      function C(e) {
        let t = e.match(A);
        if (((0, i.MR)(t, "invalid type", "type", e), "uint" === e))
          return "uint256";
        if ("int" === e) return "int256";
        if (t[2]) {
          let r = parseInt(t[2]);
          (0, i.MR)(0 !== r && r <= 32, "invalid bytes length", "type", e);
        } else if (t[3]) {
          let r = parseInt(t[3]);
          (0, i.MR)(
            0 !== r && r <= 256 && r % 8 == 0,
            "invalid numeric width",
            "type",
            e
          );
        }
        return e;
      }
      let B = {},
        T = Symbol.for("_ethers_internal"),
        L = "_ParamTypeInternal",
        U = "_ErrorInternal",
        F = "_EventInternal",
        _ = "_ConstructorInternal",
        D = "_FallbackInternal",
        j = "_FunctionInternal",
        z = "_StructInternal";
      class G {
        name;
        type;
        baseType;
        indexed;
        components;
        arrayLength;
        arrayChildren;
        constructor(e, t, r, n, a, o, l, u) {
          if (
            ((0, i.gk)(e, B, "ParamType"),
            Object.defineProperty(this, T, { value: L }),
            o && (o = Object.freeze(o.slice())),
            "array" === n)
          ) {
            if (null == l || null == u) throw Error("");
          } else if (null != l || null != u) throw Error("");
          if ("tuple" === n) {
            if (null == o) throw Error("");
          } else if (null != o) throw Error("");
          (0, s.n)(this, {
            name: t,
            type: r,
            baseType: n,
            indexed: a,
            components: o,
            arrayLength: l,
            arrayChildren: u,
          });
        }
        format(e) {
          if ((null == e && (e = "sighash"), "json" === e)) {
            let t = this.name || "";
            if (this.isArray()) {
              let e = JSON.parse(this.arrayChildren.format("json"));
              return (
                (e.name = t),
                (e.type += `[${
                  this.arrayLength < 0 ? "" : String(this.arrayLength)
                }]`),
                JSON.stringify(e)
              );
            }
            let r = {
              type: "tuple" === this.baseType ? "tuple" : this.type,
              name: t,
            };
            return (
              "boolean" == typeof this.indexed && (r.indexed = this.indexed),
              this.isTuple() &&
                (r.components = this.components.map((t) =>
                  JSON.parse(t.format(e))
                )),
              JSON.stringify(r)
            );
          }
          let t = "";
          return (
            this.isArray()
              ? ((t += this.arrayChildren.format(e)),
                (t += `[${
                  this.arrayLength < 0 ? "" : String(this.arrayLength)
                }]`))
              : this.isTuple()
              ? (t +=
                  "(" +
                  this.components
                    .map((t) => t.format(e))
                    .join("full" === e ? ", " : ",") +
                  ")")
              : (t += this.type),
            "sighash" !== e &&
              (!0 === this.indexed && (t += " indexed"),
              "full" === e && this.name && (t += " " + this.name)),
            t
          );
        }
        isArray() {
          return "array" === this.baseType;
        }
        isTuple() {
          return "tuple" === this.baseType;
        }
        isIndexable() {
          return null != this.indexed;
        }
        walk(e, t) {
          if (this.isArray()) {
            if (!Array.isArray(e)) throw Error("invalid array value");
            if (-1 !== this.arrayLength && e.length !== this.arrayLength)
              throw Error("array is wrong length");
            let r = this;
            return e.map((e) => r.arrayChildren.walk(e, t));
          }
          if (this.isTuple()) {
            if (!Array.isArray(e)) throw Error("invalid tuple value");
            if (e.length !== this.components.length)
              throw Error("array is wrong length");
            let r = this;
            return e.map((e, n) => r.components[n].walk(e, t));
          }
          return t(this.type, e);
        }
        #tm(e, t, r, n) {
          if (this.isArray()) {
            if (!Array.isArray(t)) throw Error("invalid array value");
            if (-1 !== this.arrayLength && t.length !== this.arrayLength)
              throw Error("array is wrong length");
            let i = this.arrayChildren,
              s = t.slice();
            s.forEach((t, n) => {
              i.#tm(e, t, r, (e) => {
                s[n] = e;
              });
            }),
              n(s);
            return;
          }
          if (this.isTuple()) {
            let i,
              s = this.components;
            if (Array.isArray(t)) i = t.slice();
            else {
              if (null == t || "object" != typeof t)
                throw Error("invalid tuple value");
              i = s.map((e) => {
                if (!e.name)
                  throw Error(
                    "cannot use object value with unnamed components"
                  );
                if (!(e.name in t))
                  throw Error(`missing value for component ${e.name}`);
                return t[e.name];
              });
            }
            if (i.length !== this.components.length)
              throw Error("array is wrong length");
            i.forEach((t, n) => {
              s[n].#tm(e, t, r, (e) => {
                i[n] = e;
              });
            }),
              n(i);
            return;
          }
          let i = r(this.type, t);
          i.then
            ? e.push(
                (async function () {
                  n(await i);
                })()
              )
            : n(i);
        }
        async walkAsync(e, t) {
          let r = [],
            n = [e];
          return (
            this.#tm(r, e, t, (e) => {
              n[0] = e;
            }),
            r.length && (await Promise.all(r)),
            n[0]
          );
        }
        static from(e, t) {
          if (G.isParamType(e)) return e;
          if ("string" == typeof e)
            try {
              return G.from(E(e), t);
            } catch (t) {
              (0, i.MR)(!1, "invalid param type", "obj", e);
            }
          else if (e instanceof x) {
            let r = "",
              n = "",
              i = null;
            S(e, o(["tuple"])).has("tuple") || e.peekType("OPEN_PAREN")
              ? ((n = "tuple"),
                (i = e.popParams().map((e) => G.from(e))),
                (r = `tuple(${i.map((e) => e.format()).join(",")})`))
              : (n = r = C(e.popType("TYPE")));
            let s = null,
              a = null;
            for (; e.length && e.peekType("BRACKET"); ) {
              let t = e.pop();
              (s = new G(B, "", r, n, null, i, a, s)),
                (a = t.value),
                (r += t.text),
                (n = "array"),
                (i = null);
            }
            let l = null;
            if (S(e, p).has("indexed")) {
              if (!t) throw Error("");
              l = !0;
            }
            let u = e.peekType("ID") ? e.pop().text : "";
            if (e.length) throw Error("leftover tokens");
            return new G(B, u, r, n, l, i, a, s);
          }
          let r = e.name;
          (0, i.MR)(
            !r || ("string" == typeof r && r.match(w)),
            "invalid name",
            "obj.name",
            r
          );
          let n = e.indexed;
          null != n &&
            ((0, i.MR)(
              t,
              "parameter cannot be indexed",
              "obj.indexed",
              e.indexed
            ),
            (n = !!n));
          let s = e.type,
            a = s.match(N);
          if (a) {
            let t = parseInt(a[2] || "-1"),
              i = G.from({ type: a[1], components: e.components });
            return new G(B, r || "", s, "array", n, null, t, i);
          }
          if ("tuple" === s || s.startsWith("tuple(") || s.startsWith("(")) {
            let t =
              null != e.components ? e.components.map((e) => G.from(e)) : null;
            return new G(B, r || "", s, "tuple", n, t, null, null);
          }
          return new G(B, r || "", (s = C(e.type)), s, n, null, null, null);
        }
        static isParamType(e) {
          return e && e[T] === L;
        }
      }
      class q {
        type;
        inputs;
        constructor(e, t, r) {
          (0, i.gk)(e, B, "Fragment"),
            (r = Object.freeze(r.slice())),
            (0, s.n)(this, { type: t, inputs: r });
        }
        static from(e) {
          if ("string" == typeof e) {
            try {
              q.from(JSON.parse(e));
            } catch (e) {}
            return q.from(E(e));
          }
          if (e instanceof x)
            switch (e.peekKeyword(d)) {
              case "constructor":
                return K.from(e);
              case "error":
                return V.from(e);
              case "event":
                return J.from(e);
              case "fallback":
              case "receive":
                return W.from(e);
              case "function":
                return Z.from(e);
              case "struct":
                return Y.from(e);
            }
          else if ("object" == typeof e) {
            switch (e.type) {
              case "constructor":
                return K.from(e);
              case "error":
                return V.from(e);
              case "event":
                return J.from(e);
              case "fallback":
              case "receive":
                return W.from(e);
              case "function":
                return Z.from(e);
              case "struct":
                return Y.from(e);
            }
            (0, i.vA)(
              !1,
              `unsupported type: ${e.type}`,
              "UNSUPPORTED_OPERATION",
              { operation: "Fragment.from" }
            );
          }
          (0, i.MR)(!1, "unsupported frgament object", "obj", e);
        }
        static isConstructor(e) {
          return K.isFragment(e);
        }
        static isError(e) {
          return V.isFragment(e);
        }
        static isEvent(e) {
          return J.isFragment(e);
        }
        static isFunction(e) {
          return Z.isFragment(e);
        }
        static isStruct(e) {
          return Y.isFragment(e);
        }
      }
      class Q extends q {
        name;
        constructor(e, t, r, n) {
          super(e, t, n),
            (0, i.MR)(
              "string" == typeof r && r.match(w),
              "invalid identifier",
              "name",
              r
            ),
            (n = Object.freeze(n.slice())),
            (0, s.n)(this, { name: r });
        }
      }
      function H(e, t) {
        return (
          "(" + t.map((t) => t.format(e)).join("full" === e ? ", " : ",") + ")"
        );
      }
      class V extends Q {
        constructor(e, t, r) {
          super(e, "error", t, r), Object.defineProperty(this, T, { value: U });
        }
        get selector() {
          return (0, a.id)(this.format("sighash")).substring(0, 10);
        }
        format(e) {
          if ((null == e && (e = "sighash"), "json" === e))
            return JSON.stringify({
              type: "error",
              name: this.name,
              inputs: this.inputs.map((t) => JSON.parse(t.format(e))),
            });
          let t = [];
          return (
            "sighash" !== e && t.push("error"),
            t.push(this.name + H(e, this.inputs)),
            t.join(" ")
          );
        }
        static from(e) {
          if (V.isFragment(e)) return e;
          if ("string" == typeof e) return V.from(E(e));
          if (e instanceof x) {
            let t = M("error", e),
              r = O(e);
            return k(e), new V(B, t, r);
          }
          return new V(B, e.name, e.inputs ? e.inputs.map(G.from) : []);
        }
        static isFragment(e) {
          return e && e[T] === U;
        }
      }
      class J extends Q {
        anonymous;
        constructor(e, t, r, n) {
          super(e, "event", t, r),
            Object.defineProperty(this, T, { value: F }),
            (0, s.n)(this, { anonymous: n });
        }
        get topicHash() {
          return (0, a.id)(this.format("sighash"));
        }
        format(e) {
          if ((null == e && (e = "sighash"), "json" === e))
            return JSON.stringify({
              type: "event",
              anonymous: this.anonymous,
              name: this.name,
              inputs: this.inputs.map((t) => JSON.parse(t.format(e))),
            });
          let t = [];
          return (
            "sighash" !== e && t.push("event"),
            t.push(this.name + H(e, this.inputs)),
            "sighash" !== e && this.anonymous && t.push("anonymous"),
            t.join(" ")
          );
        }
        static getTopicHash(e, t) {
          return new J(B, e, (t = (t || []).map((e) => G.from(e))), !1)
            .topicHash;
        }
        static from(e) {
          if (J.isFragment(e)) return e;
          if ("string" == typeof e)
            try {
              return J.from(E(e));
            } catch (t) {
              (0, i.MR)(!1, "invalid event fragment", "obj", e);
            }
          else if (e instanceof x) {
            let t = M("event", e),
              r = O(e, !0),
              n = !!S(e, o(["anonymous"])).has("anonymous");
            return k(e), new J(B, t, r, n);
          }
          return new J(
            B,
            e.name,
            e.inputs ? e.inputs.map((e) => G.from(e, !0)) : [],
            !!e.anonymous
          );
        }
        static isFragment(e) {
          return e && e[T] === F;
        }
      }
      class K extends q {
        payable;
        gas;
        constructor(e, t, r, n, i) {
          super(e, t, r),
            Object.defineProperty(this, T, { value: _ }),
            (0, s.n)(this, { payable: n, gas: i });
        }
        format(e) {
          if (
            ((0, i.vA)(
              null != e && "sighash" !== e,
              "cannot format a constructor for sighash",
              "UNSUPPORTED_OPERATION",
              { operation: "format(sighash)" }
            ),
            "json" === e)
          )
            return JSON.stringify({
              type: "constructor",
              stateMutability: this.payable ? "payable" : "undefined",
              payable: this.payable,
              gas: null != this.gas ? this.gas : void 0,
              inputs: this.inputs.map((t) => JSON.parse(t.format(e))),
            });
          let t = [`constructor${H(e, this.inputs)}`];
          return (
            this.payable && t.push("payable"),
            null != this.gas && t.push(`@${this.gas.toString()}`),
            t.join(" ")
          );
        }
        static from(e) {
          if (K.isFragment(e)) return e;
          if ("string" == typeof e)
            try {
              return K.from(E(e));
            } catch (t) {
              (0, i.MR)(!1, "invalid constuctor fragment", "obj", e);
            }
          else if (e instanceof x) {
            S(e, o(["constructor"]));
            let t = O(e),
              r = !!S(e, l).has("payable"),
              n = I(e);
            return k(e), new K(B, "constructor", t, r, n);
          }
          return new K(
            B,
            "constructor",
            e.inputs ? e.inputs.map(G.from) : [],
            !!e.payable,
            null != e.gas ? e.gas : null
          );
        }
        static isFragment(e) {
          return e && e[T] === _;
        }
      }
      class W extends q {
        payable;
        constructor(e, t, r) {
          super(e, "fallback", t),
            Object.defineProperty(this, T, { value: D }),
            (0, s.n)(this, { payable: r });
        }
        format(e) {
          let t = 0 === this.inputs.length ? "receive" : "fallback";
          return "json" === e
            ? JSON.stringify({
                type: t,
                stateMutability: this.payable ? "payable" : "nonpayable",
              })
            : `${t}()${this.payable ? " payable" : ""}`;
        }
        static from(e) {
          if (W.isFragment(e)) return e;
          if ("string" == typeof e)
            try {
              return W.from(E(e));
            } catch (t) {
              (0, i.MR)(!1, "invalid fallback fragment", "obj", e);
            }
          else if (e instanceof x) {
            let t = e.toString(),
              r = e.peekKeyword(o(["fallback", "receive"]));
            if (
              ((0, i.MR)(r, "type must be fallback or receive", "obj", t),
              "receive" === e.popKeyword(o(["fallback", "receive"])))
            ) {
              let t = O(e);
              return (
                (0, i.MR)(
                  0 === t.length,
                  "receive cannot have arguments",
                  "obj.inputs",
                  t
                ),
                S(e, o(["payable"])),
                k(e),
                new W(B, [], !0)
              );
            }
            let n = O(e);
            n.length
              ? (0, i.MR)(
                  1 === n.length && "bytes" === n[0].type,
                  "invalid fallback inputs",
                  "obj.inputs",
                  n.map((e) => e.format("minimal")).join(", ")
                )
              : (n = [G.from("bytes")]);
            let s = P(e);
            if (
              ((0, i.MR)(
                "nonpayable" === s || "payable" === s,
                "fallback cannot be constants",
                "obj.stateMutability",
                s
              ),
              S(e, o(["returns"])).has("returns"))
            ) {
              let t = O(e);
              (0, i.MR)(
                1 === t.length && "bytes" === t[0].type,
                "invalid fallback outputs",
                "obj.outputs",
                t.map((e) => e.format("minimal")).join(", ")
              );
            }
            return k(e), new W(B, n, "payable" === s);
          }
          return "receive" === e.type
            ? new W(B, [], !0)
            : "fallback" === e.type
            ? new W(B, [G.from("bytes")], "payable" === e.stateMutability)
            : void (0, i.MR)(!1, "invalid fallback description", "obj", e);
        }
        static isFragment(e) {
          return e && e[T] === D;
        }
      }
      class Z extends Q {
        constant;
        outputs;
        stateMutability;
        payable;
        gas;
        constructor(e, t, r, n, i, a) {
          super(e, "function", t, n),
            Object.defineProperty(this, T, { value: j }),
            (i = Object.freeze(i.slice())),
            (0, s.n)(this, {
              constant: "view" === r || "pure" === r,
              gas: a,
              outputs: i,
              payable: "payable" === r,
              stateMutability: r,
            });
        }
        get selector() {
          return (0, a.id)(this.format("sighash")).substring(0, 10);
        }
        format(e) {
          if ((null == e && (e = "sighash"), "json" === e))
            return JSON.stringify({
              type: "function",
              name: this.name,
              constant: this.constant,
              stateMutability:
                "nonpayable" !== this.stateMutability
                  ? this.stateMutability
                  : void 0,
              payable: this.payable,
              gas: null != this.gas ? this.gas : void 0,
              inputs: this.inputs.map((t) => JSON.parse(t.format(e))),
              outputs: this.outputs.map((t) => JSON.parse(t.format(e))),
            });
          let t = [];
          return (
            "sighash" !== e && t.push("function"),
            t.push(this.name + H(e, this.inputs)),
            "sighash" !== e &&
              ("nonpayable" !== this.stateMutability &&
                t.push(this.stateMutability),
              this.outputs &&
                this.outputs.length &&
                (t.push("returns"), t.push(H(e, this.outputs))),
              null != this.gas && t.push(`@${this.gas.toString()}`)),
            t.join(" ")
          );
        }
        static getSelector(e, t) {
          return new Z(
            B,
            e,
            "view",
            (t = (t || []).map((e) => G.from(e))),
            [],
            null
          ).selector;
        }
        static from(e) {
          if (Z.isFragment(e)) return e;
          if ("string" == typeof e)
            try {
              return Z.from(E(e));
            } catch (t) {
              (0, i.MR)(!1, "invalid function fragment", "obj", e);
            }
          else if (e instanceof x) {
            let t = M("function", e),
              r = O(e),
              n = P(e),
              i = [];
            S(e, o(["returns"])).has("returns") && (i = O(e));
            let s = I(e);
            return k(e), new Z(B, t, n, r, i, s);
          }
          let t = e.stateMutability;
          return (
            null == t &&
              ((t = "payable"),
              "boolean" == typeof e.constant
                ? ((t = "view"),
                  !e.constant &&
                    ((t = "payable"),
                    "boolean" != typeof e.payable ||
                      e.payable ||
                      (t = "nonpayable")))
                : "boolean" != typeof e.payable ||
                  e.payable ||
                  (t = "nonpayable")),
            new Z(
              B,
              e.name,
              t,
              e.inputs ? e.inputs.map(G.from) : [],
              e.outputs ? e.outputs.map(G.from) : [],
              null != e.gas ? e.gas : null
            )
          );
        }
        static isFragment(e) {
          return e && e[T] === j;
        }
      }
      class Y extends Q {
        constructor(e, t, r) {
          super(e, "struct", t, r),
            Object.defineProperty(this, T, { value: z });
        }
        format() {
          throw Error("@TODO");
        }
        static from(e) {
          if ("string" == typeof e)
            try {
              return Y.from(E(e));
            } catch (t) {
              (0, i.MR)(!1, "invalid struct fragment", "obj", e);
            }
          else if (e instanceof x) {
            let t = M("struct", e),
              r = O(e);
            return k(e), new Y(B, t, r);
          }
          return new Y(B, e.name, e.inputs ? e.inputs.map(G.from) : []);
        }
        static isFragment(e) {
          return e && e[T] === z;
        }
      }
    },
    68711: (e, t, r) => {
      "use strict";
      var n = r(42539),
        i = r(23124);
      function s() {
        (this.pending = null),
          (this.pendingTotal = 0),
          (this.blockSize = this.constructor.blockSize),
          (this.outSize = this.constructor.outSize),
          (this.hmacStrength = this.constructor.hmacStrength),
          (this.padLength = this.constructor.padLength / 8),
          (this.endian = "big"),
          (this._delta8 = this.blockSize / 8),
          (this._delta32 = this.blockSize / 32);
      }
      (t.BlockHash = s),
        (s.prototype.update = function (e, t) {
          if (
            ((e = n.toArray(e, t)),
            this.pending
              ? (this.pending = this.pending.concat(e))
              : (this.pending = e),
            (this.pendingTotal += e.length),
            this.pending.length >= this._delta8)
          ) {
            var r = (e = this.pending).length % this._delta8;
            (this.pending = e.slice(e.length - r, e.length)),
              0 === this.pending.length && (this.pending = null),
              (e = n.join32(e, 0, e.length - r, this.endian));
            for (var i = 0; i < e.length; i += this._delta32)
              this._update(e, i, i + this._delta32);
          }
          return this;
        }),
        (s.prototype.digest = function (e) {
          return (
            this.update(this._pad()), i(null === this.pending), this._digest(e)
          );
        }),
        (s.prototype._pad = function () {
          var e = this.pendingTotal,
            t = this._delta8,
            r = t - ((e + this.padLength) % t),
            n = Array(r + this.padLength);
          n[0] = 128;
          for (var i = 1; i < r; i++) n[i] = 0;
          if (((e <<= 3), "big" === this.endian)) {
            for (var s = 8; s < this.padLength; s++) n[i++] = 0;
            (n[i++] = 0),
              (n[i++] = 0),
              (n[i++] = 0),
              (n[i++] = 0),
              (n[i++] = (e >>> 24) & 255),
              (n[i++] = (e >>> 16) & 255),
              (n[i++] = (e >>> 8) & 255),
              (n[i++] = 255 & e);
          } else
            for (
              s = 8,
                n[i++] = 255 & e,
                n[i++] = (e >>> 8) & 255,
                n[i++] = (e >>> 16) & 255,
                n[i++] = (e >>> 24) & 255,
                n[i++] = 0,
                n[i++] = 0,
                n[i++] = 0,
                n[i++] = 0;
              s < this.padLength;
              s++
            )
              n[i++] = 0;
          return n;
        });
    },
    69991: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          DecodeError: function () {
            return p;
          },
          MiddlewareNotFoundError: function () {
            return y;
          },
          MissingStaticPage: function () {
            return m;
          },
          NormalizeError: function () {
            return b;
          },
          PageNotFoundError: function () {
            return g;
          },
          SP: function () {
            return d;
          },
          ST: function () {
            return h;
          },
          WEB_VITALS: function () {
            return r;
          },
          execOnce: function () {
            return n;
          },
          getDisplayName: function () {
            return l;
          },
          getLocationOrigin: function () {
            return a;
          },
          getURL: function () {
            return o;
          },
          isAbsoluteUrl: function () {
            return s;
          },
          isResSent: function () {
            return u;
          },
          loadGetInitialProps: function () {
            return c;
          },
          normalizeRepeatedSlashes: function () {
            return f;
          },
          stringifyError: function () {
            return v;
          },
        });
      let r = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
      function n(e) {
        let t,
          r = !1;
        return function () {
          for (var n = arguments.length, i = Array(n), s = 0; s < n; s++)
            i[s] = arguments[s];
          return r || ((r = !0), (t = e(...i))), t;
        };
      }
      let i = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        s = (e) => i.test(e);
      function a() {
        let { protocol: e, hostname: t, port: r } = window.location;
        return e + "//" + t + (r ? ":" + r : "");
      }
      function o() {
        let { href: e } = window.location,
          t = a();
        return e.substring(t.length);
      }
      function l(e) {
        return "string" == typeof e ? e : e.displayName || e.name || "Unknown";
      }
      function u(e) {
        return e.finished || e.headersSent;
      }
      function f(e) {
        let t = e.split("?");
        return (
          t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") +
          (t[1] ? "?" + t.slice(1).join("?") : "")
        );
      }
      async function c(e, t) {
        let r = t.res || (t.ctx && t.ctx.res);
        if (!e.getInitialProps)
          return t.ctx && t.Component
            ? { pageProps: await c(t.Component, t.ctx) }
            : {};
        let n = await e.getInitialProps(t);
        if (r && u(r)) return n;
        if (!n)
          throw Object.defineProperty(
            Error(
              '"' +
                l(e) +
                '.getInitialProps()" should resolve to an object. But found "' +
                n +
                '" instead.'
            ),
            "__NEXT_ERROR_CODE",
            { value: "E394", enumerable: !1, configurable: !0 }
          );
        return n;
      }
      let d = "undefined" != typeof performance,
        h =
          d &&
          ["mark", "measure", "getEntriesByName"].every(
            (e) => "function" == typeof performance[e]
          );
      class p extends Error {}
      class b extends Error {}
      class g extends Error {
        constructor(e) {
          super(),
            (this.code = "ENOENT"),
            (this.name = "PageNotFoundError"),
            (this.message = "Cannot find module for page: " + e);
        }
      }
      class m extends Error {
        constructor(e, t) {
          super(),
            (this.message =
              "Failed to load static file for page: " + e + " " + t);
        }
      }
      class y extends Error {
        constructor() {
          super(),
            (this.code = "ENOENT"),
            (this.message = "Cannot find the middleware module");
        }
      }
      function v(e) {
        return JSON.stringify({ message: e.message, stack: e.stack });
      }
    },
    70901: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "RouterContext", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = r(88229)._(r(12115)).default.createContext(null);
    },
    71257: (e, t, r) => {
      "use strict";
      r.d(t, {
        Vw: () => f,
        Id: () => u,
        O8: () => a,
        po: () => d,
        Ow: () => o,
        ZJ: () => l,
        DH: () => s,
        ld: () => c,
      });
      let n =
          "object" == typeof globalThis && "crypto" in globalThis
            ? globalThis.crypto
            : void 0,
        i = (e) => e instanceof Uint8Array,
        s = (e) =>
          new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4)),
        a = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength),
        o = (e, t) => (e << (32 - t)) | (e >>> t);
      if (68 !== new Uint8Array(new Uint32Array([0x11223344]).buffer)[0])
        throw Error("Non little-endian hardware is not supported");
      function l(e) {
        if (
          ("string" == typeof e &&
            (e = (function (e) {
              if ("string" != typeof e)
                throw Error(`utf8ToBytes expected string, got ${typeof e}`);
              return new Uint8Array(new TextEncoder().encode(e));
            })(e)),
          !i(e))
        )
          throw Error(`expected Uint8Array, got ${typeof e}`);
        return e;
      }
      function u(...e) {
        let t = new Uint8Array(e.reduce((e, t) => e + t.length, 0)),
          r = 0;
        return (
          e.forEach((e) => {
            if (!i(e)) throw Error("Uint8Array expected");
            t.set(e, r), (r += e.length);
          }),
          t
        );
      }
      (e, t) => t.toString(16).padStart(2, "0");
      class f {
        clone() {
          return this._cloneInto();
        }
      }
      function c(e) {
        let t = (t) => e().update(l(t)).digest(),
          r = e();
        return (
          (t.outputLen = r.outputLen),
          (t.blockLen = r.blockLen),
          (t.create = () => e()),
          t
        );
      }
      function d(e = 32) {
        if (n && "function" == typeof n.getRandomValues)
          return n.getRandomValues(new Uint8Array(e));
        throw Error("crypto.getRandomValues must be defined");
      }
    },
    71326: (e, t, r) => {
      "use strict";
      r.d(t, { y: () => T });
      var n = r(29592),
        i = r(79382),
        s = r(62037),
        a = r(91339),
        o = r(41755);
      class l extends i.Ue {
        constructor(e) {
          super("address", "address", e, !1);
        }
        defaultValue() {
          return "0x0000000000000000000000000000000000000000";
        }
        encode(e, t) {
          let r = o.V.dereference(t, "string");
          try {
            r = (0, s.b)(r);
          } catch (e) {
            return this._throwError(e.message, t);
          }
          return e.writeValue(r);
        }
        decode(e) {
          return (0, s.b)((0, a.up)(e.readValue(), 20));
        }
      }
      var u = r(50797);
      class f extends i.Ue {
        coder;
        constructor(e) {
          super(e.name, e.type, "_", e.dynamic), (this.coder = e);
        }
        defaultValue() {
          return this.coder.defaultValue();
        }
        encode(e, t) {
          return this.coder.encode(e, t);
        }
        decode(e) {
          return this.coder.decode(e);
        }
      }
      function c(e, t, r) {
        let s = [];
        if (Array.isArray(r)) s = r;
        else if (r && "object" == typeof r) {
          let e = {};
          s = t.map((t) => {
            let i = t.localName;
            return (
              (0, n.vA)(
                i,
                "cannot encode object for signature with missing names",
                "INVALID_ARGUMENT",
                { argument: "values", info: { coder: t }, value: r }
              ),
              (0, n.vA)(
                !e[i],
                "cannot encode object for signature with duplicate names",
                "INVALID_ARGUMENT",
                { argument: "values", info: { coder: t }, value: r }
              ),
              (e[i] = !0),
              r[i]
            );
          });
        } else (0, n.MR)(!1, "invalid tuple value", "tuple", r);
        (0, n.MR)(
          t.length === s.length,
          "types/value length mismatch",
          "tuple",
          r
        );
        let a = new i.AU(),
          o = new i.AU(),
          l = [];
        t.forEach((e, t) => {
          let r = s[t];
          if (e.dynamic) {
            let t = o.length;
            e.encode(o, r);
            let n = a.writeUpdatableValue();
            l.push((e) => {
              n(e + t);
            });
          } else e.encode(a, r);
        }),
          l.forEach((e) => {
            e(a.length);
          });
        let u = e.appendWriter(a);
        return u + e.appendWriter(o);
      }
      function d(e, t) {
        let r = [],
          s = [],
          a = e.subReader(0);
        return (
          t.forEach((t) => {
            let i = null;
            if (t.dynamic) {
              let r = e.readIndex(),
                s = a.subReader(r);
              try {
                i = t.decode(s);
              } catch (e) {
                if ((0, n.bJ)(e, "BUFFER_OVERRUN")) throw e;
                ((i = e).baseType = t.name),
                  (i.name = t.localName),
                  (i.type = t.type);
              }
            } else
              try {
                i = t.decode(e);
              } catch (e) {
                if ((0, n.bJ)(e, "BUFFER_OVERRUN")) throw e;
                ((i = e).baseType = t.name),
                  (i.name = t.localName),
                  (i.type = t.type);
              }
            if (void 0 == i) throw Error("investigate");
            r.push(i), s.push(t.localName || null);
          }),
          i.Q7.fromItems(r, s)
        );
      }
      class h extends i.Ue {
        coder;
        length;
        constructor(e, t, r) {
          super(
            "array",
            e.type + "[" + (t >= 0 ? t : "") + "]",
            r,
            -1 === t || e.dynamic
          ),
            (0, u.n)(this, { coder: e, length: t });
        }
        defaultValue() {
          let e = this.coder.defaultValue(),
            t = [];
          for (let r = 0; r < this.length; r++) t.push(e);
          return t;
        }
        encode(e, t) {
          let r = o.V.dereference(t, "array");
          Array.isArray(r) || this._throwError("expected array value", r);
          let i = this.length;
          -1 === i && ((i = r.length), e.writeValue(r.length)),
            (0, n.dd)(
              r.length,
              i,
              "coder array" + (this.localName ? " " + this.localName : "")
            );
          let s = [];
          for (let e = 0; e < r.length; e++) s.push(this.coder);
          return c(e, s, r);
        }
        decode(e) {
          let t = this.length;
          -1 === t &&
            ((t = e.readIndex()),
            (0, n.vA)(
              t * i.Yx <= e.dataLength,
              "insufficient data length",
              "BUFFER_OVERRUN",
              { buffer: e.bytes, offset: t * i.Yx, length: e.dataLength }
            ));
          let r = [];
          for (let e = 0; e < t; e++) r.push(new f(this.coder));
          return d(e, r);
        }
      }
      class p extends i.Ue {
        constructor(e) {
          super("bool", "bool", e, !1);
        }
        defaultValue() {
          return !1;
        }
        encode(e, t) {
          let r = o.V.dereference(t, "bool");
          return e.writeValue(+!!r);
        }
        decode(e) {
          return !!e.readValue();
        }
      }
      var b = r(44532);
      class g extends i.Ue {
        constructor(e, t) {
          super(e, e, t, !0);
        }
        defaultValue() {
          return "0x";
        }
        encode(e, t) {
          t = (0, b.Lm)(t);
          let r = e.writeValue(t.length);
          return r + e.writeBytes(t);
        }
        decode(e) {
          return e.readBytes(e.readIndex(), !0);
        }
      }
      class m extends g {
        constructor(e) {
          super("bytes", e);
        }
        decode(e) {
          return (0, b.c$)(super.decode(e));
        }
      }
      class y extends i.Ue {
        size;
        constructor(e, t) {
          let r = "bytes" + String(e);
          super(r, r, t, !1), (0, u.n)(this, { size: e }, { size: "number" });
        }
        defaultValue() {
          return "0x0000000000000000000000000000000000000000000000000000000000000000".substring(
            0,
            2 + 2 * this.size
          );
        }
        encode(e, t) {
          let r = (0, b.Lm)(o.V.dereference(t, this.type));
          return (
            r.length !== this.size &&
              this._throwError("incorrect data length", t),
            e.writeBytes(r)
          );
        }
        decode(e) {
          return (0, b.c$)(e.readBytes(this.size));
        }
      }
      let v = new Uint8Array([]);
      class w extends i.Ue {
        constructor(e) {
          super("null", "", e, !1);
        }
        defaultValue() {
          return null;
        }
        encode(e, t) {
          return null != t && this._throwError("not null", t), e.writeBytes(v);
        }
        decode(e) {
          return e.readBytes(0), null;
        }
      }
      let A = BigInt(0),
        x = BigInt(1),
        E = BigInt(
          "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
        );
      class R extends i.Ue {
        size;
        signed;
        constructor(e, t, r) {
          let n = (t ? "int" : "uint") + 8 * e;
          super(n, n, r, !1),
            (0, u.n)(
              this,
              { size: e, signed: t },
              { size: "number", signed: "boolean" }
            );
        }
        defaultValue() {
          return 0;
        }
        encode(e, t) {
          let r = (0, a.Ab)(o.V.dereference(t, this.type)),
            n = (0, a.dK)(E, 8 * i.Yx);
          if (this.signed) {
            let e = (0, a.dK)(n, 8 * this.size - 1);
            (r > e || r < -(e + x)) &&
              this._throwError("value out-of-bounds", t),
              (r = (0, a.JJ)(r, 8 * i.Yx));
          } else
            (r < A || r > (0, a.dK)(n, 8 * this.size)) &&
              this._throwError("value out-of-bounds", t);
          return e.writeValue(r);
        }
        decode(e) {
          let t = (0, a.dK)(e.readValue(), 8 * this.size);
          return this.signed && (t = (0, a.ST)(t, 8 * this.size)), t;
        }
      }
      var M = r(30167);
      class S extends g {
        constructor(e) {
          super("string", e);
        }
        defaultValue() {
          return "";
        }
        encode(e, t) {
          return super.encode(e, (0, M.YW)(o.V.dereference(t, "string")));
        }
        decode(e) {
          return (0, M._v)(super.decode(e));
        }
      }
      class P extends i.Ue {
        coders;
        constructor(e, t) {
          let r = !1,
            n = [];
          e.forEach((e) => {
            e.dynamic && (r = !0), n.push(e.type);
          }),
            super("tuple", "tuple(" + n.join(",") + ")", t, r),
            (0, u.n)(this, { coders: Object.freeze(e.slice()) });
        }
        defaultValue() {
          let e = [];
          this.coders.forEach((t) => {
            e.push(t.defaultValue());
          });
          let t = this.coders.reduce((e, t) => {
            let r = t.localName;
            return r && (e[r] || (e[r] = 0), e[r]++), e;
          }, {});
          return (
            this.coders.forEach((r, n) => {
              let i = r.localName;
              i &&
                1 === t[i] &&
                ("length" === i && (i = "_length"),
                null == e[i] && (e[i] = e[n]));
            }),
            Object.freeze(e)
          );
        }
        encode(e, t) {
          let r = o.V.dereference(t, "tuple");
          return c(e, this.coders, r);
        }
        decode(e) {
          return d(e, this.coders);
        }
      }
      var O = r(67730);
      let I = new Map();
      I.set(0, "GENERIC_PANIC"),
        I.set(1, "ASSERT_FALSE"),
        I.set(17, "OVERFLOW"),
        I.set(18, "DIVIDE_BY_ZERO"),
        I.set(33, "ENUM_RANGE_ERROR"),
        I.set(34, "BAD_STORAGE_DATA"),
        I.set(49, "STACK_UNDERFLOW"),
        I.set(50, "ARRAY_RANGE_ERROR"),
        I.set(65, "OUT_OF_MEMORY"),
        I.set(81, "UNINITIALIZED_FUNCTION_CALL");
      let k = new RegExp(/^bytes([0-9]*)$/),
        N = new RegExp(/^(u?int)([0-9]*)$/),
        C = null,
        B = 1024;
      class T {
        #ty(e) {
          if (e.isArray())
            return new h(this.#ty(e.arrayChildren), e.arrayLength, e.name);
          if (e.isTuple())
            return new P(
              e.components.map((e) => this.#ty(e)),
              e.name
            );
          switch (e.baseType) {
            case "address":
              return new l(e.name);
            case "bool":
              return new p(e.name);
            case "string":
              return new S(e.name);
            case "bytes":
              return new m(e.name);
            case "":
              return new w(e.name);
          }
          let t = e.type.match(N);
          if (t) {
            let r = parseInt(t[2] || "256");
            return (
              (0, n.MR)(
                0 !== r && r <= 256 && r % 8 == 0,
                "invalid " + t[1] + " bit length",
                "param",
                e
              ),
              new R(r / 8, "int" === t[1], e.name)
            );
          }
          if ((t = e.type.match(k))) {
            let r = parseInt(t[1]);
            return (
              (0, n.MR)(0 !== r && r <= 32, "invalid bytes length", "param", e),
              new y(r, e.name)
            );
          }
          (0, n.MR)(!1, "invalid type", "type", e.type);
        }
        getDefaultValue(e) {
          return new P(
            e.map((e) => this.#ty(O.aX.from(e))),
            "_"
          ).defaultValue();
        }
        encode(e, t) {
          (0, n.dd)(t.length, e.length, "types/values length mismatch");
          let r = new P(
              e.map((e) => this.#ty(O.aX.from(e))),
              "_"
            ),
            s = new i.AU();
          return r.encode(s, t), s.data;
        }
        decode(e, t, r) {
          return new P(
            e.map((e) => this.#ty(O.aX.from(e))),
            "_"
          ).decode(new i.mP(t, r, B));
        }
        static _setDefaultMaxInflation(e) {
          (0, n.MR)(
            "number" == typeof e && Number.isInteger(e),
            "invalid defaultMaxInflation factor",
            "value",
            e
          ),
            (B = e);
        }
        static defaultAbiCoder() {
          return null == C && (C = new T()), C;
        }
        static getBuiltinCallException(e, t, r) {
          return (function (e, t, r, i) {
            let a = "missing revert data",
              o = null,
              l = null;
            if (r) {
              a = "execution reverted";
              let e = (0, b.q5)(r);
              if (((r = (0, b.c$)(r)), 0 === e.length))
                (a += " (no data present; likely require(false) occurred"),
                  (o = "require(false)");
              else if (e.length % 32 != 4)
                a += " (could not decode reason; invalid data length)";
              else if ("0x08c379a0" === (0, b.c$)(e.slice(0, 4)))
                try {
                  (o = i.decode(["string"], e.slice(4))[0]),
                    (l = {
                      signature: "Error(string)",
                      name: "Error",
                      args: [o],
                    }),
                    (a += `: ${JSON.stringify(o)}`);
                } catch (e) {
                  a += " (could not decode reason; invalid string data)";
                }
              else if ("0x4e487b71" === (0, b.c$)(e.slice(0, 4)))
                try {
                  let t = Number(i.decode(["uint256"], e.slice(4))[0]);
                  (l = {
                    signature: "Panic(uint256)",
                    name: "Panic",
                    args: [t],
                  }),
                    (o = `Panic due to ${I.get(t) || "UNKNOWN"}(${t})`),
                    (a += `: ${o}`);
                } catch (e) {
                  a += " (could not decode panic code)";
                }
              else a += " (unknown custom error)";
            }
            let u = { to: t.to ? (0, s.b)(t.to) : null, data: t.data || "0x" };
            return (
              t.from && (u.from = (0, s.b)(t.from)),
              (0, n.xz)(a, "CALL_EXCEPTION", {
                action: e,
                data: r,
                reason: o,
                transaction: u,
                invocation: null,
                revert: l,
              })
            );
          })(e, t, r, T.defaultAbiCoder());
        }
      }
    },
    71379: (e, t, r) => {
      "use strict";
      var n = r(42539),
        i = r(21574);
      function s() {
        if (!(this instanceof s)) return new s();
        i.call(this),
          (this.h = [
            0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939, 0xffc00b31,
            0x68581511, 0x64f98fa7, 0xbefa4fa4,
          ]);
      }
      n.inherits(s, i),
        (e.exports = s),
        (s.blockSize = 512),
        (s.outSize = 224),
        (s.hmacStrength = 192),
        (s.padLength = 64),
        (s.prototype._digest = function (e) {
          return "hex" === e
            ? n.toHex32(this.h.slice(0, 7), "big")
            : n.split32(this.h.slice(0, 7), "big");
        });
    },
    71469: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          default: function () {
            return l;
          },
          getImageProps: function () {
            return o;
          },
        });
      let n = r(88229),
        i = r(38883),
        s = r(33063),
        a = n._(r(51193));
      function o(e) {
        let { props: t } = (0, i.getImgProps)(e, {
          defaultLoader: a.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1,
          },
        });
        for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
        return { props: t };
      }
      let l = s.Image;
    },
    71861: (e, t, r) => {
      "use strict";
      var n = r(42539),
        i = r(23124);
      function s(e, t, r) {
        if (!(this instanceof s)) return new s(e, t, r);
        (this.Hash = e),
          (this.blockSize = e.blockSize / 8),
          (this.outSize = e.outSize / 8),
          (this.inner = null),
          (this.outer = null),
          this._init(n.toArray(t, r));
      }
      (e.exports = s),
        (s.prototype._init = function (e) {
          e.length > this.blockSize && (e = new this.Hash().update(e).digest()),
            i(e.length <= this.blockSize);
          for (var t = e.length; t < this.blockSize; t++) e.push(0);
          for (t = 0; t < e.length; t++) e[t] ^= 54;
          for (t = 0, this.inner = new this.Hash().update(e); t < e.length; t++)
            e[t] ^= 106;
          this.outer = new this.Hash().update(e);
        }),
        (s.prototype.update = function (e, t) {
          return this.inner.update(e, t), this;
        }),
        (s.prototype.digest = function (e) {
          return this.outer.update(this.inner.digest()), this.outer.digest(e);
        });
    },
    72312: (e, t, r) => {
      "use strict";
      var n = r(12115),
        i = r(81960),
        s =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        a = i.useSyncExternalStore,
        o = n.useRef,
        l = n.useEffect,
        u = n.useMemo,
        f = n.useDebugValue;
      t.useSyncExternalStoreWithSelector = function (e, t, r, n, i) {
        var c = o(null);
        if (null === c.current) {
          var d = { hasValue: !1, value: null };
          c.current = d;
        } else d = c.current;
        var h = a(
          e,
          (c = u(
            function () {
              function e(e) {
                if (!l) {
                  if (
                    ((l = !0), (a = e), (e = n(e)), void 0 !== i && d.hasValue)
                  ) {
                    var t = d.value;
                    if (i(t, e)) return (o = t);
                  }
                  return (o = e);
                }
                if (((t = o), s(a, e))) return t;
                var r = n(e);
                return void 0 !== i && i(t, r)
                  ? ((a = e), t)
                  : ((a = e), (o = r));
              }
              var a,
                o,
                l = !1,
                u = void 0 === r ? null : r;
              return [
                function () {
                  return e(t());
                },
                null === u
                  ? void 0
                  : function () {
                      return e(u());
                    },
              ];
            },
            [t, r, n, i]
          ))[0],
          c[1]
        );
        return (
          l(
            function () {
              (d.hasValue = !0), (d.value = h);
            },
            [h]
          ),
          f(h),
          h
        );
      };
    },
    72371: (e, t, r) => {
      "use strict";
      var n = r(57946),
        i = r(72667),
        s = r(84115),
        a = r(88628),
        o = n.assert;
      function l(e) {
        (this.twisted = (0 | e.a) != 1),
          (this.mOneA = this.twisted && (0 | e.a) == -1),
          (this.extended = this.mOneA),
          a.call(this, "edwards", e),
          (this.a = new i(e.a, 16).umod(this.red.m)),
          (this.a = this.a.toRed(this.red)),
          (this.c = new i(e.c, 16).toRed(this.red)),
          (this.c2 = this.c.redSqr()),
          (this.d = new i(e.d, 16).toRed(this.red)),
          (this.dd = this.d.redAdd(this.d)),
          o(!this.twisted || 0 === this.c.fromRed().cmpn(1)),
          (this.oneC = (0 | e.c) == 1);
      }
      function u(e, t, r, n, s) {
        a.BasePoint.call(this, e, "projective"),
          null === t && null === r && null === n
            ? ((this.x = this.curve.zero),
              (this.y = this.curve.one),
              (this.z = this.curve.one),
              (this.t = this.curve.zero),
              (this.zOne = !0))
            : ((this.x = new i(t, 16)),
              (this.y = new i(r, 16)),
              (this.z = n ? new i(n, 16) : this.curve.one),
              (this.t = s && new i(s, 16)),
              this.x.red || (this.x = this.x.toRed(this.curve.red)),
              this.y.red || (this.y = this.y.toRed(this.curve.red)),
              this.z.red || (this.z = this.z.toRed(this.curve.red)),
              this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)),
              (this.zOne = this.z === this.curve.one),
              this.curve.extended &&
                !this.t &&
                ((this.t = this.x.redMul(this.y)),
                this.zOne || (this.t = this.t.redMul(this.z.redInvm()))));
      }
      s(l, a),
        (e.exports = l),
        (l.prototype._mulA = function (e) {
          return this.mOneA ? e.redNeg() : this.a.redMul(e);
        }),
        (l.prototype._mulC = function (e) {
          return this.oneC ? e : this.c.redMul(e);
        }),
        (l.prototype.jpoint = function (e, t, r, n) {
          return this.point(e, t, r, n);
        }),
        (l.prototype.pointFromX = function (e, t) {
          (e = new i(e, 16)).red || (e = e.toRed(this.red));
          var r = e.redSqr(),
            n = this.c2.redSub(this.a.redMul(r)),
            s = this.one.redSub(this.c2.redMul(this.d).redMul(r)),
            a = n.redMul(s.redInvm()),
            o = a.redSqrt();
          if (0 !== o.redSqr().redSub(a).cmp(this.zero))
            throw Error("invalid point");
          var l = o.fromRed().isOdd();
          return ((t && !l) || (!t && l)) && (o = o.redNeg()), this.point(e, o);
        }),
        (l.prototype.pointFromY = function (e, t) {
          (e = new i(e, 16)).red || (e = e.toRed(this.red));
          var r = e.redSqr(),
            n = r.redSub(this.c2),
            s = r.redMul(this.d).redMul(this.c2).redSub(this.a),
            a = n.redMul(s.redInvm());
          if (0 === a.cmp(this.zero))
            if (!t) return this.point(this.zero, e);
            else throw Error("invalid point");
          var o = a.redSqrt();
          if (0 !== o.redSqr().redSub(a).cmp(this.zero))
            throw Error("invalid point");
          return (
            o.fromRed().isOdd() !== t && (o = o.redNeg()), this.point(o, e)
          );
        }),
        (l.prototype.validate = function (e) {
          if (e.isInfinity()) return !0;
          e.normalize();
          var t = e.x.redSqr(),
            r = e.y.redSqr(),
            n = t.redMul(this.a).redAdd(r),
            i = this.c2.redMul(this.one.redAdd(this.d.redMul(t).redMul(r)));
          return 0 === n.cmp(i);
        }),
        s(u, a.BasePoint),
        (l.prototype.pointFromJSON = function (e) {
          return u.fromJSON(this, e);
        }),
        (l.prototype.point = function (e, t, r, n) {
          return new u(this, e, t, r, n);
        }),
        (u.fromJSON = function (e, t) {
          return new u(e, t[0], t[1], t[2]);
        }),
        (u.prototype.inspect = function () {
          return this.isInfinity()
            ? "<EC Point Infinity>"
            : "<EC Point x: " +
                this.x.fromRed().toString(16, 2) +
                " y: " +
                this.y.fromRed().toString(16, 2) +
                " z: " +
                this.z.fromRed().toString(16, 2) +
                ">";
        }),
        (u.prototype.isInfinity = function () {
          return (
            0 === this.x.cmpn(0) &&
            (0 === this.y.cmp(this.z) ||
              (this.zOne && 0 === this.y.cmp(this.curve.c)))
          );
        }),
        (u.prototype._extDbl = function () {
          var e = this.x.redSqr(),
            t = this.y.redSqr(),
            r = this.z.redSqr();
          r = r.redIAdd(r);
          var n = this.curve._mulA(e),
            i = this.x.redAdd(this.y).redSqr().redISub(e).redISub(t),
            s = n.redAdd(t),
            a = s.redSub(r),
            o = n.redSub(t),
            l = i.redMul(a),
            u = s.redMul(o),
            f = i.redMul(o),
            c = a.redMul(s);
          return this.curve.point(l, u, c, f);
        }),
        (u.prototype._projDbl = function () {
          var e,
            t,
            r,
            n,
            i,
            s,
            a = this.x.redAdd(this.y).redSqr(),
            o = this.x.redSqr(),
            l = this.y.redSqr();
          if (this.curve.twisted) {
            var u = (n = this.curve._mulA(o)).redAdd(l);
            this.zOne
              ? ((e = a.redSub(o).redSub(l).redMul(u.redSub(this.curve.two))),
                (t = u.redMul(n.redSub(l))),
                (r = u.redSqr().redSub(u).redSub(u)))
              : ((i = this.z.redSqr()),
                (s = u.redSub(i).redISub(i)),
                (e = a.redSub(o).redISub(l).redMul(s)),
                (t = u.redMul(n.redSub(l))),
                (r = u.redMul(s)));
          } else
            (n = o.redAdd(l)),
              (i = this.curve._mulC(this.z).redSqr()),
              (s = n.redSub(i).redSub(i)),
              (e = this.curve._mulC(a.redISub(n)).redMul(s)),
              (t = this.curve._mulC(n).redMul(o.redISub(l))),
              (r = n.redMul(s));
          return this.curve.point(e, t, r);
        }),
        (u.prototype.dbl = function () {
          return this.isInfinity()
            ? this
            : this.curve.extended
            ? this._extDbl()
            : this._projDbl();
        }),
        (u.prototype._extAdd = function (e) {
          var t = this.y.redSub(this.x).redMul(e.y.redSub(e.x)),
            r = this.y.redAdd(this.x).redMul(e.y.redAdd(e.x)),
            n = this.t.redMul(this.curve.dd).redMul(e.t),
            i = this.z.redMul(e.z.redAdd(e.z)),
            s = r.redSub(t),
            a = i.redSub(n),
            o = i.redAdd(n),
            l = r.redAdd(t),
            u = s.redMul(a),
            f = o.redMul(l),
            c = s.redMul(l),
            d = a.redMul(o);
          return this.curve.point(u, f, d, c);
        }),
        (u.prototype._projAdd = function (e) {
          var t,
            r,
            n = this.z.redMul(e.z),
            i = n.redSqr(),
            s = this.x.redMul(e.x),
            a = this.y.redMul(e.y),
            o = this.curve.d.redMul(s).redMul(a),
            l = i.redSub(o),
            u = i.redAdd(o),
            f = this.x
              .redAdd(this.y)
              .redMul(e.x.redAdd(e.y))
              .redISub(s)
              .redISub(a),
            c = n.redMul(l).redMul(f);
          return (
            this.curve.twisted
              ? ((t = n.redMul(u).redMul(a.redSub(this.curve._mulA(s)))),
                (r = l.redMul(u)))
              : ((t = n.redMul(u).redMul(a.redSub(s))),
                (r = this.curve._mulC(l).redMul(u))),
            this.curve.point(c, t, r)
          );
        }),
        (u.prototype.add = function (e) {
          return this.isInfinity()
            ? e
            : e.isInfinity()
            ? this
            : this.curve.extended
            ? this._extAdd(e)
            : this._projAdd(e);
        }),
        (u.prototype.mul = function (e) {
          return this._hasDoubles(e)
            ? this.curve._fixedNafMul(this, e)
            : this.curve._wnafMul(this, e);
        }),
        (u.prototype.mulAdd = function (e, t, r) {
          return this.curve._wnafMulAdd(1, [this, t], [e, r], 2, !1);
        }),
        (u.prototype.jmulAdd = function (e, t, r) {
          return this.curve._wnafMulAdd(1, [this, t], [e, r], 2, !0);
        }),
        (u.prototype.normalize = function () {
          if (this.zOne) return this;
          var e = this.z.redInvm();
          return (
            (this.x = this.x.redMul(e)),
            (this.y = this.y.redMul(e)),
            this.t && (this.t = this.t.redMul(e)),
            (this.z = this.curve.one),
            (this.zOne = !0),
            this
          );
        }),
        (u.prototype.neg = function () {
          return this.curve.point(
            this.x.redNeg(),
            this.y,
            this.z,
            this.t && this.t.redNeg()
          );
        }),
        (u.prototype.getX = function () {
          return this.normalize(), this.x.fromRed();
        }),
        (u.prototype.getY = function () {
          return this.normalize(), this.y.fromRed();
        }),
        (u.prototype.eq = function (e) {
          return (
            this === e ||
            (0 === this.getX().cmp(e.getX()) && 0 === this.getY().cmp(e.getY()))
          );
        }),
        (u.prototype.eqXToP = function (e) {
          var t = e.toRed(this.curve.red).redMul(this.z);
          if (0 === this.x.cmp(t)) return !0;
          for (var r = e.clone(), n = this.curve.redN.redMul(this.z); ; ) {
            if ((r.iadd(this.curve.n), r.cmp(this.curve.p) >= 0)) return !1;
            if ((t.redIAdd(n), 0 === this.x.cmp(t))) return !0;
          }
        }),
        (u.prototype.toP = u.prototype.normalize),
        (u.prototype.mixedAdd = u.prototype.add);
    },
    72667: function (e, t, r) {
      !(function (e, t) {
        "use strict";
        function n(e, t) {
          if (!e) throw Error(t || "Assertion failed");
        }
        function i(e, t) {
          e.super_ = t;
          var r = function () {};
          (r.prototype = t.prototype),
            (e.prototype = new r()),
            (e.prototype.constructor = e);
        }
        function s(e, t, r) {
          if (s.isBN(e)) return e;
          (this.negative = 0),
            (this.words = null),
            (this.length = 0),
            (this.red = null),
            null !== e &&
              (("le" === t || "be" === t) && ((r = t), (t = 10)),
              this._init(e || 0, t || 10, r || "be"));
        }
        "object" == typeof e ? (e.exports = s) : (t.BN = s),
          (s.BN = s),
          (s.wordSize = 26);
        try {
          u =
            "undefined" != typeof window && void 0 !== window.Buffer
              ? window.Buffer
              : r(79368).Buffer;
        } catch (e) {}
        function a(e, t) {
          var r = e.charCodeAt(t);
          return r >= 65 && r <= 70
            ? r - 55
            : r >= 97 && r <= 102
            ? r - 87
            : (r - 48) & 15;
        }
        function o(e, t, r) {
          var n = a(e, r);
          return r - 1 >= t && (n |= a(e, r - 1) << 4), n;
        }
        function l(e, t, r, n) {
          for (var i = 0, s = Math.min(e.length, r), a = t; a < s; a++) {
            var o = e.charCodeAt(a) - 48;
            (i *= n),
              o >= 49
                ? (i += o - 49 + 10)
                : o >= 17
                ? (i += o - 17 + 10)
                : (i += o);
          }
          return i;
        }
        (s.isBN = function (e) {
          return (
            e instanceof s ||
            (null !== e &&
              "object" == typeof e &&
              e.constructor.wordSize === s.wordSize &&
              Array.isArray(e.words))
          );
        }),
          (s.max = function (e, t) {
            return e.cmp(t) > 0 ? e : t;
          }),
          (s.min = function (e, t) {
            return 0 > e.cmp(t) ? e : t;
          }),
          (s.prototype._init = function (e, t, r) {
            if ("number" == typeof e) return this._initNumber(e, t, r);
            if ("object" == typeof e) return this._initArray(e, t, r);
            "hex" === t && (t = 16), n(t === (0 | t) && t >= 2 && t <= 36);
            var i = 0;
            "-" === (e = e.toString().replace(/\s+/g, ""))[0] &&
              (i++, (this.negative = 1)),
              i < e.length &&
                (16 === t
                  ? this._parseHex(e, i, r)
                  : (this._parseBase(e, t, i),
                    "le" === r && this._initArray(this.toArray(), t, r)));
          }),
          (s.prototype._initNumber = function (e, t, r) {
            e < 0 && ((this.negative = 1), (e = -e)),
              e < 0x4000000
                ? ((this.words = [0x3ffffff & e]), (this.length = 1))
                : e < 0x10000000000000
                ? ((this.words = [0x3ffffff & e, (e / 0x4000000) & 0x3ffffff]),
                  (this.length = 2))
                : (n(e < 0x20000000000000),
                  (this.words = [
                    0x3ffffff & e,
                    (e / 0x4000000) & 0x3ffffff,
                    1,
                  ]),
                  (this.length = 3)),
              "le" === r && this._initArray(this.toArray(), t, r);
          }),
          (s.prototype._initArray = function (e, t, r) {
            if ((n("number" == typeof e.length), e.length <= 0))
              return (this.words = [0]), (this.length = 1), this;
            (this.length = Math.ceil(e.length / 3)),
              (this.words = Array(this.length));
            for (var i, s, a = 0; a < this.length; a++) this.words[a] = 0;
            var o = 0;
            if ("be" === r)
              for (a = e.length - 1, i = 0; a >= 0; a -= 3)
                (s = e[a] | (e[a - 1] << 8) | (e[a - 2] << 16)),
                  (this.words[i] |= (s << o) & 0x3ffffff),
                  (this.words[i + 1] = (s >>> (26 - o)) & 0x3ffffff),
                  (o += 24) >= 26 && ((o -= 26), i++);
            else if ("le" === r)
              for (a = 0, i = 0; a < e.length; a += 3)
                (s = e[a] | (e[a + 1] << 8) | (e[a + 2] << 16)),
                  (this.words[i] |= (s << o) & 0x3ffffff),
                  (this.words[i + 1] = (s >>> (26 - o)) & 0x3ffffff),
                  (o += 24) >= 26 && ((o -= 26), i++);
            return this.strip();
          }),
          (s.prototype._parseHex = function (e, t, r) {
            (this.length = Math.ceil((e.length - t) / 6)),
              (this.words = Array(this.length));
            for (var n, i = 0; i < this.length; i++) this.words[i] = 0;
            var s = 0,
              a = 0;
            if ("be" === r)
              for (i = e.length - 1; i >= t; i -= 2)
                (n = o(e, t, i) << s),
                  (this.words[a] |= 0x3ffffff & n),
                  s >= 18
                    ? ((s -= 18), (a += 1), (this.words[a] |= n >>> 26))
                    : (s += 8);
            else
              for (
                i = (e.length - t) % 2 == 0 ? t + 1 : t;
                i < e.length;
                i += 2
              )
                (n = o(e, t, i) << s),
                  (this.words[a] |= 0x3ffffff & n),
                  s >= 18
                    ? ((s -= 18), (a += 1), (this.words[a] |= n >>> 26))
                    : (s += 8);
            this.strip();
          }),
          (s.prototype._parseBase = function (e, t, r) {
            (this.words = [0]), (this.length = 1);
            for (var n = 0, i = 1; i <= 0x3ffffff; i *= t) n++;
            n--, (i = (i / t) | 0);
            for (
              var s = e.length - r,
                a = s % n,
                o = Math.min(s, s - a) + r,
                u = 0,
                f = r;
              f < o;
              f += n
            )
              (u = l(e, f, f + n, t)),
                this.imuln(i),
                this.words[0] + u < 0x4000000
                  ? (this.words[0] += u)
                  : this._iaddn(u);
            if (0 !== a) {
              var c = 1;
              for (u = l(e, f, e.length, t), f = 0; f < a; f++) c *= t;
              this.imuln(c),
                this.words[0] + u < 0x4000000
                  ? (this.words[0] += u)
                  : this._iaddn(u);
            }
            this.strip();
          }),
          (s.prototype.copy = function (e) {
            e.words = Array(this.length);
            for (var t = 0; t < this.length; t++) e.words[t] = this.words[t];
            (e.length = this.length),
              (e.negative = this.negative),
              (e.red = this.red);
          }),
          (s.prototype.clone = function () {
            var e = new s(null);
            return this.copy(e), e;
          }),
          (s.prototype._expand = function (e) {
            for (; this.length < e; ) this.words[this.length++] = 0;
            return this;
          }),
          (s.prototype.strip = function () {
            for (; this.length > 1 && 0 === this.words[this.length - 1]; )
              this.length--;
            return this._normSign();
          }),
          (s.prototype._normSign = function () {
            return (
              1 === this.length && 0 === this.words[0] && (this.negative = 0),
              this
            );
          }),
          (s.prototype.inspect = function () {
            return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
          });
        var u,
          f = [
            "",
            "0",
            "00",
            "000",
            "0000",
            "00000",
            "000000",
            "0000000",
            "00000000",
            "000000000",
            "0000000000",
            "00000000000",
            "000000000000",
            "0000000000000",
            "00000000000000",
            "000000000000000",
            "0000000000000000",
            "00000000000000000",
            "000000000000000000",
            "0000000000000000000",
            "00000000000000000000",
            "000000000000000000000",
            "0000000000000000000000",
            "00000000000000000000000",
            "000000000000000000000000",
            "0000000000000000000000000",
          ],
          c = [
            0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6,
            5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
          ],
          d = [
            0, 0, 0x2000000, 0x290d741, 0x1000000, 0x2e90edd, 0x39aa400,
            0x267bf47, 0x1000000, 0x290d741, 1e7, 0x12959c3, 0x222c000,
            0x3bd7765, 7529536, 0xadcea1, 0x1000000, 0x1704f61, 0x206fc40,
            0x2cddcf9, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625,
            0xb54ba0, 0xdaf26b, 0x1069c00, 0x138f9ad, 243e5, 0x1b4d89f,
            0x2000000, 0x25528a1, 0x2b54a20, 0x3216b93, 0x39aa400,
          ];
        function h(e, t, r) {
          r.negative = t.negative ^ e.negative;
          var n = (e.length + t.length) | 0;
          (r.length = n), (n = (n - 1) | 0);
          var i = 0 | e.words[0],
            s = 0 | t.words[0],
            a = i * s,
            o = 0x3ffffff & a,
            l = (a / 0x4000000) | 0;
          r.words[0] = o;
          for (var u = 1; u < n; u++) {
            for (
              var f = l >>> 26,
                c = 0x3ffffff & l,
                d = Math.min(u, t.length - 1),
                h = Math.max(0, u - e.length + 1);
              h <= d;
              h++
            ) {
              var p = (u - h) | 0;
              (f +=
                ((a = (i = 0 | e.words[p]) * (s = 0 | t.words[h]) + c) /
                  0x4000000) |
                0),
                (c = 0x3ffffff & a);
            }
            (r.words[u] = 0 | c), (l = 0 | f);
          }
          return 0 !== l ? (r.words[u] = 0 | l) : r.length--, r.strip();
        }
        (s.prototype.toString = function (e, t) {
          if (((t = 0 | t || 1), 16 === (e = e || 10) || "hex" === e)) {
            for (var r = "", i = 0, s = 0, a = 0; a < this.length; a++) {
              var o = this.words[a],
                l = (((o << i) | s) & 0xffffff).toString(16);
              (s = (o >>> (24 - i)) & 0xffffff),
                (i += 2) >= 26 && ((i -= 26), a--),
                (r =
                  0 !== s || a !== this.length - 1
                    ? f[6 - l.length] + l + r
                    : l + r);
            }
            for (0 !== s && (r = s.toString(16) + r); r.length % t != 0; )
              r = "0" + r;
            return 0 !== this.negative && (r = "-" + r), r;
          }
          if (e === (0 | e) && e >= 2 && e <= 36) {
            var u = c[e],
              h = d[e];
            r = "";
            var p = this.clone();
            for (p.negative = 0; !p.isZero(); ) {
              var b = p.modn(h).toString(e);
              r = (p = p.idivn(h)).isZero() ? b + r : f[u - b.length] + b + r;
            }
            for (this.isZero() && (r = "0" + r); r.length % t != 0; )
              r = "0" + r;
            return 0 !== this.negative && (r = "-" + r), r;
          }
          n(!1, "Base should be between 2 and 36");
        }),
          (s.prototype.toNumber = function () {
            var e = this.words[0];
            return (
              2 === this.length
                ? (e += 0x4000000 * this.words[1])
                : 3 === this.length && 1 === this.words[2]
                ? (e += 0x10000000000000 + 0x4000000 * this.words[1])
                : this.length > 2 &&
                  n(!1, "Number can only safely store up to 53 bits"),
              0 !== this.negative ? -e : e
            );
          }),
          (s.prototype.toJSON = function () {
            return this.toString(16);
          }),
          (s.prototype.toBuffer = function (e, t) {
            return n(void 0 !== u), this.toArrayLike(u, e, t);
          }),
          (s.prototype.toArray = function (e, t) {
            return this.toArrayLike(Array, e, t);
          }),
          (s.prototype.toArrayLike = function (e, t, r) {
            var i,
              s,
              a = this.byteLength(),
              o = r || Math.max(1, a);
            n(a <= o, "byte array longer than desired length"),
              n(o > 0, "Requested array length <= 0"),
              this.strip();
            var l = new e(o),
              u = this.clone();
            if ("le" === t) {
              for (s = 0; !u.isZero(); s++)
                (i = u.andln(255)), u.iushrn(8), (l[s] = i);
              for (; s < o; s++) l[s] = 0;
            } else {
              for (s = 0; s < o - a; s++) l[s] = 0;
              for (s = 0; !u.isZero(); s++)
                (i = u.andln(255)), u.iushrn(8), (l[o - s - 1] = i);
            }
            return l;
          }),
          Math.clz32
            ? (s.prototype._countBits = function (e) {
                return 32 - Math.clz32(e);
              })
            : (s.prototype._countBits = function (e) {
                var t = e,
                  r = 0;
                return (
                  t >= 4096 && ((r += 13), (t >>>= 13)),
                  t >= 64 && ((r += 7), (t >>>= 7)),
                  t >= 8 && ((r += 4), (t >>>= 4)),
                  t >= 2 && ((r += 2), (t >>>= 2)),
                  r + t
                );
              }),
          (s.prototype._zeroBits = function (e) {
            if (0 === e) return 26;
            var t = e,
              r = 0;
            return (
              (8191 & t) == 0 && ((r += 13), (t >>>= 13)),
              (127 & t) == 0 && ((r += 7), (t >>>= 7)),
              (15 & t) == 0 && ((r += 4), (t >>>= 4)),
              (3 & t) == 0 && ((r += 2), (t >>>= 2)),
              (1 & t) == 0 && r++,
              r
            );
          }),
          (s.prototype.bitLength = function () {
            var e = this.words[this.length - 1],
              t = this._countBits(e);
            return (this.length - 1) * 26 + t;
          }),
          (s.prototype.zeroBits = function () {
            if (this.isZero()) return 0;
            for (var e = 0, t = 0; t < this.length; t++) {
              var r = this._zeroBits(this.words[t]);
              if (((e += r), 26 !== r)) break;
            }
            return e;
          }),
          (s.prototype.byteLength = function () {
            return Math.ceil(this.bitLength() / 8);
          }),
          (s.prototype.toTwos = function (e) {
            return 0 !== this.negative
              ? this.abs().inotn(e).iaddn(1)
              : this.clone();
          }),
          (s.prototype.fromTwos = function (e) {
            return this.testn(e - 1)
              ? this.notn(e).iaddn(1).ineg()
              : this.clone();
          }),
          (s.prototype.isNeg = function () {
            return 0 !== this.negative;
          }),
          (s.prototype.neg = function () {
            return this.clone().ineg();
          }),
          (s.prototype.ineg = function () {
            return this.isZero() || (this.negative ^= 1), this;
          }),
          (s.prototype.iuor = function (e) {
            for (; this.length < e.length; ) this.words[this.length++] = 0;
            for (var t = 0; t < e.length; t++)
              this.words[t] = this.words[t] | e.words[t];
            return this.strip();
          }),
          (s.prototype.ior = function (e) {
            return n((this.negative | e.negative) == 0), this.iuor(e);
          }),
          (s.prototype.or = function (e) {
            return this.length > e.length
              ? this.clone().ior(e)
              : e.clone().ior(this);
          }),
          (s.prototype.uor = function (e) {
            return this.length > e.length
              ? this.clone().iuor(e)
              : e.clone().iuor(this);
          }),
          (s.prototype.iuand = function (e) {
            var t;
            t = this.length > e.length ? e : this;
            for (var r = 0; r < t.length; r++)
              this.words[r] = this.words[r] & e.words[r];
            return (this.length = t.length), this.strip();
          }),
          (s.prototype.iand = function (e) {
            return n((this.negative | e.negative) == 0), this.iuand(e);
          }),
          (s.prototype.and = function (e) {
            return this.length > e.length
              ? this.clone().iand(e)
              : e.clone().iand(this);
          }),
          (s.prototype.uand = function (e) {
            return this.length > e.length
              ? this.clone().iuand(e)
              : e.clone().iuand(this);
          }),
          (s.prototype.iuxor = function (e) {
            this.length > e.length
              ? ((t = this), (r = e))
              : ((t = e), (r = this));
            for (var t, r, n = 0; n < r.length; n++)
              this.words[n] = t.words[n] ^ r.words[n];
            if (this !== t)
              for (; n < t.length; n++) this.words[n] = t.words[n];
            return (this.length = t.length), this.strip();
          }),
          (s.prototype.ixor = function (e) {
            return n((this.negative | e.negative) == 0), this.iuxor(e);
          }),
          (s.prototype.xor = function (e) {
            return this.length > e.length
              ? this.clone().ixor(e)
              : e.clone().ixor(this);
          }),
          (s.prototype.uxor = function (e) {
            return this.length > e.length
              ? this.clone().iuxor(e)
              : e.clone().iuxor(this);
          }),
          (s.prototype.inotn = function (e) {
            n("number" == typeof e && e >= 0);
            var t = 0 | Math.ceil(e / 26),
              r = e % 26;
            this._expand(t), r > 0 && t--;
            for (var i = 0; i < t; i++)
              this.words[i] = 0x3ffffff & ~this.words[i];
            return (
              r > 0 &&
                (this.words[i] = ~this.words[i] & (0x3ffffff >> (26 - r))),
              this.strip()
            );
          }),
          (s.prototype.notn = function (e) {
            return this.clone().inotn(e);
          }),
          (s.prototype.setn = function (e, t) {
            n("number" == typeof e && e >= 0);
            var r = (e / 26) | 0,
              i = e % 26;
            return (
              this._expand(r + 1),
              t
                ? (this.words[r] = this.words[r] | (1 << i))
                : (this.words[r] = this.words[r] & ~(1 << i)),
              this.strip()
            );
          }),
          (s.prototype.iadd = function (e) {
            if (0 !== this.negative && 0 === e.negative)
              return (
                (this.negative = 0),
                (t = this.isub(e)),
                (this.negative ^= 1),
                this._normSign()
              );
            if (0 === this.negative && 0 !== e.negative)
              return (
                (e.negative = 0),
                (t = this.isub(e)),
                (e.negative = 1),
                t._normSign()
              );
            this.length > e.length
              ? ((r = this), (n = e))
              : ((r = e), (n = this));
            for (var t, r, n, i = 0, s = 0; s < n.length; s++)
              (t = (0 | r.words[s]) + (0 | n.words[s]) + i),
                (this.words[s] = 0x3ffffff & t),
                (i = t >>> 26);
            for (; 0 !== i && s < r.length; s++)
              (t = (0 | r.words[s]) + i),
                (this.words[s] = 0x3ffffff & t),
                (i = t >>> 26);
            if (((this.length = r.length), 0 !== i))
              (this.words[this.length] = i), this.length++;
            else if (r !== this)
              for (; s < r.length; s++) this.words[s] = r.words[s];
            return this;
          }),
          (s.prototype.add = function (e) {
            var t;
            return 0 !== e.negative && 0 === this.negative
              ? ((e.negative = 0), (t = this.sub(e)), (e.negative ^= 1), t)
              : 0 === e.negative && 0 !== this.negative
              ? ((this.negative = 0), (t = e.sub(this)), (this.negative = 1), t)
              : this.length > e.length
              ? this.clone().iadd(e)
              : e.clone().iadd(this);
          }),
          (s.prototype.isub = function (e) {
            if (0 !== e.negative) {
              e.negative = 0;
              var t,
                r,
                n = this.iadd(e);
              return (e.negative = 1), n._normSign();
            }
            if (0 !== this.negative)
              return (
                (this.negative = 0),
                this.iadd(e),
                (this.negative = 1),
                this._normSign()
              );
            var i = this.cmp(e);
            if (0 === i)
              return (
                (this.negative = 0),
                (this.length = 1),
                (this.words[0] = 0),
                this
              );
            i > 0 ? ((t = this), (r = e)) : ((t = e), (r = this));
            for (var s = 0, a = 0; a < r.length; a++)
              (s = (n = (0 | t.words[a]) - (0 | r.words[a]) + s) >> 26),
                (this.words[a] = 0x3ffffff & n);
            for (; 0 !== s && a < t.length; a++)
              (s = (n = (0 | t.words[a]) + s) >> 26),
                (this.words[a] = 0x3ffffff & n);
            if (0 === s && a < t.length && t !== this)
              for (; a < t.length; a++) this.words[a] = t.words[a];
            return (
              (this.length = Math.max(this.length, a)),
              t !== this && (this.negative = 1),
              this.strip()
            );
          }),
          (s.prototype.sub = function (e) {
            return this.clone().isub(e);
          });
        var p = function (e, t, r) {
          var n,
            i,
            s,
            a = e.words,
            o = t.words,
            l = r.words,
            u = 0,
            f = 0 | a[0],
            c = 8191 & f,
            d = f >>> 13,
            h = 0 | a[1],
            p = 8191 & h,
            b = h >>> 13,
            g = 0 | a[2],
            m = 8191 & g,
            y = g >>> 13,
            v = 0 | a[3],
            w = 8191 & v,
            A = v >>> 13,
            x = 0 | a[4],
            E = 8191 & x,
            R = x >>> 13,
            M = 0 | a[5],
            S = 8191 & M,
            P = M >>> 13,
            O = 0 | a[6],
            I = 8191 & O,
            k = O >>> 13,
            N = 0 | a[7],
            C = 8191 & N,
            B = N >>> 13,
            T = 0 | a[8],
            L = 8191 & T,
            U = T >>> 13,
            F = 0 | a[9],
            _ = 8191 & F,
            D = F >>> 13,
            j = 0 | o[0],
            z = 8191 & j,
            G = j >>> 13,
            q = 0 | o[1],
            Q = 8191 & q,
            H = q >>> 13,
            V = 0 | o[2],
            J = 8191 & V,
            K = V >>> 13,
            W = 0 | o[3],
            Z = 8191 & W,
            Y = W >>> 13,
            X = 0 | o[4],
            $ = 8191 & X,
            ee = X >>> 13,
            et = 0 | o[5],
            er = 8191 & et,
            en = et >>> 13,
            ei = 0 | o[6],
            es = 8191 & ei,
            ea = ei >>> 13,
            eo = 0 | o[7],
            el = 8191 & eo,
            eu = eo >>> 13,
            ef = 0 | o[8],
            ec = 8191 & ef,
            ed = ef >>> 13,
            eh = 0 | o[9],
            ep = 8191 & eh,
            eb = eh >>> 13;
          (r.negative = e.negative ^ t.negative),
            (r.length = 19),
            (n = Math.imul(c, z));
          var eg =
            (((u + n) | 0) +
              ((8191 & (i = ((i = Math.imul(c, G)) + Math.imul(d, z)) | 0)) <<
                13)) |
            0;
          (u = ((((s = Math.imul(d, G)) + (i >>> 13)) | 0) + (eg >>> 26)) | 0),
            (eg &= 0x3ffffff),
            (n = Math.imul(p, z)),
            (i = ((i = Math.imul(p, G)) + Math.imul(b, z)) | 0),
            (s = Math.imul(b, G)),
            (n = (n + Math.imul(c, Q)) | 0);
          var em =
            (((u + n) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(c, H)) | 0) + Math.imul(d, Q)) | 0)) <<
                13)) |
            0;
          (u =
            ((((s = (s + Math.imul(d, H)) | 0) + (i >>> 13)) | 0) +
              (em >>> 26)) |
            0),
            (em &= 0x3ffffff),
            (n = Math.imul(m, z)),
            (i = ((i = Math.imul(m, G)) + Math.imul(y, z)) | 0),
            (s = Math.imul(y, G)),
            (n = (n + Math.imul(p, Q)) | 0),
            (i = ((i = (i + Math.imul(p, H)) | 0) + Math.imul(b, Q)) | 0),
            (s = (s + Math.imul(b, H)) | 0),
            (n = (n + Math.imul(c, J)) | 0);
          var ey =
            (((u + n) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(c, K)) | 0) + Math.imul(d, J)) | 0)) <<
                13)) |
            0;
          (u =
            ((((s = (s + Math.imul(d, K)) | 0) + (i >>> 13)) | 0) +
              (ey >>> 26)) |
            0),
            (ey &= 0x3ffffff),
            (n = Math.imul(w, z)),
            (i = ((i = Math.imul(w, G)) + Math.imul(A, z)) | 0),
            (s = Math.imul(A, G)),
            (n = (n + Math.imul(m, Q)) | 0),
            (i = ((i = (i + Math.imul(m, H)) | 0) + Math.imul(y, Q)) | 0),
            (s = (s + Math.imul(y, H)) | 0),
            (n = (n + Math.imul(p, J)) | 0),
            (i = ((i = (i + Math.imul(p, K)) | 0) + Math.imul(b, J)) | 0),
            (s = (s + Math.imul(b, K)) | 0),
            (n = (n + Math.imul(c, Z)) | 0);
          var ev =
            (((u + n) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(c, Y)) | 0) + Math.imul(d, Z)) | 0)) <<
                13)) |
            0;
          (u =
            ((((s = (s + Math.imul(d, Y)) | 0) + (i >>> 13)) | 0) +
              (ev >>> 26)) |
            0),
            (ev &= 0x3ffffff),
            (n = Math.imul(E, z)),
            (i = ((i = Math.imul(E, G)) + Math.imul(R, z)) | 0),
            (s = Math.imul(R, G)),
            (n = (n + Math.imul(w, Q)) | 0),
            (i = ((i = (i + Math.imul(w, H)) | 0) + Math.imul(A, Q)) | 0),
            (s = (s + Math.imul(A, H)) | 0),
            (n = (n + Math.imul(m, J)) | 0),
            (i = ((i = (i + Math.imul(m, K)) | 0) + Math.imul(y, J)) | 0),
            (s = (s + Math.imul(y, K)) | 0),
            (n = (n + Math.imul(p, Z)) | 0),
            (i = ((i = (i + Math.imul(p, Y)) | 0) + Math.imul(b, Z)) | 0),
            (s = (s + Math.imul(b, Y)) | 0),
            (n = (n + Math.imul(c, $)) | 0);
          var ew =
            (((u + n) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(c, ee)) | 0) + Math.imul(d, $)) | 0)) <<
                13)) |
            0;
          (u =
            ((((s = (s + Math.imul(d, ee)) | 0) + (i >>> 13)) | 0) +
              (ew >>> 26)) |
            0),
            (ew &= 0x3ffffff),
            (n = Math.imul(S, z)),
            (i = ((i = Math.imul(S, G)) + Math.imul(P, z)) | 0),
            (s = Math.imul(P, G)),
            (n = (n + Math.imul(E, Q)) | 0),
            (i = ((i = (i + Math.imul(E, H)) | 0) + Math.imul(R, Q)) | 0),
            (s = (s + Math.imul(R, H)) | 0),
            (n = (n + Math.imul(w, J)) | 0),
            (i = ((i = (i + Math.imul(w, K)) | 0) + Math.imul(A, J)) | 0),
            (s = (s + Math.imul(A, K)) | 0),
            (n = (n + Math.imul(m, Z)) | 0),
            (i = ((i = (i + Math.imul(m, Y)) | 0) + Math.imul(y, Z)) | 0),
            (s = (s + Math.imul(y, Y)) | 0),
            (n = (n + Math.imul(p, $)) | 0),
            (i = ((i = (i + Math.imul(p, ee)) | 0) + Math.imul(b, $)) | 0),
            (s = (s + Math.imul(b, ee)) | 0),
            (n = (n + Math.imul(c, er)) | 0);
          var eA =
            (((u + n) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(c, en)) | 0) + Math.imul(d, er)) | 0)) <<
                13)) |
            0;
          (u =
            ((((s = (s + Math.imul(d, en)) | 0) + (i >>> 13)) | 0) +
              (eA >>> 26)) |
            0),
            (eA &= 0x3ffffff),
            (n = Math.imul(I, z)),
            (i = ((i = Math.imul(I, G)) + Math.imul(k, z)) | 0),
            (s = Math.imul(k, G)),
            (n = (n + Math.imul(S, Q)) | 0),
            (i = ((i = (i + Math.imul(S, H)) | 0) + Math.imul(P, Q)) | 0),
            (s = (s + Math.imul(P, H)) | 0),
            (n = (n + Math.imul(E, J)) | 0),
            (i = ((i = (i + Math.imul(E, K)) | 0) + Math.imul(R, J)) | 0),
            (s = (s + Math.imul(R, K)) | 0),
            (n = (n + Math.imul(w, Z)) | 0),
            (i = ((i = (i + Math.imul(w, Y)) | 0) + Math.imul(A, Z)) | 0),
            (s = (s + Math.imul(A, Y)) | 0),
            (n = (n + Math.imul(m, $)) | 0),
            (i = ((i = (i + Math.imul(m, ee)) | 0) + Math.imul(y, $)) | 0),
            (s = (s + Math.imul(y, ee)) | 0),
            (n = (n + Math.imul(p, er)) | 0),
            (i = ((i = (i + Math.imul(p, en)) | 0) + Math.imul(b, er)) | 0),
            (s = (s + Math.imul(b, en)) | 0),
            (n = (n + Math.imul(c, es)) | 0);
          var ex =
            (((u + n) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(c, ea)) | 0) + Math.imul(d, es)) | 0)) <<
                13)) |
            0;
          (u =
            ((((s = (s + Math.imul(d, ea)) | 0) + (i >>> 13)) | 0) +
              (ex >>> 26)) |
            0),
            (ex &= 0x3ffffff),
            (n = Math.imul(C, z)),
            (i = ((i = Math.imul(C, G)) + Math.imul(B, z)) | 0),
            (s = Math.imul(B, G)),
            (n = (n + Math.imul(I, Q)) | 0),
            (i = ((i = (i + Math.imul(I, H)) | 0) + Math.imul(k, Q)) | 0),
            (s = (s + Math.imul(k, H)) | 0),
            (n = (n + Math.imul(S, J)) | 0),
            (i = ((i = (i + Math.imul(S, K)) | 0) + Math.imul(P, J)) | 0),
            (s = (s + Math.imul(P, K)) | 0),
            (n = (n + Math.imul(E, Z)) | 0),
            (i = ((i = (i + Math.imul(E, Y)) | 0) + Math.imul(R, Z)) | 0),
            (s = (s + Math.imul(R, Y)) | 0),
            (n = (n + Math.imul(w, $)) | 0),
            (i = ((i = (i + Math.imul(w, ee)) | 0) + Math.imul(A, $)) | 0),
            (s = (s + Math.imul(A, ee)) | 0),
            (n = (n + Math.imul(m, er)) | 0),
            (i = ((i = (i + Math.imul(m, en)) | 0) + Math.imul(y, er)) | 0),
            (s = (s + Math.imul(y, en)) | 0),
            (n = (n + Math.imul(p, es)) | 0),
            (i = ((i = (i + Math.imul(p, ea)) | 0) + Math.imul(b, es)) | 0),
            (s = (s + Math.imul(b, ea)) | 0),
            (n = (n + Math.imul(c, el)) | 0);
          var eE =
            (((u + n) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(c, eu)) | 0) + Math.imul(d, el)) | 0)) <<
                13)) |
            0;
          (u =
            ((((s = (s + Math.imul(d, eu)) | 0) + (i >>> 13)) | 0) +
              (eE >>> 26)) |
            0),
            (eE &= 0x3ffffff),
            (n = Math.imul(L, z)),
            (i = ((i = Math.imul(L, G)) + Math.imul(U, z)) | 0),
            (s = Math.imul(U, G)),
            (n = (n + Math.imul(C, Q)) | 0),
            (i = ((i = (i + Math.imul(C, H)) | 0) + Math.imul(B, Q)) | 0),
            (s = (s + Math.imul(B, H)) | 0),
            (n = (n + Math.imul(I, J)) | 0),
            (i = ((i = (i + Math.imul(I, K)) | 0) + Math.imul(k, J)) | 0),
            (s = (s + Math.imul(k, K)) | 0),
            (n = (n + Math.imul(S, Z)) | 0),
            (i = ((i = (i + Math.imul(S, Y)) | 0) + Math.imul(P, Z)) | 0),
            (s = (s + Math.imul(P, Y)) | 0),
            (n = (n + Math.imul(E, $)) | 0),
            (i = ((i = (i + Math.imul(E, ee)) | 0) + Math.imul(R, $)) | 0),
            (s = (s + Math.imul(R, ee)) | 0),
            (n = (n + Math.imul(w, er)) | 0),
            (i = ((i = (i + Math.imul(w, en)) | 0) + Math.imul(A, er)) | 0),
            (s = (s + Math.imul(A, en)) | 0),
            (n = (n + Math.imul(m, es)) | 0),
            (i = ((i = (i + Math.imul(m, ea)) | 0) + Math.imul(y, es)) | 0),
            (s = (s + Math.imul(y, ea)) | 0),
            (n = (n + Math.imul(p, el)) | 0),
            (i = ((i = (i + Math.imul(p, eu)) | 0) + Math.imul(b, el)) | 0),
            (s = (s + Math.imul(b, eu)) | 0),
            (n = (n + Math.imul(c, ec)) | 0);
          var eR =
            (((u + n) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(c, ed)) | 0) + Math.imul(d, ec)) | 0)) <<
                13)) |
            0;
          (u =
            ((((s = (s + Math.imul(d, ed)) | 0) + (i >>> 13)) | 0) +
              (eR >>> 26)) |
            0),
            (eR &= 0x3ffffff),
            (n = Math.imul(_, z)),
            (i = ((i = Math.imul(_, G)) + Math.imul(D, z)) | 0),
            (s = Math.imul(D, G)),
            (n = (n + Math.imul(L, Q)) | 0),
            (i = ((i = (i + Math.imul(L, H)) | 0) + Math.imul(U, Q)) | 0),
            (s = (s + Math.imul(U, H)) | 0),
            (n = (n + Math.imul(C, J)) | 0),
            (i = ((i = (i + Math.imul(C, K)) | 0) + Math.imul(B, J)) | 0),
            (s = (s + Math.imul(B, K)) | 0),
            (n = (n + Math.imul(I, Z)) | 0),
            (i = ((i = (i + Math.imul(I, Y)) | 0) + Math.imul(k, Z)) | 0),
            (s = (s + Math.imul(k, Y)) | 0),
            (n = (n + Math.imul(S, $)) | 0),
            (i = ((i = (i + Math.imul(S, ee)) | 0) + Math.imul(P, $)) | 0),
            (s = (s + Math.imul(P, ee)) | 0),
            (n = (n + Math.imul(E, er)) | 0),
            (i = ((i = (i + Math.imul(E, en)) | 0) + Math.imul(R, er)) | 0),
            (s = (s + Math.imul(R, en)) | 0),
            (n = (n + Math.imul(w, es)) | 0),
            (i = ((i = (i + Math.imul(w, ea)) | 0) + Math.imul(A, es)) | 0),
            (s = (s + Math.imul(A, ea)) | 0),
            (n = (n + Math.imul(m, el)) | 0),
            (i = ((i = (i + Math.imul(m, eu)) | 0) + Math.imul(y, el)) | 0),
            (s = (s + Math.imul(y, eu)) | 0),
            (n = (n + Math.imul(p, ec)) | 0),
            (i = ((i = (i + Math.imul(p, ed)) | 0) + Math.imul(b, ec)) | 0),
            (s = (s + Math.imul(b, ed)) | 0),
            (n = (n + Math.imul(c, ep)) | 0);
          var eM =
            (((u + n) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(c, eb)) | 0) + Math.imul(d, ep)) | 0)) <<
                13)) |
            0;
          (u =
            ((((s = (s + Math.imul(d, eb)) | 0) + (i >>> 13)) | 0) +
              (eM >>> 26)) |
            0),
            (eM &= 0x3ffffff),
            (n = Math.imul(_, Q)),
            (i = ((i = Math.imul(_, H)) + Math.imul(D, Q)) | 0),
            (s = Math.imul(D, H)),
            (n = (n + Math.imul(L, J)) | 0),
            (i = ((i = (i + Math.imul(L, K)) | 0) + Math.imul(U, J)) | 0),
            (s = (s + Math.imul(U, K)) | 0),
            (n = (n + Math.imul(C, Z)) | 0),
            (i = ((i = (i + Math.imul(C, Y)) | 0) + Math.imul(B, Z)) | 0),
            (s = (s + Math.imul(B, Y)) | 0),
            (n = (n + Math.imul(I, $)) | 0),
            (i = ((i = (i + Math.imul(I, ee)) | 0) + Math.imul(k, $)) | 0),
            (s = (s + Math.imul(k, ee)) | 0),
            (n = (n + Math.imul(S, er)) | 0),
            (i = ((i = (i + Math.imul(S, en)) | 0) + Math.imul(P, er)) | 0),
            (s = (s + Math.imul(P, en)) | 0),
            (n = (n + Math.imul(E, es)) | 0),
            (i = ((i = (i + Math.imul(E, ea)) | 0) + Math.imul(R, es)) | 0),
            (s = (s + Math.imul(R, ea)) | 0),
            (n = (n + Math.imul(w, el)) | 0),
            (i = ((i = (i + Math.imul(w, eu)) | 0) + Math.imul(A, el)) | 0),
            (s = (s + Math.imul(A, eu)) | 0),
            (n = (n + Math.imul(m, ec)) | 0),
            (i = ((i = (i + Math.imul(m, ed)) | 0) + Math.imul(y, ec)) | 0),
            (s = (s + Math.imul(y, ed)) | 0),
            (n = (n + Math.imul(p, ep)) | 0);
          var eS =
            (((u + n) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(p, eb)) | 0) + Math.imul(b, ep)) | 0)) <<
                13)) |
            0;
          (u =
            ((((s = (s + Math.imul(b, eb)) | 0) + (i >>> 13)) | 0) +
              (eS >>> 26)) |
            0),
            (eS &= 0x3ffffff),
            (n = Math.imul(_, J)),
            (i = ((i = Math.imul(_, K)) + Math.imul(D, J)) | 0),
            (s = Math.imul(D, K)),
            (n = (n + Math.imul(L, Z)) | 0),
            (i = ((i = (i + Math.imul(L, Y)) | 0) + Math.imul(U, Z)) | 0),
            (s = (s + Math.imul(U, Y)) | 0),
            (n = (n + Math.imul(C, $)) | 0),
            (i = ((i = (i + Math.imul(C, ee)) | 0) + Math.imul(B, $)) | 0),
            (s = (s + Math.imul(B, ee)) | 0),
            (n = (n + Math.imul(I, er)) | 0),
            (i = ((i = (i + Math.imul(I, en)) | 0) + Math.imul(k, er)) | 0),
            (s = (s + Math.imul(k, en)) | 0),
            (n = (n + Math.imul(S, es)) | 0),
            (i = ((i = (i + Math.imul(S, ea)) | 0) + Math.imul(P, es)) | 0),
            (s = (s + Math.imul(P, ea)) | 0),
            (n = (n + Math.imul(E, el)) | 0),
            (i = ((i = (i + Math.imul(E, eu)) | 0) + Math.imul(R, el)) | 0),
            (s = (s + Math.imul(R, eu)) | 0),
            (n = (n + Math.imul(w, ec)) | 0),
            (i = ((i = (i + Math.imul(w, ed)) | 0) + Math.imul(A, ec)) | 0),
            (s = (s + Math.imul(A, ed)) | 0),
            (n = (n + Math.imul(m, ep)) | 0);
          var eP =
            (((u + n) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(m, eb)) | 0) + Math.imul(y, ep)) | 0)) <<
                13)) |
            0;
          (u =
            ((((s = (s + Math.imul(y, eb)) | 0) + (i >>> 13)) | 0) +
              (eP >>> 26)) |
            0),
            (eP &= 0x3ffffff),
            (n = Math.imul(_, Z)),
            (i = ((i = Math.imul(_, Y)) + Math.imul(D, Z)) | 0),
            (s = Math.imul(D, Y)),
            (n = (n + Math.imul(L, $)) | 0),
            (i = ((i = (i + Math.imul(L, ee)) | 0) + Math.imul(U, $)) | 0),
            (s = (s + Math.imul(U, ee)) | 0),
            (n = (n + Math.imul(C, er)) | 0),
            (i = ((i = (i + Math.imul(C, en)) | 0) + Math.imul(B, er)) | 0),
            (s = (s + Math.imul(B, en)) | 0),
            (n = (n + Math.imul(I, es)) | 0),
            (i = ((i = (i + Math.imul(I, ea)) | 0) + Math.imul(k, es)) | 0),
            (s = (s + Math.imul(k, ea)) | 0),
            (n = (n + Math.imul(S, el)) | 0),
            (i = ((i = (i + Math.imul(S, eu)) | 0) + Math.imul(P, el)) | 0),
            (s = (s + Math.imul(P, eu)) | 0),
            (n = (n + Math.imul(E, ec)) | 0),
            (i = ((i = (i + Math.imul(E, ed)) | 0) + Math.imul(R, ec)) | 0),
            (s = (s + Math.imul(R, ed)) | 0),
            (n = (n + Math.imul(w, ep)) | 0);
          var eO =
            (((u + n) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(w, eb)) | 0) + Math.imul(A, ep)) | 0)) <<
                13)) |
            0;
          (u =
            ((((s = (s + Math.imul(A, eb)) | 0) + (i >>> 13)) | 0) +
              (eO >>> 26)) |
            0),
            (eO &= 0x3ffffff),
            (n = Math.imul(_, $)),
            (i = ((i = Math.imul(_, ee)) + Math.imul(D, $)) | 0),
            (s = Math.imul(D, ee)),
            (n = (n + Math.imul(L, er)) | 0),
            (i = ((i = (i + Math.imul(L, en)) | 0) + Math.imul(U, er)) | 0),
            (s = (s + Math.imul(U, en)) | 0),
            (n = (n + Math.imul(C, es)) | 0),
            (i = ((i = (i + Math.imul(C, ea)) | 0) + Math.imul(B, es)) | 0),
            (s = (s + Math.imul(B, ea)) | 0),
            (n = (n + Math.imul(I, el)) | 0),
            (i = ((i = (i + Math.imul(I, eu)) | 0) + Math.imul(k, el)) | 0),
            (s = (s + Math.imul(k, eu)) | 0),
            (n = (n + Math.imul(S, ec)) | 0),
            (i = ((i = (i + Math.imul(S, ed)) | 0) + Math.imul(P, ec)) | 0),
            (s = (s + Math.imul(P, ed)) | 0),
            (n = (n + Math.imul(E, ep)) | 0);
          var eI =
            (((u + n) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(E, eb)) | 0) + Math.imul(R, ep)) | 0)) <<
                13)) |
            0;
          (u =
            ((((s = (s + Math.imul(R, eb)) | 0) + (i >>> 13)) | 0) +
              (eI >>> 26)) |
            0),
            (eI &= 0x3ffffff),
            (n = Math.imul(_, er)),
            (i = ((i = Math.imul(_, en)) + Math.imul(D, er)) | 0),
            (s = Math.imul(D, en)),
            (n = (n + Math.imul(L, es)) | 0),
            (i = ((i = (i + Math.imul(L, ea)) | 0) + Math.imul(U, es)) | 0),
            (s = (s + Math.imul(U, ea)) | 0),
            (n = (n + Math.imul(C, el)) | 0),
            (i = ((i = (i + Math.imul(C, eu)) | 0) + Math.imul(B, el)) | 0),
            (s = (s + Math.imul(B, eu)) | 0),
            (n = (n + Math.imul(I, ec)) | 0),
            (i = ((i = (i + Math.imul(I, ed)) | 0) + Math.imul(k, ec)) | 0),
            (s = (s + Math.imul(k, ed)) | 0),
            (n = (n + Math.imul(S, ep)) | 0);
          var ek =
            (((u + n) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(S, eb)) | 0) + Math.imul(P, ep)) | 0)) <<
                13)) |
            0;
          (u =
            ((((s = (s + Math.imul(P, eb)) | 0) + (i >>> 13)) | 0) +
              (ek >>> 26)) |
            0),
            (ek &= 0x3ffffff),
            (n = Math.imul(_, es)),
            (i = ((i = Math.imul(_, ea)) + Math.imul(D, es)) | 0),
            (s = Math.imul(D, ea)),
            (n = (n + Math.imul(L, el)) | 0),
            (i = ((i = (i + Math.imul(L, eu)) | 0) + Math.imul(U, el)) | 0),
            (s = (s + Math.imul(U, eu)) | 0),
            (n = (n + Math.imul(C, ec)) | 0),
            (i = ((i = (i + Math.imul(C, ed)) | 0) + Math.imul(B, ec)) | 0),
            (s = (s + Math.imul(B, ed)) | 0),
            (n = (n + Math.imul(I, ep)) | 0);
          var eN =
            (((u + n) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(I, eb)) | 0) + Math.imul(k, ep)) | 0)) <<
                13)) |
            0;
          (u =
            ((((s = (s + Math.imul(k, eb)) | 0) + (i >>> 13)) | 0) +
              (eN >>> 26)) |
            0),
            (eN &= 0x3ffffff),
            (n = Math.imul(_, el)),
            (i = ((i = Math.imul(_, eu)) + Math.imul(D, el)) | 0),
            (s = Math.imul(D, eu)),
            (n = (n + Math.imul(L, ec)) | 0),
            (i = ((i = (i + Math.imul(L, ed)) | 0) + Math.imul(U, ec)) | 0),
            (s = (s + Math.imul(U, ed)) | 0),
            (n = (n + Math.imul(C, ep)) | 0);
          var eC =
            (((u + n) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(C, eb)) | 0) + Math.imul(B, ep)) | 0)) <<
                13)) |
            0;
          (u =
            ((((s = (s + Math.imul(B, eb)) | 0) + (i >>> 13)) | 0) +
              (eC >>> 26)) |
            0),
            (eC &= 0x3ffffff),
            (n = Math.imul(_, ec)),
            (i = ((i = Math.imul(_, ed)) + Math.imul(D, ec)) | 0),
            (s = Math.imul(D, ed)),
            (n = (n + Math.imul(L, ep)) | 0);
          var eB =
            (((u + n) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(L, eb)) | 0) + Math.imul(U, ep)) | 0)) <<
                13)) |
            0;
          (u =
            ((((s = (s + Math.imul(U, eb)) | 0) + (i >>> 13)) | 0) +
              (eB >>> 26)) |
            0),
            (eB &= 0x3ffffff),
            (n = Math.imul(_, ep));
          var eT =
            (((u + n) | 0) +
              ((8191 & (i = ((i = Math.imul(_, eb)) + Math.imul(D, ep)) | 0)) <<
                13)) |
            0;
          return (
            (u =
              ((((s = Math.imul(D, eb)) + (i >>> 13)) | 0) + (eT >>> 26)) | 0),
            (eT &= 0x3ffffff),
            (l[0] = eg),
            (l[1] = em),
            (l[2] = ey),
            (l[3] = ev),
            (l[4] = ew),
            (l[5] = eA),
            (l[6] = ex),
            (l[7] = eE),
            (l[8] = eR),
            (l[9] = eM),
            (l[10] = eS),
            (l[11] = eP),
            (l[12] = eO),
            (l[13] = eI),
            (l[14] = ek),
            (l[15] = eN),
            (l[16] = eC),
            (l[17] = eB),
            (l[18] = eT),
            0 !== u && ((l[19] = u), r.length++),
            r
          );
        };
        function b(e, t, r) {
          return new g().mulp(e, t, r);
        }
        function g(e, t) {
          (this.x = e), (this.y = t);
        }
        Math.imul || (p = h),
          (s.prototype.mulTo = function (e, t) {
            var r,
              n = this.length + e.length;
            return 10 === this.length && 10 === e.length
              ? p(this, e, t)
              : n < 63
              ? h(this, e, t)
              : n < 1024
              ? (function (e, t, r) {
                  (r.negative = t.negative ^ e.negative),
                    (r.length = e.length + t.length);
                  for (var n = 0, i = 0, s = 0; s < r.length - 1; s++) {
                    var a = i;
                    i = 0;
                    for (
                      var o = 0x3ffffff & n,
                        l = Math.min(s, t.length - 1),
                        u = Math.max(0, s - e.length + 1);
                      u <= l;
                      u++
                    ) {
                      var f = s - u,
                        c = (0 | e.words[f]) * (0 | t.words[u]),
                        d = 0x3ffffff & c;
                      (a = (a + ((c / 0x4000000) | 0)) | 0),
                        (o = 0x3ffffff & (d = (d + o) | 0)),
                        (i += (a = (a + (d >>> 26)) | 0) >>> 26),
                        (a &= 0x3ffffff);
                    }
                    (r.words[s] = o), (n = a), (a = i);
                  }
                  return 0 !== n ? (r.words[s] = n) : r.length--, r.strip();
                })(this, e, t)
              : b(this, e, t);
          }),
          (g.prototype.makeRBT = function (e) {
            for (
              var t = Array(e), r = s.prototype._countBits(e) - 1, n = 0;
              n < e;
              n++
            )
              t[n] = this.revBin(n, r, e);
            return t;
          }),
          (g.prototype.revBin = function (e, t, r) {
            if (0 === e || e === r - 1) return e;
            for (var n = 0, i = 0; i < t; i++)
              (n |= (1 & e) << (t - i - 1)), (e >>= 1);
            return n;
          }),
          (g.prototype.permute = function (e, t, r, n, i, s) {
            for (var a = 0; a < s; a++) (n[a] = t[e[a]]), (i[a] = r[e[a]]);
          }),
          (g.prototype.transform = function (e, t, r, n, i, s) {
            this.permute(s, e, t, r, n, i);
            for (var a = 1; a < i; a <<= 1)
              for (
                var o = a << 1,
                  l = Math.cos((2 * Math.PI) / o),
                  u = Math.sin((2 * Math.PI) / o),
                  f = 0;
                f < i;
                f += o
              )
                for (var c = l, d = u, h = 0; h < a; h++) {
                  var p = r[f + h],
                    b = n[f + h],
                    g = r[f + h + a],
                    m = n[f + h + a],
                    y = c * g - d * m;
                  (m = c * m + d * g),
                    (g = y),
                    (r[f + h] = p + g),
                    (n[f + h] = b + m),
                    (r[f + h + a] = p - g),
                    (n[f + h + a] = b - m),
                    h !== o &&
                      ((y = l * c - u * d), (d = l * d + u * c), (c = y));
                }
          }),
          (g.prototype.guessLen13b = function (e, t) {
            var r = 1 | Math.max(t, e),
              n = 1 & r,
              i = 0;
            for (r = (r / 2) | 0; r; r >>>= 1) i++;
            return 1 << (i + 1 + n);
          }),
          (g.prototype.conjugate = function (e, t, r) {
            if (!(r <= 1))
              for (var n = 0; n < r / 2; n++) {
                var i = e[n];
                (e[n] = e[r - n - 1]),
                  (e[r - n - 1] = i),
                  (i = t[n]),
                  (t[n] = -t[r - n - 1]),
                  (t[r - n - 1] = -i);
              }
          }),
          (g.prototype.normalize13b = function (e, t) {
            for (var r = 0, n = 0; n < t / 2; n++) {
              var i =
                8192 * Math.round(e[2 * n + 1] / t) +
                Math.round(e[2 * n] / t) +
                r;
              (e[n] = 0x3ffffff & i),
                (r = i < 0x4000000 ? 0 : (i / 0x4000000) | 0);
            }
            return e;
          }),
          (g.prototype.convert13b = function (e, t, r, i) {
            for (var s = 0, a = 0; a < t; a++)
              (s += 0 | e[a]),
                (r[2 * a] = 8191 & s),
                (s >>>= 13),
                (r[2 * a + 1] = 8191 & s),
                (s >>>= 13);
            for (a = 2 * t; a < i; ++a) r[a] = 0;
            n(0 === s), n((-8192 & s) == 0);
          }),
          (g.prototype.stub = function (e) {
            for (var t = Array(e), r = 0; r < e; r++) t[r] = 0;
            return t;
          }),
          (g.prototype.mulp = function (e, t, r) {
            var n = 2 * this.guessLen13b(e.length, t.length),
              i = this.makeRBT(n),
              s = this.stub(n),
              a = Array(n),
              o = Array(n),
              l = Array(n),
              u = Array(n),
              f = Array(n),
              c = Array(n),
              d = r.words;
            (d.length = n),
              this.convert13b(e.words, e.length, a, n),
              this.convert13b(t.words, t.length, u, n),
              this.transform(a, s, o, l, n, i),
              this.transform(u, s, f, c, n, i);
            for (var h = 0; h < n; h++) {
              var p = o[h] * f[h] - l[h] * c[h];
              (l[h] = o[h] * c[h] + l[h] * f[h]), (o[h] = p);
            }
            return (
              this.conjugate(o, l, n),
              this.transform(o, l, d, s, n, i),
              this.conjugate(d, s, n),
              this.normalize13b(d, n),
              (r.negative = e.negative ^ t.negative),
              (r.length = e.length + t.length),
              r.strip()
            );
          }),
          (s.prototype.mul = function (e) {
            var t = new s(null);
            return (t.words = Array(this.length + e.length)), this.mulTo(e, t);
          }),
          (s.prototype.mulf = function (e) {
            var t = new s(null);
            return (t.words = Array(this.length + e.length)), b(this, e, t);
          }),
          (s.prototype.imul = function (e) {
            return this.clone().mulTo(e, this);
          }),
          (s.prototype.imuln = function (e) {
            n("number" == typeof e), n(e < 0x4000000);
            for (var t = 0, r = 0; r < this.length; r++) {
              var i = (0 | this.words[r]) * e,
                s = (0x3ffffff & i) + (0x3ffffff & t);
              (t >>= 26),
                (t += ((i / 0x4000000) | 0) + (s >>> 26)),
                (this.words[r] = 0x3ffffff & s);
            }
            return (
              0 !== t && ((this.words[r] = t), this.length++),
              (this.length = 0 === e ? 1 : this.length),
              this
            );
          }),
          (s.prototype.muln = function (e) {
            return this.clone().imuln(e);
          }),
          (s.prototype.sqr = function () {
            return this.mul(this);
          }),
          (s.prototype.isqr = function () {
            return this.imul(this.clone());
          }),
          (s.prototype.pow = function (e) {
            var t = (function (e) {
              for (var t = Array(e.bitLength()), r = 0; r < t.length; r++) {
                var n = (r / 26) | 0,
                  i = r % 26;
                t[r] = (e.words[n] & (1 << i)) >>> i;
              }
              return t;
            })(e);
            if (0 === t.length) return new s(1);
            for (
              var r = this, n = 0;
              n < t.length && 0 === t[n];
              n++, r = r.sqr()
            );
            if (++n < t.length)
              for (var i = r.sqr(); n < t.length; n++, i = i.sqr())
                0 !== t[n] && (r = r.mul(i));
            return r;
          }),
          (s.prototype.iushln = function (e) {
            n("number" == typeof e && e >= 0);
            var t,
              r = e % 26,
              i = (e - r) / 26,
              s = (0x3ffffff >>> (26 - r)) << (26 - r);
            if (0 !== r) {
              var a = 0;
              for (t = 0; t < this.length; t++) {
                var o = this.words[t] & s,
                  l = ((0 | this.words[t]) - o) << r;
                (this.words[t] = l | a), (a = o >>> (26 - r));
              }
              a && ((this.words[t] = a), this.length++);
            }
            if (0 !== i) {
              for (t = this.length - 1; t >= 0; t--)
                this.words[t + i] = this.words[t];
              for (t = 0; t < i; t++) this.words[t] = 0;
              this.length += i;
            }
            return this.strip();
          }),
          (s.prototype.ishln = function (e) {
            return n(0 === this.negative), this.iushln(e);
          }),
          (s.prototype.iushrn = function (e, t, r) {
            n("number" == typeof e && e >= 0);
            var i = t ? (t - (t % 26)) / 26 : 0,
              s = e % 26,
              a = Math.min((e - s) / 26, this.length),
              o = 0x3ffffff ^ ((0x3ffffff >>> s) << s);
            if (((i -= a), (i = Math.max(0, i)), r)) {
              for (var l = 0; l < a; l++) r.words[l] = this.words[l];
              r.length = a;
            }
            if (0 === a);
            else if (this.length > a)
              for (this.length -= a, l = 0; l < this.length; l++)
                this.words[l] = this.words[l + a];
            else (this.words[0] = 0), (this.length = 1);
            var u = 0;
            for (l = this.length - 1; l >= 0 && (0 !== u || l >= i); l--) {
              var f = 0 | this.words[l];
              (this.words[l] = (u << (26 - s)) | (f >>> s)), (u = f & o);
            }
            return (
              r && 0 !== u && (r.words[r.length++] = u),
              0 === this.length && ((this.words[0] = 0), (this.length = 1)),
              this.strip()
            );
          }),
          (s.prototype.ishrn = function (e, t, r) {
            return n(0 === this.negative), this.iushrn(e, t, r);
          }),
          (s.prototype.shln = function (e) {
            return this.clone().ishln(e);
          }),
          (s.prototype.ushln = function (e) {
            return this.clone().iushln(e);
          }),
          (s.prototype.shrn = function (e) {
            return this.clone().ishrn(e);
          }),
          (s.prototype.ushrn = function (e) {
            return this.clone().iushrn(e);
          }),
          (s.prototype.testn = function (e) {
            n("number" == typeof e && e >= 0);
            var t = e % 26,
              r = (e - t) / 26;
            return !(this.length <= r) && !!(this.words[r] & (1 << t));
          }),
          (s.prototype.imaskn = function (e) {
            n("number" == typeof e && e >= 0);
            var t = e % 26,
              r = (e - t) / 26;
            return (n(
              0 === this.negative,
              "imaskn works only with positive numbers"
            ),
            this.length <= r)
              ? this
              : (0 !== t && r++,
                (this.length = Math.min(r, this.length)),
                0 !== t &&
                  (this.words[this.length - 1] &=
                    0x3ffffff ^ ((0x3ffffff >>> t) << t)),
                this.strip());
          }),
          (s.prototype.maskn = function (e) {
            return this.clone().imaskn(e);
          }),
          (s.prototype.iaddn = function (e) {
            return (n("number" == typeof e), n(e < 0x4000000), e < 0)
              ? this.isubn(-e)
              : 0 !== this.negative
              ? (1 === this.length && (0 | this.words[0]) < e
                  ? ((this.words[0] = e - (0 | this.words[0])),
                    (this.negative = 0))
                  : ((this.negative = 0), this.isubn(e), (this.negative = 1)),
                this)
              : this._iaddn(e);
          }),
          (s.prototype._iaddn = function (e) {
            this.words[0] += e;
            for (var t = 0; t < this.length && this.words[t] >= 0x4000000; t++)
              (this.words[t] -= 0x4000000),
                t === this.length - 1
                  ? (this.words[t + 1] = 1)
                  : this.words[t + 1]++;
            return (this.length = Math.max(this.length, t + 1)), this;
          }),
          (s.prototype.isubn = function (e) {
            if ((n("number" == typeof e), n(e < 0x4000000), e < 0))
              return this.iaddn(-e);
            if (0 !== this.negative)
              return (
                (this.negative = 0), this.iaddn(e), (this.negative = 1), this
              );
            if (((this.words[0] -= e), 1 === this.length && this.words[0] < 0))
              (this.words[0] = -this.words[0]), (this.negative = 1);
            else
              for (var t = 0; t < this.length && this.words[t] < 0; t++)
                (this.words[t] += 0x4000000), (this.words[t + 1] -= 1);
            return this.strip();
          }),
          (s.prototype.addn = function (e) {
            return this.clone().iaddn(e);
          }),
          (s.prototype.subn = function (e) {
            return this.clone().isubn(e);
          }),
          (s.prototype.iabs = function () {
            return (this.negative = 0), this;
          }),
          (s.prototype.abs = function () {
            return this.clone().iabs();
          }),
          (s.prototype._ishlnsubmul = function (e, t, r) {
            var i,
              s,
              a = e.length + r;
            this._expand(a);
            var o = 0;
            for (i = 0; i < e.length; i++) {
              s = (0 | this.words[i + r]) + o;
              var l = (0 | e.words[i]) * t;
              (s -= 0x3ffffff & l),
                (o = (s >> 26) - ((l / 0x4000000) | 0)),
                (this.words[i + r] = 0x3ffffff & s);
            }
            for (; i < this.length - r; i++)
              (o = (s = (0 | this.words[i + r]) + o) >> 26),
                (this.words[i + r] = 0x3ffffff & s);
            if (0 === o) return this.strip();
            for (n(-1 === o), o = 0, i = 0; i < this.length; i++)
              (o = (s = -(0 | this.words[i]) + o) >> 26),
                (this.words[i] = 0x3ffffff & s);
            return (this.negative = 1), this.strip();
          }),
          (s.prototype._wordDiv = function (e, t) {
            var r,
              n = this.length - e.length,
              i = this.clone(),
              a = e,
              o = 0 | a.words[a.length - 1];
            0 != (n = 26 - this._countBits(o)) &&
              ((a = a.ushln(n)), i.iushln(n), (o = 0 | a.words[a.length - 1]));
            var l = i.length - a.length;
            if ("mod" !== t) {
              ((r = new s(null)).length = l + 1), (r.words = Array(r.length));
              for (var u = 0; u < r.length; u++) r.words[u] = 0;
            }
            var f = i.clone()._ishlnsubmul(a, 1, l);
            0 === f.negative && ((i = f), r && (r.words[l] = 1));
            for (var c = l - 1; c >= 0; c--) {
              var d =
                (0 | i.words[a.length + c]) * 0x4000000 +
                (0 | i.words[a.length + c - 1]);
              for (
                d = Math.min((d / o) | 0, 0x3ffffff), i._ishlnsubmul(a, d, c);
                0 !== i.negative;

              )
                d--,
                  (i.negative = 0),
                  i._ishlnsubmul(a, 1, c),
                  i.isZero() || (i.negative ^= 1);
              r && (r.words[c] = d);
            }
            return (
              r && r.strip(),
              i.strip(),
              "div" !== t && 0 !== n && i.iushrn(n),
              { div: r || null, mod: i }
            );
          }),
          (s.prototype.divmod = function (e, t, r) {
            var i, a, o;
            return (n(!e.isZero()), this.isZero())
              ? { div: new s(0), mod: new s(0) }
              : 0 !== this.negative && 0 === e.negative
              ? ((o = this.neg().divmod(e, t)),
                "mod" !== t && (i = o.div.neg()),
                "div" !== t &&
                  ((a = o.mod.neg()), r && 0 !== a.negative && a.iadd(e)),
                { div: i, mod: a })
              : 0 === this.negative && 0 !== e.negative
              ? ((o = this.divmod(e.neg(), t)),
                "mod" !== t && (i = o.div.neg()),
                { div: i, mod: o.mod })
              : (this.negative & e.negative) != 0
              ? ((o = this.neg().divmod(e.neg(), t)),
                "div" !== t &&
                  ((a = o.mod.neg()), r && 0 !== a.negative && a.isub(e)),
                { div: o.div, mod: a })
              : e.length > this.length || 0 > this.cmp(e)
              ? { div: new s(0), mod: this }
              : 1 === e.length
              ? "div" === t
                ? { div: this.divn(e.words[0]), mod: null }
                : "mod" === t
                ? { div: null, mod: new s(this.modn(e.words[0])) }
                : {
                    div: this.divn(e.words[0]),
                    mod: new s(this.modn(e.words[0])),
                  }
              : this._wordDiv(e, t);
          }),
          (s.prototype.div = function (e) {
            return this.divmod(e, "div", !1).div;
          }),
          (s.prototype.mod = function (e) {
            return this.divmod(e, "mod", !1).mod;
          }),
          (s.prototype.umod = function (e) {
            return this.divmod(e, "mod", !0).mod;
          }),
          (s.prototype.divRound = function (e) {
            var t = this.divmod(e);
            if (t.mod.isZero()) return t.div;
            var r = 0 !== t.div.negative ? t.mod.isub(e) : t.mod,
              n = e.ushrn(1),
              i = e.andln(1),
              s = r.cmp(n);
            return s < 0 || (1 === i && 0 === s)
              ? t.div
              : 0 !== t.div.negative
              ? t.div.isubn(1)
              : t.div.iaddn(1);
          }),
          (s.prototype.modn = function (e) {
            n(e <= 0x3ffffff);
            for (var t = 0x4000000 % e, r = 0, i = this.length - 1; i >= 0; i--)
              r = (t * r + (0 | this.words[i])) % e;
            return r;
          }),
          (s.prototype.idivn = function (e) {
            n(e <= 0x3ffffff);
            for (var t = 0, r = this.length - 1; r >= 0; r--) {
              var i = (0 | this.words[r]) + 0x4000000 * t;
              (this.words[r] = (i / e) | 0), (t = i % e);
            }
            return this.strip();
          }),
          (s.prototype.divn = function (e) {
            return this.clone().idivn(e);
          }),
          (s.prototype.egcd = function (e) {
            n(0 === e.negative), n(!e.isZero());
            var t = this,
              r = e.clone();
            t = 0 !== t.negative ? t.umod(e) : t.clone();
            for (
              var i = new s(1), a = new s(0), o = new s(0), l = new s(1), u = 0;
              t.isEven() && r.isEven();

            )
              t.iushrn(1), r.iushrn(1), ++u;
            for (var f = r.clone(), c = t.clone(); !t.isZero(); ) {
              for (
                var d = 0, h = 1;
                (t.words[0] & h) == 0 && d < 26;
                ++d, h <<= 1
              );
              if (d > 0)
                for (t.iushrn(d); d-- > 0; )
                  (i.isOdd() || a.isOdd()) && (i.iadd(f), a.isub(c)),
                    i.iushrn(1),
                    a.iushrn(1);
              for (
                var p = 0, b = 1;
                (r.words[0] & b) == 0 && p < 26;
                ++p, b <<= 1
              );
              if (p > 0)
                for (r.iushrn(p); p-- > 0; )
                  (o.isOdd() || l.isOdd()) && (o.iadd(f), l.isub(c)),
                    o.iushrn(1),
                    l.iushrn(1);
              t.cmp(r) >= 0
                ? (t.isub(r), i.isub(o), a.isub(l))
                : (r.isub(t), o.isub(i), l.isub(a));
            }
            return { a: o, b: l, gcd: r.iushln(u) };
          }),
          (s.prototype._invmp = function (e) {
            n(0 === e.negative), n(!e.isZero());
            var t,
              r = this,
              i = e.clone();
            r = 0 !== r.negative ? r.umod(e) : r.clone();
            for (
              var a = new s(1), o = new s(0), l = i.clone();
              r.cmpn(1) > 0 && i.cmpn(1) > 0;

            ) {
              for (
                var u = 0, f = 1;
                (r.words[0] & f) == 0 && u < 26;
                ++u, f <<= 1
              );
              if (u > 0)
                for (r.iushrn(u); u-- > 0; )
                  a.isOdd() && a.iadd(l), a.iushrn(1);
              for (
                var c = 0, d = 1;
                (i.words[0] & d) == 0 && c < 26;
                ++c, d <<= 1
              );
              if (c > 0)
                for (i.iushrn(c); c-- > 0; )
                  o.isOdd() && o.iadd(l), o.iushrn(1);
              r.cmp(i) >= 0 ? (r.isub(i), a.isub(o)) : (i.isub(r), o.isub(a));
            }
            return 0 > (t = 0 === r.cmpn(1) ? a : o).cmpn(0) && t.iadd(e), t;
          }),
          (s.prototype.gcd = function (e) {
            if (this.isZero()) return e.abs();
            if (e.isZero()) return this.abs();
            var t = this.clone(),
              r = e.clone();
            (t.negative = 0), (r.negative = 0);
            for (var n = 0; t.isEven() && r.isEven(); n++)
              t.iushrn(1), r.iushrn(1);
            for (;;) {
              for (; t.isEven(); ) t.iushrn(1);
              for (; r.isEven(); ) r.iushrn(1);
              var i = t.cmp(r);
              if (i < 0) {
                var s = t;
                (t = r), (r = s);
              } else if (0 === i || 0 === r.cmpn(1)) break;
              t.isub(r);
            }
            return r.iushln(n);
          }),
          (s.prototype.invm = function (e) {
            return this.egcd(e).a.umod(e);
          }),
          (s.prototype.isEven = function () {
            return (1 & this.words[0]) == 0;
          }),
          (s.prototype.isOdd = function () {
            return (1 & this.words[0]) == 1;
          }),
          (s.prototype.andln = function (e) {
            return this.words[0] & e;
          }),
          (s.prototype.bincn = function (e) {
            n("number" == typeof e);
            var t = e % 26,
              r = (e - t) / 26,
              i = 1 << t;
            if (this.length <= r)
              return this._expand(r + 1), (this.words[r] |= i), this;
            for (var s = i, a = r; 0 !== s && a < this.length; a++) {
              var o = 0 | this.words[a];
              (o += s), (s = o >>> 26), (o &= 0x3ffffff), (this.words[a] = o);
            }
            return 0 !== s && ((this.words[a] = s), this.length++), this;
          }),
          (s.prototype.isZero = function () {
            return 1 === this.length && 0 === this.words[0];
          }),
          (s.prototype.cmpn = function (e) {
            var t,
              r = e < 0;
            if (0 !== this.negative && !r) return -1;
            if (0 === this.negative && r) return 1;
            if ((this.strip(), this.length > 1)) t = 1;
            else {
              r && (e = -e), n(e <= 0x3ffffff, "Number is too big");
              var i = 0 | this.words[0];
              t = i === e ? 0 : i < e ? -1 : 1;
            }
            return 0 !== this.negative ? 0 | -t : t;
          }),
          (s.prototype.cmp = function (e) {
            if (0 !== this.negative && 0 === e.negative) return -1;
            if (0 === this.negative && 0 !== e.negative) return 1;
            var t = this.ucmp(e);
            return 0 !== this.negative ? 0 | -t : t;
          }),
          (s.prototype.ucmp = function (e) {
            if (this.length > e.length) return 1;
            if (this.length < e.length) return -1;
            for (var t = 0, r = this.length - 1; r >= 0; r--) {
              var n = 0 | this.words[r],
                i = 0 | e.words[r];
              if (n !== i) {
                n < i ? (t = -1) : n > i && (t = 1);
                break;
              }
            }
            return t;
          }),
          (s.prototype.gtn = function (e) {
            return 1 === this.cmpn(e);
          }),
          (s.prototype.gt = function (e) {
            return 1 === this.cmp(e);
          }),
          (s.prototype.gten = function (e) {
            return this.cmpn(e) >= 0;
          }),
          (s.prototype.gte = function (e) {
            return this.cmp(e) >= 0;
          }),
          (s.prototype.ltn = function (e) {
            return -1 === this.cmpn(e);
          }),
          (s.prototype.lt = function (e) {
            return -1 === this.cmp(e);
          }),
          (s.prototype.lten = function (e) {
            return 0 >= this.cmpn(e);
          }),
          (s.prototype.lte = function (e) {
            return 0 >= this.cmp(e);
          }),
          (s.prototype.eqn = function (e) {
            return 0 === this.cmpn(e);
          }),
          (s.prototype.eq = function (e) {
            return 0 === this.cmp(e);
          }),
          (s.red = function (e) {
            return new E(e);
          }),
          (s.prototype.toRed = function (e) {
            return (
              n(!this.red, "Already a number in reduction context"),
              n(0 === this.negative, "red works only with positives"),
              e.convertTo(this)._forceRed(e)
            );
          }),
          (s.prototype.fromRed = function () {
            return (
              n(
                this.red,
                "fromRed works only with numbers in reduction context"
              ),
              this.red.convertFrom(this)
            );
          }),
          (s.prototype._forceRed = function (e) {
            return (this.red = e), this;
          }),
          (s.prototype.forceRed = function (e) {
            return (
              n(!this.red, "Already a number in reduction context"),
              this._forceRed(e)
            );
          }),
          (s.prototype.redAdd = function (e) {
            return (
              n(this.red, "redAdd works only with red numbers"),
              this.red.add(this, e)
            );
          }),
          (s.prototype.redIAdd = function (e) {
            return (
              n(this.red, "redIAdd works only with red numbers"),
              this.red.iadd(this, e)
            );
          }),
          (s.prototype.redSub = function (e) {
            return (
              n(this.red, "redSub works only with red numbers"),
              this.red.sub(this, e)
            );
          }),
          (s.prototype.redISub = function (e) {
            return (
              n(this.red, "redISub works only with red numbers"),
              this.red.isub(this, e)
            );
          }),
          (s.prototype.redShl = function (e) {
            return (
              n(this.red, "redShl works only with red numbers"),
              this.red.shl(this, e)
            );
          }),
          (s.prototype.redMul = function (e) {
            return (
              n(this.red, "redMul works only with red numbers"),
              this.red._verify2(this, e),
              this.red.mul(this, e)
            );
          }),
          (s.prototype.redIMul = function (e) {
            return (
              n(this.red, "redMul works only with red numbers"),
              this.red._verify2(this, e),
              this.red.imul(this, e)
            );
          }),
          (s.prototype.redSqr = function () {
            return (
              n(this.red, "redSqr works only with red numbers"),
              this.red._verify1(this),
              this.red.sqr(this)
            );
          }),
          (s.prototype.redISqr = function () {
            return (
              n(this.red, "redISqr works only with red numbers"),
              this.red._verify1(this),
              this.red.isqr(this)
            );
          }),
          (s.prototype.redSqrt = function () {
            return (
              n(this.red, "redSqrt works only with red numbers"),
              this.red._verify1(this),
              this.red.sqrt(this)
            );
          }),
          (s.prototype.redInvm = function () {
            return (
              n(this.red, "redInvm works only with red numbers"),
              this.red._verify1(this),
              this.red.invm(this)
            );
          }),
          (s.prototype.redNeg = function () {
            return (
              n(this.red, "redNeg works only with red numbers"),
              this.red._verify1(this),
              this.red.neg(this)
            );
          }),
          (s.prototype.redPow = function (e) {
            return (
              n(this.red && !e.red, "redPow(normalNum)"),
              this.red._verify1(this),
              this.red.pow(this, e)
            );
          });
        var m = { k256: null, p224: null, p192: null, p25519: null };
        function y(e, t) {
          (this.name = e),
            (this.p = new s(t, 16)),
            (this.n = this.p.bitLength()),
            (this.k = new s(1).iushln(this.n).isub(this.p)),
            (this.tmp = this._tmp());
        }
        function v() {
          y.call(
            this,
            "k256",
            "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
          );
        }
        function w() {
          y.call(
            this,
            "p224",
            "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
          );
        }
        function A() {
          y.call(
            this,
            "p192",
            "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
          );
        }
        function x() {
          y.call(
            this,
            "25519",
            "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
          );
        }
        function E(e) {
          if ("string" == typeof e) {
            var t = s._prime(e);
            (this.m = t.p), (this.prime = t);
          } else
            n(e.gtn(1), "modulus must be greater than 1"),
              (this.m = e),
              (this.prime = null);
        }
        function R(e) {
          E.call(this, e),
            (this.shift = this.m.bitLength()),
            this.shift % 26 != 0 && (this.shift += 26 - (this.shift % 26)),
            (this.r = new s(1).iushln(this.shift)),
            (this.r2 = this.imod(this.r.sqr())),
            (this.rinv = this.r._invmp(this.m)),
            (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
            (this.minv = this.minv.umod(this.r)),
            (this.minv = this.r.sub(this.minv));
        }
        (y.prototype._tmp = function () {
          var e = new s(null);
          return (e.words = Array(Math.ceil(this.n / 13))), e;
        }),
          (y.prototype.ireduce = function (e) {
            var t,
              r = e;
            do
              this.split(r, this.tmp),
                (t = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength());
            while (t > this.n);
            var n = t < this.n ? -1 : r.ucmp(this.p);
            return (
              0 === n
                ? ((r.words[0] = 0), (r.length = 1))
                : n > 0
                ? r.isub(this.p)
                : void 0 !== r.strip
                ? r.strip()
                : r._strip(),
              r
            );
          }),
          (y.prototype.split = function (e, t) {
            e.iushrn(this.n, 0, t);
          }),
          (y.prototype.imulK = function (e) {
            return e.imul(this.k);
          }),
          i(v, y),
          (v.prototype.split = function (e, t) {
            for (var r = Math.min(e.length, 9), n = 0; n < r; n++)
              t.words[n] = e.words[n];
            if (((t.length = r), e.length <= 9)) {
              (e.words[0] = 0), (e.length = 1);
              return;
            }
            var i = e.words[9];
            for (n = 10, t.words[t.length++] = 4194303 & i; n < e.length; n++) {
              var s = 0 | e.words[n];
              (e.words[n - 10] = ((4194303 & s) << 4) | (i >>> 22)), (i = s);
            }
            (i >>>= 22),
              (e.words[n - 10] = i),
              0 === i && e.length > 10 ? (e.length -= 10) : (e.length -= 9);
          }),
          (v.prototype.imulK = function (e) {
            (e.words[e.length] = 0),
              (e.words[e.length + 1] = 0),
              (e.length += 2);
            for (var t = 0, r = 0; r < e.length; r++) {
              var n = 0 | e.words[r];
              (t += 977 * n),
                (e.words[r] = 0x3ffffff & t),
                (t = 64 * n + ((t / 0x4000000) | 0));
            }
            return (
              0 === e.words[e.length - 1] &&
                (e.length--, 0 === e.words[e.length - 1] && e.length--),
              e
            );
          }),
          i(w, y),
          i(A, y),
          i(x, y),
          (x.prototype.imulK = function (e) {
            for (var t = 0, r = 0; r < e.length; r++) {
              var n = (0 | e.words[r]) * 19 + t,
                i = 0x3ffffff & n;
              (n >>>= 26), (e.words[r] = i), (t = n);
            }
            return 0 !== t && (e.words[e.length++] = t), e;
          }),
          (s._prime = function (e) {
            var t;
            if (m[e]) return m[e];
            if ("k256" === e) t = new v();
            else if ("p224" === e) t = new w();
            else if ("p192" === e) t = new A();
            else if ("p25519" === e) t = new x();
            else throw Error("Unknown prime " + e);
            return (m[e] = t), t;
          }),
          (E.prototype._verify1 = function (e) {
            n(0 === e.negative, "red works only with positives"),
              n(e.red, "red works only with red numbers");
          }),
          (E.prototype._verify2 = function (e, t) {
            n((e.negative | t.negative) == 0, "red works only with positives"),
              n(e.red && e.red === t.red, "red works only with red numbers");
          }),
          (E.prototype.imod = function (e) {
            return this.prime
              ? this.prime.ireduce(e)._forceRed(this)
              : e.umod(this.m)._forceRed(this);
          }),
          (E.prototype.neg = function (e) {
            return e.isZero() ? e.clone() : this.m.sub(e)._forceRed(this);
          }),
          (E.prototype.add = function (e, t) {
            this._verify2(e, t);
            var r = e.add(t);
            return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this);
          }),
          (E.prototype.iadd = function (e, t) {
            this._verify2(e, t);
            var r = e.iadd(t);
            return r.cmp(this.m) >= 0 && r.isub(this.m), r;
          }),
          (E.prototype.sub = function (e, t) {
            this._verify2(e, t);
            var r = e.sub(t);
            return 0 > r.cmpn(0) && r.iadd(this.m), r._forceRed(this);
          }),
          (E.prototype.isub = function (e, t) {
            this._verify2(e, t);
            var r = e.isub(t);
            return 0 > r.cmpn(0) && r.iadd(this.m), r;
          }),
          (E.prototype.shl = function (e, t) {
            return this._verify1(e), this.imod(e.ushln(t));
          }),
          (E.prototype.imul = function (e, t) {
            return this._verify2(e, t), this.imod(e.imul(t));
          }),
          (E.prototype.mul = function (e, t) {
            return this._verify2(e, t), this.imod(e.mul(t));
          }),
          (E.prototype.isqr = function (e) {
            return this.imul(e, e.clone());
          }),
          (E.prototype.sqr = function (e) {
            return this.mul(e, e);
          }),
          (E.prototype.sqrt = function (e) {
            if (e.isZero()) return e.clone();
            var t = this.m.andln(3);
            if ((n(t % 2 == 1), 3 === t)) {
              var r = this.m.add(new s(1)).iushrn(2);
              return this.pow(e, r);
            }
            for (
              var i = this.m.subn(1), a = 0;
              !i.isZero() && 0 === i.andln(1);

            )
              a++, i.iushrn(1);
            n(!i.isZero());
            var o = new s(1).toRed(this),
              l = o.redNeg(),
              u = this.m.subn(1).iushrn(1),
              f = this.m.bitLength();
            for (
              f = new s(2 * f * f).toRed(this);
              0 !== this.pow(f, u).cmp(l);

            )
              f.redIAdd(l);
            for (
              var c = this.pow(f, i),
                d = this.pow(e, i.addn(1).iushrn(1)),
                h = this.pow(e, i),
                p = a;
              0 !== h.cmp(o);

            ) {
              for (var b = h, g = 0; 0 !== b.cmp(o); g++) b = b.redSqr();
              n(g < p);
              var m = this.pow(c, new s(1).iushln(p - g - 1));
              (d = d.redMul(m)), (c = m.redSqr()), (h = h.redMul(c)), (p = g);
            }
            return d;
          }),
          (E.prototype.invm = function (e) {
            var t = e._invmp(this.m);
            return 0 !== t.negative
              ? ((t.negative = 0), this.imod(t).redNeg())
              : this.imod(t);
          }),
          (E.prototype.pow = function (e, t) {
            if (t.isZero()) return new s(1).toRed(this);
            if (0 === t.cmpn(1)) return e.clone();
            var r = Array(16);
            (r[0] = new s(1).toRed(this)), (r[1] = e);
            for (var n = 2; n < r.length; n++) r[n] = this.mul(r[n - 1], e);
            var i = r[0],
              a = 0,
              o = 0,
              l = t.bitLength() % 26;
            for (0 === l && (l = 26), n = t.length - 1; n >= 0; n--) {
              for (var u = t.words[n], f = l - 1; f >= 0; f--) {
                var c = (u >> f) & 1;
                if ((i !== r[0] && (i = this.sqr(i)), 0 === c && 0 === a)) {
                  o = 0;
                  continue;
                }
                (a <<= 1),
                  (a |= c),
                  (4 == ++o || (0 === n && 0 === f)) &&
                    ((i = this.mul(i, r[a])), (o = 0), (a = 0));
              }
              l = 26;
            }
            return i;
          }),
          (E.prototype.convertTo = function (e) {
            var t = e.umod(this.m);
            return t === e ? t.clone() : t;
          }),
          (E.prototype.convertFrom = function (e) {
            var t = e.clone();
            return (t.red = null), t;
          }),
          (s.mont = function (e) {
            return new R(e);
          }),
          i(R, E),
          (R.prototype.convertTo = function (e) {
            return this.imod(e.ushln(this.shift));
          }),
          (R.prototype.convertFrom = function (e) {
            var t = this.imod(e.mul(this.rinv));
            return (t.red = null), t;
          }),
          (R.prototype.imul = function (e, t) {
            if (e.isZero() || t.isZero())
              return (e.words[0] = 0), (e.length = 1), e;
            var r = e.imul(t),
              n = r
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              i = r.isub(n).iushrn(this.shift),
              s = i;
            return (
              i.cmp(this.m) >= 0
                ? (s = i.isub(this.m))
                : 0 > i.cmpn(0) && (s = i.iadd(this.m)),
              s._forceRed(this)
            );
          }),
          (R.prototype.mul = function (e, t) {
            if (e.isZero() || t.isZero()) return new s(0)._forceRed(this);
            var r = e.mul(t),
              n = r
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              i = r.isub(n).iushrn(this.shift),
              a = i;
            return (
              i.cmp(this.m) >= 0
                ? (a = i.isub(this.m))
                : 0 > i.cmpn(0) && (a = i.iadd(this.m)),
              a._forceRed(this)
            );
          }),
          (R.prototype.invm = function (e) {
            return this.imod(e._invmp(this.m).mul(this.r2))._forceRed(this);
          });
      })((e = r.nmd(e)), this);
    },
    73180: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "errorOnce", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let r = (e) => {};
    },
    73888: (e, t, r) => {
      "use strict";
      r.d(t, { KA: () => v });
      var n = r(16284),
        i = r(84402),
        s = r(50797),
        a = r(29592),
        o = r(44532),
        l = r(91339),
        u = r(71326),
        f = r(79382),
        c = r(67730),
        d = r(41755);
      class h {
        fragment;
        name;
        signature;
        topic;
        args;
        constructor(e, t, r) {
          let n = e.name,
            i = e.format();
          (0, s.n)(this, {
            fragment: e,
            name: n,
            signature: i,
            topic: t,
            args: r,
          });
        }
      }
      class p {
        fragment;
        name;
        args;
        signature;
        selector;
        value;
        constructor(e, t, r, n) {
          let i = e.name,
            a = e.format();
          (0, s.n)(this, {
            fragment: e,
            name: i,
            args: r,
            signature: a,
            selector: t,
            value: n,
          });
        }
      }
      class b {
        fragment;
        name;
        args;
        signature;
        selector;
        constructor(e, t, r) {
          let n = e.name,
            i = e.format();
          (0, s.n)(this, {
            fragment: e,
            name: n,
            args: r,
            signature: i,
            selector: t,
          });
        }
      }
      class g {
        hash;
        _isIndexed;
        static isIndexed(e) {
          return !!(e && e._isIndexed);
        }
        constructor(e) {
          (0, s.n)(this, { hash: e, _isIndexed: !0 });
        }
      }
      let m = {
          0: "generic panic",
          1: "assert(false)",
          17: "arithmetic overflow",
          18: "division or modulo by zero",
          33: "enum overflow",
          34: "invalid encoded storage byte array accessed",
          49: "out-of-bounds array access; popping on an empty array",
          50: "out-of-bounds access of an array or bytesN",
          65: "out of memory",
          81: "uninitialized function",
        },
        y = {
          "0x08c379a0": {
            signature: "Error(string)",
            name: "Error",
            inputs: ["string"],
            reason: (e) => `reverted with reason string ${JSON.stringify(e)}`,
          },
          "0x4e487b71": {
            signature: "Panic(uint256)",
            name: "Panic",
            inputs: ["uint256"],
            reason: (e) => {
              let t = "unknown panic code";
              return (
                e >= 0 && e <= 255 && m[e.toString()] && (t = m[e.toString()]),
                `reverted with panic code 0x${e.toString(16)} (${t})`
              );
            },
          },
        };
      class v {
        fragments;
        deploy;
        fallback;
        receive;
        #tv;
        #tw;
        #tA;
        #tx;
        constructor(e) {
          let t = [];
          (t = "string" == typeof e ? JSON.parse(e) : e),
            (this.#tA = new Map()),
            (this.#tv = new Map()),
            (this.#tw = new Map());
          let r = [];
          for (let e of t)
            try {
              r.push(c.FK.from(e));
            } catch (t) {
              console.log(
                `[Warning] Invalid Fragment ${JSON.stringify(e)}:`,
                t.message
              );
            }
          (0, s.n)(this, { fragments: Object.freeze(r) });
          let n = null,
            i = !1;
          (this.#tx = this.getAbiCoder()),
            this.fragments.forEach((e, t) => {
              let r;
              switch (e.type) {
                case "constructor":
                  if (this.deploy)
                    return void console.log(
                      "duplicate definition - constructor"
                    );
                  (0, s.n)(this, { deploy: e });
                  return;
                case "fallback":
                  0 === e.inputs.length
                    ? (i = !0)
                    : ((0, a.MR)(
                        !n || e.payable !== n.payable,
                        "conflicting fallback fragments",
                        `fragments[${t}]`,
                        e
                      ),
                      (i = (n = e).payable));
                  return;
                case "function":
                  r = this.#tA;
                  break;
                case "event":
                  r = this.#tw;
                  break;
                case "error":
                  r = this.#tv;
                  break;
                default:
                  return;
              }
              let o = e.format();
              r.has(o) || r.set(o, e);
            }),
            this.deploy ||
              (0, s.n)(this, { deploy: c.Pw.from("constructor()") }),
            (0, s.n)(this, { fallback: n, receive: i });
        }
        format(e) {
          let t = e ? "minimal" : "full";
          return this.fragments.map((e) => e.format(t));
        }
        formatJson() {
          return JSON.stringify(
            this.fragments
              .map((e) => e.format("json"))
              .map((e) => JSON.parse(e))
          );
        }
        getAbiCoder() {
          return u.y.defaultAbiCoder();
        }
        #tE(e, t, r) {
          if ((0, o.Lo)(e)) {
            let t = e.toLowerCase();
            for (let e of this.#tA.values()) if (t === e.selector) return e;
            return null;
          }
          if (-1 === e.indexOf("(")) {
            let n = [];
            for (let [t, r] of this.#tA) t.split("(")[0] === e && n.push(r);
            if (t) {
              let e = t.length > 0 ? t[t.length - 1] : null,
                r = t.length,
                i = !0;
              d.V.isTyped(e) && "overrides" === e.type && ((i = !1), r--);
              for (let e = n.length - 1; e >= 0; e--) {
                let t = n[e].inputs.length;
                t === r || (i && t === r - 1) || n.splice(e, 1);
              }
              for (let e = n.length - 1; e >= 0; e--) {
                let r = n[e].inputs;
                for (let i = 0; i < t.length; i++)
                  if (d.V.isTyped(t[i])) {
                    if (i >= r.length) {
                      if ("overrides" === t[i].type) continue;
                      n.splice(e, 1);
                      break;
                    }
                    if (t[i].type !== r[i].baseType) {
                      n.splice(e, 1);
                      break;
                    }
                  }
              }
            }
            if (1 === n.length && t && t.length !== n[0].inputs.length) {
              let e = t[t.length - 1];
              (null == e || Array.isArray(e) || "object" != typeof e) &&
                n.splice(0, 1);
            }
            if (0 === n.length) return null;
            if (n.length > 1 && r) {
              let t = n.map((e) => JSON.stringify(e.format())).join(", ");
              (0, a.MR)(
                !1,
                `ambiguous function description (i.e. matches ${t})`,
                "key",
                e
              );
            }
            return n[0];
          }
          let n = this.#tA.get(c.hc.from(e).format());
          return n || null;
        }
        getFunctionName(e) {
          let t = this.#tE(e, null, !1);
          return (0, a.MR)(t, "no matching function", "key", e), t.name;
        }
        hasFunction(e) {
          return !!this.#tE(e, null, !1);
        }
        getFunction(e, t) {
          return this.#tE(e, t || null, !0);
        }
        forEachFunction(e) {
          let t = Array.from(this.#tA.keys());
          t.sort((e, t) => e.localeCompare(t));
          for (let r = 0; r < t.length; r++) {
            let n = t[r];
            e(this.#tA.get(n), r);
          }
        }
        #tR(e, t, r) {
          if ((0, o.Lo)(e)) {
            let t = e.toLowerCase();
            for (let e of this.#tw.values()) if (t === e.topicHash) return e;
            return null;
          }
          if (-1 === e.indexOf("(")) {
            let n = [];
            for (let [t, r] of this.#tw) t.split("(")[0] === e && n.push(r);
            if (t) {
              for (let e = n.length - 1; e >= 0; e--)
                n[e].inputs.length < t.length && n.splice(e, 1);
              for (let e = n.length - 1; e >= 0; e--) {
                let r = n[e].inputs;
                for (let i = 0; i < t.length; i++)
                  if (d.V.isTyped(t[i]) && t[i].type !== r[i].baseType) {
                    n.splice(e, 1);
                    break;
                  }
              }
            }
            if (0 === n.length) return null;
            if (n.length > 1 && r) {
              let t = n.map((e) => JSON.stringify(e.format())).join(", ");
              (0, a.MR)(
                !1,
                `ambiguous event description (i.e. matches ${t})`,
                "key",
                e
              );
            }
            return n[0];
          }
          let n = this.#tw.get(c.Zp.from(e).format());
          return n || null;
        }
        getEventName(e) {
          let t = this.#tR(e, null, !1);
          return (0, a.MR)(t, "no matching event", "key", e), t.name;
        }
        hasEvent(e) {
          return !!this.#tR(e, null, !1);
        }
        getEvent(e, t) {
          return this.#tR(e, t || null, !0);
        }
        forEachEvent(e) {
          let t = Array.from(this.#tw.keys());
          t.sort((e, t) => e.localeCompare(t));
          for (let r = 0; r < t.length; r++) {
            let n = t[r];
            e(this.#tw.get(n), r);
          }
        }
        getError(e, t) {
          if ((0, o.Lo)(e)) {
            let t = e.toLowerCase();
            if (y[t]) return c.bp.from(y[t].signature);
            for (let e of this.#tv.values()) if (t === e.selector) return e;
            return null;
          }
          if (-1 === e.indexOf("(")) {
            let t = [];
            for (let [r, n] of this.#tv) r.split("(")[0] === e && t.push(n);
            if (0 === t.length)
              return "Error" === e
                ? c.bp.from("error Error(string)")
                : "Panic" === e
                ? c.bp.from("error Panic(uint256)")
                : null;
            if (t.length > 1) {
              let r = t.map((e) => JSON.stringify(e.format())).join(", ");
              (0, a.MR)(
                !1,
                `ambiguous error description (i.e. ${r})`,
                "name",
                e
              );
            }
            return t[0];
          }
          if ("Error(string)" === (e = c.bp.from(e).format()))
            return c.bp.from("error Error(string)");
          if ("Panic(uint256)" === e) return c.bp.from("error Panic(uint256)");
          let r = this.#tv.get(e);
          return r || null;
        }
        forEachError(e) {
          let t = Array.from(this.#tv.keys());
          t.sort((e, t) => e.localeCompare(t));
          for (let r = 0; r < t.length; r++) {
            let n = t[r];
            e(this.#tv.get(n), r);
          }
        }
        _decodeParams(e, t) {
          return this.#tx.decode(e, t);
        }
        _encodeParams(e, t) {
          return this.#tx.encode(e, t);
        }
        encodeDeploy(e) {
          return this._encodeParams(this.deploy.inputs, e || []);
        }
        decodeErrorResult(e, t) {
          if ("string" == typeof e) {
            let t = this.getError(e);
            (0, a.MR)(t, "unknown error", "fragment", e), (e = t);
          }
          return (
            (0, a.MR)(
              (0, o.ZG)(t, 0, 4) === e.selector,
              `data signature does not match error ${e.name}.`,
              "data",
              t
            ),
            this._decodeParams(e.inputs, (0, o.ZG)(t, 4))
          );
        }
        encodeErrorResult(e, t) {
          if ("string" == typeof e) {
            let t = this.getError(e);
            (0, a.MR)(t, "unknown error", "fragment", e), (e = t);
          }
          return (0, o.xW)([e.selector, this._encodeParams(e.inputs, t || [])]);
        }
        decodeFunctionData(e, t) {
          if ("string" == typeof e) {
            let t = this.getFunction(e);
            (0, a.MR)(t, "unknown function", "fragment", e), (e = t);
          }
          return (
            (0, a.MR)(
              (0, o.ZG)(t, 0, 4) === e.selector,
              `data signature does not match function ${e.name}.`,
              "data",
              t
            ),
            this._decodeParams(e.inputs, (0, o.ZG)(t, 4))
          );
        }
        encodeFunctionData(e, t) {
          if ("string" == typeof e) {
            let t = this.getFunction(e);
            (0, a.MR)(t, "unknown function", "fragment", e), (e = t);
          }
          return (0, o.xW)([e.selector, this._encodeParams(e.inputs, t || [])]);
        }
        decodeFunctionResult(e, t) {
          if ("string" == typeof e) {
            let t = this.getFunction(e);
            (0, a.MR)(t, "unknown function", "fragment", e), (e = t);
          }
          let r = "invalid length for result data",
            n = (0, o.Lm)(t);
          if (n.length % 32 == 0)
            try {
              return this.#tx.decode(e.outputs, n);
            } catch (e) {
              r = "could not decode result data";
            }
          (0, a.vA)(!1, r, "BAD_DATA", {
            value: (0, o.c$)(n),
            info: { method: e.name, signature: e.format() },
          });
        }
        makeError(e, t) {
          let r = (0, o.q5)(e, "data"),
            n = u.y.getBuiltinCallException("call", t, r);
          if (
            n.message.startsWith("execution reverted (unknown custom error)")
          ) {
            let e = (0, o.c$)(r.slice(0, 4)),
              t = this.getError(e);
            if (t)
              try {
                let e = this.#tx.decode(t.inputs, r.slice(4));
                (n.revert = { name: t.name, signature: t.format(), args: e }),
                  (n.reason = n.revert.signature),
                  (n.message = `execution reverted: ${n.reason}`);
              } catch (e) {
                n.message =
                  "execution reverted (coult not decode custom error)";
              }
          }
          let i = this.parseTransaction(t);
          return (
            i &&
              (n.invocation = {
                method: i.name,
                signature: i.signature,
                args: i.args,
              }),
            n
          );
        }
        encodeFunctionResult(e, t) {
          if ("string" == typeof e) {
            let t = this.getFunction(e);
            (0, a.MR)(t, "unknown function", "fragment", e), (e = t);
          }
          return (0, o.c$)(this.#tx.encode(e.outputs, t || []));
        }
        encodeFilterTopics(e, t) {
          if ("string" == typeof e) {
            let t = this.getEvent(e);
            (0, a.MR)(t, "unknown event", "eventFragment", e), (e = t);
          }
          (0, a.vA)(
            t.length <= e.inputs.length,
            `too many arguments for ${e.format()}`,
            "UNEXPECTED_ARGUMENT",
            { count: t.length, expectedCount: e.inputs.length }
          );
          let r = [];
          e.anonymous || r.push(e.topicHash);
          let s = (e, t) =>
            "string" === e.type
              ? (0, i.id)(t)
              : "bytes" === e.type
              ? (0, n.S)((0, o.c$)(t))
              : ("bool" === e.type && "boolean" == typeof t
                  ? (t = t ? "0x01" : "0x00")
                  : e.type.match(/^u?int/)
                  ? (t = (0, l.up)(t))
                  : e.type.match(/^bytes/)
                  ? (t = (0, o.X_)(t, 32))
                  : "address" === e.type && this.#tx.encode(["address"], [t]),
                (0, o.nx)((0, o.c$)(t), 32));
          for (
            t.forEach((t, n) => {
              let i = e.inputs[n];
              if (!i.indexed)
                return void (0, a.MR)(
                  null == t,
                  "cannot filter non-indexed parameters; must be null",
                  "contract." + i.name,
                  t
                );
              null == t
                ? r.push(null)
                : "array" === i.baseType || "tuple" === i.baseType
                ? (0, a.MR)(
                    !1,
                    "filtering with tuples or arrays not supported",
                    "contract." + i.name,
                    t
                  )
                : Array.isArray(t)
                ? r.push(t.map((e) => s(i, e)))
                : r.push(s(i, t));
            });
            r.length && null === r[r.length - 1];

          )
            r.pop();
          return r;
        }
        encodeEventLog(e, t) {
          if ("string" == typeof e) {
            let t = this.getEvent(e);
            (0, a.MR)(t, "unknown event", "eventFragment", e), (e = t);
          }
          let r = [],
            s = [],
            o = [];
          return (
            e.anonymous || r.push(e.topicHash),
            (0, a.MR)(
              t.length === e.inputs.length,
              "event arguments/values mismatch",
              "values",
              t
            ),
            e.inputs.forEach((e, a) => {
              let l = t[a];
              if (e.indexed)
                if ("string" === e.type) r.push((0, i.id)(l));
                else if ("bytes" === e.type) r.push((0, n.S)(l));
                else if ("tuple" === e.baseType || "array" === e.baseType)
                  throw Error("not implemented");
                else r.push(this.#tx.encode([e.type], [l]));
              else s.push(e), o.push(l);
            }),
            { data: this.#tx.encode(s, o), topics: r }
          );
        }
        decodeEventLog(e, t, r) {
          if ("string" == typeof e) {
            let t = this.getEvent(e);
            (0, a.MR)(t, "unknown event", "eventFragment", e), (e = t);
          }
          if (null != r && !e.anonymous) {
            let t = e.topicHash;
            (0, a.MR)(
              (0, o.Lo)(r[0], 32) && r[0].toLowerCase() === t,
              "fragment/topic mismatch",
              "topics[0]",
              r[0]
            ),
              (r = r.slice(1));
          }
          let n = [],
            i = [],
            s = [];
          e.inputs.forEach((e, t) => {
            e.indexed
              ? "string" === e.type ||
                "bytes" === e.type ||
                "tuple" === e.baseType ||
                "array" === e.baseType
                ? (n.push(c.aX.from({ type: "bytes32", name: e.name })),
                  s.push(!0))
                : (n.push(e), s.push(!1))
              : (i.push(e), s.push(!1));
          });
          let l = null != r ? this.#tx.decode(n, (0, o.xW)(r)) : null,
            u = this.#tx.decode(i, t, !0),
            d = [],
            h = [],
            p = 0,
            b = 0;
          return (
            e.inputs.forEach((e, t) => {
              let r = null;
              if (e.indexed)
                if (null == l) r = new g(null);
                else if (s[t]) r = new g(l[b++]);
                else
                  try {
                    r = l[b++];
                  } catch (e) {
                    r = e;
                  }
              else
                try {
                  r = u[p++];
                } catch (e) {
                  r = e;
                }
              d.push(r), h.push(e.name || null);
            }),
            f.Q7.fromItems(d, h)
          );
        }
        parseTransaction(e) {
          let t = (0, o.q5)(e.data, "tx.data"),
            r = (0, l.Ab)(null != e.value ? e.value : 0, "tx.value"),
            n = this.getFunction((0, o.c$)(t.slice(0, 4)));
          if (!n) return null;
          let i = this.#tx.decode(n.inputs, t.slice(4));
          return new p(n, n.selector, i, r);
        }
        parseCallResult(e) {
          throw Error("@TODO");
        }
        parseLog(e) {
          let t = this.getEvent(e.topics[0]);
          return !t || t.anonymous
            ? null
            : new h(t, t.topicHash, this.decodeEventLog(t, e.data, e.topics));
        }
        parseError(e) {
          let t = (0, o.c$)(e),
            r = this.getError((0, o.ZG)(t, 0, 4));
          if (!r) return null;
          let n = this.#tx.decode(r.inputs, (0, o.ZG)(t, 4));
          return new b(r, r.selector, n);
        }
        static from(e) {
          return e instanceof v
            ? e
            : new v(
                "string" == typeof e
                  ? JSON.parse(e)
                  : "function" == typeof e.formatJson
                  ? e.formatJson()
                  : "function" == typeof e.format
                  ? e.format("json")
                  : e
              );
        }
      }
    },
    74824: (e, t, r) => {
      "use strict";
      r.d(t, {
        Ay: () => c,
        B4: () => l,
        P5: () => o,
        WM: () => u,
        im: () => f,
        lD: () => a,
      });
      let n = BigInt(0x100000000 - 1),
        i = BigInt(32);
      function s(e, t = !1) {
        return t
          ? { h: Number(e & n), l: Number((e >> i) & n) }
          : { h: 0 | Number((e >> i) & n), l: 0 | Number(e & n) };
      }
      function a(e, t = !1) {
        let r = new Uint32Array(e.length),
          n = new Uint32Array(e.length);
        for (let i = 0; i < e.length; i++) {
          let { h: a, l: o } = s(e[i], t);
          [r[i], n[i]] = [a, o];
        }
        return [r, n];
      }
      let o = (e, t, r) => (e << r) | (t >>> (32 - r)),
        l = (e, t, r) => (t << r) | (e >>> (32 - r)),
        u = (e, t, r) => (t << (r - 32)) | (e >>> (64 - r)),
        f = (e, t, r) => (e << (r - 32)) | (t >>> (64 - r)),
        c = {
          fromBig: s,
          split: a,
          toBig: (e, t) => (BigInt(e >>> 0) << i) | BigInt(t >>> 0),
          shrSH: (e, t, r) => e >>> r,
          shrSL: (e, t, r) => (e << (32 - r)) | (t >>> r),
          rotrSH: (e, t, r) => (e >>> r) | (t << (32 - r)),
          rotrSL: (e, t, r) => (e << (32 - r)) | (t >>> r),
          rotrBH: (e, t, r) => (e << (64 - r)) | (t >>> (r - 32)),
          rotrBL: (e, t, r) => (e >>> (r - 32)) | (t << (64 - r)),
          rotr32H: (e, t) => t,
          rotr32L: (e, t) => e,
          rotlSH: o,
          rotlSL: l,
          rotlBH: u,
          rotlBL: f,
          add: function (e, t, r, n) {
            let i = (t >>> 0) + (n >>> 0);
            return { h: (e + r + ((i / 0x100000000) | 0)) | 0, l: 0 | i };
          },
          add3L: (e, t, r) => (e >>> 0) + (t >>> 0) + (r >>> 0),
          add3H: (e, t, r, n) => (t + r + n + ((e / 0x100000000) | 0)) | 0,
          add4L: (e, t, r, n) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0),
          add4H: (e, t, r, n, i) =>
            (t + r + n + i + ((e / 0x100000000) | 0)) | 0,
          add5H: (e, t, r, n, i, s) =>
            (t + r + n + i + s + ((e / 0x100000000) | 0)) | 0,
          add5L: (e, t, r, n, i) =>
            (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0) + (i >>> 0),
        };
    },
    75100: (e, t) => {
      "use strict";
      function r(e) {
        let {
            widthInt: t,
            heightInt: r,
            blurWidth: n,
            blurHeight: i,
            blurDataURL: s,
            objectFit: a,
          } = e,
          o = n ? 40 * n : t,
          l = i ? 40 * i : r,
          u = o && l ? "viewBox='0 0 " + o + " " + l + "'" : "";
        return (
          "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
          u +
          "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
          (u
            ? "none"
            : "contain" === a
            ? "xMidYMid"
            : "cover" === a
            ? "xMidYMid slice"
            : "none") +
          "' style='filter: url(%23b);' href='" +
          s +
          "'/%3E%3C/svg%3E"
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImageBlurSvg", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
    },
    76494: (e) => {
      e.exports = {
        style: {
          fontFamily: "'Oxanium', 'Oxanium Fallback'",
          fontStyle: "normal",
        },
        className: "__className_64c3a5",
        variable: "__variable_64c3a5",
      };
    },
    76582: (e, t, r) => {
      "use strict";
      var n = r(72667),
        i = r(3466),
        s = r(57946),
        a = r(97089),
        o = r(38324),
        l = s.assert,
        u = r(27585),
        f = r(90640);
      function c(e) {
        if (!(this instanceof c)) return new c(e);
        "string" == typeof e &&
          (l(Object.prototype.hasOwnProperty.call(a, e), "Unknown curve " + e),
          (e = a[e])),
          e instanceof a.PresetCurve && (e = { curve: e }),
          (this.curve = e.curve.curve),
          (this.n = this.curve.n),
          (this.nh = this.n.ushrn(1)),
          (this.g = this.curve.g),
          (this.g = e.curve.g),
          this.g.precompute(e.curve.n.bitLength() + 1),
          (this.hash = e.hash || e.curve.hash);
      }
      (e.exports = c),
        (c.prototype.keyPair = function (e) {
          return new u(this, e);
        }),
        (c.prototype.keyFromPrivate = function (e, t) {
          return u.fromPrivate(this, e, t);
        }),
        (c.prototype.keyFromPublic = function (e, t) {
          return u.fromPublic(this, e, t);
        }),
        (c.prototype.genKeyPair = function (e) {
          e || (e = {});
          for (
            var t = new i({
                hash: this.hash,
                pers: e.pers,
                persEnc: e.persEnc || "utf8",
                entropy: e.entropy || o(this.hash.hmacStrength),
                entropyEnc: (e.entropy && e.entropyEnc) || "utf8",
                nonce: this.n.toArray(),
              }),
              r = this.n.byteLength(),
              s = this.n.sub(new n(2));
            ;

          ) {
            var a = new n(t.generate(r));
            if (!(a.cmp(s) > 0)) return a.iaddn(1), this.keyFromPrivate(a);
          }
        }),
        (c.prototype._truncateToN = function (e, t, r) {
          if (n.isBN(e) || "number" == typeof e)
            i = (e = new n(e, 16)).byteLength();
          else if ("object" == typeof e) (i = e.length), (e = new n(e, 16));
          else {
            var i,
              s = e.toString();
            (i = (s.length + 1) >>> 1), (e = new n(s, 16));
          }
          "number" != typeof r && (r = 8 * i);
          var a = r - this.n.bitLength();
          return (a > 0 && (e = e.ushrn(a)), !t && e.cmp(this.n) >= 0)
            ? e.sub(this.n)
            : e;
        }),
        (c.prototype.sign = function (e, t, r, s) {
          if (
            ("object" == typeof r && ((s = r), (r = null)),
            s || (s = {}),
            "string" != typeof e && "number" != typeof e && !n.isBN(e))
          ) {
            l(
              "object" == typeof e && e && "number" == typeof e.length,
              "Expected message to be an array-like, a hex string, or a BN instance"
            ),
              l(e.length >>> 0 === e.length);
            for (var a = 0; a < e.length; a++) l((255 & e[a]) === e[a]);
          }
          (t = this.keyFromPrivate(t, r)),
            l(
              !(e = this._truncateToN(e, !1, s.msgBitLength)).isNeg(),
              "Can not sign a negative message"
            );
          var o = this.n.byteLength(),
            u = t.getPrivate().toArray("be", o),
            c = e.toArray("be", o);
          l(new n(c).eq(e), "Can not sign message");
          for (
            var d = new i({
                hash: this.hash,
                entropy: u,
                nonce: c,
                pers: s.pers,
                persEnc: s.persEnc || "utf8",
              }),
              h = this.n.sub(new n(1)),
              p = 0;
            ;
            p++
          ) {
            var b = s.k ? s.k(p) : new n(d.generate(this.n.byteLength()));
            if (0 >= (b = this._truncateToN(b, !0)).cmpn(1) || b.cmp(h) >= 0)
              continue;
            var g = this.g.mul(b);
            if (!g.isInfinity()) {
              var m = g.getX(),
                y = m.umod(this.n);
              if (0 !== y.cmpn(0)) {
                var v = b.invm(this.n).mul(y.mul(t.getPrivate()).iadd(e));
                if (0 !== (v = v.umod(this.n)).cmpn(0)) {
                  var w = !!g.getY().isOdd() | (2 * (0 !== m.cmp(y)));
                  return (
                    s.canonical &&
                      v.cmp(this.nh) > 0 &&
                      ((v = this.n.sub(v)), (w ^= 1)),
                    new f({ r: y, s: v, recoveryParam: w })
                  );
                }
              }
            }
          }
        }),
        (c.prototype.verify = function (e, t, r, n, i) {
          i || (i = {}),
            (e = this._truncateToN(e, !1, i.msgBitLength)),
            (r = this.keyFromPublic(r, n));
          var s,
            a = (t = new f(t, "hex")).r,
            o = t.s;
          if (
            0 > a.cmpn(1) ||
            a.cmp(this.n) >= 0 ||
            0 > o.cmpn(1) ||
            o.cmp(this.n) >= 0
          )
            return !1;
          var l = o.invm(this.n),
            u = l.mul(e).umod(this.n),
            c = l.mul(a).umod(this.n);
          return this.curve._maxwellTrick
            ? !(s = this.g.jmulAdd(u, r.getPublic(), c)).isInfinity() &&
                s.eqXToP(a)
            : !(s = this.g.mulAdd(u, r.getPublic(), c)).isInfinity() &&
                0 === s.getX().umod(this.n).cmp(a);
        }),
        (c.prototype.recoverPubKey = function (e, t, r, i) {
          l((3 & r) === r, "The recovery param is more than two bits"),
            (t = new f(t, i));
          var s = this.n,
            a = new n(e),
            o = t.r,
            u = t.s,
            c = 1 & r,
            d = r >> 1;
          if (o.cmp(this.curve.p.umod(this.curve.n)) >= 0 && d)
            throw Error("Unable to find sencond key candinate");
          o = d
            ? this.curve.pointFromX(o.add(this.curve.n), c)
            : this.curve.pointFromX(o, c);
          var h = t.r.invm(s),
            p = s.sub(a).mul(h).umod(s),
            b = u.mul(h).umod(s);
          return this.g.mulAdd(p, o, b);
        }),
        (c.prototype.getKeyRecoveryParam = function (e, t, r, n) {
          if (null !== (t = new f(t, n)).recoveryParam) return t.recoveryParam;
          for (var i, s = 0; s < 4; s++) {
            try {
              i = this.recoverPubKey(e, t, s);
            } catch (e) {
              continue;
            }
            if (i.eq(r)) return s;
          }
          throw Error("Unable to find valid recovery factor");
        });
    },
    77813: (e, t, r) => {
      "use strict";
      r.d(t, { z: () => i });
      var n = r(50797);
      class i {
        filter;
        emitter;
        #tM;
        constructor(e, t, r) {
          (this.#tM = t), (0, n.n)(this, { emitter: e, filter: r });
        }
        async removeListener() {
          null != this.#tM && (await this.emitter.off(this.filter, this.#tM));
        }
      }
    },
    78859: (e, t) => {
      "use strict";
      function r(e) {
        let t = {};
        for (let [r, n] of e.entries()) {
          let e = t[r];
          void 0 === e
            ? (t[r] = n)
            : Array.isArray(e)
            ? e.push(n)
            : (t[r] = [e, n]);
        }
        return t;
      }
      function n(e) {
        return "string" == typeof e
          ? e
          : ("number" != typeof e || isNaN(e)) && "boolean" != typeof e
          ? ""
          : String(e);
      }
      function i(e) {
        let t = new URLSearchParams();
        for (let [r, i] of Object.entries(e))
          if (Array.isArray(i)) for (let e of i) t.append(r, n(e));
          else t.set(r, n(i));
        return t;
      }
      function s(e) {
        for (
          var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1;
          n < t;
          n++
        )
          r[n - 1] = arguments[n];
        for (let t of r) {
          for (let r of t.keys()) e.delete(r);
          for (let [r, n] of t.entries()) e.append(r, n);
        }
        return e;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          assign: function () {
            return s;
          },
          searchParamsToUrlQuery: function () {
            return r;
          },
          urlQueryToSearchParams: function () {
            return i;
          },
        });
    },
    79382: (e, t, r) => {
      "use strict";
      r.d(t, {
        AU: () => m,
        Q7: () => p,
        Ue: () => g,
        Yx: () => o,
        mP: () => y,
      });
      var n = r(91339),
        i = r(29592),
        s = r(44532),
        a = r(50797);
      let o = 32,
        l = new Uint8Array(32),
        u = ["then"],
        f = {},
        c = new WeakMap();
      function d(e) {
        return c.get(e);
      }
      function h(e, t) {
        let r = Error(
          `deferred error during ABI decoding triggered accessing ${e}`
        );
        throw ((r.error = t), r);
      }
      class p extends Array {
        #tS;
        constructor(...e) {
          var t, r;
          let i = e[0],
            s = e[1],
            a = (e[2] || []).slice(),
            o = !0;
          i !== f && ((s = e), (a = []), (o = !1)),
            super(s.length),
            s.forEach((e, t) => {
              this[t] = e;
            });
          let l = a.reduce(
            (e, t) => (
              "string" == typeof t && e.set(t, (e.get(t) || 0) + 1), e
            ),
            new Map()
          );
          if (
            ((t = Object.freeze(
              s.map((e, t) => {
                let r = a[t];
                return null != r && 1 === l.get(r) ? r : null;
              })
            )),
            c.set(this, t),
            (this.#tS = []),
            null == this.#tS && this.#tS,
            !o)
          )
            return;
          Object.freeze(this);
          let p = new Proxy(this, {
            get: (e, t, r) => {
              if ("string" == typeof t) {
                if (t.match(/^[0-9]+$/)) {
                  let r = (0, n.WZ)(t, "%index");
                  if (r < 0 || r >= this.length)
                    throw RangeError("out of result range");
                  let i = e[r];
                  return i instanceof Error && h(`index ${r}`, i), i;
                }
                if (u.indexOf(t) >= 0) return Reflect.get(e, t, r);
                let i = e[t];
                if (i instanceof Function)
                  return function (...t) {
                    return i.apply(this === r ? e : this, t);
                  };
                if (!(t in e))
                  return e.getValue.apply(this === r ? e : this, [t]);
              }
              return Reflect.get(e, t, r);
            },
          });
          return (r = d(this)), c.set(p, r), p;
        }
        toArray(e) {
          let t = [];
          return (
            this.forEach((r, n) => {
              r instanceof Error && h(`index ${n}`, r),
                e && r instanceof p && (r = r.toArray(e)),
                t.push(r);
            }),
            t
          );
        }
        toObject(e) {
          let t = d(this);
          return t.reduce(
            (r, n, s) => (
              (0, i.vA)(
                null != n,
                `value at index ${s} unnamed`,
                "UNSUPPORTED_OPERATION",
                { operation: "toObject()" }
              ),
              (function e(t, r, n) {
                return t.indexOf(null) >= 0
                  ? r.map((t, r) => (t instanceof p ? e(d(t), t, n) : t))
                  : t.reduce((t, i, s) => {
                      let a = r.getValue(i);
                      return (
                        i in t ||
                          (n && a instanceof p && (a = e(d(a), a, n)),
                          (t[i] = a)),
                        t
                      );
                    }, {});
              })(t, this, e)
            ),
            {}
          );
        }
        slice(e, t) {
          null == e && (e = 0),
            e < 0 && (e += this.length) < 0 && (e = 0),
            null == t && (t = this.length),
            t < 0 && (t += this.length) < 0 && (t = 0),
            t > this.length && (t = this.length);
          let r = d(this),
            n = [],
            i = [];
          for (let s = e; s < t; s++) n.push(this[s]), i.push(r[s]);
          return new p(f, n, i);
        }
        filter(e, t) {
          let r = d(this),
            n = [],
            i = [];
          for (let s = 0; s < this.length; s++) {
            let a = this[s];
            a instanceof Error && h(`index ${s}`, a),
              e.call(t, a, s, this) && (n.push(a), i.push(r[s]));
          }
          return new p(f, n, i);
        }
        map(e, t) {
          let r = [];
          for (let n = 0; n < this.length; n++) {
            let i = this[n];
            i instanceof Error && h(`index ${n}`, i),
              r.push(e.call(t, i, n, this));
          }
          return r;
        }
        getValue(e) {
          let t = d(this).indexOf(e);
          if (-1 === t) return;
          let r = this[t];
          return (
            r instanceof Error && h(`property ${JSON.stringify(e)}`, r.error), r
          );
        }
        static fromItems(e, t) {
          return new p(f, e, t);
        }
      }
      function b(e) {
        let t = (0, n.c4)(e);
        return (
          (0, i.vA)(t.length <= o, "value out-of-bounds", "BUFFER_OVERRUN", {
            buffer: t,
            length: o,
            offset: t.length,
          }),
          t.length !== o &&
            (t = (0, s.Lm)((0, s.xW)([l.slice(t.length % o), t]))),
          t
        );
      }
      class g {
        name;
        type;
        localName;
        dynamic;
        constructor(e, t, r, n) {
          (0, a.n)(
            this,
            { name: e, type: t, localName: r, dynamic: n },
            {
              name: "string",
              type: "string",
              localName: "string",
              dynamic: "boolean",
            }
          );
        }
        _throwError(e, t) {
          (0, i.MR)(!1, e, this.localName, t);
        }
      }
      class m {
        #eo;
        #tP;
        constructor() {
          (this.#eo = []), (this.#tP = 0);
        }
        get data() {
          return (0, s.xW)(this.#eo);
        }
        get length() {
          return this.#tP;
        }
        #tO(e) {
          return this.#eo.push(e), (this.#tP += e.length), e.length;
        }
        appendWriter(e) {
          return this.#tO((0, s.Lm)(e.data));
        }
        writeBytes(e) {
          let t = (0, s.Lm)(e),
            r = t.length % o;
          return r && (t = (0, s.Lm)((0, s.xW)([t, l.slice(r)]))), this.#tO(t);
        }
        writeValue(e) {
          return this.#tO(b(e));
        }
        writeUpdatableValue() {
          let e = this.#eo.length;
          return (
            this.#eo.push(l),
            (this.#tP += o),
            (t) => {
              this.#eo[e] = b(t);
            }
          );
        }
      }
      class y {
        allowLoose;
        #eo;
        #tp;
        #tI;
        #tk;
        #tN;
        constructor(e, t, r) {
          (0, a.n)(this, { allowLoose: !!t }),
            (this.#eo = (0, s.Lm)(e)),
            (this.#tI = 0),
            (this.#tk = null),
            (this.#tN = null != r ? r : 1024),
            (this.#tp = 0);
        }
        get data() {
          return (0, s.c$)(this.#eo);
        }
        get dataLength() {
          return this.#eo.length;
        }
        get consumed() {
          return this.#tp;
        }
        get bytes() {
          return new Uint8Array(this.#eo);
        }
        #tC(e) {
          if (this.#tk) return this.#tk.#tC(e);
          (this.#tI += e),
            (0, i.vA)(
              this.#tN < 1 || this.#tI <= this.#tN * this.dataLength,
              `compressed ABI data exceeds inflation ratio of ${
                this.#tN
              } ( see: https://github.com/ethers-io/ethers.js/issues/4537 )`,
              "BUFFER_OVERRUN",
              {
                buffer: (0, s.Lm)(this.#eo),
                offset: this.#tp,
                length: e,
                info: { bytesRead: this.#tI, dataLength: this.dataLength },
              }
            );
        }
        #tB(e, t, r) {
          let n = Math.ceil(t / o) * o;
          return (
            this.#tp + n > this.#eo.length &&
              (this.allowLoose && r && this.#tp + t <= this.#eo.length
                ? (n = t)
                : (0, i.vA)(!1, "data out-of-bounds", "BUFFER_OVERRUN", {
                    buffer: (0, s.Lm)(this.#eo),
                    length: this.#eo.length,
                    offset: this.#tp + n,
                  })),
            this.#eo.slice(this.#tp, this.#tp + n)
          );
        }
        subReader(e) {
          let t = new y(
            this.#eo.slice(this.#tp + e),
            this.allowLoose,
            this.#tN
          );
          return (t.#tk = this), t;
        }
        readBytes(e, t) {
          let r = this.#tB(0, e, !!t);
          return this.#tC(e), (this.#tp += r.length), r.slice(0, e);
        }
        readValue() {
          return (0, n.Dg)(this.readBytes(o));
        }
        readIndex() {
          return (0, n.Ro)(this.readBytes(o));
        }
      }
    },
    81683: (e, t, r) => {
      "use strict";
      var n = r(2953),
        i = r(97089),
        s = r(57946),
        a = s.assert,
        o = s.parseBytes,
        l = r(34076),
        u = r(99109);
      function f(e) {
        if (
          (a("ed25519" === e, "only tested with ed25519 so far"),
          !(this instanceof f))
        )
          return new f(e);
        (e = i[e].curve),
          (this.curve = e),
          (this.g = e.g),
          this.g.precompute(e.n.bitLength() + 1),
          (this.pointClass = e.point().constructor),
          (this.encodingLength = Math.ceil(e.n.bitLength() / 8)),
          (this.hash = n.sha512);
      }
      (e.exports = f),
        (f.prototype.sign = function (e, t) {
          e = o(e);
          var r = this.keyFromSecret(t),
            n = this.hashInt(r.messagePrefix(), e),
            i = this.g.mul(n),
            s = this.encodePoint(i),
            a = this.hashInt(s, r.pubBytes(), e).mul(r.priv()),
            l = n.add(a).umod(this.curve.n);
          return this.makeSignature({ R: i, S: l, Rencoded: s });
        }),
        (f.prototype.verify = function (e, t, r) {
          if (
            ((e = o(e)),
            (t = this.makeSignature(t)).S().gte(t.eddsa.curve.n) ||
              t.S().isNeg())
          )
            return !1;
          var n = this.keyFromPublic(r),
            i = this.hashInt(t.Rencoded(), n.pubBytes(), e),
            s = this.g.mul(t.S());
          return t.R().add(n.pub().mul(i)).eq(s);
        }),
        (f.prototype.hashInt = function () {
          for (var e = this.hash(), t = 0; t < arguments.length; t++)
            e.update(arguments[t]);
          return s.intFromLE(e.digest()).umod(this.curve.n);
        }),
        (f.prototype.keyFromPublic = function (e) {
          return l.fromPublic(this, e);
        }),
        (f.prototype.keyFromSecret = function (e) {
          return l.fromSecret(this, e);
        }),
        (f.prototype.makeSignature = function (e) {
          return e instanceof u ? e : new u(this, e);
        }),
        (f.prototype.encodePoint = function (e) {
          var t = e.getY().toArray("le", this.encodingLength);
          return (t[this.encodingLength - 1] |= 128 * !!e.getX().isOdd()), t;
        }),
        (f.prototype.decodePoint = function (e) {
          var t = (e = s.parseBytes(e)).length - 1,
            r = e.slice(0, t).concat(-129 & e[t]),
            n = (128 & e[t]) != 0,
            i = s.intFromLE(r);
          return this.curve.pointFromY(i, n);
        }),
        (f.prototype.encodeInt = function (e) {
          return e.toArray("le", this.encodingLength);
        }),
        (f.prototype.decodeInt = function (e) {
          return s.intFromLE(e);
        }),
        (f.prototype.isPoint = function (e) {
          return e instanceof this.pointClass;
        });
    },
    81960: (e, t, r) => {
      "use strict";
      e.exports = r(98335);
    },
    82757: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          formatUrl: function () {
            return s;
          },
          formatWithValidation: function () {
            return o;
          },
          urlObjectKeys: function () {
            return a;
          },
        });
      let n = r(6966)._(r(78859)),
        i = /https?|ftp|gopher|file/;
      function s(e) {
        let { auth: t, hostname: r } = e,
          s = e.protocol || "",
          a = e.pathname || "",
          o = e.hash || "",
          l = e.query || "",
          u = !1;
        (t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : ""),
          e.host
            ? (u = t + e.host)
            : r &&
              ((u = t + (~r.indexOf(":") ? "[" + r + "]" : r)),
              e.port && (u += ":" + e.port)),
          l &&
            "object" == typeof l &&
            (l = String(n.urlQueryToSearchParams(l)));
        let f = e.search || (l && "?" + l) || "";
        return (
          s && !s.endsWith(":") && (s += ":"),
          e.slashes || ((!s || i.test(s)) && !1 !== u)
            ? ((u = "//" + (u || "")), a && "/" !== a[0] && (a = "/" + a))
            : u || (u = ""),
          o && "#" !== o[0] && (o = "#" + o),
          f && "?" !== f[0] && (f = "?" + f),
          "" +
            s +
            u +
            (a = a.replace(/[?#]/g, encodeURIComponent)) +
            (f = f.replace("#", "%23")) +
            o
        );
      }
      let a = [
        "auth",
        "hash",
        "host",
        "hostname",
        "href",
        "path",
        "pathname",
        "port",
        "protocol",
        "query",
        "search",
        "slashes",
      ];
      function o(e) {
        return s(e);
      }
    },
    84115: (e) => {
      "function" == typeof Object.create
        ? (e.exports = function (e, t) {
            t &&
              ((e.super_ = t),
              (e.prototype = Object.create(t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })));
          })
        : (e.exports = function (e, t) {
            if (t) {
              e.super_ = t;
              var r = function () {};
              (r.prototype = t.prototype),
                (e.prototype = new r()),
                (e.prototype.constructor = e);
            }
          });
    },
    84308: (e, t, r) => {
      "use strict";
      r.d(t, {
        J9: () => c,
        VS: () => d,
        eB: () => h,
        tG: () => p,
        uI: () => g,
        z5: () => b,
      });
      var n = r(50797),
        i = r(44532),
        s = r(91339),
        a = r(29592),
        o = r(62949);
      let l = BigInt(0);
      function u(e) {
        return null == e ? null : e;
      }
      function f(e) {
        return null == e ? null : e.toString();
      }
      class c {
        gasPrice;
        maxFeePerGas;
        maxPriorityFeePerGas;
        constructor(e, t, r) {
          (0, n.n)(this, {
            gasPrice: u(e),
            maxFeePerGas: u(t),
            maxPriorityFeePerGas: u(r),
          });
        }
        toJSON() {
          let { gasPrice: e, maxFeePerGas: t, maxPriorityFeePerGas: r } = this;
          return {
            _type: "FeeData",
            gasPrice: f(e),
            maxFeePerGas: f(t),
            maxPriorityFeePerGas: f(r),
          };
        }
      }
      function d(e) {
        let t = {};
        for (let r of (e.to && (t.to = e.to),
        e.from && (t.from = e.from),
        e.data && (t.data = (0, i.c$)(e.data)),
        "chainId,gasLimit,gasPrice,maxFeePerBlobGas,maxFeePerGas,maxPriorityFeePerGas,value".split(
          /,/
        )))
          r in e && null != e[r] && (t[r] = (0, s.Ab)(e[r], `request.${r}`));
        for (let r of "type,nonce".split(/,/))
          r in e && null != e[r] && (t[r] = (0, s.WZ)(e[r], `request.${r}`));
        return (
          e.accessList && (t.accessList = (0, o.$)(e.accessList)),
          e.authorizationList &&
            (t.authorizationList = e.authorizationList.slice()),
          "blockTag" in e && (t.blockTag = e.blockTag),
          "enableCcipRead" in e && (t.enableCcipRead = !!e.enableCcipRead),
          "customData" in e && (t.customData = e.customData),
          "blobVersionedHashes" in e &&
            e.blobVersionedHashes &&
            (t.blobVersionedHashes = e.blobVersionedHashes.slice()),
          "kzg" in e && (t.kzg = e.kzg),
          "blobs" in e &&
            e.blobs &&
            (t.blobs = e.blobs.map((e) =>
              (0, i.f)(e) ? (0, i.c$)(e) : Object.assign({}, e)
            )),
          t
        );
      }
      class h {
        provider;
        number;
        hash;
        timestamp;
        parentHash;
        parentBeaconBlockRoot;
        nonce;
        difficulty;
        gasLimit;
        gasUsed;
        stateRoot;
        receiptsRoot;
        blobGasUsed;
        excessBlobGas;
        miner;
        prevRandao;
        extraData;
        baseFeePerGas;
        #tT;
        constructor(e, t) {
          (this.#tT = e.transactions.map((e) =>
            "string" != typeof e ? new g(e, t) : e
          )),
            (0, n.n)(this, {
              provider: t,
              hash: u(e.hash),
              number: e.number,
              timestamp: e.timestamp,
              parentHash: e.parentHash,
              parentBeaconBlockRoot: e.parentBeaconBlockRoot,
              nonce: e.nonce,
              difficulty: e.difficulty,
              gasLimit: e.gasLimit,
              gasUsed: e.gasUsed,
              blobGasUsed: e.blobGasUsed,
              excessBlobGas: e.excessBlobGas,
              miner: e.miner,
              prevRandao: u(e.prevRandao),
              extraData: e.extraData,
              baseFeePerGas: u(e.baseFeePerGas),
              stateRoot: e.stateRoot,
              receiptsRoot: e.receiptsRoot,
            });
        }
        get transactions() {
          return this.#tT.map((e) => ("string" == typeof e ? e : e.hash));
        }
        get prefetchedTransactions() {
          let e = this.#tT.slice();
          return 0 === e.length
            ? []
            : ((0, a.vA)(
                "object" == typeof e[0],
                "transactions were not prefetched with block request",
                "UNSUPPORTED_OPERATION",
                { operation: "transactionResponses()" }
              ),
              e);
        }
        toJSON() {
          let {
            baseFeePerGas: e,
            difficulty: t,
            extraData: r,
            gasLimit: n,
            gasUsed: i,
            hash: s,
            miner: a,
            prevRandao: o,
            nonce: l,
            number: u,
            parentHash: c,
            parentBeaconBlockRoot: d,
            stateRoot: h,
            receiptsRoot: p,
            timestamp: b,
            transactions: g,
          } = this;
          return {
            _type: "Block",
            baseFeePerGas: f(e),
            difficulty: f(t),
            extraData: r,
            gasLimit: f(n),
            gasUsed: f(i),
            blobGasUsed: f(this.blobGasUsed),
            excessBlobGas: f(this.excessBlobGas),
            hash: s,
            miner: a,
            prevRandao: o,
            nonce: l,
            number: u,
            parentHash: c,
            timestamp: b,
            parentBeaconBlockRoot: d,
            stateRoot: h,
            receiptsRoot: p,
            transactions: g,
          };
        }
        [Symbol.iterator]() {
          let e = 0,
            t = this.transactions;
          return {
            next: () =>
              e < this.length
                ? { value: t[e++], done: !1 }
                : { value: void 0, done: !0 },
          };
        }
        get length() {
          return this.#tT.length;
        }
        get date() {
          return null == this.timestamp ? null : new Date(1e3 * this.timestamp);
        }
        async getTransaction(e) {
          let t;
          if ("number" == typeof e) t = this.#tT[e];
          else {
            let r = e.toLowerCase();
            for (let e of this.#tT)
              if ("string" == typeof e) {
                if (e !== r) continue;
                t = e;
                break;
              } else {
                if (e.hash !== r) continue;
                t = e;
                break;
              }
          }
          if (null == t) throw Error("no such tx");
          return "string" == typeof t
            ? await this.provider.getTransaction(t)
            : t;
        }
        getPrefetchedTransaction(e) {
          let t = this.prefetchedTransactions;
          if ("number" == typeof e) return t[e];
          for (let r of ((e = e.toLowerCase()), t)) if (r.hash === e) return r;
          (0, a.MR)(!1, "no matching transaction", "indexOrHash", e);
        }
        isMined() {
          return !!this.hash;
        }
        isLondon() {
          return !!this.baseFeePerGas;
        }
        orphanedEvent() {
          var e;
          if (!this.isMined()) throw Error("");
          return (
            (e = this), { orphan: "drop-block", hash: e.hash, number: e.number }
          );
        }
      }
      class p {
        provider;
        transactionHash;
        blockHash;
        blockNumber;
        removed;
        address;
        data;
        topics;
        index;
        transactionIndex;
        constructor(e, t) {
          this.provider = t;
          let r = Object.freeze(e.topics.slice());
          (0, n.n)(this, {
            transactionHash: e.transactionHash,
            blockHash: e.blockHash,
            blockNumber: e.blockNumber,
            removed: e.removed,
            address: e.address,
            data: e.data,
            topics: r,
            index: e.index,
            transactionIndex: e.transactionIndex,
          });
        }
        toJSON() {
          let {
            address: e,
            blockHash: t,
            blockNumber: r,
            data: n,
            index: i,
            removed: s,
            topics: a,
            transactionHash: o,
            transactionIndex: l,
          } = this;
          return {
            _type: "log",
            address: e,
            blockHash: t,
            blockNumber: r,
            data: n,
            index: i,
            removed: s,
            topics: a,
            transactionHash: o,
            transactionIndex: l,
          };
        }
        async getBlock() {
          let e = await this.provider.getBlock(this.blockHash);
          return (
            (0, a.vA)(!!e, "failed to find transaction", "UNKNOWN_ERROR", {}), e
          );
        }
        async getTransaction() {
          let e = await this.provider.getTransaction(this.transactionHash);
          return (
            (0, a.vA)(!!e, "failed to find transaction", "UNKNOWN_ERROR", {}), e
          );
        }
        async getTransactionReceipt() {
          let e = await this.provider.getTransactionReceipt(
            this.transactionHash
          );
          return (
            (0, a.vA)(
              !!e,
              "failed to find transaction receipt",
              "UNKNOWN_ERROR",
              {}
            ),
            e
          );
        }
        removedEvent() {
          var e;
          return (
            (e = this),
            {
              orphan: "drop-log",
              log: {
                transactionHash: e.transactionHash,
                blockHash: e.blockHash,
                blockNumber: e.blockNumber,
                address: e.address,
                data: e.data,
                topics: Object.freeze(e.topics.slice()),
                index: e.index,
              },
            }
          );
        }
      }
      class b {
        provider;
        to;
        from;
        contractAddress;
        hash;
        index;
        blockHash;
        blockNumber;
        logsBloom;
        gasUsed;
        blobGasUsed;
        cumulativeGasUsed;
        gasPrice;
        blobGasPrice;
        type;
        status;
        root;
        #tL;
        constructor(e, t) {
          this.#tL = Object.freeze(e.logs.map((e) => new p(e, t)));
          let r = l;
          null != e.effectiveGasPrice
            ? (r = e.effectiveGasPrice)
            : null != e.gasPrice && (r = e.gasPrice),
            (0, n.n)(this, {
              provider: t,
              to: e.to,
              from: e.from,
              contractAddress: e.contractAddress,
              hash: e.hash,
              index: e.index,
              blockHash: e.blockHash,
              blockNumber: e.blockNumber,
              logsBloom: e.logsBloom,
              gasUsed: e.gasUsed,
              cumulativeGasUsed: e.cumulativeGasUsed,
              blobGasUsed: e.blobGasUsed,
              gasPrice: r,
              blobGasPrice: e.blobGasPrice,
              type: e.type,
              status: e.status,
              root: e.root,
            });
        }
        get logs() {
          return this.#tL;
        }
        toJSON() {
          let {
            to: e,
            from: t,
            contractAddress: r,
            hash: n,
            index: i,
            blockHash: s,
            blockNumber: a,
            logsBloom: o,
            logs: l,
            status: u,
            root: c,
          } = this;
          return {
            _type: "TransactionReceipt",
            blockHash: s,
            blockNumber: a,
            contractAddress: r,
            cumulativeGasUsed: f(this.cumulativeGasUsed),
            from: t,
            gasPrice: f(this.gasPrice),
            blobGasUsed: f(this.blobGasUsed),
            blobGasPrice: f(this.blobGasPrice),
            gasUsed: f(this.gasUsed),
            hash: n,
            index: i,
            logs: l,
            logsBloom: o,
            root: c,
            status: u,
            to: e,
          };
        }
        get length() {
          return this.logs.length;
        }
        [Symbol.iterator]() {
          let e = 0;
          return {
            next: () =>
              e < this.length
                ? { value: this.logs[e++], done: !1 }
                : { value: void 0, done: !0 },
          };
        }
        get fee() {
          return this.gasUsed * this.gasPrice;
        }
        async getBlock() {
          let e = await this.provider.getBlock(this.blockHash);
          if (null == e) throw Error("TODO");
          return e;
        }
        async getTransaction() {
          let e = await this.provider.getTransaction(this.hash);
          if (null == e) throw Error("TODO");
          return e;
        }
        async getResult() {
          return await this.provider.getTransactionResult(this.hash);
        }
        async confirmations() {
          return (await this.provider.getBlockNumber()) - this.blockNumber + 1;
        }
        removedEvent() {
          return y(this);
        }
        reorderedEvent(e) {
          return (
            (0, a.vA)(
              !e || e.isMined(),
              "unmined 'other' transction cannot be orphaned",
              "UNSUPPORTED_OPERATION",
              { operation: "reorderedEvent(other)" }
            ),
            m(this, e)
          );
        }
      }
      class g {
        provider;
        blockNumber;
        blockHash;
        index;
        hash;
        type;
        to;
        from;
        nonce;
        gasLimit;
        gasPrice;
        maxPriorityFeePerGas;
        maxFeePerGas;
        maxFeePerBlobGas;
        data;
        value;
        chainId;
        signature;
        accessList;
        blobVersionedHashes;
        authorizationList;
        #tU;
        constructor(e, t) {
          (this.provider = t),
            (this.blockNumber = null != e.blockNumber ? e.blockNumber : null),
            (this.blockHash = null != e.blockHash ? e.blockHash : null),
            (this.hash = e.hash),
            (this.index = e.index),
            (this.type = e.type),
            (this.from = e.from),
            (this.to = e.to || null),
            (this.gasLimit = e.gasLimit),
            (this.nonce = e.nonce),
            (this.data = e.data),
            (this.value = e.value),
            (this.gasPrice = e.gasPrice),
            (this.maxPriorityFeePerGas =
              null != e.maxPriorityFeePerGas ? e.maxPriorityFeePerGas : null),
            (this.maxFeePerGas =
              null != e.maxFeePerGas ? e.maxFeePerGas : null),
            (this.maxFeePerBlobGas =
              null != e.maxFeePerBlobGas ? e.maxFeePerBlobGas : null),
            (this.chainId = e.chainId),
            (this.signature = e.signature),
            (this.accessList = null != e.accessList ? e.accessList : null),
            (this.blobVersionedHashes =
              null != e.blobVersionedHashes ? e.blobVersionedHashes : null),
            (this.authorizationList =
              null != e.authorizationList ? e.authorizationList : null),
            (this.#tU = -1);
        }
        toJSON() {
          let {
            blockNumber: e,
            blockHash: t,
            index: r,
            hash: n,
            type: i,
            to: s,
            from: a,
            nonce: o,
            data: l,
            signature: u,
            accessList: c,
            blobVersionedHashes: d,
          } = this;
          return {
            _type: "TransactionResponse",
            accessList: c,
            blockNumber: e,
            blockHash: t,
            blobVersionedHashes: d,
            chainId: f(this.chainId),
            data: l,
            from: a,
            gasLimit: f(this.gasLimit),
            gasPrice: f(this.gasPrice),
            hash: n,
            maxFeePerGas: f(this.maxFeePerGas),
            maxPriorityFeePerGas: f(this.maxPriorityFeePerGas),
            maxFeePerBlobGas: f(this.maxFeePerBlobGas),
            nonce: o,
            signature: u,
            to: s,
            index: r,
            type: i,
            value: f(this.value),
          };
        }
        async getBlock() {
          let e = this.blockNumber;
          if (null == e) {
            let t = await this.getTransaction();
            t && (e = t.blockNumber);
          }
          if (null == e) return null;
          let t = this.provider.getBlock(e);
          if (null == t) throw Error("TODO");
          return t;
        }
        async getTransaction() {
          return this.provider.getTransaction(this.hash);
        }
        async confirmations() {
          if (null == this.blockNumber) {
            let { tx: e, blockNumber: t } = await (0, n.k)({
              tx: this.getTransaction(),
              blockNumber: this.provider.getBlockNumber(),
            });
            return null == e || null == e.blockNumber
              ? 0
              : t - e.blockNumber + 1;
          }
          return (await this.provider.getBlockNumber()) - this.blockNumber + 1;
        }
        async wait(e, t) {
          let r = null == e ? 1 : e,
            i = null == t ? 0 : t,
            s = this.#tU,
            o = -1,
            u = -1 === s,
            f = async () => {
              if (u) return null;
              let { blockNumber: e, nonce: t } = await (0, n.k)({
                blockNumber: this.provider.getBlockNumber(),
                nonce: this.provider.getTransactionCount(this.from),
              });
              if (t < this.nonce) {
                s = e;
                return;
              }
              if (u) return null;
              let i = await this.getTransaction();
              if (!i || null == i.blockNumber)
                for (
                  -1 === o && (o = s - 3) < this.#tU && (o = this.#tU);
                  o <= e;

                ) {
                  if (u) return null;
                  let t = await this.provider.getBlock(o, !0);
                  if (null == t) break;
                  for (let e of t) if (e === this.hash) return;
                  for (let n = 0; n < t.length; n++) {
                    let i = await t.getTransaction(n);
                    if (i.from === this.from && i.nonce === this.nonce) {
                      if (u) return null;
                      let t = await this.provider.getTransactionReceipt(i.hash);
                      if (null == t || e - t.blockNumber + 1 < r) return;
                      let n = "replaced";
                      i.data === this.data &&
                      i.to === this.to &&
                      i.value === this.value
                        ? (n = "repriced")
                        : "0x" === i.data &&
                          i.from === i.to &&
                          i.value === l &&
                          (n = "cancelled"),
                        (0, a.vA)(
                          !1,
                          "transaction was replaced",
                          "TRANSACTION_REPLACED",
                          {
                            cancelled: "replaced" === n || "cancelled" === n,
                            reason: n,
                            replacement: i.replaceableTransaction(s),
                            hash: i.hash,
                            receipt: t,
                          }
                        );
                    }
                  }
                  o++;
                }
            },
            c = (e) => {
              if (null == e || 0 !== e.status) return e;
              (0, a.vA)(
                !1,
                "transaction execution reverted",
                "CALL_EXCEPTION",
                {
                  action: "sendTransaction",
                  data: null,
                  reason: null,
                  invocation: null,
                  revert: null,
                  transaction: { to: e.to, from: e.from, data: "" },
                  receipt: e,
                }
              );
            },
            d = await this.provider.getTransactionReceipt(this.hash);
          if (0 === r) return c(d);
          if (d) {
            if ((await d.confirmations()) >= r) return c(d);
          } else if ((await f(), 0 === r)) return null;
          let h = new Promise((e, t) => {
            let n = [],
              o = () => {
                n.forEach((e) => e());
              };
            if (
              (n.push(() => {
                u = !0;
              }),
              i > 0)
            ) {
              let e = setTimeout(() => {
                o(), t((0, a.xz)("wait for transaction timeout", "TIMEOUT"));
              }, i);
              n.push(() => {
                clearTimeout(e);
              });
            }
            let l = async (n) => {
              if ((await n.confirmations()) >= r) {
                o();
                try {
                  e(c(n));
                } catch (e) {
                  t(e);
                }
              }
            };
            if (
              (n.push(() => {
                this.provider.off(this.hash, l);
              }),
              this.provider.on(this.hash, l),
              s >= 0)
            ) {
              let e = async () => {
                try {
                  await f();
                } catch (e) {
                  if ((0, a.bJ)(e, "TRANSACTION_REPLACED")) {
                    o(), t(e);
                    return;
                  }
                }
                u || this.provider.once("block", e);
              };
              n.push(() => {
                this.provider.off("block", e);
              }),
                this.provider.once("block", e);
            }
          });
          return await h;
        }
        isMined() {
          return null != this.blockHash;
        }
        isLegacy() {
          return 0 === this.type;
        }
        isBerlin() {
          return 1 === this.type;
        }
        isLondon() {
          return 2 === this.type;
        }
        isCancun() {
          return 3 === this.type;
        }
        removedEvent() {
          return (
            (0, a.vA)(
              this.isMined(),
              "unmined transaction canot be orphaned",
              "UNSUPPORTED_OPERATION",
              { operation: "removeEvent()" }
            ),
            y(this)
          );
        }
        reorderedEvent(e) {
          return (
            (0, a.vA)(
              this.isMined(),
              "unmined transaction canot be orphaned",
              "UNSUPPORTED_OPERATION",
              { operation: "removeEvent()" }
            ),
            (0, a.vA)(
              !e || e.isMined(),
              "unmined 'other' transaction canot be orphaned",
              "UNSUPPORTED_OPERATION",
              { operation: "removeEvent()" }
            ),
            m(this, e)
          );
        }
        replaceableTransaction(e) {
          (0, a.MR)(
            Number.isInteger(e) && e >= 0,
            "invalid startBlock",
            "startBlock",
            e
          );
          let t = new g(this, this.provider);
          return (t.#tU = e), t;
        }
      }
      function m(e, t) {
        return { orphan: "reorder-transaction", tx: e, other: t };
      }
      function y(e) {
        return { orphan: "drop-transaction", tx: e };
      }
    },
    84402: (e, t, r) => {
      "use strict";
      r.d(t, { id: () => s });
      var n = r(16284),
        i = r(30167);
      function s(e) {
        return (0, n.S)((0, i.YW)(e));
      }
    },
    85029: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let n = r(12115),
        i = n.useLayoutEffect,
        s = n.useEffect;
      function a(e) {
        let { headManager: t, reduceComponentsToState: r } = e;
        function a() {
          if (t && t.mountedInstances) {
            let i = n.Children.toArray(
              Array.from(t.mountedInstances).filter(Boolean)
            );
            t.updateHead(r(i, e));
          }
        }
        return (
          i(() => {
            var r;
            return (
              null == t ||
                null == (r = t.mountedInstances) ||
                r.add(e.children),
              () => {
                var r;
                null == t ||
                  null == (r = t.mountedInstances) ||
                  r.delete(e.children);
              }
            );
          }),
          i(
            () => (
              t && (t._pendingUpdate = a),
              () => {
                t && (t._pendingUpdate = a);
              }
            )
          ),
          s(
            () => (
              t &&
                t._pendingUpdate &&
                (t._pendingUpdate(), (t._pendingUpdate = null)),
              () => {
                t &&
                  t._pendingUpdate &&
                  (t._pendingUpdate(), (t._pendingUpdate = null));
              }
            )
          ),
          null
        );
      }
    },
    85744: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "workAsyncStorage", {
          enumerable: !0,
          get: function () {
            return n.workAsyncStorageInstance;
          },
        });
      let n = r(17828);
    },
    86752: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ImageConfigContext", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let n = r(88229)._(r(12115)),
        i = r(95840),
        s = n.default.createContext(i.imageConfigDefault);
    },
    87349: (e, t, r) => {
      "use strict";
      function n(e) {
        if (!Number.isSafeInteger(e) || e < 0)
          throw Error(`Wrong positive integer: ${e}`);
      }
      function i(e, ...t) {
        if (!(e instanceof Uint8Array)) throw Error("Expected Uint8Array");
        if (t.length > 0 && !t.includes(e.length))
          throw Error(
            `Expected Uint8Array of length ${t}, not of length=${e.length}`
          );
      }
      function s(e) {
        if ("function" != typeof e || "function" != typeof e.create)
          throw Error("Hash should be wrapped by utils.wrapConstructor");
        n(e.outputLen), n(e.blockLen);
      }
      function a(e, t = !0) {
        if (e.destroyed) throw Error("Hash instance has been destroyed");
        if (t && e.finished)
          throw Error("Hash#digest() has already been called");
      }
      function o(e, t) {
        i(e);
        let r = t.outputLen;
        if (e.length < r)
          throw Error(
            `digestInto() expects output buffer of length at least ${r}`
          );
      }
      r.d(t, {
        CG: () => o,
        ai: () => n,
        ee: () => i,
        t2: () => a,
        tW: () => s,
      });
    },
    88628: (e, t, r) => {
      "use strict";
      var n = r(72667),
        i = r(57946),
        s = i.getNAF,
        a = i.getJSF,
        o = i.assert;
      function l(e, t) {
        (this.type = e),
          (this.p = new n(t.p, 16)),
          (this.red = t.prime ? n.red(t.prime) : n.mont(this.p)),
          (this.zero = new n(0).toRed(this.red)),
          (this.one = new n(1).toRed(this.red)),
          (this.two = new n(2).toRed(this.red)),
          (this.n = t.n && new n(t.n, 16)),
          (this.g = t.g && this.pointFromJSON(t.g, t.gRed)),
          (this._wnafT1 = [, , , ,]),
          (this._wnafT2 = [, , , ,]),
          (this._wnafT3 = [, , , ,]),
          (this._wnafT4 = [, , , ,]),
          (this._bitLength = this.n ? this.n.bitLength() : 0);
        var r = this.n && this.p.div(this.n);
        !r || r.cmpn(100) > 0
          ? (this.redN = null)
          : ((this._maxwellTrick = !0), (this.redN = this.n.toRed(this.red)));
      }
      function u(e, t) {
        (this.curve = e), (this.type = t), (this.precomputed = null);
      }
      (e.exports = l),
        (l.prototype.point = function () {
          throw Error("Not implemented");
        }),
        (l.prototype.validate = function () {
          throw Error("Not implemented");
        }),
        (l.prototype._fixedNafMul = function (e, t) {
          o(e.precomputed);
          var r,
            n,
            i = e._getDoubles(),
            a = s(t, 1, this._bitLength),
            l = (1 << (i.step + 1)) - (i.step % 2 == 0 ? 2 : 1);
          l /= 3;
          var u = [];
          for (r = 0; r < a.length; r += i.step) {
            n = 0;
            for (var f = r + i.step - 1; f >= r; f--) n = (n << 1) + a[f];
            u.push(n);
          }
          for (
            var c = this.jpoint(null, null, null),
              d = this.jpoint(null, null, null),
              h = l;
            h > 0;
            h--
          ) {
            for (r = 0; r < u.length; r++)
              (n = u[r]) === h
                ? (d = d.mixedAdd(i.points[r]))
                : n === -h && (d = d.mixedAdd(i.points[r].neg()));
            c = c.add(d);
          }
          return c.toP();
        }),
        (l.prototype._wnafMul = function (e, t) {
          var r = 4,
            n = e._getNAFPoints(r);
          r = n.wnd;
          for (
            var i = n.points,
              a = s(t, r, this._bitLength),
              l = this.jpoint(null, null, null),
              u = a.length - 1;
            u >= 0;
            u--
          ) {
            for (var f = 0; u >= 0 && 0 === a[u]; u--) f++;
            if ((u >= 0 && f++, (l = l.dblp(f)), u < 0)) break;
            var c = a[u];
            o(0 !== c),
              (l =
                "affine" === e.type
                  ? c > 0
                    ? l.mixedAdd(i[(c - 1) >> 1])
                    : l.mixedAdd(i[(-c - 1) >> 1].neg())
                  : c > 0
                  ? l.add(i[(c - 1) >> 1])
                  : l.add(i[(-c - 1) >> 1].neg()));
          }
          return "affine" === e.type ? l.toP() : l;
        }),
        (l.prototype._wnafMulAdd = function (e, t, r, n, i) {
          var o,
            l,
            u,
            f = this._wnafT1,
            c = this._wnafT2,
            d = this._wnafT3,
            h = 0;
          for (o = 0; o < n; o++) {
            var p = (u = t[o])._getNAFPoints(e);
            (f[o] = p.wnd), (c[o] = p.points);
          }
          for (o = n - 1; o >= 1; o -= 2) {
            var b = o - 1,
              g = o;
            if (1 !== f[b] || 1 !== f[g]) {
              (d[b] = s(r[b], f[b], this._bitLength)),
                (d[g] = s(r[g], f[g], this._bitLength)),
                (h = Math.max(d[b].length, h)),
                (h = Math.max(d[g].length, h));
              continue;
            }
            var m = [t[b], null, null, t[g]];
            0 === t[b].y.cmp(t[g].y)
              ? ((m[1] = t[b].add(t[g])),
                (m[2] = t[b].toJ().mixedAdd(t[g].neg())))
              : 0 === t[b].y.cmp(t[g].y.redNeg())
              ? ((m[1] = t[b].toJ().mixedAdd(t[g])),
                (m[2] = t[b].add(t[g].neg())))
              : ((m[1] = t[b].toJ().mixedAdd(t[g])),
                (m[2] = t[b].toJ().mixedAdd(t[g].neg())));
            var y = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
              v = a(r[b], r[g]);
            for (
              l = 0,
                h = Math.max(v[0].length, h),
                d[b] = Array(h),
                d[g] = Array(h);
              l < h;
              l++
            ) {
              var w = 0 | v[0][l],
                A = 0 | v[1][l];
              (d[b][l] = y[(w + 1) * 3 + (A + 1)]), (d[g][l] = 0), (c[b] = m);
            }
          }
          var x = this.jpoint(null, null, null),
            E = this._wnafT4;
          for (o = h; o >= 0; o--) {
            for (var R = 0; o >= 0; ) {
              var M = !0;
              for (l = 0; l < n; l++)
                (E[l] = 0 | d[l][o]), 0 !== E[l] && (M = !1);
              if (!M) break;
              R++, o--;
            }
            if ((o >= 0 && R++, (x = x.dblp(R)), o < 0)) break;
            for (l = 0; l < n; l++) {
              var S = E[l];
              0 !== S &&
                (S > 0
                  ? (u = c[l][(S - 1) >> 1])
                  : S < 0 && (u = c[l][(-S - 1) >> 1].neg()),
                (x = "affine" === u.type ? x.mixedAdd(u) : x.add(u)));
            }
          }
          for (o = 0; o < n; o++) c[o] = null;
          return i ? x : x.toP();
        }),
        (l.BasePoint = u),
        (u.prototype.eq = function () {
          throw Error("Not implemented");
        }),
        (u.prototype.validate = function () {
          return this.curve.validate(this);
        }),
        (l.prototype.decodePoint = function (e, t) {
          e = i.toArray(e, t);
          var r = this.p.byteLength();
          if ((4 === e[0] || 6 === e[0] || 7 === e[0]) && e.length - 1 == 2 * r)
            return (
              6 === e[0]
                ? o(e[e.length - 1] % 2 == 0)
                : 7 === e[0] && o(e[e.length - 1] % 2 == 1),
              this.point(e.slice(1, 1 + r), e.slice(1 + r, 1 + 2 * r))
            );
          if ((2 === e[0] || 3 === e[0]) && e.length - 1 === r)
            return this.pointFromX(e.slice(1, 1 + r), 3 === e[0]);
          throw Error("Unknown point format");
        }),
        (u.prototype.encodeCompressed = function (e) {
          return this.encode(e, !0);
        }),
        (u.prototype._encode = function (e) {
          var t = this.curve.p.byteLength(),
            r = this.getX().toArray("be", t);
          return e
            ? [this.getY().isEven() ? 2 : 3].concat(r)
            : [4].concat(r, this.getY().toArray("be", t));
        }),
        (u.prototype.encode = function (e, t) {
          return i.encode(this._encode(t), e);
        }),
        (u.prototype.precompute = function (e) {
          if (this.precomputed) return this;
          var t = { doubles: null, naf: null, beta: null };
          return (
            (t.naf = this._getNAFPoints(8)),
            (t.doubles = this._getDoubles(4, e)),
            (t.beta = this._getBeta()),
            (this.precomputed = t),
            this
          );
        }),
        (u.prototype._hasDoubles = function (e) {
          if (!this.precomputed) return !1;
          var t = this.precomputed.doubles;
          return (
            !!t && t.points.length >= Math.ceil((e.bitLength() + 1) / t.step)
          );
        }),
        (u.prototype._getDoubles = function (e, t) {
          if (this.precomputed && this.precomputed.doubles)
            return this.precomputed.doubles;
          for (var r = [this], n = this, i = 0; i < t; i += e) {
            for (var s = 0; s < e; s++) n = n.dbl();
            r.push(n);
          }
          return { step: e, points: r };
        }),
        (u.prototype._getNAFPoints = function (e) {
          if (this.precomputed && this.precomputed.naf)
            return this.precomputed.naf;
          for (
            var t = [this],
              r = (1 << e) - 1,
              n = 1 === r ? null : this.dbl(),
              i = 1;
            i < r;
            i++
          )
            t[i] = t[i - 1].add(n);
          return { wnd: e, points: t };
        }),
        (u.prototype._getBeta = function () {
          return null;
        }),
        (u.prototype.dblp = function (e) {
          for (var t = this, r = 0; r < e; r++) t = t.dbl();
          return t;
        });
    },
    90340: (e, t, r) => {
      "use strict";
      (t.sha1 = r(64180)),
        (t.sha224 = r(71379)),
        (t.sha256 = r(21574)),
        (t.sha384 = r(66054)),
        (t.sha512 = r(8839));
    },
    90640: (e, t, r) => {
      "use strict";
      var n = r(72667),
        i = r(57946),
        s = i.assert;
      function a(e, t) {
        if (e instanceof a) return e;
        this._importDER(e, t) ||
          (s(e.r && e.s, "Signature without r or s"),
          (this.r = new n(e.r, 16)),
          (this.s = new n(e.s, 16)),
          void 0 === e.recoveryParam
            ? (this.recoveryParam = null)
            : (this.recoveryParam = e.recoveryParam));
      }
      function o() {
        this.place = 0;
      }
      function l(e, t) {
        var r = e[t.place++];
        if (!(128 & r)) return r;
        var n = 15 & r;
        if (0 === n || n > 4 || 0 === e[t.place]) return !1;
        for (var i = 0, s = 0, a = t.place; s < n; s++, a++)
          (i <<= 8), (i |= e[a]), (i >>>= 0);
        return !(i <= 127) && ((t.place = a), i);
      }
      function u(e) {
        for (var t = 0, r = e.length - 1; !e[t] && !(128 & e[t + 1]) && t < r; )
          t++;
        return 0 === t ? e : e.slice(t);
      }
      function f(e, t) {
        if (t < 128) return void e.push(t);
        var r = 1 + ((Math.log(t) / Math.LN2) >>> 3);
        for (e.push(128 | r); --r; ) e.push((t >>> (r << 3)) & 255);
        e.push(t);
      }
      (e.exports = a),
        (a.prototype._importDER = function (e, t) {
          e = i.toArray(e, t);
          var r = new o();
          if (48 !== e[r.place++]) return !1;
          var s = l(e, r);
          if (!1 === s || s + r.place !== e.length || 2 !== e[r.place++])
            return !1;
          var a = l(e, r);
          if (!1 === a || (128 & e[r.place]) != 0) return !1;
          var u = e.slice(r.place, a + r.place);
          if (((r.place += a), 2 !== e[r.place++])) return !1;
          var f = l(e, r);
          if (!1 === f || e.length !== f + r.place || (128 & e[r.place]) != 0)
            return !1;
          var c = e.slice(r.place, f + r.place);
          if (0 === u[0])
            if (!(128 & u[1])) return !1;
            else u = u.slice(1);
          if (0 === c[0])
            if (!(128 & c[1])) return !1;
            else c = c.slice(1);
          return (
            (this.r = new n(u)),
            (this.s = new n(c)),
            (this.recoveryParam = null),
            !0
          );
        }),
        (a.prototype.toDER = function (e) {
          var t = this.r.toArray(),
            r = this.s.toArray();
          for (
            128 & t[0] && (t = [0].concat(t)),
              128 & r[0] && (r = [0].concat(r)),
              t = u(t),
              r = u(r);
            !r[0] && !(128 & r[1]);

          )
            r = r.slice(1);
          var n = [2];
          f(n, t.length), (n = n.concat(t)).push(2), f(n, r.length);
          var s = n.concat(r),
            a = [48];
          return f(a, s.length), (a = a.concat(s)), i.encode(a, e);
        });
    },
    91339: (e, t, r) => {
      "use strict";
      r.d(t, {
        Ab: () => f,
        Dg: () => h,
        JJ: () => l,
        Ro: () => b,
        ST: () => o,
        WZ: () => p,
        c4: () => m,
        dK: () => u,
        nD: () => y,
        up: () => g,
      });
      var n = r(44532),
        i = r(29592);
      let s = BigInt(0),
        a = BigInt(1);
      function o(e, t) {
        let r = c(e, "value"),
          n = BigInt(p(t, "width"));
        return ((0, i.vA)(r >> n === s, "overflow", "NUMERIC_FAULT", {
          operation: "fromTwos",
          fault: "overflow",
          value: e,
        }),
        r >> (n - a))
          ? -((~r & ((a << n) - a)) + a)
          : r;
      }
      function l(e, t) {
        let r = f(e, "value"),
          n = BigInt(p(t, "width")),
          o = a << (n - a);
        return r < s
          ? ((r = -r),
            (0, i.vA)(r <= o, "too low", "NUMERIC_FAULT", {
              operation: "toTwos",
              fault: "overflow",
              value: e,
            }),
            (~r & ((a << n) - a)) + a)
          : ((0, i.vA)(r < o, "too high", "NUMERIC_FAULT", {
              operation: "toTwos",
              fault: "overflow",
              value: e,
            }),
            r);
      }
      function u(e, t) {
        return c(e, "value") & ((a << BigInt(p(t, "bits"))) - a);
      }
      function f(e, t) {
        switch (typeof e) {
          case "bigint":
            return e;
          case "number":
            return (
              (0, i.MR)(Number.isInteger(e), "underflow", t || "value", e),
              (0, i.MR)(
                e >= -0x1fffffffffffff && e <= 0x1fffffffffffff,
                "overflow",
                t || "value",
                e
              ),
              BigInt(e)
            );
          case "string":
            try {
              if ("" === e) throw Error("empty string");
              if ("-" === e[0] && "-" !== e[1]) return -BigInt(e.substring(1));
              return BigInt(e);
            } catch (r) {
              (0, i.MR)(
                !1,
                `invalid BigNumberish string: ${r.message}`,
                t || "value",
                e
              );
            }
        }
        (0, i.MR)(!1, "invalid BigNumberish value", t || "value", e);
      }
      function c(e, t) {
        let r = f(e, t);
        return (
          (0, i.vA)(
            r >= s,
            "unsigned value cannot be negative",
            "NUMERIC_FAULT",
            { fault: "overflow", operation: "getUint", value: e }
          ),
          r
        );
      }
      let d = "0123456789abcdef";
      function h(e) {
        if (e instanceof Uint8Array) {
          let t = "0x0";
          for (let r of e) (t += d[r >> 4]), (t += d[15 & r]);
          return BigInt(t);
        }
        return f(e);
      }
      function p(e, t) {
        switch (typeof e) {
          case "bigint":
            return (
              (0, i.MR)(
                e >= -0x1fffffffffffff && e <= 0x1fffffffffffff,
                "overflow",
                t || "value",
                e
              ),
              Number(e)
            );
          case "number":
            return (
              (0, i.MR)(Number.isInteger(e), "underflow", t || "value", e),
              (0, i.MR)(
                e >= -0x1fffffffffffff && e <= 0x1fffffffffffff,
                "overflow",
                t || "value",
                e
              ),
              e
            );
          case "string":
            try {
              if ("" === e) throw Error("empty string");
              return p(BigInt(e), t);
            } catch (r) {
              (0, i.MR)(
                !1,
                `invalid numeric string: ${r.message}`,
                t || "value",
                e
              );
            }
        }
        (0, i.MR)(!1, "invalid numeric value", t || "value", e);
      }
      function b(e) {
        return p(h(e));
      }
      function g(e, t) {
        let r = c(e, "value").toString(16);
        if (null == t) r.length % 2 && (r = "0" + r);
        else {
          let n = p(t, "width");
          for (
            (0, i.vA)(
              2 * n >= r.length,
              `value exceeds width (${n} bytes)`,
              "NUMERIC_FAULT",
              { operation: "toBeHex", fault: "overflow", value: e }
            );
            r.length < 2 * n;

          )
            r = "0" + r;
        }
        return "0x" + r;
      }
      function m(e) {
        let t = c(e, "value");
        if (t === s) return new Uint8Array([]);
        let r = t.toString(16);
        r.length % 2 && (r = "0" + r);
        let n = new Uint8Array(r.length / 2);
        for (let e = 0; e < n.length; e++) {
          let t = 2 * e;
          n[e] = parseInt(r.substring(t, t + 2), 16);
        }
        return n;
      }
      function y(e) {
        let t = (0, n.c$)((0, n.f)(e) ? e : m(e)).substring(2);
        for (; t.startsWith("0"); ) t = t.substring(1);
        return "" === t && (t = "0"), "0x" + t;
      }
    },
    92664: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isLocalURL", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let n = r(69991),
        i = r(87102);
      function s(e) {
        if (!(0, n.isAbsoluteUrl)(e)) return !0;
        try {
          let t = (0, n.getLocationOrigin)(),
            r = new URL(e, t);
          return r.origin === t && (0, i.hasBasePath)(r.pathname);
        } catch (e) {
          return !1;
        }
      }
    },
    93239: (e, t, r) => {
      "use strict";
      (t.base = r(88628)),
        (t.short = r(94597)),
        (t.mont = r(59211)),
        (t.edwards = r(72371));
    },
    93482: (e, t, r) => {
      "use strict";
      let n = r(1088),
        i = r(44134),
        s = [
          "address",
          "commodity",
          "commodity_amount",
          "network",
          "sc_address",
          "sc_input_data",
        ],
        a = new n.eddsa("ed25519"),
        o = (e) => (e && "0x" === e.substring(0, 2) ? e.substring(2) : e);
      e.exports = {
        signSmartContractData: (e, t) => {
          let r = s.every((t) => t in e),
            n = Object.keys(e).filter((e) => !s.includes(e));
          if (!r)
            throw Error(
              `All of following keys in options (as first argument) are required for signing: ${s
                .map((e) => `"${e}"`)
                .join(", ")}`
            );
          if (!t)
            throw Error(
              "Private key (as second argument) is required for signing"
            );
          if (n.length)
            throw Error(
              `Unexpected keys provided in options: ${n
                .map((e) => `"${e}"`)
                .join(", ")}`
            );
          let l = a.keyFromSecret(o(t)),
            u = s
              .map((t) => {
                let r;
                switch (t) {
                  case "commodity_amount":
                    r = String(
                      "string" == typeof e.commodity_amount
                        ? e.commodity_amount
                        : parseFloat(e.commodity_amount)
                    );
                    break;
                  case "commodity":
                  case "network":
                    r = String(e[t]).toLowerCase();
                    break;
                  default:
                    r = String(e[t]);
                }
                return `${t}:${r}`;
              })
              .join("\n"),
            f = i.Buffer.from(u, "utf8").toString("hex"),
            c = l.sign(f).toHex();
          return Object.assign(Object.assign({}, e), { signature: c });
        },
        scKeysList: [...s, "signature"],
      };
    },
    93706: (e) => {
      "use strict";
      e.exports = JSON.parse(
        '{"name":"@wert-io/widget-initializer","version":"6.8.0","description":"WertWidget helper","main":"index.js","types":"index.d.ts","repository":{"type":"git","url":"https://github.com/wert-io/widget-initializer.git"},"scripts":{"build":"tsc -p .","build-script":"rollup -c","test":"jest --ci --reporters=default --reporters=jest-junit"},"author":"@wert-io","license":"ISC","devDependencies":{"@babel/core":"^7.13.16","@babel/preset-env":"^7.13.15","@rollup/plugin-babel":"^5.3.0","@rollup/plugin-commonjs":"^18.0.0","@rollup/plugin-json":"^4.1.0","@rollup/plugin-node-resolve":"^13.1.3","@typescript-eslint/eslint-plugin":"^4.28.1","@typescript-eslint/parser":"^4.28.1","eslint":"^7.25.0","eslint-plugin-import":"^2.22.1","jest":"^27.0.5","jest-junit":"^12.0.0","rollup":"^2.45.2","typescript":"^4.3.5"},"dependencies":{},"jest":{"testEnvironment":"jsdom","transformIgnorePatterns":["node_modules/(?!variables/.*)"]},"jest-junit":{"outputDirectory":"reports","outputName":"jest-junit.xml","ancestorSeparator":" › ","uniqueOutputName":"false","suiteNameTemplate":"{filepath}","classNameTemplate":"{classname}","titleTemplate":"{title}"}}'
      );
    },
    94597: (e, t, r) => {
      "use strict";
      var n = r(57946),
        i = r(72667),
        s = r(84115),
        a = r(88628),
        o = n.assert;
      function l(e) {
        a.call(this, "short", e),
          (this.a = new i(e.a, 16).toRed(this.red)),
          (this.b = new i(e.b, 16).toRed(this.red)),
          (this.tinv = this.two.redInvm()),
          (this.zeroA = 0 === this.a.fromRed().cmpn(0)),
          (this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3)),
          (this.endo = this._getEndomorphism(e)),
          (this._endoWnafT1 = [, , , ,]),
          (this._endoWnafT2 = [, , , ,]);
      }
      function u(e, t, r, n) {
        a.BasePoint.call(this, e, "affine"),
          null === t && null === r
            ? ((this.x = null), (this.y = null), (this.inf = !0))
            : ((this.x = new i(t, 16)),
              (this.y = new i(r, 16)),
              n &&
                (this.x.forceRed(this.curve.red),
                this.y.forceRed(this.curve.red)),
              this.x.red || (this.x = this.x.toRed(this.curve.red)),
              this.y.red || (this.y = this.y.toRed(this.curve.red)),
              (this.inf = !1));
      }
      function f(e, t, r, n) {
        a.BasePoint.call(this, e, "jacobian"),
          null === t && null === r && null === n
            ? ((this.x = this.curve.one),
              (this.y = this.curve.one),
              (this.z = new i(0)))
            : ((this.x = new i(t, 16)),
              (this.y = new i(r, 16)),
              (this.z = new i(n, 16))),
          this.x.red || (this.x = this.x.toRed(this.curve.red)),
          this.y.red || (this.y = this.y.toRed(this.curve.red)),
          this.z.red || (this.z = this.z.toRed(this.curve.red)),
          (this.zOne = this.z === this.curve.one);
      }
      s(l, a),
        (e.exports = l),
        (l.prototype._getEndomorphism = function (e) {
          if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
            if (e.beta) t = new i(e.beta, 16).toRed(this.red);
            else {
              var t,
                r,
                n,
                s = this._getEndoRoots(this.p);
              t = (t = 0 > s[0].cmp(s[1]) ? s[0] : s[1]).toRed(this.red);
            }
            if (e.lambda) r = new i(e.lambda, 16);
            else {
              var a = this._getEndoRoots(this.n);
              0 === this.g.mul(a[0]).x.cmp(this.g.x.redMul(t))
                ? (r = a[0])
                : ((r = a[1]),
                  o(0 === this.g.mul(r).x.cmp(this.g.x.redMul(t))));
            }
            return (
              (n = e.basis
                ? e.basis.map(function (e) {
                    return { a: new i(e.a, 16), b: new i(e.b, 16) };
                  })
                : this._getEndoBasis(r)),
              { beta: t, lambda: r, basis: n }
            );
          }
        }),
        (l.prototype._getEndoRoots = function (e) {
          var t = e === this.p ? this.red : i.mont(e),
            r = new i(2).toRed(t).redInvm(),
            n = r.redNeg(),
            s = new i(3).toRed(t).redNeg().redSqrt().redMul(r);
          return [n.redAdd(s).fromRed(), n.redSub(s).fromRed()];
        }),
        (l.prototype._getEndoBasis = function (e) {
          for (
            var t,
              r,
              n,
              s,
              a,
              o,
              l,
              u,
              f,
              c = this.n.ushrn(Math.floor(this.n.bitLength() / 2)),
              d = e,
              h = this.n.clone(),
              p = new i(1),
              b = new i(0),
              g = new i(0),
              m = new i(1),
              y = 0;
            0 !== d.cmpn(0);

          ) {
            var v = h.div(d);
            (u = h.sub(v.mul(d))), (f = g.sub(v.mul(p)));
            var w = m.sub(v.mul(b));
            if (!n && 0 > u.cmp(c))
              (t = l.neg()), (r = p), (n = u.neg()), (s = f);
            else if (n && 2 == ++y) break;
            (l = u), (h = d), (d = u), (g = p), (p = f), (m = b), (b = w);
          }
          (a = u.neg()), (o = f);
          var A = n.sqr().add(s.sqr());
          return (
            a.sqr().add(o.sqr()).cmp(A) >= 0 && ((a = t), (o = r)),
            n.negative && ((n = n.neg()), (s = s.neg())),
            a.negative && ((a = a.neg()), (o = o.neg())),
            [
              { a: n, b: s },
              { a: a, b: o },
            ]
          );
        }),
        (l.prototype._endoSplit = function (e) {
          var t = this.endo.basis,
            r = t[0],
            n = t[1],
            i = n.b.mul(e).divRound(this.n),
            s = r.b.neg().mul(e).divRound(this.n),
            a = i.mul(r.a),
            o = s.mul(n.a),
            l = i.mul(r.b),
            u = s.mul(n.b);
          return { k1: e.sub(a).sub(o), k2: l.add(u).neg() };
        }),
        (l.prototype.pointFromX = function (e, t) {
          (e = new i(e, 16)).red || (e = e.toRed(this.red));
          var r = e
              .redSqr()
              .redMul(e)
              .redIAdd(e.redMul(this.a))
              .redIAdd(this.b),
            n = r.redSqrt();
          if (0 !== n.redSqr().redSub(r).cmp(this.zero))
            throw Error("invalid point");
          var s = n.fromRed().isOdd();
          return ((t && !s) || (!t && s)) && (n = n.redNeg()), this.point(e, n);
        }),
        (l.prototype.validate = function (e) {
          if (e.inf) return !0;
          var t = e.x,
            r = e.y,
            n = this.a.redMul(t),
            i = t.redSqr().redMul(t).redIAdd(n).redIAdd(this.b);
          return 0 === r.redSqr().redISub(i).cmpn(0);
        }),
        (l.prototype._endoWnafMulAdd = function (e, t, r) {
          for (
            var n = this._endoWnafT1, i = this._endoWnafT2, s = 0;
            s < e.length;
            s++
          ) {
            var a = this._endoSplit(t[s]),
              o = e[s],
              l = o._getBeta();
            a.k1.negative && (a.k1.ineg(), (o = o.neg(!0))),
              a.k2.negative && (a.k2.ineg(), (l = l.neg(!0))),
              (n[2 * s] = o),
              (n[2 * s + 1] = l),
              (i[2 * s] = a.k1),
              (i[2 * s + 1] = a.k2);
          }
          for (
            var u = this._wnafMulAdd(1, n, i, 2 * s, r), f = 0;
            f < 2 * s;
            f++
          )
            (n[f] = null), (i[f] = null);
          return u;
        }),
        s(u, a.BasePoint),
        (l.prototype.point = function (e, t, r) {
          return new u(this, e, t, r);
        }),
        (l.prototype.pointFromJSON = function (e, t) {
          return u.fromJSON(this, e, t);
        }),
        (u.prototype._getBeta = function () {
          if (this.curve.endo) {
            var e = this.precomputed;
            if (e && e.beta) return e.beta;
            var t = this.curve.point(
              this.x.redMul(this.curve.endo.beta),
              this.y
            );
            if (e) {
              var r = this.curve,
                n = function (e) {
                  return r.point(e.x.redMul(r.endo.beta), e.y);
                };
              (e.beta = t),
                (t.precomputed = {
                  beta: null,
                  naf: e.naf && { wnd: e.naf.wnd, points: e.naf.points.map(n) },
                  doubles: e.doubles && {
                    step: e.doubles.step,
                    points: e.doubles.points.map(n),
                  },
                });
            }
            return t;
          }
        }),
        (u.prototype.toJSON = function () {
          return this.precomputed
            ? [
                this.x,
                this.y,
                this.precomputed && {
                  doubles: this.precomputed.doubles && {
                    step: this.precomputed.doubles.step,
                    points: this.precomputed.doubles.points.slice(1),
                  },
                  naf: this.precomputed.naf && {
                    wnd: this.precomputed.naf.wnd,
                    points: this.precomputed.naf.points.slice(1),
                  },
                },
              ]
            : [this.x, this.y];
        }),
        (u.fromJSON = function (e, t, r) {
          "string" == typeof t && (t = JSON.parse(t));
          var n = e.point(t[0], t[1], r);
          if (!t[2]) return n;
          function i(t) {
            return e.point(t[0], t[1], r);
          }
          var s = t[2];
          return (
            (n.precomputed = {
              beta: null,
              doubles: s.doubles && {
                step: s.doubles.step,
                points: [n].concat(s.doubles.points.map(i)),
              },
              naf: s.naf && {
                wnd: s.naf.wnd,
                points: [n].concat(s.naf.points.map(i)),
              },
            }),
            n
          );
        }),
        (u.prototype.inspect = function () {
          return this.isInfinity()
            ? "<EC Point Infinity>"
            : "<EC Point x: " +
                this.x.fromRed().toString(16, 2) +
                " y: " +
                this.y.fromRed().toString(16, 2) +
                ">";
        }),
        (u.prototype.isInfinity = function () {
          return this.inf;
        }),
        (u.prototype.add = function (e) {
          if (this.inf) return e;
          if (e.inf) return this;
          if (this.eq(e)) return this.dbl();
          if (this.neg().eq(e) || 0 === this.x.cmp(e.x))
            return this.curve.point(null, null);
          var t = this.y.redSub(e.y);
          0 !== t.cmpn(0) && (t = t.redMul(this.x.redSub(e.x).redInvm()));
          var r = t.redSqr().redISub(this.x).redISub(e.x),
            n = t.redMul(this.x.redSub(r)).redISub(this.y);
          return this.curve.point(r, n);
        }),
        (u.prototype.dbl = function () {
          if (this.inf) return this;
          var e = this.y.redAdd(this.y);
          if (0 === e.cmpn(0)) return this.curve.point(null, null);
          var t = this.curve.a,
            r = this.x.redSqr(),
            n = e.redInvm(),
            i = r.redAdd(r).redIAdd(r).redIAdd(t).redMul(n),
            s = i.redSqr().redISub(this.x.redAdd(this.x)),
            a = i.redMul(this.x.redSub(s)).redISub(this.y);
          return this.curve.point(s, a);
        }),
        (u.prototype.getX = function () {
          return this.x.fromRed();
        }),
        (u.prototype.getY = function () {
          return this.y.fromRed();
        }),
        (u.prototype.mul = function (e) {
          return ((e = new i(e, 16)), this.isInfinity())
            ? this
            : this._hasDoubles(e)
            ? this.curve._fixedNafMul(this, e)
            : this.curve.endo
            ? this.curve._endoWnafMulAdd([this], [e])
            : this.curve._wnafMul(this, e);
        }),
        (u.prototype.mulAdd = function (e, t, r) {
          var n = [this, t],
            i = [e, r];
          return this.curve.endo
            ? this.curve._endoWnafMulAdd(n, i)
            : this.curve._wnafMulAdd(1, n, i, 2);
        }),
        (u.prototype.jmulAdd = function (e, t, r) {
          var n = [this, t],
            i = [e, r];
          return this.curve.endo
            ? this.curve._endoWnafMulAdd(n, i, !0)
            : this.curve._wnafMulAdd(1, n, i, 2, !0);
        }),
        (u.prototype.eq = function (e) {
          return (
            this === e ||
            (this.inf === e.inf &&
              (this.inf || (0 === this.x.cmp(e.x) && 0 === this.y.cmp(e.y))))
          );
        }),
        (u.prototype.neg = function (e) {
          if (this.inf) return this;
          var t = this.curve.point(this.x, this.y.redNeg());
          if (e && this.precomputed) {
            var r = this.precomputed,
              n = function (e) {
                return e.neg();
              };
            t.precomputed = {
              naf: r.naf && { wnd: r.naf.wnd, points: r.naf.points.map(n) },
              doubles: r.doubles && {
                step: r.doubles.step,
                points: r.doubles.points.map(n),
              },
            };
          }
          return t;
        }),
        (u.prototype.toJ = function () {
          return this.inf
            ? this.curve.jpoint(null, null, null)
            : this.curve.jpoint(this.x, this.y, this.curve.one);
        }),
        s(f, a.BasePoint),
        (l.prototype.jpoint = function (e, t, r) {
          return new f(this, e, t, r);
        }),
        (f.prototype.toP = function () {
          if (this.isInfinity()) return this.curve.point(null, null);
          var e = this.z.redInvm(),
            t = e.redSqr(),
            r = this.x.redMul(t),
            n = this.y.redMul(t).redMul(e);
          return this.curve.point(r, n);
        }),
        (f.prototype.neg = function () {
          return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
        }),
        (f.prototype.add = function (e) {
          if (this.isInfinity()) return e;
          if (e.isInfinity()) return this;
          var t = e.z.redSqr(),
            r = this.z.redSqr(),
            n = this.x.redMul(t),
            i = e.x.redMul(r),
            s = this.y.redMul(t.redMul(e.z)),
            a = e.y.redMul(r.redMul(this.z)),
            o = n.redSub(i),
            l = s.redSub(a);
          if (0 === o.cmpn(0))
            if (0 !== l.cmpn(0)) return this.curve.jpoint(null, null, null);
            else return this.dbl();
          var u = o.redSqr(),
            f = u.redMul(o),
            c = n.redMul(u),
            d = l.redSqr().redIAdd(f).redISub(c).redISub(c),
            h = l.redMul(c.redISub(d)).redISub(s.redMul(f)),
            p = this.z.redMul(e.z).redMul(o);
          return this.curve.jpoint(d, h, p);
        }),
        (f.prototype.mixedAdd = function (e) {
          if (this.isInfinity()) return e.toJ();
          if (e.isInfinity()) return this;
          var t = this.z.redSqr(),
            r = this.x,
            n = e.x.redMul(t),
            i = this.y,
            s = e.y.redMul(t).redMul(this.z),
            a = r.redSub(n),
            o = i.redSub(s);
          if (0 === a.cmpn(0))
            if (0 !== o.cmpn(0)) return this.curve.jpoint(null, null, null);
            else return this.dbl();
          var l = a.redSqr(),
            u = l.redMul(a),
            f = r.redMul(l),
            c = o.redSqr().redIAdd(u).redISub(f).redISub(f),
            d = o.redMul(f.redISub(c)).redISub(i.redMul(u)),
            h = this.z.redMul(a);
          return this.curve.jpoint(c, d, h);
        }),
        (f.prototype.dblp = function (e) {
          if (0 === e || this.isInfinity()) return this;
          if (!e) return this.dbl();
          if (this.curve.zeroA || this.curve.threeA) {
            var t,
              r = this;
            for (t = 0; t < e; t++) r = r.dbl();
            return r;
          }
          var n = this.curve.a,
            i = this.curve.tinv,
            s = this.x,
            a = this.y,
            o = this.z,
            l = o.redSqr().redSqr(),
            u = a.redAdd(a);
          for (t = 0; t < e; t++) {
            var f = s.redSqr(),
              c = u.redSqr(),
              d = c.redSqr(),
              h = f.redAdd(f).redIAdd(f).redIAdd(n.redMul(l)),
              p = s.redMul(c),
              b = h.redSqr().redISub(p.redAdd(p)),
              g = p.redISub(b),
              m = h.redMul(g);
            m = m.redIAdd(m).redISub(d);
            var y = u.redMul(o);
            t + 1 < e && (l = l.redMul(d)), (s = b), (o = y), (u = m);
          }
          return this.curve.jpoint(s, u.redMul(i), o);
        }),
        (f.prototype.dbl = function () {
          return this.isInfinity()
            ? this
            : this.curve.zeroA
            ? this._zeroDbl()
            : this.curve.threeA
            ? this._threeDbl()
            : this._dbl();
        }),
        (f.prototype._zeroDbl = function () {
          if (this.zOne) {
            var e,
              t,
              r,
              n = this.x.redSqr(),
              i = this.y.redSqr(),
              s = i.redSqr(),
              a = this.x.redAdd(i).redSqr().redISub(n).redISub(s);
            a = a.redIAdd(a);
            var o = n.redAdd(n).redIAdd(n),
              l = o.redSqr().redISub(a).redISub(a),
              u = s.redIAdd(s);
            (u = (u = u.redIAdd(u)).redIAdd(u)),
              (e = l),
              (t = o.redMul(a.redISub(l)).redISub(u)),
              (r = this.y.redAdd(this.y));
          } else {
            var f = this.x.redSqr(),
              c = this.y.redSqr(),
              d = c.redSqr(),
              h = this.x.redAdd(c).redSqr().redISub(f).redISub(d);
            h = h.redIAdd(h);
            var p = f.redAdd(f).redIAdd(f),
              b = p.redSqr(),
              g = d.redIAdd(d);
            (g = (g = g.redIAdd(g)).redIAdd(g)),
              (e = b.redISub(h).redISub(h)),
              (t = p.redMul(h.redISub(e)).redISub(g)),
              (r = (r = this.y.redMul(this.z)).redIAdd(r));
          }
          return this.curve.jpoint(e, t, r);
        }),
        (f.prototype._threeDbl = function () {
          if (this.zOne) {
            var e,
              t,
              r,
              n = this.x.redSqr(),
              i = this.y.redSqr(),
              s = i.redSqr(),
              a = this.x.redAdd(i).redSqr().redISub(n).redISub(s);
            a = a.redIAdd(a);
            var o = n.redAdd(n).redIAdd(n).redIAdd(this.curve.a),
              l = o.redSqr().redISub(a).redISub(a);
            e = l;
            var u = s.redIAdd(s);
            (u = (u = u.redIAdd(u)).redIAdd(u)),
              (t = o.redMul(a.redISub(l)).redISub(u)),
              (r = this.y.redAdd(this.y));
          } else {
            var f = this.z.redSqr(),
              c = this.y.redSqr(),
              d = this.x.redMul(c),
              h = this.x.redSub(f).redMul(this.x.redAdd(f));
            h = h.redAdd(h).redIAdd(h);
            var p = d.redIAdd(d),
              b = (p = p.redIAdd(p)).redAdd(p);
            (e = h.redSqr().redISub(b)),
              (r = this.y.redAdd(this.z).redSqr().redISub(c).redISub(f));
            var g = c.redSqr();
            (g = (g = (g = g.redIAdd(g)).redIAdd(g)).redIAdd(g)),
              (t = h.redMul(p.redISub(e)).redISub(g));
          }
          return this.curve.jpoint(e, t, r);
        }),
        (f.prototype._dbl = function () {
          var e = this.curve.a,
            t = this.x,
            r = this.y,
            n = this.z,
            i = n.redSqr().redSqr(),
            s = t.redSqr(),
            a = r.redSqr(),
            o = s.redAdd(s).redIAdd(s).redIAdd(e.redMul(i)),
            l = t.redAdd(t),
            u = (l = l.redIAdd(l)).redMul(a),
            f = o.redSqr().redISub(u.redAdd(u)),
            c = u.redISub(f),
            d = a.redSqr();
          d = (d = (d = d.redIAdd(d)).redIAdd(d)).redIAdd(d);
          var h = o.redMul(c).redISub(d),
            p = r.redAdd(r).redMul(n);
          return this.curve.jpoint(f, h, p);
        }),
        (f.prototype.trpl = function () {
          if (!this.curve.zeroA) return this.dbl().add(this);
          var e = this.x.redSqr(),
            t = this.y.redSqr(),
            r = this.z.redSqr(),
            n = t.redSqr(),
            i = e.redAdd(e).redIAdd(e),
            s = i.redSqr(),
            a = this.x.redAdd(t).redSqr().redISub(e).redISub(n),
            o = (a = (a = (a = a.redIAdd(a)).redAdd(a).redIAdd(a)).redISub(
              s
            )).redSqr(),
            l = n.redIAdd(n);
          l = (l = (l = l.redIAdd(l)).redIAdd(l)).redIAdd(l);
          var u = i.redIAdd(a).redSqr().redISub(s).redISub(o).redISub(l),
            f = t.redMul(u);
          f = (f = f.redIAdd(f)).redIAdd(f);
          var c = this.x.redMul(o).redISub(f);
          c = (c = c.redIAdd(c)).redIAdd(c);
          var d = this.y.redMul(u.redMul(l.redISub(u)).redISub(a.redMul(o)));
          d = (d = (d = d.redIAdd(d)).redIAdd(d)).redIAdd(d);
          var h = this.z.redAdd(a).redSqr().redISub(r).redISub(o);
          return this.curve.jpoint(c, d, h);
        }),
        (f.prototype.mul = function (e, t) {
          return (e = new i(e, t)), this.curve._wnafMul(this, e);
        }),
        (f.prototype.eq = function (e) {
          if ("affine" === e.type) return this.eq(e.toJ());
          if (this === e) return !0;
          var t = this.z.redSqr(),
            r = e.z.redSqr();
          if (0 !== this.x.redMul(r).redISub(e.x.redMul(t)).cmpn(0)) return !1;
          var n = t.redMul(this.z),
            i = r.redMul(e.z);
          return 0 === this.y.redMul(i).redISub(e.y.redMul(n)).cmpn(0);
        }),
        (f.prototype.eqXToP = function (e) {
          var t = this.z.redSqr(),
            r = e.toRed(this.curve.red).redMul(t);
          if (0 === this.x.cmp(r)) return !0;
          for (var n = e.clone(), i = this.curve.redN.redMul(t); ; ) {
            if ((n.iadd(this.curve.n), n.cmp(this.curve.p) >= 0)) return !1;
            if ((r.redIAdd(i), 0 === this.x.cmp(r))) return !0;
          }
        }),
        (f.prototype.inspect = function () {
          return this.isInfinity()
            ? "<EC JPoint Infinity>"
            : "<EC JPoint x: " +
                this.x.toString(16, 2) +
                " y: " +
                this.y.toString(16, 2) +
                " z: " +
                this.z.toString(16, 2) +
                ">";
        }),
        (f.prototype.isInfinity = function () {
          return 0 === this.z.cmpn(0);
        });
    },
    95840: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          VALID_LOADERS: function () {
            return r;
          },
          imageConfigDefault: function () {
            return n;
          },
        });
      let r = ["default", "imgix", "cloudinary", "akamai", "custom"],
        n = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          loaderFile: "",
          domains: [],
          disableStaticImages: !1,
          minimumCacheTTL: 60,
          formats: ["image/webp"],
          dangerouslyAllowSVG: !1,
          contentSecurityPolicy:
            "script-src 'none'; frame-src 'none'; sandbox;",
          contentDispositionType: "attachment",
          localPatterns: void 0,
          remotePatterns: [],
          qualities: void 0,
          unoptimized: !1,
        };
    },
    97089: (e, t, r) => {
      "use strict";
      var n,
        i = r(2953),
        s = r(93239),
        a = r(57946).assert;
      function o(e) {
        "short" === e.type
          ? (this.curve = new s.short(e))
          : "edwards" === e.type
          ? (this.curve = new s.edwards(e))
          : (this.curve = new s.mont(e)),
          (this.g = this.curve.g),
          (this.n = this.curve.n),
          (this.hash = e.hash),
          a(this.g.validate(), "Invalid curve"),
          a(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O");
      }
      function l(e, r) {
        Object.defineProperty(t, e, {
          configurable: !0,
          enumerable: !0,
          get: function () {
            var n = new o(r);
            return (
              Object.defineProperty(t, e, {
                configurable: !0,
                enumerable: !0,
                value: n,
              }),
              n
            );
          },
        });
      }
      (t.PresetCurve = o),
        l("p192", {
          type: "short",
          prime: "p192",
          p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
          a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
          b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
          n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
          hash: i.sha256,
          gRed: !1,
          g: [
            "188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012",
            "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811",
          ],
        }),
        l("p224", {
          type: "short",
          prime: "p224",
          p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
          a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
          b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
          n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
          hash: i.sha256,
          gRed: !1,
          g: [
            "b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21",
            "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34",
          ],
        }),
        l("p256", {
          type: "short",
          prime: null,
          p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
          a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
          b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
          n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
          hash: i.sha256,
          gRed: !1,
          g: [
            "6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296",
            "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5",
          ],
        }),
        l("p384", {
          type: "short",
          prime: null,
          p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
          a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
          b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
          n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
          hash: i.sha384,
          gRed: !1,
          g: [
            "aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7",
            "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f",
          ],
        }),
        l("p521", {
          type: "short",
          prime: null,
          p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
          a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
          b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
          n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
          hash: i.sha512,
          gRed: !1,
          g: [
            "000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66",
            "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650",
          ],
        }),
        l("curve25519", {
          type: "mont",
          prime: "p25519",
          p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
          a: "76d06",
          b: "1",
          n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
          hash: i.sha256,
          gRed: !1,
          g: ["9"],
        }),
        l("ed25519", {
          type: "edwards",
          prime: "p25519",
          p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
          a: "-1",
          c: "1",
          d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
          n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
          hash: i.sha256,
          gRed: !1,
          g: [
            "216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a",
            "6666666666666666666666666666666666666666666666666666666666666658",
          ],
        });
      try {
        n = r(49458);
      } catch (e) {
        n = void 0;
      }
      l("secp256k1", {
        type: "short",
        prime: "k256",
        p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
        a: "0",
        b: "7",
        n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
        h: "1",
        hash: i.sha256,
        beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
        lambda:
          "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
        basis: [
          {
            a: "3086d221a7d46bcde86c90e49284eb15",
            b: "-e4437ed6010e88286f547fa90abfe4c3",
          },
          {
            a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
            b: "3086d221a7d46bcde86c90e49284eb15",
          },
        ],
        gRed: !1,
        g: [
          "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
          "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",
          n,
        ],
      });
    },
    97486: (e, t) => {
      "use strict";
      function r(e) {
        return 1 === e.length ? "0" + e : e;
      }
      function n(e) {
        for (var t = "", n = 0; n < e.length; n++) t += r(e[n].toString(16));
        return t;
      }
      (t.toArray = function (e, t) {
        if (Array.isArray(e)) return e.slice();
        if (!e) return [];
        var r = [];
        if ("string" != typeof e) {
          for (var n = 0; n < e.length; n++) r[n] = 0 | e[n];
          return r;
        }
        if ("hex" === t) {
          (e = e.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (e = "0" + e);
          for (var n = 0; n < e.length; n += 2)
            r.push(parseInt(e[n] + e[n + 1], 16));
        } else
          for (var n = 0; n < e.length; n++) {
            var i = e.charCodeAt(n),
              s = i >> 8,
              a = 255 & i;
            s ? r.push(s, a) : r.push(a);
          }
        return r;
      }),
        (t.zero2 = r),
        (t.toHex = n),
        (t.encode = function (e, t) {
          return "hex" === t ? n(e) : e;
        });
    },
    98335: (e, t, r) => {
      "use strict";
      var n = r(12115),
        i =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        s = n.useState,
        a = n.useEffect,
        o = n.useLayoutEffect,
        l = n.useDebugValue;
      function u(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var r = t();
          return !i(e, r);
        } catch (e) {
          return !0;
        }
      }
      var f =
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
          ? function (e, t) {
              return t();
            }
          : function (e, t) {
              var r = t(),
                n = s({ inst: { value: r, getSnapshot: t } }),
                i = n[0].inst,
                f = n[1];
              return (
                o(
                  function () {
                    (i.value = r), (i.getSnapshot = t), u(i) && f({ inst: i });
                  },
                  [e, r, t]
                ),
                a(
                  function () {
                    return (
                      u(i) && f({ inst: i }),
                      e(function () {
                        u(i) && f({ inst: i });
                      })
                    );
                  },
                  [e]
                ),
                l(r),
                r
              );
            };
      t.useSyncExternalStore =
        void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : f;
    },
    98625: (e, t, r) => {
      "use strict";
      var n = r(42539),
        i = r(68711),
        s = n.rotl32,
        a = n.sum32,
        o = n.sum32_3,
        l = n.sum32_4,
        u = i.BlockHash;
      function f() {
        if (!(this instanceof f)) return new f();
        u.call(this),
          (this.h = [
            0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0,
          ]),
          (this.endian = "little");
      }
      function c(e, t, r, n) {
        return e <= 15
          ? t ^ r ^ n
          : e <= 31
          ? (t & r) | (~t & n)
          : e <= 47
          ? (t | ~r) ^ n
          : e <= 63
          ? (t & n) | (r & ~n)
          : t ^ (r | ~n);
      }
      n.inherits(f, u),
        (t.ripemd160 = f),
        (f.blockSize = 512),
        (f.outSize = 160),
        (f.hmacStrength = 192),
        (f.padLength = 64),
        (f.prototype._update = function (e, t) {
          for (
            var r = this.h[0],
              n = this.h[1],
              i = this.h[2],
              u = this.h[3],
              f = this.h[4],
              g = r,
              m = n,
              y = i,
              v = u,
              w = f,
              A = 0;
            A < 80;
            A++
          ) {
            var x,
              E,
              R = a(
                s(
                  l(
                    r,
                    c(A, n, i, u),
                    e[d[A] + t],
                    (x = A) <= 15
                      ? 0
                      : x <= 31
                      ? 0x5a827999
                      : x <= 47
                      ? 0x6ed9eba1
                      : x <= 63
                      ? 0x8f1bbcdc
                      : 0xa953fd4e
                  ),
                  p[A]
                ),
                f
              );
            (r = f),
              (f = u),
              (u = s(i, 10)),
              (i = n),
              (n = R),
              (R = a(
                s(
                  l(
                    g,
                    c(79 - A, m, y, v),
                    e[h[A] + t],
                    (E = A) <= 15
                      ? 0x50a28be6
                      : E <= 31
                      ? 0x5c4dd124
                      : E <= 47
                      ? 0x6d703ef3
                      : 0x7a6d76e9 * !!(E <= 63)
                  ),
                  b[A]
                ),
                w
              )),
              (g = w),
              (w = v),
              (v = s(y, 10)),
              (y = m),
              (m = R);
          }
          (R = o(this.h[1], i, v)),
            (this.h[1] = o(this.h[2], u, w)),
            (this.h[2] = o(this.h[3], f, g)),
            (this.h[3] = o(this.h[4], r, m)),
            (this.h[4] = o(this.h[0], n, y)),
            (this.h[0] = R);
        }),
        (f.prototype._digest = function (e) {
          return "hex" === e
            ? n.toHex32(this.h, "little")
            : n.split32(this.h, "little");
        });
      var d = [
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10,
          6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7,
          0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5,
          6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13,
        ],
        h = [
          5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0,
          13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8,
          12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10,
          14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11,
        ],
        p = [
          11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13,
          11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13,
          15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5,
          6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5,
          6,
        ],
        b = [
          8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7,
          12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14,
          12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9,
          12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11,
        ];
    },
    99109: (e, t, r) => {
      "use strict";
      var n = r(72667),
        i = r(57946),
        s = i.assert,
        a = i.cachedProperty,
        o = i.parseBytes;
      function l(e, t) {
        (this.eddsa = e),
          "object" != typeof t && (t = o(t)),
          Array.isArray(t) &&
            (s(t.length === 2 * e.encodingLength, "Signature has invalid size"),
            (t = {
              R: t.slice(0, e.encodingLength),
              S: t.slice(e.encodingLength),
            })),
          s(t.R && t.S, "Signature without R or S"),
          e.isPoint(t.R) && (this._R = t.R),
          t.S instanceof n && (this._S = t.S),
          (this._Rencoded = Array.isArray(t.R) ? t.R : t.Rencoded),
          (this._Sencoded = Array.isArray(t.S) ? t.S : t.Sencoded);
      }
      a(l, "S", function () {
        return this.eddsa.decodeInt(this.Sencoded());
      }),
        a(l, "R", function () {
          return this.eddsa.decodePoint(this.Rencoded());
        }),
        a(l, "Rencoded", function () {
          return this.eddsa.encodePoint(this.R());
        }),
        a(l, "Sencoded", function () {
          return this.eddsa.encodeInt(this.S());
        }),
        (l.prototype.toBytes = function () {
          return this.Rencoded().concat(this.Sencoded());
        }),
        (l.prototype.toHex = function () {
          return i.encode(this.toBytes(), "hex").toUpperCase();
        }),
        (e.exports = l);
    },
  },
]);
