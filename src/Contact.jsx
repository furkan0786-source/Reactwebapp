import React, { useState } from "react";

const Contact = () => {

    const [data, setData] = useState({
       email:"",
       fullname:"",
       phone:"",
       password:"", 
    });

    const InputEvent = (event) => {
        const { name, value } = event.target;
        setData((preVal) =>{
            return {
                ...preVal,
                [name] : value,
            }
        })
    };

    const formSubmit = (e) =>{
        e.preventDefault();
        alert(
            `My name is ${data.fullname}. And My mobile number is ${data.phone}`
            );

    };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Contact US</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  aria-describedby="emailHelp"
                />
                </div>

                <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  FullName
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  aria-describedby="Enter your Name"
                />
                 <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Phone
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleInputEmail2"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  aria-describedby="Enter your mobile No"
                />
                </div>
            


                <div id="emailHelp" class="form-text">
                  We'll never share your phone no with anyone else.
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  name="password"
                  value={data.password}
                  onChange={InputEvent}
                />
              </div>
              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
