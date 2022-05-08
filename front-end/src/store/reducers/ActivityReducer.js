import { createReducer } from "@reduxjs/toolkit";
import {
  fetchAnalyzeSettingsAnStart,
  fetchAnalyzeSettingsAnSuccess,
  fetchAnalyzeSettingsAnError
}
  from "../actions/actions";

const initialState = {
  loading: false,
  chartSettings: {}
}

export default createReducer(initialState, {
  [fetchAnalyzeSettingsAnStart]: state => {
    state.loading = true
  },
  [fetchAnalyzeSettingsAnSuccess]: (state, action) => {
    state.chartSettings = action.payload
    state.loading = false
  },
  [fetchAnalyzeSettingsAnError]: state => {
    state.loading = false
  }
})