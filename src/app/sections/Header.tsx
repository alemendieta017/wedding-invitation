import Image from 'next/image'

const Header = () => {
	return (
		<>
			{/* Primera sección - Hero con imagen de fondo */}
			<section className="relative w-full h-svh overflow-hidden flex flex-col justify-center">
				{/* Imagen de fondo */}
				<Image
					src="/_MG_0007.jpg"
					alt="Jessica y Alejandro - Foto de boda"
					fill
					className="object-cover object-[70%_25%]"
					priority
				/>

				{/* Overlay oscuro semi-transparente */}
				<div className="absolute inset-0 bg-black/40"></div>

				{/* Contenido centrado */}
				<div className="relative text-white z-10 flex flex-col items-center justify-center space-y-6 h-full">
					{/* Nombres de la pareja */}
					<h1 className="text-6xl md:text-8xl font-gwendolyn font-bold text-center leading-12 text-shadow">
						Jessica & Alejandro
					</h1>

					{/* Texto "NOS CASAMOS" con líneas decorativas */}
					<div className="flex items-center gap-6">
						<div className="w-16 h-px bg-white"></div>
						<span className="text-lg md:text-2xl font-sans font-light tracking-widest uppercase text-shadow">
							Nos Casamos
						</span>
						<div className="w-16 h-px bg-white"></div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Header
