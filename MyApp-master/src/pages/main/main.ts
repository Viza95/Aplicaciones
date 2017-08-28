import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { CameraPage } from '../camera/camera';
import { GpsPage} from '../gps/gps';
import { BlePage } from '../ble/ble';
import { ScannerPage } from '../scanner/scanner';
import { LocalNotificationsPage } from '../local-notifications/local-notifications';
import { BluetoothSerialPage } from '../bluetooth-serial/bluetooth-serial';

@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goToLoginPage(){
    this.navCtrl.push(LoginPage);
  }
  goToCamera(){
    this.navCtrl.push(CameraPage);
  }
  goToGps(){
    this.navCtrl.push(GpsPage);
  }
  goToBle(){
    this.navCtrl.push(BlePage);
  }
  goToScanner(){
    this.navCtrl.push(ScannerPage);
  }
  goToLocalNotofication(){
    this.navCtrl.push(LocalNotificationsPage);
  }
  goToBluetoothSerial(){
    this.navCtrl.push(BluetoothSerialPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

}
