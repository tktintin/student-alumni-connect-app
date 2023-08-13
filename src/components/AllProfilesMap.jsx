import React from 'react';
import { GoogleMap, LoadScript, MarkerClusterer, Marker } from '@react-google-maps/api';

const options = {
    imagePath:
      'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m', // so you must have m1.png, m2.png, m3.png, m4.png, m5.png and m6.png in that folder
  }

  /* istanbul ignore next */
  function createKey(location) {
    return location.lat + location.lng
  }

/**

  ***Description**
  
  This component displays all user profiles in a map format.
  
  ***Props**
  
  ```text
  profiles: object
  ```

  ***Structure**
  
  This component contains a map and data points for each user.

  ```jsx
  <GoogleMap>
    <MarketClusterer>
    </MarketClusterer>
  </GoogleMap>
  ```

  ***States**
  
  ```None```

  ***Functions**
  
  ```None```

 */

const AllProfilesMap = ({profiles}) => {

    /* istanbul ignore next */
    const locations = profiles.map(profile => ({
        key: profile?.UserID,
        lat: profile?.Latitude === 'latitude' || profile?.Latitude.length === 8 ?
                Number(profile?.Latitude.slice(0, 3)) + profile?.Latitude.slice(3, 5)/60
                :
                Number(profile?.Latitude.slice(0, 2)) + profile?.Latitude.slice(3, 5)/60,
        lng: profile?.Longitude === 'longitude' || profile?.Longitude.length === 8 ?
                -(Number(profile?.Longitude.slice(0, 3)) + profile?.Longitude.slice(4, 6)/60)
                :
                -(Number(profile?.Longitude.slice(0, 2)) + profile?.Longitude.slice(3, 5)/60),
    }));
    const containerStyle = {
        width: '100%',
        height: '83vh'
    };
    const center = {
        lat: 0,
        lng: 0,
    };

    return (
        // <h1>Need coordinate information for map</h1>
        <LoadScript
            googleMapsApiKey='insertApiKey'
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={2}
            >
                <MarkerClusterer options={options}>
                    {
                    /* istanbul ignore next */
                    (clusterer) =>
                        locations.map((location) => (
                            <Marker key={createKey(location)} position={location} clusterer={clusterer} />
                        ))
                    }
                </MarkerClusterer>
            </GoogleMap>
        </LoadScript>
    )
};

export default AllProfilesMap;
