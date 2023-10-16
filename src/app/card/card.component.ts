import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Obj } from '@popperjs/core';
interface Price{
  currency: string,
  value: number,
  displayValue: string
}
interface BookDetails{
  id : number,
 title : string,
 author: string,
 summary: string,
 image: string,
 price: Price
}
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  // @Input() books : Object | undefined;
  // @Output() addProduct : EventEmitter<Object> = new EventEmitter();

  // addtoCart(books : Object){
  //     this.addProduct.emit(books);
  // }
  @Input() product: any | undefined;
  @Output() addProduct: EventEmitter<any> = new EventEmitter();

  addtoCart(product:any) {
    // console.log(product)
    this.addProduct.emit(product);
  }
}
