import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { BordCardDirective } from './bord-card.directive';
import { RouterModule, Routes } from '@angular/router';
import { PokemonService } from './pokemon.service';
import { FormsModule } from '@angular/forms';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { EditComponent } from './edit/edit.component';




const proutes: Routes = [
  {path:"edite/pokemon/:id" ,component:EditComponent},
  {path:"pokemon/:id" ,component:DetailPokemonComponent},
  {path:"pokemon",component:ListPokemonComponent},
  
];

@NgModule({
  declarations: [  
    ListPokemonComponent,
    DetailPokemonComponent,
    PokemonTypeColorPipe,
    BordCardDirective,
    PokemonFormComponent,

    EditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(proutes)
  ],
 providers:[PokemonService]
})
export class PokemonModule { }
