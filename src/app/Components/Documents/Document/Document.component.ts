import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-document',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>Document works!</p>`,
  styleUrl: './Document.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocumentComponent { }
