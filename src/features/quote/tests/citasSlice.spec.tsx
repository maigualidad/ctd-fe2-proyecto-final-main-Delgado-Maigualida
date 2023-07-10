import citaSlice, { limpiar } from '../citaSlice';
import { ESTADO_FETCH } from '../constants';

const dummyData = 'dummyData';

describe('Reducer', () => {
   const initialState = { data: null, estado: ESTADO_FETCH.INACTIVO };

   test('should return the initial state', () => {
      const actual = citaSlice({ ...initialState }, { type: 'any' });

      expect(actual).toEqual(initialState);
   });

   test('should clear the store when "limpiar" is used', async () => {
      const dummyState = {
         data: {
            personaje: dummyData,
            cita: dummyData,
            imagen: dummyData,
            direccionPersonaje: dummyData,
         },
         estado: ESTADO_FETCH.INACTIVO,
      };

      const actual = citaSlice(dummyState, limpiar());

      expect(actual).toEqual({ ...initialState });
   });
});
