import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox ({info}) {

    const INIT_URL= 
        "https://images.unsplash.com/photo-1473073826085-dafe61d85c04?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aGF6ZSUyMHdlYWh0ZXJ8ZW58MHx8MHx8fDA%3D";
    const HOT_URL= 
        "https://images.unsplash.com/uploads/1411400493228e06a6315/ad711a20?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHN1bm55JTIwd2VhaHRlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL= 
        "https://images.unsplash.com/photo-1516047487059-fd288d84e8cb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sZCUyMHdlYWh0ZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL= 
        "https://images.unsplash.com/photo-1520609798519-2e1e8c18df3a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhaW4lMjB3ZWFodGVyfGVufDB8fDB8fHww";
    // let info={
    //     city : "Delhi",
    //     feelsLike: 34.4,
    //     humidity: 21,
    //     temp: 36.05,
    //     tempmax: 36.05,
    //     tempmin: 36.05,
    //     weather: "haze",
    // };
    return(
        <div className='infobox'>
            {/* <h1>Weather Info - {info.weather}</h1> */}
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={info.humidity > 80 ? RAIN_URL : (info.temp > 15 ? HOT_URL : COLD_URL)}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {info.city} {info.humidity > 80 ? <ThunderstormIcon /> : (info.temp > 15 ? <WbSunnyIcon /> : <AcUnitIcon />)}
                </Typography>
                <Typography variant="body2" color="text.secondary" component={"span"}>
                <p>Temperature = {info.temp}&deg;C</p>
                <p>Humidity = {info.humidity}</p>
                <p>Min Temperature = {info.tempmin}&deg;C</p>
                <p>Max Temperature = {info.tempmax}&deg;C</p>
                <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
                </Typography>
            </CardContent>
            </Card>
            </div>
        </div>
    );
};