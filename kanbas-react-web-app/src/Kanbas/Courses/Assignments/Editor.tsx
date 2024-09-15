export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name"><b>Assignment Name</b></label>
      <br /><br />
      <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
      <textarea cols={44} rows={9} id="wd-description" >
        The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page.
      </textarea>
      <br /><br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
              <option>ASSIGNMENTS</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option>Percentage</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
              <option>Online</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top" />
          <td>
            <label> Online Entry Options</label>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top" />
          <td>
            <input type="checkbox" name="check-entry" id="wd-text-entry" />
            <label htmlFor="wd-text-entry">Text Entry</label><br />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top" />
          <td>
            <input type="checkbox" name="check-entry" id="wd-website-url" />
            <label htmlFor="wd-website-url">Website URL</label><br />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top" />
          <td>
            <input type="checkbox" name="check-entry" id="wd-media-recordings" />
            <label htmlFor="wd-media-recordings">Media Recordings</label><br />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top" />
          <td>
            <input type="checkbox" name="check-entry" id="wd-student-annotation" />
            <label htmlFor="wd-student-annotation">Student Annotation</label><br />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top" />
          <td>
            <input type="checkbox" name="check-entry" id="wd-file-upload" />
            <label htmlFor="wd-file-upload">File Uploads</label><br />
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign</label>
          </td>
          <td>
            <div id="wd-assign-to">Assign to</div>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top" />
          <td>
            <input id="wd-assign-to" value="Everyone" />
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top" />
          <label htmlFor="wd-due-date">Due</label> <br />
          <input type="date"
            id="wd-due-date"
            value="2024-05-13" />
        </tr>
        <br />
        <tr>
          <td />
          <td align="left">
            <label htmlFor="wd-available-from">Available From</label> <br />
            <input type="date"
              id="wd-available-from"
              value="2024-05-06" />
          </td>
          <td>
            <label htmlFor="wd-available-until">Until</label> <br />
            <input type="date"
              id="wd-available-until"
              value="2024-05-20" />
          </td>
        </tr>
      </table>
    </div>
  );
}
