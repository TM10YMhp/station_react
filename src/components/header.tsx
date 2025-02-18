import { Link } from "react-router";
import { cx } from "../utils/cx";

export const Header = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >,
) => {
  const { className, ...restProps } = props;
  return (
    <div
      className={cx("flex justify-between items-center", className)}
      {...restProps}
    >
      <Link
        to="/"
        className="bg-zinc-900 rounded-full inline-flex justify-center items-center h-8 w-8"
      >
        <i className="nf nf-oct-chevron_left text-xl" />
      </Link>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/tm10ymhp"
        className="text-gray-200 hover:text-white"
      >
        <i className="nf nf-md-github text-2xl" />
      </a>
    </div>
  );
};
