import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/Home/Home.component';
import { LoginComponent } from './Pages/login/login.component';
import { CatalogueComponent } from './Components/Catalogue/Catalogue.component';
import { DocumentsComponent } from './Components/Documents/Documents.component';
import { DocumentComponent } from './Components/Documents/Document/Document.component';
import { AdminComponent } from './Pages/Admin/Admin.component';
import { OnThisDayComponent } from './Pages/OnThisDay/OnThisDay.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'catalogue', component: CatalogueComponent },
    { path: 'documents', component: DocumentsComponent },
    { path: 'documentDetails/:document', component: DocumentComponent },
    { path: 'Admin', component: AdminComponent },
    { path: 'OnThisDay', component: OnThisDayComponent },


];
