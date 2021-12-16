import { Button, Form } from 'react-bootstrap';
import Link from 'next/link';
import router, { useRouter } from 'next/router';

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  // map data to an array of path objects with params (id)
  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
  const data = await res.json();

  return {
    props: { ninja: data },
  };
};

const Confirmation = ({ ninja }) => {
  const router = useRouter();
  const backHandler = () => {
    router.back();
  };

  return (
    <div className="container w-lg-50 w-xs-100  p-5  overflow-auto bg-light  shadow rounded-3 ">
      <p className="text-center fs-4 fw-bold pb-2"> Confirm Your Payment</p>
      <div className="row   gx-0 align-items-center justify-content-center">
        <div className="card col-12 ">
          <div className="card-header">Event Details</div>
          <div className="card-body">
            <h5 className="card-title">Evet Name: {ninja.name}</h5>
            <p className="card-text">Event location: {ninja.email}</p>
            <p className="card-text">Event Date: {ninja.website}</p>
            <h5 className="card-title">Evet Price: 1000 ETB</h5>
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
            className="btn mr-lg-4 px-lg-4 mr-xs-2 px-xs-2"
            onClick={backHandler}
            //   type="submit"
            style={{ backgroundColor: 'purple', color: 'white' }}
          >
            Back
          </Button>
          <Link href="otp/otp" passHref>
            <Button
              href="#"
              className="btn mx-4"
              //   type="submit"
              style={{ backgroundColor: 'purple', color: 'white' }}
            >
              Submit form
            </Button>
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default Confirmation;
