import { type ProductWithDescriptionFragment } from "@/gql/graphql";
import { ProductDetailsDescription } from "@/ui/molecules/ProductDetailsDescription";
import { ProductDetailsHeader } from "@/ui/molecules/ProductDetailsHeader";

type ProductDetailsProps = {
	product: ProductWithDescriptionFragment;
};

export const ProductDetails = ({ product }: ProductDetailsProps) => {
	return (
		<>
			<ProductDetailsHeader product={product} />
			<hr className="border-brand-primary" />
			<ProductDetailsDescription product={product} />
		</>
	);
};
