import { Injectable } from "@angular/core";
 
@Injectable()
 
export class VoucherRepository{
    private discountNumber : number = 0
 
    setDiscount(discountNumber : number){
        this.discountNumber = discountNumber
    }
 
    getDiscount(){
        return this.discountNumber
    }
}