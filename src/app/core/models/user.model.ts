export interface User {
  id?: string;
  email: string;
  // Add other user properties you expect from the backend, e.g., name, role
  firstName?: string;
  lastName?: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

// Generic API response structure used across your application
export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string; // For API-specific error messages
}