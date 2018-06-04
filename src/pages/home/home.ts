import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GeneroPage } from '../genero/genero';
import { CurpService } from '../../services/service';
import { compareDates } from 'ionic-angular/util/datetime-util';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public data:any={ 
    curp:"",
    letra:true
}

  constructor(public navCtrl: NavController, public curpSrv:CurpService) {
    this.curpSrv.curp="";
    
    this.curpSrv.letra=true;
    
  }
  Adivina() {
      this.curpSrv.curp=this.data.curp;
      console.log("curp"+this.data.curp);
      this.navCtrl.push(GeneroPage);
  }

}
