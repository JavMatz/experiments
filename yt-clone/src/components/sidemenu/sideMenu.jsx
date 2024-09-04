import Logo from '../logo.jsx';
import MenuItem from './menuItem.jsx';
import YTMenu from './submenus/ytMenu.jsx';
import UserMenu from './submenus/userMenu.jsx';
import MenuSeparator from './menuSeparator.jsx';

export default function SideMenu() {
	return (
		<div className="sticky top-0 grow shrink basis-0 h-screen text-white bg-dark-background">
			<div className="py-4 px-7">
				<Logo />
				<YTMenu />
				<MenuSeparator />
				<UserMenu />
				{/* Divider line here*/}
			</div>
		</div>
	)
}
