import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent {
  @Input() items: any[] = [];
  @Output() agregarCaracteristicas = new EventEmitter<any>();

  agregarItem(item: any) {
    this.items.push(item);
    this.agregarCaracteristicas.emit(item);
  }

}
