import { Users } from './users.entity';
import { EducationModule } from "./education-module.entity";
import { Results } from './results.entity';
declare const entities: (typeof EducationModule | typeof Results | typeof Users)[];
export { Users, EducationModule, Results };
export default entities;
