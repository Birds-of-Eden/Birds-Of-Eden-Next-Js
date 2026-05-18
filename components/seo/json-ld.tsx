type JsonLdProps = {
  data: object;
  id?: string;
};

export function JsonLd({ data, id }: JsonLdProps) {
  // Server-render JSON-LD. Avoid `next/script` + client rendering which triggers
  // React warnings and isn't needed for structured data.
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return (
    <script id={id} type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
  );
}
