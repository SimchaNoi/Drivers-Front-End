import { Component, OnInit } from '@angular/core';

import { EventService } from '../core/services/event.service';

// Store
import { RootReducerState } from '../store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})

/**
 * Layout Component
 */
export class LayoutComponent implements OnInit {

  layoutType!: string;

  constructor(private store: Store<RootReducerState>) { }

  ngOnInit(): void {
    this.store.select('layout').subscribe((data) => {
      this.layoutType = data.LAYOUT;
      document.documentElement.setAttribute('data-layout', data.LAYOUT);
      document.documentElement.setAttribute('data-bs-theme', data.LAYOUT_MODE);
      document.documentElement.setAttribute('data-layout-width', data.LAYOUT_WIDTH);
      document.documentElement.setAttribute('data-layout-position', data.LAYOUT_POSITION);
      document.documentElement.setAttribute('data-topbar', data.TOPBAR);
      document.documentElement.setAttribute('data-sidebar', data.SIDEBAR_COLOR) ;
      document.documentElement.setAttribute('data-sidebar-size', data.SIDEBAR_SIZE) ;
      document.documentElement.setAttribute('data-sidebar-image', data.SIDEBAR_IMAGE);
      document.documentElement.setAttribute('data-layout-style', data.SIDEBAR_VIEW) ;
      document.documentElement.setAttribute('data-preloader', data.DATA_PRELOADER)
      document.documentElement.setAttribute('data-sidebar-visibility', data.SIDEBAR_VISIBILITY);
    })

  }


  }
