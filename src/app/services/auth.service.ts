import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLoggedIn = new BehaviorSubject<boolean>(false);
  public userEmail = new BehaviorSubject<string>('');
  // Méthode pour mettre à jour l'état de connexion
  updateLoginStatus(status: boolean): void {
    this.isLoggedIn.next(status);
  }

  // Méthode pour récupérer l'état de connexion
  getLoginStatus(): BehaviorSubject<boolean> {
    return this.isLoggedIn;
  }

  // Permet de définir l'email de l'utilisateur
  updateUserEmail(email:string): void {
    this.userEmail.next(email);
  }
  // Permet de recuperer l'email de l'utilisateur
  getUserEmail(): BehaviorSubject<string> {
    return this.userEmail;
  }
}
