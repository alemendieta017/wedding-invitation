'use client'

import { useState, useEffect, useRef } from 'react'

interface MusicPlayerProps {
	youtubeVideoId: string
	title?: string
}

export default function MusicPlayer({
	youtubeVideoId,
	title = 'Nuestra Música',
}: MusicPlayerProps) {
	const [isPlaying, setIsPlaying] = useState(false)
	const [isLoaded, setIsLoaded] = useState(false)
	const youtubePlayerRef = useRef<YouTubePlayer | null>(null)

	// Cargar YouTube API
	useEffect(() => {
		const loadYouTubeAPI = () => {
			if (window.YT && window.YT.Player) {
				initializeYouTubePlayer()
			} else {
				const script = document.createElement('script')
				script.src = 'https://www.youtube.com/iframe_api'
				script.async = true
				document.head.appendChild(script)

				window.onYouTubeIframeAPIReady = initializeYouTubePlayer
			}
		}

		const initializeYouTubePlayer = () => {
			if (youtubePlayerRef.current) return

			youtubePlayerRef.current = new window.YT.Player('youtube-player', {
				height: '0',
				width: '0',
				videoId: youtubeVideoId,
				playerVars: {
					autoplay: 0,
					controls: 0,
					disablekb: 1,
					enablejsapi: 1,
					fs: 0,
					iv_load_policy: 3,
					modestbranding: 1,
					playsinline: 1,
					rel: 0,
					showinfo: 0,
				},
				events: {
					onReady: () => setIsLoaded(true),
					onStateChange: (event: { data: number }) => {
						if (event.data === window.YT.PlayerState.PLAYING) {
							setIsPlaying(true)
						} else if (event.data === window.YT.PlayerState.PAUSED) {
							setIsPlaying(false)
						}
					},
				},
			})
		}

		loadYouTubeAPI()
	}, [youtubeVideoId])

	const togglePlayPause = () => {
		if (isPlaying) {
			youtubePlayerRef.current?.pauseVideo()
		} else {
			youtubePlayerRef.current?.playVideo()
		}
	}

	return (
		<>
			{/* YouTube Player (oculto) */}
			<div id="youtube-player" style={{ display: 'none' }} />

			{/* Widget Flotante */}
			<div className="fixed top-6 right-6 z-50">
				{/* <div className="bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 p-1 flex items-center gap-3"> */}
					{/* Controles */}
					<div className="flex items-center">
						{/* Botón Play/Pause */}
						<button
							onClick={togglePlayPause}
							disabled={!isLoaded}
							className="w-12 h-12 border-4 border-white bg-amber-800/80 backdrop-blur hover:bg-amber-900 disabled:bg-gray-300 rounded-full flex items-center justify-center text-white transition-colors"
						>
							{isPlaying ? (
								<svg
									className="w-5 h-5"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
								</svg>
							) : (
								<svg
									className="w-5 h-5 ml-0.5"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M8 5v14l11-7z" />
								</svg>
							)}
						</button>
					</div>
				{/* </div> */}
			</div>
		</>
	)
}

// Declarar tipos para YouTube API
interface YouTubePlayer {
	playVideo(): void
	pauseVideo(): void
	mute(): void
	unMute(): void
}

interface YouTubePlayerConfig {
	height: string
	width: string
	videoId: string
	playerVars: {
		autoplay: number
		controls: number
		disablekb: number
		enablejsapi: number
		fs: number
		iv_load_policy: number
		modestbranding: number
		playsinline: number
		rel: number
		showinfo: number
	}
	events: {
		onReady: () => void
		onStateChange: (event: { data: number }) => void
	}
}

declare global {
	interface Window {
		YT: {
			Player: new (
				elementId: string,
				config: YouTubePlayerConfig
			) => YouTubePlayer
			PlayerState: {
				PLAYING: number
				PAUSED: number
			}
		}
		onYouTubeIframeAPIReady: () => void
	}
}
