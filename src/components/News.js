import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PlaceHolder from './PlaceHolder';

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        }
    }

    async componentDidMount() {
        let pageNum = this.state.page;
        let url = "https://newsapi.org/v2/top-headlines?apiKey=f43b3fbb9132457699fec997e391b632&category=science&category=technology&pageSize=16&country=us&page=" + pageNum;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, loading: true, totalResults: parsedData.totalResults });
    }

    handlePrevNextClick = async (isNext) => {
        let pageNum = isNext ? this.state.page + 1 : this.state.page - 1;
        let url = "https://newsapi.org/v2/top-headlines?apiKey=f43b3fbb9132457699fec997e391b632&category=science&category=technology&pageSize=16&country=us&page=" + pageNum;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, loading: true, totalResults: parsedData.totalResults, page: pageNum });
    }

    render() {
        return (
            <div className='container my-3'>
                <h2>NewsMonkey Top HeadLines</h2>
                <div className='row'>
                    {this.state.loading ? this.state.articles.map((element) => {
                        return <div className='col md-4' key={element.url}>
                            <NewsItem title={element.title !== null && element.title.length > 45 ? element.title.slice(0, 45) + "..." : element.title}
                                description={element.description !== null && element.description.length > 88 ? element.description.slice(0, 88) + "..." : element.description}
                                imageUrl={element.urlToImage}
                                newsUrl={element.url} />
                        </div>
                    }) : <div className='row'>
                        <div className='col md-4'>
                            <PlaceHolder />
                        </div>
                        <div className='col md-4'>
                            <PlaceHolder />
                        </div>
                        <div className='col md-4'>
                            <PlaceHolder />
                        </div>
                        <div className='col md-4'>
                            <PlaceHolder />
                        </div>
                    </div>}
                </div>
                <div className="container d-flex justify-content-between">
                    <button type="button" className="btn btn-dark" onClick={() => this.handlePrevNextClick(false)} style={{ display: this.state.page === 1 ? "none" : "block" }}><span>&#8592;</span> Previous Page</button>
                    <button type="button" className="btn btn-dark" onClick={() => this.handlePrevNextClick(true)} style={{ display: this.state.page * 16 < this.state.totalResults ? "block" : "none" }}>Next Page <span>&#8594;</span></button>
                </div>
            </div>
        )
    }
}

export default News 