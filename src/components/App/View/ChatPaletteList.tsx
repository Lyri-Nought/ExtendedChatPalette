import React, { useContext } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { DataContext } from "../../../providers/App/DataProvider"

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    focusIndex: number;
}
function TabPanel(props: TabPanelProps) {
    const { children, focusIndex, index, ...other } = props;

    return (
        <div
        role="tabpanel"
        hidden={focusIndex !== index}
        id={`tabpanel-view-${index}`}
        aria-labelledby={`tab-view-${index}`}
        style={{
            maxWidth: "600px",
        }}
        {...other}
        >
        {focusIndex === index && (
            <Box>
                <Typography>{children}</Typography>
            </Box>
        )}
        </div>
    );
}

export default function ChatPaletteList({focusIndex}: {focusIndex: number}) {
    const [chatPalettes, setChatPalettes] = useContext(DataContext) || [];

    React.useEffect(()=>{
        console.log(chatPalettes)
    },[])

    return (
        <div>
            {chatPalettes?.map((paletteList, index) => (
                <TabPanel focusIndex={focusIndex} index={index}>
                    <div>{JSON.stringify(paletteList)}</div>
                    {/* {paletteList?.map((data, index) => (
                        <div>{data.characterName}:{data.messages}</div>
                    ))} */}
                </TabPanel>
            ))}
        </div>
    );
}