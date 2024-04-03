import { DifficultyModuleEnum } from '../../types/enum';
export declare class EducationModule {
    id: string;
    title: string;
    description: string;
    theme: string;
    isPublished: boolean;
    difficulty: DifficultyModuleEnum;
    article: [];
    testing: [];
    updatedAt: Date;
    createdAt: Date;
}
