import React from "react";
import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";

const HomePage = (props) => {
	return (
		<>
			<MeetupList meetups={props.meetups} />
		</>
	);
};

export async function getStaticProps() {
	const client = await MongoClient.connect(
		"mongodb+srv://rifaq:adminpassword@cluster0.zaqzu.mongodb.net/meetups?retryWrites=true&w=majority"
	);
	const db = client.db();
	const meetupCollections = db.collection("meetups");
	const meetups = await meetupCollections.find().toArray();
	client.close();

	return {
		props: {
			meetups: meetups.map((meetup) => ({
				title: meetup.title,
				image: meetup.image,
				address: meetup.address,
				description: meetup.description,
				id: meetup._id.toString(),
			})),
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
