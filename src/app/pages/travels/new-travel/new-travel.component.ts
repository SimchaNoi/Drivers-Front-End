import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-travel',
  standalone: false,
  templateUrl: './new-travel.component.html',
  styleUrl: './new-travel.component.scss'
})
export class NewTravelComponent {
onSubmit() {
throw new Error('Method not implemented.');
}
  TravelForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.TravelForm = this.fb.group({
      name: [''],
      phone: [''],
      address: [''],
      price: [''],
      date: [''],
      startCity: [''],
      endCity: ['']
    });
  }


}
