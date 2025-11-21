import React from 'react'
import { blogData } from '../data/data'
import { Link } from 'react-router-dom'
import { BsCalendar2, BsEyeFill } from 'react-icons/bs'

export default function BlogOne() {
  return (
    <div className="row align-items-center justify-content-center g-4">
        {blogData.slice(0,3).map((item,index)=>{
            return(
                <div className="col-xl-4 col-lg-4 col-md-6" key={index}>
                    <div className="card rounded-4 shadow-sm h-100">
                        <Link href="#" className="d-block bg-gradient rounded-top">
                            <img className="card-img-top hover-fade-out" src={item.image} alt="blog image"/>
                        </Link>
                        <div className="card-body">
                            <Link to={`/blog-detail/${item.id}`}><h4 className="fw-medium fs-5 lh-base mb-3">{item.title}</h4></Link>
                            <p>{item.desc}</p>
                            <div className="d-flex align-items-center justify-content-start mt-4">
                                <Link to="#" className="badge badge-primary rounded-pill">Continue Reading</Link>
                            </div>
                        </div>
                        <div className="card-footer bg-white d-flex justify-content-between align-items-center py-3">
                            <Link to="#" className="text-dark fw-medium text-md d-flex align-items-center"><BsCalendar2 className="me-2"/>{item.date}</Link>
                            <div className="text-muted text-md d-flex align-items-center"><BsEyeFill className="me-2"/>{item.views}</div>
                        </div>
                    </div>
                </div>
            )
        })}
    </div>
  )
}
