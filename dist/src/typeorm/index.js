"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Results = exports.EducationModule = exports.Users = void 0;
const users_entity_1 = require("./users.entity");
Object.defineProperty(exports, "Users", { enumerable: true, get: function () { return users_entity_1.Users; } });
const education_module_entity_1 = require("./education-module.entity");
Object.defineProperty(exports, "EducationModule", { enumerable: true, get: function () { return education_module_entity_1.EducationModule; } });
const results_entity_1 = require("./results.entity");
Object.defineProperty(exports, "Results", { enumerable: true, get: function () { return results_entity_1.Results; } });
const entities = [users_entity_1.Users, education_module_entity_1.EducationModule, results_entity_1.Results];
exports.default = entities;
//# sourceMappingURL=index.js.map