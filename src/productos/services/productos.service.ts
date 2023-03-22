import { Injectable, NotFoundException } from '@nestjs/common';
import { Producto } from '../entities/producto.entity';

@Injectable()
export class ProductosService {
  productos: Producto[] = [
    {
      id: 1,
      title: 'Perito Moreno',
      description: 'El glaciar perito moreno se encuentra en calafate',
      price: 4000,
      info: 'Viaje privado desde el hotel a el glaciar.',
      image: 'https://random.imagecdn.app/200/200',
    },
    {
      id: 2,
      title: 'El Chalten',
      description:
        'Conoce el cerro Fitz Roy, y diversos lugares en la naturaleza.',
      price: 9000,
      info: 'Se encuentra a 200km de El calafate.',
      image: 'https://picsum.photos/200',
    },
    {
      id: 3,
      title: 'Aeropuerto',
      description: 'Baja del avion y relajate en un auto de blue Calafate',
      price: 1000,
      info: '11km hasta El Calafate.',
      image: 'https://random.imagecdn.app/200/200',
    },
  ];

  getProductos() {
    return this.productos;
  }

  getProducto(id: number) {
    const product = this.productos.find((item) => item.id === id);
    if (!product) {
      throw new NotFoundException(`Producto #${id} not found`);
    }
    return product;
  }
}
