import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { MesUtilisateursComponent } from '../../Components/MesUtilisateurs/MesUtilisateurs.component';

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
export class AdminComponent { 
  @ViewChild(MesUtilisateursComponent) mesUtilisateursComponent!:MesUtilisateursComponent;

  RefrechUser() {
    this.mesUtilisateursComponent.AddNewUsers()
  }
}
