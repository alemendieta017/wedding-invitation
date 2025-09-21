'use client'

import { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'motion/react'

// Componente separado para cada dígito - definido FUERA del componente padre
const AnimatedDigit = ({ value, label }: { value: number; label: string }) => {
	return (
		<div className="flex flex-col items-center gap-2">
			{/* Círculo con el dígito */}
			<div className="bg-amber-800/70 rounded-full w-12 h-12 flex items-center justify-center border-3 border-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
				<div className="relative overflow-hidden">
					<AnimatePresence mode="wait">
						<motion.div
							key={value}
							className="text-sm md:text-base font-bold font-sans text-white"
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: -20, opacity: 0 }}
							transition={{ duration: 0.3, ease: 'easeOut' }}
						>
							{value.toString().padStart(2, '0')}
						</motion.div>
					</AnimatePresence>
				</div>
			</div>
			{/* Label debajo del círculo */}
			<div className="text-xs font-sans font-medium tracking-wide text-white leading-tight text-center">
				{label}
			</div>
		</div>
	)
}

const CountdownTimer = () => {
	// Estados individuales para cada dígito
	const [days, setDays] = useState(0)
	const [hours, setHours] = useState(0)
	const [minutes, setMinutes] = useState(0)
	const [seconds, setSeconds] = useState(0)

	// Countdown timer logic
	const updateCountdown = useCallback(() => {
		const targetDate = new Date('2025-10-25T16:40:00').getTime()
		const now = new Date().getTime()
		const difference = targetDate - now

		if (difference > 0) {
			const newDays = Math.floor(difference / (1000 * 60 * 60 * 24))
			const newHours = Math.floor(
				(difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			)
			const newMinutes = Math.floor(
				(difference % (1000 * 60 * 60)) / (1000 * 60)
			)
			const newSeconds = Math.floor((difference % (1000 * 60)) / 1000)

			// Solo actualizar cada estado si el valor cambió
			if (newDays !== days) setDays(newDays)
			if (newHours !== hours) setHours(newHours)
			if (newMinutes !== minutes) setMinutes(newMinutes)
			if (newSeconds !== seconds) setSeconds(newSeconds)
		} else {
			setDays(0)
			setHours(0)
			setMinutes(0)
			setSeconds(0)
		}
	}, [days, hours, minutes, seconds])

	useEffect(() => {
		// Update immediately
		updateCountdown()

		// Update every second
		const interval = setInterval(updateCountdown, 1000)

		return () => clearInterval(interval)
	}, [updateCountdown])

	return (
		<div>
			<motion.div
				className="flex items-start justify-center gap-2 md:gap-3 mx-auto"
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
			>
				<AnimatedDigit value={days} label="DÍAS" />

				{/* Separador - alineado con el centro de los círculos */}
				<div className="flex flex-col items-center justify-center mt-8 md:mt-10">
					<motion.div
						className="w-1 h-1 bg-white rounded-full mb-1"
						animate={{ opacity: [0.4, 1, 0.4] }}
						transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
					/>
					<motion.div
						className="w-1 h-1 bg-white rounded-full"
						animate={{ opacity: [0.4, 1, 0.4] }}
						transition={{
							duration: 1,
							repeat: Infinity,
							ease: 'easeInOut',
							delay: 0.5,
						}}
					/>
				</div>

				<AnimatedDigit value={hours} label="HORAS" />

				{/* Separador - alineado con el centro de los círculos */}
				<div className="flex flex-col items-center justify-center mt-8 md:mt-10">
					<motion.div
						className="w-1 h-1 bg-white rounded-full mb-1"
						animate={{ opacity: [0.4, 1, 0.4] }}
						transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
					/>
					<motion.div
						className="w-1 h-1 bg-white rounded-full"
						animate={{ opacity: [0.4, 1, 0.4] }}
						transition={{
							duration: 1,
							repeat: Infinity,
							ease: 'easeInOut',
							delay: 0.5,
						}}
					/>
				</div>

				<AnimatedDigit value={minutes} label="MINUTOS" />

				{/* Separador - alineado con el centro de los círculos */}
				<div className="flex flex-col items-center justify-center mt-8 md:mt-10">
					<motion.div
						className="w-1 h-1 bg-white rounded-full mb-1"
						animate={{ opacity: [0.4, 1, 0.4] }}
						transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
					/>
					<motion.div
						className="w-1 h-1 bg-white rounded-full"
						animate={{ opacity: [0.4, 1, 0.4] }}
						transition={{
							duration: 1,
							repeat: Infinity,
							ease: 'easeInOut',
							delay: 0.5,
						}}
					/>
				</div>

				<AnimatedDigit value={seconds} label="SEGUNDOS" />
			</motion.div>
		</div>
	)
}

export default CountdownTimer
