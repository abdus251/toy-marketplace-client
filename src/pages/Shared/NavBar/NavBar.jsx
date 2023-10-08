import { Link } from 'react-router-dom';
import icon from '../../../assets/icon.png'
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import profilePic from '../../../assets/profilePic/httpsi.ibb.co475KSW2salam-circle.png.png'

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error))
  }

  const navItems = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/allToys'>All Toys</Link></li>
    <li><Link to='/addToy'>Add A Toy</Link></li>
    <li><Link to='/blogs'>Blogs</Link></li>
    {
    user?.email ? <>
      <li><Link to='/bookedToys'>My Toys</Link></li>
      <li><button onClick={handleLogOut}>Log Out</button></li>
      <li><img style={{height:'95%' , width: '15%'}} src={profilePic} alt="" /></li>
    </>
      : <li><Link to='/login'>Login</Link></li>
    }
    
   
  </>
  return (
    <div className="navbar bg-sky-300 mt-8">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navItems}
          </ul>
        </div>
        <img className='pl-4' style={{ height: '30px' }} src={icon} alt="" />
        <h1 className='text-3xl'><span className="text-green-600 font-bold ml-4">
          Edu</span><span className="text-red-600 font-bold">Toy</span> </h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end">
      </div>
    </div>

  );
};

export default NavBar;