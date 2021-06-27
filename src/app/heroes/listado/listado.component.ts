import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  public heroes: string[] = ['Spiderman','IronMan','Hulk','Goku','Veggeta','Super Manso','Chapulin Colorado'];

  public heroeBorrado: string = '';

  borrarHeroe()
  {
    this.heroeBorrado = this.heroes.shift() || '';
    console.log('Borrando ...',this.heroeBorrado);
  }

}
