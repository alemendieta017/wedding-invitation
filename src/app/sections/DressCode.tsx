import Image from 'next/image'
import React from 'react'

const DressCode = () => {
	return (
		<section className="relative w-full overflow-hidden">
			{/* Video de fondo superpuesto */}
			<video
				autoPlay
				loop
				muted
				playsInline
				className="absolute inset-0 w-full h-full object-cover"
			>
				<source src="/4d369b99254624da301ad06d8c20480e.mp4" type="video/mp4" />
			</video>

			{/* Overlay claro para mejor legibilidad */}
			<div className="absolute inset-0 bg-white/80"></div>

			{/* Contenido centrado */}
			<div className="relative z-10 px-4 py-36">
				<div className="max-w-6xl mx-auto">
					{/* Título principal */}
					<div className="text-center">
						<h2 className="text-2xl md:text-4xl tracking-widest font-serif text-gray-800">
							TENIDA:
						</h2>
						<h3 className="text-2xl md:text-4xl font-serif font-bold text-amber-700 tracking-widest">
							COCTEL
						</h3>
					</div>

					{/* Imagen principal debajo del título */}
					<Image
						src="/77ad98801938ae8054b97e68fa98fb59.png"
						alt="Guía de vestimenta COCTEL"
						width={1080}
						height={1350}
						className="ml-2 lg:ml-24 aspect-video object-[50%_40%] object-cover"
						priority
					/>
				</div>
			</div>
		</section>
	)
}

export default DressCode
