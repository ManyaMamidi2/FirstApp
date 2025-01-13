export default function Navbar() {
	return (
		<div className='fixed top-0 left-0 w-full bg-white shadow-md z-50'>
			<div className='flex justify-between items-center px-6 py-4'>
				<div className='text-2xl font-bold text-gray-700'>
					Apple Revenue Info
				</div>
				<nav className='flex space-x-4'>
					<button
						onClick={() =>
							(window.location.href =
								"https://www.linkedin.com/in/manya-mamidi-565ba7290/")
						}
						className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition'
					>
						Linkedin
					</button>
					<button
						onClick={() =>
							(window.location.href =
								"https://site.financialmodelingprep.com/developer/docs#income-statements-financial-statements")
						}
						className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition'
					>
						API Info
					</button>
				</nav>
			</div>
		</div>
	);
}
