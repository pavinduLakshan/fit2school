import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { Heading, Button } from "@chakra-ui/react"
import IntecsLogo from 'public/intecs_logo.png'
import UomLogo from '../public/uom_logo.png'
import Layout from "components/layout"
import Card from '../components/card'
import fs from 'fs'
import matter from 'gray-matter'
import { ArticleMeta } from '../interfaces/article'
import { FunctionComponent } from 'react'

interface IProps {
    articles: ArticleMeta[];
}

const Home: FunctionComponent<IProps> = ({ articles }) => {

    return (
      <Layout>
        <div className={styles.container}>
        <div className={styles.intro}>
            <div className={styles.imageCont}>
            <Image src={UomLogo} width="145" height="145" alt="Picture of the author" />
        <Image src={IntecsLogo} width="90" height="40" alt="Picture of the author" />
            </div>
        
        <div className={styles.intro_text}>
            <Heading as="h1" size="4xl" style={{WebkitTextStroke: "2px white", marginLeft: "-0.5%"}}>Fit2School</Heading>
            <Heading as="h3" size="md" style={{color: "white",marginTop: "1%"}}>We open the door for the future IT masterminds</Heading>
            <Button style={{marginTop: "1.5%"}} colorScheme="teal" size="lg">Explore catalog</Button>
        </div>

        </div>
          
          {articles.map((article, i) => (
            <Card key={i} article={article} />
          ))}
        </div>
      </Layout>
    );
}

export async function getStaticProps() {
    const files = fs.readdirSync("content");
    
    let articles = files.map(file => {
        const data = fs
            .readFileSync(`content/${file}`)
            .toString();

        return {
            ...matter(data).data,
            slug: file.split('.')[0]
        };
    });

    return {
        props: {
            articles: articles
        }
    };
}

export default Home;