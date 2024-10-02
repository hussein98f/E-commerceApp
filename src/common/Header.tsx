import { Link } from "react-router-dom";
import ColorSwitcher from "../components/ui/ColorSwitcher";

// interface IProps {}

const Header = () => {
  return (
    <div>
      <ColorSwitcher />
      <ul style={{ display: "flex", gap: "10px", listStyle: "none" }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="products">products</Link>
        </li>
        <li>
          <Link to="About">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
