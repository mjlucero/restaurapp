import { Component, OnInit, Inject, ViewContainerRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { LoaderService, RoutingStateService } from './shared/services';

@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private routingStateService: RoutingStateService,
    @Inject(LoaderService) loaderService,
    @Inject(ViewContainerRef) viewContainerRef
  ) {
    // El loader se creará dentro de este componente
    loaderService.setRootViewContainerRef(viewContainerRef);
    // Inicio del tracker de rutas
    routingStateService.loadRouting();
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

}
