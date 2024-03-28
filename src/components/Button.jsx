import { Link } from "react-router-dom";

export default function Button({ goto = " ", classname, children }) {
  return (
    <div>
      <Link to={goto} className={classname}>
        {children}
      </Link>
    </div>
  );
}
