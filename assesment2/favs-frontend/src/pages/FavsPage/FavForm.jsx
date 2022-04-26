import { useContext, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Btn,
  InputForm,
  TitleField,
  ModalContext,
  Preloading,
  NotificationContext,
} from "../../components/DesignSystem";
import { PATTERNS } from "../../constants";
import { useFetchAndLoad } from "../../hooks";
import { updateFavs } from "../../redux";
import { updateFavsByIdService } from "../../services";

export const FavForm = () => {
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

    const favsUpdate = {
      _id: open._id,
      list: [
        ...open.list,
        {
          title: titleRef.current.value,
          link: linkRef.current.value,
          description: descriptionRef.current.value,
        },
      ],
    };

    const { data } = await callEndpoint(updateFavsByIdService(favsUpdate));
    const { favs } = data;

    dispatch(updateFavs(favs));
    closeModal();

    const newItemName = favs.list[favs.list.length - 1].title;
    await openNotice(`${newItemName} has been added`);
  };
  return (
    <>
      {loading ? (
        <Preloading />
      ) : (
        <form onSubmit={handleSubmit}>
          <TitleField text="Nuevo item" size="1.2" center />
          <InputForm
            ref={titleRef}
            placeholder="Titulo"
            fa="check"
            onChange={handleChange}
            required
          />
          <InputForm
            ref={linkRef}
            placeholder="Enlace"
            fa="external-link-square"
            onChange={handleChange}
            pattern={PATTERNS.URL.exp}
            title={PATTERNS.URL.title}
          />
          <InputForm
            ref={descriptionRef}
            placeholder="Descripción"
            fa="align-left"
            onChange={handleChange}
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
