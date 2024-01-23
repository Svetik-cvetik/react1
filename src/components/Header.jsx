import { Link } from "./Link"
import { linksObj } from "../constants/HeaderLinksData"

export const Header = () => {
    return (
        <header>
            <nav>
                {
                linksObj.map(link => {
                  return (
                    <Link 
                    key={link.name}
                    name={link.name}
                    link={link.link}
                    />                    
                  ) 
                })}
                
            </nav>
        </header>
    )
}