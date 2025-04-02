
import { CategoryDataMap } from '@/types/category';

// Sample data - would be fetched from backend based on category
export const categoryData: CategoryDataMap = {
  anime: {
    title: 'Anime Characters',
    description: 'Explore your favorite anime characters from various series, from modern hits to beloved classics.',
    characters: [
      {
        id: 'naruto',
        image: 'https://static.wikia.nocookie.net/boruto/images/6/6c/Naruto_with_coat.png/revision/latest/scale-to-width-down/231?cb=20170917010747',
        stats: {
          name: 'Naruto Uzumaki',
          age: 17,
          height: '166 cm',
          traits: ['Determined', 'Friendly', 'Reckless', 'Optimistic']
        },
        description: 'Naruto Uzumaki is the titular protagonist of the manga Naruto, created by Masashi Kishimoto. As the series progresses, he is a young ninja from the fictional village of Konohagakure. Despite having the Nine-Tailed Fox sealed within him and facing the village\'s prejudice, he works tirelessly to gain their acknowledgment while pursuing his dream of becoming the village leader, or Hokage.',
        additionalImages: [
          { 
            url: 'https://static.wikia.nocookie.net/boruto/images/6/6c/Naruto_with_coat.png/revision/latest/scale-to-width-down/231?cb=20170917010747', 
            caption: 'Naruto using his signature jutsu'
          },
          { 
            url: 'https://static.wikia.nocookie.net/boruto/images/6/6c/Naruto_with_coat.png/revision/latest/scale-to-width-down/231?cb=20170917010747', 
            caption: 'Training in the Hidden Leaf Village'
          }
        ],
        category: 'anime' as const
      },
      {
        id: 'goku',
        image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
        stats: {
          name: 'Goku',
          age: 'Unknown',
          height: '175 cm',
          traits: ['Powerful', 'Kind', 'Naive', 'Competitive']
        },
        description: 'Son Goku is the main protagonist of the Dragon Ball manga series created by Akira Toriyama. Initially introduced as a young boy with a monkey tail and extraordinary strength, Goku is a Saiyan originally sent to Earth as an infant. Throughout his life, he trains hard and strives to be the greatest warrior possible, while at the same time using his amazing strength and skills to uphold peace.',
        additionalImages: [
          { 
            url: 'https://images.unsplash.com/photo-1472396961693-142e6e269027', 
            caption: 'Goku powering up to Super Saiyan'
          }
        ],
        category: 'anime' as const
      },
      {
        id: 'mikasa',
        image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
        stats: {
          name: 'Mikasa Ackerman',
          age: 19,
          height: '170 cm',
          traits: ['Protective', 'Skilled', 'Loyal', 'Stoic']
        },
        description: 'Mikasa Ackerman is one of the main protagonists in the Attack on Titan series, created by Hajime Isayama. After her parents were murdered when she was young, she was rescued and adopted by Eren Yeager and his family. The trauma of witnessing her parents\' deaths awakened within her the fighting instincts and perfect self-control that would later make her a formidable soldier.',
        category: 'anime' as const
      },
      {
        id: 'luffy',
        image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901',
        stats: {
          name: 'Monkey D. Luffy',
          age: 19,
          height: '174 cm',
          traits: ['Adventurous', 'Loyal', 'Reckless', 'Determined']
        },
        description: 'Monkey D. Luffy is the captain of the Straw Hat Pirates and the main protagonist of the One Piece series by Eiichiro Oda. Having consumed the Gum-Gum Devil Fruit, Luffy\'s body gained the properties of rubber, allowing him to stretch his body at will. With his signature straw hat and an unwavering desire to become the King of the Pirates, Luffy journeys across the Grand Line, gathering a diverse crew and facing numerous adversaries.',
        category: 'anime' as const
      },
      {
        id: 'rascal',
        image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04',
        stats: {
          name: 'Rascal the Raccoon',
          age: 'Young',
          traits: ['Playful', 'Curious', 'Mischievous', 'Clever']
        },
        description: 'Rascal is the titular character from the 1977 anime "Rascal the Raccoon" (あらいぐまラスカル). Based on the novel "Rascal: A Memoir of a Better Era" by Sterling North, the anime follows the story of a young boy named Sterling who adopts an orphaned raccoon kit. The series follows their adventures together and the inevitable challenges that arise when raising a wild animal as a pet. Rascal became an iconic character in Japan and influenced the country\'s fascination with raccoons.',
        additionalImages: [
          { 
            url: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04', 
            caption: 'Rascal in the wild'
          }
        ],
        category: 'anime' as const
      },
      {
        id: 'heidi',
        image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
        stats: {
          name: 'Heidi',
          age: 5,
          traits: ['Cheerful', 'Compassionate', 'Free-spirited', 'Nature-loving']
        },
        description: 'Heidi is the protagonist of the classic 1974 anime series "Heidi, Girl of the Alps" (アルプスの少女ハイジ), directed by Isao Takahata and featuring character designs by Hayao Miyazaki. Based on the Swiss novel by Johanna Spyri, the anime follows Heidi, a young orphan who is taken to live with her grandfather in the Swiss Alps. The series beautifully portrays her adventures in the mountains, her friendship with the goatherd Peter, and her special bond with her grandfather. Heidi\'s positive attitude and love for nature have made her an enduring character in anime history.',
        additionalImages: [
          { 
            url: 'https://images.unsplash.com/photo-1472396961693-142e6e269027', 
            caption: 'Heidi in the Alps'
          }
        ],
        category: 'anime' as const
      },
      {
        id: 'doraemon',
        image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901',
        stats: {
          name: 'Doraemon',
          age: 'Robot',
          height: '129.3 cm',
          traits: ['Helpful', 'Technological', 'Kind', 'Resourceful']
        },
        description: 'Doraemon is the titular robotic cat character from the long-running manga and anime series created by Fujiko F. Fujio. Sent back in time from the 22nd century by a young boy named Sewashi Nobi to help his great-grandfather, Nobita Nobi, Doraemon is equipped with a four-dimensional pouch containing futuristic gadgets. Despite his technological capabilities, Doraemon has a fear of mice and a weakness for dorayaki (red bean pancakes). The series follows his adventures with Nobita and their friends, using various gadgets to solve problems and occasionally causing new ones.',
        category: 'anime' as const
      },
      {
        id: 'maruko',
        image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
        stats: {
          name: 'Maruko-chan',
          age: 9,
          traits: ['Lazy', 'Honest', 'Dramatic', 'Imaginative']
        },
        description: 'Maruko-chan (Momoko Sakura) is the main character of the popular slice-of-life anime and manga series "Chibi Maruko-chan," created by Momoko Sakura. Set in the late 1970s, the series follows the everyday life and adventures of Maruko, a young elementary school girl living in Shimizu, Japan. Known for her laziness and tendency to daydream, Maruko approaches life\'s daily challenges with a unique perspective and humor. The series offers a nostalgic look at childhood in Japan and has become one of the longest-running anime series in history.',
        category: 'anime' as const
      },
      {
        id: 'sailor-moon',
        image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04',
        stats: {
          name: 'Usagi Tsukino (Sailor Moon)',
          age: 14,
          height: '150 cm',
          traits: ['Emotional', 'Caring', 'Clumsy', 'Determined']
        },
        description: 'Usagi Tsukino is the protagonist of the "Sailor Moon" series created by Naoko Takeuchi. Initially portrayed as a crybaby and an underachiever, Usagi discovers she is the reincarnation of the Moon Princess and transforms into the titular heroine Sailor Moon to protect Earth from various villains. Despite her initial reluctance and many flaws, she grows throughout the series, displaying tremendous compassion, bravery, and leadership as she gathers other Sailor Scouts and fights to protect love and justice in the universe.',
        category: 'anime' as const
      },
      {
        id: 'ash-ketchum',
        image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
        stats: {
          name: 'Ash Ketchum',
          age: 10,
          traits: ['Ambitious', 'Loyal', 'Determined', 'Compassionate']
        },
        description: 'Ash Ketchum is the protagonist of the Pokémon anime series. Beginning his journey at 10 years old with his first Pokémon, Pikachu, Ash travels across various regions with the ambitious goal of becoming a Pokémon Master. Despite facing numerous challenges and setbacks, Ash\'s unwavering determination, compassion for Pokémon, and growth as a trainer have made him one of anime\'s most enduring characters, inspiring generations of fans to "catch \'em all."',
        additionalImages: [
          { 
            url: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9', 
            caption: 'Ash with Pikachu'
          }
        ],
        category: 'anime' as const
      },
      {
        id: 'inuyasha',
        image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
        stats: {
          name: 'InuYasha',
          age: 'Over 200 (appears 15)',
          height: '168 cm',
          traits: ['Strong-willed', 'Protective', 'Hot-tempered', 'Loyal']
        },
        description: 'InuYasha is the titular half-demon (hanyō) protagonist of the historical fantasy series created by Rumiko Takahashi. Born from the union of a powerful dog demon father and human mother, InuYasha possesses superhuman strength, endurance, and powerful attacks with his sword Tessaiga. After being sealed to a tree for 50 years, he is freed by Kagome Higurashi, a modern schoolgirl who is the reincarnation of his former love. Together they search for shards of the powerful Shikon Jewel while battling demons and developing a complex relationship.',
        category: 'anime' as const
      },
      {
        id: 'spike-spiegel',
        image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04',
        stats: {
          name: 'Spike Spiegel',
          age: 27,
          height: '185 cm',
          traits: ['Laid-back', 'Skilled', 'Mysterious', 'Philosophical']
        },
        description: 'Spike Spiegel is the main protagonist of the space western neo-noir anime "Cowboy Bebop," created by Hajime Yatate. A former hitman for the Red Dragon Crime Syndicate turned bounty hunter, Spike is known for his nonchalant attitude, impressive combat skills, and philosophical outlook on life. Despite his seemingly carefree demeanor, he carries a tragic past and unresolved history with his former partner, Vicious. Alongside his partner Jet Black and fellow bounty hunters aboard the spaceship Bebop, Spike traverses the solar system in search of bounties while confronting ghosts from his past.',
        category: 'anime' as const
      },
      {
        id: 'light-yagami',
        image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901',
        stats: {
          name: 'Light Yagami',
          age: 17,
          height: '179 cm',
          traits: ['Intelligent', 'Manipulative', 'Narcissistic', 'Strategic']
        },
        description: 'Light Yagami is the protagonist of the psychological thriller manga and anime series "Death Note," created by Tsugumi Ohba and Takeshi Obata. A brilliant high school student who discovers a supernatural notebook that allows him to kill anyone whose name he writes in it, Light sets out to create a utopian world cleansed of evil, under the alias "Kira." What begins as a righteous crusade gradually transforms him into an increasingly megalomaniacal vigilante as he engages in a complex battle of wits with the enigmatic detective L, who seeks to bring Kira to justice.',
        category: 'anime' as const
      },
      {
        id: 'edward-elric',
        image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
        stats: {
          name: 'Edward Elric',
          age: 15,
          height: '165 cm (sensitive about his short stature)',
          traits: ['Determined', 'Short-tempered', 'Intelligent', 'Loyal']
        },
        description: 'Edward Elric is the protagonist of the "Fullmetal Alchemist" series, created by Hiromu Arakawa. Known as the "Fullmetal Alchemist," Ed is a young prodigy who became the youngest State Alchemist in history at age 12. After a failed alchemical attempt to resurrect his mother that cost Ed his right arm and left leg and put his younger brother Alphonse\'s soul in a suit of armor, the brothers embark on a journey to find the Philosopher\'s Stone to restore their bodies. Despite his small stature (a sensitive point for him), Edward\'s determination, alchemical genius, and unwavering loyalty to his brother drive him forward through numerous moral challenges and dangerous encounters.',
        category: 'anime' as const
      },
      {
        id: 'levi-ackerman',
        image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
        stats: {
          name: 'Levi Ackerman',
          age: 'Mid-30s',
          height: '160 cm',
          traits: ['Skilled', 'Clean-freak', 'Blunt', 'Loyal']
        },
        description: 'Captain Levi Ackerman is a supporting character in "Attack on Titan," created by Hajime Isayama. Known as "Humanity\'s Strongest Soldier," Levi leads the Special Operations Squad within the Scout Regiment, specializing in Titan combat. Despite his short stature, his exceptional combat skills, agility with the ODM gear, and cold demeanor have made him both feared and respected. Behind his stoic exterior lies a complex character shaped by a harsh childhood in the Underground and significant personal losses, driving his unwavering dedication to humanity\'s survival and his unique perspective on making choices without regret.',
        category: 'anime' as const
      },
      {
        id: 'rei-ayanami',
        image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901',
        stats: {
          name: 'Rei Ayanami',
          age: 14,
          traits: ['Quiet', 'Enigmatic', 'Obedient', 'Detached']
        },
        description: 'Rei Ayanami is one of the main female protagonists in the "Neon Genesis Evangelion" series created by Hideaki Anno. As the First Child selected to pilot the Evangelion Unit-00, Rei is portrayed as mysterious, emotionless, and seemingly devoid of social skills. Her pale appearance, blue hair, and red eyes make her visually distinctive, while her true nature as a clone containing the soul of Lilith adds depth to her character. Throughout the series, Rei\'s journey involves questioning her purpose, identity, and gradually developing human connections, particularly with protagonist Shinji Ikari.',
        category: 'anime' as const
      },
      {
        id: 'saitama',
        image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04',
        stats: {
          name: 'Saitama',
          age: 25,
          height: '175 cm',
          traits: ['Apathetic', 'Powerful', 'Simple-minded', 'Fair']
        },
        description: 'Saitama is the main protagonist of the "One Punch Man" series created by ONE and illustrated by Yusuke Murata. After three years of intense training (100 push-ups, 100 sit-ups, 100 squats, and a 10km run every day), he became so powerful that he can defeat any opponent with a single punch. Despite achieving his dream of becoming a hero, Saitama struggles with the boredom and emptiness that comes from the lack of challenge, resulting in his perpetually deadpan expression. Behind his unassuming appearance and mundane concerns about sales at the supermarket lies a genuine hero who fights for justice rather than fame or recognition.',
        category: 'anime' as const
      },
      {
        id: 'guts',
        image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
        stats: {
          name: 'Guts',
          age: 'Mid-20s',
          height: '190 cm',
          traits: ['Resolute', 'Solitary', 'Skilled', 'Vengeful']
        },
        description: 'Guts is the main protagonist of the "Berserk" manga series created by Kentaro Miura. Known as the "Black Swordsman," Guts is a former mercenary and branded wanderer who travels a medieval-inspired dark fantasy world seeking revenge against his former friend Griffith, who sacrificed the Band of the Hawk during a solar eclipse to become the powerful demon Femto. Wielding a massive sword known as the Dragonslayer and bearing the cursed Brand of Sacrifice, Guts battles horrific demons and endures enormous physical and psychological trauma. His complex character development from lone mercenary to reluctant protector makes him one of the most nuanced and tragic characters in anime and manga.',
        category: 'anime' as const
      },
      {
        id: 'totoro',
        image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
        stats: {
          name: 'Sakura Kinomoto',
          age: 10,
          traits: ['Cheerful', 'Athletic', 'Determined', 'Kind']
        },
        description: 'Sakura Kinomoto is the protagonist of "Cardcaptor Sakura," created by the manga group CLAMP. Initially an ordinary fourth-grade student, Sakura accidentally releases magical Clow Cards from a book in her basement and is tasked with recapturing them to prevent catastrophe. Using her sealing wand and gradually developing magical abilities, she grows from a reluctant card captor to a confident magician. Her journey is marked by her unwavering optimism, developing relationships with friends and family, and her growing feelings for Syaoran Li, making her one of the most beloved magical girl characters in anime.',
        category: 'anime' as const
      },
      {
        id: 'hana',
        image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
        stats: {
          name: 'Hana',
          age: 19,
          traits: ['Gentle', 'Loving', 'Determined', 'Adaptable']
        },
        description: 'Hana is the main protagonist of the anime film "Wolf Children," directed by Mamoru Hosoda. A college student who falls in love with a wolf-man, Hana becomes the mother of two half-wolf, half-human children, Yuki and Ame. After the death of her partner, she moves to the countryside to raise her children away from prying eyes, where they can choose between their human and wolf sides freely. Throughout the film, Hana displays extraordinary strength, patience, and unconditional love as she faces the unique challenges of raising her wolf children, symbolizing the universal struggles and joys of parenthood.',
        category: 'anime' as const
      },
      {
        id: 'violet-evergarden',
        image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901',
        stats: {
          name: 'Violet Evergarden',
          age: 14,
          traits: ['Disciplined', 'Dedicated', 'Emotionally growing', 'Dutiful']
        },
        description: 'Violet Evergarden is the protagonist of the light novel series and subsequent anime adaptation created by Kana Akatsuki. A former child soldier who was treated as nothing more than a weapon during the war, Violet struggles to reintegrate into society while working as an "Auto Memory Doll" - a professional letter writer. Having lost both arms in the final battle, she uses mechanical prosthetics and embarks on a journey to understand the meaning behind her commanding officer\'s final words to her: "I love you." Through writing emotions for others, she gradually discovers her own humanity and processes her traumatic past, making her story a powerful exploration of post-war recovery, emotional growth, and human connection.',
        category: 'anime' as const
      }
    ]
  },
  disney: {
    title: 'Disney Characters',
    description: 'Discover beloved characters from Disney movies and shows that have enchanted generations.',
    characters: [
      {
        id: 'simba',
        image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
        stats: {
          name: 'Simba',
          age: 'Adult',
          traits: ['Courageous', 'Conflicted', 'Loyal', 'Compassionate']
        },
        description: 'Simba is the protagonist of Disney\'s 1994 animated feature film, The Lion King. The son of Mufasa and Sarabi, Simba was destined to rule the Pride Lands as king. After his uncle Scar murders Mufasa and convinces young Simba that he was responsible for his father\'s death, Simba flees into exile. Adopted by the carefree duo Timon and Pumbaa, he embraces their "Hakuna Matata" philosophy until his childhood friend Nala and the wise mandrill Rafiki help him rediscover his identity and responsibility to his kingdom. Simba\'s journey from carefree cub to responsible ruler explores themes of identity, responsibility, and the courage to confront one\'s past.',
        additionalImages: [
          { 
            url: 'https://images.unsplash.com/photo-1472396961693-142e6e269027', 
            caption: 'The Pride Lands'
          },
          { 
            url: 'https://images.unsplash.com/photo-1472396961693-142e6e269027', 
            caption: 'Young Simba'
          }
        ],
        category: 'disney' as const
      },
      {
        id: 'elsa',
        image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
        stats: {
          name: 'Elsa',
          age: 24,
          height: '170 cm',
          traits: ['Magical', 'Introverted', 'Protective', 'Regal']
        },
        description: 'Elsa is the deuteragonist of Disney\'s 2013 animated feature film Frozen and the protagonist of its 2019 sequel. Born with the power to create and control ice and snow, Elsa struggles with controlling her abilities and fears hurting those she loves, particularly her sister Anna. After accidentally revealing her powers and fleeing her kingdom of Arendelle, Elsa embraces her abilities and builds an ice palace where she can be herself. Her journey involves learning that love is the key to controlling her powers and accepting herself for who she is. Elsa\'s character development, combined with her memorable "Let It Go" sequence, made her a cultural phenomenon and a symbol of self-acceptance and empowerment.',
        category: 'disney' as const
      },
      {
        id: 'mulan',
        image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04',
        stats: {
          name: 'Mulan',
          age: 16,
          traits: ['Brave', 'Determined', 'Resourceful', 'Filial']
        },
        description: 'Mulan is the protagonist of Disney\'s 1998 animated feature film of the same name, based on the Chinese legend of Hua Mulan. When her elderly father is conscripted into the Chinese army to fight the invading Huns, Mulan disguises herself as a man and takes his place, risking death if her identity is discovered. Throughout her military training and subsequent battles, Mulan demonstrates remarkable ingenuity, courage, and determination. Her character broke new ground for Disney heroines, presenting a woman who saves China not through typical princess attributes but through her intelligence, strength, and bravery. Mulan\'s story explores themes of honor, identity, and the tension between individual desires and familial duty.',
        additionalImages: [
          { 
            url: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04', 
            caption: 'Mulan in battle'
          }
        ],
        category: 'disney' as const
      },
      {
        id: 'moana',
        image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901',
        stats: {
          name: 'Moana',
          age: 16,
          traits: ['Adventurous', 'Determined', 'Compassionate', 'Connected to nature']
        },
        description: 'Moana is the protagonist of Disney\'s 2016 animated feature film of the same name. The strong-willed daughter of a chief of a Polynesian village, Moana is chosen by the ocean to return the heart of goddess Te Fiti and save her island from a terrible blight. Against her father\'s wishes but with encouragement from her grandmother, she sails across the sea to find the demigod Maui and complete her mission. Unlike many Disney protagonists, Moana\'s journey is not motivated by romance but by her connection to her people and their voyaging heritage. Her story celebrates cultural identity, environmental stewardship, and finding balance between tradition and progress.',
        category: 'disney' as const
      },
      {
        id: 'belle',
        image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
        stats: {
          name: 'Belle',
          age: 17,
          traits: ['Intelligent', 'Compassionate', 'Independent', 'Brave']
        },
        description: 'Belle is the protagonist of Disney\'s 1991 animated feature film Beauty and the Beast. A bookish young woman considered strange by her provincial French village, Belle dreams of adventure beyond her quiet life. When her father is imprisoned by the Beast, a prince transformed by an enchantress\'s spell, Belle offers herself in his place. Over time, she discovers the Beast\'s gentle soul beneath his fearsome exterior, helping him rediscover his humanity while finding the adventure and connection she sought. Belle represented a departure from previous Disney heroines, celebrated for her intelligence, independence, and her ability to see beyond appearances to the character within.',
        additionalImages: [
          { 
            url: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9', 
            caption: 'Belle in the library'
          }
        ],
        category: 'disney' as const
      },
      {
        id: 'tiana',
        image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
        stats: {
          name: 'Tiana',
          age: 19,
          traits: ['Hardworking', 'Determined', 'Practical', 'Compassionate']
        },
        description: 'Tiana is the protagonist of Disney\'s 2009 animated feature film The Princess and the Frog. Set in 1920s New Orleans, Tiana works multiple jobs to save enough money to fulfill her late father\'s dream of opening a restaurant. When she kisses a frog who claims to be Prince Naveen, hoping to break his curse, she is also transformed into a frog. Their journey through the bayou leads to unexpected friendship, love, and a reevaluation of Tiana\'s priorities. As Disney\'s first African American princess, Tiana broke new ground with her entrepreneurial spirit, work ethic, and practical approach to achieving her dreams, showing that success comes from combining hard work with an open heart.',
        category: 'disney' as const
      },
      {
        id: 'stitch',
        image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04',
        stats: {
          name: 'Stitch (Experiment 626)',
          height: '3\'0"',
          traits: ['Mischievous', 'Destructive', 'Loyal', 'Evolving']
        },
        description: 'Stitch is the deuteragonist of Disney\'s 2002 animated feature film Lilo & Stitch and its subsequent franchise. Created as "Experiment 626" by the alien scientist Dr. Jumba Jookiba, Stitch was designed to be a force of pure destruction. After escaping from captivity, he crash-lands in Hawaii where he is adopted by a young girl named Lilo, who believes he is a dog. Through Lilo\'s concept of \'ohana\' (family), Stitch gradually transforms from a destructive creature to a caring family member. His character arc symbolizes the power of love and acceptance to change even the most damaged individuals, making him one of Disney\'s most complex and beloved characters despite his unconventional appearance and origins.',
        category: 'disney' as const
      },
      {
        id: 'woody',
        image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901',
        stats: {
          name: 'Sheriff Woody',
          traits: ['Loyal', 'Responsible', 'Insecure', 'Natural leader']
        },
        description: 'Sheriff Woody is one of the main protagonists of Pixar\'s Toy Story franchise. A pull-string cowboy doll and Andy\'s favorite toy, Woody serves as the leader of Andy\'s toys, taking his responsibility to bring joy to his owner very seriously. Throughout the series, Woody deals with threats to his position as favorite toy, the prospect of being outgrown by Andy, and ultimately finding purpose beyond his original child. His journey across four films explores themes of purpose, identity, jealousy, loyalty, and letting go. Voiced by Tom Hanks, Woody has become one of the most iconic animated characters in film history, known for his unwavering dedication to both his owner and his toy friends.',
        additionalImages: [
          { 
            url: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901', 
            caption: 'Woody with Buzz Lightyear'
          }
        ],
        category: 'disney' as const
      }
    ]
  },
  ghibli: {
    title: 'Studio Ghibli Characters',
    description: 'Meet enchanting characters from the magical worlds created by Studio Ghibli.',
    characters: [
      {
        id: 'totoro',
        image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
        stats: {
          name: 'Totoro',
          traits: ['Gentle', 'Mysterious', 'Magical', 'Protective']
        },
        description: 'Totoro is the titular character from the 1988 Studio Ghibli film "My Neighbor Totoro," directed by Hayao Miyazaki. A large, furry forest spirit resembling a cross between a cat, an owl, and a raccoon, Totoro lives in the hollow of a camphor tree in rural Japan. Visible only to children with pure hearts, he befriends sisters Satsuki and Mei when they move to the countryside. Totoro represents the magic of childhood imagination and the healing power of nature. His iconic silhouette and the scene where he waits at a bus stop in the rain have become cultural symbols, while Totoro himself serves as Studio Ghibli\'s mascot.',
        additionalImages: [
          { 
            url: 'https://images.unsplash.com/photo-1472396961693-142e6e269027', 
            caption: 'Totoro\'s forest home'
          },
          { 
            url: 'https://images.unsplash.com/photo-1472396961693-142e6e269027', 
            caption: 'Waiting at the bus stop'
          }
        ],
        category: 'ghibli' as const
      },
      {
        id: 'chihiro',
        image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
        stats: {
          name: 'Chihiro Ogino / Sen',
          age: 10,
          traits: ['Resilient', 'Courageous', 'Kind', 'Determined']
        },
        description: 'Chihiro is the protagonist of the 2001 Academy Award-winning Studio Ghibli film "Spirited Away," directed by Hayao Miyazaki. Initially portrayed as a whiny, spoiled child, Chihiro undergoes significant growth after her parents are transformed into pigs and she finds herself trapped in a supernatural bathhouse for spirits. Forced to work under the witch Yubaba, who renames her Sen, Chihiro displays remarkable adaptability and inner strength. Throughout her journey to save her parents and find her way back to the human world, she develops courage, resourcefulness, and compassion, forming meaningful connections with various spirits and the mysterious boy Haku. Chihiro\'s coming-of-age story resonates as an allegory for the transition from childhood to adolescence.',
        additionalImages: [
          { 
            url: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9', 
            caption: 'Chihiro crossing the bridge to the bathhouse'
          }
        ],
        category: 'ghibli' as const
      },
      {
        id: 'howl',
        image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04',
        stats: {
          name: 'Howl Jenkins Pendragon',
          age: 'Young adult',
          traits: ['Vain', 'Powerful', 'Compassionate', 'Secretive']
        },
        description: 'Howl is a main character in the Studio Ghibli film "Howl\'s Moving Castle" (2004), directed by Hayao Miyazaki and based on Diana Wynne Jones\'s novel. A powerful but flamboyant wizard known for his vanity and reputation as a heart-stealer, Howl lives in a magical moving castle that traverses the countryside. Despite his initially self-centered appearance, Howl reveals deeper layers of compassion, sacrifice, and vulnerability as the story progresses. His relationship with Sophie Hatter, cursed to appear as an old woman, helps him confront his fear of aging and mortality, symbolized by his contract with a fire demon that is slowly consuming his humanity. Howl\'s character explores themes of identity, beauty, courage, and the transformative power of love.',
        category: 'ghibli' as const
      },
      {
        id: 'nausicaa',
        image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901',
        stats: {
          name: 'Nausicaä',
          age: 16,
          traits: ['Compassionate', 'Brave', 'Intuitive', 'Pacifistic']
        },
        description: 'Nausicaä is the protagonist of Hayao Miyazaki\'s 1984 film "Nausicaä of the Valley of the Wind," which predates the official founding of Studio Ghibli but is considered part of its canon. A princess of the peaceful Valley of the Wind in a post-apocalyptic world, Nausicaä possesses a unique empathy for all living creatures, including the toxic jungle and its mutant insects that threaten human existence. Her exceptional abilities—understanding the jungle\'s ecology, communicating with the dreaded giant insects called Ohmu, and gliding on the winds with her jet-powered glider—make her a bridge between humanity and nature. Nausicaä\'s refusal to see either side as an enemy and her willingness to sacrifice herself to prevent bloodshed embody the environmental and pacifist themes central to Miyazaki\'s work.',
        additionalImages: [
          { 
            url: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901', 
            caption: 'Nausicaä with her glider'
          }
        ],
        category: 'ghibli' as const
      },
      {
        id: 'san',
        image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
        stats: {
          name: 'San (Princess Mononoke)',
          age: 'Late teens',
          traits: ['Fierce', 'Loyal', 'Wild', 'Protective']
        },
        description: 'San, also known as Princess Mononoke, is a main character in the 1997 Studio Ghibli film "Princess Mononoke," directed by Hayao Miyazaki. Raised by wolf gods after being abandoned by her human parents, San harbors intense hatred toward humans for their destruction of the forest. She actively fights alongside the forest spirits against Lady Eboshi and Irontown, which threatens the forest\'s existence. San\'s complex character challenges simple definitions of good and evil, as her ferocity stems from genuine devotion to her wolf family and the forest. Her gradual and reluctant connection with the protagonist Ashitaka represents the potential for understanding between opposing worldviews. San embodies humanity\'s wild nature and our primal connection to the natural world, refusing to compromise her identity even as she comes to acknowledge the complexity of the conflict.',
        category: 'ghibli' as const
      },
      {
        id: 'kiki',
        image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
        stats: {
          name: 'Kiki',
          age: 13,
          traits: ['Independent', 'Hardworking', 'Kind', 'Insecure']
        },
        description: 'Kiki is the protagonist of the 1989 Studio Ghibli film "Kiki\'s Delivery Service," directed by Hayao Miyazaki. As a young witch in training, tradition requires her to leave home at thirteen and spend a year in a new city developing her skills. Setting up a delivery service using her flying broomstick in a coastal city, Kiki encounters challenges that cause her to lose confidence and temporarily her ability to fly. Through perseverance, friendships, and discovering her own value, she eventually reclaims her magic. Unlike many coming-of-age stories featuring supernatural powers, Kiki\'s narrative focuses on the universal adolescent struggles of independence, self-doubt, and finding one\'s place in the world, making her journey relatable despite its magical elements.',
        additionalImages: [
          { 
            url: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9', 
            caption: 'Kiki flying on her broomstick'
          }
        ],
        category: 'ghibli' as const
      },
      {
        id: 'porco-rosso',
        image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04',
        stats: {
          name: 'Marco Pagot / Porco Rosso',
          age: 'Middle-aged',
          traits: ['Cynical', 'Skilled', 'Honorable', 'Independent']
        },
        description: 'Porco Rosso (born Marco Pagot) is the titular protagonist of the 1992 Studio Ghibli film "Porco Rosso," directed by Hayao Miyazaki. A World War I veteran ace pilot who has been mysteriously cursed with the face of a pig, Porco works as a bounty hunter chasing air pirates over the Adriatic Sea in the interwar period. Despite his cynicism and self-imposed isolation, Porco maintains a strong personal code of honor and compassion, particularly toward women and children. His journey involves confronting his past trauma from the war, his survivor\'s guilt, and his resistance to the rising fascist regime in Italy. The character explores themes of disillusionment, identity, and finding humanity in a world increasingly dominated by machines and ideologies.',
        category: 'ghibli' as const
      },
      {
        id: 'arrietty',
        image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901',
        stats: {
          name: 'Arrietty Clock',
          age: 14,
          traits: ['Brave', 'Curious', 'Resourceful', 'Compassionate']
        },
        description: 'Arrietty is the protagonist of the 2010 Studio Ghibli film "The Secret World of Arrietty," directed by Hiromasa Yonebayashi and based on Mary Norton\'s novel "The Borrowers." A member of the Clock family of tiny people who live underneath the floorboards of a human house, Arrietty is just 14 centimeters tall. Though borrowers survive by taking small items from humans and avoid being seen at all costs, Arrietty\'s curiosity leads to her being discovered by a human boy named Shō. Their forbidden friendship challenges both their worlds and ultimately leads to significant changes for the Clock family. Arrietty\'s character embodies courage in the face of the unknown, navigating the tension between safety and exploration, tradition and change.',
        additionalImages: [
          { 
            url: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901', 
            caption: 'Arrietty exploring the garden'
          }
        ],
        category: 'ghibli' as const
      },
      {
        id: 'haku',
        image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
        stats: {
          name: 'Haku / Nigihayami Kohakunushi',
          age: 'Appears young',
          traits: ['Mysterious', 'Protective', 'Dignified', 'Conflicted']
        },
        description: 'Haku is a major character in the 2001 Studio Ghibli film "Spirited Away," directed by Hayao Miyazaki. Appearing as a young boy who helps protagonist Chihiro navigate the spirit world, Haku is revealed to be a river spirit in human form who serves as the apprentice to the witch Yubaba. His true identity is that of the Kohaku River, which was filled in for human development, causing him to lose his home and name. This loss of identity forces him into Yubaba\'s service, where she controls him by keeping his real name. Haku\'s character represents both the consequences of environmental destruction and the theme of identity—how names and memories shape who we are. His relationship with Chihiro and her ability to remember his true name becomes key to his liberation.',
        category: 'ghibli' as const
      },
      {
        id: 'baron',
        image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
        stats: {
          name: 'Baron Humbert von Gikkingen',
          traits: ['Dignified', 'Chivalrous', 'Magical', 'Wise']
        },
        description: 'Baron Humbert von Gikkingen is a prominent character in Studio Ghibli\'s 2002 film "The Cat Returns," directed by Hiroyuki Morita, and also appears in "Whisper of the Heart" (1995). An elegant cat figurine who comes to life, the Baron is the gentlemanly proprietor of the Bureau of Cat Affairs, which aids those who find themselves in unusual predicaments. Dressed impeccably with a top hat and cane, he has emerald green eyes and moves with grace and poise. The Baron assists the protagonist Haru when she begins transforming into a cat after saving a feline prince. His philosophy that "the most important thing is to believe in yourself" becomes central to Haru\'s journey of self-discovery and confidence. The Baron represents old-world charm, courtesy, and the magic that can be found in believing in oneself.',
        additionalImages: [
          { 
            url: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9', 
            caption: 'The Cat Bureau'
          }
        ],
        category: 'ghibli' as const
      },
      {
        id: 'ponyo',
        image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04',
        stats: {
          name: 'Ponyo / Brünnhilde',
          age: 'Child',
          traits: ['Curious', 'Determined', 'Magical', 'Loving']
        },
        description: 'Ponyo is the titular character of the 2008 Studio Ghibli film "Ponyo," directed by Hayao Miyazaki. Born Brünnhilde, she is a magical goldfish and the daughter of the sea goddess Gran Mamare and the once-human wizard Fujimoto. After escaping her father\'s underwater home, she is rescued by a five-year-old boy named Sōsuke and quickly forms a deep attachment to him. Her determination to become human and be with Sōsuke sets off a chain of magical events that nearly throw nature into chaos. Ponyo\'s character is marked by her boundless enthusiasm, innocent love, and willingness to transform herself completely for love. Her story offers a whimsical take on Hans Christian Andersen\'s "The Little Mermaid" while exploring themes of environmental harmony, adaptation, and the pure, uncomplicated nature of childhood affection.',
        category: 'ghibli' as const
      },
      {
        id: 'jiro',
        image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901',
        stats: {
          name: 'Jiro Horikoshi',
          traits: ['Dedicated', 'Dreamer', 'Conflicted', 'Innovative']
        },
        description: 'Jiro Horikoshi is the protagonist of the 2013 Studio Ghibli film "The Wind Rises," directed by Hayao Miyazaki. Based on the historical aeronautical engineer who designed Japanese fighter planes used in World War II, the fictionalized Jiro is portrayed as a dreamer who wants to create beautiful airplanes, despite their eventual use for war. The film follows his life from childhood through his career, including his romance with Nahoko, who suffers from tuberculosis. Jiro\'s character grapples with the moral complexity of creating something beautiful that will be used for destruction, embodying the film\'s central theme of pursuing dreams in an imperfect world. Unlike most Ghibli protagonists, Jiro is an adult whose story involves professional ambition rather than coming-of-age, reflecting Miyazaki\'s meditation on art, creation, and responsibility.',
        additionalImages: [
          { 
            url: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901', 
            caption: 'Jiro designing an airplane'
          }
        ],
        category: 'ghibli' as const
      },
      {
        id: 'ashitaka',
        image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
        stats: {
          name: 'Prince Ashitaka',
          age: 'Young adult',
          traits: ['Principled', 'Compassionate', 'Strong', 'Mediator']
        },
        description: 'Ashitaka is the protagonist of the 1997 Studio Ghibli film "Princess Mononoke," directed by Hayao Miyazaki. The last prince of the Emishi people, Ashitaka is cursed after killing a demon-possessed boar god that attacked his village. The curse grants him superhuman strength but will eventually kill him. Seeking a cure and understanding of the demon\'s origins, he journeys west and finds himself caught between the industrial town of Irontown, led by Lady Eboshi, and the forest gods and spirits led by the wolf god Moro and her human daughter San (Princess Mononoke). Unlike many protagonists, Ashitaka refuses to take sides in the conflict, instead seeking balance and understanding between humans and nature. His character embodies the film\'s central theme of seeking harmony in a world of competing interests rather than reducing complex conflicts to simplistic notions of good versus evil.',
        category: 'ghibli' as const
      },
      {
        id: 'calcifer',
        image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
        stats: {
          name: 'Calcifer',
          traits: ['Sarcastic', 'Powerful', 'Loyal', 'Mischievous']
        },
        description: 'Calcifer is a key character in the Studio Ghibli film "Howl\'s Moving Castle" (2004), directed by Hayao Miyazaki. A fallen star transformed into a fire demon, Calcifer powers Howl\'s magical moving castle through a contract that binds his heart to Howl\'s. Despite his small size and confinement to the hearth, Calcifer is one of the film\'s most distinctive characters, known for his sarcastic wit and constant complaints. Although initially appearing self-serving in his desire to break the contract with Howl, Calcifer develops genuine concern for Sophie and others in the castle. His relationship with Sophie, to whom he reveals the secret of his connection to Howl, becomes crucial to the resolution of the story. Calcifer represents both the power and the burden of binding contracts, as well as the warmth that keeps the makeshift family of the castle together.',
        additionalImages: [
          { 
            url: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9', 
            caption: 'Calcifer in the hearth'
          }
        ],
        category: 'ghibli' as const
      },
      {
        id: 'seita',
        image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04',
        stats: {
          name: 'Seita',
          age: 14,
          traits: ['Protective', 'Determined', 'Proud', 'Resilient']
        },
        description: 'Seita is one of the two protagonists in the 1988 Studio Ghibli film "Grave of the Fireflies," directed by Isao Takahata. Set during the final months of World War II in Japan, the film follows teenage Seita and his younger sister Setsuko as they struggle to survive after their mother is killed in an air raid and they are separated from other relatives. Forced into increasingly desperate circumstances, Seita takes on the role of provider and protector for his sister. His character illustrates the tragic impact of war on civilians, particularly children, as his youth and pride prevent him from making compromises that might have ensured their survival. Unlike many animated films, "Grave of the Fireflies" uses Seita\'s story not as entertainment but as a powerful anti-war statement and a meditation on the human cost of conflict and the breakdown of social support systems.',
        category: 'ghibli' as const
      },
      {
        id: 'sosuke',
        image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901',
        stats: {
          name: 'Sōsuke',
          age: 5,
          traits: ['Kind', 'Responsible', 'Curious', 'Steadfast']
        },
        description: 'Sōsuke is a main character in the 2008 Studio Ghibli film "Ponyo," directed by Hayao Miyazaki. A five-year-old boy living in a house on a cliff overlooking the sea with his mother Lisa, Sōsuke discovers and rescues a goldfish trapped in a glass jar, whom he names Ponyo. Unlike many child characters, Sōsuke demonstrates remarkable maturity for his age—helping his mother, caring for his elderly friends at the senior center where Lisa works, and taking his promise to protect Ponyo seriously even as she transforms into a human girl and their world is engulfed by magical floods. Sōsuke\'s unwavering acceptance of Ponyo, regardless of her form or the chaos her transformation causes, represents the film\'s themes of unconditional love and the pure-hearted perspective of children who accept magic and wonder without question.',
        additionalImages: [
          { 
            url: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901', 
            caption: 'Sōsuke with Ponyo'
          }
        ],
        category: 'ghibli' as const
      }
    ]
  },
  manhwa: {
    title: 'Manhwa Characters',
    description: 'Explore characters from popular Korean manhwa series that combine stunning art with compelling storytelling.',
    characters: [
      {
        id: 'solo-leveling',
        image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
        stats: {
          name: 'Sung Jin-Woo',
          age: 25,
          traits: ['Determined', 'Powerful', 'Reserved', 'Strategic']
        },
        description: 'Sung Jin-Woo is the main protagonist of the popular manhwa "Solo Leveling" by Chugong. Initially known as the "World\'s Weakest Hunter," Jin-Woo barely survives a double dungeon incident that would have killed most hunters. After this near-death experience, he gains a mysterious power called the "System," which allows him to level up like a character in a video game, unlike other hunters who have fixed abilities. Through relentless training and dungeon clearing, Jin-Woo evolves from being the weakest E-rank hunter to becoming one of the most powerful in existence. His character development follows his journey from a desperate young man taking dangerous jobs to support his hospitalized mother to a confident, nearly unstoppable force whose mere presence intimidates even S-rank hunters. What makes Jin-Woo compelling is his unwavering determination, strategic mind, and how he maintains his humanity and core values despite his exponentially growing power.',
        category: 'manhwa' as const
      },
      {
        id: 'tower-of-god',
        image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
        stats: {
          name: 'Twenty-Fifth Bam',
          age: 20,
          height: '178 cm',
          traits: ['Compassionate', 'Resilient', 'Loyal', 'Exceptional Growth']
        },
        description: 'Twenty-Fifth Bam (often called just "Bam") is the main protagonist of the webtoon "Tower of God" created by SIU (Slave. In. Utero). Having lived his entire life trapped in a cave beneath the mysterious Tower, Bam\'s only companion was a girl named Rachel, who taught him language and told him about the world. When Rachel enters the Tower to pursue her dream of seeing real stars, Bam follows her, despite the Tower normally only opening its doors to "chosen ones." Inside, Bam discovers he is an "Irregular"—someone who opened the Tower\'s doors himself—and possesses extraordinary potential for manipulating "Shinsu" (the Tower\'s equivalent to magic). As he climbs the Tower facing increasingly difficult tests and challenges, Bam\'s primary motivation remains his devotion to Rachel, though this relationship becomes more complex and painful as the story progresses. What distinguishes Bam is his pure-hearted nature in a Tower defined by competition and betrayal, and his remarkable ability to draw others to him despite the Tower\'s ruthless environment.',
        additionalImages: [
          { 
            url: 'https://images.unsplash.com/photo-1472396961693-142e6e269027', 
            caption: 'Bam using Shinsu abilities'
          },
          { 
            url: 'https://images.unsplash.com/photo-1472396961693-142e6e269027', 
            caption: 'Bam with his friends in the Tower'
          }
        ],
        category: 'manhwa' as const
      },
      {
        id: 'mori-jin',
        image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04',
        stats: {
          name: 'Jin Mori',
          age: 'Appears 17',
          traits: ['Powerful', 'Battle-loving', 'Straightforward', 'Loyal']
        },
        description: 'Jin Mori is the main protagonist of "The God of High School," a manhwa created by Yongje Park. Appearing as a 17-year-old high school student with exceptional martial arts skills, Jin Mori enters the titular God of High School tournament, which promises to fulfill the winner\'s greatest desire. With his distinctive spiky hair, limiters on his power, and monkey-like agility and strength, Mori initially seems to be simply a talented and somewhat naive martial artist. However, as the series progresses, it\'s revealed that he is actually the Monkey King, Sun Wukong, from Journey to the West—one of the most powerful gods in the series\' universe. What makes Mori compelling is his straightforward approach to life, his unwavering loyalty to his friends, and his genuine love of martial arts for its own sake rather than for power or dominance. Despite his godly status, he values his human connections and experiences, creating an interesting contradiction between his divine nature and human heart.',
        category: 'manhwa' as const
      },
      {
        id: 'park-hyung-seok',
        image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901',
        stats: {
          name: 'Park Hyung-Seok / Daniel Park',
          age: 'Late teens',
          traits: ['Determined', 'Intelligent', 'Adaptive', 'Kind']
        },
        description: 'Park Hyung-Seok is the protagonist of the manhwa "Lookism" by Park Tae-Jun. As an overweight teenager subjected to severe bullying, Hyung-Seok\'s life takes a supernatural turn when he mysteriously gains a second body—tall, handsome, and athletically built—while his original body sleeps. The series follows his navigation of social hierarchies as he switches between his two bodies, experiencing how differently the world treats him based solely on appearance. While his handsome body (known as Daniel Park in the English translation) opens doors to modeling opportunities and social acceptance, Hyung-Seok maintains his compassionate nature, using his new understanding of "lookism" to help others who face discrimination. What makes his character compelling is his growth from a timid victim to a confident individual who recognizes that true value lies beyond physical appearance, even as he grapples with the advantages his attractive body provides him. The series uses his dual existence to explore themes of appearance-based discrimination, identity, and the social constructs that determine worth in modern society.',
        additionalImages: [
          { 
            url: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901', 
            caption: 'Both bodies of Park Hyung-Seok'
          }
        ],
        category: 'manhwa' as const
      },
      {
        id: 'ha-yuri-jahad',
        image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
        stats: {
          name: 'Ha Yuri Zahard',
          height: '162 cm',
          traits: ['Cunning', 'Manipulative', 'Powerful', 'Complex']
        },
        description: 'Ha Yuri Zahard is a major character in the manhwa "Tower of God" by SIU. A Princess of Zahard (the king of the Tower) and an extraordinarily high-ranking Ranker, Yuri is known for her unpredictable nature and her unusual interest in the protagonist, Bam. Unlike most Princesses who compete ruthlessly with one another, Yuri follows her own path, often breaking rules and defying expectations. She possesses the rare Black March, one of the powerful 13 Month Series weapons, which she impulsively lends to Bam during his first test—an unprecedented act of aid to an unknown. Despite her immense power and privileged position, Yuri displays genuine concern for others and a sense of justice that sometimes contradicts the Tower\'s hierarchical system. What makes her character fascinating is her complexity: she combines playful mischief and apparent self-interest with moments of profound compassion and principled action, making her motivations and ultimate allegiances intriguingly ambiguous as the story progresses.',
        category: 'manhwa' as const
      },
      {
        id: 'kim-dokja',
        image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
        stats: {
          name: 'Kim Dokja',
          age: '28',
          traits: ['Analytical', 'Self-sacrificing', 'Genre-savvy', 'Empathetic']
        },
        description: 'Kim Dokja is the protagonist of "Omniscient Reader\'s Viewpoint," a manhwa based on the web novel by Sing Shong. An ordinary company employee whose name literally means "only reader," Kim Dokja is the sole reader of an obscure web novel called "Three Ways to Survive the Apocalypse" that he has followed devotedly for over a decade. When the events of the novel suddenly become reality, Dokja\'s knowledge of the plot gives him a unique advantage in the now-apocalyptic world governed by a system of scenarios that people must complete to survive. What makes Dokja compelling is the tension between his detached, analytical approach to navigating scenarios based on his reader\'s knowledge, and his growing emotional investment in the characters he once considered fictional. Though often maintaining a facade of aloofness, he repeatedly risks himself for others, revealing a deeply empathetic nature beneath his calculating exterior. His character explores themes of narrative power, the relationship between author, character, and reader, and how stories shape our understanding of both ourselves and others.',
        additionalImages: [
          { 
            url: 'https://images.unsplash.com/photo-1472396961693-142e6e269027', 
            caption: 'Kim Dokja using his abilities'
          }
        ],
        category: 'manhwa' as const
      },
      {
        id: 'ju-jing',
        image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04',
        stats: {
          name: 'Ju Jing / Joo-Hee',
          age: 'Young adult',
          traits: ['Skilled', 'Ambitious', 'Determined', 'Adaptable']
        },
        description: 'Ju Jing (also translated as Joo-Hee) is the protagonist of the manhwa "Her Summon" by Jin-Joon Park. An extreme social recluse suffering from severe anthropophobia (fear of people) due to traumatic bullying, Ju Jing\'s life changes dramatically when he is summoned to another world by a young priestess. Unlike typical isekai protagonists who receive extraordinary powers, Ju Jing maintains his anxieties and awkwardness in the new world. However, he discovers that his photography hobby translates into a unique ability: anything he photographs with his smartphone camera gains statistical information he can analyze, and he can summon photographic recreations of creatures and objects he\'s captured. What makes Ju Jing remarkable is his gradual character development from a terrified shut-in to a person who, while still socially awkward, finds purpose in helping others and confronting his fears. The series uses his journey to explore themes of trauma recovery, finding courage through purpose, and the different ways people perceive and interact with the world.',
        category: 'manhwa' as const
      },
      {
        id: 'lessa',
        image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901',
        stats: {
          name: 'Lessa',
          traits: ['Powerful', 'Stoic', 'Conflicted', 'Protective']
        },
        description: 'Lessa is the titular protagonist of the fantasy manhwa "LESSA" by POGO. A deity known as the God of Light who has taken human form, Lessa struggles with his role and responsibilities in a world where humans, gods, and demons exist in an uneasy balance. After centuries of slumber, he awakens to find the world significantly changed, with humans having developed technology and society in new directions. Possessing immense power but an initially detached view of humanity, Lessa\'s character development revolves around his growing connections to individuals and his evolving understanding of his purpose. What makes him compelling is the contrast between his divine nature and his increasingly human emotions and attachments, creating an internal conflict between duty and personal bonds. As both protector and potential destroyer, Lessa embodies the series\' exploration of duality, morality in a world of supernatural powers, and the nature of divinity when faced with human experience and emotion.',
        additionalImages: [
          { 
            url: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901', 
            caption: 'Lessa using his divine powers'
          }
        ],
        category: 'manhwa' as const
      }
    ]
  },
  asian: {
    title: 'Asian Animation Characters',
    description: 'Discover beloved characters from various Asian animations beyond anime and manhwa.',
    characters: [
      {
        id: 'nezha',
        image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
        stats: {
          name: 'Nezha',
          traits: ['Rebellious', 'Powerful', 'Protective', 'Determined']
        },
        description: 'Nezha is one of the most iconic characters in Chinese mythology and animation, appearing in numerous films and series including the acclaimed 2019 animated film "Ne Zha." Born as a divine pearl but demonically influenced during gestation, Nezha is destined to bring destruction according to prophecy. Despite being feared and rejected by his community for his uncontrollable powers and mischievous nature, Nezha ultimately chooses to defy his fate and protect humanity. Traditionally depicted with his signature weapons—the Universe Ring and the Red Armillary Sash—and ability to ride on wheels of fire, modern adaptations often portray him as a rebellious youth fighting against predetermined destiny. The character represents the complex theme of creating one\'s own path despite circumstances of birth, as well as the tension between individual freedom and societal expectations. Throughout various adaptations, Nezha\'s journey from outcast to hero resonates as a powerful narrative about self-determination and sacrifice.',
        additionalImages: [
          { 
            url: 'https://images.unsplash.com/photo-1472396961693-142e6e269027', 
            caption: 'Nezha with his iconic weapons'
          }
        ],
        category: 'asian' as const
      },
      {
        id: 'monkey-king',
        image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
        stats: {
          name: 'Sun Wukong (Monkey King)',
          traits: ['Clever', 'Powerful', 'Rebellious', 'Loyal']
        },
        description: 'Sun Wukong, widely known as the Monkey King, is perhaps the most recognizable character in Chinese literature and animation, originating from the 16th-century novel "Journey to the West" and appearing in countless adaptations across various media. Born from a stone egg on the Mountain of Flowers and Fruit, Sun Wukong gains supernatural powers through Taoist practices, including incredible strength, immortality, and the ability to transform into 72 different forms. His signature weapon is a magical expanding staff called Ruyi Jingu Bang. Initially arrogant and rebellious—even proclaiming himself the "Great Sage Equal to Heaven" and causing havoc in the celestial court—Sun Wukong is eventually imprisoned by Buddha under Five Finger Mountain. Later released to accompany the monk Xuanzang on a journey to retrieve Buddhist scriptures from India, he gradually transforms from a chaotic trickster to a disciplined protector. In animation, he has been portrayed in various ways, from the comedic rebel in "Havoc in Heaven" (1961-1964) to more nuanced characterizations in recent adaptations like "The Monkey King: Hero is Back" (2015), but always maintaining his clever, mischievous nature and extraordinary abilities.',
        category: 'asian' as const
      },
      {
        id: 'sangokushi',
        image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04',
        stats: {
          name: 'Liu Bei',
          traits: ['Virtuous', 'Strategic', 'Compassionate', 'Determined']
        },
        description: 'Liu Bei is a central character in various Chinese animations based on the historical novel "Romance of the Three Kingdoms," including "Sangokushi" adaptations. Based on the actual warlord who founded the state of Shu during China\'s Three Kingdoms period (220-280 CE), Liu Bei is typically portrayed as an embodiment of virtue and legitimacy as a distant relative of the Han imperial family. In contrast to his rivals Cao Cao and Sun Quan, Liu Bei is characterized by his compassion for common people and unwavering loyalty to the declining Han Dynasty. His brotherhood oath with Guan Yu and Zhang Fei in the famous "Peach Garden Oath" represents one of the most celebrated bonds of loyalty in Chinese culture. In animations, Liu Bei\'s character often explores the tension between idealism and pragmatism in leadership, showing how his compassionate nature both inspires tremendous loyalty and sometimes leads to strategic disadvantages. His complex relationship with his brilliant but sometimes amoral strategist Zhuge Liang adds further depth to his character, illustrating the balance between virtue and necessity in governance.',
        additionalImages: [
          { 
            url: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04', 
            caption: 'Liu Bei with his sworn brothers'
          }
        ],
        category: 'asian' as const
      },
      {
        id: 'bheem',
        image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901',
        stats: {
          name: 'Chhota Bheem',
          age: 9,
          traits: ['Strong', 'Brave', 'Kind', 'Quick-thinking']
        },
        description: 'Chhota Bheem is the titular protagonist of one of India\'s most popular animated series, created by Rajiv Chilaka and produced by Green Gold Animation. Set in the fictional kingdom of Dholakpur in medieval India, Bheem is a nine-year-old boy with extraordinary strength, especially after eating his favorite food—laddus (Indian sweets). With his friends Chutki, Raju, Jaggu (a monkey), and Kalia (an occasional rival), Bheem protects his village from various threats, solves problems, and embarks on adventures across India and sometimes beyond. While loosely inspired by the mighty Bheem from the ancient Indian epic Mahabharata, Chhota Bheem is a distinctly child-friendly character who emphasizes values like friendship, courage, and quick thinking. His incredible popularity has made him a cultural phenomenon in India, with the show translated into multiple languages and spawning films, comics, and merchandise. The character represents a successful blend of traditional Indian storytelling elements with contemporary children\'s entertainment, celebrating Indian culture while delivering universal messages about heroism and friendship.',
        category: 'asian' as const
      },
      {
        id: 'century-egg',
        image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
        stats: {
          name: 'Century Egg / Pidan',
          traits: ['Curious', 'Adaptive', 'Clever', 'Kind']
        },
        description: 'Century Egg (Pidan) is the protagonist of "The Legend of Pidan," a popular Chinese animated children\'s series created by Nice Boat Animation and known internationally as "Egg Boy." Named after the preserved Chinese egg delicacy, Pidan is a magical egg boy who lives with his grandmother in a fantastical world. With his round body, stubby limbs, and ability to detach his hard egg shell to reveal his more vulnerable inner self, Pidan has a distinctive visual design that has made him instantly recognizable. The series follows his adventures with friends like the inventor Fox and the strong but simple Bear as they solve village problems and occasionally face the mischievous Wolf. What makes Pidan engaging is his combination of childlike wonder and hidden wisdom, often finding creative solutions to problems that others miss. The show uses his adventures to introduce aspects of Chinese culture and values to young viewers, emphasizing cooperation, resourcefulness, and community, while his egg nature provides metaphors about protection, vulnerability, and growth that resonate beyond the target audience of young children.',
        additionalImages: [
          { 
            url: 'https://images.unsplash.com/photo-1472396961693-142e6e269027', 
            caption: 'Pidan with his friends'
          }
        ],
        category: 'asian' as const
      }
    ]
  }
};

