import React from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
	{
		id: "m1",
		title: "First Meetup",
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHfkfESvylFJ1EHsA27pZedw4qJRf7anptwA&usqp=CAU",
		address: "The Netherlands",
		description: "Meetup in The Netherlands",
	},
	{
		id: "m2",
		title: "Second Meetup",
		image:
			"https://media.istockphoto.com/photos/view-on-the-old-university-city-of-coimbra-and-the-medieval-capital-picture-id1205728810?k=20&m=1205728810&s=612x612&w=0&h=15-xXKW_hIzevd0akldtd3HQoL6rwIyX31N6PgD-b3g=",
		address: "Portugal",
		description: "Meetup in Portugal",
	},
	{
		id: "m3",
		title: "Third Meetup",
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9tqxnxCqVmCR12ASo1sAau9X5kzII59GRDA&usqp=CAU",
		address: "Italy",
		description: "Meetup in Italy",
	},
];

const HomePage = (props) => {
	console.log(props);
	return (
		<>
			{/* <h1>HOMEPAGE</h1> */}
			<MeetupList meetups={props.meetups} />
		</>
	);
};

export async function getStaticProps() {
	//fetch Data from API
	return {
		props: {
			meetups: DUMMY_MEETUPS,
		},
		revalidate: 1,
	};
}

// export async function getServerSideProps(context) {
// 	const req = context.req;
// 	const res = context.res;

// 	//fetch Data from API
// 	return {
// 		props: {
// 			meetups: DUMMY_MEETUPS,
// 		},
// 	};
// }
export default HomePage;
