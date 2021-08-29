import Inst_logo from '../Image/1.png'
import { Button } from "@material-ui/core";
import "./Header.css"

const Header = (props) => {
    return (
        <div className="Header_style">
            <img src={Inst_logo} alt="Inst_Logo">

            </img>
            <Button className="btn" variant="contained" color="primary" onClick={props.btnClick}>Sign Up</Button>

        </div>

    )
}

export default Header;