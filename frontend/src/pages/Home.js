import { useEffect,useState } from "react";
import ContactCard from "../components/ContactCard";
import {useContactContext} from "../hooks/useContactContext"
// import UpdateContact from "./UpdateContact";
 
const Home = () => {
    // const [contacts, setContact] = useState([]);
    const { contacts, dispatch } = useContactContext()
    const [name, setName] = useState(""); 
    const [phone, setPhone] = useState(""); 
    const [email, setEmail] = useState(""); 

    
    
    useEffect(() => {
        const fetchContacts = async() => {
            const response = await fetch('http://localhost:5000/api/contacts/',{
                headers: {
                    "Content-type": "application/json"
                }
            });
            const json = await response.json()
            // setContact(await response.json());
            if (response.ok) {
                dispatch({ type: "SET_CONTACT", payload: json })
            }
        }

        fetchContacts()
    }, [dispatch])

    const deleteContact = async(_id) => {
        const response = await fetch(`http://localhost:5000/api/contacts/${_id}`,{
            method: 'DELETE',
        })
        const json = await response.json();
        console.log(json);
        // console.log(response)
        // fetchContacts()
        if (response.ok) {
            dispatch({type: 'DELETE_CONTACT', payload: json})
        }
    }
    // const singleContact = async (_id) => {
    //     const response = await fetch(`http://localhost:5000/api/contacts/${_id}`,{
    //         method: 'patch',
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     })
    // }

    const handleEdit = async (contact) => {
        setName(contact.name);
        setPhone(contact.phone);
        setEmail(contact.email);
        // navigate(`/single`)
    }

    const updateContact = async(contact) => {
        contact.preventDefault();
        const response = await fetch(`http://localhost:5000/api/contacts/${contact._id}`, {
            method: 'GET',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify()
        })
    }


    return (
        <div className="home">
            <div className="contacts">
                {contacts && contacts.map((contact) => {
                    return (
                        <div className="contact-card">
                            <ContactCard contact={contact} key={contact._id} />
                            <div className="icons">
                                <span onClick= {() => deleteContact(contact._id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                        <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                    </svg>
                                </span>
                                <i className="fas" style={{fontSize: 30}} onClick={() => handleEdit(contact)}>&#xf304;</i>
                            </div>
                        </div> 
                    )
                })} 
               
            </div>
            <div className="form">
                <h3 className="update">Update Contact</h3>
                <form className="update" >
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    <label>Phone No.:</label>
                    <input type="Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    <label>Email:</label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <button onClick={(contact) => updateContact(contact)}>Update Contact</button>
                    {/* {error && <div className="error">{error}</div>} */}
                </form>
            </div>
        </div>
    )
}

export default Home;