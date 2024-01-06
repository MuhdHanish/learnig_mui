import { Avatar, Stack } from '@mui/material'

export const MUIAvatar = () => {
  return (
    <Stack spacing={4}>
        <Stack direction={"row"} spacing={1}>
            <Avatar>BW</Avatar>
            <Avatar>PP</Avatar>
        </Stack>
    </Stack>
  )
}
