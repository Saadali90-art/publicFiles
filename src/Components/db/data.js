// ======================= DATA CONTAINING VARIABLES =============================

const images = [
  {
    img: "/carousel/first.jpeg",
    heading: "Global Era of Star",
    description:
      "In a futuristic world blessed by cosmic power, new heroes rise to protect humanity.In a futuristic world blessed by cosmic power, new heroes rise to protect humanityIn a futuristic world blessed by cosmic power, new heroes rise to protect humanity",
  },
  {
    img: "/carousel/second.jpeg",
    heading: "Lord of Mysterious",
    description:
      "In a futuristic world blessed by cosmic power, new heroes rise to protect humanity.In a futuristic world blessed by cosmic power, new heroes rise to protect humanityIn a futuristic world blessed by cosmic power, new heroes rise to protect humanity In a futuristic world blessed by cosmic power, new heroes rise to protect humanity.In a futuristic world blessed by cosmic power, new heroes rise to protect humanityIn a futuristic world blessed by cosmic power, new heroes rise to protect humanity",
  },
  {
    img: "/carousel/third.jpeg",
    heading: "Son of Hades",
    description:
      "In a futuristic world blessed by cosmic power, new heroes rise to protect humanity.In a futuristic world blessed by cosmic power, new heroes rise to protect humanityIn a futuristic world blessed by cosmic power, new heroes rise to protect humanity In a futuristic world blessed by cosmic power, new heroes rise to protect humanity.In a futuristic world blessed by cosmic power, new heroes rise to protect humanityIn a futuristic world blessed by cosmic power, new heroes rise to protect humanity",
  },
  {
    img: "/carousel/four.jpeg",
    heading: "Strongest Hammer",
    description:
      "In a futuristic world blessed by cosmic power, new heroes rise to protect humanity.In a futuristic world blessed by cosmic power, new heroes rise to protect humanityIn a futuristic world blessed by cosmic power, new heroes rise to protect humanity In a futuristic world blessed by cosmic power, new heroes rise to protect humanity.In a futuristic world blessed by cosmic power, new heroes rise to protect humanityIn a futuristic world blessed by cosmic power, new heroes rise to protect humanity",
  },
  {
    img: "/carousel/five.jpg",
    heading: "Naruto",
    description:
      "In a futuristic world blessed by cosmic power, new heroes rise to protect humanity.In a futuristic world blessed by cosmic power, new heroes rise to protect humanityIn a futuristic world blessed by cosmic power, new heroes rise to protect humanity In a futuristic world blessed by cosmic power, new heroes rise to protect humanity.In a futuristic world blessed by cosmic power, new heroes rise to protect humanityIn a futuristic world blessed by cosmic power, new heroes rise to protect humanity",
  },
  {
    img: "/carousel/six.jpg",
    heading: "One Piece",
    description:
      "In a futuristic world blessed by cosmic power, new heroes rise to protect humanity.In a futuristic world blessed by cosmic power, new heroes rise to protect humanityIn a futuristic world blessed by cosmic power, new heroes rise to protect humanity In a futuristic world blessed by cosmic power, new heroes rise to protect humanity.In a futuristic world blessed by cosmic power, new heroes rise to protect humanityIn a futuristic world blessed by cosmic power, new heroes rise to protect humanity",
  },
];

const novelinfo = [
  {
    heading: "Discover New Worlds",
    description:
      "Read amazing novels from different genres like fantasy, romance, and mystery.",
    img: "https://th.bing.com/th/id/OIG3..OiClp7agI8qQ30voUxs?r=0&w=1024&h=1024&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    heading: "Become a Writer",
    description:
      "Start your writing journey and share your stories with thousands of readers.",
    img: "https://th.bing.com/th/id/OIP.6AYpXqF98fMFIQdaw_jQCgHaE8?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    heading: "Top Picks of the Week",
    description:
      "Check out the most loved and trending books chosen by our readers.",
    img: "https://th.bing.com/th/id/OIG4.ClD9oFnJkdDdHUlTcbx9?r=0&w=1024&h=1024&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
];

const topPicks = [
  {
    name: "Naruto",
    category: "Action",
    image:
      "https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg",
  },
  {
    name: "OnePiece",
    category: "Adventure",
    image:
      "https://m.media-amazon.com/images/S/pv-target-images/a0cb3885c44b8305ac89ba7ce98e8cd978bf3ebba6a151a00dbf2d528e98bf3b.jpg",
  },
  {
    name: "DeathNote",
    category: "Thriller",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTJCp1AIyMA0ykJNEgaou1TA5lNcCIE3YzqFCd8l9yY5W4L1MrRVK2fWWasbjkx-mRwrlqv",
  },
  {
    name: "Attack On Titan",
    category: "DarkFantasy",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSgVLwmeJQBHNxGE8AMaCGWQLWoCUZMFJvuJy0nKdDfSnSXITF69Ivwb1qqnZNgyloaCKPo",
  },
  {
    name: "Demon Slayer",
    category: "Supernatural",
    image:
      "https://m.media-amazon.com/images/M/MV5BMWU1OGEwNmQtNGM3MS00YTYyLThmYmMtN2FjYzQzNzNmNTE0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
  {
    name: "My Hero Academia",
    category: "Superhero",
    image:
      "https://i.pinimg.com/750x/e9/e5/c9/e9e5c94c4c8febdd3cd236cd812a37c8.jpg",
  },
  {
    name: "Naruto",
    category: "Action",
    image:
      "https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg",
  },
  {
    name: "OnePiece",
    category: "Adventure",
    image:
      "https://m.media-amazon.com/images/S/pv-target-images/a0cb3885c44b8305ac89ba7ce98e8cd978bf3ebba6a151a00dbf2d528e98bf3b.jpg",
  },
  {
    name: "DeathNote",
    category: "Thriller",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTJCp1AIyMA0ykJNEgaou1TA5lNcCIE3YzqFCd8l9yY5W4L1MrRVK2fWWasbjkx-mRwrlqv",
  },
  {
    name: "Demon Slayer",
    category: "Supernatural",
    image:
      "https://m.media-amazon.com/images/M/MV5BMWU1OGEwNmQtNGM3MS00YTYyLThmYmMtN2FjYzQzNzNmNTE0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
  {
    name: "My Hero Academia",
    category: "Superhero",
    image:
      "https://i.pinimg.com/750x/e9/e5/c9/e9e5c94c4c8febdd3cd236cd812a37c8.jpg",
  },
  {
    name: "Naruto",
    category: "Action",
    image:
      "https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg",
  },
  {
    name: "OnePiece",
    category: "Adventure",
    image:
      "https://m.media-amazon.com/images/S/pv-target-images/a0cb3885c44b8305ac89ba7ce98e8cd978bf3ebba6a151a00dbf2d528e98bf3b.jpg",
  },
  {
    name: "DeathNote",
    category: "Thriller",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTJCp1AIyMA0ykJNEgaou1TA5lNcCIE3YzqFCd8l9yY5W4L1MrRVK2fWWasbjkx-mRwrlqv",
  },
  {
    name: "Attack On Titan",
    category: "DarkFantasy",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSgVLwmeJQBHNxGE8AMaCGWQLWoCUZMFJvuJy0nKdDfSnSXITF69Ivwb1qqnZNgyloaCKPo",
  },
  {
    name: "Naruto",
    category: "Action",
    image:
      "https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg",
  },
  {
    name: "OnePiece",
    category: "Adventure",
    image:
      "https://m.media-amazon.com/images/S/pv-target-images/a0cb3885c44b8305ac89ba7ce98e8cd978bf3ebba6a151a00dbf2d528e98bf3b.jpg",
  },
  {
    name: "DeathNote",
    category: "Thriller",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTJCp1AIyMA0ykJNEgaou1TA5lNcCIE3YzqFCd8l9yY5W4L1MrRVK2fWWasbjkx-mRwrlqv",
  },
  {
    name: "Attack On Titan",
    category: "DarkFantasy",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSgVLwmeJQBHNxGE8AMaCGWQLWoCUZMFJvuJy0nKdDfSnSXITF69Ivwb1qqnZNgyloaCKPo",
  },
  {
    name: "Demon Slayer",
    category: "Supernatural",
    image:
      "https://m.media-amazon.com/images/M/MV5BMWU1OGEwNmQtNGM3MS00YTYyLThmYmMtN2FjYzQzNzNmNTE0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
  {
    name: "My Hero Academia",
    category: "Superhero",
    image:
      "https://i.pinimg.com/750x/e9/e5/c9/e9e5c94c4c8febdd3cd236cd812a37c8.jpg",
  },
  {
    name: "Naruto",
    category: "Action",
    image:
      "https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg",
  },
  {
    name: "OnePiece",
    category: "Adventure",
    image:
      "https://m.media-amazon.com/images/S/pv-target-images/a0cb3885c44b8305ac89ba7ce98e8cd978bf3ebba6a151a00dbf2d528e98bf3b.jpg",
  },
  {
    name: "DeathNote",
    category: "Thriller",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTJCp1AIyMA0ykJNEgaou1TA5lNcCIE3YzqFCd8l9yY5W4L1MrRVK2fWWasbjkx-mRwrlqv",
  },
  {
    name: "Attack On Titan",
    category: "DarkFantasy",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSgVLwmeJQBHNxGE8AMaCGWQLWoCUZMFJvuJy0nKdDfSnSXITF69Ivwb1qqnZNgyloaCKPo",
  },
  {
    name: "Demon Slayer",
    category: "Supernatural",
    image:
      "https://m.media-amazon.com/images/M/MV5BMWU1OGEwNmQtNGM3MS00YTYyLThmYmMtN2FjYzQzNzNmNTE0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
  {
    name: "My Hero Academia",
    category: "Superhero",
    image:
      "https://i.pinimg.com/750x/e9/e5/c9/e9e5c94c4c8febdd3cd236cd812a37c8.jpg",
  },
  {
    name: "Naruto",
    category: "Action",
    image:
      "https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg",
  },
  {
    name: "OnePiece",
    category: "Adventure",
    image:
      "https://m.media-amazon.com/images/S/pv-target-images/a0cb3885c44b8305ac89ba7ce98e8cd978bf3ebba6a151a00dbf2d528e98bf3b.jpg",
  },
  {
    name: "OnePiece",
    category: "Adventure",
    image:
      "https://m.media-amazon.com/images/S/pv-target-images/a0cb3885c44b8305ac89ba7ce98e8cd978bf3ebba6a151a00dbf2d528e98bf3b.jpg",
  },
  {
    name: "DeathNote",
    category: "Thriller",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTJCp1AIyMA0ykJNEgaou1TA5lNcCIE3YzqFCd8l9yY5W4L1MrRVK2fWWasbjkx-mRwrlqv",
  },
  {
    name: "Attack On Titan",
    category: "DarkFantasy",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSgVLwmeJQBHNxGE8AMaCGWQLWoCUZMFJvuJy0nKdDfSnSXITF69Ivwb1qqnZNgyloaCKPo",
  },
  {
    name: "My Hero Academia",
    category: "Superhero",
    image:
      "https://i.pinimg.com/750x/e9/e5/c9/e9e5c94c4c8febdd3cd236cd812a37c8.jpg",
  },
  {
    name: "DeathNote",
    category: "Thriller",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTJCp1AIyMA0ykJNEgaou1TA5lNcCIE3YzqFCd8l9yY5W4L1MrRVK2fWWasbjkx-mRwrlqv",
  },
  {
    name: "Attack On Titan",
    category: "DarkFantasy",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSgVLwmeJQBHNxGE8AMaCGWQLWoCUZMFJvuJy0nKdDfSnSXITF69Ivwb1qqnZNgyloaCKPo",
  },
  {
    name: "My Hero Academia",
    category: "Superhero",
    image:
      "https://i.pinimg.com/750x/e9/e5/c9/e9e5c94c4c8febdd3cd236cd812a37c8.jpg",
  },
];

export { images, novelinfo, topPicks };
