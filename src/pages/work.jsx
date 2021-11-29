import React, { useEffect, useState } from "react";
import { Projects } from "./projects";
import { useParams } from "react-router-dom";
import "./work.css";

function Work() {
	const { projectName } = useParams();
	const [item, setItem] = useState({
		name: "",
		image: "",
		source: ""
	});

	useEffect(() => {
		console.log(Projects);
		console.log(projectName);
		console.log(Projects[projectName]);
		setItem(Projects[projectName]);
		console.log(item);
		// eslint-disable-next-line
	}, []);

	return (
		<div className="work">
			<h1>{item.name}</h1>
			<img className="mainimg" alt={item["name"]} src={item.image} />
			<div className="main">
				<section className="description">
					<h4>Information</h4>
				</section>
				<section className="info">
					<h4>Source</h4>
					<a href={item.source}>{item.source}</a>
				</section>
			</div>
		</div>
	);
}
export default Work;
