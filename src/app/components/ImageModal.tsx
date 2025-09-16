'use client'

import Image from 'next/image'
import { motion, AnimatePresence } from 'motion/react'
import { useEffect } from 'react'

interface ImageModalProps {
	isOpen: boolean
	onClose: () => void
	images: Array<{ src: string; alt: string }>
	selectedIndex: number
	onPrevious: () => void
	onNext: () => void
}

const ImageModal = ({
	isOpen,
	onClose,
	images,
	selectedIndex,
	onPrevious,
	onNext,
}: ImageModalProps) => {
	// Keyboard navigation
	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (isOpen) {
				if (event.key === 'Escape') {
					onClose()
				} else if (event.key === 'ArrowLeft') {
					onPrevious()
				} else if (event.key === 'ArrowRight') {
					onNext()
				}
			}
		}

		document.addEventListener('keydown', handleKeyDown)
		return () => document.removeEventListener('keydown', handleKeyDown)
	}, [isOpen, onClose, onPrevious, onNext])

	// Prevent body scroll when modal is open
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'unset'
		}

		return () => {
			document.body.style.overflow = 'unset'
		}
	}, [isOpen])

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.3 }}
					onClick={onClose}
				>
					{/* Contenido del modal */}
					<motion.div
						className="relative max-w-4xl max-h-[90vh] w-full mx-4"
						initial={{ scale: 0.8, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						exit={{ scale: 0.8, opacity: 0 }}
						transition={{ duration: 0.3 }}
						onClick={(e) => e.stopPropagation()}
					>
						{/* Botón de cerrar */}
						<button
							className="absolute -top-4 -right-4 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-colors duration-200"
							onClick={onClose}
						>
							<svg
								className="w-6 h-6 text-white"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>

						{/* Imagen principal */}
						<div className="relative w-full h-[70vh] rounded-2xl overflow-hidden shadow-2xl">
							<Image
								src={images[selectedIndex].src}
								alt={images[selectedIndex].alt}
								fill
								className="object-contain"
								priority
							/>
						</div>

						{/* Navegación */}
						<div className="flex items-center justify-between mt-6">
							{/* Botón anterior */}
							<button
								className="flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full px-4 py-2 transition-colors duration-200"
								onClick={onPrevious}
							>
								<svg
									className="w-5 h-5 text-white"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M15 19l-7-7 7-7"
									/>
								</svg>
								<span className="text-white text-sm font-medium">
									Anterior
								</span>
							</button>

							{/* Indicador de imagen actual */}
							<div className="text-white text-center">
								<span className="text-lg font-medium">
									{selectedIndex + 1} / {images.length}
								</span>
								<p className="text-sm opacity-80 mt-1">
									{images[selectedIndex].alt}
								</p>
							</div>

							{/* Botón siguiente */}
							<button
								className="flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full px-4 py-2 transition-colors duration-200"
								onClick={onNext}
							>
								<span className="text-white text-sm font-medium">
									Siguiente
								</span>
								<svg
									className="w-5 h-5 text-white"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M9 5l7 7-7 7"
									/>
								</svg>
							</button>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}

export default ImageModal
