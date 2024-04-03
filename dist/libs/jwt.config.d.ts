export interface JWTConfig {
    accessTokenSecret: string;
    accessTokenExpiresIn: string;
}
declare const _default: (() => JWTConfig) & import("@nestjs/config").ConfigFactoryKeyHost<JWTConfig>;
export default _default;
