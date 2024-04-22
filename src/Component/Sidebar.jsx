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
            <Tab title="React JSX" index="5" handleClick={props.handleClick}></Tab>
            <Tab title="React Components" index="6" handleClick={props.handleClick}></Tab>
            <Tab title="React Class" index="7" handleClick={props.handleClick}></Tab>
            <Tab title="React Props" index="8" handleClick={props.handleClick}></Tab>
            <Tab title="React Events" index="9" handleClick={props.handleClick}></Tab>
            <Tab title="React Conditional Rendering" index="10" handleClick={props.handleClick}></Tab>
            <Tab title="React List" index="11" handleClick={props.handleClick}></Tab>
            

        </div>
    );
}

export default Sidebar;