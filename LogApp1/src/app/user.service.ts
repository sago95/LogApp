import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

interface user {
    email: string
    uid: string
    
}

@Injectable()
export class UserService {
    private user: user;
    users: any;
    userDoc: AngularFirestoreDocument<user>

    constructor(private afs: AngularFirestore, private auth: AngularFireAuth) {
        this.users = this.afs.collection('users').valueChanges();
    }

    getUsers(){
        return this.users
    }
    setUser(user: user) {
        this.user = user
    }

    getUID() {
        return this.user.uid
    }

    logOut(){
        this.auth.signOut();
    }
}