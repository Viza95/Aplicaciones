import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

/**
 * Generated class for the ScannerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-scanner',
  templateUrl: 'scanner.html',
})
export class ScannerPage {
  text; format; data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public BS: BarcodeScanner) {


  }

  launchScanner() {
    this.BS.scan().then((barcodeData) => {
      this.data = barcodeData;
      console.log('Data: ' + barcodeData)
      console.log(barcodeData.format)
      console.log(barcodeData.text)

    }), (error) => {
      console.log('Error: ' + error)
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScannerPage');
  }

}
