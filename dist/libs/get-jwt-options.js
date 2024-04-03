"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getJwtOptions = void 0;
async function getJwtOptions(configService) {
    return {
        secret: configService.get('jwt.accessTokenSecret'),
        signOptions: {
            expiresIn: configService.get('jwt.accessTokenExpiresIn'),
            algorithm: 'HS256'
        }
    };
}
exports.getJwtOptions = getJwtOptions;
//# sourceMappingURL=get-jwt-options.js.map