import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

type Product = {
  title: string;
  description: string;
  image: string;
  link?: string;
};

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
      <CardHeader>
        <CardTitle>{product.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{product.description}</p>
      </CardContent>
      {product.link && (
        <CardFooter>
          <Button asChild>
            <a href={product.link} target="_blank" rel="noopener noreferrer">Learn More</a>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default ProductCard;
