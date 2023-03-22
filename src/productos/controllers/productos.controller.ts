import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ProductosService } from '../services/productos.service';

@Controller('productos')
export class ProductosController {
  constructor(private productos: ProductosService) {}

  @Get()
  getProductos() {
    return this.productos.getProductos();
  }

  @Get(':id')
  getProducto(@Param('id', ParseIntPipe) id: number) {
    return this.productos.getProducto(id);
  }
}
