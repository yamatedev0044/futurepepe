(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7177],
  {
    9442: (e, t, o) => {
      "use strict";
      o.d(t, { default: () => x });
      var n = o(95155),
        r = o(56817),
        s = o(57394),
        i = o(72975),
        a = o(93151);
      let c = "9ffc365e11c9299ee196e12cf81c523f";
      if (!c) throw Error("Project ID is not defined");
      let l = [a.rCZ, a.NBY],
        d = new i.D({
          storage: (0, r.wE)({ storage: s.iM }),
          ssr: !0,
          projectId: c,
          networks: l,
        });
      d.wagmiConfig;
      var p = o(87017),
        h = o(26715),
        b = o(64575);
      o(12115);
      var f = o(48374);
      let u = new p.E();
      (0, b.sX)({
        adapters: [d],
        projectId: c,
        networks: l,
        metadata: {
          name: "next-reown-appkit",
          description: "next-reown-appkit",
          url: "https://github.com/0xonerb/next-reown-appkit-ssr",
          icons: ["https://avatars.githubusercontent.com/u/179229932"],
          robots: { index: !0, follow: !0 },
        },
        themeMode: "light",
        features: { analytics: !0, email: !1, socials: !1 },
        coinbasePreference: "all",
        themeVariables: { "--w3m-accent": "#000000" },
      });
      let x = function (e) {
        let { children: t, cookies: o } = e,
          r = (0, s.T2)(d.wagmiConfig, o);
        return (0, n.jsx)(f.x, {
          config: d.wagmiConfig,
          initialState: r,
          children: (0, n.jsx)(h.Ht, { client: u, children: t }),
        });
      };
    },
    32379: (e, t, o) => {
      "use strict";
      o.d(t, { ThemeProvider: () => i });
      var n = o(95155),
        r = o(12115);
      let s = (0, r.createContext)(),
        i = (e) => {
          let { children: t } = e,
            [o, i] = (0, r.useState)(localStorage.getItem("theme") || "dark"),
            a = {
              light: {
                backgroundColor: "#fff",
                backgroundColor2: "#f3f3f3",
                textColor: "#000000",
              },
              dark: {
                backgroundColor: "#000",
                backgroundColor2: "#131313",
                textColor: "#fff",
              },
            };
          return (
            (0, r.useEffect)(() => {
              let e = document.documentElement;
              Object.entries(a[o]).forEach((t) => {
                let [o, n] = t;
                e.style.setProperty("--".concat(o), n);
              });
            }, [o]),
            (0, n.jsx)(s.Provider, {
              value: {
                theme: o,
                toggleTheme: () => {
                  let e = "light" === o ? "dark" : "light";
                  i(e), localStorage.setItem("theme", e);
                },
              },
              children: t,
            })
          );
        };
    },
    38901: (e, t, o) => {
      "use strict";
      o.d(t, { default: () => p });
      var n = o(95155),
        r = o(12115),
        s = o(15443),
        i = o(18224),
        a = o(74681),
        c = o(59694);
      let l = { ETH: a.Xe + "ETH.png", BNB: a.Xe + "bnb.png" },
        d = c.Ay.div.withConfig({ componentId: "sc-64110a34-0" })([
          ".outside{-webkit-clip-path:polygon( 90.12% 100%,100% 64.46%,100% 0%,70.71% 0%,12.42% 0%,0% 29.29%,0% 100%,29.29% 100% );clip-path:polygon( 90.12% 100%,100% 64.46%,100% 0%,70.71% 0%,12.42% 0%,0% 29.29%,0% 100%,29.29% 100% );.inside{position:absolute;top:1.5px;left:1.5px;right:1.5px;bottom:1.5px;background-color:#072902e3;color:#26fa0f !important;-webkit-clip-path:polygon( 90.12% 100%,100% 64.46%,100% 0%,70.71% 0%,12.42% 0%,0% 29.29%,0% 100%,29.29% 100% );clip-path:polygon( 90.12% 100%,100% 64.46%,100% 0%,70.71% 0%,12.42% 0%,0% 29.29%,0% 100%,29.29% 100% );}}",
        ]),
        p = function () {
          let { chains: e, switchChain: t } = (0, s.R)(),
            o = (0, i.i)(),
            [a, c] = (0, r.useState)(1 == o ? "ETH" : "BNB"),
            p = (e) => {
              var o;
              t({ chainId: null == e ? void 0 : e.id }),
                c(
                  null == e || null == (o = e.nativeCurrency)
                    ? void 0
                    : o.symbol
                );
            };
          return (0, n.jsx)(n.Fragment, {
            children: (0, n.jsxs)(d, {
              className:
                "dropdown dropdown-top dropdown-end fixed right-[10px] bottom-[10px] z-[999999]",
              children: [
                (0, n.jsx)("div", {
                  tabIndex: 0,
                  role: "button",
                  className: "outside w-[90px] relative h-[40px] bg-[#26fa0f]",
                  children: (0, n.jsxs)("div", {
                    className:
                      "flex items-center gap-2 inside relative bg-black text-[#26fa0f] border-2 border-black cursor-pointer overflow-hidden font-[Zupraxu] flex items-center justify-center leading-tight",
                    children: [
                      (0, n.jsx)("img", {
                        src: l[a],
                        height: 1e4,
                        width: 1e4,
                        alt: "",
                        className:
                          "max-w-full h-[20px] w-[20px] object-contain rounded-full",
                      }),
                      a,
                    ],
                  }),
                }),
              ],
            }),
          });
        };
    },
    44131: (e, t, o) => {
      "use strict";
      o.d(t, { default: () => i });
      var n = o(95155),
        r = o(87316);
      let s = (e) => {
        let { closeToast: t } = e;
        return (0, n.jsx)("button", {
          onClick: t,
          className: "Toastify__close-button Toastify__close-button--light",
          style: {
            background: "transparent",
            border: "none",
            cursor: "pointer",
          },
          "aria-label": "close",
          children: (0, n.jsx)("svg", {
            width: "10",
            height: "10",
            viewBox: "0 0 10 10",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, n.jsx)("path", {
              opacity: "0.8",
              d: "M5.73001 4.3334L9 1.00003M1.151 9L4.422 5.6666M5.578 5.6667L8.849 9M1 1L4.26999 4.3333",
              stroke: "#26FA0F",
            }),
          }),
        });
      };
      function i() {
        return (0, n.jsx)(r.N9, {
          autoClose: 8e3,
          closeButton: (e) => (0, n.jsx)(s, { ...e }),
          position: "top-right",
          hideProgressBar: !1,
          newestOnTop: !0,
          closeOnClick: !0,
          pauseOnFocusLoss: !0,
          draggable: !0,
          pauseOnHover: !0,
        });
      }
    },
    63770: (e, t, o) => {
      Promise.resolve().then(o.bind(o, 26259)),
        Promise.resolve().then(o.bind(o, 96063)),
        Promise.resolve().then(o.bind(o, 58930)),
        Promise.resolve().then(o.t.bind(o, 69243, 23)),
        Promise.resolve().then(o.t.bind(o, 66298, 23)),
        Promise.resolve().then(o.t.bind(o, 44202, 23)),
        Promise.resolve().then(o.t.bind(o, 87610, 23)),
        Promise.resolve().then(o.t.bind(o, 754, 23)),
        Promise.resolve().then(o.t.bind(o, 52816, 23)),
        Promise.resolve().then(o.bind(o, 66729)),
        Promise.resolve().then(o.bind(o, 38901)),
        Promise.resolve().then(o.bind(o, 44131)),
        Promise.resolve().then(o.bind(o, 9442)),
        Promise.resolve().then(o.bind(o, 32379));
    },
    66729: (e, t, o) => {
      "use strict";
      o.d(t, { default: () => r });
      var n = o(12115);
      function r(e) {
        let { children: t } = e;
        return (
          (0, n.useEffect)(() => {
            let e = new URLSearchParams(window.location.search).get("fbp");
            e &&
              (localStorage.setItem("fb_pixel_id", e),
              (function (e) {
                if (e) {
                  var t, o, n, r, s, i;
                  (t = window),
                    (o = document),
                    (n = "script"),
                    t.fbq ||
                      ((r = t.fbq =
                        function () {
                          r.callMethod
                            ? r.callMethod.apply(r, arguments)
                            : r.queue.push(arguments);
                        }),
                      t._fbq || (t._fbq = r),
                      (r.push = r),
                      (r.loaded = !0),
                      (r.version = "2.0"),
                      (r.queue = []),
                      ((s = o.createElement(n)).async = !0),
                      (s.src =
                        "https://connect.facebook.net/en_US/fbevents.js"),
                      (i =
                        o.getElementsByTagName(n)[0]).parentNode.insertBefore(
                        s,
                        i
                      )),
                    fbq("init", e),
                    fbq("track", "PageView"),
                    console.log("[FB Pixel] Initialized with ID:", e);
                }
              })(e));
          }, []),
          t
        );
      }
    },
    74681: (e, t, o) => {
      "use strict";
      o.d(t, {
        $W: () => n,
        $b: () => d,
        Px: () => c,
        Xe: () => l,
        YQ: () => a,
        h3: () => r,
        xA: () => s,
        z8: () => i,
      });
      let n = {
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
        r = [1, 56, 0xaa36a7, 97],
        s = { 1: 56, 56: 1 },
        i = 1,
        a = "0x2F938Da4C59Ec4B5289CB93Dea634247AaCcBa20",
        c = 18,
        l = "/futurepepe-media.suffescom.dev/",
        d = {
          xyz: "0x55Fa55139FA17a04e632F85BFb38568f4193axxp",
          yzd: "0x55Fa55139FA17a04e632F85BFb38568f4193axyz",
        };
    },
    87610: () => {},
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [9108, 4004, 7957, 2300, 6925, 8441, 1684, 7358], () => t(63770)),
      (_N_E = e.O());
  },
]);
