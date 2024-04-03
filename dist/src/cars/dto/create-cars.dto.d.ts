import { DifficultyModuleEnum } from '../../../types/enum';
export declare class CreateCarsDto {
    title: string;
    theme: string;
    description: string;
    difficulty?: DifficultyModuleEnum;
}
