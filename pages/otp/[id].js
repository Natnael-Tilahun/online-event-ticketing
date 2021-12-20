import { Button, Form } from 'react-bootstrap';
import Link from 'next/link';
import router, { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useState } from 'react';

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
  const [otpValue, setOtpValue] = useState();
  const router = useRouter();
  const { register, handleSubmit, errors, reset } = useForm();
  const backHandler = () => {
    router.back();
  };

  async function onSubmitForm() {
    if (otpValue.length < 6) {
      document.querySelector('.invalid-feedback').innerHTML =
        '  Otp code length should be greater than 6.';
    } else if (otpValue.length > 8) {
      document.querySelector('.invalid-feedback').innerHTML =
        '  Otp code length should be less than 8.';
      window.alert(otpValue.length);
    } else {
      let config = {
        method: 'post',
        url: 'http://localhost:3000/api/otp',
        headers: {
          'Content-Type': 'application/json',
        },
        data: otpValue,
      };

      try {
        const response = await axios(config);

        if (response.status == 200) {
          reset();
          window.alert('success');
          router.push({ pathname: '/invoice/' + ninja.id });
        }
      } catch (err) {
        window.alert(err);
        router.push('/invoice/' + ninja.id);
      }
    }
  }
  return (
    <div className="container w-lg-50 w-xs-100  p-4  overflow-auto bg-light  shadow rounded-3 ">
      <p className="text-center fs-4 fw-bold pb-2"> Confirm Your Payment</p>
      <div className="row   gx-0 align-items-center justify-content-center">
        <div className="card col-12 ">
          <div className="card-header">Event Details</div>
          <div className="card-body">
            <h5 className="card-title">Evet Name: {ninja.name}</h5>
            <p className="card-text">Event location: {ninja.email}</p>
            <p className="card-text">Event Date: {ninja.website}</p>
            <h5 className="card-title" style={{ color: 'purple' }}>
              Evet Price: 1000 ETB
            </h5>
          </div>
        </div>
      </div>
      <Form
        className="row g-3 needs-validation justify-content-center pt-2"
        novalidate
        onSubmit={handleSubmit(onSubmitForm)}
      >
        <div className="">
          <label className="form-label">OTP</label>
          <input
            name="otp"
            type="number"
            className="form-control"
            id="validationCustom01"
            placeholder="please enter your OTP Code?"
            onChange={(e) => {
              setOtpValue(e.currentTarget.value);
            }}
            required
          />
          <div className="text-danger"> error message fssdfsa</div>
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
          {/* <Link href={'/invoice/' + ninja.id} key={ninja.id} passHref> */}
          <Button
            // href="#"
            className="btn mx-4 border-0"
            type="submit"
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

export default Confirmation;
