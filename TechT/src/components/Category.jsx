import { ArticleCard } from "."

const Category = ({title}) => {
    return (
        <div className="w-full">
            <p className="font-[Audiowide] text-6xl mt-10 text-center">{title}</p>
            <div className="grid grid-cols-3 gap-10 ml-auto mr-auto mt-10 w-[60%]">
                <ArticleCard title={"LORA Radio"} description={"An introduction to using the RYLR-896 LORA radio with either an Arduino or a Windows computer, including the initial connection, configuration, and sending messages."}></ArticleCard>
                <ArticleCard title={"MPU6050"} description={"Learn how to use the MPU6050 gyroscope & accelerometer module with an Arduino."}></ArticleCard>
                <ArticleCard title={"Adafruit Adalogger"} description={"An introduction to using the SD card reader to read and write from an SD card with the Adafruit Adalogger."}></ArticleCard>
                <ArticleCard title={"Ultimate GPS Module"} description={"How to use the Adafruit Ultimate GPS Module with an Arduino to get real-time location, altitude, speed, and direction."}></ArticleCard>
                <ArticleCard title={"Neopixel"} description={"Learn how to control Neopixel (WS2812B) LED's from an Arduino and create non-blocking animations."}></ArticleCard>
                <ArticleCard title={"OLED Display"} description={"Display text on an OLED display from an Arduino."}></ArticleCard>
                <ArticleCard title={"Brushless Motor Control"} description={"Control a Brushless motor from an Arduino with the use of an ESC."}></ArticleCard>
            </div>
        </div>
    )
}

export default Category