import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/product.service';
import { Iprod } from '../module/product';
import { MatDialog } from '@angular/material/dialog';
import { RemoveComponent } from '../component/remove/remove.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  prodId!: string;
  prodObj!: Iprod;
  constructor(
    private _route: ActivatedRoute,
    private _producrService: ProductService,
    private _matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.prodId = this._route.snapshot.params['PId'];
    this.prodObj = this._producrService.getprodctObj(this.prodId);
    console.log(this.prodObj);
  }

  onRemove() {
    let matDialogref = this._matDialog.open(RemoveComponent);
    matDialogref.afterClosed().subscribe((res) => {
      if (res) {
        this._producrService.onRemove(this.prodObj);
      }
    });
  }
}
