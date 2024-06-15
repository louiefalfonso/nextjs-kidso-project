import Link from "next/link";

export const Breadcrumbs = ({ breadcrumbTitle }) => {
  return (
    <>
      <div
        className="breadcrumb-area d-flex align-items-center"
        style={{ backgroundImage: "url(img/bg/bdrc-bg.jpg)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-12 col-lg-12">
              <div className="breadcrumb-wrap text-left">
                <div className="breadcrumb-title">
                  <h2>{breadcrumbTitle}</h2>
                  <div className="breadcrumb-wrap">
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <Link href="/">Home</Link>
                        </li>
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          {breadcrumbTitle}
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};