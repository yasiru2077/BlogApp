import { useEffect, useState } from 'react';
import './sidebar.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function SideBar() {
    const [cats,setCats]=useState([]);
    useEffect(()=>{
        const getCats = async ()=>
        {
            const res = await axios.get("/categories")
            setCats(res.data);
        };
        getCats();
    },[]); 

    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className='sidebarTitle'>ABOUT ME</span>
               <img src="https://qph.cf2.quoracdn.net/main-qimg-66027dc18b346f250fe1e76ee3cd379c.webp" alt="" />
                <p>
                    Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
                    amet ex esse.Sunt eu ut nostrud id quis proident.
                </p>
            </div>
            <div className="sidebarItem">
                <span className='sidebarTitle'>CATEGORIES</span>
                <ul className='sidebarList'>
                    {cats.map(c=>(
                        <Link to={`/?cat=${c.name}`} className='link'>
                            <li className='sidebarListItem'>{c.name}</li>
                        </Link>
                    ))}
                  
                </ul>
            </div>
            <div className="sidebarItem">
                <span className='sidebarTitle'>FOLLOW US</span>
                <div className='sidebarSocial'>
                <i className="sidebarIcon fa-brands fa-square-facebook"></i>
                <i className="sidebarIcon fa-brands fa-square-twitter"></i>
                <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
                <i className="sidebarIcon fa-brands fa-square-instagram"></i>
                </div>
            </div>
        </div>
    );
}
