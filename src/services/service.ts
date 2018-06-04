import { Injectable } from "@angular/core";

@Injectable()

export class CurpService{
    private _curp:string;
    private _letra:boolean;
    
    

    /**
     *
     */
    constructor() {
               
    }

    
    set curp(newVal:string) {
        this._curp=newVal;
    }

    get curp() : string {
        return this._curp;
    }

    set letra(newVal:boolean) {
        this._letra=newVal;
    }

    get letra() : boolean {
        return this._letra;
    }
    
    

}