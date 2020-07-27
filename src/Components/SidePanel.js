import React, { useContext } from 'react';
import { Side, Description, ThumbnailContainer, Thumbnail, ThumbnailDescription, DescriptionIcon, CurrentTime, CurrentTemp, TempIcon } from '../style/Side'
import { faCloud } from '@fortawesome/free-solid-svg-icons'
import { WeatherContext } from '../Data'
import Input from './Input'

const SidePanel = () => {
    const { weatherCon } = useContext(WeatherContext)
    const [weather] = weatherCon
    const { city, country, icon, temp, main } = weather
    const date = new Date() + 1;
    const day = date.slice(0, 3)
    const hour = date.slice(16, 21)
    return (
        <Side>
            <Input />
            <TempIcon className={`owi owi-${icon}`} />

            <CurrentTemp color={temp > 15 ? "#e89700" : "#00d4db"}>{temp}&#176;<sup>c</sup></CurrentTemp>
            <CurrentTime>
                {day}, <span>{hour}</span>
            </CurrentTime>

            <Description>
                <DescriptionIcon icon={faCloud} color="#b1b1bd" />{main}
            </Description>



            <ThumbnailContainer>
                <Thumbnail src="https://q-cf.bstatic.com/images/hotel/max1024x768/236/236051720.jpg" alt="" />
                <ThumbnailDescription>{city}, {country}</ThumbnailDescription>
            </ThumbnailContainer>

        </Side>

    );
}

export default SidePanel;