const Container = ({
  marginTop,
  marginBottom,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  padding,
  children
}) => {
  return (
    <section
      className='container'
      style={{
        marginTop,
        marginBottom,

        paddingTop,
        paddingBottom,
        paddingLeft,
        paddingRight,
        padding
      }}
    >
      {children}
    </section>
  )
}

Container.defaultProps = {
  marginTop: 0,
  marginBottom: 0,
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0,
  padding: 0
}

export default Container
