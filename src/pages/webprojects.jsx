import PageContent from "../components/projectsPageContent";
import { WebProjectsItems } from "../db";

const Webprojects = () => {
  return (
    <>
      <div className="w-screen h-screen max-w-screen max-h-screen" role="main">
        <PageContent pageContent={WebProjectsItems} />
      </div>
    </>
  );
};

export default Webprojects;
