"use client";

import Marquee from "react-fast-marquee";
import logo from "../assets/OC-logo.png";
import "./Partners.css";

export default function Partners() {
	return (
		<div className="partners-container">
			<h2 className="partners-title">Наши партнёры</h2>
			<p className="partners-text">
				Мы гордимся сотрудничеством с организациями, которые разделяют наши
				ценности и помогают делать путешествия ещё интереснее.
			</p>

			<Marquee direction="left" speed={80} gradient={false}>
				<div className="partner-logo-wrapper">
					<a href="https://ocnederland.nl/" target="_blank" rel="noreferrer">
						<img alt="partner logo" src={logo} className="partner-logo" />
					</a>
				</div>
			</Marquee>
		</div>
	);
}
