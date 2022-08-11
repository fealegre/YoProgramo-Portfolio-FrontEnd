import { Injectable } from '@angular/core';
import { FirebaseErrorsEnum } from '../utils/firebase-errors-enum';

@Injectable({
  providedIn: 'root'
})
export class FirebaseCodeErrorService {

  constructor() { }

  codeError(code: string) {
    switch (code) {
      case FirebaseErrorsEnum.EmailAlreadyInUse:
        return 'El usuario ya existe';
      case FirebaseErrorsEnum.WeakPassword:
        return 'El password es muy debil';
      case FirebaseErrorsEnum.InvalidEmail:
        return 'El email no es válido';
      case FirebaseErrorsEnum.WrongPassword:
        return 'El password es incorrecto';
      case FirebaseErrorsEnum.UserNotFound:
        return 'El usuario no existe';
      default:
        return 'Error desconocido';
    }
  }
}
