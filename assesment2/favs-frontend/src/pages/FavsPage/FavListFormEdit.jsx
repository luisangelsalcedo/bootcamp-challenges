import { useContext, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  InputForm,
  Btn,
  ModalContext,
  TitleField,
  Preloading,
  NotificationContext,
} from "../../components/DesignSystem";

import { useFetchAndLoad } from "../../hooks";
import { updateFavs } from "../../redux";
import { updateFavsByIdService } from "../../services";

export const FavListFormEdit = () => {
  const { closeModal } = useContext(ModalContext);
  const { openNotice } = useContext(NotificationContext);
  const { loading, callEndpoint } = useFetchAndLoad();
  const { open } = useSelector((state) => state.favs);
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
      _id: open._id,
      name: nameRef.current.value,
    };
    const { data } = await callEndpoint(updateFavsByIdService(favslist));
    const { favs } = data;
    if (favs) dispatch(updateFavs(favs));
    closeModal();
    await openNotice(`Updated ${favs.name}`);
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
          <TitleField text="Edita tu lista" size="1.2" center />
          <InputForm
            ref={nameRef}
            placeholder="Nombre de lista"
            fa="star"
            defaultValue={open?.name}
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
