import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit {
  @Input() pokemon:Pokemon;
  types:String[];

 
  constructor(private pokemonService:PokemonService,private router:Router) { }

  ngOnInit(){
     this.types=this.pokemonService.getPokemonTyList();
  }

  hasType(type:string):boolean
  {

return this.pokemon.types.includes(type);
  }

  selectType($event:Event,type:string)
  { 
   const isCheCked:boolean=($event.target as HTMLInputElement).checked;
  if(isCheCked)
  {
    this.pokemon.types.push(type);

  }
  else{
    const index=this.pokemon.types.indexOf(type);
    this.pokemon.types.splice(index,1)
  }
  
  }

  isTypesValid(type:string):boolean
  {
  if( this.pokemon.types.length==1 && this.hasType(type))
  {
return false;
}
if(this.pokemon.types.length >2 && !this.hasType(type)){
  return false; 
}

return true;
  }

  onSubmit(){
    console.log("valide ok")
    this.router.navigate(["/pokemon",this.pokemon.id]);
  }
}
