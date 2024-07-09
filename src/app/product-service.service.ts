import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  http = inject(HttpClient)

  async loadAllProducts():Promise<any> {
    const productLists = this.http.get('https://fakestoreapi.com/products');
    const response = await firstValueFrom(productLists);
    return response
  }
}
