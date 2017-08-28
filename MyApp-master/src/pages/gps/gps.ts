import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation, GeolocationOptions } from '@ionic-native/geolocation';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, LatLng, CameraPosition, Marker, MarkerOptions, MyLocationOptions } from '@ionic-native/google-maps';

@Component({
  selector: 'page-gps',
  templateUrl: 'gps.html',
})
export class GpsPage {
  longData; latData: number;
  currentPosition: string;
  response: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation, public gMaps: GoogleMaps) {

  }


  ionViewWillEnter() {
    this.loadMap();
  }


  loadMap() {

    let element: HTMLElement = document.getElementById('map');

    let map: GoogleMap = this.gMaps.create(element);

    map.one(GoogleMapsEvent.MAP_READY).then(
      () => {

        let myLoc: MyLocationOptions = {
          enableHighAccuracy: true
        }
        
        map.getMyLocation(myLoc).then((response) => {
          this.longData = response.latLng.lng
          this.latData = response.latLng.lat;
          this.response = response.latLng;

          let position: CameraPosition = {
            target: this.response,
            zoom: 18,
            tilt: 30
          }
          map.moveCamera(position);
        })
        map.setMyLocationEnabled(true);

      }
    );
  }


  ionViewDidLoad() {


  }

}
