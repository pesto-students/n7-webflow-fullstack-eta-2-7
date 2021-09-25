import React from 'react';
import HtmlElement from './HtmlElement';

export default function HtmlElements({ elements }) {
  return (
    <>
      {elements?.map((element) => <HtmlElement {...element} />)}
    </>
  );
}
