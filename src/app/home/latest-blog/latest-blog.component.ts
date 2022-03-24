import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-blog',
  templateUrl: './latest-blog.component.html',
  styleUrls: ['./latest-blog.component.css']
})
export class LatestBlogComponent implements OnInit {

  public blogInfo: any[] = [
    { id: 0, src: "../../../assets/img/late-blog-01.png", nick: "SaberAli", date: "21 August,2020", title: "Top esssential Trends in 2021", descript: "More off this less hello samlande lied muchover tightly circa horse taped mightly" },
    { id: 1, src: "../../../assets/img/late-blog-02.png", nick: "Surfauxion", date: "21 August,2020", title: "Top esssential Trends in 2021", descript: "More off this less hello samlande lied muchover tightly circa horse taped mightly" },
    { id: 2, src: "../../../assets/img/late-blog-03.png", nick: "SaberAli", date: "21 August,2020", title: "Top esssential Trends in 2021", descript: "More off this less hello samlande lied muchover tightly circa horse taped mightly" },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
