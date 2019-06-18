
import {
    ComponentFactoryResolver,
    Injectable,
    ApplicationRef,
    Injector,
    EmbeddedViewRef,
    ComponentRef
} from '@angular/core';
import { LoaderComponent } from '../components/loader/loader.component';
@Injectable({
    providedIn: 'root'
})
export class LoaderService {

    public loaderComponentRef: ComponentRef<LoaderComponent>;

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private appRef: ApplicationRef,
        private injector: Injector
    ) { }

    addLoaderComponent() {
        // Get factory of component
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(LoaderComponent);
        // Use the factory to create an instance of the component
        // Pass the injector to enable to use the dependency injection
        const componentRef = componentFactory.create(this.injector);
        // Attach the new component to the angular components tree
        this.appRef.attachView(componentRef.hostView);
        // Get the root DOM-element of dynamic component to attached to HTML-body
        const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
        document.body.appendChild(domElem);
        // Assingn the instance of component to property
        this.loaderComponentRef = componentRef;
    }

    destroyLoader() {
        this.appRef.detachView(this.loaderComponentRef.hostView);
        this.loaderComponentRef.destroy();
    }
}
