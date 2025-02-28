export interface Product {
    id?: string | number | null;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number; 
    }
}