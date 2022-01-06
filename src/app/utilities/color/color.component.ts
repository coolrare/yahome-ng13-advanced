import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  type = '';

  type$: Observable<string> = this.route.paramMap
    .pipe(
      map(paramMap => paramMap.get('type') || '')
    )

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('type'));

    this.route.paramMap.subscribe(paramMap => {
      console.log(paramMap.get('type'));
      this.type = paramMap.get('type') || '';
    });
  }

}
