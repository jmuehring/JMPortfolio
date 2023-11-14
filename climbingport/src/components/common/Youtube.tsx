import React from 'react';

type YouTubeProps = {
  videoId: string;
  width?: string;
  height?: string; 
};

const YouTube = ({ videoId, height = '500px', width = '800px' }: YouTubeProps) => {
  const src = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div style={{ position: 'relative', paddingBottom: '45%', height: 0, overflow: 'hidden' }}>
      <iframe
        src={src}
        style={{ width: width, height: height, objectFit: 'contain' }}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};

export default YouTube;
