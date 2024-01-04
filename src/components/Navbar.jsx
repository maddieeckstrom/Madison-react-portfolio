import avatar from '../assets/images/avatar.png'

function Navbar() {
    return (
        <nav>
            <div>
                <img src={avatar} className="avatar" alt="Hammock avatar" />
            </div>
            <h1>Madison</h1>
        </nav>
    )
}

export default Navbar;