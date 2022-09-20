import { Link } from 'react-router-dom'

const Main = () => {

    const date = new Date()
    const today = new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'long' }).format(date)

    const content = (
        <section className="public">
            <header>
                <h1>Добро пожаловать!</h1>
            </header>
            <main className="main">
                <p>{today}</p><br/>
                <div>
                    Это мое первое React-приложение.<br/>
                    Я разрабатываю форму авторизации для пользователей.
                <br/>
                </div>
            </main>
            <footer>
                <Link to="/login">Login</Link>
            </footer>
        </section>
    )
    return content
}
export default Main
