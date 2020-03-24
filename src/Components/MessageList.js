import React, { useState } from 'react';
import './MessageList.css';
import { Drawer, Button } from 'antd';
import Conversation from './Conversation';

export default function Messanger() {
    const [visible, setVisible] = useState(false)

    const showDrawer = () => {
        setVisible(!visible)
    };

    const onClose = () => {
        setVisible(!visible)
    };


    return (
        <div className="conversation-list-item" onClick={showDrawer}>
            <img className="conversation-photo" alt="photo" />
            <div className="conversation-info">
                <h1 className="conversation-title">Name</h1>
                <p className="conversation-snippet"> Text </p>
            </div>
            <Drawer
            //  need to fix this so it open small windows not just the conversation on left
                placement={'left'}
                width={640}
                closable={true}
                onClose={onClose}
                visible={visible}
            >
                <Conversation/>
          </Drawer>
        </div>
    );
}