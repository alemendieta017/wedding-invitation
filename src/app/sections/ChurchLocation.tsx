'use client'

import Image from 'next/image'
import { motion } from 'motion/react'

const ChurchLocation = () => {
	const imagePath = 'IMG_20250902_201638~2.jpg'
	const mobileImagePath = '20250914162545066.jpeg.jpg'
	const URL_MAP_CHURCH = 'https://maps.app.goo.gl/WsMq7dXKmn9YZxcA7'

	// Animaciones de entrada
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				duration: 1.2,
				ease: 'easeOut' as const,
				staggerChildren: 0.4,
			},
		},
	}

	const titleVariants = {
		hidden: {
			opacity: 0,
			y: 80,
			scale: 0.9,
		},
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				duration: 1.2,
				ease: 'easeOut' as const,
				delay: 0.2,
			},
		},
	}

	const subtitleVariants = {
		hidden: {
			opacity: 0,
			y: 60,
			scale: 0.95,
		},
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				duration: 1,
				ease: 'easeOut' as const,
				delay: 0.6,
			},
		},
	}

	const addressVariants = {
		hidden: {
			opacity: 0,
			y: 40,
			scale: 0.95,
		},
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				duration: 0.8,
				ease: 'easeOut' as const,
				delay: 1.0,
			},
		},
	}

	return (
		<section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden">
			{/* Imagen de fondo - Desktop */}
			<div className="absolute inset-0 w-full h-full hidden md:block">
				<Image
					src={imagePath}
					alt="Centro Cultural y de Convenciones ITA ENRAMADA"
					fill
					className="object-cover"
					priority
				/>
			</div>
			
			{/* Imagen de fondo - Mobile */}
			<div className="absolute inset-0 w-full h-full block md:hidden">
				<Image
					src={mobileImagePath}
					alt="Centro Cultural y de Convenciones ITA ENRAMADA"
					fill
					className="object-cover"
					priority
				/>
			</div>

			{/* Overlay oscuro semi-transparente con animación */}
			<motion.div
				className="absolute inset-0 bg-black/60"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: false }}
				transition={{ duration: 1.5, delay: 0.3 }}
			></motion.div>

			{/* Contenido con animaciones */}
			<motion.div
				className="relative z-10 max-w-4xl text-white px-10 space-y-4 flex flex-col items-center mx-auto"
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.3 }}
			>
				<motion.h2
					className="text-2xl md:text-3xl font-serif text-center text-shadow"
					variants={titleVariants}
					whileHover={{
						scale: 1.05,
						transition: { duration: 0.3 },
					}}
				>
					LUGAR DE LA CEREMONIA RELIGIOSA
				</motion.h2>

				<motion.p
					className="font-sans md:text-xl font-semibold text-center md:max-w-sm tracking-widest text-shadow"
					variants={subtitleVariants}
					whileHover={{
						scale: 1.02,
						transition: { duration: 0.2 },
					}}
				>
					PARROQUIA NUESTRA SEÑORA DE LOS MILAGROS CAACUPEMI
				</motion.p>

				<motion.p
					className="font-sans md:text-xl font-light text-sm text-center tracking-wider text-shadow"
					variants={addressVariants}
					whileHover={{
						scale: 1.02,
						transition: { duration: 0.2 },
					}}
				>
					CORONEL WEISSLLER C/ AVDA. FERNANDO DE LA MORA, ASUNCIÓN.
				</motion.p>

				{/* Botón de mapa */}
				<motion.div
					className="mt-6"
					variants={{
						hidden: {
							opacity: 0,
							y: 40,
							scale: 0.95,
						},
						visible: {
							opacity: 1,
							y: 0,
							scale: 1,
							transition: {
								duration: 0.8,
								ease: 'easeOut' as const,
								delay: 1.4,
							},
						},
					}}
				>
					<a
						href={URL_MAP_CHURCH}
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
							<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
						</svg>
						Ver en mapa
					</a>
				</motion.div>

				<motion.div
					className="w-full max-w-md mx-auto mt-8 rounded-2xl overflow-hidden shadow-2xl bg-gray-200 relative md:hidden"
					variants={{
						hidden: {
							opacity: 0,
							y: 40,
							scale: 0.95,
						},
						visible: {
							opacity: 1,
							y: 0,
							scale: 1,
							transition: {
								duration: 0.8,
								ease: 'easeOut' as const,
								delay: 1.6,
							},
						},
					}}
					whileHover={{
						scale: 1.02,
						transition: { duration: 0.3 },
					}}
				>
					<div className="aspect-video w-full relative bg-gray-300">
						<Image
							src={imagePath}
							alt="Parroquia Nuestra Señora de los Milagros Caacupemi"
							fill
							className="object-cover"
						/>
					</div>
				</motion.div>
			</motion.div>
		</section>
	)
}

export default ChurchLocation
