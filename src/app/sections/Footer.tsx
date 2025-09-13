import Image from 'next/image'
import React from 'react'

const Footer = () => {
	return (
		<section className="relative w-full overflow-hidden">
			{/* Imagen de fondo */}
			<Image
				src="/584dacf38cb0666cd8e465c847137c99.jpg"
				alt="Confirmación de asistencia Jessica y Alejandro"
				fill
				className="object-cover object-[0%_10%]"
				priority
			/>

			{/* Overlay oscuro semi-transparente para mejor legibilidad del texto */}
			<div className="absolute inset-0 bg-black/40"></div>

			{/* Contenido centrado */}
			<div className="relative z-10 py-36 px-4">
				<div className="max-w-4xl mx-auto text-center text-white">
					{/* Título principal */}
					<h2 className="text-2xl md:text-3xl font-serif text-center mb-6 font-light tracking-wider text-shadow">
						CONFIRMA TU ASISTENCIA AL:
					</h2>

					{/* Número de teléfono */}
					<div className="mb-4">
						<p className="text-lg md:text-xl font-sans font-semibold tracking-widest text-shadow">
							(0994) 208286
						</p>
					</div>

					{/* Nombre de contacto */}
					<div className="mb-6">
						<p className="text-lg md:text-xl font-sans font-light tracking-wider text-shadow">
							LIZ SAMUDIO
						</p>
					</div>

					{/* Mensaje final */}
					<div className="text-lg md:text-xl font-serif font-light leading-relaxed text-shadow">
						<p className="mb-2">¡ESPERAMOS QUE PUEDAS</p>
						<p>ACOMPAÑARNOS!</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Footer
