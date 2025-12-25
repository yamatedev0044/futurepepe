"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8175],
  {
    78175: (e, t, i) => {
      i.r(t), i.d(t, { default: () => w });
      var r = i(95155);
      i(66766);
      var o = i(6874),
        l = i.n(o),
        a = i(12115),
        s = i(47650);
      let c = (e) => {
        let { communityVid: t, setCommunityVid: i, image: o } = e;
        return (
          console.log(o, "imageData"),
          (0, r.jsx)(r.Fragment, {
            children: (0, r.jsxs)("div", {
              className:
                " fixed inset-0 flex items-center justify-center cstmModal z-[9999] p-3",
              children: [
                (0, r.jsx)("div", {
                  onClick: () => {
                    i(!t);
                  },
                  className: "absolute inset-0 bg-black opacity-50",
                }),
                (0, r.jsx)("div", {
                  className:
                    "modalDialog p-2 mx-auto md:rounded-[48px] rounded-xl backdrop-blur-[6px] md:p-[60px] z-10 bg-[#26fa0f33] max-w-[900px] overflow-auto w-full",
                  children: (0, r.jsx)("div", {
                    className: "py-2",
                    children: o.link
                      ? (0, r.jsx)(r.Fragment, {
                          children: (0, r.jsx)("div", {
                            className: "iframeWrper",
                            children: o.link,
                          }),
                        })
                      : (0, r.jsx)("iframe", {
                          width: "560",
                          height: "315",
                          className: "w-full h-auto",
                          style: {
                            aspectRatio: 330 / 171,
                            clipPath:
                              "polygon(8% 0, 100% 0, 100% 90%, 93% 100%, 0 100%, 0 8%)",
                          },
                          src: "https://www.youtube.com/embed/D0UnqGm_miA?si=V-QJ1OJJ0bcNjg0L",
                          title: "YouTube video player",
                          frameborder: "0",
                          allow:
                            "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                          referrerpolicy: "strict-origin-when-cross-origin",
                          allowfullscreen: !0,
                        }),
                  }),
                }),
              ],
            }),
          })
        );
      };
      var m = i(74681),
        p = i(31996),
        n = i(59694);
      let d = n.Ay.div.withConfig({ componentId: "sc-548683e6-0" })([
          "@media (max-width:575px){.commonBg{height:210px;top:0;}}",
        ]),
        h = n.Ay.div.withConfig({ componentId: "sc-548683e6-1" })([
          '&:after{position:absolute;content:"";right:-1px;bottom:0px;transform:translateY(100%);border-right:16px solid #26fa0f;border-bottom:20px solid transparent;}&:before{position:absolute;content:"";right:0px;bottom:0px;transform:translateY(100%);border-right:14px solid #060900;border-bottom:18px solid transparent;z-index:9;}@media (max-width:575px){&:before{bottom:1px;border-right:9px solid #060900;border-bottom:10px solid transparent;}&:after{border-right:10px solid #26fa0f;border-bottom:10px solid transparent;}}',
        ]),
        u = n.Ay.div.withConfig({ componentId: "sc-548683e6-2" })([
          "@media (min-width:768px){.slick-arrow{svg{height:25px;width:25px;}}}.slick-track{display:flex;align-items:center;}@media (max-width:460px){.community_Youtube{img{height:72px;}}.slick-active{.community_Youtube{img{height:102px;}}}.community_Youtube{img{object-fit:initial !important;}}.slick-active{.community_Youtube{img{object-fit:cover !important;}}}.slick-arrow{svg{height:23px;width:23px;}}.slick-next{right:-30px;}.slick-prev{left:-28px;}}",
        ]),
        w = () => {
          let [e, t] = (0, a.useState)(!1),
            i = [
              {
                img: "https://i.ytimg.com/vi_webp/OI4XE563keo/maxresdefault.webp",
                link: (0, r.jsx)(r.Fragment, {
                  children: (0, r.jsx)("iframe", {
                    className: "w-full h-auto",
                    style: {
                      aspectRatio: 330 / 171,
                      clipPath:
                        "polygon(8% 0, 100% 0, 100% 90%, 93% 100%, 0 100%, 0 8%)",
                    },
                    width: "560",
                    height: "315",
                    src: "https://www.youtube.com/embed/OI4XE563keo?si=dQYEKEcrcVH0_Wij",
                    title: "YouTube video player",
                    frameborder: "0",
                    allow:
                      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                    referrerpolicy: "strict-origin-when-cross-origin",
                    allowfullscreen: !0,
                  }),
                }),
              },
              {
                img: "https://i.ytimg.com/vi_webp/iVZH-V3I2bI/maxresdefault.webp",
                link: (0, r.jsx)(r.Fragment, {
                  children: (0, r.jsx)("iframe", {
                    className: "w-full h-auto",
                    style: {
                      aspectRatio: 330 / 171,
                      clipPath:
                        "polygon(8% 0, 100% 0, 100% 90%, 93% 100%, 0 100%, 0 8%)",
                    },
                    width: "560",
                    height: "315",
                    src: "https://www.youtube.com/embed/iVZH-V3I2bI?si=9WtH1k3pCkyP-gAM",
                    title: "YouTube video player",
                    frameborder: "0",
                    allow:
                      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                    referrerpolicy: "strict-origin-when-cross-origin",
                    allowfullscreen: !0,
                  }),
                }),
              },
              {
                img: "https://i.ytimg.com/vi_webp/B6oOf6rsCb8/maxresdefault.webp",
                link: (0, r.jsx)(r.Fragment, {
                  children: (0, r.jsx)("iframe", {
                    className: "w-full h-auto",
                    style: {
                      aspectRatio: 330 / 171,
                      clipPath:
                        "polygon(8% 0, 100% 0, 100% 90%, 93% 100%, 0 100%, 0 8%)",
                    },
                    width: "560",
                    height: "315",
                    src: "https://www.youtube.com/embed/B6oOf6rsCb8?si=qkwXz9s7bFUymmUf",
                    title: "YouTube video player",
                    frameborder: "0",
                    allow:
                      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                    referrerpolicy: "strict-origin-when-cross-origin",
                    allowfullscreen: !0,
                  }),
                }),
              },
              {
                img: "https://i.ytimg.com/vi/iU6I97UFCUE/maxresdefault.jpg",
                link: (0, r.jsx)(r.Fragment, {
                  children: (0, r.jsx)("iframe", {
                    className: "w-full h-auto",
                    style: {
                      aspectRatio: 330 / 171,
                      clipPath:
                        "polygon(8% 0, 100% 0, 100% 90%, 93% 100%, 0 100%, 0 8%)",
                    },
                    width: "560",
                    height: "315",
                    src: "https://www.youtube.com/embed/iU6I97UFCUE?si=wLVmalHnlAkvP97o",
                    title: "YouTube video player",
                    frameborder: "0",
                    allow:
                      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                    referrerpolicy: "strict-origin-when-cross-origin",
                    allowfullscreen: !0,
                  }),
                }),
              },
              {
                img: "https://i.ytimg.com/vi/TSYJXbNzm3o/maxresdefault.jpg",
                link: (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)("iframe", {
                      className: "w-full h-auto",
                      style: {
                        aspectRatio: 330 / 171,
                        clipPath:
                          "polygon(8% 0, 100% 0, 100% 90%, 93% 100%, 0 100%, 0 8%)",
                      },
                      width: "560",
                      height: "315",
                      src: "https://www.youtube.com/embed/TSYJXbNzm3o?si=Pw_v0n6bjYrjL6x2",
                      title: "YouTube video player",
                      frameborder: "0",
                      allow:
                        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                      referrerpolicy: "strict-origin-when-cross-origin",
                      allowfullscreen: !0,
                    }),
                    " ",
                  ],
                }),
              },
              {
                img: "https://i.ytimg.com/vi_webp/v0XFwyUqTY0/maxresdefault.webp",
                link: (0, r.jsx)(r.Fragment, {
                  children: (0, r.jsx)("iframe", {
                    className: "w-full h-auto",
                    style: {
                      aspectRatio: 330 / 171,
                      clipPath:
                        "polygon(8% 0, 100% 0, 100% 90%, 93% 100%, 0 100%, 0 8%)",
                    },
                    width: "560",
                    height: "315",
                    src: "https://www.youtube.com/embed/v0XFwyUqTY0?si=2m313iZxvQkrADXq",
                    title: "YouTube video player",
                    frameborder: "0",
                    allow:
                      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                    referrerpolicy: "strict-origin-when-cross-origin",
                    allowfullscreen: !0,
                  }),
                }),
              },
              {
                img: "https://i.ytimg.com/vi/Xk4qM8XfP_g/maxresdefault.jpg",
                link: (0, r.jsx)(r.Fragment, {
                  children: (0, r.jsx)("iframe", {
                    className: "w-full h-auto",
                    style: {
                      aspectRatio: 330 / 171,
                      clipPath:
                        "polygon(8% 0, 100% 0, 100% 90%, 93% 100%, 0 100%, 0 8%)",
                    },
                    width: "560",
                    height: "315",
                    src: "https://www.youtube.com/embed/Xk4qM8XfP_g?si=nL9zK-x_H6zx_XdN",
                    title: "YouTube video player",
                    frameborder: "0",
                    allow:
                      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                    referrerpolicy: "strict-origin-when-cross-origin",
                    allowfullscreen: !0,
                  }),
                }),
              },
              {
                img: "https://i.ytimg.com/vi_webp/lIbPzzFzhbU/maxresdefault.webp",
                link: (0, r.jsx)(r.Fragment, {
                  children: (0, r.jsx)("iframe", {
                    className: "w-full h-auto",
                    style: {
                      aspectRatio: 330 / 171,
                      clipPath:
                        "polygon(8% 0, 100% 0, 100% 90%, 93% 100%, 0 100%, 0 8%)",
                    },
                    width: "560",
                    height: "315",
                    src: "https://www.youtube.com/embed/lIbPzzFzhbU?si=6fcZaBSrh1Mx0phT",
                    title: "YouTube video player",
                    frameborder: "0",
                    allow:
                      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                    referrerpolicy: "strict-origin-when-cross-origin",
                    allowfullscreen: !0,
                  }),
                }),
              },
              {
                img: "https://i.ytimg.com/vi_webp/HVLG2U8CSsM/maxresdefault.webp",
                link: (0, r.jsx)(r.Fragment, {
                  children: (0, r.jsx)("iframe", {
                    className: "w-full h-auto",
                    style: {
                      aspectRatio: 330 / 171,
                      clipPath:
                        "polygon(8% 0, 100% 0, 100% 90%, 93% 100%, 0 100%, 0 8%)",
                    },
                    width: "560",
                    height: "315",
                    src: "https://www.youtube.com/embed/HVLG2U8CSsM?si=RcacQpEhJV8mUBil",
                    title: "YouTube video player",
                    frameborder: "0",
                    allow:
                      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                    referrerpolicy: "strict-origin-when-cross-origin",
                    allowfullscreen: !0,
                  }),
                }),
              },
              {
                img: "https://i.ytimg.com/vi_webp/YxKO5av7JoA/maxresdefault.webp",
                link: (0, r.jsx)(r.Fragment, {
                  children: (0, r.jsx)("iframe", {
                    className: "w-full h-auto",
                    style: {
                      aspectRatio: 330 / 171,
                      clipPath:
                        "polygon(8% 0, 100% 0, 100% 90%, 93% 100%, 0 100%, 0 8%)",
                    },
                    width: "560",
                    height: "315",
                    src: "https://www.youtube.com/embed/YxKO5av7JoA?si=T_Yq1VZBmj_83sBe",
                    title: "YouTube video player",
                    frameborder: "0",
                    allow:
                      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                    referrerpolicy: "strict-origin-when-cross-origin",
                    allowfullscreen: !0,
                  }),
                }),
              },
            ],
            o = [
              {
                id: 1,
                innerBox: [
                  {
                    img: "https://i.ytimg.com/vi_webp/OI4XE563keo/maxresdefault.webp",
                    link: (0, r.jsx)(r.Fragment, {
                      children: (0, r.jsx)("iframe", {
                        className: "w-full h-auto",
                        style: {
                          aspectRatio: 330 / 171,
                          clipPath:
                            "polygon(8% 0, 100% 0, 100% 90%, 93% 100%, 0 100%, 0 8%)",
                        },
                        width: "560",
                        height: "315",
                        src: "https://www.youtube.com/embed/OI4XE563keo?si=dQYEKEcrcVH0_Wij",
                        title: "YouTube video player",
                        frameborder: "0",
                        allow:
                          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                        referrerpolicy: "strict-origin-when-cross-origin",
                        allowfullscreen: !0,
                      }),
                    }),
                  },
                  {
                    img: "https://i.ytimg.com/vi_webp/iVZH-V3I2bI/maxresdefault.webp",
                    link: (0, r.jsx)(r.Fragment, {
                      children: (0, r.jsx)("iframe", {
                        className: "w-full h-auto",
                        style: {
                          aspectRatio: 330 / 171,
                          clipPath:
                            "polygon(8% 0, 100% 0, 100% 90%, 93% 100%, 0 100%, 0 8%)",
                        },
                        width: "560",
                        height: "315",
                        src: "https://www.youtube.com/embed/iVZH-V3I2bI?si=9WtH1k3pCkyP-gAM",
                        title: "YouTube video player",
                        frameborder: "0",
                        allow:
                          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                        referrerpolicy: "strict-origin-when-cross-origin",
                        allowfullscreen: !0,
                      }),
                    }),
                  },
                  {
                    img: "https://i.ytimg.com/vi_webp/YxKO5av7JoA/maxresdefault.webp",
                    link: (0, r.jsx)(r.Fragment, {
                      children: (0, r.jsx)("iframe", {
                        className: "w-full h-auto",
                        style: {
                          aspectRatio: 330 / 171,
                          clipPath:
                            "polygon(8% 0, 100% 0, 100% 90%, 93% 100%, 0 100%, 0 8%)",
                        },
                        width: "560",
                        height: "315",
                        src: "https://www.youtube.com/embed/YxKO5av7JoA?si=T_Yq1VZBmj_83sBe",
                        title: "YouTube video player",
                        frameborder: "0",
                        allow:
                          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                        referrerpolicy: "strict-origin-when-cross-origin",
                        allowfullscreen: !0,
                      }),
                    }),
                  },
                  {
                    img: "https://i.ytimg.com/vi_webp/B6oOf6rsCb8/maxresdefault.webp",
                    link: (0, r.jsx)(r.Fragment, {
                      children: (0, r.jsx)("iframe", {
                        className: "w-full h-auto",
                        style: {
                          aspectRatio: 330 / 171,
                          clipPath:
                            "polygon(8% 0, 100% 0, 100% 90%, 93% 100%, 0 100%, 0 8%)",
                        },
                        width: "560",
                        height: "315",
                        src: "https://www.youtube.com/embed/B6oOf6rsCb8?si=qkwXz9s7bFUymmUf",
                        title: "YouTube video player",
                        frameborder: "0",
                        allow:
                          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                        referrerpolicy: "strict-origin-when-cross-origin",
                        allowfullscreen: !0,
                      }),
                    }),
                  },
                ],
              },
              {
                id: 2,
                innerBox: [
                  {
                    img: "https://i.ytimg.com/vi/iU6I97UFCUE/maxresdefault.jpg",
                    link: (0, r.jsx)(r.Fragment, {
                      children: (0, r.jsx)("iframe", {
                        className: "w-full h-auto",
                        style: {
                          aspectRatio: 330 / 171,
                          clipPath:
                            "polygon(8% 0, 100% 0, 100% 90%, 93% 100%, 0 100%, 0 8%)",
                        },
                        width: "560",
                        height: "315",
                        src: "https://www.youtube.com/embed/iU6I97UFCUE?si=wLVmalHnlAkvP97o",
                        title: "YouTube video player",
                        frameborder: "0",
                        allow:
                          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                        referrerpolicy: "strict-origin-when-cross-origin",
                        allowfullscreen: !0,
                      }),
                    }),
                  },
                  {
                    img: "https://i.ytimg.com/vi/TSYJXbNzm3o/maxresdefault.jpg",
                    link: (0, r.jsxs)(r.Fragment, {
                      children: [
                        (0, r.jsx)("iframe", {
                          className: "w-full h-auto",
                          style: {
                            aspectRatio: 330 / 171,
                            clipPath:
                              "polygon(8% 0, 100% 0, 100% 90%, 93% 100%, 0 100%, 0 8%)",
                          },
                          width: "560",
                          height: "315",
                          src: "https://www.youtube.com/embed/TSYJXbNzm3o?si=Pw_v0n6bjYrjL6x2",
                          title: "YouTube video player",
                          frameborder: "0",
                          allow:
                            "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                          referrerpolicy: "strict-origin-when-cross-origin",
                          allowfullscreen: !0,
                        }),
                        " ",
                      ],
                    }),
                  },
                  {
                    img: "https://i.ytimg.com/vi_webp/v0XFwyUqTY0/maxresdefault.webp",
                    link: (0, r.jsx)(r.Fragment, {
                      children: (0, r.jsx)("iframe", {
                        className: "w-full h-auto",
                        style: {
                          aspectRatio: 330 / 171,
                          clipPath:
                            "polygon(8% 0, 100% 0, 100% 90%, 93% 100%, 0 100%, 0 8%)",
                        },
                        width: "560",
                        height: "315",
                        src: "https://www.youtube.com/embed/v0XFwyUqTY0?si=2m313iZxvQkrADXq",
                        title: "YouTube video player",
                        frameborder: "0",
                        allow:
                          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                        referrerpolicy: "strict-origin-when-cross-origin",
                        allowfullscreen: !0,
                      }),
                    }),
                  },
                  {
                    img: "https://i.ytimg.com/vi/Xk4qM8XfP_g/maxresdefault.jpg",
                    link: (0, r.jsx)(r.Fragment, {
                      children: (0, r.jsx)("iframe", {
                        className: "w-full h-auto",
                        style: {
                          aspectRatio: 330 / 171,
                          clipPath:
                            "polygon(8% 0, 100% 0, 100% 90%, 93% 100%, 0 100%, 0 8%)",
                        },
                        width: "560",
                        height: "315",
                        src: "https://www.youtube.com/embed/Xk4qM8XfP_g?si=nL9zK-x_H6zx_XdN",
                        title: "YouTube video player",
                        frameborder: "0",
                        allow:
                          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                        referrerpolicy: "strict-origin-when-cross-origin",
                        allowfullscreen: !0,
                      }),
                    }),
                  },
                ],
              },
              {
                id: 3,
                innerBox: [
                  {
                    img: "https://i.ytimg.com/vi_webp/lIbPzzFzhbU/maxresdefault.webp",
                    link: (0, r.jsx)(r.Fragment, {
                      children: (0, r.jsx)("iframe", {
                        className: "w-full h-auto",
                        style: {
                          aspectRatio: 330 / 171,
                          clipPath:
                            "polygon(8% 0, 100% 0, 100% 90%, 93% 100%, 0 100%, 0 8%)",
                        },
                        width: "560",
                        height: "315",
                        src: "https://www.youtube.com/embed/lIbPzzFzhbU?si=6fcZaBSrh1Mx0phT",
                        title: "YouTube video player",
                        frameborder: "0",
                        allow:
                          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                        referrerpolicy: "strict-origin-when-cross-origin",
                        allowfullscreen: !0,
                      }),
                    }),
                  },
                  {
                    img: "https://i.ytimg.com/vi_webp/HVLG2U8CSsM/maxresdefault.webp",
                    link: (0, r.jsx)(r.Fragment, {
                      children: (0, r.jsx)("iframe", {
                        className: "w-full h-auto",
                        style: {
                          aspectRatio: 330 / 171,
                          clipPath:
                            "polygon(8% 0, 100% 0, 100% 90%, 93% 100%, 0 100%, 0 8%)",
                        },
                        width: "560",
                        height: "315",
                        src: "https://www.youtube.com/embed/HVLG2U8CSsM?si=RcacQpEhJV8mUBil",
                        title: "YouTube video player",
                        frameborder: "0",
                        allow:
                          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                        referrerpolicy: "strict-origin-when-cross-origin",
                        allowfullscreen: !0,
                      }),
                    }),
                  },
                ],
              },
            ],
            [n, w] = (0, a.useState)(),
            [x, y] = (0, a.useState)(null),
            f = (e) => {
              let { onClick: t } = e;
              return (0, r.jsx)("button", {
                className: "slick-arrow slick-next cstmArrow",
                onClick: t,
                children: b,
              });
            },
            j = (e) => {
              let { onClick: t } = e;
              return (0, r.jsx)("button", {
                className: "slick-arrow slick-prev cstmArrow",
                onClick: t,
                children: g,
              });
            };
          var v = {
              dots: !1,
              arrows: !0,
              infinite: !0,
              speed: 500,
              slidesToShow: 1,
              slidesToScroll: 1,
              nextArrow: (0, r.jsx)(f, {}),
              prevArrow: (0, r.jsx)(j, {}),
            },
            k = {
              dots: !1,
              arrows: !0,
              infinite: !0,
              speed: 500,
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: !0,
              nextArrow: (0, r.jsx)(f, {}),
              prevArrow: (0, r.jsx)(j, {}),
            };
          let N = (e, t) => {
            e.preventDefault(), y(t), w(!n), console.log("click", x, n);
          };
          return ((0, a.useEffect)(() => {
            t(!0);
          }, []),
          e)
            ? (0, r.jsxs)(r.Fragment, {
                children: [
                  n &&
                    (0, s.createPortal)(
                      (0, r.jsx)(c, {
                        communityVid: n,
                        setCommunityVid: w,
                        image: x,
                      }),
                      document.body
                    ),
                  (0, r.jsxs)(d, {
                    id: "community",
                    className: "relative py-8 z-[9]",
                    children: [
                      (0, r.jsx)("img", {
                        src: m.Xe + "commonBg.png",
                        alt: "",
                        height: 1e4,
                        width: 1e4,
                        className:
                          "max-h-full h-full w-full z-[-9] absolute bottom-0 right-0 max-w-[100%] object-cover object-[bottom_right] object-bottom-right commonBg",
                      }),
                      (0, r.jsx)("img", {
                        src: m.Xe + "community.webp",
                        alt: "bg",
                        height: 1e4,
                        width: 1e4,
                        className:
                          "h-full w-full md:object-contain absolute top-0 object-right-bottom right-0 z-[-1] md:block hidden",
                      }),
                      (0, r.jsx)("img", {
                        src: m.Xe + "mobile/CommunityMobile.gif",
                        alt: "bg",
                        height: 1e4,
                        width: 1e4,
                        className:
                          "h-full w-full object-contain absolute top-0 object-[10%_0%] right-0 z-[-1] md:hidden",
                      }),
                      (0, r.jsx)("div", {
                        className: "container relative",
                        children: (0, r.jsxs)("div", {
                          className: "grid gap-3 grid-cols-12",
                          children: [
                            (0, r.jsxs)("div", {
                              className: "col-span-12",
                              children: [
                                (0, r.jsx)(h, {
                                  className:
                                    "absolute bg-[#060900] rounded-tl-[7px] px-3 py-3 right-[5%] top-[15%] border border-[#26fa0f] md:block hidden",
                                  children: (0, r.jsx)("p", {
                                    className:
                                      "m-0 themeClr text-base tracking-[3px] text-base ",
                                    children:
                                      "FuturePepe, the blockchain world owes you!",
                                  }),
                                }),
                                (0, r.jsx)("div", {
                                  className: "text-center",
                                  children: (0, r.jsxs)("div", {
                                    className:
                                      "headingCommon d-inline-block themeClr mx-auto relative max-w-[max-content] leading-relaxed",
                                    children: [
                                      (0, r.jsx)("h2", {
                                        className:
                                          "headingFront relative z-[9] top-[-4px] m-0 md:text-[46px] text-[28px] font-zupraxu",
                                        children: "Community",
                                      }),
                                      (0, r.jsx)("h2", {
                                        className:
                                          "headingBack absolute md:top-[3px] top-[0] left-0 z-[1] text-transparent md:text-[46px] text-[28px] m-0 font-zupraxu",
                                        style: {
                                          WebkitTextStroke: "0.5px #26fa0f",
                                          WebkitTextFillColor: "#000",
                                        },
                                        children: "Community",
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                            (0, r.jsx)("div", {
                              className: "col-span-12",
                              children: (0, r.jsx)("div", {
                                className:
                                  "community_content md:mt-[40px] themeClr ",
                                children: (0, r.jsx)("div", {
                                  className: "grid gap-3 grid-cols-12",
                                  children: (0, r.jsxs)("div", {
                                    className: "md:col-span-6 col-span-12",
                                    children: [
                                      (0, r.jsxs)("div", {
                                        className:
                                          "community_contentleft md:text-left text-center",
                                        children: [
                                          (0, r.jsx)("h5", {
                                            className:
                                              "md:text-[28px] text-[20px] py-2 font-bold ",
                                            children:
                                              "Future Pepe is more than a coin “it's a movement.”",
                                          }),
                                          (0, r.jsxs)("p", {
                                            className:
                                              "md:text-[18px] pb-2 leading-relaxed tracking-[1px] text-[#89ff7c]",
                                            children: [
                                              "Join our growing community, engage with fellow believers, ",
                                              (0, r.jsx)("br", {}),
                                              " and help shape the future of meme coins",
                                            ],
                                          }),
                                          (0, r.jsx)("div", {
                                            className: "text-right md:hidden",
                                            children: (0, r.jsx)(h, {
                                              className:
                                                "relative bg-[#060900] rounded-tl-[7px] px-1 d-inline-block max-w-[max-content] ml-auto py-2 border border-[#26fa0f] text-left",
                                              children: (0, r.jsx)("p", {
                                                className:
                                                  "m-0 themeClr px-1 text-xs ",
                                                children:
                                                  "FuturePepe, the blockchain world owes you!",
                                              }),
                                            }),
                                          }),
                                          (0, r.jsxs)(l(), {
                                            target: "_blank",
                                            href: "https://x.com/#",
                                            className:
                                              "commonBtn relative mt-4 md:flex items-center justify-center hidden",
                                            children: [
                                              (0, r.jsx)("img", {
                                                src: m.Xe + "btnBg.png",
                                                alt: "",
                                                height: 1e4,
                                                width: 1e4,
                                                className:
                                                  "max-w-full h-auto w-auto absolute top-0 left-0 ",
                                              }),
                                              "Join The Community",
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, r.jsx)(u, {
                                        children: (0, r.jsx)(p.A, {
                                          className:
                                            "mb-3 mt-10  max-w-[506px] hidden md:block",
                                          ...v,
                                          children: o.map((e, t) =>
                                            (0, r.jsx)(
                                              "li",
                                              {
                                                className: "",
                                                children: (0, r.jsx)("div", {
                                                  className:
                                                    "grid gap-3 grid-cols-12",
                                                  children: e.innerBox.map(
                                                    (e, i) =>
                                                      (0, r.jsx)(
                                                        "div",
                                                        {
                                                          className:
                                                            "col-span-6",
                                                          children: (0, r.jsx)(
                                                            l(),
                                                            {
                                                              href: "#",
                                                              onClick: (t) =>
                                                                N(t, e),
                                                              children: (0,
                                                              r.jsx)("div", {
                                                                className:
                                                                  "community_Youtube",
                                                                children: (0,
                                                                r.jsx)("img", {
                                                                  style: {
                                                                    aspectRatio:
                                                                      16 / 9,
                                                                    clipPath:
                                                                      "polygon(16% 0px, 100% 0px, 100% 84%, 84% 100%, 0px 100%, 0px 16%)",
                                                                  },
                                                                  src: e.img,
                                                                  alt: "community-".concat(
                                                                    t
                                                                  ),
                                                                  height: 500,
                                                                  width: 500,
                                                                  className:
                                                                    "img-fluid object-cover h-auto w-auto",
                                                                }),
                                                              }),
                                                            }
                                                          ),
                                                        },
                                                        i
                                                      )
                                                  ),
                                                }),
                                              },
                                              e.id
                                            )
                                          ),
                                        }),
                                      }),
                                      (0, r.jsxs)(u, {
                                        className:
                                          "md:hidden px-3 text-center mt-[210px]",
                                        children: [
                                          (0, r.jsx)(p.A, {
                                            className: "mb-3",
                                            ...k,
                                            children: i.map((e, t) =>
                                              (0, r.jsx)(
                                                "li",
                                                {
                                                  className: "px-1",
                                                  children: (0, r.jsx)(l(), {
                                                    href: "#",
                                                    onClick: (t) => N(t, e),
                                                    children: (0, r.jsx)(
                                                      "div",
                                                      {
                                                        className:
                                                          "community_Youtube",
                                                        children: (0, r.jsx)(
                                                          "img",
                                                          {
                                                            style: {
                                                              clipPath:
                                                                "polygon(16% 0px, 100% 0px, 100% 84%, 84% 100%, 0px 100%, 0px 16%)",
                                                              aspectRatio:
                                                                16 / 9,
                                                            },
                                                            src: e.img,
                                                            alt: "community-".concat(
                                                              t
                                                            ),
                                                            height: 500,
                                                            width: 500,
                                                            className:
                                                              "img-fluid object-cover h-auto w-auto",
                                                          }
                                                        ),
                                                      }
                                                    ),
                                                  }),
                                                },
                                                t
                                              )
                                            ),
                                          }),
                                          (0, r.jsx)("div", {
                                            className: "my-[50px]",
                                            children: (0, r.jsxs)(l(), {
                                              target: "_blank",
                                              href: "https://x.com/#",
                                              className:
                                                "commonBtn relative w-auto h-auto px-3 pt-2 mt-2 text-[14px]",
                                              children: [
                                                (0, r.jsx)("img", {
                                                  src: m.Xe + "btnBg.png",
                                                  alt: "",
                                                  height: 1e4,
                                                  width: 1e4,
                                                  className:
                                                    "max-w-full h-[40px] w-auto absolute top-0 left-0 ",
                                                }),
                                                "Join The Community",
                                              ],
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
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
        },
        g = (0, r.jsxs)("svg", {
          width: "15",
          height: "15",
          viewBox: "0 0 27 41",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, r.jsx)("path", {
              d: "M25 11L25 29L13 20L25 11Z",
              stroke: "#26FA0F",
              strokeWidth: "3",
            }),
            (0, r.jsx)("path", {
              d: "M25 2L3 20.5L25 39",
              stroke: "#26FA0F",
              strokeWidth: "3",
              strokeLinecap: "round",
            }),
          ],
        }),
        b = (0, r.jsxs)("svg", {
          width: "15",
          height: "15",
          viewBox: "0 0 27 41",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, r.jsx)("path", {
              d: "M2 30L2 12L14 21L2 30Z",
              stroke: "#26FA0F",
              strokeWidth: "3",
            }),
            (0, r.jsx)("path", {
              d: "M2 39L24 20.5L2 2",
              stroke: "#26FA0F",
              strokeWidth: "3",
              strokeLinecap: "round",
            }),
          ],
        });
    },
  },
]);
