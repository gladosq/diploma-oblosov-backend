import {
  Body,
  Controller, Delete,
  Get, Param,
  Post, Put,
  Request,
  UseGuards,
  UsePipes,
  ValidationPipe
} from "@nestjs/common";
import { AuthGuard } from "../../libs/auth.guard";
import { AuthenticationService } from "../authentication/authentication.service";
import { CarsService } from "./cars.service";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { CreateCarsDto } from "./dto/create-cars.dto";
import { UpdateCarsModerateDto } from "./dto/update-cars.dto";

@ApiTags("Cars")
@ApiBearerAuth()
@Controller("cars")
export class CarsController {
  constructor(
    private readonly educationModuleService: CarsService,
    private readonly authenticationService: AuthenticationService
  ) {
  }

  @UseGuards(AuthGuard)
  @Get()
  async getModulesList(@Request() req) {
    await this.authenticationService.findUserById({ id: req.profile.sub });
    return this.educationModuleService.getModulesList();
  }

  @UseGuards(AuthGuard)
  @Get(":id")
  async findModuleById(@Param("id") id: string) {
    return this.educationModuleService.findModuleById(id);
  }

  @UseGuards(AuthGuard)
  @Delete("/:id/delete")
  async deleteModuleById(@Param("id") id: string) {
    return this.educationModuleService.deleteModuleById(id);
  }

  @UseGuards(AuthGuard)
  @Put("/:id/update")
  @UsePipes(ValidationPipe)
  async updateModuleById(@Param("id") id: string, @Request() req, @Body() updateModuleTestingDto: UpdateCarsModerateDto) {
    await this.authenticationService.checkUserModerate({ id: req.profile.sub });
    return this.educationModuleService.updateModule(updateModuleTestingDto, id);
  }

  @UseGuards(AuthGuard)
  @Post("create")
  @UsePipes(ValidationPipe)
  async createModule(@Body() createModuleDto: CreateCarsDto, @Request() req) {
    await this.authenticationService.checkUserModerate({ id: req.profile.sub });
    const module = { ...createModuleDto };
    return this.educationModuleService.createModule(module);
  }
}