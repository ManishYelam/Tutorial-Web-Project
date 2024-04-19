import './Sidebar.css';
import Tab from './Tab'

function Sidebar(props) {
    return(
        <div className="sidebar">
            <Tab title="React Introduction" index="0" handleClick={props.handleClick}></Tab>
            <Tab title="React Get Started" index="1" handleClick={props.handleClick}></Tab>
            <Tab title="React Upgrade" index="2" handleClick={props.handleClick}></Tab>
            <Tab title="React ES6" index="3" handleClick={props.handleClick}></Tab>
            <Tab title="React Render HTML" index="4" handleClick={props.handleClick}></Tab>
            
        </div>
    );
}

export default Sidebar;