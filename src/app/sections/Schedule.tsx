import Image from 'next/image'
import React from 'react'

const Schedule = () => {
	return (
		<section className="relative py-20 min-h-screen w-full px-4 overflow-hidden bg-white flex flex-col justify-center">
			<Image
				src="/232c6320146b3712f51059d8621157f5.png"
				alt="Rosa decorativa"
				width={658}
				height={800}
				className="object-fit w-48 md:h-64 object-bottom -rotate-90 absolute -top-11 left-0"
			/>

			<div className="z-10 text-center md:absolute md:top-22 md:left-20 hover:pointer-none hover:scale-105 transition-all duration-300">
				<h2 className="text-xl md:text-3xl font-serif text-amber-800 tracking-wider">
					EL GRAN DÍA
				</h2>
			</div>

			<Image
				src="/schedule_desktop.png"
				alt="Cronograma del día"
				width={1080}
				height={1920}
				className="z-10 hidden md:block mx-auto object-contain max-w-2xl w-full hover:scale-105 transition-all duration-300"
			/>
			<Image
				src="/schedule_mobile.png"
				alt="Cronograma del día"
				width={1080}
				height={1920}
				className="z-10 mx-auto object-contain max-w-xl w-full md:hidden"
			/>

			<Image
				src="/232c6320146b3712f51059d8621157f5.png"
				alt="Rosa decorativa"
				width={658}
				height={800}
				className="object-fit w-48 md:h-64 object-bottom rotate-90 absolute -bottom-11 right-0"
			/>
		</section>
	)
}

export default Schedule
