import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

import { ContentCardComponent } from '../content-card/content-card.component';
import { TypegiverPipe } from '../typegiver.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule, ContentCardComponent, TypegiverPipe, FormsModule],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent implements OnInit {
  DisplayContentInformation(contentItem: Content) {
    console.log(`ID: ${contentItem.id} and Title: ${contentItem.title}`);
    }
  @Input () contentItems: Content[] = [];

  searchTitle: string = '';
  contentExists: boolean = false;
  message: string = '';  
  selectedTitle: string | null = null;

  checkContentExists() {
    const foundItem = this.contentItems.find(item => item.title.toLowerCase() === this.searchTitle.toLowerCase());
    this.contentExists = !!foundItem;
    this.message = foundItem ? 'Content item exists.' : 'Content item does not exist.';
    this.selectedTitle = foundItem ? foundItem.title : null;
  }
  ngOnInit(): void {
    this.contentItems =[
      {
        id: 1,
        title: "Black Mirror",
        description:"As Black Mirror is an anthology series, each episode is standalone and can be watched in any order. The programme is an instance of speculative fiction within science fiction: the majority of episodes are set in dystopian near-futures with novel technologies that exaggerate a trait from contemporary culture, often the internet.",
        creator:"Charlie Brooker",
        imgURL:"https://hips.hearstapps.com/hmg-prod/images/black-mirror-font-1513096756.jpg?crop=1xw:1xh;center,top&resize=980:*",
        type:"Reality",
        tags: ["Suspense", "Thriller"]
      },
      {
        id: 2,
        title: "Mind Hunter",
        description:"In the late 1970s two FBI agents expand criminal science by delving into the psychology of murder and getting uneasily close to all-too-real monsters.",
        creator:"Joe Penhall",
        imgURL:"https://media.vanityfair.com/photos/59e622dcba5ae801ce174b04/4:3/w_1280,h_960,c_limit/mindhunter-review.jpg",
        type:"Reality",
        tags: ["Old", "Scientific"]
      },
      {
        id: 3,
        title: "Dark",
        description:"Dark is a German science fiction thriller television series co-created by Baran bo Odar and Jantje Friese.",
        creator:"Jantje Friese",
        imgURL:"https://m.media-amazon.com/images/I/81oWDX24u+L._UF1000,1000_QL80_.jpg",
        type:"Reality",
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
        type: "",
        tags: ["Throne", "Old"]
      },
      {
        id: 6,
        title: "The 100",
        description: "The show about survival after the earth is not habitable",
        creator: "Jason Rothenberg",
        imgURL: "https://m.media-amazon.com/images/M/MV5BNjRiYTIzZmUtMTFkNS00ZTM0LWE4ODAtMDliMGE4NzM5ZjVlXkEyXkFqcGdeQXVyNDQ0MTYzMDA@._V1_.jpg",
        type: "Fictional",
        tags: ["Survival", "Action"]
      },
      {
        id: 7,
        title: "Asur",
        description: "it is a psychological thriller and crime involvement show",
        creator: "Gaurav Shukla",
        imgURL: "https://m.media-amazon.com/images/M/MV5BZWJiMDZmNTAtZDg5YS00NDgyLThkMzctYTczZjllNzU0YWY5XkEyXkFqcGdeQXVyMTAwMDI3ODEw._V1_.jpg",
        type: "Fictional",
        tags: ["Psychological", "Mind-bending"]
      }
      
    ];
  }
 
}