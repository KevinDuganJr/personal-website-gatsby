import { initializeApp } from "firebase/app";
import { getFirestore , doc, setDoc, collection, addDoc } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyDf9ZiTBWf-sWY007WsKktMPewcrs07CWw",
    authDomain: "championslounge-f0f36.firebaseapp.com",
    projectId: "championslounge-f0f36",
    storageBucket: "championslounge-f0f36.appspot.com",
    messagingSenderId: "163156624093",
    appId: "1:163156624093:web:dfe860c8bb38a62b075134"
};
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

exports.handler = async function(event, context) {
    console.log(event)
    const path = event.path
    const paths = path.split("/");
    console.log(paths)
    const apiType = paths[6]
    const username = paths[3]
    const league = paths[5]
    if (apiType == "leagueteams") {
        // const { leagueTeamInfoList: teams } = JSON.parse(event.body)
        try {
            
            await setDoc(doc(db, "leagues", username), {
                username: username,
                league: league,
                // teams: teams
            });

            console.log(`doc written with id`)
            return {
                statusCode: 200
            }
        } catch (e) {
            console.error('error adding document', e)
            return {
                statusCode: 200
            }
        }
    }
    if (apiType == "standings") {
        const {teamStandingInfoList: standings} = JSON.parse(event.body)
        try {
            await setDoc(doc(db, "leagues", username), {
                standings: standings
            }, { merge: true });

            console.log(`doc written with id ${docRef.id}`)
            return {
                statusCode: 200
            }
        } catch (e) {
            console.error('error adding document')
            return {
                statusCode: 200
            }
        }
    }
    return {
        statusCode: 200
    }
}