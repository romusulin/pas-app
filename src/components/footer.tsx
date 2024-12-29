export default function Footer() {
	return (
		<footer className="bg-gradient-to-r from-blue-800 to-cyan-600 text-white text-center p-4 h-22">
			<p>&copy; 2024 PikaPika. All rights reserved.</p>
			<p className="mt-2">Made with ❤️ for paragliding enthusiasts.</p>
			<nav className="mt-4 flex justify-center gap-4 hidden">
				<a href="#" className="hover:text-cyan-200">Privacy Policy</a>
				<a href="#" className="hover:text-cyan-200">Terms of Service</a>
				<a href="#" className="hover:text-cyan-200">Support</a>
			</nav>
		</footer>
	)
}
