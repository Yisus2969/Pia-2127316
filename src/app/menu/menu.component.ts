// menu.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  verPerfil() {
    // Lógica para redirigir a la página de perfil del usuario
    this.router.navigate(['/perfil']);
  }

  cerrarSesion() {
    this.authService.logout();
    // Redirigir a la página de inicio de sesión
    this.router.navigate(['/login']);
  }
}
