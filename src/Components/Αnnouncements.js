import React, { useState } from 'react';
import { Announcement, Description, Batting } from './Announcement';
import { Layout, Avatar, Menu, Icon, Breadcrumb, Button, Carousel } from 'antd';
import AnnouncementDetails from './AnnouncementDetails';


export default function Announcements() {
    const data = [{
        date: '1-1-2020',
        title: "Κατάληψη",
        description: " Bounty jolly boat scuppers deadlights Sink me Yellow Jack gibbet execution dock jib coxswain." +
            "Parley lateen sail aft Letter of Marque hearties piracy interloper grapple tackle Spanish Main. " +
            "Skysail parley come about hempen halter Nelsons folly chase Buccaneer landlubber or just lubber ho blow the man down. " +
            "Clap of thunder spike take a caulk cutlass Sink me run a rig yard jack to go on account blow the man down.Trysail main" +
            "sheet Shiver me timbers lugsail hail- shot lugger salmagundi loot take a caulk line."
    },
    {
        date: '12-6-2020',
        title: "Εκδρομή",
        description: " Bounty jolly boat scuppers deadlights Sink me Yellow Jack gibbet execution dock jib coxswain." +
            "Parley lateen sail aft Letter of Marque hearties piracy interloper grapple tackle Spanish Main. " +
            "Skysail parley come about hempen halter Nelsons folly chase Buccaneer landlubber or just lubber ho blow the man down. " +
            "Clap of thunder spike take a caulk cutlass Sink me run a rig yard jack to go on account blow the man down.Trysail main" +
            "sheet Shiver me timbers lugsail hail- shot lugger salmagundi loot take a caulk line."
    }];
    const [selectedPlayer, setSelectedPlayer] = useState('');
    const [visible, setVisible] = useState(false);
   

    const ViewProfileButton = ({ name }) => {
        return <Button type='dashed' style={{ float: 'right' }} onClick={() => onSelect(name)}> View Full Profile >> </Button>
    }

    const onSelect = name => {
        setSelectedPlayer(name);
        setVisible(true);
    }
    const onClose = () => setVisible(false);


    return (
        <>
            {data.map((value) => {
                return (<>
                    <Announcement title={value.title} date={value.date} >
                        <Description description={value.description} />
                        <Button onClick={onSelect}>Read</Button>
                    </Announcement>
                    <AnnouncementDetails player='Virat Kohli' visible={visible} onClose={onClose} />
                    
                </>)
            })}
        </>
    );
} 