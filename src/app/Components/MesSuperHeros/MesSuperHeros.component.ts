import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-mes-utilisateurs',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './MesSuperHeros.component.html',
  styleUrl: './MesSuperHeros.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MesUtilisateursComponent {
  // Compteur
  indexActuel:number = 0;

  // Contient tous les super heros
  SuperUser: Array<{"superhero":string, "publisher":string, "alter_ego":string,
                    "first_appearance":string, "characters":string}> = [
    {
        "superhero":"Batman", 
        "publisher":"DC Comics", 
        "alter_ego":"Bruce Wayne",
        "first_appearance":"Detective Comics #27",
        "characters":"Bruce Wayne"
    },
    {
        "superhero":"Superman", 
        "publisher":"DC Comics", 
        "alter_ego":"Kal-El",
        "first_appearance":"Action Comics #1",
        "characters":"Kal-El"
    },
    {
        "superhero":"Flash", 
        "publisher":"DC Comics", 
        "alter_ego":"Jay Garrick",
        "first_appearance":"Flash Comics #1",
        "characters":"Jay Garrick, Barry Allen, Wally West, Bart Allen"
    },
    {
        "superhero":"Green Lantern", 
        "publisher":"DC Comics", 
        "alter_ego":"Alan Scott",
        "first_appearance":"All-American Comics #16",
        "characters":"Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz"
    },
    {
        "superhero":"Green Arrow", 
        "publisher":"DC Comics", 
        "alter_ego":"Oliver Queen",
        "first_appearance":"More Fun Comics #73",
        "characters":"Oliver Queen"
    },
    {
        "superhero":"Wonder Woman", 
        "publisher":"DC Comics", 
        "alter_ego":"Princess Diana",
        "first_appearance":"All Star Comics #8",
        "characters":"Princess Diana"
    },
    {
        "superhero":"Martian Manhunter", 
        "publisher":"DC Comics", 
        "alter_ego":"J'onn J'onzz",
        "first_appearance":"Detective Comics #225",
        "characters":"Martian Manhunter"
    },
    {
        "superhero":"Robin/Nightwing", 
        "publisher":"DC Comics", 
        "alter_ego":"Dick Grayson",
        "first_appearance":"Detective Comics #38",
        "characters":"Dick Grayson"
    },
    {
        "superhero":"Blue Beetle", 
        "publisher":"DC Comics", 
        "alter_ego":"Dan Garret",
        "first_appearance":"Mystery Men Comics #1",
        "characters":"Dan Garret, Ted Kord, Jaime Reyes"
    },
    {
        "superhero":"Black Canary", 
        "publisher":"DC Comics", 
        "alter_ego":"Dinah Drake",
        "first_appearance":"Flash Comics #86",
        "characters":"Dinah Drake, Dinah Lance"
    },
    {
        "superhero":"Spider Man", 
        "publisher":"Marvel Comics", 
        "alter_ego":"Peter Parker",
        "first_appearance":"Amazing Fantasy #15",
        "characters":"Peter Parker"
    },
    {
        "superhero":"Captain America", 
        "publisher":"Marvel Comics", 
        "alter_ego":"Steve Rogers",
        "first_appearance":"Captain America Comics #1",
        "characters":"Steve Rogers"
    },
    {
        "superhero":"Iron Man", 
        "publisher":"Marvel Comics", 
        "alter_ego":"Tony Stark",
        "first_appearance":"Tales of Suspense #39",
        "characters":"Tony Stark"
    },
    {
        "superhero":"Thor", 
        "publisher":"Marvel Comics", 
        "alter_ego":"Thor Odinson",
        "first_appearance":"Journey into Myster #83",
        "characters":"Thor Odinson"
    },
    {
        "superhero":"Hulk", 
        "publisher":"Marvel Comics", 
        "alter_ego":"Bruce Banner",
        "first_appearance":"The Incredible Hulk #1",
        "characters":"Bruce Banner"
    },
    {
        "superhero":"Wolverine", 
        "publisher":"Marvel Comics", 
        "alter_ego":"James Howlett",
        "first_appearance":"The Incredible Hulk #180",
        "characters":"James Howlett"
    },
    {
        "superhero":"Daredevil", 
        "publisher":"Marvel Comics", 
        "alter_ego":"Matthew Michael Murdock",
        "first_appearance":"Daredevil #1",
        "characters":"Matthew Michael Murdock"
    },
    {
        "superhero":"Hawkeye", 
        "publisher":"Marvel Comics", 
        "alter_ego":"Clinton Francis Barton",
        "first_appearance":"Tales of Suspense #57",
        "characters":"Clinton Francis Barton"
    },
    {
        "superhero":"Cyclops", 
        "publisher":"Marvel Comics", 
        "alter_ego":"Scott Summers",
        "first_appearance":"X-Men #1",
        "characters":"Scott Summers"
    },
    {
        "superhero":"Silver Surfer", 
        "publisher":"Marvel Comics", 
        "alter_ego":"Norrin Radd",
        "first_appearance":"The Fantastic Four #48",
        "characters":"Norrin Radd"
    }
]

  // Contient mes super hero
  MySuperHero= new BehaviorSubject<Array<{"superhero":string, "publisher":string, "alter_ego":string,
  "first_appearance":string, "characters":string}>>([]);

  // Contien un super hero
  TheSuperHeo: {"superhero":string, "publisher":string, "alter_ego":string,
  "first_appearance":string, "characters":string} | undefined

  ngOnInit() {
    this.AddNewHero();
  }
  // Ajoute des Heros dans Mysuperhero
  AddNewHero(){
    if(this.indexActuel + 3 <= this.SuperUser.length){
      for (let index = this.indexActuel; index < this.indexActuel+3; index++) {
        this.MySuperHero.next([...this.MySuperHero.value ,this.SuperUser[index]]);
      }
      this.indexActuel += 3;
    }
  }
  // Affiche les informations d'un hero précis
  ShowMoreInfo(superhero: string) {
        this.SuperUser.forEach((element, index) => {
            if(element.superhero == superhero) {
            this.TheSuperHeo = element
            }
        });
  }
  // Return un superhero
  RandomSuperHero(){
        const nbr = Math.floor(Math.random() * this.SuperUser.length);

        return this.SuperUser[nbr];
  }

  // Cache les informations d'un super hero
  HideMoreInfo() {
    this.TheSuperHeo = undefined;
  }
}
