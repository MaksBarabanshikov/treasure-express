import logo from '../assets/img/logo.svg'

export const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <div className="header__wrap d-flex justify-content-between align-items-center w-100">
                    <img src={logo} alt=""/>

                    <button className="green-btn btn">
                        Connect metamask
                    </button>
                </div>
            </div>
        </header>
    )
}
