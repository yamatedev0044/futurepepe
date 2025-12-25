"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1796],
  {
    88468: (e, t, s) => {
      s.r(t), s.d(t, { default: () => c });
      var i = s(95155);
      s(12115), s(66766);
      var a = s(59694),
        l = s(74681),
        r = s(31996);
      let o = s.p + "static/media/tokenomicCard.41d93b5c.svg",
        n = a.Ay.div.withConfig({ componentId: "sc-186cb74b-0" })([
          '@media (min-width:768px){&:after{position:absolute;content:"";left:-50px;top:50%;height:95%;width:250px;opacity:0.6;background:linear-gradient( 269deg,rgb(179 213 131 / 0%) 0%,rgb(100 219 86 / 41%) 50%,rgb(57 154 50 / 7%) 100% );transform:translateY(-50%);border-radius:30px;}&:before{position:absolute;content:"";right:0;top:50%;height:95%;width:110px;opacity:1;background:linear-gradient( 271deg,rgb(179 213 131 / 0%) 0%,rgb(0 0 0) 50%,rgb(0 0 0 / 70%) 100% );transform:translateX(21%) translateY(-50%) scaleX(-1);z-index:9;}}@media (max-width:400px){.content{padding-left:30px !important;h4{font-size:13px;}p{font-size:9px;}}}@media (max-width:340px){.cstmCardWrp{padding:0 10px;}}',
        ]),
        d = a.Ay.section.withConfig({ componentId: "sc-186cb74b-1" })(
          [
            "background:#000;.cardCstm{h4{text-shadow:0px 0px 3px #ffffff;}}",
            " @media (max-width:575px){.container{padding-left:0px !important;padding-right:0px !important;}}",
          ],
          ""
        ),
        c = () => {
          var e = {
            dots: !1,
            infinite: !0,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            cssEase: "linear",
            nextArrow: (0, i.jsx)((e) => {
              let { onClick: t } = e;
              return (0, i.jsx)("button", {
                className: "slick-arrow slick-next cstmArrow",
                onClick: t,
                children: x,
              });
            }, {}),
            prevArrow: (0, i.jsx)((e) => {
              let { onClick: t } = e;
              return (0, i.jsx)("button", {
                className: "slick-arrow slick-prev cstmArrow",
                onClick: t,
                children: p,
              });
            }, {}),
            responsive: [
              { breakpoint: 1200, settings: { slidesToShow: 2 } },
              {
                breakpoint: 575,
                settings: {
                  dots: !0,
                  arrows: !1,
                  slidesToShow: 1,
                  centerMode: !0,
                },
              },
              {
                breakpoint: 340,
                settings: {
                  centerMode: !1,
                  slidesToShow: 1,
                  dots: !0,
                  arrows: !1,
                },
              },
            ],
          };
          return (0, i.jsx)(i.Fragment, {
            children: (0, i.jsxs)(d, {
              id: "tokenomics",
              className: "relative z-[9] md:pb-0 ",
              children: [
                (0, i.jsx)("img", {
                  src: l.Xe + "bottomg.png",
                  alt: "",
                  height: 1e4,
                  width: 1e4,
                  className:
                    "max-w-full h-auto absolute top-[-10px] left-0 z-[9] object-cover w-full",
                }),
                (0, i.jsx)("img", {
                  src: l.Xe + "tokenomicsG.webp",
                  alt: "",
                  height: 1e4,
                  width: 1e4,
                  className:
                    "max-w-full h-full w-full object-cover md:block hidden",
                }),
                (0, i.jsx)("img", {
                  src: l.Xe + "mobile/tokenomic.gif",
                  alt: "",
                  height: 1e4,
                  width: 1e4,
                  className: "max-w-full h-full w-full object-cover md:hidden",
                }),
                (0, i.jsx)("div", {
                  className:
                    "container  absolute top-0 left-0 right-0 h-full flex justify-between md:pt-[60px] pt-[30px]",
                  children: (0, i.jsxs)("div", {
                    className: "grid gap-3 grid-cols-12",
                    children: [
                      (0, i.jsx)("div", {
                        className: "col-span-12 pb-[40px]",
                        children: (0, i.jsx)("div", {
                          className: "text-center",
                          children: (0, i.jsxs)("div", {
                            className:
                              "headingCommon d-inline-block themeClr mx-auto relative max-w-[max-content] leading-relaxed",
                            children: [
                              (0, i.jsx)("h2", {
                                className:
                                  "headingFront relative z-[9] text-[#97cd4a] top-[-4px] m-0 md:text-[46px] text-[28px]  font-zupraxu",
                                children: "Tokenomics",
                              }),
                              (0, i.jsx)("h2", {
                                className:
                                  "headingBack absolute md:top-[3px] top-[0] left-0 z-[1] text-transparent md:text-[46px] text-[28px]  m-0 font-zupraxu",
                                style: {
                                  WebkitTextStroke: "0.5px #26fa0f",
                                  WebkitTextFillColor: "#000",
                                },
                                children: "Tokenomics",
                              }),
                            ],
                          }),
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className:
                          "col-span-12 md:py-0 pt-[100px] md:pb-[50px]",
                        children: (0, i.jsx)(n, {
                          className:
                            "SliderWrpper relative z-[9] transform xl:translate-y-[40%]",
                          children: (0, i.jsx)(r.A, {
                            ...e,
                            className: "",
                            children: [
                              {
                                title: "Liquidity Pool",
                                percentage: "100%",
                                descrp:
                                  "Liquidity: 15% will be reserved to maintain healthy liquidity across exchanges, ensuring smooth trading and  stability.",
                              },
                              {
                                title: "LP Token",
                                percentage: "",
                                descrp: "100% Burnt",
                              },
                              {
                                title: "Ownership",
                                percentage: "",
                                descrp: "Renounced",
                              },
                            ].map((e, t) =>
                              (0, i.jsx)(
                                "div",
                                {
                                  className: "sm:px-1 cstmCardWrp",
                                  children: (0, i.jsxs)("div", {
                                    className:
                                      "relative flex-shrink-0 cardCstm",
                                    children: [
                                      (0, i.jsx)("img", {
                                        src: o,
                                        alt: "",
                                        height: 1e4,
                                        width: 1e4,
                                        className:
                                          "max-w-full h-auto object-contain w-auto",
                                      }),
                                      (0, i.jsxs)("span", {
                                        className:
                                          "absolute bottom-[3px]  right-[25px] font-bold text-[#555555] sm:text-[16px] text-[10px] opacity-30 uppercase",
                                        children: [" ", e.title],
                                      }),
                                      (0, i.jsxs)("div", {
                                        className:
                                          "content absolute top-[50%] transform translate-y-[-50%] md:p-[30px] md:pl-[50px] p-[15px] pl-[40px] left-0 h-full w-full  mx-auto",
                                        children: [
                                          (0, i.jsxs)("h4", {
                                            className:
                                              "m-0 font-bold leading-tight md:text-[22px] text-[14px] md:pb-2 uppercase flex justify-between gap-2 items-center",
                                            children: [
                                              e.title,
                                              " ",
                                              (0, i.jsxs)("span", {
                                                className: "",
                                                children: [e.percentage],
                                              }),
                                            ],
                                          }),
                                          (0, i.jsx)("div", {
                                            className: "",
                                            children: h,
                                          }),
                                          (0, i.jsx)("p", {
                                            className:
                                              "m-0 py-2 leading-tight md:text-[14px] text-[10px]",
                                            children: e.descrp,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                },
                                t
                              )
                            ),
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                (0, i.jsx)("img", {
                  src: l.Xe + "topg.png",
                  alt: "",
                  height: 1e4,
                  width: 1e4,
                  className:
                    "max-w-full h-auto absolute bottom-0 left-0 z-[9] object-cover w-full",
                }),
              ],
            }),
          });
        },
        p = (0, i.jsxs)("svg", {
          width: "24",
          height: "24",
          viewBox: "0 0 27 41",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, i.jsx)("path", {
              d: "M25 11L25 29L13 20L25 11Z",
              stroke: "#26FA0F",
              strokeWidth: "3",
            }),
            (0, i.jsx)("path", {
              d: "M25 2L3 20.5L25 39",
              stroke: "#26FA0F",
              strokeWidth: "3",
              strokeLinecap: "round",
            }),
          ],
        }),
        x = (0, i.jsxs)("svg", {
          width: "24",
          height: "24",
          viewBox: "0 0 27 41",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, i.jsx)("path", {
              d: "M2 30L2 12L14 21L2 30Z",
              stroke: "#26FA0F",
              strokeWidth: "3",
            }),
            (0, i.jsx)("path", {
              d: "M2 39L24 20.5L2 2",
              stroke: "#26FA0F",
              strokeWidth: "3",
              strokeLinecap: "round",
            }),
          ],
        }),
        h = (0, i.jsxs)("svg", {
          className: "w-full h-auto",
          width: "463",
          height: "50",
          viewBox: "0 0 463 50",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, i.jsx)("path", {
              d: "M462.06 30.5029L461.897 30.6514L451.41 40.1914L451.266 40.3223H451.073L21.0474 40.3164H20.854L20.7104 40.1855L10.2231 30.6455L10.0601 30.4971V18.1094L10.2485 17.959L20.7358 9.61133L20.8726 9.50293H21.0474L451.073 9.50879H451.248L451.384 9.61719L461.872 17.9648L462.06 18.1152V30.5029Z",
              fill: "#2FA300",
              stroke: "#26FA0F",
            }),
            (0, i.jsx)("defs", {
              children: (0, i.jsxs)("filter", {
                id: "filter0_d_25_2766",
                x: "0.560059",
                y: "0.00292969",
                width: "97.5",
                height: "49.813",
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB",
                children: [
                  (0, i.jsx)("feFlood", {
                    floodOpacity: "0",
                    result: "BackgroundImageFix",
                  }),
                  (0, i.jsx)("feColorMatrix", {
                    in: "SourceAlpha",
                    type: "matrix",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                    result: "hardAlpha",
                  }),
                  (0, i.jsx)("feOffset", {}),
                  (0, i.jsx)("feGaussianBlur", { stdDeviation: "5" }),
                  (0, i.jsx)("feColorMatrix", {
                    type: "matrix",
                    values:
                      "0 0 0 0 0.14902 0 0 0 0 0.980392 0 0 0 0 0.0588235 0 0 0 1 0",
                  }),
                  (0, i.jsx)("feBlend", {
                    mode: "normal",
                    in2: "BackgroundImageFix",
                    result: "effect1_dropShadow_25_2766",
                  }),
                  (0, i.jsx)("feBlend", {
                    mode: "normal",
                    in: "SourceGraphic",
                    in2: "effect1_dropShadow_25_2766",
                    result: "shape",
                  }),
                ],
              }),
            }),
          ],
        });
    },
  },
]);
