import { EventEmitter, Injectable } from '@angular/core';
import { Product } from '../_models/product.model';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PorductService {
  private products!: Product[];
  // private products: Product[] = [
  //   {
  //     id: 1,
  //     data: [
  //       {
  //         id: 1,
  //         name: 'Camera',
  //         description: 'This Camera is Nikon',
  //         language: { id: 1, name: 'English' },
  //       },
  //     ],
  //     category: { id: 1, name: 'Arts & Crafts' },
  //     paymentFunction: [{ id: 1, name: 'Viza' }],
  //     tags: [{ id: 1, name: 'Nike' }],
  //     price: 200,
  //     discount: 75,
  //     imagesUrls: ['assets/img/camera1.jpg'],
  //     relatedProductIDs: [1, 2, 3, 4],
  //   },

  //   {
  //     id: 2,
  //     data: [
  //       {
  //         id: 2,
  //         name: 'Camera',
  //         description: 'This Camera is Nikon',
  //         language: { id: 2, name: 'English' },
  //       },
  //     ],
  //     category: { id: 2, name: 'Automotive' },
  //     paymentFunction: [{ id: 2, name: 'Viza' }],
  //     tags: [{ id: 2, name: 'Travel' }],
  //     price: 210,
  //     discount: 80,
  //     imagesUrls: ['assets/img/camera2.jpg'],
  //     relatedProductIDs: [5, 6, 7, 8],
  //   },

  //   {
  //     id: 3,
  //     data: [
  //       {
  //         id: 3,
  //         name: 'Labtop',
  //         description: 'This Laptop is Dell',
  //         language: { id: 3, name: 'English' },
  //       },
  //     ],
  //     category: { id: 3, name: 'Baby' },
  //     paymentFunction: [{ id: 3, name: 'Viza' }],
  //     tags: [{ id: 3, name: 'Sport' }],
  //     price: 220,
  //     discount: 85,
  //     imagesUrls: ['assets/img/labtop2.jpg'],
  //     relatedProductIDs: [6, 7, 8, 9],
  //   },

  //   {
  //     id: 4,
  //     data: [
  //       {
  //         id: 4,
  //         name: 'Bag',
  //         description: 'This Bag is Cotton',
  //         language: { id: 4, name: 'English' },
  //       },
  //     ],
  //     category: { id: 4, name: 'Books' },
  //     paymentFunction: [{ id: 4, name: 'Viza' }],
  //     tags: [{ id: 4, name: 'Tv' }],
  //     price: 230,
  //     discount: 90,
  //     imagesUrls: ['assets/img/bag1.jpg'],
  //     relatedProductIDs: [8, 9, 10, 11],
  //   },

  //   {
  //     id: 5,
  //     data: [
  //       {
  //         id: 5,
  //         name: 'Bag',
  //         description: 'This Bag is Cotton',
  //         language: { id: 5, name: 'English' },
  //       },
  //     ],
  //     category: { id: 5, name: 'Eletronics' },
  //     paymentFunction: [{ id: 5, name: 'Viza' }],
  //     tags: [{ id: 5, name: 'Books' }],
  //     price: 240,
  //     discount: 95,
  //     imagesUrls: ['assets/img/bag2.jpeg'],
  //     relatedProductIDs: [10, 11, 12, 13],
  //   },

  //   {
  //     id: 6,
  //     data: [
  //       {
  //         id: 6,
  //         name: 'Camera',
  //         description: 'This Camera is Nikon',
  //         language: { id: 6, name: 'English' },
  //       },
  //     ],
  //     category: { id: 6, name: 'Women Fashion' },
  //     paymentFunction: [{ id: 6, name: 'Viza' }],
  //     tags: [{ id: 6, name: 'Tech' }],
  //     price: 250,
  //     discount: 100,
  //     imagesUrls: ['assets/img/camera3.jpg'],
  //     relatedProductIDs: [12, 13, 14, 15],
  //   },

  //   {
  //     id: 7,
  //     data: [
  //       {
  //         id: 7,
  //         name: 'Labtop',
  //         description: 'This Labtop is HP',
  //         language: { id: 7, name: 'English' },
  //       },
  //     ],
  //     category: { id: 7, name: 'Men Fashion' },
  //     paymentFunction: [{ id: 7, name: 'Viza' }],
  //     tags: [{ id: 7, name: 'Addidas' }],
  //     price: 260,
  //     discount: 105,
  //     imagesUrls: ['assets/img/labtop3.jpg'],
  //     relatedProductIDs: [14, 15, 16, 17],
  //   },

  //   {
  //     id: 8,
  //     data: [
  //       {
  //         id: 8,
  //         name: 'Camera',
  //         description: 'This Camera is Nikon',
  //         language: { id: 8, name: 'English' },
  //       },
  //     ],
  //     category: { id: 8, name: 'Health & Household' },
  //     paymentFunction: [{ id: 8, name: 'Viza' }],
  //     tags: [{ id: 8, name: 'Promo' }],
  //     price: 270,
  //     discount: 110,
  //     imagesUrls: ['assets/img/camera3.jpg'],
  //     relatedProductIDs: [16, 17, 18, 19],
  //   },

  //   {
  //     id: 9,
  //     data: [
  //       {
  //         id: 9,
  //         name: 'Camera',
  //         description: 'This Camera is Nikon',
  //         language: { id: 9, name: 'English' },
  //       },
  //     ],
  //     category: { id: 9, name: 'Home & Kitchen' },
  //     paymentFunction: [{ id: 9, name: 'Viza' }],
  //     tags: [{ id: 9, name: 'Reading' }],
  //     price: 2002,
  //     discount: 75,
  //     imagesUrls: ['assets/img/camera2.jpg'],
  //     relatedProductIDs: [18, 19, 20, 21],
  //   },

  //   {
  //     id: 10,
  //     data: [
  //       {
  //         id: 10,
  //         name: 'Bag',
  //         description: 'This Bag is Cotton',
  //         language: { id: 10, name: 'English' },
  //       },
  //     ],
  //     category: { id: 10, name: 'Military Accessories' },
  //     paymentFunction: [{ id: 10, name: 'Viza' }],
  //     tags: [{ id: 10, name: 'Social' }],
  //     price: 300,
  //     discount: 50,
  //     imagesUrls: ['assets/img/bag3.jpg'],
  //     relatedProductIDs: [20, 21, 22, 23],
  //   },

  //   {
  //     id: 11,
  //     data: [
  //       {
  //         id: 11,
  //         name: 'Laptop',
  //         description: 'This Labtop is Lenouvo',
  //         language: { id: 11, name: 'English' },
  //       },
  //     ],
  //     category: { id: 11, name: 'Movies & Television' },
  //     paymentFunction: [{ id: 11, name: 'Viza' }],
  //     tags: [{ id: 11, name: 'New' }],
  //     price: 500,
  //     discount: 75,
  //     imagesUrls: ['assets/img/labtop3.jpg'],
  //     relatedProductIDs: [22, 23, 24, 25],
  //   },

  //   {
  //     id: 12,
  //     data: [
  //       {
  //         id: 12,
  //         name: 'Camera',
  //         description: 'This Camera is Nikon',
  //         language: { id: 12, name: 'English' },
  //       },
  //     ],
  //     category: { id: 12, name: 'Sports & Outdoors' },
  //     paymentFunction: [{ id: 11, name: 'Viza' }],
  //     tags: [{ id: 12, name: 'Special' }],
  //     price: 200,
  //     discount: 75,
  //     imagesUrls: ['assets/img/camera1.jpg'],
  //     relatedProductIDs: [22, 23, 24, 25],
  //   },

  //   {
  //     id: 13,
  //     data: [
  //       {
  //         id: 13,
  //         name: 'Bag',
  //         description: 'This Bag is Pulestire',
  //         language: { id: 13, name: 'English' },
  //       },
  //     ],
  //     category: { id: 13, name: 'Tools & Home' },
  //     paymentFunction: [{ id: 13, name: 'Viza' }],
  //     tags: [{ id: 13, name: 'Food' }],
  //     price: 200,
  //     discount: 75,
  //     imagesUrls: ['assets/img/bag2.jpeg'],
  //     relatedProductIDs: [24, 25, 26, 27],
  //   },

  //   {
  //     id: 14,
  //     data: [
  //       {
  //         id: 14,
  //         name: 'Laptop',
  //         description: 'This Labtop is Nikon',
  //         language: { id: 11, name: 'English' },
  //       },
  //     ],
  //     category: { id: 14, name: 'Toys & Games' },
  //     paymentFunction: [{ id: 14, name: 'Viza' }],
  //     tags: [{ id: 14, name: 'Used' }],
  //     price: 200,
  //     discount: 75,
  //     imagesUrls: ['assets/img/layout-styles.png'],
  //     relatedProductIDs: [1, 2, 3, 4],
  //   },

  //   {
  //     id: 15,
  //     data: [
  //       {
  //         id: 15,
  //         name: 'Bag1',
  //         description: 'This Bag is Pulestire',
  //         language: { id: 15, name: 'English' },
  //       },
  //     ],
  //     category: { id: 15, name: 'Arts & Crafts' },
  //     paymentFunction: [{ id: 15, name: 'Viza' }],
  //     tags: [{ id: 15, name: 'Nike' }],
  //     price: 200,
  //     discount: 75,
  //     imagesUrls: ['assets/img/bag1.jpg'],
  //     relatedProductIDs: [5, 6, 7, 8],
  //   },

  //   {
  //     id: 16,
  //     data: [
  //       {
  //         id: 116,
  //         name: 'Camera3',
  //         description: 'This Camera is Canoun',
  //         language: { id: 16, name: 'English' },
  //       },
  //     ],
  //     category: { id: 16, name: 'Automotive' },
  //     paymentFunction: [{ id: 16, name: 'Viza' }],
  //     tags: [{ id: 16, name: 'Travel' }],
  //     price: 200,
  //     discount: 75,
  //     imagesUrls: ['assets/img/camera1.jpg'],
  //     relatedProductIDs: [6, 7, 8, 9],
  //   },

  //   {
  //     id: 17,
  //     data: [
  //       {
  //         id: 17,
  //         name: 'Bag1',
  //         description: 'This Bag is Pulestire and cotton',
  //         language: { id: 17, name: 'English' },
  //       },
  //     ],
  //     category: { id: 17, name: 'Baby' },
  //     paymentFunction: [{ id: 17, name: 'Viza' }],
  //     tags: [{ id: 17, name: 'Sport' }],
  //     price: 200,
  //     discount: 75,
  //     imagesUrls: ['assets/img/bag3.jpg'],
  //     relatedProductIDs: [8, 9, 10, 11],
  //   },

  //   {
  //     id: 18,
  //     data: [
  //       {
  //         id: 18,
  //         name: 'Camera3',
  //         description: 'This Camera is Nikon',
  //         language: { id: 18, name: 'English' },
  //       },
  //     ],
  //     category: { id: 18, name: 'Books' },
  //     paymentFunction: [{ id: 18, name: 'Viza' }],
  //     tags: [{ id: 18, name: 'Tv' }],
  //     price: 200,
  //     discount: 75,
  //     imagesUrls: ['assets/img/camera3.jpg'],
  //     relatedProductIDs: [10, 11, 12, 13],
  //   },

  //   {
  //     id: 19,
  //     data: [
  //       {
  //         id: 19,
  //         name: 'Laptop',
  //         description: 'This Labtop is HP',
  //         language: { id: 19, name: 'English' },
  //       },
  //     ],
  //     category: { id: 19, name: 'Eletronics' },
  //     paymentFunction: [{ id: 19, name: 'Viza' }],
  //     tags: [{ id: 19, name: 'Books' }],
  //     price: 200,
  //     discount: 75,
  //     imagesUrls: ['assets/img/labtop2.jpg'],
  //     relatedProductIDs: [12, 13, 14, 15],
  //   },

  //   {
  //     id: 20,
  //     data: [
  //       {
  //         id: 20,
  //         name: 'Laptop',
  //         description: 'This Labtop is Dell',
  //         language: { id: 20, name: 'English' },
  //       },
  //     ],
  //     category: { id: 20, name: 'Women Fashion' },
  //     paymentFunction: [{ id: 20, name: 'Viza' }],
  //     tags: [{ id: 20, name: 'Tech' }],
  //     price: 200,
  //     discount: 75,
  //     imagesUrls: ['assets/img/labtop3.jpg'],
  //     relatedProductIDs: [14, 15, 16, 17],
  //   },

  //   {
  //     id: 21,
  //     data: [
  //       {
  //         id: 21,
  //         name: 'Camera',
  //         description: 'This Camera is Nikon',
  //         language: { id: 21, name: 'English' },
  //       },
  //     ],
  //     category: { id: 21, name: 'Men Fashion' },
  //     paymentFunction: [{ id: 21, name: 'Viza' }],
  //     tags: [{ id: 21, name: 'Addidas' }],
  //     price: 200,
  //     discount: 75,
  //     imagesUrls: ['assets/img/camera2.jpg'],
  //     relatedProductIDs: [16, 17, 18, 19],
  //   },

  //   {
  //     id: 22,
  //     data: [
  //       {
  //         id: 22,
  //         name: 'Bag',
  //         description: 'This Bag Is Cotton',
  //         language: { id: 22, name: 'English' },
  //       },
  //     ],
  //     category: { id: 22, name: 'Eletronics' },
  //     paymentFunction: [{ id: 22, name: 'Viza' }],
  //     tags: [{ id: 22, name: 'Books' }],
  //     price: 200,
  //     discount: 75,
  //     imagesUrls: ['assets/img/bag3.jpg'],
  //     relatedProductIDs: [17, 18, 19, 20],
  //   },

  //   {
  //     id: 23,
  //     data: [
  //       {
  //         id: 23,
  //         name: 'Camera',
  //         description: 'This Camera is Nikon',
  //         language: { id: 23, name: 'English' },
  //       },
  //     ],
  //     category: { id: 23, name: 'Eletronics' },
  //     paymentFunction: [{ id: 23, name: 'Viza' }],
  //     tags: [{ id: 23, name: 'Books' }],
  //     price: 200,
  //     discount: 75,
  //     imagesUrls: ['assets/img/camera1.jpg'],
  //     relatedProductIDs: [19, 20, 21, 22],
  //   },

  //   {
  //     id: 24,
  //     data: [
  //       {
  //         id: 24,
  //         name: 'Camera',
  //         description: 'This Camera is Canoun',
  //         language: { id: 24, name: 'English' },
  //       },
  //     ],
  //     category: { id: 24, name: 'Eletronics' },
  //     paymentFunction: [{ id: 24, name: 'Viza' }],
  //     tags: [{ id: 24, name: 'Books' }],
  //     price: 200,
  //     discount: 75,
  //     imagesUrls: ['assets/img/camera3.jpg'],
  //     relatedProductIDs: [21, 22, 23, 24],
  //   },

  //   {
  //     id: 25,
  //     data: [
  //       {
  //         id: 25,
  //         name: 'Laptop',
  //         description: 'This Labtop is HP',
  //         language: { id: 25, name: 'English' },
  //       },
  //     ],
  //     category: { id: 25, name: 'Eletronics' },
  //     paymentFunction: [{ id: 25, name: 'Viza' }],
  //     tags: [{ id: 25, name: 'Books' }],
  //     price: 200,
  //     discount: 75,
  //     imagesUrls: ['assets/img/layout-styles.png'],
  //     relatedProductIDs: [23, 24, 25, 26],
  //   },

  //   {
  //     id: 26,
  //     data: [
  //       {
  //         id: 26,
  //         name: 'Bag',
  //         description: 'This Bag Is Cotton',
  //         language: { id: 26, name: 'English' },
  //       },
  //     ],
  //     category: { id: 26, name: 'Eletronics' },
  //     paymentFunction: [{ id: 26, name: 'Viza' }],
  //     tags: [{ id: 26, name: 'Books' }],
  //     price: 200,
  //     discount: 75,
  //     imagesUrls: ['assets/img/bag2.jpeg'],
  //     relatedProductIDs: [24, 25, 26, 27],
  //   },

  //   {
  //     id: 27,
  //     data: [
  //       {
  //         id: 27,
  //         name: 'Laptop',
  //         description: 'This Labtop is Dell',
  //         language: { id: 27, name: 'English' },
  //       },
  //     ],
  //     category: { id: 27, name: 'Eletronics' },
  //     paymentFunction: [{ id: 27, name: 'Viza' }],
  //     tags: [{ id: 27, name: 'Books' }],
  //     price: 200,
  //     discount: 75,
  //     imagesUrls: ['assets/img/labtop3.jpg'],
  //     relatedProductIDs: [24, 25, 26, 27],
  //   },
  // ];

  url = environment.baseUrl;

  public itemDeleted = new EventEmitter();
  public itemAdded = new EventEmitter<Product>();
  public productChanged = new EventEmitter<Product[]>();

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<{ product: Product[] }> {
    return this.http.get<{ product: Product[] }>(`${this.url}product`);

    // this.productChanged.emit([...this.products]);
    // return [...this.products];
  }

  getProductByID(id: number): Product | undefined {
    return this.products.find((product) => product.id === id);
  }

  addProduct(product: Product): Observable<any> {
    return this.http.post(`${this.url}product/add`, product);

    // this.products.push(product);
    // this.productChanged.emit([...this.products]);
    // return [...this.products];
  }

  updateProduct(product: Product): Product[] {
    const index = this.products.findIndex((p) => p.id === product.id);
    this.products[index] = product;
    this.productChanged.emit([...this.products]);
    return [...this.products];
  }

  deleteProduct(id: number | undefined) {
    const index = this.products.findIndex((p) => p.id === id);
    this.products.splice(index, 1);
    this.productChanged.emit([...this.products]);
    this.itemDeleted.emit([...this.products]);
  }
}
