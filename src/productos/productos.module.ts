import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductosService } from './productos.service';
import { ProductosController } from './productos.controller';
import { Producto } from './entities/producto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Producto])], // <-- Esta es la línea clave
  controllers: [ProductosController],
  providers: [ProductosService],
  exports: [TypeOrmModule], // <-- La guía también sugiere exportarlo
})
export class ProductosModule {}