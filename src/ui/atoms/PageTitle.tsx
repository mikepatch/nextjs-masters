type PageTitleProps = {
	title: string;
};

export const PageTitle = ({ title }: PageTitleProps) => {
	return <h1 className="text-4xl font-semibold text-font-dark">{title}</h1>;
};
