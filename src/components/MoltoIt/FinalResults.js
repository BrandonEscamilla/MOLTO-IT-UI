import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Spinner } from '@chakra-ui/core';
import { useLocation, useHistory } from 'react-router-dom';

const FinalResults = (props) => {
  const data = useSelector((state) => state.moltoItConfig);
  const [loader, setLoader] = useState(false);
  const [url, setUrl] = useState('');
  let location = useLocation();
  let history = useHistory();

  useEffect(() => {
    setLoader(data.response);
    if (location.state) {
      if (location.state.fromResults) {
        let dataRaw = data.response;
        let base64 = dataRaw.split(',')[1];
        setUrl(base64);
        let state = { ...location.state };
        delete state.fromResults;
        history.replace({ ...location, state });
      } else {
        history.push('/');
      }
    } else {
      history.push('/');
    }
  }, [data.response]);

  return (
    <React.Fragment>
      {loader ? null : (
        <div className="loader">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </div>
      )}
      <p className="TitleFinalResults">RESULTS</p>

      <div className="finalresults__container">
        <div className="finalresults__image">
          <img
            src={data.response}
            width="100%"
            height="100%"
            alt="image_orbit"
          />
        </div>

        <div className="finalresults__options">
          <p
            className="finalresults__title"
            style={{
              fontSize: '14px',
              marginLeft: '60px',
              marginRight: '60px'
            }}
          >
            Options
          </p>

          <button className="finalresults__button">
            <a href={`data:image/png;base64,${url}`} download="orbit.png">
              Download Image
            </a>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FinalResults;
