import { Component } from '@angular/core';
import { ContentList } from '../helper-files/content-list';


@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {
  contentList: ContentList = new ContentList();

  constructor(){
    this.contentList.addContent({
      id: 0,
      title: "Dark",
      description:"Dark is a German science fiction thriller television series co-created by Baran bo Odar and Jantje Friese.",
      creator:"Jantje Friese",
      imgURL:"https://m.media-amazon.com/images/I/81oWDX24u+L._UF1000,1000_QL80_.jpg",
      type:"Fictional"
    });
    this.contentList.addContent({
      id: 1,
      title: "Black Mirror",
      description:"As Black Mirror is an anthology series, each episode is standalone and can be watched in any order. The programme is an instance of speculative fiction within science fiction: the majority of episodes are set in dystopian near-futures with novel technologies that exaggerate a trait from contemporary culture, often the internet.",
      creator:"Charlie Brooker",
      imgURL:"https://hips.hearstapps.com/hmg-prod/images/black-mirror-font-1513096756.jpg?crop=1xw:1xh;center,top&resize=980:*",
      type:"Antheology"
    });
    this.contentList.addContent({
      id: 2,
      title: "Mind Hunter",
      description:"In the late 1970s two FBI agents expand criminal science by delving into the psychology of murder and getting uneasily close to all-too-real monsters.",
      creator:"Joe Penhall",
      imgURL:"https://media.vanityfair.com/photos/59e622dcba5ae801ce174b04/4:3/w_1280,h_960,c_limit/mindhunter-review.jpg",
      type:"Thriller"
    });
  }
}