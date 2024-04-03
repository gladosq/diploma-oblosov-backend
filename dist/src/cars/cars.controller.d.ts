import { AuthenticationService } from "../authentication/authentication.service";
import { CarsService } from "./cars.service";
import { CreateCarsDto } from "./dto/create-cars.dto";
import { UpdateCarsModerateDto } from "./dto/update-cars.dto";
export declare class CarsController {
    private readonly educationModuleService;
    private readonly authenticationService;
    constructor(educationModuleService: CarsService, authenticationService: AuthenticationService);
    getModulesList(req: any): Promise<import("../typeorm").EducationModule[]>;
    findModuleById(id: string): Promise<import("../typeorm").EducationModule>;
    deleteModuleById(id: string): Promise<{
        message: string;
    }>;
    updateModuleById(id: string, req: any, updateModuleTestingDto: UpdateCarsModerateDto): Promise<{
        title: string;
    }>;
    createModule(createModuleDto: CreateCarsDto, req: any): Promise<{
        title: string;
    }>;
}
