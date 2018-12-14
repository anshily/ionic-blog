webpackJsonp([2],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParseHtmlProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
  Generated class for the ParseHtmlProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ParseHtmlProvider = /** @class */ (function () {
    function ParseHtmlProvider() {
        console.log('Hello ParseHtmlProvider Provider');
    }
    // HTML 支持的数学符号
    ParseHtmlProvider.prototype.strNumDiscode = function (str) {
        str = str.replace(/&forall;/g, '∀');
        str = str.replace(/&part;/g, '∂');
        str = str.replace(/&exists;/g, '∃');
        str = str.replace(/&empty;/g, '∅');
        str = str.replace(/&nabla;/g, '∇');
        str = str.replace(/&isin;/g, '∈');
        str = str.replace(/&notin;/g, '∉');
        str = str.replace(/&ni;/g, '∋');
        str = str.replace(/&prod;/g, '∏');
        str = str.replace(/&sum;/g, '∑');
        str = str.replace(/&minus;/g, '−');
        str = str.replace(/&lowast;/g, '∗');
        str = str.replace(/&radic;/g, '√');
        str = str.replace(/&prop;/g, '∝');
        str = str.replace(/&infin;/g, '∞');
        str = str.replace(/&ang;/g, '∠');
        str = str.replace(/&and;/g, '∧');
        str = str.replace(/&or;/g, '∨');
        str = str.replace(/&cap;/g, '∩');
        str = str.replace(/&cap;/g, '∪');
        str = str.replace(/&int;/g, '∫');
        str = str.replace(/&there4;/g, '∴');
        str = str.replace(/&sim;/g, '∼');
        str = str.replace(/&cong;/g, '≅');
        str = str.replace(/&asymp;/g, '≈');
        str = str.replace(/&ne;/g, '≠');
        str = str.replace(/&le;/g, '≤');
        str = str.replace(/&ge;/g, '≥');
        str = str.replace(/&sub;/g, '⊂');
        str = str.replace(/&sup;/g, '⊃');
        str = str.replace(/&nsub;/g, '⊄');
        str = str.replace(/&sube;/g, '⊆');
        str = str.replace(/&supe;/g, '⊇');
        str = str.replace(/&oplus;/g, '⊕');
        str = str.replace(/&otimes;/g, '⊗');
        str = str.replace(/&perp;/g, '⊥');
        str = str.replace(/&sdot;/g, '⋅');
        return str;
    };
    //HTML 支持的希腊字母
    ParseHtmlProvider.prototype.strGreeceDiscode = function (str) {
        str = str.replace(/&Alpha;/g, 'Α');
        str = str.replace(/&Beta;/g, 'Β');
        str = str.replace(/&Gamma;/g, 'Γ');
        str = str.replace(/&Delta;/g, 'Δ');
        str = str.replace(/&Epsilon;/g, 'Ε');
        str = str.replace(/&Zeta;/g, 'Ζ');
        str = str.replace(/&Eta;/g, 'Η');
        str = str.replace(/&Theta;/g, 'Θ');
        str = str.replace(/&Iota;/g, 'Ι');
        str = str.replace(/&Kappa;/g, 'Κ');
        str = str.replace(/&Lambda;/g, 'Λ');
        str = str.replace(/&Mu;/g, 'Μ');
        str = str.replace(/&Nu;/g, 'Ν');
        str = str.replace(/&Xi;/g, 'Ν');
        str = str.replace(/&Omicron;/g, 'Ο');
        str = str.replace(/&Pi;/g, 'Π');
        str = str.replace(/&Rho;/g, 'Ρ');
        str = str.replace(/&Sigma;/g, 'Σ');
        str = str.replace(/&Tau;/g, 'Τ');
        str = str.replace(/&Upsilon;/g, 'Υ');
        str = str.replace(/&Phi;/g, 'Φ');
        str = str.replace(/&Chi;/g, 'Χ');
        str = str.replace(/&Psi;/g, 'Ψ');
        str = str.replace(/&Omega;/g, 'Ω');
        str = str.replace(/&alpha;/g, 'α');
        str = str.replace(/&beta;/g, 'β');
        str = str.replace(/&gamma;/g, 'γ');
        str = str.replace(/&delta;/g, 'δ');
        str = str.replace(/&epsilon;/g, 'ε');
        str = str.replace(/&zeta;/g, 'ζ');
        str = str.replace(/&eta;/g, 'η');
        str = str.replace(/&theta;/g, 'θ');
        str = str.replace(/&iota;/g, 'ι');
        str = str.replace(/&kappa;/g, 'κ');
        str = str.replace(/&lambda;/g, 'λ');
        str = str.replace(/&mu;/g, 'μ');
        str = str.replace(/&nu;/g, 'ν');
        str = str.replace(/&xi;/g, 'ξ');
        str = str.replace(/&omicron;/g, 'ο');
        str = str.replace(/&pi;/g, 'π');
        str = str.replace(/&rho;/g, 'ρ');
        str = str.replace(/&sigmaf;/g, 'ς');
        str = str.replace(/&sigma;/g, 'σ');
        str = str.replace(/&tau;/g, 'τ');
        str = str.replace(/&upsilon;/g, 'υ');
        str = str.replace(/&phi;/g, 'φ');
        str = str.replace(/&chi;/g, 'χ');
        str = str.replace(/&psi;/g, 'ψ');
        str = str.replace(/&omega;/g, 'ω');
        str = str.replace(/&thetasym;/g, 'ϑ');
        str = str.replace(/&upsih;/g, 'ϒ');
        str = str.replace(/&piv;/g, 'ϖ');
        str = str.replace(/&middot;/g, '·');
        return str;
    };
    ParseHtmlProvider.prototype.strcharacterDiscode = function (str) {
        // 加入常用解析
        str = str.replace(/&nbsp;/g, ' ');
        str = str.replace(/&quot;/g, "'");
        str = str.replace(/&amp;/g, '&');
        // str = str.replace(/&lt;/g, '‹');
        // str = str.replace(/&gt;/g, '›');
        str = str.replace(/&lt;/g, '<');
        str = str.replace(/&gt;/g, '>');
        str = str.replace(/&#8226;/g, '•');
        return str;
    };
    // HTML 支持的其他实体
    ParseHtmlProvider.prototype.strOtherDiscode = function (str) {
        str = str.replace(/&OElig;/g, 'Œ');
        str = str.replace(/&oelig;/g, 'œ');
        str = str.replace(/&Scaron;/g, 'Š');
        str = str.replace(/&scaron;/g, 'š');
        str = str.replace(/&Yuml;/g, 'Ÿ');
        str = str.replace(/&fnof;/g, 'ƒ');
        str = str.replace(/&circ;/g, 'ˆ');
        str = str.replace(/&tilde;/g, '˜');
        str = str.replace(/&ensp;/g, '');
        str = str.replace(/&emsp;/g, '');
        str = str.replace(/&thinsp;/g, '');
        str = str.replace(/&zwnj;/g, '');
        str = str.replace(/&zwj;/g, '');
        str = str.replace(/&lrm;/g, '');
        str = str.replace(/&rlm;/g, '');
        str = str.replace(/&ndash;/g, '–');
        str = str.replace(/&mdash;/g, '—');
        str = str.replace(/&lsquo;/g, '‘');
        str = str.replace(/&rsquo;/g, '’');
        str = str.replace(/&sbquo;/g, '‚');
        str = str.replace(/&ldquo;/g, '“');
        str = str.replace(/&rdquo;/g, '”');
        str = str.replace(/&bdquo;/g, '„');
        str = str.replace(/&dagger;/g, '†');
        str = str.replace(/&Dagger;/g, '‡');
        str = str.replace(/&bull;/g, '•');
        str = str.replace(/&hellip;/g, '…');
        str = str.replace(/&permil;/g, '‰');
        str = str.replace(/&prime;/g, '′');
        str = str.replace(/&Prime;/g, '″');
        str = str.replace(/&lsaquo;/g, '‹');
        str = str.replace(/&rsaquo;/g, '›');
        str = str.replace(/&oline;/g, '‾');
        str = str.replace(/&euro;/g, '€');
        str = str.replace(/&trade;/g, '™');
        str = str.replace(/&larr;/g, '←');
        str = str.replace(/&uarr;/g, '↑');
        str = str.replace(/&rarr;/g, '→');
        str = str.replace(/&darr;/g, '↓');
        str = str.replace(/&harr;/g, '↔');
        str = str.replace(/&crarr;/g, '↵');
        str = str.replace(/&lceil;/g, '⌈');
        str = str.replace(/&rceil;/g, '⌉');
        str = str.replace(/&lfloor;/g, '⌊');
        str = str.replace(/&rfloor;/g, '⌋');
        str = str.replace(/&loz;/g, '◊');
        str = str.replace(/&spades;/g, '♠');
        str = str.replace(/&clubs;/g, '♣');
        str = str.replace(/&hearts;/g, '♥');
        str = str.replace(/&diams;/g, '♦');
        str = str.replace(/&#39;/g, '\'');
        return str;
    };
    ParseHtmlProvider.prototype.strMoreDiscode = function (str) {
        str = str.replace(/\r\n/g, "<br>");
        str = str.replace(/\n/g, "<br>");
        str = str.replace(/code/g, "wxxxcode-style");
        return str;
    };
    ParseHtmlProvider.prototype.strEmojiDiscode = function (str) {
        // 加入常用解析
        // str = str.replace(/\[em\]e400026\[\/em\]/g, '<img src="http://qzonestyle.gtimg.cn/qzone/em/e400026.gif" title="祖国">');
        str = str.replace(/\[em\]e400026\[\/em\]/g, '🌹');
        // str = str.replace(/\[em\]e327811\[\/em\]/g, '<img src="http://qzonestyle.gtimg.cn/qzone/em/e327811.gif" title="">');
        str = str.replace(/\[em\]e327811\[\/em\]/g, '🍃');
        str = str.replace(/\[em\]e264\[\/em\]/g, '<img src="http://qzonestyle.gtimg.cn/qzone/em/e264.png" title="">');
        str = str.replace(/\[em\]e252\[\/em\]/g, '🍃');
        str = str.replace(/\[em\]e166\[\/em\]/g, '💝');
        str = str.replace(/&lt;/g, '‹');
        str = str.replace(/&lt;/g, '‹');
        // str = str.replace(/&gt;/g, '›');
        str = str.replace(/&lt;/g, '<');
        str = str.replace(/&gt;/g, '>');
        str = str.replace(/&#8226;/g, '•');
        return str;
    };
    ParseHtmlProvider.prototype.strDiscode = function (str) {
        if (str) {
            str = this.strNumDiscode(str);
            str = this.strGreeceDiscode(str);
            str = this.strcharacterDiscode(str);
            str = this.strOtherDiscode(str);
            str = this.strMoreDiscode(str);
            str = this.strEmojiDiscode(str);
        }
        return str;
    };
    ParseHtmlProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ParseHtmlProvider);
    return ParseHtmlProvider;
}());

//# sourceMappingURL=parse-html.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviewImagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PreviewImagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PreviewImagePage = /** @class */ (function () {
    function PreviewImagePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        console.log(navParams);
        console.log(navParams.get('url'));
        this.url = navParams.get('url');
    }
    PreviewImagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PreviewImagePage');
    };
    PreviewImagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-preview-image',template:/*ion-inline-start:"/Users/anshi/Desktop/resource/anshi/ionic-blog/src/pages/preview-image/preview-image.html"*/'<!--\n  Generated template for the PreviewImagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>previewImage</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <div class="img-wrapper">\n    <img [src]="url | testpipe" style="width: 100%">\n  </div>\n  <!--<ion-img ></ion-img>-->\n\n</ion-content>\n'/*ion-inline-end:"/Users/anshi/Desktop/resource/anshi/ionic-blog/src/pages/preview-image/preview-image.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], PreviewImagePage);
    return PreviewImagePage;
}());

//# sourceMappingURL=preview-image.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RainbowPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_browser_tab__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_parse_html_parse_html__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the RainbowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// declare var webView: any;
var RainbowPage = /** @class */ (function () {
    function RainbowPage(navCtrl, navParams, iab, browserTab, http, parseHtml) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.iab = iab;
        this.browserTab = browserTab;
        this.http = http;
        this.parseHtml = parseHtml;
        this.biaobaiList = [];
        this.uinImgMap = new Map();
        this.favorite = [
            {
                title: '无与伦比的美丽',
                url: 'https://url.cn/5dTyd2M?_wv=1'
            },
            {
                title: '越过山丘',
                url: 'https://url.cn/5vONKxN?_wv=1'
            },
            {
                title: '青鸟与诗',
                url: 'https://url.cn/5zEMkru?_wv=1'
            },
            {
                title: '遇见你的时候所有星星都落到我头上',
                url: 'https://url.cn/5WWHoCK?_wv=1'
            },
            {
                title: 'Pretty Boy',
                url: 'https://url.cn/5HWI9X1?_wv=1'
            },
            {
                title: '致姗姗来迟的你',
                url: 'https://url.cn/54aLD2R?_wv=1'
            },
            {
                title: '小美好',
                url: 'https://url.cn/5lZ6PMC?_wv=1'
            },
            {
                title: '情话微甜',
                url: 'https://url.cn/5dsk1I7?_wv=1'
            },
            {
                title: '이쁘다니까 (你真漂亮)',
                url: 'https://url.cn/5Mkg0AI?_wv=1'
            },
            {
                title: '9420',
                url: 'https://url.cn/5xpXpBn?_wv=1'
            },
            {
                title: '甜了个蜜',
                url: 'https://url.cn/5Wqd3Rc?_wv=1'
            },
            {
                title: '我们之间',
                url: 'https://url.cn/5zaLEmX?_wv=1'
            },
            {
                title: '佛系少女',
                url: 'https://url.cn/5j0nX05?_wv=1'
            },
            {
                title: '甜到爆表',
                url: 'https://url.cn/5SzChct?_wv=1'
            },
            {
                title: '별이 빛나는 밤(Starry night)',
                url: 'https://url.cn/5TFEGXF?_wv=1'
            },
            {
                title: 'LOVE SCENARIO (사랑을 했다)',
                url: 'https://url.cn/5lnA98j?_wv=1'
            },
            {
                title: '약속해요 (I.P.U.) (约定)',
                url: 'https://url.cn/5DltfZN?_wv=1'
            },
            {
                title: '下一秒',
                url: 'https://url.cn/5i8JKvn?_wv=1'
            },
            {
                title: '慢慢喜欢你',
                url: 'https://url.cn/57NKvvJ?_wv=1'
            },
            {
                title: '千禧',
                url: 'https://url.cn/54B1XXZ?_wv=1'
            },
            {
                title: '青柠',
                url: 'https://url.cn/55DtuVr?_wv=1'
            },
            {
                title: '爱的魔法',
                url: 'https://url.cn/5KziOF6?_wv=1'
            },
            {
                title: 'OK歌',
                url: 'https://url.cn/5cMtEiA?_wv=1'
            },
            {
                title: '사랑해요只对你说',
                url: 'https://url.cn/5Z2YzOy?_wv=1'
            },
            {
                title: '一点点喜欢',
                url: 'https://url.cn/5KfkVWB?_wv=1'
            },
            {
                title: '我想',
                url: 'https://url.cn/5H3KEm5?_wv=1'
            },
            {
                title: '우주를 줄게 (给你宇宙)',
                url: 'https://url.cn/5btR1UL?_wv=1'
            },
            {
                title: '每一句都很甜',
                url: 'https://url.cn/5ZwbVp8?_wv=1'
            },
            {
                title: '小流星(《同学两亿岁》网络剧片尾曲)',
                url: 'https://url.cn/5uYd3wl?_wv=1'
            },
            {
                title: '遇到',
                url: 'https://url.cn/59F4GQG?_wv=1'
            },
            {
                title: '莫名奇妙爱上你',
                url: 'https://url.cn/5cA1HZV?_wv=1'
            },
            {
                title: '星晴',
                url: 'https://url.cn/58V2KnX?_wv=1'
            },
            {
                title: '小永远',
                url: 'https://url.cn/52LlauF?_wv=1'
            },
            {
                title: '因为你',
                url: 'https://url.cn/5onjJHV?_wv=1'
            },
            {
                title: '鸽子',
                url: 'https://url.cn/5MbiJki?_wv=1'
            },
            {
                title: '雀跃',
                url: 'https://url.cn/5S6LR5a?_wv=1'
            },
            {
                title: '与妻书',
                url: 'https://url.cn/5gs3apC?_wv=1'
            },
            {
                title: '比心',
                url: 'https://url.cn/5pc0DUX?_wv=1'
            },
            {
                title: '私奔',
                url: 'https://url.cn/5nyKcl7?_wv=1'
            },
            {
                title: '四分之三的恋爱',
                url: 'https://url.cn/5SQIII8?_wv=1'
            },
            {
                title: '超级喜欢你',
                url: 'https://url.cn/5qYH2ru?_wv=1'
            },
            {
                title: '当你',
                url: 'https://url.cn/5v0fKtT?_wv=1'
            },
            {
                title: '初见',
                url: 'https://url.cn/5PHBrGt?_wv=1'
            },
            {
                title: 'I Miss You',
                url: 'https://url.cn/5nYmGMJ?_wv=1'
            },
            {
                title: '小清新',
                url: 'https://url.cn/5mn0NCc?_wv=1'
            },
            {
                title: '东西',
                url: 'https://url.cn/5l7SUOo?_wv=1'
            },
            {
                title: '小宇',
                url: 'https://url.cn/5krFk2J?_wv=1'
            },
            {
                title: '让我为你唱一首歌',
                url: 'https://url.cn/5EY8Ps0?_wv=1'
            },
            {
                title: '小岁月太着急',
                url: 'https://url.cn/5wnrBNL?_wv=1'
            },
            {
                title: '寻萤',
                url: 'https://url.cn/52nPqr0?_wv=1'
            },
            {
                title: '坐在巷口的那对男女',
                url: 'http://music.163.com/song/394653/?userid=533707894'
            },
            {
                title: '我多喜欢你，你会知道',
                url: 'http://music.163.com/song/509518010/?userid=533707894'
            },
            {
                title: '我乐意',
                url: 'http://music.163.com/song/554191378/?userid=533707894'
            },
            {
                title: '我喜欢你胜过削好的水果周末的零食延后的死线冰镇西瓜',
                url: 'http://music.163.com/song/434070103/?userid=533707894'
            },
            {
                title: '晚安喵',
                url: 'http://music.163.com/song/28875230/?userid=533707894'
            },
            {
                title: '我乐意',
                url: 'http://music.163.com/song/554191378/?userid=533707894'
            }
        ];
        this.srctest = ROOT_URL + '/sys/picture?url=' + encodeURIComponent('http://b19.photo.store.qq.com/psb?/V11Xtz6l1embFM/qclOwClV.YrQxM6pWmyM8EGOas4fC01aG4V4.CodSFs!/b/dBMAAAAAAAAA&amp;bo=hwOTA4cDkwMRECc!');
        this.browserOptions = {};
        this.pet = 'puppies';
    }
    RainbowPage.prototype.ionViewDidLoad = function () {
        this.uinImgMap.set('2425936375', 'assets/imgs/biaobai.jpg');
        this.uinImgMap.set('449338017', 'assets/imgs/tieba.jpg');
        console.log('ionViewDidLoad RainbowPage');
        this.getRemoteData();
        // this.http.get("http://b19.photo.store.qq.com/psb?/V11Xtz6l1embFM/qclOwClV.YrQxM6pWmyM8EGOas4fC01aG4V4.CodSFs!/b/dBMAAAAAAAAA&amp;bo=hwOTA4cDkwMRECc!").subscribe(res => {
        //   console.log(res);
        // })
        //
        // this.http.get('https://github.com/fatedier/frp/blob/master/README_zh.md').subscribe(res => {
        //   console.log(res)
        // })
    };
    RainbowPage.prototype.getRemoteData = function (params) {
        var _this = this;
        if (params === void 0) { params = {}; }
        this.http.post(ROOT_URL + "/sys/sweet/wall/list?page=1", { params: params }).subscribe(function (res) {
            console.log(res);
            if (res['code'] == 0) {
                _this.biaobaiList = res['data']['list'];
                _this.biaobaiList.map(function (item) {
                    // item.createTime = timestampToTime(item.createTime.$date);
                    item.content = item.content;
                    item.authorImg = _this.uinImgMap.get(item.uin);
                    // item.authorName = '表白墙';
                    item.info = JSON.parse(item.info);
                    item.authorName = item.info['name'];
                    console.log(item);
                    return item;
                });
            }
        });
    };
    RainbowPage.prototype.browMusic = function (url) {
        // if(url.startsWith('https')){
        //   url = url.replace('https','http')
        // }
        var _this = this;
        // alert(url);
        this.browserTab.isAvailable()
            .then(function (isAvailable) {
            if (isAvailable) {
                _this.browserTab.openUrl(url).then(function (value) {
                    // console.log(value);
                });
            }
            else {
                alert("browser no support launched by iab?");
                var browser = _this.iab.create(url, '_self', _this.browserOptions);
                // browser.on('loadstop').subscribe(res => {
                //   console.log(res.url);
                //   alert(res.message);
                //   alert(res.url);
                //   alert(res.type)
                // })
                // open URL with InAppBrowser instead or SafariViewController
            }
        });
        // const browser = this.iab.create(url);
        //
        // // browser.executeScript(...);
        //
        // // browser.insertCSS(...);
        // browser.on('loadstop').subscribe(event => {
        //   alert(event)
        //   browser.insertCSS({ code: "body{color: red;" });
        // });
        // browser.close();
    };
    RainbowPage.prototype.urlFilter = function (url) {
        // if(url.startsWith('https')){
        //   url = url.replace('https','http')
        // }
        return url;
    };
    RainbowPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rainbow',template:/*ion-inline-start:"/Users/anshi/Desktop/resource/anshi/ionic-blog/src/pages/rainbow/rainbow.html"*/'<!--\n  Generated template for the RainbowPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col col-2 style="display: flex;justify-content: center;align-items: center">\n          <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n        </ion-col>\n        <ion-col>\n\n          <ion-segment [(ngModel)]="pet">\n\n            <ion-segment-button value="puppies">\n              甜甜的歌\n              <!--<ion-icon name="bookmark"></ion-icon>-->\n            </ion-segment-button>\n\n            <!--<ion-segment-button value=\'let\'>menu</ion-segment-button>-->\n            <ion-segment-button value="kittens">\n              <!--<ion-icon name="bookmark"></ion-icon>-->\n              暖暖的事\n            </ion-segment-button>\n\n          </ion-segment>\n\n        </ion-col>\n        <ion-col col-2></ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </ion-toolbar>\n  <!--<ion-navbar>-->\n    <!--<button ion-button menuToggle>-->\n      <!--<ion-icon name="menu"></ion-icon>-->\n    <!--</button>-->\n    <!--<ion-title>Rainbow</ion-title>-->\n  <!--</ion-navbar>-->\n\n</ion-header>\n<!--<ion-header>-->\n\n  <!--<ion-navbar>-->\n    <!--<ion-title>rainbow</ion-title>-->\n  <!--</ion-navbar>-->\n\n<!--</ion-header>-->\n\n\n<ion-content>\n\n  <!--<img [src]="srctest" alt="">-->\n\n  <!--<div padding ion-fixed style="width: 100%;background-color: red;">-->\n    <!--<ion-segment [(ngModel)]="pet">-->\n      <!--<ion-segment-button>menu</ion-segment-button>-->\n      <!--<ion-segment-button value="kittens">-->\n        <!--Kittens-->\n      <!--</ion-segment-button>-->\n      <!--<ion-segment-button value="puppies">-->\n        <!--Puppies-->\n      <!--</ion-segment-button>-->\n    <!--</ion-segment>-->\n  <!--</div>-->\n  <!--<div padding>-->\n    <!--<ion-segment>-->\n      <!--<ion-segment-button></ion-segment-button>-->\n    <!--</ion-segment>-->\n  <!--</div>-->\n\n  <div [ngSwitch]="pet" padding-top>\n    <ion-list *ngSwitchCase="\'puppies\'">\n      <a [href]="urlFilter(item.url)" ion-item *ngFor="let item of favorite">\n        {{ item.title }}\n      </a>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'kittens\'">\n      <sw-loading *ngIf="!biaobaiList"></sw-loading>\n      <ion-card *ngFor="let item of biaobaiList">\n        <qzone-emotion [emotion]="item">\n\n        </qzone-emotion>\n        <!--<div [innerHTML]="parseHtml.strDiscode(item.content)"></div>-->\n      </ion-card>\n      <!--<button ion-item *ngFor="let item of favorite" (click)="browMusic(item.url)">-->\n      <!--{{ item.title }}-->\n      <!--</button>-->\n    </ion-list>\n  </div>\n\n  <ion-list inset>\n\n\n    <!--<button ion-item *ngFor="let item of favorite" (click)="browMusic(item.url)">-->\n      <!--{{ item.title }}-->\n    <!--</button>-->\n\n    <!--<a [href]="urlFilter(item.url)" ion-item *ngFor="let item of favorite">-->\n      <!--{{ \'a ->\' + item.title }}-->\n    <!--</a>-->\n  </ion-list>\n\n  <!--<ion-card *ngFor="let item of favorite">-->\n    <!--<a [href]="item.url">{{item.title}}</a>-->\n    <!--<button ion-button (click)="browMusic(item.url)">show browser</button>-->\n  <!--</ion-card>-->\n\n</ion-content>\n'/*ion-inline-end:"/Users/anshi/Desktop/resource/anshi/ionic-blog/src/pages/rainbow/rainbow.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_browser_tab__["a" /* BrowserTab */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_browser_tab__["a" /* BrowserTab */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClient */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__providers_parse_html_parse_html__["a" /* ParseHtmlProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_parse_html_parse_html__["a" /* ParseHtmlProvider */]) === "function" && _f || Object])
    ], RainbowPage);
    return RainbowPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=rainbow.js.map

/***/ }),

/***/ 142:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 142;

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/preview-image/preview-image.module": [
		413,
		1
	],
	"../pages/rainbow/rainbow.module": [
		414,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 186;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(125);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, statusBar) {
        this.navCtrl = navCtrl;
        this.statusBar = statusBar;
    }
    HomePage.prototype.switchStatusBar = function (key) {
        switch (key) {
            case 'BlackTranslucent':
                this.statusBar.styleBlackTranslucent();
                break;
            case 'LightContent':
                this.statusBar.styleLightContent();
                break;
            case 'BlackOpaque':
                this.statusBar.styleBlackOpaque();
            case 'hide':
                this.statusBar.hide();
                break;
            case 'show':
                this.statusBar.show();
                break;
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/anshi/Desktop/resource/anshi/ionic-blog/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Blog template</h3>\n  <p>\n    add markdown support!\n    <a href="https://github.com/jfcere/ngx-markdown">ngx-markdown</a>\n    <a href="https://www.jianshu.com/p/9587c1b3cdeb">简书-Angular4增加对markdown的支持</a>\n  </p>\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">ionic docs</a> will show you the way.\n  </p>\n\n\n  <ion-label>statusBar Test</ion-label>\n\n  <ion-list>\n    <button ion-item (click)="switchStatusBar(\'BlackTranslucent\')">BlackTranslucent</button>\n    <button ion-item (click)="switchStatusBar(\'LightContent\')">LightContent</button>\n    <button ion-item (click)="switchStatusBar(\'BlackOpaque\')">BlackOpaque</button>\n    <button ion-item (click)="switchStatusBar(\'show\')">show</button>\n    <button ion-item (click)="switchStatusBar(\'hide\')">hide</button>\n  </ion-list>\n\n  <!--<button ion-button secondary menuToggle>Toggle Menu</button>-->\n</ion-content>\n'/*ion-inline-end:"/Users/anshi/Desktop/resource/anshi/ionic-blog/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/anshi/Desktop/resource/anshi/ionic-blog/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <!--<ion-list>-->\n\n    <ion-card *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <markdown>\n        > 我还是习惯\n\n        > 在睡前含一块糖\n\n        > 进去甜甜的梦\n\n        > 带着你的叮嘱\n\n        > 你的斥责\n\n        > 你的味道\n\n        > 早安\n\n        > 孤独小美\n\n        > 格致别趣\n\n        > 六点起床第630天 迟到38天\n      </markdown>\n\n\n      <!--<div [innerHTML]="content"></div>-->\n\n      <!--<ion-icon [name]="item.icon" item-start></ion-icon>-->\n      <!--{{item.title}}-->\n      <!--<div class="item-note" item-end>-->\n        <!--{{item.note}}-->\n      <!--</div>-->\n\n    </ion-card>\n    <!--<button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">-->\n      <!--<ion-icon [name]="item.icon" item-start></ion-icon>-->\n      <!--{{item.title}}-->\n      <!--<div class="item-note" item-end>-->\n        <!--{{item.note}}-->\n      <!--</div>-->\n    <!--</button>-->\n  <!--</ion-list>-->\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/anshi/Desktop/resource/anshi/ionic-blog/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QzoneImageDealProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the QzoneImageDealProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var QzoneImageDealProvider = /** @class */ (function () {
    function QzoneImageDealProvider(http) {
        this.http = http;
        console.log('Hello QzoneImageDealProvider Provider');
    }
    QzoneImageDealProvider.prototype.deal = function (url) {
        return ROOT_URL + '/sys/picture?url=' + encodeURIComponent(url);
    };
    QzoneImageDealProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], QzoneImageDealProvider);
    return QzoneImageDealProvider;
}());

//# sourceMappingURL=qzone-image-deal.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(258);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_markdown__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_rainbow_rainbow__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_in_app_browser__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_browser_tab__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_app_minimize__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_back_button_back_button__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_parse_html_parse_html__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_components_module__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_sweet_net_sweet_net__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_qzone_image_deal_qzone_image_deal__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_preview_image_preview_image__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pipes_testpipe_testpipe__ = __webpack_require__(412);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var INTERCEPTOR_PROVIDES = [
    { provide: __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_17__providers_sweet_net_sweet_net__["a" /* SweetNetProvider */], multi: true },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_rainbow_rainbow__["a" /* RainbowPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_preview_image_preview_image__["a" /* PreviewImagePage */],
                __WEBPACK_IMPORTED_MODULE_20__pipes_testpipe_testpipe__["a" /* TestpipePipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_16__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_8_ngx_markdown__["a" /* MarkdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/preview-image/preview-image.module#PreviewImagePageModule', name: 'PreviewImagePage', segment: 'preview-image', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rainbow/rainbow.module#RainbowPageModule', name: 'RainbowPage', segment: 'rainbow', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_rainbow_rainbow__["a" /* RainbowPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_preview_image_preview_image__["a" /* PreviewImagePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_browser_tab__["a" /* BrowserTab */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_app_minimize__["a" /* AppMinimize */],
                __WEBPACK_IMPORTED_MODULE_13__providers_back_button_back_button__["a" /* BackButtonProvider */],
                // HttpClient
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_15__providers_parse_html_parse_html__["a" /* ParseHtmlProvider */],
                // ...INTERCEPTOR_PROVIDES,
                __WEBPACK_IMPORTED_MODULE_18__providers_qzone_image_deal_qzone_image_deal__["a" /* QzoneImageDealProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_rainbow_rainbow__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_app_minimize__ = __webpack_require__(126);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, appMinimize
        // private backButtonService: BackButtonProvider
    ) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.appMinimize = appMinimize;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_rainbow_rainbow__["a" /* RainbowPage */];
        this.initializeApp();
        platform.ready().then(function (res) {
            platform.registerBackButtonAction(function () {
                if (_this.nav.canGoBack()) {
                    // alert('can go back')
                    _this.nav.pop();
                }
                else {
                    _this.appMinimize.minimize();
                    // alert('back!!!')
                }
                // this.backButtonService.registerBackButtonAction(this.content)
                // this.appMinimize.minimize();
                // alert("是否退出")
            });
        });
        // 从后台进入
        platform.resume.subscribe(function (res) {
            console.log(res);
            console.log('resume');
        });
        // 点击硬件返回键
        platform.backButton.subscribe(function (res) {
            console.log(res);
            console.log('backButton');
        });
        // 退出前台
        platform.pause.subscribe(function (res) {
            console.log(res);
            console.log('pause');
        });
        // 分屏等改变窗口大小
        platform.resize.subscribe(function (res) {
            console.log(res);
            console.log('pause');
        });
        // used for an example of ngFor and navigation
        this.pages = [
            // { title: 'Rainbow', component: RainbowPage },
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            // this.statusBar.styleDefault();
            _this.statusBar.styleLightContent();
            // this.statusBar.hide();
            // this.statusBar.styleBlackTranslucent();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.push(page.component).then(function (res) {
            console.log(res);
        });
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        // this.nav.setRoot(page.component).then(res => {
        //   console.log(res)
        // });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('content'),
        __metadata("design:type", Object)
    ], MyApp.prototype, "content", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/anshi/Desktop/resource/anshi/ionic-blog/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/anshi/Desktop/resource/anshi/ionic-blog/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_app_minimize__["a" /* AppMinimize */]
            // private backButtonService: BackButtonProvider
        ])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackButtonProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_app_minimize__ = __webpack_require__(126);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the BackButtonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var BackButtonProvider = /** @class */ (function () {
    //构造函数 依赖注入
    function BackButtonProvider(platform, appCtrl, toastCtrl, appMinimize) {
        this.platform = platform;
        this.appCtrl = appCtrl;
        this.toastCtrl = toastCtrl;
        this.appMinimize = appMinimize;
        //控制硬件返回按钮是否触发，默认false
        this.backButtonPressed = false;
    }
    //注册方法
    BackButtonProvider.prototype.registerBackButtonAction = function (nav) {
        var _this = this;
        nav.canGoBack();
        //registerBackButtonAction是系统自带的方法
        this.platform.registerBackButtonAction(function () {
            //获取NavController
            var activeNav = _this.appCtrl.getActiveNavs()[0];
            // this.appCtrl.getActiveNavContainers()
            //如果可以返回上一页，则执行pop
            console.log(activeNav);
            console.log(activeNav.getViews().length);
            if (activeNav.getViews()[0] && !activeNav.getViews()[0].isFirst()) {
                activeNav.getViews()[0].dismiss();
            }
            if (activeNav.canGoBack()) {
                activeNav.pop();
            }
            else {
                _this.appMinimize.minimize();
                // if (nav == null || nav._selectHistory[nav._selectHistory.length - 1] === tabRef.getByIndex(0).id) {
                //   //执行退出
                //   this.appMinimize.minimize();
                // } else {
                //   //选择首页第一个的标签
                //   tabRef.select(0);
                // }
            }
        });
    };
    BackButtonProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_app_minimize__["a" /* AppMinimize */]])
    ], BackButtonProvider);
    return BackButtonProvider;
}());

//# sourceMappingURL=back-button.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__qq_emotion_qq_emotion__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__qzone_emotion_qzone_emotion__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sw_loading_sw_loading__ = __webpack_require__(410);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__qq_emotion_qq_emotion__["a" /* QqEmotionComponent */],
                __WEBPACK_IMPORTED_MODULE_2__qzone_emotion_qzone_emotion__["a" /* QzoneEmotionComponent */],
                __WEBPACK_IMPORTED_MODULE_4__sw_loading_sw_loading__["a" /* SwLoadingComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__qq_emotion_qq_emotion__["a" /* QqEmotionComponent */],
                __WEBPACK_IMPORTED_MODULE_2__qzone_emotion_qzone_emotion__["a" /* QzoneEmotionComponent */],
                __WEBPACK_IMPORTED_MODULE_4__sw_loading_sw_loading__["a" /* SwLoadingComponent */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__qzone_emotion_qzone_emotion__["a" /* QzoneEmotionComponent */],
                __WEBPACK_IMPORTED_MODULE_4__sw_loading_sw_loading__["a" /* SwLoadingComponent */]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QqEmotionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the QqEmotionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var QqEmotionComponent = /** @class */ (function () {
    function QqEmotionComponent() {
        console.log('Hello QqEmotionComponent Component');
        this.text = 'Hello World';
    }
    QqEmotionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'qq-emotion',template:/*ion-inline-start:"/Users/anshi/Desktop/resource/anshi/ionic-blog/src/components/qq-emotion/qq-emotion.html"*/'<!-- Generated template for the QqEmotionComponent component -->\n<div>\n  {{text}}\n</div>\n'/*ion-inline-end:"/Users/anshi/Desktop/resource/anshi/ionic-blog/src/components/qq-emotion/qq-emotion.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], QqEmotionComponent);
    return QqEmotionComponent;
}());

//# sourceMappingURL=qq-emotion.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QzoneEmotionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_parse_html_parse_html__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_qzone_image_deal_qzone_image_deal__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_preview_image_preview_image__ = __webpack_require__(131);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the QzoneEmotionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var QzoneEmotionComponent = /** @class */ (function () {
    function QzoneEmotionComponent(parseHtml, imgUtil, navCtrl) {
        this.parseHtml = parseHtml;
        this.imgUtil = imgUtil;
        this.navCtrl = navCtrl;
        console.log('Hello QzoneEmotionComponent Component');
        this.text = 'Hello World';
        console.log(this.emotion);
    }
    QzoneEmotionComponent.prototype.ionViewDidEnter = function () {
        console.log(this.emotion);
    };
    QzoneEmotionComponent.prototype.ionViewDidLoad = function () {
        console.log(this.emotion);
    };
    QzoneEmotionComponent.prototype.previewImage = function (e) {
        console.log(e);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_preview_image_preview_image__["a" /* PreviewImagePage */], {
            url: e
        });
        // wx.previewImage({
        //   urls: [e.target.dataset.url],
        // })
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], QzoneEmotionComponent.prototype, "emotion", void 0);
    QzoneEmotionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'qzone-emotion',template:/*ion-inline-start:"/Users/anshi/Desktop/resource/anshi/ionic-blog/src/components/qzone-emotion/qzone-emotion.html"*/'<!--component/emotion/emotion.wxml-->\n<div class=\'emotion-item\'>\n  <div class=\'author\'>\n    <img  class=\'author-img\' [src]=\'emotion.authorImg\'>\n\n    <div [innerHTML]="parseHtml.strDiscode(emotion.authorName)"></div>\n    <!--<rich-text nodes=\'{{emotion.author}}\'></rich-text>-->\n  </div>\n  <div class=\'emotion-body\'>\n    <!-- <rich-text nodes=\'{{emotion.author}}\'></rich-text> -->\n    <!-- <view class=\'author-name\'>{{emotion.info.name}}</view> -->\n    <div  class=\'emotion-content\'>\n      <!--<rich-text nodes=\'{{emotion.content}}\'></rich-text>-->\n      <div [innerHTML]="parseHtml.strDiscode(emotion.content)"></div>\n\n      <div class="img-wrapper">\n\n        <!--<div *ngFor="let item of emotion.info.video">-->\n          <!--<img class=\'upload-img\' [src]="imgUtil.deal(item.url1)" >-->\n        <!--</div>-->\n\n        <div *ngFor="let item of emotion.info.pic">\n          <img class=\'upload-img\' *ngIf="!item.is_video" [src]="imgUtil.deal(item.smallurl)" (click)="previewImage(item.smallurl)" >\n          <img *ngIf="item.is_video" class=\'upload-img\' [src]="imgUtil.deal(item.url1)" (click)="previewImage(item.url1)">\n        </div>\n\n      </div>\n\n\n      <div>\n        <div class=\'comment\' *ngFor="let item of emotion.info.commentlist">\n          <div class=\'comment-name\' [innerHTML]="parseHtml.strDiscode(item.name)"></div> ：\n\n          <div class=\'comment-content\' [innerHTML]="parseHtml.strDiscode(item.content)"></div>\n\n          <!--<rich-text class=\'comment-name\' nodes=\'{{item.name}}\'></rich-text>：-->\n          <!--<rich-text class=\'comment-content\' nodes=\'{{item.content}}\'></rich-text>-->\n        </div>\n        <!-- <block >\n\n          <br/>\n        </block> -->\n      </div>\n    </div>\n  </div>\n</div>\n'/*ion-inline-end:"/Users/anshi/Desktop/resource/anshi/ionic-blog/src/components/qzone-emotion/qzone-emotion.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_parse_html_parse_html__["a" /* ParseHtmlProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_qzone_image_deal_qzone_image_deal__["a" /* QzoneImageDealProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */]])
    ], QzoneEmotionComponent);
    return QzoneEmotionComponent;
}());

//# sourceMappingURL=qzone-emotion.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwLoadingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the SwLoadingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var SwLoadingComponent = /** @class */ (function () {
    function SwLoadingComponent() {
        console.log('Hello SwLoadingComponent Component');
        this.text = 'Hello World';
    }
    SwLoadingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'sw-loading',template:/*ion-inline-start:"/Users/anshi/Desktop/resource/anshi/ionic-blog/src/components/sw-loading/sw-loading.html"*/'<!-- Generated template for the SwLoadingComponent component -->\n<div class="spinner">\n  <div class="bounce1"></div>\n  <div class="bounce2"></div>\n  <div class="bounce3"></div>\n</div>\n'/*ion-inline-end:"/Users/anshi/Desktop/resource/anshi/ionic-blog/src/components/sw-loading/sw-loading.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], SwLoadingComponent);
    return SwLoadingComponent;
}());

//# sourceMappingURL=sw-loading.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SweetNetProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_rxjs_observable_of__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__node_modules_rxjs_observable_of__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the SweetNetProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SweetNetProvider = /** @class */ (function () {
    function SweetNetProvider(http) {
        this.http = http;
        console.log('Hello SweetNetProvider Provider');
    }
    SweetNetProvider.prototype.handleData = function (ev) {
        return Object(__WEBPACK_IMPORTED_MODULE_3__node_modules_rxjs_observable_of__["of"])(ev);
    };
    SweetNetProvider.prototype.intercept = function (req, next) {
        var _this = this;
        console.log(req);
        var header = req.headers;
        // if (req.url.startsWith('http://b19.photo.store.qq.com') || req.url.startsWith('https://github.com')){
        //
        //   header = header.append('Access-Control-Allow-Origin','*');
        //   header = header.append('Connection','keep-alive');
        //   header = header.append('Cache-Control','no-cache');
        //   header = header.append('DNT','1');
        //   header = header.append('Pragma','no-cache');
        //
        //
        //   console.log(header)
        //
        // }
        var newReq = req.clone({
            url: req.url,
            headers: header
        });
        // req.headers.append('','')
        console.log(newReq);
        return next.handle(newReq).pipe(
        // mergeMap
        Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["concatMap"])(function (event) {
            // 允许统一对请求错误处理，这是因为一个请求若是业务上错误的情况下其HTTP请求的状态是200的情况下需要
            // if (event instanceof HttpResponse && event.status === 200){
            //   console.log(event)
            //   return this.handleData(event);
            // }
            // 若一切都正常，则后续操作
            console.log(event);
            return Object(__WEBPACK_IMPORTED_MODULE_3__node_modules_rxjs_observable_of__["of"])(event);
        }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["catchError"])(function (err) { return _this.handleData(err); }));
        // return undefined;
    };
    SweetNetProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], SweetNetProvider);
    return SweetNetProvider;
}());

//# sourceMappingURL=sweet-net.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestpipePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the TestpipePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var TestpipePipe = /** @class */ (function () {
    function TestpipePipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    TestpipePipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        // return value.toLowerCase();
        return ROOT_URL + '/sys/picture?url=' + encodeURIComponent(value);
    };
    TestpipePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'testpipe',
        })
    ], TestpipePipe);
    return TestpipePipe;
}());

//# sourceMappingURL=testpipe.js.map

/***/ })

},[250]);
//# sourceMappingURL=main.js.map