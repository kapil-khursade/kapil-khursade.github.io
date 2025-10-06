import ProjectPageCard from "../componant/ProjectPageCard"
import projectData from "../constants/projectData"

function Projects() {
  return (
    <div className="flex justify-center items-center py-6 min-h-[calc(100vh-80px)] mx-auto mesh-gradient-center overflow-hidden">
      <div className="grid grid-cols-1 gap-2">
        <p className="text-gray-700 dark:text-gray-400">
          Here you will find a selection of projects I have worked on.
        </p>

        <div className="w-auto grid lg:grid-cols-2 gap-2 lg:mt-6">
          {projectData.map((item) => <ProjectPageCard {...item} />)}
        </div>
      </div>
    </div>
  )
}

export default Projects