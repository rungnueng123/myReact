import React from 'react'
import GoogleMapReact from 'google-map-react';
import { useSelector, useDispatch } from 'react-redux'
import Action from "../redux/action";

export default function MapBranch(
    {
        center = {
            lat: 13.7200452,
            lng: 100.5135078
        },
        zoom = 15
    }) {

    const branches = useSelector(state => state.branches)
    const dispatch = useDispatch()

    const markerClick = (marker) => {
        let branchId = marker.get('branchId');
        let branchTitle = marker.get('title');

        console.log(`Selected branch: ${branchId} ${branchTitle}`);
        dispatch({ type: Action.SHOW_BRANCH_DATA, payload: branchId });
    }

    const handleApiLoaded = (map, maps) => {
        // let marker = new maps.Marker({
        //     position: center,
        //     map,
        //     title: 'Kerry'
        // });

        let bounds = new maps.LatLngBounds();

        branches.forEach(branch => {
            let marker = new maps.Marker({
                position: branch.position,
                map,
                title: branch.name,
                branchId: branch.id
            });

            marker.addListener('click', () => { markerClick(marker) })

            bounds.extend(branch.position);
        });
        map.fitBounds(bounds);
    }

    return (
        <div style={{
            height: '100vh',
            width: '100%'
        }}>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: 'AIzaSyBDqlW1EIlePcA48oLVV_kYQJXm9dQ75uw'
                }}
                defaultCenter={center}
                defaultZoom={zoom}

                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
            >
            </GoogleMapReact>

        </div>
    )
}
