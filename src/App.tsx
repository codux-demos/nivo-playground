import { useState } from 'react';
import styles from './App.module.scss';
import { ResponsiveChord } from '@nivo/chord';

const data = [
    [71, 456, 895, 97, 290],
    [1873, 419, 83, 357, 896],
    [58, 298, 444, 200, 97],
    [317, 133, 330, 366, 97],
    [34, 59, 268, 104, 102],
];
function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.App}>
            <ResponsiveChord
                data={data}
                keys={['John', 'Raoul', 'Jane', 'Marcel', 'Ibrahim']}
                valueFormat=".2f"
                padAngle={0.02}
                innerRadiusRatio={0.96}
                innerRadiusOffset={0.02}
                inactiveArcOpacity={0.25}
                arcBorderColor={{
                    from: 'color',
                    modifiers: [['darker', 0.6]],
                }}
                activeRibbonOpacity={0.75}
                inactiveRibbonOpacity={0.25}
                ribbonBorderColor={{
                    from: 'color',
                    modifiers: [['darker', 0.6]],
                }}
                labelRotation={-90}
                labelTextColor={{
                    from: 'color',
                    modifiers: [['darker', 1]],
                }}
                colors={{ scheme: 'nivo' }}
                motionConfig="stiff"
            />
        </div>
    );
}

export default App;
