import sublinks from "./src/data"
import { GiHamburgerMenu } from "react-icons/gi"
import { useGlobalContext} from "./src/Context"
import { nanoid } from "nanoid"

nanoid
const SidebarMenu = () => {
  const{isSidebarOpen, openSidebar, closeSidebar}=useGlobalContext()
  const esta=nanoid()
  return (
    <article className='sidebarContainer' onBlur={closeSidebar}>
      <section className='sidebarHero'>
        <div className='sidebarHeroHeader'>
          <p className='logo'>Strapi</p>
          <button onClick={openSidebar}>
            <GiHamburgerMenu />
          </button>
        </div>
        <div className='sidebarHeroBody'>
          <p className='sidebarHeroTitle'>Manage Any Content</p>
          <p className='sidebarHeroTitle'>Anywhere</p>
          <p className='sidebarHeroLegend'>
            Strapi is the leading open-source headless CMS. It is 100%
            JavaScript and fully customizable.
          </p>
        </div>
      </section>
      {isSidebarOpen && (
        <section className='sideBarOptions'  >
          <button onClick={closeSidebar}  >X</button>
          {sublinks.map((item) => {
            const { page, id, links,pageId} = item
            return (
              <div key={pageId}>
                <h5>{page}</h5>
                <div className='sidebarOptionsSet' key={id}>
                  {links.map((link) => {
                    const { id, label, icon } = link
                    return (
                      <a key={id}>
                        {icon}
                        {label}
                      </a>
                    )
                  }) }
                </div>
              </div>
            )
          })}
        </section>
        
      )}
    </article>
  )
}
export default SidebarMenu
