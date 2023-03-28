import React, { ChangeEvent, FormEvent, useRef, useState } from "react";

const Form = () => {
   const nameRef = useRef<HTMLInputElement>(null);
   const ageRef = useRef<HTMLInputElement>(null);

   const [person, setPerson] = useState({
      name: "Alex",
      age: "",
   });

   const handleFormSubmission = (event: FormEvent) => {
      event.preventDefault();
   };

   const handlePersonNameOnChange = (event: ChangeEvent<HTMLInputElement>) => {
      setPerson({ ...person, name: event.target.value });
   };

   const handlePersonAgeOnChange = (event: ChangeEvent<HTMLInputElement>) => {
      setPerson({ ...person, age: event.target.value });
   };

   return (
      <form action="" onSubmit={handleFormSubmission}>
         <p>Name</p>
         <input
            type="text"
            ref={nameRef}
            onChange={handlePersonNameOnChange}
            value={person.name}
         />
         <p>Age</p>
         <input
            type="number"
            ref={ageRef}
            onChange={handlePersonAgeOnChange}
            value={person.age}
         />
         <br />
         <button className="btn btn-primary">Submit</button>
      </form>
   );
};

export default Form;
