import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {

  records: FirebaseListObservable<any>;
  private editFormData: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, db: AngularFireDatabase, public formBuilder: FormBuilder, public viewCtrl: ViewController) {
  this.records = db.list('/users');
    this.editFormData = this.formBuilder.group({
      name: ['', Validators.required],
      gender: ['', Validators.required],
      hobby: ['', Validators.required]
    });

   
  
  }



  goEdit() {
    var key = this.navParams.get('key');
    this.records.update(key, this.editFormData.value)
    this.viewCtrl.dismiss();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPage');
  }

}
