import PageContent from "../components/allPageContent";
import { DesignProjectsItems } from "../db";

const DesignProjects = () => {
  return (
    <>
      <div className="w-screen h-screen" role="main">
        <PageContent pageContent={DesignProjectsItems} />
      </div>
    </>
  );
};

export default DesignProjects;
