import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  validateFields(): boolean {
    const email = (document.getElementById("email_register") as HTMLInputElement).value;
    const emailConf = (document.getElementById("emailconf_register") as HTMLInputElement).value;
    const password = (document.getElementById("contrasena_register") as HTMLInputElement).value;
    const passwordConf = (document.getElementById("contrasenaconf_register") as HTMLInputElement).value;

    if (email !== emailConf) {
      alert("Los correos no coinciden");
      return false;
    }

    if (password !== passwordConf) {
      alert("Las contraseñas no coinciden");
      return false;
    }

    return true;
  }

  onSubmit(): void {
    if (this.validateFields()) {
      // Lógica para enviar el formulario si las validaciones son exitosas
    }
  }




}
