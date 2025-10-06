import React from 'react'
import { ASSETS_LINK } from '../constants/links';

function ProjectPageCard(props: any) {
  return (
    <div className="relative lg:w-md overflow-hidden rounded-xl shadow-lg group cursor-pointer">
      {/* Background image */}
      <img
        src={`${ASSETS_LINK}project/${props.image}`}
        alt={props.title}
        className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
        <div>
          <h2 className="text-white text-lg font-semibold">{props.title}</h2>
          <p className="text-gray-200 text-sm mb-3">
            {props.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {props?.stack?.map((item: any) => 
            <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
              {item}
            </span>)}
          </div>
        </div>
      </div>
    </div>
  );
}


export default ProjectPageCard