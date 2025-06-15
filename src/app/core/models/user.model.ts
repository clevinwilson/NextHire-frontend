export interface User {
    id?: string;
    email: string;
    firstName?: string;
    lastName?: string;
}

export interface AuthApiResponse {
    token: string;
    user: User;
    message: string;
}

// Email check response structure
export interface EmailCheckResponse {
    exists: boolean;
    message?: string;
}
