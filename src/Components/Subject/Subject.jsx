

const subject = ({ subject, handleAddToShoppingcart }) => {

  const { image, course_name, price, credit } = subject;




  return (
    <div className="text text-center shadow-2xl" >
      <img className="mx-4 lg:mx-0"
        src={image} alt="" />
      <h2> {course_name} </h2>
      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
      <div className="flex justify-evenly gap-4">
        <p>  Price : {price} </p>
        <p>Credit : {credit} </p>
      </div>
      <button onClick={() => handleAddToShoppingcart(subject)} className="bg-blue-500 w-16 ">Select</button>
    </div>
  );
};

export default subject;


