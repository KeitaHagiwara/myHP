import { getPortfolioList } from "../_libs/microcms";
import PortfolioList from "@/app/_components/PortfolioList";
import Pagination from "@/app/_components/Pagination";

export default async function Page() {
    const { contents: portfolio, totalCount } = await getPortfolioList();
    console.log({portfolio})
    return (
        <>
            <PortfolioList portfolio={portfolio} />
            <Pagination totalCount={totalCount} />
        </>
    );
}
