import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
//// decletation consist of all the module that are present in the module
// in the imports module we define all the external module that we want to import in thei module
//boostrap array defines the startup component of the application, which is our componet of the application
//the start up component  must contain the selector we use in the index.
//which in this case it does
