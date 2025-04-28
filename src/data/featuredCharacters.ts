// Sample data - this would typically come from your database
export const featuredAnime = [
  {
    id: 'naruto',
    image: '/Profile 2.jpg',
    stats: {
      name: 'Naruto Uzumaki',
      age: 17,
      height: '166 cm',
      traits: ['Determined', 'Friendly', 'Reckless', 'Optimistic']
    },
    description: 'Naruto Uzumaki is the titular protagonist of the manga Naruto, created by Masashi Kishimoto. As the series progresses, he is a young ninja from the fictional village of Konohagakure. The villagers ridicule and ostracize Naruto on account of the Nine-Tailed Demon Fox—a malevolent creature that attacked Konohagakure—that was sealed away in his body. Despite this, he aspires to become his village\'s leader, the Hokage, in order to receive their approval.',
    additionalImages: [
      { 
        url: 'https://source.unsplash.com/random/800x450/?ninja', 
        caption: 'Naruto using his signature jutsu'
      },
      { 
        url: 'https://source.unsplash.com/random/800x450/?forest', 
        caption: 'Training in the Hidden Leaf Village'
      }
    ],
    category: 'anime' as const
  },
  {
    id: 'goku',
    image: '/latest',
    stats: {
      name: 'Goku',
      age: 'Unknown',
      height: '175 cm',
      traits: ['Powerful', 'Kind', 'Naive', 'Competitive']
    },
    description: 'Son Goku is a fictional character and main protagonist of the Dragon Ball manga series created by Akira Toriyama. He is based on Sun Wukong, a main character in the classic Chinese novel Journey to the West. Goku is introduced as a young boy with a monkey tail who practices martial arts and possesses superhuman strength.',
    category: 'anime' as const
  },
  {
    id: 'mikasa',
    image: '/latest',
    stats: {
      name: 'Mikasa Ackerman',
      age: 19,
      height: '170 cm',
      traits: ['Protective', 'Skilled', 'Loyal', 'Stoic']
    },
    description: 'Mikasa Ackerman is a fictional character in the manga series Attack on Titan, created by Hajime Isayama. Mikasa is one of the last Asians, her mother having been one. After her parents were killed by bandits, Mikasa was rescued by Eren Yeager and lived with him and his parents, Grisha and Carla, before the fall of Wall Maria.',
    category: 'anime' as const
  },
  {
    id: 'luffy',
    image: '/5242337dae2f719868f3628075fd8425.jpg',
    stats: {
      name: 'Monkey D. Luffy',
      age: 19,
      height: '174 cm',
      traits: ['Adventurous', 'Loyal', 'Reckless', 'Determined']
    },
    description: 'Monkey D. Luffy, also known as "Straw Hat Luffy" and commonly as "Straw Hat", is the main protagonist of the manga and anime, One Piece. He is the founder and captain of the increasingly infamous and powerful Straw Hat Pirates, as well as one of its top fighters. His lifelong dream is to become the Pirate King by finding the legendary treasure left behind by the late Pirate King, Gol D. Roger.',
    category: 'anime' as const
  },
  {
    id: 'usagi',
    image: '/27bab61d-4a91-409b-942d-983848b05427.png',
    stats: {
      name: 'Usagi Tsukino',
      age: 14,
      height: '150 cm',
      traits: ['Compassionate', 'Crybaby', 'Brave', 'Loyal']
    },
    description: 'Usagi Tsukino, also known as Sailor Moon, is the protagonist of the Sailor Moon manga and anime series. She is a seemingly ordinary middle school student who learns she has the power to transform into the Pretty Guardian of Love and Justice. Despite being initially portrayed as a crybaby and an underachiever, she grows throughout the series, eventually becoming the powerful Sailor Moon.',
    category: 'anime' as const
  }
];

export const featuredDisney = [
  {
    id: 'simba',
    image: '/250px-Simba(TheLionKing).png',
    stats: {
      name: 'Simba',
      age: 'Adult',
      traits: ['Courageous', 'Conflicted', 'Loyal', 'Compassionate']
    },
    description: 'Simba is the protagonist of Disney\'s 1994 animated feature film, The Lion King. He is the son of Mufasa and Sarabi, who was destined to rule the Pride Lands, as king. When Mufasa was murdered by his treacherous brother, Scar, Simba was exiled from the Pride Lands after his uncle tricked him into taking the blame for his father\'s death.',
    additionalImages: [
      { 
        url: 'https://source.unsplash.com/random/800x450/?savanna', 
        caption: 'The Pride Lands'
      },
      { 
        url: 'https://source.unsplash.com/random/800x450/?lion-cub', 
        caption: 'Young Simba'
      }
    ],
    category: 'disney' as const
  },
  {
    id: 'elsa',
    image: '/Elsa_from_Disney\'s_Frozen.png',
    stats: {
      name: 'Elsa',
      age: 24,
      height: '170 cm',
      traits: ['Magical', 'Introverted', 'Protective', 'Regal']
    },
    description: 'Elsa is the deuteragonist of Disney\'s 2013 animated feature film Frozen and the protagonist of its 2019 sequel. Born with the power of ice and snow, Elsa is the firstborn daughter of King Agnarr and Queen Iduna, the older sister of Queen Anna, and the former queen of Arendelle.',
    category: 'disney' as const
  },
  {
    id: 'rascal',
    image: '/latest',
    stats: {
      name: 'Rascal the Racoon',
      age: 'Young',
      traits: ['Mischievous', 'Clever', 'Playful', 'Adventurous']
    },
    description: 'Rascal the Racoon is a beloved character from Disney\'s animated series. Known for his striped tail and mask-like facial markings, Rascal is always getting into playful trouble and embarking on adventures with his friends in the forest.',
    category: 'disney' as const
  },
  {
    id: 'heidi',
    image: '/latest',
    stats: {
      name: 'Heidi',
      age: 8,
      traits: ['Cheerful', 'Kind', 'Nature-loving', 'Resilient']
    },
    description: 'Heidi is the main character of the children\'s novel of the same name, which has been adapted into various films and series. She is a young orphan girl who is taken to live with her grandfather in the Swiss Alps and experiences the joy of life in the mountains while making friends with the local people and animals.',
    category: 'disney' as const
  }
];

export const featuredGhibli = [
  {
    id: 'totoro',
    image: '/totoro.jpg', 
    stats: {
      name: 'Totoro',
      traits: ['Friendly', 'Magical', 'Mysterious', 'Gentle']
    },
    description: 'Totoro is a giant, mystical forest spirit who befriends two young girls, Satsuki and Mei, who have moved to the countryside. He is a central character in the 1988 Studio Ghibli film "My Neighbor Totoro", directed by Hayao Miyazaki. Totoro has become an iconic figure and the mascot of Studio Ghibli.',
    additionalImages: [
      { 
        url: 'https://images.unsplash.com/photo-1472396961693-142e6e269027', 
        caption: 'Totoro in the forest'
      },
      { 
        url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9', 
        caption: 'The path to Totoro'
      }
    ],
    category: 'ghibli' as const
  },
  {
    id: 'chihiro',
    image: '/chihiro.jpg', 
    stats: {
      name: 'Chihiro',
      age: 10,
      traits: ['Brave', 'Resourceful', 'Determined', 'Compassionate']
    },
    description: 'Chihiro Ogino is the protagonist of the 2001 Studio Ghibli film "Spirited Away". Initially portrayed as a sullen and negative child, Chihiro undergoes significant character development after she is trapped in the spirit world and must work to free herself and her parents.',
    category: 'ghibli' as const
  },
  {
    id: 'howl',
    image: '/a092d193d3017b67f3801de6cf7a2951.jpg', 
    stats: {
      name: 'Howl Jenkins',
      age: '20s',
      traits: ['Powerful', 'Vain', 'Kind-hearted', 'Mysterious']
    },
    description: 'Howl is a wizard living in the fantasy kingdom of Ingary in a moving castle. Despite his reputation as a heart-eating wizard, Howl is actually quite compassionate and selfless. He is a main character in the 2004 film "Howl\'s Moving Castle", based on the novel by Diana Wynne Jones.',
    category: 'ghibli' as const
  },
  {
    id: 'nausicaa',
    image: '/nausicaa_render_by_kingevan210_dg2deh6-fullview.png', 
    stats: {
      name: 'Nausicaä',
      age: 16,
      traits: ['Caring', 'Brave', 'Pacifist', 'Environmentalist']
    },
    description: 'Nausicaä is the protagonist of the 1984 Studio Ghibli film "Nausicaä of the Valley of the Wind". She is the princess of the Valley of the Wind who has a special gift for communicating with the giant insects that live in the toxic jungle that covers most of the surface of her post-apocalyptic world.',
    category: 'ghibli' as const
  },
  {
    id: 'san',
    image: '/a3c86f79eb6f5213bea6a39f98a4f992.jpg', 
    stats: {
      name: 'San',
      age: '16-17',
      traits: ['Wild', 'Fierce', 'Loyal', 'Protective']
    },
    description: 'San, also known as Princess Mononoke, is a main character in the 1997 film "Princess Mononoke". Raised by the wolf-goddess Moro, San is a fierce warrior who resides in the forest with her wolf siblings and harbors a deep hatred for humans due to their exploitation of the forest and its resources.',
    category: 'ghibli' as const
  },
  {
    id: 'kiki',
    image: '/009ecda10efffe01a13e4fa8bc87323d.jpg', 
    stats: {
      name: 'Kiki',
      age: 13,
      traits: ['Independent', 'Kind', 'Hard-working', 'Determined']
    },
    description: 'Kiki is a young witch and the protagonist of the 1989 film "Kiki\'s Delivery Service". According to witch tradition, Kiki must spend a year away from home to complete her training. She settles in a coastal town and starts a flying delivery service, facing challenges that help her grow and develop as a person.',
    category: 'ghibli' as const
  },
  {
    id: 'arrietty',
    image: '/d2492d69cdb5c660e71001a5b4fa8a90.jpg', 
    stats: {
      name: 'Arrietty',
      age: 14,
      traits: ['Curious', 'Brave', 'Adventurous', 'Caring']
    },
    description: 'Arrietty is a tiny, 14-year-old girl who lives with her parents under the floorboards of a house. She is part of a race of tiny people known as "Borrowers" who borrow small items from humans to survive. She is the protagonist of the 2010 film "The Secret World of Arrietty", based on "The Borrowers" by Mary Norton.',
    category: 'ghibli' as const
  },
  {
    id: 'haku',
    image: '/haku_the_river_spirit_by_chestrina_d1f4vc-fullview.jpg', 
    stats: {
      name: 'Haku Nigihyami',
      traits: ['Mysterious', 'Protective', 'Loyal', 'Powerful']
    },
    description: 'Haku is a young boy who works for the witch Yubaba in her bathhouse. In reality, he is a river spirit who once saved Chihiro from drowning when she was young. He plays a major role in helping Chihiro navigate the spirit world in the film "Spirited Away".',
    category: 'ghibli' as const
  }
];

export const featuredOthers = [
  {
    id: 'doraemon',
    image: '/Doraemon_character.png',
    stats: {
      name: 'Doraemon',
      traits: ['Helpful', 'Resourceful', 'Loyal', 'Technological']
    },
    description: 'Doraemon is a fictional robot cat from the 22nd century, sent back in time by a young boy named Sewashi to help his great-grandfather, Nobita Nobi. Created by Fujiko F. Fujio, Doraemon is known for his magical 4D pocket, from which he can pull out futuristic gadgets to help Nobita with his problems.',
    category: 'anime' as const
  },
  {
    id: 'maruko',
    image: '/latest',
    stats: {
      name: 'Maruko-chan',
      age: 9,
      traits: ['Lazy', 'Honest', 'Imaginative', 'Stubborn']
    },
    description: 'Maruko-chan (Momoko Sakura) is the main character of the manga and anime series "Chibi Maruko-chan". She is a precocious third-grade elementary school student living in Shimizu, Japan. The series depicts her simple but humorous everyday life with her family and friends.',
    category: 'anime' as const
  }
];
