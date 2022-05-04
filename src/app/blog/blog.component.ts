import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  public blogPreview: any[] = [
    { id: 0, src: "../../../assets/img/Blog-pic-01.png", nick: "SaberAli", date: "Aug 09 2020", title: "Mauris at orci non vulputate diam tincidunt nec.", descript: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at." },
    { id: 1, src: "../../../assets/img/Blog-pic-02.png", nick: "Surfauxion", date: "Aug 09 2020", title: "Aenean vitae in aliquam ultrices lectus. Etiam.", descript: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at." },
    { id: 2, src: "../../../assets/img/Blog-pic-03.png", nick: "SaberAli", date: "Aug 09 2020", title: "Sit nam congue feugiat nisl, mauris amet nisi. ", descript: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at." },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
