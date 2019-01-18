import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  template:
  `<div><h1>{{pageTitle}}</h1>
    <div>My First Component </div>
    </div>`
})
export class AppComponent {
  //title = 'Angular: Getting Started';
  pageTitle: string = 'Acme Product Management';
  //property name ---> pageTitle with the default value is 'Acme Product Management'
  //metods are usualy definde after the property name
//A class alone cant define a component 
//we need to define the template along with the metadata
//---> meta data helps the angular to instantiate the view and intranct with the component 


////Decorator is a function that adds the metadata to a class , its members,or is method arguments.
//it is the javascript language feature that is implemented in typescript
//the decorator is limeted to the feature that it decorates
// a decorator is always prefixed with @ angular has predefined decorators we can make our own decorators

}
