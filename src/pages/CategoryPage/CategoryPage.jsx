import React from "react";
import Category from "../../components/Category/Category";
import { useLocation } from "react-router-dom";

const CategoryPage = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  const location = useLocation();
  console.log("Full path:", location.pathname);

  const categorySegments = decodeURIComponent(location.pathname)
    .split("/")
    .filter(Boolean); // фільтрує порожні рядки

  console.log("Segments:", categorySegments);
  return (
    <div>
      <Category />
    </div>
  );
};

export default CategoryPage;
