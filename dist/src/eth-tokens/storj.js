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
var StorjTokenTestnet = (function (_super) {
    __extends(StorjTokenTestnet, _super);
    function StorjTokenTestnet(ethEngine) {
        return _super.call(this, tokenconfig_1.TokenConfig.Storj.contractAddress, ethEngine) || this;
    }
    return StorjTokenTestnet;
}(dex_1.DEX));
exports.StorjTokenTestnet = StorjTokenTestnet;
var StorjTokenMainnet = (function (_super) {
    __extends(StorjTokenMainnet, _super);
    function StorjTokenMainnet(ethEngine) {
        return _super.call(this, tokenconfigmain_1.TokenConfigMain.Storj.contractAddress, ethEngine) || this;
    }
    return StorjTokenMainnet;
}(dex_1.DEX));
exports.StorjTokenMainnet = StorjTokenMainnet;
//# sourceMappingURL=storj.js.map