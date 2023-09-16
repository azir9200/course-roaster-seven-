import { FaDollarSign } from 'react-icons/fa'
//import { CgReadme } from 'react-icons/fa'


const subject = ({ subject, handleAddToShoppingcart }) => {

  const { image, course_name, price, credit } = subject;




  return (
    <div className="text text-center  mt-8 shadow-2xl" >
      <img className="mx-4 lg:mx-0"
        src={image} alt="" />
      <h2 className="text-lg font-semibold "  > {course_name} </h2>
      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
      <div className="flex justify-evenly gap-4 text-xl ">
        <p className='flex ' > <FaDollarSign></FaDollarSign> Price :   {price} </p>
        <p>    Credit : {credit} </p>
      </div>
      <button onClick={() => handleAddToShoppingcart(subject)} className="bg bg-blue-500  text-2xl px-24 py-2 rounded-md">Select</button>

    </div>
  );
};

export default subject;


