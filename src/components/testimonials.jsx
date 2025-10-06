import React from "react";
import "../cssfiles/GlobalPresencePage.css";

const testimonialsData = [
	{
		name: "John D.",
		location: "California, USA",
		text: "Driving my Tesla Model 3 has been a game changer. The acceleration is incredible and I love the autopilot feature!",
		image: "https://randomuser.me/api/portraits/men/32.jpg",
	},
	{
		name: "Priya S.",
		location: "Bangalore, India",
		text: "Tesla's electric cars are not just eco-friendly, but also super stylish. The charging network is expanding fast!",
		image: "https://randomuser.me/api/portraits/women/44.jpg",
	},
	{
		name: "Liam W.",
		location: "London, UK",
		text: "The Model S is the smoothest ride I've ever experienced. Zero emissions and zero compromises!",
		image: "https://randomuser.me/api/portraits/men/65.jpg",
	},
	{
		name: "Chen L.",
		location: "Shanghai, China",
		text: "I love how quiet and powerful my Tesla is. The technology inside is years ahead of any other car!",
		image: "https://randomuser.me/api/portraits/men/83.jpg",
	},
];

const Testimonials = () => {
	return (
		<div className="testimonials-section">
			<h2>What Tesla Owners Say</h2>
			<div className="testimonials-list">
				{testimonialsData.map((testimonial, idx) => (
					<div className="testimonial-card" key={idx}>
						<img src={testimonial.image} alt={testimonial.name} className="testimonial-img" />
						<p className="testimonial-text">"{testimonial.text}"</p>
						<div className="testimonial-author">
							<strong>{testimonial.name}</strong>
							<span> - {testimonial.location}</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Testimonials;
