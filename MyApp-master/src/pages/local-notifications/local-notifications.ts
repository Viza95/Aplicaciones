import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';

/**
 * Generated class for the LocalNotificationsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-local-notifications',
  templateUrl: 'local-notifications.html',
})
export class LocalNotificationsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public LN: LocalNotifications) {
  }



  ionViewDidLoad() {
    var date  = new Date();

    console.log( date.getTime())

    this.LN.schedule({
      id: 1,
      title: 'Andrés',
      text: 'Single ILocalNotification',
      sound: 'file://assets/sounds/demostrative.mp3',
      at: date.getTime() + 10 * 1000
    })

    console.log('ionViewDidLoad LocalNotificationsPage');
  }

}
