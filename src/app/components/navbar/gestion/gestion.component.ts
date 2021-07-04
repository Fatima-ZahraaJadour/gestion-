import { Component, OnInit } from '@angular/core';
import {GestionService} from '../../../services/gestion.service';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/models/Utilisateur';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css']
})
export class GestionComponent implements OnInit {

  users: Utilisateur[] = [];

  constructor(private gestionService: GestionService, private router: Router) { }

  ngOnInit(): void {
    this.gestionService.getNormalUsers().subscribe(data => {
      if(data.status){
        this.router.navigate(['./'])
      }else {
          this.users = data.usrs;
          console.log(this.users);
      }
    });
  }

}
