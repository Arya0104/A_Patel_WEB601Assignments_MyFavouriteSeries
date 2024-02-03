import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent implements OnInit {
  displayContentInfo(contentItem: Content) {
    console.log(`ID: ${contentItem.id} and Title: ${contentItem.title}`);
    }
  @Input () contentItems: Content[] = [];

  ngOnInit(): void {
    this.contentItems =[
      {
        id: 1,
        title: "Black Mirror",
        description:"As Black Mirror is an anthology series, each episode is standalone and can be watched in any order. The programme is an instance of speculative fiction within science fiction: the majority of episodes are set in dystopian near-futures with novel technologies that exaggerate a trait from contemporary culture, often the internet.",
        creator:"Charlie Brooker",
        imgURL:"https://hips.hearstapps.com/hmg-prod/images/black-mirror-font-1513096756.jpg?crop=1xw:1xh;center,top&resize=980:*",
        type:"Antheology",
        tags: ["Suspense", "Thriller"]
      },
      {
        id: 2,
        title: "Mind Hunter",
        description:"In the late 1970s two FBI agents expand criminal science by delving into the psychology of murder and getting uneasily close to all-too-real monsters.",
        creator:"Joe Penhall",
        imgURL:"https://media.vanityfair.com/photos/59e622dcba5ae801ce174b04/4:3/w_1280,h_960,c_limit/mindhunter-review.jpg",
        type:"Thriller",
        tags: ["Old", "Scientific"]
      },
      {
        id: 3,
        title: "Dark",
        description:"Dark is a German science fiction thriller television series co-created by Baran bo Odar and Jantje Friese.",
        creator:"Jantje Friese",
        imgURL:"https://m.media-amazon.com/images/I/81oWDX24u+L._UF1000,1000_QL80_.jpg",
        type:"Fictional",
        tags: ["Thriller", "Germany"]
      },
      {
        id: 4,
        title: "Money Heist",
        description: "A web series of roberry planners.",
        creator: "Alex Pina",
        imgURL: "https://m.timesofindia.com/photo/88120955/88120955.jpg",
        type: "Fictional",
        tags: ["Robbery", "Planning"]
      },
      {
        id: 5,
        title: "Game of Thrones",
        description: "The series follows several simultaneous plot lines. The first story arc follows a war of succession among competing claimants for control of the Iron Throne of the Seven Kingdoms, with other noble families fighting for independence from the throne.",
        creator: "David Banioff",
        imgURL: "https://www.hollywoodreporter.com/wp-content/uploads/2023/08/230822_GOTRPG_GTM_WebsiteKeyArt_NoLogo_1080x1080-copy.jpg?w=1296",
        type: "History",
        tags: ["Throne", "Old"]
      }
      
    ];
  }
 
}