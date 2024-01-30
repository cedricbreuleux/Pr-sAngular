import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-on-this-day',
  standalone: true,
  imports: [
    CommonModule, HttpClientModule
  ],
  templateUrl: './OnThisDay.component.html',
  styleUrl: './OnThisDay.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnThisDayComponent { 
  
  private uRL: string = "https://fr.wikipedia.org/api/rest_v1/feed/onthisday/all/"
  constructor(private http:HttpClient, private route: ActivatedRoute){
  }

  // Observable contenant des evenements
  events = new BehaviorSubject<Array<{text:string, pages:any, year:number }>>([]);
  ngOnInit() {

    // recup le params day
    const day = this.route.snapshot.queryParams['day'];
    // recup le params month
    const month = this.route.snapshot.queryParams['month'] + "/";

    // fait un fetch a une api
    this.http.get<any>(this.uRL+month+day).subscribe(data =>{
      this.events.next(data.events)
      console.log(this.events.value)
    })
  }
}
