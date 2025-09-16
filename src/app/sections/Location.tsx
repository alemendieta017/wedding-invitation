'use client'

import Image from 'next/image'
import { motion } from 'motion/react'

const Location = () => {
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
		<section className="relative w-full h-screen flex flex-col justify-center overflow-hidden">
			{/* Imagen de fondo */}
			<div className="absolute inset-0 w-full h-full">
				<Image
					src="/48bb166f43c17820431359e70d8a41db.jpg"
					alt="Centro Cultural y de Convenciones ITA ENRAMADA"
					fill
					className="object-cover blur-[2px] md:blur-none"
					priority
				/>
			</div>

			{/* Overlay oscuro semi-transparente con animación */}
			<motion.div
				className="absolute inset-0 bg-black/50"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
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
					LUGAR DE LA CEREMONIA Y RECEPCIÓN
				</motion.h2>

				<motion.p
					className="font-sans md:text-xl font-semibold text-center md:max-w-sm tracking-widest text-shadow"
					variants={subtitleVariants}
					whileHover={{
						scale: 1.02,
						transition: { duration: 0.2 },
					}}
				>
					CENTRO CULTURAL Y DE CONVENCIONES ITA ENRAMADA
				</motion.p>

				<motion.p
					className="font-sans md:text-xl font-light text-sm text-center tracking-wider text-shadow"
					variants={addressVariants}
					whileHover={{
						scale: 1.02,
						transition: { duration: 0.2 },
					}}
				>
					AVDA. CORONEL ABRAHAN SCHWEIZER, ASUNCIÓN
				</motion.p>

				{/* Imagen adicional solo para móvil */}
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
								delay: 1.4,
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
							src="/48bb166f43c17820431359e70d8a41db.jpg"
							alt="Centro Cultural y de Convenciones ITA ENRAMADA"
							fill
							className="object-cover"
						/>
					</div>
				</motion.div>
			</motion.div>
		</section>
	)
}

export default Location
