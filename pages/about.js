const About = () => {
  return (
    <div
      className="row w-100  p-5  overflow-auto bg-light  shadow rounded-3"
      style={{ height: '' }}
    >
      <div className="col justify-content-center text-center">
        {' '}
        <p className="h3 pb-2">About</p>
        <p className="text-justify lh-md px-lg-5">
          CBE Birr is a mobile based banking whereby the bank selects, trains
          and authorizes agents to provide banking services on behalf of the
          bank through a mobile phone. It is deployed as a means of extending
          financial services to the unbanked segment of the public.
        </p>
      </div>
    </div>
  );
};

export default About;
