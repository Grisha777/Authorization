import { Link } from 'react-router-dom'

const link = () => {
    const content = (
        <section>
            <Link to="/recovery"></Link>
            <Link to="/authorized"></Link>
        </section>
    )
    return content
}
export default link