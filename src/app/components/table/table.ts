import { Component, inject, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../../services/investment.service';
import { InvestmentData } from '../../model/investment.model';

@Component({
  imports: [CurrencyPipe],
  selector: 'app-table',
  styleUrl: './table.css',
  templateUrl: './table.html',
})
export class Table {

  private investmentService = inject(InvestmentService);

  get data(): InvestmentData[]{
    return this.investmentService.data();
  }
}
