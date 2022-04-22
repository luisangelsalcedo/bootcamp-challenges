import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLinkClickHandler, useParams, useNavigate } from "react-router-dom";
import { useFetchAndLoad } from "../../hooks";
import { deleteFavs, openFavs, openFavsById } from "../../redux";
import { deleteFavsByIdService, getFavsByIdService } from "../../services";
import { ReactComponent as Image } from "../../assets/svg/ilustracion2.svg";
import {
  FavItem,
  Btn,
  TitleField,
  ModalContext,
  Preloading,
} from "../../components/DesignSystem";
import { FavListFormEdit } from "./FavListFormEdit";
import { FavForm } from "./FavForm";
import { FavFormEdit } from "./FavFormEdit";
import "./favsPage.scss";

export const FavsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { open, favsList } = useSelector((state) => state.favs);
  const { loading, callEndpoint } = useFetchAndLoad();
  const linkClose = useLinkClickHandler(`/dashboard`);
  const navigate = useNavigate();
  const { openModal } = useContext(ModalContext);

  const handleLoad = async () => {
    if (!open) {
      const { data } = await callEndpoint(getFavsByIdService(id));
      const { favs } = data;
      if (!favs) navigate("/dashboard", { replace: true });
      dispatch(openFavs(favs));
    } else dispatch(openFavsById(id));
  };

  const handleAdd = () => {
    openModal(<FavForm />);
  };
  const handleEditList = () => {
    openModal(<FavListFormEdit />);
  };
  const handleEdit = (fav, index) => {
    openModal(<FavFormEdit fav={fav} index={index} />);
  };

  const handleDelete = async () => {
    await callEndpoint(deleteFavsByIdService(id));
    dispatch(deleteFavs(id));
    if (!favsList.legth) navigate("/dashboard", { replace: true });
  };

  useEffect(() => {
    handleLoad();
  }, [id]);

  return (
    <div className="fav-page">
      {loading ? (
        <Preloading />
      ) : (
        <div className="container">
          <div className="title">
            <Btn fa="angle-left" onClick={linkClose} />
            <TitleField text={open?.name} size="1.8" />
          </div>

          {!open?.list.length ? (
            <div>
              <div className="fav-page-init">
                <TitleField
                  text="Agrega items a tu lista de favoritos"
                  size="1.2"
                  center
                />
                <div className="btns">
                  <Btn
                    label="Agregar item"
                    fa="plus"
                    btn="outline"
                    onClick={handleAdd}
                  />
                  <Btn fa="edit" btn="primary" onClick={handleEditList} />
                  <Btn fa="trash" btn="danger" onClick={handleDelete} />
                </div>
                <div className="img">
                  <Image />
                </div>
              </div>
            </div>
          ) : (
            <div className="fav-page-list">
              <div className="btns">
                <Btn
                  label="Agregar item"
                  fa="plus"
                  btn="outline"
                  onClick={handleAdd}
                />
                <Btn
                  label="Editar lista"
                  fa="edit"
                  btn="primary"
                  onClick={handleEditList}
                />
                <Btn
                  label="Eliminar lista"
                  fa="trash"
                  btn="danger"
                  onClick={handleDelete}
                />
              </div>
              {open?.list.map((fav, i) => (
                <FavItem
                  key={String(i)}
                  fav={fav}
                  index={i}
                  handleEdit={() => handleEdit(fav, i)}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
