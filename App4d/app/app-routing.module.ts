import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PROsComponent } from './pros/pros.component';
import { OSComponent } from './os/os.component';
import { DataComponent } from './data/data.component';

const routes: Routes = [
  {path : 'OperatingSystems', component:OSComponent},
  {path : 'ProgrammingLanguages' ,component:PROsComponent},
  {path : 'Databases' ,component:DataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
