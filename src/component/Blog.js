import React from "react";
import { Link } from "react-router-dom"


const Blog = () => {
    return (
        <div>
            <section className="global-page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="block">
                                <h2>Blog with right sidebar</h2>
                                <ol className="breadcrumb">
                                    <li>
                                        <Link to="/">
                                            <i className="ion-ios-home"></i>
                                            Home
                                        </Link>
                                    </li>
                                    <li className="active">Blog</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="blog-full-width">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <article className="wow fadeInDown" data-wow-delay=".3s" data-wow-duration="500ms">
                                <div className="blog-post-image">
                                    <Link to="/single-post"><img className="img-responsive" src="images/blog/post-1.jpg" alt="" /></Link>
                                </div>
                                <div className="blog-content">
                                    <h2 className="blogpost-title">
                                    <Link to="/single-post">Space shouldn’t be the final frontier</Link>
                                    </h2>
                                    <div className="blog-meta">
                                        <span>Dec 11, 2020</span>
                                        <span>by <a href="/">Admin</a></span>
                                        <span><a href="/">business</a>,<a href="/">people</a></span>
                                    </div>
                                    <p>Ultrices posuere cubilia curae curabitur sit amet tortor ut massa commodo. Vestibulum consectetur euismod malesuada tincidunt cum. Sed ullamcorper dignissim consectetur ut tincidunt eros sed sapien consectetur dictum. Pellentesques sed volutpat ante, cursus port. Praesent mi magna, penatibus et magniseget dis parturient montes sed quia consequuntur magni dolores eos qui ratione.
                                    </p>
                                    <Link to="/single-post" className="btn btn-dafault btn-details">Continue Reading</Link>
                                </div>
                                
                            </article>
                            <article className="wow fadeInDown" data-wow-delay=".5s" data-wow-duration="500ms">
                                <div className="blog-post-image">
                                    <Link to="/single-post"><img className="img-responsive" src="images/blog/post-2.jpg" alt="" /></Link>
                                </div>
                                <div className="blog-content">
                                    <h2 className="blogpost-title">
                                    <Link to="/single-post">Space shouldn’t be the final frontier</Link>
                                    </h2>
                                    <div className="blog-meta">
                                        <span>Dec 11, 2020</span>
                                        <span>by <a href="/">Admin</a></span>
                                        <span><a href="/">business</a>,<a href="/">people</a></span>
                                    </div>
                                    <p>Ultrices posuere cubilia curae curabitur sit amet tortor ut massa commodo. Vestibulum consectetur euismod malesuada tincidunt cum. Sed ullamcorper dignissim consectetur ut tincidunt eros sed sapien consectetur dictum. Pellentesques sed volutpat ante, cursus port. Praesent mi magna, penatibus et magniseget dis parturient montes sed quia consequuntur magni dolores eos qui ratione.
                                    </p>
                                    <Link to="/single-post" className="btn btn-dafault btn-details">Continue Reading</Link>
                                </div>
                                
                            </article>
                            <article className="wow fadeInDown" data-wow-delay=".7s" data-wow-duration="500ms">
                                <div className="blog-post-image">
                                    <Link to="/single-post"><img className="img-responsive" src="images/blog/post-3.jpg" alt="" /></Link>
                                </div>
                                <div className="blog-content">
                                    <h2 className="blogpost-title">
                                    <Link to="/single-post">Space shouldn’t be the final frontier</Link>
                                    </h2>
                                    <div className="blog-meta">
                                        <span>Dec 11, 2020</span>
                                        <span>by <a href="/">Admin</a></span>
                                        <span><a href="/">business</a>,<a href="/">people</a></span>
                                    </div>
                                    <p>Ultrices posuere cubilia curae curabitur sit amet tortor ut massa commodo. Vestibulum consectetur euismod malesuada tincidunt cum. Sed ullamcorper dignissim consectetur ut tincidunt eros sed sapien consectetur dictum. Pellentesques sed volutpat ante, cursus port. Praesent mi magna, penatibus et magniseget dis parturient montes sed quia consequuntur magni dolores eos qui ratione.
                                    </p>
                                    <Link to="/single-post" className="btn btn-dafault btn-details">Continue Reading</Link>
                                </div>
                                
                            </article>
                        </div>
                        <div className="col-md-4">
                            <div className="sidebar">
                                <div className="search widget">
                                    <form action="" method="get" className="searchform" role="search">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Search for..." />
                                            <span className="input-group-btn">
                                                <button className="btn btn-default" type="button"> <i className="ion-search"></i> </button>
                                            </span>
                                        </div>
                                    </form>
                                </div>
                                <div className="author widget">
                                    <img className="img-responsive" src="images/author/author-bg.jpg" alt="" />
                                    <div className="author-body text-center">
                                        <div className="author-img">
                                            <img src="images/author/author.jpg" alt="" />
                                        </div>
                                        <div className="author-bio">
                                            <h3>Jonathon Andrew</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magnam asperiores consectetur, corporis ullam impedit.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="categories widget">
                                    <h3 className="widget-head">Categories</h3>
                                    <ul>
                                        <li>
                                            <a href="/">Audio</a> <span className="badge">1</span>
                                        </li>
                                        <li>
                                            <a href="/">Gallery</a> <span className="badge">2</span>
                                        </li>
                                        <li>
                                            <a href="/">Image</a> <span className="badge">4</span>
                                        </li>
                                        <li>
                                            <a href="/">Standard</a> <span className="badge">2</span>
                                        </li>
                                        <li>
                                            <a href="/">Status</a> <span className="badge">3</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="recent-post widget">
                                    <h3>Recent Posts</h3>
                                    <ul>
                                        <li>
                                            <a href="/">Corporate meeting turns into a photoshooting.</a><br />
                                            <time>16 May, 2015</time>
                                        </li>
                                        <li>
                                            <a href="/">Statistics,analysis. The key to succes.</a><br />
                                            <time>15 May, 2015</time>
                                        </li>
                                        <li>
                                            <a href="/">Blog post without image, only text.</a><br />
                                            <time>14 May, 2015</time>
                                        </li>
                                        <li>
                                            <a href="/">Blog post with audio player. Share your creations.</a><br />
                                            <time>14 May, 2015</time>
                                        </li>
                                        <li>
                                            <a href="/">Blog post with classNameic Youtbube player.</a><br />
                                            <time>12 May, 2015</time>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Blog