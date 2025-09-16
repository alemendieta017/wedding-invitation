import React from 'react'

const Honeymoon = () => {
	return (
		<section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden">
			{/* Video de fondo */}
			<video
				autoPlay
				loop
				muted
				playsInline
				className="absolute inset-0 w-full h-full object-cover"
			>
				<source src="/4d369b99254624da301ad06d8c20480e.mp4" type="video/mp4" />
			</video>

			{/* Overlay claro para hacer el fondo más luminoso */}
			<div className="absolute inset-0 bg-white/90"></div>
			<div className="relative z-10 px-4">
				<div className="max-w-4xl mx-auto text-center text-black">
					<h2 className="text-amber-800 text-2xl md:text-3xl font-serif uppercase text-center mb-2 tracking-wider">
						¡Tu presencia es nuestro mejor regalo!
					</h2>

					<div className="text-black font-sans md:text-xl leading-relaxed max-w-sm mx-auto my-8">
						<p className="mb-2">
							PERO SI QUIERES DARNOS UN PRESENTE... ¡PUEDES AYUDARNOS A TENER
							UNA LUNA DE MIEL INCREIBLE!
						</p>
					</div>

					{/* Detalles bancarios */}
					<div className="inline-block border border-amber-800 rounded-lg p-12 mt-12 md:mt-0 relative">
						<div className="text-center">
							<h4 className="text-2xl font-serif font-bold mb-2">
								UENO BANK
							</h4>
							<p className="text-xl md:text-xl font-light mb-2">
								Alejandro Mendieta
							</p>
							<p className="text-xl md:text-xl font-light mb-2">
								Cuenta N°: 14825960
							</p>
							<p className="text-xl md:text-xl font-light mb-2">
								C.I.N°: 4.670.473
							</p>
							<p className="text-xl md:text-xl font-light">
								<span className="font-bold">Alias: 4670473</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Honeymoon
