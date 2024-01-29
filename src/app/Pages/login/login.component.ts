import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { BehaviorSubject } from 'rxjs';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: 'login.component.html',
  styleUrl: './login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class LoginComponent {
  constructor(private router: Router, private authService: AuthService, private userService: UserService) {}
  // input email
  email: string | undefined;
  // input password
  password: string | undefined;

  // liste info user
  private users$: BehaviorSubject<Array<{id:number,email:string, password:string}>> = this.userService.getUsers();

  // variable pour erreur de connexion
  isErreurLogin = false;

  // methode pour ce connecter
  public login() {
    // on parcours la lsite d'utilisateur
    this.users$.value.forEach((element) => {
      // si les informations correspondent
      if (element.email == this.email && element.password == this.password) {

        // on desactive le messa d'erreur
        this.isErreurLogin = false;

        // on met a jour le status de connection
        this.authService.updateLoginStatus(true)
        this.authService.updateUserEmail(this.email)
        // on redirige
        this.router.navigate(['/home']);
      } 
      // si les informations sont inccorect
      else {
        // on affiche le message d'erreur
        this.isErreurLogin = true;
      }
    });
  }
}
