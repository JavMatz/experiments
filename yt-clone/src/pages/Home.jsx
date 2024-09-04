import {NavLink} from 'react-router-dom';
import VideoCard from "../components/videoCard.jsx";

export default function Home() {
	return (
		<div class="flex flex-wrap justify-around gap-3 p-4">
			{
				Array(100).fill(1).map((_) => {
					return (
						<NavLink to="/video">
							<VideoCard />
						</NavLink>
					)
				})
			}
		</div>
	)
}
