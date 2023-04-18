import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';


@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  //Para recibir una lista del main-page  
  @Input()

  public characterList: Character[]=[{
    name:'Trunk',
    power:10
  }]

  //onDelete

  @Output()
  public onDelete: EventEmitter<number> = new EventEmitter();
  
  onDeleteCharacter(index:number):void{
    //TODO: Emitir el ID del personaje
    //console.log({index})
    this.onDelete.emit(index);
  }

}
