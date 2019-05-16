
import { ComponentFactoryResolver, Injectable, Inject, ReflectiveInjector, ViewContainerRef } from '@angular/core';
import { LoaderComponent } from '../components/loader/loader.component';
@Injectable({
    providedIn: 'root'
})
export class LoaderService {

    private factoryResolver: ComponentFactoryResolver;
    private rootViewContainer: ViewContainerRef;

    constructor(@Inject(ComponentFactoryResolver) factoryResolver) {
        this.factoryResolver = factoryResolver;
    }
    setRootViewContainerRef(viewContainerRef) {
        this.rootViewContainer = viewContainerRef;
    }
    addLoaderComponent() {
        const factory = this.factoryResolver.resolveComponentFactory(LoaderComponent);
        const component = factory.create(this.rootViewContainer.parentInjector);
        this.rootViewContainer.insert(component.hostView);
    }

    destroyLoader() {
        this.rootViewContainer.remove();
    }
}
