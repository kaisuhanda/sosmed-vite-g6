import Sidebar from "../components/sidebar";
import Rightbar from "../components/rightbar";
import './layout.css'

function Layout(props){
    return (
        <div className="layout">
            <Sidebar/>
            {props.children}
            <Rightbar/>
        </div>
    )
}

export default Layout