import { Component, OnInit, Input } from '@angular/core';
import { RedditApiService } from '../reddit-api.service';

@Component({
  selector: 'reddit-block',
  templateUrl: './reddit-block.component.html',
  styleUrls: ['./reddit-block.component.css'],
  providers: [RedditApiService]
})

export class RedditBlockComponent implements OnInit {
  @Input() subreddit: string;
  public listings: any;
  public loading: boolean;

  constructor(private redditApi: RedditApiService) {}

  public getListings() {
    this.loading = true;
    this.redditApi.getHotListings(this.subreddit).then((response) => {
      this.listings = response.map(item => item.data);
      this.loading = false;
    });
  }

  ngOnInit() {
    this.getListings();
  }

}
