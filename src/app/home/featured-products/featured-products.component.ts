import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css']
})
export class FeaturedProductsComponent implements OnInit , AfterViewInit {
  
  productCards: {id: number, name: string, code: string, price: string, src:string}[] = [
    {id: 0, name: "Cantilever chair", code: "Y523201", price: "$42.00", src:'https://picsum.photos/178'},
    {id: 1, name: "Butterfly chair", code: "Y132846", price: "$59.00", src:'https://picsum.photos/178'},
    {id: 2, name: "Classic Blue chair", code: "Y432879", price: "$23.00", src:'https://picsum.photos/178'},
    {id: 3, name: "Assy chair", code: "Y493579", price: "$41.00", src:'https://picsum.photos/178'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    //https://reactgo.com/add-event-listener-multiple-elements-javascript/
    //https://www.sitepoint.com/community/t/typescript-with-queryselector-issues/341361

    //https://flaviocopes.com/how-to-add-event-listener-multiple-elements-javascript/
    //https://stackoverflow.com/questions/7184562/how-to-get-elements-with-multiple-classes
    //https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll#accessing_the_matches
    

    const cardBody = document.querySelector('.card-body') as HTMLElement;
    const cardTitle = document.querySelector('.card-title') as HTMLElement;
    const cardPrice = document.querySelector('.card-price') as HTMLElement;

    [cardBody, cardTitle, cardPrice].forEach(card => {
      card.addEventListener('mouseover', (e: Event) =>{
        e.style.color = 'red'
        
      })
    })

    // const cards = document.querySelectorAll('.card-body.card-title') as NodeListOf<Element>
  
    // cards.forEach(card => {
    //   card.addEventListener('mouseover', (e: Event) => {
    //     e.target.style;  
    //   })
    // })
  }

  

}
