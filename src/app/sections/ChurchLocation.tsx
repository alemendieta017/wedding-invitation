import Image from 'next/image'

const ChurchLocation = () => {
	const imagePath = 'IMG_20250902_201638~2.jpg'
	return (
		<section className="relative w-full min-h-screen flex flex-col justify-center">
			<Image
				src={imagePath}
				alt="Centro Cultural y de Convenciones ITA ENRAMADA"
				fill
				className="object-cover"
				priority
			/>

			<div className="absolute inset-0 bg-black/60"></div>

			<div className="relative z-10 max-w-4xl text-white px-10 space-y-4 flex flex-col items-center mx-auto">
				<h2 className="text-2xl md:text-3xl font-serif text-center text-shadow">
					LUGAR DE LA CEREMONIA RELIGIOSA
				</h2>
				<p className="font-sans md:text-xl font-semibold text-center md:max-w-sm tracking-widest text-shadow">
					PARROQUIA NUESTRA SEÑORA DE LOS MILAGROS CAACUPEMI
				</p>
				<p className="font-sans md:text-xl font-light text-sm text-center tracking-wider text-shadow">
					CORONEL WEISSLLER C/ AVDA. FERNANDO DE LA MORA, ASUNCIÓN.
				</p>
			</div>
		</section>
	)
}

export default ChurchLocation
