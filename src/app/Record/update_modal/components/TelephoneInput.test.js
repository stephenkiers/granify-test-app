import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import TelephoneInput from './TelephoneInput';

test('TelephoneInput displays correct', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(
        <TelephoneInput
            value="abc"
            id="def"
            onChange={() => {}}
            tab_index={1}
            label="Label"
        />
    );
    const tree = renderer.getRenderOutput()
    expect(tree).toMatchSnapshot();
});