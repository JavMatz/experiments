export default function Input(props) {
	return (
		<div class="flex gap-2 items-center justify-center border border-b-black border-x-transparent border-t-transparent">
			<input {...props} class="border-none outline-none" />
		</div>
	)
}
