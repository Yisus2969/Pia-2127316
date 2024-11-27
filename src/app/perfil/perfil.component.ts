import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {
  userEmail: string | null = null; // Declara userEmail y asigna null por defecto

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getCurrentUserEmail().then(email => {
      this.userEmail = email; // Asigna el email obtenido al userEmail
    }).catch(error => {
      console.error('Error obteniendo el email del usuario:', error);
    });
  }
}