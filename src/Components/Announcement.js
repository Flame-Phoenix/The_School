import React, { Fragment } from 'react';
import { Card, Avatar,Typography } from 'antd';
import Meta from 'antd/lib/card/Meta';


const { Paragraph, Title } = Typography;

export const Announcement = ({ title, date, avatarSrc, children }) =>
	<Card bordered style={{ width: 300, float: 'left', margin: 10 }}>
		<Title level={3}>{title}</Title>
		<hr></hr>
		created: {date}
		<br></br>
		{children}
	</Card>
export const Description = ({ description, children }) =>
	<Card.Grid style={{ width: '100%' }}>
		<Paragraph ellipsis={{
            rows: 6,
          }}>{description}</Paragraph>
		{children}
	</Card.Grid>

export const Batting = ({ runs, score }) =>
	<Fragment>
		Runs : {runs}
		<br></br>
		Top score : {score}
	</Fragment>
