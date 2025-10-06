import { ASSETS_LINK } from '../constants/links';

function ProjectPageCard(props: any) {
  return (
    <div
      className="relative overflow-hidden rounded-xl group cursor-pointer w-full"
      style={{ backgroundImage: `url(${ASSETS_LINK}project/${props.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* This div ensures height follows the image’s natural ratio */}
      <img src={`${ASSETS_LINK}project/${props.image}`} alt={props.title} className="w-full h-auto opacity-0" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
        <h2 className="text-white text-lg font-semibold">{props.title}</h2>
        <p className="text-gray-300 text-sm mb-3">{props.description}</p>

        <div className="flex flex-wrap gap-2">
          {props.stack.map((tag: any) => (
            <span
              key={tag}
              className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}


export default ProjectPageCard