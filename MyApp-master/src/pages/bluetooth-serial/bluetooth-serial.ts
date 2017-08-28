import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { ColorPickerModule } from 'ngx-color-picker';

/**
 * Generated class for the BluetoothSerialPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-bluetooth-serial',
  templateUrl: 'bluetooth-serial.html',
})
export class BluetoothSerialPage {

  devices: any;
  data: string;
  unpaireds: any;
  colorToSet: string;
  private color: string = "#127bdc";

  constructor(public navCtrl: NavController, public navParams: NavParams, public bluetoothSerial: BluetoothSerial, public cpService: ColorPickerModule) {
  }
  discoverUnpairedDevices() {
    console.log('Buscando...')
    this.bluetoothSerial.discoverUnpaired().then((resp) => {
      this.unpaireds = resp;
      console.log(this.unpaireds)

    }, (error) => {
      console.log(error)
    })
  }
  connectToDevice(id) {
    this.bluetoothSerial.connect(id).subscribe(resp => {
      this.bluetoothSerial.write('CONECTED');
      console.log('ID: ' + id);
      console.log('resp ' + resp)
    })
  }

  sendData() {
    console.log(this.data)
    this.bluetoothSerial.write(this.data).then((resp) => {
      console.log('SD_r: ' + resp)
      this.data = "";
    }, (error) => {
      console.log('SD_e: ' + error)
    })

  }
  onItemChange(selectedValue: string) {
    console.log(selectedValue.slice(4, -1));

    this.colorToSet = selectedValue.slice(4, -1);
    // this.bluetoothSerial.write(selectedValue).then((resp) => {

    // }, (error) => {
    //   alert(error);
    // });

  }
  setColor() {
    if (this.colorToSet) {
      this.bluetoothSerial.write(this.colorToSet).then((resp) => {

      }, (error) => {
        alert(error);
      });
      console.log(this.colorToSet)
      console.log("set color: " + this.colorToSet)
    }
  }
  ionViewDidLoad() {
    this.bluetoothSerial.list().then((success) => {
      console.log(success);
      this.devices = success;
    }, (error) => {
      console.log(error);
    })


  }
}
