import { NavLink } from 'react-router-dom';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

export default function UserMenu() {
	return (
		<div>
			<NavLink to="/bandregistration">
				<button className="flex items-center gap-1 px-4 py-1 mt-2 font-medium text-blue-500 border border-1 rounded border-blue-500">
					<MusicNoteIcon />
					Band Registration
				</button>
			</NavLink>
			<NavLink to="/voterregistration">
				<button className="flex items-center gap-1 px-4 py-1 mt-2 font-medium text-blue-500 border border-1 rounded border-blue-500">
					<AccountCircleOutlinedIcon />
					Voter Registration
				</button>
			</NavLink>
		</div >
	)
}
