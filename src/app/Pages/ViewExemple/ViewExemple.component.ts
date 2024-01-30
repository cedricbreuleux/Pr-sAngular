import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { EXEMPLESHTMLComponent } from '../../Components/EXEMPLESHTML/EXEMPLESHTML.component';

@Component({
  selector: 'app-view-exemple',
  standalone: true,
  imports: [
    CommonModule, EXEMPLESHTMLComponent
  ],
  templateUrl: './ViewExample.component.html',
  styleUrl: './ViewExemple.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewExempleComponent {
  // On fait le lien avec le composant enfant
  @ViewChild(EXEMPLESHTMLComponent) ComposantEnfant!: EXEMPLESHTMLComponent;

  // On fait initialise notre variable contenant nos references
  @ViewChildren('btn') ButtonsADesactiver!: QueryList<ElementRef>;

  ColorSelected: string = "";

  SaveColor(event: Event) {
    const selectedColor = (event.target as HTMLSelectElement).value;
    this.ColorSelected = selectedColor

    // Recupere egalement la reference du composant enfant
    const ElementEnfant = this.ComposantEnfant.montitre.nativeElement as HTMLDivElement;
    // Change sa couleur
    ElementEnfant.style.color = this.ColorSelected;
  }

  disableAllButton() {
    // On desactive tous les boutons ayant la meme reference
    this.ButtonsADesactiver.forEach(button => button.nativeElement.disabled = true);
  }
}
