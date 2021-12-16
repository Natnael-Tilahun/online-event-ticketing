import Link from 'next/link';
import { Button, Form } from 'react-bootstrap';
import router, { useRouter } from 'next/router';
import Ninjas from '..';

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

const Details = ({ ninja }) => {
  const router = useRouter();
  const backHandler = () => {
    router.back();
  };

  const routerHandler = () => {
    router.push('/otp/otp');
  };
  return (
    <div className="container w-50  p-5  overflow-auto bg-light  shadow rounded-3 ">
      <p className="text-center fs-4 fw-bold pb-2"> Get Your Ticket</p>
      <div className="row   gx-0 align-items-center justify-content-center">
        <div className="card col-12 ">
          <div className="card-header">Event Details</div>
          <div className="card-body">
            <h5 className="card-title">Evet Name:{ninja.name}</h5>
            <p className="card-text">Event location: {ninja.email}</p>
            <p className="card-text">Event Date: {ninja.website}</p>
            <h5 className="card-title">Evet Price: 1000 ETB</h5>
          </div>
        </div>
      </div>
      <Form
        className="row g-3 needs-validation justify-content-center"
        novalidate
      >
        <div className="">
          <label for="validationCustom01" className="form-label">
            Phone
          </label>
          <input
            type="number"
            className="form-control"
            id="validationCustom01"
            placeholder="please enter your phone number"
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="">
          <label for="validationCustom02" className="form-label">
            PIN Number
          </label>
          <input
            type="number"
            className="form-control"
            id="validationCustom02"
            placeholder="please enter your pin number"
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>

        <div className="">
          <label for="validationCustom05" className="form-label">
            Date of Birth
          </label>
          <input
            type="date"
            className="form-control"
            id="validationCustom05"
            required
          />
          <div className="invalid-feedback">
            Please provide a valid birth date.
          </div>
        </div>

        <div className="col-12">
          {/* <Link href="/otp/otp"> */}
          <Button
            className="btn mr-4 px-4"
            onClick={backHandler}
            style={{ backgroundColor: 'purple', color: 'white' }}
          >
            Back
          </Button>
          <Link href={'/otp/' + ninja.id} key={ninja.id} passHref>
            <Button
              className="btn mx-4 px-4"
              type="submit"
              // onClick={routerHandler}
              style={{ backgroundColor: 'purple', color: 'white' }}
            >
              Next
            </Button>
          </Link>
          {/* </Link> */}
        </div>
      </Form>
    </div>
  );
};

export default Details;
