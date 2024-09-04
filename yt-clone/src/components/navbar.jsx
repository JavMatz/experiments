import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

export default function NavBar() {
	return (
		<div id="container" class="sticky top-0 bg-dark-background h-14">
			<div id="wrapper" class="flex relative h-full py-0 px-5 items-center justify-end">
				<div id="searchbox" class="flex items-center justify-between absolute p-1 w-2/5 left-0 right-0 m-auto bg-white border border-1 border-red-100">
					<input class="border-none bg-transparent outline-none" />
					<SearchOutlinedIcon />
				</div>
				<button class="flex items-center gap-1 py-1 px-4 cursor-pointer font-medium text-blue-500 border rounded border-blue-500 bg-transparent">
					SIGN IN
					<AccountCircleOutlinedIcon />
				</button>
			</div>
		</div>
	)
}
