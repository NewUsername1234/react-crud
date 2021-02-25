import './Nav&Ftr.css';

export const Navbar = () => 
<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container-fluid">
        <a className="navbar-brand" href="/">CRUD</a>
        <a className="nav-link text-white px-0 me-2" href="../login">JWT: $$$ sec</a>
        <button id='btn' className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link <%= page === 'create' ? 'active' : '' %>" aria-current="page"
                        href="../create">Create</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link  <%= page === 'read' ? 'active' : '' %>" href="../read">Read</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link <%= page === 'update' ? 'active' : '' %>" href="../update">Update</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link <%= page === 'delete' ? 'active' : '' %>" href="../delete">Delete</a>
                </li>

                <li className="nav-item seperator"></li>

                <li className="nav-item">
                    <a className="nav-link" href='#'>Read All</a>
                </li>

                <li className="nav-item seperator"></li>
                
                <li className="nav-item">
                    <a className="nav-link  <%= page === 'register' ? 'active' : '' %>" href="../register">Register</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link <%= page === 'login' ? 'active' : '' %>" href="../login">Login</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
