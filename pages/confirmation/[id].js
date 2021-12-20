import Link from 'next/link';
import { Button, Form } from 'react-bootstrap';
import router, { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import axios from 'axios';

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

const ConfirmationIndex = ({ ninja }) => {
  const router = useRouter();
  const { register, handleSubmit, errors, reset } = useForm();
  const [amountOfTicket, setAmountOfTicket] = useState(1);
  const [phone, setPhone] = useState();
  const [pin, setPin] = useState();
  const [birthDate, serBirthDate] = useState();
  const [eventPrice, setEventPrice] = useState(1000);

  // const amountOfTicket = 1;
  // const eventPrice = 1000;
  // const [value, setValue] = useState(defaultState);

  const onChangeHandler = () => {
    const amountOfTicketInput = document.querySelector('.form-select').value;
    const eventPriceLabel = document.querySelector('.event-price');
    setAmountOfTicket = amountOfTicketInput.value;
    eventPrice = amountOfTicketInput * eventPrice;
    eventPriceLabel.innerHTML = eventPrice;
    if (phone.length < 9) {
      document.querySelector('.phone-error').innerHTML =
        '  Phone Number length should be greater than 6.';
    } else if (phone.length > 11) {
      document.querySelector('.phone-error').innerHTML =
        '  Phone Number length should be less than 11.';
    } else if (pin.length < 6) {
      document.querySelector('.pin-error').innerHTML =
        '  Pin Number length should be greater than 6.';
    } else if (pin.length > 8) {
      document.querySelector('.pin-error').innerHTML =
        '  Pin Number length should be less than 8.';
    }
  };

  const backHandler = () => {
    router.back();
  };

  async function onSubmitForm() {
    // window.alert(amountOfTicket + phone + pin + birthDate + eventPrice);

    //  else {
    const data = {
      amountOfTicket: amountOfTicket,
      phone: phone,
      pin: pin,
      birthDate: birthDate,
      eventPrice: eventPrice,
    };

    let config = {
      method: 'post',
      url: 'http://localhost:3000/api/data',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    try {
      const response = await axios(config);

      if (response.status == 200) {
        reset();
        window.alert('success');
        router.push('/otp/' + ninja.id);
      }
    } catch (err) {
      window.alert(err);
      router.push('/otp/' + ninja.id);
    }
    // }
  }

  return (
    <div className="container w-lg-50 w-sm-100  p-5  overflow-auto bg-light  shadow rounded-3 ">
      <p className="text-center fs-4 fw-bold pb-2"> Get Your Ticket</p>
      <div className="row   gx-0 align-items-center justify-content-center">
        <div className="card col-12 ">
          <div className="card-header">Event Details</div>
          <div className="card-body">
            <h5 className="card-title">Evet Name: {ninja.name}</h5>
            <p className="card-text">Event location: {ninja.email}</p>
            <p className="card-text">Event Date: {ninja.website}</p>
            <div className="w-20">
              <h5 className="card-title me-4 " style={{ color: 'purple' }}>
                Evet Price: <span className="event-price">{eventPrice}</span>{' '}
                ETB
              </h5>
            </div>
          </div>
        </div>
      </div>
      <Form
        className="row g-3 needs-validation justify-content-center"
        novalidate
        onSubmit={handleSubmit(onSubmitForm)}
      >
        <div className="pt-3">
          <label className="form-label">Number of tickets</label>
          <select
            name="ticketNumber"
            className="form-select "
            aria-label="Default select example"
            onChange={onChangeHandler}
          >
            <option selected disabled>
              Select the amount of ticket
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </div>
        <div className="">
          <label className="form-label">Phone</label>
          <input
            type="number"
            name="phone"
            className="form-control"
            id="validationCustom01"
            onChange={(e) => {
              setPhone(e.currentTarget.value);
            }}
            placeholder="please enter your phone number"
            required
          />
          <div className="text-danger phone-error"></div>
        </div>
        <div className="">
          <label className="form-label">PIN Number</label>
          <input
            type="number"
            name="pin"
            className="form-control"
            id="validationCustom02"
            onChange={(e) => {
              setPin(e.currentTarget.value);
            }}
            placeholder="please enter your pin number"
            required
          />
          <div className="text-danger pin-error"></div>
        </div>

        <div className="">
          <label className="form-label">Date of Birth</label>
          <input
            name="birthDate"
            type="date"
            className="form-control"
            id="validationCustom05"
            required
            onChange={(e) => {
              serBirthDate(e.currentTarget.value);
            }}
          />
          <div className="text-danger bitrhDate-error"></div>
        </div>

        <div className="col-12">
          {/* <Link href="/otp/otp"> */}
          <Button
            className="btn mr-4 px-lg-4 p-sm-1 border-0"
            onClick={backHandler}
            style={{ backgroundColor: 'purple', color: 'white' }}
          >
            Back
          </Button>
          {/* <Link href={'/otp/' + ninja.id} key={ninja.id} passHref> */}
          <Button
            className="btn mx-4 px-4 border-0"
            type="submit"
            // onClick={routerHandler}
            style={{ backgroundColor: 'purple', color: 'white' }}
          >
            Next
          </Button>
          {/* </Link> */}
          {/* </Link> */}
        </div>
      </Form>
    </div>
  );
};

export default ConfirmationIndex;
