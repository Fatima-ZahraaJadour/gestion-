import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/models/Utilisateur';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: Utilisateur;

  constructor(private authService: AuthService, private router: Router) { }

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

}
