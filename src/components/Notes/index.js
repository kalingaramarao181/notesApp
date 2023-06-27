import {v4 as uuidv4} from 'uuid'
import {useState} from 'react'

import NoteItem from '../NoteItem'

import {
  MainContainer,
  Heading,
  Form,
  TitleInput,
  DescriptionTextarea,
  AddButton,
  Card,
  UnorderedList,
  CardImage,
  Description,
  BottomContainer,
  NonDescription,
  NonTitle,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const [notes, setNotes] = useState([])

  const onChangeTitle = event => setTitle(event.target.value)
  const onChangeNote = event => setNote(event.target.value)

  const onSubmitForm = event => {
    event.preventDefault()
    const newNote = {
      id: uuidv4(),
      title,
      note,
    }
    setNotes(prevNotes => [...prevNotes, newNote])
    setTitle('')
    setNote('')
  }

  return (
    <MainContainer>
      <Heading>Notes</Heading>
      <Form onSubmit={onSubmitForm}>
        <TitleInput
          value={title}
          onChange={onChangeTitle}
          placeholder="Title"
        />
        <DescriptionTextarea
          value={note}
          onChange={onChangeNote}
          placeholder="Take a Note..."
        />
        <AddButton type="submit">Add</AddButton>
      </Form>
      {notes.length <= 0 ? (
        <BottomContainer>
          <CardImage
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <NonTitle>No Notes Yet</NonTitle>
          <NonDescription>Notes you add will appear here</NonDescription>
        </BottomContainer>
      ) : (
        <UnorderedList>
          {notes.map(eachItem => (
            <NoteItem notesDetails={eachItem} key={eachItem.id} />
          ))}
        </UnorderedList>
      )}
    </MainContainer>
  )
}

export default Notes
