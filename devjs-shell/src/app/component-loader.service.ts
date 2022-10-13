import { Injectable, ViewContainerRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentLoaderService {

  constructor() { }

  loadComponent(vcr: ViewContainerRef, compName: string) {
    import(`./dynamic-components/${compName}/${compName}.component`).then( (c: any) => {
      console.log(c.default)
      vcr.createComponent(c.default)
    });
  }


}
