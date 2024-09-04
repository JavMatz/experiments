import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import UserPicture from "../assets/userPic.jpg";

function VideoButton({ children }) {
	return (
		<button class="flex items-center gap-1 cursor-pointer">{children}</button>
	)

}
export default function Video() {
	return (
		<div class="flex flex-col gap-6">
			<div id="videoWrapper">
				<iframe
					width="100%"
					height="720"
					src="https://www.youtube.com/embed/dQw4w9WgXcQ"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
			</div>
			<div id="videoTitle" class="px-6">
				<h1 class="text-xl font-bold">
					Video title
				</h1>
			</div>
			<div id="details" class="flex items-center justify-between px-6">
				<div id="userInfo" class="flex items-center gap-3">
					<div class="shrink-0">
						<img id="userPic" src={UserPicture}
							class="h-10 rounded-3xl" />
					</div>
					<div class="shrink-0 flex flex-col">
						<div class="font-bold text-sm">
							Username
						</div>
						<div class="text-slate-400 font-medium text-xs">
							X Subscribers
						</div>
					</div>
				</div>
				<div id="videoButtons" class="flex px-3 py-1 gap-5 border rounded-lg">
					<VideoButton>
						<ThumbUpOutlinedIcon /> 123
					</VideoButton>
					<VideoButton>
						<ThumbDownOffAltOutlinedIcon /> Dislike
					</VideoButton>
					<VideoButton>
						<ReplyOutlinedIcon /> Share
					</VideoButton>
					<VideoButton>
						<AddTaskOutlinedIcon /> Save
					</VideoButton>
				</div>
			</div>
			<hr class="mx-4 my-0 border-[1.5px]" />
			<div id="description" class="flex flex-col gap-1 mx-5 p-2 rounded-lg bg-zinc-100">
				<span class="font-bold">Foo · Bar</span>
				<div class="line-clamp-2">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Doloribus laborum delectus unde quaerat dolore culpa sit aliquam
					at. Vitae facere ipsum totam ratione exercitationem. Suscipit
					animi accusantium dolores ipsam ut.
				</div>
			</div>
			<hr class="mx-4 my-0 border-[1.5px]" />
		</div>
	)
}
