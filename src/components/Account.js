import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse } from "@fortawesome/free-solid-svg-icons"
import { useNavigate, useLocation } from 'react-router-dom'

const Account = () => {

    const navigate = useNavigate()
    const { pathname } = useLocation()

    const goHome = () => navigate('/login')

    let homeButton = null
    if (pathname !== '/login') {
        homeButton = (
            <button className="icon-button" title="Home" onClick={goHome}>
                <FontAwesomeIcon icon={faHouse}/>
            </button>
        )
    }
    const content = (
        <section>
            <h2>В процессе разработки</h2>
            <footer>
                {homeButton}
            </footer>
        </section>
      )
      return content
};

export default Account;