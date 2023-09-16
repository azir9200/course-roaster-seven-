import subject from "../subject/subject";

const Shoppingcart = ({ shoppingcart }) => {

  const isExist = shoppingcart.find(item => item.id == subject.id);
  if (isExist) {
    alert("Already Selected !");
  } else {
    const newShopcart = [...shoppingcart, subject];
  }

  return (
    <div className=" text text-center shadow-2xl text-xl">
      <h2 >Course Name:</h2>
      {shoppingcart.map((subject) => (
        <li> {subject.course_name} </li>
      ))}

    </div>
  );
};

export default Shoppingcart;