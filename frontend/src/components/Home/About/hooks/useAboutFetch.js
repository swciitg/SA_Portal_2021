import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAbout } from "../../../../actions/about";

const useAboutFetch = () => {
  const aboutContent = useSelector((state) => state.about);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAbout());
  }, [dispatch]);

  return aboutContent;
};

export default useAboutFetch;
