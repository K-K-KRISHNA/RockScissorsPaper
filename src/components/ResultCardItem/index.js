import {ResultCard} from './styledComponents'

const ResultCardItem = props => {
  const {item, altText} = props
  const {imageUrl} = item

  console.log(altText)
  return <ResultCard src={imageUrl} alt={altText} />
}

export default ResultCardItem
