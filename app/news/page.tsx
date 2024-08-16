import { getNewsList } from "@/app/_libs/microcms";
import NewsList from "@/app/_components/NewsList";
import Pagination from "@/app/_components/Pagination";
import SearchField from "@/app/_components/SearchField";

export default async function Page(){
    const { contents: news, totalCount} = await getNewsList();
    return (
        <>
            <SearchField />
            <NewsList news={news} />
            <Pagination totalCount={totalCount} />
        </>
    );
}