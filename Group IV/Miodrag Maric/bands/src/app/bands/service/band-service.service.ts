import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { Band } from '../../../shared/model/band.model';

@Injectable()
export class BandService {

  constructor(private httpClient: HttpClient) {}

  getBandsData() {
    return this.httpClient.get<Band[]>('../../../assets/data/band-data.json')
      .map(band => band);
  }

}
