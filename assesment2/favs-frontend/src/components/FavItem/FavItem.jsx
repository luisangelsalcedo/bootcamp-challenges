import "./scss/favItem.scss";
import { Btn } from "../Btn";

export const FavItem = ({ fa }) => (
  <details className="fav-item">
    <summary>
      <span>
        {fa && <i className={`fa fa-${fa}`} aria-hidden="true" />}
        Some details
      </span>
      <i className="fa fa-chevron-down" aria-hidden="true" />
    </summary>
    <div>More info about the details.</div>

    <Btn label="Editar" fa="edit" type="primary" />
    <Btn label="Borrar" fa="times" type="danger" />
  </details>
);
