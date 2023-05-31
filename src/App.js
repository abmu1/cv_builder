import React, {useState} from "react";
import Preview from "./components/preview";
import './stylesheets/styles.css';
import Form from "./components/form";
import uniqid from 'uniqid';
function App() {
  const [state, setState] = useState({
    profilePic: '',
    name: '',
    position: '',
    description: '',
    address: '',
    phone: '',
    email: '',
    website: '',
    skills: [],
    works: [],
    educations: []
  });
  
  const example = {
    "profilePic": null,
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, optio saepe rerum rem nemo aliquid fugit odit libero voluptates sequi tenetur minima? Officia molestias minima culpa vel, molestiae consectetur praesentium.\nTenetur obcaecati temporibus ullam mollitia nihil praesentium ex accusamus, adipisci labore sunt ipsam vero consequatur perferendis cum ducimus laudantium enim dicta minus architecto ratione! Ullam debitis iusto optio enim beatae.",
    "name": "CATHEW CATSON",
    "position": "JUNIOR BACKEND DEVELOPER",
    "address": "1234 5th FakeStreet/FK",
    "phone": "123-456-789",
    "email": "email@email.com",
    "website": "info@fakesite.com",
    "skills": [
      {skill: "Skill 1", id: uniqid()},
      {skill: "Skill 2", id: uniqid()},
      {skill: "Skill 3", id: uniqid()},
      {skill: "Skill 4", id: uniqid()},
      {skill: "Skill 5", id: uniqid()},
      {skill: "Skill 6", id: uniqid()},
      {skill: "Skill 7", id: uniqid()},
    ],
    "works": [
      {
        "company": "Company Name",
        "city": "Company Address",
        "startEnd": "2015-2019",
        "position": "JOB POSITION",
        "roleDescription": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, optio saepe rerum rem nemo aliquid fugit odit libero voluptates sequi tenetur minima? Officia molestias minima culpa vel, molestiae consectetur praesentium.\nTenetur obcaecati temporibus ullam mollitia nihil praesentium ex accusamus, adipisci labore sunt ipsam vero consequatur perferendis cum ducimus laudantium enim dicta minus architecto ratione! Ullam debitis iusto optio enim beatae."
      },
      {
        "company": "Company Name",
        "city": "Company Address",
        "startEnd": "2019-2021",
        "position": "JOB POSITION",
        "roleDescription": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, optio saepe rerum rem nemo aliquid fugit odit libero voluptates sequi tenetur minima? Officia molestias minima culpa vel, molestiae consectetur praesentium.\nTenetur obcaecati temporibus ullam mollitia nihil praesentium ex accusamus, adipisci labore sunt ipsam vero consequatur perferendis cum ducimus laudantium enim dicta minus architecto ratione! Ullam debitis iusto optio enim beatae."
      },
      {
        "company": "Company Name",
        "city": "Company Address",
        "startEnd": "2021-2023",
        "position": "JOB POSITION",
        "roleDescription": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, optio saepe rerum rem nemo aliquid fugit odit libero voluptates sequi tenetur minima? Officia molestias minima culpa vel, molestiae consectetur praesentium.\nTenetur obcaecati temporibus ullam mollitia nihil praesentium ex accusamus, adipisci labore sunt ipsam vero consequatur perferendis cum ducimus laudantium enim dicta minus architecto ratione! Ullam debitis iusto optio enim beatae."
      }
    ],
    "educations": [
      {
        "university": "UNIVERSITY NAME",
        "location": "University Location",
        "fromTo": "2008-2012",
        "major": "Degree In major"
      },
      {
        "university": "UNIVERSITY NAME",
        "location": "University Location",
        "fromTo": "2012-2014",
        "major": "Degree In major"
      }
    ]
  }

  return (
    <div className='App'>
      <Form setState={setState} example={example}/>
      <Preview state={state}/>
    </div>
  )

};

export default App;
