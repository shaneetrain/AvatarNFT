import React from "react";

const Dropdown = ({ title, body }) => {
    return (
        <div class="my-2 collapse w-96 border rounded-box border-base-300 collapse-arrow bg-gradient-to-r from-purple-600 to-blue-600 ">
            <input type="checkbox" />
            <div class="collapse-title text-xl font-bold text-white">
                {title}
            </div>
            <div class="collapse-content">
                <p className="text-white">{body}</p>
            </div>
        </div>
    );
};

export default Dropdown;
