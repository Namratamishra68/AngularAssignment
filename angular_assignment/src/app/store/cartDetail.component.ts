import { VoucherRepository } from './../model/voucher.repository';
import { Component } from "@angular/core";
import { Cart } from "../model/cart.model";
import { Router } from "@angular/router";
 
@Component({
    templateUrl: "cartDetail.component.html"
})
export class CartDetailComponent {
 
    public discountPercent:number = 0;
    public discountOption:boolean = false;
    public discountRemaining : boolean = false;
 
    constructor(public cart: Cart , public discount: VoucherRepository , private route: Router) {
 
        this.discountPercent = this.discount.retrievingDiscount();
        if (this.discountPercent == 0){
            this.discountRemaining = true
        }
    }
    selectDiscount(){
        if (this.discountPercent > 0){
            this.discountOption = true
        }
    }
   
}