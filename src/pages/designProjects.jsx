import PageContent from "../components/projectsPageContent";
import { DesignProjectsItems } from "../db";

const DesignProjects = () => {
  return (
    <>
      <div className="max-w-screen max-h-screen w-screen h-screen" role="main">
        <PageContent pageContent={DesignProjectsItems} />
      </div>
    </>
  );
};

export default DesignProjects;
