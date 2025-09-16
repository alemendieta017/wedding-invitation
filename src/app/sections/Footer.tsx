'use client'

import { useEffect, useRef, useState } from 'react'

const Footer = () => {
	const URL_WHATSAPP =
		'https://wa.me/595994208286?text=Hola%2C%20quiero%20confirmar%20presencia%20en%20la%20boda%20de%20Ale%20%26%20Jessi%20%E2%98%BA%EF%B8%8F'
	const [isVisible, setIsVisible] = useState(false)
	const sectionRef = useRef<HTMLElement>(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsVisible(entry.isIntersecting)
			},
			{
				threshold: 0,
			}
		)

		const currentSection = sectionRef.current
		if (currentSection) {
			observer.observe(currentSection)
		}

		return () => {
			if (currentSection) {
				observer.unobserve(currentSection)
			}
		}
	}, [])

	return (
		<section
			ref={sectionRef}
			className="relative w-full h-screen flex flex-col justify-center"
		>
			{/* Imagen fija de fondo - solo visible cuando la sección está en viewport */}
			<div
				className={`fixed h-screen inset-0 bg-cover bg-center bg-no-repeat -z-10 transition-opacity duration-300 ${
					isVisible ? 'opacity-100' : 'opacity-0'
				}`}
				style={{
					backgroundImage: "url('/20250825002456280.jpeg.jpg')",
					backgroundPosition: '50% 40%',
				}}
			/>
			{/* Overlay oscuro - solo visible cuando la sección está en viewport */}
			<div
				className={`fixed h-screen inset-0 bg-black/50 -z-10 transition-opacity duration-300 ${
					isVisible ? 'opacity-100' : 'opacity-0'
				}`}
			/>

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
						<p className="text-sm md:text-sm font-sans text-shadow">
							Coordinadora del Evento
						</p>
					</div>

					{/* Botón de WhatsApp */}
					<div className="mb-8">
						<a
							href={URL_WHATSAPP}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-medium py-2 px-4 rounded-lg border border-white/30 transition-all duration-300 hover:border-white/50"
						>
							<svg
								className="w-4 h-4"
								fill="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
							</svg>
							Confirmar asistencia
						</a>
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
