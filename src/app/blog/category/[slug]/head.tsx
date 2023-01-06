export default function Head({ params }: { params: { slug: string } }) {
  return (
    <>
      <title>{`${params.slug} | Category | Adrian Zinko`}</title>
      <meta name="viewport" content="width=device-width" />
    </>
  );
}
