import { useContext, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Btn,
  InputForm,
  TitleField,
  ModalContext,
  NotificationContext,
  Preloading,
} from "../../components/DesignSystem";
import { PATTERNS } from "../../constants";
import { useFetchAndLoad } from "../../hooks";
import { updateFavs } from "../../redux";
import { updateFavsByIdService } from "../../services";

export const FavFormEdit = ({ fav, index }) => {
  const { closeModal } = useContext(ModalContext);
  const { openNotice } = useContext(NotificationContext);
  const { loading, callEndpoint } = useFetchAndLoad();
  const { open } = useSelector((state) => state.favs);
  const dispatch = useDispatch();
  const titleRef = useRef();
  const linkRef = useRef();
  const descriptionRef = useRef();
  const btnRef = useRef();

  const handleChange = () => {
    const titleVal = titleRef.current.value.length;
    const linkVal = linkRef.current.value.length;
    const descriptionVal = descriptionRef.current.value.length;
    let isDisable = true;
    if (titleVal + linkVal + descriptionVal) isDisable = false;
    btnRef.current.disabled = isDisable;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const favUpdate = {
      title: titleRef.current.value,
      link: linkRef.current.value,
      description: descriptionRef.current.value,
    };
    open.list.splice(index, 1, favUpdate);

    const favsUpdate = {
      _id: open._id,
      list: open.list,
    };
    const { data } = await callEndpoint(updateFavsByIdService(favsUpdate));
    const { favs } = data;
    dispatch(updateFavs(favs));
    closeModal();
    await openNotice(`Updated ${favUpdate.title}`);
  };
  return (
    <>
      {loading ? (
        <Preloading />
      ) : (
        <form onSubmit={handleSubmit}>
          <TitleField text="Editar item" size="1.2" center />
          <InputForm
            ref={titleRef}
            placeholder="Titulo"
            fa="check"
            onChange={handleChange}
            required
            defaultValue={fav?.title}
          />
          <InputForm
            ref={linkRef}
            placeholder="Enlace"
            fa="external-link-square"
            onChange={handleChange}
            pattern={PATTERNS.URL.exp}
            title={PATTERNS.URL.title}
            defaultValue={fav?.link}
          />
          <InputForm
            ref={descriptionRef}
            placeholder="Descripción"
            fa="align-left"
            onChange={handleChange}
            defaultValue={fav?.description}
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
