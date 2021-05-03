(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{422:function(t,a,s){"use strict";s.r(a);var n=s(5),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"transaction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transaction"}},[t._v("#")]),t._v(" Transaction")]),t._v(" "),s("h2",{attrs:{id:"what-is-transaction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-is-transaction"}},[t._v("#")]),t._v(" What is transaction?")]),t._v(" "),s("h2",{attrs:{id:"transaction-format"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transaction-format"}},[t._v("#")]),t._v(" Transaction format")]),t._v(" "),s("p",[t._v("Transactions in zarb are like below:")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Transaction "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   Version   "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("              "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('`cbor:"1,keyasint"`')]),t._v("\n   Stamp     Hash             "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('`cbor:"2,keyasint"`')]),t._v("\n   Sequence  "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("              "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('`cbor:"3,keyasint"`')]),t._v("\n   Fee       "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int64")]),t._v("            "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('`cbor:"4,keyasint"`')]),t._v("\n   Type      PayloadType      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('`cbor:"5,keyasint"`')]),t._v("\n   Payload   cbor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RawMessage  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('`cbor:"6,keyasint"`')]),t._v("\n   Memo      "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("           "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('`cbor:"7,keyasint,omitempty"`')]),t._v("\n   PublicKey "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("PublicKey       "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('`cbor:"20,keyasint,omitempty"`')]),t._v("\n   Signature "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("Signature       "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('`cbor:"21,keyasint,omitempty"`')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Payload types are:")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n   PayloadTypeSend      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("PayloadType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   PayloadTypeBond      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("PayloadType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   PayloadTypeSortition "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("PayloadType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("Comment:")]),t._v(" "),s("ul",[s("li",[t._v("The payload will be decoded based on payload type")]),t._v(" "),s("li",[t._v("Sign bytes are CBOR data of tx without public key and signature")]),t._v(" "),s("li",[t._v("Transaction id is the hash of sign bytes")])]),t._v(" "),s("h2",{attrs:{id:"transaction-id"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transaction-id"}},[t._v("#")]),t._v(" Transaction ID")]),t._v(" "),s("p",[t._v("Transaction ID is the hash of transaction without public key and signature.")])])}),[],!1,null,null,null);a.default=e.exports}}]);