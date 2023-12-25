import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material"
import FileCopyOutlinedIcon from "@mui/icons-material/FileCopyOutlined";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

export const MUISpeedDial = () => {
  return (
    <SpeedDial ariaLabel="navigation speed dial" sx={{ position: "absolute", bottom: 16, right: 16 }}
    icon={<SpeedDialIcon openIcon={<EditOutlinedIcon/>}/>}
    >
      <SpeedDialAction icon={<FileCopyOutlinedIcon/>} tooltipTitle="copy" tooltipOpen/>
      <SpeedDialAction icon={<PrintIcon/>} tooltipTitle="print" tooltipOpen/>
      <SpeedDialAction icon={<ShareIcon/>} tooltipTitle="share" tooltipOpen/>
    </SpeedDial>
  )
}
