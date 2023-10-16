import { Component, EventEmitter, Input, Output } from '@angular/core';

interface cartDetails{
  ISBN : number;
  title : string;
  image : string;
  price : number;
  quantity : number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  @Input() cart: cartDetails | undefined;
  @Output() removeFromCart : EventEmitter<number> = new EventEmitter()
  @Output() reduceQuantity : EventEmitter<number> = new EventEmitter()
  @Output() addQuantity : EventEmitter<number> = new EventEmitter()

  removeProduct(id:any){
    this.removeFromCart.emit(id)
  }
  reducebookQuantity(id : any){
    this.reduceQuantity.emit(id)
  }

  addbookQuantity(id : any){
    this.addQuantity.emit(id)
  }
}
