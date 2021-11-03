import { Component, Input, OnInit } from '@angular/core';
import { filter } from 'src/app/_models/Filter.model';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit {
  @Input() filters!: filter;
  constructor() { }

  ngOnInit(): void {
  }

}
