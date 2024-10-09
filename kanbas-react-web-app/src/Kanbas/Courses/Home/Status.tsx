import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { BsBarChartFill, BsBellFill, BsHouseFill, BsMegaphoneFill } from "react-icons/bs";
import { VscBeaker } from "react-icons/vsc";
export default function CourseStatus() {
  return (
    <div id="wd-course-status" className="d-none d-lg-block" style={{ width: "300px" }}>
      <h2>Course Status</h2>
      <div className="d-flex">
        <div className="w-50 pe-1">
          <button className="btn btn-lg btn-secondary w-100 text-nowrap ">
            <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish </button>
        </div>
        <div className="w-50">
          <button className="btn btn-lg btn-success w-100">
            <FaCheckCircle className="me-2 fs-5" /> Publish </button>
        </div>
      </div><br />
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <BiImport className="me-2 fs-5" /> Import Existing Content </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <BsHouseFill className="me-2 fs-5" /> Choose Home Page </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <BsBarChartFill className="me-2 fs-5" /> View Course Screen </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <BsMegaphoneFill className="me-2 fs-5" /> New Announcement </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <VscBeaker className="me-2 fs-5" /> New Analysis </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <BsBellFill className="me-2 fs-5" /> View Course Notifications </button>
    </div>
  );
}
