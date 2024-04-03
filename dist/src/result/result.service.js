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
exports.ResultService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("../typeorm");
const typeorm_3 = require("typeorm");
let ResultService = class ResultService {
    constructor(resultsRepository, educationModuleRepository) {
        this.resultsRepository = resultsRepository;
        this.educationModuleRepository = educationModuleRepository;
    }
    async getResultsList(id) {
        return await this.resultsRepository.createQueryBuilder('results')
            .leftJoinAndSelect('results.module', 'module')
            .leftJoinAndSelect('results.user', 'user')
            .where('user.id =:id', { id: id })
            .addSelect('user.password', 'password')
            .addSelect('module.isPublished', 'isPublished')
            .getMany();
    }
    async getResultItem(id) {
        return await this.resultsRepository.createQueryBuilder('result')
            .where('result.id =:id', { id: id })
            .leftJoinAndSelect('result.module', 'module')
            .leftJoinAndSelect('result.user', 'user')
            .addSelect('user.password', 'password')
            .getMany();
    }
    async createResult(createResultDto, userId) {
        const existingModule = await this.educationModuleRepository.findOneBy({ id: createResultDto.moduleId });
        if (!existingModule) {
            throw new common_1.NotFoundException('Модуль не существует или был удален');
        }
        const correctResults = createResultDto.result.reduce((acc, current, index) => {
            const testing = existingModule.testing[index];
            const result = { userAnswer: current, correctAnswer: Number(testing.correctAnswer) };
            acc.push(result);
            return acc;
        }, []);
        const result = new typeorm_2.Results();
        result.user = userId;
        result.module = createResultDto.moduleId;
        result.result = correctResults;
        const createdResult = await this.resultsRepository.save(result);
        if (!createdResult)
            throw new common_1.NotFoundException('Результат не найден');
        return { id: createdResult.id };
    }
};
exports.ResultService = ResultService;
exports.ResultService = ResultService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(typeorm_2.Results)),
    __param(1, (0, typeorm_1.InjectRepository)(typeorm_2.EducationModule)),
    __metadata("design:paramtypes", [typeorm_3.Repository,
        typeorm_3.Repository])
], ResultService);
//# sourceMappingURL=result.service.js.map