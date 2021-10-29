import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
  public nom: any;
  public prenom: any;
  public telephone: any;
  public email: any;

  constructor(
    private auth: AngularFireAuth, 
    private fire: AngularFirestore,
    private route: Router
  ) {
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
  }
}

