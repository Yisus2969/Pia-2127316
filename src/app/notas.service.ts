import { Injectable, EventEmitter } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class NotasService {
  notas: any[] = [];
  nuevaNotaEmitter: EventEmitter<any> = new EventEmitter<any[]>();

  constructor(private authService: AuthService) {
    this.notas = []; // Inicializa la lista de notas
    console.log('Notas inicializadas:', this.notas);
  }

  // Función para generar un UUID v4
  uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0,
        v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

  obtenerNotaSeleccionada(notaId: any): any {
    console.log('ID de la nota:', notaId);
    console.log('Notas:', this.notas);
    const notaSeleccionada = this.notas.find(nota => nota.id === notaId);
    return notaSeleccionada;
  }

  agregarNota(nuevaNota: any) {
    nuevaNota.id = this.uuidv4();
    this.notas.push(nuevaNota);
    this.nuevaNotaEmitter.emit(this.notas.slice());
  }

  obtenerNotas() {
    return this.notas.slice(); 
  }

  actualizarNota(nuevaNota: any) {
    const index = this.notas.findIndex(nota => nota.id === nuevaNota.id);
    if (index !== -1) {
      this.notas[index] = nuevaNota;
    } else {
      console.error('No se encontró la nota a actualizar');
    }
  }

  eliminarNota(nota: any) {
    const index = this.notas.findIndex(n => n.id === nota.id);
    if (index !== -1) {
      this.notas.splice(index, 1);
      this.nuevaNotaEmitter.emit(this.notas.slice());
    } else {
      console.error('No se encontró la nota a eliminar');
    }
  }

}