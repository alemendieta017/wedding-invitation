'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'motion/react'

const Header = () => {
	const { scrollY } = useScroll()
	const mobileImagePath = '20250827092024463.jpeg.webp'
	const imagePath = '/1757994534332.jpg'
	const backgroundY = useTransform(scrollY, [0, 1000], ['0%', '50%'])
	const backgroundOpacity = useTransform(scrollY, [0, 300], [1, 0.3])

	// Animaciones de entrada
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				duration: 1.2,
				ease: 'easeOut' as const,
				staggerChildren: 0.3,
			},
		},
	}

	const titleVariants = {
		hidden: {
			opacity: 0,
			y: 100,
			scale: 0.8,
		},
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				duration: 1.5,
				ease: 'easeOut' as const,
				delay: 0.2,
			},
		},
	}

	const subtitleVariants = {
		hidden: {
			opacity: 0,
			y: 50,
			scale: 0.9,
		},
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				duration: 1.2,
				ease: 'easeOut' as const,
				delay: 0.8,
			},
		},
	}

	const lineVariants = {
		hidden: {
			opacity: 0,
			scaleX: 0,
		},
		visible: {
			opacity: 1,
			scaleX: 1,
			transition: {
				duration: 1,
				ease: 'easeOut' as const,
				delay: 1.2,
			},
		},
	}

	return (
		<>
			{/* Primera sección - Hero con imagen de fondo */}
			<section className="relative w-full h-svh overflow-hidden flex flex-col justify-center">
				{/* Imagen de fondo para pantallas pequeñas con efecto parallax */}
				<motion.div
					style={{ y: backgroundY, opacity: backgroundOpacity }}
					className="absolute inset-0 w-full h-full"
				>
					<Image
						src={mobileImagePath}
						alt="Jessica y Alejandro - Foto de boda"
						fill
						className="object-cover md:hidden"
						priority
					/>
				</motion.div>

				{/* Imagen de fondo para pantallas medianas y grandes con efecto parallax */}
				<motion.div
					style={{ y: backgroundY, opacity: backgroundOpacity }}
					className="absolute inset-0 w-full h-full"
				>
					<Image
						src={imagePath}
						alt="Jessica y Alejandro - Foto de boda"
						fill
						className="object-cover hidden md:block"
						priority
					/>
				</motion.div>

				{/* Overlay oscuro semi-transparente con animación */}
				<motion.div
					className="hidden md:block absolute inset-0 bg-black/10"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 2, delay: 0.5 }}
				></motion.div>

				{/* Contenido posicionado en 3/4 de la pantalla */}
				<motion.div
					className="relative text-white z-10 flex flex-col items-center justify-end space-y-6 h-full pb-24"
					variants={containerVariants}
					initial="hidden"
					animate="visible"
				>
					{/* Nombres de la pareja */}
					<motion.h1
						className="text-6xl md:text-8xl font-gwendolyn font-bold text-center leading-12 text-shadow"
						variants={titleVariants}
						whileHover={{
							scale: 1.05,
							transition: { duration: 0.3 },
						}}
					>
						Jessica & Alejandro
					</motion.h1>

					{/* Texto "NOS CASAMOS" con líneas decorativas */}
					<motion.div
						className="flex items-center gap-6"
						variants={subtitleVariants}
					>
						<motion.div
							className="w-16 h-px bg-white"
							variants={lineVariants}
						></motion.div>
						<motion.span
							className="text-lg md:text-2xl font-sans font-light tracking-widest uppercase text-shadow"
							variants={subtitleVariants}
							whileHover={{
								scale: 1.1,
								transition: { duration: 0.2 },
							}}
						>
							Nos Casamos
						</motion.span>
						<motion.div
							className="w-16 h-px bg-white"
							variants={lineVariants}
						></motion.div>
					</motion.div>
				</motion.div>
			</section>
		</>
	)
}

export default Header
