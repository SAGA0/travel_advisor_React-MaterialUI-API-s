import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import CssBaseline from '@material-ui/core/CssBaseline'
import { getPlaces } from "./api";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";


const App = () => {

    const [places, setPlaces] = useState([])

    const [coordinates, setCoordinates] = useState({})
    const [bounds, setBounds] = useState({})

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            setCoordinates({ lat: latitude, lng: longitude })
        })
    }, [])

    useEffect(() => {
        getPlaces(bounds.sw, bounds.ne)
            .then((data) => {
                console.log(data)
                setPlaces(data)
            })
    }, [coordinates, bounds])

    return (
        <>
            <CssBaseline />
            <Header />
            <Grid item container spacing={3} style={{ width: '100%' }}>
                <Grid xs={12} md={4}>
                    <List places={places} />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map setCoordinates={setCoordinates}
                        setBounds={setBounds}
                        coordinates={coordinates} />
                </Grid>
            </Grid>
        </>
    )
}

export default App