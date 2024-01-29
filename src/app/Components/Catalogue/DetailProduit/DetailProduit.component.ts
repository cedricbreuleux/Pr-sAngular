import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail-produit',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: 'DetailProduit.component.html',
  styleUrl: './DetailProduit.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailProduitComponent { 
  @Input() Article!: { titre: string, prix: number, image:string};
}
