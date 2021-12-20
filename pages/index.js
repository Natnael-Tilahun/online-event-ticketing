import React from 'react';
import styles from '../styles/Home.module.css';
import { Button, Card } from 'react-bootstrap';
import logo from '../public/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { Router, useRouter } from 'next/router';

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { ninjas: data },
  };
};

const Ninjas = ({ ninjas }) => {
  const router = useRouter();

  const nextHandler = () => {
    router.push({ pathname: '/confirmation/' + ninjas.id, as: 'confirm' });
  };
  return (
    <div className="w-80  p-5  overflow-auto bg-light  shadow rounded-3">
      <div className="row  gy-5 gx-lg-5 ">
        {ninjas.map((ticket) => (
          <div className="col-sm-12 col-md-6 col-lg-3" key={ticket.id}>
            <div
              // key={ticket.id}
              className="card shadow rounded-3"
              style={{ maxWidth: '310px', height: '350px' }}
            >
              <Image
                src="data:image/jpeg;base64,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"
                className="card-img-top"
                height="100vh"
                width="100vw"
                alt="image"
                style={{ width: '100vw', height: '550px' }}
              />
              <div className="card-body">
                <h5 className="card-title fs-4">{ticket.name}</h5>
                {/* <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p> */}
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">{ticket.email}</li>
                  <li className="list-group-item">{ticket.website}</li>
                  <li
                    className="list-group-item fs-4 fw-bold"
                    style={{ color: 'purple' }}
                  >
                    1000 ETB
                  </li>
                </ul>
                <Link
                  // href={'/confirmation/' + ticket.id}
                  key={ticket.id}
                  passHref
                >
                  <a
                    href="#"
                    className="btn btn-primary  d-flex justify-content-center mt-2"
                    style={{ backgroundColor: 'purple', border: 'none' }}
                    onClick={nextHandler}
                  >
                    Get Ticket
                  </a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Ninjas;
