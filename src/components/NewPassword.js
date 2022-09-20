import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse } from "@fortawesome/free-solid-svg-icons"
import { useNavigate, useLocation } from 'react-router-dom'

const NewPassword = () => {

  const navigate = useNavigate()
  const { pathname } = useLocation()

  const goHome = () => navigate('/recovery')

  let homeButton = null
  if (pathname !== '/recovery') {
    homeButton = (
          <button className="icon-button" title="Home" onClick={goHome}>
              <FontAwesomeIcon icon={faHouse}/>
          </button>
      )
  }
  const content = (
    <section className="Background">
        <h1>Восстановил!</h1>
        <h2>В процессе разработки</h2>
        <footer>
            {homeButton}
        </footer>
    </section>
  )
  return content
}
export default NewPassword