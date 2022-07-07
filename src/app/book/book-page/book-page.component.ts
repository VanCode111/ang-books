import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.scss'],
})
export class BookPageComponent implements OnInit {
  mode: number = 0;

  constructor(private route: ActivatedRoute, private router: Router) {}

  changePage(num: number): void {
    this.mode = num;
    this.router.navigate([`book/${num}`]);
  }

  ngOnInit(): void {
    const url = this.router.url.split('/');
    this.mode = +url[url.length - 1];
  }
}
