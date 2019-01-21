import {Component , OnInit } from '@angular/core';
//import{map,filter} from 'rxjs/operators';
import { IProduct } from './products';
import { ProductService } from './product.service';


@Component({
    
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
    providers: [ProductService]
})

export class ProductListComponent implements OnInit{
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    imgPadding:number = .05;
    showImage: boolean=false;
    _listFilter:string;
    errorMessage: string;

    public get listFilter() : string {
      return this._listFilter;
    }
    
    public set listFilter(value : string) {
      this._listFilter = value;
      this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter):this.products;
    }
    
    

    filteredProducts: IProduct[];
    products: IProduct[]=[];
    constructor(private productService: ProductService){
      
      this.listFilter = '';
    }
    onRatingClicked(message: string): void{
      this.pageTitle = 'Product List'+' '+ message;
    }
    performFilter(filterBy:string):IProduct[]{
      filterBy = filterBy.toLocaleLowerCase();
      return this.products.filter((product: IProduct)=>
             product.productName.toLocaleLowerCase().indexOf(filterBy)!== -1);
    }
    toggelImage():void{
      this.showImage = !this.showImage;
    }
    ngOnInit():void{
       this.productService.getProducts().subscribe(
        products =>{
          this.products = products;
          this.filteredProducts=this.products;
        },
        error => this.errorMessage=<any>error
       );
         
      
    }

}
