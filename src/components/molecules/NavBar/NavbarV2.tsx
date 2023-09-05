import { BookIcon, DataIcon, EditIcon, HomeIcon } from '@/components/atoms/Icons'
import { useRouter } from 'next/router'

const propsIcon = {
  width: '1.5em',
  height: '1.5em'
}

const listMenuItem = [
  { label: 'Home', icon: <HomeIcon {...propsIcon} />, path: '/' },
  { label: 'Create', icon: <EditIcon {...propsIcon} />, path: '/create' },
  { label: 'Practice', icon: <BookIcon {...propsIcon} />, path: '/practice' },
  { label: 'Collection', icon: <DataIcon {...propsIcon} />, path: '/collection' }
]

const NavbarV2 = () => {
  const router = useRouter()

  const goTo = (url: string) => {
    router.push(url)
  }

  const isActive = (url: string) => {
    const rootPath = '/' + router.route?.split('/')[1]
    if (rootPath === url) return true
    return false
  }

  return (
    <>
      <div className='nav__wrapper min-h-full p-2 w-1/5'>
        {listMenuItem.map((item, index) => (
          <div
            onClick={() => goTo(item.path)}
            className={`${isActive(item.path) ? 'active' : ''} nav__item flex gap-3 my-3 mx-1 p-3`}
            key={index}
          >
            <div className='nav__item-icon'>{item.icon}</div>
            <div className='nav__item-label'>{item.label}</div>
          </div>
        ))}
      </div>
    </>
  )
}

export default NavbarV2
