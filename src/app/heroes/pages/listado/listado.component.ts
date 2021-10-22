import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: []
})
export class ListadoComponent implements OnInit {

  hero: Heroe[] = [];

  constructor( private heroeService: HeroesService) { }

  ngOnInit(): void {
    this.heroeService.getHeroes()
    .subscribe( heroes => {
      this.hero = heroes;
    })
  }

}
