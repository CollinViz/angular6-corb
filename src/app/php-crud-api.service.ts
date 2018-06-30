import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Observable ,throwError,BehaviorSubject } from 'rxjs';
 
import { catchError, retry } from 'rxjs/operators'; 
import { ASTWithSource } from '@angular/compiler'; 

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class PhpCrudApiService {
  baseURL = 'http://localhost:8000/src/index.php/data/';
  baseViewURL = 'http://localhost:8000/src/index.php/view/';

  constructor(private http: HttpClient) {

   }

  getTableData(TableName:string,Options:string){
    return this.http.get<any>(this.baseURL + TableName + (Options===""?"":"?"+Options), httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  getRowData(TableName:string,KeyID:string){
    return this.http.get<any>(this.baseURL + TableName + "/"+KeyID, httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  CreateTableData(TableName:string,DataSave:any){
    return this.http.post<any>(this.baseURL + TableName,DataSave, httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  updateTableData(TableName:string,KeyID:string,DataSave:any){
    return this.http.put<any>(this.baseURL + TableName+ "/"+KeyID,DataSave, httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
