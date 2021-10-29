import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  users: any;
  public nom: any;
  public prenom: any;
  public telephone: any;
  public email: any;


  constructor(private user: UserService, private auth: AngularFireAuth, 
    private fire: AngularFirestore, private route: Router) { 
    this.auth.authState.subscribe(auth =>{       
      if(auth){         
        this.fire.collection('users').doc(auth.uid).valueChanges().subscribe(result => {           
          this.nom = result['nom'];
          this.prenom = result['prenom'];
          this.email = result['email'];
          this.telephone = result['telephone'];
        });      
      }else {
        this.route.navigate(['login'])
      }     
    });
  }

  ngOnInit() {
    this.user.getUsers().subscribe(users => {
      console.log(users);
      this.users = users;
    })
  }

  logOut(){
    this.auth.signOut();
    this.route.navigate(['login']);
  }

}
