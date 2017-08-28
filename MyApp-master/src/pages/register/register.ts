import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import * as firebase from 'firebase';

/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  private registerData: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {

    this.registerData = this.formBuilder.group({
      registerMail: ['', Validators.required],
      registerPass: ['', Validators.required]
    })

  }

  register() {

    firebase.auth().createUserWithEmailAndPassword( this.registerData.controls['registerMail'].value, this.registerData.controls['registerPass'].value)
    .then((response) => {
      console.log(response)    
    })
    .catch((error) => {
      console.log(error)
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
