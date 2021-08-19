import React, { useEffect, useState } from 'react';

export const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector('title');
    htmlTitle.innerText = `너 자신을 알라, ala - ${title}`;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};
export const useMetaTegs = (TitleofMetaTegs) => {
  const [metaTegs, setMetaTegs] = useState(TitleofMetaTegs);
  const updateMetaTags = () => {
    document.querySelector('meta[property="og:description"]').setAttribute('content', TitleofMetaTegs);
    document.querySelector('meta[property="og:url"]').setAttribute('content', window.location.href);
  };

  useEffect(updateMetaTags, [metaTegs]);
  return setMetaTegs;
};
