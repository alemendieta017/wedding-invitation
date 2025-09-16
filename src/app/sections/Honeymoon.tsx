'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'

const Honeymoon = () => {
	return (
		<section className="relative pt-24 w-full min-h-svh flex flex-col justify-center overflow-hidden bg-white">
			{/* Overlay claro para hacer el fondo más luminoso */}
			<div className="absolute inset-0 bg-white/90"></div>
			<div className="relative z-10 px-6">
				<div className="max-w-4xl mx-auto text-center text-black">
					{/* Icono de regalo grande central */}
					<motion.div
						className="flex justify-center mb-8"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						<motion.svg
							width="80"
							height="80"
							viewBox="0 0 24 24"
							fill="none"
							stroke="#92400e"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="drop-shadow-sm"
							animate={{
								scale: [1, 1.1, 1],
								rotate: [0, 2, -2, 0],
							}}
							transition={{
								duration: 2,
								repeat: Infinity,
								ease: 'easeInOut',
							}}
						>
							<path d="M20 12v10H4V12" />
							<path d="M2 7h20v5H2z" />
							<path d="M12 22V7" />
							<path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
							<path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
						</motion.svg>
					</motion.div>

					<motion.h2
						className="text-amber-800 text-2xl md:text-3xl font-serif uppercase text-center mb-2 tracking-wider"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
					>
						¡Tu presencia es nuestro mejor regalo!
					</motion.h2>

					<motion.div
						className="text-black font-sans md:text-xl leading-relaxed max-w-sm mx-auto my-8"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.6 }}
					>
						<p className="mb-2">
							PERO SI QUIERES DARNOS UN PRESENTE... ¡PUEDES AYUDARNOS A TENER
							UNA LUNA DE MIEL INCREIBLE!
						</p>
					</motion.div>

					{/* Detalles bancarios */}
					<div className="inline-block border-2 border-amber-800 rounded-lg p-12 mt-12 md:mt-0 relative">
						{/* Estrella izquierda */}
						<div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2">
							<Image
								src="J_20250916_003550_0000.png"
								alt="Estrella izquierda"
								width={546}
								height={546}
								className="w-16 h-16 object-cover"
							/>
						</div>
						{/* Estrella derecha */}
						<div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
							<Image
								src="J_20250916_003550_0000.png"
								alt="Estrella derecha"
								width={546}
								height={546}
								className="w-16 h-16 object-cover"
							/>
						</div>
						<div className="text-center">
							<h4 className="text-2xl font-serif font-bold mb-2">UENO BANK</h4>
							<p className="text-xl md:text-xl font-light mb-2">
								Alejandro Mendieta
							</p>
							<div className="flex items-center justify-center mb-2">
								<p className="text-xl md:text-xl font-light">
									Cuenta N°: 14825960
								</p>
							</div>
							<p className="text-xl md:text-xl font-light mb-2">
								C.I.N°: 4.670.473
							</p>
							<p className="text-xl md:text-xl font-light">
								<span className="font-bold">Alias: 4670473</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Honeymoon
