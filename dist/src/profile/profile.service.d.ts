import { Users } from '../typeorm';
import { Repository } from 'typeorm';
export declare class ProfileService {
    private readonly userRepository;
    constructor(userRepository: Repository<Users>);
    getUser(id: string): Promise<"Profile didnt exist" | {
        name: string;
        email: string;
        grade: string;
        jobTitle: import("../../types/enum").JobTitleEnum;
    }>;
    getUsersList(): Promise<Users[]>;
}
