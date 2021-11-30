import { useEffect, useState } from 'react'

const useFilter = ({ element, setElement }) => {
  const [text, setText] = useState('')
  const [select, setSelect] = useState('')
  const [storageElement, setStorageElement] = useState(null)

  useEffect(() => {
    if (!storageElement) setStorageElement([...element])
    else {
      setElement &&
        setElement(() => {
          const filterElement = storageElement?.filter((elm) => {
            const categoryExist = select ? elm.category === select : true
            const startWithText = elm?.name
              ?.toLowerCase()
              .startsWith(text.toLowerCase().trim())
            return categoryExist && startWithText
          })
          return filterElement
        })
    }
  }, [text, select, setElement, storageElement])

  return {
    textValue: text,
    selectValue: select,
    setText,
    setSelect
  }
}

export default useFilter
