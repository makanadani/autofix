'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Fragment, useCallback, useEffect, useRef, useState } from 'react'
import { FaAngleDown } from 'react-icons/fa6'
import SimpleCollapse from '@/components/frost-ui/SimpleCollapse'
import { findAllParent, findMenuItem, getMenuItemFromURL } from '@/helpers/menu'
import { MenuItemTypes } from '@/constants'

type SubMenus = {
  item: MenuItemTypes
  linkClassName?: string
  subMenuClassNames?: string
  activeMenuItems?: string[]
  toggleMenu?: (item: MenuItemTypes, status: boolean) => void
  className?: string
}

const MenuItemWithChildren = ({
  item,
  linkClassName = '',
  subMenuClassNames = '',
  activeMenuItems = [],
  toggleMenu,
}: SubMenus) => {
  const [open, setOpen] = useState(activeMenuItems.includes(item.key))

  useEffect(() => {
    setOpen(activeMenuItems.includes(item.key))
  }, [activeMenuItems, item])

  const toggleMenuItem = () => {
    const status = !open
    setOpen(status)
    toggleMenu?.(item, status)
  }

  return (
    <li className="nav-item">
      <div
        className={`${linkClassName} ${activeMenuItems.includes(item.key) ? 'active' : ''}`}
        onClick={toggleMenuItem}
      >
        {item.label}
        {!item.badge && <FaAngleDown style={{ marginLeft: 'auto' }} />}
      </div>
      <SimpleCollapse open={open} as="ul" classNames={`${subMenuClassNames} sub-menu`}>
        {item.children?.map((child) => (
          <Fragment key={child.key}>
            {child.children ? (
              <MenuItemWithChildren
                item={child}
                toggleMenu={toggleMenu}
                activeMenuItems={activeMenuItems}
                subMenuClassNames="sub-menu"
                linkClassName={activeMenuItems.includes(child.key) ? 'active' : ''}
              />
            ) : (
              <MenuItem
                item={child}
                className="ms-3 nav-item"
                linkClassName={activeMenuItems.includes(child.key) ? 'active' : ''}
              />
            )}
          </Fragment>
        ))}
      </SimpleCollapse>
    </li>
  )
}

const MenuItem = ({ item, className = '', linkClassName = '' }: SubMenus) => (
  <li className={className}>
    <MenuItemLink item={item} className={linkClassName} />
  </li>
)

const MenuItemLink = ({ item, className = '' }: SubMenus) => (
  <Link href={item.url!} target={item.target} className={`nav-link ${className}`}>
    {item.icon ? (
      <div className="flex items-center -ms-1.5">
        <span className="bg-blue-600/10 flex justify-center items-center w-8 h-8 shadow rounded me-3">
          {item.icon}
        </span>
        <div className="flex-grow-1">{item.label}</div>
      </div>
    ) : (
      <div className="flex flex-wrap justify-between">{item.label}</div>
    )}
  </Link>
)

type AppMenuProps = {
  menuItems: MenuItemTypes[]
}

const VerticalMenu = ({ menuItems }: AppMenuProps) => {
  const location = usePathname()
  const menuRef = useRef<HTMLUListElement>(null)
  const [activeMenuItems, setActiveMenuItems] = useState<string[]>([])

  const toggleMenu = (menuItem: MenuItemTypes, show: boolean) => {
    if (show) {
      setActiveMenuItems([menuItem.key])
    }
  }

  const activeMenu = useCallback(() => {
    const trimmedURL = location ?? ''
    const matchingMenuItem = getMenuItemFromURL(menuItems, trimmedURL)

    if (matchingMenuItem) {
      const activeMt = findMenuItem(menuItems, matchingMenuItem.key)
      if (activeMt) {
        setActiveMenuItems([activeMt.key, ...findAllParent(menuItems, activeMt)])
      }

      setTimeout(() => {
        const activatedItem = document.querySelector(`#right-menu a[href="${trimmedURL}"]`) as HTMLElement | null
        const simplebarContent = document.querySelector('#right-menu') as HTMLElement | null
      
        if (activatedItem && simplebarContent) {
          const offset = activatedItem.offsetTop - 150
          if (offset > 100) {
            simplebarContent.scrollTop = offset
          }
        }
      }, 200)      
    }
  }, [location, menuItems])

  useEffect(() => {
    if (menuItems.length > 0) activeMenu()
  }, [activeMenu, menuItems])

  return (
    <ul className="navbar-nav flex flex-col gap-2 menu" ref={menuRef} id="main-side-menu">
      {menuItems.map((item) => (
        <Fragment key={item.key}>
          {item.isTitle ? (
            <li className="nav-item">{item.label}</li>
          ) : item.children ? (
            <MenuItemWithChildren
              item={item}
              toggleMenu={toggleMenu}
              subMenuClassNames="space-y-2"
              activeMenuItems={activeMenuItems}
              linkClassName="nav-link"
            />
          ) : (
            <MenuItem
              item={item}
              className="nav-item"
              linkClassName={activeMenuItems.includes(item.key) ? 'active' : ''}
            />
          )}
        </Fragment>
      ))}
    </ul>
  )
}

export default VerticalMenu
