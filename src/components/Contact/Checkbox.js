import React from 'react'



function Checkbox(props) {

    React.useEffect(() => {

        

        const checkbox = document.querySelector(".checkbox--toggle");
        let checkedOne = document.querySelector(".checkbox--toggle span");
        let checkedTwo = document.querySelector(".checkbox--toggle span.rotate");
        checkbox.addEventListener('click', () => {
            if (checkedOne.classList != "show") {
                checkedOne.classList.add("show");
                checkedTwo.classList.add("show");
                checkbox.style.background = "#28a745";
            } else {
                checkedOne.classList.remove("show");
                checkedTwo.classList.remove("show");
                checkbox.style.background = "#E92569";
            }
        })
    })

    return (
        <div className="checkbox">
            <div className="checkbox--toggle">
                    <span></span>
                    <span className="rotate"></span>
            </div>
            <div className="checkbox--toggle--text">Allow us to sell your personal details to whomever we want</div>
        </div>
    )
}

export default Checkbox
