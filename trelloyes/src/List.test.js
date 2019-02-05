import React from 'react'; 
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List.js';

describe('List component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List key={1} header={'First List'} 
            cards={[{id: '0', title: 'First card', content: 'lorem ipsum' }, 
            { id: '1', title: 'First card', content: 'lorem ipsum' }]}/>, div)
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
        const tree = renderer
        .create(<List key={1} header={'First List'} 
        cards={[{id: '0', title: 'First card', content: 'lorem ipsum' }, 
        { id: '1', title: 'First card', content: 'lorem ipsum' }]}/>)
        .toJSON();
        expect(tree).toMatchSnapshot();  
    });
}); 