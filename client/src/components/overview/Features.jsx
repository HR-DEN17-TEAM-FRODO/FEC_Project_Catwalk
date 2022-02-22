/* eslint-disable react/jsx-one-expression-per-line */
import React, { useContext } from 'react';
import { AppContext } from '../../Context';

export default function Features() {
  const { currentProduct } = useContext(AppContext);
  if (currentProduct.features !== undefined) {
    return (currentProduct.features.map((feature) => (
      <div key={Math.random() * 1000}>
        ✓ {feature.feature} : {feature.value}
      </div>
    )));
  }
  return (null);
}
