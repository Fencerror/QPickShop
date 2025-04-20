export interface IProduct {
  id: number;
  img: string;
  title: string;
  price: number;
  rate: number;
  details: {
    ru: string;
    en: string;
  };
}