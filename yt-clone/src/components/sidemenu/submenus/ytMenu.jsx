import { NavLink } from 'react-router-dom';
import MenuItem from '../menuItem.jsx';
import HomeIconOutlined from '@mui/icons-material/HomeOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';

export default function YTMenu() {
	return (
		<>
			<NavLink to="/home">
				<MenuItem>
					<HomeIconOutlined />
					Home
				</MenuItem>
			</NavLink>
			<MenuItem>
				<ExploreOutlinedIcon />
				Explore
			</MenuItem>
			<MenuItem>
				<SubscriptionsOutlinedIcon />
				Subscriptions
			</MenuItem>
		</>
	)
}

