import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse } from "@fortawesome/free-solid-svg-icons"
import { useNavigate, useLocation } from 'react-router-dom'

const Recovery = () => {
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
        <section className='Background'>
            <header> 
                <h1>Восстановление пароля</h1>
            </header>
            <main>
                <p>А вдруг вспомнили?!<br/>
                <Link to="/recovery/good">OK!</Link></p>
            </main>
            <footer>
                {homeButton}
            </footer>
        </section>
    )
    return content
}
export default Recovery