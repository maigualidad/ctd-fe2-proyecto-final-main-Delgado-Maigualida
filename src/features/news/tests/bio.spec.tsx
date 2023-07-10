import userEvent from "@testing-library/user-event"
import { renderRedux } from "../../../test-utils";
import { screen } from '@testing-library/react'
import Noticias from "../Noticias"

describe('Bio section', () => {
   test('Deberia mostrarme la previsualizacion de las noticias', async () => {
      renderRedux(<Noticias />)

      // eslint-disable-next-line testing-library/no-debugging-utils
      screen.debug()

      expect(await screen.findByText("Los Simpson 'predijeron' Escasez De Combustible")).toBeInTheDocument();
      expect(await screen.findByText("Hace 5 minutos")).toBeInTheDocument();
      expect(await screen.findByText('La más reciente es una teoría de que un episodio de 2010 del programa, titulado "Lisa Simpson, e')).toBeInTheDocument();


      await userEvent.click((await screen.findAllByText('Ver más')).at(0)!);
      expect(await screen.findByTestId('new-image')).toBeInTheDocument();

      await userEvent.click(screen.getByTestId('close-modal-button'));

      expect(screen.queryByTestId('new-image')).not.toBeInTheDocument();
   })
})