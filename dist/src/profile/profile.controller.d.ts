import { ProfileService } from './profile.service';
import { AuthenticationService } from "../authentication/authentication.service";
export declare class ProfileController {
    private readonly profileService;
    private readonly authenticationService;
    constructor(profileService: ProfileService, authenticationService: AuthenticationService);
    getAllUsers(req: any): Promise<import("../typeorm").Users[]>;
    findUserById(id: string, req: any): Promise<"Profile didnt exist" | {
        name: string;
        email: string;
        grade: string;
        jobTitle: import("../../types/enum").JobTitleEnum;
    }>;
}
