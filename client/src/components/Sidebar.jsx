import { useState } from 'react';
import { motion } from "framer-motion";
import SidebarList from './SidebarList';
import DoubleArrow from "./../assets/DoubleArrow.png";
import LogoutBtnSidebar from './LogoutBtnSidebar';

const Sidebar = ({className}) => {
  const [showSidebar, setShowSidebar] = useState(true);
  const toggleSidebar = ()=>{
    setShowSidebar(!showSidebar);
  }

  const arr = loadData();

  return (
    <motion.div 
        className={className + " overflow-hidden relative rounded-tr-3xl "} 
        initial={{
          width: `${!showSidebar?"22vw":"4vw"}`
        }}
        animate={{
          width: `${showSidebar?"22vw":"4vw"}`
        }}
    >
      <section  className="h-full min-w-[18vw] bg-primary-50">
        <header className="w-full mb-4 h-8 hover:cursor-pointer">
          <img 
            className="h-8  absolute top-1 right-[0.5px]"
            src={DoubleArrow} 
            alt="Arrow"
            onClick={toggleSidebar}
          />
        </header>
        <div>
          {arr}
        </div>
        <footer className="absolute bottom-6 left-0">
          <LogoutBtnSidebar />
        </footer>
      </section>
    </motion.div>
  );
}

function loadData(){
  const content = [
    {
      name: "Course Templates",
      svg: (color)=><svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M32.9737 36.1055H14.0263C13.3316 36.1055 12.7368 35.8581 12.2421 35.3634C11.7474 34.8687 11.5 34.2739 11.5 33.5792V15.895C11.5 15.2002 11.7474 14.6055 12.2421 14.1108C12.7368 13.616 13.3316 13.3687 14.0263 13.3687H32.9737C33.6684 13.3687 34.2632 13.616 34.7579 14.1108C35.2526 14.6055 35.5 15.2002 35.5 15.895V33.5792C35.5 34.2739 35.2526 34.8687 34.7579 35.3634C34.2632 35.8581 33.6684 36.1055 32.9737 36.1055ZM14.0263 19.6844H32.9737V15.895H14.0263V19.6844ZM17.8158 22.2108H14.0263V33.5792H17.8158V22.2108ZM29.1842 22.2108V33.5792H32.9737V22.2108H29.1842ZM26.6579 22.2108H20.3421V33.5792H26.6579V22.2108Z" fill={`${color}`}/>
      </svg>
      ,
      link: "/",
    }, {
      name: "Explore",
      svg: (color)=><svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.4 30.6L26.4 26.4L30.6 17.4L21.6 21.6L17.4 30.6ZM24 25.2C23.66 25.2 23.375 25.085 23.145 24.855C22.915 24.625 22.8 24.34 22.8 24C22.8 23.66 22.915 23.375 23.145 23.145C23.375 22.915 23.66 22.8 24 22.8C24.34 22.8 24.625 22.915 24.855 23.145C25.085 23.375 25.2 23.66 25.2 24C25.2 24.34 25.085 24.625 24.855 24.855C24.625 25.085 24.34 25.2 24 25.2ZM24 36C22.34 36 20.78 35.685 19.32 35.055C17.86 34.425 16.59 33.57 15.51 32.49C14.43 31.41 13.575 30.14 12.945 28.68C12.315 27.22 12 25.66 12 24C12 22.34 12.315 20.78 12.945 19.32C13.575 17.86 14.43 16.59 15.51 15.51C16.59 14.43 17.86 13.575 19.32 12.945C20.78 12.315 22.34 12 24 12C25.66 12 27.22 12.315 28.68 12.945C30.14 13.575 31.41 14.43 32.49 15.51C33.57 16.59 34.425 17.86 35.055 19.32C35.685 20.78 36 22.34 36 24C36 25.66 35.685 27.22 35.055 28.68C34.425 30.14 33.57 31.41 32.49 32.49C31.41 33.57 30.14 34.425 28.68 35.055C27.22 35.685 25.66 36 24 36ZM24 33.6C26.68 33.6 28.95 32.67 30.81 30.81C32.67 28.95 33.6 26.68 33.6 24C33.6 21.32 32.67 19.05 30.81 17.19C28.95 15.33 26.68 14.4 24 14.4C21.32 14.4 19.05 15.33 17.19 17.19C15.33 19.05 14.4 21.32 14.4 24C14.4 26.68 15.33 28.95 17.19 30.81C19.05 32.67 21.32 33.6 24 33.6Z" fill={`${color}`}/>
      </svg>
      ,
      link: "/explore",
    }, {
      name: "Resources",
      svg: (color)=><svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.6 26.4H26.4V24H21.6V26.4ZM21.6 22.8H31.2V20.4H21.6V22.8ZM21.6 19.2H31.2V16.8H21.6V19.2ZM19.2 31.2C18.54 31.2 17.975 30.965 17.505 30.495C17.035 30.025 16.8 29.46 16.8 28.8V14.4C16.8 13.74 17.035 13.175 17.505 12.705C17.975 12.235 18.54 12 19.2 12H33.6C34.26 12 34.825 12.235 35.295 12.705C35.765 13.175 36 13.74 36 14.4V28.8C36 29.46 35.765 30.025 35.295 30.495C34.825 30.965 34.26 31.2 33.6 31.2H19.2ZM19.2 28.8H33.6V14.4H19.2V28.8ZM14.4 36C13.74 36 13.175 35.765 12.705 35.295C12.235 34.825 12 34.26 12 33.6V16.8H14.4V33.6H31.2V36H14.4Z" fill={`${color}`}/>
      </svg>
      ,
      link: "/resources",
    }, {
      name: "Committee", 
      svg: (color)=><svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 29.4C25.5 29.4 26.775 28.875 27.825 27.825C28.875 26.775 29.4 25.5 29.4 24C29.4 22.5 28.875 21.225 27.825 20.175C26.775 19.125 25.5 18.6 24 18.6C22.5 18.6 21.225 19.125 20.175 20.175C19.125 21.225 18.6 22.5 18.6 24C18.6 25.5 19.125 26.775 20.175 27.825C21.225 28.875 22.5 29.4 24 29.4ZM24 25.2C23.66 25.2 23.375 25.085 23.145 24.855C22.915 24.625 22.8 24.34 22.8 24C22.8 23.66 22.915 23.375 23.145 23.145C23.375 22.915 23.66 22.8 24 22.8C24.34 22.8 24.625 22.915 24.855 23.145C25.085 23.375 25.2 23.66 25.2 24C25.2 24.34 25.085 24.625 24.855 24.855C24.625 25.085 24.34 25.2 24 25.2ZM24 36C22.34 36 20.78 35.685 19.32 35.055C17.86 34.425 16.59 33.57 15.51 32.49C14.43 31.41 13.575 30.14 12.945 28.68C12.315 27.22 12 25.66 12 24C12 22.34 12.315 20.78 12.945 19.32C13.575 17.86 14.43 16.59 15.51 15.51C16.59 14.43 17.86 13.575 19.32 12.945C20.78 12.315 22.34 12 24 12C25.66 12 27.22 12.315 28.68 12.945C30.14 13.575 31.41 14.43 32.49 15.51C33.57 16.59 34.425 17.86 35.055 19.32C35.685 20.78 36 22.34 36 24C36 25.66 35.685 27.22 35.055 28.68C34.425 30.14 33.57 31.41 32.49 32.49C31.41 33.57 30.14 34.425 28.68 35.055C27.22 35.685 25.66 36 24 36ZM24 33.6C26.68 33.6 28.95 32.67 30.81 30.81C32.67 28.95 33.6 26.68 33.6 24C33.6 21.32 32.67 19.05 30.81 17.19C28.95 15.33 26.68 14.4 24 14.4C21.32 14.4 19.05 15.33 17.19 17.19C15.33 19.05 14.4 21.32 14.4 24C14.4 26.68 15.33 28.95 17.19 30.81C19.05 32.67 21.32 33.6 24 33.6Z" fill={`${color}`}/>
      </svg>
      ,
      link: "/committee",
    }, {
      name: "Analytics", 
      svg: (color)=><svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M36 24.0028C36 22.4266 35.6896 20.8658 35.0866 19.4095C34.4835 17.9533 33.5996 16.6301 32.4854 15.5155C31.3711 14.401 30.0482 13.5169 28.5924 12.9137C27.1365 12.3105 25.5761 12 24.0002 12V24.0028H36Z" fill={`${color}`}/>
      <path d="M35.052 28.6719C34.2886 30.4777 33.0946 32.0689 31.5743 33.3065C30.0541 34.5441 28.2539 35.3904 26.3311 35.7713C24.4084 36.1522 22.4216 36.0562 20.5445 35.4916C18.6674 34.9271 16.9571 33.9112 15.5632 32.5328C14.1693 31.1544 13.1342 29.4554 12.5484 27.5844C11.9626 25.7134 11.844 23.7273 12.2028 21.7998C12.5616 19.8724 13.3871 18.0622 14.6069 16.5275C15.8267 14.9928 17.4038 13.7804 19.2003 12.9962M36 24.0028C36 22.4266 35.6896 20.8658 35.0866 19.4095C34.4835 17.9533 33.5996 16.6301 32.4854 15.5155C31.3711 14.401 30.0482 13.5169 28.5924 12.9137C27.1365 12.3105 25.5761 12 24.0002 12V24.0028H36Z" stroke={`${color}`} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      ,
      link: "/analytics",
    }, {
      name: "Notification", 
      svg: (color)=><svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 32.4V30H15.625V21.6C15.625 19.94 16.1719 18.465 17.2656 17.175C18.3594 15.885 19.7812 15.04 21.5312 14.64V13.8C21.5312 13.3 21.7227 12.875 22.1055 12.525C22.4883 12.175 22.9531 12 23.5 12C24.0469 12 24.5117 12.175 24.8945 12.525C25.2773 12.875 25.4688 13.3 25.4688 13.8V14.64C27.2188 15.04 28.6406 15.885 29.7344 17.175C30.8281 18.465 31.375 19.94 31.375 21.6V30H34V32.4H13ZM23.5 36C22.7781 36 22.1602 35.765 21.6461 35.295C21.132 34.825 20.875 34.26 20.875 33.6H26.125C26.125 34.26 25.868 34.825 25.3539 35.295C24.8398 35.765 24.2219 36 23.5 36ZM18.25 30H28.75V21.6C28.75 20.28 28.2359 19.15 27.2078 18.21C26.1797 17.27 24.9438 16.8 23.5 16.8C22.0562 16.8 20.8203 17.27 19.7922 18.21C18.7641 19.15 18.25 20.28 18.25 21.6V30Z" fill={`${color}`}/>
      </svg>
      ,
      link: "/notification",
    }, {
      name: "Your Profile",
      svg: (color)=><svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 24C22.35 24 20.9375 23.4125 19.7625 22.2375C18.5875 21.0625 18 19.65 18 18C18 16.35 18.5875 14.9375 19.7625 13.7625C20.9375 12.5875 22.35 12 24 12C25.65 12 27.0625 12.5875 28.2375 13.7625C29.4125 14.9375 30 16.35 30 18C30 19.65 29.4125 21.0625 28.2375 22.2375C27.0625 23.4125 25.65 24 24 24ZM12 36V31.8C12 30.95 12.2187 30.1687 12.6562 29.4562C13.0938 28.7437 13.675 28.2 14.4 27.825C15.95 27.05 17.525 26.4688 19.125 26.0812C20.725 25.6937 22.35 25.5 24 25.5C25.65 25.5 27.275 25.6937 28.875 26.0812C30.475 26.4688 32.05 27.05 33.6 27.825C34.325 28.2 34.9062 28.7437 35.3438 29.4562C35.7812 30.1687 36 30.95 36 31.8V36H12ZM15 33H33V31.8C33 31.525 32.9312 31.275 32.7938 31.05C32.6562 30.825 32.475 30.65 32.25 30.525C30.9 29.85 29.5375 29.3438 28.1625 29.0063C26.7875 28.6688 25.4 28.5 24 28.5C22.6 28.5 21.2125 28.6688 19.8375 29.0063C18.4625 29.3438 17.1 29.85 15.75 30.525C15.525 30.65 15.3438 30.825 15.2063 31.05C15.0688 31.275 15 31.525 15 31.8V33ZM24 21C24.825 21 25.5313 20.7063 26.1188 20.1187C26.7063 19.5312 27 18.825 27 18C27 17.175 26.7063 16.4688 26.1188 15.8813C25.5313 15.2938 24.825 15 24 15C23.175 15 22.4688 15.2938 21.8813 15.8813C21.2937 16.4688 21 17.175 21 18C21 18.825 21.2937 19.5312 21.8813 20.1187C22.4688 20.7063 23.175 21 24 21Z" fill={`${color}`}/>
      </svg>
      ,
      link: "/profile",
    },
  ];
  
  const arr = content.map((data) => {
    data.color = "#04314D";
    return <SidebarList data={data}/>
  });

  return arr;
}

export default Sidebar;