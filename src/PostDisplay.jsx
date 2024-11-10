import React from 'react';

const PostDisplay = ({ data }) => {
  console.log('Post data:', data); // Log data to verify it's received

  const renderData = (data) => {
    if (Array.isArray(data)) {
      return (
        <ul>
          {data.map((item, index) => (
            <li key={index}>{renderData(item)}</li>
          ))}
        </ul>
      );
    } else if (typeof data === 'object' && data !== null) {
      return (
        <ul>
          {Object.entries(data).map(([key, value]) => (
            <li key={key}>
              <strong>{key}: </strong>
              {renderData(value)}
            </li>
          ))}
        </ul>
      );
    } else {
      return <span>{String(data)}</span>;
    }
  };

  return <div className="post">{renderData(data)}</div>;
};

export default PostDisplay;
