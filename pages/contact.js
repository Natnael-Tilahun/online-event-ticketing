import { Button, Form } from 'react-bootstrap';
import {
  FaPhone,
  FaPhoneAlt,
  FaPhoneSlash,
  FaPhoneSquare,
  FaPhoneVolume,
} from 'react-icons/fa';
import { IoIosCall, IoMdMail } from 'react-icons/io';
import Link from 'next/link';

const Contact = () => {
  return (
    <div className="container w-lg-50 w-sm-100  p-lg-5 p-xs-0  overflow-auto bg-light  shadow rounded-3">
      <p className="text-center fs-4 fw-bold pt-2 pb-3"> Contact Us</p>

      <Form
        className="row g-3 needs-validation justify-content-center px-3 pt-0 pt-lg-3 pb-2 pb-lg-5"
        novalidate
      >
        <div className="col-6">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="validationCustom01"
            placeholder="please enter your name"
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-6">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="validationCustom02"
            placeholder="please enter your email"
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="">
          <label className="form-label">Subject</label>
          <input
            type="text"
            className="form-control"
            id="validationCustom02"
            placeholder="please enter your subject"
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            placeholder="Your message"
            rows="4"
          ></textarea>
        </div>

        <div className="col-12 text-center">
          {/* <Link href="/otp/otp"> */}

          <Button
            className="btn px-4 border-0"
            type="submit"
            // onClick={routerHandler}
            style={{ backgroundColor: 'purple', color: 'white' }}
          >
            Submit
          </Button>
          {/* </Link> */}
        </div>
      </Form>

      <div className="row   gx-0 pt-4 pt-lg-5 justify-content-center">
        <div className="col-md-3 col fw-bold text-center">
          <p className="">Phone</p>
          <div className="">
            <FaPhone
              style={{
                fontSize: '3rem',
                color: 'purple',
              }}
            />
          </div>
          <p className="text-left pt-3">+2511111252525</p>
        </div>
        <div className="col-md-3 col fw-bold text-center">
          <p>Free Call</p>

          <div>
            <FaPhoneVolume style={{ fontSize: '3rem', color: 'purple' }} />
          </div>
          <p className="text-left pt-3">+951</p>
        </div>
        <div className="col-md-3 col fw-bold text-center">
          <p>Email</p>

          <div className="">
            <IoMdMail style={{ fontSize: '3rem', color: 'purple' }} />
          </div>
          <p className="text-left pt-3">cbe.com.et</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
