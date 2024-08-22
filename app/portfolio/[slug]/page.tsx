import { notFound } from "next/navigation";
import { getPortfolioDetail } from "@/app/_libs/microcms";
import PortfolioDetail from "@/app/_components/PortfolioDetail";
import ButtonLink from "@/app/_components/ButtonLink";
import styles from "./page.module.css";

type Props = {
    params: {
        slug: string;
    };
    searchParams: {
        dk?: string;
    };
};

export default async function Page({ params, searchParams }: Props) {
    const data = await getPortfolioDetail(params.slug, { draftKey: searchParams.dk }).catch(notFound);

    return (
        <>
            <PortfolioDetail data={data} />
            <div className={styles.footer}>
                <ButtonLink href="/portfolio">ポートフォリオ一覧へ</ButtonLink>
            </div>
        </>
    );
};