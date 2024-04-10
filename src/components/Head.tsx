import { component$ } from '@builder.io/qwik';
import { useDocumentHead, useLocation } from '@builder.io/qwik-city';

// @ts-ignore
import iconWEBP from '~/images/logo.png?height=96&webp';

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();

  return (
    <>
      <title>{`MultiShock: ${head.title}`}</title>
      <link rel="canonical" href={loc.url.href} />
      <link rel="icon" href={iconWEBP} />
      <meta content={iconWEBP} property="og:image" />
      <meta content={`MultiShock: ${head.title}`} property="og:title"/>
      <meta content="#54a5da" name="theme-color"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {head.meta.map((m, i) => (
        <meta {...m} key={i} />
      ))}

      {head.links.map((l, i) => (
        <link {...l} key={i} />
      ))}

      {head.styles.map((s, i) => (
        <style {...s.props} key={i} dangerouslySetInnerHTML={s.style} />
      ))}
    </>
  );
});