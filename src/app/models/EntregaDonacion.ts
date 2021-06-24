import { formatDate } from '@angular/common';
export class EntregaDonacion{
    idEntregaDonacion?: number;
    cedulaBeneficiario!: string;
    productoEntregado!: string;
    descripcionProducto!: string;
    cantidadEntregada!: number;
    fechaEntrega!: Date ;
}