import { ConfigService } from '@nestjs/config';
import { JwtModuleOptions } from '@nestjs/jwt';
export declare function getJwtOptions(configService: ConfigService): Promise<JwtModuleOptions>;
