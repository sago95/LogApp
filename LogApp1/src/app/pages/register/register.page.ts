import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  nom: string =""
  prenom: string =""
  telephone: string =""
  email: string =""
  password: string =""
  cpassword: string =""


  constructor( public afAuth: AngularFireAuth, public route: Router, public afstore: AngularFirestore, public user: UserService) { }

  ngOnInit() {
  }

  async register() {
    const { nom, prenom, telephone, email, password, cpassword } = this
    if(password !== cpassword) {
      return console.error("Mots de passe différents")
    }

    try {
      const res = await this.afAuth.createUserWithEmailAndPassword(email, password)

      this.afstore.doc(`users/${res.user.uid}`).set({
        email,
        nom,
        prenom,
        telephone,
        password
      })
      
      this.nom="";
      this.prenom="";
      this.email="";
      this.telephone="";
      this.password="";
      this.cpassword="";
     

      this.user.setUser({
        email,
        uid: res.user.uid
      })
      
      this.route.navigateByUrl('/login')
      console.log(res)
    }catch(error) {
      console.dir(error)
    }
  }

}
