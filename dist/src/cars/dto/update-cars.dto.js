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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCarsModerateDto = exports.UpdateCarsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const enum_1 = require("../../../types/enum");
class UpdateCarsDto {
}
exports.UpdateCarsDto = UpdateCarsDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', required: false }),
    __metadata("design:type", Array)
], UpdateCarsDto.prototype, "article", void 0);
class UpdateCarsModerateDto {
}
exports.UpdateCarsModerateDto = UpdateCarsModerateDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', format: 'string', required: true }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(4),
    __metadata("design:type", String)
], UpdateCarsModerateDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', format: 'string', required: true }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateCarsModerateDto.prototype, "theme", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', format: 'string', required: false }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateCarsModerateDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: enum_1.DifficultyModuleEnum, format: 'enum', required: true }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateCarsModerateDto.prototype, "difficulty", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', required: false }),
    __metadata("design:type", Array)
], UpdateCarsModerateDto.prototype, "testing", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string', required: false }),
    __metadata("design:type", Array)
], UpdateCarsModerateDto.prototype, "article", void 0);
//# sourceMappingURL=update-cars.dto.js.map