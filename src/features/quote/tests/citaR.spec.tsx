import Cita from "../Cita";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { renderRedux } from "../../../test-utils";

const url = "https://thesimpsonsquoteapi.glitch.me/quotes";

const randomResponse = [
    {
       quote: "That's where I saw the leprechaun...He told me to burn things.",
       character: 'Ralph Wiggum',
       image: 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523',
       characterDirection: 'Left'
    }
 
 ]
 const searchedResponse = [
    {
       quote: "Well, I'm better than dirt. Well, most kinds of dirt. I mean not that fancy store bought dirt. That stuffs loaded with nutrients. I.. I can't compete with that stuff.",
       character: "Moe Szyslak",
       image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMoeSzyslak.png?1497567512411",
       characterDirection: "Right"
    }
 ]

const handlers = [
    rest.get(url, async (req, res, ctx) => {
       const character = req.url.searchParams.get('character');
 
       if (!character) {
          return res(ctx.json(randomResponse));
       }
 
       if (character === 'invalid') {
          return res(ctx.json([]))
       }
 
       return res(ctx.json(searchedResponse));
    })
 ];
  const server = setupServer(...handlers);
  
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  const renderComponent = () => {
   renderRedux(<Cita />);
 };


  describe('Quotes component', () => {

    test('Deberia mostrar una cita random si no se ha dado ningun nombre', async () => {
      renderComponent();
       await userEvent.click(screen.getByTestId('findButton'));
       expect(await screen.findByText(randomResponse.at(0)!.quote)).toBeInTheDocument()
    })

    test('Deberia buscar y mostrar una cita de un caracter solicitado', async () => {
      renderComponent();
       const input = screen.getByTestId('searchCharacter');
       await userEvent.type(input, 'Homer');
       await userEvent.click(screen.getByTestId('findButton'));
       expect(await screen.findByText(searchedResponse.at(0)!.quote)).toBeInTheDocument()
    })


    test('Deberia dar un consejo cuando no se consigue un personaje', async () => {
      renderComponent();
       const input = screen.getByTestId('searchCharacter');
       await userEvent.type(input, 'invalid');
       await userEvent.click(screen.getByTestId('findButton'));
       expect(await screen.findByText('Por favor ingrese un nombre válido')).toBeInTheDocument()
    })

 })
 
 