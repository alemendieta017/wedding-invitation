import Image from 'next/image'
import React from 'react'

const Honeymoon = () => {
	return (
		<section className="relative w-full h-svh flex flex-col justify-center overflow-hidden">
			<Image
				src="/f0a8493495602eb2ac61248d6d3d9820.jpg"
				alt="Fondo para fondo de luna de miel"
				fill
				className="object-cover"
				priority
			/>

			{/* Overlay negro semi-transparente */}
			<div className="absolute inset-0 bg-black/60"></div>

			<div className="relative z-10 px-4">
				<div className="max-w-4xl mx-auto text-center text-white">
					<h2 className="text-3xl md:text-4xl font-serif text-center mb-2 font-light tracking-wider text-shadow">
						TU PRESENCIA ES
					</h2>
					<h3 className="text-3xl md:text-4xl font-serif text-center mb-6 font-bold tracking-wider text-shadow">
						NUESTRO MEJOR REGALO.
					</h3>
					<div className="text-lg md:text-xl font-light leading-relaxed text-shadow max-w-sm mx-auto mb-8">
						<p className="mb-2">PERO SI QUIERES DARNOS UN PRESENTE..</p>
						<p className="mb-2">¡PUEDES AYUDARNOS A TENER UNA LUNA DE MIEL INCREIBLE!</p>
					</div>

					{/* Detalles bancarios */}
					<div className="inline-block border border-white rounded-lg p-8 relative">
						<div className="text-left">
							<h4 className="text-2xl md:text-3xl font-serif font-bold mb-4 text-shadow">
								BANCO UENO
							</h4>
							<p className="text-lg md:text-xl font-light mb-2 text-shadow">
								Alejandro Mendieta
							</p>
							<p className="text-lg md:text-xl font-light mb-2 text-shadow">
								Cuenta N°: 14825960
							</p>
							<p className="text-lg md:text-xl font-light mb-2 text-shadow">
								C.I.N°: 4.670.473
							</p>
							<p className="text-lg md:text-xl font-light text-shadow">
								Alias: <span className="font-bold">4670473</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Honeymoon
