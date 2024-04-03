import { EducationModule, Results } from '../typeorm';
import { Repository } from 'typeorm';
import { CreateResultDto } from './dto/create-result.dto';
export declare class ResultService {
    private readonly resultsRepository;
    private readonly educationModuleRepository;
    constructor(resultsRepository: Repository<Results>, educationModuleRepository: Repository<EducationModule>);
    getResultsList(id: string): Promise<Results[]>;
    getResultItem(id: string): Promise<Results[]>;
    createResult(createResultDto: CreateResultDto, userId: string): Promise<{
        id: string;
    }>;
}
