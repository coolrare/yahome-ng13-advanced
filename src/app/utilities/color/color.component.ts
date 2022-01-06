import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  type = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('type'));

    this.route.paramMap.subscribe(paramMap => {
      console.log(paramMap.get('type'));
      this.type = paramMap.get('type') || '';
    });
  }

}
