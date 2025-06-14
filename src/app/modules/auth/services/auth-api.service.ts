import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment'; // Adjust path based on your structure
import { ApiResponse, AuthResponse } from '../../../core/models/user.model'; // Assuming @app/core alias
import { API_ENDPOINTS, API_SEGMENTS } from '../../../core/api.constants';

@Injectable({ providedIn: 'root' })
export class AuthApiService {
    private authApiUrl = `${environment.apiBaseUrl}/${API_SEGMENTS.AUTH}`;
    private httpClient = inject(HttpClient);
    /**
     * Sends a user registration request to the backend.
     * @param userData Object containing email and password for registration.
     * @returns An Observable of ApiResponse containing AuthResponse (token and user info).
     */
    registerUser(userData: { email: string; password: string; confirmPassword: string }): Observable<ApiResponse<AuthResponse>> {
        return this.httpClient.post<ApiResponse<AuthResponse>>(`${this.authApiUrl}/${API_ENDPOINTS.AUTH.SIGNUP}`, userData);
    }

    /**
     * Sends a user login request to the backend.
     * @param credentials Object containing email and password for login.
     * @returns An Observable of ApiResponse containing AuthResponse (token and user info).
     */
    loginUser(credentials: { email: string; password: string }): Observable<ApiResponse<AuthResponse>> {
        return this.httpClient.post<ApiResponse<AuthResponse>>(`${this.authApiUrl}/login`, credentials);
    }
}
