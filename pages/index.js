import Header from "../components/Header";
import ProductsList from "../components/ProductsList";
import { useState, useEffect } from "react";

function ProductsPage() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const accessToken =
      "QTEyOEdDTQ.b5YoIw8xqRqTdw8AhWp6iOc3qGzNTnu2LTR12t0RvyCFTPVHegzzPAp15Y0.xfPRqmp3xPK0EggV.TdP-co4_P1soGSwRNeTocRqEXsFsZvVr03mDhjYWY1yVyWy5b9Y-NuHYiLPbzqhj9D5Pk1GfsAs7fsoC2gsUkPXJUvGz80H5GytroXNSTwPn0t9mTldeaj6eoUoBadZnEJUcU9oDoe_fLxxNnr5gASb9BTyZV1lhYCRscrXQXLHZWYEQpqn9gSlBtjzvFyryIVXRHyAThe_0KQ.PLEUqwN1ehH4SwmWXmJITQ";
    fetch("https://dev-mrp.insby.tech/api/v2/session/product", {
      method: "GET",
      headers: {
        authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <div>
      <Header />
      <ProductsList data={data.data} />
    </div>
  );
}

export default ProductsPage;
