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
exports.AuthenticationService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const typeorm_3 = require("../typeorm");
const bcryptjs_1 = require("bcryptjs");
const jwt_1 = require("@nestjs/jwt");
const const_1 = require("../../const/const");
let AuthenticationService = class AuthenticationService {
    constructor(userRepository, jwtService) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
    }
    async createNewUser(createUserDto) {
        const { name, email, role, jobTitle, password } = createUserDto;
        const existUser = await this.userRepository.find({
            where: { email: email },
        });
        if (existUser.length) {
            throw new common_1.ConflictException('Пользователь с такой почтой уже существует');
        }
        const hashPassword = await this.setPassword(password);
        const userData = { name, email, role, jobTitle, password: hashPassword };
        const newUser = this.userRepository.create(userData);
        await this.userRepository.save(newUser);
        return { name: newUser.name };
    }
    async verifyUser(loginUserDto) {
        const { email, password } = loginUserDto;
        const existUser = await this.userRepository.find({
            where: { email: email },
        });
        if (!existUser.length) {
            throw new common_1.NotFoundException(`Пользователя с почтой ${email} не существует.`);
        }
        this.passwordHash = existUser[0].password;
        if (!(await this.comparePassword(password))) {
            throw new common_1.UnauthorizedException('Неверный пароль');
        }
        return { ...existUser[0] };
    }
    async setPassword(password) {
        const salt = await (0, bcryptjs_1.genSalt)(const_1.SALT_ROUNDS);
        return (this.passwordHash = await (0, bcryptjs_1.hash)(password, salt));
    }
    async comparePassword(password) {
        return (0, bcryptjs_1.compare)(password, this.passwordHash);
    }
    async createUserToken(user) {
        const payload = {
            sub: user.id,
            email: user.email,
            name: user.name,
        };
        return {
            accessToken: await this.jwtService.signAsync(payload),
        };
    }
    async findUserById({ id, }) {
        const currentUser = await this.userRepository.findOneBy({ id: id });
        const { password, createdAt, ...userResponse } = currentUser;
        if (!currentUser) {
            throw new common_1.HttpException('Пользователь не найден', common_1.HttpStatus.NOT_FOUND);
        }
        return userResponse;
    }
    async checkUserModerate({ id }) {
        const currentUser = await this.userRepository.findOneBy({ id: id });
        if (currentUser.role !== 'moderator') {
            throw new common_1.HttpException('Не доступно', common_1.HttpStatus.METHOD_NOT_ALLOWED);
        }
        return currentUser;
    }
};
exports.AuthenticationService = AuthenticationService;
exports.AuthenticationService = AuthenticationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(typeorm_3.Users)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        jwt_1.JwtService])
], AuthenticationService);
//# sourceMappingURL=authentication.service.js.map