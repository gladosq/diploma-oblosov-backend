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
exports.EducationModule = void 0;
const typeorm_1 = require("typeorm");
const enum_1 = require("../../types/enum");
let EducationModule = class EducationModule {
};
exports.EducationModule = EducationModule;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], EducationModule.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        default: '',
    }),
    __metadata("design:type", String)
], EducationModule.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        default: '',
    }),
    __metadata("design:type", String)
], EducationModule.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        default: '',
    }),
    __metadata("design:type", String)
], EducationModule.prototype, "theme", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        default: false,
    }),
    __metadata("design:type", Boolean)
], EducationModule.prototype, "isPublished", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        default: enum_1.DifficultyModuleEnum.Medium,
    }),
    __metadata("design:type", String)
], EducationModule.prototype, "difficulty", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'jsonb',
        nullable: true,
        default: [],
    }),
    __metadata("design:type", Array)
], EducationModule.prototype, "article", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'jsonb',
        nullable: true,
        default: [],
    }),
    __metadata("design:type", Array)
], EducationModule.prototype, "testing", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)',
    }),
    __metadata("design:type", Date)
], EducationModule.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'timestamp',
    }),
    __metadata("design:type", Date)
], EducationModule.prototype, "createdAt", void 0);
exports.EducationModule = EducationModule = __decorate([
    (0, typeorm_1.Entity)()
], EducationModule);
//# sourceMappingURL=education-module.entity.js.map