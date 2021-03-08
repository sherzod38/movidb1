import './Sidebar.scss'


const Sidebar = ({isOpened}) => {
    return (
        <div className={`sidebar ${isOpened ? 'opened' : '' } `}></div>
    )
}

export default Sidebar;