import VideoThumbnail from "../assets/videoThumbnail.jpg";
import UserPicture from "../assets/userPic.jpg";

export default function VideoCard() {
	return (
		<div class="flex flex-col max-w-xs pb-2">
			<div id="videoThumbnailWrapper">
				<img id="videoThumbnail" src={VideoThumbnail}
					class="h-44 rounded-lg" />
			</div>
			<div class="flex items-start gap-2 pt-2">
				<div id="userPicWrapper" class="shrink-0">
					<img id="userPic" src={UserPicture}
						class="h-10 rounded-3xl" />
				</div>
				<div id="videoInfo" class="shrink-0 mt-0">
					<p class="text-lg font-bold line-clamp-2 w-64">Video title</p>
					<p class="font-normal text-sm text-slate-500 line-clamp-2 w-60">Username</p>
					<div class="font-normal text-sm text-slate-500">{"Views"} · { "How long ago" }</div>
				</div>
			</div>
		</div>
	)
}
