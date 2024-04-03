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
exports.Users = void 0;
const typeorm_1 = require("typeorm");
const enum_1 = require("../../types/enum");
let Users = class Users {
};
exports.Users = Users;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Users.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        default: '',
    }),
    __metadata("design:type", String)
], Users.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        type: 'enum',
        enum: enum_1.UserRoleEnum,
        default: enum_1.UserRoleEnum.Developer,
    }),
    __metadata("design:type", String)
], Users.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        default: '',
    }),
    __metadata("design:type", String)
], Users.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        default: '',
    }),
    __metadata("design:type", String)
], Users.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
        type: 'enum',
        enum: enum_1.JobTitleEnum,
        default: null,
    }),
    __metadata("design:type", String)
], Users.prototype, "jobTitle", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        default: '',
    }),
    __metadata("design:type", String)
], Users.prototype, "grade", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'timestamp',
    }),
    __metadata("design:type", Date)
], Users.prototype, "createdAt", void 0);
exports.Users = Users = __decorate([
    (0, typeorm_1.Entity)()
], Users);
//# sourceMappingURL=users.entity.js.map