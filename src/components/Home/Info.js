import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story"></Title>
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
              reiciendis provident, laudantium numquam harum vitae itaque
              repellat? Numquam mollitia dicta harum. Eum beatae tempora
              exercitationem optio accusantium laborum saepe? Iusto officia ad
              architecto quia voluptates reprehenderit blanditiis id accusantium
              tempore mollitia, non consequuntur praesentium consectetur enim
              asperiores ratione voluptate, porro a voluptatibus, eveniet in.
              Dicta tenetur repudiandae reiciendis modi ipsam minima, sed id,
              vero, ullam assumenda debitis fuga. Libero magni laboriosam
              placeat officiis saepe, sapiente adipisci, animi eaque culpa
              nesciunt quam nemo alias nobis ab, incidunt mollitia dolor quos
              repellat quasi eius. Praesentium alias a incidunt debitis laborum
              cum nam.
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
