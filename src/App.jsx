
import React, { useState } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";

export default function MichellePortfolioApp() {
  const sections = [
    {
      title: "Professional Experience",
      description: "Explore highlights from Michelle's events career.",
      images: [
        { src: "/headshot.jpg", caption: "Headshot", tags: ["profile"] }
      ]
    }
  ];
  const [selectedSection, setSelectedSection] = useState(null);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <header className="text-center space-y-2 mb-10">
        <h1 className="text-4xl font-bold">Michelle Denomme</h1>
        <p className="text-xl">Events Professional</p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="https://www.linkedin.com/in/michelledenomme/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://www.instagram.com/mfd_events" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </header>

      {!selectedSection ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section, index) => (
            <div key={index} className="rounded-2xl shadow-md p-4 border">
              <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
              <p className="text-sm text-gray-600">{section.description}</p>
              <button className="mt-4 w-full border p-2" onClick={() => setSelectedSection(section)}>
                View {section.title}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          <button onClick={() => setSelectedSection(null)} className="text-blue-600 underline">← Back to Overview</button>
          <h2 className="text-3xl font-bold mb-2">{selectedSection.title}</h2>
          <p className="text-gray-700 mb-4">{selectedSection.description}</p>
          <Gallery>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {selectedSection.images.map((image, idx) => (
                <div key={idx}>
                  <Item original={image.src} thumbnail={image.src} width="1024" height="768" title={image.caption}>
                    {({ ref, open }) => (
                      <img
                        ref={ref}
                        onClick={open}
                        src={image.src}
                        alt={image.caption}
                        className="rounded-xl shadow-md object-cover w-full h-60 cursor-pointer"
                      />
                    )}
                  </Item>
                  <p className="text-sm mt-2 text-gray-600">{image.caption}</p>
                  <div className="text-xs text-gray-500 italic mt-1">
                    {image.tags.map((tag, i) => (
                      <span key={i} className="mr-2">#{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Gallery>
        </div>
      )}
    </div>
  );
}
