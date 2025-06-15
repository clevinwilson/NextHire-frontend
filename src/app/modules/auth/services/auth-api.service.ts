import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment'; // Adjust path based on your structure
import { AuthApiResponse, EmailCheckResponse } from '../../../core/models/user.model'; // Assuming @app/core alias
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
    registerUser(userData: { email: string; password: string; confirmPassword: string }): Observable<AuthApiResponse> {
        return this.httpClient.post<AuthApiResponse>(`${this.authApiUrl}/${API_ENDPOINTS.AUTH.SIGNUP}`, userData);
    }

    /**
     * Sends a user login request to the backend.
     * @param credentials Object containing email and password for login.
     * @returns An Observable of ApiResponse containing AuthResponse (token and user info).
     */
    loginUser(credentials: { email: string; password: string }): Observable<AuthApiResponse> {
        return this.httpClient.post<AuthApiResponse>(`${this.authApiUrl}/${API_ENDPOINTS.AUTH.LOGIN}`, credentials);
    }

    /**
     * Checks if an email already exists in the system.
     * @param email {string} The email to check for existence.
     * @returns  Observable<EmailCheckResponse>
     */
    checkEmail(email: string): Observable<EmailCheckResponse> {
        return this.httpClient.get<EmailCheckResponse>(`${this.authApiUrl}/${API_ENDPOINTS.CHECK_EMAIL}`, { params: { email } });
    }
}
