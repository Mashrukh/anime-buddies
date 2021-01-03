import Link from "next/link";
import {useAuth} from "../lib/auth";

const Header = (props) => {
    const auth = useAuth();
    return (
        <div class="py-8 float-right">
        <Link href={props.auth.email ? "/" : "/signin"}>
          <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100" onClick={props.auth.email ? props.auth.signout : ""}
          >{props.auth.email ? "Sign Out" : "Sign In"}</a>
        </Link>
        <Link href="/animes">
          <a class="p-1 sm:p-4 text-gray-900 dark:text-gray-100">Browse Animes</a>
        </Link>
      </div>
    );
}

export default Header;
