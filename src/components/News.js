// eslint-disable-next-line
import React, { Component, useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import PlaceHolder from './PlaceHolder';
import InfiniteScroll from 'react-infinite-scroll-component';
import LoadingBar from 'react-top-loading-bar'

//CLASS BASED
// export class News extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             articles: [],
//             loading: false,
//             page: 1,
//             totalResults: 0,
//             loadingBarProgress: 50
//         }
//         document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
//     }

//     capitalizeFirstLetter = (string) => {
//         return string.charAt(0).toUpperCase() + string.slice(1);
//     }

//     callApi = async (apiKey, pageNum) => {
//         let category = this.props.category !== null ? "&category=" + this.props.category : "";
//         let country = this.props.country !== null ? "&country=" + this.props.country : "&country=us";
//         let query = this.props.keyword !== null && this.props.keyword !== "" ? "&q=" + this.props.keyword : "";
//         let url = "https://newsapi.org/v2/top-headlines?apiKey=" + apiKey + query + category + "&pageSize=" + this.props.pageSize + country + "&page=" + pageNum;
//         let data = await fetch(url);
//         return await data.json()
//     }

//     async componentDidMount() {
//         let parsedData = null;
//         for (var i = 0; i < this.props.apiKeyList.length; i++) {
//             parsedData = await this.callApi(this.props.apiKeyList[i], this.state.page);
//             if (parsedData !== null && parsedData.status === "ok") {
//                 break;
//             }
//         }
//         this.setState({ articles: parsedData.articles === undefined || parsedData.articles === null ? null : parsedData.articles, loading: true, totalResults: parsedData.totalResults, loadingBarProgress: 100 });
//     }

//     // handlePrevNextClick = async (isNext) => {
//     //     this.setState({ loading: false });
//     //     let pageNum = isNext ? this.state.page + 1 : this.state.page - 1;
//     //     let parsedData = null;
//     //     for (var i = 0; i < this.props.apiKeyList.length; i++) {
//     //         parsedData = await this.callApi(this.props.apiKeyList[i], pageNum);
//     //         if (parsedData !== null && parsedData.status === "ok") {
//     //             break;
//     //         }
//     //     }
//     //     this.setState({ articles: parsedData.articles === undefined ? null : parsedData.articles, loading: true, totalResults: parsedData.totalResults, page: pageNum });
//     // }

//     handleScroll = async () => {
//         this.setState({ loading: false, loadingBarProgress: 50 });
//         let pageNum = this.state.page + 1;
//         let parsedData = null;
//         for (var i = 0; i < this.props.apiKeyList.length; i++) {
//             parsedData = await this.callApi(this.props.apiKeyList[i], pageNum);
//             if (parsedData !== null && parsedData.status === "ok") {
//                 break;
//             }
//         }
//         let newArr = this.state.articles;
//         newArr.push(...parsedData.articles);
//         this.setState({ articles: parsedData.articles === undefined ? null : newArr, loading: true, totalResults: parsedData.totalResults, page: pageNum, loadingBarProgress: 100 });
//     }

//     async componentDidUpdate(prevProps, prevState) {
//         if (prevProps.category !== this.props.category || prevProps.country !== this.props.country || prevProps.keyword !== this.props.keyword) {
//             this.setState({ loading: false, loadingBarProgress: 50 });
//             let pageNum = 1
//             let parsedData = null;
//             for (var i = 0; i < this.props.apiKeyList.length; i++) {
//                 parsedData = await this.callApi(this.props.apiKeyList[i], pageNum);
//                 if (parsedData !== null && parsedData.status === "ok") {
//                     break;
//                 }
//             }
//             this.setState({ articles: parsedData.articles === undefined ? null : parsedData.articles, loading: true, totalResults: parsedData.totalResults, page: pageNum, loadingBarProgress: 100 });
//             document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
//         }
//     }

//     render() {
//         return (
//             <div className='container my-3'>
//                 <LoadingBar
//                     color='#f11946'
//                     progress={this.state.loadingBarProgress}
//                     onLoaderFinished={() => this.setState({loadingBarProgress: 0})}
//                 />
//                 <h1 className="text-center" style={{ margin: "40px 0px" }}>NewsMonkey Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
//                 <div className='row' /*id="scrollableDiv"*/>
//                     <InfiniteScroll
//                         dataLength={this.state.articles.length}
//                         next={this.handleScroll}
//                         // inverse={false}
//                         hasMore={this.state.page * this.props.pageSize <= this.state.totalResults}
//                         // loader={<h4>Loading...</h4>}
//                         // scrollableTarget="scrollableDiv"
//                         /*endMessage={
//                             <p style={{ textAlign: 'center' }}>
//                                 <b>Yay! You have seen it all</b>
//                             </p>
//                         }*/
//                         style={{ display: 'flex', flexWrap: 'wrap' }}>
//                         {this.state.loading && this.state.articles !== null ?
//                             this.state.articles.map((element, index) => (
//                                 <div className='col' key={index}>
//                                     <NewsItem title={element.title !== null && element.title.length > 55 ? element.title.slice(0, 55) + "..." : element.title}
//                                         description={element.description !== null && element.description.length > 95 ? element.description.slice(0, 95) + "..." : element.description}
//                                         imageUrl={element.urlToImage}
//                                         newsUrl={element.url}
//                                         author={element.author !== null && element.author !== "" ? "By " + element.author : ""}
//                                         date={element.publishedAt !== null && element.publishedAt !== "" ? " On " + new Date(element.publishedAt).toGMTString() : ""}
//                                         source={element.source.name} />
//                                 </div>
//                             ))
//                             : <div className="row">
//                                 {[...Array(this.props.pageSize)].map((v, i) =>
//                                     <div className='col' key={i}>
//                                         <PlaceHolder />
//                                     </div>)}
//                             </div>}
//                     </InfiniteScroll>
//                 </div>
//                 {/* <div className="container d-flex justify-content-between">
//                     <button type="button" className="btn btn-dark" onClick={() => this.handlePrevNextClick(false)} style={{ display: this.state.page === 1 ? "none" : "block" }}><span>&#8592;</span> Previous Page</button>
//                     <button type="button" className="btn btn-dark" onClick={() => this.handlePrevNextClick(true)} style={{ display: this.state.page * this.props.pageSize < this.state.totalResults ? "block" : "none" }}>Next Page <span>&#8594;</span></button>
//                 </div> */}
//             </div>
//         )
//     }
// }
//
//FUNCTION BASED
const News = (props) => {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const [loadingBarProgress, setLoadingBarProgress] = useState(50);

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;

    const callApi = async (pageNum, fromScroll) => {
        setLoading(false);
        setLoadingBarProgress(50);
        let category = props.category !== null ? "&category=" + props.category : "";
        let country = props.country !== null ? "&country=" + props.country : "&country=us";
        let query = props.keyword !== null && props.keyword !== "" ? "&q=" + props.keyword : "";

        let parsedData = null;
        for (var i = 0; i < props.apiKeyList.length; i++) {
            let url = "https://newsapi.org/v2/top-headlines?apiKey=" + props.apiKeyList[i] + query + category + "&pageSize=" + props.pageSize + country + "&page=" + pageNum;
            let data = await fetch(url);
            parsedData = await data.json();
            if (parsedData !== null && parsedData.status === "ok") {
                break;
            }
        }
        if (parsedData !== null && parsedData.status === "ok") {
            if (parsedData.articles === undefined || parsedData.articles === null) setArticles(null);
            else {
                if (fromScroll) {
                    let newArr = articles;
                    newArr.push(...parsedData.articles);
                    setArticles(newArr);
                }
                else setArticles(parsedData.articles);
            }
            setLoading(true);
            setTotalResults(parsedData.totalResults);
            setLoadingBarProgress(100);
            setPage(pageNum);
            document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
        }
    }

    let isSubscribed = true;

    const handleScroll = async () => {
        if (isSubscribed) callApi(page + 1, true);
        isSubscribed = false;
    }

    useEffect(() => {
        if (isSubscribed) callApi(1, false); // eslint-disable-next-line
        isSubscribed = false;
    }, [props.category, props.country, props.keyword]);

    return (
        <div className='container my-3'>
            <LoadingBar
                color='#f11946'
                progress={loadingBarProgress}
                onLoaderFinished={() => setLoadingBarProgress(0)}
            />
            <h1 className="text-center" style={{ margin: "40px 0px", marginTop: "102px"}}>NewsMonkey Top {capitalizeFirstLetter(props.category)} Headlines</h1>
            <div className='row'>
                <InfiniteScroll
                    dataLength={articles.length}
                    next={handleScroll}
                    hasMore={page * props.pageSize <= totalResults}
                    style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {loading && articles !== null ?
                        articles.map((element, index) => (
                            <div className='col' key={index}>
                                <NewsItem title={element.title !== null && element.title.length > 55 ? element.title.slice(0, 55) + "..." : element.title}
                                    description={element.description !== null && element.description.length > 95 ? element.description.slice(0, 95) + "..." : element.description}
                                    imageUrl={element.urlToImage}
                                    newsUrl={element.url}
                                    author={element.author !== null && element.author !== "" ? "By " + element.author : ""}
                                    date={element.publishedAt !== null && element.publishedAt !== "" ? " On " + new Date(element.publishedAt).toGMTString() : ""}
                                    source={element.source.name} />
                            </div>
                        ))
                        : <div className="row">
                            {[...Array(props.pageSize)].map((v, i) =>
                                <div className='col' key={i}>
                                    <PlaceHolder />
                                </div>)}
                        </div>}
                </InfiniteScroll>
            </div>
        </div>
    )
}

export default News 