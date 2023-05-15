import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements OnInit {
  public aventurelist:any;

  constructor(private router: Router) {}
  goToDetails() {
    this.router.navigate(['/details']);
  }
datalist= [
  {
    "id": 1,
    "name": "Camp Drems",
    "description": "A package of camp in the Nature some Bali,india,Tailande",
    "price": 420,
    "image": "https://images.unsplash.com/photo-1537905569824-f89f14cceb68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FtcGluZ3xlbnwwfHwwfHw%3D&w=1000&q=80",
    "category": "Groupe"

  },
  
  {
    "id": 2,
    "name": "Ballon rides",
    "description": "oar above the earth in a colorful hot air balloon and experience the beauty of the world from a breathtaking perspective.",
    "price": 679,
    "image": "https://www.exploreminnesota.com/sites/default/files/listing_images/68cfc57ed7f1a823ab6d4142f5a687e28dc3c3ed_18.jpg",
    "category": "Individuel"
  },
  {
    "id": 3,
    "name": "Caving",
    "description": " Embark on an underground exploration like no other with caving. Descend into the depths of the earth and navigate through mysterious caverns, winding tunnels",
    "price": 369,
    "image": "https://media.istockphoto.com/id/510242269/photo/thread-the-needle.jpg?s=612x612&w=0&k=20&c=DY36_x1CcQvrcbE9qMwFY6rl4fnAsmPqJ8vBrXd1JMQ=",
    "category": "Groupe"
  },
  {
    "id": 4,
    "name": "Snowboarding",
    "description": "Strap on your snowboard and hit the slopes for an exhilarating winter adventure. ",
    "price": 123,
    "image": "https://nationaltoday.com/wp-content/uploads/2022/02/World-Snowboard-Day.jpg",
    "category": "Individuel"
  },
  {
    "id": 6,
    "name": "Deep-Sea Diving",
    "description": "Dive into the depths of the ocean and explore a mesmerizing underwater world filled with vibrant coral reefs, fascinating marine life, and hidden treasures. ",
    "price": 29,
    "image": "https://cutewallpaper.org/28/cool-diver-wallpaper/2280-best-free-scuba-diving-stock-photos-images-%C2%B7-100-royaltyfree-hd-downloads.jpeg",
    "category": "Individuel"

  },
  {
    "id": 5,
    "name": "Rafting",
    "description": "Brace yourself for an adrenaline-pumping aquatic adventure as you navigate turbulent rivers and conquer roaring rapids.",
    "price": 989,
    "image": "https://www.plitviceoutdoor.com/system/wp-content/uploads/elementor/thumbs/Una-river-Rafting-1-p48wieezz5k2msso5pplv5d7qr1f3okb8zqyle3euc.jpg",
    "category": "Groupe"
  },
  
{
  "id": 7,
  "name": "Rope Game Mountain",
  "description": "Challenge your inner adventurer and test your physical and mental prowess with a thrilling rope game set amidst the breathtaking mountains. ",
  "price": 699,
  "image": "https://www.guide-bearn-pyrenees.com/_bibli/annonces/2877/hd/laruns-aventures-21-06.jpg",
  "category": "Groupe"
}
,
{
  "id": 8,
  "name": "Zip-lining",
  "description": " Soar through the air like a bird as you zip along suspended cables, taking in breathtaking views of forests, canyons, or even urban landscapes.",
  "price": 349.50,
  "image": "https://cdn.britannica.com/42/117042-050-0B501E54/Ice-climber-mountain.jpg",
  "category": "Individuel"
},
   { "id": 9,
    "name": "Paragliding",
    "description": "Experience the sensation of flying as you glide through the air with a paraglider..",
    "price": 729.99,
    "image": "https://www.kevinandamanda.com/wp-content/uploads/2021/12/G0056963-scaled.jpg",
    "category": "Individuel"
  },
{
    "id": 10,
    "name": "Hiking",
    "description": " Lace up your boots, hit the trails, and immerse yourself in the beauty of nature with hiking. Explore scenic routes",
    "price": 1119.99,
    "image": "https://images.unsplash.com/photo-1586022045497-31fcf76fa6cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhpa2luZ3xlbnwwfHwwfHw%3D&w=1000&q=80",
    "category": "Individuel"
  },
{
    "id": 11,
    "name": "Bungee Jumping",
    "description": "Take a leap of faith and feel the ultimate rush of adrenaline as you plunge from a tall structure",
    "price": 1269.99,
    "image": "https://ukbungee.co.uk/files/image/1406/1633439402_IMG_7474.jpg",
    "category": "Individuel"
  },
  {
    "id": 13 ,
    "name": " Rock Climbing",
    "description": " Challenge yourself both physically and mentally as you ascend towering cliffs and conquer vertical walls",
    "price": 289.69,
    "image": "https://static01.nyt.com/images/2021/10/27/fashion/00NeverTooLate-Climber1-print/00NeverTooLate-Climber2-mediumSquareAt3X.jpg",
    "category": "Individuel"
  },
{
    "id": 12,
    "name": "Horseback Riding",
    "description": "Embark on a journey through picturesque landscapes on the back of a majestic horse.",
    "price": 245.79,
    "image": "https://www.middletonplaceequestriancenter.com/uploads/1/2/2/8/122899391/mpec-trail-rides-high-res-31_orig.jpg",
    "category": "Groupe"
  },

   { "id": 14,
    "name": "Helicopter Tours",
    "description": "Take to the skies and witness breathtaking aerial views of iconic landmarks, stunning landscapes, or vibrant cityscapes ",
    "price": 169.99,
    "image": "https://www.helodays.com/images/magnum-pi-helicopter-tour-guide.jpg",
    "category": "Groupe"
  },
  { "id": 19,
    "name": "Fear Challenge",
    "description": "Make you into our challenge in different specialies and mountains. ",
    "price": 244.30,
    "image": "https://images.unsplash.com/photo-1613471529893-c46ea18a78be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    "category": "Groupe"
  }
  
  ]

ngOnInit(): void {
 
}
}
