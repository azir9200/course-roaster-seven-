

const subject = ({ subject }) => {

  const { image, course_name, price, credit } = subject;

  return (
    <div className="text text-center shadow-2xl" >
      <img className="mx-4 lg:mx-0"
        src={image} alt="" />
      <h2> {course_name} </h2>
      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
      <div className="flex justify-center gap-4">
        <p>Price : {price} </p>
        <p>Credit : {credit} </p>
      </div>
    </div>
  );
};

export default subject;


