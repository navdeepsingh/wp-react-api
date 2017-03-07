import React        from 'react';
import DataStore    from './../stores/DataStore.js';

class Contact extends React.Component {

    render() {
      let page = DataStore.getPageBySlug('contact');
      return (
          <div>
              <h1>{page.title.rendered}</h1>
              <p>{page.content.rendered}</p>
          </div>
      );
    }
}

export default Contact;
