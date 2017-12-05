import * as firebase from 'firebase';
import { $ } from 'protractor';

export class AuthService {
    private token: string;

    signUpUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(
            (error: any) => console.log(error)
        );
    }

    signInUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
            (response: any) => {
                console.log(response);
                firebase.auth().currentUser.getToken().then (
                    (token: string) => this.token = token
                );
            }
        )
        .catch(
            (error: any) => console.log(error)
        );
    }

    getToken() {
        firebase.auth().currentUser.getToken().then (
            (token: string) => this.token = token
        );
        return this.token;
    }

    isAuthenticated() {
        return this.token != null;
    }

    logout() {
        firebase.auth().signOut();
        this.token = null;
    }
}
