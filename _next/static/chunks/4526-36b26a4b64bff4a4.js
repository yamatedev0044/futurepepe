(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4526],
  {
    325: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => o });
      var a = n(95155),
        i = n(74681),
        s = n(6874),
        l = n.n(s);
      n(12115);
      var r = n(81083);
      let o = (e) => {
        let { chainId: t, txhash: n } = e,
          s = "".concat(i.$W[t].explorer, "/tx/").concat(n);
        return (
          console.log(t, n, s, "web3 url"),
          (0, r.GF)(
            (0, a.jsxs)("div", {
              children: [
                "Transaction completed successfully!",
                (0, a.jsx)(l(), {
                  href: s,
                  className: "themeClr font-medium",
                  style: { textDecoration: "underline", marginLeft: "8px" },
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: "View Transaction",
                }),
              ],
            })
          ),
          null
        );
      };
    },
    752: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => r });
      var a = n(95155),
        i = n(12115);
      let s = (e, t) => {
          let [n, a] = (0, i.useState)(null),
            [s, r] = (0, i.useState)(null);
          return (
            (0, i.useEffect)(() => {
              let n = setInterval(() => {
                let n = new Date().getTime();
                e > n
                  ? (a(e - n), r("Start in"))
                  : t > n
                  ? (a(t - n), r("Until the token price increases"))
                  : t < n && (r("Ended"), a(null));
              }, 1e3);
              return () => clearInterval(n);
            }, [e, t]),
            { timer: null !== n ? l(n) : null, text: s }
          );
        },
        l = (e) => [
          Math.floor(e / 864e5),
          Math.floor((e % 864e5) / 36e5),
          Math.floor((e % 36e5) / 6e4),
          Math.floor((e % 6e4) / 1e3),
        ],
        r = (e) => {
          let { start: t, end: n } = e,
            { timer: i, text: l } = s(t, n);
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)("p", {
                className: "themeClr m-0 text-center text-[14px] mt-[-10px]",
                children: l,
              }),
              (0, a.jsx)("div", {
                className: "timerset mt-[10px]",
                children: (0, a.jsxs)("ul", {
                  className:
                    "list-none flex items-center justify-center sm:gap-[14px] gap-[10px] sm:px-[30px] text-center",
                  children: [
                    (0, a.jsx)("li", {
                      children: (0, a.jsxs)("div", {
                        className: "timeValue text-center",
                        children: [
                          (0, a.jsx)("h2", {
                            className:
                              "sm:text-[40px] text-[30px] font-[800] text-transparent [-webkit-text-stroke:0.5px_#26fa0f] [-webkit-text-fill-color:#000] mb-2",
                            children: i && i[0] ? i[0] : "0",
                          }),
                          (0, a.jsx)("p", {
                            className:
                              "sm:text-[12px] text-[9px] leading-tight",
                            children: "DAYS",
                          }),
                        ],
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "dash sm:text-[40px] text-[30px] font-[800] text-transparent [-webkit-text-stroke:0.5px_#26fa0f] [-webkit-text-fill-color:#000]",
                      children: ":",
                    }),
                    (0, a.jsx)("li", {
                      children: (0, a.jsxs)("div", {
                        className: "timeValue text-center",
                        children: [
                          (0, a.jsx)("h2", {
                            className:
                              "sm:text-[40px] text-[30px] font-[800] text-transparent [-webkit-text-stroke:0.5px_#26fa0f] [-webkit-text-fill-color:#000] mb-2",
                            children: i && i[1] ? i[1] : "0",
                          }),
                          (0, a.jsx)("p", {
                            className:
                              "sm:text-[12px] text-[9px] leading-tight",
                            children: "HOURS",
                          }),
                        ],
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "dash sm:text-[40px] text-[30px] font-[800] text-transparent [-webkit-text-stroke:0.5px_#26fa0f] [-webkit-text-fill-color:#000]",
                      children: ":",
                    }),
                    (0, a.jsx)("li", {
                      children: (0, a.jsxs)("div", {
                        className: "timeValue text-center",
                        children: [
                          (0, a.jsx)("h2", {
                            className:
                              "sm:text-[40px] text-[30px] font-[800] text-transparent [-webkit-text-stroke:0.5px_#26fa0f] [-webkit-text-fill-color:#000] mb-2",
                            children: i && i[2] ? i[2] : "0",
                          }),
                          (0, a.jsx)("p", {
                            className:
                              "sm:text-[12px] text-[9px] leading-tight",
                            children: "MINUTES",
                          }),
                        ],
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "dash sm:text-[40px] text-[30px] font-[800] text-transparent [-webkit-text-stroke:0.5px_#26fa0f] [-webkit-text-fill-color:#000]",
                      children: ":",
                    }),
                    (0, a.jsx)("li", {
                      children: (0, a.jsxs)("div", {
                        className: "timeValue text-center",
                        children: [
                          (0, a.jsx)("h2", {
                            className:
                              "sm:text-[40px] text-[30px] font-[800] text-transparent [-webkit-text-stroke:0.5px_#26fa0f] [-webkit-text-fill-color:#000] mb-2",
                            children: i && i[3] ? i[3] : "0",
                          }),
                          (0, a.jsx)("p", {
                            className:
                              "sm:text-[12px] text-[9px] leading-tight",
                            children: "SECONDS",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            ],
          });
        };
    },
    14981: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => B });
      var a = n(95155);
      n(66766);
      var i = n(12115),
        s = n(59694),
        l = n(18558),
        r = n.n(l),
        o = n(2145),
        p = n(18224),
        u = n(38658),
        d = n(90207),
        c = n(98092),
        m = n(325);
      n(87316);
      var y = n(81083),
        x = n(26872),
        h = n(96529),
        f = n(74681),
        w = n(67234),
        b = n(93845),
        g = n(752),
        C = n(35695),
        v = n(64575),
        j = n(6874),
        T = n.n(j);
      let N = { src: "/_next/static/media/coinsult.9cf76ee0.png" },
        k = { src: "/_next/static/media/solidproof.5d991862.png" };
      async function S(e) {
        let { txHash: t, chainId: n, amountInUSDT: a, walletAddress: i } = e,
          s = new URLSearchParams(window.location.search),
          l = (e) => {
            let t = s.get(e),
              n = localStorage.getItem(e);
            return t || n || void 0;
          },
          r = l("email"),
          o = l("phone"),
          p = l("firstName"),
          u = l("lastName"),
          d = l("city"),
          c = l("state"),
          m = l("country"),
          y = l("zip"),
          x = l("gender"),
          h = l("dob"),
          f = l("subscriptionId"),
          w = localStorage.getItem("keitaro_click_id") || void 0,
          b = (e) => {
            var t;
            return null ==
              (t = document.cookie
                .split("; ")
                .find((t) => t.startsWith("".concat(e, "="))))
              ? void 0
              : t.split("=")[1];
          },
          g = {
            txHash: t,
            chainId: n,
            amountInUSDT: a,
            walletAddress: i,
            email: r,
            phone: o,
            firstName: p,
            lastName: u,
            city: d,
            state: c,
            country: m,
            zip: y,
            gender: x,
            dateOfBirth: h,
            subscriptionId: f,
            keitaroClickId: w,
            fbc: b("_fbc"),
            fbp: b("_fbp"),
          };
        Object.keys(g).forEach((e) => {
          (null == g[e] || "undefined" === g[e] || "null" === g[e]) &&
            delete g[e];
        });
        let C = await fetch("/api/wait-for-tx-and-send-track", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(g),
        });
        if (!C.ok) throw Error("Server error ".concat(C.status));
        return await C.json();
      }
      async function M() {
        try {
          let e = await fetch(
            "https://api.coinbase.com/v2/prices/ETH-USDT/spot"
          );
          if (!e.ok) throw Error("HTTP error! Status: ".concat(e.status));
          let t = await e.json();
          return console.log({ data: t }), parseFloat(t.data.amount);
        } catch (e) {
          return console.error("Error fetching ETH to USDT price:", e), null;
        }
      }
      let _ = {
          eth: { symbol: "ETH", logo: f.Xe + "ETH.png" },
          usdt: { symbol: "USDT", logo: f.Xe + "theter.png" },
          pepe: { symbol: "FUTUREPEPE", logo: "" },
          card: { symbol: "CARD", logo: f.Xe + "Card.png" },
        },
        A = {
          eth: { symbol: "BNB", logo: f.Xe + "bnb.png" },
          usdt: { symbol: "USDT", logo: f.Xe + "theter.png" },
          pepe: { symbol: "FUTUREPEPE", logo: "" },
          card: { symbol: "CARD", logo: f.Xe + "Card.png" },
        },
        F = { eth: !1, usdt: !1, card: !1 },
        E = s.Ay.div.withConfig({ componentId: "sc-da28ce56-0" })([
          ".outside{-webkit-clip-path:polygon( 90.12% 100%,100% 64.46%,100% 0%,70.71% 0%,12.42% 0%,0% 29.29%,0% 100%,29.29% 100% );clip-path:polygon( 90.12% 100%,100% 64.46%,100% 0%,70.71% 0%,12.42% 0%,0% 29.29%,0% 100%,29.29% 100% );.inside{position:absolute;top:1.5px;left:1.5px;right:1.5px;bottom:1.5px;background-color:#26fa0f;color:#000;-webkit-clip-path:polygon( 90.12% 100%,100% 64.46%,100% 0%,70.71% 0%,12.42% 0%,0% 29.29%,0% 100%,29.29% 100% );clip-path:polygon( 90.12% 100%,100% 64.46%,100% 0%,70.71% 0%,12.42% 0%,0% 29.29%,0% 100%,29.29% 100% );}}.readystory{.outside{background-color:#26fa0f;.inside{background-color:#000;color:#26fa0f !important;}}}",
        ]),
        R = s.Ay.div.withConfig({ componentId: "sc-da28ce56-1" })(
          [
            "background-image:url(",
            "sidepannelbg.png);background-size:100% 100%;@media (max-height:620px){.headTitle{img{height:60px;}}.priceraise{img{height:20px;}}}@media (max-width:340px){span,p,label{font-size:10px;}}",
          ],
          f.Xe
        ),
        D = s.Ay.div.withConfig({ componentId: "sc-da28ce56-2" })([
          ".pannel_outside{width:122px;height:42px;background:#26fa0f6e;-webkit-clip-path:polygon( 80.12% 100%,100% 64.46%,100% 0%,70.71% 0%,0% 0%,0% 29.29%,0% 100%,29.29% 100% );clip-path:polygon( 80.12% 100%,100% 64.46%,100% 0%,70.71% 0%,0% 0%,0% 29.29%,0% 100%,29.29% 100% );.pannel_inside{position:absolute;top:1px;left:1px;right:1px;bottom:1px;background-color:#0c140d;color:#fff;display:flex;align-items:center;justify-content:center;-webkit-clip-path:polygon( 80.12% 100%,100% 64.46%,100% 0%,70.71% 0%,0% 0%,0% 29.29%,0% 100%,29.29% 100% );clip-path:polygon( 80.12% 100%,100% 64.46%,100% 0%,70.71% 0%,0% 0%,0% 29.29%,0% 100%,29.29% 100% );font-weight:600;font-size:14px;}}.pannel_outside.selected{.pannel_inside{background:#26fa0f;color:#0e160f;}}@media (max-width:480px){.pannel_outside{width:96px;}}@media (max-width:340px){.pannel_outside{width:85px;*{font-size:10px !important;}}}",
        ]),
        L = s.Ay.div.withConfig({ componentId: "sc-da28ce56-3" })([
          '&:after{content:"";height:1px;width:100%;position:absolute;left:0;background:#26fa0f;top:11px;z-index:-1;}',
        ]),
        B = (e) => {
          let { presale: t, setPresale: n } = e,
            s = (0, C.useSearchParams)().get("ref"),
            { address: l } = (0, o.F)(),
            { open: j } = (0, v.JS)(),
            B = (0, c.N)(),
            P = (0, p.i)() || f.z8,
            Z = 1 === P ? _ : A,
            [$, O] = (0, i.useState)({ Completed: !1 }),
            [z, X] = (0, i.useState)(0),
            [H, J] = (0, i.useState)(0),
            [V, G] = (0, i.useState)(null),
            [Y, q] = (0, i.useState)(null),
            [Q, K] = (0, i.useState)(0),
            [ee, et] = (0, i.useState)(!0),
            [en, ea] = (0, i.useState)(Z.eth),
            [ei, es] = (0, i.useState)(""),
            [el, er] = (0, i.useState)(F),
            eo = async () => {
              await j();
            },
            ep = (e, t) => {
              O((n) => ({ ...n, [e]: t }));
            };
          (0, i.useEffect)(() => {
            let e = setTimeout(() => {
              es(z);
            }, 500);
            return () => {
              clearTimeout(e);
            };
          }, [z]),
            (0, i.useEffect)(() => {
              ei && (null == en ? void 0 : en.symbol) && em(ei, en.symbol);
            }, [ei, null == en ? void 0 : en.symbol]);
          let eu = async (e) => {
              let { value: t } = e.target;
              X(t);
            },
            ed = (e) => {
              console.log(e, "_tokenDetails"),
                J(0),
                ec(e.symbol),
                ea(e),
                em(z, e.symbol);
            };
          (0, i.useEffect)(() => {
            let e = sessionStorage.getItem("selectedToken"),
              t = 1 === P ? _ : A;
            if (e) {
              ec(e);
              let n = Object.values(t).find((t) => t.symbol === e);
              console.log(n, "_tokenDetails+", P, e), n ? ea(n) : ea(Z.eth);
            } else ea(Z.eth);
          }, [P]);
          let ec = (e) => {
              sessionStorage.setItem("selectedToken", e),
                "ETH" === e || "BNB" === e
                  ? er({ eth: !0, usdt: !1, card: !1 })
                  : "USDT" === e
                  ? er({ eth: !1, usdt: !0, card: !1 })
                  : er({ eth: !1, usdt: !1, card: !0 });
            },
            em = async (e, t) => {
              try {
                let n = 0;
                if ("ETH" === t || "BNB" === t)
                  n = await (0, h.Tx)(Number(P), e);
                else if ("USDT" === t) n = await (0, h.c9)(Number(P), e);
                else if ("CARD" === t) {
                  let t = await (0, h.Hs)(Number(e));
                  K(t.body.commodity_amount),
                    (n = await (0, h.c9)(Number("1"), t.body.commodity_amount));
                }
                J(n);
              } catch (e) {
                console.log("Error in price fetch:", e);
              }
            },
            ey = async () => {
              G(await (0, h.yS)(Number(P), l));
            },
            ex = async () => {
              try {
                let e = await (0, h.gb)(Number(P || f.z8));
                q(e);
              } catch (e) {
                console.error("Failed to fetch ICO details", e);
              }
            };
          (0, i.useEffect)(() => {
            ex(), l && P && (ey(), (0, h.SQ)(P).then((e) => et(e)));
          }, [l, P]);
          let eh = async () => {
              if (0 == z) return (0, y.$S)("Amount must be greater than zero.");
              if (!ee) return (0, y.$S)("Sale is not active!");
              if (!l) return eo();
              if (!(0, u.Tn)(P)) return (0, y.$S)("Chain not supported");
              try {
                ep("Buy", !0);
                let e = await (0, h.hC)(P, l);
                if (Number(z) > Number(e))
                  return (
                    ep("Buy", !1),
                    (0, y.$S)(
                      "Insufficient balance. You have ".concat(
                        e,
                        " in your wallet."
                      )
                    )
                  );
                let t = new x.NZ(f.$W[P].ico, w, await B),
                  n = await t.buyWithNative((0, u.jy)(s), {
                    value: (0, u.Uj)(z, 18),
                  }),
                  a = await M();
                if (!a) throw Error("Error fetching ETH to USDT price");
                let i = a * parseFloat(z);
                await S({
                  txHash: n.hash,
                  chainId: P,
                  amountInUSDT: i,
                  walletAddress: l,
                }),
                  await ey(),
                  await ex(),
                  (0, m.A)({ chainId: P, txhash: n.hash }),
                  ep("Buy", !1),
                  ep("Completed", !0);
              } catch (e) {
                ep("Buy", !1),
                  console.log("Error buying with ETH:", e),
                  (0, y.Ni)(null == e ? void 0 : e.reason);
              }
            },
            ef = async () => {
              if (0 == z) return (0, y.$S)("Amount must be greater than zero.");
              if (!ee) return (0, y.$S)("Sale is not active!");
              if (!l) return eo();
              if (!(0, u.Tn)(P)) return (0, y.$S)("Chain not supported");
              try {
                ep("Buy", !0);
                let e = await (0, h.oI)(P, f.$W[P].usdt, l);
                if (Number(z) > Number(e))
                  return (
                    ep("Buy", !1),
                    (0, y.$S)(
                      "Insufficient USDT balance. You have ".concat(
                        e,
                        " USDT in your wallet."
                      )
                    )
                  );
                let t = await (0, h.SR)(
                  f.$W[P].usdt,
                  await B,
                  f.$W[P].ico,
                  Number(z),
                  f.$W[P].tokenDecimals
                );
                t && (await t.wait());
                let n = new x.NZ(f.$W[P].ico, w, await B),
                  a = await n.buyWithUSDT.estimateGas(
                    (0, u.Uj)(z, f.$W[P].tokenDecimals),
                    (0, u.jy)(s)
                  ),
                  i = await n.buyWithUSDT(
                    (0, u.Uj)(z, f.$W[P].tokenDecimals),
                    (0, u.jy)(s),
                    { gasLimit: (110n * a) / 100n }
                  );
                await S({
                  txHash: i.hash,
                  chainId: P,
                  amountInUSDT: parseFloat(z),
                  walletAddress: l,
                }),
                  await ey(),
                  await ex(),
                  (0, m.A)({ chainId: P, txhash: i.hash }),
                  ep("Buy", !1),
                  ep("Completed", !0);
              } catch (e) {
                ep("Buy", !1),
                  console.log("Error buying with USDT:", e),
                  (0, y.Ni)(null == e ? void 0 : e.reason);
              }
            };
          return (0, a.jsx)(a.Fragment, {
            children: (0, a.jsxs)("div", {
              className: "flex items-center gap-2",
              children: [
                (0, a.jsx)(R, {
                  className:
                    "relative flex-shrink-0 overflow-auto md:max-h-[610px] w-full max-w-[450px] max-h-[max-content] scrollbar-none flex",
                  style: { scrollbarWidth: "none" },
                  children: (0, a.jsxs)("div", {
                    className:
                      " top-0 left-0 h-full w-full max-w-[calc(100%-20px)] z-[9] pl-4 pr-[4px] py-2",
                    children: [
                      (0, a.jsx)("div", {
                        className: " headTitle pb-1",
                        children: (0, a.jsx)("img", {
                          src: f.Xe + "sidepannelheding.png",
                          alt: "",
                          height: 1e4,
                          width: 1e4,
                          className:
                            "max-w-full h-[60px] object-contain mx-auto w-auto",
                        }),
                      }),
                      Y
                        ? (0, a.jsx)(g.A, {
                            start: Y.stageStartTime,
                            end: Y.stageEndTime,
                          })
                        : (0, a.jsx)(g.A, { start: 0, end: 0 }),
                      (0, a.jsx)("div", {
                        className: "py-1",
                        children: (0, a.jsxs)("div", {
                          className: "priceraise text-center",
                          children: [
                            (0, a.jsxs)("p", {
                              className: "themeClr m-0 text-[14px]",
                              children: [
                                "USDT Raised: ",
                                (0, a.jsxs)("strong", {
                                  children: ["$", Y ? Y.usdtRaised : "0"],
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className:
                                "relative border h-[26px] max-w-[90%] mx-auto text-center border-[#26fa0f] rounded p-2 w-full flex items-center justify-center",
                              children: [
                                (0, a.jsx)("div", {
                                  className:
                                    "absolute top-0 left-0   h-[12px] w-[12px] bg-[#020402] border-b border-b-[#26fa0f] border-b-[1px] -translate-x-[5px] -translate-y-[7px] rotate-[-39deg]",
                                }),
                                (0, a.jsx)("div", {
                                  className:
                                    "absolute bottom-0 left-0   h-[12px] w-[12px] bg-[#020402] border-t border-t-[#26fa0f] border-t-[1px] -translate-x-[5px] translate-y-[7px] rotate-[39deg]",
                                }),
                                (0, a.jsx)("div", {
                                  className:
                                    "absolute top-0 right-0   h-[12px] w-[12px] bg-[#020402] border-b border-b-[#26fa0f] border-b-[1px] translate-x-[5px] -translate-y-[7px] rotate-[39deg]",
                                }),
                                (0, a.jsx)("div", {
                                  className:
                                    "absolute bottom-0 right-0   h-[12px] w-[12px] bg-[#020402] border-t border-t-[#26fa0f] border-t-[1px] translate-x-[5px] translate-y-[7px] rotate-[-39deg]",
                                }),
                                (0, a.jsx)("div", {
                                  className: "text-[8px]",
                                  children: "UNTIL PRICE RISE",
                                }),
                                (0, a.jsx)("div", {
                                  className:
                                    "absolute w-full top-0 z-[-1] bg-[#054202] left-0 rounded h-full ",
                                  style: { maxWidth: Y ? Y.percentage : "0%" },
                                }),
                              ],
                            }),
                            (0, a.jsx)("div", {
                              className: "pt-1",
                              children: (0, a.jsxs)("p", {
                                className: "themeClr m-0 text-[14px]",
                                children: [
                                  "Your purchased",
                                  " ",
                                  (0, a.jsxs)("strong", {
                                    children: [
                                      "$Futurepepe= ",
                                      V
                                        ? null == V
                                          ? void 0
                                          : V.purchased
                                        : "0",
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className: "py-1",
                        children: (0, a.jsx)(L, {
                          className: "z-[9] relative",
                          children: (0, a.jsxs)("p", {
                            className:
                              "themeClr text-[14px] px-3 bg-black  m-0 max-w-[max-content] mx-auto",
                            children: [
                              "1 $FUTUREPEPE = $",
                              Y ? (null == Y ? void 0 : Y.priceInUsd) : "0",
                              " ",
                            ],
                          }),
                        }),
                      }),
                      !$.Buy &&
                        !$.Completed &&
                        (0, a.jsxs)("div", {
                          children: [
                            (0, a.jsx)("div", {
                              className: "py-1",
                              children: (0, a.jsxs)(D, {
                                className:
                                  " flex w-full gap-2 justify-between items-center",
                                children: [
                                  (0, a.jsx)("button", {
                                    className:
                                      "p-0 bg-transparent border-0 flex-shrink-0",
                                    onClick: () => ed(Z.eth),
                                    children: (0, a.jsx)("div", {
                                      className:
                                        "pannel_outside relative ".concat(
                                          el.eth ? "selected" : ""
                                        ),
                                      children: (0, a.jsxs)("div", {
                                        className: "pannel_inside",
                                        children: [
                                          (0, a.jsx)("div", {
                                            className:
                                              "icon me-2 h-full flex items-center justify-center",
                                            children: (0, a.jsx)("img", {
                                              src: Z.eth.logo,
                                              alt: "",
                                              height: 1e4,
                                              width: 1e4,
                                              className:
                                                "max-w-full h-full max-h-[50%] rounded-full w-auto object-contain",
                                            }),
                                          }),
                                          Z.eth.symbol,
                                        ],
                                      }),
                                    }),
                                  }),
                                  (0, a.jsx)("button", {
                                    className:
                                      "p-0 bg-transparent border-0 flex-shrink-0",
                                    onClick: () => ed(Z.usdt),
                                    children: (0, a.jsx)("div", {
                                      className:
                                        "pannel_outside relative ".concat(
                                          el.usdt ? "selected" : ""
                                        ),
                                      children: (0, a.jsxs)("div", {
                                        className: "pannel_inside",
                                        children: [
                                          (0, a.jsx)("div", {
                                            className:
                                              "icon me-2 h-full flex items-center justify-center",
                                            children: (0, a.jsx)("img", {
                                              src: Z.usdt.logo,
                                              alt: "",
                                              height: 1e4,
                                              width: 1e4,
                                              className:
                                                "max-w-full h-full max-h-[50%] w-auto object-contain",
                                            }),
                                          }),
                                          Z.usdt.symbol,
                                        ],
                                      }),
                                    }),
                                  }),
                                  (0, a.jsx)("button", {
                                    className:
                                      "p-0 bg-transparent border-0 flex-shrink-0",
                                    onClick: () => ed(Z.card),
                                    children: (0, a.jsx)("div", {
                                      className:
                                        "pannel_outside relative ".concat(
                                          el.card ? "selected" : ""
                                        ),
                                      children: (0, a.jsxs)("div", {
                                        className: "pannel_inside h-full",
                                        children: [
                                          (0, a.jsx)("div", {
                                            className:
                                              "icon me-3 h-full flex items-center justify-center",
                                            children: (0, a.jsx)("img", {
                                              src: Z.card.logo,
                                              alt: "",
                                              height: 1e4,
                                              width: 1e4,
                                              className:
                                                "max-w-full h-full max-h-[50%] w-auto object-contain",
                                            }),
                                          }),
                                          "CARD",
                                        ],
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "py-1",
                              children: (0, a.jsxs)("div", {
                                className:
                                  "flex w-full justify-between items-end",
                                children: [
                                  (0, a.jsxs)("div", {
                                    className: "w-1/2 pr-1",
                                    children: [
                                      (0, a.jsxs)("div", {
                                        className:
                                          "flex items-center justify-between",
                                        children: [
                                          (0, a.jsxs)("label", {
                                            htmlFor: "receive",
                                            className:
                                              "block text-[10px] leading-tight",
                                            children: [
                                              "Buy with ",
                                              null == en ? void 0 : en.symbol,
                                            ],
                                          }),
                                          (0, a.jsxs)("span", {
                                            className: "text-xs",
                                            children: [
                                              (null == en
                                                ? void 0
                                                : en.symbol) == "USDT"
                                                ? null == V
                                                  ? void 0
                                                  : V.erc20Balance
                                                : null == V
                                                ? void 0
                                                : V.nativeBalance,
                                              " ",
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, a.jsxs)("div", {
                                        className:
                                          "flex items-center h-[45px] relative",
                                        children: [
                                          (0, a.jsx)("img", {
                                            src: f.Xe + "pannelinput.png",
                                            alt: "",
                                            height: 1e4,
                                            width: 1e4,
                                            className:
                                              "max-w-full h-full w-auto",
                                          }),
                                          (0, a.jsxs)("div", {
                                            className:
                                              "flex absolute top-0 left-0 h-full w-full items-center sm:pl-5 pl-[10px]",
                                            children: [
                                              (0, a.jsx)("div", {
                                                className:
                                                  "sm:mr-3 mr-2 h-full flex items-center justify-center flex-shrink-0",
                                                children: (0, a.jsx)("img", {
                                                  src:
                                                    null == en
                                                      ? void 0
                                                      : en.logo,
                                                  alt: "",
                                                  width: 5e3,
                                                  height: 5e3,
                                                  className: "".concat(
                                                    "BNB" == en.symbol &&
                                                      "rounded-full  object-cover w-[22px] ",
                                                    " max-w-full h-[22px] w-auto object-contain"
                                                  ),
                                                }),
                                              }),
                                              (0, a.jsx)("input", {
                                                type: "number",
                                                name: "amount",
                                                value: z,
                                                id: "amount",
                                                onChange: (e) => eu(e),
                                                placeholder: "00.00",
                                                className:
                                                  "w-full bg-transparent border-none focus:outline-none text-[12px]",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, a.jsx)("div", {
                                    className: "mx-2 pb-4",
                                    children: U,
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: "w-1/2 pl-1",
                                    children: [
                                      (0, a.jsx)("div", {
                                        className:
                                          "flex items-center justify-between",
                                        children: (0, a.jsxs)("label", {
                                          htmlFor: "receive",
                                          className:
                                            "block text-[10px] leading-tight",
                                          children: [
                                            "Receive $",
                                            Z.pepe.symbol,
                                          ],
                                        }),
                                      }),
                                      (0, a.jsxs)("div", {
                                        className:
                                          "flex items-center h-[45px] relative",
                                        children: [
                                          (0, a.jsx)("img", {
                                            src: f.Xe + "pannelinput.png",
                                            alt: "",
                                            height: 1e4,
                                            width: 1e4,
                                            className:
                                              "max-w-full h-full w-auto",
                                          }),
                                          (0, a.jsxs)("div", {
                                            className:
                                              "flex absolute top-0 left-0 h-full w-full items-center sm:pl-5 pl-[10px]",
                                            children: [
                                              (0, a.jsx)("div", {
                                                className: "sm:mr-3 mr-2",
                                                children: (0, a.jsx)("img", {
                                                  src: f.Xe + "logoIcn.png",
                                                  alt: "",
                                                  width: 5e3,
                                                  height: 5e3,
                                                  className:
                                                    "max-w-full h-[22px] w-auto object-contain",
                                                }),
                                              }),
                                              (0, a.jsx)("input", {
                                                value: H,
                                                type: "number",
                                                name: "buy",
                                                id: "buy",
                                                placeholder: "00.00",
                                                readOnly: !0,
                                                className:
                                                  "w-full bg-transparent border-none focus:outline-none text-[12px]",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            (0, a.jsxs)("div", {
                              className:
                                "flex items-center justify-center gap-3 py-2",
                              children: [
                                (0, a.jsxs)("button", {
                                  className:
                                    "relative flex items-center justify-center relative",
                                  children: [
                                    (0, a.jsx)("img", {
                                      src: f.Xe + "pannelbtn-bg.png",
                                      alt: "",
                                      height: 1e4,
                                      width: 1e4,
                                      className:
                                        "max-w-full h-[45px] w-auto object-contain",
                                    }),
                                    (0, a.jsx)("span", {
                                      className:
                                        "absolute top-0 text-black text-[16px] font-semibold left-0 w-full h-full flex items-center justify-center text-center",
                                      onClick: eo,
                                      children: l
                                        ? (0, u.c1)(l)
                                        : "Connect Wallet",
                                    }),
                                  ],
                                }),
                                (null == en ? void 0 : en.symbol) === "CARD"
                                  ? (0, a.jsx)(b.A, {
                                      wallet: l,
                                      amount: Q,
                                      tokenAmount: H,
                                      usd: ei,
                                    })
                                  : (0, a.jsxs)("div", {
                                      className:
                                        "relative flex items-center justify-center relative",
                                      children: [
                                        (0, a.jsx)("img", {
                                          src: f.Xe + "pannelbtn-bg.png",
                                          alt: "",
                                          height: 1e4,
                                          width: 1e4,
                                          className:
                                            "max-w-full h-[45px] w-auto object-contain",
                                        }),
                                        (0, a.jsx)(d.A, {
                                          label: "Buy With ".concat(
                                            null == en ? void 0 : en.symbol
                                          ),
                                          onClick: () =>
                                            (null == en
                                              ? void 0
                                              : en.symbol) === "USDT"
                                              ? ef()
                                              : eh(),
                                          load: $.Buy,
                                        }),
                                      ],
                                    }),
                              ],
                            }),
                          ],
                        }),
                      $.Buy &&
                        (0, a.jsx)("div", {
                          className:
                            "text-center mx-auto max-w-[520px] h-full flex items-center justify-center",
                          children: (0, a.jsxs)("div", {
                            className: "px-3 py-2",
                            children: [
                              (0, a.jsx)("span", {
                                className:
                                  "icn flex items-center justify-center pb-1",
                                children: (0, a.jsx)("span", {
                                  className:
                                    "loading loading-spinner loading-xl text-[#26fa0f]",
                                }),
                              }),
                              (0, a.jsx)("h6", {
                                className: "m-0 pt-2 themeClr text-xl",
                                children: "YOUR TRANSACTION IN PROGRESS",
                              }),
                              (0, a.jsxs)("p", {
                                className: "m-0 py-2 text-white/80",
                                children: [
                                  null == V ? void 0 : V.purchased,
                                  " $FEPE tokens will be available for you to claim once the presale ends.",
                                ],
                              }),
                            ],
                          }),
                        }),
                      $.Completed &&
                        (0, a.jsx)("div", {
                          className:
                            "text-center mx-auto max-w-[520px] h-full flex items-center justify-center",
                          children: (0, a.jsxs)("div", {
                            className: "px-3 py-2",
                            children: [
                              (0, a.jsx)("span", {
                                className:
                                  "icn flex items-center justify-center pb-1",
                                children: I,
                              }),
                              (0, a.jsx)("h6", {
                                className: "m-0 pt-2 themeClr text-base",
                                children: "YOUR PURCHASE WAS SUCCESSFUL!",
                              }),
                              (0, a.jsxs)("p", {
                                className: "m-0 py-2 text-white/80",
                                children: [
                                  null == V ? void 0 : V.purchased,
                                  " $FEPE tokens will be available for you to claim once the presale ends.",
                                ],
                              }),
                              (0, a.jsx)(E, {
                                className: "flex flex-col gap-2",
                                children: (0, a.jsxs)("div", {
                                  className: "flex items-center gap-3",
                                  children: [
                                    (0, a.jsx)("button", {
                                      className:
                                        "readystory w-full border-0 bg-transparent p-0 ",
                                      children: (0, a.jsx)("div", {
                                        style: {
                                          clipPath:
                                            "polygon( 96.12% 100%,100% 66.46%,100% 0%,70.71% 0%,4.42% 0%,0% 29.29%,0% 100%,29.29% 100% )",
                                        },
                                        className:
                                          "outside w-full  relative md:h-[45px] h-[40px] bg-black",
                                        children: (0, a.jsx)("div", {
                                          onClick: () => {
                                            ep("Completed", !1), X(0), J(0);
                                          },
                                          style: {
                                            clipPath:
                                              "polygon( 96.12% 100%,100% 64.46%,100% 0%,70.71% 0%,4.42% 0%,0% 29.29%,0% 100%,29.29% 100% )",
                                          },
                                          className:
                                            "inside decrypt-btn relative bg-black text-white border-2 border-black md:sm:text-[14px] text-[14px] cursor-pointer overflow-hidden font-semibold flex items-center justify-center",
                                          children: "New Transactions",
                                        }),
                                      }),
                                    }),
                                    (0, a.jsx)("button", {
                                      className:
                                        "readystory w-full border-0 bg-transparent p-0 ",
                                      children: (0, a.jsx)("div", {
                                        style: {
                                          clipPath:
                                            "polygon( 96.12% 100%,100% 66.46%,100% 0%,70.71% 0%,4.42% 0%,0% 29.29%,0% 100%,29.29% 100% )",
                                        },
                                        className:
                                          "outside w-full  relative md:h-[45px] h-[40px] bg-black",
                                        children: (0, a.jsx)("div", {
                                          onClick: () => ep("Completed", !1),
                                          style: {
                                            clipPath:
                                              "polygon( 96.12% 100%,100% 64.46%,100% 0%,70.71% 0%,4.42% 0%,0% 29.29%,0% 100%,29.29% 100% )",
                                          },
                                          className:
                                            "inside decrypt-btn relative bg-black text-white border-2 border-black md:sm:text-[14px] text-[14px] cursor-pointer overflow-hidden font-semibold flex items-center justify-center",
                                          children: "Start Again",
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        }),
                      (0, a.jsx)("hr", {
                        className: "border-[#26fa0f] mb-2 mt-4",
                      }),
                      (0, a.jsx)("div", {
                        className: "",
                        children: (0, a.jsx)("div", {
                          className: "text-center",
                          children: (0, a.jsx)(T(), {
                            target: "_blank",
                            href: "https://metamask.io/",
                            className: "text-white underline text-[12px]",
                            children: "Don't have a wallet?",
                          }),
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className: "py-2",
                        children: (0, a.jsx)("div", {
                          className: "text-center",
                          children: (0, a.jsx)("h6", {
                            className: "".concat(
                              r().variable,
                              " text-white font-zupraxu uppercase text-[14px] leading-tight"
                            ),
                            children: "Trust And Safety Audits",
                          }),
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className: "pb-2 pt-1",
                        children: (0, a.jsxs)("div", {
                          className:
                            "flex items-center gap-[40px] justify-center",
                          children: [
                            (0, a.jsx)(T(), {
                              target: "_blank",
                              href: "https://app.solidproof.io/projects/future-pepe ",
                              className: "",
                              children: (0, a.jsx)("img", {
                                src: k.src,
                                alt: "",
                                height: 1e3,
                                width: 1e4,
                                className: "max-w-full h-[30px] w-auto",
                              }),
                            }),
                            (0, a.jsx)(T(), {
                              target: "_blank",
                              href: "https://coinsult.net/projects/future-pepe-ico/		",
                              className: "",
                              children: (0, a.jsx)("img", {
                                src: N.src,
                                alt: "",
                                height: 1e3,
                                width: 1e4,
                                className: "max-w-full h-[30px] w-auto",
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
                t &&
                  (0, a.jsx)("span", {
                    className: "md:block hidden",
                    onClick: () => n(!t),
                    children: W,
                  }),
              ],
            }),
          });
        },
        U = (0, a.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: 28,
          height: 11,
          viewBox: "0 0 28 11",
          fill: "none",
          children: [
            (0, a.jsx)("path", {
              d: "M16.7408 5.04681V10.0936L22.1651 7.56655L27.5803 5.04681L22.1651 2.51973L16.7408 0V5.04681Z",
              fill: "#26FA0F",
            }),
            (0, a.jsx)("path", {
              d: "M11.3211 5.04669L11.3211 -0.000119209L5.89681 2.52696L0.481621 5.04669L5.89681 7.57377L11.3211 10.0935L11.3211 5.04669Z",
              fill: "#26FA0F",
            }),
          ],
        }),
        W = (0, a.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "31",
          height: "141",
          viewBox: "0 0 31 141",
          fill: "none",
          children: [
            (0, a.jsx)("path", {
              d: "M30 26.2888L1 2.5V138.5L30 114.711V26.2888Z",
              fill: "#26FA0F",
              fillOpacity: "0.15",
              stroke: "#26FA0F",
              strokeWidth: "2",
            }),
            (0, a.jsx)("path", {
              d: "M11 62.5L20 70.5L11 78.5",
              stroke: "#26FA0F",
              strokeWidth: "3",
            }),
          ],
        }),
        I = (0, a.jsx)("svg", {
          width: "20",
          height: "20",
          viewBox: "0 0 20 20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, a.jsx)("path", {
            d: "M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z",
            fill: "#26FA0F",
          }),
        });
    },
    25634: (e) => {
      "use strict";
      e.exports = JSON.parse(
        '[{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_rewardsToken","type":"address"},{"internalType":"address","name":"_stakingToken","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldOwner","type":"address"},{"indexed":false,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnerChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnerNominated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Staked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawn","type":"event"},{"constant":true,"inputs":[],"name":"DURATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"acceptOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"earned","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"exit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"getReward","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"lastTimeRewardApplicable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lastUpdateTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"nominateNewOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"nominatedOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"reward","type":"uint256"}],"name":"notifyRewardAmount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"periodFinish","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"rewardPerToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"rewardPerTokenStored","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"rewardRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"rewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"rewardsDistribution","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"rewardsToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_rewardsDistribution","type":"address"}],"name":"setRewardsDistribution","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stake","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"stakingToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userRewardPerTokenPaid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]'
      );
    },
    28378: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => o });
      var a = n(95155),
        i = n(74681);
      n(66766);
      var s = n(6874),
        l = n.n(s);
      n(12115);
      let r = n(59694).Ay.div.withConfig({ componentId: "sc-d36f0316-0" })([
          "@media (max-width:575px){.socialList{svg{height:20px;width:20px;}}}",
        ]),
        o = () =>
          (0, a.jsx)(a.Fragment, {
            children: (0, a.jsxs)(r, {
              className:
                "relative md:pt-14 md:pb-[100px]  py-10 text-[#fff] z-[9]  text-[15px] font-normal overflow-hidden",
              children: [
                (0, a.jsx)("img", {
                  src: i.Xe + "commonBg.png",
                  alt: "",
                  height: 1e4,
                  width: 1e4,
                  className:
                    "max-w-full h-full absolute top-0 left-0 z-[-9] object-cover w-full",
                }),
                (0, a.jsx)("div", {
                  className: "container",
                  children: (0, a.jsx)("div", {
                    className: "grid gap-3 grid-cols-12",
                    children: (0, a.jsxs)("div", {
                      className: "col-span-12",
                      children: [
                        (0, a.jsxs)("ul", {
                          className:
                            "list-none pl-0 mb-0 flex items-center justify-center md:gap-4 gap-3 py-5 socialList",
                          children: [
                            (0, a.jsx)("li", {
                              className: "",
                              children: (0, a.jsx)(l(), {
                                target: "_blank",
                                href: "https://x.com/FuturePepeETH",
                                className:
                                  "transition duration-[400ms] hover:text-[#26fa0f]",
                                children: u,
                              }),
                            }),
                            (0, a.jsx)("li", {
                              className: "",
                              children: (0, a.jsx)(l(), {
                                target: "_blank",
                                href: "https://t.me/futurepepe_eth",
                                className:
                                  "transition duration-[400ms] hover:text-[#26fa0f]",
                                children: d,
                              }),
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className: "text-center",
                          children: [
                            (0, a.jsx)("div", {
                              className: "md:my-8 my-3",
                              children: (0, a.jsx)("img", {
                                src: i.Xe + "logoIcn.png",
                                alt: "",
                                className:
                                  "max-w-full md:h-auto h-[50px] w-auto mx-auto object-contain",
                                height: 1e4,
                                width: 1e4,
                              }),
                            }),
                            (0, a.jsx)("p", {
                              className:
                                "m-0 py-3 themeClr font-medium md:text-[18px] leading-tight",
                              children:
                                "FUTUREPEPE \xa9 2025. All rights reserved",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
          }),
        p = (0, a.jsxs)("svg", {
          width: "30",
          height: "30",
          viewBox: "0 0 44 44",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, a.jsx)("g", {
              clipPath: "url(#clip0_949_1913)",
              children: (0, a.jsx)("path", {
                d: "M14.6663 22.0135C14.6592 17.964 17.9367 14.6744 21.9853 14.6674C26.0348 14.6595 29.325 17.9355 29.3329 21.9857C29.3407 26.0359 26.0632 29.3248 22.0131 29.3327C17.9644 29.3404 14.6741 26.0637 14.6663 22.0135ZM10.7039 22.0214C10.716 28.2606 15.7833 33.3073 22.021 33.2951C28.2594 33.2831 33.3089 28.2171 33.2968 21.9779C33.2847 15.7408 28.2167 10.6912 21.9775 10.7034C15.7398 10.7155 10.6918 15.7835 10.7039 22.0214ZM31.08 10.24C31.0829 11.697 32.2674 12.8768 33.7245 12.8739C35.1821 12.871 36.3618 11.687 36.3597 10.2301C36.3568 8.77308 35.1722 7.59264 33.7145 7.59556C32.2568 7.5984 31.0772 8.78305 31.08 10.24ZM13.1452 39.9228C11.0004 39.8295 9.83568 39.473 9.05949 39.1744C8.0316 38.7767 7.29812 38.2998 6.52614 37.5336C5.75563 36.7644 5.2773 36.0331 4.87597 35.0073C4.57451 34.231 4.21168 33.0678 4.11113 30.9229C4.00208 28.6041 3.97715 27.9084 3.9665 22.0342C3.95507 16.1614 3.97647 15.4656 4.0777 13.1447C4.16957 11.0014 4.52819 9.83509 4.82613 9.05959C5.22385 8.03032 5.69934 7.29822 6.46702 6.52633C7.23607 5.75435 7.9674 5.27749 8.99384 4.87616C9.76942 4.57314 10.9327 4.21315 13.0768 4.11131C15.397 4.00149 16.0919 3.97802 21.9647 3.96659C27.8388 3.95517 28.5345 3.97588 30.8555 4.0778C32.9987 4.17113 34.1649 4.52613 34.9398 4.82623C35.9683 5.22395 36.7018 5.69806 37.4731 6.46712C38.2443 7.23626 38.7226 7.96613 39.1239 8.9948C39.4268 9.76815 39.7869 10.9329 39.8881 13.0763C39.9985 15.3965 40.0235 16.0922 40.0342 21.965C40.0455 27.8393 40.0241 28.535 39.9223 30.8545C39.8289 32.9993 39.4732 34.1649 39.1739 34.9417C38.7761 35.9689 38.3007 36.7024 37.5322 37.4744C36.7638 38.2435 36.0325 38.7232 35.0054 39.1245C34.2312 39.4267 33.0665 39.7874 30.9239 39.8893C28.6037 39.9984 27.9087 40.0234 22.0338 40.034C16.161 40.0455 15.4661 40.0234 13.1452 39.9228ZM12.8886 0.152346C10.5478 0.262861 8.94898 0.637721 7.55181 1.18523C6.10557 1.74906 4.87958 2.50463 3.66005 3.72924C2.43896 4.95453 1.68907 6.18266 1.12953 7.63037C0.587868 9.03106 0.220743 10.6306 0.11736 12.9729C0.0147509 15.3195 -0.00879598 16.068 0.0026337 22.042C0.0140634 28.0153 0.0403602 28.7652 0.152251 31.1125C0.264141 33.4527 0.637711 35.0508 1.18513 36.4486C1.74966 37.8949 2.50453 39.1203 3.72983 40.3406C4.95443 41.5609 6.18334 42.3101 7.63173 42.8704C9.03096 43.4113 10.6311 43.7799 12.9727 43.8825C15.3193 43.9859 16.0684 44.0087 22.0409 43.9973C28.0163 43.9859 28.7656 43.9595 31.1121 43.8483C33.4529 43.7364 35.0502 43.3615 36.4488 42.8154C37.895 42.2495 39.121 41.496 40.3407 40.2707C41.5603 39.046 42.3102 37.8172 42.8697 36.3688C43.4114 34.9696 43.7799 33.3692 43.8818 31.0292C43.9845 28.6811 44.0088 27.9312 43.9973 21.9579C43.9858 15.9838 43.9589 15.2354 43.8477 12.8896C43.7365 10.5473 43.3615 8.94985 42.8148 7.55131C42.2496 6.10506 41.4955 4.88037 40.2709 3.65937C39.0462 2.43974 37.8173 1.68839 36.3689 1.13031C34.969 0.588564 33.3695 0.219377 31.0279 0.118143C28.6813 0.0140723 27.9322 -0.00870116 21.9575 0.00264259C15.9842 0.0140723 15.2351 0.0396816 12.8886 0.152346Z",
                fill: "currentColor",
              }),
            }),
            (0, a.jsx)("defs", {
              children: (0, a.jsx)("clipPath", {
                id: "clip0_949_1913",
                children: (0, a.jsx)("rect", {
                  width: "44",
                  height: "44",
                  fill: "currentColor",
                }),
              }),
            }),
          ],
        }),
        u = (0, a.jsxs)("svg", {
          width: "30",
          height: "30",
          viewBox: "0 0 48 44",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, a.jsx)("g", {
              clipPath: "url(#clip0_949_1911)",
              children: (0, a.jsx)("path", {
                d: "M37.8027 0H45.1627L29.083 18.6382L48 44H33.1877L21.587 28.6178L8.31272 44H0.947719L18.1466 24.0647L0 0H15.1874L25.6739 14.0595L37.8027 0ZM35.2193 39.5321H39.2979L12.9715 4.23335H8.59528L35.2193 39.5321Z",
                fill: "currentColor",
              }),
            }),
            (0, a.jsx)("defs", {
              children: (0, a.jsx)("clipPath", {
                id: "clip0_949_1911",
                children: (0, a.jsx)("rect", {
                  width: "48",
                  height: "44",
                  fill: "currentColor",
                }),
              }),
            }),
          ],
        }),
        d = (0, a.jsxs)("svg", {
          width: "30",
          height: "30",
          viewBox: "0 0 44 44",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, a.jsxs)("g", {
              clipPath: "url(#clip0_949_1915)",
              children: [
                (0, a.jsx)("path", {
                  d: "M22 44C34.1503 44 44 34.1503 44 22C44 9.84974 34.1503 0 22 0C9.84974 0 0 9.84974 0 22C0 34.1503 9.84974 44 22 44Z",
                  fill: "currentColor",
                }),
                (0, a.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M9.95845 21.7684C16.372 18.9737 20.6482 17.1321 22.7881 16.2417C28.8982 13.7006 30.1675 13.2589 30.9951 13.2442C31.1773 13.2417 31.5838 13.2864 31.8476 13.5003C32.0702 13.6808 32.1312 13.9249 32.1604 14.0959C32.1896 14.2678 32.2266 14.6571 32.1973 14.9621C31.8665 18.4409 30.4339 26.8825 29.7052 30.7789C29.3966 32.4281 28.7891 32.9807 28.2013 33.0348C26.9242 33.1525 25.954 32.19 24.7165 31.3788C22.7803 30.1103 21.6863 29.3197 19.8069 28.0814C17.6344 26.6496 19.0429 25.8633 20.2804 24.5777C20.6044 24.2408 26.2333 19.1207 26.3424 18.6566C26.3562 18.5982 26.3691 18.3816 26.2402 18.2673C26.1113 18.153 25.9213 18.1925 25.7847 18.2235C25.5905 18.2673 22.4976 20.3117 16.5052 24.3568C15.6269 24.9601 14.8311 25.2532 14.1187 25.2385C13.3332 25.2214 11.8224 24.7942 10.6992 24.429C9.32165 23.9813 8.22681 23.7441 8.3222 22.9835C8.37118 22.5874 8.91689 22.1826 9.95845 21.7684Z",
                  fill: "black",
                }),
              ],
            }),
            (0, a.jsx)("defs", {
              children: (0, a.jsx)("clipPath", {
                id: "clip0_949_1915",
                children: (0, a.jsx)("rect", {
                  width: "44",
                  height: "44",
                  fill: "currentColor",
                }),
              }),
            }),
          ],
        }),
        c = (0, a.jsxs)("svg", {
          width: "30",
          height: "30",
          viewBox: "0 0 44 44",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, a.jsx)("g", {
              clipPath: "url(#clip0_949_1918)",
              children: (0, a.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M43.5509 13.2026C43.5509 13.2026 43.1213 10.1697 41.7993 8.838C40.1242 7.08646 38.2484 7.07512 37.3909 6.97364C31.2382 6.52539 21.9975 6.52539 21.9975 6.52539H21.9813C21.9813 6.52539 12.7446 6.52539 6.58863 6.97364C5.72788 7.07835 3.85458 7.0857 2.18017 8.838C0.85742 10.1697 0.436808 13.2026 0.436808 13.2026C0.436808 13.2026 -0.000854492 16.7616 -0.000854492 20.3281V23.663C-0.000854492 27.2221 0.436808 30.7885 0.436808 30.7885C0.436808 30.7885 0.866358 33.8213 2.18017 35.1555C3.85458 36.9071 6.05513 36.8502 7.0377 37.037C10.5602 37.3732 22.0007 37.4747 22.0007 37.4747C22.0007 37.4747 31.2496 37.4584 37.4022 37.0183C38.263 36.9167 40.1355 36.9062 41.8107 35.1539C43.1334 33.8222 43.5622 30.786 43.5622 30.786C43.5622 30.786 44 27.2271 44 23.6606V20.3256C43.991 16.7665 43.5533 13.2002 43.5533 13.2002L43.5509 13.2026ZM17.4396 27.7093V15.3431L29.326 21.5469L17.4396 27.7093Z",
                fill: "currentColor",
              }),
            }),
            (0, a.jsx)("defs", {
              children: (0, a.jsx)("clipPath", {
                id: "clip0_949_1918",
                children: (0, a.jsx)("rect", {
                  width: "44",
                  height: "44",
                  fill: "currentColor",
                }),
              }),
            }),
          ],
        }),
        m = (0, a.jsx)("svg", {
          width: "30",
          height: "30",
          viewBox: "0 0 36 28",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, a.jsx)("path", {
            d: "M30.1483 2.34499C27.8827 1.2495 25.4602 0.45334 22.9276 0C22.6165 0.581166 22.2531 1.36285 22.0026 1.98467C19.3103 1.56624 16.6428 1.56624 14 1.98467C13.7495 1.36285 13.3779 0.581166 13.0641 0C10.5287 0.45334 8.10339 1.25243 5.83778 2.35079C1.26802 9.48737 0.0292337 16.4467 0.648628 23.3072C3.67953 25.6463 6.61685 27.0673 9.50459 27.9971C10.2176 26.983 10.8535 25.905 11.4013 24.7688C10.358 24.3591 9.35869 23.8535 8.41448 23.2665C8.66498 23.0747 8.91 22.8742 9.14672 22.6679C14.9057 25.4517 21.163 25.4517 26.8532 22.6679C27.0927 22.8742 27.3376 23.0747 27.5854 23.2665C26.6384 23.8564 25.6364 24.362 24.5931 24.7717C25.1409 25.905 25.774 26.9859 26.4898 28C29.3803 27.0702 32.3203 25.6493 35.3512 23.3072C36.078 15.3541 34.1097 8.45872 30.1483 2.34499ZM12.1859 19.088C10.4571 19.088 9.03935 17.4201 9.03935 15.389C9.03935 13.3578 10.4268 11.687 12.1859 11.687C13.945 11.687 15.3627 13.3549 15.3324 15.389C15.3351 17.4201 13.945 19.088 12.1859 19.088ZM23.814 19.088C22.0852 19.088 20.6675 17.4201 20.6675 15.389C20.6675 13.3578 22.0549 11.687 23.814 11.687C25.5731 11.687 26.9908 13.3549 26.9605 15.389C26.9605 17.4201 25.5731 19.088 23.814 19.088Z",
            fill: "currentColor",
          }),
        });
    },
    29309: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => u });
      var a = n(95155);
      n(66766), n(12115);
      var i = n(59694),
        s = n(76494),
        l = n.n(s);
      n(38658), n(90207), n(98092), n(325), n(87316), n(96529);
      var r = n(74681);
      n(67234), n(93845), n(752), n(35695), n(64575);
      var o = n(14981);
      r.Xe, r.Xe, r.Xe, r.Xe, r.Xe, r.Xe;
      let p = i.Ay.div.withConfig({ componentId: "sc-2ae5d334-0" })([
        "@media (max-height:620px){transform:unset !important;top:80px !important;.headTitle{img{height:60px;}}.priceraise{img{height:20px;}}}",
      ]);
      i.Ay.div.withConfig({ componentId: "sc-2ae5d334-1" })([
        ".pannel_outside{width:112px;height:42px;background:#26fa0f6e;-webkit-clip-path:polygon( 80.12% 100%,100% 64.46%,100% 0%,70.71% 0%,0% 0%,0% 29.29%,0% 100%,29.29% 100% );clip-path:polygon( 80.12% 100%,100% 64.46%,100% 0%,70.71% 0%,0% 0%,0% 29.29%,0% 100%,29.29% 100% );.pannel_inside{position:absolute;top:1px;left:1px;right:1px;bottom:1px;background-color:#000;color:#fff;display:flex;align-items:center;justify-content:center;-webkit-clip-path:polygon( 80.12% 100%,100% 64.46%,100% 0%,70.71% 0%,0% 0%,0% 29.29%,0% 100%,29.29% 100% );clip-path:polygon( 80.12% 100%,100% 64.46%,100% 0%,70.71% 0%,0% 0%,0% 29.29%,0% 100%,29.29% 100% );font-weight:600;font-size:14px;}}.pannel_outside.selected{background:#020501;clip-path:unset;.pannel_inside{background:#26fa0f;color:#000;}}",
      ]),
        i.Ay.div.withConfig({ componentId: "sc-2ae5d334-2" })([
          '&:after{content:"";height:1px;width:100%;position:absolute;left:0;background:#26fa0f;top:11px;z-index:-1;}',
        ]);
      let u = () => {
        return "";
      };
    },
    38658: (e, t, n) => {
      "use strict";
      n.d(t, {
        J1: () => l,
        Tn: () => o,
        Uj: () => r,
        c1: () => s,
        jy: () => p,
      });
      var a = n(62741),
        i = n(74681);
      let s = (e) =>
          e ? "".concat(e.slice(0, 5), "...").concat(e.slice(-5)) : "",
        l = (e, t) => {
          let n;
          if (!(null == e || isNaN(Number(e))) && (t || 0 === t)) {
            try {
              n =
                "number" == typeof e
                  ? BigInt(Math.floor(e))
                  : BigInt(e.toString());
            } catch (e) {
              console.error("Error converting to BigInt:", e);
              return;
            }
            return Number(a.Js(n, t)).toFixed(4);
          }
        },
        r = (e, t) => a.XS(e.toString(), t),
        o = (e) => i.h3.includes(e),
        p = (e) => {
          if (e) {
            if ((null == e ? void 0 : e.length) === 42) return e;
            else if ((null == e ? void 0 : e.length) < 42) {
              var t;
              return null != (t = i.$b[e]) ? t : i.$W[i.z8].ico;
            }
          }
          return i.$W[i.z8].ico;
        };
    },
    48352: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => m });
      var a = n(95155),
        i = n(12115);
      n(66766);
      var s = n(6874),
        l = n.n(s),
        r = n(59694);
      n(47650);
      var o = n(74681);
      let p = () =>
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)("img", {
                src: o.Xe + "topright.png",
                alt: "",
                height: 1e4,
                width: 1e4,
                className:
                  "max-w-full h-[7px] w-auto absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
              }),
              (0, a.jsx)("img", {
                src: o.Xe + "topleft.png",
                alt: "",
                height: 1e4,
                width: 1e4,
                className:
                  "max-w-full h-[7px] w-auto absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
              }),
              (0, a.jsx)("img", {
                src: o.Xe + "bottomright.png",
                alt: "",
                height: 1e4,
                width: 1e4,
                className:
                  "max-w-full h-[7px] w-auto absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
              }),
              (0, a.jsx)("img", {
                src: o.Xe + "bottomleft.png",
                alt: "",
                height: 1e4,
                width: 1e4,
                className:
                  "max-w-full h-[7px] w-auto absolute bottom-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
              }),
            ],
          }),
        u = r.Ay.button.withConfig({ componentId: "sc-719da2e7-0" })([""]),
        d = r.Ay.header.withConfig({ componentId: "sc-719da2e7-1" })([
          '@media (min-width:1024px){&:after{position:absolute;content:"";left:0;top:0;z-index:-1;height:100%;width:100%;background:linear-gradient( 180deg,rgb(0 0 0 / 82%) 70.5%,rgb(0 0 0 / 20%) 98% );backdrop-filter:blur(2.5px);}}@media (max-width:1024px){background:#060900;nav{flex-wrap:wrap;}}@media (max-width:360px){nav{padding-left:0;padding-right:0;}}',
        ]),
        c = r.Ay.div.withConfig({ componentId: "sc-719da2e7-2" })([
          "width:100%;@media (min-width:1200px){.linksWrpp{.cstmLink{margin-bottom:-15px;font-size:16px;}}}@media (max-width:1024px){display:none;&.active{display:block;}.menuList{display:block;padding:30px;li{padding:5px 0;text-align:center;a{max-width:max-content;margin:0 auto;color:#26fa0f;font-size:22px;line-height:35px;}}}}a{transition:0.4s;}",
        ]),
        m = (e) => {
          let { presale: t, setPresale: n } = e,
            [s, r] = (0, i.useState)(!1);
          (0, i.useEffect)(() => {
            window.addEventListener("scroll", () => {
              r(window.scrollY > 50);
            });
          }, []);
          let [m, v] = (0, i.useState)();
          return (0, a.jsx)(a.Fragment, {
            children: (0, a.jsx)(d, {
              className: "".concat(
                s && "active",
                "  w-full top-0 fixed left-0 z-[999999] siteHeader shadow-sm "
              ),
              children: (0, a.jsx)("div", {
                className: "container mx-auto",
                children: (0, a.jsxs)("nav", {
                  className:
                    "flex items-center justify-between lg:px-0 lg:px-3 py-2",
                  children: [
                    (0, a.jsx)(l(), {
                      href: "/#hero",
                      className: "pr-8",
                      children: (0, a.jsx)("img", {
                        src: o.Xe + "logoIcn.png",
                        alt: "logo",
                        className:
                          "max-w-full lg:h-[64px] h-[35px] w-auto object-contain",
                        height: 1e4,
                        width: 1e4,
                      }),
                    }),
                    (0, a.jsxs)("div", {
                      className: "right flex items-center gap-3 lg:hidden",
                      children: [
                        (0, a.jsxs)("a", {
                          href: "https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0x85c1ddfd0203ba23a91192144c2c246ea4d4c719",
                          target: "_blank",
                          className:
                            "nav-link themeClr flex items-center justify-center relative font-zupraxu z-[9]  lg:text-[25px] text-[14px] transition duration-[400ms]",
                          children: [
                            (0, a.jsx)("img", {
                              src: o.Xe + "headerbuynow.png",
                              className: "max-w-full h-[30px] w-auto",
                              height: 1e4,
                              width: 1e4,
                              alt: "",
                            }),
                            (0, a.jsx)("span", {
                              className:
                                "absolute top-[50%] transform text-center translate-y-[-50%] left-0 right-0 mx-auto",
                              children: "Buy Now",
                            }),
                          ],
                        }),
                        (0, a.jsx)("button", {
                          onClick: () => v(!m),
                          className: "border-0 p-0 w-[30px] bg-transparent",
                          children: m ? x : y,
                        }),
                      ],
                    }),
                    (0, a.jsxs)(c, {
                      className: "".concat(
                        m && "active",
                        "  cstmMenu lg:flex items-center justify-end lg:w-full ps-lg-4 gap-2 relative"
                      ),
                      children: [
                        (0, a.jsxs)("div", {
                          className: "relative",
                          children: [
                            (0, a.jsx)("span", {
                              className:
                                "fame absolute lg:block hidden bottom-[-13px] transform translate-y-[50%]",
                              children: g,
                            }),
                            (0, a.jsxs)("ul", {
                              className:
                                "linksWrpp left-0 right-0 menuList list-none pl-0 mb-0 items-center flex  justify-end gap-4 lg:px-3",
                              children: [
                                (0, a.jsx)("li", {
                                  className: "",
                                  children: (0, a.jsxs)(l(), {
                                    onClick: () => v(!m),
                                    href: "/#community",
                                    className:
                                      "text-[15px] cstmLink whitespace-nowrap font-semibold transition duration-[400ms] hover:text-[17px] hover:text-[#26fa0f] relative px-2 flex items-center justify-center group",
                                    children: [(0, a.jsx)(p, {}), "Community"],
                                  }),
                                }),
                                (0, a.jsx)("li", {
                                  className: "",
                                  children: (0, a.jsxs)(l(), {
                                    onClick: () => v(!m),
                                    href: "/#story",
                                    className:
                                      "text-[15px] cstmLink whitespace-nowrap font-semibold transition duration-[400ms] hover:text-[17px] hover:text-[#26fa0f] relative px-2 flex items-center justify-center group",
                                    children: [(0, a.jsx)(p, {}), "Story"],
                                  }),
                                }),
                                (0, a.jsx)("li", {
                                  className: "",
                                  children: (0, a.jsxs)(l(), {
                                    onClick: () => v(!m),
                                    href: "/#roadmap",
                                    className:
                                      "text-[15px] cstmLink whitespace-nowrap font-semibold transition duration-[400ms] hover:text-[17px] hover:text-[#26fa0f] relative px-2 flex items-center justify-center group",
                                    children: [(0, a.jsx)(p, {}), "Roadmap"],
                                  }),
                                }),
                                (0, a.jsx)("li", {
                                  className: "",
                                  children: (0, a.jsxs)(l(), {
                                    onClick: () => v(!m),
                                    href: "/#utility",
                                    className:
                                      "text-[15px] cstmLink whitespace-nowrap font-semibold transition duration-[400ms] hover:text-[17px] hover:text-[#26fa0f] relative px-2 flex items-center justify-center group",
                                    children: [(0, a.jsx)(p, {}), "Utility"],
                                  }),
                                }),
                                (0, a.jsx)("li", {
                                  className: "",
                                  children: (0, a.jsxs)(l(), {
                                    onClick: () => v(!m),
                                    href: "/#tokenomics",
                                    className:
                                      "text-[15px] cstmLink whitespace-nowrap font-semibold transition duration-[400ms] hover:text-[17px] hover:text-[#26fa0f] relative px-2 flex items-center justify-center group",
                                    children: [(0, a.jsx)(p, {}), "Tokenomics"],
                                  }),
                                }),
                                (0, a.jsx)("li", {
                                  className: "",
                                  children: (0, a.jsxs)(l(), {
                                    onClick: () => v(!m),
                                    href: "/#howtobuy",
                                    className:
                                      "text-[15px] cstmLink whitespace-nowrap font-semibold transition duration-[400ms] hover:text-[17px] hover:text-[#26fa0f] relative px-2 flex items-center justify-center group",
                                    children: [(0, a.jsx)(p, {}), "How to buy"],
                                  }),
                                }),
                                (0, a.jsx)("li", {
                                  className: "",
                                  children: (0, a.jsxs)(l(), {
                                    onClick: () => v(!m),
                                    href: "/#faq",
                                    className:
                                      "text-[15px] cstmLink whitespace-nowrap font-semibold transition duration-[400ms] hover:text-[17px] hover:text-[#26fa0f] relative px-2 flex items-center justify-center group",
                                    children: [(0, a.jsx)(p, {}), "Faqs"],
                                  }),
                                }),
                                (0, a.jsx)("li", {
                                  className: "lg:block hidden",
                                  children: (0, a.jsxs)("div", {
                                    className:
                                      "flex items-center justify-center gap-2 pl-2 mb-1",
                                    children: [
                                      (0, a.jsx)(l(), {
                                        target: "_blank",
                                        href: "https://x.com/FuturePepeETH",
                                        className:
                                          "transition duration-[400ms] hover:text-[#26fa0f]",
                                        children: h,
                                      }),
                                      (0, a.jsx)(l(), {
                                        target: "_blank",
                                        href: "https://t.me/futurepepe_eth",
                                        className:
                                          "transition duration-[400ms] hover:text-[#26fa0f]",
                                        children: w,
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, a.jsx)("div", {
                          className: "pl-2 hidden lg:block flex-shrink-0",
                          children: (0, a.jsx)("ul", {
                            className:
                              "list-none pl-0 mb-0 flex items-center gap-2",
                            children: (0, a.jsx)("li", {
                              className: "",
                              children: (0, a.jsxs)("a", {
                                href: "https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0x85c1ddfd0203ba23a91192144c2c246ea4d4c719",
                                target: "_blank",
                                className:
                                  "nav-link themeClr flex items-center justify-center relative font-zupraxu z-[9] text-[25px] transition duration-[400ms] rounded-xl bg-transparent ",
                                children: [
                                  (0, a.jsx)("img", {
                                    src: o.Xe + "headerbuynow.png",
                                    className: "max-w-full h-[50px] w-auto",
                                    height: 1e4,
                                    width: 1e4,
                                    alt: "",
                                  }),
                                  (0, a.jsx)("span", {
                                    className:
                                      "absolute top-[50%] transform text-center translate-y-[-50%] left-0 right-0 mx-auto",
                                    children: "Buy Now",
                                  }),
                                ],
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        },
        y = (0, a.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "18",
          height: "18",
          viewBox: "0 0 18 18",
          fill: "none",
          children: [
            (0, a.jsx)("line", {
              x1: "5.5",
              y1: "2.5",
              x2: "16.5",
              y2: "2.5",
              stroke: "#26FA0F",
              strokeWidth: "3",
              strokeLinecap: "round",
            }),
            (0, a.jsx)("line", {
              x1: "3.5",
              y1: "8.5",
              x2: "16.5",
              y2: "8.5",
              stroke: "#26FA0F",
              strokeWidth: "3",
              strokeLinecap: "round",
            }),
            (0, a.jsx)("line", {
              x1: "1.5",
              y1: "14.5",
              x2: "16.5",
              y2: "14.5",
              stroke: "#26FA0F",
              strokeWidth: "3",
              strokeLinecap: "round",
            }),
          ],
        }),
        x = (0, a.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "18",
          height: "18",
          viewBox: "0 0 18 18",
          fill: "none",
          children: [
            (0, a.jsx)("line", {
              x1: "16.0333",
              y1: "3.12132",
              x2: "3.12133",
              y2: "16.0333",
              stroke: "#26FA0F",
              strokeWidth: "3",
              strokeLinecap: "round",
            }),
            (0, a.jsx)("line", {
              x1: "1.5",
              y1: "-1.5",
              x2: "19.7603",
              y2: "-1.5",
              transform:
                "matrix(0.707107 0.707107 0.707107 -0.707107 3.00009 1)",
              stroke: "#26FA0F",
              strokeWidth: "3",
              strokeLinecap: "round",
            }),
          ],
        }),
        h = (0, a.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "18",
          height: "18",
          viewBox: "0 0 26 25",
          fill: "none",
          children: (0, a.jsx)("path", {
            d: "M20.4765 0.5H24.4631L15.7533 10.6663L26 24.5H17.9767L11.6929 16.1097L4.50272 24.5H0.513348L9.82942 13.6262L0 0.5H8.22651L13.9067 8.16882L20.4765 0.5ZM19.0771 22.063H21.2864L7.02625 2.8091H4.65578L19.0771 22.063Z",
            fill: "currentColor",
          }),
        }),
        f = (0, a.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "18",
          height: "18",
          viewBox: "0 0 24 25",
          fill: "none",
          children: [
            (0, a.jsx)("g", {
              clipPath: "url(#clip0_1045_789)",
              children: (0, a.jsx)("path", {
                d: "M7.99981 12.5073C7.99592 10.2985 9.78364 8.50422 11.992 8.50038C14.2008 8.49606 15.9955 10.283 15.9998 12.4922C16.004 14.7014 14.2163 16.4953 12.0072 16.4996C9.79878 16.5039 8.00408 14.7166 7.99981 12.5073ZM5.8385 12.5117C5.84511 15.9149 8.60909 18.6676 12.0115 18.6609C15.4142 18.6544 18.1685 15.8912 18.1619 12.4879C18.1553 9.08589 15.3909 6.33156 11.9877 6.33822C8.58533 6.34483 5.83189 9.10919 5.8385 12.5117ZM16.9527 6.08547C16.9543 6.88019 17.6004 7.52369 18.3952 7.52214C19.1902 7.52055 19.8337 6.87475 19.8326 6.08003C19.831 5.28531 19.1848 4.64144 18.3897 4.64303C17.5947 4.64458 16.9512 5.29075 16.9527 6.08547ZM7.17012 22.2761C6.00022 22.2252 5.36492 22.0307 4.94155 21.8679C4.38087 21.6509 3.9808 21.3908 3.55972 20.9729C3.13944 20.5533 2.87853 20.1544 2.65962 19.5949C2.49519 19.1715 2.29728 18.537 2.24244 17.3671C2.18295 16.1022 2.16936 15.7228 2.16355 12.5186C2.15731 9.3153 2.16898 8.9358 2.2242 7.66984C2.27431 6.50074 2.46992 5.86459 2.63244 5.4416C2.84937 4.88017 3.10873 4.48085 3.52747 4.05981C3.94695 3.63874 4.34586 3.37863 4.90573 3.15972C5.32878 2.99444 5.96328 2.79808 7.13281 2.74253C8.39834 2.68263 8.77742 2.66983 11.9808 2.6636C15.1848 2.65736 15.5643 2.66866 16.8303 2.72425C17.9993 2.77516 18.6354 2.9688 19.0581 3.13249C19.6191 3.34942 20.0192 3.60803 20.4399 4.02752C20.8605 4.44705 21.1214 4.84516 21.3403 5.40625C21.5055 5.82808 21.7019 6.46338 21.7572 7.63253C21.8174 8.89806 21.831 9.27756 21.8368 12.4809C21.843 15.685 21.8314 16.0645 21.7758 17.3297C21.7249 18.4996 21.5308 19.1354 21.3676 19.5591C21.1506 20.1194 20.8913 20.5195 20.4721 20.9406C20.053 21.3601 19.6541 21.6217 19.0939 21.8406C18.6716 22.0055 18.0363 22.2022 16.8676 22.2578C15.602 22.3173 15.2229 22.3309 12.0184 22.3367C8.81511 22.343 8.43608 22.3309 7.17012 22.2761ZM7.03015 0.583098C5.75333 0.643379 4.88126 0.847847 4.11917 1.14649C3.33031 1.45403 2.66159 1.86616 1.99639 2.53413C1.33034 3.20247 0.921311 3.87236 0.616108 4.66202C0.320655 5.42603 0.120405 6.29852 0.0640147 7.57614C0.00804594 8.85611 -0.00479781 9.26434 0.00143657 12.5229C0.00767094 15.7811 0.0220147 16.1901 0.0830459 17.4705C0.144077 18.7469 0.347843 19.6186 0.646436 20.381C0.954358 21.1699 1.36611 21.8383 2.03445 22.5039C2.70242 23.1696 3.37273 23.5782 4.16276 23.8839C4.92598 24.1789 5.79879 24.3799 7.07604 24.4359C8.35597 24.4923 8.76457 24.5047 12.0223 24.4985C15.2817 24.4923 15.6903 24.4779 16.9702 24.4172C18.2471 24.3562 19.1183 24.1517 19.8812 23.8539C20.67 23.5452 21.3387 23.1342 22.004 22.4658C22.6692 21.7978 23.0783 21.1276 23.3835 20.3375C23.679 19.5743 23.88 18.7014 23.9355 17.425C23.9915 16.1442 24.0048 15.7352 23.9985 12.477C23.9923 9.21845 23.9776 8.81022 23.9169 7.53067C23.8563 6.25305 23.6517 5.38174 23.3535 4.61889C23.0452 3.83003 22.6339 3.16202 21.9659 2.49602C21.298 1.83077 20.6276 1.42094 19.8376 1.11653C19.074 0.821035 18.2015 0.61966 16.9243 0.564441C15.6444 0.507676 15.2358 0.495254 11.9768 0.501441C8.71868 0.507676 8.31008 0.521645 7.03015 0.583098Z",
                fill: "currentColor",
              }),
            }),
            (0, a.jsx)("defs", {
              children: (0, a.jsx)("clipPath", {
                id: "clip0_1045_789",
                children: (0, a.jsx)("rect", {
                  width: "24",
                  height: "24",
                  fill: "currentColor",
                  transform: "translate(0 0.5)",
                }),
              }),
            }),
          ],
        }),
        w = (0, a.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "18",
          height: "18",
          viewBox: "0 0 24 25",
          fill: "none",
          children: [
            (0, a.jsxs)("g", {
              clipPath: "url(#clip0_1045_791)",
              children: [
                (0, a.jsx)("path", {
                  d: "M12 24.5C18.6274 24.5 24 19.1274 24 12.5C24 5.87258 18.6274 0.5 12 0.5C5.37258 0.5 0 5.87258 0 12.5C0 19.1274 5.37258 24.5 12 24.5Z",
                  fill: "currentColor",
                }),
                (0, a.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M5.43191 12.3734C8.93019 10.8491 11.2627 9.84453 12.4299 9.3589C15.7627 7.97281 16.455 7.73187 16.9064 7.7239C17.0058 7.7225 17.2275 7.74687 17.3714 7.86359C17.4928 7.96203 17.5261 8.09515 17.5421 8.18843C17.558 8.28218 17.5782 8.49453 17.5622 8.66093C17.3817 10.5584 16.6003 15.163 16.2028 17.2883C16.0346 18.1878 15.7032 18.4892 15.3825 18.5188C14.686 18.583 14.1568 18.058 13.4818 17.6155C12.4257 16.9236 11.8289 16.4923 10.8038 15.8169C9.61879 15.0359 10.3871 14.607 11.0621 13.9058C11.2388 13.722 14.3091 10.9292 14.3686 10.6761C14.3761 10.6442 14.3832 10.5261 14.3128 10.4637C14.2425 10.4014 14.1389 10.423 14.0644 10.4398C13.9585 10.4637 12.2714 11.5789 9.00285 13.7853C8.52379 14.1144 8.08972 14.2742 7.70113 14.2663C7.27269 14.2569 6.44863 14.0239 5.83598 13.8247C5.08457 13.5805 4.48738 13.4511 4.53941 13.0362C4.56613 12.8202 4.86379 12.5994 5.43191 12.3734Z",
                  fill: "black",
                }),
              ],
            }),
            (0, a.jsx)("defs", {
              children: (0, a.jsx)("clipPath", {
                id: "clip0_1045_791",
                children: (0, a.jsx)("rect", {
                  width: "24",
                  height: "24",
                  fill: "currentColor",
                  transform: "translate(0 0.5)",
                }),
              }),
            }),
          ],
        }),
        b = (0, a.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "18",
          height: "18",
          viewBox: "0 0 24 25",
          fill: "none",
          children: [
            (0, a.jsx)("g", {
              clipPath: "url(#clip0_1045_794)",
              children: (0, a.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M23.755 7.70143C23.755 7.70143 23.5207 6.04712 22.7996 5.32074C21.8859 4.36535 20.8627 4.35916 20.395 4.30381C17.039 4.05931 11.9986 4.05931 11.9986 4.05931H11.9898C11.9898 4.05931 6.95156 4.05931 3.59377 4.30381C3.12427 4.36093 2.10247 4.36494 1.18916 5.32074C0.467662 6.04712 0.238237 7.70143 0.238237 7.70143C0.238237 7.70143 -0.000488281 9.64273 -0.000488281 11.588V13.4071C-0.000488281 15.3484 0.238237 17.2937 0.238237 17.2937C0.238237 17.2937 0.472537 18.948 1.18916 19.6758C2.10247 20.6311 3.30277 20.6001 3.83872 20.702C5.76011 20.8854 12.0004 20.9407 12.0004 20.9407C12.0004 20.9407 17.0452 20.9319 20.4012 20.6918C20.8707 20.6364 21.892 20.6307 22.8058 19.6749C23.5273 18.9485 23.7612 17.2924 23.7612 17.2924C23.7612 17.2924 24 15.3511 24 13.4058V11.5867C23.9951 9.64539 23.7563 7.70012 23.7563 7.70012L23.755 7.70143ZM9.51251 15.6142V8.86899L15.996 12.2529L9.51251 15.6142Z",
                fill: "currentColor",
              }),
            }),
            (0, a.jsx)("defs", {
              children: (0, a.jsx)("clipPath", {
                id: "clip0_1045_794",
                children: (0, a.jsx)("rect", {
                  width: "24",
                  height: "24",
                  fill: "currentColor",
                  transform: "translate(0 0.5)",
                }),
              }),
            }),
          ],
        }),
        g = (0, a.jsxs)("svg", {
          className: "w-full h-auto",
          width: "1294",
          height: "43",
          viewBox: "0 0 1294 43",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, a.jsx)("g", {
              filter: "url(#filter0_d_743_2038)",
              children: (0, a.jsx)("path", {
                d: "M10 32H1184L1208.49 11H1284",
                stroke: "#26FA0F",
                strokeWidth: "2",
              }),
            }),
            (0, a.jsx)("defs", {
              children: (0, a.jsxs)("filter", {
                id: "filter0_d_743_2038",
                x: "0",
                y: "0",
                width: "1294",
                height: "43",
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB",
                children: [
                  (0, a.jsx)("feFlood", {
                    floodOpacity: "0",
                    result: "BackgroundImageFix",
                  }),
                  (0, a.jsx)("feColorMatrix", {
                    in: "SourceAlpha",
                    type: "matrix",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    result: "hardAlpha",
                  }),
                  (0, a.jsx)("feOffset", {}),
                  (0, a.jsx)("feGaussianBlur", { stdDeviation: "5" }),
                  (0, a.jsx)("feComposite", {
                    in2: "hardAlpha",
                    operator: "out",
                  }),
                  (0, a.jsx)("feColorMatrix", {
                    type: "matrix",
                    values:
                      "0 0 0 0 0.14902 0 0 0 0 0.980392 0 0 0 0 0.0588235 0 0 0 1 0",
                  }),
                  (0, a.jsx)("feBlend", {
                    mode: "normal",
                    in2: "BackgroundImageFix",
                    result: "effect1_dropShadow_743_2038",
                  }),
                  (0, a.jsx)("feBlend", {
                    mode: "normal",
                    in: "SourceGraphic",
                    in2: "effect1_dropShadow_743_2038",
                    result: "shape",
                  }),
                ],
              }),
            }),
          ],
        }),
        C = (0, a.jsx)("svg", {
          width: "18",
          height: "18",
          viewBox: "0 0 36 28",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, a.jsx)("path", {
            d: "M30.1483 2.34499C27.8827 1.2495 25.4602 0.45334 22.9276 0C22.6165 0.581166 22.2531 1.36285 22.0026 1.98467C19.3103 1.56624 16.6428 1.56624 14 1.98467C13.7495 1.36285 13.3779 0.581166 13.0641 0C10.5287 0.45334 8.10339 1.25243 5.83778 2.35079C1.26802 9.48737 0.0292337 16.4467 0.648628 23.3072C3.67953 25.6463 6.61685 27.0673 9.50459 27.9971C10.2176 26.983 10.8535 25.905 11.4013 24.7688C10.358 24.3591 9.35869 23.8535 8.41448 23.2665C8.66498 23.0747 8.91 22.8742 9.14672 22.6679C14.9057 25.4517 21.163 25.4517 26.8532 22.6679C27.0927 22.8742 27.3376 23.0747 27.5854 23.2665C26.6384 23.8564 25.6364 24.362 24.5931 24.7717C25.1409 25.905 25.774 26.9859 26.4898 28C29.3803 27.0702 32.3203 25.6493 35.3512 23.3072C36.078 15.3541 34.1097 8.45872 30.1483 2.34499ZM12.1859 19.088C10.4571 19.088 9.03935 17.4201 9.03935 15.389C9.03935 13.3578 10.4268 11.687 12.1859 11.687C13.945 11.687 15.3627 13.3549 15.3324 15.389C15.3351 17.4201 13.945 19.088 12.1859 19.088ZM23.814 19.088C22.0852 19.088 20.6675 17.4201 20.6675 15.389C20.6675 13.3578 22.0549 11.687 23.814 11.687C25.5731 11.687 26.9908 13.3549 26.9605 15.389C26.9605 17.4201 25.5731 19.088 23.814 19.088Z",
            fill: "currentColor",
          }),
        });
    },
    50906: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => s });
      var a = n(95155),
        i = n(74681);
      n(66766), n(12115);
      let s = () =>
        (0, a.jsx)(a.Fragment, {
          children: (0, a.jsxs)("div", {
            className:
              "fixed  top-0 left-0 h-full w-full z-[9999999] min-h-screen flex items-center justify-center",
            children: [
              (0, a.jsx)("img", {
                src: i.Xe + "commonBg.png",
                alt: "",
                height: 1e4,
                width: 1e4,
                className:
                  "max-w-full h-full top-0 left-0 z-[-9] object-cover w-full",
              }),
              (0, a.jsx)("img", {
                src: i.Xe + "loading.webp",
                alt: "",
                height: 1e4,
                width: 1e4,
                className:
                  "max-w-full h-[500px] absolute top-[50%] z-[99] right-0 mx-auto transform translate-y-[-50%] left-0 z-[-9] object-contain w-full",
              }),
            ],
          }),
        });
    },
    67234: (e) => {
      "use strict";
      e.exports = JSON.parse(
        '[{"inputs":[{"internalType":"address","name":"_usdt","type":"address"},{"internalType":"address","name":"_priceFeed","type":"address"},{"internalType":"address","name":"_adminWallet","type":"address"},{"internalType":"uint256","name":"_startTime","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"target","type":"address"}],"name":"AddressEmptyCode","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"AddressInsufficientBalance","type":"error"},{"inputs":[],"name":"FailedInnerCall","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"SafeERC20FailedOperation","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"influencer","type":"address"},{"indexed":false,"internalType":"uint256","name":"commission","type":"uint256"}],"name":"CommissionSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"useFixedPrice","type":"bool"},{"indexed":false,"internalType":"uint256","name":"priceUSD","type":"uint256"}],"name":"FixedPriceUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"NativeWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"stage","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_time","type":"uint256"}],"name":"StageTimeUpdate","type":"event"},{"anonymous":false,"inputs":[],"name":"ToggleSale","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"TokenWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenAmount","type":"uint256"}],"name":"TokensBoughtWithCard","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"usdAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokenAmount","type":"uint256"}],"name":"TokensPurchased","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"ethAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokenAmount","type":"uint256"}],"name":"TokensPurchasedWithNative","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newWhiteList","type":"address"}],"name":"WhiteListUpdated","type":"event"},{"inputs":[],"name":"FINAL_PRICE_USD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"INITIAL_PRICE_USD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"INTERVAL","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TOTAL_STAGES","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"adminWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allUniqueUsers","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"baseAmount","type":"uint256"},{"internalType":"uint256","name":"usdAmount","type":"uint256"}],"name":"applyBonuses","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"_usdtAmount","type":"uint256"},{"internalType":"uint256","name":"_tokenAmount","type":"uint256"}],"name":"buyWithCardWithUSDT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"referrer","type":"address"}],"name":"buyWithNative","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"usdtAmount","type":"uint256"},{"internalType":"address","name":"referrer","type":"address"}],"name":"buyWithUSDT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"commissionCollect","outputs":[{"internalType":"uint256","name":"purchaseCount","type":"uint256"},{"internalType":"uint256","name":"totalSellInUSD","type":"uint256"},{"internalType":"uint256","name":"commissionUSD","type":"uint256"},{"internalType":"uint256","name":"totalTokenSale","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"commissions","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"","type":"uint8"}],"name":"customStageStartTimes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ethRaised","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fixedPriceUSD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllInfluencersWithCommission","outputs":[{"internalType":"address[]","name":"influencerList","type":"address[]"},{"internalType":"uint256[]","name":"sellCount","type":"uint256[]"},{"internalType":"uint256[]","name":"totalUSDSell","type":"uint256[]"},{"internalType":"uint256[]","name":"commissionList","type":"uint256[]"},{"internalType":"uint256[]","name":"tokenAmountList","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllStagesAndPrices","outputs":[{"internalType":"uint8[]","name":"stagesList","type":"uint8[]"},{"internalType":"uint256[]","name":"pricesETH","type":"uint256[]"},{"internalType":"uint256[]","name":"pricesUSD","type":"uint256[]"},{"internalType":"uint256[]","name":"startTimes","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentStageAndPrice","outputs":[{"internalType":"uint8","name":"stage","type":"uint8"},{"internalType":"uint256","name":"priceETH","type":"uint256"},{"internalType":"uint256","name":"priceUSD","type":"uint256"},{"internalType":"uint256","name":"stageStartTime","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"usdAmount","type":"uint256"}],"name":"getEthValue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getInfluencerByIndex","outputs":[{"internalType":"address","name":"influencer","type":"address"},{"internalType":"uint256","name":"sellCount","type":"uint256"},{"internalType":"uint256","name":"totalUSDSell","type":"uint256"},{"internalType":"uint256","name":"commissionAmount","type":"uint256"},{"internalType":"uint256","name":"tokenAmount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLatestPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_ethAmount","type":"uint256"}],"name":"getTokenFromNative","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_usdtAmount","type":"uint256"}],"name":"getTokenFromUsdt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"ethAmount","type":"uint256"}],"name":"getUSDValue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserTxData","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"influencers","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isReferral","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxCommissionPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"stage","type":"uint8"},{"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"setCustomStageStartTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_influencers","type":"address[]"},{"internalType":"uint256[]","name":"_commissions","type":"uint256[]"}],"name":"setInfluencerCommission","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxCommissionPercent","type":"uint256"}],"name":"setMaxCommissionPercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_useFixedPrice","type":"bool"},{"internalType":"uint256","name":"_priceUSD","type":"uint256"}],"name":"setUseFixedPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"toggleSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalInfluence","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalTokenCap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalTokenSold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalUsdtRaised","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newTotalTokenCap","type":"uint256"}],"name":"updateTotalTokenCap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"usdt","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"usdtRaised","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"useFixedPrice","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userDeposits","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whiteList","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_whiteList","type":"address"}],"name":"whitelistAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawNative","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]'
      );
    },
    73776: () => {},
    74681: (e, t, n) => {
      "use strict";
      n.d(t, {
        $W: () => a,
        $b: () => u,
        Px: () => o,
        Xe: () => p,
        YQ: () => r,
        h3: () => i,
        xA: () => s,
        z8: () => l,
      });
      let a = {
          1: {
            usdt: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
            ico: "0xe5461cA2775348c003E45C5A9B8F7EfF25c702Bc",
            staking: "0x",
            rpc: "https://sparkling-light-wind.quiknode.pro/689c36c9629b3e0bc6329f33482469ad5e98bdb9",
            explorer: "https://etherscan.io",
            tokenDecimals: 6,
          },
          56: {
            usdt: "0x55d398326f99059fF775485246999027B3197955",
            ico: "0x9c3Eab0B2318e7DF8cb881446Fa1110F84CcAC3F",
            staking: "0x",
            rpc: "https://sparkling-light-wind.bsc.quiknode.pro/689c36c9629b3e0bc6329f33482469ad5e98bdb9",
            explorer: "https://bscscan.com",
            tokenDecimals: 18,
          },
          0xaa36a7: {
            usdt: "0x507E6f5Fa4A9c7B1fa1da15d1f9Ebf585c594201",
            ico: "0x6276Afd9d309046F11E83009Dc7251a5E735191D",
            staking: "0xdB75347eE8C5fE869c2FDEd87c5ce1be4e5D7F1F",
            rpc: "https://1rpc.io/sepolia",
            explorer: "https://sepolia.etherscan.io",
            tokenDecimals: 6,
          },
          97: {
            usdt: "0xE44a0A73F25D36185117473d7adEADD7D83fF5Dc",
            ico: "0x9ed5cFEA377c75a8aa3B1D714DE887cc22EaCb96",
            staking: "0x",
            rpc: "https://bsc-testnet-rpc.publicnode.com",
            explorer: "https://testnet.bscscan.com",
            tokenDecimals: 18,
          },
        },
        i = [1, 56, 0xaa36a7, 97],
        s = { 1: 56, 56: 1 },
        l = 1,
        r = "0x2F938Da4C59Ec4B5289CB93Dea634247AaCcBa20",
        o = 18,
        p = "/futurepepe-media.suffescom.dev/",
        u = {
          xyz: "0x55Fa55139FA17a04e632F85BFb38568f4193axxp",
          yzd: "0x55Fa55139FA17a04e632F85BFb38568f4193axyz",
        };
    },
    79368: () => {},
    81083: (e, t, n) => {
      "use strict";
      n.d(t, { $S: () => l, GF: () => u, Ni: () => o });
      var a = n(95155),
        i = n(87316);
      let s = () =>
          (0, a.jsx)(a.Fragment, {
            children: (0, a.jsxs)("svg", {
              width: "55",
              height: "50",
              viewBox: "0 0 55 50",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, a.jsx)("g", {
                  filter: "url(#filter0_d_62_2126)",
                  children: (0, a.jsx)("path", {
                    d: "M27.5008 10L44.3883 39.25H10.6133L27.5008 10Z",
                    fill: "#FF0000",
                  }),
                }),
                (0, a.jsx)("path", {
                  d: "M28.4353 34.7805C28.2616 34.9202 28.0589 35 27.8562 35C27.7259 35 27.0454 35 26.9006 34.9601C26.7269 34.9002 26.5242 34.8004 26.3939 34.6009C26.1622 34.3015 25.974 33.8425 26.0029 33.4235C26.0174 33.164 26.0464 32.8647 26.1477 32.6651C26.336 32.2859 26.6255 31.9666 26.9296 31.9267C27.1178 31.9068 27.8996 31.8669 28.0879 31.9267C28.3919 32.0465 28.7104 32.2859 28.8552 32.6851C28.9421 32.9245 29 33.2039 29 33.4634C28.9855 33.7228 28.9566 34.0022 28.8407 34.2217C28.7249 34.4412 28.5946 34.6408 28.4353 34.7805ZM26.8717 31.5276C26.669 31.5276 26.4807 31.5276 26.2925 31.5276C26.278 28.5541 26.2925 25.5607 26.2925 22.5672C26.2925 22.1481 26.4083 21.749 26.611 21.4696C27.335 20.4718 28.5367 21.1703 28.5367 22.5672C28.5367 25.0817 28.5367 27.5762 28.5367 30.0907C27.972 30.5697 27.4218 31.0486 26.8717 31.5276Z",
                  fill: "#183D2C",
                }),
                (0, a.jsx)("defs", {
                  children: (0, a.jsxs)("filter", {
                    id: "filter0_d_62_2126",
                    x: "0.613281",
                    y: "0",
                    width: "53.7734",
                    height: "49.25",
                    filterUnits: "userSpaceOnUse",
                    "color-interpolation-filters": "sRGB",
                    children: [
                      (0, a.jsx)("feFlood", {
                        "flood-opacity": "0",
                        result: "BackgroundImageFix",
                      }),
                      (0, a.jsx)("feColorMatrix", {
                        in: "SourceAlpha",
                        type: "matrix",
                        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                        result: "hardAlpha",
                      }),
                      (0, a.jsx)("feOffset", {}),
                      (0, a.jsx)("feGaussianBlur", { stdDeviation: "5" }),
                      (0, a.jsx)("feColorMatrix", {
                        type: "matrix",
                        values:
                          "0 0 0 0 0.980392 0 0 0 0 0.0588235 0 0 0 0 0.0588235 0 0 0 1 0",
                      }),
                      (0, a.jsx)("feBlend", {
                        mode: "normal",
                        in2: "BackgroundImageFix",
                        result: "effect1_dropShadow_62_2126",
                      }),
                      (0, a.jsx)("feBlend", {
                        mode: "normal",
                        in: "SourceGraphic",
                        in2: "effect1_dropShadow_62_2126",
                        result: "shape",
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        l = (e) => {
          i.oR.info(e, {
            icon: (0, a.jsx)(s, {}),
            style: {
              background: "#000",
              color: "#fff",
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              borderTopRightRadius: 0,
              border: "1px solid #26fa0f",
            },
          });
        },
        r = () =>
          (0, a.jsx)(a.Fragment, {
            children: (0, a.jsx)("svg", {
              width: "30",
              height: "30",
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, a.jsx)("path", {
                d: "M10 15C10.2833 15 10.521 14.904 10.713 14.712C10.905 14.52 11.0007 14.2827 11 14C10.9993 13.7173 10.9033 13.48 10.712 13.288C10.5207 13.096 10.2833 13 10 13C9.71667 13 9.47933 13.096 9.288 13.288C9.09667 13.48 9.00067 13.7173 9 14C8.99933 14.2827 9.09533 14.5203 9.288 14.713C9.48067 14.9057 9.718 15.0013 10 15ZM9 11H11V5H9V11ZM10 20C8.61667 20 7.31667 19.7373 6.1 19.212C4.88334 18.6867 3.825 17.9743 2.925 17.075C2.025 16.1757 1.31267 15.1173 0.788001 13.9C0.263335 12.6827 0.000667932 11.3827 1.26582e-06 10C-0.000665401 8.61733 0.262001 7.31733 0.788001 6.1C1.314 4.88267 2.02633 3.82433 2.925 2.925C3.82367 2.02567 4.882 1.31333 6.1 0.788C7.318 0.262667 8.618 0 10 0C11.382 0 12.682 0.262667 13.9 0.788C15.118 1.31333 16.1763 2.02567 17.075 2.925C17.9737 3.82433 18.6863 4.88267 19.213 6.1C19.7397 7.31733 20.002 8.61733 20 10C19.998 11.3827 19.7353 12.6827 19.212 13.9C18.6887 15.1173 17.9763 16.1757 17.075 17.075C16.1737 17.9743 15.1153 18.687 13.9 19.213C12.6847 19.739 11.3847 20.0013 10 20Z",
                fill: "#ED0000",
              }),
            }),
          }),
        o = (e) => {
          i.oR.error(e, {
            icon: (0, a.jsx)(r, {}),
            style: {
              background: "#000",
              color: "#fff",
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              borderTopRightRadius: 0,
              border: "1px solid #26fa0f",
            },
          });
        },
        p = () =>
          (0, a.jsx)(a.Fragment, {
            children: (0, a.jsx)("svg", {
              width: "30",
              height: "30",
              viewBox: "0 0 16 16",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, a.jsx)("path", {
                d: "M8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8C15 9.85652 14.2625 11.637 12.9497 12.9497C11.637 14.2625 9.85652 15 8 15C6.14348 15 4.36301 14.2625 3.05025 12.9497C1.7375 11.637 1 9.85652 1 8C1 6.14348 1.7375 4.36301 3.05025 3.05025C4.36301 1.7375 6.14348 1 8 1ZM7.128 9.381L5.573 7.825C5.51725 7.76925 5.45107 7.72503 5.37824 7.69486C5.3054 7.66469 5.22734 7.64917 5.1485 7.64917C5.06966 7.64917 4.9916 7.66469 4.91876 7.69486C4.84593 7.72503 4.77975 7.76925 4.724 7.825C4.61142 7.93758 4.54817 8.09028 4.54817 8.2495C4.54817 8.40872 4.61142 8.56142 4.724 8.674L6.704 10.654C6.75959 10.71 6.82572 10.7545 6.89857 10.7848C6.97143 10.8152 7.04957 10.8308 7.1285 10.8308C7.20743 10.8308 7.28557 10.8152 7.35843 10.7848C7.43128 10.7545 7.49741 10.71 7.553 10.654L11.653 6.553C11.7095 6.49748 11.7544 6.43133 11.7852 6.35836C11.816 6.28539 11.8321 6.20705 11.8324 6.12785C11.8328 6.04864 11.8175 5.97015 11.7874 5.8969C11.7573 5.82365 11.7129 5.75708 11.657 5.70104C11.601 5.645 11.5345 5.6006 11.4613 5.5704C11.388 5.54019 11.3096 5.52478 11.2304 5.52506C11.1512 5.52533 11.0728 5.54129 10.9998 5.572C10.9268 5.60271 10.8606 5.64757 10.805 5.704L7.128 9.381Z",
                fill: "#26FA0F",
              }),
            }),
          }),
        u = (e) => {
          i.oR.success(e, {
            icon: (0, a.jsx)(p, {}),
            style: {
              background: "#000",
              color: "#fff",
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              borderTopRightRadius: 0,
              border: "1px solid #26fa0f",
            },
          });
        };
    },
    90207: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => l });
      var a = n(95155);
      n(12115);
      var i = n(74681);
      let s = () =>
          (0, a.jsx)("img", {
            src: i.Xe + "loader.gif",
            alt: "",
            className: "max-w-full object-contain w-auto",
            height: 20,
            width: 20,
            style: { height: 20 },
          }),
        l = (e) => {
          let { label: t, onClick: n, load: i = !1 } = e;
          return (0, a.jsx)("button", {
            onClick: n,
            disabled: i,
            className:
              "absolute top-0 text-black text-[16px] font-semibold left-0 w-full h-full flex items-center justify-center text-center",
            children: (0, a.jsx)("span", {
              children: i ? (0, a.jsx)(s, {}) : t,
            }),
          });
        };
    },
    93845: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => y });
      var a = n(95155),
        i = n(12115),
        s = n(93482),
        l = n(19562),
        r = n(96529),
        o = n(51368),
        p = n(74681),
        u = n(90207),
        d = n(18224),
        c = n(81083),
        m = n(64575);
      let y = (e) => {
        let { wallet: t, amount: n, tokenAmount: y, usd: x } = e,
          h = (0, d.i)(),
          [f, w] = (0, i.useState)(!0),
          { open: b } = (0, m.JS)(),
          g = async () => {
            await b();
          };
        (0, i.useEffect)(() => {
          (0, r.SQ)(Number("1")).then((e) => w(e));
        }, ["1"]);
        let [C] = (0, i.useState)({
            listeners: { loaded: () => console.log("Wert widget loaded") },
          }),
          { open: v } = (0, l.C)(C);
        console.log(n, "+>>>>>>>>>>>>>>>>>>>>", y);
        let j = () => {
          if (h != p.z8) return (0, c.$S)("Switch your newtwork to ethereum");
          if (1 >= Number(x))
            return (0, c.$S)("Amount must be greater than 1 usd");
          if (!f) return (0, c.$S)("Sale is not active!");
          if (!t) return g();
          let e = {
              address: t,
              commodity: "USDT",
              commodity_amount: n,
              network: "ethereum",
              sc_address: p.$W["1"].ico,
              sc_input_data: (0, r.Z6)(n, y, t),
            },
            a = (0, s.signSmartContractData)(
              e,
              "0x3a6af64b50f1506fcdd4b55fef0de847ac31588f5a2c154c480bd1837e328623"
            );
          v({
            options: {
              partner_id: "01JS1SW8ZE4D1WETVWMFM793DY",
              origin: "https://widget.wert.io",
              click_id: (0, o.A)(),
              ...a,
              extra: {
                item_info: {
                  author: "Future Pepe",
                  author_image_url: p.Xe + "logo.png",
                  image_url: p.Xe + "logo.png",
                  name: "Future Pepe",
                },
              },
            },
          });
        };
        return (0, a.jsxs)("div", {
          className: "relative flex items-center justify-center relative",
          children: [
            (0, a.jsx)("img", {
              src: p.Xe + "pannelbtn-bg.png",
              alt: "",
              height: 1e4,
              width: 1e4,
              className: "max-w-full h-[50px] w-auto object-contain",
            }),
            (0, a.jsx)(u.A, { label: "Buy With CARD", onClick: () => j() }),
          ],
        });
      };
    },
    96529: (e, t, n) => {
      "use strict";
      n.d(t, {
        SR: () => c,
        Hs: () => w,
        Z6: () => m,
        Tx: () => y,
        gb: () => f,
        SQ: () => b,
        c9: () => x,
        yS: () => h,
        oI: () => C,
        hC: () => g,
      });
      var a = n(26872),
        i = n(73888),
        s = n(62741),
        l = n(54332),
        r = n(38658);
      let o = JSON.parse(
        '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"allowance","type":"uint256"},{"internalType":"uint256","name":"needed","type":"uint256"}],"name":"ERC20InsufficientAllowance","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"needed","type":"uint256"}],"name":"ERC20InsufficientBalance","type":"error"},{"inputs":[{"internalType":"address","name":"approver","type":"address"}],"name":"ERC20InvalidApprover","type":"error"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"}],"name":"ERC20InvalidReceiver","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"}],"name":"ERC20InvalidSender","type":"error"},{"inputs":[{"internalType":"address","name":"spender","type":"address"}],"name":"ERC20InvalidSpender","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]'
      );
      var p = n(67234);
      n(25634);
      var u = n(23464),
        d = n(74681);
      let c = async (e, t, n, i, s) => {
          let l = BigInt((0, r.Uj)(i, s)),
            p = new a.NZ(e, o, t),
            u = await p.allowance(t.address, n);
          if (!(u < l)) return null;
          {
            let e = 100000n;
            0 == Number(u) && (e = await p.approve.estimateGas(n, l));
            let t = (110n * e) / 100n;
            return await p.approve(n, l, { gasLimit: t });
          }
        },
        m = (e, t, n) => {
          if (!e && !t && !n) return "0x";
          let a = new i.KA([
              "function buyWithCardWithUSDT(address _user, uint256 _usdtAmount, uint256 _tokenAmount)",
            ]),
            l = (0, s.XS)(e.toString(), 6),
            r = (0, s.XS)(t.toString(), 18);
          return a.encodeFunctionData("buyWithCardWithUSDT", [n, l, r]);
        },
        y = async (e, t) => {
          if (!(0, r.Tn)(e)) return 0;
          try {
            var n;
            let i = BigInt((0, r.Uj)(t, 18)),
              s = new a.NZ(d.$W[e].ico, p, new l.FR(d.$W[e].rpc)),
              o = await s.getTokenFromNative(i);
            return null == (n = Number((0, r.J1)(o, 18)))
              ? void 0
              : n.toFixed(2);
          } catch (e) {
            return 0;
          }
        },
        x = async (e, t) => {
          if (!(0, r.Tn)(e)) return 0;
          try {
            var n;
            let i = BigInt((0, r.Uj)(t, d.$W[e].tokenDecimals)),
              s = new a.NZ(d.$W[e].ico, p, new l.FR(d.$W[e].rpc)),
              o = await s.getTokenFromUsdt(i);
            return null == (n = Number((0, r.J1)(o, 18)))
              ? void 0
              : n.toFixed(2);
          } catch (e) {
            return 0;
          }
        },
        h = async (e, t) => {
          if (!(0, r.Tn)(e)) return null;
          try {
            var n;
            let i = new l.FR(d.$W[e].rpc),
              s = new a.NZ(d.$W[e].ico, p, i),
              u = await s.getUserTxData(t),
              c = await i.getBalance(t),
              m = new a.NZ(d.$W[e].usdt, o, i),
              y = await m.balanceOf(t);
            return {
              purchased:
                null == (n = Number((0, r.J1)(u, 18))) ? void 0 : n.toFixed(2),
              nativeBalance: (0, r.J1)(c, 18),
              erc20Balance: (0, r.J1)(y, d.$W[e].tokenDecimals),
            };
          } catch (e) {
            return { purchased: 0, nativeBalance: 0, erc20Balance: 0 };
          }
        },
        f = async (e) => {
          if (!(0, r.Tn)(e)) return 0;
          try {
            let t = new a.NZ(d.$W[e].ico, p, new l.FR(d.$W[e].rpc)),
              n = new a.NZ(d.$W[1].ico, p, new l.FR(d.$W[1].rpc)),
              i = new a.NZ(d.$W[d.xA[e]].ico, p, new l.FR(d.$W[d.xA[e]].rpc)),
              s = await t.totalTokenSold(),
              o = await t.getCurrentStageAndPrice();
            await n.getCurrentStageAndPrice();
            let u = await t.totalTokenCap(),
              c = await t.totalUsdtRaised(),
              m = await i.totalTokenSold(),
              y = await i.totalUsdtRaised(),
              x = await i.totalTokenCap(),
              h =
                Number((0, r.J1)(c, d.$W[e].tokenDecimals)) +
                Number((0, r.J1)(y, d.$W[d.xA[e]].tokenDecimals));
            (u = (0, r.J1)(u, 18)),
              (x = (0, r.J1)(x, 18)),
              (s = s.toString()),
              (m = m.toString());
            let f = (Number((0, r.J1)(s, 18)) / Number(u)) * 100,
              w = (Number((0, r.J1)(m, 18)) / Number(x)) * 100,
              b = Math.ceil(f) + Math.ceil(w);
            return {
              priceInUsd: (0, r.J1)(o[2], d.$W[e].tokenDecimals),
              priceInEth: (0, r.J1)(o[1], 18),
              totalRaised: (0, r.J1)(s, 18),
              maxCap: u,
              usdtRaised: null == h ? void 0 : h.toFixed(2),
              percentage: b.toString() + "%",
              stageStartTime: 1750047976e3,
              stageEndTime: 1750825576e3,
            };
          } catch (e) {
            return (
              console.log(e),
              {
                priceInUsd: 0,
                priceInEth: 0,
                totalRaised: 0,
                maxCap: 75e6,
                percentage: "40%",
                stageStartTime: Date.now(),
                stageEndTime: 0,
                usdtRaised: 0,
              }
            );
          }
        },
        w = async (e) => {
          try {
            return (
              await u.A.post(
                "https://widget.wert.io/api/v3/partners/convert",
                { from: "USD", network: "ethereum", to: "USDT", amount: e },
                {
                  headers: {
                    "Content-Type": "application/json",
                    "X-Partner-ID": "01JS1SW8ZE4D1WETVWMFM793DY",
                  },
                }
              )
            ).data;
          } catch (e) {
            return null;
          }
        },
        b = async (e) => {
          try {
            if (!(0, r.Tn)(e)) return 0;
            let t = new a.NZ(d.$W[e].ico, p, new l.FR(d.$W[e].rpc));
            return await t.isActive();
          } catch (e) {
            console.log(e, "error in fetching sale active status");
          }
        },
        g = async (e, t) => {
          try {
            if (!(0, r.Tn)(e)) return 0;
            let n = new l.FR(d.$W[e].rpc),
              a = await n.getBalance(t);
            return (0, r.J1)(a, 18);
          } catch (e) {
            console.log("Error in fetching user's native balance");
          }
        },
        C = async (e, t, n) => {
          try {
            if (!(0, r.Tn)(e)) return 0;
            let i = new a.NZ(t, o, new l.FR(d.$W[e].rpc)),
              s = await i.balanceOf(n),
              p = await i.decimals();
            return (0, r.J1)(s, parseInt(p));
          } catch (e) {
            console.log("Error in fetching user's erc20 balance");
          }
        };
    },
    98092: (e, t, n) => {
      "use strict";
      n.d(t, { N: () => l });
      var a = n(1973),
        i = n(12115),
        s = n(12325);
      function l() {
        let { chainId: e } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { data: t } = (0, s.Q)({ chainId: e });
        return (0, i.useMemo)(
          () =>
            t
              ? (function (e) {
                  var t, n;
                  let { account: i, chain: s, transport: l } = e,
                    r = {
                      chainId: s.id,
                      name: s.name,
                      ensAddress:
                        null == (n = s.contracts) || null == (t = n.ensRegistry)
                          ? void 0
                          : t.address,
                    };
                  return new a.k(l, r.chainId).getSigner(i.address);
                })(t)
              : void 0,
          [t]
        );
      }
    },
  },
]);
