"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const Joi = require("joi");
exports.default = (0, config_1.registerAs)('jwt', () => {
    const config = {
        accessTokenSecret: process.env.JWT_AT_SECRET,
        accessTokenExpiresIn: process.env.JWT_AT_EXPIRES_IN
    };
    const validationSchema = Joi.object({
        accessTokenSecret: Joi.string().required(),
        accessTokenExpiresIn: Joi.string().required()
    });
    const { error } = validationSchema.validate(config, { abortEarly: true });
    if (error) {
        throw new Error(`[JWT Config]: Environments validation failed. Please check .env file.
      Error message: ${error.message}`);
    }
    return config;
});
//# sourceMappingURL=jwt.config.js.map