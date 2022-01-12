// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderParticipant } from '../render-utils.js';

const test = QUnit.test;

test('renderParticipant(participant) takes a participant object and returns DOM elements - a p tag with a class and text content that includes a name and age', (expect) => {
    //Arrange

    const participant = {
        name: 'Bob',
        age: 40,
        workshop_id: 1,
    };
    // Set up your arguments and expectations
    const expected = '<p class="participant">Bob - Age: 40</p>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderParticipant(participant);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected, 'renderParticipant(participant) took in a participant object and retured a P tag with class participant and text content of Bob - Age: 40');
});
