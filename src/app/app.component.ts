import { NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { Component } from '@angular/core';
import { combineLatest } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'yahome-ng13-advanced';
  loading = true;

  constructor(private router: Router) {

    // [1, 2, 3, 4].filter(item => item % 2 === 0); // [2, 4]

    router.events.subscribe(event => {
      if(event instanceof NavigationStart) {
        this.loading = true;
      }
      if(event instanceof NavigationEnd || event instanceof NavigationError) {
        this.loading = false;
      }
    });

    const navigationStart$ = router.events.pipe(
      filter(event => event instanceof NavigationStart)
    );

    const navigationEnd$ = router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    );

    const navigationError$ = router.events.pipe(
      filter(event => event instanceof NavigationError)
    )

    const loading$ = navigationStart$;
    const loaded$ = combineLatest([navigationEnd$, navigationError$]);

    loading$.subscribe(() => {
      this.loading = true;
    });

    loaded$.subscribe(() => {
      this.loading = false;
    })
  }

  ngOnInit(): void {

  }
}
