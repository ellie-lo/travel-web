import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoadingService } from './loading.service';
import { finalize } from 'rxjs/operators'
import { environment } from 'src/environments/environment';

@Injectable()
export class NetworkInterceptor implements HttpInterceptor {

  constructor(private loader: LoadingService) { }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // let handler = null;
    // const newRequest = request.clone({ url: `${environment.baseUrl}` });

    this.loader.startLoading();
    return next.handle(request.clone({url:`${environment.baseUrl}${request.url}`}))
    .pipe(finalize(() => {
      this.loader.stopLoading();
    })
    );




    // return next
    //   .handle(request)
    //   .pipe(finalize(() => {
    //     this.loader.stopLoading();
    //   })
    //   );


  }
}
