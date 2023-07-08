import { Component} from '@angular/core';
import { ListaComponent } from '../lista/lista.component';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {
 
    items: any[] = [];
    caracteristicas: any[] = [];

  agregarResultado() {
    this.items.push(this.formData);
    this.formData = {};

    this.caracteristicas.push(...this.formData.caracteristicas);
    this.formData.caracteristicas = [];
  }
  
  
  formData: any = {};

  agregarCaracteristicas(caracteristicas: any) {
    this.caracteristicas.push(caracteristicas);
  }

}
