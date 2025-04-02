
export type Character = {
  id: string;
  image: string;
  stats: {
    name: string;
    age?: number | string;
    height?: string;
    traits: string[];
  };
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
