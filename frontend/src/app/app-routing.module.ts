import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThreeSceneComponent } from './components/three-scene/three-scene.component';

const routes: Routes = [
  { path: '', redirectTo: '/three-scene', pathMatch: 'full' },
  { path: 'three-scene', component: ThreeSceneComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
