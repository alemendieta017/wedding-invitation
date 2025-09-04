import Image from 'next/image'
import React from 'react'

const Invitation = () => {
	return (
		<>
			{/* Tercera sección - Invitación a la boda */}
			<section className="relative w-full overflow-hidden">
				{/* Imagen de fondo */}
				<Image
					src="/5072c29d4c5f852dc7a4e2fd5ee67d6f.jpg"
					alt="Invitación a la boda Jessica y Alejandro"
					fill
					className="object-cover"
					priority
				/>

				{/* Overlay oscuro semi-transparente para mejor legibilidad del texto */}
				<div className="absolute inset-0 bg-black/50"></div>

				{/* Contenido centrado */}
				<div className="relative z-10 min-h-screen max-w-2xl mx-auto flex items-center justify-center px-6">
					<div className="max-w-screen-sm text-center text-white">
						{/* Título principal */}
						<h2 className="text-4xl font-serif text-center text-shadow mb-4 md:whitespace-nowrap">
							Estás invitado a nuestra boda
						</h2>

						{/* Texto descriptivo */}
						<div className="font-sans font-semibold text-sm md:text-lg tracking-widest leading-snug">
							<p>
								QUEREMOS QUE TE EMBARQUES CON NOSOTROS EN ESTA GRAN AVENTURA: LA
								DE PRESENCIAR NUESTRO “SÍ, QUIERO” Y CELEBRAR EL AMOR QUE NOS
								UNE, COMPARTIENDO RISAS, EMOCIONES Y MOMENTOS QUE QUEDARÁN
								GRABADOS PARA SIEMPRE EN NUESTRA MEMORIA.
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Invitation
