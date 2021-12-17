import { Button, Form } from 'react-bootstrap';
import Link from 'next/link';
import router, { useRouter } from 'next/router';

const OtpIndex = () => {
  const router = useRouter();
  const backHandler = () => {
    router.back();
  };
  const routerHandler = () => {
    router.push('/invoice/invoiceIndex');
  };

  return (
    <div className="container w-lg-50 w-xs-100  p-5  overflow-auto bg-light  shadow rounded-3 ">
      <p className="text-center fs-4 fw-bold pb-2"> Confirm Your Payment</p>
      <div className="row   gx-0 align-items-center justify-content-center">
        <div className="card col-12 ">
          <div className="card-header">Event Details</div>
          <div className="card-body">
            <h5 className="card-title">Evet Name: Christmas consert</h5>
            <p className="card-text">Event location: Addis Abeba,Hilon</p>
            <p className="card-text">Event Date: january 5, 2022</p>
            <h5 className="card-title " style={{ color: 'purple' }}>
              Evet Price: 1000 ETB
            </h5>
          </div>
        </div>
      </div>
      <Form
        className="row g-3 needs-validation justify-content-center pt-2"
        novalidate
      >
        <div className="">
          <label for="validationCustom01" className="form-label">
            OTP
          </label>
          <input
            type="number"
            className="form-control"
            id="validationCustom01"
            placeholder="please enter your OTP Code?"
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>

        <div className="col-12">
          <Button
            href="#"
            className="btn mr-lg-4 px-lg-4 mr-xs-2 px-xs-2 border-0"
            onClick={backHandler}
            //   type="submit"
            style={{ backgroundColor: 'purple', color: 'white' }}
          >
            Back
          </Button>
          {/* <Link href="otp/otp" passHref> */}
          <Button
            href="#"
            className="btn mx-4 border-0 px-lg-4 mr-xs-2 px-xs-2"
            type="submit"
            onClick={routerHandler}
            style={{ backgroundColor: 'purple', color: 'white' }}
          >
            Next
          </Button>
          {/* </Link> */}
        </div>
      </Form>
    </div>
  );
};

export default OtpIndex;
