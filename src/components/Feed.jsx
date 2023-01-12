/** @format */

import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Sidebar from "./Sidebar";

const Feed = () => {
    return (
        <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
            <Box
                sx={{
                    height: { sx: "auto", md: "92vh" },
                    borderRight: "1px solid #3d3d3d",
                    px: { sx: 0, md: 2 },
                }}
            >
                <Sidebar />
                <Typography
                    className="copyright"
                    sx={{ mt: 1.5, color: "#fff" }}
                >
                    &copy; 2023. Wie Kiang Hi. All rights reserved.
                </Typography>
            </Box>
        </Stack>
    );
};

export default Feed;
