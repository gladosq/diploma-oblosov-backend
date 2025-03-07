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
exports.ResultController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../../libs/auth.guard");
const result_service_1 = require("./result.service");
const create_result_dto_1 = require("./dto/create-result.dto");
const swagger_1 = require("@nestjs/swagger");
let ResultController = class ResultController {
    constructor(resultService) {
        this.resultService = resultService;
    }
    async getResulItem(id) {
        return this.resultService.getResultItem(id);
    }
    async getResultList(id) {
        return this.resultService.getResultsList(id);
    }
    async createResult(createResultDto, req) {
        return this.resultService.createResult(createResultDto, req.profile.sub);
    }
};
exports.ResultController = ResultController;
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)(':id'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ResultController.prototype, "getResulItem", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('user/:id'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ResultController.prototype, "getResultList", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)('create'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_result_dto_1.CreateResultDto, Object]),
    __metadata("design:returntype", Promise)
], ResultController.prototype, "createResult", null);
exports.ResultController = ResultController = __decorate([
    (0, swagger_1.ApiTags)('Results'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('result'),
    __metadata("design:paramtypes", [result_service_1.ResultService])
], ResultController);
//# sourceMappingURL=result.controller.js.map