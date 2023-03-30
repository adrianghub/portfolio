export default function Head({ params }: { params: { slug: string } }) {
  return <title>{`${params.slug} | Blog | Adrian Zinko`}</title>;
}
