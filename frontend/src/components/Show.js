import { useState, useEffect } from 'react';

function ShowPage(props) {

    const [showPage, setShowPage] = useState(null);

    const getShowPageData = async () => {
        const response = await fetch(props.URL + "show-page");

        const data = await response.json();

        setShowPage(data);
    }

    useEffect(() => (
        getShowPageData(), []
    ))

    const loaded = () => {
        return showPage.map((showPages) => (
          <div>
            <h1>{showPages.name}</h1>
          </div>
        ));
      };

    return showPage ? loaded() : <h1>Loading...</h1>
  }
  
  export default ShowPage;