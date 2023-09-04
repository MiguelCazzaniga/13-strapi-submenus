import sublinks from "./data"
import { useGlobalContext } from "./Context"
import NavBarMenuItems from "./NavBarMenuItems"
import { useRef } from "react"


const NavbarMenu = () => {
  const { pageId, setPageId,elige,setElige } = useGlobalContext()
  const submenuContainer = useRef(null)
  const handleMouseOver=(e)=>{
    
    setElige(e.target.name)
  }
 

  const handleMouseLeave=(event)=>{   
    
     const submenu = submenuContainer.current;
    const { left, right, top } = submenu.getBoundingClientRect();
    const { clientX, clientY } = event;
  
    if (clientX < left - 1 || clientX > right - 1 || clientY < top + 1) {
      
       setElige(false)
     }
   
    }

 
  return (
    <nav className='navBarContainer'>
      <div className='navbarMenu'>
        <p className='logo'>strapi</p>

        <div className='navbarMenuButtons'>
          <div
            className='buttonsWrapper'
            onMouseLeave={handleMouseLeave}
            ref={submenuContainer}
          >
            {sublinks.map((item) => {
              const { page, pageId } = item
              return (
                <button
                  key={pageId}
                  onMouseOver={handleMouseOver}
                  name={pageId}
                >
                  {page}
                </button>
              )
            })}
          </div>
        </div>
        <NavBarMenuItems cual={elige}></NavBarMenuItems>
      </div>

      <div className='navbarHero'>
        <p className='navbarHeroTitle'>Manage Any Content</p>
        <p className='navbarHeroTitle'>Anywhere</p>
        <p className="navbarHeroLegend">
          Strapi is the leading open-source headless CMS. It is 100% JavaScript
          and fully customizable.
        </p>
      </div>
    </nav>
  )
}
export default NavbarMenu
