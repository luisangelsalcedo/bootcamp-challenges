import { createSlice, current } from "@reduxjs/toolkit";

export const candidatosSlice = createSlice({
  name: "candidatos",
  initialState: [
    { nombre: "Hugo", votos: 0 },
    { nombre: "Paco", votos: 0 },
    { nombre: "Luis", votos: 0 },
  ],
  reducers: {
    votar: (state, payload) => {
      console.log(current(state), payload);
    },
  },
});

export const { votar } = candidatosSlice.actions;
export default candidatosSlice.reducer;
