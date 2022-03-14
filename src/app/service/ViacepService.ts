import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ViaCepModel} from "../model/ViaCepModel";

@Injectable({
  providedIn: 'root'
})
export class ViacepService{
  baseURL = `${environment.viacepApi}`;
  constructor(private http: HttpClient) { }

  getEndereco(cep:string):  Observable<ViaCepModel> {
    const params = new HttpParams();
    params.append('cep',cep)
    return this.http.get<ViaCepModel>(this.baseURL,{params:params});
  }

}
