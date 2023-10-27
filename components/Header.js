import Link from "next/link";
import { useSession } from "next-auth/react";
import classes from "./Header.module.css";

function Header() {
  const { session } = useSession();
  return (
    <div className={classes.header}>
      <Link href="login">
        <div className={classes.profile_letter}>
          <div>{session ? session.user.email[0] : ""}</div>
        </div>
      </Link>
    </div>
  );
}

export default Header;
