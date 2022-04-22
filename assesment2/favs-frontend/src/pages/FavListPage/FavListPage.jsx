import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  TitleField,
  Btn,
  FavList,
  ModalContext,
  Preloading,
} from "../../components/DesignSystem";
import { useFetchAndLoad } from "../../hooks";
import { getAllFavs } from "../../redux/actions";
import { getAllFavsService } from "../../services";
import { FavListForm } from "./FavListForm";
import "./favListPage.scss";

export const FavListPage = () => {
  const { openModal } = useContext(ModalContext);
  const { loading, callEndpoint } = useFetchAndLoad();
  const dispatch = useDispatch();
  const { favsList } = useSelector((state) => state.favs);

  const handleClick = () => {
    openModal(<FavListForm />);
  };

  const handleLoad = async () => {
    const { data } = await callEndpoint(getAllFavsService());
    const { arrFavs } = data;
    if (data) dispatch(getAllFavs(arrFavs));
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div className="fav-list-page">
      {loading ? (
        <Preloading />
      ) : (
        <div>
          {!favsList.length ? (
            <div className="container">
              <div className="fav-list-page-init">
                <div className="icon">
                  <i className="fa fa-star" aria-hidden="true" />
                </div>
                <Btn
                  label="crear una lista"
                  fa="plus"
                  btn="outline"
                  onClick={handleClick}
                />
              </div>
            </div>
          ) : (
            <div className="container">
              <div className="fav-list-page-list">
                <div className="title">
                  <TitleField text="Listas de favoritos" size="1.5" />
                  <Btn
                    label="Crear una lista"
                    fa="plus"
                    btn="outline"
                    onClick={handleClick}
                  />
                </div>
                {favsList?.map((favs) => (
                  <FavList key={favs._id} favs={favs} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
