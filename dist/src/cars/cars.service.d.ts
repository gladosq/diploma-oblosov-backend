import { Repository } from 'typeorm';
import { EducationModule } from '../typeorm';
import { CreateCarsDto } from './dto/create-cars.dto';
import { UpdateCarsModerateDto } from "./dto/update-cars.dto";
export declare class CarsService {
    private readonly educationModuleRepository;
    constructor(educationModuleRepository: Repository<EducationModule>);
    getModulesList(): Promise<EducationModule[]>;
    findModuleById(id: string): Promise<EducationModule>;
    deleteModuleById(id: string): Promise<{
        message: string;
    }>;
    updateModule(updateModuleTestingDto: UpdateCarsModerateDto, id: string): {
        title: string;
    };
    createModule(createModuleDto: CreateCarsDto): {
        title: string;
    };
}
