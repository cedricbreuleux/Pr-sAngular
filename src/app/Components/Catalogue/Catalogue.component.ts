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
  // Objet representant plusieurs Articles
  Catalogue: Array<{ titre: string, prix: number, image:string}> = [
    {
      titre: 'Aspirateur',
      prix: 99,
      image:'https://clean-equipements.com/cdn/shop/products/hvx160xtra_150x@2x.jpg?v=1586767136'
    },
    {
      titre: 'Playstation',
      prix: 250,
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkf7OkPqey2cXJsKJCFFFnThvjCWUzRYUSSQ&usqp=CAU'
    },
    {
      titre: 'Sweet noir',
      prix: 65,
      image:'data:image/jpeg;base64,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'
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
