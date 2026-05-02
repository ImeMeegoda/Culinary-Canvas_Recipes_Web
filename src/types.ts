export interface Recipe {
  id: string;
  title: string;
  image?: string;
  emoji?: string;
  time: string;
  servings: number;
  tags: string[];
  ingredients: string[];
  steps: string[];
  rating?: number;
}
