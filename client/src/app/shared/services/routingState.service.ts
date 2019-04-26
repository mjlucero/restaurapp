import { Injectable } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { LoaderService } from './loader.service';
import { filter } from 'rxjs/operators';
@Injectable({
    providedIn: 'root'
})
export class RoutingStateService {
    private history = [];
    private extraParams: Object = null;
    private lastTypeNavigation: string;
    constructor(
        private router: Router,
        private loaderService: LoaderService
    ) { }

    public getHistory(): string[] {
        return this.history;
    }

    public getPreviousUrl(): string {
        return this.history[this.history.length - 2] || '/search';
    }

    public setExtraParams(elements: Object): void {
        this.extraParams = elements;
    }
    public getExtraParams(): Object {
        return this.extraParams;
    }
    public resetExtraParams(): void {
        this.extraParams = null;
    }
    public getLastTypeNavigation(): string  {
        return this.lastTypeNavigation;
    }

    public loadRouting(): void {
        this.router.events
            .pipe(filter(event => event instanceof NavigationEnd || event instanceof NavigationStart))
            .subscribe(e => {
                
                if (e instanceof NavigationStart) {
                    this.setTypeNavigation(e.navigationTrigger);
                    this.loaderService.addLoaderComponent();
                }
                if (e instanceof NavigationEnd) {
                    this.history = [...this.history, e.urlAfterRedirects];
                    this.loaderService.destroyLoader();
                }
            });
    }

    private setTypeNavigation(type: 'imperative' | 'popstate' | 'hashchange' ) {
        this.lastTypeNavigation = type;
    }
}
