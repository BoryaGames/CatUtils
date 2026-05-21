var plist = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/@xmldom/xmldom/lib/conventions.js
  var require_conventions = __commonJS({
    "node_modules/@xmldom/xmldom/lib/conventions.js"(exports) {
      "use strict";
      function find(list, predicate, ac) {
        if (ac === void 0) {
          ac = Array.prototype;
        }
        if (list && typeof ac.find === "function") {
          return ac.find.call(list, predicate);
        }
        for (var i = 0; i < list.length; i++) {
          if (hasOwn(list, i)) {
            var item = list[i];
            if (predicate.call(void 0, item, i, list)) {
              return item;
            }
          }
        }
      }
      function freeze(object, oc) {
        if (oc === void 0) {
          oc = Object;
        }
        if (oc && typeof oc.getOwnPropertyDescriptors === "function") {
          object = oc.create(null, oc.getOwnPropertyDescriptors(object));
        }
        return oc && typeof oc.freeze === "function" ? oc.freeze(object) : object;
      }
      function hasOwn(object, key) {
        return Object.prototype.hasOwnProperty.call(object, key);
      }
      function assign(target, source) {
        if (target === null || typeof target !== "object") {
          throw new TypeError("target is not an object");
        }
        for (var key in source) {
          if (hasOwn(source, key)) {
            target[key] = source[key];
          }
        }
        return target;
      }
      var HTML_BOOLEAN_ATTRIBUTES = freeze({
        allowfullscreen: true,
        async: true,
        autofocus: true,
        autoplay: true,
        checked: true,
        controls: true,
        default: true,
        defer: true,
        disabled: true,
        formnovalidate: true,
        hidden: true,
        ismap: true,
        itemscope: true,
        loop: true,
        multiple: true,
        muted: true,
        nomodule: true,
        novalidate: true,
        open: true,
        playsinline: true,
        readonly: true,
        required: true,
        reversed: true,
        selected: true
      });
      function isHTMLBooleanAttribute(name) {
        return hasOwn(HTML_BOOLEAN_ATTRIBUTES, name.toLowerCase());
      }
      var HTML_VOID_ELEMENTS = freeze({
        area: true,
        base: true,
        br: true,
        col: true,
        embed: true,
        hr: true,
        img: true,
        input: true,
        link: true,
        meta: true,
        param: true,
        source: true,
        track: true,
        wbr: true
      });
      function isHTMLVoidElement(tagName) {
        return hasOwn(HTML_VOID_ELEMENTS, tagName.toLowerCase());
      }
      var HTML_RAW_TEXT_ELEMENTS = freeze({
        script: false,
        style: false,
        textarea: true,
        title: true
      });
      function isHTMLRawTextElement(tagName) {
        var key = tagName.toLowerCase();
        return hasOwn(HTML_RAW_TEXT_ELEMENTS, key) && !HTML_RAW_TEXT_ELEMENTS[key];
      }
      function isHTMLEscapableRawTextElement(tagName) {
        var key = tagName.toLowerCase();
        return hasOwn(HTML_RAW_TEXT_ELEMENTS, key) && HTML_RAW_TEXT_ELEMENTS[key];
      }
      function isHTMLMimeType(mimeType) {
        return mimeType === MIME_TYPE.HTML;
      }
      function hasDefaultHTMLNamespace(mimeType) {
        return isHTMLMimeType(mimeType) || mimeType === MIME_TYPE.XML_XHTML_APPLICATION;
      }
      var MIME_TYPE = freeze({
        /**
         * `text/html`, the only mime type that triggers treating an XML document as HTML.
         *
         * @see https://www.iana.org/assignments/media-types/text/html IANA MimeType registration
         * @see https://en.wikipedia.org/wiki/HTML Wikipedia
         * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString MDN
         * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-domparser-parsefromstring
         *      WHATWG HTML Spec
         */
        HTML: "text/html",
        /**
         * `application/xml`, the standard mime type for XML documents.
         *
         * @see https://www.iana.org/assignments/media-types/application/xml IANA MimeType
         *      registration
         * @see https://tools.ietf.org/html/rfc7303#section-9.1 RFC 7303
         * @see https://en.wikipedia.org/wiki/XML_and_MIME Wikipedia
         */
        XML_APPLICATION: "application/xml",
        /**
         * `text/xml`, an alias for `application/xml`.
         *
         * @see https://tools.ietf.org/html/rfc7303#section-9.2 RFC 7303
         * @see https://www.iana.org/assignments/media-types/text/xml IANA MimeType registration
         * @see https://en.wikipedia.org/wiki/XML_and_MIME Wikipedia
         */
        XML_TEXT: "text/xml",
        /**
         * `application/xhtml+xml`, indicates an XML document that has the default HTML namespace,
         * but is parsed as an XML document.
         *
         * @see https://www.iana.org/assignments/media-types/application/xhtml+xml IANA MimeType
         *      registration
         * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument WHATWG DOM Spec
         * @see https://en.wikipedia.org/wiki/XHTML Wikipedia
         */
        XML_XHTML_APPLICATION: "application/xhtml+xml",
        /**
         * `image/svg+xml`,
         *
         * @see https://www.iana.org/assignments/media-types/image/svg+xml IANA MimeType registration
         * @see https://www.w3.org/TR/SVG11/ W3C SVG 1.1
         * @see https://en.wikipedia.org/wiki/Scalable_Vector_Graphics Wikipedia
         */
        XML_SVG_IMAGE: "image/svg+xml"
      });
      var _MIME_TYPES = Object.keys(MIME_TYPE).map(function(key) {
        return MIME_TYPE[key];
      });
      function isValidMimeType(mimeType) {
        return _MIME_TYPES.indexOf(mimeType) > -1;
      }
      var NAMESPACE = freeze({
        /**
         * The XHTML namespace.
         *
         * @see http://www.w3.org/1999/xhtml
         */
        HTML: "http://www.w3.org/1999/xhtml",
        /**
         * The SVG namespace.
         *
         * @see http://www.w3.org/2000/svg
         */
        SVG: "http://www.w3.org/2000/svg",
        /**
         * The `xml:` namespace.
         *
         * @see http://www.w3.org/XML/1998/namespace
         */
        XML: "http://www.w3.org/XML/1998/namespace",
        /**
         * The `xmlns:` namespace.
         *
         * @see https://www.w3.org/2000/xmlns/
         */
        XMLNS: "http://www.w3.org/2000/xmlns/"
      });
      exports.assign = assign;
      exports.find = find;
      exports.freeze = freeze;
      exports.HTML_BOOLEAN_ATTRIBUTES = HTML_BOOLEAN_ATTRIBUTES;
      exports.HTML_RAW_TEXT_ELEMENTS = HTML_RAW_TEXT_ELEMENTS;
      exports.HTML_VOID_ELEMENTS = HTML_VOID_ELEMENTS;
      exports.hasDefaultHTMLNamespace = hasDefaultHTMLNamespace;
      exports.hasOwn = hasOwn;
      exports.isHTMLBooleanAttribute = isHTMLBooleanAttribute;
      exports.isHTMLRawTextElement = isHTMLRawTextElement;
      exports.isHTMLEscapableRawTextElement = isHTMLEscapableRawTextElement;
      exports.isHTMLMimeType = isHTMLMimeType;
      exports.isHTMLVoidElement = isHTMLVoidElement;
      exports.isValidMimeType = isValidMimeType;
      exports.MIME_TYPE = MIME_TYPE;
      exports.NAMESPACE = NAMESPACE;
    }
  });

  // node_modules/@xmldom/xmldom/lib/errors.js
  var require_errors = __commonJS({
    "node_modules/@xmldom/xmldom/lib/errors.js"(exports) {
      "use strict";
      var conventions = require_conventions();
      function extendError(constructor, writableName) {
        constructor.prototype = Object.create(Error.prototype, {
          constructor: { value: constructor },
          name: { value: constructor.name, enumerable: true, writable: writableName }
        });
      }
      var DOMExceptionName = conventions.freeze({
        /**
         * the default value as defined by the spec
         */
        Error: "Error",
        /**
         * @deprecated
         * Use RangeError instead.
         */
        IndexSizeError: "IndexSizeError",
        /**
         * @deprecated
         * Just to match the related static code, not part of the spec.
         */
        DomstringSizeError: "DomstringSizeError",
        HierarchyRequestError: "HierarchyRequestError",
        WrongDocumentError: "WrongDocumentError",
        InvalidCharacterError: "InvalidCharacterError",
        /**
         * @deprecated
         * Just to match the related static code, not part of the spec.
         */
        NoDataAllowedError: "NoDataAllowedError",
        NoModificationAllowedError: "NoModificationAllowedError",
        NotFoundError: "NotFoundError",
        NotSupportedError: "NotSupportedError",
        InUseAttributeError: "InUseAttributeError",
        InvalidStateError: "InvalidStateError",
        SyntaxError: "SyntaxError",
        InvalidModificationError: "InvalidModificationError",
        NamespaceError: "NamespaceError",
        /**
         * @deprecated
         * Use TypeError for invalid arguments,
         * "NotSupportedError" DOMException for unsupported operations,
         * and "NotAllowedError" DOMException for denied requests instead.
         */
        InvalidAccessError: "InvalidAccessError",
        /**
         * @deprecated
         * Just to match the related static code, not part of the spec.
         */
        ValidationError: "ValidationError",
        /**
         * @deprecated
         * Use TypeError instead.
         */
        TypeMismatchError: "TypeMismatchError",
        SecurityError: "SecurityError",
        NetworkError: "NetworkError",
        AbortError: "AbortError",
        /**
         * @deprecated
         * Just to match the related static code, not part of the spec.
         */
        URLMismatchError: "URLMismatchError",
        QuotaExceededError: "QuotaExceededError",
        TimeoutError: "TimeoutError",
        InvalidNodeTypeError: "InvalidNodeTypeError",
        DataCloneError: "DataCloneError",
        EncodingError: "EncodingError",
        NotReadableError: "NotReadableError",
        UnknownError: "UnknownError",
        ConstraintError: "ConstraintError",
        DataError: "DataError",
        TransactionInactiveError: "TransactionInactiveError",
        ReadOnlyError: "ReadOnlyError",
        VersionError: "VersionError",
        OperationError: "OperationError",
        NotAllowedError: "NotAllowedError",
        OptOutError: "OptOutError"
      });
      var DOMExceptionNames = Object.keys(DOMExceptionName);
      function isValidDomExceptionCode(value) {
        return typeof value === "number" && value >= 1 && value <= 25;
      }
      function endsWithError(value) {
        return typeof value === "string" && value.substring(value.length - DOMExceptionName.Error.length) === DOMExceptionName.Error;
      }
      function DOMException(messageOrCode, nameOrMessage) {
        if (isValidDomExceptionCode(messageOrCode)) {
          this.name = DOMExceptionNames[messageOrCode];
          this.message = nameOrMessage || "";
        } else {
          this.message = messageOrCode;
          this.name = endsWithError(nameOrMessage) ? nameOrMessage : DOMExceptionName.Error;
        }
        if (Error.captureStackTrace) Error.captureStackTrace(this, DOMException);
      }
      extendError(DOMException, true);
      Object.defineProperties(DOMException.prototype, {
        code: {
          enumerable: true,
          get: function() {
            var code = DOMExceptionNames.indexOf(this.name);
            if (isValidDomExceptionCode(code)) return code;
            return 0;
          }
        }
      });
      var ExceptionCode = {
        INDEX_SIZE_ERR: 1,
        DOMSTRING_SIZE_ERR: 2,
        HIERARCHY_REQUEST_ERR: 3,
        WRONG_DOCUMENT_ERR: 4,
        INVALID_CHARACTER_ERR: 5,
        NO_DATA_ALLOWED_ERR: 6,
        NO_MODIFICATION_ALLOWED_ERR: 7,
        NOT_FOUND_ERR: 8,
        NOT_SUPPORTED_ERR: 9,
        INUSE_ATTRIBUTE_ERR: 10,
        INVALID_STATE_ERR: 11,
        SYNTAX_ERR: 12,
        INVALID_MODIFICATION_ERR: 13,
        NAMESPACE_ERR: 14,
        INVALID_ACCESS_ERR: 15,
        VALIDATION_ERR: 16,
        TYPE_MISMATCH_ERR: 17,
        SECURITY_ERR: 18,
        NETWORK_ERR: 19,
        ABORT_ERR: 20,
        URL_MISMATCH_ERR: 21,
        QUOTA_EXCEEDED_ERR: 22,
        TIMEOUT_ERR: 23,
        INVALID_NODE_TYPE_ERR: 24,
        DATA_CLONE_ERR: 25
      };
      var entries = Object.entries(ExceptionCode);
      for (i = 0; i < entries.length; i++) {
        key = entries[i][0];
        DOMException[key] = entries[i][1];
      }
      var key;
      var i;
      function ParseError(message, locator) {
        this.message = message;
        this.locator = locator;
        if (Error.captureStackTrace) Error.captureStackTrace(this, ParseError);
      }
      extendError(ParseError);
      exports.DOMException = DOMException;
      exports.DOMExceptionName = DOMExceptionName;
      exports.ExceptionCode = ExceptionCode;
      exports.ParseError = ParseError;
    }
  });

  // node_modules/@xmldom/xmldom/lib/grammar.js
  var require_grammar = __commonJS({
    "node_modules/@xmldom/xmldom/lib/grammar.js"(exports) {
      "use strict";
      function detectUnicodeSupport(RegExpImpl) {
        try {
          if (typeof RegExpImpl !== "function") {
            RegExpImpl = RegExp;
          }
          var match = new RegExpImpl("\u{1D306}", "u").exec("\u{1D306}");
          return !!match && match[0].length === 2;
        } catch (error) {
        }
        return false;
      }
      var UNICODE_SUPPORT = detectUnicodeSupport();
      function chars(regexp) {
        if (regexp.source[0] !== "[") {
          throw new Error(regexp + " can not be used with chars");
        }
        return regexp.source.slice(1, regexp.source.lastIndexOf("]"));
      }
      function chars_without(regexp, search) {
        if (regexp.source[0] !== "[") {
          throw new Error("/" + regexp.source + "/ can not be used with chars_without");
        }
        if (!search || typeof search !== "string") {
          throw new Error(JSON.stringify(search) + " is not a valid search");
        }
        if (regexp.source.indexOf(search) === -1) {
          throw new Error('"' + search + '" is not is /' + regexp.source + "/");
        }
        if (search === "-" && regexp.source.indexOf(search) !== 1) {
          throw new Error('"' + search + '" is not at the first postion of /' + regexp.source + "/");
        }
        return new RegExp(regexp.source.replace(search, ""), UNICODE_SUPPORT ? "u" : "");
      }
      function reg(args) {
        var self = this;
        return new RegExp(
          Array.prototype.slice.call(arguments).map(function(part) {
            var isStr = typeof part === "string";
            if (isStr && self === void 0 && part === "|") {
              throw new Error("use regg instead of reg to wrap expressions with `|`!");
            }
            return isStr ? part : part.source;
          }).join(""),
          UNICODE_SUPPORT ? "mu" : "m"
        );
      }
      function regg(args) {
        if (arguments.length === 0) {
          throw new Error("no parameters provided");
        }
        return reg.apply(regg, ["(?:"].concat(Array.prototype.slice.call(arguments), [")"]));
      }
      var UNICODE_REPLACEMENT_CHARACTER = "\uFFFD";
      var Char = /[-\x09\x0A\x0D\x20-\x2C\x2E-\uD7FF\uE000-\uFFFD]/;
      if (UNICODE_SUPPORT) {
        Char = reg("[", chars(Char), "\\u{10000}-\\u{10FFFF}", "]");
      }
      var InvalidChar = new RegExp("[^" + chars(Char) + "]", UNICODE_SUPPORT ? "u" : "");
      var _SChar = /[\x20\x09\x0D\x0A]/;
      var SChar_s = chars(_SChar);
      var S = reg(_SChar, "+");
      var S_OPT = reg(_SChar, "*");
      var NameStartChar = /[:_a-zA-Z\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
      if (UNICODE_SUPPORT) {
        NameStartChar = reg("[", chars(NameStartChar), "\\u{10000}-\\u{10FFFF}", "]");
      }
      var NameStartChar_s = chars(NameStartChar);
      var NameChar = reg("[", NameStartChar_s, chars(/[-.0-9\xB7]/), chars(/[\u0300-\u036F\u203F-\u2040]/), "]");
      var Name = reg(NameStartChar, NameChar, "*");
      var Nmtoken = reg(NameChar, "+");
      var EntityRef = reg("&", Name, ";");
      var CharRef = regg(/&#[0-9]+;|&#x[0-9a-fA-F]+;/);
      var Reference = regg(EntityRef, "|", CharRef);
      var PEReference = reg("%", Name, ";");
      var EntityValue = regg(
        reg('"', regg(/[^%&"]/, "|", PEReference, "|", Reference), "*", '"'),
        "|",
        reg("'", regg(/[^%&']/, "|", PEReference, "|", Reference), "*", "'")
      );
      var AttValue = regg('"', regg(/[^<&"]/, "|", Reference), "*", '"', "|", "'", regg(/[^<&']/, "|", Reference), "*", "'");
      var NCNameStartChar = chars_without(NameStartChar, ":");
      var NCNameChar = chars_without(NameChar, ":");
      var NCName = reg(NCNameStartChar, NCNameChar, "*");
      var QName = reg(NCName, regg(":", NCName), "?");
      var QName_exact = reg("^", QName, "$");
      var QName_group = reg("(", QName, ")");
      var SystemLiteral = regg(/"[^"]*"|'[^']*'/);
      var PI = reg(/^<\?/, "(", Name, ")", regg(S, "(", Char, "*?)"), "?", /\?>/);
      var PubidChar = /[\x20\x0D\x0Aa-zA-Z0-9-'()+,./:=?;!*#@$_%]/;
      var PubidLiteral = regg('"', PubidChar, '*"', "|", "'", chars_without(PubidChar, "'"), "*'");
      var COMMENT_START = "<!--";
      var COMMENT_END = "-->";
      var Comment = reg(COMMENT_START, regg(chars_without(Char, "-"), "|", reg("-", chars_without(Char, "-"))), "*", COMMENT_END);
      var PCDATA = "#PCDATA";
      var Mixed = regg(
        reg(/\(/, S_OPT, PCDATA, regg(S_OPT, /\|/, S_OPT, QName), "*", S_OPT, /\)\*/),
        "|",
        reg(/\(/, S_OPT, PCDATA, S_OPT, /\)/)
      );
      var _children_quantity = /[?*+]?/;
      var children2 = reg(
        /\([^>]+\)/,
        _children_quantity
        /*regg(choice, '|', seq), _children_quantity*/
      );
      var contentspec = regg("EMPTY", "|", "ANY", "|", Mixed, "|", children2);
      var ELEMENTDECL_START = "<!ELEMENT";
      var elementdecl = reg(ELEMENTDECL_START, S, regg(QName, "|", PEReference), S, regg(contentspec, "|", PEReference), S_OPT, ">");
      var NotationType = reg("NOTATION", S, /\(/, S_OPT, Name, regg(S_OPT, /\|/, S_OPT, Name), "*", S_OPT, /\)/);
      var Enumeration = reg(/\(/, S_OPT, Nmtoken, regg(S_OPT, /\|/, S_OPT, Nmtoken), "*", S_OPT, /\)/);
      var EnumeratedType = regg(NotationType, "|", Enumeration);
      var AttType = regg(/CDATA|ID|IDREF|IDREFS|ENTITY|ENTITIES|NMTOKEN|NMTOKENS/, "|", EnumeratedType);
      var DefaultDecl = regg(/#REQUIRED|#IMPLIED/, "|", regg(regg("#FIXED", S), "?", AttValue));
      var AttDef = regg(S, Name, S, AttType, S, DefaultDecl);
      var ATTLIST_DECL_START = "<!ATTLIST";
      var AttlistDecl = reg(ATTLIST_DECL_START, S, Name, AttDef, "*", S_OPT, ">");
      var ABOUT_LEGACY_COMPAT = "about:legacy-compat";
      var ABOUT_LEGACY_COMPAT_SystemLiteral = regg('"' + ABOUT_LEGACY_COMPAT + '"', "|", "'" + ABOUT_LEGACY_COMPAT + "'");
      var SYSTEM = "SYSTEM";
      var PUBLIC = "PUBLIC";
      var ExternalID = regg(regg(SYSTEM, S, SystemLiteral), "|", regg(PUBLIC, S, PubidLiteral, S, SystemLiteral));
      var ExternalID_match = reg(
        "^",
        regg(
          regg(SYSTEM, S, "(?<SystemLiteralOnly>", SystemLiteral, ")"),
          "|",
          regg(PUBLIC, S, "(?<PubidLiteral>", PubidLiteral, ")", S, "(?<SystemLiteral>", SystemLiteral, ")")
        )
      );
      var PubidLiteral_match = reg("^", PubidLiteral, "$");
      var SystemLiteral_match = reg("^", SystemLiteral, "$");
      var NDataDecl = regg(S, "NDATA", S, Name);
      var EntityDef = regg(EntityValue, "|", regg(ExternalID, NDataDecl, "?"));
      var ENTITY_DECL_START = "<!ENTITY";
      var GEDecl = reg(ENTITY_DECL_START, S, Name, S, EntityDef, S_OPT, ">");
      var PEDef = regg(EntityValue, "|", ExternalID);
      var PEDecl = reg(ENTITY_DECL_START, S, "%", S, Name, S, PEDef, S_OPT, ">");
      var EntityDecl = regg(GEDecl, "|", PEDecl);
      var PublicID = reg(PUBLIC, S, PubidLiteral);
      var NotationDecl = reg("<!NOTATION", S, Name, S, regg(ExternalID, "|", PublicID), S_OPT, ">");
      var Eq = reg(S_OPT, "=", S_OPT);
      var VersionNum = /1[.]\d+/;
      var VersionInfo = reg(S, "version", Eq, regg("'", VersionNum, "'", "|", '"', VersionNum, '"'));
      var EncName = /[A-Za-z][-A-Za-z0-9._]*/;
      var EncodingDecl = regg(S, "encoding", Eq, regg('"', EncName, '"', "|", "'", EncName, "'"));
      var SDDecl = regg(S, "standalone", Eq, regg("'", regg("yes", "|", "no"), "'", "|", '"', regg("yes", "|", "no"), '"'));
      var XMLDecl = reg(/^<\?xml/, VersionInfo, EncodingDecl, "?", SDDecl, "?", S_OPT, /\?>/);
      var DOCTYPE_DECL_START = "<!DOCTYPE";
      var CDATA_START = "<![CDATA[";
      var CDATA_END = "]]>";
      var CDStart = /<!\[CDATA\[/;
      var CDEnd = /\]\]>/;
      var CData = reg(Char, "*?", CDEnd);
      var CDSect = reg(CDStart, CData);
      exports.chars = chars;
      exports.chars_without = chars_without;
      exports.detectUnicodeSupport = detectUnicodeSupport;
      exports.reg = reg;
      exports.regg = regg;
      exports.ABOUT_LEGACY_COMPAT = ABOUT_LEGACY_COMPAT;
      exports.ABOUT_LEGACY_COMPAT_SystemLiteral = ABOUT_LEGACY_COMPAT_SystemLiteral;
      exports.AttlistDecl = AttlistDecl;
      exports.CDATA_START = CDATA_START;
      exports.CDATA_END = CDATA_END;
      exports.CDSect = CDSect;
      exports.Char = Char;
      exports.Comment = Comment;
      exports.COMMENT_START = COMMENT_START;
      exports.COMMENT_END = COMMENT_END;
      exports.DOCTYPE_DECL_START = DOCTYPE_DECL_START;
      exports.elementdecl = elementdecl;
      exports.EntityDecl = EntityDecl;
      exports.EntityValue = EntityValue;
      exports.ExternalID = ExternalID;
      exports.ExternalID_match = ExternalID_match;
      exports.Name = Name;
      exports.NotationDecl = NotationDecl;
      exports.Reference = Reference;
      exports.PEReference = PEReference;
      exports.PI = PI;
      exports.PUBLIC = PUBLIC;
      exports.PubidLiteral = PubidLiteral;
      exports.PubidLiteral_match = PubidLiteral_match;
      exports.QName = QName;
      exports.QName_exact = QName_exact;
      exports.QName_group = QName_group;
      exports.S = S;
      exports.SChar_s = SChar_s;
      exports.S_OPT = S_OPT;
      exports.SYSTEM = SYSTEM;
      exports.SystemLiteral = SystemLiteral;
      exports.SystemLiteral_match = SystemLiteral_match;
      exports.InvalidChar = InvalidChar;
      exports.UNICODE_REPLACEMENT_CHARACTER = UNICODE_REPLACEMENT_CHARACTER;
      exports.UNICODE_SUPPORT = UNICODE_SUPPORT;
      exports.XMLDecl = XMLDecl;
    }
  });

  // node_modules/@xmldom/xmldom/lib/dom.js
  var require_dom = __commonJS({
    "node_modules/@xmldom/xmldom/lib/dom.js"(exports) {
      "use strict";
      var conventions = require_conventions();
      var find = conventions.find;
      var hasDefaultHTMLNamespace = conventions.hasDefaultHTMLNamespace;
      var hasOwn = conventions.hasOwn;
      var isHTMLMimeType = conventions.isHTMLMimeType;
      var isHTMLRawTextElement = conventions.isHTMLRawTextElement;
      var isHTMLVoidElement = conventions.isHTMLVoidElement;
      var MIME_TYPE = conventions.MIME_TYPE;
      var NAMESPACE = conventions.NAMESPACE;
      var PDC = /* @__PURE__ */ Symbol();
      var errors = require_errors();
      var DOMException = errors.DOMException;
      var DOMExceptionName = errors.DOMExceptionName;
      var g = require_grammar();
      function checkSymbol(symbol) {
        if (symbol !== PDC) {
          throw new TypeError("Illegal constructor");
        }
      }
      function notEmptyString(input) {
        return input !== "";
      }
      function splitOnASCIIWhitespace(input) {
        return input ? input.split(/[\t\n\f\r ]+/).filter(notEmptyString) : [];
      }
      function orderedSetReducer(current, element) {
        if (!hasOwn(current, element)) {
          current[element] = true;
        }
        return current;
      }
      function toOrderedSet(input) {
        if (!input) return [];
        var list = splitOnASCIIWhitespace(input);
        return Object.keys(list.reduce(orderedSetReducer, {}));
      }
      function arrayIncludes(list) {
        return function(element) {
          return list && list.indexOf(element) !== -1;
        };
      }
      function validateQualifiedName(qualifiedName) {
        if (!g.QName_exact.test(qualifiedName)) {
          throw new DOMException(DOMException.INVALID_CHARACTER_ERR, 'invalid character in qualified name "' + qualifiedName + '"');
        }
      }
      function validateAndExtract(namespace, qualifiedName) {
        validateQualifiedName(qualifiedName);
        namespace = namespace || null;
        var prefix = null;
        var localName = qualifiedName;
        if (qualifiedName.indexOf(":") >= 0) {
          var splitResult = qualifiedName.split(":");
          prefix = splitResult[0];
          localName = splitResult[1];
        }
        if (prefix !== null && namespace === null) {
          throw new DOMException(DOMException.NAMESPACE_ERR, "prefix is non-null and namespace is null");
        }
        if (prefix === "xml" && namespace !== conventions.NAMESPACE.XML) {
          throw new DOMException(DOMException.NAMESPACE_ERR, 'prefix is "xml" and namespace is not the XML namespace');
        }
        if ((prefix === "xmlns" || qualifiedName === "xmlns") && namespace !== conventions.NAMESPACE.XMLNS) {
          throw new DOMException(
            DOMException.NAMESPACE_ERR,
            'either qualifiedName or prefix is "xmlns" and namespace is not the XMLNS namespace'
          );
        }
        if (namespace === conventions.NAMESPACE.XMLNS && prefix !== "xmlns" && qualifiedName !== "xmlns") {
          throw new DOMException(
            DOMException.NAMESPACE_ERR,
            'namespace is the XMLNS namespace and neither qualifiedName nor prefix is "xmlns"'
          );
        }
        return [namespace, prefix, localName];
      }
      function copy(src, dest) {
        for (var p in src) {
          if (hasOwn(src, p)) {
            dest[p] = src[p];
          }
        }
      }
      function _extends(Class, Super) {
        var pt = Class.prototype;
        if (!(pt instanceof Super)) {
          let t = function() {
          };
          t.prototype = Super.prototype;
          t = new t();
          copy(pt, t);
          Class.prototype = pt = t;
        }
        if (pt.constructor != Class) {
          if (typeof Class != "function") {
            console.error("unknown Class:" + Class);
          }
          pt.constructor = Class;
        }
      }
      var NodeType = {};
      var ELEMENT_NODE = NodeType.ELEMENT_NODE = 1;
      var ATTRIBUTE_NODE = NodeType.ATTRIBUTE_NODE = 2;
      var TEXT_NODE2 = NodeType.TEXT_NODE = 3;
      var CDATA_SECTION_NODE = NodeType.CDATA_SECTION_NODE = 4;
      var ENTITY_REFERENCE_NODE = NodeType.ENTITY_REFERENCE_NODE = 5;
      var ENTITY_NODE = NodeType.ENTITY_NODE = 6;
      var PROCESSING_INSTRUCTION_NODE = NodeType.PROCESSING_INSTRUCTION_NODE = 7;
      var COMMENT_NODE2 = NodeType.COMMENT_NODE = 8;
      var DOCUMENT_NODE = NodeType.DOCUMENT_NODE = 9;
      var DOCUMENT_TYPE_NODE = NodeType.DOCUMENT_TYPE_NODE = 10;
      var DOCUMENT_FRAGMENT_NODE = NodeType.DOCUMENT_FRAGMENT_NODE = 11;
      var NOTATION_NODE = NodeType.NOTATION_NODE = 12;
      var DocumentPosition = conventions.freeze({
        DOCUMENT_POSITION_DISCONNECTED: 1,
        DOCUMENT_POSITION_PRECEDING: 2,
        DOCUMENT_POSITION_FOLLOWING: 4,
        DOCUMENT_POSITION_CONTAINS: 8,
        DOCUMENT_POSITION_CONTAINED_BY: 16,
        DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: 32
      });
      function commonAncestor(a, b) {
        if (b.length < a.length) return commonAncestor(b, a);
        var c = null;
        for (var n in a) {
          if (a[n] !== b[n]) return c;
          c = a[n];
        }
        return c;
      }
      function docGUID(doc) {
        if (!doc.guid) doc.guid = Math.random();
        return doc.guid;
      }
      function NodeList() {
      }
      NodeList.prototype = {
        /**
         * The number of nodes in the list. The range of valid child node indices is 0 to length-1
         * inclusive.
         *
         * @type {number}
         */
        length: 0,
        /**
         * Returns the item at `index`. If index is greater than or equal to the number of nodes in
         * the list, this returns null.
         *
         * @param index
         * Unsigned long Index into the collection.
         * @returns {Node | null}
         * The node at position `index` in the NodeList,
         * or null if that is not a valid index.
         */
        item: function(index) {
          return index >= 0 && index < this.length ? this[index] : null;
        },
        /**
         * Returns a string representation of the NodeList.
         *
         * Accepts the same `options` object as `XMLSerializer.prototype.serializeToString`
         * (`requireWellFormed`, `splitCDATASections`, `nodeFilter`). Passing a function is treated as
         * a legacy `nodeFilter` for backward compatibility.
         *
         * @param {Object | function} [options]
         * @param {boolean} [options.requireWellFormed=false]
         * @param {boolean} [options.splitCDATASections=true]
         * @param {function} [options.nodeFilter]
         * @returns {string}
         */
        toString: function(options) {
          var opts;
          if (typeof options === "function") {
            opts = { requireWellFormed: false, splitCDATASections: true, nodeFilter: options };
          } else if (!!options) {
            opts = {
              requireWellFormed: !!options.requireWellFormed,
              splitCDATASections: options.splitCDATASections !== false,
              nodeFilter: options.nodeFilter || null
            };
          } else {
            opts = { requireWellFormed: false, splitCDATASections: true, nodeFilter: null };
          }
          for (var buf = [], i = 0; i < this.length; i++) {
            serializeToString(this[i], buf, null, opts);
          }
          return buf.join("");
        },
        /**
         * Filters the NodeList based on a predicate.
         *
         * @param {function(Node): boolean} predicate
         * - A predicate function to filter the NodeList.
         * @returns {Node[]}
         * An array of nodes that satisfy the predicate.
         * @private
         */
        filter: function(predicate) {
          return Array.prototype.filter.call(this, predicate);
        },
        /**
         * Returns the first index at which a given node can be found in the NodeList, or -1 if it is
         * not present.
         *
         * @param {Node} item
         * - The Node item to locate in the NodeList.
         * @returns {number}
         * The first index of the node in the NodeList; -1 if not found.
         * @private
         */
        indexOf: function(item) {
          return Array.prototype.indexOf.call(this, item);
        }
      };
      NodeList.prototype[Symbol.iterator] = function() {
        var me = this;
        var index = 0;
        return {
          next: function() {
            if (index < me.length) {
              return {
                value: me[index++],
                done: false
              };
            } else {
              return {
                done: true
              };
            }
          },
          return: function() {
            return {
              done: true
            };
          }
        };
      };
      function LiveNodeList(node, refresh) {
        this._node = node;
        this._refresh = refresh;
        _updateLiveList(this);
      }
      function _updateLiveList(list) {
        var inc = list._node._inc || list._node.ownerDocument._inc;
        if (list._inc !== inc) {
          var ls = list._refresh(list._node);
          __set__(list, "length", ls.length);
          if (!list.$$length || ls.length < list.$$length) {
            for (var i = ls.length; i in list; i++) {
              if (hasOwn(list, i)) {
                delete list[i];
              }
            }
          }
          copy(ls, list);
          list._inc = inc;
        }
      }
      LiveNodeList.prototype.item = function(i) {
        _updateLiveList(this);
        return this[i] || null;
      };
      _extends(LiveNodeList, NodeList);
      function NamedNodeMap() {
      }
      function _findNodeIndex(list, node) {
        var i = 0;
        while (i < list.length) {
          if (list[i] === node) {
            return i;
          }
          i++;
        }
      }
      function _addNamedNode(el, list, newAttr, oldAttr) {
        if (oldAttr) {
          list[_findNodeIndex(list, oldAttr)] = newAttr;
        } else {
          list[list.length] = newAttr;
          list.length++;
        }
        if (el) {
          newAttr.ownerElement = el;
          var doc = el.ownerDocument;
          if (doc) {
            oldAttr && _onRemoveAttribute(doc, el, oldAttr);
            _onAddAttribute(doc, el, newAttr);
          }
        }
      }
      function _removeNamedNode(el, list, attr) {
        var i = _findNodeIndex(list, attr);
        if (i >= 0) {
          var lastIndex = list.length - 1;
          while (i <= lastIndex) {
            list[i] = list[++i];
          }
          list.length = lastIndex;
          if (el) {
            var doc = el.ownerDocument;
            if (doc) {
              _onRemoveAttribute(doc, el, attr);
            }
            attr.ownerElement = null;
          }
        }
      }
      NamedNodeMap.prototype = {
        length: 0,
        item: NodeList.prototype.item,
        /**
         * Get an attribute by name. Note: Name is in lower case in case of HTML namespace and
         * document.
         *
         * @param {string} localName
         * The local name of the attribute.
         * @returns {Attr | null}
         * The attribute with the given local name, or null if no such attribute exists.
         * @see https://dom.spec.whatwg.org/#concept-element-attributes-get-by-name
         */
        getNamedItem: function(localName) {
          if (this._ownerElement && this._ownerElement._isInHTMLDocumentAndNamespace()) {
            localName = localName.toLowerCase();
          }
          var i = 0;
          while (i < this.length) {
            var attr = this[i];
            if (attr.nodeName === localName) {
              return attr;
            }
            i++;
          }
          return null;
        },
        /**
         * Set an attribute.
         *
         * @param {Attr} attr
         * The attribute to set.
         * @returns {Attr | null}
         * The old attribute with the same local name and namespace URI as the new one, or null if no
         * such attribute exists.
         * @throws {DOMException}
         * With code:
         * - {@link INUSE_ATTRIBUTE_ERR} - If the attribute is already an attribute of another
         * element.
         * @see https://dom.spec.whatwg.org/#concept-element-attributes-set
         */
        setNamedItem: function(attr) {
          var el = attr.ownerElement;
          if (el && el !== this._ownerElement) {
            throw new DOMException(DOMException.INUSE_ATTRIBUTE_ERR);
          }
          var oldAttr = this.getNamedItemNS(attr.namespaceURI, attr.localName);
          if (oldAttr === attr) {
            return attr;
          }
          _addNamedNode(this._ownerElement, this, attr, oldAttr);
          return oldAttr;
        },
        /**
         * Set an attribute, replacing an existing attribute with the same local name and namespace
         * URI if one exists.
         *
         * @param {Attr} attr
         * The attribute to set.
         * @returns {Attr | null}
         * The old attribute with the same local name and namespace URI as the new one, or null if no
         * such attribute exists.
         * @throws {DOMException}
         * Throws a DOMException with the name "InUseAttributeError" if the attribute is already an
         * attribute of another element.
         * @see https://dom.spec.whatwg.org/#concept-element-attributes-set
         */
        setNamedItemNS: function(attr) {
          return this.setNamedItem(attr);
        },
        /**
         * Removes an attribute specified by the local name.
         *
         * @param {string} localName
         * The local name of the attribute to be removed.
         * @returns {Attr}
         * The attribute node that was removed.
         * @throws {DOMException}
         * With code:
         * - {@link DOMException.NOT_FOUND_ERR} if no attribute with the given name is found.
         * @see https://dom.spec.whatwg.org/#dom-namednodemap-removenameditem
         * @see https://dom.spec.whatwg.org/#concept-element-attributes-remove-by-name
         */
        removeNamedItem: function(localName) {
          var attr = this.getNamedItem(localName);
          if (!attr) {
            throw new DOMException(DOMException.NOT_FOUND_ERR, localName);
          }
          _removeNamedNode(this._ownerElement, this, attr);
          return attr;
        },
        /**
         * Removes an attribute specified by the namespace and local name.
         *
         * @param {string | null} namespaceURI
         * The namespace URI of the attribute to be removed.
         * @param {string} localName
         * The local name of the attribute to be removed.
         * @returns {Attr}
         * The attribute node that was removed.
         * @throws {DOMException}
         * With code:
         * - {@link DOMException.NOT_FOUND_ERR} if no attribute with the given namespace URI and local
         * name is found.
         * @see https://dom.spec.whatwg.org/#dom-namednodemap-removenameditemns
         * @see https://dom.spec.whatwg.org/#concept-element-attributes-remove-by-namespace
         */
        removeNamedItemNS: function(namespaceURI, localName) {
          var attr = this.getNamedItemNS(namespaceURI, localName);
          if (!attr) {
            throw new DOMException(DOMException.NOT_FOUND_ERR, namespaceURI ? namespaceURI + " : " + localName : localName);
          }
          _removeNamedNode(this._ownerElement, this, attr);
          return attr;
        },
        /**
         * Get an attribute by namespace and local name.
         *
         * @param {string | null} namespaceURI
         * The namespace URI of the attribute.
         * @param {string} localName
         * The local name of the attribute.
         * @returns {Attr | null}
         * The attribute with the given namespace URI and local name, or null if no such attribute
         * exists.
         * @see https://dom.spec.whatwg.org/#concept-element-attributes-get-by-namespace
         */
        getNamedItemNS: function(namespaceURI, localName) {
          if (!namespaceURI) {
            namespaceURI = null;
          }
          var i = 0;
          while (i < this.length) {
            var node = this[i];
            if (node.localName === localName && node.namespaceURI === namespaceURI) {
              return node;
            }
            i++;
          }
          return null;
        }
      };
      NamedNodeMap.prototype[Symbol.iterator] = function() {
        var me = this;
        var index = 0;
        return {
          next: function() {
            if (index < me.length) {
              return {
                value: me[index++],
                done: false
              };
            } else {
              return {
                done: true
              };
            }
          },
          return: function() {
            return {
              done: true
            };
          }
        };
      };
      function DOMImplementation() {
      }
      DOMImplementation.prototype = {
        /**
         * Test if the DOM implementation implements a specific feature and version, as specified in
         * {@link https://www.w3.org/TR/DOM-Level-3-Core/core.html#DOMFeatures DOM Features}.
         *
         * The DOMImplementation.hasFeature() method returns a Boolean flag indicating if a given
         * feature is supported. The different implementations fairly diverged in what kind of
         * features were reported. The latest version of the spec settled to force this method to
         * always return true, where the functionality was accurate and in use.
         *
         * @deprecated
         * It is deprecated and modern browsers return true in all cases.
         * @function DOMImplementation#hasFeature
         * @param {string} feature
         * The name of the feature to test.
         * @param {string} [version]
         * This is the version number of the feature to test.
         * @returns {boolean}
         * Always returns true.
         * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/hasFeature MDN
         * @see https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-5CED94D7 DOM Level 1 Core
         * @see https://dom.spec.whatwg.org/#dom-domimplementation-hasfeature DOM Living Standard
         * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-5CED94D7 DOM Level 3 Core
         */
        hasFeature: function(feature, version) {
          return true;
        },
        /**
         * Creates a DOM Document object of the specified type with its document element. Note that
         * based on the {@link DocumentType}
         * given to create the document, the implementation may instantiate specialized
         * {@link Document} objects that support additional features than the "Core", such as "HTML"
         * {@link https://www.w3.org/TR/DOM-Level-3-Core/references.html#DOM2HTML DOM Level 2 HTML}.
         * On the other hand, setting the {@link DocumentType} after the document was created makes
         * this very unlikely to happen. Alternatively, specialized {@link Document} creation methods,
         * such as createHTMLDocument
         * {@link https://www.w3.org/TR/DOM-Level-3-Core/references.html#DOM2HTML DOM Level 2 HTML},
         * can be used to obtain specific types of {@link Document} objects.
         *
         * __It behaves slightly different from the description in the living standard__:
         * - There is no interface/class `XMLDocument`, it returns a `Document`
         * instance (with it's `type` set to `'xml'`).
         * - `encoding`, `mode`, `origin`, `url` fields are currently not declared.
         *
         * @function DOMImplementation.createDocument
         * @param {string | null} namespaceURI
         * The
         * {@link https://www.w3.org/TR/DOM-Level-3-Core/glossary.html#dt-namespaceURI namespace URI}
         * of the document element to create or null.
         * @param {string | null} qualifiedName
         * The
         * {@link https://www.w3.org/TR/DOM-Level-3-Core/glossary.html#dt-qualifiedname qualified name}
         * of the document element to be created or null.
         * @param {DocumentType | null} [doctype=null]
         * The type of document to be created or null. When doctype is not null, its
         * {@link Node#ownerDocument} attribute is set to the document being created. Default is
         * `null`
         * @returns {Document}
         * A new {@link Document} object with its document element. If the NamespaceURI,
         * qualifiedName, and doctype are null, the returned {@link Document} is empty with no
         * document element.
         * @throws {DOMException}
         * With code:
         *
         * - `INVALID_CHARACTER_ERR`: Raised if the specified qualified name is not an XML name
         * according to {@link https://www.w3.org/TR/DOM-Level-3-Core/references.html#XML XML 1.0}.
         * - `NAMESPACE_ERR`: Raised if the qualifiedName is malformed, if the qualifiedName has a
         * prefix and the namespaceURI is null, or if the qualifiedName is null and the namespaceURI
         * is different from null, or if the qualifiedName has a prefix that is "xml" and the
         * namespaceURI is different from "{@link http://www.w3.org/XML/1998/namespace}"
         * {@link https://www.w3.org/TR/DOM-Level-3-Core/references.html#Namespaces XML Namespaces},
         * or if the DOM implementation does not support the "XML" feature but a non-null namespace
         * URI was provided, since namespaces were defined by XML.
         * - `WRONG_DOCUMENT_ERR`: Raised if doctype has already been used with a different document
         * or was created from a different implementation.
         * - `NOT_SUPPORTED_ERR`: May be raised if the implementation does not support the feature
         * "XML" and the language exposed through the Document does not support XML Namespaces (such
         * as {@link https://www.w3.org/TR/DOM-Level-3-Core/references.html#HTML40 HTML 4.01}).
         * @since DOM Level 2.
         * @see {@link #createHTMLDocument}
         * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocument MDN
         * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument DOM Living Standard
         * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#Level-2-Core-DOM-createDocument DOM
         *      Level 3 Core
         * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#Level-2-Core-DOM-createDocument DOM
         *      Level 2 Core (initial)
         */
        createDocument: function(namespaceURI, qualifiedName, doctype) {
          var contentType = MIME_TYPE.XML_APPLICATION;
          if (namespaceURI === NAMESPACE.HTML) {
            contentType = MIME_TYPE.XML_XHTML_APPLICATION;
          } else if (namespaceURI === NAMESPACE.SVG) {
            contentType = MIME_TYPE.XML_SVG_IMAGE;
          }
          var doc = new Document(PDC, { contentType });
          doc.implementation = this;
          doc.childNodes = new NodeList();
          doc.doctype = doctype || null;
          if (doctype) {
            doc.appendChild(doctype);
          }
          if (qualifiedName) {
            var root = doc.createElementNS(namespaceURI, qualifiedName);
            doc.appendChild(root);
          }
          return doc;
        },
        /**
         * Creates an empty DocumentType node. Entity declarations and notations are not made
         * available. Entity reference expansions and default attribute additions do not occur.
         *
         * **This behavior is slightly different from the one in the specs**:
         * - `encoding`, `mode`, `origin`, `url` fields are currently not declared.
         * - `publicId` and `systemId` contain the raw data including any possible quotes,
         *   so they can always be serialized back to the original value
         * - `internalSubset` contains the raw string between `[` and `]` if present,
         *   but is not parsed or validated in any form.
         *
         * @function DOMImplementation#createDocumentType
         * @param {string} qualifiedName
         * The {@link https://www.w3.org/TR/DOM-Level-3-Core/glossary.html#dt-qualifiedname qualified
         * name} of the document type to be created.
         * @param {string} [publicId]
         * The external subset public identifier. Stored verbatim including surrounding quotes.
         * When serialized with `requireWellFormed: true`, the serializer throws `InvalidStateError`
         * if the value is non-empty and does not match the XML `PubidLiteral` production
         * (W3C DOM Parsing §3.2.1.3; XML 1.0 production [12]). Creation-time validation is not
         * enforced — deferred to a future breaking release.
         * @param {string} [systemId]
         * The external subset system identifier. Stored verbatim including surrounding quotes.
         * When serialized with `requireWellFormed: true`, the serializer throws `InvalidStateError`
         * if the value is non-empty and does not match the XML `SystemLiteral` production
         * (W3C DOM Parsing §3.2.1.3; XML 1.0 production [11]). Creation-time validation is not
         * enforced — deferred to a future breaking release.
         * @param {string} [internalSubset]
         * The internal subset or an empty string if it is not present. Stored verbatim.
         * When serialized with `requireWellFormed: true`, the serializer throws `InvalidStateError`
         * if the value contains `"]>"`. Creation-time validation is not enforced.
         * @returns {DocumentType}
         * A new {@link DocumentType} node with {@link Node#ownerDocument} set to null.
         * @throws {DOMException}
         * With code:
         *
         * - `INVALID_CHARACTER_ERR`: Raised if the specified qualified name is not an XML name
         * according to {@link https://www.w3.org/TR/DOM-Level-3-Core/references.html#XML XML 1.0}.
         * - `NAMESPACE_ERR`: Raised if the qualifiedName is malformed.
         * - `NOT_SUPPORTED_ERR`: May be raised if the implementation does not support the feature
         * "XML" and the language exposed through the Document does not support XML Namespaces (such
         * as {@link https://www.w3.org/TR/DOM-Level-3-Core/references.html#HTML40 HTML 4.01}).
         * @since DOM Level 2.
         * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocumentType
         *      MDN
         * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocumenttype DOM Living
         *      Standard
         * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#Level-3-Core-DOM-createDocType DOM
         *      Level 3 Core
         * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#Level-2-Core-DOM-createDocType DOM
         *      Level 2 Core
         * @see https://github.com/xmldom/xmldom/blob/master/CHANGELOG.md#050
         * @see https://www.w3.org/TR/DOM-Level-2-Core/#core-ID-Core-DocType-internalSubset
         * @prettierignore
         */
        createDocumentType: function(qualifiedName, publicId, systemId, internalSubset) {
          validateQualifiedName(qualifiedName);
          var node = new DocumentType(PDC);
          node.name = qualifiedName;
          node.nodeName = qualifiedName;
          node.publicId = publicId || "";
          node.systemId = systemId || "";
          node.internalSubset = internalSubset || "";
          node.childNodes = new NodeList();
          return node;
        },
        /**
         * Returns an HTML document, that might already have a basic DOM structure.
         *
         * __It behaves slightly different from the description in the living standard__:
         * - If the first argument is `false` no initial nodes are added (steps 3-7 in the specs are
         * omitted)
         * - `encoding`, `mode`, `origin`, `url` fields are currently not declared.
         *
         * @param {string | false} [title]
         * A string containing the title to give the new HTML document.
         * @returns {Document}
         * The HTML document.
         * @since WHATWG Living Standard.
         * @see {@link #createDocument}
         * @see https://dom.spec.whatwg.org/#dom-domimplementation-createhtmldocument
         * @see https://dom.spec.whatwg.org/#html-document
         */
        createHTMLDocument: function(title) {
          var doc = new Document(PDC, { contentType: MIME_TYPE.HTML });
          doc.implementation = this;
          doc.childNodes = new NodeList();
          if (title !== false) {
            doc.doctype = this.createDocumentType("html");
            doc.doctype.ownerDocument = doc;
            doc.appendChild(doc.doctype);
            var htmlNode = doc.createElement("html");
            doc.appendChild(htmlNode);
            var headNode = doc.createElement("head");
            htmlNode.appendChild(headNode);
            if (typeof title === "string") {
              var titleNode = doc.createElement("title");
              titleNode.appendChild(doc.createTextNode(title));
              headNode.appendChild(titleNode);
            }
            htmlNode.appendChild(doc.createElement("body"));
          }
          return doc;
        }
      };
      function Node(symbol) {
        checkSymbol(symbol);
      }
      Node.prototype = {
        /**
         * The first child of this node.
         *
         * @type {Node | null}
         */
        firstChild: null,
        /**
         * The last child of this node.
         *
         * @type {Node | null}
         */
        lastChild: null,
        /**
         * The previous sibling of this node.
         *
         * @type {Node | null}
         */
        previousSibling: null,
        /**
         * The next sibling of this node.
         *
         * @type {Node | null}
         */
        nextSibling: null,
        /**
         * The parent node of this node.
         *
         * @type {Node | null}
         */
        parentNode: null,
        /**
         * The parent element of this node.
         *
         * @type {Element | null}
         */
        get parentElement() {
          return this.parentNode && this.parentNode.nodeType === this.ELEMENT_NODE ? this.parentNode : null;
        },
        /**
         * The child nodes of this node.
         *
         * @type {NodeList}
         */
        childNodes: null,
        /**
         * The document object associated with this node.
         *
         * @type {Document | null}
         */
        ownerDocument: null,
        /**
         * The value of this node.
         *
         * @type {string | null}
         */
        nodeValue: null,
        /**
         * The namespace URI of this node.
         *
         * @type {string | null}
         */
        namespaceURI: null,
        /**
         * The prefix of the namespace for this node.
         *
         * @type {string | null}
         */
        prefix: null,
        /**
         * The local part of the qualified name of this node.
         *
         * @type {string | null}
         */
        localName: null,
        /**
         * The baseURI is currently always `about:blank`,
         * since that's what happens when you create a document from scratch.
         *
         * @type {'about:blank'}
         */
        baseURI: "about:blank",
        /**
         * Is true if this node is part of a document.
         *
         * @type {boolean}
         */
        get isConnected() {
          var rootNode = this.getRootNode();
          return rootNode && rootNode.nodeType === rootNode.DOCUMENT_NODE;
        },
        /**
         * Checks whether `other` is an inclusive descendant of this node.
         *
         * @param {Node | null | undefined} other
         * The node to check.
         * @returns {boolean}
         * True if `other` is an inclusive descendant of this node; false otherwise.
         * @see https://dom.spec.whatwg.org/#dom-node-contains
         */
        contains: function(other) {
          if (!other) return false;
          var parent = other;
          do {
            if (this === parent) return true;
            parent = parent.parentNode;
          } while (parent);
          return false;
        },
        /**
         * @typedef GetRootNodeOptions
         * @property {boolean} [composed=false]
         */
        /**
         * Searches for the root node of this node.
         *
         * **This behavior is slightly different from the in the specs**:
         * - ignores `options.composed`, since `ShadowRoot`s are unsupported, always returns root.
         *
         * @param {GetRootNodeOptions} [options]
         * @returns {Node}
         * Root node.
         * @see https://dom.spec.whatwg.org/#dom-node-getrootnode
         * @see https://dom.spec.whatwg.org/#concept-shadow-including-root
         */
        getRootNode: function(options) {
          var parent = this;
          do {
            if (!parent.parentNode) {
              return parent;
            }
            parent = parent.parentNode;
          } while (parent);
        },
        /**
         * Checks whether the given node is equal to this node.
         *
         * Two nodes are equal when they have the same type, defining characteristics (for the type),
         * and the same childNodes. The comparison is iterative to avoid stack overflows on
         * deeply-nested trees. Attribute nodes of each Element pair are also pushed onto the stack
         * and compared the same way.
         *
         * @param {Node} [otherNode]
         * @returns {boolean}
         * @see https://dom.spec.whatwg.org/#concept-node-equals
         * @see ../docs/walk-dom.md.
         */
        isEqualNode: function(otherNode) {
          if (!otherNode) return false;
          var stack = [{ node: this, other: otherNode }];
          while (stack.length > 0) {
            var pair = stack.pop();
            var node = pair.node;
            var other = pair.other;
            if (node.nodeType !== other.nodeType) return false;
            switch (node.nodeType) {
              case node.DOCUMENT_TYPE_NODE:
                if (node.name !== other.name) return false;
                if (node.publicId !== other.publicId) return false;
                if (node.systemId !== other.systemId) return false;
                break;
              case node.ELEMENT_NODE:
                if (node.namespaceURI !== other.namespaceURI) return false;
                if (node.prefix !== other.prefix) return false;
                if (node.localName !== other.localName) return false;
                if (node.attributes.length !== other.attributes.length) return false;
                for (var i = 0; i < node.attributes.length; i++) {
                  var attr = node.attributes.item(i);
                  var otherAttr = other.getAttributeNodeNS(attr.namespaceURI, attr.localName);
                  if (!otherAttr) return false;
                  stack.push({ node: attr, other: otherAttr });
                }
                break;
              case node.ATTRIBUTE_NODE:
                if (node.namespaceURI !== other.namespaceURI) return false;
                if (node.localName !== other.localName) return false;
                if (node.value !== other.value) return false;
                break;
              case node.PROCESSING_INSTRUCTION_NODE:
                if (node.target !== other.target || node.data !== other.data) return false;
                break;
              case node.TEXT_NODE:
              case node.CDATA_SECTION_NODE:
              case node.COMMENT_NODE:
                if (node.data !== other.data) return false;
                break;
            }
            if (node.childNodes.length !== other.childNodes.length) return false;
            for (var i = node.childNodes.length - 1; i >= 0; i--) {
              stack.push({ node: node.childNodes[i], other: other.childNodes[i] });
            }
          }
          return true;
        },
        /**
         * Checks whether or not the given node is this node.
         *
         * @param {Node} [otherNode]
         */
        isSameNode: function(otherNode) {
          return this === otherNode;
        },
        /**
         * Inserts a node before a reference node as a child of this node.
         *
         * @param {Node} newChild
         * The new child node to be inserted.
         * @param {Node | null} refChild
         * The reference node before which newChild will be inserted.
         * @returns {Node}
         * The new child node successfully inserted.
         * @throws {DOMException}
         * Throws a DOMException if inserting the node would result in a DOM tree that is not
         * well-formed, or if `child` is provided but is not a child of `parent`.
         * See {@link _insertBefore} for more details.
         * @since Modified in DOM L2
         */
        insertBefore: function(newChild, refChild) {
          return _insertBefore(this, newChild, refChild);
        },
        /**
         * Replaces an old child node with a new child node within this node.
         *
         * @param {Node} newChild
         * The new node that is to replace the old node.
         * If it already exists in the DOM, it is removed from its original position.
         * @param {Node} oldChild
         * The existing child node to be replaced.
         * @returns {Node}
         * Returns the replaced child node.
         * @throws {DOMException}
         * Throws a DOMException if replacing the node would result in a DOM tree that is not
         * well-formed, or if `oldChild` is not a child of `this`.
         * This can also occur if the pre-replacement validity assertion fails.
         * See {@link _insertBefore}, {@link Node.removeChild}, and
         * {@link assertPreReplacementValidityInDocument} for more details.
         * @see https://dom.spec.whatwg.org/#concept-node-replace
         */
        replaceChild: function(newChild, oldChild) {
          _insertBefore(this, newChild, oldChild, assertPreReplacementValidityInDocument);
          if (oldChild) {
            this.removeChild(oldChild);
          }
        },
        /**
         * Removes an existing child node from this node.
         *
         * @param {Node} oldChild
         * The child node to be removed.
         * @returns {Node}
         * Returns the removed child node.
         * @throws {DOMException}
         * Throws a DOMException if `oldChild` is not a child of `this`.
         * See {@link _removeChild} for more details.
         */
        removeChild: function(oldChild) {
          return _removeChild(this, oldChild);
        },
        /**
         * Appends a child node to this node.
         *
         * @param {Node} newChild
         * The child node to be appended to this node.
         * If it already exists in the DOM, it is removed from its original position.
         * @returns {Node}
         * Returns the appended child node.
         * @throws {DOMException}
         * Throws a DOMException if appending the node would result in a DOM tree that is not
         * well-formed, or if `newChild` is not a valid Node.
         * See {@link insertBefore} for more details.
         */
        appendChild: function(newChild) {
          return this.insertBefore(newChild, null);
        },
        /**
         * Determines whether this node has any child nodes.
         *
         * @returns {boolean}
         * Returns true if this node has any child nodes, and false otherwise.
         */
        hasChildNodes: function() {
          return this.firstChild != null;
        },
        /**
         * Creates a copy of the calling node.
         *
         * @param {boolean} deep
         * If true, the contents of the node are recursively copied.
         * If false, only the node itself (and its attributes, if it is an element) are copied.
         * @returns {Node}
         * Returns the newly created copy of the node.
         * @throws {DOMException}
         * May throw a DOMException if operations within {@link Element#setAttributeNode} or
         * {@link Node#appendChild} (which are potentially invoked in this method) do not meet their
         * specific constraints.
         * @see {@link cloneNode}
         */
        cloneNode: function(deep) {
          return cloneNode(this.ownerDocument || this, this, deep);
        },
        /**
         * Puts the specified node and all of its subtree into a "normalized" form. In a normalized
         * subtree, no text nodes in the subtree are empty and there are no adjacent text nodes.
         *
         * Specifically, this method merges any adjacent text nodes (i.e., nodes for which `nodeType`
         * is `TEXT_NODE`) into a single node with the combined data. It also removes any empty text
         * nodes.
         *
         * This method iterativly traverses all child nodes to normalize all descendent nodes within
         * the subtree.
         *
         * @throws {DOMException}
         * May throw a DOMException if operations within removeChild or appendData (which are
         * potentially invoked in this method) do not meet their specific constraints.
         * @since Modified in DOM Level 2
         * @see {@link Node.removeChild}
         * @see {@link CharacterData.appendData}
         * @see ../docs/walk-dom.md.
         */
        normalize: function() {
          walkDOM(this, null, {
            enter: function(node) {
              var child = node.firstChild;
              while (child) {
                var next = child.nextSibling;
                if (next !== null && next.nodeType === TEXT_NODE2 && child.nodeType === TEXT_NODE2) {
                  node.removeChild(next);
                  child.appendData(next.data);
                } else {
                  child = next;
                }
              }
              return true;
            }
          });
        },
        /**
         * Checks whether the DOM implementation implements a specific feature and its version.
         *
         * @deprecated
         * Since `DOMImplementation.hasFeature` is deprecated and always returns true.
         * @param {string} feature
         * The package name of the feature to test. This is the same name that can be passed to the
         * method `hasFeature` on `DOMImplementation`.
         * @param {string} version
         * This is the version number of the package name to test.
         * @returns {boolean}
         * Returns true in all cases in the current implementation.
         * @since Introduced in DOM Level 2
         * @see {@link DOMImplementation.hasFeature}
         */
        isSupported: function(feature, version) {
          return this.ownerDocument.implementation.hasFeature(feature, version);
        },
        /**
         * Look up the prefix associated to the given namespace URI, starting from this node.
         * **The default namespace declarations are ignored by this method.**
         * See Namespace Prefix Lookup for details on the algorithm used by this method.
         *
         * **This behavior is different from the in the specs**:
         * - no node type specific handling
         * - uses the internal attribute _nsMap for resolving namespaces that is updated when changing attributes
         *
         * @param {string | null} namespaceURI
         * The namespace URI for which to find the associated prefix.
         * @returns {string | null}
         * The associated prefix, if found; otherwise, null.
         * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-lookupNamespacePrefix
         * @see https://www.w3.org/TR/DOM-Level-3-Core/namespaces-algorithms.html#lookupNamespacePrefixAlgo
         * @see https://dom.spec.whatwg.org/#dom-node-lookupprefix
         * @see https://github.com/xmldom/xmldom/issues/322
         * @prettierignore
         */
        lookupPrefix: function(namespaceURI) {
          var el = this;
          while (el) {
            var map = el._nsMap;
            if (map) {
              for (var n in map) {
                if (hasOwn(map, n) && map[n] === namespaceURI) {
                  return n;
                }
              }
            }
            el = el.nodeType == ATTRIBUTE_NODE ? el.ownerDocument : el.parentNode;
          }
          return null;
        },
        /**
         * This function is used to look up the namespace URI associated with the given prefix,
         * starting from this node.
         *
         * **This behavior is different from the in the specs**:
         * - no node type specific handling
         * - uses the internal attribute _nsMap for resolving namespaces that is updated when changing attributes
         *
         * @param {string | null} prefix
         * The prefix for which to find the associated namespace URI.
         * @returns {string | null}
         * The associated namespace URI, if found; otherwise, null.
         * @since DOM Level 3
         * @see https://dom.spec.whatwg.org/#dom-node-lookupnamespaceuri
         * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-lookupNamespaceURI
         * @prettierignore
         */
        lookupNamespaceURI: function(prefix) {
          var el = this;
          while (el) {
            var map = el._nsMap;
            if (map) {
              if (hasOwn(map, prefix)) {
                return map[prefix];
              }
            }
            el = el.nodeType == ATTRIBUTE_NODE ? el.ownerDocument : el.parentNode;
          }
          return null;
        },
        /**
         * Determines whether the given namespace URI is the default namespace.
         *
         * The function works by looking up the prefix associated with the given namespace URI. If no
         * prefix is found (i.e., the namespace URI is not registered in the namespace map of this
         * node or any of its ancestors), it returns `true`, implying the namespace URI is considered
         * the default.
         *
         * **This behavior is different from the in the specs**:
         * - no node type specific handling
         * - uses the internal attribute _nsMap for resolving namespaces that is updated when changing attributes
         *
         * @param {string | null} namespaceURI
         * The namespace URI to be checked.
         * @returns {boolean}
         * Returns true if the given namespace URI is the default namespace, false otherwise.
         * @since DOM Level 3
         * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-isDefaultNamespace
         * @see https://dom.spec.whatwg.org/#dom-node-isdefaultnamespace
         * @prettierignore
         */
        isDefaultNamespace: function(namespaceURI) {
          var prefix = this.lookupPrefix(namespaceURI);
          return prefix == null;
        },
        /**
         * Compares the reference node with a node with regard to their position in the document and
         * according to the document order.
         *
         * @param {Node} other
         * The node to compare the reference node to.
         * @returns {number}
         * Returns how the node is positioned relatively to the reference node according to the
         * bitmask. 0 if reference node and given node are the same.
         * @since DOM Level 3
         * @see https://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core.html#Node3-compare
         * @see https://dom.spec.whatwg.org/#dom-node-comparedocumentposition
         */
        compareDocumentPosition: function(other) {
          if (this === other) return 0;
          var node1 = other;
          var node2 = this;
          var attr1 = null;
          var attr2 = null;
          if (node1 instanceof Attr) {
            attr1 = node1;
            node1 = attr1.ownerElement;
          }
          if (node2 instanceof Attr) {
            attr2 = node2;
            node2 = attr2.ownerElement;
            if (attr1 && node1 && node2 === node1) {
              for (var i = 0, attr; attr = node2.attributes[i]; i++) {
                if (attr === attr1)
                  return DocumentPosition.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC + DocumentPosition.DOCUMENT_POSITION_PRECEDING;
                if (attr === attr2)
                  return DocumentPosition.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC + DocumentPosition.DOCUMENT_POSITION_FOLLOWING;
              }
            }
          }
          if (!node1 || !node2 || node2.ownerDocument !== node1.ownerDocument) {
            return DocumentPosition.DOCUMENT_POSITION_DISCONNECTED + DocumentPosition.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC + (docGUID(node2.ownerDocument) > docGUID(node1.ownerDocument) ? DocumentPosition.DOCUMENT_POSITION_FOLLOWING : DocumentPosition.DOCUMENT_POSITION_PRECEDING);
          }
          if (attr2 && node1 === node2) {
            return DocumentPosition.DOCUMENT_POSITION_CONTAINS + DocumentPosition.DOCUMENT_POSITION_PRECEDING;
          }
          if (attr1 && node1 === node2) {
            return DocumentPosition.DOCUMENT_POSITION_CONTAINED_BY + DocumentPosition.DOCUMENT_POSITION_FOLLOWING;
          }
          var chain1 = [];
          var ancestor1 = node1.parentNode;
          while (ancestor1) {
            if (!attr2 && ancestor1 === node2) {
              return DocumentPosition.DOCUMENT_POSITION_CONTAINED_BY + DocumentPosition.DOCUMENT_POSITION_FOLLOWING;
            }
            chain1.push(ancestor1);
            ancestor1 = ancestor1.parentNode;
          }
          chain1.reverse();
          var chain2 = [];
          var ancestor2 = node2.parentNode;
          while (ancestor2) {
            if (!attr1 && ancestor2 === node1) {
              return DocumentPosition.DOCUMENT_POSITION_CONTAINS + DocumentPosition.DOCUMENT_POSITION_PRECEDING;
            }
            chain2.push(ancestor2);
            ancestor2 = ancestor2.parentNode;
          }
          chain2.reverse();
          var ca = commonAncestor(chain1, chain2);
          for (var n in ca.childNodes) {
            var child = ca.childNodes[n];
            if (child === node2) return DocumentPosition.DOCUMENT_POSITION_FOLLOWING;
            if (child === node1) return DocumentPosition.DOCUMENT_POSITION_PRECEDING;
            if (chain2.indexOf(child) >= 0) return DocumentPosition.DOCUMENT_POSITION_FOLLOWING;
            if (chain1.indexOf(child) >= 0) return DocumentPosition.DOCUMENT_POSITION_PRECEDING;
          }
          return 0;
        }
      };
      function _xmlEncoder(c) {
        return c == "<" && "&lt;" || c == ">" && "&gt;" || c == "&" && "&amp;" || c == '"' && "&quot;" || "&#" + c.charCodeAt() + ";";
      }
      copy(NodeType, Node);
      copy(NodeType, Node.prototype);
      copy(DocumentPosition, Node);
      copy(DocumentPosition, Node.prototype);
      function _visitNode(node, callback) {
        walkDOM(node, null, {
          enter: function(n) {
            return callback(n) ? walkDOM.STOP : true;
          }
        });
      }
      function walkDOM(node, context, callbacks) {
        var stack = [{ node, context, phase: walkDOM.ENTER }];
        while (stack.length > 0) {
          var frame = stack.pop();
          if (frame.phase === walkDOM.ENTER) {
            var childContext = callbacks.enter(frame.node, frame.context);
            if (childContext === walkDOM.STOP) {
              return walkDOM.STOP;
            }
            stack.push({ node: frame.node, context: childContext, phase: walkDOM.EXIT });
            if (childContext === null || childContext === void 0) {
              continue;
            }
            var child = frame.node.lastChild;
            while (child) {
              stack.push({ node: child, context: childContext, phase: walkDOM.ENTER });
              child = child.previousSibling;
            }
          } else {
            if (callbacks.exit) {
              callbacks.exit(frame.node, frame.context);
            }
          }
        }
      }
      walkDOM.STOP = /* @__PURE__ */ Symbol("walkDOM.STOP");
      walkDOM.ENTER = 0;
      walkDOM.EXIT = 1;
      function Document(symbol, options) {
        checkSymbol(symbol);
        var opt = options || {};
        this.ownerDocument = this;
        this.contentType = opt.contentType || MIME_TYPE.XML_APPLICATION;
        this.type = isHTMLMimeType(this.contentType) ? "html" : "xml";
      }
      function _onAddAttribute(doc, el, newAttr) {
        doc && doc._inc++;
        var ns = newAttr.namespaceURI;
        if (ns === NAMESPACE.XMLNS) {
          el._nsMap[newAttr.prefix ? newAttr.localName : ""] = newAttr.value;
        }
      }
      function _onRemoveAttribute(doc, el, newAttr, remove) {
        doc && doc._inc++;
        var ns = newAttr.namespaceURI;
        if (ns === NAMESPACE.XMLNS) {
          delete el._nsMap[newAttr.prefix ? newAttr.localName : ""];
        }
      }
      function _onUpdateChild(doc, parent, newChild) {
        if (doc && doc._inc) {
          doc._inc++;
          var childNodes = parent.childNodes;
          if (newChild && !newChild.nextSibling) {
            childNodes[childNodes.length++] = newChild;
          } else {
            var child = parent.firstChild;
            var i = 0;
            while (child) {
              childNodes[i++] = child;
              child = child.nextSibling;
            }
            childNodes.length = i;
            delete childNodes[childNodes.length];
          }
        }
      }
      function _removeChild(parentNode, child) {
        if (parentNode !== child.parentNode) {
          throw new DOMException(DOMException.NOT_FOUND_ERR, "child's parent is not parent");
        }
        var oldPreviousSibling = child.previousSibling;
        var oldNextSibling = child.nextSibling;
        if (oldPreviousSibling) {
          oldPreviousSibling.nextSibling = oldNextSibling;
        } else {
          parentNode.firstChild = oldNextSibling;
        }
        if (oldNextSibling) {
          oldNextSibling.previousSibling = oldPreviousSibling;
        } else {
          parentNode.lastChild = oldPreviousSibling;
        }
        _onUpdateChild(parentNode.ownerDocument, parentNode);
        child.parentNode = null;
        child.previousSibling = null;
        child.nextSibling = null;
        return child;
      }
      function hasValidParentNodeType(node) {
        return node && (node.nodeType === Node.DOCUMENT_NODE || node.nodeType === Node.DOCUMENT_FRAGMENT_NODE || node.nodeType === Node.ELEMENT_NODE);
      }
      function hasInsertableNodeType(node) {
        return node && (node.nodeType === Node.CDATA_SECTION_NODE || node.nodeType === Node.COMMENT_NODE || node.nodeType === Node.DOCUMENT_FRAGMENT_NODE || node.nodeType === Node.DOCUMENT_TYPE_NODE || node.nodeType === Node.ELEMENT_NODE || node.nodeType === Node.PROCESSING_INSTRUCTION_NODE || node.nodeType === Node.TEXT_NODE);
      }
      function isDocTypeNode(node) {
        return node && node.nodeType === Node.DOCUMENT_TYPE_NODE;
      }
      function isElementNode(node) {
        return node && node.nodeType === Node.ELEMENT_NODE;
      }
      function isTextNode(node) {
        return node && node.nodeType === Node.TEXT_NODE;
      }
      function isElementInsertionPossible(doc, child) {
        var parentChildNodes = doc.childNodes || [];
        if (find(parentChildNodes, isElementNode) || isDocTypeNode(child)) {
          return false;
        }
        var docTypeNode = find(parentChildNodes, isDocTypeNode);
        return !(child && docTypeNode && parentChildNodes.indexOf(docTypeNode) > parentChildNodes.indexOf(child));
      }
      function isElementReplacementPossible(doc, child) {
        var parentChildNodes = doc.childNodes || [];
        function hasElementChildThatIsNotChild(node) {
          return isElementNode(node) && node !== child;
        }
        if (find(parentChildNodes, hasElementChildThatIsNotChild)) {
          return false;
        }
        var docTypeNode = find(parentChildNodes, isDocTypeNode);
        return !(child && docTypeNode && parentChildNodes.indexOf(docTypeNode) > parentChildNodes.indexOf(child));
      }
      function assertPreInsertionValidity1to5(parent, node, child) {
        if (!hasValidParentNodeType(parent)) {
          throw new DOMException(DOMException.HIERARCHY_REQUEST_ERR, "Unexpected parent node type " + parent.nodeType);
        }
        if (child && child.parentNode !== parent) {
          throw new DOMException(DOMException.NOT_FOUND_ERR, "child not in parent");
        }
        if (
          // 4. If `node` is not a DocumentFragment, DocumentType, Element, or CharacterData node, then throw a "HierarchyRequestError" DOMException.
          !hasInsertableNodeType(node) || // 5. If either `node` is a Text node and `parent` is a document,
          // the sax parser currently adds top level text nodes, this will be fixed in 0.9.0
          // || (node.nodeType === Node.TEXT_NODE && parent.nodeType === Node.DOCUMENT_NODE)
          // or `node` is a doctype and `parent` is not a document, then throw a "HierarchyRequestError" DOMException.
          isDocTypeNode(node) && parent.nodeType !== Node.DOCUMENT_NODE
        ) {
          throw new DOMException(
            DOMException.HIERARCHY_REQUEST_ERR,
            "Unexpected node type " + node.nodeType + " for parent node type " + parent.nodeType
          );
        }
      }
      function assertPreInsertionValidityInDocument(parent, node, child) {
        var parentChildNodes = parent.childNodes || [];
        var nodeChildNodes = node.childNodes || [];
        if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
          var nodeChildElements = nodeChildNodes.filter(isElementNode);
          if (nodeChildElements.length > 1 || find(nodeChildNodes, isTextNode)) {
            throw new DOMException(DOMException.HIERARCHY_REQUEST_ERR, "More than one element or text in fragment");
          }
          if (nodeChildElements.length === 1 && !isElementInsertionPossible(parent, child)) {
            throw new DOMException(DOMException.HIERARCHY_REQUEST_ERR, "Element in fragment can not be inserted before doctype");
          }
        }
        if (isElementNode(node)) {
          if (!isElementInsertionPossible(parent, child)) {
            throw new DOMException(DOMException.HIERARCHY_REQUEST_ERR, "Only one element can be added and only after doctype");
          }
        }
        if (isDocTypeNode(node)) {
          if (find(parentChildNodes, isDocTypeNode)) {
            throw new DOMException(DOMException.HIERARCHY_REQUEST_ERR, "Only one doctype is allowed");
          }
          var parentElementChild = find(parentChildNodes, isElementNode);
          if (child && parentChildNodes.indexOf(parentElementChild) < parentChildNodes.indexOf(child)) {
            throw new DOMException(DOMException.HIERARCHY_REQUEST_ERR, "Doctype can only be inserted before an element");
          }
          if (!child && parentElementChild) {
            throw new DOMException(DOMException.HIERARCHY_REQUEST_ERR, "Doctype can not be appended since element is present");
          }
        }
      }
      function assertPreReplacementValidityInDocument(parent, node, child) {
        var parentChildNodes = parent.childNodes || [];
        var nodeChildNodes = node.childNodes || [];
        if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
          var nodeChildElements = nodeChildNodes.filter(isElementNode);
          if (nodeChildElements.length > 1 || find(nodeChildNodes, isTextNode)) {
            throw new DOMException(DOMException.HIERARCHY_REQUEST_ERR, "More than one element or text in fragment");
          }
          if (nodeChildElements.length === 1 && !isElementReplacementPossible(parent, child)) {
            throw new DOMException(DOMException.HIERARCHY_REQUEST_ERR, "Element in fragment can not be inserted before doctype");
          }
        }
        if (isElementNode(node)) {
          if (!isElementReplacementPossible(parent, child)) {
            throw new DOMException(DOMException.HIERARCHY_REQUEST_ERR, "Only one element can be added and only after doctype");
          }
        }
        if (isDocTypeNode(node)) {
          let hasDoctypeChildThatIsNotChild = function(node2) {
            return isDocTypeNode(node2) && node2 !== child;
          };
          if (find(parentChildNodes, hasDoctypeChildThatIsNotChild)) {
            throw new DOMException(DOMException.HIERARCHY_REQUEST_ERR, "Only one doctype is allowed");
          }
          var parentElementChild = find(parentChildNodes, isElementNode);
          if (child && parentChildNodes.indexOf(parentElementChild) < parentChildNodes.indexOf(child)) {
            throw new DOMException(DOMException.HIERARCHY_REQUEST_ERR, "Doctype can only be inserted before an element");
          }
        }
      }
      function _insertBefore(parent, node, child, _inDocumentAssertion) {
        assertPreInsertionValidity1to5(parent, node, child);
        if (parent.nodeType === Node.DOCUMENT_NODE) {
          (_inDocumentAssertion || assertPreInsertionValidityInDocument)(parent, node, child);
        }
        var cp = node.parentNode;
        if (cp) {
          cp.removeChild(node);
        }
        if (node.nodeType === DOCUMENT_FRAGMENT_NODE) {
          var newFirst = node.firstChild;
          if (newFirst == null) {
            return node;
          }
          var newLast = node.lastChild;
        } else {
          newFirst = newLast = node;
        }
        var pre = child ? child.previousSibling : parent.lastChild;
        newFirst.previousSibling = pre;
        newLast.nextSibling = child;
        if (pre) {
          pre.nextSibling = newFirst;
        } else {
          parent.firstChild = newFirst;
        }
        if (child == null) {
          parent.lastChild = newLast;
        } else {
          child.previousSibling = newLast;
        }
        do {
          newFirst.parentNode = parent;
        } while (newFirst !== newLast && (newFirst = newFirst.nextSibling));
        _onUpdateChild(parent.ownerDocument || parent, parent, node);
        if (node.nodeType == DOCUMENT_FRAGMENT_NODE) {
          node.firstChild = node.lastChild = null;
        }
        return node;
      }
      Document.prototype = {
        /**
         * The implementation that created this document.
         *
         * @type DOMImplementation
         * @readonly
         */
        implementation: null,
        nodeName: "#document",
        nodeType: DOCUMENT_NODE,
        /**
         * The DocumentType node of the document.
         *
         * @type DocumentType
         * @readonly
         */
        doctype: null,
        documentElement: null,
        _inc: 1,
        insertBefore: function(newChild, refChild) {
          if (newChild.nodeType === DOCUMENT_FRAGMENT_NODE) {
            var child = newChild.firstChild;
            while (child) {
              var next = child.nextSibling;
              this.insertBefore(child, refChild);
              child = next;
            }
            return newChild;
          }
          _insertBefore(this, newChild, refChild);
          newChild.ownerDocument = this;
          if (this.documentElement === null && newChild.nodeType === ELEMENT_NODE) {
            this.documentElement = newChild;
          }
          return newChild;
        },
        removeChild: function(oldChild) {
          var removed = _removeChild(this, oldChild);
          if (removed === this.documentElement) {
            this.documentElement = null;
          }
          return removed;
        },
        replaceChild: function(newChild, oldChild) {
          _insertBefore(this, newChild, oldChild, assertPreReplacementValidityInDocument);
          newChild.ownerDocument = this;
          if (oldChild) {
            this.removeChild(oldChild);
          }
          if (isElementNode(newChild)) {
            this.documentElement = newChild;
          }
        },
        /**
         * Imports a node from another document into this document, creating a new copy owned by this
         * document. The source node and its subtree are not modified.
         *
         * @param {Node} importedNode
         * The node to import.
         * @param {boolean} deep
         * If true, the contents of the node are recursively imported.
         * If false, only the node itself (and its attributes, if it is an element) are imported.
         * @returns {Node}
         * Returns the newly created import of the node.
         * @see {@link importNode}
         * @see {@link https://dom.spec.whatwg.org/#dom-document-importnode}
         */
        importNode: function(importedNode, deep) {
          return importNode(this, importedNode, deep);
        },
        // Introduced in DOM Level 2:
        getElementById: function(id) {
          var rtv = null;
          _visitNode(this.documentElement, function(node) {
            if (node.nodeType == ELEMENT_NODE) {
              if (node.getAttribute("id") == id) {
                rtv = node;
                return true;
              }
            }
          });
          return rtv;
        },
        /**
         * Creates a new `Element` that is owned by this `Document`.
         * In HTML Documents `localName` is the lower cased `tagName`,
         * otherwise no transformation is being applied.
         * When `contentType` implies the HTML namespace, it will be set as `namespaceURI`.
         *
         * __This implementation differs from the specification:__ - The provided name is not checked
         * against the `Name` production,
         * so no related error will be thrown.
         * - There is no interface `HTMLElement`, it is always an `Element`.
         * - There is no support for a second argument to indicate using custom elements.
         *
         * @param {string} tagName
         * @returns {Element}
         * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
         * @see https://dom.spec.whatwg.org/#dom-document-createelement
         * @see https://dom.spec.whatwg.org/#concept-create-element
         */
        createElement: function(tagName) {
          var node = new Element(PDC);
          node.ownerDocument = this;
          if (this.type === "html") {
            tagName = tagName.toLowerCase();
          }
          if (hasDefaultHTMLNamespace(this.contentType)) {
            node.namespaceURI = NAMESPACE.HTML;
          }
          node.nodeName = tagName;
          node.tagName = tagName;
          node.localName = tagName;
          node.childNodes = new NodeList();
          var attrs = node.attributes = new NamedNodeMap();
          attrs._ownerElement = node;
          return node;
        },
        /**
         * @returns {DocumentFragment}
         */
        createDocumentFragment: function() {
          var node = new DocumentFragment(PDC);
          node.ownerDocument = this;
          node.childNodes = new NodeList();
          return node;
        },
        /**
         * @param {string} data
         * @returns {Text}
         */
        createTextNode: function(data) {
          var node = new Text(PDC);
          node.ownerDocument = this;
          node.childNodes = new NodeList();
          node.appendData(data);
          return node;
        },
        /**
         * @param {string} data
         * @returns {Comment}
         * @see https://dom.spec.whatwg.org/#dom-document-createcomment
         * @see https://www.w3.org/TR/xml/#NT-Comment XML 1.0 production [15]
         * @see https://www.w3.org/TR/DOM-Parsing/#dfn-concept-serialize-xml §3.2.1.3
         *
         *      Note: no validation is performed at creation time. When the resulting document is
         *      serialized with `requireWellFormed: true`, the serializer throws `InvalidStateError`
         *      if the comment data contains `--` anywhere, ends with `-`, or contains characters
         *      outside the XML Char production (W3C DOM Parsing §3.2.1.3). Without that option the
         *      data is emitted verbatim.
         */
        createComment: function(data) {
          var node = new Comment(PDC);
          node.ownerDocument = this;
          node.childNodes = new NodeList();
          node.appendData(data);
          return node;
        },
        /**
         * Returns a new CDATASection node whose data is `data`.
         *
         * __This implementation differs from the specification:__ - calling this method on an HTML
         * document does not throw `NotSupportedError`.
         *
         * @param {string} data
         * @returns {CDATASection}
         * @throws {DOMException}
         * With code `INVALID_CHARACTER_ERR` if `data` contains `"]]>"`.
         * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/createCDATASection
         * @see https://dom.spec.whatwg.org/#dom-document-createcdatasection
         */
        createCDATASection: function(data) {
          if (data.indexOf("]]>") !== -1) {
            throw new DOMException(DOMException.INVALID_CHARACTER_ERR, 'data contains "]]>"');
          }
          var node = new CDATASection(PDC);
          node.ownerDocument = this;
          node.childNodes = new NodeList();
          node.appendData(data);
          return node;
        },
        /**
         * Returns a ProcessingInstruction node whose target is target and data is data.
         *
         * __This behavior is slightly different from the in the specs__:
         * - it does not do any input validation on the arguments and doesn't throw
         * "InvalidCharacterError".
         *
         * Note: When the resulting document is serialized with `requireWellFormed: true`, the
         * serializer throws `InvalidStateError` if `.target` contains `:` or is an ASCII
         * case-insensitive match for `"xml"`, or if `.data` contains `?>` or characters outside the
         * XML Char production (W3C DOM Parsing §3.2.1.7). Without that option the data is emitted
         * verbatim.
         *
         * @param {string} target
         * @param {string} data
         * @returns {ProcessingInstruction}
         * @see https://developer.mozilla.org/docs/Web/API/Document/createProcessingInstruction
         * @see https://dom.spec.whatwg.org/#dom-document-createprocessinginstruction
         * @see https://www.w3.org/TR/DOM-Parsing/#dfn-concept-serialize-xml §3.2.1.7
         */
        createProcessingInstruction: function(target, data) {
          var node = new ProcessingInstruction(PDC);
          node.ownerDocument = this;
          node.childNodes = new NodeList();
          node.nodeName = node.target = target;
          node.nodeValue = node.data = data;
          return node;
        },
        /**
         * Creates an `Attr` node that is owned by this document.
         * In HTML Documents `localName` is the lower cased `name`,
         * otherwise no transformation is being applied.
         *
         * __This implementation differs from the specification:__ - The provided name is not checked
         * against the `Name` production,
         * so no related error will be thrown.
         *
         * @param {string} name
         * @returns {Attr}
         * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/createAttribute
         * @see https://dom.spec.whatwg.org/#dom-document-createattribute
         */
        createAttribute: function(name) {
          if (!g.QName_exact.test(name)) {
            throw new DOMException(DOMException.INVALID_CHARACTER_ERR, 'invalid character in name "' + name + '"');
          }
          if (this.type === "html") {
            name = name.toLowerCase();
          }
          return this._createAttribute(name);
        },
        _createAttribute: function(name) {
          var node = new Attr(PDC);
          node.ownerDocument = this;
          node.childNodes = new NodeList();
          node.name = name;
          node.nodeName = name;
          node.localName = name;
          node.specified = true;
          return node;
        },
        /**
         * Creates an EntityReference object.
         * The current implementation does not fill the `childNodes` with those of the corresponding
         * `Entity`
         *
         * @deprecated
         * In DOM Level 4.
         * @param {string} name
         * The name of the entity to reference. No namespace well-formedness checks are performed.
         * @returns {EntityReference}
         * @throws {DOMException}
         * With code `INVALID_CHARACTER_ERR` when `name` is not valid.
         * @throws {DOMException}
         * with code `NOT_SUPPORTED_ERR` when the document is of type `html`
         * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-392B75AE
         */
        createEntityReference: function(name) {
          if (!g.Name.test(name)) {
            throw new DOMException(DOMException.INVALID_CHARACTER_ERR, 'not a valid xml name "' + name + '"');
          }
          if (this.type === "html") {
            throw new DOMException("document is an html document", DOMExceptionName.NotSupportedError);
          }
          var node = new EntityReference(PDC);
          node.ownerDocument = this;
          node.childNodes = new NodeList();
          node.nodeName = name;
          return node;
        },
        // Introduced in DOM Level 2:
        /**
         * @param {string} namespaceURI
         * @param {string} qualifiedName
         * @returns {Element}
         */
        createElementNS: function(namespaceURI, qualifiedName) {
          var validated = validateAndExtract(namespaceURI, qualifiedName);
          var node = new Element(PDC);
          var attrs = node.attributes = new NamedNodeMap();
          node.childNodes = new NodeList();
          node.ownerDocument = this;
          node.nodeName = qualifiedName;
          node.tagName = qualifiedName;
          node.namespaceURI = validated[0];
          node.prefix = validated[1];
          node.localName = validated[2];
          attrs._ownerElement = node;
          return node;
        },
        // Introduced in DOM Level 2:
        /**
         * @param {string} namespaceURI
         * @param {string} qualifiedName
         * @returns {Attr}
         */
        createAttributeNS: function(namespaceURI, qualifiedName) {
          var validated = validateAndExtract(namespaceURI, qualifiedName);
          var node = new Attr(PDC);
          node.ownerDocument = this;
          node.childNodes = new NodeList();
          node.nodeName = qualifiedName;
          node.name = qualifiedName;
          node.specified = true;
          node.namespaceURI = validated[0];
          node.prefix = validated[1];
          node.localName = validated[2];
          return node;
        }
      };
      _extends(Document, Node);
      function Element(symbol) {
        checkSymbol(symbol);
        this._nsMap = /* @__PURE__ */ Object.create(null);
      }
      Element.prototype = {
        nodeType: ELEMENT_NODE,
        /**
         * The attributes of this element.
         *
         * @type {NamedNodeMap | null}
         */
        attributes: null,
        getQualifiedName: function() {
          return this.prefix ? this.prefix + ":" + this.localName : this.localName;
        },
        _isInHTMLDocumentAndNamespace: function() {
          return this.ownerDocument.type === "html" && this.namespaceURI === NAMESPACE.HTML;
        },
        /**
         * Implementaton of Level2 Core function hasAttributes.
         *
         * @returns {boolean}
         * True if attribute list is not empty.
         * @see https://www.w3.org/TR/DOM-Level-2-Core/#core-ID-NodeHasAttrs
         */
        hasAttributes: function() {
          return !!(this.attributes && this.attributes.length);
        },
        hasAttribute: function(name) {
          return !!this.getAttributeNode(name);
        },
        /**
         * Returns element’s first attribute whose qualified name is `name`, and `null`
         * if there is no such attribute.
         *
         * @param {string} name
         * @returns {string | null}
         */
        getAttribute: function(name) {
          var attr = this.getAttributeNode(name);
          return attr ? attr.value : null;
        },
        getAttributeNode: function(name) {
          if (this._isInHTMLDocumentAndNamespace()) {
            name = name.toLowerCase();
          }
          return this.attributes.getNamedItem(name);
        },
        /**
         * Sets the value of element’s first attribute whose qualified name is qualifiedName to value.
         *
         * @param {string} name
         * @param {string} value
         */
        setAttribute: function(name, value) {
          if (this._isInHTMLDocumentAndNamespace()) {
            name = name.toLowerCase();
          }
          var attr = this.getAttributeNode(name);
          if (attr) {
            attr.value = attr.nodeValue = "" + value;
          } else {
            attr = this.ownerDocument._createAttribute(name);
            attr.value = attr.nodeValue = "" + value;
            this.setAttributeNode(attr);
          }
        },
        removeAttribute: function(name) {
          var attr = this.getAttributeNode(name);
          attr && this.removeAttributeNode(attr);
        },
        setAttributeNode: function(newAttr) {
          return this.attributes.setNamedItem(newAttr);
        },
        setAttributeNodeNS: function(newAttr) {
          return this.attributes.setNamedItemNS(newAttr);
        },
        removeAttributeNode: function(oldAttr) {
          return this.attributes.removeNamedItem(oldAttr.nodeName);
        },
        //get real attribute name,and remove it by removeAttributeNode
        removeAttributeNS: function(namespaceURI, localName) {
          var old = this.getAttributeNodeNS(namespaceURI, localName);
          old && this.removeAttributeNode(old);
        },
        hasAttributeNS: function(namespaceURI, localName) {
          return this.getAttributeNodeNS(namespaceURI, localName) != null;
        },
        /**
         * Returns element’s attribute whose namespace is `namespaceURI` and local name is
         * `localName`,
         * or `null` if there is no such attribute.
         *
         * @param {string} namespaceURI
         * @param {string} localName
         * @returns {string | null}
         */
        getAttributeNS: function(namespaceURI, localName) {
          var attr = this.getAttributeNodeNS(namespaceURI, localName);
          return attr ? attr.value : null;
        },
        /**
         * Sets the value of element’s attribute whose namespace is `namespaceURI` and local name is
         * `localName` to value.
         *
         * @param {string} namespaceURI
         * @param {string} qualifiedName
         * @param {string} value
         * @see https://dom.spec.whatwg.org/#dom-element-setattributens
         */
        setAttributeNS: function(namespaceURI, qualifiedName, value) {
          var validated = validateAndExtract(namespaceURI, qualifiedName);
          var localName = validated[2];
          var attr = this.getAttributeNodeNS(namespaceURI, localName);
          if (attr) {
            attr.value = attr.nodeValue = "" + value;
          } else {
            attr = this.ownerDocument.createAttributeNS(namespaceURI, qualifiedName);
            attr.value = attr.nodeValue = "" + value;
            this.setAttributeNode(attr);
          }
        },
        getAttributeNodeNS: function(namespaceURI, localName) {
          return this.attributes.getNamedItemNS(namespaceURI, localName);
        },
        /**
         * Returns a LiveNodeList of all child elements which have **all** of the given class name(s).
         *
         * Returns an empty list if `classNames` is an empty string or only contains HTML white space
         * characters.
         *
         * Warning: This returns a live LiveNodeList.
         * Changes in the DOM will reflect in the array as the changes occur.
         * If an element selected by this array no longer qualifies for the selector,
         * it will automatically be removed. Be aware of this for iteration purposes.
         *
         * @param {string} classNames
         * Is a string representing the class name(s) to match; multiple class names are separated by
         * (ASCII-)whitespace.
         * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByClassName
         * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
         * @see https://dom.spec.whatwg.org/#concept-getelementsbyclassname
         */
        getElementsByClassName: function(classNames) {
          var classNamesSet = toOrderedSet(classNames);
          return new LiveNodeList(this, function(base) {
            var ls = [];
            if (classNamesSet.length > 0) {
              _visitNode(base, function(node) {
                if (node !== base && node.nodeType === ELEMENT_NODE) {
                  var nodeClassNames = node.getAttribute("class");
                  if (nodeClassNames) {
                    var matches = classNames === nodeClassNames;
                    if (!matches) {
                      var nodeClassNamesSet = toOrderedSet(nodeClassNames);
                      matches = classNamesSet.every(arrayIncludes(nodeClassNamesSet));
                    }
                    if (matches) {
                      ls.push(node);
                    }
                  }
                }
              });
            }
            return ls;
          });
        },
        /**
         * Returns a LiveNodeList of elements with the given qualifiedName.
         * Searching for all descendants can be done by passing `*` as `qualifiedName`.
         *
         * All descendants of the specified element are searched, but not the element itself.
         * The returned list is live, which means it updates itself with the DOM tree automatically.
         * Therefore, there is no need to call `Element.getElementsByTagName()`
         * with the same element and arguments repeatedly if the DOM changes in between calls.
         *
         * When called on an HTML element in an HTML document,
         * `getElementsByTagName` lower-cases the argument before searching for it.
         * This is undesirable when trying to match camel-cased SVG elements (such as
         * `<linearGradient>`) in an HTML document.
         * Instead, use `Element.getElementsByTagNameNS()`,
         * which preserves the capitalization of the tag name.
         *
         * `Element.getElementsByTagName` is similar to `Document.getElementsByTagName()`,
         * except that it only searches for elements that are descendants of the specified element.
         *
         * @param {string} qualifiedName
         * @returns {LiveNodeList}
         * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName
         * @see https://dom.spec.whatwg.org/#concept-getelementsbytagname
         */
        getElementsByTagName: function(qualifiedName) {
          var isHTMLDocument = (this.nodeType === DOCUMENT_NODE ? this : this.ownerDocument).type === "html";
          var lowerQualifiedName = qualifiedName.toLowerCase();
          return new LiveNodeList(this, function(base) {
            var ls = [];
            _visitNode(base, function(node) {
              if (node === base || node.nodeType !== ELEMENT_NODE) {
                return;
              }
              if (qualifiedName === "*") {
                ls.push(node);
              } else {
                var nodeQualifiedName = node.getQualifiedName();
                var matchingQName = isHTMLDocument && node.namespaceURI === NAMESPACE.HTML ? lowerQualifiedName : qualifiedName;
                if (nodeQualifiedName === matchingQName) {
                  ls.push(node);
                }
              }
            });
            return ls;
          });
        },
        getElementsByTagNameNS: function(namespaceURI, localName) {
          return new LiveNodeList(this, function(base) {
            var ls = [];
            _visitNode(base, function(node) {
              if (node !== base && node.nodeType === ELEMENT_NODE && (namespaceURI === "*" || node.namespaceURI === namespaceURI) && (localName === "*" || node.localName == localName)) {
                ls.push(node);
              }
            });
            return ls;
          });
        }
      };
      Document.prototype.getElementsByClassName = Element.prototype.getElementsByClassName;
      Document.prototype.getElementsByTagName = Element.prototype.getElementsByTagName;
      Document.prototype.getElementsByTagNameNS = Element.prototype.getElementsByTagNameNS;
      _extends(Element, Node);
      function Attr(symbol) {
        checkSymbol(symbol);
        this.namespaceURI = null;
        this.prefix = null;
        this.ownerElement = null;
      }
      Attr.prototype.nodeType = ATTRIBUTE_NODE;
      _extends(Attr, Node);
      function CharacterData(symbol) {
        checkSymbol(symbol);
      }
      CharacterData.prototype = {
        data: "",
        substringData: function(offset, count) {
          return this.data.substring(offset, offset + count);
        },
        appendData: function(text) {
          text = this.data + text;
          this.nodeValue = this.data = text;
          this.length = text.length;
        },
        insertData: function(offset, text) {
          this.replaceData(offset, 0, text);
        },
        deleteData: function(offset, count) {
          this.replaceData(offset, count, "");
        },
        replaceData: function(offset, count, text) {
          var start = this.data.substring(0, offset);
          var end = this.data.substring(offset + count);
          text = start + text + end;
          this.nodeValue = this.data = text;
          this.length = text.length;
        }
      };
      _extends(CharacterData, Node);
      function Text(symbol) {
        checkSymbol(symbol);
      }
      Text.prototype = {
        nodeName: "#text",
        nodeType: TEXT_NODE2,
        splitText: function(offset) {
          var text = this.data;
          var newText = text.substring(offset);
          text = text.substring(0, offset);
          this.data = this.nodeValue = text;
          this.length = text.length;
          var newNode = this.ownerDocument.createTextNode(newText);
          if (this.parentNode) {
            this.parentNode.insertBefore(newNode, this.nextSibling);
          }
          return newNode;
        }
      };
      _extends(Text, CharacterData);
      function Comment(symbol) {
        checkSymbol(symbol);
      }
      Comment.prototype = {
        nodeName: "#comment",
        nodeType: COMMENT_NODE2
      };
      _extends(Comment, CharacterData);
      function CDATASection(symbol) {
        checkSymbol(symbol);
      }
      CDATASection.prototype = {
        nodeName: "#cdata-section",
        nodeType: CDATA_SECTION_NODE
      };
      _extends(CDATASection, Text);
      function DocumentType(symbol) {
        checkSymbol(symbol);
      }
      DocumentType.prototype.nodeType = DOCUMENT_TYPE_NODE;
      _extends(DocumentType, Node);
      function Notation(symbol) {
        checkSymbol(symbol);
      }
      Notation.prototype.nodeType = NOTATION_NODE;
      _extends(Notation, Node);
      function Entity(symbol) {
        checkSymbol(symbol);
      }
      Entity.prototype.nodeType = ENTITY_NODE;
      _extends(Entity, Node);
      function EntityReference(symbol) {
        checkSymbol(symbol);
      }
      EntityReference.prototype.nodeType = ENTITY_REFERENCE_NODE;
      _extends(EntityReference, Node);
      function DocumentFragment(symbol) {
        checkSymbol(symbol);
      }
      DocumentFragment.prototype.nodeName = "#document-fragment";
      DocumentFragment.prototype.nodeType = DOCUMENT_FRAGMENT_NODE;
      _extends(DocumentFragment, Node);
      function ProcessingInstruction(symbol) {
        checkSymbol(symbol);
      }
      ProcessingInstruction.prototype.nodeType = PROCESSING_INSTRUCTION_NODE;
      _extends(ProcessingInstruction, CharacterData);
      function XMLSerializer() {
      }
      XMLSerializer.prototype.serializeToString = function(node, options) {
        return nodeSerializeToString.call(node, options);
      };
      Node.prototype.toString = nodeSerializeToString;
      function nodeSerializeToString(options) {
        var opts;
        if (typeof options === "function") {
          opts = { requireWellFormed: false, splitCDATASections: true, nodeFilter: options };
        } else if (options != null) {
          opts = {
            requireWellFormed: !!options.requireWellFormed,
            splitCDATASections: options.splitCDATASections !== false,
            nodeFilter: options.nodeFilter || null
          };
        } else {
          opts = { requireWellFormed: false, splitCDATASections: true, nodeFilter: null };
        }
        var buf = [];
        var refNode = this.nodeType === DOCUMENT_NODE && this.documentElement || this;
        var prefix = refNode.prefix;
        var uri = refNode.namespaceURI;
        if (uri && prefix == null) {
          var prefix = refNode.lookupPrefix(uri);
          if (prefix == null) {
            var visibleNamespaces = [
              { namespace: uri, prefix: null }
              //{namespace:uri,prefix:''}
            ];
          }
        }
        serializeToString(this, buf, visibleNamespaces, opts);
        return buf.join("");
      }
      function needNamespaceDefine(node, isHTML, visibleNamespaces) {
        var prefix = node.prefix || "";
        var uri = node.namespaceURI;
        if (!uri) {
          return false;
        }
        if (prefix === "xml" && uri === NAMESPACE.XML || uri === NAMESPACE.XMLNS) {
          return false;
        }
        var i = visibleNamespaces.length;
        while (i--) {
          var ns = visibleNamespaces[i];
          if (ns.prefix === prefix) {
            return ns.namespace !== uri;
          }
        }
        return true;
      }
      function addSerializedAttribute(buf, qualifiedName, value) {
        buf.push(" ", qualifiedName, '="', value.replace(/[<>&"\t\n\r]/g, _xmlEncoder), '"');
      }
      function serializeToString(node, buf, visibleNamespaces, opts) {
        if (!visibleNamespaces) {
          visibleNamespaces = [];
        }
        var nodeFilter = opts.nodeFilter;
        var requireWellFormed = opts.requireWellFormed;
        var splitCDATASections = opts.splitCDATASections;
        var doc = node.nodeType === DOCUMENT_NODE ? node : node.ownerDocument;
        var isHTML = doc.type === "html";
        walkDOM(
          node,
          { ns: visibleNamespaces },
          {
            enter: function(n, ctx) {
              var namespaces = ctx.ns;
              if (nodeFilter) {
                n = nodeFilter(n);
                if (n) {
                  if (typeof n == "string") {
                    buf.push(n);
                    return null;
                  }
                } else {
                  return null;
                }
              }
              switch (n.nodeType) {
                case ELEMENT_NODE:
                  var attrs = n.attributes;
                  var len = attrs.length;
                  var nodeName = n.tagName;
                  var prefixedNodeName = nodeName;
                  if (!isHTML && !n.prefix && n.namespaceURI) {
                    var defaultNS;
                    for (var ai = 0; ai < attrs.length; ai++) {
                      if (attrs.item(ai).name === "xmlns") {
                        defaultNS = attrs.item(ai).value;
                        break;
                      }
                    }
                    if (!defaultNS) {
                      for (var nsi = namespaces.length - 1; nsi >= 0; nsi--) {
                        var nsEntry = namespaces[nsi];
                        if (nsEntry.prefix === "" && nsEntry.namespace === n.namespaceURI) {
                          defaultNS = nsEntry.namespace;
                          break;
                        }
                      }
                    }
                    if (defaultNS !== n.namespaceURI) {
                      for (var nsi = namespaces.length - 1; nsi >= 0; nsi--) {
                        var nsEntry = namespaces[nsi];
                        if (nsEntry.namespace === n.namespaceURI) {
                          if (nsEntry.prefix) {
                            prefixedNodeName = nsEntry.prefix + ":" + nodeName;
                          }
                          break;
                        }
                      }
                    }
                  }
                  buf.push("<", prefixedNodeName);
                  var childNamespaces = namespaces.slice();
                  for (var i = 0; i < len; i++) {
                    var attr = attrs.item(i);
                    if (attr.prefix == "xmlns") {
                      childNamespaces.push({
                        prefix: attr.localName,
                        namespace: attr.value
                      });
                    } else if (attr.nodeName == "xmlns") {
                      childNamespaces.push({ prefix: "", namespace: attr.value });
                    }
                  }
                  for (var i = 0; i < len; i++) {
                    var attr = attrs.item(i);
                    if (needNamespaceDefine(attr, isHTML, childNamespaces)) {
                      var attrPrefix = attr.prefix || "";
                      var uri = attr.namespaceURI;
                      addSerializedAttribute(buf, attrPrefix ? "xmlns:" + attrPrefix : "xmlns", uri);
                      childNamespaces.push({ prefix: attrPrefix, namespace: uri });
                    }
                    var filteredAttr = nodeFilter ? nodeFilter(attr) : attr;
                    if (filteredAttr) {
                      if (typeof filteredAttr === "string") {
                        buf.push(filteredAttr);
                      } else {
                        addSerializedAttribute(buf, filteredAttr.name, filteredAttr.value);
                      }
                    }
                  }
                  if (nodeName === prefixedNodeName && needNamespaceDefine(n, isHTML, childNamespaces)) {
                    var nodePrefix = n.prefix || "";
                    var uri = n.namespaceURI;
                    addSerializedAttribute(buf, nodePrefix ? "xmlns:" + nodePrefix : "xmlns", uri);
                    childNamespaces.push({ prefix: nodePrefix, namespace: uri });
                  }
                  var canCloseTag = !n.firstChild;
                  if (canCloseTag && (isHTML || n.namespaceURI === NAMESPACE.HTML)) {
                    canCloseTag = isHTMLVoidElement(nodeName);
                  }
                  if (canCloseTag) {
                    buf.push("/>");
                    return null;
                  }
                  buf.push(">");
                  if (isHTML && isHTMLRawTextElement(nodeName)) {
                    var child = n.firstChild;
                    while (child) {
                      if (child.data) {
                        buf.push(child.data);
                      } else {
                        serializeToString(child, buf, childNamespaces.slice(), opts);
                      }
                      child = child.nextSibling;
                    }
                    buf.push("</", prefixedNodeName, ">");
                    return null;
                  }
                  return { ns: childNamespaces, tag: prefixedNodeName };
                case DOCUMENT_NODE:
                case DOCUMENT_FRAGMENT_NODE:
                  if (requireWellFormed && n.nodeType === DOCUMENT_NODE && n.documentElement == null) {
                    throw new DOMException("The Document has no documentElement", DOMExceptionName.InvalidStateError);
                  }
                  return { ns: namespaces };
                case ATTRIBUTE_NODE:
                  addSerializedAttribute(buf, n.name, n.value);
                  return null;
                case TEXT_NODE2:
                  if (requireWellFormed && g.InvalidChar.test(n.data)) {
                    throw new DOMException(
                      "The Text node data contains characters outside the XML Char production",
                      DOMExceptionName.InvalidStateError
                    );
                  }
                  buf.push(n.data.replace(/[<&>]/g, _xmlEncoder));
                  return null;
                case CDATA_SECTION_NODE:
                  if (requireWellFormed && n.data.indexOf("]]>") !== -1) {
                    throw new DOMException('The CDATASection data contains "]]>"', DOMExceptionName.InvalidStateError);
                  }
                  if (splitCDATASections) {
                    buf.push(g.CDATA_START, n.data.replace(/]]>/g, "]]]]><![CDATA[>"), g.CDATA_END);
                  } else {
                    buf.push(g.CDATA_START, n.data, g.CDATA_END);
                  }
                  return null;
                case COMMENT_NODE2:
                  if (requireWellFormed) {
                    if (g.InvalidChar.test(n.data)) {
                      throw new DOMException(
                        "The comment node data contains characters outside the XML Char production",
                        DOMExceptionName.InvalidStateError
                      );
                    }
                    if (n.data.indexOf("--") !== -1 || n.data[n.data.length - 1] === "-") {
                      throw new DOMException(
                        'The comment node data contains "--" or ends with "-"',
                        DOMExceptionName.InvalidStateError
                      );
                    }
                  }
                  buf.push(g.COMMENT_START, n.data, g.COMMENT_END);
                  return null;
                case DOCUMENT_TYPE_NODE:
                  var pubid = n.publicId;
                  var sysid = n.systemId;
                  if (requireWellFormed) {
                    if (pubid && !g.PubidLiteral_match.test(pubid)) {
                      throw new DOMException("DocumentType publicId is not a valid PubidLiteral", DOMExceptionName.InvalidStateError);
                    }
                    if (sysid && sysid !== "." && !g.SystemLiteral_match.test(sysid)) {
                      throw new DOMException("DocumentType systemId is not a valid SystemLiteral", DOMExceptionName.InvalidStateError);
                    }
                    if (n.internalSubset && n.internalSubset.indexOf("]>") !== -1) {
                      throw new DOMException('DocumentType internalSubset contains "]>"', DOMExceptionName.InvalidStateError);
                    }
                  }
                  buf.push(g.DOCTYPE_DECL_START, " ", n.name);
                  if (pubid) {
                    buf.push(" ", g.PUBLIC, " ", pubid);
                    if (sysid && sysid !== ".") {
                      buf.push(" ", sysid);
                    }
                  } else if (sysid && sysid !== ".") {
                    buf.push(" ", g.SYSTEM, " ", sysid);
                  }
                  if (n.internalSubset) {
                    buf.push(" [", n.internalSubset, "]");
                  }
                  buf.push(">");
                  return null;
                case PROCESSING_INSTRUCTION_NODE:
                  if (requireWellFormed) {
                    if (n.target.indexOf(":") !== -1 || n.target.toLowerCase() === "xml") {
                      throw new DOMException("The ProcessingInstruction target is not well-formed", DOMExceptionName.InvalidStateError);
                    }
                    if (g.InvalidChar.test(n.data)) {
                      throw new DOMException(
                        "The ProcessingInstruction data contains characters outside the XML Char production",
                        DOMExceptionName.InvalidStateError
                      );
                    }
                    if (n.data.indexOf("?>") !== -1) {
                      throw new DOMException('The ProcessingInstruction data contains "?>"', DOMExceptionName.InvalidStateError);
                    }
                  }
                  buf.push("<?", n.target, " ", n.data, "?>");
                  return null;
                case ENTITY_REFERENCE_NODE:
                  buf.push("&", n.nodeName, ";");
                  return null;
                //case ENTITY_NODE:
                //case NOTATION_NODE:
                default:
                  buf.push("??", n.nodeName);
                  return null;
              }
            },
            exit: function(n, childCtx) {
              if (childCtx && childCtx.tag) {
                buf.push("</", childCtx.tag, ">");
              }
            }
          }
        );
      }
      function importNode(doc, node, deep) {
        var destRoot;
        walkDOM(node, null, {
          enter: function(srcNode, destParent) {
            var destNode = srcNode.cloneNode(false);
            destNode.ownerDocument = doc;
            destNode.parentNode = null;
            if (destParent === null) {
              destRoot = destNode;
            } else {
              destParent.appendChild(destNode);
            }
            var shouldDeep = srcNode.nodeType === ATTRIBUTE_NODE || deep;
            return shouldDeep ? destNode : null;
          }
        });
        return destRoot;
      }
      function cloneNode(doc, node, deep) {
        var destRoot;
        walkDOM(node, null, {
          enter: function(srcNode, destParent) {
            var destNode = new srcNode.constructor(PDC);
            for (var n in srcNode) {
              if (hasOwn(srcNode, n)) {
                var v = srcNode[n];
                if (typeof v != "object") {
                  if (v != destNode[n]) {
                    destNode[n] = v;
                  }
                }
              }
            }
            if (srcNode.childNodes) {
              destNode.childNodes = new NodeList();
            }
            destNode.ownerDocument = doc;
            var shouldDeep = deep;
            switch (destNode.nodeType) {
              case ELEMENT_NODE:
                var attrs = srcNode.attributes;
                var attrs2 = destNode.attributes = new NamedNodeMap();
                var len = attrs.length;
                attrs2._ownerElement = destNode;
                for (var i = 0; i < len; i++) {
                  destNode.setAttributeNode(cloneNode(doc, attrs.item(i), true));
                }
                break;
              case ATTRIBUTE_NODE:
                shouldDeep = true;
            }
            if (destParent !== null) {
              destParent.appendChild(destNode);
            } else {
              destRoot = destNode;
            }
            return shouldDeep ? destNode : null;
          }
        });
        return destRoot;
      }
      function __set__(object, key, value) {
        object[key] = value;
      }
      function childrenRefresh(node) {
        var ls = [];
        var child = node.firstChild;
        while (child) {
          if (child.nodeType === ELEMENT_NODE) {
            ls.push(child);
          }
          child = child.nextSibling;
        }
        return ls;
      }
      try {
        if (Object.defineProperty) {
          Object.defineProperty(LiveNodeList.prototype, "length", {
            get: function() {
              _updateLiveList(this);
              return this.$$length;
            }
          });
          Object.defineProperty(Node.prototype, "textContent", {
            get: function() {
              if (this.nodeType === ELEMENT_NODE || this.nodeType === DOCUMENT_FRAGMENT_NODE) {
                var buf = [];
                walkDOM(this, null, {
                  enter: function(n) {
                    if (n.nodeType === ELEMENT_NODE || n.nodeType === DOCUMENT_FRAGMENT_NODE) {
                      return true;
                    }
                    if (n.nodeType === PROCESSING_INSTRUCTION_NODE || n.nodeType === COMMENT_NODE2) {
                      return null;
                    }
                    buf.push(n.nodeValue);
                  }
                });
                return buf.join("");
              }
              return this.nodeValue;
            },
            set: function(data) {
              switch (this.nodeType) {
                case ELEMENT_NODE:
                case DOCUMENT_FRAGMENT_NODE:
                  while (this.firstChild) {
                    this.removeChild(this.firstChild);
                  }
                  if (data || String(data)) {
                    this.appendChild(this.ownerDocument.createTextNode(data));
                  }
                  break;
                default:
                  this.data = data;
                  this.value = data;
                  this.nodeValue = data;
              }
            }
          });
          Object.defineProperty(Element.prototype, "children", {
            get: function() {
              return new LiveNodeList(this, childrenRefresh);
            }
          });
          Object.defineProperty(Document.prototype, "children", {
            get: function() {
              return new LiveNodeList(this, childrenRefresh);
            }
          });
          Object.defineProperty(DocumentFragment.prototype, "children", {
            get: function() {
              return new LiveNodeList(this, childrenRefresh);
            }
          });
          __set__ = function(object, key, value) {
            object["$$" + key] = value;
          };
        }
      } catch (e) {
      }
      exports._updateLiveList = _updateLiveList;
      exports.Attr = Attr;
      exports.CDATASection = CDATASection;
      exports.CharacterData = CharacterData;
      exports.Comment = Comment;
      exports.Document = Document;
      exports.DocumentFragment = DocumentFragment;
      exports.DocumentType = DocumentType;
      exports.DOMImplementation = DOMImplementation;
      exports.Element = Element;
      exports.Entity = Entity;
      exports.EntityReference = EntityReference;
      exports.LiveNodeList = LiveNodeList;
      exports.NamedNodeMap = NamedNodeMap;
      exports.Node = Node;
      exports.NodeList = NodeList;
      exports.Notation = Notation;
      exports.Text = Text;
      exports.ProcessingInstruction = ProcessingInstruction;
      exports.walkDOM = walkDOM;
      exports.XMLSerializer = XMLSerializer;
    }
  });

  // node_modules/@xmldom/xmldom/lib/entities.js
  var require_entities = __commonJS({
    "node_modules/@xmldom/xmldom/lib/entities.js"(exports) {
      "use strict";
      var freeze = require_conventions().freeze;
      exports.XML_ENTITIES = freeze({
        amp: "&",
        apos: "'",
        gt: ">",
        lt: "<",
        quot: '"'
      });
      exports.HTML_ENTITIES = freeze({
        Aacute: "\xC1",
        aacute: "\xE1",
        Abreve: "\u0102",
        abreve: "\u0103",
        ac: "\u223E",
        acd: "\u223F",
        acE: "\u223E\u0333",
        Acirc: "\xC2",
        acirc: "\xE2",
        acute: "\xB4",
        Acy: "\u0410",
        acy: "\u0430",
        AElig: "\xC6",
        aelig: "\xE6",
        af: "\u2061",
        Afr: "\u{1D504}",
        afr: "\u{1D51E}",
        Agrave: "\xC0",
        agrave: "\xE0",
        alefsym: "\u2135",
        aleph: "\u2135",
        Alpha: "\u0391",
        alpha: "\u03B1",
        Amacr: "\u0100",
        amacr: "\u0101",
        amalg: "\u2A3F",
        AMP: "&",
        amp: "&",
        And: "\u2A53",
        and: "\u2227",
        andand: "\u2A55",
        andd: "\u2A5C",
        andslope: "\u2A58",
        andv: "\u2A5A",
        ang: "\u2220",
        ange: "\u29A4",
        angle: "\u2220",
        angmsd: "\u2221",
        angmsdaa: "\u29A8",
        angmsdab: "\u29A9",
        angmsdac: "\u29AA",
        angmsdad: "\u29AB",
        angmsdae: "\u29AC",
        angmsdaf: "\u29AD",
        angmsdag: "\u29AE",
        angmsdah: "\u29AF",
        angrt: "\u221F",
        angrtvb: "\u22BE",
        angrtvbd: "\u299D",
        angsph: "\u2222",
        angst: "\xC5",
        angzarr: "\u237C",
        Aogon: "\u0104",
        aogon: "\u0105",
        Aopf: "\u{1D538}",
        aopf: "\u{1D552}",
        ap: "\u2248",
        apacir: "\u2A6F",
        apE: "\u2A70",
        ape: "\u224A",
        apid: "\u224B",
        apos: "'",
        ApplyFunction: "\u2061",
        approx: "\u2248",
        approxeq: "\u224A",
        Aring: "\xC5",
        aring: "\xE5",
        Ascr: "\u{1D49C}",
        ascr: "\u{1D4B6}",
        Assign: "\u2254",
        ast: "*",
        asymp: "\u2248",
        asympeq: "\u224D",
        Atilde: "\xC3",
        atilde: "\xE3",
        Auml: "\xC4",
        auml: "\xE4",
        awconint: "\u2233",
        awint: "\u2A11",
        backcong: "\u224C",
        backepsilon: "\u03F6",
        backprime: "\u2035",
        backsim: "\u223D",
        backsimeq: "\u22CD",
        Backslash: "\u2216",
        Barv: "\u2AE7",
        barvee: "\u22BD",
        Barwed: "\u2306",
        barwed: "\u2305",
        barwedge: "\u2305",
        bbrk: "\u23B5",
        bbrktbrk: "\u23B6",
        bcong: "\u224C",
        Bcy: "\u0411",
        bcy: "\u0431",
        bdquo: "\u201E",
        becaus: "\u2235",
        Because: "\u2235",
        because: "\u2235",
        bemptyv: "\u29B0",
        bepsi: "\u03F6",
        bernou: "\u212C",
        Bernoullis: "\u212C",
        Beta: "\u0392",
        beta: "\u03B2",
        beth: "\u2136",
        between: "\u226C",
        Bfr: "\u{1D505}",
        bfr: "\u{1D51F}",
        bigcap: "\u22C2",
        bigcirc: "\u25EF",
        bigcup: "\u22C3",
        bigodot: "\u2A00",
        bigoplus: "\u2A01",
        bigotimes: "\u2A02",
        bigsqcup: "\u2A06",
        bigstar: "\u2605",
        bigtriangledown: "\u25BD",
        bigtriangleup: "\u25B3",
        biguplus: "\u2A04",
        bigvee: "\u22C1",
        bigwedge: "\u22C0",
        bkarow: "\u290D",
        blacklozenge: "\u29EB",
        blacksquare: "\u25AA",
        blacktriangle: "\u25B4",
        blacktriangledown: "\u25BE",
        blacktriangleleft: "\u25C2",
        blacktriangleright: "\u25B8",
        blank: "\u2423",
        blk12: "\u2592",
        blk14: "\u2591",
        blk34: "\u2593",
        block: "\u2588",
        bne: "=\u20E5",
        bnequiv: "\u2261\u20E5",
        bNot: "\u2AED",
        bnot: "\u2310",
        Bopf: "\u{1D539}",
        bopf: "\u{1D553}",
        bot: "\u22A5",
        bottom: "\u22A5",
        bowtie: "\u22C8",
        boxbox: "\u29C9",
        boxDL: "\u2557",
        boxDl: "\u2556",
        boxdL: "\u2555",
        boxdl: "\u2510",
        boxDR: "\u2554",
        boxDr: "\u2553",
        boxdR: "\u2552",
        boxdr: "\u250C",
        boxH: "\u2550",
        boxh: "\u2500",
        boxHD: "\u2566",
        boxHd: "\u2564",
        boxhD: "\u2565",
        boxhd: "\u252C",
        boxHU: "\u2569",
        boxHu: "\u2567",
        boxhU: "\u2568",
        boxhu: "\u2534",
        boxminus: "\u229F",
        boxplus: "\u229E",
        boxtimes: "\u22A0",
        boxUL: "\u255D",
        boxUl: "\u255C",
        boxuL: "\u255B",
        boxul: "\u2518",
        boxUR: "\u255A",
        boxUr: "\u2559",
        boxuR: "\u2558",
        boxur: "\u2514",
        boxV: "\u2551",
        boxv: "\u2502",
        boxVH: "\u256C",
        boxVh: "\u256B",
        boxvH: "\u256A",
        boxvh: "\u253C",
        boxVL: "\u2563",
        boxVl: "\u2562",
        boxvL: "\u2561",
        boxvl: "\u2524",
        boxVR: "\u2560",
        boxVr: "\u255F",
        boxvR: "\u255E",
        boxvr: "\u251C",
        bprime: "\u2035",
        Breve: "\u02D8",
        breve: "\u02D8",
        brvbar: "\xA6",
        Bscr: "\u212C",
        bscr: "\u{1D4B7}",
        bsemi: "\u204F",
        bsim: "\u223D",
        bsime: "\u22CD",
        bsol: "\\",
        bsolb: "\u29C5",
        bsolhsub: "\u27C8",
        bull: "\u2022",
        bullet: "\u2022",
        bump: "\u224E",
        bumpE: "\u2AAE",
        bumpe: "\u224F",
        Bumpeq: "\u224E",
        bumpeq: "\u224F",
        Cacute: "\u0106",
        cacute: "\u0107",
        Cap: "\u22D2",
        cap: "\u2229",
        capand: "\u2A44",
        capbrcup: "\u2A49",
        capcap: "\u2A4B",
        capcup: "\u2A47",
        capdot: "\u2A40",
        CapitalDifferentialD: "\u2145",
        caps: "\u2229\uFE00",
        caret: "\u2041",
        caron: "\u02C7",
        Cayleys: "\u212D",
        ccaps: "\u2A4D",
        Ccaron: "\u010C",
        ccaron: "\u010D",
        Ccedil: "\xC7",
        ccedil: "\xE7",
        Ccirc: "\u0108",
        ccirc: "\u0109",
        Cconint: "\u2230",
        ccups: "\u2A4C",
        ccupssm: "\u2A50",
        Cdot: "\u010A",
        cdot: "\u010B",
        cedil: "\xB8",
        Cedilla: "\xB8",
        cemptyv: "\u29B2",
        cent: "\xA2",
        CenterDot: "\xB7",
        centerdot: "\xB7",
        Cfr: "\u212D",
        cfr: "\u{1D520}",
        CHcy: "\u0427",
        chcy: "\u0447",
        check: "\u2713",
        checkmark: "\u2713",
        Chi: "\u03A7",
        chi: "\u03C7",
        cir: "\u25CB",
        circ: "\u02C6",
        circeq: "\u2257",
        circlearrowleft: "\u21BA",
        circlearrowright: "\u21BB",
        circledast: "\u229B",
        circledcirc: "\u229A",
        circleddash: "\u229D",
        CircleDot: "\u2299",
        circledR: "\xAE",
        circledS: "\u24C8",
        CircleMinus: "\u2296",
        CirclePlus: "\u2295",
        CircleTimes: "\u2297",
        cirE: "\u29C3",
        cire: "\u2257",
        cirfnint: "\u2A10",
        cirmid: "\u2AEF",
        cirscir: "\u29C2",
        ClockwiseContourIntegral: "\u2232",
        CloseCurlyDoubleQuote: "\u201D",
        CloseCurlyQuote: "\u2019",
        clubs: "\u2663",
        clubsuit: "\u2663",
        Colon: "\u2237",
        colon: ":",
        Colone: "\u2A74",
        colone: "\u2254",
        coloneq: "\u2254",
        comma: ",",
        commat: "@",
        comp: "\u2201",
        compfn: "\u2218",
        complement: "\u2201",
        complexes: "\u2102",
        cong: "\u2245",
        congdot: "\u2A6D",
        Congruent: "\u2261",
        Conint: "\u222F",
        conint: "\u222E",
        ContourIntegral: "\u222E",
        Copf: "\u2102",
        copf: "\u{1D554}",
        coprod: "\u2210",
        Coproduct: "\u2210",
        COPY: "\xA9",
        copy: "\xA9",
        copysr: "\u2117",
        CounterClockwiseContourIntegral: "\u2233",
        crarr: "\u21B5",
        Cross: "\u2A2F",
        cross: "\u2717",
        Cscr: "\u{1D49E}",
        cscr: "\u{1D4B8}",
        csub: "\u2ACF",
        csube: "\u2AD1",
        csup: "\u2AD0",
        csupe: "\u2AD2",
        ctdot: "\u22EF",
        cudarrl: "\u2938",
        cudarrr: "\u2935",
        cuepr: "\u22DE",
        cuesc: "\u22DF",
        cularr: "\u21B6",
        cularrp: "\u293D",
        Cup: "\u22D3",
        cup: "\u222A",
        cupbrcap: "\u2A48",
        CupCap: "\u224D",
        cupcap: "\u2A46",
        cupcup: "\u2A4A",
        cupdot: "\u228D",
        cupor: "\u2A45",
        cups: "\u222A\uFE00",
        curarr: "\u21B7",
        curarrm: "\u293C",
        curlyeqprec: "\u22DE",
        curlyeqsucc: "\u22DF",
        curlyvee: "\u22CE",
        curlywedge: "\u22CF",
        curren: "\xA4",
        curvearrowleft: "\u21B6",
        curvearrowright: "\u21B7",
        cuvee: "\u22CE",
        cuwed: "\u22CF",
        cwconint: "\u2232",
        cwint: "\u2231",
        cylcty: "\u232D",
        Dagger: "\u2021",
        dagger: "\u2020",
        daleth: "\u2138",
        Darr: "\u21A1",
        dArr: "\u21D3",
        darr: "\u2193",
        dash: "\u2010",
        Dashv: "\u2AE4",
        dashv: "\u22A3",
        dbkarow: "\u290F",
        dblac: "\u02DD",
        Dcaron: "\u010E",
        dcaron: "\u010F",
        Dcy: "\u0414",
        dcy: "\u0434",
        DD: "\u2145",
        dd: "\u2146",
        ddagger: "\u2021",
        ddarr: "\u21CA",
        DDotrahd: "\u2911",
        ddotseq: "\u2A77",
        deg: "\xB0",
        Del: "\u2207",
        Delta: "\u0394",
        delta: "\u03B4",
        demptyv: "\u29B1",
        dfisht: "\u297F",
        Dfr: "\u{1D507}",
        dfr: "\u{1D521}",
        dHar: "\u2965",
        dharl: "\u21C3",
        dharr: "\u21C2",
        DiacriticalAcute: "\xB4",
        DiacriticalDot: "\u02D9",
        DiacriticalDoubleAcute: "\u02DD",
        DiacriticalGrave: "`",
        DiacriticalTilde: "\u02DC",
        diam: "\u22C4",
        Diamond: "\u22C4",
        diamond: "\u22C4",
        diamondsuit: "\u2666",
        diams: "\u2666",
        die: "\xA8",
        DifferentialD: "\u2146",
        digamma: "\u03DD",
        disin: "\u22F2",
        div: "\xF7",
        divide: "\xF7",
        divideontimes: "\u22C7",
        divonx: "\u22C7",
        DJcy: "\u0402",
        djcy: "\u0452",
        dlcorn: "\u231E",
        dlcrop: "\u230D",
        dollar: "$",
        Dopf: "\u{1D53B}",
        dopf: "\u{1D555}",
        Dot: "\xA8",
        dot: "\u02D9",
        DotDot: "\u20DC",
        doteq: "\u2250",
        doteqdot: "\u2251",
        DotEqual: "\u2250",
        dotminus: "\u2238",
        dotplus: "\u2214",
        dotsquare: "\u22A1",
        doublebarwedge: "\u2306",
        DoubleContourIntegral: "\u222F",
        DoubleDot: "\xA8",
        DoubleDownArrow: "\u21D3",
        DoubleLeftArrow: "\u21D0",
        DoubleLeftRightArrow: "\u21D4",
        DoubleLeftTee: "\u2AE4",
        DoubleLongLeftArrow: "\u27F8",
        DoubleLongLeftRightArrow: "\u27FA",
        DoubleLongRightArrow: "\u27F9",
        DoubleRightArrow: "\u21D2",
        DoubleRightTee: "\u22A8",
        DoubleUpArrow: "\u21D1",
        DoubleUpDownArrow: "\u21D5",
        DoubleVerticalBar: "\u2225",
        DownArrow: "\u2193",
        Downarrow: "\u21D3",
        downarrow: "\u2193",
        DownArrowBar: "\u2913",
        DownArrowUpArrow: "\u21F5",
        DownBreve: "\u0311",
        downdownarrows: "\u21CA",
        downharpoonleft: "\u21C3",
        downharpoonright: "\u21C2",
        DownLeftRightVector: "\u2950",
        DownLeftTeeVector: "\u295E",
        DownLeftVector: "\u21BD",
        DownLeftVectorBar: "\u2956",
        DownRightTeeVector: "\u295F",
        DownRightVector: "\u21C1",
        DownRightVectorBar: "\u2957",
        DownTee: "\u22A4",
        DownTeeArrow: "\u21A7",
        drbkarow: "\u2910",
        drcorn: "\u231F",
        drcrop: "\u230C",
        Dscr: "\u{1D49F}",
        dscr: "\u{1D4B9}",
        DScy: "\u0405",
        dscy: "\u0455",
        dsol: "\u29F6",
        Dstrok: "\u0110",
        dstrok: "\u0111",
        dtdot: "\u22F1",
        dtri: "\u25BF",
        dtrif: "\u25BE",
        duarr: "\u21F5",
        duhar: "\u296F",
        dwangle: "\u29A6",
        DZcy: "\u040F",
        dzcy: "\u045F",
        dzigrarr: "\u27FF",
        Eacute: "\xC9",
        eacute: "\xE9",
        easter: "\u2A6E",
        Ecaron: "\u011A",
        ecaron: "\u011B",
        ecir: "\u2256",
        Ecirc: "\xCA",
        ecirc: "\xEA",
        ecolon: "\u2255",
        Ecy: "\u042D",
        ecy: "\u044D",
        eDDot: "\u2A77",
        Edot: "\u0116",
        eDot: "\u2251",
        edot: "\u0117",
        ee: "\u2147",
        efDot: "\u2252",
        Efr: "\u{1D508}",
        efr: "\u{1D522}",
        eg: "\u2A9A",
        Egrave: "\xC8",
        egrave: "\xE8",
        egs: "\u2A96",
        egsdot: "\u2A98",
        el: "\u2A99",
        Element: "\u2208",
        elinters: "\u23E7",
        ell: "\u2113",
        els: "\u2A95",
        elsdot: "\u2A97",
        Emacr: "\u0112",
        emacr: "\u0113",
        empty: "\u2205",
        emptyset: "\u2205",
        EmptySmallSquare: "\u25FB",
        emptyv: "\u2205",
        EmptyVerySmallSquare: "\u25AB",
        emsp: "\u2003",
        emsp13: "\u2004",
        emsp14: "\u2005",
        ENG: "\u014A",
        eng: "\u014B",
        ensp: "\u2002",
        Eogon: "\u0118",
        eogon: "\u0119",
        Eopf: "\u{1D53C}",
        eopf: "\u{1D556}",
        epar: "\u22D5",
        eparsl: "\u29E3",
        eplus: "\u2A71",
        epsi: "\u03B5",
        Epsilon: "\u0395",
        epsilon: "\u03B5",
        epsiv: "\u03F5",
        eqcirc: "\u2256",
        eqcolon: "\u2255",
        eqsim: "\u2242",
        eqslantgtr: "\u2A96",
        eqslantless: "\u2A95",
        Equal: "\u2A75",
        equals: "=",
        EqualTilde: "\u2242",
        equest: "\u225F",
        Equilibrium: "\u21CC",
        equiv: "\u2261",
        equivDD: "\u2A78",
        eqvparsl: "\u29E5",
        erarr: "\u2971",
        erDot: "\u2253",
        Escr: "\u2130",
        escr: "\u212F",
        esdot: "\u2250",
        Esim: "\u2A73",
        esim: "\u2242",
        Eta: "\u0397",
        eta: "\u03B7",
        ETH: "\xD0",
        eth: "\xF0",
        Euml: "\xCB",
        euml: "\xEB",
        euro: "\u20AC",
        excl: "!",
        exist: "\u2203",
        Exists: "\u2203",
        expectation: "\u2130",
        ExponentialE: "\u2147",
        exponentiale: "\u2147",
        fallingdotseq: "\u2252",
        Fcy: "\u0424",
        fcy: "\u0444",
        female: "\u2640",
        ffilig: "\uFB03",
        fflig: "\uFB00",
        ffllig: "\uFB04",
        Ffr: "\u{1D509}",
        ffr: "\u{1D523}",
        filig: "\uFB01",
        FilledSmallSquare: "\u25FC",
        FilledVerySmallSquare: "\u25AA",
        fjlig: "fj",
        flat: "\u266D",
        fllig: "\uFB02",
        fltns: "\u25B1",
        fnof: "\u0192",
        Fopf: "\u{1D53D}",
        fopf: "\u{1D557}",
        ForAll: "\u2200",
        forall: "\u2200",
        fork: "\u22D4",
        forkv: "\u2AD9",
        Fouriertrf: "\u2131",
        fpartint: "\u2A0D",
        frac12: "\xBD",
        frac13: "\u2153",
        frac14: "\xBC",
        frac15: "\u2155",
        frac16: "\u2159",
        frac18: "\u215B",
        frac23: "\u2154",
        frac25: "\u2156",
        frac34: "\xBE",
        frac35: "\u2157",
        frac38: "\u215C",
        frac45: "\u2158",
        frac56: "\u215A",
        frac58: "\u215D",
        frac78: "\u215E",
        frasl: "\u2044",
        frown: "\u2322",
        Fscr: "\u2131",
        fscr: "\u{1D4BB}",
        gacute: "\u01F5",
        Gamma: "\u0393",
        gamma: "\u03B3",
        Gammad: "\u03DC",
        gammad: "\u03DD",
        gap: "\u2A86",
        Gbreve: "\u011E",
        gbreve: "\u011F",
        Gcedil: "\u0122",
        Gcirc: "\u011C",
        gcirc: "\u011D",
        Gcy: "\u0413",
        gcy: "\u0433",
        Gdot: "\u0120",
        gdot: "\u0121",
        gE: "\u2267",
        ge: "\u2265",
        gEl: "\u2A8C",
        gel: "\u22DB",
        geq: "\u2265",
        geqq: "\u2267",
        geqslant: "\u2A7E",
        ges: "\u2A7E",
        gescc: "\u2AA9",
        gesdot: "\u2A80",
        gesdoto: "\u2A82",
        gesdotol: "\u2A84",
        gesl: "\u22DB\uFE00",
        gesles: "\u2A94",
        Gfr: "\u{1D50A}",
        gfr: "\u{1D524}",
        Gg: "\u22D9",
        gg: "\u226B",
        ggg: "\u22D9",
        gimel: "\u2137",
        GJcy: "\u0403",
        gjcy: "\u0453",
        gl: "\u2277",
        gla: "\u2AA5",
        glE: "\u2A92",
        glj: "\u2AA4",
        gnap: "\u2A8A",
        gnapprox: "\u2A8A",
        gnE: "\u2269",
        gne: "\u2A88",
        gneq: "\u2A88",
        gneqq: "\u2269",
        gnsim: "\u22E7",
        Gopf: "\u{1D53E}",
        gopf: "\u{1D558}",
        grave: "`",
        GreaterEqual: "\u2265",
        GreaterEqualLess: "\u22DB",
        GreaterFullEqual: "\u2267",
        GreaterGreater: "\u2AA2",
        GreaterLess: "\u2277",
        GreaterSlantEqual: "\u2A7E",
        GreaterTilde: "\u2273",
        Gscr: "\u{1D4A2}",
        gscr: "\u210A",
        gsim: "\u2273",
        gsime: "\u2A8E",
        gsiml: "\u2A90",
        Gt: "\u226B",
        GT: ">",
        gt: ">",
        gtcc: "\u2AA7",
        gtcir: "\u2A7A",
        gtdot: "\u22D7",
        gtlPar: "\u2995",
        gtquest: "\u2A7C",
        gtrapprox: "\u2A86",
        gtrarr: "\u2978",
        gtrdot: "\u22D7",
        gtreqless: "\u22DB",
        gtreqqless: "\u2A8C",
        gtrless: "\u2277",
        gtrsim: "\u2273",
        gvertneqq: "\u2269\uFE00",
        gvnE: "\u2269\uFE00",
        Hacek: "\u02C7",
        hairsp: "\u200A",
        half: "\xBD",
        hamilt: "\u210B",
        HARDcy: "\u042A",
        hardcy: "\u044A",
        hArr: "\u21D4",
        harr: "\u2194",
        harrcir: "\u2948",
        harrw: "\u21AD",
        Hat: "^",
        hbar: "\u210F",
        Hcirc: "\u0124",
        hcirc: "\u0125",
        hearts: "\u2665",
        heartsuit: "\u2665",
        hellip: "\u2026",
        hercon: "\u22B9",
        Hfr: "\u210C",
        hfr: "\u{1D525}",
        HilbertSpace: "\u210B",
        hksearow: "\u2925",
        hkswarow: "\u2926",
        hoarr: "\u21FF",
        homtht: "\u223B",
        hookleftarrow: "\u21A9",
        hookrightarrow: "\u21AA",
        Hopf: "\u210D",
        hopf: "\u{1D559}",
        horbar: "\u2015",
        HorizontalLine: "\u2500",
        Hscr: "\u210B",
        hscr: "\u{1D4BD}",
        hslash: "\u210F",
        Hstrok: "\u0126",
        hstrok: "\u0127",
        HumpDownHump: "\u224E",
        HumpEqual: "\u224F",
        hybull: "\u2043",
        hyphen: "\u2010",
        Iacute: "\xCD",
        iacute: "\xED",
        ic: "\u2063",
        Icirc: "\xCE",
        icirc: "\xEE",
        Icy: "\u0418",
        icy: "\u0438",
        Idot: "\u0130",
        IEcy: "\u0415",
        iecy: "\u0435",
        iexcl: "\xA1",
        iff: "\u21D4",
        Ifr: "\u2111",
        ifr: "\u{1D526}",
        Igrave: "\xCC",
        igrave: "\xEC",
        ii: "\u2148",
        iiiint: "\u2A0C",
        iiint: "\u222D",
        iinfin: "\u29DC",
        iiota: "\u2129",
        IJlig: "\u0132",
        ijlig: "\u0133",
        Im: "\u2111",
        Imacr: "\u012A",
        imacr: "\u012B",
        image: "\u2111",
        ImaginaryI: "\u2148",
        imagline: "\u2110",
        imagpart: "\u2111",
        imath: "\u0131",
        imof: "\u22B7",
        imped: "\u01B5",
        Implies: "\u21D2",
        in: "\u2208",
        incare: "\u2105",
        infin: "\u221E",
        infintie: "\u29DD",
        inodot: "\u0131",
        Int: "\u222C",
        int: "\u222B",
        intcal: "\u22BA",
        integers: "\u2124",
        Integral: "\u222B",
        intercal: "\u22BA",
        Intersection: "\u22C2",
        intlarhk: "\u2A17",
        intprod: "\u2A3C",
        InvisibleComma: "\u2063",
        InvisibleTimes: "\u2062",
        IOcy: "\u0401",
        iocy: "\u0451",
        Iogon: "\u012E",
        iogon: "\u012F",
        Iopf: "\u{1D540}",
        iopf: "\u{1D55A}",
        Iota: "\u0399",
        iota: "\u03B9",
        iprod: "\u2A3C",
        iquest: "\xBF",
        Iscr: "\u2110",
        iscr: "\u{1D4BE}",
        isin: "\u2208",
        isindot: "\u22F5",
        isinE: "\u22F9",
        isins: "\u22F4",
        isinsv: "\u22F3",
        isinv: "\u2208",
        it: "\u2062",
        Itilde: "\u0128",
        itilde: "\u0129",
        Iukcy: "\u0406",
        iukcy: "\u0456",
        Iuml: "\xCF",
        iuml: "\xEF",
        Jcirc: "\u0134",
        jcirc: "\u0135",
        Jcy: "\u0419",
        jcy: "\u0439",
        Jfr: "\u{1D50D}",
        jfr: "\u{1D527}",
        jmath: "\u0237",
        Jopf: "\u{1D541}",
        jopf: "\u{1D55B}",
        Jscr: "\u{1D4A5}",
        jscr: "\u{1D4BF}",
        Jsercy: "\u0408",
        jsercy: "\u0458",
        Jukcy: "\u0404",
        jukcy: "\u0454",
        Kappa: "\u039A",
        kappa: "\u03BA",
        kappav: "\u03F0",
        Kcedil: "\u0136",
        kcedil: "\u0137",
        Kcy: "\u041A",
        kcy: "\u043A",
        Kfr: "\u{1D50E}",
        kfr: "\u{1D528}",
        kgreen: "\u0138",
        KHcy: "\u0425",
        khcy: "\u0445",
        KJcy: "\u040C",
        kjcy: "\u045C",
        Kopf: "\u{1D542}",
        kopf: "\u{1D55C}",
        Kscr: "\u{1D4A6}",
        kscr: "\u{1D4C0}",
        lAarr: "\u21DA",
        Lacute: "\u0139",
        lacute: "\u013A",
        laemptyv: "\u29B4",
        lagran: "\u2112",
        Lambda: "\u039B",
        lambda: "\u03BB",
        Lang: "\u27EA",
        lang: "\u27E8",
        langd: "\u2991",
        langle: "\u27E8",
        lap: "\u2A85",
        Laplacetrf: "\u2112",
        laquo: "\xAB",
        Larr: "\u219E",
        lArr: "\u21D0",
        larr: "\u2190",
        larrb: "\u21E4",
        larrbfs: "\u291F",
        larrfs: "\u291D",
        larrhk: "\u21A9",
        larrlp: "\u21AB",
        larrpl: "\u2939",
        larrsim: "\u2973",
        larrtl: "\u21A2",
        lat: "\u2AAB",
        lAtail: "\u291B",
        latail: "\u2919",
        late: "\u2AAD",
        lates: "\u2AAD\uFE00",
        lBarr: "\u290E",
        lbarr: "\u290C",
        lbbrk: "\u2772",
        lbrace: "{",
        lbrack: "[",
        lbrke: "\u298B",
        lbrksld: "\u298F",
        lbrkslu: "\u298D",
        Lcaron: "\u013D",
        lcaron: "\u013E",
        Lcedil: "\u013B",
        lcedil: "\u013C",
        lceil: "\u2308",
        lcub: "{",
        Lcy: "\u041B",
        lcy: "\u043B",
        ldca: "\u2936",
        ldquo: "\u201C",
        ldquor: "\u201E",
        ldrdhar: "\u2967",
        ldrushar: "\u294B",
        ldsh: "\u21B2",
        lE: "\u2266",
        le: "\u2264",
        LeftAngleBracket: "\u27E8",
        LeftArrow: "\u2190",
        Leftarrow: "\u21D0",
        leftarrow: "\u2190",
        LeftArrowBar: "\u21E4",
        LeftArrowRightArrow: "\u21C6",
        leftarrowtail: "\u21A2",
        LeftCeiling: "\u2308",
        LeftDoubleBracket: "\u27E6",
        LeftDownTeeVector: "\u2961",
        LeftDownVector: "\u21C3",
        LeftDownVectorBar: "\u2959",
        LeftFloor: "\u230A",
        leftharpoondown: "\u21BD",
        leftharpoonup: "\u21BC",
        leftleftarrows: "\u21C7",
        LeftRightArrow: "\u2194",
        Leftrightarrow: "\u21D4",
        leftrightarrow: "\u2194",
        leftrightarrows: "\u21C6",
        leftrightharpoons: "\u21CB",
        leftrightsquigarrow: "\u21AD",
        LeftRightVector: "\u294E",
        LeftTee: "\u22A3",
        LeftTeeArrow: "\u21A4",
        LeftTeeVector: "\u295A",
        leftthreetimes: "\u22CB",
        LeftTriangle: "\u22B2",
        LeftTriangleBar: "\u29CF",
        LeftTriangleEqual: "\u22B4",
        LeftUpDownVector: "\u2951",
        LeftUpTeeVector: "\u2960",
        LeftUpVector: "\u21BF",
        LeftUpVectorBar: "\u2958",
        LeftVector: "\u21BC",
        LeftVectorBar: "\u2952",
        lEg: "\u2A8B",
        leg: "\u22DA",
        leq: "\u2264",
        leqq: "\u2266",
        leqslant: "\u2A7D",
        les: "\u2A7D",
        lescc: "\u2AA8",
        lesdot: "\u2A7F",
        lesdoto: "\u2A81",
        lesdotor: "\u2A83",
        lesg: "\u22DA\uFE00",
        lesges: "\u2A93",
        lessapprox: "\u2A85",
        lessdot: "\u22D6",
        lesseqgtr: "\u22DA",
        lesseqqgtr: "\u2A8B",
        LessEqualGreater: "\u22DA",
        LessFullEqual: "\u2266",
        LessGreater: "\u2276",
        lessgtr: "\u2276",
        LessLess: "\u2AA1",
        lesssim: "\u2272",
        LessSlantEqual: "\u2A7D",
        LessTilde: "\u2272",
        lfisht: "\u297C",
        lfloor: "\u230A",
        Lfr: "\u{1D50F}",
        lfr: "\u{1D529}",
        lg: "\u2276",
        lgE: "\u2A91",
        lHar: "\u2962",
        lhard: "\u21BD",
        lharu: "\u21BC",
        lharul: "\u296A",
        lhblk: "\u2584",
        LJcy: "\u0409",
        ljcy: "\u0459",
        Ll: "\u22D8",
        ll: "\u226A",
        llarr: "\u21C7",
        llcorner: "\u231E",
        Lleftarrow: "\u21DA",
        llhard: "\u296B",
        lltri: "\u25FA",
        Lmidot: "\u013F",
        lmidot: "\u0140",
        lmoust: "\u23B0",
        lmoustache: "\u23B0",
        lnap: "\u2A89",
        lnapprox: "\u2A89",
        lnE: "\u2268",
        lne: "\u2A87",
        lneq: "\u2A87",
        lneqq: "\u2268",
        lnsim: "\u22E6",
        loang: "\u27EC",
        loarr: "\u21FD",
        lobrk: "\u27E6",
        LongLeftArrow: "\u27F5",
        Longleftarrow: "\u27F8",
        longleftarrow: "\u27F5",
        LongLeftRightArrow: "\u27F7",
        Longleftrightarrow: "\u27FA",
        longleftrightarrow: "\u27F7",
        longmapsto: "\u27FC",
        LongRightArrow: "\u27F6",
        Longrightarrow: "\u27F9",
        longrightarrow: "\u27F6",
        looparrowleft: "\u21AB",
        looparrowright: "\u21AC",
        lopar: "\u2985",
        Lopf: "\u{1D543}",
        lopf: "\u{1D55D}",
        loplus: "\u2A2D",
        lotimes: "\u2A34",
        lowast: "\u2217",
        lowbar: "_",
        LowerLeftArrow: "\u2199",
        LowerRightArrow: "\u2198",
        loz: "\u25CA",
        lozenge: "\u25CA",
        lozf: "\u29EB",
        lpar: "(",
        lparlt: "\u2993",
        lrarr: "\u21C6",
        lrcorner: "\u231F",
        lrhar: "\u21CB",
        lrhard: "\u296D",
        lrm: "\u200E",
        lrtri: "\u22BF",
        lsaquo: "\u2039",
        Lscr: "\u2112",
        lscr: "\u{1D4C1}",
        Lsh: "\u21B0",
        lsh: "\u21B0",
        lsim: "\u2272",
        lsime: "\u2A8D",
        lsimg: "\u2A8F",
        lsqb: "[",
        lsquo: "\u2018",
        lsquor: "\u201A",
        Lstrok: "\u0141",
        lstrok: "\u0142",
        Lt: "\u226A",
        LT: "<",
        lt: "<",
        ltcc: "\u2AA6",
        ltcir: "\u2A79",
        ltdot: "\u22D6",
        lthree: "\u22CB",
        ltimes: "\u22C9",
        ltlarr: "\u2976",
        ltquest: "\u2A7B",
        ltri: "\u25C3",
        ltrie: "\u22B4",
        ltrif: "\u25C2",
        ltrPar: "\u2996",
        lurdshar: "\u294A",
        luruhar: "\u2966",
        lvertneqq: "\u2268\uFE00",
        lvnE: "\u2268\uFE00",
        macr: "\xAF",
        male: "\u2642",
        malt: "\u2720",
        maltese: "\u2720",
        Map: "\u2905",
        map: "\u21A6",
        mapsto: "\u21A6",
        mapstodown: "\u21A7",
        mapstoleft: "\u21A4",
        mapstoup: "\u21A5",
        marker: "\u25AE",
        mcomma: "\u2A29",
        Mcy: "\u041C",
        mcy: "\u043C",
        mdash: "\u2014",
        mDDot: "\u223A",
        measuredangle: "\u2221",
        MediumSpace: "\u205F",
        Mellintrf: "\u2133",
        Mfr: "\u{1D510}",
        mfr: "\u{1D52A}",
        mho: "\u2127",
        micro: "\xB5",
        mid: "\u2223",
        midast: "*",
        midcir: "\u2AF0",
        middot: "\xB7",
        minus: "\u2212",
        minusb: "\u229F",
        minusd: "\u2238",
        minusdu: "\u2A2A",
        MinusPlus: "\u2213",
        mlcp: "\u2ADB",
        mldr: "\u2026",
        mnplus: "\u2213",
        models: "\u22A7",
        Mopf: "\u{1D544}",
        mopf: "\u{1D55E}",
        mp: "\u2213",
        Mscr: "\u2133",
        mscr: "\u{1D4C2}",
        mstpos: "\u223E",
        Mu: "\u039C",
        mu: "\u03BC",
        multimap: "\u22B8",
        mumap: "\u22B8",
        nabla: "\u2207",
        Nacute: "\u0143",
        nacute: "\u0144",
        nang: "\u2220\u20D2",
        nap: "\u2249",
        napE: "\u2A70\u0338",
        napid: "\u224B\u0338",
        napos: "\u0149",
        napprox: "\u2249",
        natur: "\u266E",
        natural: "\u266E",
        naturals: "\u2115",
        nbsp: "\xA0",
        nbump: "\u224E\u0338",
        nbumpe: "\u224F\u0338",
        ncap: "\u2A43",
        Ncaron: "\u0147",
        ncaron: "\u0148",
        Ncedil: "\u0145",
        ncedil: "\u0146",
        ncong: "\u2247",
        ncongdot: "\u2A6D\u0338",
        ncup: "\u2A42",
        Ncy: "\u041D",
        ncy: "\u043D",
        ndash: "\u2013",
        ne: "\u2260",
        nearhk: "\u2924",
        neArr: "\u21D7",
        nearr: "\u2197",
        nearrow: "\u2197",
        nedot: "\u2250\u0338",
        NegativeMediumSpace: "\u200B",
        NegativeThickSpace: "\u200B",
        NegativeThinSpace: "\u200B",
        NegativeVeryThinSpace: "\u200B",
        nequiv: "\u2262",
        nesear: "\u2928",
        nesim: "\u2242\u0338",
        NestedGreaterGreater: "\u226B",
        NestedLessLess: "\u226A",
        NewLine: "\n",
        nexist: "\u2204",
        nexists: "\u2204",
        Nfr: "\u{1D511}",
        nfr: "\u{1D52B}",
        ngE: "\u2267\u0338",
        nge: "\u2271",
        ngeq: "\u2271",
        ngeqq: "\u2267\u0338",
        ngeqslant: "\u2A7E\u0338",
        nges: "\u2A7E\u0338",
        nGg: "\u22D9\u0338",
        ngsim: "\u2275",
        nGt: "\u226B\u20D2",
        ngt: "\u226F",
        ngtr: "\u226F",
        nGtv: "\u226B\u0338",
        nhArr: "\u21CE",
        nharr: "\u21AE",
        nhpar: "\u2AF2",
        ni: "\u220B",
        nis: "\u22FC",
        nisd: "\u22FA",
        niv: "\u220B",
        NJcy: "\u040A",
        njcy: "\u045A",
        nlArr: "\u21CD",
        nlarr: "\u219A",
        nldr: "\u2025",
        nlE: "\u2266\u0338",
        nle: "\u2270",
        nLeftarrow: "\u21CD",
        nleftarrow: "\u219A",
        nLeftrightarrow: "\u21CE",
        nleftrightarrow: "\u21AE",
        nleq: "\u2270",
        nleqq: "\u2266\u0338",
        nleqslant: "\u2A7D\u0338",
        nles: "\u2A7D\u0338",
        nless: "\u226E",
        nLl: "\u22D8\u0338",
        nlsim: "\u2274",
        nLt: "\u226A\u20D2",
        nlt: "\u226E",
        nltri: "\u22EA",
        nltrie: "\u22EC",
        nLtv: "\u226A\u0338",
        nmid: "\u2224",
        NoBreak: "\u2060",
        NonBreakingSpace: "\xA0",
        Nopf: "\u2115",
        nopf: "\u{1D55F}",
        Not: "\u2AEC",
        not: "\xAC",
        NotCongruent: "\u2262",
        NotCupCap: "\u226D",
        NotDoubleVerticalBar: "\u2226",
        NotElement: "\u2209",
        NotEqual: "\u2260",
        NotEqualTilde: "\u2242\u0338",
        NotExists: "\u2204",
        NotGreater: "\u226F",
        NotGreaterEqual: "\u2271",
        NotGreaterFullEqual: "\u2267\u0338",
        NotGreaterGreater: "\u226B\u0338",
        NotGreaterLess: "\u2279",
        NotGreaterSlantEqual: "\u2A7E\u0338",
        NotGreaterTilde: "\u2275",
        NotHumpDownHump: "\u224E\u0338",
        NotHumpEqual: "\u224F\u0338",
        notin: "\u2209",
        notindot: "\u22F5\u0338",
        notinE: "\u22F9\u0338",
        notinva: "\u2209",
        notinvb: "\u22F7",
        notinvc: "\u22F6",
        NotLeftTriangle: "\u22EA",
        NotLeftTriangleBar: "\u29CF\u0338",
        NotLeftTriangleEqual: "\u22EC",
        NotLess: "\u226E",
        NotLessEqual: "\u2270",
        NotLessGreater: "\u2278",
        NotLessLess: "\u226A\u0338",
        NotLessSlantEqual: "\u2A7D\u0338",
        NotLessTilde: "\u2274",
        NotNestedGreaterGreater: "\u2AA2\u0338",
        NotNestedLessLess: "\u2AA1\u0338",
        notni: "\u220C",
        notniva: "\u220C",
        notnivb: "\u22FE",
        notnivc: "\u22FD",
        NotPrecedes: "\u2280",
        NotPrecedesEqual: "\u2AAF\u0338",
        NotPrecedesSlantEqual: "\u22E0",
        NotReverseElement: "\u220C",
        NotRightTriangle: "\u22EB",
        NotRightTriangleBar: "\u29D0\u0338",
        NotRightTriangleEqual: "\u22ED",
        NotSquareSubset: "\u228F\u0338",
        NotSquareSubsetEqual: "\u22E2",
        NotSquareSuperset: "\u2290\u0338",
        NotSquareSupersetEqual: "\u22E3",
        NotSubset: "\u2282\u20D2",
        NotSubsetEqual: "\u2288",
        NotSucceeds: "\u2281",
        NotSucceedsEqual: "\u2AB0\u0338",
        NotSucceedsSlantEqual: "\u22E1",
        NotSucceedsTilde: "\u227F\u0338",
        NotSuperset: "\u2283\u20D2",
        NotSupersetEqual: "\u2289",
        NotTilde: "\u2241",
        NotTildeEqual: "\u2244",
        NotTildeFullEqual: "\u2247",
        NotTildeTilde: "\u2249",
        NotVerticalBar: "\u2224",
        npar: "\u2226",
        nparallel: "\u2226",
        nparsl: "\u2AFD\u20E5",
        npart: "\u2202\u0338",
        npolint: "\u2A14",
        npr: "\u2280",
        nprcue: "\u22E0",
        npre: "\u2AAF\u0338",
        nprec: "\u2280",
        npreceq: "\u2AAF\u0338",
        nrArr: "\u21CF",
        nrarr: "\u219B",
        nrarrc: "\u2933\u0338",
        nrarrw: "\u219D\u0338",
        nRightarrow: "\u21CF",
        nrightarrow: "\u219B",
        nrtri: "\u22EB",
        nrtrie: "\u22ED",
        nsc: "\u2281",
        nsccue: "\u22E1",
        nsce: "\u2AB0\u0338",
        Nscr: "\u{1D4A9}",
        nscr: "\u{1D4C3}",
        nshortmid: "\u2224",
        nshortparallel: "\u2226",
        nsim: "\u2241",
        nsime: "\u2244",
        nsimeq: "\u2244",
        nsmid: "\u2224",
        nspar: "\u2226",
        nsqsube: "\u22E2",
        nsqsupe: "\u22E3",
        nsub: "\u2284",
        nsubE: "\u2AC5\u0338",
        nsube: "\u2288",
        nsubset: "\u2282\u20D2",
        nsubseteq: "\u2288",
        nsubseteqq: "\u2AC5\u0338",
        nsucc: "\u2281",
        nsucceq: "\u2AB0\u0338",
        nsup: "\u2285",
        nsupE: "\u2AC6\u0338",
        nsupe: "\u2289",
        nsupset: "\u2283\u20D2",
        nsupseteq: "\u2289",
        nsupseteqq: "\u2AC6\u0338",
        ntgl: "\u2279",
        Ntilde: "\xD1",
        ntilde: "\xF1",
        ntlg: "\u2278",
        ntriangleleft: "\u22EA",
        ntrianglelefteq: "\u22EC",
        ntriangleright: "\u22EB",
        ntrianglerighteq: "\u22ED",
        Nu: "\u039D",
        nu: "\u03BD",
        num: "#",
        numero: "\u2116",
        numsp: "\u2007",
        nvap: "\u224D\u20D2",
        nVDash: "\u22AF",
        nVdash: "\u22AE",
        nvDash: "\u22AD",
        nvdash: "\u22AC",
        nvge: "\u2265\u20D2",
        nvgt: ">\u20D2",
        nvHarr: "\u2904",
        nvinfin: "\u29DE",
        nvlArr: "\u2902",
        nvle: "\u2264\u20D2",
        nvlt: "<\u20D2",
        nvltrie: "\u22B4\u20D2",
        nvrArr: "\u2903",
        nvrtrie: "\u22B5\u20D2",
        nvsim: "\u223C\u20D2",
        nwarhk: "\u2923",
        nwArr: "\u21D6",
        nwarr: "\u2196",
        nwarrow: "\u2196",
        nwnear: "\u2927",
        Oacute: "\xD3",
        oacute: "\xF3",
        oast: "\u229B",
        ocir: "\u229A",
        Ocirc: "\xD4",
        ocirc: "\xF4",
        Ocy: "\u041E",
        ocy: "\u043E",
        odash: "\u229D",
        Odblac: "\u0150",
        odblac: "\u0151",
        odiv: "\u2A38",
        odot: "\u2299",
        odsold: "\u29BC",
        OElig: "\u0152",
        oelig: "\u0153",
        ofcir: "\u29BF",
        Ofr: "\u{1D512}",
        ofr: "\u{1D52C}",
        ogon: "\u02DB",
        Ograve: "\xD2",
        ograve: "\xF2",
        ogt: "\u29C1",
        ohbar: "\u29B5",
        ohm: "\u03A9",
        oint: "\u222E",
        olarr: "\u21BA",
        olcir: "\u29BE",
        olcross: "\u29BB",
        oline: "\u203E",
        olt: "\u29C0",
        Omacr: "\u014C",
        omacr: "\u014D",
        Omega: "\u03A9",
        omega: "\u03C9",
        Omicron: "\u039F",
        omicron: "\u03BF",
        omid: "\u29B6",
        ominus: "\u2296",
        Oopf: "\u{1D546}",
        oopf: "\u{1D560}",
        opar: "\u29B7",
        OpenCurlyDoubleQuote: "\u201C",
        OpenCurlyQuote: "\u2018",
        operp: "\u29B9",
        oplus: "\u2295",
        Or: "\u2A54",
        or: "\u2228",
        orarr: "\u21BB",
        ord: "\u2A5D",
        order: "\u2134",
        orderof: "\u2134",
        ordf: "\xAA",
        ordm: "\xBA",
        origof: "\u22B6",
        oror: "\u2A56",
        orslope: "\u2A57",
        orv: "\u2A5B",
        oS: "\u24C8",
        Oscr: "\u{1D4AA}",
        oscr: "\u2134",
        Oslash: "\xD8",
        oslash: "\xF8",
        osol: "\u2298",
        Otilde: "\xD5",
        otilde: "\xF5",
        Otimes: "\u2A37",
        otimes: "\u2297",
        otimesas: "\u2A36",
        Ouml: "\xD6",
        ouml: "\xF6",
        ovbar: "\u233D",
        OverBar: "\u203E",
        OverBrace: "\u23DE",
        OverBracket: "\u23B4",
        OverParenthesis: "\u23DC",
        par: "\u2225",
        para: "\xB6",
        parallel: "\u2225",
        parsim: "\u2AF3",
        parsl: "\u2AFD",
        part: "\u2202",
        PartialD: "\u2202",
        Pcy: "\u041F",
        pcy: "\u043F",
        percnt: "%",
        period: ".",
        permil: "\u2030",
        perp: "\u22A5",
        pertenk: "\u2031",
        Pfr: "\u{1D513}",
        pfr: "\u{1D52D}",
        Phi: "\u03A6",
        phi: "\u03C6",
        phiv: "\u03D5",
        phmmat: "\u2133",
        phone: "\u260E",
        Pi: "\u03A0",
        pi: "\u03C0",
        pitchfork: "\u22D4",
        piv: "\u03D6",
        planck: "\u210F",
        planckh: "\u210E",
        plankv: "\u210F",
        plus: "+",
        plusacir: "\u2A23",
        plusb: "\u229E",
        pluscir: "\u2A22",
        plusdo: "\u2214",
        plusdu: "\u2A25",
        pluse: "\u2A72",
        PlusMinus: "\xB1",
        plusmn: "\xB1",
        plussim: "\u2A26",
        plustwo: "\u2A27",
        pm: "\xB1",
        Poincareplane: "\u210C",
        pointint: "\u2A15",
        Popf: "\u2119",
        popf: "\u{1D561}",
        pound: "\xA3",
        Pr: "\u2ABB",
        pr: "\u227A",
        prap: "\u2AB7",
        prcue: "\u227C",
        prE: "\u2AB3",
        pre: "\u2AAF",
        prec: "\u227A",
        precapprox: "\u2AB7",
        preccurlyeq: "\u227C",
        Precedes: "\u227A",
        PrecedesEqual: "\u2AAF",
        PrecedesSlantEqual: "\u227C",
        PrecedesTilde: "\u227E",
        preceq: "\u2AAF",
        precnapprox: "\u2AB9",
        precneqq: "\u2AB5",
        precnsim: "\u22E8",
        precsim: "\u227E",
        Prime: "\u2033",
        prime: "\u2032",
        primes: "\u2119",
        prnap: "\u2AB9",
        prnE: "\u2AB5",
        prnsim: "\u22E8",
        prod: "\u220F",
        Product: "\u220F",
        profalar: "\u232E",
        profline: "\u2312",
        profsurf: "\u2313",
        prop: "\u221D",
        Proportion: "\u2237",
        Proportional: "\u221D",
        propto: "\u221D",
        prsim: "\u227E",
        prurel: "\u22B0",
        Pscr: "\u{1D4AB}",
        pscr: "\u{1D4C5}",
        Psi: "\u03A8",
        psi: "\u03C8",
        puncsp: "\u2008",
        Qfr: "\u{1D514}",
        qfr: "\u{1D52E}",
        qint: "\u2A0C",
        Qopf: "\u211A",
        qopf: "\u{1D562}",
        qprime: "\u2057",
        Qscr: "\u{1D4AC}",
        qscr: "\u{1D4C6}",
        quaternions: "\u210D",
        quatint: "\u2A16",
        quest: "?",
        questeq: "\u225F",
        QUOT: '"',
        quot: '"',
        rAarr: "\u21DB",
        race: "\u223D\u0331",
        Racute: "\u0154",
        racute: "\u0155",
        radic: "\u221A",
        raemptyv: "\u29B3",
        Rang: "\u27EB",
        rang: "\u27E9",
        rangd: "\u2992",
        range: "\u29A5",
        rangle: "\u27E9",
        raquo: "\xBB",
        Rarr: "\u21A0",
        rArr: "\u21D2",
        rarr: "\u2192",
        rarrap: "\u2975",
        rarrb: "\u21E5",
        rarrbfs: "\u2920",
        rarrc: "\u2933",
        rarrfs: "\u291E",
        rarrhk: "\u21AA",
        rarrlp: "\u21AC",
        rarrpl: "\u2945",
        rarrsim: "\u2974",
        Rarrtl: "\u2916",
        rarrtl: "\u21A3",
        rarrw: "\u219D",
        rAtail: "\u291C",
        ratail: "\u291A",
        ratio: "\u2236",
        rationals: "\u211A",
        RBarr: "\u2910",
        rBarr: "\u290F",
        rbarr: "\u290D",
        rbbrk: "\u2773",
        rbrace: "}",
        rbrack: "]",
        rbrke: "\u298C",
        rbrksld: "\u298E",
        rbrkslu: "\u2990",
        Rcaron: "\u0158",
        rcaron: "\u0159",
        Rcedil: "\u0156",
        rcedil: "\u0157",
        rceil: "\u2309",
        rcub: "}",
        Rcy: "\u0420",
        rcy: "\u0440",
        rdca: "\u2937",
        rdldhar: "\u2969",
        rdquo: "\u201D",
        rdquor: "\u201D",
        rdsh: "\u21B3",
        Re: "\u211C",
        real: "\u211C",
        realine: "\u211B",
        realpart: "\u211C",
        reals: "\u211D",
        rect: "\u25AD",
        REG: "\xAE",
        reg: "\xAE",
        ReverseElement: "\u220B",
        ReverseEquilibrium: "\u21CB",
        ReverseUpEquilibrium: "\u296F",
        rfisht: "\u297D",
        rfloor: "\u230B",
        Rfr: "\u211C",
        rfr: "\u{1D52F}",
        rHar: "\u2964",
        rhard: "\u21C1",
        rharu: "\u21C0",
        rharul: "\u296C",
        Rho: "\u03A1",
        rho: "\u03C1",
        rhov: "\u03F1",
        RightAngleBracket: "\u27E9",
        RightArrow: "\u2192",
        Rightarrow: "\u21D2",
        rightarrow: "\u2192",
        RightArrowBar: "\u21E5",
        RightArrowLeftArrow: "\u21C4",
        rightarrowtail: "\u21A3",
        RightCeiling: "\u2309",
        RightDoubleBracket: "\u27E7",
        RightDownTeeVector: "\u295D",
        RightDownVector: "\u21C2",
        RightDownVectorBar: "\u2955",
        RightFloor: "\u230B",
        rightharpoondown: "\u21C1",
        rightharpoonup: "\u21C0",
        rightleftarrows: "\u21C4",
        rightleftharpoons: "\u21CC",
        rightrightarrows: "\u21C9",
        rightsquigarrow: "\u219D",
        RightTee: "\u22A2",
        RightTeeArrow: "\u21A6",
        RightTeeVector: "\u295B",
        rightthreetimes: "\u22CC",
        RightTriangle: "\u22B3",
        RightTriangleBar: "\u29D0",
        RightTriangleEqual: "\u22B5",
        RightUpDownVector: "\u294F",
        RightUpTeeVector: "\u295C",
        RightUpVector: "\u21BE",
        RightUpVectorBar: "\u2954",
        RightVector: "\u21C0",
        RightVectorBar: "\u2953",
        ring: "\u02DA",
        risingdotseq: "\u2253",
        rlarr: "\u21C4",
        rlhar: "\u21CC",
        rlm: "\u200F",
        rmoust: "\u23B1",
        rmoustache: "\u23B1",
        rnmid: "\u2AEE",
        roang: "\u27ED",
        roarr: "\u21FE",
        robrk: "\u27E7",
        ropar: "\u2986",
        Ropf: "\u211D",
        ropf: "\u{1D563}",
        roplus: "\u2A2E",
        rotimes: "\u2A35",
        RoundImplies: "\u2970",
        rpar: ")",
        rpargt: "\u2994",
        rppolint: "\u2A12",
        rrarr: "\u21C9",
        Rrightarrow: "\u21DB",
        rsaquo: "\u203A",
        Rscr: "\u211B",
        rscr: "\u{1D4C7}",
        Rsh: "\u21B1",
        rsh: "\u21B1",
        rsqb: "]",
        rsquo: "\u2019",
        rsquor: "\u2019",
        rthree: "\u22CC",
        rtimes: "\u22CA",
        rtri: "\u25B9",
        rtrie: "\u22B5",
        rtrif: "\u25B8",
        rtriltri: "\u29CE",
        RuleDelayed: "\u29F4",
        ruluhar: "\u2968",
        rx: "\u211E",
        Sacute: "\u015A",
        sacute: "\u015B",
        sbquo: "\u201A",
        Sc: "\u2ABC",
        sc: "\u227B",
        scap: "\u2AB8",
        Scaron: "\u0160",
        scaron: "\u0161",
        sccue: "\u227D",
        scE: "\u2AB4",
        sce: "\u2AB0",
        Scedil: "\u015E",
        scedil: "\u015F",
        Scirc: "\u015C",
        scirc: "\u015D",
        scnap: "\u2ABA",
        scnE: "\u2AB6",
        scnsim: "\u22E9",
        scpolint: "\u2A13",
        scsim: "\u227F",
        Scy: "\u0421",
        scy: "\u0441",
        sdot: "\u22C5",
        sdotb: "\u22A1",
        sdote: "\u2A66",
        searhk: "\u2925",
        seArr: "\u21D8",
        searr: "\u2198",
        searrow: "\u2198",
        sect: "\xA7",
        semi: ";",
        seswar: "\u2929",
        setminus: "\u2216",
        setmn: "\u2216",
        sext: "\u2736",
        Sfr: "\u{1D516}",
        sfr: "\u{1D530}",
        sfrown: "\u2322",
        sharp: "\u266F",
        SHCHcy: "\u0429",
        shchcy: "\u0449",
        SHcy: "\u0428",
        shcy: "\u0448",
        ShortDownArrow: "\u2193",
        ShortLeftArrow: "\u2190",
        shortmid: "\u2223",
        shortparallel: "\u2225",
        ShortRightArrow: "\u2192",
        ShortUpArrow: "\u2191",
        shy: "\xAD",
        Sigma: "\u03A3",
        sigma: "\u03C3",
        sigmaf: "\u03C2",
        sigmav: "\u03C2",
        sim: "\u223C",
        simdot: "\u2A6A",
        sime: "\u2243",
        simeq: "\u2243",
        simg: "\u2A9E",
        simgE: "\u2AA0",
        siml: "\u2A9D",
        simlE: "\u2A9F",
        simne: "\u2246",
        simplus: "\u2A24",
        simrarr: "\u2972",
        slarr: "\u2190",
        SmallCircle: "\u2218",
        smallsetminus: "\u2216",
        smashp: "\u2A33",
        smeparsl: "\u29E4",
        smid: "\u2223",
        smile: "\u2323",
        smt: "\u2AAA",
        smte: "\u2AAC",
        smtes: "\u2AAC\uFE00",
        SOFTcy: "\u042C",
        softcy: "\u044C",
        sol: "/",
        solb: "\u29C4",
        solbar: "\u233F",
        Sopf: "\u{1D54A}",
        sopf: "\u{1D564}",
        spades: "\u2660",
        spadesuit: "\u2660",
        spar: "\u2225",
        sqcap: "\u2293",
        sqcaps: "\u2293\uFE00",
        sqcup: "\u2294",
        sqcups: "\u2294\uFE00",
        Sqrt: "\u221A",
        sqsub: "\u228F",
        sqsube: "\u2291",
        sqsubset: "\u228F",
        sqsubseteq: "\u2291",
        sqsup: "\u2290",
        sqsupe: "\u2292",
        sqsupset: "\u2290",
        sqsupseteq: "\u2292",
        squ: "\u25A1",
        Square: "\u25A1",
        square: "\u25A1",
        SquareIntersection: "\u2293",
        SquareSubset: "\u228F",
        SquareSubsetEqual: "\u2291",
        SquareSuperset: "\u2290",
        SquareSupersetEqual: "\u2292",
        SquareUnion: "\u2294",
        squarf: "\u25AA",
        squf: "\u25AA",
        srarr: "\u2192",
        Sscr: "\u{1D4AE}",
        sscr: "\u{1D4C8}",
        ssetmn: "\u2216",
        ssmile: "\u2323",
        sstarf: "\u22C6",
        Star: "\u22C6",
        star: "\u2606",
        starf: "\u2605",
        straightepsilon: "\u03F5",
        straightphi: "\u03D5",
        strns: "\xAF",
        Sub: "\u22D0",
        sub: "\u2282",
        subdot: "\u2ABD",
        subE: "\u2AC5",
        sube: "\u2286",
        subedot: "\u2AC3",
        submult: "\u2AC1",
        subnE: "\u2ACB",
        subne: "\u228A",
        subplus: "\u2ABF",
        subrarr: "\u2979",
        Subset: "\u22D0",
        subset: "\u2282",
        subseteq: "\u2286",
        subseteqq: "\u2AC5",
        SubsetEqual: "\u2286",
        subsetneq: "\u228A",
        subsetneqq: "\u2ACB",
        subsim: "\u2AC7",
        subsub: "\u2AD5",
        subsup: "\u2AD3",
        succ: "\u227B",
        succapprox: "\u2AB8",
        succcurlyeq: "\u227D",
        Succeeds: "\u227B",
        SucceedsEqual: "\u2AB0",
        SucceedsSlantEqual: "\u227D",
        SucceedsTilde: "\u227F",
        succeq: "\u2AB0",
        succnapprox: "\u2ABA",
        succneqq: "\u2AB6",
        succnsim: "\u22E9",
        succsim: "\u227F",
        SuchThat: "\u220B",
        Sum: "\u2211",
        sum: "\u2211",
        sung: "\u266A",
        Sup: "\u22D1",
        sup: "\u2283",
        sup1: "\xB9",
        sup2: "\xB2",
        sup3: "\xB3",
        supdot: "\u2ABE",
        supdsub: "\u2AD8",
        supE: "\u2AC6",
        supe: "\u2287",
        supedot: "\u2AC4",
        Superset: "\u2283",
        SupersetEqual: "\u2287",
        suphsol: "\u27C9",
        suphsub: "\u2AD7",
        suplarr: "\u297B",
        supmult: "\u2AC2",
        supnE: "\u2ACC",
        supne: "\u228B",
        supplus: "\u2AC0",
        Supset: "\u22D1",
        supset: "\u2283",
        supseteq: "\u2287",
        supseteqq: "\u2AC6",
        supsetneq: "\u228B",
        supsetneqq: "\u2ACC",
        supsim: "\u2AC8",
        supsub: "\u2AD4",
        supsup: "\u2AD6",
        swarhk: "\u2926",
        swArr: "\u21D9",
        swarr: "\u2199",
        swarrow: "\u2199",
        swnwar: "\u292A",
        szlig: "\xDF",
        Tab: "	",
        target: "\u2316",
        Tau: "\u03A4",
        tau: "\u03C4",
        tbrk: "\u23B4",
        Tcaron: "\u0164",
        tcaron: "\u0165",
        Tcedil: "\u0162",
        tcedil: "\u0163",
        Tcy: "\u0422",
        tcy: "\u0442",
        tdot: "\u20DB",
        telrec: "\u2315",
        Tfr: "\u{1D517}",
        tfr: "\u{1D531}",
        there4: "\u2234",
        Therefore: "\u2234",
        therefore: "\u2234",
        Theta: "\u0398",
        theta: "\u03B8",
        thetasym: "\u03D1",
        thetav: "\u03D1",
        thickapprox: "\u2248",
        thicksim: "\u223C",
        ThickSpace: "\u205F\u200A",
        thinsp: "\u2009",
        ThinSpace: "\u2009",
        thkap: "\u2248",
        thksim: "\u223C",
        THORN: "\xDE",
        thorn: "\xFE",
        Tilde: "\u223C",
        tilde: "\u02DC",
        TildeEqual: "\u2243",
        TildeFullEqual: "\u2245",
        TildeTilde: "\u2248",
        times: "\xD7",
        timesb: "\u22A0",
        timesbar: "\u2A31",
        timesd: "\u2A30",
        tint: "\u222D",
        toea: "\u2928",
        top: "\u22A4",
        topbot: "\u2336",
        topcir: "\u2AF1",
        Topf: "\u{1D54B}",
        topf: "\u{1D565}",
        topfork: "\u2ADA",
        tosa: "\u2929",
        tprime: "\u2034",
        TRADE: "\u2122",
        trade: "\u2122",
        triangle: "\u25B5",
        triangledown: "\u25BF",
        triangleleft: "\u25C3",
        trianglelefteq: "\u22B4",
        triangleq: "\u225C",
        triangleright: "\u25B9",
        trianglerighteq: "\u22B5",
        tridot: "\u25EC",
        trie: "\u225C",
        triminus: "\u2A3A",
        TripleDot: "\u20DB",
        triplus: "\u2A39",
        trisb: "\u29CD",
        tritime: "\u2A3B",
        trpezium: "\u23E2",
        Tscr: "\u{1D4AF}",
        tscr: "\u{1D4C9}",
        TScy: "\u0426",
        tscy: "\u0446",
        TSHcy: "\u040B",
        tshcy: "\u045B",
        Tstrok: "\u0166",
        tstrok: "\u0167",
        twixt: "\u226C",
        twoheadleftarrow: "\u219E",
        twoheadrightarrow: "\u21A0",
        Uacute: "\xDA",
        uacute: "\xFA",
        Uarr: "\u219F",
        uArr: "\u21D1",
        uarr: "\u2191",
        Uarrocir: "\u2949",
        Ubrcy: "\u040E",
        ubrcy: "\u045E",
        Ubreve: "\u016C",
        ubreve: "\u016D",
        Ucirc: "\xDB",
        ucirc: "\xFB",
        Ucy: "\u0423",
        ucy: "\u0443",
        udarr: "\u21C5",
        Udblac: "\u0170",
        udblac: "\u0171",
        udhar: "\u296E",
        ufisht: "\u297E",
        Ufr: "\u{1D518}",
        ufr: "\u{1D532}",
        Ugrave: "\xD9",
        ugrave: "\xF9",
        uHar: "\u2963",
        uharl: "\u21BF",
        uharr: "\u21BE",
        uhblk: "\u2580",
        ulcorn: "\u231C",
        ulcorner: "\u231C",
        ulcrop: "\u230F",
        ultri: "\u25F8",
        Umacr: "\u016A",
        umacr: "\u016B",
        uml: "\xA8",
        UnderBar: "_",
        UnderBrace: "\u23DF",
        UnderBracket: "\u23B5",
        UnderParenthesis: "\u23DD",
        Union: "\u22C3",
        UnionPlus: "\u228E",
        Uogon: "\u0172",
        uogon: "\u0173",
        Uopf: "\u{1D54C}",
        uopf: "\u{1D566}",
        UpArrow: "\u2191",
        Uparrow: "\u21D1",
        uparrow: "\u2191",
        UpArrowBar: "\u2912",
        UpArrowDownArrow: "\u21C5",
        UpDownArrow: "\u2195",
        Updownarrow: "\u21D5",
        updownarrow: "\u2195",
        UpEquilibrium: "\u296E",
        upharpoonleft: "\u21BF",
        upharpoonright: "\u21BE",
        uplus: "\u228E",
        UpperLeftArrow: "\u2196",
        UpperRightArrow: "\u2197",
        Upsi: "\u03D2",
        upsi: "\u03C5",
        upsih: "\u03D2",
        Upsilon: "\u03A5",
        upsilon: "\u03C5",
        UpTee: "\u22A5",
        UpTeeArrow: "\u21A5",
        upuparrows: "\u21C8",
        urcorn: "\u231D",
        urcorner: "\u231D",
        urcrop: "\u230E",
        Uring: "\u016E",
        uring: "\u016F",
        urtri: "\u25F9",
        Uscr: "\u{1D4B0}",
        uscr: "\u{1D4CA}",
        utdot: "\u22F0",
        Utilde: "\u0168",
        utilde: "\u0169",
        utri: "\u25B5",
        utrif: "\u25B4",
        uuarr: "\u21C8",
        Uuml: "\xDC",
        uuml: "\xFC",
        uwangle: "\u29A7",
        vangrt: "\u299C",
        varepsilon: "\u03F5",
        varkappa: "\u03F0",
        varnothing: "\u2205",
        varphi: "\u03D5",
        varpi: "\u03D6",
        varpropto: "\u221D",
        vArr: "\u21D5",
        varr: "\u2195",
        varrho: "\u03F1",
        varsigma: "\u03C2",
        varsubsetneq: "\u228A\uFE00",
        varsubsetneqq: "\u2ACB\uFE00",
        varsupsetneq: "\u228B\uFE00",
        varsupsetneqq: "\u2ACC\uFE00",
        vartheta: "\u03D1",
        vartriangleleft: "\u22B2",
        vartriangleright: "\u22B3",
        Vbar: "\u2AEB",
        vBar: "\u2AE8",
        vBarv: "\u2AE9",
        Vcy: "\u0412",
        vcy: "\u0432",
        VDash: "\u22AB",
        Vdash: "\u22A9",
        vDash: "\u22A8",
        vdash: "\u22A2",
        Vdashl: "\u2AE6",
        Vee: "\u22C1",
        vee: "\u2228",
        veebar: "\u22BB",
        veeeq: "\u225A",
        vellip: "\u22EE",
        Verbar: "\u2016",
        verbar: "|",
        Vert: "\u2016",
        vert: "|",
        VerticalBar: "\u2223",
        VerticalLine: "|",
        VerticalSeparator: "\u2758",
        VerticalTilde: "\u2240",
        VeryThinSpace: "\u200A",
        Vfr: "\u{1D519}",
        vfr: "\u{1D533}",
        vltri: "\u22B2",
        vnsub: "\u2282\u20D2",
        vnsup: "\u2283\u20D2",
        Vopf: "\u{1D54D}",
        vopf: "\u{1D567}",
        vprop: "\u221D",
        vrtri: "\u22B3",
        Vscr: "\u{1D4B1}",
        vscr: "\u{1D4CB}",
        vsubnE: "\u2ACB\uFE00",
        vsubne: "\u228A\uFE00",
        vsupnE: "\u2ACC\uFE00",
        vsupne: "\u228B\uFE00",
        Vvdash: "\u22AA",
        vzigzag: "\u299A",
        Wcirc: "\u0174",
        wcirc: "\u0175",
        wedbar: "\u2A5F",
        Wedge: "\u22C0",
        wedge: "\u2227",
        wedgeq: "\u2259",
        weierp: "\u2118",
        Wfr: "\u{1D51A}",
        wfr: "\u{1D534}",
        Wopf: "\u{1D54E}",
        wopf: "\u{1D568}",
        wp: "\u2118",
        wr: "\u2240",
        wreath: "\u2240",
        Wscr: "\u{1D4B2}",
        wscr: "\u{1D4CC}",
        xcap: "\u22C2",
        xcirc: "\u25EF",
        xcup: "\u22C3",
        xdtri: "\u25BD",
        Xfr: "\u{1D51B}",
        xfr: "\u{1D535}",
        xhArr: "\u27FA",
        xharr: "\u27F7",
        Xi: "\u039E",
        xi: "\u03BE",
        xlArr: "\u27F8",
        xlarr: "\u27F5",
        xmap: "\u27FC",
        xnis: "\u22FB",
        xodot: "\u2A00",
        Xopf: "\u{1D54F}",
        xopf: "\u{1D569}",
        xoplus: "\u2A01",
        xotime: "\u2A02",
        xrArr: "\u27F9",
        xrarr: "\u27F6",
        Xscr: "\u{1D4B3}",
        xscr: "\u{1D4CD}",
        xsqcup: "\u2A06",
        xuplus: "\u2A04",
        xutri: "\u25B3",
        xvee: "\u22C1",
        xwedge: "\u22C0",
        Yacute: "\xDD",
        yacute: "\xFD",
        YAcy: "\u042F",
        yacy: "\u044F",
        Ycirc: "\u0176",
        ycirc: "\u0177",
        Ycy: "\u042B",
        ycy: "\u044B",
        yen: "\xA5",
        Yfr: "\u{1D51C}",
        yfr: "\u{1D536}",
        YIcy: "\u0407",
        yicy: "\u0457",
        Yopf: "\u{1D550}",
        yopf: "\u{1D56A}",
        Yscr: "\u{1D4B4}",
        yscr: "\u{1D4CE}",
        YUcy: "\u042E",
        yucy: "\u044E",
        Yuml: "\u0178",
        yuml: "\xFF",
        Zacute: "\u0179",
        zacute: "\u017A",
        Zcaron: "\u017D",
        zcaron: "\u017E",
        Zcy: "\u0417",
        zcy: "\u0437",
        Zdot: "\u017B",
        zdot: "\u017C",
        zeetrf: "\u2128",
        ZeroWidthSpace: "\u200B",
        Zeta: "\u0396",
        zeta: "\u03B6",
        Zfr: "\u2128",
        zfr: "\u{1D537}",
        ZHcy: "\u0416",
        zhcy: "\u0436",
        zigrarr: "\u21DD",
        Zopf: "\u2124",
        zopf: "\u{1D56B}",
        Zscr: "\u{1D4B5}",
        zscr: "\u{1D4CF}",
        zwj: "\u200D",
        zwnj: "\u200C"
      });
      exports.entityMap = exports.HTML_ENTITIES;
    }
  });

  // node_modules/@xmldom/xmldom/lib/sax.js
  var require_sax = __commonJS({
    "node_modules/@xmldom/xmldom/lib/sax.js"(exports) {
      "use strict";
      var conventions = require_conventions();
      var g = require_grammar();
      var errors = require_errors();
      var isHTMLEscapableRawTextElement = conventions.isHTMLEscapableRawTextElement;
      var isHTMLMimeType = conventions.isHTMLMimeType;
      var isHTMLRawTextElement = conventions.isHTMLRawTextElement;
      var hasOwn = conventions.hasOwn;
      var NAMESPACE = conventions.NAMESPACE;
      var ParseError = errors.ParseError;
      var DOMException = errors.DOMException;
      var S_TAG = 0;
      var S_ATTR = 1;
      var S_ATTR_SPACE = 2;
      var S_EQ = 3;
      var S_ATTR_NOQUOT_VALUE = 4;
      var S_ATTR_END = 5;
      var S_TAG_SPACE = 6;
      var S_TAG_CLOSE = 7;
      function XMLReader() {
      }
      XMLReader.prototype = {
        parse: function(source, defaultNSMap, entityMap) {
          var domBuilder = this.domBuilder;
          domBuilder.startDocument();
          _copy(defaultNSMap, defaultNSMap = /* @__PURE__ */ Object.create(null));
          parse2(source, defaultNSMap, entityMap, domBuilder, this.errorHandler);
          domBuilder.endDocument();
        }
      };
      var ENTITY_REG = /&#?\w+;?/g;
      function parse2(source, defaultNSMapCopy, entityMap, domBuilder, errorHandler) {
        var isHTML = isHTMLMimeType(domBuilder.mimeType);
        if (source.indexOf(g.UNICODE_REPLACEMENT_CHARACTER) >= 0) {
          errorHandler.warning("Unicode replacement character detected, source encoding issues?");
        }
        function fixedFromCharCode(code) {
          if (code > 65535) {
            code -= 65536;
            var surrogate1 = 55296 + (code >> 10), surrogate2 = 56320 + (code & 1023);
            return String.fromCharCode(surrogate1, surrogate2);
          } else {
            return String.fromCharCode(code);
          }
        }
        function entityReplacer(a2) {
          var complete = a2[a2.length - 1] === ";" ? a2 : a2 + ";";
          if (!isHTML && complete !== a2) {
            errorHandler.error("EntityRef: expecting ;");
            return a2;
          }
          var match = g.Reference.exec(complete);
          if (!match || match[0].length !== complete.length) {
            errorHandler.error("entity not matching Reference production: " + a2);
            return a2;
          }
          var k = complete.slice(1, -1);
          if (hasOwn(entityMap, k)) {
            return entityMap[k];
          } else if (k.charAt(0) === "#") {
            return fixedFromCharCode(parseInt(k.substring(1).replace("x", "0x")));
          } else {
            errorHandler.error("entity not found:" + a2);
            return a2;
          }
        }
        function appendText(end2) {
          if (end2 > start) {
            var xt = source.substring(start, end2).replace(ENTITY_REG, entityReplacer);
            locator && position(start);
            domBuilder.characters(xt, 0, end2 - start);
            start = end2;
          }
        }
        var lineStart = 0;
        var lineEnd = 0;
        var linePattern = /\r\n?|\n|$/g;
        var locator = domBuilder.locator;
        function position(p, m) {
          while (p >= lineEnd && (m = linePattern.exec(source))) {
            lineStart = lineEnd;
            lineEnd = m.index + m[0].length;
            locator.lineNumber++;
          }
          locator.columnNumber = p - lineStart + 1;
        }
        var parseStack = [{ currentNSMap: defaultNSMapCopy }];
        var unclosedTags = [];
        var start = 0;
        while (true) {
          try {
            var tagStart = source.indexOf("<", start);
            if (tagStart < 0) {
              if (!isHTML && unclosedTags.length > 0) {
                return errorHandler.fatalError("unclosed xml tag(s): " + unclosedTags.join(", "));
              }
              if (!source.substring(start).match(/^\s*$/)) {
                var doc = domBuilder.doc;
                var text = doc.createTextNode(source.substring(start));
                if (doc.documentElement) {
                  return errorHandler.error("Extra content at the end of the document");
                }
                doc.appendChild(text);
                domBuilder.currentElement = text;
              }
              return;
            }
            if (tagStart > start) {
              var fromSource = source.substring(start, tagStart);
              if (!isHTML && unclosedTags.length === 0) {
                fromSource = fromSource.replace(new RegExp(g.S_OPT.source, "g"), "");
                fromSource && errorHandler.error("Unexpected content outside root element: '" + fromSource + "'");
              }
              appendText(tagStart);
            }
            switch (source.charAt(tagStart + 1)) {
              case "/":
                var end = source.indexOf(">", tagStart + 2);
                var tagNameRaw = source.substring(tagStart + 2, end > 0 ? end : void 0);
                if (!tagNameRaw) {
                  return errorHandler.fatalError("end tag name missing");
                }
                var tagNameMatch = end > 0 && g.reg("^", g.QName_group, g.S_OPT, "$").exec(tagNameRaw);
                if (!tagNameMatch) {
                  return errorHandler.fatalError('end tag name contains invalid characters: "' + tagNameRaw + '"');
                }
                if (!domBuilder.currentElement && !domBuilder.doc.documentElement) {
                  return;
                }
                var currentTagName = unclosedTags[unclosedTags.length - 1] || domBuilder.currentElement.tagName || domBuilder.doc.documentElement.tagName || "";
                if (currentTagName !== tagNameMatch[1]) {
                  var tagNameLower = tagNameMatch[1].toLowerCase();
                  if (!isHTML || currentTagName.toLowerCase() !== tagNameLower) {
                    return errorHandler.fatalError('Opening and ending tag mismatch: "' + currentTagName + '" != "' + tagNameRaw + '"');
                  }
                }
                var config = parseStack.pop();
                unclosedTags.pop();
                var localNSMap = config.localNSMap;
                domBuilder.endElement(config.uri, config.localName, currentTagName);
                if (localNSMap) {
                  for (var prefix in localNSMap) {
                    if (hasOwn(localNSMap, prefix)) {
                      domBuilder.endPrefixMapping(prefix);
                    }
                  }
                }
                end++;
                break;
              // end element
              case "?":
                locator && position(tagStart);
                end = parseProcessingInstruction(source, tagStart, domBuilder, errorHandler);
                break;
              case "!":
                locator && position(tagStart);
                end = parseDoctypeCommentOrCData(source, tagStart, domBuilder, errorHandler, isHTML);
                break;
              default:
                locator && position(tagStart);
                var el = new ElementAttributes();
                var currentNSMap = parseStack[parseStack.length - 1].currentNSMap;
                var end = parseElementStartPart(source, tagStart, el, currentNSMap, entityReplacer, errorHandler, isHTML);
                var len = el.length;
                if (!el.closed) {
                  if (isHTML && conventions.isHTMLVoidElement(el.tagName)) {
                    el.closed = true;
                  } else {
                    unclosedTags.push(el.tagName);
                  }
                }
                if (locator && len) {
                  var locator2 = copyLocator(locator, {});
                  for (var i = 0; i < len; i++) {
                    var a = el[i];
                    position(a.offset);
                    a.locator = copyLocator(locator, {});
                  }
                  domBuilder.locator = locator2;
                  if (appendElement(el, domBuilder, currentNSMap)) {
                    parseStack.push(el);
                  }
                  domBuilder.locator = locator;
                } else {
                  if (appendElement(el, domBuilder, currentNSMap)) {
                    parseStack.push(el);
                  }
                }
                if (isHTML && !el.closed) {
                  end = parseHtmlSpecialContent(source, end, el.tagName, entityReplacer, domBuilder);
                } else {
                  end++;
                }
            }
          } catch (e) {
            if (e instanceof ParseError) {
              throw e;
            } else if (e instanceof DOMException) {
              throw new ParseError(e.name + ": " + e.message, domBuilder.locator, e);
            }
            errorHandler.error("element parse error: " + e);
            end = -1;
          }
          if (end > start) {
            start = end;
          } else {
            appendText(Math.max(tagStart, start) + 1);
          }
        }
      }
      function copyLocator(f, t) {
        t.lineNumber = f.lineNumber;
        t.columnNumber = f.columnNumber;
        return t;
      }
      function parseElementStartPart(source, start, el, currentNSMap, entityReplacer, errorHandler, isHTML) {
        function addAttribute(qname, value2, startIndex) {
          if (hasOwn(el.attributeNames, qname)) {
            return errorHandler.fatalError("Attribute " + qname + " redefined");
          }
          if (!isHTML && value2.indexOf("<") >= 0) {
            return errorHandler.fatalError("Unescaped '<' not allowed in attributes values");
          }
          el.addValue(
            qname,
            // @see https://www.w3.org/TR/xml/#AVNormalize
            // since the xmldom sax parser does not "interpret" DTD the following is not implemented:
            // - recursive replacement of (DTD) entity references
            // - trimming and collapsing multiple spaces into a single one for attributes that are not of type CDATA
            value2.replace(/[\t\n\r]/g, " ").replace(ENTITY_REG, entityReplacer),
            startIndex
          );
        }
        var attrName;
        var value;
        var p = ++start;
        var s = S_TAG;
        while (true) {
          var c = source.charAt(p);
          switch (c) {
            case "=":
              if (s === S_ATTR) {
                attrName = source.slice(start, p);
                s = S_EQ;
              } else if (s === S_ATTR_SPACE) {
                s = S_EQ;
              } else {
                throw new Error("attribute equal must after attrName");
              }
              break;
            case "'":
            case '"':
              if (s === S_EQ || s === S_ATTR) {
                if (s === S_ATTR) {
                  errorHandler.warning('attribute value must after "="');
                  attrName = source.slice(start, p);
                }
                start = p + 1;
                p = source.indexOf(c, start);
                if (p > 0) {
                  value = source.slice(start, p);
                  addAttribute(attrName, value, start - 1);
                  s = S_ATTR_END;
                } else {
                  throw new Error("attribute value no end '" + c + "' match");
                }
              } else if (s == S_ATTR_NOQUOT_VALUE) {
                value = source.slice(start, p);
                addAttribute(attrName, value, start);
                errorHandler.warning('attribute "' + attrName + '" missed start quot(' + c + ")!!");
                start = p + 1;
                s = S_ATTR_END;
              } else {
                throw new Error('attribute value must after "="');
              }
              break;
            case "/":
              switch (s) {
                case S_TAG:
                  el.setTagName(source.slice(start, p));
                case S_ATTR_END:
                case S_TAG_SPACE:
                case S_TAG_CLOSE:
                  s = S_TAG_CLOSE;
                  el.closed = true;
                case S_ATTR_NOQUOT_VALUE:
                case S_ATTR:
                  break;
                case S_ATTR_SPACE:
                  el.closed = true;
                  break;
                //case S_EQ:
                default:
                  throw new Error("attribute invalid close char('/')");
              }
              break;
            case "":
              errorHandler.error("unexpected end of input");
              if (s == S_TAG) {
                el.setTagName(source.slice(start, p));
              }
              return p;
            case ">":
              switch (s) {
                case S_TAG:
                  el.setTagName(source.slice(start, p));
                case S_ATTR_END:
                case S_TAG_SPACE:
                case S_TAG_CLOSE:
                  break;
                //normal
                case S_ATTR_NOQUOT_VALUE:
                //Compatible state
                case S_ATTR:
                  value = source.slice(start, p);
                  if (value.slice(-1) === "/") {
                    el.closed = true;
                    value = value.slice(0, -1);
                  }
                case S_ATTR_SPACE:
                  if (s === S_ATTR_SPACE) {
                    value = attrName;
                  }
                  if (s == S_ATTR_NOQUOT_VALUE) {
                    errorHandler.warning('attribute "' + value + '" missed quot(")!');
                    addAttribute(attrName, value, start);
                  } else {
                    if (!isHTML) {
                      errorHandler.warning('attribute "' + value + '" missed value!! "' + value + '" instead!!');
                    }
                    addAttribute(value, value, start);
                  }
                  break;
                case S_EQ:
                  if (!isHTML) {
                    return errorHandler.fatalError(`AttValue: ' or " expected`);
                  }
              }
              return p;
            /*xml space '\x20' | #x9 | #xD | #xA; */
            case "\x80":
              c = " ";
            default:
              if (c <= " ") {
                switch (s) {
                  case S_TAG:
                    el.setTagName(source.slice(start, p));
                    s = S_TAG_SPACE;
                    break;
                  case S_ATTR:
                    attrName = source.slice(start, p);
                    s = S_ATTR_SPACE;
                    break;
                  case S_ATTR_NOQUOT_VALUE:
                    var value = source.slice(start, p);
                    errorHandler.warning('attribute "' + value + '" missed quot(")!!');
                    addAttribute(attrName, value, start);
                  case S_ATTR_END:
                    s = S_TAG_SPACE;
                    break;
                }
              } else {
                switch (s) {
                  //case S_TAG:void();break;
                  //case S_ATTR:void();break;
                  //case S_ATTR_NOQUOT_VALUE:void();break;
                  case S_ATTR_SPACE:
                    if (!isHTML) {
                      errorHandler.warning('attribute "' + attrName + '" missed value!! "' + attrName + '" instead2!!');
                    }
                    addAttribute(attrName, attrName, start);
                    start = p;
                    s = S_ATTR;
                    break;
                  case S_ATTR_END:
                    errorHandler.warning('attribute space is required"' + attrName + '"!!');
                  case S_TAG_SPACE:
                    s = S_ATTR;
                    start = p;
                    break;
                  case S_EQ:
                    s = S_ATTR_NOQUOT_VALUE;
                    start = p;
                    break;
                  case S_TAG_CLOSE:
                    throw new Error("elements closed character '/' and '>' must be connected to");
                }
              }
          }
          p++;
        }
      }
      function appendElement(el, domBuilder, currentNSMap) {
        var tagName = el.tagName;
        var localNSMap = null;
        var i = el.length;
        while (i--) {
          var a = el[i];
          var qName = a.qName;
          var value = a.value;
          var nsp = qName.indexOf(":");
          if (nsp > 0) {
            var prefix = a.prefix = qName.slice(0, nsp);
            var localName = qName.slice(nsp + 1);
            var nsPrefix = prefix === "xmlns" && localName;
          } else {
            localName = qName;
            prefix = null;
            nsPrefix = qName === "xmlns" && "";
          }
          a.localName = localName;
          if (nsPrefix !== false) {
            if (localNSMap == null) {
              localNSMap = /* @__PURE__ */ Object.create(null);
              _copy(currentNSMap, currentNSMap = /* @__PURE__ */ Object.create(null));
            }
            currentNSMap[nsPrefix] = localNSMap[nsPrefix] = value;
            a.uri = NAMESPACE.XMLNS;
            domBuilder.startPrefixMapping(nsPrefix, value);
          }
        }
        var i = el.length;
        while (i--) {
          a = el[i];
          if (a.prefix) {
            if (a.prefix === "xml") {
              a.uri = NAMESPACE.XML;
            }
            if (a.prefix !== "xmlns") {
              a.uri = currentNSMap[a.prefix];
            }
          }
        }
        var nsp = tagName.indexOf(":");
        if (nsp > 0) {
          prefix = el.prefix = tagName.slice(0, nsp);
          localName = el.localName = tagName.slice(nsp + 1);
        } else {
          prefix = null;
          localName = el.localName = tagName;
        }
        var ns = el.uri = currentNSMap[prefix || ""];
        domBuilder.startElement(ns, localName, tagName, el);
        if (el.closed) {
          domBuilder.endElement(ns, localName, tagName);
          if (localNSMap) {
            for (prefix in localNSMap) {
              if (hasOwn(localNSMap, prefix)) {
                domBuilder.endPrefixMapping(prefix);
              }
            }
          }
        } else {
          el.currentNSMap = currentNSMap;
          el.localNSMap = localNSMap;
          return true;
        }
      }
      function parseHtmlSpecialContent(source, elStartEnd, tagName, entityReplacer, domBuilder) {
        var isEscapableRaw = isHTMLEscapableRawTextElement(tagName);
        if (isEscapableRaw || isHTMLRawTextElement(tagName)) {
          var elEndStart = source.indexOf("</" + tagName + ">", elStartEnd);
          var text = source.substring(elStartEnd + 1, elEndStart);
          if (isEscapableRaw) {
            text = text.replace(ENTITY_REG, entityReplacer);
          }
          domBuilder.characters(text, 0, text.length);
          return elEndStart;
        }
        return elStartEnd + 1;
      }
      function _copy(source, target) {
        for (var n in source) {
          if (hasOwn(source, n)) {
            target[n] = source[n];
          }
        }
      }
      function parseUtils(source, start) {
        var index = start;
        function char(n) {
          n = n || 0;
          return source.charAt(index + n);
        }
        function skip(n) {
          n = n || 1;
          index += n;
        }
        function skipBlanks() {
          var blanks = 0;
          while (index < source.length) {
            var c = char();
            if (c !== " " && c !== "\n" && c !== "	" && c !== "\r") {
              return blanks;
            }
            blanks++;
            skip();
          }
          return -1;
        }
        function substringFromIndex() {
          return source.substring(index);
        }
        function substringStartsWith(text) {
          return source.substring(index, index + text.length) === text;
        }
        function substringStartsWithCaseInsensitive(text) {
          return source.substring(index, index + text.length).toUpperCase() === text.toUpperCase();
        }
        function getMatch(args) {
          var expr = g.reg("^", args);
          var match = expr.exec(substringFromIndex());
          if (match) {
            skip(match[0].length);
            return match[0];
          }
          return null;
        }
        return {
          char,
          getIndex: function() {
            return index;
          },
          getMatch,
          getSource: function() {
            return source;
          },
          skip,
          skipBlanks,
          substringFromIndex,
          substringStartsWith,
          substringStartsWithCaseInsensitive
        };
      }
      function parseDoctypeInternalSubset(p, errorHandler) {
        function parsePI(p2, errorHandler2) {
          var match = g.PI.exec(p2.substringFromIndex());
          if (!match) {
            return errorHandler2.fatalError("processing instruction is not well-formed at position " + p2.getIndex());
          }
          if (match[1].toLowerCase() === "xml") {
            return errorHandler2.fatalError(
              "xml declaration is only allowed at the start of the document, but found at position " + p2.getIndex()
            );
          }
          p2.skip(match[0].length);
          return match[0];
        }
        var source = p.getSource();
        if (p.char() === "[") {
          p.skip(1);
          var intSubsetStart = p.getIndex();
          while (p.getIndex() < source.length) {
            p.skipBlanks();
            if (p.char() === "]") {
              var internalSubset = source.substring(intSubsetStart, p.getIndex());
              p.skip(1);
              return internalSubset;
            }
            var current = null;
            if (p.char() === "<" && p.char(1) === "!") {
              switch (p.char(2)) {
                case "E":
                  if (p.char(3) === "L") {
                    current = p.getMatch(g.elementdecl);
                  } else if (p.char(3) === "N") {
                    current = p.getMatch(g.EntityDecl);
                  }
                  break;
                case "A":
                  current = p.getMatch(g.AttlistDecl);
                  break;
                case "N":
                  current = p.getMatch(g.NotationDecl);
                  break;
                case "-":
                  current = p.getMatch(g.Comment);
                  break;
              }
            } else if (p.char() === "<" && p.char(1) === "?") {
              current = parsePI(p, errorHandler);
            } else if (p.char() === "%") {
              current = p.getMatch(g.PEReference);
            } else {
              return errorHandler.fatalError("Error detected in Markup declaration");
            }
            if (!current) {
              return errorHandler.fatalError("Error in internal subset at position " + p.getIndex());
            }
          }
          return errorHandler.fatalError("doctype internal subset is not well-formed, missing ]");
        }
      }
      function parseDoctypeCommentOrCData(source, start, domBuilder, errorHandler, isHTML) {
        var p = parseUtils(source, start);
        switch (isHTML ? p.char(2).toUpperCase() : p.char(2)) {
          case "-":
            var comment = p.getMatch(g.Comment);
            if (comment) {
              domBuilder.comment(comment, g.COMMENT_START.length, comment.length - g.COMMENT_START.length - g.COMMENT_END.length);
              return p.getIndex();
            } else {
              return errorHandler.fatalError("comment is not well-formed at position " + p.getIndex());
            }
          case "[":
            var cdata = p.getMatch(g.CDSect);
            if (cdata) {
              if (!isHTML && !domBuilder.currentElement) {
                return errorHandler.fatalError("CDATA outside of element");
              }
              domBuilder.startCDATA();
              domBuilder.characters(cdata, g.CDATA_START.length, cdata.length - g.CDATA_START.length - g.CDATA_END.length);
              domBuilder.endCDATA();
              return p.getIndex();
            } else {
              return errorHandler.fatalError("Invalid CDATA starting at position " + start);
            }
          case "D": {
            if (domBuilder.doc && domBuilder.doc.documentElement) {
              return errorHandler.fatalError("Doctype not allowed inside or after documentElement at position " + p.getIndex());
            }
            if (isHTML ? !p.substringStartsWithCaseInsensitive(g.DOCTYPE_DECL_START) : !p.substringStartsWith(g.DOCTYPE_DECL_START)) {
              return errorHandler.fatalError("Expected " + g.DOCTYPE_DECL_START + " at position " + p.getIndex());
            }
            p.skip(g.DOCTYPE_DECL_START.length);
            if (p.skipBlanks() < 1) {
              return errorHandler.fatalError("Expected whitespace after " + g.DOCTYPE_DECL_START + " at position " + p.getIndex());
            }
            var doctype = {
              name: void 0,
              publicId: void 0,
              systemId: void 0,
              internalSubset: void 0
            };
            doctype.name = p.getMatch(g.Name);
            if (!doctype.name)
              return errorHandler.fatalError("doctype name missing or contains unexpected characters at position " + p.getIndex());
            if (isHTML && doctype.name.toLowerCase() !== "html") {
              errorHandler.warning("Unexpected DOCTYPE in HTML document at position " + p.getIndex());
            }
            p.skipBlanks();
            if (p.substringStartsWith(g.PUBLIC) || p.substringStartsWith(g.SYSTEM)) {
              var match = g.ExternalID_match.exec(p.substringFromIndex());
              if (!match) {
                return errorHandler.fatalError("doctype external id is not well-formed at position " + p.getIndex());
              }
              if (match.groups.SystemLiteralOnly !== void 0) {
                doctype.systemId = match.groups.SystemLiteralOnly;
              } else {
                doctype.systemId = match.groups.SystemLiteral;
                doctype.publicId = match.groups.PubidLiteral;
              }
              p.skip(match[0].length);
            } else if (isHTML && p.substringStartsWithCaseInsensitive(g.SYSTEM)) {
              p.skip(g.SYSTEM.length);
              if (p.skipBlanks() < 1) {
                return errorHandler.fatalError("Expected whitespace after " + g.SYSTEM + " at position " + p.getIndex());
              }
              doctype.systemId = p.getMatch(g.ABOUT_LEGACY_COMPAT_SystemLiteral);
              if (!doctype.systemId) {
                return errorHandler.fatalError(
                  "Expected " + g.ABOUT_LEGACY_COMPAT + " in single or double quotes after " + g.SYSTEM + " at position " + p.getIndex()
                );
              }
            }
            if (isHTML && doctype.systemId && !g.ABOUT_LEGACY_COMPAT_SystemLiteral.test(doctype.systemId)) {
              errorHandler.warning("Unexpected doctype.systemId in HTML document at position " + p.getIndex());
            }
            if (!isHTML) {
              p.skipBlanks();
              doctype.internalSubset = parseDoctypeInternalSubset(p, errorHandler);
            }
            p.skipBlanks();
            if (p.char() !== ">") {
              return errorHandler.fatalError("doctype not terminated with > at position " + p.getIndex());
            }
            p.skip(1);
            domBuilder.startDTD(doctype.name, doctype.publicId, doctype.systemId, doctype.internalSubset);
            domBuilder.endDTD();
            return p.getIndex();
          }
          default:
            return errorHandler.fatalError('Not well-formed XML starting with "<!" at position ' + start);
        }
      }
      function parseProcessingInstruction(source, start, domBuilder, errorHandler) {
        var match = source.substring(start).match(g.PI);
        if (!match) {
          return errorHandler.fatalError("Invalid processing instruction starting at position " + start);
        }
        if (match[1].toLowerCase() === "xml") {
          if (start > 0) {
            return errorHandler.fatalError(
              "processing instruction at position " + start + " is an xml declaration which is only at the start of the document"
            );
          }
          if (!g.XMLDecl.test(source.substring(start))) {
            return errorHandler.fatalError("xml declaration is not well-formed");
          }
        }
        domBuilder.processingInstruction(match[1], match[2]);
        return start + match[0].length;
      }
      function ElementAttributes() {
        this.attributeNames = /* @__PURE__ */ Object.create(null);
      }
      ElementAttributes.prototype = {
        setTagName: function(tagName) {
          if (!g.QName_exact.test(tagName)) {
            throw new Error("invalid tagName:" + tagName);
          }
          this.tagName = tagName;
        },
        addValue: function(qName, value, offset) {
          if (!g.QName_exact.test(qName)) {
            throw new Error("invalid attribute:" + qName);
          }
          this.attributeNames[qName] = this.length;
          this[this.length++] = { qName, value, offset };
        },
        length: 0,
        getLocalName: function(i) {
          return this[i].localName;
        },
        getLocator: function(i) {
          return this[i].locator;
        },
        getQName: function(i) {
          return this[i].qName;
        },
        getURI: function(i) {
          return this[i].uri;
        },
        getValue: function(i) {
          return this[i].value;
        }
        //	,getIndex:function(uri, localName)){
        //		if(localName){
        //
        //		}else{
        //			var qName = uri
        //		}
        //	},
        //	getValue:function(){return this.getValue(this.getIndex.apply(this,arguments))},
        //	getType:function(uri,localName){}
        //	getType:function(i){},
      };
      exports.XMLReader = XMLReader;
      exports.parseUtils = parseUtils;
      exports.parseDoctypeCommentOrCData = parseDoctypeCommentOrCData;
    }
  });

  // node_modules/@xmldom/xmldom/lib/dom-parser.js
  var require_dom_parser = __commonJS({
    "node_modules/@xmldom/xmldom/lib/dom-parser.js"(exports) {
      "use strict";
      var conventions = require_conventions();
      var dom = require_dom();
      var errors = require_errors();
      var entities = require_entities();
      var sax = require_sax();
      var DOMImplementation = dom.DOMImplementation;
      var hasDefaultHTMLNamespace = conventions.hasDefaultHTMLNamespace;
      var isHTMLMimeType = conventions.isHTMLMimeType;
      var isValidMimeType = conventions.isValidMimeType;
      var MIME_TYPE = conventions.MIME_TYPE;
      var NAMESPACE = conventions.NAMESPACE;
      var ParseError = errors.ParseError;
      var XMLReader = sax.XMLReader;
      function normalizeLineEndings(input) {
        return input.replace(/\r[\n\u0085]/g, "\n").replace(/[\r\u0085\u2028\u2029]/g, "\n");
      }
      function DOMParser2(options) {
        options = options || {};
        if (options.locator === void 0) {
          options.locator = true;
        }
        this.assign = options.assign || conventions.assign;
        this.domHandler = options.domHandler || DOMHandler;
        this.onError = options.onError || options.errorHandler;
        if (options.errorHandler && typeof options.errorHandler !== "function") {
          throw new TypeError("errorHandler object is no longer supported, switch to onError!");
        } else if (options.errorHandler) {
          options.errorHandler("warning", "The `errorHandler` option has been deprecated, use `onError` instead!", this);
        }
        this.normalizeLineEndings = options.normalizeLineEndings || normalizeLineEndings;
        this.locator = !!options.locator;
        this.xmlns = this.assign(/* @__PURE__ */ Object.create(null), options.xmlns);
      }
      DOMParser2.prototype.parseFromString = function(source, mimeType) {
        if (!isValidMimeType(mimeType)) {
          throw new TypeError('DOMParser.parseFromString: the provided mimeType "' + mimeType + '" is not valid.');
        }
        var defaultNSMap = this.assign(/* @__PURE__ */ Object.create(null), this.xmlns);
        var entityMap = entities.XML_ENTITIES;
        var defaultNamespace = defaultNSMap[""] || null;
        if (hasDefaultHTMLNamespace(mimeType)) {
          entityMap = entities.HTML_ENTITIES;
          defaultNamespace = NAMESPACE.HTML;
        } else if (mimeType === MIME_TYPE.XML_SVG_IMAGE) {
          defaultNamespace = NAMESPACE.SVG;
        }
        defaultNSMap[""] = defaultNamespace;
        defaultNSMap.xml = defaultNSMap.xml || NAMESPACE.XML;
        var domBuilder = new this.domHandler({
          mimeType,
          defaultNamespace,
          onError: this.onError
        });
        var locator = this.locator ? {} : void 0;
        if (this.locator) {
          domBuilder.setDocumentLocator(locator);
        }
        var sax2 = new XMLReader();
        sax2.errorHandler = domBuilder;
        sax2.domBuilder = domBuilder;
        var isXml = !conventions.isHTMLMimeType(mimeType);
        if (isXml && typeof source !== "string") {
          sax2.errorHandler.fatalError("source is not a string");
        }
        sax2.parse(this.normalizeLineEndings(String(source)), defaultNSMap, entityMap);
        if (!domBuilder.doc.documentElement) {
          sax2.errorHandler.fatalError("missing root element");
        }
        return domBuilder.doc;
      };
      function DOMHandler(options) {
        var opt = options || {};
        this.mimeType = opt.mimeType || MIME_TYPE.XML_APPLICATION;
        this.defaultNamespace = opt.defaultNamespace || null;
        this.cdata = false;
        this.currentElement = void 0;
        this.doc = void 0;
        this.locator = void 0;
        this.onError = opt.onError;
      }
      function position(locator, node) {
        node.lineNumber = locator.lineNumber;
        node.columnNumber = locator.columnNumber;
      }
      DOMHandler.prototype = {
        /**
         * Either creates an XML or an HTML document and stores it under `this.doc`.
         * If it is an XML document, `this.defaultNamespace` is used to create it,
         * and it will not contain any `childNodes`.
         * If it is an HTML document, it will be created without any `childNodes`.
         *
         * @see http://www.saxproject.org/apidoc/org/xml/sax/ContentHandler.html
         */
        startDocument: function() {
          var impl = new DOMImplementation();
          this.doc = isHTMLMimeType(this.mimeType) ? impl.createHTMLDocument(false) : impl.createDocument(this.defaultNamespace, "");
        },
        startElement: function(namespaceURI, localName, qName, attrs) {
          var doc = this.doc;
          var el = doc.createElementNS(namespaceURI, qName || localName);
          var len = attrs.length;
          appendElement(this, el);
          this.currentElement = el;
          this.locator && position(this.locator, el);
          for (var i = 0; i < len; i++) {
            var namespaceURI = attrs.getURI(i);
            var value = attrs.getValue(i);
            var qName = attrs.getQName(i);
            var attr = doc.createAttributeNS(namespaceURI, qName);
            this.locator && position(attrs.getLocator(i), attr);
            attr.value = attr.nodeValue = value;
            el.setAttributeNode(attr);
          }
        },
        endElement: function(namespaceURI, localName, qName) {
          this.currentElement = this.currentElement.parentNode;
        },
        startPrefixMapping: function(prefix, uri) {
        },
        endPrefixMapping: function(prefix) {
        },
        processingInstruction: function(target, data) {
          var ins = this.doc.createProcessingInstruction(target, data);
          this.locator && position(this.locator, ins);
          appendElement(this, ins);
        },
        ignorableWhitespace: function(ch, start, length) {
        },
        characters: function(chars, start, length) {
          chars = _toString.apply(this, arguments);
          if (chars) {
            if (this.cdata) {
              var charNode = this.doc.createCDATASection(chars);
            } else {
              var charNode = this.doc.createTextNode(chars);
            }
            if (this.currentElement) {
              this.currentElement.appendChild(charNode);
            } else if (/^\s*$/.test(chars)) {
              this.doc.appendChild(charNode);
            }
            this.locator && position(this.locator, charNode);
          }
        },
        skippedEntity: function(name) {
        },
        endDocument: function() {
          this.doc.normalize();
        },
        /**
         * Stores the locator to be able to set the `columnNumber` and `lineNumber`
         * on the created DOM nodes.
         *
         * @param {Locator} locator
         */
        setDocumentLocator: function(locator) {
          if (locator) {
            locator.lineNumber = 0;
          }
          this.locator = locator;
        },
        //LexicalHandler
        comment: function(chars, start, length) {
          chars = _toString.apply(this, arguments);
          var comm = this.doc.createComment(chars);
          this.locator && position(this.locator, comm);
          appendElement(this, comm);
        },
        startCDATA: function() {
          this.cdata = true;
        },
        endCDATA: function() {
          this.cdata = false;
        },
        startDTD: function(name, publicId, systemId, internalSubset) {
          var impl = this.doc.implementation;
          if (impl && impl.createDocumentType) {
            var dt = impl.createDocumentType(name, publicId, systemId, internalSubset);
            this.locator && position(this.locator, dt);
            appendElement(this, dt);
            this.doc.doctype = dt;
          }
        },
        reportError: function(level, message) {
          if (typeof this.onError === "function") {
            try {
              this.onError(level, message, this);
            } catch (e) {
              throw new ParseError("Reporting " + level + ' "' + message + '" caused ' + e, this.locator);
            }
          } else {
            console.error("[xmldom " + level + "]	" + message, _locator(this.locator));
          }
        },
        /**
         * @see http://www.saxproject.org/apidoc/org/xml/sax/ErrorHandler.html
         */
        warning: function(message) {
          this.reportError("warning", message);
        },
        error: function(message) {
          this.reportError("error", message);
        },
        /**
         * This function reports a fatal error and throws a ParseError.
         *
         * @param {string} message
         * - The message to be used for reporting and throwing the error.
         * @returns {never}
         * This function always throws an error and never returns a value.
         * @throws {ParseError}
         * Always throws a ParseError with the provided message.
         */
        fatalError: function(message) {
          this.reportError("fatalError", message);
          throw new ParseError(message, this.locator);
        }
      };
      function _locator(l) {
        if (l) {
          return "\n@#[line:" + l.lineNumber + ",col:" + l.columnNumber + "]";
        }
      }
      function _toString(chars, start, length) {
        if (typeof chars == "string") {
          return chars.substr(start, length);
        } else {
          if (chars.length >= start + length || start) {
            return new java.lang.String(chars, start, length) + "";
          }
          return chars;
        }
      }
      "endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(
        /\w+/g,
        function(key) {
          DOMHandler.prototype[key] = function() {
            return null;
          };
        }
      );
      function appendElement(handler, node) {
        if (!handler.currentElement) {
          handler.doc.appendChild(node);
        } else {
          handler.currentElement.appendChild(node);
        }
      }
      function onErrorStopParsing(level) {
        if (level === "error") throw "onErrorStopParsing";
      }
      function onWarningStopParsing() {
        throw "onWarningStopParsing";
      }
      exports.__DOMHandler = DOMHandler;
      exports.DOMParser = DOMParser2;
      exports.normalizeLineEndings = normalizeLineEndings;
      exports.onErrorStopParsing = onErrorStopParsing;
      exports.onWarningStopParsing = onWarningStopParsing;
    }
  });

  // node_modules/@xmldom/xmldom/lib/index.js
  var require_lib = __commonJS({
    "node_modules/@xmldom/xmldom/lib/index.js"(exports) {
      "use strict";
      var conventions = require_conventions();
      exports.assign = conventions.assign;
      exports.hasDefaultHTMLNamespace = conventions.hasDefaultHTMLNamespace;
      exports.isHTMLMimeType = conventions.isHTMLMimeType;
      exports.isValidMimeType = conventions.isValidMimeType;
      exports.MIME_TYPE = conventions.MIME_TYPE;
      exports.NAMESPACE = conventions.NAMESPACE;
      var errors = require_errors();
      exports.DOMException = errors.DOMException;
      exports.DOMExceptionName = errors.DOMExceptionName;
      exports.ExceptionCode = errors.ExceptionCode;
      exports.ParseError = errors.ParseError;
      var dom = require_dom();
      exports.Attr = dom.Attr;
      exports.CDATASection = dom.CDATASection;
      exports.CharacterData = dom.CharacterData;
      exports.Comment = dom.Comment;
      exports.Document = dom.Document;
      exports.DocumentFragment = dom.DocumentFragment;
      exports.DocumentType = dom.DocumentType;
      exports.DOMImplementation = dom.DOMImplementation;
      exports.Element = dom.Element;
      exports.Entity = dom.Entity;
      exports.EntityReference = dom.EntityReference;
      exports.LiveNodeList = dom.LiveNodeList;
      exports.NamedNodeMap = dom.NamedNodeMap;
      exports.Node = dom.Node;
      exports.NodeList = dom.NodeList;
      exports.Notation = dom.Notation;
      exports.ProcessingInstruction = dom.ProcessingInstruction;
      exports.Text = dom.Text;
      exports.XMLSerializer = dom.XMLSerializer;
      var domParser = require_dom_parser();
      exports.DOMParser = domParser.DOMParser;
      exports.normalizeLineEndings = domParser.normalizeLineEndings;
      exports.onErrorStopParsing = domParser.onErrorStopParsing;
      exports.onWarningStopParsing = domParser.onWarningStopParsing;
    }
  });

  // node_modules/xmlbuilder/lib/Utility.js
  var require_Utility = __commonJS({
    "node_modules/xmlbuilder/lib/Utility.js"(exports, module) {
      (function() {
        var assign, getValue, isArray, isEmpty, isFunction, isObject, isPlainObject, hasProp = {}.hasOwnProperty;
        assign = function(target, ...sources) {
          var i, key, len, source;
          if (isFunction(Object.assign)) {
            Object.assign.apply(null, arguments);
          } else {
            for (i = 0, len = sources.length; i < len; i++) {
              source = sources[i];
              if (source != null) {
                for (key in source) {
                  if (!hasProp.call(source, key)) continue;
                  target[key] = source[key];
                }
              }
            }
          }
          return target;
        };
        isFunction = function(val) {
          return !!val && Object.prototype.toString.call(val) === "[object Function]";
        };
        isObject = function(val) {
          var ref;
          return !!val && ((ref = typeof val) === "function" || ref === "object");
        };
        isArray = function(val) {
          if (isFunction(Array.isArray)) {
            return Array.isArray(val);
          } else {
            return Object.prototype.toString.call(val) === "[object Array]";
          }
        };
        isEmpty = function(val) {
          var key;
          if (isArray(val)) {
            return !val.length;
          } else {
            for (key in val) {
              if (!hasProp.call(val, key)) continue;
              return false;
            }
            return true;
          }
        };
        isPlainObject = function(val) {
          var ctor, proto;
          return isObject(val) && (proto = Object.getPrototypeOf(val)) && (ctor = proto.constructor) && typeof ctor === "function" && ctor instanceof ctor && Function.prototype.toString.call(ctor) === Function.prototype.toString.call(Object);
        };
        getValue = function(obj) {
          if (isFunction(obj.valueOf)) {
            return obj.valueOf();
          } else {
            return obj;
          }
        };
        module.exports.assign = assign;
        module.exports.isFunction = isFunction;
        module.exports.isObject = isObject;
        module.exports.isArray = isArray;
        module.exports.isEmpty = isEmpty;
        module.exports.isPlainObject = isPlainObject;
        module.exports.getValue = getValue;
      }).call(exports);
    }
  });

  // node_modules/xmlbuilder/lib/XMLDOMImplementation.js
  var require_XMLDOMImplementation = __commonJS({
    "node_modules/xmlbuilder/lib/XMLDOMImplementation.js"(exports, module) {
      (function() {
        var XMLDOMImplementation;
        module.exports = XMLDOMImplementation = class XMLDOMImplementation {
          // Tests if the DOM implementation implements a specific feature.
          // `feature` package name of the feature to test. In Level 1, the
          //           legal values are "HTML" and "XML" (case-insensitive).
          // `version` version number of the package name to test. 
          //           In Level 1, this is the string "1.0". If the version is 
          //           not specified, supporting any version of the feature will 
          //           cause the method to return true.
          hasFeature(feature, version) {
            return true;
          }
          // Creates a new document type declaration.
          // `qualifiedName` qualified name of the document type to be created
          // `publicId` public identifier of the external subset
          // `systemId` system identifier of the external subset
          createDocumentType(qualifiedName, publicId, systemId) {
            throw new Error("This DOM method is not implemented.");
          }
          // Creates a new document.
          // `namespaceURI` namespace URI of the document element to create
          // `qualifiedName` the qualified name of the document to be created
          // `doctype` the type of document to be created or null
          createDocument(namespaceURI, qualifiedName, doctype) {
            throw new Error("This DOM method is not implemented.");
          }
          // Creates a new HTML document.
          // `title` document title
          createHTMLDocument(title) {
            throw new Error("This DOM method is not implemented.");
          }
          // Returns a specialized object which implements the specialized APIs 
          // of the specified feature and version.
          // `feature` name of the feature requested.
          // `version` version number of the feature to test
          getFeature(feature, version) {
            throw new Error("This DOM method is not implemented.");
          }
        };
      }).call(exports);
    }
  });

  // node_modules/xmlbuilder/lib/XMLDOMErrorHandler.js
  var require_XMLDOMErrorHandler = __commonJS({
    "node_modules/xmlbuilder/lib/XMLDOMErrorHandler.js"(exports, module) {
      (function() {
        var XMLDOMErrorHandler;
        module.exports = XMLDOMErrorHandler = class XMLDOMErrorHandler {
          // Initializes a new instance of `XMLDOMErrorHandler`
          constructor() {
          }
          // Called on the error handler when an error occurs.
          // `error` the error message as a string
          handleError(error) {
            throw new Error(error);
          }
        };
      }).call(exports);
    }
  });

  // node_modules/xmlbuilder/lib/XMLDOMStringList.js
  var require_XMLDOMStringList = __commonJS({
    "node_modules/xmlbuilder/lib/XMLDOMStringList.js"(exports, module) {
      (function() {
        var XMLDOMStringList;
        module.exports = XMLDOMStringList = (function() {
          class XMLDOMStringList2 {
            // Initializes a new instance of `XMLDOMStringList`
            // This is just a wrapper around an ordinary
            // JS array.
            // `arr` the array of string values
            constructor(arr) {
              this.arr = arr || [];
            }
            // Returns the indexth item in the collection.
            // `index` index into the collection
            item(index) {
              return this.arr[index] || null;
            }
            // Test if a string is part of this DOMStringList.
            // `str` the string to look for
            contains(str) {
              return this.arr.indexOf(str) !== -1;
            }
          }
          ;
          Object.defineProperty(XMLDOMStringList2.prototype, "length", {
            get: function() {
              return this.arr.length;
            }
          });
          return XMLDOMStringList2;
        }).call(this);
      }).call(exports);
    }
  });

  // node_modules/xmlbuilder/lib/XMLDOMConfiguration.js
  var require_XMLDOMConfiguration = __commonJS({
    "node_modules/xmlbuilder/lib/XMLDOMConfiguration.js"(exports, module) {
      (function() {
        var XMLDOMConfiguration, XMLDOMErrorHandler, XMLDOMStringList;
        XMLDOMErrorHandler = require_XMLDOMErrorHandler();
        XMLDOMStringList = require_XMLDOMStringList();
        module.exports = XMLDOMConfiguration = (function() {
          class XMLDOMConfiguration2 {
            constructor() {
              var clonedSelf;
              this.defaultParams = {
                "canonical-form": false,
                "cdata-sections": false,
                "comments": false,
                "datatype-normalization": false,
                "element-content-whitespace": true,
                "entities": true,
                "error-handler": new XMLDOMErrorHandler(),
                "infoset": true,
                "validate-if-schema": false,
                "namespaces": true,
                "namespace-declarations": true,
                "normalize-characters": false,
                "schema-location": "",
                "schema-type": "",
                "split-cdata-sections": true,
                "validate": false,
                "well-formed": true
              };
              this.params = clonedSelf = Object.create(this.defaultParams);
            }
            // Gets the value of a parameter.
            // `name` name of the parameter
            getParameter(name) {
              if (this.params.hasOwnProperty(name)) {
                return this.params[name];
              } else {
                return null;
              }
            }
            // Checks if setting a parameter to a specific value is supported.
            // `name` name of the parameter
            // `value` parameter value
            canSetParameter(name, value) {
              return true;
            }
            // Sets the value of a parameter.
            // `name` name of the parameter
            // `value` new value or null if the user wishes to unset the parameter
            setParameter(name, value) {
              if (value != null) {
                return this.params[name] = value;
              } else {
                return delete this.params[name];
              }
            }
          }
          ;
          Object.defineProperty(XMLDOMConfiguration2.prototype, "parameterNames", {
            get: function() {
              return new XMLDOMStringList(Object.keys(this.defaultParams));
            }
          });
          return XMLDOMConfiguration2;
        }).call(this);
      }).call(exports);
    }
  });

  // node_modules/xmlbuilder/lib/NodeType.js
  var require_NodeType = __commonJS({
    "node_modules/xmlbuilder/lib/NodeType.js"(exports, module) {
      (function() {
        module.exports = {
          Element: 1,
          Attribute: 2,
          Text: 3,
          CData: 4,
          EntityReference: 5,
          EntityDeclaration: 6,
          ProcessingInstruction: 7,
          Comment: 8,
          Document: 9,
          DocType: 10,
          DocumentFragment: 11,
          NotationDeclaration: 12,
          // Numeric codes up to 200 are reserved to W3C for possible future use.
          // Following are types internal to this library:
          Declaration: 201,
          Raw: 202,
          AttributeDeclaration: 203,
          ElementDeclaration: 204,
          Dummy: 205
        };
      }).call(exports);
    }
  });

  // node_modules/xmlbuilder/lib/XMLAttribute.js
  var require_XMLAttribute = __commonJS({
    "node_modules/xmlbuilder/lib/XMLAttribute.js"(exports, module) {
      (function() {
        var NodeType, XMLAttribute, XMLNode;
        NodeType = require_NodeType();
        XMLNode = require_XMLNode();
        module.exports = XMLAttribute = (function() {
          class XMLAttribute2 {
            // Initializes a new instance of `XMLAttribute`
            // `parent` the parent node
            // `name` attribute target
            // `value` attribute value
            constructor(parent, name, value) {
              this.parent = parent;
              if (this.parent) {
                this.options = this.parent.options;
                this.stringify = this.parent.stringify;
              }
              if (name == null) {
                throw new Error("Missing attribute name. " + this.debugInfo(name));
              }
              this.name = this.stringify.name(name);
              this.value = this.stringify.attValue(value);
              this.type = NodeType.Attribute;
              this.isId = false;
              this.schemaTypeInfo = null;
            }
            // Creates and returns a deep clone of `this`
            clone() {
              return Object.create(this);
            }
            // Converts the XML fragment to string
            // `options.pretty` pretty prints the result
            // `options.indent` indentation for pretty print
            // `options.offset` how many indentations to add to every line for pretty print
            // `options.newline` newline sequence for pretty print
            toString(options) {
              return this.options.writer.attribute(this, this.options.writer.filterOptions(options));
            }
            // Returns debug string for this node
            debugInfo(name) {
              name = name || this.name;
              if (name == null) {
                return "parent: <" + this.parent.name + ">";
              } else {
                return "attribute: {" + name + "}, parent: <" + this.parent.name + ">";
              }
            }
            isEqualNode(node) {
              if (node.namespaceURI !== this.namespaceURI) {
                return false;
              }
              if (node.prefix !== this.prefix) {
                return false;
              }
              if (node.localName !== this.localName) {
                return false;
              }
              if (node.value !== this.value) {
                return false;
              }
              return true;
            }
          }
          ;
          Object.defineProperty(XMLAttribute2.prototype, "nodeType", {
            get: function() {
              return this.type;
            }
          });
          Object.defineProperty(XMLAttribute2.prototype, "ownerElement", {
            get: function() {
              return this.parent;
            }
          });
          Object.defineProperty(XMLAttribute2.prototype, "textContent", {
            get: function() {
              return this.value;
            },
            set: function(value) {
              return this.value = value || "";
            }
          });
          Object.defineProperty(XMLAttribute2.prototype, "namespaceURI", {
            get: function() {
              return "";
            }
          });
          Object.defineProperty(XMLAttribute2.prototype, "prefix", {
            get: function() {
              return "";
            }
          });
          Object.defineProperty(XMLAttribute2.prototype, "localName", {
            get: function() {
              return this.name;
            }
          });
          Object.defineProperty(XMLAttribute2.prototype, "specified", {
            get: function() {
              return true;
            }
          });
          return XMLAttribute2;
        }).call(this);
      }).call(exports);
    }
  });

  // node_modules/xmlbuilder/lib/XMLNamedNodeMap.js
  var require_XMLNamedNodeMap = __commonJS({
    "node_modules/xmlbuilder/lib/XMLNamedNodeMap.js"(exports, module) {
      (function() {
        var XMLNamedNodeMap;
        module.exports = XMLNamedNodeMap = (function() {
          class XMLNamedNodeMap2 {
            // Initializes a new instance of `XMLNamedNodeMap`
            // This is just a wrapper around an ordinary
            // JS object.
            // `nodes` the object containing nodes.
            constructor(nodes) {
              this.nodes = nodes;
            }
            // Creates and returns a deep clone of `this`
            clone() {
              return this.nodes = null;
            }
            // DOM Level 1
            getNamedItem(name) {
              return this.nodes[name];
            }
            setNamedItem(node) {
              var oldNode;
              oldNode = this.nodes[node.nodeName];
              this.nodes[node.nodeName] = node;
              return oldNode || null;
            }
            removeNamedItem(name) {
              var oldNode;
              oldNode = this.nodes[name];
              delete this.nodes[name];
              return oldNode || null;
            }
            item(index) {
              return this.nodes[Object.keys(this.nodes)[index]] || null;
            }
            // DOM level 2 functions to be implemented later
            getNamedItemNS(namespaceURI, localName) {
              throw new Error("This DOM method is not implemented.");
            }
            setNamedItemNS(node) {
              throw new Error("This DOM method is not implemented.");
            }
            removeNamedItemNS(namespaceURI, localName) {
              throw new Error("This DOM method is not implemented.");
            }
          }
          ;
          Object.defineProperty(XMLNamedNodeMap2.prototype, "length", {
            get: function() {
              return Object.keys(this.nodes).length || 0;
            }
          });
          return XMLNamedNodeMap2;
        }).call(this);
      }).call(exports);
    }
  });

  // node_modules/xmlbuilder/lib/XMLElement.js
  var require_XMLElement = __commonJS({
    "node_modules/xmlbuilder/lib/XMLElement.js"(exports, module) {
      (function() {
        var NodeType, XMLAttribute, XMLElement, XMLNamedNodeMap, XMLNode, getValue, isFunction, isObject, hasProp = {}.hasOwnProperty;
        ({ isObject, isFunction, getValue } = require_Utility());
        XMLNode = require_XMLNode();
        NodeType = require_NodeType();
        XMLAttribute = require_XMLAttribute();
        XMLNamedNodeMap = require_XMLNamedNodeMap();
        module.exports = XMLElement = (function() {
          class XMLElement2 extends XMLNode {
            // Initializes a new instance of `XMLElement`
            // `parent` the parent node
            // `name` element name
            // `attributes` an object containing name/value pairs of attributes
            constructor(parent, name, attributes) {
              var child, j, len, ref;
              super(parent);
              if (name == null) {
                throw new Error("Missing element name. " + this.debugInfo());
              }
              this.name = this.stringify.name(name);
              this.type = NodeType.Element;
              this.attribs = {};
              this.schemaTypeInfo = null;
              if (attributes != null) {
                this.attribute(attributes);
              }
              if (parent.type === NodeType.Document) {
                this.isRoot = true;
                this.documentObject = parent;
                parent.rootObject = this;
                if (parent.children) {
                  ref = parent.children;
                  for (j = 0, len = ref.length; j < len; j++) {
                    child = ref[j];
                    if (child.type === NodeType.DocType) {
                      child.name = this.name;
                      break;
                    }
                  }
                }
              }
            }
            // Creates and returns a deep clone of `this`
            clone() {
              var att, attName, clonedSelf, ref;
              clonedSelf = Object.create(this);
              if (clonedSelf.isRoot) {
                clonedSelf.documentObject = null;
              }
              clonedSelf.attribs = {};
              ref = this.attribs;
              for (attName in ref) {
                if (!hasProp.call(ref, attName)) continue;
                att = ref[attName];
                clonedSelf.attribs[attName] = att.clone();
              }
              clonedSelf.children = [];
              this.children.forEach(function(child) {
                var clonedChild;
                clonedChild = child.clone();
                clonedChild.parent = clonedSelf;
                return clonedSelf.children.push(clonedChild);
              });
              return clonedSelf;
            }
            // Adds or modifies an attribute
            // `name` attribute name
            // `value` attribute value
            attribute(name, value) {
              var attName, attValue;
              if (name != null) {
                name = getValue(name);
              }
              if (isObject(name)) {
                for (attName in name) {
                  if (!hasProp.call(name, attName)) continue;
                  attValue = name[attName];
                  this.attribute(attName, attValue);
                }
              } else {
                if (isFunction(value)) {
                  value = value.apply();
                }
                if (this.options.keepNullAttributes && value == null) {
                  this.attribs[name] = new XMLAttribute(this, name, "");
                } else if (value != null) {
                  this.attribs[name] = new XMLAttribute(this, name, value);
                }
              }
              return this;
            }
            // Removes an attribute
            // `name` attribute name
            removeAttribute(name) {
              var attName, j, len;
              if (name == null) {
                throw new Error("Missing attribute name. " + this.debugInfo());
              }
              name = getValue(name);
              if (Array.isArray(name)) {
                for (j = 0, len = name.length; j < len; j++) {
                  attName = name[j];
                  delete this.attribs[attName];
                }
              } else {
                delete this.attribs[name];
              }
              return this;
            }
            // Converts the XML fragment to string
            // `options.pretty` pretty prints the result
            // `options.indent` indentation for pretty print
            // `options.offset` how many indentations to add to every line for pretty print
            // `options.newline` newline sequence for pretty print
            // `options.allowEmpty` do not self close empty element tags
            toString(options) {
              return this.options.writer.element(this, this.options.writer.filterOptions(options));
            }
            // Aliases
            att(name, value) {
              return this.attribute(name, value);
            }
            a(name, value) {
              return this.attribute(name, value);
            }
            // DOM Level 1
            getAttribute(name) {
              if (this.attribs.hasOwnProperty(name)) {
                return this.attribs[name].value;
              } else {
                return null;
              }
            }
            setAttribute(name, value) {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
            getAttributeNode(name) {
              if (this.attribs.hasOwnProperty(name)) {
                return this.attribs[name];
              } else {
                return null;
              }
            }
            setAttributeNode(newAttr) {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
            removeAttributeNode(oldAttr) {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
            getElementsByTagName(name) {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
            // DOM Level 2
            getAttributeNS(namespaceURI, localName) {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
            setAttributeNS(namespaceURI, qualifiedName, value) {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
            removeAttributeNS(namespaceURI, localName) {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
            getAttributeNodeNS(namespaceURI, localName) {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
            setAttributeNodeNS(newAttr) {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
            getElementsByTagNameNS(namespaceURI, localName) {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
            hasAttribute(name) {
              return this.attribs.hasOwnProperty(name);
            }
            hasAttributeNS(namespaceURI, localName) {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
            // DOM Level 3
            setIdAttribute(name, isId) {
              if (this.attribs.hasOwnProperty(name)) {
                return this.attribs[name].isId;
              } else {
                return isId;
              }
            }
            setIdAttributeNS(namespaceURI, localName, isId) {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
            setIdAttributeNode(idAttr, isId) {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
            // DOM Level 4
            getElementsByTagName(tagname) {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
            getElementsByTagNameNS(namespaceURI, localName) {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
            getElementsByClassName(classNames) {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
            isEqualNode(node) {
              var i, j, ref;
              if (!super.isEqualNode(node)) {
                return false;
              }
              if (node.namespaceURI !== this.namespaceURI) {
                return false;
              }
              if (node.prefix !== this.prefix) {
                return false;
              }
              if (node.localName !== this.localName) {
                return false;
              }
              if (node.attribs.length !== this.attribs.length) {
                return false;
              }
              for (i = j = 0, ref = this.attribs.length - 1; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
                if (!this.attribs[i].isEqualNode(node.attribs[i])) {
                  return false;
                }
              }
              return true;
            }
          }
          ;
          Object.defineProperty(XMLElement2.prototype, "tagName", {
            get: function() {
              return this.name;
            }
          });
          Object.defineProperty(XMLElement2.prototype, "namespaceURI", {
            get: function() {
              return "";
            }
          });
          Object.defineProperty(XMLElement2.prototype, "prefix", {
            get: function() {
              return "";
            }
          });
          Object.defineProperty(XMLElement2.prototype, "localName", {
            get: function() {
              return this.name;
            }
          });
          Object.defineProperty(XMLElement2.prototype, "id", {
            get: function() {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
          });
          Object.defineProperty(XMLElement2.prototype, "className", {
            get: function() {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
          });
          Object.defineProperty(XMLElement2.prototype, "classList", {
            get: function() {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
          });
          Object.defineProperty(XMLElement2.prototype, "attributes", {
            get: function() {
              if (!this.attributeMap || !this.attributeMap.nodes) {
                this.attributeMap = new XMLNamedNodeMap(this.attribs);
              }
              return this.attributeMap;
            }
          });
          return XMLElement2;
        }).call(this);
      }).call(exports);
    }
  });

  // node_modules/xmlbuilder/lib/XMLCharacterData.js
  var require_XMLCharacterData = __commonJS({
    "node_modules/xmlbuilder/lib/XMLCharacterData.js"(exports, module) {
      (function() {
        var XMLCharacterData, XMLNode;
        XMLNode = require_XMLNode();
        module.exports = XMLCharacterData = (function() {
          class XMLCharacterData2 extends XMLNode {
            // Initializes a new instance of `XMLCharacterData`
            constructor(parent) {
              super(parent);
              this.value = "";
            }
            // Creates and returns a deep clone of `this`
            clone() {
              return Object.create(this);
            }
            // DOM level 1 functions to be implemented later
            substringData(offset, count) {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
            appendData(arg) {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
            insertData(offset, arg) {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
            deleteData(offset, count) {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
            replaceData(offset, count, arg) {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
            isEqualNode(node) {
              if (!super.isEqualNode(node)) {
                return false;
              }
              if (node.data !== this.data) {
                return false;
              }
              return true;
            }
          }
          ;
          Object.defineProperty(XMLCharacterData2.prototype, "data", {
            get: function() {
              return this.value;
            },
            set: function(value) {
              return this.value = value || "";
            }
          });
          Object.defineProperty(XMLCharacterData2.prototype, "length", {
            get: function() {
              return this.value.length;
            }
          });
          Object.defineProperty(XMLCharacterData2.prototype, "textContent", {
            get: function() {
              return this.value;
            },
            set: function(value) {
              return this.value = value || "";
            }
          });
          return XMLCharacterData2;
        }).call(this);
      }).call(exports);
    }
  });

  // node_modules/xmlbuilder/lib/XMLCData.js
  var require_XMLCData = __commonJS({
    "node_modules/xmlbuilder/lib/XMLCData.js"(exports, module) {
      (function() {
        var NodeType, XMLCData, XMLCharacterData;
        NodeType = require_NodeType();
        XMLCharacterData = require_XMLCharacterData();
        module.exports = XMLCData = class XMLCData extends XMLCharacterData {
          // Initializes a new instance of `XMLCData`
          // `text` CDATA text
          constructor(parent, text) {
            super(parent);
            if (text == null) {
              throw new Error("Missing CDATA text. " + this.debugInfo());
            }
            this.name = "#cdata-section";
            this.type = NodeType.CData;
            this.value = this.stringify.cdata(text);
          }
          // Creates and returns a deep clone of `this`
          clone() {
            return Object.create(this);
          }
          // Converts the XML fragment to string
          // `options.pretty` pretty prints the result
          // `options.indent` indentation for pretty print
          // `options.offset` how many indentations to add to every line for pretty print
          // `options.newline` newline sequence for pretty print
          toString(options) {
            return this.options.writer.cdata(this, this.options.writer.filterOptions(options));
          }
        };
      }).call(exports);
    }
  });

  // node_modules/xmlbuilder/lib/XMLComment.js
  var require_XMLComment = __commonJS({
    "node_modules/xmlbuilder/lib/XMLComment.js"(exports, module) {
      (function() {
        var NodeType, XMLCharacterData, XMLComment;
        NodeType = require_NodeType();
        XMLCharacterData = require_XMLCharacterData();
        module.exports = XMLComment = class XMLComment extends XMLCharacterData {
          // Initializes a new instance of `XMLComment`
          // `text` comment text
          constructor(parent, text) {
            super(parent);
            if (text == null) {
              throw new Error("Missing comment text. " + this.debugInfo());
            }
            this.name = "#comment";
            this.type = NodeType.Comment;
            this.value = this.stringify.comment(text);
          }
          // Creates and returns a deep clone of `this`
          clone() {
            return Object.create(this);
          }
          // Converts the XML fragment to string
          // `options.pretty` pretty prints the result
          // `options.indent` indentation for pretty print
          // `options.offset` how many indentations to add to every line for pretty print
          // `options.newline` newline sequence for pretty print
          toString(options) {
            return this.options.writer.comment(this, this.options.writer.filterOptions(options));
          }
        };
      }).call(exports);
    }
  });

  // node_modules/xmlbuilder/lib/XMLDeclaration.js
  var require_XMLDeclaration = __commonJS({
    "node_modules/xmlbuilder/lib/XMLDeclaration.js"(exports, module) {
      (function() {
        var NodeType, XMLDeclaration, XMLNode, isObject;
        ({ isObject } = require_Utility());
        XMLNode = require_XMLNode();
        NodeType = require_NodeType();
        module.exports = XMLDeclaration = class XMLDeclaration extends XMLNode {
          // Initializes a new instance of `XMLDeclaration`
          // `parent` the document object
          // `version` A version number string, e.g. 1.0
          // `encoding` Encoding declaration, e.g. UTF-8
          // `standalone` standalone document declaration: true or false
          constructor(parent, version, encoding, standalone) {
            super(parent);
            if (isObject(version)) {
              ({ version, encoding, standalone } = version);
            }
            if (!version) {
              version = "1.0";
            }
            this.type = NodeType.Declaration;
            this.version = this.stringify.xmlVersion(version);
            if (encoding != null) {
              this.encoding = this.stringify.xmlEncoding(encoding);
            }
            if (standalone != null) {
              this.standalone = this.stringify.xmlStandalone(standalone);
            }
          }
          // Converts to string
          // `options.pretty` pretty prints the result
          // `options.indent` indentation for pretty print
          // `options.offset` how many indentations to add to every line for pretty print
          // `options.newline` newline sequence for pretty print
          toString(options) {
            return this.options.writer.declaration(this, this.options.writer.filterOptions(options));
          }
        };
      }).call(exports);
    }
  });

  // node_modules/xmlbuilder/lib/XMLDTDAttList.js
  var require_XMLDTDAttList = __commonJS({
    "node_modules/xmlbuilder/lib/XMLDTDAttList.js"(exports, module) {
      (function() {
        var NodeType, XMLDTDAttList, XMLNode;
        XMLNode = require_XMLNode();
        NodeType = require_NodeType();
        module.exports = XMLDTDAttList = class XMLDTDAttList extends XMLNode {
          // Initializes a new instance of `XMLDTDAttList`
          // `parent` the parent `XMLDocType` element
          // `elementName` the name of the element containing this attribute
          // `attributeName` attribute name
          // `attributeType` type of the attribute
          // `defaultValueType` default value type (either #REQUIRED, #IMPLIED,
          //                    #FIXED or #DEFAULT)
          // `defaultValue` default value of the attribute
          //                (only used for #FIXED or #DEFAULT)
          constructor(parent, elementName, attributeName, attributeType, defaultValueType, defaultValue) {
            super(parent);
            if (elementName == null) {
              throw new Error("Missing DTD element name. " + this.debugInfo());
            }
            if (attributeName == null) {
              throw new Error("Missing DTD attribute name. " + this.debugInfo(elementName));
            }
            if (!attributeType) {
              throw new Error("Missing DTD attribute type. " + this.debugInfo(elementName));
            }
            if (!defaultValueType) {
              throw new Error("Missing DTD attribute default. " + this.debugInfo(elementName));
            }
            if (defaultValueType.indexOf("#") !== 0) {
              defaultValueType = "#" + defaultValueType;
            }
            if (!defaultValueType.match(/^(#REQUIRED|#IMPLIED|#FIXED|#DEFAULT)$/)) {
              throw new Error("Invalid default value type; expected: #REQUIRED, #IMPLIED, #FIXED or #DEFAULT. " + this.debugInfo(elementName));
            }
            if (defaultValue && !defaultValueType.match(/^(#FIXED|#DEFAULT)$/)) {
              throw new Error("Default value only applies to #FIXED or #DEFAULT. " + this.debugInfo(elementName));
            }
            this.elementName = this.stringify.name(elementName);
            this.type = NodeType.AttributeDeclaration;
            this.attributeName = this.stringify.name(attributeName);
            this.attributeType = this.stringify.dtdAttType(attributeType);
            if (defaultValue) {
              this.defaultValue = this.stringify.dtdAttDefault(defaultValue);
            }
            this.defaultValueType = defaultValueType;
          }
          // Converts the XML fragment to string
          // `options.pretty` pretty prints the result
          // `options.indent` indentation for pretty print
          // `options.offset` how many indentations to add to every line for pretty print
          // `options.newline` newline sequence for pretty print
          toString(options) {
            return this.options.writer.dtdAttList(this, this.options.writer.filterOptions(options));
          }
        };
      }).call(exports);
    }
  });

  // node_modules/xmlbuilder/lib/XMLDTDEntity.js
  var require_XMLDTDEntity = __commonJS({
    "node_modules/xmlbuilder/lib/XMLDTDEntity.js"(exports, module) {
      (function() {
        var NodeType, XMLDTDEntity, XMLNode, isObject;
        ({ isObject } = require_Utility());
        XMLNode = require_XMLNode();
        NodeType = require_NodeType();
        module.exports = XMLDTDEntity = (function() {
          class XMLDTDEntity2 extends XMLNode {
            // Initializes a new instance of `XMLDTDEntity`
            // `parent` the parent `XMLDocType` element
            // `pe` whether this is a parameter entity or a general entity
            //      defaults to `false` (general entity)
            // `name` the name of the entity
            // `value` internal entity value or an object with external entity details
            // `value.pubID` public identifier
            // `value.sysID` system identifier
            // `value.nData` notation declaration
            constructor(parent, pe, name, value) {
              super(parent);
              if (name == null) {
                throw new Error("Missing DTD entity name. " + this.debugInfo(name));
              }
              if (value == null) {
                throw new Error("Missing DTD entity value. " + this.debugInfo(name));
              }
              this.pe = !!pe;
              this.name = this.stringify.name(name);
              this.type = NodeType.EntityDeclaration;
              if (!isObject(value)) {
                this.value = this.stringify.dtdEntityValue(value);
                this.internal = true;
              } else {
                if (!value.pubID && !value.sysID) {
                  throw new Error("Public and/or system identifiers are required for an external entity. " + this.debugInfo(name));
                }
                if (value.pubID && !value.sysID) {
                  throw new Error("System identifier is required for a public external entity. " + this.debugInfo(name));
                }
                this.internal = false;
                if (value.pubID != null) {
                  this.pubID = this.stringify.dtdPubID(value.pubID);
                }
                if (value.sysID != null) {
                  this.sysID = this.stringify.dtdSysID(value.sysID);
                }
                if (value.nData != null) {
                  this.nData = this.stringify.dtdNData(value.nData);
                }
                if (this.pe && this.nData) {
                  throw new Error("Notation declaration is not allowed in a parameter entity. " + this.debugInfo(name));
                }
              }
            }
            // Converts the XML fragment to string
            // `options.pretty` pretty prints the result
            // `options.indent` indentation for pretty print
            // `options.offset` how many indentations to add to every line for pretty print
            // `options.newline` newline sequence for pretty print
            toString(options) {
              return this.options.writer.dtdEntity(this, this.options.writer.filterOptions(options));
            }
          }
          ;
          Object.defineProperty(XMLDTDEntity2.prototype, "publicId", {
            get: function() {
              return this.pubID;
            }
          });
          Object.defineProperty(XMLDTDEntity2.prototype, "systemId", {
            get: function() {
              return this.sysID;
            }
          });
          Object.defineProperty(XMLDTDEntity2.prototype, "notationName", {
            get: function() {
              return this.nData || null;
            }
          });
          Object.defineProperty(XMLDTDEntity2.prototype, "inputEncoding", {
            get: function() {
              return null;
            }
          });
          Object.defineProperty(XMLDTDEntity2.prototype, "xmlEncoding", {
            get: function() {
              return null;
            }
          });
          Object.defineProperty(XMLDTDEntity2.prototype, "xmlVersion", {
            get: function() {
              return null;
            }
          });
          return XMLDTDEntity2;
        }).call(this);
      }).call(exports);
    }
  });

  // node_modules/xmlbuilder/lib/XMLDTDElement.js
  var require_XMLDTDElement = __commonJS({
    "node_modules/xmlbuilder/lib/XMLDTDElement.js"(exports, module) {
      (function() {
        var NodeType, XMLDTDElement, XMLNode;
        XMLNode = require_XMLNode();
        NodeType = require_NodeType();
        module.exports = XMLDTDElement = class XMLDTDElement extends XMLNode {
          // Initializes a new instance of `XMLDTDElement`
          // `parent` the parent `XMLDocType` element
          // `name` element name
          // `value` element content (defaults to #PCDATA)
          constructor(parent, name, value) {
            super(parent);
            if (name == null) {
              throw new Error("Missing DTD element name. " + this.debugInfo());
            }
            if (!value) {
              value = "(#PCDATA)";
            }
            if (Array.isArray(value)) {
              value = "(" + value.join(",") + ")";
            }
            this.name = this.stringify.name(name);
            this.type = NodeType.ElementDeclaration;
            this.value = this.stringify.dtdElementValue(value);
          }
          // Converts the XML fragment to string
          // `options.pretty` pretty prints the result
          // `options.indent` indentation for pretty print
          // `options.offset` how many indentations to add to every line for pretty print
          // `options.newline` newline sequence for pretty print
          toString(options) {
            return this.options.writer.dtdElement(this, this.options.writer.filterOptions(options));
          }
        };
      }).call(exports);
    }
  });

  // node_modules/xmlbuilder/lib/XMLDTDNotation.js
  var require_XMLDTDNotation = __commonJS({
    "node_modules/xmlbuilder/lib/XMLDTDNotation.js"(exports, module) {
      (function() {
        var NodeType, XMLDTDNotation, XMLNode;
        XMLNode = require_XMLNode();
        NodeType = require_NodeType();
        module.exports = XMLDTDNotation = (function() {
          class XMLDTDNotation2 extends XMLNode {
            // Initializes a new instance of `XMLDTDNotation`
            // `parent` the parent `XMLDocType` element
            // `name` the name of the notation
            // `value` an object with external entity details
            // `value.pubID` public identifier
            // `value.sysID` system identifier
            constructor(parent, name, value) {
              super(parent);
              if (name == null) {
                throw new Error("Missing DTD notation name. " + this.debugInfo(name));
              }
              if (!value.pubID && !value.sysID) {
                throw new Error("Public or system identifiers are required for an external entity. " + this.debugInfo(name));
              }
              this.name = this.stringify.name(name);
              this.type = NodeType.NotationDeclaration;
              if (value.pubID != null) {
                this.pubID = this.stringify.dtdPubID(value.pubID);
              }
              if (value.sysID != null) {
                this.sysID = this.stringify.dtdSysID(value.sysID);
              }
            }
            // Converts the XML fragment to string
            // `options.pretty` pretty prints the result
            // `options.indent` indentation for pretty print
            // `options.offset` how many indentations to add to every line for pretty print
            // `options.newline` newline sequence for pretty print
            toString(options) {
              return this.options.writer.dtdNotation(this, this.options.writer.filterOptions(options));
            }
          }
          ;
          Object.defineProperty(XMLDTDNotation2.prototype, "publicId", {
            get: function() {
              return this.pubID;
            }
          });
          Object.defineProperty(XMLDTDNotation2.prototype, "systemId", {
            get: function() {
              return this.sysID;
            }
          });
          return XMLDTDNotation2;
        }).call(this);
      }).call(exports);
    }
  });

  // node_modules/xmlbuilder/lib/XMLDocType.js
  var require_XMLDocType = __commonJS({
    "node_modules/xmlbuilder/lib/XMLDocType.js"(exports, module) {
      (function() {
        var NodeType, XMLDTDAttList, XMLDTDElement, XMLDTDEntity, XMLDTDNotation, XMLDocType, XMLNamedNodeMap, XMLNode, isObject;
        ({ isObject } = require_Utility());
        XMLNode = require_XMLNode();
        NodeType = require_NodeType();
        XMLDTDAttList = require_XMLDTDAttList();
        XMLDTDEntity = require_XMLDTDEntity();
        XMLDTDElement = require_XMLDTDElement();
        XMLDTDNotation = require_XMLDTDNotation();
        XMLNamedNodeMap = require_XMLNamedNodeMap();
        module.exports = XMLDocType = (function() {
          class XMLDocType2 extends XMLNode {
            // Initializes a new instance of `XMLDocType`
            // `parent` the document object
            // `pubID` public identifier of the external subset
            // `sysID` system identifier of the external subset
            constructor(parent, pubID, sysID) {
              var child, i, len, ref;
              super(parent);
              this.type = NodeType.DocType;
              if (parent.children) {
                ref = parent.children;
                for (i = 0, len = ref.length; i < len; i++) {
                  child = ref[i];
                  if (child.type === NodeType.Element) {
                    this.name = child.name;
                    break;
                  }
                }
              }
              this.documentObject = parent;
              if (isObject(pubID)) {
                ({ pubID, sysID } = pubID);
              }
              if (sysID == null) {
                [sysID, pubID] = [pubID, sysID];
              }
              if (pubID != null) {
                this.pubID = this.stringify.dtdPubID(pubID);
              }
              if (sysID != null) {
                this.sysID = this.stringify.dtdSysID(sysID);
              }
            }
            // Creates an element type declaration
            // `name` element name
            // `value` element content (defaults to #PCDATA)
            element(name, value) {
              var child;
              child = new XMLDTDElement(this, name, value);
              this.children.push(child);
              return this;
            }
            // Creates an attribute declaration
            // `elementName` the name of the element containing this attribute
            // `attributeName` attribute name
            // `attributeType` type of the attribute (defaults to CDATA)
            // `defaultValueType` default value type (either #REQUIRED, #IMPLIED, #FIXED or
            //                    #DEFAULT) (defaults to #IMPLIED)
            // `defaultValue` default value of the attribute
            //                (only used for #FIXED or #DEFAULT)
            attList(elementName, attributeName, attributeType, defaultValueType, defaultValue) {
              var child;
              child = new XMLDTDAttList(this, elementName, attributeName, attributeType, defaultValueType, defaultValue);
              this.children.push(child);
              return this;
            }
            // Creates a general entity declaration
            // `name` the name of the entity
            // `value` internal entity value or an object with external entity details
            // `value.pubID` public identifier
            // `value.sysID` system identifier
            // `value.nData` notation declaration
            entity(name, value) {
              var child;
              child = new XMLDTDEntity(this, false, name, value);
              this.children.push(child);
              return this;
            }
            // Creates a parameter entity declaration
            // `name` the name of the entity
            // `value` internal entity value or an object with external entity details
            // `value.pubID` public identifier
            // `value.sysID` system identifier
            pEntity(name, value) {
              var child;
              child = new XMLDTDEntity(this, true, name, value);
              this.children.push(child);
              return this;
            }
            // Creates a NOTATION declaration
            // `name` the name of the notation
            // `value` an object with external entity details
            // `value.pubID` public identifier
            // `value.sysID` system identifier
            notation(name, value) {
              var child;
              child = new XMLDTDNotation(this, name, value);
              this.children.push(child);
              return this;
            }
            // Converts to string
            // `options.pretty` pretty prints the result
            // `options.indent` indentation for pretty print
            // `options.offset` how many indentations to add to every line for pretty print
            // `options.newline` newline sequence for pretty print
            toString(options) {
              return this.options.writer.docType(this, this.options.writer.filterOptions(options));
            }
            // Aliases
            ele(name, value) {
              return this.element(name, value);
            }
            att(elementName, attributeName, attributeType, defaultValueType, defaultValue) {
              return this.attList(elementName, attributeName, attributeType, defaultValueType, defaultValue);
            }
            ent(name, value) {
              return this.entity(name, value);
            }
            pent(name, value) {
              return this.pEntity(name, value);
            }
            not(name, value) {
              return this.notation(name, value);
            }
            up() {
              return this.root() || this.documentObject;
            }
            isEqualNode(node) {
              if (!super.isEqualNode(node)) {
                return false;
              }
              if (node.name !== this.name) {
                return false;
              }
              if (node.publicId !== this.publicId) {
                return false;
              }
              if (node.systemId !== this.systemId) {
                return false;
              }
              return true;
            }
          }
          ;
          Object.defineProperty(XMLDocType2.prototype, "entities", {
            get: function() {
              var child, i, len, nodes, ref;
              nodes = {};
              ref = this.children;
              for (i = 0, len = ref.length; i < len; i++) {
                child = ref[i];
                if (child.type === NodeType.EntityDeclaration && !child.pe) {
                  nodes[child.name] = child;
                }
              }
              return new XMLNamedNodeMap(nodes);
            }
          });
          Object.defineProperty(XMLDocType2.prototype, "notations", {
            get: function() {
              var child, i, len, nodes, ref;
              nodes = {};
              ref = this.children;
              for (i = 0, len = ref.length; i < len; i++) {
                child = ref[i];
                if (child.type === NodeType.NotationDeclaration) {
                  nodes[child.name] = child;
                }
              }
              return new XMLNamedNodeMap(nodes);
            }
          });
          Object.defineProperty(XMLDocType2.prototype, "publicId", {
            get: function() {
              return this.pubID;
            }
          });
          Object.defineProperty(XMLDocType2.prototype, "systemId", {
            get: function() {
              return this.sysID;
            }
          });
          Object.defineProperty(XMLDocType2.prototype, "internalSubset", {
            get: function() {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
          });
          return XMLDocType2;
        }).call(this);
      }).call(exports);
    }
  });

  // node_modules/xmlbuilder/lib/XMLRaw.js
  var require_XMLRaw = __commonJS({
    "node_modules/xmlbuilder/lib/XMLRaw.js"(exports, module) {
      (function() {
        var NodeType, XMLNode, XMLRaw;
        NodeType = require_NodeType();
        XMLNode = require_XMLNode();
        module.exports = XMLRaw = class XMLRaw extends XMLNode {
          // Initializes a new instance of `XMLRaw`
          // `text` raw text
          constructor(parent, text) {
            super(parent);
            if (text == null) {
              throw new Error("Missing raw text. " + this.debugInfo());
            }
            this.type = NodeType.Raw;
            this.value = this.stringify.raw(text);
          }
          // Creates and returns a deep clone of `this`
          clone() {
            return Object.create(this);
          }
          // Converts the XML fragment to string
          // `options.pretty` pretty prints the result
          // `options.indent` indentation for pretty print
          // `options.offset` how many indentations to add to every line for pretty print
          // `options.newline` newline sequence for pretty print
          toString(options) {
            return this.options.writer.raw(this, this.options.writer.filterOptions(options));
          }
        };
      }).call(exports);
    }
  });

  // node_modules/xmlbuilder/lib/XMLText.js
  var require_XMLText = __commonJS({
    "node_modules/xmlbuilder/lib/XMLText.js"(exports, module) {
      (function() {
        var NodeType, XMLCharacterData, XMLText;
        NodeType = require_NodeType();
        XMLCharacterData = require_XMLCharacterData();
        module.exports = XMLText = (function() {
          class XMLText2 extends XMLCharacterData {
            // Initializes a new instance of `XMLText`
            // `text` element text
            constructor(parent, text) {
              super(parent);
              if (text == null) {
                throw new Error("Missing element text. " + this.debugInfo());
              }
              this.name = "#text";
              this.type = NodeType.Text;
              this.value = this.stringify.text(text);
            }
            // Creates and returns a deep clone of `this`
            clone() {
              return Object.create(this);
            }
            // Converts the XML fragment to string
            // `options.pretty` pretty prints the result
            // `options.indent` indentation for pretty print
            // `options.offset` how many indentations to add to every line for pretty print
            // `options.newline` newline sequence for pretty print
            toString(options) {
              return this.options.writer.text(this, this.options.writer.filterOptions(options));
            }
            // DOM level 1 functions to be implemented later
            splitText(offset) {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
            // DOM level 3 functions to be implemented later
            replaceWholeText(content) {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
          }
          ;
          Object.defineProperty(XMLText2.prototype, "isElementContentWhitespace", {
            get: function() {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
          });
          Object.defineProperty(XMLText2.prototype, "wholeText", {
            get: function() {
              var next, prev, str;
              str = "";
              prev = this.previousSibling;
              while (prev) {
                str = prev.data + str;
                prev = prev.previousSibling;
              }
              str += this.data;
              next = this.nextSibling;
              while (next) {
                str = str + next.data;
                next = next.nextSibling;
              }
              return str;
            }
          });
          return XMLText2;
        }).call(this);
      }).call(exports);
    }
  });

  // node_modules/xmlbuilder/lib/XMLProcessingInstruction.js
  var require_XMLProcessingInstruction = __commonJS({
    "node_modules/xmlbuilder/lib/XMLProcessingInstruction.js"(exports, module) {
      (function() {
        var NodeType, XMLCharacterData, XMLProcessingInstruction;
        NodeType = require_NodeType();
        XMLCharacterData = require_XMLCharacterData();
        module.exports = XMLProcessingInstruction = class XMLProcessingInstruction extends XMLCharacterData {
          // Initializes a new instance of `XMLProcessingInstruction`
          // `parent` the parent node
          // `target` instruction target
          // `value` instruction value
          constructor(parent, target, value) {
            super(parent);
            if (target == null) {
              throw new Error("Missing instruction target. " + this.debugInfo());
            }
            this.type = NodeType.ProcessingInstruction;
            this.target = this.stringify.insTarget(target);
            this.name = this.target;
            if (value) {
              this.value = this.stringify.insValue(value);
            }
          }
          // Creates and returns a deep clone of `this`
          clone() {
            return Object.create(this);
          }
          // Converts the XML fragment to string
          // `options.pretty` pretty prints the result
          // `options.indent` indentation for pretty print
          // `options.offset` how many indentations to add to every line for pretty print
          // `options.newline` newline sequence for pretty print
          toString(options) {
            return this.options.writer.processingInstruction(this, this.options.writer.filterOptions(options));
          }
          isEqualNode(node) {
            if (!super.isEqualNode(node)) {
              return false;
            }
            if (node.target !== this.target) {
              return false;
            }
            return true;
          }
        };
      }).call(exports);
    }
  });

  // node_modules/xmlbuilder/lib/XMLDummy.js
  var require_XMLDummy = __commonJS({
    "node_modules/xmlbuilder/lib/XMLDummy.js"(exports, module) {
      (function() {
        var NodeType, XMLDummy, XMLNode;
        XMLNode = require_XMLNode();
        NodeType = require_NodeType();
        module.exports = XMLDummy = class XMLDummy extends XMLNode {
          // Initializes a new instance of `XMLDummy`
          // `XMLDummy` is a special node representing a node with 
          // a null value. Dummy nodes are created while recursively
          // building the XML tree. Simply skipping null values doesn't
          // work because that would break the recursive chain.
          constructor(parent) {
            super(parent);
            this.type = NodeType.Dummy;
          }
          // Creates and returns a deep clone of `this`
          clone() {
            return Object.create(this);
          }
          // Converts the XML fragment to string
          // `options.pretty` pretty prints the result
          // `options.indent` indentation for pretty print
          // `options.offset` how many indentations to add to every line for pretty print
          // `options.newline` newline sequence for pretty print
          toString(options) {
            return "";
          }
        };
      }).call(exports);
    }
  });

  // node_modules/xmlbuilder/lib/XMLNodeList.js
  var require_XMLNodeList = __commonJS({
    "node_modules/xmlbuilder/lib/XMLNodeList.js"(exports, module) {
      (function() {
        var XMLNodeList;
        module.exports = XMLNodeList = (function() {
          class XMLNodeList2 {
            // Initializes a new instance of `XMLNodeList`
            // This is just a wrapper around an ordinary
            // JS array.
            // `nodes` the array containing nodes.
            constructor(nodes) {
              this.nodes = nodes;
            }
            // Creates and returns a deep clone of `this`
            clone() {
              return this.nodes = null;
            }
            // DOM Level 1
            item(index) {
              return this.nodes[index] || null;
            }
          }
          ;
          Object.defineProperty(XMLNodeList2.prototype, "length", {
            get: function() {
              return this.nodes.length || 0;
            }
          });
          return XMLNodeList2;
        }).call(this);
      }).call(exports);
    }
  });

  // node_modules/xmlbuilder/lib/DocumentPosition.js
  var require_DocumentPosition = __commonJS({
    "node_modules/xmlbuilder/lib/DocumentPosition.js"(exports, module) {
      (function() {
        module.exports = {
          Disconnected: 1,
          Preceding: 2,
          Following: 4,
          Contains: 8,
          ContainedBy: 16,
          ImplementationSpecific: 32
        };
      }).call(exports);
    }
  });

  // node_modules/xmlbuilder/lib/XMLNode.js
  var require_XMLNode = __commonJS({
    "node_modules/xmlbuilder/lib/XMLNode.js"(exports, module) {
      (function() {
        var DocumentPosition, NodeType, XMLCData, XMLComment, XMLDeclaration, XMLDocType, XMLDummy, XMLElement, XMLNamedNodeMap, XMLNode, XMLNodeList, XMLProcessingInstruction, XMLRaw, XMLText, getValue, isEmpty, isFunction, isObject, hasProp = {}.hasOwnProperty, splice = [].splice;
        ({ isObject, isFunction, isEmpty, getValue } = require_Utility());
        XMLElement = null;
        XMLCData = null;
        XMLComment = null;
        XMLDeclaration = null;
        XMLDocType = null;
        XMLRaw = null;
        XMLText = null;
        XMLProcessingInstruction = null;
        XMLDummy = null;
        NodeType = null;
        XMLNodeList = null;
        XMLNamedNodeMap = null;
        DocumentPosition = null;
        module.exports = XMLNode = (function() {
          class XMLNode2 {
            // Initializes a new instance of `XMLNode`
            // `parent` the parent node
            constructor(parent1) {
              this.parent = parent1;
              if (this.parent) {
                this.options = this.parent.options;
                this.stringify = this.parent.stringify;
              }
              this.value = null;
              this.children = [];
              this.baseURI = null;
              if (!XMLElement) {
                XMLElement = require_XMLElement();
                XMLCData = require_XMLCData();
                XMLComment = require_XMLComment();
                XMLDeclaration = require_XMLDeclaration();
                XMLDocType = require_XMLDocType();
                XMLRaw = require_XMLRaw();
                XMLText = require_XMLText();
                XMLProcessingInstruction = require_XMLProcessingInstruction();
                XMLDummy = require_XMLDummy();
                NodeType = require_NodeType();
                XMLNodeList = require_XMLNodeList();
                XMLNamedNodeMap = require_XMLNamedNodeMap();
                DocumentPosition = require_DocumentPosition();
              }
            }
            // Sets the parent node of this node and its children recursively
            // `parent` the parent node
            setParent(parent) {
              var child, j, len, ref1, results;
              this.parent = parent;
              if (parent) {
                this.options = parent.options;
                this.stringify = parent.stringify;
              }
              ref1 = this.children;
              results = [];
              for (j = 0, len = ref1.length; j < len; j++) {
                child = ref1[j];
                results.push(child.setParent(this));
              }
              return results;
            }
            // Creates a child element node
            // `name` node name or an object describing the XML tree
            // `attributes` an object containing name/value pairs of attributes
            // `text` element text
            element(name, attributes, text) {
              var childNode, item, j, k, key, lastChild, len, len1, val;
              lastChild = null;
              if (attributes === null && text == null) {
                [attributes, text] = [{}, null];
              }
              if (attributes == null) {
                attributes = {};
              }
              attributes = getValue(attributes);
              if (!isObject(attributes)) {
                [text, attributes] = [attributes, text];
              }
              if (name != null) {
                name = getValue(name);
              }
              if (Array.isArray(name)) {
                for (j = 0, len = name.length; j < len; j++) {
                  item = name[j];
                  lastChild = this.element(item);
                }
              } else if (isFunction(name)) {
                lastChild = this.element(name.apply());
              } else if (isObject(name)) {
                for (key in name) {
                  if (!hasProp.call(name, key)) continue;
                  val = name[key];
                  if (isFunction(val)) {
                    val = val.apply();
                  }
                  if (!this.options.ignoreDecorators && this.stringify.convertAttKey && key.indexOf(this.stringify.convertAttKey) === 0) {
                    lastChild = this.attribute(key.substr(this.stringify.convertAttKey.length), val);
                  } else if (!this.options.separateArrayItems && Array.isArray(val) && isEmpty(val)) {
                    lastChild = this.dummy();
                  } else if (isObject(val) && isEmpty(val)) {
                    lastChild = this.element(key);
                  } else if (!this.options.keepNullNodes && val == null) {
                    lastChild = this.dummy();
                  } else if (!this.options.separateArrayItems && Array.isArray(val)) {
                    for (k = 0, len1 = val.length; k < len1; k++) {
                      item = val[k];
                      childNode = {};
                      childNode[key] = item;
                      lastChild = this.element(childNode);
                    }
                  } else if (isObject(val)) {
                    if (!this.options.ignoreDecorators && this.stringify.convertTextKey && key.indexOf(this.stringify.convertTextKey) === 0) {
                      lastChild = this.element(val);
                    } else {
                      lastChild = this.element(key);
                      lastChild.element(val);
                    }
                  } else {
                    lastChild = this.element(key, val);
                  }
                }
              } else if (!this.options.keepNullNodes && text === null) {
                lastChild = this.dummy();
              } else {
                if (!this.options.ignoreDecorators && this.stringify.convertTextKey && name.indexOf(this.stringify.convertTextKey) === 0) {
                  lastChild = this.text(text);
                } else if (!this.options.ignoreDecorators && this.stringify.convertCDataKey && name.indexOf(this.stringify.convertCDataKey) === 0) {
                  lastChild = this.cdata(text);
                } else if (!this.options.ignoreDecorators && this.stringify.convertCommentKey && name.indexOf(this.stringify.convertCommentKey) === 0) {
                  lastChild = this.comment(text);
                } else if (!this.options.ignoreDecorators && this.stringify.convertRawKey && name.indexOf(this.stringify.convertRawKey) === 0) {
                  lastChild = this.raw(text);
                } else if (!this.options.ignoreDecorators && this.stringify.convertPIKey && name.indexOf(this.stringify.convertPIKey) === 0) {
                  lastChild = this.instruction(name.substr(this.stringify.convertPIKey.length), text);
                } else {
                  lastChild = this.node(name, attributes, text);
                }
              }
              if (lastChild == null) {
                throw new Error("Could not create any elements with: " + name + ". " + this.debugInfo());
              }
              return lastChild;
            }
            // Creates a child element node before the current node
            // `name` node name or an object describing the XML tree
            // `attributes` an object containing name/value pairs of attributes
            // `text` element text
            insertBefore(name, attributes, text) {
              var child, i, newChild, refChild, removed;
              if (name != null ? name.type : void 0) {
                newChild = name;
                refChild = attributes;
                newChild.setParent(this);
                if (refChild) {
                  i = children.indexOf(refChild);
                  removed = children.splice(i);
                  children.push(newChild);
                  Array.prototype.push.apply(children, removed);
                } else {
                  children.push(newChild);
                }
                return newChild;
              } else {
                if (this.isRoot) {
                  throw new Error("Cannot insert elements at root level. " + this.debugInfo(name));
                }
                i = this.parent.children.indexOf(this);
                removed = this.parent.children.splice(i);
                child = this.parent.element(name, attributes, text);
                Array.prototype.push.apply(this.parent.children, removed);
                return child;
              }
            }
            // Creates a child element node after the current node
            // `name` node name or an object describing the XML tree
            // `attributes` an object containing name/value pairs of attributes
            // `text` element text
            insertAfter(name, attributes, text) {
              var child, i, removed;
              if (this.isRoot) {
                throw new Error("Cannot insert elements at root level. " + this.debugInfo(name));
              }
              i = this.parent.children.indexOf(this);
              removed = this.parent.children.splice(i + 1);
              child = this.parent.element(name, attributes, text);
              Array.prototype.push.apply(this.parent.children, removed);
              return child;
            }
            // Deletes a child element node
            remove() {
              var i, ref1;
              if (this.isRoot) {
                throw new Error("Cannot remove the root element. " + this.debugInfo());
              }
              i = this.parent.children.indexOf(this);
              splice.apply(this.parent.children, [i, i - i + 1].concat(ref1 = [])), ref1;
              return this.parent;
            }
            // Creates a node
            // `name` name of the node
            // `attributes` an object containing name/value pairs of attributes
            // `text` element text
            node(name, attributes, text) {
              var child;
              if (name != null) {
                name = getValue(name);
              }
              attributes || (attributes = {});
              attributes = getValue(attributes);
              if (!isObject(attributes)) {
                [text, attributes] = [attributes, text];
              }
              child = new XMLElement(this, name, attributes);
              if (text != null) {
                child.text(text);
              }
              this.children.push(child);
              return child;
            }
            // Creates a text node
            // `value` element text
            text(value) {
              var child;
              if (isObject(value)) {
                this.element(value);
              }
              child = new XMLText(this, value);
              this.children.push(child);
              return this;
            }
            // Creates a CDATA node
            // `value` element text without CDATA delimiters
            cdata(value) {
              var child;
              child = new XMLCData(this, value);
              this.children.push(child);
              return this;
            }
            // Creates a comment node
            // `value` comment text
            comment(value) {
              var child;
              child = new XMLComment(this, value);
              this.children.push(child);
              return this;
            }
            // Creates a comment node before the current node
            // `value` comment text
            commentBefore(value) {
              var child, i, removed;
              i = this.parent.children.indexOf(this);
              removed = this.parent.children.splice(i);
              child = this.parent.comment(value);
              Array.prototype.push.apply(this.parent.children, removed);
              return this;
            }
            // Creates a comment node after the current node
            // `value` comment text
            commentAfter(value) {
              var child, i, removed;
              i = this.parent.children.indexOf(this);
              removed = this.parent.children.splice(i + 1);
              child = this.parent.comment(value);
              Array.prototype.push.apply(this.parent.children, removed);
              return this;
            }
            // Adds unescaped raw text
            // `value` text
            raw(value) {
              var child;
              child = new XMLRaw(this, value);
              this.children.push(child);
              return this;
            }
            // Adds a dummy node
            dummy() {
              var child;
              child = new XMLDummy(this);
              return child;
            }
            // Adds a processing instruction
            // `target` instruction target
            // `value` instruction value
            instruction(target, value) {
              var insTarget, insValue, instruction, j, len;
              if (target != null) {
                target = getValue(target);
              }
              if (value != null) {
                value = getValue(value);
              }
              if (Array.isArray(target)) {
                for (j = 0, len = target.length; j < len; j++) {
                  insTarget = target[j];
                  this.instruction(insTarget);
                }
              } else if (isObject(target)) {
                for (insTarget in target) {
                  if (!hasProp.call(target, insTarget)) continue;
                  insValue = target[insTarget];
                  this.instruction(insTarget, insValue);
                }
              } else {
                if (isFunction(value)) {
                  value = value.apply();
                }
                instruction = new XMLProcessingInstruction(this, target, value);
                this.children.push(instruction);
              }
              return this;
            }
            // Creates a processing instruction node before the current node
            // `target` instruction target
            // `value` instruction value
            instructionBefore(target, value) {
              var child, i, removed;
              i = this.parent.children.indexOf(this);
              removed = this.parent.children.splice(i);
              child = this.parent.instruction(target, value);
              Array.prototype.push.apply(this.parent.children, removed);
              return this;
            }
            // Creates a processing instruction node after the current node
            // `target` instruction target
            // `value` instruction value
            instructionAfter(target, value) {
              var child, i, removed;
              i = this.parent.children.indexOf(this);
              removed = this.parent.children.splice(i + 1);
              child = this.parent.instruction(target, value);
              Array.prototype.push.apply(this.parent.children, removed);
              return this;
            }
            // Creates the xml declaration
            // `version` A version number string, e.g. 1.0
            // `encoding` Encoding declaration, e.g. UTF-8
            // `standalone` standalone document declaration: true or false
            declaration(version, encoding, standalone) {
              var doc, xmldec;
              doc = this.document();
              xmldec = new XMLDeclaration(doc, version, encoding, standalone);
              if (doc.children.length === 0) {
                doc.children.unshift(xmldec);
              } else if (doc.children[0].type === NodeType.Declaration) {
                doc.children[0] = xmldec;
              } else {
                doc.children.unshift(xmldec);
              }
              return doc.root() || doc;
            }
            // Creates the document type declaration
            // `pubID` the public identifier of the external subset
            // `sysID` the system identifier of the external subset
            dtd(pubID, sysID) {
              var child, doc, doctype, i, j, k, len, len1, ref1, ref2;
              doc = this.document();
              doctype = new XMLDocType(doc, pubID, sysID);
              ref1 = doc.children;
              for (i = j = 0, len = ref1.length; j < len; i = ++j) {
                child = ref1[i];
                if (child.type === NodeType.DocType) {
                  doc.children[i] = doctype;
                  return doctype;
                }
              }
              ref2 = doc.children;
              for (i = k = 0, len1 = ref2.length; k < len1; i = ++k) {
                child = ref2[i];
                if (child.isRoot) {
                  doc.children.splice(i, 0, doctype);
                  return doctype;
                }
              }
              doc.children.push(doctype);
              return doctype;
            }
            // Gets the parent node
            up() {
              if (this.isRoot) {
                throw new Error("The root node has no parent. Use doc() if you need to get the document object.");
              }
              return this.parent;
            }
            // Gets the root node
            root() {
              var node;
              node = this;
              while (node) {
                if (node.type === NodeType.Document) {
                  return node.rootObject;
                } else if (node.isRoot) {
                  return node;
                } else {
                  node = node.parent;
                }
              }
            }
            // Gets the node representing the XML document
            document() {
              var node;
              node = this;
              while (node) {
                if (node.type === NodeType.Document) {
                  return node;
                } else {
                  node = node.parent;
                }
              }
            }
            // Ends the document and converts string
            end(options) {
              return this.document().end(options);
            }
            // Gets the previous node
            prev() {
              var i;
              i = this.parent.children.indexOf(this);
              if (i < 1) {
                throw new Error("Already at the first node. " + this.debugInfo());
              }
              return this.parent.children[i - 1];
            }
            // Gets the next node
            next() {
              var i;
              i = this.parent.children.indexOf(this);
              if (i === -1 || i === this.parent.children.length - 1) {
                throw new Error("Already at the last node. " + this.debugInfo());
              }
              return this.parent.children[i + 1];
            }
            // Imports cloned root from another XML document
            // `doc` the XML document to insert nodes from
            importDocument(doc) {
              var child, clonedRoot, j, len, ref1;
              clonedRoot = doc.root().clone();
              clonedRoot.parent = this;
              clonedRoot.isRoot = false;
              this.children.push(clonedRoot);
              if (this.type === NodeType.Document) {
                clonedRoot.isRoot = true;
                clonedRoot.documentObject = this;
                this.rootObject = clonedRoot;
                if (this.children) {
                  ref1 = this.children;
                  for (j = 0, len = ref1.length; j < len; j++) {
                    child = ref1[j];
                    if (child.type === NodeType.DocType) {
                      child.name = clonedRoot.name;
                      break;
                    }
                  }
                }
              }
              return this;
            }
            // Returns debug string for this node
            debugInfo(name) {
              var ref1, ref2;
              name = name || this.name;
              if (name == null && !((ref1 = this.parent) != null ? ref1.name : void 0)) {
                return "";
              } else if (name == null) {
                return "parent: <" + this.parent.name + ">";
              } else if (!((ref2 = this.parent) != null ? ref2.name : void 0)) {
                return "node: <" + name + ">";
              } else {
                return "node: <" + name + ">, parent: <" + this.parent.name + ">";
              }
            }
            // Aliases
            ele(name, attributes, text) {
              return this.element(name, attributes, text);
            }
            nod(name, attributes, text) {
              return this.node(name, attributes, text);
            }
            txt(value) {
              return this.text(value);
            }
            dat(value) {
              return this.cdata(value);
            }
            com(value) {
              return this.comment(value);
            }
            ins(target, value) {
              return this.instruction(target, value);
            }
            doc() {
              return this.document();
            }
            dec(version, encoding, standalone) {
              return this.declaration(version, encoding, standalone);
            }
            e(name, attributes, text) {
              return this.element(name, attributes, text);
            }
            n(name, attributes, text) {
              return this.node(name, attributes, text);
            }
            t(value) {
              return this.text(value);
            }
            d(value) {
              return this.cdata(value);
            }
            c(value) {
              return this.comment(value);
            }
            r(value) {
              return this.raw(value);
            }
            i(target, value) {
              return this.instruction(target, value);
            }
            u() {
              return this.up();
            }
            // can be deprecated in a future release
            importXMLBuilder(doc) {
              return this.importDocument(doc);
            }
            // Adds or modifies an attribute.
            // `name` attribute name
            // `value` attribute value
            attribute(name, value) {
              throw new Error("attribute() applies to element nodes only.");
            }
            att(name, value) {
              return this.attribute(name, value);
            }
            a(name, value) {
              return this.attribute(name, value);
            }
            // Removes an attribute
            // `name` attribute name
            removeAttribute(name) {
              throw new Error("attribute() applies to element nodes only.");
            }
            // DOM level 1 functions to be implemented later
            replaceChild(newChild, oldChild) {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
            removeChild(oldChild) {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
            appendChild(newChild) {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
            hasChildNodes() {
              return this.children.length !== 0;
            }
            cloneNode(deep) {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
            normalize() {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
            // DOM level 2
            isSupported(feature, version) {
              return true;
            }
            hasAttributes() {
              return this.attribs.length !== 0;
            }
            // DOM level 3 functions to be implemented later
            compareDocumentPosition(other) {
              var ref, res;
              ref = this;
              if (ref === other) {
                return 0;
              } else if (this.document() !== other.document()) {
                res = DocumentPosition.Disconnected | DocumentPosition.ImplementationSpecific;
                if (Math.random() < 0.5) {
                  res |= DocumentPosition.Preceding;
                } else {
                  res |= DocumentPosition.Following;
                }
                return res;
              } else if (ref.isAncestor(other)) {
                return DocumentPosition.Contains | DocumentPosition.Preceding;
              } else if (ref.isDescendant(other)) {
                return DocumentPosition.Contains | DocumentPosition.Following;
              } else if (ref.isPreceding(other)) {
                return DocumentPosition.Preceding;
              } else {
                return DocumentPosition.Following;
              }
            }
            isSameNode(other) {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
            lookupPrefix(namespaceURI) {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
            isDefaultNamespace(namespaceURI) {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
            lookupNamespaceURI(prefix) {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
            isEqualNode(node) {
              var i, j, ref1;
              if (node.nodeType !== this.nodeType) {
                return false;
              }
              if (node.children.length !== this.children.length) {
                return false;
              }
              for (i = j = 0, ref1 = this.children.length - 1; 0 <= ref1 ? j <= ref1 : j >= ref1; i = 0 <= ref1 ? ++j : --j) {
                if (!this.children[i].isEqualNode(node.children[i])) {
                  return false;
                }
              }
              return true;
            }
            getFeature(feature, version) {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
            setUserData(key, data, handler) {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
            getUserData(key) {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
            // Returns true if other is an inclusive descendant of node,
            // and false otherwise.
            contains(other) {
              if (!other) {
                return false;
              }
              return other === this || this.isDescendant(other);
            }
            // An object A is called a descendant of an object B, if either A is 
            // a child of B or A is a child of an object C that is a descendant of B.
            isDescendant(node) {
              var child, isDescendantChild, j, len, ref1;
              ref1 = this.children;
              for (j = 0, len = ref1.length; j < len; j++) {
                child = ref1[j];
                if (node === child) {
                  return true;
                }
                isDescendantChild = child.isDescendant(node);
                if (isDescendantChild) {
                  return true;
                }
              }
              return false;
            }
            // An object A is called an ancestor of an object B if and only if
            // B is a descendant of A.
            isAncestor(node) {
              return node.isDescendant(this);
            }
            // An object A is preceding an object B if A and B are in the 
            // same tree and A comes before B in tree order.
            isPreceding(node) {
              var nodePos, thisPos;
              nodePos = this.treePosition(node);
              thisPos = this.treePosition(this);
              if (nodePos === -1 || thisPos === -1) {
                return false;
              } else {
                return nodePos < thisPos;
              }
            }
            // An object A is folllowing an object B if A and B are in the 
            // same tree and A comes after B in tree order.
            isFollowing(node) {
              var nodePos, thisPos;
              nodePos = this.treePosition(node);
              thisPos = this.treePosition(this);
              if (nodePos === -1 || thisPos === -1) {
                return false;
              } else {
                return nodePos > thisPos;
              }
            }
            // Returns the preorder position of the given node in the tree, or -1
            // if the node is not in the tree.
            treePosition(node) {
              var found, pos;
              pos = 0;
              found = false;
              this.foreachTreeNode(this.document(), function(childNode) {
                pos++;
                if (!found && childNode === node) {
                  return found = true;
                }
              });
              if (found) {
                return pos;
              } else {
                return -1;
              }
            }
            // Depth-first preorder traversal through the XML tree
            foreachTreeNode(node, func) {
              var child, j, len, ref1, res;
              node || (node = this.document());
              ref1 = node.children;
              for (j = 0, len = ref1.length; j < len; j++) {
                child = ref1[j];
                if (res = func(child)) {
                  return res;
                } else {
                  res = this.foreachTreeNode(child, func);
                  if (res) {
                    return res;
                  }
                }
              }
            }
          }
          ;
          Object.defineProperty(XMLNode2.prototype, "nodeName", {
            get: function() {
              return this.name;
            }
          });
          Object.defineProperty(XMLNode2.prototype, "nodeType", {
            get: function() {
              return this.type;
            }
          });
          Object.defineProperty(XMLNode2.prototype, "nodeValue", {
            get: function() {
              return this.value;
            }
          });
          Object.defineProperty(XMLNode2.prototype, "parentNode", {
            get: function() {
              return this.parent;
            }
          });
          Object.defineProperty(XMLNode2.prototype, "childNodes", {
            get: function() {
              if (!this.childNodeList || !this.childNodeList.nodes) {
                this.childNodeList = new XMLNodeList(this.children);
              }
              return this.childNodeList;
            }
          });
          Object.defineProperty(XMLNode2.prototype, "firstChild", {
            get: function() {
              return this.children[0] || null;
            }
          });
          Object.defineProperty(XMLNode2.prototype, "lastChild", {
            get: function() {
              return this.children[this.children.length - 1] || null;
            }
          });
          Object.defineProperty(XMLNode2.prototype, "previousSibling", {
            get: function() {
              var i;
              i = this.parent.children.indexOf(this);
              return this.parent.children[i - 1] || null;
            }
          });
          Object.defineProperty(XMLNode2.prototype, "nextSibling", {
            get: function() {
              var i;
              i = this.parent.children.indexOf(this);
              return this.parent.children[i + 1] || null;
            }
          });
          Object.defineProperty(XMLNode2.prototype, "ownerDocument", {
            get: function() {
              return this.document() || null;
            }
          });
          Object.defineProperty(XMLNode2.prototype, "textContent", {
            get: function() {
              var child, j, len, ref1, str;
              if (this.nodeType === NodeType.Element || this.nodeType === NodeType.DocumentFragment) {
                str = "";
                ref1 = this.children;
                for (j = 0, len = ref1.length; j < len; j++) {
                  child = ref1[j];
                  if (child.textContent) {
                    str += child.textContent;
                  }
                }
                return str;
              } else {
                return null;
              }
            },
            set: function(value) {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
          });
          return XMLNode2;
        }).call(this);
      }).call(exports);
    }
  });

  // node_modules/xmlbuilder/lib/XMLStringifier.js
  var require_XMLStringifier = __commonJS({
    "node_modules/xmlbuilder/lib/XMLStringifier.js"(exports, module) {
      (function() {
        var XMLStringifier, hasProp = {}.hasOwnProperty;
        module.exports = XMLStringifier = (function() {
          class XMLStringifier2 {
            // Initializes a new instance of `XMLStringifier`
            // `options.version` The version number string of the XML spec to validate against, e.g. 1.0
            // `options.noDoubleEncoding` whether existing html entities are encoded: true or false
            // `options.stringify` a set of functions to use for converting values to strings
            // `options.noValidation` whether values will be validated and escaped or returned as is
            // `options.invalidCharReplacement` a character to replace invalid characters and disable character validation
            constructor(options) {
              var key, ref, value;
              this.assertLegalChar = this.assertLegalChar.bind(this);
              this.assertLegalName = this.assertLegalName.bind(this);
              options || (options = {});
              this.options = options;
              if (!this.options.version) {
                this.options.version = "1.0";
              }
              ref = options.stringify || {};
              for (key in ref) {
                if (!hasProp.call(ref, key)) continue;
                value = ref[key];
                this[key] = value;
              }
            }
            // Defaults
            name(val) {
              if (this.options.noValidation) {
                return val;
              }
              return this.assertLegalName("" + val || "");
            }
            text(val) {
              if (this.options.noValidation) {
                return val;
              }
              return this.assertLegalChar(this.textEscape("" + val || ""));
            }
            cdata(val) {
              if (this.options.noValidation) {
                return val;
              }
              val = "" + val || "";
              val = val.replace("]]>", "]]]]><![CDATA[>");
              return this.assertLegalChar(val);
            }
            comment(val) {
              if (this.options.noValidation) {
                return val;
              }
              val = "" + val || "";
              if (val.match(/--/)) {
                throw new Error("Comment text cannot contain double-hypen: " + val);
              }
              return this.assertLegalChar(val);
            }
            raw(val) {
              if (this.options.noValidation) {
                return val;
              }
              return "" + val || "";
            }
            attValue(val) {
              if (this.options.noValidation) {
                return val;
              }
              return this.assertLegalChar(this.attEscape(val = "" + val || ""));
            }
            insTarget(val) {
              if (this.options.noValidation) {
                return val;
              }
              return this.assertLegalChar("" + val || "");
            }
            insValue(val) {
              if (this.options.noValidation) {
                return val;
              }
              val = "" + val || "";
              if (val.match(/\?>/)) {
                throw new Error("Invalid processing instruction value: " + val);
              }
              return this.assertLegalChar(val);
            }
            xmlVersion(val) {
              if (this.options.noValidation) {
                return val;
              }
              val = "" + val || "";
              if (!val.match(/1\.[0-9]+/)) {
                throw new Error("Invalid version number: " + val);
              }
              return val;
            }
            xmlEncoding(val) {
              if (this.options.noValidation) {
                return val;
              }
              val = "" + val || "";
              if (!val.match(/^[A-Za-z](?:[A-Za-z0-9._-])*$/)) {
                throw new Error("Invalid encoding: " + val);
              }
              return this.assertLegalChar(val);
            }
            xmlStandalone(val) {
              if (this.options.noValidation) {
                return val;
              }
              if (val) {
                return "yes";
              } else {
                return "no";
              }
            }
            dtdPubID(val) {
              if (this.options.noValidation) {
                return val;
              }
              return this.assertLegalChar("" + val || "");
            }
            dtdSysID(val) {
              if (this.options.noValidation) {
                return val;
              }
              return this.assertLegalChar("" + val || "");
            }
            dtdElementValue(val) {
              if (this.options.noValidation) {
                return val;
              }
              return this.assertLegalChar("" + val || "");
            }
            dtdAttType(val) {
              if (this.options.noValidation) {
                return val;
              }
              return this.assertLegalChar("" + val || "");
            }
            dtdAttDefault(val) {
              if (this.options.noValidation) {
                return val;
              }
              return this.assertLegalChar("" + val || "");
            }
            dtdEntityValue(val) {
              if (this.options.noValidation) {
                return val;
              }
              return this.assertLegalChar("" + val || "");
            }
            dtdNData(val) {
              if (this.options.noValidation) {
                return val;
              }
              return this.assertLegalChar("" + val || "");
            }
            assertLegalChar(str) {
              var regex, res;
              if (this.options.noValidation) {
                return str;
              }
              if (this.options.version === "1.0") {
                regex = /[\0-\x08\x0B\f\x0E-\x1F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g;
                if (this.options.invalidCharReplacement !== void 0) {
                  str = str.replace(regex, this.options.invalidCharReplacement);
                } else if (res = str.match(regex)) {
                  throw new Error(`Invalid character in string: ${str} at index ${res.index}`);
                }
              } else if (this.options.version === "1.1") {
                regex = /[\0\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g;
                if (this.options.invalidCharReplacement !== void 0) {
                  str = str.replace(regex, this.options.invalidCharReplacement);
                } else if (res = str.match(regex)) {
                  throw new Error(`Invalid character in string: ${str} at index ${res.index}`);
                }
              }
              return str;
            }
            assertLegalName(str) {
              var regex;
              if (this.options.noValidation) {
                return str;
              }
              str = this.assertLegalChar(str);
              regex = /^([:A-Z_a-z\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])([\x2D\.0-:A-Z_a-z\xB7\xC0-\xD6\xD8-\xF6\xF8-\u037D\u037F-\u1FFF\u200C\u200D\u203F\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])*$/;
              if (!str.match(regex)) {
                throw new Error(`Invalid character in name: ${str}`);
              }
              return str;
            }
            // Escapes special characters in text
            // See http://www.w3.org/TR/2000/WD-xml-c14n-20000119.html#charescaping
            // `str` the string to escape
            textEscape(str) {
              var ampregex;
              if (this.options.noValidation) {
                return str;
              }
              ampregex = this.options.noDoubleEncoding ? /(?!&(lt|gt|amp|apos|quot);)&/g : /&/g;
              return str.replace(ampregex, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\r/g, "&#xD;");
            }
            // Escapes special characters in attribute values
            // See http://www.w3.org/TR/2000/WD-xml-c14n-20000119.html#charescaping
            // `str` the string to escape
            attEscape(str) {
              var ampregex;
              if (this.options.noValidation) {
                return str;
              }
              ampregex = this.options.noDoubleEncoding ? /(?!&(lt|gt|amp|apos|quot);)&/g : /&/g;
              return str.replace(ampregex, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;").replace(/\t/g, "&#x9;").replace(/\n/g, "&#xA;").replace(/\r/g, "&#xD;");
            }
          }
          ;
          XMLStringifier2.prototype.convertAttKey = "@";
          XMLStringifier2.prototype.convertPIKey = "?";
          XMLStringifier2.prototype.convertTextKey = "#text";
          XMLStringifier2.prototype.convertCDataKey = "#cdata";
          XMLStringifier2.prototype.convertCommentKey = "#comment";
          XMLStringifier2.prototype.convertRawKey = "#raw";
          return XMLStringifier2;
        }).call(this);
      }).call(exports);
    }
  });

  // node_modules/xmlbuilder/lib/WriterState.js
  var require_WriterState = __commonJS({
    "node_modules/xmlbuilder/lib/WriterState.js"(exports, module) {
      (function() {
        module.exports = {
          None: 0,
          OpenTag: 1,
          InsideTag: 2,
          CloseTag: 3
        };
      }).call(exports);
    }
  });

  // node_modules/xmlbuilder/lib/XMLWriterBase.js
  var require_XMLWriterBase = __commonJS({
    "node_modules/xmlbuilder/lib/XMLWriterBase.js"(exports, module) {
      (function() {
        var NodeType, WriterState, XMLCData, XMLComment, XMLDTDAttList, XMLDTDElement, XMLDTDEntity, XMLDTDNotation, XMLDeclaration, XMLDocType, XMLDummy, XMLElement, XMLProcessingInstruction, XMLRaw, XMLText, XMLWriterBase, assign, hasProp = {}.hasOwnProperty;
        ({ assign } = require_Utility());
        NodeType = require_NodeType();
        XMLDeclaration = require_XMLDeclaration();
        XMLDocType = require_XMLDocType();
        XMLCData = require_XMLCData();
        XMLComment = require_XMLComment();
        XMLElement = require_XMLElement();
        XMLRaw = require_XMLRaw();
        XMLText = require_XMLText();
        XMLProcessingInstruction = require_XMLProcessingInstruction();
        XMLDummy = require_XMLDummy();
        XMLDTDAttList = require_XMLDTDAttList();
        XMLDTDElement = require_XMLDTDElement();
        XMLDTDEntity = require_XMLDTDEntity();
        XMLDTDNotation = require_XMLDTDNotation();
        WriterState = require_WriterState();
        module.exports = XMLWriterBase = class XMLWriterBase {
          // Initializes a new instance of `XMLWriterBase`
          // `options.pretty` pretty prints the result
          // `options.indent` indentation string
          // `options.newline` newline sequence
          // `options.offset` a fixed number of indentations to add to every line
          // `options.width` maximum column width
          // `options.allowEmpty` do not self close empty element tags
          // 'options.dontPrettyTextNodes' if any text is present in node, don't indent or LF
          // `options.spaceBeforeSlash` add a space before the closing slash of empty elements
          constructor(options) {
            var key, ref, value;
            options || (options = {});
            this.options = options;
            ref = options.writer || {};
            for (key in ref) {
              if (!hasProp.call(ref, key)) continue;
              value = ref[key];
              this["_" + key] = this[key];
              this[key] = value;
            }
          }
          // Filters writer options and provides defaults
          // `options` writer options
          filterOptions(options) {
            var filteredOptions, ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7;
            options || (options = {});
            options = assign({}, this.options, options);
            filteredOptions = {
              writer: this
            };
            filteredOptions.pretty = options.pretty || false;
            filteredOptions.allowEmpty = options.allowEmpty || false;
            filteredOptions.indent = (ref = options.indent) != null ? ref : "  ";
            filteredOptions.newline = (ref1 = options.newline) != null ? ref1 : "\n";
            filteredOptions.offset = (ref2 = options.offset) != null ? ref2 : 0;
            filteredOptions.width = (ref3 = options.width) != null ? ref3 : 0;
            filteredOptions.dontPrettyTextNodes = (ref4 = (ref5 = options.dontPrettyTextNodes) != null ? ref5 : options.dontprettytextnodes) != null ? ref4 : 0;
            filteredOptions.spaceBeforeSlash = (ref6 = (ref7 = options.spaceBeforeSlash) != null ? ref7 : options.spacebeforeslash) != null ? ref6 : "";
            if (filteredOptions.spaceBeforeSlash === true) {
              filteredOptions.spaceBeforeSlash = " ";
            }
            filteredOptions.suppressPrettyCount = 0;
            filteredOptions.user = {};
            filteredOptions.state = WriterState.None;
            return filteredOptions;
          }
          // Returns the indentation string for the current level
          // `node` current node
          // `options` writer options
          // `level` current indentation level
          indent(node, options, level) {
            var indentLevel;
            if (!options.pretty || options.suppressPrettyCount) {
              return "";
            } else if (options.pretty) {
              indentLevel = (level || 0) + options.offset + 1;
              if (indentLevel > 0) {
                return new Array(indentLevel).join(options.indent);
              }
            }
            return "";
          }
          // Returns the newline string
          // `node` current node
          // `options` writer options
          // `level` current indentation level
          endline(node, options, level) {
            if (!options.pretty || options.suppressPrettyCount) {
              return "";
            } else {
              return options.newline;
            }
          }
          attribute(att, options, level) {
            var r;
            this.openAttribute(att, options, level);
            if (options.pretty && options.width > 0) {
              r = att.name + '="' + att.value + '"';
            } else {
              r = " " + att.name + '="' + att.value + '"';
            }
            this.closeAttribute(att, options, level);
            return r;
          }
          cdata(node, options, level) {
            var r;
            this.openNode(node, options, level);
            options.state = WriterState.OpenTag;
            r = this.indent(node, options, level) + "<![CDATA[";
            options.state = WriterState.InsideTag;
            r += node.value;
            options.state = WriterState.CloseTag;
            r += "]]>" + this.endline(node, options, level);
            options.state = WriterState.None;
            this.closeNode(node, options, level);
            return r;
          }
          comment(node, options, level) {
            var r;
            this.openNode(node, options, level);
            options.state = WriterState.OpenTag;
            r = this.indent(node, options, level) + "<!-- ";
            options.state = WriterState.InsideTag;
            r += node.value;
            options.state = WriterState.CloseTag;
            r += " -->" + this.endline(node, options, level);
            options.state = WriterState.None;
            this.closeNode(node, options, level);
            return r;
          }
          declaration(node, options, level) {
            var r;
            this.openNode(node, options, level);
            options.state = WriterState.OpenTag;
            r = this.indent(node, options, level) + "<?xml";
            options.state = WriterState.InsideTag;
            r += ' version="' + node.version + '"';
            if (node.encoding != null) {
              r += ' encoding="' + node.encoding + '"';
            }
            if (node.standalone != null) {
              r += ' standalone="' + node.standalone + '"';
            }
            options.state = WriterState.CloseTag;
            r += options.spaceBeforeSlash + "?>";
            r += this.endline(node, options, level);
            options.state = WriterState.None;
            this.closeNode(node, options, level);
            return r;
          }
          docType(node, options, level) {
            var child, i, len1, r, ref;
            level || (level = 0);
            this.openNode(node, options, level);
            options.state = WriterState.OpenTag;
            r = this.indent(node, options, level);
            r += "<!DOCTYPE " + node.root().name;
            if (node.pubID && node.sysID) {
              r += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
            } else if (node.sysID) {
              r += ' SYSTEM "' + node.sysID + '"';
            }
            if (node.children.length > 0) {
              r += " [";
              r += this.endline(node, options, level);
              options.state = WriterState.InsideTag;
              ref = node.children;
              for (i = 0, len1 = ref.length; i < len1; i++) {
                child = ref[i];
                r += this.writeChildNode(child, options, level + 1);
              }
              options.state = WriterState.CloseTag;
              r += "]";
            }
            options.state = WriterState.CloseTag;
            r += options.spaceBeforeSlash + ">";
            r += this.endline(node, options, level);
            options.state = WriterState.None;
            this.closeNode(node, options, level);
            return r;
          }
          element(node, options, level) {
            var att, attLen, child, childNodeCount, firstChildNode, i, j, len, len1, len2, name, prettySuppressed, r, ratt, ref, ref1, ref2, ref3, rline;
            level || (level = 0);
            prettySuppressed = false;
            this.openNode(node, options, level);
            options.state = WriterState.OpenTag;
            r = this.indent(node, options, level) + "<" + node.name;
            if (options.pretty && options.width > 0) {
              len = r.length;
              ref = node.attribs;
              for (name in ref) {
                if (!hasProp.call(ref, name)) continue;
                att = ref[name];
                ratt = this.attribute(att, options, level);
                attLen = ratt.length;
                if (len + attLen > options.width) {
                  rline = this.indent(node, options, level + 1) + ratt;
                  r += this.endline(node, options, level) + rline;
                  len = rline.length;
                } else {
                  rline = " " + ratt;
                  r += rline;
                  len += rline.length;
                }
              }
            } else {
              ref1 = node.attribs;
              for (name in ref1) {
                if (!hasProp.call(ref1, name)) continue;
                att = ref1[name];
                r += this.attribute(att, options, level);
              }
            }
            childNodeCount = node.children.length;
            firstChildNode = childNodeCount === 0 ? null : node.children[0];
            if (childNodeCount === 0 || node.children.every(function(e) {
              return (e.type === NodeType.Text || e.type === NodeType.Raw || e.type === NodeType.CData) && e.value === "";
            })) {
              if (options.allowEmpty) {
                r += ">";
                options.state = WriterState.CloseTag;
                r += "</" + node.name + ">" + this.endline(node, options, level);
              } else {
                options.state = WriterState.CloseTag;
                r += options.spaceBeforeSlash + "/>" + this.endline(node, options, level);
              }
            } else if (options.pretty && childNodeCount === 1 && (firstChildNode.type === NodeType.Text || firstChildNode.type === NodeType.Raw || firstChildNode.type === NodeType.CData) && firstChildNode.value != null) {
              r += ">";
              options.state = WriterState.InsideTag;
              options.suppressPrettyCount++;
              prettySuppressed = true;
              r += this.writeChildNode(firstChildNode, options, level + 1);
              options.suppressPrettyCount--;
              prettySuppressed = false;
              options.state = WriterState.CloseTag;
              r += "</" + node.name + ">" + this.endline(node, options, level);
            } else {
              if (options.dontPrettyTextNodes) {
                ref2 = node.children;
                for (i = 0, len1 = ref2.length; i < len1; i++) {
                  child = ref2[i];
                  if ((child.type === NodeType.Text || child.type === NodeType.Raw || child.type === NodeType.CData) && child.value != null) {
                    options.suppressPrettyCount++;
                    prettySuppressed = true;
                    break;
                  }
                }
              }
              r += ">" + this.endline(node, options, level);
              options.state = WriterState.InsideTag;
              ref3 = node.children;
              for (j = 0, len2 = ref3.length; j < len2; j++) {
                child = ref3[j];
                r += this.writeChildNode(child, options, level + 1);
              }
              options.state = WriterState.CloseTag;
              r += this.indent(node, options, level) + "</" + node.name + ">";
              if (prettySuppressed) {
                options.suppressPrettyCount--;
              }
              r += this.endline(node, options, level);
              options.state = WriterState.None;
            }
            this.closeNode(node, options, level);
            return r;
          }
          writeChildNode(node, options, level) {
            switch (node.type) {
              case NodeType.CData:
                return this.cdata(node, options, level);
              case NodeType.Comment:
                return this.comment(node, options, level);
              case NodeType.Element:
                return this.element(node, options, level);
              case NodeType.Raw:
                return this.raw(node, options, level);
              case NodeType.Text:
                return this.text(node, options, level);
              case NodeType.ProcessingInstruction:
                return this.processingInstruction(node, options, level);
              case NodeType.Dummy:
                return "";
              case NodeType.Declaration:
                return this.declaration(node, options, level);
              case NodeType.DocType:
                return this.docType(node, options, level);
              case NodeType.AttributeDeclaration:
                return this.dtdAttList(node, options, level);
              case NodeType.ElementDeclaration:
                return this.dtdElement(node, options, level);
              case NodeType.EntityDeclaration:
                return this.dtdEntity(node, options, level);
              case NodeType.NotationDeclaration:
                return this.dtdNotation(node, options, level);
              default:
                throw new Error("Unknown XML node type: " + node.constructor.name);
            }
          }
          processingInstruction(node, options, level) {
            var r;
            this.openNode(node, options, level);
            options.state = WriterState.OpenTag;
            r = this.indent(node, options, level) + "<?";
            options.state = WriterState.InsideTag;
            r += node.target;
            if (node.value) {
              r += " " + node.value;
            }
            options.state = WriterState.CloseTag;
            r += options.spaceBeforeSlash + "?>";
            r += this.endline(node, options, level);
            options.state = WriterState.None;
            this.closeNode(node, options, level);
            return r;
          }
          raw(node, options, level) {
            var r;
            this.openNode(node, options, level);
            options.state = WriterState.OpenTag;
            r = this.indent(node, options, level);
            options.state = WriterState.InsideTag;
            r += node.value;
            options.state = WriterState.CloseTag;
            r += this.endline(node, options, level);
            options.state = WriterState.None;
            this.closeNode(node, options, level);
            return r;
          }
          text(node, options, level) {
            var r;
            this.openNode(node, options, level);
            options.state = WriterState.OpenTag;
            r = this.indent(node, options, level);
            options.state = WriterState.InsideTag;
            r += node.value;
            options.state = WriterState.CloseTag;
            r += this.endline(node, options, level);
            options.state = WriterState.None;
            this.closeNode(node, options, level);
            return r;
          }
          dtdAttList(node, options, level) {
            var r;
            this.openNode(node, options, level);
            options.state = WriterState.OpenTag;
            r = this.indent(node, options, level) + "<!ATTLIST";
            options.state = WriterState.InsideTag;
            r += " " + node.elementName + " " + node.attributeName + " " + node.attributeType;
            if (node.defaultValueType !== "#DEFAULT") {
              r += " " + node.defaultValueType;
            }
            if (node.defaultValue) {
              r += ' "' + node.defaultValue + '"';
            }
            options.state = WriterState.CloseTag;
            r += options.spaceBeforeSlash + ">" + this.endline(node, options, level);
            options.state = WriterState.None;
            this.closeNode(node, options, level);
            return r;
          }
          dtdElement(node, options, level) {
            var r;
            this.openNode(node, options, level);
            options.state = WriterState.OpenTag;
            r = this.indent(node, options, level) + "<!ELEMENT";
            options.state = WriterState.InsideTag;
            r += " " + node.name + " " + node.value;
            options.state = WriterState.CloseTag;
            r += options.spaceBeforeSlash + ">" + this.endline(node, options, level);
            options.state = WriterState.None;
            this.closeNode(node, options, level);
            return r;
          }
          dtdEntity(node, options, level) {
            var r;
            this.openNode(node, options, level);
            options.state = WriterState.OpenTag;
            r = this.indent(node, options, level) + "<!ENTITY";
            options.state = WriterState.InsideTag;
            if (node.pe) {
              r += " %";
            }
            r += " " + node.name;
            if (node.value) {
              r += ' "' + node.value + '"';
            } else {
              if (node.pubID && node.sysID) {
                r += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
              } else if (node.sysID) {
                r += ' SYSTEM "' + node.sysID + '"';
              }
              if (node.nData) {
                r += " NDATA " + node.nData;
              }
            }
            options.state = WriterState.CloseTag;
            r += options.spaceBeforeSlash + ">" + this.endline(node, options, level);
            options.state = WriterState.None;
            this.closeNode(node, options, level);
            return r;
          }
          dtdNotation(node, options, level) {
            var r;
            this.openNode(node, options, level);
            options.state = WriterState.OpenTag;
            r = this.indent(node, options, level) + "<!NOTATION";
            options.state = WriterState.InsideTag;
            r += " " + node.name;
            if (node.pubID && node.sysID) {
              r += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
            } else if (node.pubID) {
              r += ' PUBLIC "' + node.pubID + '"';
            } else if (node.sysID) {
              r += ' SYSTEM "' + node.sysID + '"';
            }
            options.state = WriterState.CloseTag;
            r += options.spaceBeforeSlash + ">" + this.endline(node, options, level);
            options.state = WriterState.None;
            this.closeNode(node, options, level);
            return r;
          }
          openNode(node, options, level) {
          }
          closeNode(node, options, level) {
          }
          openAttribute(att, options, level) {
          }
          closeAttribute(att, options, level) {
          }
        };
      }).call(exports);
    }
  });

  // node_modules/xmlbuilder/lib/XMLStringWriter.js
  var require_XMLStringWriter = __commonJS({
    "node_modules/xmlbuilder/lib/XMLStringWriter.js"(exports, module) {
      (function() {
        var XMLStringWriter, XMLWriterBase;
        XMLWriterBase = require_XMLWriterBase();
        module.exports = XMLStringWriter = class XMLStringWriter extends XMLWriterBase {
          // Initializes a new instance of `XMLStringWriter`
          // `options.pretty` pretty prints the result
          // `options.indent` indentation string
          // `options.newline` newline sequence
          // `options.offset` a fixed number of indentations to add to every line
          // `options.allowEmpty` do not self close empty element tags
          // 'options.dontPrettyTextNodes' if any text is present in node, don't indent or LF
          // `options.spaceBeforeSlash` add a space before the closing slash of empty elements
          constructor(options) {
            super(options);
          }
          document(doc, options) {
            var child, i, len, r, ref;
            options = this.filterOptions(options);
            r = "";
            ref = doc.children;
            for (i = 0, len = ref.length; i < len; i++) {
              child = ref[i];
              r += this.writeChildNode(child, options, 0);
            }
            if (options.pretty && r.slice(-options.newline.length) === options.newline) {
              r = r.slice(0, -options.newline.length);
            }
            return r;
          }
        };
      }).call(exports);
    }
  });

  // node_modules/xmlbuilder/lib/XMLDocument.js
  var require_XMLDocument = __commonJS({
    "node_modules/xmlbuilder/lib/XMLDocument.js"(exports, module) {
      (function() {
        var NodeType, XMLDOMConfiguration, XMLDOMImplementation, XMLDocument, XMLNode, XMLStringWriter, XMLStringifier, isPlainObject;
        ({ isPlainObject } = require_Utility());
        XMLDOMImplementation = require_XMLDOMImplementation();
        XMLDOMConfiguration = require_XMLDOMConfiguration();
        XMLNode = require_XMLNode();
        NodeType = require_NodeType();
        XMLStringifier = require_XMLStringifier();
        XMLStringWriter = require_XMLStringWriter();
        module.exports = XMLDocument = (function() {
          class XMLDocument2 extends XMLNode {
            // Initializes a new instance of `XMLDocument`
            // `options.keepNullNodes` whether nodes with null values will be kept
            //     or ignored: true or false
            // `options.keepNullAttributes` whether attributes with null values will be
            //     kept or ignored: true or false
            // `options.ignoreDecorators` whether decorator strings will be ignored when
            //     converting JS objects: true or false
            // `options.separateArrayItems` whether array items are created as separate
            //     nodes when passed as an object value: true or false
            // `options.noDoubleEncoding` whether existing html entities are encoded:
            //     true or false
            // `options.stringify` a set of functions to use for converting values to
            //     strings
            // `options.writer` the default XML writer to use for converting nodes to
            //     string. If the default writer is not set, the built-in XMLStringWriter
            //     will be used instead.
            constructor(options) {
              super(null);
              this.name = "#document";
              this.type = NodeType.Document;
              this.documentURI = null;
              this.domConfig = new XMLDOMConfiguration();
              options || (options = {});
              if (!options.writer) {
                options.writer = new XMLStringWriter();
              }
              this.options = options;
              this.stringify = new XMLStringifier(options);
            }
            // Ends the document and passes it to the given XML writer
            // `writer` is either an XML writer or a plain object to pass to the
            // constructor of the default XML writer. The default writer is assigned when
            // creating the XML document. Following flags are recognized by the
            // built-in XMLStringWriter:
            //   `writer.pretty` pretty prints the result
            //   `writer.indent` indentation for pretty print
            //   `writer.offset` how many indentations to add to every line for pretty print
            //   `writer.newline` newline sequence for pretty print
            end(writer) {
              var writerOptions;
              writerOptions = {};
              if (!writer) {
                writer = this.options.writer;
              } else if (isPlainObject(writer)) {
                writerOptions = writer;
                writer = this.options.writer;
              }
              return writer.document(this, writer.filterOptions(writerOptions));
            }
            // Converts the XML document to string
            // `options.pretty` pretty prints the result
            // `options.indent` indentation for pretty print
            // `options.offset` how many indentations to add to every line for pretty print
            // `options.newline` newline sequence for pretty print
            toString(options) {
              return this.options.writer.document(this, this.options.writer.filterOptions(options));
            }
            // DOM level 1 functions to be implemented later
            createElement(tagName) {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
            createDocumentFragment() {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
            createTextNode(data) {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
            createComment(data) {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
            createCDATASection(data) {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
            createProcessingInstruction(target, data) {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
            createAttribute(name) {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
            createEntityReference(name) {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
            getElementsByTagName(tagname) {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
            // DOM level 2 functions to be implemented later
            importNode(importedNode, deep) {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
            createElementNS(namespaceURI, qualifiedName) {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
            createAttributeNS(namespaceURI, qualifiedName) {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
            getElementsByTagNameNS(namespaceURI, localName) {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
            getElementById(elementId) {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
            // DOM level 3 functions to be implemented later
            adoptNode(source) {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
            normalizeDocument() {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
            renameNode(node, namespaceURI, qualifiedName) {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
            // DOM level 4 functions to be implemented later
            getElementsByClassName(classNames) {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
            createEvent(eventInterface) {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
            createRange() {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
            createNodeIterator(root, whatToShow, filter) {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
            createTreeWalker(root, whatToShow, filter) {
              throw new Error("This DOM method is not implemented." + this.debugInfo());
            }
          }
          ;
          Object.defineProperty(XMLDocument2.prototype, "implementation", {
            value: new XMLDOMImplementation()
          });
          Object.defineProperty(XMLDocument2.prototype, "doctype", {
            get: function() {
              var child, i, len, ref;
              ref = this.children;
              for (i = 0, len = ref.length; i < len; i++) {
                child = ref[i];
                if (child.type === NodeType.DocType) {
                  return child;
                }
              }
              return null;
            }
          });
          Object.defineProperty(XMLDocument2.prototype, "documentElement", {
            get: function() {
              return this.rootObject || null;
            }
          });
          Object.defineProperty(XMLDocument2.prototype, "inputEncoding", {
            get: function() {
              return null;
            }
          });
          Object.defineProperty(XMLDocument2.prototype, "strictErrorChecking", {
            get: function() {
              return false;
            }
          });
          Object.defineProperty(XMLDocument2.prototype, "xmlEncoding", {
            get: function() {
              if (this.children.length !== 0 && this.children[0].type === NodeType.Declaration) {
                return this.children[0].encoding;
              } else {
                return null;
              }
            }
          });
          Object.defineProperty(XMLDocument2.prototype, "xmlStandalone", {
            get: function() {
              if (this.children.length !== 0 && this.children[0].type === NodeType.Declaration) {
                return this.children[0].standalone === "yes";
              } else {
                return false;
              }
            }
          });
          Object.defineProperty(XMLDocument2.prototype, "xmlVersion", {
            get: function() {
              if (this.children.length !== 0 && this.children[0].type === NodeType.Declaration) {
                return this.children[0].version;
              } else {
                return "1.0";
              }
            }
          });
          Object.defineProperty(XMLDocument2.prototype, "URL", {
            get: function() {
              return this.documentURI;
            }
          });
          Object.defineProperty(XMLDocument2.prototype, "origin", {
            get: function() {
              return null;
            }
          });
          Object.defineProperty(XMLDocument2.prototype, "compatMode", {
            get: function() {
              return null;
            }
          });
          Object.defineProperty(XMLDocument2.prototype, "characterSet", {
            get: function() {
              return null;
            }
          });
          Object.defineProperty(XMLDocument2.prototype, "contentType", {
            get: function() {
              return null;
            }
          });
          return XMLDocument2;
        }).call(this);
      }).call(exports);
    }
  });

  // node_modules/xmlbuilder/lib/XMLDocumentCB.js
  var require_XMLDocumentCB = __commonJS({
    "node_modules/xmlbuilder/lib/XMLDocumentCB.js"(exports, module) {
      (function() {
        var NodeType, WriterState, XMLAttribute, XMLCData, XMLComment, XMLDTDAttList, XMLDTDElement, XMLDTDEntity, XMLDTDNotation, XMLDeclaration, XMLDocType, XMLDocument, XMLDocumentCB, XMLElement, XMLProcessingInstruction, XMLRaw, XMLStringWriter, XMLStringifier, XMLText, getValue, isFunction, isObject, isPlainObject, hasProp = {}.hasOwnProperty;
        ({ isObject, isFunction, isPlainObject, getValue } = require_Utility());
        NodeType = require_NodeType();
        XMLDocument = require_XMLDocument();
        XMLElement = require_XMLElement();
        XMLCData = require_XMLCData();
        XMLComment = require_XMLComment();
        XMLRaw = require_XMLRaw();
        XMLText = require_XMLText();
        XMLProcessingInstruction = require_XMLProcessingInstruction();
        XMLDeclaration = require_XMLDeclaration();
        XMLDocType = require_XMLDocType();
        XMLDTDAttList = require_XMLDTDAttList();
        XMLDTDEntity = require_XMLDTDEntity();
        XMLDTDElement = require_XMLDTDElement();
        XMLDTDNotation = require_XMLDTDNotation();
        XMLAttribute = require_XMLAttribute();
        XMLStringifier = require_XMLStringifier();
        XMLStringWriter = require_XMLStringWriter();
        WriterState = require_WriterState();
        module.exports = XMLDocumentCB = class XMLDocumentCB {
          // Initializes a new instance of `XMLDocumentCB`
          // `options.keepNullNodes` whether nodes with null values will be kept
          //     or ignored: true or false
          // `options.keepNullAttributes` whether attributes with null values will be
          //     kept or ignored: true or false
          // `options.ignoreDecorators` whether decorator strings will be ignored when
          //     converting JS objects: true or false
          // `options.separateArrayItems` whether array items are created as separate
          //     nodes when passed as an object value: true or false
          // `options.noDoubleEncoding` whether existing html entities are encoded:
          //     true or false
          // `options.stringify` a set of functions to use for converting values to
          //     strings
          // `options.writer` the default XML writer to use for converting nodes to
          //     string. If the default writer is not set, the built-in XMLStringWriter
          //     will be used instead.
          // `onData` the function to be called when a new chunk of XML is output. The
          //          string containing the XML chunk is passed to `onData` as its first
          //          argument, and the current indentation level as its second argument.
          // `onEnd`  the function to be called when the XML document is completed with
          //          `end`. `onEnd` does not receive any arguments.
          constructor(options, onData, onEnd) {
            var writerOptions;
            this.name = "?xml";
            this.type = NodeType.Document;
            options || (options = {});
            writerOptions = {};
            if (!options.writer) {
              options.writer = new XMLStringWriter();
            } else if (isPlainObject(options.writer)) {
              writerOptions = options.writer;
              options.writer = new XMLStringWriter();
            }
            this.options = options;
            this.writer = options.writer;
            this.writerOptions = this.writer.filterOptions(writerOptions);
            this.stringify = new XMLStringifier(options);
            this.onDataCallback = onData || function() {
            };
            this.onEndCallback = onEnd || function() {
            };
            this.currentNode = null;
            this.currentLevel = -1;
            this.openTags = {};
            this.documentStarted = false;
            this.documentCompleted = false;
            this.root = null;
          }
          // Creates a child element node from the given XMLNode
          // `node` the child node
          createChildNode(node) {
            var att, attName, attributes, child, i, len, ref, ref1;
            switch (node.type) {
              case NodeType.CData:
                this.cdata(node.value);
                break;
              case NodeType.Comment:
                this.comment(node.value);
                break;
              case NodeType.Element:
                attributes = {};
                ref = node.attribs;
                for (attName in ref) {
                  if (!hasProp.call(ref, attName)) continue;
                  att = ref[attName];
                  attributes[attName] = att.value;
                }
                this.node(node.name, attributes);
                break;
              case NodeType.Dummy:
                this.dummy();
                break;
              case NodeType.Raw:
                this.raw(node.value);
                break;
              case NodeType.Text:
                this.text(node.value);
                break;
              case NodeType.ProcessingInstruction:
                this.instruction(node.target, node.value);
                break;
              default:
                throw new Error("This XML node type is not supported in a JS object: " + node.constructor.name);
            }
            ref1 = node.children;
            for (i = 0, len = ref1.length; i < len; i++) {
              child = ref1[i];
              this.createChildNode(child);
              if (child.type === NodeType.Element) {
                this.up();
              }
            }
            return this;
          }
          // Creates a dummy node
          dummy() {
            return this;
          }
          // Creates a node
          // `name` name of the node
          // `attributes` an object containing name/value pairs of attributes
          // `text` element text
          node(name, attributes, text) {
            if (name == null) {
              throw new Error("Missing node name.");
            }
            if (this.root && this.currentLevel === -1) {
              throw new Error("Document can only have one root node. " + this.debugInfo(name));
            }
            this.openCurrent();
            name = getValue(name);
            if (attributes == null) {
              attributes = {};
            }
            attributes = getValue(attributes);
            if (!isObject(attributes)) {
              [text, attributes] = [attributes, text];
            }
            this.currentNode = new XMLElement(this, name, attributes);
            this.currentNode.children = false;
            this.currentLevel++;
            this.openTags[this.currentLevel] = this.currentNode;
            if (text != null) {
              this.text(text);
            }
            return this;
          }
          // Creates a child element node or an element type declaration when called
          // inside the DTD
          // `name` name of the node
          // `attributes` an object containing name/value pairs of attributes
          // `text` element text
          element(name, attributes, text) {
            var child, i, len, oldValidationFlag, ref, root;
            if (this.currentNode && this.currentNode.type === NodeType.DocType) {
              this.dtdElement(...arguments);
            } else {
              if (Array.isArray(name) || isObject(name) || isFunction(name)) {
                oldValidationFlag = this.options.noValidation;
                this.options.noValidation = true;
                root = new XMLDocument(this.options).element("TEMP_ROOT");
                root.element(name);
                this.options.noValidation = oldValidationFlag;
                ref = root.children;
                for (i = 0, len = ref.length; i < len; i++) {
                  child = ref[i];
                  this.createChildNode(child);
                  if (child.type === NodeType.Element) {
                    this.up();
                  }
                }
              } else {
                this.node(name, attributes, text);
              }
            }
            return this;
          }
          // Adds or modifies an attribute
          // `name` attribute name
          // `value` attribute value
          attribute(name, value) {
            var attName, attValue;
            if (!this.currentNode || this.currentNode.children) {
              throw new Error("att() can only be used immediately after an ele() call in callback mode. " + this.debugInfo(name));
            }
            if (name != null) {
              name = getValue(name);
            }
            if (isObject(name)) {
              for (attName in name) {
                if (!hasProp.call(name, attName)) continue;
                attValue = name[attName];
                this.attribute(attName, attValue);
              }
            } else {
              if (isFunction(value)) {
                value = value.apply();
              }
              if (this.options.keepNullAttributes && value == null) {
                this.currentNode.attribs[name] = new XMLAttribute(this, name, "");
              } else if (value != null) {
                this.currentNode.attribs[name] = new XMLAttribute(this, name, value);
              }
            }
            return this;
          }
          // Creates a text node
          // `value` element text
          text(value) {
            var node;
            this.openCurrent();
            node = new XMLText(this, value);
            this.onData(this.writer.text(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
            return this;
          }
          // Creates a CDATA node
          // `value` element text without CDATA delimiters
          cdata(value) {
            var node;
            this.openCurrent();
            node = new XMLCData(this, value);
            this.onData(this.writer.cdata(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
            return this;
          }
          // Creates a comment node
          // `value` comment text
          comment(value) {
            var node;
            this.openCurrent();
            node = new XMLComment(this, value);
            this.onData(this.writer.comment(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
            return this;
          }
          // Adds unescaped raw text
          // `value` text
          raw(value) {
            var node;
            this.openCurrent();
            node = new XMLRaw(this, value);
            this.onData(this.writer.raw(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
            return this;
          }
          // Adds a processing instruction
          // `target` instruction target
          // `value` instruction value
          instruction(target, value) {
            var i, insTarget, insValue, len, node;
            this.openCurrent();
            if (target != null) {
              target = getValue(target);
            }
            if (value != null) {
              value = getValue(value);
            }
            if (Array.isArray(target)) {
              for (i = 0, len = target.length; i < len; i++) {
                insTarget = target[i];
                this.instruction(insTarget);
              }
            } else if (isObject(target)) {
              for (insTarget in target) {
                if (!hasProp.call(target, insTarget)) continue;
                insValue = target[insTarget];
                this.instruction(insTarget, insValue);
              }
            } else {
              if (isFunction(value)) {
                value = value.apply();
              }
              node = new XMLProcessingInstruction(this, target, value);
              this.onData(this.writer.processingInstruction(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
            }
            return this;
          }
          // Creates the xml declaration
          // `version` A version number string, e.g. 1.0
          // `encoding` Encoding declaration, e.g. UTF-8
          // `standalone` standalone document declaration: true or false
          declaration(version, encoding, standalone) {
            var node;
            this.openCurrent();
            if (this.documentStarted) {
              throw new Error("declaration() must be the first node.");
            }
            node = new XMLDeclaration(this, version, encoding, standalone);
            this.onData(this.writer.declaration(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
            return this;
          }
          // Creates the document type declaration
          // `root`  the name of the root node
          // `pubID` the public identifier of the external subset
          // `sysID` the system identifier of the external subset
          doctype(root, pubID, sysID) {
            this.openCurrent();
            if (root == null) {
              throw new Error("Missing root node name.");
            }
            if (this.root) {
              throw new Error("dtd() must come before the root node.");
            }
            this.currentNode = new XMLDocType(this, pubID, sysID);
            this.currentNode.rootNodeName = root;
            this.currentNode.children = false;
            this.currentLevel++;
            this.openTags[this.currentLevel] = this.currentNode;
            return this;
          }
          // Creates an element type declaration
          // `name` element name
          // `value` element content (defaults to #PCDATA)
          dtdElement(name, value) {
            var node;
            this.openCurrent();
            node = new XMLDTDElement(this, name, value);
            this.onData(this.writer.dtdElement(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
            return this;
          }
          // Creates an attribute declaration
          // `elementName` the name of the element containing this attribute
          // `attributeName` attribute name
          // `attributeType` type of the attribute (defaults to CDATA)
          // `defaultValueType` default value type (either #REQUIRED, #IMPLIED, #FIXED or
          //                    #DEFAULT) (defaults to #IMPLIED)
          // `defaultValue` default value of the attribute
          //                (only used for #FIXED or #DEFAULT)
          attList(elementName, attributeName, attributeType, defaultValueType, defaultValue) {
            var node;
            this.openCurrent();
            node = new XMLDTDAttList(this, elementName, attributeName, attributeType, defaultValueType, defaultValue);
            this.onData(this.writer.dtdAttList(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
            return this;
          }
          // Creates a general entity declaration
          // `name` the name of the entity
          // `value` internal entity value or an object with external entity details
          // `value.pubID` public identifier
          // `value.sysID` system identifier
          // `value.nData` notation declaration
          entity(name, value) {
            var node;
            this.openCurrent();
            node = new XMLDTDEntity(this, false, name, value);
            this.onData(this.writer.dtdEntity(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
            return this;
          }
          // Creates a parameter entity declaration
          // `name` the name of the entity
          // `value` internal entity value or an object with external entity details
          // `value.pubID` public identifier
          // `value.sysID` system identifier
          pEntity(name, value) {
            var node;
            this.openCurrent();
            node = new XMLDTDEntity(this, true, name, value);
            this.onData(this.writer.dtdEntity(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
            return this;
          }
          // Creates a NOTATION declaration
          // `name` the name of the notation
          // `value` an object with external entity details
          // `value.pubID` public identifier
          // `value.sysID` system identifier
          notation(name, value) {
            var node;
            this.openCurrent();
            node = new XMLDTDNotation(this, name, value);
            this.onData(this.writer.dtdNotation(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
            return this;
          }
          // Gets the parent node
          up() {
            if (this.currentLevel < 0) {
              throw new Error("The document node has no parent.");
            }
            if (this.currentNode) {
              if (this.currentNode.children) {
                this.closeNode(this.currentNode);
              } else {
                this.openNode(this.currentNode);
              }
              this.currentNode = null;
            } else {
              this.closeNode(this.openTags[this.currentLevel]);
            }
            delete this.openTags[this.currentLevel];
            this.currentLevel--;
            return this;
          }
          // Ends the document
          end() {
            while (this.currentLevel >= 0) {
              this.up();
            }
            return this.onEnd();
          }
          // Opens the current parent node
          openCurrent() {
            if (this.currentNode) {
              this.currentNode.children = true;
              return this.openNode(this.currentNode);
            }
          }
          // Writes the opening tag of the current node or the entire node if it has
          // no child nodes
          openNode(node) {
            var att, chunk, name, ref;
            if (!node.isOpen) {
              if (!this.root && this.currentLevel === 0 && node.type === NodeType.Element) {
                this.root = node;
              }
              chunk = "";
              if (node.type === NodeType.Element) {
                this.writerOptions.state = WriterState.OpenTag;
                chunk = this.writer.indent(node, this.writerOptions, this.currentLevel) + "<" + node.name;
                ref = node.attribs;
                for (name in ref) {
                  if (!hasProp.call(ref, name)) continue;
                  att = ref[name];
                  chunk += this.writer.attribute(att, this.writerOptions, this.currentLevel);
                }
                chunk += (node.children ? ">" : "/>") + this.writer.endline(node, this.writerOptions, this.currentLevel);
                this.writerOptions.state = WriterState.InsideTag;
              } else {
                this.writerOptions.state = WriterState.OpenTag;
                chunk = this.writer.indent(node, this.writerOptions, this.currentLevel) + "<!DOCTYPE " + node.rootNodeName;
                if (node.pubID && node.sysID) {
                  chunk += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
                } else if (node.sysID) {
                  chunk += ' SYSTEM "' + node.sysID + '"';
                }
                if (node.children) {
                  chunk += " [";
                  this.writerOptions.state = WriterState.InsideTag;
                } else {
                  this.writerOptions.state = WriterState.CloseTag;
                  chunk += ">";
                }
                chunk += this.writer.endline(node, this.writerOptions, this.currentLevel);
              }
              this.onData(chunk, this.currentLevel);
              return node.isOpen = true;
            }
          }
          // Writes the closing tag of the current node
          closeNode(node) {
            var chunk;
            if (!node.isClosed) {
              chunk = "";
              this.writerOptions.state = WriterState.CloseTag;
              if (node.type === NodeType.Element) {
                chunk = this.writer.indent(node, this.writerOptions, this.currentLevel) + "</" + node.name + ">" + this.writer.endline(node, this.writerOptions, this.currentLevel);
              } else {
                chunk = this.writer.indent(node, this.writerOptions, this.currentLevel) + "]>" + this.writer.endline(node, this.writerOptions, this.currentLevel);
              }
              this.writerOptions.state = WriterState.None;
              this.onData(chunk, this.currentLevel);
              return node.isClosed = true;
            }
          }
          // Called when a new chunk of XML is output
          // `chunk` a string containing the XML chunk
          // `level` current indentation level
          onData(chunk, level) {
            this.documentStarted = true;
            return this.onDataCallback(chunk, level + 1);
          }
          // Called when the XML document is completed
          onEnd() {
            this.documentCompleted = true;
            return this.onEndCallback();
          }
          // Returns debug string
          debugInfo(name) {
            if (name == null) {
              return "";
            } else {
              return "node: <" + name + ">";
            }
          }
          // Node aliases
          ele() {
            return this.element(...arguments);
          }
          nod(name, attributes, text) {
            return this.node(name, attributes, text);
          }
          txt(value) {
            return this.text(value);
          }
          dat(value) {
            return this.cdata(value);
          }
          com(value) {
            return this.comment(value);
          }
          ins(target, value) {
            return this.instruction(target, value);
          }
          dec(version, encoding, standalone) {
            return this.declaration(version, encoding, standalone);
          }
          dtd(root, pubID, sysID) {
            return this.doctype(root, pubID, sysID);
          }
          e(name, attributes, text) {
            return this.element(name, attributes, text);
          }
          n(name, attributes, text) {
            return this.node(name, attributes, text);
          }
          t(value) {
            return this.text(value);
          }
          d(value) {
            return this.cdata(value);
          }
          c(value) {
            return this.comment(value);
          }
          r(value) {
            return this.raw(value);
          }
          i(target, value) {
            return this.instruction(target, value);
          }
          // Attribute aliases
          att() {
            if (this.currentNode && this.currentNode.type === NodeType.DocType) {
              return this.attList(...arguments);
            } else {
              return this.attribute(...arguments);
            }
          }
          a() {
            if (this.currentNode && this.currentNode.type === NodeType.DocType) {
              return this.attList(...arguments);
            } else {
              return this.attribute(...arguments);
            }
          }
          // DTD aliases
          // att() and ele() are defined above
          ent(name, value) {
            return this.entity(name, value);
          }
          pent(name, value) {
            return this.pEntity(name, value);
          }
          not(name, value) {
            return this.notation(name, value);
          }
        };
      }).call(exports);
    }
  });

  // node_modules/xmlbuilder/lib/XMLStreamWriter.js
  var require_XMLStreamWriter = __commonJS({
    "node_modules/xmlbuilder/lib/XMLStreamWriter.js"(exports, module) {
      (function() {
        var NodeType, WriterState, XMLStreamWriter, XMLWriterBase, hasProp = {}.hasOwnProperty;
        NodeType = require_NodeType();
        XMLWriterBase = require_XMLWriterBase();
        WriterState = require_WriterState();
        module.exports = XMLStreamWriter = class XMLStreamWriter extends XMLWriterBase {
          // Initializes a new instance of `XMLStreamWriter`
          // `stream` output stream
          // `options.pretty` pretty prints the result
          // `options.indent` indentation string
          // `options.newline` newline sequence
          // `options.offset` a fixed number of indentations to add to every line
          // `options.allowEmpty` do not self close empty element tags
          // 'options.dontPrettyTextNodes' if any text is present in node, don't indent or LF
          // `options.spaceBeforeSlash` add a space before the closing slash of empty elements
          constructor(stream, options) {
            super(options);
            this.stream = stream;
          }
          endline(node, options, level) {
            if (node.isLastRootNode && options.state === WriterState.CloseTag) {
              return "";
            } else {
              return super.endline(node, options, level);
            }
          }
          document(doc, options) {
            var child, i, j, k, len1, len2, ref, ref1, results;
            ref = doc.children;
            for (i = j = 0, len1 = ref.length; j < len1; i = ++j) {
              child = ref[i];
              child.isLastRootNode = i === doc.children.length - 1;
            }
            options = this.filterOptions(options);
            ref1 = doc.children;
            results = [];
            for (k = 0, len2 = ref1.length; k < len2; k++) {
              child = ref1[k];
              results.push(this.writeChildNode(child, options, 0));
            }
            return results;
          }
          cdata(node, options, level) {
            return this.stream.write(super.cdata(node, options, level));
          }
          comment(node, options, level) {
            return this.stream.write(super.comment(node, options, level));
          }
          declaration(node, options, level) {
            return this.stream.write(super.declaration(node, options, level));
          }
          docType(node, options, level) {
            var child, j, len1, ref;
            level || (level = 0);
            this.openNode(node, options, level);
            options.state = WriterState.OpenTag;
            this.stream.write(this.indent(node, options, level));
            this.stream.write("<!DOCTYPE " + node.root().name);
            if (node.pubID && node.sysID) {
              this.stream.write(' PUBLIC "' + node.pubID + '" "' + node.sysID + '"');
            } else if (node.sysID) {
              this.stream.write(' SYSTEM "' + node.sysID + '"');
            }
            if (node.children.length > 0) {
              this.stream.write(" [");
              this.stream.write(this.endline(node, options, level));
              options.state = WriterState.InsideTag;
              ref = node.children;
              for (j = 0, len1 = ref.length; j < len1; j++) {
                child = ref[j];
                this.writeChildNode(child, options, level + 1);
              }
              options.state = WriterState.CloseTag;
              this.stream.write("]");
            }
            options.state = WriterState.CloseTag;
            this.stream.write(options.spaceBeforeSlash + ">");
            this.stream.write(this.endline(node, options, level));
            options.state = WriterState.None;
            return this.closeNode(node, options, level);
          }
          element(node, options, level) {
            var att, attLen, child, childNodeCount, firstChildNode, j, len, len1, name, prettySuppressed, r, ratt, ref, ref1, ref2, rline;
            level || (level = 0);
            this.openNode(node, options, level);
            options.state = WriterState.OpenTag;
            r = this.indent(node, options, level) + "<" + node.name;
            if (options.pretty && options.width > 0) {
              len = r.length;
              ref = node.attribs;
              for (name in ref) {
                if (!hasProp.call(ref, name)) continue;
                att = ref[name];
                ratt = this.attribute(att, options, level);
                attLen = ratt.length;
                if (len + attLen > options.width) {
                  rline = this.indent(node, options, level + 1) + ratt;
                  r += this.endline(node, options, level) + rline;
                  len = rline.length;
                } else {
                  rline = " " + ratt;
                  r += rline;
                  len += rline.length;
                }
              }
            } else {
              ref1 = node.attribs;
              for (name in ref1) {
                if (!hasProp.call(ref1, name)) continue;
                att = ref1[name];
                r += this.attribute(att, options, level);
              }
            }
            this.stream.write(r);
            childNodeCount = node.children.length;
            firstChildNode = childNodeCount === 0 ? null : node.children[0];
            if (childNodeCount === 0 || node.children.every(function(e) {
              return (e.type === NodeType.Text || e.type === NodeType.Raw || e.type === NodeType.CData) && e.value === "";
            })) {
              if (options.allowEmpty) {
                this.stream.write(">");
                options.state = WriterState.CloseTag;
                this.stream.write("</" + node.name + ">");
              } else {
                options.state = WriterState.CloseTag;
                this.stream.write(options.spaceBeforeSlash + "/>");
              }
            } else if (options.pretty && childNodeCount === 1 && (firstChildNode.type === NodeType.Text || firstChildNode.type === NodeType.Raw || firstChildNode.type === NodeType.CData) && firstChildNode.value != null) {
              this.stream.write(">");
              options.state = WriterState.InsideTag;
              options.suppressPrettyCount++;
              prettySuppressed = true;
              this.writeChildNode(firstChildNode, options, level + 1);
              options.suppressPrettyCount--;
              prettySuppressed = false;
              options.state = WriterState.CloseTag;
              this.stream.write("</" + node.name + ">");
            } else {
              this.stream.write(">" + this.endline(node, options, level));
              options.state = WriterState.InsideTag;
              ref2 = node.children;
              for (j = 0, len1 = ref2.length; j < len1; j++) {
                child = ref2[j];
                this.writeChildNode(child, options, level + 1);
              }
              options.state = WriterState.CloseTag;
              this.stream.write(this.indent(node, options, level) + "</" + node.name + ">");
            }
            this.stream.write(this.endline(node, options, level));
            options.state = WriterState.None;
            return this.closeNode(node, options, level);
          }
          processingInstruction(node, options, level) {
            return this.stream.write(super.processingInstruction(node, options, level));
          }
          raw(node, options, level) {
            return this.stream.write(super.raw(node, options, level));
          }
          text(node, options, level) {
            return this.stream.write(super.text(node, options, level));
          }
          dtdAttList(node, options, level) {
            return this.stream.write(super.dtdAttList(node, options, level));
          }
          dtdElement(node, options, level) {
            return this.stream.write(super.dtdElement(node, options, level));
          }
          dtdEntity(node, options, level) {
            return this.stream.write(super.dtdEntity(node, options, level));
          }
          dtdNotation(node, options, level) {
            return this.stream.write(super.dtdNotation(node, options, level));
          }
        };
      }).call(exports);
    }
  });

  // node_modules/xmlbuilder/lib/index.js
  var require_lib2 = __commonJS({
    "node_modules/xmlbuilder/lib/index.js"(exports, module) {
      (function() {
        var NodeType, WriterState, XMLDOMImplementation, XMLDocument, XMLDocumentCB, XMLStreamWriter, XMLStringWriter, assign, isFunction;
        ({ assign, isFunction } = require_Utility());
        XMLDOMImplementation = require_XMLDOMImplementation();
        XMLDocument = require_XMLDocument();
        XMLDocumentCB = require_XMLDocumentCB();
        XMLStringWriter = require_XMLStringWriter();
        XMLStreamWriter = require_XMLStreamWriter();
        NodeType = require_NodeType();
        WriterState = require_WriterState();
        module.exports.create = function(name, xmldec, doctype, options) {
          var doc, root;
          if (name == null) {
            throw new Error("Root element needs a name.");
          }
          options = assign({}, xmldec, doctype, options);
          doc = new XMLDocument(options);
          root = doc.element(name);
          if (!options.headless) {
            doc.declaration(options);
            if (options.pubID != null || options.sysID != null) {
              doc.dtd(options);
            }
          }
          return root;
        };
        module.exports.begin = function(options, onData, onEnd) {
          if (isFunction(options)) {
            [onData, onEnd] = [options, onData];
            options = {};
          }
          if (onData) {
            return new XMLDocumentCB(options, onData, onEnd);
          } else {
            return new XMLDocument(options);
          }
        };
        module.exports.stringWriter = function(options) {
          return new XMLStringWriter(options);
        };
        module.exports.streamWriter = function(stream, options) {
          return new XMLStreamWriter(stream, options);
        };
        module.exports.implementation = new XMLDOMImplementation();
        module.exports.nodeType = NodeType;
        module.exports.writerState = WriterState;
      }).call(exports);
    }
  });

  // node_modules/plist/dist/index.js
  var index_exports = {};
  __export(index_exports, {
    build: () => build,
    buildBinary: () => buildBinary,
    parse: () => parse,
    parseBinary: () => parseBinary,
    parseOpenStep: () => parseOpenStep
  });

  // node_modules/plist/dist/parse.js
  var import_xmldom = __toESM(require_lib(), 1);

  // node_modules/plist/dist/parse-binary.js
  var EPOCH_2001 = 9783072e5;
  function readSizedInt(view, offset, size) {
    switch (size) {
      case 1:
        return view.getUint8(offset);
      case 2:
        return view.getUint16(offset);
      case 4:
        return view.getUint32(offset);
      case 8: {
        const hi = view.getUint32(offset);
        const lo = view.getUint32(offset + 4);
        return hi * 4294967296 + lo;
      }
      default:
        throw new Error(`Unsupported int size: ${size}`);
    }
  }
  function parseBinary(data) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);
    const len = data.byteLength;
    const header = String.fromCharCode(...data.subarray(0, 8));
    if (header !== "bplist00") {
      throw new Error("Invalid binary plist: bad magic");
    }
    const trailerOffset = len - 32;
    const offsetTableOffsetSize = view.getUint8(trailerOffset + 6);
    const objectRefSize = view.getUint8(trailerOffset + 7);
    const numObjects = readSizedInt(view, trailerOffset + 8, 8);
    const topObject = readSizedInt(view, trailerOffset + 16, 8);
    const offsetTableOffset = readSizedInt(view, trailerOffset + 24, 8);
    const offsets = [];
    for (let i = 0; i < numObjects; i++) {
      offsets.push(readSizedInt(view, offsetTableOffset + i * offsetTableOffsetSize, offsetTableOffsetSize));
    }
    function parseObject(index) {
      let offset = offsets[index];
      const marker = view.getUint8(offset);
      const type = marker >> 4;
      let size = marker & 15;
      offset++;
      if (type !== 0 && type !== 8 && size === 15) {
        const extMarker = view.getUint8(offset);
        offset++;
        const extSize = 1 << (extMarker & 15);
        size = readSizedInt(view, offset, extSize);
        offset += extSize;
      }
      switch (type) {
        case 0:
          if (marker === 0)
            return null;
          if (marker === 8)
            return false;
          if (marker === 9)
            return true;
          throw new Error(`Unknown singleton: 0x${marker.toString(16)}`);
        case 1: {
          const byteCount = 1 << size;
          if (byteCount <= 4) {
            return readSizedInt(view, offset, byteCount);
          }
          const hi = view.getInt32(offset);
          const lo = view.getUint32(offset + 4);
          return hi * 4294967296 + lo;
        }
        case 2: {
          const byteCount = 1 << size;
          if (byteCount === 4)
            return view.getFloat32(offset);
          if (byteCount === 8)
            return view.getFloat64(offset);
          throw new Error(`Unsupported real size: ${byteCount}`);
        }
        case 3: {
          const timestamp = view.getFloat64(offset);
          return new Date(timestamp * 1e3 + EPOCH_2001);
        }
        case 4: {
          return new Uint8Array(data.buffer, data.byteOffset + offset, size);
        }
        case 5: {
          let s = "";
          for (let i = 0; i < size; i++) {
            s += String.fromCharCode(view.getUint8(offset + i));
          }
          return s;
        }
        case 6: {
          let s = "";
          for (let i = 0; i < size; i++) {
            s += String.fromCharCode(view.getUint16(offset + i * 2));
          }
          return s;
        }
        case 8: {
          const byteCount = size + 1;
          return { UID: readSizedInt(view, offset, byteCount) };
        }
        case 10: {
          const arr = [];
          for (let i = 0; i < size; i++) {
            const ref = readSizedInt(view, offset + i * objectRefSize, objectRefSize);
            arr.push(parseObject(ref));
          }
          return arr;
        }
        case 13: {
          const dict = {};
          for (let i = 0; i < size; i++) {
            const keyRef = readSizedInt(view, offset + i * objectRefSize, objectRefSize);
            const valRef = readSizedInt(view, offset + (size + i) * objectRefSize, objectRefSize);
            const key = parseObject(keyRef);
            dict[key] = parseObject(valRef);
          }
          return dict;
        }
        default:
          throw new Error(`Unknown object type: 0x${type.toString(16)}`);
      }
    }
    return parseObject(topObject);
  }

  // node_modules/plist/dist/parse-openstep.js
  var OpenStepParser = class {
    input;
    pos;
    constructor(input) {
      this.input = input;
      this.pos = 0;
    }
    skipWhitespaceAndComments() {
      while (this.pos < this.input.length) {
        const ch = this.input[this.pos];
        if (/\s/.test(ch)) {
          this.pos++;
          continue;
        }
        if (ch === "/" && this.pos + 1 < this.input.length && this.input[this.pos + 1] === "*") {
          this.pos += 2;
          const end = this.input.indexOf("*/", this.pos);
          if (end === -1)
            throw new Error("Unterminated block comment");
          this.pos = end + 2;
          continue;
        }
        if (ch === "/" && this.pos + 1 < this.input.length && this.input[this.pos + 1] === "/") {
          this.pos += 2;
          const end = this.input.indexOf("\n", this.pos);
          this.pos = end === -1 ? this.input.length : end + 1;
          continue;
        }
        break;
      }
    }
    parseValue() {
      this.skipWhitespaceAndComments();
      if (this.pos >= this.input.length) {
        throw new Error("Unexpected end of input");
      }
      const ch = this.input[this.pos];
      if (ch === "{")
        return this.parseDict();
      if (ch === "(")
        return this.parseArray();
      if (ch === "<")
        return this.parseData();
      if (ch === '"')
        return this.parseQuotedString();
      return this.parseUnquotedString();
    }
    parseDict() {
      this.pos++;
      const obj = {};
      while (true) {
        this.skipWhitespaceAndComments();
        if (this.pos >= this.input.length)
          throw new Error("Unterminated dictionary");
        if (this.input[this.pos] === "}") {
          this.pos++;
          return obj;
        }
        const key = this.parseValue();
        this.skipWhitespaceAndComments();
        if (this.pos >= this.input.length || this.input[this.pos] !== "=")
          throw new Error(`Expected '=' after key "${key}" at position ${this.pos}`);
        this.pos++;
        const value = this.parseValue();
        obj[key] = value;
        this.skipWhitespaceAndComments();
        if (this.pos < this.input.length && this.input[this.pos] === ";") {
          this.pos++;
        }
      }
    }
    parseArray() {
      this.pos++;
      const arr = [];
      this.skipWhitespaceAndComments();
      if (this.pos < this.input.length && this.input[this.pos] === ")") {
        this.pos++;
        return arr;
      }
      while (true) {
        arr.push(this.parseValue());
        this.skipWhitespaceAndComments();
        if (this.pos >= this.input.length)
          throw new Error("Unterminated array");
        if (this.input[this.pos] === ")") {
          this.pos++;
          return arr;
        }
        if (this.input[this.pos] === ",") {
          this.pos++;
          this.skipWhitespaceAndComments();
          if (this.pos < this.input.length && this.input[this.pos] === ")") {
            this.pos++;
            return arr;
          }
        } else {
          throw new Error(`Expected ',' or ')' in array at position ${this.pos}`);
        }
      }
    }
    parseData() {
      this.pos++;
      let hex = "";
      while (this.pos < this.input.length) {
        const ch = this.input[this.pos];
        if (ch === ">") {
          this.pos++;
          const clean = hex.replace(/\s+/g, "");
          const bytes = new Uint8Array(clean.length / 2);
          for (let i = 0; i < clean.length; i += 2) {
            bytes[i / 2] = parseInt(clean.substring(i, i + 2), 16);
          }
          return bytes;
        }
        hex += ch;
        this.pos++;
      }
      throw new Error("Unterminated data");
    }
    parseQuotedString() {
      this.pos++;
      let result = "";
      while (this.pos < this.input.length) {
        const ch = this.input[this.pos];
        if (ch === "\\") {
          this.pos++;
          if (this.pos >= this.input.length)
            throw new Error("Unterminated string escape");
          const esc = this.input[this.pos];
          switch (esc) {
            case '"':
              result += '"';
              break;
            case "\\":
              result += "\\";
              break;
            case "n":
              result += "\n";
              break;
            case "t":
              result += "	";
              break;
            case "r":
              result += "\r";
              break;
            case "0":
              result += "\0";
              break;
            default:
              result += esc;
              break;
          }
          this.pos++;
          continue;
        }
        if (ch === '"') {
          this.pos++;
          return result;
        }
        result += ch;
        this.pos++;
      }
      throw new Error("Unterminated string");
    }
    parseUnquotedString() {
      const start = this.pos;
      while (this.pos < this.input.length) {
        const ch = this.input[this.pos];
        if (/[a-zA-Z0-9._\/$:-]/.test(ch)) {
          this.pos++;
        } else {
          break;
        }
      }
      if (this.pos === start) {
        throw new Error(`Unexpected character '${this.input[this.pos]}' at position ${this.pos}`);
      }
      return this.input.substring(start, this.pos);
    }
  };
  function parseOpenStep(input) {
    const parser = new OpenStepParser(input);
    const value = parser.parseValue();
    return value;
  }

  // node_modules/plist/dist/parse.js
  function base64ToUint8Array(base64) {
    const binary = atob(base64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    return bytes;
  }
  var TEXT_NODE = 3;
  var CDATA_NODE = 4;
  var COMMENT_NODE = 8;
  function shouldIgnoreNode(node) {
    return node.nodeType === TEXT_NODE || node.nodeType === COMMENT_NODE || node.nodeType === CDATA_NODE;
  }
  function isEmptyNode(node) {
    if (!node.childNodes || node.childNodes.length === 0) {
      return true;
    } else {
      return false;
    }
  }
  function invariant(test, message) {
    if (!test) {
      throw new Error(message);
    }
  }
  function parse(xml) {
    if (xml instanceof ArrayBuffer) {
      return parseBinary(new Uint8Array(xml));
    }
    if (xml instanceof Uint8Array) {
      return parseBinary(xml);
    }
    if (typeof xml === "string" && xml.startsWith("bplist")) {
      const encoder = new TextEncoder();
      return parseBinary(encoder.encode(xml));
    }
    if (typeof xml === "string") {
      const trimmed = xml.trimStart();
      if ((trimmed[0] === "{" || trimmed[0] === "(") && !trimmed.startsWith("<?xml") && !trimmed.startsWith("<!DOCTYPE") && !trimmed.startsWith("<plist")) {
        return parseOpenStep(xml);
      }
    }
    const doc = new import_xmldom.DOMParser().parseFromString(xml, "text/xml");
    const root = doc.documentElement;
    invariant(root !== null && root.nodeName === "plist", "malformed document. First element should be <plist>");
    let plist = parsePlistXML(root);
    if (Array.isArray(plist) && plist.length == 1)
      plist = plist[0];
    return plist;
  }
  function parsePlistXML(node) {
    if (!node)
      return null;
    if (node.nodeName === "plist") {
      const new_arr = [];
      if (isEmptyNode(node)) {
        return new_arr;
      }
      for (let i = 0; i < node.childNodes.length; i++) {
        if (!shouldIgnoreNode(node.childNodes[i])) {
          new_arr.push(parsePlistXML(node.childNodes[i]));
        }
      }
      return new_arr;
    } else if (node.nodeName === "dict") {
      const new_obj = {};
      let key = null;
      let counter = 0;
      if (isEmptyNode(node)) {
        return new_obj;
      }
      for (let i = 0; i < node.childNodes.length; i++) {
        if (shouldIgnoreNode(node.childNodes[i]))
          continue;
        if (counter % 2 === 0) {
          invariant(node.childNodes[i].nodeName === "key", "Missing key while parsing <dict/>.");
          key = parsePlistXML(node.childNodes[i]);
        } else {
          invariant(node.childNodes[i].nodeName !== "key", "Unexpected <key> while parsing <dict/>. Keys and values must alternate.");
          new_obj[key] = parsePlistXML(node.childNodes[i]);
        }
        counter += 1;
      }
      if (counter % 2 === 1) {
        new_obj[key] = "";
      }
      return new_obj;
    } else if (node.nodeName === "array") {
      const new_arr = [];
      if (isEmptyNode(node)) {
        return new_arr;
      }
      for (let i = 0; i < node.childNodes.length; i++) {
        if (!shouldIgnoreNode(node.childNodes[i])) {
          const res = parsePlistXML(node.childNodes[i]);
          if (null != res)
            new_arr.push(res);
        }
      }
      return new_arr;
    } else if (node.nodeName === "#text") {
    } else if (node.nodeName === "key") {
      if (isEmptyNode(node)) {
        return "";
      }
      invariant(node.childNodes[0].nodeValue !== "__proto__", "__proto__ keys can lead to prototype pollution. More details on CVE-2022-22912");
      return node.childNodes[0].nodeValue;
    } else if (node.nodeName === "string") {
      let res = "";
      if (isEmptyNode(node)) {
        return res;
      }
      for (let i = 0; i < node.childNodes.length; i++) {
        const type = node.childNodes[i].nodeType;
        if (type === TEXT_NODE || type === CDATA_NODE) {
          res += node.childNodes[i].nodeValue;
        }
      }
      return res;
    } else if (node.nodeName === "integer") {
      invariant(!isEmptyNode(node), 'Cannot parse "" as integer.');
      return parseInt(node.childNodes[0].nodeValue, 10);
    } else if (node.nodeName === "real") {
      invariant(!isEmptyNode(node), 'Cannot parse "" as real.');
      let res = "";
      for (let i = 0; i < node.childNodes.length; i++) {
        if (node.childNodes[i].nodeType === TEXT_NODE) {
          res += node.childNodes[i].nodeValue;
        }
      }
      return parseFloat(res);
    } else if (node.nodeName === "data") {
      let res = "";
      if (isEmptyNode(node)) {
        return base64ToUint8Array(res);
      }
      for (let i = 0; i < node.childNodes.length; i++) {
        if (node.childNodes[i].nodeType === TEXT_NODE) {
          res += node.childNodes[i].nodeValue.replace(/\s+/g, "");
        }
      }
      return base64ToUint8Array(res);
    } else if (node.nodeName === "date") {
      invariant(!isEmptyNode(node), 'Cannot parse "" as Date.');
      return new Date(node.childNodes[0].nodeValue);
    } else if (node.nodeName === "null") {
      return null;
    } else if (node.nodeName === "true") {
      return true;
    } else if (node.nodeName === "false") {
      return false;
    } else {
      throw new Error("Invalid PLIST tag " + node.nodeName);
    }
    return null;
  }

  // node_modules/plist/dist/build.js
  var import_xmlbuilder = __toESM(require_lib2(), 1);
  function uint8ArrayToBase64(bytes) {
    let binary = "";
    for (let i = 0; i < bytes.length; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  }
  function build(obj, opts) {
    const XMLHDR = {
      version: "1.0",
      encoding: "UTF-8"
    };
    const XMLDTD = {
      pubid: "-//Apple//DTD PLIST 1.0//EN",
      sysid: "http://www.apple.com/DTDs/PropertyList-1.0.dtd"
    };
    const doc = import_xmlbuilder.default.create("plist");
    doc.dec(XMLHDR.version, XMLHDR.encoding);
    doc.dtd(XMLDTD.pubid, XMLDTD.sysid);
    doc.att("version", "1.0");
    walk_obj(obj, doc);
    if (!opts)
      opts = {};
    opts.pretty = opts.pretty !== false;
    return doc.end(opts);
  }
  function walk_obj(next, next_child) {
    if (typeof next === "undefined") {
      return;
    } else if (Array.isArray(next)) {
      next_child = next_child.ele("array");
      for (let i = 0; i < next.length; i++) {
        walk_obj(next[i], next_child);
      }
    } else if (next instanceof ArrayBuffer) {
      next_child.ele("data").raw(uint8ArrayToBase64(new Uint8Array(next)));
    } else if (ArrayBuffer.isView(next)) {
      const bytes = next instanceof Uint8Array ? next : new Uint8Array(next.buffer, next.byteOffset, next.byteLength);
      next_child.ele("data").raw(uint8ArrayToBase64(bytes));
    } else if (typeof next === "object" && next !== null && !(next instanceof Date)) {
      next_child = next_child.ele("dict");
      for (const prop in next) {
        if (Object.hasOwn(next, prop)) {
          const val = next[prop];
          if (val === void 0 || val === null)
            continue;
          next_child.ele("key").txt(prop);
          walk_obj(val, next_child);
        }
      }
    } else if (typeof next === "number") {
      const tag_type = next % 1 === 0 ? "integer" : "real";
      next_child.ele(tag_type).txt(next.toString());
    } else if (typeof next === "bigint") {
      next_child.ele("integer").txt(next.toString());
    } else if (next instanceof Date) {
      next_child.ele("date").txt(new Date(next).toISOString().replace(/\.\d{3}Z$/, "Z"));
    } else if (typeof next === "boolean") {
      next_child.ele(next ? "true" : "false");
    } else if (typeof next === "string") {
      next_child.ele("string").txt(next);
    }
  }

  // node_modules/plist/dist/build-binary.js
  var EPOCH_20012 = 9783072e5;
  function writeSizedInt(view, offset, size, value) {
    switch (size) {
      case 1:
        view.setUint8(offset, value);
        break;
      case 2:
        view.setUint16(offset, value);
        break;
      case 4:
        view.setUint32(offset, value);
        break;
    }
  }
  function withSizeHeader(typeNibble, size, payload) {
    if (size < 15) {
      const buf2 = new Uint8Array(1 + payload.length);
      buf2[0] = typeNibble << 4 | size;
      buf2.set(payload, 1);
      return buf2;
    }
    const pow = size <= 255 ? 0 : size <= 65535 ? 1 : 2;
    const sizeBytes = 1 << pow;
    const buf = new Uint8Array(1 + 1 + sizeBytes + payload.length);
    const v = new DataView(buf.buffer);
    buf[0] = typeNibble << 4 | 15;
    buf[1] = 16 | pow;
    if (sizeBytes === 1)
      v.setUint8(2, size);
    else if (sizeBytes === 2)
      v.setUint16(2, size);
    else
      v.setUint32(2, size);
    buf.set(payload, 2 + sizeBytes);
    return buf;
  }
  function flattenObjects(root) {
    const objects = [];
    const primitiveMap = /* @__PURE__ */ new Map();
    function addPrimitive(val) {
      const key = typeof val === "string" ? `s:${val}` : typeof val === "number" ? `n:${val}` : typeof val === "boolean" ? `b:${val}` : typeof val === "bigint" ? `bi:${val}` : val === null ? "null" : null;
      if (key !== null) {
        const existing = primitiveMap.get(key);
        if (existing !== void 0)
          return existing;
        const idx2 = objects.length;
        objects.push({ value: val });
        primitiveMap.set(key, idx2);
        return idx2;
      }
      const idx = objects.length;
      objects.push({ value: val });
      return idx;
    }
    function visit(val) {
      if (val === null || typeof val === "boolean" || typeof val === "number" || typeof val === "bigint" || typeof val === "string") {
        return addPrimitive(val);
      }
      if (val instanceof Date) {
        const idx2 = objects.length;
        objects.push({ value: val });
        return idx2;
      }
      if (val instanceof Uint8Array || val instanceof ArrayBuffer) {
        const idx2 = objects.length;
        objects.push({ value: val instanceof ArrayBuffer ? new Uint8Array(val) : val });
        return idx2;
      }
      if (Array.isArray(val)) {
        const idx2 = objects.length;
        objects.push({ value: val });
        const childRefs = val.map((item) => visit(item));
        objects[idx2].childRefs = childRefs;
        return idx2;
      }
      const obj = val;
      if ("UID" in obj && typeof obj.UID === "number" && Object.keys(obj).length === 1) {
        const idx2 = objects.length;
        objects.push({ value: val });
        return idx2;
      }
      const idx = objects.length;
      objects.push({ value: val });
      const keys = Object.keys(obj);
      const keyRefs = keys.map((k) => visit(k));
      const valRefs = keys.map((k) => visit(obj[k]));
      objects[idx].keyRefs = keyRefs;
      objects[idx].valueRefs = valRefs;
      return idx;
    }
    visit(root);
    return objects;
  }
  function serializeObject(entry, refSize) {
    const val = entry.value;
    if (val === null)
      return new Uint8Array([0]);
    if (typeof val === "boolean")
      return new Uint8Array([val ? 9 : 8]);
    if (typeof val === "bigint") {
      const buf = new Uint8Array(9);
      const v = new DataView(buf.buffer);
      buf[0] = 19;
      const n2 = Number(val);
      v.setInt32(1, Math.floor(n2 / 4294967296));
      v.setUint32(5, n2 >>> 0);
      return buf;
    }
    if (typeof val === "number") {
      if (Number.isInteger(val) && val >= -2147483648 && val <= 4294967295) {
        const pow = val < 0 || val > 255 ? val < 0 || val > 65535 ? val < 0 || val > 4294967295 ? 3 : 2 : 1 : 0;
        const byteCount = 1 << pow;
        const buf2 = new Uint8Array(1 + byteCount);
        const v2 = new DataView(buf2.buffer);
        buf2[0] = 16 | pow;
        if (byteCount === 1)
          v2.setUint8(1, val);
        else if (byteCount === 2)
          v2.setUint16(1, val);
        else if (byteCount === 4) {
          if (val < 0)
            v2.setInt32(1, val);
          else
            v2.setUint32(1, val);
        } else {
          v2.setInt32(1, Math.floor(val / 4294967296));
          v2.setUint32(5, val >>> 0);
        }
        return buf2;
      }
      const buf = new Uint8Array(9);
      const v = new DataView(buf.buffer);
      buf[0] = 35;
      v.setFloat64(1, val);
      return buf;
    }
    if (typeof val === "string") {
      let isAscii = true;
      for (let i = 0; i < val.length; i++) {
        if (val.charCodeAt(i) > 127) {
          isAscii = false;
          break;
        }
      }
      if (isAscii) {
        const bytes = new Uint8Array(val.length);
        for (let i = 0; i < val.length; i++)
          bytes[i] = val.charCodeAt(i);
        return withSizeHeader(5, val.length, bytes);
      }
      const payload2 = new Uint8Array(val.length * 2);
      const pv2 = new DataView(payload2.buffer);
      for (let i = 0; i < val.length; i++) {
        pv2.setUint16(i * 2, val.charCodeAt(i));
      }
      return withSizeHeader(6, val.length, payload2);
    }
    if (val instanceof Date) {
      const buf = new Uint8Array(9);
      const v = new DataView(buf.buffer);
      buf[0] = 51;
      v.setFloat64(1, (val.getTime() - EPOCH_20012) / 1e3);
      return buf;
    }
    if (val instanceof Uint8Array) {
      return withSizeHeader(4, val.length, val);
    }
    if (Array.isArray(val)) {
      const refs = entry.childRefs;
      const payload2 = new Uint8Array(refs.length * refSize);
      const pv2 = new DataView(payload2.buffer);
      for (let i = 0; i < refs.length; i++) {
        writeSizedInt(pv2, i * refSize, refSize, refs[i]);
      }
      return withSizeHeader(10, refs.length, payload2);
    }
    const obj = val;
    if ("UID" in obj && typeof obj.UID === "number" && Object.keys(obj).length === 1) {
      const uid = obj.UID;
      const size = uid <= 255 ? 1 : uid <= 65535 ? 2 : 4;
      const buf = new Uint8Array(1 + size);
      const v = new DataView(buf.buffer);
      buf[0] = 128 | size - 1;
      if (size === 1)
        v.setUint8(1, uid);
      else if (size === 2)
        v.setUint16(1, uid);
      else
        v.setUint32(1, uid);
      return buf;
    }
    const keyRefs = entry.keyRefs;
    const valueRefs = entry.valueRefs;
    const n = keyRefs.length;
    const payload = new Uint8Array(n * 2 * refSize);
    const pv = new DataView(payload.buffer);
    for (let i = 0; i < n; i++) {
      writeSizedInt(pv, i * refSize, refSize, keyRefs[i]);
    }
    for (let i = 0; i < n; i++) {
      writeSizedInt(pv, (n + i) * refSize, refSize, valueRefs[i]);
    }
    return withSizeHeader(13, n, payload);
  }
  function buildBinary(value) {
    const entries = flattenObjects(value);
    const objectRefSize = entries.length <= 256 ? 1 : 2;
    const serialized = [];
    for (const entry of entries) {
      serialized.push(serializeObject(entry, objectRefSize));
    }
    let currentOffset = 8;
    const offsets = [];
    for (const s of serialized) {
      offsets.push(currentOffset);
      currentOffset += s.length;
    }
    const offsetTableOffset = currentOffset;
    const maxOffset = offsetTableOffset;
    const offsetSize = maxOffset <= 255 ? 1 : maxOffset <= 65535 ? 2 : 4;
    const totalSize = offsetTableOffset + entries.length * offsetSize + 32;
    const buf = new Uint8Array(totalSize);
    const view = new DataView(buf.buffer);
    const header = "bplist00";
    for (let i = 0; i < 8; i++)
      buf[i] = header.charCodeAt(i);
    let pos = 8;
    for (const s of serialized) {
      buf.set(s, pos);
      pos += s.length;
    }
    for (let i = 0; i < entries.length; i++) {
      writeSizedInt(view, pos, offsetSize, offsets[i]);
      pos += offsetSize;
    }
    const trailerStart = totalSize - 32;
    view.setUint8(trailerStart + 6, offsetSize);
    view.setUint8(trailerStart + 7, objectRefSize);
    view.setUint32(trailerStart + 8, 0);
    view.setUint32(trailerStart + 12, entries.length);
    view.setUint32(trailerStart + 16, 0);
    view.setUint32(trailerStart + 20, 0);
    view.setUint32(trailerStart + 24, 0);
    view.setUint32(trailerStart + 28, offsetTableOffset);
    return buf;
  }
  return __toCommonJS(index_exports);
})();
