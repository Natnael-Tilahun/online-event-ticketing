import {} from 'react-bootstrap';

const data = [
  {
    id: 1,
    title: "Create CBEBirr account with your phone if you don't have one",
    text: 'Go to the nearest branch and create CBEBirr account',
  },
  {
    id: 2,
    title: 'Choose the event Ticket you want from the list of ticket',
    text: 'Event ticket contain the detail information about the concert date and price,then enter the amount of tickets that you want.',
  },
  {
    id: 3,
    title: 'Login with your CBEBirr phone, pin and date of birth',
    text: "Enter the valid phone and pin number don't worry about the security, we are here for you",
  },
  {
    id: 4,
    title: 'Enter 6 Digit OTP we have sent to you',
    text: 'Insert OTP before 10 min and enjoy',
  },
];

const Steps = () => {
  return (
    <div
      className="container-fluid row w-90    py-5  px-md-5 px-3 overflow-auto bg-light  shadow rounded-3  justify-content-center "
      style={{ height: '' }}
    >
      <p className="text-center fs-6"> What is the function</p>
      <p className="text-center h4 pb-5 rb" style={{ color: 'purple' }}>
        Lets see how it works
      </p>
      {data.map((item) => (
        <div
          className="col-md-6 col-lg-2 text-center text-md-start mt-3 mb-5 p-lg-5 p-xs-2  rounded-3  mx-4 "
          key={item.id}
        >
          <p className="">
            <i
              className="fw-bolder fs-6 rounded-circle text-light p-lg-3 p-3 border  border-2 "
              style={{ backgroundColor: 'purple' }}
            >
              {item.id}
            </i>
          </p>
          <p className="fs-6 fw-bold pt-3" style={{ color: 'purple' }}>
            {item.title}
          </p>
          <p className="  px-lg-0">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Steps;
