import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DetailProduitComponent } from './DetailProduit/DetailProduit.component';

@Component({
  selector: 'app-catalogue',
  standalone: true,
  imports: [
    CommonModule,
    DetailProduitComponent,
  ],
  templateUrl: './catalogue.component.html',
  styleUrl: './Catalogue.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogueComponent { 
  PageCatalogue: number = 0;
  Catalogue: Array<{ titre: string, prix: number, image:string}> = [
    {
      titre: 'Aspirateur',
      prix: 99,
      image:'https://clean-equipements.com/cdn/shop/products/hvx160xtra_150x@2x.jpg?v=1586767136'
    },
    {
      titre: 'Playstation',
      prix: 250,
      image:''
    },
    {
      titre: 'Sweet noir',
      prix: 65,
      image:''
    }
  ];
  ArticlePrecedent() {
    if(this.PageCatalogue > 0) {
      this.PageCatalogue --;
    }
  }
  ArticleSuivant() {
    this.PageCatalogue ++;
  }
}
