export const IS_PRODUCTION = typeof process !== 'undefined' && process.env.NODE_ENV === 'production';
export const IS_DEVELOPMENT = !IS_PRODUCTION;
