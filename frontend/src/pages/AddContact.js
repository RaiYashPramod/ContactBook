import { useState } from "react"
import { useContactContext } from "../hooks/useContactContext";
import { useNavigate } from "react-router-dom";

const AddContact = () => {
    const { dispatch } = useContactContext();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [emptyFields, setEmptyFields] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const contact = {name, phone, email};

        const response = await fetch('http://localhost:5000/api/contacts/add',{
            method: 'POST',
            body: JSON.stringify(contact),
            headers:{
                "Content-Type": "application/json"
            }
        })

        const json = await response.json();

        if (!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
          }
        if (response.ok) {
            setError(null)
            setName('')
            setPhone('')
            setEmail('')
            setEmptyFields([])
            console.log(json);
            dispatch({type: 'CREATE_CONTACT', payload: json});
            dispatch({type: 'REDIRECT', payload: navigate('/')});
        }
    }


    return (
        <>
            <h3 className="add">Add a New Contact</h3>
            <form className="create" onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" onChange={(e) => setName(e.target.value)} value={name} className={emptyFields.includes('name') ? 'error' : ''} />
                <label>Phone No.:</label>
                <input type="Number" onChange={(e) => setPhone(e.target.value)} value={phone} className={emptyFields.includes('phone') ? 'error' : ''} />
                <label>Email:</label>
                <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} className={emptyFields.includes('email') ? 'error' : ''} />
                <button>Add Contact</button>
                {error && <div className="error">{error}</div>}
            </form>
        </>
    )
}

export default AddContact;