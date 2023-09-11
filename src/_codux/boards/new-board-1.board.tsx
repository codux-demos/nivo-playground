import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'New Board 1',
    Board: () => (
        <a className="hNNCfw" href="/pie/">
            <div className="fHlZAC"></div>
            <span className="fpiCZP">
                <span>Pie Chart</span>
                <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </span>
        </a>
    ),
    isSnippet: true,
});
