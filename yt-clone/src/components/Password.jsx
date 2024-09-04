import { useState } from "react"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export default function Password(props) {
	const [hidePassword, setHidePassword] = useState(true);

	return (
		<div class="flex gap-2 items-center justify-center border border-b-black border-x-transparent border-t-transparent">
			<input {...props} type={hidePassword ? "password" : "text"} class="border-none outline-none" />
			<button onClick={() => { setHidePassword(!hidePassword) }} class="flex items-center">
				{
					hidePassword
						? <VisibilityIcon />
						: <VisibilityOffIcon />
				}
			</button>

		</div>
	)
}
