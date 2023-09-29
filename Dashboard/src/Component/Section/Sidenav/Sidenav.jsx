import { Link } from "react-router-dom";

function Sidenav() {
    return (
        <>
            <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion" style={{background:"#866c39"}}>
                <div className="sb-sidenav-menu">
                    <div className="nav">
                        <div className="sb-sidenav-menu-heading text-light">control Board</div>
                        <Link to='/' className="nav-link text-light"><div className="sb-nav-link-icon text-light"><i className="fas fa-tachometer-alt"></i></div> Dashboard</Link>
                      

                        {/* <!-- Start Users tables  --> */}
                        <a className="nav-link collapsed text-light" href="#" data-bs-toggle="collapse" data-bs-target="#collapseUsers"
                            aria-expanded="false" aria-controls="collapseUsers">
                            <div className="sb-nav-link-icon text-light"><svg className="svg-inline--fa fa-table" aria-hidden="true"
                                focusable="false" data-prefix="fas" data-icon="table" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                                <path fill="currentColor" d="M448 32C483.3 32 512 60.65 512
                                            96V416C512 451.3 483.3 480 448
                                            480H64C28.65 480 0 451.3 0 416V96C0
                                            60.65 28.65 32 64 32H448zM224
                                            256V160H64V256H224zM64
                                            320V416H224V320H64zM288
                                            416H448V320H288V416zM448
                                            256V160H288V256H448z">
                                </path>
                            </svg></div> Users tables
                            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                        </a>
                        <div className="collapse" id="collapseUsers" aria-labelledby="headingOne"
                            data-bs-parent="#sidenavAccordion">
                            <nav className="sb-sidenav-menu-nested nav">
                                <Link to='/TableUsers' className="nav-link text-light">Users</Link>
                                <Link to='/TableAdmin' className="nav-link text-light">Admin</Link>
                            </nav>
                        </div>
                        {/* <!-- End Users tables  --> */}




                        <div className="sb-sidenav-menu-heading text-light">CONTROL
                            INTERFACES</div>
                        {/* <!-- Start tables Shops  --> */}
                        <a className="nav-link collapsed text-light" href="#" data-bs-toggle="collapse"
                            data-bs-target="#collapseShops" aria-expanded="false" aria-controls="collapseShops">
                            <div className="sb-nav-link-icon"><svg className="svg-inline--fa fa-table text-light" aria-hidden="true"
                                focusable="false" data-prefix="fas" data-icon="table" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                                <path fill="currentColor" d="M448 32C483.3 32 512 60.65 512
                                            96V416C512 451.3 483.3 480 448
                                            480H64C28.65 480 0 451.3 0 416V96C0
                                            60.65 28.65 32 64 32H448zM224
                                            256V160H64V256H224zM64
                                            320V416H224V320H64zM288
                                            416H448V320H288V416zM448
                                            256V160H288V256H448z">
                                </path>
                            </svg></div> Product
                            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                        </a>
                        <div className="collapse" id="collapseShops" aria-labelledby="headingOne"
                            data-bs-parent="#sidenavAccordion">
                            <nav className="sb-sidenav-menu-nested nav">

                                <Link to='/AddProduct' className="nav-link text-light">Add Product</Link>
                                <Link to='/Product' className="nav-link text-light">Products list</Link>
                              
                          

                            </nav>
                        </div>
                        {/* <!-- End tables Shops  --> */}

                             
                        {/* <!-- Start tables Shops  --> */}
                        <a className="nav-link collapsed text-light text-light" href="#" data-bs-toggle="collapse"
                            data-bs-target="#collapseCategory" aria-expanded="false" aria-controls="collapseCategory">
                            <div className="sb-nav-link-icon"><svg className="svg-inline--fa fa-table text-light text-light" aria-hidden="true"
                                focusable="false" data-prefix="fas" data-icon="table" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                                <path fill="currentColor" d="M448 32C483.3 32 512 60.65 512
                                            96V416C512 451.3 483.3 480 448
                                            480H64C28.65 480 0 451.3 0 416V96C0
                                            60.65 28.65 32 64 32H448zM224
                                            256V160H64V256H224zM64
                                            320V416H224V320H64zM288
                                            416H448V320H288V416zM448
                                            256V160H288V256H448z">
                                </path>
                            </svg></div> Category
                            <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                        </a>
                        <div className="collapse" id="collapseCategory" aria-labelledby="headingOne"
                            data-bs-parent="#sidenavAccordion">
                            <nav className="sb-sidenav-menu-nested nav">

                                            <Link to='/AddCategory' className="nav-link text-light">Add Category</Link>
                                            <Link to='/Category' className="nav-link text-light">Category</Link>
                                
                            </nav>
                        </div>
                            {/*  */}
                        <Link to='/CreateAccount' className="nav-link text-light">
                            <div className="sb-nav-link-icon text-light">
                                <i className="fas fa-chart-area "></i>
                            </div>
                            Create Account
                        </Link>

                        <Link to='/resetPassword' className="nav-link text-light">
                            <div className="sb-nav-link-icon text-light">
                                <i className="fas fa-chart-area "></i>
                            </div>
                            Reset Password
                        </Link>


                    </div>
                </div >
            </nav >
        </>
    )
}

export default Sidenav
