import Link from 'next/link';
import { useRouter, withRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

const Sample = (props) => {
  //   const [show, setShow] = useState('show');
  const router = useRouter();

  const handleClick = () => {
    props.router.push({
      pathname: `/steps`,
      query: { shows: false },
    });
  };
  return (
    <div>
      <Link href="">
        <Button onClick={handleClick}> modal link</Button>
      </Link>
    </div>
  );
};

export default withRouter(Sample);
