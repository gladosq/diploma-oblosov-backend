import {Module} from '@nestjs/common';
import {CarsService} from './cars.service';
import {CarsController} from './cars.controller';
import {EducationModule, Users} from '../typeorm';
import {TypeOrmModule} from '@nestjs/typeorm';
import {AuthenticationService} from '../authentication/authentication.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([EducationModule]),
    TypeOrmModule.forFeature([Users])
  ],
  providers: [CarsService, AuthenticationService],
  controllers: [CarsController]
})
export class CarsModule {}
