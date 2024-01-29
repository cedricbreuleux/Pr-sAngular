import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { DocumentComponent } from './Document/Document.component';

@Component({
  selector: 'app-documents',
  standalone: true,
  imports: [
    CommonModule, DocumentComponent
  ],
  templateUrl: './Documents.component.html',
  styleUrl: './Documents.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocumentsComponent { 
  constructor(private router: Router){}

  // Status cachant la popup
  HidenPopup: boolean = true;

  // Déclaration d'un document
  documentParent: { id: number; name: string; } | undefined = undefined;

  // Déclarations de tous les documents
  public Documents$ = new BehaviorSubject<Array<{id:number,name:string}>>([
    {id: 1, name: 'Document 1'},
    {id: 2, name: 'Document 2'},
    {id: 3, name: 'Document 3'},
    {id: 4, name: 'Document 4'},
    {id: 5, name: 'Document 5'},
    {id: 6, name: 'Document 6'},
    {id: 7, name: 'Document 7'},
    {id: 8, name: 'Document 8'},
    {id: 9, name: 'Document 9'},
    {id: 10, name: 'Document 10'},
    {id: 11, name: 'Document 11'},
    {id: 12, name: 'Document 12'},
  ]);

  // Met a jour la variable document avec celui séléctionné
  DocumentDetails(Document: {id:number,name:string}){
    this.documentParent = Document;
    this.HidenPopup = false;
  }
  // Ferme la popup
  ClosePopUpParent(bool:boolean) {
    this.HidenPopup = bool;
    this.documentParent = undefined;
  }
  // Archive un Document
  ArchiveDocumentParent(id:number) {
    this.Documents$.value.forEach((element, index) => {
      if(element.id == id) {
        this.Documents$.value.splice(index,1)
        console.log(this.Documents$.value)
      }
    });
    this.ClosePopUpParent(true);
  }
}
