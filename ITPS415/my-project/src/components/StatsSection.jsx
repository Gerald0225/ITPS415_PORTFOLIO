import Icon from './Icon'

export default function StatsSection({ stats }) {
  return (
    <section className="stats-panel reveal" aria-label="Portfolio statistics">
      {stats.map((stat) => (
        <div className="stat" key={stat.label}>
          <Icon name={stat.icon} className="stat-icon" />
          <strong>{stat.value}</strong>
          <span>{stat.label}</span>
        </div>
      ))}
    </section>
  )
}
