import React from 'react';
import { IWeatherForecast } from '../../../store/weather-forecasts';

type ForecastTableProps = {
  readonly forecasts: IWeatherForecast[];
};

const ForecastTable = React.memo<ForecastTableProps>(({ forecasts }) => (
  <table className='table is-fullwidth'>
    <thead>
      <tr>
        <th>Date</th>
        <th>Temp. (C)</th>
        <th>Temp. (F)</th>
        <th>Summary</th>
      </tr>
    </thead>
    <tbody>
      {forecasts.map(({ id, summary, temperatureC, temperatureF, dateFormatted }: IWeatherForecast) => (
        <tr key={id}>
          <td>{dateFormatted}</td>
          <td>{temperatureC}</td>
          <td>{temperatureF}</td>
          <td>{summary}</td>
        </tr>
      ))}
    </tbody>
  </table>
));

ForecastTable.displayName = 'ForecastTable';

export default ForecastTable;
