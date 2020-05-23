import React, { useState } from 'react';
import axios from 'axios';

const Postcreate = () => {
  const [title, setTitle] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://posts.com/posts/create', {
        title,
      });

      setTitle('');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Postcreate;
