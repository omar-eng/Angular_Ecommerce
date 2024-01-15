import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import users  from    '../../assets/users.json';
import { CommonModule } from '@angular/common';
import { User } from './user-interface'; 
import { Pipe, pipeline } from 'stream';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 

  user: User={
    id:0,
    email:'',
    passwrd:''
  } ;


  onSubmit(){
console.log(this.user.email);
console.log(this.user.id);
  }
}
