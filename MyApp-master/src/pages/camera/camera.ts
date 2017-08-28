import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase';

@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {

  myImage; image: any;
  pictures = [];
  dataPictures: FirebaseListObservable<any>;
  storageRef = firebase.storage().ref();

  constructor(public navCtrl: NavController, public navParams: NavParams, public camera: Camera,db: AngularFireDatabase, public AlertCtrl: AlertController) {
    this.dataPictures = db.list('/pictures');
    console.log(this.dataPictures)
  }

  openCamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.CAMERA,
      allowEdit: false,
      correctOrientation: true,
      saveToPhotoAlbum: false,
      mediaType: 0
    }

    this.camera.getPicture(options).then((ImageData) => {
      this.image = ImageData;
      this.myImage = 'data:image/jpeg;base64,' + ImageData;

      this.showPrompt();

    
    }, (error) => {
      alert(error);
    })

  }
  public showPrompt() {

    this.AlertCtrl.create({
      title: 'Mis Fotos',
      message: 'Agrega la info',
      inputs: [{
        name: 'title',
        placeholder: 'Titulo'
      }, {
        name: 'subtitle',
        placeholder: 'Subtitulo'
      }],
      buttons: [
        {
          text: 'Ok',
          handler: data => {
            var date = new Date().getTime();
            var urlMock = 'pictures/' + date + '.jpg'


            let taskUpload = this.storageRef.child(urlMock).putString(this.image, 'base64');

            taskUpload.then(() => {
              this.storageRef.child(urlMock).getDownloadURL().then((url) => {
                this.dataPictures.push({
                  title: data.title,
                  subtitle: data.subtitle,
                  url: url
                });
              });
            });
          }
        }]
    }).present();

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraPage');
  }

}
