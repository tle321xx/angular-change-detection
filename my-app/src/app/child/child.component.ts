import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {
  @Input() Counter !: Observable<any>; 
  count : any;

  // 1.
  countsubscription !: Subscription;
  // 2.
  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.countsubscription = this.Counter.subscribe(
      data => {
        this.count = data.count;
        this.cd.markForCheck();
      },
      err => { console.log(err) },
      () => console.log('complete')
    )
  }

  ngOnDestroy() {
    this.countsubscription.unsubscribe();
  }

}
