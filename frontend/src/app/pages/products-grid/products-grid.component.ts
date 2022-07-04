import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';


@Component({
  selector: 'app-products-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.scss']
})
export class ProductsGridComponent implements OnInit {
  // productsList: any;
  productsList: any = [
    {
      "_id": "62b9d9f68c38898f10bffaf1",
      "sku": 2154872,
      "name": "Jordan Sneakers",
      "date_added": [
        "2022-06-27T16:21:10.322Z"
      ],
      "price": 78.2,
      "quantity": 152,
      "description": "JUst some sneakers..",
      "image": "https://www.freeiconspng.com/uploads/no-image-icon-23.jpg",
      "__v": 0
    },
    {
      "_id": "62b9d9f68c38898f10bffaf3",
      "sku": 2154872,
      "name": "Jordan Sneakers",
      "date_added": [
        "2022-06-27T16:21:10.322Z"
      ],
      "price": 78.2,
      "quantity": 152,
      "description": "JUst some sneakers..",
      "image": "https://www.freeiconspng.com/uploads/no-image-icon-23.jpg",
      "__v": 0
    },
    {
      "_id": "62b9d9f68c38898f10bffaf5",
      "sku": 2154872,
      "name": "Jordan Sneakers",
      "date_added": [
        "2022-06-27T16:21:10.322Z"
      ],
      "price": 78.2,
      "quantity": 152,
      "description": "JUst some sneakers..",
      "image": "https://www.freeiconspng.com/uploads/no-image-icon-23.jpg",
      "__v": 0
    },
    {
      "_id": "62b9d9f68c38898f10bffaf7",
      "sku": 2154872,
      "name": "Jordan Sneakers",
      "date_added": [
        "2022-06-27T16:21:10.322Z"
      ],
      "price": 78.2,
      "quantity": 152,
      "description": "JUst some sneakers..",
      "image": "https://www.freeiconspng.com/uploads/no-image-icon-23.jpg",
      "__v": 0
    },
    {
      "_id": "62b9d9f78c38898f10bffaf9",
      "sku": 2154872,
      "name": "Jordan Sneakers",
      "date_added": [
        "2022-06-27T16:21:10.322Z"
      ],
      "price": 78.2,
      "quantity": 152,
      "description": "JUst some sneakers..",
      "image": "https://www.freeiconspng.com/uploads/no-image-icon-23.jpg",
      "__v": 0
    },
    {
      "_id": "62b9d9f78c38898f10bffafb",
      "sku": 2154872,
      "name": "Jordan Sneakers",
      "date_added": [
        "2022-06-27T16:21:10.322Z"
      ],
      "price": 78.2,
      "quantity": 152,
      "description": "JUst some sneakers..",
      "image": "https://www.freeiconspng.com/uploads/no-image-icon-23.jpg",
      "__v": 0
    },
    {
      "_id": "62b9d9f78c38898f10bffafd",
      "sku": 2154872,
      "name": "Jordan Sneakers",
      "date_added": [
        "2022-06-27T16:21:10.322Z"
      ],
      "price": 78.2,
      "quantity": 152,
      "description": "JUst some sneakers..",
      "image": "https://www.freeiconspng.com/uploads/no-image-icon-23.jpg",
      "__v": 0
    },
    {
      "_id": "62b9d9f78c38898f10bffaff",
      "sku": 2154872,
      "name": "Jordan Sneakers",
      "date_added": [
        "2022-06-27T16:21:10.322Z"
      ],
      "price": 78.2,
      "quantity": 152,
      "description": "JUst some sneakers..",
      "image": "https://www.freeiconspng.com/uploads/no-image-icon-23.jpg",
      "__v": 0
    },
    {
      "_id": "62b9d9f78c38898f10bffb01",
      "sku": 2154872,
      "name": "Jordan Sneakers",
      "date_added": [
        "2022-06-27T16:21:10.322Z"
      ],
      "price": 78.2,
      "quantity": 152,
      "description": "JUst some sneakers..",
      "image": "https://www.freeiconspng.com/uploads/no-image-icon-23.jpg",
      "__v": 0
    },
    {
      "_id": "62b9d9f78c38898f10bffb01",
      "sku": 2154872,
      "name": "Jordan Sneakers",
      "date_added": [
        "2022-06-27T16:21:10.322Z"
      ],
      "price": 78.2,
      "quantity": 152,
      "description": "JUst some sneakers..",
      "image": "https://www.freeiconspng.com/uploads/no-image-icon-23.jpg",
      "__v": 0
    },
    {
      "_id": "62b9d9f78c38898f10bffb01",
      "sku": 2154872,
      "name": "Jordan Sneakers",
      "date_added": [
        "2022-06-27T16:21:10.322Z"
      ],
      "price": 78.2,
      "quantity": 152,
      "description": "JUst some sneakers..",
      "image": "https://www.freeiconspng.com/uploads/no-image-icon-23.jpg",
      "__v": 0
    },
    {
      "_id": "62b9d9f78c38898f10bffb01",
      "sku": 2154872,
      "name": "Jordan Sneakers",
      "date_added": [
        "2022-06-27T16:21:10.322Z"
      ],
      "price": 78.2,
      "quantity": 152,
      "description": "JUst some sneakers..",
      "image": "https://www.freeiconspng.com/uploads/no-image-icon-23.jpg",
      "__v": 0
    },
    {
      "_id": "62b9d9f78c38898f10bffb01",
      "sku": 2154872,
      "name": "Jordan Sneakers",
      "date_added": [
        "2022-06-27T16:21:10.322Z"
      ],
      "price": 78.2,
      "quantity": 152,
      "description": "JUst some sneakers..",
      "image": "https://www.freeiconspng.com/uploads/no-image-icon-23.jpg",
      "__v": 0
    },
    {
      "_id": "62b9d9f78c38898f10bffb01",
      "sku": 2154872,
      "name": "Jordan Sneakers",
      "date_added": [
        "2022-06-27T16:21:10.322Z"
      ],
      "price": 78.2,
      "quantity": 152,
      "description": "JUst some sneakers..",
      "image": "https://www.freeiconspng.com/uploads/no-image-icon-23.jpg",
      "__v": 0
    },
    {
      "_id": "62b9d9f78c38898f10bffb01",
      "sku": 2154872,
      "name": "Jordan Sneakers",
      "date_added": [
        "2022-06-27T16:21:10.322Z"
      ],
      "price": 78.2,
      "quantity": 152,
      "description": "JUst some sneakers..",
      "image": "https://www.freeiconspng.com/uploads/no-image-icon-23.jpg",
      "__v": 0
    },
    {
      "_id": "62b9d9f78c38898f10bffb01",
      "sku": 2154872,
      "name": "Jordan Sneakers",
      "date_added": [
        "2022-06-27T16:21:10.322Z"
      ],
      "price": 78.2,
      "quantity": 152,
      "description": "JUst some sneakers..",
      "image": "https://www.freeiconspng.com/uploads/no-image-icon-23.jpg",
      "__v": 0
    },
    {
      "_id": "62b9d9f78c38898f10bffb01",
      "sku": 2154872,
      "name": "Jordan Sneakers",
      "date_added": [
        "2022-06-27T16:21:10.322Z"
      ],
      "price": 78.2,
      "quantity": 152,
      "description": "JUst some sneakers..",
      "image": "https://www.freeiconspng.com/uploads/no-image-icon-23.jpg",
      "__v": 0
    },
  ];
  loading= true;
  constructor(
    private ProductsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.loading = false;
    // this.getDB_Data();
  }

  getDB_Data() {
    this.getProductsList();
  }

  getProductsList() {
    this.ProductsService.getProducts().subscribe((data) => {
      this.productsList = data;
      this.loading = false;
    });
  }

}
