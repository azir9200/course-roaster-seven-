import { useEffect } from "react";
import { useState } from "react";
import Subject from "../subject/subject";


const Course = () => {

  const [course, setCourse] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setCourse(data));
  }, [])

  // console.log(course);
  return (
    <div className="w-3/4" >
      <h2>Course:{course.length} </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4" >
        {
          course.map(subject => <Subject
            key={subject.id}
            subject={subject}
          ></Subject>)
        }

      </div>


    </div>
  );
};

export default Course;