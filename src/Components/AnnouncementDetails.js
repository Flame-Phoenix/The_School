import React, { useEffect, useState } from 'react';
import { Drawer, Skeleton } from 'antd';
import useFetchData from './service';


const stylep = {
    borderBottom : '1px solid black ' 
}

const AnnouncementDetails = ({ player, visible, onClose }) => {

    const [details, setDetails] = useState({});
    const [isLoading, output] = useFetchData('./' + player.replace(' ', '_') + '.json');
    const { name, team, age, born, batting, bowling } = output;

    return (
        // here change the announcementDetails button in home page
        <Drawer
            destroyOnClose
            placement={'left'}
            title={player}
            visible={visible}
            width={640}
            onClose={onClose}
        >
            <Skeleton active loading={isLoading} paragraph={{ rows: 5 }} >
                <div style={{ padding: 10 }}>
                    <p>Team - {team}</p>
                    <p>name - {name}</p>
                    <p>age - {age}</p>
                    <p>born - {born}</p>
                    <p>batting - {batting}</p>
                    <p>bowling - {bowling}</p>

                </div>
            </Skeleton>
        </Drawer>
    )
}

export default AnnouncementDetails;