import PersonIcon from '@mui/icons-material/Person';

function Input() {
	return (
		<input class="border border-blue-500 rounded-sm outline-1" />
	)
}

const estados = [
	'Aguascalientes',
	'Baja California',
	'Baja California Sur',
	'Campeche ',
	'Chiapas ',
	'Chihuahua',
	'Ciudad de México',
	'Coahuila de Zaragoza',
	'Colima ',
	'Durango',
	'Guanajuato',
	'Guerrero ',
	'Hidalgo ',
	'Jalisco',
	'Estado de México ',
	'Michoacán de Ocampo',
	'Morelos ',
	'Nayarit ',
	'Nuevo León ',
	'Oaxaca ',
	'Puebla ',
	'Querétaro',
	'Quintana Roo',
	'San Luis Potosí ',
	'Sinaloa ',
	'Sonora ',
	'Tabasco',
	'Tamaulipas ',
	'Tlaxcala ',
	'Veracruz de Ignacio de la Llave ',
	'Yucatán ',
	'Zacatecas'
]

export default function BandRegistration() {
	return (
		<div id="bandregistration" class="flex items-center justify-center h-5/6 text-2xl">
			<div id="submitForm" class="flex gap-5 p-5 border border-slate400 rounded-lg">
				<div id="bandInfo" class="flex flex-col gap-4 p-5 rounded-s bg-slate-100">
					<div id="bandName" class="flex flex-col gap-2 items-start">
						<p class="font-light"> Nombre de la banda: </p>
						<input class="border border-b-black border-t-slate-100 border-x-slate-100 bg-transparent outline-none max-w-fit" />
					</div>
					<div id="bandMembers" class="flex flex-col items-start justify-center">
						<p class="font-light mb-2">Integrantes: </p>
						{/* NOTICE: If the number of members is variable might change later */}
						<div class="flex gap-2 items-center bg-white rounded-t-md">
							<PersonIcon />
							<input class="bg-transparent outline-none" />
						</div>
						<div class="flex gap-2 items-center bg-slate-200">
							<PersonIcon />
							<input class="bg-transparent outline-none" />
						</div>
						<div class="flex gap-2 items-center bg-white">
							<PersonIcon />
							<input class="bg-transparent outline-none" />
						</div>
						<div class="flex gap-2 items-center bg-slate-200 rounded-b-md">
							<PersonIcon />
							<input class="bg-transparent outline-none" />
						</div>
					</div>
					<label id="state">
						<p class="font-light mb-2"> Elige tu estado  </p>
						<select class="bg-white p-2 rounded-md">
							{
								estados.map((estado) => {
									return (
										<option value={estado}>{estado}</option>
									)
								})
							}
						</select>
					</label>
					<label id="video">
						<p class="font-light"> Link al video de tu banda </p>
						<input class="border border-b-black border-t-slate-100 border-x-slate-100 bg-transparent outline-none max-w-fit" />
					</label>
					<label id="socialMedia">
						<p class="font-light"> Link a tus redes sociales </p>
						<input class="border border-b-black border-t-slate-100 border-x-slate-100 bg-transparent outline-none max-w-fit" />
					</label>
				</div>
			</div>
		</div>
	)
}

