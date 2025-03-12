import React from "react";

function ContactForm() {
  return (
    <div id="contact" className="py-8 mx-6 px-4 md:px-20 md:mx-20 md:py-20 md:flex items-center justify-between">
      <div className="flex flex-col h-full md:space-y-40 md:w-1/2 items-start justify-between">
        <h1 className="font-bold text-2xl md:text-3xl md:pr-40 pb-4">
          Have a <span className="text-[#FC9713]">free consultation</span> from
          experts
        </h1>
        <div className="md:hidden mb-4">
          <p className="text-[#667085]">You can reach us anytime via</p>
          <p>admin@livingenvironmentt.com</p>
        </div>
        <div className="font-medium md:flex flex-col items-start gap-y-2 hidden ">
          <p>Ph.no: +91 90355 06450</p>
          <p>Email: admin@livingenvironmentt.com</p>
          <p>Address: Elu's Road, Billishivale, Bangalore, KA 560077</p>
        </div>
      </div>

      <div className="md:bg-[#ECECEC] text-[#575757] md:flex flex-col md:gap-y-6 md:px-14 rounded-md py-8">
        <h1 className="font-bold text-2xl hidden md:inline-block">
          Contact Us
        </h1>
        <div className="md:flex md:items-center">
          <p className="md:hidden mb-2 mt-2">Name</p>
          <input
            type="text"
            placeholder="Name"
            className="border border-[#D0D5DD] pl-4 md:pl-0 rounded-md md:border-0 md:rounded-none md:border-b mb-4 md:mb-0 md:mr-4 py-2"
          />
          <p className="md:hidden mb-2 mt-2">Phone number</p>
          <input
            type="number"
            placeholder="Phone No."
            className="border border-[#D0D5DD] pl-4 md:pl-0 rounded-md md:border-0 md:rounded-none md:border-b py-2"
          />
        </div>
        <p className="md:hidden mb-2 mt-4">Email</p>
        <input
          type="text"
          placeholder="Email Address"
          className="border border-[#D0D5DD] pl-4 md:pl-0 rounded-md md:border-0 md:rounded-none md:border-b py-2"
        />
        <p className="md:hidden mb-2 mt-4">Service</p>
        <input
          type="text"
          placeholder="Service"
          className="border border-[#D0D5DD] pl-4 md:pl-0 rounded-md md:border-0 md:rounded-none md:border-b py-2 w-full md:w-auto"
        />
        <button className="bg-[#5033E2] hidden text-white py-2 px-4 mt-4 md:mt-0 rounded-md md:inline-block">
          Send
        </button>
        <button className="bg-gradient-to-b from-[#F1AC51] to-[#FC9713] text-white py-2 w-full rounded-md mt-4 md:hidden">
          Send Message
        </button>
      </div>
    </div>
  );
}

export default ContactForm;
