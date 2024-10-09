export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="container mt-4">
      <div className="container mb-5">
        <label htmlFor="wd-name" className="mb-2"><b>Assignment Name</b></label>
        <input id="wd-name" value="A1 - ENV + HTML" className="form-control" /><br /><br />
        <textarea cols={44} rows={9} id="wd-description" className="form-control">
          The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page.
        </textarea>
      </div>
      <div className="row d-flex justify-content-end me-1 ms-5">
        <div className="col-md-12">
          <div className="mb-3 row">
            <div className="col-3 text-end">
              <label htmlFor="wd-points">Points</label>
            </div>
            <div className="col-9">
              <input id="wd-points" type="number" className="form-control" placeholder="100" />
            </div>
          </div>
          <div className="mb-3 row">
            <div className="col-3 text-end">
              <label htmlFor="wd-group">Assignment Group</label>
            </div>
            <div className="col-9">
              <select className="form-select">
                <option>ASSIGNMENTS</option>
              </select>
            </div>
          </div>
          <div className="mb-3 row">
            <div className="col-3 text-end">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </div>
            <div className="col-9">
              <select className="form-select">
                <option>Percentage</option>
              </select>
            </div>
          </div>
          <div className="mb-3 row">
            <div className="col-3 text-end">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </div>
            <div className="col-9">
              <div className="border rounded p-2">
                <select className="form-select">
                  <option>Online</option>
                </select>
                <div className="fs-6 ms-1 mt-3">
                  <label>
                    <b>Online Entry Options</b>
                  </label>
                </div>
                <div className="fs-6 ms-1 mt-2">
                  <input className="form-check-input mt-1 me-2" type="checkbox" name="check-entry" id="wd-text-entry" />
                  <label htmlFor="wd-text-entry">Text Entry</label>
                </div>
                <div className="fs-6 ms-1 mt-2">
                  <input className="form-check-input mt-1 me-2" type="checkbox" name="check-entry" id="wd-text-entry" />
                  <label htmlFor="wd-text-entry">Website URL</label>
                </div>
                <div className="fs-6 ms-1 mt-2">
                  <input className="form-check-input mt-1 me-2" type="checkbox" name="check-entry" id="wd-text-entry" />
                  <label htmlFor="wd-text-entry">Media Recordings</label>
                </div>
                <div className="fs-6 ms-1 mt-2">
                  <input className="form-check-input mt-1 me-2" type="checkbox" name="check-entry" id="wd-text-entry" />
                  <label htmlFor="wd-text-entry">Student Annotation</label>
                </div>
                <div className="fs-6 ms-1 mt-2">
                  <input className="form-check-input mt-1 me-2" type="checkbox" name="check-entry" id="wd-text-entry" />
                  <label htmlFor="wd-text-entry">File Uploads</label>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-3 row">
            <div className="col-3 text-end">
              <label htmlFor="wd-submission-type">Assign</label>
            </div>
            <div className="col-9">
              <div className="border rounded p-2">
                <div className="fs-6 ms-1 mt-1 mb-1">
                  <label>
                    <b>Assign to</b>
                  </label>
                </div>
                <select className="form-select">
                  <option>Everyone</option>
                </select>
                <div className="fs-6 ms-1 mt-1 mb-1">
                  <label>
                    <b>Due</b>
                  </label>
                </div>
                <input type="date" className="form-control" id="wd-due" value="2024-05-13" />
                <div className="form-group row mt-3">
                  <div className="col-6 fs-6">
                    <label>
                      <b>Available from</b>
                    </label>
                    <input type="date" className="form-control" id="wd-due" value="2024-05-06" />
                  </div>
                  <div className="col-6 fs-6">
                    <label>
                      <b>Until</b>
                    </label>
                    <input type="date" className="form-control" id="wd-due" value="2024-05-14" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
