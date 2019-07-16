import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'


class SidebarCmp extends Component {
    constructor(props) {
        super(props);
        this.state = {
        
        }
    }

    render() {
        return(
            <div className="column is-2 sidebar-css">
               <div id="cssmenu">
                  <ul className="menu-list">
                     <li>
                        <NavLink className="mainlist" to="#">
                           <span className="icon is-small">
                              {/* <?xml version="1.0" encoding="UTF-8"?> */}
                              <img alt="statisticsImg" src=".\img\svgicons\statistics.svg" className="svgicon" />
                           </span>
                           Dashboard
                        </NavLink>
                     </li>
                     <li>
                        <NavLink className="mainlist" to="#">
                           <span className="icon is-small">
                              {/* <?xml version="1.0" encoding="UTF-8"?> */}
                              <img alt="databaseImg" src=".\img\svgicons\database (7).svg" />
                           </span>
                           Storage
                        </NavLink>
                     </li>
                     <li>
                        <NavLink className="mainlist" to="#">
                           <span className="icon is-small">
                              {/* <?xml version="1.0" encoding="UTF-8"?> */}
                              <img alt="userImg" src=".\img\svgicons\user.svg"  />
                           </span>
                           User Management
                        </NavLink>
                     </li>
                     <li>
                        <NavLink className="mainlist" to="#">
                           <span className="icon is-small">
                              {/* <?xml version="1.0" encoding="UTF-8"?> */}
                              <img alt="databaseImg" src=".\img\svgicons\database (6).svg" />
                           </span>
                           Failover Settings
                        </NavLink>
                     </li>
                     <li>
                        <NavLink className="mainlist" to="#">
                           <span className="icon is-small">
                              {/* <?xml version="1.0" encoding="UTF-8"?> */}
                              <img alt="databaseImg" src=".\img\svgicons\database (2).svg" />
                           </span>
                           Storage Settings
                        </NavLink>
                     </li>
                     <li>
                        <NavLink className="mainlist" to="#">
                           <span className="icon is-small">
                              {/* <?xml version="1.0" encoding="UTF-8"?> */}
                              <img alt="databaseImg" src=".\img\svgicons\database (3).svg" />
                           </span>
                           Backup & Recovery
                        </NavLink>
                     </li>
                     <li><NavLink className="mainlist" to="#"><span className="icon is-small"><img alt="databaseImg" src=".\img\svgicons\database (1).svg" /></span> System Settings</NavLink></li>
                     <li>
                        <NavLink className="mainlist" to="#">
                           <span className="icon is-small">
                              {/* <?xml version="1.0" encoding="UTF-8"?> */}
                              <img alt="databaseImg" src=".\img\svgicons\database.svg" />
                           </span>
                           Diganostics
                        </NavLink>
                     </li>
                  </ul>
               </div>
            </div>
        )
    }
    
}

export default SidebarCmp;