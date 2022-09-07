import React from "react";


const ContactCard = ({ contact }) => {

    return(
        <div>
            <h4>{contact.name}</h4>
            <pre><strong>Phone No: </strong>{contact.phone}</pre>
            <pre><strong>Email: </strong>{contact.email}</pre>
            {/* <p>{contact.createdAt}</p> */}
        </div>
    )
}

export default ContactCard