import { useCallback, useEffect, useState } from 'react'

const useFilter = ({
  textFilter = 'name',
  secontText = 'title',
  selectFilter = 'category'
} = {}) => {
  const [text, setText] = useState('')
  const [select, setSelect] = useState('')
  const [element, setElement] = useState([])
  const [storageElement, setStorageElement] = useState([])

  useEffect(() => {
    setElement &&
      setElement(() => {
        const filterElement = storageElement?.filter((elm) => {
          const fixedText = text.toLowerCase().trim()
          const categoryExist = select ? elm[selectFilter] === select : true
          const startNameWithText = elm[textFilter]
            ?.toLowerCase()
            .match(fixedText)
          const startTitleWithText = elm[secontText]
            ?.toLowerCase()
            .match(fixedText)
          return categoryExist && (startNameWithText || startTitleWithText)
        })
        return filterElement
      })
    // eslint-disable-next-line
  }, [text, select])

  const handleChangeText = (e) => setText(e.target.value)

  const handleChangeSelect = (e) => setSelect(e.target.value)

  const handlerSetInitialElement = useCallback((elm = []) => {
    setStorageElement([...elm])
    setElement(elm)
  }, [])

  return {
    textValue: text,
    selectValue: select,
    element,
    handleChangeText,
    handleChangeSelect,
    handlerSetInitialElement
  }
}

export default useFilter
