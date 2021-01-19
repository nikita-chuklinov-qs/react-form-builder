import React from 'react';

import FormElements from '../form-elements'
import { ReactFormGenerator } from '../index';

export default {
  title: 'FormBuilder/FormElements',
  component: FormElements
};

const SAMPLE_DATA_EL = {"id":"C3921BEB-3500-40F7-AB02-E029AD26FAF5","element":"Label","text":"Label","static":true,"required":false,"bold":false,"italic":false,"content":"Placeholder Text...","canHavePageBreakBefore":true,"canHaveAlternateForm":true,"canHaveDisplayHorizontal":true,"canHaveOptionCorrect":true,"canHaveOptionValue":true,"canPopulateFromApi":true};
const Template = (args) => <ReactFormGenerator {...args} />;

export const Header = Template.bind({});
Header.args = {
  hide_actions: true,
  data: [{...SAMPLE_DATA_EL, element: 'Header', text: 'Header' }]
}

export const Label = Template.bind({});
Label.args = {
  hide_actions: true,
  data: [{...SAMPLE_DATA_EL, element: 'Label', text: 'Label' }]
}

export const TextInput = Template.bind({});
TextInput.args = {
  hide_actions: true,
  data: [{...SAMPLE_DATA_EL, element: 'TextInput', text: 'TextInput', label: 'Text Input' }]
}

