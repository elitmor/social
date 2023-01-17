import preloader from "../../assets/loader.svg";

import { FC } from "react";

const Preloader: FC = () => {
  return (
    <>
      <img src={preloader} alt='preloader' />
    </>
  );
};

export default Preloader;
