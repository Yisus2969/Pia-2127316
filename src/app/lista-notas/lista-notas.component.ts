// import { Component, OnInit } from '@angular/core';
// import { ModalController, ToastController} from '@ionic/angular';
// import { AgregarNotaComponent } from '../agregar-nota/agregar-nota.component';
// import { NotasService } from '../notas.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-lista-notas',
//   templateUrl: './lista-notas.component.html',
//   styleUrls: ['./lista-notas.component.scss'],
// })

// export class ListaNotasComponent implements OnInit{
//   notas:any[]=[];

//   constructor(private modalController: ModalController, private notasService: NotasService, private router: Router, private toastController: ToastController) { }

//   ngOnInit(): void {
//     this.obtenerNotas();
//     this.notasService.nuevaNotaEmitter.subscribe(() => {
//       this.obtenerNotas();
//     });
//    }

//    obtenerNotas() {
//     this.notas = this.notasService.obtenerNotas();
//   }

//   async abrirModalAgregarNota() {
//     const modal = await this.modalController.create({
//       component: AgregarNotaComponent
//     });
//     modal.onDidDismiss().then(() => {
//       this.obtenerNotas(); 
//     });
//     return await modal.present();
//   }

//   async eliminarNota(nota: any) {
//     try {
//       await this.notasService.eliminarNota(nota);
//       this.showToast('Nota eliminada correctamente');
//       this.obtenerNotas(); // Actualizar la lista después de eliminar
//     } catch (error) {
//       console.error('Error al eliminar la nota', error);
//       this.showToast('Error al eliminar la nota');
//     }
//   }

//   async showToast(message: string) {
//     const toast = await this.toastController.create({
//       message: message,
//       duration: 2000,
//       position: 'bottom',
//     });
//     toast.present();
//   }

//   verDetallesNota(nota: any) {
//     if (nota.id) {
//       this.router.navigate(['/nota-detalle', nota.id]); 
//     } else {
//       console.error('El ID de la nota es undefined');
//     }
//   }
//  }






























import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { AgregarNotaComponent } from '../agregar-nota/agregar-nota.component';
import { NotasService } from '../notas.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lista-notas',
  templateUrl: './lista-notas.component.html',
  styleUrls: ['./lista-notas.component.scss'],
})

export class ListaNotasComponent implements OnInit {
  notas: any[] = [];

  constructor(
    private modalController: ModalController,
    private notasService: NotasService,
    private router: Router,
    private toastController: ToastController
  ) {}

  ngOnInit(): void {
    this.obtenerNotas();
    this.notasService.nuevaNotaEmitter.subscribe(() => {
      this.obtenerNotas();
    });
  }

  obtenerNotas() {
    // Obtención de las notas desde el servicio
    this.notas = this.notasService.obtenerNotas();
    // Asignar color aleatorio a cada nota
    this.asignarColorNotas();
  }

  // Función para generar un color aleatorio
  generarColorAleatorio(): string {
    const colores = ['#FF5733', '#33FF57', '#3357FF', '#F1C40F', '#9B59B6', '#1ABC9C'];
    return colores[Math.floor(Math.random() * colores.length)];
  }

  // Método para asignar un color a cada nota
  asignarColorNotas(): void {
    this.notas = this.notas.map(nota => ({
      ...nota,
      color: this.generarColorAleatorio() // Asigna un color aleatorio a cada nota
    }));
  }

  async abrirModalAgregarNota() {
    const modal = await this.modalController.create({
      component: AgregarNotaComponent,
    });
    modal.onDidDismiss().then(() => {
      this.obtenerNotas(); // Recarga las notas después de agregar una nueva
    });
    return await modal.present();
  }

  async eliminarNota(nota: any) {
    try {
      await this.notasService.eliminarNota(nota);
      this.showToast('Nota eliminada correctamente');
      this.obtenerNotas(); // Actualiza la lista después de eliminar
    } catch (error) {
      console.error('Error al eliminar la nota', error);
      this.showToast('Error al eliminar la nota');
    }
  }

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
    });
    toast.present();
  }

  verDetallesNota(nota: any) {
    if (nota.id) {
      this.router.navigate(['/nota-detalle', nota.id]);
    } else {
      console.error('El ID de la nota es undefined');
    }
  }
}
