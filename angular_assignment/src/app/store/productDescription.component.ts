import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';
import { ActivatedRoute } from '@angular/router';


@Component({
    templateUrl: './productDescription.component.html'
})

export class ProductDescriptionComponent implements OnInit {
    product: Product | undefined;
    showDescription: boolean = false;

    constructor(
        private repo: ProductRepository,
        private route : ActivatedRoute
    ) { }
    

    ngOnInit() {
        this.load()
    }
    load(){
        const prodID  = Number(this.route.snapshot.paramMap.get('productId'));
        this.product = this.repo.getProduct(prodID);
    }
    
}
    
      

