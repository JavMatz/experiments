import { useState } from 'react';

export default function VoterRegistration() {
	const [formData, setFormData] = useState({
		voterName: " ",
		birthday: " ",
		email: " ",
		password: " ",
	})

	const handleInput = event => {
		setFormData(prevState => ({ ...prevState, [event.target.name]: event.target.value }))
	}

	const submitVoter = async () => {
		// Emoji unicode range
		let ranges = [
			'\ud83c[\udf00-\udfff]', // U+1F300 to U+1F3FF
			'\ud83d[\udc00-\ude4f]', // U+1F400 to U+1F64F
			'\ud83d[\ude80-\udeff]'  // U+1F680 to U+1F6FF
		];

		let voterNameString = formData.voterName;
		voterNameString = voterNameString.replace(new RegExp(ranges.join('|'), 'g'), '')
		let birthdayString = formData.birthday;
		birthdayString = birthdayString.replace(new RegExp(ranges.join('|'), 'g'), '')
		let emailString = formData.email;
		emailString = emailString.replace(new RegExp(ranges.join('|'), 'g'), '')
		let passwordString = formData.password;
		passwordString = passwordString.replace(new RegExp(ranges.join('|'), 'g'), '')

		let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		let passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

		if (!emailPattern.test(emailString)) {
			window.alert("Email incorrecto")
			return 0
		}

		if (birthdayString <= 1) {
			window.alert("Fecha no valida")
			return 0
		}

		if (!passwordPattern.test(passwordString)) {
			window.alert("La contraseña no cumple los requisitos")
			return 0
		}

		console.log("Submit to backend")
	}

	return (
		<div id="voterRegistration" class="flex items-center justify-center h-5/6 text-2xl">
			<div id="submitForm" class="flex flex-col gap-5 p-7 border border-slate-400 rounded-lg">
				<div id="voterInfo" class="flex gap-4 rounded-s">
					<div id="voterName" class="flex flex-col gap-2 items-start">
						<p class="font-light"> Nombre de usuario: </p>
						<input id="voterName" name="voterName" onChange={handleInput} class="border border-b-black border-t-white border-x-white bg-transparent outline-none max-w-fit" />
					</div>
					<div id="birthday" class="flex flex-col gap-2 items-start">
						<p class="font-light"> Fecha de nacimiento: </p>
						<input id="birthday" name="birthday" type="date" onChange={handleInput} class="border border-b-black border-t-white border-x-white bg-transparent outline-none w-80 " />
					</div>
				</div>
				<div class="flex gap-4 rounded-s">
					<label id="email">
						<p class="font-light"> Correo electrónico </p>
						<input id="email" name="email" onChange={handleInput} class="border border-b-black border-t-white border-x-white bg-transparent outline-none max-w-fit" />
					</label>
					<label id="password">
						<p class="font-light"> Contraseña </p>
						<input id="password" name="password" onChange={handleInput} class="border border-b-black border-t-white border-x-white bg-transparent outline-none max-w-fit" />
					</label>
				</div>
				<div class="mt-5">
					<button onClick={submitVoter} class="font-medium bg-slate-300 px-4 py-2 w-min rounded-lg border-2 border-slate-700">Registrar</button>
				</div>
			</div>
		</div>
	)
}

