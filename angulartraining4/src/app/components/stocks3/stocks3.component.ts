import { Component, OnInit } from '@angular/core';
import { IStockDetails } from 'src/app/models/stock.model';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-stocks3',
  templateUrl: './stocks3.component.html',
  styleUrls: ['./stocks3.component.css']
})
export class Stocks3Component implements OnInit {
  public stock3Records:IStockDetails[]
  constructor(public stockService:StockService) {
    this.stock3Records = [];
  }

  public ngOnInit(): void {
    this.stock3Records = this.stockService.getStocksRecords();
  }
}