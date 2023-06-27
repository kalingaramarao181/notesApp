import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: white;
  font-family: 'Roboto';
  height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`

export const Heading = styled.h1`
  font-family: 'Bree Serif';
  font-size: 24px;
  font-weight: 500;
  color: #4c63b6;
`
export const Form = styled.form`
  box-shadow: 2px 2px 1px 2px #888888;
  border-radius: 10px;
  width: 80vw;
  padding: 15px;
  display: flex;
  flex-direction: column;
`

export const TitleInput = styled.input`
  border-width: 0px;
  font-family: 'Roboto';
  padding: 5px;
  margin-bottom: 10px;
`

export const DescriptionTextarea = styled.textarea`
  border-width: 0px;
  font-family: 'Roboto';
  padding: 5px;
  margin-bottom: 10px;
`

export const AddButton = styled.button`
  background-color: #4c63b6;
  border-width: 0px;
  border-radius: 5px;
  padding: 10px;
  font-family: 'Roboto';
  color: white;
  align-self: flex-end;
`

export const Card = styled.div`
  box-shadow: 2px 2px 1px 2px #888888;
  border-radius: 10px;
  width: 80vw;
  padding: 15px;
`

export const UnorderedList = styled.ul`
  margin-left: 0px;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
`

export const CardImage = styled.img`
  height: 100px;
`

export const NonTitle = styled.h1`
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 500;
`

export const NonDescription = styled.p`
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 500;
`

export const BottomContainer = styled.div`
  border-radius: 10px;
  width: 80vw;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
