import React, {useState} from 'react';
import tinycolor from "tinycolor2";

function ColorPicker() {
    const [color, setColor] = useState('#ffffff')
    const initialRecentColors = [];
    const [recentColors, setRecentColors] = useState(initialRecentColors);
    const [convertedColor, setConvertedColor] = useState('#ffffff')
    const handleRecentColors = () => {
        if (recentColors[0] !== color) {
        setRecentColors( recentColors.length < 10  ? [color, ...recentColors] :[color, ...recentColors].slice(0, -1) );
        }
    }
    const handleConvertion = (color, system) => {
        let currentColor = tinycolor(color);
        if (system === "hex") {
            return (currentColor.toHexString())
        }
        if (system === "hsl") {
            return (currentColor.toHslString())
        }
        if (system === "rgb") {
            return (currentColor.toRgbString())
        }
    }
    return (
        <div className="color-picker">
            <h2>3. Color Picker</h2>
            <div className="color-picker__main-color">
                <label className="color-picker__main-color-choice">
                    <input className="color-picker__input" value={color} onBlur={handleRecentColors} onChange={(e) => setColor(e.target.value)} type="color"/>
                    <p>{color}</p>
                    <p>{handleConvertion(color, 'hsl')}</p>
                    <p>{handleConvertion(color, 'rgb')}</p>
                </label>
                <div className="color-picker__color-swatch" style={{backgroundColor: `${color}`}}></div>
            </div>
            <div className="color-picker__recent-colors">
                {recentColors.map((color, index) => (
                    <div key={index}>
                        <button style={{backgroundColor: `${color}`}} className="color-picker__color-swatch"></button>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default ColorPicker;