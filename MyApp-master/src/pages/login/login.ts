import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, ModalController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import * as firebase from 'firebase';

import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  private data: FormGroup;


  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder,
    public toastCtrl: ToastController, public modalCtrl: ModalController) {

    this.data = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })

  }

  public showToast(text, time) {
    const toast = this.toastCtrl.create({
      message: text,
      duration: time
    });
    toast.present();
  };


  login() {

    firebase.auth().signInWithEmailAndPassword(this.data.controls['username'].value, this.data.controls['password'].value)
      .then((response) => {
        firebase.auth().onAuthStateChanged(function (user) {
          if (!user.emailVerified) {
            user.sendEmailVerification();
          }
        })
        console.log(response);
        this.navCtrl.setRoot(HomePage);
      })
      .catch((error) => {
        console.log(error.message)
      })
  }
  FBlogin() {
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('user_birthday');
    firebase.auth().signInWithPopup(provider).then((result) => {
      var token = result.credential.accessToken;
      var user = result.user;
      console.log(result + ' ' + user + ' ' + token);
        this.navCtrl.setRoot(HomePage);
    }).catch(function (error) {
      console.log('Error: ' + error)
    })

    

  }

  register() {
    this.modalCtrl.create(RegisterPage).present();
  }


  ionViewDidLoad() {

  }

}
