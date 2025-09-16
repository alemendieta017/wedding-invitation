import Image from 'next/image'
import React from 'react'

const Footer = () => {
	const imagePath = '20250825002456280.jpeg.jpg'
	return (
		<section className="relative flex flex-col justify-center w-full h-screen overflow-hidden">
			{/* Imagen de fondo */}
			<Image
				src={imagePath}
				alt="Confirmación de asistencia Jessica y Alejandro"
				fill
				className="object-cover md:object-[50%_40%]"
				priority
			/>

			{/* Overlay oscuro semi-transparente para mejor legibilidad del texto */}
			<div className="absolute inset-0 bg-black/50"></div>

			{/* Contenido centrado */}
			<div className="relative z-10 py-36 px-4">
				<div className="max-w-4xl mx-auto text-center text-white">
					{/* Título principal */}
					<h2 className="text-lg md:text-2xl font-sans text-center mb-6 font-bold tracking-wider text-shadow">
						CONFIRMA TU ASISTENCIA AL:
					</h2>

					{/* Nombre de contacto */}
					<div className="mb-10">
					<p className="text-lg md:text-xl font-sans font-semibold tracking-widest text-shadow">
							(0994) 208286
						</p>
						<p className="text-lg md:text-xl font-sans font-bold tracking-wider text-shadow">
							LIZ SAMUDIO
						</p>
						<p className="text-sm md:text-sm font-sans text-shadow">Coordinadora del Evento</p>
					</div>

					{/* Mensaje final */}
					<div className="text-lg md:text-xl font-serif font-light leading-relaxed text-shadow tracking-widest">
						<p className="mb-2">¡TE ESPERAMOS!</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Footer
