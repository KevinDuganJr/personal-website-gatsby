import {
    InteractionType,
    InteractionResponseType
  } from 'discord-interactions';

exports.handler = async function(event, context) {
    const { type, id, data } = event.body;
    if (type === InteractionType.PING) {
        return {
            statusCode: 200,
            body: JSON.stringify({ type: InteractionResponseType.PONG }),
          };
    }

}