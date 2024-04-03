import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {EducationModule} from '../typeorm';
import {CreateCarsDto} from './dto/create-cars.dto';
import { UpdateCarsModerateDto } from "./dto/update-cars.dto";

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(EducationModule)
    private readonly educationModuleRepository: Repository<EducationModule>,
  ) {}

  getModulesList() {
    return this.educationModuleRepository.find();
  }

  async findModuleById(id: string) {
    const existingModule = await this.educationModuleRepository.findOneBy({id: id});
    if (!existingModule) {
      throw new NotFoundException('Модуль не существует или удален');
    }

    return this.educationModuleRepository.findOneBy({id: id});
  }

  async deleteModuleById(id: string) {
    const currentDeletedModule = await this.findModuleById(id);
    await this.educationModuleRepository
      .createQueryBuilder('modules')
      .delete()
      .from(EducationModule)
      .where('id = :id', {id: id})
      .execute();

    return {message: `Модуль ${currentDeletedModule.title} удален`}
  }
  
  updateModule(updateModuleTestingDto: UpdateCarsModerateDto, id: string) {
    const currentModule = this.educationModuleRepository.findOneBy({
      id: id
    });
    
    if (!currentModule) {
      throw new NotFoundException('Модуль не существует или удален');
    }

    const updatedModule = {
      ...currentModule,
      ...updateModuleTestingDto
    };

    this.educationModuleRepository
      .createQueryBuilder()
      .update(EducationModule)
      .set(updatedModule)
      .where('id = :id', {id: id})
      .execute();

    return {title: updateModuleTestingDto.title};
  }

  createModule(createModuleDto: CreateCarsDto) {
    const newModule = this.educationModuleRepository.create(createModuleDto);
    this.educationModuleRepository.save(newModule);
    return {title: newModule.title};
  }
}
