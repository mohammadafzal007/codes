import React, { useState, useEffect, useMemo } from 'react';

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null); // Store the selected album

  // Fetch the photos from the API when the component mounts
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((data) => setPhotos(data)) // Store data in cache (state)
      .catch((error) => console.error('Error fetching data:', error));
  }, []); // Empty dependency array ensures it only runs once

  // Use memoization to cache unique album IDs
  const uniqueAlbumIds = useMemo(() => {
    return [...new Set(photos.map((photo) => photo.albumId))];
  }, [photos]); // Recalculate only if `photos` changes (only once after fetch)

  // Filter photos for selected album
  const filteredPhotos = useMemo(() => {
    return selectedAlbum ? photos.filter((photo) => photo.albumId === selectedAlbum) : [];
  }, [selectedAlbum, photos]); // Recalculate only if selectedAlbum or photos change

  return (
    <div>
      <h1>Select an Album</h1>
      
      {/* Display buttons for each unique album */}
      {uniqueAlbumIds.map((albumId) => (
        <button key={albumId} onClick={() => setSelectedAlbum(albumId)}>
          Album {albumId}
        </button>
      ))}

      <h2>Photos in Album {selectedAlbum}</h2>
      
      {/* Display the filtered photos */}
      <div className="photo-gallery">
        {filteredPhotos.map((photo) => (
          <div key={photo.id} className="photo-item">
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <p>{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
