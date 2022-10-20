import { Component, OnInit } from '@angular/core';
import { IStockDetails } from 'src/app/models/stock.model';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-stocks2',
  templateUrl: './stocks2.component.html',
  styleUrls: ['./stocks2.component.css']
})
export class Stocks2Component implements OnInit {
  public stock2Records:IStockDetails[]
  constructor(public stockService:StockService) {
    this.stock2Records = [];
  }

  public ngOnInit(): void {
    this.stock2Records = this.stockService.getStocksRecords();
  }

}
