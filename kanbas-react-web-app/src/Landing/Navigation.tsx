import { Link } from "react-router-dom";
export default function Navigation() {
  return (
    <div id="wd-kanbas-navigation">
      <Link to="/Kanbas" id="wd-kanbas">Kanbas</Link><br />
      <ul>
        <Link to="/Labs" id="wd-labs-link">Labs</Link><br />
        <Link to="/Labs/Lab1" id="wd-labs-link">Lab 1</Link><br />
        <Link to="/Labs/Lab2" id="wd-labs-link">Lab 2</Link><br />
        <Link to="/Labs/Lab3" id="wd-labs-link">Lab 3</Link><br />
        <Link to="/Labs/Lab4" id="wd-labs-link">Lab 4</Link><br />
        <Link to="/Labs/Lab5" id="wd-labs-link">Lab 5</Link><br />
      </ul>
      <a href="https://github.com/qedjdev/cs4550/tree/a5" id="wd-a5-repo">source code</a><br />
    </div>
  );
}
