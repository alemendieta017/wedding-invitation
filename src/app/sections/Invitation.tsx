'use client'

import { useEffect, useRef, useState } from 'react'
import CountdownTimer from '../components/CountdownTimer'

const Invitation = () => {
	const imagePath = '20250914161711261.jpeg.webp'
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
		<section ref={sectionRef} className="relative w-full h-svh">
			{/* Imagen fija de fondo - solo visible cuando la sección está en viewport */}
			<div
				className={`fixed h-screen inset-0 bg-cover bg-center bg-no-repeat -z-10 transition-opacity duration-300 ${
					isVisible ? 'opacity-100' : 'opacity-0'
				}`}
				style={{
					backgroundImage: `url('/${imagePath}')`,
				}}
			/>
			{/* Overlay oscuro - solo visible cuando la sección está en viewport */}
			<div
				className={`fixed h-screen inset-0 bg-black/50 -z-10 transition-opacity duration-300 ${
					isVisible ? 'opacity-100' : 'opacity-0'
				}`}
			/>

			{/* Contenido */}
			<div className="relative z-10 h-screen max-w-2xl mx-auto flex flex-col items-center justify-center px-6">
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
				<div className="mt-8 flex flex-col items-center justify-center">
					<CountdownTimer />
				</div>
			</div>
		</section>
	)
}

export default Invitation
