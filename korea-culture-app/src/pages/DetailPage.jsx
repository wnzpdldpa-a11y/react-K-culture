import React from 'react'
import cultureData from '../cultureData'
import { useParams } from 'react-router-dom'

function DetailPage() {
    const { id } = useParams()
    const content = cultureData.find(ITEM => ITEM.ID === Number(id))
    const params = useParams();
    //console.log(params.id)

    /* const content = cultureData.find(item => item.id === Number(id)) */
    return (
        <section className="detail-page">
            <article className="detail-hero"></article>

            <div className="inner">
                <figure className="detail-thimb">
                    <img src={content.image} alt={content.title} />
                </figure>
                <div className="detail-text">
                    <span className="detail-category">
                        {content.category}
                    </span>
                    <h2>{content.title}</h2>
                    <p className="detail-short">{content.shortDesc}</p>
                    <p className="detail-desc">{content.desc}</p>
                </div>
            </div>
        </section>
    )
}

export default DetailPage