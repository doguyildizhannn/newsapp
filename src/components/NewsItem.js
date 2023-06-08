import React, { Component } from 'react'

//CLASS BASED
// export class NewsItem extends Component {
//     render() {
//         let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
//         return (
//             <div className="my-3">
//                 <div className="card" style={{ width: "23rem" }}>
//                     <img src={!imageUrl ? "https://cff2.earth.com/uploads/2023/05/28121353/Thin-air-scaled.jpg" : imageUrl} className="card-img-top" alt="..." /*width={250} height={200}*/ />
//                     <div className="card-body">
//                         <h5 className="card-title">{title}</h5>
//                         <p className="card-text">{description}</p>
//                         <p className="card-text"><small class="text-muted">{author}{date}</small></p>
//                         <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More <span class="badge bg-danger">{source}</span></a>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }
//
//FUNCTION BASED
const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div className="my-3">
            <div className="card" style={{ width: "23rem" }}>
                <img src={!imageUrl ? "https://cff2.earth.com/uploads/2023/05/28121353/Thin-air-scaled.jpg" : imageUrl} className="card-img-top" alt="..." /*width={250} height={200}*/ />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small class="text-muted">{author}{date}</small></p>
                    <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More <span class="badge bg-danger">{source}</span></a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem