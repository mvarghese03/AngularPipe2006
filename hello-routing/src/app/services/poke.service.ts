import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs' ;
/* Rxjs is reactive extension of JS, contains Observables, BehavioralSubjects, promises etc.

*/

export interface Pokes{

  'name':string;
  'id': number;
  'base_experience': number;

}
@Injectable({
  providedIn: 'root'
})
export class PokeService {
  private url ='https://pokeapi.co/api/v2/pokemon/123'

  constructor(private httpCli: HttpClient) { }

  /* An observable is like a promise, and is used to subscribe to information publised to a stream
all subscribers are then notified when new information is available in the stream(network). The subscriber callback function is then
invoked

unlike promises, observables can be synchronous or asynchronous. They can provide 0 to many values.
Promises can only have 1 activation, Observable can have 0 to 1 to many activations.
  */
  retrievePokemon(): Observable<string> {
    return this.httpCli.get<string>(this.url);
  }

  retrievePokemon2(): Observable<Pokes> {
    return this.httpCli.get<Pokes>(this.url);
  }


}
