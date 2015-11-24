// Mocking window and document object:
require('./dom-mock')('<html><body></body></html>');

var jsdom = require('mocha-jsdom');
var assert = require('assert');
var React = require('react');
var TestUtils = require('react-addons-test-utils');

describe('Testing my div', function() {
  jsdom({ skipWindowCheck: true });

  it('should contain text: Lovely! Here it is - my very first React component!', function() {
    var VeryFirstDiv = require('../components/component.jsx');
    //var TestUtils = React.addons.TestUtils;


    var myDiv = TestUtils.renderIntoDocument(
      <VeryFirstDiv />
    );

    var divText = TestUtils.findRenderedDOMComponentWithTag(
      myDiv, 'span');

    assert.equal(divText.getDOMNode().textContent, 'Lovely! Here it is - my very first React component!');
  });
});