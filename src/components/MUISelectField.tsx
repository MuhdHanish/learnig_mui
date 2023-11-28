import { Box, TextField, MenuItem } from "@mui/material"
import React, { useState, useEffect, useMemo } from "react";

export const MUISelectField = () => {
    const [country, setCountry] = useState('');
    const [countries, setCountries] = useState<string[]>([]);
     const data = useMemo(
       () => [
         { value: "IN", country: "India" },
         { value: "US", country: "United States" },
         { value: "CA", country: "Canada" },
         { value: "AU", country: "Australia" },
         { value: "UK", country: "United Kingdom" },
         { value: "JP", country: "Japan" },
         { value: "BR", country: "Brazil" },
         { value: "FR", country: "France" },
       ],
       []
     );
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value);
    }
    const handleMultiChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setCountries(typeof value === "string" ? value.split(','): value);
    }
    useEffect(() => { console.log(country); }, [country]);
    useEffect(() => { console.log(countries); }, [countries]);
  return (
    <Box  display={"flex"} flexDirection={"row"} gap={3}>
      <TextField label="Select Country" fullWidth select value={country} onChange={handleChange} size="small" color="secondary" helperText="Please select a country">
        {data.map((item,index)=>(<MenuItem key={index} value={item?.value}>{item?.country}</MenuItem>))}
      </TextField>
      <TextField label="Select Country" fullWidth select value={countries} onChange={handleMultiChange} SelectProps={{multiple:true}}>
        {data.map((item,index)=>(<MenuItem key={index} value={item?.value}>{item?.country}</MenuItem>))}
      </TextField>
    </Box>
  );
}
