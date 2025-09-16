'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import ImageModal from '../components/ImageModal'

const Gallery = () => {
	const [isVisible, setIsVisible] = useState(false)
	const [selectedImage, setSelectedImage] = useState<number | null>(null)
	const sectionRef = useRef<HTMLElement>(null)

	// Imágenes de la galería romántica
	const galleryImages = [
		{
			src: '/20250914155711275.jpeg.jpg',
			alt: 'Abrazo bajo el arco',
		},
		{
			src: '/20250914162545066.jpeg.jpg',
			alt: 'Intimidad y amor',
		},
		{
			src: '/20250914160608678.jpeg.jpg',
			alt: 'Momento romántico',
		},
		{
			src: '/20250914170028570.jpeg.jpg',
			alt: 'Romance bajo las flores',
		},
	]

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsVisible(entry.isIntersecting)
			},
			{
				threshold: 0.1,
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

	// Handlers for modal navigation
	const handlePrevious = () => {
		setSelectedImage((prev) =>
			prev !== null ? (prev > 0 ? prev - 1 : galleryImages.length - 1) : null
		)
	}

	const handleNext = () => {
		setSelectedImage((prev) =>
			prev !== null ? (prev < galleryImages.length - 1 ? prev + 1 : 0) : null
		)
	}

	const handleCloseModal = () => {
		setSelectedImage(null)
	}

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

	const imageVariants = {
		hidden: {
			opacity: 0,
			scale: 0.8,
			y: 30,
		},
		visible: {
			opacity: 1,
			scale: 1,
			y: 0,
			transition: {
				duration: 1.5,
				ease: 'easeOut' as const,
			},
		},
	}

	return (
		<section
			ref={sectionRef}
			className="relative w-full py-24 overflow-hidden bg-white"
		>
			{/* Contenido principal */}
			<motion.div
				className="relative z-10 h-full flex flex-col justify-center items-center px-4 md:px-6"
				variants={containerVariants}
				initial="hidden"
				animate={isVisible ? 'visible' : 'hidden'}
			>
				{/* Galería de imágenes  */}
				<motion.div
					className="w-full max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 h-auto"
					variants={containerVariants}
				>
					<motion.div
						className="relative group col-span-1 cursor-pointer"
						variants={imageVariants}
						whileHover={{
							scale: 1.05,
							transition: { duration: 0.3 },
						}}
						onClick={() => setSelectedImage(0)}
					>
						<div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl">
							<Image
								src={galleryImages[0].src}
								alt={galleryImages[0].alt}
								fill
								className="object-cover transition-transform duration-500 group-hover:scale-110"
							/>
						</div>
					</motion.div>

					<motion.div
						className="relative group col-span-1 cursor-pointer"
						variants={imageVariants}
						whileHover={{
							scale: 1.05,
							transition: { duration: 0.3 },
						}}
						onClick={() => setSelectedImage(1)}
					>
						<div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl">
							<Image
								src={galleryImages[1].src}
								alt={galleryImages[1].alt}
								fill
								className="object-cover transition-transform duration-500 group-hover:scale-110"
							/>
						</div>
					</motion.div>

					<motion.div
						className="relative group col-span-2 md:col-span-1 cursor-pointer"
						variants={imageVariants}
						whileHover={{
							scale: 1.05,
							transition: { duration: 0.3 },
						}}
						onClick={() => setSelectedImage(2)}
					>
						<div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl">
							<Image
								src={galleryImages[2].src}
								alt={galleryImages[2].alt}
								fill
								className="object-cover transition-transform duration-500 group-hover:scale-110"
							/>
						</div>
					</motion.div>

					<motion.div
						className="relative group col-span-2 md:col-span-1 cursor-pointer"
						variants={imageVariants}
						whileHover={{
							scale: 1.05,
							transition: { duration: 0.3 },
						}}
						onClick={() => setSelectedImage(3)}
					>
						<div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl">
							<Image
								src={galleryImages[3].src}
								alt={galleryImages[3].alt}
								fill
								className="object-cover transition-transform duration-500 group-hover:scale-110"
							/>
						</div>
					</motion.div>
				</motion.div>
			</motion.div>

			{/* Modal para visualizar imágenes */}
			<ImageModal
				isOpen={selectedImage !== null}
				onClose={handleCloseModal}
				images={galleryImages}
				selectedIndex={selectedImage || 0}
				onPrevious={handlePrevious}
				onNext={handleNext}
			/>
		</section>
	)
}

export default Gallery
