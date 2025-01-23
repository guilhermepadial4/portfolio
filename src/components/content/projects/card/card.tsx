function ProjectCard({ image, title, description }) {
  return (
    <div className="max-w-sm overflow-hidden rounded-lg bg-white shadow-lg">
      <img src={image} alt={title} className="h-48 w-full object-cover" />

      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>

        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
