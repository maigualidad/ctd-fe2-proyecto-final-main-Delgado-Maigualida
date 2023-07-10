import React from "react";
import { render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import citaSlice from "../src/features/quote/citaSlice";

export function renderRedux(component: React.ReactNode) {
  const store = configureStore({
     reducer: {
        cita: citaSlice,
     },
     preloadedState: {}
  });

  return {
     ...render(<Provider store={store}>{component}</Provider>), store
  }
}
