function JoinStyles(...args) {
	return args.join(" ")
}

export default function Button({ type = "normal", children }) {
	let style = "p-2 rounded-lg"
	let textStyle ="text-white font-bold"
	let buttonColor = type === "foo" ? "bg-blue-500 hover:bg-blue-400" : "bg-red-500 hover:bg-red-400"

	return (
		<button class={JoinStyles(style, textStyle, buttonColor)}>
			{children}
		</button>
	)
}
