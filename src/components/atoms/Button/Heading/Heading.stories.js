import React from 'react';
import Heading from './Heading';

export default {
    title: "Atoms/Heading",
    component: Heading
}

export const Default = () => <Heading children="Title"/>

export const ColorPrimary = () => <Heading children="Title" color="primary"/>


export const Medium = () => <Heading children="Title" color="primary" size="md"/>

export const Small = () => <Heading children="Title" color="primary" size="sm"/>

export const ExtraSmall = () => <Heading children="Title" color="primary" size="xs"/>