import { Component } from '@angular/core';
import { NavController, ViewController, LoadingController, ModalController } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pairdevices: any; 
  unpairdevices: any;
  loading: any;
  constructor(public navCtrl: NavController, public bluetoothSerial: BluetoothSerial, public loadingCtrl: LoadingController, public viewCtrl: ViewController, public modalCtrl: ModalController) {

  }
  loader(text) {
    this.loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: text
    });
    this.loading.present();
  }

  discoverUnpairedDevices() {

    this.loader('Buscando dispositivos...');

    this.bluetoothSerial.discoverUnpaired().then((resp) => {
      this.unpairdevices = resp;
      console.log(this.unpairdevices)
      this.loading.dismiss();
    }, (error) => {
      console.log(error)
      this.loading.dismiss();
    });
  }

  test(){
    this.modalCtrl.create('CommandsPage').present();
  }

  connectToDevice(address) {

    this.loader('Conectado...');

    this.bluetoothSerial.connect(address).subscribe(resp => {
      this.loading.dismiss();
      this.modalCtrl.create('CommandsPage').present();
    },(error)=>{
      this.loading.dismiss();
    });
  }

  ionViewDidLoad() {
    this.bluetoothSerial.list().then((resp) => {
      console.log(resp);
      this.pairdevices = resp;
    }, (error) => {
      console.log(error);
    })
  }

}
