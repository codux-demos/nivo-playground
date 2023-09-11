import { createBoard } from '@wixc3/react-board';
import { Layout } from '../../../components/layout/layout';

export default createBoard({
    name: 'layout',
    Board: () => <Layout />,
    isSnippet: true,
});
