import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class RedditApiService {

  private redditBaseUrl = 'http://www.reddit.com/r/';

  constructor(private http: Http) {}

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  public getHotListings(subreddit: string): Promise<any> {
    return this.http.get(`${this.redditBaseUrl}${subreddit}/hot.json`)
      .toPromise()
      .then(response => response.json().data.children)
      .catch(this.handleError);
  }

}
