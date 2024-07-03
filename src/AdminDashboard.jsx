import React, { useEffect, useState } from "react";
import {
  fetchProjects,
  createProject,
  updateProject,
  deleteProject,
} from "./api";

const AdminDashboard = () => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({ title: "", description: "" });
  const [project, setproject] = useState(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const fetchedProjects = await fetchProjects();
        setProjects(fetchedProjects);
      } catch (error) {
        console.error("Error loading projects:", error);
      }
    };
    loadProjects();
  }, []);

  const handleCreateProject = async () => {
    try {
      const createdProject = await createProject(newProject);
      setProjects([...projects, createdProject]);
      setNewProject({ title: "", description: "" });
    } catch (error) {
      console.error("Error creating project:", error);
    }
  };

  const handleUpdateProject = async (id) => {
    try {
      const updatedProject = await updateProject(id, project);
      setProjects(
        projects.map((project) =>
          project.id === id ? updatedProject : project
        )
      );
      setproject(null);
    } catch (error) {
      console.error("Error updating project:", error);
    }
  };

  const handleDeleteProject = async (id) => {
    try {
      await deleteProject(id);
      setProjects(projects.filter((project) => project.id !== id));
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  const handleInputChange = (e, field) => {
    setNewProject({ ...newProject, [field]: e.target.value });
  };

  const handleEditInputChange = (e, field) => {
    setproject({ ...project, [field]: e.target.value });
  };

  return (
    <div className="container mx-auto p-4 text-black">
      <h1 className="text-3xl font-bold mb-4 text-sky-500">Admin Dashboard</h1>

      <div className="mb-8">
        <h2 className="text-2xl bg-sky-500 font-semibold mb-2">
          Create New Project
        </h2>
        <input
          type="text"
          placeholder="Title"
          value={newProject.title}
          onChange={(e) => handleInputChange(e, "title")}
          className="block w-full px-4 py-2 mb-2 border border-gray-300 rounded"
        />
        <textarea
          placeholder="Description"
          value={newProject.description}
          onChange={(e) => handleInputChange(e, "description")}
          className="block w-full px-4 py-2 mb-2 border border-gray-300 rounded"
        />
        <button
          onClick={handleCreateProject}
          className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600"
        >
          Create Project
        </button>
      </div>

      <div>
        <h2 className="text-2xl bg-sky-500 font-semibold mb-2">Projects</h2>
        <ul>
          {projects.map((project) => (
            <li key={project.id} className="mb-4 border-b pb-4 bg-grey-500">
              <div>
                <input
                  type="text"
                  value={project.title}
                  onChange={(e) => handleEditInputChange(e, "title")}
                  className="block w-full px-4 py-2 mb-2 border border-gray-300 rounded"
                />
                <textarea
                  value={project.description}
                  onChange={(e) => handleEditInputChange(e, "description")}
                  className="block w-full px-4 py-2 mb-2 border border-gray-300 rounded"
                />
                <button
                  onClick={() => handleUpdateProject(project.id)}
                  className="px-4 py-2 bg-green-500 text-sky-500 rounded hover:bg-green-600 mr-2"
                >
                  Save
                </button>
                <button
                  onClick={() => setproject(null)}
                  className="px-4 py-2 bg-gray-500 text-sky-500 rounded hover:bg-gray-600"
                >
                  Cancel
                </button>
              </div>

              <div>
                <h3 className="text-xl font-semibold ">{project.title}</h3>
                <p className="bg-black-500">{project.description}</p>
                <button
                  onClick={() => setproject(project)}
                  className="px-4 py-2 bg-yellow-500 text-sky-500 rounded hover:bg-yellow-600 mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteProject(project.id)}
                  className="px-4 py-2 bg-red-500 text-sky-500 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
