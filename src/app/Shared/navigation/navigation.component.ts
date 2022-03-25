import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }
  public menu = [

    {"title": "home", "path": "home",
      "subMenu": [
        { "title": "about us", "path": "about-us", },
        //{ "title": "shipping", "path": "shipping" },
        { "title": "FAQ", "path": "faq" }
      ]
    },
    // {
    //   "title": "pages", "path": "pages"

    // },

    {
      "title": "products", "path": "products"

    },

    {
      "title": "blog", "path": "blog"

    },
    // {
    //   "title": "shop", "path": "shop"

    // },
    {
      "title": "contact", "path": "contact"

    },
  ]

  // navigateTo(item: string)  {
  //   this.router.navigate([`${item}`])
  // }

  ngOnInit(): void {
  }

  onNavigate(path: string) {
    this.router.navigate([`${path}`])
    console.log(path) 
  }

}
