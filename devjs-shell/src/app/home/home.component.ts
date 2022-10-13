import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ComponentLoaderService } from '../component-loader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @ViewChild('dynamicContainer', { static: true, read: ViewContainerRef }) dynamicContainer!: ViewContainerRef;
  constructor(private _componentLoader: ComponentLoaderService) { }


  loadComponent(name: string) {
    this.dynamicContainer.clear();
    this._componentLoader.loadComponent(this.dynamicContainer, name)
  }
  

}
