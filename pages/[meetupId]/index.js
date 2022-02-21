import React from "react";
import MeetupDetail from "../../components/meetups/meetupDetail";

const meetupDetails = (props) => {
	return (
		<>
			<MeetupDetail
				image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHfkfESvylFJ1EHsA27pZedw4qJRf7anptwA&usqp=CAU"
				address="The Netherlanda"
				title="The First Meetup"
				description="Meetup in The Netherlands"
			/>
			{/* <MeetupDetail
				image={props.image}
				address={props.address}
				title={props.title}
				description={props.description}
			/> */}
		</>
	);
};
export async function getStaticPaths() {
	return {
		fallback: false,
		paths: [
			{
				params: {
					meetupId: "m1",
				},
			},
			{
				params: {
					meetupId: "m2",
				},
			},
			{
				params: {
					meetupId: "m3",
				},
			},
		],
	};
}

export async function getStaticProps(context) {
	const meetupId = context.params.meetupId;
	console.log(meetupId);

	//fetch the single meetup data
	return {
		props: {
			meetupData: {
				id: meetupId,
				image:
					"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHfkfESvylFJ1EHsA27pZedw4qJRf7anptwA&usqp=CAU",
				address: "The Netherlanda",
				title: "The First Meetup",
				description: "Meetup in The Netherlands",
			},
		},
	};
}

export default meetupDetails;
