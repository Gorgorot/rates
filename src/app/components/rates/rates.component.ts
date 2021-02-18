import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {RatesService} from '../../services/rates/rates.service';
import {Subscription} from 'rxjs';
import {CdkVirtualScrollViewport} from '@angular/cdk/scrolling';
import {IRate} from '../../model/rate.interface';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.scss']
})
export class RatesComponent implements OnInit, OnDestroy {
  @ViewChild(CdkVirtualScrollViewport, {static: false}) public viewPort: CdkVirtualScrollViewport;

  ratesSubscription: Subscription;

  dataSource: MatTableDataSource<IRate> = new MatTableDataSource<IRate>([]);

  constructor(
    private ratesService: RatesService
  ) {

  }

  ngOnInit(): void {
    this.ratesSubscription = this.ratesService.getRates().subscribe(data => this.dataSource.data = data);
  }

  ngOnDestroy() {
    this.ratesSubscription.unsubscribe();
  }

  public get inverseOfTranslation(): string {
    if (!this.viewPort || !this.viewPort.getOffsetToRenderedContentStart()) {
      return '0';
    }
    return `-${this.viewPort.getOffsetToRenderedContentStart()}px`;
  }
}
