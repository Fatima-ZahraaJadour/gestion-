import { Component, OnInit } from '@angular/core';
import {GestionService} from '../../services/gestion.service';
import { Router } from '@angular/router';
import {AuthService} from '../../services/auth.service';
import { Utilisateur } from 'src/app/models/Utilisateur';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  collapse = false;
  error = false;
  user: Utilisateur;

  constructor(private gestionService: GestionService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    if (!localStorage.getItem('userToken')){
      this.router.navigate(['./login']);
    }else {
      this.authService.getUserInfo().subscribe(data => {
        this.user = data.user[0];
        console.log(this.user);
      });
    }
  }

  redirectAdmin(){
    this.gestionService.getNormalUsers().subscribe(data => {
      if (data.status){
        this.error = true;
        setTimeout(() => {
          this.error = false;
        }, 2000);
      }else {
          this.router.navigate(['./gestion']);
      }
    });
  }

  logout(){
    localStorage.removeItem('userToken');
    this.router.navigate(['./login']);
  }

  toggleSideBar() {
    this.collapse = !this.collapse;
  }
}
