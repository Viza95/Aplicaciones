import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BLE } from '@ionic-native/ble'

@Component({
  selector: 'page-ble',
  templateUrl: 'ble.html',
})
export class BlePage {
  showDevices: any;
  devices = [];
  isScanning = false;
  labelStatus:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public ble: BLE) {
  }

  beginScan() {
    this.devices = [];
    this.isScanning = true;
    this.ble.startScan(['1800','1801','180f']).subscribe(device => {  
      this.devices.push(device);
      console.log(JSON.stringify(device));
    });

    setTimeout(() => {
      this.ble.stopScan().then(()=>{
        this.isScanning = false;
        if(this.devices.length === 0){
          this.labelStatus = 'No se encontraron dispositivos';
        }else{
          this.labelStatus = 'dispositivos encontrados';
        }
      });
    }, 20000);
  }

  ionViewDidLoad() {




    console.log('ionViewDidLoad BlePage');
  }

}
