import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { Users } from '../typeorm';
import { LoginUserDto } from './dto/login-user.dto';
import { User } from '../../types/user';
import { JwtService } from '@nestjs/jwt';
export declare class AuthenticationService {
    private readonly userRepository;
    private readonly jwtService;
    constructor(userRepository: Repository<Users>, jwtService: JwtService);
    passwordHash: string;
    createNewUser(createUserDto: CreateUserDto): Promise<{
        name: string;
    }>;
    verifyUser(loginUserDto: LoginUserDto): Promise<any>;
    setPassword(password: string): Promise<any>;
    comparePassword(password: string): Promise<boolean>;
    createUserToken(user: User): Promise<{
        accessToken: string;
    }>;
    findUserById({ id, }: {
        id: string;
    }): Promise<Omit<Users, 'createdAt' | 'password'>>;
    checkUserModerate({ id }: {
        id: string;
    }): Promise<Users>;
}
