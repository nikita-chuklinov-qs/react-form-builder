import ReactDOM from 'react-dom';
import FormGenerator from './src/form';
import patients from './src/form-configs/patients'

const DG = window.DG || {};
DG.FormBuilder = {
    formConfigs: { patients },
    generate: ({container, ...args}) => 
        ReactDOM.render(<FormGenerator {...args} />, document.getElementById(container))
};
