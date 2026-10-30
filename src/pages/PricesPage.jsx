import { Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import { useLanguage } from "../i18n/LanguageContext.jsx";

export default function PricesPage() {
  const { t } = useLanguage();
  const p = t.pricesPage;

  return (
    <>
      <PageHero eyebrow={p.eyebrow} title={p.title} subtitle={p.subtitle} />

      <section className="page-section">
        <div className="container price-list">
          {p.categories.map((category) => (
            <article className="price-category" key={category.id} id={category.id}>
              <div className="price-category-head">
                <h2>{category.title}</h2>
                <Link to="/contact" className="btn btn-outline">
                  {t.common.requestQuote}
                </Link>
              </div>

              <div className="price-rows">
                {category.rows.map((row) => (
                  <div className="price-row" key={row.item}>
                    <p className="price-row-item">{row.item}</p>
                    <div
                      className={`price-row-values${
                        category.singleColumn ? " price-row-values--single" : ""
                      }`}
                    >
                      <div className="price-row-value">
                        {category.colA ? (
                          <span className="price-row-label">{category.colA}</span>
                        ) : null}
                        <strong>{row.a}</strong>
                      </div>
                      {!category.singleColumn ? (
                        <div className="price-row-value">
                          {category.colB ? (
                            <span className="price-row-label">{category.colB}</span>
                          ) : null}
                          <strong>{row.b}</strong>
                        </div>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}

          <div className="pricing-warning" role="note">
            <span className="pricing-warning-mark" aria-hidden="true">
              !
            </span>
            <p>{p.warning}</p>
          </div>

          <div className="pricing-footnote">
            <p>{p.footnote}</p>
          </div>
        </div>
      </section>

      <section className="page-section page-section--soft">
        <div className="container faq-block">
          <h2 className="section-title">{p.faqTitle}</h2>
          <div className="faq-grid">
            {p.faqs.map((item) => (
              <article key={item.q}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
