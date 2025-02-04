import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/product.service';
import { UuidService } from '../service/uuid.service';
import { Iprod } from '../module/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  isEditmode: boolean = false;
  PId!: string;
  productForm!: FormGroup;
  mode: 'create' | 'edit' = 'create';
  prodObj!: Iprod;
  constructor(
    private _route: ActivatedRoute,
    private _prodService: ProductService,
    private _uuid: UuidService
  ) {}

  ngOnInit(): void {
    this.createform();
    this.editMode();
  }

  get fun() {
    return this.productForm.controls;
  }

  editMode() {
    this.PId = this._route.snapshot.params['PId'];
    if (this.PId) {
      this.isEditmode = true;
      this.mode = 'edit';

      let canReturn = this.productForm.value.canReturn == 1 ? 'yes' : 'no';
      this.prodObj = this._prodService.getprodctObj(this.PId);
      this.productForm.patchValue({ ...this.prodObj, canReturn: canReturn });
    } else {
      this.isEditmode = false;
      this.mode = 'create';
    }
  }

  createform() {
    this.productForm = new FormGroup({
      pName: new FormControl('', Validators.required),
      pStatus: new FormControl('', Validators.required),
      canReturn: new FormControl('', Validators.required),
      pImg: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      if (this.mode === 'create') {
        let canReturn = this.productForm.value.canReturn === 'yes' ? 1 : 0;
        let newprodObj = {
          ...this.productForm.value,
          canReturn: canReturn,
          PId: this._uuid.uuid(),
        };
        console.log(newprodObj);

        this._prodService.addproducd(newprodObj);
      } else if (this.mode === 'edit') {
        let updatedObj = {
          ...this.productForm.value,
          PId: this.PId,
        };
        console.log(updatedObj);

        this._prodService.onUpdate(updatedObj);
      }
    }
  }
}
