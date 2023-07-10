import userEvent from "@testing-library/user-event"
import { renderRedux } from "../../../test-utils";
import Bio from "../Bio"
import { screen } from '@testing-library/react'

const homerBio = `Como jefe de la familia, Homero y su esposa Marge tienen tres hijos: Bart, Lisa y Maggie. Homero trabaja en la planta de energía nuclear de Springfield como inspector de seguridad. Homero encarna muchos estereotipos de la clase trabajadora estadounidense: es obeso, inmaduro, franco, agresivo, calvo, perezoso, ignorante, poco profesional y adicto a la cerveza, a la comida chatarra y a la televisión`

describe('Bio section', () => {
   test('Deberia permitir cambiar el perfil y ver toda la data posible', async () => {
      renderRedux(<Bio />)

      await userEvent.click(screen.getByText('HOMERO'));

      expect(screen.getByText(homerBio)).toBeInTheDocument();

   })
})