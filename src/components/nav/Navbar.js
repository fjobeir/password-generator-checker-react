import { NavLink } from 'react-router-dom'

const Navbar = props => {
    const links = [
        {
            href: '/generate',
            text: 'Generate Password'
        },
        {
            href: '/check',
            text: 'Check Password'
        }
    ]
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <span className="navbar-brand">Password Tools</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    {links.map((menuItem, i) => {
                        return <li className="nav-item" key={i}>
                        <NavLink
                          to={menuItem.href}
                         className={activeStatus => {
                             let classes = 'nav-link '
                             if (activeStatus.isActive) {
                                classes += 'active'
                             }
                             return classes
                         }
                            
                        }>{menuItem.text}</NavLink>
                    </li>
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar