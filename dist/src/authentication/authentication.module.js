"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationModule = void 0;
const common_1 = require("@nestjs/common");
const authentication_controller_1 = require("./authentication.controller");
const authentication_service_1 = require("./authentication.service");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("../typeorm");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const jwt_config_1 = require("../../libs/jwt.config");
const const_1 = require("../../const/const");
const ENV_USERS_FILE_PATH = '.env.development';
let AuthenticationModule = class AuthenticationModule {
};
exports.AuthenticationModule = AuthenticationModule;
exports.AuthenticationModule = AuthenticationModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([typeorm_2.Users]),
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                cache: true,
                load: [jwt_config_1.default],
                envFilePath: ENV_USERS_FILE_PATH
            }),
            jwt_1.JwtModule.register({
                global: true,
                secret: const_1.jwtConstants.secret,
                signOptions: { expiresIn: '7d' }
            })
        ],
        controllers: [authentication_controller_1.AuthenticationController],
        providers: [authentication_service_1.AuthenticationService],
        exports: [authentication_service_1.AuthenticationService]
    })
], AuthenticationModule);
//# sourceMappingURL=authentication.module.js.map