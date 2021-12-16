import {
  FaPhone,
  FaPhoneAlt,
  FaPhoneSlash,
  FaPhoneSquare,
  FaPhoneVolume,
} from 'react-icons/fa';
import { IoIosCall, IoMdMail } from 'react-icons/io';

const Contact = () => {
  return (
    <div className="container  p-5  overflow-auto bg-light  shadow rounded-3 ">
      <p className="text-center fs-4 fw-bold pb-2"> Contact Us</p>
      <div className="row   gx-0 align-items-center align-self-center">
        <div className="col fw-bold p-4">
          <p>Phone</p>
          <div>
            <FaPhone
              className=""
              style={{
                fontSize: '3rem',
                color: 'purple',
              }}
            />
          </div>
        </div>
        <div className="col fw-bold p-4">
          <p>Free Call</p>

          <div>
            <FaPhoneVolume style={{ fontSize: '3rem', color: 'purple' }} />
          </div>
        </div>
        <div className="col fw-bold p-4">
          <p>Email</p>

          <div className="">
            <IoMdMail style={{ fontSize: '3rem', color: 'purple' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
