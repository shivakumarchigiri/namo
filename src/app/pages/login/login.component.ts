import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  isLoginView:boolean=false;
 
  userRegisterObj:any={
    userName:'',
    password:'',
    emailId:''
  }

  userLogin:any={
    userName:'',
    password:''
  }

  router = inject(Router);

  onRegister(){
    
    if(this.userRegisterObj.userName == null || this.userRegisterObj.emailId == null){
      alert("You cant leave the fileds empty");
    }else{
      const localData = localStorage.getItem('angularlocaldata');
    if(localData != null){
      const localArray=JSON.parse(localData);
      localArray.push(this.userRegisterObj)
      localStorage.setItem('angularlocaldata',JSON.stringify(localArray))
    }else{
      const localArray=[];
      localArray.push(this.userRegisterObj)
      localStorage.setItem('angularlocaldata',JSON.stringify(localArray))
    }
    alert("Registered sucessfuly");
    }
  }

  onLogin(){
   
    const localData=localStorage.getItem('angularlocaldata');
    if(localData != null){
      const users = JSON.parse(localData);

      const isUserFound = users.find((m:any)=>
        m.userName == this.userLogin.userName && m.password == this.userLogin.password
      )
      if(isUserFound != undefined){
         this.router.navigateByUrl('dashboard')
      }else{
        alert("Username or password is wrong");
      }
    }else{
      alert('No user is found');
    }
  }
}
