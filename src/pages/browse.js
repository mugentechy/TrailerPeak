import requests from '../utils/requests'
import Row from '../components/Row'

import { React, useState } from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography, Tabs, Tab, Grow, Box } from '@mui/material'

function Browse() {
  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    
    <>
<div className="">
  <Row title="Airing Today" fetchUrl={requests.airing.url} type={requests.airing.type} />
</div>
<Row title="Upcoming" fetchUrl={requests.upcoming.url} type={requests.upcoming.type} />
<Row title="Popular" fetchUrl={requests.popular.url} type={requests.popular.type} />
<Row title="Trending" fetchUrl={requests.trend.url} type={requests.trend.type} />
<Row title="Top Rated" fetchUrl={requests.latest.url} type={requests.latest.type} />


    </>
  )
}

export default Browse
