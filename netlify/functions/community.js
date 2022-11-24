import {
    InteractionType,
    InteractionResponseType,
    verifyKey
  } from 'discord-interactions';
import { initializeApp } from "firebase/app";

import { getFirestore , doc, getDoc, setDoc} from "firebase/firestore";

import fetch from 'node-fetch';

const firebaseConfig = {
    apiKey: "AIzaSyDf9ZiTBWf-sWY007WsKktMPewcrs07CWw",
    authDomain: "championslounge-f0f36.firebaseapp.com",
    projectId: "championslounge-f0f36",
    storageBucket: "championslounge-f0f36.appspot.com",
    messagingSenderId: "163156624093",
    appId: "1:163156624093:web:dfe860c8bb38a62b075134"
};


function VerifyDiscordRequest(clientKey) {
  return function (event) {
    const signature = event.headers['x-signature-ed25519'];
    const timestamp = event.headers['x-signature-timestamp'];
    const isValidRequest = verifyKey(event.body, signature, timestamp, clientKey);
    return isValidRequest;
  };
}

const verifier = VerifyDiscordRequest(process.env.PUBLIC_KEY_COMMUNITY);

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

async function DiscordRequest(endpoint, options) {
    // append endpoint to root API URL
    const url = 'https://discord.com/api/v9/' + endpoint;
    // Stringify payloads
    if (options.body) options.body = JSON.stringify(options.body);
    // Use node-fetch to make requests
    const res = await fetch(url, {
        headers: {
        Authorization: `Bot ${process.env.DISCORD_TOKEN_COMMUNITY}`,
        'Content-Type': 'application/json; charset=UTF-8',
        },
        ...options
    });
    // throw API errors
    if (!res.ok) {
        const data = await res.json();
        console.log(res);
        throw new Error(JSON.stringify(data));
    }
    // return original response
    return res;
}

function respond(message, statusCode = 200, interactionType = InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE) {
    return {
        statusCode: statusCode,
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
            type: interactionType,
            data: {
                content: message,
            }
        }),
      };
}

function respondNoMention(message) {
    return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
            type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: {
                content: message,
                allowed_mentions: {
                    parse: []
                }
            }
        }),
      };
}


exports.handler = async function(event, context) {
    if (!verifier(event)) {
        return {
            statusCode: 401
        }
    }
    // console.log(event)
    const { type, guild_id, data, token } = JSON.parse(event.body);
    if (type === InteractionType.PING) {
        return {
            statusCode: 200,
            body: JSON.stringify({ type: InteractionResponseType.PONG }),
          };
    }
    if (type === InteractionType.APPLICATION_COMMAND) {;
        const {name, resolved, options} = data;

    }
    return respond("we should not have gotten here... this command is broken contact owner");
}