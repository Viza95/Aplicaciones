import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';

/**
 * Generated class for the CommandsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-commands',
  templateUrl: 'commands.html',
})
export class CommandsPage {

  commands: any;
  historyCommands =  [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public bluetoothSerial: BluetoothSerial, public viewCtrl: ViewController) {


  }

  sendData() {
    this.historyCommands.push(this.commands)
    console.log(this.historyCommands);
    this.bluetoothSerial.write(this.commands).then((resp) =>{
      
      
      

    },(error)=>{

    });
    
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommandsPage');
  }

}
