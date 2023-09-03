import SideBar from '../../components/sidebar/SideBar'
import SinglePost from '../../components/singlePost/SinglePost'
import './single.css'

export default function SingleP() {
  return (
    <div className='single'>
        {/*post*/}
        <SinglePost/>
        <SideBar/>
        
    </div>
  )
}
