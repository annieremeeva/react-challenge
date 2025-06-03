import React, {useState} from 'react';

function ColorPicker() {
    const [color, setColor] = useState('#ffffff')
    const initialRecentColors = [];
    const [recentColors, setRecentColors] = useState(initialRecentColors);
    const handleRecentColors = () => {
        if (recentColors[0] !== color) {
        setRecentColors( recentColors.length < 10  ? [color, ...recentColors] :[color, ...recentColors].slice(0, -1) );
        }
    }
    return (
        <div className="color-picker">
            <h2>3. Color Picker</h2>
            <div className="color-picker__main-color">
                <label className="color-picker__main-color">
                    <input className="color-picker__input" value={color} onBlur={handleRecentColors} onChange={(e) => setColor(e.target.value)} type="color"/>
                    <p>{color}</p>
                </label>
                <div className="color-picker__color-swatch" style={{backgroundColor: `${color}`}}></div>
            </div>
            <div className="color-picker__recent-colors">
                {recentColors.map((color, index) => (
                    <div key={index}>
                        <div style={{backgroundColor: `${color}`}} className="color-picker__color-swatch"></div>
                        {/*<p className="color-picker__color-name">{color}</p>*/}
                    </div>
                ))}
            </div>

        </div>
    );
}

export default ColorPicker;