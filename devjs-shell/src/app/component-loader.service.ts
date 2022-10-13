import { loadRemoteModule } from '@angular-architects/module-federation';
import { Injectable, ViewContainerRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentLoaderService {

  constructor() { }

  loadComponent(vcr: ViewContainerRef, compName: string) {
    import(`./dynamic-components/${compName}/${compName}.component`).then( (c: any) => {
      vcr.createComponent(c.default)
    });
  }

  loadRemoteComponent(vcr: ViewContainerRef) {
    const module = loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:5001/remoteEntry.json', 
      exposedModule: './MF1Component'
    })
  }

}
