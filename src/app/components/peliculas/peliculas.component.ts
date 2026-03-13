import { Component } from '@angular/core';
import {Pelicula} from '../../models/pelicula';

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css'
})
export class PeliculasComponent {
  public titulo: string;
  public peliculas : Array<Pelicula>;

   constructor(){
      this.titulo = "componente de peliculas"
      this.peliculas = [
        new Pelicula(

          'Spidermen 4',
          'https://pbs.twimg.com/media/FodtLiXaAAATuBJ.jpg:large',
          'Spider-Man: Brand New Day is an upcoming American superhero film based on the Marvel Comics character Spider-Man.'
        ),
        new Pelicula(
          'El conjuro 4',
          'https://revistayume.com/wp-content/uploads/2025/09/el-conjuro-4-ultimos-ritos-estreno-1756996715-1296x670.jpg',
          'Inspirada en la aterradora historia real de la familia Smurl, El Conjuro 4: últimos ritos marca la última aparición de Patrick Wilson y Vera Farmiga como Ed y Lorraine Warren. El caso más aterrador de los Warren cobra vida cuando una casa en Pensilvania se convierte en el epicentro de un asedio sobrenatural implacable. Una auténtica pesadilla basada en hechos reales… y no todos saldrán con vida.'

        ),
        new Pelicula(
          'Avatar: Fuego y ceniza',
          'https://www.ecartelera.com/images/img/244100/244144_avatar-fuego-y-ceniza-nos-lleva-mas-alla-del-co.jpg',
          'Tercera entrega de la saga. Presenta al Pueblo de las Cenizas, un clan Navi no tan pacífico que utilizará la violencia si lo necesita para conseguir sus objetivos, aunque sea contra otros clanes'

        )     
      ]
   }
}
