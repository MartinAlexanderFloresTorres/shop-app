const Flex = ({
  className,
  padding,
  width,
  gap,
  flexWrap,
  justifyContent,
  alignItems,
  children,
  marginTop,
  marginRight,
  marginLeft,
  marginBottom,
  flexDirection,
  ...props
}) => {
  return (
    <div
      className={className}
      style={{
        display: 'flex',
        gap,
        flexWrap,
        width,
        justifyContent,
        alignItems,
        padding,
        marginTop,
        marginRight,
        marginLeft,
        marginBottom,
        flexDirection
      }}
      {...props}
    >
      {children}
    </div>
  )
}

Flex.defaultProps = {
  className: '',
  width: 'auto',
  gap: '0',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0',
  marginTop: '0',
  marginRight: '0',
  marginLeft: '0',
  marginBottom: '0',
  flexDirection: 'row'
}

export default Flex
