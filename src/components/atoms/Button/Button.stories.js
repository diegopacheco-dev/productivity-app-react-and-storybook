import React from 'react';
import Button from './Button';
import Icon from '../Icon/Icon';

export default {
    title: 'Atoms/Button',
    component: Button,
}


export const Primary = () => <Button type="primary">Button primary</Button>

export const Secondary = () => <Button type="secondary">Button secondary</Button>
export const WithIcon = () => <Button type="secondary"><Icon type="right-arrow" /></Button>

export const Tertiary = () => <Button type="tertiary">Button tertiary</Button>
