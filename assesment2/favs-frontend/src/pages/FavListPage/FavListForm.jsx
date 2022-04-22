import { useContext, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import {
  InputForm,
  Btn,
  ModalContext,
  TitleField,
  Preloading,
} from "../../components/DesignSystem";

import { useFetchAndLoad } from "../../hooks";
import { createFavs } from "../../redux";
import { createFavsListService } from "../../services";

export const FavListForm = () => {
  const { closeModal } = useContext(ModalContext);
  const { loading, callEndpoint } = useFetchAndLoad();
  const dispatch = useDispatch();
  const nameRef = useRef();
  const btnRef = useRef();

  const handleChange = () => {
    const nameVal = nameRef.current.value.length;
    let isDisable = true;
    if (nameVal) isDisable = false;
    btnRef.current.disabled = isDisable;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const favslist = {
      name: nameRef.current.value,
    };
    const { data } = await callEndpoint(createFavsListService(favslist));
    const { favs } = data;
    if (favs) dispatch(createFavs(favs));
    closeModal();
  };

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  return (
    <>
      {loading ? (
        <Preloading />
      ) : (
        <form onSubmit={handleSubmit}>
          <TitleField text="Crea una nueva lista" size="1.2" center />
          <InputForm
            ref={nameRef}
            placeholder="Nombre de lista"
            fa="star"
            onChange={handleChange}
            required
          />
          <Btn
            ref={btnRef}
            label="Guardar"
            btn="outline"
            className="btn-block"
            type="submit"
            disabled
          />
        </form>
      )}
    </>
  );
};
