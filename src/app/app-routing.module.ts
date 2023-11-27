import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AliensComponent } from './pages/aliens/aliens/aliens.component';
import { AliensDetailComponent } from './pages/aliens-detail/aliens-detail/aliens-detail.component';

const routes: Routes = [
  { path: '**', redirectTo: ''},
  { path: '', component: AliensComponent },
  { path: 'alien', component: AliensComponent },
  { path: 'alien/:id', component: AliensDetailComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
