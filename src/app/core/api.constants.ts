/**
 * Defines API endpoint paths as constants.
 * These are relative paths, to be prefixed with the base API URL from environment.
 */
export const API_SEGMENTS = {
    AUTH: 'auth',
    PRODUCTS: 'products',
    USERS: 'users'
};

export const API_ENDPOINTS = {
    AUTH: {
        SIGNUP: 'register',
        LOGIN: 'login'
    },
    PRODUCTS: {
        GET_ALL: 'products',
        GET_BY_ID: 'products/',
        CREATE: 'products',
        UPDATE: 'products/',
        DELETE: 'products/'
    },

    USERS: {
        GET_PROFILE: 'users/profile',
        UPDATE_PROFILE: 'users/profile'
    },
    CHECK_EMAIL: 'check-email'
};
