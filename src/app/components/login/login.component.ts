import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/models/Utilisateur';
import { User } from 'src/app/models/User';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: Utilisateur = {
    username: '',
    password: '',
    role: ''
  };
  erreur: boolean = false;
  login:boolean = true;
  @ViewChild('userForm') form: any;
  showLoading: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("userToken")){
      this.router.navigate(['./'])
    }
  }

  onSubmit({value, valid}: {value: User, valid: boolean}) {
    this.showLoading = true;
    if(!valid){
      console.log('Form is not valid');
    } else {
      this.authService.saveUser({
        Username: value.Username,
        Password: value.Password
      }).subscribe(res => {
        if(res.status){
           this.erreur = true;
           setTimeout(() => {
            this.erreur = false;
          }, 2000);
        }else {
          localStorage.setItem("userToken", res.token);
          this.router.navigate(['./']);
        }
      });
      this.form.reset();
      this.showLoading = false;
    }
  }

}
