import React from "react";

const MetaTags = () => {
  return (
    <>
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="This webapp provides the list of all types of Hollywood movies and their information.Also you can add movies to your favourite playlist."
      />
      <meta
        property="og:description"
        content="This webapp provides the list of all types of Hollywood movies and their information.Also you can add movies to your favourite playlist."
      />
      <meta property="og:image" content="/Image.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="MovieMind" />
      <meta
        name="twitter:description"
        content="This webapp provides the list of all types of Hollywood movies and their information.Also you can add movies to your favourite playlist."
      />
      <meta name="twitter:image" content="/Image.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="600" />
      <meta name="twitter:creator" content="Sidddabdullah" />
      <meta name="linkedin:card" content="summary_large_image" />
      <meta name="linkedin:title" content="MovieMind" />
      <meta
        name="linkedin:description"
        content="This webapp provides the list of all types of Hollywood movies and their information.Also you can add movies to your favourite playlist."
      />
      <meta name="linkedin:image" content="/Image.jpg" />
    </>
  );
};

export default MetaTags;
