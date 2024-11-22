export default function BootstrapNavigation() {
  return (
    <div>
      <div id="wd-css-navigating-with-tabs">
        <h2>Tabs</h2>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active" href="#">Active</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
      </div>
      <div id="wd-css-navigating-with-cards">
        <h2>
          Cards
        </h2>
        <div className="card"
          style={{ width: "18rem" }}>
          <img src="images/hwy9.png"
            className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">
              CA-Saratoga-9
            </h5>
            <p className="card-text">
              California's best time attack
            </p>
            <a href="https://youtu.be/z301nt9Uk_Y" className="btn btn-primary">
              Go
            </a>
          </div>
        </div>
      </div></div>
  )
}