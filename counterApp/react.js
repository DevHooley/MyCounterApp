function Counter() {
  let [count, setCount] = React.useState(0)

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )

  // return React.createElement('div', {},
  //   React.createElement('p', null, `count: ${count}`),
  //   React.createElement('button', { onClick: () => setCount(count => count + 1)}, 'Click me')
  // )
}