function About() {
	return (
		<div>
			<h2 className="text-6xl mb-4">Github Finder</h2>
			<p className="mb-4 text-2xl font-light">
				A React app to search Github profiles and see profile details This
				project is part of the{" "}
				<a
					href="https://www.udemy.com/course/modern-react-front-to-back/"
					target="blank"
				>
					{""} React Front To Back
				</a>{" "}
				Udemy course by
				<strong>
					{" "}
					<a href="https://traversymedia.com" target="blank">
						Brad Traversy
					</a>
				</strong>
				.
			</p>
			<p className="text-lg text-gray-400">
				Version: <span className="text-white">1.0.0</span>
			</p>
			<p className="text-lg text-gray-400">
				Layout By: &nbsp;
				<a
					href="https://twitter.com/hassibmoddasser"
					className="text-white"
					target="blank"
				>
					Hassib Moddasser
				</a>
			</p>
		</div>
	);
}

export default About;
