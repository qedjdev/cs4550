import { FaUserCircle } from "react-icons/fa";
export default function PeopleTable() {
  return (
    <div id="wd-people-table">
      <table className="table table-striped">
        <thead>
          <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
        </thead>
        <tbody>
          <tr><td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Tony</span>{" "}
              <span className="wd-last-name">Stark</span></td>
            <td className="wd-login-id">001234561S</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-10-01</td>
            <td className="wd-total-activity">10:21:32</td> </tr>
            <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Joseph</span>{" "}
              <span className="wd-last-name">Aoun</span>
            </td>
            <td className="wd-login-id">001234565S</td>
            <td className="wd-section">S105</td>
            <td className="wd-role">GOD</td>
            <td className="wd-last-activity">2020-10-05</td>
            <td className="wd-total-activity">5:30:12</td>
          </tr>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Dick</span>{" "}
              <span className="wd-last-name">Cheney</span>
            </td>
            <td className="wd-login-id">001234566S</td>
            <td className="wd-section">S106</td>
            <td className="wd-role">SATAN</td>
            <td className="wd-last-activity">2020-10-06</td>
            <td className="wd-total-activity">4:22:05</td>
          </tr>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Alan</span>{" "}
              <span className="wd-last-name">Greenspan</span>
            </td>
            <td className="wd-login-id">001234567S</td>
            <td className="wd-section">S107</td>
            <td className="wd-role">TA</td>
            <td className="wd-last-activity">2020-10-07</td>
            <td className="wd-total-activity">7:15:45</td>
          </tr>
        </tbody>
      </table>
    </div> );}