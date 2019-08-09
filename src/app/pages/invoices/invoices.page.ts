import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.page.html',
  styleUrls: ['./invoices.page.scss'],
})
export class InvoicesPage implements OnInit {

  buttonBackOpenColor : string = '#feae2a';
  buttonTextOpenColor : string = '#ffffff';

  buttonBackCompletedColor : string = '#ffffff';
  buttonTextCompletedColor : string = '#feae2a';

  constructor() { }

  ngOnInit() {
  }

  onButtonClick(clickedButton : string){

    if(clickedButton === 'open'){
      this.buttonBackOpenColor  = '#feae2a';
      this.buttonTextOpenColor  = '#ffffff';
      this.buttonBackCompletedColor  = '#ffffff';
      this.buttonTextCompletedColor = '#feae2a';
    }else{
      this.buttonBackOpenColor  = '#ffffff';
      this.buttonTextOpenColor  = '#feae2a';
      this.buttonBackCompletedColor  = '#feae2a';
      this.buttonTextCompletedColor = '#ffffff';
    }

  }

}
