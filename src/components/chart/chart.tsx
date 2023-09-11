import Chart_module from './chart.module.scss';

export interface NewComponent3Props {
    className?: string;
    img: string;
}

export const Chart = ({ className, img }: NewComponent3Props) => {
    return (
        <div className={Chart_module.box}>
            <div className={Chart_module.imgContainer} style={{backgroundImage: `url(${img})`}}>
            </div>
            <span>
                <span>Chord Diagram</span>
            </span>
        </div>
    );
};
