import PageTitle from "../../ui/PageTitle"
import FavoritesList from "./FavoritesList";

const Favorites = () => {
  return (
    <div>
      <PageTitle title="علاقه مندی ها" />
      <div>
        <h3 className="text-lg font-bold pb-3 border-b border-solid border-stone-300">لیست محصولات موردعلاقه شما</h3>
      </div>
      <div>
        <FavoritesList />
      </div>
    </div>
  );
}

export default Favorites