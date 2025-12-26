(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7426],
  {
    17426: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => y });
      var l = a(95155),
        s = a(74681);
      a(66766);
      var r = a(12115),
        i = a(59694),
        n = a(21494),
        o = a.n(n),
        x = a(22016),
        m = a.n(x),
        c = a(59968),
        d = a(23464),
        p = a(87316),
        h = a(81083);
      let u = i.Ay.div.withConfig({ componentId: "sc-ab4886b9-0" })(
          [
            ".modalDialog{background-image:url(",
            ");background-size:100% 100%;aspect-ratio:626/529;}@media (max-width:575px){.modalBody{max-height:calc(100% - 12px);overflow:scroll;padding-bottom:0 !important;.closeBtn{svg{height:18px;width:18px;}}}}",
          ],
          c
        ),
        f = i.Ay.div.withConfig({ componentId: "sc-ab4886b9-1" })([
          '&:after{position:absolute;content:"";top:-7px;left:-8px;z-index:9;height:15px;width:15px;border-bottom:1px solid #26fa0f;background:#060900;transform:rotate(-49deg);}&:before{position:absolute;content:"";bottom:-7px;right:-8px;z-index:9;height:15px;width:15px;border-top:1px solid #26fa0f;background:#060900;transform:rotate(-49deg);}',
        ]),
        g = (e) => {
          let { joinAffilate: t, setJoinAffilate: a } = e,
            [s, i] = (0, r.useState)(1),
            [n, x] = (0, r.useState)(""),
            [c, g] = (0, r.useState)("");
          (0, r.useEffect)(() => {
            let e;
            return (
              2 === s &&
                (e = setTimeout(() => {
                  a(!1);
                }, 5e3)),
              () => clearTimeout(e)
            );
          }, [s]);
          let j = async (e) => {
            if ((e.preventDefault(), !n))
              return p.oR.warn("Wallet is required!");
            if (!c) return p.oR.warn("Telegram handle is required!");
            if (!/^0x[a-fA-F0-9]{40}$/.test(n))
              return p.oR.warn(
                "Invalid wallet address. Must be a valid Ethereum address."
              );
            if (!/^@[a-zA-Z0-9_]{5,}$/.test(c))
              return p.oR.warn(
                "Invalid Telegram handle. Must start with @ and be at least 5 characters."
              );
            try {
              let e = await d.A.post("/api/join-affiliate", {
                wallet: n,
                telegramId: c,
              });
              200 === e.status && i(2);
            } catch (e) {
              var t, a;
              (0, h.$S)(
                null == e || null == (a = e.response) || null == (t = a.data)
                  ? void 0
                  : t.message
              ),
                console.error("Error submitting form:", e);
            }
          };
          return (0, l.jsx)(l.Fragment, {
            children: (0, l.jsxs)(u, {
              className: ""
                .concat(o().className, " ")
                .concat(
                  m().variable,
                  "  fixed  inset-0 flex items-center justify-center cstmModal z-[9999]"
                ),
              children: [
                (0, l.jsx)("div", {
                  className:
                    "absolute inset-0 bg-black opacity-90 backdrop-blur",
                }),
                (0, l.jsxs)("div", {
                  className:
                    " modalDialog p-3 top-0 w-full bg-transparent  z-10 mx-auto max-w-[690px] duration-[400ms] relative overflow-hidden ",
                  children: [
                    (0, l.jsx)("button", {
                      onClick: () => {
                        a(!t);
                      },
                      className:
                        "closeBtn absolute border-0 p-0 md:top-[20px] md:right-[30px] top-[15px] right-[15px]",
                      children: b,
                    }),
                    (0, l.jsx)("div", {
                      className:
                        "modalBody p-5 md:border-0 border-tl-[20px] border-br-[20px] h-full",
                      children:
                        1 == s
                          ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                (0, l.jsxs)("div", {
                                  className: "top text-center  pb-3 md:pt-8 ",
                                  children: [
                                    (0, l.jsxs)("div", {
                                      className:
                                        "headingCommon d-block mx-auto themeClr relative md:leading-relaxed leading-normal pb-2",
                                      children: [
                                        (0, l.jsx)("h2", {
                                          className:
                                            "headingFront uppercase relative z-[9] top-[-1px] m-0 md:text-[36px] text-[20px] font-zupraxu ",
                                          children: "Join the Affiliate Army",
                                        }),
                                        (0, l.jsx)("h2", {
                                          className:
                                            "headingBack w-full uppercase absolute md:top-[3px] top-[0] left-0 z-[1] text-transparent md:text-[36px] text-[20px] m-0 font-zupraxu",
                                          style: {
                                            WebkitTextStroke: "0.5px #26fa0f",
                                            WebkitTextFillColor: "#000",
                                          },
                                          children: "Join the Affiliate Army",
                                        }),
                                      ],
                                    }),
                                    (0, l.jsx)("p", {
                                      className:
                                        "m-0 md:text-[20px] md:py-2 sm:text-[12px] text-[10px] leading-tight",
                                      children:
                                        "Help restore meme culture and earn in stablecoin while doing it.",
                                    }),
                                    (0, l.jsxs)("p", {
                                      className:
                                        "m-0 mx-auto max-w-[500px] sm:text-[12px] text-[10px] font-light leading-tight text-[#b3b3b3]",
                                      children: [
                                        "Get a percentage of every contribution made through your unique referral link.",
                                        (0, l.jsx)("span", {
                                          className: "underline block",
                                          children:
                                            "No tokens. No lockups. Just clean USDC payouts sent weekly.",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, l.jsx)("div", {
                                  className: "form-body sm:py-5  md:px-3",
                                  children: (0, l.jsxs)("form", {
                                    onSubmit: j,
                                    children: [
                                      (0, l.jsxs)("div", {
                                        className: "sm:py-2 py-1 md:py-3",
                                        children: [
                                          (0, l.jsx)("label", {
                                            htmlFor: "",
                                            className:
                                              "form-label m-0 sm:pb-1 block pl-2 sm:text-[14px] text-[10px]",
                                            children: "Your Wallet Address",
                                          }),
                                          (0, l.jsx)(f, {
                                            className: "inputWwrp relative",
                                            children: (0, l.jsx)("input", {
                                              type: "text",
                                              value: n,
                                              onChange: (e) =>
                                                x(e.target.value),
                                              className:
                                                "form-control w-full rounded-0 border border-[#26fa0f] text-[#26fa0f] md:h-[55px] h-[40px] md:text-[14px] text-xs bg-transparent md:p-3 px-3 py-1 placeholder-[rgba(119,246,77,0.4)]",
                                              placeholder:
                                                "For receiving commissions",
                                            }),
                                          }),
                                        ],
                                      }),
                                      (0, l.jsxs)("div", {
                                        className: "sm:py-2 py-1 md:py-3",
                                        children: [
                                          (0, l.jsx)("label", {
                                            htmlFor: "",
                                            className:
                                              "form-label m-0 sm:pb-1 block pl-2 sm:text-[14px] text-[10px]",
                                            children: "Your Telegram Handle",
                                          }),
                                          (0, l.jsx)(f, {
                                            className: "inputWwrp relative",
                                            children: (0, l.jsx)("input", {
                                              type: "text",
                                              value: c,
                                              onChange: (e) =>
                                                g(e.target.value),
                                              className:
                                                "form-control w-full rounded-0 border border-[#26fa0f] text-[#26fa0f] md:h-[55px] h-[40px] md:text-[14px] text-xs bg-transparent md:p-3 px-3 py-1 placeholder-[rgba(119,246,77,0.4)]",
                                              placeholder:
                                                "So we can reach out if needed",
                                            }),
                                          }),
                                        ],
                                      }),
                                      (0, l.jsx)("div", {
                                        className: " sm:my-5 my-3",
                                        children: (0, l.jsxs)("button", {
                                          type: "submit",
                                          className:
                                            "nav-link themeClr flex items-center justify-center relative font-zupraxu z-[9] sm:text-[16px] text-[14px] md:text-[20px]",
                                          children: [
                                            (0, l.jsx)("img", {
                                              className:
                                                "max-w-full md:h-[55px] sm:h-[45px] h-[35px] w-auto",
                                              alt: "",
                                              src: "/futurepepe-media.suffescom.dev/headerbuynow.png",
                                            }),
                                            (0, l.jsx)("span", {
                                              className:
                                                "absolute top-[50%] transform text-center translate-y-[-50%] left-0 right-0 mx-auto",
                                              children: "Generate",
                                            }),
                                          ],
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            })
                          : 2 == s
                          ? (0, l.jsx)(l.Fragment, {
                              children: (0, l.jsx)("div", {
                                className:
                                  "text-center mx-auto max-w-[520px] h-full flex items-center justify-center",
                                children: (0, l.jsxs)("div", {
                                  className: "",
                                  children: [
                                    (0, l.jsx)("span", {
                                      className:
                                        "icn flex items-center justify-center pb-1",
                                      children: (0, l.jsx)("span", {
                                        className:
                                          "loading loading-spinner loading-xl text-[#26fa0f]",
                                      }),
                                    }),
                                    (0, l.jsx)("h6", {
                                      className: "m-0 pt-2 themeClr text-xl",
                                      children:
                                        "Your request has been received!",
                                    }),
                                    (0, l.jsx)("p", {
                                      className: "m-0 py-2 text-white/80",
                                      children:
                                        "your unique referral link will be sent to your Telegram shortly. Please make sure your Telegram handle is correct and active.",
                                    }),
                                  ],
                                }),
                              }),
                            })
                          : (0, l.jsx)(l.Fragment, {}),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        b = (0, l.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "24",
          height: "24",
          viewBox: "0 0 34 34",
          fill: "none",
          children: [
            (0, l.jsx)("line", {
              x1: "18.3854",
              y1: "15.5566",
              x2: "25.4565",
              y2: "8.48547",
              stroke: "#26FA0F",
              strokeWidth: "2",
            }),
            (0, l.jsx)("line", {
              x1: "8.48576",
              y1: "25.457",
              x2: "15.5569",
              y2: "18.3859",
              stroke: "#26FA0F",
              strokeWidth: "2",
            }),
            (0, l.jsx)("line", {
              x1: "18.3856",
              y1: "18.3837",
              x2: "25.4569",
              y2: "25.455",
              stroke: "#26FA0F",
              strokeWidth: "2",
            }),
            (0, l.jsx)("line", {
              x1: "8.48543",
              y1: "8.48528",
              x2: "15.5568",
              y2: "15.5566",
              stroke: "#26FA0F",
              strokeWidth: "2",
            }),
          ],
        });
      var j = a(47650),
        v = a(6874),
        w = a.n(v);
      let N = i.Ay.div.withConfig({ componentId: "sc-70fb4274-0" })([
          "@media (max-width:340px){.cstmBtn span{font-size:9px !important;}}",
        ]),
        y = () => {
          let [e, t] = (0, r.useState)(!1),
            [a, i] = (0, r.useState)("");
          return ((0, r.useEffect)(() => {
            t(!0);
          }, []),
          e)
            ? (0, l.jsxs)(l.Fragment, {
                children: [
                  a &&
                    (0, j.createPortal)(
                      (0, l.jsx)(g, { joinAffilate: a, setJoinAffilate: i }),
                      document.body
                    ),
                  (0, l.jsxs)("section", {
                    className: "relative py-10 z-[9]",
                    children: [
                      (0, l.jsx)("img", {
                        src: s.Xe + "commonBg.png",
                        alt: "",
                        height: 1e4,
                        width: 1e4,
                        className:
                          "max-w-full h-full absolute top-0 left-0 z-[-9] object-cover w-full",
                      }),
                      (0, l.jsx)("div", {
                        className: "container",
                        children: (0, l.jsxs)("div", {
                          className: "grid gap-3 grid-cols-12 items-center",
                          children: [
                            (0, l.jsxs)("div", {
                              className:
                                "md:col-span-6 col-span-12 md:text-left text-center",
                              children: [
                                (0, l.jsxs)("div", {
                                  className:
                                    "headingCommon d-inline-block themeClr relative md:leading-relaxed leading-normal",
                                  children: [
                                    (0, l.jsx)("h2", {
                                      className:
                                        "headingFront uppercase relative z-[9] top-[-4px] m-0 md:text-[50px] text-[28px] font-zupraxu ",
                                      children: "Become a Pepe Affiliate",
                                    }),
                                    (0, l.jsx)("h2", {
                                      className:
                                        "headingBack w-full uppercase absolute md:top-[3px] top-[0] left-0 z-[1] text-transparent md:text-[50px] text-[28px] m-0 font-zupraxu",
                                      style: {
                                        WebkitTextStroke: "0.5px #26fa0f",
                                        WebkitTextFillColor: "#000",
                                      },
                                      children: "Become a Pepe Affiliate",
                                    }),
                                  ],
                                }),
                                (0, l.jsxs)("div", {
                                  className: "mt-[28px] md:block hidden",
                                  children: [
                                    (0, l.jsx)("h4", {
                                      className:
                                        "m-0 font-bold py-1 md:text-[25px] text-[20px] themeClr",
                                      children:
                                        "Love FUTUREPEPE? Share the vision. Earn rewards.",
                                    }),
                                    (0, l.jsx)("p", {
                                      className:
                                        "m-0 md:text-[18px] md:leading-relaxed leading-tight tracking-[10%] max-w-[500px] text-[#89FF7C] py-1",
                                      children:
                                        "Buy $FEPE with us and become a member of the Future Family.",
                                    }),
                                    (0, l.jsxs)(N, {
                                      className:
                                        "mt-4 flex items-center md:gap-[40px] gap-4",
                                      children: [
                                        (0, l.jsxs)(w(), {
                                          target: "_blank",
                                          href: "https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0x85c1ddfd0203ba23a91192144c2c246ea4d4c719",
                                          className:
                                            "relative h-[55px] border-0 p-0 transition duration-[400ms] hover:shadow-[0_0_10px_#26FA0F] rouned-xl",
                                          children: [
                                            (0, l.jsx)("img", {
                                              src: s.Xe + "btn2.png",
                                              alt: "",
                                              height: 1e4,
                                              width: 1e4,
                                              className:
                                                "max-w-full h-full object-contain w-auto",
                                            }),
                                            (0, l.jsx)("span", {
                                              className:
                                                "absolute top-0 w-full h-full z-[9] flex items-center justify-center left-0 uppercase font-zupraxu text-[18px] text-[#060900]",
                                              children: "Buy $FEPE",
                                            }),
                                          ],
                                        }),
                                        (0, l.jsxs)(w(), {
                                          href: "https://www.dextools.io/app/en/ether/pair-explorer/0x85c1ddfd0203ba23a91192144c2c246ea4d4c719",
                                          target: "_blank",
                                          className:
                                            "relative h-[55px] border-0 p-0 transition duration-[400ms] hover:shadow-[0_0_10px_#26FA0F] rouned-xl",
                                          children: [
                                            (0, l.jsx)("img", {
                                              src: s.Xe + "btn1.png",
                                              alt: "",
                                              height: 1e4,
                                              width: 1e4,
                                              className:
                                                "max-w-full h-full object-contain w-auto",
                                            }),
                                            (0, l.jsx)("span", {
                                              className:
                                                "absolute top-0 w-full h-full z-[9] flex items-center justify-center left-0 uppercase font-zupraxu text-[18px] themeClr",
                                              children: "View Chart",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, l.jsx)("div", {
                              className: "md:col-span-6 col-span-12",
                              children: (0, l.jsx)("img", {
                                src: s.Xe + "become-a-pepe-affiliate.webp",
                                alt: "",
                                height: 1e4,
                                width: 1e4,
                                className:
                                  "max-w-full h-auto object-contain w-full",
                              }),
                            }),
                            (0, l.jsx)("div", {
                              className: "col-span-12 md:hidden text-center",
                              children: (0, l.jsxs)("div", {
                                className: "mt-3",
                                children: [
                                  (0, l.jsx)("h4", {
                                    className:
                                      "m-0 font-bold md:text-[25px] text-[20px] themeClr",
                                    children:
                                      "Love FUTUREPEPE? Share the vision. Earn rewards.",
                                  }),
                                  (0, l.jsx)("p", {
                                    className:
                                      "m-0 md:text-[18px] md:leading-relaxed leading-tight tracking-[10%] max-w-[500px] text-[#89FF7C] py-1",
                                    children:
                                      "Buy $FEPE with us and become a member of the Future Family.",
                                  }),
                                  (0, l.jsxs)(N, {
                                    className: "mt-4 flex items-center gap-3",
                                    children: [
                                      (0, l.jsxs)(w(), {
                                        target: "_blank",
                                        href: "https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0x85c1ddfd0203ba23a91192144c2c246ea4d4c719",
                                        className:
                                          "relative md:h-[55px] cstmBtn text-[40px] border-0 p-0",
                                        children: [
                                          (0, l.jsx)("img", {
                                            src: s.Xe + "btn2.png",
                                            alt: "",
                                            height: 1e4,
                                            width: 1e4,
                                            className:
                                              "max-w-full h-full object-contain w-auto",
                                          }),
                                          (0, l.jsx)("span", {
                                            className:
                                              "absolute sm:top-0 leading-tight top-[-4px] w-full h-full z-[9] flex items-center justify-center left-0 uppercase font-zupraxu md:text-[18px] text-[11px] text-[#060900]",
                                            children: "Buy FPEPE",
                                          }),
                                        ],
                                      }),
                                      (0, l.jsxs)(w(), {
                                        href: "https://www.dextools.io/app/en/ether/pair-explorer/0x85c1ddfd0203ba23a91192144c2c246ea4d4c719",
                                        target: "_blank",
                                        className:
                                          "relative cstmBtn md:h-[55px] text-[40px]  border-0 p-0",
                                        children: [
                                          (0, l.jsx)("img", {
                                            src: s.Xe + "btn1.png",
                                            alt: "",
                                            height: 1e4,
                                            width: 1e4,
                                            className:
                                              "max-w-full h-full object-contain w-auto",
                                          }),
                                          (0, l.jsx)("span", {
                                            className:
                                              "absolute sm:top-0 top-[-4px] leading-tight w-full h-full z-[9] flex items-center justify-center left-0 uppercase font-zupraxu md:text-[18px] text-[11px] themeClr",
                                            children: "View Chart",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              })
            : null;
        };
    },
    21494: (e) => {
      e.exports = {
        style: {
          fontFamily: "'Oxanium', 'Oxanium Fallback'",
          fontStyle: "normal",
        },
        className: "__className_64c3a5",
        variable: "__variable_64c3a5",
      };
    },
    22016: (e) => {
      e.exports = {
        style: { fontFamily: "'zupraxu', 'zupraxu Fallback'" },
        className: "__className_6f5949",
        variable: "__variable_6f5949",
      };
    },
    59968: (e, t, a) => {
      "use strict";
      e.exports = a.p + "static/media/popBg.324c62eb.svg";
    },
  },
]);
