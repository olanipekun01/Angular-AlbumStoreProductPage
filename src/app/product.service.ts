import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { AlbumStorePage } from '../../e2e/app.po';

import { Album } from './album';

@Injectable()
export class ProductService {
  private _albumUrl = "../assets/album.json";
  getAlbum(id: number): Observable<Album> {
    return this._http.get(this._albumUrl).map(response => response.json()<Album>);
  }

  constructor(private _http: Http) {}

}
