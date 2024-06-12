import React, {useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import NewsItem from './NewsItem';
import Loader from './Loader';
import InfiniteScroll from 'react-infinite-scroll-component';


// const Home = ()=> {
//     const[articles, setartical] = useState ([]);
//     const[loading, setloading] = useState (false);
//     const [page, setPage] = useState(1);
//     const [totalResults, setTotalResults] = useState(0);
 
//     // constructor(props) {
//     //     super(props);
//     //     this.state = {
//     //         articles: [],
//     //         loading: false,
//     //         page: 1,
//     //         totalResults: 0
//     //     }
//     // }

//     const dataloadfn= async ()=> {
//         props.setProgress(10);
//         const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
//         setloading(true)
//         const data = await fetch(url);
//         props.setProgress(30);
//         let parsedData = await data.json()
//         props.setProgress(70);
//         setartical(parsedData.articles);
//         setTotalResults(parsedData.totalResults)
//         setloading(false)
//         // this.setState({
//         //     articles: parsedData.articles,
//         //     totalResults: parsedData.totalResults,
//         //     loading: false
//         // })
//         props.setProgress(100);
//     }

//     useEffect(() => {
//         dataloadfn(page);
//     }, [page]);
//     // async componentDidMount() {
//     //     this.dataloadfn();
//     //     // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=ac9358b4233a4676954f1ea6674f9a28&page=1&pageSize=${props.pageSize}`;
//     //     // this.setState({loading: true});
//     //     // let data = await fetch(url);
//     //     // let parsedData = await data.json()
//     //     // this.setState({
//     //     //     articles: parsedData.articles, 
//     //     //     totalResults: parsedData.totalResults,        
//     //     //     loading: false
//     //     // })
//     // }

//     const backpage = async ()=>{
//         setPage(page - 1)
//         dataloadfn();
//         // this.setState({
//         //     page: this.state.page - 1
//         // });
//         //    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=ac9358b4233a4676954f1ea6674f9a28&page=${this.state.page - 1}&pageSize=${props.pageSize}`;
//         //    this.setState({loading: true});
//         //    let data = await fetch(url);
//         //     let parsedData = await data.json()
//         //     this.setState({ 
//         //         page: this.state.page - 1,
//         //         articles: parsedData.articles,
//         //         loading: false
//         //     })
//     }

//     const nextpage = async () => {
//         // if (!(this.state.page + 1 > Math.ceil (this.state.totalResults/props.pageSize))){
//         //     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=ac9358b4233a4676954f1ea6674f9a28&page=${this.state.page + 1}&pageSize=${props.pageSize}`;
//         //     this.setState({loading: true});
//         //     let data = await fetch(url);
//         //     let parsedData = await data.json()
//         //     this.setState({
//         //         page: this.state.page + 1,
//         //         articles: parsedData.articles,
//         //         loading: false
//         // })
//         // }
//         // else
//         // {
//         // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=ac9358b4233a4676954f1ea6674f9a28&page=${this.state.page + 1}&pageSize=${props.pageSize}`;
//         // let data = await fetch(url);
//         // let parsedData = await data.json()
//         // this.setState({
//         //     page: this.state.page + 1,
//         //     articles: parsedData.articles
//         // })
//         // }

//         // this.setState({
//         //     page: this.state.page + 1
//         // });
//         setPage(page+1)
//         dataloadfn();
//     }

//     const fetchMoreData = async () => {
//         // this.setState({
//         //     page: this.state.page + 1
//         // });
//         setPage(page+1)
//         const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;

//         let data = await fetch(url);
//         let parsedData = await data.json()
//         setartical(articles.concat(parsedData.articles))
//         setTotalResults(parsedData.totalResults)
//         // this.setState({
//         //     articles: articles.concat(parsedData.articles),
//         //     totalResults: parsedData.totalResults,
//         //     loading: false
//         // })
//     };

    
//         return (
//             <>
//                 <div className="container nm-cm">
//                     <h2 className="container my-3 taxt-center layer-d" style={{ margin: '40px 0pc', justifyContent: 'center' }}>This is A News Page</h2>
//                     {loading && <Loader />}

//                     <InfiniteScroll
//                         dataLength={articles ? articles.length : 0}
//                         next={fetchMoreData}
//                         hasMore={articles && articles.length !== totalResults}
//                         loader={loading && <Loader />}
//                     >
//                         <div className="container">
//                             <div className="row">
//                                 {articles && articles.map((element) => {
//                                     return <div className="col-md-3" key={element.url}>
//                                         <NewsItem
//                                             titel={element.title ? element.title.slice(0, 45) : ""}
//                                             description={element.description ? element.description.slice(0, 45) : ""}
//                                             imageurl={element.urlToImage ? element.urlToImage : ""}
//                                             newsUrl={element.url}
//                                             author={element.author}
//                                             date={element.publishedAt}
//                                             source={element.source.name} />
//                                     </div>
//                                 })}

//                             </div>
//                         </div>
//                     </InfiniteScroll>
//                 </div>
//             </>
//         )
    
// }

// Home.defaultProps = {
//     country: 'in',
//     pageSize: 8,
//     category: 'ganeral',

// }

// Home.propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string,
    
// }

// export 


const Home = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const dataloadfn = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        const data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(70);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100);
    };

    useEffect(() => {
        dataloadfn();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    const backpage = async () => {
        setPage(page - 1);
    };

    const nextpage = async () => {
        setPage(page + 1);
    };

    const fetchMoreData = async () => {
        const nextPage = page + 1;
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${nextPage}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
        setLoading(false);
    };

    return (
        <>
            <div className="container nm-cm">
                <h2 className="container my-3 text-center layer-d" style={{ margin: '40px 0px', justifyContent: 'center' }}>This is A News Page</h2>
                {loading && <Loader />}

                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Loader />}
                >
                    <div className="container">
                        <div className="row">
                            {articles.map((element) => (
                                <div className="col-md-3" key={element.url}>
                                    <NewsItem
                                        title={element.title ? element.title.slice(0, 45) : ""}
                                        description={element.description ? element.description.slice(0, 45) : ""}
                                        imageurl={element.urlToImage || ""}
                                        newsUrl={element.url}
                                        author={element.author}
                                        date={element.publishedAt}
                                        source={element.source.name}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </InfiniteScroll>
            </div>
        </>
    );
};

Home.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
};

Home.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    setProgress: PropTypes.func.isRequired,
    apikey: PropTypes.string.isRequired,
};

export default Home;
