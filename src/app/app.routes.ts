import { Routes } from '@angular/router';

import { ArticuloComponent } from './components/articulo/articulo.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './components/formulario/formulario.component';
//import { ErrorComponent } from './components/error/error.component';
// import { Pagina1Component } from './components/pagina1/pagina1.component';
// import { Pagina2Component } from './components/pagina2/pagina2.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { ArticuloComponent } from './components/articulo/articulo.component';
import { SearchComponent } from './search/search.component';
import { ArticlesNewComponent } from './components/Article_New/articles-new.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: PrincipalComponent },
  { path: 'formulario', component: FormularioComponent},
  { path: 'articulo', component: ArticuloComponent },
  { path: 'blog', component: BlogComponent },
  {path: 'buscar/:search', component: BlogComponent},
  {path: 'blog/articulo/:id', component: ArticuloComponent},
  {path: 'blog/crear', component: ArticlesNewComponent},
//   { path: 'pagina1', component : Pagina1Component},
//   { path: 'pagina2', component: Pagina2Component},
//   { path: 'pagina2/:nombre', component: Pagina2Component},
  { path: 'peliculas',component: PeliculasComponent},
//   { path: '**', component: ErrorComponent}
  
];
