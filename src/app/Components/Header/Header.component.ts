import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule, RouterLink, RouterLinkActive
  ],
  templateUrl: './Header.component.html',
  styleUrl: './Header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent { 
  constructor(
    private router: Router,
    private authService: AuthService,
  ) {}
  // recupere lobservable qui nous dis si l'utilisateur est connecté
  isLoginIn$ : BehaviorSubject<boolean> = this.authService.getLoginStatus();
  // recupere lobservable qui nous donne l'email utilisateur
  userEmail$ : BehaviorSubject<string> = this.authService.getUserEmail();
  // redirect sur login
  login() {
    this.router.navigate(['/'])
  }
  // deconnecte et redirect sur login
  logout() {
    this.authService.updateLoginStatus(false);
    this.authService.updateUserEmail('');
    this.router.navigate(['/'])
  }
  Catalogue() {
    this.router.navigate(['/catalogue']);
  }
  Documents() {
    this.router.navigate(['/documents']);
  };
  Admin(){
    this.router.navigate(['/Admin']);
  }
}
