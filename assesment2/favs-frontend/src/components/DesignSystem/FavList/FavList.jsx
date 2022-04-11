import "./scss/favList.scss";

export const FavList = () => (
  <details className="fav-list">
    <summary>
      <span>
        <h4>Some details</h4>
        <i className="fa fa-list-ul" aria-hidden="true" /> 3 Items
      </span>
      <i className="fa fa-chevron-down" aria-hidden="true" />
    </summary>
  </details>
);
