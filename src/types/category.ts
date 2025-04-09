
export type CharacterStats = {
  name: string;
  age?: number | string;
  height?: string;
  traits: string[];
};

export type Character = {
  id: string;
  image: string;
  stats: CharacterStats;
  description: string;
  additionalImages?: Array<{
    url: string;
    caption: string;
  }>;
  category: 'anime' | 'disney' | 'ghibli' | 'manhwa' | 'asian';
};

export type CategoryData = {
  title: string;
  description: string;
  characters: Character[];
};

export type CategoryDataMap = {
  [key: string]: CategoryData;
};
