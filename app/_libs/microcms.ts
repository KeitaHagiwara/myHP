import {createClient} from "microcms-js-sdk";
import type {
    MicroCMSQueries,
    MicroCMSImage,
    MicroCMSListContent,
} from "microcms-js-sdk";

export type Business = {
    id: string;
    name: string;
    contents: string;
    image_path: string;
}

export type Portfolio = {
    serviceName: string;
    description: string;
    contents: string;
    thumbnail?: MicroCMSImage;
    url?: string;
    startedAt: string;
    terms?: string;
} & MicroCMSListContent;

export type Category = {
    name: string;
} & MicroCMSListContent;

export type News = {
    id: string;
    title: string;
    description: string;
    content: string;
    thumbnail?: MicroCMSImage;
    category: Category;
} & MicroCMSListContent;


if (!process.env.MICROCMS_SERVICE_DOMAIN) {
    throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
    throw new Error("MICROCMS_API_KEY is required");
}

const client = createClient({
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
})

export const getPortfolioList = async (queries?: MicroCMSQueries) => {
    const listData = await client.getList<Portfolio>({
        endpoint: "portfolio",
        queries,
    });
    return listData;
};

export const getNewsList = async (queries?: MicroCMSQueries) => {
    const listData = await client.getList<News>({
        endpoint: "news",
        queries,
    });
    return listData;
};

export const getNewsDetail = async (contentId: string, queries?: MicroCMSQueries) => {
    const detailData = await client.getListDetail<News>({
        endpoint: "news",
        contentId: contentId,
        queries,
        customRequestInit: {
            next: {
                revalidate: queries?.draftKey === undefined ? 60 : 0,
            },
        },
    });
    return detailData;
};

export const getCategoryDetail = async (contentId: string, queries?: MicroCMSQueries) => {
    const detailData = await client.getListDetail<Category>({
        endpoint: "categories",
        contentId,
        queries,
    });
    return detailData;
};