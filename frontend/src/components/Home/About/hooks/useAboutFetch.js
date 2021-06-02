import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { fetchAbout } from "../../../../api/index";
import { fetchAbout } from "../../../../actions/about";

const useAboutFetch = () => {
  //const [aboutContent, setAboutContent] = useState("");
  const aboutContent = useSelector((state) => state.about);
  const dispatch = useDispatch();

  useEffect(() => {
    // const getAbout = async () => {
    //   try {
    //     const { data } = await fetchAbout();
    //     data.data && setAboutContent(`${JSON.parse(data.data.HTMLString)}`);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // getAbout();
    dispatch(fetchAbout());
  }, [dispatch]);

  return aboutContent;
};

export default useAboutFetch;
