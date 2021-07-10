import React from "react";
import { BASEAPI } from "../../../constants";
const TeamModal = (props) => {
  function closeModal() {
    document.getElementById(props.id).classList.remove("block");
    document.getElementById(props.id).classList.add("hidden");
  }

  return (
    <>
      <div
        id={props.id}
        className="fixed z-50 inset-0 overflow-y-auto hidden"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            aria-hidden="true"
          ></div>
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            {" "}
            &#8203;{" "}
          </span>
          <div className="inline-block align-bottom md:align-middle bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all  mb-2  w-full sm:w-9/12 md:w-3/4 lg:w-1/2">
            <div className="hidden md:block">
              <div className="flex justify-center space-x-5 m-7">
                <div
                  style={{ height: "450px" }}
                  className="overflow-hidden text-black rounded-md w-1/2"
                >
                  <div className="bg-gray-200 rounded-md">
                    <img
                      style={{ height: "300px" }}
                      src={`${BASEAPI}/team/sa/${props.id}`}
                      alt="ProfilePic"
                      className="w-full object-contain"
                    />
                  </div>
                  <div className="ml-3.5 text-2xl font-semibold mt-4">
                    {props.name}
                  </div>
                  <div className="ml-3.5 text-lg mt-2 mb-2">{props.post}</div>
                  <svg
                    className="w-full"
                    width="200"
                    height="1"
                    viewBox="0 0 420 1"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="0.5"
                      y1="0.5"
                      x2="419.5"
                      y2="0.500031"
                      stroke="black"
                      stroke-linecap="round"
                    />
                  </svg>
                  <div className="flex justify-between mx-3.5 my-2">
                    <div className="text-sm">{props.email}</div>
                    <div className="text-sm">{props.contactNo}</div>
                  </div>
                </div>
                <div className="w-1/2 hidden md:block overflow-hidden mx-4 text-sm">
                  <div className="flex justify-end mb-2 text-sm">
                    <button onClick={() => closeModal(props.id)}>
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.072 0H22.944C28.368 0 32 3.808 32 9.472V22.5456C32 28.1936 28.368 32 22.944 32H9.072C3.648 32 0 28.1936 0 22.5456V9.472C0 3.808 3.648 0 9.072 0ZM20.8166 20.8005C21.3606 20.2581 21.3606 19.3781 20.8166 18.8341L17.9686 15.9861L20.8166 13.1365C21.3606 12.5941 21.3606 11.6981 20.8166 11.1541C20.2726 10.6085 19.3926 10.6085 18.8326 11.1541L16.0006 14.0005L13.1526 11.1541C12.5926 10.6085 11.7126 10.6085 11.1686 11.1541C10.6246 11.6981 10.6246 12.5941 11.1686 13.1365L14.0166 15.9861L11.1686 18.8181C10.6246 19.3781 10.6246 20.2581 11.1686 20.8005C11.4406 21.0725 11.8086 21.2181 12.1606 21.2181C12.5286 21.2181 12.8806 21.0725 13.1526 20.8005L16.0006 17.9701L18.8486 20.8005C19.1206 21.0901 19.4726 21.2181 19.8246 21.2181C20.1926 21.2181 20.5446 21.0725 20.8166 20.8005Z"
                          fill="#1E2532"
                        />
                      </svg>
                    </button>
                  </div>
                  {props.postdesc}
                </div>
              </div>
            </div>
            <div className="flex-column bg-white block md:hidden w-auto px-2">
              <div className="flex justify-end mt-2 mr-2">
                <button onClick={() => closeModal(props.id)}>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.072 0H22.944C28.368 0 32 3.808 32 9.472V22.5456C32 28.1936 28.368 32 22.944 32H9.072C3.648 32 0 28.1936 0 22.5456V9.472C0 3.808 3.648 0 9.072 0ZM20.8166 20.8005C21.3606 20.2581 21.3606 19.3781 20.8166 18.8341L17.9686 15.9861L20.8166 13.1365C21.3606 12.5941 21.3606 11.6981 20.8166 11.1541C20.2726 10.6085 19.3926 10.6085 18.8326 11.1541L16.0006 14.0005L13.1526 11.1541C12.5926 10.6085 11.7126 10.6085 11.1686 11.1541C10.6246 11.6981 10.6246 12.5941 11.1686 13.1365L14.0166 15.9861L11.1686 18.8181C10.6246 19.3781 10.6246 20.2581 11.1686 20.8005C11.4406 21.0725 11.8086 21.2181 12.1606 21.2181C12.5286 21.2181 12.8806 21.0725 13.1526 20.8005L16.0006 17.9701L18.8486 20.8005C19.1206 21.0901 19.4726 21.2181 19.8246 21.2181C20.1926 21.2181 20.5446 21.0725 20.8166 20.8005Z"
                      fill="#1E2532"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex justify-center">
                <div style={{ width: "320px" }} className=" mt-4 rounded-md">
                  <div className="bg-gray-200 flex justify-center">
                    <img
                      src={`${BASEAPI}/team/sa/${props.id}`}
                      alt="ProfilePic"
                      className="h-64 w-auto object-contain rounded-sm "
                    />
                  </div>
                  <div className="h-16">
                    <div className=" text-2xl pt-1">{props.name}</div>
                    <div className=" text-lg pt-1">{props.post}</div>
                  </div>
                  <svg
                    className="w-full mt-3"
                    width="360"
                    height="1"
                    viewBox="0 0 360 1"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="0.5"
                      y1="0.5"
                      x2="359.5"
                      y2="0.500031"
                      stroke="black"
                      stroke-linecap="round"
                    />
                  </svg>
                  <div className="h-20">
                    <div className=" text-lg  pt-1">{props.email}</div>
                    <div className=" text-lg  pt-1">+91-{props.contactNo}</div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-2 text-sm text-center">
                {props.postdesc}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamModal;
