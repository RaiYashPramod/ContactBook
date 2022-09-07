import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h1>Contact Book</h1>
                </Link>
                <nav>
                    <div className='addButton'>
                        <Link to='/add' className='text'>Add Contact</Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar;