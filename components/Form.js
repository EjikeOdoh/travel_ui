import React, { useRef } from "react";

import emailjs from "emailjs-com";

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rh1dfpp",
        "template_2tbf94y",
        form.current,
        "wKpduplXQfMKSBzok"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div className="">
      <div className="p-2 sm:px-32 pb-16 leading-normal">
        <h1 className="text-2xl font-bold text-center heading p-4">
          Contact us
        </h1>
        <form
          className="max-w-[600px] m-auto grid gap-5 mb-5 p-2"
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="grid sm:grid-cols-2 gap-2">
            <input
              type="text"
              placeholder="Name"
              className="border-2 shadow-lg p-3 rounded-md"
              name="name"
            />
            <input
              type="email"
              placeholder="Email"
              className="border-2 shadow-lg p-3 rounded-md"
              name="email"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="border-2 shadow-lg p-3 rounded-md"
            name="subject"
          />
          <textarea
            cols="30"
            row={50}
            className="w-full p-3 border-2  shadow-lg h-24 rounded-md"
            name="body"
          ></textarea>
          <button className="w-[50%] sm:w-full m-auto font-bold bg-green-600 p-3 rounded-lg text-white hover:bg-transparent hover:border-2 hover:text-black">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
