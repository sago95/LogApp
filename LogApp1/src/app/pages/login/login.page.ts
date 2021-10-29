import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string =""
  password: string =""

  constructor(public afAuth: AngularFireAuth, public route: Router, public user: UserService) { }

  ngOnInit() {
  }

  async login() {
    const {email, password } = this
    try {
      const res = await this.afAuth.signInWithEmailAndPassword(email, password)
      
      if(res.user) {
        this.user.setUser({
          email, 
          uid: res.user.uid
        })
        this.route.navigateByUrl('/home')
      
      }
      this.email="";
      this.password="";
    }catch(err) {
      console.dir(err)
      if(err.code === "auth/user-not-found") {
        console.log("Utilisateur non trouvé")
      }
    }
  }

}
