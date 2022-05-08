import { createReducer } from "@reduxjs/toolkit";
import {
  fetchAnalyzeSettingsPWStart,
  fetchAnalyzeSettingsPWSuccess,
  fetchAnalyzeSettingsPWError
}
  from "../actions/actions";

const initialState = {
  loading: false,
  chartSettings: {}
}

export default createReducer(initialState, {
  [fetchAnalyzeSettingsPWStart]: state => {
    state.loading = true
  },
  [fetchAnalyzeSettingsPWSuccess]: (state, action) => {
    state.chartSettings = action.payload
    state.loading = false
  },
  [fetchAnalyzeSettingsPWError]: state => {
    state.loading = false
  }
})