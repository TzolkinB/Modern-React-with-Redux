import React from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends React.Component {
	renderWeather(cityData) {
		const name = cityData.city.name;
		const temps = cityData.list.map(weather => weather.main.temp);
		const humidity = cityData.list.map(weather => weather.main.humidity);
		const pressure = cityData.list.map(weather => weather.main.humidity);

		return (
			<tr key={name}>
				<td>{name}</td>
				<td>	
					<Chart data={temps} color="orange" />
				</td>
			</tr>
		)
	}

	render() {
		return(
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature</th>
						<th>Pressure</th>
						<th>Humidity</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		)
	}
}

function mapStateToProps(state) {
	return {weather: state.weather};
}

export default connect(mapStateToProps)(WeatherList);