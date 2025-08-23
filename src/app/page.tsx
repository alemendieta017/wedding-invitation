import Image from 'next/image'

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col">
			{/* Primera sección - Hero con imagen de fondo */}
			<section className="hero-section relative w-full overflow-hidden">
				{/* Imagen de fondo */}
				<Image
					src="/d82d28e3e5040753a89c6d003e6b727d.jpg"
					alt="Jessica y Alejandro - Foto de boda"
					fill
					className="object-cover"
					priority
				/>

				{/* Overlay oscuro semi-transparente */}
				<div className="absolute inset-0 bg-black/40"></div>

				{/* Contenido centrado */}
				<div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
					{/* Nombres de la pareja */}
					<h1 className="text-6xl md:text-8xl font-great-vibes text-center mb-6 font-light tracking-wider text-shadow">
						Jessica & Alejandro
					</h1>

					{/* Texto "NOS CASAMOS" con líneas decorativas */}
					<div className="flex items-center gap-6">
						<div className="w-16 h-px bg-white"></div>
						<span className="text-lg md:text-2xl font-light tracking-widest uppercase text-shadow">
							Nos Casamos
						</span>
						<div className="w-16 h-px bg-white"></div>
					</div>
				</div>
			</section>

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
				<div className="absolute inset-0 bg-black/30"></div>

				{/* Contenido centrado */}
				<div className="relative z-10 py-20 px-4">
					<div className="max-w-screen-md mx-auto text-center text-white">
						{/* Título principal */}
						<h2 className="text-4xl md:text-6xl font-serif text-center mb-8 font-light tracking-wider text-shadow lg:whitespace-nowrap">
							Estás invitado a nuestra boda
						</h2>

						{/* Texto descriptivo */}
						<div className="text-lg md:text-2xl font-light leading-relaxed text-shadow max-w-3xl mx-auto">
							<p>
								Queremos que te embarques con nosotros en esta gran aventura: la
								de presenciar nuestro &ldquo;sí, quiero&rdquo; y celebrar el
								amor que nos une, compartiendo risas, emociones y momentos que
								quedarán grabados para siempre en nuestra memoria.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Cuarta sección - Código de vestimenta COCTEL */}
			<section className="relative w-full overflow-hidden">
				{/* Video de fondo superpuesto */}
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

				{/* Overlay claro para mejor legibilidad */}
				<div className="absolute inset-0 bg-white/80"></div>

				{/* Contenido centrado */}
				<div className="relative z-10 px-4">
					<div className="max-w-6xl mx-auto">
						{/* Título principal */}
						<div className="text-center mb-16">
							<h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-2">
								TENIDA:
							</h2>
							<h3 className="text-5xl md:text-6xl font-sans text-amber-700 font-bold">
								COCTEL
							</h3>
						</div>

						{/* Imagen principal debajo del título */}
						<div className="text-center mb-16">
							<div className="w-full max-w-4xl mx-auto h-[500px] rounded-lg">
								<Image
									src="/77ad98801938ae8054b97e68fa98fb59.png"
									alt="Guía de vestimenta COCTEL"
									width={1080}
									height={1350}
									className="ml-10 w-full h-full object-cover object-[0%_40%]"
									priority
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Quinta sección - Lugar de la ceremonia y recepción */}
			<section className="relative w-full overflow-hidden">
				{/* Imagen de fondo */}
				<Image
					src="/48bb166f43c17820431359e70d8a41db.jpg"
					alt="Centro Cultural y de Convenciones ITA ENRAMADA"
					fill
					className="object-cover"
					priority
				/>

				{/* Overlay oscuro semi-transparente para mejor legibilidad del texto */}
				<div className="absolute inset-0 bg-black/40"></div>

				{/* Contenido centrado */}
				<div className="relative z-10 py-20 px-4">
					<div className="max-w-4xl mx-auto text-center text-white">
						{/* Título principal */}
						<h2 className="text-4xl md:text-6xl font-serif text-center mb-8 font-light tracking-wider text-shadow">
							LUGAR DE LA CEREMONIA Y RECEPCIÓN
						</h2>

						{/* Tipo de venue */}
						<h3 className="text-2xl md:text-3xl font-light tracking-wider text-shadow mb-6">
							CENTRO CULTURAL Y DE CONVENCIONES
						</h3>

						{/* Nombre del venue */}
						<h4 className="text-3xl md:text-4xl font-serif text-center mb-6 font-light tracking-wider text-shadow">
							ITA ENRAMADA
						</h4>

						{/* Dirección */}
						<p className="text-lg md:text-xl font-light tracking-wider text-shadow">
							AVDA. CORONEL ABRAHAN SCHWEIZER, ASUNCIÓN
						</p>
					</div>
				</div>
			</section>

			{/* Sexta sección - Fondo de luna de miel */}
			<section className="relative w-full overflow-hidden">
				{/* Imagen de fondo */}
				<Image
					src="/f0a8493495602eb2ac61248d6d3d9820.jpg"
					alt="Fondo para fondo de luna de miel"
					fill
					className="object-cover"
					priority
				/>

				{/* Overlay negro semi-transparente */}
				<div className="absolute inset-0 bg-black/60"></div>

				{/* Contenido centrado */}
				<div className="relative z-10 py-20 px-4">
					<div className="max-w-4xl mx-auto text-center text-white">
						{/* Mensaje principal */}
						<div className="mb-12">
							<h2 className="text-4xl md:text-5xl font-serif text-center mb-4 font-light tracking-wider text-shadow">
								TU PRESENCIA ES
							</h2>
							<h3 className="text-5xl md:text-6xl font-serif text-center mb-6 font-bold tracking-wider text-shadow">
								NUESTRO MEJOR REGALO.
							</h3>
							<div className="text-lg md:text-xl font-light leading-relaxed text-shadow max-w-3xl mx-auto">
								<p className="mb-2">PERO SI QUIERES DARNOS UN PRESENTE..</p>
								<p className="mb-2">¡PUEDES AYUDARNOS A TENER UNA</p>
								<p>LUNA DE MIEL INCREIBLE!</p>
							</div>
						</div>

						{/* Detalles bancarios */}
						<div className="inline-block border border-white rounded-lg p-8 relative">
							{/* Elemento decorativo */}
							<div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white rotate-45"></div>

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

			{/* Séptima sección - Línea de tiempo del día de la boda */}
			<section className="py-20 px-4 relative overflow-hidden bg-white">
				{/* Rosa decorativa en la esquina superior izquierda */}
				<div className="absolute top-0 left-0">
					<Image
						src="/232c6320146b3712f51059d8621157f5.png"
						alt="Rosa decorativa"
						width={658}
						height={800}
						className="object-fit w-full h-full object-bottom -rotate-90"
					/>
				</div>

				{/* Contenido principal */}
				<div className="max-w-4xl mx-auto relative z-10">
					{/* Título principal */}
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-serif text-amber-800 font-light tracking-wider">
							EL GRAN DÍA
						</h2>
					</div>

					<div>
						<Image
							src="/cronograma.png"
							alt="Cronograma del día"
							width={1080}
							height={1920}
							className="mx-auto"
						/>
					</div>
				</div>
			</section>

			{/* Octava sección - Confirmación de asistencia */}
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
				<div className="relative z-10 py-40 px-4">
					<div className="max-w-4xl mx-auto text-center text-white">
						{/* Título principal */}
						<h2 className="text-xl md:text-2xl font-sans text-center mb-6 font-light tracking-wider text-shadow">
							CONFIRMA TU ASISTENCIA AL:
						</h2>

						{/* Número de teléfono */}
						<div className="mb-6">
							<p className="text-lg md:text-xl font-sans font-light tracking-wider text-shadow">
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
						<div className="text-base md:text-lg font-serif font-light leading-relaxed text-shadow">
							<p className="mb-2">¡ESPERAMOS QUE PUEDAS</p>
							<p>ACOMPAÑARNOS!</p>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}
