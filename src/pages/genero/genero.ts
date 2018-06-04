import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CurpService } from "../../services/service";
import { HomePage } from '../home/home';

/**
 * Generated class for the GeneroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-genero',
  templateUrl: 'genero.html',
})
export class GeneroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public curpSrv: CurpService) {
    console.log(`Curp: ${this.curpSrv.curp}`);
    this.curpSrv.letra="H"==this.curpSrv.curp.substring(10,11);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeneroPage');
  }

  atras(){
    this.navCtrl.pop();
  }

}
