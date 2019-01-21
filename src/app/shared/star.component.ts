import {Component,Input,Output, OnChanges , EventEmitter} from '@angular/core';

@Component({
    selector: 'pm-star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})
export class StarComponent  implements OnChanges{
    @Input() rating: number ;
    starWidth: number;
    wasClicked :boolean= false;
    @Output() ratingClicked : EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges():void{
        this.starWidth = this.rating*75 / 5;
    }
    onClick(){
        if(!this.wasClicked){
            this.ratingClicked.emit(`the rating ${this.rating} was clicked!!!`);
            this.wasClicked = true;
        }
     
    }
}