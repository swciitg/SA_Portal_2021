import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTeam, editTeam } from "../../../actions/hostelteams";
import { BASEURL } from "../../../constants";
import { useHistory } from "react-router-dom";

const HostelForm = ({type, formData}) => {
    const history = useHistory();

    const [name, setname] = useState(
        formData && formData.name ? formData.name : ""
    );

    const [email, setemail] = useState(
        formData && formData.email ? formData.email : ""
    );
    const [post, setpost] = useState(
        formData && formData.post ? formData.post : ""
    );
    const [priority_number,setpriority_number] = useState(
        formData && formData.priority_number ? formData.priority_number : ""  
    );
    const [contactNo,setcontactNo] = useState(
        formData && formData.contactNo ? formData.contactNo : ""  
    );
    const [imagePath, setimagePath] = useState(
        formData && formData.imagePath ? formData.imagePath : ""
    );
    
    const hostel_id = formData && formData._id;

    const dispatch = useDispatch();

    const formSubmitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("post", post);
        formData.append("contactNo", contactNo);
        formData.append("priority_number",priority_number);
        formData.append("image", imagePath);
            
        console.log(formData);
    
        if (type === "Add")
            dispatch(createTeam(formData)).then(() => {            
            });
        else dispatch(editTeam(hostel_id, formData)).then(() => {            
        });
        history.push(`${BASEURL}/admin/team/hostels`);
        // window.location.replace(`${BASEURL}/admin/team/hostels`);
    };

    return (
        <>
            <h1 class="text-3xl text-black pb-6">{type} Hostel Member</h1>

            <div class="flex flex-wrap justify-center">
                <div class="w-full lg:w-1/2 my-6 pr-0 lg:pr-2">
                <p class="text-xl pb-6 flex items-center">
                    <i class="fas fa-list mr-3"></i> {type} Member
                </p>

                <div className="leading-loose">
                    <form
                    className="p-10 bg-white rounded shadow-xl"
                    onSubmit={(e) => formSubmitHandler(e)}
                    >
                    <div className="mt-2">
                        <label className="block text-sm text-gray-600" htmlFor="name">
                        Name
                        </label>
                        <input
                        className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                        id="name"
                        name="name"
                        type="text"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                        placeholder="Name"
                        required
                        />
                    </div>

                    <div className="mt-2">
                        <label className="block text-sm text-gray-600" htmlFor="email">
                        Email Id
                        </label>
                        <input
                        className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                        id="email"
                        name="email"
                        type="text"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                        placeholder="Email Id"
                        required
                        />
                    </div>

                    <div className="mt-2">
                        <label className="block text-sm text-gray-600" htmlFor="post">
                        Post
                        </label>
                        <input
                        className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                        id="post"
                        name="post"
                        type="text"
                        value={post}
                        onChange={(e) => setpost(e.target.value)}
                        placeholder="Post"
                        required
                        />
                    </div>
                    
                    <div className="mt-2">
                        <label className="block text-sm text-gray-600" htmlFor="contactNo">
                        Contact No.
                        </label>
                        <input
                        className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                        id="contactNo"
                        name="contactNo"
                        type="text"
                        value={contactNo}
                        onChange={(e) => setcontactNo(e.target.value)}
                        placeholder="Contact No."
                        required
                        />
                    </div>

                    <div className="mt-2">
                        <label className="block text-sm text-gray-600" htmlFor="priority_number">
                        Priority Number
                        </label>
                        <input
                        className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                        id="priority_number"
                        name="priority_number"
                        type="text"
                        value={priority_number}
                        onChange={(e) => setpriority_number(e.target.value)}
                        placeholder="Priority Number"
                        required
                        />
                    </div>

                    <div className="mt-2">
                        <label
                        className="block text-sm text-gray-600"
                        htmlFor="imagePath"
                        >
                        Upload Image
                        </label>
                        <input
                        type="file"
                        name="image"
                        onChange={(e) => setimagePath(e.target.files[0])}
                        />
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
            </div>
    
        </>
    )
};

export default HostelForm;