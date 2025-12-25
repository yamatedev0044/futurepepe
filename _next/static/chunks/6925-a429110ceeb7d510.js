(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6925],
  {
    399: (e, t, n) => {
      "use strict";
      n.d(t, { h: () => i });
      let i = n(80698).k;
    },
    754: (e) => {
      e.exports = {
        style: { fontFamily: "'zupraxu', 'zupraxu Fallback'" },
        className: "__className_6f5949",
        variable: "__variable_6f5949",
      };
    },
    4805: (e, t, n) => {
      "use strict";
      n.d(t, { Hi: () => r, ft: () => a, uj: () => o });
      var i = n(7441);
      class r extends i.C {
        constructor({ address: e }) {
          super(`State for account "${e}" is set multiple times.`, {
            name: "AccountStateConflictError",
          });
        }
      }
      class a extends i.C {
        constructor() {
          super("state and stateDiff are set on the same account.", {
            name: "StateAssignmentConflictError",
          });
        }
      }
      function s(e) {
        return e.reduce(
          (e, { slot: t, value: n }) => `${e}        ${t}: ${n}
`,
          ""
        );
      }
      function o(e) {
        return e
          .reduce((e, { address: t, ...n }) => {
            let i = `${e}    ${t}:
`;
            return (
              n.nonce &&
                (i += `      nonce: ${n.nonce}
`),
              n.balance &&
                (i += `      balance: ${n.balance}
`),
              n.code &&
                (i += `      code: ${n.code}
`),
              n.state && ((i += "      state:\n"), (i += s(n.state))),
              n.stateDiff &&
                ((i += "      stateDiff:\n"), (i += s(n.stateDiff))),
              i
            );
          }, "  State Override:\n")
          .slice(0, -1);
      }
    },
    7671: (e, t, n) => {
      "use strict";
      function i(e, { format: t }) {
        if (!t) return {};
        let n = {};
        return (
          !(function t(i) {
            for (let r of Object.keys(i))
              r in e && (n[r] = e[r]),
                i[r] &&
                  "object" == typeof i[r] &&
                  !Array.isArray(i[r]) &&
                  t(i[r]);
          })(t(e || {})),
          n
        );
      }
      n.d(t, { o: () => i });
    },
    8333: (e, t, n) => {
      "use strict";
      n.d(t, { T: () => eu });
      var i = n(59126);
      let r = /^error (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/,
        a = /^event (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/,
        s =
          /^function (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)(?: (?<scope>external|public{1}))?(?: (?<stateMutability>pure|view|nonpayable|payable{1}))?(?: returns\s?\((?<returns>.*?)\))?$/,
        o = /^struct (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*) \{(?<properties>.*?)\}$/,
        c =
          /^constructor\((?<parameters>.*?)\)(?:\s(?<stateMutability>payable{1}))?$/,
        u = /^fallback\(\) external(?:\s(?<stateMutability>payable{1}))?$/,
        l = /^receive\(\) external payable$/,
        d = new Set(["indexed"]),
        h = new Set(["calldata", "memory", "storage"]);
      class f extends Error {
        constructor(e, t = {}) {
          let n =
              t.cause instanceof f
                ? t.cause.details
                : t.cause?.message
                ? t.cause.message
                : t.details,
            i = (t.cause instanceof f && t.cause.docsPath) || t.docsPath;
          super(
            [
              e || "An error occurred.",
              "",
              ...(t.metaMessages ? [...t.metaMessages, ""] : []),
              ...(i ? [`Docs: https://abitype.dev${i}`] : []),
              ...(n ? [`Details: ${n}`] : []),
              "Version: abitype@1.0.8",
            ].join("\n")
          ),
            Object.defineProperty(this, "details", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "docsPath", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "metaMessages", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "shortMessage", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiTypeError",
            }),
            t.cause && (this.cause = t.cause),
            (this.details = n),
            (this.docsPath = i),
            (this.metaMessages = t.metaMessages),
            (this.shortMessage = e);
        }
      }
      class p extends f {
        constructor({ type: e }) {
          super("Unknown type.", {
            metaMessages: [
              `Type "${e}" is not a valid ABI type. Perhaps you forgot to include a struct signature?`,
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "UnknownTypeError",
            });
        }
      }
      class m extends f {
        constructor({ type: e }) {
          super("Unknown type.", {
            metaMessages: [`Type "${e}" is not a valid ABI type.`],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "UnknownSolidityTypeError",
            });
        }
      }
      class g extends f {
        constructor({ param: e }) {
          super("Invalid ABI parameter.", { details: e }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidParameterError",
            });
        }
      }
      class y extends f {
        constructor({ param: e, name: t }) {
          super("Invalid ABI parameter.", {
            details: e,
            metaMessages: [
              `"${t}" is a protected Solidity keyword. More info: https://docs.soliditylang.org/en/latest/cheatsheet.html`,
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "SolidityProtectedKeywordError",
            });
        }
      }
      class b extends f {
        constructor({ param: e, type: t, modifier: n }) {
          super("Invalid ABI parameter.", {
            details: e,
            metaMessages: [
              `Modifier "${n}" not allowed${t ? ` in "${t}" type` : ""}.`,
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidModifierError",
            });
        }
      }
      class w extends f {
        constructor({ param: e, type: t, modifier: n }) {
          super("Invalid ABI parameter.", {
            details: e,
            metaMessages: [
              `Modifier "${n}" not allowed${t ? ` in "${t}" type` : ""}.`,
              `Data location can only be specified for array, struct, or mapping types, but "${n}" was given.`,
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidFunctionModifierError",
            });
        }
      }
      class v extends f {
        constructor({ abiParameter: e }) {
          super("Invalid ABI parameter.", {
            details: JSON.stringify(e, null, 2),
            metaMessages: ["ABI parameter type is invalid."],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidAbiTypeParameterError",
            });
        }
      }
      class C extends f {
        constructor({ signature: e, type: t }) {
          super(`Invalid ${t} signature.`, { details: e }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidSignatureError",
            });
        }
      }
      class x extends f {
        constructor({ signature: e }) {
          super("Unknown signature.", { details: e }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "UnknownSignatureError",
            });
        }
      }
      class P extends f {
        constructor({ signature: e }) {
          super("Invalid struct signature.", {
            details: e,
            metaMessages: ["No properties exist."],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidStructSignatureError",
            });
        }
      }
      class I extends f {
        constructor({ type: e }) {
          super("Circular reference detected.", {
            metaMessages: [`Struct "${e}" is a circular reference.`],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "CircularReferenceError",
            });
        }
      }
      class E extends f {
        constructor({ current: e, depth: t }) {
          super("Unbalanced parentheses.", {
            metaMessages: [
              `"${e.trim()}" has too many ${
                t > 0 ? "opening" : "closing"
              } parentheses.`,
            ],
            details: `Depth "${t}"`,
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidParenthesisError",
            });
        }
      }
      let A = new Map([
          ["address", { type: "address" }],
          ["bool", { type: "bool" }],
          ["bytes", { type: "bytes" }],
          ["bytes32", { type: "bytes32" }],
          ["int", { type: "int256" }],
          ["int256", { type: "int256" }],
          ["string", { type: "string" }],
          ["uint", { type: "uint256" }],
          ["uint8", { type: "uint8" }],
          ["uint16", { type: "uint16" }],
          ["uint24", { type: "uint24" }],
          ["uint32", { type: "uint32" }],
          ["uint64", { type: "uint64" }],
          ["uint96", { type: "uint96" }],
          ["uint112", { type: "uint112" }],
          ["uint160", { type: "uint160" }],
          ["uint192", { type: "uint192" }],
          ["uint256", { type: "uint256" }],
          ["address owner", { type: "address", name: "owner" }],
          ["address to", { type: "address", name: "to" }],
          ["bool approved", { type: "bool", name: "approved" }],
          ["bytes _data", { type: "bytes", name: "_data" }],
          ["bytes data", { type: "bytes", name: "data" }],
          ["bytes signature", { type: "bytes", name: "signature" }],
          ["bytes32 hash", { type: "bytes32", name: "hash" }],
          ["bytes32 r", { type: "bytes32", name: "r" }],
          ["bytes32 root", { type: "bytes32", name: "root" }],
          ["bytes32 s", { type: "bytes32", name: "s" }],
          ["string name", { type: "string", name: "name" }],
          ["string symbol", { type: "string", name: "symbol" }],
          ["string tokenURI", { type: "string", name: "tokenURI" }],
          ["uint tokenId", { type: "uint256", name: "tokenId" }],
          ["uint8 v", { type: "uint8", name: "v" }],
          ["uint256 balance", { type: "uint256", name: "balance" }],
          ["uint256 tokenId", { type: "uint256", name: "tokenId" }],
          ["uint256 value", { type: "uint256", name: "value" }],
          [
            "event:address indexed from",
            { type: "address", name: "from", indexed: !0 },
          ],
          [
            "event:address indexed to",
            { type: "address", name: "to", indexed: !0 },
          ],
          [
            "event:uint indexed tokenId",
            { type: "uint256", name: "tokenId", indexed: !0 },
          ],
          [
            "event:uint256 indexed tokenId",
            { type: "uint256", name: "tokenId", indexed: !0 },
          ],
        ]),
        $ =
          /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/,
        M =
          /^\((?<type>.+?)\)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/,
        N = /^u?int$/;
      function _(e, t) {
        var n, r;
        let a,
          s = (function (e, t, n) {
            let i = "";
            if (n)
              for (let e of Object.entries(n)) {
                if (!e) continue;
                let t = "";
                for (let n of e[1])
                  t += `[${n.type}${n.name ? `:${n.name}` : ""}]`;
                i += `(${e[0]}{${t}})`;
              }
            return t ? `${t}:${e}${i}` : e;
          })(e, t?.type, t?.structs);
        if (A.has(s)) return A.get(s);
        let o = i.wj.test(e),
          c = (0, i.Yv)(o ? M : $, e);
        if (!c) throw new g({ param: e });
        if (
          c.name &&
          ("address" === (n = c.name) ||
            "bool" === n ||
            "function" === n ||
            "string" === n ||
            "tuple" === n ||
            i.BD.test(n) ||
            i.Ge.test(n) ||
            B.test(n))
        )
          throw new y({ param: e, name: c.name });
        let u = c.name ? { name: c.name } : {},
          l = "indexed" === c.modifier ? { indexed: !0 } : {},
          d = t?.structs ?? {},
          f = {};
        if (o) {
          a = "tuple";
          let e = O(c.type),
            t = [],
            n = e.length;
          for (let i = 0; i < n; i++) t.push(_(e[i], { structs: d }));
          f = { components: t };
        } else if (c.type in d) (a = "tuple"), (f = { components: d[c.type] });
        else if (N.test(c.type)) a = `${c.type}256`;
        else if (((a = c.type), t?.type !== "struct" && !k(a)))
          throw new m({ type: a });
        if (c.modifier) {
          if (!t?.modifiers?.has?.(c.modifier))
            throw new b({ param: e, type: t?.type, modifier: c.modifier });
          if (
            h.has(c.modifier) &&
            ((r = a),
            !c.array && "bytes" !== r && "string" !== r && "tuple" !== r)
          )
            throw new w({ param: e, type: t?.type, modifier: c.modifier });
        }
        let p = { type: `${a}${c.array ?? ""}`, ...u, ...l, ...f };
        return A.set(s, p), p;
      }
      function O(e, t = [], n = "", i = 0) {
        let r = e.trim().length;
        for (let a = 0; a < r; a++) {
          let r = e[a],
            s = e.slice(a + 1);
          switch (r) {
            case ",":
              return 0 === i ? O(s, [...t, n.trim()]) : O(s, t, `${n}${r}`, i);
            case "(":
              return O(s, t, `${n}${r}`, i + 1);
            case ")":
              return O(s, t, `${n}${r}`, i - 1);
            default:
              return O(s, t, `${n}${r}`, i);
          }
        }
        if ("" === n) return t;
        if (0 !== i) throw new E({ current: n, depth: i });
        return t.push(n.trim()), t;
      }
      function k(e) {
        return (
          "address" === e ||
          "bool" === e ||
          "function" === e ||
          "string" === e ||
          i.BD.test(e) ||
          i.Ge.test(e)
        );
      }
      let B =
          /^(?:after|alias|anonymous|apply|auto|byte|calldata|case|catch|constant|copyof|default|defined|error|event|external|false|final|function|immutable|implements|in|indexed|inline|internal|let|mapping|match|memory|mutable|null|of|override|partial|private|promise|public|pure|reference|relocatable|return|returns|sizeof|static|storage|struct|super|supports|switch|this|true|try|typedef|typeof|var|view|virtual)$/,
        S = /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?$/;
      function T(e) {
        let t = (function (e) {
            let t = {},
              n = e.length;
            for (let r = 0; r < n; r++) {
              let n = e[r];
              if (!o.test(n)) continue;
              let a = (0, i.Yv)(o, n);
              if (!a) throw new C({ signature: n, type: "struct" });
              let s = a.properties.split(";"),
                c = [],
                u = s.length;
              for (let e = 0; e < u; e++) {
                let t = s[e].trim();
                if (!t) continue;
                let n = _(t, { type: "struct" });
                c.push(n);
              }
              if (!c.length) throw new P({ signature: n });
              t[a.name] = c;
            }
            let r = {},
              a = Object.entries(t),
              s = a.length;
            for (let e = 0; e < s; e++) {
              let [n, s] = a[e];
              r[n] = (function e(t, n, r = new Set()) {
                let a = [],
                  s = t.length;
                for (let o = 0; o < s; o++) {
                  let s = t[o];
                  if (i.wj.test(s.type)) a.push(s);
                  else {
                    let t = (0, i.Yv)(S, s.type);
                    if (!t?.type) throw new v({ abiParameter: s });
                    let { array: o, type: c } = t;
                    if (c in n) {
                      if (r.has(c)) throw new I({ type: c });
                      a.push({
                        ...s,
                        type: `tuple${o ?? ""}`,
                        components: e(n[c] ?? [], n, new Set([...r, c])),
                      });
                    } else if (k(c)) a.push(s);
                    else throw new p({ type: c });
                  }
                }
                return a;
              })(s, t);
            }
            return r;
          })(e),
          n = [],
          f = e.length;
        for (let p = 0; p < f; p++) {
          let f = e[p];
          o.test(f) ||
            n.push(
              (function (e, t = {}) {
                if (s.test(e))
                  return (function (e, t = {}) {
                    let n = (0, i.Yv)(s, e);
                    if (!n) throw new C({ signature: e, type: "function" });
                    let r = O(n.parameters),
                      a = [],
                      o = r.length;
                    for (let e = 0; e < o; e++)
                      a.push(
                        _(r[e], { modifiers: h, structs: t, type: "function" })
                      );
                    let c = [];
                    if (n.returns) {
                      let e = O(n.returns),
                        i = e.length;
                      for (let n = 0; n < i; n++)
                        c.push(
                          _(e[n], {
                            modifiers: h,
                            structs: t,
                            type: "function",
                          })
                        );
                    }
                    return {
                      name: n.name,
                      type: "function",
                      stateMutability: n.stateMutability ?? "nonpayable",
                      inputs: a,
                      outputs: c,
                    };
                  })(e, t);
                if (a.test(e))
                  return (function (e, t = {}) {
                    let n = (0, i.Yv)(a, e);
                    if (!n) throw new C({ signature: e, type: "event" });
                    let r = O(n.parameters),
                      s = [],
                      o = r.length;
                    for (let e = 0; e < o; e++)
                      s.push(
                        _(r[e], { modifiers: d, structs: t, type: "event" })
                      );
                    return { name: n.name, type: "event", inputs: s };
                  })(e, t);
                if (r.test(e))
                  return (function (e, t = {}) {
                    let n = (0, i.Yv)(r, e);
                    if (!n) throw new C({ signature: e, type: "error" });
                    let a = O(n.parameters),
                      s = [],
                      o = a.length;
                    for (let e = 0; e < o; e++)
                      s.push(_(a[e], { structs: t, type: "error" }));
                    return { name: n.name, type: "error", inputs: s };
                  })(e, t);
                if (c.test(e))
                  return (function (e, t = {}) {
                    let n = (0, i.Yv)(c, e);
                    if (!n) throw new C({ signature: e, type: "constructor" });
                    let r = O(n.parameters),
                      a = [],
                      s = r.length;
                    for (let e = 0; e < s; e++)
                      a.push(_(r[e], { structs: t, type: "constructor" }));
                    return {
                      type: "constructor",
                      stateMutability: n.stateMutability ?? "nonpayable",
                      inputs: a,
                    };
                  })(e, t);
                if (u.test(e))
                  return (function (e) {
                    let t = (0, i.Yv)(u, e);
                    if (!t) throw new C({ signature: e, type: "fallback" });
                    return {
                      type: "fallback",
                      stateMutability: t.stateMutability ?? "nonpayable",
                    };
                  })(e);
                if (l.test(e))
                  return { type: "receive", stateMutability: "payable" };
                throw new x({ signature: e });
              })(f, t)
            );
        }
        return n;
      }
      class j extends Error {
        constructor(e, t = {}) {
          let n = (() => {
              if (t.cause instanceof j) {
                if (t.cause.details) return t.cause.details;
                if (t.cause.shortMessage) return t.cause.shortMessage;
              }
              return t.cause?.message ? t.cause.message : t.details;
            })(),
            i = (t.cause instanceof j && t.cause.docsPath) || t.docsPath,
            r = `https://oxlib.sh${i ?? ""}`;
          super(
            [
              e || "An error occurred.",
              ...(t.metaMessages ? ["", ...t.metaMessages] : []),
              ...(n || i
                ? ["", n ? `Details: ${n}` : void 0, i ? `See: ${r}` : void 0]
                : []),
            ]
              .filter((e) => "string" == typeof e)
              .join("\n"),
            t.cause ? { cause: t.cause } : void 0
          ),
            Object.defineProperty(this, "details", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "docs", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "docsPath", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "shortMessage", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "cause", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "BaseError",
            }),
            Object.defineProperty(this, "version", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ox@0.1.1",
            }),
            (this.cause = t.cause),
            (this.details = n),
            (this.docs = r),
            (this.docsPath = i),
            (this.shortMessage = e);
        }
        walk(e) {
          return (function e(t, n) {
            return n?.(t)
              ? t
              : t && "object" == typeof t && "cause" in t && t.cause
              ? e(t.cause, n)
              : n
              ? null
              : t;
          })(this, e);
        }
      }
      let F = Array.from({ length: 256 }, (e, t) =>
        t.toString(16).padStart(2, "0")
      );
      function R(e, t = {}) {
        let n,
          { signed: i, size: r } = t,
          a = BigInt(e);
        r
          ? (n = i
              ? (1n << (8n * BigInt(r) - 1n)) - 1n
              : 2n ** (8n * BigInt(r)) - 1n)
          : "number" == typeof e && (n = BigInt(Number.MAX_SAFE_INTEGER));
        let s = "bigint" == typeof n && i ? -n - 1n : 0;
        if ((n && a > n) || a < s) {
          let t = "bigint" == typeof e ? "n" : "";
          throw new G({
            max: n ? `${n}${t}` : void 0,
            min: `${s}${t}`,
            signed: i,
            size: r,
            value: `${e}${t}`,
          });
        }
        let o = (i && a < 0 ? (1n << BigInt(8 * r)) + BigInt(a) : a).toString(
            16
          ),
          c = `0x${o}`;
        return r
          ? (function (e, t) {
              return (function (e, t = {}) {
                let { dir: n, size: i = 32 } = t;
                if (0 === i) return e;
                let r = e.replace("0x", "");
                if (r.length > 2 * i)
                  throw new q({
                    size: Math.ceil(r.length / 2),
                    targetSize: i,
                    type: "Hex",
                  });
                return `0x${r["right" === n ? "padEnd" : "padStart"](
                  2 * i,
                  "0"
                )}`;
              })(e, { dir: "left", size: t });
            })(c, r)
          : c;
      }
      class G extends j {
        constructor({ max: e, min: t, signed: n, size: i, value: r }) {
          super(
            `Number \`${r}\` is not in safe${i ? ` ${8 * i}-bit` : ""}${
              n ? " signed" : " unsigned"
            } integer range ${
              e ? `(\`${t}\` to \`${e}\`)` : `(above \`${t}\`)`
            }`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.IntegerOutOfRangeError",
            });
        }
      }
      class q extends j {
        constructor({ size: e, targetSize: t, type: n }) {
          super(
            `${n.charAt(0).toUpperCase()}${n
              .slice(1)
              .toLowerCase()} size (\`${e}\`) exceeds padding size (\`${t}\`).`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.SizeExceedsPaddingSizeError",
            });
        }
      }
      function L(e) {
        return {
          address: e.address,
          amount: R(e.amount),
          index: R(e.index),
          validatorIndex: R(e.validatorIndex),
        };
      }
      var U = n(19405),
        D = n(14493),
        z = n(7441),
        W = n(30445),
        H = n(35109),
        K = n(69330),
        Q = n(99702),
        V = n(79731),
        Y = n(13423);
      let Z = "/docs/contract/encodeDeployData";
      function J(e) {
        let { abi: t, args: n, bytecode: i } = e;
        if (!n || 0 === n.length) return i;
        let r = t.find((e) => "type" in e && "constructor" === e.type);
        if (!r) throw new Q.YW({ docsPath: Z });
        if (!("inputs" in r) || !r.inputs || 0 === r.inputs.length)
          throw new Q.YF({ docsPath: Z });
        let a = (0, Y.h)(r.inputs, n);
        return (0, V.aP)([i, a]);
      }
      var X = n(60367),
        ee = n(13861),
        et = n(67622),
        en = n(42264),
        ei = n(35020),
        er = n(7671),
        ea = n(76743),
        es = n(85569),
        eo = n(25507),
        ec = n(65358);
      async function eu(e, t) {
        let {
            account: i = e.account,
            batch: r = !!e.batch?.multicall,
            blockNumber: a,
            blockTag: s = "latest",
            accessList: o,
            blobs: c,
            blockOverrides: u,
            code: l,
            data: d,
            factory: h,
            factoryData: f,
            gas: p,
            gasPrice: m,
            maxFeePerBlobGas: g,
            maxFeePerGas: y,
            maxPriorityFeePerGas: b,
            nonce: w,
            to: v,
            value: C,
            stateOverride: x,
            ...P
          } = t,
          I = i ? (0, U.J)(i) : void 0;
        if (l && (h || f))
          throw new z.C(
            "Cannot provide both `code` & `factory`/`factoryData` as parameters."
          );
        if (l && v)
          throw new z.C("Cannot provide both `code` & `to` as parameters.");
        let E = l && d,
          A = h && f && v && d,
          $ = E || A,
          M = E
            ? (function (e) {
                let { code: t, data: n } = e;
                return J({
                  abi: T(["constructor(bytes, bytes)"]),
                  bytecode:
                    "0x608060405234801561001057600080fd5b5060405161018e38038061018e83398101604081905261002f91610124565b6000808351602085016000f59050803b61004857600080fd5b6000808351602085016000855af16040513d6000823e81610067573d81fd5b3d81f35b634e487b7160e01b600052604160045260246000fd5b600082601f83011261009257600080fd5b81516001600160401b038111156100ab576100ab61006b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156100d9576100d961006b565b6040528181528382016020018510156100f157600080fd5b60005b82811015610110576020818601810151838301820152016100f4565b506000918101602001919091529392505050565b6000806040838503121561013757600080fd5b82516001600160401b0381111561014d57600080fd5b61015985828601610081565b602085015190935090506001600160401b0381111561017757600080fd5b61018385828601610081565b915050925092905056fe",
                  args: [t, n],
                });
              })({ code: l, data: d })
            : A
            ? (function (e) {
                let { data: t, factory: n, factoryData: i, to: r } = e;
                return J({
                  abi: T(["constructor(address, bytes, address, bytes)"]),
                  bytecode:
                    "0x608060405234801561001057600080fd5b506040516102c03803806102c083398101604081905261002f916101e6565b836001600160a01b03163b6000036100e457600080836001600160a01b03168360405161005c9190610270565b6000604051808303816000865af19150503d8060008114610099576040519150601f19603f3d011682016040523d82523d6000602084013e61009e565b606091505b50915091508115806100b857506001600160a01b0386163b155b156100e1578060405163101bb98d60e01b81526004016100d8919061028c565b60405180910390fd5b50505b6000808451602086016000885af16040513d6000823e81610103573d81fd5b3d81f35b80516001600160a01b038116811461011e57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561015457818101518382015260200161013c565b50506000910152565b600082601f83011261016e57600080fd5b81516001600160401b0381111561018757610187610123565b604051601f8201601f19908116603f011681016001600160401b03811182821017156101b5576101b5610123565b6040528181528382016020018510156101cd57600080fd5b6101de826020830160208701610139565b949350505050565b600080600080608085870312156101fc57600080fd5b61020585610107565b60208601519094506001600160401b0381111561022157600080fd5b61022d8782880161015d565b93505061023c60408601610107565b60608601519092506001600160401b0381111561025857600080fd5b6102648782880161015d565b91505092959194509250565b60008251610282818460208701610139565b9190910192915050565b60208152600082518060208401526102ab816040850160208701610139565b601f01601f1916919091016040019291505056fe",
                  args: [r, t, n, i],
                });
              })({ data: d, factory: h, factoryData: f, to: v })
            : d;
        try {
          (0, ec.c)(t);
          let n = ("bigint" == typeof a ? (0, et.cK)(a) : void 0) || s,
            i = u
              ? {
                  ...("bigint" == typeof u.baseFeePerGas && {
                    baseFeePerGas: R(u.baseFeePerGas),
                  }),
                  ...("bigint" == typeof u.blobBaseFee && {
                    blobBaseFee: R(u.blobBaseFee),
                  }),
                  ...("string" == typeof u.feeRecipient && {
                    feeRecipient: u.feeRecipient,
                  }),
                  ...("bigint" == typeof u.gasLimit && {
                    gasLimit: R(u.gasLimit),
                  }),
                  ...("bigint" == typeof u.number && { number: R(u.number) }),
                  ...("bigint" == typeof u.prevRandao && {
                    prevRandao: R(u.prevRandao),
                  }),
                  ...("bigint" == typeof u.time && { time: R(u.time) }),
                  ...(u.withdrawals && { withdrawals: u.withdrawals.map(L) }),
                }
              : void 0,
            l = (0, eo.yH)(x),
            d = e.chain?.formatters?.transactionRequest?.format,
            h = (d || ea.Bv)({
              ...(0, er.o)(P, { format: d }),
              from: I?.address,
              accessList: o,
              blobs: c,
              data: M,
              gas: p,
              gasPrice: m,
              maxFeePerBlobGas: g,
              maxFeePerGas: y,
              maxPriorityFeePerGas: b,
              nonce: w,
              to: $ ? void 0 : v,
              value: C,
            });
          if (
            r &&
            (function ({ request: e }) {
              let { data: t, to: n, ...i } = e;
              return (
                !(!t || t.startsWith("0x82ad56cb")) &&
                !!n &&
                !(Object.values(i).filter((e) => void 0 !== e).length > 0)
              );
            })({ request: h }) &&
            !l &&
            !i
          )
            try {
              return await el(e, { ...h, blockNumber: a, blockTag: s });
            } catch (e) {
              if (!(e instanceof W.YE) && !(e instanceof W.rj)) throw e;
            }
          let f = (() => {
              let e = [h, n];
              return l && i
                ? [...e, l, i]
                : l
                ? [...e, l]
                : i
                ? [...e, {}, i]
                : e;
            })(),
            E = await e.request({ method: "eth_call", params: f });
          if ("0x" === E) return { data: void 0 };
          return { data: E };
        } catch (s) {
          let i = (function (e) {
              if (!(e instanceof z.C)) return;
              let t = e.walk();
              return "object" == typeof t?.data ? t.data?.data : t.data;
            })(s),
            { offchainLookup: r, offchainLookupSignature: a } = await n
              .e(699)
              .then(n.bind(n, 40699));
          if (!1 !== e.ccipRead && i?.slice(0, 10) === a && v)
            return { data: await r(e, { data: i, to: v }) };
          if ($ && i?.slice(0, 10) === "0x101bb98d")
            throw new H.Po({ factory: h });
          throw (function (e, { docsPath: t, ...n }) {
            let i = (() => {
              let t = (0, ei.l)(e, n);
              return t instanceof en.RM ? e : t;
            })();
            return new H.zX(i, { docsPath: t, ...n });
          })(s, { ...t, account: I, chain: e.chain });
        }
      }
      async function el(e, t) {
        let { batchSize: n = 1024, wait: i = 0 } =
            "object" == typeof e.batch?.multicall ? e.batch.multicall : {},
          {
            blockNumber: r,
            blockTag: a = "latest",
            data: s,
            multicallAddress: o,
            to: c,
          } = t,
          u = o;
        if (!u) {
          if (!e.chain) throw new W.YE();
          u = (0, ee.M)({
            blockNumber: r,
            chain: e.chain,
            contract: "multicall3",
          });
        }
        let l = ("bigint" == typeof r ? (0, et.cK)(r) : void 0) || a,
          { schedule: d } = (0, es.u)({
            id: `${e.uid}.${l}`,
            wait: i,
            shouldSplitBatch: (e) =>
              e.reduce((e, { data: t }) => e + (t.length - 2), 0) > 2 * n,
            fn: async (t) => {
              let n = t.map((e) => ({
                  allowFailure: !0,
                  callData: e.data,
                  target: e.to,
                })),
                i = (0, X.p)({
                  abi: D.v2,
                  args: [n],
                  functionName: "aggregate3",
                }),
                r = await e.request({
                  method: "eth_call",
                  params: [{ data: i, to: u }, l],
                });
              return (0, K.e)({
                abi: D.v2,
                args: [n],
                functionName: "aggregate3",
                data: r || "0x",
              });
            },
          }),
          [{ returnData: h, success: f }] = await d({ data: s, to: c });
        if (!f) throw new H.$S({ data: h });
        return "0x" === h ? { data: void 0 } : { data: h };
      }
    },
    9894: (e, t, n) => {
      "use strict";
      function i(e) {
        return e;
      }
      n.d(t, { U: () => i });
    },
    13423: (e, t, n) => {
      "use strict";
      n.d(t, { h: () => p, k: () => g });
      var i = n(99702),
        r = n(36444),
        a = n(7441),
        s = n(94201),
        o = n(81757),
        c = n(79731),
        u = n(36984),
        l = n(87094),
        d = n(93727),
        h = n(67622),
        f = n(38697);
      function p(e, t) {
        if (e.length !== t.length)
          throw new i.YE({ expectedLength: e.length, givenLength: t.length });
        let n = m(
          (function ({ params: e, values: t }) {
            let n = [];
            for (let p = 0; p < e.length; p++)
              n.push(
                (function e({ param: t, value: n }) {
                  let p = g(t.type);
                  if (p) {
                    let [r, a] = p;
                    return (function (t, { length: n, param: r }) {
                      let a = null === n;
                      if (!Array.isArray(t)) throw new i.dm(t);
                      if (!a && t.length !== n)
                        throw new i.Nc({
                          expectedLength: n,
                          givenLength: t.length,
                          type: `${r.type}[${n}]`,
                        });
                      let s = !1,
                        o = [];
                      for (let n = 0; n < t.length; n++) {
                        let i = e({ param: r, value: t[n] });
                        i.dynamic && (s = !0), o.push(i);
                      }
                      if (a || s) {
                        let e = m(o);
                        if (a) {
                          let t = (0, h.cK)(o.length, { size: 32 });
                          return {
                            dynamic: !0,
                            encoded: o.length > 0 ? (0, c.xW)([t, e]) : t,
                          };
                        }
                        if (s) return { dynamic: !0, encoded: e };
                      }
                      return {
                        dynamic: !1,
                        encoded: (0, c.xW)(o.map(({ encoded: e }) => e)),
                      };
                    })(n, { length: r, param: { ...t, type: a } });
                  }
                  if ("tuple" === t.type)
                    return (function (t, { param: n }) {
                      let i = !1,
                        r = [];
                      for (let a = 0; a < n.components.length; a++) {
                        let s = n.components[a],
                          o = Array.isArray(t) ? a : s.name,
                          c = e({ param: s, value: t[o] });
                        r.push(c), c.dynamic && (i = !0);
                      }
                      return {
                        dynamic: i,
                        encoded: i
                          ? m(r)
                          : (0, c.xW)(r.map(({ encoded: e }) => e)),
                      };
                    })(n, { param: t });
                  if ("address" === t.type) {
                    var y = n;
                    if (!(0, o.P)(y)) throw new r.M({ address: y });
                    return { dynamic: !1, encoded: (0, u.db)(y.toLowerCase()) };
                  }
                  if ("bool" === t.type) {
                    var b = n;
                    if ("boolean" != typeof b)
                      throw new a.C(
                        `Invalid boolean value: "${b}" (type: ${typeof b}). Expected: \`true\` or \`false\`.`
                      );
                    return { dynamic: !1, encoded: (0, u.db)((0, h.$P)(b)) };
                  }
                  if (t.type.startsWith("uint") || t.type.startsWith("int")) {
                    let e = t.type.startsWith("int"),
                      [, , i = "256"] = f.Ge.exec(t.type) ?? [];
                    return (function (e, { signed: t, size: n = 256 }) {
                      if ("number" == typeof n) {
                        let i = 2n ** (BigInt(n) - (t ? 1n : 0n)) - 1n,
                          r = t ? -i - 1n : 0n;
                        if (e > i || e < r)
                          throw new s.Ty({
                            max: i.toString(),
                            min: r.toString(),
                            signed: t,
                            size: n / 8,
                            value: e.toString(),
                          });
                      }
                      return {
                        dynamic: !1,
                        encoded: (0, h.cK)(e, { size: 32, signed: t }),
                      };
                    })(n, { signed: e, size: Number(i) });
                  }
                  if (t.type.startsWith("bytes"))
                    return (function (e, { param: t }) {
                      let [, n] = t.type.split("bytes"),
                        r = (0, l.E)(e);
                      if (!n) {
                        let t = e;
                        return (
                          r % 32 != 0 &&
                            (t = (0, u.db)(t, {
                              dir: "right",
                              size: 32 * Math.ceil((e.length - 2) / 2 / 32),
                            })),
                          {
                            dynamic: !0,
                            encoded: (0, c.xW)([
                              (0, u.db)((0, h.cK)(r, { size: 32 })),
                              t,
                            ]),
                          }
                        );
                      }
                      if (r !== Number.parseInt(n))
                        throw new i.gH({
                          expectedSize: Number.parseInt(n),
                          value: e,
                        });
                      return {
                        dynamic: !1,
                        encoded: (0, u.db)(e, { dir: "right" }),
                      };
                    })(n, { param: t });
                  if ("string" === t.type) {
                    var w = n;
                    let e = (0, h.i3)(w),
                      t = Math.ceil((0, l.E)(e) / 32),
                      i = [];
                    for (let n = 0; n < t; n++)
                      i.push(
                        (0, u.db)((0, d.di)(e, 32 * n, (n + 1) * 32), {
                          dir: "right",
                        })
                      );
                    return {
                      dynamic: !0,
                      encoded: (0, c.xW)([
                        (0, u.db)((0, h.cK)((0, l.E)(e), { size: 32 })),
                        ...i,
                      ]),
                    };
                  }
                  throw new i.nK(t.type, {
                    docsPath: "/docs/contract/encodeAbiParameters",
                  });
                })({ param: e[p], value: t[p] })
              );
            return n;
          })({ params: e, values: t })
        );
        return 0 === n.length ? "0x" : n;
      }
      function m(e) {
        let t = 0;
        for (let n = 0; n < e.length; n++) {
          let { dynamic: i, encoded: r } = e[n];
          i ? (t += 32) : (t += (0, l.E)(r));
        }
        let n = [],
          i = [],
          r = 0;
        for (let a = 0; a < e.length; a++) {
          let { dynamic: s, encoded: o } = e[a];
          s
            ? (n.push((0, h.cK)(t + r, { size: 32 })),
              i.push(o),
              (r += (0, l.E)(o)))
            : n.push(o);
        }
        return (0, c.xW)([...n, ...i]);
      }
      function g(e) {
        let t = e.match(/^(.*)\[(\d+)?\]$/);
        return t ? [t[2] ? Number(t[2]) : null, t[1]] : void 0;
      }
    },
    13861: (e, t, n) => {
      "use strict";
      n.d(t, { M: () => r });
      var i = n(30445);
      function r({ blockNumber: e, chain: t, contract: n }) {
        let r = t?.contracts?.[n];
        if (!r) throw new i.rj({ chain: t, contract: { name: n } });
        if (e && r.blockCreated && r.blockCreated > e)
          throw new i.rj({
            blockNumber: e,
            chain: t,
            contract: { name: n, blockCreated: r.blockCreated },
          });
        return r.address;
      }
    },
    14493: (e, t, n) => {
      "use strict";
      n.d(t, { b2: () => r, v2: () => i });
      let i = [
          {
            inputs: [
              {
                components: [
                  { name: "target", type: "address" },
                  { name: "allowFailure", type: "bool" },
                  { name: "callData", type: "bytes" },
                ],
                name: "calls",
                type: "tuple[]",
              },
            ],
            name: "aggregate3",
            outputs: [
              {
                components: [
                  { name: "success", type: "bool" },
                  { name: "returnData", type: "bytes" },
                ],
                name: "returnData",
                type: "tuple[]",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
        ],
        r = [
          {
            name: "query",
            type: "function",
            stateMutability: "view",
            inputs: [
              {
                type: "tuple[]",
                name: "queries",
                components: [
                  { type: "address", name: "sender" },
                  { type: "string[]", name: "urls" },
                  { type: "bytes", name: "data" },
                ],
              },
            ],
            outputs: [
              { type: "bool[]", name: "failures" },
              { type: "bytes[]", name: "responses" },
            ],
          },
          {
            name: "HttpError",
            type: "error",
            inputs: [
              { type: "uint16", name: "status" },
              { type: "string", name: "message" },
            ],
          },
        ],
        a = [
          { inputs: [], name: "ResolverNotFound", type: "error" },
          { inputs: [], name: "ResolverWildcardNotSupported", type: "error" },
          { inputs: [], name: "ResolverNotContract", type: "error" },
          {
            inputs: [{ name: "returnData", type: "bytes" }],
            name: "ResolverError",
            type: "error",
          },
          {
            inputs: [
              {
                components: [
                  { name: "status", type: "uint16" },
                  { name: "message", type: "string" },
                ],
                name: "errors",
                type: "tuple[]",
              },
            ],
            name: "HttpError",
            type: "error",
          },
        ];
      [...a], [...a];
    },
    15443: (e, t, n) => {
      "use strict";
      n.d(t, { R: () => m });
      var i = n(12115),
        r = n(34560),
        a = n(7165),
        s = n(25910),
        o = n(52020),
        c = class extends s.Q {
          #e;
          #t = void 0;
          #n;
          #i;
          constructor(e, t) {
            super(),
              (this.#e = e),
              this.setOptions(t),
              this.bindMethods(),
              this.#r();
          }
          bindMethods() {
            (this.mutate = this.mutate.bind(this)),
              (this.reset = this.reset.bind(this));
          }
          setOptions(e) {
            let t = this.options;
            (this.options = this.#e.defaultMutationOptions(e)),
              (0, o.f8)(this.options, t) ||
                this.#e
                  .getMutationCache()
                  .notify({
                    type: "observerOptionsUpdated",
                    mutation: this.#n,
                    observer: this,
                  }),
              t?.mutationKey &&
              this.options.mutationKey &&
              (0, o.EN)(t.mutationKey) !== (0, o.EN)(this.options.mutationKey)
                ? this.reset()
                : this.#n?.state.status === "pending" &&
                  this.#n.setOptions(this.options);
          }
          onUnsubscribe() {
            this.hasListeners() || this.#n?.removeObserver(this);
          }
          onMutationUpdate(e) {
            this.#r(), this.#a(e);
          }
          getCurrentResult() {
            return this.#t;
          }
          reset() {
            this.#n?.removeObserver(this),
              (this.#n = void 0),
              this.#r(),
              this.#a();
          }
          mutate(e, t) {
            return (
              (this.#i = t),
              this.#n?.removeObserver(this),
              (this.#n = this.#e
                .getMutationCache()
                .build(this.#e, this.options)),
              this.#n.addObserver(this),
              this.#n.execute(e)
            );
          }
          #r() {
            let e = this.#n?.state ?? (0, r.$)();
            this.#t = {
              ...e,
              isPending: "pending" === e.status,
              isSuccess: "success" === e.status,
              isError: "error" === e.status,
              isIdle: "idle" === e.status,
              mutate: this.mutate,
              reset: this.reset,
            };
          }
          #a(e) {
            a.jG.batch(() => {
              if (this.#i && this.hasListeners()) {
                let t = this.#t.variables,
                  n = this.#t.context;
                e?.type === "success"
                  ? (this.#i.onSuccess?.(e.data, t, n),
                    this.#i.onSettled?.(e.data, null, t, n))
                  : e?.type === "error" &&
                    (this.#i.onError?.(e.error, t, n),
                    this.#i.onSettled?.(void 0, e.error, t, n));
              }
              this.listeners.forEach((e) => {
                e(this.#t);
              });
            });
          }
        },
        u = n(26715),
        l = n(35451),
        d = n(34250);
      let h = [];
      function f(e) {
        let t = e.chains;
        return (0, d.b)(h, t) ? h : ((h = t), t);
      }
      var p = n(53031);
      function m() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: t } = e,
          n = (0, p.U)(e),
          r = {
            mutationFn: (e) => (0, l.S)(n, e),
            mutationKey: ["switchChain"],
          },
          {
            mutate: s,
            mutateAsync: d,
            ...h
          } = (function (e, t) {
            let n = (0, u.jE)(void 0),
              [r] = i.useState(() => new c(n, e));
            i.useEffect(() => {
              r.setOptions(e);
            }, [r, e]);
            let s = i.useSyncExternalStore(
                i.useCallback((e) => r.subscribe(a.jG.batchCalls(e)), [r]),
                () => r.getCurrentResult(),
                () => r.getCurrentResult()
              ),
              l = i.useCallback(
                (e, t) => {
                  r.mutate(e, t).catch(o.lQ);
                },
                [r]
              );
            if (s.error && (0, o.GU)(r.options.throwOnError, [s.error]))
              throw s.error;
            return { ...s, mutate: l, mutateAsync: s.mutate };
          })({ ...t, ...r });
        return {
          ...h,
          chains: (function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = (0, p.U)(e);
            return (0, i.useSyncExternalStore)(
              (e) =>
                (function (e, t) {
                  let { onChange: n } = t;
                  return e._internal.chains.subscribe((e, t) => {
                    n(e, t);
                  });
                })(t, { onChange: e }),
              () => f(t),
              () => f(t)
            );
          })({ config: n }),
          switchChain: s,
          switchChainAsync: d,
        };
      }
    },
    15484: (e, t, n) => {
      "use strict";
      n.d(t, { b: () => i });
      var i = n(82661);
    },
    17255: (e, t, n) => {
      "use strict";
      n.d(t, { h: () => a });
      var i = n(36444),
        r = n(81757);
      function a(e, t) {
        if (!(0, r.P)(e, { strict: !1 })) throw new i.M({ address: e });
        if (!(0, r.P)(t, { strict: !1 })) throw new i.M({ address: t });
        return e.toLowerCase() === t.toLowerCase();
      }
    },
    21135: (e, t, n) => {
      "use strict";
      n.d(t, { V: () => a });
      var i = n(93727),
        r = n(80698);
      let a = (e) => (0, i.di)((0, r.k)(e), 0, 4);
    },
    21159: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => a, B: () => r });
      var i = n(99702);
      function r(e, { includeName: t = !1 } = {}) {
        if ("function" !== e.type && "event" !== e.type && "error" !== e.type)
          throw new i.d_(e.type);
        return `${e.name}(${a(e.inputs, { includeName: t })})`;
      }
      function a(e, { includeName: t = !1 } = {}) {
        return e
          ? e
              .map((e) =>
                (function (e, { includeName: t }) {
                  return e.type.startsWith("tuple")
                    ? `(${a(e.components, { includeName: t })})${e.type.slice(
                        5
                      )}`
                    : e.type + (t && e.name ? ` ${e.name}` : "");
                })(e, { includeName: t })
              )
              .join(t ? ", " : ",")
          : "";
      }
    },
    23008: (e, t, n) => {
      "use strict";
      n.d(t, { iY: () => c });
      var i = n(99702),
        r = n(32840),
        a = n(81757),
        s = n(399),
        o = n(21135);
      function c(e) {
        let t,
          { abi: n, args: c = [], name: u } = e,
          l = (0, r.q)(u, { strict: !1 }),
          d = n.filter((e) =>
            l
              ? "function" === e.type
                ? (0, o.V)(e) === u
                : "event" === e.type && (0, s.h)(e) === u
              : "name" in e && e.name === u
          );
        if (0 !== d.length) {
          if (1 === d.length) return d[0];
          for (let e of d) {
            if ("inputs" in e) {
              if (!c || 0 === c.length) {
                if (!e.inputs || 0 === e.inputs.length) return e;
                continue;
              }
              if (
                e.inputs &&
                0 !== e.inputs.length &&
                e.inputs.length === c.length &&
                c.every((t, n) => {
                  let i = "inputs" in e && e.inputs[n];
                  return (
                    !!i &&
                    (function e(t, n) {
                      let i = typeof t,
                        r = n.type;
                      switch (r) {
                        case "address":
                          return (0, a.P)(t, { strict: !1 });
                        case "bool":
                          return "boolean" === i;
                        case "function":
                        case "string":
                          return "string" === i;
                        default:
                          if ("tuple" === r && "components" in n)
                            return Object.values(n.components).every((n, i) =>
                              e(Object.values(t)[i], n)
                            );
                          if (
                            /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(
                              r
                            )
                          )
                            return "number" === i || "bigint" === i;
                          if (/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(r))
                            return "string" === i || t instanceof Uint8Array;
                          if (/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(r))
                            return (
                              Array.isArray(t) &&
                              t.every((t) =>
                                e(t, {
                                  ...n,
                                  type: r.replace(/(\[[0-9]{0,}\])$/, ""),
                                })
                              )
                            );
                          return !1;
                      }
                    })(t, i)
                  );
                })
              ) {
                if (t && "inputs" in t && t.inputs) {
                  let n = (function e(t, n, i) {
                    for (let r in t) {
                      let s = t[r],
                        o = n[r];
                      if (
                        "tuple" === s.type &&
                        "tuple" === o.type &&
                        "components" in s &&
                        "components" in o
                      )
                        return e(s.components, o.components, i[r]);
                      let c = [s.type, o.type];
                      if (
                        (c.includes("address") && c.includes("bytes20")) ||
                        (((c.includes("address") && c.includes("string")) ||
                          (c.includes("address") && c.includes("bytes"))) &&
                          (0, a.P)(i[r], { strict: !1 }))
                      )
                        return c;
                    }
                  })(e.inputs, t.inputs, c);
                  if (n)
                    throw new i.nM(
                      { abiItem: e, type: n[0] },
                      { abiItem: t, type: n[1] }
                    );
                }
                t = e;
              }
            }
          }
          return t || d[0];
        }
      }
    },
    25507: (e, t, n) => {
      "use strict";
      n.d(t, { yH: () => u });
      var i = n(36444),
        r = n(58980),
        a = n(4805),
        s = n(81757),
        o = n(67622);
      function c(e) {
        if (e && 0 !== e.length)
          return e.reduce((e, { slot: t, value: n }) => {
            if (66 !== t.length)
              throw new r.NV({ size: t.length, targetSize: 66, type: "hex" });
            if (66 !== n.length)
              throw new r.NV({ size: n.length, targetSize: 66, type: "hex" });
            return (e[t] = n), e;
          }, {});
      }
      function u(e) {
        if (!e) return;
        let t = {};
        for (let { address: n, ...r } of e) {
          if (!(0, s.P)(n, { strict: !1 })) throw new i.M({ address: n });
          if (t[n]) throw new a.Hi({ address: n });
          t[n] = (function (e) {
            let { balance: t, nonce: n, state: i, stateDiff: r, code: s } = e,
              u = {};
            if (
              (void 0 !== s && (u.code = s),
              void 0 !== t && (u.balance = (0, o.cK)(t)),
              void 0 !== n && (u.nonce = (0, o.cK)(n)),
              void 0 !== i && (u.state = c(i)),
              void 0 !== r)
            ) {
              if (u.state) throw new a.ft();
              u.stateDiff = c(r);
            }
            return u;
          })(r);
        }
        return t;
      }
    },
    26259: (e, t, n) => {
      "use strict";
      let i;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.GoogleAnalytics = function (e) {
          let {
            gaId: t,
            debugMode: n,
            dataLayerName: o = "dataLayer",
            nonce: c,
          } = e;
          return (
            void 0 === i && (i = o),
            (0, a.useEffect)(() => {
              performance.mark("mark_feature_usage", {
                detail: { feature: "next-third-parties-ga" },
              });
            }, []),
            (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(s.default, {
                  id: "_next-ga-init",
                  dangerouslySetInnerHTML: {
                    __html: "\n          window['"
                      .concat(o, "'] = window['")
                      .concat(
                        o,
                        "'] || [];\n          function gtag(){window['"
                      )
                      .concat(
                        o,
                        "'].push(arguments);}\n          gtag('js', new Date());\n\n          gtag('config', '"
                      )
                      .concat(t, "' ")
                      .concat(n ? ",{ 'debug_mode': true }" : "", ");"),
                  },
                  nonce: c,
                }),
                (0, r.jsx)(s.default, {
                  id: "_next-ga",
                  src: "https://www.googletagmanager.com/gtag/js?id=".concat(t),
                  nonce: c,
                }),
              ],
            })
          );
        }),
        (t.sendGAEvent = function () {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          if (void 0 === i)
            return void console.warn(
              "@next/third-parties: GA has not been initialized"
            );
          window[i]
            ? window[i].push(arguments)
            : console.warn(
                "@next/third-parties: GA dataLayer ".concat(
                  i,
                  " does not exist"
                )
              );
        });
      let r = n(95155),
        a = n(12115),
        s = (function (e) {
          return e && e.__esModule ? e : { default: e };
        })(n(63554));
    },
    29995: (e, t, n) => {
      "use strict";
      n.d(t, { J9: () => a, Mc: () => r, fD: () => i });
      let i = {
          1: "An `assert` condition failed.",
          17: "Arithmetic operation resulted in underflow or overflow.",
          18: "Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",
          33: "Attempted to convert to an invalid type.",
          34: "Attempted to access a storage byte array that is incorrectly encoded.",
          49: "Performed `.pop()` on an empty array",
          50: "Array index is out of bounds.",
          65: "Allocated too much memory or created an array which is too large.",
          81: "Attempted to call a zero-initialized variable of internal function type.",
        },
        r = {
          inputs: [{ name: "message", type: "string" }],
          name: "Error",
          type: "error",
        },
        a = {
          inputs: [{ name: "reason", type: "uint256" }],
          name: "Panic",
          type: "error",
        };
    },
    30445: (e, t, n) => {
      "use strict";
      n.d(t, { EH: () => a, YE: () => o, jF: () => s, rj: () => r });
      var i = n(7441);
      class r extends i.C {
        constructor({ blockNumber: e, chain: t, contract: n }) {
          super(`Chain "${t.name}" does not support contract "${n.name}".`, {
            metaMessages: [
              "This could be due to any of the following:",
              ...(e && n.blockCreated && n.blockCreated > e
                ? [
                    `- The contract "${n.name}" was not deployed until block ${n.blockCreated} (current block ${e}).`,
                  ]
                : [
                    `- The chain does not have the contract "${n.name}" configured.`,
                  ]),
            ],
            name: "ChainDoesNotSupportContract",
          });
        }
      }
      class a extends i.C {
        constructor({ chain: e, currentChainId: t }) {
          super(
            `The current chain of the wallet (id: ${t}) does not match the target chain for the transaction (id: ${e.id} – ${e.name}).`,
            {
              metaMessages: [
                `Current Chain ID:  ${t}`,
                `Expected Chain ID: ${e.id} – ${e.name}`,
              ],
              name: "ChainMismatchError",
            }
          );
        }
      }
      class s extends i.C {
        constructor() {
          super(
            "No chain was provided to the request.\nPlease provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient.",
            { name: "ChainNotFoundError" }
          );
        }
      }
      class o extends i.C {
        constructor() {
          super("No chain was provided to the Client.", {
            name: "ClientChainNotConfiguredError",
          });
        }
      }
      i.C;
    },
    34560: (e, t, n) => {
      "use strict";
      n.d(t, { $: () => o, s: () => s });
      var i = n(7165),
        r = n(57948),
        a = n(6784),
        s = class extends r.k {
          #s;
          #o;
          #c;
          constructor(e) {
            super(),
              (this.mutationId = e.mutationId),
              (this.#o = e.mutationCache),
              (this.#s = []),
              (this.state = e.state || o()),
              this.setOptions(e.options),
              this.scheduleGc();
          }
          setOptions(e) {
            (this.options = e), this.updateGcTime(this.options.gcTime);
          }
          get meta() {
            return this.options.meta;
          }
          addObserver(e) {
            this.#s.includes(e) ||
              (this.#s.push(e),
              this.clearGcTimeout(),
              this.#o.notify({
                type: "observerAdded",
                mutation: this,
                observer: e,
              }));
          }
          removeObserver(e) {
            (this.#s = this.#s.filter((t) => t !== e)),
              this.scheduleGc(),
              this.#o.notify({
                type: "observerRemoved",
                mutation: this,
                observer: e,
              });
          }
          optionalRemove() {
            this.#s.length ||
              ("pending" === this.state.status
                ? this.scheduleGc()
                : this.#o.remove(this));
          }
          continue() {
            return this.#c?.continue() ?? this.execute(this.state.variables);
          }
          async execute(e) {
            let t = () => {
              this.#u({ type: "continue" });
            };
            this.#c = (0, a.II)({
              fn: () =>
                this.options.mutationFn
                  ? this.options.mutationFn(e)
                  : Promise.reject(Error("No mutationFn found")),
              onFail: (e, t) => {
                this.#u({ type: "failed", failureCount: e, error: t });
              },
              onPause: () => {
                this.#u({ type: "pause" });
              },
              onContinue: t,
              retry: this.options.retry ?? 0,
              retryDelay: this.options.retryDelay,
              networkMode: this.options.networkMode,
              canRun: () => this.#o.canRun(this),
            });
            let n = "pending" === this.state.status,
              i = !this.#c.canStart();
            try {
              if (n) t();
              else {
                this.#u({ type: "pending", variables: e, isPaused: i }),
                  await this.#o.config.onMutate?.(e, this);
                let t = await this.options.onMutate?.(e);
                t !== this.state.context &&
                  this.#u({
                    type: "pending",
                    context: t,
                    variables: e,
                    isPaused: i,
                  });
              }
              let r = await this.#c.start();
              return (
                await this.#o.config.onSuccess?.(
                  r,
                  e,
                  this.state.context,
                  this
                ),
                await this.options.onSuccess?.(r, e, this.state.context),
                await this.#o.config.onSettled?.(
                  r,
                  null,
                  this.state.variables,
                  this.state.context,
                  this
                ),
                await this.options.onSettled?.(r, null, e, this.state.context),
                this.#u({ type: "success", data: r }),
                r
              );
            } catch (t) {
              try {
                throw (
                  (await this.#o.config.onError?.(
                    t,
                    e,
                    this.state.context,
                    this
                  ),
                  await this.options.onError?.(t, e, this.state.context),
                  await this.#o.config.onSettled?.(
                    void 0,
                    t,
                    this.state.variables,
                    this.state.context,
                    this
                  ),
                  await this.options.onSettled?.(
                    void 0,
                    t,
                    e,
                    this.state.context
                  ),
                  t)
                );
              } finally {
                this.#u({ type: "error", error: t });
              }
            } finally {
              this.#o.runNext(this);
            }
          }
          #u(e) {
            (this.state = ((t) => {
              switch (e.type) {
                case "failed":
                  return {
                    ...t,
                    failureCount: e.failureCount,
                    failureReason: e.error,
                  };
                case "pause":
                  return { ...t, isPaused: !0 };
                case "continue":
                  return { ...t, isPaused: !1 };
                case "pending":
                  return {
                    ...t,
                    context: e.context,
                    data: void 0,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    isPaused: e.isPaused,
                    status: "pending",
                    variables: e.variables,
                    submittedAt: Date.now(),
                  };
                case "success":
                  return {
                    ...t,
                    data: e.data,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    status: "success",
                    isPaused: !1,
                  };
                case "error":
                  return {
                    ...t,
                    data: void 0,
                    error: e.error,
                    failureCount: t.failureCount + 1,
                    failureReason: e.error,
                    isPaused: !1,
                    status: "error",
                  };
              }
            })(this.state)),
              i.jG.batch(() => {
                this.#s.forEach((t) => {
                  t.onMutationUpdate(e);
                }),
                  this.#o.notify({
                    mutation: this,
                    type: "updated",
                    action: e,
                  });
              });
          }
        };
      function o() {
        return {
          context: void 0,
          data: void 0,
          error: null,
          failureCount: 0,
          failureReason: null,
          isPaused: !1,
          status: "idle",
          variables: void 0,
          submittedAt: 0,
        };
      }
    },
    35020: (e, t, n) => {
      "use strict";
      n.d(t, { l: () => a });
      var i = n(7441),
        r = n(42264);
      function a(e, t) {
        let n = (e.details || "").toLowerCase(),
          a = e instanceof i.C ? e.walk((e) => e?.code === r.A7.code) : e;
        return a instanceof i.C
          ? new r.A7({ cause: e, message: a.details })
          : r.A7.nodeMessage.test(n)
          ? new r.A7({ cause: e, message: e.details })
          : r.BG.nodeMessage.test(n)
          ? new r.BG({ cause: e, maxFeePerGas: t?.maxFeePerGas })
          : r.jj.nodeMessage.test(n)
          ? new r.jj({ cause: e, maxFeePerGas: t?.maxFeePerGas })
          : r.K0.nodeMessage.test(n)
          ? new r.K0({ cause: e, nonce: t?.nonce })
          : r.Oh.nodeMessage.test(n)
          ? new r.Oh({ cause: e, nonce: t?.nonce })
          : r.vW.nodeMessage.test(n)
          ? new r.vW({ cause: e, nonce: t?.nonce })
          : r.k5.nodeMessage.test(n)
          ? new r.k5({ cause: e })
          : r.lY.nodeMessage.test(n)
          ? new r.lY({ cause: e, gas: t?.gas })
          : r.Fo.nodeMessage.test(n)
          ? new r.Fo({ cause: e, gas: t?.gas })
          : r.uC.nodeMessage.test(n)
          ? new r.uC({ cause: e })
          : r.lN.nodeMessage.test(n)
          ? new r.lN({
              cause: e,
              maxFeePerGas: t?.maxFeePerGas,
              maxPriorityFeePerGas: t?.maxPriorityFeePerGas,
            })
          : new r.RM({ cause: e });
      }
    },
    35109: (e, t, n) => {
      "use strict";
      n.d(t, {
        zX: () => y,
        bG: () => b,
        M: () => w,
        rR: () => v,
        Po: () => C,
        $S: () => x,
      });
      var i = n(19405),
        r = n(29995),
        a = n(47826),
        s = n(21159),
        o = n(79183);
      function c({
        abiItem: e,
        args: t,
        includeFunctionName: n = !0,
        includeName: i = !1,
      }) {
        if ("name" in e && "inputs" in e && e.inputs)
          return `${n ? e.name : ""}(${e.inputs
            .map(
              (e, n) =>
                `${i && e.name ? `${e.name}: ` : ""}${
                  "object" == typeof t[n] ? (0, o.A)(t[n]) : t[n]
                }`
            )
            .join(", ")})`;
      }
      var u = n(23008),
        l = n(44494),
        d = n(31942),
        h = n(99702),
        f = n(7441),
        p = n(4805),
        m = n(69432),
        g = n(41514);
      class y extends f.C {
        constructor(
          e,
          {
            account: t,
            docsPath: n,
            chain: r,
            data: a,
            gas: s,
            gasPrice: o,
            maxFeePerGas: c,
            maxPriorityFeePerGas: u,
            nonce: h,
            to: f,
            value: g,
            stateOverride: y,
          }
        ) {
          let b = t ? (0, i.J)(t) : void 0,
            w = (0, m.aO)({
              from: b?.address,
              to: f,
              value:
                void 0 !== g &&
                `${(0, l.c)(g)} ${r?.nativeCurrency?.symbol || "ETH"}`,
              data: a,
              gas: s,
              gasPrice: void 0 !== o && `${(0, d.Q)(o)} gwei`,
              maxFeePerGas: void 0 !== c && `${(0, d.Q)(c)} gwei`,
              maxPriorityFeePerGas: void 0 !== u && `${(0, d.Q)(u)} gwei`,
              nonce: h,
            });
          y &&
            (w += `
${(0, p.uj)(y)}`),
            super(e.shortMessage, {
              cause: e,
              docsPath: n,
              metaMessages: [
                ...(e.metaMessages ? [...e.metaMessages, " "] : []),
                "Raw Call Arguments:",
                w,
              ].filter(Boolean),
              name: "CallExecutionError",
            }),
            Object.defineProperty(this, "cause", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.cause = e);
        }
      }
      class b extends f.C {
        constructor(
          e,
          {
            abi: t,
            args: n,
            contractAddress: i,
            docsPath: r,
            functionName: a,
            sender: o,
          }
        ) {
          let l = (0, u.iY)({ abi: t, args: n, name: a }),
            d = l
              ? c({
                  abiItem: l,
                  args: n,
                  includeFunctionName: !1,
                  includeName: !1,
                })
              : void 0,
            h = l ? (0, s.B)(l, { includeName: !0 }) : void 0,
            f = (0, m.aO)({
              address: i && (0, g.R)(i),
              function: h,
              args:
                d &&
                "()" !== d &&
                `${[...Array(a?.length ?? 0).keys()]
                  .map(() => " ")
                  .join("")}${d}`,
              sender: o,
            });
          super(
            e.shortMessage ||
              `An unknown error occurred while executing the contract function "${a}".`,
            {
              cause: e,
              docsPath: r,
              metaMessages: [
                ...(e.metaMessages ? [...e.metaMessages, " "] : []),
                f && "Contract Call:",
                f,
              ].filter(Boolean),
              name: "ContractFunctionExecutionError",
            }
          ),
            Object.defineProperty(this, "abi", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "args", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "cause", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "contractAddress", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "formattedArgs", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "functionName", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "sender", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.abi = t),
            (this.args = n),
            (this.cause = e),
            (this.contractAddress = i),
            (this.functionName = a),
            (this.sender = o);
        }
      }
      class w extends f.C {
        constructor({ abi: e, data: t, functionName: n, message: i }) {
          let o, u, l, d, f;
          if (t && "0x" !== t)
            try {
              let {
                abiItem: n,
                errorName: i,
                args: o,
              } = (f = (0, a.W)({ abi: e, data: t }));
              if ("Error" === i) l = o[0];
              else if ("Panic" === i) {
                let [e] = o;
                l = r.fD[e];
              } else {
                let e = n ? (0, s.B)(n, { includeName: !0 }) : void 0,
                  t =
                    n && o
                      ? c({
                          abiItem: n,
                          args: o,
                          includeFunctionName: !1,
                          includeName: !1,
                        })
                      : void 0;
                u = [
                  e ? `Error: ${e}` : "",
                  t && "()" !== t
                    ? `       ${[...Array(i?.length ?? 0).keys()]
                        .map(() => " ")
                        .join("")}${t}`
                    : "",
                ];
              }
            } catch (e) {
              o = e;
            }
          else i && (l = i);
          o instanceof h.Wq &&
            ((d = o.signature),
            (u = [
              `Unable to decode signature "${d}" as it was not found on the provided ABI.`,
              "Make sure you are using the correct ABI and that the error exists on it.",
              `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${d}.`,
            ])),
            super(
              (l && "execution reverted" !== l) || d
                ? [
                    `The contract function "${n}" reverted with the following ${
                      d ? "signature" : "reason"
                    }:`,
                    l || d,
                  ].join("\n")
                : `The contract function "${n}" reverted.`,
              {
                cause: o,
                metaMessages: u,
                name: "ContractFunctionRevertedError",
              }
            ),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "raw", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "reason", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "signature", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.data = f),
            (this.raw = t),
            (this.reason = l),
            (this.signature = d);
        }
      }
      class v extends f.C {
        constructor({ functionName: e }) {
          super(`The contract function "${e}" returned no data ("0x").`, {
            metaMessages: [
              "This could be due to any of the following:",
              `  - The contract does not have the function "${e}",`,
              "  - The parameters passed to the contract function may be invalid, or",
              "  - The address is not a contract.",
            ],
            name: "ContractFunctionZeroDataError",
          });
        }
      }
      class C extends f.C {
        constructor({ factory: e }) {
          super(
            `Deployment for counterfactual contract call failed${
              e ? ` for factory "${e}".` : ""
            }`,
            {
              metaMessages: [
                "Please ensure:",
                "- The `factory` is a valid contract deployment factory (ie. Create2 Factory, ERC-4337 Factory, etc).",
                "- The `factoryData` is a valid encoded function call for contract deployment function on the factory.",
              ],
              name: "CounterfactualDeploymentFailedError",
            }
          );
        }
      }
      class x extends f.C {
        constructor({ data: e, message: t }) {
          super(t || "", { name: "RawContractError" }),
            Object.defineProperty(this, "code", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 3,
            }),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.data = e);
        }
      }
    },
    35451: (e, t, n) => {
      "use strict";
      n.d(t, { S: () => a });
      var i = n(77752),
        r = n(90113);
      async function a(e, t) {
        let { addEthereumChainParameter: n, chainId: a } = t,
          s = e.state.connections.get(t.connector?.uid ?? e.state.current);
        if (s) {
          let e = s.connector;
          if (!e.switchChain) throw new r.V({ connector: e });
          return await e.switchChain({
            addEthereumChainParameter: n,
            chainId: a,
          });
        }
        let o = e.chains.find((e) => e.id === a);
        if (!o) throw new i.nk();
        return e.setState((e) => ({ ...e, chainId: a })), o;
      }
    },
    38697: (e, t, n) => {
      "use strict";
      n.d(t, { BD: () => i, Ge: () => r });
      let i = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
        r =
          /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
    },
    42714: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "setAttributesFromProps", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let n = {
          acceptCharset: "accept-charset",
          className: "class",
          htmlFor: "for",
          httpEquiv: "http-equiv",
          noModule: "noModule",
        },
        i = [
          "onLoad",
          "onReady",
          "dangerouslySetInnerHTML",
          "children",
          "onError",
          "strategy",
          "stylesheets",
        ];
      function r(e) {
        return ["async", "defer", "noModule"].includes(e);
      }
      function a(e, t) {
        for (let [a, s] of Object.entries(t)) {
          if (!t.hasOwnProperty(a) || i.includes(a) || void 0 === s) continue;
          let o = n[a] || a.toLowerCase();
          "SCRIPT" === e.tagName && r(o)
            ? (e[o] = !!s)
            : e.setAttribute(o, String(s)),
            (!1 === s ||
              ("SCRIPT" === e.tagName && r(o) && (!s || "false" === s))) &&
              (e.setAttribute(o, ""), e.removeAttribute(o));
        }
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    43935: (e, t, n) => {
      "use strict";
      n.d(t, { n: () => m });
      var i = n(99702),
        r = n(35883),
        a = n(87456),
        s = n(87094),
        o = n(93727),
        c = n(54335),
        u = n(94201),
        l = n(27493),
        d = n(67622);
      function h(e, t = {}) {
        void 0 !== t.size && (0, l.Sl)(e, { size: t.size });
        let n = (0, d.My)(e, t);
        return (0, l.ME)(n, t);
      }
      var f = n(80844),
        p = n(13423);
      function m(e, t) {
        let n = "string" == typeof t ? (0, f.aT)(t) : t,
          m = (0, a.l)(n);
        if (0 === (0, s.E)(n) && e.length > 0) throw new i.O();
        if ((0, s.E)(t) && 32 > (0, s.E)(t))
          throw new i.Iy({
            data: "string" == typeof t ? t : (0, d.My)(t),
            params: e,
            size: (0, s.E)(t),
          });
        let y = 0,
          b = [];
        for (let t = 0; t < e.length; ++t) {
          let n = e[t];
          m.setPosition(y);
          let [a, s] = (function e(t, n, { staticPosition: a }) {
            let s = (0, p.k)(n.type);
            if (s) {
              let [i, r] = s;
              return (function (t, n, { length: i, staticPosition: r }) {
                if (!i) {
                  let i = r + h(t.readBytes(32)),
                    a = i + 32;
                  t.setPosition(i);
                  let s = h(t.readBytes(32)),
                    o = g(n),
                    c = 0,
                    u = [];
                  for (let i = 0; i < s; ++i) {
                    t.setPosition(a + (o ? 32 * i : c));
                    let [r, s] = e(t, n, { staticPosition: a });
                    (c += s), u.push(r);
                  }
                  return t.setPosition(r + 32), [u, 32];
                }
                if (g(n)) {
                  let a = r + h(t.readBytes(32)),
                    s = [];
                  for (let r = 0; r < i; ++r) {
                    t.setPosition(a + 32 * r);
                    let [i] = e(t, n, { staticPosition: a });
                    s.push(i);
                  }
                  return t.setPosition(r + 32), [s, 32];
                }
                let a = 0,
                  s = [];
                for (let o = 0; o < i; ++o) {
                  let [i, o] = e(t, n, { staticPosition: r + a });
                  (a += o), s.push(i);
                }
                return [s, a];
              })(t, { ...n, type: r }, { length: i, staticPosition: a });
            }
            if ("tuple" === n.type)
              return (function (t, n, { staticPosition: i }) {
                let r =
                    0 === n.components.length ||
                    n.components.some(({ name: e }) => !e),
                  a = r ? [] : {},
                  s = 0;
                if (g(n)) {
                  let o = i + h(t.readBytes(32));
                  for (let i = 0; i < n.components.length; ++i) {
                    let c = n.components[i];
                    t.setPosition(o + s);
                    let [u, l] = e(t, c, { staticPosition: o });
                    (s += l), (a[r ? i : c?.name] = u);
                  }
                  return t.setPosition(i + 32), [a, 32];
                }
                for (let o = 0; o < n.components.length; ++o) {
                  let c = n.components[o],
                    [u, l] = e(t, c, { staticPosition: i });
                  (a[r ? o : c?.name] = u), (s += l);
                }
                return [a, s];
              })(t, n, { staticPosition: a });
            if ("address" === n.type) {
              var f = t;
              let e = f.readBytes(32);
              return [(0, r.o)((0, d.My)((0, o.A1)(e, -20))), 32];
            }
            if ("bool" === n.type)
              return [
                (function (e, t = {}) {
                  let n = e;
                  if (
                    (void 0 !== t.size &&
                      ((0, l.Sl)(n, { size: t.size }), (n = (0, c.B)(n))),
                    n.length > 1 || n[0] > 1)
                  )
                    throw new u.xO(n);
                  return !!n[0];
                })(t.readBytes(32), { size: 32 }),
                32,
              ];
            if (n.type.startsWith("bytes"))
              return (function (e, t, { staticPosition: n }) {
                let [i, r] = t.type.split("bytes");
                if (!r) {
                  let t = h(e.readBytes(32));
                  e.setPosition(n + t);
                  let i = h(e.readBytes(32));
                  if (0 === i) return e.setPosition(n + 32), ["0x", 32];
                  let r = e.readBytes(i);
                  return e.setPosition(n + 32), [(0, d.My)(r), 32];
                }
                return [(0, d.My)(e.readBytes(Number.parseInt(r), 32)), 32];
              })(t, n, { staticPosition: a });
            if (n.type.startsWith("uint") || n.type.startsWith("int")) {
              var m = t,
                y = n;
              let e = y.type.startsWith("int"),
                i = Number.parseInt(y.type.split("int")[1] || "256"),
                r = m.readBytes(32);
              return [
                i > 48
                  ? (function (e, t = {}) {
                      void 0 !== t.size && (0, l.Sl)(e, { size: t.size });
                      let n = (0, d.My)(e, t);
                      return (0, l.uU)(n, t);
                    })(r, { signed: e })
                  : h(r, { signed: e }),
                32,
              ];
            }
            if ("string" === n.type)
              return (function (e, { staticPosition: t }) {
                let n = h(e.readBytes(32));
                e.setPosition(t + n);
                let i = h(e.readBytes(32));
                if (0 === i) return e.setPosition(t + 32), ["", 32];
                let r = e.readBytes(i, 32),
                  a = (function (e, t = {}) {
                    let n = e;
                    return (
                      void 0 !== t.size &&
                        ((0, l.Sl)(n, { size: t.size }),
                        (n = (0, c.B)(n, { dir: "right" }))),
                      new TextDecoder().decode(n)
                    );
                  })((0, c.B)(r));
                return e.setPosition(t + 32), [a, 32];
              })(t, { staticPosition: a });
            throw new i.j(n.type, {
              docsPath: "/docs/contract/decodeAbiParameters",
            });
          })(m, n, { staticPosition: 0 });
          (y += s), b.push(a);
        }
        return b;
      }
      function g(e) {
        let { type: t } = e;
        if ("string" === t || "bytes" === t || t.endsWith("[]")) return !0;
        if ("tuple" === t) return e.components?.some(g);
        let n = (0, p.k)(e.type);
        return !!(n && g({ ...e, type: n[1] }));
      }
    },
    44202: () => {},
    44494: (e, t, n) => {
      "use strict";
      n.d(t, { c: () => a });
      var i = n(77136),
        r = n(1405);
      function a(e, t = "wei") {
        return (0, r.J)(e, i.eL[t]);
      }
    },
    47826: (e, t, n) => {
      "use strict";
      n.d(t, { W: () => u });
      var i = n(29995),
        r = n(99702),
        a = n(93727),
        s = n(21135),
        o = n(43935),
        c = n(21159);
      function u(e) {
        let { abi: t, data: n } = e,
          u = (0, a.di)(n, 0, 4);
        if ("0x" === u) throw new r.O();
        let l = [...(t || []), i.Mc, i.J9].find(
          (e) => "error" === e.type && u === (0, s.V)((0, c.B)(e))
        );
        if (!l)
          throw new r.Wq(u, { docsPath: "/docs/contract/decodeErrorResult" });
        return {
          abiItem: l,
          args:
            "inputs" in l && l.inputs && l.inputs.length > 0
              ? (0, o.n)(l.inputs, (0, a.di)(n, 4))
              : void 0,
          errorName: l.name,
        };
      }
    },
    52816: (e) => {
      e.exports = {
        style: {
          fontFamily: "'Oxanium', 'Oxanium Fallback'",
          fontStyle: "normal",
        },
        className: "__className_64c3a5",
        variable: "__variable_64c3a5",
      };
    },
    56817: (e, t, n) => {
      "use strict";
      n.d(t, { wE: () => o, XB: () => u });
      var i = n(99671);
      function r(e, t) {
        return e.slice(0, t).join(".") || ".";
      }
      function a(e, t) {
        let { length: n } = e;
        for (let i = 0; i < n; ++i) if (e[i] === t) return i + 1;
        return 0;
      }
      function s(e, t, n, i) {
        return JSON.stringify(
          e,
          (function (e, t) {
            let n = "function" == typeof e,
              i = "function" == typeof t,
              s = [],
              o = [];
            return function (c, u) {
              if ("object" == typeof u)
                if (s.length) {
                  let e = a(s, this);
                  0 === e ? (s[s.length] = this) : (s.splice(e), o.splice(e)),
                    (o[o.length] = c);
                  let n = a(s, u);
                  if (0 !== n)
                    return i ? t.call(this, c, u, r(o, n)) : `[ref=${r(o, n)}]`;
                } else (s[0] = u), (o[0] = c);
              return n ? e.call(this, c, u) : u;
            };
          })((e, n) => {
            let i = n;
            return (
              "bigint" == typeof i &&
                (i = { __type: "bigint", value: n.toString() }),
              i instanceof Map &&
                (i = { __type: "Map", value: Array.from(n.entries()) }),
              t?.(e, i) ?? i
            );
          }, i),
          n ?? void 0
        );
      }
      function o(e) {
        let {
          deserialize: t = i.i,
          key: n = "wagmi",
          serialize: r = s,
          storage: a = c,
        } = e;
        function o(e) {
          return e instanceof Promise ? e.then((e) => e).catch(() => null) : e;
        }
        return {
          ...a,
          key: n,
          async getItem(e, i) {
            let r = a.getItem(`${n}.${e}`),
              s = await o(r);
            return s ? t(s) ?? null : i ?? null;
          },
          async setItem(e, t) {
            let i = `${n}.${e}`;
            null === t ? await o(a.removeItem(i)) : await o(a.setItem(i, r(t)));
          },
          async removeItem(e) {
            await o(a.removeItem(`${n}.${e}`));
          },
        };
      }
      let c = { getItem: () => null, setItem: () => {}, removeItem: () => {} };
      function u() {
        let e =
          "undefined" != typeof window && window.localStorage
            ? window.localStorage
            : c;
        return {
          getItem: (t) => e.getItem(t),
          removeItem(t) {
            e.removeItem(t);
          },
          setItem(t, n) {
            try {
              e.setItem(t, n);
            } catch {}
          },
        };
      }
    },
    57394: (e, t, n) => {
      "use strict";
      n.d(t, { T2: () => a, iM: () => r });
      var i = n(99671);
      let r = {
        getItem: (e) =>
          "undefined" == typeof window ? null : s(document.cookie, e) ?? null,
        setItem(e, t) {
          "undefined" != typeof window &&
            (document.cookie = `${e}=${t};path=/;samesite=Lax`);
        },
        removeItem(e) {
          "undefined" != typeof window &&
            (document.cookie = `${e}=;max-age=-1;path=/`);
        },
      };
      function a(e, t) {
        if (!t) return;
        let n = s(t, `${e.storage?.key}.store`);
        if (n) return (0, i.i)(n).state;
      }
      function s(e, t) {
        let n = e.split("; ").find((e) => e.startsWith(`${t}=`));
        if (n) return n.substring(t.length + 1);
      }
    },
    58930: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          let {
            html: t,
            height: n = null,
            width: a = null,
            children: s,
            dataNtpc: o = "",
          } = e;
          return (
            (0, r.useEffect)(() => {
              o &&
                performance.mark("mark_feature_usage", {
                  detail: { feature: "next-third-parties-".concat(o) },
                });
            }, [o]),
            (0, i.jsxs)(i.Fragment, {
              children: [
                s,
                t
                  ? (0, i.jsx)("div", {
                      style: {
                        height: null != n ? "".concat(n, "px") : "auto",
                        width: null != a ? "".concat(a, "px") : "auto",
                      },
                      "data-ntpc": o,
                      dangerouslySetInnerHTML: { __html: t },
                    })
                  : null,
              ],
            })
          );
        });
      let i = n(95155),
        r = n(12115);
    },
    59126: (e, t, n) => {
      "use strict";
      function i(e, t) {
        let n = e.exec(t);
        return n?.groups;
      }
      n.d(t, { BD: () => r, Ge: () => a, Yv: () => i, wj: () => s });
      let r = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
        a =
          /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/,
        s = /^\(.+?\).*?$/;
    },
    60367: (e, t, n) => {
      "use strict";
      n.d(t, { p: () => l });
      var i = n(79731),
        r = n(13423),
        a = n(99702),
        s = n(21135),
        o = n(21159),
        c = n(23008);
      let u = "/docs/contract/encodeFunctionData";
      function l(e) {
        let { args: t } = e,
          { abi: n, functionName: l } = (() => {
            if (1 === e.abi.length && e.functionName?.startsWith("0x"))
              return e;
            let { abi: t, args: n, functionName: i } = e,
              r = t[0];
            if (i) {
              let e = (0, c.iY)({ abi: t, args: n, name: i });
              if (!e) throw new a.Iz(i, { docsPath: u });
              r = e;
            }
            if ("function" !== r.type) throw new a.Iz(void 0, { docsPath: u });
            return { abi: [r], functionName: (0, s.V)((0, o.B)(r)) };
          })(),
          d = n[0],
          h = "inputs" in d && d.inputs ? (0, r.h)(d.inputs, t ?? []) : void 0;
        return (0, i.aP)([l, h ?? "0x"]);
      }
    },
    63554: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => r.a });
      var i = n(69243),
        r = n.n(i),
        a = {};
      for (let e in i) "default" !== e && (a[e] = () => i[e]);
      n.d(t, a);
    },
    65358: (e, t, n) => {
      "use strict";
      n.d(t, { c: () => u });
      var i = n(19405);
      let r = 2n ** 256n - 1n;
      var a = n(36444),
        s = n(42264),
        o = n(69432),
        c = n(81757);
      function u(e) {
        let {
            account: t,
            gasPrice: n,
            maxFeePerGas: u,
            maxPriorityFeePerGas: l,
            to: d,
          } = e,
          h = t ? (0, i.J)(t) : void 0;
        if (h && !(0, c.P)(h.address)) throw new a.M({ address: h.address });
        if (d && !(0, c.P)(d)) throw new a.M({ address: d });
        if (void 0 !== n && (void 0 !== u || void 0 !== l)) throw new o.n3();
        if (u && u > r) throw new s.BG({ maxFeePerGas: u });
        if (l && u && l > u)
          throw new s.lN({ maxFeePerGas: u, maxPriorityFeePerGas: l });
      }
    },
    66298: () => {},
    69243: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          default: function () {
            return b;
          },
          handleClientScriptLoad: function () {
            return m;
          },
          initScriptLoader: function () {
            return g;
          },
        });
      let i = n(88229),
        r = n(6966),
        a = n(95155),
        s = i._(n(47650)),
        o = r._(n(12115)),
        c = n(82830),
        u = n(42714),
        l = n(92374),
        d = new Map(),
        h = new Set(),
        f = (e) => {
          if (s.default.preinit)
            return void e.forEach((e) => {
              s.default.preinit(e, { as: "style" });
            });
          {
            let t = document.head;
            e.forEach((e) => {
              let n = document.createElement("link");
              (n.type = "text/css"),
                (n.rel = "stylesheet"),
                (n.href = e),
                t.appendChild(n);
            });
          }
        },
        p = (e) => {
          let {
              src: t,
              id: n,
              onLoad: i = () => {},
              onReady: r = null,
              dangerouslySetInnerHTML: a,
              children: s = "",
              strategy: o = "afterInteractive",
              onError: c,
              stylesheets: l,
            } = e,
            p = n || t;
          if (p && h.has(p)) return;
          if (d.has(t)) {
            h.add(p), d.get(t).then(i, c);
            return;
          }
          let m = () => {
              r && r(), h.add(p);
            },
            g = document.createElement("script"),
            y = new Promise((e, t) => {
              g.addEventListener("load", function (t) {
                e(), i && i.call(this, t), m();
              }),
                g.addEventListener("error", function (e) {
                  t(e);
                });
            }).catch(function (e) {
              c && c(e);
            });
          a
            ? ((g.innerHTML = a.__html || ""), m())
            : s
            ? ((g.textContent =
                "string" == typeof s ? s : Array.isArray(s) ? s.join("") : ""),
              m())
            : t && ((g.src = t), d.set(t, y)),
            (0, u.setAttributesFromProps)(g, e),
            "worker" === o && g.setAttribute("type", "text/partytown"),
            g.setAttribute("data-nscript", o),
            l && f(l),
            document.body.appendChild(g);
        };
      function m(e) {
        let { strategy: t = "afterInteractive" } = e;
        "lazyOnload" === t
          ? window.addEventListener("load", () => {
              (0, l.requestIdleCallback)(() => p(e));
            })
          : p(e);
      }
      function g(e) {
        e.forEach(m),
          [
            ...document.querySelectorAll('[data-nscript="beforeInteractive"]'),
            ...document.querySelectorAll('[data-nscript="beforePageRender"]'),
          ].forEach((e) => {
            let t = e.id || e.getAttribute("src");
            h.add(t);
          });
      }
      function y(e) {
        let {
            id: t,
            src: n = "",
            onLoad: i = () => {},
            onReady: r = null,
            strategy: u = "afterInteractive",
            onError: d,
            stylesheets: f,
            ...m
          } = e,
          {
            updateScripts: g,
            scripts: y,
            getIsSsr: b,
            appDir: w,
            nonce: v,
          } = (0, o.useContext)(c.HeadManagerContext),
          C = (0, o.useRef)(!1);
        (0, o.useEffect)(() => {
          let e = t || n;
          C.current || (r && e && h.has(e) && r(), (C.current = !0));
        }, [r, t, n]);
        let x = (0, o.useRef)(!1);
        if (
          ((0, o.useEffect)(() => {
            if (!x.current) {
              if ("afterInteractive" === u) p(e);
              else
                "lazyOnload" === u &&
                  ("complete" === document.readyState
                    ? (0, l.requestIdleCallback)(() => p(e))
                    : window.addEventListener("load", () => {
                        (0, l.requestIdleCallback)(() => p(e));
                      }));
              x.current = !0;
            }
          }, [e, u]),
          ("beforeInteractive" === u || "worker" === u) &&
            (g
              ? ((y[u] = (y[u] || []).concat([
                  { id: t, src: n, onLoad: i, onReady: r, onError: d, ...m },
                ])),
                g(y))
              : b && b()
              ? h.add(t || n)
              : b && !b() && p(e)),
          w)
        ) {
          if (
            (f &&
              f.forEach((e) => {
                s.default.preinit(e, { as: "style" });
              }),
            "beforeInteractive" === u)
          )
            if (!n)
              return (
                m.dangerouslySetInnerHTML &&
                  ((m.children = m.dangerouslySetInnerHTML.__html),
                  delete m.dangerouslySetInnerHTML),
                (0, a.jsx)("script", {
                  nonce: v,
                  dangerouslySetInnerHTML: {
                    __html:
                      "(self.__next_s=self.__next_s||[]).push(" +
                      JSON.stringify([0, { ...m, id: t }]) +
                      ")",
                  },
                })
              );
            else
              return (
                s.default.preload(
                  n,
                  m.integrity
                    ? {
                        as: "script",
                        integrity: m.integrity,
                        nonce: v,
                        crossOrigin: m.crossOrigin,
                      }
                    : { as: "script", nonce: v, crossOrigin: m.crossOrigin }
                ),
                (0, a.jsx)("script", {
                  nonce: v,
                  dangerouslySetInnerHTML: {
                    __html:
                      "(self.__next_s=self.__next_s||[]).push(" +
                      JSON.stringify([n, { ...m, id: t }]) +
                      ")",
                  },
                })
              );
          "afterInteractive" === u &&
            n &&
            s.default.preload(
              n,
              m.integrity
                ? {
                    as: "script",
                    integrity: m.integrity,
                    nonce: v,
                    crossOrigin: m.crossOrigin,
                  }
                : { as: "script", nonce: v, crossOrigin: m.crossOrigin }
            );
        }
        return null;
      }
      Object.defineProperty(y, "__nextScript", { value: !0 });
      let b = y;
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    69330: (e, t, n) => {
      "use strict";
      n.d(t, { e: () => o });
      var i = n(99702),
        r = n(43935),
        a = n(23008);
      let s = "/docs/contract/decodeFunctionResult";
      function o(e) {
        let { abi: t, args: n, functionName: o, data: c } = e,
          u = t[0];
        if (o) {
          let e = (0, a.iY)({ abi: t, args: n, name: o });
          if (!e) throw new i.Iz(o, { docsPath: s });
          u = e;
        }
        if ("function" !== u.type) throw new i.Iz(void 0, { docsPath: s });
        if (!u.outputs) throw new i.MR(u.name, { docsPath: s });
        let l = (0, r.n)(u.outputs, c);
        return l && l.length > 1 ? l : l && 1 === l.length ? l[0] : void 0;
      }
    },
    69432: (e, t, n) => {
      "use strict";
      n.d(t, {
        $s: () => u,
        Kc: () => d,
        Kz: () => l,
        Vg: () => c,
        WA: () => h,
        aO: () => s,
        n3: () => o,
      });
      var i = n(44494),
        r = n(31942),
        a = n(7441);
      function s(e) {
        let t = Object.entries(e)
            .map(([e, t]) => (void 0 === t || !1 === t ? null : [e, t]))
            .filter(Boolean),
          n = t.reduce((e, [t]) => Math.max(e, t.length), 0);
        return t.map(([e, t]) => `  ${`${e}:`.padEnd(n + 1)}  ${t}`).join("\n");
      }
      class o extends a.C {
        constructor() {
          super(
            "Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.\nUse `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others.",
            { name: "FeeConflictError" }
          );
        }
      }
      a.C;
      class c extends a.C {
        constructor({ transaction: e }) {
          super("Cannot infer a transaction type from provided transaction.", {
            metaMessages: [
              "Provided Transaction:",
              "{",
              s(e),
              "}",
              "",
              "To infer the type, either provide:",
              "- a `type` to the Transaction, or",
              "- an EIP-1559 Transaction with `maxFeePerGas`, or",
              "- an EIP-2930 Transaction with `gasPrice` & `accessList`, or",
              "- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or",
              "- an EIP-7702 Transaction with `authorizationList`, or",
              "- a Legacy Transaction with `gasPrice`",
            ],
            name: "InvalidSerializableTransactionError",
          });
        }
      }
      a.C, a.C, a.C;
      class u extends a.C {
        constructor(
          e,
          {
            account: t,
            docsPath: n,
            chain: a,
            data: o,
            gas: c,
            gasPrice: u,
            maxFeePerGas: l,
            maxPriorityFeePerGas: d,
            nonce: h,
            to: f,
            value: p,
          }
        ) {
          super(e.shortMessage, {
            cause: e,
            docsPath: n,
            metaMessages: [
              ...(e.metaMessages ? [...e.metaMessages, " "] : []),
              "Request Arguments:",
              s({
                chain: a && `${a?.name} (id: ${a?.id})`,
                from: t?.address,
                to: f,
                value:
                  void 0 !== p &&
                  `${(0, i.c)(p)} ${a?.nativeCurrency?.symbol || "ETH"}`,
                data: o,
                gas: c,
                gasPrice: void 0 !== u && `${(0, r.Q)(u)} gwei`,
                maxFeePerGas: void 0 !== l && `${(0, r.Q)(l)} gwei`,
                maxPriorityFeePerGas: void 0 !== d && `${(0, r.Q)(d)} gwei`,
                nonce: h,
              }),
            ].filter(Boolean),
            name: "TransactionExecutionError",
          }),
            Object.defineProperty(this, "cause", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.cause = e);
        }
      }
      class l extends a.C {
        constructor({
          blockHash: e,
          blockNumber: t,
          blockTag: n,
          hash: i,
          index: r,
        }) {
          let a = "Transaction";
          n &&
            void 0 !== r &&
            (a = `Transaction at block time "${n}" at index "${r}"`),
            e &&
              void 0 !== r &&
              (a = `Transaction at block hash "${e}" at index "${r}"`),
            t &&
              void 0 !== r &&
              (a = `Transaction at block number "${t}" at index "${r}"`),
            i && (a = `Transaction with hash "${i}"`),
            super(`${a} could not be found.`, {
              name: "TransactionNotFoundError",
            });
        }
      }
      class d extends a.C {
        constructor({ hash: e }) {
          super(
            `Transaction receipt with hash "${e}" could not be found. The Transaction may not be processed on a block yet.`,
            { name: "TransactionReceiptNotFoundError" }
          );
        }
      }
      class h extends a.C {
        constructor({ hash: e }) {
          super(
            `Timed out while waiting for transaction with hash "${e}" to be confirmed.`,
            { name: "WaitForTransactionReceiptTimeoutError" }
          );
        }
      }
    },
    72437: (e, t, n) => {
      "use strict";
      n.d(t, { sc: () => l });
      var i = n(2255),
        r = n(26607);
      class a extends r.Vw {
        constructor(e, t, n, i) {
          super(),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.blockLen = e),
            (this.outputLen = t),
            (this.padOffset = n),
            (this.isLE = i),
            (this.buffer = new Uint8Array(e)),
            (this.view = (0, r.O8)(this.buffer));
        }
        update(e) {
          (0, i.CC)(this);
          let { view: t, buffer: n, blockLen: a } = this,
            s = (e = (0, r.ZJ)(e)).length;
          for (let i = 0; i < s; ) {
            let o = Math.min(a - this.pos, s - i);
            if (o === a) {
              let t = (0, r.O8)(e);
              for (; a <= s - i; i += a) this.process(t, i);
              continue;
            }
            n.set(e.subarray(i, i + o), this.pos),
              (this.pos += o),
              (i += o),
              this.pos === a && (this.process(t, 0), (this.pos = 0));
          }
          return (this.length += e.length), this.roundClean(), this;
        }
        digestInto(e) {
          (0, i.CC)(this), (0, i.Ht)(e, this), (this.finished = !0);
          let { buffer: t, view: n, blockLen: a, isLE: s } = this,
            { pos: o } = this;
          (t[o++] = 128),
            this.buffer.subarray(o).fill(0),
            this.padOffset > a - o && (this.process(n, 0), (o = 0));
          for (let e = o; e < a; e++) t[e] = 0;
          !(function (e, t, n, i) {
            if ("function" == typeof e.setBigUint64)
              return e.setBigUint64(t, n, i);
            let r = BigInt(32),
              a = BigInt(0xffffffff),
              s = Number((n >> r) & a),
              o = Number(n & a),
              c = 4 * !!i,
              u = 4 * !i;
            e.setUint32(t + c, s, i), e.setUint32(t + u, o, i);
          })(n, a - 8, BigInt(8 * this.length), s),
            this.process(n, 0);
          let c = (0, r.O8)(e),
            u = this.outputLen;
          if (u % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
          let l = u / 4,
            d = this.get();
          if (l > d.length) throw Error("_sha2: outputLen bigger than state");
          for (let e = 0; e < l; e++) c.setUint32(4 * e, d[e], s);
        }
        digest() {
          let { buffer: e, outputLen: t } = this;
          this.digestInto(e);
          let n = e.slice(0, t);
          return this.destroy(), n;
        }
        _cloneInto(e) {
          e || (e = new this.constructor()), e.set(...this.get());
          let {
            blockLen: t,
            buffer: n,
            length: i,
            finished: r,
            destroyed: a,
            pos: s,
          } = this;
          return (
            (e.length = i),
            (e.pos = s),
            (e.finished = r),
            (e.destroyed = a),
            i % t && e.buffer.set(n),
            e
          );
        }
      }
      let s = new Uint32Array([
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
        o = new Uint32Array([
          0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f,
          0x9b05688c, 0x1f83d9ab, 0x5be0cd19,
        ]),
        c = new Uint32Array(64);
      class u extends a {
        constructor(e = 32) {
          super(64, e, 8, !1),
            (this.A = 0 | o[0]),
            (this.B = 0 | o[1]),
            (this.C = 0 | o[2]),
            (this.D = 0 | o[3]),
            (this.E = 0 | o[4]),
            (this.F = 0 | o[5]),
            (this.G = 0 | o[6]),
            (this.H = 0 | o[7]);
        }
        get() {
          let { A: e, B: t, C: n, D: i, E: r, F: a, G: s, H: o } = this;
          return [e, t, n, i, r, a, s, o];
        }
        set(e, t, n, i, r, a, s, o) {
          (this.A = 0 | e),
            (this.B = 0 | t),
            (this.C = 0 | n),
            (this.D = 0 | i),
            (this.E = 0 | r),
            (this.F = 0 | a),
            (this.G = 0 | s),
            (this.H = 0 | o);
        }
        process(e, t) {
          for (let n = 0; n < 16; n++, t += 4) c[n] = e.getUint32(t, !1);
          for (let e = 16; e < 64; e++) {
            let t = c[e - 15],
              n = c[e - 2],
              i = (0, r.Ow)(t, 7) ^ (0, r.Ow)(t, 18) ^ (t >>> 3),
              a = (0, r.Ow)(n, 17) ^ (0, r.Ow)(n, 19) ^ (n >>> 10);
            c[e] = (a + c[e - 7] + i + c[e - 16]) | 0;
          }
          let { A: n, B: i, C: a, D: o, E: u, F: l, G: d, H: h } = this;
          for (let e = 0; e < 64; e++) {
            var f, p, m, g;
            let t =
                (h +
                  ((0, r.Ow)(u, 6) ^ (0, r.Ow)(u, 11) ^ (0, r.Ow)(u, 25)) +
                  (((f = u) & l) ^ (~f & d)) +
                  s[e] +
                  c[e]) |
                0,
              y =
                (((0, r.Ow)(n, 2) ^ (0, r.Ow)(n, 13) ^ (0, r.Ow)(n, 22)) +
                  (((p = n) & (m = i)) ^ (p & (g = a)) ^ (m & g))) |
                0;
            (h = d),
              (d = l),
              (l = u),
              (u = (o + t) | 0),
              (o = a),
              (a = i),
              (i = n),
              (n = (t + y) | 0);
          }
          (n = (n + this.A) | 0),
            (i = (i + this.B) | 0),
            (a = (a + this.C) | 0),
            (o = (o + this.D) | 0),
            (u = (u + this.E) | 0),
            (l = (l + this.F) | 0),
            (d = (d + this.G) | 0),
            (h = (h + this.H) | 0),
            this.set(n, i, a, o, u, l, d, h);
        }
        roundClean() {
          c.fill(0);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
        }
      }
      let l = (0, r.ld)(() => new u());
    },
    72975: (e, t, n) => {
      "use strict";
      let i;
      n.d(t, { D: () => tJ });
      var r = n(64997),
        a = n(98078);
      let s = (e) => (t, n, i) => {
          let r = i.subscribe;
          return (
            (i.subscribe = (e, t, n) => {
              let a = e;
              if (t) {
                let r = (null == n ? void 0 : n.equalityFn) || Object.is,
                  s = e(i.getState());
                (a = (n) => {
                  let i = e(n);
                  if (!r(s, i)) {
                    let e = s;
                    t((s = i), e);
                  }
                }),
                  (null == n ? void 0 : n.fireImmediately) && t(s, s);
              }
              return r(a);
            }),
            e(t, n, i)
          );
        },
        o = (e) => (t) => {
          try {
            let n = e(t);
            if (n instanceof Promise) return n;
            return {
              then: (e) => o(e)(n),
              catch(e) {
                return this;
              },
            };
          } catch (e) {
            return {
              then(e) {
                return this;
              },
              catch: (t) => o(t)(e),
            };
          }
        },
        c = (e, t) => (n, i, r) => {
          let a,
            s = {
              storage: (function (e, t) {
                let n;
                try {
                  n = e();
                } catch (e) {
                  return;
                }
                return {
                  getItem: (e) => {
                    var t;
                    let i = (e) => (null === e ? null : JSON.parse(e, void 0)),
                      r = null != (t = n.getItem(e)) ? t : null;
                    return r instanceof Promise ? r.then(i) : i(r);
                  },
                  setItem: (e, t) => n.setItem(e, JSON.stringify(t, void 0)),
                  removeItem: (e) => n.removeItem(e),
                };
              })(() => localStorage),
              partialize: (e) => e,
              version: 0,
              merge: (e, t) => ({ ...t, ...e }),
              ...t,
            },
            c = !1,
            u = new Set(),
            l = new Set(),
            d = s.storage;
          if (!d)
            return e(
              (...e) => {
                console.warn(
                  `[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`
                ),
                  n(...e);
              },
              i,
              r
            );
          let h = () => {
              let e = s.partialize({ ...i() });
              return d.setItem(s.name, { state: e, version: s.version });
            },
            f = r.setState;
          r.setState = (e, t) => {
            f(e, t), h();
          };
          let p = e(
            (...e) => {
              n(...e), h();
            },
            i,
            r
          );
          r.getInitialState = () => p;
          let m = () => {
            var e, t;
            if (!d) return;
            (c = !1),
              u.forEach((e) => {
                var t;
                return e(null != (t = i()) ? t : p);
              });
            let r =
              (null == (t = s.onRehydrateStorage)
                ? void 0
                : t.call(s, null != (e = i()) ? e : p)) || void 0;
            return o(d.getItem.bind(d))(s.name)
              .then((e) => {
                if (e)
                  if ("number" != typeof e.version || e.version === s.version)
                    return [!1, e.state];
                  else {
                    if (s.migrate) return [!0, s.migrate(e.state, e.version)];
                    console.error(
                      "State loaded from storage couldn't be migrated since no migrate function was provided"
                    );
                  }
                return [!1, void 0];
              })
              .then((e) => {
                var t;
                let [r, o] = e;
                if ((n((a = s.merge(o, null != (t = i()) ? t : p)), !0), r))
                  return h();
              })
              .then(() => {
                null == r || r(a, void 0),
                  (a = i()),
                  (c = !0),
                  l.forEach((e) => e(a));
              })
              .catch((e) => {
                null == r || r(void 0, e);
              });
          };
          return (
            (r.persist = {
              setOptions: (e) => {
                (s = { ...s, ...e }), e.storage && (d = e.storage);
              },
              clearStorage: () => {
                null == d || d.removeItem(s.name);
              },
              getOptions: () => s,
              rehydrate: () => m(),
              hasHydrated: () => c,
              onHydrate: (e) => (
                u.add(e),
                () => {
                  u.delete(e);
                }
              ),
              onFinishHydration: (e) => (
                l.add(e),
                () => {
                  l.delete(e);
                }
              ),
            }),
            s.skipHydration || m(),
            a || p
          );
        },
        u = (e) => {
          let t,
            n = new Set(),
            i = (e, i) => {
              let r = "function" == typeof e ? e(t) : e;
              if (!Object.is(r, t)) {
                let e = t;
                (t = (null != i ? i : "object" != typeof r || null === r)
                  ? r
                  : Object.assign({}, t, r)),
                  n.forEach((n) => n(t, e));
              }
            },
            r = () => t,
            a = {
              setState: i,
              getState: r,
              getInitialState: () => s,
              subscribe: (e) => (n.add(e), () => n.delete(e)),
            },
            s = (t = e(i, r, a));
          return a;
        },
        l = (e) => (e ? u(e) : u);
      var d = n(35883),
        h = n(81379),
        f = n(78519),
        p = n(42142),
        m = n(67622),
        g = n(77752),
        y = n(90113),
        b = n(9894);
      function w(e = {}) {
        let t,
          n,
          i,
          r,
          { shimDisconnect: a = !0, unstable_shimAsyncInject: s } = e;
        function o() {
          let t = e.target;
          if ("function" == typeof t) {
            let e = t();
            if (e) return e;
          }
          return "object" == typeof t
            ? t
            : "string" == typeof t
            ? {
                ...(v[t] ?? {
                  id: t,
                  name: `${t[0].toUpperCase()}${t.slice(1)}`,
                  provider: `is${t[0].toUpperCase()}${t.slice(1)}`,
                }),
              }
            : {
                id: "injected",
                name: "Injected",
                provider: (e) => e?.ethereum,
              };
        }
        return (0, b.U)((c) => ({
          get icon() {
            return o().icon;
          },
          get id() {
            return o().id;
          },
          get name() {
            return o().name;
          },
          get supportsSimulation() {
            return !0;
          },
          type: w.type,
          async setup() {
            let n = await this.getProvider();
            n?.on &&
              e.target &&
              (i || ((i = this.onConnect.bind(this)), n.on("connect", i)),
              t ||
                ((t = this.onAccountsChanged.bind(this)),
                n.on("accountsChanged", t)));
          },
          async connect({ chainId: s, isReconnecting: o } = {}) {
            let u = await this.getProvider();
            if (!u) throw new y.N();
            let l = [];
            if (o) l = await this.getAccounts().catch(() => []);
            else if (a)
              try {
                let e = await u.request({
                  method: "wallet_requestPermissions",
                  params: [{ eth_accounts: {} }],
                });
                (l = e[0]?.caveats?.[0]?.value?.map((e) => (0, d.b)(e)))
                  .length > 0 && (l = await this.getAccounts());
              } catch (e) {
                if (e.code === h.vx.code) throw new h.vx(e);
                if (e.code === h.qZ.code) throw e;
              }
            try {
              l?.length ||
                o ||
                (l = (await u.request({ method: "eth_requestAccounts" })).map(
                  (e) => (0, d.b)(e)
                )),
                i && (u.removeListener("connect", i), (i = void 0)),
                t ||
                  ((t = this.onAccountsChanged.bind(this)),
                  u.on("accountsChanged", t)),
                n ||
                  ((n = this.onChainChanged.bind(this)),
                  u.on("chainChanged", n)),
                r ||
                  ((r = this.onDisconnect.bind(this)), u.on("disconnect", r));
              let f = await this.getChainId();
              if (s && f !== s) {
                let e = await this.switchChain({ chainId: s }).catch((e) => {
                  if (e.code === h.vx.code) throw e;
                  return { id: f };
                });
                f = e?.id ?? f;
              }
              return (
                a && (await c.storage?.removeItem(`${this.id}.disconnected`)),
                e.target ||
                  (await c.storage?.setItem("injected.connected", !0)),
                { accounts: l, chainId: f }
              );
            } catch (e) {
              if (e.code === h.vx.code) throw new h.vx(e);
              if (e.code === h.qZ.code) throw new h.qZ(e);
              throw e;
            }
          },
          async disconnect() {
            let t = await this.getProvider();
            if (!t) throw new y.N();
            n && (t.removeListener("chainChanged", n), (n = void 0)),
              r && (t.removeListener("disconnect", r), (r = void 0)),
              i || ((i = this.onConnect.bind(this)), t.on("connect", i));
            try {
              await (0, f.w)(
                () =>
                  t.request({
                    method: "wallet_revokePermissions",
                    params: [{ eth_accounts: {} }],
                  }),
                { timeout: 100 }
              );
            } catch {}
            a && (await c.storage?.setItem(`${this.id}.disconnected`, !0)),
              e.target || (await c.storage?.removeItem("injected.connected"));
          },
          async getAccounts() {
            let e = await this.getProvider();
            if (!e) throw new y.N();
            return (await e.request({ method: "eth_accounts" })).map((e) =>
              (0, d.b)(e)
            );
          },
          async getChainId() {
            let e = await this.getProvider();
            if (!e) throw new y.N();
            return Number(await e.request({ method: "eth_chainId" }));
          },
          async getProvider() {
            let e;
            if ("undefined" == typeof window) return;
            let t = o();
            return (
              (e =
                "function" == typeof t.provider
                  ? t.provider(window)
                  : "string" == typeof t.provider
                  ? C(window, t.provider)
                  : t.provider) &&
                !e.removeListener &&
                ("off" in e && "function" == typeof e.off
                  ? (e.removeListener = e.off)
                  : (e.removeListener = () => {})),
              e
            );
          },
          async isAuthorized() {
            try {
              if (
                (a && (await c.storage?.getItem(`${this.id}.disconnected`))) ||
                (!e.target && !(await c.storage?.getItem("injected.connected")))
              )
                return !1;
              if (!(await this.getProvider())) {
                if (void 0 !== s && !1 !== s) {
                  let e = async () => (
                      "undefined" != typeof window &&
                        window.removeEventListener("ethereum#initialized", e),
                      !!(await this.getProvider())
                    ),
                    t = "number" == typeof s ? s : 1e3;
                  if (
                    await Promise.race([
                      ...("undefined" != typeof window
                        ? [
                            new Promise((t) =>
                              window.addEventListener(
                                "ethereum#initialized",
                                () => t(e()),
                                { once: !0 }
                              )
                            ),
                          ]
                        : []),
                      new Promise((n) => setTimeout(() => n(e()), t)),
                    ])
                  )
                    return !0;
                }
                throw new y.N();
              }
              return !!(await (0, p.b)(() => this.getAccounts())).length;
            } catch {
              return !1;
            }
          },
          async switchChain({ addEthereumChainParameter: e, chainId: t }) {
            let n = await this.getProvider();
            if (!n) throw new y.N();
            let i = c.chains.find((e) => e.id === t);
            if (!i) throw new h.ch(new g.nk());
            let r = new Promise((e) => {
              let n = (i) => {
                "chainId" in i &&
                  i.chainId === t &&
                  (c.emitter.off("change", n), e());
              };
              c.emitter.on("change", n);
            });
            try {
              return (
                await Promise.all([
                  n
                    .request({
                      method: "wallet_switchEthereumChain",
                      params: [{ chainId: (0, m.cK)(t) }],
                    })
                    .then(async () => {
                      (await this.getChainId()) === t &&
                        c.emitter.emit("change", { chainId: t });
                    }),
                  r,
                ]),
                i
              );
            } catch (a) {
              if (4902 === a.code || a?.data?.originalError?.code === 4902)
                try {
                  let a,
                    s,
                    { default: o, ...u } = i.blockExplorers ?? {};
                  e?.blockExplorerUrls
                    ? (a = e.blockExplorerUrls)
                    : o && (a = [o.url, ...Object.values(u).map((e) => e.url)]),
                    (s = e?.rpcUrls?.length
                      ? e.rpcUrls
                      : [i.rpcUrls.default?.http[0] ?? ""]);
                  let l = {
                    blockExplorerUrls: a,
                    chainId: (0, m.cK)(t),
                    chainName: e?.chainName ?? i.name,
                    iconUrls: e?.iconUrls,
                    nativeCurrency: e?.nativeCurrency ?? i.nativeCurrency,
                    rpcUrls: s,
                  };
                  return (
                    await Promise.all([
                      n
                        .request({
                          method: "wallet_addEthereumChain",
                          params: [l],
                        })
                        .then(async () => {
                          if ((await this.getChainId()) === t)
                            c.emitter.emit("change", { chainId: t });
                          else
                            throw new h.vx(
                              Error(
                                "User rejected switch after adding network."
                              )
                            );
                        }),
                      r,
                    ]),
                    i
                  );
                } catch (e) {
                  throw new h.vx(e);
                }
              if (a.code === h.vx.code) throw new h.vx(a);
              throw new h.ch(a);
            }
          },
          async onAccountsChanged(e) {
            if (0 === e.length) this.onDisconnect();
            else if (c.emitter.listenerCount("connect")) {
              let e = (await this.getChainId()).toString();
              this.onConnect({ chainId: e }),
                a && (await c.storage?.removeItem(`${this.id}.disconnected`));
            } else
              c.emitter.emit("change", { accounts: e.map((e) => (0, d.b)(e)) });
          },
          onChainChanged(e) {
            let t = Number(e);
            c.emitter.emit("change", { chainId: t });
          },
          async onConnect(e) {
            let a = await this.getAccounts();
            if (0 === a.length) return;
            let s = Number(e.chainId);
            c.emitter.emit("connect", { accounts: a, chainId: s });
            let o = await this.getProvider();
            o &&
              (i && (o.removeListener("connect", i), (i = void 0)),
              t ||
                ((t = this.onAccountsChanged.bind(this)),
                o.on("accountsChanged", t)),
              n ||
                ((n = this.onChainChanged.bind(this)), o.on("chainChanged", n)),
              r || ((r = this.onDisconnect.bind(this)), o.on("disconnect", r)));
          },
          async onDisconnect(e) {
            let t = await this.getProvider();
            (e && 1013 === e.code && t && (await this.getAccounts()).length) ||
              (c.emitter.emit("disconnect"),
              t &&
                (n && (t.removeListener("chainChanged", n), (n = void 0)),
                r && (t.removeListener("disconnect", r), (r = void 0)),
                i || ((i = this.onConnect.bind(this)), t.on("connect", i))));
          },
        }));
      }
      w.type = "injected";
      let v = {
        coinbaseWallet: {
          id: "coinbaseWallet",
          name: "Coinbase Wallet",
          provider: (e) =>
            e?.coinbaseWalletExtension
              ? e.coinbaseWalletExtension
              : C(e, "isCoinbaseWallet"),
        },
        metaMask: {
          id: "metaMask",
          name: "MetaMask",
          provider: (e) =>
            C(e, (e) => {
              if (!e.isMetaMask || (e.isBraveWallet && !e._events && !e._state))
                return !1;
              for (let t of [
                "isApexWallet",
                "isAvalanche",
                "isBitKeep",
                "isBlockWallet",
                "isKuCoinWallet",
                "isMathWallet",
                "isOkxWallet",
                "isOKExWallet",
                "isOneInchIOSWallet",
                "isOneInchAndroidWallet",
                "isOpera",
                "isPhantom",
                "isPortal",
                "isRabby",
                "isTokenPocket",
                "isTokenary",
                "isUniswapWallet",
                "isZerion",
              ])
                if (e[t]) return !1;
              return !0;
            }),
        },
        phantom: {
          id: "phantom",
          name: "Phantom",
          provider: (e) =>
            e?.phantom?.ethereum ? e.phantom?.ethereum : C(e, "isPhantom"),
        },
      };
      function C(e, t) {
        function n(e) {
          return "function" == typeof t ? t(e) : "string" != typeof t || e[t];
        }
        let i = e.ethereum;
        return i?.providers
          ? i.providers.find((e) => n(e))
          : i && n(i)
          ? i
          : void 0;
      }
      var x = n(15484);
      class P {
        constructor(e) {
          Object.defineProperty(this, "uid", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          }),
            Object.defineProperty(this, "_emitter", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: new x.b(),
            });
        }
        on(e, t) {
          this._emitter.on(e, t);
        }
        once(e, t) {
          this._emitter.once(e, t);
        }
        off(e, t) {
          this._emitter.off(e, t);
        }
        emit(e, ...t) {
          let n = t[0];
          this._emitter.emit(e, { uid: this.uid, ...n });
        }
        listenerCount(e) {
          return this._emitter.listenerCount(e);
        }
      }
      var I = n(56817);
      let E = 256;
      var A = n(40194);
      function $(e, t, n) {
        let i = e[t.name];
        if ("function" == typeof i) return i;
        let r = e[n];
        return "function" == typeof r ? r : (n) => t(e, n);
      }
      let M = new Map(),
        N = new Map(),
        _ = 0;
      function O(e, t, n) {
        let i = ++_,
          r = () => M.get(e) || [],
          a = () => {
            let t = r();
            M.set(
              e,
              t.filter((e) => e.id !== i)
            );
          },
          s = () => {
            let t = r();
            if (!t.some((e) => e.id === i)) return;
            let n = N.get(e);
            1 === t.length && n && n(), a();
          },
          o = r();
        if ((M.set(e, [...o, { id: i, fns: t }]), o && o.length > 0)) return s;
        let c = {};
        for (let e in t)
          c[e] = (...t) => {
            let n = r();
            if (0 !== n.length) for (let i of n) i.fns[e]?.(...t);
          };
        let u = n(c);
        return "function" == typeof u && N.set(e, u), s;
      }
      var k = n(10231);
      function B(e, { emitOnBegin: t, initialWaitTime: n, interval: i }) {
        let r = !0,
          a = () => (r = !1);
        return (
          (async () => {
            let s;
            t && (s = await e({ unpoll: a }));
            let o = (await n?.(s)) ?? i;
            await (0, k.u)(o);
            let c = async () => {
              r && (await e({ unpoll: a }), await (0, k.u)(i), c());
            };
            c();
          })(),
          a
        );
      }
      var S = n(79183);
      async function T(e) {
        let t = (function (e, { method: t }) {
            let n = {};
            return (
              "fallback" === e.transport.type &&
                e.transport.onResponse?.(
                  ({ method: e, response: i, status: r, transport: a }) => {
                    "success" === r && t === e && (n[i] = a.request);
                  }
                ),
              (t) => n[t] || e.request
            );
          })(e, { method: "eth_newPendingTransactionFilter" }),
          n = await e.request({ method: "eth_newPendingTransactionFilter" });
        return { id: n, request: t(n), type: "transaction" };
      }
      var j = n(99702),
        F = n(17255),
        R = n(80844),
        G = n(38978),
        q = n(399),
        L = n(87094),
        U = n(97118),
        D = n(43935),
        z = n(21159);
      let W = "/docs/contract/decodeEventLog";
      function H(e, { args: t, eventName: n } = {}) {
        return {
          ...e,
          blockHash: e.blockHash ? e.blockHash : null,
          blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
          logIndex: e.logIndex ? Number(e.logIndex) : null,
          transactionHash: e.transactionHash ? e.transactionHash : null,
          transactionIndex: e.transactionIndex
            ? Number(e.transactionIndex)
            : null,
          ...(n ? { args: t, eventName: n } : {}),
        };
      }
      async function K(e, { filter: t }) {
        let n = "strict" in t && t.strict,
          i = await t.request({
            method: "eth_getFilterChanges",
            params: [t.id],
          });
        if ("string" == typeof i[0]) return i;
        let r = i.map((e) => H(e));
        if (!("abi" in t) || !t.abi) return r;
        var a = { abi: t.abi, logs: r, strict: n };
        let { abi: s, args: o, logs: c, strict: u = !0 } = a,
          l = (() => {
            if (a.eventName)
              return Array.isArray(a.eventName) ? a.eventName : [a.eventName];
          })();
        return c
          .map((e) => {
            try {
              let t = s.find(
                (t) => "event" === t.type && e.topics[0] === (0, q.h)(t)
              );
              if (!t) return null;
              let n = (function (e) {
                let { abi: t, data: n, strict: i, topics: r } = e,
                  a = i ?? !0,
                  [s, ...o] = r;
                if (!s) throw new j._z({ docsPath: W });
                let c =
                  1 === t.length
                    ? t[0]
                    : t.find(
                        (e) => "event" === e.type && s === (0, q.h)((0, z.B)(e))
                      );
                if (!(c && "name" in c) || "event" !== c.type)
                  throw new j.kE(s, { docsPath: W });
                let { name: u, inputs: l } = c,
                  d = l?.some((e) => !("name" in e && e.name)),
                  h = d ? [] : {},
                  f = l.filter((e) => "indexed" in e && e.indexed);
                for (let e = 0; e < f.length; e++) {
                  let t = f[e],
                    n = o[e];
                  if (!n) throw new j.l3({ abiItem: c, param: t });
                  h[d ? e : t.name || e] = (function ({ param: e, value: t }) {
                    return "string" === e.type ||
                      "bytes" === e.type ||
                      "tuple" === e.type ||
                      e.type.match(/^(.*)\[(\d+)?\]$/)
                      ? t
                      : ((0, D.n)([e], t) || [])[0];
                  })({ param: t, value: n });
                }
                let p = l.filter((e) => !("indexed" in e && e.indexed));
                if (p.length > 0) {
                  if (n && "0x" !== n)
                    try {
                      let e = (0, D.n)(p, n);
                      if (e)
                        if (d) h = [...h, ...e];
                        else
                          for (let t = 0; t < p.length; t++)
                            h[p[t].name] = e[t];
                    } catch (e) {
                      if (a) {
                        if (e instanceof j.Iy || e instanceof U.SK)
                          throw new j.fo({
                            abiItem: c,
                            data: n,
                            params: p,
                            size: (0, L.E)(n),
                          });
                        throw e;
                      }
                    }
                  else if (a)
                    throw new j.fo({
                      abiItem: c,
                      data: "0x",
                      params: p,
                      size: 0,
                    });
                }
                return {
                  eventName: u,
                  args: Object.values(h).length > 0 ? h : void 0,
                };
              })({ ...e, abi: [t], strict: u });
              if (
                (l && !l.includes(n.eventName)) ||
                !(function (e) {
                  let { args: t, inputs: n, matchArgs: i } = e;
                  if (!i) return !0;
                  if (!t) return !1;
                  function r(e, t, n) {
                    try {
                      if ("address" === e.type) return (0, F.h)(t, n);
                      if ("string" === e.type || "bytes" === e.type)
                        return (0, G.S)((0, R.ZJ)(t)) === n;
                      return t === n;
                    } catch {
                      return !1;
                    }
                  }
                  return Array.isArray(t) && Array.isArray(i)
                    ? i.every((e, i) => {
                        if (null == e) return !0;
                        let a = n[i];
                        return (
                          !!a &&
                          (Array.isArray(e) ? e : [e]).some((e) =>
                            r(a, e, t[i])
                          )
                        );
                      })
                    : !(
                        "object" != typeof t ||
                        Array.isArray(t) ||
                        "object" != typeof i ||
                        Array.isArray(i)
                      ) &&
                        Object.entries(i).every(([e, i]) => {
                          if (null == i) return !0;
                          let a = n.find((t) => t.name === e);
                          return (
                            !!a &&
                            (Array.isArray(i) ? i : [i]).some((n) =>
                              r(a, n, t[e])
                            )
                          );
                        });
                })({ args: n.args, inputs: t.inputs, matchArgs: o })
              )
                return null;
              return { ...n, ...e };
            } catch (i) {
              let t, n;
              if (i instanceof j.kE) return null;
              if (i instanceof j.fo || i instanceof j.l3) {
                if (u) return null;
                (t = i.abiItem.name),
                  (n = i.abiItem.inputs?.some((e) => !("name" in e && e.name)));
              }
              return { ...e, args: n ? [] : {}, eventName: t };
            }
          })
          .filter(Boolean);
      }
      async function Q(e, { filter: t }) {
        return t.request({ method: "eth_uninstallFilter", params: [t.id] });
      }
      function V(
        e,
        {
          batch: t = !0,
          onError: n,
          onTransactions: i,
          poll: r,
          pollingInterval: a = e.pollingInterval,
        }
      ) {
        let s, o;
        return (void 0 !== r ? r : "webSocket" !== e.transport.type)
          ? O(
              (0, S.A)(["watchPendingTransactions", e.uid, t, a]),
              { onTransactions: i, onError: n },
              (n) => {
                let i,
                  r = B(
                    async () => {
                      try {
                        if (!i)
                          try {
                            i = await $(
                              e,
                              T,
                              "createPendingTransactionFilter"
                            )({});
                            return;
                          } catch (e) {
                            throw (r(), e);
                          }
                        let a = await $(
                          e,
                          K,
                          "getFilterChanges"
                        )({ filter: i });
                        if (0 === a.length) return;
                        if (t) n.onTransactions(a);
                        else for (let e of a) n.onTransactions([e]);
                      } catch (e) {
                        n.onError?.(e);
                      }
                    },
                    { emitOnBegin: !0, interval: a }
                  );
                return async () => {
                  i && (await $(e, Q, "uninstallFilter")({ filter: i })), r();
                };
              }
            )
          : ((s = !0),
            (o = () => (s = !1)),
            (async () => {
              try {
                let { unsubscribe: t } = await e.transport.subscribe({
                  params: ["newPendingTransactions"],
                  onData(e) {
                    if (!s) return;
                    let t = e.result;
                    i([t]);
                  },
                  onError(e) {
                    n?.(e);
                  },
                });
                (o = t), s || o();
              } catch (e) {
                n?.(e);
              }
            })(),
            () => o());
      }
      function Y(e, t, n) {
        let i = e[t.name];
        if ("function" == typeof i) return i;
        let r = e[n];
        return "function" == typeof r ? r : (n) => t(e, n);
      }
      var Z = n(87660),
        J = n(19405),
        X = n(7441);
      class ee extends X.C {
        constructor({ docsPath: e } = {}) {
          super(
            "Could not find an Account to execute with this Action.\nPlease provide an Account with the `account` argument on the Action, or by supplying an `account` to the Client.",
            { docsPath: e, docsSlug: "account", name: "AccountNotFoundError" }
          );
        }
      }
      class et extends X.C {
        constructor({ docsPath: e, metaMessages: t, type: n }) {
          super(`Account type "${n}" is not supported.`, {
            docsPath: e,
            metaMessages: t,
            name: "AccountTypeNotSupportedError",
          });
        }
      }
      async function en(e, { account: t = e.account, message: n }) {
        if (!t) throw new ee({ docsPath: "/docs/actions/wallet/signMessage" });
        let i = (0, J.J)(t);
        if (i.signMessage) return i.signMessage({ message: n });
        let r =
          "string" == typeof n
            ? (0, m.i3)(n)
            : n.raw instanceof Uint8Array
            ? (0, m.nj)(n.raw)
            : n.raw;
        return e.request(
          { method: "personal_sign", params: [r, i.address] },
          { retryCount: 0 }
        );
      }
      var ei = n(95990);
      async function er(e, t) {
        let n,
          { account: i, connector: r, ...a } = t;
        return Y(
          "object" == typeof i && "local" === i.type
            ? e.getClient()
            : await (0, ei.r)(e, { account: i, connector: r }),
          en,
          "signMessage"
        )({ ...a, ...(i ? { account: i } : {}) });
      }
      var ea = n(31942);
      class es extends X.C {
        constructor() {
          super("`baseFeeMultiplier` must be greater than 1.", {
            name: "BaseFeeScalarError",
          });
        }
      }
      class eo extends X.C {
        constructor() {
          super("Chain does not support EIP-1559 fees.", {
            name: "Eip1559FeesNotSupportedError",
          });
        }
      }
      class ec extends X.C {
        constructor({ maxPriorityFeePerGas: e }) {
          super(
            `\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${(0,
            ea.Q)(e)} gwei).`,
            { name: "MaxFeePerGasTooLowError" }
          );
        }
      }
      var eu = n(27493);
      class el extends X.C {
        constructor({ blockHash: e, blockNumber: t }) {
          let n = "Block";
          e && (n = `Block at hash "${e}"`),
            t && (n = `Block at number "${t}"`),
            super(`${n} could not be found.`, { name: "BlockNotFoundError" });
        }
      }
      let ed = {
        "0x0": "legacy",
        "0x1": "eip2930",
        "0x2": "eip1559",
        "0x3": "eip4844",
        "0x4": "eip7702",
      };
      function eh(e) {
        let t = {
          ...e,
          blockHash: e.blockHash ? e.blockHash : null,
          blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
          chainId: e.chainId ? (0, eu.ME)(e.chainId) : void 0,
          gas: e.gas ? BigInt(e.gas) : void 0,
          gasPrice: e.gasPrice ? BigInt(e.gasPrice) : void 0,
          maxFeePerBlobGas: e.maxFeePerBlobGas
            ? BigInt(e.maxFeePerBlobGas)
            : void 0,
          maxFeePerGas: e.maxFeePerGas ? BigInt(e.maxFeePerGas) : void 0,
          maxPriorityFeePerGas: e.maxPriorityFeePerGas
            ? BigInt(e.maxPriorityFeePerGas)
            : void 0,
          nonce: e.nonce ? (0, eu.ME)(e.nonce) : void 0,
          to: e.to ? e.to : null,
          transactionIndex: e.transactionIndex
            ? Number(e.transactionIndex)
            : null,
          type: e.type ? ed[e.type] : void 0,
          typeHex: e.type ? e.type : void 0,
          value: e.value ? BigInt(e.value) : void 0,
          v: e.v ? BigInt(e.v) : void 0,
        };
        return (
          e.authorizationList &&
            (t.authorizationList = e.authorizationList.map((e) => ({
              address: e.address,
              chainId: Number(e.chainId),
              nonce: Number(e.nonce),
              r: e.r,
              s: e.s,
              yParity: Number(e.yParity),
            }))),
          (t.yParity = (() => {
            if (e.yParity) return Number(e.yParity);
            if ("bigint" == typeof t.v) {
              if (0n === t.v || 27n === t.v) return 0;
              if (1n === t.v || 28n === t.v) return 1;
              if (t.v >= 35n) return +(t.v % 2n === 0n);
            }
          })()),
          "legacy" === t.type &&
            (delete t.accessList,
            delete t.maxFeePerBlobGas,
            delete t.maxFeePerGas,
            delete t.maxPriorityFeePerGas,
            delete t.yParity),
          "eip2930" === t.type &&
            (delete t.maxFeePerBlobGas,
            delete t.maxFeePerGas,
            delete t.maxPriorityFeePerGas),
          "eip1559" === t.type && delete t.maxFeePerBlobGas,
          t
        );
      }
      async function ef(
        e,
        {
          blockHash: t,
          blockNumber: n,
          blockTag: i,
          includeTransactions: r,
        } = {}
      ) {
        let a = r ?? !1,
          s = void 0 !== n ? (0, m.cK)(n) : void 0,
          o = null;
        if (
          !(o = t
            ? await e.request(
                { method: "eth_getBlockByHash", params: [t, a] },
                { dedupe: !0 }
              )
            : await e.request(
                {
                  method: "eth_getBlockByNumber",
                  params: [s || (i ?? "latest"), a],
                },
                { dedupe: !!s }
              ))
        )
          throw new el({ blockHash: t, blockNumber: n });
        return (
          e.chain?.formatters?.block?.format ||
          function (e) {
            let t = (e.transactions ?? []).map((e) =>
              "string" == typeof e ? e : eh(e)
            );
            return {
              ...e,
              baseFeePerGas: e.baseFeePerGas ? BigInt(e.baseFeePerGas) : null,
              blobGasUsed: e.blobGasUsed ? BigInt(e.blobGasUsed) : void 0,
              difficulty: e.difficulty ? BigInt(e.difficulty) : void 0,
              excessBlobGas: e.excessBlobGas ? BigInt(e.excessBlobGas) : void 0,
              gasLimit: e.gasLimit ? BigInt(e.gasLimit) : void 0,
              gasUsed: e.gasUsed ? BigInt(e.gasUsed) : void 0,
              hash: e.hash ? e.hash : null,
              logsBloom: e.logsBloom ? e.logsBloom : null,
              nonce: e.nonce ? e.nonce : null,
              number: e.number ? BigInt(e.number) : null,
              size: e.size ? BigInt(e.size) : void 0,
              timestamp: e.timestamp ? BigInt(e.timestamp) : void 0,
              transactions: t,
              totalDifficulty: e.totalDifficulty
                ? BigInt(e.totalDifficulty)
                : null,
            };
          }
        )(o);
      }
      async function ep(e) {
        return BigInt(await e.request({ method: "eth_gasPrice" }));
      }
      async function em(e, t) {
        let { block: n, chain: i = e.chain, request: r } = t || {};
        try {
          let t = i?.fees?.maxPriorityFeePerGas ?? i?.fees?.defaultPriorityFee;
          if ("function" == typeof t) {
            let i = n || (await $(e, ef, "getBlock")({})),
              a = await t({ block: i, client: e, request: r });
            if (null === a) throw Error();
            return a;
          }
          if (void 0 !== t) return t;
          let a = await e.request({ method: "eth_maxPriorityFeePerGas" });
          return (0, eu.uU)(a);
        } catch {
          let [t, i] = await Promise.all([
            n ? Promise.resolve(n) : $(e, ef, "getBlock")({}),
            $(e, ep, "getGasPrice")({}),
          ]);
          if ("bigint" != typeof t.baseFeePerGas) throw new eo();
          let r = i - t.baseFeePerGas;
          if (r < 0n) return 0n;
          return r;
        }
      }
      async function eg(e, t) {
        let {
            block: n,
            chain: i = e.chain,
            request: r,
            type: a = "eip1559",
          } = t || {},
          s = await (async () =>
            "function" == typeof i?.fees?.baseFeeMultiplier
              ? i.fees.baseFeeMultiplier({ block: n, client: e, request: r })
              : i?.fees?.baseFeeMultiplier ?? 1.2)();
        if (s < 1) throw new es();
        let o = s.toString().split(".")[1]?.length ?? 0,
          c = 10 ** o,
          u = (e) => (e * BigInt(Math.ceil(s * c))) / BigInt(c),
          l = n || (await $(e, ef, "getBlock")({}));
        if ("function" == typeof i?.fees?.estimateFeesPerGas) {
          let t = await i.fees.estimateFeesPerGas({
            block: n,
            client: e,
            multiply: u,
            request: r,
            type: a,
          });
          if (null !== t) return t;
        }
        if ("eip1559" === a) {
          if ("bigint" != typeof l.baseFeePerGas) throw new eo();
          let t =
              "bigint" == typeof r?.maxPriorityFeePerGas
                ? r.maxPriorityFeePerGas
                : await em(e, { block: l, chain: i, request: r }),
            n = u(l.baseFeePerGas);
          return {
            maxFeePerGas: r?.maxFeePerGas ?? n + t,
            maxPriorityFeePerGas: t,
          };
        }
        return {
          gasPrice: r?.gasPrice ?? u(await $(e, ep, "getGasPrice")({})),
        };
      }
      var ey = n(32840);
      async function eb({ hash: e, signature: t }) {
        let i = (0, ey.q)(e) ? e : (0, m.nj)(e),
          { secp256k1: r } = await n.e(9561).then(n.bind(n, 59561)),
          a = (() => {
            if ("object" == typeof t && "r" in t && "s" in t) {
              let { r: e, s: n, v: i, yParity: a } = t,
                s = ew(Number(a ?? i));
              return new r.Signature(
                (0, eu.uU)(e),
                (0, eu.uU)(n)
              ).addRecoveryBit(s);
            }
            let e = (0, ey.q)(t) ? t : (0, m.nj)(t);
            if (65 !== (0, L.E)(e)) throw Error("invalid signature length");
            let n = ew((0, eu.ME)(`0x${e.slice(130)}`));
            return r.Signature.fromCompact(e.substring(2, 130)).addRecoveryBit(
              n
            );
          })()
            .recoverPublicKey(i.substring(2))
            .toHex(!1);
        return `0x${a}`;
      }
      function ew(e) {
        if (0 === e || 1 === e) return e;
        if (27 === e) return 0;
        if (28 === e) return 1;
        throw Error("Invalid yParityOrV value");
      }
      async function ev({ hash: e, signature: t }) {
        var n = await eb({ hash: e, signature: t });
        let i = (0, G.S)(`0x${n.substring(4)}`).substring(26);
        return (0, d.o)(`0x${i}`);
      }
      var eC = n(79731),
        ex = n(87456);
      function eP(e) {
        if (e < 256) return 1;
        if (e < 65536) return 2;
        if (e < 0x1000000) return 3;
        if (e < 0x100000000) return 4;
        throw new X.C("Length is too large.");
      }
      async function eI(e) {
        let { authorization: t, signature: n } = e;
        return ev({
          hash: (function (e) {
            let { chainId: t, nonce: n, to: i } = e,
              r = e.contractAddress ?? e.address,
              a = (0, G.S)(
                (0, eC.aP)([
                  "0x05",
                  (function (e, t = "hex") {
                    let n = (function e(t) {
                        return Array.isArray(t)
                          ? (function (e) {
                              let t = e.reduce((e, t) => e + t.length, 0),
                                n = eP(t);
                              return {
                                length: t <= 55 ? 1 + t : 1 + n + t,
                                encode(i) {
                                  for (let { encode: r } of (t <= 55
                                    ? i.pushByte(192 + t)
                                    : (i.pushByte(247 + n),
                                      1 === n
                                        ? i.pushUint8(t)
                                        : 2 === n
                                        ? i.pushUint16(t)
                                        : 3 === n
                                        ? i.pushUint24(t)
                                        : i.pushUint32(t)),
                                  e))
                                    r(i);
                                },
                              };
                            })(t.map((t) => e(t)))
                          : (function (e) {
                              let t = "string" == typeof e ? (0, R.aT)(e) : e,
                                n = eP(t.length);
                              return {
                                length:
                                  1 === t.length && t[0] < 128
                                    ? 1
                                    : t.length <= 55
                                    ? 1 + t.length
                                    : 1 + n + t.length,
                                encode(e) {
                                  (1 === t.length && t[0] < 128) ||
                                    (t.length <= 55
                                      ? e.pushByte(128 + t.length)
                                      : (e.pushByte(183 + n),
                                        1 === n
                                          ? e.pushUint8(t.length)
                                          : 2 === n
                                          ? e.pushUint16(t.length)
                                          : 3 === n
                                          ? e.pushUint24(t.length)
                                          : e.pushUint32(t.length))),
                                    e.pushBytes(t);
                                },
                              };
                            })(t);
                      })(e),
                      i = (0, ex.l)(new Uint8Array(n.length));
                    return (n.encode(i), "hex" === t)
                      ? (0, m.My)(i.bytes)
                      : i.bytes;
                  })([t ? (0, m.cK)(t) : "0x", r, n ? (0, m.cK)(n) : "0x"]),
                ])
              );
            return "bytes" === i ? (0, R.aT)(a) : a;
          })(t),
          signature: n ?? t,
        });
      }
      var eE = n(44494),
        eA = n(69432);
      class e$ extends X.C {
        constructor(
          e,
          {
            account: t,
            docsPath: n,
            chain: i,
            data: r,
            gas: a,
            gasPrice: s,
            maxFeePerGas: o,
            maxPriorityFeePerGas: c,
            nonce: u,
            to: l,
            value: d,
          }
        ) {
          super(e.shortMessage, {
            cause: e,
            docsPath: n,
            metaMessages: [
              ...(e.metaMessages ? [...e.metaMessages, " "] : []),
              "Estimate Gas Arguments:",
              (0, eA.aO)({
                from: t?.address,
                to: l,
                value:
                  void 0 !== d &&
                  `${(0, eE.c)(d)} ${i?.nativeCurrency?.symbol || "ETH"}`,
                data: r,
                gas: a,
                gasPrice: void 0 !== s && `${(0, ea.Q)(s)} gwei`,
                maxFeePerGas: void 0 !== o && `${(0, ea.Q)(o)} gwei`,
                maxPriorityFeePerGas: void 0 !== c && `${(0, ea.Q)(c)} gwei`,
                nonce: u,
              }),
            ].filter(Boolean),
            name: "EstimateGasExecutionError",
          }),
            Object.defineProperty(this, "cause", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.cause = e);
        }
      }
      var eM = n(42264),
        eN = n(35020),
        e_ = n(7671),
        eO = n(76743),
        ek = n(25507),
        eB = n(65358);
      async function eS(
        e,
        { address: t, blockNumber: n, blockTag: i = "latest" }
      ) {
        let r = "bigint" == typeof n ? (0, m.cK)(n) : void 0;
        return BigInt(
          await e.request({ method: "eth_getBalance", params: [t, r || i] })
        );
      }
      async function eT(e, t) {
        let { account: n = e.account } = t,
          i = n ? (0, J.J)(n) : void 0;
        try {
          let {
              accessList: n,
              authorizationList: a,
              blobs: s,
              blobVersionedHashes: o,
              blockNumber: c,
              blockTag: u,
              data: l,
              gas: d,
              gasPrice: h,
              maxFeePerBlobGas: f,
              maxFeePerGas: p,
              maxPriorityFeePerGas: g,
              nonce: y,
              value: b,
              stateOverride: w,
              ...v
            } = await eW(e, {
              ...t,
              parameters:
                i?.type === "local" ? void 0 : ["blobVersionedHashes"],
            }),
            C = ("bigint" == typeof c ? (0, m.cK)(c) : void 0) || u,
            x = (0, ek.yH)(w),
            P = await (async () =>
              v.to
                ? v.to
                : a && a.length > 0
                ? await eI({ authorization: a[0] }).catch(() => {
                    throw new X.C(
                      "`to` is required. Could not infer from `authorizationList`"
                    );
                  })
                : void 0)();
          (0, eB.c)(t);
          let I = e.chain?.formatters?.transactionRequest?.format,
            E = (I || eO.Bv)({
              ...(0, e_.o)(v, { format: I }),
              from: i?.address,
              accessList: n,
              authorizationList: a,
              blobs: s,
              blobVersionedHashes: o,
              data: l,
              gas: d,
              gasPrice: h,
              maxFeePerBlobGas: f,
              maxFeePerGas: p,
              maxPriorityFeePerGas: g,
              nonce: y,
              to: P,
              value: b,
            });
          function r(t) {
            let { block: n, request: i, rpcStateOverride: r } = t;
            return e.request({
              method: "eth_estimateGas",
              params: r ? [i, n ?? "latest", r] : n ? [i, n] : [i],
            });
          }
          let A = BigInt(
            await r({ block: C, request: E, rpcStateOverride: x })
          );
          if (a) {
            let t = await eS(e, { address: E.from }),
              n = await Promise.all(
                a.map(async (e) => {
                  let { address: n } = e,
                    a = await r({
                      block: C,
                      request: {
                        authorizationList: void 0,
                        data: l,
                        from: i?.address,
                        to: n,
                        value: (0, m.cK)(t),
                      },
                      rpcStateOverride: x,
                    }).catch(() => 100000n);
                  return 2n * BigInt(a);
                })
              );
            A += n.reduce((e, t) => e + t, 0n);
          }
          return A;
        } catch (n) {
          throw (function (e, { docsPath: t, ...n }) {
            return new e$(
              (() => {
                let t = (0, eN.l)(e, n);
                return t instanceof eM.RM ? e : t;
              })(),
              { docsPath: t, ...n }
            );
          })(n, { ...t, account: i, chain: e.chain });
        }
      }
      async function ej(
        e,
        { address: t, blockTag: n = "latest", blockNumber: i }
      ) {
        let r = await e.request(
          {
            method: "eth_getTransactionCount",
            params: [t, "bigint" == typeof i ? (0, m.cK)(i) : n],
          },
          { dedupe: !!i }
        );
        return (0, eu.ME)(r);
      }
      function eF(e) {
        let { kzg: t } = e,
          n = e.to ?? ("string" == typeof e.blobs[0] ? "hex" : "bytes"),
          i =
            "string" == typeof e.blobs[0]
              ? e.blobs.map((e) => (0, R.aT)(e))
              : e.blobs,
          r = [];
        for (let e of i) r.push(Uint8Array.from(t.blobToKzgCommitment(e)));
        return "bytes" === n ? r : r.map((e) => (0, m.My)(e));
      }
      function eR(e) {
        let { kzg: t } = e,
          n = e.to ?? ("string" == typeof e.blobs[0] ? "hex" : "bytes"),
          i =
            "string" == typeof e.blobs[0]
              ? e.blobs.map((e) => (0, R.aT)(e))
              : e.blobs,
          r =
            "string" == typeof e.commitments[0]
              ? e.commitments.map((e) => (0, R.aT)(e))
              : e.commitments,
          a = [];
        for (let e = 0; e < i.length; e++) {
          let n = i[e],
            s = r[e];
          a.push(Uint8Array.from(t.computeBlobKzgProof(n, s)));
        }
        return "bytes" === n ? a : a.map((e) => (0, m.My)(e));
      }
      var eG = n(72437);
      class eq extends X.C {
        constructor({ maxSize: e, size: t }) {
          super("Blob size is too large.", {
            metaMessages: [`Max: ${e} bytes`, `Given: ${t} bytes`],
            name: "BlobSizeTooLargeError",
          });
        }
      }
      class eL extends X.C {
        constructor() {
          super("Blob data must not be empty.", { name: "EmptyBlobError" });
        }
      }
      async function eU(e) {
        let t = await e.request({ method: "eth_chainId" }, { dedupe: !0 });
        return (0, eu.ME)(t);
      }
      X.C, X.C;
      let eD = [
          "blobVersionedHashes",
          "chainId",
          "fees",
          "gas",
          "nonce",
          "type",
        ],
        ez = new Map();
      async function eW(e, t) {
        let n,
          i,
          {
            account: r = e.account,
            blobs: a,
            chain: s,
            gas: o,
            kzg: c,
            nonce: u,
            nonceManager: l,
            parameters: d = eD,
            type: h,
          } = t,
          f = r ? (0, J.J)(r) : r,
          p = { ...t, ...(f ? { from: f?.address } : {}) };
        async function g() {
          return n || (n = await $(e, ef, "getBlock")({ blockTag: "latest" }));
        }
        async function y() {
          return (
            i ||
            (s
              ? s.id
              : void 0 !== t.chainId
              ? t.chainId
              : (i = await $(e, eU, "getChainId")({})))
          );
        }
        if (d.includes("nonce") && void 0 === u && f)
          if (l) {
            let t = await y();
            p.nonce = await l.consume({
              address: f.address,
              chainId: t,
              client: e,
            });
          } else
            p.nonce = await $(
              e,
              ej,
              "getTransactionCount"
            )({ address: f.address, blockTag: "pending" });
        if (
          (d.includes("blobVersionedHashes") || d.includes("sidecars")) &&
          a &&
          c
        ) {
          let e = eF({ blobs: a, kzg: c });
          if (
            (d.includes("blobVersionedHashes") &&
              (p.blobVersionedHashes = (function (e) {
                let { commitments: t, version: n } = e,
                  i = e.to ?? ("string" == typeof t[0] ? "hex" : "bytes"),
                  r = [];
                for (let e of t)
                  r.push(
                    (function (e) {
                      let { commitment: t, version: n = 1 } = e,
                        i = e.to ?? ("string" == typeof t ? "hex" : "bytes"),
                        r = (function (e, t) {
                          let n = (0, eG.sc)(
                            (0, ey.q)(e, { strict: !1 }) ? (0, R.ZJ)(e) : e
                          );
                          return "bytes" === (t || "hex") ? n : (0, m.nj)(n);
                        })(t, "bytes");
                      return r.set([n], 0), "bytes" === i ? r : (0, m.My)(r);
                    })({ commitment: e, to: i, version: n })
                  );
                return r;
              })({ commitments: e, to: "hex" })),
            d.includes("sidecars"))
          ) {
            let t = eR({ blobs: a, commitments: e, kzg: c });
            p.sidecars = (function (e) {
              let { data: t, kzg: n, to: i } = e,
                r =
                  e.blobs ??
                  (function (e) {
                    let t =
                        e.to ?? ("string" == typeof e.data ? "hex" : "bytes"),
                      n =
                        "string" == typeof e.data ? (0, R.aT)(e.data) : e.data,
                      i = (0, L.E)(n);
                    if (!i) throw new eL();
                    if (i > 761855) throw new eq({ maxSize: 761855, size: i });
                    let r = [],
                      a = !0,
                      s = 0;
                    for (; a; ) {
                      let e = (0, ex.l)(new Uint8Array(131072)),
                        t = 0;
                      for (; t < 4096; ) {
                        let i = n.slice(s, s + 31);
                        if ((e.pushByte(0), e.pushBytes(i), i.length < 31)) {
                          e.pushByte(128), (a = !1);
                          break;
                        }
                        t++, (s += 31);
                      }
                      r.push(e);
                    }
                    return "bytes" === t
                      ? r.map((e) => e.bytes)
                      : r.map((e) => (0, m.My)(e.bytes));
                  })({ data: t, to: i }),
                a = e.commitments ?? eF({ blobs: r, kzg: n, to: i }),
                s = e.proofs ?? eR({ blobs: r, commitments: a, kzg: n, to: i }),
                o = [];
              for (let e = 0; e < r.length; e++)
                o.push({ blob: r[e], commitment: a[e], proof: s[e] });
              return o;
            })({ blobs: a, commitments: e, proofs: t, to: "hex" });
          }
        }
        if (
          (d.includes("chainId") && (p.chainId = await y()),
          (d.includes("fees") || d.includes("type")) && void 0 === h)
        )
          try {
            p.type = (function (e) {
              if (e.type) return e.type;
              if (void 0 !== e.authorizationList) return "eip7702";
              if (
                void 0 !== e.blobs ||
                void 0 !== e.blobVersionedHashes ||
                void 0 !== e.maxFeePerBlobGas ||
                void 0 !== e.sidecars
              )
                return "eip4844";
              if (
                void 0 !== e.maxFeePerGas ||
                void 0 !== e.maxPriorityFeePerGas
              )
                return "eip1559";
              if (void 0 !== e.gasPrice)
                return void 0 !== e.accessList ? "eip2930" : "legacy";
              throw new eA.Vg({ transaction: e });
            })(p);
          } catch {
            let t = ez.get(e.uid);
            if (void 0 === t) {
              let n = await g();
              (t = "bigint" == typeof n?.baseFeePerGas), ez.set(e.uid, t);
            }
            p.type = t ? "eip1559" : "legacy";
          }
        if (d.includes("fees"))
          if ("legacy" !== p.type && "eip2930" !== p.type) {
            if (
              void 0 === p.maxFeePerGas ||
              void 0 === p.maxPriorityFeePerGas
            ) {
              let n = await g(),
                { maxFeePerGas: i, maxPriorityFeePerGas: r } = await eg(e, {
                  block: n,
                  chain: s,
                  request: p,
                });
              if (
                void 0 === t.maxPriorityFeePerGas &&
                t.maxFeePerGas &&
                t.maxFeePerGas < r
              )
                throw new ec({ maxPriorityFeePerGas: r });
              (p.maxPriorityFeePerGas = r), (p.maxFeePerGas = i);
            }
          } else {
            if (void 0 !== t.maxFeePerGas || void 0 !== t.maxPriorityFeePerGas)
              throw new eo();
            if (void 0 === t.gasPrice) {
              let t = await g(),
                { gasPrice: n } = await eg(e, {
                  block: t,
                  chain: s,
                  request: p,
                  type: "legacy",
                });
              p.gasPrice = n;
            }
          }
        return (
          d.includes("gas") &&
            void 0 === o &&
            (p.gas = await $(
              e,
              eT,
              "estimateGas"
            )({
              ...p,
              account: f ? { address: f.address, type: "json-rpc" } : f,
            })),
          (0, eB.c)(p),
          delete p.parameters,
          p
        );
      }
      async function eH(e, t) {
        let { account: n, chainId: i, ...a } = t,
          s = n ?? (0, r.s)(e).address;
        return Y(
          e.getClient({ chainId: i }),
          eW,
          "prepareTransactionRequest"
        )({ ...a, ...(s ? { account: s } : {}) });
      }
      var eK = n(30445);
      async function eQ(e, { serializedTransaction: t }) {
        return e.request(
          { method: "eth_sendRawTransaction", params: [t] },
          { retryCount: 0 }
        );
      }
      let eV = new (n(65003).A)(128);
      async function eY(e, t) {
        let {
          account: n = e.account,
          chain: i = e.chain,
          accessList: r,
          authorizationList: a,
          blobs: s,
          data: o,
          gas: c,
          gasPrice: u,
          maxFeePerBlobGas: l,
          maxFeePerGas: d,
          maxPriorityFeePerGas: h,
          nonce: f,
          type: p,
          value: m,
          ...g
        } = t;
        if (void 0 === n)
          throw new ee({ docsPath: "/docs/actions/wallet/sendTransaction" });
        let y = n ? (0, J.J)(n) : null;
        try {
          (0, eB.c)(t);
          let n = await (async () =>
            t.to
              ? t.to
              : null !== t.to && a && a.length > 0
              ? await eI({ authorization: a[0] }).catch(() => {
                  throw new X.C(
                    "`to` is required. Could not infer from `authorizationList`."
                  );
                })
              : void 0)();
          if (y?.type === "json-rpc" || null === y) {
            let t;
            null !== i &&
              ((t = await $(e, eU, "getChainId")({})),
              (function ({ chain: e, currentChainId: t }) {
                if (!e) throw new eK.jF();
                if (t !== e.id)
                  throw new eK.EH({ chain: e, currentChainId: t });
              })({ currentChainId: t, chain: i }));
            let b = e.chain?.formatters?.transactionRequest?.format,
              w = (b || eO.Bv)({
                ...(0, e_.o)(g, { format: b }),
                accessList: r,
                authorizationList: a,
                blobs: s,
                chainId: t,
                data: o,
                from: y?.address,
                gas: c,
                gasPrice: u,
                maxFeePerBlobGas: l,
                maxFeePerGas: d,
                maxPriorityFeePerGas: h,
                nonce: f,
                to: n,
                type: p,
                value: m,
              }),
              v = eV.get(e.uid);
            try {
              return await e.request(
                {
                  method: v ? "wallet_sendTransaction" : "eth_sendTransaction",
                  params: [w],
                },
                { retryCount: 0 }
              );
            } catch (t) {
              if (!1 === v) throw t;
              if (
                "InvalidInputRpcError" === t.name ||
                "InvalidParamsRpcError" === t.name ||
                "MethodNotFoundRpcError" === t.name ||
                "MethodNotSupportedRpcError" === t.name
              )
                return await e
                  .request(
                    { method: "wallet_sendTransaction", params: [w] },
                    { retryCount: 0 }
                  )
                  .then((t) => (eV.set(e.uid, !0), t))
                  .catch((n) => {
                    if (
                      "MethodNotFoundRpcError" === n.name ||
                      "MethodNotSupportedRpcError" === n.name
                    )
                      throw (eV.set(e.uid, !1), t);
                    throw n;
                  });
              throw t;
            }
          }
          if (y?.type === "local") {
            let t = await $(
                e,
                eW,
                "prepareTransactionRequest"
              )({
                account: y,
                accessList: r,
                authorizationList: a,
                blobs: s,
                chain: i,
                data: o,
                gas: c,
                gasPrice: u,
                maxFeePerBlobGas: l,
                maxFeePerGas: d,
                maxPriorityFeePerGas: h,
                nonce: f,
                nonceManager: y.nonceManager,
                parameters: [...eD, "sidecars"],
                type: p,
                value: m,
                ...g,
                to: n,
              }),
              b = i?.serializers?.transaction,
              w = await y.signTransaction(t, { serializer: b });
            return await $(
              e,
              eQ,
              "sendRawTransaction"
            )({ serializedTransaction: w });
          }
          if (y?.type === "smart")
            throw new et({
              metaMessages: [
                "Consider using the `sendUserOperation` Action instead.",
              ],
              docsPath: "/docs/actions/bundler/sendUserOperation",
              type: "smart",
            });
          throw new et({
            docsPath: "/docs/actions/wallet/sendTransaction",
            type: y?.type,
          });
        } catch (e) {
          if (e instanceof et) throw e;
          throw (function (e, { docsPath: t, ...n }) {
            let i = (() => {
              let t = (0, eN.l)(e, n);
              return t instanceof eM.RM ? e : t;
            })();
            return new eA.$s(i, { docsPath: t, ...n });
          })(e, { ...t, account: y, chain: t.chain || void 0 });
        }
      }
      async function eZ(e, t) {
        let n,
          { account: i, chainId: r, connector: a, ...s } = t,
          o = Y(
            "object" == typeof i && i?.type === "local"
              ? e.getClient({ chainId: r })
              : await (0, ei.r)(e, {
                  account: i ?? void 0,
                  chainId: r,
                  connector: a,
                }),
            eY,
            "sendTransaction"
          );
        return await o({
          ...s,
          ...(i ? { account: i } : {}),
          chain: r ? { id: r } : null,
          gas: s.gas ?? void 0,
        });
      }
      var eJ = n(62739);
      async function eX(
        e,
        { blockHash: t, blockNumber: n, blockTag: i, hash: r, index: a }
      ) {
        let s = i || "latest",
          o = void 0 !== n ? (0, m.cK)(n) : void 0,
          c = null;
        if (
          (r
            ? (c = await e.request(
                { method: "eth_getTransactionByHash", params: [r] },
                { dedupe: !0 }
              ))
            : t
            ? (c = await e.request(
                {
                  method: "eth_getTransactionByBlockHashAndIndex",
                  params: [t, (0, m.cK)(a)],
                },
                { dedupe: !0 }
              ))
            : (o || s) &&
              (c = await e.request(
                {
                  method: "eth_getTransactionByBlockNumberAndIndex",
                  params: [o || s, (0, m.cK)(a)],
                },
                { dedupe: !!o }
              )),
          !c)
        )
          throw new eA.Kz({
            blockHash: t,
            blockNumber: n,
            blockTag: s,
            hash: r,
            index: a,
          });
        return (e.chain?.formatters?.transaction?.format || eh)(c);
      }
      let e0 = { "0x0": "reverted", "0x1": "success" };
      async function e1(e, { hash: t }) {
        let n = await e.request(
          { method: "eth_getTransactionReceipt", params: [t] },
          { dedupe: !0 }
        );
        if (!n) throw new eA.Kc({ hash: t });
        return (
          e.chain?.formatters?.transactionReceipt?.format ||
          function (e) {
            let t = {
              ...e,
              blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
              contractAddress: e.contractAddress ? e.contractAddress : null,
              cumulativeGasUsed: e.cumulativeGasUsed
                ? BigInt(e.cumulativeGasUsed)
                : null,
              effectiveGasPrice: e.effectiveGasPrice
                ? BigInt(e.effectiveGasPrice)
                : null,
              gasUsed: e.gasUsed ? BigInt(e.gasUsed) : null,
              logs: e.logs ? e.logs.map((e) => H(e)) : null,
              to: e.to ? e.to : null,
              transactionIndex: e.transactionIndex
                ? (0, eu.ME)(e.transactionIndex)
                : null,
              status: e.status ? e0[e.status] : null,
              type: e.type ? ed[e.type] || e.type : null,
            };
            return (
              e.blobGasPrice && (t.blobGasPrice = BigInt(e.blobGasPrice)),
              e.blobGasUsed && (t.blobGasUsed = BigInt(e.blobGasUsed)),
              t
            );
          }
        )(n);
      }
      let e2 = new Map(),
        e5 = new Map();
      async function e6(
        e,
        { cacheKey: t, cacheTime: n = Number.POSITIVE_INFINITY }
      ) {
        let i = (function (e) {
            let t = (e, t) => ({
                clear: () => t.delete(e),
                get: () => t.get(e),
                set: (n) => t.set(e, n),
              }),
              n = t(e, e2),
              i = t(e, e5);
            return {
              clear: () => {
                n.clear(), i.clear();
              },
              promise: n,
              response: i,
            };
          })(t),
          r = i.response.get();
        if (r && n > 0 && new Date().getTime() - r.created.getTime() < n)
          return r.data;
        let a = i.promise.get();
        a || ((a = e()), i.promise.set(a));
        try {
          let e = await a;
          return i.response.set({ created: new Date(), data: e }), e;
        } finally {
          i.promise.clear();
        }
      }
      let e3 = (e) => `blockNumber.${e}`;
      async function e8(e, { cacheTime: t = e.cacheTime } = {}) {
        return BigInt(
          await e6(() => e.request({ method: "eth_blockNumber" }), {
            cacheKey: e3(e.uid),
            cacheTime: t,
          })
        );
      }
      function e4(
        e,
        {
          emitOnBegin: t = !1,
          emitMissed: n = !1,
          onBlockNumber: i,
          onError: r,
          poll: a,
          pollingInterval: s = e.pollingInterval,
        }
      ) {
        let o;
        return (
          void 0 !== a
            ? a
            : "webSocket" !== e.transport.type &&
              ("fallback" !== e.transport.type ||
                "webSocket" !== e.transport.transports[0].config.type)
        )
          ? O(
              (0, S.A)(["watchBlockNumber", e.uid, t, n, s]),
              { onBlockNumber: i, onError: r },
              (i) =>
                B(
                  async () => {
                    try {
                      let t = await $(
                        e,
                        e8,
                        "getBlockNumber"
                      )({ cacheTime: 0 });
                      if (o) {
                        if (t === o) return;
                        if (t - o > 1 && n)
                          for (let e = o + 1n; e < t; e++)
                            i.onBlockNumber(e, o), (o = e);
                      }
                      (!o || t > o) && (i.onBlockNumber(t, o), (o = t));
                    } catch (e) {
                      i.onError?.(e);
                    }
                  },
                  { emitOnBegin: t, interval: s }
                )
            )
          : O(
              (0, S.A)(["watchBlockNumber", e.uid, t, n]),
              { onBlockNumber: i, onError: r },
              (t) => {
                let n = !0,
                  i = () => (n = !1);
                return (
                  (async () => {
                    try {
                      let r = (() => {
                          if ("fallback" === e.transport.type) {
                            let t = e.transport.transports.find(
                              (e) => "webSocket" === e.config.type
                            );
                            return t ? t.value : e.transport;
                          }
                          return e.transport;
                        })(),
                        { unsubscribe: a } = await r.subscribe({
                          params: ["newHeads"],
                          onData(e) {
                            if (!n) return;
                            let i = (0, eu.uU)(e.result?.number);
                            t.onBlockNumber(i, o), (o = i);
                          },
                          onError(e) {
                            t.onError?.(e);
                          },
                        });
                      (i = a), n || i();
                    } catch (e) {
                      r?.(e);
                    }
                  })(),
                  () => i()
                );
              }
            );
      }
      async function e9(
        e,
        {
          confirmations: t = 1,
          hash: n,
          onReplaced: i,
          pollingInterval: r = e.pollingInterval,
          retryCount: a = 6,
          retryDelay: s = ({ count: e }) => 200 * ~~(1 << e),
          timeout: o = 18e4,
        }
      ) {
        let c,
          u,
          l,
          d = (0, S.A)(["waitForTransactionReceipt", e.uid, n]),
          h = !1,
          { promise: f, resolve: m, reject: g } = (0, eJ.Y)(),
          y = o ? setTimeout(() => g(new eA.WA({ hash: n })), o) : void 0,
          b = O(d, { onReplaced: i, resolve: m, reject: g }, (i) => {
            let o = $(
              e,
              e4,
              "watchBlockNumber"
            )({
              emitMissed: !0,
              emitOnBegin: !0,
              poll: !0,
              pollingInterval: r,
              async onBlockNumber(r) {
                let d = (e) => {
                    clearTimeout(y), o(), e(), b();
                  },
                  f = r;
                if (!h)
                  try {
                    if (l) {
                      if (
                        t > 1 &&
                        (!l.blockNumber || f - l.blockNumber + 1n < t)
                      )
                        return;
                      d(() => i.resolve(l));
                      return;
                    }
                    if (
                      (c ||
                        ((h = !0),
                        await (0, p.b)(
                          async () => {
                            (c = await $(e, eX, "getTransaction")({ hash: n }))
                              .blockNumber && (f = c.blockNumber);
                          },
                          { delay: s, retryCount: a }
                        ),
                        (h = !1)),
                      (l = await $(
                        e,
                        e1,
                        "getTransactionReceipt"
                      )({ hash: n })),
                      t > 1 && (!l.blockNumber || f - l.blockNumber + 1n < t))
                    )
                      return;
                    d(() => i.resolve(l));
                  } catch (n) {
                    if (n instanceof eA.Kz || n instanceof eA.Kc) {
                      if (!c) {
                        h = !1;
                        return;
                      }
                      try {
                        (u = c), (h = !0);
                        let n = await (0, p.b)(
                          () =>
                            $(
                              e,
                              ef,
                              "getBlock"
                            )({ blockNumber: f, includeTransactions: !0 }),
                          {
                            delay: s,
                            retryCount: a,
                            shouldRetry: ({ error: e }) => e instanceof el,
                          }
                        );
                        h = !1;
                        let r = n.transactions.find(
                          ({ from: e, nonce: t }) =>
                            e === u.from && t === u.nonce
                        );
                        if (
                          !r ||
                          ((l = await $(
                            e,
                            e1,
                            "getTransactionReceipt"
                          )({ hash: r.hash })),
                          t > 1 &&
                            (!l.blockNumber || f - l.blockNumber + 1n < t))
                        )
                          return;
                        let o = "replaced";
                        r.to === u.to &&
                        r.value === u.value &&
                        r.input === u.input
                          ? (o = "repriced")
                          : r.from === r.to &&
                            0n === r.value &&
                            (o = "cancelled"),
                          d(() => {
                            i.onReplaced?.({
                              reason: o,
                              replacedTransaction: u,
                              transaction: r,
                              transactionReceipt: l,
                            }),
                              i.resolve(l);
                          });
                      } catch (e) {
                        d(() => i.reject(e));
                      }
                    } else d(() => i.reject(n));
                  }
              },
            });
          });
        return f;
      }
      var e7 = n(8333);
      async function te(e, t) {
        let { chainId: n, timeout: i = 0, ...r } = t,
          a = e.getClient({ chainId: n }),
          s = Y(a, e9, "waitForTransactionReceipt"),
          o = await s({ ...r, timeout: i });
        if ("reverted" === o.status) {
          let e = Y(a, eX, "getTransaction"),
            t = await e({ hash: o.transactionHash }),
            n = Y(a, e7.T, "call"),
            i = await n({
              ...t,
              data: t.input,
              gasPrice: "eip1559" !== t.type ? t.gasPrice : void 0,
              maxFeePerGas: "eip1559" === t.type ? t.maxFeePerGas : void 0,
              maxPriorityFeePerGas:
                "eip1559" === t.type ? t.maxPriorityFeePerGas : void 0,
            });
          throw Error(
            i?.data
              ? (0, eu.IQ)(`0x${i.data.substring(138)}`)
              : "unknown reason"
          );
        }
        return { ...o, chainId: a.chain.id };
      }
      var tt = n(60367),
        tn = n(35109),
        ti = n(90557);
      function tr(
        e,
        { abi: t, address: n, args: i, docsPath: r, functionName: a, sender: s }
      ) {
        let o =
            e instanceof tn.$S
              ? e
              : e instanceof X.C
              ? e.walk((e) => "data" in e) || e.walk()
              : {},
          { code: c, data: u, details: l, message: d, shortMessage: f } = o,
          p =
            e instanceof j.O
              ? new tn.rR({ functionName: a })
              : [3, h.bq.code].includes(c) && (u || l || d || f)
              ? new tn.M({
                  abi: t,
                  data: "object" == typeof u ? u.data : u,
                  functionName: a,
                  message: o instanceof ti.J8 ? l : f ?? d,
                })
              : e;
        return new tn.bG(p, {
          abi: t,
          args: i,
          contractAddress: n,
          docsPath: r,
          functionName: a,
          sender: s,
        });
      }
      async function ta(e, t) {
        let {
          abi: n,
          account: i = e.account,
          address: r,
          args: a,
          dataSuffix: s,
          functionName: o,
          ...c
        } = t;
        if (void 0 === i)
          throw new ee({ docsPath: "/docs/contract/writeContract" });
        let u = i ? (0, J.J)(i) : null,
          l = (0, tt.p)({ abi: n, args: a, functionName: o });
        try {
          return await $(
            e,
            eY,
            "sendTransaction"
          )({
            data: `${l}${s ? s.replace("0x", "") : ""}`,
            to: r,
            account: u,
            ...c,
          });
        } catch (e) {
          throw tr(e, {
            abi: n,
            address: r,
            args: a,
            docsPath: "/docs/contract/writeContract",
            functionName: o,
            sender: u?.address,
          });
        }
      }
      async function ts(e, t) {
        let n,
          { account: i, chainId: r, connector: a, ...s } = t,
          o = Y(
            "object" == typeof i && i?.type === "local"
              ? e.getClient({ chainId: r })
              : await (0, ei.r)(e, {
                  account: i ?? void 0,
                  chainId: r,
                  connector: a,
                }),
            ta,
            "writeContract"
          );
        return await o({
          ...s,
          ...(i ? { account: i } : {}),
          chain: r ? { id: r } : null,
        });
      }
      async function to(e, t) {
        let n,
          { chainId: i, connector: r, ...a } = t;
        return (
          (n = t.account
            ? t.account
            : (
                await (0, ei.r)(e, {
                  account: t.account,
                  chainId: i,
                  connector: r,
                })
              ).account),
          Y(
            e.getClient({ chainId: i }),
            eT,
            "estimateGas"
          )({ ...a, account: n })
        );
      }
      var tc = n(34250);
      let tu = [];
      function tl(e) {
        let t = [...e.state.connections.values()];
        return "reconnecting" === e.state.status || (0, tc.b)(tu, t)
          ? tu
          : ((tu = t), t);
      }
      async function td(e, t) {
        let n;
        if (
          (n =
            "function" == typeof t.connector
              ? e._internal.connectors.setup(t.connector)
              : t.connector).uid === e.state.current
        )
          throw new g.nM();
        try {
          e.setState((e) => ({ ...e, status: "connecting" })),
            n.emitter.emit("message", { type: "connecting" });
          let { connector: i, ...r } = t,
            a = await n.connect(r),
            s = a.accounts;
          return (
            n.emitter.off("connect", e._internal.events.connect),
            n.emitter.on("change", e._internal.events.change),
            n.emitter.on("disconnect", e._internal.events.disconnect),
            await e.storage?.setItem("recentConnectorId", n.id),
            e.setState((e) => ({
              ...e,
              connections: new Map(e.connections).set(n.uid, {
                accounts: s,
                chainId: a.chainId,
                connector: n,
              }),
              current: n.uid,
              status: "connected",
            })),
            { accounts: s, chainId: a.chainId }
          );
        } catch (t) {
          throw (
            (e.setState((e) => ({
              ...e,
              status: e.current ? "connected" : "disconnected",
            })),
            t)
          );
        }
      }
      var th = n(35451),
        tf = n(75483),
        tp = n(54335),
        tm = n(1405),
        tg = n(77136);
      function ty(e) {
        return "number" == typeof e ? e : "wei" === e ? 0 : Math.abs(tg.pj[e]);
      }
      var tb = n(14493),
        tw = n(69330),
        tv = n(13861);
      async function tC(e, t) {
        let { abi: n, address: i, args: r, functionName: a, ...s } = t,
          o = (0, tt.p)({ abi: n, args: r, functionName: a });
        try {
          let { data: t } = await $(e, e7.T, "call")({ ...s, data: o, to: i });
          return (0, tw.e)({
            abi: n,
            args: r,
            functionName: a,
            data: t || "0x",
          });
        } catch (e) {
          throw tr(e, {
            abi: n,
            address: i,
            args: r,
            docsPath: "/docs/contract/readContract",
            functionName: a,
          });
        }
      }
      async function tx(e, t) {
        let {
            allowFailure: n = !0,
            batchSize: i,
            blockNumber: r,
            blockTag: a,
            multicallAddress: s,
            stateOverride: o,
          } = t,
          c = t.contracts,
          u =
            i ??
            (("object" == typeof e.batch?.multicall &&
              e.batch.multicall.batchSize) ||
              1024),
          l = s;
        if (!l) {
          if (!e.chain)
            throw Error(
              "client chain not configured. multicallAddress is required."
            );
          l = (0, tv.M)({
            blockNumber: r,
            chain: e.chain,
            contract: "multicall3",
          });
        }
        let d = [[]],
          h = 0,
          f = 0;
        for (let e = 0; e < c.length; e++) {
          let { abi: t, address: i, args: r, functionName: a } = c[e];
          try {
            let e = (0, tt.p)({ abi: t, args: r, functionName: a });
            (f += (e.length - 2) / 2),
              u > 0 &&
                f > u &&
                d[h].length > 0 &&
                (h++, (f = (e.length - 2) / 2), (d[h] = [])),
              (d[h] = [...d[h], { allowFailure: !0, callData: e, target: i }]);
          } catch (s) {
            let e = tr(s, {
              abi: t,
              address: i,
              args: r,
              docsPath: "/docs/contract/multicall",
              functionName: a,
            });
            if (!n) throw e;
            d[h] = [...d[h], { allowFailure: !0, callData: "0x", target: i }];
          }
        }
        let p = await Promise.allSettled(
            d.map((t) =>
              $(
                e,
                tC,
                "readContract"
              )({
                abi: tb.v2,
                address: l,
                args: [t],
                blockNumber: r,
                blockTag: a,
                functionName: "aggregate3",
                stateOverride: o,
              })
            )
          ),
          m = [];
        for (let e = 0; e < p.length; e++) {
          let t = p[e];
          if ("rejected" === t.status) {
            if (!n) throw t.reason;
            for (let n = 0; n < d[e].length; n++)
              m.push({ status: "failure", error: t.reason, result: void 0 });
            continue;
          }
          let i = t.value;
          for (let t = 0; t < i.length; t++) {
            let { returnData: r, success: a } = i[t],
              { callData: s } = d[e][t],
              { abi: o, address: u, functionName: l, args: h } = c[m.length];
            try {
              if ("0x" === s) throw new j.O();
              if (!a) throw new tn.$S({ data: r });
              let e = (0, tw.e)({ abi: o, args: h, data: r, functionName: l });
              m.push(n ? { result: e, status: "success" } : e);
            } catch (t) {
              let e = tr(t, {
                abi: o,
                address: u,
                args: h,
                docsPath: "/docs/contract/multicall",
                functionName: l,
              });
              if (!n) throw e;
              m.push({ error: e, result: void 0, status: "failure" });
            }
          }
        }
        if (m.length !== c.length) throw new X.C("multicall results mismatch");
        return m;
      }
      async function tP(e, t) {
        let { allowFailure: n = !0, chainId: i, contracts: r, ...a } = t;
        return Y(
          e.getClient({ chainId: i }),
          tx,
          "multicall"
        )({ allowFailure: n, contracts: r, ...a });
      }
      async function tI(e, t) {
        let { allowFailure: n = !0, blockNumber: i, blockTag: r, ...a } = t,
          s = t.contracts;
        try {
          let t = {};
          for (let [n, i] of s.entries()) {
            let r = i.chainId ?? e.state.chainId;
            t[r] || (t[r] = []), t[r]?.push({ contract: i, index: n });
          }
          let o = (
              await Promise.all(
                Object.entries(t).map(([t, s]) =>
                  tP(e, {
                    ...a,
                    allowFailure: n,
                    blockNumber: i,
                    blockTag: r,
                    chainId: Number.parseInt(t),
                    contracts: s.map(({ contract: e }) => e),
                  })
                )
              )
            ).flat(),
            c = Object.values(t).flatMap((e) => e.map(({ index: e }) => e));
          return o.reduce((e, t, n) => (e && (e[c[n]] = t), e), []);
        } catch (a) {
          if (a instanceof tn.bG) throw a;
          let t = () =>
            s.map((t) =>
              (function (e, t) {
                let { chainId: n, ...i } = t;
                return Y(e.getClient({ chainId: n }), tC, "readContract")(i);
              })(e, { ...t, blockNumber: i, blockTag: r })
            );
          if (n)
            return (await Promise.allSettled(t())).map((e) =>
              "fulfilled" === e.status
                ? { result: e.value, status: "success" }
                : { error: e.reason, result: void 0, status: "failure" }
            );
          return await Promise.all(t());
        }
      }
      async function tE(e, t) {
        let {
          address: n,
          blockNumber: i,
          blockTag: r,
          chainId: a,
          token: s,
          unit: o = "ether",
        } = t;
        if (s)
          try {
            return await tA(e, {
              balanceAddress: n,
              chainId: a,
              symbolType: "string",
              tokenAddress: s,
            });
          } catch (t) {
            if ("ContractFunctionExecutionError" === t.name) {
              let t = await tA(e, {
                  balanceAddress: n,
                  chainId: a,
                  symbolType: "bytes32",
                  tokenAddress: s,
                }),
                i = (0, eu.IQ)((0, tp.B)(t.symbol, { dir: "right" }));
              return { ...t, symbol: i };
            }
            throw t;
          }
        let c = e.getClient({ chainId: a }),
          u = Y(c, eS, "getBalance"),
          l = await u(
            i ? { address: n, blockNumber: i } : { address: n, blockTag: r }
          ),
          d = e.chains.find((e) => e.id === a) ?? c.chain;
        return {
          decimals: d.nativeCurrency.decimals,
          formatted: (0, tm.J)(l, ty(o)),
          symbol: d.nativeCurrency.symbol,
          value: l,
        };
      }
      async function tA(e, t) {
        let {
            balanceAddress: n,
            chainId: i,
            symbolType: r,
            tokenAddress: a,
            unit: s,
          } = t,
          o = {
            abi: [
              {
                type: "function",
                name: "balanceOf",
                stateMutability: "view",
                inputs: [{ type: "address" }],
                outputs: [{ type: "uint256" }],
              },
              {
                type: "function",
                name: "decimals",
                stateMutability: "view",
                inputs: [],
                outputs: [{ type: "uint8" }],
              },
              {
                type: "function",
                name: "symbol",
                stateMutability: "view",
                inputs: [],
                outputs: [{ type: r }],
              },
            ],
            address: a,
          },
          [c, u, l] = await tI(e, {
            allowFailure: !1,
            contracts: [
              { ...o, functionName: "balanceOf", args: [n], chainId: i },
              { ...o, functionName: "decimals", chainId: i },
              { ...o, functionName: "symbol", chainId: i },
            ],
          }),
          d = (0, tm.J)(c ?? "0", ty(s ?? u));
        return { decimals: u, formatted: d, symbol: l, value: c };
      }
      async function t$(e, t = {}) {
        let n;
        if (t.connector) n = t.connector;
        else {
          let { connections: t, current: i } = e.state,
            r = t.get(i);
          n = r?.connector;
        }
        let i = e.state.connections;
        n &&
          (await n.disconnect(),
          n.emitter.off("change", e._internal.events.change),
          n.emitter.off("disconnect", e._internal.events.disconnect),
          n.emitter.on("connect", e._internal.events.connect),
          i.delete(n.uid)),
          e.setState((e) => {
            if (0 === i.size)
              return {
                ...e,
                connections: new Map(),
                current: null,
                status: "disconnected",
              };
            let t = i.values().next().value;
            return { ...e, connections: new Map(i), current: t.connector.uid };
          });
        {
          let t = e.state.current;
          if (!t) return;
          let n = e.state.connections.get(t)?.connector;
          if (!n) return;
          await e.storage?.setItem("recentConnectorId", n.id);
        }
      }
      class tM extends X.C {
        constructor({ value: e }) {
          super(`Number \`${e}\` is not a valid decimal number.`, {
            name: "InvalidDecimalNumberError",
          });
        }
      }
      n(82922);
      var tN = n(27882),
        t_ = n(60500),
        tO = n(26343),
        tk = n(35558),
        tB = n(5582),
        tS = n(31811),
        tT = n(93813),
        tj = n(99843),
        tF = n(2568),
        tR = n(90906),
        tG = n(79277),
        tq = n(11076),
        tL = n(28307),
        tU = n(62862);
      n(50254);
      var tD = n(96641);
      function tz(e, t) {
        let n,
          i,
          r,
          a,
          s,
          o,
          c,
          u = e.isNewChainsStale ?? !0;
        return (0, b.U)((e) => ({
          id: "walletConnect",
          name: "WalletConnect",
          type: tz.type,
          async setup() {
            let e = await this.getProvider().catch(() => null);
            e &&
              (a || ((a = this.onConnect.bind(this)), e.on("connect", a)),
              o ||
                ((o = this.onSessionDelete.bind(this)),
                e.on("session_delete", o)));
          },
          async connect({ ...e } = {}) {
            try {
              let t = tR.W.getCaipNetworks(),
                n = await this.getProvider();
              if (!n) throw new y.N();
              s || ((s = this.onDisplayUri), n.on("display_uri", s));
              let u = await this.isChainsStale();
              n.session && u && (await n.disconnect());
              let l = tD.H.state.universalProviderConfigOverride;
              if (!n.session || u) {
                let i = tN.kl.createNamespaces(t, l);
                await n.connect({
                  optionalNamespaces: i,
                  ...("pairingTopic" in e
                    ? { pairingTopic: e.pairingTopic }
                    : {}),
                }),
                  this.setRequestedChainsIds(t.map((e) => Number(e.id)));
              }
              let d = await this.getAccounts(),
                h = await this.getChainId(),
                f = n.session?.namespaces?.eip155?.chains,
                p = f?.some((e) => Number(e.split(":")[1]) === h),
                m = 1;
              p ? (m = h) : f?.[0] && (m = Number(f[0].split(":")[1])),
                s && (n.removeListener("display_uri", s), (s = void 0)),
                a && (n.removeListener("connect", a), (a = void 0)),
                i ||
                  ((i = this.onAccountsChanged.bind(this)),
                  n.on("accountsChanged", i)),
                r ||
                  ((r = this.onChainChanged.bind(this)),
                  n.on("chainChanged", r)),
                c ||
                  ((c = this.onDisconnect.bind(this)), n.on("disconnect", c)),
                o ||
                  ((o = this.onSessionDelete.bind(this)),
                  n.on("session_delete", o));
              let g = l?.defaultChain;
              return (
                n.setDefaultChain(g ?? `eip155:${m}`),
                { accounts: d, chainId: m }
              );
            } catch (e) {
              if (/(user rejected|connection request reset)/i.test(e?.message))
                throw new h.vx(e);
              throw e;
            }
          },
          async disconnect() {
            let e = await this.getProvider();
            try {
              await e?.disconnect();
            } catch (e) {
              if (!/No matching key/i.test(e.message)) throw e;
            } finally {
              r && (e?.removeListener("chainChanged", r), (r = void 0)),
                c && (e?.removeListener("disconnect", c), (c = void 0)),
                a || ((a = this.onConnect.bind(this)), e?.on("connect", a)),
                i && (e?.removeListener("accountsChanged", i), (i = void 0)),
                o && (e?.removeListener("session_delete", o), (o = void 0)),
                this.setRequestedChainsIds([]);
            }
          },
          async getAccounts() {
            let e = await this.getProvider();
            if (!e?.session?.namespaces) return [];
            let t = e?.session?.namespaces[t_.o.CHAIN.EVM]?.accounts;
            return t?.map((e) => e.split(":")[2]) ?? [];
          },
          async getProvider({ chainId: e } = {}) {
            n ||
              ((n = await t.getUniversalProvider()),
              n?.events.setMaxListeners(Number.POSITIVE_INFINITY));
            let i = tB.i.getActiveNamespace(),
              r = t.getCaipNetwork()?.id;
            if (e && r !== e && i) {
              let e = tB.i.getStoredActiveCaipNetworkId(),
                n = t.getCaipNetworks(i),
                r = n?.find((t) => t.id === e);
              r &&
                r.chainNamespace === t_.o.CHAIN.EVM &&
                (await this.switchChain?.({ chainId: Number(r.id) }));
            }
            return n;
          },
          async getChainId() {
            let e = t.getCaipNetwork(t_.o.CHAIN.EVM)?.id;
            if (e) return e;
            let n = await this.getProvider(),
              i = n.session?.namespaces[t_.o.CHAIN.EVM]?.chains?.[0],
              r = tR.W.getCaipNetworks().find((e) => e.id === i);
            return r?.id;
          },
          async isAuthorized() {
            try {
              let [e, t] = await Promise.all([
                this.getAccounts(),
                this.getProvider(),
              ]);
              if (!e.length) return !1;
              if ((await this.isChainsStale()) && t.session)
                return await t.disconnect().catch(() => {}), !1;
              return !0;
            } catch {
              return !1;
            }
          },
          async switchChain({ addEthereumChainParameter: t, chainId: n }) {
            let i = await this.getProvider();
            if (!i) throw new y.N();
            let r = tR.W.getCaipNetworks().find((e) => e.id === n);
            if (!r) throw new h.ch(new g.nk());
            try {
              await i.request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId: (0, m.cK)(n) }],
              }),
                r?.caipNetworkId && i.setDefaultChain(r?.caipNetworkId),
                e.emitter.emit("change", { chainId: Number(n) });
              let t = await this.getRequestedChainsIds();
              return this.setRequestedChainsIds([...t, n]), { ...r, id: r.id };
            } catch (e) {
              if (/(?:user rejected)/iu.test(e.message)) throw new h.vx(e);
              try {
                let e;
                e = t?.blockExplorerUrls
                  ? t.blockExplorerUrls
                  : r.blockExplorers?.default.url
                  ? [r.blockExplorers?.default.url]
                  : [];
                let a = r.rpcUrls?.chainDefault?.http || [],
                  s = {
                    blockExplorerUrls: e,
                    chainId: (0, m.cK)(n),
                    chainName: r.name,
                    iconUrls: t?.iconUrls,
                    nativeCurrency: r.nativeCurrency,
                    rpcUrls: a,
                  };
                await i.request({
                  method: "wallet_addEthereumChain",
                  params: [s],
                });
                let o = await this.getRequestedChainsIds();
                return (
                  this.setRequestedChainsIds([...o, n]), { ...r, id: r.id }
                );
              } catch (e) {
                throw new h.vx(e);
              }
            }
          },
          onAccountsChanged(t) {
            0 === t.length
              ? this.onDisconnect()
              : e.emitter.emit("change", {
                  accounts: t.map((e) => (0, d.b)(e)),
                });
          },
          onChainChanged(t) {
            let n = Number(t);
            e.emitter.emit("change", { chainId: n });
          },
          onConnect(e) {
            this.setRequestedChainsIds(
              tR.W.getCaipNetworks().map((e) => Number(e.id))
            );
          },
          async onDisconnect(t) {
            this.setRequestedChainsIds([]), e.emitter.emit("disconnect");
            let n = await this.getProvider();
            i && (n.removeListener("accountsChanged", i), (i = void 0)),
              r && (n.removeListener("chainChanged", r), (r = void 0)),
              c && (n.removeListener("disconnect", c), (c = void 0)),
              o && (n.removeListener("session_delete", o), (o = void 0)),
              a || ((a = this.onConnect.bind(this)), n.on("connect", a));
          },
          onDisplayUri(t) {
            e.emitter.emit("message", { type: "display_uri", data: t });
          },
          onSessionDelete() {
            this.onDisconnect();
          },
          getNamespaceChainsIds() {
            if (!n?.session?.namespaces) return [];
            let e = n?.session?.namespaces[t_.o.CHAIN.EVM]?.accounts;
            return e?.map((e) => Number.parseInt(e.split(":")[1] ?? "")) ?? [];
          },
          async getRequestedChainsIds() {
            return [
              ...new Set(
                (await e.storage?.getItem(this.requestedChainsStorageKey)) ?? []
              ),
            ];
          },
          async isChainsStale() {
            if (!u) return !1;
            let t = e.chains.map((e) => e.id),
              n = this.getNamespaceChainsIds();
            if (n.length && !n.some((e) => t.includes(e))) return !1;
            let i = await this.getRequestedChainsIds();
            return !t.every((e) => i.includes(Number(e)));
          },
          async setRequestedChainsIds(t) {
            await e.storage?.setItem(this.requestedChainsStorageKey, t);
          },
          get requestedChainsStorageKey() {
            return `${this.id}.requestedChains`;
          },
        }));
      }
      tz.type = "walletConnect";
      var tW = n(43708),
        tH = n(70799);
      let tK = (0, tW.BX)({ pendingTransactions: 0 }),
        tQ = {
          state: tK,
          subscribeKey: (e, t) => (0, tH.u$)(tK, e, t),
          increase(e) {
            tK[e] += 1;
          },
          decrease(e) {
            tK[e] -= 1;
          },
          reset(e) {
            tK[e] = 0;
          },
        };
      async function tV(e) {
        if (tk.w.isSafeApp()) {
          let { safe: t } = await n.e(1333).then(n.bind(n, 41333));
          if (t && !e.some((e) => "safe" === e.type)) return t();
        }
        return null;
      }
      async function tY(e) {
        try {
          let { coinbaseWallet: t } = await n.e(1333).then(n.bind(n, 41333));
          if (t && !e.some((e) => "coinbaseWalletSDK" === e.id)) return t();
        } catch (e) {
          console.error("Failed to import Coinbase Wallet SDK:", e);
        }
        return null;
      }
      let tZ = { enable: !1, pollingInterval: 3e4 };
      class tJ extends tj.X {
        constructor(e) {
          let t = tS.R.extendCaipNetworks(e.networks, {
            projectId: e.projectId,
            customNetworkImageUrls: {},
            customRpcUrls: e.customRpcUrls,
          });
          super(),
            (this.balancePromises = {}),
            (this.namespace = t_.o.CHAIN.EVM),
            (this.adapterType = t_.o.ADAPTER_TYPES.WAGMI),
            (this.projectId = e.projectId),
            (this.pendingTransactionsFilter = {
              ...tZ,
              ...(e.pendingTransactionsFilter ?? {}),
            }),
            this.createConfig({ ...e, networks: t }),
            this.checkChainId();
        }
        construct(e) {
          this.checkChainId(), this.setupWatchers();
        }
        async getAccounts(e) {
          let t = this.getWagmiConnector(e.id);
          if (!t) return { accounts: [] };
          if (t.id === t_.o.CONNECTOR_ID.AUTH) {
            let e = await t.getProvider();
            if (!e?.user) return { accounts: [] };
            let { address: n, accounts: i } = e.user;
            return Promise.resolve({
              accounts: (i || [{ address: n, type: "eoa" }]).map((e) =>
                tk.w.createAccount("eip155", e.address, e.type)
              ),
            });
          }
          let { addresses: n, address: i } = (0, r.s)(this.wagmiConfig);
          return Promise.resolve({
            accounts: [...new Set(n || [i])].map((e) =>
              tk.w.createAccount("eip155", e || "", "eoa")
            ),
          });
        }
        checkChainId() {
          let { chainId: e } = (0, r.s)(this.wagmiConfig);
          e && this.emit("switchNetwork", { chainId: e });
        }
        getWagmiConnector(e) {
          return this.wagmiConfig.connectors.find((t) => t.id === e);
        }
        createConfig(e) {
          this.wagmiChains = e.networks.filter(
            (e) => e.chainNamespace === t_.o.CHAIN.EVM
          );
          let t = {},
            n = [...(e.connectors ?? [])];
          this.wagmiChains.forEach((n) => {
            let i = e.transports?.[n.id],
              r = tS.R.getCaipNetworkId(n);
            i
              ? (t[n.id] = tS.R.extendWagmiTransports(n, e.projectId, i))
              : (t[n.id] = tS.R.getViemTransport(
                  n,
                  e.projectId,
                  e.customRpcUrls?.[r]
                ));
          }),
            (this.wagmiConfig = (function (e) {
              let t,
                {
                  multiInjectedProviderDiscovery: n = !0,
                  storage: r = (0, I.wE)({ storage: (0, I.XB)() }),
                  syncConnectedChain: o = !0,
                  ssr: u = !1,
                  ...d
                } = e,
                h =
                  "undefined" != typeof window && n
                    ? (function () {
                        let e = new Set(),
                          t = [],
                          n = () =>
                            (function (e) {
                              if ("undefined" == typeof window) return;
                              let t = (t) => e(t.detail);
                              return (
                                window.addEventListener(
                                  "eip6963:announceProvider",
                                  t
                                ),
                                window.dispatchEvent(
                                  new CustomEvent("eip6963:requestProvider")
                                ),
                                () =>
                                  window.removeEventListener(
                                    "eip6963:announceProvider",
                                    t
                                  )
                              );
                            })((n) => {
                              t.some(({ info: e }) => e.uuid === n.info.uuid) ||
                                ((t = [...t, n]),
                                e.forEach((e) => e(t, { added: [n] })));
                            }),
                          i = n();
                        return {
                          _listeners: () => e,
                          clear() {
                            e.forEach((e) => e([], { removed: [...t] })),
                              (t = []);
                          },
                          destroy() {
                            this.clear(), e.clear(), i?.();
                          },
                          findProvider: ({ rdns: e }) =>
                            t.find((t) => t.info.rdns === e),
                          getProviders: () => t,
                          reset() {
                            this.clear(), i?.(), (i = n());
                          },
                          subscribe: (n, { emitImmediately: i } = {}) => (
                            e.add(n), i && n(t, { added: t }), () => e.delete(n)
                          ),
                        };
                      })()
                    : void 0,
                f = l(() => d.chains),
                p = l(() => {
                  let e = [],
                    t = new Set();
                  for (let n of d.connectors ?? []) {
                    let i = m(n);
                    if ((e.push(i), !u && i.rdns))
                      for (let e of "string" == typeof i.rdns
                        ? [i.rdns]
                        : i.rdns)
                        t.add(e);
                  }
                  if (!u && h)
                    for (let n of h.getProviders())
                      t.has(n.info.rdns) || e.push(m(y(n)));
                  return e;
                });
              function m(e) {
                let t = new P(
                    (function (e = 11) {
                      if (!i || E + e > 512) {
                        (i = ""), (E = 0);
                        for (let e = 0; e < 256; e++)
                          i += ((256 + 256 * Math.random()) | 0)
                            .toString(16)
                            .substring(1);
                      }
                      return i.substring(E, E++ + e);
                    })()
                  ),
                  n = {
                    ...e({
                      emitter: t,
                      chains: f.getState(),
                      storage: r,
                      transports: d.transports,
                    }),
                    emitter: t,
                    uid: t.uid,
                  };
                return t.on("connect", N), n.setup?.(), n;
              }
              function y(e) {
                let { info: t } = e,
                  n = e.provider;
                return w({ target: { ...t, id: t.rdns, provider: n } });
              }
              let b = new Map();
              function v() {
                return {
                  chainId: f.getState()[0].id,
                  connections: new Map(),
                  current: null,
                  status: "disconnected",
                };
              }
              let C = "0.0.0-canary-";
              t = A.r.startsWith(C)
                ? Number.parseInt(A.r.replace(C, ""))
                : Number.parseInt(A.r.split(".")[0] ?? "0");
              let x = l(
                s(
                  r
                    ? c(v, {
                        migrate(e, n) {
                          if (n === t) return e;
                          let i = v(),
                            r = $(e, i.chainId);
                          return { ...i, chainId: r };
                        },
                        name: "store",
                        partialize: (e) => ({
                          connections: {
                            __type: "Map",
                            value: Array.from(e.connections.entries()).map(
                              ([e, t]) => {
                                let {
                                  id: n,
                                  name: i,
                                  type: r,
                                  uid: a,
                                } = t.connector;
                                return [
                                  e,
                                  {
                                    ...t,
                                    connector: {
                                      id: n,
                                      name: i,
                                      type: r,
                                      uid: a,
                                    },
                                  },
                                ];
                              }
                            ),
                          },
                          chainId: e.chainId,
                          current: e.current,
                        }),
                        merge(e, t) {
                          "object" == typeof e &&
                            e &&
                            "status" in e &&
                            delete e.status;
                          let n = $(e, t.chainId);
                          return { ...t, ...e, chainId: n };
                        },
                        skipHydration: u,
                        storage: r,
                        version: t,
                      })
                    : v
                )
              );
              function $(e, t) {
                return e &&
                  "object" == typeof e &&
                  "chainId" in e &&
                  "number" == typeof e.chainId &&
                  f.getState().some((t) => t.id === e.chainId)
                  ? e.chainId
                  : t;
              }
              function M(e) {
                x.setState((t) => {
                  let n = t.connections.get(e.uid);
                  return n
                    ? {
                        ...t,
                        connections: new Map(t.connections).set(e.uid, {
                          accounts: e.accounts ?? n.accounts,
                          chainId: e.chainId ?? n.chainId,
                          connector: n.connector,
                        }),
                      }
                    : t;
                });
              }
              function N(e) {
                "connecting" !== x.getState().status &&
                  "reconnecting" !== x.getState().status &&
                  x.setState((t) => {
                    let n = p.getState().find((t) => t.uid === e.uid);
                    return n
                      ? (n.emitter.listenerCount("connect") &&
                          n.emitter.off("connect", M),
                        n.emitter.listenerCount("change") ||
                          n.emitter.on("change", M),
                        n.emitter.listenerCount("disconnect") ||
                          n.emitter.on("disconnect", _),
                        {
                          ...t,
                          connections: new Map(t.connections).set(e.uid, {
                            accounts: e.accounts,
                            chainId: e.chainId,
                            connector: n,
                          }),
                          current: e.uid,
                          status: "connected",
                        })
                      : t;
                  });
              }
              function _(e) {
                x.setState((t) => {
                  let n = t.connections.get(e.uid);
                  if (n) {
                    let e = n.connector;
                    e.emitter.listenerCount("change") &&
                      n.connector.emitter.off("change", M),
                      e.emitter.listenerCount("disconnect") &&
                        n.connector.emitter.off("disconnect", _),
                      e.emitter.listenerCount("connect") ||
                        n.connector.emitter.on("connect", N);
                  }
                  if ((t.connections.delete(e.uid), 0 === t.connections.size))
                    return {
                      ...t,
                      connections: new Map(),
                      current: null,
                      status: "disconnected",
                    };
                  let i = t.connections.values().next().value;
                  return {
                    ...t,
                    connections: new Map(t.connections),
                    current: i.connector.uid,
                  };
                });
              }
              return (
                x.setState(v()),
                o &&
                  x.subscribe(
                    ({ connections: e, current: t }) =>
                      t ? e.get(t)?.chainId : void 0,
                    (e) => {
                      if (f.getState().some((t) => t.id === e))
                        return x.setState((t) => ({
                          ...t,
                          chainId: e ?? t.chainId,
                        }));
                    }
                  ),
                h?.subscribe((e) => {
                  let t = new Set(),
                    n = new Set();
                  for (let e of p.getState())
                    if ((t.add(e.id), e.rdns))
                      for (let t of "string" == typeof e.rdns
                        ? [e.rdns]
                        : e.rdns)
                        n.add(t);
                  let i = [];
                  for (let r of e) {
                    if (n.has(r.info.rdns)) continue;
                    let e = m(y(r));
                    t.has(e.id) || i.push(e);
                  }
                  (!r || x.persist.hasHydrated()) &&
                    p.setState((e) => [...e, ...i], !0);
                }),
                {
                  get chains() {
                    return f.getState();
                  },
                  get connectors() {
                    return p.getState();
                  },
                  storage: r,
                  getClient: function (e = {}) {
                    let t,
                      n = e.chainId ?? x.getState().chainId,
                      i = f.getState().find((e) => e.id === n);
                    if (e.chainId && !i) throw new g.nk();
                    {
                      let e = b.get(x.getState().chainId);
                      if (e && !i) return e;
                      if (!i) throw new g.nk();
                    }
                    {
                      let e = b.get(n);
                      if (e) return e;
                    }
                    if (d.client) t = d.client({ chain: i });
                    else {
                      let e = i.id,
                        n = f.getState().map((e) => e.id),
                        r = {};
                      for (let [t, i] of Object.entries(d))
                        if (
                          "chains" !== t &&
                          "client" !== t &&
                          "connectors" !== t &&
                          "transports" !== t
                        )
                          if ("object" == typeof i)
                            if (e in i) r[t] = i[e];
                            else {
                              if (n.some((e) => e in i)) continue;
                              r[t] = i;
                            }
                          else r[t] = i;
                      t = (0, a.U)({
                        ...r,
                        chain: i,
                        batch: r.batch ?? { multicall: !0 },
                        transport: (t) =>
                          d.transports[e]({ ...t, connectors: p }),
                      });
                    }
                    return b.set(n, t), t;
                  },
                  get state() {
                    return x.getState();
                  },
                  setState(e) {
                    let t;
                    t = "function" == typeof e ? e(x.getState()) : e;
                    let n = v();
                    "object" != typeof t && (t = n),
                      Object.keys(n).some((e) => !(e in t)) && (t = n),
                      x.setState(t, !0);
                  },
                  subscribe: (e, t, n) =>
                    x.subscribe(
                      e,
                      t,
                      n ? { ...n, fireImmediately: n.emitImmediately } : void 0
                    ),
                  _internal: {
                    mipd: h,
                    store: x,
                    ssr: !!u,
                    syncConnectedChain: o,
                    transports: d.transports,
                    chains: {
                      setState(e) {
                        let t = "function" == typeof e ? e(f.getState()) : e;
                        if (0 !== t.length) return f.setState(t, !0);
                      },
                      subscribe: (e) => f.subscribe(e),
                    },
                    connectors: {
                      providerDetailToConnector: y,
                      setup: m,
                      setState: (e) =>
                        p.setState(
                          "function" == typeof e ? e(p.getState()) : e,
                          !0
                        ),
                      subscribe: (e) => p.subscribe(e),
                    },
                    events: { change: M, connect: N, disconnect: _ },
                  },
                }
              );
            })({
              ...e,
              chains: this.wagmiChains,
              connectors: n,
              transports: t,
            }));
        }
        setupWatchPendingTransactions() {
          if (
            !this.pendingTransactionsFilter.enable ||
            this.unwatchPendingTransactions
          )
            return;
          this.unwatchPendingTransactions = (function (e, t) {
            let n,
              i,
              { syncConnectedChain: r = e._internal.syncConnectedChain, ...a } =
                t,
              s = (t) => (
                n && n(),
                (n = Y(
                  e.getClient({ chainId: t }),
                  V,
                  "watchPendingTransactions"
                )(a))
              ),
              o = s(t.chainId);
            return (
              r &&
                !t.chainId &&
                (i = e.subscribe(
                  ({ chainId: e }) => e,
                  async (e) => s(e)
                )),
              () => {
                o?.(), i?.();
              }
            );
          })(this.wagmiConfig, {
            pollingInterval: this.pendingTransactionsFilter.pollingInterval,
            onError: () => {},
            onTransactions: () => {
              this.emit("pendingTransactions"),
                tQ.increase("pendingTransactions");
            },
          });
          let e = tQ.subscribeKey("pendingTransactions", (t) => {
            t >= t_.o.LIMITS.PENDING_TRANSACTIONS &&
              (this.unwatchPendingTransactions?.(), e());
          });
        }
        setupWatchers() {
          (0, Z.F)(this.wagmiConfig, {
            onChange: (e, t) => {
              "disconnected" === e.status &&
                t.address &&
                this.emit("disconnect"),
                e?.chainId &&
                  e?.chainId !== t?.chainId &&
                  this.emit("switchNetwork", { chainId: e.chainId }),
                "connected" === e.status &&
                  (e.address !== t?.address || "connected" !== t.status) &&
                  (this.setupWatchPendingTransactions(),
                  this.emit("accountChanged", {
                    address: e.address,
                    chainId: e.chainId,
                  }));
            },
          });
        }
        async addThirdPartyConnectors(e) {
          let t = [];
          if (!1 !== e.enableCoinbase) {
            let e = await tY(this.wagmiConfig.connectors);
            e && t.push(e);
          }
          let n = await tV(this.wagmiConfig.connectors);
          n && t.push(n),
            await Promise.all(
              t.map(async (t) => {
                let n = this.wagmiConfig._internal.connectors.setup(t);
                this.wagmiConfig._internal.connectors.setState((e) => [
                  ...e,
                  n,
                ]),
                  await this.addWagmiConnector(n, e);
              })
            );
        }
        addWagmiConnectors(e, t) {
          let n = [];
          !1 !== e.enableWalletConnect && n.push(tz(e, t)),
            !1 !== e.enableInjected && n.push(w({ shimDisconnect: !0 }));
          let i = t?.remoteFeatures?.email ?? !0,
            r =
              Array.isArray(t?.remoteFeatures?.socials) &&
              t?.remoteFeatures?.socials?.length > 0;
          (i || r) &&
            n.push(
              (function (e) {
                let t,
                  n,
                  i = [];
                function r(e) {
                  return tO.L.parseEvmChainId(e) || 1;
                }
                async function a(n = {}) {
                  let s =
                      (t ||
                        (t = tU.v.getInstance({
                          projectId: e.options.projectId,
                          chainId: tR.W.getActiveCaipNetwork()?.caipNetworkId,
                          enableLogger: e.options.enableAuthLogger,
                          onTimeout: (e) => {
                            "iframe_load_failed" === e
                              ? tG.h.open(
                                  tL.R.ALERT_ERRORS.IFRAME_LOAD_FAILED,
                                  "error"
                                )
                              : "iframe_request_timeout" === e
                              ? tG.h.open(
                                  tL.R.ALERT_ERRORS.IFRAME_REQUEST_TIMEOUT,
                                  "error"
                                )
                              : "unverified_domain" === e &&
                                tG.h.open(
                                  tL.R.ALERT_ERRORS.UNVERIFIED_DOMAIN,
                                  "error"
                                );
                          },
                          abortController: tL.R.EmbeddedWalletAbortController,
                        })),
                      t),
                    o = n.chainId;
                  if (n.isReconnecting) {
                    let t = tO.L.parseEvmChainId(s.getLastUsedChainId() || ""),
                      n = e.chains?.[0].id;
                    if (!(o = t || n))
                      throw Error("ChainId not found in provider");
                  }
                  let c = tq.U.state.preferredAccountTypes?.eip155,
                    {
                      address: u,
                      chainId: l,
                      accounts: d,
                    } = await s.connect({
                      chainId: o,
                      preferredAccountType: c,
                      socialUri: n.socialUri,
                    });
                  i = d?.map((e) => e.address) || [u];
                  let h = r(l);
                  return {
                    accounts: i,
                    account: u,
                    chainId: h,
                    chain: { id: h, unsuported: !1 },
                  };
                }
                return (0, b.U)((t) => ({
                  id: t_.o.CONNECTOR_ID.AUTH,
                  name: t_.o.CONNECTOR_NAMES.AUTH,
                  type: "AUTH",
                  chain: t_.o.CHAIN.EVM,
                  async connect(e = {}) {
                    if (n) return n;
                    n ||
                      (n = new Promise((t) => {
                        t(a(e));
                      }));
                    let t = await n;
                    return (n = void 0), t;
                  },
                  async disconnect() {
                    let e = await this.getProvider();
                    await e.disconnect();
                  },
                  getAccounts: () =>
                    i?.length
                      ? (t.emitter.emit("change", { accounts: i }),
                        Promise.resolve(i))
                      : Promise.resolve([]),
                  async getProvider() {
                    return (
                      this.provider ||
                        (this.provider = tU.v.getInstance({
                          projectId: e.options.projectId,
                          chainId: tR.W.getActiveCaipNetwork()?.caipNetworkId,
                          enableLogger: e.options.enableAuthLogger,
                          abortController: tL.R.EmbeddedWalletAbortController,
                          onTimeout: (e) => {
                            "iframe_load_failed" === e
                              ? tG.h.open(
                                  tL.R.ALERT_ERRORS.IFRAME_LOAD_FAILED,
                                  "error"
                                )
                              : "iframe_request_timeout" === e
                              ? tG.h.open(
                                  tL.R.ALERT_ERRORS.IFRAME_REQUEST_TIMEOUT,
                                  "error"
                                )
                              : "unverified_domain" === e &&
                                tG.h.open(
                                  tL.R.ALERT_ERRORS.UNVERIFIED_DOMAIN,
                                  "error"
                                );
                          },
                        })),
                      Promise.resolve(this.provider)
                    );
                  },
                  async getChainId() {
                    let e = await this.getProvider(),
                      { chainId: t } = await e.getChainId();
                    return r(t);
                  },
                  async isAuthorized() {
                    return Promise.resolve(
                      (await this.getProvider()).getLoginEmailUsed()
                    );
                  },
                  async switchChain({ chainId: e }) {
                    try {
                      let n = t.chains.find((t) => t.id === e);
                      if (!n)
                        throw new h.ch(Error("chain not found on connector."));
                      let r = await this.getProvider(),
                        a = tq.U.state.preferredAccountTypes?.eip155,
                        s = await r.connect({
                          chainId: e,
                          preferredAccountType: a,
                        });
                      return (
                        (i = s?.accounts?.map((e) => e.address) || [s.address]),
                        t.emitter.emit("change", {
                          chainId: Number(e),
                          accounts: i,
                        }),
                        n
                      );
                    } catch (e) {
                      if (e instanceof Error) throw new h.ch(e);
                      throw e;
                    }
                  },
                  onAccountsChanged(e) {
                    0 === e.length
                      ? this.onDisconnect()
                      : t.emitter.emit("change", { accounts: e.map(d.b) });
                  },
                  onChainChanged(e) {
                    let n = Number(e);
                    t.emitter.emit("change", { chainId: n });
                  },
                  async onDisconnect(e) {
                    let t = await this.getProvider();
                    await t.disconnect();
                  },
                }));
              })({
                chains: this.wagmiChains,
                options: {
                  projectId: e.projectId,
                  enableAuthLogger: e.enableAuthLogger,
                },
              })
            ),
            n.forEach((e) => {
              let t = this.wagmiConfig._internal.connectors.setup(e);
              this.wagmiConfig._internal.connectors.setState((e) => [...e, t]);
            });
        }
        async signMessage(e) {
          try {
            return {
              signature: await er(this.wagmiConfig, {
                message: e.message,
                account: e.address,
              }),
            };
          } catch (e) {
            throw Error("WagmiAdapter:signMessage - Sign message failed");
          }
        }
        async sendTransaction(e) {
          let { chainId: t, address: n } = (0, r.s)(this.wagmiConfig),
            i = {
              account: n,
              to: e.to,
              value: Number.isNaN(Number(e.value))
                ? BigInt(0)
                : BigInt(e.value),
              gas: e.gas ? BigInt(e.gas) : void 0,
              gasPrice: e.gasPrice ? BigInt(e.gasPrice) : void 0,
              data: e.data,
              chainId: t,
              type: "legacy",
              parameters: ["nonce"],
            };
          await eH(this.wagmiConfig, i);
          let a = await eZ(this.wagmiConfig, i);
          return (
            await te(this.wagmiConfig, { hash: a, timeout: 25e3 }), { hash: a }
          );
        }
        async writeContract(e) {
          let { caipNetwork: t, ...n } = e,
            i = Number(tO.L.caipNetworkIdToNumber(t.caipNetworkId));
          return {
            hash: await ts(this.wagmiConfig, {
              chain: this.wagmiChains?.[i],
              chainId: i,
              address: n.tokenAddress,
              account: n.fromAddress,
              abi: n.abi,
              functionName: n.method,
              args: n.args,
              __mode: "prepared",
            }),
          };
        }
        async estimateGas(e) {
          try {
            return {
              gas: await to(this.wagmiConfig, {
                account: e.address,
                to: e.to,
                data: e.data,
                type: "legacy",
              }),
            };
          } catch (e) {
            throw Error("WagmiAdapter:estimateGas - error estimating gas");
          }
        }
        parseUnits(e) {
          return (function (e, t) {
            if (!/^(-?)([0-9]*)\.?([0-9]*)$/.test(e))
              throw new tM({ value: e });
            let [n, i = "0"] = e.split("."),
              r = n.startsWith("-");
            if ((r && (n = n.slice(1)), (i = i.replace(/(0+)$/, "")), 0 === t))
              1 === Math.round(Number(`.${i}`)) && (n = `${BigInt(n) + 1n}`),
                (i = "");
            else if (i.length > t) {
              let [e, r, a] = [
                  i.slice(0, t - 1),
                  i.slice(t - 1, t),
                  i.slice(t),
                ],
                s = Math.round(Number(`${r}.${a}`));
              (i =
                s > 9
                  ? `${BigInt(e) + BigInt(1)}0`.padStart(e.length + 1, "0")
                  : `${e}${s}`).length > t &&
                ((i = i.slice(1)), (n = `${BigInt(n) + 1n}`)),
                (i = i.slice(0, t));
            } else i = i.padEnd(t, "0");
            return BigInt(`${r ? "-" : ""}${n}${i}`);
          })(e.value, e.decimals);
        }
        formatUnits(e) {
          return (0, tm.J)(e.value, e.decimals);
        }
        async addWagmiConnector(e, t) {
          if (
            e.id === t_.o.CONNECTOR_ID.AUTH ||
            e.id === t_.o.CONNECTOR_ID.WALLET_CONNECT
          )
            return;
          let n = await e.getProvider().catch(() => void 0);
          this.addConnector({
            id: e.id,
            explorerId: tT.L.ConnectorExplorerIds[e.id],
            imageUrl: t?.connectorImages?.[e.id] ?? e.icon,
            name: tT.L.ConnectorNamesMap[e.id] ?? e.name,
            imageId: tT.L.ConnectorImageIds[e.id],
            type: tT.L.ConnectorTypesMap[e.type] ?? "EXTERNAL",
            info: e.id === t_.o.CONNECTOR_ID.INJECTED ? void 0 : { rdns: e.id },
            provider: n,
            chain: this.namespace,
            chains: [],
          });
        }
        async syncConnectors(e, t) {
          !(function (e, t) {
            let { onChange: n } = t;
            e._internal.connectors.subscribe((e, t) => {
              n(Object.values(e), t);
            });
          })(this.wagmiConfig, {
            onChange: (t) => {
              t.forEach((t) => this.addWagmiConnector(t, e));
            },
          }),
            this.addWagmiConnectors(e, t),
            await this.addThirdPartyConnectors(e);
        }
        async syncConnection(e) {
          let { id: t, chainId: n } = e,
            i = tl(this.wagmiConfig).find((e) => e.connector.id === t),
            r = this.getWagmiConnector(t),
            a = await r?.getProvider();
          if (
            tk.w.isSafeApp() &&
            t === t_.o.CONNECTOR_ID.SAFE &&
            !i?.accounts.length
          ) {
            let e = this.getWagmiConnector("safe");
            if (e) {
              let t = await td(this.wagmiConfig, {
                  connector: e,
                  chainId: Number(n),
                }),
                r = await e.getProvider();
              return {
                chainId: Number(n),
                address: t.accounts[0],
                provider: r,
                type: i?.connector.type?.toUpperCase(),
                id: i?.connector.id,
              };
            }
          }
          return {
            chainId: Number(i?.chainId),
            address: i?.accounts[0],
            provider: a,
            type: i?.connector.type?.toUpperCase(),
            id: i?.connector.id,
          };
        }
        async connectWalletConnect(e) {
          let t = this.getWalletConnectConnector();
          await t.authenticate();
          let n = this.getWagmiConnector("walletConnect");
          if (!n)
            throw Error(
              "UniversalAdapter:connectWalletConnect - connector not found"
            );
          let i = await td(this.wagmiConfig, {
            connector: n,
            chainId: e ? Number(e) : void 0,
          });
          return (
            i.chainId !== Number(e) &&
              (await (0, th.S)(this.wagmiConfig, { chainId: i.chainId })),
            { clientId: await t.provider.client.core.crypto.getClientId() }
          );
        }
        async connect(e) {
          let {
              id: t,
              provider: n,
              type: i,
              info: r,
              chainId: a,
              socialUri: s,
            } = e,
            o = this.getWagmiConnector(t);
          if (!o)
            throw Error(
              "connectionControllerClient:connectExternal - connector is undefined"
            );
          if (
            (n &&
              r &&
              o.id === t_.o.CONNECTOR_ID.EIP6963 &&
              o.setEip6963Wallet?.({ provider: n, info: r }),
            o.uid === this.wagmiConfig?.state?.current)
          ) {
            let e = this.wagmiConfig.state?.connections?.get(o.uid);
            if (e)
              return {
                address: e?.accounts[0],
                chainId: e?.chainId,
                provider: n,
                type: i,
                id: t,
              };
          }
          let c = await td(this.wagmiConfig, {
            connector: o,
            chainId: a ? Number(a) : void 0,
            socialUri: s,
          });
          return {
            address: c.accounts[0],
            chainId: c.chainId,
            provider: n,
            type: i,
            id: t,
          };
        }
        async reconnect(e) {
          let { id: t } = e,
            n = this.getWagmiConnector(t);
          if (!n)
            throw Error(
              "connectionControllerClient:connectExternal - connector is undefined"
            );
          await (0, tf.M)(this.wagmiConfig, { connectors: [n] });
        }
        async getBalance(e) {
          let t = e.address,
            n = this.getCaipNetworks().find((t) => t.id === e.chainId);
          if (!t) return Promise.resolve({ balance: "0.00", symbol: "ETH" });
          if (n && this.wagmiConfig) {
            let t = `${n.caipNetworkId}:${e.address}`,
              i = this.balancePromises[t];
            if (i) return i;
            let r = tB.i.getNativeBalanceCacheForCaipAddress(t);
            return r
              ? { balance: r.balance, symbol: r.symbol }
              : ((this.balancePromises[t] = new Promise(async (i) => {
                  try {
                    let r = Number(e.chainId),
                      a = await tE(this.wagmiConfig, {
                        address: e.address,
                        chainId: r,
                        token: e.tokens?.[n.caipNetworkId]?.address,
                      });
                    tB.i.updateNativeBalanceCache({
                      caipAddress: t,
                      balance: a.formatted,
                      symbol: a.symbol,
                      timestamp: Date.now(),
                    }),
                      i({ balance: a.formatted, symbol: a.symbol });
                  } catch (e) {
                    console.warn(
                      "Appkit:WagmiAdapter:getBalance - Error getting balance",
                      e
                    ),
                      i({ balance: "0.00", symbol: "ETH" });
                  }
                }).finally(() => {
                  delete this.balancePromises[t];
                })),
                this.balancePromises[t] || { balance: "0.00", symbol: "ETH" });
          }
          return { balance: "", symbol: "" };
        }
        getWalletConnectProvider() {
          return this.getWagmiConnector("walletConnect")?.provider;
        }
        async disconnect() {
          let e = tl(this.wagmiConfig);
          await Promise.allSettled(
            e.map(async (e) => {
              let t = this.getWagmiConnector(e.connector.id);
              t && (await t$(this.wagmiConfig, { connector: t }));
            })
          ),
            this.wagmiConfig.state.connections.clear();
        }
        async switchNetwork(e) {
          await (0, th.S)(this.wagmiConfig, { chainId: e.caipNetwork.id }),
            await super.switchNetwork(e);
        }
        async getCapabilities(e) {
          if (!this.wagmiConfig)
            throw Error(
              "connectionControllerClient:getCapabilities - wagmiConfig is undefined"
            );
          let t = tl(this.wagmiConfig)[0],
            n = t ? this.getWagmiConnector(t.connector.id) : null;
          if (!n)
            throw Error(
              "connectionControllerClient:getCapabilities - connector is undefined"
            );
          let i = await n.getProvider();
          if (!i)
            throw Error(
              "connectionControllerClient:getCapabilities - provider is undefined"
            );
          let r = i.session?.sessionProperties?.capabilities;
          if (r) {
            let t = (function (e) {
              try {
                return JSON.parse(e);
              } catch (e) {
                throw Error("Error parsing wallet capabilities");
              }
            })(r)[e];
            if (t) return t;
          }
          return await i.request({
            method: "wallet_getCapabilities",
            params: [e],
          });
        }
        async grantPermissions(e) {
          if (!this.wagmiConfig)
            throw Error(
              "connectionControllerClient:grantPermissions - wagmiConfig is undefined"
            );
          let t = tl(this.wagmiConfig)[0],
            n = t ? this.getWagmiConnector(t.connector.id) : null;
          if (!n)
            throw Error(
              "connectionControllerClient:grantPermissions - connector is undefined"
            );
          let i = await n.getProvider();
          if (!i)
            throw Error(
              "connectionControllerClient:grantPermissions - provider is undefined"
            );
          return i.request({ method: "wallet_grantPermissions", params: e });
        }
        async revokePermissions(e) {
          if (!this.wagmiConfig)
            throw Error(
              "connectionControllerClient:revokePermissions - wagmiConfig is undefined"
            );
          let t = tl(this.wagmiConfig)[0],
            n = t ? this.getWagmiConnector(t.connector.id) : null;
          if (!n)
            throw Error(
              "connectionControllerClient:revokePermissions - connector is undefined"
            );
          let i = await n.getProvider();
          if (!i)
            throw Error(
              "connectionControllerClient:revokePermissions - provider is undefined"
            );
          return i.request({ method: "wallet_revokePermissions", params: e });
        }
        async walletGetAssets(e) {
          if (!this.wagmiConfig)
            throw Error(
              "connectionControllerClient:walletGetAssets - wagmiConfig is undefined"
            );
          let t = tl(this.wagmiConfig)[0],
            n = t ? this.getWagmiConnector(t.connector.id) : null;
          if (!n)
            throw Error(
              "connectionControllerClient:walletGetAssets - connector is undefined"
            );
          let i = await n.getProvider();
          if (!i)
            throw Error(
              "connectionControllerClient:walletGetAssets - provider is undefined"
            );
          return i.request({ method: "wallet_getAssets", params: [e] });
        }
        setUniversalProvider(e) {
          e.on("connect", () => {
            let e = tl(this.wagmiConfig),
              t = this.getWagmiConnector("walletConnect");
            t &&
              !e.find((e) => e.connector.id === t.id) &&
              (0, tf.M)(this.wagmiConfig, { connectors: [t] });
          }),
            this.addConnector(
              new tF.F({
                provider: e,
                caipNetworks: this.getCaipNetworks(),
                namespace: "eip155",
              })
            );
        }
      }
    },
    76743: (e, t, n) => {
      "use strict";
      n.d(t, { Bv: () => a });
      var i = n(67622);
      let r = {
        legacy: "0x0",
        eip2930: "0x1",
        eip1559: "0x2",
        eip4844: "0x3",
        eip7702: "0x4",
      };
      function a(e) {
        let t = {};
        return (
          void 0 !== e.authorizationList &&
            (t.authorizationList = e.authorizationList.map((e) => ({
              address: e.address,
              r: e.r ? (0, i.cK)(BigInt(e.r)) : e.r,
              s: e.s ? (0, i.cK)(BigInt(e.s)) : e.s,
              chainId: (0, i.cK)(e.chainId),
              nonce: (0, i.cK)(e.nonce),
              ...(void 0 !== e.yParity
                ? { yParity: (0, i.cK)(e.yParity) }
                : {}),
              ...(void 0 !== e.v && void 0 === e.yParity
                ? { v: (0, i.cK)(e.v) }
                : {}),
            }))),
          void 0 !== e.accessList && (t.accessList = e.accessList),
          void 0 !== e.blobVersionedHashes &&
            (t.blobVersionedHashes = e.blobVersionedHashes),
          void 0 !== e.blobs &&
            ("string" != typeof e.blobs[0]
              ? (t.blobs = e.blobs.map((e) => (0, i.My)(e)))
              : (t.blobs = e.blobs)),
          void 0 !== e.data && (t.data = e.data),
          void 0 !== e.from && (t.from = e.from),
          void 0 !== e.gas && (t.gas = (0, i.cK)(e.gas)),
          void 0 !== e.gasPrice && (t.gasPrice = (0, i.cK)(e.gasPrice)),
          void 0 !== e.maxFeePerBlobGas &&
            (t.maxFeePerBlobGas = (0, i.cK)(e.maxFeePerBlobGas)),
          void 0 !== e.maxFeePerGas &&
            (t.maxFeePerGas = (0, i.cK)(e.maxFeePerGas)),
          void 0 !== e.maxPriorityFeePerGas &&
            (t.maxPriorityFeePerGas = (0, i.cK)(e.maxPriorityFeePerGas)),
          void 0 !== e.nonce && (t.nonce = (0, i.cK)(e.nonce)),
          void 0 !== e.to && (t.to = e.to),
          void 0 !== e.type && (t.type = r[e.type]),
          void 0 !== e.value && (t.value = (0, i.cK)(e.value)),
          t
        );
      }
    },
    79731: (e, t, n) => {
      "use strict";
      function i(e) {
        return "string" == typeof e[0]
          ? r(e)
          : (function (e) {
              let t = 0;
              for (let n of e) t += n.length;
              let n = new Uint8Array(t),
                i = 0;
              for (let t of e) n.set(t, i), (i += t.length);
              return n;
            })(e);
      }
      function r(e) {
        return `0x${e.reduce((e, t) => e + t.replace("0x", ""), "")}`;
      }
      n.d(t, { aP: () => r, xW: () => i });
    },
    80698: (e, t, n) => {
      "use strict";
      n.d(t, { k: () => d });
      var i = n(80844),
        r = n(38978);
      let a = (e) => (0, r.S)((0, i.ZJ)(e));
      var s = n(59126);
      let o = /^tuple(?<array>(\[(\d*)\])*)$/;
      function c(e) {
        let t = "",
          n = e.length;
        for (let i = 0; i < n; i++)
          (t += (function e(t) {
            let n = t.type;
            if (o.test(t.type) && "components" in t) {
              n = "(";
              let i = t.components.length;
              for (let r = 0; r < i; r++)
                (n += e(t.components[r])), r < i - 1 && (n += ", ");
              let r = (0, s.Yv)(o, t.type);
              return (n += `)${r?.array ?? ""}`), e({ ...t, type: n });
            }
            return ("indexed" in t && t.indexed && (n = `${n} indexed`), t.name)
              ? `${n} ${t.name}`
              : n;
          })(e[i])),
            i !== n - 1 && (t += ", ");
        return t;
      }
      var u = n(7441);
      let l = (e) =>
        (function (e) {
          let t = !0,
            n = "",
            i = 0,
            r = "",
            a = !1;
          for (let s = 0; s < e.length; s++) {
            let o = e[s];
            if (
              (["(", ")", ","].includes(o) && (t = !0),
              "(" === o && i++,
              ")" === o && i--,
              t)
            ) {
              if (0 === i) {
                if (" " === o && ["event", "function", ""].includes(r)) r = "";
                else if (((r += o), ")" === o)) {
                  a = !0;
                  break;
                }
                continue;
              }
              if (" " === o) {
                "," !== e[s - 1] &&
                  "," !== n &&
                  ",(" !== n &&
                  ((n = ""), (t = !1));
                continue;
              }
              (r += o), (n += o);
            }
          }
          if (!a) throw new u.C("Unable to normalize signature.");
          return r;
        })(
          "string" == typeof e
            ? e
            : (function (e) {
                return "function" === e.type
                  ? `function ${e.name}(${c(e.inputs)})${
                      e.stateMutability && "nonpayable" !== e.stateMutability
                        ? ` ${e.stateMutability}`
                        : ""
                    }${e.outputs?.length ? ` returns (${c(e.outputs)})` : ""}`
                  : "event" === e.type
                  ? `event ${e.name}(${c(e.inputs)})`
                  : "error" === e.type
                  ? `error ${e.name}(${c(e.inputs)})`
                  : "constructor" === e.type
                  ? `constructor(${c(e.inputs)})${
                      "payable" === e.stateMutability ? " payable" : ""
                    }`
                  : "fallback" === e.type
                  ? `fallback() external${
                      "payable" === e.stateMutability ? " payable" : ""
                    }`
                  : "receive() external payable";
              })(e)
        );
      function d(e) {
        return a(l(e));
      }
    },
    82661: (e) => {
      "use strict";
      var t = Object.prototype.hasOwnProperty,
        n = "~";
      function i() {}
      function r(e, t, n) {
        (this.fn = e), (this.context = t), (this.once = n || !1);
      }
      function a(e, t, i, a, s) {
        if ("function" != typeof i)
          throw TypeError("The listener must be a function");
        var o = new r(i, a || e, s),
          c = n ? n + t : t;
        return (
          e._events[c]
            ? e._events[c].fn
              ? (e._events[c] = [e._events[c], o])
              : e._events[c].push(o)
            : ((e._events[c] = o), e._eventsCount++),
          e
        );
      }
      function s(e, t) {
        0 == --e._eventsCount ? (e._events = new i()) : delete e._events[t];
      }
      function o() {
        (this._events = new i()), (this._eventsCount = 0);
      }
      Object.create &&
        ((i.prototype = Object.create(null)), new i().__proto__ || (n = !1)),
        (o.prototype.eventNames = function () {
          var e,
            i,
            r = [];
          if (0 === this._eventsCount) return r;
          for (i in (e = this._events))
            t.call(e, i) && r.push(n ? i.slice(1) : i);
          return Object.getOwnPropertySymbols
            ? r.concat(Object.getOwnPropertySymbols(e))
            : r;
        }),
        (o.prototype.listeners = function (e) {
          var t = n ? n + e : e,
            i = this._events[t];
          if (!i) return [];
          if (i.fn) return [i.fn];
          for (var r = 0, a = i.length, s = Array(a); r < a; r++)
            s[r] = i[r].fn;
          return s;
        }),
        (o.prototype.listenerCount = function (e) {
          var t = n ? n + e : e,
            i = this._events[t];
          return i ? (i.fn ? 1 : i.length) : 0;
        }),
        (o.prototype.emit = function (e, t, i, r, a, s) {
          var o = n ? n + e : e;
          if (!this._events[o]) return !1;
          var c,
            u,
            l = this._events[o],
            d = arguments.length;
          if (l.fn) {
            switch ((l.once && this.removeListener(e, l.fn, void 0, !0), d)) {
              case 1:
                return l.fn.call(l.context), !0;
              case 2:
                return l.fn.call(l.context, t), !0;
              case 3:
                return l.fn.call(l.context, t, i), !0;
              case 4:
                return l.fn.call(l.context, t, i, r), !0;
              case 5:
                return l.fn.call(l.context, t, i, r, a), !0;
              case 6:
                return l.fn.call(l.context, t, i, r, a, s), !0;
            }
            for (u = 1, c = Array(d - 1); u < d; u++) c[u - 1] = arguments[u];
            l.fn.apply(l.context, c);
          } else {
            var h,
              f = l.length;
            for (u = 0; u < f; u++)
              switch (
                (l[u].once && this.removeListener(e, l[u].fn, void 0, !0), d)
              ) {
                case 1:
                  l[u].fn.call(l[u].context);
                  break;
                case 2:
                  l[u].fn.call(l[u].context, t);
                  break;
                case 3:
                  l[u].fn.call(l[u].context, t, i);
                  break;
                case 4:
                  l[u].fn.call(l[u].context, t, i, r);
                  break;
                default:
                  if (!c)
                    for (h = 1, c = Array(d - 1); h < d; h++)
                      c[h - 1] = arguments[h];
                  l[u].fn.apply(l[u].context, c);
              }
          }
          return !0;
        }),
        (o.prototype.on = function (e, t, n) {
          return a(this, e, t, n, !1);
        }),
        (o.prototype.once = function (e, t, n) {
          return a(this, e, t, n, !0);
        }),
        (o.prototype.removeListener = function (e, t, i, r) {
          var a = n ? n + e : e;
          if (!this._events[a]) return this;
          if (!t) return s(this, a), this;
          var o = this._events[a];
          if (o.fn)
            o.fn !== t ||
              (r && !o.once) ||
              (i && o.context !== i) ||
              s(this, a);
          else {
            for (var c = 0, u = [], l = o.length; c < l; c++)
              (o[c].fn !== t ||
                (r && !o[c].once) ||
                (i && o[c].context !== i)) &&
                u.push(o[c]);
            u.length
              ? (this._events[a] = 1 === u.length ? u[0] : u)
              : s(this, a);
          }
          return this;
        }),
        (o.prototype.removeAllListeners = function (e) {
          var t;
          return (
            e
              ? ((t = n ? n + e : e), this._events[t] && s(this, t))
              : ((this._events = new i()), (this._eventsCount = 0)),
            this
          );
        }),
        (o.prototype.off = o.prototype.removeListener),
        (o.prototype.addListener = o.prototype.on),
        (o.prefixed = n),
        (o.EventEmitter = o),
        (e.exports = o);
    },
    87017: (e, t, n) => {
      "use strict";
      n.d(t, { E: () => m });
      var i = n(52020),
        r = n(39853),
        a = n(7165),
        s = n(25910),
        o = class extends s.Q {
          constructor(e = {}) {
            super(), (this.config = e), (this.#l = new Map());
          }
          #l;
          build(e, t, n) {
            let a = t.queryKey,
              s = t.queryHash ?? (0, i.F$)(a, t),
              o = this.get(s);
            return (
              o ||
                ((o = new r.X({
                  client: e,
                  queryKey: a,
                  queryHash: s,
                  options: e.defaultQueryOptions(t),
                  state: n,
                  defaultOptions: e.getQueryDefaults(a),
                })),
                this.add(o)),
              o
            );
          }
          add(e) {
            this.#l.has(e.queryHash) ||
              (this.#l.set(e.queryHash, e),
              this.notify({ type: "added", query: e }));
          }
          remove(e) {
            let t = this.#l.get(e.queryHash);
            t &&
              (e.destroy(),
              t === e && this.#l.delete(e.queryHash),
              this.notify({ type: "removed", query: e }));
          }
          clear() {
            a.jG.batch(() => {
              this.getAll().forEach((e) => {
                this.remove(e);
              });
            });
          }
          get(e) {
            return this.#l.get(e);
          }
          getAll() {
            return [...this.#l.values()];
          }
          find(e) {
            let t = { exact: !0, ...e };
            return this.getAll().find((e) => (0, i.MK)(t, e));
          }
          findAll(e = {}) {
            let t = this.getAll();
            return Object.keys(e).length > 0
              ? t.filter((t) => (0, i.MK)(e, t))
              : t;
          }
          notify(e) {
            a.jG.batch(() => {
              this.listeners.forEach((t) => {
                t(e);
              });
            });
          }
          onFocus() {
            a.jG.batch(() => {
              this.getAll().forEach((e) => {
                e.onFocus();
              });
            });
          }
          onOnline() {
            a.jG.batch(() => {
              this.getAll().forEach((e) => {
                e.onOnline();
              });
            });
          }
        },
        c = n(34560),
        u = class extends s.Q {
          constructor(e = {}) {
            super(),
              (this.config = e),
              (this.#d = new Set()),
              (this.#h = new Map()),
              (this.#f = 0);
          }
          #d;
          #h;
          #f;
          build(e, t, n) {
            let i = new c.s({
              mutationCache: this,
              mutationId: ++this.#f,
              options: e.defaultMutationOptions(t),
              state: n,
            });
            return this.add(i), i;
          }
          add(e) {
            this.#d.add(e);
            let t = l(e);
            if ("string" == typeof t) {
              let n = this.#h.get(t);
              n ? n.push(e) : this.#h.set(t, [e]);
            }
            this.notify({ type: "added", mutation: e });
          }
          remove(e) {
            if (this.#d.delete(e)) {
              let t = l(e);
              if ("string" == typeof t) {
                let n = this.#h.get(t);
                if (n)
                  if (n.length > 1) {
                    let t = n.indexOf(e);
                    -1 !== t && n.splice(t, 1);
                  } else n[0] === e && this.#h.delete(t);
              }
            }
            this.notify({ type: "removed", mutation: e });
          }
          canRun(e) {
            let t = l(e);
            if ("string" != typeof t) return !0;
            {
              let n = this.#h.get(t),
                i = n?.find((e) => "pending" === e.state.status);
              return !i || i === e;
            }
          }
          runNext(e) {
            let t = l(e);
            if ("string" != typeof t) return Promise.resolve();
            {
              let n = this.#h.get(t)?.find((t) => t !== e && t.state.isPaused);
              return n?.continue() ?? Promise.resolve();
            }
          }
          clear() {
            a.jG.batch(() => {
              this.#d.forEach((e) => {
                this.notify({ type: "removed", mutation: e });
              }),
                this.#d.clear(),
                this.#h.clear();
            });
          }
          getAll() {
            return Array.from(this.#d);
          }
          find(e) {
            let t = { exact: !0, ...e };
            return this.getAll().find((e) => (0, i.nJ)(t, e));
          }
          findAll(e = {}) {
            return this.getAll().filter((t) => (0, i.nJ)(e, t));
          }
          notify(e) {
            a.jG.batch(() => {
              this.listeners.forEach((t) => {
                t(e);
              });
            });
          }
          resumePausedMutations() {
            let e = this.getAll().filter((e) => e.state.isPaused);
            return a.jG.batch(() =>
              Promise.all(e.map((e) => e.continue().catch(i.lQ)))
            );
          }
        };
      function l(e) {
        return e.options.scope?.id;
      }
      var d = n(50920),
        h = n(21239);
      function f(e) {
        return {
          onFetch: (t, n) => {
            let r = t.options,
              a = t.fetchOptions?.meta?.fetchMore?.direction,
              s = t.state.data?.pages || [],
              o = t.state.data?.pageParams || [],
              c = { pages: [], pageParams: [] },
              u = 0,
              l = async () => {
                let n = !1,
                  l = (e) => {
                    Object.defineProperty(e, "signal", {
                      enumerable: !0,
                      get: () => (
                        t.signal.aborted
                          ? (n = !0)
                          : t.signal.addEventListener("abort", () => {
                              n = !0;
                            }),
                        t.signal
                      ),
                    });
                  },
                  d = (0, i.ZM)(t.options, t.fetchOptions),
                  h = async (e, r, a) => {
                    if (n) return Promise.reject();
                    if (null == r && e.pages.length) return Promise.resolve(e);
                    let s = {
                      client: t.client,
                      queryKey: t.queryKey,
                      pageParam: r,
                      direction: a ? "backward" : "forward",
                      meta: t.options.meta,
                    };
                    l(s);
                    let o = await d(s),
                      { maxPages: c } = t.options,
                      u = a ? i.ZZ : i.y9;
                    return {
                      pages: u(e.pages, o, c),
                      pageParams: u(e.pageParams, r, c),
                    };
                  };
                if (a && s.length) {
                  let e = "backward" === a,
                    t = { pages: s, pageParams: o },
                    n = (
                      e
                        ? function (e, { pages: t, pageParams: n }) {
                            return t.length > 0
                              ? e.getPreviousPageParam?.(t[0], t, n[0], n)
                              : void 0;
                          }
                        : p
                    )(r, t);
                  c = await h(t, n, e);
                } else {
                  let t = e ?? s.length;
                  do {
                    let e = 0 === u ? o[0] ?? r.initialPageParam : p(r, c);
                    if (u > 0 && null == e) break;
                    (c = await h(c, e)), u++;
                  } while (u < t);
                }
                return c;
              };
            t.options.persister
              ? (t.fetchFn = () =>
                  t.options.persister?.(
                    l,
                    {
                      client: t.client,
                      queryKey: t.queryKey,
                      meta: t.options.meta,
                      signal: t.signal,
                    },
                    n
                  ))
              : (t.fetchFn = l);
          },
        };
      }
      function p(e, { pages: t, pageParams: n }) {
        let i = t.length - 1;
        return t.length > 0 ? e.getNextPageParam(t[i], t, n[i], n) : void 0;
      }
      var m = class {
        #p;
        #o;
        #m;
        #g;
        #y;
        #b;
        #w;
        #v;
        constructor(e = {}) {
          (this.#p = e.queryCache || new o()),
            (this.#o = e.mutationCache || new u()),
            (this.#m = e.defaultOptions || {}),
            (this.#g = new Map()),
            (this.#y = new Map()),
            (this.#b = 0);
        }
        mount() {
          this.#b++,
            1 === this.#b &&
              ((this.#w = d.m.subscribe(async (e) => {
                e && (await this.resumePausedMutations(), this.#p.onFocus());
              })),
              (this.#v = h.t.subscribe(async (e) => {
                e && (await this.resumePausedMutations(), this.#p.onOnline());
              })));
        }
        unmount() {
          this.#b--,
            0 === this.#b &&
              (this.#w?.(),
              (this.#w = void 0),
              this.#v?.(),
              (this.#v = void 0));
        }
        isFetching(e) {
          return this.#p.findAll({ ...e, fetchStatus: "fetching" }).length;
        }
        isMutating(e) {
          return this.#o.findAll({ ...e, status: "pending" }).length;
        }
        getQueryData(e) {
          let t = this.defaultQueryOptions({ queryKey: e });
          return this.#p.get(t.queryHash)?.state.data;
        }
        ensureQueryData(e) {
          let t = this.defaultQueryOptions(e),
            n = this.#p.build(this, t),
            r = n.state.data;
          return void 0 === r
            ? this.fetchQuery(e)
            : (e.revalidateIfStale &&
                n.isStaleByTime((0, i.d2)(t.staleTime, n)) &&
                this.prefetchQuery(t),
              Promise.resolve(r));
        }
        getQueriesData(e) {
          return this.#p
            .findAll(e)
            .map(({ queryKey: e, state: t }) => [e, t.data]);
        }
        setQueryData(e, t, n) {
          let r = this.defaultQueryOptions({ queryKey: e }),
            a = this.#p.get(r.queryHash),
            s = a?.state.data,
            o = (0, i.Zw)(t, s);
          if (void 0 !== o)
            return this.#p.build(this, r).setData(o, { ...n, manual: !0 });
        }
        setQueriesData(e, t, n) {
          return a.jG.batch(() =>
            this.#p
              .findAll(e)
              .map(({ queryKey: e }) => [e, this.setQueryData(e, t, n)])
          );
        }
        getQueryState(e) {
          let t = this.defaultQueryOptions({ queryKey: e });
          return this.#p.get(t.queryHash)?.state;
        }
        removeQueries(e) {
          let t = this.#p;
          a.jG.batch(() => {
            t.findAll(e).forEach((e) => {
              t.remove(e);
            });
          });
        }
        resetQueries(e, t) {
          let n = this.#p;
          return a.jG.batch(
            () => (
              n.findAll(e).forEach((e) => {
                e.reset();
              }),
              this.refetchQueries({ type: "active", ...e }, t)
            )
          );
        }
        cancelQueries(e, t = {}) {
          let n = { revert: !0, ...t };
          return Promise.all(
            a.jG.batch(() => this.#p.findAll(e).map((e) => e.cancel(n)))
          )
            .then(i.lQ)
            .catch(i.lQ);
        }
        invalidateQueries(e, t = {}) {
          return a.jG.batch(() =>
            (this.#p.findAll(e).forEach((e) => {
              e.invalidate();
            }),
            e?.refetchType === "none")
              ? Promise.resolve()
              : this.refetchQueries(
                  { ...e, type: e?.refetchType ?? e?.type ?? "active" },
                  t
                )
          );
        }
        refetchQueries(e, t = {}) {
          let n = { ...t, cancelRefetch: t.cancelRefetch ?? !0 };
          return Promise.all(
            a.jG.batch(() =>
              this.#p
                .findAll(e)
                .filter((e) => !e.isDisabled())
                .map((e) => {
                  let t = e.fetch(void 0, n);
                  return (
                    n.throwOnError || (t = t.catch(i.lQ)),
                    "paused" === e.state.fetchStatus ? Promise.resolve() : t
                  );
                })
            )
          ).then(i.lQ);
        }
        fetchQuery(e) {
          let t = this.defaultQueryOptions(e);
          void 0 === t.retry && (t.retry = !1);
          let n = this.#p.build(this, t);
          return n.isStaleByTime((0, i.d2)(t.staleTime, n))
            ? n.fetch(t)
            : Promise.resolve(n.state.data);
        }
        prefetchQuery(e) {
          return this.fetchQuery(e).then(i.lQ).catch(i.lQ);
        }
        fetchInfiniteQuery(e) {
          return (e.behavior = f(e.pages)), this.fetchQuery(e);
        }
        prefetchInfiniteQuery(e) {
          return this.fetchInfiniteQuery(e).then(i.lQ).catch(i.lQ);
        }
        ensureInfiniteQueryData(e) {
          return (e.behavior = f(e.pages)), this.ensureQueryData(e);
        }
        resumePausedMutations() {
          return h.t.isOnline()
            ? this.#o.resumePausedMutations()
            : Promise.resolve();
        }
        getQueryCache() {
          return this.#p;
        }
        getMutationCache() {
          return this.#o;
        }
        getDefaultOptions() {
          return this.#m;
        }
        setDefaultOptions(e) {
          this.#m = e;
        }
        setQueryDefaults(e, t) {
          this.#g.set((0, i.EN)(e), { queryKey: e, defaultOptions: t });
        }
        getQueryDefaults(e) {
          let t = [...this.#g.values()],
            n = {};
          return (
            t.forEach((t) => {
              (0, i.Cp)(e, t.queryKey) && Object.assign(n, t.defaultOptions);
            }),
            n
          );
        }
        setMutationDefaults(e, t) {
          this.#y.set((0, i.EN)(e), { mutationKey: e, defaultOptions: t });
        }
        getMutationDefaults(e) {
          let t = [...this.#y.values()],
            n = {};
          return (
            t.forEach((t) => {
              (0, i.Cp)(e, t.mutationKey) && Object.assign(n, t.defaultOptions);
            }),
            n
          );
        }
        defaultQueryOptions(e) {
          if (e._defaulted) return e;
          let t = {
            ...this.#m.queries,
            ...this.getQueryDefaults(e.queryKey),
            ...e,
            _defaulted: !0,
          };
          return (
            t.queryHash || (t.queryHash = (0, i.F$)(t.queryKey, t)),
            void 0 === t.refetchOnReconnect &&
              (t.refetchOnReconnect = "always" !== t.networkMode),
            void 0 === t.throwOnError && (t.throwOnError = !!t.suspense),
            !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
            t.queryFn === i.hT && (t.enabled = !1),
            t
          );
        }
        defaultMutationOptions(e) {
          return e?._defaulted
            ? e
            : {
                ...this.#m.mutations,
                ...(e?.mutationKey && this.getMutationDefaults(e.mutationKey)),
                ...e,
                _defaulted: !0,
              };
        }
        clear() {
          this.#p.clear(), this.#o.clear();
        }
      };
    },
    87456: (e, t, n) => {
      "use strict";
      n.d(t, { l: () => a });
      var i = n(97118);
      let r = {
        bytes: new Uint8Array(),
        dataView: new DataView(new ArrayBuffer(0)),
        position: 0,
        positionReadCount: new Map(),
        recursiveReadCount: 0,
        recursiveReadLimit: Number.POSITIVE_INFINITY,
        assertReadLimit() {
          if (this.recursiveReadCount >= this.recursiveReadLimit)
            throw new i.hX({
              count: this.recursiveReadCount + 1,
              limit: this.recursiveReadLimit,
            });
        },
        assertPosition(e) {
          if (e < 0 || e > this.bytes.length - 1)
            throw new i.SK({ length: this.bytes.length, position: e });
        },
        decrementPosition(e) {
          if (e < 0) throw new i.B4({ offset: e });
          let t = this.position - e;
          this.assertPosition(t), (this.position = t);
        },
        getReadCount(e) {
          return this.positionReadCount.get(e || this.position) || 0;
        },
        incrementPosition(e) {
          if (e < 0) throw new i.B4({ offset: e });
          let t = this.position + e;
          this.assertPosition(t), (this.position = t);
        },
        inspectByte(e) {
          let t = e ?? this.position;
          return this.assertPosition(t), this.bytes[t];
        },
        inspectBytes(e, t) {
          let n = t ?? this.position;
          return this.assertPosition(n + e - 1), this.bytes.subarray(n, n + e);
        },
        inspectUint8(e) {
          let t = e ?? this.position;
          return this.assertPosition(t), this.bytes[t];
        },
        inspectUint16(e) {
          let t = e ?? this.position;
          return this.assertPosition(t + 1), this.dataView.getUint16(t);
        },
        inspectUint24(e) {
          let t = e ?? this.position;
          return (
            this.assertPosition(t + 2),
            (this.dataView.getUint16(t) << 8) + this.dataView.getUint8(t + 2)
          );
        },
        inspectUint32(e) {
          let t = e ?? this.position;
          return this.assertPosition(t + 3), this.dataView.getUint32(t);
        },
        pushByte(e) {
          this.assertPosition(this.position),
            (this.bytes[this.position] = e),
            this.position++;
        },
        pushBytes(e) {
          this.assertPosition(this.position + e.length - 1),
            this.bytes.set(e, this.position),
            (this.position += e.length);
        },
        pushUint8(e) {
          this.assertPosition(this.position),
            (this.bytes[this.position] = e),
            this.position++;
        },
        pushUint16(e) {
          this.assertPosition(this.position + 1),
            this.dataView.setUint16(this.position, e),
            (this.position += 2);
        },
        pushUint24(e) {
          this.assertPosition(this.position + 2),
            this.dataView.setUint16(this.position, e >> 8),
            this.dataView.setUint8(this.position + 2, 255 & e),
            (this.position += 3);
        },
        pushUint32(e) {
          this.assertPosition(this.position + 3),
            this.dataView.setUint32(this.position, e),
            (this.position += 4);
        },
        readByte() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectByte();
          return this.position++, e;
        },
        readBytes(e, t) {
          this.assertReadLimit(), this._touch();
          let n = this.inspectBytes(e);
          return (this.position += t ?? e), n;
        },
        readUint8() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectUint8();
          return (this.position += 1), e;
        },
        readUint16() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectUint16();
          return (this.position += 2), e;
        },
        readUint24() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectUint24();
          return (this.position += 3), e;
        },
        readUint32() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectUint32();
          return (this.position += 4), e;
        },
        get remaining() {
          return this.bytes.length - this.position;
        },
        setPosition(e) {
          let t = this.position;
          return (
            this.assertPosition(e),
            (this.position = e),
            () => (this.position = t)
          );
        },
        _touch() {
          if (this.recursiveReadLimit === Number.POSITIVE_INFINITY) return;
          let e = this.getReadCount();
          this.positionReadCount.set(this.position, e + 1),
            e > 0 && this.recursiveReadCount++;
        },
      };
      function a(e, { recursiveReadLimit: t = 8192 } = {}) {
        let n = Object.create(r);
        return (
          (n.bytes = e),
          (n.dataView = new DataView(e.buffer, e.byteOffset, e.byteLength)),
          (n.positionReadCount = new Map()),
          (n.recursiveReadLimit = t),
          n
        );
      }
    },
    90113: (e, t, n) => {
      "use strict";
      n.d(t, { N: () => r, V: () => a });
      var i = n(95782);
      class r extends i.C {
        constructor() {
          super("Provider not found."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ProviderNotFoundError",
            });
        }
      }
      class a extends i.C {
        constructor({ connector: e }) {
          super(`"${e.name}" does not support programmatic chain switching.`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "SwitchChainNotSupportedError",
            });
        }
      }
    },
    92374: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          cancelIdleCallback: function () {
            return i;
          },
          requestIdleCallback: function () {
            return n;
          },
        });
      let n =
          ("undefined" != typeof self &&
            self.requestIdleCallback &&
            self.requestIdleCallback.bind(window)) ||
          function (e) {
            let t = Date.now();
            return self.setTimeout(function () {
              e({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - t));
                },
              });
            }, 1);
          },
        i =
          ("undefined" != typeof self &&
            self.cancelIdleCallback &&
            self.cancelIdleCallback.bind(window)) ||
          function (e) {
            return clearTimeout(e);
          };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    93151: (e, t, n) => {
      "use strict";
      n.d(t, { NBY: () => i.NBY, rCZ: () => i.rCZ });
      var i = n(41757);
    },
    93727: (e, t, n) => {
      "use strict";
      n.d(t, { A1: () => u, di: () => s });
      var i = n(58980),
        r = n(32840),
        a = n(87094);
      function s(e, t, n, { strict: i } = {}) {
        return (0, r.q)(e, { strict: !1 })
          ? (function (e, t, n, { strict: i } = {}) {
              o(e, t);
              let r = `0x${e
                .replace("0x", "")
                .slice((t ?? 0) * 2, (n ?? e.length) * 2)}`;
              return i && c(r, t, n), r;
            })(e, t, n, { strict: i })
          : u(e, t, n, { strict: i });
      }
      function o(e, t) {
        if ("number" == typeof t && t > 0 && t > (0, a.E)(e) - 1)
          throw new i.ii({ offset: t, position: "start", size: (0, a.E)(e) });
      }
      function c(e, t, n) {
        if (
          "number" == typeof t &&
          "number" == typeof n &&
          (0, a.E)(e) !== n - t
        )
          throw new i.ii({ offset: n, position: "end", size: (0, a.E)(e) });
      }
      function u(e, t, n, { strict: i } = {}) {
        o(e, t);
        let r = e.slice(t, n);
        return i && c(r, t, n), r;
      }
    },
    96063: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.sendGTMEvent = void 0),
        (t.GoogleTagManager = function (e) {
          let {
            gtmId: t,
            gtmScriptUrl: n = "https://www.googletagmanager.com/gtm.js",
            dataLayerName: o = "dataLayer",
            auth: c,
            preview: u,
            dataLayer: l,
            nonce: d,
          } = e;
          s = o;
          let h = "dataLayer" !== o ? "&l=".concat(o) : "";
          return (
            (0, r.useEffect)(() => {
              performance.mark("mark_feature_usage", {
                detail: { feature: "next-third-parties-gtm" },
              });
            }, []),
            (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(a.default, {
                  id: "_next-gtm-init",
                  dangerouslySetInnerHTML: {
                    __html:
                      "\n      (function(w,l){\n        w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});\n        "
                        .concat(
                          l ? "w[l].push(".concat(JSON.stringify(l), ")") : "",
                          "\n      })(window,'"
                        )
                        .concat(o, "');"),
                  },
                  nonce: d,
                }),
                (0, i.jsx)(a.default, {
                  id: "_next-gtm",
                  "data-ntpc": "GTM",
                  src: ""
                    .concat(n, "?id=")
                    .concat(t)
                    .concat(h)
                    .concat(c ? "&gtm_auth=".concat(c) : "")
                    .concat(
                      u ? "&gtm_preview=".concat(u, "&gtm_cookies_win=x") : ""
                    ),
                  nonce: d,
                }),
              ],
            })
          );
        });
      let i = n(95155),
        r = n(12115),
        a = (function (e) {
          return e && e.__esModule ? e : { default: e };
        })(n(63554)),
        s = "dataLayer";
      t.sendGTMEvent = (e, t) => {
        let n = t || s;
        (window[n] = window[n] || []), window[n].push(e);
      };
    },
    97118: (e, t, n) => {
      "use strict";
      n.d(t, { B4: () => r, SK: () => a, hX: () => s });
      var i = n(7441);
      class r extends i.C {
        constructor({ offset: e }) {
          super(`Offset \`${e}\` cannot be negative.`, {
            name: "NegativeOffsetError",
          });
        }
      }
      class a extends i.C {
        constructor({ length: e, position: t }) {
          super(
            `Position \`${t}\` is out of bounds (\`0 < position < ${e}\`).`,
            { name: "PositionOutOfBoundsError" }
          );
        }
      }
      class s extends i.C {
        constructor({ count: e, limit: t }) {
          super(
            `Recursive read limit of \`${t}\` exceeded (recursive read count: \`${e}\`).`,
            { name: "RecursiveReadLimitExceededError" }
          );
        }
      }
    },
    99671: (e, t, n) => {
      "use strict";
      function i(e, t) {
        return JSON.parse(e, (e, n) => {
          let i = n;
          return (
            i?.__type === "bigint" && (i = BigInt(i.value)),
            i?.__type === "Map" && (i = new Map(i.value)),
            t?.(e, i) ?? i
          );
        });
      }
      n.d(t, { i: () => i });
    },
    99702: (e, t, n) => {
      "use strict";
      n.d(t, {
        BI: () => x,
        EB: () => v,
        Iy: () => c,
        Iz: () => b,
        MR: () => w,
        Nc: () => l,
        O: () => u,
        Wq: () => m,
        YE: () => h,
        YF: () => o,
        YW: () => s,
        ZP: () => f,
        _z: () => g,
        d_: () => M,
        dm: () => $,
        fo: () => P,
        gH: () => d,
        j: () => A,
        kE: () => y,
        l3: () => I,
        nK: () => E,
        nM: () => C,
        yy: () => p,
      });
      var i = n(21159),
        r = n(87094),
        a = n(7441);
      class s extends a.C {
        constructor({ docsPath: e }) {
          super(
            "A constructor was not found on the ABI.\nMake sure you are using the correct ABI and that the constructor exists on it.",
            { docsPath: e, name: "AbiConstructorNotFoundError" }
          );
        }
      }
      class o extends a.C {
        constructor({ docsPath: e }) {
          super(
            "Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.\nMake sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists.",
            { docsPath: e, name: "AbiConstructorParamsNotFoundError" }
          );
        }
      }
      a.C;
      class c extends a.C {
        constructor({ data: e, params: t, size: n }) {
          super(`Data size of ${n} bytes is too small for given parameters.`, {
            metaMessages: [
              `Params: (${(0, i.A)(t, { includeName: !0 })})`,
              `Data:   ${e} (${n} bytes)`,
            ],
            name: "AbiDecodingDataSizeTooSmallError",
          }),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "params", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "size", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.data = e),
            (this.params = t),
            (this.size = n);
        }
      }
      class u extends a.C {
        constructor() {
          super('Cannot decode zero data ("0x") with ABI parameters.', {
            name: "AbiDecodingZeroDataError",
          });
        }
      }
      class l extends a.C {
        constructor({ expectedLength: e, givenLength: t, type: n }) {
          super(
            `ABI encoding array length mismatch for type ${n}.
Expected length: ${e}
Given length: ${t}`,
            { name: "AbiEncodingArrayLengthMismatchError" }
          );
        }
      }
      class d extends a.C {
        constructor({ expectedSize: e, value: t }) {
          super(
            `Size of bytes "${t}" (bytes${(0, r.E)(
              t
            )}) does not match expected size (bytes${e}).`,
            { name: "AbiEncodingBytesSizeMismatchError" }
          );
        }
      }
      class h extends a.C {
        constructor({ expectedLength: e, givenLength: t }) {
          super(
            `ABI encoding params/values length mismatch.
Expected length (params): ${e}
Given length (values): ${t}`,
            { name: "AbiEncodingLengthMismatchError" }
          );
        }
      }
      class f extends a.C {
        constructor(e, { docsPath: t }) {
          super(
            `Arguments (\`args\`) were provided to "${e}", but "${e}" on the ABI does not contain any parameters (\`inputs\`).
Cannot encode error result without knowing what the parameter types are.
Make sure you are using the correct ABI and that the inputs exist on it.`,
            { docsPath: t, name: "AbiErrorInputsNotFoundError" }
          );
        }
      }
      class p extends a.C {
        constructor(e, { docsPath: t } = {}) {
          super(
            `Error ${e ? `"${e}" ` : ""}not found on ABI.
Make sure you are using the correct ABI and that the error exists on it.`,
            { docsPath: t, name: "AbiErrorNotFoundError" }
          );
        }
      }
      class m extends a.C {
        constructor(e, { docsPath: t }) {
          super(
            `Encoded error signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the error exists on it.
You can look up the decoded signature here: https://openchain.xyz/signatures?query=${e}.`,
            { docsPath: t, name: "AbiErrorSignatureNotFoundError" }
          ),
            Object.defineProperty(this, "signature", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.signature = e);
        }
      }
      class g extends a.C {
        constructor({ docsPath: e }) {
          super("Cannot extract event signature from empty topics.", {
            docsPath: e,
            name: "AbiEventSignatureEmptyTopicsError",
          });
        }
      }
      class y extends a.C {
        constructor(e, { docsPath: t }) {
          super(
            `Encoded event signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.
You can look up the signature here: https://openchain.xyz/signatures?query=${e}.`,
            { docsPath: t, name: "AbiEventSignatureNotFoundError" }
          );
        }
      }
      a.C;
      class b extends a.C {
        constructor(e, { docsPath: t } = {}) {
          super(
            `Function ${e ? `"${e}" ` : ""}not found on ABI.
Make sure you are using the correct ABI and that the function exists on it.`,
            { docsPath: t, name: "AbiFunctionNotFoundError" }
          );
        }
      }
      class w extends a.C {
        constructor(e, { docsPath: t }) {
          super(
            `Function "${e}" does not contain any \`outputs\` on ABI.
Cannot decode function result without knowing what the parameter types are.
Make sure you are using the correct ABI and that the function exists on it.`,
            { docsPath: t, name: "AbiFunctionOutputsNotFoundError" }
          );
        }
      }
      class v extends a.C {
        constructor(e, { docsPath: t }) {
          super(
            `Encoded function signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the function exists on it.
You can look up the signature here: https://openchain.xyz/signatures?query=${e}.`,
            { docsPath: t, name: "AbiFunctionSignatureNotFoundError" }
          );
        }
      }
      class C extends a.C {
        constructor(e, t) {
          super("Found ambiguous types in overloaded ABI items.", {
            metaMessages: [
              `\`${e.type}\` in \`${(0, i.B)(e.abiItem)}\`, and`,
              `\`${t.type}\` in \`${(0, i.B)(t.abiItem)}\``,
              "",
              "These types encode differently and cannot be distinguished at runtime.",
              "Remove one of the ambiguous items in the ABI.",
            ],
            name: "AbiItemAmbiguityError",
          });
        }
      }
      class x extends a.C {
        constructor({ expectedSize: e, givenSize: t }) {
          super(`Expected bytes${e}, got bytes${t}.`, {
            name: "BytesSizeMismatchError",
          });
        }
      }
      class P extends a.C {
        constructor({ abiItem: e, data: t, params: n, size: r }) {
          super(
            `Data size of ${r} bytes is too small for non-indexed event parameters.`,
            {
              metaMessages: [
                `Params: (${(0, i.A)(n, { includeName: !0 })})`,
                `Data:   ${t} (${r} bytes)`,
              ],
              name: "DecodeLogDataMismatch",
            }
          ),
            Object.defineProperty(this, "abiItem", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "params", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "size", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.abiItem = e),
            (this.data = t),
            (this.params = n),
            (this.size = r);
        }
      }
      class I extends a.C {
        constructor({ abiItem: e, param: t }) {
          super(
            `Expected a topic for indexed event parameter${
              t.name ? ` "${t.name}"` : ""
            } on event "${(0, i.B)(e, { includeName: !0 })}".`,
            { name: "DecodeLogTopicsMismatch" }
          ),
            Object.defineProperty(this, "abiItem", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.abiItem = e);
        }
      }
      class E extends a.C {
        constructor(e, { docsPath: t }) {
          super(
            `Type "${e}" is not a valid encoding type.
Please provide a valid ABI type.`,
            { docsPath: t, name: "InvalidAbiEncodingType" }
          );
        }
      }
      class A extends a.C {
        constructor(e, { docsPath: t }) {
          super(
            `Type "${e}" is not a valid decoding type.
Please provide a valid ABI type.`,
            { docsPath: t, name: "InvalidAbiDecodingType" }
          );
        }
      }
      class $ extends a.C {
        constructor(e) {
          super(`Value "${e}" is not a valid array.`, {
            name: "InvalidArrayError",
          });
        }
      }
      class M extends a.C {
        constructor(e) {
          super(
            `"${e}" is not a valid definition type.
Valid types: "function", "event", "error"`,
            { name: "InvalidDefinitionTypeError" }
          );
        }
      }
      a.C;
    },
  },
]);
