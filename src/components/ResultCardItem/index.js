import {ResultCard} from './styledComponents'

const ResultCardItem = props => {
  const {item} = props

  const {imageUrl} = item
  // console.log(altText)
  return <ResultCard src={imageUrl} alt="your choice" />
}

export default ResultCardItem
