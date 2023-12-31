import { useEffect } from "react";
import { useState } from "react";
import Subject from "../subject/subject";

const Course = ({ handleAddToShoppingcart }) => {
  const [course, setCourse] = useState([]);




  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setCourse(data));
  }, [])



  return (
    <div className="w-3/4" >

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4" >
        {
          course.map(subject => <Subject
            key={subject.id}
            subject={subject}
            handleAddToShoppingcart={handleAddToShoppingcart}
          ></Subject>)
        }

      </div>


    </div >
  );
};

export default Course;