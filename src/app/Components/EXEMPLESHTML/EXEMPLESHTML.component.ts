import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-exempleshtml',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
            <div class="divtitreexemple">
              <!-- #montitre est la reference a l'element html -->
              <h1 #montitre>Ceci est mon titre coloré</h1>
            </div>
            `,
  styleUrl: './EXEMPLESHTML.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EXEMPLESHTMLComponent {
  // Initialise une variable ayant la reference sur un element html
  @ViewChild('montitre') montitre!: ElementRef;
 }
