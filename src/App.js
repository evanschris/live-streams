import React from 'react';
import data from './data';
import './App.css';

import PageContainer from './components/PageContainer';
import Stream from './components/Stream';
import SingleDay from './components/SingleDay';

function App() {
	const currentTime = new Date();

	return (
		<PageContainer>
			<p>{currentTime.getHours()}:{currentTime.getMinutes()}</p>
			<p>todays time stamp{currentTime.getTime()}</p>
			{data.map((day, key) =>
				<>
				<p>the time stamp{new Date(day.date).getTime()}</p>
				{new Date(day.date).getTime() >= currentTime.getTime() &&
					<SingleDay date={day.date} key={key}>
						{day.streams.map((stream, key) =>
							<Stream key={key} stream={stream} />
						)}
					</SingleDay>
				}
				</>
			)}
		</PageContainer>
	);
}

export default App;
