// @ts-ignore
import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
// @ts-ignore
import {Observable} from "rxjs";
import {ViaCepModel} from "../model/ViaCepModel";

// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class ViacepService {
  baseURL = `${environment.viacepApi}`;

  constructor(private http: HttpClient) {
  }

  getEndereco(cep: string): Observable<ViaCepModel> {
    return this.http.get<ViaCepModel>(this.baseURL, {params: {cep: cep}});
  }

}
