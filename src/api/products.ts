import {
	ProductCategoriesGetListDocument,
	ProductGetByIdDocument,
	type ProductsGetListByCategorySlugQueryVariables,
	ProductsGetListDocument,
	type ProductsGetListQueryVariables,
	ProductsGetListByCategorySlugDocument,
	ProductsGetByQueryDocument,
} from "./../gql/graphql";
import { executeGraphQL } from "@/api/graphqlApi";

export const getAllProducts = async (variables?: ProductsGetListQueryVariables) => {
	return executeGraphQL({
		query: ProductsGetListDocument,
		variables: { ...variables },
		next: { revalidate: 60 * 60 * 24 },
	});
};

export const getProductById = async (id: string) => {
	return executeGraphQL({ query: ProductGetByIdDocument, variables: { id } });
};

export const getProductsByQuery = async (query: string) => {
	return executeGraphQL({ query: ProductsGetByQueryDocument, variables: { query } });
};

export const getProductsByCategorySlug = async (
	variables: ProductsGetListByCategorySlugQueryVariables,
) => {
	return executeGraphQL({
		query: ProductsGetListByCategorySlugDocument,
		variables: { ...variables },
		next: { revalidate: 60 * 60 * 24 },
	});
};

export const getAllCategories = async () => {
	return executeGraphQL({
		query: ProductCategoriesGetListDocument,
		next: { revalidate: 60 * 60 * 24 },
	});
};
