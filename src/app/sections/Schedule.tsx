import Image from 'next/image'
import React from 'react'

const Schedule = () => {
	return (
		<section className="relative py-20 px-4 overflow-hidden bg-white flex flex-col justify-center">
			<Image
				src="/232c6320146b3712f51059d8621157f5.png"
				alt="Rosa decorativa"
				width={658}
				height={800}
				className="object-fit w-64 object-bottom -rotate-90 absolute -top-11 left-0"
			/>

			<div className="text-center mb-16 md:absolute md:top-22 md:left-20">
				<h2 className="text-4xl md:text-5xl font-serif text-amber-800 font-light tracking-wider">
					EL GRAN DÍA
				</h2>
			</div>

			<div>
				<Image
					src="/cronograma.png"
					alt="Cronograma del día"
					width={1080}
					height={1920}
					className="mx-auto"
				/>
			</div>
		</section>
	)
}

export default Schedule
