import { Component } from '@angular/core';
import { NavController, AlertController, ModalController, ToastController  } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import * as firebase from 'firebase';

import { EditPage } from '../edit/edit';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  info: any;
  records: FirebaseListObservable<any>;
   private exampleFormData: FormGroup;

  constructor(public navCtrl: NavController, db: AngularFireDatabase,  public formBuilder: FormBuilder, public alertCtrl: AlertController, public modalCtrl: ModalController, public toastCtrl: ToastController) {
       this.records =  db.list('/usuarios')

       this.exampleFormData = this.formBuilder.group({
         name: ['', Validators.required],
         gender: ['', Validators.required],
         hobby: ['', Validators.required]
       })

  }
  save(){
    if(this.exampleFormData.valid){
      this.records.push({
        Nombre: 'Andres',
        FechaDeNacimiento: '17/09/1993',
        ComidaFavorita: 'Pizza'
      })
    }else{
      console.error('verifique su información')
    }   
  }

  delete(key, name){

    let deleteToast = this.toastCtrl.create({
      position: 'top',
      message: name + 'ha sido borrado',
      showCloseButton: true,
      closeButtonText: 'OK'
    });
    let deleteAlert = this.alertCtrl.create({
      title: 'Eliminar',
      subTitle: 'Vas a eliminar ' + name,
      buttons: [
        {
          text: 'Cancelar',
          handler: () =>{

          }
        },
        {
          text: 'OK',
          handler: () => {
            this.records.remove(key).then(_ => deleteToast.present())
          }
        }
      ]
    })

    deleteAlert.present();

    console.log(key);
    
  }

  edit(key){
    let info = {
      key: key
    }
    this.modalCtrl.create(EditPage, info).present();

  }

  ionViewDidLoad() {
    console.log(this.records)


    this.info = "nada";
    firebase.auth().onAuthStateChanged(user => {
      if (user.emailVerified) {
        this.info = 'verificado'
      } else {
        this.info = 'no verificado'
      }
    })

    console.log('ionViewDidLoad RegisterPage');
  }

}
