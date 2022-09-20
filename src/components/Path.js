import { Outlet } from 'react-router-dom'
import Recovery from './link'
import Authorization from './link'

const Path = () => {
    return (
        <section>
            <Authorization/>
            <Recovery/>
            <div>
                <Outlet/>
            </div>
        </section>
    )
}
export default Path