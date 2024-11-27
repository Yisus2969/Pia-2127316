import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NotasService } from '../notas.service';

import { FotoService } from '../foto.service';
import { Foto } from '../foto.model';

@Component({
  selector: 'app-agregar-nota',
  templateUrl: './agregar-nota.component.html',
  styleUrls: ['./agregar-nota.component.scss']
})
export class AgregarNotaComponent implements OnInit {

  public fotos: Foto[] = [];
  tituloNota: string = '';
  descripcionNota: string = '';

  constructor(private modalController: ModalController, private notasService: NotasService, private fotoService: FotoService) { }

  ngOnInit() {
    this.fotos = this.fotoService.fotos;
  }

  cerrarModal() {
    this.modalController.dismiss();
  }

  guardarNota() {
    const nuevaNota = {
      titulo: this.tituloNota,
      descripcion: this.descripcionNota
    };
    this.notasService.agregarNota(nuevaNota);
    this.cerrarModal();
  }

  async tomarFoto() {
    await this.fotoService.addNewToGallery();
    this.cerrarModal();
  }
  
}