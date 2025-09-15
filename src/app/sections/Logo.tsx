'use client'

import Image from 'next/image'
import { motion } from 'motion/react'

const Logo = () => {
	return (
		<>
			{/* Segunda sección - Logo y fecha de la boda */}
			<section className="px-4 min-h-screen flex flex-col justify-center relative overflow-hidden">
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
					<motion.div 
						className="mx-auto"
						initial={{ opacity: 0, scale: 0.8, y: 50 }}
						animate={{ 
							opacity: 1, 
							scale: 1, 
							y: [0, -10, 0]
						}}
						transition={{ 
							opacity: { duration: 1.2, ease: "easeOut", delay: 0.3 },
							scale: { duration: 1.2, ease: "easeOut", delay: 0.3 },
							y: {
								duration: 4,
								repeat: Infinity,
								ease: "easeInOut",
								delay: 1.5
							}
						}}
						whileHover={{ 
							scale: 1.05,
							y: -5,
							transition: { duration: 0.3 }
						}}
					>
						<Image
							src="/e90ecbf79acf3ad40360a1dfb8910a2c.png"
							alt="Logo de boda Jessica y Alejandro"
							width={640}
							height={800}
							className="mx-auto aspect-video object-cover drop-shadow-lg"
							priority
						/>
					</motion.div>

					{/* Fecha de la boda */}
					<motion.div 
						className="inline-block mt-8"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ 
							duration: 0.8, 
							ease: "easeOut",
							delay: 1.0
						}}
					>
						<motion.h2 
							className="text-4xl md:text-5xl font-great-vibes text-amber-800 font-light tracking-wider border-y border-black px-2 py-1"
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ 
								opacity: 1, 
								scale: 1,
								textShadow: [
									"0 0 0px rgba(146, 64, 14, 0)",
									"0 0 10px rgba(146, 64, 14, 0.3)",
									"0 0 0px rgba(146, 64, 14, 0)"
								]
							}}
							transition={{ 
								opacity: { duration: 0.6, ease: "easeOut", delay: 1.2 },
								scale: { duration: 0.6, ease: "easeOut", delay: 1.2 },
								textShadow: {
									duration: 3,
									repeat: Infinity,
									ease: "easeInOut",
									delay: 2.0
								}
							}}
							whileHover={{ 
								scale: 1.05,
								color: "#92400e",
								textShadow: "0 0 15px rgba(146, 64, 14, 0.5)",
								transition: { duration: 0.2 }
							}}
						>
							25 . 10 . 2025
						</motion.h2>
					</motion.div>
				</div>
			</section>
		</>
	)
}

export default Logo
