import React from 'react';

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        {props.headComponents}
        {/* Adding Tailwind CSS CDN link */}
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.0.3/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.postBodyComponents}
      </body>
    </html>
  );
}
