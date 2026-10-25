import { Fragment } from 'react'

export default function PillGroup({ name, options, value, onChange }) {
  return (
    <div className="filters">
      {options.map((option) => {
        const id = `${name}-${option.toLowerCase()}`
        return (
          <Fragment key={option}>
            <input
              type="radio"
              name={name}
              id={id}
              checked={value === option}
              onChange={() => onChange(option)}
            />
            <label htmlFor={id} className="pill">{option}</label>
          </Fragment>
        )
      })}
    </div>
  )
}
