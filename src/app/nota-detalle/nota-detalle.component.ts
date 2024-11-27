import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotasService } from '../notas.service';

@Component({
  selector: 'app-nota-detalle',
  templateUrl: './nota-detalle.component.html',
  styleUrls: ['./nota-detalle.component.scss'],
})
export class NotaDetalleComponent  implements OnInit {
  nota: any;

  constructor(private route: ActivatedRoute, private notasService: NotasService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const notaId = params['id'];
      this.nota = this.notasService.obtenerNotaSeleccionada(notaId);
    });
  }

  editarNota() {
    if (this.nota && this.nota.id) {
      this.router.navigate(['/editar-nota', this.nota.id]);
    } else {
      console.error('No se pudo encontrar el ID de la nota.');
    }
 }
}