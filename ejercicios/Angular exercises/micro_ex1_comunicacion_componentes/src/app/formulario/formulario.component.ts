import { Component} from '@angular/core';
import { ListaComponent } from '../lista/lista.component';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {
  // formData: any = {};

  // constructor(private listaComponent: ListaComponent) {}

  // agregarResultado() {
  //   this.listaComponent.agregarItem(this.formData);
  //   this.formData = {};
  // }
  items: any[] = [];

  agregarResultado() {
    this.items.push(this.formData);
    this.formData = {};
  }
  
  formData: any = {};

}
