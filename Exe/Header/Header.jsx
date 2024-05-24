import { Link } from "react-router-dom"
import {Nav} from './header'

const Header = () =>{
    return(
        <Nav>
           <Link to = '/'>Home  |</Link>
            
           <Link to = 'sobre'>  Sobre</Link>
           
           <Link to ='contato'>  | Contato</Link>
           <hr />
        </Nav>
    )
}
export default Header;