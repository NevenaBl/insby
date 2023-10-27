import ProductItem from "./ProductItem";

function ProductsList({ data }) {
  return (
    <>
      {data &&
        data.length > 0 &&
        data.map((product) => (
          <ProductItem
            image={product.image_url}
            title={product.title}
            description={product.body}
            price={product.prices[0].price}
            member_price={product.prices[0].member_price}
          />
        ))}
    </>
  );
}

export default ProductsList;
