import { useSession } from "next-auth/react";
import classes from "./ProductItem.module.css";

function ProductItem(props) {
  const { session } = useSession();
  return (
    <div className={classes.product_item}>
      <div className={classes.img_frame}>
        <img className={classes.img} src={props.image} />
      </div>
      <div className={classes.description}>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <div className={classes.button_set}>
          {session ? (
            <button>{props.member_price} RSD</button>
          ) : (
            <button>{props.price} RSD</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
