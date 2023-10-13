import './sidebar.css'

function Sidebar(){
    return (
        <div className="sidebar">
            <div className='container'>
            <p className='x'>X <sup>2</sup></p>
            <ul>
                <li><i class="fa-solid fa-house"></i><span>Home</span></li>
                <li><i class="fa-solid fa-magnifying-glass"></i><span>Search</span></li>
                <li><i class="fa-solid fa-bell"></i><span>Notifications</span></li>
                <li><i class="fa-solid fa-user"></i><span>Profile</span></li>    
            </ul>
            <button className='post'>Post</button>
            
            <div className='profile'>
            <div className="userPicture">
            <i class="fa-regular fa-user"></i>
            </div>
                <div className='userProfile'>
                    <h4>Username</h4>
                    <h5>@username</h5>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Sidebar