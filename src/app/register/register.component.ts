import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private afAuth: AngularFireAuth, private toastController: ToastController) {}

  register() {
    this.afAuth.createUserWithEmailAndPassword(this.email, this.password)
      .then(() => {
        this.showToast('Registro realizado exitosamente');
        this.router.navigate(['/login']);
      })
      .catch(error => {
        console.error('Error de registro:', error);
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