import {Card, Button} from './styledComponents'

const CardItem = props => {
  const {testid} = props
  const {onUserClick, item} = props
  const {id, imageUrl} = item
  const tempClick = () => {
    onUserClick(item)
  }
  return (
    <Button data-testid={testid} onClick={tempClick}>
      <Card src={imageUrl} alt={id} />
    </Button>
  )
}

export default CardItem
