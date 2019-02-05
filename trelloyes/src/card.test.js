import React from 'react'; 
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './card.js'; 

describe('Card component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Card key={1} title={'first card'} content={'lorem ipsum'}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
}); 

it('renders the UI as expected', () => {
    const tree = renderer
    .create(<Card key={1} title={'First List'} content={'test'}/>)
    .toJSON();
    expect(tree).toMatchSnapshot();  
});