import { Component } from '@angular/core';
import { CurdService } from './curd.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'closure';

  a = 5;

  outer():any{
    var b =10;

    function inner(){
      var c = 8 ;
      var d = b+c;
      alert(d);
    }
    (()=>{
    alert(b+this.a);
    }) ();

    inner();
  }
  constructor(private _mgservice : CurdService){  }
    btnClick(){
      this._mgservice.messagealt();
    }
}


