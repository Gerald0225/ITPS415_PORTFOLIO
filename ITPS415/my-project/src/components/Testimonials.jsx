import Icon from './Icon'

export default function Testimonials({ testimonials }) {
  if (!testimonials.length) return null

  return (
    <section aria-labelledby="testimonials-title">
      <div className="section-heading">
        <h2 className="section-label" id="testimonials-title">
          Testimonials
        </h2>
      </div>
      <div className="testimonial-grid">
        {testimonials.map((testimonial) => (
          <article className="testimonial" key={testimonial.author}>
            <Icon name="quote" />
            <blockquote>{testimonial.quote}</blockquote>
            <p>
              {testimonial.author} / {testimonial.role}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
