import classNames from 'classnames';
import styles from './layout.module.scss';
import { Chart } from '../chart/chart';

export interface LayoutProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const Layout = ({ className }: LayoutProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Chart img="https://nivo.rocks/static/chord-6892870901033703cc9c2a2391b609ed.png" />
            <Chart img="https://nivo.rocks/static/chord-6892870901033703cc9c2a2391b609ed.png" />
            <Chart img="https://nivo.rocks/static/chord-6892870901033703cc9c2a2391b609ed.png" />
            <Chart img="https://nivo.rocks/static/chord-6892870901033703cc9c2a2391b609ed.png" />
            <Chart img="https://nivo.rocks/static/chord-6892870901033703cc9c2a2391b609ed.png" />
            <Chart img="https://nivo.rocks/static/chord-6892870901033703cc9c2a2391b609ed.png" />
        </div>
    );
};
