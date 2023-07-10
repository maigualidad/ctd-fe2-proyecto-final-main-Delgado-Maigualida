import { screen } from '@testing-library/react';
import Cita from '../Cita';
import { renderRedux } from "../../../test-utils";
import { MENSAJE_CARGANDO } from '../constants';
import userEvent from '@testing-library/user-event'



const renderComponent = () => {
   renderRedux(<Cita />);
 };

describe('Quotes component', () => {
   test('Deeberia dejarme llenar el input y mostrarlo', async () => {

      renderComponent();
      const input = screen.getByTestId('searchCharacter');
      await userEvent.type(input, 'Homer');
      expect(screen.getByDisplayValue('Homer')).toBeInTheDocument();
   })

   test('Deberia limpiar el imput cuando se clickea el boton de borrar', async () => {

      renderComponent();
      const input = screen.getByTestId('searchCharacter');
      await userEvent.type(input, 'Homer');
      await userEvent.click(screen.getByTestId('clearButton'));
      expect(screen.queryByDisplayValue('Homer')).not.toBeInTheDocument();
   })

   test('Deberia comenzar a buscar una cita cuando el boton', async () => {
      renderComponent();
      await userEvent.click(screen.getByTestId('findButton'));
      expect(screen.getByText(MENSAJE_CARGANDO)).toBeInTheDocument();
   })
})