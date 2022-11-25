import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.css'],
 // providers:[PokemonService]
})
export class DetailPokemonComponent implements OnInit {
 pokemonList:Pokemon[]
 pokemon:Pokemon|undefined;
  constructor(private route:ActivatedRoute,private router:Router,private pokemonService:PokemonService) { }

  ngOnInit(): void  {
    const pokemonId:number=+this.route.snapshot.paramMap.get('id');

     if(pokemonId) 
     {
      this.pokemon=this.pokemonService.getPokemenById(pokemonId);
    }
    else{this.pokemon==undefined}

    }
    gotoPokemonList(){
      this.router.navigate(['/pokemon']);
    }

    editePokemon(pokemon:Pokemon)
    {
      this.router.navigate(["/edite/pokemon",pokemon.id]);
    }
}
