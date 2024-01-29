import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'documentEnfant',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './Document.component.html',
  styleUrl: './Document.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocumentComponent { 
  constructor(private route: ActivatedRoute){}
  // Reçoit en donnée un document
  @Input() documentInput: { id: number; name: string; } | undefined

  // Déclaration permetant de pouvoir renvoyer un boolean au parent par la suite
  @Output() ClosingPopUpOutput = new EventEmitter<boolean>();
    // Déclaration permetant de pouvoir renvoyer un number au parent par la suite
  @Output() ArchivageOutput = new EventEmitter<number>();

  // Renvoie un bollean au parent
  closePopupEnfant() {
    this.ClosingPopUpOutput.emit(true);
  }
  // Renvoie un number au parent
  archiveDocumentEnfant(id:number) {
    this.ArchivageOutput.emit(id);
  }
}
