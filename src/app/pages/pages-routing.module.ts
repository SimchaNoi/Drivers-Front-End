import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NewTravelComponent } from './travels/new-travel/new-travel.component';

const routes:Routes=[
  { path: 'newTravel', component: NewTravelComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

  // declarations: [],
  // imports: [
  //   CommonModule,
  // ]
})
export class PagesRoutingModule { }
