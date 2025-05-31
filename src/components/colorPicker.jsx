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
        <div>
            <div>
                <input class="color-picker__input" value={color} onBlur={handleRecentColors} onChange={(e) => setColor(e.target.value)} type="color"/>

                {color}
            </div>
            {recentColors}
        </div>
    );
}

export default ColorPicker;