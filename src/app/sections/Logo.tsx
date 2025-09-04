import Image from 'next/image'

const Logo = () => {
	return (
		<>
			{/* Segunda sección - Logo y fecha de la boda */}
			<section className="px-4 relative overflow-hidden">
				{/* Video de fondo */}
				<video
					autoPlay
					loop
					muted
					playsInline
					className="absolute inset-0 w-full h-full object-cover"
				>
					<source
						src="/4d369b99254624da301ad06d8c20480e.mp4"
						type="video/mp4"
					/>
				</video>

				{/* Overlay claro para hacer el fondo más luminoso */}
				<div className="absolute inset-0 bg-white/90"></div>

				{/* Contenido centrado con z-index para estar sobre el video */}
				<div className="md:min-h-none py-40 md:py-30 mx-auto text-center relative z-10">
					{/* Logo de la boda */}
					<div className="mx-auto">
						<Image
							src="/e90ecbf79acf3ad40360a1dfb8910a2c.png"
							alt="Logo de boda Jessica y Alejandro"
							width={640}
							height={800}
							className="mx-auto aspect-video object-cover drop-shadow-lg"
							priority
						/>
					</div>

					{/* Fecha de la boda */}
					<div className="inline-block">
						<h2 className="text-4xl md:text-5xl font-great-vibes text-amber-800 font-light tracking-wider border-y border-black px-2 py-1">
							25 . 10 . 2025
						</h2>
					</div>
				</div>
			</section>
		</>
	)
}

export default Logo
