'use client'

import Image from 'next/image'
import React, { useRef } from 'react'
import { motion, useInView } from 'motion/react'

const DressCode = () => {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true, margin: "-100px" })

	return (
		<section ref={ref} className="relative w-full overflow-hidden">
			{/* Video de fondo superpuesto */}
			<video
				autoPlay
				loop
				muted
				playsInline
				className="absolute inset-0 w-full h-full object-cover"
			>
				<source src="/4d369b99254624da301ad06d8c20480e.mp4" type="video/mp4" />
			</video>

			{/* Overlay claro para mejor legibilidad */}
			<div className="absolute inset-0 bg-white/80"></div>

			{/* Contenido centrado */}
			<div className="relative z-10 px-4 py-16">
				<div className="max-w-6xl mx-auto space-y-12">
					{/* Título principal */}
					<div className="text-center">
						<h2 className="text-2xl md:text-4xl tracking-widest font-serif text-gray-800">
							TENIDA:
						</h2>
						<h3 className="text-2xl md:text-4xl font-serif font-bold text-amber-700 tracking-widest">
							COCTEL
						</h3>
					</div>

					{/* Layout para desktop */}
					<div className="hidden md:flex items-start justify-center gap-8 max-w-5xl mx-auto">
						{/* Traje masculino */}
						<motion.div 
							className="flex flex-col items-center"
							initial={{ opacity: 0, x: -50 }}
							animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							whileHover={{ scale: 1.05 }}
						>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
								transition={{ duration: 0.6, delay: 0.4 }}
								whileInView={{
									y: [-8, 8, -8],
									transition: {
										duration: 4,
										repeat: Infinity,
										ease: "easeInOut"
									}
								}}
							>
								<Image
									src="/dress_code_male.png"
									alt="Traje completo"
									width={1080}
									height={1245}
									className="object-contain h-96 w-auto"
									priority
								/>
							</motion.div>
							<motion.div 
								className="mt-6 text-center"
								initial={{ opacity: 0, y: 20 }}
								animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
								transition={{ duration: 0.6, delay: 0.6 }}
							>
								<h4 className="text-xl font-sans font-bold text-gray-900 tracking-widest">
									Traje completo
								</h4>
								<p className="text-sm font-sans text-gray-700 tracking-widest">
									(con o sin corbata)
								</p>
								<div className="bg-gradient-to-r from-amber-700 to-amber-800 text-white px-4 py-1 rounded-lg text-sm font-semibold mt-2">
									Evitar el color azul
								</div>
							</motion.div>
						</motion.div>

						{/* Separador floral central */}
						<motion.div 
							className="flex items-center justify-center h-full"
							initial={{ opacity: 0, scale: 0.8 }}
							animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
							transition={{ duration: 0.8, delay: 0.5 }}
						>
							<Image
								src="/dress_code_separator.png"
								alt="Separador floral"
								width={200}
								height={400}
								className="object-contain h-96 w-auto"
								priority
							/>
						</motion.div>

						{/* Traje femenino */}
						<motion.div 
							className="flex flex-col items-center"
							initial={{ opacity: 0, x: 50 }}
							animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							whileHover={{ scale: 1.05 }}
						>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
								transition={{ duration: 0.6, delay: 0.4 }}
								whileInView={{
									y: [-6, 6, -6],
									transition: {
										duration: 3.5,
										repeat: Infinity,
										ease: "easeInOut"
									}
								}}
							>
								<Image
									src="/dress_code_female.png"
									alt="Vestido largo o medio"
									width={1080}
									height={1245}
									className="object-contain h-96 w-auto"
									priority
								/>
							</motion.div>
							<motion.div 
								className="mt-6 text-center"
								initial={{ opacity: 0, y: 20 }}
								animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
								transition={{ duration: 0.6, delay: 0.6 }}
							>
								<h4 className="text-xl font-sans font-bold text-gray-900 tracking-widest">
									Vestido largo o medio
								</h4>
								<p className="text-sm font-sans text-gray-700 tracking-widest">
									(por debajo de la rodilla)
								</p>
								<div className="bg-gradient-to-r from-amber-700 to-amber-800 text-white px-4 py-1 rounded-lg text-sm font-semibold mt-2">
									Evitar colores claros semejantes al blanco
								</div>
							</motion.div>
						</motion.div>
					</div>

					{/* Layout para mobile */}
					<div className="md:hidden flex flex-col items-center gap-8">
						{/* Traje femenino */}
						<motion.div 
							className="flex flex-col items-center"
							initial={{ opacity: 0, y: 30 }}
							animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							whileHover={{ scale: 1.05 }}
						>
							<motion.div
								initial={{ opacity: 0, scale: 0.9 }}
								animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
								transition={{ duration: 0.6, delay: 0.4 }}
								whileInView={{
									y: [-5, 5, -5],
									scale: [1, 1.02, 1],
									transition: {
										duration: 3,
										repeat: Infinity,
										ease: "easeInOut"
									}
								}}
							>
								<Image
									src="/dress_code_female.png"
									alt="Vestido largo o medio"
									width={1080}
									height={1245}
									className="object-contain h-60 w-auto"
									priority
								/>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
								transition={{ duration: 0.6, delay: 0.6 }}
							>
								<h4 className="text-lg font-sans font-bold text-gray-900 tracking-widest text-center mt-4">
									Vestido largo o medio
								</h4>
								<p className="text-sm font-sans text-gray-700 tracking-widest text-center">
									(por debajo de la rodilla)
								</p>
								<div className="bg-gradient-to-r from-amber-700 to-amber-800 text-white px-4 py-1 rounded-lg text-sm font-semibold mt-2">
									Evitar colores claros semejantes al blanco
								</div>
							</motion.div>
						</motion.div>
						{/* Traje masculino */}
						<motion.div 
							className="flex flex-col items-center"
							initial={{ opacity: 0, y: 30 }}
							animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
							transition={{ duration: 0.8, delay: 0.4 }}
							whileHover={{ scale: 1.05 }}
						>
							<motion.div
								initial={{ opacity: 0, scale: 0.9 }}
								animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
								transition={{ duration: 0.6, delay: 0.6 }}
								whileInView={{
									y: [-7, 7, -7],
									scale: [1, 1.03, 1],
									transition: {
										duration: 3.8,
										repeat: Infinity,
										ease: "easeInOut"
									}
								}}
							>
								<Image
									src="/dress_code_male.png"
									alt="Traje completo"
									width={1080}
									height={1245}
									className="object-contain h-64 w-auto"
									priority
								/>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
								transition={{ duration: 0.6, delay: 0.8 }}
							>
								<h4 className="text-lg font-sans font-bold text-gray-900 tracking-widest text-center mt-4">
									Traje completo
								</h4>
								<p className="text-sm font-sans text-gray-700 tracking-widest text-center">
									(con o sin corbata)
								</p>
								<div className="bg-gradient-to-r from-amber-700 to-amber-800 text-white px-4 py-1 rounded-lg text-sm font-semibold mt-2">
									Evitar el color azul
								</div>
							</motion.div>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default DressCode
