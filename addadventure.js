const admin = require("firebase-admin");
const serviceAccount = require("./private-key.json"); // Replace with your own serviceAccountKey.json file

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://my-awesome-project-741eb.firebaseio.com"
});
const db = admin.firestore();
const adventures = [
  {
    "id": 1,
    "name": "Camp Drems",
    "description": "A package of camp in the Nature some Bali,india,Tailande",
    "price": 420,
    "image": "https://img.ltwebstatic.com/images3_pi/2023/04/13/1681356780f4a7a02c03521ef90b240478967358d6_thumbnail_405x552.webp",
    "category": "Groupe"

  },
  
  {
    "id": 2,
    "name": "Ballon rides",
    "description": "oar above the earth in a colorful hot air balloon and experience the beauty of the world from a breathtaking perspective.",
    "price": 679,
    "image": "https://img.ltwebstatic.com/images3_pi/2023/04/13/1681356780f4a7a02c03521ef90b240478967358d6_thumbnail_405x552.webp",
    "category": "Individuel"
  },
  {
    "id": 3,
    "name": "caving",
    "description": " Embark on an underground exploration like no other with caving. Descend into the depths of the earth and navigate through mysterious caverns, winding tunnels",
    "price": 369,
    "image": "https://img.ltwebstatic.com/images3_pi/2021/11/09/163647132363274039b3864aa7bf16262c07f34c25_thumbnail_405x552.webp",
    "category": "Groupe"
  },
  {
    "id": 4,
    "name": "Snowboarding",
    "description": "Strap on your snowboard and hit the slopes for an exhilarating winter adventure. ",
    "price": 123,
    "image": "https://img.ltwebstatic.com/images3_pi/2021/12/07/1638868034c7477fd085e9d5ad2bbcfa4a2c72d125_thumbnail_405x552.webp",
    "category": "Individuel"
  },
  {
    "id": 5,
    "name": "Rafting",
    "description": "Brace yourself for an adrenaline-pumping aquatic adventure as you navigate turbulent rivers and conquer roaring rapids.",
    "price": 989,
    "image": "https://img.ltwebstatic.com/images3_pi/2023/04/07/16808653700be32a5c7a1732976f0b199dd7f2d346.webp",
    "category": "Groupe"
  },
  {
    "id": 6,
    "name": "Deep-Sea Diving",
    "description": "Dive into the depths of the ocean and explore a mesmerizing underwater world filled with vibrant coral reefs, fascinating marine life, and hidden treasures. ",
    "price": 29,
    "image": "https://img.ltwebstatic.com/images3_pi/2022/10/17/166597084722625232e347d77c96311ad1a366c7a6_thumbnail_405x552.webp",
    "category": "Individuel"

  },
{
  "id": 7,
  "name": "Rope Game in the Mountains",
  "description": "Challenge your inner adventurer and test your physical and mental prowess with a thrilling rope game set amidst the breathtaking mountains. ",
  "price": 699,
  "image": "https://img.ltwebstatic.com/images3_pi/2022/08/30/1661835776159d0e5e9ce5e73ca78e55cd576e0f5b_thumbnail_405x552.webp",
  "category": "Groupe"
}
,
{
  "id": 8,
  "name": "Zip-lining",
  "description": " Soar through the air like a bird as you zip along suspended cables, taking in breathtaking views of forests, canyons, or even urban landscapes.",
  "price": 349.50,
  "image": "https://img.ltwebstatic.com/images3_pi/2022/09/21/16637229171065293abb3bf096fc0b5b7fbbff650b_thumbnail_405x552.webp",
  "category": "Individuel"
},
   { "id": 9,
    "name": "Paragliding",
    "description": "Experience the sensation of flying as you glide through the air with a paraglider..",
    "price": 729.99,
    "image": "https://img.ltwebstatic.com/images3_pi/2021/05/24/16218436019caaca63f842b6cff658544bf5eee780_thumbnail_405x552.webp",
    "category": "Individuel"
  },
{
    "id": 10,
    "name": "Hiking",
    "description": " Lace up your boots, hit the trails, and immerse yourself in the beauty of nature with hiking. Explore scenic routes",
    "price": 1119.99,
    "image": "https://img.ltwebstatic.com/images3_pi/2021/08/23/1629687579a1733d17d98513ced141bcd90f649c75_thumbnail_405x552.webp",
    "category": "Individuel"
  },
{
    "id": 11,
    "name": "Bungee Jumping",
    "description": "Take a leap of faith and feel the ultimate rush of adrenaline as you plunge from a tall structure",
    "price": 1269.99,
    "image": "https://img.ltwebstatic.com/images3_pi/2022/05/27/16536212556ed6490c756f2319579813b0e6c80a44.webp",
    "category": "Individuel"
  },
{
    "id": 12,
    "name": "Horseback Riding",
    "description": "Embark on a journey through picturesque landscapes on the back of a majestic horse.",
    "price": 249.99,
    "image": "https://img.ltwebstatic.com/images3_pi/2022/12/26/16720379493009419209995312408d02f81f967c85_thumbnail_405x552.webp",
    "category": "Individuel"
  },
{
    "id": 13 ,
    "name": " Rock Climbing",
    "description": " Challenge yourself both physically and mentally as you ascend towering cliffs and conquer vertical walls",
    "price": 289.69,
    "image": "https://img.ltwebstatic.com/images3_pi/2023/01/16/1673842096f03ade3c9e54b46105c1d645416517b0_thumbnail_405x552.webp",
    "category": "Individuel"
  },
   { "id": 14,
    "name": "Helicopter Tours",
    "description": "Take to the skies and witness breathtaking aerial views of iconic landmarks, stunning landscapes, or vibrant cityscapes ",
    "price": 69.99,
    "image": "https://img.ltwebstatic.com/images3_pi/2022/05/31/1653987018390ca813cd2cd41aa9a17021583b1d97_thumbnail_405x552.webp",
    "category": "Individuel"
  }
  
  ]
    products.forEach(adventures => {
      db.collection("adventures").add({
        id: adventures.id,
        name: adventures.name,
        description: adventures.description,
        price: adventures.price,
        image: adventures.image,
        category: adventures.category,
       
      })
      .then(docRef => {
        console.log("adventure added with ID: ", docRef.id);
      })
      .catch(error => {
        console.error("Error adding adventure: ", error);
      });
    });
