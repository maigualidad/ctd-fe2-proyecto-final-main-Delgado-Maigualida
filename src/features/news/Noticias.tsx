import { useState } from "react";
import useObtenerNoticias, {
  INoticiasNormalizadas,
} from "./useObtenerNoticias";
import TarjetaNoticiaComponent from "./TarjetaNoticia";
import ModalComponent from "./Modal";
import { ContenedorNoticias, ListaNoticias, TituloNoticias } from "./styled";

const Noticias = () => {
  const noticias = useObtenerNoticias();
  const [modal, setModal] = useState<INoticiasNormalizadas | null>(null);

  const handleVerMas = (noticia: INoticiasNormalizadas) => {
    setModal(noticia);
  };

  const handleCloseModal = () => {
    setModal(null);
  };

  return (
    <ContenedorNoticias>
      <TituloNoticias>Noticias de los Simpsons</TituloNoticias>
      <ListaNoticias>
        {noticias.map((n) => (
          <TarjetaNoticiaComponent
            key={n.id}
            noticia={n}
            onVerMas={handleVerMas}
          />
        ))}
        {modal && <ModalComponent noticia={modal} onClose={handleCloseModal} />}
      </ListaNoticias>
    </ContenedorNoticias>
  );
};

export default Noticias;
