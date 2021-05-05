
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlatoComponent} from './components/plato/plato.component';
import { RecetaComponent} from './components/receta/gourmet.component';

const APP_ROUTES: Routes = [
  { path: '', redirectTo:'/', pathMatch: 'full'},
  { path: 'plato/:id', component: PlatoComponent}, // PARAMETRO CON :id
  { path: 'receta', component: RecetaComponent},
  { path: '**', pathMatch: 'prefix', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class APP_ROUTING { }
