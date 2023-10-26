import { VoucherRepository } from './../model/voucher.repository';
import { Router } from '@angular/router';
import { Component } from "@angular/core";
 
@Component({
    templateUrl:'./coupon.component.html'
})
 
export class CouponComponent{
constructor(private voucher: VoucherRepository, private route: Router ){}
 
    addDiscount(){
        this.voucher.applyDiscount(10);
        this.route.navigateByUrl('/store')
    }
 
    skipDiscount(){
        this.route.navigateByUrl('/store')
    }
}