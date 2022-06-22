import React from "react";

function About({image="https://via.placeholder.com/215", about}){
    console.log(about)
    console.log(image)
    return (
        <aside>
            <img src={image} alt="blog logo"></img>
            <p>{about}</p>
        </aside>
    )
}

export default About;