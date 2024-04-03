import { AuthenticationService } from './authentication.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
export declare class AuthenticationController {
    private readonly authenticationService;
    constructor(authenticationService: AuthenticationService);
    create(createUserDto: CreateUserDto, req: any): Promise<{
        name: string;
    }>;
    getProfile(req: any): Promise<Omit<import("../typeorm").Users, "createdAt" | "password">>;
    loginUser(loginUserDto: LoginUserDto): Promise<any>;
}
