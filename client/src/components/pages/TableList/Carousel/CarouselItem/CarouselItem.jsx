import React from "react";
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import defaultImg from "../../../../../img/casino/default.jpg";

const CarouselItem = ({ label, price, description, highlighted_text, src }) => {
    return (
        <div style={{ backgroundImage: `url(${src})` }} className="carousel-item">
            <Container>
                <div className="carousel-item-content">
                    <h3 className="text-heder">{label}</h3>
                    <p className="text-description">{description}</p>
                    <Box sx={{display: "flex", justifyContent: "space-between"}}>
                        {price && <p className="text-heder__small">Price: {price}</p>}
                        {highlighted_text && <p className="text-heder__small text__selected">{highlighted_text}</p>}
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between", marginTop:20 }}>
                        <Button variant="contained" sx={{width:200}}>Register for game</Button>
                        <Button variant="contained" sx={{ width: 200 }}>Learn more</Button>
                    </Box>
                </div>
            </Container>
        </div>
    )
}

CarouselItem.defaultProps = {
    label: "Game",
    description: "Play in good game",
    src: defaultImg
}

export default CarouselItem;