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
exports.ProfileController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const profile_service_1 = require("./profile.service");
const auth_guard_1 = require("../../libs/auth.guard");
const authentication_service_1 = require("../authentication/authentication.service");
let ProfileController = class ProfileController {
    constructor(profileService, authenticationService) {
        this.profileService = profileService;
        this.authenticationService = authenticationService;
    }
    async getAllUsers(req) {
        await this.authenticationService.checkUserModerate({ id: req.profile.sub });
        return this.profileService.getUsersList();
    }
    async findUserById(id, req) {
        return this.profileService.getUser(id);
    }
};
exports.ProfileController = ProfileController;
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('/all-users'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "getAllUsers", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "findUserById", null);
exports.ProfileController = ProfileController = __decorate([
    (0, swagger_1.ApiTags)('Profile'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('profile'),
    __metadata("design:paramtypes", [profile_service_1.ProfileService,
        authentication_service_1.AuthenticationService])
], ProfileController);
//# sourceMappingURL=profile.controller.js.map