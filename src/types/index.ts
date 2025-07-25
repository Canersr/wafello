/* başlık elemeden önceki kod
export type MenuItem = {
  id: string;
  category: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  aiHint?: string;
};
*/
export type MenuItem = {
  id: string;
  category: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  aiHint?: string;
  subcategory?: string;
};