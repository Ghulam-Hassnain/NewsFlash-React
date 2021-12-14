import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import Spinner from "./Spinner";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    const [articles, setArticles] = useState([]);
    // eslint-disable-next-line
    const [loader, setLoader] = useState(false);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    console.log("this is a constructor function");

    const updateNews = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoader(true);
        // setState({ loader: true });
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(70);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoader(false);
        // setState({
        //     articles: parsedData.articles,
        //     totalResults: parsedData.totalResults,
        //     loader: false,
        // })
        props.setProgress(100);
    }
    useEffect(() => {
        document.title = `${capitalize(props.category)} - NewsFlash`;
        updateNews();
        // eslint-disable-next-line
    }, [])
    // async componentDidMount() {
    // const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${state.page}&pageSize=${props.pageSize}`;
    // setState({ loader: true })
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);
    // setState({
    //     articles: parsedData.articles,
    //     totalResults: parsedData.totalResults,
    //     loader: false
    // })
    // }
    const fetchMoreData = async () => {
        // setState({ page: state.page + 1 })
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        setPage(page + 1);
        setLoader(true);
        // setState({ loader: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
        setLoader(false);
        // setState({
        //     articles: state.articles.concat(parsedData.articles),
        //     totalResults: parsedData.totalResults,
        //     loader: false,
        // })
    }
    // previousClickBtn = async () => {
    //     setState({ page: state.page - 1 });
    //     updateNews();
    // const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${state.page - 1}&pageSize=${props.pageSize}`;
    // setState({ loader: true })
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // setState({
    //     articles: parsedData.articles,
    //     page: state.page - 1,
    //     loader: false
    // })
    // console.log(parsedData);
    // console.log(state.page);
    // console.log("previous");
    // }
    // nextClickBtn = async () => {
    //     setState({ page: state.page + 1 });
    //     updateNews();
    // console.log(state.totalResults);
    // const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${state.page + 1}&pageSize=${props.pageSize}`;
    // setState({ loader: true })
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // setState({
    //     articles: parsedData.articles,
    //     page: state.page + 1,
    //     loader: false
    // })
    // console.log(parsedData);
    // console.log(state.page)
    // console.log("next")
    // }
    return (
        <>
            <h2 style={{ margin: "95px 0 30px 0" }} className="text-center">NewsFlash - {capitalize(props.category)} - Top Headlines</h2>
            {/* {state.loader && <Spinner />} */}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container">
                    <div className="row">
                        {articles.map((element) => {
                            return (<div key={element.url} className="col-4">
                                <NewsItem title={element.title} description={element.description ? element.description : "To Read Description About This News Click On Read More"} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} dataAndTime={element.publishedAt} source={element.source.name} />
                            </div>)
                        })}
                        {/* <div className="row mt-5">
                        <div className="col d-flex justify-content-between">
                            <input disabled={state.page <= 1} className="btn btn-primary" onClick={previousClickBtn} type="button" value="&larr; Previous" />
                            <input disabled={(props.pageSize * state.page) >= state.totalResults} className="btn btn-primary" onClick={nextClickBtn} type="button" value="Next &rarr;" />
                        </div>
                    </div> */}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
}

News.defaultProps = {
    country: "us",
    category: "general",
    pageSize: 15
}
News.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number
}
export default News;
