import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({
    providedIn: 'root'
})
export class DbzService {

    public characters: Character[] = [{
        name: 'Krilin',
        power: 1000,
    },{
        name: 'Goku',
        power: 9500,
    },{
        name: 'Vegueta',
        power: 7500,
    }];

    onNewCharacter(character:Character ):void{
/*         console.log('MainPage');
        console.log(character); */

        this.characters.push(character);
    }

    onDeleteCharacter(index:number):void{
        this.characters.splice(index,1);
    }

    //constructor() { }
    
}