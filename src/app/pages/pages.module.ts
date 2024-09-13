import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CountUpModule } from 'ngx-countup';
import { NgApexchartsModule } from 'ng-apexcharts';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { SimplebarAngularModule } from 'simplebar-angular';

// Swiper Slider
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { LightboxModule } from 'ngx-lightbox';

// Load Icons
import { defineElement } from '@lordicon/element';
import lottie from 'lottie-web';
import { NewTravelComponent } from './travels/new-travel/new-travel.component';
import { PagesRoutingModule } from './pages-routing.module';



@NgModule({
  declarations: [
    NewTravelComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PagesRoutingModule,
    // FlatpickrModule.forRoot(),
    // CountUpModule,
    // NgApexchartsModule,
    // LeafletModule,
    // NgbDropdownModule,
    // SimplebarAngularModule,
    // SlickCarouselModule,
    // LightboxModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class PagesModule { }
