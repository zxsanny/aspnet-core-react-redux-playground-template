﻿import { actionCreators } from './actions';
import { FunctionReturnTypes, ReduxAction } from '../';
import { WeatherActionType, IWeatherForecastsState } from './types';

const initialState: IWeatherForecastsState = {
  forecasts: [],
  isLoading: false
};

export const reducer = (
  state: IWeatherForecastsState = initialState,
  incomingAction: FunctionReturnTypes<typeof actionCreators>
): IWeatherForecastsState => {
  const action = incomingAction as ReduxAction;

  switch (action.type) {
    case WeatherActionType.REQUEST:
      const { startDateIndex } = action;
      return {
        ...state,
        startDateIndex,
        isLoading: true
      };
    case WeatherActionType.RECEIVE:
      // Only accept the incoming data if it matches the most recent request. This ensures we correctly handle out-of-order responses.
      if (action.startDateIndex === state.startDateIndex) {
        const { forecasts, startDateIndex } = action;
        return {
          forecasts,
          startDateIndex,
          isLoading: false
        };
      }

      return state;
    default:
      return state;
  }
};
