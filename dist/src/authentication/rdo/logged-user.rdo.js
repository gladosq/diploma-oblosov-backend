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
exports.LoggedUserRdo = void 0;
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
class LoggedUserRdo {
}
exports.LoggedUserRdo = LoggedUserRdo;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The uniq user ID',
        example: '13'
    }),
    (0, class_transformer_1.Expose)({ name: '_id' }),
    (0, class_transformer_1.Transform)(({ obj }) => obj._id.toString()),
    __metadata("design:type", String)
], LoggedUserRdo.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'User email',
        example: 'user@user.local'
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], LoggedUserRdo.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Access token',
        example: 'n89v124vny192vve2cduascyS'
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], LoggedUserRdo.prototype, "accessToken", void 0);
//# sourceMappingURL=logged-user.rdo.js.map