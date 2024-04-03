import { CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Reflector } from '@nestjs/core';
export declare class AuthGuard implements CanActivate {
    private jwtService;
    private readonly _reflector;
    constructor(jwtService: JwtService, _reflector: Reflector);
    canActivate(context: ExecutionContext): Promise<boolean>;
    private extractTokenFromHeader;
}
