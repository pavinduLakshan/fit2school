import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { Heading, Button, Flex } from "@chakra-ui/react"
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
            <Image src={UomLogo} width="120" height="120" alt="Picture of the author" />
        <Image src={IntecsLogo} width="90" height="40" alt="Picture of the author" />
            </div>
        
        <div className={styles.intro_text}>
            <Heading as="h1" size="4xl" style={{WebkitTextStroke: "2px white", marginLeft: "-0.5%"}}>Fit2School</Heading>
            <Heading as="h3" size="md" style={{color: "white",marginTop: "1%",marginBottom: "1%"}}>We open the door for the future IT masterminds</Heading>
            <Heading as="h5" width={["80%","40%","40%"]} size="sm" style={{color: "white",lineHeight: 1.5}}>
                A community project by the students and the alumni of the Faculty of Information Technology, University of Moratuwa to make IT knowledge accessible
                in native languages to the Sri Lankans
           </Heading>
            
            <Button style={{marginTop: "1.5%"}} colorScheme="teal" size="lg">Explore catalog</Button>
        </div>

        </div>
          <div style={{display: "flex",flexDirection: "column",alignItems: "center",justifyContent: "center"}}>
            <Heading as="h3" style={{marginTop: "1%",marginBottom: "1%"}}>Latest posts</Heading>
            <div className={styles.articleCont}>
            {articles.map((article, i) => (
              <Card key={i} article={article} />
            ))}
            </div>
          </div>

          <div style={{paddingLeft: "2%",paddingTop: "1%",backgroundColor: "black",height: "40vh"}}>
          <Heading as="h1" size="lg" style={{WebkitTextStroke: "2px white", marginLeft: "-0.5%"}}>Fit2School</Heading>
          </div>
     
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