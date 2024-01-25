// student.js
'use client'
const Student = ({ params }) => {
    console.log(params);
    return (
      <div>
        <h4>Student Details</h4>
        <h5>Name:{params.student}</h5>
      </div>
    );
  };
  
  export default Student;
  