import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/Home/Home.component';
import { LoginComponent } from './Pages/login/login.component';
import { CatalogueComponent } from './Components/Catalogue/Catalogue.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'catalogue', component: CatalogueComponent },
];