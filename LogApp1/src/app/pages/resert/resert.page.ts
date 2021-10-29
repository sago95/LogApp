import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { FirebaseApp } from 'firebase/app';

@Component({
  selector: 'app-resert',
  templateUrl: './resert.page.html',
  styleUrls: ['./resert.page.scss'],
})
export class ResertPage implements OnInit {

  user: any;
  user_conect: FirebaseApp;

  constructor(public auth: AngularFireAuth, public fire: AngularFirestore, private route: Router) {
    this.auth.authState.subscribe(auth =>{
      if(!auth){
        this.route.navigate(['login']);
      }
    })
   }

  ngOnInit() {
  }

  updatePass(pass){
    if(pass.value.password!='' && pass.value.new_pass!='' && pass.value.conf_new!='' ){
      this.auth.authState.subscribe(auth =>{
        if(auth){
          this.fire.collection('users').doc(auth.uid).valueChanges().subscribe(result => {
            this.user = result;
            if(this.user.password == pass.value.password){
              if(pass.value.new_pass == pass.value.conf_new ){
                auth.updatePassword(pass.value.new_pass);
                this.fire.collection('users').doc(auth.uid).update({
                  'password': pass.value.new_pass
                });
                pass.value.password="";
                pass.value.new_pass="";
                pass.value.conf_new="";
                this.route.navigate(['profil']);
              }else{
                console.log("le nouveau mot de passe et l'ancien sont different");
              }
            }else {
              console.log("Ancien mot de passe incorrecte");
            }
          });
        }else{
          console.log("non encore connecter");
        }
      })
    }else{
      console.log(" vous n'etes pas connecter");
    }
  }

}
