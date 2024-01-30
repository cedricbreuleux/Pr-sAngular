import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewChild, AfterViewInit } from '@angular/core';
import { MesUtilisateursComponent } from '../../Components/MesSuperHeros/MesSuperHeros.component';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    CommonModule, MesUtilisateursComponent
  ],
  templateUrl: 'Admin.component.html',
  styleUrl: './Admin.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
// Impletement AfterViewInit
export class AdminComponent implements AfterViewInit { 
  // Fais le lien avec un composant enfant
  @ViewChild(MesUtilisateursComponent) mesUtilisateursComponent!:MesUtilisateursComponent;
  
  // Contient un super hero ou rien
  TheSuperHeoDiscover= new BehaviorSubject<{"superhero":string, "publisher":string, "alter_ego":string,
  "first_appearance":string, "characters":string} | undefined > (undefined);

  // Recupere un hero aleatoire de l'enfant
  ngAfterViewInit() {
    setInterval(() => {
     this.TheSuperHeoDiscover.next(this.mesUtilisateursComponent.RandomSuperHero());
     console.log(this.TheSuperHeoDiscover.value)
    },10000)
  }
  // Ajoute des nouveaux heros
  RefrechUser() {
    this.mesUtilisateursComponent.AddNewHero()
  }
}
