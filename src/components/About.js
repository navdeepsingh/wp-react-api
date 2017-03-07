import React        from 'react';
import DataStore    from './../stores/DataStore.js';

class About extends React.Component {

    render() {
      let page = DataStore.getPageBySlug('about');
      let acf = page.acf; // Advanced Custom Fields data
      return (
          <div>
              <h1>{page.title.rendered}</h1>
          </div>
      );
    }
}

export default About;
