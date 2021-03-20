import React from "react";

const Forms = () => {
  return (
    <div className="w-full h-screen overflow-x-hidden border-t flex flex-col">
      <main className="w-full flex-grow p-6">
        <h1 className="w-full text-3xl text-black pb-6">Forms</h1>

        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 my-6 pr-0 lg:pr-2">
            <p className="text-xl pb-6 flex items-center">
              <i className="fas fa-list mr-3"></i> Contact Form
            </p>
            <div className="leading-loose">
              <form className="p-10 bg-white rounded shadow-xl">
                <div className="">
                  <label className="block text-sm text-gray-600" for="name">
                    Name
                  </label>
                  <input
                    className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                    id="name"
                    name="name"
                    type="text"
                    required=""
                    placeholder="Your Name"
                    aria-label="Name"
                  />
                </div>
                <div className="mt-2">
                  <label className="block text-sm text-gray-600" for="email">
                    Email
                  </label>
                  <input
                    className="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded"
                    id="email"
                    name="email"
                    type="text"
                    required=""
                    placeholder="Your Email"
                    aria-label="Email"
                  />
                </div>
                <div className="mt-2">
                  <label className=" block text-sm text-gray-600" for="message">
                    Message
                  </label>
                  <textarea
                    className="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded"
                    id="message"
                    name="message"
                    rows="6"
                    required=""
                    placeholder="Your inquiry.."
                    aria-label="Email"
                  ></textarea>
                </div>
                <div className="mt-6">
                  <button
                    className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="w-full lg:w-1/2 mt-6 pl-0 lg:pl-2">
            <p className="text-xl pb-6 flex items-center">
              <i className="fas fa-list mr-3"></i> Checkout Form
            </p>
            <div className="leading-loose">
              <form className="p-10 bg-white rounded shadow-xl">
                <p className="text-lg text-gray-800 font-medium pb-4">
                  Customer information
                </p>
                <div className="">
                  <label className="block text-sm text-gray-600" for="cus_name">
                    Name
                  </label>
                  <input
                    className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                    id="cus_name"
                    name="cus_name"
                    type="text"
                    required=""
                    placeholder="Your Name"
                    aria-label="Name"
                  />
                </div>
                <div className="mt-2">
                  <label
                    className="block text-sm text-gray-600"
                    for="cus_email"
                  >
                    Email
                  </label>
                  <input
                    className="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded"
                    id="cus_email"
                    name="cus_email"
                    type="text"
                    required=""
                    placeholder="Your Email"
                    aria-label="Email"
                  />
                </div>
                <div className="mt-2">
                  <label
                    className=" block text-sm text-gray-600"
                    for="cus_email"
                  >
                    Address
                  </label>
                  <input
                    className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                    id="cus_email"
                    name="cus_email"
                    type="text"
                    required=""
                    placeholder="Street"
                    aria-label="Email"
                  />
                </div>
                <div className="mt-2">
                  <label
                    className="hidden text-sm block text-gray-600"
                    for="cus_email"
                  >
                    City
                  </label>
                  <input
                    className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                    id="cus_email"
                    name="cus_email"
                    type="text"
                    required=""
                    placeholder="City"
                    aria-label="Email"
                  />
                </div>
                <div className="inline-block mt-2 w-1/2 pr-1">
                  <label
                    className="hidden block text-sm text-gray-600"
                    for="cus_email"
                  >
                    Country
                  </label>
                  <input
                    className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                    id="cus_email"
                    name="cus_email"
                    type="text"
                    required=""
                    placeholder="Country"
                    aria-label="Email"
                  />
                </div>
                <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
                  <label
                    className="hidden block text-sm text-gray-600"
                    for="cus_email"
                  >
                    Zip
                  </label>
                  <input
                    className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                    id="cus_email"
                    name="cus_email"
                    type="text"
                    required=""
                    placeholder="Zip"
                    aria-label="Email"
                  />
                </div>
                <p className="text-lg text-gray-800 font-medium py-4">
                  Payment information
                </p>
                <div className="">
                  <label className="block text-sm text-gray-600" for="cus_name">
                    Card
                  </label>
                  <input
                    className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                    id="cus_name"
                    name="cus_name"
                    type="text"
                    required=""
                    placeholder="Card Number MM/YY CVC"
                    aria-label="Name"
                  />
                </div>
                <div className="mt-6">
                  <button
                    className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
                    type="submit"
                  >
                    $3.00
                  </button>
                </div>
              </form>
            </div>
            <p className="pt-6 text-gray-600">
              Source:{" "}
              <a
                className="underline"
                href="https://tailwindcomponents.com/component/checkout-form"
              >
                https://tailwindcomponents.com/component/checkout-form
              </a>
            </p>
          </div>
        </div>
      </main>

      <footer className="w-full bg-white text-right p-4">
        Built by
        <a
          target="_blank"
          rel="noreferrer"
          href="https://davidgrzyb.com"
          className="underline"
        >
          David Grzyb
        </a>
        .
      </footer>
    </div>
  );
};

export default Forms;
