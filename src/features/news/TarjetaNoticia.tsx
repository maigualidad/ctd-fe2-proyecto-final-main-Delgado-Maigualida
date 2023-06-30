import {
  TarjetaNoticia,
  ImagenTarjetaNoticia,
  TituloTarjetaNoticia,
  FechaTarjetaNoticia,
  DescripcionTarjetaNoticia,
  BotonLectura,
} from "./styled";
import { INoticiasNormalizadas } from "./useObtenerNoticias";

interface Props {
  noticia: INoticiasNormalizadas;
  onVerMas: (noticia: INoticiasNormalizadas) => void;
}

const TarjetaNoticiaComponent: React.FC<Props> = ({ noticia, onVerMas }) => {
  return (
    <TarjetaNoticia>
      <ImagenTarjetaNoticia src={noticia.imagen} />
      <TituloTarjetaNoticia>{noticia.titulo}</TituloTarjetaNoticia>
      <FechaTarjetaNoticia>{noticia.fecha}</FechaTarjetaNoticia>
      <DescripcionTarjetaNoticia>
        {noticia.descripcionCorta}
      </DescripcionTarjetaNoticia>
      <BotonLectura onClick={() => onVerMas(noticia)}>Ver más</BotonLectura>
    </TarjetaNoticia>
  );
};

export default TarjetaNoticiaComponent;
