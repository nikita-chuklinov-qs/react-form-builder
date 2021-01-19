import React from 'react';
import PATIENTS_FORM_DATA from '../form-configs/patients';
import { ReactFormGenerator } from '../index';

export default {
  title: 'FormBuilder/FormGenerator',
  component: ReactFormGenerator,
};

const Template = ({data}) => <ReactFormGenerator data={data} />;

export const PatientsForm = Template.bind({});
PatientsForm.args = {
    data: PATIENTS_FORM_DATA
}
