import './rightbar.css'

function Rightbar(){
    return (
        <div className="rightbar">
            <div className='containerRight'>
              <input className='searchBar' type="text" placeholder="Search..."/>
              <div className='trending'>
                <ul>
                    <li>
                        <div className='innerCon'>
                        <p className='subhead'>Trending in USA</p>
                        <p className='head'>Americans are dumb</p>
                        <p className='subhead'>98.6K posts</p>
                        </div>
                        <i class="fa-solid fa-ellipsis"></i>
                    </li>
                    <li>
                    <div className='innerCon'>
                        <p className='subhead'>Trending in China</p>
                        <p className='head'>现在我有冰淇淋</p>
                        <p className='subhead'>106.5K posts</p>
                        </div>
                        <i class="fa-solid fa-ellipsis"></i>
                    </li>
                    <li>
                    <div className='innerCon'>
                        <p className='subhead'>Trending in Australia</p>
                        <p className='head'>Flying Spiders</p>
                        <p className='subhead'>17.4K posts</p>
                        </div>
                        <i class="fa-solid fa-ellipsis"></i>
                    </li>
                    <li>
                    <div className='innerCon'>
                        <p className='subhead'>Trending in Indonesia</p>
                        <p className='head'>Bocah Tole</p>
                        <p className='subhead'>40.1K posts</p>
                        </div>
                        <i class="fa-solid fa-ellipsis"></i>
                    </li>
                </ul>
              </div>
              <div className='follow'>
                <ul>
                    <li>
                        <div className='followLeft'>
                        <i class="fa-regular fa-user"></i>
                        <div className='at'>
                            <p className='name'>Axel Maynard</p>
                            <p className='userAt'>@maynardkun_</p>
                        </div>
                        </div>
                        <button>
                            Follow
                        </button>
                    </li>
                    <li>
                    <div className='followLeft'>
                        <i class="fa-regular fa-user"></i>
                        <div className='at'>
                            <p className='name'>Gilbert Khonrad</p>
                            <p className='userAt'>@gilbert_hkghk</p>
                        </div>
                        </div>
                        <button>
                            Follow
                        </button>
                    </li>
                </ul>
              </div>
            </div>
        </div>
    )
}

export default Rightbar