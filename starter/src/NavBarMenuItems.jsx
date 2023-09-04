 import { useRef } from "react"
import sublinks from "./data"
import { useGlobalContext } from "./Context"


const NavBarMenuItems = ({cual}) => {
   const submenuContainer = useRef(null)
   const { pageId, setPageId, elige, setElige } = useGlobalContext()
   const handleMouseLeave=()=>{
    setElige(false)
   }

   

   return(
    sublinks.map((item)=>{
      const {page,links,pageId}=item
        if (cual===pageId){
        return (
          <div
           className="NavBarMenuItems"
           onMouseLeave={handleMouseLeave}
           key={pageId}
          >
                  <div>
                    <h5>{page}</h5>
                  </div>
            {links.map((link) => {
              const { id, label, icon, url } = link
              return (
                <div >
                  <a href={url} key={id}>
                    {icon}
                    {label}
                  </a>
                </div>
              )
            }
          
        
          )}
          </div>
        )
          }
    })
    )
 }
export default NavBarMenuItems