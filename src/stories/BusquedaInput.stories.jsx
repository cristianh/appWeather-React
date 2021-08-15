import React from 'react';

import { BusquedaInput } from '../Components/BusquedaInput';


export default {
    component:BusquedaInput,
    title:'Components/BusquedaInput',
}

const Template = (args) => <BusquedaInput {...args}/>;

export const Prueba = () => Template.bind({});

Prueba.args = {
    label: 'Button'
};
