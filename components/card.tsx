import Link from "next/link";
import { FunctionComponent } from "react";
import { ArticleMeta } from "../interfaces/article";
import styles from "../styles/card.module.css";

interface IProps {
    article: ArticleMeta;
}

const Card: FunctionComponent<IProps> = ({ article }) => {
    return <Link href={`/article/${article.slug}`}>
        <div className={styles.card}>
            <div>
            <img src={article.thumbnail} height="150" width="150"/>
            </div>

            <div className={styles.info}>
                <h1>{article.title}</h1>
                <p>{article.description}</p>
            </div>
        </div>
    </Link>
}

export default Card;