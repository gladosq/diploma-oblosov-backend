"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getKeyName = exports.getLocalization = exports.shuffleArray = exports.Helper = void 0;
const mime_types_1 = require("mime-types");
const crypto = require("node:crypto");
class Helper {
    static customFileName(req, file, cb) {
        const uuid = crypto.randomUUID();
        const fileExtension = (0, mime_types_1.extension)(file.mimetype);
        const hashName = `${uuid}.${fileExtension}`;
        cb(null, hashName);
    }
    static destinationPath(req, file, cb) {
        cb(null, './uploads/');
    }
}
exports.Helper = Helper;
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};
exports.shuffleArray = shuffleArray;
const getLocalization = (localization) => {
    if (localization === 3) {
        return [1, 2];
    }
    return [localization];
};
exports.getLocalization = getLocalization;
const getKeyName = (array, value) => {
    return array[value];
};
exports.getKeyName = getKeyName;
//# sourceMappingURL=utils.js.map