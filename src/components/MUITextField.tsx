import React, { useState } from "react";
import { Stack, TextField, InputAdornment, IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export const MUITextField = () => {
    const [show, setShow] = useState<boolean>(false);
    const [password, setPassword] = useState<string>("");
  return (
    <Stack spacing={4}>
        <Stack spacing={2} direction={"row"}>
            <TextField label="Name" variant="outlined"/>
            <TextField label="Name" variant="filled"/>
            <TextField label="Name" variant="standard"/>
        </Stack>
        <Stack spacing={2} direction={"row"}>
            <TextField label="Small" variant="outlined" size="small" color="secondary"/>
            <TextField label="Medium" variant="filled" size="medium" color="success"/>
        </Stack>
        <Stack spacing={2} direction={"row"}>
            <TextField label="Email" size="small" required/>
            <TextField label="Password" type="password" size="small" required helperText="Do not share!"/>
        </Stack>
        <Stack spacing={2} direction={"row"}>
            <TextField label="Disabled" size="small" disabled/>
            <TextField label="Read Only" size="small" InputProps={{readOnly:true}}/>
        </Stack>
        <Stack spacing={2} direction={"row"}>
            <TextField label="Amount" size="small"  InputProps={{startAdornment:<InputAdornment position="start">$</InputAdornment>}} />
            <TextField label="Weight" size="small" InputProps={{endAdornment:<InputAdornment position="end">kg</InputAdornment>}}/>
            <TextField label="Password" type={show ? `text` : `password`} size="small" 
            value={password} onChange={(event:React.ChangeEvent<HTMLInputElement>)=>{setPassword(event.target.value)}} 
            error={!password} helperText={!password ? `Requried` : `Do not share!`}
            InputProps={{endAdornment:<InputAdornment position="end">
            <IconButton aria-label="eye icon" onClick={()=>{setShow(!show)}}>
                {show ? <VisibilityOffIcon/> : <VisibilityIcon/>}</IconButton>
            </InputAdornment>}}/>
        </Stack>
    </Stack>
  )
}
