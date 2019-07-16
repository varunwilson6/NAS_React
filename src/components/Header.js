import React, {Component} from 'react';

class HeaderCmp extends Component {
    constructor(props) {
        super(props);
        this.state = {
        
        }
    }

    render() {
        return(
            <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand samebrand">
               <h5 className="title is-5 mainlogo">Logo</h5>
            </div>
            <div id="navbarBasicExample" className="navbar-menus">
               <div className="navbar-start">
                  <div className="trigger">
                     <svg className="bars" viewBox="0 0 100 100" onClick="this.classList.toggle('active')">
                        <path className="line top" d="m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272"></path>
                        <path className="line middle" d="m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272"></path>
                        <path className="line bottom" d="m 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272"></path>
                     </svg>
                  </div>
               </div>
            </div>
            <div className="navbar-end">
               <div className="navbar-item">
                  <ul className="profiles menu">
                     <li className="mainli">
                        <span className="onlinep">  <i className="fas fa-circle doticon"></i>Online</span>
                     </li>
                     <li className="mainli">
                        <div className="bell">
                           <i className="fas fa-bell"></i><span className="tag is-primary tag-notif"></span>
                        </div>
                     </li>
                     <li className="mainli">
                        <div className="users">
                           <i className="fas fa-user"></i>
                        </div>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
        )
    }
    
}

export default HeaderCmp;