import { Injectable } from "@angular/core";
 
@Injectable()
 
export class VoucherRepository{
    private discount : number = 0
 
    applyDiscount(discount : number){
        this.discount = discount
    }
 
    retrievingDiscount(){
        return this.discount
    }
}