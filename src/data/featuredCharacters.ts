
// Sample data - this would typically come from your database
export const featuredAnime = [
  {
    id: 'naruto',
    image: '/Profile 2.jpg', // Updated image
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
    image: '/latest', // Updated image
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
    image: '/latest', // Updated image
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
    image: '/5242337dae2f719868f3628075fd8425.jpg', // Updated image
    stats: {
      name: 'Monkey D. Luffy',
      age: 19,
      height: '174 cm',
      traits: ['Adventurous', 'Loyal', 'Reckless', 'Determined']
    },
    description: 'Monkey D. Luffy, also known as "Straw Hat Luffy" and commonly as "Straw Hat", is the main protagonist of the manga and anime, One Piece. He is the founder and captain of the increasingly infamous and powerful Straw Hat Pirates, as well as one of its top fighters. His lifelong dream is to become the Pirate King by finding the legendary treasure left behind by the late Pirate King, Gol D. Roger.',
    category: 'anime' as const
  }
];

export const featuredDisney = [
  {
    id: 'simba',
    image: '/250px-Simba(TheLionKing).png', // Updated image
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
    image: '/Elsa_from_Disney\'s_Frozen.png', // Updated image
    stats: {
      name: 'Elsa',
      age: 24,
      height: '170 cm',
      traits: ['Magical', 'Introverted', 'Protective', 'Regal']
    },
    description: 'Elsa is the deuteragonist of Disney\'s 2013 animated feature film Frozen and the protagonist of its 2019 sequel. Born with the power of ice and snow, Elsa is the firstborn daughter of King Agnarr and Queen Iduna, the older sister of Queen Anna, and the former queen of Arendelle.',
    category: 'disney' as const
  }
];
