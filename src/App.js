import React, { useState } from 'react';
import data from './data';
import './App.css';

import Header from './components/Header';
import StickyToolbar from './components/StickyToolbar';
import PageContainer from './components/PageContainer';
import Stream from './components/Stream';
import SingleDay from './components/SingleDay';

function App() {
	const currentTime = new Date();
	const [dateInView, setdateInView] = useState(currentTime);
	const cardHeight = 234;
	return (
		<>
		<Header />
		<StickyToolbar dateInView={dateInView} currentTime={currentTime} />
		<PageContainer>
			{data.map((day, key) =>
				<>
				{new Date(day.date).getTime() >= new Date(new Date().setDate(new Date().getDate()-1)) &&
					<SingleDay date={day.date} key={key} numberOfStreams={day.streams.length} cardHeight={cardHeight}>
						{day.streams.map((stream, key) =>
							<Stream key={key} stream={stream} date={day.date} />
						)}
					</SingleDay>
				}
				</>
			)}
		</PageContainer>
		</>
	);
}

export default App;
