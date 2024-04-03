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
exports.CarsController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../../libs/auth.guard");
const authentication_service_1 = require("../authentication/authentication.service");
const cars_service_1 = require("./cars.service");
const swagger_1 = require("@nestjs/swagger");
const create_cars_dto_1 = require("./dto/create-cars.dto");
const update_cars_dto_1 = require("./dto/update-cars.dto");
let CarsController = class CarsController {
    constructor(educationModuleService, authenticationService) {
        this.educationModuleService = educationModuleService;
        this.authenticationService = authenticationService;
    }
    async getModulesList(req) {
        await this.authenticationService.findUserById({ id: req.profile.sub });
        return this.educationModuleService.getModulesList();
    }
    async findModuleById(id) {
        return this.educationModuleService.findModuleById(id);
    }
    async deleteModuleById(id) {
        return this.educationModuleService.deleteModuleById(id);
    }
    async updateModuleById(id, req, updateModuleTestingDto) {
        await this.authenticationService.checkUserModerate({ id: req.profile.sub });
        return this.educationModuleService.updateModule(updateModuleTestingDto, id);
    }
    async createModule(createModuleDto, req) {
        await this.authenticationService.checkUserModerate({ id: req.profile.sub });
        const module = { ...createModuleDto };
        return this.educationModuleService.createModule(module);
    }
};
exports.CarsController = CarsController;
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CarsController.prototype, "getModulesList", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CarsController.prototype, "findModuleById", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Delete)("/:id/delete"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CarsController.prototype, "deleteModuleById", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Put)("/:id/update"),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Request)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, update_cars_dto_1.UpdateCarsModerateDto]),
    __metadata("design:returntype", Promise)
], CarsController.prototype, "updateModuleById", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)("create"),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cars_dto_1.CreateCarsDto, Object]),
    __metadata("design:returntype", Promise)
], CarsController.prototype, "createModule", null);
exports.CarsController = CarsController = __decorate([
    (0, swagger_1.ApiTags)("Cars"),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)("cars"),
    __metadata("design:paramtypes", [cars_service_1.CarsService,
        authentication_service_1.AuthenticationService])
], CarsController);
//# sourceMappingURL=cars.controller.js.map