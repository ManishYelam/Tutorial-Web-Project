import './Tab.css';
function Tab(props){
    return(
        <div className='Tab-div' onClick={()=>{props.handleClick(props.index)}}>
            <span className='Tab-title'>{props.title}</span>
        </div>
    );
}
export default Tab;