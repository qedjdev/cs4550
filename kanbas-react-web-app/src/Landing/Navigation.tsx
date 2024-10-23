import { Link } from "react-router-dom";
export default function Navigation() {
  return (
    <div id="wd-kanbas-navigation">
      <Link to="/Kanbas" id="wd-kanbas">Kanbas</Link><br/>
      <ul>
      <Link to="/Labs" id="wd-labs-link">Labs</Link><br/>
      <Link to="/Labs/Lab1" id="wd-labs-link">Lab 1</Link><br/>
      <Link to="/Labs/Lab2" id="wd-labs-link">Lab 2</Link><br/>
      <Link to="/Labs/Lab3" id="wd-labs-link">Lab 3</Link><br/>
      </ul>
      <a href="https://github.com/qedjdev/cs4550/tree/a3" id="wd-a1-repo">source code</a><br />
    </div>
);}
