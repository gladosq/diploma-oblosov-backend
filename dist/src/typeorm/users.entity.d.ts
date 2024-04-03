import { JobTitleEnum, UserRoleEnum } from "../../types/enum";
export declare class Users {
    id: string;
    name: string;
    role: UserRoleEnum;
    email: string;
    password: string;
    jobTitle: JobTitleEnum;
    grade: string;
    createdAt: Date;
}
