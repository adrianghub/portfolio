import Link from "next/link";

interface HeaderProps {}

const categories = [
  { name: "React", slug: "react" },
  { name: "Security", slug: "security" },
];

const Header = ({}: HeaderProps) => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-gray-300 py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-2xl lg:text-4xl">
              Software Developer | Blog
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
