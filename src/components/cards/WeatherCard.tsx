import React, { useEffect, useState } from 'react';
import {
  Card,
  CardActions,
  CardContent,
  Grid,
  makeStyles,
  Typography
} from '@material-ui/core';
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';

function createDefaultWeather() {
  return {
    coord: {
      lon: -82.95,
      lat: 42.54
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04n'
      }
    ],
    base: 'stations',
    main: {
      temp: 274.27,
      feels_like: 265.93,
      temp_min: 273.71,
      temp_max: 275.15,
      pressure: 1020,
      humidity: 64
    },
    visibility: 10000,
    wind: {
      speed: 8.2,
      deg: 310,
      gust: 12.3
    },
    clouds: {
      all: 90
    },
    dt: 1604296488,
    sys: {
      type: 1,
      id: 4991,
      country: 'US',
      sunrise: 1604318838,
      sunset: 1604355800
    },
    timezone: -18000,
    id: 4993369,
    name: 'Fraser',
    cod: 200
  };
}
interface ILatLong {
  lat: number;
  lon: number;
}

interface IWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface IMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

interface IWind {
  speed: number;
  deg: number;
  gust: number;
}

interface ISys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

interface ICurrentWeather {
  coord: ILatLong;
  weather: IWeather[];
  base: string;
  main: IMain;
  visibility: number;
  wind: IWind;
  clouds: { all: number };
  dt: number;
  sys: ISys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

async function requestWeather(): Promise<ICurrentWeather> {

  // const weather = await response.json();
  const weather = {
    coord: {
      lon: -82.95,
      lat: 42.54
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04n'
      }
    ],
    base: 'stations',
    main: {
      temp: 274.27,
      feels_like: 265.93,
      temp_min: 273.71,
      temp_max: 275.15,
      pressure: 1020,
      humidity: 64
    },
    visibility: 10000,
    wind: {
      speed: 8.2,
      deg: 310,
      gust: 12.3
    },
    clouds: {
      all: 90
    },
    dt: 1604296488,
    sys: {
      type: 1,
      id: 4991,
      country: 'US',
      sunrise: 1604318838,
      sunset: 1604355800
    },
    timezone: -18000,
    id: 4993369,
    name: 'Fraser',
    cod: 200
  };
  return weather;
}

enum Degrees {
  F = 'Fahrenheit',
  C = 'Celsius'
}

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  toggleContainer: {
    margin: theme.spacing(2, 0)
  }
}));

function WeatherCard() {
  const [degree, setAlignment] = useState<Degrees>(Degrees.F);
  const [we, setWeather] = useState<ICurrentWeather>(createDefaultWeather());
  const {
    coord,
    weather,
    base,
    main,
    wind,
    visibility,
    clouds,
    sys,
    timezone
  } = we as ICurrentWeather;
  const classes = useStyles();

  const handleDegreeChange = (
    _: React.MouseEvent<HTMLElement>,
    newDegree: Degrees
  ) => {
    if (newDegree !== null) {
      setAlignment(newDegree);
    }
  };

  useEffect(() => {
    const w = requestWeather();
    setWeather(w as any);
  }, []);
  console.log({
    coord,
    weather,
    base,
    main,
    wind,
    visibility,
    clouds,
    sys,
    timezone
  });
  return (
    <Grid container spacing={4}>
      <Grid item sm={12} md={6}>
        <div className={classes.toggleContainer}>
          <ToggleButtonGroup
            value={degree}
            exclusive
            onChange={handleDegreeChange}
            aria-label="text degree"
          >
            <ToggleButton value={Degrees.C} aria-label="left aligned">
              <span>&#8451;</span>
            </ToggleButton>
            <ToggleButton value={Degrees.F} aria-label="centered">
              <span>&#8457;</span>
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      </Grid>
      <Grid item>
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Wind:
              <Typography>
                speed: {wind?.speed}
                deg: {wind?.deg}
                gust: {wind?.gust}
              </Typography>
            </Typography>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              main:
              <Typography>
                temp: {main?.temp}
                feels like: {main?.feels_like}
                temp min: {main?.temp_min}
                temp max: {main?.temp_max}
                pressure: {main?.pressure}
                humidity: {main?.humidity}
              </Typography>
            </Typography>
            <Typography variant="h5" component="h2">
              base: {base}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              adjective
            </Typography>
            <Typography variant="body2" component="p">
              well meaning and kindly.
              <br />a benevolent smile
            </Typography>
          </CardContent>
          <CardActions />
        </Card>
      </Grid>
    </Grid>
  );
}

export default WeatherCard;
