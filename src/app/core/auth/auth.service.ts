import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Makes this a singleton service available throughout the app
})
export class AuthService {
  private readonly TOKEN_KEY = 'jwt_token'; // Key for localStorage
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.hasToken());
  public isAuthenticated$: Observable<boolean> = this.isAuthenticatedSubject.asObservable();

  constructor() { }

  /**
   * Checks if a JWT token exists in localStorage.
   * @returns boolean
   */
  private hasToken(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  /**
   * Stores the JWT token in localStorage and updates authentication status.
   * @param token The JWT token to store.
   */
  setToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
    this.isAuthenticatedSubject.next(true); // Notify observers that user is authenticated
  }

  /**
   * Retrieves the JWT token from localStorage.
   * @returns The JWT token string or null if not found.
   */
  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  /**
   * Removes the JWT token from localStorage and updates authentication status.
   */
  removeToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    this.isAuthenticatedSubject.next(false); // Notify observers that user is no longer authenticated
  }

  /**
   * Logs out the user by removing the token and potentially redirecting.
   * (You might integrate Router here or let calling component handle redirection)
   */
  logout(): void {
    this.removeToken();
    // Potentially navigate to login page here or in the calling component
  }

  // You can add more methods here, e.g., to decode token, check expiry, refresh token
}