import { DifficultyModuleEnum } from '../../../types/enum';
export declare class UpdateCarsDto {
    article: [];
}
export declare class UpdateCarsModerateDto {
    title: string;
    theme: string;
    description: string;
    difficulty?: DifficultyModuleEnum;
    testing: [];
    article: [];
}
