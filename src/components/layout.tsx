import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout({children}) {
	return (
		<div className="flex flex-col h-screen"	>
			<Navbar/>
			<main className="flex-grow flex-col">{children}</main>
			<Footer/>
		</div>
	);
}
