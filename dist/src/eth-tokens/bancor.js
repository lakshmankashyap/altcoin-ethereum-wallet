"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var tokenconfig_1 = require("../config/tokens/tokenconfig");
var tokenconfigmain_1 = require("../config/tokens/tokenconfigmain");
var dex_1 = require("../eth/tokens/dex");
var BancorTokenTestnet = (function (_super) {
    __extends(BancorTokenTestnet, _super);
    function BancorTokenTestnet(ethEngine) {
        return _super.call(this, tokenconfig_1.TokenConfig.Bancor.contractAddress, ethEngine) || this;
    }
    return BancorTokenTestnet;
}(dex_1.DEX));
exports.BancorTokenTestnet = BancorTokenTestnet;
var BancorTokenMainnet = (function (_super) {
    __extends(BancorTokenMainnet, _super);
    function BancorTokenMainnet(ethEngine) {
        return _super.call(this, tokenconfigmain_1.TokenConfigMain.Bancor.contractAddress, ethEngine) || this;
    }
    return BancorTokenMainnet;
}(dex_1.DEX));
exports.BancorTokenMainnet = BancorTokenMainnet;
//# sourceMappingURL=bancor.js.map