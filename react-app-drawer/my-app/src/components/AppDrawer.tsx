import { Link, Outlet } from 'react-router-dom';
import { /*React,*/ useState } from 'react';
import { FaAlignJustify } from 'react-icons/fa';
import './AppDrawer.css';

export type MenuItem = {
  name: string;
  iconUrl: string;
  path: string;
};

type Props = {
  menuItems: MenuItem[];
};

export function AppDrawer({ menuItems }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  function opener() {
    console.log(`div class name: ${isOpen}`);
    isOpen === false ? setIsOpen(true) : setIsOpen(false);
  }

  return (
    <div className="flex w-full">
      <div className={`drawer-${isOpen}`}>
        <FaAlignJustify onClick={opener} className="menu-icon" />
        <h2 className="menu-heading">{isOpen && 'Hylian Shopping'}</h2>
        <ul className="menu-items">
          {menuItems.map((menu) => (
            <li key={menu.name} className="menu-point">
              <Link to={menu.path} className="menu-link">
                <img src={menu.iconUrl} className="menu-item-icon" />
                {isOpen && menu.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="grow">
        <Outlet />
      </div>
    </div>
  );
}
