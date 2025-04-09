import { Injectable } from "@nestjs/common";

@Injectable()
export class ProductsService {
  private products = [
    {
      id: 1,
      name: "Product 1",
      description: "Descripción del producto 1",
      price: 200
    },
    {
      id: 2,
      name: "Product 2",
      description: "Descripción del producto 2",
      price: 200
    },
    {
      id: 3,
      name: "Product 3",
      description: "Descripción del producto 3",
      price: 200
    }
  ];

  findProducts() {
    return this.products;
  }

  createProducts(data) {
    this.products.push({
      id: this.products.length + 1,
      name: data.name,
      description: data.description,
      price: data.price
    });
    
    return data;
  }

  updateProducts() {
    return 'Actualizando Productos'
  }

  deleteProducts() {
    return 'Eliminando Productos'
  }
}