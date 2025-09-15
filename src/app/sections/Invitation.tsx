const Invitation = () => {
	return (
		<section
			className="relative w-full h-screen bg-fixed bg-cover bg-center bg-no-repeat"
			style={{
				backgroundImage: "url('/20250914161711261.jpeg.jpg')",
			}}
		>
			{/* Overlay oscuro */}
			<div className="absolute inset-0 bg-black/50"></div>

			{/* Contenido */}
			<div className="relative z-10 h-screen max-w-2xl mx-auto flex items-center justify-center px-6">
				<div className="max-w-screen-sm text-center text-white">
					{/* Título principal */}
					<h2 className="text-4xl font-serif text-center text-shadow mb-4 md:whitespace-nowrap">
						Estás invitado a nuestra boda
					</h2>

					{/* Texto descriptivo */}
					<div className="font-sans font-semibold text-sm md:text-lg tracking-widest leading-snug">
						<p>
							QUEREMOS QUE TE EMBARQUES CON NOSOTROS EN ESTA GRAN AVENTURA: LA
							DE PRESENCIAR NUESTRO &quot;SÍ, QUIERO&quot; Y CELEBRAR EL AMOR
							QUE NOS UNE, COMPARTIENDO RISAS, EMOCIONES Y MOMENTOS QUE QUEDARÁN
							GRABADOS PARA SIEMPRE EN NUESTRA MEMORIA.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Invitation
