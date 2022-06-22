import React from "react";
import Article from "./Article"

function ArticleList({posts}){
    console.log(posts)
    const article = posts.map((art) => {
        return <Article
        key={art.id}
        title={art.title}
        date={art.date}
        preview={art.preview}
        />
    })
    return(
        <main>
            {article}
        </main>
    )
}


export default ArticleList;