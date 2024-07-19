import PageContent from "../components/allPageContent";
import { WebProjectsItems } from "../db";

const Webprojects = () => {
  return (
    <>
      <div className="w-screen h-screen" role="main">
        <PageContent pageContent={WebProjectsItems} />
      </div>
    </>
  );
};

export default Webprojects;
