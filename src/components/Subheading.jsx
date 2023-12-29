import Text from './Text'

const Subheading = ({ color, fontSize, fontWeight, style, ...props }) => {
  return (
    <Text
      fontSize='subheading'
      fontWeight='bold'
      {...props}
      style={style}
      color={color}
    />
  );
}

export default Subheading