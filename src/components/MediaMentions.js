// src/components/MediaMentions.js
import React from "react";
import { Box, Typography, Link, List, ListItem } from "@mui/material";

const mentions = [
  {
    title: "Economist Shula Calls for Increased Agric Insurance Schemes",
    url: "https://www.zambiamonitor.com/economist-shula-calls-for-increased-agric-insurance-schemes-to-cushion-impact-of-weather-crisis-on-farmers/",
    source: "Zambia Monitor",
    date: "July 2024",
  },
  {
    "title": "Govt Advised to Introduce Mobile Money Bonds as a Way of Collecting Money Being Hoarded by Some Sections of Society",
    "url": "https://phoenixfm.co.zm/govt-advised-to-introduce-mobile-money-bonds-as-a-way-of-collecting-money-being-hoarded-by-some-sections-of-society/",
    "source": "Phoenix FM",
    "date": "2024"
  },
  
    {
    "title": "Impact of Russia-Ukraine Conflict Continues to Spread Globally - Shula",
    "url": "https://news.cgtn.com/news/2022-07-18/Impact-of-Russia-Ukraine-conflict-continues-to-spread-globally-1bLgpd2IeXu/index.html",
    "source": "CGTN News",
    "date": "July 2022"
  },
  
  // add more mentions here
];

const MediaMentions = () => (
  <Box sx={{ my: 6, maxWidth: 800, mx: "auto" }}>
    <Typography variant="h4" gutterBottom align="center">
      In the Media
    </Typography>
    <List>
      {mentions.map(({ title, url, source, date }, i) => (
        <ListItem key={i} sx={{ display: "block", mb: 2 }}>
          <Link href={url} target="_blank" rel="noopener" underline="hover" sx={{ fontWeight: "bold" }}>
            {title}
          </Link>
          <div></div>
          <Typography variant="caption" color="text.secondary">
            {source} — {date}
          </Typography>
        </ListItem>
      ))}
    </List>
  </Box>
);

export default MediaMentions;
