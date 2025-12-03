import React, { useEffect, useRef, useState } from "react";
import { FaRegCircle } from "react-icons/fa";

const Marquee = () => {
	const marqueeRef = useRef(null);
	const [highlightedWord, setHighlightedWord] = useState(null);

	useEffect(() => {
		const marquee = marqueeRef.current;
		let animationFrameId;

		const startMarquee = () => {
			if (marquee) {
				const scrollAmount = 2.5;
				marquee.scrollLeft += scrollAmount;
				if (marquee.scrollLeft >= marquee.scrollWidth / 2) {
					marquee.scrollLeft = 0;
				}
				animationFrameId = requestAnimationFrame(startMarquee);
			}
		};

		startMarquee();

		return () => {
			cancelAnimationFrame(animationFrameId);
		};
	}, []);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setHighlightedWord(entry.target.dataset.word);
					}
				});
			},
			{ root: marqueeRef.current, threshold: 0 }
		);

		const words = marqueeRef.current.querySelectorAll(".marquee-word");
		words.forEach((word) => observer.observe(word));

		return () => {
			words.forEach((word) => observer.unobserve(word));
		};
	}, []);

	const words = [
		"SHOWER ENCLOSURE",
		<FaRegCircle key="dot01" size={50} className="mt-6 py-2" />,
		"LIGHTNING SOLUTION",
		<FaRegCircle key="dot02" size={50} className="mt-6 py-2" />,
		"OFFICE FURNITURE",
		<FaRegCircle key="dot03" size={50} className="mt-6 py-2" />,
		"INTERIOR WORKS",
		<FaRegCircle key="dot04" size={50} className="mt-6 py-2" />,
		"ASSEMBLY WORKS",
		<FaRegCircle key="dot05" size={50} className="mt-6 py-2" />,
	];

	return (
		<div
			ref={marqueeRef}
			className="sectionGap relative w-full h-28 flex justify-center items-center overflow-hidden whitespace-nowrap border border-gray-200 bg-gray-50"
		>
			<div
				className="flex space-x-10 animate-marquee"
				style={{ width: "100%" }}
			>
				{Array.from({ length: 100 }).map((_, i) => (
					<React.Fragment key={i}>
						{words.map((word, index) => (
							<span
								key={`${word}-${index}`}
								data-word={word}
								className={`marquee-word text-8xl font-Barlow font-bold ${
									highlightedWord === word
										? "text-orange-500 fill-current transition-all"
										: "text-slate-300"
								}`}
							>
								{word}
							</span>
						))}
					</React.Fragment>
				))}
			</div>
		</div>
	);
};

export default Marquee;
