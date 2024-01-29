import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
  ],
  templateUrl: './home.component.html',
  styleUrl: './Home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  constructor(private userService: UserService, private router: Router){}

  users$: BehaviorSubject<Array<{id:number,email:string, password:string}>> = this.userService.getUsers();

  delete(){
    const checkBox: NodeListOf<HTMLInputElement> = document.querySelectorAll(".checkbox")
    checkBox.forEach((element: HTMLInputElement) => {
      if(element.checked) {
        const userId = element.getAttribute('data-userId')
        if(userId) {
          this.users$.value.forEach((element, index) => {
            if(element.id == parseInt(userId)) {
              this.users$.value.splice(index,1)
              console.log(this.userService.getUsers().value)
            }
          });
        }
      }
    });
  }
  update(){

  }
}
