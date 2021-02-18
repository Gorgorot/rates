import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IRate} from '../../model/rate.interface';

@Injectable({
  providedIn: 'root'
})
export class RatesService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getRates(): Observable<Array<IRate>> {
    return this.httpClient.get<Array<IRate>>('https://api.binance.com/api/v3/ticker/price');
  }
}
