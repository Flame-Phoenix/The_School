import React from 'react';
import './Conversation';
import moment from 'moment';


export default function Conversation(props) {

    const {
        data,
        isMine,
        startsSequence,
        endsSequence,
        showTimestamp
    } = props;

   // const friendlyTimestamp = moment(data.timestamp).format('LLLL');

    return (
        <div className={[
            'message',
            `${isMine ? 'mine' : ''}`,
            `${startsSequence ? 'start' : ''}`,
            `${endsSequence ? 'end' : ''}`
        ].join(' ')}>
            {
                showTimestamp &&
                <div className="timestamp">
                    {/* {friendlyTimestamp} */}
                </div>
            }
            <div className="bubble-container">
                <div className="bubble" >
                    {/* {data.message} */}
                </div>
            </div>
        </div>
    );
}
// title={friendlyTimestamp}