import {Component} from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class HomeComponent {
  sideNavMenu: any;
  topNavMenu: any;  
	
constructor(private _router : Router) {    
  this.sideNavMenu = [{"text":"New Node","expand":false,"id":null,"leaf":false,"icon":"fa fa-folder-open-o","routerLink":null,"defaultUi":false,"children":[{"text":"testui","expand":false,"id":"4e2692bd-8854-4afb-8e81-cbf19437ceb2","leaf":true,"icon":"fa fa-file-text-o","routerLink":"performancetestapp/core/testui","defaultUi":false,"children":null}]}]; 
  this.topNavMenu = [{"text":"New Node","expand":false,"id":null,"leaf":false,"icon":"fa fa-folder-open-o","routerLink":null,"defaultUi":false,"children":[{"text":"testui","expand":false,"id":"4e2692bd-8854-4afb-8e81-cbf19437ceb2","leaf":true,"icon":"fa fa-file-text-o","routerLink":"performancetestapp/core/testui","defaultUi":false,"children":null}]}]; 
}
sideNavClick(data: any) {
   if( data.children==null && data.routerLink) {
     this._router.navigate([data.routerLink]);
    }
  }

topNavClick(data: any) {
   if( data.data.node.children==null && data.data.node.routerLink) {
     this._router.navigate([data.data.node.routerLink]);
    }
  }
}
