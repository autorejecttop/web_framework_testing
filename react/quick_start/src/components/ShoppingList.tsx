const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];

function ProductItem({
  product,
}: {
  product: {
    title: string;
    isFruit: boolean;
    id: number;
  };
}) {
  const { title, isFruit, id } = product;
  const color = isFruit ? "magenta" : "darkgreen";

  return (
    <li key={id} style={{ color }}>
      {title}
    </li>
  );
}

const listItems = products.map((product) => (
  <ProductItem key={product.id} product={product} />
));

export default function ShoppingList() {
  return <ul>{listItems}</ul>;
}
