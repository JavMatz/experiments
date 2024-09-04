import LogoImg from "../assets/logo.jpg";

export default function Logo() {
	return (
		<div className="flex items-center gap-1 text-sm font-bold mb-6">
			<img src={LogoImg} className="h-6"/>
			Copytube
		</div>
	)
}
