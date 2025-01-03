import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const locationSlice = createSlice({
  name: "location",
  initialState: {
    lat: localStorage.getItem("lat") || "22.51800",
    lng: localStorage.getItem("lng") || "88.38320",
    addressStr: localStorage.getItem("address") || "Kolkata, West Bengal",
  },
  reducers: {
    addCoords: (state, action) => {
      state.lat = action.payload.latitude;
      state.lng = action.payload.longitude;
    },
    addAddress: (state, acttion) => {
      state.addressStr = acttion.payload;
    },
  },
});

export const { addCoords, addAddress } = locationSlice.actions;
export default locationSlice.reducer;
