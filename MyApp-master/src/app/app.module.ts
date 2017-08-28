import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps } from '@ionic-native/google-maps';
import {  BLE  } from '@ionic-native/ble';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';

import { MyApp } from './app.component';
import { MainPage } from'../pages/main/main';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login'
import { RegisterPage } from '../pages/register/register';
import { EditPage } from '../pages/edit/edit';
import { CameraPage } from '../pages/camera/camera';
import { GpsPage } from '../pages/gps/gps';
import { BlePage } from '../pages/ble/ble';
import { ScannerPage } from '../pages/scanner/scanner';
import { LocalNotificationsPage } from '../pages/local-notifications/local-notifications';
import { BluetoothSerialPage } from '../pages/bluetooth-serial/bluetooth-serial';

import { ColorPickerModule } from 'ngx-color-picker';

import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'

export const config = {
  apiKey: "AIzaSyCvHlCrE7PuUSP_5MTgrOh5za1Pkc2apF0",
  authDomain: "claseune-a049e.firebaseapp.com",
  databaseURL: "https://claseune-a049e.firebaseio.com",
  projectId: "claseune-a049e",
  storageBucket: "claseune-a049e.appspot.com",
  messagingSenderId: "89452255117"
};

firebase.initializeApp(config)

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MainPage,
    LoginPage,
    RegisterPage,
    CameraPage,
    GpsPage,
    BlePage,
    EditPage,
    ScannerPage,
    LocalNotificationsPage,
    BluetoothSerialPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    ColorPickerModule,
    AngularFireModule.initializeApp(config),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MainPage,
    LoginPage,
    RegisterPage,
    CameraPage,
    GpsPage,
    BlePage,
    EditPage,
    ScannerPage,
    LocalNotificationsPage,
    BluetoothSerialPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    Geolocation,
    GoogleMaps,
    BLE,
    BarcodeScanner,
    LocalNotifications,
    BluetoothSerial,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
