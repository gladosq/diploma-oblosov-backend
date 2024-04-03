import { JobTitleEnum, UserRoleEnum } from '../../../types/enum';
export declare class CreateUserDto {
    email: string;
    name: string;
    password: string;
    jobTitle: JobTitleEnum;
    role: UserRoleEnum;
}
