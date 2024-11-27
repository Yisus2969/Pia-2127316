import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotasService } from '../notas.service';

@Component({
  selector: 'app-editar-nota',
  templateUrl: './editar-nota.component.html',
  styleUrls: ['./editar-nota.component.scss'],
})
export class EditarNotaComponent implements OnInit {
  nota: any = { id: '', titulo: '', descripcion: '' };

  constructor(
    private route: ActivatedRoute,
    private notasService: NotasService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const notaId = params['id'];
      this.nota = this.notasService.obtenerNotaSeleccionada(notaId);
    });
  }

  guardarNota() {
    this.notasService.actualizarNota(this.nota);
    this.router.navigate(['/lista-notas']);
  }
}