import Header from './sections/Header'
import Logo from './sections/Logo'
import Gallery from './sections/Gallery'
import Invitation from './sections/Invitation'
import DressCode from './sections/DressCode'
import Location from './sections/Location'
import Honeymoon from './sections/Honeymoon'
import Schedule from './sections/Schedule'
import Footer from './sections/Footer'
import ChurchLocation from './sections/ChurchLocation'

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col">
			<Header />
			<Logo />
			<Invitation />
			<DressCode />
			<ChurchLocation />
			<Schedule />
			<Location />
			<Honeymoon />
			<Gallery />
			<Footer />
		</main>
	)
}
