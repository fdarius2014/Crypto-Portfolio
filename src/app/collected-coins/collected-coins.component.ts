import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collected-coins',
  templateUrl: './collected-coins.component.html',
  styleUrls: ['./collected-coins.component.css']
})
export class CollectedCoinsComponent implements OnInit {

   coinsInformation;
   constructor() { }

   ngOnInit() {

     console.log('CoinsCollected running...')
      this.coinsInformation = [
          {
              name: 'Bitcoin',
              industry: 'Finance',
              website: 'www.currency.com',
              usp: 'Anonymous currency',
              buy_price: '$3900',
              current_price: '$4249',
              target_return: '$342',
              selling_price: '$4893',
              total_investment: '$20,000',
              profit_calculation: '$240'
          },

          {
              name: 'Augur',
              industry: 'Finance',
              website: 'www.currency.com',
              usp: 'Anonymous currency',
              buy_price: '$3730',
              current_price: '$6239',
              target_return: '$452',
              selling_price: '$5198',
              total_investment: '$15,000',
              profit_calculation: '$314'
          }
      ];
  }

}
