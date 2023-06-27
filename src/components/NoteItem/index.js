import {Item, Title, Description} from './styledComponents'

const NoteItem = props => {
  const {notesDetails} = props
  const {title, note} = notesDetails
  return (
    <Item>
      <Title>{title}</Title>
      <Description>{note}</Description>
    </Item>
  )
}

export default NoteItem
