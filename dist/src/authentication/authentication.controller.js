"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationController = void 0;
const common_1 = require("@nestjs/common");
const authentication_service_1 = require("./authentication.service");
const create_user_dto_1 = require("./dto/create-user.dto");
const swagger_1 = require("@nestjs/swagger");
const login_user_dto_1 = require("./dto/login-user.dto");
const logged_user_rdo_1 = require("./rdo/logged-user.rdo");
const auth_guard_1 = require("../../libs/auth.guard");
let AuthenticationController = class AuthenticationController {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    async create(createUserDto, req) {
        await this.authenticationService.checkUserModerate({ id: req.profile.sub });
        return this.authenticationService.createNewUser(createUserDto);
    }
    async getProfile(req) {
        return this.authenticationService.findUserById({ id: req.profile.sub });
    }
    async loginUser(loginUserDto) {
        const verifiedUser = await this.authenticationService.verifyUser(loginUserDto);
        const loggedUser = await this.authenticationService.createUserToken(verifiedUser);
        const { password, ...newResponse } = verifiedUser;
        return { ...newResponse, ...loggedUser };
    }
};
exports.AuthenticationController = AuthenticationController;
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)('/create'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto, Object]),
    __metadata("design:returntype", Promise)
], AuthenticationController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('/profile'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthenticationController.prototype, "getProfile", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        type: logged_user_rdo_1.LoggedUserRdo,
        status: common_1.HttpStatus.OK,
        description: 'User has been successfully logged.',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.UNAUTHORIZED,
        description: 'Password or Login is wrong.',
    }),
    (0, common_1.Post)('/login'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_user_dto_1.LoginUserDto]),
    __metadata("design:returntype", Promise)
], AuthenticationController.prototype, "loginUser", null);
exports.AuthenticationController = AuthenticationController = __decorate([
    (0, swagger_1.ApiTags)('Authentication'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService])
], AuthenticationController);
//# sourceMappingURL=authentication.controller.js.map