import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private afAuth: AngularFireAuth, private toastController: ToastController) {}

  login() {
    this.afAuth.signInWithEmailAndPassword(this.email, this.password)
      .then(() => {
        this.router.navigate(['/lista-notas']);
        this.showToast('Inicio de Sesion Correcto');
      })
      .catch(error => {
        this.showToast('Error de inicio de sesión');
      });
  }

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
    });
    toast.present();
  }
}