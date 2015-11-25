'use strict';

let assert = require('assert');

let React = require('react');
let ReactTestUtils = require('react-addons-test-utils');

describe('Testing my div', function() {

  let VeryFirstDiv = require('../components/component.jsx');
  let renderer = ReactTestUtils.createRenderer();
  let myDiv;


  beforeEach(function() {
    renderer.render(<VeryFirstDiv />);
    myDiv = renderer.getRenderOutput();

  });

  it('should render div component with class equals to veryFirstDiv', function() {

    assert.equal(myDiv.type, 'div');
    assert.equal(myDiv.props.className, 'veryFirstDiv');
  });

  it('should contain span with text: Lovely! Here it is - my very first React component!', function() {

    const innerSpan = myDiv.props.children;

    assert.equal(innerSpan.type, 'span');
    assert.equal(innerSpan.props.children, 'Lovely! Here it is - my very first React component!');
  });
});