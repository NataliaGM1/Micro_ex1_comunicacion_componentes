import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent {
  @Input() items: any[] = [];

  agregarItem(item: any) {
    this.items.push(item);
  }

}
