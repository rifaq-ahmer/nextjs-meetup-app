import React from "react";
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";
import MeetupDetail from "../../components/meetups/meetupDetail";

const meetupDetails = (props) => {
	return (
		<>
			<Head>
				<title>{props.meetupData.title}</title>
				<meta name="description" content={props.meetupData.description}></meta>
			</Head>
			<MeetupDetail
				image={props.meetupData.image}
				address={props.meetupData.address}
				title={props.meetupData.title}
				description={props.meetupData.description}
			/>
		</>
	);
};
export async function getStaticPaths() {
	const client = await MongoClient.connect(
		"mongodb+srv://rifaq:adminpassword@cluster0.zaqzu.mongodb.net/meetups?retryWrites=true&w=majority"
	);
	const db = client.db();
	const meetupCollections = db.collection("meetups");
	const meetups = await meetupCollections.find({}, { _id: 1 }).toArray();
	client.close();
	return {
		fallback: false,
		paths: meetups.map((meetup) => ({
			params: { meetupId: meetup._id.toString() },
		})),
	};
}

export async function getStaticProps(context) {
	const meetupId = context.params.meetupId;
	const client = await MongoClient.connect(
		"mongodb+srv://rifaq:adminpassword@cluster0.zaqzu.mongodb.net/meetups?retryWrites=true&w=majority"
	);
	const db = client.db();
	const meetupCollections = db.collection("meetups");
	const selectedMeetup = await meetupCollections.findOne({
		_id: ObjectId(meetupId),
	});
	client.close();

	//fetch the single meetup data
	return {
		props: {
			meetupData: {
				id: selectedMeetup._id.toString(),
				title: selectedMeetup.title,
				image: selectedMeetup.image,
				description: selectedMeetup.description,
				address: selectedMeetup.address,
			},
		},
	};
}

export default meetupDetails;
