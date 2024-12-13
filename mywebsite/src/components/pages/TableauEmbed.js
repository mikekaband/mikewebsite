import React, { useEffect, useRef } from 'react';

const TableauEmbed = ({ url, options }) => {
  const vizRef = useRef(null);

  useEffect(() => {
    // Create a new Tableau Viz instance when the component mounts
    const viz = new window.tableau.Viz(vizRef.current, url, options);

    // Cleanup: Dispose of the viz instance when the component unmounts or updates
    return () => viz.dispose();
  }, [url, options]);  // Re-run effect if url or options change

  return <div ref={vizRef} style={{ width: '100%', height: '850px' }} />;
};

export default TableauEmbed;

