import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user.service';
import { passwordValidator } from './password-validator';



@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {
  signupForm = new FormGroup({
    pseudo: new FormControl('', [
      Validators.required
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('', [
      Validators.required,
      passwordValidator
    ])
});

  constructor(private userService:UserService) { }
  

  ngOnInit(): void {
  }

  onSubmit(){
    let userToSignup = {
      pseudo : this.signupForm.value.pseudo, 
      email : this.signupForm.value.email,
      password : this.signupForm.value.password
    }
    this.userService.login(userToSignup.pseudo,userToSignup.email,userToSignup.password).subscribe((data: User) => {
      console.log(data)
    })
      
  }

}
