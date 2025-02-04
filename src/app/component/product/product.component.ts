import { Component, OnInit } from '@angular/core';
import { Iprod } from 'src/app/module/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  productArr!: Array<Iprod>;
  constructor(private _productService: ProductService) {}

  ngOnInit(): void {
    this.productArr = this._productService.fetchallproduct();
  }
}
